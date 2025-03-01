import autobind from 'autobind-decorator';
import Module from '@/module';
import Friend from '@/friend';
import serifs from '@/serifs';

export default class extends Module {
	public readonly name = 'valentine';

	@autobind
	public install() {
		this.crawleValentine();
		setInterval(this.crawleValentine, 1000 * 60 * 3);

		return {};
	}

	/**
	 * 巧克力分发
	 */
	@autobind
	private crawleValentine() {
		const now = new Date();

		const isValentine = now.getMonth() == 1 && now.getDate() == 14;
		if (!isValentine) return;

		const date = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;

		const friends = this.ai.friends.find({} as any);

		friends.forEach(f => {
			const friend = new Friend(this.ai, { doc: f });

			// 好感度要 >= 7
			if (friend.love < 7) return;

			const data = friend.getPerModulesData(this);

			if (data.lastChocolated == date) return;

			data.lastChocolated = date;
			friend.setPerModulesData(this, data);

			const text = serifs.valentine.chocolateForYou(friend.name);

			this.ai.sendMessage(friend.userId, {
				text: text
			});
		});
	}
}
