"use strict";
(self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [942], {
    4942: (e, t, r) => {
      r.r(t), r.d(t, {
        Any: () => lr,
        BailSignal: () => Fr,
        Controller: () => an,
        FrameValue: () => Tr,
        Globals: () => A,
        Interpolation: () => Rn,
        Spring: () => In,
        SpringContext: () => fn,
        SpringRef: () => mn,
        SpringValue: () => Gr,
        Trail: () => En,
        Transition: () => On,
        a: () => ro,
        animated: () => ro,
        config: () => kr,
        createInterpolator: () => fe,
        easings: () => be,
        inferTo: () => yr,
        interpolate: () => Fn,
        to: () => zn,
        update: () => qn,
        useChain: () => Ar,
        useInView: () => Mn,
        useIsomorphicLayoutEffect: () => it,
        useReducedMotion: () => dt,
        useResize: () => kn,
        useScroll: () => An,
        useSpring: () => vn,
        useSpringRef: () => wn,
        useSpringValue: () => bn,
        useSprings: () => gn,
        useTrail: () => _n,
        useTransition: () => Sn
      });
      var n = w(),
        i = e => m(e, n),
        a = w();
      i.write = e => m(e, a);
      var o = w();
      i.onStart = e => m(e, o);
      var s = w();
      i.onFrame = e => m(e, s);
      var l = w();
      i.onFinish = e => m(e, l);
      var u = [];
      i.setTimeout = (e, t) => {
        let r = i.now() + t,
          n = () => {
            let e = u.findIndex((e => e.cancel == n));
            ~e && u.splice(e, 1), f -= ~e ? 1 : 0
          },
          a = {
            time: r,
            handler: e,
            cancel: n
          };
        return u.splice(d(r), 0, a), f += 1, g(), a
      };
      var d = e => ~(~u.findIndex((t => t.time > e)) || ~u.length);
      i.cancel = e => {
        o.delete(e), s.delete(e), l.delete(e), n.delete(e), a.delete(e)
      }, i.sync = e => {
        p = !0, i.batchedUpdates(e), p = !1
      }, i.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n() {
          for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++) n[a] = arguments[a];
          t = n, i.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          o.delete(r), t = null
        }, n
      };
      var c = typeof window < "u" ? window.requestAnimationFrame : () => {};
      i.use = e => c = e, i.now = typeof performance < "u" ? () => performance.now() : Date.now, i.batchedUpdates = e => e(), i.catch = console.error, i.frameLoop = "always", i.advance = () => {
        "demand" !== i.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : y()
      };
      var h = -1,
        f = 0,
        p = !1;

      function m(e, t) {
        p ? (t.delete(e), e(0)) : (t.add(e), g())
      }

      function g() {
        h < 0 && (h = 0, "demand" !== i.frameLoop && c(v))
      }

      function v() {
        ~h && (c(v), i.batchedUpdates(y))
      }

      function y() {
        let e = h;
        h = i.now();
        let t = d(h);
        t && (b(u.splice(0, t), (e => e.handler())), f -= t), f ? (o.flush(), n.flush(e ? Math.min(64, h - e) : 16.667), s.flush(), a.flush(), l.flush()) : h = -1
      }

      function w() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            f += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (f -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, f -= t.size, b(t, (t => t(r) && e.add(t))), f += e.size, t = e)
          }
        }
      }

      function b(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            i.catch(e)
          }
        }))
      }
      var _ = r(822);

      function S(e, t, r) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" != typeof e || null === e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var x = Object.defineProperty,
        A = {};

      function k() {}((e, t) => {
        for (var r in t) x(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(A, {
        assign: () => L,
        colors: () => F,
        createStringInterpolator: () => j,
        skipAnimation: () => q,
        to: () => C,
        willAdvance: () => $
      });
      var P = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function M(e, t) {
        if (P.arr(e)) {
          if (!P.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var I = (e, t) => e.forEach(t);

      function E(e, t, r) {
        if (P.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (let n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var O = e => P.und(e) ? [] : P.arr(e) ? e : [e];

      function R(e, t) {
        if (e.size) {
          let r = Array.from(e);
          e.clear(), I(r, t)
        }
      }
      var j, C, V = function(e) {
          for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
          return R(e, (e => e(...r)))
        },
        z = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        F = null,
        q = !1,
        $ = k,
        L = e => {
          e.to && (C = e.to), e.now && (i.now = e.now), void 0 !== e.colors && (F = e.colors), null != e.skipAnimation && (q = e.skipAnimation), e.createStringInterpolator && (j = e.createStringInterpolator), e.requestAnimationFrame && i.use(e.requestAnimationFrame), e.batchedUpdates && (i.batchedUpdates = e.batchedUpdates), e.willAdvance && ($ = e.willAdvance), e.frameLoop && (i.frameLoop = e.frameLoop)
        },
        T = new Set,
        U = [],
        W = [],
        Q = 0,
        N = {
          get idle() {
            return !T.size && !U.length
          },
          start(e) {
            Q > e.priority ? (T.add(e), i.onStart(D)) : (B(e), i(Z))
          },
          advance: Z,
          sort(e) {
            if (Q) i.onFrame((() => N.sort(e)));
            else {
              let t = U.indexOf(e);
              ~t && (U.splice(t, 1), G(e))
            }
          },
          clear() {
            U = [], T.clear()
          }
        };

      function D() {
        T.forEach(B), T.clear(), i(Z)
      }

      function B(e) {
        U.includes(e) || G(e)
      }

      function G(e) {
        U.splice(function(e, t) {
          let r = e.findIndex(t);
          return r < 0 ? e.length : r
        }(U, (t => t.priority > e.priority)), 0, e)
      }

      function Z(e) {
        let t = W;
        for (let r = 0; r < U.length; r++) {
          let n = U[r];
          Q = n.priority, n.idle || ($(n), n.advance(e), n.idle || t.push(n))
        }
        return Q = 0, (W = U).length = 0, (U = t).length > 0
      }
      var X = "[-+]?\\d*\\.?\\d+",
        Y = X + "%";

      function H() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var J = new RegExp("rgb" + H(X, X, X)),
        K = new RegExp("rgba" + H(X, X, X, X)),
        ee = new RegExp("hsl" + H(X, Y, Y)),
        te = new RegExp("hsla" + H(X, Y, Y, X)),
        re = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ne = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ie = /^#([0-9a-fA-F]{6})$/,
        ae = /^#([0-9a-fA-F]{8})$/;

      function oe(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function se(e, t, r) {
        let n = r < .5 ? r * (1 + t) : r + t - r * t,
          i = 2 * r - n,
          a = oe(i, n, e + 1 / 3),
          o = oe(i, n, e),
          s = oe(i, n, e - 1 / 3);
        return Math.round(255 * a) << 24 | Math.round(255 * o) << 16 | Math.round(255 * s) << 8
      }

      function le(e) {
        let t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function ue(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function de(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function ce(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function he(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = ie.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : F && void 0 !== F[e] ? F[e] : (t = J.exec(e)) ? (le(t[1]) << 24 | le(t[2]) << 16 | le(t[3]) << 8 | 255) >>> 0 : (t = K.exec(e)) ? (le(t[1]) << 24 | le(t[2]) << 16 | le(t[3]) << 8 | de(t[4])) >>> 0 : (t = re.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = ae.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ne.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = ee.exec(e)) ? (255 | se(ue(t[1]), ce(t[2]), ce(t[3]))) >>> 0 : (t = te.exec(e)) ? (se(ue(t[1]), ce(t[2]), ce(t[3])) | de(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var fe = (e, t, r) => {
          if (P.fun(e)) return e;
          if (P.arr(e)) return fe({
            range: e,
            output: t,
            extrapolate: r
          });
          if (P.str(e.output[0])) return j(e);
          let n = e,
            i = n.output,
            a = n.range || [0, 1],
            o = n.extrapolateLeft || n.extrapolate || "extend",
            s = n.extrapolateRight || n.extrapolate || "extend",
            l = n.easing || (e => e);
          return e => {
            let t = function(e, t) {
              for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
              return r - 1
            }(e, a);
            return function(e, t, r, n, i, a, o, s, l) {
              let u = l ? l(e) : e;
              if (u < t) {
                if ("identity" === o) return u;
                "clamp" === o && (u = t)
              }
              if (u > r) {
                if ("identity" === s) return u;
                "clamp" === s && (u = r)
              }
              return n === i ? n : t === r ? e <= t ? n : i : (t === -1 / 0 ? u = -u : r === 1 / 0 ? u -= t : u = (u - t) / (r - t), u = a(u), n === -1 / 0 ? u = -u : i === 1 / 0 ? u += n : u = u * (i - n) + n, u)
            }(e, a[t], a[t + 1], i[t], i[t + 1], l, o, s, n.map)
          }
        },
        pe = 1.70158,
        me = 1.525 * pe,
        ge = pe + 1,
        ve = 2 * Math.PI / 3,
        ye = 2 * Math.PI / 4.5,
        we = e => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375,
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
          easeInBack: e => ge * e * e * e - pe * e * e,
          easeOutBack: e => 1 + ge * Math.pow(e - 1, 3) + pe * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (2 * (me + 1) * e - me) / 2 : (Math.pow(2 * e - 2, 2) * ((me + 1) * (2 * e - 2) + me) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * ve),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * ve) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * ye) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * ye) / 2 + 1,
          easeInBounce: e => 1 - we(1 - e),
          easeOutBounce: we,
          easeInOutBounce: e => e < .5 ? (1 - we(1 - 2 * e)) / 2 : (1 + we(2 * e - 1)) / 2,
          steps: function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "end";
            return r => {
              let n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
              return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
            }
          }
        },
        _e = Symbol.for("FluidValue.get"),
        Se = Symbol.for("FluidValue.observers"),
        xe = e => Boolean(e && e[_e]),
        Ae = e => e && e[_e] ? e[_e]() : e,
        ke = e => e[Se] || null;

      function Pe(e, t) {
        let r = e[Se];
        r && r.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var Me = class {
          constructor(e) {
            if (S(this, _e, void 0), S(this, Se, void 0), !e && !(e = this.get)) throw Error("Unknown getter");
            Ie(this, e)
          }
        },
        Ie = (e, t) => je(e, _e, t);

      function Ee(e, t) {
        if (e[_e]) {
          let r = e[Se];
          r || je(e, Se, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function Oe(e, t) {
        let r = e[Se];
        if (r && r.has(t)) {
          let n = r.size - 1;
          n ? r.delete(t) : e[Se] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var Re, je = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        Ce = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Ve = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        ze = new RegExp(`(${Ce.source})(%|[a-z]+)`, "i"),
        Fe = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        qe = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        $e = e => {
          let [t, r] = Le(e);
          if (!t || z()) return e;
          let n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          return n ? n.trim() : r && r.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(r) || e : r && qe.test(r) ? $e(r) : r || e
        },
        Le = e => {
          let t = qe.exec(e);
          if (!t) return [, ];
          let [, r, n] = t;
          return [r, n]
        },
        Te = (e, t, r, n, i) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,
        Ue = "react-spring: ",
        We = e => {
          let t = e,
            r = !1;
          if ("function" != typeof t) throw new TypeError(`${Ue}once requires a function parameter`);
          return function() {
            r || (t(...arguments), r = !0)
          }
        },
        Qe = We(console.warn);

      function Ne() {
        Qe(`${Ue}The "interpolate" function is deprecated in v9 (use "to" instead)`)
      }
      var De = We(console.warn);

      function Be(e) {
        return P.str(e) && ("#" == e[0] || /\d/.test(e) || !z() && qe.test(e) || e in (F || {}))
      }
      var Ge, Ze, Xe = new WeakMap,
        Ye = e => e.forEach((e => {
          let {
            target: t,
            contentRect: r
          } = e;
          return Xe.get(t)?.forEach((e => e(r)))
        })),
        He = new Set,
        Je = function(e) {
          let {
            container: t = document.documentElement
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return t === document.documentElement ? (e => (He.add(e), Ze || (Ze = (() => {
            let e = () => {
              He.forEach((e => e({
                width: window.innerWidth,
                height: window.innerHeight
              })))
            };
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          })()), () => {
            He.delete(e), !He.size && Ze && (Ze(), Ze = void 0)
          }))(e) : function(e, t) {
            Ge || typeof ResizeObserver < "u" && (Ge = new ResizeObserver(Ye));
            let r = Xe.get(t);
            return r || (r = new Set, Xe.set(t, r)), r.add(e), Ge && Ge.observe(t), () => {
              let r = Xe.get(t);
              !r || (r.delete(e), !r.size && Ge && Ge.unobserve(t))
            }
          }(e, t)
        },
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
        et = new WeakMap,
        tt = new WeakMap,
        rt = new WeakMap,
        nt = e => e === document.documentElement ? window : e,
        it = z() ? _.useEffect : _.useLayoutEffect,
        at = () => {
          let e = (0, _.useRef)(!1);
          return it((() => (e.current = !0, () => {
            e.current = !1
          })), []), e
        };

      function ot() {
        let e = (0, _.useState)()[1],
          t = at();
        return () => {
          t.current && e(Math.random())
        }
      }
      var st = e => (0, _.useEffect)(e, lt),
        lt = [];

      function ut(e) {
        let t = (0, _.useRef)();
        return (0, _.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var dt = () => {
          let [e, t] = (0, _.useState)(null);
          return it((() => {
            let e = window.matchMedia("(prefers-reduced-motion)"),
              r = e => {
                t(e.matches), L({
                  skipAnimation: e.matches
                })
              };
            return r(e), e.addEventListener("change", r), () => {
              e.removeEventListener("change", r)
            }
          }), []), e
        },
        ct = Mt(),
        ht = e => xt(e, ct),
        ft = Mt();
      ht.write = e => xt(e, ft);
      var pt = Mt();
      ht.onStart = e => xt(e, pt);
      var mt = Mt();
      ht.onFrame = e => xt(e, mt);
      var gt = Mt();
      ht.onFinish = e => xt(e, gt);
      var vt = [];
      ht.setTimeout = (e, t) => {
        let r = ht.now() + t,
          n = () => {
            let e = vt.findIndex((e => e.cancel == n));
            ~e && vt.splice(e, 1), _t -= ~e ? 1 : 0
          },
          i = {
            time: r,
            handler: e,
            cancel: n
          };
        return vt.splice(yt(r), 0, i), _t += 1, At(), i
      };
      var yt = e => ~(~vt.findIndex((t => t.time > e)) || ~vt.length);
      ht.cancel = e => {
        pt.delete(e), mt.delete(e), gt.delete(e), ct.delete(e), ft.delete(e)
      }, ht.sync = e => {
        St = !0, ht.batchedUpdates(e), St = !1
      }, ht.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n() {
          for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
          t = n, ht.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          pt.delete(r), t = null
        }, n
      };
      var wt = typeof window < "u" ? window.requestAnimationFrame : () => {};
      ht.use = e => wt = e, ht.now = typeof performance < "u" ? () => performance.now() : Date.now, ht.batchedUpdates = e => e(), ht.catch = console.error, ht.frameLoop = "always", ht.advance = () => {
        "demand" !== ht.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Pt()
      };
      var bt = -1,
        _t = 0,
        St = !1;

      function xt(e, t) {
        St ? (t.delete(e), e(0)) : (t.add(e), At())
      }

      function At() {
        bt < 0 && (bt = 0, "demand" !== ht.frameLoop && wt(kt))
      }

      function kt() {
        ~bt && (wt(kt), ht.batchedUpdates(Pt))
      }

      function Pt() {
        let e = bt;
        bt = ht.now();
        let t = yt(bt);
        t && (It(vt.splice(0, t), (e => e.handler())), _t -= t), _t ? (pt.flush(), ct.flush(e ? Math.min(64, bt - e) : 16.667), mt.flush(), ft.flush(), gt.flush()) : bt = -1
      }

      function Mt() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            _t += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (_t -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, _t -= t.size, It(t, (t => t(r) && e.add(t))), _t += e.size, t = e)
          }
        }
      }

      function It(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            ht.catch(e)
          }
        }))
      }
      var Et = Object.defineProperty;
      ((e, t) => {
        for (var r in t) Et(e, r, {
          get: t[r],
          enumerable: !0
        })
      })({}, {
        assign: () => Lt,
        colors: () => Ft,
        createStringInterpolator: () => Ct,
        skipAnimation: () => qt,
        to: () => Vt,
        willAdvance: () => $t
      });
      var Ot = {
          arr: Array.isArray,
          obj: e => !!e && "Object" === e.constructor.name,
          fun: e => "function" == typeof e,
          str: e => "string" == typeof e,
          num: e => "number" == typeof e,
          und: e => void 0 === e
        },
        Rt = (e, t) => e.forEach(t);

      function jt(e, t, r) {
        if (Ot.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (let n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var Ct, Vt, zt = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        Ft = null,
        qt = !1,
        $t = function() {},
        Lt = e => {
          e.to && (Vt = e.to), e.now && (ht.now = e.now), void 0 !== e.colors && (Ft = e.colors), null != e.skipAnimation && (qt = e.skipAnimation), e.createStringInterpolator && (Ct = e.createStringInterpolator), e.requestAnimationFrame && ht.use(e.requestAnimationFrame), e.batchedUpdates && (ht.batchedUpdates = e.batchedUpdates), e.willAdvance && ($t = e.willAdvance), e.frameLoop && (ht.frameLoop = e.frameLoop)
        };
      new Set;
      var Tt = "[-+]?\\d*\\.?\\d+",
        Ut = Tt + "%";

      function Wt() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      new RegExp("rgb" + Wt(Tt, Tt, Tt)), new RegExp("rgba" + Wt(Tt, Tt, Tt, Tt)), new RegExp("hsl" + Wt(Tt, Ut, Ut)), new RegExp("hsla" + Wt(Tt, Ut, Ut, Tt));
      var Qt = (e, t, r) => {
        if (Ot.fun(e)) return e;
        if (Ot.arr(e)) return Qt({
          range: e,
          output: t,
          extrapolate: r
        });
        if (Ot.str(e.output[0])) return Ct(e);
        let n = e,
          i = n.output,
          a = n.range || [0, 1],
          o = n.extrapolateLeft || n.extrapolate || "extend",
          s = n.extrapolateRight || n.extrapolate || "extend",
          l = n.easing || (e => e);
        return e => {
          let t = function(e, t) {
            for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
            return r - 1
          }(e, a);
          return function(e, t, r, n, i, a, o, s, l) {
            let u = l ? l(e) : e;
            if (u < t) {
              if ("identity" === o) return u;
              "clamp" === o && (u = t)
            }
            if (u > r) {
              if ("identity" === s) return u;
              "clamp" === s && (u = r)
            }
            return n === i ? n : t === r ? e <= t ? n : i : (t === -1 / 0 ? u = -u : r === 1 / 0 ? u -= t : u = (u - t) / (r - t), u = a(u), n === -1 / 0 ? u = -u : i === 1 / 0 ? u += n : u = u * (i - n) + n, u)
          }(e, a[t], a[t + 1], i[t], i[t + 1], l, o, s, n.map)
        }
      };
      Math.PI, Math.PI;
      var Nt = Symbol.for("FluidValue.get"),
        Dt = (Symbol.for("FluidValue.observers"), e => Boolean(e && e[Nt])),
        Bt = (new RegExp(`(${/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g.source})(%|[a-z]+)`, "i"), /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/),
        Gt = e => {
          let t = e,
            r = !1;
          if ("function" != typeof t) throw new TypeError("react-spring: once requires a function parameter");
          return function() {
            r || (t(...arguments), r = !0)
          }
        };

      function Zt(e) {
        return Ot.str(e) && ("#" == e[0] || /\d/.test(e) || !zt() && Bt.test(e) || e in (Ft || {}))
      }

      function Xt(e, t, r) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" != typeof e || null === e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      Gt(console.warn), Gt(console.warn), new WeakMap, new Set, new WeakMap, new WeakMap, new WeakMap, zt() ? _.useEffect : _.useLayoutEffect;
      var Yt = Symbol.for("Animated:node"),
        Ht = e => e && e[Yt],
        Jt = (e, t) => ((e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }))(e, Yt, t),
        Kt = e => e && e[Yt] && e[Yt].getPayload(),
        er = class {
          constructor() {
            Xt(this, "payload", void 0), Jt(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        tr = class e extends er {
          constructor(e) {
            super(), Xt(this, "done", !0), Xt(this, "elapsedTime", void 0), Xt(this, "lastPosition", void 0), Xt(this, "lastVelocity", void 0), Xt(this, "v0", void 0), Xt(this, "durationProgress", 0), this._value = e, Ot.num(this._value) && (this.lastPosition = this._value)
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
            return Ot.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            let {
              done: e
            } = this;
            this.done = !1, Ot.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        rr = class e extends tr {
          constructor(e) {
            super(0), Xt(this, "_string", null), Xt(this, "_toString", void 0), this._toString = Qt({
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
            if (Ot.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = Qt({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        nr = {
          dependencies: null
        },
        ir = class extends er {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            let t = {};
            return jt(this.source, ((r, n) => {
              (e => !!e && e[Yt] === e)(r) ? t[n] = r.getValue(e): Dt(r) ? t[n] = (e => e && e[Nt] ? e[Nt]() : e)(r) : e || (t[n] = r)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && Rt(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              let t = new Set;
              return jt(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            nr.dependencies && Dt(e) && nr.dependencies.add(e);
            let t = Kt(e);
            t && Rt(t, (e => this.add(e)))
          }
        },
        ar = class extends ir {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new ar(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            let t = this.getPayload();
            return e.length == t.length ? t.map(((t, r) => t.setValue(e[r]))).some(Boolean) : (super.setValue(e.map(or)), !0)
          }
        };

      function or(e) {
        return (Zt(e) ? rr : tr).create(e)
      }

      function sr(e) {
        let t = Ht(e);
        return t ? t.constructor : Ot.arr(e) ? ar : Zt(e) ? rr : tr
      }
      Symbol.for("AnimatedComponent");
      var lr = class {
        constructor() {
          var e, t, r;
          e = this, r = void 0, (t = function(e) {
            var t = function(e, t) {
              if ("object" != typeof e || null === e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, "string");
                if ("object" != typeof n) return n;
                throw new TypeError("@@toPrimitive must return a primitive value.")
              }
              return String(e)
            }(e);
            return "symbol" == typeof t ? t : String(t)
          }(t = "_")) in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[t] = r
        }
      };

      function ur(e, t, r) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" != typeof e || null === e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function dr(e) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        return P.fun(e) ? e(...r) : e
      }
      var cr = (e, t) => !0 === e || !!(t && e && (P.fun(e) ? e(t) : O(e).includes(t))),
        hr = (e, t) => P.obj(e) ? t && e[t] : e,
        fr = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        pr = e => e,
        mr = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pr,
            r = gr;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          let n = {};
          for (let i of r) {
            let r = t(e[i], i);
            P.und(r) || (n[i] = r)
          }
          return n
        },
        gr = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        vr = {
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

      function yr(e) {
        let t = function(e) {
          let t = {},
            r = 0;
          if (E(e, ((e, n) => {
              vr[n] || (t[n] = e, r++)
            })), r) return t
        }(e);
        if (t) {
          let r = {
            to: t
          };
          return E(e, ((e, n) => n in t || (r[n] = e))), r
        }
        return {
          ...e
        }
      }

      function wr(e) {
        return e = Ae(e), P.arr(e) ? e.map(wr) : Be(e) ? A.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function br(e) {
        for (let t in e) return !0;
        return !1
      }

      function _r(e) {
        return P.fun(e) || P.arr(e) && P.obj(e[0])
      }

      function Sr(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function xr(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }

      function Ar(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3;
        it((() => {
          if (t) {
            let n = 0;
            I(e, ((e, i) => {
              let a = e.current;
              if (a.length) {
                let o = r * t[i];
                isNaN(o) ? o = n : n = o, I(a, (e => {
                  I(e.queue, (e => {
                    let t = e.delay;
                    e.delay = e => o + dr(t || 0, e)
                  }))
                })), e.start()
              }
            }))
          } else {
            let t = Promise.resolve();
            I(e, (e => {
              let r = e.current;
              if (r.length) {
                let n = r.map((e => {
                  let t = e.queue;
                  return e.queue = [], t
                }));
                t = t.then((() => (I(r, ((e, t) => I(n[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
              }
            }))
          }
        }))
      }
      var kr = {
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
        Pr = {
          ...kr.default,
          mass: 1,
          damping: 1,
          easing: be.linear,
          clamp: !1
        };

      function Mr(e, t) {
        if (P.und(t.decay)) {
          let r = !P.und(t.tension) || !P.und(t.friction);
          (r || !P.und(t.frequency) || !P.und(t.damping) || !P.und(t.mass)) && (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Ir = [];

      function Er(e, t) {
        let {
          key: r,
          props: n,
          defaultProps: a,
          state: o,
          actions: s
        } = t;
        return new Promise(((t, l) => {
          let u, d, c = cr(n.cancel ?? a?.cancel, r);
          if (c) p();
          else {
            P.und(n.pause) || (o.paused = cr(n.pause, r));
            let e = a?.pause;
            !0 !== e && (e = o.paused || cr(e, r)), u = dr(n.delay || 0, r), e ? (o.resumeQueue.add(f), s.pause()) : (s.resume(), f())
          }

          function h() {
            o.resumeQueue.add(f), o.timeouts.delete(d), d.cancel(), u = d.time - i.now()
          }

          function f() {
            u > 0 && !A.skipAnimation ? (o.delayed = !0, d = i.setTimeout(p, u), o.pauseQueue.add(h), o.timeouts.add(d)) : p()
          }

          function p() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(h), o.timeouts.delete(d), e <= (o.cancelId || 0) && (c = !0);
            try {
              s.start({
                ...n,
                callId: e,
                cancel: c
              }, t)
            } catch (e) {
              l(e)
            }
          }
        }))
      }
      var Or = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? Cr(e.get()) : t.every((e => e.noop)) ? Rr(e.get()) : jr(e.get(), t.every((e => e.finished))),
        Rr = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        jr = function(e, t) {
          return {
            value: e,
            finished: t,
            cancelled: arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          }
        },
        Cr = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function Vr(e, t, r, n) {
        let {
          callId: a,
          parentId: o,
          onRest: s
        } = t, {
          asyncTo: l,
          promise: u
        } = r;
        return o || e !== l || t.reset ? r.promise = (async () => {
          r.asyncId = a, r.asyncTo = e;
          let d, c, h, f = mr(t, ((e, t) => "onRest" === t ? void 0 : e)),
            p = new Promise(((e, t) => (d = e, c = t))),
            m = e => {
              let t = a <= (r.cancelId || 0) && Cr(n) || a !== r.asyncId && jr(n, !1);
              if (t) throw e.result = t, c(e), e
            },
            g = (e, t) => {
              let i = new Fr,
                o = new qr;
              return (async () => {
                if (A.skipAnimation) throw zr(r), o.result = jr(n, !1), c(o), o;
                m(i);
                let s = P.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = a, E(f, ((e, t) => {
                  P.und(s[t]) && (s[t] = e)
                }));
                let l = await n.start(s);
                return m(i), r.paused && await new Promise((e => {
                  r.resumeQueue.add(e)
                })), l
              })()
            };
          if (A.skipAnimation) return zr(r), jr(n, !1);
          try {
            let t;
            t = P.arr(e) ? (async e => {
              for (let t of e) await g(t)
            })(e) : Promise.resolve(e(g, n.stop.bind(n))), await Promise.all([t.then(d), p]), h = jr(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof Fr) h = e.result;
            else {
              if (!(e instanceof qr)) throw e;
              h = e.result
            }
          } finally {
            a == r.asyncId && (r.asyncId = o, r.asyncTo = o ? l : void 0, r.promise = o ? u : void 0)
          }
          return P.fun(s) && i.batchedUpdates((() => {
            s(h, n, n.item)
          })), h
        })() : u
      }

      function zr(e, t) {
        R(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var Fr = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."), ur(this, "result", void 0)
          }
        },
        qr = class extends Error {
          constructor() {
            super("SkipAnimationSignal"), ur(this, "result", void 0)
          }
        },
        $r = e => e instanceof Tr,
        Lr = 1,
        Tr = class extends Me {
          constructor() {
            super(...arguments), ur(this, "id", Lr++), ur(this, "_priority", 0)
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            let e = Ht(this);
            return e && e.getValue()
          }
          to() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return A.to(this, t)
          }
          interpolate() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return Ne(), A.to(this, t)
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
          _onChange(e) {
            Pe(this, {
              type: "change",
              parent: this,
              value: e,
              idle: arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            })
          }
          _onPriorityChange(e) {
            this.idle || N.sort(this), Pe(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        Ur = Symbol.for("SpringPhase"),
        Wr = e => (1 & e[Ur]) > 0,
        Qr = e => (2 & e[Ur]) > 0,
        Nr = e => (4 & e[Ur]) > 0,
        Dr = (e, t) => t ? e[Ur] |= 3 : e[Ur] &= -3,
        Br = (e, t) => t ? e[Ur] |= 4 : e[Ur] &= -5,
        Gr = class extends Tr {
          constructor(e, t) {
            if (super(), ur(this, "key", void 0), ur(this, "animation", new class {
                constructor() {
                  ur(this, "changed", !1), ur(this, "values", Ir), ur(this, "toValues", null), ur(this, "fromValues", Ir), ur(this, "to", void 0), ur(this, "from", void 0), ur(this, "config", new class {
                    constructor() {
                      ur(this, "tension", void 0), ur(this, "friction", void 0), ur(this, "frequency", void 0), ur(this, "damping", void 0), ur(this, "mass", void 0), ur(this, "velocity", 0), ur(this, "restVelocity", void 0), ur(this, "precision", void 0), ur(this, "progress", void 0), ur(this, "duration", void 0), ur(this, "easing", void 0), ur(this, "clamp", void 0), ur(this, "bounce", void 0), ur(this, "decay", void 0), ur(this, "round", void 0), Object.assign(this, Pr)
                    }
                  }), ur(this, "immediate", !1)
                }
              }), ur(this, "queue", void 0), ur(this, "defaultProps", {}), ur(this, "_state", {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }), ur(this, "_pendingCalls", new Set), ur(this, "_lastCallId", 0), ur(this, "_lastToId", 0), ur(this, "_memoizedDuration", 0), !P.und(e) || !P.und(t)) {
              let r = P.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              P.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(Qr(this) || this._state.asyncTo) || Nr(this)
          }
          get goal() {
            return Ae(this.animation.to)
          }
          get velocity() {
            let e = Ht(this);
            return e instanceof tr ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return Wr(this)
          }
          get isAnimating() {
            return Qr(this)
          }
          get isPaused() {
            return Nr(this)
          }
          get isDelayed() {
            return this._state.delayed
          }
          advance(e) {
            let t = !0,
              r = !1,
              n = this.animation,
              {
                config: i,
                toValues: a
              } = n,
              o = Kt(n.to);
            !o && xe(n.to) && (a = O(Ae(n.to))), n.values.forEach(((s, l) => {
              if (s.done) return;
              let u = s.constructor == rr ? 1 : o ? o[l].lastPosition : a[l],
                d = n.immediate,
                c = u;
              if (!d) {
                if (c = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let t, r = s.elapsedTime += e,
                  a = n.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = P.arr(i.velocity) ? i.velocity[l] : i.velocity,
                  h = i.precision || (a == u ? .005 : Math.min(1, .001 * Math.abs(u - a)));
                if (P.und(i.duration))
                  if (i.decay) {
                    let e = !0 === i.decay ? .998 : i.decay,
                      n = Math.exp(-(1 - e) * r);
                    c = a + o / (1 - e) * (1 - n), d = Math.abs(s.lastPosition - c) <= h, t = o * n
                  } else {
                    t = null == s.lastVelocity ? o : s.lastVelocity;
                    let r, n = i.restVelocity || h / 10,
                      l = i.clamp ? 0 : i.bounce,
                      f = !P.und(l),
                      p = a == u ? s.v0 > 0 : a < u,
                      m = !1,
                      g = 1,
                      v = Math.ceil(e / g);
                    for (let e = 0; e < v && (r = Math.abs(t) > n, r || (d = Math.abs(u - c) <= h, !d)); ++e) f && (m = c == u || c > u == p, m && (t = -t * l, c = u)), t += (1e-6 * -i.tension * (c - u) + .001 * -i.friction * t) / i.mass * g, c += t * g
                  }
                else {
                  let n = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, s.durationProgress > 0 && (s.elapsedTime = i.duration * s.durationProgress, r = s.elapsedTime += e)), n = (i.progress || 0) + r / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, s.durationProgress = n), c = a + i.easing(n) * (u - a), t = (c - s.lastPosition) / e, d = 1 == n
                }
                s.lastVelocity = t, Number.isNaN(c) && (console.warn("Got NaN while animating:", this), d = !0)
              }
              o && !o[l].done && (d = !1), d ? s.done = !0 : t = !1, s.setValue(c, i.round) && (r = !0)
            }));
            let s = Ht(this),
              l = s.getValue();
            if (t) {
              let e = Ae(n.to);
              l === e && !r || i.decay ? r && i.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
          }
          set(e) {
            return i.batchedUpdates((() => {
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
            if (Qr(this)) {
              let {
                to: e,
                config: t
              } = this.animation;
              i.batchedUpdates((() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop()
              }))
            }
            return this
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this
          }
          start(e, t) {
            let r;
            return P.und(e) ? (r = this.queue || [], this.queue = []) : r = [P.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map((e => this._update(e)))).then((e => Or(this, e)))
          }
          stop(e) {
            let {
              to: t
            } = this.animation;
            return this._focus(this.get()), zr(this._state, e && this._lastCallId), i.batchedUpdates((() => this._stop(t, e))), this
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
            let t = this.key || "",
              {
                to: r,
                from: n
              } = e;
            r = P.obj(r) ? r[t] : r, (null == r || _r(r)) && (r = void 0), n = P.obj(n) ? n[t] : n, null == n && (n = void 0);
            let i = {
              to: r,
              from: n
            };
            return Wr(this) || (e.reverse && ([r, n] = [n, r]), n = Ae(n), P.und(n) ? Ht(this) || this._set(r) : this._set(n)), i
          }
          _update(e, t) {
            let {
              ...r
            } = e, {
              key: n,
              defaultProps: i
            } = this;
            r.default && Object.assign(i, mr(r, ((e, t) => /^on/.test(t) ? hr(e, n) : e))), en(this, r, "onProps"), tn(this, "onProps", r, this);
            let a = this._prepareNode(r);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            let o = this._state;
            return Er(++this._lastCallId, {
              key: n,
              props: r,
              defaultProps: i,
              state: o,
              actions: {
                pause: () => {
                  Nr(this) || (Br(this, !0), V(o.pauseQueue), tn(this, "onPause", jr(this, Zr(this, this.animation.to)), this))
                },
                resume: () => {
                  Nr(this) && (Br(this, !1), Qr(this) && this._resume(), V(o.resumeQueue), tn(this, "onResume", jr(this, Zr(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, a)
              }
            }).then((e => {
              if (r.loop && e.finished && (!t || !e.noop)) {
                let e = Xr(r);
                if (e) return this._update(e, !0)
              }
              return e
            }))
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(Cr(this));
            let n = !P.und(e.to),
              a = !P.und(e.from);
            if (n || a) {
              if (!(t.callId > this._lastToId)) return r(Cr(this));
              this._lastToId = t.callId
            }
            let {
              key: o,
              defaultProps: s,
              animation: l
            } = this, {
              to: u,
              from: d
            } = l, {
              to: c = u,
              from: h = d
            } = e;
            a && !n && (!t.default || P.und(c)) && (c = h), t.reverse && ([c, h] = [h, c]);
            let f = !M(h, d);
            f && (l.from = h), h = Ae(h);
            let p = !M(c, u);
            p && this._focus(c);
            let m = _r(t.to),
              {
                config: g
              } = l,
              {
                decay: v,
                velocity: y
              } = g;
            (n || a) && (g.velocity = 0), t.config && !m && function(e, t, r) {
              r && (Mr(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), Mr(e, t), Object.assign(e, t);
              for (let t in Pr) null == e[t] && (e[t] = Pr[t]);
              let {
                mass: n,
                frequency: i,
                damping: a
              } = e;
              P.und(i) || (i < .01 && (i = .01), a < 0 && (a = 0), e.tension = Math.pow(2 * Math.PI / i, 2) * n, e.friction = 4 * Math.PI * a * n / i)
            }(g, dr(t.config, o), t.config !== s.config ? dr(s.config, o) : void 0);
            let w = Ht(this);
            if (!w || P.und(c)) return r(jr(this, !0));
            let b = P.und(t.reset) ? a && !t.default : !P.und(h) && cr(t.reset, o),
              _ = b ? h : this.get(),
              S = wr(c),
              x = P.num(S) || P.arr(S) || Be(S),
              A = !m && (!x || cr(s.immediate || t.immediate, o));
            if (p) {
              let e = sr(c);
              if (e !== w.constructor) {
                if (!A) throw Error(`Cannot animate between ${w.constructor.name} and ${e.name}, as the "to" prop suggests`);
                w = this._set(S)
              }
            }
            let k = w.constructor,
              E = xe(c),
              R = !1;
            if (!E) {
              let e = b || !Wr(this) && f;
              (p || e) && (R = M(wr(_), S), E = !R), (!M(l.immediate, A) && !A || !M(g.decay, v) || !M(g.velocity, y)) && (E = !0)
            }
            if (R && Qr(this) && (l.changed && !b ? E = !0 : E || this._stop(u)), !m && ((E || xe(u)) && (l.values = w.getPayload(), l.toValues = xe(c) ? null : k == rr ? [1] : O(S)), l.immediate != A && (l.immediate = A, !A && !b && this._set(u)), E)) {
              let {
                onRest: e
              } = l;
              I(Kr, (e => en(this, t, e)));
              let n = jr(this, Zr(this, u));
              V(this._pendingCalls, n), this._pendingCalls.add(r), l.changed && i.batchedUpdates((() => {
                l.changed = !b, e?.(n, this), b ? dr(s.onRest, n) : l.onStart?.(n, this)
              }))
            }
            b && this._set(_), m ? r(Vr(t.to, t, this._state, this)) : E ? this._start() : Qr(this) && !p ? this._pendingCalls.add(r) : r(Rr(_))
          }
          _focus(e) {
            let t = this.animation;
            e !== t.to && (ke(this) && this._detach(), t.to = e, ke(this) && this._attach())
          }
          _attach() {
            let e = 0,
              {
                to: t
              } = this.animation;
            xe(t) && (Ee(t, this), $r(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            let {
              to: e
            } = this.animation;
            xe(e) && Oe(e, this)
          }
          _set(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              r = Ae(e);
            if (!P.und(r)) {
              let e = Ht(this);
              if (!e || !M(r, e.getValue())) {
                let n = sr(r);
                e && e.constructor == n ? e.setValue(r) : Jt(this, n.create(r)), e && i.batchedUpdates((() => {
                  this._onChange(r, t)
                }))
              }
            }
            return Ht(this)
          }
          _onStart() {
            let e = this.animation;
            e.changed || (e.changed = !0, tn(this, "onStart", jr(this, Zr(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), dr(this.animation.onChange, e, this)), dr(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            let e = this.animation;
            Ht(this).reset(Ae(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), Qr(this) || (Dr(this, !0), Nr(this) || this._resume())
          }
          _resume() {
            A.skipAnimation ? this.finish() : N.start(this)
          }
          _stop(e, t) {
            if (Qr(this)) {
              Dr(this, !1);
              let r = this.animation;
              I(r.values, (e => {
                e.done = !0
              })), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Pe(this, {
                type: "idle",
                parent: this
              });
              let n = t ? Cr(this.get()) : jr(this.get(), Zr(this, e ?? r.to));
              V(this._pendingCalls, n), r.changed && (r.changed = !1, tn(this, "onRest", n, this))
            }
          }
        };

      function Zr(e, t) {
        let r = wr(t);
        return M(wr(e.get()), r)
      }

      function Xr(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.loop,
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.to,
          n = dr(t);
        if (n) {
          let i = !0 !== n && yr(n),
            a = (i || e).reverse,
            o = !i || i.reset;
          return Yr({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !a || _r(r) ? r : void 0,
            from: o ? e.from : void 0,
            reset: o,
            ...i
          })
        }
      }

      function Yr(e) {
        let {
          to: t,
          from: r
        } = e = yr(e), n = new Set;
        return P.obj(t) && Jr(t, n), P.obj(r) && Jr(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function Hr(e) {
        let t = Yr(e);
        return P.und(t.default) && (t.default = mr(t)), t
      }

      function Jr(e, t) {
        E(e, ((e, r) => null != e && t.add(r)))
      }
      var Kr = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function en(e, t, r) {
        e.animation[r] = t[r] !== fr(t, r) ? hr(t[r], e.key) : void 0
      }

      function tn(e, t) {
        for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var rn = ["onStart", "onChange", "onRest"],
        nn = 1,
        an = class {
          constructor(e, t) {
            ur(this, "id", nn++), ur(this, "springs", {}), ur(this, "queue", []), ur(this, "ref", void 0), ur(this, "_flush", void 0), ur(this, "_initialProps", void 0), ur(this, "_lastAsyncId", 0), ur(this, "_active", new Set), ur(this, "_changed", new Set), ur(this, "_started", !1), ur(this, "_item", void 0), ur(this, "_state", {
              paused: !1,
              pauseQueue: new Set,
              resumeQueue: new Set,
              timeouts: new Set
            }), ur(this, "_events", {
              onStart: new Map,
              onChange: new Map,
              onRest: new Map
            }), this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({
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
            let e = {};
            return this.each(((t, r) => e[r] = t.get())), e
          }
          set(e) {
            for (let t in e) {
              let r = e[t];
              P.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(Yr(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = O(e).map(Yr) : this.queue = [], this._flush ? this._flush(this, t) : (hn(this, t), on(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              let r = this.springs;
              I(O(t), (t => r[t].stop(!!e)))
            } else zr(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (P.und(e)) this.start({
              pause: !0
            });
            else {
              let t = this.springs;
              I(O(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (P.und(e)) this.start({
              pause: !1
            });
            else {
              let t = this.springs;
              I(O(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            E(this.springs, e)
          }
          _onFrame() {
            let {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, i = this._changed.size > 0;
            (n && !this._started || i && !this._started) && (this._started = !0, R(e, (e => {
              let [t, r] = e;
              r.value = this.get(), t(r, this, this._item)
            })));
            let a = !n && this._started,
              o = i || a && r.size ? this.get() : null;
            i && t.size && R(t, (e => {
              let [t, r] = e;
              r.value = o, t(r, this, this._item)
            })), a && (this._started = !1, R(r, (e => {
              let [t, r] = e;
              r.value = o, t(r, this, this._item)
            })))
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

      function on(e, t) {
        return Promise.all(t.map((t => sn(e, t)))).then((t => Or(e, t)))
      }
      async function sn(e, t, r) {
        let {
          keys: n,
          to: a,
          from: o,
          loop: s,
          onRest: l,
          onResolve: u
        } = t, d = P.obj(t.default) && t.default;
        s && (t.loop = !1), !1 === a && (t.to = null), !1 === o && (t.from = null);
        let c = P.arr(a) || P.fun(a) ? a : void 0;
        c ? (t.to = void 0, t.onRest = void 0, d && (d.onRest = void 0)) : I(rn, (r => {
          let n = t[r];
          if (P.fun(n)) {
            let i = e._events[r];
            t[r] = e => {
              let {
                finished: t,
                cancelled: r
              } = e, a = i.get(n);
              a ? (t || (a.finished = !1), r && (a.cancelled = !0)) : i.set(n, {
                value: null,
                finished: t || !1,
                cancelled: r || !1
              })
            }, d && (d[r] = t[r])
          }
        }));
        let h = e._state;
        t.pause === !h.paused ? (h.paused = t.pause, V(t.pause ? h.pauseQueue : h.resumeQueue)) : h.paused && (t.pause = !0);
        let f = (n || Object.keys(e.springs)).map((r => e.springs[r].start(t))),
          p = !0 === t.cancel || !0 === fr(t, "cancel");
        (c || p && h.asyncId) && f.push(Er(++e._lastAsyncId, {
          props: t,
          state: h,
          actions: {
            pause: k,
            resume: k,
            start(t, r) {
              p ? (zr(h, e._lastAsyncId), r(Cr(e))) : (t.onRest = l, r(Vr(c, t, h, e)))
            }
          }
        })), h.paused && await new Promise((e => {
          h.resumeQueue.add(e)
        }));
        let m = Or(e, await Promise.all(f));
        if (s && m.finished && (!r || !m.noop)) {
          let r = Xr(t, s, a);
          if (r) return hn(e, [r]), sn(e, r, !0)
        }
        return u && i.batchedUpdates((() => u(m, e, e.item))), m
      }

      function ln(e, t) {
        let r = {
          ...e.springs
        };
        return t && I(O(t), (e => {
          P.und(e.keys) && (e = Yr(e)), P.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), cn(r, e, (e => dn(e)))
        })), un(e, r), r
      }

      function un(e, t) {
        E(t, ((t, r) => {
          e.springs[r] || (e.springs[r] = t, Ee(t, e))
        }))
      }

      function dn(e, t) {
        let r = new Gr;
        return r.key = e, t && Ee(r, t), r
      }

      function cn(e, t, r) {
        t.keys && I(t.keys, (n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        }))
      }

      function hn(e, t) {
        I(t, (t => {
          cn(e.springs, t, (t => dn(t, e)))
        }))
      }
      var fn = e => {
          let {
            children: t,
            ...r
          } = e, n = (0, _.useContext)(pn), i = r.pause || !!n.pause, a = r.immediate || !!n.immediate;
          r = function(e, t) {
            let [r] = (0, _.useState)((() => ({
              inputs: t,
              result: e()
            }))), n = (0, _.useRef)(), i = n.current, a = i;
            return a ? Boolean(t && a.inputs && function(e, t) {
              if (e.length !== t.length) return !1;
              for (let r = 0; r < e.length; r++)
                if (e[r] !== t[r]) return !1;
              return !0
            }(t, a.inputs)) || (a = {
              inputs: t,
              result: e()
            }) : a = r, (0, _.useEffect)((() => {
              n.current = a, i == r && (r.inputs = r.result = void 0)
            }), [a]), a.result
          }((() => ({
            pause: i,
            immediate: a
          })), [i, a]);
          let {
            Provider: o
          } = pn;
          return _.createElement(o, {
            value: r
          }, t)
        },
        pn = function(e, t) {
          return Object.assign(e, _.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e
        }(fn, {});
      fn.Provider = pn.Provider, fn.Consumer = pn.Consumer;
      var mn = () => {
        let e = [],
          t = function(t) {
            De(`${Ue}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            let n = [];
            return I(e, ((e, i) => {
              if (P.und(t)) n.push(e.start());
              else {
                let a = r(t, e, i);
                a && n.push(e.start(a))
              }
            })), n
          };
        t.current = e, t.add = function(t) {
          e.includes(t) || e.push(t)
        }, t.delete = function(t) {
          let r = e.indexOf(t);
          ~r && e.splice(r, 1)
        }, t.pause = function() {
          return I(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return I(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          I(e, ((e, r) => {
            let n = P.fun(t) ? t(r, e) : t;
            n && e.set(n)
          }))
        }, t.start = function(t) {
          let r = [];
          return I(e, ((e, n) => {
            if (P.und(t)) r.push(e.start());
            else {
              let i = this._getProps(t, e, n);
              i && r.push(e.start(i))
            }
          })), r
        }, t.stop = function() {
          return I(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return I(e, ((e, r) => e.update(this._getProps(t, e, r)))), this
        };
        let r = function(e, t, r) {
          return P.fun(e) ? e(r, t) : e
        };
        return t._getProps = r, t
      };

      function gn(e, t, r) {
        let n = P.fun(t) && t;
        n && !r && (r = []);
        let i = (0, _.useMemo)((() => n || 3 == arguments.length ? mn() : void 0), []),
          a = (0, _.useRef)(0),
          o = ot(),
          s = (0, _.useMemo)((() => ({
            ctrls: [],
            queue: [],
            flush(e, t) {
              let r = ln(e, t);
              return a.current > 0 && !s.queue.length && !Object.keys(r).some((t => !e.springs[t])) ? on(e, t) : new Promise((n => {
                un(e, r), s.queue.push((() => {
                  n(on(e, t))
                })), o()
              }))
            }
          })), []),
          l = (0, _.useRef)([...s.ctrls]),
          u = [],
          d = ut(e) || 0;

        function c(e, r) {
          for (let i = e; i < r; i++) {
            let e = l.current[i] || (l.current[i] = new an(null, s.flush)),
              r = n ? n(i, e) : t[i];
            r && (u[i] = Hr(r))
          }
        }(0, _.useMemo)((() => {
          I(l.current.slice(e, d), (e => {
            Sr(e, i), e.stop(!0)
          })), l.current.length = e, c(d, e)
        }), [e]), (0, _.useMemo)((() => {
          c(0, Math.min(d, e))
        }), r);
        let h = l.current.map(((e, t) => ln(e, u[t]))),
          f = (0, _.useContext)(fn),
          p = ut(f),
          m = f !== p && br(f);
        it((() => {
          a.current++, s.ctrls = l.current;
          let {
            queue: e
          } = s;
          e.length && (s.queue = [], I(e, (e => e()))), I(l.current, ((e, t) => {
            i?.add(e), m && e.start({
              default: f
            });
            let r = u[t];
            r && (xr(e, r.ref), e.ref ? e.queue.push(r) : e.start(r))
          }))
        })), st((() => () => {
          I(s.ctrls, (e => e.stop(!0)))
        }));
        let g = h.map((e => ({
          ...e
        })));
        return i ? [g, i] : g
      }

      function vn(e, t) {
        let r = P.fun(e),
          [
            [n], i
          ] = gn(1, r ? e : [e], r ? t || [] : t);
        return r || 2 == arguments.length ? [n, i] : n
      }
      var yn = () => mn(),
        wn = () => (0, _.useState)(yn)[0],
        bn = (e, t) => {
          let r = function(e) {
            let t = (0, _.useRef)(null);
            return null === t.current && (t.current = e()), t.current
          }((() => new Gr(e, t)));
          return st((() => () => {
            r.stop()
          })), r
        };

      function _n(e, t, r) {
        let n = P.fun(t) && t;
        n && !r && (r = []);
        let i, a = !0,
          o = gn(e, ((e, r) => {
            let o = n ? n(e, r) : t;
            return i = o.ref, a = a && o.reverse, o
          }), r || [{}]);
        if (it((() => {
            I(o[1].current, ((e, t) => {
              let r = o[1].current[t + (a ? 1 : -1)];
              xr(e, i), e.ref ? r && e.update({
                to: r.springs
              }) : r ? e.start({
                to: r.springs
              }) : e.start()
            }))
          }), r), n || 3 == arguments.length) {
          let e = i ?? o[1];
          return e._getProps = (t, r, n) => {
            let i = P.fun(t) ? t(n, r) : t;
            if (i) {
              let t = e.current[n + (i.reverse ? 1 : -1)];
              return t && (i.to = t.springs), i
            }
          }, o
        }
        return o[0]
      }

      function Sn(e, t, r) {
        let n = P.fun(t) && t,
          {
            reset: i,
            sort: a,
            trail: o = 0,
            expires: s = !0,
            exitBeforeEnter: l = !1,
            onDestroyed: u,
            ref: d,
            config: c
          } = n ? n() : t,
          h = (0, _.useMemo)((() => n || 3 == arguments.length ? mn() : void 0), []),
          f = O(e),
          p = [],
          m = (0, _.useRef)(null),
          g = i ? null : m.current;
        it((() => {
          m.current = p
        })), st((() => (I(p, (e => {
          h?.add(e.ctrl), e.ctrl.ref = h
        })), () => {
          I(m.current, (e => {
            e.expired && clearTimeout(e.expirationId), Sr(e.ctrl, h), e.ctrl.stop(!0)
          }))
        })));
        let v = function(e, t, r) {
            let {
              key: n,
              keys: i = n
            } = t;
            if (null === i) {
              let t = new Set;
              return e.map((e => {
                let n = r && r.find((r => r.item === e && "leave" !== r.phase && !t.has(r)));
                return n ? (t.add(n), n.key) : xn++
              }))
            }
            return P.und(i) ? e : P.fun(i) ? e.map(i) : O(i)
          }(f, n ? n() : t, g),
          y = i && m.current || [];
        it((() => I(y, (e => {
          let {
            ctrl: t,
            item: r,
            key: n
          } = e;
          Sr(t, h), dr(u, r, n)
        }))));
        let w = [];
        if (g && I(g, ((e, t) => {
            e.expired ? (clearTimeout(e.expirationId), y.push(e)) : ~(t = w[t] = v.indexOf(e.key)) && (p[t] = e)
          })), I(f, ((e, t) => {
            p[t] || (p[t] = {
              key: v[t],
              item: e,
              phase: "mount",
              ctrl: new an
            }, p[t].ctrl.item = e)
          })), w.length) {
          let e = -1,
            {
              leave: r
            } = n ? n() : t;
          I(w, ((t, n) => {
            let i = g[n];
            ~t ? (e = p.indexOf(i), p[e] = {
              ...i,
              item: f[t]
            }) : r && p.splice(++e, 0, i)
          }))
        }
        P.fun(a) && p.sort(((e, t) => a(e.item, t.item)));
        let b = -o,
          S = ot(),
          x = mr(t),
          A = new Map,
          k = (0, _.useRef)(new Map),
          M = (0, _.useRef)(!1);
        I(p, ((e, r) => {
          let i, a, u = e.key,
            h = e.phase,
            f = n ? n() : t,
            p = dr(f.delay || 0, u);
          if ("mount" == h) i = f.enter, a = "enter";
          else {
            let e = v.indexOf(u) < 0;
            if ("leave" != h)
              if (e) i = f.leave, a = "leave";
              else {
                if (!(i = f.update)) return;
                a = "update"
              }
            else {
              if (e) return;
              i = f.enter, a = "enter"
            }
          }
          if (i = dr(i, e.item, r), i = P.obj(i) ? yr(i) : {
              to: i
            }, !i.config) {
            let t = c || x.config;
            i.config = dr(t, e.item, r, a)
          }
          b += o;
          let y = {
            ...x,
            delay: p + b,
            ref: d,
            immediate: f.immediate,
            reset: !1,
            ...i
          };
          if ("enter" == a && P.und(y.from)) {
            let i = n ? n() : t,
              a = P.und(i.initial) || g ? i.from : i.initial;
            y.from = dr(a, e.item, r)
          }
          let {
            onResolve: w
          } = y;
          y.onResolve = e => {
            dr(w, e);
            let t = m.current,
              r = t.find((e => e.key === u));
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              let e = t.every((e => e.ctrl.idle));
              if ("leave" == r.phase) {
                let t = dr(s, r.item);
                if (!1 !== t) {
                  let n = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(S, n)))
                }
              }
              e && t.some((e => e.expired)) && (k.current.delete(r), l && (M.current = !0), S())
            }
          };
          let _ = ln(e.ctrl, y);
          "leave" === a && l ? k.current.set(e, {
            phase: a,
            springs: _,
            payload: y
          }) : A.set(e, {
            phase: a,
            springs: _,
            payload: y
          })
        }));
        let E = (0, _.useContext)(fn),
          R = ut(E),
          j = E !== R && br(E);
        it((() => {
          j && I(p, (e => {
            e.ctrl.start({
              default: E
            })
          }))
        }), [E]), I(A, ((e, t) => {
          if (k.current.size) {
            let e = p.findIndex((e => e.key === t.key));
            p.splice(e, 1)
          }
        })), it((() => {
          I(k.current.size ? k.current : A, ((e, t) => {
            let {
              phase: r,
              payload: n
            } = e, {
              ctrl: i
            } = t;
            t.phase = r, h?.add(i), j && "enter" == r && i.start({
              default: E
            }), n && (xr(i, n.ref), !i.ref && !h || M.current ? (i.start(n), M.current && (M.current = !1)) : i.update(n))
          }))
        }), i ? void 0 : r);
        let C = e => _.createElement(_.Fragment, null, p.map(((t, r) => {
          let {
            springs: n
          } = A.get(t) || t.ctrl, i = e({
            ...n
          }, t.item, t, r);
          return i && i.type ? _.createElement(i.type, {
            ...i.props,
            key: P.str(t.key) || P.num(t.key) ? t.key : t.ctrl.id,
            ref: i.ref
          }) : i
        })));
        return h ? [C, h] : C
      }
      var xn = 1,
        An = function() {
          let {
            container: e,
            ...t
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [r, n] = vn((() => ({
            scrollX: 0,
            scrollY: 0,
            scrollXProgress: 0,
            scrollYProgress: 0,
            ...t
          })), []);
          return it((() => {
            let t = function(e) {
              let {
                container: t = document.documentElement
              } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = rt.get(t);
              r || (r = new Set, rt.set(t, r));
              let n = new class {
                constructor(e, t) {
                  S(this, "callback", void 0), S(this, "container", void 0), S(this, "info", void 0), S(this, "createAxis", (() => ({
                    current: 0,
                    progress: 0,
                    scrollLength: 0
                  }))), S(this, "updateAxis", (e => {
                    let t = this.info[e],
                      {
                        length: r,
                        position: n
                      } = Ke[e];
                    t.current = this.container[`scroll${n}`], t.scrollLength = this.container["scroll" + r] - this.container["client" + r], t.progress = ((e, t, r) => t - 0 == 0 ? 1 : (r - 0) / (t - 0))(0, t.scrollLength, t.current)
                  })), S(this, "update", (() => {
                    this.updateAxis("x"), this.updateAxis("y")
                  })), S(this, "sendEvent", (() => {
                    this.callback(this.info)
                  })), S(this, "advance", (() => {
                    this.update(), this.sendEvent()
                  })), this.callback = e, this.container = t, this.info = {
                    time: 0,
                    x: this.createAxis(),
                    y: this.createAxis()
                  }
                }
              }(e, t);
              if (r.add(n), !et.has(t)) {
                let e = () => (r?.forEach((e => e.advance())), !0);
                et.set(t, e);
                let n = nt(t);
                window.addEventListener("resize", e, {
                  passive: !0
                }), t !== document.documentElement && tt.set(t, Je(e, {
                  container: t
                })), n.addEventListener("scroll", e, {
                  passive: !0
                })
              }
              let a = et.get(t);
              return i(a), () => {
                i.cancel(a);
                let e = rt.get(t);
                if (!e || (e.delete(n), e.size)) return;
                let r = et.get(t);
                et.delete(t), r && (nt(t).removeEventListener("scroll", r), window.removeEventListener("resize", r), tt.get(t)?.())
              }
            }((e => {
              let {
                x: t,
                y: r
              } = e;
              n.start({
                scrollX: t.current,
                scrollXProgress: t.progress,
                scrollY: r.current,
                scrollYProgress: r.progress
              })
            }), {
              container: e?.current || void 0
            });
            return () => {
              I(Object.values(r), (e => e.stop())), t()
            }
          }), []), r
        },
        kn = e => {
          let {
            container: t,
            ...r
          } = e, [n, i] = vn((() => ({
            width: 0,
            height: 0,
            ...r
          })), []);
          return it((() => {
            let e = Je((e => {
              let {
                width: t,
                height: r
              } = e;
              i.start({
                width: t,
                height: r,
                immediate: 0 === n.width.get() || 0 === n.height.get()
              })
            }), {
              container: t?.current || void 0
            });
            return () => {
              I(Object.values(n), (e => e.stop())), e()
            }
          }), []), n
        },
        Pn = {
          any: 0,
          all: 1
        };

      function Mn(e, t) {
        let [r, n] = (0, _.useState)(!1), i = (0, _.useRef)(), a = P.fun(e) && e, o = a ? a() : {}, {
          to: s = {},
          from: l = {},
          ...u
        } = o, d = a ? t : e, [c, h] = vn((() => ({
          from: l,
          ...u
        })), []);
        return it((() => {
          let e = i.current,
            {
              root: t,
              once: a,
              amount: o = "any",
              ...u
            } = d ?? {};
          if (!e || a && r || typeof IntersectionObserver > "u") return;
          let c = new WeakMap,
            f = new IntersectionObserver((e => {
              e.forEach((e => {
                let t = c.get(e.target);
                if (e.isIntersecting !== Boolean(t))
                  if (e.isIntersecting) {
                    let t = (s && h.start(s), n(!0), a ? void 0 : () => {
                      l && h.start(l), n(!1)
                    });
                    P.fun(t) ? c.set(e.target, t) : f.unobserve(e.target)
                  } else t && (t(), c.delete(e.target))
              }))
            }), {
              root: t && t.current || void 0,
              threshold: "number" == typeof o || Array.isArray(o) ? o : Pn[o],
              ...u
            });
          return f.observe(e), () => f.unobserve(e)
        }), [d]), a ? [i, c] : [i, r]
      }

      function In(e) {
        let {
          children: t,
          ...r
        } = e;
        return t(vn(r))
      }

      function En(e) {
        let {
          items: t,
          children: r,
          ...n
        } = e, i = _n(t.length, n);
        return t.map(((e, t) => {
          let n = r(e, t);
          return P.fun(n) ? n(i[t]) : n
        }))
      }

      function On(e) {
        let {
          items: t,
          children: r,
          ...n
        } = e;
        return Sn(t, n)(r)
      }
      var Rn = class extends Tr {
        constructor(e, t) {
          super(), ur(this, "key", void 0), ur(this, "idle", !0), ur(this, "calc", void 0), ur(this, "_active", new Set), this.source = e, this.calc = fe(...t);
          let r = this._get(),
            n = sr(r);
          Jt(this, n.create(r))
        }
        advance(e) {
          let t = this._get();
          M(t, this.get()) || (Ht(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Cn(this._active) && Vn(this)
        }
        _get() {
          let e = P.arr(this.source) ? this.source.map(Ae) : O(Ae(this.source));
          return this.calc(...e)
        }
        _start() {
          this.idle && !Cn(this._active) && (this.idle = !1, I(Kt(this), (e => {
            e.done = !1
          })), A.skipAnimation ? (i.batchedUpdates((() => this.advance())), Vn(this)) : N.start(this))
        }
        _attach() {
          let e = 1;
          I(O(this.source), (t => {
            xe(t) && Ee(t, this), $r(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
          })), this.priority = e, this._start()
        }
        _detach() {
          I(O(this.source), (e => {
            xe(e) && Oe(e, this)
          })), this._active.clear(), Vn(this)
        }
        eventObserved(e) {
          "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = O(this.source).reduce(((e, t) => Math.max(e, ($r(t) ? t.priority : 0) + 1)), 0))
        }
      };

      function jn(e) {
        return !1 !== e.idle
      }

      function Cn(e) {
        return !e.size || Array.from(e).every(jn)
      }

      function Vn(e) {
        e.idle || (e.idle = !0, I(Kt(e), (e => {
          e.done = !0
        })), Pe(e, {
          type: "idle",
          parent: e
        }))
      }
      var zn = function(e) {
          for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
          return new Rn(e, r)
        },
        Fn = function(e) {
          for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
          return Ne(), new Rn(e, r)
        };
      A.assign({
        createStringInterpolator: e => {
          Re || (Re = F ? new RegExp(`(${Object.keys(F).join("|")})(?!\\w)`, "g") : /^\b$/);
          let t = e.output.map((e => Ae(e).replace(qe, $e).replace(Ve, he).replace(Re, he))),
            r = t.map((e => e.match(Ce).map(Number))),
            n = r[0].map(((e, t) => r.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))).map((t => fe({
              ...e,
              output: t
            })));
          return e => {
            let r = !ze.test(t[0]) && t.find((e => ze.test(e)))?.replace(Ce, ""),
              i = 0;
            return t[0].replace(Ce, (() => `${n[i++](e)}${r||""}`)).replace(Fe, Te)
          }
        },
        to: (e, t) => new Rn(e, t)
      });
      var qn = N.advance,
        $n = r(3468),
        Ln = ti(),
        Tn = e => Hn(e, Ln),
        Un = ti();
      Tn.write = e => Hn(e, Un);
      var Wn = ti();
      Tn.onStart = e => Hn(e, Wn);
      var Qn = ti();
      Tn.onFrame = e => Hn(e, Qn);
      var Nn = ti();
      Tn.onFinish = e => Hn(e, Nn);
      var Dn = [];
      Tn.setTimeout = (e, t) => {
        let r = Tn.now() + t,
          n = () => {
            let e = Dn.findIndex((e => e.cancel == n));
            ~e && Dn.splice(e, 1), Xn -= ~e ? 1 : 0
          },
          i = {
            time: r,
            handler: e,
            cancel: n
          };
        return Dn.splice(Bn(r), 0, i), Xn += 1, Jn(), i
      };
      var Bn = e => ~(~Dn.findIndex((t => t.time > e)) || ~Dn.length);
      Tn.cancel = e => {
        Wn.delete(e), Qn.delete(e), Nn.delete(e), Ln.delete(e), Un.delete(e)
      }, Tn.sync = e => {
        Yn = !0, Tn.batchedUpdates(e), Yn = !1
      }, Tn.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n() {
          for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
          t = n, Tn.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          Wn.delete(r), t = null
        }, n
      };
      var Gn = typeof window < "u" ? window.requestAnimationFrame : () => {};
      Tn.use = e => Gn = e, Tn.now = typeof performance < "u" ? () => performance.now() : Date.now, Tn.batchedUpdates = e => e(), Tn.catch = console.error, Tn.frameLoop = "always", Tn.advance = () => {
        "demand" !== Tn.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : ei()
      };
      var Zn = -1,
        Xn = 0,
        Yn = !1;

      function Hn(e, t) {
        Yn ? (t.delete(e), e(0)) : (t.add(e), Jn())
      }

      function Jn() {
        Zn < 0 && (Zn = 0, "demand" !== Tn.frameLoop && Gn(Kn))
      }

      function Kn() {
        ~Zn && (Gn(Kn), Tn.batchedUpdates(ei))
      }

      function ei() {
        let e = Zn;
        Zn = Tn.now();
        let t = Bn(Zn);
        t && (ri(Dn.splice(0, t), (e => e.handler())), Xn -= t), Xn ? (Wn.flush(), Ln.flush(e ? Math.min(64, Zn - e) : 16.667), Qn.flush(), Un.flush(), Nn.flush()) : Zn = -1
      }

      function ti() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Xn += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Xn -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Xn -= t.size, ri(t, (t => t(r) && e.add(t))), Xn += e.size, t = e)
          }
        }
      }

      function ri(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            Tn.catch(e)
          }
        }))
      }

      function ni(e, t, r) {
        return (t = function(e) {
          var t = function(e, t) {
            if ("object" != typeof e || null === e) return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
              var n = r.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var ii = Object.defineProperty;
      ((e, t) => {
        for (var r in t) ii(e, r, {
          get: t[r],
          enumerable: !0
        })
      })({}, {
        assign: () => fi,
        colors: () => di,
        createStringInterpolator: () => ai,
        skipAnimation: () => ci,
        to: () => oi,
        willAdvance: () => hi
      });
      var ai, oi, si = {
          arr: Array.isArray,
          obj: e => !!e && "Object" === e.constructor.name,
          fun: e => "function" == typeof e,
          str: e => "string" == typeof e,
          num: e => "number" == typeof e,
          und: e => void 0 === e
        },
        li = (e, t) => e.forEach(t),
        ui = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        di = null,
        ci = !1,
        hi = function() {},
        fi = e => {
          e.to && (oi = e.to), e.now && (Tn.now = e.now), void 0 !== e.colors && (di = e.colors), null != e.skipAnimation && (ci = e.skipAnimation), e.createStringInterpolator && (ai = e.createStringInterpolator), e.requestAnimationFrame && Tn.use(e.requestAnimationFrame), e.batchedUpdates && (Tn.batchedUpdates = e.batchedUpdates), e.willAdvance && (hi = e.willAdvance), e.frameLoop && (Tn.frameLoop = e.frameLoop)
        };
      new Set;
      var pi = "[-+]?\\d*\\.?\\d+",
        mi = pi + "%";

      function gi() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var vi = new RegExp("rgb" + gi(pi, pi, pi)),
        yi = new RegExp("rgba" + gi(pi, pi, pi, pi)),
        wi = new RegExp("hsl" + gi(pi, mi, mi)),
        bi = new RegExp("hsla" + gi(pi, mi, mi, pi)),
        _i = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Si = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        xi = /^#([0-9a-fA-F]{6})$/,
        Ai = /^#([0-9a-fA-F]{8})$/;

      function ki(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function Pi(e, t, r) {
        let n = r < .5 ? r * (1 + t) : r + t - r * t,
          i = 2 * r - n,
          a = ki(i, n, e + 1 / 3),
          o = ki(i, n, e),
          s = ki(i, n, e - 1 / 3);
        return Math.round(255 * a) << 24 | Math.round(255 * o) << 16 | Math.round(255 * s) << 8
      }

      function Mi(e) {
        let t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function Ii(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Ei(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Oi(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function Ri(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = xi.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : di && void 0 !== di[e] ? di[e] : (t = vi.exec(e)) ? (Mi(t[1]) << 24 | Mi(t[2]) << 16 | Mi(t[3]) << 8 | 255) >>> 0 : (t = yi.exec(e)) ? (Mi(t[1]) << 24 | Mi(t[2]) << 16 | Mi(t[3]) << 8 | Ei(t[4])) >>> 0 : (t = _i.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Ai.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Si.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = wi.exec(e)) ? (255 | Pi(Ii(t[1]), Oi(t[2]), Oi(t[3]))) >>> 0 : (t = bi.exec(e)) ? (Pi(Ii(t[1]), Oi(t[2]), Oi(t[3])) | Ei(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var ji = (e, t, r) => {
        if (si.fun(e)) return e;
        if (si.arr(e)) return ji({
          range: e,
          output: t,
          extrapolate: r
        });
        if (si.str(e.output[0])) return ai(e);
        let n = e,
          i = n.output,
          a = n.range || [0, 1],
          o = n.extrapolateLeft || n.extrapolate || "extend",
          s = n.extrapolateRight || n.extrapolate || "extend",
          l = n.easing || (e => e);
        return e => {
          let t = function(e, t) {
            for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
            return r - 1
          }(e, a);
          return function(e, t, r, n, i, a, o, s, l) {
            let u = l ? l(e) : e;
            if (u < t) {
              if ("identity" === o) return u;
              "clamp" === o && (u = t)
            }
            if (u > r) {
              if ("identity" === s) return u;
              "clamp" === s && (u = r)
            }
            return n === i ? n : t === r ? e <= t ? n : i : (t === -1 / 0 ? u = -u : r === 1 / 0 ? u -= t : u = (u - t) / (r - t), u = a(u), n === -1 / 0 ? u = -u : i === 1 / 0 ? u += n : u = u * (i - n) + n, u)
          }(e, a[t], a[t + 1], i[t], i[t + 1], l, o, s, n.map)
        }
      };
      Math.PI, Math.PI;
      var Ci, Vi = Symbol.for("FluidValue.get"),
        zi = Symbol.for("FluidValue.observers"),
        Fi = e => Boolean(e && e[Vi]),
        qi = e => e && e[Vi] ? e[Vi]() : e,
        $i = class {
          constructor(e) {
            if (ni(this, Vi, void 0), ni(this, zi, void 0), !e && !(e = this.get)) throw Error("Unknown getter");
            Li(this, e)
          }
        },
        Li = (e, t) => Ti(e, Vi, t),
        Ti = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        Ui = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Wi = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Qi = new RegExp(`(${Ui.source})(%|[a-z]+)`, "i"),
        Ni = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Di = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Bi = e => {
          let [t, r] = Gi(e);
          if (!t || ui()) return e;
          let n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          return n ? n.trim() : r && r.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(r) || e : r && Di.test(r) ? Bi(r) : r || e
        },
        Gi = e => {
          let t = Di.exec(e);
          if (!t) return [, ];
          let [, r, n] = t;
          return [r, n]
        },
        Zi = (e, t, r, n, i) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,
        Xi = e => {
          let t = e,
            r = !1;
          if ("function" != typeof t) throw new TypeError("react-spring: once requires a function parameter");
          return function() {
            r || (t(...arguments), r = !0)
          }
        };
      Xi(console.warn), Xi(console.warn), new WeakMap, new Set, new WeakMap, new WeakMap, new WeakMap, ui() ? _.useEffect : _.useLayoutEffect;
      var Yi = ha(),
        Hi = e => la(e, Yi),
        Ji = ha();
      Hi.write = e => la(e, Ji);
      var Ki = ha();
      Hi.onStart = e => la(e, Ki);
      var ea = ha();
      Hi.onFrame = e => la(e, ea);
      var ta = ha();
      Hi.onFinish = e => la(e, ta);
      var ra = [];
      Hi.setTimeout = (e, t) => {
        let r = Hi.now() + t,
          n = () => {
            let e = ra.findIndex((e => e.cancel == n));
            ~e && ra.splice(e, 1), oa -= ~e ? 1 : 0
          },
          i = {
            time: r,
            handler: e,
            cancel: n
          };
        return ra.splice(na(r), 0, i), oa += 1, ua(), i
      };
      var na = e => ~(~ra.findIndex((t => t.time > e)) || ~ra.length);
      Hi.cancel = e => {
        Ki.delete(e), ea.delete(e), ta.delete(e), Yi.delete(e), Ji.delete(e)
      }, Hi.sync = e => {
        sa = !0, Hi.batchedUpdates(e), sa = !1
      }, Hi.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n() {
          for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
          t = n, Hi.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          Ki.delete(r), t = null
        }, n
      };
      var ia = typeof window < "u" ? window.requestAnimationFrame : () => {};
      Hi.use = e => ia = e, Hi.now = typeof performance < "u" ? () => performance.now() : Date.now, Hi.batchedUpdates = e => e(), Hi.catch = console.error, Hi.frameLoop = "always", Hi.advance = () => {
        "demand" !== Hi.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : ca()
      };
      var aa = -1,
        oa = 0,
        sa = !1;

      function la(e, t) {
        sa ? (t.delete(e), e(0)) : (t.add(e), ua())
      }

      function ua() {
        aa < 0 && (aa = 0, "demand" !== Hi.frameLoop && ia(da))
      }

      function da() {
        ~aa && (ia(da), Hi.batchedUpdates(ca))
      }

      function ca() {
        let e = aa;
        aa = Hi.now();
        let t = na(aa);
        t && (fa(ra.splice(0, t), (e => e.handler())), oa -= t), oa ? (Ki.flush(), Yi.flush(e ? Math.min(64, aa - e) : 16.667), ea.flush(), Ji.flush(), ta.flush()) : aa = -1
      }

      function ha() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            oa += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (oa -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, oa -= t.size, fa(t, (t => t(r) && e.add(t))), oa += e.size, t = e)
          }
        }
      }

      function fa(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            Hi.catch(e)
          }
        }))
      }
      var pa = Object.defineProperty;
      ((e, t) => {
        for (var r in t) pa(e, r, {
          get: t[r],
          enumerable: !0
        })
      })({}, {
        assign: () => xa,
        colors: () => ba,
        createStringInterpolator: () => ya,
        skipAnimation: () => _a,
        to: () => wa,
        willAdvance: () => Sa
      });
      var ma = {
          arr: Array.isArray,
          obj: e => !!e && "Object" === e.constructor.name,
          fun: e => "function" == typeof e,
          str: e => "string" == typeof e,
          num: e => "number" == typeof e,
          und: e => void 0 === e
        },
        ga = (e, t) => e.forEach(t);

      function va(e, t, r) {
        if (ma.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (let n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var ya, wa, ba = null,
        _a = !1,
        Sa = function() {},
        xa = e => {
          e.to && (wa = e.to), e.now && (Hi.now = e.now), void 0 !== e.colors && (ba = e.colors), null != e.skipAnimation && (_a = e.skipAnimation), e.createStringInterpolator && (ya = e.createStringInterpolator), e.requestAnimationFrame && Hi.use(e.requestAnimationFrame), e.batchedUpdates && (Hi.batchedUpdates = e.batchedUpdates), e.willAdvance && (Sa = e.willAdvance), e.frameLoop && (Hi.frameLoop = e.frameLoop)
        };
      new Set;
      var Aa = "[-+]?\\d*\\.?\\d+",
        ka = Aa + "%";

      function Pa() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      new RegExp("rgb" + Pa(Aa, Aa, Aa)), new RegExp("rgba" + Pa(Aa, Aa, Aa, Aa)), new RegExp("hsl" + Pa(Aa, ka, ka)), new RegExp("hsla" + Pa(Aa, ka, ka, Aa)), Math.PI, Math.PI;
      var Ma = Symbol.for("FluidValue.get"),
        Ia = Symbol.for("FluidValue.observers"),
        Ea = e => Boolean(e && e[Ma]);

      function Oa(e, t) {
        let r = e[Ia];
        if (r && r.has(t)) {
          let n = r.size - 1;
          n ? r.delete(t) : e[Ia] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var Ra = (new RegExp(`(${/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g.source})(%|[a-z]+)`, "i"), "react-spring: "),
        ja = e => {
          let t = e,
            r = !1;
          if ("function" != typeof t) throw new TypeError(`${Ra}once requires a function parameter`);
          return function() {
            r || (t(...arguments), r = !0)
          }
        };
      ja(console.warn), ja(console.warn), new WeakMap, new Set, new WeakMap, new WeakMap, new WeakMap;
      var Ca = typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent) ? _.useEffect : _.useLayoutEffect;
      var Va = [];
      var za = Symbol.for("Animated:node"),
        Fa = class {
          constructor() {
            var e, t, r;
            e = this, r = void 0, (t = function(e) {
              var t = function(e, t) {
                if ("object" != typeof e || null === e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(e, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
              }(e);
              return "symbol" == typeof t ? t : String(t)
            }(t = "payload")) in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = r, ((e, t) => {
              ((e, t, r) => {
                Object.defineProperty(e, t, {
                  value: r,
                  writable: !0,
                  configurable: !0
                })
              })(e, za, t)
            })(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        qa = {
          dependencies: null
        },
        $a = class extends Fa {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            let t = {};
            return va(this.source, ((r, n) => {
              (e => !!e && e[za] === e)(r) ? t[n] = r.getValue(e): Ea(r) ? t[n] = (e => e && e[Ma] ? e[Ma]() : e)(r) : e || (t[n] = r)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && ga(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              let t = new Set;
              return va(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            qa.dependencies && Ea(e) && qa.dependencies.add(e);
            let t = (e => e && e[za] && e[za].getPayload())(e);
            t && ga(t, (e => this.add(e)))
          }
        },
        La = (e, t) => {
          let r = !ma.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, _.forwardRef)(((n, i) => {
            let a = (0, _.useRef)(null),
              o = r && (0, _.useCallback)((e => {
                a.current = function(e, t) {
                  return e && (ma.fun(e) ? e(t) : e.current = t), t
                }(i, e)
              }), [i]),
              [s, l] = function(e, t) {
                let r = new Set;
                return qa.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new $a(e), qa.dependencies = null, [e, r]
              }(n, t),
              u = function() {
                let e = (0, _.useState)()[1],
                  t = (() => {
                    let e = (0, _.useRef)(!1);
                    return Ca((() => (e.current = !0, () => {
                      e.current = !1
                    })), []), e
                  })();
                return () => {
                  t.current && e(Math.random())
                }
              }(),
              d = () => {
                let e = a.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && u()
              },
              c = new Ta(d, l),
              h = (0, _.useRef)();
            Ca((() => (h.current = c, ga(l, (e => function(e, t) {
              if (e[Ma]) {
                let r = e[Ia];
                r || ((e, t, r) => {
                  Object.defineProperty(e, t, {
                    value: r,
                    writable: !0,
                    configurable: !0
                  })
                })(e, Ia, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
              }
              return t
            }(e, c))), () => {
              h.current && (ga(h.current.deps, (e => Oa(e, h.current))), Hi.cancel(h.current.update))
            }))), (0, _.useEffect)(d, []), (0, _.useEffect)((() => () => {
              let e = h.current;
              ga(e.deps, (t => Oa(t, e)))
            }), Va);
            let f = t.getComponentProps(s.getValue());
            return _.createElement(e, {
              ...f,
              ref: o
            })
          }))
        },
        Ta = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && Hi.write(this.update)
          }
        },
        Ua = Symbol.for("AnimatedComponent"),
        Wa = e => ma.str(e) ? e : e && ma.str(e.displayName) ? e.displayName : ma.fun(e) && e.name || null;
      var Qa = /^--/;

      function Na(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Qa.test(e) || Ba.hasOwnProperty(e) && Ba[e] ? ("" + t).trim() : t + "px"
      }
      var Da = {},
        Ba = {
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
        Ga = ["Webkit", "Ms", "Moz", "O"];
      Ba = Object.keys(Ba).reduce(((e, t) => (Ga.forEach((r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t])), e)), Ba);
      var Za = /^(matrix|translate|scale|rotate|skew)/,
        Xa = /^(translate)/,
        Ya = /^(rotate|skew)/,
        Ha = (e, t) => si.num(e) && 0 !== e ? e + t : e,
        Ja = (e, t) => si.arr(e) ? e.every((e => Ja(e, t))) : si.num(e) ? e === t : parseFloat(e) === t,
        Ka = class extends $a {
          constructor(e) {
            let {
              x: t,
              y: r,
              z: n,
              ...i
            } = e, a = [], o = [];
            (t || r || n) && (a.push([t || 0, r || 0, n || 0]), o.push((e => [`translate3d(${e.map((e=>Ha(e,"px"))).join(",")})`, Ja(e, 0)]))),
            function(e, t, r) {
              if (si.arr(e))
                for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
              else
                for (let n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
            }(i, ((e, t) => {
              if ("transform" === t) a.push([e || ""]), o.push((e => [e, "" === e]));
              else if (Za.test(t)) {
                if (delete i[t], si.und(e)) return;
                let r = Xa.test(t) ? "px" : Ya.test(t) ? "deg" : "";
                a.push((e => si.und(e) ? [] : si.arr(e) ? e : [e])(e)), o.push("rotate3d" === t ? e => {
                  let [t, n, i, a] = e;
                  return [`rotate3d(${t},${n},${i},${Ha(a,r)})`, Ja(a, 0)]
                } : e => [`${t}(${e.map((e=>Ha(e,r))).join(",")})`, Ja(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), a.length && (i.transform = new eo(a, o)), super(i)
          }
        },
        eo = class extends $i {
          constructor(e, t) {
            var r, n, i;
            super(), r = this, i = null, (n = function(e) {
              var t = function(e, t) {
                if ("object" != typeof e || null === e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var n = r.call(e, "string");
                  if ("object" != typeof n) return n;
                  throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
              }(e);
              return "symbol" == typeof t ? t : String(t)
            }(n = "_value")) in r ? Object.defineProperty(r, n, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[n] = i, this.inputs = e, this.transforms = t
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return li(this.inputs, ((r, n) => {
              let i = qi(r[0]),
                [a, o] = this.transforms[n](si.arr(i) ? i : r.map(qi));
              e += " " + a, t = t && o
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && li(this.inputs, (e => li(e, (e => Fi(e) && function(e, t) {
              if (e[Vi]) {
                let r = e[zi];
                r || Ti(e, zi, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
              }
              return t
            }(e, this)))))
          }
          observerRemoved(e) {
            0 == e && li(this.inputs, (e => li(e, (e => Fi(e) && function(e, t) {
              let r = e[zi];
              if (r && r.has(t)) {
                let n = r.size - 1;
                n ? r.delete(t) : e[zi] = null, e.observerRemoved && e.observerRemoved(n, t)
              }
            }(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null),
              function(e, t) {
                let r = e[zi];
                r && r.forEach((e => {
                  ! function(e, t) {
                    e.eventObserved ? e.eventObserved(t) : e(t)
                  }(e, t)
                }))
              }(this, e)
          }
        };
      A.assign({
        batchedUpdates: $n.unstable_batchedUpdates,
        createStringInterpolator: e => {
          Ci || (Ci = di ? new RegExp(`(${Object.keys(di).join("|")})(?!\\w)`, "g") : /^\b$/);
          let t = e.output.map((e => qi(e).replace(Di, Bi).replace(Wi, Ri).replace(Ci, Ri))),
            r = t.map((e => e.match(Ui).map(Number))),
            n = r[0].map(((e, t) => r.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))).map((t => ji({
              ...e,
              output: t
            })));
          return e => {
            let r = !Qi.test(t[0]) && t.find((e => Qi.test(e)))?.replace(Ui, ""),
              i = 0;
            return t[0].replace(Ui, (() => `${n[i++](e)}${r||""}`)).replace(Ni, Zi)
          }
        },
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
      var to = function(e) {
          let {
            applyAnimatedValues: t = (() => !1),
            createAnimatedStyle: r = (e => new $a(e)),
            getComponentProps: n = (e => e)
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = {
            applyAnimatedValues: t,
            createAnimatedStyle: r,
            getComponentProps: n
          }, a = e => {
            let t = Wa(e) || "Anonymous";
            return (e = ma.str(e) ? a[e] || (a[e] = La(e, i)) : e[Ua] || (e[Ua] = La(e, i))).displayName = `Animated(${t})`, e
          };
          return va(e, ((t, r) => {
            ma.arr(e) && (r = Wa(t)), a[r] = a(t)
          })), {
            animated: a
          }
        }(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            let r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                style: n,
                children: i,
                scrollTop: a,
                scrollLeft: o,
                viewBox: s,
                ...l
              } = t,
              u = Object.values(l),
              d = Object.keys(l).map((t => r || e.hasAttribute(t) ? t : Da[t] || (Da[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== i && (e.textContent = i);
            for (let t in n)
              if (n.hasOwnProperty(t)) {
                let r = Na(t, n[t]);
                Qa.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach(((t, r) => {
              e.setAttribute(t, u[r])
            })), void 0 !== a && (e.scrollTop = a), void 0 !== o && (e.scrollLeft = o), void 0 !== s && e.setAttribute("viewBox", s)
          },
          createAnimatedStyle: e => new Ka(e),
          getComponentProps: e => {
            let {
              scrollTop: t,
              scrollLeft: r,
              ...n
            } = e;
            return n
          }
        }),
        ro = to.animated
    }
  }
]);