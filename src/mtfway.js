/** The algorithm used in this document is protected by patent */
module.exports = class MTFWay {
  constructor({ top, bottom, id }) {
    Object.assign(this, {
      _oid: 0,
      s: { p: [], o: [] },
      v: {
        top,
        bottom,
        id
      }
    })
  }

  id(o) {
    if (o === null) return null
    if (o._oid === void 0) o._oid = this._oid++
    return o._oid
  }

  q(a, g, h) {
    for (let i = 0; i < a.length; i++) {
      const e = Math.min(a[i][0], a[i][1]),
        f = Math.max(a[i][0], a[i][1])
      let m
      g[e] = 2
      g[f] = 1
      const c = Object.entries(g)
      if (c.length > 28) return false
      if (a[i][1] >= a[i][0]) {
        for (let j = 0, d; (d = c[j]), j < c.length; j++) {
          if (d[1] == 2) {
            m = d[0]
          } else if (d[1] == 1) {
            if (m) {
              if (d[0] - m >= h) {
                return m | 0
              }
            }
          }
        }
      } else {
        for (let j = c.length, d; (d = c[j]), j--; ) {
          if (d[1] == 1) {
            m = d[0]
          } else if (d[1] == 2) {
            if (m) {
              if (m - d[0] >= h) {
                return (m - h) | 0
              }
            }
          }
        }
      }
    }
    return false
  }

  bpi(b, p, i) {
    if (!b[p]) b[p] = Object.create(null)
    if (!b[p][i]) b[p][i] = Object.create(null)
    return b
  }

  add(o, { prior = 'time' } = {}) {
    const { bpi, q, s, v } = this
    const p = v.id,
      oid = this.id(o)
    let t = false,
      h = o.offsetHeight,
      i = 0
    const max = prior === 'time' ? 3 : 1
    while (t === false && i < max) {
      s.p = bpi(s.p, p, i)
      t = q([[v.top, v.bottom]], s.p[p][i], h)
      h = t + h
      i++
    }
    if (t !== false) {
      i--
      let bt = s.p[p][i][t],
        bh = s.p[p][i][h]
      s.p[p][i][t] = bt && bt == 2 ? 3 : 1
      s.p[p][i][h] = bh && bh == 1 ? 3 : 2
      s.o[oid] = [t, h, i, p]
    }
    return t
  }

  remove(o) {
    const { s } = this
    const oid = this.id(o)
    if (s.o[oid] === void 0) return
    const a = s.o[oid],
      t = a[0],
      h = a[1],
      i = a[2],
      p = a[3],
      bt = s.p[p][i][t],
      bh = s.p[p][i][h]
    delete s.o[oid]
    if (bt) {
      if (bt === 3) {
        s.p[p][i][t] = 2
      } else if (bt === 1) {
        delete s.p[p][i][t]
      }
    }
    if (bh) {
      if (bh === 3) {
        s.p[p][i][h] = 1
      } else if (bh === 2) {
        delete s.p[p][i][h]
      }
    }
  }
}
