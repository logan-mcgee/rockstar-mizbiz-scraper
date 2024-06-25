! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bd2e0759-6da3-4738-956d-df1baaed64f2", e._sentryDebugIdIdentifier = "sentry-dbid-bd2e0759-6da3-4738-956d-df1baaed64f2")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [3336], {
    59440: (e, t, n) => {
      "use strict";
      n.d(t, {
        M: () => s
      });
      var o = n(94708),
        r = n(68344);
      const i = {
        any: 0,
        all: 1
      };

      function s(e, t) {
        let {
          root: n,
          margin: s,
          amount: c = "any"
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if ("undefined" == typeof IntersectionObserver) return () => {};
        const a = (0, o.a)(e),
          l = new WeakMap,
          f = new IntersectionObserver((e => {
            e.forEach((e => {
              const n = l.get(e.target);
              if (e.isIntersecting !== Boolean(n))
                if (e.isIntersecting) {
                  const n = t(e);
                  (0, r.m)(n) ? l.set(e.target, n): f.unobserve(e.target)
                } else n && (n(e), l.delete(e.target))
            }))
          }), {
            root: n,
            rootMargin: s,
            threshold: "number" == typeof c ? c : i[c]
          });
        return a.forEach((e => f.observe(e))), () => f.disconnect()
      }
    },
    41955: (e, t, n) => {
      "use strict";
      n.d(t, {
        o: () => H
      });
      var o = n(87672),
        r = n(94708);
      const i = new WeakMap;
      let s;

      function c(e) {
        let {
          target: t,
          contentRect: n,
          borderBoxSize: o
        } = e;
        var r;
        null === (r = i.get(t)) || void 0 === r || r.forEach((e => {
          e({
            target: t,
            contentSize: n,
            get size() {
              return function(e, t) {
                if (t) {
                  const {
                    inlineSize: e,
                    blockSize: n
                  } = t[0];
                  return {
                    width: e,
                    height: n
                  }
                }
                return e instanceof SVGElement && "getBBox" in e ? e.getBBox() : {
                  width: e.offsetWidth,
                  height: e.offsetHeight
                }
              }(t, o)
            }
          })
        }))
      }

      function a(e) {
        e.forEach(c)
      }
      const l = new Set;
      let f;
      var u = n(68344),
        d = n(42264),
        g = n(34652);
      const h = 50,
        p = () => ({
          time: 0,
          x: {
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
          },
          y: {
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
          }
        }),
        m = {
          x: {
            length: "Width",
            position: "Left"
          },
          y: {
            length: "Height",
            position: "Top"
          }
        };

      function v(e, t, n, o) {
        const r = n[t],
          {
            length: i,
            position: s
          } = m[t],
          c = r.current,
          a = n.time;
        r.current = e["scroll" + s], r.scrollLength = e["scroll" + i] - e["client" + i], r.offset.length = 0, r.offset[0] = 0, r.offset[1] = r.scrollLength, r.progress = (0, d.o)(0, r.scrollLength, r.current);
        const l = o - a;
        r.velocity = l > h ? 0 : (0, g.G)(r.current - c, l)
      }
      var y = n(78508),
        w = n(86440),
        b = n(64760);
      const E = {
        Enter: [
          [0, 1],
          [1, 1]
        ],
        Exit: [
          [0, 0],
          [1, 0]
        ],
        Any: [
          [1, 0],
          [0, 1]
        ],
        All: [
          [0, 0],
          [1, 1]
        ]
      };
      var L = n(13416),
        T = n(94648);
      const k = {
        start: 0,
        center: .5,
        end: 1
      };

      function x(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          o = 0;
        if (void 0 !== k[e] && (e = k[e]), (0, T.c)(e)) {
          const t = parseFloat(e);
          e.endsWith("px") ? o = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? o = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? o = t / 100 * document.documentElement.clientHeight : e = t
        }
        return (0, L.I)(e) && (o = t * e), n + o
      }
      const _ = [0, 0];

      function W(e, t, n, o) {
        let r = Array.isArray(e) ? e : _,
          i = 0,
          s = 0;
        return (0, L.I)(e) ? r = [e, e] : (0, T.c)(e) && (r = (e = e.trim()).includes(" ") ? e.split(" ") : [e, k[e] ? e : "0"]), i = x(r[0], n, o), s = x(r[1], t), i - s
      }
      const M = {
        x: 0,
        y: 0
      };

      function z(e, t, n) {
        let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        const r = o.axis || "y";
        return {
          measure: () => function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
              n = arguments.length > 2 ? arguments[2] : void 0;
            if (n.x.targetOffset = 0, n.y.targetOffset = 0, t !== e) {
              let o = t;
              for (; o && o != e;) n.x.targetOffset += o.offsetLeft, n.y.targetOffset += o.offsetTop, o = o.offsetParent
            }
            n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, n.x.containerLength = e.clientWidth, n.y.containerLength = e.clientHeight
          }(e, o.target, n),
          update: t => {
            ! function(e, t, n) {
              v(e, "x", t, n), v(e, "y", t, n), t.time = n
            }(e, n, t), (o.offset || o.target) && function(e, t, n) {
              let {
                offset: o = E.All
              } = n;
              const {
                target: r = e,
                axis: i = "y"
              } = n, s = "y" === i ? "height" : "width", c = r !== e ? function(e, t) {
                let n = {
                    x: 0,
                    y: 0
                  },
                  o = e;
                for (; o && o !== t;)
                  if (o instanceof HTMLElement) n.x += o.offsetLeft, n.y += o.offsetTop, o = o.offsetParent;
                  else if (o instanceof SVGGraphicsElement && "getBBox" in o) {
                  const {
                    top: e,
                    left: t
                  } = o.getBBox();
                  for (n.x += t, n.y += e; o && "svg" !== o.tagName;) o = o.parentNode
                }
                return n
              }(r, e) : M, a = r === e ? {
                width: e.scrollWidth,
                height: e.scrollHeight
              } : {
                width: r.clientWidth,
                height: r.clientHeight
              }, l = {
                width: e.clientWidth,
                height: e.clientHeight
              };
              t[i].offset.length = 0;
              let f = !t[i].interpolate;
              const u = o.length;
              for (let e = 0; e < u; e++) {
                const n = W(o[e], l[s], a[s], c[i]);
                f || n === t[i].interpolatorOffsets[e] || (f = !0), t[i].offset[e] = n
              }
              f && (t[i].interpolate = (0, w.q)((0, b.U)(u), t[i].offset), t[i].interpolatorOffsets = [...t[i].offset]), t[i].progress = t[i].interpolate(t[i].current)
            }(e, n, o)
          },
          notify: (0, u.m)(t) ? () => t(n) : (i = t, s = n[r], i.pause(), i.forEachNative(((e, t) => {
            let {
              easing: n
            } = t;
            var o, r;
            if (e.updateDuration) n || (e.easing = y.k), e.updateDuration(1);
            else {
              const t = {
                duration: 1e3
              };
              n || (t.easing = "linear"), null === (r = null === (o = e.effect) || void 0 === o ? void 0 : o.updateTiming) || void 0 === r || r.call(o, t)
            }
          })), () => {
            i.currentTime = s.progress
          })
        };
        var i, s
      }
      const A = new WeakMap,
        O = new WeakMap,
        S = new WeakMap,
        I = e => e === document.documentElement ? window : e;

      function H(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var {
          container: n = document.documentElement
        } = t, c = (0, o.sX)(t, ["container"]);
        let d = S.get(n);
        d || (d = new Set, S.set(n, d));
        const g = p(),
          h = z(n, e, g, c);
        if (d.add(h), !A.has(n)) {
          const e = () => {
            const e = performance.now();
            for (const e of d) e.measure();
            for (const t of d) t.update(e);
            for (const e of d) e.notify()
          };
          A.set(n, e);
          const t = I(n);
          window.addEventListener("resize", e, {
            passive: !0
          }), n !== document.documentElement && O.set(n, (v = n, y = e, (0, u.m)(v) ? (m = v, l.add(m), f || (f = () => {
            const e = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              t = {
                target: window,
                size: e,
                contentSize: e
              };
            l.forEach((e => e(t)))
          }, window.addEventListener("resize", f)), () => {
            l.delete(m), !l.size && f && (f = void 0)
          }) : function(e, t) {
            s || "undefined" != typeof ResizeObserver && (s = new ResizeObserver(a));
            const n = (0, r.a)(e);
            return n.forEach((e => {
              let n = i.get(e);
              n || (n = new Set, i.set(e, n)), n.add(t), null == s || s.observe(e)
            })), () => {
              n.forEach((e => {
                const n = i.get(e);
                null == n || n.delete(t), (null == n ? void 0 : n.size) || null == s || s.unobserve(e)
              }))
            }
          }(v, y))), t.addEventListener("scroll", e, {
            passive: !0
          })
        }
        var m, v, y;
        const w = A.get(n),
          b = requestAnimationFrame(w);
        return () => {
          var t;
          "function" != typeof e && e.stop(), cancelAnimationFrame(b);
          const o = S.get(n);
          if (!o) return;
          if (o.delete(h), o.size) return;
          const r = A.get(n);
          A.delete(n), r && (I(n).removeEventListener("scroll", r), null === (t = O.get(n)) || void 0 === t || t(), window.removeEventListener("resize", r))
        }
      }
    },
    94708: (e, t, n) => {
      "use strict";

      function o(e, t) {
        var n;
        return "string" == typeof e ? t ? (null !== (n = t[e]) && void 0 !== n || (t[e] = document.querySelectorAll(e)), e = t[e]) : e = document.querySelectorAll(e) : e instanceof Element && (e = [e]), Array.from(e || [])
      }
      n.d(t, {
        a: () => o
      })
    },
    86440: (e, t, n) => {
      "use strict";
      n.d(t, {
        q: () => u
      });
      var o = n(64268),
        r = n(78508),
        i = n(64760),
        s = n(42264),
        c = n(13416);
      const a = e => Array.isArray(e) && !(0, c.I)(e[0]),
        l = (e, t, n) => {
          const o = t - e;
          return ((n - e) % o + o) % o + e
        },
        f = (e, t, n) => Math.min(Math.max(n, e), t);

      function u(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, i.U)(e.length),
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.k;
        const c = e.length,
          u = c - t.length;
        return u > 0 && (0, i.k)(t, u), r => {
          let i = 0;
          for (; i < c - 2 && !(r < t[i + 1]); i++);
          let u = f(0, 1, (0, s.o)(t[i], t[i + 1], r));
          const d = function(e, t) {
            return a(e) ? e[l(0, e.length, t)] : e
          }(n, i);
          return u = d(u), (0, o.C)(e[i], e[i + 1], u)
        }
      }
    },
    68344: (e, t, n) => {
      "use strict";
      n.d(t, {
        m: () => o
      });
      const o = e => "function" == typeof e
    },
    13416: (e, t, n) => {
      "use strict";
      n.d(t, {
        I: () => o
      });
      const o = e => "number" == typeof e
    },
    94648: (e, t, n) => {
      "use strict";
      n.d(t, {
        c: () => o
      });
      const o = e => "string" == typeof e
    },
    64268: (e, t, n) => {
      "use strict";
      n.d(t, {
        C: () => o
      });
      const o = (e, t, n) => -n * e + n * t + e
    },
    78508: (e, t, n) => {
      "use strict";
      n.d(t, {
        k: () => o
      });
      const o = e => e
    },
    64760: (e, t, n) => {
      "use strict";
      n.d(t, {
        U: () => s,
        k: () => i
      });
      var o = n(64268),
        r = n(42264);

      function i(e, t) {
        const n = e[e.length - 1];
        for (let i = 1; i <= t; i++) {
          const s = (0, r.o)(0, t, i);
          e.push((0, o.C)(n, 1, s))
        }
      }

      function s(e) {
        const t = [0];
        return i(t, e - 1), t
      }
    },
    42264: (e, t, n) => {
      "use strict";
      n.d(t, {
        o: () => o
      });
      const o = (e, t, n) => t - e == 0 ? 1 : (n - e) / (t - e)
    },
    34652: (e, t, n) => {
      "use strict";

      function o(e, t) {
        return t ? e * (1e3 / t) : 0
      }
      n.d(t, {
        G: () => o
      })
    },
    97064: (e, t, n) => {
      "use strict";
      n.d(t, {
        O: () => r,
        s: () => o
      });
      var o = function() {},
        r = function() {}
    },
    44392: e => {
      var t, n, o = e.exports = {};

      function r() {
        throw new Error("setTimeout has not been defined")
      }

      function i() {
        throw new Error("clearTimeout has not been defined")
      }

      function s(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === r || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (n) {
          try {
            return t.call(null, e, 0)
          } catch (n) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : r
        } catch (e) {
          t = r
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
          n = i
        }
      }();
      var c, a = [],
        l = !1,
        f = -1;

      function u() {
        l && c && (l = !1, c.length ? a = c.concat(a) : f = -1, a.length && d())
      }

      function d() {
        if (!l) {
          var e = s(u);
          l = !0;
          for (var t = a.length; t;) {
            for (c = a, a = []; ++f < t;) c && c[f].run();
            f = -1, t = a.length
          }
          c = null, l = !1,
            function(e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
              try {
                return n(e)
              } catch (t) {
                try {
                  return n.call(null, e)
                } catch (t) {
                  return n.call(this, e)
                }
              }
            }(e)
        }
      }

      function g(e, t) {
        this.fun = e, this.array = t
      }

      function h() {}
      o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        a.push(new g(e, t)), 1 !== a.length || l || s(d)
      }, g.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = h, o.addListener = h, o.once = h, o.off = h, o.removeListener = h, o.removeAllListeners = h, o.emit = h, o.prependListener = h, o.prependOnceListener = h, o.listeners = function(e) {
        return []
      }, o.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, o.cwd = function() {
        return "/"
      }, o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, o.umask = function() {
        return 0
      }
    }
  }
]);