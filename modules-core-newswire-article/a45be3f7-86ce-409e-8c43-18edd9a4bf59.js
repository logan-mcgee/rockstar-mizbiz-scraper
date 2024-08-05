! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "a45be3f7-86ce-409e-8c43-18edd9a4bf59", t._sentryDebugIdIdentifier = "sentry-dbid-a45be3f7-86ce-409e-8c43-18edd9a4bf59")
  } catch (t) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [3443], {
    87104: (t, e, n) => {
      "use strict";
      n.d(e, {
        $: () => i,
        V: () => o
      });
      var i = function() {},
        o = function() {}
    },
    19435: (t, e, n) => {
      var i = n(78007).Symbol;
      t.exports = i
    },
    7158: (t, e, n) => {
      var i = n(19435),
        o = n(16061),
        s = n(84968),
        r = i ? i.toStringTag : void 0;
      t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : r && r in Object(t) ? o(t) : s(t)
      }
    },
    48530: (t, e, n) => {
      var i = n(18478),
        o = /^\s+/;
      t.exports = function(t) {
        return t ? t.slice(0, i(t) + 1).replace(o, "") : t
      }
    },
    94626: (t, e, n) => {
      var i = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
      t.exports = i
    },
    16061: (t, e, n) => {
      var i = n(19435),
        o = Object.prototype,
        s = o.hasOwnProperty,
        r = o.toString,
        a = i ? i.toStringTag : void 0;
      t.exports = function(t) {
        var e = s.call(t, a),
          n = t[a];
        try {
          t[a] = void 0;
          var i = !0
        } catch (t) {}
        var o = r.call(t);
        return i && (e ? t[a] = n : delete t[a]), o
      }
    },
    84968: t => {
      var e = Object.prototype.toString;
      t.exports = function(t) {
        return e.call(t)
      }
    },
    78007: (t, e, n) => {
      var i = n(94626),
        o = "object" == typeof self && self && self.Object === Object && self,
        s = i || o || Function("return this")();
      t.exports = s
    },
    18478: t => {
      var e = /\s/;
      t.exports = function(t) {
        for (var n = t.length; n-- && e.test(t.charAt(n)););
        return n
      }
    },
    14963: (t, e, n) => {
      var i = n(27335),
        o = n(92346),
        s = n(58972),
        r = Math.max,
        a = Math.min;
      t.exports = function(t, e, n) {
        var l, u, c, h, d, p, f = 0,
          m = !1,
          v = !1,
          g = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function y(e) {
          var n = l,
            i = u;
          return l = u = void 0, f = e, h = t.apply(i, n)
        }

        function x(t) {
          var n = t - p;
          return void 0 === p || n >= e || n < 0 || v && t - f >= c
        }

        function b() {
          var t = o();
          if (x(t)) return w(t);
          d = setTimeout(b, function(t) {
            var n = e - (t - p);
            return v ? a(n, c - (t - f)) : n
          }(t))
        }

        function w(t) {
          return d = void 0, g && l ? y(t) : (l = u = void 0, h)
        }

        function V() {
          var t = o(),
            n = x(t);
          if (l = arguments, u = this, p = t, n) {
            if (void 0 === d) return function(t) {
              return f = t, d = setTimeout(b, e), m ? y(t) : h
            }(p);
            if (v) return clearTimeout(d), d = setTimeout(b, e), y(p)
          }
          return void 0 === d && (d = setTimeout(b, e)), h
        }
        return e = s(e) || 0, i(n) && (m = !!n.leading, c = (v = "maxWait" in n) ? r(s(n.maxWait) || 0, e) : c, g = "trailing" in n ? !!n.trailing : g), V.cancel = function() {
          void 0 !== d && clearTimeout(d), f = 0, l = p = u = d = void 0
        }, V.flush = function() {
          return void 0 === d ? h : w(o())
        }, V
      }
    },
    27335: t => {
      t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
      }
    },
    95360: t => {
      t.exports = function(t) {
        return null != t && "object" == typeof t
      }
    },
    87416: (t, e, n) => {
      var i = n(7158),
        o = n(95360);
      t.exports = function(t) {
        return "symbol" == typeof t || o(t) && "[object Symbol]" == i(t)
      }
    },
    92346: (t, e, n) => {
      var i = n(78007);
      t.exports = function() {
        return i.Date.now()
      }
    },
    58972: (t, e, n) => {
      var i = n(48530),
        o = n(27335),
        s = n(87416),
        r = /^[-+]0x[0-9a-f]+$/i,
        a = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        u = parseInt;
      t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (s(t)) return NaN;
        if (o(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = o(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = i(t);
        var n = a.test(t);
        return n || l.test(t) ? u(t.slice(2), n ? 2 : 8) : r.test(t) ? NaN : +t
      }
    },
    72862: (t, e) => {
      var n;
      ! function() {
        "use strict";
        var i = {}.hasOwnProperty;

        function o() {
          for (var t = "", e = 0; e < arguments.length; e++) {
            var n = arguments[e];
            n && (t = r(t, s(n)))
          }
          return t
        }

        function s(t) {
          if ("string" == typeof t || "number" == typeof t) return t;
          if ("object" != typeof t) return "";
          if (Array.isArray(t)) return o.apply(null, t);
          if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
          var e = "";
          for (var n in t) i.call(t, n) && t[n] && (e = r(e, n));
          return e
        }

        function r(t, e) {
          return e ? t ? t + " " + e : t + e : t
        }
        t.exports ? (o.default = o, t.exports = o) : void 0 === (n = function() {
          return o
        }.apply(e, [])) || (t.exports = n)
      }()
    },
    91621: (t, e, n) => {
      "use strict";
      n.d(e, {
        O: () => St
      });
      var i = n(87104),
        o = n(29727);
      var s = n(880),
        r = n(41387),
        a = n(19096);
      const l = t => t * t,
        u = (0, a.G)(l),
        c = (0, r.V)(l);
      var h = n(53833),
        d = n(28626),
        p = n(17157);

      function f(t, e, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
      }
      var m = n(19550),
        v = n(46041),
        g = n(78493);
      const y = (t, e, n) => {
          const i = t * t;
          return Math.sqrt(Math.max(0, n * (e * e - i) + i))
        },
        x = [m.u, v.B, g.V];

      function b(t) {
        const e = (n = t, x.find((t => t.test(n))));
        var n;
        (0, i.V)(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`);
        let o = e.parse(t);
        return e === g.V && (o = function({
          hue: t,
          saturation: e,
          lightness: n,
          alpha: i
        }) {
          t /= 360, n /= 100;
          let o = 0,
            s = 0,
            r = 0;
          if (e /= 100) {
            const i = n < .5 ? n * (1 + e) : n + e - n * e,
              a = 2 * n - i;
            o = f(a, i, t + 1 / 3), s = f(a, i, t), r = f(a, i, t - 1 / 3)
          } else o = s = r = n;
          return {
            red: Math.round(255 * o),
            green: Math.round(255 * s),
            blue: Math.round(255 * r),
            alpha: i
          }
        }(o)), o
      }
      const w = (t, e) => {
        const n = b(t),
          i = b(e),
          o = {
            ...n
          };
        return t => (o.red = y(n.red, i.red, t), o.green = y(n.green, i.green, t), o.blue = y(n.blue, i.blue, t), o.alpha = (0, p.j)(n.alpha, i.alpha, t), v.B.transform(o))
      };
      var V = n(36765),
        S = n(16244);

      function T(t, e) {
        return "number" == typeof t ? n => (0, p.j)(t, e, n) : h.y.test(t) ? w(t, e) : A(t, e)
      }
      const E = (t, e) => {
          const n = [...t],
            i = n.length,
            o = t.map(((t, n) => T(t, e[n])));
          return t => {
            for (let e = 0; e < i; e++) n[e] = o[e](t);
            return n
          }
        },
        P = (t, e) => {
          const n = {
              ...t,
              ...e
            },
            i = {};
          for (const o in n) void 0 !== t[o] && void 0 !== e[o] && (i[o] = T(t[o], e[o]));
          return t => {
            for (const e in i) n[e] = i[e](t);
            return n
          }
        },
        A = (t, e) => {
          const n = S.f.createTransformer(e),
            o = (0, S.V)(t),
            s = (0, S.V)(e);
          return o.numColors === s.numColors && o.numNumbers >= s.numNumbers ? (0, V.F)(E(o.values, s.values), n) : ((0, i.$)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), n => `${n>0?e:t}`)
        };
      var C = n(52940);
      const M = (t, e) => n => (0, p.j)(t, e, n);

      function D(t, e, {
        clamp: n = !0,
        ease: o,
        mixer: s
      } = {}) {
        const r = t.length;
        (0, i.V)(r === e.length, "Both input and output ranges must be the same length"), (0, i.V)(!o || !Array.isArray(o) || o.length === r - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), t[0] > t[r - 1] && (t = [...t].reverse(), e = [...e].reverse());
        const a = function(t, e, n) {
            const i = [],
              o = n || ("number" == typeof(s = t[0]) ? M : "string" == typeof s ? h.y.test(s) ? w : A : Array.isArray(s) ? E : "object" == typeof s ? P : M);
            var s;
            const r = t.length - 1;
            for (let n = 0; n < r; n++) {
              let s = o(t[n], t[n + 1]);
              if (e) {
                const t = Array.isArray(e) ? e[n] : e;
                s = (0, V.F)(t, s)
              }
              i.push(s)
            }
            return i
          }(e, o, s),
          l = a.length,
          u = e => {
            let n = 0;
            if (l > 1)
              for (; n < t.length - 2 && !(e < t[n + 1]); n++);
            const i = (0, C.q)(t[n], t[n + 1], e);
            return a[n](i)
          };
        return n ? e => u((0, d.q)(t[0], t[r - 1], e)) : u
      }
      var k = n(29401);
      const B = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;

      function j(t, e, n, i) {
        if (t === e && n === i) return k.l;
        return o => 0 === o || 1 === o ? o : B(function(t, e, n, i, o) {
          let s, r, a = 0;
          do {
            r = e + (n - e) / 2, s = B(r, i, o) - t, s > 0 ? n = r : e = r
          } while (Math.abs(s) > 1e-7 && ++a < 12);
          return r
        }(o, 0, 1, t, n), e, i)
      }
      var L = n(77118);
      const O = j(.33, 1.53, .69, .99),
        R = (0, a.G)(O),
        F = (0, r.V)(R),
        I = {
          linear: k.l,
          easeIn: l,
          easeInOut: c,
          easeOut: u,
          circIn: L.po,
          circInOut: L.tn,
          circOut: L.yT,
          backIn: R,
          backInOut: F,
          backOut: O,
          anticipate: t => (t *= 2) < 1 ? .5 * R(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        },
        U = t => {
          if (Array.isArray(t)) {
            (0, i.V)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
            const [e, n, o, s] = t;
            return j(e, n, o, s)
          }
          return "string" == typeof t ? ((0, i.V)(void 0 !== I[t], `Invalid easing type '${t}'`), I[t]) : t
        };

      function N({
        keyframes: t,
        ease: e = c,
        times: n,
        duration: i = 300
      }) {
        t = [...t];
        const o = N[0],
          s = (t => Array.isArray(t) && "number" != typeof t[0])(e) ? e.map(U) : U(e),
          r = {
            done: !1,
            value: o
          },
          a = function(t, e) {
            return t.map((t => t * e))
          }(n && n.length === N.length ? n : function(t) {
            const e = t.length;
            return t.map(((t, n) => 0 !== n ? n / (e - 1) : 0))
          }(t), i);

        function l() {
          return D(a, t, {
            ease: Array.isArray(s) ? s : (e = t, n = s, e.map((() => n || c)).splice(0, e.length - 1))
          });
          var e, n
        }
        let u = l();
        return {
          next: t => (r.value = u(t), r.done = t >= i, r),
          flipTarget: () => {
            t.reverse(), u = l()
          }
        }
      }
      const $ = .001,
        H = .01,
        Y = 10,
        X = .05,
        W = 1;
      const q = 12;

      function z(t, e) {
        return t * Math.sqrt(1 - e * e)
      }
      var J = n(79103);
      const K = ["duration", "bounce"],
        _ = ["stiffness", "damping", "mass"];

      function Q(t, e) {
        return e.some((e => void 0 !== t[e]))
      }

      function G({
        keyframes: t,
        restSpeed: e = 2,
        restDelta: n = .01,
        ...o
      }) {
        let s = t[0],
          r = t[t.length - 1];
        const a = {
            done: !1,
            value: s
          },
          {
            stiffness: l,
            damping: u,
            mass: c,
            velocity: h,
            duration: p,
            isResolvedFromDuration: f
          } = function(t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t
            };
            if (!Q(t, _) && Q(t, K)) {
              const n = function({
                duration: t = 800,
                bounce: e = .25,
                velocity: n = 0,
                mass: o = 1
              }) {
                let s, r;
                (0, i.$)(t <= 1e3 * Y, "Spring duration must be 10 seconds or less");
                let a = 1 - e;
                a = (0, d.q)(X, W, a), t = (0, d.q)(H, Y, t / 1e3), a < 1 ? (s = e => {
                  const i = e * a,
                    o = i * t,
                    s = i - n,
                    r = z(e, a),
                    l = Math.exp(-o);
                  return $ - s / r * l
                }, r = e => {
                  const i = e * a * t,
                    o = i * n + n,
                    r = Math.pow(a, 2) * Math.pow(e, 2) * t,
                    l = Math.exp(-i),
                    u = z(Math.pow(e, 2), a);
                  return (-s(e) + $ > 0 ? -1 : 1) * ((o - r) * l) / u
                }) : (s = e => Math.exp(-e * t) * ((e - n) * t + 1) - $, r = e => Math.exp(-e * t) * (t * t * (n - e)));
                const l = function(t, e, n) {
                  let i = n;
                  for (let n = 1; n < q; n++) i -= t(i) / e(i);
                  return i
                }(s, r, 5 / t);
                if (t *= 1e3, isNaN(l)) return {
                  stiffness: 100,
                  damping: 10,
                  duration: t
                }; {
                  const e = Math.pow(l, 2) * o;
                  return {
                    stiffness: e,
                    damping: 2 * a * Math.sqrt(o * e),
                    duration: t
                  }
                }
              }(t);
              e = {
                ...e,
                ...n,
                velocity: 0,
                mass: 1
              }, e.isResolvedFromDuration = !0
            }
            return e
          }(o);
        let m = Z,
          v = h ? -h / 1e3 : 0;
        const g = u / (2 * Math.sqrt(l * c));

        function y() {
          const t = r - s,
            e = Math.sqrt(l / c) / 1e3;
          if (void 0 === n && (n = Math.min(Math.abs(r - s) / 100, .4)), g < 1) {
            const n = z(e, g);
            m = i => {
              const o = Math.exp(-g * e * i);
              return r - o * ((v + g * e * t) / n * Math.sin(n * i) + t * Math.cos(n * i))
            }
          } else if (1 === g) m = n => r - Math.exp(-e * n) * (t + (v + e * t) * n);
          else {
            const n = e * Math.sqrt(g * g - 1);
            m = i => {
              const o = Math.exp(-g * e * i),
                s = Math.min(n * i, 300);
              return r - o * ((v + g * e * t) * Math.sinh(s) + n * t * Math.cosh(s)) / n
            }
          }
        }
        return y(), {
          next: t => {
            const i = m(t);
            if (f) a.done = t >= p;
            else {
              let o = v;
              if (0 !== t)
                if (g < 1) {
                  const e = Math.max(0, t - 5);
                  o = (0, J.f)(i - m(e), t - e)
                } else o = 0;
              const s = Math.abs(o) <= e,
                l = Math.abs(r - i) <= n;
              a.done = s && l
            }
            return a.value = a.done ? r : i, a
          },
          flipTarget: () => {
            v = -v, [s, r] = [r, s], y()
          }
        }
      }
      G.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
      const Z = t => 0,
        tt = {
          decay: function({
            keyframes: t = [0],
            velocity: e = 0,
            power: n = .8,
            timeConstant: i = 350,
            restDelta: o = .5,
            modifyTarget: s
          }) {
            const r = t[0],
              a = {
                done: !1,
                value: r
              };
            let l = n * e;
            const u = r + l,
              c = void 0 === s ? u : s(u);
            return c !== u && (l = c - r), {
              next: t => {
                const e = -l * Math.exp(-t / i);
                return a.done = !(e > o || e < -o), a.value = a.done ? c : c + e, a
              },
              flipTarget: () => {}
            }
          },
          keyframes: N,
          tween: N,
          spring: G
        };

      function et(t, e, n = 0) {
        return t - e - n
      }
      const nt = t => {
        const e = ({
          delta: e
        }) => t(e);
        return {
          start: () => s.OH.update(e, !0),
          stop: () => s.eO.update(e)
        }
      };

      function it({
        duration: t,
        driver: e = nt,
        elapsed: n = 0,
        repeat: i = 0,
        repeatType: o = "loop",
        repeatDelay: s = 0,
        keyframes: r,
        autoplay: a = !0,
        onPlay: l,
        onStop: u,
        onComplete: c,
        onRepeat: h,
        onUpdate: d,
        type: p = "keyframes",
        ...f
      }) {
        var m, v;
        let g, y, x, b = 0,
          w = t,
          V = !1,
          S = !0;
        const T = tt[r.length > 2 ? "keyframes" : p],
          E = r[0],
          P = r[r.length - 1];
        (null === (v = (m = T).needsInterpolation) || void 0 === v ? void 0 : v.call(m, E, P)) && (x = D([0, 100], [E, P], {
          clamp: !1
        }), r = [0, 100]);
        const A = T({
          ...f,
          duration: t,
          keyframes: r
        });
        return a && (l && l(), g = e((function(t) {
          if (S || (t = -t), n += t, !V) {
            const t = A.next(Math.max(0, n));
            y = t.value, x && (y = x(y)), V = S ? t.done : n <= 0
          }
          d && d(y), V && (0 === b && (w = void 0 !== w ? w : n), b < i ? function(t, e, n, i) {
            return i ? t >= e + n : t <= -n
          }(n, w, s, S) && (b++, "reverse" === o ? (S = b % 2 == 0, n = function(t, e = 0, n = 0, i = !0) {
            return i ? et(e + -t, e, n) : e - (t - e) + n
          }(n, w, s, S)) : (n = et(n, w, s), "mirror" === o && A.flipTarget()), V = !1, h && h()) : (g.stop(), c && c()))
        })), g.start()), {
          stop: () => {
            u && u(), g.stop()
          },
          sample: t => A.next(Math.max(0, t))
        }
      }
      const ot = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`,
        st = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: ot([0, .65, .55, 1]),
          circOut: ot([.55, 0, 1, .45]),
          backIn: ot([.31, .01, .66, -.59]),
          backOut: ot([.33, 1.53, .69, .99])
        };

      function rt(t) {
        if (t) return Array.isArray(t) ? ot(t) : st[t]
      }
      var at = n(55606);

      function lt({
        keyframes: t,
        elapsed: e,
        onUpdate: n,
        onComplete: i
      }) {
        const o = () => (n && n(t[t.length - 1]), i && i(), () => {});
        return e ? (0, at.c)(o, -e) : o()
      }
      var ut = n(61555);
      const ct = () => ({
          type: "spring",
          stiffness: 500,
          damping: 25,
          restSpeed: 10
        }),
        ht = t => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10
        }),
        dt = () => ({
          type: "keyframes",
          ease: "linear",
          duration: .3
        }),
        pt = {
          type: "keyframes",
          duration: .8
        },
        ft = {
          x: ct,
          y: ct,
          z: ct,
          rotate: ct,
          rotateX: ct,
          rotateY: ct,
          rotateZ: ct,
          scaleX: ht,
          scaleY: ht,
          scale: ht,
          opacity: dt,
          backgroundColor: dt,
          color: dt,
          default: ht
        },
        mt = (t, {
          keyframes: e
        }) => e.length > 2 ? pt : (ft[t] || ft.default)(e[1]),
        vt = (t, e) => !("zIndex" === t || "number" != typeof e && !Array.isArray(e) && ("string" != typeof e || !S.f.test(e) || e.startsWith("url(")));
      var gt = n(74522),
        yt = n(15296);
      const xt = {
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
        },
        bt = {},
        wt = {};
      for (const t in xt) wt[t] = () => (void 0 === bt[t] && (bt[t] = xt[t]()), bt[t]);
      const Vt = new Set(["opacity"]),
        St = (t, e, n, r = {}) => a => {
          const l = (0, yt.rU)(r, t) || {},
            u = l.delay || r.delay || 0;
          let {
            elapsed: c = 0
          } = r;
          c -= (0, o.f)(u);
          const h = function(t, e, n, i) {
              const o = vt(e, n);
              let s = void 0 !== i.from ? i.from : t.get();
              return "none" === s && o && "string" == typeof n ? s = (0, gt.J)(e, n) : (0, yt.be)(s) && "string" == typeof n ? s = (0, yt.RL)(n) : !Array.isArray(n) && (0, yt.be)(n) && "string" == typeof s && (n = (0, yt.RL)(s)), Array.isArray(n) ? (null === n[0] && (n[0] = s), n) : [s, n]
            }(e, t, n, l),
            d = h[0],
            p = h[h.length - 1],
            f = vt(t, d),
            m = vt(t, p);
          (0, i.$)(f === m, `You are trying to animate ${t} from "${d}" to "${p}". ${d} is not an animatable value - to enable this animation set ${d} to a value animatable to ${p} via the \`style\` property.`);
          let v = {
            keyframes: h,
            velocity: e.getVelocity(),
            ...l,
            elapsed: c,
            onUpdate: t => {
              e.set(t), l.onUpdate && l.onUpdate(t)
            },
            onComplete: () => {
              a(), l.onComplete && l.onComplete()
            }
          };
          if (!f || !m || !1 === l.type) return lt(v);
          if ("inertia" === l.type) {
            const t = function({
              keyframes: t,
              velocity: e = 0,
              min: n,
              max: i,
              power: o = .8,
              timeConstant: s = 750,
              bounceStiffness: r = 500,
              bounceDamping: a = 10,
              restDelta: l = 1,
              modifyTarget: u,
              driver: c,
              onUpdate: h,
              onComplete: d,
              onStop: p
            }) {
              const f = t[0];
              let m;

              function v(t) {
                return void 0 !== n && t < n || void 0 !== i && t > i
              }

              function g(t) {
                return void 0 === n ? i : void 0 === i || Math.abs(n - t) < Math.abs(i - t) ? n : i
              }

              function y(t) {
                null == m || m.stop(), m = it({
                  keyframes: [0, 1],
                  velocity: 0,
                  ...t,
                  driver: c,
                  onUpdate: e => {
                    var n;
                    null == h || h(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                  },
                  onComplete: d,
                  onStop: p
                })
              }

              function x(t) {
                y({
                  type: "spring",
                  stiffness: r,
                  damping: a,
                  restDelta: l,
                  ...t
                })
              }
              if (v(f)) x({
                velocity: e,
                keyframes: [f, g(f)]
              });
              else {
                let t = o * e + f;
                void 0 !== u && (t = u(t));
                const i = g(t),
                  r = i === n ? -1 : 1;
                let a, c;
                const h = t => {
                  a = c, c = t, e = (0, J.f)(t - a, ut.u.delta), (1 === r && t > i || -1 === r && t < i) && x({
                    keyframes: [t, i],
                    velocity: e
                  })
                };
                y({
                  type: "decay",
                  keyframes: [f, 0],
                  velocity: e,
                  timeConstant: s,
                  power: o,
                  restDelta: l,
                  modifyTarget: u,
                  onUpdate: v(t) ? h : void 0
                })
              }
              return {
                stop: () => null == m ? void 0 : m.stop()
              }
            }(v);
            return () => t.stop()
          }(0, yt.D2)(l) || (v = {
            ...v,
            ...mt(t, v)
          }), v.duration && (v.duration = (0, o.f)(v.duration)), v.repeatDelay && (v.repeatDelay = (0, o.f)(v.repeatDelay));
          const g = e.owner,
            y = g && g.current;
          if (wt.waapi() && Vt.has(t) && !v.repeatDelay && "mirror" !== v.repeatType && 0 !== v.damping && g && y instanceof HTMLElement && !g.getProps().onUpdate) return function(t, e, {
            onUpdate: n,
            onComplete: i,
            ...o
          }) {
            let {
              keyframes: r,
              duration: a = .3,
              elapsed: l = 0,
              ease: u
            } = o;
            if ("spring" === o.type || !(!(c = o.ease) || Array.isArray(c) || "string" == typeof c && st[c])) {
              const t = it(o);
              let e = {
                done: !1,
                value: r[0]
              };
              const n = [];
              let i = 0;
              for (; !e.done;) e = t.sample(i), n.push(e.value), i += 10;
              r = n, a = i - 10, u = "linear"
            }
            var c;
            const h = function(t, e, n, {
              delay: i = 0,
              duration: o,
              repeat: s = 0,
              repeatType: r = "loop",
              ease: a,
              times: l
            } = {}) {
              return t.animate({
                [e]: n,
                offset: l
              }, {
                delay: i,
                duration: o,
                easing: rt(a),
                fill: "both",
                iterations: s + 1,
                direction: "reverse" === r ? "alternate" : "normal"
              })
            }(t.owner.current, e, r, {
              ...o,
              delay: -l,
              duration: a,
              ease: u
            });
            return h.onfinish = () => {
              t.set(r[r.length - 1]), i && i()
            }, () => {
              const {
                currentTime: e
              } = h;
              if (e) {
                const n = it(o);
                t.setWithVelocity(n.sample(e - 10).value, n.sample(e).value, 10)
              }
              s.OH.update((() => h.cancel()))
            }
          }(e, t, v); {
            const t = it(v);
            return () => t.stop()
          }
        }
    },
    17704: (t, e, n) => {
      "use strict";

      function i(t) {
        return "object" == typeof t && "function" == typeof t.start
      }
      n.d(e, {
        N: () => i
      })
    },
    9546: (t, e, n) => {
      "use strict";
      n.d(e, {
        p: () => i
      });
      const i = t => Array.isArray(t)
    },
    15296: (t, e, n) => {
      "use strict";
      n.d(e, {
        D2: () => o,
        RL: () => r,
        be: () => s,
        rU: () => a
      });
      var i = n(74522);

      function o({
        when: t,
        delay: e,
        delayChildren: n,
        staggerChildren: i,
        staggerDirection: o,
        repeat: s,
        repeatType: r,
        repeatDelay: a,
        from: l,
        ...u
      }) {
        return !!Object.keys(u).length
      }

      function s(t) {
        return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
      }

      function r(t) {
        return "number" == typeof t ? 0 : (0, i.J)("", t)
      }

      function a(t, e) {
        return t[e] || t.default || t
      }
    },
    54734: (t, e, n) => {
      "use strict";
      n.d(e, {
        xQ: () => s
      });
      var i = n(71403),
        o = n(63041);

      function s() {
        const t = (0, i.useContext)(o.t);
        if (null === t) return [!0, null];
        const {
          isPresent: e,
          onExitComplete: n,
          register: s
        } = t, r = (0, i.useId)();
        return (0, i.useEffect)((() => s(r)), []), !e && n ? [!1, () => n && n(r)] : [!0]
      }
    },
    22159: (t, e, n) => {
      "use strict";
      n.d(e, {
        L: () => i
      });
      const i = (0, n(71403).createContext)({})
    },
    52886: (t, e, n) => {
      "use strict";
      n.d(e, {
        Y: () => i
      });
      const i = (0, n(71403).createContext)({
        strict: !1
      })
    },
    73712: (t, e, n) => {
      "use strict";
      n.d(e, {
        Q: () => i
      });
      const i = (0, n(71403).createContext)({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
      })
    },
    599: (t, e, n) => {
      "use strict";
      n.d(e, {
        A: () => o,
        f: () => s
      });
      var i = n(71403);
      const o = (0, i.createContext)({});

      function s() {
        return (0, i.useContext)(o).visualElement
      }
    },
    63041: (t, e, n) => {
      "use strict";
      n.d(e, {
        t: () => i
      });
      const i = (0, n(71403).createContext)(null)
    },
    66207: (t, e, n) => {
      "use strict";
      n.d(e, {
        N: () => i
      });
      const i = (0, n(71403).createContext)({})
    },
    77118: (t, e, n) => {
      "use strict";
      n.d(e, {
        po: () => s,
        tn: () => a,
        yT: () => r
      });
      var i = n(41387),
        o = n(19096);
      const s = t => 1 - Math.sin(Math.acos(t)),
        r = (0, o.G)(s),
        a = (0, i.V)(r)
    },
    41387: (t, e, n) => {
      "use strict";
      n.d(e, {
        V: () => i
      });
      const i = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
    },
    19096: (t, e, n) => {
      "use strict";
      n.d(e, {
        G: () => i
      });
      const i = t => e => 1 - t(1 - e)
    },
    65298: (t, e, n) => {
      "use strict";
      n.d(e, {
        J: () => l,
        e: () => a
      });
      var i = n(70009);
      const o = {
        pageX: 0,
        pageY: 0
      };

      function s(t, e = "page") {
        const n = t.touches[0] || t.changedTouches[0] || o;
        return {
          x: n[e + "X"],
          y: n[e + "Y"]
        }
      }

      function r(t, e = "page") {
        return {
          x: t[e + "X"],
          y: t[e + "Y"]
        }
      }

      function a(t, e = "page") {
        return {
          point: (0, i.k)(t) ? s(t, e) : r(t, e)
        }
      }
      const l = (t, e = !1) => {
        const n = e => t(e, a(e));
        return e ? (i = n, t => {
          const e = t instanceof MouseEvent;
          (!e || e && 0 === t.button) && i(t)
        }) : n;
        var i
      }
    },
    99800: (t, e, n) => {
      "use strict";
      n.d(e, {
        Q: () => s,
        k: () => o
      });
      var i = n(71403);

      function o(t, e, n, i = {
        passive: !0
      }) {
        return t.addEventListener(e, n, i), () => t.removeEventListener(e, n)
      }

      function s(t, e, n, s) {
        (0, i.useEffect)((() => {
          const i = t.current;
          if (n && i) return o(i, e, n, s)
        }), [t, e, n, s])
      }
    },
    51696: (t, e, n) => {
      "use strict";
      n.d(e, {
        h: () => d,
        B: () => p
      });
      var i = n(99800),
        o = n(65298),
        s = n(40270);
      const r = () => s.B && null === window.onpointerdown,
        a = () => s.B && null === window.ontouchstart,
        l = () => s.B && null === window.onmousedown,
        u = {
          pointerdown: "mousedown",
          pointermove: "mousemove",
          pointerup: "mouseup",
          pointercancel: "mousecancel",
          pointerover: "mouseover",
          pointerout: "mouseout",
          pointerenter: "mouseenter",
          pointerleave: "mouseleave"
        },
        c = {
          pointerdown: "touchstart",
          pointermove: "touchmove",
          pointerup: "touchend",
          pointercancel: "touchcancel"
        };

      function h(t) {
        return r() ? t : a() ? c[t] : l() ? u[t] : t
      }

      function d(t, e, n, s) {
        return (0, i.k)(t, h(e), (0, o.J)(n, "pointerdown" === e), s)
      }

      function p(t, e, n, s) {
        return (0, i.Q)(t, h(e), n && (0, o.J)(n, "pointerdown" === e), s)
      }
    },
    61555: (t, e, n) => {
      "use strict";
      n.d(e, {
        u: () => i
      });
      const i = {
        delta: 0,
        timestamp: 0
      }
    },
    880: (t, e, n) => {
      "use strict";
      n.d(e, {
        eO: () => p,
        qX: () => f,
        OH: () => d
      });
      const i = 1 / 60 * 1e3,
        o = "undefined" != typeof performance ? () => performance.now() : () => Date.now(),
        s = "undefined" != typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout((() => t(o())), i);
      var r = n(61555);
      let a = !0,
        l = !1,
        u = !1;
      const c = ["read", "update", "preRender", "render", "postRender"],
        h = c.reduce(((t, e) => (t[e] = function(t) {
          let e = [],
            n = [],
            i = 0,
            o = !1,
            s = !1;
          const r = new WeakSet,
            a = {
              schedule: (t, s = !1, a = !1) => {
                const l = a && o,
                  u = l ? e : n;
                return s && r.add(t), -1 === u.indexOf(t) && (u.push(t), l && o && (i = e.length)), t
              },
              cancel: t => {
                const e = n.indexOf(t); - 1 !== e && n.splice(e, 1), r.delete(t)
              },
              process: l => {
                if (o) s = !0;
                else {
                  if (o = !0, [e, n] = [n, e], n.length = 0, i = e.length, i)
                    for (let n = 0; n < i; n++) {
                      const i = e[n];
                      i(l), r.has(i) && (a.schedule(i), t())
                    }
                  o = !1, s && (s = !1, a.process(l))
                }
              }
            };
          return a
        }((() => l = !0)), t)), {}),
        d = c.reduce(((t, e) => {
          const n = h[e];
          return t[e] = (t, e = !1, i = !1) => (l || g(), n.schedule(t, e, i)), t
        }), {}),
        p = c.reduce(((t, e) => (t[e] = h[e].cancel, t)), {}),
        f = c.reduce(((t, e) => (t[e] = () => h[e].process(r.u), t)), {}),
        m = t => h[t].process(r.u),
        v = t => {
          l = !1, r.u.delta = a ? i : Math.max(Math.min(t - r.u.timestamp, 40), 1), r.u.timestamp = t, u = !0, c.forEach(m), u = !1, l && (a = !1, s(v))
        },
        g = () => {
          l = !0, a = !0, u || s(v)
        }
    },
    61808: (t, e, n) => {
      "use strict";

      function i(t) {
        let e = null;
        return () => null === e && (e = t, () => {
          e = null
        })
      }
      n.d(e, {
        D3: () => a,
        nQ: () => r
      });
      const o = i("dragHorizontal"),
        s = i("dragVertical");

      function r(t) {
        let e = !1;
        if ("y" === t) e = s();
        else if ("x" === t) e = o();
        else {
          const t = o(),
            n = s();
          t && n ? e = () => {
            t(), n()
          } : (t && t(), n && n())
        }
        return e
      }

      function a() {
        const t = r(!0);
        return !t || (t(), !1)
      }
    },
    70009: (t, e, n) => {
      "use strict";

      function i(t) {
        return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
      }

      function o(t) {
        return !!t.touches
      }
      n.d(e, {
        E: () => i,
        k: () => o
      })
    },
    11645: (t, e, n) => {
      "use strict";
      n.d(e, {
        W: () => c
      });
      var i = n(71403),
        o = n(17704),
        s = n(54734),
        r = n(63041),
        a = n(29873),
        l = n(84015),
        u = n(13508);
      const c = {
        animation: (0, u.n)((({
          visualElement: t,
          animate: e
        }) => {
          t.animationState || (t.animationState = (0, a.ci)(t)), (0, o.N)(e) && (0, i.useEffect)((() => e.subscribe(t)), [e])
        })),
        exit: (0, u.n)((t => {
          const {
            custom: e,
            visualElement: n
          } = t, [o, a] = (0, s.xQ)(), u = (0, i.useContext)(r.t);
          (0, i.useEffect)((() => {
            n.isPresent = o;
            const t = n.animationState && n.animationState.setActive(l.J.Exit, !o, {
              custom: u && u.custom || e
            });
            t && !o && t.then(a)
          }), [o])
        }))
      }
    },
    1790: (t, e, n) => {
      "use strict";
      n.d(e, {
        B: () => o
      });
      const i = t => ({
          isEnabled: e => t.some((t => !!e[t]))
        }),
        o = {
          measureLayout: i(["layout", "layoutId", "drag"]),
          animation: i(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
          exit: i(["exit"]),
          drag: i(["drag", "dragControls"]),
          focus: i(["whileFocus"]),
          hover: i(["whileHover", "onHoverStart", "onHoverEnd"]),
          tap: i(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
          pan: i(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
          inView: i(["whileInView", "onViewportEnter", "onViewportLeave"])
        }
    },
    4374: (t, e, n) => {
      "use strict";
      n.d(e, {
        n: () => S
      });
      var i = n(84015),
        o = n(99800),
        s = n(70009),
        r = n(51696),
        a = n(61808);

      function l(t, e, n) {
        return (o, r) => {
          (0, s.E)(o) && !(0, a.D3)() && (t.animationState && t.animationState.setActive(i.J.Hover, e), n && n(o, r))
        }
      }
      var u = n(71403);
      const c = (t, e) => !!e && (t === e || c(t, e.parentElement));
      var h = n(51649),
        d = n(36765),
        p = n(39512);
      const f = new Set,
        m = new WeakMap,
        v = new WeakMap,
        g = t => {
          const e = m.get(t.target);
          e && e(t)
        },
        y = t => {
          t.forEach(g)
        };
      const x = {
        some: 0,
        all: 1
      };

      function b(t, e, n, {
        root: o,
        margin: s,
        amount: r = "some",
        once: a
      }) {
        (0, u.useEffect)((() => {
          if (!t || !n.current) return;
          const l = {
            root: null == o ? void 0 : o.current,
            rootMargin: s,
            threshold: "number" == typeof r ? r : x[r]
          };
          return function(t, e, n) {
            const i = function({
              root: t,
              ...e
            }) {
              const n = t || document;
              v.has(n) || v.set(n, {});
              const i = v.get(n),
                o = JSON.stringify(e);
              return i[o] || (i[o] = new IntersectionObserver(y, {
                root: t,
                ...e
              })), i[o]
            }(e);
            return m.set(t, n), i.observe(t), () => {
              m.delete(t), i.unobserve(t)
            }
          }(n.current, l, (t => {
            const {
              isIntersecting: o
            } = t;
            if (e.isInView === o) return;
            if (e.isInView = o, a && !o && e.hasEnteredView) return;
            o && (e.hasEnteredView = !0), n.animationState && n.animationState.setActive(i.J.InView, o);
            const s = n.getProps(),
              r = o ? s.onViewportEnter : s.onViewportLeave;
            r && r(t)
          }))
        }), [t, o, s, r])
      }

      function w(t, e, n, {
        fallback: o = !0
      }) {
        (0, u.useEffect)((() => {
          var s;
          t && o && ("production" !== p._ && (s = "IntersectionObserver not available on this device. whileInView animations will trigger on mount.", f.has(s) || (console.warn(s), f.add(s))), requestAnimationFrame((() => {
            e.hasEnteredView = !0;
            const {
              onViewportEnter: t
            } = n.getProps();
            t && t(null), n.animationState && n.animationState.setActive(i.J.InView, !0)
          })))
        }), [t])
      }
      var V = n(13508);
      const S = {
        inView: (0, V.n)((function({
          visualElement: t,
          whileInView: e,
          onViewportEnter: n,
          onViewportLeave: i,
          viewport: o = {}
        }) {
          const s = (0, u.useRef)({
            hasEnteredView: !1,
            isInView: !1
          });
          let r = Boolean(e || n || i);
          o.once && s.current.hasEnteredView && (r = !1), ("undefined" == typeof IntersectionObserver ? w : b)(r, s.current, t, o)
        })),
        tap: (0, V.n)((function({
          onTap: t,
          onTapStart: e,
          onTapCancel: n,
          whileTap: o,
          visualElement: s
        }) {
          const l = t || e || n || o,
            p = (0, u.useRef)(!1),
            f = (0, u.useRef)(null),
            m = {
              passive: !(e || t || n || b)
            };

          function v() {
            f.current && f.current(), f.current = null
          }

          function g() {
            return v(), p.current = !1, s.animationState && s.animationState.setActive(i.J.Tap, !1), !(0, a.D3)()
          }

          function y(e, i) {
            g() && (c(s.current, e.target) ? t && t(e, i) : n && n(e, i))
          }

          function x(t, e) {
            g() && n && n(t, e)
          }

          function b(t, n) {
            v(), p.current || (p.current = !0, f.current = (0, d.F)((0, r.h)(window, "pointerup", y, m), (0, r.h)(window, "pointercancel", x, m)), s.animationState && s.animationState.setActive(i.J.Tap, !0), e && e(t, n))
          }(0, r.B)(s, "pointerdown", l ? b : void 0, m), (0, h.l)(v)
        })),
        focus: (0, V.n)((function({
          whileFocus: t,
          visualElement: e
        }) {
          const {
            animationState: n
          } = e;
          (0, o.Q)(e, "focus", t ? () => {
            n && n.setActive(i.J.Focus, !0)
          } : void 0), (0, o.Q)(e, "blur", t ? () => {
            n && n.setActive(i.J.Focus, !1)
          } : void 0)
        })),
        hover: (0, V.n)((function({
          onHoverStart: t,
          onHoverEnd: e,
          whileHover: n,
          visualElement: i
        }) {
          (0, r.B)(i, "pointerenter", t || n ? l(i, !0, t) : void 0, {
            passive: !t
          }), (0, r.B)(i, "pointerleave", e || n ? l(i, !1, e) : void 0, {
            passive: !e
          })
        }))
      }
    },
    57400: (t, e, n) => {
      "use strict";
      n.d(e, {
        Y: () => o
      });
      var i = n(1790);

      function o(t) {
        for (const e in t) "projectionNodeConstructor" === e ? i.B.projectionNodeConstructor = t[e] : i.B[e].Component = t[e]
      }
    },
    42431: (t, e, n) => {
      "use strict";
      n.d(e, {
        z: () => s
      });
      var i = n(17467),
        o = n(87850);

      function s(t, {
        layout: e,
        layoutId: n
      }) {
        return o.f.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!i.H[t] || "opacity" === t)
      }
    },
    13508: (t, e, n) => {
      "use strict";
      n.d(e, {
        n: () => i
      });
      const i = t => e => (t(e), null)
    },
    81470: (t, e, n) => {
      "use strict";

      function i({
        top: t,
        left: e,
        right: n,
        bottom: i
      }) {
        return {
          x: {
            min: e,
            max: n
          },
          y: {
            min: t,
            max: i
          }
        }
      }

      function o({
        x: t,
        y: e
      }) {
        return {
          top: e.min,
          right: t.max,
          bottom: e.max,
          left: t.min
        }
      }

      function s(t, e) {
        if (!e) return t;
        const n = e({
            x: t.left,
            y: t.top
          }),
          i = e({
            x: t.right,
            y: t.bottom
          });
        return {
          top: n.y,
          left: n.x,
          bottom: i.y,
          right: i.x
        }
      }
      n.d(e, {
        FY: () => i,
        bS: () => s,
        pA: () => o
      })
    },
    67339: (t, e, n) => {
      "use strict";
      n.d(e, {
        OU: () => u,
        Ql: () => h,
        Ww: () => m,
        hq: () => s,
        o4: () => l
      });
      var i = n(17157),
        o = n(76848);

      function s(t, e, n) {
        return n + e * (t - n)
      }

      function r(t, e, n, i, o) {
        return void 0 !== o && (t = s(t, o, i)), s(t, n, i) + e
      }

      function a(t, e = 0, n = 1, i, o) {
        t.min = r(t.min, e, n, i, o), t.max = r(t.max, e, n, i, o)
      }

      function l(t, {
        x: e,
        y: n
      }) {
        a(t.x, e.translate, e.scale, e.originPoint), a(t.y, n.translate, n.scale, n.originPoint)
      }

      function u(t, e, n, i = !1) {
        var s, r;
        const a = n.length;
        if (!a) return;
        let u, h;
        e.x = e.y = 1;
        for (let c = 0; c < a; c++) u = n[c], h = u.projectionDelta, "contents" !== (null === (r = null === (s = u.instance) || void 0 === s ? void 0 : s.style) || void 0 === r ? void 0 : r.display) && (i && u.options.layoutScroll && u.scroll && u !== u.root && m(t, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), h && (e.x *= h.x.scale, e.y *= h.y.scale, l(t, h)), i && (0, o.HD)(u.latestValues) && m(t, u.latestValues));
        e.x = c(e.x), e.y = c(e.y)
      }

      function c(t) {
        return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
      }

      function h(t, e) {
        t.min = t.min + e, t.max = t.max + e
      }

      function d(t, e, [n, o, s]) {
        const r = void 0 !== e[s] ? e[s] : .5,
          l = (0, i.j)(t.min, t.max, r);
        a(t, e[n], e[o], l, e.scale)
      }
      const p = ["x", "scaleX", "originX"],
        f = ["y", "scaleY", "originY"];

      function m(t, e) {
        d(t.x, e, p), d(t.y, e, f)
      }
    },
    70656: (t, e, n) => {
      "use strict";
      n.d(e, {
        ge: () => o,
        xU: () => i
      });
      const i = () => ({
          x: {
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
          },
          y: {
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
          }
        }),
        o = () => ({
          x: {
            min: 0,
            max: 0
          },
          y: {
            min: 0,
            max: 0
          }
        })
    },
    81249: (t, e, n) => {
      "use strict";
      n.d(e, {
        w: () => i
      });
      const i = {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
      }
    },
    17467: (t, e, n) => {
      "use strict";
      n.d(e, {
        $: () => o,
        H: () => i
      });
      const i = {};

      function o(t) {
        Object.assign(i, t)
      }
    },
    76848: (t, e, n) => {
      "use strict";

      function i(t) {
        return void 0 === t || 1 === t
      }

      function o({
        scale: t,
        scaleX: e,
        scaleY: n
      }) {
        return !i(t) || !i(e) || !i(n)
      }

      function s(t) {
        return o(t) || r(t) || t.z || t.rotate || t.rotateX || t.rotateY
      }

      function r(t) {
        return a(t.x) || a(t.y)
      }

      function a(t) {
        return t && "0%" !== t
      }
      n.d(e, {
        HD: () => s,
        vF: () => r,
        vk: () => o
      })
    },
    4139: (t, e, n) => {
      "use strict";
      n.d(e, {
        L: () => r,
        m: () => s
      });
      var i = n(81470),
        o = n(67339);

      function s(t, e) {
        return (0, i.FY)((0, i.bS)(t.getBoundingClientRect(), e))
      }

      function r(t, e, n) {
        const i = s(t, n),
          {
            scroll: r
          } = e;
        return r && ((0, o.Ql)(i.x, r.offset.x), (0, o.Ql)(i.y, r.offset.y)), i
      }
    },
    7752: (t, e, n) => {
      "use strict";
      n.d(e, {
        J: () => at
      });
      var i = n(3680),
        o = n(98438),
        s = n(87850),
        r = n(51068),
        a = n(66310),
        l = n(19085),
        u = n(4139),
        c = n(35217),
        h = n(8093),
        d = n(9546),
        p = n(87104),
        f = n(64682),
        m = n(40270),
        v = n(15998),
        g = n(80047);
      const y = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
        x = t => y.has(t),
        b = (t, e) => {
          t.set(e, !1), t.set(e)
        },
        w = t => t === v.ai || t === g.px;
      var V;
      ! function(t) {
        t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
      }(V || (V = {}));
      const S = (t, e) => parseFloat(t.split(", ")[e]),
        T = (t, e) => (n, {
          transform: i
        }) => {
          if ("none" === i || !i) return 0;
          const o = i.match(/^matrix3d\((.+)\)$/);
          if (o) return S(o[1], e); {
            const e = i.match(/^matrix\((.+)\)$/);
            return e ? S(e[1], t) : 0
          }
        },
        E = new Set(["x", "y", "z"]),
        P = s.U.filter((t => !E.has(t))),
        A = {
          width: ({
            x: t
          }, {
            paddingLeft: e = "0",
            paddingRight: n = "0"
          }) => t.max - t.min - parseFloat(e) - parseFloat(n),
          height: ({
            y: t
          }, {
            paddingTop: e = "0",
            paddingBottom: n = "0"
          }) => t.max - t.min - parseFloat(e) - parseFloat(n),
          top: (t, {
            top: e
          }) => parseFloat(e),
          left: (t, {
            left: e
          }) => parseFloat(e),
          bottom: ({
            y: t
          }, {
            top: e
          }) => parseFloat(e) + (t.max - t.min),
          right: ({
            x: t
          }, {
            left: e
          }) => parseFloat(e) + (t.max - t.min),
          x: T(4, 13),
          y: T(5, 14)
        };

      function C(t, e, n, i) {
        return (t => Object.keys(t).some(x))(e) ? ((t, e, n = {}, i = {}) => {
          e = {
            ...e
          }, i = {
            ...i
          };
          const o = Object.keys(e).filter(x);
          let s = [],
            r = !1;
          const a = [];
          if (o.forEach((o => {
              const l = t.getValue(o);
              if (!t.hasValue(o)) return;
              let u = n[o],
                c = (0, f.n)(u);
              const h = e[o];
              let m;
              if ((0, d.p)(h)) {
                const t = h.length,
                  e = null === h[0] ? 1 : 0;
                u = h[e], c = (0, f.n)(u);
                for (let n = e; n < t; n++) m ? (0, p.V)((0, f.n)(h[n]) === m, "All keyframes must be of the same type") : (m = (0, f.n)(h[n]), (0, p.V)(m === c || w(c) && w(m), "Keyframes must be of the same dimension as the current value"))
              } else m = (0, f.n)(h);
              if (c !== m)
                if (w(c) && w(m)) {
                  const t = l.get();
                  "string" == typeof t && l.set(parseFloat(t)), "string" == typeof h ? e[o] = parseFloat(h) : Array.isArray(h) && m === g.px && (e[o] = h.map(parseFloat))
                } else(null == c ? void 0 : c.transform) && (null == m ? void 0 : m.transform) && (0 === u || 0 === h) ? 0 === u ? l.set(m.transform(u)) : e[o] = c.transform(h) : (r || (s = function(t) {
                  const e = [];
                  return P.forEach((n => {
                    const i = t.getValue(n);
                    void 0 !== i && (e.push([n, i.get()]), i.set(n.startsWith("scale") ? 1 : 0))
                  })), e.length && t.render(), e
                }(t), r = !0), a.push(o), i[o] = void 0 !== i[o] ? i[o] : e[o], b(l, h))
            })), a.length) {
            const n = a.indexOf("height") >= 0 ? window.pageYOffset : null,
              o = ((t, e, n) => {
                const i = e.measureViewportBox(),
                  o = e.current,
                  s = getComputedStyle(o),
                  {
                    display: r
                  } = s,
                  a = {};
                "none" === r && e.setStaticValue("display", t.display || "block"), n.forEach((t => {
                  a[t] = A[t](i, s)
                })), e.render();
                const l = e.measureViewportBox();
                return n.forEach((n => {
                  const i = e.getValue(n);
                  b(i, a[n]), t[n] = A[n](l, s)
                })), t
              })(e, t, a);
            return s.length && s.forEach((([e, n]) => {
              t.getValue(e).set(n)
            })), t.render(), m.B && null !== n && window.scrollTo({
              top: n
            }), {
              target: o,
              transitionEnd: i
            }
          }
          return {
            target: e,
            transitionEnd: i
          }
        })(t, e, n, i) : {
          target: e,
          transitionEnd: i
        }
      }
      var M = n(880),
        D = n(71403),
        k = n(1790),
        B = n(70656),
        j = n(21227),
        L = n(39512);
      const O = {
          current: null
        },
        R = {
          current: !1
        };
      var F = n(46360),
        I = n(44627),
        U = n(73075),
        N = n(87346),
        $ = n(29873),
        H = n(63271),
        Y = n(60265),
        X = n(41931);
      const W = Object.keys(k.B),
        q = W.length,
        z = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
      class J {
        constructor({
          parent: t,
          props: e,
          reducedMotionConfig: n,
          visualState: i
        }, o = {}) {
          this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.isPresent = !0, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
          }, this.scheduleRender = () => M.OH.render(this.render, !1, !0);
          const {
            latestValues: s,
            renderState: r
          } = i;
          this.latestValues = s, this.baseTarget = {
            ...s
          }, this.initialValues = e.initial ? {
            ...s
          } : {}, this.renderState = r, this.parent = t, this.props = e, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.options = o, this.isControllingVariants = (0, H.e)(e), this.isVariantNode = (0, H.O)(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
          const {
            willChange: a,
            ...l
          } = this.scrapeMotionValuesFromProps(e);
          for (const t in l) {
            const e = l[t];
            void 0 !== s[t] && (0, N.S)(e) && (e.set(s[t], !1), (0, U.k)(a) && a.add(t))
          }
        }
        scrapeMotionValuesFromProps(t) {
          return {}
        }
        mount(t) {
          var e;
          this.current = t, this.projection && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (e = this.parent) || void 0 === e ? void 0 : e.addVariantChild(this)), this.values.forEach(((t, e) => this.bindToMotionValue(e, t))), R.current || function() {
            if (R.current = !0, m.B)
              if (window.matchMedia) {
                const t = window.matchMedia("(prefers-reduced-motion)"),
                  e = () => O.current = t.matches;
                t.addListener(e), e()
              } else O.current = !1
          }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || O.current), this.parent && this.parent.children.add(this), this.setProps(this.props)
        }
        unmount() {
          var t, e, n;
          null === (t = this.projection) || void 0 === t || t.unmount(), M.eO.update(this.notifyUpdate), M.eO.render(this.render), this.valueSubscriptions.forEach((t => t())), null === (e = this.removeFromVariantTree) || void 0 === e || e.call(this), null === (n = this.parent) || void 0 === n || n.children.delete(this);
          for (const t in this.events) this.events[t].clear();
          this.current = null
        }
        bindToMotionValue(t, e) {
          const n = s.f.has(t),
            i = e.on("change", (e => {
              this.latestValues[t] = e, this.props.onUpdate && M.OH.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
            })),
            o = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, (() => {
            i(), o()
          }))
        }
        sortNodePosition(t) {
          return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        loadFeatures(t, e, n, i, o, s) {
          const r = [];
          "production" !== L._ && n && e && (0, p.V)(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
          for (let e = 0; e < q; e++) {
            const n = W[e],
              {
                isEnabled: i,
                Component: o
              } = k.B[n];
            i(t) && o && r.push((0, D.createElement)(o, {
              key: n,
              ...t,
              visualElement: this
            }))
          }
          if (!this.projection && o) {
            this.projection = new o(i, this.latestValues, this.parent && this.parent.projection);
            const {
              layoutId: e,
              layout: n,
              drag: r,
              dragConstraints: a,
              layoutScroll: l
            } = t;
            this.projection.setOptions({
              layoutId: e,
              layout: n,
              alwaysMeasureLayout: Boolean(r) || a && (0, j.X)(a),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof n ? n : "both",
              initialPromotionConfig: s,
              layoutScroll: l
            })
          }
          return r
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.options, this.props)
        }
        measureViewportBox() {
          return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, B.ge)()
        }
        getStaticValue(t) {
          return this.latestValues[t]
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e)
        }
        setProps(t) {
          (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.props = t;
          for (let e = 0; e < z.length; e++) {
            const n = z[e];
            this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](), delete this.propEventSubscriptions[n]);
            const i = t["on" + n];
            i && (this.propEventSubscriptions[n] = this.on(n, i))
          }
          this.prevMotionValues = function(t, e, n) {
            const {
              willChange: i
            } = e;
            for (const o in e) {
              const s = e[o],
                r = n[o];
              if ((0, N.S)(s)) t.addValue(o, s), (0, U.k)(i) && i.add(o);
              else if ((0, N.S)(r)) t.addValue(o, (0, I.O)(s, {
                owner: t
              })), (0, U.k)(i) && i.remove(o);
              else if (r !== s)
                if (t.hasValue(o)) {
                  const e = t.getValue(o);
                  !e.hasAnimated && e.set(s)
                } else {
                  const e = t.getStaticValue(o);
                  t.addValue(o, (0, I.O)(void 0 !== e ? e : s))
                }
            }
            for (const i in n) void 0 === e[i] && t.removeValue(i);
            return e
          }(this, this.scrapeMotionValuesFromProps(t), this.prevMotionValues)
        }
        getProps() {
          return this.props
        }
        getVariant(t) {
          var e;
          return null === (e = this.props.variants) || void 0 === e ? void 0 : e[t]
        }
        getDefaultTransition() {
          return this.props.transition
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint
        }
        getClosestVariantNode() {
          var t;
          return this.isVariantNode ? this : null === (t = this.parent) || void 0 === t ? void 0 : t.getClosestVariantNode()
        }
        getVariantContext(t = !1) {
          var e, n;
          if (t) return null === (e = this.parent) || void 0 === e ? void 0 : e.getVariantContext();
          if (!this.isControllingVariants) {
            const t = (null === (n = this.parent) || void 0 === n ? void 0 : n.getVariantContext()) || {};
            return void 0 !== this.props.initial && (t.initial = this.props.initial), t
          }
          const i = {};
          for (let t = 0; t < _; t++) {
            const e = K[t],
              n = this.props[e];
            ((0, Y.w)(n) || !1 === n) && (i[e] = n)
          }
          return i
        }
        addVariantChild(t) {
          var e;
          const n = this.getClosestVariantNode();
          if (n) return null === (e = n.variantChildren) || void 0 === e || e.add(t), () => n.variantChildren.delete(t)
        }
        addValue(t, e) {
          this.hasValue(t) && this.removeValue(t), this.values.set(t, e), this.latestValues[t] = e.get(), this.bindToMotionValue(t, e)
        }
        removeValue(t) {
          var e;
          this.values.delete(t), null === (e = this.valueSubscriptions.get(t)) || void 0 === e || e(), this.valueSubscriptions.delete(t), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
        }
        hasValue(t) {
          return this.values.has(t)
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t]) return this.props.values[t];
          let n = this.values.get(t);
          return void 0 === n && void 0 !== e && (n = (0, I.O)(e, {
            owner: this
          }), this.addValue(t, n)), n
        }
        readValue(t) {
          return void 0 === this.latestValues[t] && this.current ? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e
        }
        getBaseTarget(t) {
          var e;
          const {
            initial: n
          } = this.props, i = "string" == typeof n || "object" == typeof n ? null === (e = (0, X.a)(this.props, n)) || void 0 === e ? void 0 : e[t] : void 0;
          if (n && void 0 !== i) return i;
          const o = this.getBaseTargetFromProps(this.props, t);
          return void 0 === o || (0, N.S)(o) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : o
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new F.v), this.events[t].add(e)
        }
        notify(t, ...e) {
          var n;
          null === (n = this.events[t]) || void 0 === n || n.notify(...e)
        }
      }
      const K = ["initial", ...$.US],
        _ = K.length;
      class Q extends J {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1
        }
        getBaseTargetFromProps(t, e) {
          var n;
          return null === (n = t.style) || void 0 === n ? void 0 : n[e]
        }
        removeValueFromRenderState(t, {
          vars: e,
          style: n
        }) {
          delete e[t], delete n[t]
        }
        makeTargetAnimatableFromInstance({
          transition: t,
          transitionEnd: e,
          ...n
        }, {
          transformValues: i
        }, o) {
          let s = (0, c.$z)(n, t || {}, this);
          if (i && (e && (e = i(e)), n && (n = i(n)), s && (s = i(s))), o) {
            (0, c.TM)(this, n, s);
            const t = ((t, e, n, i) => {
              const o = (0, h.d9)(t, e, i);
              return C(t, e = o.target, n, i = o.transitionEnd)
            })(this, n, s, e);
            e = t.transitionEnd, n = t.target
          }
          return {
            transition: t,
            transitionEnd: e,
            ...n
          }
        }
      }
      class G extends Q {
        readValueFromInstance(t, e) {
          if (s.f.has(e)) {
            const t = (0, l.D)(e);
            return t && t.default || 0
          } {
            const i = (n = t, window.getComputedStyle(n)),
              s = ((0, o.Y)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof s ? s.trim() : s
          }
          var n
        }
        measureInstanceViewportBox(t, {
          transformPagePoint: e
        }) {
          return (0, u.m)(t, e)
        }
        build(t, e, n, o) {
          (0, i.O)(t, e, n, o.transformTemplate)
        }
        scrapeMotionValuesFromProps(t) {
          return (0, r.x)(t)
        }
        renderInstance(t, e, n, i) {
          (0, a.e)(t, e, n, i)
        }
      }
      var Z = n(2175),
        tt = n(95349),
        et = n(38764),
        nt = n(50273),
        it = n(36729),
        ot = n(74787);
      class st extends Q {
        constructor() {
          super(...arguments), this.isSVGTag = !1
        }
        getBaseTargetFromProps(t, e) {
          return t[e]
        }
        readValueFromInstance(t, e) {
          var n;
          return s.f.has(e) ? (null === (n = (0, l.D)(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = nt.e.has(e) ? e : (0, et.I)(e), t.getAttribute(e))
        }
        measureInstanceViewportBox() {
          return (0, B.ge)()
        }
        scrapeMotionValuesFromProps(t) {
          return (0, Z.x)(t)
        }
        build(t, e, n, i) {
          (0, tt.B)(t, e, n, this.isSVGTag, i.transformTemplate)
        }
        renderInstance(t, e, n, i) {
          (0, it.d)(t, e, n, i)
        }
        mount(t) {
          this.isSVGTag = (0, ot.n)(t.tagName), super.mount(t)
        }
      }
      var rt = n(61427);
      const at = (t, e) => (0, rt.Q)(t) ? new st(e, {
        enableHardwareAcceleration: !1
      }) : new G(e, {
        enableHardwareAcceleration: !0
      })
    },
    96628: (t, e, n) => {
      "use strict";
      n.d(e, {
        H: () => E
      });
      var i = n(71403),
        o = n(73712),
        s = n(599),
        r = n(63041),
        a = n(40270);
      const l = a.B ? i.useLayoutEffect : i.useEffect;
      var u = n(52886),
        c = n(21227),
        h = n(60265),
        d = n(63271);

      function p(t) {
        return Array.isArray(t) ? t.join(" ") : t
      }
      var f = n(1790),
        m = n(57400),
        v = n(39899),
        g = n(81249);
      let y = 1;
      var x = n(22159);
      class b extends i.Component {
        getSnapshotBeforeUpdate() {
          const {
            visualElement: t,
            props: e
          } = this.props;
          return t && t.setProps(e), null
        }
        componentDidUpdate() {}
        render() {
          return this.props.children
        }
      }
      var w = n(66207);
      const V = Symbol.for("motionComponentSymbol");

      function S({
        preloadedFeatures: t,
        createVisualElement: e,
        projectionNodeConstructor: n,
        useRender: x,
        useVisualState: S,
        Component: E
      }) {
        t && (0, m.Y)(t);
        const P = (0, i.forwardRef)((function(m, V) {
          const P = {
              ...(0, i.useContext)(o.Q),
              ...m,
              layoutId: T(m)
            },
            {
              isStatic: A
            } = P;
          let C = null;
          const M = function(t) {
              const {
                initial: e,
                animate: n
              } = function(t, e) {
                if ((0, d.e)(t)) {
                  const {
                    initial: e,
                    animate: n
                  } = t;
                  return {
                    initial: !1 === e || (0, h.w)(e) ? e : void 0,
                    animate: (0, h.w)(n) ? n : void 0
                  }
                }
                return !1 !== t.inherit ? e : {}
              }(t, (0, i.useContext)(s.A));
              return (0, i.useMemo)((() => ({
                initial: e,
                animate: n
              })), [p(e), p(n)])
            }(m),
            D = A ? void 0 : (0, v.M)((() => {
              if (g.w.hasEverUpdated) return y++
            })),
            k = S(m, A);
          if (!A && a.B) {
            M.visualElement = function(t, e, n, a) {
              const c = (0, s.f)(),
                h = (0, i.useContext)(u.Y),
                d = (0, i.useContext)(r.t),
                p = (0, i.useContext)(o.Q).reducedMotion,
                f = (0, i.useRef)();
              a = a || h.renderer, !f.current && a && (f.current = a(t, {
                visualState: e,
                parent: c,
                props: n,
                presenceId: d ? d.id : void 0,
                blockInitialAnimation: !!d && !1 === d.initial,
                reducedMotionConfig: p
              }));
              const m = f.current;
              return l((() => {
                m && m.render()
              })), l((() => {
                m && m.animationState && m.animationState.animateChanges()
              })), l((() => () => m && m.notify("Unmount")), []), m
            }(E, k, P, e);
            const a = (0, i.useContext)(u.Y).strict,
              c = (0, i.useContext)(w.N);
            M.visualElement && (C = M.visualElement.loadFeatures(P, a, t, D, n || f.B.projectionNodeConstructor, c))
          }
          return i.createElement(b, {
            visualElement: M.visualElement,
            props: P
          }, C, i.createElement(s.A.Provider, {
            value: M
          }, x(E, m, D, function(t, e, n) {
            return (0, i.useCallback)((i => {
              i && t.mount && t.mount(i), e && (i ? e.mount(i) : e.unmount()), n && ("function" == typeof n ? n(i) : (0, c.X)(n) && (n.current = i))
            }), [e])
          }(k, M.visualElement, V), k, A, M.visualElement)))
        }));
        return P[V] = E, P
      }

      function T({
        layoutId: t
      }) {
        const e = (0, i.useContext)(x.L).id;
        return e && void 0 !== t ? e + "-" + t : t
      }

      function E(t) {
        function e(e, n = {}) {
          return S(t(e, n))
        }
        if ("undefined" == typeof Proxy) return e;
        const n = new Map;
        return new Proxy(e, {
          get: (t, i) => (n.has(i) || n.set(i, e(i)), n.get(i))
        })
      }
    },
    53980: (t, e, n) => {
      "use strict";
      n.d(e, {
        P: () => Se
      });
      var i = n(96628),
        o = n(72005),
        s = n(4374),
        r = n(11645),
        a = n(71403),
        l = n(87104),
        u = n(70009),
        c = n(65298),
        h = n(880),
        d = n(29727),
        p = n(51696),
        f = n(36765);
      const m = (t, e) => Math.abs(t - e);
      var v = n(61555);
      class g {
        constructor(t, e, {
          transformPagePoint: n
        } = {}) {
          if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
              if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
              const t = b(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                n = function(t, e) {
                  const n = m(t.x, e.x),
                    i = m(t.y, e.y);
                  return Math.sqrt(n ** 2 + i ** 2)
                }(t.offset, {
                  x: 0,
                  y: 0
                }) >= 3;
              if (!e && !n) return;
              const {
                point: i
              } = t, {
                timestamp: o
              } = v.u;
              this.history.push({
                ...i,
                timestamp: o
              });
              const {
                onStart: s,
                onMove: r
              } = this.handlers;
              e || (s && s(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), r && r(this.lastMoveEvent, t)
            }, this.handlePointerMove = (t, e) => {
              this.lastMoveEvent = t, this.lastMoveEventInfo = y(e, this.transformPagePoint), (0, u.E)(t) && 0 === t.buttons ? this.handlePointerUp(t, e) : h.OH.update(this.updatePoint, !0)
            }, this.handlePointerUp = (t, e) => {
              this.end();
              const {
                onEnd: n,
                onSessionEnd: i
              } = this.handlers, o = b(y(e, this.transformPagePoint), this.history);
              this.startEvent && n && n(t, o), i && i(t, o)
            }, (0, u.k)(t) && t.touches.length > 1) return;
          this.handlers = e, this.transformPagePoint = n;
          const i = y((0, c.e)(t), this.transformPagePoint),
            {
              point: o
            } = i,
            {
              timestamp: s
            } = v.u;
          this.history = [{
            ...o,
            timestamp: s
          }];
          const {
            onSessionStart: r
          } = e;
          r && r(t, b(i, this.history)), this.removeListeners = (0, f.F)((0, p.h)(window, "pointermove", this.handlePointerMove), (0, p.h)(window, "pointerup", this.handlePointerUp), (0, p.h)(window, "pointercancel", this.handlePointerUp))
        }
        updateHandlers(t) {
          this.handlers = t
        }
        end() {
          this.removeListeners && this.removeListeners(), h.eO.update(this.updatePoint)
        }
      }

      function y(t, e) {
        return e ? {
          point: e(t.point)
        } : t
      }

      function x(t, e) {
        return {
          x: t.x - e.x,
          y: t.y - e.y
        }
      }

      function b({
        point: t
      }, e) {
        return {
          point: t,
          delta: x(t, V(e)),
          offset: x(t, w(e)),
          velocity: S(e, .1)
        }
      }

      function w(t) {
        return t[0]
      }

      function V(t) {
        return t[t.length - 1]
      }

      function S(t, e) {
        if (t.length < 2) return {
          x: 0,
          y: 0
        };
        let n = t.length - 1,
          i = null;
        const o = V(t);
        for (; n >= 0 && (i = t[n], !(o.timestamp - i.timestamp > (0, d.f)(e)));) n--;
        if (!i) return {
          x: 0,
          y: 0
        };
        const s = (o.timestamp - i.timestamp) / 1e3;
        if (0 === s) return {
          x: 0,
          y: 0
        };
        const r = {
          x: (o.x - i.x) / s,
          y: (o.y - i.y) / s
        };
        return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r
      }
      var T = n(61808),
        E = n(21227),
        P = n(52940),
        A = n(17157);

      function C(t) {
        return t.max - t.min
      }

      function M(t, e = 0, n = .01) {
        return Math.abs(t - e) <= n
      }

      function D(t, e, n, i = .5) {
        t.origin = i, t.originPoint = (0, A.j)(e.min, e.max, t.origin), t.scale = C(n) / C(e), (M(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = (0, A.j)(n.min, n.max, t.origin) - t.originPoint, (M(t.translate) || isNaN(t.translate)) && (t.translate = 0)
      }

      function k(t, e, n, i) {
        D(t.x, e.x, n.x, null == i ? void 0 : i.originX), D(t.y, e.y, n.y, null == i ? void 0 : i.originY)
      }

      function B(t, e, n) {
        t.min = n.min + e.min, t.max = t.min + C(e)
      }

      function j(t, e, n) {
        t.min = e.min - n.min, t.max = t.min + C(e)
      }

      function L(t, e, n) {
        j(t.x, e.x, n.x), j(t.y, e.y, n.y)
      }
      var O = n(28626);

      function R(t, e, n) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
        }
      }

      function F(t, e) {
        let n = e.min - t.min,
          i = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([n, i] = [i, n]), {
          min: n,
          max: i
        }
      }
      const I = .35;

      function U(t, e, n) {
        return {
          min: N(t, e),
          max: N(t, n)
        }
      }

      function N(t, e) {
        return "number" == typeof t ? t : t[e] || 0
      }
      var $ = n(84015),
        H = n(70656);

      function Y(t) {
        return [t("x"), t("y")]
      }
      var X = n(4139),
        W = n(81470),
        q = n(99800),
        z = n(80047),
        J = n(91621);
      const K = new WeakMap;
      class _ {
        constructor(t) {
          this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
            x: 0,
            y: 0
          }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, H.ge)(), this.visualElement = t
        }
        start(t, {
          snapToCursor: e = !1
        } = {}) {
          !1 !== this.visualElement.isPresent && (this.panSession = new g(t, {
            onSessionStart: t => {
              this.stopAnimation(), e && this.snapToCursor((0, c.e)(t, "page").point)
            },
            onStart: (t, e) => {
              var n;
              const {
                drag: i,
                dragPropagation: o,
                onDragStart: s
              } = this.getProps();
              (!i || o || (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = (0, T.nQ)(i), this.openGlobalLock)) && (this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Y((t => {
                var e, n;
                let i = this.getAxisMotionValue(t).get() || 0;
                if (z.KN.test(i)) {
                  const o = null === (n = null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === n ? void 0 : n.layoutBox[t];
                  o && (i = C(o) * (parseFloat(i) / 100))
                }
                this.originPoint[t] = i
              })), null == s || s(t, e), null === (n = this.visualElement.animationState) || void 0 === n || n.setActive($.J.Drag, !0))
            },
            onMove: (t, e) => {
              const {
                dragPropagation: n,
                dragDirectionLock: i,
                onDirectionLock: o,
                onDrag: s
              } = this.getProps();
              if (!n && !this.openGlobalLock) return;
              const {
                offset: r
              } = e;
              if (i && null === this.currentDirection) return this.currentDirection = function(t, e = 10) {
                let n = null;
                return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"), n
              }(r), void(null !== this.currentDirection && (null == o || o(this.currentDirection)));
              this.updateAxis("x", e.point, r), this.updateAxis("y", e.point, r), this.visualElement.render(), null == s || s(t, e)
            },
            onSessionEnd: (t, e) => this.stop(t, e)
          }, {
            transformPagePoint: this.visualElement.getTransformPagePoint()
          }))
        }
        stop(t, e) {
          const n = this.isDragging;
          if (this.cancel(), !n) return;
          const {
            velocity: i
          } = e;
          this.startAnimation(i);
          const {
            onDragEnd: o
          } = this.getProps();
          null == o || o(t, e)
        }
        cancel() {
          var t, e;
          this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0;
          const {
            dragPropagation: n
          } = this.getProps();
          !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive($.J.Drag, !1)
        }
        updateAxis(t, e, n) {
          const {
            drag: i
          } = this.getProps();
          if (!n || !Q(t, i, this.currentDirection)) return;
          const o = this.getAxisMotionValue(t);
          let s = this.originPoint[t] + n[t];
          this.constraints && this.constraints[t] && (s = function(t, {
            min: e,
            max: n
          }, i) {
            return void 0 !== e && t < e ? t = i ? (0, A.j)(e, t, i.min) : Math.max(t, e) : void 0 !== n && t > n && (t = i ? (0, A.j)(n, t, i.max) : Math.min(t, n)), t
          }(s, this.constraints[t], this.elastic[t])), o.set(s)
        }
        resolveConstraints() {
          const {
            dragConstraints: t,
            dragElastic: e
          } = this.getProps(), {
            layout: n
          } = this.visualElement.projection || {}, i = this.constraints;
          t && (0, E.X)(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !n) && function(t, {
            top: e,
            left: n,
            bottom: i,
            right: o
          }) {
            return {
              x: R(t.x, n, o),
              y: R(t.y, e, i)
            }
          }(n.layoutBox, t), this.elastic = function(t = I) {
            return !1 === t ? t = 0 : !0 === t && (t = I), {
              x: U(t, "left", "right"),
              y: U(t, "top", "bottom")
            }
          }(e), i !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && Y((t => {
            this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
              const n = {};
              return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
            }(n.layoutBox[t], this.constraints[t]))
          }))
        }
        resolveRefConstraints() {
          const {
            dragConstraints: t,
            onMeasureDragConstraints: e
          } = this.getProps();
          if (!t || !(0, E.X)(t)) return !1;
          const n = t.current;
          (0, l.V)(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
          const {
            projection: i
          } = this.visualElement;
          if (!i || !i.layout) return !1;
          const o = (0, X.L)(n, i.root, this.visualElement.getTransformPagePoint());
          let s = function(t, e) {
            return {
              x: F(t.x, e.x),
              y: F(t.y, e.y)
            }
          }(i.layout.layoutBox, o);
          if (e) {
            const t = e((0, W.pA)(s));
            this.hasMutatedConstraints = !!t, t && (s = (0, W.FY)(t))
          }
          return s
        }
        startAnimation(t) {
          const {
            drag: e,
            dragMomentum: n,
            dragElastic: i,
            dragTransition: o,
            dragSnapToOrigin: s,
            onDragTransitionEnd: r
          } = this.getProps(), a = this.constraints || {}, l = Y((r => {
            if (!Q(r, e, this.currentDirection)) return;
            let l = (null == a ? void 0 : a[r]) || {};
            s && (l = {
              min: 0,
              max: 0
            });
            const u = i ? 200 : 1e6,
              c = i ? 40 : 1e7,
              h = {
                type: "inertia",
                velocity: n ? t[r] : 0,
                bounceStiffness: u,
                bounceDamping: c,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...o,
                ...l
              };
            return this.startAxisValueAnimation(r, h)
          }));
          return Promise.all(l).then(r)
        }
        startAxisValueAnimation(t, e) {
          const n = this.getAxisMotionValue(t);
          return n.start((0, J.O)(t, n, 0, e))
        }
        stopAnimation() {
          Y((t => this.getAxisMotionValue(t).stop()))
        }
        getAxisMotionValue(t) {
          var e;
          const n = "_drag" + t.toUpperCase();
          return this.visualElement.getProps()[n] || this.visualElement.getValue(t, (null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) || 0)
        }
        snapToCursor(t) {
          Y((e => {
            const {
              drag: n
            } = this.getProps();
            if (!Q(e, n, this.currentDirection)) return;
            const {
              projection: i
            } = this.visualElement, o = this.getAxisMotionValue(e);
            if (i && i.layout) {
              const {
                min: n,
                max: s
              } = i.layout.layoutBox[e];
              o.set(t[e] - (0, A.j)(n, s, .5))
            }
          }))
        }
        scalePositionWithinConstraints() {
          var t;
          if (!this.visualElement.current) return;
          const {
            drag: e,
            dragConstraints: n
          } = this.getProps(), {
            projection: i
          } = this.visualElement;
          if (!(0, E.X)(n) || !i || !this.constraints) return;
          this.stopAnimation();
          const o = {
            x: 0,
            y: 0
          };
          Y((t => {
            const e = this.getAxisMotionValue(t);
            if (e) {
              const n = e.get();
              o[t] = function(t, e) {
                let n = .5;
                const i = C(t),
                  o = C(e);
                return o > i ? n = (0, P.q)(e.min, e.max - i, t.min) : i > o && (n = (0, P.q)(t.min, t.max - o, e.min)), (0, O.q)(0, 1, n)
              }({
                min: n,
                max: n
              }, this.constraints[t])
            }
          }));
          const {
            transformTemplate: s
          } = this.visualElement.getProps();
          this.visualElement.current.style.transform = s ? s({}, "") : "none", null === (t = i.root) || void 0 === t || t.updateScroll(), i.updateLayout(), this.resolveConstraints(), Y((t => {
            if (!Q(t, e, null)) return;
            const n = this.getAxisMotionValue(t),
              {
                min: i,
                max: s
              } = this.constraints[t];
            n.set((0, A.j)(i, s, o[t]))
          }))
        }
        addListeners() {
          var t;
          if (!this.visualElement.current) return;
          K.set(this.visualElement, this);
          const e = this.visualElement.current,
            n = (0, p.h)(e, "pointerdown", (t => {
              const {
                drag: e,
                dragListener: n = !0
              } = this.getProps();
              e && n && this.start(t)
            })),
            i = () => {
              const {
                dragConstraints: t
              } = this.getProps();
              (0, E.X)(t) && (this.constraints = this.resolveRefConstraints())
            },
            {
              projection: o
            } = this.visualElement,
            s = o.addEventListener("measure", i);
          o && !o.layout && (null === (t = o.root) || void 0 === t || t.updateScroll(), o.updateLayout()), i();
          const r = (0, q.k)(window, "resize", (() => this.scalePositionWithinConstraints())),
            a = o.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e
            }) => {
              this.isDragging && e && (Y((e => {
                const n = this.getAxisMotionValue(e);
                n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
              })), this.visualElement.render())
            }));
          return () => {
            r(), n(), s(), null == a || a()
          }
        }
        getProps() {
          const t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: n = !1,
              dragPropagation: i = !1,
              dragConstraints: o = !1,
              dragElastic: s = I,
              dragMomentum: r = !0
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: n,
            dragPropagation: i,
            dragConstraints: o,
            dragElastic: s,
            dragMomentum: r
          }
        }
      }

      function Q(t, e, n) {
        return !(!0 !== e && e !== t || null !== n && n !== t)
      }
      var G = n(39899),
        Z = n(73712),
        tt = n(51649),
        et = n(13508);
      const nt = {
        pan: (0, et.n)((function({
          onPan: t,
          onPanStart: e,
          onPanEnd: n,
          onPanSessionStart: i,
          visualElement: o
        }) {
          const s = t || e || n || i,
            r = (0, a.useRef)(null),
            {
              transformPagePoint: l
            } = (0, a.useContext)(Z.Q),
            u = {
              onSessionStart: i,
              onStart: e,
              onMove: t,
              onEnd: (t, e) => {
                r.current = null, n && n(t, e)
              }
            };
          (0, a.useEffect)((() => {
            null !== r.current && r.current.updateHandlers(u)
          })), (0, p.B)(o, "pointerdown", s && function(t) {
            r.current = new g(t, u, {
              transformPagePoint: l
            })
          }), (0, tt.l)((() => r.current && r.current.end()))
        })),
        drag: (0, et.n)((function(t) {
          const {
            dragControls: e,
            visualElement: n
          } = t, i = (0, G.M)((() => new _(n)));
          (0, a.useEffect)((() => e && e.subscribe(i)), [i, e]), (0, a.useEffect)((() => i.addListeners()), [i])
        }))
      };
      var it = n(7752),
        ot = n(54734),
        st = n(22159),
        rt = n(66207),
        at = n(81249);

      function lt(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
      }
      const ut = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!z.px.test(t)) return t;
            t = parseFloat(t)
          }
          return `${lt(t,e.target.x)}% ${lt(t,e.target.y)}%`
        }
      };
      var ct = n(8093),
        ht = n(16244);
      const dt = "_$css",
        pt = {
          correct: (t, {
            treeScale: e,
            projectionDelta: n
          }) => {
            const i = t,
              o = t.includes("var("),
              s = [];
            o && (t = t.replace(ct.z2, (t => (s.push(t), dt))));
            const r = ht.f.parse(t);
            if (r.length > 5) return i;
            const a = ht.f.createTransformer(t),
              l = "number" != typeof r[0] ? 1 : 0,
              u = n.x.scale * e.x,
              c = n.y.scale * e.y;
            r[0 + l] /= u, r[1 + l] /= c;
            const h = (0, A.j)(u, c, .5);
            "number" == typeof r[2 + l] && (r[2 + l] /= h), "number" == typeof r[3 + l] && (r[3 + l] /= h);
            let d = a(r);
            if (o) {
              let t = 0;
              d = d.replace(dt, (() => {
                const e = s[t];
                return t++, e
              }))
            }
            return d
          }
        };
      var ft = n(17467);
      class mt extends a.Component {
        componentDidMount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n,
            layoutId: i
          } = this.props, {
            projection: o
          } = t;
          (0, ft.$)(vt), o && (e.group && e.group.add(o), n && n.register && i && n.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", (() => {
            this.safeToRemove()
          })), o.setOptions({
            ...o.options,
            onExitComplete: () => this.safeToRemove()
          })), at.w.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
          const {
            layoutDependency: e,
            visualElement: n,
            drag: i,
            isPresent: o
          } = this.props, s = n.projection;
          return s ? (s.isPresent = o, i || t.layoutDependency !== e || void 0 === e ? s.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? s.promote() : s.relegate() || h.OH.postRender((() => {
            var t;
            (null === (t = s.getStack()) || void 0 === t ? void 0 : t.members.length) || this.safeToRemove()
          }))), null) : null
        }
        componentDidUpdate() {
          const {
            projection: t
          } = this.props.visualElement;
          t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
        }
        componentWillUnmount() {
          const {
            visualElement: t,
            layoutGroup: e,
            switchLayoutGroup: n
          } = this.props, {
            projection: i
          } = t;
          i && (i.scheduleCheckAfterUnmount(), (null == e ? void 0 : e.group) && e.group.remove(i), (null == n ? void 0 : n.deregister) && n.deregister(i))
        }
        safeToRemove() {
          const {
            safeToRemove: t
          } = this.props;
          null == t || t()
        }
        render() {
          return null
        }
      }
      const vt = {
          borderRadius: {
            ...ut,
            applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
          },
          borderTopLeftRadius: ut,
          borderTopRightRadius: ut,
          borderBottomLeftRadius: ut,
          borderBottomRightRadius: ut,
          boxShadow: pt
        },
        gt = {
          measureLayout: function(t) {
            const [e, n] = (0, ot.xQ)(), i = (0, a.useContext)(st.L);
            return a.createElement(mt, {
              ...t,
              layoutGroup: i,
              switchLayoutGroup: (0, a.useContext)(rt.N),
              isPresent: e,
              safeToRemove: n
            })
          }
        };
      var yt = n(44627),
        xt = n(87346),
        bt = n(46360),
        wt = n(77118),
        Vt = n(29401);
      const St = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        Tt = St.length,
        Et = t => "string" == typeof t ? parseFloat(t) : t,
        Pt = t => "number" == typeof t || z.px.test(t);

      function At(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
      }
      const Ct = Dt(0, .5, wt.yT),
        Mt = Dt(.5, .95, Vt.l);

      function Dt(t, e, n) {
        return i => i < t ? 0 : i > e ? 1 : n((0, P.q)(t, e, i))
      }

      function kt(t, e) {
        t.min = e.min, t.max = e.max
      }

      function Bt(t, e) {
        kt(t.x, e.x), kt(t.y, e.y)
      }
      var jt = n(67339);

      function Lt(t, e, n, i, o) {
        return t -= e, t = (0, jt.hq)(t, 1 / n, i), void 0 !== o && (t = (0, jt.hq)(t, 1 / o, i)), t
      }

      function Ot(t, e, [n, i, o], s, r) {
        ! function(t, e = 0, n = 1, i = .5, o, s = t, r = t) {
          if (z.KN.test(e) && (e = parseFloat(e), e = (0, A.j)(r.min, r.max, e / 100) - r.min), "number" != typeof e) return;
          let a = (0, A.j)(s.min, s.max, i);
          t === s && (a -= e), t.min = Lt(t.min, e, n, a, o), t.max = Lt(t.max, e, n, a, o)
        }(t, e[n], e[i], e[o], e.scale, s, r)
      }
      const Rt = ["x", "scaleX", "originX"],
        Ft = ["y", "scaleY", "originY"];

      function It(t, e, n, i) {
        Ot(t.x, e, Rt, null == n ? void 0 : n.x, null == i ? void 0 : i.x), Ot(t.y, e, Ft, null == n ? void 0 : n.y, null == i ? void 0 : i.y)
      }
      var Ut = n(15296);

      function Nt(t) {
        return 0 === t.translate && 1 === t.scale
      }

      function $t(t) {
        return Nt(t.x) && Nt(t.y)
      }

      function Ht(t, e) {
        return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
      }

      function Yt(t) {
        return C(t.x) / C(t.y)
      }
      var Xt = n(36396);
      class Wt {
        constructor() {
          this.members = []
        }
        add(t) {
          (0, Xt.Kq)(this.members, t), t.scheduleRender()
        }
        remove(t) {
          if ((0, Xt.Ai)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
            const t = this.members[this.members.length - 1];
            t && this.promote(t)
          }
        }
        relegate(t) {
          const e = this.members.findIndex((e => t === e));
          if (0 === e) return !1;
          let n;
          for (let t = e; t >= 0; t--) {
            const e = this.members[t];
            if (!1 !== e.isPresent) {
              n = e;
              break
            }
          }
          return !!n && (this.promote(n), !0)
        }
        promote(t, e) {
          var n;
          const i = this.lead;
          if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
            i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0);
            const {
              crossfade: o
            } = t.options;
            !1 === o && i.hide()
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t => {
            var e, n, i, o, s;
            null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e), null === (s = null === (i = t.resumingFrom) || void 0 === i ? void 0 : (o = i.options).onExitComplete) || void 0 === s || s.call(o)
          }))
        }
        scheduleRender() {
          this.members.forEach((t => {
            t.instance && t.scheduleRender(!1)
          }))
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
        }
      }

      function qt(t, e, n) {
        let i = "";
        const o = t.x.translate / e.x,
          s = t.y.translate / e.y;
        if ((o || s) && (i = `translate3d(${o}px, ${s}px, 0) `), 1 === e.x && 1 === e.y || (i += `scale(${1/e.x}, ${1/e.y}) `), n) {
          const {
            rotate: t,
            rotateX: e,
            rotateY: o
          } = n;
          t && (i += `rotate(${t}deg) `), e && (i += `rotateX(${e}deg) `), o && (i += `rotateY(${o}deg) `)
        }
        const r = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return 1 === r && 1 === a || (i += `scale(${r}, ${a})`), i || "none"
      }
      var zt = n(76848);
      const Jt = (t, e) => t.depth - e.depth;
      class Kt {
        constructor() {
          this.children = [], this.isDirty = !1
        }
        add(t) {
          (0, Xt.Kq)(this.children, t), this.isDirty = !0
        }
        remove(t) {
          (0, Xt.Ai)(this.children, t), this.isDirty = !0
        }
        forEach(t) {
          this.isDirty && this.children.sort(Jt), this.isDirty = !1, this.children.forEach(t)
        }
      }
      var _t = n(60740),
        Qt = n(55606);
      const Gt = ["", "X", "Y", "Z"];
      let Zt = 0;

      function te({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: n,
        checkIsScrollRoot: i,
        resetTransform: o
      }) {
        return class {
          constructor(t, n = {}, i = (null == e ? void 0 : e())) {
            this.id = Zt++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isTransformDirty = !1, this.isProjectionDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
              x: 1,
              y: 1
            }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = () => {
              this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
            }, this.updateProjection = () => {
              this.nodes.forEach(ie), this.nodes.forEach(le), this.nodes.forEach(ue)
            }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.elementId = t, this.latestValues = n, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
            for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Kt)
          }
          addEventListener(t, e) {
            return this.eventHandlers.has(t) || this.eventHandlers.set(t, new bt.v), this.eventHandlers.get(t).add(e)
          }
          notifyListeners(t, ...e) {
            const n = this.eventHandlers.get(t);
            null == n || n.notify(...e)
          }
          hasListeners(t) {
            return this.eventHandlers.has(t)
          }
          registerPotentialNode(t, e) {
            this.potentialNodes.set(t, e)
          }
          mount(e, n = !1) {
            var i;
            if (this.instance) return;
            this.isSVG = e instanceof SVGElement && "svg" !== e.tagName, this.instance = e;
            const {
              layoutId: o,
              layout: s,
              visualElement: r
            } = this.options;
            if (r && !r.current && r.mount(e), this.root.nodes.add(this), null === (i = this.parent) || void 0 === i || i.children.add(this), this.elementId && this.root.potentialNodes.delete(this.elementId), n && (s || o) && (this.isLayoutDirty = !0), t) {
              let n;
              const i = () => this.root.updateBlockedByResize = !1;
              t(e, (() => {
                this.root.updateBlockedByResize = !0, n && n(), n = (0, Qt.c)(i, 250), at.w.hasAnimatedSinceResize && (at.w.hasAnimatedSinceResize = !1, this.nodes.forEach(ae))
              }))
            }
            o && this.root.registerSharedNode(o, this), !1 !== this.options.animate && r && (o || s) && this.addEventListener("didUpdate", (({
              delta: t,
              hasLayoutChanged: e,
              hasRelativeTargetChanged: n,
              layout: i
            }) => {
              var o, s, a, l, u;
              if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
              const c = null !== (s = null !== (o = this.options.transition) && void 0 !== o ? o : r.getDefaultTransition()) && void 0 !== s ? s : me,
                {
                  onLayoutAnimationStart: h,
                  onLayoutAnimationComplete: d
                } = r.getProps(),
                p = !this.targetLayout || !Ht(this.targetLayout, i) || n,
                f = !e && n;
              if ((null === (a = this.resumeFrom) || void 0 === a ? void 0 : a.instance) || f || e && (p || !this.currentAnimation)) {
                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, f);
                const e = {
                  ...(0, Ut.rU)(c, "layout"),
                  onPlay: h,
                  onComplete: d
                };
                r.shouldReduceMotion && (e.delay = 0, e.type = !1), this.startAnimation(e)
              } else e || 0 !== this.animationProgress || ae(this), this.isLead() && (null === (u = (l = this.options).onExitComplete) || void 0 === u || u.call(l));
              this.targetLayout = i
            }))
          }
          unmount() {
            var t, e;
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, h.eO.preRender(this.updateProjection)
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
          }
          isTreeAnimationBlocked() {
            var t;
            return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
          }
          startUpdate() {
            var t;
            this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(ce), this.animationId++)
          }
          willUpdate(t = !0) {
            var e, n, i;
            if (this.root.isUpdateBlocked()) return void(null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e));
            if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              const e = this.path[t];
              e.shouldResetTransform = !0, e.updateScroll("snapshot")
            }
            const {
              layoutId: o,
              layout: s
            } = this.options;
            if (void 0 === o && !s) return;
            const r = null === (i = this.options.visualElement) || void 0 === i ? void 0 : i.getProps().transformTemplate;
            this.prevTransformTemplateValue = null == r ? void 0 : r(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
          }
          didUpdate() {
            if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(se);
            this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(ve), this.potentialNodes.clear()), this.nodes.forEach(re), this.nodes.forEach(ee), this.nodes.forEach(ne), this.clearAllSnapshots(), h.qX.update(), h.qX.preRender(), h.qX.render())
          }
          clearAllSnapshots() {
            this.nodes.forEach(oe), this.sharedNodes.forEach(he)
          }
          scheduleUpdateProjection() {
            h.OH.preRender(this.updateProjection, !1, !0)
          }
          scheduleCheckAfterUnmount() {
            h.OH.postRender((() => {
              this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }))
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure())
          }
          updateLayout() {
            var t;
            if (!this.instance) return;
            if (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
            const e = this.layout;
            this.layout = this.measure(!1), this.layoutCorrected = (0, H.ge)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox), null === (t = this.options.visualElement) || void 0 === t || t.notify("LayoutMeasure", this.layout.layoutBox, null == e ? void 0 : e.layoutBox)
          }
          updateScroll(t = "measure") {
            let e = Boolean(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
              animationId: this.root.animationId,
              phase: t,
              isRoot: i(this.instance),
              offset: n(this.instance)
            })
          }
          resetTransform() {
            var t;
            if (!o) return;
            const e = this.isLayoutDirty || this.shouldResetTransform,
              n = this.projectionDelta && !$t(this.projectionDelta),
              i = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
              s = null == i ? void 0 : i(this.latestValues, ""),
              r = s !== this.prevTransformTemplateValue;
            e && (n || (0, zt.HD)(this.latestValues) || r) && (o(this.instance, s), this.shouldResetTransform = !1, this.scheduleRender())
          }
          measure(t = !0) {
            const e = this.measurePageBox();
            let n = this.removeElementScroll(e);
            var i;
            return t && (n = this.removeTransform(n)), ge((i = n).x), ge(i.y), {
              animationId: this.root.animationId,
              measuredBox: e,
              layoutBox: n,
              latestValues: {},
              source: this.id
            }
          }
          measurePageBox() {
            const {
              visualElement: t
            } = this.options;
            if (!t) return (0, H.ge)();
            const e = t.measureViewportBox(),
              {
                scroll: n
              } = this.root;
            return n && ((0, jt.Ql)(e.x, n.offset.x), (0, jt.Ql)(e.y, n.offset.y)), e
          }
          removeElementScroll(t) {
            const e = (0, H.ge)();
            Bt(e, t);
            for (let n = 0; n < this.path.length; n++) {
              const i = this.path[n],
                {
                  scroll: o,
                  options: s
                } = i;
              if (i !== this.root && o && s.layoutScroll) {
                if (o.isRoot) {
                  Bt(e, t);
                  const {
                    scroll: n
                  } = this.root;
                  n && ((0, jt.Ql)(e.x, -n.offset.x), (0, jt.Ql)(e.y, -n.offset.y))
                }(0, jt.Ql)(e.x, o.offset.x), (0, jt.Ql)(e.y, o.offset.y)
              }
            }
            return e
          }
          applyTransform(t, e = !1) {
            const n = (0, H.ge)();
            Bt(n, t);
            for (let t = 0; t < this.path.length; t++) {
              const i = this.path[t];
              !e && i.options.layoutScroll && i.scroll && i !== i.root && (0, jt.Ww)(n, {
                x: -i.scroll.offset.x,
                y: -i.scroll.offset.y
              }), (0, zt.HD)(i.latestValues) && (0, jt.Ww)(n, i.latestValues)
            }
            return (0, zt.HD)(this.latestValues) && (0, jt.Ww)(n, this.latestValues), n
          }
          removeTransform(t) {
            var e;
            const n = (0, H.ge)();
            Bt(n, t);
            for (let t = 0; t < this.path.length; t++) {
              const i = this.path[t];
              if (!i.instance) continue;
              if (!(0, zt.HD)(i.latestValues)) continue;
              (0, zt.vk)(i.latestValues) && i.updateSnapshot();
              const o = (0, H.ge)();
              Bt(o, i.measurePageBox()), It(n, i.latestValues, null === (e = i.snapshot) || void 0 === e ? void 0 : e.layoutBox, o)
            }
            return (0, zt.HD)(this.latestValues) && It(n, this.latestValues), n
          }
          setTargetDelta(t) {
            this.targetDelta = t, this.isProjectionDirty = !0, this.root.scheduleUpdateProjection()
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade
            }
          }
          clearMeasurements() {
            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
          }
          resolveTargetDelta() {
            var t;
            const e = this.getLead();
            if (this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), !this.isProjectionDirty && !this.attemptToResolveRelativeTarget) return;
            const {
              layout: n,
              layoutId: i
            } = this.options;
            if (this.layout && (n || i)) {
              if (!this.targetDelta && !this.relativeTarget) {
                const t = this.getClosestProjectingParent();
                t && t.layout ? (this.relativeParent = t, this.relativeTarget = (0, H.ge)(), this.relativeTargetOrigin = (0, H.ge)(), L(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), Bt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
              var o, s, r;
              if ((this.relativeTarget || this.targetDelta) && (this.target || (this.target = (0, H.ge)(), this.targetWithTransforms = (0, H.ge)()), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (o = this.target, s = this.relativeTarget, r = this.relativeParent.target, B(o.x, s.x, r.x), B(o.y, s.y, r.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Bt(this.target, this.layout.layoutBox), (0, jt.o4)(this.target, this.targetDelta)) : Bt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                this.attemptToResolveRelativeTarget = !1;
                const t = this.getClosestProjectingParent();
                t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target ? (this.relativeParent = t, this.relativeTarget = (0, H.ge)(), this.relativeTargetOrigin = (0, H.ge)(), L(this.relativeTargetOrigin, this.target, t.target), Bt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
              }
            }
          }
          getClosestProjectingParent() {
            if (this.parent && !(0, zt.vk)(this.parent.latestValues) && !(0, zt.vF)(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
          }
          calcProjection() {
            var t;
            const {
              isProjectionDirty: e,
              isTransformDirty: n
            } = this;
            this.isProjectionDirty = this.isTransformDirty = !1;
            const i = this.getLead(),
              o = Boolean(this.resumingFrom) || this !== i;
            let s = !0;
            if (e && (s = !1), o && n && (s = !1), s) return;
            const {
              layout: r,
              layoutId: a
            } = this.options;
            if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !r && !a) return;
            Bt(this.layoutCorrected, this.layout.layoutBox), (0, jt.OU)(this.layoutCorrected, this.treeScale, this.path, o);
            const {
              target: l
            } = i;
            if (!l) return;
            this.projectionDelta || (this.projectionDelta = (0, H.xU)(), this.projectionDeltaWithTransform = (0, H.xU)());
            const u = this.treeScale.x,
              c = this.treeScale.y,
              h = this.projectionTransform;
            k(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.projectionTransform = qt(this.projectionDelta, this.treeScale), this.projectionTransform === h && this.treeScale.x === u && this.treeScale.y === c || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l))
          }
          hide() {
            this.isVisible = !1
          }
          show() {
            this.isVisible = !0
          }
          scheduleRender(t = !0) {
            var e, n, i;
            null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e), t && (null === (i = this.getStack()) || void 0 === i || i.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
          }
          setAnimationOrigin(t, e = !1) {
            var n, i;
            const o = this.snapshot,
              s = (null == o ? void 0 : o.latestValues) || {},
              r = {
                ...this.latestValues
              },
              a = (0, H.xU)();
            this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
            const l = (0, H.ge)(),
              u = (null == o ? void 0 : o.source) !== (null === (n = this.layout) || void 0 === n ? void 0 : n.source),
              c = ((null === (i = this.getStack()) || void 0 === i ? void 0 : i.members.length) || 0) <= 1,
              h = Boolean(u && !c && !0 === this.options.crossfade && !this.path.some(fe));
            this.animationProgress = 0, this.mixTargetDelta = e => {
              var n;
              const i = e / 1e3;
              var o, d, p, f;
              de(a.x, t.x, i), de(a.y, t.y, i), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (L(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox), o = this.relativeTarget, d = this.relativeTargetOrigin, p = l, f = i, pe(o.x, d.x, p.x, f), pe(o.y, d.y, p.y, f)), u && (this.animationValues = r, function(t, e, n, i, o, s) {
                o ? (t.opacity = (0, A.j)(0, void 0 !== n.opacity ? n.opacity : 1, Ct(i)), t.opacityExit = (0, A.j)(void 0 !== e.opacity ? e.opacity : 1, 0, Mt(i))) : s && (t.opacity = (0, A.j)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, i));
                for (let o = 0; o < Tt; o++) {
                  const s = `border${St[o]}Radius`;
                  let r = At(e, s),
                    a = At(n, s);
                  void 0 === r && void 0 === a || (r || (r = 0), a || (a = 0), 0 === r || 0 === a || Pt(r) === Pt(a) ? (t[s] = Math.max((0, A.j)(Et(r), Et(a), i), 0), (z.KN.test(a) || z.KN.test(r)) && (t[s] += "%")) : t[s] = a)
                }(e.rotate || n.rotate) && (t.rotate = (0, A.j)(e.rotate || 0, n.rotate || 0, i))
              }(r, s, this.latestValues, i, h, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = i
            }, this.mixTargetDelta(0)
          }
          startAnimation(t) {
            var e, n;
            this.notifyListeners("animationStart"), null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (h.eO.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = h.OH.update((() => {
              at.w.hasAnimatedSinceResize = !0, this.currentAnimation = function(t, e, n = {}) {
                const i = (0, xt.S)(t) ? t : (0, yt.O)(t);
                return i.start((0, J.O)("", i, e, n)), {
                  stop: () => i.stop(),
                  isAnimating: () => i.isAnimating()
                }
              }(0, 1e3, {
                ...t,
                onUpdate: e => {
                  var n;
                  this.mixTargetDelta(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                },
                onComplete: () => {
                  var e;
                  null === (e = t.onComplete) || void 0 === e || e.call(t), this.completeAnimation()
                }
              }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
            }))
          }
          completeAnimation() {
            var t;
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
          }
          finishAnimation() {
            var t;
            this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
          }
          applyTransformsToTarget() {
            const t = this.getLead();
            let {
              targetWithTransforms: e,
              target: n,
              layout: i,
              latestValues: o
            } = t;
            if (e && n && i) {
              if (this !== t && this.layout && i && ye(this.options.animationType, this.layout.layoutBox, i.layoutBox)) {
                n = this.target || (0, H.ge)();
                const e = C(this.layout.layoutBox.x);
                n.x.min = t.target.x.min, n.x.max = n.x.min + e;
                const i = C(this.layout.layoutBox.y);
                n.y.min = t.target.y.min, n.y.max = n.y.min + i
              }
              Bt(e, n), (0, jt.Ww)(e, o), k(this.projectionDeltaWithTransform, this.layoutCorrected, e, o)
            }
          }
          registerSharedNode(t, e) {
            var n, i, o;
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new Wt), this.sharedNodes.get(t).add(e), e.promote({
              transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
              preserveFollowOpacity: null === (o = null === (i = e.options.initialPromotionConfig) || void 0 === i ? void 0 : i.shouldPreserveFollowOpacity) || void 0 === o ? void 0 : o.call(i, e)
            })
          }
          isLead() {
            const t = this.getStack();
            return !t || t.lead === this
          }
          getLead() {
            var t;
            const {
              layoutId: e
            } = this.options;
            return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
          }
          getPrevLead() {
            var t;
            const {
              layoutId: e
            } = this.options;
            return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
          }
          getStack() {
            const {
              layoutId: t
            } = this.options;
            if (t) return this.root.sharedNodes.get(t)
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: n
          } = {}) {
            const i = this.getStack();
            i && i.promote(this, n), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
              transition: e
            })
          }
          relegate() {
            const t = this.getStack();
            return !!t && t.relegate(this)
          }
          resetRotation() {
            const {
              visualElement: t
            } = this.options;
            if (!t) return;
            let e = !1;
            const {
              latestValues: n
            } = t;
            if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (e = !0), !e) return;
            const i = {};
            for (let e = 0; e < Gt.length; e++) {
              const o = "rotate" + Gt[e];
              n[o] && (i[o] = n[o], t.setStaticValue(o, 0))
            }
            null == t || t.render();
            for (const e in i) t.setStaticValue(e, i[e]);
            t.scheduleRender()
          }
          getProjectionStyles(t = {}) {
            var e, n, i;
            const o = {};
            if (!this.instance || this.isSVG) return o;
            if (!this.isVisible) return {
              visibility: "hidden"
            };
            o.visibility = "";
            const s = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
            if (this.needsReset) return this.needsReset = !1, o.opacity = "", o.pointerEvents = (0, _t.u)(t.pointerEvents) || "", o.transform = s ? s(this.latestValues, "") : "none", o;
            const r = this.getLead();
            if (!this.projectionDelta || !this.layout || !r.target) {
              const e = {};
              return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = (0, _t.u)(t.pointerEvents) || ""), this.hasProjected && !(0, zt.HD)(this.latestValues) && (e.transform = s ? s({}, "") : "none", this.hasProjected = !1), e
            }
            const a = r.animationValues || r.latestValues;
            this.applyTransformsToTarget(), o.transform = qt(this.projectionDeltaWithTransform, this.treeScale, a), s && (o.transform = s(a, o.transform));
            const {
              x: l,
              y: u
            } = this.projectionDelta;
            o.transformOrigin = `${100*l.origin}% ${100*u.origin}% 0`, r.animationValues ? o.opacity = r === this ? null !== (i = null !== (n = a.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== i ? i : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : o.opacity = r === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0;
            for (const t in ft.H) {
              if (void 0 === a[t]) continue;
              const {
                correct: e,
                applyTo: n
              } = ft.H[t], i = e(a[t], r);
              if (n) {
                const t = n.length;
                for (let e = 0; e < t; e++) o[n[e]] = i
              } else o[t] = i
            }
            return this.options.layoutId && (o.pointerEvents = r === this ? (0, _t.u)(t.pointerEvents) || "" : "none"), o
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
          }
          resetTree() {
            this.root.nodes.forEach((t => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
            })), this.root.nodes.forEach(se), this.root.sharedNodes.clear()
          }
        }
      }

      function ee(t) {
        t.updateLayout()
      }

      function ne(t) {
        var e, n, i;
        const o = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
        if (t.isLead() && t.layout && o && t.hasListeners("didUpdate")) {
          const {
            layoutBox: e,
            measuredBox: n
          } = t.layout, {
            animationType: i
          } = t.options, s = o.source !== t.layout.source;
          "size" === i ? Y((t => {
            const n = s ? o.measuredBox[t] : o.layoutBox[t],
              i = C(n);
            n.min = e[t].min, n.max = n.min + i
          })) : ye(i, o.layoutBox, e) && Y((t => {
            const n = s ? o.measuredBox[t] : o.layoutBox[t],
              i = C(e[t]);
            n.max = n.min + i
          }));
          const r = (0, H.xU)();
          k(r, e, o.layoutBox);
          const a = (0, H.xU)();
          s ? k(a, t.applyTransform(n, !0), o.measuredBox) : k(a, e, o.layoutBox);
          const l = !$t(r);
          let u = !1;
          if (!t.resumeFrom) {
            const n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              const {
                snapshot: t,
                layout: i
              } = n;
              if (t && i) {
                const n = (0, H.ge)();
                L(n, o.layoutBox, t.layoutBox);
                const s = (0, H.ge)();
                L(s, e, i.layoutBox), Ht(n, s) || (u = !0)
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: o,
            delta: a,
            layoutDelta: r,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u
          })
        } else t.isLead() && (null === (i = (n = t.options).onExitComplete) || void 0 === i || i.call(n));
        t.options.transition = void 0
      }

      function ie(t) {
        t.isProjectionDirty || (t.isProjectionDirty = Boolean(t.parent && t.parent.isProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = Boolean(t.parent && t.parent.isTransformDirty))
      }

      function oe(t) {
        t.clearSnapshot()
      }

      function se(t) {
        t.clearMeasurements()
      }

      function re(t) {
        const {
          visualElement: e
        } = t.options;
        (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notify("BeforeLayoutMeasure"), t.resetTransform()
      }

      function ae(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
      }

      function le(t) {
        t.resolveTargetDelta()
      }

      function ue(t) {
        t.calcProjection()
      }

      function ce(t) {
        t.resetRotation()
      }

      function he(t) {
        t.removeLeadSnapshot()
      }

      function de(t, e, n) {
        t.translate = (0, A.j)(e.translate, 0, n), t.scale = (0, A.j)(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
      }

      function pe(t, e, n, i) {
        t.min = (0, A.j)(e.min, n.min, i), t.max = (0, A.j)(e.max, n.max, i)
      }

      function fe(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
      }
      const me = {
        duration: .45,
        ease: [.4, 0, .1, 1]
      };

      function ve(t, e) {
        let n = t.root;
        for (let e = t.path.length - 1; e >= 0; e--)
          if (Boolean(t.path[e].instance)) {
            n = t.path[e];
            break
          } const i = (n && n !== t.root ? n.instance : document).querySelector(`[data-projection-id="${e}"]`);
        i && t.mount(i, !0)
      }

      function ge(t) {
        t.min = Math.round(t.min), t.max = Math.round(t.max)
      }

      function ye(t, e, n) {
        return "position" === t || "preserve-aspect" === t && !M(Yt(e), Yt(n), .2)
      }
      const xe = te({
          attachResizeListener: (t, e) => (0, q.k)(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop
          }),
          checkIsScrollRoot: () => !0
        }),
        be = {
          current: void 0
        },
        we = te({
          measureScroll: t => ({
            x: t.scrollLeft,
            y: t.scrollTop
          }),
          defaultParent: () => {
            if (!be.current) {
              const t = new xe(0, {});
              t.mount(window), t.setOptions({
                layoutScroll: !0
              }), be.current = t
            }
            return be.current
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none"
          },
          checkIsScrollRoot: t => Boolean("fixed" === window.getComputedStyle(t).position)
        }),
        Ve = {
          ...r.W,
          ...s.n,
          ...nt,
          ...gt
        },
        Se = (0, i.H)(((t, e) => (0, o.P)(t, e, Ve, it.J, we)))
    },
    38764: (t, e, n) => {
      "use strict";
      n.d(e, {
        I: () => i
      });
      const i = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    },
    72005: (t, e, n) => {
      "use strict";
      n.d(e, {
        P: () => j
      });
      var i = n(61427),
        o = n(71403),
        s = n(42431),
        r = n(87346),
        a = n(3680);
      const l = () => ({
        style: {},
        transform: {},
        transformKeys: [],
        transformOrigin: {},
        vars: {}
      });

      function u(t, e, n) {
        for (const i in e)(0, r.S)(e[i]) || (0, s.z)(i, n) || (t[i] = e[i])
      }

      function c(t, e, n) {
        const i = {},
          s = function(t, e, n) {
            const i = {};
            return u(i, t.style || {}, t), Object.assign(i, function({
              transformTemplate: t
            }, e, n) {
              return (0, o.useMemo)((() => {
                const i = l();
                return (0, a.O)(i, e, {
                  enableHardwareAcceleration: !n
                }, t), Object.assign({}, i.vars, i.style)
              }), [e])
            }(t, e, n)), t.transformValues ? t.transformValues(i) : i
          }(t, e, n);
        return t.drag && !1 !== t.dragListener && (i.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x")), i.style = s, i
      }
      const h = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);

      function d(t) {
        return h.has(t)
      }
      let p = t => !d(t);
      try {
        (f = require("@emotion/is-prop-valid").default) && (p = t => t.startsWith("on") ? !d(t) : f(t))
      } catch (t) {}
      var f, m = n(95349);
      const v = () => ({
        ...l(),
        attrs: {}
      });
      var g = n(74787);

      function y(t, e, n, i) {
        const s = (0, o.useMemo)((() => {
          const n = v();
          return (0, m.B)(n, e, {
            enableHardwareAcceleration: !1
          }, (0, g.n)(i), t.transformTemplate), {
            ...n.attrs,
            style: {
              ...n.style
            }
          }
        }), [e]);
        if (t.style) {
          const e = {};
          u(e, t.style, t), s.style = {
            ...e,
            ...s.style
          }
        }
        return s
      }

      function x(t = !1) {
        return (e, n, s, r, {
          latestValues: a
        }, l) => {
          const u = ((0, i.Q)(e) ? y : c)(n, a, l, e),
            h = function(t, e, n) {
              const i = {};
              for (const o in t)(p(o) || !0 === n && d(o) || !e && !d(o) || t.draggable && o.startsWith("onDrag")) && (i[o] = t[o]);
              return i
            }(n, "string" == typeof e, t),
            f = {
              ...h,
              ...u,
              ref: r
            };
          return s && (f["data-projection-id"] = s), (0, o.createElement)(e, f)
        }
      }
      var b = n(36729),
        w = n(2175),
        V = n(17704),
        S = n(63041),
        T = n(41931),
        E = n(39899),
        P = n(60740),
        A = n(599),
        C = n(63271);
      const M = t => (e, n) => {
        const i = (0, o.useContext)(A.A),
          s = (0, o.useContext)(S.t),
          r = () => function({
            scrapeMotionValuesFromProps: t,
            createRenderState: e,
            onMount: n
          }, i, o, s) {
            const r = {
              latestValues: D(i, o, s, t),
              renderState: e()
            };
            return n && (r.mount = t => n(i, t, r)), r
          }(t, e, i, s);
        return n ? r() : (0, E.M)(r)
      };

      function D(t, e, n, i) {
        const o = {},
          s = i(t);
        for (const t in s) o[t] = (0, P.u)(s[t]);
        let {
          initial: r,
          animate: a
        } = t;
        const l = (0, C.e)(t),
          u = (0, C.O)(t);
        e && u && !l && !1 !== t.inherit && (void 0 === r && (r = e.initial), void 0 === a && (a = e.animate));
        let c = !!n && !1 === n.initial;
        c = c || !1 === r;
        const h = c ? a : r;
        return h && "boolean" != typeof h && !(0, V.N)(h) && (Array.isArray(h) ? h : [h]).forEach((e => {
          const n = (0, T.a)(t, e);
          if (!n) return;
          const {
            transitionEnd: i,
            transition: s,
            ...r
          } = n;
          for (const t in r) {
            let e = r[t];
            Array.isArray(e) && (e = e[c ? e.length - 1 : 0]), null !== e && (o[t] = e)
          }
          for (const t in i) o[t] = i[t]
        })), o
      }
      const k = {
          useVisualState: M({
            scrapeMotionValuesFromProps: w.x,
            createRenderState: v,
            onMount: (t, e, {
              renderState: n,
              latestValues: i
            }) => {
              try {
                n.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
              } catch (t) {
                n.dimensions = {
                  x: 0,
                  y: 0,
                  width: 0,
                  height: 0
                }
              }(0, m.B)(n, i, {
                enableHardwareAcceleration: !1
              }, (0, g.n)(e.tagName), t.transformTemplate), (0, b.d)(e, n)
            }
          })
        },
        B = {
          useVisualState: M({
            scrapeMotionValuesFromProps: n(51068).x,
            createRenderState: l
          })
        };

      function j(t, {
        forwardMotionProps: e = !1
      }, n, o, s) {
        return {
          ...(0, i.Q)(t) ? k : B,
          preloadedFeatures: n,
          useRender: x(e),
          createVisualElement: o,
          projectionNodeConstructor: s,
          Component: t
        }
      }
    },
    8093: (t, e, n) => {
      "use strict";
      n.d(e, {
        d9: () => l,
        z2: () => s
      });
      var i = n(87104);

      function o(t) {
        return "string" == typeof t && t.startsWith("var(--")
      }
      const s = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        r = 4;

      function a(t, e, n = 1) {
        (0, i.V)(n <= r, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
        const [l, u] = function(t) {
          const e = s.exec(t);
          if (!e) return [, ];
          const [, n, i] = e;
          return [n, i]
        }(t);
        if (!l) return;
        const c = window.getComputedStyle(e).getPropertyValue(l);
        return c ? c.trim() : o(u) ? a(u, e, n + 1) : u
      }

      function l(t, {
        ...e
      }, n) {
        const i = t.current;
        if (!(i instanceof Element)) return {
          target: e,
          transitionEnd: n
        };
        n && (n = {
          ...n
        }), t.values.forEach((t => {
          const e = t.get();
          if (!o(e)) return;
          const n = a(e, i);
          n && t.set(n)
        }));
        for (const t in e) {
          const s = e[t];
          if (!o(s)) continue;
          const r = a(s, i);
          r && (e[t] = r, n && void 0 === n[t] && (n[t] = s))
        }
        return {
          target: e,
          transitionEnd: n
        }
      }
    },
    98438: (t, e, n) => {
      "use strict";

      function i(t) {
        return t.startsWith("--")
      }
      n.d(e, {
        Y: () => i
      })
    },
    61427: (t, e, n) => {
      "use strict";
      n.d(e, {
        Q: () => o
      });
      const i = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

      function o(t) {
        return "string" == typeof t && !t.includes("-") && !!(i.indexOf(t) > -1 || /[A-Z]/.test(t))
      }
    },
    74522: (t, e, n) => {
      "use strict";
      n.d(e, {
        J: () => r
      });
      var i = n(16244),
        o = n(37034),
        s = n(19085);

      function r(t, e) {
        var n;
        let r = (0, s.D)(t);
        return r !== o.p && (r = i.f), null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, e)
      }
    },
    19085: (t, e, n) => {
      "use strict";
      n.d(e, {
        D: () => r
      });
      var i = n(53833),
        o = n(37034);
      const s = {
          ...n(80202).W,
          color: i.y,
          backgroundColor: i.y,
          outlineColor: i.y,
          fill: i.y,
          stroke: i.y,
          borderColor: i.y,
          borderTopColor: i.y,
          borderRightColor: i.y,
          borderBottomColor: i.y,
          borderLeftColor: i.y,
          filter: o.p,
          WebkitFilter: o.p
        },
        r = t => s[t]
    },
    64682: (t, e, n) => {
      "use strict";
      n.d(e, {
        T: () => r,
        n: () => a
      });
      var i = n(15998),
        o = n(80047),
        s = n(13751);
      const r = [i.ai, o.px, o.KN, o.uj, o.vw, o.vh, {
          test: t => "auto" === t,
          parse: t => t
        }],
        a = t => r.find((0, s.w)(t))
    },
    80202: (t, e, n) => {
      "use strict";
      n.d(e, {
        W: () => r
      });
      var i = n(15998),
        o = n(80047);
      const s = {
          ...i.ai,
          transform: Math.round
        },
        r = {
          borderWidth: o.px,
          borderTopWidth: o.px,
          borderRightWidth: o.px,
          borderBottomWidth: o.px,
          borderLeftWidth: o.px,
          borderRadius: o.px,
          radius: o.px,
          borderTopLeftRadius: o.px,
          borderTopRightRadius: o.px,
          borderBottomRightRadius: o.px,
          borderBottomLeftRadius: o.px,
          width: o.px,
          maxWidth: o.px,
          height: o.px,
          maxHeight: o.px,
          size: o.px,
          top: o.px,
          right: o.px,
          bottom: o.px,
          left: o.px,
          padding: o.px,
          paddingTop: o.px,
          paddingRight: o.px,
          paddingBottom: o.px,
          paddingLeft: o.px,
          margin: o.px,
          marginTop: o.px,
          marginRight: o.px,
          marginBottom: o.px,
          marginLeft: o.px,
          rotate: o.uj,
          rotateX: o.uj,
          rotateY: o.uj,
          rotateZ: o.uj,
          scale: i.hs,
          scaleX: i.hs,
          scaleY: i.hs,
          scaleZ: i.hs,
          skew: o.uj,
          skewX: o.uj,
          skewY: o.uj,
          distance: o.px,
          translateX: o.px,
          translateY: o.px,
          translateZ: o.px,
          x: o.px,
          y: o.px,
          z: o.px,
          perspective: o.px,
          transformPerspective: o.px,
          opacity: i.X4,
          originX: o.gQ,
          originY: o.gQ,
          originZ: o.px,
          zIndex: s,
          fillOpacity: i.X4,
          strokeOpacity: i.X4,
          numOctaves: s
        }
    },
    13751: (t, e, n) => {
      "use strict";
      n.d(e, {
        w: () => i
      });
      const i = t => e => e.test(t)
    },
    3680: (t, e, n) => {
      "use strict";
      n.d(e, {
        O: () => u
      });
      var i = n(87850);
      const o = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective"
        },
        s = (t, e) => i.U.indexOf(t) - i.U.indexOf(e);
      var r = n(98438);
      const a = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
      var l = n(80202);

      function u(t, e, n, u) {
        const {
          style: c,
          vars: h,
          transform: d,
          transformKeys: p,
          transformOrigin: f
        } = t;
        p.length = 0;
        let m = !1,
          v = !1,
          g = !0;
        for (const t in e) {
          const n = e[t];
          if ((0, r.Y)(t)) {
            h[t] = n;
            continue
          }
          const o = l.W[t],
            s = a(n, o);
          if (i.f.has(t)) {
            if (m = !0, d[t] = s, p.push(t), !g) continue;
            n !== (o.default || 0) && (g = !1)
          } else t.startsWith("origin") ? (v = !0, f[t] = s) : c[t] = s
        }
        if (e.transform || (m || u ? c.transform = function({
            transform: t,
            transformKeys: e
          }, {
            enableHardwareAcceleration: n = !0,
            allowTransformNone: i = !0
          }, r, a) {
            let l = "";
            e.sort(s);
            for (const n of e) l += `${o[n]||n}(${t[n]}) `;
            return n && !t.z && (l += "translateZ(0)"), l = l.trim(), a ? l = a(t, r ? "" : l) : i && r && (l = "none"), l
          }(t, n, g, u) : c.transform && (c.transform = "none")), v) {
          const {
            originX: t = "50%",
            originY: e = "50%",
            originZ: n = 0
          } = f;
          c.transformOrigin = `${t} ${e} ${n}`
        }
      }
    },
    66310: (t, e, n) => {
      "use strict";

      function i(t, {
        style: e,
        vars: n
      }, i, o) {
        Object.assign(t.style, e, o && o.getProjectionStyles(i));
        for (const e in n) t.style.setProperty(e, n[e])
      }
      n.d(e, {
        e: () => i
      })
    },
    51068: (t, e, n) => {
      "use strict";
      n.d(e, {
        x: () => s
      });
      var i = n(42431),
        o = n(87346);

      function s(t) {
        const {
          style: e
        } = t, n = {};
        for (const s in e)((0, o.S)(e[s]) || (0, i.z)(s, t)) && (n[s] = e[s]);
        return n
      }
    },
    87850: (t, e, n) => {
      "use strict";
      n.d(e, {
        U: () => i,
        f: () => o
      });
      const i = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        o = new Set(i)
    },
    95349: (t, e, n) => {
      "use strict";
      n.d(e, {
        B: () => l
      });
      var i = n(3680),
        o = n(80047);

      function s(t, e, n) {
        return "string" == typeof t ? t : o.px.transform(e + n * t)
      }
      const r = {
          offset: "stroke-dashoffset",
          array: "stroke-dasharray"
        },
        a = {
          offset: "strokeDashoffset",
          array: "strokeDasharray"
        };

      function l(t, {
        attrX: e,
        attrY: n,
        originX: l,
        originY: u,
        pathLength: c,
        pathSpacing: h = 1,
        pathOffset: d = 0,
        ...p
      }, f, m, v) {
        if ((0, i.O)(t, p, f, v), m) return void(t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
        t.attrs = t.style, t.style = {};
        const {
          attrs: g,
          style: y,
          dimensions: x
        } = t;
        g.transform && (x && (y.transform = g.transform), delete g.transform), x && (void 0 !== l || void 0 !== u || y.transform) && (y.transformOrigin = function(t, e, n) {
          return `${s(e,t.x,t.width)} ${s(n,t.y,t.height)}`
        }(x, void 0 !== l ? l : .5, void 0 !== u ? u : .5)), void 0 !== e && (g.x = e), void 0 !== n && (g.y = n), void 0 !== c && function(t, e, n = 1, i = 0, s = !0) {
          t.pathLength = 1;
          const l = s ? r : a;
          t[l.offset] = o.px.transform(-i);
          const u = o.px.transform(e),
            c = o.px.transform(n);
          t[l.array] = `${u} ${c}`
        }(g, c, h, d, !1)
      }
    },
    50273: (t, e, n) => {
      "use strict";
      n.d(e, {
        e: () => i
      });
      const i = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
    },
    74787: (t, e, n) => {
      "use strict";
      n.d(e, {
        n: () => i
      });
      const i = t => "string" == typeof t && "svg" === t.toLowerCase()
    },
    36729: (t, e, n) => {
      "use strict";
      n.d(e, {
        d: () => r
      });
      var i = n(38764),
        o = n(66310),
        s = n(50273);

      function r(t, e, n, r) {
        (0, o.e)(t, e, void 0, r);
        for (const n in e.attrs) t.setAttribute(s.e.has(n) ? n : (0, i.I)(n), e.attrs[n])
      }
    },
    2175: (t, e, n) => {
      "use strict";
      n.d(e, {
        x: () => s
      });
      var i = n(87346),
        o = n(51068);

      function s(t) {
        const e = (0, o.x)(t);
        for (const n in t)(0, i.S)(t[n]) && (e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]);
        return e
      }
    },
    29873: (t, e, n) => {
      "use strict";
      n.d(e, {
        ci: () => T,
        US: () => w
      });
      var i = n(17704),
        o = n(9546);

      function s(t, e) {
        if (!Array.isArray(e)) return !1;
        const n = e.length;
        if (n !== t.length) return !1;
        for (let i = 0; i < n; i++)
          if (e[i] !== t[i]) return !1;
        return !0
      }
      var r = n(35217),
        a = n(37455),
        l = n(87850),
        u = n(73075),
        c = n(880);
      const h = (t, e) => `${t}: ${e}`;

      function d(t, e) {
        const {
          MotionAppearAnimations: n
        } = window, i = h(t, l.f.has(e) ? "transform" : e), o = n && n.get(i);
        return o ? (c.OH.render((() => {
          try {
            o.cancel(), n.delete(i)
          } catch (t) {}
        })), o.currentTime || 0) : 0
      }
      const p = "data-" + (0, n(38764).I)("framerAppearId");
      var f = n(91621);

      function m(t, e, n = {}) {
        var i;
        const o = (0, a.K)(t, e, n.custom);
        let {
          transition: s = t.getDefaultTransition() || {}
        } = o || {};
        n.transitionOverride && (s = n.transitionOverride);
        const r = o ? () => v(t, o, n) : () => Promise.resolve(),
          l = (null === (i = t.variantChildren) || void 0 === i ? void 0 : i.size) ? (i = 0) => {
            const {
              delayChildren: o = 0,
              staggerChildren: r,
              staggerDirection: a
            } = s;
            return function(t, e, n = 0, i = 0, o = 1, s) {
              const r = [],
                a = (t.variantChildren.size - 1) * i,
                l = 1 === o ? (t = 0) => t * i : (t = 0) => a - t * i;
              return Array.from(t.variantChildren).sort(g).forEach(((t, i) => {
                r.push(m(t, e, {
                  ...s,
                  delay: n + l(i)
                }).then((() => t.notify("AnimationComplete", e))))
              })), Promise.all(r)
            }(t, e, o + i, r, a, n)
          } : () => Promise.resolve(),
          {
            when: u
          } = s;
        if (u) {
          const [t, e] = "beforeChildren" === u ? [r, l] : [l, r];
          return t().then(e)
        }
        return Promise.all([r(), l(n.delay)])
      }

      function v(t, e, {
        delay: n = 0,
        transitionOverride: i,
        type: o
      } = {}) {
        var s;
        let {
          transition: a = t.getDefaultTransition(),
          transitionEnd: c,
          ...h
        } = t.makeTargetAnimatable(e);
        const m = t.getValue("willChange");
        i && (a = i);
        const v = [],
          g = o && (null === (s = t.animationState) || void 0 === s ? void 0 : s.getState()[o]);
        for (const e in h) {
          const i = t.getValue(e),
            o = h[e];
          if (!i || void 0 === o || g && y(g, e)) continue;
          let s = {
            delay: n,
            elapsed: 0,
            ...a
          };
          if (t.shouldReduceMotion && l.f.has(e) && (s = {
              ...s,
              type: !1,
              delay: 0
            }), !i.hasAnimated) {
            const n = t.getProps()[p];
            n && (s.elapsed = d(n, e))
          }
          let r = i.start((0, f.O)(e, i, o, s));
          (0, u.k)(m) && (m.add(e), r = r.then((() => m.remove(e)))), v.push(r)
        }
        return Promise.all(v).then((() => {
          c && (0, r.Uo)(t, c)
        }))
      }

      function g(t, e) {
        return t.sortNodePosition(e)
      }

      function y({
        protectedKeys: t,
        needsAnimating: e
      }, n) {
        const i = t.hasOwnProperty(n) && !0 !== e[n];
        return e[n] = !1, i
      }
      var x = n(60265),
        b = n(84015);
      const w = [b.J.Animate, b.J.InView, b.J.Focus, b.J.Hover, b.J.Tap, b.J.Drag, b.J.Exit],
        V = [...w].reverse(),
        S = w.length;

      function T(t) {
        let e = function(t) {
          return e => Promise.all(e.map((({
            animation: e,
            options: n
          }) => function(t, e, n = {}) {
            let i;
            if (t.notify("AnimationStart", e), Array.isArray(e)) {
              const o = e.map((e => m(t, e, n)));
              i = Promise.all(o)
            } else if ("string" == typeof e) i = m(t, e, n);
            else {
              const o = "function" == typeof e ? (0, a.K)(t, e, n.custom) : e;
              i = v(t, o, n)
            }
            return i.then((() => t.notify("AnimationComplete", e)))
          }(t, e, n))))
        }(t);
        const n = {
          [b.J.Animate]: E(!0),
          [b.J.InView]: E(),
          [b.J.Hover]: E(),
          [b.J.Tap]: E(),
          [b.J.Drag]: E(),
          [b.J.Focus]: E(),
          [b.J.Exit]: E()
        };
        let r = !0;
        const l = (e, n) => {
          const i = (0, a.K)(t, n);
          if (i) {
            const {
              transition: t,
              transitionEnd: n,
              ...o
            } = i;
            e = {
              ...e,
              ...o,
              ...n
            }
          }
          return e
        };

        function u(a, u) {
          const c = t.getProps(),
            h = t.getVariantContext(!0) || {},
            d = [],
            p = new Set;
          let f = {},
            m = 1 / 0;
          for (let e = 0; e < S; e++) {
            const y = V[e],
              b = n[y],
              w = void 0 !== c[y] ? c[y] : h[y],
              S = (0, x.w)(w),
              T = y === u ? b.isActive : null;
            !1 === T && (m = e);
            let E = w === h[y] && w !== c[y] && S;
            if (E && r && t.manuallyAnimateOnMount && (E = !1), b.protectedKeys = {
                ...f
              }, !b.isActive && null === T || !w && !b.prevProp || (0, i.N)(w) || "boolean" == typeof w) continue;
            const P = (v = b.prevProp, "string" == typeof(g = w) ? g !== v : !!Array.isArray(g) && !s(g, v));
            let A = P || y === u && b.isActive && !E && S || e > m && S;
            const C = Array.isArray(w) ? w : [w];
            let M = C.reduce(l, {});
            !1 === T && (M = {});
            const {
              prevResolvedValues: D = {}
            } = b, k = {
              ...D,
              ...M
            }, B = t => {
              A = !0, p.delete(t), b.needsAnimating[t] = !0
            };
            for (const t in k) {
              const e = M[t],
                n = D[t];
              f.hasOwnProperty(t) || (e !== n ? (0, o.p)(e) && (0, o.p)(n) ? !s(e, n) || P ? B(t) : b.protectedKeys[t] = !0 : void 0 !== e ? B(t) : p.add(t) : void 0 !== e && p.has(t) ? B(t) : b.protectedKeys[t] = !0)
            }
            b.prevProp = w, b.prevResolvedValues = M, b.isActive && (f = {
              ...f,
              ...M
            }), r && t.blockInitialAnimation && (A = !1), A && !E && d.push(...C.map((t => ({
              animation: t,
              options: {
                type: y,
                ...a
              }
            }))))
          }
          var v, g;
          if (p.size) {
            const e = {};
            p.forEach((n => {
              const i = t.getBaseTarget(n);
              void 0 !== i && (e[n] = i)
            })), d.push({
              animation: e
            })
          }
          let y = Boolean(d.length);
          return r && !1 === c.initial && !t.manuallyAnimateOnMount && (y = !1), r = !1, y ? e(d) : Promise.resolve()
        }
        return {
          animateChanges: u,
          setActive: function(e, i, o) {
            var s;
            if (n[e].isActive === i) return Promise.resolve();
            null === (s = t.variantChildren) || void 0 === s || s.forEach((t => {
              var n;
              return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, i)
            })), n[e].isActive = i;
            const r = u(o, e);
            for (const t in n) n[t].protectedKeys = {};
            return r
          },
          setAnimateFunction: function(n) {
            e = n(t)
          },
          getState: () => n
        }
      }

      function E(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {}
        }
      }
    },
    63271: (t, e, n) => {
      "use strict";
      n.d(e, {
        O: () => a,
        e: () => r
      });
      var i = n(17704),
        o = n(60265);
      const s = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];

      function r(t) {
        return (0, i.N)(t.animate) || s.some((e => (0, o.w)(t[e])))
      }

      function a(t) {
        return Boolean(r(t) || t.variants)
      }
    },
    60265: (t, e, n) => {
      "use strict";

      function i(t) {
        return "string" == typeof t || Array.isArray(t)
      }
      n.d(e, {
        w: () => i
      })
    },
    37455: (t, e, n) => {
      "use strict";
      n.d(e, {
        K: () => o
      });
      var i = n(41931);

      function o(t, e, n) {
        const o = t.getProps();
        return (0, i.a)(o, e, void 0 !== n ? n : o.custom, function(t) {
          const e = {};
          return t.values.forEach(((t, n) => e[n] = t.get())), e
        }(t), function(t) {
          const e = {};
          return t.values.forEach(((t, n) => e[n] = t.getVelocity())), e
        }(t))
      }
    },
    41931: (t, e, n) => {
      "use strict";

      function i(t, e, n, i = {}, o = {}) {
        return "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, o)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, i, o)), e
      }
      n.d(e, {
        a: () => i
      })
    },
    35217: (t, e, n) => {
      "use strict";
      n.d(e, {
        TM: () => g,
        $z: () => x,
        Uo: () => v
      });
      const i = t => /^\-?\d*\.?\d+$/.test(t),
        o = t => /^0[^.\s]+$/.test(t);
      var s = n(3335),
        r = n(44627),
        a = n(16244),
        l = n(74522),
        u = n(53833),
        c = n(64682),
        h = n(13751);
      const d = [...c.T, u.y, a.f],
        p = t => d.find((0, h.w)(t));
      var f = n(37455);

      function m(t, e, n) {
        t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, (0, r.O)(n))
      }

      function v(t, e) {
        const n = (0, f.K)(t, e);
        let {
          transitionEnd: i = {},
          transition: o = {},
          ...r
        } = n ? t.makeTargetAnimatable(n, !1) : {};
        r = {
          ...r,
          ...i
        };
        for (const e in r) m(t, e, (0, s.K)(r[e]))
      }

      function g(t, e, n) {
        var s, u;
        const c = Object.keys(e).filter((e => !t.hasValue(e))),
          h = c.length;
        if (h)
          for (let d = 0; d < h; d++) {
            const h = c[d],
              f = e[h];
            let m = null;
            Array.isArray(f) && (m = f[0]), null === m && (m = null !== (u = null !== (s = n[h]) && void 0 !== s ? s : t.readValue(h)) && void 0 !== u ? u : e[h]), null != m && ("string" == typeof m && (i(m) || o(m)) ? m = parseFloat(m) : !p(m) && a.f.test(f) && (m = (0, l.J)(h, f)), t.addValue(h, (0, r.O)(m, {
              owner: t
            })), void 0 === n[h] && (n[h] = m), null !== m && t.setBaseTarget(h, m))
          }
      }

      function y(t, e) {
        if (e) return (e[t] || e.default || e).from
      }

      function x(t, e, n) {
        var i;
        const o = {};
        for (const s in t) {
          const t = y(s, e);
          o[s] = void 0 !== t ? t : null === (i = n.getValue(s)) || void 0 === i ? void 0 : i.get()
        }
        return o
      }
    },
    84015: (t, e, n) => {
      "use strict";
      var i;
      n.d(e, {
          J: () => i
        }),
        function(t) {
          t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit"
        }(i || (i = {}))
    },
    36396: (t, e, n) => {
      "use strict";

      function i(t, e) {
        -1 === t.indexOf(e) && t.push(e)
      }

      function o(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1)
      }
      n.d(e, {
        Ai: () => o,
        Kq: () => i
      })
    },
    28626: (t, e, n) => {
      "use strict";
      n.d(e, {
        q: () => i
      });
      const i = (t, e, n) => Math.min(Math.max(n, t), e)
    },
    55606: (t, e, n) => {
      "use strict";
      n.d(e, {
        c: () => o
      });
      var i = n(880);

      function o(t, e) {
        const n = performance.now(),
          o = ({
            timestamp: s
          }) => {
            const r = s - n;
            r >= e && (i.eO.read(o), t(r - e))
          };
        return i.OH.read(o, !0), () => i.eO.read(o)
      }
    },
    40270: (t, e, n) => {
      "use strict";
      n.d(e, {
        B: () => i
      });
      const i = "undefined" != typeof document
    },
    21227: (t, e, n) => {
      "use strict";

      function i(t) {
        return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
      }
      n.d(e, {
        X: () => i
      })
    },
    17157: (t, e, n) => {
      "use strict";
      n.d(e, {
        j: () => i
      });
      const i = (t, e, n) => -n * t + n * e + t
    },
    29401: (t, e, n) => {
      "use strict";
      n.d(e, {
        l: () => i
      });
      const i = t => t
    },
    36765: (t, e, n) => {
      "use strict";
      n.d(e, {
        F: () => o
      });
      const i = (t, e) => n => e(t(n)),
        o = (...t) => t.reduce(i)
    },
    39512: (t, e, n) => {
      "use strict";
      n.d(e, {
        _: () => o
      });
      var i = n(90098);
      const o = (void 0 === i || i.env, "production")
    },
    52940: (t, e, n) => {
      "use strict";
      n.d(e, {
        q: () => i
      });
      const i = (t, e, n) => {
        const i = e - t;
        return 0 === i ? 1 : (n - t) / i
      }
    },
    3335: (t, e, n) => {
      "use strict";
      n.d(e, {
        B: () => o,
        K: () => s
      });
      var i = n(9546);
      const o = t => Boolean(t && "object" == typeof t && t.mix && t.toValue),
        s = t => (0, i.p)(t) ? t[t.length - 1] || 0 : t
    },
    46360: (t, e, n) => {
      "use strict";
      n.d(e, {
        v: () => o
      });
      var i = n(36396);
      class o {
        constructor() {
          this.subscriptions = []
        }
        add(t) {
          return (0, i.Kq)(this.subscriptions, t), () => (0, i.Ai)(this.subscriptions, t)
        }
        notify(t, e, n) {
          const i = this.subscriptions.length;
          if (i)
            if (1 === i) this.subscriptions[0](t, e, n);
            else
              for (let o = 0; o < i; o++) {
                const i = this.subscriptions[o];
                i && i(t, e, n)
              }
        }
        getSize() {
          return this.subscriptions.length
        }
        clear() {
          this.subscriptions.length = 0
        }
      }
    },
    29727: (t, e, n) => {
      "use strict";
      n.d(e, {
        f: () => i
      });
      const i = t => 1e3 * t
    },
    39899: (t, e, n) => {
      "use strict";
      n.d(e, {
        M: () => o
      });
      var i = n(71403);

      function o(t) {
        const e = (0, i.useRef)(null);
        return null === e.current && (e.current = t()), e.current
      }
    },
    51649: (t, e, n) => {
      "use strict";
      n.d(e, {
        l: () => o
      });
      var i = n(71403);

      function o(t) {
        return (0, i.useEffect)((() => () => t()), [])
      }
    },
    79103: (t, e, n) => {
      "use strict";

      function i(t, e) {
        return e ? t * (1e3 / e) : 0
      }
      n.d(e, {
        f: () => i
      })
    },
    44627: (t, e, n) => {
      "use strict";
      n.d(e, {
        O: () => l
      });
      var i = n(61555),
        o = n(880),
        s = n(46360),
        r = n(79103);
      class a {
        constructor(t, e = {}) {
          var n;
          this.version = "7.10.3", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
            this.prev = this.current, this.current = t;
            const {
              delta: n,
              timestamp: s
            } = i.u;
            this.lastUpdated !== s && (this.timeDelta = n, this.lastUpdated = s, o.OH.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
          }, this.scheduleVelocityCheck = () => o.OH.postRender(this.velocityCheck), this.velocityCheck = ({
            timestamp: t
          }) => {
            t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
          }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = (n = this.current, !isNaN(parseFloat(n))), this.owner = e.owner
        }
        onChange(t) {
          return this.on("change", t)
        }
        on(t, e) {
          return this.events[t] || (this.events[t] = new s.v), this.events[t].add(e)
        }
        clearListeners() {
          for (const t in this.events) this.events[t].clear()
        }
        attach(t) {
          this.passiveEffect = t
        }
        set(t, e = !0) {
          e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
        }
        setWithVelocity(t, e, n) {
          this.set(e), this.prev = t, this.timeDelta = n
        }
        get() {
          return this.current
        }
        getPrevious() {
          return this.prev
        }
        getVelocity() {
          return this.canTrackVelocity ? (0, r.f)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
        }
        start(t) {
          return this.stop(), new Promise((e => {
            this.hasAnimated = !0, this.stopAnimation = t(e), this.events.animationStart && this.events.animationStart.notify()
          })).then((() => {
            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
          }))
        }
        stop() {
          this.stopAnimation && (this.stopAnimation(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
          return !!this.stopAnimation
        }
        clearAnimation() {
          this.stopAnimation = null
        }
        destroy() {
          this.clearListeners(), this.stop()
        }
      }

      function l(t, e) {
        return new a(t, e)
      }
    },
    19550: (t, e, n) => {
      "use strict";
      n.d(e, {
        u: () => o
      });
      var i = n(46041);
      const o = {
        test: (0, n(47742).$)("#"),
        parse: function(t) {
          let e = "",
            n = "",
            i = "",
            o = "";
          return t.length > 5 ? (e = t.substring(1, 3), n = t.substring(3, 5), i = t.substring(5, 7), o = t.substring(7, 9)) : (e = t.substring(1, 2), n = t.substring(2, 3), i = t.substring(3, 4), o = t.substring(4, 5), e += e, n += n, i += i, o += o), {
            red: parseInt(e, 16),
            green: parseInt(n, 16),
            blue: parseInt(i, 16),
            alpha: o ? parseInt(o, 16) / 255 : 1
          }
        },
        transform: i.B.transform
      }
    },
    78493: (t, e, n) => {
      "use strict";
      n.d(e, {
        V: () => a
      });
      var i = n(15998),
        o = n(80047),
        s = n(26546),
        r = n(47742);
      const a = {
        test: (0, r.$)("hsl", "hue"),
        parse: (0, r.q)("hue", "saturation", "lightness"),
        transform: ({
          hue: t,
          saturation: e,
          lightness: n,
          alpha: r = 1
        }) => "hsla(" + Math.round(t) + ", " + o.KN.transform((0, s.aj)(e)) + ", " + o.KN.transform((0, s.aj)(n)) + ", " + (0, s.aj)(i.X4.transform(r)) + ")"
      }
    },
    53833: (t, e, n) => {
      "use strict";
      n.d(e, {
        y: () => a
      });
      var i = n(26546),
        o = n(19550),
        s = n(78493),
        r = n(46041);
      const a = {
        test: t => r.B.test(t) || o.u.test(t) || s.V.test(t),
        parse: t => r.B.test(t) ? r.B.parse(t) : s.V.test(t) ? s.V.parse(t) : o.u.parse(t),
        transform: t => (0, i.Kg)(t) ? t : t.hasOwnProperty("red") ? r.B.transform(t) : s.V.transform(t)
      }
    },
    46041: (t, e, n) => {
      "use strict";
      n.d(e, {
        B: () => l
      });
      var i = n(28626),
        o = n(15998),
        s = n(26546),
        r = n(47742);
      const a = {
          ...o.ai,
          transform: t => Math.round((t => (0, i.q)(0, 255, t))(t))
        },
        l = {
          test: (0, r.$)("rgb", "red"),
          parse: (0, r.q)("red", "green", "blue"),
          transform: ({
            red: t,
            green: e,
            blue: n,
            alpha: i = 1
          }) => "rgba(" + a.transform(t) + ", " + a.transform(e) + ", " + a.transform(n) + ", " + (0, s.aj)(o.X4.transform(i)) + ")"
        }
    },
    47742: (t, e, n) => {
      "use strict";
      n.d(e, {
        $: () => o,
        q: () => s
      });
      var i = n(26546);
      const o = (t, e) => n => Boolean((0, i.Kg)(n) && i.Fl.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
        s = (t, e, n) => o => {
          if (!(0, i.Kg)(o)) return o;
          const [s, r, a, l] = o.match(i.SY);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(r),
            [n]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1
          }
        }
    },
    37034: (t, e, n) => {
      "use strict";
      n.d(e, {
        p: () => l
      });
      var i = n(16244),
        o = n(26546);
      const s = new Set(["brightness", "contrast", "saturate", "opacity"]);

      function r(t) {
        const [e, n] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        const [i] = n.match(o.SY) || [];
        if (!i) return t;
        const r = n.replace(i, "");
        let a = s.has(e) ? 1 : 0;
        return i !== n && (a *= 100), e + "(" + a + r + ")"
      }
      const a = /([a-z-]*)\(.*?\)/g,
        l = {
          ...i.f,
          getAnimatableNone: t => {
            const e = t.match(a);
            return e ? e.map(r).join(" ") : t
          }
        }
    },
    16244: (t, e, n) => {
      "use strict";
      n.d(e, {
        V: () => l,
        f: () => d
      });
      var i = n(53833),
        o = n(15998),
        s = n(26546);
      const r = "${c}",
        a = "${n}";

      function l(t) {
        "number" == typeof t && (t = `${t}`);
        const e = [];
        let n = 0,
          l = 0;
        const u = t.match(s.ne);
        u && (n = u.length, t = t.replace(s.ne, r), e.push(...u.map(i.y.parse)));
        const c = t.match(s.SY);
        return c && (l = c.length, t = t.replace(s.SY, a), e.push(...c.map(o.ai.parse))), {
          values: e,
          numColors: n,
          numNumbers: l,
          tokenised: t
        }
      }

      function u(t) {
        return l(t).values
      }

      function c(t) {
        const {
          values: e,
          numColors: n,
          tokenised: o
        } = l(t), u = e.length;
        return t => {
          let e = o;
          for (let o = 0; o < u; o++) e = e.replace(o < n ? r : a, o < n ? i.y.transform(t[o]) : (0, s.aj)(t[o]));
          return e
        }
      }
      const h = t => "number" == typeof t ? 0 : t,
        d = {
          test: function(t) {
            var e, n;
            return isNaN(t) && (0, s.Kg)(t) && ((null === (e = t.match(s.SY)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (n = t.match(s.ne)) || void 0 === n ? void 0 : n.length) || 0) > 0
          },
          parse: u,
          createTransformer: c,
          getAnimatableNone: function(t) {
            const e = u(t);
            return c(t)(e.map(h))
          }
        }
    },
    15998: (t, e, n) => {
      "use strict";
      n.d(e, {
        X4: () => s,
        ai: () => o,
        hs: () => r
      });
      var i = n(28626);
      const o = {
          test: t => "number" == typeof t,
          parse: parseFloat,
          transform: t => t
        },
        s = {
          ...o,
          transform: t => (0, i.q)(0, 1, t)
        },
        r = {
          ...o,
          default: 1
        }
    },
    80047: (t, e, n) => {
      "use strict";
      n.d(e, {
        KN: () => r,
        gQ: () => c,
        px: () => a,
        uj: () => s,
        vh: () => l,
        vw: () => u
      });
      var i = n(26546);
      const o = t => ({
          test: e => (0, i.Kg)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: e => `${e}${t}`
        }),
        s = o("deg"),
        r = o("%"),
        a = o("px"),
        l = o("vh"),
        u = o("vw"),
        c = {
          ...r,
          parse: t => r.parse(t) / 100,
          transform: t => r.transform(100 * t)
        }
    },
    26546: (t, e, n) => {
      "use strict";
      n.d(e, {
        Fl: () => r,
        Kg: () => a,
        SY: () => o,
        aj: () => i,
        ne: () => s
      });
      const i = t => Math.round(1e5 * t) / 1e5,
        o = /(-)?([\d]*\.?[\d])+/g,
        s = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        r = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

      function a(t) {
        return "string" == typeof t
      }
    },
    73075: (t, e, n) => {
      "use strict";
      n.d(e, {
        k: () => o
      });
      var i = n(87346);

      function o(t) {
        return Boolean((0, i.S)(t) && t.add)
      }
    },
    87346: (t, e, n) => {
      "use strict";
      n.d(e, {
        S: () => i
      });
      const i = t => !!(null == t ? void 0 : t.getVelocity)
    },
    60740: (t, e, n) => {
      "use strict";
      n.d(e, {
        u: () => s
      });
      var i = n(3335),
        o = n(87346);

      function s(t) {
        const e = (0, o.S)(t) ? t.get() : t;
        return (0, i.B)(e) ? e.toValue() : e
      }
    }
  }
]);