! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "01073e27-b895-4953-acb7-a3ad29564bc3", t._sentryDebugIdIdentifier = "sentry-dbid-01073e27-b895-4953-acb7-a3ad29564bc3")
  } catch (t) {}
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
  [7914, 1689], {
    79960: (t, e, n) => {
      "use strict";
      n.d(e, {
        l: () => s
      });
      var r = n(10620),
        o = n(32949);
      const i = {
        any: 0,
        all: 1
      };

      function s(t, e) {
        let {
          root: n,
          margin: s,
          amount: c = "any"
        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if ("undefined" == typeof IntersectionObserver) return () => {};
        const a = (0, r.K)(t),
          l = new WeakMap,
          f = new IntersectionObserver((t => {
            t.forEach((t => {
              const n = l.get(t.target);
              if (t.isIntersecting !== Boolean(n))
                if (t.isIntersecting) {
                  const n = e(t);
                  (0, o.T)(n) ? l.set(t.target, n): f.unobserve(t.target)
                } else n && (n(t), l.delete(t.target))
            }))
          }), {
            root: n,
            rootMargin: s,
            threshold: "number" == typeof c ? c : i[c]
          });
        return a.forEach((t => f.observe(t))), () => f.disconnect()
      }
    },
    24149: (t, e, n) => {
      "use strict";
      n.d(e, {
        W: () => H
      });
      var r = n(80226),
        o = n(10620);
      const i = new WeakMap;
      let s;

      function c(t) {
        let {
          target: e,
          contentRect: n,
          borderBoxSize: r
        } = t;
        var o;
        null === (o = i.get(e)) || void 0 === o || o.forEach((t => {
          t({
            target: e,
            contentSize: n,
            get size() {
              return function(t, e) {
                if (e) {
                  const {
                    inlineSize: t,
                    blockSize: n
                  } = e[0];
                  return {
                    width: t,
                    height: n
                  }
                }
                return t instanceof SVGElement && "getBBox" in t ? t.getBBox() : {
                  width: t.offsetWidth,
                  height: t.offsetHeight
                }
              }(e, r)
            }
          })
        }))
      }

      function a(t) {
        t.forEach(c)
      }
      const l = new Set;
      let f;
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
        y = {
          x: {
            length: "Width",
            position: "Left"
          },
          y: {
            length: "Height",
            position: "Top"
          }
        };

      function v(t, e, n, r) {
        const o = n[e],
          {
            length: i,
            position: s
          } = y[e],
          c = o.current,
          a = n.time;
        o.current = t["scroll" + s], o.scrollLength = t["scroll" + i] - t["client" + i], o.offset.length = 0, o.offset[0] = 0, o.offset[1] = o.scrollLength, o.progress = (0, d.q)(0, o.scrollLength, o.current);
        const l = r - a;
        o.velocity = l > h ? 0 : (0, g.f)(o.current - c, l)
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
      var O = n(44282),
        T = n(25994);
      const _ = {
        start: 0,
        center: .5,
        end: 1
      };

      function x(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = 0;
        if (void 0 !== _[t] && (t = _[t]), (0, T.K)(t)) {
          const e = parseFloat(t);
          t.endsWith("px") ? r = e : t.endsWith("%") ? t = e / 100 : t.endsWith("vw") ? r = e / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? r = e / 100 * document.documentElement.clientHeight : t = e
        }
        return (0, O.E)(t) && (r = e * t), n + r
      }
      const L = [0, 0];

      function S(t, e, n, r) {
        let o = Array.isArray(t) ? t : L,
          i = 0,
          s = 0;
        return (0, O.E)(t) ? o = [t, t] : (0, T.K)(t) && (o = (t = t.trim()).includes(" ") ? t.split(" ") : [t, _[t] ? t : "0"]), i = x(o[0], n, r), s = x(o[1], e), i - s
      }
      const W = {
        x: 0,
        y: 0
      };

      function k(t, e, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        const o = r.axis || "y";
        return {
          measure: () => function(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
              n = arguments.length > 2 ? arguments[2] : void 0;
            if (n.x.targetOffset = 0, n.y.targetOffset = 0, e !== t) {
              let r = e;
              for (; r && r != t;) n.x.targetOffset += r.offsetLeft, n.y.targetOffset += r.offsetTop, r = r.offsetParent
            }
            n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth, n.y.targetLength = e === t ? e.scrollHeight : e.clientHeight, n.x.containerLength = t.clientWidth, n.y.containerLength = t.clientHeight
          }(t, r.target, n),
          update: e => {
            ! function(t, e, n) {
              v(t, "x", e, n), v(t, "y", e, n), e.time = n
            }(t, n, e), (r.offset || r.target) && function(t, e, n) {
              let {
                offset: r = E.All
              } = n;
              const {
                target: o = t,
                axis: i = "y"
              } = n, s = "y" === i ? "height" : "width", c = o !== t ? function(t, e) {
                let n = {
                    x: 0,
                    y: 0
                  },
                  r = t;
                for (; r && r !== e;)
                  if (r instanceof HTMLElement) n.x += r.offsetLeft, n.y += r.offsetTop, r = r.offsetParent;
                  else if (r instanceof SVGGraphicsElement && "getBBox" in r) {
                  const {
                    top: t,
                    left: e
                  } = r.getBBox();
                  for (n.x += e, n.y += t; r && "svg" !== r.tagName;) r = r.parentNode
                }
                return n
              }(o, t) : W, a = o === t ? {
                width: t.scrollWidth,
                height: t.scrollHeight
              } : {
                width: o.clientWidth,
                height: o.clientHeight
              }, l = {
                width: t.clientWidth,
                height: t.clientHeight
              };
              e[i].offset.length = 0;
              let f = !e[i].interpolate;
              const u = r.length;
              for (let t = 0; t < u; t++) {
                const n = S(r[t], l[s], a[s], c[i]);
                f || n === e[i].interpolatorOffsets[t] || (f = !0), e[i].offset[t] = n
              }
              f && (e[i].interpolate = (0, w.G)((0, b.Z)(u), e[i].offset), e[i].interpolatorOffsets = [...e[i].offset]), e[i].progress = e[i].interpolate(e[i].current)
            }(t, n, r)
          },
          notify: (0, u.T)(e) ? () => e(n) : (i = e, s = n[o], i.pause(), i.forEachNative(((t, e) => {
            let {
              easing: n
            } = e;
            var r, o;
            if (t.updateDuration) n || (t.easing = m.p), t.updateDuration(1);
            else {
              const e = {
                duration: 1e3
              };
              n || (e.easing = "linear"), null === (o = null === (r = t.effect) || void 0 === r ? void 0 : r.updateTiming) || void 0 === o || o.call(r, e)
            }
          })), () => {
            i.currentTime = s.progress
          })
        };
        var i, s
      }
      const A = new WeakMap,
        z = new WeakMap,
        j = new WeakMap,
        M = t => t === document.documentElement ? window : t;

      function H(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var {
          container: n = document.documentElement
        } = e, c = (0, r.Tt)(e, ["container"]);
        let d = j.get(n);
        d || (d = new Set, j.set(n, d));
        const g = p(),
          h = k(n, t, g, c);
        if (d.add(h), !A.has(n)) {
          const t = () => {
            const t = performance.now();
            for (const t of d) t.measure();
            for (const e of d) e.update(t);
            for (const t of d) t.notify()
          };
          A.set(n, t);
          const e = M(n);
          window.addEventListener("resize", t, {
            passive: !0
          }), n !== document.documentElement && z.set(n, (v = n, m = t, (0, u.T)(v) ? (y = v, l.add(y), f || (f = () => {
            const t = {
                width: window.innerWidth,
                height: window.innerHeight
              },
              e = {
                target: window,
                size: t,
                contentSize: t
              };
            l.forEach((t => t(e)))
          }, window.addEventListener("resize", f)), () => {
            l.delete(y), !l.size && f && (f = void 0)
          }) : function(t, e) {
            s || "undefined" != typeof ResizeObserver && (s = new ResizeObserver(a));
            const n = (0, o.K)(t);
            return n.forEach((t => {
              let n = i.get(t);
              n || (n = new Set, i.set(t, n)), n.add(e), null == s || s.observe(t)
            })), () => {
              n.forEach((t => {
                const n = i.get(t);
                null == n || n.delete(e), (null == n ? void 0 : n.size) || null == s || s.unobserve(t)
              }))
            }
          }(v, m))), e.addEventListener("scroll", t, {
            passive: !0
          })
        }
        var y, v, m;
        const w = A.get(n),
          b = requestAnimationFrame(w);
        return () => {
          var e;
          "function" != typeof t && t.stop(), cancelAnimationFrame(b);
          const r = j.get(n);
          if (!r) return;
          if (r.delete(h), r.size) return;
          const o = A.get(n);
          A.delete(n), o && (M(n).removeEventListener("scroll", o), null === (e = z.get(n)) || void 0 === e || e(), window.removeEventListener("resize", o))
        }
      }
    },
    10620: (t, e, n) => {
      "use strict";

      function r(t, e) {
        var n;
        return "string" == typeof t ? e ? (null !== (n = e[t]) && void 0 !== n || (e[t] = document.querySelectorAll(t)), t = e[t]) : t = document.querySelectorAll(t) : t instanceof Element && (t = [t]), Array.from(t || [])
      }
      n.d(e, {
        K: () => r
      })
    },
    55201: (t, e, n) => {
      "use strict";
      n.d(e, {
        G: () => u
      });
      var r = n(86706),
        o = n(96358),
        i = n(96791),
        s = n(48339),
        c = n(44282);
      const a = t => Array.isArray(t) && !(0, c.E)(t[0]),
        l = (t, e, n) => {
          const r = e - t;
          return ((n - t) % r + r) % r + t
        },
        f = (t, e, n) => Math.min(Math.max(n, t), e);

      function u(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, i.Z)(t.length),
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.p;
        const c = t.length,
          u = c - e.length;
        return u > 0 && (0, i.f)(e, u), o => {
          let i = 0;
          for (; i < c - 2 && !(o < e[i + 1]); i++);
          let u = f(0, 1, (0, s.q)(e[i], e[i + 1], o));
          const d = function(t, e) {
            return a(t) ? t[l(0, t.length, e)] : t
          }(n, i);
          return u = d(u), (0, r.j)(t[i], t[i + 1], u)
        }
      }
    },
    32949: (t, e, n) => {
      "use strict";
      n.d(e, {
        T: () => r
      });
      const r = t => "function" == typeof t
    },
    44282: (t, e, n) => {
      "use strict";
      n.d(e, {
        E: () => r
      });
      const r = t => "number" == typeof t
    },
    25994: (t, e, n) => {
      "use strict";
      n.d(e, {
        K: () => r
      });
      const r = t => "string" == typeof t
    },
    86706: (t, e, n) => {
      "use strict";
      n.d(e, {
        j: () => r
      });
      const r = (t, e, n) => -n * t + n * e + t
    },
    96358: (t, e, n) => {
      "use strict";
      n.d(e, {
        p: () => r
      });
      const r = t => t
    },
    96791: (t, e, n) => {
      "use strict";
      n.d(e, {
        Z: () => s,
        f: () => i
      });
      var r = n(86706),
        o = n(48339);

      function i(t, e) {
        const n = t[t.length - 1];
        for (let i = 1; i <= e; i++) {
          const s = (0, o.q)(0, e, i);
          t.push((0, r.j)(n, 1, s))
        }
      }

      function s(t) {
        const e = [0];
        return i(e, t - 1), e
      }
    },
    48339: (t, e, n) => {
      "use strict";
      n.d(e, {
        q: () => r
      });
      const r = (t, e, n) => e - t == 0 ? 1 : (n - t) / (e - t)
    },
    56879: (t, e, n) => {
      "use strict";

      function r(t, e) {
        return e ? t * (1e3 / e) : 0
      }
      n.d(e, {
        f: () => r
      })
    },
    87104: (t, e, n) => {
      "use strict";
      n.d(e, {
        $: () => r,
        V: () => o
      });
      var r = function() {},
        o = function() {}
    },
    90098: t => {
      var e, n, r = t.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined")
      }

      function i() {
        throw new Error("clearTimeout has not been defined")
      }

      function s(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === o || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
        try {
          return e(t, 0)
        } catch (n) {
          try {
            return e.call(null, t, 0)
          } catch (n) {
            return e.call(this, t, 0)
          }
        }
      }! function() {
        try {
          e = "function" == typeof setTimeout ? setTimeout : o
        } catch (t) {
          e = o
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (t) {
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
          var t = s(u);
          l = !0;
          for (var e = a.length; e;) {
            for (c = a, a = []; ++f < e;) c && c[f].run();
            f = -1, e = a.length
          }
          c = null, l = !1,
            function(t) {
              if (n === clearTimeout) return clearTimeout(t);
              if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
              try {
                return n(t)
              } catch (e) {
                try {
                  return n.call(null, t)
                } catch (e) {
                  return n.call(this, t)
                }
              }
            }(t)
        }
      }

      function g(t, e) {
        this.fun = t, this.array = e
      }

      function h() {}
      r.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        a.push(new g(t, e)), 1 !== a.length || l || s(d)
      }, g.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = h, r.addListener = h, r.once = h, r.off = h, r.removeListener = h, r.removeAllListeners = h, r.emit = h, r.prependListener = h, r.prependOnceListener = h, r.listeners = function(t) {
        return []
      }, r.binding = function(t) {
        throw new Error("process.binding is not supported")
      }, r.cwd = function() {
        return "/"
      }, r.chdir = function(t) {
        throw new Error("process.chdir is not supported")
      }, r.umask = function() {
        return 0
      }
    },
    80226: (t, e, n) => {
      "use strict";
      n.d(e, {
        C6: () => o,
        Cl: () => i,
        Ju: () => c,
        Tt: () => s,
        fX: () => l,
        zs: () => a
      });
      var r = function(t, e) {
        return r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(t, e) {
          t.__proto__ = e
        } || function(t, e) {
          for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        }, r(t, e)
      };

      function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function n() {
          this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
      }
      var i = function() {
        return i = Object.assign || function(t) {
          for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          return t
        }, i.apply(this, arguments)
      };

      function s(t, e) {
        var n = {};
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
        }
        return n
      }

      function c(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length) return {
          next: function() {
            return t && r >= t.length && (t = void 0), {
              value: t && t[r++],
              done: !t
            }
          }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function a(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r, o, i = n.call(t),
          s = [];
        try {
          for (;
            (void 0 === e || e-- > 0) && !(r = i.next()).done;) s.push(r.value)
        } catch (t) {
          o = {
            error: t
          }
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i)
          } finally {
            if (o) throw o.error
          }
        }
        return s
      }

      function l(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
        return t.concat(r || Array.prototype.slice.call(e))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);