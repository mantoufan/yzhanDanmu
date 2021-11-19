import MTFWay from './mtfway'
const uid = () => Math.random().toString(36).slice(-6)
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
      delay: {
        queue: [],
        queueRemove: [],
        callback() {
          const now = Date.now()
          for(let i = this.delay.queueRemove.length; i--;) 
            if (this.delay.queueRemove[i].expire < now) {
              mtfWay.remove(this.delay.queueRemove[i])
              this.delay.queueRemove.splice(i, 1)
            }
          if (this.delay.queue.length) {
            this.add.apply(this, this.delay.queue.shift())
            if (this.delay.queue.length > 50) this.delay.queue.splice(1, 25)
          }
          this.delay.requestId = requestAnimationFrame(this.delay.callback)
        }
      }
    })
    this.delay.callback = this.delay.callback.bind(this)
    this.delay.requestId = requestAnimationFrame(this.delay.callback)
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
      `.${danmu} { position: absolute; top: -1000vh; right: 0;  animation-timing-function: linear; animation-fill-mode: forwards }`,
      0
    )
    style.sheet.insertRule(
      `@keyframes ${rightToLeft} { from { transform: translateX(100%); } to { transform: translateX(-${width}px); } }`,
      0
    )
  }

  add(o, opt = {}) {
    const { p, mtfWay, cssList, delay } = this
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
      if (prior === 'nooverlap') delay.queue.push([o, opt])
      else if (prior === 'nooverlap-highest') delay.queue.unshift([o, opt])
      if (prior !== 'time') {
        p.removeChild(o)
        return
      }
      top = 0
    }
    if (speed) duration = ((p.offsetWidth + o.offsetWidth) / speed) | 0
    o.expire = Date.now() + ((duration * o.offsetWidth) / (o.offsetWidth + p.offsetWidth) | 0)
    delay.queueRemove.push(o)
    o.style.top = top + 'px'
    o.style.animationDuration = duration + 'ms'
    o.style.animationName = rightToLeft
    o.destroy = () => {
      p.removeChild(o)
      o.removeEventListener('animationend ', o.destroy)
    }
    o.addEventListener('animationend', o.destroy)
  }

  destroy() {
    for (let i = this.p.children.length; i--; ) this.p.children[i].destroy()
    cancelAnimationFrame(this.delay.requestId)
  }
}
