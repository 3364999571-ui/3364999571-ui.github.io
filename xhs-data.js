const xhsCase={title:'个人专业经验分享账号',platform:'小红书',assets:{qr:'assets/xhs/qr.jpg',profile:'assets/xhs/profile.jpg',notes:'assets/xhs/notes.jpg',competitions:'assets/xhs/competitions.jpg',computer:'assets/xhs/computer.jpg'},stats:[['粉丝','99'],['累计获赞与收藏','2862']],sections:[
{id:'origin',title:'从记录自己的经历，到提供对他人有用的参考',paragraphs:['最初希望把账号作为一份持续更新的作品集，记录参赛作品、比赛复盘、求职准备、专业学习与校园生活。发布后发现，自己的经历也能为有类似困惑的人提供参考，因此逐渐增加经验整理与实用信息分享。']},
{id:'work',title:'我怎样选择、整理和发布内容',work:[['选题策划','从自身经历与同学的实际需求出发，结合入学准备、专业学习和参赛等场景确定选题。'],['资料整理','结合个人实践、同学反馈等信息，借助AI辅助归纳，并根据实际经验形成内容判断。'],['图文制作','使用Canva完成封面与内页排版，将零散信息整理成便于阅读、比较与查阅的图文。'],['内容发布','持续分享参赛复盘、作品及学习经验，积累个人创作记录。']]},
{id:'computer',title:'代表笔记｜广告学电脑选购指南',image:'computer',paragraphs:['结合暑期新生准备入学的时间节点，从自己入学时“广告学到底需要什么电脑”的困惑出发，整理贴近专业学习场景的使用经验，为有类似困惑的新生提供参考。','通过与同学聊天，收集不同电脑在课程作业、视频剪辑和校园办公中的使用感受及常见问题；借助AI辅助归纳资料，结合自己的使用经验与同学反馈，形成判断，提炼便携性、续航、多任务使用体验等考量。','我独立使用Canva完成封面与内页排版，将使用经历整理为个人体验、分类对照与选购建议。'],thought:'入学前，我更关心电脑能不能带动专业软件。用了之后，我发现，每天背着它去教室重不重、小组讨论时电量够不够、多开几个软件会不会卡，同样影响使用体验。我想把这些用过之后才知道的细节整理出来，让新生在选择时少一些困惑。',note:'历史发布作品，发布时间记录为7月25日，年份待确认。本页展示选题与制作过程，不作为当前电脑购买建议；不提炼无统计依据的比例或绝对化结论。'},
{id:'competitions',title:'代表笔记｜新传生可参加的九个比赛',image:'competitions',paragraphs:['将面向新传学生的比赛信息整理为合集，作为账号中的实用信息分享内容，体现信息搜集与整合。']},
{id:'review',title:'代表内容｜华为高校花粉挑战赛复盘',paragraphs:['将参赛经历整理为问题总结和经验分享，延续从记录个人实践到提供具体参考的内容方向。完整项目与复盘已归入对应策划案例，本页不重复展开。'],links:[['查看华为策划案与完整复盘','#case-xiaoyi-2025'],['查看配套MV档案','#category-3-project-0']]},
{id:'record',title:'账号表现与内容记录',paragraphs:['以下为账号整体数据：99粉丝，累计2862次赞与收藏。赞与收藏持续更新中，本页为手动更新记录，不实时同步。这里的“获赞与收藏”保留平台合计口径，不称为单纯点赞，也不作为任何单篇笔记的数据。'],gallery:true},
{id:'reflection',title:'个人回看',paragraphs:['一开始，我想用这个账号记录自己做过什么。后来发现，那些我曾经困惑过、摸索过的事情，也能给别人一些参考。我开始更在意：除了分享自己的经历，这篇内容还能帮读者解决什么问题？']}
]};
operationsProjects[1]={title:'个人专业经验分享账号',desc:'从记录自己的经历，到提供对他人有用的参考',route:'#case-xhs',status:'案例已整理'};categories[2].items[1]='个人专业经验分享账号';

{const note=xhsCase.sections.find(s=>s.id==='computer');note.pages=Array.from({length:9},(_,i)=>`assets/xhs/computer-page-${i+1}.jpg`);note.links=[['在小红书查看原笔记','https://xhslink.cn/o/icyzvEEXuO']];xhsCase.assets.computer=note.pages[0];}

xhsCase.assets.homeUrl='https://xhslink.cn/o/9JaD2Cpc7d7';

{const note=xhsCase.sections.find(s=>s.id==='competitions');note.pages=Array.from({length:11},(_,i)=>`assets/xhs/competitions-page-${i+1}.jpg`);note.links=[['在小红书查看原笔记','https://xhslink.cn/o/1SoD8lgr5sX']];xhsCase.assets.competitions=note.pages[0];}

xhsCase.sections.find(s=>s.id==='review').links.unshift(['在小红书查看华为比赛复盘笔记','https://xhslink.cn/o/2JlqN8WkGe8']);
