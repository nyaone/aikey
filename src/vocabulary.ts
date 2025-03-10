import * as seedrandom from 'seedrandom';

export const itemPrefixes = [
	'铂金制的',
	'信息按的',
	'最新款的',
	'古代的',
	'手工制作的',
	'能用来计时的',
	'传说中的',
	'烧烤的',
	'生的',
	'我亲手制作的',
	'袖珍型的',
	'3天前的',
	'差不多的',
	'假的',
	'二手的',
	'坏掉的',
	'从市场上买来的',
	'定制的',
	'专业的',
	'巨硬制造的',
	'果子制造的',
	'用全人类最先进的技术制造的',
	'2018年制造的', // TODO ランダム
	'500kg的',
	'高级的',
	'腐烂的',
	'搭载有人工智能的',
	'反重力的',
	'可折叠的',
	'便携型的',
	'转基因的',
	'突然变异获得了飞行能力的',
	'纯金制的',
	'透明的',
	'法光的',
	'心形的',
	'会动的',
	'切成两半的',
	'带有USB接口的',
	'古代的',
	'被诅咒的',
	'带有魔法的',
	'装满了一天所需的维生素的',
	'咬的',
	'幻影的',
	'想象中的',
	'原子力的',
	'训练有素的',
	'不是转基因的',
	'在地牢最深处发现的',
	'异世界的',
	'外星球的',
	'神秘的',
	'扭曲时空的',
	'发出奇妙声音的',
	'泡汤了的',
	'发生质变的',
	'撞击后有一定概率会爆炸的',
	'拟态成西葫芦的',
	'假设的',
	'有毒的',
	'是真的',
	'究极的',
	'被巧克力覆盖的',
	'臭气熏天的',
	'4次元的',
	'脉冲的',
	'不可知的',
	'方形的',
	'横冲直撞的',
	'梦里的',
	'阴沉的',
	'黑暗的',
	'被封印的',
	'死去了的',
	'被冰冻的',
	'魔化的',
	'禁断的',
	'全息的',
	'液压的',
	'微辣的',
	'烧焦了的',
	'宇宙的',
	'电子的',
	'阳电子的',
	'量子力学的',
	'薛定谔的',
	'分散型的',
	'次世代的',
	'带电的',
	'史前时代的',
	'支持WiFi的',
	'高回弹力的',
];

export const items = [
	'茄子',
	'番茄',
	'黄瓜',
	'土豆',
	'红烧牛肉面',
	'腰',
	'寿司',
	'南瓜',
	'劝诫',
	'千吧',
	'铝',
	'钠',
	'镁',
	'钚',
	'小勋章',
	'牛奶盒',
	'塑料瓶',
	'饼干',
	'巧克力',
	'女仆装',
	'橙色',
	'膝盖',
	'反物质电容器',
	'粒子加速器',
	'微处理器(4核8线)',
	'核电站',
	'第四层交换机',
	'缓冲链',
	'正电子脑',
	'行星',
	'泰勒明',
	'虫齿车',
	'安装包',
	'斗轮挖掘机',
	'恶魔核心',
	'Game Boy Advance',
	'量子计算机',
	'变形镜头',
	'衣柜里面的神秘生物',
	'智能手机',
	'时钟',
	'布丁',
	'加百列的号角',
	'曼格的海绵',
	'手纺机',
	'超立方体',
	'建筑物',
	'能量饮料',
	'鼠标光标',
	'眼镜',
	'金枪鱼',
	'垃圾桶',
	'牙签',
	'您饭盒里的绿色隔板',
	'分筷子',
	'换风扇',
	'塑料瓶盖',
	'消波块',
	'比萨',
	'牙膏',
	'空罐子',
	'钥匙链',
	'金发碧眼美少女',
	'SD卡',
	'唇膏',
	'无巧克力冠冕',
	'禽流感',
	'自动售货机',
	'重物',
	'笔记本电脑',
	'牛肉干',
	'生锈的奶酪',
	'钻石',
	'对象',
	'月光石',
	'特异点',
	'中子星',
	'液体',
	'卫星',
	'小葫芦',
	'黑的那个',
	'白的那个',
	'红的那个',
	'圆的那个',
	'方形',
	'卡片',
	'气体',
	'铅笔',
	'橡皮擦',
	'藤蔓',
	'棍棒',
	'产生物',
	'金属粘液',
	'章鱼腿',
	'蘑菇',
	'真菌',
	'鲱鱼罐头',
	'指甲钳',
	'耳塞',
	'毛绒玩具',
	'暴龙',
	'尿路结石',
	'回车键',
	'壶',
	'水银',
	'一氧化二氢',
	'水',
	'土地',
	'大陆',
	'骰子',
	'室外机',
	'液压千斤顶',
	'木薯粉',
	'卫生纸芯',
	'纸盒',
	'蜂巢',
	'圆珠笔',
	'机械铅笔',
	'原子',
	'宇宙',
	'基本粒子',
	'芝麻油',
	'鸡蛋饭',
	'暗物质',
	'黑洞',
	'太阳',
	'石英玻璃',
	'水坝',
	'病毒',
	'细菌',
	'拱形混凝土坝',
	'重力混凝土坝',
	'冲洗阀',
	'震振音木',
	'对象',
	'核电站',
	'核反应堆',
	'埃拉托斯特尼的筛子',
	'布劳恩管',
	'塔奇恩',
	"罗素的茶壶",
	'电子设备',
	'TNT',
	'多边形',
	'空气',
	'RTX 3090',
	'自动铅芯',
	'罗塞塔石碑',
	'CapsLock键',
	'虚空',
	'UFO',
	'NumLock键',
	'放射性废物',
	'火星',
	'铀',
	'离心分离机',
	'undefined',
	'null',
	'NaN',
	'[object Object]',
	'零宽空格',
	'全角空格',
	'太鼓',
];

export const and = [
	'模拟',
	'包含',
	'嵌入',
	'让人联想到',
	'喜欢',
	'伪装成',
	'滥用',
	'在上',
	'在上面',
	'在旁边',
];

export function genItem(seedOrRng?: (() => number) | string | number) {
	const rng = seedOrRng
		? typeof seedOrRng === 'function'
			? seedOrRng
			: seedrandom(seedOrRng.toString())
		: Math.random;

	let item = '';
	if (Math.floor(rng() * 5) !== 0) item += itemPrefixes[Math.floor(rng() * itemPrefixes.length)];
	item += items[Math.floor(rng() * items.length)];
	if (Math.floor(rng() * 6) === 0) {
		item += and[Math.floor(rng() * and.length)];
		if (Math.floor(rng() * 5) !== 0) item += itemPrefixes[Math.floor(rng() * itemPrefixes.length)];
		item += items[Math.floor(rng() * items.length)];
	}
	return item;
}
