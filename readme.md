## Y 站弹幕插件 Y station barrage plug-in

### Preview 预览 

![Y 站弹幕插件预览图 Y station barrage plug-in Preivew GIF](https://i.loli.net/2021/11/20/3YGOFEWnNkcLyxV.gif)

### Quick start 快速开始

#### Node.js

```shell
npm i yzhandanmu
```

#### Browser

```html
<script src="https://cdn.jsdelivr.net/npm/yzhandanmu/dist/yzhandanmu.min.js"></scirpt>
```

#### Demo 演示

- index.html Native Javascipt
  Demo: https://mantoufan.github.io/yzhanDanmu/demo/
- react.html React
  Demo: https://mantoufan.github.io/yzhanDanmu/demo/react.html

It could be used with any JS / TS Library

### API

```javascript
/** Step 1 Initialize */
const yZhanDanMu = new YZhanDanMu({
  p: document.getElementById('app') // Select an element on the page as the container
})
/** Step 2 Create Barrage */
// Native JS
const o = document.createElement('DIV')
// React
const o = ReactDOM.render(<div>Text</div>, document.createDocumentFragment())
/** Step 3 Add Barrage to the container */
yZhanDanMu.add(o, {
  duration: 2000, // ms，Barrage display time
  speed: .2, // px / ms, Barrage display speed, it will override the duration, keep barrages of different lengths at the same speed
  prior: 'time' /** Display strategy of new barrage when Barrage is full: 
  1. time - Barrage will appear on time, even if it overlaps
  2. nooverlap - Barrage will be delayed until a space is available
  3. nooverlap-highest - Barrage will be delayed until a space is available as soon as possible
                */
}
/** Step 4 destroy */
yZhanDanMu.destroy()
```

### Features 功能

- Adapt to barrage at any height and length 弹幕高度、长度任意
- Barrage can be displayed at a fixed time or at a fixed speed (uniform speed) 弹幕可以固定时间或固定速度（匀速）显示
- When the barrage is full, multiple priority strategies can be added to the new barrage 弹幕全满时，新弹幕添加可选多种优先策略
  - time - Barrage will appear on time, even if it overlaps 时间优先：弹幕将准时出现，即使会重叠
  - nooverlap - Barrage will be delayed until a space is available 不重叠优先：弹幕将延迟出现，直到找到空位
  - nooverlap-highest - Barrage will be delayed until a space is available as soon as possible 不重叠优先之最高优先级：弹幕将延迟出现，直到找到空位，并且会尽快
- Automatic power saving 自动省电
  - On devices that support automatic power saving, when the current window is not active, slow down or stop running 支持自动省电的设备上，当前窗口不活跃时，降速或停止运行

### Patent right 专利权

The application channel algorithm of the plug-in has obtained the patent right of Chinese invention and is under protection  
本插件应用通道算法已获得中国发明专利权，正处于保护期间
