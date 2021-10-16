import autobind from 'autobind-decorator';
import Module from '@/module';
import Message from '@/message';
import serifs from '@/serifs';
import * as seedrandom from 'seedrandom';
import { genItem } from '@/vocabulary';

export const blessing = [
	'喵吉',
	'Yotta吉',
	'Zetta吉',
	'Exa吉',
	'Peta吉',
	'Tera吉',
	'Giga吉',
	'Mega吉',
	'Kilo吉',
	'Hecto吉',
	'Deca吉',
	'Deci吉',
	'Centi吉',
	'Milli吉',
	'Micro吉',
	'Nano吉',
	'Pico吉',
	'Femto吉',
	'Atto吉',
	'Zepto吉',
	'Yocto吉',
];

export default class extends Module {
	public readonly name = 'fortune';

	@autobind
	public install() {
		return {
			mentionHook: this.mentionHook
		};
	}

	@autobind
	private async mentionHook(msg: Message) {
		if (msg.includes(['占卜', '运气', '运势'])) {
			const date = new Date();
			const seed = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}@${msg.userId}`;
			const rng = seedrandom(seed);
			const omikuji = blessing[Math.floor(rng() * blessing.length)];
			const item = genItem(rng);
			msg.reply(`**${omikuji}🎉**\n吉祥物是: ${item}`, {
				cw: serifs.fortune.cw(msg.friend.name)
			});
			return true;
		} else {
			return false;
		}
	}
}
