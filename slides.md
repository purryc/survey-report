---
theme: default
title: Desky Mini PC Screen Survey
info: 带屏迷你主机屏幕设计调研 / Bilingual mini PC screen survey deck
class: text-left
drawings:
  persist: false
transition: fade
mdc: true
---
# 带屏迷你主机屏幕设计调研

## Mini PC Screen Design Survey

面向 Desky Agent PC 工业设计的竞品洞察、结构规律与推荐方案<br>
Competitor insights, structural patterns, and recommendations for Desky Agent PC industrial design

---
<style>
.slidev-layout {
  background: #ffffff;
  color: #111827;
  font-family: Inter, "SF Pro Text", -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif;
}
h1 {
  font-size: 34px;
  line-height: 1.18;
  font-weight: 760;
  letter-spacing: 0;
}
h2, h3 {
  letter-spacing: 0;
}
p, li {
  line-height: 1.45;
}
.kicker {
  color: #dc2626;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0;
  text-transform: uppercase;
}
.muted {
  color: #4b5563;
}
.tiny {
  font-size: 10px;
  line-height: 1.3;
}
.small {
  font-size: 12px;
  line-height: 1.35;
}
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.grid3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}
.grid4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.panel {
  border: 1px solid #d9e0e8;
  border-radius: 8px;
  padding: 12px;
  background: #f8fafc;
}
.decision {
  border-left: 4px solid #dc2626;
  padding-left: 14px;
  font-size: 18px;
  line-height: 1.42;
}
.metric {
  font-size: 26px;
  font-weight: 760;
}
.chip {
  display: inline-block;
  border: 1px solid #d9e0e8;
  border-radius: 999px;
  padding: 2px 8px;
  margin: 2px 3px 2px 0;
  font-size: 11px;
  color: #374151;
  background: #ffffff;
}
.product {
  display: grid;
  grid-template-columns: 43% 57%;
  gap: 18px;
  align-items: start;
}
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 8px;
}
.image-grid img {
  width: 100%;
  height: 142px;
  object-fit: contain;
  border: 1px solid #d9e0e8;
  border-radius: 8px;
  background: #f8fafc;
}
.image-grid .wide img {
  height: 220px;
}
.concept-art img {
  width: 100%;
  height: 330px;
  object-fit: contain;
  border: 1px solid #d9e0e8;
  border-radius: 8px;
  background: #ffffff;
}
.factline {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 10px;
  margin-top: 8px;
  color: #4b5563;
  font-size: 9.5px;
  line-height: 1.25;
}
.factline b {
  color: #111827;
}
.spec-list {
  display: grid;
  grid-template-columns: 130px 1fr;
  gap: 6px 10px;
  font-size: 12px;
}
.spec-list b {
  color: #111827;
}
.bar {
  height: 12px;
  border-radius: 6px;
  background: #e5e7eb;
  overflow: hidden;
}
.bar > span {
  display: block;
  height: 100%;
  background: #dc2626;
}
.svgbox {
  width: 100%;
  height: 330px;
  border: 1px solid #d9e0e8;
  border-radius: 8px;
  background: #ffffff;
}
.source {
  margin-top: 8px;
  color: #6b7280;
  font-size: 10px;
  line-height: 1.3;
}
.law {
  border-top: 2px solid #111827;
  padding-top: 8px;
}
.red {
  color: #dc2626;
}
</style>

<div class="kicker">Section 1 · Executive Decision</div>

# 结论：Desky 默认不是 8 英寸平板，而是 5-7.x 英寸 Agent PC 前景屏

<div class="decision">
中文决策：首代 Desky 应优先探索 6.0-6.7 英寸横向触控屏；5.0-5.5 英寸用于状态/单次确认，7.0-7.x 英寸作为小型 hub 上限。<br>
English summary: The first Desky path should favor a 6.0-6.7 inch landscape touch foreground screen, with 5.0-5.5 inches for status/quick approval and 7.0-7.x inches as the upper small-hub band.
</div>

<div class="grid3" style="margin-top:24px">
  <div class="panel"><div class="metric">5.0-5.5"</div><b>状态带 / Status band</b><br><span class="small">语音态、灯态、单按钮确认。<br>Voice state, light state, one-step confirmation.</span></div>
  <div class="panel"><div class="metric red">6.0-6.7"</div><b>首选带 / Preferred band</b><br><span class="small">审批卡片、摄像头信任、短任务列表。<br>Approval cards, camera trust, short task lists.</span></div>
  <div class="panel"><div class="metric">7.0-7.x"</div><b>上限带 / Upper band</b><br><span class="small">轻量 hub，但不能滑向智能屏。<br>Lightweight hub, without becoming a smart display.</span></div>
</div>

---
<div class="kicker">Section 1 · What The Screen Must Do</div>

# 屏幕必须承担的四个任务

<div class="grid4">
  <div class="panel">
    <h3>触控确认</h3>
    <p class="small">把高风险 Agent 动作收束成一眼可判的确认卡。<br>Turn high-risk agent actions into glanceable approval cards.</p>
  </div>
  <div class="panel">
    <h3>语音状态</h3>
    <p class="small">让用户知道它在听、在想、在执行，还是需要人接管。<br>Show whether it is listening, thinking, acting, or asking for takeover.</p>
  </div>
  <div class="panel">
    <h3>摄像头信任</h3>
    <p class="small">物理滑盖 + 明确灯态，比“软件开关”更能建立信任。<br>A physical shutter plus clear light state beats a software-only switch.</p>
  </div>
  <div class="panel">
    <h3>灯光反馈</h3>
    <p class="small">灯不是装饰，而是 Agent 状态的低认知成本提示。<br>Light is not decoration; it is low-friction agent-state feedback.</p>
  </div>
</div>

<p class="muted" style="margin-top:24px">Desky ID implication: 屏幕是前景协作面，不是把完整桌面系统缩小到盒子上。The screen is a foreground collaboration surface, not a tiny copy of the desktop OS.</p>

---
<div class="kicker">Section 1 · Why Not 8 Inch By Default</div>

# 保留 8 英寸证据，但收窄产品姿态

<div class="grid2">
  <div class="panel">
    <h3>Claude HTML 的 8 英寸证据</h3>
    <p>8 英寸 / 1280x800 有成熟平板、车机、白牌触控屏供应链，适合承载完整 Agent UI。</p>
    <p class="small">The Claude base report is right that 8 inch / 1280x800 is supply-chain mature and can carry dense interaction.</p>
  </div>
  <div class="panel">
    <h3>Desky 的首代姿态</h3>
    <p>Desky 不是 Echo Show 或 Nest Hub；默认 8 英寸会把产品推向“桌面智能屏”。</p>
    <p class="small">Desky should not default into an Echo Show / Nest Hub posture; 8 inch makes the object feel screen-first.</p>
  </div>
</div>

<div class="decision" style="margin-top:22px">中文决策：8 英寸作为上界和供应链参考保留，首代默认从 6.0-6.7 英寸审批屏开始。<br>English summary: Keep 8 inch as the upper-bound evidence, but start the first-generation default from the 6.0-6.7 inch approval-screen band.</div>

---
<div class="kicker">Section 1 · Research Method</div>

# 研究方法：Claude 基线 + 本地证据 + live web 校验 + 图片 ledger

<div class="grid4">
  <div class="panel"><b>Claude HTML base</b><br><span class="small">20 个产品、分布图、结构图、8 条规律、5 条风险。<br>20 products, distributions, structure diagrams, 8 laws, 5 risks.</span></div>
  <div class="panel"><b>Local PDF / HTML assets</b><br><span class="small">保留原始报告和 15 个本地图片资产。<br>Preserved source report and 15 local image assets.</span></div>
  <div class="panel"><b>Live web verification</b><br><span class="small">官方优先，媒体/众筹补充；字段按证据收窄。<br>Official sources first, media/crowdfunding as support.</span></div>
  <div class="panel"><b>Image ledger</b><br><span class="small">20 产品、15 本地资产、16 远程图像；Higole 改用 CNX。<br>20 products, 15 local assets, 16 remote images; Higole corrected to CNX.</span></div>
</div>

---
<div class="kicker">Section 2 · Market Map</div>

# 六类市场样本 A-F

