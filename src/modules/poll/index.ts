import autobind from 'autobind-decorator';
import Message from '@/message';
import Module from '@/module';
import serifs from '@/serifs';
import { genItem } from '@/vocabulary';
import config from '@/config';
import { Note } from '@/misskey/note';

export default class extends Module {
	public readonly name = 'poll';

	@autobind
	public install() {
		setInterval(() => {
			if (Math.random() < 0.1) {
				this.post();
			}
		}, 1000 * 60 * 60);

		return {
			mentionHook: this.mentionHook,
			timeoutCallback: this.timeoutCallback,
		};
	}

	@autobind
	private async post() {
		const duration = 1000 * 60 * 15;

		const polls = [ // TODO: Extract serif
			['不寻常的事情', '您认为哪一个是最不寻常的？'],
			['美味', '您觉得哪一个最美味？'],
			['看起来很重', '您觉得哪一个最重？'],
			['我想要什么', '您最想要哪一个？'],
			['您想带去荒岛的东西', '如果您能带一样东西去荒岛, 您会带哪一样？'],
			['您想用什么来装饰您的房子', '您会选择用哪一种来装饰您的房子？'],
			['会卖得好的东西', '您认为哪种东西最好卖？'],
			['您想看到什么掉下来', '您想看到什么从天上掉下来？'],
			['您想带什么', '您想带哪一个？'],
			['您想拥有什么产品', '您想拥有哪一种产品？'],
			['可能被发掘的东西', '您认为哪些东西会从废墟中发掘出来？'],
			['好闻的东西', '您觉得哪种最香？'],
			['您认为哪一个能卖出最高的价格', '您认为哪一个能卖出最高的价格？'],
			['您认为什么东西可能在地球轨道上', '您认为什么东西可能在地球轨道上漂移？'],
			['我想送您的东西', '如果您能送我一件礼物, 您会送哪一件？'],
			['您想得到什么礼物', '如果您要收到礼物, 您会是什么礼物？'],
			['我可能拥有的东西', '您们都认为我可能拥有哪些东西？'],
			['您们认为什么会受欢迎', '您们都认为哪一个会受欢迎？'] ,
			['早餐', '以下哪种早餐您们都想吃？'],
			['午餐', '您想吃哪种午餐？'],
			['晚餐', '您想吃哪种晚餐？'],
			['什么对您有好处', '您认为以下哪种对您有好处？'],
			['您想留给后人的东西', '您想留给后人的以下哪些东西？'],
			['可以用作乐器的东西', '您认为哪些可以用作乐器？'],
			['您想用什么作为味噌汤的配料', '您想用哪一种作为味噌汤的配料？'],
			['您想在米饭上撒什么', '您想在米饭上撒哪一种？'],
			['您经常看到的东西', '您经常看到哪些东西？'],
			['可能掉在路上的东西', '您觉得这些东西哪些会掉在路边？'],
			['您可能在博物馆里找到的东西', '您认为您可能在博物馆里找到哪些东西？'],
			['您可能在教室里找到的东西', '您认为您可能在教室里找到哪些东西？'],
			['您想做什么表情符号', '您想做以下哪种表情符号？'],
			['喵窝里可能有的东西', '您认为这些东西中哪些可能在喵窝里？'],
			['可燃垃圾', '您们认为以下哪些是可燃垃圾？'],
			['最喜欢的饭团馅', '您最喜欢的饭团馅是什么？'],
		];

		const poll = polls[Math.floor(Math.random() * polls.length)];

		const choices = [
			genItem(),
			genItem(),
			genItem(),
			genItem(),
		];

		const note = await this.ai.post({
			text: poll[1],
			poll: {
				choices,
				expiredAfter: duration,
				multiple: false,
			}
		});

		// タイマーセット
		this.setTimeoutWithPersistence(duration + 3000, {
			title: poll[0],
			noteId: note.id,
		});
	}

	@autobind
	private async mentionHook(msg: Message) {
		if (!msg.or(['/poll']) || msg.user.username !== config.master) {
			return false;
		} else {
			this.log('Manualy poll requested');
		}

		this.post();

		return true;
	}

	@autobind
	private async timeoutCallback({ title, noteId }) {
		const note: Note = await this.ai.api('notes/show', { noteId });

		const choices = note.poll!.choices;

		let mostVotedChoice;

		for (const choice of choices) {
			if (mostVotedChoice == null) {
				mostVotedChoice = choice;
				continue;
			}

			if (choice.votes > mostVotedChoice.votes) {
				mostVotedChoice = choice;
			}
		}

		const mostVotedChoices = choices.filter(choice => choice.votes === mostVotedChoice.votes);

		if (mostVotedChoice.votes === 0) {
			this.ai.post({ // TODO: Extract serif
				text: '没有人投票欸',
				renoteId: noteId,
			});
		} else if (mostVotedChoices.length === 1) {
			this.ai.post({ // TODO: Extract serif
				cw: `${title}投票结果发表！`,
				text: `结果是${mostVotedChoice.votes}票的「${mostVotedChoice.text}」胜出！`,
				renoteId: noteId,
			});
		} else {
			const choices = mostVotedChoices.map(choice => `「${choice.text}」`).join('和');
			this.ai.post({ // TODO: Extract serif
				cw: `${title}投票结果发表！`,
				text: `結果は${mostVotedChoice.votes}票的${choices}胜出！`,
				renoteId: noteId,
			});
		}
	}
}
