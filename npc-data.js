const operationsProjects=[{title:'NPC短视频账号',desc:'人物观察、原创互动与现场内容整理',route:'#case-npc',status:'案例已整理'},{title:'个人经验分享账号',desc:'个人专业经验与内容分享',route:null,status:'资料整理中'}];
const npcCase={title:'NPC短视频账号',identity:'个人自主运营 · 非天津欢乐谷官方账号',period:'2025.05—2026.02',statisticsDate:'统计日期待确认',accountStats:[['累计发布','200＋条'],['总播放','400万＋'],['累计获赞','9.2万＋'],['涨粉','1000＋']],assets:{accountPhotos:[1,2,3,4,5].map(n=>`assets/npc/account-${n}.jpg`)},sections:[
{id:'intro',title:'从人物特点出发，独立运营一个账号',paragraphs:['我独立运营这个以天津欢乐谷一位NPC为内容对象的抖音账号，内容包括人物互动、现场趣事、搞笑混剪与直播切片。','我负责热点观察、原创互动构思、拍摄准备、自摄内容拍摄、素材筛选、剪辑和发布。账号包含直播切片，独立运营不代表全部原始素材均由我拍摄。']},
{id:'observation',title:'我观察到的，是外形之外的表达',paragraphs:['我关注到，这位NPC的外形与他带有东北口音、跳脱又略带调侃的表达形成反差。内容不只展示外形，也围绕他的回应、脑洞和现场行为展开。','我希望通过不同情境，让人物特点自然呈现，而不是预先安排所有反应。我的工作既包括提前设计互动，也包括从现场自然发生的反应中发现看点，再通过剪辑整理成内容。'],types:[['原创互动','根据人物特点提出开放任务'],['现场趣事','记录即时回应和意外瞬间'],['搞笑混剪','从素材中筛选人物表现'],['直播切片','提炼直播中的表达和看点']]},
{id:'moments',title:'原创互动｜让NPC用我的手机发朋友圈',video:'assets/npc/moments.mp4',poster:'assets/npc/moments-poster.jpg',paragraphs:['我认为他是一个脑洞比较大、互动风格跳脱、带一点“损”的人，因此想到把手机交给他，让他决定发一条什么样的朋友圈。','我给出一个开放任务，但没有预设他的具体反应。他拍下我的搞怪照片并发布，形成了出乎预期的互动结果。了解人物的表达方式，让我能够选择适合他的互动情境，也为自然发挥留下空间。'],decisions:[['互动构思','提出开放任务，参与现场互动，不预设人物的具体回应。'],['剪辑判断','添加开头钩子、字幕和花字，删除无效镜头，帮助观众理解对话与看点。']],note:''},
{id:'fan',title:'现场捕捉｜小风扇与一句“凉”',video:'assets/npc/fan.mp4',poster:'assets/npc/fan-poster.jpg',stats:[['播放','56.4万'],['点赞','1.1万'],['收藏','1269']],statsImage:'assets/npc/fan-stats.jpg',paragraphs:['六月，天津欢乐谷下午场室外巡游。我拿小风扇给NPC吹风，他穿着吸热的黑衣服，请我帮忙吹后背。风扇顶部的制冷部位恰好碰到他的脖子，引出了他用东北口音说“凉”的即时反应。','我参与并记录现场互动，添加开头钩子、字幕与花字，整体保留自然过程，没有复杂剪辑。这条视频的表现超出了我的预期。'],decisions:[['拍摄与取舍','保留自然互动及声音节奏，不把即时反应改写成预设剧情。'],['传播判断','人物口音、即时反应与互动情境可能共同形成看点，目前无法确定各因素对传播结果的具体影响。']],note:'以上是该单条视频的记录，统计日期待确认；不与账号累计数据混用，也不从单条表现推导固定成功公式。'},
{id:'account',title:'账号累计表现与内容记录',paragraphs:['以下为存档中的账号累计口径，统计日期待确认。涨粉为运营期存档记录，不代表当前粉丝数；账号现已停更。不补写完播率、转化提升或粉丝留存成果。','主页截图用于展示内容类型与发布记录，不代替统一统计时点的累计后台证明。']},
{id:'reflection',title:'个人回看｜观察、选择与整理',paragraphs:['运营这个账号时，我逐渐发现，内容既可以来自提前想好的问题，也可以来自现场没有预料到的反应。','“发朋友圈”让我尝试根据人物特点设计互动；小风扇的视频则提醒我，有些自然瞬间值得保留，不一定需要复杂剪辑。','我能决定的是怎样观察、选择和整理内容。对于超出预期的传播结果，我愿意继续寻找原因，也保留暂时不能解释清楚的部分。']}
]};
categories[2].items[1]='个人经验分享账号';

// Lead with the on-site fan video, followed by the original Moments interaction.
{const a=npcCase.sections.findIndex(s=>s.id==='fan'),b=npcCase.sections.findIndex(s=>s.id==='moments');[npcCase.sections[a],npcCase.sections[b]]=[npcCase.sections[b],npcCase.sections[a]];}

{const story=npcCase.sections.find(s=>s.id==='moments');story.stats=[['播放','17.4万'],['点赞','1277'],['收藏','68']];story.statsImage='assets/npc/moments-stats.jpg';npcCase.assets.qr='assets/npc/account-qr.jpg';}

npcCase.assets.homeUrl='https://v.douyin.com/JeHRPTpnvT4/';
