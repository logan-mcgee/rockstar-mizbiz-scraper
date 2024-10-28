! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "01073e27-b895-4953-acb7-a3ad29564bc3", e._sentryDebugIdIdentifier = "sentry-dbid-01073e27-b895-4953-acb7-a3ad29564bc3")
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
  [7914, 1689], {
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
          a = new WeakMap,
          f = new IntersectionObserver((e => {
            e.forEach((e => {
              const n = a.get(e.target);
              if (e.isIntersecting !== Boolean(n))
                if (e.isIntersecting) {
                  const n = t(e);
                  (0, o.T)(n) ? a.set(e.target, n): f.unobserve(e.target)
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
    24149: (e, t, n) => {
      "use strict";
      n.d(t, {
        W: () => H
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
      const a = new Set;
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

      function v(e, t, n, r) {
        const o = n[t],
          {
            length: i,
            position: s
          } = y[t],
          c = o.current,
          l = n.time;
        o.current = e["scroll" + s], o.scrollLength = e["scroll" + i] - e["client" + i], o.offset.length = 0, o.offset[0] = 0, o.offset[1] = o.scrollLength, o.progress = (0, d.q)(0, o.scrollLength, o.current);
        const a = r - l;
        o.velocity = a > h ? 0 : (0, g.f)(o.current - c, a)
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

      function x(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = 0;
        if (void 0 !== _[e] && (e = _[e]), (0, T.K)(e)) {
          const t = parseFloat(e);
          e.endsWith("px") ? r = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? r = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = t / 100 * document.documentElement.clientHeight : e = t
        }
        return (0, O.E)(e) && (r = t * e), n + r
      }
      const L = [0, 0];

      function S(e, t, n, r) {
        let o = Array.isArray(e) ? e : L,
          i = 0,
          s = 0;
        return (0, O.E)(e) ? o = [e, e] : (0, T.K)(e) && (o = (e = e.trim()).includes(" ") ? e.split(" ") : [e, _[e] ? e : "0"]), i = x(o[0], n, r), s = x(o[1], t), i - s
      }
      const W = {
        x: 0,
        y: 0
      };

      function k(e, t, n) {
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
              v(e, "x", t, n), v(e, "y", t, n), t.time = n
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
              }(o, e) : W, l = o === e ? {
                width: e.scrollWidth,
                height: e.scrollHeight
              } : {
                width: o.clientWidth,
                height: o.clientHeight
              }, a = {
                width: e.clientWidth,
                height: e.clientHeight
              };
              t[i].offset.length = 0;
              let f = !t[i].interpolate;
              const u = r.length;
              for (let e = 0; e < u; e++) {
                const n = S(r[e], a[s], l[s], c[i]);
                f || n === t[i].interpolatorOffsets[e] || (f = !0), t[i].offset[e] = n
              }
              f && (t[i].interpolate = (0, w.G)((0, b.Z)(u), t[i].offset), t[i].interpolatorOffsets = [...t[i].offset]), t[i].progress = t[i].interpolate(t[i].current)
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
      const A = new WeakMap,
        z = new WeakMap,
        j = new WeakMap,
        M = e => e === document.documentElement ? window : e;

      function H(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        var {
          container: n = document.documentElement
        } = t, c = (0, r.Tt)(t, ["container"]);
        let d = j.get(n);
        d || (d = new Set, j.set(n, d));
        const g = p(),
          h = k(n, e, g, c);
        if (d.add(h), !A.has(n)) {
          const e = () => {
            const e = performance.now();
            for (const e of d) e.measure();
            for (const t of d) t.update(e);
            for (const e of d) e.notify()
          };
          A.set(n, e);
          const t = M(n);
          window.addEventListener("resize", e, {
            passive: !0
          }), n !== document.documentElement && z.set(n, (v = n, m = e, (0, u.T)(v) ? (y = v, a.add(y), f || (f = () => {
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
            a.delete(y), !a.size && f && (f = void 0)
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
          }(v, m))), t.addEventListener("scroll", e, {
            passive: !0
          })
        }
        var y, v, m;
        const w = A.get(n),
          b = requestAnimationFrame(w);
        return () => {
          var t;
          "function" != typeof e && e.stop(), cancelAnimationFrame(b);
          const r = j.get(n);
          if (!r) return;
          if (r.delete(h), r.size) return;
          const o = A.get(n);
          A.delete(n), o && (M(n).removeEventListener("scroll", o), null === (t = z.get(n)) || void 0 === t || t(), window.removeEventListener("resize", o))
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
        a = (e, t, n) => {
          const r = t - e;
          return ((n - e) % r + r) % r + e
        },
        f = (e, t, n) => Math.min(Math.max(n, e), t);

      function u(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, i.Z)(e.length),
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.p;
        const c = e.length,
          u = c - t.length;
        return u > 0 && (0, i.f)(t, u), o => {
          let i = 0;
          for (; i < c - 2 && !(o < t[i + 1]); i++);
          let u = f(0, 1, (0, s.q)(t[i], t[i + 1], o));
          const d = function(e, t) {
            return l(e) ? e[a(0, e.length, t)] : e
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
      r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new g(e, t)), 1 !== l.length || a || s(d)
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
    },
    80226: (e, t, n) => {
      "use strict";
      n.d(t, {
        C6: () => o,
        Cl: () => i,
        Ju: () => c,
        Tt: () => s,
        fX: () => a,
        zs: () => l
      });
      var r = function(e, t) {
        return r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }, r(e, t)
      };

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
          this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      }
      var i = function() {
        return i = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, i.apply(this, arguments)
      };

      function s(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }

      function c(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && r >= e.length && (e = void 0), {
              value: e && e[r++],
              done: !e
            }
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function l(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, i = n.call(e),
          s = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(r = i.next()).done;) s.push(r.value)
        } catch (e) {
          o = {
            error: e
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

      function a(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t))
      }
      Object.create, Object.create, "function" == typeof SuppressedError && SuppressedError
    }
  }
]);