const baiduMv = {
  title: '高效学习就用百度网盘',
  subtitle: '从学习痛点出发，让产品功能成为一首有共鸣的歌。',
  type: '科技产品传播 / 品牌说唱MV / AI辅助创作',
  role: '产品内容策划（共创） · AI辅助创作 · 独立分镜与拍摄 · 成片审核',
  entry: '产品内容策划 · 分镜摄影 · AI辅助创作｜学院奖短视频金奖',
  assets: {
    video: 'assets/baidu-mv/film.mp4',
    certificate: 'assets/baidu-mv/certificate.jpg',
    work: [1, 2, 3].map(n => `assets/baidu-mv/work-${n}.jpg`),
  },
};

function baiduMvPage() {
  const {title, subtitle, type, role, assets} = baiduMv;
  const list = items => `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
  const flow = steps => `<ol class="baidu-flow">${steps.map(step => `<li>${step}</li>`).join('')}</ol>`;
  const sections = [
    ['film', '先看成片', 'PROJECT OVERVIEW', `
      <div class="baidu-overview">
        <video class="mv-film" controls playsinline preload="metadata" aria-label="《${title}》成片"><source src="${assets.video}" type="video/mp4">浏览器不支持视频播放。</video>
        <div>
          <p class="baidu-award"><strong>短视频类金级类（GOLD HONOR）</strong><br>中国大学生广告艺术节学院奖2026春季征集大赛 · 百度网盘命题</p>
          <p>项目时间：2026年6月<br>项目性质：品牌命题竞赛</p>
          <dl class="baidu-stats">
            <div><dt>约60秒</dt><dd>品牌说唱MV</dd></div>
            <div><dt>2人</dt><dd>创作团队</dd></div>
            <div><dt>约一周</dt><dd>制作周期</dd></div>
          </dl>
        </div>
      </div>
      <p>《高效学习就用百度网盘》是一部面向学院奖2026春季征集大赛百度网盘命题创作的品牌说唱MV。</p>
      <p>作品从大学生日常学习中的真实困扰出发，将AI纪要、共享文件夹及GenFlow智能体等产品功能融入歌词与视觉内容，尝试打破百度网盘仅作为文件存储工具的固有认知，传递其在学习、协作与内容创作中的产品价值。</p>
      <p>作品由两人共同完成，历时约一周，最终获得百度网盘命题短视频类金奖。</p>`],
    ['roles', '我的职责与团队分工', 'MY ROLE & COLLABORATION', `
      <p>在本次项目中，我与团队伙伴共同完成命题策略单拆解、产品功能挖掘、核心创意讨论及视频脚本创作，并借助AI工具辅助完成歌词优化与音乐生成。</p>
      <p>在视觉制作阶段，我独立负责全部分镜设计、影棚布光及全程拍摄，将前期创意与脚本转化为实际影像内容，同时参与人物动作指导。</p>
      <p>后期剪辑由团队伙伴负责，我承担成片审核与修改反馈工作，共同推进最终作品交付。</p>
      <div class="baidu-roles">
        <div><h3>团队共创</h3>${list(['品牌策略单拆解','产品功能挖掘','核心创意讨论','AI辅助歌词优化','AI辅助音乐生成','视频脚本创作'])}</div>
        <div class="baidu-role-primary"><h3>我的核心职责</h3>${list(['<strong>独立完成全部分镜设计</strong>','<strong>独立负责影棚布光</strong>','<strong>独立完成全程拍摄</strong>','参与人物动作指导','成片审核及修改反馈'])}</div>
        <div><h3>团队伙伴职责</h3>${list(['歌词主创（秦佳然）','后期剪辑','成片制作'])}</div>
      </div>`],
    ['product', '重新认识百度网盘', 'PRODUCT UNDERSTANDING & INSIGHT', `
      <h3>我以为它只是一个网盘。</h3>
      <p>在接触本次命题之前，我们本身就是百度网盘的用户，但使用场景主要集中在文件保存与资料存储。</p>
      <p>通过策略单拆解和产品功能挖掘，我们发现，百度网盘的产品价值早已不局限于存储。AI纪要、共享文件夹及GenFlow智能体等功能，与我们日常学习中的信息整理、团队协作和内容创作需求有着直接联系。</p>
      <p>有意思的是，我们既是作品的创作者，也是此次命题的目标用户。</p>
      <p>因此，我们选择从自身真实的大学生活出发，寻找那些经常发生、却容易被忽视的学习烦恼，再思考产品功能如何进入这些场景。</p>
      <p>这也成为了整个作品的创意起点：让大学生重新认识百度网盘，而不只是再次认识一个已经熟悉的品牌。</p>
      ${flow([
        '<small>创作前的产品认知</small><h3>文件存储工具</h3><p>保存文件 / 下载资料 / 备份内容</p>',
        '<strong>策略单拆解 × 产品功能挖掘 × 自身学习体验</strong>',
        `<small>重新理解产品价值</small><h3>高效学习与协作助手</h3><ul class="baidu-branches"><li><strong>AI纪要</strong><br>信息整理与重点提取</li><li><strong>共享文件夹</strong><br>资料共享与团队协作</li><li><strong>GenFlow智能体</strong><br>辅助内容生成与创作</li></ul>`,
      ])}`],
    ['idea', '把学习痛点写成一首歌', 'CREATIVE STRATEGY', `
      <h3>为什么选择说唱MV？</h3>
      <p>我们希望这部作品不是一条传统的产品功能介绍视频，而是一首能够让大学生在观看时产生共鸣的学习主题歌曲。</p>
      <p>因此，两人共同确定了说唱MV的创意形式，利用口语化、自嘲式的歌词表达学习中的烦恼，再通过音乐节奏的转折自然引出产品功能。</p>
      <p>在内容设计上，歌词采用“痛点共鸣—产品介入—功能解决—品牌记忆”的表达结构，使产品卖点成为故事本身的一部分，而不是独立于内容之外的广告植入。</p>
      <p>我们希望观众先想到自己的学习生活，再理解百度网盘能够提供怎样的帮助。</p>
      <h3>从学习痛点到产品解决方案</h3>
      ${[
        ['学习场景一：信息记录困难','课堂笔记混乱，会议结束后容易遗忘关键信息。',['早八困到发麻，笔记写得像乱码','唠了两小时的会，散伙全忘了说啥'],'AI纪要','AI纪要划重点','通过大学生熟悉的课堂记录及小组会议场景，引出信息整理与重点提取需求，使AI纪要功能与实际学习生活建立联系。'],
        ['学习场景二：小组协作混乱','小组作业反复修改，文件版本混乱，资料分散在不同聊天记录中。',['小组群里刷爆，最终版改到七八','期末资料堆炸，翻聊天记录找瞎'],'共享文件夹','共享版本不落下','从小组作业中的文件共享及版本管理问题出发，将共享文件夹功能融入团队协作场景，使产品卖点具有具体的使用情境。'],
        ['学习场景三：内容创作耗时','PPT制作耗时，排版困难，想法难以快速转化为实际内容。',['PPT熬到通宵，排版烂得像豆腐渣'],'GenFlow智能体','GenFlow一键出稿，把思路直接落地开花','通过大学生常见的PPT制作及内容创作需求，引出GenFlow智能体的辅助创作价值，将抽象的AI功能转化为具体的学习使用场景。'],
      ].map(([label,pain,quotes,feature,lyric,description]) => `<article class="baidu-scene"><h4>${label}</h4><div class="baidu-pair"><div><small>用户痛点</small><p>${pain}</p><small>痛点歌词</small><blockquote>${quotes.map(line => `“${line}”`).join('<br>')}</blockquote></div><div><small>对应产品功能</small><p><strong>${feature}</strong></p><small>功能表达歌词</small><blockquote>“${lyric}”</blockquote></div></div><p><strong>创意说明</strong> ${description}</p></article>`).join('')}
      <p><small>功能表达歌词为原作品的创意表达，具体功能以产品实际提供为准。</small></p>
      <h3>内容叙事结构</h3>
      ${flow([
        '<h4>第一阶段：痛点共鸣</h4><p>以早八、课堂笔记、小组作业、期末资料整理及PPT制作等学习场景切入，用口语化歌词建立共鸣。</p>',
        '<h4>第二阶段：产品介入</h4><p>通过歌词“直到点开百度网盘，把繁琐全部接下”实现内容转折，引出产品。</p>',
        '<h4>第三阶段：功能解决</h4><p>将AI纪要、共享文件夹及GenFlow智能体融入歌词，使产品功能与前面呈现的学习困扰形成对应。</p>',
        '<h4>第四阶段：品牌记忆</h4><p>通过副歌重复品牌名称，并以“不止存下过往，重构学习主场”“跳出存储旧框，解锁全新玩法”等歌词，强化百度网盘不止于存储的产品认知。</p><p>最终以“高效学习，就用百度网盘”完成品牌信息收束。</p>',
      ])}
      <details class="honors-more baidu-lyrics"><summary>查看创作歌词</summary>
        <h4>【主歌】</h4><p>早八困到发麻 笔记写得像乱码<br>小组群里刷爆 最终版改到七八<br>期末资料堆炸 翻聊天记录找瞎<br>唠了两小时的会 散伙全忘了说啥<br>PPT熬到通宵 排版烂得像豆腐渣</p>
        <h4>【预副歌】</h4><p>直到点开百度网盘 把繁琐全部接下<br>AI纪要划重点 共享版本不落下<br>GenFlow一键出稿 把思路直接落地开花<br>杂活全兜下 我只负责想法</p>
        <h4>【副歌】</h4><p>百度网盘<br>不止存下过往 重构学习主场<br>百度网盘<br>协作不再坎坷<br>版本统一没错 灵感随时通车<br>跳出存储旧框 解锁全新玩法</p>
        <h4>【尾句】</h4><p>高效学习，就用百度网盘</p>
      </details>`],
    ['workflow', 'AI如何参与创作', 'AI-ASSISTED WORKFLOW', `
      <h3>让AI帮助创意成为可能。</h3>
      <p>在本次创作中，我们将AI工具融入前期策划及内容生产流程。</p>
      <p>ChatGPT主要用于辅助策略单拆解、创意讨论及歌词修改，帮助我们梳理产品信息、拓展创意思路并优化内容表达。</p>
      <p>而音乐制作是团队面临的一项实际能力限制。由于我们都是文科专业学生，缺乏专业编曲经验，因此选择借助Muse AI生成音乐，使说唱MV的创意能够在现有条件下实现。</p>
      <p>完成歌词与音乐制作后，我们共同创作视频脚本，由我独立完成分镜设计及实际拍摄。</p>
      <p>对于我们而言，AI并不是替代创作的工具，而是帮助团队解决能力限制、实现创意的一种方法。最终的创意判断、脚本设计与影像制作，仍然建立在人工创作之上。</p>
      <div class="baidu-pair baidu-tools">
        <div><h3>ChatGPT</h3><p>使用场景：前期分析与内容辅助</p>${list(['辅助品牌策略单拆解','辅助产品功能及传播信息梳理','创意方向讨论','歌词修改及优化'])}<p>辅助团队梳理命题信息、拓展创意思路并优化内容表达。</p></div>
        <div><h3>Muse AI</h3><p>使用场景：MV音乐生成</p>${list(['根据作品的说唱MV创意生成音乐','辅助完成歌曲制作','解决团队缺乏专业编曲经验的问题'])}<p>突破团队在音乐制作方面的能力限制，使说唱MV创意能够实际落地。</p></div>
      </div>
      <h3>人机协同创作流程</h3>
      ${flow([
        ['团队共创','品牌策略单与自身用户体验'],
        ['AI辅助','ChatGPT辅助策略拆解、创意讨论及歌词优化'],
        ['AI辅助','Muse AI辅助音乐生成'],
        ['团队共创','团队共同完成视频脚本'],
        ['本人独立负责','本人独立完成全部分镜设计'],
        ['本人独立负责','本人独立完成影棚布光及全程拍摄'],
        ['团队伙伴负责','团队伙伴负责后期剪辑'],
        ['本人负责','本人负责成片审核及修改反馈'],
        ['团队共创','团队共同完成最终作品交付'],
      ].map(([label, step]) => `<span class="baidu-flow-label">${label}</span> <strong>${step}</strong>`))}`],
    ['production', '从歌词到镜头', 'VISUAL PRODUCTION', `
      <h3>把文字创意转化为实际影像。</h3>
      <p>在共同完成视频脚本之后，我独立负责全部分镜设计，根据歌词内容及视频表达需求，将前期创意进一步拆解为具体的场景、人物动作与镜头画面。</p>
      <p>拍摄阶段，我们选择学校影棚作为制作场地，由我独立完成全程拍摄及布光，并参与人物动作指导。</p>
      <p>由于团队采用明确的前后期分工，我需要在拍摄过程中兼顾画面内容与后期剪辑需求，为后续成片制作提供所需的影像素材。</p>
      <p>这部分工作也是我在整个项目中承担的核心制作职责。</p>
      <dl class="baidu-duties">
        <dt>分镜设计</dt><dd>独立负责全部分镜设计，将共同完成的视频脚本进一步转化为实际可执行的镜头画面。</dd>
        <dt>影棚布光</dt><dd>独立负责影棚拍摄中的灯光设置，为实际影像制作提供所需的拍摄条件。</dd>
        <dt>全程拍摄</dt><dd>独立完成作品所需的全部实际拍摄工作，负责从分镜设计到影像素材的执行与交付。</dd>
        <dt>人物动作指导</dt><dd>参与人物动作指导，协助人物表演与歌词内容、镜头表达形成配合。</dd>
      </dl>
      <div class="case-gallery baidu-gallery">${['拍摄工作记录 · 现场器材画面','拍摄工作记录 · 校园建筑外的人物画面','拍摄工作记录 · 影棚蓝色背景与出镜人物'].map((caption,i) => `<figure><button type="button" data-zoom="${assets.work[i]}" aria-label="放大${caption}"><img src="${assets.work[i]}" alt="${caption}" loading="lazy"></button><figcaption>${caption}</figcaption></figure>`).join('')}</div>`],
    ['review', '两个人，一周，一部MV', 'TEAMWORK & DELIVERY', `
      <p>由于决定参赛的时间较为紧急，我们需要在约一周内完成从前期创意到最终成片的制作。</p>
      <p>基于此前的MV合作经验，我们按照各自擅长的工作进行分工：共同完成前期策划与脚本创作，由我主要负责分镜设计、布光及拍摄，团队伙伴负责后期剪辑，我同时参与最终成片的审核与修改反馈。</p>
      <p>明确的分工与已有的合作默契，使我们能够在较短周期内完成作品交付。</p>
      <p>这次经历也让我进一步认识到，内容生产的效率不仅取决于个人能力，更取决于团队成员之间是否能够形成互补，以及不同制作环节之间能否顺畅衔接。</p>
      <h3>团队协作流程</h3>
      ${flow([
        '<h4>共同策划</h4><p>策略单拆解、产品功能挖掘、创意讨论、歌词优化、音乐生成、视频脚本。</p>',
        '<h4>前后期明确分工</h4><div class="baidu-pair"><p><strong>本人</strong><br>分镜设计 / 影棚布光 / 全程拍摄 / 人物动作指导（参与）</p><p><strong>团队伙伴</strong><br>后期剪辑 / 成片制作</p></div>',
        '<h4>成片审核与修改</h4><p>本人负责成片审核及修改反馈，团队共同完成最终交付。</p>',
        '<h4>项目成果</h4><p>约一周完成一部品牌说唱MV，获得团队短视频金奖。</p>',
      ])}
      <h3>成片审核关注点</h3>
      ${list(['画面内容与歌词表达是否对应','音乐节奏与镜头卡点是否协调','字幕表达是否准确、清晰','产品功能及广告主题是否表达清楚'])}`],
    ['honor', '项目荣誉与创作手记', 'OUTCOME & REFLECTION', `
      <div class="baidu-overview">
        <figure class="sanfu-certificate"><button type="button" data-zoom="${assets.certificate}" aria-label="放大金级类获奖证书"><img src="${assets.certificate}" alt="百度网盘命题短视频类金级类获奖证书" loading="lazy"></button><figcaption>获奖证书 · 点击放大查看</figcaption></figure>
        <div><h3>项目荣誉</h3>
        <dl class="baidu-duties">
          <dt>赛事</dt><dd>中国大学生广告艺术节学院奖2026春季征集大赛</dd>
          <dt>命题品牌</dt><dd>百度网盘</dd>
          <dt>作品名称</dt><dd>《高效学习就用百度网盘》</dd>
          <dt>获奖情况</dt><dd>短视频类金级类（GOLD HONOR）</dd>
          <dt>证书日期</dt><dd>2026年8月</dd>
          <dt>作者</dt><dd>秦佳然、刘月轩</dd>
          <dt>作品编号</dt><dd>W-n32820264964163</dd>
        </dl></div>
      </div>
      <aside class="case-note baidu-reflection">
        <h3>岛主创作手记</h3>
        <p>这次创作让我印象最深的，其实不是最后获得了金奖，而是我们对一个熟悉产品的重新认识。</p>
        <p>作为百度网盘的用户，我曾经习惯性地把它当作存储工具。但在拆解命题、了解产品功能的过程中，我发现，很多日常学习中的烦恼，其实已经有了对应的解决方案。</p>
        <p>这让我意识到，产品传播不只是告诉用户一个产品有什么功能，更重要的是让用户理解，这些功能为什么与自己的生活有关。</p>
        <p>同时，这次作品也是一次关于创作方式的尝试。不会编曲，我们就借助AI；制作时间紧张，我们就发挥各自擅长的能力、明确分工。</p>
        <p>从一个想法到一部完整的MV，我越来越享受这种不断寻找方法、解决问题，并最终把创意做出来的过程。</p>
      </aside>`],
  ];

  return `<article class="baidu-case">
    <small>03 视频与AI创作 / ${type}</small>
    <h1>《${title}》</h1>
    <p class="baidu-subtitle">${subtitle}</p>
    <p><strong>${role}</strong></p>
    ${readingChapterNav(sections.map(([id,title]) => ({id,title})), 'mv')}
    ${sections.map(([id,title,english,body],index) => `<section class="profile-section" id="mv-${id}"><small>0${index+1} / ${english}</small><h2>${title}</h2>${body}</section>`).join('')}
    <p><a href="#creation-video">← 返回视频创作</a> · <a href="#category-3">视频与AI创作</a> · <a href="#map">返回小岛</a></p>
  </article>`;
}
