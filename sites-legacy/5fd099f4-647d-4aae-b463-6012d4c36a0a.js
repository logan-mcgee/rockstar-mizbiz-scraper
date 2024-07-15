! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5fd099f4-647d-4aae-b463-6012d4c36a0a", e._sentryDebugIdIdentifier = "sentry-dbid-5fd099f4-647d-4aae-b463-6012d4c36a0a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [904], {
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
        const l = (0, o.a)(e),
          a = new WeakMap,
          f = new IntersectionObserver((e => {
            e.forEach((e => {
              const n = a.get(e.target);
              if (e.isIntersecting !== Boolean(n))
                if (e.isIntersecting) {
                  const n = t(e);
                  (0, r.m)(n) ? a.set(e.target, n): f.unobserve(e.target)
                } else n && (n(e), a.delete(e.target))
            }))
          }), {
            root: n,
            rootMargin: s,
            threshold: "number" == typeof c ? c : i[c]
          });
        return l.forEach((e => f.observe(e))), () => f.disconnect()
      }
    },
    2536: (e, t, n) => {
      "use strict";
      n.d(t, {
        o: () => N
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

      function l(e) {
        e.forEach(c)
      }
      const a = new Set;
      let f;
      var u = n(68344);
      const d = (e, t, n) => t - e == 0 ? 1 : (n - e) / (t - e),
        g = 50,
        h = () => ({
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
        p = {
          x: {
            length: "Width",
            position: "Left"
          },
          y: {
            length: "Height",
            position: "Top"
          }
        };

      function m(e, t, n, o) {
        const r = n[t],
          {
            length: i,
            position: s
          } = p[t],
          c = r.current,
          l = n.time;
        r.current = e["scroll" + s], r.scrollLength = e["scroll" + i] - e["client" + i], r.offset.length = 0, r.offset[0] = 0, r.offset[1] = r.scrollLength, r.progress = d(0, r.scrollLength, r.current);
        const a = o - l;
        var f, u;
        r.velocity = a > g ? 0 : (f = r.current - c, (u = a) ? f * (1e3 / u) : 0)
      }
      const y = e => e,
        v = (e, t, n) => -n * e + n * t + e;

      function w(e, t) {
        const n = e[e.length - 1];
        for (let o = 1; o <= t; o++) {
          const r = d(0, t, o);
          e.push(v(n, 1, r))
        }
      }

      function b(e) {
        const t = [0];
        return w(t, e - 1), t
      }
      const E = e => "number" == typeof e,
        L = e => Array.isArray(e) && !E(e[0]),
        T = (e, t, n) => {
          const o = t - e;
          return ((n - e) % o + o) % o + e
        },
        x = (e, t, n) => Math.min(Math.max(n, e), t);
      const _ = {
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
        },
        W = e => "string" == typeof e,
        k = {
          start: 0,
          center: .5,
          end: 1
        };

      function M(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          o = 0;
        if (void 0 !== k[e] && (e = k[e]), W(e)) {
          const t = parseFloat(e);
          e.endsWith("px") ? o = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? o = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? o = t / 100 * document.documentElement.clientHeight : e = t
        }
        return E(e) && (o = t * e), n + o
      }
      const z = [0, 0];

      function A(e, t, n, o) {
        let r = Array.isArray(e) ? e : z,
          i = 0,
          s = 0;
        return E(e) ? r = [e, e] : W(e) && (r = (e = e.trim()).includes(" ") ? e.split(" ") : [e, k[e] ? e : "0"]), i = M(r[0], n, o), s = M(r[1], t), i - s
      }
      const O = {
        x: 0,
        y: 0
      };

      function S(e, t, n) {
        let {
          offset: o = _.All
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
        }(r, e) : O, l = r === e ? {
          width: e.scrollWidth,
          height: e.scrollHeight
        } : {
          width: r.clientWidth,
          height: r.clientHeight
        }, a = {
          width: e.clientWidth,
          height: e.clientHeight
        };
        t[i].offset.length = 0;
        let f = !t[i].interpolate;
        const u = o.length;
        for (let e = 0; e < u; e++) {
          const n = A(o[e], a[s], l[s], c[i]);
          f || n === t[i].interpolatorOffsets[e] || (f = !0), t[i].offset[e] = n
        }
        f && (t[i].interpolate = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b(e.length),
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : y;
          const o = e.length,
            r = o - t.length;
          return r > 0 && w(t, r), r => {
            let i = 0;
            for (; i < o - 2 && !(r < t[i + 1]); i++);
            let s = x(0, 1, d(t[i], t[i + 1], r));
            const c = function(e, t) {
              return L(e) ? e[T(0, e.length, t)] : e
            }(n, i);
            return s = c(s), v(e[i], e[i + 1], s)
          }
        }(b(u), t[i].offset), t[i].interpolatorOffsets = [...t[i].offset]), t[i].progress = t[i].interpolate(t[i].current)
      }
      const H = new WeakMap,
        B = new WeakMap,
        I = new WeakMap,
        D = e => e === document.documentElement ? window : e;

      function N(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var {
          container: n = document.documentElement
        } = t, c = (0, o.sX)(t, ["container"]);
        let d = I.get(n);
        d || (d = new Set, I.set(n, d));
        const g = h(),
          p = function(e, t, n) {
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
                  m(e, "x", t, n), m(e, "y", t, n), t.time = n
                }(e, n, t), (o.offset || o.target) && S(e, n, o)
              },
              notify: (0, u.m)(t) ? () => t(n) : (i = t, s = n[r], i.pause(), i.forEachNative(((e, t) => {
                let {
                  easing: n
                } = t;
                var o, r;
                if (e.updateDuration) n || (e.easing = y), e.updateDuration(1);
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
          }(n, e, g, c);
        if (d.add(p), !H.has(n)) {
          const e = () => {
            const e = performance.now();
            for (const e of d) e.measure();
            for (const t of d) t.update(e);
            for (const e of d) e.notify()
          };
          H.set(n, e);
          const t = D(n);
          window.addEventListener("resize", e, {
            passive: !0
          }), n !== document.documentElement && B.set(n, (w = n, b = e, (0, u.m)(w) ? (v = w, a.add(v), f || (f = () => {
            const e = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              t = {
                target: window,
                size: e,
                contentSize: e
              };
            a.forEach((e => e(t)))
          }, window.addEventListener("resize", f)), () => {
            a.delete(v), !a.size && f && (f = void 0)
          }) : function(e, t) {
            s || "undefined" != typeof ResizeObserver && (s = new ResizeObserver(l));
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
          }(w, b))), t.addEventListener("scroll", e, {
            passive: !0
          })
        }
        var v, w, b;
        const E = H.get(n),
          L = requestAnimationFrame(E);
        return () => {
          var t;
          "function" != typeof e && e.stop(), cancelAnimationFrame(L);
          const o = I.get(n);
          if (!o) return;
          if (o.delete(p), o.size) return;
          const r = H.get(n);
          H.delete(n), r && (D(n).removeEventListener("scroll", r), null === (t = B.get(n)) || void 0 === t || t(), window.removeEventListener("resize", r))
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
    68344: (e, t, n) => {
      "use strict";
      n.d(t, {
        m: () => o
      });
      const o = e => "function" == typeof e
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
      var c, l = [],
        a = !1,
        f = -1;

      function u() {
        a && c && (a = !1, c.length ? l = c.concat(l) : f = -1, l.length && d())
      }

      function d() {
        if (!a) {
          var e = s(u);
          a = !0;
          for (var t = l.length; t;) {
            for (c = l, l = []; ++f < t;) c && c[f].run();
            f = -1, t = l.length
          }
          c = null, a = !1,
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
        l.push(new g(e, t)), 1 !== l.length || a || s(d)
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