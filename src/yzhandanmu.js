import MTFWay from './mtfway'
const uid = () => Math.random().toString(36).slice(-6)
const swap = (a, i, j) => {
  const t = a[i]
  a[i] = a[j]
  a[j] = t
}
module.exports = class YZhanDanMu {
  constructor({ p }) {
    if (p.id === void 0) p.id = 'yzhan_p_' + uid()
    if (p.offsetHeight === 0) p.style.height = 300 + 'px'
    const mtfWay = new MTFWay({
      top: 0,
      bottom: p.offsetHeight,
      id: p.id
    })
    Object.assign(this, {
      p,
      mtfWay,
      cssList: {
        danmu: 'yzhan-danmu',
        animation: {
          rightToLeft: 'yzhan-right-to-left'
        }
      },
      queueDelay: [],
      queueIn: [],
      queueOut: [],
      callback() {
        let { p, add, queueIn, queueOut, queueDelay } = this
        const now = Date.now()
        let end = queueIn.length
        for (let i = end; i--; )
          if (queueIn[i].expireIn < now) {
            mtfWay.remove(queueIn[i])
            queueOut.push(queueIn[i])
            swap(queueIn, i, --end)
          }
        queueIn.length = end
        end = queueOut.length
        for (let i = end; i--; )
          if (queueOut[i].expireOut < now) {
            p.removeChild(queueOut[i])
            swap(queueOut, i, --end)
          }
        queueOut.length = end
        if (queueDelay.length) {
          add.apply(this, queueDelay.shift())
          if (queueDelay.length > 50) {
            swap(queueDelay, 0, queueDelay.length - 25)
            queueDelay = queueDelay.slice(-25)
          }
        }
        this.requestId = requestAnimationFrame(this.callback)
      }
    })
    this.callback = this.callback.bind(this)
    this.requestId = requestAnimationFrame(this.callback)
    this.initCSS(p.id, p.offsetWidth)
  }

  initCSS(id, width) {
    const { cssList } = this
    const style = document.createElement('style')
    document.head.appendChild(style)
    const {
      danmu,
      animation: { rightToLeft }
    } = cssList
    style.sheet.insertRule(`#${id} { position: relative }`, 0)
    style.sheet.insertRule(
      `.${danmu} { position: absolute; top: -1000vh; right: 0; animation-timing-function: linear; animation-fill-mode: backwards; }`,
      0
    )
    style.sheet.insertRule(
      `@keyframes ${rightToLeft} { from { transform: translateX(100%); } to { transform: translateX(-${width}px); } }`,
      0
    )
  }

  add(o, opt = {}) {
    const { p, mtfWay, cssList, queueDelay, queueIn } = this
    let { duration = '5000', prior = 'time', speed } = opt // time / nooverlap
    if (!o || !p) return
    if (o.id === void 0) o.id = 'yzhan_d_' + uid()
    const {
      danmu,
      animation: { rightToLeft }
    } = cssList
    o.className = danmu
    p.appendChild(o)
    let top = mtfWay.add(o, { prior })
    if (top === false) {
      if (prior === 'nooverlap') queueDelay.push([o, opt])
      else if (prior === 'nooverlap-highest') queueDelay.unshift([o, opt])
      if (prior !== 'time') {
        p.removeChild(o)
        return
      }
      top = 0
    }
    if (speed) duration = ((p.offsetWidth + o.offsetWidth) / speed) | 0
    o.expireIn = Date.now() + (((duration * o.offsetWidth) / (o.offsetWidth + p.offsetWidth)) | 0)
    o.expireOut = Date.now() + duration
    queueIn.push(o)
    o.style.top = top + 'px'
    o.style.animationDuration = duration + 'ms'
    o.style.animationName = rightToLeft
  }

  destroy() {
    cancelAnimationFrame(this.requestId)
    for (let i = this.p.children.length; i--; ) this.p.removeChild(this.p.children[i])
  }
}