<div class="grid3">
  <div class="panel"><h3>A 大屏交互终端</h3><p class="small">Lenovo Auto Twist, Amazon Echo Show 10, LG StanbyME Go<br>Large interactive terminals.</p></div>
  <div class="panel"><h3>B 翻转副屏主机</h3><p class="small">AOOSTAR G-Flip 370, Miniproca AiO, ViewDock Gen2, AYANEO AM01S<br>Flip secondary-screen mini PCs.</p></div>
  <div class="panel"><h3>C 固定副屏主机</h3><p class="small">UH185 Ultra, GEM12 Pro Max, ACEMAGIC S1, AYANEO AM02<br>Fixed secondary-screen mini PCs.</p></div>
  <div class="panel"><h3>D 平板/HMI 一体</h3><p class="small">Higole, PiPO X8, 8-inch N150, reTerminal, BMG800<br>Tablet-like or industrial HMI computers.</p></div>
  <div class="panel"><h3>E Agent 专用硬件</h3><p class="small">Violoop, Moore Threads AICUBE<br>Agent-first appliance references.</p></div>
  <div class="panel"><h3>F 算力堆叠参考</h3><p class="small">NVIDIA DGX Spark, Apple Mac mini M4<br>Compute-box and stacking references.</p></div>
</div>

---
<div class="kicker">Section 2 · Screen Role Map</div>

# 屏幕角色地图：从状态到 companion

<div class="grid3">
  <div class="panel"><b>Status / 状态</b><p class="small">ACEMAGIC S1, GEM12: 显示温度、模式、启动动画。<br>Shows thermals, mode, boot/status animation.</p></div>
  <div class="panel"><b>Control / 控制</b><p class="small">UH185, AM02: 设备设置、性能模式、端口/系统入口。<br>Device setting and quick-control surface.</p></div>
  <div class="panel"><b>Confirmation / 确认</b><p class="small">Desky 目标：授权、确认、取消、接管。<br>Desky target: approve, reject, cancel, take over.</p></div>
  <div class="panel"><b>Monitoring / 监测</b><p class="small">BMG800: 工业状态、网关、传感器数据。<br>Industrial state, gateway and sensor data.</p></div>
  <div class="panel"><b>Companion / 伴随</b><p class="small">Echo Show, StanbyME Go: 屏幕本身成为产品。<br>The screen becomes the product experience.</p></div>
  <div class="panel"><b>Compute reference / 算力参考</b><p class="small">DGX Spark, Mac mini: 无内置屏，但定义尺寸和堆叠边界。<br>No built-in screen, but useful for size and stacking constraints.</p></div>
</div>

---
<div class="kicker">Section 2 · Mechanism Map</div>

# 机构地图：fixed / flip / rotate / detach / stack / dock

