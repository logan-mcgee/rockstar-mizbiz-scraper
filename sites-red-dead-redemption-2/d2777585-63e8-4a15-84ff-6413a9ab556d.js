try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d2777585-63e8-4a15-84ff-6413a9ab556d", e._sentryDebugIdIdentifier = "sentry-dbid-d2777585-63e8-4a15-84ff-6413a9ab556d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [8745], {
    4715: (e, t, r) => {
      var n = r(99310),
        o = r(68832),
        i = r(20391),
        a = r(62132),
        s = r(81344),
        u = r(79464),
        f = r(53371),
        c = r(30264),
        l = "[object Arguments]",
        d = "[object Array]",
        v = "[object Object]",
        p = Object.prototype.hasOwnProperty;
      e.exports = function(e, t, r, b, g, h) {
        var y = u(e),
          _ = u(t),
          w = y ? d : s(e),
          x = _ ? d : s(t),
          j = (w = w == l ? v : w) == v,
          k = (x = x == l ? v : x) == v,
          m = w == x;
        if (m && f(e)) {
          if (!f(t)) return !1;
          y = !0, j = !1
        }
        if (m && !j) return h || (h = new n), y || c(e) ? o(e, t, r, b, g, h) : i(e, t, w, r, b, g, h);
        if (!(1 & r)) {
          var O = j && p.call(e, "__wrapped__"),
            E = k && p.call(t, "__wrapped__");
          if (O || E) {
            var M = O ? e.value() : e,
              V = E ? t.value() : t;
            return h || (h = new n), g(M, V, r, b, h)
          }
        }
        return !!m && (h || (h = new n), a(e, t, r, b, g, h))
      }
    },
    12273: (e, t, r) => {
      var n = r(96161),
        o = r(10613),
        i = r(58146),
        a = r(63297),
        s = r(41685),
        u = r(89738),
        f = r(81966);
      e.exports = function(e, t) {
        return a(e) && s(t) ? u(f(e), t) : function(r) {
          var a = o(r, e);
          return void 0 === a && a === t ? i(r, e) : n(t, a, 3)
        }
      }
    },
    13052: (e, t, r) => {
      var n = r(92272),
        o = r(33145),
        i = r(89738);
      e.exports = function(e) {
        var t = o(e);
        return 1 == t.length && t[0][2] ? i(t[0][0], t[0][1]) : function(r) {
          return r === e || n(r, e, t)
        }
      }
    },
    20391: (e, t, r) => {
      var n = r(77432),
        o = r(50181),
        i = r(59679),
        a = r(68832),
        s = r(25860),
        u = r(84886),
        f = n ? n.prototype : void 0,
        c = f ? f.valueOf : void 0;
      e.exports = function(e, t, r, n, f, l, d) {
        switch (r) {
          case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
            e = e.buffer, t = t.buffer;
          case "[object ArrayBuffer]":
            return !(e.byteLength != t.byteLength || !l(new o(e), new o(t)));
          case "[object Boolean]":
          case "[object Date]":
          case "[object Number]":
            return i(+e, +t);
          case "[object Error]":
            return e.name == t.name && e.message == t.message;
          case "[object RegExp]":
          case "[object String]":
            return e == t + "";
          case "[object Map]":
            var v = s;
          case "[object Set]":
            var p = 1 & n;
            if (v || (v = u), e.size != t.size && !p) return !1;
            var b = d.get(e);
            if (b) return b == t;
            n |= 2, d.set(e, t);
            var g = a(v(e), v(t), n, f, l, d);
            return d.delete(e), g;
          case "[object Symbol]":
            if (c) return c.call(e) == c.call(t)
        }
        return !1
      }
    },
    22282: e => {
      e.exports = function(e, t) {
        return null != e && t in Object(e)
      }
    },
    24024: e => {
      e.exports = function(e) {
        return function(t) {
          return null == t ? void 0 : t[e]
        }
      }
    },
    25860: e => {
      e.exports = function(e) {
        var t = -1,
          r = Array(e.size);
        return e.forEach(function(e, n) {
          r[++t] = [n, e]
        }), r
      }
    },
    29693: (e, t, r) => {
      var n = r(54170),
        o = r(43644),
        i = r(72916),
        a = r(79464);
      e.exports = function(e, t) {
        return function(r, s) {
          var u = a(r) ? n : o,
            f = t ? t() : {};
          return u(r, e, i(s, 2), f)
        }
      }
    },
    33145: (e, t, r) => {
      var n = r(41685),
        o = r(59125);
      e.exports = function(e) {
        for (var t = o(e), r = t.length; r--;) {
          var i = t[r],
            a = e[i];
          t[r] = [i, a, n(a)]
        }
        return t
      }
    },
    39040: (e, t, r) => {
      var n = r(45828),
        o = r(72632)(n);
      e.exports = o
    },
    41685: (e, t, r) => {
      var n = r(56130);
      e.exports = function(e) {
        return e == e && !n(e)
      }
    },
    41772: e => {
      e.exports = function(e) {
        return this.__data__.has(e)
      }
    },
    42535: (e, t, r) => {
      var n = r(96571),
        o = r(29693),
        i = Object.prototype.hasOwnProperty,
        a = o(function(e, t, r) {
          i.call(e, r) ? e[r].push(t) : n(e, r, [t])
        });
      e.exports = a
    },
    43644: (e, t, r) => {
      var n = r(39040);
      e.exports = function(e, t, r, o) {
        return n(e, function(e, n, i) {
          t(o, e, r(e), i)
        }), o
      }
    },
    44822: (e, t, r) => {
      var n = r(23117);
      e.exports = function(e) {
        return function(t) {
          return n(t, e)
        }
      }
    },
    45828: (e, t, r) => {
      var n = r(74350),
        o = r(59125);
      e.exports = function(e, t) {
        return e && n(e, t, o)
      }
    },
    46874: (e, t, r) => {
      var n = r(21708),
        o = r(79871),
        i = r(41772);

      function a(e) {
        var t = -1,
          r = null == e ? 0 : e.length;
        for (this.__data__ = new n; ++t < r;) this.add(e[t])
      }
      a.prototype.add = a.prototype.push = o, a.prototype.has = i, e.exports = a
    },
    50416: (e, t, r) => {
      var n = r(24024),
        o = r(44822),
        i = r(63297),
        a = r(81966);
      e.exports = function(e) {
        return i(e) ? n(a(e)) : o(e)
      }
    },
    54170: e => {
      e.exports = function(e, t, r, n) {
        for (var o = -1, i = null == e ? 0 : e.length; ++o < i;) {
          var a = e[o];
          t(n, a, r(a), e)
        }
        return n
      }
    },
    58146: (e, t, r) => {
      var n = r(22282),
        o = r(63773);
      e.exports = function(e, t) {
        return null != e && o(e, t, n)
      }
    },
    60119: e => {
      e.exports = function(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length; ++r < n;)
          if (t(e[r], r, e)) return !0;
        return !1
      }
    },
    62132: (e, t, r) => {
      var n = r(21679),
        o = Object.prototype.hasOwnProperty;
      e.exports = function(e, t, r, i, a, s) {
        var u = 1 & r,
          f = n(e),
          c = f.length;
        if (c != n(t).length && !u) return !1;
        for (var l = c; l--;) {
          var d = f[l];
          if (!(u ? d in t : o.call(t, d))) return !1
        }
        var v = s.get(e),
          p = s.get(t);
        if (v && p) return v == t && p == e;
        var b = !0;
        s.set(e, t), s.set(t, e);
        for (var g = u; ++l < c;) {
          var h = e[d = f[l]],
            y = t[d];
          if (i) var _ = u ? i(y, h, d, t, e, s) : i(h, y, d, e, t, s);
          if (!(void 0 === _ ? h === y || a(h, y, r, i, s) : _)) {
            b = !1;
            break
          }
          g || (g = "constructor" == d)
        }
        if (b && !g) {
          var w = e.constructor,
            x = t.constructor;
          w == x || !("constructor" in e) || !("constructor" in t) || "function" == typeof w && w instanceof w && "function" == typeof x && x instanceof x || (b = !1)
        }
        return s.delete(e), s.delete(t), b
      }
    },
    63773: (e, t, r) => {
      var n = r(78328),
        o = r(7933),
        i = r(79464),
        a = r(21574),
        s = r(5841),
        u = r(81966);
      e.exports = function(e, t, r) {
        for (var f = -1, c = (t = n(t, e)).length, l = !1; ++f < c;) {
          var d = u(t[f]);
          if (!(l = null != e && r(e, d))) break;
          e = e[d]
        }
        return l || ++f != c ? l : !!(c = null == e ? 0 : e.length) && s(c) && a(d, c) && (i(e) || o(e))
      }
    },
    68832: (e, t, r) => {
      var n = r(46874),
        o = r(60119),
        i = r(74854);
      e.exports = function(e, t, r, a, s, u) {
        var f = 1 & r,
          c = e.length,
          l = t.length;
        if (c != l && !(f && l > c)) return !1;
        var d = u.get(e),
          v = u.get(t);
        if (d && v) return d == t && v == e;
        var p = -1,
          b = !0,
          g = 2 & r ? new n : void 0;
        for (u.set(e, t), u.set(t, e); ++p < c;) {
          var h = e[p],
            y = t[p];
          if (a) var _ = f ? a(y, h, p, t, e, u) : a(h, y, p, e, t, u);
          if (void 0 !== _) {
            if (_) continue;
            b = !1;
            break
          }
          if (g) {
            if (!o(t, function(e, t) {
                if (!i(g, t) && (h === e || s(h, e, r, a, u))) return g.push(t)
              })) {
              b = !1;
              break
            }
          } else if (h !== y && !s(h, y, r, a, u)) {
            b = !1;
            break
          }
        }
        return u.delete(e), u.delete(t), b
      }
    },
    72632: (e, t, r) => {
      var n = r(60623);
      e.exports = function(e, t) {
        return function(r, o) {
          if (null == r) return r;
          if (!n(r)) return e(r, o);
          for (var i = r.length, a = t ? i : -1, s = Object(r);
            (t ? a-- : ++a < i) && !1 !== o(s[a], a, s););
          return r
        }
      }
    },
    72916: (e, t, r) => {
      var n = r(13052),
        o = r(12273),
        i = r(40515),
        a = r(79464),
        s = r(50416);
      e.exports = function(e) {
        return "function" == typeof e ? e : null == e ? i : "object" == typeof e ? a(e) ? o(e[0], e[1]) : n(e) : s(e)
      }
    },
    74854: e => {
      e.exports = function(e, t) {
        return e.has(t)
      }
    },
    76327: (e, t, r) => {
      "use strict";
      r.d(t, {
        Wx: () => f
      });
      var n = r(71127),
        o = (Object.defineProperty, new Map),
        i = new WeakMap,
        a = 0,
        s = void 0;

      function u(e, t, r = {}, n = s) {
        if (void 0 === window.IntersectionObserver && void 0 !== n) {
          const o = e.getBoundingClientRect();
          return t(n, {
            isIntersecting: n,
            target: e,
            intersectionRatio: "number" == typeof r.threshold ? r.threshold : 0,
            time: 0,
            boundingClientRect: o,
            intersectionRect: o,
            rootBounds: o
          }), () => {}
        }
        const {
          id: u,
          observer: f,
          elements: c
        } = function(e) {
          const t = function(e) {
            return Object.keys(e).sort().filter(t => void 0 !== e[t]).map(t => {
              return `${t}_${"root"===t?(r=e.root,r?(i.has(r)||(a+=1,i.set(r,a.toString())),i.get(r)):"0"):e[t]}`;
              var r
            }).toString()
          }(e);
          let r = o.get(t);
          if (!r) {
            const n = new Map;
            let i;
            const a = new IntersectionObserver(t => {
              t.forEach(t => {
                var r;
                const o = t.isIntersecting && i.some(e => t.intersectionRatio >= e);
                e.trackVisibility && void 0 === t.isVisible && (t.isVisible = o), null == (r = n.get(t.target)) || r.forEach(e => {
                  e(o, t)
                })
              })
            }, e);
            i = a.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
              id: t,
              observer: a,
              elements: n
            }, o.set(t, r)
          }
          return r
        }(r), l = c.get(e) || [];
        return c.has(e) || c.set(e, l), l.push(t), f.observe(e),
          function() {
            l.splice(l.indexOf(t), 1), 0 === l.length && (c.delete(e), f.unobserve(e)), 0 === c.size && (f.disconnect(), o.delete(u))
          }
      }

      function f({
        threshold: e,
        delay: t,
        trackVisibility: r,
        rootMargin: o,
        root: i,
        triggerOnce: a,
        skip: s,
        initialInView: f,
        fallbackInView: c,
        onChange: l
      } = {}) {
        var d;
        const [v, p] = n.useState(null), b = n.useRef(l), [g, h] = n.useState({
          inView: !!f,
          entry: void 0
        });
        b.current = l, n.useEffect(() => {
          if (s || !v) return;
          let n;
          return n = u(v, (e, t) => {
            h({
              inView: e,
              entry: t
            }), b.current && b.current(e, t), t.isIntersecting && a && n && (n(), n = void 0)
          }, {
            root: i,
            rootMargin: o,
            threshold: e,
            trackVisibility: r,
            delay: t
          }, c), () => {
            n && n()
          }
        }, [Array.isArray(e) ? e.toString() : e, v, i, o, a, s, r, c, t]);
        const y = null == (d = g.entry) ? void 0 : d.target,
          _ = n.useRef(void 0);
        v || !y || a || s || _.current === y || (_.current = y, h({
          inView: !!f,
          entry: void 0
        }));
        const w = [p, g.inView, g.entry];
        return w.ref = w[0], w.inView = w[1], w.entry = w[2], w
      }
      n.Component
    },
    79871: e => {
      e.exports = function(e) {
        return this.__data__.set(e, "__lodash_hash_undefined__"), this
      }
    },
    84886: e => {
      e.exports = function(e) {
        var t = -1,
          r = Array(e.size);
        return e.forEach(function(e) {
          r[++t] = e
        }), r
      }
    },
    89738: e => {
      e.exports = function(e, t) {
        return function(r) {
          return null != r && r[e] === t && (void 0 !== t || e in Object(r))
        }
      }
    },
    92272: (e, t, r) => {
      var n = r(99310),
        o = r(96161);
      e.exports = function(e, t, r, i) {
        var a = r.length,
          s = a,
          u = !i;
        if (null == e) return !s;
        for (e = Object(e); a--;) {
          var f = r[a];
          if (u && f[2] ? f[1] !== e[f[0]] : !(f[0] in e)) return !1
        }
        for (; ++a < s;) {
          var c = (f = r[a])[0],
            l = e[c],
            d = f[1];
          if (u && f[2]) {
            if (void 0 === l && !(c in e)) return !1
          } else {
            var v = new n;
            if (i) var p = i(l, d, c, e, t, v);
            if (!(void 0 === p ? o(d, l, 3, i, v) : p)) return !1
          }
        }
        return !0
      }
    },
    96161: (e, t, r) => {
      var n = r(4715),
        o = r(24189);
      e.exports = function e(t, r, i, a, s) {
        return t === r || (null == t || null == r || !o(t) && !o(r) ? t != t && r != r : n(t, r, i, a, e, s))
      }
    }
  }
]);