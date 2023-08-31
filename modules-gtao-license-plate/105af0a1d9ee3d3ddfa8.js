"use strict";
(self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [796], {
    1796: (e, t, r) => {
      r.r(t), r.d(t, {
        Any: () => Ot,
        BailSignal: () => nr,
        Controller: () => xr,
        FrameValue: () => or,
        Globals: () => S,
        Interpolation: () => Zr,
        Spring: () => Xr,
        SpringContext: () => jr,
        SpringRef: () => qr,
        SpringValue: () => fr,
        Trail: () => Yr,
        Transition: () => Hr,
        a: () => bn,
        animated: () => bn,
        config: () => Wt,
        createInterpolator: () => pe,
        easings: () => we,
        inferTo: () => Ft,
        interpolate: () => rn,
        to: () => tn,
        update: () => nn,
        useChain: () => Dt,
        useInView: () => Gr,
        useIsomorphicLayoutEffect: () => st,
        useReducedMotion: () => ct,
        useResize: () => Dr,
        useScroll: () => Br,
        useSpring: () => Tr,
        useSpringRef: () => Fr,
        useSpringValue: () => Lr,
        useSprings: () => zr,
        useTrail: () => Qr,
        useTransition: () => Nr
      });
      var n = b(),
        i = e => m(e, n),
        s = b();
      i.write = e => m(e, s);
      var a = b();
      i.onStart = e => m(e, a);
      var o = b();
      i.onFrame = e => m(e, o);
      var l = b();
      i.onFinish = e => m(e, l);
      var u = [];
      i.setTimeout = (e, t) => {
        let r = i.now() + t,
          n = () => {
            let e = u.findIndex((e => e.cancel == n));
            ~e && u.splice(e, 1), p -= ~e ? 1 : 0
          },
          s = {
            time: r,
            handler: e,
            cancel: n
          };
        return u.splice(d(r), 0, s), p += 1, g(), s
      };
      var d = e => ~(~u.findIndex((t => t.time > e)) || ~u.length);
      i.cancel = e => {
        a.delete(e), o.delete(e), l.delete(e), n.delete(e), s.delete(e)
      }, i.sync = e => {
        f = !0, i.batchedUpdates(e), f = !1
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
          for (var e = arguments.length, n = new Array(e), s = 0; s < e; s++) n[s] = arguments[s];
          t = n, i.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          a.delete(r), t = null
        }, n
      };
      var c = typeof window < "u" ? window.requestAnimationFrame : () => {};
      i.use = e => c = e, i.now = typeof performance < "u" ? () => performance.now() : Date.now, i.batchedUpdates = e => e(), i.catch = console.error, i.frameLoop = "always", i.advance = () => {
        "demand" !== i.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : y()
      };
      var h = -1,
        p = 0,
        f = !1;

      function m(e, t) {
        f ? (t.delete(e), e(0)) : (t.add(e), g())
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
        t && (w(u.splice(0, t), (e => e.handler())), p -= t), p ? (a.flush(), n.flush(e ? Math.min(64, h - e) : 16.667), o.flush(), s.flush(), l.flush()) : h = -1
      }

      function b() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            p += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (p -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, p -= t.size, w(t, (t => t(r) && e.add(t))), p += e.size, t = e)
          }
        }
      }

      function w(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            i.catch(e)
          }
        }))
      }
      var _ = r(4932);

      function k(e, t, r) {
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
      var P = Object.defineProperty,
        S = {};

      function x() {}((e, t) => {
        for (var r in t) P(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(S, {
        assign: () => F,
        colors: () => z,
        createStringInterpolator: () => R,
        skipAnimation: () => T,
        to: () => j,
        willAdvance: () => $
      });
      var M = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function I(e, t) {
        if (M.arr(e)) {
          if (!M.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var A = (e, t) => e.forEach(t);

      function O(e, t, r) {
        if (M.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (let n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var E = e => M.und(e) ? [] : M.arr(e) ? e : [e];

      function C(e, t) {
        if (e.size) {
          let r = Array.from(e);
          e.clear(), A(r, t)
        }
      }
      var R, j, V = function(e) {
          for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
          return C(e, (e => e(...r)))
        },
        q = () => typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        z = null,
        T = !1,
        $ = x,
        F = e => {
          e.to && (j = e.to), e.now && (i.now = e.now), void 0 !== e.colors && (z = e.colors), null != e.skipAnimation && (T = e.skipAnimation), e.createStringInterpolator && (R = e.createStringInterpolator), e.requestAnimationFrame && i.use(e.requestAnimationFrame), e.batchedUpdates && (i.batchedUpdates = e.batchedUpdates), e.willAdvance && ($ = e.willAdvance), e.frameLoop && (i.frameLoop = e.frameLoop)
        },
        L = new Set,
        Q = [],
        N = [],
        U = 0,
        B = {
          get idle() {
            return !L.size && !Q.length
          },
          start(e) {
            U > e.priority ? (L.add(e), i.onStart(D)) : (W(e), i(X))
          },
          advance: X,
          sort(e) {
            if (U) i.onFrame((() => B.sort(e)));
            else {
              let t = Q.indexOf(e);
              ~t && (Q.splice(t, 1), G(e))
            }
          },
          clear() {
            Q = [], L.clear()
          }
        };

      function D() {
        L.forEach(W), L.clear(), i(X)
      }

      function W(e) {
        Q.includes(e) || G(e)
      }

      function G(e) {
        Q.splice(function(e, t) {
          let r = e.findIndex(t);
          return r < 0 ? e.length : r
        }(Q, (t => t.priority > e.priority)), 0, e)
      }

      function X(e) {
        let t = N;
        for (let r = 0; r < Q.length; r++) {
          let n = Q[r];
          U = n.priority, n.idle || ($(n), n.advance(e), n.idle || t.push(n))
        }
        return U = 0, (N = Q).length = 0, (Q = t).length > 0
      }
      var Y = "[-+]?\\d*\\.?\\d+",
        H = Y + "%";

      function Z() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return "\\(\\s*(" + t.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var J = new RegExp("rgb" + Z(Y, Y, Y)),
        K = new RegExp("rgba" + Z(Y, Y, Y, Y)),
        ee = new RegExp("hsl" + Z(Y, H, H)),
        te = new RegExp("hsla" + Z(Y, H, H, Y)),
        re = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ne = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ie = /^#([0-9a-fA-F]{6})$/,
        se = /^#([0-9a-fA-F]{8})$/;

      function ae(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function oe(e, t, r) {
        let n = r < .5 ? r * (1 + t) : r + t - r * t,
          i = 2 * r - n,
          s = ae(i, n, e + 1 / 3),
          a = ae(i, n, e),
          o = ae(i, n, e - 1 / 3);
        return Math.round(255 * s) << 24 | Math.round(255 * a) << 16 | Math.round(255 * o) << 8
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
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = ie.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : z && void 0 !== z[e] ? z[e] : (t = J.exec(e)) ? (le(t[1]) << 24 | le(t[2]) << 16 | le(t[3]) << 8 | 255) >>> 0 : (t = K.exec(e)) ? (le(t[1]) << 24 | le(t[2]) << 16 | le(t[3]) << 8 | de(t[4])) >>> 0 : (t = re.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = se.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ne.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = ee.exec(e)) ? (255 | oe(ue(t[1]), ce(t[2]), ce(t[3]))) >>> 0 : (t = te.exec(e)) ? (oe(ue(t[1]), ce(t[2]), ce(t[3])) | de(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var pe = (e, t, r) => {
          if (M.fun(e)) return e;
          if (M.arr(e)) return pe({
            range: e,
            output: t,
            extrapolate: r
          });
          if (M.str(e.output[0])) return R(e);
          let n = e,
            i = n.output,
            s = n.range || [0, 1],
            a = n.extrapolateLeft || n.extrapolate || "extend",
            o = n.extrapolateRight || n.extrapolate || "extend",
            l = n.easing || (e => e);
          return e => {
            let t = function(e, t) {
              for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
              return r - 1
            }(e, s);
            return function(e, t, r, n, i, s, a, o, l) {
              let u = l ? l(e) : e;
              if (u < t) {
                if ("identity" === a) return u;
                "clamp" === a && (u = t)
              }
              if (u > r) {
                if ("identity" === o) return u;
                "clamp" === o && (u = r)
              }
              return n === i ? n : t === r ? e <= t ? n : i : (t === -1 / 0 ? u = -u : r === 1 / 0 ? u -= t : u = (u - t) / (r - t), u = s(u), n === -1 / 0 ? u = -u : i === 1 / 0 ? u += n : u = u * (i - n) + n, u)
            }(e, s[t], s[t + 1], i[t], i[t + 1], l, a, o, n.map)
          }
        },
        fe = 1.70158,
        me = 1.525 * fe,
        ge = fe + 1,
        ve = 2 * Math.PI / 3,
        ye = 2 * Math.PI / 4.5,
        be = e => e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375,
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
          easeInBack: e => ge * e * e * e - fe * e * e,
          easeOutBack: e => 1 + ge * Math.pow(e - 1, 3) + fe * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (2 * (me + 1) * e - me) / 2 : (Math.pow(2 * e - 2, 2) * ((me + 1) * (2 * e - 2) + me) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * ve),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * ve) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * ye) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * ye) / 2 + 1,
          easeInBounce: e => 1 - be(1 - e),
          easeOutBounce: be,
          easeInOutBounce: e => e < .5 ? (1 - be(1 - 2 * e)) / 2 : (1 + be(2 * e - 1)) / 2,
          steps: function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "end";
            return r => {
              let n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
              return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
            }
          }
        },
        _e = Symbol.for("FluidValue.get"),
        ke = Symbol.for("FluidValue.observers"),
        Pe = e => Boolean(e && e[_e]),
        Se = e => e && e[_e] ? e[_e]() : e,
        xe = e => e[ke] || null;

      function Me(e, t) {
        let r = e[ke];
        r && r.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var Ie = class {
          constructor(e) {
            if (k(this, _e, void 0), k(this, ke, void 0), !e && !(e = this.get)) throw Error("Unknown getter");
            Ae(this, e)
          }
        },
        Ae = (e, t) => Re(e, _e, t);

      function Oe(e, t) {
        if (e[_e]) {
          let r = e[ke];
          r || Re(e, ke, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function Ee(e, t) {
        let r = e[ke];
        if (r && r.has(t)) {
          let n = r.size - 1;
          n ? r.delete(t) : e[ke] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var Ce, Re = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        je = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Ve = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        qe = new RegExp(`(${je.source})(%|[a-z]+)`, "i"),
        ze = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Te = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        $e = e => {
          let [t, r] = Fe(e);
          if (!t || q()) return e;
          let n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          return n ? n.trim() : r && r.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(r) || e : r && Te.test(r) ? $e(r) : r || e
        },
        Fe = e => {
          let t = Te.exec(e);
          if (!t) return [, ];
          let [, r, n] = t;
          return [r, n]
        },
        Le = (e, t, r, n, i) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${i})`,
        Qe = e => {
          Ce || (Ce = z ? new RegExp(`(${Object.keys(z).join("|")})(?!\\w)`, "g") : /^\b$/);
          let t = e.output.map((e => Se(e).replace(Te, $e).replace(Ve, he).replace(Ce, he))),
            r = t.map((e => e.match(je).map(Number))),
            n = r[0].map(((e, t) => r.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))).map((t => pe({
              ...e,
              output: t
            })));
          return e => {
            let r = !qe.test(t[0]) && t.find((e => qe.test(e)))?.replace(je, ""),
              i = 0;
            return t[0].replace(je, (() => `${n[i++](e)}${r||""}`)).replace(ze, Le)
          }
        },
        Ne = "react-spring: ",
        Ue = e => {
          let t = e,
            r = !1;
          if ("function" != typeof t) throw new TypeError(`${Ne}once requires a function parameter`);
          return function() {
            r || (t(...arguments), r = !0)
          }
        },
        Be = Ue(console.warn);

      function De() {
        Be(`${Ne}The "interpolate" function is deprecated in v9 (use "to" instead)`)
      }
      var We = Ue(console.warn);

      function Ge(e) {
        return M.str(e) && ("#" == e[0] || /\d/.test(e) || !q() && Te.test(e) || e in (z || {}))
      }
      var Xe, Ye, He = new WeakMap,
        Ze = e => e.forEach((e => {
          let {
            target: t,
            contentRect: r
          } = e;
          return He.get(t)?.forEach((e => e(r)))
        })),
        Je = new Set,
        Ke = function(e) {
          let {
            container: t = document.documentElement
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return t === document.documentElement ? (e => (Je.add(e), Ye || (Ye = (() => {
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
            Je.delete(e), !Je.size && Ye && (Ye(), Ye = void 0)
          }))(e) : function(e, t) {
            Xe || typeof ResizeObserver < "u" && (Xe = new ResizeObserver(Ze));
            let r = He.get(t);
            return r || (r = new Set, He.set(t, r)), r.add(e), Xe && Xe.observe(t), () => {
              let r = He.get(t);
              !r || (r.delete(e), !r.size && Xe && Xe.unobserve(t))
            }
          }(e, t)
        },
        et = {
          x: {
            length: "Width",
            position: "Left"
          },
          y: {
            length: "Height",
            position: "Top"
          }
        },
        tt = new WeakMap,
        rt = new WeakMap,
        nt = new WeakMap,
        it = e => e === document.documentElement ? window : e,
        st = q() ? _.useEffect : _.useLayoutEffect,
        at = () => {
          let e = (0, _.useRef)(!1);
          return st((() => (e.current = !0, () => {
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
      var lt = e => (0, _.useEffect)(e, ut),
        ut = [];

      function dt(e) {
        let t = (0, _.useRef)();
        return (0, _.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var ct = () => {
        let [e, t] = (0, _.useState)(null);
        return st((() => {
          let e = window.matchMedia("(prefers-reduced-motion)"),
            r = e => {
              t(e.matches), F({
                skipAnimation: e.matches
              })
            };
          return r(e), e.addEventListener("change", r), () => {
            e.removeEventListener("change", r)
          }
        }), []), e
      };

      function ht(e, t, r) {
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
      var pt = Symbol.for("Animated:node"),
        ft = e => e && e[pt],
        mt = (e, t) => ((e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }))(e, pt, t),
        gt = e => e && e[pt] && e[pt].getPayload(),
        vt = class {
          constructor() {
            ht(this, "payload", void 0), mt(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        yt = class e extends vt {
          constructor(e) {
            super(), ht(this, "done", !0), ht(this, "elapsedTime", void 0), ht(this, "lastPosition", void 0), ht(this, "lastVelocity", void 0), ht(this, "v0", void 0), ht(this, "durationProgress", 0), this._value = e, M.num(this._value) && (this.lastPosition = this._value)
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
            return M.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            let {
              done: e
            } = this;
            this.done = !1, M.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        bt = class e extends yt {
          constructor(e) {
            super(0), ht(this, "_string", null), ht(this, "_toString", void 0), this._toString = pe({
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
            if (M.str(e)) {
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
        },
        wt = {
          dependencies: null
        },
        _t = class extends vt {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            let t = {};
            return O(this.source, ((r, n) => {
              (e => !!e && e[pt] === e)(r) ? t[n] = r.getValue(e): Pe(r) ? t[n] = Se(r) : e || (t[n] = r)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && A(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              let t = new Set;
              return O(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            wt.dependencies && Pe(e) && wt.dependencies.add(e);
            let t = gt(e);
            t && A(t, (e => this.add(e)))
          }
        },
        kt = class extends _t {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new kt(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            let t = this.getPayload();
            return e.length == t.length ? t.map(((t, r) => t.setValue(e[r]))).some(Boolean) : (super.setValue(e.map(Pt)), !0)
          }
        };

      function Pt(e) {
        return (Ge(e) ? bt : yt).create(e)
      }

      function St(e) {
        let t = ft(e);
        return t ? t.constructor : M.arr(e) ? kt : Ge(e) ? bt : yt
      }
      var xt = (e, t) => {
          let r = !M.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, _.forwardRef)(((n, s) => {
            let a = (0, _.useRef)(null),
              o = r && (0, _.useCallback)((e => {
                a.current = function(e, t) {
                  return e && (M.fun(e) ? e(t) : e.current = t), t
                }(s, e)
              }), [s]),
              [l, u] = function(e, t) {
                let r = new Set;
                return wt.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new _t(e), wt.dependencies = null, [e, r]
              }(n, t),
              d = ot(),
              c = () => {
                let e = a.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && d()
              },
              h = new Mt(c, u),
              p = (0, _.useRef)();
            st((() => (p.current = h, A(u, (e => Oe(e, h))), () => {
              p.current && (A(p.current.deps, (e => Ee(e, p.current))), i.cancel(p.current.update))
            }))), (0, _.useEffect)(c, []), lt((() => () => {
              let e = p.current;
              A(e.deps, (t => Ee(t, e)))
            }));
            let f = t.getComponentProps(l.getValue());
            return _.createElement(e, {
              ...f,
              ref: o
            })
          }))
        },
        Mt = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && i.write(this.update)
          }
        },
        It = Symbol.for("AnimatedComponent"),
        At = e => M.str(e) ? e : e && M.str(e.displayName) ? e.displayName : M.fun(e) && e.name || null;
      var Ot = class {
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

      function Et(e, t, r) {
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

      function Ct(e) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        return M.fun(e) ? e(...r) : e
      }
      var Rt = (e, t) => !0 === e || !!(t && e && (M.fun(e) ? e(t) : E(e).includes(t))),
        jt = (e, t) => M.obj(e) ? t && e[t] : e,
        Vt = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        qt = e => e,
        zt = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qt,
            r = Tt;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          let n = {};
          for (let i of r) {
            let r = t(e[i], i);
            M.und(r) || (n[i] = r)
          }
          return n
        },
        Tt = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        $t = {
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

      function Ft(e) {
        let t = function(e) {
          let t = {},
            r = 0;
          if (O(e, ((e, n) => {
              $t[n] || (t[n] = e, r++)
            })), r) return t
        }(e);
        if (t) {
          let r = {
            to: t
          };
          return O(e, ((e, n) => n in t || (r[n] = e))), r
        }
        return {
          ...e
        }
      }

      function Lt(e) {
        return e = Se(e), M.arr(e) ? e.map(Lt) : Ge(e) ? S.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function Qt(e) {
        for (let t in e) return !0;
        return !1
      }

      function Nt(e) {
        return M.fun(e) || M.arr(e) && M.obj(e[0])
      }

      function Ut(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function Bt(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }

      function Dt(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3;
        st((() => {
          if (t) {
            let n = 0;
            A(e, ((e, i) => {
              let s = e.current;
              if (s.length) {
                let a = r * t[i];
                isNaN(a) ? a = n : n = a, A(s, (e => {
                  A(e.queue, (e => {
                    let t = e.delay;
                    e.delay = e => a + Ct(t || 0, e)
                  }))
                })), e.start()
              }
            }))
          } else {
            let t = Promise.resolve();
            A(e, (e => {
              let r = e.current;
              if (r.length) {
                let n = r.map((e => {
                  let t = e.queue;
                  return e.queue = [], t
                }));
                t = t.then((() => (A(r, ((e, t) => A(n[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
              }
            }))
          }
        }))
      }
      var Wt = {
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
        Gt = {
          ...Wt.default,
          mass: 1,
          damping: 1,
          easing: we.linear,
          clamp: !1
        };

      function Xt(e, t) {
        if (M.und(t.decay)) {
          let r = !M.und(t.tension) || !M.und(t.friction);
          (r || !M.und(t.frequency) || !M.und(t.damping) || !M.und(t.mass)) && (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Yt = [];

      function Ht(e, t) {
        let {
          key: r,
          props: n,
          defaultProps: s,
          state: a,
          actions: o
        } = t;
        return new Promise(((t, l) => {
          let u, d, c = Rt(n.cancel ?? s?.cancel, r);
          if (c) f();
          else {
            M.und(n.pause) || (a.paused = Rt(n.pause, r));
            let e = s?.pause;
            !0 !== e && (e = a.paused || Rt(e, r)), u = Ct(n.delay || 0, r), e ? (a.resumeQueue.add(p), o.pause()) : (o.resume(), p())
          }

          function h() {
            a.resumeQueue.add(p), a.timeouts.delete(d), d.cancel(), u = d.time - i.now()
          }

          function p() {
            u > 0 && !S.skipAnimation ? (a.delayed = !0, d = i.setTimeout(f, u), a.pauseQueue.add(h), a.timeouts.add(d)) : f()
          }

          function f() {
            a.delayed && (a.delayed = !1), a.pauseQueue.delete(h), a.timeouts.delete(d), e <= (a.cancelId || 0) && (c = !0);
            try {
              o.start({
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
      var Zt = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? er(e.get()) : t.every((e => e.noop)) ? Jt(e.get()) : Kt(e.get(), t.every((e => e.finished))),
        Jt = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        Kt = function(e, t) {
          return {
            value: e,
            finished: t,
            cancelled: arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          }
        },
        er = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function tr(e, t, r, n) {
        let {
          callId: s,
          parentId: a,
          onRest: o
        } = t, {
          asyncTo: l,
          promise: u
        } = r;
        return a || e !== l || t.reset ? r.promise = (async () => {
          r.asyncId = s, r.asyncTo = e;
          let d, c, h, p = zt(t, ((e, t) => "onRest" === t ? void 0 : e)),
            f = new Promise(((e, t) => (d = e, c = t))),
            m = e => {
              let t = s <= (r.cancelId || 0) && er(n) || s !== r.asyncId && Kt(n, !1);
              if (t) throw e.result = t, c(e), e
            },
            g = (e, t) => {
              let i = new nr,
                a = new ir;
              return (async () => {
                if (S.skipAnimation) throw rr(r), a.result = Kt(n, !1), c(a), a;
                m(i);
                let o = M.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                o.parentId = s, O(p, ((e, t) => {
                  M.und(o[t]) && (o[t] = e)
                }));
                let l = await n.start(o);
                return m(i), r.paused && await new Promise((e => {
                  r.resumeQueue.add(e)
                })), l
              })()
            };
          if (S.skipAnimation) return rr(r), Kt(n, !1);
          try {
            let t;
            t = M.arr(e) ? (async e => {
              for (let t of e) await g(t)
            })(e) : Promise.resolve(e(g, n.stop.bind(n))), await Promise.all([t.then(d), f]), h = Kt(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof nr) h = e.result;
            else {
              if (!(e instanceof ir)) throw e;
              h = e.result
            }
          } finally {
            s == r.asyncId && (r.asyncId = a, r.asyncTo = a ? l : void 0, r.promise = a ? u : void 0)
          }
          return M.fun(o) && i.batchedUpdates((() => {
            o(h, n, n.item)
          })), h
        })() : u
      }

      function rr(e, t) {
        C(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var nr = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."), Et(this, "result", void 0)
          }
        },
        ir = class extends Error {
          constructor() {
            super("SkipAnimationSignal"), Et(this, "result", void 0)
          }
        },
        sr = e => e instanceof or,
        ar = 1,
        or = class extends Ie {
          constructor() {
            super(...arguments), Et(this, "id", ar++), Et(this, "_priority", 0)
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            let e = ft(this);
            return e && e.getValue()
          }
          to() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return S.to(this, t)
          }
          interpolate() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return De(), S.to(this, t)
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
            this.idle || B.sort(this), Me(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        lr = Symbol.for("SpringPhase"),
        ur = e => (1 & e[lr]) > 0,
        dr = e => (2 & e[lr]) > 0,
        cr = e => (4 & e[lr]) > 0,
        hr = (e, t) => t ? e[lr] |= 3 : e[lr] &= -3,
        pr = (e, t) => t ? e[lr] |= 4 : e[lr] &= -5,
        fr = class extends or {
          constructor(e, t) {
            if (super(), Et(this, "key", void 0), Et(this, "animation", new class {
                constructor() {
                  Et(this, "changed", !1), Et(this, "values", Yt), Et(this, "toValues", null), Et(this, "fromValues", Yt), Et(this, "to", void 0), Et(this, "from", void 0), Et(this, "config", new class {
                    constructor() {
                      Et(this, "tension", void 0), Et(this, "friction", void 0), Et(this, "frequency", void 0), Et(this, "damping", void 0), Et(this, "mass", void 0), Et(this, "velocity", 0), Et(this, "restVelocity", void 0), Et(this, "precision", void 0), Et(this, "progress", void 0), Et(this, "duration", void 0), Et(this, "easing", void 0), Et(this, "clamp", void 0), Et(this, "bounce", void 0), Et(this, "decay", void 0), Et(this, "round", void 0), Object.assign(this, Gt)
                    }
                  }), Et(this, "immediate", !1)
                }
              }), Et(this, "queue", void 0), Et(this, "defaultProps", {}), Et(this, "_state", {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }), Et(this, "_pendingCalls", new Set), Et(this, "_lastCallId", 0), Et(this, "_lastToId", 0), Et(this, "_memoizedDuration", 0), !M.und(e) || !M.und(t)) {
              let r = M.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              M.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(dr(this) || this._state.asyncTo) || cr(this)
          }
          get goal() {
            return Se(this.animation.to)
          }
          get velocity() {
            let e = ft(this);
            return e instanceof yt ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return ur(this)
          }
          get isAnimating() {
            return dr(this)
          }
          get isPaused() {
            return cr(this)
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
                toValues: s
              } = n,
              a = gt(n.to);
            !a && Pe(n.to) && (s = E(Se(n.to))), n.values.forEach(((o, l) => {
              if (o.done) return;
              let u = o.constructor == bt ? 1 : a ? a[l].lastPosition : s[l],
                d = n.immediate,
                c = u;
              if (!d) {
                if (c = o.lastPosition, i.tension <= 0) return void(o.done = !0);
                let t, r = o.elapsedTime += e,
                  s = n.fromValues[l],
                  a = null != o.v0 ? o.v0 : o.v0 = M.arr(i.velocity) ? i.velocity[l] : i.velocity,
                  h = i.precision || (s == u ? .005 : Math.min(1, .001 * Math.abs(u - s)));
                if (M.und(i.duration))
                  if (i.decay) {
                    let e = !0 === i.decay ? .998 : i.decay,
                      n = Math.exp(-(1 - e) * r);
                    c = s + a / (1 - e) * (1 - n), d = Math.abs(o.lastPosition - c) <= h, t = a * n
                  } else {
                    t = null == o.lastVelocity ? a : o.lastVelocity;
                    let r, n = i.restVelocity || h / 10,
                      l = i.clamp ? 0 : i.bounce,
                      p = !M.und(l),
                      f = s == u ? o.v0 > 0 : s < u,
                      m = !1,
                      g = 1,
                      v = Math.ceil(e / g);
                    for (let e = 0; e < v && (r = Math.abs(t) > n, r || (d = Math.abs(u - c) <= h, !d)); ++e) p && (m = c == u || c > u == f, m && (t = -t * l, c = u)), t += (1e-6 * -i.tension * (c - u) + .001 * -i.friction * t) / i.mass * g, c += t * g
                  }
                else {
                  let n = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, o.durationProgress > 0 && (o.elapsedTime = i.duration * o.durationProgress, r = o.elapsedTime += e)), n = (i.progress || 0) + r / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, o.durationProgress = n), c = s + i.easing(n) * (u - s), t = (c - o.lastPosition) / e, d = 1 == n
                }
                o.lastVelocity = t, Number.isNaN(c) && (console.warn("Got NaN while animating:", this), d = !0)
              }
              a && !a[l].done && (d = !1), d ? o.done = !0 : t = !1, o.setValue(c, i.round) && (r = !0)
            }));
            let o = ft(this),
              l = o.getValue();
            if (t) {
              let e = Se(n.to);
              l === e && !r || i.decay ? r && i.decay && this._onChange(l) : (o.setValue(e), this._onChange(e)), this._stop()
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
            if (dr(this)) {
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
            return M.und(e) ? (r = this.queue || [], this.queue = []) : r = [M.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map((e => this._update(e)))).then((e => Zt(this, e)))
          }
          stop(e) {
            let {
              to: t
            } = this.animation;
            return this._focus(this.get()), rr(this._state, e && this._lastCallId), i.batchedUpdates((() => this._stop(t, e))), this
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
            r = M.obj(r) ? r[t] : r, (null == r || Nt(r)) && (r = void 0), n = M.obj(n) ? n[t] : n, null == n && (n = void 0);
            let i = {
              to: r,
              from: n
            };
            return ur(this) || (e.reverse && ([r, n] = [n, r]), n = Se(n), M.und(n) ? ft(this) || this._set(r) : this._set(n)), i
          }
          _update(e, t) {
            let {
              ...r
            } = e, {
              key: n,
              defaultProps: i
            } = this;
            r.default && Object.assign(i, zt(r, ((e, t) => /^on/.test(t) ? jt(e, n) : e))), _r(this, r, "onProps"), kr(this, "onProps", r, this);
            let s = this._prepareNode(r);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            let a = this._state;
            return Ht(++this._lastCallId, {
              key: n,
              props: r,
              defaultProps: i,
              state: a,
              actions: {
                pause: () => {
                  cr(this) || (pr(this, !0), V(a.pauseQueue), kr(this, "onPause", Kt(this, mr(this, this.animation.to)), this))
                },
                resume: () => {
                  cr(this) && (pr(this, !1), dr(this) && this._resume(), V(a.resumeQueue), kr(this, "onResume", Kt(this, mr(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, s)
              }
            }).then((e => {
              if (r.loop && e.finished && (!t || !e.noop)) {
                let e = gr(r);
                if (e) return this._update(e, !0)
              }
              return e
            }))
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(er(this));
            let n = !M.und(e.to),
              s = !M.und(e.from);
            if (n || s) {
              if (!(t.callId > this._lastToId)) return r(er(this));
              this._lastToId = t.callId
            }
            let {
              key: a,
              defaultProps: o,
              animation: l
            } = this, {
              to: u,
              from: d
            } = l, {
              to: c = u,
              from: h = d
            } = e;
            s && !n && (!t.default || M.und(c)) && (c = h), t.reverse && ([c, h] = [h, c]);
            let p = !I(h, d);
            p && (l.from = h), h = Se(h);
            let f = !I(c, u);
            f && this._focus(c);
            let m = Nt(t.to),
              {
                config: g
              } = l,
              {
                decay: v,
                velocity: y
              } = g;
            (n || s) && (g.velocity = 0), t.config && !m && function(e, t, r) {
              r && (Xt(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), Xt(e, t), Object.assign(e, t);
              for (let t in Gt) null == e[t] && (e[t] = Gt[t]);
              let {
                mass: n,
                frequency: i,
                damping: s
              } = e;
              M.und(i) || (i < .01 && (i = .01), s < 0 && (s = 0), e.tension = Math.pow(2 * Math.PI / i, 2) * n, e.friction = 4 * Math.PI * s * n / i)
            }(g, Ct(t.config, a), t.config !== o.config ? Ct(o.config, a) : void 0);
            let b = ft(this);
            if (!b || M.und(c)) return r(Kt(this, !0));
            let w = M.und(t.reset) ? s && !t.default : !M.und(h) && Rt(t.reset, a),
              _ = w ? h : this.get(),
              k = Lt(c),
              P = M.num(k) || M.arr(k) || Ge(k),
              S = !m && (!P || Rt(o.immediate || t.immediate, a));
            if (f) {
              let e = St(c);
              if (e !== b.constructor) {
                if (!S) throw Error(`Cannot animate between ${b.constructor.name} and ${e.name}, as the "to" prop suggests`);
                b = this._set(k)
              }
            }
            let x = b.constructor,
              O = Pe(c),
              C = !1;
            if (!O) {
              let e = w || !ur(this) && p;
              (f || e) && (C = I(Lt(_), k), O = !C), (!I(l.immediate, S) && !S || !I(g.decay, v) || !I(g.velocity, y)) && (O = !0)
            }
            if (C && dr(this) && (l.changed && !w ? O = !0 : O || this._stop(u)), !m && ((O || Pe(u)) && (l.values = b.getPayload(), l.toValues = Pe(c) ? null : x == bt ? [1] : E(k)), l.immediate != S && (l.immediate = S, !S && !w && this._set(u)), O)) {
              let {
                onRest: e
              } = l;
              A(wr, (e => _r(this, t, e)));
              let n = Kt(this, mr(this, u));
              V(this._pendingCalls, n), this._pendingCalls.add(r), l.changed && i.batchedUpdates((() => {
                l.changed = !w, e?.(n, this), w ? Ct(o.onRest, n) : l.onStart?.(n, this)
              }))
            }
            w && this._set(_), m ? r(tr(t.to, t, this._state, this)) : O ? this._start() : dr(this) && !f ? this._pendingCalls.add(r) : r(Jt(_))
          }
          _focus(e) {
            let t = this.animation;
            e !== t.to && (xe(this) && this._detach(), t.to = e, xe(this) && this._attach())
          }
          _attach() {
            let e = 0,
              {
                to: t
              } = this.animation;
            Pe(t) && (Oe(t, this), sr(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            let {
              to: e
            } = this.animation;
            Pe(e) && Ee(e, this)
          }
          _set(e) {
            let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
              r = Se(e);
            if (!M.und(r)) {
              let e = ft(this);
              if (!e || !I(r, e.getValue())) {
                let n = St(r);
                e && e.constructor == n ? e.setValue(r) : mt(this, n.create(r)), e && i.batchedUpdates((() => {
                  this._onChange(r, t)
                }))
              }
            }
            return ft(this)
          }
          _onStart() {
            let e = this.animation;
            e.changed || (e.changed = !0, kr(this, "onStart", Kt(this, mr(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), Ct(this.animation.onChange, e, this)), Ct(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            let e = this.animation;
            ft(this).reset(Se(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), dr(this) || (hr(this, !0), cr(this) || this._resume())
          }
          _resume() {
            S.skipAnimation ? this.finish() : B.start(this)
          }
          _stop(e, t) {
            if (dr(this)) {
              hr(this, !1);
              let r = this.animation;
              A(r.values, (e => {
                e.done = !0
              })), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Me(this, {
                type: "idle",
                parent: this
              });
              let n = t ? er(this.get()) : Kt(this.get(), mr(this, e ?? r.to));
              V(this._pendingCalls, n), r.changed && (r.changed = !1, kr(this, "onRest", n, this))
            }
          }
        };

      function mr(e, t) {
        let r = Lt(t);
        return I(Lt(e.get()), r)
      }

      function gr(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.loop,
          r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.to,
          n = Ct(t);
        if (n) {
          let i = !0 !== n && Ft(n),
            s = (i || e).reverse,
            a = !i || i.reset;
          return vr({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !s || Nt(r) ? r : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...i
          })
        }
      }

      function vr(e) {
        let {
          to: t,
          from: r
        } = e = Ft(e), n = new Set;
        return M.obj(t) && br(t, n), M.obj(r) && br(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function yr(e) {
        let t = vr(e);
        return M.und(t.default) && (t.default = zt(t)), t
      }

      function br(e, t) {
        O(e, ((e, r) => null != e && t.add(r)))
      }
      var wr = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function _r(e, t, r) {
        e.animation[r] = t[r] !== Vt(t, r) ? jt(t[r], e.key) : void 0
      }

      function kr(e, t) {
        for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var Pr = ["onStart", "onChange", "onRest"],
        Sr = 1,
        xr = class {
          constructor(e, t) {
            Et(this, "id", Sr++), Et(this, "springs", {}), Et(this, "queue", []), Et(this, "ref", void 0), Et(this, "_flush", void 0), Et(this, "_initialProps", void 0), Et(this, "_lastAsyncId", 0), Et(this, "_active", new Set), Et(this, "_changed", new Set), Et(this, "_started", !1), Et(this, "_item", void 0), Et(this, "_state", {
              paused: !1,
              pauseQueue: new Set,
              resumeQueue: new Set,
              timeouts: new Set
            }), Et(this, "_events", {
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
              M.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(vr(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = E(e).map(vr) : this.queue = [], this._flush ? this._flush(this, t) : (Rr(this, t), Mr(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              let r = this.springs;
              A(E(t), (t => r[t].stop(!!e)))
            } else rr(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (M.und(e)) this.start({
              pause: !0
            });
            else {
              let t = this.springs;
              A(E(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (M.und(e)) this.start({
              pause: !1
            });
            else {
              let t = this.springs;
              A(E(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            O(this.springs, e)
          }
          _onFrame() {
            let {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, n = this._active.size > 0, i = this._changed.size > 0;
            (n && !this._started || i && !this._started) && (this._started = !0, C(e, (e => {
              let [t, r] = e;
              r.value = this.get(), t(r, this, this._item)
            })));
            let s = !n && this._started,
              a = i || s && r.size ? this.get() : null;
            i && t.size && C(t, (e => {
              let [t, r] = e;
              r.value = a, t(r, this, this._item)
            })), s && (this._started = !1, C(r, (e => {
              let [t, r] = e;
              r.value = a, t(r, this, this._item)
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

      function Mr(e, t) {
        return Promise.all(t.map((t => Ir(e, t)))).then((t => Zt(e, t)))
      }
      async function Ir(e, t, r) {
        let {
          keys: n,
          to: s,
          from: a,
          loop: o,
          onRest: l,
          onResolve: u
        } = t, d = M.obj(t.default) && t.default;
        o && (t.loop = !1), !1 === s && (t.to = null), !1 === a && (t.from = null);
        let c = M.arr(s) || M.fun(s) ? s : void 0;
        c ? (t.to = void 0, t.onRest = void 0, d && (d.onRest = void 0)) : A(Pr, (r => {
          let n = t[r];
          if (M.fun(n)) {
            let i = e._events[r];
            t[r] = e => {
              let {
                finished: t,
                cancelled: r
              } = e, s = i.get(n);
              s ? (t || (s.finished = !1), r && (s.cancelled = !0)) : i.set(n, {
                value: null,
                finished: t || !1,
                cancelled: r || !1
              })
            }, d && (d[r] = t[r])
          }
        }));
        let h = e._state;
        t.pause === !h.paused ? (h.paused = t.pause, V(t.pause ? h.pauseQueue : h.resumeQueue)) : h.paused && (t.pause = !0);
        let p = (n || Object.keys(e.springs)).map((r => e.springs[r].start(t))),
          f = !0 === t.cancel || !0 === Vt(t, "cancel");
        (c || f && h.asyncId) && p.push(Ht(++e._lastAsyncId, {
          props: t,
          state: h,
          actions: {
            pause: x,
            resume: x,
            start(t, r) {
              f ? (rr(h, e._lastAsyncId), r(er(e))) : (t.onRest = l, r(tr(c, t, h, e)))
            }
          }
        })), h.paused && await new Promise((e => {
          h.resumeQueue.add(e)
        }));
        let m = Zt(e, await Promise.all(p));
        if (o && m.finished && (!r || !m.noop)) {
          let r = gr(t, o, s);
          if (r) return Rr(e, [r]), Ir(e, r, !0)
        }
        return u && i.batchedUpdates((() => u(m, e, e.item))), m
      }

      function Ar(e, t) {
        let r = {
          ...e.springs
        };
        return t && A(E(t), (e => {
          M.und(e.keys) && (e = vr(e)), M.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), Cr(r, e, (e => Er(e)))
        })), Or(e, r), r
      }

      function Or(e, t) {
        O(t, ((t, r) => {
          e.springs[r] || (e.springs[r] = t, Oe(t, e))
        }))
      }

      function Er(e, t) {
        let r = new fr;
        return r.key = e, t && Oe(r, t), r
      }

      function Cr(e, t, r) {
        t.keys && A(t.keys, (n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        }))
      }

      function Rr(e, t) {
        A(t, (t => {
          Cr(e.springs, t, (t => Er(t, e)))
        }))
      }
      var jr = e => {
          let {
            children: t,
            ...r
          } = e, n = (0, _.useContext)(Vr), i = r.pause || !!n.pause, s = r.immediate || !!n.immediate;
          r = function(e, t) {
            let [r] = (0, _.useState)((() => ({
              inputs: t,
              result: e()
            }))), n = (0, _.useRef)(), i = n.current, s = i;
            return s ? Boolean(t && s.inputs && function(e, t) {
              if (e.length !== t.length) return !1;
              for (let r = 0; r < e.length; r++)
                if (e[r] !== t[r]) return !1;
              return !0
            }(t, s.inputs)) || (s = {
              inputs: t,
              result: e()
            }) : s = r, (0, _.useEffect)((() => {
              n.current = s, i == r && (r.inputs = r.result = void 0)
            }), [s]), s.result
          }((() => ({
            pause: i,
            immediate: s
          })), [i, s]);
          let {
            Provider: a
          } = Vr;
          return _.createElement(a, {
            value: r
          }, t)
        },
        Vr = function(e, t) {
          return Object.assign(e, _.createContext(t)), e.Provider._context = e, e.Consumer._context = e, e
        }(jr, {});
      jr.Provider = Vr.Provider, jr.Consumer = Vr.Consumer;
      var qr = () => {
        let e = [],
          t = function(t) {
            We(`${Ne}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            let n = [];
            return A(e, ((e, i) => {
              if (M.und(t)) n.push(e.start());
              else {
                let s = r(t, e, i);
                s && n.push(e.start(s))
              }
            })), n
          };
        t.current = e, t.add = function(t) {
          e.includes(t) || e.push(t)
        }, t.delete = function(t) {
          let r = e.indexOf(t);
          ~r && e.splice(r, 1)
        }, t.pause = function() {
          return A(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return A(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          A(e, ((e, r) => {
            let n = M.fun(t) ? t(r, e) : t;
            n && e.set(n)
          }))
        }, t.start = function(t) {
          let r = [];
          return A(e, ((e, n) => {
            if (M.und(t)) r.push(e.start());
            else {
              let i = this._getProps(t, e, n);
              i && r.push(e.start(i))
            }
          })), r
        }, t.stop = function() {
          return A(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return A(e, ((e, r) => e.update(this._getProps(t, e, r)))), this
        };
        let r = function(e, t, r) {
          return M.fun(e) ? e(r, t) : e
        };
        return t._getProps = r, t
      };

      function zr(e, t, r) {
        let n = M.fun(t) && t;
        n && !r && (r = []);
        let i = (0, _.useMemo)((() => n || 3 == arguments.length ? qr() : void 0), []),
          s = (0, _.useRef)(0),
          a = ot(),
          o = (0, _.useMemo)((() => ({
            ctrls: [],
            queue: [],
            flush(e, t) {
              let r = Ar(e, t);
              return s.current > 0 && !o.queue.length && !Object.keys(r).some((t => !e.springs[t])) ? Mr(e, t) : new Promise((n => {
                Or(e, r), o.queue.push((() => {
                  n(Mr(e, t))
                })), a()
              }))
            }
          })), []),
          l = (0, _.useRef)([...o.ctrls]),
          u = [],
          d = dt(e) || 0;

        function c(e, r) {
          for (let i = e; i < r; i++) {
            let e = l.current[i] || (l.current[i] = new xr(null, o.flush)),
              r = n ? n(i, e) : t[i];
            r && (u[i] = yr(r))
          }
        }(0, _.useMemo)((() => {
          A(l.current.slice(e, d), (e => {
            Ut(e, i), e.stop(!0)
          })), l.current.length = e, c(d, e)
        }), [e]), (0, _.useMemo)((() => {
          c(0, Math.min(d, e))
        }), r);
        let h = l.current.map(((e, t) => Ar(e, u[t]))),
          p = (0, _.useContext)(jr),
          f = dt(p),
          m = p !== f && Qt(p);
        st((() => {
          s.current++, o.ctrls = l.current;
          let {
            queue: e
          } = o;
          e.length && (o.queue = [], A(e, (e => e()))), A(l.current, ((e, t) => {
            i?.add(e), m && e.start({
              default: p
            });
            let r = u[t];
            r && (Bt(e, r.ref), e.ref ? e.queue.push(r) : e.start(r))
          }))
        })), lt((() => () => {
          A(o.ctrls, (e => e.stop(!0)))
        }));
        let g = h.map((e => ({
          ...e
        })));
        return i ? [g, i] : g
      }

      function Tr(e, t) {
        let r = M.fun(e),
          [
            [n], i
          ] = zr(1, r ? e : [e], r ? t || [] : t);
        return r || 2 == arguments.length ? [n, i] : n
      }
      var $r = () => qr(),
        Fr = () => (0, _.useState)($r)[0],
        Lr = (e, t) => {
          let r = function(e) {
            let t = (0, _.useRef)(null);
            return null === t.current && (t.current = e()), t.current
          }((() => new fr(e, t)));
          return lt((() => () => {
            r.stop()
          })), r
        };

      function Qr(e, t, r) {
        let n = M.fun(t) && t;
        n && !r && (r = []);
        let i, s = !0,
          a = zr(e, ((e, r) => {
            let a = n ? n(e, r) : t;
            return i = a.ref, s = s && a.reverse, a
          }), r || [{}]);
        if (st((() => {
            A(a[1].current, ((e, t) => {
              let r = a[1].current[t + (s ? 1 : -1)];
              Bt(e, i), e.ref ? r && e.update({
                to: r.springs
              }) : r ? e.start({
                to: r.springs
              }) : e.start()
            }))
          }), r), n || 3 == arguments.length) {
          let e = i ?? a[1];
          return e._getProps = (t, r, n) => {
            let i = M.fun(t) ? t(n, r) : t;
            if (i) {
              let t = e.current[n + (i.reverse ? 1 : -1)];
              return t && (i.to = t.springs), i
            }
          }, a
        }
        return a[0]
      }

      function Nr(e, t, r) {
        let n = M.fun(t) && t,
          {
            reset: i,
            sort: s,
            trail: a = 0,
            expires: o = !0,
            exitBeforeEnter: l = !1,
            onDestroyed: u,
            ref: d,
            config: c
          } = n ? n() : t,
          h = (0, _.useMemo)((() => n || 3 == arguments.length ? qr() : void 0), []),
          p = E(e),
          f = [],
          m = (0, _.useRef)(null),
          g = i ? null : m.current;
        st((() => {
          m.current = f
        })), lt((() => (A(f, (e => {
          h?.add(e.ctrl), e.ctrl.ref = h
        })), () => {
          A(m.current, (e => {
            e.expired && clearTimeout(e.expirationId), Ut(e.ctrl, h), e.ctrl.stop(!0)
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
                return n ? (t.add(n), n.key) : Ur++
              }))
            }
            return M.und(i) ? e : M.fun(i) ? e.map(i) : E(i)
          }(p, n ? n() : t, g),
          y = i && m.current || [];
        st((() => A(y, (e => {
          let {
            ctrl: t,
            item: r,
            key: n
          } = e;
          Ut(t, h), Ct(u, r, n)
        }))));
        let b = [];
        if (g && A(g, ((e, t) => {
            e.expired ? (clearTimeout(e.expirationId), y.push(e)) : ~(t = b[t] = v.indexOf(e.key)) && (f[t] = e)
          })), A(p, ((e, t) => {
            f[t] || (f[t] = {
              key: v[t],
              item: e,
              phase: "mount",
              ctrl: new xr
            }, f[t].ctrl.item = e)
          })), b.length) {
          let e = -1,
            {
              leave: r
            } = n ? n() : t;
          A(b, ((t, n) => {
            let i = g[n];
            ~t ? (e = f.indexOf(i), f[e] = {
              ...i,
              item: p[t]
            }) : r && f.splice(++e, 0, i)
          }))
        }
        M.fun(s) && f.sort(((e, t) => s(e.item, t.item)));
        let w = -a,
          k = ot(),
          P = zt(t),
          S = new Map,
          x = (0, _.useRef)(new Map),
          I = (0, _.useRef)(!1);
        A(f, ((e, r) => {
          let i, s, u = e.key,
            h = e.phase,
            p = n ? n() : t,
            f = Ct(p.delay || 0, u);
          if ("mount" == h) i = p.enter, s = "enter";
          else {
            let e = v.indexOf(u) < 0;
            if ("leave" != h)
              if (e) i = p.leave, s = "leave";
              else {
                if (!(i = p.update)) return;
                s = "update"
              }
            else {
              if (e) return;
              i = p.enter, s = "enter"
            }
          }
          if (i = Ct(i, e.item, r), i = M.obj(i) ? Ft(i) : {
              to: i
            }, !i.config) {
            let t = c || P.config;
            i.config = Ct(t, e.item, r, s)
          }
          w += a;
          let y = {
            ...P,
            delay: f + w,
            ref: d,
            immediate: p.immediate,
            reset: !1,
            ...i
          };
          if ("enter" == s && M.und(y.from)) {
            let i = n ? n() : t,
              s = M.und(i.initial) || g ? i.from : i.initial;
            y.from = Ct(s, e.item, r)
          }
          let {
            onResolve: b
          } = y;
          y.onResolve = e => {
            Ct(b, e);
            let t = m.current,
              r = t.find((e => e.key === u));
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              let e = t.every((e => e.ctrl.idle));
              if ("leave" == r.phase) {
                let t = Ct(o, r.item);
                if (!1 !== t) {
                  let n = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && n > 0) return void(n <= 2147483647 && (r.expirationId = setTimeout(k, n)))
                }
              }
              e && t.some((e => e.expired)) && (x.current.delete(r), l && (I.current = !0), k())
            }
          };
          let _ = Ar(e.ctrl, y);
          "leave" === s && l ? x.current.set(e, {
            phase: s,
            springs: _,
            payload: y
          }) : S.set(e, {
            phase: s,
            springs: _,
            payload: y
          })
        }));
        let O = (0, _.useContext)(jr),
          C = dt(O),
          R = O !== C && Qt(O);
        st((() => {
          R && A(f, (e => {
            e.ctrl.start({
              default: O
            })
          }))
        }), [O]), A(S, ((e, t) => {
          if (x.current.size) {
            let e = f.findIndex((e => e.key === t.key));
            f.splice(e, 1)
          }
        })), st((() => {
          A(x.current.size ? x.current : S, ((e, t) => {
            let {
              phase: r,
              payload: n
            } = e, {
              ctrl: i
            } = t;
            t.phase = r, h?.add(i), R && "enter" == r && i.start({
              default: O
            }), n && (Bt(i, n.ref), !i.ref && !h || I.current ? (i.start(n), I.current && (I.current = !1)) : i.update(n))
          }))
        }), i ? void 0 : r);
        let j = e => _.createElement(_.Fragment, null, f.map(((t, r) => {
          let {
            springs: n
          } = S.get(t) || t.ctrl, i = e({
            ...n
          }, t.item, t, r);
          return i && i.type ? _.createElement(i.type, {
            ...i.props,
            key: M.str(t.key) || M.num(t.key) ? t.key : t.ctrl.id,
            ref: i.ref
          }) : i
        })));
        return h ? [j, h] : j
      }
      var Ur = 1,
        Br = function() {
          let {
            container: e,
            ...t
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, [r, n] = Tr((() => ({
            scrollX: 0,
            scrollY: 0,
            scrollXProgress: 0,
            scrollYProgress: 0,
            ...t
          })), []);
          return st((() => {
            let t = function(e) {
              let {
                container: t = document.documentElement
              } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = nt.get(t);
              r || (r = new Set, nt.set(t, r));
              let n = new class {
                constructor(e, t) {
                  k(this, "callback", void 0), k(this, "container", void 0), k(this, "info", void 0), k(this, "createAxis", (() => ({
                    current: 0,
                    progress: 0,
                    scrollLength: 0
                  }))), k(this, "updateAxis", (e => {
                    let t = this.info[e],
                      {
                        length: r,
                        position: n
                      } = et[e];
                    t.current = this.container[`scroll${n}`], t.scrollLength = this.container["scroll" + r] - this.container["client" + r], t.progress = ((e, t, r) => t - 0 == 0 ? 1 : (r - 0) / (t - 0))(0, t.scrollLength, t.current)
                  })), k(this, "update", (() => {
                    this.updateAxis("x"), this.updateAxis("y")
                  })), k(this, "sendEvent", (() => {
                    this.callback(this.info)
                  })), k(this, "advance", (() => {
                    this.update(), this.sendEvent()
                  })), this.callback = e, this.container = t, this.info = {
                    time: 0,
                    x: this.createAxis(),
                    y: this.createAxis()
                  }
                }
              }(e, t);
              if (r.add(n), !tt.has(t)) {
                let e = () => (r?.forEach((e => e.advance())), !0);
                tt.set(t, e);
                let n = it(t);
                window.addEventListener("resize", e, {
                  passive: !0
                }), t !== document.documentElement && rt.set(t, Ke(e, {
                  container: t
                })), n.addEventListener("scroll", e, {
                  passive: !0
                })
              }
              let s = tt.get(t);
              return i(s), () => {
                i.cancel(s);
                let e = nt.get(t);
                if (!e || (e.delete(n), e.size)) return;
                let r = tt.get(t);
                tt.delete(t), r && (it(t).removeEventListener("scroll", r), window.removeEventListener("resize", r), rt.get(t)?.())
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
              A(Object.values(r), (e => e.stop())), t()
            }
          }), []), r
        },
        Dr = e => {
          let {
            container: t,
            ...r
          } = e, [n, i] = Tr((() => ({
            width: 0,
            height: 0,
            ...r
          })), []);
          return st((() => {
            let e = Ke((e => {
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
              A(Object.values(n), (e => e.stop())), e()
            }
          }), []), n
        },
        Wr = {
          any: 0,
          all: 1
        };

      function Gr(e, t) {
        let [r, n] = (0, _.useState)(!1), i = (0, _.useRef)(), s = M.fun(e) && e, a = s ? s() : {}, {
          to: o = {},
          from: l = {},
          ...u
        } = a, d = s ? t : e, [c, h] = Tr((() => ({
          from: l,
          ...u
        })), []);
        return st((() => {
          let e = i.current,
            {
              root: t,
              once: s,
              amount: a = "any",
              ...u
            } = d ?? {};
          if (!e || s && r || typeof IntersectionObserver > "u") return;
          let c = new WeakMap,
            p = new IntersectionObserver((e => {
              e.forEach((e => {
                let t = c.get(e.target);
                if (e.isIntersecting !== Boolean(t))
                  if (e.isIntersecting) {
                    let t = (o && h.start(o), n(!0), s ? void 0 : () => {
                      l && h.start(l), n(!1)
                    });
                    M.fun(t) ? c.set(e.target, t) : p.unobserve(e.target)
                  } else t && (t(), c.delete(e.target))
              }))
            }), {
              root: t && t.current || void 0,
              threshold: "number" == typeof a || Array.isArray(a) ? a : Wr[a],
              ...u
            });
          return p.observe(e), () => p.unobserve(e)
        }), [d]), s ? [i, c] : [i, r]
      }

      function Xr(e) {
        let {
          children: t,
          ...r
        } = e;
        return t(Tr(r))
      }

      function Yr(e) {
        let {
          items: t,
          children: r,
          ...n
        } = e, i = Qr(t.length, n);
        return t.map(((e, t) => {
          let n = r(e, t);
          return M.fun(n) ? n(i[t]) : n
        }))
      }

      function Hr(e) {
        let {
          items: t,
          children: r,
          ...n
        } = e;
        return Nr(t, n)(r)
      }
      var Zr = class extends or {
        constructor(e, t) {
          super(), Et(this, "key", void 0), Et(this, "idle", !0), Et(this, "calc", void 0), Et(this, "_active", new Set), this.source = e, this.calc = pe(...t);
          let r = this._get(),
            n = St(r);
          mt(this, n.create(r))
        }
        advance(e) {
          let t = this._get();
          I(t, this.get()) || (ft(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Kr(this._active) && en(this)
        }
        _get() {
          let e = M.arr(this.source) ? this.source.map(Se) : E(Se(this.source));
          return this.calc(...e)
        }
        _start() {
          this.idle && !Kr(this._active) && (this.idle = !1, A(gt(this), (e => {
            e.done = !1
          })), S.skipAnimation ? (i.batchedUpdates((() => this.advance())), en(this)) : B.start(this))
        }
        _attach() {
          let e = 1;
          A(E(this.source), (t => {
            Pe(t) && Oe(t, this), sr(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
          })), this.priority = e, this._start()
        }
        _detach() {
          A(E(this.source), (e => {
            Pe(e) && Ee(e, this)
          })), this._active.clear(), en(this)
        }
        eventObserved(e) {
          "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = E(this.source).reduce(((e, t) => Math.max(e, (sr(t) ? t.priority : 0) + 1)), 0))
        }
      };

      function Jr(e) {
        return !1 !== e.idle
      }

      function Kr(e) {
        return !e.size || Array.from(e).every(Jr)
      }

      function en(e) {
        e.idle || (e.idle = !0, A(gt(e), (e => {
          e.done = !0
        })), Me(e, {
          type: "idle",
          parent: e
        }))
      }
      var tn = function(e) {
          for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
          return new Zr(e, r)
        },
        rn = function(e) {
          for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
          return De(), new Zr(e, r)
        };
      S.assign({
        createStringInterpolator: Qe,
        to: (e, t) => new Zr(e, t)
      });
      var nn = B.advance,
        sn = r(1722);
      var an = /^--/;

      function on(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || an.test(e) || un.hasOwnProperty(e) && un[e] ? ("" + t).trim() : t + "px"
      }
      var ln = {},
        un = {
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
        dn = ["Webkit", "Ms", "Moz", "O"];
      un = Object.keys(un).reduce(((e, t) => (dn.forEach((r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t])), e)), un);
      var cn = /^(matrix|translate|scale|rotate|skew)/,
        hn = /^(translate)/,
        pn = /^(rotate|skew)/,
        fn = (e, t) => M.num(e) && 0 !== e ? e + t : e,
        mn = (e, t) => M.arr(e) ? e.every((e => mn(e, t))) : M.num(e) ? e === t : parseFloat(e) === t,
        gn = class extends _t {
          constructor(e) {
            let {
              x: t,
              y: r,
              z: n,
              ...i
            } = e, s = [], a = [];
            (t || r || n) && (s.push([t || 0, r || 0, n || 0]), a.push((e => [`translate3d(${e.map((e=>fn(e,"px"))).join(",")})`, mn(e, 0)]))), O(i, ((e, t) => {
              if ("transform" === t) s.push([e || ""]), a.push((e => [e, "" === e]));
              else if (cn.test(t)) {
                if (delete i[t], M.und(e)) return;
                let r = hn.test(t) ? "px" : pn.test(t) ? "deg" : "";
                s.push(E(e)), a.push("rotate3d" === t ? e => {
                  let [t, n, i, s] = e;
                  return [`rotate3d(${t},${n},${i},${fn(s,r)})`, mn(s, 0)]
                } : e => [`${t}(${e.map((e=>fn(e,r))).join(",")})`, mn(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), s.length && (i.transform = new vn(s, a)), super(i)
          }
        },
        vn = class extends Ie {
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
            return A(this.inputs, ((r, n) => {
              let i = Se(r[0]),
                [s, a] = this.transforms[n](M.arr(i) ? i : r.map(Se));
              e += " " + s, t = t && a
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && A(this.inputs, (e => A(e, (e => Pe(e) && Oe(e, this)))))
          }
          observerRemoved(e) {
            0 == e && A(this.inputs, (e => A(e, (e => Pe(e) && Ee(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Me(this, e)
          }
        };
      S.assign({
        batchedUpdates: sn.unstable_batchedUpdates,
        createStringInterpolator: Qe,
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
      var yn = function(e) {
          let {
            applyAnimatedValues: t = (() => !1),
            createAnimatedStyle: r = (e => new _t(e)),
            getComponentProps: n = (e => e)
          } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i = {
            applyAnimatedValues: t,
            createAnimatedStyle: r,
            getComponentProps: n
          }, s = e => {
            let t = At(e) || "Anonymous";
            return (e = M.str(e) ? s[e] || (s[e] = xt(e, i)) : e[It] || (e[It] = xt(e, i))).displayName = `Animated(${t})`, e
          };
          return O(e, ((t, r) => {
            M.arr(e) && (r = At(t)), s[r] = s(t)
          })), {
            animated: s
          }
        }(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            let r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                style: n,
                children: i,
                scrollTop: s,
                scrollLeft: a,
                viewBox: o,
                ...l
              } = t,
              u = Object.values(l),
              d = Object.keys(l).map((t => r || e.hasAttribute(t) ? t : ln[t] || (ln[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== i && (e.textContent = i);
            for (let t in n)
              if (n.hasOwnProperty(t)) {
                let r = on(t, n[t]);
                an.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach(((t, r) => {
              e.setAttribute(t, u[r])
            })), void 0 !== s && (e.scrollTop = s), void 0 !== a && (e.scrollLeft = a), void 0 !== o && e.setAttribute("viewBox", o)
          },
          createAnimatedStyle: e => new gn(e),
          getComponentProps: e => {
            let {
              scrollTop: t,
              scrollLeft: r,
              ...n
            } = e;
            return n
          }
        }),
        bn = yn.animated
    }
  }
]);