try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d4095c4e-bbc1-4f4f-a01e-bd8abbb8746b", e._sentryDebugIdIdentifier = "sentry-dbid-d4095c4e-bbc1-4f4f-a01e-bd8abbb8746b")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [2734], {
    62734: (e, t, n) => {
      n.r(t), n.d(t, {
        Any: () => At,
        BailSignal: () => sn,
        Controller: () => Sn,
        FrameValue: () => un,
        Globals: () => x,
        Interpolation: () => Zn,
        Spring: () => Yn,
        SpringContext: () => jn,
        SpringRef: () => qn,
        SpringValue: () => mn,
        Trail: () => Xn,
        Transition: () => Hn,
        a: () => vs,
        animated: () => vs,
        config: () => Ut,
        createInterpolator: () => he,
        easings: () => we,
        inferTo: () => Tt,
        interpolate: () => ns,
        to: () => ts,
        update: () => ss,
        useChain: () => Dt,
        useInView: () => Gn,
        useIsomorphicLayoutEffect: () => it,
        useReducedMotion: () => dt,
        useResize: () => Bn,
        useScroll: () => Un,
        useSpring: () => Tn,
        useSpringRef: () => Fn,
        useSpringValue: () => Ln,
        useSprings: () => zn,
        useTrail: () => Qn,
        useTransition: () => Nn
      });
      var s = w(),
        r = e => m(e, s),
        i = w();
      r.write = e => m(e, i);
      var a = w();
      r.onStart = e => m(e, a);
      var o = w();
      r.onFrame = e => m(e, o);
      var u = w();
      r.onFinish = e => m(e, u);
      var c = [];
      r.setTimeout = (e, t) => {
        const n = r.now() + t,
          s = () => {
            const e = c.findIndex(e => e.cancel == s);
            ~e && c.splice(e, 1), p -= ~e ? 1 : 0
          },
          i = {
            time: n,
            handler: e,
            cancel: s
          };
        return c.splice(l(n), 0, i), p += 1, g(), i
      };
      var l = e => ~(~c.findIndex(t => t.time > e) || ~c.length);
      r.cancel = e => {
        a.delete(e), o.delete(e), u.delete(e), s.delete(e), i.delete(e)
      }, r.sync = e => {
        f = !0, r.batchedUpdates(e), f = !1
      }, r.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function s(...e) {
          t = e, r.onStart(n)
        }
        return s.handler = e, s.cancel = () => {
          a.delete(n), t = null
        }, s
      };
      var d = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      r.use = e => d = e, r.now = "undefined" != typeof performance ? () => performance.now() : Date.now, r.batchedUpdates = e => e(), r.catch = console.error, r.frameLoop = "always", r.advance = () => {
        "demand" !== r.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : v()
      };
      var h = -1,
        p = 0,
        f = !1;

      function m(e, t) {
        f ? (t.delete(e), e(0)) : (t.add(e), g())
      }

      function g() {
        h < 0 && (h = 0, "demand" !== r.frameLoop && d(y))
      }

      function y() {
        ~h && (d(y), r.batchedUpdates(v))
      }

      function v() {
        const e = h;
        h = r.now();
        const t = l(h);
        t && (b(c.splice(0, t), e => e.handler()), p -= t), p ? (a.flush(), s.flush(e ? Math.min(64, h - e) : 16.667), o.flush(), i.flush(), u.flush()) : h = -1
      }

      function w() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            p += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (p -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, p -= t.size, b(t, t => t(n) && e.add(t)), p += e.size, t = e)
          }
        }
      }

      function b(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            r.catch(e)
          }
        })
      }
      var _ = n(62229),
        k = Object.defineProperty,
        x = {};

      function M() {}((e, t) => {
        for (var n in t) k(e, n, {
          get: t[n],
          enumerable: !0
        })
      })(x, {
        assign: () => $,
        colors: () => q,
        createStringInterpolator: () => C,
        skipAnimation: () => z,
        to: () => R,
        willAdvance: () => T
      });
      var I = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function S(e, t) {
        if (I.arr(e)) {
          if (!I.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }
        return e === t
      }
      var P = (e, t) => e.forEach(t);

      function A(e, t, n) {
        if (I.arr(e))
          for (let s = 0; s < e.length; s++) t.call(n, e[s], `${s}`);
        else
          for (const s in e) e.hasOwnProperty(s) && t.call(n, e[s], s)
      }
      var E = e => I.und(e) ? [] : I.arr(e) ? e : [e];

      function O(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), P(n, t)
        }
      }
      var C, R, V = (e, ...t) => O(e, e => e(...t)),
        j = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        q = null,
        z = !1,
        T = M,
        $ = e => {
          e.to && (R = e.to), e.now && (r.now = e.now), void 0 !== e.colors && (q = e.colors), null != e.skipAnimation && (z = e.skipAnimation), e.createStringInterpolator && (C = e.createStringInterpolator), e.requestAnimationFrame && r.use(e.requestAnimationFrame), e.batchedUpdates && (r.batchedUpdates = e.batchedUpdates), e.willAdvance && (T = e.willAdvance), e.frameLoop && (r.frameLoop = e.frameLoop)
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
            N > e.priority ? (F.add(e), r.onStart(U)) : (B(e), r(G))
          },
          advance: G,
          sort(e) {
            if (N) r.onFrame(() => D.sort(e));
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
        F.forEach(B), F.clear(), r(G)
      }

      function B(e) {
        L.includes(e) || W(e)
      }

      function W(e) {
        L.splice(function(t) {
          const n = t.findIndex(t => t.priority > e.priority);
          return n < 0 ? t.length : n
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

      function ae(e, t, n) {
        const s = n < .5 ? n * (1 + t) : n + t - n * t,
          r = 2 * n - s,
          i = ie(r, s, e + 1 / 3),
          a = ie(r, s, e),
          o = ie(r, s, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * o) << 8
      }

      function oe(e) {
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
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = se.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : q && void 0 !== q[e] ? q[e] : (t = Z.exec(e)) ? (oe(t[1]) << 24 | oe(t[2]) << 16 | oe(t[3]) << 8 | 255) >>> 0 : (t = J.exec(e)) ? (oe(t[1]) << 24 | oe(t[2]) << 16 | oe(t[3]) << 8 | ce(t[4])) >>> 0 : (t = te.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = re.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ne.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = K.exec(e)) ? (255 | ae(ue(t[1]), le(t[2]), le(t[3]))) >>> 0 : (t = ee.exec(e)) ? (ae(ue(t[1]), le(t[2]), le(t[3])) | ce(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var he = (e, t, n) => {
          if (I.fun(e)) return e;
          if (I.arr(e)) return he({
            range: e,
            output: t,
            extrapolate: n
          });
          if (I.str(e.output[0])) return C(e);
          const s = e,
            r = s.output,
            i = s.range || [0, 1],
            a = s.extrapolateLeft || s.extrapolate || "extend",
            o = s.extrapolateRight || s.extrapolate || "extend",
            u = s.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
              return n - 1
            }(e, i);
            return function(e, t, n, s, r, i, a, o, u) {
              let c = u ? u(e) : e;
              if (c < t) {
                if ("identity" === a) return c;
                "clamp" === a && (c = t)
              }
              if (c > n) {
                if ("identity" === o) return c;
                "clamp" === o && (c = n)
              }
              return s === r ? s : t === n ? e <= t ? s : r : (t === -1 / 0 ? c = -c : n === 1 / 0 ? c -= t : c = (c - t) / (n - t), c = i(c), s === -1 / 0 ? c = -c : r === 1 / 0 ? c += s : c = c * (r - s) + s, c)
            }(e, i[t], i[t + 1], r[t], r[t + 1], u, a, o, s.map)
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
            return r = ("end" === t ? Math.floor(s) : Math.ceil(s)) / e, Math.min(Math.max(r, 0), 1);
            var r
          }
        },
        be = Symbol.for("FluidValue.get"),
        _e = Symbol.for("FluidValue.observers"),
        ke = e => Boolean(e && e[be]),
        xe = e => e && e[be] ? e[be]() : e,
        Me = e => e[_e] || null;

      function Ie(e, t) {
        const n = e[_e];
        n && n.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var Se = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Pe(this, e)
          }
        },
        Pe = (e, t) => Ce(e, be, t);

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
          const t = e.output.map(e => xe(e).replace(ze, Te).replace(Ve, de).replace(Oe, de)),
            n = t.map(e => e.match(Re).map(Number)),
            s = n[0].map((e, t) => n.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })).map(t => he({
              ...e,
              output: t
            }));
          return e => {
            const n = !je.test(t[0]) && t.find(e => je.test(e))?.replace(Re, "");
            let r = 0;
            return t[0].replace(Re, () => `${s[r++](e)}${n||""}`).replace(qe, Fe)
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
        return I.str(e) && ("#" == e[0] || /\d/.test(e) || !j() && ze.test(e) || e in (q || {}))
      }
      var Ye, Xe = new WeakMap,
        He = e => e.forEach(({
          target: e,
          contentRect: t
        }) => Xe.get(e)?.forEach(e => e(t))),
        Ze = new Set,
        Je = (e, {
          container: t = document.documentElement
        } = {}) => t === document.documentElement ? (e => (Ze.add(e), Ye || (Ye = (() => {
          const e = () => {
            Ze.forEach(e => e({
              width: window.innerWidth,
              height: window.innerHeight
            }))
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
              t.current = this.container[`scroll${s}`], t.scrollLength = this.container[`scroll${n}`] - this.container[`client${n}`], t.progress = (r = t.scrollLength, i = t.current, r - 0 == 0 ? 1 : (i - 0) / (r - 0))
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
        it = j() ? _.useEffect : _.useLayoutEffect,
        at = () => {
          const e = (0, _.useRef)(!1);
          return it(() => (e.current = !0, () => {
            e.current = !1
          }), []), e
        };

      function ot() {
        const e = (0, _.useState)()[1],
          t = at();
        return () => {
          t.current && e(Math.random())
        }
      }
      var ut = e => (0, _.useEffect)(e, ct),
        ct = [];

      function lt(e) {
        const t = (0, _.useRef)(void 0);
        return (0, _.useEffect)(() => {
          t.current = e
        }), t.current
      }
      var dt = () => {
          const [e, t] = (0, _.useState)(null);
          return it(() => {
            const e = window.matchMedia("(prefers-reduced-motion)"),
              n = e => {
                t(e.matches), $({
                  skipAnimation: e.matches
                })
              };
            return n(e), e.addEventListener ? e.addEventListener("change", n) : e.addListener(n), () => {
              e.removeEventListener ? e.removeEventListener("change", n) : e.removeListener(n)
            }
          }, []), e
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
        yt = class e extends gt {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, I.num(this._value) && (this.lastPosition = this._value)
          }
          static create(t) {
            return new e(t)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return I.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, I.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        vt = class e extends yt {
          constructor(e) {
            super(0), this._string = null, this._toString = he({
              output: [e, e]
            })
          }
          static create(t) {
            return new e(t)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (I.str(e)) {
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
            return A(this.source, (n, s) => {
              var r;
              (r = n) && r[ht] === r ? t[s] = n.getValue(e) : ke(n) ? t[s] = xe(n) : e || (t[s] = n)
            }), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && P(this.payload, e => e.reset())
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
            t && P(t, e => this.add(e))
          }
        },
        _t = class e extends bt {
          constructor(e) {
            super(e)
          }
          static create(t) {
            return new e(t)
          }
          getValue() {
            return this.source.map(e => e.getValue())
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map((t, n) => t.setValue(e[n])).some(Boolean) : (super.setValue(e.map(kt)), !0)
          }
        };

      function kt(e) {
        return (Ge(e) ? vt : yt).create(e)
      }

      function xt(e) {
        const t = pt(e);
        return t ? t.constructor : I.arr(e) ? _t : Ge(e) ? vt : yt
      }
      var Mt = (e, t) => {
          const n = !I.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, _.forwardRef)((s, i) => {
            const a = (0, _.useRef)(null),
              o = n && (0, _.useCallback)(e => {
                a.current = function(e, t) {
                  return e && (I.fun(e) ? e(t) : e.current = t), t
                }(i, e)
              }, [i]),
              [u, c] = function(e, t) {
                const n = new Set;
                return wt.dependencies = n, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new bt(e), wt.dependencies = null, [e, n]
              }(s, t),
              l = ot(),
              d = () => {
                const e = a.current;
                n && !e || !1 === (!!e && t.applyAnimatedValues(e, u.getValue(!0))) && l()
              },
              h = new It(d, c),
              p = (0, _.useRef)(void 0);
            it(() => (p.current = h, P(c, e => Ae(e, h)), () => {
              p.current && (P(p.current.deps, e => Ee(e, p.current)), r.cancel(p.current.update))
            })), (0, _.useEffect)(d, []), ut(() => () => {
              const e = p.current;
              P(e.deps, t => Ee(t, e))
            });
            const f = t.getComponentProps(u.getValue());
            return _.createElement(e, {
              ...f,
              ref: o
            })
          })
        },
        It = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && r.write(this.update)
          }
        },
        St = Symbol.for("AnimatedComponent"),
        Pt = e => I.str(e) ? e : e && I.str(e.displayName) ? e.displayName : I.fun(e) && e.name || null,
        At = class {};

      function Et(e, ...t) {
        return I.fun(e) ? e(...t) : e
      }
      var Ot = (e, t) => !0 === e || !!(t && e && (I.fun(e) ? e(t) : E(e).includes(t))),
        Ct = (e, t) => I.obj(e) ? t && e[t] : e,
        Rt = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Vt = e => e,
        jt = (e, t = Vt) => {
          let n = qt;
          e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
          const s = {};
          for (const r of n) {
            const n = t(e[r], r);
            I.und(n) || (s[r] = n)
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
          if (A(e, (e, s) => {
              zt[s] || (t[s] = e, n++)
            }), n) return t
        }(e);
        if (t) {
          const n = {
            to: t
          };
          return A(e, (e, s) => s in t || (n[s] = e)), n
        }
        return {
          ...e
        }
      }

      function $t(e) {
        return e = xe(e), I.arr(e) ? e.map($t) : Ge(e) ? x.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function Ft(e) {
        for (const t in e) return !0;
        return !1
      }

      function Lt(e) {
        return I.fun(e) || I.arr(e) && I.obj(e[0])
      }

      function Qt(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function Nt(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }

      function Dt(e, t, n = 1e3) {
        it(() => {
          if (t) {
            let s = 0;
            P(e, (e, r) => {
              const i = e.current;
              if (i.length) {
                let a = n * t[r];
                isNaN(a) ? a = s : s = a, P(i, e => {
                  P(e.queue, e => {
                    const t = e.delay;
                    e.delay = e => a + Et(t || 0, e)
                  })
                }), e.start()
              }
            })
          } else {
            let t = Promise.resolve();
            P(e, e => {
              const n = e.current;
              if (n.length) {
                const s = n.map(e => {
                  const t = e.queue;
                  return e.queue = [], t
                });
                t = t.then(() => (P(n, (e, t) => P(s[t] || [], t => e.queue.push(t))), Promise.all(e.start())))
              }
            })
          }
        })
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
        if (I.und(t.decay)) {
          const n = !I.und(t.tension) || !I.und(t.friction);
          !n && I.und(t.frequency) && I.und(t.damping) && I.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
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
        state: i,
        actions: a
      }) {
        return new Promise((o, u) => {
          let c, l, d = Ot(n.cancel ?? s?.cancel, t);
          if (d) f();
          else {
            I.und(n.pause) || (i.paused = Ot(n.pause, t));
            let e = s?.pause;
            !0 !== e && (e = i.paused || Ot(e, t)), c = Et(n.delay || 0, t), e ? (i.resumeQueue.add(p), a.pause()) : (a.resume(), p())
          }

          function h() {
            i.resumeQueue.add(p), i.timeouts.delete(l), l.cancel(), c = l.time - r.now()
          }

          function p() {
            c > 0 && !x.skipAnimation ? (i.delayed = !0, l = r.setTimeout(f, c), i.pauseQueue.add(h), i.timeouts.add(l)) : f()
          }

          function f() {
            i.delayed && (i.delayed = !1), i.pauseQueue.delete(h), i.timeouts.delete(l), e <= (i.cancelId || 0) && (d = !0);
            try {
              a.start({
                ...n,
                callId: e,
                cancel: d
              }, o)
            } catch (e) {
              u(e)
            }
          }
        })
      }
      var Zt = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? en(e.get()) : t.every(e => e.noop) ? Jt(e.get()) : Kt(e.get(), t.every(e => e.finished)),
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
          callId: i,
          parentId: a,
          onRest: o
        } = t, {
          asyncTo: u,
          promise: c
        } = n;
        return a || e !== u || t.reset ? n.promise = (async () => {
          n.asyncId = i, n.asyncTo = e;
          const l = jt(t, (e, t) => "onRest" === t ? void 0 : e);
          let d, h;
          const p = new Promise((e, t) => (d = e, h = t)),
            f = e => {
              const t = i <= (n.cancelId || 0) && en(s) || i !== n.asyncId && Kt(s, !1);
              if (t) throw e.result = t, h(e), e
            },
            m = (e, t) => {
              const r = new sn,
                a = new rn;
              return (async () => {
                if (x.skipAnimation) throw nn(n), a.result = Kt(s, !1), h(a), a;
                f(r);
                const o = I.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                o.parentId = i, A(l, (e, t) => {
                  I.und(o[t]) && (o[t] = e)
                });
                const u = await s.start(o);
                return f(r), n.paused && await new Promise(e => {
                  n.resumeQueue.add(e)
                }), u
              })()
            };
          let g;
          if (x.skipAnimation) return nn(n), Kt(s, !1);
          try {
            let t;
            t = I.arr(e) ? (async e => {
              for (const t of e) await m(t)
            })(e) : Promise.resolve(e(m, s.stop.bind(s))), await Promise.all([t.then(d), p]), g = Kt(s.get(), !0, !1)
          } catch (e) {
            if (e instanceof sn) g = e.result;
            else {
              if (!(e instanceof rn)) throw e;
              g = e.result
            }
          } finally {
            i == n.asyncId && (n.asyncId = a, n.asyncTo = a ? u : void 0, n.promise = a ? c : void 0)
          }
          return I.fun(o) && r.batchedUpdates(() => {
            o(g, s, s.item)
          }), g
        })() : c
      }

      function nn(e, t) {
        O(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
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
        an = e => e instanceof un,
        on = 1,
        un = class extends Se {
          constructor() {
            super(...arguments), this.id = on++, this._priority = 0
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
            return x.to(this, e)
          }
          interpolate(...e) {
            return Ue(), x.to(this, e)
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
            Ie(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || D.sort(this), Ie(this, {
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
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !I.und(e) || !I.und(t)) {
              const n = I.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              I.und(n.default) && (n.default = !0), this.start(n)
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
            return e instanceof yt ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
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
            } = s, a = mt(s.to);
            !a && ke(s.to) && (r = E(xe(s.to))), s.values.forEach((o, u) => {
              if (o.done) return;
              const c = o.constructor == vt ? 1 : a ? a[u].lastPosition : r[u];
              let l = s.immediate,
                d = c;
              if (!l) {
                if (d = o.lastPosition, i.tension <= 0) return void(o.done = !0);
                let t = o.elapsedTime += e;
                const n = s.fromValues[u],
                  r = null != o.v0 ? o.v0 : o.v0 = I.arr(i.velocity) ? i.velocity[u] : i.velocity;
                let a;
                const h = i.precision || (n == c ? .005 : Math.min(1, .001 * Math.abs(c - n)));
                if (I.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      s = Math.exp(-(1 - e) * t);
                    d = n + r / (1 - e) * (1 - s), l = Math.abs(o.lastPosition - d) <= h, a = r * s
                  } else {
                    a = null == o.lastVelocity ? r : o.lastVelocity;
                    const t = i.restVelocity || h / 10,
                      s = i.clamp ? 0 : i.bounce,
                      u = !I.und(s),
                      p = n == c ? o.v0 > 0 : n < c;
                    let f, m = !1;
                    const g = 1,
                      y = Math.ceil(e / g);
                    for (let e = 0; e < y && (f = Math.abs(a) > t, f || (l = Math.abs(c - d) <= h, !l)); ++e) u && (m = d == c || d > c == p, m && (a = -a * s, d = c)), a += (1e-6 * -i.tension * (d - c) + .001 * -i.friction * a) / i.mass * g, d += a * g
                  }
                else {
                  let s = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, o.durationProgress > 0 && (o.elapsedTime = i.duration * o.durationProgress, t = o.elapsedTime += e)), s = (i.progress || 0) + t / this._memoizedDuration, s = s > 1 ? 1 : s < 0 ? 0 : s, o.durationProgress = s), d = n + i.easing(s) * (c - n), a = (d - o.lastPosition) / e, l = 1 == s
                }
                o.lastVelocity = a, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), l = !0)
              }
              a && !a[u].done && (l = !1), l ? o.done = !0 : t = !1, o.setValue(d, i.round) && (n = !0)
            });
            const o = pt(this),
              u = o.getValue();
            if (t) {
              const e = xe(s.to);
              u === e && !n || i.decay ? n && i.decay && this._onChange(u) : (o.setValue(e), this._onChange(e)), this._stop()
            } else n && this._onChange(u)
          }
          set(e) {
            return r.batchedUpdates(() => {
              this._stop(), this._focus(e), this._set(e)
            }), this
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
              r.batchedUpdates(() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop()
              })
            }
            return this
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this
          }
          start(e, t) {
            let n;
            return I.und(e) ? (n = this.queue || [], this.queue = []) : n = [I.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(n.map(e => this._update(e))).then(e => Zt(this, e))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), nn(this._state, e && this._lastCallId), r.batchedUpdates(() => this._stop(t, e)), this
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
            n = I.obj(n) ? n[t] : n, (null == n || Lt(n)) && (n = void 0), s = I.obj(s) ? s[t] : s, null == s && (s = void 0);
            const r = {
              to: n,
              from: s
            };
            return ln(this) || (e.reverse && ([n, s] = [s, n]), s = xe(s), I.und(s) ? pt(this) || this._set(n) : this._set(s)), r
          }
          _update({
            ...e
          }, t) {
            const {
              key: n,
              defaultProps: s
            } = this;
            e.default && Object.assign(s, jt(e, (e, t) => /^on/.test(t) ? Ct(e, n) : e)), kn(this, e, "onProps"), xn(this, "onProps", e, this);
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
            }).then(n => {
              if (e.loop && n.finished && (!t || !n.noop)) {
                const t = yn(e);
                if (t) return this._update(t, !0)
              }
              return n
            })
          }
          _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(en(this));
            const s = !I.und(e.to),
              i = !I.und(e.from);
            if (s || i) {
              if (!(t.callId > this._lastToId)) return n(en(this));
              this._lastToId = t.callId
            }
            const {
              key: a,
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
            !i || s || t.default && !I.und(d) || (d = h), t.reverse && ([d, h] = [h, d]);
            const p = !S(h, l);
            p && (u.from = h), h = xe(h);
            const f = !S(d, c);
            f && this._focus(d);
            const m = Lt(t.to),
              {
                config: g
              } = u,
              {
                decay: y,
                velocity: v
              } = g;
            (s || i) && (g.velocity = 0), t.config && !m && function(e, t, n) {
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
              I.und(s) || (s < .01 && (s = .01), r < 0 && (r = 0), e.tension = Math.pow(2 * Math.PI / s, 2) * i, e.friction = 4 * Math.PI * r * i / s)
            }(g, Et(t.config, a), t.config !== o.config ? Et(o.config, a) : void 0);
            let w = pt(this);
            if (!w || I.und(d)) return n(Kt(this, !0));
            const b = I.und(t.reset) ? i && !t.default : !I.und(h) && Ot(t.reset, a),
              _ = b ? h : this.get(),
              k = $t(d),
              x = I.num(k) || I.arr(k) || Ge(k),
              M = !m && (!x || Ot(o.immediate || t.immediate, a));
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
              (f || e) && (C = S($t(_), k), O = !C), (S(u.immediate, M) || M) && S(g.decay, y) && S(g.velocity, v) || (O = !0)
            }
            if (C && dn(this) && (u.changed && !b ? O = !0 : O || this._stop(c)), !m && ((O || ke(c)) && (u.values = w.getPayload(), u.toValues = ke(d) ? null : A == vt ? [1] : E(k)), u.immediate != M && (u.immediate = M, M || b || this._set(c)), O)) {
              const {
                onRest: e
              } = u;
              P(_n, e => kn(this, t, e));
              const s = Kt(this, gn(this, c));
              V(this._pendingCalls, s), this._pendingCalls.add(n), u.changed && r.batchedUpdates(() => {
                u.changed = !b, e?.(s, this), b ? Et(o.onRest, s) : u.onStart?.(s, this)
              })
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
            ke(t) && (Ae(t, this), an(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            ke(e) && Ee(e, this)
          }
          _set(e, t = !0) {
            const n = xe(e);
            if (!I.und(n)) {
              const e = pt(this);
              if (!e || !S(n, e.getValue())) {
                const s = xt(n);
                e && e.constructor == s ? e.setValue(n) : ft(this, s.create(n)), e && r.batchedUpdates(() => {
                  this._onChange(n, t)
                })
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
            pt(this).reset(xe(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), dn(this) || (pn(this, !0), hn(this) || this._resume())
          }
          _resume() {
            x.skipAnimation ? this.finish() : D.start(this)
          }
          _stop(e, t) {
            if (dn(this)) {
              pn(this, !1);
              const n = this.animation;
              P(n.values, e => {
                e.done = !0
              }), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Ie(this, {
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
        return S($t(e.get()), n)
      }

      function yn(e, t = e.loop, n = e.to) {
        const s = Et(t);
        if (s) {
          const r = !0 !== s && Tt(s),
            i = (r || e).reverse,
            a = !r || r.reset;
          return vn({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || Lt(n) ? n : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...r
          })
        }
      }

      function vn(e) {
        const {
          to: t,
          from: n
        } = e = Tt(e), s = new Set;
        return I.obj(t) && bn(t, s), I.obj(n) && bn(n, s), e.keys = s.size ? Array.from(s) : null, e
      }

      function wn(e) {
        const t = vn(e);
        return I.und(t.default) && (t.default = jt(t)), t
      }

      function bn(e, t) {
        A(e, (e, n) => null != e && t.add(n))
      }
      var _n = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function kn(e, t, n) {
        e.animation[n] = t[n] !== Rt(t, n) ? Ct(t[n], e.key) : void 0
      }

      function xn(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var Mn = ["onStart", "onChange", "onRest"],
        In = 1,
        Sn = class {
          constructor(e, t) {
            this.id = In++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
            return !this._state.asyncTo && Object.values(this.springs).every(e => e.idle && !e.isDelayed && !e.isPaused)
          }
          get item() {
            return this._item
          }
          set item(e) {
            this._item = e
          }
          get() {
            const e = {};
            return this.each((t, n) => e[n] = t.get()), e
          }
          set(e) {
            for (const t in e) {
              const n = e[t];
              I.und(n) || this.springs[t].set(n)
            }
          }
          update(e) {
            return e && this.queue.push(vn(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = E(e).map(vn) : this.queue = [], this._flush ? this._flush(this, t) : (Vn(this, t), Pn(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const n = this.springs;
              P(E(t), t => n[t].stop(!!e))
            } else nn(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
            return this
          }
          pause(e) {
            if (I.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              P(E(e), e => t[e].pause())
            }
            return this
          }
          resume(e) {
            if (I.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              P(E(e), e => t[e].resume())
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
            (s && !this._started || r && !this._started) && (this._started = !0, O(e, ([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            }));
            const i = !s && this._started,
              a = r || i && n.size ? this.get() : null;
            r && t.size && O(t, ([e, t]) => {
              t.value = a, e(t, this, this._item)
            }), i && (this._started = !1, O(n, ([e, t]) => {
              t.value = a, e(t, this, this._item)
            }))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            r.onFrame(this._onFrame)
          }
        };

      function Pn(e, t) {
        return Promise.all(t.map(t => An(e, t))).then(t => Zt(e, t))
      }
      async function An(e, t, n) {
        const {
          keys: s,
          to: i,
          from: a,
          loop: o,
          onRest: u,
          onResolve: c
        } = t, l = I.obj(t.default) && t.default;
        o && (t.loop = !1), !1 === i && (t.to = null), !1 === a && (t.from = null);
        const d = I.arr(i) || I.fun(i) ? i : void 0;
        d ? (t.to = void 0, t.onRest = void 0, l && (l.onRest = void 0)) : P(Mn, n => {
          const s = t[n];
          if (I.fun(s)) {
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
        });
        const h = e._state;
        t.pause === !h.paused ? (h.paused = t.pause, V(t.pause ? h.pauseQueue : h.resumeQueue)) : h.paused && (t.pause = !0);
        const p = (s || Object.keys(e.springs)).map(n => e.springs[n].start(t)),
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
        })), h.paused && await new Promise(e => {
          h.resumeQueue.add(e)
        });
        const m = Zt(e, await Promise.all(p));
        if (o && m.finished && (!n || !m.noop)) {
          const n = yn(t, o, i);
          if (n) return Vn(e, [n]), An(e, n, !0)
        }
        return c && r.batchedUpdates(() => c(m, e, e.item)), m
      }

      function En(e, t) {
        const n = {
          ...e.springs
        };
        return t && P(E(t), e => {
          I.und(e.keys) && (e = vn(e)), I.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), Rn(n, e, e => Cn(e))
        }), On(e, n), n
      }

      function On(e, t) {
        A(t, (t, n) => {
          e.springs[n] || (e.springs[n] = t, Ae(t, e))
        })
      }

      function Cn(e, t) {
        const n = new mn;
        return n.key = e, t && Ae(n, t), n
      }

      function Rn(e, t, n) {
        t.keys && P(t.keys, s => {
          (e[s] || (e[s] = n(s)))._prepareNode(t)
        })
      }

      function Vn(e, t) {
        P(t, t => {
          Rn(e.springs, t, t => Cn(t, e))
        })
      }
      var jn = _.createContext({
          pause: !1,
          immediate: !1
        }),
        qn = () => {
          const e = [],
            t = function(t) {
              We(`${Qe}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const s = [];
              return P(e, (e, r) => {
                if (I.und(t)) s.push(e.start());
                else {
                  const i = n(t, e, r);
                  i && s.push(e.start(i))
                }
              }), s
            };
          t.current = e, t.add = function(t) {
            e.includes(t) || e.push(t)
          }, t.delete = function(t) {
            const n = e.indexOf(t);
            ~n && e.splice(n, 1)
          }, t.pause = function() {
            return P(e, e => e.pause(...arguments)), this
          }, t.resume = function() {
            return P(e, e => e.resume(...arguments)), this
          }, t.set = function(t) {
            P(e, (e, n) => {
              const s = I.fun(t) ? t(n, e) : t;
              s && e.set(s)
            })
          }, t.start = function(t) {
            const n = [];
            return P(e, (e, s) => {
              if (I.und(t)) n.push(e.start());
              else {
                const r = this._getProps(t, e, s);
                r && n.push(e.start(r))
              }
            }), n
          }, t.stop = function() {
            return P(e, e => e.stop(...arguments)), this
          }, t.update = function(t) {
            return P(e, (e, n) => e.update(this._getProps(t, e, n))), this
          };
          const n = function(e, t, n) {
            return I.fun(e) ? e(n, t) : e
          };
          return t._getProps = n, t
        };

      function zn(e, t, n) {
        const s = I.fun(t) && t;
        s && !n && (n = []);
        const r = (0, _.useMemo)(() => s || 3 == arguments.length ? qn() : void 0, []),
          i = (0, _.useRef)(0),
          a = ot(),
          o = (0, _.useMemo)(() => ({
            ctrls: [],
            queue: [],
            flush(e, t) {
              const n = En(e, t);
              return i.current > 0 && !o.queue.length && !Object.keys(n).some(t => !e.springs[t]) ? Pn(e, t) : new Promise(s => {
                On(e, n), o.queue.push(() => {
                  s(Pn(e, t))
                }), a()
              })
            }
          }), []),
          u = (0, _.useRef)([...o.ctrls]),
          c = (0, _.useRef)([]),
          l = lt(e) || 0;

        function d(e, n) {
          for (let r = e; r < n; r++) {
            const e = u.current[r] || (u.current[r] = new Sn(null, o.flush)),
              n = s ? s(r, e) : t[r];
            n && (c.current[r] = wn(n))
          }
        }(0, _.useMemo)(() => {
          P(u.current.slice(e, l), e => {
            Qt(e, r), e.stop(!0)
          }), u.current.length = e, d(l, e)
        }, [e]), (0, _.useMemo)(() => {
          d(0, Math.min(l, e))
        }, n);
        const h = u.current.map((e, t) => En(e, c.current[t])),
          p = (0, _.useContext)(jn),
          f = lt(p),
          m = p !== f && Ft(p);
        it(() => {
          i.current++, o.ctrls = u.current;
          const {
            queue: e
          } = o;
          e.length && (o.queue = [], P(e, e => e())), P(u.current, (e, t) => {
            r?.add(e), m && e.start({
              default: p
            });
            const n = c.current[t];
            n && (Nt(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
          })
        }), ut(() => () => {
          P(o.ctrls, e => e.stop(!0))
        });
        const g = h.map(e => ({
          ...e
        }));
        return r ? [g, r] : g
      }

      function Tn(e, t) {
        const n = I.fun(e),
          [
            [s], r
          ] = zn(1, n ? e : [e], n ? t || [] : t);
        return n || 2 == arguments.length ? [s, r] : s
      }
      var $n = () => qn(),
        Fn = () => (0, _.useState)($n)[0],
        Ln = (e, t) => {
          const n = function() {
            const n = (0, _.useRef)(null);
            return null === n.current && (n.current = new mn(e, t)), n.current
          }();
          return ut(() => () => {
            n.stop()
          }), n
        };

      function Qn(e, t, n) {
        const s = I.fun(t) && t;
        s && !n && (n = []);
        let r, i = !0;
        const a = zn(e, (e, n) => {
          const a = s ? s(e, n) : t;
          return r = a.ref, i = i && a.reverse, a
        }, n || [{}]);
        if (it(() => {
            P(a[1].current, (e, t) => {
              const n = a[1].current[t + (i ? 1 : -1)];
              Nt(e, r), e.ref ? n && e.update({
                to: n.springs
              }) : n ? e.start({
                to: n.springs
              }) : e.start()
            })
          }, n), s || 3 == arguments.length) {
          const e = r ?? a[1];
          return e._getProps = (t, n, s) => {
            const r = I.fun(t) ? t(s, n) : t;
            if (r) {
              const t = e.current[s + (r.reverse ? 1 : -1)];
              return t && (r.to = t.springs), r
            }
          }, a
        }
        return a[0]
      }

      function Nn(e, t, n) {
        const s = I.fun(t) && t,
          {
            reset: r,
            sort: i,
            trail: a = 0,
            expires: o = !0,
            exitBeforeEnter: u = !1,
            onDestroyed: c,
            ref: l,
            config: d
          } = s ? s() : t,
          h = (0, _.useMemo)(() => s || 3 == arguments.length ? qn() : void 0, []),
          p = E(e),
          f = [],
          m = (0, _.useRef)(null),
          g = r ? null : m.current;
        it(() => {
          m.current = f
        }), ut(() => (P(f, e => {
          h?.add(e.ctrl), e.ctrl.ref = h
        }), () => {
          P(m.current, e => {
            e.expired && clearTimeout(e.expirationId), Qt(e.ctrl, h), e.ctrl.stop(!0)
          })
        }));
        const y = function(e, {
            key: t,
            keys: n = t
          }, s) {
            if (null === n) {
              const t = new Set;
              return e.map(e => {
                const n = s && s.find(n => n.item === e && "leave" !== n.phase && !t.has(n));
                return n ? (t.add(n), n.key) : Dn++
              })
            }
            return I.und(n) ? e : I.fun(n) ? e.map(n) : E(n)
          }(p, s ? s() : t, g),
          v = r && m.current || [];
        it(() => P(v, ({
          ctrl: e,
          item: t,
          key: n
        }) => {
          Qt(e, h), Et(c, t, n)
        }));
        const w = [];
        if (g && P(g, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), v.push(e)) : ~(t = w[t] = y.indexOf(e.key)) && (f[t] = e)
          }), P(p, (e, t) => {
            f[t] || (f[t] = {
              key: y[t],
              item: e,
              phase: "mount",
              ctrl: new Sn
            }, f[t].ctrl.item = e)
          }), w.length) {
          let e = -1;
          const {
            leave: n
          } = s ? s() : t;
          P(w, (t, s) => {
            const r = g[s];
            ~t ? (e = f.indexOf(r), f[e] = {
              ...r,
              item: p[t]
            }) : n && f.splice(++e, 0, r)
          })
        }
        I.fun(i) && f.sort((e, t) => i(e.item, t.item));
        let b = -a;
        const k = ot(),
          x = jt(t),
          M = new Map,
          S = (0, _.useRef)(new Map),
          A = (0, _.useRef)(!1);
        P(f, (e, n) => {
          const r = e.key,
            i = e.phase,
            c = s ? s() : t;
          let h, p;
          const f = Et(c.delay || 0, r);
          if ("mount" == i) h = c.enter, p = "enter";
          else {
            const e = y.indexOf(r) < 0;
            if ("leave" != i)
              if (e) h = c.leave, p = "leave";
              else {
                if (!(h = c.update)) return;
                p = "update"
              }
            else {
              if (e) return;
              h = c.enter, p = "enter"
            }
          }
          if (h = Et(h, e.item, n), h = I.obj(h) ? Tt(h) : {
              to: h
            }, !h.config) {
            const t = d || x.config;
            h.config = Et(t, e.item, n, p)
          }
          b += a;
          const v = {
            ...x,
            delay: f + b,
            ref: l,
            immediate: c.immediate,
            reset: !1,
            ...h
          };
          if ("enter" == p && I.und(v.from)) {
            const r = s ? s() : t,
              i = I.und(r.initial) || g ? r.from : r.initial;
            v.from = Et(i, e.item, n)
          }
          const {
            onResolve: w
          } = v;
          v.onResolve = e => {
            Et(w, e);
            const t = m.current,
              n = t.find(e => e.key === r);
            if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
              const e = t.every(e => e.ctrl.idle);
              if ("leave" == n.phase) {
                const t = Et(o, n.item);
                if (!1 !== t) {
                  const s = !0 === t ? 0 : t;
                  if (n.expired = !0, !e && s > 0) return void(s <= 2147483647 && (n.expirationId = setTimeout(k, s)))
                }
              }
              e && t.some(e => e.expired) && (S.current.delete(n), u && (A.current = !0), k())
            }
          };
          const _ = En(e.ctrl, v);
          "leave" === p && u ? S.current.set(e, {
            phase: p,
            springs: _,
            payload: v
          }) : M.set(e, {
            phase: p,
            springs: _,
            payload: v
          })
        });
        const O = (0, _.useContext)(jn),
          C = lt(O),
          R = O !== C && Ft(O);
        it(() => {
          R && P(f, e => {
            e.ctrl.start({
              default: O
            })
          })
        }, [O]), P(M, (e, t) => {
          if (S.current.size) {
            const e = f.findIndex(e => e.key === t.key);
            f.splice(e, 1)
          }
        }), it(() => {
          P(S.current.size ? S.current : M, ({
            phase: e,
            payload: t
          }, n) => {
            const {
              ctrl: s
            } = n;
            n.phase = e, h?.add(s), R && "enter" == e && s.start({
              default: O
            }), t && (Nt(s, t.ref), !s.ref && !h || A.current ? (s.start(t), A.current && (A.current = !1)) : s.update(t))
          })
        }, r ? void 0 : n);
        const V = e => _.createElement(_.Fragment, null, f.map((t, n) => {
          const {
            springs: s
          } = M.get(t) || t.ctrl, r = e({
            ...s
          }, t.item, t, n), i = I.str(t.key) || I.num(t.key) ? t.key : t.ctrl.id, a = _.version < "19.0.0", o = r?.props ?? {}, u = a ? r?.ref : o?.ref;
          return r && r.type ? _.createElement(r.type, {
            ...o,
            key: i,
            ref: u
          }) : r
        }));
        return h ? [V, h] : V
      }
      var Dn = 1,
        Un = ({
          container: e,
          ...t
        } = {}) => {
          const [n, s] = Tn(() => ({
            scrollX: 0,
            scrollY: 0,
            scrollXProgress: 0,
            scrollYProgress: 0,
            ...t
          }), []);
          return it(() => {
            const t = ((e, {
              container: t = document.documentElement
            } = {}) => {
              let n = st.get(t);
              n || (n = new Set, st.set(t, n));
              const s = new et(e, t);
              if (n.add(s), !tt.has(t)) {
                const e = () => (n?.forEach(e => e.advance()), !0);
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
              const i = tt.get(t);
              return r(i), () => {
                r.cancel(i);
                const e = st.get(t);
                if (!e) return;
                if (e.delete(s), e.size) return;
                const n = tt.get(t);
                tt.delete(t), n && (rt(t).removeEventListener("scroll", n), window.removeEventListener("resize", n), nt.get(t)?.())
              }
            })(({
              x: e,
              y: t
            }) => {
              s.start({
                scrollX: e.current,
                scrollXProgress: e.progress,
                scrollY: t.current,
                scrollYProgress: t.progress
              })
            }, {
              container: e?.current || void 0
            });
            return () => {
              P(Object.values(n), e => e.stop()), t()
            }
          }, []), n
        },
        Bn = ({
          container: e,
          ...t
        }) => {
          const [n, s] = Tn(() => ({
            width: 0,
            height: 0,
            ...t
          }), []);
          return it(() => {
            const r = Je(({
              width: e,
              height: r
            }) => {
              s.start({
                width: e,
                height: r,
                immediate: 0 === n.width.get() || 0 === n.height.get() || !0 === t.immediate
              })
            }, {
              container: e?.current || void 0
            });
            return () => {
              P(Object.values(n), e => e.stop()), r()
            }
          }, []), n
        },
        Wn = {
          any: 0,
          all: 1
        };

      function Gn(e, t) {
        const [n, s] = (0, _.useState)(!1), r = (0, _.useRef)(void 0), i = I.fun(e) && e, a = i ? i() : {}, {
          to: o = {},
          from: u = {},
          ...c
        } = a, l = i ? t : e, [d, h] = Tn(() => ({
          from: u,
          ...c
        }), []);
        return it(() => {
          const e = r.current,
            {
              root: t,
              once: i,
              amount: a = "any",
              ...c
            } = l ?? {};
          if (!e || i && n || "undefined" == typeof IntersectionObserver) return;
          const d = new WeakMap,
            p = new IntersectionObserver(e => {
              e.forEach(e => {
                const t = d.get(e.target);
                if (e.isIntersecting !== Boolean(t))
                  if (e.isIntersecting) {
                    const t = (o && h.start(o), s(!0), i ? void 0 : () => {
                      u && h.start(u), s(!1)
                    });
                    I.fun(t) ? d.set(e.target, t) : p.unobserve(e.target)
                  } else t && (t(), d.delete(e.target))
              })
            }, {
              root: t && t.current || void 0,
              threshold: "number" == typeof a || Array.isArray(a) ? a : Wn[a],
              ...c
            });
          return p.observe(e), () => p.unobserve(e)
        }, [l]), i ? [r, d] : [r, n]
      }

      function Yn({
        children: e,
        ...t
      }) {
        return e(Tn(t))
      }

      function Xn({
        items: e,
        children: t,
        ...n
      }) {
        const s = Qn(e.length, n);
        return e.map((e, n) => {
          const r = t(e, n);
          return I.fun(r) ? r(s[n]) : r
        })
      }

      function Hn({
        items: e,
        children: t,
        ...n
      }) {
        return Nn(e, n)(t)
      }
      var Zn = class extends un {
        constructor(e, t) {
          super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = he(...t);
          const n = this._get(),
            s = xt(n);
          ft(this, s.create(n))
        }
        advance(e) {
          const t = this._get();
          S(t, this.get()) || (pt(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Kn(this._active) && es(this)
        }
        _get() {
          const e = I.arr(this.source) ? this.source.map(xe) : E(xe(this.source));
          return this.calc(...e)
        }
        _start() {
          this.idle && !Kn(this._active) && (this.idle = !1, P(mt(this), e => {
            e.done = !1
          }), x.skipAnimation ? (r.batchedUpdates(() => this.advance()), es(this)) : D.start(this))
        }
        _attach() {
          let e = 1;
          P(E(this.source), t => {
            ke(t) && Ae(t, this), an(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
          }), this.priority = e, this._start()
        }
        _detach() {
          P(E(this.source), e => {
            ke(e) && Ee(e, this)
          }), this._active.clear(), es(this)
        }
        eventObserved(e) {
          "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = E(this.source).reduce((e, t) => Math.max(e, (an(t) ? t.priority : 0) + 1), 0))
        }
      };

      function Jn(e) {
        return !1 !== e.idle
      }

      function Kn(e) {
        return !e.size || Array.from(e).every(Jn)
      }

      function es(e) {
        e.idle || (e.idle = !0, P(mt(e), e => {
          e.done = !0
        }), Ie(e, {
          type: "idle",
          parent: e
        }))
      }
      var ts = (e, ...t) => new Zn(e, t),
        ns = (e, ...t) => (Ue(), new Zn(e, t));
      x.assign({
        createStringInterpolator: Le,
        to: (e, t) => new Zn(e, t)
      });
      var ss = D.advance,
        rs = n(44853),
        is = /^--/;

      function as(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || is.test(e) || us.hasOwnProperty(e) && us[e] ? ("" + t).trim() : t + "px"
      }
      var os = {},
        us = {
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
        cs = ["Webkit", "Ms", "Moz", "O"];
      us = Object.keys(us).reduce((e, t) => (cs.forEach(n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t]), e), us);
      var ls = /^(matrix|translate|scale|rotate|skew)/,
        ds = /^(translate)/,
        hs = /^(rotate|skew)/,
        ps = (e, t) => I.num(e) && 0 !== e ? e + t : e,
        fs = (e, t) => I.arr(e) ? e.every(e => fs(e, t)) : I.num(e) ? e === t : parseFloat(e) === t,
        ms = class extends bt {
          constructor({
            x: e,
            y: t,
            z: n,
            ...s
          }) {
            const r = [],
              i = [];
            (e || t || n) && (r.push([e || 0, t || 0, n || 0]), i.push(e => [`translate3d(${e.map(e=>ps(e,"px")).join(",")})`, fs(e, 0)])), A(s, (e, t) => {
              if ("transform" === t) r.push([e || ""]), i.push(e => [e, "" === e]);
              else if (ls.test(t)) {
                if (delete s[t], I.und(e)) return;
                const n = ds.test(t) ? "px" : hs.test(t) ? "deg" : "";
                r.push(E(e)), i.push("rotate3d" === t ? ([e, t, s, r]) => [`rotate3d(${e},${t},${s},${ps(r,n)})`, fs(r, 0)] : e => [`${t}(${e.map(e=>ps(e,n)).join(",")})`, fs(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), r.length && (s.transform = new gs(r, i)), super(s)
          }
        },
        gs = class extends Se {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return P(this.inputs, (n, s) => {
              const r = xe(n[0]),
                [i, a] = this.transforms[s](I.arr(r) ? r : n.map(xe));
              e += " " + i, t = t && a
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && P(this.inputs, e => P(e, e => ke(e) && Ae(e, this)))
          }
          observerRemoved(e) {
            0 == e && P(this.inputs, e => P(e, e => ke(e) && Ee(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Ie(this, e)
          }
        };
      x.assign({
        batchedUpdates: rs.unstable_batchedUpdates,
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
      var ys = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: n = e => new bt(e),
          getComponentProps: s = e => e
        } = {}) => {
          const r = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: s
            },
            i = e => {
              const t = Pt(e) || "Anonymous";
              return (e = I.str(e) ? i[e] || (i[e] = Mt(e, r)) : e[St] || (e[St] = Mt(e, r))).displayName = `Animated(${t})`, e
            };
          return A(e, (t, n) => {
            I.arr(e) && (n = Pt(t)), i[n] = i(t)
          }), {
            animated: i
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: s,
                style: r,
                children: i,
                scrollTop: a,
                scrollLeft: o,
                viewBox: u,
                ...c
              } = t,
              l = Object.values(c),
              d = Object.keys(c).map(t => n || e.hasAttribute(t) ? t : os[t] || (os[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            void 0 !== i && (e.textContent = i);
            for (const t in r)
              if (r.hasOwnProperty(t)) {
                const n = as(t, r[t]);
                is.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
              } d.forEach((t, n) => {
              e.setAttribute(t, l[n])
            }), void 0 !== s && (e.className = s), void 0 !== a && (e.scrollTop = a), void 0 !== o && (e.scrollLeft = o), void 0 !== u && e.setAttribute("viewBox", u)
          },
          createAnimatedStyle: e => new ms(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...n
          }) => n
        }),
        vs = ys.animated
    }
  }
]);