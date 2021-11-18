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
      observer: new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(({ isIntersecting, target }) => {
            if (isIntersecting) {
              observer.unobserve(target)
              mtfWay.remove(target)
              clearTimeout(target.timeout)
            }
          })
        },
        { root: p, threshold: 1 }
      ),
      resetHeight: () => (mtfWay.v.bottom = p.offsetHeight),
      delay: {
        queue: [],
        interval: setInterval(() => {
          if (this.delay.queue.length === 0) return
          const { o, opt } = this.delay.queue.pop()
          this.add(o, opt)
        }, 500)
      }
    })
    this.initCSS(p.id, p.offsetWidth)
    this.window?.addEventListener('resize', this.resetHeight)
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
      `.${danmu} { position: absolute; right: 0; animation-timing-function: linear; animation-fill-mode: forwards; }`,
      0
    )
    style.sheet.insertRule(
      `@keyframes ${rightToLeft} { from { transform: translateX(100%); } to { transform: translateX(-${width}px); } }`,
      0
    )
  }

  add(o, opt = {}) {
    const { p, mtfWay, cssList, observer, delay } = this
    let { animations, prior = 'time' } = opt // time / nooverlap
    if (!o || !p) return
    if (o.id === void 0) o.id = 'yzhan_d_' + uid()
    const {
      danmu,
      animation: { rightToLeft }
    } = cssList
    o.className = danmu
    animations = Object.assign(
      {
        'animation-name': rightToLeft,
        'animation-duration': '5s'
      },
      animations
    )
    for (const property in animations) o.style.setProperty(property, animations[property])
    p.appendChild(o)
    let top = mtfWay.add(o, { prior })
    if (top === false) {
      if (prior === 'nooverlap') {
        delay.queue.push({ o, opt })
        p.removeChild(o)
        return
      }
      top = 0
    }
    o.style.top = top + 'px'
    o.destroy = () => {
      observer.unobserve(o)
      mtfWay.remove(o)
      p.removeChild(o)
    }
    o.addEventListener('animationend', o.destroy)
    observer.observe(o)
  }

  destroy() {
    const { p, resetHeight, observer } = this
    for (let i = 0; i < p.children.length; i++) {
      const o = p.children[i]
      o.removeEventListener('animationend', o.destroy)
      o.destroy()
    }
    observer.disconnect()
    window?.removeEventListener('resize', resetHeight)
    clearInterval(this.delay.interval)
    Object.assign(this, {
      p: null,
      mtfWay: null,
      cssList: null,
      observer: null,
      resetHeight: null,
      delay: null
    })
  }
}
