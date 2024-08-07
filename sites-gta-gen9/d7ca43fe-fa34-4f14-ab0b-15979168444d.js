! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d7ca43fe-fa34-4f14-ab0b-15979168444d", e._sentryDebugIdIdentifier = "sentry-dbid-d7ca43fe-fa34-4f14-ab0b-15979168444d")
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
  [7914], {
    79960: (e, t, n) => {
      "use strict";
      n.d(t, {
        l: () => s
      });
      var r = n(10620),
        o = n(32949);
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
        const l = (0, r.K)(e),
          f = new WeakMap,
          a = new IntersectionObserver((e => {
            e.forEach((e => {
              const n = f.get(e.target);
              if (e.isIntersecting !== Boolean(n))
                if (e.isIntersecting) {
                  const n = t(e);
                  (0, o.T)(n) ? f.set(e.target, n): a.unobserve(e.target)
                } else n && (n(e), f.delete(e.target))
            }))
          }), {
            root: n,
            rootMargin: s,
            threshold: "number" == typeof c ? c : i[c]
          });
        return l.forEach((e => a.observe(e))), () => a.disconnect()
      }
    },
    24149: (e, t, n) => {
      "use strict";
      n.d(t, {
        W: () => B
      });
      var r = n(80226),
        o = n(10620);
      const i = new WeakMap;
      let s;

      function c(e) {
        let {
          target: t,
          contentRect: n,
          borderBoxSize: r
        } = e;
        var o;
        null === (o = i.get(t)) || void 0 === o || o.forEach((e => {
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
              }(t, r)
            }
          })
        }))
      }

      function l(e) {
        e.forEach(c)
      }
      const f = new Set;
      let a;
      var u = n(32949),
        d = n(48339),
        g = n(56879);
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
        v = {
          x: {
            length: "Width",
            position: "Left"
          },
          y: {
            length: "Height",
            position: "Top"
          }
        };

      function y(e, t, n, r) {
        const o = n[t],
          {
            length: i,
            position: s
          } = v[t],
          c = o.current,
          l = n.time;
        o.current = e["scroll" + s], o.scrollLength = e["scroll" + i] - e["client" + i], o.offset.length = 0, o.offset[0] = 0, o.offset[1] = o.scrollLength, o.progress = (0, d.q)(0, o.scrollLength, o.current);
        const f = r - l;
        o.velocity = f > h ? 0 : (0, g.f)(o.current - c, f)
      }
      var m = n(96358),
        w = n(55201),
        b = n(96791);
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
      var T = n(44282),
        L = n(25994);
      const x = {
        start: 0,
        center: .5,
        end: 1
      };

      function _(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = 0;
        if (void 0 !== x[e] && (e = x[e]), (0, L.K)(e)) {
          const t = parseFloat(e);
          e.endsWith("px") ? r = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? r = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = t / 100 * document.documentElement.clientHeight : e = t
        }
        return (0, T.E)(e) && (r = t * e), n + r
      }
      const W = [0, 0];

      function k(e, t, n, r) {
        let o = Array.isArray(e) ? e : W,
          i = 0,
          s = 0;
        return (0, T.E)(e) ? o = [e, e] : (0, L.K)(e) && (o = (e = e.trim()).includes(" ") ? e.split(" ") : [e, x[e] ? e : "0"]), i = _(o[0], n, r), s = _(o[1], t), i - s
      }
      const z = {
        x: 0,
        y: 0
      };

      function A(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        const o = r.axis || "y";
        return {
          measure: () => function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
              n = arguments.length > 2 ? arguments[2] : void 0;
            if (n.x.targetOffset = 0, n.y.targetOffset = 0, t !== e) {
              let r = t;
              for (; r && r != e;) n.x.targetOffset += r.offsetLeft, n.y.targetOffset += r.offsetTop, r = r.offsetParent
            }
            n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, n.x.containerLength = e.clientWidth, n.y.containerLength = e.clientHeight
          }(e, r.target, n),
          update: t => {
            ! function(e, t, n) {
              y(e, "x", t, n), y(e, "y", t, n), t.time = n
            }(e, n, t), (r.offset || r.target) && function(e, t, n) {
              let {
                offset: r = E.All
              } = n;
              const {
                target: o = e,
                axis: i = "y"
              } = n, s = "y" === i ? "height" : "width", c = o !== e ? function(e, t) {
                let n = {
                    x: 0,
                    y: 0
                  },
                  r = e;
                for (; r && r !== t;)
                  if (r instanceof HTMLElement) n.x += r.offsetLeft, n.y += r.offsetTop, r = r.offsetParent;
                  else if (r instanceof SVGGraphicsElement && "getBBox" in r) {
                  const {
                    top: e,
                    left: t
                  } = r.getBBox();
                  for (n.x += t, n.y += e; r && "svg" !== r.tagName;) r = r.parentNode
                }
                return n
              }(o, e) : z, l = o === e ? {
                width: e.scrollWidth,
                height: e.scrollHeight
              } : {
                width: o.clientWidth,
                height: o.clientHeight
              }, f = {
                width: e.clientWidth,
                height: e.clientHeight
              };
              t[i].offset.length = 0;
              let a = !t[i].interpolate;
              const u = r.length;
              for (let e = 0; e < u; e++) {
                const n = k(r[e], f[s], l[s], c[i]);
                a || n === t[i].interpolatorOffsets[e] || (a = !0), t[i].offset[e] = n
              }
              a && (t[i].interpolate = (0, w.G)((0, b.Z)(u), t[i].offset), t[i].interpolatorOffsets = [...t[i].offset]), t[i].progress = t[i].interpolate(t[i].current)
            }(e, n, r)
          },
          notify: (0, u.T)(t) ? () => t(n) : (i = t, s = n[o], i.pause(), i.forEachNative(((e, t) => {
            let {
              easing: n
            } = t;
            var r, o;
            if (e.updateDuration) n || (e.easing = m.p), e.updateDuration(1);
            else {
              const t = {
                duration: 1e3
              };
              n || (t.easing = "linear"), null === (o = null === (r = e.effect) || void 0 === r ? void 0 : r.updateTiming) || void 0 === o || o.call(r, t)
            }
          })), () => {
            i.currentTime = s.progress
          })
        };
        var i, s
      }
      const M = new WeakMap,
        S = new WeakMap,
        O = new WeakMap,
        H = e => e === document.documentElement ? window : e;

      function B(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var {
          container: n = document.documentElement
        } = t, c = (0, r.Tt)(t, ["container"]);
        let d = O.get(n);
        d || (d = new Set, O.set(n, d));
        const g = p(),
          h = A(n, e, g, c);
        if (d.add(h), !M.has(n)) {
          const e = () => {
            const e = performance.now();
            for (const e of d) e.measure();
            for (const t of d) t.update(e);
            for (const e of d) e.notify()
          };
          M.set(n, e);
          const t = H(n);
          window.addEventListener("resize", e, {
            passive: !0
          }), n !== document.documentElement && S.set(n, (y = n, m = e, (0, u.T)(y) ? (v = y, f.add(v), a || (a = () => {
            const e = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              t = {
                target: window,
                size: e,
                contentSize: e
              };
            f.forEach((e => e(t)))
          }, window.addEventListener("resize", a)), () => {
            f.delete(v), !f.size && a && (a = void 0)
          }) : function(e, t) {
            s || "undefined" != typeof ResizeObserver && (s = new ResizeObserver(l));
            const n = (0, o.K)(e);
            return n.forEach((e => {
              let n = i.get(e);
              n || (n = new Set, i.set(e, n)), n.add(t), null == s || s.observe(e)
            })), () => {
              n.forEach((e => {
                const n = i.get(e);
                null == n || n.delete(t), (null == n ? void 0 : n.size) || null == s || s.unobserve(e)
              }))
            }
          }(y, m))), t.addEventListener("scroll", e, {
            passive: !0
          })
        }
        var v, y, m;
        const w = M.get(n),
          b = requestAnimationFrame(w);
        return () => {
          var t;
          "function" != typeof e && e.stop(), cancelAnimationFrame(b);
          const r = O.get(n);
          if (!r) return;
          if (r.delete(h), r.size) return;
          const o = M.get(n);
          M.delete(n), o && (H(n).removeEventListener("scroll", o), null === (t = S.get(n)) || void 0 === t || t(), window.removeEventListener("resize", o))
        }
      }
    },
    10620: (e, t, n) => {
      "use strict";

      function r(e, t) {
        var n;
        return "string" == typeof e ? t ? (null !== (n = t[e]) && void 0 !== n || (t[e] = document.querySelectorAll(e)), e = t[e]) : e = document.querySelectorAll(e) : e instanceof Element && (e = [e]), Array.from(e || [])
      }
      n.d(t, {
        K: () => r
      })
    },
    55201: (e, t, n) => {
      "use strict";
      n.d(t, {
        G: () => u
      });
      var r = n(86706),
        o = n(96358),
        i = n(96791),
        s = n(48339),
        c = n(44282);
      const l = e => Array.isArray(e) && !(0, c.E)(e[0]),
        f = (e, t, n) => {
          const r = t - e;
          return ((n - e) % r + r) % r + e
        },
        a = (e, t, n) => Math.min(Math.max(n, e), t);

      function u(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, i.Z)(e.length),
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.p;
        const c = e.length,
          u = c - t.length;
        return u > 0 && (0, i.f)(t, u), o => {
          let i = 0;
          for (; i < c - 2 && !(o < t[i + 1]); i++);
          let u = a(0, 1, (0, s.q)(t[i], t[i + 1], o));
          const d = function(e, t) {
            return l(e) ? e[f(0, e.length, t)] : e
          }(n, i);
          return u = d(u), (0, r.j)(e[i], e[i + 1], u)
        }
      }
    },
    32949: (e, t, n) => {
      "use strict";
      n.d(t, {
        T: () => r
      });
      const r = e => "function" == typeof e
    },
    44282: (e, t, n) => {
      "use strict";
      n.d(t, {
        E: () => r
      });
      const r = e => "number" == typeof e
    },
    25994: (e, t, n) => {
      "use strict";
      n.d(t, {
        K: () => r
      });
      const r = e => "string" == typeof e
    },
    86706: (e, t, n) => {
      "use strict";
      n.d(t, {
        j: () => r
      });
      const r = (e, t, n) => -n * e + n * t + e
    },
    96358: (e, t, n) => {
      "use strict";
      n.d(t, {
        p: () => r
      });
      const r = e => e
    },
    96791: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => s,
        f: () => i
      });
      var r = n(86706),
        o = n(48339);

      function i(e, t) {
        const n = e[e.length - 1];
        for (let i = 1; i <= t; i++) {
          const s = (0, o.q)(0, t, i);
          e.push((0, r.j)(n, 1, s))
        }
      }

      function s(e) {
        const t = [0];
        return i(t, e - 1), t
      }
    },
    48339: (e, t, n) => {
      "use strict";
      n.d(t, {
        q: () => r
      });
      const r = (e, t, n) => t - e == 0 ? 1 : (n - e) / (t - e)
    },
    56879: (e, t, n) => {
      "use strict";

      function r(e, t) {
        return t ? e * (1e3 / t) : 0
      }
      n.d(t, {
        f: () => r
      })
    },
    87104: (e, t, n) => {
      "use strict";
      n.d(t, {
        $: () => r,
        V: () => o
      });
      var r = function() {},
        o = function() {}
    },
    90098: e => {
      var t, n, r = e.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined")
      }

      function i() {
        throw new Error("clearTimeout has not been defined")
      }

      function s(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
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
          t = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
          t = o
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
          n = i
        }
      }();
      var c, l = [],
        f = !1,
        a = -1;

      function u() {
        f && c && (f = !1, c.length ? l = c.concat(l) : a = -1, l.length && d())
      }

      function d() {
        if (!f) {
          var e = s(u);
          f = !0;
          for (var t = l.length; t;) {
            for (c = l, l = []; ++a < t;) c && c[a].run();
            a = -1, t = l.length
          }
          c = null, f = !1,
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
      r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new g(e, t)), 1 !== l.length || f || s(d)
      }, g.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = h, r.addListener = h, r.once = h, r.off = h, r.removeListener = h, r.removeAllListeners = h, r.emit = h, r.prependListener = h, r.prependOnceListener = h, r.listeners = function(e) {
        return []
      }, r.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, r.cwd = function() {
        return "/"
      }, r.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, r.umask = function() {
        return 0
      }
    }
  }
]);