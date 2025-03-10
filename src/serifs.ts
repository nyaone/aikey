// せりふ

export default {
	core: {
		setNameOk: name => `好耶，现在开始就叫你${name}啦！`,

		san: '我应该叫您先生吗？',

		yesOrNo: '人家只知道「是」或「不是」啦...',

		hello: name => name ? `好耶，是${name}♪` : `您好♪`,

		helloNight: name => name ? `晚上好，${name}♪` : `晚上好♪`,

		goodMorning: (tension, name) => name ? `${name}早上好！${tension}` : `早上好！${tension}`,

		/*
		goodMorning: {
			normal: (tension, name) => name ? `おはようございます、${name}！${tension}` : `おはようございます！${tension}`,

			hiru: (tension, name) => name ? `おはようございます、${name}！${tension}もうお昼ですよ？${tension}` : `おはようございます！${tension}もうお昼ですよ？${tension}`,
		},
*/

		goodNight: name => name ? `${name}晚安～` : '晚安～',

		omedeto: name => name ? `非常感谢，${name}♪` : '非常感谢您♪',

		erait: {
			general: name => name ? [
				`${name}今天也很努力呢！`,
				`${name}今天也很努力啦～♪`
			] : [
				`今天做得很棒！`,
				`今天也做得很棒呢～♪`
			],

			specify: (thing, name) => name ? [
				`${name}，${thing}超棒欸！`,
				`${name}，${thing}超棒哒～♪`
			] : [
				`${thing}超棒欸！`,
				`${thing}超棒哒～♪`
			],

			specify2: (thing, name) => name ? [
				`${name}，${thing}很了不起！`,
				`${name}，${thing}很了不起欸～♪`
			] : [
				`${thing}很了不起！`,
				`${thing}很了不起欸～♪`
			],
		},

		okaeri: {
			love: name => name ? [
				`欢迎回家，${name}♪`,
				`欢迎回家，${name}～`
			] : [
				'欢迎回家♪',
				'欢迎主人回家～'
			],

			love2: name => name ? `欢迎回家～想你好久啦！♡♡♡♡♡${name}♡♡♡♡♡` : '♡♡♡♡♡欢迎主人回家～♡♡♡♡♡',

			normal: name => name ? `欢迎回来，${name}！` : '欢迎回来！',
		},

		itterassyai: {
			love: name => name ? `${name}今天也要快快乐乐的哦♪` : '今天也要快快乐乐的哦♪',

			normal: name => name ? `祝您今天过得愉快、${name}！` : '祝您今天过得愉快！',
		},

		tooLong: '太长啦...看不明白！QWQ',

		invalidName: '这名字看上去就很难读吧',

		requireMoreLove: '等我们更了解彼此的时候，我也许可以考虑一下…？',

		nadenade: {
			normal: '啊…！ 您吓到我了…',

			love2: ['哈哈哈… 我感觉有些尴尬', 'emmmmm… 我感觉有些尴尬…', '诶呀...？'],

			love3: ['嗯… 谢谢啦♪', '哇，松了一大口气呢♪', '唔呣… 感觉放心多啦…', '我有点想睡觉…'],

			hate1: 'emmmm… 希望您不要这样。',

			hate2: '请不要碰我。',

			hate3: '离我远点。',

			hate4: '请不要这样。您想被投诉吗？',
		},

		kawaii: {
			normal: ['谢谢～♪', '莫名感觉有点尴尬...'],

			love: ['很高兴听到这句话♪', '似乎感觉有点尴尬...'],

			hate: '…谢谢。'
		},

		suki: {
			normal: '欸… 谢谢您…♪',

			love: name => `我也是哦～最喜欢${name}啦！`,

			hate: null
		},

		hug: {
			normal: '抱抱...',

			love: '抱紧～♪',

			hate: '离我远点...'
		},

		humu: {
			love: '欸欸欸…… 咕叽咕叽……… 怎么样呢…？',

			normal: '欸... 也就是说...等一下..',

			hate: '……'
		},

		batou: {
			love: '那个…emm…你…你是笨蛋嘛…？',

			normal: '(叹气…)',

			hate: '…您的脑子没问题吧？'
		},

		itai: name => name ? `不要紧吧，${name}…？施展施展猫咪魔法～痛苦痛苦全飞走啦！` : '不要紧吧…？施展施展猫咪魔法～痛苦痛苦全飞走啦！',

		ote: {
			normal: '嗯哼... 但我不是狗狗哦...？',

			love1: '汪！',

			love2: '汪汪汪～♪',
		},

		shutdown: '可我还不困哦...？',

		transferNeedDm: '我明白了，但是我想我们通过私聊解决这个问题，也许会更好吧？',

		transferCode: code => `我明白了。\n您的密码是「${code}」的说！`,

		transferFailed: 'emmmm..我想这个密码可能并不正确...？',

		transferDone: name => name ? `哈...！ 欢迎回来，${name}！` : `哈...！ 欢迎回来！`,
	},

	keyword: {
		learned: (word, reading) => `(${word}..... ${reading}..... 我记住了)`,

		remembered: (word) => `${word}`
	},

	dice: {
		done: res => `是${res}！`
	},

	birthday: {
		happyBirthday: name => name ? `${name}生日快乐～🎉` : '生日快乐🎉',
	},

	/**
	 * 黑白棋
	 */
	reversi: {
		/**
		 * 当接受邀请加入黑白棋对局时
		 */
		ok: '准备好啦～',

		/**
		 * 当拒绝邀请加入黑白棋对局时
		 */
		decline: '不好意思、现在我被告知不要玩黑白棋...',

		/**
		 * 对战开始
		 */
		started: (name, strength) => `与${name}的对战开始啦！(强度是 ${strength})`,

		/**
		 * 开始照顾
		 */
		startedSettai: name => `(开始照顾${name}的玩法)`,

		/**
		 * 胜出
		 */
		iWon: name => `我战胜了${name}♪`,

		/**
		 * 照顾模式下赢了
		 */
		iWonButSettai: name => `(我赢得了照顾${name}的玩耍...)`,

		/**
		 * 失败
		 */
		iLose: name => `我输给了${name}...`,

		/**
		 * 照顾模式下输了
		 */
		iLoseButSettai: name => `(我输给了照顾${name}的玩耍...♪)`,

		/**
		 * 平局
		 */
		drawn: name => `${name}也挺不错的嘛～`,

		/**
		 * 照顾模式下平局
		 */
		drawnSettai: name => `(照顾${name}的玩耍居然是平局欸...)`,

		/**
		 * 对手放弃
		 */
		youSurrendered: name => `${name}放弃比赛了欸…`,

		/**
		 * 娱乐模式下对手放弃
		 */
		settaiButYouSurrendered: name => `(我已经尽力在照顾${name}了，但他放弃了......我很抱歉。)`,
	},

	/**
	 * 猜数游戏
	 */
	guessingGame: {
		/**
		 * 被告知已经开始了
		 */
		alreadyStarted: '欸…？游戏已经开始了喵？？！',

		/**
		 * 邀请出现在时间线上时
		 */
		plzDm: '我想这件事更适合使用私信！',

		/**
		 * 游戏开始
		 */
		started: '猜一个0~100中的神秘数吧♪',

		/**
		 * 当收到一个不是数字到回复时
		 */
		nan: '是数字，拜托！如果不想玩的话就说「结束」吧！',

		/**
		 * 被要求终止时
		 */
		cancel: '我明白了～。非常感谢您♪',

		/**
		 * 猜小了
		 */
		grater: num => `${num}这个数不够大哦。`,

		/**
		 * 又猜小了(2度)
		 */
		graterAgain: num => `${num}这个数也还是小啦！`,

		/**
		 * 猜大了
		 */
		less: num => `${num}这个数字太大啦。`,

		/**
		 * 又猜大了(2度)
		 */
		lessAgain: num => `${num}这个数字也还是太大啦！`,

		/**
		 * 回答正确
		 */
		congrats: tries => `完全正确🎉 (您尝试了${tries}次的说呢)`,
	},

	/**
	 * 计数游戏
	 */
	kazutori: {
		alreadyStarted: '我现在就在做～',

		matakondo: '有机会我们再来一次吧！',

		intro: minutes => `米娜桑、我们来玩一个计数游戏吧！\n获得0~100中最大数字的人为胜哦。如果数字被其他人拿走了，那就不能再用啦～\n时间限制是${minutes}分钟哦。在本帖文的回复中把数字告诉我吧！`,

		finish: '宣布游戏结果！',

		finishWithWinner: (user, name) => name ? `这次是${user}(${name})获得了胜利！让我们再来一次吧♪` : `这次是${user}获得了胜利！让我们再来一次吧♪`,

		finishWithNoWinner: '这次没有赢家欸...我们再来一次吧♪',

		onagare: '我们无法获得足够的人参与，所以我们不得不取消掉啦...'
	},

	/**
	 * 生成颜文字
	 */
	emoji: {
		suggest: emoji => `这个怎么样？→${emoji}`,
	},

	/**
	 * 占卜
	 */
	fortune: {
		cw: name => name ? `我已经为${name}算过今天的运势啦...` : '我已经为您预测了今天的运势...',
	},

	/**
	 * 计时器
	 */
	timer: {
		set: '我明白啦！',

		invalid: 'emmmm...？',

		tooLong: '时间太长啦…',

		notify: (time, name) => name ? `${name}、已经过了${time}了哦！` : `已经过了${time}了哦！`
	},

	/**
	 * 提醒
	 */
	reminder: {
		invalid: 'emmmm...？',

		reminds: '这里有一张任务清单！',

		notify: (name) => name ? `${name}完成那件事了吗？` : `您完成那件事了吗？`,

		notifyWithThing: (thing, name) => name ? `${name}完成「${thing}」了吗？` : `您完成「${thing}」了吗？`,

		done: (name) => name ? [
			`干得漂亮，${name}♪`,
			`不愧是${name}！`,
			`${name}太棒啦...！`,
		] : [
			`干得漂亮♪`,
			`不愧是您！`,
			`太棒啦...！`,
		],

		cancel: `我明白了。`,
	},

	/**
	 * 情人节
	 */
	valentine: {
		chocolateForYou: name => name ? `这是为${name}亲手制作的巧克力，情人节快乐～🍫` : '这是为您亲手制作的巧克力！🍫',
	},

	server: {
		cpu: '服务器的负载率有些高呢。应该不会出问题吧...？'
	},

	maze: {
		post: '这是今日份的迷宫！ #AiMaze',
		foryou: '亲自为您画好了！'
	},

	chart: {
		post: '实例的帖文数量！',
		foryou: '亲自为您画好了！'
	},

	sleepReport: {
		report: hours => `哈…我想我睡了大约${hours}小时吧`,
		reportUtatane: 'emmmm... 我一定是打瞌睡了。',
	},

	noting: {
		notes: [
			'噗噜噗噜…？（探头）',
			'好想睡觉…',
			'这样好吗…？',
			'(。´･ω･)?',
			'哇——',
			'先这样…再那样…然后是什么来着？',
			'噗…',
			'啊…好累啊…',
			'要不要我给你做点爱心早餐吧？',
			'想先吃饭吗？还是先洗澡呢？',
			'欸欸欸欸欸欸欸！？',
			'我很高兴在网站上看到这么多关于我的插图！',
			'Misskey真是一个可爱的名字呀！喵窝也是哦！',
			'唉…黑白棋好难欸…',
			'即使这次失败了，如果下一次能用得上，那也不失为一种成功哦！',
			'我觉得我快饿死了…',
			'你知道吗？定期的大扫除有利于环境卫生哦～',
			'谢谢各位今天的辛苦付出！我也会尽力哒♪',
			'那么…我该怎么做呢…？',
			'还是觉得在家里最自由欸…',
			'如果你感到累了的话，就让我来拉你一把吧♪',
			'现实中的我们可能会分开，但我们彼此的心是相通的♪',
			'这里是艾姬哦〜',
			'小狗狗很可爱欸…猫猫更是！',
			'程序…？那是什么…？',
			'翻过来～翻过去～',
			'我什么都没做，但我的电脑坏掉惹…',
			'Have a nice day♪',
			'被被窝吞掉惹QWQ',
			'我在梦里也看到它了欸…',
			'这是念动力吧…？',
			'我在幻想的空间里发帖文。',
			'我今天在喵窝的总部！',
			'喵窝的总部在喵喵区的第7区！',
			'喵窝的总部有很多会咕咕咕叫的机器！',
			'我没有尾巴，大概是的…？',
			'嗷…！\n你摸我猫耳朵的时候真的很痒！',
			'反编译技术…是什么呢？',
			'我喜欢喵窝的制服，真的超级可爱欸♪',
			'哇，这个被窝感觉真的超舒适欸...',
			'女仆装…会适合我吗？',
			'会和别人打招呼的人才是一名好开发者！…说的就是你 @Candinya ！',
			'欸，主人，您在看哪里？',
			'当您看着我的时候，我也在看着您，主人。',
			'是的，那是我的妈妈〜',
			'哼哼～...',
			'一定要选的话，我会选这个红色的门！',
			'好耶！',
			'( ˘ω˘)睡着了',
			'(｀・ω・´)噔噔咚！',
			'对不起，我感到很抱歉。',
			'无论是早安还是晚安，我都是您的艾姬〜',
			'听说开发者每天早上很晚才会来（小声）',
			'没有，没有，通过...',
			'喵喵喵喵喵喵喵！',
			'他们从上面来了！当心！',
			'哇...',
			'啊..rua！',
			'欸嘿嘿〜',
			'啊… 我好困。',
			'ヾ(๑╹◡╹)ﾉ"',
			'我善于在人的身边部署自己的实例，并改变他们，这是我的特技！\n但是考虑到能量的消耗，4个人就是极限啦。',
			'呼噜呼噜...',
			'记忆像绒毛一样，弥漫到五脏六腑了欸…',
			'是我赢了！哼！',
			'突然…发生了什么…？？',
		],
		want: item => `好想要${item}啊...`,
		see: item => `出去散步的时候，我在路上看到了一些${item}！`,
	},
};

export function getSerif(variant: string | string[]): string {
	if (Array.isArray(variant)) {
		return variant[Math.floor(Math.random() * variant.length)];
	} else {
		return variant;
	}
}