<svg class="svgbox" viewBox="0 0 1000 330" xmlns="http://www.w3.org/2000/svg">
  <style>.t{font:14px Arial}.s{font:12px Arial;fill:#4b5563}.box{fill:#f8fafc;stroke:#cbd5e1;stroke-width:2}.r{stroke:#dc2626;stroke-width:4}</style>
  <rect x="24" y="54" width="140" height="160" rx="8" class="box"/><rect x="42" y="84" width="104" height="56" rx="6" fill="#fff" stroke="#111"/><text x="94" y="244" text-anchor="middle" class="t">Fixed 固定</text><text x="94" y="268" text-anchor="middle" class="s">front/top screen</text>
  <rect x="198" y="128" width="140" height="86" rx="8" class="box"/><rect x="216" y="62" width="104" height="58" rx="6" fill="#fff" stroke="#111" transform="rotate(-22 268 91)"/><line x1="250" y1="128" x2="285" y2="118" class="r"/><text x="268" y="244" text-anchor="middle" class="t">Flip 翻转</text><text x="268" y="268" text-anchor="middle" class="s">0-65/80/90°</text>
  <circle cx="442" cy="132" r="54" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/><rect x="398" y="76" width="88" height="112" rx="8" fill="#fff" stroke="#111"/><path d="M510 132 A68 68 0 0 1 462 197" fill="none" class="r"/><text x="442" y="244" text-anchor="middle" class="t">Rotate 旋转</text><text x="442" y="268" text-anchor="middle" class="s">motorized base</text>
  <rect x="562" y="126" width="136" height="88" rx="8" class="box"/><rect x="590" y="56" width="80" height="54" rx="6" fill="#fff" stroke="#111"/><line x1="630" y1="110" x2="630" y2="126" class="r"/><text x="630" y="244" text-anchor="middle" class="t">Detach 分体</text><text x="630" y="268" text-anchor="middle" class="s">screen module</text>
  <rect x="748" y="64" width="112" height="42" rx="6" class="box"/><rect x="748" y="116" width="112" height="42" rx="6" class="box"/><rect x="748" y="168" width="112" height="42" rx="6" class="box"/><line x1="870" y1="85" x2="905" y2="85" class="r"/><line x1="870" y1="137" x2="905" y2="137" class="r"/><text x="804" y="244" text-anchor="middle" class="t">Stack 堆叠</text><text x="804" y="268" text-anchor="middle" class="s">compute layers</text>
  <rect x="900" y="114" width="70" height="96" rx="8" class="box"/><rect x="910" y="62" width="50" height="38" rx="6" fill="#fff" stroke="#111"/><line x1="935" y1="100" x2="935" y2="114" class="r"/><text x="935" y="244" text-anchor="middle" class="t">Dock 底座</text><text x="935" y="268" text-anchor="middle" class="s">power/data</text>
</svg>

<p class="small muted">中文决策：Desky 可以借鉴 flip 与 stack，但首代屏幕模块应优先与算力盒解耦。English summary: Desky can borrow from flip and stack patterns, while keeping the screen module decoupled from compute boxes.</p>

---
<div class="kicker">Section 2 · Camera Route Map</div>

# 摄像头路线地图

<div class="grid4">
  <div class="panel"><h3>None / 无摄像头</h3><p class="small">传统迷你主机默认路线；缺少感知信任界面。<br>Common mini-PC route; weak for agent sensing trust.</p></div>
  <div class="panel"><h3>Fixed wide-angle / 固定广角</h3><p class="small red">首代基线。13MP 广角 + 数字裁切可覆盖大多数桌面任务。<br>Gen-1 baseline. Wide-angle plus crop covers most desk tasks.</p></div>
  <div class="panel"><h3>Micro PTZ / 微型云台</h3><p class="small">差异化路线，但必须小、安静、有物理遮挡。<br>Differentiation route, but must be small, quiet, and shuttered.</p></div>
  <div class="panel"><h3>Large PTZ / 大云台</h3><p class="small">容易变成监控设备，桌面侵入感强。<br>Risks becoming camera-first and monitoring-like.</p></div>
</div>

<p class="muted">Remote module / 远程模块：适合 Gen2 或专业桌面，不作为默认随盒方案。Remote camera modules fit Gen2 or pro desks, not the default in-box route.</p>

---
<div class="kicker">Competitor Teardown · A</div>

# Lenovo Auto Twist / Lenovo ThinkBook Plus Gen 7 Auto Twist

<div class="product">
  <div class="image-grid"><img src="https://i0.wp.com/gadgetbond.com/wp-content/uploads/2026/01/Lenovo-ThinkBook-Plus-Gen-7-Auto-Twist_snapshot_00.40_2026-01-09_02.44.13.png?fit=1024%2C576&ssl=1" /></div>
  <div>
    <div class="spec-list">
      <b>屏幕 / Screen</b><span>14", 2880x1800, OLED touch + pen</span>
      <b>机构 / Mechanism</b><span>双轴电机铰链，自动旋转、俯仰、开合。Motorized dual-axis hinge.</span>
      <b>感知 / Sensing</b><span>10MP camera for face tracking; voice-commanded AI scenarios.</span>
      <b>Desky 启示</b><span>电机是展示性强但成本、噪音、寿命风险高的旗舰路线。Motorization is a flagship proof, not a compact default.</span>
    </div>
    <div class="factline">
      <span><b>Camera / 摄像头</b> 10MP webcam for face tracking</span>
      <span><b>Light / 灯光</b> n/a</span>
      <span><b>Voice / 语音</b> AI assistant / voice-commanded screen motion and translation scenarios</span>
      <span><b>Storage / 收纳</b> Laptop clamshell; portable but not a stackable desk-compute module</span>
    </div>
    <div class="source">Source note: Lenovo PSREF + TechRadar + The Verge; image from GadgetBond media reference.</div>
  </div>
</div>

---
<div class="kicker">Competitor Teardown · A</div>

# Amazon Echo Show 10 / Amazon Echo Show 10 (3rd Gen)

<div class="product">
  <div class="image-grid"><img src="https://cdn.mos.cms.futurecdn.net/85GLxHmBcDs8QMR7rxsZ5Q-2000-80.jpg" /></div>
  <div>
    <div class="spec-list">
      <b>屏幕 / Screen</b><span>10.1", 1280x800, LCD touch</span>
      <b>机构 / Mechanism</b><span>电机旋转底座约 +/-175°，屏幕可手动调角。Motorized rotating base plus manual tilt.</span>
      <b>感知 / Sensing</b><span>13MP camera, auto-framing, far-field Alexa voice.</span>
      <b>Desky 启示</b><span>大底座旋转需要桌面净空，会把 Desky 推向智能音箱姿态。Rotating clearance pushes the product toward smart-display territory.</span>
    </div>
    <div class="factline">
      <span><b>Camera / 摄像头</b> 13MP camera with auto-framing / user tracking</span>
      <span><b>Light / 灯光</b> n/a</span>
      <span><b>Voice / 语音</b> Far-field Alexa voice control</span>
      <span><b>Storage / 收纳</b> Countertop smart-display appliance; rotating base needs clearance and is not st...</span>
    </div>
    <div class="source">Source note: Tom's Guide, PCWorld, SHI spec mirror; image from Future media reference.</div>
  </div>
</div>

---
<div class="kicker">Competitor Teardown · A</div>

# LG StanbyME Go / LG StanbyME Go 27LX5QKNA

<div class="product">
  <div class="image-grid">
    <img src="https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/48e24b8f-e617-4ec1-ac8f-68344e41bcaa/27LX5QKNA_gallery_01_open_3000x3000?io=transform:fill,width:800" />
    <img src="https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/ccef46c6-d6a5-49be-a494-9a1c06535a7b/27LX5QKNA_gallery_02_closed_3000x3000?io=transform:fill,width:800" />
    <img src="https://media.us.lg.com/transform/ecomm-PDPGallery-1100x730/2efb9479-eac2-449e-88ee-1149c2b3930e/27LX5QKNA_gallery_03_record_3000x3000?io=transform:fill,width:800" />
  </div>
  <div>
    <div class="spec-list">
      <b>屏幕 / Screen</b><span>27", 1920x1080, LED/LCD touch + remote</span>
      <b>机构 / Mechanism</b><span>手提箱 + 支撑臂，横竖屏/桌面模式。Briefcase support arm with landscape, portrait, and table modes.</span>
      <b>感知 / Sensing</b><span>No built-in camera; voice through remote / LG ecosystem; 20W 4-channel audio.</span>
      <b>Desky 启示</b><span>收纳形态可以增强可信赖感，但 27 英寸证明这是“屏幕产品”而非前景屏。Storage can build trust, but this is screen-as-product.</span>
    </div>
    <div class="factline">
      <span><b>Camera / 摄像头</b> n/a</span>
      <span><b>Light / 灯光</b> n/a</span>
      <span><b>Voice / 语音</b> Voice control through remote / LG ThinQ ecosystem</span>
      <span><b>Storage / 收纳</b> Briefcase storage; built-in battery; can be carried closed or used flat in tabl...</span>
    </div>
    <div class="source">Source note: LG official galleries and product pages; three images show use, storage, and table states.</div>
  </div>
</div>

---
<div class="kicker">Competitor Teardown · B</div>

# AOOSTAR G-Flip 370 / G-Flip 370

<div class="product">
  <div class="image-grid">
    <img :src="'/survey-report/images/competitors/local/gflip-render.png'" />
    <img :src="'/survey-report/images/competitors/local/flip-desk-monitor.png'" />
    <img :src="'/survey-report/images/competitors/local/flip-table-scene.png'" />
  </div>
  <div>
    <div class="spec-list">
      <b>屏幕 / Screen</b><span>5", 1920x1080, LCD touch</span>
      <b>机构 / Mechanism</b><span>铝合金翻转铰链，0° 到 65°。Aluminum hinge, 0° to 65°.</span>
      <b>感知 / Sensing</b><span>No camera, light, or voice module.</span>
      <b>Desky 启示</b><span>5 英寸翻转屏证明“前景屏”可以维持迷你主机尺度。5 inch flip proves the foreground screen can stay compact.</span>
    </div>
    <div class="factline">
      <span><b>Camera / 摄像头</b> n/a</span>
      <span><b>Light / 灯光</b> n/a</span>
      <span><b>Voice / 语音</b> n/a</span>
      <span><b>Storage / 收纳</b> Flip screen folds down to protect the display; compact 130×130mm-class desk foo...</span>
    </div>
    <div class="source">Source note: AOOSTAR official articles and Notebookcheck; local Claude assets retained for use, desk, and storage states.</div>
  </div>
</div>

---
<div class="kicker">Competitor Teardown · B</div>

# Miniproca AiO / Ryzen 7-inch 4K flip-screen mini PC

<div class="product">
  <div class="image-grid"><img src="https://cdn.mos.cms.futurecdn.net/fvs3bMLHv5nqECXeXWgC8a.jpg" /></div>
  <div>
    <div class="spec-list">
      <b>屏幕 / Screen</b><span>7", 3840x2160, 120Hz touch reported</span>
      <b>机构 / Mechanism</b><span>顶面翻起屏，约 0° 到 90°。Top flip-up screen, about 0° to 90°.</span>
      <b>感知 / Sensing</b><span>No built-in camera, light, or voice module.</span>
      <b>Desky 启示</b><span>4K 小屏是参数炫技，不是 Agent PC 的默认价值。4K on a small secondary screen is spec theater, not default agent value.</span>
    </div>
    <div class="factline">
      <span><b>Camera / 摄像头</b> n/a</span>
      <span><b>Light / 灯光</b> n/a</span>
      <span><b>Voice / 语音</b> n/a</span>
      <span><b>Storage / 收纳</b> Display folds down over the top for storage; not a stacking design</span>
    </div>
    <div class="source">Source note: Tom's Hardware, Liliputing, Kickstarter FAQ; image from Future media reference.</div>
  </div>
</div>

---
<div class="kicker">Competitor Teardown · B</div>

# ViewDock Gen2 / ViewDock G2

<div class="product">
  <div class="image-grid">
    <img src="https://liliputing.com/wp-content/uploads/2026/03/viewdock-g2_04.jpg" />
    <img :src="'/survey-report/images/competitors/local/viewdock-wireless-top.png'" />
    <img :src="'/survey-report/images/competitors/local/viewdock-dock-scene.png'" />
  </div>
  <div>
    <div class="spec-list">
      <b>屏幕 / Screen</b><span>4.5", 480x854, touch support not confirmed</span>
      <b>机构 / Mechanism</b><span>顶面翻转屏 + 15W Qi 无线充。Top flip display plus 15W Qi charging pad.</span>
      <b>感知 / Sensing</b><span>No camera, light, or voice module; audio jack reported.</span>
      <b>Desky 启示</b><span>顶面是稀缺资源：翻转屏、充电、散热、堆叠会互相抢位。The top surface is contested by screen, charging, airflow, and stacking.</span>
    </div>
    <div class="factline">
      <span><b>Camera / 摄像头</b> n/a</span>
      <span><b>Light / 灯光</b> n/a</span>
      <span><b>Voice / 语音</b> n/a</span>
      <span><b>Storage / 收纳</b> Folded top surface doubles as a wireless charging dock; compact vertical deskto...</span>
    </div>
    <div class="source">Source note: Liliputing, Kickstarter, Notebookcheck; images show mechanism, storage top, and desk dock state.</div>
  </div>
</div>

---
<div class="kicker">Competitor Teardown · B</div>

# AYANEO AM01S / AYANEO Retro Mini PC AM01S

<div class="product">
  <div class="image-grid">
    <img :src="'/survey-report/images/competitors/local/am01s-pair.png'" />
    <img src="https://liliputing.com/wp-content/uploads/2025/03/am01s_01.jpg" />
    <img src="https://liliputing.com/wp-content/uploads/2025/03/am01s_06.jpg" />
  </div>
  <div>
    <div class="spec-list">
      <b>屏幕 / Screen</b><span>4", 960x400, LCD touch secondary screen</span>
      <b>机构 / Mechanism</b><span>阻尼翻转副屏，官方 0° 到 80°。Damping flip screen, official 0° to 80°.</span>
      <b>感知 / Sensing</b><span>No camera, light, or voice module.</span>
      <b>Desky 启示</b><span>4 英寸适合系统状态，但审批卡片和摄像头预览会紧张。4 inch works for status but is tight for approvals and camera preview.</span>
    </div>
    <div class="factline">
      <span><b>Camera / 摄像头</b> n/a</span>
      <span><b>Light / 灯光</b> n/a</span>
      <span><b>Voice / 语音</b> n/a</span>
      <span><b>Storage / 收纳</b> Screen folds low/flat into the top; retro 1L-class desk mini PC, not stackable</span>
    </div>
    <div class="source">Source note: AYANEO official articles and Liliputing; images cover use, desk, and mechanism states.</div>
  </div>
</div>

---
<div class="kicker">Competitor Teardown · C</div>

# Minisforum UH185 Ultra / AtomMan UH185 Ultra

<div class="product">
  <div class="image-grid">
    <img src="https://liliputing.com/wp-content/uploads/2024/01/uh185_01.jpg" />
    <img :src="'/survey-report/images/competitors/local/uh185-stand.png'" />
  </div>
  <div>
    <div class="spec-list">
      <b>屏幕 / Screen</b><span>4", touch interface reported; independent UI</span>
      <b>机构 / Mechanism</b><span>顶面固定屏，竖放支架可让屏幕和摄像头朝前。Fixed top screen; stand turns screen and camera forward.</span>
      <b>感知 / Sensing</b><span>1080p camera with physical privacy shutter; built-in microphone.</span>
      <b>Desky 启示</b><span>物理遮挡是信任底线；屏幕归属必须在系统架构期定义。Physical shutter is a trust baseline; screen ownership must be architected early.</span>
    </div>
    <div class="factline">
      <span><b>Camera / 摄像头</b> 1080p camera with physical privacy shutter</span>
      <span><b>Light / 灯光</b> n/a</span>
      <span><b>Voice / 语音</b> Built-in microphone</span>
      <span><b>Storage / 收纳</b> Top-fixed display with optional vertical stand posture; no stackable storage de...</span>
    </div>
    <div class="source">Source note: Liliputing, TechRadar, Notebookcheck; local stand asset retained from Claude HTML.</div>
  </div>
</div>

---
<div class="kicker">Competitor Teardown · C</div>

# AOOSTAR GEM12 Pro Max / GEM12 Pro Max

<div class="product">
  <div class="image-grid"><img :src="'/survey-report/images/competitors/local/gem12-promax.png'" /></div>
  <div>
    <div class="spec-list">
      <b>屏幕 / Screen</b><span>3.5", IPS information display; no touch</span>
      <b>机构 / Mechanism</b><span>前脸固定嵌入副屏，旁边有指纹识别。Fixed front embedded secondary screen with fingerprint nearby.</span>
      <b>感知 / Sensing</b><span>No camera or voice; boot/status animation on screen.</span>
      <b>Desky 启示</b><span>状态屏能降低黑盒感，但不能承载 Agent 授权。Status screens reduce black-box anxiety but cannot carry agent approval.</span>
    </div>
    <div class="factline">
      <span><b>Camera / 摄像头</b> n/a</span>
      <span><b>Light / 灯光</b> Boot/status animation on secondary screen</span>
      <span><b>Voice / 语音</b> n/a</span>
      <span><b>Storage / 收纳</b> Horizontal mini PC with fixed front display; no stacking claim reported</span>
    </div>
    <div class="source">Source note: AOOSTAR official secondary-screen article, Notebookcheck, TechSpot; local Claude asset retained.</div>
  </div>
</div>

---
<div class="kicker">Competitor Teardown · C</div>

# ACEMAGIC S1 / ACEMAGIC S1 Mini PC

<div class="product">
  <div class="image-grid"><img :src="'/survey-report/images/competitors/local/acemagic-s1.png'" /></div>
  <div>
    <div class="spec-list">
      <b>屏幕 / Screen</b><span>1.9", 170x320, LCD/TFT information display; no touch</span>
      <b>机构 / Mechanism</b><span>竖塔前脸固定状态屏。Fixed front vertical status display.</span>
      <b>感知 / Sensing</b><span>No camera or voice; customizable RGB light strip.</span>
      <b>Desky 启示</b><span>灯光若无语义，只会停留在装饰；Desky 需要状态语言。Without semantics, light remains decoration; Desky needs a state language.</span>
    </div>
    <div class="factline">
      <span><b>Camera / 摄像头</b> n/a</span>
      <span><b>Light / 灯光</b> Customizable RGB light strip</span>
      <span><b>Voice / 语音</b> n/a</span>
      <span><b>Storage / 收纳</b> Vertical tower placement; magnetic side access for upgrades; not stackable</span>
    </div>
    <div class="source">Source note: ACEMAGIC official page, TechRadar, CNX Software; local Claude asset retained.</div>
  </div>
</div>

---
<div class="kicker">Competitor Teardown · C</div>

# AYANEO AM02 / AYANEO Retro Mini PC AM02

<div class="product">
  <div class="image-grid">
    <img src="https://liliputing.com/wp-content/uploads/2024/05/01.png" />
    <img src="https://liliputing.com/wp-content/uploads/2024/05/02.png" />
    <img src="https://liliputing.com/wp-content/uploads/2024/05/19.png" />
  </div>
  <div>
    <div class="spec-list">
      <b>屏幕 / Screen</b><span>4", touch display; resolution not published in checked sources</span>
      <b>机构 / Mechanism</b><span>固定倾角顶屏 + 弹出式前端口盖。Fixed angled top screen plus pop-up front port cover.</span>
      <b>感知 / Sensing</b><span>No camera or voice; power/status indicator reported.</span>
      <b>Desky 启示</b><span>游戏机隐喻强，但 Agent PC 需要更克制的工作台语言。Console nostalgia is expressive; an Agent PC needs calmer desk language.</span>
    </div>
    <div class="factline">
      <span><b>Camera / 摄像头</b> n/a</span>
      <span><b>Light / 灯光</b> Power/status indicator reported</span>
      <span><b>Voice / 语音</b> n/a</span>
      <span><b>Storage / 收纳</b> Console-like horizontal desk placement; no stacking design reported</span>
    </div>
    <div class="source">Source note: AYANEO official product/article pages, Liliputing review, Tom's Hardware; images from Liliputing.</div>
  </div>
</div>

---
<div class="kicker">Competitor Teardown · D</div>

# Higole / Gole1 Pro / HIGOLEPC Gole 1 Pro

<div class="product">
  <div class="image-grid"><img src="https://www.cnx-software.com/wp-content/uploads/2022/07/mini-pc-with-touchscreen-display.jpg" /></div>
  <div>
    <div class="spec-list">
      <b>屏幕 / Screen</b><span>5.5", 1280x720, IPS touch</span>
      <b>机构 / Mechanism</b><span>内置电池的手持平板式迷你 PC。Handheld slab mini PC with built-in battery.</span>
      <b>感知 / Sensing</b><span>No built-in camera; built-in microphone, speaker, and 3.5mm audio jack.</span>
      <b>Desky 启示</b><span>5.5 英寸可以完整触控，但 slab 形态不应成为 Desky 的默认桌面姿态。5.5 inch can carry touch, but the slab posture is not Desky's default desk object.</span>
    </div>
    <div class="factline">
      <span><b>Camera / 摄像头</b> n/a</span>
      <span><b>Light / 灯光</b> n/a</span>
      <span><b>Voice / 语音</b> Built-in microphone</span>
      <span><b>Storage / 收纳</b> Pocket/handheld slab; current official retail page lists a 2500mAh battery; not...</span>
    </div>
    <div class="source">Source note: corrected CNX Software image and Gole retail cross-check. The legacy higole-scene.png is not used as Higole evidence.</div>
  </div>
</div>

---
<div class="kicker">Competitor Teardown · D</div>

# PiPO X8 / PiPO X8 Mini PC

<div class="product">
  <div class="image-grid"><img :src="'/survey-report/images/competitors/local/pipo-x8.png'" /></div>
  <div>
    <div class="spec-list">
      <b>屏幕 / Screen</b><span>7", 1280x800, IPS touch</span>
      <b>机构 / Mechanism</b><span>固定楔形倾角面板。Fixed wedge-shaped angled panel.</span>
      <b>感知 / Sensing</b><span>No built-in camera or voice; integrated speakers reported.</span>
      <b>Desky 启示</b><span>楔形一体屏稳定，但屏幕角度和堆叠扩展被锁死。A wedge is stable, but it fixes both viewing angle and expansion path.</span>
    </div>
    <div class="factline">
      <span><b>Camera / 摄像头</b> n/a</span>
      <span><b>Light / 灯光</b> n/a</span>
      <span><b>Voice / 语音</b> n/a</span>
      <span><b>Storage / 收纳</b> Wedge desktop box with fixed viewing angle; not stackable</span>
    </div>
    <div class="source">Source note: Liliputing, PiPO product family page, Home Theatre Life hands-on; local Claude asset retained.</div>
  </div>
</div>

---
<div class="kicker">Competitor Teardown · D</div>

# 8-inch N150 white-label touch mini PC / KOOFORWAY 8-inch N150

<div class="product">
  <div class="image-grid">
    <img :src="'/survey-report/images/competitors/local/n150-8inch-views.png'" />
    <img :src="'/survey-report/images/competitors/local/tablet-8inch-pink.png'" />
  </div>
  <div>
    <div class="spec-list">
      <b>屏幕 / Screen</b><span>8", 1280x800 common configuration; IPS, 10-point touch reported</span>
      <b>机构 / Mechanism</b><span>按 SKU 变化：360° 转轴、kickstand 或迷你笔记本。SKU-dependent convertible hinge or kickstand.</span>
      <b>感知 / Sensing</b><span>2MP camera on some variants; voice/audio details vary by SKU.</span>
      <b>Desky 启示</b><span>8 英寸供应链强，但白牌形态证明它容易变成小平板电脑。8 inch supply is strong, yet it easily reads as a small tablet PC.</span>
    </div>
    <div class="factline">
      <span><b>Camera / 摄像头</b> 2MP on some variants</span>
      <span><b>Light / 灯光</b> n/a</span>
      <span><b>Voice / 语音</b> unknown after source search</span>
      <span><b>Storage / 收纳</b> Pocket mini-laptop/tablet form; convertible or kickstand desk placement; not st...</span>
    </div>
    <div class="source">Source note: Liliputing, X-Plus, Amazon SKU references; local Claude assets retained.</div>
  </div>
</div>

---
<div class="kicker">Competitor Teardown · D</div>

# Seeed Studio reTerminal / Seeed reTerminal 5"

<div class="product">
  <div class="image-grid"><img :src="'/survey-report/images/competitors/local/reterminal-banner.png'" /></div>
  <div>
    <div class="spec-list">
      <b>屏幕 / Screen</b><span>5", 1280x720, IPS capacitive multi-touch</span>
      <b>机构 / Mechanism</b><span>基于 Raspberry Pi CM4 的固定模块化 HMI。Fixed modular HMI panel based on Raspberry Pi CM4.</span>
      <b>感知 / Sensing</b><span>Ambient light sensor; CSI camera and voice/audio can be added through expansion.</span>
      <b>Desky 启示</b><span>5 英寸 720p 已足够做清晰控制面，但消费级外观需要重新设计。5 inch 720p is enough for control, but consumer industrial design must be redesigned.</span>
    </div>
    <div class="factline">
      <span><b>Camera / 摄像头</b> n/a; CSI camera expansion is available</span>
      <span><b>Light / 灯光</b> Ambient light sensor</span>
      <span><b>Voice / 语音</b> n/a; audio/voice can be added through expansion</span>
      <span><b>Storage / 收纳</b> Panel/HMI module with expansion interfaces; suitable for mounted or embedded pl...</span>
    </div>
    <div class="source">Source note: Seeed Wiki and product page; local Claude asset retained.</div>
  </div>
</div>

---
<div class="kicker">Competitor Teardown · D</div>

# BMG800 edge gateway / 佰马 BMG800 边缘计算网关

<div class="product">
  <div class="image-grid"><img :src="'/survey-report/images/competitors/local/bmg800-diagram.png'" /></div>
  <div>
    <div class="spec-list">
      <b>屏幕 / Screen</b><span>7" optional, 800x480, TFT HMI touch variants</span>
      <b>机构 / Mechanism</b><span>工业网关固定面板，可柜内、墙面、导轨部署。Fixed industrial gateway panel for cabinet, wall, or rail contexts.</span>
      <b>感知 / Sensing</b><span>External video/voice acquisition; PWR, SYS, ONLINE, WIFI, GPS LEDs.</span>
      <b>Desky 启示</b><span>状态 LED 语言清楚，但工业 HMI 密度不适合桌面用户。Status LEDs are clear, but industrial HMI density is wrong for a desk user.</span>
    </div>
    <div class="factline">
      <span><b>Camera / 摄像头</b> External video/image acquisition supported; no built-in camera</span>
      <span><b>Light / 灯光</b> PWR, SYS, ONLINE, WIFI, GPS status LEDs</span>
      <span><b>Voice / 语音</b> External voice acquisition supported; no built-in far-field voice interface</span>
      <span><b>Storage / 收纳</b> Industrial gateway for local configuration, data view/export, and cabinet/rail...</span>
    </div>
    <div class="source">Source note: Baimatech Chinese/English pages; local Claude diagram retained as spec evidence.</div>
  </div>
</div>

---
<div class="kicker">Competitor Teardown · E</div>

# Violoop / Bvio Violoop

<div class="product">
  <div class="image-grid"><img src="https://violoop.ai/media/cube.webp" /></div>
  <div>
    <div class="spec-list">
      <b>屏幕 / Screen</b><span>Palm-sized touch screen; exact resolution unpublished in checked sources</span>
      <b>机构 / Mechanism</b><span>桌面 cube，通过 HDMI/USB/Type-C 读主机画面。Desktop cube connected through HDMI and USB / Type-C.</span>
      <b>感知 / Sensing</b><span>No camera; bottom ambient light visible; mic/voice/audio specs not published.</span>
      <b>Desky 启示</b><span>Agent 专用硬件应先解释“它为什么在桌上”，再解释算力。Agent hardware must justify its desk presence before its compute story.</span>
    </div>
    <div class="factline">
      <span><b>Camera / 摄像头</b> n/a; reads host screen through HDMI capture</span>
      <span><b>Light / 灯光</b> Bottom ambient light shown in product imagery / media material</span>
      <span><b>Voice / 语音</b> unknown after source search</span>
      <span><b>Storage / 收纳</b> Small desktop inline appliance between host computer and monitor; no stacking d...</span>
    </div>
    <div class="source">Source note: Violoop official site, 36Kr Europe, Pandaily; official media image used.</div>
  </div>
</div>

---
<div class="kicker">Competitor Teardown · E</div>

# Moore Threads AICUBE / 摩尔线程 MTT AICUBE

<div class="product">
  <div class="image-grid"><img src="https://img.leikeji.com/resource/img/2bbc1dd2cd70443da1d63b44094c09fd.jpg" /></div>
  <div>
    <div class="spec-list">
      <b>屏幕 / Screen</b><span>No built-in screen, touch, or panel</span>
      <b>机构 / Mechanism</b><span>立方体 AI 盒子，通过 Type-C / 外接屏输出。Cube AI box with external display path.</span>
      <b>感知 / Sensing</b><span>Four-microphone array, Xiaomai assistant, stereo speakers reported; camera not built in.</span>
      <b>Desky 启示</b><span>语音和音频可以成为 Agent PC 的默认输入输出，但没有前景屏会缺少确认层。Voice/audio can be core I/O, but no foreground screen means no approval layer.</span>
    </div>
    <div class="factline">
      <span><b>Camera / 摄像头</b> n/a</span>
      <span><b>Light / 灯光</b> unknown after source search</span>
      <span><b>Voice / 语音</b> Four-microphone array + Xiaomai assistant reported</span>
      <span><b>Storage / 收纳</b> Desk/home AI box; storage expansion reported without opening the device; no sta...</span>
    </div>
    <div class="source">Source note: VideoCardz, 雷科技, 搜狐; image from 雷科技 media reference.</div>
  </div>
</div>

---
<div class="kicker">Competitor Teardown · F</div>

# NVIDIA DGX Spark / DGX Spark

<div class="product">
  <div class="image-grid"><img src="https://www.nvidia.com/content/dam/en-zz/Solutions/dgx-spark/DGX-Spark-og.jpg" /></div>
  <div>
    <div class="spec-list">
      <b>屏幕 / Screen</b><span>No built-in screen; external display output</span>
      <b>机构 / Mechanism</b><span>150 x 150 x 50.5mm small-form-factor AI desktop system.</span>
      <b>感知 / Sensing</b><span>No built-in camera or voice; HDMI multichannel audio output.</span>
      <b>Desky 启示</b><span>双机成簇比无限堆叠更可信；热和互连要先被限制。Dual-unit clustering is more credible than unlimited stacking; heat and interconnect must be bounded.</span>
    </div>
    <div class="factline">
      <span><b>Camera / 摄像头</b> n/a</span>
      <span><b>Light / 灯光</b> unknown after source search</span>
      <span><b>Voice / 语音</b> n/a</span>
      <span><b>Storage / 收纳</b> Official docs support up to 200B models on one unit and 405B dual-Spark configu...</span>
    </div>
    <div class="source">Source note: NVIDIA hardware docs and product page; official product image used.</div>
  </div>
</div>

---
<div class="kicker">Competitor Teardown · F</div>

# Apple Mac mini M4 / Mac mini (M4)

<div class="product">
  <div class="image-grid"><img src="https://www.apple.com/v/mac-mini/specs/a/images/meta/mac-mini__dvce2jrm11w2_og.jpg?202606241942" /></div>
  <div>
    <div class="spec-list">
      <b>屏幕 / Screen</b><span>No built-in screen; external display support</span>
      <b>机构 / Mechanism</b><span>127 x 127 x 50mm desktop computer.</span>
      <b>感知 / Sensing</b><span>No built-in camera; front status light; Siri/Dictation with external microphone.</span>
      <b>Desky 启示</b><span>Mac mini 尺寸是 Desky 算力盒参考，但前景屏不能压住散热和扩展。Mac mini scale is a compute-box reference, but the foreground screen cannot block airflow and expansion.</span>
    </div>
    <div class="factline">
      <span><b>Camera / 摄像头</b> n/a</span>
      <span><b>Light / 灯光</b> Status indicator light on front</span>
      <span><b>Voice / 语音</b> Siri and Dictation supported through macOS; external microphone required</span>
      <span><b>Storage / 收纳</b> Small 5×5 inch footprint; external rack/vertical accessories exist, but direct...</span>
    </div>
    <div class="source">Source note: Apple specs and support pages; official technical specification image used.</div>
  </div>
</div>

---
<div class="kicker">Synthesis · Distribution</div>

# 屏幕尺寸 × 分辨率分布

<div class="grid2">
  <div>
    <div class="panel"><b>1.9-5"</b><div class="bar"><span style="width:42%"></span></div><span class="small">副屏/状态屏密集区：S1、GEM12、AM01S、ViewDock、G-Flip、reTerminal。Secondary/status-screen cluster.</span></div>
    <div class="panel" style="margin-top:8px"><b>5.5-8"</b><div class="bar"><span style="width:33%"></span></div><span class="small">完整交互带：Higole、PiPO、N150、Miniproca、BMG800。Integrated interaction band.</span></div>
    <div class="panel" style="margin-top:8px"><b>10"+</b><div class="bar"><span style="width:20%"></span></div><span class="small">屏幕即产品：Echo Show、Lenovo、LG。Terminal/screen-as-product band.</span></div>
  </div>
  <div class="panel">
    <h3>关键读数 / Key reading</h3>
    <p>1280x800 / 1280x720 是 5-10 英寸内最稳的供应链水位；4K 小屏是少数营销型例外。</p>
    <p class="small">1280x800 / 1280x720 is the mainstream line across the 5-10 inch range; 4K small screens are exceptional spec-driven cases.</p>
    <p>6 英寸附近几乎真空，正好给 Desky 的“审批前景屏”留下新定位。</p>
    <p class="small">The near-empty 6 inch band gives Desky room to define an approval-oriented foreground screen.</p>
  </div>
</div>

---
<div class="kicker">Synthesis · Mechanical Distribution</div>

# 机械结构类型分布

<div class="grid3">
  <div class="panel"><div class="metric">8</div><b>固定 / Fixed</b><p class="small">固定副屏、平板 HMI、工业面板。Fixed secondary screens, tablet HMI, industrial panels.</p></div>
  <div class="panel"><div class="metric">4</div><b>翻转 / Flip</b><p class="small">2024-2026 新品集中出现。Clustered in recent mini-PC products.</p></div>
  <div class="panel"><div class="metric">2</div><b>电机 / Motorized</b><p class="small">Amazon 和 Lenovo 两个高成本样本。Amazon and Lenovo only.</p></div>
  <div class="panel"><div class="metric">2</div><b>箱体/支撑臂 / Case-arm</b><p class="small">LG 与大屏终端路线。LG and large terminal route.</p></div>
  <div class="panel"><div class="metric">2</div><b>Agent appliance</b><p class="small">Violoop, AICUBE 证明屏幕可弱化但确认层会缺失。Screen can be reduced, but approval layer is missing.</p></div>
  <div class="panel"><div class="metric">2</div><b>Compute reference</b><p class="small">DGX Spark, Mac mini 定义算力盒尺度和散热边界。Define compute-box scale and thermal limits.</p></div>
</div>

---
<div class="kicker">Synthesis · Five Archetypes</div>

# 五种机械原型

<div class="grid2">
  <div class="concept-art"><img :src="'/survey-report/images/generated/market-archetypes-synthesis.png'" /></div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
    <div class="panel"><h3>1 固定嵌入屏</h3><p class="small">低风险、低成本、低可调。<br>Low risk, low cost, low adjustability.</p></div>
    <div class="panel"><h3>2 翻转副屏</h3><p class="small">可收纳、可保护、可表达开合仪式。<br>Storable, protective, expressive.</p></div>
    <div class="panel"><h3>3 电机旋转</h3><p class="small">强展示，但贵、吵、占桌面。<br>High demo value, high cost and clearance.</p></div>
    <div class="panel"><h3>4 支撑臂/箱体</h3><p class="small">适合大屏终端，不适合小算力盒默认形态。<br>Good for large terminals, not compact compute.</p></div>
    <div class="panel"><h3>5 平板/HMI 面板</h3><p class="small">工程稳定，但容易工具化或工业化。<br>Stable, but can feel too tool-like or industrial.</p></div>
    <div class="panel"><h3>Desky 选择</h3><p class="small red">屏幕模块分离 + 固定广角基线，再评估 flip 或 micro PTZ。<br>Separate screen module + fixed wide-angle baseline, then evaluate flip or micro PTZ.</p></div>
  </div>
</div>

---
<div class="kicker">Synthesis · Flip Hinge Diagram</div>

# 翻转铰链侧视：0° / 65° / 90°

<svg class="svgbox" viewBox="0 0 960 330" xmlns="http://www.w3.org/2000/svg">
  <style>.body{fill:#f8fafc;stroke:#111;stroke-width:2}.screen{fill:#fff;stroke:#111;stroke-width:2}.hinge{stroke:#dc2626;stroke-width:5;stroke-linecap:round}.label{font:18px Arial;font-weight:700}.note{font:13px Arial;fill:#4b5563}</style>
  <g transform="translate(60,50)">
    <rect class="body" x="0" y="120" width="210" height="80" rx="8"/><rect class="screen" x="18" y="76" width="174" height="38" rx="6"/><line class="hinge" x1="36" y1="120" x2="174" y2="120"/><text class="label" x="105" y="238" text-anchor="middle">0° storage</text><text class="note" x="105" y="260" text-anchor="middle">屏幕向下保护 / face-down protection</text>
  </g>
  <g transform="translate(375,50)">
    <rect class="body" x="0" y="120" width="210" height="80" rx="8"/><rect class="screen" x="20" y="50" width="174" height="42" rx="6" transform="rotate(-25 107 121)"/><line class="hinge" x1="36" y1="120" x2="174" y2="120"/><path d="M172 122 A60 60 0 0 0 149 76" fill="none" stroke="#dc2626" stroke-width="2"/><text class="label" x="105" y="238" text-anchor="middle">65° normal use</text><text class="note" x="105" y="260" text-anchor="middle">常用角 / common work angle</text>
  </g>
  <g transform="translate(690,50)">
    <rect class="body" x="0" y="120" width="210" height="80" rx="8"/><rect class="screen" x="80" y="-6" width="50" height="118" rx="6"/><line class="hinge" x1="36" y1="120" x2="174" y2="120"/><text class="label" x="105" y="238" text-anchor="middle">90° upright</text><text class="note" x="105" y="260" text-anchor="middle">展示/远距可读 / upright glance</text>
  </g>
</svg>

<p class="small muted">工程基线 / Engineering baseline: top-front hinge placement, friction torque hinge, FPC through-axis routing, 20k+ open-close life target.</p>

---
<div class="kicker">Synthesis · Eight Pattern Laws</div>

# 八条规律 1-4

<div class="grid2">
  <div class="law"><b>1. 尺寸双峰，6 英寸真空</b><p class="small">1.9-5" 是副屏，5.5-8" 是完整交互，10"+ 是终端。<br>Dual-peak sizing; the 6 inch band is underdefined.</p></div>
  <div class="law"><b>2. 1280 长边是主流水位</b><p class="small">720p/800p 覆盖 5-10 英寸，4K 小屏不是趋势。<br>720p/800p is the mainstream; 4K small screens are not the trend.</p></div>
  <div class="law"><b>3. IPS LCD 与电容触控成为默认</b><p class="small">OLED 是少数旗舰例外；交互屏默认多点触控。<br>IPS LCD dominates; interactive screens default to capacitive touch.</p></div>
  <div class="law"><b>4. 结构从固定走向翻转，再到少量电机</b><p class="small">翻转是近期增量共识；电机仍是高风险路线。<br>Flip is the recent consensus; motorization remains high risk.</p></div>
</div>

---
<div class="kicker">Synthesis · Eight Pattern Laws</div>

# 八条规律 5-8

<div class="grid2">
  <div class="law"><b>5. 翻转铰链参数已收敛</b><p class="small">顶面前缘、0-65/80/90°、摩擦扭矩、合盖保护。<br>Top-front hinge, 0-65/80/90°, friction torque, closed protection.</p></div>
  <div class="law"><b>6. 副屏系统归属必须早定</b><p class="small">MCU 常显 vs 主系统扩展屏，决定体验韧性。<br>MCU always-on layer vs host extended display defines resilience.</p></div>
  <div class="law"><b>7. 摄像头、灯光、语音三件套几乎空白</b><p class="small">这正是 Agent PC 的差异化窗口。<br>This is the differentiation window for an Agent PC.</p></div>
  <div class="law"><b>8. Footprint 收敛但堆叠抢顶面</b><p class="small">127-175mm 方形带稳定，风道必须侧后向。<br>The square footprint is stable; airflow must move side/rear.</p></div>
</div>

---
<div class="kicker">Synthesis · Morphology Matrix</div>

# 形态矩阵：1,296 种组合收敛到约 24 个可行架构

<div class="grid2">
  <div class="panel">
    <h3>组合空间 / Combination space</h3>
    <p class="metric">3 x 3 x 4 x 2 x 3 x 2 x 3 = 1,296</p>
    <p class="small">屏幕尺寸、分辨率、机构、摄像头、灯光、语音、堆叠/互连。<br>Screen size, resolution, mechanism, camera, light, voice, stacking/interconnect.</p>
  </div>
  <div class="panel">
    <h3>工程过滤 / Engineering reduction</h3>
    <p class="metric red">about 24</p>
    <p class="small">移除 4K 小副屏、电机追踪 + 堆叠顶盖、800x480 完整交互等坏组合。<br>Remove bad pairings like 4K small secondary screens, motor tracking plus stackable top covers, and 800x480 full interaction.</p>
  </div>
</div>

<div class="decision" style="margin-top:22px">中文决策：最后不是选一个“最大屏幕”，而是选一个可靠的感知-确认-堆叠架构。<br>English summary: The decision is not the biggest screen; it is a reliable sensing, approval, and stacking architecture.</div>

---
<div class="kicker">Desky Recommendation · Screen Bands</div>

# 三段屏幕建议

<div class="grid3">
  <div class="panel"><h3>5.0-5.5" 状态带</h3><p class="small">适合常显状态、语音态、单次确认；不适合复杂任务列表。<br>Good for always-on state, voice state, one-shot approval; weak for task lists.</p></div>
  <div class="panel"><h3 class="red">6.0-6.7" 首选审批带</h3><p class="small">能放确认卡、摄像头 preview、两到三条任务；仍保持小物件姿态。<br>Fits approval cards, camera preview, 2-3 tasks while staying compact.</p></div>
  <div class="panel"><h3>7.0-7.x" 小 hub 上限</h3><p class="small">适合更强 companion，但要避免默认 8 英寸智能屏化。<br>Useful for a stronger companion, but avoid default smart-display posture.</p></div>
</div>

---
<div class="kicker">Desky Recommendation · Camera Routes</div>

# 三条摄像头路线

<div class="grid3">
  <div class="panel"><h3 class="red">固定广角基线</h3><p class="small">13MP wide-angle + digital crop + physical shutter + semantic light. Low risk, high trust.<br>13MP 广角 + 数字裁切 + 物理遮挡 + 语义灯，低风险且可信。</p></div>
  <div class="panel"><h3>微型云台差异化</h3><p class="small">Only if quiet, compact, shuttered, and clearly not a surveillance head.<br>只有在安静、小型、有遮挡、非监控感时才值得做。</p></div>
  <div class="panel"><h3>大云台谨慎</h3><p class="small">Camera-first volume changes the category and increases desk anxiety.<br>大镜头体积会改变品类认知，增加桌面焦虑。</p></div>
</div>

---
<div class="kicker">Desky Recommendation · Compute Dock</div>

# 算力盒可堆叠，屏幕模块要分离

<div class="grid2">
  <div class="panel">
    <h3>Stackable compute dock</h3>
    <p>算力盒可以像 Mac mini / DGX Spark 一样保持方形 footprint，但堆叠不应占用顶面散热。</p>
    <p class="small">Compute boxes can keep the square footprint, but stacking must not block the top airflow path.</p>
  </div>
  <div class="panel">
    <h3>Separated screen module</h3>
    <p>屏幕、摄像头、灯、麦克风是“前景交互模块”，不应被每一层算力盒复制。</p>
    <p class="small">The screen, camera, light, and mic are the foreground interaction module, not something repeated on every compute layer.</p>
  </div>
</div>

<p class="muted">Desky ID implication: 分体不是复杂化，而是让感知层始终在最上层/最前方，让算力层在后方扩展。Separation keeps sensing in front/top and lets compute scale behind it.</p>

---
<div class="kicker">Desky Recommendation · Storage And Stacking</div>

# 三种收纳/堆叠方式

<div class="grid3">
  <div class="panel"><h3>1 磁吸塔式</h3><p class="small">1-4 台整齐堆叠，感知顶盖固定，Pogo power/wake bus，侧后风道。<br>1-4 unit tower, fixed sensing cap, pogo bus, side/rear airflow.</p></div>
  <div class="panel"><h3>2 竖插托架</h3><p class="small">散热和热插拔最好，但桌面宽度更大。<br>Best for cooling and hot-swap, but wider on desk.</p></div>
  <div class="panel"><h3>3 并排高速桥</h3><p class="small">适合双机，互连最短；不适合 3 台以上。<br>Best for two units and shortest bridge; not for 3+ units.</p></div>
</div>

---
<div class="kicker">Desky Recommendation · Decision Checklist</div>

# 最终工业设计决策清单

<div class="grid2">
  <div>
    <p><span class="chip">Screen</span> 中文：默认 6.0-6.7"，保留 5.5 与 7.x 变体。<br><span class="small">English: Default to 6.0-6.7", keep 5.5 and 7.x variants.</span></p>
    <p><span class="chip">Camera</span> 中文：固定广角 + 物理滑盖为 baseline。<br><span class="small">English: Fixed wide-angle plus physical shutter as baseline.</span></p>
    <p><span class="chip">Light</span> 中文：灯光必须映射 Agent 状态。<br><span class="small">English: Light must map to agent state, not decoration.</span></p>
    <p><span class="chip">Voice</span> 中文：远场麦克风阵列进入首代 ID 约束。<br><span class="small">English: Far-field mic array belongs in Gen-1 ID constraints.</span></p>
  </div>
  <div>
    <p><span class="chip">System</span> 中文：MCU 常显层 + 主系统投射层。<br><span class="small">English: MCU always-on layer plus host projection layer.</span></p>
    <p><span class="chip">Thermal</span> 中文：堆叠必须侧后向风道。<br><span class="small">English: Stacking requires side/rear airflow.</span></p>
    <p><span class="chip">Posture</span> 中文：首代避免 8 英寸默认路线。<br><span class="small">English: Avoid 8 inch as the Gen-1 default posture.</span></p>
    <p><span class="chip">Trust</span> 中文：摄像头灯态和遮挡不可删减。<br><span class="small">English: Camera light state and shutter are non-removable trust features.</span></p>
  </div>
</div>

---
<div class="kicker">Prompt-Backed Sketch · 01</div>

# Fixed Wide-Angle Compact Screen / 固定广角紧凑屏

<div class="grid2">
  <div class="concept-art"><img :src="'/survey-report/images/generated/agent-screen-fixed-wide-angle.png'" /></div>
  <div class="panel">
    <h3>Generated sketch / 生成白描图</h3>
    <p>6.0-6.7 英寸横向触控屏，顶部细条内置固定广角摄像头、物理隐私滑盖、语义灯带和麦克风孔。</p>
    <p class="small">A 6.0-6.7 inch landscape touch module with fixed wide-angle camera, physical privacy slider, semantic light strip, and mic perforations.</p>
    <p class="small muted">Imagegen output saved in project assets; prompt source is tracked in research/imagegen-prompts.md.</p>
  </div>
</div>

---
<div class="kicker">Prompt-Backed Sketch · 02</div>

# Micro PTZ Camera Variant / 微型云台摄像头变体

<div class="grid2">
  <div class="concept-art"><img :src="'/survey-report/images/generated/agent-screen-micro-ptz.png'" /></div>
  <div class="panel">
    <h3>Generated sketch / 生成白描图</h3>
    <p>小型 pan-tilt 摄像头 pod 位于屏幕上方，必须友好、精密、非监控感，并带隐私遮挡与状态灯。</p>
    <p class="small">A small micro pan-tilt pod above the display, friendly and precise rather than surveillance-like, with shutter and status light.</p>
    <p class="small muted">Use this as an optional route only after fixed wide-angle framing is proven insufficient.</p>
  </div>
</div>

---
<div class="kicker">Prompt-Backed Sketch · 03</div>

# Flip Screen Developer Box / 翻转屏开发者盒

<div class="grid2">
  <div class="concept-art"><img :src="'/survey-report/images/generated/flip-screen-developer-box.png'" /></div>
  <div class="panel">
    <h3>Generated sketch / 生成白描图</h3>
    <p>5 英寸顶面翻转触控屏，展示合盖、65° 常用、90° 直立三种 ghosted 状态，强调铰链与侧后风道。</p>
    <p class="small">A 5 inch flip-up touch screen with closed, 65°, and 90° ghost states, highlighting hinge and side/rear airflow.</p>
    <p class="small muted">Best used for developer-box posture, where storage protection and glance angle matter.</p>
  </div>
</div>

---
<div class="kicker">Prompt-Backed Sketch · 04</div>

# Stackable Compute Dock / 可堆叠算力底座

<div class="grid2">
  <div class="concept-art"><img :src="'/survey-report/images/generated/stackable-compute-dock.png'" /></div>
  <div class="panel">
    <h3>Generated sketch / 生成白描图</h3>
    <p>1-4 个 Mac-mini-like 算力盒整齐堆叠，前方或上方放独立 5-7.x 英寸 Agent 屏幕模块。</p>
    <p class="small">A 1-4 unit compute-box stack with a separate 5-7.x inch foreground Agent screen module.</p>
    <p class="small muted">Screen, camera, light, and mic stay on the foreground module so compute boxes remain stackable.</p>
  </div>
</div>

---
<div class="kicker">Prompt-Backed Sketch · 05</div>

# Large PTZ Caution Route / 大云台谨慎路线

<div class="grid2">
  <div class="concept-art"><img :src="'/survey-report/images/generated/large-ptz-caution-route.png'" /></div>
  <div class="panel">
    <h3>Generated sketch / 生成白描图</h3>
    <p>用同样白线风格画出大摄像头压过屏幕的对比路线，并用红色标出体积和桌面 footprint 风险。</p>
    <p class="small">A contrast route where a large camera head dominates the product, with red marking the volume and desk footprint risk.</p>
    <p class="small muted">Treat as a later enterprise-room option, not the default Agent PC identity.</p>
  </div>
</div>

---
<div class="kicker">Prompt-Backed Sketch · 06</div>

# Screen Size Band Diagram / 屏幕尺寸带图

<div class="grid2">
  <div class="concept-art"><img :src="'/survey-report/images/generated/screen-size-band-diagram.png'" /></div>
  <div class="panel">
    <h3>Generated sketch / 生成白描图</h3>
    <p>并排绘制三种屏幕模块相对尺度：状态带、审批带、小 hub 带，用最少 UI 暗示用途。</p>
    <p class="small">Three modules side by side showing status, approval, and small-hub bands with minimal UI hints.</p>
    <p class="small muted">This reinforces the recommendation: 6.0-6.7 inch is the default, 7.x is the upper band.</p>
  </div>
</div>

---
<div class="kicker">Risks · From Claude HTML</div>

# 五条风险注记

<div class="grid2">
  <div class="panel"><b>1 电机风险</b><p class="small">别轻易上电机；广角 + 裁切可以用更低成本覆盖多数跟随感。<br>Avoid motorization by default; wide-angle plus crop covers most tracking needs.</p></div>
  <div class="panel"><b>2 副屏归属</b><p class="small">MCU 常显层 + 主系统投射层，避免主机异常时屏幕沉默。<br>Use MCU always-on plus host projection so the device can still speak when the host fails.</p></div>
  <div class="panel"><b>3 堆叠散热</b><p class="small">塔式堆叠会盖住顶面，必须侧后向风道。<br>Stacking covers the top; airflow must move side/rear.</p></div>
  <div class="panel"><b>4 供应链品控</b><p class="small">4K 小屏和众筹铰链不要带偏 EVT。<br>Do not let 4K small screens or crowdfunding hinges distort EVT priorities.</p></div>
  <div class="panel"><b>5 摄像头信任</b><p class="small">物理滑盖 + 灯环联动是不可删减项。<br>Physical shutter plus light-state linkage is non-removable.</p></div>
</div>

---
<div class="kicker">Source Appendix · Groups</div>

# 来源附录分组

<div class="grid2">
  <div>
    <p><span class="chip">Official first</span> Lenovo PSREF, LG, AOOSTAR, AYANEO, Seeed, Baimatech, NVIDIA, Apple.</p>
    <p><span class="chip">Media verified</span> Tom's Guide, PCWorld, Liliputing, TechRadar, Notebookcheck, Tom's Hardware, CNX Software.</p>
    <p><span class="chip">Crowdfunding / retail</span> Kickstarter, Amazon SKU, Gole retail, X-Plus.</p>
  </div>
  <div>
    <p><span class="chip">Image ledger</span> 15 local assets and 16 remote images tracked in research files.</p>
    <p><span class="chip">Higole correction</span> CNX image is final; `higole-scene.png` is legacy/non-final and not used as Higole evidence.</p>
    <p><span class="chip">Appendix scope</span> Source URLs live in `research/source-registry.md`; per-product images live in `research/products.json` and `research/image-inventory.md`.</p>
  </div>
</div>

---
<div class="kicker">Final Decision</div>

# Desky 的下一步 ID 方向

<div class="decision">
中文：做一个 6.0-6.7 英寸横向审批前景屏，固定广角摄像头、物理滑盖、语义灯带、远场麦克风阵列，与可堆叠算力盒分离。<br>
English: Build a 6.0-6.7 inch landscape approval foreground screen with fixed wide-angle camera, physical shutter, semantic light strip, and far-field mic array, separated from stackable compute boxes.
</div>

<div class="grid3" style="margin-top:26px">
  <div class="panel"><b>Keep / 保留</b><p class="small">8 inch evidence, 1280x800 supply-chain confidence, flip-hinge parameters.</p></div>
  <div class="panel"><b>Narrow / 收窄</b><p class="small">Default posture from smart-display scale to compact Agent PC foreground screen.</p></div>
  <div class="panel"><b>Prototype / 原型</b><p class="small">6.0-6.7 fixed wide-angle baseline first; micro PTZ only after trust and noise tests.</p></div>
</div>
