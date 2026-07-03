# Web Research Notes

## Method

Claude's HTML report is the base product set. I checked each of the 20 rows against official product/spec pages first where they existed, then reputable media, review, or crowdfunding pages where official material was incomplete or unavailable.

Status vocabulary used in the research files:

- `verified`
- `media-reported`
- `unknown-after-official-and-media-search`
- `not-applicable`

## Product Verification Notes

| Product | Verification result | Notes |
| --- | --- | --- |
| Lenovo Auto Twist | verified | Lenovo PSREF verifies the 14″ OLED, 2880×1800, 120Hz display class; media verifies motorized Auto Twist behavior, camera tracking, and AI scenarios. |
| Amazon Echo Show 10 | media-reported | Amazon's public retail page was less usable for stable archival facts, so the row is backed by Tom's Guide, PCWorld, and a spec mirror for 10.1″, 1280×800, 13MP camera, rotating base, far-field Alexa, and speaker layout. |
| LG StanbyME Go | verified | LG official pages verify 27″ FHD display, touch/remote interaction, suitcase structure, battery, and 20W 4-channel audio. No built-in camera was found. |
| AOOSTAR G-Flip 370 | verified | AOOSTAR official articles verify the 5″ FHD touch display and 0°-65° hinge; media confirms the Ryzen AI 9 HX 370 configuration. |
| Miniproca AiO | media-reported | Tom's Hardware, Liliputing, and Kickstarter material verify the 7″ 4K 120Hz flip touch screen; panel type remains not confirmed. |
| ViewDock Gen2 | media-reported | Liliputing, Kickstarter, and Notebookcheck verify the 4.5″ 480×854 flip display and 15W Qi charging top; touch support was not confirmed. |
| AYANEO AM01S | verified | AYANEO official articles verify the flip-screen concept and 0°-80° damping hinge; media verifies the 4″ 960×400 touch display specification. |
| Minisforum UH185 Ultra | media-reported | Media verifies 4″ touch interface, 1080p camera, physical shutter, and microphone; screen resolution and built-in speaker remain not confirmed. |
| AOOSTAR GEM12 Pro Max | verified | AOOSTAR official material verifies the secondary-screen role; Notebookcheck/TechSpot verify 3.5″ IPS screen and mini PC configuration. Resolution is not published. |
| ACEMAGIC S1 | verified | Official and review sources verify the 1.9″ 170×320 front display and RGB light strip. No touch/camera/voice role was found. |
| AYANEO AM02 | verified | AYANEO official material verifies the 4″ touch screen and pop-up port cover. Resolution was not found in official or media sources. |
| Higole / Gole1 Pro | verified | CNX, Gole retail, and Liliputing verify the 5.5″ 1280×720 IPS touch handheld mini PC with built-in microphone and speaker. The corrected image source is the CNX Gole1 Pro image, not the legacy local scene file. |
| PiPO X8 | media-reported | Liliputing and hands-on material verify the 7″ 1280×800 touch wedge mini PC; PiPO official category page confirms the broader product family. |
| 8-inch N150 white-label touch mini PC | media-reported | Liliputing and retail pages verify the 8″ N150 mini-laptop / mini-PC band, but SKU-level display, camera, mic, and speaker details vary. |
| Seeed Studio reTerminal | verified | Seeed wiki/product pages verify 5″ 1280×720 IPS capacitive multi-touch, light sensor, modular HMI structure, and expansion path. |
| BMG800 edge gateway | verified | Baimatech pages verify the 7″ optional 800×480 HMI/touch controller variants, status LEDs, industrial installation context, and external video/voice acquisition story. |
| Violoop | media-reported | Official site and media verify the small desktop HDMI/USB agent hardware direction and visual design, but resolution, mic, voice, and audio specifications remain unpublished. |
| Moore Threads AICUBE | media-reported | Media verifies the no-screen AI box route, four-mic array, stereo speakers, Xiaomai assistant, and Type-C/external display route. |
| NVIDIA DGX Spark | verified | NVIDIA official docs verify 150×150×50.5mm dimensions and dual-Spark / ConnectX-7 scaling; screen, touch, camera, and mic are not applicable. |
| Apple Mac mini M4 | verified | Apple official specs verify dimensions, external display support, built-in speaker, headphone jack, HDMI audio, and front status light; built-in screen/camera/touch are not applicable. |

## Higole Image Correction

The archived Claude report previously carried a Higole warning because the local `public/images/competitors/local/higole-scene.png` asset is not a Higole product evidence image. That file should remain treated as legacy/non-final material and must not be used as Higole evidence.

Correct Higole / Gole1 Pro evidence:

- Article: https://www.cnx-software.com/2022/07/26/gole1-pro-mini-pc-comes-with-5-5-inch-touch-screen-display-gemini-lake-processor-crowdfunding/
- Image: https://www.cnx-software.com/wp-content/uploads/2022/07/mini-pc-with-touchscreen-display.jpg
- Official/retail cross-check: https://goleminipc.com/products/higole-gole-1-pro-mini-pc-windows-11-pro-intel-celeron-j4125-8gb-ram-256gb-rom

Decision: use the CNX Gole1 Pro product image as the corrected online image reference. Do not use `public/images/competitors/local/higole-scene.png` as final Higole evidence.

## 8 Inch Evidence vs 5-7.x Inch Desky Direction

Claude's HTML report treats 8 inch / 1280x800 as a strong baseline because it is a mature tablet and car-screen supply-chain band and can carry fuller Agent UI density.

The current Desky industrial-design direction narrows first-generation exploration to 5-7.x inches. The reason is product positioning: Desky should remain a compact Agent PC foreground screen, not become an Echo Show or Nest Hub scale smart display.

Implementation decision:

- Keep 8 inch evidence as an upper-bound and supply-chain reference.
- Evaluate 5.0-5.5 inch as status and single-approval band.
- Evaluate 6.0-6.7 inch as the preferred approval-card and camera-preview band.
- Evaluate 7.0-7.x inch as the upper small-hub band.
- Do not recommend 8 inch as the default first-generation baseline unless industrial design intentionally chooses a larger smart-display-like product.
