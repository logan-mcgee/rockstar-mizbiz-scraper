try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b2303ae7-bec0-446a-8e0f-516794d8effc", e._sentryDebugIdIdentifier = "sentry-dbid-b2303ae7-bec0-446a-8e0f-516794d8effc")
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
  [3903], {
    93903(e, t, n) {
      n.r(t), n.d(t, {
        Any: () => Et,
        BailSignal: () => on,
        Controller: () => An,
        FrameValue: () => ln,
        Globals: () => V,
        Interpolation: () => Kn,
        Spring: () => Zn,
        SpringContext: () => jn,
        SpringRef: () => qn,
        SpringValue: () => yn,
        Trail: () => Hn,
        Transition: () => Jn,
        a: () => bs,
        animated: () => bs,
        config: () => Wt,
        createInterpolator: () => pe,
        easings: () => be,
        inferTo: () => $t,
        interpolate: () => rs,
        to: () => ss,
        update: () => os,
        useChain: () => Ut,
        useInView: () => Gn,
        useIsomorphicLayoutEffect: () => at,
        useReducedMotion: () => ht,
        useResize: () => Yn,
        useScroll: () => Wn,
        useSpring: () => $n,
        useSpringRef: () => Nn,
        useSpringValue: () => Dn,
        useSprings: () => Tn,
        useTrail: () => Qn,
        useTransition: () => Bn
      });
      var s = Object.defineProperty,
        r = (e, t) => {
          let n = {};
          for (var r in e) s(n, r, {
            get: e[r],
            enumerable: !0
          });
          return t || s(n, Symbol.toStringTag, {
            value: "Module"
          }), n
        };
      let o = _();
      const i = e => y(e, o);
      let a = _();
      i.write = e => y(e, a);
      let u = _();
      i.onStart = e => y(e, u);
      let c = _();
      i.onFrame = e => y(e, c);
      let l = _();
      i.onFinish = e => y(e, l);
      let d = [];
      i.setTimeout = (e, t) => {
        const n = i.now() + t,
          s = () => {
            const e = d.findIndex(e => e.cancel == s);
            ~e && d.splice(e, 1), m -= ~e ? 1 : 0
          },
          r = {
            time: n,
            handler: e,
            cancel: s
          };
        return d.splice(h(n), 0, r), m += 1, v(), r
      };
      const h = e => ~(~d.findIndex(t => t.time > e) || ~d.length);
      i.cancel = e => {
        u.delete(e), c.delete(e), l.delete(e), o.delete(e), a.delete(e)
      }, i.sync = e => {
        g = !0, i.batchedUpdates(e), g = !1
      }, i.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function s(...e) {
          t = e, i.onStart(n)
        }
        return s.handler = e, s.cancel = () => {
          u.delete(n), t = null
        }, s
      };
      let p = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      i.use = e => p = e, i.now = "undefined" != typeof performance ? () => performance.now() : Date.now, i.batchedUpdates = e => e(), i.catch = console.error, i.frameLoop = "always", i.onDemand = () => {}, i.advance = () => {
        "demand" !== i.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : b()
      };
      let f = -1,
        m = 0,
        g = !1;

      function y(e, t) {
        g ? (t.delete(e), e(0)) : (t.add(e), v(), "demand" === i.frameLoop && i.onDemand())
      }

      function v() {
        f < 0 && (f = 0, "demand" !== i.frameLoop && p(w))
      }

      function w() {
        ~f && (p(w), i.batchedUpdates(b))
      }

      function b() {
        const e = f;
        f = i.now();
        const t = h(f);
        t && (k(d.splice(0, t), e => e.handler()), m -= t), m ? (u.flush(), o.flush(e ? Math.min(64, f - e) : 16.667), c.flush(), a.flush(), l.flush(), "demand" === i.frameLoop && m > 0 && i.onDemand()) : f = -1
      }

      function _() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            m += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (m -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, m -= t.size, k(t, t => t(n) && e.add(t)), m += e.size, t = e)
          }
        }
      }

      function k(e, t) {
        e.forEach(e => {
          try {
            t(e)
          } catch (e) {
            i.catch(e)
          }
        })
      }
      var x = n(93082);

      function M() {}
      const S = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function I(e, t) {
        if (S.arr(e)) {
          if (!S.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }
        return e === t
      }
      const P = (e, t) => e.forEach(t);

      function A(e, t, n) {
        if (S.arr(e))
          for (let s = 0; s < e.length; s++) t.call(n, e[s], `${s}`);
        else
          for (const s in e) e.hasOwnProperty(s) && t.call(n, e[s], s)
      }
      const O = e => S.und(e) ? [] : S.arr(e) ? e : [e];

      function E(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), P(n, t)
        }
      }
      const R = (e, ...t) => E(e, e => e(...t)),
        C = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
      var V = r({
        assign: () => $,
        colors: () => j,
        createStringInterpolator: () => z,
        skipAnimation: () => q,
        to: () => L,
        willAdvance: () => T
      });
      let z, L, j = null,
        q = !1,
        T = M;
      const $ = e => {
          e.to && (L = e.to), e.now && (i.now = e.now), void 0 !== e.colors && (j = e.colors), null != e.skipAnimation && (q = e.skipAnimation), e.createStringInterpolator && (z = e.createStringInterpolator), e.requestAnimationFrame && i.use(e.requestAnimationFrame), e.batchedUpdates && (i.batchedUpdates = e.batchedUpdates), e.willAdvance && (T = e.willAdvance), e.frameLoop && (i.frameLoop = e.frameLoop), e.onDemand && (i.onDemand = e.onDemand)
        },
        F = new Set;
      let N = [],
        D = [],
        Q = 0;
      const B = {
        get idle() {
          return !F.size && !N.length
        },
        start(e) {
          Q > e.priority ? (F.add(e), i.onStart(U)) : (W(e), i(X))
        },
        advance: X,
        sort(e) {
          if (Q) i.onFrame(() => B.sort(e));
          else {
            const t = N.indexOf(e);
            ~t && (N.splice(t, 1), Y(e))
          }
        },
        clear() {
          N = [], F.clear()
        }
      };

      function U() {
        F.forEach(W), F.clear(), i(X)
      }

      function W(e) {
        N.includes(e) || Y(e)
      }

      function Y(e) {
        N.splice(function(t) {
          const n = t.findIndex(t => t.priority > e.priority);
          return n < 0 ? t.length : n
        }(N), 0, e)
      }

      function X(e) {
        const t = D;
        for (let n = 0; n < N.length; n++) {
          const s = N[n];
          Q = s.priority, s.idle || (T(s), s.advance(e), s.idle || t.push(s))
        }
        return Q = 0, D = N, D.length = 0, N = t, N.length > 0
      }
      const G = "[-+]?\\d*\\.?\\d+",
        Z = "[-+]?\\d*\\.?\\d+%";

      function H(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      const J = new RegExp("rgb" + H(G, G, G)),
        K = new RegExp("rgba" + H(G, G, G, G)),
        ee = new RegExp("hsl" + H(G, Z, Z)),
        te = new RegExp("hsla" + H(G, Z, Z, G)),
        ne = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        se = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        re = /^#([0-9a-fA-F]{6})$/,
        oe = /^#([0-9a-fA-F]{8})$/;

      function ie(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function ae(e, t, n) {
        const s = n < .5 ? n * (1 + t) : n + t - n * t,
          r = 2 * n - s,
          o = ie(r, s, e + 1 / 3),
          i = ie(r, s, e),
          a = ie(r, s, e - 1 / 3);
        return Math.round(255 * o) << 24 | Math.round(255 * i) << 16 | Math.round(255 * a) << 8
      }

      function ue(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function ce(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function le(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function de(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function he(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = re.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : j && void 0 !== j[e] ? j[e] : (t = J.exec(e)) ? (ue(t[1]) << 24 | ue(t[2]) << 16 | ue(t[3]) << 8 | 255) >>> 0 : (t = K.exec(e)) ? (ue(t[1]) << 24 | ue(t[2]) << 16 | ue(t[3]) << 8 | le(t[4])) >>> 0 : (t = ne.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = oe.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = se.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = ee.exec(e)) ? (255 | ae(ce(t[1]), de(t[2]), de(t[3]))) >>> 0 : (t = te.exec(e)) ? (ae(ce(t[1]), de(t[2]), de(t[3])) | le(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      const pe = (e, t, n) => {
          if (S.fun(e)) return e;
          if (S.arr(e)) return pe({
            range: e,
            output: t,
            extrapolate: n
          });
          if (S.str(e.output[0])) return z(e);
          const s = e,
            r = s.output,
            o = s.range || [0, 1],
            i = s.extrapolateLeft || s.extrapolate || "extend",
            a = s.extrapolateRight || s.extrapolate || "extend",
            u = s.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
              return n - 1
            }(e, o);
            return function(e, t, n, s, r, o, i, a, u) {
              let c = u ? u(e) : e;
              if (c < t) {
                if ("identity" === i) return c;
                "clamp" === i && (c = t)
              }
              if (c > n) {
                if ("identity" === a) return c;
                "clamp" === a && (c = n)
              }
              return s === r ? s : t === n ? e <= t ? s : r : (t === -1 / 0 ? c = -c : n === 1 / 0 ? c -= t : c = (c - t) / (n - t), c = o(c), s === -1 / 0 ? c = -c : r === 1 / 0 ? c += s : c = c * (r - s) + s, c)
            }(e, o[t], o[t + 1], r[t], r[t + 1], u, i, a, s.map)
          }
        },
        fe = 1.70158,
        me = 1.525 * fe,
        ge = 2.70158,
        ye = 2 * Math.PI / 3,
        ve = 2 * Math.PI / 4.5,
        we = e => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        },
        be = {
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
          easeInBack: e => ge * e * e * e - fe * e * e,
          easeOutBack: e => 1 + ge * Math.pow(e - 1, 3) + fe * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - me) / 2 : (Math.pow(2 * e - 2, 2) * (3.5949095 * (2 * e - 2) + me) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * ye),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * ye) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * ve) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * ve) / 2 + 1,
          easeInBounce: e => 1 - we(1 - e),
          easeOutBounce: we,
          easeInOutBounce: e => e < .5 ? (1 - we(1 - 2 * e)) / 2 : (1 + we(2 * e - 1)) / 2,
          steps: (e, t = "end") => n => {
            const s = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e;
            return r = ("end" === t ? Math.floor(s) : Math.ceil(s)) / e, Math.min(Math.max(r, 0), 1);
            var r
          }
        },
        _e = Symbol.for("FluidValue.get"),
        ke = Symbol.for("FluidValue.observers"),
        xe = e => Boolean(e && e[_e]),
        Me = e => e && e[_e] ? e[_e]() : e,
        Se = e => e[ke] || null;

      function Ie(e, t) {
        const n = e[ke];
        n && n.forEach(e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        })
      }
      var Pe = class {
        constructor(e) {
          if (!e && !(e = this.get)) throw Error("Unknown getter");
          Ae(this, e)
        }
      };
      const Ae = (e, t) => Re(e, _e, t);

      function Oe(e, t) {
        if (e[_e]) {
          let n = e[ke];
          n || Re(e, ke, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
        }
        return t
      }

      function Ee(e, t) {
        const n = e[ke];
        if (n && n.has(t)) {
          const s = n.size - 1;
          s ? n.delete(t) : e[ke] = null, e.observerRemoved && e.observerRemoved(s, t)
        }
      }
      const Re = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        Ce = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Ve = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        ze = new RegExp(`(${Ce.source})(%|[a-z]+)`, "i"),
        Le = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        je = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        qe = e => {
          const [t, n] = Te(e);
          if (!t || C()) return e;
          const s = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (s) return s.trim();
          if (n && n.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(n) || e
          }
          return n && je.test(n) ? qe(n) : n || e
        },
        Te = e => {
          const t = je.exec(e);
          if (!t) return [, ];
          const [, n, s] = t;
          return [n, s]
        };
      let $e;
      const Fe = (e, t, n, s, r) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(s)}, ${r})`,
        Ne = e => e.match(Ce) ?? [],
        De = e => {
          $e || ($e = j ? new RegExp(`(${Object.keys(j).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map(e => Me(e).replace(je, qe).replace(Ve, he).replace($e, he)),
            n = t.map(e => Ne(e).map(Number)),
            s = n[0].map((e, t) => n.map(e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })).map(t => pe({
              ...e,
              output: t
            })),
            r = e.range || [0, 1],
            o = t.map(e => Ne(e)),
            i = o[0].map((e, t) => {
              const n = o.map(e => {
                const n = e[t],
                  s = n.indexOf(".");
                return -1 === s ? 0 : n.length - s - 1
              });
              return n.every(e => e === n[0]) && n[0] > 0 ? n[0] : null
            });
          return e => {
            const n = r.indexOf(e);
            if (-1 !== n) return t[n];
            const o = !ze.test(t[0]) && t.find(e => ze.test(e))?.replace(Ce, "");
            let a = 0;
            return t[0].replace(Ce, () => {
              const t = a++,
                n = s[t](e),
                r = i[t];
              return `${null!=r?n.toFixed(r):n}${o||""}`
            }).replace(Le, Fe)
          }
        },
        Qe = "react-spring: ",
        Be = e => {
          const t = e;
          let n = !1;
          if ("function" != typeof t) throw new TypeError(`${Qe}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), n = !0)
          }
        },
        Ue = Be(console.warn);

      function We() {
        Ue(`${Qe}The "interpolate" function is deprecated in v9 (use "to" instead)`)
      }
      const Ye = Be(console.warn);

      function Xe(e) {
        return S.str(e) && ("#" == e[0] || /\d/.test(e) || !C() && je.test(e) || e in (j || {}))
      }
      let Ge;
      const Ze = new WeakMap,
        He = e => e.forEach(e => Ze.get(e.target)?.forEach(t => t((e => {
          const t = Array.isArray(e.borderBoxSize) ? e.borderBoxSize[0] : e.borderBoxSize;
          if (!t) return e.contentRect;
          const n = getComputedStyle(e.target).writingMode;
          return n.startsWith("vertical-") || n.startsWith("sideways-") ? {
            width: t.blockSize,
            height: t.inlineSize
          } : {
            width: t.inlineSize,
            height: t.blockSize
          }
        })(e)))),
        Je = new Set;
      let Ke;
      const et = (e, {
          container: t = document.documentElement
        } = {}) => t === document.documentElement ? (e => (Je.add(e), Ke || (Ke = (() => {
          const e = () => {
            Je.forEach(e => e({
              width: window.innerWidth,
              height: window.innerHeight
            }))
          };
          return window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        })()), () => {
          Je.delete(e), !Je.size && Ke && (Ke(), Ke = void 0)
        }))(e) : function(e, t) {
          Ge || "undefined" != typeof ResizeObserver && (Ge = new ResizeObserver(He));
          let n = Ze.get(t);
          return n || (n = new Set, Ze.set(t, n)), n.add(e), Ge && Ge.observe(t, {
            box: "border-box"
          }), () => {
            const n = Ze.get(t);
            n && (n.delete(e), !n.size && Ge && Ge.unobserve(t))
          }
        }(e, t),
        tt = {
          x: {
            length: "Width",
            position: "Left"
          },
          y: {
            length: "Height",
            position: "Top"
          }
        };
      var nt = class {
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
              } = tt[e];
            var r, o;
            t.current = this.container[`scroll${s}`], t.scrollLength = this.container[`scroll${n}`] - this.container[`client${n}`], t.progress = (r = t.scrollLength, o = t.current, r - 0 == 0 ? 1 : (o - 0) / (r - 0))
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
      };
      const st = new WeakMap,
        rt = new WeakMap,
        ot = new WeakMap,
        it = e => e === document.documentElement ? window : e,
        at = C() ? x.useEffect : x.useLayoutEffect;

      function ut() {
        const e = (0, x.useState)()[1],
          t = (() => {
            const e = (0, x.useRef)(!1);
            return at(() => (e.current = !0, () => {
              e.current = !1
            }), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      const ct = e => (0, x.useEffect)(e, lt),
        lt = [];

      function dt(e) {
        const t = (0, x.useRef)(void 0);
        return (0, x.useEffect)(() => {
          t.current = e
        }), t.current
      }
      const ht = () => {
          const [e, t] = (0, x.useState)(null);
          return at(() => {
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
        pt = Symbol.for("Animated:node"),
        ft = e => e && e[pt],
        mt = (e, t) => {
          return n = e, s = pt, r = t, Object.defineProperty(n, s, {
            value: r,
            writable: !0,
            configurable: !0
          });
          var n, s, r
        },
        gt = e => e && e[pt] && e[pt].getPayload();
      var yt = class {
          constructor() {
            mt(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        vt = class e extends yt {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, S.num(this._value) && (this.lastPosition = this._value)
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
            return S.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, S.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        wt = class e extends vt {
          constructor(e) {
            super(0), this._string = null, this._toString = pe({
              output: [e, e]
            })
          }
          static create(t) {
            return new e(t)
          }
          getValue() {
            return this._string ?? (this._string = this._toString(this._value))
          }
          setValue(e) {
            if (S.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = pe({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        };
      const bt = {
        dependencies: null
      };
      var _t = class extends yt {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return A(this.source, (n, s) => {
              var r;
              (r = n) && r[pt] === r ? t[s] = n.getValue(e) : xe(n) ? t[s] = Me(n) : e || (t[s] = n)
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
            bt.dependencies && xe(e) && bt.dependencies.add(e);
            const t = gt(e);
            t && P(t, e => this.add(e))
          }
        },
        kt = class e extends _t {
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
            return e.length == t.length ? t.map((t, n) => t.setValue(e[n])).some(Boolean) : (super.setValue(e.map(xt)), !0)
          }
        };

      function xt(e) {
        return (Xe(e) ? wt : vt).create(e)
      }

      function Mt(e) {
        const t = ft(e);
        return t ? t.constructor : S.arr(e) ? kt : Xe(e) ? wt : vt
      }
      const St = (e, t) => {
        const n = !S.fun(e) || e.prototype && e.prototype.isReactComponent;
        return (0, x.forwardRef)((s, r) => {
          const o = (0, x.useRef)(null),
            a = n && (0, x.useCallback)(e => {
              o.current = function(e, t) {
                return e && (S.fun(e) ? e(t) : e.current = t), t
              }(r, e)
            }, [r]),
            [u, c] = function(e, t) {
              const n = new Set;
              return bt.dependencies = n, e.style && (e = {
                ...e,
                style: t.createAnimatedStyle(e.style)
              }), e = new _t(e), bt.dependencies = null, [e, n]
            }(s, t),
            l = ut(),
            d = () => {
              const e = o.current;
              n && !e || !1 === (!!e && t.applyAnimatedValues(e, u.getValue(!0))) && l()
            },
            h = new It(d, c),
            p = (0, x.useRef)(void 0);
          at(() => (p.current = h, P(c, e => Oe(e, h)), () => {
            p.current && (P(p.current.deps, e => Ee(e, p.current)), i.cancel(p.current.update))
          })), (0, x.useEffect)(d, []), ct(() => () => {
            const e = p.current;
            P(e.deps, t => Ee(t, e))
          });
          const f = t.getComponentProps(u.getValue());
          return x.createElement(e, {
            ...f,
            ref: a
          })
        })
      };
      var It = class {
        constructor(e, t) {
          this.update = e, this.deps = t
        }
        eventObserved(e) {
          "change" == e.type && i.write(this.update)
        }
      };
      const Pt = Symbol.for("AnimatedComponent"),
        At = new WeakMap,
        Ot = e => S.str(e) ? e : e && S.str(e.displayName) ? e.displayName : S.fun(e) && e.name || null;
      var Et = class {};

      function Rt(e, ...t) {
        return S.fun(e) ? e(...t) : e
      }
      const Ct = (e, t) => !0 === e || !!(t && e && (S.fun(e) ? e(t) : O(e).includes(t))),
        Vt = (e, t) => S.obj(e) ? t && e[t] : e,
        zt = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        Lt = e => e,
        jt = (e, t = Lt) => {
          let n = qt;
          e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
          const s = {};
          for (const r of n) {
            const n = t(e[r], r);
            S.und(n) || (s[r] = n)
          }
          return s
        },
        qt = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        Tt = {
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

      function $t(e) {
        const t = function(e) {
          const t = {};
          let n = 0;
          if (A(e, (e, s) => {
              Tt[s] || (t[s] = e, n++)
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

      function Ft(e) {
        const t = Me(e);
        return S.arr(t) ? t.map(Ft) : Xe(t) ? V.createStringInterpolator({
          range: [0, 1],
          output: [t, t]
        })(1) : t
      }

      function Nt(e) {
        for (const t in e) return !0;
        return !1
      }

      function Dt(e) {
        return S.fun(e) || S.arr(e) && S.obj(e[0])
      }

      function Qt(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function Bt(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }

      function Ut(e, t, n = 1e3) {
        at(() => {
          if (t) {
            let s = 0;
            P(e, (e, r) => {
              const o = e.current;
              if (o.length) {
                let i = n * t[r];
                isNaN(i) ? i = s : s = i, P(o, e => {
                  P(e.queue, e => {
                    const t = e.delay;
                    e.delay = e => i + Rt(t || 0, e)
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
      const Wt = {
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
        Yt = {
          ...Wt.default,
          mass: 1,
          damping: 1,
          easing: be.linear,
          clamp: !1
        };
      var Xt = class {
        constructor() {
          this.velocity = 0, Object.assign(this, Yt)
        }
      };

      function Gt(e, t) {
        if (S.und(t.decay)) {
          const n = !S.und(t.tension) || !S.und(t.friction);
          !n && S.und(t.frequency) && S.und(t.damping) && S.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
        } else e.duration = void 0
      }
      const Zt = [];
      var Ht = class {
        constructor() {
          this.changed = !1, this.values = Zt, this.toValues = null, this.fromValues = Zt, this.config = new Xt, this.immediate = !1
        }
      };

      function Jt(e, {
        key: t,
        props: n,
        defaultProps: s,
        state: r,
        actions: o
      }) {
        return new Promise((a, u) => {
          let c, l, d = Ct(n.cancel ?? s?.cancel, t);
          if (d) f();
          else {
            S.und(n.pause) || (r.paused = Ct(n.pause, t));
            let e = s?.pause;
            !0 !== e && (e = r.paused || Ct(e, t)), c = Rt(n.delay || 0, t), e ? (r.resumeQueue.add(p), o.pause()) : (o.resume(), p())
          }

          function h() {
            r.resumeQueue.add(p), r.timeouts.delete(l), l.cancel(), c = l.time - i.now()
          }

          function p() {
            c > 0 && !V.skipAnimation ? (r.delayed = !0, l = i.setTimeout(f, c), r.pauseQueue.add(h), r.timeouts.add(l)) : f()
          }

          function f() {
            r.delayed && (r.delayed = !1), r.pauseQueue.delete(h), r.timeouts.delete(l), e <= (r.cancelId || 0) && (d = !0);
            try {
              o.start({
                ...n,
                callId: e,
                cancel: d
              }, a)
            } catch (e) {
              u(e)
            }
          }
        })
      }
      const Kt = (e, t) => 1 == t.length ? t[0] : t.some(e => e.cancelled) ? nn(e.get()) : t.every(e => e.noop) ? en(e.get()) : tn(e.get(), t.every(e => e.finished)),
        en = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        tn = (e, t, n = !1) => ({
          value: e,
          finished: t,
          cancelled: n
        }),
        nn = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function sn(e, t, n, s) {
        const {
          callId: r,
          parentId: o,
          onRest: a
        } = t, {
          asyncTo: u,
          promise: c
        } = n;
        return o || e !== u || t.reset ? n.promise = (async () => {
          n.asyncId = r, n.asyncTo = e;
          const l = jt(t, (e, t) => "onRest" === t ? void 0 : e);
          let d, h;
          const p = new Promise((e, t) => (d = e, h = t)),
            f = e => {
              const t = r <= (n.cancelId || 0) && nn(s) || r !== n.asyncId && tn(s, !1);
              if (t) throw e.result = t, h(e), e
            };
          let m = 0;
          const g = (e, t) => {
            const o = new on,
              i = new an;
            return (async () => {
              f(o);
              const a = S.obj(e) ? {
                ...e
              } : {
                ...t,
                to: e
              };
              if (a.parentId = r, A(l, (e, t) => {
                  S.und(a[t]) && (a[t] = e)
                }), V.skipAnimation) {
                if (++m > 1024) throw rn(n), i.result = tn(s, !1), h(i), i;
                return a.immediate = !0, await s.start(a)
              }
              const u = await s.start(a);
              return f(o), n.paused && await new Promise(e => {
                n.resumeQueue.add(e)
              }), u
            })()
          };
          let y;
          try {
            let t;
            t = S.arr(e) ? (async e => {
              for (const t of e) await g(t)
            })(e) : Promise.resolve(e(g, s.stop.bind(s))), await Promise.all([t.then(d), p]), y = tn(s.get(), !0, !1)
          } catch (e) {
            if (e instanceof on) y = e.result;
            else {
              if (!(e instanceof an)) throw e;
              y = e.result
            }
          } finally {
            r == n.asyncId && (n.asyncId = o, n.asyncTo = o ? u : void 0, n.promise = o ? c : void 0)
          }
          return S.fun(a) && i.batchedUpdates(() => {
            a(y, s, s.item)
          }), y
        })() : c
      }

      function rn(e, t) {
        E(e.timeouts, e => e.cancel()), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var on = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        an = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        };
      const un = e => e instanceof ln;
      let cn = 1;
      var ln = class extends Pe {
        constructor(...e) {
          super(...e), this.id = cn++, this._priority = 0
        }
        get priority() {
          return this._priority
        }
        set priority(e) {
          this._priority != e && (this._priority = e, this._onPriorityChange(e))
        }
        get() {
          const e = ft(this);
          return e && e.getValue()
        }
        to(...e) {
          return V.to(this, e)
        }
        interpolate(...e) {
          return We(), V.to(this, e)
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
          this.idle || B.sort(this), Ie(this, {
            type: "priority",
            parent: this,
            priority: e
          })
        }
      };
      const dn = Symbol.for("SpringPhase"),
        hn = e => (1 & e[dn]) > 0,
        pn = e => (2 & e[dn]) > 0,
        fn = e => (4 & e[dn]) > 0,
        mn = (e, t) => t ? e[dn] |= 3 : e[dn] &= -3,
        gn = (e, t) => t ? e[dn] |= 4 : e[dn] &= -5;
      var yn = class extends ln {
        constructor(e, t) {
          if (super(), this.animation = new Ht, this.defaultProps = {}, this._state = {
              paused: !1,
              delayed: !1,
              pauseQueue: new Set,
              resumeQueue: new Set,
              timeouts: new Set
            }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !S.und(e) || !S.und(t)) {
            const n = S.obj(e) ? {
              ...e
            } : {
              ...t,
              from: e
            };
            S.und(n.default) && (n.default = !0), this.start(n)
          }
        }
        get idle() {
          return !(pn(this) || this._state.asyncTo) || fn(this)
        }
        get goal() {
          return Me(this.animation.to)
        }
        get velocity() {
          const e = ft(this);
          return e instanceof vt ? e.lastVelocity || 0 : e.getPayload().map(e => e.lastVelocity || 0)
        }
        get hasAnimated() {
          return hn(this)
        }
        get isAnimating() {
          return pn(this)
        }
        get isPaused() {
          return fn(this)
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
            config: o
          } = s, i = gt(s.to);
          !i && xe(s.to) && (r = O(Me(s.to))), s.values.forEach((a, u) => {
            if (a.done) return;
            const c = a.constructor == wt ? 1 : i ? i[u].lastPosition : r[u];
            let l = s.immediate,
              d = c;
            if (!l) {
              if (d = a.lastPosition, o.tension <= 0) return void(a.done = !0);
              let t = a.elapsedTime += e;
              const n = s.fromValues[u],
                r = null != a.v0 ? a.v0 : a.v0 = S.arr(o.velocity) ? o.velocity[u] : o.velocity;
              let i;
              const h = o.precision || (n == c ? .005 : Math.max(Math.max(Math.abs(c), Math.abs(n), 1) * Number.EPSILON, Math.min(1, .001 * Math.abs(c - n))));
              if (S.und(o.duration))
                if (o.decay) {
                  const e = !0 === o.decay ? .998 : o.decay,
                    s = Math.exp(-(1 - e) * t);
                  d = n + r / (1 - e) * (1 - s), l = Math.abs(a.lastPosition - d) <= h, i = r * s
                } else {
                  i = null == a.lastVelocity ? r : a.lastVelocity;
                  const t = o.restVelocity || h / 10,
                    s = o.clamp ? 0 : o.bounce,
                    u = !S.und(s),
                    p = n == c ? a.v0 > 0 : n < c;
                  let f, m = !1;
                  const g = 1,
                    y = Math.ceil(e / g);
                  for (let e = 0; e < y && (f = Math.abs(i) > t, f || (l = Math.abs(c - d) <= h, !l)); ++e) u && (m = d == c || d > c == p, m && (i = -i * s, d = c)), i += (1e-6 * -o.tension * (d - c) + .001 * -o.friction * i) / o.mass * g, d += i * g
                }
              else {
                let s = 1;
                o.duration > 0 && (this._memoizedDuration !== o.duration && (this._memoizedDuration = o.duration, a.durationProgress > 0 && (a.elapsedTime = o.duration * a.durationProgress, t = a.elapsedTime += e)), s = (o.progress || 0) + t / this._memoizedDuration, s = s > 1 ? 1 : s < 0 ? 0 : s, a.durationProgress = s), d = n + o.easing(s) * (c - n), i = (d - a.lastPosition) / e, l = 1 == s
              }
              a.lastVelocity = i, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), l = !0)
            }
            i && !i[u].done && (l = !1), l ? a.done = !0 : t = !1, a.setValue(d, o.round) && (n = !0)
          });
          const a = ft(this),
            u = a.getValue();
          if (t) {
            const e = Me(s.to);
            u === e && !n || o.decay ? n && o.decay && this._onChange(u) : (a.setValue(e), this._onChange(e)), this._stop()
          } else n && this._onChange(u)
        }
        set(e) {
          return i.batchedUpdates(() => {
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
          if (pn(this)) {
            const {
              to: e,
              config: t
            } = this.animation;
            i.batchedUpdates(() => {
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
          return S.und(e) ? (n = this.queue || [], this.queue = []) : n = [S.obj(e) ? e : {
            ...t,
            to: e
          }], Promise.all(n.map(e => this._update(e))).then(e => Kt(this, e))
        }
        stop(e) {
          const {
            to: t
          } = this.animation;
          return S.und(t) || this._focus(this.get()), rn(this._state, e && this._lastCallId), i.batchedUpdates(() => this._stop(t, e)), this
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
          n = S.obj(n) ? n[t] : n, (null == n || Dt(n)) && (n = void 0), s = S.obj(s) ? s[t] : s, null == s && (s = void 0);
          const r = {
            to: n,
            from: s
          };
          return hn(this) || (e.reverse && ([n, s] = [s, n]), s = Me(s), S.und(s) ? ft(this) || this._set(n) : this._set(s)), r
        }
        _update({
          ...e
        }, t) {
          const {
            key: n,
            defaultProps: s
          } = this;
          e.default && Object.assign(s, jt(e, (e, t) => /^on/.test(t) ? Vt(e, n) : e)), Mn(this, e, "onProps"), Sn(this, "onProps", e, this);
          const r = this._prepareNode(e);
          if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
          const o = this._state;
          return Jt(++this._lastCallId, {
            key: n,
            props: e,
            defaultProps: s,
            state: o,
            actions: {
              pause: () => {
                fn(this) || (gn(this, !0), R(o.pauseQueue), Sn(this, "onPause", tn(this, vn(this, this.animation.to)), this))
              },
              resume: () => {
                fn(this) && (gn(this, !1), pn(this) && this._resume(), R(o.resumeQueue), Sn(this, "onResume", tn(this, vn(this, this.animation.to)), this))
              },
              start: this._merge.bind(this, r)
            }
          }).then(n => {
            if (e.loop && n.finished && (!t || !n.noop)) {
              const t = wn(e);
              if (t) return this._update(t, !0)
            }
            return n
          })
        }
        _merge(e, t, n) {
          if (t.cancel) return this.stop(!0), n(nn(this));
          const s = !S.und(e.to),
            r = !S.und(e.from);
          if (s || r) {
            if (!(t.callId > this._lastToId)) return n(nn(this));
            this._lastToId = t.callId
          }
          const {
            key: o,
            defaultProps: a,
            animation: u
          } = this, {
            to: c,
            from: l
          } = u;
          let {
            to: d = c,
            from: h = l
          } = e;
          !r || s || t.default && !S.und(d) || (d = h), t.reverse && ([d, h] = [h, d]);
          const p = !I(h, l);
          p && (u.from = h), h = Me(h);
          const f = !I(d, c);
          f && this._focus(d);
          const m = Dt(t.to),
            {
              config: g
            } = u,
            {
              decay: y,
              velocity: v
            } = g;
          !s && !r || g.decay || (g.velocity = 0), t.config && !m && function(e, t, n) {
            n && (Gt(n = {
              ...n
            }, t), t = {
              ...n,
              ...t
            }), Gt(e, t), Object.assign(e, t);
            for (const t in Yt) null == e[t] && (e[t] = Yt[t]);
            let {
              frequency: s,
              damping: r
            } = e;
            const {
              mass: o
            } = e;
            S.und(s) || (s < .01 && (s = .01), r < 0 && (r = 0), e.tension = Math.pow(2 * Math.PI / s, 2) * o, e.friction = 4 * Math.PI * r * o / s)
          }(g, Rt(t.config, o), t.config !== a.config ? Rt(a.config, o) : void 0);
          let w = ft(this);
          if (!w || S.und(d)) return n(tn(this, !0));
          const b = S.und(t.reset) ? r && !t.default : !S.und(h) && Ct(t.reset, o),
            _ = b ? h : this.get(),
            k = Ft(d),
            x = S.num(k) || S.arr(k) || Xe(k),
            M = !m && (!x || Ct(a.immediate || t.immediate, o));
          if (f) {
            const e = Mt(d);
            if (e !== w.constructor) {
              if (!M) throw Error(`Cannot animate between ${w.constructor.name} and ${e.name}, as the "to" prop suggests`);
              w = this._set(k)
            }
          }
          const A = w.constructor;
          let E = xe(d),
            C = !1;
          if (!E) {
            const e = b || !hn(this) && p;
            (f || e) && (C = I(Ft(_), k), E = !C), (I(u.immediate, M) || M) && I(g.decay, y) && I(g.velocity, v) || (E = !0)
          }
          if (C && pn(this) && (u.changed && !b ? E = !0 : E || this._stop(c)), !m && ((E || xe(c)) && (u.values = w.getPayload(), u.toValues = xe(d) ? null : A == wt ? [1] : O(k)), u.immediate != M && (u.immediate = M, M || b || this._set(c)), E)) {
            const {
              onRest: e
            } = u;
            P(xn, e => Mn(this, t, e));
            const s = tn(this, vn(this, c));
            R(this._pendingCalls, s), this._pendingCalls.add(n), u.changed && i.batchedUpdates(() => {
              u.changed = !b, e?.(s, this), b ? Rt(a.onRest, s) : u.onStart?.(s, this)
            })
          }
          b && this._set(_), m ? n(sn(t.to, t, this._state, this)) : E ? this._start() : pn(this) && !f ? this._pendingCalls.add(n) : n(en(_))
        }
        _focus(e) {
          const t = this.animation;
          e !== t.to && (Se(this) && this._detach(), t.to = e, Se(this) && this._attach())
        }
        _attach() {
          let e = 0;
          const {
            to: t
          } = this.animation;
          xe(t) && (Oe(t, this), un(t) && (e = t.priority + 1)), this.priority = e
        }
        _detach() {
          const {
            to: e
          } = this.animation;
          xe(e) && Ee(e, this)
        }
        _set(e, t = !0) {
          const n = Me(e);
          if (!S.und(n)) {
            const e = ft(this);
            if (!e || !I(n, e.getValue())) {
              const s = Mt(n);
              e && e.constructor == s ? e.setValue(n) : mt(this, s.create(n)), e && i.batchedUpdates(() => {
                this._onChange(n, t)
              })
            }
          }
          return ft(this)
        }
        _onStart() {
          const e = this.animation;
          e.changed || (e.changed = !0, Sn(this, "onStart", tn(this, vn(this, e.to)), this))
        }
        _onChange(e, t) {
          const n = tn(e, !1);
          t || (this._onStart(), Rt(this.animation.onChange, n, this)), Rt(this.defaultProps.onChange, n, this), super._onChange(e, t)
        }
        _start() {
          const e = this.animation;
          ft(this).reset(Me(e.to)), e.immediate || (e.fromValues = e.values.map(e => e.lastPosition)), pn(this) || (mn(this, !0), fn(this) || this._resume())
        }
        _resume() {
          V.skipAnimation ? this.finish() : B.start(this)
        }
        _stop(e, t) {
          if (pn(this)) {
            mn(this, !1);
            const n = this.animation;
            P(n.values, e => {
              e.done = !0
            }), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Ie(this, {
              type: "idle",
              parent: this
            });
            const s = t ? nn(this.get()) : tn(this.get(), vn(this, e ?? n.to));
            R(this._pendingCalls, s), n.changed = !1, Sn(this, "onRest", s, this)
          }
        }
      };

      function vn(e, t) {
        const n = Ft(t);
        return I(Ft(e.get()), n)
      }

      function wn(e, t = e.loop, n = e.to) {
        const s = Rt(t);
        if (s) {
          const r = !0 !== s && $t(s),
            o = (r || e).reverse,
            i = !r || r.reset;
          return bn({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !o || Dt(n) ? n : void 0,
            from: i ? e.from : void 0,
            reset: i,
            ...r
          })
        }
      }

      function bn(e) {
        const {
          to: t,
          from: n
        } = e = $t(e), s = new Set;
        return S.obj(t) && kn(t, s), S.obj(n) && kn(n, s), e.keys = s.size ? Array.from(s) : null, e
      }

      function _n(e) {
        const t = bn(e);
        return S.und(t.default) && (t.default = jt(t)), t
      }

      function kn(e, t) {
        A(e, (e, n) => null != e && t.add(n))
      }
      const xn = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function Mn(e, t, n) {
        e.animation[n] = t[n] !== zt(t, n) ? Vt(t[n], e.key) : void 0
      }

      function Sn(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      const In = ["onStart", "onChange", "onRest"];
      let Pn = 1;
      var An = class {
        constructor(e, t) {
          this.id = Pn++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._lastLoopId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
            S.und(n) || this.springs[t].set(n)
          }
        }
        update(e) {
          return e && this.queue.push(bn(e)), this
        }
        start(e) {
          let {
            queue: t
          } = this;
          return e ? t = O(e).map(bn) : this.queue = [], this._flush ? this._flush(this, t) : (Ln(this, t), On(this, t))
        }
        stop(e, t) {
          if (e !== !!e && (t = e), t) {
            const n = this.springs;
            P(O(t), t => n[t].stop(!!e))
          } else rn(this._state, this._lastAsyncId), this.each(t => t.stop(!!e));
          return this
        }
        pause(e) {
          if (S.und(e)) this.start({
            pause: !0
          });
          else {
            const t = this.springs;
            P(O(e), e => t[e].pause())
          }
          return this
        }
        resume(e) {
          if (S.und(e)) this.start({
            pause: !1
          });
          else {
            const t = this.springs;
            P(O(e), e => t[e].resume())
          }
          return this
        }
        each(e) {
          A(this.springs, e)
        }
        onLoopReset(e) {
          const t = this._onLoopReset ?? (this._onLoopReset = new Set);
          return t.add(e), () => {
            t.delete(e)
          }
        }
        _onFrame() {
          const {
            onStart: e,
            onChange: t,
            onRest: n
          } = this._events, s = this._active.size > 0, r = this._changed.size > 0;
          (s && !this._started || r && !this._started) && (this._started = !0, E(e, ([e, t]) => {
            t.value = this.get(), e(t, this, this._item)
          }));
          const o = !s && this._started,
            i = r || o && n.size ? this.get() : null;
          r && t.size && E(t, ([e, t]) => {
            t.value = i, e(t, this, this._item)
          }), o && (this._started = !1, E(n, ([e, t]) => {
            t.value = i, e(t, this, this._item)
          }))
        }
        eventObserved(e) {
          if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
          else {
            if ("idle" != e.type) return;
            this._active.delete(e.parent)
          }
          i.onFrame(this._onFrame)
        }
      };

      function On(e, t) {
        return Promise.all(t.map(t => En(e, t))).then(t => Kt(e, t))
      }
      async function En(e, t, n) {
        const {
          keys: s,
          to: r,
          from: o,
          loop: a,
          onRest: u,
          onResolve: c
        } = t, l = S.obj(t.default) && t.default;
        a && (t.loop = !1);
        const d = t,
          h = n || d.parentId || !("loop" in t) ? n ? d.loopId : e._lastLoopId : ++e._lastLoopId;
        !1 === r && (t.to = null), !1 === o && (t.from = null);
        const p = S.arr(r) || S.fun(r) ? r : void 0;
        p ? (t.to = void 0, t.onRest = void 0, l && (l.onRest = void 0)) : P(In, n => {
          const s = t[n];
          if (S.fun(s)) {
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
        const f = e._state;
        t.pause === !f.paused ? (f.paused = t.pause, R(t.pause ? f.pauseQueue : f.resumeQueue)) : f.paused && (t.pause = !0);
        const m = (s || Object.keys(e.springs)).map(n => e.springs[n].start(t)),
          g = !0 === t.cancel || !0 === zt(t, "cancel");
        (p || g && f.asyncId) && m.push(Jt(++e._lastAsyncId, {
          props: t,
          state: f,
          actions: {
            pause: M,
            resume: M,
            start(t, n) {
              g ? (rn(f, e._lastAsyncId), n(nn(e))) : (t.onRest = u, n(sn(p, t, f, e)))
            }
          }
        })), f.paused && await new Promise(e => {
          f.resumeQueue.add(e)
        });
        const y = Kt(e, await Promise.all(m));
        if (a && y.finished && (!n || !y.noop) && h === e._lastLoopId) {
          const n = wn(t, a, r);
          if (n) return n.loopId = h, e._onLoopReset?.forEach(e => e()), Ln(e, [n]), En(e, n, !0)
        }
        return c && i.batchedUpdates(() => c(y, e, e.item)), y
      }

      function Rn(e, t) {
        const n = {
          ...e.springs
        };
        return t && P(O(t), e => {
          S.und(e.keys) && (e = bn(e)), S.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), zn(n, e, e => Vn(e))
        }), Cn(e, n), n
      }

      function Cn(e, t) {
        A(t, (t, n) => {
          e.springs[n] || (e.springs[n] = t, Oe(t, e))
        })
      }

      function Vn(e, t) {
        const n = new yn;
        return n.key = e, t && Oe(n, t), n
      }

      function zn(e, t, n) {
        t.keys && P(t.keys, s => {
          (e[s] || (e[s] = n(s)))._prepareNode(t)
        })
      }

      function Ln(e, t) {
        P(t, t => {
          zn(e.springs, t, t => Vn(t, e))
        })
      }
      const jn = x.createContext({
          pause: !1,
          immediate: !1
        }),
        qn = () => {
          const e = [],
            t = function(t) {
              Ye(`${Qe}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
              const s = [];
              return P(e, (e, r) => {
                if (S.und(t)) s.push(e.start());
                else {
                  const o = n(t, e, r);
                  o && s.push(e.start(o))
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
              const s = S.fun(t) ? t(n, e) : t;
              s && e.set(s)
            })
          }, t.start = function(t) {
            const n = [];
            return P(e, (e, s) => {
              if (S.und(t)) n.push(e.start());
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
            return S.fun(e) ? e(n, t) : e
          };
          return t._getProps = n, t
        };

      function Tn(e, t, n) {
        const s = S.fun(t) && t;
        s && !n && (n = []);
        const r = (0, x.useMemo)(() => s || 3 == arguments.length ? qn() : void 0, []),
          o = (0, x.useRef)(0),
          i = ut(),
          a = (0, x.useMemo)(() => ({
            ctrls: [],
            queue: [],
            flush(e, t) {
              const n = Rn(e, t);
              return o.current > 0 && !a.queue.length && !Object.keys(n).some(t => !e.springs[t]) ? On(e, t) : new Promise(s => {
                Cn(e, n), a.queue.push(() => {
                  s(On(e, t))
                }), i()
              })
            }
          }), []),
          u = (0, x.useRef)([...a.ctrls]),
          c = (0, x.useRef)([]),
          l = (0, x.useRef)([]);
        l.current = [];
        const d = dt(e) || 0;

        function h(e, n) {
          for (let r = e; r < n; r++) {
            const e = u.current[r] || (u.current[r] = new An(null, a.flush)),
              n = s ? s(r, e) : t[r];
            n && (c.current[r] = _n(n))
          }
        }(0, x.useMemo)(() => {
          P(u.current.slice(e, d), e => {
            Qt(e, r), e.stop(!0)
          }), u.current.length = e, h(d, e)
        }, [e]), (0, x.useMemo)(() => {
          h(0, Math.min(d, e))
        }, n);
        const p = u.current.map((e, t) => Rn(e, c.current[t])),
          f = (0, x.useContext)(jn),
          m = f !== dt(f) && Nt(f);
        at(() => {
          o.current++, a.ctrls = u.current;
          const {
            queue: e
          } = a;
          e.length && (a.queue = [], P(e, e => e()));
          const t = c.current.length > 0 ? c.current : l.current;
          P(u.current, (e, n) => {
            r?.add(e), m && e.start({
              default: f
            });
            const s = t[n];
            s && (Bt(e, s.ref), e.ref ? e.queue.push({
              ...s,
              default: S.obj(s.default) ? {
                ...s.default
              } : s.default
            }) : e.start(s))
          }), c.current.length > 0 && (l.current = c.current), c.current = []
        }), ct(() => () => {
          P(a.ctrls, e => e.stop(!0))
        });
        const g = p.map(e => ({
          ...e
        }));
        return r ? [g, r] : g
      }

      function $n(e, t) {
        const n = S.fun(e),
          [
            [s], r
          ] = Tn(1, n ? e : [e], n ? t || [] : t);
        return n || 2 == arguments.length ? [s, r] : s
      }
      const Fn = () => qn(),
        Nn = () => (0, x.useState)(Fn)[0],
        Dn = (e, t) => {
          const n = function() {
            const n = (0, x.useRef)(null);
            return null === n.current && (n.current = new yn(e, t)), n.current
          }();
          return ct(() => () => {
            n.stop()
          }), n
        };

      function Qn(e, t, n) {
        const s = S.fun(t) && t;
        let r, o;
        s && !n && (n = []), s ? r = !0 : (r = t.reverse, o = t.ref);
        const i = Tn(e, (e, n) => {
          const i = s ? s(e, n) : t;
          return s && (o = i.ref, r = r && i.reverse), i
        }, n || [{}]);
        if (at(() => {
            const e = i[1].current,
              t = e[r ? e.length - 1 : 0],
              n = [];
            return P(e, (s, i) => {
              const a = e[i + (r ? 1 : -1)];
              Bt(s, o), s.ref ? a && s.update({
                to: a.springs
              }) : a ? s.start({
                to: a.springs
              }) : s.start(), s !== t && n.push(t.onLoopReset(() => {
                s.start({
                  reset: !0
                })
              }))
            }), () => {
              P(n, e => e())
            }
          }, n), s || 3 == arguments.length) {
          const e = o ?? i[1];
          return e._getProps = (t, n, s) => {
            const r = S.fun(t) ? t(s, n) : t;
            if (r) {
              const t = e.current[s + (r.reverse ? 1 : -1)];
              return t && (r.to = t.springs), r
            }
          }, i
        }
        return i[0]
      }

      function Bn(e, t, n) {
        const s = S.fun(t) && t,
          {
            reset: r,
            sort: o,
            trail: i = 0,
            reverse: a = !1,
            expires: u = !0,
            exitBeforeEnter: c = !1,
            onDestroyed: l,
            ref: d,
            config: h
          } = s ? s() : t,
          p = (0, x.useMemo)(() => s || 3 == arguments.length ? qn() : void 0, []),
          f = O(e),
          m = [],
          g = (0, x.useRef)(null),
          y = r ? null : g.current;
        at(() => {
          g.current = m
        }), ct(() => (P(m, e => {
          p?.add(e.ctrl), e.ctrl.ref = void 0
        }), () => {
          P(g.current, e => {
            e.expired && clearTimeout(e.expirationId), Qt(e.ctrl, p), e.ctrl.stop(!0)
          })
        }));
        const v = function(e, {
            key: t,
            keys: n = t
          }, s) {
            if (null === n) {
              const t = new Set;
              return e.map(e => {
                const n = s && s.find(n => n.item === e && "leave" !== n.phase && !t.has(n));
                return n ? (t.add(n), n.key) : Un++
              })
            }
            return S.und(n) ? e : S.fun(n) ? e.map(n) : O(n)
          }(f, s ? s() : t, y),
          w = r && g.current || [];
        at(() => P(w, ({
          ctrl: e,
          item: t,
          key: n
        }) => {
          Qt(e, p), Rt(l, t, n)
        }));
        const b = [];
        if (y && P(y, (e, t) => {
            e.expired ? (clearTimeout(e.expirationId), w.push(e)) : ~(t = b[t] = v.indexOf(e.key)) && (m[t] = e)
          }), P(f, (e, t) => {
            m[t] || (m[t] = {
              key: v[t],
              item: e,
              phase: "mount",
              ctrl: new An
            }, m[t].ctrl.item = e)
          }), b.length) {
          let e = -1;
          const {
            leave: n
          } = s ? s() : t;
          P(b, (t, s) => {
            const r = y[s];
            ~t ? (e = m.indexOf(r), m[e] = {
              ...r,
              item: f[t]
            }) : n && m.splice(++e, 0, r)
          })
        }
        S.fun(o) && m.sort((e, t) => o(e.item, t.item));
        let _ = -i;
        const k = [],
          M = ut(),
          I = jt(t),
          A = new Map,
          E = (0, x.useRef)(new Map),
          R = (0, x.useRef)(!1);
        if (P(m, (e, n) => {
            const r = e.key,
              o = e.phase,
              a = s ? s() : t;
            let l, p;
            const f = Rt(a.delay || 0, r);
            if ("mount" == o) l = a.enter, p = "enter";
            else {
              const e = v.indexOf(r) < 0;
              if ("leave" != o)
                if (e) l = a.leave, p = "leave";
                else {
                  if (!(l = a.update)) return;
                  p = "update"
                }
              else {
                if (e) return;
                l = a.enter, p = "enter"
              }
            }
            if (l = Rt(l, e.item, n), l = S.obj(l) ? $t(l) : {
                to: l
              }, !l.config) {
              const t = h || I.config;
              l.config = Rt(t, e.item, n, p)
            }
            _ += i;
            const m = {
              ...I,
              delay: f + _,
              ref: d,
              immediate: a.immediate,
              reset: !1,
              ...l
            };
            if ("enter" == p && S.und(m.from)) {
              const r = s ? s() : t;
              m.from = Rt(S.und(r.initial) || y ? r.from : r.initial, e.item, n)
            }
            const {
              onResolve: w
            } = m;
            m.onResolve = e => {
              Rt(w, e);
              const t = g.current,
                n = t.find(e => e.key === r);
              if (n && (!e.cancelled || "update" == n.phase) && n.ctrl.idle) {
                const e = t.every(e => e.ctrl.idle);
                if ("leave" == n.phase) {
                  E.current.delete(n);
                  const t = Rt(u, n.item);
                  if (!1 !== t) {
                    const s = !0 === t ? 0 : t;
                    if (n.expired = !0, !e && s > 0) return void(s <= 2147483647 && (n.expirationId = setTimeout(M, s)))
                  }
                }
                e && t.some(e => e.expired) && (c && (R.current = !0), M())
              }
            };
            const b = Rn(e.ctrl, m);
            k.push({
              payload: m,
              propsDelay: f
            }), "leave" === p && c ? E.current.set(e, {
              phase: p,
              springs: b,
              payload: m
            }) : A.set(e, {
              phase: p,
              springs: b,
              payload: m
            })
          }), a && i) {
          const e = k.length;
          P(k, ({
            payload: t,
            propsDelay: n
          }, s) => {
            t.delay = n + (e - 1 - s) * i
          })
        }
        const C = (0, x.useContext)(jn),
          V = C !== dt(C) && Nt(C);
        at(() => {
          V && P(m, e => {
            e.ctrl.start({
              default: C
            })
          })
        }, [C]), P(A, (e, t) => {
          if (E.current.size) {
            const e = m.findIndex(e => e.key === t.key);
            m.splice(e, 1)
          }
        }), at(() => {
          P(E.current.size ? E.current : A, ({
            phase: e,
            payload: t
          }, n) => {
            const {
              ctrl: s
            } = n;
            n.phase = e, p?.add(s), V && "enter" == e && s.start({
              default: C
            }), t && (Bt(s, t.ref), s.ref && !R.current ? s.update(t) : (s.start(t), R.current && (R.current = !1)))
          })
        }, r ? void 0 : n);
        const z = e => x.createElement(x.Fragment, null, m.map((t, n) => {
          const s = A.get(t) || E.current.get(t),
            {
              springs: r
            } = s || t.ctrl,
            o = s ? {
              ...t,
              phase: s.phase
            } : t,
            i = e({
              ...r
            }, t.item, o, n),
            a = S.str(t.key) || S.num(t.key) ? t.key : t.ctrl.id,
            u = x.version < "19.0.0",
            c = i?.props ?? {},
            l = u ? i?.ref : c?.ref;
          return i && i.type ? x.createElement(i.type, {
            ...c,
            key: a,
            ref: l
          }) : i
        }));
        return p ? [z, p] : z
      }
      let Un = 1;
      const Wn = ({
          container: e,
          ...t
        } = {}) => {
          const [n, s] = $n(() => ({
            scrollX: 0,
            scrollY: 0,
            scrollXProgress: 0,
            scrollYProgress: 0,
            ...t
          }), []);
          return at(() => {
            const t = ((e, {
              container: t = document.documentElement
            } = {}) => {
              let n = ot.get(t);
              n || (n = new Set, ot.set(t, n));
              const s = new nt(e, t);
              if (n.add(s), !st.has(t)) {
                const e = () => (n?.forEach(e => e.advance()), !0);
                st.set(t, e);
                const s = it(t);
                window.addEventListener("resize", e, {
                  passive: !0
                }), t !== document.documentElement && rt.set(t, et(e, {
                  container: t
                })), s.addEventListener("scroll", e, {
                  passive: !0
                })
              }
              const r = st.get(t);
              return i(r), () => {
                i.cancel(r);
                const e = ot.get(t);
                if (!e) return;
                if (e.delete(s), e.size) return;
                const n = st.get(t);
                st.delete(t), n && (it(t).removeEventListener("scroll", n), window.removeEventListener("resize", n), rt.get(t)?.())
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
        Yn = ({
          container: e,
          ...t
        }) => {
          const [n, s] = $n(() => ({
            width: 0,
            height: 0,
            ...t
          }), []);
          return at(() => {
            const r = et(({
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
        Xn = {
          any: 0,
          all: 1
        };

      function Gn(e, t) {
        const [n, s] = (0, x.useState)(!1), r = (0, x.useRef)(void 0), o = S.fun(e) && e, {
          to: i = {},
          from: a = {},
          ...u
        } = o ? o() : {}, c = o ? t : e, [l, d] = $n(() => ({
          from: a,
          ...u
        }), []);
        return at(() => {
          const e = r.current,
            {
              root: t,
              once: o,
              amount: u = "any",
              ...l
            } = c ?? {};
          if (!e || o && n || "undefined" == typeof IntersectionObserver) return;
          const h = new WeakMap,
            p = new IntersectionObserver(e => {
              e.forEach(e => {
                const t = h.get(e.target);
                if (e.isIntersecting !== Boolean(t))
                  if (e.isIntersecting) {
                    const t = (i && d.start(i), s(!0), o ? void 0 : () => {
                      a && d.start(a), s(!1)
                    });
                    S.fun(t) ? h.set(e.target, t) : p.unobserve(e.target)
                  } else t && (t(), h.delete(e.target))
              })
            }, {
              root: t && t.current || void 0,
              threshold: "number" == typeof u || Array.isArray(u) ? u : Xn[u],
              ...l
            });
          return p.observe(e), () => p.unobserve(e)
        }, [c]), o ? [r, l] : [r, n]
      }

      function Zn({
        children: e,
        ...t
      }) {
        return e($n(t))
      }

      function Hn({
        items: e,
        children: t,
        ...n
      }) {
        const s = Qn(e.length, n);
        return e.map((e, n) => {
          const r = t(e, n);
          return S.fun(r) ? r(s[n]) : r
        })
      }

      function Jn({
        items: e,
        children: t,
        ...n
      }) {
        return Bn(e, n)(t)
      }
      var Kn = class extends ln {
        constructor(e, t) {
          super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = pe(...t);
          const n = this._get(),
            s = Mt(n);
          mt(this, s.create(n))
        }
        advance(e) {
          const t = this._get();
          I(t, this.get()) || (ft(this).setValue(t), this._onChange(t, this.idle)), !this.idle && ts(this._active) && ns(this)
        }
        _get() {
          const e = S.arr(this.source) ? this.source.map(Me) : O(Me(this.source));
          return this.calc(...e)
        }
        _start() {
          this.idle && !ts(this._active) && (this.idle = !1, P(gt(this), e => {
            e.done = !1
          }), V.skipAnimation ? (i.batchedUpdates(() => this.advance()), ns(this)) : B.start(this))
        }
        _attach() {
          let e = 1;
          P(O(this.source), t => {
            xe(t) && Oe(t, this), un(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
          }), this.priority = e, this._start()
        }
        _detach() {
          P(O(this.source), e => {
            xe(e) && Ee(e, this)
          }), this._active.clear(), ns(this)
        }
        eventObserved(e) {
          "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = O(this.source).reduce((e, t) => Math.max(e, (un(t) ? t.priority : 0) + 1), 0))
        }
      };

      function es(e) {
        return !1 !== e.idle
      }

      function ts(e) {
        return !e.size || Array.from(e).every(es)
      }

      function ns(e) {
        e.idle || (e.idle = !0, P(gt(e), e => {
          e.done = !0
        }), Ie(e, {
          type: "idle",
          parent: e
        }))
      }
      const ss = (e, ...t) => new Kn(e, t),
        rs = (e, ...t) => (We(), new Kn(e, t));
      V.assign({
        createStringInterpolator: De,
        to: (e, t) => new Kn(e, t)
      });
      const os = B.advance;
      var is = n(84017);
      const as = /^--/;

      function us(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || as.test(e) || ls.hasOwnProperty(e) && ls[e] ? ("" + t).trim() : t + "px"
      }
      const cs = {};
      let ls = {
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
      };
      const ds = ["Webkit", "Ms", "Moz", "O"];
      ls = Object.keys(ls).reduce((e, t) => (ds.forEach(n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t]), e), ls);
      const hs = /^(matrix3d|matrix|translate3d|translate[XYZ]?|scale3d|scale[XYZ]?|rotate3d|rotate[XYZ]?|skew[XY]?)$/,
        ps = /^(translate)/,
        fs = /^(rotate|skew)/,
        ms = (e, t) => S.num(e) && 0 !== e ? e + t : e,
        gs = (e, t) => S.arr(e) ? e.every(e => gs(e, t)) : S.num(e) ? e === t : parseFloat(e) === t;
      var ys = class extends _t {
          constructor({
            x: e,
            y: t,
            z: n,
            ...s
          }) {
            const r = [],
              o = [];
            (e || t || n) && (r.push([e || 0, t || 0, n || 0]), o.push(e => [`translate3d(${e.map(e=>ms(e,"px")).join(",")})`, gs(e, 0)])), A(s, (e, t) => {
              if ("transform" === t) r.push([e || ""]), o.push(e => [e, "" === e]);
              else if (hs.test(t)) {
                if (delete s[t], S.und(e)) return;
                const n = ps.test(t) ? "px" : fs.test(t) ? "deg" : "";
                r.push(O(e)), o.push("rotate3d" === t ? ([e, t, s, r]) => [`rotate3d(${e},${t},${s},${ms(r,n)})`, gs(r, 0)] : e => [`${t}(${e.map(e=>ms(e,n)).join(",")})`, gs(e, t.startsWith("scale") ? 1 : 0)])
              }
            }), r.length && (s.transform = new vs(r, o)), super(s)
          }
        },
        vs = class extends Pe {
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
              const r = Me(n[0]),
                [o, i] = this.transforms[s](S.arr(r) ? r : n.map(Me));
              e += " " + o, t = t && i
            }), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && P(this.inputs, e => P(e, e => xe(e) && Oe(e, this)))
          }
          observerRemoved(e) {
            0 == e && P(this.inputs, e => P(e, e => xe(e) && Ee(e, this)))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Ie(this, e)
          }
        };
      V.assign({
        batchedUpdates: is.unstable_batchedUpdates,
        createStringInterpolator: De,
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
      const ws = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: n = e => new _t(e),
          getComponentProps: s = e => e
        } = {}) => {
          const r = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: s
            },
            o = e => {
              const t = Ot(e) || "Anonymous";
              if (S.str(e)) e = o[e] || (o[e] = St(e, r));
              else {
                let t = e[Pt] ?? At.get(e);
                if (!t) {
                  t = St(e, r);
                  try {
                    e[Pt] = t
                  } catch {}
                  At.set(e, t)
                }
                e = t
              }
              return e.displayName = `Animated(${t})`, e
            };
          return A(e, (t, n) => {
            S.arr(e) && (n = Ot(t)), o[n] = o(t)
          }), {
            animated: o
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute || !e.removeAttribute) return !1;
            const n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: s,
                style: r,
                children: o,
                scrollTop: i,
                scrollLeft: a,
                viewBox: u,
                ...c
              } = t,
              l = Object.values(c),
              d = Object.keys(c).map(t => n || e.hasAttribute(t) ? t : cs[t] || (cs[t] = t.replace(/([A-Z])/g, e => "-" + e.toLowerCase())));
            t.hasOwnProperty("children") && (e.textContent = o);
            for (const t in r)
              if (r.hasOwnProperty(t)) {
                const n = us(t, r[t]);
                as.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
              } d.forEach((t, n) => {
              const s = l[n];
              void 0 !== s ? e.setAttribute(t, s) : e.removeAttribute(t)
            }), t.hasOwnProperty("className") && (void 0 !== s ? e.className = s : e.removeAttribute("class")), void 0 !== i && (e.scrollTop = i), void 0 !== a && (e.scrollLeft = a), t.hasOwnProperty("viewBox") && (void 0 !== u ? e.setAttribute("viewBox", u) : e.removeAttribute("viewBox"))
          },
          createAnimatedStyle: e => new ys(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...n
          }) => n
        }),
        bs = ws.animated
    }
  }
]);