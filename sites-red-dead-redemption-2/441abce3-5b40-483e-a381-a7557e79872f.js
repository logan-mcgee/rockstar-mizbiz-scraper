try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "441abce3-5b40-483e-a381-a7557e79872f", e._sentryDebugIdIdentifier = "sentry-dbid-441abce3-5b40-483e-a381-a7557e79872f")
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
  [7304, 9158], {
    4715: (e, t, r) => {
      var n = r(99310),
        o = r(68832),
        i = r(20391),
        a = r(62132),
        u = r(81344),
        s = r(79464),
        f = r(53371),
        c = r(30264),
        d = "[object Arguments]",
        l = "[object Array]",
        v = "[object Object]",
        p = Object.prototype.hasOwnProperty;
      e.exports = function(e, t, r, h, b, g) {
        var y = s(e),
          w = s(t),
          x = y ? l : u(e),
          m = w ? l : u(t),
          _ = (x = x == d ? v : x) == v,
          j = (m = m == d ? v : m) == v,
          k = x == m;
        if (k && f(e)) {
          if (!f(t)) return !1;
          y = !0, _ = !1
        }
        if (k && !_) return g || (g = new n), y || c(e) ? o(e, t, r, h, b, g) : i(e, t, x, r, h, b, g);
        if (!(1 & r)) {
          var O = _ && p.call(e, "__wrapped__"),
            M = j && p.call(t, "__wrapped__");
          if (O || M) {
            var E = O ? e.value() : e,
              L = M ? t.value() : t;
            return g || (g = new n), b(E, L, r, h, g)
          }
        }
        return !!k && (g || (g = new n), a(e, t, r, h, b, g))
      }
    },
    9738: (e, t, r) => {
      var n = r(56130),
        o = r(28593),
        i = r(22909),
        a = Math.max,
        u = Math.min;
      e.exports = function(e, t, r) {
        var s, f, c, d, l, v, p = 0,
          h = !1,
          b = !1,
          g = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function y(t) {
          var r = s,
            n = f;
          return s = f = void 0, p = t, d = e.apply(n, r)
        }

        function w(e) {
          var r = e - v;
          return void 0 === v || r >= t || r < 0 || b && e - p >= c
        }

        function x() {
          var e = o();
          if (w(e)) return m(e);
          l = setTimeout(x, function(e) {
            var r = t - (e - v);
            return b ? u(r, c - (e - p)) : r
          }(e))
        }

        function m(e) {
          return l = void 0, g && s ? y(e) : (s = f = void 0, d)
        }

        function _() {
          var e = o(),
            r = w(e);
          if (s = arguments, f = this, v = e, r) {
            if (void 0 === l) return function(e) {
              return p = e, l = setTimeout(x, t), h ? y(e) : d
            }(v);
            if (b) return clearTimeout(l), l = setTimeout(x, t), y(v)
          }
          return void 0 === l && (l = setTimeout(x, t)), d
        }
        return t = i(t) || 0, n(r) && (h = !!r.leading, c = (b = "maxWait" in r) ? a(i(r.maxWait) || 0, t) : c, g = "trailing" in r ? !!r.trailing : g), _.cancel = function() {
          void 0 !== l && clearTimeout(l), p = 0, s = v = f = l = void 0
        }, _.flush = function() {
          return void 0 === l ? d : m(o())
        }, _
      }
    },
    10533: (e, t, r) => {
      var n = r(86601);
      e.exports = function(e, t, r, o) {
        return o = "function" == typeof o ? o : void 0, null == e ? e : n(e, t, r, o)
      }
    },
    10613: (e, t, r) => {
      var n = r(23117);
      e.exports = function(e, t, r) {
        var o = null == e ? void 0 : n(e, t);
        return void 0 === o ? r : o
      }
    },
    12273: (e, t, r) => {
      var n = r(96161),
        o = r(10613),
        i = r(58146),
        a = r(63297),
        u = r(41685),
        s = r(89738),
        f = r(81966);
      e.exports = function(e, t) {
        return a(e) && u(t) ? s(f(e), t) : function(r) {
          var a = o(r, e);
          return void 0 === a && a === t ? i(r, e) : n(t, a, 3)
        }
      }
    },
    12919: (e, t, r) => {
      "use strict";
      r.d(t, {
        Ub: () => i
      });
      var n = r(60211),
        o = r(71127);

      function i(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const i = e => n.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [a, u] = (0, o.useState)(() => r ? i(e) : t);

        function s() {
          u(i(e))
        }
        return (0, o.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return s(), t?.addListener ? t?.addListener(s) : t?.addEventListener("change", s), () => {
            t?.removeListener ? t?.removeListener(s) : t?.removeEventListener("change", s)
          }
        }, [e]), a
      }
      r(51105)
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
    17328: (e, t, r) => {
      "use strict";
      r.d(t, {
        fi: () => o
      }), r(60211);
      const n = e => e - .02,
        o = {
          mobile: `(min-width: 0px) and (max-width: ${n(768)}px)`,
          tablet: `(min-width: 768px) and (max-width: ${n(1440)}px)`,
          tabletAndLarger: "(min-width: 768px)",
          desktop: `(min-width: 1440px) and (max-width: ${n(1920)}px)`,
          desktopAndLarger: "(min-width: 1440px)",
          desktopLarge: `(min-width: 1920px) and (max-width: ${n(2560)}px)`,
          desktopLargeAndLarger: "(min-width: 1920px)",
          desktopXL: "(min-width: 2560px)",
          portrait: "(orientation: portrait)",
          landscape: "(orientation: landscape)",
          ultrawide: "(min-aspect-ratio: 2.5)"
        };
      var i;
      r(51105), r(98312), r(41972), r(56265), r(31454), r(10533), r(10613), r(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(i || (i = {})), Symbol.toStringTag
    },
    20391: (e, t, r) => {
      var n = r(77432),
        o = r(50181),
        i = r(59679),
        a = r(68832),
        u = r(25860),
        s = r(84886),
        f = n ? n.prototype : void 0,
        c = f ? f.valueOf : void 0;
      e.exports = function(e, t, r, n, f, d, l) {
        switch (r) {
          case "[object DataView]":
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
            e = e.buffer, t = t.buffer;
          case "[object ArrayBuffer]":
            return !(e.byteLength != t.byteLength || !d(new o(e), new o(t)));
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
            var v = u;
          case "[object Set]":
            var p = 1 & n;
            if (v || (v = s), e.size != t.size && !p) return !1;
            var h = l.get(e);
            if (h) return h == t;
            n |= 2, l.set(e, t);
            var b = a(v(e), v(t), n, f, d, l);
            return l.delete(e), b;
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
    22909: (e, t, r) => {
      var n = r(87625),
        o = r(56130),
        i = r(25733),
        a = /^[-+]0x[0-9a-f]+$/i,
        u = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        f = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var r = u.test(e);
        return r || s.test(e) ? f(e.slice(2), r ? 2 : 8) : a.test(e) ? NaN : +e
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
    28593: (e, t, r) => {
      var n = r(15036);
      e.exports = function() {
        return n.Date.now()
      }
    },
    29693: (e, t, r) => {
      var n = r(54170),
        o = r(43644),
        i = r(72916),
        a = r(79464);
      e.exports = function(e, t) {
        return function(r, u) {
          var s = a(r) ? n : o,
            f = t ? t() : {};
          return s(r, e, i(u, 2), f)
        }
      }
    },
    31454: (e, t, r) => {
      var n = r(49192);
      e.exports = function(e) {
        return n(e, 5)
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
    51105: (e, t, r) => {
      "use strict";
      r(1556), new Map
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
    60211: (e, t, r) => {
      "use strict";
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    62132: (e, t, r) => {
      var n = r(21679),
        o = Object.prototype.hasOwnProperty;
      e.exports = function(e, t, r, i, a, u) {
        var s = 1 & r,
          f = n(e),
          c = f.length;
        if (c != n(t).length && !s) return !1;
        for (var d = c; d--;) {
          var l = f[d];
          if (!(s ? l in t : o.call(t, l))) return !1
        }
        var v = u.get(e),
          p = u.get(t);
        if (v && p) return v == t && p == e;
        var h = !0;
        u.set(e, t), u.set(t, e);
        for (var b = s; ++d < c;) {
          var g = e[l = f[d]],
            y = t[l];
          if (i) var w = s ? i(y, g, l, t, e, u) : i(g, y, l, e, t, u);
          if (!(void 0 === w ? g === y || a(g, y, r, i, u) : w)) {
            h = !1;
            break
          }
          b || (b = "constructor" == l)
        }
        if (h && !b) {
          var x = e.constructor,
            m = t.constructor;
          x == m || !("constructor" in e) || !("constructor" in t) || "function" == typeof x && x instanceof x && "function" == typeof m && m instanceof m || (h = !1)
        }
        return u.delete(e), u.delete(t), h
      }
    },
    63773: (e, t, r) => {
      var n = r(78328),
        o = r(7933),
        i = r(79464),
        a = r(21574),
        u = r(5841),
        s = r(81966);
      e.exports = function(e, t, r) {
        for (var f = -1, c = (t = n(t, e)).length, d = !1; ++f < c;) {
          var l = s(t[f]);
          if (!(d = null != e && r(e, l))) break;
          e = e[l]
        }
        return d || ++f != c ? d : !!(c = null == e ? 0 : e.length) && u(c) && a(l, c) && (i(e) || o(e))
      }
    },
    68832: (e, t, r) => {
      var n = r(46874),
        o = r(60119),
        i = r(74854);
      e.exports = function(e, t, r, a, u, s) {
        var f = 1 & r,
          c = e.length,
          d = t.length;
        if (c != d && !(f && d > c)) return !1;
        var l = s.get(e),
          v = s.get(t);
        if (l && v) return l == t && v == e;
        var p = -1,
          h = !0,
          b = 2 & r ? new n : void 0;
        for (s.set(e, t), s.set(t, e); ++p < c;) {
          var g = e[p],
            y = t[p];
          if (a) var w = f ? a(y, g, p, t, e, s) : a(g, y, p, e, t, s);
          if (void 0 !== w) {
            if (w) continue;
            h = !1;
            break
          }
          if (b) {
            if (!o(t, function(e, t) {
                if (!i(b, t) && (g === e || u(g, e, r, a, s))) return b.push(t)
              })) {
              h = !1;
              break
            }
          } else if (g !== y && !u(g, y, r, a, s)) {
            h = !1;
            break
          }
        }
        return s.delete(e), s.delete(t), h
      }
    },
    72632: (e, t, r) => {
      var n = r(60623);
      e.exports = function(e, t) {
        return function(r, o) {
          if (null == r) return r;
          if (!n(r)) return e(r, o);
          for (var i = r.length, a = t ? i : -1, u = Object(r);
            (t ? a-- : ++a < i) && !1 !== o(u[a], a, u););
          return r
        }
      }
    },
    72916: (e, t, r) => {
      var n = r(13052),
        o = r(12273),
        i = r(40515),
        a = r(79464),
        u = r(50416);
      e.exports = function(e) {
        return "function" == typeof e ? e : null == e ? i : "object" == typeof e ? a(e) ? o(e[0], e[1]) : n(e) : u(e)
      }
    },
    74854: e => {
      e.exports = function(e, t) {
        return e.has(t)
      }
    },
    75888: e => {
      var t = Math.ceil,
        r = Math.max;
      e.exports = function(e, n, o, i) {
        for (var a = -1, u = r(t((n - e) / (o || 1)), 0), s = Array(u); u--;) s[i ? u : ++a] = e, e += o;
        return s
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
        u = void 0;

      function s(e, t, r = {}, n = u) {
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
          id: s,
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
        }(r), d = c.get(e) || [];
        return c.has(e) || c.set(e, d), d.push(t), f.observe(e),
          function() {
            d.splice(d.indexOf(t), 1), 0 === d.length && (c.delete(e), f.unobserve(e)), 0 === c.size && (f.disconnect(), o.delete(s))
          }
      }

      function f({
        threshold: e,
        delay: t,
        trackVisibility: r,
        rootMargin: o,
        root: i,
        triggerOnce: a,
        skip: u,
        initialInView: f,
        fallbackInView: c,
        onChange: d
      } = {}) {
        var l;
        const [v, p] = n.useState(null), h = n.useRef(d), [b, g] = n.useState({
          inView: !!f,
          entry: void 0
        });
        h.current = d, n.useEffect(() => {
          if (u || !v) return;
          let n;
          return n = s(v, (e, t) => {
            g({
              inView: e,
              entry: t
            }), h.current && h.current(e, t), t.isIntersecting && a && n && (n(), n = void 0)
          }, {
            root: i,
            rootMargin: o,
            threshold: e,
            trackVisibility: r,
            delay: t
          }, c), () => {
            n && n()
          }
        }, [Array.isArray(e) ? e.toString() : e, v, i, o, a, u, r, c, t]);
        const y = null == (l = b.entry) ? void 0 : l.target,
          w = n.useRef(void 0);
        v || !y || a || u || w.current === y || (w.current = y, g({
          inView: !!f,
          entry: void 0
        }));
        const x = [p, b.inView, b.entry];
        return x.ref = x[0], x.inView = x[1], x.entry = x[2], x
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
    85531: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)););
        return r
      }
    },
    86601: (e, t, r) => {
      var n = r(56312),
        o = r(78328),
        i = r(21574),
        a = r(56130),
        u = r(81966);
      e.exports = function(e, t, r, s) {
        if (!a(e)) return e;
        for (var f = -1, c = (t = o(t, e)).length, d = c - 1, l = e; null != l && ++f < c;) {
          var v = u(t[f]),
            p = r;
          if ("__proto__" === v || "constructor" === v || "prototype" === v) return e;
          if (f != d) {
            var h = l[v];
            void 0 === (p = s ? s(h, v, l) : void 0) && (p = a(h) ? h : i(t[f + 1]) ? [] : {})
          }
          n(l, v, p), l = l[v]
        }
        return e
      }
    },
    87625: (e, t, r) => {
      var n = r(85531),
        o = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, n(e) + 1).replace(o, "") : e
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
          u = a,
          s = !i;
        if (null == e) return !u;
        for (e = Object(e); a--;) {
          var f = r[a];
          if (s && f[2] ? f[1] !== e[f[0]] : !(f[0] in e)) return !1
        }
        for (; ++a < u;) {
          var c = (f = r[a])[0],
            d = e[c],
            l = f[1];
          if (s && f[2]) {
            if (void 0 === d && !(c in e)) return !1
          } else {
            var v = new n;
            if (i) var p = i(d, l, c, e, t, v);
            if (!(void 0 === p ? o(l, d, 3, i, v) : p)) return !1
          }
        }
        return !0
      }
    },
    95187: (e, t, r) => {
      var n = r(22909),
        o = 1 / 0;
      e.exports = function(e) {
        return e ? (e = n(e)) === o || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
      }
    },
    96161: (e, t, r) => {
      var n = r(4715),
        o = r(24189);
      e.exports = function e(t, r, i, a, u) {
        return t === r || (null == t || null == r || !o(t) && !o(r) ? t != t && r != r : n(t, r, i, a, e, u))
      }
    },
    98312: (e, t, r) => {
      var n = r(99335)();
      e.exports = n
    },
    99335: (e, t, r) => {
      var n = r(75888),
        o = r(4661),
        i = r(95187);
      e.exports = function(e) {
        return function(t, r, a) {
          return a && "number" != typeof a && o(t, r, a) && (r = a = void 0), t = i(t), void 0 === r ? (r = t, t = 0) : r = i(r), a = void 0 === a ? t < r ? 1 : -1 : i(a), n(t, r, a, e)
        }
      }
    }
  }
]);