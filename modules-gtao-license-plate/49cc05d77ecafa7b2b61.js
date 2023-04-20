"use strict";
(self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [905], {
    3905: (e, t, r) => {
      r.r(t), r.d(t, {
        Any: () => hr,
        BailSignal: () => Tr,
        Controller: () => un,
        FrameValue: () => Nr,
        Globals: () => A,
        Interpolation: () => zn,
        Spring: () => jn,
        SpringContext: () => vn,
        SpringRef: () => wn,
        SpringValue: () => Hr,
        Trail: () => Cn,
        Transition: () => Vn,
        a: () => oo,
        animated: () => oo,
        config: () => Er,
        createInterpolator: () => pe,
        easings: () => _e,
        inferTo: () => Sr,
        interpolate: () => Tn,
        to: () => Ln,
        update: () => Un,
        useChain: () => Ir,
        useInView: () => Rn,
        useIsomorphicLayoutEffect: () => lt,
        useReducedMotion: () => pt,
        useResize: () => En,
        useScroll: () => In,
        useSpring: () => _n,
        useSpringRef: () => xn,
        useSpringValue: () => An,
        useSprings: () => bn,
        useTrail: () => kn,
        useTransition: () => Pn
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
      var X = (e, t, r) => Math.min(Math.max(r, e), t),
        Y = "[-+]?\\d*\\.?\\d+",
        H = Y + "%";

      function J() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var K = new RegExp("rgb" + J(Y, Y, Y)),
        ee = new RegExp("rgba" + J(Y, Y, Y, Y)),
        te = new RegExp("hsl" + J(Y, H, H)),
        re = new RegExp("hsla" + J(Y, H, H, Y)),
        ne = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ie = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ae = /^#([0-9a-fA-F]{6})$/,
        oe = /^#([0-9a-fA-F]{8})$/;

      function se(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function le(e, t, r) {
        let n = r < .5 ? r * (1 + t) : r + t - r * t,
          i = 2 * r - n,
          a = se(i, n, e + 1 / 3),
          o = se(i, n, e),
          s = se(i, n, e - 1 / 3);
        return Math.round(255 * a) << 24 | Math.round(255 * o) << 16 | Math.round(255 * s) << 8
      }

      function ue(e) {
        let t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function de(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function ce(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function he(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function fe(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = ae.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : F && void 0 !== F[e] ? F[e] : (t = K.exec(e)) ? (ue(t[1]) << 24 | ue(t[2]) << 16 | ue(t[3]) << 8 | 255) >>> 0 : (t = ee.exec(e)) ? (ue(t[1]) << 24 | ue(t[2]) << 16 | ue(t[3]) << 8 | ce(t[4])) >>> 0 : (t = ne.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = oe.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ie.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = te.exec(e)) ? (255 | le(de(t[1]), he(t[2]), he(t[3]))) >>> 0 : (t = re.exec(e)) ? (le(de(t[1]), he(t[2]), he(t[3])) | ce(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var pe = (e, t, r) => {
          if (P.fun(e)) return e;
          if (P.arr(e)) return pe({
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
        me = 1.70158,
        ge = 1.525 * me,
        ve = me + 1,
        ye = 2 * Math.PI / 3,
        we = 2 * Math.PI / 4.5,
        be = e => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375,
        _e = {
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
          easeInBack: e => ve * e * e * e - me * e * e,
          easeOutBack: e => 1 + ve * Math.pow(e - 1, 3) + me * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (2 * (ge + 1) * e - ge) / 2 : (Math.pow(2 * e - 2, 2) * ((ge + 1) * (2 * e - 2) + ge) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * ye),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * ye) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * we) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * we) / 2 + 1,
          easeInBounce: e => 1 - be(1 - e),
          easeOutBounce: be,
          easeInOutBounce: e => e < .5 ? (1 - be(1 - 2 * e)) / 2 : (1 + be(2 * e - 1)) / 2,
          steps: function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "end";
            return r => {
              let n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e,
                i = "end" === t ? Math.floor(n) : Math.ceil(n);
              return X(0, 1, i / e)
            }
          }
        },
        Se = Symbol.for("FluidValue.get"),
        xe = Symbol.for("FluidValue.observers"),
        Ae = e => Boolean(e && e[Se]),
        ke = e => e && e[Se] ? e[Se]() : e,
        Pe = e => e[xe] || null;

      function Me(e, t) {
        let r = e[xe];
        r && r.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var Ie = class {
          constructor(e) {
            if (S(this, Se, void 0), S(this, xe, void 0), !e && !(e = this.get)) throw Error("Unknown getter");
            Ee(this, e)
          }
        },
        Ee = (e, t) => Ce(e, Se, t);

      function Oe(e, t) {
        if (e[Se]) {
          let r = e[xe];
          r || Ce(e, xe, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function Re(e, t) {
        let r = e[xe];
        if (r && r.has(t)) {
          let n = r.size - 1;
          n ? r.delete(t) : e[xe] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var je, Ce = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        Ve = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        ze = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Fe = new RegExp(`(${Ve.source})(%|[a-z]+)`, "i"),
        qe = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        $e = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Le = e => {
          let [t, r] = Te(e);
          if (!t || z()) return e;
          let n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          return n ? n.trim() : r && r.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(r) || e : r && $e.test(r) ? Le(r) : r || e
        },
        Te = e => {
          let t = $e.exec(e);
          if (!t) return [, ];
          let [, r, n] = t;
          return [r, n]
        },
        Ue = (e, t, r, n, i) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,
        We = "react-spring: ",
        Qe = e => {
          let t = e,
            r = !1;
          if ("function" != typeof t) throw new TypeError(`${We}once requires a function parameter`);
          return function() {
            r || (t(...arguments), r = !0)
          }
        },
        Ne = Qe(console.warn);

      function De() {
        Ne(`${We}The "interpolate" function is deprecated in v9 (use "to" instead)`)
      }
      var Be = Qe(console.warn);

      function Ge(e) {
        return P.str(e) && ("#" == e[0] || /\d/.test(e) || !z() && $e.test(e) || e in (F || {}))
      }
      var Ze, Xe, Ye = new WeakMap,
        He = e => e.forEach((e => {
          let {
            target: t,
            contentRect: r
          } = e;
          return Ye.get(t)?.forEach((e => e(r)))
        })),
        Je = new Set,
        Ke = e => (Je.add(e), Xe || (Xe = (() => {
          let e = () => {
            Je.forEach((e => e({
              width: window.innerWidth,
              height: window.innerHeight
            })))
          };
          return window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        })()), () => {
          Je.delete(e), !Je.size && Xe && (Xe(), Xe = void 0)
        }),
        et = function(e) {
          let {
            container: t = document.documentElement
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return t === document.documentElement ? Ke(e) : function(e, t) {
            Ze || typeof ResizeObserver < "u" && (Ze = new ResizeObserver(He));
            let r = Ye.get(t);
            return r || (r = new Set, Ye.set(t, r)), r.add(e), Ze && Ze.observe(t), () => {
              let r = Ye.get(t);
              !r || (r.delete(e), !r.size && Ze && Ze.unobserve(t))
            }
          }(e, t)
        },
        tt = {
          x: {
            length: "Width",
            position: "Left"
          },
          y: {
            length: "Height",
            position: "Top"
          }
        },
        rt = class {
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
                } = tt[e];
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
        },
        nt = new WeakMap,
        it = new WeakMap,
        at = new WeakMap,
        ot = e => e === document.documentElement ? window : e,
        st = function(e) {
          let {
            container: t = document.documentElement
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = at.get(t);
          r || (r = new Set, at.set(t, r));
          let n = new rt(e, t);
          if (r.add(n), !nt.has(t)) {
            let e = () => (r?.forEach((e => e.advance())), !0);
            nt.set(t, e);
            let n = ot(t);
            window.addEventListener("resize", e, {
              passive: !0
            }), t !== document.documentElement && it.set(t, et(e, {
              container: t
            })), n.addEventListener("scroll", e, {
              passive: !0
            })
          }
          let a = nt.get(t);
          return i(a), () => {
            i.cancel(a);
            let e = at.get(t);
            if (!e || (e.delete(n), e.size)) return;
            let r = nt.get(t);
            nt.delete(t), r && (ot(t).removeEventListener("scroll", r), window.removeEventListener("resize", r), it.get(t)?.())
          }
        },
        lt = z() ? _.useEffect : _.useLayoutEffect,
        ut = () => {
          let e = (0, _.useRef)(!1);
          return lt((() => (e.current = !0, () => {
            e.current = !1
          })), []), e
        };

      function dt() {
        let e = (0, _.useState)()[1],
          t = ut();
        return () => {
          t.current && e(Math.random())
        }
      }
      var ct = e => (0, _.useEffect)(e, ht),
        ht = [];

      function ft(e) {
        let t = (0, _.useRef)();
        return (0, _.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var pt = () => {
          let [e, t] = (0, _.useState)(null);
          return lt((() => {
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
        mt = Rt(),
        gt = e => Mt(e, mt),
        vt = Rt();
      gt.write = e => Mt(e, vt);
      var yt = Rt();
      gt.onStart = e => Mt(e, yt);
      var wt = Rt();
      gt.onFrame = e => Mt(e, wt);
      var bt = Rt();
      gt.onFinish = e => Mt(e, bt);
      var _t = [];
      gt.setTimeout = (e, t) => {
        let r = gt.now() + t,
          n = () => {
            let e = _t.findIndex((e => e.cancel == n));
            ~e && _t.splice(e, 1), kt -= ~e ? 1 : 0
          },
          i = {
            time: r,
            handler: e,
            cancel: n
          };
        return _t.splice(St(r), 0, i), kt += 1, It(), i
      };
      var St = e => ~(~_t.findIndex((t => t.time > e)) || ~_t.length);
      gt.cancel = e => {
        yt.delete(e), wt.delete(e), bt.delete(e), mt.delete(e), vt.delete(e)
      }, gt.sync = e => {
        Pt = !0, gt.batchedUpdates(e), Pt = !1
      }, gt.throttle = e => {
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
          t = n, gt.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          yt.delete(r), t = null
        }, n
      };
      var xt = typeof window < "u" ? window.requestAnimationFrame : () => {};
      gt.use = e => xt = e, gt.now = typeof performance < "u" ? () => performance.now() : Date.now, gt.batchedUpdates = e => e(), gt.catch = console.error, gt.frameLoop = "always", gt.advance = () => {
        "demand" !== gt.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : Ot()
      };
      var At = -1,
        kt = 0,
        Pt = !1;

      function Mt(e, t) {
        Pt ? (t.delete(e), e(0)) : (t.add(e), It())
      }

      function It() {
        At < 0 && (At = 0, "demand" !== gt.frameLoop && xt(Et))
      }

      function Et() {
        ~At && (xt(Et), gt.batchedUpdates(Ot))
      }

      function Ot() {
        let e = At;
        At = gt.now();
        let t = St(At);
        t && (jt(_t.splice(0, t), (e => e.handler())), kt -= t), kt ? (yt.flush(), mt.flush(e ? Math.min(64, At - e) : 16.667), wt.flush(), vt.flush(), bt.flush()) : At = -1
      }

      function Rt() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            kt += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (kt -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, kt -= t.size, jt(t, (t => t(r) && e.add(t))), kt += e.size, t = e)
          }
        }
      }

      function jt(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            gt.catch(e)
          }
        }))
      }
      var Ct = Object.defineProperty;
      ((e, t) => {
        for (var r in t) Ct(e, r, {
          get: t[r],
          enumerable: !0
        })
      })({}, {
        assign: () => Qt,
        colors: () => Tt,
        createStringInterpolator: () => qt,
        skipAnimation: () => Ut,
        to: () => $t,
        willAdvance: () => Wt
      });
      var Vt = {
          arr: Array.isArray,
          obj: e => !!e && "Object" === e.constructor.name,
          fun: e => "function" == typeof e,
          str: e => "string" == typeof e,
          num: e => "number" == typeof e,
          und: e => void 0 === e
        },
        zt = (e, t) => e.forEach(t);

      function Ft(e, t, r) {
        if (Vt.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (let n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var qt, $t, Lt = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        Tt = null,
        Ut = !1,
        Wt = function() {},
        Qt = e => {
          e.to && ($t = e.to), e.now && (gt.now = e.now), void 0 !== e.colors && (Tt = e.colors), null != e.skipAnimation && (Ut = e.skipAnimation), e.createStringInterpolator && (qt = e.createStringInterpolator), e.requestAnimationFrame && gt.use(e.requestAnimationFrame), e.batchedUpdates && (gt.batchedUpdates = e.batchedUpdates), e.willAdvance && (Wt = e.willAdvance), e.frameLoop && (gt.frameLoop = e.frameLoop)
        };
      new Set;
      var Nt = "[-+]?\\d*\\.?\\d+",
        Dt = Nt + "%";

      function Bt() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      new RegExp("rgb" + Bt(Nt, Nt, Nt)), new RegExp("rgba" + Bt(Nt, Nt, Nt, Nt)), new RegExp("hsl" + Bt(Nt, Dt, Dt)), new RegExp("hsla" + Bt(Nt, Dt, Dt, Nt));
      var Gt = (e, t, r) => {
        if (Vt.fun(e)) return e;
        if (Vt.arr(e)) return Gt({
          range: e,
          output: t,
          extrapolate: r
        });
        if (Vt.str(e.output[0])) return qt(e);
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
      var Zt = Symbol.for("FluidValue.get"),
        Xt = (Symbol.for("FluidValue.observers"), e => Boolean(e && e[Zt])),
        Yt = (new RegExp(`(${/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g.source})(%|[a-z]+)`, "i"), /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/),
        Ht = e => {
          let t = e,
            r = !1;
          if ("function" != typeof t) throw new TypeError("react-spring: once requires a function parameter");
          return function() {
            r || (t(...arguments), r = !0)
          }
        };

      function Jt(e) {
        return Vt.str(e) && ("#" == e[0] || /\d/.test(e) || !Lt() && Yt.test(e) || e in (Tt || {}))
      }

      function Kt(e, t, r) {
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
      Ht(console.warn), Ht(console.warn), new WeakMap, new Set, new WeakMap, new WeakMap, new WeakMap, Lt() ? _.useEffect : _.useLayoutEffect;
      var er = Symbol.for("Animated:node"),
        tr = e => e && e[er],
        rr = (e, t) => ((e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }))(e, er, t),
        nr = e => e && e[er] && e[er].getPayload(),
        ir = class {
          constructor() {
            Kt(this, "payload", void 0), rr(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        ar = class e extends ir {
          constructor(e) {
            super(), Kt(this, "done", !0), Kt(this, "elapsedTime", void 0), Kt(this, "lastPosition", void 0), Kt(this, "lastVelocity", void 0), Kt(this, "v0", void 0), Kt(this, "durationProgress", 0), this._value = e, Vt.num(this._value) && (this.lastPosition = this._value)
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
            return Vt.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            let {
              done: e
            } = this;
            this.done = !1, Vt.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        or = class e extends ar {
          constructor(e) {
            super(0), Kt(this, "_string", null), Kt(this, "_toString", void 0), this._toString = Gt({
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
            if (Vt.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = Gt({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        sr = {
          dependencies: null
        },
        lr = class extends ir {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            let t = {};
            return Ft(this.source, ((r, n) => {
              (e => !!e && e[er] === e)(r) ? t[n] = r.getValue(e): Xt(r) ? t[n] = (e => e && e[Zt] ? e[Zt]() : e)(r) : e || (t[n] = r)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && zt(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              let t = new Set;
              return Ft(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            sr.dependencies && Xt(e) && sr.dependencies.add(e);
            let t = nr(e);
            t && zt(t, (e => this.add(e)))
          }
        },
        ur = class extends lr {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new ur(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            let t = this.getPayload();
            return e.length == t.length ? t.map(((t, r) => t.setValue(e[r]))).some(Boolean) : (super.setValue(e.map(dr)), !0)
          }
        };

      function dr(e) {
        return (Jt(e) ? or : ar).create(e)
      }

      function cr(e) {
        let t = tr(e);
        return t ? t.constructor : Vt.arr(e) ? ur : Jt(e) ? or : ar
      }
      Symbol.for("AnimatedComponent");
      var hr = class {
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

      function fr(e, t, r) {
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

      function pr(e) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        return P.fun(e) ? e(...r) : e
      }
      var mr = (e, t) => !0 === e || !!(t && e && (P.fun(e) ? e(t) : O(e).includes(t))),
        gr = (e, t) => P.obj(e) ? t && e[t] : e,
        vr = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        yr = e => e,
        wr = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yr,
            r = br;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          let n = {};
          for (let i of r) {
            let r = t(e[i], i);
            P.und(r) || (n[i] = r)
          }
          return n
        },
        br = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        _r = {
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

      function Sr(e) {
        let t = function(e) {
          let t = {},
            r = 0;
          if (E(e, ((e, n) => {
              _r[n] || (t[n] = e, r++)
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

      function xr(e) {
        return e = ke(e), P.arr(e) ? e.map(xr) : Ge(e) ? A.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function Ar(e) {
        for (let t in e) return !0;
        return !1
      }

      function kr(e) {
        return P.fun(e) || P.arr(e) && P.obj(e[0])
      }

      function Pr(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function Mr(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }

      function Ir(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3;
        lt((() => {
          if (t) {
            let n = 0;
            I(e, ((e, i) => {
              let a = e.current;
              if (a.length) {
                let o = r * t[i];
                isNaN(o) ? o = n : n = o, I(a, (e => {
                  I(e.queue, (e => {
                    let t = e.delay;
                    e.delay = e => o + pr(t || 0, e)
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
      var Er = {
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
        Or = {
          ...Er.default,
          mass: 1,
          damping: 1,
          easing: _e.linear,
          clamp: !1
        };

      function Rr(e, t) {
        if (P.und(t.decay)) {
          let r = !P.und(t.tension) || !P.und(t.friction);
          (r || !P.und(t.frequency) || !P.und(t.damping) || !P.und(t.mass)) && (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var jr = [];

      function Cr(e, t) {
        let {
          key: r,
          props: n,
          defaultProps: a,
          state: o,
          actions: s
        } = t;
        return new Promise(((t, l) => {
          let u, d, c = mr(n.cancel ?? a?.cancel, r);
          if (c) p();
          else {
            P.und(n.pause) || (o.paused = mr(n.pause, r));
            let e = a?.pause;
            !0 !== e && (e = o.paused || mr(e, r)), u = pr(n.delay || 0, r), e ? (o.resumeQueue.add(f), s.pause()) : (s.resume(), f())
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
      var Vr = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? qr(e.get()) : t.every((e => e.noop)) ? zr(e.get()) : Fr(e.get(), t.every((e => e.finished))),
        zr = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        Fr = function(e, t) {
          return {
            value: e,
            finished: t,
            cancelled: arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          }
        },
        qr = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function $r(e, t, r, n) {
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
          let d, c, h, f = wr(t, ((e, t) => "onRest" === t ? void 0 : e)),
            p = new Promise(((e, t) => (d = e, c = t))),
            m = e => {
              let t = a <= (r.cancelId || 0) && qr(n) || a !== r.asyncId && Fr(n, !1);
              if (t) throw e.result = t, c(e), e
            },
            g = (e, t) => {
              let i = new Tr,
                o = new Ur;
              return (async () => {
                if (A.skipAnimation) throw Lr(r), o.result = Fr(n, !1), c(o), o;
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
          if (A.skipAnimation) return Lr(r), Fr(n, !1);
          try {
            let t;
            t = P.arr(e) ? (async e => {
              for (let t of e) await g(t)
            })(e) : Promise.resolve(e(g, n.stop.bind(n))), await Promise.all([t.then(d), p]), h = Fr(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof Tr) h = e.result;
            else {
              if (!(e instanceof Ur)) throw e;
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

      function Lr(e, t) {
        R(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var Tr = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."), fr(this, "result", void 0)
          }
        },
        Ur = class extends Error {
          constructor() {
            super("SkipAnimationSignal"), fr(this, "result", void 0)
          }
        },
        Wr = e => e instanceof Nr,
        Qr = 1,
        Nr = class extends Ie {
          constructor() {
            super(...arguments), fr(this, "id", Qr++), fr(this, "_priority", 0)
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            let e = tr(this);
            return e && e.getValue()
          }
          to() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return A.to(this, t)
          }
          interpolate() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return De(), A.to(this, t)
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
            Me(this, {
              type: "change",
              parent: this,
              value: e,
              idle: arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            })
          }
          _onPriorityChange(e) {
            this.idle || N.sort(this), Me(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        Dr = Symbol.for("SpringPhase"),
        Br = e => (1 & e[Dr]) > 0,
        Gr = e => (2 & e[Dr]) > 0,
        Zr = e => (4 & e[Dr]) > 0,
        Xr = (e, t) => t ? e[Dr] |= 3 : e[Dr] &= -3,
        Yr = (e, t) => t ? e[Dr] |= 4 : e[Dr] &= -5,
        Hr = class extends Nr {
          constructor(e, t) {
            if (super(), fr(this, "key", void 0), fr(this, "animation", new class {
                constructor() {
                  fr(this, "changed", !1), fr(this, "values", jr), fr(this, "toValues", null), fr(this, "fromValues", jr), fr(this, "to", void 0), fr(this, "from", void 0), fr(this, "config", new class {
                    constructor() {
                      fr(this, "tension", void 0), fr(this, "friction", void 0), fr(this, "frequency", void 0), fr(this, "damping", void 0), fr(this, "mass", void 0), fr(this, "velocity", 0), fr(this, "restVelocity", void 0), fr(this, "precision", void 0), fr(this, "progress", void 0), fr(this, "duration", void 0), fr(this, "easing", void 0), fr(this, "clamp", void 0), fr(this, "bounce", void 0), fr(this, "decay", void 0), fr(this, "round", void 0), Object.assign(this, Or)
                    }
                  }), fr(this, "immediate", !1)
                }
              }), fr(this, "queue", void 0), fr(this, "defaultProps", {}), fr(this, "_state", {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }), fr(this, "_pendingCalls", new Set), fr(this, "_lastCallId", 0), fr(this, "_lastToId", 0), fr(this, "_memoizedDuration", 0), !P.und(e) || !P.und(t)) {
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
            return !(Gr(this) || this._state.asyncTo) || Zr(this)
          }
          get goal() {
            return ke(this.animation.to)
          }
          get velocity() {
            let e = tr(this);
            return e instanceof ar ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return Br(this)
          }
          get isAnimating() {
            return Gr(this)
          }
          get isPaused() {
            return Zr(this)
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
              o = nr(n.to);
            !o && Ae(n.to) && (a = O(ke(n.to))), n.values.forEach(((s, l) => {
              if (s.done) return;
              let u = s.constructor == or ? 1 : o ? o[l].lastPosition : a[l],
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
            let s = tr(this),
              l = s.getValue();
            if (t) {
              let e = ke(n.to);
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
            if (Gr(this)) {
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
            }], Promise.all(r.map((e => this._update(e)))).then((e => Vr(this, e)))
          }
          stop(e) {
            let {
              to: t
            } = this.animation;
            return this._focus(this.get()), Lr(this._state, e && this._lastCallId), i.batchedUpdates((() => this._stop(t, e))), this
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
            r = P.obj(r) ? r[t] : r, (null == r || kr(r)) && (r = void 0), n = P.obj(n) ? n[t] : n, null == n && (n = void 0);
            let i = {
              to: r,
              from: n
            };
            return Br(this) || (e.reverse && ([r, n] = [n, r]), n = ke(n), P.und(n) ? tr(this) || this._set(r) : this._set(n)), i
          }
          _update(e, t) {
            let {
              ...r
            } = e, {
              key: n,
              defaultProps: i
            } = this;
            r.default && Object.assign(i, wr(r, ((e, t) => /^on/.test(t) ? gr(e, n) : e))), an(this, r, "onProps"), on(this, "onProps", r, this);
            let a = this._prepareNode(r);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            let o = this._state;
            return Cr(++this._lastCallId, {
              key: n,
              props: r,
              defaultProps: i,
              state: o,
              actions: {
                pause: () => {
                  Zr(this) || (Yr(this, !0), V(o.pauseQueue), on(this, "onPause", Fr(this, Jr(this, this.animation.to)), this))
                },
                resume: () => {
                  Zr(this) && (Yr(this, !1), Gr(this) && this._resume(), V(o.resumeQueue), on(this, "onResume", Fr(this, Jr(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, a)
              }
            }).then((e => {
              if (r.loop && e.finished && (!t || !e.noop)) {
                let e = Kr(r);
                if (e) return this._update(e, !0)
              }
              return e
            }))
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(qr(this));
            let n = !P.und(e.to),
              a = !P.und(e.from);
            if (n || a) {
              if (!(t.callId > this._lastToId)) return r(qr(this));
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
            f && (l.from = h), h = ke(h);
            let p = !M(c, u);
            p && this._focus(c);
            let m = kr(t.to),
              {
                config: g
              } = l,
              {
                decay: v,
                velocity: y
              } = g;
            (n || a) && (g.velocity = 0), t.config && !m && function(e, t, r) {
              r && (Rr(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), Rr(e, t), Object.assign(e, t);
              for (let t in Or) null == e[t] && (e[t] = Or[t]);
              let {
                mass: n,
                frequency: i,
                damping: a
              } = e;
              P.und(i) || (i < .01 && (i = .01), a < 0 && (a = 0), e.tension = Math.pow(2 * Math.PI / i, 2) * n, e.friction = 4 * Math.PI * a * n / i)
            }(g, pr(t.config, o), t.config !== s.config ? pr(s.config, o) : void 0);
            let w = tr(this);
            if (!w || P.und(c)) return r(Fr(this, !0));
            let b = P.und(t.reset) ? a && !t.default : !P.und(h) && mr(t.reset, o),
              _ = b ? h : this.get(),
              S = xr(c),
              x = P.num(S) || P.arr(S) || Ge(S),
              A = !m && (!x || mr(s.immediate || t.immediate, o));
            if (p) {
              let e = cr(c);
              if (e !== w.constructor) {
                if (!A) throw Error(`Cannot animate between ${w.constructor.name} and ${e.name}, as the "to" prop suggests`);
                w = this._set(S)
              }
            }
            let k = w.constructor,
              E = Ae(c),
              R = !1;
            if (!E) {
              let e = b || !Br(this) && f;
              (p || e) && (R = M(xr(_), S), E = !R), (!M(l.immediate, A) && !A || !M(g.decay, v) || !M(g.velocity, y)) && (E = !0)
            }
            if (R && Gr(this) && (l.changed && !b ? E = !0 : E || this._stop(u)), !m && ((E || Ae(u)) && (l.values = w.getPayload(), l.toValues = Ae(c) ? null : k == or ? [1] : O(S)), l.immediate != A && (l.immediate = A, !A && !b && this._set(u)), E)) {
              let {
                onRest: e
              } = l;
              I(nn, (e => an(this, t, e)));
              let n = Fr(this, Jr(this, u));
              V(this._pendingCalls, n), this._pendingCalls.add(r), l.changed && i.batchedUpdates((() => {
                l.changed = !b, e?.(n, this), b ? pr(s.onRest, n) : l.onStart?.(n, this)
              }))
            }
            b && this._set(_), m ? r($r(t.to, t, this._state, this)) : E ? this._start() : Gr(this) && !p ? this._pendingCalls.add(r) : r(zr(_))
          }
          _focus(e) {
            let t = this.animation;
            e !== t.to && (Pe(this) && this._detach(), t.to = e, Pe(this) && this._attach())
          }
          _attach() {
            let e = 0,
              {
                to: t
              } = this.animation;
            Ae(t) && (Oe(t, this), Wr(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            let {
              to: e
            } = this.animation;
            Ae(e) && Re(e, this)
          }
          _set(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              r = ke(e);
            if (!P.und(r)) {
              let e = tr(this);
              if (!e || !M(r, e.getValue())) {
                let n = cr(r);
                e && e.constructor == n ? e.setValue(r) : rr(this, n.create(r)), e && i.batchedUpdates((() => {
                  this._onChange(r, t)
                }))
              }
            }
            return tr(this)
          }
          _onStart() {
            let e = this.animation;
            e.changed || (e.changed = !0, on(this, "onStart", Fr(this, Jr(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), pr(this.animation.onChange, e, this)), pr(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            let e = this.animation;
            tr(this).reset(ke(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), Gr(this) || (Xr(this, !0), Zr(this) || this._resume())
          }
          _resume() {
            A.skipAnimation ? this.finish() : N.start(this)
          }
          _stop(e, t) {
            if (Gr(this)) {
              Xr(this, !1);
              let r = this.animation;
              I(r.values, (e => {
                e.done = !0
              })), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Me(this, {
                type: "idle",
                parent: this
              });
              let n = t ? qr(this.get()) : Fr(this.get(), Jr(this, e ?? r.to));
              V(this._pendingCalls, n), r.changed && (r.changed = !1, on(this, "onRest", n, this))
            }
          }
        };

      function Jr(e, t) {
        let r = xr(t);
        return M(xr(e.get()), r)
      }

      function Kr(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.loop,
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.to,
          n = pr(t);
        if (n) {
          let i = !0 !== n && Sr(n),
            a = (i || e).reverse,
            o = !i || i.reset;
          return en({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !a || kr(r) ? r : void 0,
            from: o ? e.from : void 0,
            reset: o,
            ...i
          })
        }
      }

      function en(e) {
        let {
          to: t,
          from: r
        } = e = Sr(e), n = new Set;
        return P.obj(t) && rn(t, n), P.obj(r) && rn(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function tn(e) {
        let t = en(e);
        return P.und(t.default) && (t.default = wr(t)), t
      }

      function rn(e, t) {
        E(e, ((e, r) => null != e && t.add(r)))
      }
      var nn = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function an(e, t, r) {
        e.animation[r] = t[r] !== vr(t, r) ? gr(t[r], e.key) : void 0
      }

      function on(e, t) {
        for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var sn = ["onStart", "onChange", "onRest"],
        ln = 1,
        un = class {
          constructor(e, t) {
            fr(this, "id", ln++), fr(this, "springs", {}), fr(this, "queue", []), fr(this, "ref", void 0), fr(this, "_flush", void 0), fr(this, "_initialProps", void 0), fr(this, "_lastAsyncId", 0), fr(this, "_active", new Set), fr(this, "_changed", new Set), fr(this, "_started", !1), fr(this, "_item", void 0), fr(this, "_state", {
              paused: !1,
              pauseQueue: new Set,
              resumeQueue: new Set,
              timeouts: new Set
            }), fr(this, "_events", {
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
            return e && this.queue.push(en(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = O(e).map(en) : this.queue = [], this._flush ? this._flush(this, t) : (gn(this, t), dn(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              let r = this.springs;
              I(O(t), (t => r[t].stop(!!e)))
            } else Lr(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
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

      function dn(e, t) {
        return Promise.all(t.map((t => cn(e, t)))).then((t => Vr(e, t)))
      }
      async function cn(e, t, r) {
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
        c ? (t.to = void 0, t.onRest = void 0, d && (d.onRest = void 0)) : I(sn, (r => {
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
          p = !0 === t.cancel || !0 === vr(t, "cancel");
        (c || p && h.asyncId) && f.push(Cr(++e._lastAsyncId, {
          props: t,
          state: h,
          actions: {
            pause: k,
            resume: k,
            start(t, r) {
              p ? (Lr(h, e._lastAsyncId), r(qr(e))) : (t.onRest = l, r($r(c, t, h, e)))
            }
          }
        })), h.paused && await new Promise((e => {
          h.resumeQueue.add(e)
        }));
        let m = Vr(e, await Promise.all(f));
        if (s && m.finished && (!r || !m.noop)) {
          let r = Kr(t, s, a);
          if (r) return gn(e, [r]), cn(e, r, !0)
        }
        return u && i.batchedUpdates((() => u(m, e, e.item))), m
      }

      function hn(e, t) {
        let r = {
          ...e.springs
        };
        return t && I(O(t), (e => {
          P.und(e.keys) && (e = en(e)), P.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), mn(r, e, (e => pn(e)))
        })), fn(e, r), r
      }

      function fn(e, t) {
        E(t, ((t, r) => {
          e.springs[r] || (e.springs[r] = t, Oe(t, e))
        }))
      }

      function pn(e, t) {
        let r = new Hr;
        return r.key = e, t && Oe(r, t), r
      }

      function mn(e, t, r) {
        t.keys && I(t.keys, (n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        }))
      }

      function gn(e, t) {
        I(t, (t => {
          mn(e.springs, t, (t => pn(t, e)))
        }))
      }
      var vn = e => {
          let {
            children: t,
            ...r
          } = e, n = (0, _.useContext)(yn), i = r.pause || !!n.pause, a = r.immediate || !!n.immediate;
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
          } = yn;
          return _.createElement(o, {
            value: r
          }, t)
        },
        yn = function(e, t) {
          return Object.assign(e, _.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e
        }(vn, {});
      vn.Provider = yn.Provider, vn.Consumer = yn.Consumer;
      var wn = () => {
        let e = [],
          t = function(t) {
            Be(`${We}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
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

      function bn(e, t, r) {
        let n = P.fun(t) && t;
        n && !r && (r = []);
        let i = (0, _.useMemo)((() => n || 3 == arguments.length ? wn() : void 0), []),
          a = (0, _.useRef)(0),
          o = dt(),
          s = (0, _.useMemo)((() => ({
            ctrls: [],
            queue: [],
            flush(e, t) {
              let r = hn(e, t);
              return a.current > 0 && !s.queue.length && !Object.keys(r).some((t => !e.springs[t])) ? dn(e, t) : new Promise((n => {
                fn(e, r), s.queue.push((() => {
                  n(dn(e, t))
                })), o()
              }))
            }
          })), []),
          l = (0, _.useRef)([...s.ctrls]),
          u = [],
          d = ft(e) || 0;

        function c(e, r) {
          for (let i = e; i < r; i++) {
            let e = l.current[i] || (l.current[i] = new un(null, s.flush)),
              r = n ? n(i, e) : t[i];
            r && (u[i] = tn(r))
          }
        }(0, _.useMemo)((() => {
          I(l.current.slice(e, d), (e => {
            Pr(e, i), e.stop(!0)
          })), l.current.length = e, c(d, e)
        }), [e]), (0, _.useMemo)((() => {
          c(0, Math.min(d, e))
        }), r);
        let h = l.current.map(((e, t) => hn(e, u[t]))),
          f = (0, _.useContext)(vn),
          p = ft(f),
          m = f !== p && Ar(f);
        lt((() => {
          a.current++, s.ctrls = l.current;
          let {
            queue: e
          } = s;
          e.length && (s.queue = [], I(e, (e => e()))), I(l.current, ((e, t) => {
            i?.add(e), m && e.start({
              default: f
            });
            let r = u[t];
            r && (Mr(e, r.ref), e.ref ? e.queue.push(r) : e.start(r))
          }))
        })), ct((() => () => {
          I(s.ctrls, (e => e.stop(!0)))
        }));
        let g = h.map((e => ({
          ...e
        })));
        return i ? [g, i] : g
      }

      function _n(e, t) {
        let r = P.fun(e),
          [
            [n], i
          ] = bn(1, r ? e : [e], r ? t || [] : t);
        return r || 2 == arguments.length ? [n, i] : n
      }
      var Sn = () => wn(),
        xn = () => (0, _.useState)(Sn)[0],
        An = (e, t) => {
          let r = function(e) {
            let t = (0, _.useRef)(null);
            return null === t.current && (t.current = e()), t.current
          }((() => new Hr(e, t)));
          return ct((() => () => {
            r.stop()
          })), r
        };

      function kn(e, t, r) {
        let n = P.fun(t) && t;
        n && !r && (r = []);
        let i, a = !0,
          o = bn(e, ((e, r) => {
            let o = n ? n(e, r) : t;
            return i = o.ref, a = a && o.reverse, o
          }), r || [{}]);
        if (lt((() => {
            I(o[1].current, ((e, t) => {
              let r = o[1].current[t + (a ? 1 : -1)];
              Mr(e, i), e.ref ? r && e.update({
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

      function Pn(e, t, r) {
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
          h = (0, _.useMemo)((() => n || 3 == arguments.length ? wn() : void 0), []),
          f = O(e),
          p = [],
          m = (0, _.useRef)(null),
          g = i ? null : m.current;
        lt((() => {
          m.current = p
        })), ct((() => (I(p, (e => {
          h?.add(e.ctrl), e.ctrl.ref = h
        })), () => {
          I(m.current, (e => {
            e.expired && clearTimeout(e.expirationId), Pr(e.ctrl, h), e.ctrl.stop(!0)
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
                return n ? (t.add(n), n.key) : Mn++
              }))
            }
            return P.und(i) ? e : P.fun(i) ? e.map(i) : O(i)
          }(f, n ? n() : t, g),
          y = i && m.current || [];
        lt((() => I(y, (e => {
          let {
            ctrl: t,
            item: r,
            key: n
          } = e;
          Pr(t, h), pr(u, r, n)
        }))));
        let w = [];
        if (g && I(g, ((e, t) => {
            e.expired ? (clearTimeout(e.expirationId), y.push(e)) : ~(t = w[t] = v.indexOf(e.key)) && (p[t] = e)
          })), I(f, ((e, t) => {
            p[t] || (p[t] = {
              key: v[t],
              item: e,
              phase: "mount",
              ctrl: new un
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
          S = dt(),
          x = wr(t),
          A = new Map,
          k = (0, _.useRef)(new Map),
          M = (0, _.useRef)(!1);
        I(p, ((e, r) => {
          let i, a, u = e.key,
            h = e.phase,
            f = n ? n() : t,
            p = pr(f.delay || 0, u);
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
          if (i = pr(i, e.item, r), i = P.obj(i) ? Sr(i) : {
              to: i
            }, !i.config) {
            let t = c || x.config;
            i.config = pr(t, e.item, r, a)
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
            y.from = pr(a, e.item, r)
          }
          let {
            onResolve: w
          } = y;
          y.onResolve = e => {
            pr(w, e);
            let t = m.current,
              r = t.find((e => e.key === u));
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              let e = t.every((e => e.ctrl.idle));
              if ("leave" == r.phase) {
                let t = pr(s, r.item);
                if (!1 !== t) {
                  let n = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(S, n)))
                }
              }
              e && t.some((e => e.expired)) && (k.current.delete(r), l && (M.current = !0), S())
            }
          };
          let _ = hn(e.ctrl, y);
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
        let E = (0, _.useContext)(vn),
          R = ft(E),
          j = E !== R && Ar(E);
        lt((() => {
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
        })), lt((() => {
          I(k.current.size ? k.current : A, ((e, t) => {
            let {
              phase: r,
              payload: n
            } = e, {
              ctrl: i
            } = t;
            t.phase = r, h?.add(i), j && "enter" == r && i.start({
              default: E
            }), n && (Mr(i, n.ref), !i.ref && !h || M.current ? (i.start(n), M.current && (M.current = !1)) : i.update(n))
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
      var Mn = 1,
        In = function() {
          let {
            container: e,
            ...t
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [r, n] = _n((() => ({
            scrollX: 0,
            scrollY: 0,
            scrollXProgress: 0,
            scrollYProgress: 0,
            ...t
          })), []);
          return lt((() => {
            let t = st((e => {
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
        En = e => {
          let {
            container: t,
            ...r
          } = e, [n, i] = _n((() => ({
            width: 0,
            height: 0,
            ...r
          })), []);
          return lt((() => {
            let e = et((e => {
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
        On = {
          any: 0,
          all: 1
        };

      function Rn(e, t) {
        let [r, n] = (0, _.useState)(!1), i = (0, _.useRef)(), a = P.fun(e) && e, o = a ? a() : {}, {
          to: s = {},
          from: l = {},
          ...u
        } = o, d = a ? t : e, [c, h] = _n((() => ({
          from: l,
          ...u
        })), []);
        return lt((() => {
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
              threshold: "number" == typeof o || Array.isArray(o) ? o : On[o],
              ...u
            });
          return f.observe(e), () => f.unobserve(e)
        }), [d]), a ? [i, c] : [i, r]
      }

      function jn(e) {
        let {
          children: t,
          ...r
        } = e;
        return t(_n(r))
      }

      function Cn(e) {
        let {
          items: t,
          children: r,
          ...n
        } = e, i = kn(t.length, n);
        return t.map(((e, t) => {
          let n = r(e, t);
          return P.fun(n) ? n(i[t]) : n
        }))
      }

      function Vn(e) {
        let {
          items: t,
          children: r,
          ...n
        } = e;
        return Pn(t, n)(r)
      }
      var zn = class extends Nr {
        constructor(e, t) {
          super(), fr(this, "key", void 0), fr(this, "idle", !0), fr(this, "calc", void 0), fr(this, "_active", new Set), this.source = e, this.calc = pe(...t);
          let r = this._get(),
            n = cr(r);
          rr(this, n.create(r))
        }
        advance(e) {
          let t = this._get();
          M(t, this.get()) || (tr(this).setValue(t), this._onChange(t, this.idle)), !this.idle && qn(this._active) && $n(this)
        }
        _get() {
          let e = P.arr(this.source) ? this.source.map(ke) : O(ke(this.source));
          return this.calc(...e)
        }
        _start() {
          this.idle && !qn(this._active) && (this.idle = !1, I(nr(this), (e => {
            e.done = !1
          })), A.skipAnimation ? (i.batchedUpdates((() => this.advance())), $n(this)) : N.start(this))
        }
        _attach() {
          let e = 1;
          I(O(this.source), (t => {
            Ae(t) && Oe(t, this), Wr(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
          })), this.priority = e, this._start()
        }
        _detach() {
          I(O(this.source), (e => {
            Ae(e) && Re(e, this)
          })), this._active.clear(), $n(this)
        }
        eventObserved(e) {
          "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = O(this.source).reduce(((e, t) => Math.max(e, (Wr(t) ? t.priority : 0) + 1)), 0))
        }
      };

      function Fn(e) {
        return !1 !== e.idle
      }

      function qn(e) {
        return !e.size || Array.from(e).every(Fn)
      }

      function $n(e) {
        e.idle || (e.idle = !0, I(nr(e), (e => {
          e.done = !0
        })), Me(e, {
          type: "idle",
          parent: e
        }))
      }
      var Ln = function(e) {
          for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
          return new zn(e, r)
        },
        Tn = function(e) {
          for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
          return De(), new zn(e, r)
        };
      A.assign({
        createStringInterpolator: e => {
          je || (je = F ? new RegExp(`(${Object.keys(F).join("|")})(?!\\w)`, "g") : /^\b$/);
          let t = e.output.map((e => ke(e).replace($e, Le).replace(ze, fe).replace(je, fe))),
            r = t.map((e => e.match(Ve).map(Number))),
            n = r[0].map(((e, t) => r.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))).map((t => pe({
              ...e,
              output: t
            })));
          return e => {
            let r = !Fe.test(t[0]) && t.find((e => Fe.test(e)))?.replace(Ve, ""),
              i = 0;
            return t[0].replace(Ve, (() => `${n[i++](e)}${r||""}`)).replace(qe, Ue)
          }
        },
        to: (e, t) => new zn(e, t)
      });
      var Un = N.advance,
        Wn = r(3468),
        Qn = ai(),
        Nn = e => ti(e, Qn),
        Dn = ai();
      Nn.write = e => ti(e, Dn);
      var Bn = ai();
      Nn.onStart = e => ti(e, Bn);
      var Gn = ai();
      Nn.onFrame = e => ti(e, Gn);
      var Zn = ai();
      Nn.onFinish = e => ti(e, Zn);
      var Xn = [];
      Nn.setTimeout = (e, t) => {
        let r = Nn.now() + t,
          n = () => {
            let e = Xn.findIndex((e => e.cancel == n));
            ~e && Xn.splice(e, 1), Kn -= ~e ? 1 : 0
          },
          i = {
            time: r,
            handler: e,
            cancel: n
          };
        return Xn.splice(Yn(r), 0, i), Kn += 1, ri(), i
      };
      var Yn = e => ~(~Xn.findIndex((t => t.time > e)) || ~Xn.length);
      Nn.cancel = e => {
        Bn.delete(e), Gn.delete(e), Zn.delete(e), Qn.delete(e), Dn.delete(e)
      }, Nn.sync = e => {
        ei = !0, Nn.batchedUpdates(e), ei = !1
      }, Nn.throttle = e => {
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
          t = n, Nn.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          Bn.delete(r), t = null
        }, n
      };
      var Hn = typeof window < "u" ? window.requestAnimationFrame : () => {};
      Nn.use = e => Hn = e, Nn.now = typeof performance < "u" ? () => performance.now() : Date.now, Nn.batchedUpdates = e => e(), Nn.catch = console.error, Nn.frameLoop = "always", Nn.advance = () => {
        "demand" !== Nn.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : ii()
      };
      var Jn = -1,
        Kn = 0,
        ei = !1;

      function ti(e, t) {
        ei ? (t.delete(e), e(0)) : (t.add(e), ri())
      }

      function ri() {
        Jn < 0 && (Jn = 0, "demand" !== Nn.frameLoop && Hn(ni))
      }

      function ni() {
        ~Jn && (Hn(ni), Nn.batchedUpdates(ii))
      }

      function ii() {
        let e = Jn;
        Jn = Nn.now();
        let t = Yn(Jn);
        t && (oi(Xn.splice(0, t), (e => e.handler())), Kn -= t), Kn ? (Bn.flush(), Qn.flush(e ? Math.min(64, Jn - e) : 16.667), Gn.flush(), Dn.flush(), Zn.flush()) : Jn = -1
      }

      function ai() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            Kn += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (Kn -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, Kn -= t.size, oi(t, (t => t(r) && e.add(t))), Kn += e.size, t = e)
          }
        }
      }

      function oi(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            Nn.catch(e)
          }
        }))
      }

      function si(e, t, r) {
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
      var li = Object.defineProperty;
      ((e, t) => {
        for (var r in t) li(e, r, {
          get: t[r],
          enumerable: !0
        })
      })({}, {
        assign: () => vi,
        colors: () => pi,
        createStringInterpolator: () => ui,
        skipAnimation: () => mi,
        to: () => di,
        willAdvance: () => gi
      });
      var ui, di, ci = {
          arr: Array.isArray,
          obj: e => !!e && "Object" === e.constructor.name,
          fun: e => "function" == typeof e,
          str: e => "string" == typeof e,
          num: e => "number" == typeof e,
          und: e => void 0 === e
        },
        hi = (e, t) => e.forEach(t),
        fi = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        pi = null,
        mi = !1,
        gi = function() {},
        vi = e => {
          e.to && (di = e.to), e.now && (Nn.now = e.now), void 0 !== e.colors && (pi = e.colors), null != e.skipAnimation && (mi = e.skipAnimation), e.createStringInterpolator && (ui = e.createStringInterpolator), e.requestAnimationFrame && Nn.use(e.requestAnimationFrame), e.batchedUpdates && (Nn.batchedUpdates = e.batchedUpdates), e.willAdvance && (gi = e.willAdvance), e.frameLoop && (Nn.frameLoop = e.frameLoop)
        };
      new Set;
      var yi = "[-+]?\\d*\\.?\\d+",
        wi = yi + "%";

      function bi() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var _i = new RegExp("rgb" + bi(yi, yi, yi)),
        Si = new RegExp("rgba" + bi(yi, yi, yi, yi)),
        xi = new RegExp("hsl" + bi(yi, wi, wi)),
        Ai = new RegExp("hsla" + bi(yi, wi, wi, yi)),
        ki = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Pi = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        Mi = /^#([0-9a-fA-F]{6})$/,
        Ii = /^#([0-9a-fA-F]{8})$/;

      function Ei(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function Oi(e, t, r) {
        let n = r < .5 ? r * (1 + t) : r + t - r * t,
          i = 2 * r - n,
          a = Ei(i, n, e + 1 / 3),
          o = Ei(i, n, e),
          s = Ei(i, n, e - 1 / 3);
        return Math.round(255 * a) << 24 | Math.round(255 * o) << 16 | Math.round(255 * s) << 8
      }

      function Ri(e) {
        let t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function ji(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function Ci(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function Vi(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function zi(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = Mi.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : pi && void 0 !== pi[e] ? pi[e] : (t = _i.exec(e)) ? (Ri(t[1]) << 24 | Ri(t[2]) << 16 | Ri(t[3]) << 8 | 255) >>> 0 : (t = Si.exec(e)) ? (Ri(t[1]) << 24 | Ri(t[2]) << 16 | Ri(t[3]) << 8 | Ci(t[4])) >>> 0 : (t = ki.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = Ii.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = Pi.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = xi.exec(e)) ? (255 | Oi(ji(t[1]), Vi(t[2]), Vi(t[3]))) >>> 0 : (t = Ai.exec(e)) ? (Oi(ji(t[1]), Vi(t[2]), Vi(t[3])) | Ci(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var Fi = (e, t, r) => {
        if (ci.fun(e)) return e;
        if (ci.arr(e)) return Fi({
          range: e,
          output: t,
          extrapolate: r
        });
        if (ci.str(e.output[0])) return ui(e);
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
      var qi, $i = Symbol.for("FluidValue.get"),
        Li = Symbol.for("FluidValue.observers"),
        Ti = e => Boolean(e && e[$i]),
        Ui = e => e && e[$i] ? e[$i]() : e,
        Wi = class {
          constructor(e) {
            if (si(this, $i, void 0), si(this, Li, void 0), !e && !(e = this.get)) throw Error("Unknown getter");
            Qi(this, e)
          }
        },
        Qi = (e, t) => Ni(e, $i, t),
        Ni = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        Di = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Bi = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Gi = new RegExp(`(${Di.source})(%|[a-z]+)`, "i"),
        Zi = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Xi = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Yi = e => {
          let [t, r] = Hi(e);
          if (!t || fi()) return e;
          let n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          return n ? n.trim() : r && r.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(r) || e : r && Xi.test(r) ? Yi(r) : r || e
        },
        Hi = e => {
          let t = Xi.exec(e);
          if (!t) return [, ];
          let [, r, n] = t;
          return [r, n]
        },
        Ji = (e, t, r, n, i) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,
        Ki = e => {
          let t = e,
            r = !1;
          if ("function" != typeof t) throw new TypeError("react-spring: once requires a function parameter");
          return function() {
            r || (t(...arguments), r = !0)
          }
        };
      Ki(console.warn), Ki(console.warn), new WeakMap, new Set, new WeakMap, new WeakMap, new WeakMap, fi() ? _.useEffect : _.useLayoutEffect;
      var ea = ga(),
        ta = e => ha(e, ea),
        ra = ga();
      ta.write = e => ha(e, ra);
      var na = ga();
      ta.onStart = e => ha(e, na);
      var ia = ga();
      ta.onFrame = e => ha(e, ia);
      var aa = ga();
      ta.onFinish = e => ha(e, aa);
      var oa = [];
      ta.setTimeout = (e, t) => {
        let r = ta.now() + t,
          n = () => {
            let e = oa.findIndex((e => e.cancel == n));
            ~e && oa.splice(e, 1), da -= ~e ? 1 : 0
          },
          i = {
            time: r,
            handler: e,
            cancel: n
          };
        return oa.splice(sa(r), 0, i), da += 1, fa(), i
      };
      var sa = e => ~(~oa.findIndex((t => t.time > e)) || ~oa.length);
      ta.cancel = e => {
        na.delete(e), ia.delete(e), aa.delete(e), ea.delete(e), ra.delete(e)
      }, ta.sync = e => {
        ca = !0, ta.batchedUpdates(e), ca = !1
      }, ta.throttle = e => {
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
          t = n, ta.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          na.delete(r), t = null
        }, n
      };
      var la = typeof window < "u" ? window.requestAnimationFrame : () => {};
      ta.use = e => la = e, ta.now = typeof performance < "u" ? () => performance.now() : Date.now, ta.batchedUpdates = e => e(), ta.catch = console.error, ta.frameLoop = "always", ta.advance = () => {
        "demand" !== ta.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : ma()
      };
      var ua = -1,
        da = 0,
        ca = !1;

      function ha(e, t) {
        ca ? (t.delete(e), e(0)) : (t.add(e), fa())
      }

      function fa() {
        ua < 0 && (ua = 0, "demand" !== ta.frameLoop && la(pa))
      }

      function pa() {
        ~ua && (la(pa), ta.batchedUpdates(ma))
      }

      function ma() {
        let e = ua;
        ua = ta.now();
        let t = sa(ua);
        t && (va(oa.splice(0, t), (e => e.handler())), da -= t), da ? (na.flush(), ea.flush(e ? Math.min(64, ua - e) : 16.667), ia.flush(), ra.flush(), aa.flush()) : ua = -1
      }

      function ga() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            da += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (da -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, da -= t.size, va(t, (t => t(r) && e.add(t))), da += e.size, t = e)
          }
        }
      }

      function va(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            ta.catch(e)
          }
        }))
      }
      var ya = Object.defineProperty;
      ((e, t) => {
        for (var r in t) ya(e, r, {
          get: t[r],
          enumerable: !0
        })
      })({}, {
        assign: () => Ma,
        colors: () => Aa,
        createStringInterpolator: () => Sa,
        skipAnimation: () => ka,
        to: () => xa,
        willAdvance: () => Pa
      });
      var wa = {
          arr: Array.isArray,
          obj: e => !!e && "Object" === e.constructor.name,
          fun: e => "function" == typeof e,
          str: e => "string" == typeof e,
          num: e => "number" == typeof e,
          und: e => void 0 === e
        },
        ba = (e, t) => e.forEach(t);

      function _a(e, t, r) {
        if (wa.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (let n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var Sa, xa, Aa = null,
        ka = !1,
        Pa = function() {},
        Ma = e => {
          e.to && (xa = e.to), e.now && (ta.now = e.now), void 0 !== e.colors && (Aa = e.colors), null != e.skipAnimation && (ka = e.skipAnimation), e.createStringInterpolator && (Sa = e.createStringInterpolator), e.requestAnimationFrame && ta.use(e.requestAnimationFrame), e.batchedUpdates && (ta.batchedUpdates = e.batchedUpdates), e.willAdvance && (Pa = e.willAdvance), e.frameLoop && (ta.frameLoop = e.frameLoop)
        };
      new Set;
      var Ia = "[-+]?\\d*\\.?\\d+",
        Ea = Ia + "%";

      function Oa() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      new RegExp("rgb" + Oa(Ia, Ia, Ia)), new RegExp("rgba" + Oa(Ia, Ia, Ia, Ia)), new RegExp("hsl" + Oa(Ia, Ea, Ea)), new RegExp("hsla" + Oa(Ia, Ea, Ea, Ia)), Math.PI, Math.PI;
      var Ra = Symbol.for("FluidValue.get"),
        ja = Symbol.for("FluidValue.observers"),
        Ca = e => Boolean(e && e[Ra]);

      function Va(e, t) {
        let r = e[ja];
        if (r && r.has(t)) {
          let n = r.size - 1;
          n ? r.delete(t) : e[ja] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var za = (new RegExp(`(${/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g.source})(%|[a-z]+)`, "i"), "react-spring: "),
        Fa = e => {
          let t = e,
            r = !1;
          if ("function" != typeof t) throw new TypeError(`${za}once requires a function parameter`);
          return function() {
            r || (t(...arguments), r = !0)
          }
        };
      Fa(console.warn), Fa(console.warn), new WeakMap, new Set, new WeakMap, new WeakMap, new WeakMap;
      var qa = typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent) ? _.useEffect : _.useLayoutEffect,
        $a = [];
      var La = Symbol.for("Animated:node"),
        Ta = class {
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
              })(e, La, t)
            })(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        Ua = {
          dependencies: null
        },
        Wa = class extends Ta {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            let t = {};
            return _a(this.source, ((r, n) => {
              (e => !!e && e[La] === e)(r) ? t[n] = r.getValue(e): Ca(r) ? t[n] = (e => e && e[Ra] ? e[Ra]() : e)(r) : e || (t[n] = r)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && ba(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              let t = new Set;
              return _a(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            Ua.dependencies && Ca(e) && Ua.dependencies.add(e);
            let t = (e => e && e[La] && e[La].getPayload())(e);
            t && ba(t, (e => this.add(e)))
          }
        },
        Qa = (e, t) => {
          let r = !wa.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, _.forwardRef)(((n, i) => {
            let a = (0, _.useRef)(null),
              o = r && (0, _.useCallback)((e => {
                a.current = function(e, t) {
                  return e && (wa.fun(e) ? e(t) : e.current = t), t
                }(i, e)
              }), [i]),
              [s, l] = function(e, t) {
                let r = new Set;
                return Ua.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new Wa(e), Ua.dependencies = null, [e, r]
              }(n, t),
              u = function() {
                let e = (0, _.useState)()[1],
                  t = (() => {
                    let e = (0, _.useRef)(!1);
                    return qa((() => (e.current = !0, () => {
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
              c = new Na(d, l),
              h = (0, _.useRef)();
            qa((() => (h.current = c, ba(l, (e => function(e, t) {
              if (e[Ra]) {
                let r = e[ja];
                r || ((e, t, r) => {
                  Object.defineProperty(e, t, {
                    value: r,
                    writable: !0,
                    configurable: !0
                  })
                })(e, ja, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
              }
              return t
            }(e, c))), () => {
              h.current && (ba(h.current.deps, (e => Va(e, h.current))), ta.cancel(h.current.update))
            }))), (0, _.useEffect)(d, []), (0, _.useEffect)((() => () => {
              let e = h.current;
              ba(e.deps, (t => Va(t, e)))
            }), $a);
            let f = t.getComponentProps(s.getValue());
            return _.createElement(e, {
              ...f,
              ref: o
            })
          }))
        },
        Na = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && ta.write(this.update)
          }
        },
        Da = Symbol.for("AnimatedComponent"),
        Ba = e => wa.str(e) ? e : e && wa.str(e.displayName) ? e.displayName : wa.fun(e) && e.name || null;
      var Ga = /^--/;

      function Za(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Ga.test(e) || Ya.hasOwnProperty(e) && Ya[e] ? ("" + t).trim() : t + "px"
      }
      var Xa = {},
        Ya = {
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
        Ha = ["Webkit", "Ms", "Moz", "O"];
      Ya = Object.keys(Ya).reduce(((e, t) => (Ha.forEach((r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t])), e)), Ya);
      var Ja = /^(matrix|translate|scale|rotate|skew)/,
        Ka = /^(translate)/,
        eo = /^(rotate|skew)/,
        to = (e, t) => ci.num(e) && 0 !== e ? e + t : e,
        ro = (e, t) => ci.arr(e) ? e.every((e => ro(e, t))) : ci.num(e) ? e === t : parseFloat(e) === t,
        no = class extends Wa {
          constructor(e) {
            let {
              x: t,
              y: r,
              z: n,
              ...i
            } = e, a = [], o = [];
            (t || r || n) && (a.push([t || 0, r || 0, n || 0]), o.push((e => [`translate3d(${e.map((e=>to(e,"px"))).join(",")})`, ro(e, 0)]))),
            function(e, t, r) {
              if (ci.arr(e))
                for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
              else
                for (let n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
            }(i, ((e, t) => {
              if ("transform" === t) a.push([e || ""]), o.push((e => [e, "" === e]));
              else if (Ja.test(t)) {
                if (delete i[t], ci.und(e)) return;
                let r = Ka.test(t) ? "px" : eo.test(t) ? "deg" : "";
                a.push((e => ci.und(e) ? [] : ci.arr(e) ? e : [e])(e)), o.push("rotate3d" === t ? e => {
                  let [t, n, i, a] = e;
                  return [`rotate3d(${t},${n},${i},${to(a,r)})`, ro(a, 0)]
                } : e => [`${t}(${e.map((e=>to(e,r))).join(",")})`, ro(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), a.length && (i.transform = new io(a, o)), super(i)
          }
        },
        io = class extends Wi {
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
            return hi(this.inputs, ((r, n) => {
              let i = Ui(r[0]),
                [a, o] = this.transforms[n](ci.arr(i) ? i : r.map(Ui));
              e += " " + a, t = t && o
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && hi(this.inputs, (e => hi(e, (e => Ti(e) && function(e, t) {
              if (e[$i]) {
                let r = e[Li];
                r || Ni(e, Li, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
              }
              return t
            }(e, this)))))
          }
          observerRemoved(e) {
            0 == e && hi(this.inputs, (e => hi(e, (e => Ti(e) && function(e, t) {
              let r = e[Li];
              if (r && r.has(t)) {
                let n = r.size - 1;
                n ? r.delete(t) : e[Li] = null, e.observerRemoved && e.observerRemoved(n, t)
              }
            }(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null),
              function(e, t) {
                let r = e[Li];
                r && r.forEach((e => {
                  ! function(e, t) {
                    e.eventObserved ? e.eventObserved(t) : e(t)
                  }(e, t)
                }))
              }(this, e)
          }
        };
      A.assign({
        batchedUpdates: Wn.unstable_batchedUpdates,
        createStringInterpolator: e => {
          qi || (qi = pi ? new RegExp(`(${Object.keys(pi).join("|")})(?!\\w)`, "g") : /^\b$/);
          let t = e.output.map((e => Ui(e).replace(Xi, Yi).replace(Bi, zi).replace(qi, zi))),
            r = t.map((e => e.match(Di).map(Number))),
            n = r[0].map(((e, t) => r.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))).map((t => Fi({
              ...e,
              output: t
            })));
          return e => {
            let r = !Gi.test(t[0]) && t.find((e => Gi.test(e)))?.replace(Di, ""),
              i = 0;
            return t[0].replace(Di, (() => `${n[i++](e)}${r||""}`)).replace(Zi, Ji)
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
      var ao = function(e) {
          let {
            applyAnimatedValues: t = (() => !1),
            createAnimatedStyle: r = (e => new Wa(e)),
            getComponentProps: n = (e => e)
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = {
            applyAnimatedValues: t,
            createAnimatedStyle: r,
            getComponentProps: n
          }, a = e => {
            let t = Ba(e) || "Anonymous";
            return (e = wa.str(e) ? a[e] || (a[e] = Qa(e, i)) : e[Da] || (e[Da] = Qa(e, i))).displayName = `Animated(${t})`, e
          };
          return _a(e, ((t, r) => {
            wa.arr(e) && (r = Ba(t)), a[r] = a(t)
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
              d = Object.keys(l).map((t => r || e.hasAttribute(t) ? t : Xa[t] || (Xa[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== i && (e.textContent = i);
            for (let t in n)
              if (n.hasOwnProperty(t)) {
                let r = Za(t, n[t]);
                Ga.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach(((t, r) => {
              e.setAttribute(t, u[r])
            })), void 0 !== a && (e.scrollTop = a), void 0 !== o && (e.scrollLeft = o), void 0 !== s && e.setAttribute("viewBox", s)
          },
          createAnimatedStyle: e => new no(e),
          getComponentProps: e => {
            let {
              scrollTop: t,
              scrollLeft: r,
              ...n
            } = e;
            return n
          }
        }),
        oo = ao.animated
    }
  }
]);