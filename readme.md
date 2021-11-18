## Y 站弹幕插件

### 预览

![弹幕 GIF](https://files.catbox.moe/u7npel.gif)

### 快速开始

#### Node.js

```shell
npm i yzhandanmu
```

#### Browser

引入 yzhandanmu.js 到 HTML 即可

#### 演示

您可以在 Demo 文件夹中，查看：

- index.html 原生 js 示例  
  Demo: https://mantoufan.github.io/yzhanDanmu/demo/
- react.html React 示例  
  Demo: https://mantoufan.github.io/yzhanDanmu/demo/react.html

理论上，支持与任何框架搭配使用

### API

```javascript
/** Step 1 初始化 */
const yZhanDanMu = new YZhanDanMu({
  p: document.getElementById('app') // 容器对象
})
/** Step 2 创建弹幕 */
// 原生 JS
const o = document.createElement('DIV')
// React
const o = ReactDOM.render(<div>Text</div>, document.createDocumentFragment())
/** Step 3 添加弹幕到容器 */
yZhanDanMu.add(o, {
  animations: {
    'animation-duration': `20ms` // 弹幕持续时间
    ... // 支持其它 animation 开头的 CSS 属性
  },
  prior: 'time' // time 默认时间优先 nooverlap 不重叠优先(相应时间本应出现的弹幕会延迟出现)
}
/** Step 4 销毁 */
yZhanDanMu.destroy()
```

### 功能特性

- 任意高度
- 无极变速
- 自动省电
  - 在支持自动省电的设备上，当且仅当当前窗口为活跃窗口时，满速运行

### 支持框架

- 原生 JavaScript
- React 框架

### 专利权

本插件应用通道算法已获得专利权，正处于保护期间
