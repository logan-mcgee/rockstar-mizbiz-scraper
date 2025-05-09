! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0b75d5ab-e452-4ace-95e1-3686c352980a", e._sentryDebugIdIdentifier = "sentry-dbid-0b75d5ab-e452-4ace-95e1-3686c352980a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-gtao-license-plate",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [6945], {
    46945: (e, t, n) => {
      n.r(t), n.d(t, {
        Any: () => At,
        BailSignal: () => sn,
        Controller: () => In,
        FrameValue: () => un,
        Globals: () => i,
        Interpolation: () => es,
        Spring: () => Zn,
        SpringContext: () => zn,
        SpringRef: () => $n,
        SpringValue: () => mn,
        Trail: () => Jn,
        Transition: () => Kn,
        a: () => _s,
        animated: () => _s,
        config: () => Ut,
        createInterpolator: () => he,
        easings: () => we,
        inferTo: () => Tt,
        interpolate: () => is,
        to: () => rs,
        update: () => os,
        useChain: () => Dt,
        useInView: () => Hn,
        useIsomorphicLayoutEffect: () => it,
        useReducedMotion: () => dt,
        useResize: () => Yn,
        useScroll: () => Gn,
        useSpring: () => Ln,
        useSpringRef: () => Nn,
        useSpringValue: () => Dn,
        useSprings: () => Fn,
        useTrail: () => Un,
        useTransition: () => Bn
      });
      var s = n(62229),
        r = Object.defineProperty,
        i = {};
      ((e, t) => {
        for (var n in t) r(e, n, {
          get: t[n],
          enumerable: !0
        })
      })(i, {
        assign: () => $,
        colors: () => q,
        createStringInterpolator: () => C,
        skipAnimation: () => z,
        to: () => R,
        willAdvance: () => T
      });
      var o = k(),
        a = e => v(e, o),
        u = k();
      a.write = e => v(e, u);
      var c = k();
      a.onStart = e => v(e, c);
      var l = k();
      a.onFrame = e => v(e, l);
      var d = k();
      a.onFinish = e => v(e, d);
      var h = [];
      a.setTimeout = (e, t) => {
        const n = a.now() + t,
          s = () => {
            const e = h.findIndex((e => e.cancel == s));
            ~e && h.splice(e, 1), g -= ~e ? 1 : 0
          },
          r = {
            time: n,
            handler: e,
            cancel: s
          };
        return h.splice(p(n), 0, r), g += 1, w(), r
      };
      var p = e => ~(~h.findIndex((t => t.time > e)) || ~h.length);
      a.cancel = e => {
        c.delete(e), l.delete(e), d.delete(e), o.delete(e), u.delete(e)
      }, a.sync = e => {
        y = !0, a.batchedUpdates(e), y = !1
      }, a.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function s(...e) {
          t = e, a.onStart(n)
        }
        return s.handler = e, s.cancel = () => {
          c.delete(n), t = null
        }, s
      };
      var f = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      a.use = e => f = e, a.now = "undefined" != typeof performance ? () => performance.now() : Date.now, a.batchedUpdates = e => e(), a.catch = console.error, a.frameLoop = "always", a.advance = () => {
        "demand" !== a.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : _()
      };
      var m = -1,
        g = 0,
        y = !1;

      function v(e, t) {
        y ? (t.delete(e), e(0)) : (t.add(e), w())
      }

      function w() {
        m < 0 && (m = 0, "demand" !== a.frameLoop && f(b))
      }

      function b() {
        ~m && (f(b), a.batchedUpdates(_))
      }

      function _() {
        const e = m;
        m = a.now();
        const t = p(m);
        t && (x(h.splice(0, t), (e => e.handler())), g -= t), g ? (c.flush(), o.flush(e ? Math.min(64, m - e) : 16.667), l.flush(), u.flush(), d.flush()) : m = -1
      }

      function k() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            g += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (g -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, g -= t.size, x(t, (t => t(n) && e.add(t))), g += e.size, t = e)
          }
        }
      }

      function x(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            a.catch(e)
          }
        }))
      }

      function M() {}
      var P = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function I(e, t) {
        if (P.arr(e)) {
          if (!P.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }
        return e === t
      }
      var S = (e, t) => e.forEach(t);

      function A(e, t, n) {
        if (P.arr(e))
          for (let s = 0; s < e.length; s++) t.call(n, e[s], `${s}`);
        else
          for (const s in e) e.hasOwnProperty(s) && t.call(n, e[s], s)
      }
      var E = e => P.und(e) ? [] : P.arr(e) ? e : [e];

      function O(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), S(n, t)
        }
      }
      var C, R, V = (e, ...t) => O(e, (e => e(...t))),
        j = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        q = null,
        z = !1,
        T = M,
        $ = e => {
          e.to && (R = e.to), e.now && (a.now = e.now), void 0 !== e.colors && (q = e.colors), null != e.skipAnimation && (z = e.skipAnimation), e.createStringInterpolator && (C = e.createStringInterpolator), e.requestAnimationFrame && a.use(e.requestAnimationFrame), e.batchedUpdates && (a.batchedUpdates = e.batchedUpdates), e.willAdvance && (T = e.willAdvance), e.frameLoop && (a.frameLoop = e.frameLoop)
        },
        F = new Set,
        L = [],
        Q = [],
        N = 0,
        D = {
          get idle() {
            return !F.size && !L.length
          },
          start(e) {
            N > e.priority ? (F.add(e), a.onStart(U)) : (B(e), a(G))
          },
          advance: G,
          sort(e) {
            if (N) a.onFrame((() => D.sort(e)));
            else {
              const t = L.indexOf(e);
              ~t && (L.splice(t, 1), W(e))
            }
          },
          clear() {
            L = [], F.clear()
          }
        };

      function U() {
        F.forEach(B), F.clear(), a(G)
      }

      function B(e) {
        L.includes(e) || W(e)
      }

      function W(e) {
        L.splice(function(t, n) {
          const s = t.findIndex((t => t.priority > e.priority));
          return s < 0 ? t.length : s
        }(L), 0, e)
      }

      function G(e) {
        const t = Q;
        for (let n = 0; n < L.length; n++) {
          const s = L[n];
          N = s.priority, s.idle || (T(s), s.advance(e), s.idle || t.push(s))
        }
        return N = 0, (Q = L).length = 0, (L = t).length > 0
      }
      var Y = "[-+]?\\d*\\.?\\d+",
        X = Y + "%";

      function H(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Z = new RegExp("rgb" + H(Y, Y, Y)),
        J = new RegExp("rgba" + H(Y, Y, Y, Y)),
        K = new RegExp("hsl" + H(Y, X, X)),
        ee = new RegExp("hsla" + H(Y, X, X, Y)),
        te = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ne = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        se = /^#([0-9a-fA-F]{6})$/,
        re = /^#([0-9a-fA-F]{8})$/;

      function ie(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function oe(e, t, n) {
        const s = n < .5 ? n * (1 + t) : n + t - n * t,
          r = 2 * n - s,
          i = ie(r, s, e + 1 / 3),
          o = ie(r, s, e),
          a = ie(r, s, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * o) << 16 | Math.round(255 * a) << 8
      }

      function ae(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function ue(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function ce(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function le(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function de(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = se.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : q && void 0 !== q[e] ? q[e] : (t = Z.exec(e)) ? (ae(t[1]) << 24 | ae(t[2]) << 16 | ae(t[3]) << 8 | 255) >>> 0 : (t = J.exec(e)) ? (ae(t[1]) << 24 | ae(t[2]) << 16 | ae(t[3]) << 8 | ce(t[4])) >>> 0 : (t = te.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = re.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ne.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = K.exec(e)) ? (255 | oe(ue(t[1]), le(t[2]), le(t[3]))) >>> 0 : (t = ee.exec(e)) ? (oe(ue(t[1]), le(t[2]), le(t[3])) | ce(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var he = (e, t, n) => {
          if (P.fun(e)) return e;
          if (P.arr(e)) return he({
            range: e,
            output: t,
            extrapolate: n
          });
          if (P.str(e.output[0])) return C(e);
          const s = e,
            r = s.output,
            i = s.range || [0, 1],
            o = s.extrapolateLeft || s.extrapolate || "extend",
            a = s.extrapolateRight || s.extrapolate || "extend",
            u = s.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
              return n - 1
            }(e, i);
            return function(e, t, n, s, r, i, o, a, u) {
              let c = u ? u(e) : e;
              if (c < t) {
                if ("identity" === o) return c;
                "clamp" === o && (c = t)
              }
              if (c > n) {
                if ("identity" === a) return c;
                "clamp" === a && (c = n)
              }
              return s === r ? s : t === n ? e <= t ? s : r : (t === -1 / 0 ? c = -c : n === 1 / 0 ? c -= t : c = (c - t) / (n - t), c = i(c), s === -1 / 0 ? c = -c : r === 1 / 0 ? c += s : c = c * (r - s) + s, c)
            }(e, i[t], i[t + 1], r[t], r[t + 1], u, o, a, s.map)
          }
        },
        pe = 1.70158,
        fe = 1.525 * pe,
        me = pe + 1,
        ge = 2 * Math.PI / 3,
        ye = 2 * Math.PI / 4.5,
        ve = e => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        },
        we = {
          linear: e => e,
          easeInQuad: e => e * e,
          easeOutQuad: e => 1 - (1 - e) * (1 - e),
          easeInOutQuad: e => e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
          easeInCubic: e => e * e * e,
          easeOutCubic: e => 1 - Math.pow(1 - e, 3),
          easeInOutCubic: e => e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
          easeInQuart: e => e * e * e * e,
          easeOutQuart: e => 1 - Math.pow(1 - e, 4),
          easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
          easeInQuint: e => e * e * e * e * e,
          easeOutQuint: e => 1 - Math.pow(1 - e, 5),
          easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
          easeInSine: e => 1 - Math.cos(e * Math.PI / 2),
          easeOutSine: e => Math.sin(e * Math.PI / 2),
          easeInOutSine: e => -(Math.cos(Math.PI * e) - 1) / 2,
          easeInExpo: e => 0 === e ? 0 : Math.pow(2, 10 * e - 10),
          easeOutExpo: e => 1 === e ? 1 : 1 - Math.pow(2, -10 * e),
          easeInOutExpo: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
          easeInCirc: e => 1 - Math.sqrt(1 - Math.pow(e, 2)),
          easeOutCirc: e => Math.sqrt(1 - Math.pow(e - 1, 2)),
          easeInOutCirc: e => e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
          easeInBack: e => me * e * e * e - pe * e * e,
          easeOutBack: e => 1 + me * Math.pow(e - 1, 3) + pe * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - fe) / 2 : (Math.pow(2 * e - 2, 2) * ((fe + 1) * (2 * e - 2) + fe) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * ge),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * ge) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * ye) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * ye) / 2 + 1,
          easeInBounce: e => 1 - ve(1 - e),
          easeOutBounce: ve,
          easeInOutBounce: e => e < .5 ? (1 - ve(1 - 2 * e)) / 2 : (1 + ve(2 * e - 1)) / 2,
          steps: (e, t = "end") => n => {
            const s = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e;
            return 0, 1, r = ("end" === t ? Math.floor(s) : Math.ceil(s)) / e, Math.min(Math.max(r, 0), 1);
            var r
          }
        },
        be = Symbol.for("FluidValue.get"),
        _e = Symbol.for("FluidValue.observers"),
        ke = e => Boolean(e && e[be]),
        xe = e => e && e[be] ? e[be]() : e,
        Me = e => e[_e] || null;

      function Pe(e, t) {
        const n = e[_e];
        n && n.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var Ie = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Se(this, e)
          }
        },
        Se = (e, t) => Ce(e, be, t);

      function Ae(e, t) {
        if (e[be]) {
          let n = e[_e];
          n || Ce(e, _e, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
        }
        return t
      }

      function Ee(e, t) {
        const n = e[_e];
        if (n && n.has(t)) {
          const s = n.size - 1;
          s ? n.delete(t) : e[_e] = null, e.observerRemoved && e.observerRemoved(s, t)
        }
      }
      var Oe, Ce = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        Re = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Ve = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        je = new RegExp(`(${Re.source})(%|[a-z]+)`, "i"),
        qe = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        ze = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Te = e => {
          const [t, n] = $e(e);
          if (!t || j()) return e;
          const s = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (s) return s.trim();
          if (n && n.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(n) || e
          }
          return n && ze.test(n) ? Te(n) : n || e
        },
        $e = e => {
          const t = ze.exec(e);
          if (!t) return [, ];
          const [, n, s] = t;
          return [n, s]
        },
        Fe = (e, t, n, s, r) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(s)}, ${r})`,
        Le = e => {
          Oe || (Oe = q ? new RegExp(`(${Object.keys(q).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => xe(e).replace(ze, Te).replace(Ve, de).replace(Oe, de))),
            n = t.map((e => e.match(Re).map(Number))),
            s = n[0].map(((e, t) => n.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))).map((t => he({
              ...e,
              output: t
            })));
          return e => {
            const n = !je.test(t[0]) && t.find((e => je.test(e)))?.replace(Re, "");
            let r = 0;
            return t[0].replace(Re, (() => `${s[r++](e)}${n||""}`)).replace(qe, Fe)
          }
        },
        Qe = "react-spring: ",
        Ne = e => {
          const t = e;
          let n = !1;
          if ("function" != typeof t) throw new TypeError(`${Qe}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), n = !0)
          }
        },
        De = Ne(console.warn);

      function Ue() {
        De(`${Qe}The "interpolate" function is deprecated in v9 (use "to" instead)`)
      }
      var Be, We = Ne(console.warn);

      function Ge(e) {
        return P.str(e) && ("#" == e[0] || /\d/.test(e) || !j() && ze.test(e) || e in (q || {}))
      }
      var Ye, Xe = new WeakMap,
        He = e => e.forEach((({
          target: e,
          contentRect: t
        }) => Xe.get(e)?.forEach((e => e(t))))),
        Ze = new Set,
        Je = (e, {
          container: t = document.documentElement
        } = {}) => t === document.documentElement ? (e => (Ze.add(e), Ye || (Ye = (() => {
          const e = () => {
            Ze.forEach((e => e({
              width: window.innerWidth,
              height: window.innerHeight
            })))
          };
          return window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        })()), () => {
          Ze.delete(e), !Ze.size && Ye && (Ye(), Ye = void 0)
        }))(e) : function(e, t) {
          Be || "undefined" != typeof ResizeObserver && (Be = new ResizeObserver(He));
          let n = Xe.get(t);
          return n || (n = new Set, Xe.set(t, n)), n.add(e), Be && Be.observe(t), () => {
            const n = Xe.get(t);
            n && (n.delete(e), !n.size && Be && Be.unobserve(t))
          }
        }(e, t),
        Ke = {
          x: {
            length: "Width",
            position: "Left"
          },
          y: {
            length: "Height",
            position: "Top"
          }
        },
        et = class {
          constructor(e, t) {
            this.createAxis = () => ({
              current: 0,
              progress: 0,
              scrollLength: 0
            }), this.updateAxis = e => {
              const t = this.info[e],
                {
                  length: n,
                  position: s
                } = Ke[e];
              var r, i;
              t.current = this.container[`scroll${s}`], t.scrollLength = this.container["scroll" + n] - this.container["client" + n], t.progress = (0, r = t.scrollLength, i = t.current, r - 0 == 0 ? 1 : (i - 0) / (r - 0))
            }, this.update = () => {
              this.updateAxis("x"), this.updateAxis("y")
            }, this.sendEvent = () => {
              this.callback(this.info)
            }, this.advance = () => {
              this.update(), this.sendEvent()
            }, this.callback = e, this.container = t, this.info = {
              time: 0,
              x: this.createAxis(),
              y: this.createAxis()
            }
          }
        },
        tt = new WeakMap,
        nt = new WeakMap,
        st = new WeakMap,
        rt = e => e === document.documentElement ? window : e,
        it = j() ? s.useEffect : s.useLayoutEffect,
        ot = () => {
          const e = (0, s.useRef)(!1);
          return it((() => (e.current = !0, () => {
            e.current = !1
          })), []), e
        };

      function at() {
        const e = (0, s.useState)()[1],
          t = ot();
        return () => {
          t.current && e(Math.random())
        }
      }
      var ut = e => (0, s.useEffect)(e, ct),
        ct = [];

      function lt(e) {
        const t = (0, s.useRef)();
        return (0, s.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var dt = () => {
          const [e, t] = (0, s.useState)(null);
          return it((() => {
            const e = window.matchMedia("(prefers-reduced-motion)"),
              n = e => {
                t(e.matches), $({
                  skipAnimation: e.matches
                })
              };
            return n(e), e.addEventListener("change", n), () => {
              e.removeEventListener("change", n)
            }
          }), []), e
        },
        ht = Symbol.for("Animated:node"),
        pt = e => e && e[ht],
        ft = (e, t) => {
          return n = e, s = ht, r = t, Object.defineProperty(n, s, {
            value: r,
            writable: !0,
            configurable: !0
          });
          var n, s, r
        },
        mt = e => e && e[ht] && e[ht].getPayload(),
        gt = class {
          constructor() {
            ft(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        yt = class extends gt {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, P.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new yt(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return P.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, P.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        vt = class extends yt {
          constructor(e) {
            super(0), this._string = null, this._toString = he({
              output: [e, e]
            })
          }
          static create(e) {
            return new vt(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (P.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = he({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        wt = {
          dependencies: null
        },
        bt = class extends gt {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return A(this.source, ((n, s) => {
              var r;
              (r = n) && r[ht] === r ? t[s] = n.getValue(e) : ke(n) ? t[s] = xe(n) : e || (t[s] = n)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && S(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return A(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            wt.dependencies && ke(e) && wt.dependencies.add(e);
            const t = mt(e);
            t && S(t, (e => this.add(e)))
          }
        },
        _t = class extends bt {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new _t(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, n) => t.setValue(e[n]))).some(Boolean) : (super.setValue(e.map(kt)), !0)
          }
        };

      function kt(e) {
        return (Ge(e) ? vt : yt).create(e)
      }

      function xt(e) {
        const t = pt(e);
        return t ? t.constructor : P.arr(e) ? _t : Ge(e) ? vt : yt
      }
      var Mt = (e, t) => {
          const n = !P.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, s.forwardRef)(((r, i) => {
            const o = (0, s.useRef)(null),
              u = n && (0, s.useCallback)((e => {
                o.current = function(e, t) {
                  return e && (P.fun(e) ? e(t) : e.current = t), t
                }(i, e)
              }), [i]),
              [c, l] = function(e, t) {
                const n = new Set;
                return wt.dependencies = n, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new bt(e), wt.dependencies = null, [e, n]
              }(r, t),
              d = at(),
              h = () => {
                const e = o.current;
                n && !e || !1 === (!!e && t.applyAnimatedValues(e, c.getValue(!0))) && d()
              },
              p = new Pt(h, l),
              f = (0, s.useRef)();
            it((() => (f.current = p, S(l, (e => Ae(e, p))), () => {
              f.current && (S(f.current.deps, (e => Ee(e, f.current))), a.cancel(f.current.update))
            }))), (0, s.useEffect)(h, []), ut((() => () => {
              const e = f.current;
              S(e.deps, (t => Ee(t, e)))
            }));
            const m = t.getComponentProps(c.getValue());
            return s.createElement(e, {
              ...m,
              ref: u
            })
          }))
        },
        Pt = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && a.write(this.update)
          }
        },
        It = Symbol.for("AnimatedComponent"),
        St = e => P.str(e) ? e : e && P.str(e.displayName) ? e.displayName : P.fun(e) && e.name || null,
        At = class {};

      function Et(e, ...t) {
        return P.fun(e) ? e(...t) : e
      }
      var Ot = (e, t) => !0 === e || !!(t && e && (P.fun(e) ? e(t) : E(e).includes(t))),
        Ct = (e, t) => P.obj(e) ? t && e[t] : e,
        Rt = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Vt = e => e,
        jt = (e, t = Vt) => {
          let n = qt;
          e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
          const s = {};
          for (const r of n) {
            const n = t(e[r], r);
            P.und(n) || (s[r] = n)
          }
          return s
        },
        qt = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        zt = {
          config: 1,
          from: 1,
          to: 1,
          ref: 1,
          loop: 1,
          reset: 1,
          pause: 1,
          cancel: 1,
          reverse: 1,
          immediate: 1,
          default: 1,
          delay: 1,
          onProps: 1,
          onStart: 1,
          onChange: 1,
          onPause: 1,
          onResume: 1,
          onRest: 1,
          onResolve: 1,
          items: 1,
          trail: 1,
          sort: 1,
          expires: 1,
          initial: 1,
          enter: 1,
          update: 1,
          leave: 1,
          children: 1,
          onDestroyed: 1,
          keys: 1,
          callId: 1,
          parentId: 1
        };

      function Tt(e) {
        const t = function(e) {
          const t = {};
          let n = 0;
          if (A(e, ((e, s) => {
              zt[s] || (t[s] = e, n++)
            })), n) return t
        }(e);
        if (t) {
          const n = {
            to: t
          };
          return A(e, ((e, s) => s in t || (n[s] = e))), n
        }
        return {
          ...e
        }
      }

      function $t(e) {
        return e = xe(e), P.arr(e) ? e.map($t) : Ge(e) ? i.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function Ft(e) {
        for (const t in e) return !0;
        return !1
      }

      function Lt(e) {
        return P.fun(e) || P.arr(e) && P.obj(e[0])
      }

      function Qt(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function Nt(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }

      function Dt(e, t, n = 1e3) {
        it((() => {
          if (t) {
            let s = 0;
            S(e, ((e, r) => {
              const i = e.current;
              if (i.length) {
                let o = n * t[r];
                isNaN(o) ? o = s : s = o, S(i, (e => {
                  S(e.queue, (e => {
                    const t = e.delay;
                    e.delay = e => o + Et(t || 0, e)
                  }))
                })), e.start()
              }
            }))
          } else {
            let t = Promise.resolve();
            S(e, (e => {
              const n = e.current;
              if (n.length) {
                const s = n.map((e => {
                  const t = e.queue;
                  return e.queue = [], t
                }));
                t = t.then((() => (S(n, ((e, t) => S(s[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
              }
            }))
          }
        }))
      }
      var Ut = {
          default: {
            tension: 170,
            friction: 26
          },
          gentle: {
            tension: 120,
            friction: 14
          },
          wobbly: {
            tension: 180,
            friction: 12
          },
          stiff: {
            tension: 210,
            friction: 20
          },
          slow: {
            tension: 280,
            friction: 60
          },
          molasses: {
            tension: 280,
            friction: 120
          }
        },
        Bt = {
          ...Ut.default,
          mass: 1,
          damping: 1,
          easing: we.linear,
          clamp: !1
        },
        Wt = class {
          constructor() {
            this.velocity = 0, Object.assign(this, Bt)
          }
        };

      function Gt(e, t) {
        if (P.und(t.decay)) {
          const n = !P.und(t.tension) || !P.und(t.friction);
          !n && P.und(t.frequency) && P.und(t.damping) && P.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Yt = [],
        Xt = class {
          constructor() {
            this.changed = !1, this.values = Yt, this.toValues = null, this.fromValues = Yt, this.config = new Wt, this.immediate = !1
          }
        };

      function Ht(e, {
        key: t,
        props: n,
        defaultProps: s,
        state: r,
        actions: o
      }) {
        return new Promise(((u, c) => {
          let l, d, h = Ot(n.cancel ?? s?.cancel, t);
          if (h) m();
          else {
            P.und(n.pause) || (r.paused = Ot(n.pause, t));
            let e = s?.pause;
            !0 !== e && (e = r.paused || Ot(e, t)), l = Et(n.delay || 0, t), e ? (r.resumeQueue.add(f), o.pause()) : (o.resume(), f())
          }

          function p() {
            r.resumeQueue.add(f), r.timeouts.delete(d), d.cancel(), l = d.time - a.now()
          }

          function f() {
            l > 0 && !i.skipAnimation ? (r.delayed = !0, d = a.setTimeout(m, l), r.pauseQueue.add(p), r.timeouts.add(d)) : m()
          }

          function m() {
            r.delayed && (r.delayed = !1), r.pauseQueue.delete(p), r.timeouts.delete(d), e <= (r.cancelId || 0) && (h = !0);
            try {
              o.start({
                ...n,
                callId: e,
                cancel: h
              }, u)
            } catch (e) {
              c(e)
            }
          }
        }))
      }
      var Zt = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? en(e.get()) : t.every((e => e.noop)) ? Jt(e.get()) : Kt(e.get(), t.every((e => e.finished))),
        Jt = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        Kt = (e, t, n = !1) => ({
          value: e,
          finished: t,
          cancelled: n
        }),
        en = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function tn(e, t, n, s) {
        const {
          callId: r,
          parentId: o,
          onRest: u
        } = t, {
          asyncTo: c,
          promise: l
        } = n;
        return o || e !== c || t.reset ? n.promise = (async () => {
          n.asyncId = r, n.asyncTo = e;
          const d = jt(t, ((e, t) => "onRest" === t ? void 0 : e));
          let h, p;
          const f = new Promise(((e, t) => (h = e, p = t))),
            m = e => {
              const t = r <= (n.cancelId || 0) && en(s) || r !== n.asyncId && Kt(s, !1);
              if (t) throw e.result = t, p(e), e
            },
            g = (e, t) => {
              const o = new sn,
                a = new rn;
              return (async () => {
                if (i.skipAnimation) throw nn(n), a.result = Kt(s, !1), p(a), a;
                m(o);
                const u = P.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                u.parentId = r, A(d, ((e, t) => {
                  P.und(u[t]) && (u[t] = e)
                }));
                const c = await s.start(u);
                return m(o), n.paused && await new Promise((e => {
                  n.resumeQueue.add(e)
                })), c
              })()
            };
          let y;
          if (i.skipAnimation) return nn(n), Kt(s, !1);
          try {
            let t;
            t = P.arr(e) ? (async e => {
              for (const t of e) await g(t)
            })(e) : Promise.resolve(e(g, s.stop.bind(s))), await Promise.all([t.then(h), f]), y = Kt(s.get(), !0, !1)
          } catch (e) {
            if (e instanceof sn) y = e.result;
            else {
              if (!(e instanceof rn)) throw e;
              y = e.result
            }
          } finally {
            r == n.asyncId && (n.asyncId = o, n.asyncTo = o ? c : void 0, n.promise = o ? l : void 0)
          }
          return P.fun(u) && a.batchedUpdates((() => {
            u(y, s, s.item)
          })), y
        })() : l
      }

      function nn(e, t) {
        O(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var sn = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        rn = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        on = e => e instanceof un,
        an = 1,
        un = class extends Ie {
          constructor() {
            super(...arguments), this.id = an++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = pt(this);
            return e && e.getValue()
          }
          to(...e) {
            return i.to(this, e)
          }
          interpolate(...e) {
            return Ue(), i.to(this, e)
          }
          toJSON() {
            return this.get()
          }
          observerAdded(e) {
            1 == e && this._attach()
          }
          observerRemoved(e) {
            0 == e && this._detach()
          }
          _attach() {}
          _detach() {}
          _onChange(e, t = !1) {
            Pe(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || D.sort(this), Pe(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        cn = Symbol.for("SpringPhase"),
        ln = e => (1 & e[cn]) > 0,
        dn = e => (2 & e[cn]) > 0,
        hn = e => (4 & e[cn]) > 0,
        pn = (e, t) => t ? e[cn] |= 3 : e[cn] &= -3,
        fn = (e, t) => t ? e[cn] |= 4 : e[cn] &= -5,
        mn = class extends un {
          constructor(e, t) {
            if (super(), this.animation = new Xt, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !P.und(e) || !P.und(t)) {
              const n = P.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              P.und(n.default) && (n.default = !0), this.start(n)
            }
          }
          get idle() {
            return !(dn(this) || this._state.asyncTo) || hn(this)
          }
          get goal() {
            return xe(this.animation.to)
          }
          get velocity() {
            const e = pt(this);
            return e instanceof yt ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return ln(this)
          }
          get isAnimating() {
            return dn(this)
          }
          get isPaused() {
            return hn(this)
          }
          get isDelayed() {
            return this._state.delayed
          }
          advance(e) {
            let t = !0,
              n = !1;
            const s = this.animation;
            let {
              toValues: r
            } = s;
            const {
              config: i
            } = s, o = mt(s.to);
            !o && ke(s.to) && (r = E(xe(s.to))), s.values.forEach(((a, u) => {
              if (a.done) return;
              const c = a.constructor == vt ? 1 : o ? o[u].lastPosition : r[u];
              let l = s.immediate,
                d = c;
              if (!l) {
                if (d = a.lastPosition, i.tension <= 0) return void(a.done = !0);
                let t = a.elapsedTime += e;
                const n = s.fromValues[u],
                  r = null != a.v0 ? a.v0 : a.v0 = P.arr(i.velocity) ? i.velocity[u] : i.velocity;
                let o;
                const h = i.precision || (n == c ? .005 : Math.min(1, .001 * Math.abs(c - n)));
                if (P.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      s = Math.exp(-(1 - e) * t);
                    d = n + r / (1 - e) * (1 - s), l = Math.abs(a.lastPosition - d) <= h, o = r * s
                  } else {
                    o = null == a.lastVelocity ? r : a.lastVelocity;
                    const t = i.restVelocity || h / 10,
                      s = i.clamp ? 0 : i.bounce,
                      u = !P.und(s),
                      p = n == c ? a.v0 > 0 : n < c;
                    let f, m = !1;
                    const g = 1,
                      y = Math.ceil(e / g);
                    for (let e = 0; e < y && (f = Math.abs(o) > t, f || (l = Math.abs(c - d) <= h, !l)); ++e) u && (m = d == c || d > c == p, m && (o = -o * s, d = c)), o += (1e-6 * -i.tension * (d - c) + .001 * -i.friction * o) / i.mass * g, d += o * g
                  }
                else {
                  let s = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, a.durationProgress > 0 && (a.elapsedTime = i.duration * a.durationProgress, t = a.elapsedTime += e)), s = (i.progress || 0) + t / this._memoizedDuration, s = s > 1 ? 1 : s < 0 ? 0 : s, a.durationProgress = s), d = n + i.easing(s) * (c - n), o = (d - a.lastPosition) / e, l = 1 == s
                }
                a.lastVelocity = o, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), l = !0)
              }
              o && !o[u].done && (l = !1), l ? a.done = !0 : t = !1, a.setValue(d, i.round) && (n = !0)
            }));
            const a = pt(this),
              u = a.getValue();
            if (t) {
              const e = xe(s.to);
              u === e && !n || i.decay ? n && i.decay && this._onChange(u) : (a.setValue(e), this._onChange(e)), this._stop()
            } else n && this._onChange(u)
          }
          set(e) {
            return a.batchedUpdates((() => {
              this._stop(), this._focus(e), this._set(e)
            })), this
          }
          pause() {
            this._update({
              pause: !0
            })
          }
          resume() {
            this._update({
              pause: !1
            })
          }
          finish() {
            if (dn(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              a.batchedUpdates((() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop()
              }))
            }
            return this
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this
          }
          start(e, t) {
            let n;
            return P.und(e) ? (n = this.queue || [], this.queue = []) : n = [P.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(n.map((e => this._update(e)))).then((e => Zt(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), nn(this._state, e && this._lastCallId), a.batchedUpdates((() => this._stop(t, e))), this
          }
          reset() {
            this._update({
              reset: !0
            })
          }
          eventObserved(e) {
            "change" == e.type ? this._start() : "priority" == e.type && (this.priority = e.priority + 1)
          }
          _prepareNode(e) {
            const t = this.key || "";
            let {
              to: n,
              from: s
            } = e;
            n = P.obj(n) ? n[t] : n, (null == n || Lt(n)) && (n = void 0), s = P.obj(s) ? s[t] : s, null == s && (s = void 0);
            const r = {
              to: n,
              from: s
            };
            return ln(this) || (e.reverse && ([n, s] = [s, n]), s = xe(s), P.und(s) ? pt(this) || this._set(n) : this._set(s)), r
          }
          _update({
            ...e
          }, t) {
            const {
              key: n,
              defaultProps: s
            } = this;
            e.default && Object.assign(s, jt(e, ((e, t) => /^on/.test(t) ? Ct(e, n) : e))), kn(this, e, "onProps"), xn(this, "onProps", e, this);
            const r = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return Ht(++this._lastCallId, {
              key: n,
              props: e,
              defaultProps: s,
              state: i,
              actions: {
                pause: () => {
                  hn(this) || (fn(this, !0), V(i.pauseQueue), xn(this, "onPause", Kt(this, gn(this, this.animation.to)), this))
                },
                resume: () => {
                  hn(this) && (fn(this, !1), dn(this) && this._resume(), V(i.resumeQueue), xn(this, "onResume", Kt(this, gn(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, r)
              }
            }).then((n => {
              if (e.loop && n.finished && (!t || !n.noop)) {
                const t = yn(e);
                if (t) return this._update(t, !0)
              }
              return n
            }))
          }
          _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(en(this));
            const s = !P.und(e.to),
              r = !P.und(e.from);
            if (s || r) {
              if (!(t.callId > this._lastToId)) return n(en(this));
              this._lastToId = t.callId
            }
            const {
              key: i,
              defaultProps: o,
              animation: u
            } = this, {
              to: c,
              from: l
            } = u;
            let {
              to: d = c,
              from: h = l
            } = e;
            !r || s || t.default && !P.und(d) || (d = h), t.reverse && ([d, h] = [h, d]);
            const p = !I(h, l);
            p && (u.from = h), h = xe(h);
            const f = !I(d, c);
            f && this._focus(d);
            const m = Lt(t.to),
              {
                config: g
              } = u,
              {
                decay: y,
                velocity: v
              } = g;
            (s || r) && (g.velocity = 0), t.config && !m && function(e, t, n) {
              n && (Gt(n = {
                ...n
              }, t), t = {
                ...n,
                ...t
              }), Gt(e, t), Object.assign(e, t);
              for (const t in Bt) null == e[t] && (e[t] = Bt[t]);
              let {
                frequency: s,
                damping: r
              } = e;
              const {
                mass: i
              } = e;
              P.und(s) || (s < .01 && (s = .01), r < 0 && (r = 0), e.tension = Math.pow(2 * Math.PI / s, 2) * i, e.friction = 4 * Math.PI * r * i / s)
            }(g, Et(t.config, i), t.config !== o.config ? Et(o.config, i) : void 0);
            let w = pt(this);
            if (!w || P.und(d)) return n(Kt(this, !0));
            const b = P.und(t.reset) ? r && !t.default : !P.und(h) && Ot(t.reset, i),
              _ = b ? h : this.get(),
              k = $t(d),
              x = P.num(k) || P.arr(k) || Ge(k),
              M = !m && (!x || Ot(o.immediate || t.immediate, i));
            if (f) {
              const e = xt(d);
              if (e !== w.constructor) {
                if (!M) throw Error(`Cannot animate between ${w.constructor.name} and ${e.name}, as the "to" prop suggests`);
                w = this._set(k)
              }
            }
            const A = w.constructor;
            let O = ke(d),
              C = !1;
            if (!O) {
              const e = b || !ln(this) && p;
              (f || e) && (C = I($t(_), k), O = !C), (I(u.immediate, M) || M) && I(g.decay, y) && I(g.velocity, v) || (O = !0)
            }
            if (C && dn(this) && (u.changed && !b ? O = !0 : O || this._stop(c)), !m && ((O || ke(c)) && (u.values = w.getPayload(), u.toValues = ke(d) ? null : A == vt ? [1] : E(k)), u.immediate != M && (u.immediate = M, M || b || this._set(c)), O)) {
              const {
                onRest: e
              } = u;
              S(_n, (e => kn(this, t, e)));
              const s = Kt(this, gn(this, c));
              V(this._pendingCalls, s), this._pendingCalls.add(n), u.changed && a.batchedUpdates((() => {
                u.changed = !b, e?.(s, this), b ? Et(o.onRest, s) : u.onStart?.(s, this)
              }))
            }
            b && this._set(_), m ? n(tn(t.to, t, this._state, this)) : O ? this._start() : dn(this) && !f ? this._pendingCalls.add(n) : n(Jt(_))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (Me(this) && this._detach(), t.to = e, Me(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            ke(t) && (Ae(t, this), on(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            ke(e) && Ee(e, this)
          }
          _set(e, t = !0) {
            const n = xe(e);
            if (!P.und(n)) {
              const e = pt(this);
              if (!e || !I(n, e.getValue())) {
                const s = xt(n);
                e && e.constructor == s ? e.setValue(n) : ft(this, s.create(n)), e && a.batchedUpdates((() => {
                  this._onChange(n, t)
                }))
              }
            }
            return pt(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, xn(this, "onStart", Kt(this, gn(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Et(this.animation.onChange, e, this)), Et(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            pt(this).reset(xe(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), dn(this) || (pn(this, !0), hn(this) || this._resume())
          }
          _resume() {
            i.skipAnimation ? this.finish() : D.start(this)
          }
          _stop(e, t) {
            if (dn(this)) {
              pn(this, !1);
              const n = this.animation;
              S(n.values, (e => {
                e.done = !0
              })), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Pe(this, {
                type: "idle",
                parent: this
              });
              const s = t ? en(this.get()) : Kt(this.get(), gn(this, e ?? n.to));
              V(this._pendingCalls, s), n.changed && (n.changed = !1, xn(this, "onRest", s, this))
            }
          }
        };

      function gn(e, t) {
        const n = $t(t);
        return I($t(e.get()), n)
      }

      function yn(e, t = e.loop, n = e.to) {
        const s = Et(t);
        if (s) {
          const r = !0 !== s && Tt(s),
            i = (r || e).reverse,
            o = !r || r.reset;
          return vn({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || Lt(n) ? n : void 0,
            from: o ? e.from : void 0,
            reset: o,
            ...r
          })
        }
      }

      function vn(e) {
        const {
          to: t,
          from: n
        } = e = Tt(e), s = new Set;
        return P.obj(t) && bn(t, s), P.obj(n) && bn(n, s), e.keys = s.size ? Array.from(s) : null, e
      }

      function wn(e) {
        const t = vn(e);
        return P.und(t.default) && (t.default = jt(t)), t
      }

      function bn(e, t) {
        A(e, ((e, n) => null != e && t.add(n)))
      }
      var _n = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function kn(e, t, n) {
        e.animation[n] = t[n] !== Rt(t, n) ? Ct(t[n], e.key) : void 0
      }

      function xn(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var Mn = ["onStart", "onChange", "onRest"],
        Pn = 1,
        In = class {
          constructor(e, t) {
            this.id = Pn++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
              paused: !1,
              pauseQueue: new Set,
              resumeQueue: new Set,
              timeouts: new Set
            }, this._events = {
              onStart: new Map,
              onChange: new Map,
              onRest: new Map
            }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({
              default: !0,
              ...e
            })
          }
          get idle() {
            return !this._state.asyncTo && Object.values(this.springs).every((e => e.idle && !e.isDelayed && !e.isPaused))
          }
          get item() {
            return this._item
          }
          set item(e) {
            this._item = e
          }
          get() {
            const e = {};
            return this.each(((t, n) => e[n] = t.get())), e
          }
          set(e) {
            for (const t in e) {
              const n = e[t];
              P.und(n) || this.springs[t].set(n)
            }
          }
          update(e) {
            return e && this.queue.push(vn(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = E(e).map(vn) : this.queue = [], this._flush ? this._flush(this, t) : (Vn(this, t), Sn(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const n = this.springs;
              S(E(t), (t => n[t].stop(!!e)))
            } else nn(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (P.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              S(E(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (P.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              S(E(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            A(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: n
            } = this._events, s = this._active.size > 0, r = this._changed.size > 0;
            (s && !this._started || r && !this._started) && (this._started = !0, O(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const i = !s && this._started,
              o = r || i && n.size ? this.get() : null;
            r && t.size && O(t, (([e, t]) => {
              t.value = o, e(t, this, this._item)
            })), i && (this._started = !1, O(n, (([e, t]) => {
              t.value = o, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            a.onFrame(this._onFrame)
          }
        };

      function Sn(e, t) {
        return Promise.all(t.map((t => An(e, t)))).then((t => Zt(e, t)))
      }
      async function An(e, t, n) {
        const {
          keys: s,
          to: r,
          from: i,
          loop: o,
          onRest: u,
          onResolve: c
        } = t, l = P.obj(t.default) && t.default;
        o && (t.loop = !1), !1 === r && (t.to = null), !1 === i && (t.from = null);
        const d = P.arr(r) || P.fun(r) ? r : void 0;
        d ? (t.to = void 0, t.onRest = void 0, l && (l.onRest = void 0)) : S(Mn, (n => {
          const s = t[n];
          if (P.fun(s)) {
            const r = e._events[n];
            t[n] = ({
              finished: e,
              cancelled: t
            }) => {
              const n = r.get(s);
              n ? (e || (n.finished = !1), t && (n.cancelled = !0)) : r.set(s, {
                value: null,
                finished: e || !1,
                cancelled: t || !1
              })
            }, l && (l[n] = t[n])
          }
        }));
        const h = e._state;
        t.pause === !h.paused ? (h.paused = t.pause, V(t.pause ? h.pauseQueue : h.resumeQueue)) : h.paused && (t.pause = !0);
        const p = (s || Object.keys(e.springs)).map((n => e.springs[n].start(t))),
          f = !0 === t.cancel || !0 === Rt(t, "cancel");
        (d || f && h.asyncId) && p.push(Ht(++e._lastAsyncId, {
          props: t,
          state: h,
          actions: {
            pause: M,
            resume: M,
            start(t, n) {
              f ? (nn(h, e._lastAsyncId), n(en(e))) : (t.onRest = u, n(tn(d, t, h, e)))
            }
          }
        })), h.paused && await new Promise((e => {
          h.resumeQueue.add(e)
        }));
        const m = Zt(e, await Promise.all(p));
        if (o && m.finished && (!n || !m.noop)) {
          const n = yn(t, o, r);
          if (n) return Vn(e, [n]), An(e, n, !0)
        }
        return c && a.batchedUpdates((() => c(m, e, e.item))), m
      }

      function En(e, t) {
        const n = {
          ...e.springs
        };
        return t && S(E(t), (e => {
          P.und(e.keys) && (e = vn(e)), P.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), Rn(n, e, (e => Cn(e)))
        })), On(e, n), n
      }

      function On(e, t) {
        A(t, ((t, n) => {
          e.springs[n] || (e.springs[n] = t, Ae(t, e))
        }))
      }

      function Cn(e, t) {
        const n = new mn;
        return n.key = e, t && Ae(n, t), n
      }

      function Rn(e, t, n) {
        t.keys && S(t.keys, (s => {
          (e[s] || (e[s] = n(s)))._prepareNode(t)
        }))
      }

      function Vn(e, t) {
        S(t, (t => {
          Rn(e.springs, t, (t => Cn(t, e)))
        }))
      }
      var jn, qn, zn = ({
          children: e,
          ...t
        }) => {
          const n = (0, s.useContext)(Tn),
            r = t.pause || !!n.pause,
            i = t.immediate || !!n.immediate;
          t = function(e, t) {
            const [n] = (0, s.useState)((() => ({
              inputs: t,
              result: e()
            }))), r = (0, s.useRef)(), i = r.current;
            let o = i;
            return o ? Boolean(t && o.inputs && function(e, t) {
              if (e.length !== t.length) return !1;
              for (let n = 0; n < e.length; n++)
                if (e[n] !== t[n]) return !1;
              return !0
            }(t, o.inputs)) || (o = {
              inputs: t,
              result: e()
            }) : o = n, (0, s.useEffect)((() => {
              r.current = o, i == n && (n.inputs = n.result = void 0)
            }), [o]), o.result
          }((() => ({
            pause: r,
            immediate: i
          })), [r, i]);
          const {
            Provider: o
          } = Tn;
          return s.createElement(o, {
            value: t
          }, e)
        },
        Tn = (jn = zn, qn = {}, Object.assign(jn, s.createContext(qn)), jn.Provider._context = jn, jn.Consumer._context = jn, jn);
      zn.Provider = Tn.Provider, zn.Consumer = Tn.Consumer;
      var $n = () => {
        const e = [],
          t = function(t) {
            We(`${Qe}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const s = [];
            return S(e, ((e, r) => {
              if (P.und(t)) s.push(e.start());
              else {
                const i = n(t, e, r);
                i && s.push(e.start(i))
              }
            })), s
          };
        t.current = e, t.add = function(t) {
          e.includes(t) || e.push(t)
        }, t.delete = function(t) {
          const n = e.indexOf(t);
          ~n && e.splice(n, 1)
        }, t.pause = function() {
          return S(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return S(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          S(e, ((e, n) => {
            const s = P.fun(t) ? t(n, e) : t;
            s && e.set(s)
          }))
        }, t.start = function(t) {
          const n = [];
          return S(e, ((e, s) => {
            if (P.und(t)) n.push(e.start());
            else {
              const r = this._getProps(t, e, s);
              r && n.push(e.start(r))
            }
          })), n
        }, t.stop = function() {
          return S(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return S(e, ((e, n) => e.update(this._getProps(t, e, n)))), this
        };
        const n = function(e, t, n) {
          return P.fun(e) ? e(n, t) : e
        };
        return t._getProps = n, t
      };

      function Fn(e, t, n) {
        const r = P.fun(t) && t;
        r && !n && (n = []);
        const i = (0, s.useMemo)((() => r || 3 == arguments.length ? $n() : void 0), []),
          o = (0, s.useRef)(0),
          a = at(),
          u = (0, s.useMemo)((() => ({
            ctrls: [],
            queue: [],
            flush(e, t) {
              const n = En(e, t);
              return o.current > 0 && !u.queue.length && !Object.keys(n).some((t => !e.springs[t])) ? Sn(e, t) : new Promise((s => {
                On(e, n), u.queue.push((() => {
                  s(Sn(e, t))
                })), a()
              }))
            }
          })), []),
          c = (0, s.useRef)([...u.ctrls]),
          l = [],
          d = lt(e) || 0;

        function h(e, n) {
          for (let s = e; s < n; s++) {
            const e = c.current[s] || (c.current[s] = new In(null, u.flush)),
              n = r ? r(s, e) : t[s];
            n && (l[s] = wn(n))
          }
        }(0, s.useMemo)((() => {
          S(c.current.slice(e, d), (e => {
            Qt(e, i), e.stop(!0)
          })), c.current.length = e, h(d, e)
        }), [e]), (0, s.useMemo)((() => {
          h(0, Math.min(d, e))
        }), n);
        const p = c.current.map(((e, t) => En(e, l[t]))),
          f = (0, s.useContext)(zn),
          m = lt(f),
          g = f !== m && Ft(f);
        it((() => {
          o.current++, u.ctrls = c.current;
          const {
            queue: e
          } = u;
          e.length && (u.queue = [], S(e, (e => e()))), S(c.current, ((e, t) => {
            i?.add(e), g && e.start({
              default: f
            });
            const n = l[t];
            n && (Nt(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
          }))
        })), ut((() => () => {
          S(u.ctrls, (e => e.stop(!0)))
        }));
        const y = p.map((e => ({
          ...e
        })));
        return i ? [y, i] : y
      }

      function Ln(e, t) {
        const n = P.fun(e),
          [
            [s], r
          ] = Fn(1, n ? e : [e], n ? t || [] : t);
        return n || 2 == arguments.length ? [s, r] : s
      }
      var Qn = () => $n(),
        Nn = () => (0, s.useState)(Qn)[0],
        Dn = (e, t) => {
          const n = function(n) {
            const r = (0, s.useRef)(null);
            return null === r.current && (r.current = new mn(e, t)), r.current
          }();
          return ut((() => () => {
            n.stop()
          })), n
        };

      function Un(e, t, n) {
        const s = P.fun(t) && t;
        s && !n && (n = []);
        let r, i = !0;
        const o = Fn(e, ((e, n) => {
          const o = s ? s(e, n) : t;
          return r = o.ref, i = i && o.reverse, o
        }), n || [{}]);
        if (it((() => {
            S(o[1].current, ((e, t) => {
              const n = o[1].current[t + (i ? 1 : -1)];
              Nt(e, r), e.ref ? n && e.update({
                to: n.springs
              }) : n ? e.start({
                to: n.springs
              }) : e.start()
            }))
          }), n), s || 3 == arguments.length) {
          const e = r ?? o[1];
          return e._getProps = (t, n, s) => {
            const r = P.fun(t) ? t(s, n) : t;
            if (r) {
              const t = e.current[s + (r.reverse ? 1 : -1)];
              return t && (r.to = t.springs), r
            }
          }, o
        }
        return o[0]
      }

      function Bn(e, t, n) {
        const r = P.fun(t) && t,
          {
            reset: i,
            sort: o,
            trail: a = 0,
            expires: u = !0,
            exitBeforeEnter: c = !1,
            onDestroyed: l,
            ref: d,
            config: h
          } = r ? r() : t,
          p = (0, s.useMemo)((() => r || 3 == arguments.length ? $n() : void 0), []),
          f = E(e),
          m = [],
          g = (0, s.useRef)(null),
          y = i ? null : g.current;
        it((() => {
          g.current = m
        })), ut((() => (S(m, (e => {
          p?.add(e.ctrl), e.ctrl.ref = p
        })), () => {
          S(g.current, (e => {
            e.expired && clearTimeout(e.expirationId), Qt(e.ctrl, p), e.ctrl.stop(!0)
          }))
        })));
        const v = function(e, {
            key: t,
            keys: n = t
          }, s) {
            if (null === n) {
              const t = new Set;
              return e.map((e => {
                const n = s && s.find((n => n.item === e && "leave" !== n.phase && !t.has(n)));
                return n ? (t.add(n), n.key) : Wn++
              }))
            }
            return P.und(n) ? e : P.fun(n) ? e.map(n) : E(n)
          }(f, r ? r() : t, y),
          w = i && g.current || [];
        it((() => S(w, (({
          ctrl: e,
          item: t,
          key: n
        }) => {
          Qt(e, p), Et(l, t, n)
        }))));
        const b = [];
        if (y && S(y, ((e, t) => {
            e.expired ? (clearTimeout(e.expirationId), w.push(e)) : ~(t = b[t] = v.indexOf(e.key)) && (m[t] = e)
          })), S(f, ((e, t) => {
            m[t] || (m[t] = {
              key: v[t],
              item: e,
              phase: "mount",
              ctrl: new In
            }, m[t].ctrl.item = e)
          })), b.length) {
          let e = -1;
          const {
            leave: n
          } = r ? r() : t;
          S(b, ((t, s) => {
            const r = y[s];
            ~t ? (e = m.indexOf(r), m[e] = {
              ...r,
              item: f[t]
            }) : n && m.splice(++e, 0, r)
          }))
        }
        P.fun(o) && m.sort(((e, t) => o(e.item, t.item)));
        let _ = -a;
        const k = at(),
          x = jt(t),
          M = new Map,
          I = (0, s.useRef)(new Map),
          A = (0, s.useRef)(!1);
        S(m, ((e, n) => {
          const s = e.key,
            i = e.phase,
            o = r ? r() : t;
          let l, p;
          const f = Et(o.delay || 0, s);
          if ("mount" == i) l = o.enter, p = "enter";
          else {
            const e = v.indexOf(s) < 0;
            if ("leave" != i)
              if (e) l = o.leave, p = "leave";
              else {
                if (!(l = o.update)) return;
                p = "update"
              }
            else {
              if (e) return;
              l = o.enter, p = "enter"
            }
          }
          if (l = Et(l, e.item, n), l = P.obj(l) ? Tt(l) : {
              to: l
            }, !l.config) {
            const t = h || x.config;
            l.config = Et(t, e.item, n, p)
          }
          _ += a;
          const m = {
            ...x,
            delay: f + _,
            ref: d,
            immediate: o.immediate,
            reset: !1,
            ...l
          };
          if ("enter" == p && P.und(m.from)) {
            const s = r ? r() : t,
              i = P.und(s.initial) || y ? s.from : s.initial;
            m.from = Et(i, e.item, n)
          }
          const {
            onResolve: w
          } = m;
          m.onResolve = e => {
            Et(w, e);
            const t = g.current,
              n = t.find((e => e.key === s));
            if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
              const e = t.every((e => e.ctrl.idle));
              if ("leave" == n.phase) {
                const t = Et(u, n.item);
                if (!1 !== t) {
                  const s = !0 === t ? 0 : t;
                  if (n.expired = !0, !e && s > 0) return void(s <= 2147483647 && (n.expirationId = setTimeout(k, s)))
                }
              }
              e && t.some((e => e.expired)) && (I.current.delete(n), c && (A.current = !0), k())
            }
          };
          const b = En(e.ctrl, m);
          "leave" === p && c ? I.current.set(e, {
            phase: p,
            springs: b,
            payload: m
          }) : M.set(e, {
            phase: p,
            springs: b,
            payload: m
          })
        }));
        const O = (0, s.useContext)(zn),
          C = lt(O),
          R = O !== C && Ft(O);
        it((() => {
          R && S(m, (e => {
            e.ctrl.start({
              default: O
            })
          }))
        }), [O]), S(M, ((e, t) => {
          if (I.current.size) {
            const e = m.findIndex((e => e.key === t.key));
            m.splice(e, 1)
          }
        })), it((() => {
          S(I.current.size ? I.current : M, (({
            phase: e,
            payload: t
          }, n) => {
            const {
              ctrl: s
            } = n;
            n.phase = e, p?.add(s), R && "enter" == e && s.start({
              default: O
            }), t && (Nt(s, t.ref), !s.ref && !p || A.current ? (s.start(t), A.current && (A.current = !1)) : s.update(t))
          }))
        }), i ? void 0 : n);
        const V = e => s.createElement(s.Fragment, null, m.map(((t, n) => {
          const {
            springs: r
          } = M.get(t) || t.ctrl, i = e({
            ...r
          }, t.item, t, n);
          return i && i.type ? s.createElement(i.type, {
            ...i.props,
            key: P.str(t.key) || P.num(t.key) ? t.key : t.ctrl.id,
            ref: i.ref
          }) : i
        })));
        return p ? [V, p] : V
      }
      var Wn = 1,
        Gn = ({
          container: e,
          ...t
        } = {}) => {
          const [n, s] = Ln((() => ({
            scrollX: 0,
            scrollY: 0,
            scrollXProgress: 0,
            scrollYProgress: 0,
            ...t
          })), []);
          return it((() => {
            const t = ((e, {
              container: t = document.documentElement
            } = {}) => {
              let n = st.get(t);
              n || (n = new Set, st.set(t, n));
              const s = new et(e, t);
              if (n.add(s), !tt.has(t)) {
                const e = () => (n?.forEach((e => e.advance())), !0);
                tt.set(t, e);
                const s = rt(t);
                window.addEventListener("resize", e, {
                  passive: !0
                }), t !== document.documentElement && nt.set(t, Je(e, {
                  container: t
                })), s.addEventListener("scroll", e, {
                  passive: !0
                })
              }
              const r = tt.get(t);
              return a(r), () => {
                a.cancel(r);
                const e = st.get(t);
                if (!e) return;
                if (e.delete(s), e.size) return;
                const n = tt.get(t);
                tt.delete(t), n && (rt(t).removeEventListener("scroll", n), window.removeEventListener("resize", n), nt.get(t)?.())
              }
            })((({
              x: e,
              y: t
            }) => {
              s.start({
                scrollX: e.current,
                scrollXProgress: e.progress,
                scrollY: t.current,
                scrollYProgress: t.progress
              })
            }), {
              container: e?.current || void 0
            });
            return () => {
              S(Object.values(n), (e => e.stop())), t()
            }
          }), []), n
        },
        Yn = ({
          container: e,
          ...t
        }) => {
          const [n, s] = Ln((() => ({
            width: 0,
            height: 0,
            ...t
          })), []);
          return it((() => {
            const t = Je((({
              width: e,
              height: t
            }) => {
              s.start({
                width: e,
                height: t,
                immediate: 0 === n.width.get() || 0 === n.height.get()
              })
            }), {
              container: e?.current || void 0
            });
            return () => {
              S(Object.values(n), (e => e.stop())), t()
            }
          }), []), n
        },
        Xn = {
          any: 0,
          all: 1
        };

      function Hn(e, t) {
        const [n, r] = (0, s.useState)(!1), i = (0, s.useRef)(), o = P.fun(e) && e, a = o ? o() : {}, {
          to: u = {},
          from: c = {},
          ...l
        } = a, d = o ? t : e, [h, p] = Ln((() => ({
          from: c,
          ...l
        })), []);
        return it((() => {
          const e = i.current,
            {
              root: t,
              once: s,
              amount: o = "any",
              ...a
            } = d ?? {};
          if (!e || s && n || "undefined" == typeof IntersectionObserver) return;
          const l = new WeakMap,
            h = new IntersectionObserver((e => {
              e.forEach((e => {
                const t = l.get(e.target);
                if (e.isIntersecting !== Boolean(t))
                  if (e.isIntersecting) {
                    const t = (u && p.start(u), r(!0), s ? void 0 : () => {
                      c && p.start(c), r(!1)
                    });
                    P.fun(t) ? l.set(e.target, t) : h.unobserve(e.target)
                  } else t && (t(), l.delete(e.target))
              }))
            }), {
              root: t && t.current || void 0,
              threshold: "number" == typeof o || Array.isArray(o) ? o : Xn[o],
              ...a
            });
          return h.observe(e), () => h.unobserve(e)
        }), [d]), o ? [i, h] : [i, n]
      }

      function Zn({
        children: e,
        ...t
      }) {
        return e(Ln(t))
      }

      function Jn({
        items: e,
        children: t,
        ...n
      }) {
        const s = Un(e.length, n);
        return e.map(((e, n) => {
          const r = t(e, n);
          return P.fun(r) ? r(s[n]) : r
        }))
      }

      function Kn({
        items: e,
        children: t,
        ...n
      }) {
        return Bn(e, n)(t)
      }
      var es = class extends un {
        constructor(e, t) {
          super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = he(...t);
          const n = this._get(),
            s = xt(n);
          ft(this, s.create(n))
        }
        advance(e) {
          const t = this._get();
          I(t, this.get()) || (pt(this).setValue(t), this._onChange(t, this.idle)), !this.idle && ns(this._active) && ss(this)
        }
        _get() {
          const e = P.arr(this.source) ? this.source.map(xe) : E(xe(this.source));
          return this.calc(...e)
        }
        _start() {
          this.idle && !ns(this._active) && (this.idle = !1, S(mt(this), (e => {
            e.done = !1
          })), i.skipAnimation ? (a.batchedUpdates((() => this.advance())), ss(this)) : D.start(this))
        }
        _attach() {
          let e = 1;
          S(E(this.source), (t => {
            ke(t) && Ae(t, this), on(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
          })), this.priority = e, this._start()
        }
        _detach() {
          S(E(this.source), (e => {
            ke(e) && Ee(e, this)
          })), this._active.clear(), ss(this)
        }
        eventObserved(e) {
          "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = E(this.source).reduce(((e, t) => Math.max(e, (on(t) ? t.priority : 0) + 1)), 0))
        }
      };

      function ts(e) {
        return !1 !== e.idle
      }

      function ns(e) {
        return !e.size || Array.from(e).every(ts)
      }

      function ss(e) {
        e.idle || (e.idle = !0, S(mt(e), (e => {
          e.done = !0
        })), Pe(e, {
          type: "idle",
          parent: e
        }))
      }
      var rs = (e, ...t) => new es(e, t),
        is = (e, ...t) => (Ue(), new es(e, t));
      i.assign({
        createStringInterpolator: Le,
        to: (e, t) => new es(e, t)
      });
      var os = D.advance,
        as = n(44853),
        us = /^--/;

      function cs(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || us.test(e) || ds.hasOwnProperty(e) && ds[e] ? ("" + t).trim() : t + "px"
      }
      var ls = {},
        ds = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        },
        hs = ["Webkit", "Ms", "Moz", "O"];
      ds = Object.keys(ds).reduce(((e, t) => (hs.forEach((n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e)), ds);
      var ps = /^(matrix|translate|scale|rotate|skew)/,
        fs = /^(translate)/,
        ms = /^(rotate|skew)/,
        gs = (e, t) => P.num(e) && 0 !== e ? e + t : e,
        ys = (e, t) => P.arr(e) ? e.every((e => ys(e, t))) : P.num(e) ? e === t : parseFloat(e) === t,
        vs = class extends bt {
          constructor({
            x: e,
            y: t,
            z: n,
            ...s
          }) {
            const r = [],
              i = [];
            (e || t || n) && (r.push([e || 0, t || 0, n || 0]), i.push((e => [`translate3d(${e.map((e=>gs(e,"px"))).join(",")})`, ys(e, 0)]))), A(s, ((e, t) => {
              if ("transform" === t) r.push([e || ""]), i.push((e => [e, "" === e]));
              else if (ps.test(t)) {
                if (delete s[t], P.und(e)) return;
                const n = fs.test(t) ? "px" : ms.test(t) ? "deg" : "";
                r.push(E(e)), i.push("rotate3d" === t ? ([e, t, s, r]) => [`rotate3d(${e},${t},${s},${gs(r,n)})`, ys(r, 0)] : e => [`${t}(${e.map((e=>gs(e,n))).join(",")})`, ys(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), r.length && (s.transform = new ws(r, i)), super(s)
          }
        },
        ws = class extends Ie {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return S(this.inputs, ((n, s) => {
              const r = xe(n[0]),
                [i, o] = this.transforms[s](P.arr(r) ? r : n.map(xe));
              e += " " + i, t = t && o
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && S(this.inputs, (e => S(e, (e => ke(e) && Ae(e, this)))))
          }
          observerRemoved(e) {
            0 == e && S(this.inputs, (e => S(e, (e => ke(e) && Ee(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Pe(this, e)
          }
        };
      i.assign({
        batchedUpdates: as.unstable_batchedUpdates,
        createStringInterpolator: Le,
        colors: {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199
        }
      });
      var bs = ((e, {
          applyAnimatedValues: t = (() => !1),
          createAnimatedStyle: n = (e => new bt(e)),
          getComponentProps: s = (e => e)
        } = {}) => {
          const r = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: s
            },
            i = e => {
              const t = St(e) || "Anonymous";
              return (e = P.str(e) ? i[e] || (i[e] = Mt(e, r)) : e[It] || (e[It] = Mt(e, r))).displayName = `Animated(${t})`, e
            };
          return A(e, ((t, n) => {
            P.arr(e) && (n = St(t)), i[n] = i(t)
          })), {
            animated: i
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                style: s,
                children: r,
                scrollTop: i,
                scrollLeft: o,
                viewBox: a,
                ...u
              } = t,
              c = Object.values(u),
              l = Object.keys(u).map((t => n || e.hasAttribute(t) ? t : ls[t] || (ls[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== r && (e.textContent = r);
            for (const t in s)
              if (s.hasOwnProperty(t)) {
                const n = cs(t, s[t]);
                us.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
              } l.forEach(((t, n) => {
              e.setAttribute(t, c[n])
            })), void 0 !== i && (e.scrollTop = i), void 0 !== o && (e.scrollLeft = o), void 0 !== a && e.setAttribute("viewBox", a)
          },
          createAnimatedStyle: e => new vs(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...n
          }) => n
        }),
        _s = bs.animated
    }
  }
]);