! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a71d8953-d51a-4dde-a20d-97be9ce33221", e._sentryDebugIdIdentifier = "sentry-dbid-a71d8953-d51a-4dde-a20d-97be9ce33221")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [3449], {
    9862: (e, t, n) => {
      "use strict";
      e.exports = n(52522)
    },
    19264: (e, t, n) => {
      "use strict";
      n.d(t, {
        jH: () => i
      });
      var r = n(71127),
        o = (n(25854), r.createContext(void 0));

      function i(e) {
        const t = r.useContext(o);
        return e || t || "ltr"
      }
    },
    38763: (e, t, n) => {
      "use strict";
      n.d(t, {
        X3: () => r.X,
        AK: () => b,
        bZ: () => d,
        v6: () => l
      });
      var r = n(67915),
        o = n(68879);
      const i = new Map;

      function a(e, t) {
        if (e === t) return e;
        const n = i.get(e);
        if (n) return n.forEach((e => e(t))), t;
        const r = i.get(t);
        return r ? (r.forEach((t => t(e))), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function l(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const r = e[n];
          for (const e in r) {
            const n = t[e],
              i = r[e];
            "function" == typeof n && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(n, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof i ? "id" === e && n && i ? t.id = a(n, i) : t[e] = void 0 !== i ? i : n : t[e] = (0, o.A)(n, i)
          }
        }
        return t
      }
      const u = /^(on.*)$/,
        c = /^(onPress.*)$/;

      function d(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const n = {},
          r = {};
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (c.test(o) ? t ? n[o] = e[o] : r[o] = e[o] : u.test(o) ? n[o] = e[o] : r[o] = e[o]);
        return {
          events: n,
          others: r
        }
      }
      var f;

      function p(e) {
        return e
      }
      n(40323), n(5117), n(74534), n(66573), n(11666), n(96810), n(1571),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(f || (f = {})), Symbol.toStringTag;
      const {
        cbrt: h,
        sqrt: v,
        PI: g
      } = Math, m = (e, t, n, r, o) => {
        const i = t + n * e,
          a = i ** 2 + r;
        if (a > 0) {
          const e = v(a);
          return h(i + e) + h(i - e) - o
        }
        const s = h(v(i * i - a)),
          l = i ? Math.atan(v(-a) / i) : -g / 2;
        let u;
        return u = n < 0 ? (i > 0 ? 2 * g : g) - l : o < 0 ? (i > 0 ? 2 * g : -3 * g) + l : (i > 0 ? 0 : g) + l, 2 * s * Math.cos(u / 3) - o
      }, y = (e, t, n, r) => ((t * e + 3 * n) * e + r) * e;

      function b(e, t, n, r) {
        if (!(0 <= e && e <= 1 && 0 <= n && n <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && n === r) return p;
        const o = 6 * (3 * e - 3 * n + 1),
          i = 6 * (n - 2 * e),
          a = 3 * e,
          s = o * o,
          l = i * i,
          u = i / o,
          c = 3 * i * a / s - l * i / (s * o),
          d = 2 * a / o - l / s,
          f = d * d * d,
          h = 3 / o,
          v = 3 * t - 3 * r + 1,
          g = r - 2 * t,
          b = 3 * t,
          w = o ? m : p;
        return e => 0 === e || 1 === e ? e : y(w(e, c, h, f, u), v, g, b)
      }
    },
    49931: (e, t, n) => {
      "use strict";
      n.d(t, {
        ms: () => wf,
        c$: () => _f
      });
      var r = {};
      n.r(r), n.d(r, {
        CheckLG: () => xf,
        CheckMD: () => kf,
        CheckXL: () => Sf,
        DashLG: () => Of,
        DashMD: () => Cf,
        DashXL: () => Pf
      });
      var o = {};
      n.r(o), n.d(o, {
        DotLG: () => vp,
        DotMD: () => hp,
        DotXL: () => gp
      });
      var i = n(25854),
        a = n(38763),
        s = n(71127),
        l = n(21222),
        u = n(75199);
      const c = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? u.VisuallyHidden : s.Fragment;
        return (0, i.jsx)(n, {
          ...t
        })
      };

      function d(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function f(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? f(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = d(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function h(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var v, g, m = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        y = (v = {
          defaultClassName: "foundry_nk7jgu_vsn8np0",
          variantClassNames: {
            level: {
              1: "foundry_nk7jgu_tdsdcd2 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd4",
              2: "foundry_nk7jgu_tdsdcd2 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd5",
              3: "foundry_nk7jgu_tdsdcd2 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd6",
              4: "foundry_nk7jgu_tdsdcd2 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd7",
              5: "foundry_nk7jgu_tdsdcd2 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd8",
              6: "foundry_nk7jgu_tdsdcd2 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd9"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }, (g = e => {
          var t = v.defaultClassName,
            n = p(p({}, v.defaultVariants), e);
          for (var r in n) {
            var o, i = null !== (o = n[r]) && void 0 !== o ? o : v.defaultVariants[r];
            if (null != i) {
              var a = i;
              "boolean" == typeof a && (a = !0 === a ? "true" : "false");
              var s = v.variantClassNames[r][a];
              s && (t += " " + s)
            }
          }
          for (var [l, u] of v.compoundVariants) m(l, n, v.defaultVariants) && (t += " " + u);
          return t
        }).variants = () => Object.keys(v.variantClassNames), g.classNames = {
          get base() {
            return v.defaultClassName.split(" ")[0]
          },
          get variants() {
            return h(v.variantClassNames, (e => h(e, (e => e.split(" ")[0]))))
          }
        }, g);
      const b = (0, s.forwardRef)((({
        asChild: e,
        level: t,
        testId: n,
        ...r
      }, o) => {
        const s = e ? l.Slot : `h${t}`,
          u = (0, a.v6)(r, {
            className: y({
              level: t
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": n,
          ...u
        })
      }));

      function w(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function _(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function j(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = w(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function k(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var x = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        S = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = j(j({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) x(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return k(e.variantClassNames, (e => k(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_nk7jgu_12nwidl0",
          variantClassNames: {
            semantic: {
              abbr: "foundry_nk7jgu_12nwidl1",
              cite: "foundry_nk7jgu_12nwidl2",
              emphasis: "foundry_nk7jgu_12nwidl3",
              idiomatic: "foundry_nk7jgu_12nwidl4",
              mark: "foundry_nk7jgu_12nwidl5",
              "strike-through": "foundry_nk7jgu_12nwidl6",
              strong: "foundry_nk7jgu_12nwidl7",
              sub: "foundry_nk7jgu_12nwidl8",
              sup: "foundry_nk7jgu_12nwidl9",
              underline: "foundry_nk7jgu_12nwidla",
              default: "foundry_nk7jgu_12nwidlb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const C = {
        abbr: "abbr",
        cite: "cite",
        emphasis: "em",
        idiomatic: "i",
        mark: "mark",
        "strike-through": "s",
        strong: "strong",
        sub: "sub",
        sup: "sup",
        underline: "u",
        default: "span"
      };
      (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        semantic: n = "default",
        ...r
      }, o) => {
        const s = e ? l.Slot : C[n] || "span",
          u = (0, a.v6)(r, {
            className: S({
              semantic: n
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...u
        })
      }));
      var O = n(68879);

      function P(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function E(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? E(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = P(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function T(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var L = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        D = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = N(N({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) L(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return T(e.variantClassNames, (e => T(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_nk7jgu_cw8njk0",
          variantClassNames: {
            size: {
              LG: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdw",
              MD: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx",
              SM: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdy",
              XS: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdz"
            },
            appearance: {
              default: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd10",
              bold: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd11",
              hyperlink: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const M = (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, s) => {
        const u = e ? l.Slot : "p",
          c = (0, a.v6)({
            className: D({
              size: r,
              appearance: n
            })
          }, o);
        return (0, i.jsx)(u, {
          ref: s,
          "data-testid": t,
          ...c
        })
      }));
      var R = n(78618),
        z = n.t(R, 2),
        A = n(67915);

      function I(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const r = e => A.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, i] = (0, s.useState)((() => n ? r(e) : t));

        function a() {
          i(r(e))
        }
        return (0, s.useEffect)((() => {
          const t = window.matchMedia?.(e);
          return a(), t?.addListener ? t?.addListener(a) : t?.addEventListener("change", a), () => {
            t?.removeListener ? t?.removeListener(a) : t?.removeEventListener("change", a)
          }
        }), [e]), o
      }

      function V(e) {
        const t = (0, s.useRef)({
            value: e,
            prev: void 0
          }),
          n = t.current.value;
        return e !== n && (t.current = {
          value: e,
          prev: n
        }), t.current.prev
      }

      function F(...e) {
        const t = (0, s.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach((e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          }))
        }), t.current
      }
      const q = () => I("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function B(e) {
        const t = (0, s.useRef)(e);
        return (0, s.useEffect)((() => {
          t.current = e
        })), (0, s.useMemo)((() => (...e) => t.current?.(...e)), [])
      }

      function $({
        prop: e,
        defaultProp: t,
        onChange: n = () => {}
      }) {
        const [r, o] = function({
          defaultProp: e,
          onChange: t
        }) {
          const n = (0, s.useState)(e),
            [r] = n,
            o = (0, s.useRef)(r),
            i = B(t);
          return (0, s.useEffect)((() => {
            o.current !== r && (i(r), o.current = r)
          }), [r, o, i]), n
        }({
          defaultProp: t,
          onChange: n
        }), i = void 0 !== e, a = i ? e : r, l = B(n), u = (0, s.useCallback)((t => {
          if (i) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && l(n)
          } else o(t)
        }), [i, e, o, l]);
        return [a, u]
      }

      function H(e = !0) {
        const t = I("screen and (pointer: coarse) and (hover: none)");
        return !!e && t
      }
      const W = new Set(["id"]),
        G = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        U = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        K = /^(data-.*)$/;

      function X(e, t = {}) {
        let {
          labelable: n,
          isLink: r,
          propNames: o
        } = t, i = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (W.has(t) || n && G.has(t) || r && U.has(t) || (null == o ? void 0 : o.has(t)) || K.test(t)) && (i[t] = e[t]);
        return i
      }
      const Y = "undefined" != typeof document ? s.useLayoutEffect : () => {};

      function Z(e) {
        const t = (0, s.useRef)(null);
        return Y((() => {
          t.current = e
        }), [e]), (0, s.useCallback)(((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }), [])
      }

      function Q(e, t, n) {
        let r = (0, s.useRef)(t),
          o = Z((() => {
            n && n(r.current)
          }));
        (0, s.useEffect)((() => {
          var t;
          let n = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == n || n.addEventListener("reset", o), () => {
            null == n || n.removeEventListener("reset", o)
          }
        }), [e, o])
      }
      const J = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        ee = e => e && "window" in e && e.window === e ? e : J(e).defaultView || window;

      function te(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      const ne = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        re = s.createContext(ne),
        oe = s.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let ie = new WeakMap;
      const ae = "function" == typeof s.useId ? function(e) {
        let t = s.useId(),
          [n] = (0, s.useState)(ce());
        return e || `${n?"react-aria":`react-aria${ne.prefix}`}-${t}`
      } : function(e) {
        let t = (0, s.useContext)(re),
          n = function(e = !1) {
            let t = (0, s.useContext)(re),
              n = (0, s.useRef)(null);
            if (null === n.current && !e) {
              var r, o;
              let e = null === (o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (r = o.ReactCurrentOwner) || void 0 === r ? void 0 : r.current;
              if (e) {
                let n = ie.get(e);
                null == n ? ie.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== n.state && (t.current = n.id, ie.delete(e))
              }
              n.current = ++t.current
            }
            return n.current
          }(!!e),
          r = `react-aria${t.prefix}`;
        return e || `${r}-${n}`
      };

      function se() {
        return !1
      }

      function le() {
        return !0
      }

      function ue(e) {
        return () => {}
      }

      function ce() {
        return "function" == typeof s.useSyncExternalStore ? s.useSyncExternalStore(ue, se, le) : (0, s.useContext)(oe)
      }
      let de, fe = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        pe = new Map;

      function he(e) {
        let [t, n] = (0, s.useState)(e), r = (0, s.useRef)(null), o = ae(t), i = (0, s.useRef)(null);
        if (de && de.register(i, o), fe) {
          const e = pe.get(o);
          e && !e.includes(r) ? e.push(r) : pe.set(o, [r])
        }
        return Y((() => {
          let e = o;
          return () => {
            de && de.unregister(i), pe.delete(e)
          }
        }), [o]), (0, s.useEffect)((() => {
          let e = r.current;
          return e && n(e), () => {
            e && (r.current = null)
          }
        })), o
      }

      function ve(e, t) {
        if (e === t) return e;
        let n = pe.get(e);
        if (n) return n.forEach((e => e.current = t)), t;
        let r = pe.get(t);
        return r ? (r.forEach((t => t.current = e)), e) : t
      }

      function ge(e = []) {
        let t = he(),
          [n, r] = function(e) {
            let [t, n] = (0, s.useState)(e), r = (0, s.useRef)(null), o = Z((() => {
              if (!r.current) return;
              let e = r.current.next();
              e.done ? r.current = null : t === e.value ? o() : n(e.value)
            }));
            Y((() => {
              r.current && o()
            }));
            let i = Z((e => {
              r.current = e(t), o()
            }));
            return [t, i]
          }(t),
          o = (0, s.useCallback)((() => {
            r((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, r]);
        return Y(o, [t, o, ...e]), n
      }

      function me(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = te(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = ve(n, o) : t[e] = void 0 !== o ? o : n : t[e] = (0, O.A)(n, o)
          }
        }
        return t
      }

      function ye(e, t, n) {
        let [r, o] = (0, s.useState)(e || t), i = (0, s.useRef)(void 0 !== e), a = void 0 !== e;
        (0, s.useEffect)((() => {
          i.current, i.current = a
        }), [a]);
        let l = a ? e : r,
          u = (0, s.useCallback)(((e, ...t) => {
            let r = (e, ...t) => {
              n && (Object.is(l, e) || n(e, ...t)), a || (l = e)
            };
            "function" == typeof e ? o(((n, ...o) => {
              let i = e(a ? l : n, ...o);
              return r(i, ...t), a ? n : i
            })) : (a || o(e), r(e, ...t))
          }), [a, l, n]);
        return [l, u]
      }

      function be(e, t) {
        let {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        } = e;
        if (n = he(n), o && r) {
          let e = new Set([n, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return r || o || !t || (r = t), {
          id: n,
          "aria-label": r,
          "aria-labelledby": o
        }
      }

      function we(e) {
        let {
          description: t,
          errorMessage: n,
          isInvalid: r,
          validationState: o
        } = e, {
          labelProps: i,
          fieldProps: a
        } = function(e) {
          let {
            id: t,
            label: n,
            "aria-labelledby": r,
            "aria-label": o,
            labelElementType: i = "label"
          } = e;
          t = he(t);
          let a = he(),
            s = {};
          return n && (r = r ? `${a} ${r}` : a, s = {
            id: a,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: s,
            fieldProps: be({
              id: t,
              "aria-label": o,
              "aria-labelledby": r
            })
          }
        }(e), s = ge([Boolean(t), Boolean(n), r, o]), l = ge([Boolean(t), Boolean(n), r, o]);
        return a = me(a, {
          "aria-describedby": [s, l, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: i,
          fieldProps: a,
          descriptionProps: {
            id: s
          },
          errorMessageProps: {
            id: l
          }
        }
      }
      "undefined" != typeof FinalizationRegistry && (de = new FinalizationRegistry((e => {
        pe.delete(e)
      })));
      const _e = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        je = _e.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      _e.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const ke = _e.join(':not([hidden]):not([tabindex="-1"]),');

      function xe(e) {
        return e.matches(je)
      }

      function Se(e) {
        return e.matches(ke)
      }

      function Ce(e) {
        if (function() {
            if (null == Oe) {
              Oe = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return Oe = !0, !0
                  }
                })
              } catch {}
            }
            return Oe
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              n = [],
              r = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return r instanceof HTMLElement && n.push({
              element: r,
              scrollTop: r.scrollTop,
              scrollLeft: r.scrollLeft
            }), n
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: n,
                  scrollLeft: r
                }
                of e) t.scrollTop = n, t.scrollLeft = r
            }(t)
        }
      }
      let Oe = null;

      function Pe(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function Ee(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function Ne(e) {
        let t = (0, s.useRef)({
          isFocused: !1,
          observer: null
        });
        Y((() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }), []);
        let n = Z((t => {
          null == e || e(t)
        }));
        return (0, s.useCallback)((e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let r = e.target,
              o = e => {
                if (t.current.isFocused = !1, r.disabled) {
                  let t = Pe(e);
                  n(t)
                }
                t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
              };
            r.addEventListener("focusout", o, {
              once: !0
            }), t.current.observer = new MutationObserver((() => {
              if (t.current.isFocused && r.disabled) {
                var e;
                null === (e = t.current.observer) || void 0 === e || e.disconnect();
                let n = r === document.activeElement ? null : document.activeElement;
                r.dispatchEvent(new FocusEvent("blur", {
                  relatedTarget: n
                })), r.dispatchEvent(new FocusEvent("focusout", {
                  bubbles: !0,
                  relatedTarget: n
                }))
              }
            })), t.current.observer.observe(r, {
              attributes: !0,
              attributeFilter: ["disabled"]
            })
          }
        }), [n])
      }
      let Te = !1;

      function Le(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function De(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function Me(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const Re = Me((function() {
          return De(/^Mac/i)
        })),
        ze = Me((function() {
          return De(/^iPhone/i)
        })),
        Ae = Me((function() {
          return De(/^iPad/i) || Re() && navigator.maxTouchPoints > 1
        })),
        Ie = Me((function() {
          return ze() || Ae()
        })),
        Ve = (Me((function() {
          return Re() || Ie()
        })), Me((function() {
          return Le(/AppleWebKit/i) && !Fe()
        }))),
        Fe = Me((function() {
          return Le(/Chrome/i)
        })),
        qe = Me((function() {
          return Le(/Android/i)
        })),
        Be = Me((function() {
          return Le(/Firefox/i)
        }));

      function $e(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (qe() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      let He = null,
        We = new Set,
        Ge = new Map,
        Ue = !1,
        Ke = !1;

      function Xe(e, t) {
        for (let n of We) n(e, t)
      }

      function Ye(e) {
        Ue = !0,
          function(e) {
            return !(e.metaKey || !Re() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (He = "keyboard", Xe("keyboard", e))
      }

      function Ze(e) {
        He = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (Ue = !0, Xe("pointer", e))
      }

      function Qe(e) {
        $e(e) && (Ue = !0, He = "virtual")
      }

      function Je(e) {
        e.target !== window && e.target !== document && !Te && e.isTrusted && (Ue || Ke || (He = "virtual", Xe("virtual", e)), Ue = !1, Ke = !1)
      }

      function et() {
        Te || (Ue = !1, Ke = !0)
      }

      function tt(e) {
        if ("undefined" == typeof window || Ge.get(ee(e))) return;
        const t = ee(e),
          n = J(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          Ue = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", Ye, !0), n.addEventListener("keyup", Ye, !0), n.addEventListener("click", Qe, !0), t.addEventListener("focus", Je, !0), t.addEventListener("blur", et, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", Ze, !0), n.addEventListener("pointermove", Ze, !0), n.addEventListener("pointerup", Ze, !0)), t.addEventListener("beforeunload", (() => {
          nt(e)
        }), {
          once: !0
        }), Ge.set(t, {
          focus: r
        })
      }
      const nt = (e, t) => {
        const n = ee(e),
          r = J(e);
        t && r.removeEventListener("DOMContentLoaded", t), Ge.has(n) && (n.HTMLElement.prototype.focus = Ge.get(n).focus, r.removeEventListener("keydown", Ye, !0), r.removeEventListener("keyup", Ye, !0), r.removeEventListener("click", Qe, !0), n.removeEventListener("focus", Je, !0), n.removeEventListener("blur", et, !1), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", Ze, !0), r.removeEventListener("pointermove", Ze, !0), r.removeEventListener("pointerup", Ze, !0)), Ge.delete(n))
      };
      "undefined" != typeof document && function(e) {
        const t = J(e);
        let n;
        "loading" !== t.readyState ? tt(e) : (n = () => {
          tt(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function rt(e, t) {
        return !(!t || !e) && e.contains(t)
      }
      const ot = (e = document) => e.activeElement;

      function it(e) {
        return e.target
      }
      let at = new Map,
        st = new Set;

      function lt() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = at.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), at.delete(n.target)), 0 === at.size)) {
            for (let e of st) e();
            st.clear()
          }
        };
        document.body.addEventListener("transitionrun", (n => {
          if (!e(n) || !n.target) return;
          let r = at.get(n.target);
          r || (r = new Set, at.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function ut(e) {
        requestAnimationFrame((() => {
          0 === at.size ? e() : st.add(e)
        }))
      }

      function ct(e) {
        if (!e) return;
        let t = !0;
        return n => {
          let r = {
            ...n,
            preventDefault() {
              n.preventDefault()
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
              t = !0
            },
            continuePropagation() {
              t = !1
            },
            isPropagationStopped: () => t
          };
          e(r), t && n.stopPropagation()
        }
      }

      function dt(e, t) {
        Y((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? lt() : document.addEventListener("DOMContentLoaded", lt));
      let ft = s.createContext(null);

      function pt(e, t) {
        let {
          focusProps: n
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: n,
            onBlur: r,
            onFocusChange: o
          } = e;
          const i = (0, s.useCallback)((e => {
              if (e.target === e.currentTarget) return r && r(e), o && o(!1), !0
            }), [r, o]),
            a = Ne(i),
            l = (0, s.useCallback)((e => {
              const t = J(e.target),
                r = t ? ot(t) : ot();
              e.target === e.currentTarget && r === it(e.nativeEvent) && (n && n(e), o && o(!0), a(e))
            }), [o, n, a]);
          return {
            focusProps: {
              onFocus: !t && (n || o || r) ? l : void 0,
              onBlur: t || !r && !o ? void 0 : i
            }
          }
        }(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: ct(e.onKeyDown),
              onKeyUp: ct(e.onKeyUp)
            }
          }
        }(e), o = me(n, r), i = function(e) {
          let t = (0, s.useContext)(ft) || {};
          dt(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), a = e.isDisabled ? {} : i, l = (0, s.useRef)(e.autoFocus);
        (0, s.useEffect)((() => {
          l.current && t.current && function(e) {
            const t = J(e),
              n = ot(t);
            if ("virtual" === He) {
              let r = n;
              ut((() => {
                ot(t) === r && e.isConnected && Ce(e)
              }))
            } else Ce(e)
          }(t.current), l.current = !1
        }), [t]);
        let u = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (u = void 0), {
          focusableProps: me({
            ...o,
            tabIndex: u
          }, a)
        }
      }

      function ht(e, t, n) {
        let {
          validationBehavior: r,
          focus: o
        } = e;
        Y((() => {
          if ("native" === r && (null == n ? void 0 : n.current) && !n.current.disabled) {
            let r = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            n.current.setCustomValidity(r), n.current.hasAttribute("title") || (n.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = n.current).validity.valid,
              validationDetails: vt(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        }));
        let i = Z((() => {
            t.resetValidation()
          })),
          a = Z((e => {
            var r;
            t.displayValidation.isInvalid || t.commitValidation();
            let i = null == n || null === (r = n.current) || void 0 === r ? void 0 : r.form;
            var a;
            !e.defaultPrevented && n && i && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let n = e.elements[t];
                if (!n.validity.valid) return n
              }
              return null
            }(i) === n.current && (o ? o() : null === (a = n.current) || void 0 === a || a.focus(), He = "keyboard", Xe("keyboard", null)), e.preventDefault()
          })),
          l = Z((() => {
            t.commitValidation()
          }));
        (0, s.useEffect)((() => {
          let e = null == n ? void 0 : n.current;
          if (!e) return;
          let t = e.form;
          return e.addEventListener("invalid", a), e.addEventListener("change", l), null == t || t.addEventListener("reset", i), () => {
            e.removeEventListener("invalid", a), e.removeEventListener("change", l), null == t || t.removeEventListener("reset", i)
          }
        }), [n, a, l, i, r])
      }

      function vt(e) {
        let t = e.validity;
        return {
          badInput: t.badInput,
          customError: t.customError,
          patternMismatch: t.patternMismatch,
          rangeOverflow: t.rangeOverflow,
          rangeUnderflow: t.rangeUnderflow,
          stepMismatch: t.stepMismatch,
          tooLong: t.tooLong,
          tooShort: t.tooShort,
          typeMismatch: t.typeMismatch,
          valueMissing: t.valueMissing,
          valid: t.valid
        }
      }
      const gt = {
          badInput: !1,
          customError: !1,
          patternMismatch: !1,
          rangeOverflow: !1,
          rangeUnderflow: !1,
          stepMismatch: !1,
          tooLong: !1,
          tooShort: !1,
          typeMismatch: !1,
          valueMissing: !1,
          valid: !0
        },
        mt = {
          ...gt,
          customError: !0,
          valid: !1
        },
        yt = {
          isInvalid: !1,
          validationDetails: gt,
          validationErrors: []
        },
        bt = (0, s.createContext)({}),
        wt = "__formValidationState" + Date.now();

      function _t(e) {
        if (e[wt]) {
          let {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          } = e[wt];
          return {
            realtimeValidation: t,
            displayValidation: n,
            updateValidation: r,
            resetValidation: o,
            commitValidation: i
          }
        }
        return function(e) {
          let {
            isInvalid: t,
            validationState: n,
            name: r,
            value: o,
            builtinValidation: i,
            validate: a,
            validationBehavior: l = "aria"
          } = e;
          n && (t || (t = "invalid" === n));
          let u = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: mt
            } : null,
            c = (0, s.useMemo)((() => {
              if (!a || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let n = e(t);
                  if (n && "boolean" != typeof n) return jt(n)
                }
                return []
              }(a, o);
              return kt(e)
            }), [a, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = void 0);
          let d = (0, s.useContext)(bt),
            f = (0, s.useMemo)((() => r ? Array.isArray(r) ? r.flatMap((e => jt(d[e]))) : jt(d[r]) : []), [d, r]),
            [p, h] = (0, s.useState)(d),
            [v, g] = (0, s.useState)(!1);
          d !== p && (h(d), g(!1));
          let m = (0, s.useMemo)((() => kt(v ? [] : f)), [v, f]),
            y = (0, s.useRef)(yt),
            [b, w] = (0, s.useState)(yt),
            _ = (0, s.useRef)(yt),
            [j, k] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            if (!j) return;
            k(!1);
            let e = c || i || y.current;
            xt(e, _.current) || (_.current = e, w(e))
          })), {
            realtimeValidation: u || m || c || i || yt,
            displayValidation: "native" === l ? u || m || b : u || m || c || i || b,
            updateValidation(e) {
              "aria" !== l || xt(b, e) ? y.current = e : w(e)
            },
            resetValidation() {
              let e = yt;
              xt(e, _.current) || (_.current = e, w(e)), "native" === l && k(!1), g(!0)
            },
            commitValidation() {
              "native" === l && k(!0), g(!0)
            }
          }
        }(e)
      }

      function jt(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function kt(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: mt
        } : null
      }

      function xt(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, n) => e === t.validationErrors[n])) && Object.entries(e.validationDetails).every((([e, n]) => t.validationDetails[e] === n))
      }

      function St(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Ct(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Ot(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Ct(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = St(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ct(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Pt(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Et = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Nt = "foundry_nk7jgu_vq8c3j8",
        Tt = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Ot(Ot({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Et(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Pt(e.variantClassNames, (e => Pt(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_nk7jgu_vq8c3j9 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd10",
          variantClassNames: {
            isInvalid: {
              false: "foundry_nk7jgu_vq8c3ja",
              true: "foundry_nk7jgu_vq8c3jb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, s.forwardRef)((({
        asChild: e,
        label: t,
        isRequired: n,
        hint: r,
        children: o,
        description: u,
        testId: d,
        className: f,
        rows: p = 5,
        hideLabel: h,
        hideDescription: v,
        hideRequiredAsterisk: g,
        validate: m,
        errorMessage: y,
        ...b
      }, w) => {
        const _ = (0, s.useRef)(null),
          j = F(_, w),
          {
            inputProps: k,
            labelProps: x,
            descriptionProps: S,
            isInvalid: C,
            errorMessageProps: P,
            validationErrors: E
          } = function(e, t) {
            let {
              inputElementType: n = "input",
              isDisabled: r = !1,
              isRequired: o = !1,
              isReadOnly: i = !1,
              type: a = "text",
              validationBehavior: l = "aria"
            } = e, [u, c] = ye(e.value, e.defaultValue || "", e.onChange), {
              focusableProps: d
            } = pt(e, t), f = _t({
              ...e,
              value: u
            }), {
              isInvalid: p,
              validationErrors: h,
              validationDetails: v
            } = f.displayValidation, {
              labelProps: g,
              fieldProps: m,
              descriptionProps: y,
              errorMessageProps: b
            } = we({
              ...e,
              isInvalid: p,
              errorMessage: e.errorMessage || h
            }), w = X(e, {
              labelable: !0
            });
            const _ = {
              type: a,
              pattern: e.pattern
            };
            return Q(t, u, c), ht(e, f, t), (0, s.useEffect)((() => {
              if (t.current instanceof ee(t.current).HTMLTextAreaElement) {
                let e = t.current;
                Object.defineProperty(e, "defaultValue", {
                  get: () => e.value,
                  set: () => {},
                  configurable: !0
                })
              }
            }), [t]), {
              labelProps: g,
              inputProps: me(w, "input" === n ? _ : void 0, {
                disabled: r,
                readOnly: i,
                required: o && "native" === l,
                "aria-required": o && "aria" === l || void 0,
                "aria-invalid": p || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-activedescendant": e["aria-activedescendant"],
                "aria-autocomplete": e["aria-autocomplete"],
                "aria-haspopup": e["aria-haspopup"],
                value: u,
                onChange: e => c(e.target.value),
                autoComplete: e.autoComplete,
                autoCapitalize: e.autoCapitalize,
                maxLength: e.maxLength,
                minLength: e.minLength,
                name: e.name,
                placeholder: e.placeholder,
                inputMode: e.inputMode,
                onCopy: e.onCopy,
                onCut: e.onCut,
                onPaste: e.onPaste,
                onCompositionEnd: e.onCompositionEnd,
                onCompositionStart: e.onCompositionStart,
                onCompositionUpdate: e.onCompositionUpdate,
                onSelect: e.onSelect,
                onBeforeInput: e.onBeforeInput,
                onInput: e.onInput,
                ...d,
                ...m
              }),
              descriptionProps: y,
              errorMessageProps: b,
              isInvalid: p,
              validationErrors: h,
              validationDetails: v
            }
          }({
            ...b,
            label: t,
            description: u,
            isRequired: n,
            inputElementType: "textarea",
            validate: e => m?.(e) ?? (!y || [y])
          }, _),
          N = (0, a.v6)({
            ...k,
            className: f
          }, {
            className: Tt({
              isInvalid: C
            }),
            "aria-errormessage": P?.id
          }),
          T = e ? l.Slot : "textarea";
        return (0, i.jsxs)("div", {
          className: "foundry_nk7jgu_vq8c3j0",
          children: [(t || r) && (0, i.jsxs)("div", {
            className: "foundry_nk7jgu_vq8c3j1",
            children: [(0, i.jsx)(c, {
              enabled: !!h,
              children: (0, i.jsx)(M, {
                size: "SM",
                className: (0, O.$)("foundry_nk7jgu_vq8c3j2", k.disabled && Nt),
                asChild: !0,
                children: (0, i.jsxs)("label", {
                  ...x,
                  children: [t, n && !g && (0, i.jsx)("span", {
                    className: "foundry_nk7jgu_vq8c3j7",
                    children: "*"
                  })]
                })
              })
            }), r && (0, i.jsx)(M, {
              size: "XS",
              className: "foundry_nk7jgu_vq8c3j3",
              children: r
            })]
          }), (0, i.jsx)(T, {
            rows: p,
            ref: j,
            "data-testid": d,
            ...N,
            children: o
          }), u && (0, i.jsx)(c, {
            enabled: E.length > 0 || !!v,
            children: (0, i.jsx)(M, {
              size: "SM",
              ...S,
              className: (0, O.$)("foundry_nk7jgu_vq8c3j4", k.disabled && Nt),
              children: u
            })
          }), E.length > 0 && (0, i.jsxs)(M, {
            size: "SM",
            appearance: "bold",
            ...P,
            className: "foundry_nk7jgu_vq8c3j5",
            children: [(0, i.jsx)(R.X, {
              size: "MD",
              label: "",
              className: "foundry_nk7jgu_vq8c3j6"
            }), E.join(". ")]
          })]
        })
      }));
      let Lt = "default",
        Dt = "",
        Mt = new WeakMap;

      function Rt(e) {
        if (Ie()) {
          if ("disabled" !== Lt) return;
          Lt = "restoring", setTimeout((() => {
            ut((() => {
              if ("restoring" === Lt) {
                const t = J(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = Dt || ""), Dt = "", Lt = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Mt.has(e)) {
          let t = Mt.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Mt.delete(e)
        }
      }
      const zt = s.createContext({
        register: () => {}
      });

      function At(e, t, n) {
        if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
        return t.get(e)
      }

      function It(e, t, n) {
        return function(e, t, n) {
          if (t.set) t.set.call(e, n);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = n
          }
        }(e, At(e, t, "set"), n), n
      }

      function Vt() {
        let e = (0, s.useRef)(new Map),
          t = (0, s.useCallback)(((t, n, r, o) => {
            let i = (null == o ? void 0 : o.once) ? (...t) => {
              e.current.delete(r), r(...t)
            } : r;
            e.current.set(r, {
              type: n,
              eventTarget: t,
              fn: i,
              options: o
            }), t.addEventListener(n, i, o)
          }), []),
          n = (0, s.useCallback)(((t, n, r, o) => {
            var i;
            let a = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
            t.removeEventListener(n, a, o), e.current.delete(r)
          }), []),
          r = (0, s.useCallback)((() => {
            e.current.forEach(((e, t) => {
              n(e.eventTarget, e.type, t, e.options)
            }))
          }), [n]);
        return (0, s.useEffect)((() => r), [r]), {
          addGlobalListener: t,
          removeGlobalListener: n,
          removeAllGlobalListeners: r
        }
      }
      zt.displayName = "PressResponderContext";
      const Ft = (0, s.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let n = document.createElement("a");
              n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
            }
          }(e, (e => Bt(e, t)))
        },
        useHref: e => e
      });

      function qt() {
        return (0, s.useContext)(Ft)
      }

      function Bt(e, t, n = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        Be() && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (Re() ? i = !0 : a = !0);
        let u = Ve() && Re() && !Ae() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        }) : new MouseEvent("click", {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l,
          bubbles: !0,
          cancelable: !0
        });
        Bt.isOpening = n, Ce(e), e.dispatchEvent(u), Bt.isOpening = !1
      }

      function $t(e) {
        var t;
        const n = qt().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? n : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }
      Bt.isOpening = !1;
      var Ht = n(18429),
        Wt = new WeakMap;
      class Gt {
        continuePropagation() {
          It(this, Wt, !1)
        }
        get shouldStopPropagation() {
          return function(e, t) {
            return t.get ? t.get.call(e) : t.value
          }(this, At(this, Wt, "get"))
        }
        constructor(e, t, n, r) {
          var o, i, a, s;
          s = {
              writable: !0,
              value: void 0
            },
            function(e, t) {
              if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }(i = this, a = Wt), a.set(i, s), It(this, Wt, !0);
          let l = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const u = null == l ? void 0 : l.getBoundingClientRect();
          let c, d, f = 0,
            p = null;
          null != n.clientX && null != n.clientY && (d = n.clientX, p = n.clientY), u && (null != d && null != p ? (c = d - u.left, f = p - u.top) : (c = u.width / 2, f = u.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = c, this.y = f
        }
      }
      const Ut = Symbol("linkClicked");

      function Kt(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: r,
          onPressEnd: o,
          onPressUp: i,
          onClick: a,
          isDisabled: l,
          isPressed: u,
          preventFocusOnPress: c,
          shouldCancelOnPointerExit: d,
          allowTextSelectionOnPress: f,
          ref: p,
          ...h
        } = function(e) {
          let t = (0, s.useContext)(zt);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = me(r, e), n()
          }
          return dt(t, e.ref), e
        }(e), [v, g] = (0, s.useState)(!1), m = (0, s.useRef)({
          isPressed: !1,
          ignoreEmulatedMouseEvents: !1,
          didFirePressStart: !1,
          isTriggeringEvent: !1,
          activePointerId: null,
          target: null,
          isOverTarget: !1,
          pointerType: null,
          disposables: []
        }), {
          addGlobalListener: y,
          removeAllGlobalListeners: b
        } = Vt(), w = Z(((e, t) => {
          let o = m.current;
          if (l || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let n = new Gt("pressstart", t, e);
            r(n), i = n.shouldStopPropagation
          }
          return n && n(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, g(!0), i
        })), _ = Z(((e, r, i = !0) => {
          let a = m.current;
          if (!a.didFirePressStart) return !1;
          a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let s = !0;
          if (o) {
            let t = new Gt("pressend", r, e);
            o(t), s = t.shouldStopPropagation
          }
          if (n && n(!1), g(!1), t && i && !l) {
            let n = new Gt("press", r, e);
            t(n), s && (s = n.shouldStopPropagation)
          }
          return a.isTriggeringEvent = !1, s
        })), j = Z(((e, t) => {
          let n = m.current;
          if (l) return !1;
          if (i) {
            n.isTriggeringEvent = !0;
            let r = new Gt("pressup", t, e);
            return i(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        })), k = Z((e => {
          let t = m.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && _(Zt(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, b(), f || Rt(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        })), x = Z((e => {
          d && k(e)
        })), S = Z((e => {
          null == a || a(e)
        })), C = Z(((e, t) => {
          if (a) {
            let n = new MouseEvent("click", e);
            Ee(n, t), a(Pe(n))
          }
        })), O = (0, s.useMemo)((() => {
          let e = m.current,
            t = {
              onKeyDown(t) {
                if (Yt(t.nativeEvent, t.currentTarget) && rt(t.currentTarget, it(t.nativeEvent))) {
                  var r;
                  Qt(it(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = w(t, "keyboard");
                    let r = t.currentTarget,
                      i = t => {
                        Yt(t, r) && !t.repeat && rt(r, it(t)) && e.target && j(Zt(e.target, t), "keyboard")
                      };
                    y(J(t.currentTarget), "keyup", te(i, n), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && Re() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || rt(t.currentTarget, it(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !Bt.isOpening) {
                  let n = !0;
                  if (l && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !$e(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual";
                      n = _(Zt(t.currentTarget, t), r, !0), e.isOverTarget = !1, S(t), k(t)
                    }
                  } else {
                    let e = w(t, "virtual"),
                      r = j(t, "virtual"),
                      o = _(t, "virtual");
                    S(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            n = t => {
              var n;
              if (e.isPressed && e.target && Yt(t, e.target)) {
                var r;
                Qt(it(t), t.key) && t.preventDefault();
                let n = it(t),
                  o = rt(e.target, it(t));
                _(Zt(e.target, t), "keyboard", o), o && C(t, e.target), b(), "Enter" !== t.key && Xt(e.target) && rt(e.target, n) && !t[Ut] && (t[Ut] = !0, Bt(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
              } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !rt(t.currentTarget, it(t.nativeEvent))) return;
              if (o = t.nativeEvent, !qe() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, f || function(e) {
                  if (Ie()) {
                    if ("default" === Lt) {
                      const t = J(e);
                      Dt = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    Lt = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    Mt.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = w(t, e.pointerType);
                let o = it(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(J(t.currentTarget), "pointerup", n, !1), y(J(t.currentTarget), "pointercancel", r, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (rt(t.currentTarget, it(t.nativeEvent)) && 0 === t.button) {
                if (c) {
                  let n = function(e) {
                    for (; e && !xe(e);) e = e.parentElement;
                    let t = ee(e),
                      n = t.document.activeElement;
                    if (!n || n === e) return;
                    Te = !0;
                    let r = !1,
                      o = e => {
                        (e.target === n || r) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === n || r) && (t.stopImmediatePropagation(), e || r || (r = !0, Ce(n), l()))
                      },
                      a = t => {
                        (t.target === e || r) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || r) && (t.stopImmediatePropagation(), r || (r = !0, Ce(n), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", a, !0);
                    let l = () => {
                        cancelAnimationFrame(u), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", a, !0), Te = !1, r = !1
                      },
                      u = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  n && e.disposables.push(n)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              rt(t.currentTarget, it(t.nativeEvent)) && "virtual" !== e.pointerType && 0 === t.button && j(t, e.pointerType || t.pointerType)
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, w(Zt(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, _(Zt(e.target, t), e.pointerType, !1), x(t))
            };
            let n = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (rt(e.target, it(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout((() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? k(t) : (Ce(e.target), e.target.click()))
                      }), 80);
                    y(t.currentTarget, "click", (() => n = !0), !0), e.disposables.push((() => clearTimeout(r)))
                  } else k(t);
                  e.isOverTarget = !1
                }
              },
              r = e => {
                k(e)
              };
            t.onDragStart = e => {
              rt(e.currentTarget, it(e.nativeEvent)) && k(e)
            }
          }
          return t
        }), [y, l, c, b, f, k, x, _, w, j, S, C]);
        return (0, s.useEffect)((() => {
          let e = null == p ? void 0 : p.current;
          e && e instanceof ee(e).Element && "auto" === ee(e).getComputedStyle(e).touchAction && (e.style.touchAction = "pan-x pan-y pinch-zoom")
        }), [p]), (0, s.useEffect)((() => {
          let e = m.current;
          return () => {
            var t;
            f || Rt(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }), [f]), {
          isPressed: u || v,
          pressProps: me(h, O)
        }
      }

      function Xt(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Yt(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof ee(o).HTMLInputElement && !en(o, n) || o instanceof ee(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && Xt(o)) && "Enter" !== n)
      }

      function Zt(e, t) {
        let n = t.clientX,
          r = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: n,
          clientY: r
        }
      }

      function Qt(e, t) {
        return e instanceof HTMLInputElement ? !en(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : Xt(e)))
        }(e)
      }
      const Jt = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function en(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Jt.has(e.type)
      }

      function tn(e, t) {
        let n, {
          elementType: r = "button",
          isDisabled: o,
          onPress: i,
          onPressStart: a,
          onPressEnd: s,
          onPressUp: l,
          onPressChange: u,
          preventFocusOnPress: c,
          allowFocusWhenDisabled: d,
          onClick: f,
          href: p,
          target: h,
          rel: v,
          type: g = "button"
        } = e;
        n = "button" === r ? {
          type: g,
          disabled: o
        } : {
          role: "button",
          href: "a" !== r || o ? void 0 : p,
          target: "a" === r ? h : void 0,
          type: "input" === r ? g : void 0,
          disabled: "input" === r ? o : void 0,
          "aria-disabled": o && "input" !== r ? o : void 0,
          rel: "a" === r ? v : void 0
        };
        let {
          pressProps: m,
          isPressed: y
        } = Kt({
          onPressStart: a,
          onPressEnd: s,
          onPressChange: u,
          onPress: i,
          onPressUp: l,
          onClick: f,
          isDisabled: o,
          preventFocusOnPress: c,
          ref: t
        }), {
          focusableProps: b
        } = pt(e, t);
        d && (b.tabIndex = o ? -1 : b.tabIndex);
        let w = me(b, m, X(e, {
          labelable: !0
        }));
        return {
          isPressed: y,
          buttonProps: me(n, w, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"]
          })
        }
      }
      var nn = {};

      function rn(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      }

      function on(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          r = {};
        for (var o in e) {
          var i = e[o],
            a = [...n, o];
          "string" == typeof i || "number" == typeof i || null == i ? r[o] = t(i, a) : "object" != typeof i || Array.isArray(i) ? console.warn('Skipping invalid key "'.concat(a.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(i) ? "Array" : typeof i, '"')) : r[o] = on(i, t, a)
        }
        return r
      }
      var an, sn, ln = n(79895),
        un = n.n(ln),
        cn = class {
          constructor(e) {
            const {
              failure: t,
              gotoFn: n,
              output: r
            } = this._buildTables(e);
            this.gotoFn = n, this.output = r, this.failure = t
          }
          _buildTables(e) {
            const t = {
                0: {}
              },
              n = {};
            let r = 0;
            for (const o of e) {
              let e = 0;
              for (const i of o) t[e] && i in t[e] ? e = t[e][i] : (r++, t[e][i] = r, t[r] = {}, e = r, n[r] = []);
              n[e].push(o)
            }
            const o = {},
              i = [];
            for (const e in t[0]) {
              const n = t[0][e];
              o[n] = 0, i.push(n)
            }
            for (; i.length > 0;) {
              const e = i.shift();
              if (void 0 !== e)
                for (const r in t[e]) {
                  const a = t[e][r];
                  i.push(a);
                  let s = o[e];
                  for (; s > 0 && !(r in t[s]);) s = o[s];
                  if (r in t[s]) {
                    const e = t[s][r];
                    o[a] = e, n[a] = [...n[a], ...n[e]]
                  } else o[a] = 0
                }
            }
            return {
              gotoFn: t,
              output: n,
              failure: o
            }
          }
          search(e) {
            let t = 0;
            const n = [];
            for (let r = 0; r < e.length; r++) {
              const o = e[r];
              for (; t > 0 && !(o in this.gotoFn[t]);) t = this.failure[t];
              if (o in this.gotoFn[t] && (t = this.gotoFn[t][o], this.output[t].length > 0)) {
                const e = this.output[t];
                n.push([r, e])
              }
            }
            return n
          }
          match(e) {
            let t = 0;
            for (let n = 0; n < e.length; n++) {
              const r = e[n];
              for (; t > 0 && !(r in this.gotoFn[t]);) t = this.failure[t];
              if (r in this.gotoFn[t] && (t = this.gotoFn[t][r], this.output[t].length > 0)) return !0
            }
            return !1
          }
        },
        dn = [{
          appendCss: () => {},
          registerClassName: () => {},
          onEndFileScope: () => {},
          registerComposition: () => {},
          markCompositionUsed: () => {},
          getIdentOption: () => "short"
        }],
        fn = !1;

      function pn(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }! function(e) {
        e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"
      }(an || (an = {})),
      function(e) {
        e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"
      }(sn || (sn = {}));
      const hn = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        vn = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        gn = new Map([
          [126, sn.Element],
          [94, sn.Start],
          [36, sn.End],
          [42, sn.Any],
          [33, sn.Not],
          [124, sn.Hyphen]
        ]),
        mn = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]),
        yn = new Set(["contains", "icontains"]);

      function bn(e, t, n) {
        const r = parseInt(t, 16) - 65536;
        return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
      }

      function wn(e) {
        return e.replace(vn, bn)
      }

      function _n(e) {
        return 39 === e || 34 === e
      }

      function jn(e) {
        return 32 === e || 9 === e || 10 === e || 12 === e || 13 === e
      }

      function kn(e) {
        const t = [],
          n = xn(t, `${e}`, 0);
        if (n < e.length) throw new Error(`Unmatched selector: ${e.slice(n)}`);
        return t
      }

      function xn(e, t, n) {
        let r = [];

        function o(e) {
          const r = t.slice(n + e).match(hn);
          if (!r) throw new Error(`Expected name, found ${t.slice(n)}`);
          const [o] = r;
          return n += e + o.length, wn(o)
        }

        function i(e) {
          for (n += e; n < t.length && jn(t.charCodeAt(n));) n++
        }

        function a() {
          const e = n += 1;
          let r = 1;
          for (; r > 0 && n < t.length; n++) 40 !== t.charCodeAt(n) || s(n) ? 41 !== t.charCodeAt(n) || s(n) || r-- : r++;
          if (r) throw new Error("Parenthesis not matched");
          return wn(t.slice(e, n - 1))
        }

        function s(e) {
          let n = 0;
          for (; 92 === t.charCodeAt(--e);) n++;
          return !(1 & ~n)
        }

        function l() {
          if (r.length > 0 && function(e) {
              switch (e.type) {
                case an.Adjacent:
                case an.Child:
                case an.Descendant:
                case an.Parent:
                case an.Sibling:
                case an.ColumnCombinator:
                  return !0;
                default:
                  return !1
              }
            }(r[r.length - 1])) throw new Error("Did not expect successive traversals.")
        }

        function u(e) {
          r.length > 0 && r[r.length - 1].type === an.Descendant ? r[r.length - 1].type = e : (l(), r.push({
            type: e
          }))
        }

        function c(e, t) {
          r.push({
            type: an.Attribute,
            name: e,
            action: t,
            value: o(1),
            namespace: null,
            ignoreCase: "quirks"
          })
        }

        function d() {
          if (r.length && r[r.length - 1].type === an.Descendant && r.pop(), 0 === r.length) throw new Error("Empty sub-selector");
          e.push(r)
        }
        if (i(0), t.length === n) return n;
        e: for (; n < t.length;) {
          const e = t.charCodeAt(n);
          switch (e) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13:
              0 !== r.length && r[0].type === an.Descendant || (l(), r.push({
                type: an.Descendant
              })), i(1);
              break;
            case 62:
              u(an.Child), i(1);
              break;
            case 60:
              u(an.Parent), i(1);
              break;
            case 126:
              u(an.Sibling), i(1);
              break;
            case 43:
              u(an.Adjacent), i(1);
              break;
            case 46:
              c("class", sn.Element);
              break;
            case 35:
              c("id", sn.Equals);
              break;
            case 91: {
              let e;
              i(1);
              let a = null;
              124 === t.charCodeAt(n) ? e = o(1) : t.startsWith("*|", n) ? (a = "*", e = o(2)) : (e = o(0), 124 === t.charCodeAt(n) && 61 !== t.charCodeAt(n + 1) && (a = e, e = o(1))), i(0);
              let l = sn.Exists;
              const u = gn.get(t.charCodeAt(n));
              if (u) {
                if (l = u, 61 !== t.charCodeAt(n + 1)) throw new Error("Expected `=`");
                i(2)
              } else 61 === t.charCodeAt(n) && (l = sn.Equals, i(1));
              let c = "",
                d = null;
              if ("exists" !== l) {
                if (_n(t.charCodeAt(n))) {
                  const e = t.charCodeAt(n);
                  let r = n + 1;
                  for (; r < t.length && (t.charCodeAt(r) !== e || s(r));) r += 1;
                  if (t.charCodeAt(r) !== e) throw new Error("Attribute value didn't end");
                  c = wn(t.slice(n + 1, r)), n = r + 1
                } else {
                  const e = n;
                  for (; n < t.length && (!jn(t.charCodeAt(n)) && 93 !== t.charCodeAt(n) || s(n));) n += 1;
                  c = wn(t.slice(e, n))
                }
                i(0);
                const e = 32 | t.charCodeAt(n);
                115 === e ? (d = !1, i(1)) : 105 === e && (d = !0, i(1))
              }
              if (93 !== t.charCodeAt(n)) throw new Error("Attribute selector didn't terminate");
              n += 1;
              const f = {
                type: an.Attribute,
                name: e,
                action: l,
                value: c,
                namespace: a,
                ignoreCase: d
              };
              r.push(f);
              break
            }
            case 58: {
              if (58 === t.charCodeAt(n + 1)) {
                r.push({
                  type: an.PseudoElement,
                  name: o(2).toLowerCase(),
                  data: 40 === t.charCodeAt(n) ? a() : null
                });
                continue
              }
              const e = o(1).toLowerCase();
              let i = null;
              if (40 === t.charCodeAt(n))
                if (mn.has(e)) {
                  if (_n(t.charCodeAt(n + 1))) throw new Error(`Pseudo-selector ${e} cannot be quoted`);
                  if (i = [], n = xn(i, t, n + 1), 41 !== t.charCodeAt(n)) throw new Error(`Missing closing parenthesis in :${e} (${t})`);
                  n += 1
                } else {
                  if (i = a(), yn.has(e)) {
                    const e = i.charCodeAt(0);
                    e === i.charCodeAt(i.length - 1) && _n(e) && (i = i.slice(1, -1))
                  }
                  i = wn(i)
                } r.push({
                type: an.Pseudo,
                name: e,
                data: i
              });
              break
            }
            case 44:
              d(), r = [], i(1);
              break;
            default: {
              if (t.startsWith("/*", n)) {
                const e = t.indexOf("*/", n + 2);
                if (e < 0) throw new Error("Comment was not terminated");
                n = e + 2, 0 === r.length && i(0);
                break
              }
              let a, s = null;
              if (42 === e) n += 1, a = "*";
              else if (124 === e) {
                if (a = "", 124 === t.charCodeAt(n + 1)) {
                  u(an.ColumnCombinator), i(2);
                  break
                }
              } else {
                if (!hn.test(t.slice(n))) break e;
                a = o(0)
              }
              124 === t.charCodeAt(n) && 124 !== t.charCodeAt(n + 1) && (s = a, 42 === t.charCodeAt(n + 1) ? (a = "*", n += 2) : a = o(1)), r.push("*" === a ? {
                type: an.Universal,
                namespace: s
              } : {
                type: an.Tag,
                name: a,
                namespace: s
              })
            }
          }
        }
        return d(), n
      }

      function Sn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Cn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Sn(Object(n), !0).forEach((function(t) {
            On(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sn(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function On(e, t, n) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : String(t)
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }
      const Pn = function e(t) {
          return n.withOptions = n => e(Cn(Cn({}, t), n)), n;

          function n(e, ...n) {
            const r = "string" == typeof e ? [e] : e.raw,
              {
                escapeSpecialCharacters: o = Array.isArray(e)
              } = t;
            let i = "";
            for (let e = 0; e < r.length; e++) {
              let t = r[e];
              o && (t = t.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), i += t, e < n.length && (i += n[e])
            }
            const a = i.split("\n");
            let s = null;
            for (const e of a) {
              const t = e.match(/^(\s+)\S+/);
              if (t) {
                const e = t[1].length;
                s = s ? Math.min(s, e) : e
              }
            }
            if (null !== s) {
              const e = s;
              i = a.map((t => " " === t[0] || "\t" === t[0] ? t.slice(e) : t)).join("\n")
            }
            return i = i.trim(), o && (i = i.replace(/\\n/g, "\n")), i
          }
        }({}),
        En = Pn;
      var Nn = function() {
        return Nn = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, Nn.apply(this, arguments)
      };

      function Tn(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }

      function Ln(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, i = n.call(e),
          a = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(r = i.next()).done;) a.push(r.value)
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
        return a
      }
      var Dn, Mn = /(\u000D|\u000C|\u000D\u000A)/g,
        Rn = /[\u0000\uD800-\uDFFF]/g,
        zn = /(\/\*)[\s\S]*?(\*\/)/g,
        An = function(e, t) {
          if (e.length <= t + 1) return null;
          for (var n = e.charCodeAt(t), r = [], o = t + 1; o < e.length; o += 1) {
            var i = e.charCodeAt(o);
            if (i === n) return [o, String.fromCharCode.apply(null, r)];
            if (92 === i) {
              var a = Vn(e, o);
              if (null === a) return null;
              var s = Ln(a, 2),
                l = s[0],
                u = s[1];
              r.push(u), o = l
            } else {
              if (10 === i) return null;
              r.push(i)
            }
          }
          return null
        },
        In = function(e, t) {
          if (e.length <= t) return !1;
          var n, r = e.charCodeAt(t);
          return 45 === r ? !(e.length <= t + 1) && (45 === (n = e.charCodeAt(t + 1)) || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || 92 === n && !(e.length <= t + 2) && 10 !== e.charCodeAt(t + 2)) : 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || 92 === r && !(e.length <= t + 1) && 10 !== (n = e.charCodeAt(t + 1))
        },
        Vn = function(e, t) {
          if (e.length <= t + 1) return null;
          if (92 !== e.charCodeAt(t)) return null;
          var n = e.charCodeAt(t + 1);
          if (10 === n) return null;
          if (n >= 48 && n <= 57 || n >= 65 && n <= 70 || n >= 97 && n <= 102) {
            for (var r = [n], o = Math.min(t + 7, e.length), i = t + 2; i < o; i += 1) {
              var a = e.charCodeAt(i);
              if (!(a >= 48 && a <= 57 || a >= 65 && a <= 70 || a >= 97 && a <= 102)) break;
              r.push(a)
            }
            if (i < e.length) {
              var s = e.charCodeAt(i);
              9 !== s && 32 !== s && 10 !== s || (i += 1)
            }
            return [i - 1, parseInt(String.fromCharCode.apply(null, r), 16)]
          }
          return [t + 1, n]
        },
        Fn = function(e, t) {
          var n = qn(e, t);
          if (null === n) return null;
          var r = Ln(n, 3),
            o = r[0],
            i = r[1],
            a = r[2],
            s = $n(e, o + 1);
          if (null !== s) {
            var l = Ln(s, 2);
            return [l[0],
              ["<dimension-token>", i, l[1]]
            ]
          }
          return o + 1 < e.length && 37 === e.charCodeAt(o + 1) ? [o + 1, ["<percentage-token>", i]] : [o, ["<number-token>", i, a]]
        },
        qn = function(e, t) {
          if (e.length <= t) return null;
          var n = "integer",
            r = [],
            o = e.charCodeAt(t);
          for (43 !== o && 45 !== o || (t += 1, 45 === o && r.push(45)); t < e.length && ((u = e.charCodeAt(t)) >= 48 && u <= 57);) r.push(u), t += 1;
          if (t + 1 < e.length) {
            var i = e.charCodeAt(t),
              a = e.charCodeAt(t + 1);
            if (46 === i && a >= 48 && a <= 57)
              for (r.push(i, a), n = "number", t += 2; t < e.length && ((u = e.charCodeAt(t)) >= 48 && u <= 57);) r.push(u), t += 1
          }
          if (t + 1 < e.length) {
            i = e.charCodeAt(t), a = e.charCodeAt(t + 1);
            var s = e.charCodeAt(t + 2);
            if (69 === i || 101 === i) {
              var l = a >= 48 && a <= 57;
              if (l || (43 === a || 45 === a) && s >= 48 && s <= 57)
                for (n = "number", l ? (r.push(69, a), t += 2) : 45 === a ? (r.push(69, 45, s), t += 3) : (r.push(69, s), t += 3); t < e.length;) {
                  var u;
                  if (!((u = e.charCodeAt(t)) >= 48 && u <= 57)) break;
                  r.push(u), t += 1
                }
            }
          }
          var c = String.fromCharCode.apply(null, r),
            d = "number" === n ? parseFloat(c) : parseInt(c);
          return -0 === d && (d = 0), Number.isNaN(d) ? null : [t - 1, d, n]
        },
        Bn = function(e, t) {
          if (e.length <= t) return null;
          for (var n = [], r = e.charCodeAt(t); t < e.length; r = e.charCodeAt(++t))
            if (45 === r || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || r >= 48 && r <= 57) n.push(r);
            else {
              var o = Vn(e, t);
              if (null === o) break;
              var i = Ln(o, 2),
                a = i[0],
                s = i[1];
              n.push(s), t = a
            } return 0 === t ? null : [t - 1, String.fromCharCode.apply(null, n)]
        },
        $n = function(e, t) {
          if (e.length <= t || !In(e, t)) return null;
          for (var n = [], r = e.charCodeAt(t); t < e.length; r = e.charCodeAt(++t))
            if (45 === r || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || r >= 48 && r <= 57) n.push(r);
            else {
              var o = Vn(e, t);
              if (null === o) break;
              var i = Ln(o, 2),
                a = i[0],
                s = i[1];
              n.push(s), t = a
            } return [t - 1, String.fromCharCode.apply(null, n)]
        },
        Hn = function(e, t) {
          for (var n = e.charCodeAt(t); 9 === n || 32 === n || 10 === n;) n = e.charCodeAt(++t);
          for (var r = [], o = !1; t < e.length;) {
            if (41 === n) return [t, String.fromCharCode.apply(null, r)];
            if (34 === n || 39 === n || 40 === n) return null;
            if (9 === n || 32 === n || 10 === n) o || 0 === r.length || (o = !0);
            else if (92 === n) {
              var i = Vn(e, t);
              if (null === i || o) return null;
              var a = Ln(i, 2),
                s = a[0],
                l = a[1];
              r.push(l), t = s
            } else {
              if (o) return null;
              r.push(n)
            }
            n = e.charCodeAt(++t)
          }
          return null
        },
        Wn = function(e, t) {
          var n = $n(e, t);
          if (null === n) return null;
          var r = Ln(n, 2),
            o = r[0],
            i = r[1];
          if ("url" === i.toLowerCase()) {
            if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) {
              for (var a = 2; o + a < e.length; a += 1) {
                var s = e.charCodeAt(o + a);
                if (34 === s || 39 === s) return [o + 1, i.toLowerCase(), "<function-token>"];
                if (9 !== s && 32 !== s && 10 !== s) {
                  var l = Hn(e, o + a);
                  if (null === l) return null;
                  var u = Ln(l, 2);
                  return [u[0], u[1], "<url-token>"]
                }
              }
              return [o + 1, i.toLowerCase(), "<function-token>"]
            }
          } else if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) return [o + 1, i.toLowerCase(), "<function-token>"];
          return [o, i.toLowerCase(), "<ident-token>"]
        },
        Gn = function(e) {
          if (null === e.mediaCondition) return e;
          var t = Un(e.mediaCondition);
          return null === t.operator && 1 === t.children.length && "children" in t.children[0] && (t = t.children[0]), {
            mediaPrefix: e.mediaPrefix,
            mediaType: e.mediaType,
            mediaCondition: t
          }
        },
        Un = function e(t) {
          for (var n = t.children.length - 1; n >= 0; n--) {
            var r = t.children[n];
            if (!("context" in r)) {
              var o = e(r);
              if (null === o.operator && 1 === o.children.length) t.children[n] = o.children[0];
              else if (o.operator === t.operator && ("and" === o.operator || "or" === o.operator)) {
                for (var i = [n, 1], a = 0; a < o.children.length; a++) i.push(o.children[a]);
                t.children.splice.apply(t.children, i)
              }
            }
          }
          return t
        },
        Kn = function(e, t) {
          return t instanceof Error ? new Error("".concat(t.message.trim(), "\n").concat(e.trim())) : new Error(e.trim())
        },
        Xn = function(e) {
          var t = function(e, t) {
            void 0 === t && (t = 0), e = (e = e.replace(Mn, "\n").replace(Rn, "�")).replace(zn, "");
            for (var n = []; t < e.length; t += 1) {
              var r = e.charCodeAt(t);
              if (9 === r || 32 === r || 10 === r) {
                for (var o = e.charCodeAt(++t); 9 === o || 32 === o || 10 === o;) o = e.charCodeAt(++t);
                t -= 1, n.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === r) {
                if (null === (S = An(e, t))) return null;
                var i = Ln(S, 2),
                  a = i[0],
                  s = i[1];
                n.push({
                  type: "<string-token>",
                  value: s
                }), t = a
              } else if (35 === r) {
                if (t + 1 < e.length && (95 === (h = e.charCodeAt(t + 1)) || h >= 65 && h <= 90 || h >= 97 && h <= 122 || h >= 128 || h >= 48 && h <= 57 || 92 === h && t + 2 < e.length && 10 !== e.charCodeAt(t + 2))) {
                  var l = In(e, t + 1) ? "id" : "unrestricted";
                  if (null !== (S = Bn(e, t + 1))) {
                    var u = Ln(S, 2);
                    a = u[0], s = u[1], n.push({
                      type: "<hash-token>",
                      value: s.toLowerCase(),
                      flag: l
                    }), t = a;
                    continue
                  }
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (39 === r) {
                if (null === (S = An(e, t))) return null;
                var c = Ln(S, 2);
                a = c[0], s = c[1], n.push({
                  type: "<string-token>",
                  value: s
                }), t = a
              } else if (40 === r) n.push({
                type: "<(-token>"
              });
              else if (41 === r) n.push({
                type: "<)-token>"
              });
              else if (43 === r) {
                var d = Fn(e, t);
                if (null === d) n.push({
                  type: "<delim-token>",
                  value: r
                });
                else {
                  var f = Ln(d, 2);
                  a = f[0], "<dimension-token>" === (k = f[1])[0] ? n.push({
                    type: "<dimension-token>",
                    value: k[1],
                    unit: k[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === k[0] ? n.push({
                    type: k[0],
                    value: k[1],
                    flag: k[2]
                  }) : n.push({
                    type: k[0],
                    value: k[1],
                    flag: "number"
                  }), t = a
                }
              } else if (44 === r) n.push({
                type: "<comma-token>"
              });
              else if (45 === r) {
                if (null !== (y = Fn(e, t))) {
                  var p = Ln(y, 2);
                  a = p[0], "<dimension-token>" === (k = p[1])[0] ? n.push({
                    type: "<dimension-token>",
                    value: k[1],
                    unit: k[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === k[0] ? n.push({
                    type: k[0],
                    value: k[1],
                    flag: k[2]
                  }) : n.push({
                    type: k[0],
                    value: k[1],
                    flag: "number"
                  }), t = a;
                  continue
                }
                if (t + 2 < e.length) {
                  var h = e.charCodeAt(t + 1),
                    v = e.charCodeAt(t + 2);
                  if (45 === h && 62 === v) {
                    n.push({
                      type: "<CDC-token>"
                    }), t += 2;
                    continue
                  }
                }
                if (null !== (S = Wn(e, t))) {
                  var g = Ln(S, 3),
                    m = (a = g[0], s = g[1], g[2]);
                  n.push({
                    type: m,
                    value: s
                  }), t = a;
                  continue
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (46 === r) {
                var y;
                if (null !== (y = Fn(e, t))) {
                  var b = Ln(y, 2);
                  a = b[0], "<dimension-token>" === (k = b[1])[0] ? n.push({
                    type: "<dimension-token>",
                    value: k[1],
                    unit: k[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === k[0] ? n.push({
                    type: k[0],
                    value: k[1],
                    flag: k[2]
                  }) : n.push({
                    type: k[0],
                    value: k[1],
                    flag: "number"
                  }), t = a;
                  continue
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (58 === r) n.push({
                type: "<colon-token>"
              });
              else if (59 === r) n.push({
                type: "<semicolon-token>"
              });
              else if (60 === r) {
                if (t + 3 < e.length) {
                  h = e.charCodeAt(t + 1), v = e.charCodeAt(t + 2);
                  var w = e.charCodeAt(t + 3);
                  if (33 === h && 45 === v && 45 === w) {
                    n.push({
                      type: "<CDO-token>"
                    }), t += 3;
                    continue
                  }
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (64 === r) {
                if (null !== (S = $n(e, t + 1))) {
                  var _ = Ln(S, 2);
                  a = _[0], s = _[1], n.push({
                    type: "<at-keyword-token>",
                    value: s.toLowerCase()
                  }), t = a;
                  continue
                }
                n.push({
                  type: "<delim-token>",
                  value: r
                })
              } else if (91 === r) n.push({
                type: "<[-token>"
              });
              else if (92 === r) {
                if (null === (S = Vn(e, t))) return null;
                var j = Ln(S, 2);
                a = j[0], s = j[1], e = e.slice(0, t) + s + e.slice(a + 1), t -= 1
              } else if (93 === r) n.push({
                type: "<]-token>"
              });
              else if (123 === r) n.push({
                type: "<{-token>"
              });
              else if (125 === r) n.push({
                type: "<}-token>"
              });
              else if (r >= 48 && r <= 57) {
                var k, x = Ln(S = Fn(e, t), 2);
                a = x[0], "<dimension-token>" === (k = x[1])[0] ? n.push({
                  type: "<dimension-token>",
                  value: k[1],
                  unit: k[2].toLowerCase(),
                  flag: "number"
                }) : "<number-token>" === k[0] ? n.push({
                  type: k[0],
                  value: k[1],
                  flag: k[2]
                }) : n.push({
                  type: k[0],
                  value: k[1],
                  flag: "number"
                }), t = a
              } else if (95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128) {
                var S;
                if (null === (S = Wn(e, t))) return null;
                var C = Ln(S, 3);
                a = C[0], s = C[1], m = C[2], n.push({
                  type: m,
                  value: s
                }), t = a
              } else n.push({
                type: "<delim-token>",
                value: r
              })
            }
            return n.push({
              type: "<EOF-token>"
            }), n
          }(e.trim());
          if (null === t) throw Kn("Failed tokenizing");
          var n = 0,
            r = t.length - 1;
          if ("<at-keyword-token>" === t[0].type && "media" === t[0].value) {
            if ("<whitespace-token>" !== t[1].type) throw Kn("Expected whitespace after media");
            n = 2;
            for (var o = 2; o < t.length - 1; o++) {
              var i = t[o];
              if ("<{-token>" === i.type) {
                r = o;
                break
              }
              if ("<semicolon-token>" === i.type) throw Kn("Expected '{' in media query but found ';'")
            }
          }
          return t = t.slice(n, r), Zn(t)
        },
        Yn = function(e) {
          for (var t = [], n = !1, r = 0; r < e.length; r++) "<whitespace-token>" === e[r].type ? (n = !0, t.length > 0 && (t[t.length - 1].wsAfter = !0)) : (t.push(Nn(Nn({}, e[r]), {
            wsBefore: n,
            wsAfter: !1
          })), n = !1);
          return t
        },
        Zn = function(e) {
          for (var t, n, r = [
              []
            ], o = 0; o < e.length; o++) {
            var i = e[o];
            "<comma-token>" === i.type ? r.push([]) : r[r.length - 1].push(i)
          }
          var a = r.map(Yn);
          if (1 === a.length && 0 === a[0].length) return [{
            mediaCondition: null,
            mediaPrefix: null,
            mediaType: "all"
          }];
          var s = a.map((function(e) {
              return 0 === e.length ? null : Qn(e)
            })),
            l = [];
          try {
            for (var u = function(e) {
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
              }(s), c = u.next(); !c.done; c = u.next()) {
              var d = c.value;
              null !== d && l.push(d)
            }
          } catch (e) {
            t = {
              error: e
            }
          } finally {
            try {
              c && !c.done && (n = u.return) && n.call(u)
            } finally {
              if (t) throw t.error
            }
          }
          if (0 === l.length) throw Kn("No valid media queries");
          return l
        },
        Qn = function(e) {
          var t = e[0];
          if ("<(-token>" === t.type) try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: Jn(e, !0)
            }
          } catch (e) {
            throw Kn("Expected media condition after '('", e)
          } else {
            if ("<ident-token>" !== t.type) throw Kn("Expected media condition or media prefix");
            var n = null,
              r = void 0,
              o = t.value;
            "only" !== o && "not" !== o || (n = o);
            var i = null === n ? 0 : 1;
            if (e.length <= i) throw Kn("Expected extra token in media query");
            var a = e[i];
            if ("<ident-token>" === a.type) {
              var s = a.value;
              if ("all" === s) r = "all";
              else if ("print" === s || "screen" === s) r = s;
              else {
                if ("tty" !== s && "tv" !== s && "projection" !== s && "handheld" !== s && "braille" !== s && "embossed" !== s && "aural" !== s && "speech" !== s) throw Kn("Unknown ident '".concat(s, "' in media query"));
                n = "not" === n ? null : "not", r = "all"
              }
            } else {
              if ("not" !== n || "<(-token>" !== a.type) throw Kn("Invalid media query");
              var l = [{
                type: "<(-token>",
                wsBefore: !1,
                wsAfter: !1
              }];
              l.push.apply(l, e), l.push({
                type: "<)-token>",
                wsBefore: !1,
                wsAfter: !1
              });
              try {
                return {
                  mediaPrefix: null,
                  mediaType: "all",
                  mediaCondition: Jn(l, !0)
                }
              } catch (e) {
                throw Kn("Expected media condition after '('", e)
              }
            }
            if (i + 1 === e.length) return {
              mediaPrefix: n,
              mediaType: r,
              mediaCondition: null
            };
            if (!(i + 4 < e.length)) throw Kn("Expected media condition after media prefix");
            var u = e[i + 1];
            if ("<ident-token>" !== u.type || "and" !== u.value) throw Kn("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: n,
                mediaType: r,
                mediaCondition: Jn(e.slice(i + 2), !1)
              }
            } catch (e) {
              throw Kn("Expected media condition after 'and'", e)
            }
          }
        },
        Jn = function e(t, n, r) {
          if (void 0 === r && (r = null), t.length < 3 || "<(-token>" !== t[0].type || "<)-token>" !== t[t.length - 1].type) throw new Error("Invalid media condition");
          for (var o, i = t.length - 1, a = 0, s = 0, l = 0; l < t.length; l++) {
            var u = t[l];
            if ("<(-token>" === u.type ? (s += 1, a = Math.max(a, s)) : "<)-token>" === u.type && (s -= 1), 0 === s) {
              i = l;
              break
            }
          }
          if (0 !== s) throw new Error("Mismatched parens\nInvalid media condition");
          var c = t.slice(0, i + 1);
          if (o = 1 === a ? er(c) : "<ident-token>" === c[1].type && "not" === c[1].value ? e(c.slice(2, -1), !0, "not") : e(c.slice(1, -1), !0), i === t.length - 1) return {
            operator: r,
            children: [o]
          };
          var d = t[i + 1];
          if ("<ident-token>" !== d.type) throw new Error("Invalid operator\nInvalid media condition");
          if (null !== r && r !== d.value) throw new Error("'".concat(d.value, "' and '").concat(r, "' must not be at same level\nInvalid media condition"));
          if ("or" === d.value && !n) throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          if ("and" !== d.value && "or" !== d.value) throw new Error("Invalid operator: '".concat(d.value, "'\nInvalid media condition"));
          var f = e(t.slice(i + 2), n, d.value);
          return {
            operator: d.value,
            children: [o].concat(f.children)
          }
        },
        er = function(e) {
          if (e.length < 3 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid media feature");
          for (var t = [e[0]], n = 1; n < e.length; n++) {
            if (n < e.length - 2) {
              var r = e[n],
                o = e[n + 1],
                i = e[n + 2];
              if ("<number-token>" === r.type && r.value > 0 && "<delim-token>" === o.type && 47 === o.value && "<number-token>" === i.type && i.value > 0) {
                t.push({
                  type: "<ratio-token>",
                  numerator: r.value,
                  denominator: i.value,
                  wsBefore: r.wsBefore,
                  wsAfter: i.wsAfter
                }), n += 2;
                continue
              }
            }
            t.push(e[n])
          }
          var a = t[1];
          if ("<ident-token>" === a.type && 3 === t.length) return {
            context: "boolean",
            feature: a.value
          };
          if (5 === t.length && "<ident-token>" === t[1].type && "<colon-token>" === t[2].type) {
            var s = t[3];
            if ("<number-token>" === s.type || "<dimension-token>" === s.type || "<ratio-token>" === s.type || "<ident-token>" === s.type) {
              var l = t[1].value,
                u = null,
                c = l.slice(0, 4);
              return "min-" === c ? (u = "min", l = l.slice(4)) : "max-" === c && (u = "max", l = l.slice(4)), s.wsBefore, s.wsAfter, {
                context: "value",
                prefix: u,
                feature: l,
                value: Tn(s, ["wsBefore", "wsAfter"])
              }
            }
          } else if (t.length >= 5) try {
            var d = tr(t);
            return {
              context: "range",
              feature: d.featureName,
              range: d
            }
          } catch (e) {
            throw Kn("Invalid media feature", e)
          }
          throw new Error("Invalid media feature")
        },
        tr = function(e) {
          var t, n, r, o;
          if (e.length < 5 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid range");
          var i = {
              leftToken: null,
              leftOp: null,
              featureName: "",
              rightOp: null,
              rightToken: null
            },
            a = "<number-token>" === e[1].type || "<dimension-token>" === e[1].type || "<ratio-token>" === e[1].type || "<ident-token>" === e[1].type && "infinite" === e[1].value;
          if ("<delim-token>" === e[2].type) {
            if (60 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? i[a ? "leftOp" : "rightOp"] = "<" : i[a ? "leftOp" : "rightOp"] = "<=";
            else if (62 === e[2].value) "<delim-token>" !== e[3].type || 61 !== e[3].value || e[3].wsBefore ? i[a ? "leftOp" : "rightOp"] = ">" : i[a ? "leftOp" : "rightOp"] = ">=";
            else {
              if (61 !== e[2].value) throw new Error("Invalid range");
              i[a ? "leftOp" : "rightOp"] = "="
            }
            if (a) i.leftToken = e[1];
            else {
              if ("<ident-token>" !== e[1].type) throw new Error("Invalid range");
              i.featureName = e[1].value
            }
            var s = 2 + (null !== (n = null === (t = i[a ? "leftOp" : "rightOp"]) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0),
              l = e[s];
            if (a) {
              if ("<ident-token>" !== l.type) throw new Error("Invalid range");
              if (i.featureName = l.value, e.length >= 7) {
                var u = e[s + 1],
                  c = e[s + 2];
                if ("<delim-token>" !== u.type) throw new Error("Invalid range");
                var d = u.value;
                if (60 === d) "<delim-token>" !== c.type || 61 !== c.value || c.wsBefore ? i.rightOp = "<" : i.rightOp = "<=";
                else {
                  if (62 !== d) throw new Error("Invalid range");
                  "<delim-token>" !== c.type || 61 !== c.value || c.wsBefore ? i.rightOp = ">" : i.rightOp = ">="
                }
                var f = e[s + 1 + (null !== (o = null === (r = i.rightOp) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0)];
                i.rightToken = f
              } else if (s + 2 !== e.length) throw new Error("Invalid range")
            } else i.rightToken = l;
            var p = null,
              h = i.leftToken,
              v = i.leftOp,
              g = i.featureName,
              m = i.rightOp,
              y = i.rightToken,
              b = null;
            if (null !== h)
              if ("<ident-token>" === h.type) {
                var w = h.type;
                "infinite" === (j = h.value) && (b = {
                  type: w,
                  value: j
                })
              } else "<number-token>" !== h.type && "<dimension-token>" !== h.type && "<ratio-token>" !== h.type || (h.wsBefore, h.wsAfter, b = Tn(h, ["wsBefore", "wsAfter"]));
            var _ = null;
            if (null !== y)
              if ("<ident-token>" === y.type) {
                var j;
                w = y.type, "infinite" === (j = y.value) && (_ = {
                  type: w,
                  value: j
                })
              } else "<number-token>" !== y.type && "<dimension-token>" !== y.type && "<ratio-token>" !== y.type || (y.wsBefore, y.wsAfter, _ = Tn(y, ["wsBefore", "wsAfter"]));
            if (null !== b && null !== _)
              if ("<" !== v && "<=" !== v || "<" !== m && "<=" !== m) {
                if (">" !== v && ">=" !== v || ">" !== m && ">=" !== m) throw new Error("Invalid range");
                p = {
                  leftToken: b,
                  leftOp: v,
                  featureName: g,
                  rightOp: m,
                  rightToken: _
                }
              } else p = {
                leftToken: b,
                leftOp: v,
                featureName: g,
                rightOp: m,
                rightToken: _
              };
            else(null === b && null === v && null !== m && null !== _ || null !== b && null !== v && null === m && null === _) && (p = {
              leftToken: b,
              leftOp: v,
              featureName: g,
              rightOp: m,
              rightToken: _
            });
            return p
          }
          throw new Error("Invalid range")
        };

      function nr(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function rr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function or(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? rr(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = nr(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rr(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function ir(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
          if (null == e) return {};
          var n, r, o = {},
            i = Object.keys(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
          return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
        }
        return o
      }

      function ar(e, t) {
        for (var n in e) t(e[n], n)
      }

      function sr(e, t) {
        var n = {};
        for (var r in e) - 1 === t.indexOf(r) && (n[r] = e[r]);
        return n
      }
      class lr {
        constructor() {
          this.ruleset = new Map, this.precedenceLookup = new Map
        }
        findOrCreateCondition(e) {
          var t = this.ruleset.get(e);
          return t || (t = {
            query: e,
            rules: [],
            children: new lr
          }, this.ruleset.set(e, t)), t
        }
        getConditionalRulesetByPath(e) {
          var t = this;
          for (var n of e) {
            var r = t.findOrCreateCondition(n);
            t = r.children
          }
          return t
        }
        addRule(e, t, n) {
          var r = this.getConditionalRulesetByPath(n).findOrCreateCondition(t);
          if (!r) throw new Error("Failed to add conditional rule");
          r.rules.push(e)
        }
        addConditionPrecedence(e, t) {
          for (var n = this.getConditionalRulesetByPath(e), r = 0; r < t.length; r++) {
            var o, i = t[r],
              a = null !== (o = n.precedenceLookup.get(i)) && void 0 !== o ? o : new Set;
            for (var s of t.slice(r + 1)) a.add(s);
            n.precedenceLookup.set(i, a)
          }
        }
        isCompatible(e) {
          for (var [t, n] of this.precedenceLookup.entries())
            for (var r of n) {
              var o;
              if (null !== (o = e.precedenceLookup.get(r)) && void 0 !== o && o.has(t)) return !1
            }
          for (var {
              query: i,
              children: a
            }
            of e.ruleset.values()) {
            var s = this.ruleset.get(i);
            if (s && !s.children.isCompatible(a)) return !1
          }
          return !0
        }
        merge(e) {
          for (var {
              query: t,
              rules: n,
              children: r
            }
            of e.ruleset.values()) {
            var o = this.ruleset.get(t);
            o ? (o.rules.push(...n), o.children.merge(r)) : this.ruleset.set(t, {
              query: t,
              rules: n,
              children: r
            })
          }
          for (var [i, a] of e.precedenceLookup.entries()) {
            var s, l = null !== (s = this.precedenceLookup.get(i)) && void 0 !== s ? s : new Set;
            this.precedenceLookup.set(i, new Set([...l, ...a]))
          }
        }
        mergeIfCompatible(e) {
          return !!this.isCompatible(e) && (this.merge(e), !0)
        }
        getSortedRuleset() {
          var e = this,
            t = [],
            n = function(n) {
              var o = e.ruleset.get(r);
              if (!o) throw new Error("Can't find condition for ".concat(r));
              var i = t.findIndex((e => n.has(e.query)));
              i > -1 ? t.splice(i, 0, o) : t.push(o)
            };
          for (var [r, o] of this.precedenceLookup.entries()) n(o);
          return t
        }
        renderToArray() {
          var e = [];
          for (var {
              query: t,
              rules: n,
              children: r
            }
            of this.getSortedRuleset()) {
            var o = {};
            for (var i of n) o[i.selector] = or(or({}, o[i.selector]), i.rule);
            Object.assign(o, ...r.renderToArray()), e.push({
              [t]: o
            })
          }
          return e
        }
      }
      var ur, cr = {
          ":-moz-any-link": !0,
          ":-moz-full-screen": !0,
          ":-moz-placeholder": !0,
          ":-moz-read-only": !0,
          ":-moz-read-write": !0,
          ":-ms-fullscreen": !0,
          ":-ms-input-placeholder": !0,
          ":-webkit-any-link": !0,
          ":-webkit-full-screen": !0,
          "::-moz-color-swatch": !0,
          "::-moz-list-bullet": !0,
          "::-moz-list-number": !0,
          "::-moz-page-sequence": !0,
          "::-moz-page": !0,
          "::-moz-placeholder": !0,
          "::-moz-progress-bar": !0,
          "::-moz-range-progress": !0,
          "::-moz-range-thumb": !0,
          "::-moz-range-track": !0,
          "::-moz-scrolled-page-sequence": !0,
          "::-moz-selection": !0,
          "::-ms-backdrop": !0,
          "::-ms-browse": !0,
          "::-ms-check": !0,
          "::-ms-clear": !0,
          "::-ms-fill-lower": !0,
          "::-ms-fill-upper": !0,
          "::-ms-fill": !0,
          "::-ms-reveal": !0,
          "::-ms-thumb": !0,
          "::-ms-ticks-after": !0,
          "::-ms-ticks-before": !0,
          "::-ms-tooltip": !0,
          "::-ms-track": !0,
          "::-ms-value": !0,
          "::-webkit-backdrop": !0,
          "::-webkit-calendar-picker-indicator": !0,
          "::-webkit-inner-spin-button": !0,
          "::-webkit-input-placeholder": !0,
          "::-webkit-meter-bar": !0,
          "::-webkit-meter-even-less-good-value": !0,
          "::-webkit-meter-inner-element": !0,
          "::-webkit-meter-optimum-value": !0,
          "::-webkit-meter-suboptimum-value": !0,
          "::-webkit-outer-spin-button": !0,
          "::-webkit-progress-bar": !0,
          "::-webkit-progress-inner-element": !0,
          "::-webkit-progress-inner-value": !0,
          "::-webkit-progress-value": !0,
          "::-webkit-resizer": !0,
          "::-webkit-scrollbar-button": !0,
          "::-webkit-scrollbar-corner": !0,
          "::-webkit-scrollbar-thumb": !0,
          "::-webkit-scrollbar-track-piece": !0,
          "::-webkit-scrollbar-track": !0,
          "::-webkit-scrollbar": !0,
          "::-webkit-search-cancel-button": !0,
          "::-webkit-search-results-button": !0,
          "::-webkit-slider-runnable-track": !0,
          "::-webkit-slider-thumb": !0,
          "::after": !0,
          "::backdrop": !0,
          "::before": !0,
          "::cue": !0,
          "::file-selector-button": !0,
          "::first-letter": !0,
          "::first-line": !0,
          "::grammar-error": !0,
          "::marker": !0,
          "::placeholder": !0,
          "::selection": !0,
          "::spelling-error": !0,
          "::target-text": !0,
          "::view-transition-group": !0,
          "::view-transition-image-pair": !0,
          "::view-transition-new": !0,
          "::view-transition-old": !0,
          "::view-transition": !0,
          ":active": !0,
          ":after": !0,
          ":any-link": !0,
          ":before": !0,
          ":blank": !0,
          ":checked": !0,
          ":default": !0,
          ":defined": !0,
          ":disabled": !0,
          ":empty": !0,
          ":enabled": !0,
          ":first-child": !0,
          ":first-letter": !0,
          ":first-line": !0,
          ":first-of-type": !0,
          ":first": !0,
          ":focus-visible": !0,
          ":focus-within": !0,
          ":focus": !0,
          ":fullscreen": !0,
          ":hover": !0,
          ":in-range": !0,
          ":indeterminate": !0,
          ":invalid": !0,
          ":last-child": !0,
          ":last-of-type": !0,
          ":left": !0,
          ":link": !0,
          ":only-child": !0,
          ":only-of-type": !0,
          ":optional": !0,
          ":out-of-range": !0,
          ":placeholder-shown": !0,
          ":read-only": !0,
          ":read-write": !0,
          ":required": !0,
          ":right": !0,
          ":root": !0,
          ":scope": !0,
          ":target": !0,
          ":valid": !0,
          ":visited": !0
        },
        dr = Object.keys(cr),
        fr = cr,
        pr = (e, t) => new Error(En(ur || (ur = pn(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), e, t)),
        hr = e => {
          if ("@media " === e) throw pr(e, "Query is empty");
          try {
            (function(e) {
              for (var t = e.length - 1; t >= 0; t--) e[t] = Gn(e[t])
            })(Xn(e))
          } catch (t) {
            throw pr(e, t.message)
          }
        },
        vr = ["vars"],
        gr = ["content"],
        mr = "__DECLARATION",
        yr = {
          animationIterationCount: !0,
          borderImage: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          initialLetter: !0,
          lineClamp: !0,
          lineHeight: !0,
          maxLines: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          scale: !0,
          tabSize: !0,
          WebkitLineClamp: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          maskBorder: !0,
          maskBorderOutset: !0,
          maskBorderSlice: !0,
          maskBorderWidth: !0,
          shapeImageThreshold: !0,
          stopOpacity: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        };

      function br(e, t, n, r) {
        var o = e.slice(0, t),
          i = e.slice(n);
        return "".concat(o).concat(r).concat(i)
      }
      var wr = [...dr, "@layer", "@media", "@supports", "@container", "selectors"];
      class _r {
        constructor(e, t) {
          this.rules = [], this.conditionalRulesets = [new lr], this.fontFaceRules = [], this.keyframesRules = [], this.propertyRules = [], this.localClassNamesMap = new Map(e.map((e => [e, e]))), this.localClassNamesSearch = new cn(e), this.layers = new Map, this.composedClassLists = t.map((e => {
            var {
              identifier: t,
              classList: n
            } = e;
            return {
              identifier: t,
              regex: RegExp("(".concat(n, ")"), "g")
            }
          })).reverse()
        }
        processCssObj(e) {
          if ("fontFace" !== e.type)
            if ("property" !== e.type) {
              if ("keyframes" === e.type) return e.rule = Object.fromEntries(Object.entries(e.rule).map((e => {
                var [t, n] = e;
                return [t, this.transformVars(this.transformProperties(n))]
              }))), void this.keyframesRules.push(e);
              if (this.currConditionalRuleset = new lr, "layer" === e.type) {
                var t = "@layer ".concat(e.name);
                this.addLayer([t])
              } else {
                var n = sr(e.rule, wr);
                this.addRule({
                  selector: e.selector,
                  rule: n
                }), this.transformLayer(e, e.rule["@layer"]), this.transformMedia(e, e.rule["@media"]), this.transformSupports(e, e.rule["@supports"]), this.transformContainer(e, e.rule["@container"]), this.transformSimplePseudos(e, e.rule), this.transformSelectors(e, e.rule)
              }
              this.conditionalRulesets[this.conditionalRulesets.length - 1].mergeIfCompatible(this.currConditionalRuleset) || this.conditionalRulesets.push(this.currConditionalRuleset)
            } else this.propertyRules.push(e);
          else this.fontFaceRules.push(e.rule)
        }
        addConditionalRule(e, t) {
          var n = this.transformVars(this.transformProperties(e.rule)),
            r = this.transformSelector(e.selector);
          if (!this.currConditionalRuleset) throw new Error("Couldn't add conditional rule");
          var o = t[t.length - 1],
            i = t.slice(0, t.length - 1);
          this.currConditionalRuleset.addRule({
            selector: r,
            rule: n
          }, o, i)
        }
        addRule(e) {
          var t = this.transformVars(this.transformProperties(e.rule)),
            n = this.transformSelector(e.selector);
          this.rules.push({
            selector: n,
            rule: t
          })
        }
        addLayer(e) {
          var t = e.join(" - ");
          this.layers.set(t, e)
        }
        transformProperties(e) {
          return this.transformContent(this.pixelifyProperties(e))
        }
        pixelifyProperties(e) {
          return ar(e, ((t, n) => {
            "number" != typeof t || 0 === t || yr[n] || (e[n] = "".concat(t, "px"))
          })), e
        }
        transformVars(e) {
          var {
            vars: t
          } = e, n = ir(e, vr);
          return t ? or(or({}, function(e) {
            var t, n = {};
            for (var r in e) n[(e[r], t = r, rn(t))] = e[r];
            return n
          }(t)), n) : n
        }
        transformContent(e) {
          var {
            content: t
          } = e, n = ir(e, gr);
          return void 0 === t ? n : or({
            content: (Array.isArray(t) ? t : [t]).map((e => e && (e.includes('"') || e.includes("'") || /^([A-Za-z\-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(e)) ? e : '"'.concat(e, '"')))
          }, n)
        }
        transformClassname(e) {
          return ".".concat(un()(e, {
            isIdentifier: !0
          }))
        }
        transformSelector(e) {
          var t = e,
            n = function(e) {
              t = t.replace(o, (() => (function() {
                (() => {
                  if (dn.length < 1) throw new Error("No adapter configured");
                  return dn[dn.length - 1]
                })().markCompositionUsed(...arguments)
              }(e), e)))
            };
          for (var {
              identifier: r,
              regex: o
            }
            of this.composedClassLists) n(r);
          if (this.localClassNamesMap.has(t)) return this.transformClassname(t);
          for (var i = this.localClassNamesSearch.search(t), a = t.length, s = i.length - 1; s >= 0; s--) {
            var [l, [u]] = i[s], c = l - u.length + 1;
            a <= l || (a = c, "." !== t[c - 1] && (t = br(t, c, l + 1, this.transformClassname(u))))
          }
          return t
        }
        transformSelectors(e, t, n) {
          ar(t.selectors, ((t, r) => {
            if ("local" !== e.type) throw new Error("Selectors are not allowed within ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
            var o = this.transformSelector(r.replace(RegExp("&", "g"), e.selector));
            ((e, t) => {
              var n, r = () => {
                var n = new RegExp(".".concat(un()(t, {
                  isIdentifier: !0
                }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")), "g");
                return e.replace(n, "&")
              };
              try {
                n = kn(e)
              } catch (e) {
                throw new Error("Invalid selector: ".concat(r()))
              }
              n.forEach((e => {
                try {
                  for (var n = e.length - 1; n >= -1; n--) {
                    if (!e[n]) throw new Error;
                    var o = e[n];
                    if ("child" === o.type || "parent" === o.type || "sibling" === o.type || "adjacent" === o.type || "descendant" === o.type) throw new Error;
                    if ("attribute" === o.type && "class" === o.name && o.value === t) return
                  }
                } catch (e) {
                  throw new Error(En(Dn || (Dn = pn(["\n        Invalid selector: ", "\n    \n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n        \n        This is to ensure that each style block only affects the styling of a single class.\n        \n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n        \n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), r(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"))
                }
              }))
            })(o, e.selector);
            var i = {
              selector: o,
              rule: sr(t, wr)
            };
            n ? this.addConditionalRule(i, n) : this.addRule(i);
            var a = {
              type: "selector",
              selector: o,
              rule: t
            };
            this.transformLayer(a, t["@layer"], n), this.transformSupports(a, t["@supports"], n), this.transformMedia(a, t["@media"], n), this.transformContainer(a, t["@container"], n)
          }))
        }
        transformMedia(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t)
            for (var [o, i] of(null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map((e => "@media ".concat(e)))), Object.entries(t))) {
              var a = "@media ".concat(o);
              hr(a);
              var s = [...r, a];
              this.addConditionalRule({
                selector: e.selector,
                rule: sr(i, wr)
              }, s), "local" === e.type && (this.transformSimplePseudos(e, i, s), this.transformSelectors(e, i, s)), this.transformLayer(e, i["@layer"], s), this.transformSupports(e, i["@supports"], s), this.transformContainer(e, i["@container"], s)
            }
        }
        transformContainer(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map((e => "@container ".concat(e)))), ar(t, ((t, n) => {
            var o = "@container ".concat(n),
              i = [...r, o];
            this.addConditionalRule({
              selector: e.selector,
              rule: sr(t, wr)
            }, i), "local" === e.type && (this.transformSimplePseudos(e, t, i), this.transformSelectors(e, t, i)), this.transformLayer(e, t["@layer"], i), this.transformSupports(e, t["@supports"], i), this.transformMedia(e, t["@media"], i)
          })))
        }
        transformLayer(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map((e => "@layer ".concat(e)))), ar(t, ((t, n) => {
            var o = [...r, "@layer ".concat(n)];
            this.addLayer(o), this.addConditionalRule({
              selector: e.selector,
              rule: sr(t, wr)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformMedia(e, t["@media"], o), this.transformSupports(e, t["@supports"], o), this.transformContainer(e, t["@container"], o)
          })))
        }
        transformSupports(e, t) {
          var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (n = this.currConditionalRuleset) || void 0 === n || n.addConditionPrecedence(r, Object.keys(t).map((e => "@supports ".concat(e)))), ar(t, ((t, n) => {
            var o = [...r, "@supports ".concat(n)];
            this.addConditionalRule({
              selector: e.selector,
              rule: sr(t, wr)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformLayer(e, t["@layer"], o), this.transformMedia(e, t["@media"], o), this.transformContainer(e, t["@container"], o)
          })))
        }
        transformSimplePseudos(e, t, n) {
          for (var r of Object.keys(t))
            if (fr[r]) {
              if ("local" !== e.type) throw new Error("Simple pseudos are not valid in ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
              n ? this.addConditionalRule({
                selector: "".concat(e.selector).concat(r),
                rule: t[r]
              }, n) : this.addRule({
                conditions: n,
                selector: "".concat(e.selector).concat(r),
                rule: t[r]
              })
            }
        }
        toCss() {
          var e = [];
          for (var t of this.fontFaceRules) e.push(jr({
            "@font-face": t
          }));
          for (var n of this.propertyRules) e.push(jr({
            ["@property ".concat(n.name)]: n.rule
          }));
          for (var r of this.keyframesRules) e.push(jr({
            ["@keyframes ".concat(r.name)]: r.rule
          }));
          for (var o of this.layers.values()) {
            var [i, ...a] = o.reverse(), s = {
              [i]: mr
            };
            for (var l of a) s = {
              [l]: s
            };
            e.push(jr(s))
          }
          for (var u of this.rules) e.push(jr({
            [u.selector]: u.rule
          }));
          for (var c of this.conditionalRulesets)
            for (var d of c.renderToArray()) e.push(jr(d));
          return e.filter(Boolean)
        }
      }

      function jr(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          n = [],
          r = function(r) {
            var o, i = e[r];
            i && Array.isArray(i) ? n.push(...i.map((e => jr({
              [r]: e
            }, t)))) : i && "object" == typeof i ? 0 === Object.keys(i).length || n.push("".concat(t).concat(r, " {\n").concat(jr(i, t + "  "), "\n").concat(t, "}")) : i === mr ? n.push("".concat(t).concat(r, ";")) : n.push("".concat(t).concat(r.startsWith("--") ? r : (o = r, o.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase()), ": ").concat(i, ";"))
          };
        for (var o of Object.keys(e)) r(o);
        return n.join("\n")
      }
      var kr = n(87144);
      const xr = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date,
        Sr = new Set,
        Cr = "object" == typeof kr && kr ? kr : {},
        Or = (e, t, n, r) => {
          "function" == typeof Cr.emitWarning ? Cr.emitWarning(e, t, n, r) : console.error(`[${n}] ${t}: ${e}`)
        };
      let Pr = globalThis.AbortController,
        Er = globalThis.AbortSignal;
      if (void 0 === Pr) {
        Er = class {
          onabort;
          _onabort = [];
          reason;
          aborted = !1;
          addEventListener(e, t) {
            this._onabort.push(t)
          }
        }, Pr = class {
          constructor() {
            t()
          }
          signal = (() => new Er)();
          abort(e) {
            if (!this.signal.aborted) {
              this.signal.reason = e, this.signal.aborted = !0;
              for (const t of this.signal._onabort) t(e);
              this.signal.onabort?.(e)
            }
          }
        };
        let e = "1" !== Cr.env?.LRU_CACHE_IGNORE_AC_WARNING;
        const t = () => {
          e && (e = !1, Or("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t))
        }
      }
      Symbol("type");
      const Nr = e => e && e === Math.floor(e) && e > 0 && isFinite(e),
        Tr = e => Nr(e) ? e <= Math.pow(2, 8) ? Uint8Array : e <= Math.pow(2, 16) ? Uint16Array : e <= Math.pow(2, 32) ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? Lr : null : null;
      class Lr extends Array {
        constructor(e) {
          super(e), this.fill(0)
        }
      }
      class Dr {
        heap;
        length;
        static #e = !1;
        static create(e) {
          const t = Tr(e);
          if (!t) return [];
          Dr.#e = !0;
          const n = new Dr(e, t);
          return Dr.#e = !1, n
        }
        constructor(e, t) {
          if (!Dr.#e) throw new TypeError("instantiate Stack using Stack.create(n)");
          this.heap = new t(e), this.length = 0
        }
        push(e) {
          this.heap[this.length++] = e
        }
        pop() {
          return this.heap[--this.length]
        }
      }
      class Mr {
        #t;
        #n;
        #r;
        #o;
        #i;
        #a;
        ttl;
        ttlResolution;
        ttlAutopurge;
        updateAgeOnGet;
        updateAgeOnHas;
        allowStale;
        noDisposeOnSet;
        noUpdateTTL;
        maxEntrySize;
        sizeCalculation;
        noDeleteOnFetchRejection;
        noDeleteOnStaleGet;
        allowStaleOnFetchAbort;
        allowStaleOnFetchRejection;
        ignoreFetchAbort;
        #s;
        #l;
        #u;
        #c;
        #d;
        #f;
        #p;
        #h;
        #v;
        #g;
        #m;
        #y;
        #b;
        #w;
        #_;
        #j;
        #k;
        static unsafeExposeInternals(e) {
          return {
            starts: e.#b,
            ttls: e.#w,
            sizes: e.#y,
            keyMap: e.#u,
            keyList: e.#c,
            valList: e.#d,
            next: e.#f,
            prev: e.#p,
            get head() {
              return e.#h
            },
            get tail() {
              return e.#v
            },
            free: e.#g,
            isBackgroundFetch: t => e.#x(t),
            backgroundFetch: (t, n, r, o) => e.#S(t, n, r, o),
            moveToTail: t => e.#C(t),
            indexes: t => e.#O(t),
            rindexes: t => e.#P(t),
            isStale: t => e.#E(t)
          }
        }
        get max() {
          return this.#t
        }
        get maxSize() {
          return this.#n
        }
        get calculatedSize() {
          return this.#l
        }
        get size() {
          return this.#s
        }
        get fetchMethod() {
          return this.#i
        }
        get memoMethod() {
          return this.#a
        }
        get dispose() {
          return this.#r
        }
        get disposeAfter() {
          return this.#o
        }
        constructor(e) {
          const {
            max: t = 0,
            ttl: n,
            ttlResolution: r = 1,
            ttlAutopurge: o,
            updateAgeOnGet: i,
            updateAgeOnHas: a,
            allowStale: s,
            dispose: l,
            disposeAfter: u,
            noDisposeOnSet: c,
            noUpdateTTL: d,
            maxSize: f = 0,
            maxEntrySize: p = 0,
            sizeCalculation: h,
            fetchMethod: v,
            memoMethod: g,
            noDeleteOnFetchRejection: m,
            noDeleteOnStaleGet: y,
            allowStaleOnFetchRejection: b,
            allowStaleOnFetchAbort: w,
            ignoreFetchAbort: _
          } = e;
          if (0 !== t && !Nr(t)) throw new TypeError("max option must be a nonnegative integer");
          const j = t ? Tr(t) : Array;
          if (!j) throw new Error("invalid max value: " + t);
          if (this.#t = t, this.#n = f, this.maxEntrySize = p || this.#n, this.sizeCalculation = h, this.sizeCalculation) {
            if (!this.#n && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function")
          }
          if (void 0 !== g && "function" != typeof g) throw new TypeError("memoMethod must be a function if defined");
          if (this.#a = g, void 0 !== v && "function" != typeof v) throw new TypeError("fetchMethod must be a function if specified");
          if (this.#i = v, this.#j = !!v, this.#u = new Map, this.#c = new Array(t).fill(void 0), this.#d = new Array(t).fill(void 0), this.#f = new j(t), this.#p = new j(t), this.#h = 0, this.#v = 0, this.#g = Dr.create(t), this.#s = 0, this.#l = 0, "function" == typeof l && (this.#r = l), "function" == typeof u ? (this.#o = u, this.#m = []) : (this.#o = void 0, this.#m = void 0), this.#_ = !!this.#r, this.#k = !!this.#o, this.noDisposeOnSet = !!c, this.noUpdateTTL = !!d, this.noDeleteOnFetchRejection = !!m, this.allowStaleOnFetchRejection = !!b, this.allowStaleOnFetchAbort = !!w, this.ignoreFetchAbort = !!_, 0 !== this.maxEntrySize) {
            if (0 !== this.#n && !Nr(this.#n)) throw new TypeError("maxSize must be a positive integer if specified");
            if (!Nr(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            this.#N()
          }
          if (this.allowStale = !!s, this.noDeleteOnStaleGet = !!y, this.updateAgeOnGet = !!i, this.updateAgeOnHas = !!a, this.ttlResolution = Nr(r) || 0 === r ? r : 1, this.ttlAutopurge = !!o, this.ttl = n || 0, this.ttl) {
            if (!Nr(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            this.#T()
          }
          if (0 === this.#t && 0 === this.ttl && 0 === this.#n) throw new TypeError("At least one of max, maxSize, or ttl is required");
          if (!this.ttlAutopurge && !this.#t && !this.#n) {
            const e = "LRU_CACHE_UNBOUNDED";
            (e => !Sr.has(e))(e) && (Sr.add(e), Or("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, Mr))
          }
        }
        getRemainingTTL(e) {
          return this.#u.has(e) ? 1 / 0 : 0
        }
        #T() {
          var e = this;
          const t = new Lr(this.#t),
            n = new Lr(this.#t);
          this.#w = t, this.#b = n, this.#L = function(r, o) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : xr.now();
            if (n[r] = 0 !== o ? i : 0, t[r] = o, 0 !== o && e.ttlAutopurge) {
              const t = setTimeout((() => {
                e.#E(r) && e.#D(e.#c[r], "expire")
              }), o + 1);
              t.unref && t.unref()
            }
          }, this.#M = e => {
            n[e] = 0 !== t[e] ? xr.now() : 0
          }, this.#R = (e, i) => {
            if (t[i]) {
              const a = t[i],
                s = n[i];
              if (!a || !s) return;
              e.ttl = a, e.start = s, e.now = r || o();
              const l = e.now - s;
              e.remainingTTL = a - l
            }
          };
          let r = 0;
          const o = () => {
            const e = xr.now();
            if (this.ttlResolution > 0) {
              r = e;
              const t = setTimeout((() => r = 0), this.ttlResolution);
              t.unref && t.unref()
            }
            return e
          };
          this.getRemainingTTL = e => {
            const i = this.#u.get(e);
            if (void 0 === i) return 0;
            const a = t[i],
              s = n[i];
            return a && s ? a - ((r || o()) - s) : 1 / 0
          }, this.#E = e => {
            const i = n[e],
              a = t[e];
            return !!a && !!i && (r || o()) - i > a
          }
        }
        #M = () => {};
        #R = () => {};
        #L = () => {};
        #E = () => !1;
        #N() {
          const e = new Lr(this.#t);
          this.#l = 0, this.#y = e, this.#z = t => {
            this.#l -= e[t], e[t] = 0
          }, this.#A = (e, t, n, r) => {
            if (this.#x(t)) return 0;
            if (!Nr(n)) {
              if (!r) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
              if ("function" != typeof r) throw new TypeError("sizeCalculation must be a function");
              if (n = r(t, e), !Nr(n)) throw new TypeError("sizeCalculation return invalid (expect positive integer)")
            }
            return n
          }, this.#I = (t, n, r) => {
            if (e[t] = n, this.#n) {
              const n = this.#n - e[t];
              for (; this.#l > n;) this.#V(!0)
            }
            this.#l += e[t], r && (r.entrySize = n, r.totalCalculatedSize = this.#l)
          }
        }
        #z = e => {};
        #I = (e, t, n) => {};
        #A = (e, t, n, r) => {
          if (n || r) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
          return 0
        };
        #O() {
          var e = this;
          let {
            allowStale: t = this.allowStale
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function*() {
            if (e.#s)
              for (let n = e.#v; e.#F(n) && (!t && e.#E(n) || (yield n), n !== e.#h);) n = e.#p[n]
          }()
        }
        #P() {
          var e = this;
          let {
            allowStale: t = this.allowStale
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function*() {
            if (e.#s)
              for (let n = e.#h; e.#F(n) && (!t && e.#E(n) || (yield n), n !== e.#v);) n = e.#f[n]
          }()
        }
        #F(e) {
          return void 0 !== e && this.#u.get(this.#c[e]) === e
        }* entries() {
          for (const e of this.#O()) void 0 === this.#d[e] || void 0 === this.#c[e] || this.#x(this.#d[e]) || (yield [this.#c[e], this.#d[e]])
        }* rentries() {
          for (const e of this.#P()) void 0 === this.#d[e] || void 0 === this.#c[e] || this.#x(this.#d[e]) || (yield [this.#c[e], this.#d[e]])
        }* keys() {
          for (const e of this.#O()) {
            const t = this.#c[e];
            void 0 === t || this.#x(this.#d[e]) || (yield t)
          }
        }* rkeys() {
          for (const e of this.#P()) {
            const t = this.#c[e];
            void 0 === t || this.#x(this.#d[e]) || (yield t)
          }
        }* values() {
          for (const e of this.#O()) void 0 === this.#d[e] || this.#x(this.#d[e]) || (yield this.#d[e])
        }* rvalues() {
          for (const e of this.#P()) void 0 === this.#d[e] || this.#x(this.#d[e]) || (yield this.#d[e])
        } [Symbol.iterator]() {
          return this.entries()
        } [Symbol.toStringTag] = "LRUCache";
        find(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          for (const n of this.#O()) {
            const r = this.#d[n],
              o = this.#x(r) ? r.__staleWhileFetching : r;
            if (void 0 !== o && e(o, this.#c[n], this)) return this.get(this.#c[n], t)
          }
        }
        forEach(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
          for (const n of this.#O()) {
            const r = this.#d[n],
              o = this.#x(r) ? r.__staleWhileFetching : r;
            void 0 !== o && e.call(t, o, this.#c[n], this)
          }
        }
        rforEach(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
          for (const n of this.#P()) {
            const r = this.#d[n],
              o = this.#x(r) ? r.__staleWhileFetching : r;
            void 0 !== o && e.call(t, o, this.#c[n], this)
          }
        }
        purgeStale() {
          let e = !1;
          for (const t of this.#P({
              allowStale: !0
            })) this.#E(t) && (this.#D(this.#c[t], "expire"), e = !0);
          return e
        }
        info(e) {
          const t = this.#u.get(e);
          if (void 0 === t) return;
          const n = this.#d[t],
            r = this.#x(n) ? n.__staleWhileFetching : n;
          if (void 0 === r) return;
          const o = {
            value: r
          };
          if (this.#w && this.#b) {
            const e = this.#w[t],
              n = this.#b[t];
            if (e && n) {
              const t = e - (xr.now() - n);
              o.ttl = t, o.start = Date.now()
            }
          }
          return this.#y && (o.size = this.#y[t]), o
        }
        dump() {
          const e = [];
          for (const t of this.#O({
              allowStale: !0
            })) {
            const n = this.#c[t],
              r = this.#d[t],
              o = this.#x(r) ? r.__staleWhileFetching : r;
            if (void 0 === o || void 0 === n) continue;
            const i = {
              value: o
            };
            if (this.#w && this.#b) {
              i.ttl = this.#w[t];
              const e = xr.now() - this.#b[t];
              i.start = Math.floor(Date.now() - e)
            }
            this.#y && (i.size = this.#y[t]), e.unshift([n, i])
          }
          return e
        }
        load(e) {
          this.clear();
          for (const [t, n] of e) {
            if (n.start) {
              const e = Date.now() - n.start;
              n.start = xr.now() - e
            }
            this.set(t, n.value, n)
          }
        }
        set(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (void 0 === t) return this.delete(e), this;
          const {
            ttl: r = this.ttl,
            start: o,
            noDisposeOnSet: i = this.noDisposeOnSet,
            sizeCalculation: a = this.sizeCalculation,
            status: s
          } = n;
          let {
            noUpdateTTL: l = this.noUpdateTTL
          } = n;
          const u = this.#A(e, t, n.size || 0, a);
          if (this.maxEntrySize && u > this.maxEntrySize) return s && (s.set = "miss", s.maxEntrySizeExceeded = !0), this.#D(e, "set"), this;
          let c = 0 === this.#s ? void 0 : this.#u.get(e);
          if (void 0 === c) c = 0 === this.#s ? this.#v : 0 !== this.#g.length ? this.#g.pop() : this.#s === this.#t ? this.#V(!1) : this.#s, this.#c[c] = e, this.#d[c] = t, this.#u.set(e, c), this.#f[this.#v] = c, this.#p[c] = this.#v, this.#v = c, this.#s++, this.#I(c, u, s), s && (s.set = "add"), l = !1;
          else {
            this.#C(c);
            const n = this.#d[c];
            if (t !== n) {
              if (this.#j && this.#x(n)) {
                n.__abortController.abort(new Error("replaced"));
                const {
                  __staleWhileFetching: t
                } = n;
                void 0 === t || i || (this.#_ && this.#r?.(t, e, "set"), this.#k && this.#m?.push([t, e, "set"]))
              } else i || (this.#_ && this.#r?.(n, e, "set"), this.#k && this.#m?.push([n, e, "set"]));
              if (this.#z(c), this.#I(c, u, s), this.#d[c] = t, s) {
                s.set = "replace";
                const e = n && this.#x(n) ? n.__staleWhileFetching : n;
                void 0 !== e && (s.oldValue = e)
              }
            } else s && (s.set = "update")
          }
          if (0 === r || this.#w || this.#T(), this.#w && (l || this.#L(c, r, o), s && this.#R(s, c)), !i && this.#k && this.#m) {
            const e = this.#m;
            let t;
            for (; t = e?.shift();) this.#o?.(...t)
          }
          return this
        }
        pop() {
          try {
            for (; this.#s;) {
              const e = this.#d[this.#h];
              if (this.#V(!0), this.#x(e)) {
                if (e.__staleWhileFetching) return e.__staleWhileFetching
              } else if (void 0 !== e) return e
            }
          } finally {
            if (this.#k && this.#m) {
              const e = this.#m;
              let t;
              for (; t = e?.shift();) this.#o?.(...t)
            }
          }
        }
        #V(e) {
          const t = this.#h,
            n = this.#c[t],
            r = this.#d[t];
          return this.#j && this.#x(r) ? r.__abortController.abort(new Error("evicted")) : (this.#_ || this.#k) && (this.#_ && this.#r?.(r, n, "evict"), this.#k && this.#m?.push([r, n, "evict"])), this.#z(t), e && (this.#c[t] = void 0, this.#d[t] = void 0, this.#g.push(t)), 1 === this.#s ? (this.#h = this.#v = 0, this.#g.length = 0) : this.#h = this.#f[t], this.#u.delete(n), this.#s--, t
        }
        has(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
            updateAgeOnHas: n = this.updateAgeOnHas,
            status: r
          } = t, o = this.#u.get(e);
          if (void 0 !== o) {
            const e = this.#d[o];
            if (this.#x(e) && void 0 === e.__staleWhileFetching) return !1;
            if (!this.#E(o)) return n && this.#M(o), r && (r.has = "hit", this.#R(r, o)), !0;
            r && (r.has = "stale", this.#R(r, o))
          } else r && (r.has = "miss");
          return !1
        }
        peek(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
            allowStale: n = this.allowStale
          } = t, r = this.#u.get(e);
          if (void 0 === r || !n && this.#E(r)) return;
          const o = this.#d[r];
          return this.#x(o) ? o.__staleWhileFetching : o
        }
        #S(e, t, n, r) {
          var o = this;
          const i = void 0 === t ? void 0 : this.#d[t];
          if (this.#x(i)) return i;
          const a = new Pr,
            {
              signal: s
            } = n;
          s?.addEventListener("abort", (() => a.abort(s.reason)), {
            signal: a.signal
          });
          const l = {
              signal: a.signal,
              options: n,
              context: r
            },
            u = function(r) {
              let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              const {
                aborted: s
              } = a.signal, u = n.ignoreFetchAbort && void 0 !== r;
              if (n.status && (s && !i ? (n.status.fetchAborted = !0, n.status.fetchError = a.signal.reason, u && (n.status.fetchAbortIgnored = !0)) : n.status.fetchResolved = !0), s && !u && !i) return c(a.signal.reason);
              const f = d;
              return o.#d[t] === d && (void 0 === r ? f.__staleWhileFetching ? o.#d[t] = f.__staleWhileFetching : o.#D(e, "fetch") : (n.status && (n.status.fetchUpdated = !0), o.set(e, r, l.options))), r
            },
            c = r => {
              const {
                aborted: o
              } = a.signal, i = o && n.allowStaleOnFetchAbort, s = i || n.allowStaleOnFetchRejection, l = s || n.noDeleteOnFetchRejection, u = d;
              if (this.#d[t] === d && (l && void 0 !== u.__staleWhileFetching ? i || (this.#d[t] = u.__staleWhileFetching) : this.#D(e, "fetch")), s) return n.status && void 0 !== u.__staleWhileFetching && (n.status.returnedStale = !0), u.__staleWhileFetching;
              if (u.__returned === u) throw r
            };
          n.status && (n.status.fetchDispatched = !0);
          const d = new Promise(((t, r) => {
              const o = this.#i?.(e, i, l);
              o && o instanceof Promise && o.then((e => t(void 0 === e ? void 0 : e)), r), a.signal.addEventListener("abort", (() => {
                n.ignoreFetchAbort && !n.allowStaleOnFetchAbort || (t(void 0), n.allowStaleOnFetchAbort && (t = e => u(e, !0)))
              }))
            })).then(u, (e => (n.status && (n.status.fetchRejected = !0, n.status.fetchError = e), c(e)))),
            f = Object.assign(d, {
              __abortController: a,
              __staleWhileFetching: i,
              __returned: void 0
            });
          return void 0 === t ? (this.set(e, f, {
            ...l.options,
            status: void 0
          }), t = this.#u.get(e)) : this.#d[t] = f, f
        }
        #x(e) {
          if (!this.#j) return !1;
          const t = e;
          return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof Pr
        }
        async fetch(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
            allowStale: n = this.allowStale,
            updateAgeOnGet: r = this.updateAgeOnGet,
            noDeleteOnStaleGet: o = this.noDeleteOnStaleGet,
            ttl: i = this.ttl,
            noDisposeOnSet: a = this.noDisposeOnSet,
            size: s = 0,
            sizeCalculation: l = this.sizeCalculation,
            noUpdateTTL: u = this.noUpdateTTL,
            noDeleteOnFetchRejection: c = this.noDeleteOnFetchRejection,
            allowStaleOnFetchRejection: d = this.allowStaleOnFetchRejection,
            ignoreFetchAbort: f = this.ignoreFetchAbort,
            allowStaleOnFetchAbort: p = this.allowStaleOnFetchAbort,
            context: h,
            forceRefresh: v = !1,
            status: g,
            signal: m
          } = t;
          if (!this.#j) return g && (g.fetch = "get"), this.get(e, {
            allowStale: n,
            updateAgeOnGet: r,
            noDeleteOnStaleGet: o,
            status: g
          });
          const y = {
            allowStale: n,
            updateAgeOnGet: r,
            noDeleteOnStaleGet: o,
            ttl: i,
            noDisposeOnSet: a,
            size: s,
            sizeCalculation: l,
            noUpdateTTL: u,
            noDeleteOnFetchRejection: c,
            allowStaleOnFetchRejection: d,
            allowStaleOnFetchAbort: p,
            ignoreFetchAbort: f,
            status: g,
            signal: m
          };
          let b = this.#u.get(e);
          if (void 0 === b) {
            g && (g.fetch = "miss");
            const t = this.#S(e, b, y, h);
            return t.__returned = t
          } {
            const t = this.#d[b];
            if (this.#x(t)) {
              const e = n && void 0 !== t.__staleWhileFetching;
              return g && (g.fetch = "inflight", e && (g.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t
            }
            const o = this.#E(b);
            if (!v && !o) return g && (g.fetch = "hit"), this.#C(b), r && this.#M(b), g && this.#R(g, b), t;
            const i = this.#S(e, b, y, h),
              a = void 0 !== i.__staleWhileFetching && n;
            return g && (g.fetch = o ? "stale" : "refresh", a && o && (g.returnedStale = !0)), a ? i.__staleWhileFetching : i.__returned = i
          }
        }
        async forceFetch(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const n = await this.fetch(e, t);
          if (void 0 === n) throw new Error("fetch() returned undefined");
          return n
        }
        memo(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const n = this.#a;
          if (!n) throw new Error("no memoMethod provided to constructor");
          const {
            context: r,
            forceRefresh: o,
            ...i
          } = t, a = this.get(e, i);
          if (!o && void 0 !== a) return a;
          const s = n(e, a, {
            options: i,
            context: r
          });
          return this.set(e, s, i), s
        }
        get(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
            allowStale: n = this.allowStale,
            updateAgeOnGet: r = this.updateAgeOnGet,
            noDeleteOnStaleGet: o = this.noDeleteOnStaleGet,
            status: i
          } = t, a = this.#u.get(e);
          if (void 0 !== a) {
            const t = this.#d[a],
              s = this.#x(t);
            return i && this.#R(i, a), this.#E(a) ? (i && (i.get = "stale"), s ? (i && n && void 0 !== t.__staleWhileFetching && (i.returnedStale = !0), n ? t.__staleWhileFetching : void 0) : (o || this.#D(e, "expire"), i && n && (i.returnedStale = !0), n ? t : void 0)) : (i && (i.get = "hit"), s ? t.__staleWhileFetching : (this.#C(a), r && this.#M(a), t))
          }
          i && (i.get = "miss")
        }
        #q(e, t) {
          this.#p[t] = e, this.#f[e] = t
        }
        #C(e) {
          e !== this.#v && (e === this.#h ? this.#h = this.#f[e] : this.#q(this.#p[e], this.#f[e]), this.#q(this.#v, e), this.#v = e)
        }
        delete(e) {
          return this.#D(e, "delete")
        }
        #D(e, t) {
          let n = !1;
          if (0 !== this.#s) {
            const r = this.#u.get(e);
            if (void 0 !== r)
              if (n = !0, 1 === this.#s) this.#B(t);
              else {
                this.#z(r);
                const n = this.#d[r];
                if (this.#x(n) ? n.__abortController.abort(new Error("deleted")) : (this.#_ || this.#k) && (this.#_ && this.#r?.(n, e, t), this.#k && this.#m?.push([n, e, t])), this.#u.delete(e), this.#c[r] = void 0, this.#d[r] = void 0, r === this.#v) this.#v = this.#p[r];
                else if (r === this.#h) this.#h = this.#f[r];
                else {
                  const e = this.#p[r];
                  this.#f[e] = this.#f[r];
                  const t = this.#f[r];
                  this.#p[t] = this.#p[r]
                }
                this.#s--, this.#g.push(r)
              }
          }
          if (this.#k && this.#m?.length) {
            const e = this.#m;
            let t;
            for (; t = e?.shift();) this.#o?.(...t)
          }
          return n
        }
        clear() {
          return this.#B("delete")
        }
        #B(e) {
          for (const t of this.#P({
              allowStale: !0
            })) {
            const n = this.#d[t];
            if (this.#x(n)) n.__abortController.abort(new Error("deleted"));
            else {
              const r = this.#c[t];
              this.#_ && this.#r?.(n, r, e), this.#k && this.#m?.push([n, r, e])
            }
          }
          if (this.#u.clear(), this.#d.fill(void 0), this.#c.fill(void 0), this.#w && this.#b && (this.#w.fill(0), this.#b.fill(0)), this.#y && this.#y.fill(0), this.#h = 0, this.#v = 0, this.#g.length = 0, this.#l = 0, this.#s = 0, this.#k && this.#m) {
            const e = this.#m;
            let t;
            for (; t = e?.shift();) this.#o?.(...t)
          }
        }
      }
      n(98398);
      var Rr = new Set,
        zr = [],
        Ar = [];
      fn || (e => {
        if (!e) throw new Error('No adapter provided when calling "setAdapter"');
        fn = !0, dn.push(e)
      })({
        appendCss: e => {
          Ar.push(e)
        },
        registerClassName: e => {
          Rr.add(e)
        },
        registerComposition: e => {
          zr.push(e)
        },
        markCompositionUsed: () => {},
        onEndFileScope: e => {
          var t = function(e) {
            var {
              localClassNames: t,
              cssObjs: n,
              composedClassLists: r
            } = e, o = new _r(t, r);
            for (var i of n) o.processCssObj(i);
            return o.toCss()
          }({
            localClassNames: Array.from(Rr),
            composedClassLists: zr,
            cssObjs: Ar
          }).join("\n");
          (e => {
            var {
              fileScope: t,
              css: n
            } = e, r = t.packageName ? [t.packageName, t.filePath].join("/") : t.filePath, o = nn[r];
            if (!o) {
              var i = document.createElement("style");
              t.packageName && i.setAttribute("data-package", t.packageName), i.setAttribute("data-file", t.filePath), i.setAttribute("type", "text/css"), o = nn[r] = i, document.head.appendChild(i)
            }
            o.innerHTML = n
          })({
            fileScope: e,
            css: t
          }), Ar = []
        },
        getIdentOption: () => "short"
      });
      new Mr({
        max: 500
      });
      var Ir = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        Vr = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        Fr = "foundry_nk7jgu_nu8bkp2",
        qr = "foundry_nk7jgu_nu8bkp4",
        Br = "foundry_nk7jgu_nu8bkp1",
        $r = "foundry_nk7jgu_nu8bkp3",
        Hr = "--foundry_65afb887",
        Wr = "foundry_nk7jgu_nu8bkp0";
      const Gr = (0, s.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: Vr,
          platformScaleBreakpoints: Ir,
          locale: "en-US"
        }),
        Ur = () => {
          const {
            platformScale: e
          } = (0, s.useContext)(Gr);
          return e
        },
        Kr = (e, t) => "dark" === e ? "more" === t ? qr : Fr : "more" === t ? $r : Br;
      const Xr = () => a.X3 ? null : document.body;

      function Yr(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Zr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Qr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Zr(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Yr(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zr(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Jr(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }(0, s.forwardRef)((({
        children: e,
        className: t,
        container: n = Xr(),
        asChild: r,
        colorScheme: o,
        defaultColorScheme: u,
        contrastMode: c,
        defaultContrastMode: d,
        platformScaleBreakpoints: f,
        platformScaleRatios: p,
        defaultPlatformScale: h,
        platformScale: v,
        locale: g = "en-US"
      }, m) => {
        const y = (0, s.useRef)(null),
          b = F(y, m),
          w = (0, s.useRef)(n),
          {
            ratio: _,
            scale: j
          } = function(e) {
            const t = (0, s.useMemo)((() => ({
                ...Vr,
                ...e.platformScaleRatios
              })), [e.platformScaleRatios]),
              n = (0, s.useMemo)((() => ({
                ...Ir,
                ...e.platformScaleBreakpoints
              })), [e.platformScaleBreakpoints]),
              [r, o] = (0, s.useState)(e.platformScale || e.defaultPlatformScale),
              i = (0, s.useRef)([]),
              l = () => {
                if (!a.X3) {
                  for (const {
                      handler: e,
                      matchMedia: t
                    }
                    of i.current) t.removeEventListener("change", e);
                  i.current = []
                }
              };
            return (0, s.useEffect)((() => (e.platformScale ? o(e.platformScale) : (() => {
              if (!a.X3) {
                l();
                for (const e in n) {
                  const t = window.matchMedia(n[e]),
                    r = t => {
                      t.matches && o(e)
                    };
                  t.addEventListener("change", r), t.matches && o(e), i.current.push({
                    handler: r,
                    matchMedia: t
                  })
                }
              }
            })(), l)), [n, e.platformScale]), {
              scale: r,
              ratio: t[r]
            }
          }({
            platformScaleBreakpoints: f,
            platformScaleRatios: p,
            defaultPlatformScale: h,
            platformScale: v
          }),
          {
            appearanceClass: k,
            otherAppearanceClasses: x,
            providerColor: S,
            providerContrast: C
          } = function({
            colorScheme: e,
            defaultColorScheme: t = "dark",
            contrastMode: n,
            defaultContrastMode: r = "normal"
          }) {
            const o = I("(prefers-color-scheme: light)"),
              i = I("(prefers-color-scheme: dark)"),
              a = I("(prefers-contrast: more)"),
              l = "system" !== e && e || o && "light" || i && "dark" || t,
              u = n || a && "more" || r,
              c = (0, s.useMemo)((() => Kr(l, u)), [l, u]),
              d = (0, s.useMemo)((() => ((e, t) => {
                const n = Kr(e, t);
                return [Br, Fr, $r, qr].filter((e => e !== n))
              })(l, u)), [l, u]);
            return {
              appearanceClass: c,
              otherAppearanceClasses: d,
              providerColor: l,
              providerContrast: u
            }
          }({
            colorScheme: o,
            defaultColorScheme: u,
            contrastMode: c,
            defaultContrastMode: d
          });
        return ((e, t, n, r, o) => {
          const i = V(o),
            a = V(e.current);
          (0, s.useEffect)((() => {
            e.current?.classList.contains(Wr) || e.current?.classList.add(Wr), e.current?.classList.add(n), e.current?.classList.remove(...r), i && o && e.current?.classList.contains(i) ? e.current?.classList.replace(i, o) : i && !o && e.current?.classList.contains(i) ? e.current?.classList.remove(i) : o && e.current?.classList.add(o)
          }), [n, o]), (0, s.useEffect)((() => {
            e.current?.style.setProperty(Hr, t.toString())
          }), [t]), (0, s.useEffect)((() => {
            a?.classList.remove(Wr), a?.classList.remove(n), a?.style.removeProperty(Hr), o && a?.classList.remove(o)
          }), [a])
        })(r ? y : w, _, k, x, t), (0, i.jsx)(Gr.Provider, {
          value: {
            locale: g,
            defaultColorScheme: u,
            colorScheme: S,
            defaultContrastMode: d,
            contrastMode: C,
            defaultPlatformScale: h,
            platformScale: j,
            platformScaleRatios: p,
            platformScaleBreakpoints: f
          },
          children: r ? (0, i.jsx)(l.Slot, {
            ref: b,
            children: e
          }) : e
        })
      }));
      var eo = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        to = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Qr(Qr({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) eo(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Jr(e.variantClassNames, (e => Jr(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        no = to({
          defaultClassName: "foundry_nk7jgu_8kowh41 foundry_nk7jgu_1d5mo5m0 foundry_nk7jgu_17pcofy0",
          variantClassNames: {
            appearance: {
              primary: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua1",
              secondary: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua2",
              tertiary: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua3",
              ghost: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua4",
              danger: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua6",
              information: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua5"
            },
            size: {
              MD: "foundry_nk7jgu_17pcofy8 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdy foundry_nk7jgu_tdsdcd11",
              LG: "foundry_nk7jgu_17pcofy9 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd11"
            },
            fullWidth: {
              true: "foundry_nk7jgu_17pcofya",
              false: "foundry_nk7jgu_17pcofyb"
            },
            iconLeft: {
              true: "foundry_nk7jgu_17pcofyc",
              false: "foundry_nk7jgu_17pcofyd"
            },
            iconRight: {
              true: "foundry_nk7jgu_17pcofye",
              false: "foundry_nk7jgu_17pcofyf"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              size: "MD",
              iconLeft: !0
            }, "foundry_nk7jgu_17pcofyg"],
            [{
              size: "MD",
              iconRight: !0
            }, "foundry_nk7jgu_17pcofyh"],
            [{
              size: "LG",
              iconLeft: !0
            }, "foundry_nk7jgu_17pcofyi"],
            [{
              size: "LG",
              iconRight: !0
            }, "foundry_nk7jgu_17pcofyj"],
            [{
              size: "MD",
              appearance: "ghost"
            }, "foundry_nk7jgu_17pcofyk"],
            [{
              size: "LG",
              appearance: "ghost"
            }, "foundry_nk7jgu_17pcofyl"]
          ]
        }),
        ro = to({
          defaultClassName: "foundry_nk7jgu_17pcofyn",
          variantClassNames: {
            fullWidth: {
              true: "foundry_nk7jgu_17pcofyo",
              false: "foundry_nk7jgu_17pcofyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, s.forwardRef)((({
        testId: e,
        asChild: t,
        className: n,
        children: r,
        onClick: o,
        iconLeft: u,
        iconLeftLabel: c,
        iconRight: d,
        iconRightLabel: f,
        appearance: p,
        size: h = "MD",
        fullWidth: v = !1,
        ...g
      }, m) => {
        const y = (0, s.useRef)(null),
          b = F(y, m),
          w = Ur(),
          _ = "string" == typeof h ? h : h?.[w] ?? h.default ?? "MD",
          {
            events: j,
            others: k
          } = (0, a.bZ)(g, {
            onPress: !1
          }),
          {
            buttonProps: x,
            isPressed: S
          } = tn({
            ...k,
            elementType: "button",
            preventFocusOnPress: !0,
            onPress: e => k.onPress?.(e) ?? o?.(e)
          }, y),
          C = (0, a.v6)({
            ...j,
            role: "button",
            "data-pressed": S,
            "data-testid": e,
            className: no({
              appearance: p,
              size: _,
              fullWidth: v,
              iconLeft: !!u,
              iconRight: !!d
            })
          }, {
            ...x,
            className: n
          }),
          O = u && z[u],
          P = d && z[d],
          E = t ? l.Slot : "button",
          N = v && (P || P && O);
        return (0, i.jsxs)(E, {
          ref: b,
          ...C,
          children: [N && (0, i.jsx)("div", {
            className: "foundry_nk7jgu_17pcofyq"
          }), O && (0, i.jsx)(O, {
            label: c || "",
            size: _,
            className: "foundry_nk7jgu_17pcofym"
          }), (0, i.jsx)(l.Slottable, {
            children: r
          }), P && (0, i.jsx)(P, {
            label: f || "",
            size: _,
            className: ro({
              fullWidth: v
            })
          })]
        })
      }));
      var oo = _o(),
        io = e => mo(e, oo),
        ao = _o();
      io.write = e => mo(e, ao);
      var so = _o();
      io.onStart = e => mo(e, so);
      var lo = _o();
      io.onFrame = e => mo(e, lo);
      var uo = _o();
      io.onFinish = e => mo(e, uo);
      var co = [];
      io.setTimeout = (e, t) => {
        const n = io.now() + t,
          r = () => {
            const e = co.findIndex((e => e.cancel == r));
            ~e && co.splice(e, 1), vo -= ~e ? 1 : 0
          },
          o = {
            time: n,
            handler: e,
            cancel: r
          };
        return co.splice(fo(n), 0, o), vo += 1, yo(), o
      };
      var fo = e => ~(~co.findIndex((t => t.time > e)) || ~co.length);
      io.cancel = e => {
        so.delete(e), lo.delete(e), uo.delete(e), oo.delete(e), ao.delete(e)
      }, io.sync = e => {
        go = !0, io.batchedUpdates(e), go = !1
      }, io.throttle = e => {
        let t;

        function n() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function r(...e) {
          t = e, io.onStart(n)
        }
        return r.handler = e, r.cancel = () => {
          so.delete(n), t = null
        }, r
      };
      var po = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      io.use = e => po = e, io.now = "undefined" != typeof performance ? () => performance.now() : Date.now, io.batchedUpdates = e => e(), io.catch = console.error, io.frameLoop = "always", io.advance = () => {
        "demand" !== io.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : wo()
      };
      var ho = -1,
        vo = 0,
        go = !1;

      function mo(e, t) {
        go ? (t.delete(e), e(0)) : (t.add(e), yo())
      }

      function yo() {
        ho < 0 && (ho = 0, "demand" !== io.frameLoop && po(bo))
      }

      function bo() {
        ~ho && (po(bo), io.batchedUpdates(wo))
      }

      function wo() {
        const e = ho;
        ho = io.now();
        const t = fo(ho);
        t && (jo(co.splice(0, t), (e => e.handler())), vo -= t), vo ? (so.flush(), oo.flush(e ? Math.min(64, ho - e) : 16.667), lo.flush(), ao.flush(), uo.flush()) : ho = -1
      }

      function _o() {
        let e = new Set,
          t = e;
        return {
          add(n) {
            vo += t != e || e.has(n) ? 0 : 1, e.add(n)
          },
          delete: n => (vo -= t == e && e.has(n) ? 1 : 0, e.delete(n)),
          flush(n) {
            t.size && (e = new Set, vo -= t.size, jo(t, (t => t(n) && e.add(t))), vo += e.size, t = e)
          }
        }
      }

      function jo(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            io.catch(e)
          }
        }))
      }
      var ko = Object.defineProperty,
        xo = {};

      function So() {}((e, t) => {
        for (var n in t) ko(e, n, {
          get: t[n],
          enumerable: !0
        })
      })(xo, {
        assign: () => Vo,
        colors: () => zo,
        createStringInterpolator: () => Lo,
        skipAnimation: () => Ao,
        to: () => Do,
        willAdvance: () => Io
      });
      var Co = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Oo(e, t) {
        if (Co.arr(e)) {
          if (!Co.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
          return !0
        }
        return e === t
      }
      var Po = (e, t) => e.forEach(t);

      function Eo(e, t, n) {
        if (Co.arr(e))
          for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
        else
          for (const r in e) e.hasOwnProperty(r) && t.call(n, e[r], r)
      }
      var No = e => Co.und(e) ? [] : Co.arr(e) ? e : [e];

      function To(e, t) {
        if (e.size) {
          const n = Array.from(e);
          e.clear(), Po(n, t)
        }
      }
      var Lo, Do, Mo = (e, ...t) => To(e, (e => e(...t))),
        Ro = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        zo = null,
        Ao = !1,
        Io = So,
        Vo = e => {
          e.to && (Do = e.to), e.now && (io.now = e.now), void 0 !== e.colors && (zo = e.colors), null != e.skipAnimation && (Ao = e.skipAnimation), e.createStringInterpolator && (Lo = e.createStringInterpolator), e.requestAnimationFrame && io.use(e.requestAnimationFrame), e.batchedUpdates && (io.batchedUpdates = e.batchedUpdates), e.willAdvance && (Io = e.willAdvance), e.frameLoop && (io.frameLoop = e.frameLoop)
        },
        Fo = new Set,
        qo = [],
        Bo = [],
        $o = 0,
        Ho = {
          get idle() {
            return !Fo.size && !qo.length
          },
          start(e) {
            $o > e.priority ? (Fo.add(e), io.onStart(Wo)) : (Go(e), io(Ko))
          },
          advance: Ko,
          sort(e) {
            if ($o) io.onFrame((() => Ho.sort(e)));
            else {
              const t = qo.indexOf(e);
              ~t && (qo.splice(t, 1), Uo(e))
            }
          },
          clear() {
            qo = [], Fo.clear()
          }
        };

      function Wo() {
        Fo.forEach(Go), Fo.clear(), io(Ko)
      }

      function Go(e) {
        qo.includes(e) || Uo(e)
      }

      function Uo(e) {
        qo.splice(function(t) {
          const n = t.findIndex((t => t.priority > e.priority));
          return n < 0 ? t.length : n
        }(qo), 0, e)
      }

      function Ko(e) {
        const t = Bo;
        for (let n = 0; n < qo.length; n++) {
          const r = qo[n];
          $o = r.priority, r.idle || (Io(r), r.advance(e), r.idle || t.push(r))
        }
        return $o = 0, (Bo = qo).length = 0, (qo = t).length > 0
      }
      var Xo = "[-+]?\\d*\\.?\\d+",
        Yo = Xo + "%";

      function Zo(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Qo = new RegExp("rgb" + Zo(Xo, Xo, Xo)),
        Jo = new RegExp("rgba" + Zo(Xo, Xo, Xo, Xo)),
        ei = new RegExp("hsl" + Zo(Xo, Yo, Yo)),
        ti = new RegExp("hsla" + Zo(Xo, Yo, Yo, Xo)),
        ni = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ri = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        oi = /^#([0-9a-fA-F]{6})$/,
        ii = /^#([0-9a-fA-F]{8})$/;

      function ai(e, t, n) {
        return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
      }

      function si(e, t, n) {
        const r = n < .5 ? n * (1 + t) : n + t - n * t,
          o = 2 * n - r,
          i = ai(o, r, e + 1 / 3),
          a = ai(o, r, e),
          s = ai(o, r, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function li(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function ui(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function ci(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function di(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function fi(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = oi.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : zo && void 0 !== zo[e] ? zo[e] : (t = Qo.exec(e)) ? (li(t[1]) << 24 | li(t[2]) << 16 | li(t[3]) << 8 | 255) >>> 0 : (t = Jo.exec(e)) ? (li(t[1]) << 24 | li(t[2]) << 16 | li(t[3]) << 8 | ci(t[4])) >>> 0 : (t = ni.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = ii.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ri.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = ei.exec(e)) ? (255 | si(ui(t[1]), di(t[2]), di(t[3]))) >>> 0 : (t = ti.exec(e)) ? (si(ui(t[1]), di(t[2]), di(t[3])) | ci(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var pi = (e, t, n) => {
          if (Co.fun(e)) return e;
          if (Co.arr(e)) return pi({
            range: e,
            output: t,
            extrapolate: n
          });
          if (Co.str(e.output[0])) return Lo(e);
          const r = e,
            o = r.output,
            i = r.range || [0, 1],
            a = r.extrapolateLeft || r.extrapolate || "extend",
            s = r.extrapolateRight || r.extrapolate || "extend",
            l = r.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
              return n - 1
            }(e, i);
            return function(e, t, n, r, o, i, a, s, l) {
              let u = l ? l(e) : e;
              if (u < t) {
                if ("identity" === a) return u;
                "clamp" === a && (u = t)
              }
              if (u > n) {
                if ("identity" === s) return u;
                "clamp" === s && (u = n)
              }
              return r === o ? r : t === n ? e <= t ? r : o : (t === -1 / 0 ? u = -u : n === 1 / 0 ? u -= t : u = (u - t) / (n - t), u = i(u), r === -1 / 0 ? u = -u : o === 1 / 0 ? u += r : u = u * (o - r) + r, u)
            }(e, i[t], i[t + 1], o[t], o[t + 1], l, a, s, r.map)
          }
        },
        hi = 1.70158,
        vi = 1.525 * hi,
        gi = hi + 1,
        mi = 2 * Math.PI / 3,
        yi = 2 * Math.PI / 4.5,
        bi = e => {
          const t = 7.5625,
            n = 2.75;
          return e < 1 / n ? t * e * e : e < 2 / n ? t * (e -= 1.5 / n) * e + .75 : e < 2.5 / n ? t * (e -= 2.25 / n) * e + .9375 : t * (e -= 2.625 / n) * e + .984375
        },
        wi = {
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
          easeInBack: e => gi * e * e * e - hi * e * e,
          easeOutBack: e => 1 + gi * Math.pow(e - 1, 3) + hi * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - vi) / 2 : (Math.pow(2 * e - 2, 2) * ((vi + 1) * (2 * e - 2) + vi) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * mi),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * mi) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * yi) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * yi) / 2 + 1,
          easeInBounce: e => 1 - bi(1 - e),
          easeOutBounce: bi,
          easeInOutBounce: e => e < .5 ? (1 - bi(1 - 2 * e)) / 2 : (1 + bi(2 * e - 1)) / 2,
          steps: (e, t = "end") => n => {
            const r = (n = "end" === t ? Math.min(n, .999) : Math.max(n, .001)) * e;
            return ((e, t, n) => Math.min(Math.max(n, 0), 1))(0, 0, ("end" === t ? Math.floor(r) : Math.ceil(r)) / e)
          }
        },
        _i = Symbol.for("FluidValue.get"),
        ji = Symbol.for("FluidValue.observers"),
        ki = e => Boolean(e && e[_i]),
        xi = e => e && e[_i] ? e[_i]() : e,
        Si = e => e[ji] || null;

      function Ci(e, t) {
        const n = e[ji];
        n && n.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var Oi = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Pi(this, e)
          }
        },
        Pi = (e, t) => Li(e, _i, t);

      function Ei(e, t) {
        if (e[_i]) {
          let n = e[ji];
          n || Li(e, ji, n = new Set), n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t))
        }
        return t
      }

      function Ni(e, t) {
        const n = e[ji];
        if (n && n.has(t)) {
          const r = n.size - 1;
          r ? n.delete(t) : e[ji] = null, e.observerRemoved && e.observerRemoved(r, t)
        }
      }
      var Ti, Li = (e, t, n) => Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          configurable: !0
        }),
        Di = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Mi = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Ri = new RegExp(`(${Di.source})(%|[a-z]+)`, "i"),
        zi = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Ai = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Ii = e => {
          const [t, n] = Vi(e);
          if (!t || Ro()) return e;
          const r = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (r) return r.trim();
          if (n && n.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(n) || e
          }
          return n && Ai.test(n) ? Ii(n) : n || e
        },
        Vi = e => {
          const t = Ai.exec(e);
          if (!t) return [, ];
          const [, n, r] = t;
          return [n, r]
        },
        Fi = (e, t, n, r, o) => `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${o})`,
        qi = e => {
          Ti || (Ti = zo ? new RegExp(`(${Object.keys(zo).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => xi(e).replace(Ai, Ii).replace(Mi, fi).replace(Ti, fi))),
            n = t.map((e => e.match(Di).map(Number))),
            r = n[0].map(((e, t) => n.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))),
            o = r.map((t => pi({
              ...e,
              output: t
            })));
          return e => {
            const n = !Ri.test(t[0]) && t.find((e => Ri.test(e)))?.replace(Di, "");
            let r = 0;
            return t[0].replace(Di, (() => `${o[r++](e)}${n||""}`)).replace(zi, Fi)
          }
        },
        Bi = "react-spring: ",
        $i = e => {
          const t = e;
          let n = !1;
          if ("function" != typeof t) throw new TypeError(`${Bi}once requires a function parameter`);
          return (...e) => {
            n || (t(...e), n = !0)
          }
        },
        Hi = $i(console.warn),
        Wi = $i(console.warn);

      function Gi(e) {
        return Co.str(e) && ("#" == e[0] || /\d/.test(e) || !Ro() && Ai.test(e) || e in (zo || {}))
      }
      var Ui = Ro() ? s.useEffect : s.useLayoutEffect;

      function Ki() {
        const e = (0, s.useState)()[1],
          t = (() => {
            const e = (0, s.useRef)(!1);
            return Ui((() => (e.current = !0, () => {
              e.current = !1
            })), []), e
          })();
        return () => {
          t.current && e(Math.random())
        }
      }
      var Xi = e => (0, s.useEffect)(e, Yi),
        Yi = [];

      function Zi(e) {
        const t = (0, s.useRef)();
        return (0, s.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var Qi = Symbol.for("Animated:node"),
        Ji = e => e && e[Qi],
        ea = (e, t) => {
          return n = e, r = Qi, o = t, Object.defineProperty(n, r, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var n, r, o
        },
        ta = e => e && e[Qi] && e[Qi].getPayload(),
        na = class {
          constructor() {
            ea(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        ra = class extends na {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, Co.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new ra(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return Co.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, Co.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        oa = class extends ra {
          constructor(e) {
            super(0), this._string = null, this._toString = pi({
              output: [e, e]
            })
          }
          static create(e) {
            return new oa(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (Co.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = pi({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        ia = {
          dependencies: null
        },
        aa = class extends na {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return Eo(this.source, ((n, r) => {
              var o;
              (o = n) && o[Qi] === o ? t[r] = n.getValue(e) : ki(n) ? t[r] = xi(n) : e || (t[r] = n)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && Po(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return Eo(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            ia.dependencies && ki(e) && ia.dependencies.add(e);
            const t = ta(e);
            t && Po(t, (e => this.add(e)))
          }
        },
        sa = class extends aa {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new sa(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, n) => t.setValue(e[n]))).some(Boolean) : (super.setValue(e.map(la)), !0)
          }
        };

      function la(e) {
        return (Gi(e) ? oa : ra).create(e)
      }

      function ua(e) {
        const t = Ji(e);
        return t ? t.constructor : Co.arr(e) ? sa : Gi(e) ? oa : ra
      }
      var ca = (e, t) => {
          const n = !Co.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, s.forwardRef)(((r, o) => {
            const i = (0, s.useRef)(null),
              a = n && (0, s.useCallback)((e => {
                i.current = function(e, t) {
                  return e && (Co.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [l, u] = function(e, t) {
                const n = new Set;
                return ia.dependencies = n, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new aa(e), ia.dependencies = null, [e, n]
              }(r, t),
              c = Ki(),
              d = () => {
                const e = i.current;
                n && !e || !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && c()
              },
              f = new da(d, u),
              p = (0, s.useRef)();
            Ui((() => (p.current = f, Po(u, (e => Ei(e, f))), () => {
              p.current && (Po(p.current.deps, (e => Ni(e, p.current))), io.cancel(p.current.update))
            }))), (0, s.useEffect)(d, []), Xi((() => () => {
              const e = p.current;
              Po(e.deps, (t => Ni(t, e)))
            }));
            const h = t.getComponentProps(l.getValue());
            return s.createElement(e, {
              ...h,
              ref: a
            })
          }))
        },
        da = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && io.write(this.update)
          }
        },
        fa = Symbol.for("AnimatedComponent"),
        pa = e => Co.str(e) ? e : e && Co.str(e.displayName) ? e.displayName : Co.fun(e) && e.name || null;

      function ha(e, ...t) {
        return Co.fun(e) ? e(...t) : e
      }
      var va = (e, t) => !0 === e || !!(t && e && (Co.fun(e) ? e(t) : No(e).includes(t))),
        ga = (e, t) => Co.obj(e) ? t && e[t] : e,
        ma = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        ya = e => e,
        ba = (e, t = ya) => {
          let n = wa;
          e.default && !0 !== e.default && (e = e.default, n = Object.keys(e));
          const r = {};
          for (const o of n) {
            const n = t(e[o], o);
            Co.und(n) || (r[o] = n)
          }
          return r
        },
        wa = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        _a = {
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

      function ja(e) {
        const t = function(e) {
          const t = {};
          let n = 0;
          if (Eo(e, ((e, r) => {
              _a[r] || (t[r] = e, n++)
            })), n) return t
        }(e);
        if (t) {
          const n = {
            to: t
          };
          return Eo(e, ((e, r) => r in t || (n[r] = e))), n
        }
        return {
          ...e
        }
      }

      function ka(e) {
        return e = xi(e), Co.arr(e) ? e.map(ka) : Gi(e) ? xo.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function xa(e) {
        return Co.fun(e) || Co.arr(e) && Co.obj(e[0])
      }
      var Sa = {
          tension: 170,
          friction: 26,
          mass: 1,
          damping: 1,
          easing: wi.linear,
          clamp: !1
        },
        Ca = class {
          constructor() {
            this.velocity = 0, Object.assign(this, Sa)
          }
        };

      function Oa(e, t) {
        if (Co.und(t.decay)) {
          const n = !Co.und(t.tension) || !Co.und(t.friction);
          !n && Co.und(t.frequency) && Co.und(t.damping) && Co.und(t.mass) || (e.duration = void 0, e.decay = void 0), n && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Pa = [],
        Ea = class {
          constructor() {
            this.changed = !1, this.values = Pa, this.toValues = null, this.fromValues = Pa, this.config = new Ca, this.immediate = !1
          }
        };

      function Na(e, {
        key: t,
        props: n,
        defaultProps: r,
        state: o,
        actions: i
      }) {
        return new Promise(((a, s) => {
          let l, u, c = va(n.cancel ?? r?.cancel, t);
          if (c) p();
          else {
            Co.und(n.pause) || (o.paused = va(n.pause, t));
            let e = r?.pause;
            !0 !== e && (e = o.paused || va(e, t)), l = ha(n.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(u), u.cancel(), l = u.time - io.now()
          }

          function f() {
            l > 0 && !xo.skipAnimation ? (o.delayed = !0, u = io.setTimeout(p, l), o.pauseQueue.add(d), o.timeouts.add(u)) : p()
          }

          function p() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(u), e <= (o.cancelId || 0) && (c = !0);
            try {
              i.start({
                ...n,
                callId: e,
                cancel: c
              }, a)
            } catch (e) {
              s(e)
            }
          }
        }))
      }
      var Ta = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? Ma(e.get()) : t.every((e => e.noop)) ? La(e.get()) : Da(e.get(), t.every((e => e.finished))),
        La = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        Da = (e, t, n = !1) => ({
          value: e,
          finished: t,
          cancelled: n
        }),
        Ma = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function Ra(e, t, n, r) {
        const {
          callId: o,
          parentId: i,
          onRest: a
        } = t, {
          asyncTo: s,
          promise: l
        } = n;
        return i || e !== s || t.reset ? n.promise = (async () => {
          n.asyncId = o, n.asyncTo = e;
          const u = ba(t, ((e, t) => "onRest" === t ? void 0 : e));
          let c, d;
          const f = new Promise(((e, t) => (c = e, d = t))),
            p = e => {
              const t = o <= (n.cancelId || 0) && Ma(r) || o !== n.asyncId && Da(r, !1);
              if (t) throw e.result = t, d(e), e
            },
            h = (e, t) => {
              const i = new Aa,
                a = new Ia;
              return (async () => {
                if (xo.skipAnimation) throw za(n), a.result = Da(r, !1), d(a), a;
                p(i);
                const s = Co.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, Eo(u, ((e, t) => {
                  Co.und(s[t]) && (s[t] = e)
                }));
                const l = await r.start(s);
                return p(i), n.paused && await new Promise((e => {
                  n.resumeQueue.add(e)
                })), l
              })()
            };
          let v;
          if (xo.skipAnimation) return za(n), Da(r, !1);
          try {
            let t;
            t = Co.arr(e) ? (async e => {
              for (const t of e) await h(t)
            })(e) : Promise.resolve(e(h, r.stop.bind(r))), await Promise.all([t.then(c), f]), v = Da(r.get(), !0, !1)
          } catch (e) {
            if (e instanceof Aa) v = e.result;
            else {
              if (!(e instanceof Ia)) throw e;
              v = e.result
            }
          } finally {
            o == n.asyncId && (n.asyncId = i, n.asyncTo = i ? s : void 0, n.promise = i ? l : void 0)
          }
          return Co.fun(a) && io.batchedUpdates((() => {
            a(v, r, r.item)
          })), v
        })() : l
      }

      function za(e, t) {
        To(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var Aa = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        Ia = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        Va = e => e instanceof qa,
        Fa = 1,
        qa = class extends Oi {
          constructor() {
            super(...arguments), this.id = Fa++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = Ji(this);
            return e && e.getValue()
          }
          to(...e) {
            return xo.to(this, e)
          }
          interpolate(...e) {
            return Hi(`${Bi}The "interpolate" function is deprecated in v9 (use "to" instead)`), xo.to(this, e)
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
            Ci(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || Ho.sort(this), Ci(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        Ba = Symbol.for("SpringPhase"),
        $a = e => (1 & e[Ba]) > 0,
        Ha = e => (2 & e[Ba]) > 0,
        Wa = e => (4 & e[Ba]) > 0,
        Ga = (e, t) => t ? e[Ba] |= 3 : e[Ba] &= -3,
        Ua = (e, t) => t ? e[Ba] |= 4 : e[Ba] &= -5,
        Ka = class extends qa {
          constructor(e, t) {
            if (super(), this.animation = new Ea, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !Co.und(e) || !Co.und(t)) {
              const n = Co.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              Co.und(n.default) && (n.default = !0), this.start(n)
            }
          }
          get idle() {
            return !(Ha(this) || this._state.asyncTo) || Wa(this)
          }
          get goal() {
            return xi(this.animation.to)
          }
          get velocity() {
            const e = Ji(this);
            return e instanceof ra ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return $a(this)
          }
          get isAnimating() {
            return Ha(this)
          }
          get isPaused() {
            return Wa(this)
          }
          get isDelayed() {
            return this._state.delayed
          }
          advance(e) {
            let t = !0,
              n = !1;
            const r = this.animation;
            let {
              toValues: o
            } = r;
            const {
              config: i
            } = r, a = ta(r.to);
            !a && ki(r.to) && (o = No(xi(r.to))), r.values.forEach(((s, l) => {
              if (s.done) return;
              const u = s.constructor == oa ? 1 : a ? a[l].lastPosition : o[l];
              let c = r.immediate,
                d = u;
              if (!c) {
                if (d = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const n = r.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = Co.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let a;
                const f = i.precision || (n == u ? .005 : Math.min(1, .001 * Math.abs(u - n)));
                if (Co.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      r = Math.exp(-(1 - e) * t);
                    d = n + o / (1 - e) * (1 - r), c = Math.abs(s.lastPosition - d) <= f, a = o * r
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      r = i.clamp ? 0 : i.bounce,
                      l = !Co.und(r),
                      p = n == u ? s.v0 > 0 : n < u;
                    let h, v = !1;
                    const g = 1,
                      m = Math.ceil(e / g);
                    for (let e = 0; e < m && (h = Math.abs(a) > t, h || (c = Math.abs(u - d) <= f, !c)); ++e) l && (v = d == u || d > u == p, v && (a = -a * r, d = u)), a += (1e-6 * -i.tension * (d - u) + .001 * -i.friction * a) / i.mass * g, d += a * g
                  }
                else {
                  let r = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, s.durationProgress > 0 && (s.elapsedTime = i.duration * s.durationProgress, t = s.elapsedTime += e)), r = (i.progress || 0) + t / this._memoizedDuration, r = r > 1 ? 1 : r < 0 ? 0 : r, s.durationProgress = r), d = n + i.easing(r) * (u - n), a = (d - s.lastPosition) / e, c = 1 == r
                }
                s.lastVelocity = a, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), c = !0)
              }
              a && !a[l].done && (c = !1), c ? s.done = !0 : t = !1, s.setValue(d, i.round) && (n = !0)
            }));
            const s = Ji(this),
              l = s.getValue();
            if (t) {
              const e = xi(r.to);
              l === e && !n || i.decay ? n && i.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else n && this._onChange(l)
          }
          set(e) {
            return io.batchedUpdates((() => {
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
            if (Ha(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              io.batchedUpdates((() => {
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
            return Co.und(e) ? (n = this.queue || [], this.queue = []) : n = [Co.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(n.map((e => this._update(e)))).then((e => Ta(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), za(this._state, e && this._lastCallId), io.batchedUpdates((() => this._stop(t, e))), this
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
              from: r
            } = e;
            n = Co.obj(n) ? n[t] : n, (null == n || xa(n)) && (n = void 0), r = Co.obj(r) ? r[t] : r, null == r && (r = void 0);
            const o = {
              to: n,
              from: r
            };
            return $a(this) || (e.reverse && ([n, r] = [r, n]), r = xi(r), Co.und(r) ? Ji(this) || this._set(n) : this._set(r)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: n,
              defaultProps: r
            } = this;
            e.default && Object.assign(r, ba(e, ((e, t) => /^on/.test(t) ? ga(e, n) : e))), ts(this, e, "onProps"), ns(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return Na(++this._lastCallId, {
              key: n,
              props: e,
              defaultProps: r,
              state: i,
              actions: {
                pause: () => {
                  Wa(this) || (Ua(this, !0), Mo(i.pauseQueue), ns(this, "onPause", Da(this, Xa(this, this.animation.to)), this))
                },
                resume: () => {
                  Wa(this) && (Ua(this, !1), Ha(this) && this._resume(), Mo(i.resumeQueue), ns(this, "onResume", Da(this, Xa(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((n => {
              if (e.loop && n.finished && (!t || !n.noop)) {
                const t = Ya(e);
                if (t) return this._update(t, !0)
              }
              return n
            }))
          }
          _merge(e, t, n) {
            if (t.cancel) return this.stop(!0), n(Ma(this));
            const r = !Co.und(e.to),
              o = !Co.und(e.from);
            if (r || o) {
              if (!(t.callId > this._lastToId)) return n(Ma(this));
              this._lastToId = t.callId
            }
            const {
              key: i,
              defaultProps: a,
              animation: s
            } = this, {
              to: l,
              from: u
            } = s;
            let {
              to: c = l,
              from: d = u
            } = e;
            !o || r || t.default && !Co.und(c) || (c = d), t.reverse && ([c, d] = [d, c]);
            const f = !Oo(d, u);
            f && (s.from = d), d = xi(d);
            const p = !Oo(c, l);
            p && this._focus(c);
            const h = xa(t.to),
              {
                config: v
              } = s,
              {
                decay: g,
                velocity: m
              } = v;
            (r || o) && (v.velocity = 0), t.config && !h && function(e, t, n) {
              n && (Oa(n = {
                ...n
              }, t), t = {
                ...n,
                ...t
              }), Oa(e, t), Object.assign(e, t);
              for (const t in Sa) null == e[t] && (e[t] = Sa[t]);
              let {
                frequency: r,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              Co.und(r) || (r < .01 && (r = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / r, 2) * i, e.friction = 4 * Math.PI * o * i / r)
            }(v, ha(t.config, i), t.config !== a.config ? ha(a.config, i) : void 0);
            let y = Ji(this);
            if (!y || Co.und(c)) return n(Da(this, !0));
            const b = Co.und(t.reset) ? o && !t.default : !Co.und(d) && va(t.reset, i),
              w = b ? d : this.get(),
              _ = ka(c),
              j = Co.num(_) || Co.arr(_) || Gi(_),
              k = !h && (!j || va(a.immediate || t.immediate, i));
            if (p) {
              const e = ua(c);
              if (e !== y.constructor) {
                if (!k) throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);
                y = this._set(_)
              }
            }
            const x = y.constructor;
            let S = ki(c),
              C = !1;
            if (!S) {
              const e = b || !$a(this) && f;
              (p || e) && (C = Oo(ka(w), _), S = !C), (Oo(s.immediate, k) || k) && Oo(v.decay, g) && Oo(v.velocity, m) || (S = !0)
            }
            if (C && Ha(this) && (s.changed && !b ? S = !0 : S || this._stop(l)), !h && ((S || ki(l)) && (s.values = y.getPayload(), s.toValues = ki(c) ? null : x == oa ? [1] : No(_)), s.immediate != k && (s.immediate = k, k || b || this._set(l)), S)) {
              const {
                onRest: e
              } = s;
              Po(es, (e => ts(this, t, e)));
              const r = Da(this, Xa(this, l));
              Mo(this._pendingCalls, r), this._pendingCalls.add(n), s.changed && io.batchedUpdates((() => {
                s.changed = !b, e?.(r, this), b ? ha(a.onRest, r) : s.onStart?.(r, this)
              }))
            }
            b && this._set(w), h ? n(Ra(t.to, t, this._state, this)) : S ? this._start() : Ha(this) && !p ? this._pendingCalls.add(n) : n(La(w))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (Si(this) && this._detach(), t.to = e, Si(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            ki(t) && (Ei(t, this), Va(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            ki(e) && Ni(e, this)
          }
          _set(e, t = !0) {
            const n = xi(e);
            if (!Co.und(n)) {
              const e = Ji(this);
              if (!e || !Oo(n, e.getValue())) {
                const r = ua(n);
                e && e.constructor == r ? e.setValue(n) : ea(this, r.create(n)), e && io.batchedUpdates((() => {
                  this._onChange(n, t)
                }))
              }
            }
            return Ji(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, ns(this, "onStart", Da(this, Xa(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), ha(this.animation.onChange, e, this)), ha(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            Ji(this).reset(xi(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), Ha(this) || (Ga(this, !0), Wa(this) || this._resume())
          }
          _resume() {
            xo.skipAnimation ? this.finish() : Ho.start(this)
          }
          _stop(e, t) {
            if (Ha(this)) {
              Ga(this, !1);
              const n = this.animation;
              Po(n.values, (e => {
                e.done = !0
              })), n.toValues && (n.onChange = n.onPause = n.onResume = void 0), Ci(this, {
                type: "idle",
                parent: this
              });
              const r = t ? Ma(this.get()) : Da(this.get(), Xa(this, e ?? n.to));
              Mo(this._pendingCalls, r), n.changed && (n.changed = !1, ns(this, "onRest", r, this))
            }
          }
        };

      function Xa(e, t) {
        const n = ka(t);
        return Oo(ka(e.get()), n)
      }

      function Ya(e, t = e.loop, n = e.to) {
        const r = ha(t);
        if (r) {
          const o = !0 !== r && ja(r),
            i = (o || e).reverse,
            a = !o || o.reset;
          return Za({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || xa(n) ? n : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function Za(e) {
        const {
          to: t,
          from: n
        } = e = ja(e), r = new Set;
        return Co.obj(t) && Ja(t, r), Co.obj(n) && Ja(n, r), e.keys = r.size ? Array.from(r) : null, e
      }

      function Qa(e) {
        const t = Za(e);
        return Co.und(t.default) && (t.default = ba(t)), t
      }

      function Ja(e, t) {
        Eo(e, ((e, n) => null != e && t.add(n)))
      }
      var es = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function ts(e, t, n) {
        e.animation[n] = t[n] !== ma(t, n) ? ga(t[n], e.key) : void 0
      }

      function ns(e, t, ...n) {
        e.animation[t]?.(...n), e.defaultProps[t]?.(...n)
      }
      var rs = ["onStart", "onChange", "onRest"],
        os = 1,
        is = class {
          constructor(e, t) {
            this.id = os++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
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
              Co.und(n) || this.springs[t].set(n)
            }
          }
          update(e) {
            return e && this.queue.push(Za(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = No(e).map(Za) : this.queue = [], this._flush ? this._flush(this, t) : (fs(this, t), as(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const n = this.springs;
              Po(No(t), (t => n[t].stop(!!e)))
            } else za(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (Co.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              Po(No(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (Co.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              Po(No(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            Eo(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: n
            } = this._events, r = this._active.size > 0, o = this._changed.size > 0;
            (r && !this._started || o && !this._started) && (this._started = !0, To(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const i = !r && this._started,
              a = o || i && n.size ? this.get() : null;
            o && t.size && To(t, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })), i && (this._started = !1, To(n, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            io.onFrame(this._onFrame)
          }
        };

      function as(e, t) {
        return Promise.all(t.map((t => ss(e, t)))).then((t => Ta(e, t)))
      }
      async function ss(e, t, n) {
        const {
          keys: r,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: l
        } = t, u = Co.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const c = Co.arr(o) || Co.fun(o) ? o : void 0;
        c ? (t.to = void 0, t.onRest = void 0, u && (u.onRest = void 0)) : Po(rs, (n => {
          const r = t[n];
          if (Co.fun(r)) {
            const o = e._events[n];
            t[n] = ({
              finished: e,
              cancelled: t
            }) => {
              const n = o.get(r);
              n ? (e || (n.finished = !1), t && (n.cancelled = !0)) : o.set(r, {
                value: null,
                finished: e || !1,
                cancelled: t || !1
              })
            }, u && (u[n] = t[n])
          }
        }));
        const d = e._state;
        t.pause === !d.paused ? (d.paused = t.pause, Mo(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (r || Object.keys(e.springs)).map((n => e.springs[n].start(t))),
          p = !0 === t.cancel || !0 === ma(t, "cancel");
        (c || p && d.asyncId) && f.push(Na(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: So,
            resume: So,
            start(t, n) {
              p ? (za(d, e._lastAsyncId), n(Ma(e))) : (t.onRest = s, n(Ra(c, t, d, e)))
            }
          }
        })), d.paused && await new Promise((e => {
          d.resumeQueue.add(e)
        }));
        const h = Ta(e, await Promise.all(f));
        if (a && h.finished && (!n || !h.noop)) {
          const n = Ya(t, a, o);
          if (n) return fs(e, [n]), ss(e, n, !0)
        }
        return l && io.batchedUpdates((() => l(h, e, e.item))), h
      }

      function ls(e, t) {
        const n = {
          ...e.springs
        };
        return t && Po(No(t), (e => {
          Co.und(e.keys) && (e = Za(e)), Co.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), ds(n, e, (e => cs(e)))
        })), us(e, n), n
      }

      function us(e, t) {
        Eo(t, ((t, n) => {
          e.springs[n] || (e.springs[n] = t, Ei(t, e))
        }))
      }

      function cs(e, t) {
        const n = new Ka;
        return n.key = e, t && Ei(n, t), n
      }

      function ds(e, t, n) {
        t.keys && Po(t.keys, (r => {
          (e[r] || (e[r] = n(r)))._prepareNode(t)
        }))
      }

      function fs(e, t) {
        Po(t, (t => {
          ds(e.springs, t, (t => cs(t, e)))
        }))
      }
      var ps, hs, vs = ({
          children: e,
          ...t
        }) => {
          const n = (0, s.useContext)(gs),
            r = t.pause || !!n.pause,
            o = t.immediate || !!n.immediate;
          t = function(e, t) {
            const [n] = (0, s.useState)((() => ({
              inputs: t,
              result: e()
            }))), r = (0, s.useRef)(), o = r.current;
            let i = o;
            if (i) {
              const n = Boolean(t && i.inputs && function(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < e.length; n++)
                  if (e[n] !== t[n]) return !1;
                return !0
              }(t, i.inputs));
              n || (i = {
                inputs: t,
                result: e()
              })
            } else i = n;
            return (0, s.useEffect)((() => {
              r.current = i, o == n && (n.inputs = n.result = void 0)
            }), [i]), i.result
          }((() => ({
            pause: r,
            immediate: o
          })), [r, o]);
          const {
            Provider: i
          } = gs;
          return s.createElement(i, {
            value: t
          }, e)
        },
        gs = (ps = vs, hs = {}, Object.assign(ps, s.createContext(hs)), ps.Provider._context = ps, ps.Consumer._context = ps, ps);
      vs.Provider = gs.Provider, vs.Consumer = gs.Consumer;
      var ms = () => {
        const e = [],
          t = function(t) {
            Wi(`${Bi}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const r = [];
            return Po(e, ((e, o) => {
              if (Co.und(t)) r.push(e.start());
              else {
                const i = n(t, e, o);
                i && r.push(e.start(i))
              }
            })), r
          };
        t.current = e, t.add = function(t) {
          e.includes(t) || e.push(t)
        }, t.delete = function(t) {
          const n = e.indexOf(t);
          ~n && e.splice(n, 1)
        }, t.pause = function() {
          return Po(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return Po(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          Po(e, ((e, n) => {
            const r = Co.fun(t) ? t(n, e) : t;
            r && e.set(r)
          }))
        }, t.start = function(t) {
          const n = [];
          return Po(e, ((e, r) => {
            if (Co.und(t)) n.push(e.start());
            else {
              const o = this._getProps(t, e, r);
              o && n.push(e.start(o))
            }
          })), n
        }, t.stop = function() {
          return Po(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return Po(e, ((e, n) => e.update(this._getProps(t, e, n)))), this
        };
        const n = function(e, t, n) {
          return Co.fun(e) ? e(n, t) : e
        };
        return t._getProps = n, t
      };

      function ys(e, t) {
        const n = Co.fun(e),
          [
            [r], o
          ] = function(e, t, n) {
            const r = Co.fun(t) && t;
            r && !n && (n = []);
            const o = (0, s.useMemo)((() => r || 3 == arguments.length ? ms() : void 0), []),
              i = (0, s.useRef)(0),
              a = Ki(),
              l = (0, s.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const n = ls(e, t);
                  return i.current > 0 && !l.queue.length && !Object.keys(n).some((t => !e.springs[t])) ? as(e, t) : new Promise((r => {
                    us(e, n), l.queue.push((() => {
                      r(as(e, t))
                    })), a()
                  }))
                }
              })), []),
              u = (0, s.useRef)([...l.ctrls]),
              c = [],
              d = Zi(e) || 0;

            function f(e, n) {
              for (let o = e; o < n; o++) {
                const e = u.current[o] || (u.current[o] = new is(null, l.flush)),
                  n = r ? r(o, e) : t[o];
                n && (c[o] = Qa(n))
              }
            }(0, s.useMemo)((() => {
              Po(u.current.slice(e, d), (e => {
                (function(e, t) {
                  e.ref?.delete(e), t?.delete(e)
                })(e, o), e.stop(!0)
              })), u.current.length = e, f(d, e)
            }), [e]), (0, s.useMemo)((() => {
              f(0, Math.min(d, e))
            }), n);
            const p = u.current.map(((e, t) => ls(e, c[t]))),
              h = (0, s.useContext)(vs),
              v = Zi(h),
              g = h !== v && function(e) {
                for (const t in e) return !0;
                return !1
              }(h);
            Ui((() => {
              i.current++, l.ctrls = u.current;
              const {
                queue: e
              } = l;
              e.length && (l.queue = [], Po(e, (e => e()))), Po(u.current, ((e, t) => {
                o?.add(e), g && e.start({
                  default: h
                });
                const n = c[t];
                n && (function(e, t) {
                  t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
                }(e, n.ref), e.ref ? e.queue.push(n) : e.start(n))
              }))
            })), Xi((() => () => {
              Po(l.ctrls, (e => e.stop(!0)))
            }));
            const m = p.map((e => ({
              ...e
            })));
            return o ? [m, o] : m
          }(1, n ? e : [e], n ? t || [] : t);
        return n || 2 == arguments.length ? [r, o] : r
      }
      var bs = class extends qa {
        constructor(e, t) {
          super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = pi(...t);
          const n = this._get(),
            r = ua(n);
          ea(this, r.create(n))
        }
        advance(e) {
          const t = this._get();
          Oo(t, this.get()) || (Ji(this).setValue(t), this._onChange(t, this.idle)), !this.idle && _s(this._active) && js(this)
        }
        _get() {
          const e = Co.arr(this.source) ? this.source.map(xi) : No(xi(this.source));
          return this.calc(...e)
        }
        _start() {
          this.idle && !_s(this._active) && (this.idle = !1, Po(ta(this), (e => {
            e.done = !1
          })), xo.skipAnimation ? (io.batchedUpdates((() => this.advance())), js(this)) : Ho.start(this))
        }
        _attach() {
          let e = 1;
          Po(No(this.source), (t => {
            ki(t) && Ei(t, this), Va(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
          })), this.priority = e, this._start()
        }
        _detach() {
          Po(No(this.source), (e => {
            ki(e) && Ni(e, this)
          })), this._active.clear(), js(this)
        }
        eventObserved(e) {
          "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = No(this.source).reduce(((e, t) => Math.max(e, (Va(t) ? t.priority : 0) + 1)), 0))
        }
      };

      function ws(e) {
        return !1 !== e.idle
      }

      function _s(e) {
        return !e.size || Array.from(e).every(ws)
      }

      function js(e) {
        e.idle || (e.idle = !0, Po(ta(e), (e => {
          e.done = !0
        })), Ci(e, {
          type: "idle",
          parent: e
        }))
      }
      xo.assign({
        createStringInterpolator: qi,
        to: (e, t) => new bs(e, t)
      }), Ho.advance;
      var ks = /^--/;

      function xs(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || ks.test(e) || Cs.hasOwnProperty(e) && Cs[e] ? ("" + t).trim() : t + "px"
      }
      var Ss = {},
        Cs = {
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
        Os = ["Webkit", "Ms", "Moz", "O"];
      Cs = Object.keys(Cs).reduce(((e, t) => (Os.forEach((n => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(n, t)] = e[t])), e)), Cs);
      var Ps = /^(matrix|translate|scale|rotate|skew)/,
        Es = /^(translate)/,
        Ns = /^(rotate|skew)/,
        Ts = (e, t) => Co.num(e) && 0 !== e ? e + t : e,
        Ls = (e, t) => Co.arr(e) ? e.every((e => Ls(e, t))) : Co.num(e) ? e === t : parseFloat(e) === t,
        Ds = class extends aa {
          constructor({
            x: e,
            y: t,
            z: n,
            ...r
          }) {
            const o = [],
              i = [];
            (e || t || n) && (o.push([e || 0, t || 0, n || 0]), i.push((e => [`translate3d(${e.map((e=>Ts(e,"px"))).join(",")})`, Ls(e, 0)]))), Eo(r, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (Ps.test(t)) {
                if (delete r[t], Co.und(e)) return;
                const n = Es.test(t) ? "px" : Ns.test(t) ? "deg" : "";
                o.push(No(e)), i.push("rotate3d" === t ? ([e, t, r, o]) => [`rotate3d(${e},${t},${r},${Ts(o,n)})`, Ls(o, 0)] : e => [`${t}(${e.map((e=>Ts(e,n))).join(",")})`, Ls(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (r.transform = new Ms(o, i)), super(r)
          }
        },
        Ms = class extends Oi {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return Po(this.inputs, ((n, r) => {
              const o = xi(n[0]),
                [i, a] = this.transforms[r](Co.arr(o) ? o : n.map(xi));
              e += " " + i, t = t && a
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Po(this.inputs, (e => Po(e, (e => ki(e) && Ei(e, this)))))
          }
          observerRemoved(e) {
            0 == e && Po(this.inputs, (e => Po(e, (e => ki(e) && Ni(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Ci(this, e)
          }
        };
      xo.assign({
        batchedUpdates: Ht.unstable_batchedUpdates,
        createStringInterpolator: qi,
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
      var Rs = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: n = e => new aa(e),
          getComponentProps: r = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: n,
              getComponentProps: r
            },
            i = e => {
              const t = pa(e) || "Anonymous";
              return (e = Co.str(e) ? i[e] || (i[e] = ca(e, o)) : e[fa] || (e[fa] = ca(e, o))).displayName = `Animated(${t})`, e
            };
          return Eo(e, ((t, n) => {
            Co.arr(e) && (n = pa(t)), i[n] = i(t)
          })), {
            animated: i
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const n = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: r,
                style: o,
                children: i,
                scrollTop: a,
                scrollLeft: s,
                viewBox: l,
                ...u
              } = t,
              c = Object.values(u),
              d = Object.keys(u).map((t => n || e.hasAttribute(t) ? t : Ss[t] || (Ss[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const n = xs(t, o[t]);
                ks.test(t) ? e.style.setProperty(t, n) : e.style[t] = n
              } d.forEach(((t, n) => {
              e.setAttribute(t, c[n])
            })), void 0 !== r && (e.className = r), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new Ds(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...n
          }) => n
        }),
        zs = Rs.animated,
        As = n(23514);

      function Is(e, t) {
        var n = t && t.cache ? t.cache : Ws,
          r = t && t.serializer ? t.serializer : $s;
        return (t && t.strategy ? t.strategy : Bs)(e, {
          cache: n,
          serializer: r
        })
      }

      function Vs(e, t, n, r) {
        var o, i = null == (o = r) || "number" == typeof o || "boolean" == typeof o ? r : n(r),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, r), t.set(i, a)), a
      }

      function Fs(e, t, n) {
        var r = Array.prototype.slice.call(arguments, 3),
          o = n(r),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function qs(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function Bs(e, t) {
        return qs(e, this, 1 === e.length ? Vs : Fs, t.cache.create(), t.serializer)
      }
      var $s = function() {
        return JSON.stringify(arguments)
      };

      function Hs() {
        this.cache = Object.create(null)
      }
      Hs.prototype.get = function(e) {
        return this.cache[e]
      }, Hs.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var Ws = {
          create: function() {
            return new Hs
          }
        },
        Gs = {
          variadic: function(e, t) {
            return qs(e, this, Fs, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return qs(e, this, Vs, t.cache.create(), t.serializer)
          }
        };

      function Us() {
        this.cache = Object.create(null)
      }
      Is((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, As.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Gs.variadic
      }), Is((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, As.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Gs.variadic
      }), Is((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.PluralRules).bind.apply(e, (0, As.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Gs.variadic
      }), Is((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.Locale).bind.apply(e, (0, As.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Gs.variadic
      }), Is((function() {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new((e = Intl.ListFormat).bind.apply(e, (0, As.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Gs.variadic
      }), Us.prototype.get = function(e) {
        return this.cache[e]
      }, Us.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      (0, As.__assign)((0, As.__assign)({}, {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      }), {
        textComponent: s.Fragment
      }), n(67332);
      var Ks, Xs, Ys = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? s.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = s.createContext(null)),
        Zs = (Ys.Consumer, Ys.Provider, Ys);

      function Qs() {
        var e = s.useContext(Zs);
        return function(e) {
          ! function(e, t, n) {
            if (void 0 === n && (n = Error), !e) throw new n("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
          }(e)
        }(e), e
      }! function(e) {
        e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName"
      }(Ks || (Ks = {})),
      function(e) {
        e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts"
      }(Xs || (Xs = {}));
      var Js = function(e) {
        var t = Qs(),
          n = e.value,
          r = e.children,
          o = (0, As.__rest)(e, ["value", "children"]);
        return r(t.formatNumberToParts(n, o))
      };

      function el(e) {
        var t = function(t) {
          var n = Qs(),
            r = t.value,
            o = t.children,
            i = (0, As.__rest)(t, ["value", "children"]),
            a = "string" == typeof r ? new Date(r || 0) : r;
          return o("formatDate" === e ? n.formatDateToParts(a, i) : n.formatTimeToParts(a, i))
        };
        return t.displayName = Xs[e], t
      }

      function tl(e) {
        var t = function(t) {
          var n = Qs(),
            r = t.value,
            o = t.children,
            i = (0, As.__rest)(t, ["value", "children"]),
            a = n[e](r, i);
          if ("function" == typeof o) return o(a);
          var l = n.textComponent || s.Fragment;
          return s.createElement(l, null, a)
        };
        return t.displayName = Ks[e], t
      }

      function nl(e, [t, n]) {
        return Math.min(n, Math.max(t, e))
      }
      Js.displayName = "FormattedNumberParts", Js.displayName = "FormattedNumberParts", tl("formatDate"), tl("formatTime"), tl("formatNumber"), tl("formatList"), tl("formatDisplayName"), el("formatDate"), el("formatTime"), n.e(3672).then(n.bind(n, 21291)), n.e(823).then(n.bind(n, 823)), n.e(7893).then(n.bind(n, 27893)), n.e(4684).then(n.bind(n, 54684)), n.e(8557).then(n.bind(n, 38557)), n.e(9583).then(n.bind(n, 39583)), n.e(1280).then(n.bind(n, 21280)), n.e(5734).then(n.bind(n, 45734)), n.e(4153).then(n.bind(n, 84153)), n.e(1381).then(n.bind(n, 11381)), n.e(7727).then(n.bind(n, 57727)), n.e(3586).then(n.bind(n, 13586)), n.e(2578).then(n.bind(n, 12578));
      var rl = n(65998),
        ol = n(86410),
        il = n(29818),
        al = n(52806),
        sl = n(19264),
        ll = n(71020),
        ul = n(61832),
        cl = n(85100),
        dl = n(80355),
        fl = ["PageUp", "PageDown"],
        pl = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        hl = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        vl = "Slider",
        [gl, ml, yl] = (0, dl.N)(vl),
        [bl, wl] = (0, il.A)(vl, [yl]),
        [_l, jl] = bl(vl),
        kl = s.forwardRef(((e, t) => {
          const {
            name: n,
            min: r = 0,
            max: o = 100,
            step: a = 1,
            orientation: l = "horizontal",
            disabled: u = !1,
            minStepsBetweenThumbs: c = 0,
            defaultValue: d = [r],
            value: f,
            onValueChange: p = () => {},
            onValueCommit: h = () => {},
            inverted: v = !1,
            form: g,
            ...m
          } = e, y = s.useRef(new Set), b = s.useRef(0), w = "horizontal" === l ? Cl : Ol, [_ = [], j] = (0, al.i)({
            prop: f,
            defaultProp: d,
            onChange: e => {
              const t = [...y.current];
              t[b.current]?.focus(), p(e)
            }
          }), k = s.useRef(_);

          function x(e, t, {
            commit: n
          } = {
            commit: !1
          }) {
            const i = function(e) {
                return (String(e).split(".")[1] || "").length
              }(a),
              s = function(e, t) {
                const n = Math.pow(10, t);
                return Math.round(e * n) / n
              }(Math.round((e - r) / a) * a + r, i),
              l = nl(s, [r, o]);
            j(((e = []) => {
              const r = function(e = [], t, n) {
                const r = [...e];
                return r[n] = t, r.sort(((e, t) => e - t))
              }(e, l, t);
              if (function(e, t) {
                  if (t > 0) {
                    const n = function(e) {
                      return e.slice(0, -1).map(((t, n) => e[n + 1] - t))
                    }(e);
                    return Math.min(...n) >= t
                  }
                  return !0
                }(r, c * a)) {
                b.current = r.indexOf(l);
                const t = String(r) !== String(e);
                return t && n && h(r), t ? r : e
              }
              return e
            }))
          }
          return (0, i.jsx)(_l, {
            scope: e.__scopeSlider,
            name: n,
            disabled: u,
            min: r,
            max: o,
            valueIndexToChangeRef: b,
            thumbs: y.current,
            values: _,
            orientation: l,
            form: g,
            children: (0, i.jsx)(gl.Provider, {
              scope: e.__scopeSlider,
              children: (0, i.jsx)(gl.Slot, {
                scope: e.__scopeSlider,
                children: (0, i.jsx)(w, {
                  "aria-disabled": u,
                  "data-disabled": u ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: (0, rl.m)(m.onPointerDown, (() => {
                    u || (k.current = _)
                  })),
                  min: r,
                  max: o,
                  inverted: v,
                  onSlideStart: u ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const n = e.map((e => Math.abs(e - t))),
                        r = Math.min(...n);
                      return n.indexOf(r)
                    }(_, e);
                    x(e, t)
                  },
                  onSlideMove: u ? void 0 : function(e) {
                    x(e, b.current)
                  },
                  onSlideEnd: u ? void 0 : function() {
                    const e = k.current[b.current];
                    _[b.current] !== e && h(_)
                  },
                  onHomeKeyDown: () => !u && x(r, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !u && x(o, _.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!u) {
                      const n = fl.includes(e.key) || e.shiftKey && pl.includes(e.key) ? 10 : 1,
                        r = b.current;
                      x(_[r] + a * n * t, r, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }));
      kl.displayName = vl;
      var [xl, Sl] = bl(vl, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), Cl = s.forwardRef(((e, t) => {
        const {
          min: n,
          max: r,
          dir: o,
          inverted: a,
          onSlideStart: l,
          onSlideMove: u,
          onSlideEnd: c,
          onStepKeyDown: d,
          ...f
        } = e, [p, h] = s.useState(null), v = (0, ol.s)(t, (e => h(e))), g = s.useRef(void 0), m = (0, sl.jH)(o), y = "ltr" === m, b = y && !a || !y && a;

        function w(e) {
          const t = g.current || p.getBoundingClientRect(),
            o = Il([0, t.width], b ? [n, r] : [r, n]);
          return g.current = t, o(e - t.left)
        }
        return (0, i.jsx)(xl, {
          scope: e.__scopeSlider,
          startEdge: b ? "left" : "right",
          endEdge: b ? "right" : "left",
          direction: b ? 1 : -1,
          size: "width",
          children: (0, i.jsx)(Pl, {
            dir: m,
            "data-orientation": "horizontal",
            ...f,
            ref: v,
            style: {
              ...f.style,
              "--radix-slider-thumb-transform": "translateX(-50%)"
            },
            onSlideStart: e => {
              const t = w(e.clientX);
              l?.(t)
            },
            onSlideMove: e => {
              const t = w(e.clientX);
              u?.(t)
            },
            onSlideEnd: () => {
              g.current = void 0, c?.()
            },
            onStepKeyDown: e => {
              const t = hl[b ? "from-left" : "from-right"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), Ol = s.forwardRef(((e, t) => {
        const {
          min: n,
          max: r,
          inverted: o,
          onSlideStart: a,
          onSlideMove: l,
          onSlideEnd: u,
          onStepKeyDown: c,
          ...d
        } = e, f = s.useRef(null), p = (0, ol.s)(t, f), h = s.useRef(void 0), v = !o;

        function g(e) {
          const t = h.current || f.current.getBoundingClientRect(),
            o = Il([0, t.height], v ? [r, n] : [n, r]);
          return h.current = t, o(e - t.top)
        }
        return (0, i.jsx)(xl, {
          scope: e.__scopeSlider,
          startEdge: v ? "bottom" : "top",
          endEdge: v ? "top" : "bottom",
          size: "height",
          direction: v ? 1 : -1,
          children: (0, i.jsx)(Pl, {
            "data-orientation": "vertical",
            ...d,
            ref: p,
            style: {
              ...d.style,
              "--radix-slider-thumb-transform": "translateY(50%)"
            },
            onSlideStart: e => {
              const t = g(e.clientY);
              a?.(t)
            },
            onSlideMove: e => {
              const t = g(e.clientY);
              l?.(t)
            },
            onSlideEnd: () => {
              h.current = void 0, u?.()
            },
            onStepKeyDown: e => {
              const t = hl[v ? "from-bottom" : "from-top"].includes(e.key);
              c?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), Pl = s.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          onSlideStart: r,
          onSlideMove: o,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: l,
          onStepKeyDown: u,
          ...c
        } = e, d = jl(vl, n);
        return (0, i.jsx)(cl.sG.span, {
          ...c,
          ref: t,
          onKeyDown: (0, rl.m)(e.onKeyDown, (e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (l(e), e.preventDefault()) : fl.concat(pl).includes(e.key) && (u(e), e.preventDefault())
          })),
          onPointerDown: (0, rl.m)(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), d.thumbs.has(t) ? t.focus() : r(e)
          })),
          onPointerMove: (0, rl.m)(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: (0, rl.m)(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
          }))
        })
      })), El = "SliderTrack", Nl = s.forwardRef(((e, t) => {
        const {
          __scopeSlider: n,
          ...r
        } = e, o = jl(El, n);
        return (0, i.jsx)(cl.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...r,
          ref: t
        })
      }));
      Nl.displayName = El;
      var Tl = "SliderRange",
        Ll = s.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            ...r
          } = e, o = jl(Tl, n), a = Sl(Tl, n), l = s.useRef(null), u = (0, ol.s)(t, l), c = o.values.length, d = o.values.map((e => Al(e, o.min, o.max))), f = c > 1 ? Math.min(...d) : 0, p = 100 - Math.max(...d);
          return (0, i.jsx)(cl.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...r,
            ref: u,
            style: {
              ...e.style,
              [a.startEdge]: f + "%",
              [a.endEdge]: p + "%"
            }
          })
        }));
      Ll.displayName = Tl;
      var Dl = "SliderThumb",
        Ml = s.forwardRef(((e, t) => {
          const n = ml(e.__scopeSlider),
            [r, o] = s.useState(null),
            a = (0, ol.s)(t, (e => o(e))),
            l = s.useMemo((() => r ? n().findIndex((e => e.ref.current === r)) : -1), [n, r]);
          return (0, i.jsx)(Rl, {
            ...e,
            ref: a,
            index: l
          })
        })),
        Rl = s.forwardRef(((e, t) => {
          const {
            __scopeSlider: n,
            index: r,
            name: o,
            ...a
          } = e, l = jl(Dl, n), u = Sl(Dl, n), [c, d] = s.useState(null), f = (0, ol.s)(t, (e => d(e))), p = !c || l.form || !!c.closest("form"), h = (0, ul.X)(c), v = l.values[r], g = void 0 === v ? 0 : Al(v, l.min, l.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(r, l.values.length), y = h?.[u.size], b = y ? function(e, t, n) {
            const r = e / 2;
            return (r - Il([0, 50], [0, r])(t) * n) * n
          }(y, g, u.direction) : 0;
          return s.useEffect((() => {
            if (c) return l.thumbs.add(c), () => {
              l.thumbs.delete(c)
            }
          }), [c, l.thumbs]), (0, i.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [u.startEdge]: `calc(${g}% + ${b}px)`
            },
            children: [(0, i.jsx)(gl.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, i.jsx)(cl.sG.span, {
                role: "slider",
                "aria-label": e["aria-label"] || m,
                "aria-valuemin": l.min,
                "aria-valuenow": v,
                "aria-valuemax": l.max,
                "aria-orientation": l.orientation,
                "data-orientation": l.orientation,
                "data-disabled": l.disabled ? "" : void 0,
                tabIndex: l.disabled ? void 0 : 0,
                ...a,
                ref: f,
                style: void 0 === v ? {
                  display: "none"
                } : e.style,
                onFocus: (0, rl.m)(e.onFocus, (() => {
                  l.valueIndexToChangeRef.current = r
                }))
              })
            }), p && (0, i.jsx)(zl, {
              name: o ?? (l.name ? l.name + (l.values.length > 1 ? "[]" : "") : void 0),
              form: l.form,
              value: v
            }, r)]
          })
        }));
      Ml.displayName = Dl;
      var zl = s.forwardRef((({
        __scopeSlider: e,
        value: t,
        ...n
      }, r) => {
        const o = s.useRef(null),
          a = (0, ol.s)(o, r),
          l = (0, ll.Z)(t);
        return s.useEffect((() => {
          const e = o.current;
          if (!e) return;
          const n = window.HTMLInputElement.prototype,
            r = Object.getOwnPropertyDescriptor(n, "value").set;
          if (l !== t && r) {
            const n = new Event("input", {
              bubbles: !0
            });
            r.call(e, t), e.dispatchEvent(n)
          }
        }), [l, t]), (0, i.jsx)(cl.sG.input, {
          style: {
            display: "none"
          },
          ...n,
          ref: a,
          defaultValue: t
        })
      }));

      function Al(e, t, n) {
        return nl(100 / (n - t) * (e - t), [0, 100])
      }

      function Il(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }
      zl.displayName = "RadioBubbleInput";
      var Vl = kl,
        Fl = Nl,
        ql = Ll,
        Bl = Ml;
      const $l = {
          id: "Lightbox_Close_Button_Label"
        },
        Hl = {
          id: "Lightbox_Close_Button_Tooltip"
        },
        Wl = {
          id: "Lightbox_Zoom_In_Button_Label"
        },
        Gl = {
          id: "Lightbox_Zoom_In_Button_Tooltip"
        },
        Ul = {
          id: "Lightbox_Zoom_Out_Button_Label"
        },
        Kl = {
          id: "Lightbox_Zoom_Out_Button__Tooltip"
        },
        Xl = {
          id: "Lightbox_Reset_Zoom_Button_Label"
        },
        Yl = {
          id: "Lightbox_Reset_Zoom_Button_Tooltip"
        },
        Zl = {
          id: "Lightbox_Zoom_Slider_Label"
        },
        Ql = {
          id: "Lightbox_Zoom_Slider_Tooltip"
        },
        Jl = {
          id: "Lightbox_Download_Button_Label"
        },
        eu = {
          id: "Lightbox_Download_Button_Tooltip"
        };

      function tu() {
        return tu = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }, tu.apply(null, arguments)
      }
      var nu = ["shift", "alt", "meta", "mod", "ctrl"],
        ru = {
          esc: "escape",
          return: "enter",
          ".": "period",
          ",": "comma",
          "-": "slash",
          " ": "space",
          "`": "backquote",
          "#": "backslash",
          "+": "bracketright",
          ShiftLeft: "shift",
          ShiftRight: "shift",
          AltLeft: "alt",
          AltRight: "alt",
          MetaLeft: "meta",
          MetaRight: "meta",
          OSLeft: "meta",
          OSRight: "meta",
          ControlLeft: "ctrl",
          ControlRight: "ctrl"
        };

      function ou(e) {
        return (e && ru[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function iu(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function au(e, t, n) {
        void 0 === t && (t = "+");
        var r = e.toLocaleLowerCase().split(t).map((function(e) {
          return ou(e)
        }));
        return tu({}, {
          alt: r.includes("alt"),
          ctrl: r.includes("ctrl") || r.includes("control"),
          shift: r.includes("shift"),
          meta: r.includes("meta"),
          mod: r.includes("mod")
        }, {
          keys: r.filter((function(e) {
            return !nu.includes(e)
          })),
          description: n,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && uu([ou(e.key), ou(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && cu([ou(e.key), ou(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        su.clear()
      }));
      var su = new Set;

      function lu(e) {
        return Array.isArray(e)
      }

      function uu(e) {
        var t = Array.isArray(e) ? e : [e];
        su.has("meta") && su.forEach((function(e) {
          return ! function(e) {
            return nu.includes(e)
          }(e) && su.delete(e.toLowerCase())
        })), t.forEach((function(e) {
          return su.add(e.toLowerCase())
        }))
      }

      function cu(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? su.clear() : t.forEach((function(e) {
          return su.delete(e.toLowerCase())
        }))
      }

      function du(e, t) {
        void 0 === t && (t = !1);
        var n, r, o = e.target,
          i = e.composed;
        return r = (n = o).tagName && !n.tagName.startsWith("-") && n.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, lu(t) ? Boolean(r && t && t.some((function(e) {
          var t;
          return e.toLowerCase() === (null == (t = r) ? void 0 : t.toLowerCase())
        }))) : Boolean(r && t && t)
      }
      var fu = (0, s.createContext)(void 0);

      function pu(e) {
        var t = e.addHotkey,
          n = e.removeHotkey,
          r = e.children;
        return (0, i.jsx)(fu.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: n
          },
          children: r
        })
      }

      function hu(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(n, r) {
          return n && hu(e[r], t[r])
        }), !0) : e === t
      }
      var vu = (0, s.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        gu = function(e) {
          var t = e.initiallyActiveScopes,
            n = void 0 === t ? ["*"] : t,
            r = e.children,
            o = (0, s.useState)((null == n ? void 0 : n.length) > 0 ? n : ["*"]),
            a = o[0],
            l = o[1],
            u = (0, s.useState)([]),
            c = u[0],
            d = u[1],
            f = (0, s.useCallback)((function(e) {
              l((function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            p = (0, s.useCallback)((function(e) {
              l((function(t) {
                return 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                }))
              }))
            }), []),
            h = (0, s.useCallback)((function(e) {
              l((function(t) {
                return t.includes(e) ? 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                })) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            v = (0, s.useCallback)((function(e) {
              d((function(t) {
                return [].concat(t, [e])
              }))
            }), []),
            g = (0, s.useCallback)((function(e) {
              d((function(t) {
                return t.filter((function(t) {
                  return !hu(t, e)
                }))
              }))
            }), []);
          return (0, i.jsx)(vu.Provider, {
            value: {
              enabledScopes: a,
              hotkeys: c,
              enableScope: f,
              disableScope: p,
              toggleScope: h
            },
            children: (0, i.jsx)(pu, {
              addHotkey: v,
              removeHotkey: g,
              children: r
            })
          })
        },
        mu = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        yu = "undefined" != typeof window ? s.useLayoutEffect : s.useEffect;

      function bu(e, t, n, r) {
        var o = (0, s.useState)(null),
          i = o[0],
          a = o[1],
          l = (0, s.useRef)(!1),
          u = n instanceof Array ? r instanceof Array ? void 0 : r : n,
          c = lu(e) ? e.join(null == u ? void 0 : u.splitKey) : e,
          d = n instanceof Array ? n : r instanceof Array ? r : void 0,
          f = (0, s.useCallback)(t, null != d ? d : []),
          p = (0, s.useRef)(f);
        p.current = d ? f : t;
        var h = function(e) {
            var t = (0, s.useRef)(void 0);
            return hu(t.current, e) || (t.current = e), t.current
          }(u),
          v = (0, s.useContext)(vu).enabledScopes,
          g = (0, s.useContext)(fu);
        return yu((function() {
          if (!1 !== (null == h ? void 0 : h.enabled) && (e = v, t = null == h ? void 0 : h.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, n = function(e, t) {
                var n;
                if (void 0 === t && (t = !1), !du(e, ["input", "textarea", "select"]) || du(e, null == h ? void 0 : h.enableOnFormTags)) {
                  if (null !== i) {
                    var r = i.getRootNode();
                    if ((r instanceof Document || r instanceof ShadowRoot) && r.activeElement !== i && !i.contains(r.activeElement)) return void mu(e)
                  }(null == (n = e.target) || !n.isContentEditable || null != h && h.enableOnContentEditable) && iu(c, null == h ? void 0 : h.splitKey).forEach((function(n) {
                    var r, o = au(n, null == h ? void 0 : h.combinationKey);
                    if (function(e, t, n) {
                        void 0 === n && (n = !1);
                        var r, o, i = t.alt,
                          a = t.meta,
                          s = t.mod,
                          l = t.shift,
                          u = t.ctrl,
                          c = t.keys,
                          d = e.key,
                          f = e.code,
                          p = e.ctrlKey,
                          h = e.metaKey,
                          v = e.shiftKey,
                          g = e.altKey,
                          m = ou(f),
                          y = d.toLowerCase();
                        if (!(null != c && c.includes(m) || null != c && c.includes(y) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(m))) return !1;
                        if (!n) {
                          if (i === !g && "alt" !== y) return !1;
                          if (l === !v && "shift" !== y) return !1;
                          if (s) {
                            if (!h && !p) return !1
                          } else {
                            if (a === !h && "meta" !== y && "os" !== y) return !1;
                            if (u === !p && "ctrl" !== y && "control" !== y) return !1
                          }
                        }
                        return !(!c || 1 !== c.length || !c.includes(y) && !c.includes(m)) || (c ? (void 0 === o && (o = ","), (lu(r = c) ? r : r.split(o)).every((function(e) {
                          return su.has(e.trim().toLowerCase())
                        }))) : !c)
                      }(e, o, null == h ? void 0 : h.ignoreModifiers) || null != (r = o.keys) && r.includes("*")) {
                      if (null != h && null != h.ignoreEventWhen && h.ignoreEventWhen(e)) return;
                      if (t && l.current) return;
                      if (function(e, t, n) {
                          ("function" == typeof n && n(e, t) || !0 === n) && e.preventDefault()
                        }(e, o, null == h ? void 0 : h.preventDefault), ! function(e, t, n) {
                          return "function" == typeof n ? n(e, t) : !0 === n || void 0 === n
                        }(e, o, null == h ? void 0 : h.enabled)) return void mu(e);
                      p.current(e, o), t || (l.current = !0)
                    }
                  }))
                }
              },
              r = function(e) {
                void 0 !== e.key && (uu(ou(e.code)), (void 0 === (null == h ? void 0 : h.keydown) && !0 !== (null == h ? void 0 : h.keyup) || null != h && h.keydown) && n(e))
              },
              o = function(e) {
                void 0 !== e.key && (cu(ou(e.code)), l.current = !1, null != h && h.keyup && n(e, !0))
              },
              a = i || (null == u ? void 0 : u.document) || document;
            return a.addEventListener("keyup", o, null == u ? void 0 : u.eventListenerOptions), a.addEventListener("keydown", r, null == u ? void 0 : u.eventListenerOptions), g && iu(c, null == h ? void 0 : h.splitKey).forEach((function(e) {
                return g.addHotkey(au(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
              })),
              function() {
                a.removeEventListener("keyup", o, null == u ? void 0 : u.eventListenerOptions), a.removeEventListener("keydown", r, null == u ? void 0 : u.eventListenerOptions), g && iu(c, null == h ? void 0 : h.splitKey).forEach((function(e) {
                  return g.removeHotkey(au(e, null == h ? void 0 : h.combinationKey, null == h ? void 0 : h.description))
                }))
              }
          }
        }), [i, c, h, v]), a
      }

      function wu(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function _u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function ju(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _u(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = wu(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _u(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function ku(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var xu = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Su = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = ju(ju({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) xu(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return ku(e.variantClassNames, (e => ku(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_nk7jgu_8kowh41 foundry_nk7jgu_1d5mo5m0 foundry_nk7jgu_a5x3kh0",
          variantClassNames: {
            appearance: {
              primary: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua1",
              secondary: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua2",
              tertiary: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua3",
              ghost: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua4",
              danger: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua6",
              information: "foundry_nk7jgu_1qqcnua0 foundry_nk7jgu_1qqcnua5"
            },
            size: {
              XS: "foundry_nk7jgu_a5x3kh8",
              SM: "foundry_nk7jgu_a5x3kh9",
              MD: "foundry_nk7jgu_a5x3kha",
              LG: "foundry_nk7jgu_a5x3khb"
            },
            fullWidth: {
              true: "foundry_nk7jgu_a5x3khc",
              false: "foundry_nk7jgu_a5x3khd"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Cu = {
          XS: "MD",
          SM: "MD",
          MD: "LG",
          LG: "LG"
        },
        Ou = (0, s.forwardRef)((({
          testId: e,
          asChild: t,
          className: n,
          icon: r,
          label: o,
          appearance: u,
          fullWidth: c = !1,
          size: d = "MD",
          onClick: f,
          children: p,
          ...h
        }, v) => {
          const g = (0, s.useRef)(null),
            m = F(g, v),
            y = Ur(),
            b = "string" == typeof d ? d : d?.[y] ?? d.default ?? "MD",
            {
              events: w,
              others: _
            } = (0, a.bZ)(h, {
              onPress: !1
            }),
            {
              buttonProps: j,
              isPressed: k
            } = tn({
              ..._,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => _.onPress?.(e) ?? f?.(e)
            }, g),
            x = (0, a.v6)({
              ...w,
              role: "button",
              "data-pressed": k,
              "data-testid": e,
              className: Su({
                appearance: u,
                size: b,
                fullWidth: c
              })
            }, {
              ...j,
              className: n
            }),
            S = z[r],
            C = t ? l.Slot : "button",
            O = Cu[b];
          return (0, i.jsxs)(C, {
            ref: m,
            ...x,
            children: [S && (0, i.jsx)(S, {
              label: o || "",
              size: O
            }), (0, i.jsx)(l.Slottable, {
              children: p
            })]
          })
        }));
      var Pu = "foundry_nk7jgu_bc732x1";
      const Eu = (0, s.forwardRef)((({
        shortcut: e,
        isInline: t,
        onShortcut: n
      }, r) => (bu(e, (e => n?.(e)), [n]), (0, i.jsx)(M, {
        size: "XS",
        className: (0, O.$)("foundry_nk7jgu_bc732x0", {
          [Pu]: t
        }),
        asChild: !0,
        children: (0, i.jsx)("kbd", {
          ref: r,
          children: e
        })
      }))));
      var Nu = n(19202),
        Tu = n(74406),
        Lu = n(45421),
        Du = n(34902),
        Mu = n(36146),
        Ru = n(63694),
        [zu, Au] = (0, il.A)("Tooltip", [Lu.Bk]),
        Iu = (0, Lu.Bk)(),
        Vu = "TooltipProvider",
        Fu = 700,
        qu = "tooltip.open",
        [Bu, $u] = zu(Vu),
        Hu = e => {
          const {
            __scopeTooltip: t,
            delayDuration: n = Fu,
            skipDelayDuration: r = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, l = s.useRef(!0), u = s.useRef(!1), c = s.useRef(0);
          return s.useEffect((() => {
            const e = c.current;
            return () => window.clearTimeout(e)
          }), []), (0, i.jsx)(Bu, {
            scope: t,
            isOpenDelayedRef: l,
            delayDuration: n,
            onOpen: s.useCallback((() => {
              window.clearTimeout(c.current), l.current = !1
            }), []),
            onClose: s.useCallback((() => {
              window.clearTimeout(c.current), c.current = window.setTimeout((() => l.current = !0), r)
            }), [r]),
            isPointerInTransitRef: u,
            onPointerInTransitChange: s.useCallback((e => {
              u.current = e
            }), []),
            disableHoverableContent: o,
            children: a
          })
        };
      Hu.displayName = Vu;
      var Wu = "Tooltip",
        [Gu, Uu] = zu(Wu),
        Ku = e => {
          const {
            __scopeTooltip: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: a,
            disableHoverableContent: l,
            delayDuration: u
          } = e, c = $u(Wu, e.__scopeTooltip), d = Iu(t), [f, p] = s.useState(null), h = (0, Tu.useId)(), v = s.useRef(0), g = l ?? c.disableHoverableContent, m = u ?? c.delayDuration, y = s.useRef(!1), [b, w] = (0, al.i)({
            prop: r,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (c.onOpen(), document.dispatchEvent(new CustomEvent(qu))) : c.onClose(), a?.(e)
            },
            caller: Wu
          }), _ = s.useMemo((() => b ? y.current ? "delayed-open" : "instant-open" : "closed"), [b]), j = s.useCallback((() => {
            window.clearTimeout(v.current), v.current = 0, y.current = !1, w(!0)
          }), [w]), k = s.useCallback((() => {
            window.clearTimeout(v.current), v.current = 0, w(!1)
          }), [w]), x = s.useCallback((() => {
            window.clearTimeout(v.current), v.current = window.setTimeout((() => {
              y.current = !0, w(!0), v.current = 0
            }), m)
          }), [m, w]);
          return s.useEffect((() => () => {
            v.current && (window.clearTimeout(v.current), v.current = 0)
          }), []), (0, i.jsx)(Lu.bL, {
            ...d,
            children: (0, i.jsx)(Gu, {
              scope: t,
              contentId: h,
              open: b,
              stateAttribute: _,
              trigger: f,
              onTriggerChange: p,
              onTriggerEnter: s.useCallback((() => {
                c.isOpenDelayedRef.current ? x() : j()
              }), [c.isOpenDelayedRef, x, j]),
              onTriggerLeave: s.useCallback((() => {
                g ? k() : (window.clearTimeout(v.current), v.current = 0)
              }), [k, g]),
              onOpen: j,
              onClose: k,
              disableHoverableContent: g,
              children: n
            })
          })
        };
      Ku.displayName = Wu;
      var Xu = "TooltipTrigger",
        Yu = s.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = Uu(Xu, n), a = $u(Xu, n), l = Iu(n), u = s.useRef(null), c = (0, ol.s)(t, u, o.onTriggerChange), d = s.useRef(!1), f = s.useRef(!1), p = s.useCallback((() => d.current = !1), []);
          return s.useEffect((() => () => document.removeEventListener("pointerup", p)), [p]), (0, i.jsx)(Lu.Mz, {
            asChild: !0,
            ...l,
            children: (0, i.jsx)(cl.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...r,
              ref: c,
              onPointerMove: (0, rl.m)(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (f.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), f.current = !0))
              })),
              onPointerLeave: (0, rl.m)(e.onPointerLeave, (() => {
                o.onTriggerLeave(), f.current = !1
              })),
              onPointerDown: (0, rl.m)(e.onPointerDown, (() => {
                o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", p, {
                  once: !0
                })
              })),
              onFocus: (0, rl.m)(e.onFocus, (() => {
                d.current || o.onOpen()
              })),
              onBlur: (0, rl.m)(e.onBlur, o.onClose),
              onClick: (0, rl.m)(e.onClick, o.onClose)
            })
          })
        }));
      Yu.displayName = Xu;
      var Zu = "TooltipPortal",
        [Qu, Ju] = zu(Zu, {
          forceMount: void 0
        }),
        ec = e => {
          const {
            __scopeTooltip: t,
            forceMount: n,
            children: r,
            container: o
          } = e, a = Uu(Zu, t);
          return (0, i.jsx)(Qu, {
            scope: t,
            forceMount: n,
            children: (0, i.jsx)(Mu.C, {
              present: n || a.open,
              children: (0, i.jsx)(Du.Portal, {
                asChild: !0,
                container: o,
                children: r
              })
            })
          })
        };
      ec.displayName = Zu;
      var tc = "TooltipContent",
        nc = s.forwardRef(((e, t) => {
          const n = Ju(tc, e.__scopeTooltip),
            {
              forceMount: r = n.forceMount,
              side: o = "top",
              ...a
            } = e,
            s = Uu(tc, e.__scopeTooltip);
          return (0, i.jsx)(Mu.C, {
            present: r || s.open,
            children: s.disableHoverableContent ? (0, i.jsx)(sc, {
              side: o,
              ...a,
              ref: t
            }) : (0, i.jsx)(rc, {
              side: o,
              ...a,
              ref: t
            })
          })
        })),
        rc = s.forwardRef(((e, t) => {
          const n = Uu(tc, e.__scopeTooltip),
            r = $u(tc, e.__scopeTooltip),
            o = s.useRef(null),
            a = (0, ol.s)(t, o),
            [l, u] = s.useState(null),
            {
              trigger: c,
              onClose: d
            } = n,
            f = o.current,
            {
              onPointerInTransitChange: p
            } = r,
            h = s.useCallback((() => {
              u(null), p(!1)
            }), [p]),
            v = s.useCallback(((e, t) => {
              const n = e.currentTarget,
                r = {
                  x: e.clientX,
                  y: e.clientY
                },
                o = function(e, t, n = 5) {
                  const r = [];
                  switch (t) {
                    case "top":
                      r.push({
                        x: e.x - n,
                        y: e.y + n
                      }, {
                        x: e.x + n,
                        y: e.y + n
                      });
                      break;
                    case "bottom":
                      r.push({
                        x: e.x - n,
                        y: e.y - n
                      }, {
                        x: e.x + n,
                        y: e.y - n
                      });
                      break;
                    case "left":
                      r.push({
                        x: e.x + n,
                        y: e.y - n
                      }, {
                        x: e.x + n,
                        y: e.y + n
                      });
                      break;
                    case "right":
                      r.push({
                        x: e.x - n,
                        y: e.y - n
                      }, {
                        x: e.x - n,
                        y: e.y + n
                      })
                  }
                  return r
                }(r, function(e, t) {
                  const n = Math.abs(t.top - e.y),
                    r = Math.abs(t.bottom - e.y),
                    o = Math.abs(t.right - e.x),
                    i = Math.abs(t.left - e.x);
                  switch (Math.min(n, r, o, i)) {
                    case i:
                      return "left";
                    case o:
                      return "right";
                    case n:
                      return "top";
                    case r:
                      return "bottom";
                    default:
                      throw new Error("unreachable")
                  }
                }(r, n.getBoundingClientRect())),
                i = function(e) {
                  const t = e.slice();
                  return t.sort(((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0)),
                    function(e) {
                      if (e.length <= 1) return e.slice();
                      const t = [];
                      for (let n = 0; n < e.length; n++) {
                        const r = e[n];
                        for (; t.length >= 2;) {
                          const e = t[t.length - 1],
                            n = t[t.length - 2];
                          if (!((e.x - n.x) * (r.y - n.y) >= (e.y - n.y) * (r.x - n.x))) break;
                          t.pop()
                        }
                        t.push(r)
                      }
                      t.pop();
                      const n = [];
                      for (let t = e.length - 1; t >= 0; t--) {
                        const r = e[t];
                        for (; n.length >= 2;) {
                          const e = n[n.length - 1],
                            t = n[n.length - 2];
                          if (!((e.x - t.x) * (r.y - t.y) >= (e.y - t.y) * (r.x - t.x))) break;
                          n.pop()
                        }
                        n.push(r)
                      }
                      return n.pop(), 1 === t.length && 1 === n.length && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n)
                    }(t)
                }([...o, ... function(e) {
                  const {
                    top: t,
                    right: n,
                    bottom: r,
                    left: o
                  } = e;
                  return [{
                    x: o,
                    y: t
                  }, {
                    x: n,
                    y: t
                  }, {
                    x: n,
                    y: r
                  }, {
                    x: o,
                    y: r
                  }]
                }(t.getBoundingClientRect())]);
              u(i), p(!0)
            }), [p]);
          return s.useEffect((() => () => h()), [h]), s.useEffect((() => {
            if (c && f) {
              const e = e => v(e, f),
                t = e => v(e, c);
              return c.addEventListener("pointerleave", e), f.addEventListener("pointerleave", t), () => {
                c.removeEventListener("pointerleave", e), f.removeEventListener("pointerleave", t)
              }
            }
          }), [c, f, v, h]), s.useEffect((() => {
            if (l) {
              const e = e => {
                const t = e.target,
                  n = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  r = c?.contains(t) || f?.contains(t),
                  o = ! function(e, t) {
                    const {
                      x: n,
                      y: r
                    } = e;
                    let o = !1;
                    for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                      const a = t[e],
                        s = t[i],
                        l = a.x,
                        u = a.y,
                        c = s.x,
                        d = s.y;
                      u > r != d > r && n < (c - l) * (r - u) / (d - u) + l && (o = !o)
                    }
                    return o
                  }(n, l);
                r ? h() : o && (h(), d())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }), [c, f, l, d, h]), (0, i.jsx)(sc, {
            ...e,
            ref: a
          })
        })),
        [oc, ic] = zu(Wu, {
          isInside: !1
        }),
        ac = (0, l.createSlottable)("TooltipContent"),
        sc = s.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            children: r,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            ...u
          } = e, c = Uu(tc, n), d = Iu(n), {
            onClose: f
          } = c;
          return s.useEffect((() => (document.addEventListener(qu, f), () => document.removeEventListener(qu, f))), [f]), s.useEffect((() => {
            if (c.trigger) {
              const e = e => {
                const t = e.target;
                t?.contains(c.trigger) && f()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }), [c.trigger, f]), (0, i.jsx)(Nu.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: f,
            children: (0, i.jsxs)(Lu.UC, {
              "data-state": c.stateAttribute,
              ...d,
              ...u,
              ref: t,
              style: {
                ...u.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, i.jsx)(ac, {
                children: r
              }), (0, i.jsx)(oc, {
                scope: n,
                isInside: !0,
                children: (0, i.jsx)(Ru.Root, {
                  id: c.contentId,
                  role: "tooltip",
                  children: o || r
                })
              })]
            })
          })
        }));
      nc.displayName = tc;
      var lc = "TooltipArrow",
        uc = s.forwardRef(((e, t) => {
          const {
            __scopeTooltip: n,
            ...r
          } = e, o = Iu(n);
          return ic(lc, n).isInside ? null : (0, i.jsx)(Lu.i3, {
            ...o,
            ...r,
            ref: t
          })
        }));
      uc.displayName = lc;
      var cc = Hu,
        dc = Ku,
        fc = Yu,
        pc = ec,
        hc = nc,
        vc = uc;
      const gc = ({
        content: e,
        children: t,
        side: n = "top",
        sideOffset: r = 8,
        align: o = "center",
        alignOffset: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: u,
        collisionPadding: c,
        sticky: d = "partial",
        onEscapeKeyDown: f,
        onPointerDownOutside: p,
        label: h,
        defaultOpen: v,
        open: g,
        onOpenChange: m,
        delayDuration: y = 400,
        portal: b = !0,
        arrow: w = !0,
        portalContainer: _,
        testId: j
      }) => {
        const [k = !1, x] = $({
          defaultProp: v,
          prop: g,
          onChange: m
        }), S = V(k), C = ys({
          opacity: k ? 1 : 0,
          immediate: k && !S
        }), O = "left" === n || "right" === n ? "center" : o, P = b ? {
          container: _
        } : {}, E = b ? pc : s.Fragment, N = w ? {
          className: "foundry_nk7jgu_h3lgaa2"
        } : {}, T = w ? vc : s.Fragment;
        return (0, i.jsx)(cc, {
          delayDuration: y,
          children: (0, i.jsxs)(dc, {
            open: k,
            onOpenChange: x,
            children: [(0, i.jsx)(fc, {
              asChild: !0,
              className: "foundry_nk7jgu_h3lgaa3",
              onClick: e => e.preventDefault?.(),
              children: t
            }), (0, i.jsx)(E, {
              ...P,
              children: (0, i.jsx)(hc, {
                side: n,
                align: O,
                sticky: d,
                forceMount: !0,
                "aria-label": h,
                "data-testid": j,
                sideOffset: r,
                alignOffset: a,
                onEscapeKeyDown: f,
                avoidCollisions: l,
                collisionPadding: c,
                collisionBoundary: u,
                onPointerDownOutside: p,
                children: (0, i.jsxs)(zs.div, {
                  className: "foundry_nk7jgu_h3lgaa0",
                  style: C,
                  children: [(0, i.jsx)(M, {
                    size: "SM",
                    className: "foundry_nk7jgu_h3lgaa1",
                    asChild: !0,
                    children: (0, i.jsx)("span", {
                      children: e
                    })
                  }), (0, i.jsx)(T, {
                    ...N
                  })]
                })
              })
            })]
          })
        })
      };
      var mc = "foundry_nk7jgu_bwy1ds1",
        yc = "foundry_nk7jgu_bwy1dsg",
        bc = "foundry_nk7jgu_bwy1dsf";
      const wc = e => {
        e.preventDefault?.()
      };
      (0, s.forwardRef)((({
        onClose: e,
        onDownload: t,
        zoomLevel: n,
        zoomIn: r,
        zoomOut: o,
        zoomTo: a,
        minZoomLevel: s,
        maxZoomLevel: l,
        canZoomIn: u,
        canZoomOut: c,
        resetZoom: d,
        caption: f,
        showDownloadButton: p,
        defaultZoomLevel: h,
        showZoomControls: v
      }, g) => {
        const m = Qs(),
          y = I("screen and (max-width: 1024px)"),
          b = n !== h,
          w = y ? "SM" : "LG",
          _ = ys({
            opacity: b ? 1 : 0,
            immediate: q()
          });
        bu(["+", "=", "add", "plus"], (() => r?.()), {
          preventDefault: !0,
          enabled: v
        }), bu(["minus", "subtract"], (() => o?.()), {
          preventDefault: !0,
          enabled: v
        }), bu("r", (() => d?.()), {
          preventDefault: !0,
          enabled: v
        });
        const j = H() && y;
        return (0, i.jsx)(gu, {
          children: (0, i.jsxs)("div", {
            className: "foundry_nk7jgu_bwy1ds0",
            ref: g,
            children: [(0, i.jsx)(gc, {
              side: "right",
              portal: !1,
              delayDuration: 0,
              onPointerDownOutside: wc,
              content: (0, i.jsxs)("div", {
                className: bc,
                children: [m.formatMessage($l), (0, i.jsx)(M, {
                  size: "XS",
                  className: yc,
                  children: m.formatMessage(Hl, {
                    shortcut: (0, i.jsx)(Eu, {
                      shortcut: "Esc",
                      isInline: !0
                    })
                  })
                })]
              }),
              children: (0, i.jsx)(Ou, {
                size: w,
                appearance: "tertiary",
                icon: "ArrowLeft",
                label: m.formatMessage($l),
                className: (0, O.$)(mc, "foundry_nk7jgu_bwy1ds2"),
                onPress: e
              })
            }), (0, i.jsxs)("div", {
              className: "foundry_nk7jgu_bwy1ds3",
              children: [!j && v && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsxs)("div", {
                  className: "foundry_nk7jgu_bwy1ds4",
                  children: [(0, i.jsx)(gc, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: wc,
                    content: (0, i.jsxs)("div", {
                      className: bc,
                      children: [m.formatMessage(Wl), (0, i.jsx)(M, {
                        size: "XS",
                        className: yc,
                        children: m.formatMessage(Gl, {
                          shortcut: (0, i.jsx)(Eu, {
                            shortcut: "+",
                            isInline: !0
                          })
                        })
                      })]
                    }),
                    children: (0, i.jsx)(Ou, {
                      size: w,
                      appearance: "tertiary",
                      icon: "Plus",
                      label: m.formatMessage(Wl),
                      className: (0, O.$)(mc, "foundry_nk7jgu_bwy1ds5"),
                      onPress: () => r(),
                      isDisabled: !u
                    })
                  }), (0, i.jsxs)(Vl, {
                    className: "foundry_nk7jgu_bwy1dsa",
                    value: [n],
                    max: l,
                    min: s,
                    step: 1,
                    orientation: "vertical",
                    onValueChange: e => a?.(e[0]),
                    children: [(0, i.jsx)(Fl, {
                      className: "foundry_nk7jgu_bwy1dsb",
                      children: (0, i.jsx)(ql, {
                        className: "foundry_nk7jgu_bwy1dsc"
                      })
                    }), (0, i.jsx)(gc, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: wc,
                      content: m.formatMessage(Ql, {
                        zoom: n.toFixed(0)
                      }),
                      children: (0, i.jsx)(Bl, {
                        className: "foundry_nk7jgu_bwy1dsd",
                        "aria-label": m.formatMessage(Zl),
                        children: (0, i.jsx)("span", {
                          className: "foundry_nk7jgu_bwy1dse"
                        })
                      })
                    })]
                  }), (0, i.jsx)(gc, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: wc,
                    content: (0, i.jsxs)("div", {
                      className: bc,
                      children: [m.formatMessage(Ul), (0, i.jsx)(M, {
                        size: "XS",
                        className: yc,
                        children: m.formatMessage(Kl, {
                          shortcut: (0, i.jsx)(Eu, {
                            shortcut: "-",
                            isInline: !0
                          })
                        })
                      })]
                    }),
                    children: (0, i.jsx)(Ou, {
                      size: w,
                      appearance: "tertiary",
                      icon: "Minus",
                      label: m.formatMessage(Ul),
                      className: (0, O.$)(mc, "foundry_nk7jgu_bwy1ds6"),
                      onPress: () => o(),
                      isDisabled: !c
                    })
                  })]
                }), (0, i.jsx)(zs.div, {
                  style: _,
                  children: (0, i.jsx)(gc, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: wc,
                    content: (0, i.jsxs)("div", {
                      className: bc,
                      children: [m.formatMessage(Xl), (0, i.jsx)(M, {
                        size: "XS",
                        className: yc,
                        children: m.formatMessage(Yl, {
                          shortcut: (0, i.jsx)(Eu, {
                            shortcut: "R",
                            isInline: !0
                          })
                        })
                      })]
                    }),
                    children: (0, i.jsx)(Ou, {
                      size: w,
                      appearance: "tertiary",
                      icon: "Undo",
                      label: m.formatMessage(Xl),
                      className: (0, O.$)(mc, "foundry_nk7jgu_bwy1ds7"),
                      onPress: d,
                      isDisabled: !b,
                      "aria-hidden": !b
                    })
                  })
                })]
              }), p && j && (0, i.jsx)(gc, {
                side: "left",
                portal: !1,
                delayDuration: 0,
                onPointerDownOutside: wc,
                content: m.formatMessage(eu),
                children: (0, i.jsx)(Ou, {
                  size: w,
                  appearance: "tertiary",
                  icon: "Download",
                  label: m.formatMessage(Jl),
                  className: mc,
                  onPress: e
                })
              })]
            }), (0, i.jsxs)("div", {
              className: "foundry_nk7jgu_bwy1ds8",
              children: [f && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                  className: "foundry_nk7jgu_bwy1dsh"
                }), (0, i.jsx)(M, {
                  size: "SM",
                  "aria-hidden": !0,
                  asChild: "string" != typeof f,
                  children: f
                })]
              }), p && !j && (0, i.jsx)("div", {
                className: "foundry_nk7jgu_bwy1ds9",
                children: (0, i.jsx)(gc, {
                  side: "left",
                  portal: !1,
                  delayDuration: 0,
                  onPointerDownOutside: wc,
                  content: m.formatMessage(eu),
                  children: (0, i.jsx)(Ou, {
                    size: w,
                    appearance: "tertiary",
                    icon: "Download",
                    label: m.formatMessage(Jl),
                    className: mc,
                    onPress: t
                  })
                })
              })]
            })]
          })
        })
      }));
      var _c = n(24780);
      zs(_c.Overlay), zs(_c.Content), (0, a.AK)(.77, 0, .175, 1);
      var jc = n(27114),
        kc = n(72480),
        xc = n(27734),
        Sc = n(85307),
        Cc = n(98463),
        Oc = n(19690),
        Pc = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Ec = [" ", "Enter"],
        Nc = "Select",
        [Tc, Lc, Dc] = (0, dl.N)(Nc),
        [Mc, Rc] = (0, il.A)(Nc, [Dc, Lu.Bk]),
        zc = (0, Lu.Bk)(),
        [Ac, Ic] = Mc(Nc),
        [Vc, Fc] = Mc(Nc),
        qc = e => {
          const {
            __scopeSelect: t,
            children: n,
            open: r,
            defaultOpen: o,
            onOpenChange: a,
            value: l,
            defaultValue: u,
            onValueChange: c,
            dir: d,
            name: f,
            autoComplete: p,
            disabled: h,
            required: v,
            form: g
          } = e, m = zc(t), [y, b] = s.useState(null), [w, _] = s.useState(null), [j, k] = s.useState(!1), x = (0, sl.jH)(d), [S, C] = (0, al.i)({
            prop: r,
            defaultProp: o ?? !1,
            onChange: a,
            caller: Nc
          }), [O, P] = (0, al.i)({
            prop: l,
            defaultProp: u,
            onChange: c,
            caller: Nc
          }), E = s.useRef(null), N = !y || g || !!y.closest("form"), [T, L] = s.useState(new Set), D = Array.from(T).map((e => e.props.value)).join(";");
          return (0, i.jsx)(Lu.bL, {
            ...m,
            children: (0, i.jsxs)(Ac, {
              required: v,
              scope: t,
              trigger: y,
              onTriggerChange: b,
              valueNode: w,
              onValueNodeChange: _,
              valueNodeHasChildren: j,
              onValueNodeHasChildrenChange: k,
              contentId: (0, Tu.useId)(),
              value: O,
              onValueChange: P,
              open: S,
              onOpenChange: C,
              dir: x,
              triggerPointerDownPosRef: E,
              disabled: h,
              children: [(0, i.jsx)(Tc.Provider, {
                scope: t,
                children: (0, i.jsx)(Vc, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: s.useCallback((e => {
                    L((t => new Set(t).add(e)))
                  }), []),
                  onNativeOptionRemove: s.useCallback((e => {
                    L((t => {
                      const n = new Set(t);
                      return n.delete(e), n
                    }))
                  }), []),
                  children: n
                })
              }), N ? (0, i.jsxs)(jd, {
                "aria-hidden": !0,
                required: v,
                tabIndex: -1,
                name: f,
                autoComplete: p,
                value: O,
                onChange: e => P(e.target.value),
                disabled: h,
                form: g,
                children: [void 0 === O ? (0, i.jsx)("option", {
                  value: ""
                }) : null, Array.from(T)]
              }, D) : null]
            })
          })
        };
      qc.displayName = Nc;
      var Bc = "SelectTrigger",
        $c = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            disabled: r = !1,
            ...o
          } = e, a = zc(n), l = Ic(Bc, n), u = l.disabled || r, c = (0, ol.s)(t, l.onTriggerChange), d = Lc(n), f = s.useRef("touch"), [p, h, v] = xd((e => {
            const t = d().filter((e => !e.disabled)),
              n = t.find((e => e.value === l.value)),
              r = Sd(t, e, n);
            void 0 !== r && l.onValueChange(r.value)
          })), g = e => {
            u || (l.onOpenChange(!0), v()), e && (l.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, i.jsx)(Lu.Mz, {
            asChild: !0,
            ...a,
            children: (0, i.jsx)(cl.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": l.contentId,
              "aria-expanded": l.open,
              "aria-required": l.required,
              "aria-autocomplete": "none",
              dir: l.dir,
              "data-state": l.open ? "open" : "closed",
              disabled: u,
              "data-disabled": u ? "" : void 0,
              "data-placeholder": kd(l.value) ? "" : void 0,
              ...o,
              ref: c,
              onClick: (0, rl.m)(o.onClick, (e => {
                e.currentTarget.focus(), "mouse" !== f.current && g(e)
              })),
              onPointerDown: (0, rl.m)(o.onPointerDown, (e => {
                f.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (g(e), e.preventDefault())
              })),
              onKeyDown: (0, rl.m)(o.onKeyDown, (e => {
                const t = "" !== p.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || h(e.key), t && " " === e.key || Pc.includes(e.key) && (g(), e.preventDefault())
              }))
            })
          })
        }));
      $c.displayName = Bc;
      var Hc = "SelectValue",
        Wc = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            children: a,
            placeholder: s = "",
            ...l
          } = e, u = Ic(Hc, n), {
            onValueNodeHasChildrenChange: c
          } = u, d = void 0 !== a, f = (0, ol.s)(t, u.onValueNodeChange);
          return (0, Sc.N)((() => {
            c(d)
          }), [c, d]), (0, i.jsx)(cl.sG.span, {
            ...l,
            ref: f,
            style: {
              pointerEvents: "none"
            },
            children: kd(u.value) ? (0, i.jsx)(i.Fragment, {
              children: s
            }) : a
          })
        }));
      Wc.displayName = Hc;
      var Gc = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          children: r,
          ...o
        } = e;
        return (0, i.jsx)(cl.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: r || "▼"
        })
      }));
      Gc.displayName = "SelectIcon";
      var Uc = e => (0, i.jsx)(Du.Portal, {
        asChild: !0,
        ...e
      });
      Uc.displayName = "SelectPortal";
      var Kc = "SelectContent",
        Xc = s.forwardRef(((e, t) => {
          const n = Ic(Kc, e.__scopeSelect),
            [r, o] = s.useState();
          if ((0, Sc.N)((() => {
              o(new DocumentFragment)
            }), []), !n.open) {
            const t = r;
            return t ? Ht.createPortal((0, i.jsx)(Zc, {
              scope: e.__scopeSelect,
              children: (0, i.jsx)(Tc.Slot, {
                scope: e.__scopeSelect,
                children: (0, i.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, i.jsx)(ed, {
            ...e,
            ref: t
          })
        }));
      Xc.displayName = Kc;
      var Yc = 10,
        [Zc, Qc] = Mc(Kc),
        Jc = (0, l.createSlot)("SelectContent.RemoveScroll"),
        ed = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            position: r = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            side: u,
            sideOffset: c,
            align: d,
            alignOffset: f,
            arrowPadding: p,
            collisionBoundary: h,
            collisionPadding: v,
            sticky: g,
            hideWhenDetached: m,
            avoidCollisions: y,
            ...b
          } = e, w = Ic(Kc, n), [_, j] = s.useState(null), [k, x] = s.useState(null), S = (0, ol.s)(t, (e => j(e))), [C, O] = s.useState(null), [P, E] = s.useState(null), N = Lc(n), [T, L] = s.useState(!1), D = s.useRef(!1);
          s.useEffect((() => {
            if (_) return (0, Cc.Eq)(_)
          }), [_]), (0, jc.Oh)();
          const M = s.useCallback((e => {
              const [t, ...n] = N().map((e => e.ref.current)), [r] = n.slice(-1), o = document.activeElement;
              for (const n of e) {
                if (n === o) return;
                if (n?.scrollIntoView({
                    block: "nearest"
                  }), n === t && k && (k.scrollTop = 0), n === r && k && (k.scrollTop = k.scrollHeight), n?.focus(), document.activeElement !== o) return
              }
            }), [N, k]),
            R = s.useCallback((() => M([C, _])), [M, C, _]);
          s.useEffect((() => {
            T && R()
          }), [T, R]);
          const {
            onOpenChange: z,
            triggerPointerDownPosRef: A
          } = w;
          s.useEffect((() => {
            if (_) {
              let e = {
                x: 0,
                y: 0
              };
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (A.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (A.current?.y ?? 0))
                  }
                },
                n = n => {
                  e.x <= 10 && e.y <= 10 ? n.preventDefault() : _.contains(n.target) || z(!1), document.removeEventListener("pointermove", t), A.current = null
                };
              return null !== A.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", n, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", n, {
                  capture: !0
                })
              }
            }
          }), [_, z, A]), s.useEffect((() => {
            const e = () => z(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }), [z]);
          const [I, V] = xd((e => {
            const t = N().filter((e => !e.disabled)),
              n = t.find((e => e.ref.current === document.activeElement)),
              r = Sd(t, e, n);
            r && setTimeout((() => r.ref.current.focus()))
          })), F = s.useCallback(((e, t, n) => {
            const r = !D.current && !n;
            (void 0 !== w.value && w.value === t || r) && (O(e), r && (D.current = !0))
          }), [w.value]), q = s.useCallback((() => _?.focus()), [_]), B = s.useCallback(((e, t, n) => {
            const r = !D.current && !n;
            (void 0 !== w.value && w.value === t || r) && E(e)
          }), [w.value]), $ = "popper" === r ? nd : td, H = $ === nd ? {
            side: u,
            sideOffset: c,
            align: d,
            alignOffset: f,
            arrowPadding: p,
            collisionBoundary: h,
            collisionPadding: v,
            sticky: g,
            hideWhenDetached: m,
            avoidCollisions: y
          } : {};
          return (0, i.jsx)(Zc, {
            scope: n,
            content: _,
            viewport: k,
            onViewportChange: x,
            itemRefCallback: F,
            selectedItem: C,
            onItemLeave: q,
            itemTextRefCallback: B,
            focusSelectedItem: R,
            selectedItemText: P,
            position: r,
            isPositioned: T,
            searchRef: I,
            children: (0, i.jsx)(Oc.RemoveScroll, {
              as: Jc,
              allowPinchZoom: !0,
              children: (0, i.jsx)(kc.n, {
                asChild: !0,
                trapped: w.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, rl.m)(o, (e => {
                  w.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, i.jsx)(Nu.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: a,
                  onPointerDownOutside: l,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => w.onOpenChange(!1),
                  children: (0, i.jsx)($, {
                    role: "listbox",
                    id: w.contentId,
                    "data-state": w.open ? "open" : "closed",
                    dir: w.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...b,
                    ...H,
                    onPlaced: () => L(!0),
                    ref: S,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: (0, rl.m)(b.onKeyDown, (e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || V(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = N().filter((e => !e.disabled));
                        let n = t.map((e => e.ref.current));
                        if (["ArrowUp", "End"].includes(e.key) && (n = n.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            r = n.indexOf(t);
                          n = n.slice(r + 1)
                        }
                        setTimeout((() => M(n))), e.preventDefault()
                      }
                    }))
                  })
                })
              })
            })
          })
        }));
      ed.displayName = "SelectContentImpl";
      var td = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onPlaced: r,
          ...o
        } = e, a = Ic(Kc, n), l = Qc(Kc, n), [u, c] = s.useState(null), [d, f] = s.useState(null), p = (0, ol.s)(t, (e => f(e))), h = Lc(n), v = s.useRef(!1), g = s.useRef(!0), {
          viewport: m,
          selectedItem: y,
          selectedItemText: b,
          focusSelectedItem: w
        } = l, _ = s.useCallback((() => {
          if (a.trigger && a.valueNode && u && d && m && y && b) {
            const e = a.trigger.getBoundingClientRect(),
              t = d.getBoundingClientRect(),
              n = a.valueNode.getBoundingClientRect(),
              o = b.getBoundingClientRect();
            if ("rtl" !== a.dir) {
              const r = o.left - t.left,
                i = n.left - r,
                a = e.left - i,
                s = e.width + a,
                l = Math.max(s, t.width),
                c = window.innerWidth - Yc,
                d = nl(i, [Yc, Math.max(Yc, c - l)]);
              u.style.minWidth = s + "px", u.style.left = d + "px"
            } else {
              const r = t.right - o.right,
                i = window.innerWidth - n.right - r,
                a = window.innerWidth - e.right - i,
                s = e.width + a,
                l = Math.max(s, t.width),
                c = window.innerWidth - Yc,
                d = nl(i, [Yc, Math.max(Yc, c - l)]);
              u.style.minWidth = s + "px", u.style.right = d + "px"
            }
            const i = h(),
              s = window.innerHeight - 2 * Yc,
              l = m.scrollHeight,
              c = window.getComputedStyle(d),
              f = parseInt(c.borderTopWidth, 10),
              p = parseInt(c.paddingTop, 10),
              g = parseInt(c.borderBottomWidth, 10),
              w = f + p + l + parseInt(c.paddingBottom, 10) + g,
              _ = Math.min(5 * y.offsetHeight, w),
              j = window.getComputedStyle(m),
              k = parseInt(j.paddingTop, 10),
              x = parseInt(j.paddingBottom, 10),
              S = e.top + e.height / 2 - Yc,
              C = s - S,
              O = y.offsetHeight / 2,
              P = f + p + (y.offsetTop + O),
              E = w - P;
            if (P <= S) {
              const e = i.length > 0 && y === i[i.length - 1].ref.current;
              u.style.bottom = "0px";
              const t = d.clientHeight - m.offsetTop - m.offsetHeight,
                n = P + Math.max(C, O + (e ? x : 0) + t + g);
              u.style.height = n + "px"
            } else {
              const e = i.length > 0 && y === i[0].ref.current;
              u.style.top = "0px";
              const t = Math.max(S, f + m.offsetTop + (e ? k : 0) + O) + E;
              u.style.height = t + "px", m.scrollTop = P - S + m.offsetTop
            }
            u.style.margin = `${Yc}px 0`, u.style.minHeight = _ + "px", u.style.maxHeight = s + "px", r?.(), requestAnimationFrame((() => v.current = !0))
          }
        }), [h, a.trigger, a.valueNode, u, d, m, y, b, a.dir, r]);
        (0, Sc.N)((() => _()), [_]);
        const [j, k] = s.useState();
        (0, Sc.N)((() => {
          d && k(window.getComputedStyle(d).zIndex)
        }), [d]);
        const x = s.useCallback((e => {
          e && !0 === g.current && (_(), w?.(), g.current = !1)
        }), [_, w]);
        return (0, i.jsx)(rd, {
          scope: n,
          contentWrapper: u,
          shouldExpandOnScrollRef: v,
          onScrollButtonChange: x,
          children: (0, i.jsx)("div", {
            ref: c,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: j
            },
            children: (0, i.jsx)(cl.sG.div, {
              ...o,
              ref: p,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...o.style
              }
            })
          })
        })
      }));
      td.displayName = "SelectItemAlignedPosition";
      var nd = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          align: r = "start",
          collisionPadding: o = Yc,
          ...a
        } = e, s = zc(n);
        return (0, i.jsx)(Lu.UC, {
          ...s,
          ...a,
          ref: t,
          align: r,
          collisionPadding: o,
          style: {
            boxSizing: "border-box",
            ...a.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      }));
      nd.displayName = "SelectPopperPosition";
      var [rd, od] = Mc(Kc, {}), id = "SelectViewport", ad = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          nonce: r,
          ...o
        } = e, a = Qc(id, n), l = od(id, n), u = (0, ol.s)(t, a.onViewportChange), c = s.useRef(0);
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: r
          }), (0, i.jsx)(Tc.Slot, {
            scope: n,
            children: (0, i.jsx)(cl.sG.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...o,
              ref: u,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...o.style
              },
              onScroll: (0, rl.m)(o.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: n,
                    shouldExpandOnScrollRef: r
                  } = l;
                if (r?.current && n) {
                  const e = Math.abs(c.current - t.scrollTop);
                  if (e > 0) {
                    const r = window.innerHeight - 2 * Yc,
                      o = parseFloat(n.style.minHeight),
                      i = parseFloat(n.style.height),
                      a = Math.max(o, i);
                    if (a < r) {
                      const o = a + e,
                        i = Math.min(r, o),
                        s = o - i;
                      n.style.height = i + "px", "0px" === n.style.bottom && (t.scrollTop = s > 0 ? s : 0, n.style.justifyContent = "flex-end")
                    }
                  }
                }
                c.current = t.scrollTop
              }))
            })
          })]
        })
      }));
      ad.displayName = id;
      var sd = "SelectGroup",
        [ld, ud] = Mc(sd);
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = (0, Tu.useId)();
        return (0, i.jsx)(ld, {
          scope: n,
          id: o,
          children: (0, i.jsx)(cl.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...r,
            ref: t
          })
        })
      })).displayName = sd;
      var cd = "SelectLabel";
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = ud(cd, n);
        return (0, i.jsx)(cl.sG.div, {
          id: o.id,
          ...r,
          ref: t
        })
      })).displayName = cd;
      var dd = "SelectItem",
        [fd, pd] = Mc(dd),
        hd = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            value: r,
            disabled: o = !1,
            textValue: a,
            ...l
          } = e, u = Ic(dd, n), c = Qc(dd, n), d = u.value === r, [f, p] = s.useState(a ?? ""), [h, v] = s.useState(!1), g = (0, ol.s)(t, (e => c.itemRefCallback?.(e, r, o))), m = (0, Tu.useId)(), y = s.useRef("touch"), b = () => {
            o || (u.onValueChange(r), u.onOpenChange(!1))
          };
          if ("" === r) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, i.jsx)(fd, {
            scope: n,
            value: r,
            disabled: o,
            textId: m,
            isSelected: d,
            onItemTextChange: s.useCallback((e => {
              p((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, i.jsx)(Tc.ItemSlot, {
              scope: n,
              value: r,
              disabled: o,
              textValue: f,
              children: (0, i.jsx)(cl.sG.div, {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": h ? "" : void 0,
                "aria-selected": d && h,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...l,
                ref: g,
                onFocus: (0, rl.m)(l.onFocus, (() => v(!0))),
                onBlur: (0, rl.m)(l.onBlur, (() => v(!1))),
                onClick: (0, rl.m)(l.onClick, (() => {
                  "mouse" !== y.current && b()
                })),
                onPointerUp: (0, rl.m)(l.onPointerUp, (() => {
                  "mouse" === y.current && b()
                })),
                onPointerDown: (0, rl.m)(l.onPointerDown, (e => {
                  y.current = e.pointerType
                })),
                onPointerMove: (0, rl.m)(l.onPointerMove, (e => {
                  y.current = e.pointerType, o ? c.onItemLeave?.() : "mouse" === y.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: (0, rl.m)(l.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && c.onItemLeave?.()
                })),
                onKeyDown: (0, rl.m)(l.onKeyDown, (e => {
                  "" !== c.searchRef?.current && " " === e.key || (Ec.includes(e.key) && b(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      hd.displayName = dd;
      var vd = "SelectItemText",
        gd = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: n,
            className: r,
            style: o,
            ...a
          } = e, l = Ic(vd, n), u = Qc(vd, n), c = pd(vd, n), d = Fc(vd, n), [f, p] = s.useState(null), h = (0, ol.s)(t, (e => p(e)), c.onItemTextChange, (e => u.itemTextRefCallback?.(e, c.value, c.disabled))), v = f?.textContent, g = s.useMemo((() => (0, i.jsx)("option", {
            value: c.value,
            disabled: c.disabled,
            children: v
          }, c.value)), [c.disabled, c.value, v]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: y
          } = d;
          return (0, Sc.N)((() => (m(g), () => y(g))), [m, y, g]), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(cl.sG.span, {
              id: c.textId,
              ...a,
              ref: h
            }), c.isSelected && l.valueNode && !l.valueNodeHasChildren ? Ht.createPortal(a.children, l.valueNode) : null]
          })
        }));
      gd.displayName = vd;
      var md = "SelectItemIndicator";
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return pd(md, n).isSelected ? (0, i.jsx)(cl.sG.span, {
          "aria-hidden": !0,
          ...r,
          ref: t
        }) : null
      })).displayName = md;
      var yd = "SelectScrollUpButton";
      s.forwardRef(((e, t) => {
        const n = Qc(yd, e.__scopeSelect),
          r = od(yd, e.__scopeSelect),
          [o, a] = s.useState(!1),
          l = (0, ol.s)(t, r.onScrollButtonChange);
        return (0, Sc.N)((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              a(e)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), o ? (0, i.jsx)(wd, {
          ...e,
          ref: l,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = n;
            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
          }
        }) : null
      })).displayName = yd;
      var bd = "SelectScrollDownButton";
      s.forwardRef(((e, t) => {
        const n = Qc(bd, e.__scopeSelect),
          r = od(bd, e.__scopeSelect),
          [o, a] = s.useState(!1),
          l = (0, ol.s)(t, r.onScrollButtonChange);
        return (0, Sc.N)((() => {
          if (n.viewport && n.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                n = Math.ceil(t.scrollTop) < e;
              a(n)
            };
            const t = n.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [n.viewport, n.isPositioned]), o ? (0, i.jsx)(wd, {
          ...e,
          ref: l,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = n;
            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
          }
        }) : null
      })).displayName = bd;
      var wd = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          onAutoScroll: r,
          ...o
        } = e, a = Qc("SelectScrollButton", n), l = s.useRef(null), u = Lc(n), c = s.useCallback((() => {
          null !== l.current && (window.clearInterval(l.current), l.current = null)
        }), []);
        return s.useEffect((() => () => c()), [c]), (0, Sc.N)((() => {
          const e = u().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [u]), (0, i.jsx)(cl.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, rl.m)(o.onPointerDown, (() => {
            null === l.current && (l.current = window.setInterval(r, 50))
          })),
          onPointerMove: (0, rl.m)(o.onPointerMove, (() => {
            a.onItemLeave?.(), null === l.current && (l.current = window.setInterval(r, 50))
          })),
          onPointerLeave: (0, rl.m)(o.onPointerLeave, (() => {
            c()
          }))
        })
      }));
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e;
        return (0, i.jsx)(cl.sG.div, {
          "aria-hidden": !0,
          ...r,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var _d = "SelectArrow";
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: n,
          ...r
        } = e, o = zc(n), a = Ic(_d, n), s = Qc(_d, n);
        return a.open && "popper" === s.position ? (0, i.jsx)(Lu.i3, {
          ...o,
          ...r,
          ref: t
        }) : null
      })).displayName = _d;
      var jd = s.forwardRef((({
        __scopeSelect: e,
        value: t,
        ...n
      }, r) => {
        const o = s.useRef(null),
          a = (0, ol.s)(r, o),
          l = (0, ll.Z)(t);
        return s.useEffect((() => {
          const e = o.current;
          if (!e) return;
          const n = window.HTMLSelectElement.prototype,
            r = Object.getOwnPropertyDescriptor(n, "value").set;
          if (l !== t && r) {
            const n = new Event("change", {
              bubbles: !0
            });
            r.call(e, t), e.dispatchEvent(n)
          }
        }), [l, t]), (0, i.jsx)(cl.sG.select, {
          ...n,
          style: {
            ...Ru.VISUALLY_HIDDEN_STYLES,
            ...n.style
          },
          ref: a,
          defaultValue: t
        })
      }));

      function kd(e) {
        return "" === e || void 0 === e
      }

      function xd(e) {
        const t = (0, xc.c)(e),
          n = s.useRef(""),
          r = s.useRef(0),
          o = s.useCallback((e => {
            const o = n.current + e;
            t(o),
              function e(t) {
                n.current = t, window.clearTimeout(r.current), "" !== t && (r.current = window.setTimeout((() => e("")), 1e3))
              }(o)
          }), [t]),
          i = s.useCallback((() => {
            n.current = "", window.clearTimeout(r.current)
          }), []);
        return s.useEffect((() => () => window.clearTimeout(r.current)), []), [n, o, i]
      }

      function Sd(e, t, n) {
        const r = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          o = n ? e.indexOf(n) : -1;
        let i = (a = e, s = Math.max(o, 0), a.map(((e, t) => a[(s + t) % a.length])));
        var a, s;
        1 === r.length && (i = i.filter((e => e !== n)));
        const l = i.find((e => e.textValue.toLowerCase().startsWith(r.toLowerCase())));
        return l !== n ? l : void 0
      }
      jd.displayName = "SelectBubbleInput";
      var Cd = qc,
        Od = $c,
        Pd = Wc,
        Ed = Gc,
        Nd = Uc,
        Td = Xc,
        Ld = ad,
        Dd = hd,
        Md = gd,
        Rd = "ScrollArea",
        [zd, Ad] = (0, il.A)(Rd),
        [Id, Vd] = zd(Rd),
        Fd = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            type: r = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...l
          } = e, [u, c] = s.useState(null), [d, f] = s.useState(null), [p, h] = s.useState(null), [v, g] = s.useState(null), [m, y] = s.useState(null), [b, w] = s.useState(0), [_, j] = s.useState(0), [k, x] = s.useState(!1), [S, C] = s.useState(!1), O = (0, ol.s)(t, (e => c(e))), P = (0, sl.jH)(o);
          return (0, i.jsx)(Id, {
            scope: n,
            type: r,
            dir: P,
            scrollHideDelay: a,
            scrollArea: u,
            viewport: d,
            onViewportChange: f,
            content: p,
            onContentChange: h,
            scrollbarX: v,
            onScrollbarXChange: g,
            scrollbarXEnabled: k,
            onScrollbarXEnabledChange: x,
            scrollbarY: m,
            onScrollbarYChange: y,
            scrollbarYEnabled: S,
            onScrollbarYEnabledChange: C,
            onCornerWidthChange: w,
            onCornerHeightChange: j,
            children: (0, i.jsx)(cl.sG.div, {
              dir: P,
              ...l,
              ref: O,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": b + "px",
                "--radix-scroll-area-corner-height": _ + "px",
                ...e.style
              }
            })
          })
        }));
      Fd.displayName = Rd;
      var qd = "ScrollAreaViewport",
        Bd = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            children: r,
            nonce: o,
            ...a
          } = e, l = Vd(qd, n), u = s.useRef(null), c = (0, ol.s)(t, u, l.onViewportChange);
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, i.jsx)(cl.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: c,
              style: {
                overflowX: l.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: l.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, i.jsx)("div", {
                ref: l.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: r
              })
            })]
          })
        }));
      Bd.displayName = qd;
      var $d = "ScrollAreaScrollbar",
        Hd = s.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Vd($d, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: l
          } = o, u = "horizontal" === e.orientation;
          return s.useEffect((() => (u ? a(!0) : l(!0), () => {
            u ? a(!1) : l(!1)
          })), [u, a, l]), "hover" === o.type ? (0, i.jsx)(Wd, {
            ...r,
            ref: t,
            forceMount: n
          }) : "scroll" === o.type ? (0, i.jsx)(Gd, {
            ...r,
            ref: t,
            forceMount: n
          }) : "auto" === o.type ? (0, i.jsx)(Ud, {
            ...r,
            ref: t,
            forceMount: n
          }) : "always" === o.type ? (0, i.jsx)(Kd, {
            ...r,
            ref: t
          }) : null
        }));
      Hd.displayName = $d;
      var Wd = s.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Vd($d, e.__scopeScrollArea), [a, l] = s.useState(!1);
          return s.useEffect((() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const n = () => {
                  window.clearTimeout(t), l(!0)
                },
                r = () => {
                  t = window.setTimeout((() => l(!1)), o.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", n), e.addEventListener("pointerleave", r), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", n), e.removeEventListener("pointerleave", r)
              }
            }
          }), [o.scrollArea, o.scrollHideDelay]), (0, i.jsx)(Mu.C, {
            present: n || a,
            children: (0, i.jsx)(Ud, {
              "data-state": a ? "visible" : "hidden",
              ...r,
              ref: t
            })
          })
        })),
        Gd = s.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Vd($d, e.__scopeScrollArea), a = "horizontal" === e.orientation, l = pf((() => c("SCROLL_END")), 100), [u, c] = (d = {
            hidden: {
              SCROLL: "scrolling"
            },
            scrolling: {
              SCROLL_END: "idle",
              POINTER_ENTER: "interacting"
            },
            interacting: {
              SCROLL: "interacting",
              POINTER_LEAVE: "idle"
            },
            idle: {
              HIDE: "hidden",
              SCROLL: "scrolling",
              POINTER_ENTER: "interacting"
            }
          }, s.useReducer(((e, t) => d[e][t] ?? e), "hidden"));
          var d;
          return s.useEffect((() => {
            if ("idle" === u) {
              const e = window.setTimeout((() => c("HIDE")), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }), [u, o.scrollHideDelay, c]), s.useEffect((() => {
            const e = o.viewport,
              t = a ? "scrollLeft" : "scrollTop";
            if (e) {
              let n = e[t];
              const r = () => {
                const r = e[t];
                n !== r && (c("SCROLL"), l()), n = r
              };
              return e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
            }
          }), [o.viewport, a, c, l]), (0, i.jsx)(Mu.C, {
            present: n || "hidden" !== u,
            children: (0, i.jsx)(Kd, {
              "data-state": "hidden" === u ? "hidden" : "visible",
              ...r,
              ref: t,
              onPointerEnter: (0, rl.m)(e.onPointerEnter, (() => c("POINTER_ENTER"))),
              onPointerLeave: (0, rl.m)(e.onPointerLeave, (() => c("POINTER_LEAVE")))
            })
          })
        })),
        Ud = s.forwardRef(((e, t) => {
          const n = Vd($d, e.__scopeScrollArea),
            {
              forceMount: r,
              ...o
            } = e,
            [a, l] = s.useState(!1),
            u = "horizontal" === e.orientation,
            c = pf((() => {
              if (n.viewport) {
                const e = n.viewport.offsetWidth < n.viewport.scrollWidth,
                  t = n.viewport.offsetHeight < n.viewport.scrollHeight;
                l(u ? e : t)
              }
            }), 10);
          return hf(n.viewport, c), hf(n.content, c), (0, i.jsx)(Mu.C, {
            present: r || a,
            children: (0, i.jsx)(Kd, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        Kd = s.forwardRef(((e, t) => {
          const {
            orientation: n = "vertical",
            ...r
          } = e, o = Vd($d, e.__scopeScrollArea), a = s.useRef(null), l = s.useRef(0), [u, c] = s.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), d = sf(u.viewport, u.content), f = {
            ...r,
            sizes: u,
            onSizesChange: c,
            hasThumb: Boolean(d > 0 && d < 1),
            onThumbChange: e => a.current = e,
            onThumbPointerUp: () => l.current = 0,
            onThumbPointerDown: e => l.current = e
          };

          function p(e, t) {
            return function(e, t, n, r = "ltr") {
              const o = lf(n),
                i = t || o / 2,
                a = o - i,
                s = n.scrollbar.paddingStart + i,
                l = n.scrollbar.size - n.scrollbar.paddingEnd - a,
                u = n.content - n.viewport;
              return cf([s, l], "ltr" === r ? [0, u] : [-1 * u, 0])(e)
            }(e, l.current, u, t)
          }
          return "horizontal" === n ? (0, i.jsx)(Xd, {
            ...f,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = uf(o.viewport.scrollLeft, u, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = p(e, o.dir))
            }
          }) : "vertical" === n ? (0, i.jsx)(Yd, {
            ...f,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = uf(o.viewport.scrollTop, u);
                a.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollTop = p(e))
            }
          }) : null
        })),
        Xd = s.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, a = Vd($d, e.__scopeScrollArea), [l, u] = s.useState(), c = s.useRef(null), d = (0, ol.s)(t, c, a.onScrollbarXChange);
          return s.useEffect((() => {
            c.current && u(getComputedStyle(c.current))
          }), [c]), (0, i.jsx)(Jd, {
            "data-orientation": "horizontal",
            ...o,
            ref: d,
            sizes: n,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": lf(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, n) => {
              if (a.viewport) {
                const r = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(r), df(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              c.current && a.viewport && l && r({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: c.current.clientWidth,
                  paddingStart: af(l.paddingLeft),
                  paddingEnd: af(l.paddingRight)
                }
              })
            }
          })
        })),
        Yd = s.forwardRef(((e, t) => {
          const {
            sizes: n,
            onSizesChange: r,
            ...o
          } = e, a = Vd($d, e.__scopeScrollArea), [l, u] = s.useState(), c = s.useRef(null), d = (0, ol.s)(t, c, a.onScrollbarYChange);
          return s.useEffect((() => {
            c.current && u(getComputedStyle(c.current))
          }), [c]), (0, i.jsx)(Jd, {
            "data-orientation": "vertical",
            ...o,
            ref: d,
            sizes: n,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": lf(n) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, n) => {
              if (a.viewport) {
                const r = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(r), df(r, n) && t.preventDefault()
              }
            },
            onResize: () => {
              c.current && a.viewport && l && r({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: c.current.clientHeight,
                  paddingStart: af(l.paddingTop),
                  paddingEnd: af(l.paddingBottom)
                }
              })
            }
          })
        })),
        [Zd, Qd] = zd($d),
        Jd = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            sizes: r,
            hasThumb: o,
            onThumbChange: a,
            onThumbPointerUp: l,
            onThumbPointerDown: u,
            onThumbPositionChange: c,
            onDragScroll: d,
            onWheelScroll: f,
            onResize: p,
            ...h
          } = e, v = Vd($d, n), [g, m] = s.useState(null), y = (0, ol.s)(t, (e => m(e))), b = s.useRef(null), w = s.useRef(""), _ = v.viewport, j = r.content - r.viewport, k = (0, xc.c)(f), x = (0, xc.c)(c), S = pf(p, 10);

          function C(e) {
            if (b.current) {
              const t = e.clientX - b.current.left,
                n = e.clientY - b.current.top;
              d({
                x: t,
                y: n
              })
            }
          }
          return s.useEffect((() => {
            const e = e => {
              const t = e.target,
                n = g?.contains(t);
              n && k(e, j)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [_, g, j, k]), s.useEffect(x, [r, x]), hf(g, S), hf(v.content, S), (0, i.jsx)(Zd, {
            scope: n,
            scrollbar: g,
            hasThumb: o,
            onThumbChange: (0, xc.c)(a),
            onThumbPointerUp: (0, xc.c)(l),
            onThumbPositionChange: x,
            onThumbPointerDown: (0, xc.c)(u),
            children: (0, i.jsx)(cl.sG.div, {
              ...h,
              ref: y,
              style: {
                position: "absolute",
                ...h.style
              },
              onPointerDown: (0, rl.m)(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = g.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v.viewport && (v.viewport.style.scrollBehavior = "auto"), C(e))
              })),
              onPointerMove: (0, rl.m)(e.onPointerMove, C),
              onPointerUp: (0, rl.m)(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = w.current, v.viewport && (v.viewport.style.scrollBehavior = ""), b.current = null
              }))
            })
          })
        })),
        ef = "ScrollAreaThumb",
        tf = s.forwardRef(((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = Qd(ef, e.__scopeScrollArea);
          return (0, i.jsx)(Mu.C, {
            present: n || o.hasThumb,
            children: (0, i.jsx)(nf, {
              ref: t,
              ...r
            })
          })
        })),
        nf = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: n,
            style: r,
            ...o
          } = e, a = Vd(ef, n), l = Qd(ef, n), {
            onThumbPositionChange: u
          } = l, c = (0, ol.s)(t, (e => l.onThumbChange(e))), d = s.useRef(void 0), f = pf((() => {
            d.current && (d.current(), d.current = void 0)
          }), 100);
          return s.useEffect((() => {
            const e = a.viewport;
            if (e) {
              const t = () => {
                if (f(), !d.current) {
                  const t = ff(e, u);
                  d.current = t, u()
                }
              };
              return u(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [a.viewport, f, u]), (0, i.jsx)(cl.sG.div, {
            "data-state": l.hasThumb ? "visible" : "hidden",
            ...o,
            ref: c,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...r
            },
            onPointerDownCapture: (0, rl.m)(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                n = e.clientX - t.left,
                r = e.clientY - t.top;
              l.onThumbPointerDown({
                x: n,
                y: r
              })
            })),
            onPointerUp: (0, rl.m)(e.onPointerUp, l.onThumbPointerUp)
          })
        }));
      tf.displayName = ef;
      var rf = "ScrollAreaCorner";
      s.forwardRef(((e, t) => {
        const n = Vd(rf, e.__scopeScrollArea),
          r = Boolean(n.scrollbarX && n.scrollbarY);
        return "scroll" !== n.type && r ? (0, i.jsx)(of, {
          ...e,
          ref: t
        }) : null
      })).displayName = rf;
      var of = s.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: n,
          ...r
        } = e, o = Vd(rf, n), [a, l] = s.useState(0), [u, c] = s.useState(0), d = Boolean(a && u);
        return hf(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), c(e)
        })), hf(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), l(e)
        })), d ? (0, i.jsx)(cl.sG.div, {
          ...r,
          ref: t,
          style: {
            width: a,
            height: u,
            position: "absolute",
            right: "ltr" === o.dir ? 0 : void 0,
            left: "rtl" === o.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      }));

      function af(e) {
        return e ? parseInt(e, 10) : 0
      }

      function sf(e, t) {
        const n = e / t;
        return isNaN(n) ? 0 : n
      }

      function lf(e) {
        const t = sf(e.viewport, e.content),
          n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          r = (e.scrollbar.size - n) * t;
        return Math.max(r, 18)
      }

      function uf(e, t, n = "ltr") {
        const r = lf(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          a = t.content - t.viewport,
          s = i - r,
          l = nl(e, "ltr" === n ? [0, a] : [-1 * a, 0]);
        return cf([0, a], [0, s])(l)
      }

      function cf(e, t) {
        return n => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const r = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + r * (n - e[0])
        }
      }

      function df(e, t) {
        return e > 0 && e < t
      }
      var ff = (e, t = () => {}) => {
        let n = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          r = 0;
        return function o() {
          const i = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            a = n.left !== i.left,
            s = n.top !== i.top;
          (a || s) && t(), n = i, r = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(r)
      };

      function pf(e, t) {
        const n = (0, xc.c)(e),
          r = s.useRef(0);
        return s.useEffect((() => () => window.clearTimeout(r.current)), []), s.useCallback((() => {
          window.clearTimeout(r.current), r.current = window.setTimeout(n, t)
        }), [n, t])
      }

      function hf(e, t) {
        const n = (0, xc.c)(t);
        (0, Sc.N)((() => {
          let t = 0;
          if (e) {
            const r = new ResizeObserver((() => {
              cancelAnimationFrame(t), t = window.requestAnimationFrame(n)
            }));
            return r.observe(e), () => {
              window.cancelAnimationFrame(t), r.unobserve(e)
            }
          }
        }), [e, n])
      }
      var vf = Fd,
        gf = Bd,
        mf = Hd,
        yf = tf,
        bf = "foundry_nk7jgu_uaq1gwo";
      const wf = (0, s.forwardRef)((({
          children: e,
          label: t,
          hint: n,
          placeholder: r,
          description: o,
          testId: a,
          hideLabel: l,
          hideDescription: u = !1,
          hideRequiredAsterisk: d,
          hideDividers: f,
          errorMessage: p,
          value: h,
          defaultValue: v,
          onValueChange: g,
          open: m,
          defaultOpen: y,
          onOpenChange: b,
          isRequired: w,
          isDisabled: _,
          isReadOnly: j,
          className: k,
          labelledBy: x,
          renderPortal: S,
          container: C
        }, P) => {
          const E = F((0, s.useRef)(null), P),
            N = (0, s.useId)(),
            T = (0, s.useId)(),
            [L = !1, D] = $({
              prop: m,
              defaultProp: y,
              onChange: b
            });
          return (0, i.jsxs)("div", {
            className: (0, O.$)("foundry_nk7jgu_uaq1gw0", k),
            children: [(t && !l || n) && (0, i.jsxs)("div", {
              className: "foundry_nk7jgu_uaq1gw1",
              children: [(0, i.jsx)(c, {
                enabled: !!l,
                children: (0, i.jsx)(M, {
                  size: "SM",
                  className: (0, O.$)("foundry_nk7jgu_uaq1gw2", _ && bf),
                  asChild: !0,
                  children: (0, i.jsxs)("label", {
                    id: N,
                    children: [t, w && !d && (0, i.jsx)("span", {
                      className: "foundry_nk7jgu_uaq1gw4",
                      children: "*"
                    })]
                  })
                })
              }), n && (0, i.jsx)(M, {
                size: "XS",
                className: (0, O.$)("foundry_nk7jgu_uaq1gw3", _ && bf),
                children: n
              })]
            }), (0, i.jsxs)(Cd, {
              required: w,
              disabled: _,
              open: L,
              onOpenChange: () => D(!j && !L),
              value: h,
              defaultValue: v,
              onValueChange: g,
              children: [(0, i.jsxs)(Od, {
                className: (0, O.$)("foundry_nk7jgu_uaq1gw5 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd10", !!p && "foundry_nk7jgu_uaq1gw7", j && "foundry_nk7jgu_uaq1gw6"),
                ref: E,
                "data-testid": a,
                "aria-activedescendant": h,
                "aria-labelledby": x || N,
                "aria-controls": T,
                children: [(0, i.jsx)("span", {
                  className: "foundry_nk7jgu_uaq1gw8",
                  children: (0, i.jsx)(Pd, {
                    placeholder: r,
                    "aria-label": h
                  })
                }), (0, i.jsx)(Ed, {
                  asChild: !0,
                  className: (0, O.$)("foundry_nk7jgu_uaq1gw9", (j || _) && "foundry_nk7jgu_uaq1gwa"),
                  children: L ? (0, i.jsx)(R.ChevronUp, {
                    size: "LG",
                    label: ""
                  }) : (0, i.jsx)(R.ChevronDown, {
                    size: "LG",
                    label: ""
                  })
                })]
              }), (0, i.jsx)(jf, {
                renderPortal: S,
                container: C,
                children: (0, i.jsx)(Td, {
                  id: T,
                  position: "popper",
                  sideOffset: 8,
                  align: "center",
                  className: "foundry_nk7jgu_uaq1gwb",
                  children: (0, i.jsxs)(vf, {
                    className: "foundry_nk7jgu_uaq1gwk",
                    type: "auto",
                    children: [(0, i.jsx)(Ld, {
                      className: (0, O.$)("foundry_nk7jgu_uaq1gwc", f && "foundry_nk7jgu_uaq1gwd"),
                      asChild: !0,
                      children: (0, i.jsx)(gf, {
                        className: "foundry_nk7jgu_uaq1gwl",
                        style: {
                          overflowY: void 0
                        },
                        children: e
                      })
                    }), (0, i.jsx)(mf, {
                      className: "foundry_nk7jgu_uaq1gwm",
                      orientation: "vertical",
                      children: (0, i.jsx)(yf, {
                        className: "foundry_nk7jgu_uaq1gwn"
                      })
                    })]
                  })
                })
              })]
            }), o && (0, i.jsx)(c, {
              enabled: !!p || u || 0 === o.length,
              children: (0, i.jsx)(M, {
                size: "SM",
                className: (0, O.$)("foundry_nk7jgu_uaq1gwf", _ && bf),
                children: o
              })
            }), p && (0, i.jsxs)(M, {
              size: "SM",
              appearance: "bold",
              className: "foundry_nk7jgu_uaq1gwg",
              children: [(0, i.jsx)(R.X, {
                size: "MD",
                label: "",
                className: "foundry_nk7jgu_uaq1gwh"
              }), p]
            })]
          })
        })),
        _f = (0, s.forwardRef)((({
          label: e,
          value: t,
          icon: n,
          iconLabel: r,
          iconPosition: o,
          isDisabled: a,
          testId: l
        }, u) => {
          const c = F((0, s.useRef)(null), u),
            d = n && z[n];
          return (0, i.jsxs)(Dd, {
            value: t,
            className: "foundry_nk7jgu_uaq1gwe foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd10",
            ref: c,
            disabled: a,
            "data-testid": l,
            children: [d && "left" === o && (0, i.jsx)(d, {
              className: "foundry_nk7jgu_uaq1gwi",
              label: r || "",
              size: "LG"
            }), (0, i.jsx)(Md, {
              asChild: !0,
              children: (0, i.jsx)("span", {
                className: "foundry_nk7jgu_uaq1gwp",
                children: e
              })
            }), d && "right" === o && (0, i.jsx)(d, {
              label: r || "",
              size: "LG",
              className: "foundry_nk7jgu_uaq1gwj"
            })]
          })
        })),
        jf = ({
          renderPortal: e = !0,
          container: t,
          children: n
        }) => e ? (0, i.jsx)(Nd, {
          container: t,
          children: n
        }) : (0, i.jsx)(i.Fragment, {
          children: n
        }),
        kf = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M8.33333 2.77778L3.88889 7.22222L1.66666 5",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        xf = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M11 4L5.66663 10L3 7",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          })
        }),
        Sf = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M15 6L8.33328 14L5 10",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            fillRule: "evenodd",
            clipRule: "evenodd"
          })
        }),
        Cf = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M3.33334 5H6.66667",
            stroke: e,
            strokeWidth: "1.5",
            strokeLinecap: "round"
          })
        }),
        Of = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 14 14",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M3.88889 7H10.1111",
            stroke: e,
            strokeWidth: "2",
            strokeLinecap: "round"
          })
        }),
        Pf = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 20 20",
          fill: "none",
          children: (0, i.jsx)("path", {
            d: "M5 10H15",
            stroke: e,
            strokeWidth: "2.5",
            strokeLinecap: "round"
          })
        });

      function Ef(e = {}) {
        let {
          isReadOnly: t
        } = e, [n, r] = ye(e.isSelected, e.defaultSelected || !1, e.onChange);
        return {
          isSelected: n,
          setSelected: function(e) {
            t || r(e)
          },
          toggle: function() {
            t || r(!n)
          }
        }
      }

      function Nf(e, t, n) {
        let {
          isDisabled: r = !1,
          isReadOnly: o = !1,
          value: i,
          name: a,
          children: s,
          "aria-label": l,
          "aria-labelledby": u,
          validationState: c = "valid",
          isInvalid: d
        } = e, {
          pressProps: f,
          isPressed: p
        } = Kt({
          isDisabled: r
        }), {
          pressProps: h,
          isPressed: v
        } = Kt({
          onPress() {
            var e;
            t.toggle(), null === (e = n.current) || void 0 === e || e.focus()
          },
          isDisabled: r || o
        }), {
          focusableProps: g
        } = pt(e, n), m = me(f, g), y = X(e, {
          labelable: !0
        });
        return Q(n, t.isSelected, t.setSelected), {
          labelProps: me(h, {
            onClick: e => e.preventDefault()
          }),
          inputProps: me(y, {
            "aria-invalid": d || "invalid" === c || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected(e.target.checked)
            },
            disabled: r,
            ...null == i ? {} : {
              value: i
            },
            name: a,
            type: "checkbox",
            ...m
          }),
          isSelected: t.isSelected,
          isPressed: p || v,
          isDisabled: r,
          isReadOnly: o,
          isInvalid: d || "invalid" === c
        }
      }

      function Tf(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Lf(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Df(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Lf(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Tf(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lf(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Mf(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Rf = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        zf = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Df(Df({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Rf(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Mf(e.variantClassNames, (e => Mf(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Af = zf({
          defaultClassName: "foundry_nk7jgu_11gbdty6 foundry_nk7jgu_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_11gbdty7",
              LG: "foundry_nk7jgu_11gbdty8",
              XL: "foundry_nk7jgu_11gbdty9"
            },
            appearance: {
              primary: "foundry_nk7jgu_11gbdtya",
              secondary: "foundry_nk7jgu_11gbdtyb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        If = zf({
          defaultClassName: "foundry_nk7jgu_11gbdty2",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_11gbdty3",
              LG: "foundry_nk7jgu_11gbdty4",
              XL: "foundry_nk7jgu_11gbdty5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Vf = zf({
          defaultClassName: "foundry_nk7jgu_11gbdtyi",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdz foundry_nk7jgu_tdsdcd10",
              LG: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdy foundry_nk7jgu_tdsdcd10",
              XL: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd10"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ff = zf({
          defaultClassName: "foundry_nk7jgu_11gbdtyd",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_11gbdtye",
              LG: "foundry_nk7jgu_11gbdtyf",
              XL: "foundry_nk7jgu_11gbdtyg"
            },
            isDisabled: {
              true: "foundry_nk7jgu_11gbdtyh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, s.forwardRef)((({
        isChecked: e,
        defaultChecked: t,
        onCheckedChange: n,
        label: o,
        description: l,
        size: u = "MD",
        appearance: d = "primary",
        isIndeterminate: f,
        hideLabel: p,
        testId: h,
        errorMessage: v,
        className: g,
        ...m
      }, y) => {
        const b = (0, s.useRef)(null),
          w = F(b, y),
          _ = (0, s.useId)(),
          {
            setSelected: j,
            ...k
          } = Ef({
            isSelected: e,
            defaultSelected: t,
            onChange: n
          }),
          {
            inputProps: x,
            isDisabled: S,
            isReadOnly: C,
            isInvalid: O,
            isSelected: P
          } = function(e, t, n) {
            let r = _t({
                ...e,
                value: t.isSelected
              }),
              {
                isInvalid: o,
                validationErrors: i,
                validationDetails: a
              } = r.displayValidation,
              {
                labelProps: l,
                inputProps: u,
                isSelected: c,
                isPressed: d,
                isDisabled: f,
                isReadOnly: p
              } = Nf({
                ...e,
                isInvalid: o
              }, t, n);
            ht(e, r, n);
            let {
              isIndeterminate: h,
              isRequired: v,
              validationBehavior: g = "aria"
            } = e;
            (0, s.useEffect)((() => {
              n.current && (n.current.indeterminate = !!h)
            }));
            let {
              pressProps: m
            } = Kt({
              isDisabled: f || p,
              onPress() {
                let {
                  [wt]: t
                } = e, {
                  commitValidation: n
                } = t || r;
                n()
              }
            });
            return {
              labelProps: me(l, m),
              inputProps: {
                ...u,
                checked: c,
                "aria-required": v && "aria" === g || void 0,
                required: v && "native" === g
              },
              isSelected: c,
              isPressed: d,
              isDisabled: f,
              isReadOnly: p,
              isInvalid: o,
              validationErrors: i,
              validationDetails: a
            }
          }({
            ...m,
            "aria-label": o,
            id: _
          }, {
            ...k,
            setSelected: m.isReadOnly ? () => !1 : j
          }, b),
          E = (0, a.v6)({
            ...x,
            "aria-checked": P,
            className: g
          }, {
            className: "foundry_nk7jgu_11gbdty1"
          }),
          N = f ? r[`Dash${u}`] : r[`Check${u}`],
          T = O && !!v;
        return (0, i.jsxs)("label", {
          className: "foundry_nk7jgu_11gbdty0",
          children: [(0, i.jsxs)("div", {
            className: If({
              size: u
            }),
            children: [(0, i.jsx)(c, {
              children: (0, i.jsx)("input", {
                ...E,
                ref: w
              })
            }), (0, i.jsx)("div", {
              className: Af({
                size: u,
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": f ? "mixed" : P ? "checked" : "unchecked",
              "data-disabled": S || C,
              "data-testid": h,
              children: (0, i.jsx)("span", {
                className: "foundry_nk7jgu_11gbdtyc",
                children: (P || f) && (0, i.jsx)(N, {
                  "aria-hidden": "true"
                })
              })
            })]
          }), (0, i.jsx)(c, {
            enabled: !!p,
            children: (0, i.jsxs)("div", {
              className: Ff({
                size: u,
                isDisabled: S
              }),
              children: [(0, i.jsx)("p", {
                className: Vf({
                  size: u
                }),
                children: o
              }), l && !T && (0, i.jsx)("p", {
                className: "foundry_nk7jgu_11gbdtym foundry_nk7jgu_8kowh41 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdz foundry_nk7jgu_tdsdcd10",
                children: l
              }), T && (0, i.jsx)("p", {
                className: "foundry_nk7jgu_11gbdtyn foundry_nk7jgu_11gbdtym foundry_nk7jgu_8kowh41 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdz foundry_nk7jgu_tdsdcd10",
                children: v
              })]
            })
          })]
        })
      }));
      const qf = new WeakMap;

      function Bf(e, t) {
        return "#comment" !== e.nodeName && function(e) {
          const t = ee(e);
          if (!(e instanceof t.HTMLElement || e instanceof t.SVGElement)) return !1;
          let {
            display: n,
            visibility: r
          } = e.style, o = "none" !== n && "hidden" !== r && "collapse" !== r;
          if (o) {
            const {
              getComputedStyle: t
            } = e.ownerDocument.defaultView;
            let {
              display: n,
              visibility: r
            } = t(e);
            o = "none" !== n && "hidden" !== r && "collapse" !== r
          }
          return o
        }(e) && function(e, t) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
        }(e, t) && (!e.parentElement || Bf(e.parentElement, e))
      }

      function $f(e, t) {
        return !!e && !!t && t.some((t => t.contains(e)))
      }

      function Hf(e, t, n) {
        let r = (null == t ? void 0 : t.tabbable) ? Se : xe,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          i = J(o),
          a = function(e, t, n, r) {
            return e.createTreeWalker(t, n, r)
          }(i, e || i, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !r(e) || !Bf(e) || n && !$f(e, n) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (a.currentNode = t.from), a
      }
      class Wf {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, n) {
          let r = this.fastMap.get(null != t ? t : null);
          if (!r) return;
          let o = new Gf({
            scopeRef: e
          });
          r.addChild(o), o.parent = r, this.fastMap.set(e, o), n && (o.nodeToRestore = n)
        }
        addNode(e) {
          this.fastMap.set(e.scopeRef, e)
        }
        removeTreeNode(e) {
          if (null === e) return;
          let t = this.fastMap.get(e);
          if (!t) return;
          let n = t.parent;
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && $f(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let r = t.children;
          n && (n.removeChild(t), r.size > 0 && r.forEach((e => n && n.addChild(e)))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new Wf;
          var n;
          for (let r of this.traverse()) t.addTreeNode(r.scopeRef, null !== (n = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null, r.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new Gf({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class Gf {
        addChild(e) {
          this.children.add(e), e.parent = this
        }
        removeChild(e) {
          this.children.delete(e), e.parent = void 0
        }
        constructor(e) {
          this.children = new Set, this.contain = !1, this.scopeRef = e.scopeRef
        }
      }
      new Wf;
      const Uf = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        Kf = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function Xf(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            n = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (n) return "rtl" === n.direction;
          if (t.script) return Uf.has(t.script)
        }
        let t = e.split("-")[0];
        return Kf.has(t)
      }
      const Yf = Symbol.for("react-aria.i18n.locale");

      function Zf() {
        let e = "undefined" != typeof window && window[Yf] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: Xf(e) ? "rtl" : "ltr"
        }
      }
      let Qf = Zf(),
        Jf = new Set;

      function ep() {
        Qf = Zf();
        for (let e of Jf) e(Qf)
      }
      const tp = s.createContext(null);

      function np() {
        let e = function() {
          let e = ce(),
            [t, n] = (0, s.useState)(Qf);
          return (0, s.useEffect)((() => (0 === Jf.size && window.addEventListener("languagechange", ep), Jf.add(n), () => {
            Jf.delete(n), 0 === Jf.size && window.removeEventListener("languagechange", ep)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, s.useContext)(tp) || e
      }

      function rp(e, t) {
        let {
          name: n,
          isReadOnly: r,
          isRequired: o,
          isDisabled: i,
          orientation: a = "vertical",
          validationBehavior: l = "aria"
        } = e, {
          direction: u
        } = np(), {
          isInvalid: c,
          validationErrors: d,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: p,
          fieldProps: h,
          descriptionProps: v,
          errorMessageProps: g
        } = we({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || d
        }), m = X(e, {
          labelable: !0
        }), {
          focusWithinProps: y
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: n,
            onFocusWithin: r,
            onFocusWithinChange: o
          } = e, i = (0, s.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: a,
            removeAllGlobalListeners: l
          } = Vt(), u = (0, s.useCallback)((e => {
            e.currentTarget.contains(e.target) && i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, l(), n && n(e), o && o(!1))
          }), [n, o, i, l]), c = Ne(u), d = (0, s.useCallback)((e => {
            if (!e.currentTarget.contains(e.target)) return;
            const t = J(e.target),
              n = ot(t);
            if (!i.current.isFocusWithin && n === it(e.nativeEvent)) {
              r && r(e), o && o(!0), i.current.isFocusWithin = !0, c(e);
              let n = e.currentTarget;
              a(t, "focus", (e => {
                if (i.current.isFocusWithin && !rt(n, e.target)) {
                  let r = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  Ee(r, n);
                  let o = Pe(r);
                  u(o)
                }
              }), {
                capture: !0
              })
            }
          }), [r, o, c, a, u]);
          return t ? {
            focusWithinProps: {
              onFocus: void 0,
              onBlur: void 0
            }
          } : {
            focusWithinProps: {
              onFocus: d,
              onBlur: u
            }
          }
        }({
          onBlurWithin(n) {
            var r;
            null === (r = e.onBlur) || void 0 === r || r.call(e, n), t.selectedValue || t.setLastFocusedValue(null)
          },
          onFocusWithin: e.onFocus,
          onFocusWithinChange: e.onFocusChange
        }), b = he(n);
        return qf.set(t, {
          name: b,
          descriptionId: v.id,
          errorMessageId: g.id,
          validationBehavior: l
        }), {
          radioGroupProps: me(m, {
            role: "radiogroup",
            onKeyDown: e => {
              let n;
              switch (e.key) {
                case "ArrowRight":
                  n = "rtl" === u && "vertical" !== a ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  n = "rtl" === u && "vertical" !== a ? "next" : "prev";
                  break;
                case "ArrowDown":
                  n = "next";
                  break;
                case "ArrowUp":
                  n = "prev";
                  break;
                default:
                  return
              }
              e.preventDefault();
              let r, o = Hf(e.currentTarget, {
                from: e.target
              });
              "next" === n ? (r = o.nextNode(), r || (o.currentNode = e.currentTarget, r = o.firstChild())) : (r = o.previousNode(), r || (o.currentNode = e.currentTarget, r = o.lastChild())), r && (r.focus(), t.setSelectedValue(r.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": r || void 0,
            "aria-required": o || void 0,
            "aria-disabled": i || void 0,
            "aria-orientation": a,
            ...h,
            ...y
          }),
          labelProps: p,
          descriptionProps: v,
          errorMessageProps: g,
          isInvalid: c,
          validationErrors: d,
          validationDetails: f
        }
      }
      let op = Math.round(1e10 * Math.random()),
        ip = 0;

      function ap(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function sp(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function lp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? sp(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = ap(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : sp(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function up(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var cp = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        dp = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = lp(lp({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) cp(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return up(e.variantClassNames, (e => up(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        fp = dp({
          defaultClassName: "foundry_nk7jgu_njguqn1",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_njguqn2",
              LG: "foundry_nk7jgu_njguqn3",
              XL: "foundry_nk7jgu_njguqn4"
            },
            orientation: {
              horizontal: "foundry_nk7jgu_njguqn5",
              vertical: "foundry_nk7jgu_njguqn6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const pp = (0, s.createContext)({
          state: null,
          size: "MD",
          appearance: "primary"
        }),
        hp = ((0, s.forwardRef)((({
          label: e,
          description: t,
          size: n = "MD",
          appearance: r = "primary",
          hideLabel: o,
          isRequired: l,
          hideRequiredAsterisk: u,
          testId: d,
          className: f,
          errorMessage: p,
          orientation: h = "vertical",
          ...v
        }, g) => {
          const {
            children: m
          } = v, y = F((0, s.useRef)(null), g), b = (0, s.useId)(), w = function(e) {
            let t = (0, s.useMemo)((() => e.name || `radio-group-${op}-${++ip}`), [e.name]);
            var n;
            let [r, o] = ye(e.value, null !== (n = e.defaultValue) && void 0 !== n ? n : null, e.onChange), [i, a] = (0, s.useState)(null), l = _t({
              ...e,
              value: r
            }), u = l.displayValidation.isInvalid;
            return {
              ...l,
              name: t,
              selectedValue: r,
              setSelectedValue: t => {
                e.isReadOnly || e.isDisabled || (o(t), l.commitValidation())
              },
              lastFocusedValue: i,
              setLastFocusedValue: a,
              isDisabled: e.isDisabled || !1,
              isReadOnly: e.isReadOnly || !1,
              isRequired: e.isRequired || !1,
              validationState: e.validationState || (u ? "invalid" : null),
              isInvalid: u
            }
          }(v), _ = {
            state: w,
            size: n,
            appearance: r
          }, {
            radioGroupProps: j,
            labelProps: k,
            descriptionProps: x,
            isInvalid: S,
            errorMessageProps: C
          } = rp({
            ...v,
            id: v.id || b,
            label: e,
            isRequired: l,
            description: t,
            orientation: h
          }, w), O = (0, a.v6)({
            ...j,
            className: f
          }, {
            className: "foundry_nk7jgu_njguqn0",
            "aria-errormessage": C?.id
          }), P = S && !!p;
          return (0, i.jsxs)("div", {
            ref: y,
            "data-testid": d,
            ...O,
            children: [(0, i.jsx)(c, {
              enabled: !!o,
              children: (0, i.jsxs)("div", {
                className: "foundry_nk7jgu_njguqn7",
                children: [(0, i.jsx)(M, {
                  size: "SM",
                  ...k,
                  className: "foundry_nk7jgu_njguqn8 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdy foundry_nk7jgu_tdsdcd10",
                  asChild: !0,
                  children: (0, i.jsxs)("label", {
                    children: [e, l && !u && (0, i.jsx)("span", {
                      className: "foundry_nk7jgu_njguqn9",
                      children: "*"
                    })]
                  })
                }), t && (0, i.jsx)(M, {
                  size: "XS",
                  ...x,
                  className: "foundry_nk7jgu_njguqna foundry_nk7jgu_8kowh41 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdz foundry_nk7jgu_tdsdcd10",
                  children: t
                })]
              })
            }), (0, i.jsx)("div", {
              className: fp({
                size: n,
                orientation: h
              }),
              children: (0, i.jsx)(pp.Provider, {
                value: _,
                children: m
              })
            }), P && (0, i.jsxs)(M, {
              size: "SM",
              appearance: "bold",
              ...C,
              className: "foundry_nk7jgu_njguqnb",
              children: [(0, i.jsx)(R.X, {
                size: "MD",
                label: "",
                className: "foundry_nk7jgu_njguqnc"
              }), p]
            })]
          })
        })), ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 10 10",
          fill: "none",
          children: (0, i.jsx)("circle", {
            cx: "5",
            cy: "5",
            r: "3",
            fill: e
          })
        })),
        vp = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          children: (0, i.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "4.5",
            fill: e
          })
        }),
        gp = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "100%",
          height: "100%",
          viewBox: "0 0 22 22",
          fill: "none",
          children: (0, i.jsx)("circle", {
            cx: "11",
            cy: "11",
            r: "6",
            fill: e
          })
        });
      var mp = dp({
          defaultClassName: "foundry_nk7jgu_1pfduete",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdz foundry_nk7jgu_tdsdcd10",
              LG: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdy foundry_nk7jgu_tdsdcd10",
              XL: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd10"
            },
            isDisabled: {
              true: "foundry_nk7jgu_1pfdueti"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        yp = dp({
          defaultClassName: "foundry_nk7jgu_1pfduet6 foundry_nk7jgu_8kowh41",
          variantClassNames: {
            appearance: {
              primary: "foundry_nk7jgu_1pfduet7",
              secondary: "foundry_nk7jgu_1pfduet8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        bp = dp({
          defaultClassName: "foundry_nk7jgu_1pfduet2",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_1pfduet3",
              LG: "foundry_nk7jgu_1pfduet4",
              XL: "foundry_nk7jgu_1pfduet5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        wp = dp({
          defaultClassName: "foundry_nk7jgu_1pfdueta",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_1pfduetb",
              LG: "foundry_nk7jgu_1pfduetc",
              XL: "foundry_nk7jgu_1pfduetd"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });

      function _p(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function jp(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function kp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? jp(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = _p(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : jp(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function xp(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }(0, s.forwardRef)((({
        label: e,
        description: t,
        hideLabel: n,
        testId: r,
        className: a,
        ...l
      }, u) => {
        const d = (0, s.useRef)(null),
          f = F(d, u),
          p = (0, s.useId)(),
          h = (0, s.useContext)(pp),
          {
            state: v,
            appearance: g,
            size: m
          } = h,
          {
            inputProps: y
          } = function(e, t, n) {
            let {
              value: r,
              children: o,
              "aria-label": i,
              "aria-labelledby": a
            } = e;
            const s = e.isDisabled || t.isDisabled;
            let l = t.selectedValue === r,
              {
                pressProps: u,
                isPressed: c
              } = Kt({
                isDisabled: s
              }),
              {
                pressProps: d,
                isPressed: f
              } = Kt({
                isDisabled: s,
                onPress() {
                  var e;
                  t.setSelectedValue(r), null === (e = n.current) || void 0 === e || e.focus()
                }
              }),
              {
                focusableProps: p
              } = pt(me(e, {
                onFocus: () => t.setLastFocusedValue(r)
              }), n),
              h = me(u, p),
              v = X(e, {
                labelable: !0
              }),
              g = -1;
            null != t.selectedValue ? t.selectedValue === r && (g = 0) : t.lastFocusedValue !== r && null != t.lastFocusedValue || (g = 0), s && (g = void 0);
            let {
              name: m,
              descriptionId: y,
              errorMessageId: b,
              validationBehavior: w
            } = qf.get(t);
            return Q(n, t.selectedValue, t.setSelectedValue), ht({
              validationBehavior: w
            }, t, n), {
              labelProps: me(d, {
                onClick: e => e.preventDefault()
              }),
              inputProps: me(v, {
                ...h,
                type: "radio",
                name: m,
                tabIndex: g,
                disabled: s,
                required: t.isRequired && "native" === w,
                checked: l,
                value: r,
                onChange: e => {
                  e.stopPropagation(), t.setSelectedValue(r)
                },
                "aria-describedby": [e["aria-describedby"], t.isInvalid ? b : null, y].filter(Boolean).join(" ") || void 0
              }),
              isDisabled: s,
              isSelected: l,
              isPressed: c || f
            }
          }({
            ...l,
            "aria-label": e,
            id: l.id || p
          }, v, d),
          b = y.checked,
          w = y.disabled || v?.isReadOnly,
          _ = o[`Dot${m}`];
        return (0, i.jsxs)("label", {
          className: (0, O.$)("foundry_nk7jgu_1pfduet0", a),
          children: [(0, i.jsxs)("div", {
            className: bp({
              size: m
            }),
            children: [(0, i.jsx)(c, {
              children: (0, i.jsx)("input", {
                ...y,
                ref: f,
                className: "foundry_nk7jgu_1pfduet1"
              })
            }), (0, i.jsx)("div", {
              className: yp({
                appearance: g
              }),
              "aria-hidden": "true",
              "data-state": b ? "checked" : "unchecked",
              "data-disabled": w,
              "data-testid": r,
              children: (0, i.jsx)("span", {
                className: "foundry_nk7jgu_1pfduet9",
                children: b && (0, i.jsx)(_, {})
              })
            })]
          }), (0, i.jsx)(c, {
            enabled: !!n,
            children: (0, i.jsxs)("div", {
              className: wp({
                size: m
              }),
              children: [(0, i.jsx)("p", {
                className: mp({
                  size: m,
                  isDisabled: y.disabled
                }),
                "aria-label": e,
                children: e
              }), t && (0, i.jsx)("p", {
                className: "foundry_nk7jgu_1pfduetj foundry_nk7jgu_8kowh41 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdz foundry_nk7jgu_tdsdcd10",
                children: t
              })]
            })
          })]
        })
      }));
      var Sp = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Cp = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = kp(kp({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Sp(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xp(e.variantClassNames, (e => xp(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_nk7jgu_thj3a31",
          variantClassNames: {
            thickness: {
              thin: "foundry_nk7jgu_thj3a32",
              thick: "foundry_nk7jgu_thj3a33",
              thicker: "foundry_nk7jgu_thj3a34",
              thickest: "foundry_nk7jgu_thj3a35"
            },
            orientation: {
              horizontal: "foundry_nk7jgu_thj3a36",
              vertical: "foundry_nk7jgu_thj3a37"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, s.forwardRef)((({
        className: e,
        orientation: t = "horizontal",
        thickness: n = "thin",
        isDecorative: r = !1,
        asChild: o,
        testId: a,
        ...s
      }, u) => {
        const c = "horizontal" !== t || r ? "div" : "hr",
          d = r || "hr" === c ? void 0 : "separator",
          f = o ? l.Slot : c;
        return (0, i.jsx)(f, {
          ref: u,
          className: (0, O.$)(Cp({
            thickness: n,
            orientation: t
          }), e),
          role: d,
          "aria-orientation": t,
          "data-testid": a,
          ...s
        })
      }));
      const Op = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, i.jsx)("circle", {
            cx: "8",
            cy: "8",
            r: "8",
            fill: e
          })
        }),
        Pp = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.46967 3.46967C3.76256 3.17678 4.23744 3.17678 4.53033 3.46967L8 6.93934L11.4697 3.46967C11.7626 3.17678 12.2374 3.17678 12.5303 3.46967C12.8232 3.76256 12.8232 4.23744 12.5303 4.53033L9.06066 8L12.5303 11.4697C12.8232 11.7626 12.8232 12.2374 12.5303 12.5303C12.2374 12.8232 11.7626 12.8232 11.4697 12.5303L8 9.06066L4.53033 12.5303C4.23744 12.8232 3.76256 12.8232 3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L6.93934 8L3.46967 4.53033C3.17678 4.23744 3.17678 3.76256 3.46967 3.46967Z",
            fill: e
          })
        }),
        Ep = ({
          color: e = "currentColor"
        }) => (0, i.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 16 16",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          "aria-hidden": "true",
          focusable: "false",
          children: (0, i.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M14.2445 4.04108C14.5374 4.33397 14.5374 4.80884 14.2446 5.10174L6.24469 13.1017C6.10404 13.2424 5.91327 13.3214 5.71436 13.3214C5.51544 13.3214 5.32468 13.2424 5.18402 13.1017L1.75531 9.67296C1.46242 9.38007 1.46242 8.90519 1.75532 8.6123C2.04821 8.31941 2.52309 8.31942 2.81598 8.61231L5.71436 11.5107L13.1839 4.04109C13.4768 3.74819 13.9516 3.74819 14.2445 4.04108Z",
            fill: e
          })
        });

      function Np(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Tp(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Lp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Tp(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Np(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tp(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Dp(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      var Mp = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Rp = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Lp(Lp({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Mp(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Dp(e.variantClassNames, (e => Dp(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        zp = Rp({
          defaultClassName: "foundry_nk7jgu_okz6z212",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_okz6z213 foundry_nk7jgu_okz6z2y foundry_nk7jgu_okz6z2z",
              LG: "foundry_nk7jgu_okz6z214 foundry_nk7jgu_okz6z210 foundry_nk7jgu_okz6z211"
            },
            isSelected: {
              true: "foundry_nk7jgu_okz6z215"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ap = Rp({
          defaultClassName: "foundry_nk7jgu_okz6z2o",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_okz6z2p foundry_nk7jgu_okz6z2k foundry_nk7jgu_okz6z2l",
              LG: "foundry_nk7jgu_okz6z2q foundry_nk7jgu_okz6z2m foundry_nk7jgu_okz6z2n"
            },
            position: {
              left: "foundry_nk7jgu_okz6z2r",
              right: "foundry_nk7jgu_okz6z2s"
            },
            isSelected: {
              true: "foundry_nk7jgu_okz6z2t",
              false: "foundry_nk7jgu_okz6z2u"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              position: "left",
              isSelected: !0
            }, "foundry_nk7jgu_okz6z2v"],
            [{
              position: "right",
              isSelected: !1
            }, "foundry_nk7jgu_okz6z2w"]
          ]
        }),
        Ip = Rp({
          defaultClassName: "foundry_nk7jgu_okz6z2f",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdy foundry_nk7jgu_tdsdcd10",
              LG: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd10"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Vp = Rp({
          defaultClassName: "foundry_nk7jgu_okz6z28 foundry_nk7jgu_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_okz6z29 foundry_nk7jgu_okz6z24 foundry_nk7jgu_okz6z25",
              LG: "foundry_nk7jgu_okz6z2a foundry_nk7jgu_okz6z26 foundry_nk7jgu_okz6z27"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Fp = Rp({
          defaultClassName: "foundry_nk7jgu_okz6z21",
          variantClassNames: {
            appearance: {
              primary: "foundry_nk7jgu_okz6z22",
              secondary: "foundry_nk7jgu_okz6z23"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        qp = Rp({
          defaultClassName: "foundry_nk7jgu_okz6z2b",
          variantClassNames: {
            isDisabled: {
              true: "foundry_nk7jgu_okz6z2c"
            },
            size: {
              MD: "foundry_nk7jgu_okz6z2d",
              LG: "foundry_nk7jgu_okz6z2e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });

      function Bp(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function $p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Hp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? $p(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Bp(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $p(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Wp(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }(0, s.forwardRef)((({
        label: e,
        description: t,
        size: n = "MD",
        appearance: r = "primary",
        showIcons: o = !1,
        selectedIcon: a,
        unselectedIcon: l,
        hideLabel: u,
        testId: d,
        className: f,
        ...p
      }, h) => {
        const v = (0, s.useRef)(null),
          g = F(v, h),
          m = (0, s.useId)(),
          y = Ef(p),
          {
            inputProps: b,
            isDisabled: w,
            isReadOnly: _,
            isSelected: j
          } = function(e, t, n) {
            let {
              labelProps: r,
              inputProps: o,
              isSelected: i,
              isPressed: a,
              isDisabled: s,
              isReadOnly: l
            } = Nf(e, t, n);
            return {
              labelProps: r,
              inputProps: {
                ...o,
                role: "switch",
                checked: i
              },
              isSelected: i,
              isPressed: a,
              isDisabled: s,
              isReadOnly: l
            }
          }({
            id: m,
            "aria-label": e,
            ...p
          }, y, v),
          k = a ? z[a] : Ep,
          x = l ? z[l] : Pp;
        return (0, i.jsxs)("label", {
          className: (0, O.$)("foundry_nk7jgu_okz6z20", f),
          children: [(0, i.jsxs)("div", {
            className: Fp({
              appearance: r
            }),
            "data-state": j ? "selected" : "unselected",
            "data-disabled": w || _,
            "data-testid": d,
            children: [(0, i.jsx)(c, {
              children: (0, i.jsx)("input", {
                ...b,
                ref: g
              })
            }), (0, i.jsxs)("div", {
              className: Vp({
                size: n
              }),
              "aria-hidden": "true",
              children: [(0, i.jsx)("div", {
                className: zp({
                  size: n,
                  isSelected: j
                }),
                children: (0, i.jsx)(Op, {})
              }), o && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                  className: Ap({
                    size: n,
                    isSelected: j,
                    position: "left"
                  }),
                  children: (0, i.jsx)(k, {
                    label: ""
                  })
                }), (0, i.jsx)("div", {
                  className: Ap({
                    size: n,
                    isSelected: j,
                    position: "right"
                  }),
                  children: (0, i.jsx)(x, {
                    label: ""
                  })
                })]
              })]
            })]
          }), (0, i.jsx)(c, {
            enabled: !!u,
            children: (0, i.jsxs)("div", {
              className: qp({
                size: n,
                isDisabled: w
              }),
              children: [(0, i.jsx)("p", {
                className: Ip({
                  size: n
                }),
                children: e
              }), t && (0, i.jsx)("p", {
                className: "foundry_nk7jgu_okz6z2i foundry_nk7jgu_8kowh41 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdz foundry_nk7jgu_tdsdcd10",
                children: t
              })]
            })
          })]
        })
      })).displayName = "Switch", (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        ...n
      }, r) => {
        const o = e ? l.Slot : "h1",
          s = (0, a.v6)({
            className: "foundry_nk7jgu_1pi1yv40 foundry_nk7jgu_tdsdcd1 foundry_nk7jgu_tdsdcd0"
          }, n);
        return (0, i.jsx)(o, {
          ref: r,
          "data-testid": t,
          ...s
        })
      }));
      var Gp = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Up = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Hp(Hp({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Gp(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Wp(e.variantClassNames, (e => Wp(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_nk7jgu_16ge3130",
          variantClassNames: {
            size: {
              LG: "foundry_nk7jgu_tdsdcd13 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd15",
              MD: "foundry_nk7jgu_tdsdcd13 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd16",
              SM: "foundry_nk7jgu_tdsdcd13 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd17",
              XS: "foundry_nk7jgu_tdsdcd13 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd18"
            },
            appearance: {
              default: "foundry_nk7jgu_tdsdcd13 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd19",
              bold: "foundry_nk7jgu_tdsdcd13 foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd1a"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });

      function Kp(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Xp(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Yp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Xp(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Kp(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xp(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Zp(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }(0, s.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        size: r = "MD",
        ...o
      }, s) => {
        const u = e ? l.Slot : "p",
          c = (0, a.v6)({
            className: Up({
              size: r,
              appearance: n
            })
          }, o);
        return (0, i.jsx)(u, {
          ref: s,
          "data-testid": t,
          ...c
        })
      }));
      var Qp = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Jp = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Yp(Yp({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Qp(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Zp(e.variantClassNames, (e => Zp(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_nk7jgu_1ugqrt40",
          variantClassNames: {
            appearance: {
              default: "foundry_nk7jgu_tdsdcd1b foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd1d",
              bold: "foundry_nk7jgu_tdsdcd1b foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd1e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });

      function eh(e, t) {
        var n = {};
        if ("object" == typeof t) {
          var r = e;
          on(t, ((e, t) => {
            if (null != e) {
              var o = function(e, t) {
                var n = e;
                for (var r of t) {
                  if (!(r in n)) throw new Error("Path ".concat(t.join(" -> "), " does not exist in object"));
                  n = n[r]
                }
                return n
              }(r, t);
              n[rn(o)] = String(e)
            }
          }))
        } else {
          var o = e;
          for (var i in o) {
            var a = o[i];
            null != a && (n[rn(i)] = a)
          }
        }
        return Object.defineProperty(n, "toString", {
          value: function() {
            return Object.keys(this).map((e => "".concat(e, ":").concat(this[e]))).join(";")
          },
          writable: !1
        }), n
      }

      function th(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function nh(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function rh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nh(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = th(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nh(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function oh(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }(0, s.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: n = "default",
        ...r
      }, o) => {
        const s = e ? l.Slot : "p",
          u = (0, a.v6)({
            className: Jp({
              appearance: n
            })
          }, r);
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...u
        })
      }));
      var ih = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        ah = "var(--foundry_nk7jgu_9dxgbc2)",
        sh = "var(--foundry_nk7jgu_9dxgbc3)",
        lh = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = rh(rh({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) ih(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return oh(e.variantClassNames, (e => oh(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_nk7jgu_9dxgbc7",
          variantClassNames: {
            size: {
              SM: "foundry_nk7jgu_9dxgbc8",
              MD: "foundry_nk7jgu_9dxgbc9",
              LG: "foundry_nk7jgu_9dxgbca",
              XL: "foundry_nk7jgu_9dxgbcb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        uh = "var(--foundry_nk7jgu_9dxgbc0)",
        ch = "var(--foundry_nk7jgu_9dxgbc1)";

      function dh(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
      }

      function fh(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
          if (Array.isArray(e) || (n = function(e, t) {
              if (e) {
                if ("string" == typeof e) return dh(e, t);
                var n = {}.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? dh(e, t) : void 0
              }
            }(e)) || t) {
            n && (e = n);
            var r = 0,
              o = function() {};
            return {
              s: o,
              n: function() {
                return r >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[r++]
                }
              },
              e: function(e) {
                throw e
              },
              f: o
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, a = !0,
          s = !1;
        return {
          s: function() {
            n = n.call(e)
          },
          n: function() {
            var e = n.next();
            return a = e.done, e
          },
          e: function(e) {
            s = !0, i = e
          },
          f: function() {
            try {
              a || null == n.return || n.return()
            } finally {
              if (s) throw i
            }
          }
        }
      }

      function ph(e, t, n) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function hh(e) {
        return hh = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, hh(e)
      }

      function vh() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (vh = function() {
          return !!e
        })()
      }

      function gh(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function mh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? gh(Object(n), !0).forEach((function(t) {
            ph(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : gh(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function yh(e, t) {
        return yh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, yh(e, t)
      }

      function bh(e, t) {
        var n, r = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          a = r,
          s = "",
          l = fh(e);
        try {
          for (l.s(); !(n = l.n()).done;) {
            var u, c = n.value,
              d = !Object.prototype.hasOwnProperty.call(o, c) && (null === (u = o[a[0]]) || void 0 === u ? void 0 : u.test(c));
            (i && c === a[0] || d) && (a = a.slice(1), s += c)
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        return s
      }

      function wh(e, t) {
        var n, r = t.mask,
          o = t.replacement,
          i = t.separate,
          a = t.showMask,
          s = 0,
          l = "",
          u = fh(r);
        try {
          for (u.s(); !(n = u.n()).done;) {
            var c = n.value;
            if (!a && void 0 === e[s]) break;
            Object.prototype.hasOwnProperty.call(o, c) && void 0 !== e[s] ? l += e[s++] : l += c
          }
        } catch (e) {
          u.e(e)
        } finally {
          u.f()
        }
        if (i && !a) {
          for (var d = r.length - 1; d >= 0 && l[d] === r[d]; d--);
          l = l.slice(0, d + 1)
        }
        return l
      }

      function _h(e, t) {
        for (var n = t.mask, r = t.replacement, o = [], i = 0; i < n.length; i++) {
          var a, s = null !== (a = e[i]) && void 0 !== a ? a : n[i],
            l = Object.prototype.hasOwnProperty.call(r, s) ? "replacement" : void 0 !== e[i] && e[i] !== n[i] ? "input" : "mask";
          o.push({
            type: l,
            value: s,
            index: i
          })
        }
        return o
      }

      function jh(e) {
        return e.length > 0 ? ph({}, e, /./) : {}
      }

      function kh(e, t) {
        for (var n = t.start, r = void 0 === n ? 0 : n, o = t.end, i = t.mask, a = t.replacement, s = t.separate, l = e.slice(r, o), u = i.slice(r, o), c = "", d = 0; d < u.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(a, u[d]);
          f && void 0 !== l[d] && l[d] !== u[d] ? c += l[d] : f && s && (c += u[d])
        }
        return c
      }

      function xh(e, t) {
        var n = t.mask,
          r = t.replacement,
          o = "string" == typeof r ? jh(r) : r,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return wh(bh(e, {
          replacementChars: n.replace(i, ""),
          replacement: o,
          separate: !1
        }), {
          mask: n,
          replacement: o,
          separate: !1,
          showMask: !1
        })
      }(0, s.forwardRef)((({
        asChild: e,
        testId: t,
        children: n,
        colorOverride: r,
        label: o,
        size: s = "MD",
        ...u
      }, c) => {
        const d = Ur(),
          f = "string" == typeof s ? s : s?.[d] ?? s.default ?? "MD",
          p = (0, a.v6)({
            className: lh({
              size: f
            }),
            "data-testid": t,
            style: eh({
              [uh]: r?.pulseColorBackground,
              [ch]: r?.pulseColorForeground,
              [ah]: r?.gradientColorBackground,
              [sh]: r?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, u),
          h = e ? l.Slot : "div";
        return (0, i.jsx)(h, {
          ref: c,
          ...p,
          children: e ? (0, i.jsx)(l.Slottable, {
            children: n
          }) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              className: "foundry_nk7jgu_9dxgbcd"
            }), (0, i.jsx)("div", {
              className: "foundry_nk7jgu_9dxgbcc"
            })]
          })
        })
      }));
      var Sh = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function Ch(e) {
        return Sh.includes(e) ? "\\".concat(e) : e
      }

      function Oh(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function Ph(e, t, n) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function Eh(e, t, n) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var n = t.call(e, "string");
              if ("object" != typeof n) return n;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = n, e
      }

      function Nh(e) {
        return Nh = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, Nh(e)
      }

      function Th() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (Th = function() {
          return !!e
        })()
      }

      function Lh(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Dh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Lh(Object(n), !0).forEach((function(t) {
            Eh(e, t, n[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lh(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Mh(e, t) {
        return Mh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Mh(e, t)
      }

      function Rh(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return Rh = function(e) {
          if (null === e || ! function(e) {
              try {
                return -1 !== Function.toString.call(e).indexOf("[native code]")
              } catch (t) {
                return "function" == typeof e
              }
            }(e)) return e;
          if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n)
          }

          function n() {
            return function(e, t, n) {
              if (Th()) return Reflect.construct.apply(null, arguments);
              var r = [null];
              r.push.apply(r, t);
              var o = new(e.bind.apply(e, r));
              return n && Mh(o, n.prototype), o
            }(e, arguments, Nh(this).constructor)
          }
          return n.prototype = Object.create(e.prototype, {
            constructor: {
              value: n,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), Mh(n, e)
        }, Rh(e)
      }
      var zh, Ah = function(e) {
          function t(e) {
            var n;
            return Oh(this, t), (n = function(e, t, n) {
              return t = Nh(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, Th() ? Reflect.construct(t, n || [], Nh(e).constructor) : t.apply(e, n))
            }(this, t, [e])).name = "SyntheticChangeError", n
          }
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && Mh(e, t)
          }(t, e), Ph(t)
        }(Rh(Error)),
        Ih = ["options"],
        Vh = ["text", "email", "tel", "search", "url"],
        Fh = Ph((function e(t) {
          var n = t.init,
            r = t.tracking;
          Oh(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (Vh.includes(e.type)) {
              var i = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                a = i.initialValue,
                s = void 0 === a ? "" : a,
                l = i.controlled,
                u = void 0 !== l && l,
                c = n({
                  initialValue: e.value || s,
                  controlled: u
                }),
                d = c.value,
                f = c.options,
                p = {
                  value: d,
                  options: f,
                  fallbackOptions: f
                },
                h = {
                  id: -1,
                  cachedId: -1
                },
                v = {
                  value: "",
                  selectionStart: 0,
                  selectionEnd: 0
                },
                g = Object.getOwnPropertyDescriptor("_valueTracker" in e ? e : HTMLInputElement.prototype, "value");
              Object.defineProperty(e, "value", Dh(Dh({}, g), {}, {
                set: function(t) {
                  var n;
                  v.value = t, null == g || null === (n = g.set) || void 0 === n || n.call(e, t)
                }
              })), e.value = d;
              var m = function() {
                  var t = function() {
                    var n, r;
                    v.selectionStart = null !== (n = e.selectionStart) && void 0 !== n ? n : 0, v.selectionEnd = null !== (r = e.selectionEnd) && void 0 !== r ? r : 0, h.id = window.setTimeout(t)
                  };
                  h.id = window.setTimeout(t)
                },
                y = function() {
                  window.clearTimeout(h.id), h.id = -1, h.cachedId = -1
                },
                b = function(t) {
                  try {
                    var n, o;
                    if (h.cachedId === h.id) throw new Ah("The input selection has not been updated.");
                    h.cachedId = h.id;
                    var i = e.value,
                      a = e.selectionStart,
                      s = e.selectionEnd;
                    if (null === a || null === s) throw new Ah("The selection attributes have not been initialized.");
                    var l, u = v.value;
                    if (void 0 === t.inputType && (v.selectionStart = 0, v.selectionEnd = u.length), a > v.selectionStart ? l = "insert" : a <= v.selectionStart && a < v.selectionEnd ? l = "deleteBackward" : a === v.selectionEnd && i.length < u.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > u.length) throw new Ah("Input type detection error.");
                    var c = "",
                      d = v.selectionStart,
                      f = v.selectionEnd;
                    if ("insert" === l) c = i.slice(v.selectionStart, a);
                    else {
                      var g = u.length - i.length;
                      d = a, f = a + g
                    }
                    p.value !== u ? p.options = p.fallbackOptions : p.fallbackOptions = p.options;
                    var m = p.options,
                      y = r({
                        inputType: l,
                        previousValue: u,
                        previousOptions: m,
                        value: i,
                        addedValue: c,
                        changeStart: d,
                        changeEnd: f,
                        selectionStart: a,
                        selectionEnd: s
                      }),
                      b = y.options,
                      w = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = function(e, t) {
                          if (null == e) return {};
                          var n = {};
                          for (var r in e)
                            if ({}.hasOwnProperty.call(e, r)) {
                              if (t.includes(r)) continue;
                              n[r] = e[r]
                            } return n
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          for (r = 0; r < i.length; r++) n = i[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                        return o
                      }(y, Ih);
                    e.value = w.value, e.setSelectionRange(w.selectionStart, w.selectionEnd), p.value = w.value, p.options = b, v.selectionStart = w.selectionStart, v.selectionEnd = w.selectionEnd, null === (n = e._valueTracker) || void 0 === n || null === (o = n.setValue) || void 0 === o || o.call(n, u)
                  } catch (n) {
                    if (e.value = v.value, e.setSelectionRange(v.selectionStart, v.selectionEnd), t.preventDefault(), t.stopPropagation(), "SyntheticChangeError" !== n.name) throw n
                  }
                };
              document.activeElement === e && m(), e.addEventListener("focus", m), e.addEventListener("blur", y), e.addEventListener("input", b), o.set(e, {
                onFocus: m,
                onBlur: y,
                onInput: b
              })
            }
          }, this.unregister = function(e) {
            var t = o.get(e);
            void 0 !== t && (e.removeEventListener("focus", t.onFocus), e.removeEventListener("blur", t.onBlur), e.removeEventListener("input", t.onInput), o.delete(e))
          }
        }));
      zh = Fh, Object.defineProperty(zh.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var qh, Bh = ["track", "modify"];

      function $h(e) {
        var t, n, r, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? jh(e.replacement) : null !== (n = e.replacement) && void 0 !== n ? n : {},
          showMask: null !== (r = e.showMask) && void 0 !== r && r,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var Hh = function() {
        function e() {
          var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, n) {
            return t = hh(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, vh() ? Reflect.construct(t, n || [], hh(e).constructor) : t.apply(e, n))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                r = e.controlled,
                o = $h(n),
                i = o.mask,
                a = o.replacement,
                s = o.separate,
                l = o.showMask;
              return {
                value: t = r || t ? t : l ? i : "",
                options: {
                  mask: i,
                  replacement: a,
                  separate: s
                }
              }
            },
            tracking: function(e) {
              var t = e.inputType,
                r = e.previousValue,
                o = e.previousOptions,
                i = e.addedValue,
                a = e.changeStart,
                s = e.changeEnd,
                l = $h(n),
                u = l.track,
                c = l.modify,
                d = function(e, t) {
                  if (null == e) return {};
                  var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n = {};
                    for (var r in e)
                      if ({}.hasOwnProperty.call(e, r)) {
                        if (t.includes(r)) continue;
                        n[r] = e[r]
                      } return n
                  }(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) n = i[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                  }
                  return o
                }(l, Bh),
                f = d.mask,
                p = d.replacement,
                h = d.showMask,
                v = d.separate,
                g = mh(mh({}, "insert" === t ? {
                  inputType: t,
                  data: i
                } : {
                  inputType: t,
                  data: null
                }), {}, {
                  value: r,
                  selectionStart: a,
                  selectionEnd: s
                }),
                m = null == u ? void 0 : u(g);
              if (!1 === m) throw new Ah("Custom tracking stop.");
              null === m ? i = "" : !0 !== m && void 0 !== m && (i = m);
              var y = null == c ? void 0 : c(g);
              void 0 !== (null == y ? void 0 : y.mask) && (f = y.mask), void 0 !== (null == y ? void 0 : y.replacement) && (p = "string" == typeof(null == y ? void 0 : y.replacement) ? jh(null == y ? void 0 : y.replacement) : y.replacement), void 0 !== (null == y ? void 0 : y.showMask) && (h = y.showMask), void 0 !== (null == y ? void 0 : y.separate) && (v = y.separate);
              var b = kh(r, mh({
                  end: a
                }, o)),
                w = kh(r, mh({
                  start: s
                }, o)),
                _ = RegExp("[^".concat(Object.keys(p).join(""), "]"), "g"),
                j = f.replace(_, "");
              if (b && (b = bh(b, {
                  replacementChars: j,
                  replacement: p,
                  separate: v
                }), j = j.slice(b.length)), i && (i = bh(i, {
                  replacementChars: j,
                  replacement: p,
                  separate: !1
                }), j = j.slice(i.length)), "insert" === t && "" === i) throw new Ah("The character does not match the key value of the `replacement` object.");
              if (v) {
                var k = f.slice(a, s).replace(_, ""),
                  x = k.length - i.length;
                x < 0 ? w = w.slice(-x) : x > 0 && (w = k.slice(-x) + w)
              }
              w && (w = bh(w, {
                replacementChars: j,
                replacement: p,
                separate: v
              }));
              var S = wh(b + i + w, {
                  mask: f,
                  replacement: p,
                  separate: v,
                  showMask: h
                }),
                C = function(e) {
                  var t, n, r, o = e.inputType,
                    i = e.value,
                    a = e.addedValue,
                    s = e.beforeChangeValue,
                    l = e.replacement,
                    u = e.separate,
                    c = _h(i, {
                      mask: e.mask,
                      replacement: l
                    }).filter((function(e) {
                      var t = e.type;
                      return "input" === t || u && "replacement" === t
                    })),
                    d = null === (t = c[s.length + a.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (n = c[s.length - 1]) || void 0 === n ? void 0 : n.index,
                    p = null === (r = c[s.length + a.length]) || void 0 === r ? void 0 : r.index;
                  if ("insert" === o) {
                    if (void 0 !== d) return d + 1;
                    if (void 0 !== p) return p;
                    if (void 0 !== f) return f + 1
                  }
                  if ("deleteForward" === o) {
                    if (void 0 !== p) return p;
                    if (void 0 !== f) return f + 1
                  }
                  if ("deleteBackward" === o) {
                    if (void 0 !== f) return f + 1;
                    if (void 0 !== p) return p
                  }
                  var h = i.split("").findIndex((function(e) {
                    return Object.prototype.hasOwnProperty.call(l, e)
                  }));
                  return -1 !== h ? h : i.length
                }({
                  inputType: t,
                  value: S,
                  addedValue: i,
                  beforeChangeValue: b,
                  mask: f,
                  replacement: p,
                  separate: v
                });
              return {
                value: S,
                selectionStart: C,
                selectionEnd: C,
                options: {
                  mask: f,
                  replacement: p,
                  separate: v
                }
              }
            }
          }])).format = function(e) {
            return xh(e, $h(n))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? jh(r) : r;
              return _h(xh(e, {
                mask: n,
                replacement: o
              }), {
                mask: n,
                replacement: o
              })
            }(e, $h(n))
          }, t.unformat = function(e) {
            return function(e, t) {
              var n = t.mask,
                r = t.replacement,
                o = "string" == typeof r ? jh(r) : r,
                i = kh(e, {
                  mask: n,
                  replacement: o,
                  separate: !1
                }),
                a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return bh(i, {
                replacementChars: n.replace(a, ""),
                replacement: o,
                separate: !1
              })
            }(e, $h(n))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var n = t.mask, r = t.replacement, o = "string" == typeof r ? jh(r) : r, i = "partial" === e || "partial-inexact" === e, a = "full" === e || "partial" === e, s = "", l = 0; l < n.length; l++) {
                var u = n[l];
                0 === l && (s = "^"), i && (s += "("), s += Object.prototype.hasOwnProperty.call(o, u) ? "".concat(a ? "(?!".concat(Ch(u), ")") : "", "(").concat(o[u].source, ")") : Ch(u), l === n.length - 1 && (i && (s += ")?".repeat(n.length)), s += "$")
              }
              return s
            }(e, $h(n))
          }, t
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && yh(e, t)
          }(e, Fh),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function Wh(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Gh(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Uh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Gh(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Wh(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gh(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Kh(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      qh = Hh, Object.defineProperty(qh.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var Xh = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Yh = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Uh(Uh({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Xh(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Kh(e.variantClassNames, (e => Kh(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Zh = "foundry_nk7jgu_8oytzos",
        Qh = Yh({
          defaultClassName: "foundry_nk7jgu_8oytzob",
          variantClassNames: {
            isDisabled: {
              false: "foundry_nk7jgu_8oytzoc",
              true: "foundry_nk7jgu_8oytzod"
            },
            isReadOnly: {
              false: "foundry_nk7jgu_8oytzoe",
              true: "foundry_nk7jgu_8oytzof"
            },
            isInvalid: {
              false: "foundry_nk7jgu_8oytzog",
              true: "foundry_nk7jgu_8oytzoh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Jh = Yh({
          defaultClassName: "foundry_nk7jgu_8oytzou",
          variantClassNames: {
            isDisabled: {
              false: "foundry_nk7jgu_8oytzov",
              true: "foundry_nk7jgu_8oytzow"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ev = Yh({
          defaultClassName: "foundry_nk7jgu_8oytzo8",
          variantClassNames: {
            isDisabled: {
              false: "foundry_nk7jgu_8oytzo9",
              true: "foundry_nk7jgu_8oytzoa"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        tv = Yh({
          defaultClassName: "foundry_nk7jgu_8oytzon",
          variantClassNames: {
            side: {
              left: "foundry_nk7jgu_8oytzoo",
              right: "foundry_nk7jgu_8oytzop"
            },
            isDisabled: {
              false: "foundry_nk7jgu_8oytzoq",
              true: "foundry_nk7jgu_8oytzor"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        nv = Yh({
          defaultClassName: "foundry_nk7jgu_8oytzoi foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd10",
          variantClassNames: {
            isDisabled: {
              false: "foundry_nk7jgu_8oytzoj",
              true: "foundry_nk7jgu_8oytzok"
            },
            isReadOnly: {
              false: "foundry_nk7jgu_8oytzol",
              true: "foundry_nk7jgu_8oytzom"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        rv = Yh({
          defaultClassName: "foundry_nk7jgu_8oytzo4",
          variantClassNames: {
            isDisabled: {
              false: "foundry_nk7jgu_8oytzo5",
              true: "foundry_nk7jgu_8oytzo6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const ov = (e, t, n) => {
          const r = [];
          return e && r.push(e), t && r.push(t), n && r.push(n), r.join(" ")
        },
        iv = (0, s.createContext)(null);

      function av() {
        const e = (0, s.useContext)(iv);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }

      function sv(e, t) {
        let {
          elementType: n = "a",
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ...l
        } = e, u = {};
        "a" !== n && (u = {
          role: "link",
          tabIndex: s ? void 0 : 0
        });
        let {
          focusableProps: c
        } = pt(e, t), {
          pressProps: d,
          isPressed: f
        } = Kt({
          onPress: r,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ref: t
        }), p = X(l, {
          labelable: !0
        }), h = me(c, d), v = qt();
        return {
          isPressed: f,
          linkProps: me(p, $t(e), {
            ...h,
            ...u,
            "aria-disabled": s || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var n;
              null === (n = d.onClick) || void 0 === n || n.call(d, t), !v.isNative && t.currentTarget instanceof HTMLAnchorElement && t.currentTarget.href && !t.isDefaultPrevented() && function(e, t) {
                let n = e.getAttribute("target");
                return !(n && "_self" !== n || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
              }(t.currentTarget, t) && e.href && (t.preventDefault(), v.open(t.currentTarget, t, e.href, e.routerOptions))
            }
          })
        }
      }

      function lv(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function uv(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function cv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? uv(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = lv(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : uv(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function dv(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }(0, s.forwardRef)((({
        asChild: e,
        children: t,
        testId: n,
        isDisabled: r = !1,
        isReadOnly: o = !1,
        isRequired: u = !1,
        isInvalid: c = !1,
        ...d
      }, f) => {
        const [p, h] = (0, s.useState)("text"), v = (0, s.useId)(), g = (0, s.useId)(), m = (0, s.useId)(), y = (0, s.useId)(), b = (0, a.v6)({
          "data-testid": n,
          className: "foundry_nk7jgu_8oytzo3"
        }, d), w = e ? l.Slot : "div";
        return (0, i.jsx)(iv.Provider, {
          value: {
            isDisabled: r,
            isReadOnly: o,
            isRequired: u,
            isInvalid: c,
            labelId: v,
            inputId: g,
            descriptionId: m,
            errorId: y,
            inputType: p,
            setInputType: h
          },
          children: (0, i.jsx)(w, {
            ref: f,
            ...b,
            children: t
          })
        })
      })), (0, s.forwardRef)((({
        testId: e,
        asChild: t,
        children: n,
        isHidden: r = !1,
        hideRequiredAsterisk: o,
        ...s
      }, u) => {
        const {
          isDisabled: d,
          isRequired: f,
          inputId: p,
          labelId: h
        } = av(), v = (0, a.v6)({
          id: s.id || h,
          htmlFor: s.htmlFor || p,
          "data-testid": e,
          className: rv({
            isDisabled: d
          })
        }, s), g = t ? l.Slot : "label";
        return (0, i.jsx)(c, {
          enabled: r,
          children: (0, i.jsx)(M, {
            size: "SM",
            asChild: !0,
            children: (0, i.jsxs)(g, {
              ref: u,
              ...v,
              children: [n, f && !o && (0, i.jsx)("span", {
                className: "foundry_nk7jgu_8oytzo7",
                children: "*"
              })]
            })
          })
        })
      })), (0, s.forwardRef)((({
        testId: e,
        asChild: t,
        children: n,
        ...r
      }, o) => {
        const {
          isDisabled: s
        } = av(), u = (0, a.v6)({
          "data-testid": e,
          className: ev({
            isDisabled: s
          })
        }, r), c = t ? l.Slot : "span";
        return (0, i.jsx)(M, {
          size: "XS",
          asChild: !0,
          children: (0, i.jsx)(c, {
            ref: o,
            ...u,
            children: n
          })
        })
      })), (0, s.forwardRef)((({
        testId: e,
        asChild: t,
        children: n,
        ...r
      }, o) => {
        const {
          isDisabled: s,
          isReadOnly: u,
          isInvalid: c
        } = av(), d = (0, a.v6)({
          "data-testid": e,
          className: (0, O.$)(Qh({
            isDisabled: s,
            isReadOnly: u,
            isInvalid: c
          }), "foundry_nk7jgu_8oytzo1")
        }, r), f = t ? l.Slot : "div";
        return (0, i.jsx)(f, {
          ref: o,
          ...d,
          children: n
        })
      })), (0, s.forwardRef)((({
        testId: e,
        asChild: t,
        "aria-labelledby": n,
        "aria-describedby": r,
        type: o,
        mask: u,
        replacement: c,
        showMask: d = !0,
        track: f,
        ...p
      }, h) => {
        const {
          isDisabled: v,
          isReadOnly: g,
          isRequired: m,
          labelId: y,
          inputId: b,
          descriptionId: w,
          isInvalid: _,
          errorId: j,
          inputType: k,
          setInputType: x
        } = av();
        (0, s.useEffect)((() => x(o ?? "text")), []);
        const S = (0, a.v6)({
            disabled: v,
            readOnly: g,
            required: m,
            id: b,
            type: k,
            spellCheck: !1,
            "aria-labelledby": ov(y, n),
            "aria-describedby": ov(w, r, _ ? j : void 0),
            "data-testid": e,
            className: (0, O.$)(nv({
              isDisabled: v,
              isReadOnly: g
            }), "foundry_nk7jgu_8oytzo2"),
            ..._ && {
              "aria-invalid": !0,
              "aria-errormessage": j
            },
            ...v && {
              "aria-disabled": !0
            },
            ...m && {
              "aria-required": !0
            }
          }, p),
          C = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = e.mask,
              n = e.replacement,
              r = e.showMask,
              o = e.separate,
              i = e.track,
              a = e.modify,
              l = (0, s.useRef)(null),
              u = (0, s.useRef)({
                mask: t,
                replacement: n,
                showMask: r,
                separate: o,
                track: i,
                modify: a
              });
            return u.current.mask = t, u.current.replacement = n, u.current.showMask = r, u.current.separate = o, u.current.track = i, u.current.modify = a, (0, s.useMemo)((function() {
              return function(e, t) {
                return new Proxy(e, {
                  set: function(n, r, o) {
                    return "current" === r && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), n[r] = o, !0)
                  }
                })
              }(l, new Hh(u.current))
            }), [])
          }({
            mask: u,
            replacement: c,
            showMask: d,
            track: f
          }),
          P = F(u && c ? C : null, h),
          E = t ? l.Slot : "input";
        return (0, i.jsx)(E, {
          ref: P,
          ...S
        })
      })), (0, s.forwardRef)((({
        icon: e,
        asChild: t,
        testId: n,
        side: r,
        ...o
      }, s) => {
        const {
          isDisabled: u
        } = av(), c = (0, a.v6)({
          size: "LG",
          "data-testid": n,
          className: (0, O.$)(tv({
            side: r,
            isDisabled: u
          }), "foundry_nk7jgu_8oytzo0")
        }, o), d = t ? l.Slot : z[e];
        return (0, i.jsx)(d, {
          ref: s,
          ...c
        })
      })), (0, s.forwardRef)((({
        ...e
      }, t) => {
        const {
          isDisabled: n
        } = av(), r = (0, a.v6)({
          isDisabled: n,
          size: "SM",
          appearance: "ghost",
          className: Zh
        }, e);
        return (0, i.jsx)(Ou, {
          ref: t,
          ...r
        })
      })), (0, s.forwardRef)((({
        ...e
      }, t) => {
        const {
          isDisabled: n,
          inputType: r,
          setInputType: o
        } = av(), s = "password" === r, l = s ? "Reveal Password" : "Hide Password", u = (0, a.v6)({
          isDisabled: n,
          size: "SM",
          appearance: "ghost",
          className: Zh,
          label: l,
          icon: s ? "Eye" : "EyeOff",
          onPress: () => {
            o(s ? "text" : "password")
          }
        }, e);
        return (0, i.jsx)(gc, {
          side: "bottom",
          portal: !1,
          align: "end",
          content: (0, i.jsx)(M, {
            size: "SM",
            children: l
          }),
          children: (0, i.jsx)(Ou, {
            ref: t,
            ...u
          })
        })
      })), (0, s.forwardRef)((({
        testId: e,
        asChild: t,
        children: n,
        isHidden: r = !1,
        errorMessage: o,
        ...s
      }, u) => {
        const {
          isDisabled: d,
          isInvalid: f,
          descriptionId: p,
          errorId: h
        } = av(), v = (0, a.v6)({
          id: p,
          asChild: !0,
          "data-testid": e,
          className: Jh({
            isDisabled: d
          })
        }, s), g = t ? l.Slot : "p", m = R.X;
        return (0, i.jsxs)("div", {
          className: "foundry_nk7jgu_8oytzot",
          children: [(0, i.jsx)(c, {
            enabled: r || f,
            children: (0, i.jsx)(M, {
              size: "SM",
              ref: u,
              ...v,
              children: (0, i.jsx)(g, {
                children: n
              })
            })
          }), f && o && (0, i.jsxs)(M, {
            size: "SM",
            appearance: "bold",
            className: "foundry_nk7jgu_8oytzox",
            id: h,
            children: [(0, i.jsx)(m, {
              size: "MD",
              label: "",
              className: "foundry_nk7jgu_8oytzoy"
            }), o]
          })]
        })
      }));
      var fv = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        pv = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = cv(cv({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) fv(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return dv(e.variantClassNames, (e => dv(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        hv = pv({
          defaultClassName: "foundry_nk7jgu_1m368qhm",
          variantClassNames: {
            hasBackground: {
              false: "foundry_nk7jgu_1m368qhn"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        vv = pv({
          defaultClassName: "foundry_nk7jgu_1m368qhd",
          variantClassNames: {
            status: {
              information: "foundry_nk7jgu_1m368qhe",
              danger: "foundry_nk7jgu_1m368qhf",
              success: "foundry_nk7jgu_1m368qhg",
              warning: "foundry_nk7jgu_1m368qhh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        gv = pv({
          defaultClassName: "foundry_nk7jgu_1m368qh2",
          variantClassNames: {
            status: {
              danger: "foundry_nk7jgu_1m368qh3",
              information: "foundry_nk7jgu_1m368qh4",
              success: "foundry_nk7jgu_1m368qh5",
              warning: "foundry_nk7jgu_1m368qh6"
            },
            background: {
              "two-tone": "foundry_nk7jgu_1m368qh7",
              neutral: "foundry_nk7jgu_1m368qh8",
              none: "foundry_nk7jgu_1m368qh9"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const mv = (0, s.createContext)(null);

      function yv() {
        const e = (0, s.useContext)(mv);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }(0, s.forwardRef)((({
        asChild: e,
        testId: t,
        status: n,
        background: r,
        ...o
      }, s) => {
        const u = e ? l.Slot : "div",
          c = (0, a.v6)(o, {
            className: gv({
              status: n,
              background: r
            })
          });
        return (0, i.jsx)(mv.Provider, {
          value: {
            status: n,
            background: r
          },
          children: (0, i.jsx)(u, {
            ref: s,
            "data-testid": t,
            ...c,
            ...o
          })
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        ...n
      }, r) => {
        const o = e ? l.Slot : "div",
          s = (0, a.v6)(n, {
            className: "foundry_nk7jgu_1m368qha"
          });
        return (0, i.jsx)(o, {
          ref: r,
          "data-testid": t,
          ...s
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        ...n
      }, r) => {
        const o = e ? l.Slot : "div",
          s = (0, a.v6)(n, {
            className: "foundry_nk7jgu_1m368qhb"
          });
        return (0, i.jsx)(o, {
          ref: r,
          "data-testid": t,
          ...s
        })
      }));
      const bv = {
        danger: "CircleX",
        information: "Info",
        success: "CircleCheck",
        warning: "TriangleAlert"
      };

      function wv(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function _v(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function jv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _v(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = wv(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : _v(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function kv(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }(0, s.forwardRef)((({
        icon: e,
        ...t
      }, n) => {
        const {
          status: r
        } = yv(), o = z[e || bv[r]], s = (0, a.v6)(t, {
          className: vv({
            status: r
          })
        });
        return (0, i.jsx)("div", {
          className: "foundry_nk7jgu_1m368qhc",
          children: (0, i.jsx)(o, {
            title: "",
            ref: n,
            ...s
          })
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        ...n
      }, r) => {
        const o = e ? l.Slot : "div",
          s = (0, a.v6)(n, {
            className: "foundry_nk7jgu_1m368qhi"
          });
        return (0, i.jsx)(b, {
          level: 6,
          asChild: !0,
          children: (0, i.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...s
          })
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        ...n
      }, r) => {
        const o = e ? l.Slot : "div",
          s = (0, a.v6)(n, {
            className: "foundry_nk7jgu_1m368qhj"
          });
        return (0, i.jsx)(M, {
          size: "SM",
          asChild: !0,
          children: (0, i.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...s
          })
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        children: t,
        testId: n,
        ...r
      }, o) => {
        const u = (0, s.useRef)(null),
          c = F(u, o),
          d = e ? l.Slot : "a",
          {
            linkProps: f,
            isPressed: p
          } = sv(r, u),
          h = (0, a.v6)(f, {
            className: "foundry_nk7jgu_1m368qhk foundry_nk7jgu_1d5mo5m0"
          });
        return (0, i.jsx)(M, {
          size: "SM",
          appearance: "hyperlink",
          asChild: !0,
          children: (0, i.jsx)(d, {
            "data-pressed": p,
            "data-testid": n,
            ref: c,
            ...h,
            children: t
          })
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        children: t,
        testId: n,
        ...r
      }, o) => {
        const s = e ? l.Slot : "div",
          u = (0, a.v6)(r, {
            className: "foundry_nk7jgu_1m368qhl"
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": n,
          ...u,
          children: t
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        className: n,
        ...r
      }, o) => {
        const a = e ? l.Slot : "div";
        return (0, i.jsx)(M, {
          size: "SM",
          asChild: !0,
          children: (0, i.jsx)(a, {
            ref: o,
            "data-testid": t,
            className: (0, O.$)(n, "foundry_nk7jgu_1m368qho"),
            ...r
          })
        })
      })), (0, s.forwardRef)((({
        testId: e,
        label: t = "close alert",
        ...n
      }, r) => {
        const {
          background: o
        } = yv(), s = (0, a.v6)(n, {
          className: hv({
            hasBackground: "none" !== o
          })
        });
        return (0, i.jsx)(Ou, {
          ref: r,
          label: t,
          "data-testid": e,
          appearance: "ghost",
          icon: "X",
          size: "XS",
          ...s
        })
      }));
      var xv = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Sv = "foundry_nk7jgu_qmpv6yt",
        Cv = (e => {
          var t = t => {
            var n = e.defaultClassName,
              r = jv(jv({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) xv(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return kv(e.variantClassNames, (e => kv(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_nk7jgu_qmpv6y6",
          variantClassNames: {
            status: {
              danger: "foundry_nk7jgu_qmpv6y7",
              information: "foundry_nk7jgu_qmpv6y8",
              success: "foundry_nk7jgu_qmpv6y9",
              warning: "foundry_nk7jgu_qmpv6ya"
            },
            background: {
              static: "foundry_nk7jgu_qmpv6yb",
              "two-tone": "foundry_nk7jgu_qmpv6yc",
              neutral: "foundry_nk7jgu_qmpv6yd"
            },
            align: {
              left: "foundry_nk7jgu_qmpv6ye",
              center: "foundry_nk7jgu_qmpv6yf"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              status: "danger",
              background: "static"
            }, "foundry_nk7jgu_qmpv6yg"],
            [{
              status: "information",
              background: "static"
            }, "foundry_nk7jgu_qmpv6yh"],
            [{
              status: "warning",
              background: "static"
            }, "foundry_nk7jgu_qmpv6yi"],
            [{
              status: "success",
              background: "static"
            }, "foundry_nk7jgu_qmpv6yj"]
          ]
        });

      function Ov(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function Pv(e, t) {
        const n = Object.keys(e),
          r = Object.keys(t);
        return n.length === r.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && n.every((n => {
          const r = e[n],
            o = t[n];
          return "function" == typeof r ? `${r}` == `${o}` : Ov(r) && Ov(o) ? Pv(r, o) : r === o
        })))
      }

      function Ev(e) {
        return e.concat().sort(((e, t) => e.name > t.name ? 1 : -1)).map((e => e.options))
      }

      function Nv(e) {
        return "number" == typeof e
      }

      function Tv(e) {
        return "string" == typeof e
      }

      function Lv(e) {
        return "boolean" == typeof e
      }

      function Dv(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function Mv(e) {
        return Math.abs(e)
      }

      function Rv(e) {
        return Math.sign(e)
      }

      function zv(e, t) {
        return Mv(e - t)
      }

      function Av(e) {
        return Bv(e).map(Number)
      }

      function Iv(e) {
        return e[Vv(e)]
      }

      function Vv(e) {
        return Math.max(0, e.length - 1)
      }

      function Fv(e, t) {
        return t === Vv(e)
      }

      function qv(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Array.from(Array(e), ((e, n) => t + n))
      }

      function Bv(e) {
        return Object.keys(e)
      }

      function $v(e, t) {
        return [e, t].reduce(((e, t) => (Bv(t).forEach((n => {
          const r = e[n],
            o = t[n],
            i = Dv(r) && Dv(o);
          e[n] = i ? $v(r, o) : o
        })), e)), {})
      }

      function Hv(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function Wv() {
        let e = [];
        const t = {
          add: function(n, r, o) {
            let i, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
              passive: !0
            };
            if ("addEventListener" in n) n.addEventListener(r, o, a), i = () => n.removeEventListener(r, o, a);
            else {
              const e = n;
              e.addListener(o), i = () => e.removeListener(o)
            }
            return e.push(i), t
          },
          clear: function() {
            e = e.filter((e => e()))
          }
        };
        return t
      }

      function Gv() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const n = Mv(e - t);

        function r(t) {
          return t < e
        }

        function o(e) {
          return e > t
        }

        function i(e) {
          return r(e) || o(e)
        }
        return {
          length: n,
          max: t,
          min: e,
          constrain: function(n) {
            return i(n) ? r(n) ? e : t : n
          },
          reachedAny: i,
          reachedMax: o,
          reachedMin: r,
          removeOffset: function(e) {
            return n ? e - n * Math.ceil((e - t) / n) : e
          }
        }
      }

      function Uv(e, t, n) {
        const {
          constrain: r
        } = Gv(0, e), o = e + 1;
        let i = a(t);

        function a(e) {
          return n ? Mv((o + e) % o) : r(e)
        }

        function s() {
          return i
        }

        function l() {
          return Uv(e, s(), n)
        }
        const u = {
          get: s,
          set: function(e) {
            return i = a(e), u
          },
          add: function(e) {
            return l().set(s() + e)
          },
          clone: l
        };
        return u
      }

      function Kv(e, t, n, r, o, i, a, s, l, u, c, d, f, p, h, v, g, m, y) {
        const {
          cross: b,
          direction: w
        } = e, _ = ["INPUT", "SELECT", "TEXTAREA"], j = {
          passive: !1
        }, k = Wv(), x = Wv(), S = Gv(50, 225).constrain(p.measure(20)), C = {
          mouse: 300,
          touch: 400
        }, O = {
          mouse: 500,
          touch: 600
        }, P = h ? 43 : 25;
        let E = !1,
          N = 0,
          T = 0,
          L = !1,
          D = !1,
          M = !1,
          R = !1;

        function z(e) {
          if (!Hv(e, r) && e.touches.length >= 2) return A(e);
          const t = i.readPoint(e),
            n = i.readPoint(e, b),
            a = zv(t, N),
            l = zv(n, T);
          if (!D && !R) {
            if (!e.cancelable) return A(e);
            if (D = a > l, !D) return A(e)
          }
          const c = i.pointerMove(e);
          a > v && (M = !0), u.useFriction(.3).useDuration(.75), s.start(), o.add(w(c)), e.preventDefault()
        }

        function A(e) {
          const t = c.byDistance(0, !1).index !== d.get(),
            n = i.pointerUp(e) * (h ? O : C)[R ? "mouse" : "touch"],
            r = function(e, t) {
              const n = d.add(-1 * Rv(e)),
                r = c.byDistance(e, !h).distance;
              return h || Mv(e) < S ? r : g && t ? .5 * r : c.byIndex(n.get(), 0).distance
            }(w(n), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (Mv(e) <= Mv(t)) return 0;
              const n = zv(Mv(e), Mv(t));
              return Mv(n / e)
            }(n, r),
            a = P - 10 * o,
            s = m + o / 50;
          D = !1, L = !1, x.clear(), u.useDuration(a).useFriction(s), l.distance(r, !h), R = !1, f.emit("pointerUp")
        }

        function I(e) {
          M && (e.stopPropagation(), e.preventDefault(), M = !1)
        }
        return {
          init: function(e) {
            if (!y) return;

            function s(s) {
              (Lv(y) || y(e, s)) && function(e) {
                const s = Hv(e, r);
                R = s, M = h && s && !e.buttons && E, E = zv(o.get(), a.get()) >= 2, s && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return _.includes(t)
                }(e.target) || (L = !0, i.pointerDown(e), u.useFriction(0).useDuration(0), o.set(a), function() {
                  const e = R ? n : t;
                  x.add(e, "touchmove", z, j).add(e, "touchend", A).add(e, "mousemove", z, j).add(e, "mouseup", A)
                }(), N = i.readPoint(e), T = i.readPoint(e, b), f.emit("pointerDown"))
              }(s)
            }
            const l = t;
            k.add(l, "dragstart", (e => e.preventDefault()), j).add(l, "touchmove", (() => {}), j).add(l, "touchend", (() => {})).add(l, "touchstart", s).add(l, "mousedown", s).add(l, "touchcancel", A).add(l, "contextmenu", A).add(l, "click", I, !0)
          },
          destroy: function() {
            k.clear(), x.clear()
          },
          pointerDown: function() {
            return L
          }
        }
      }

      function Xv(e, t) {
        let n, r;

        function o(e) {
          return e.timeStamp
        }

        function i(n, r) {
          const o = "client" + ("x" === (r || e.scroll) ? "X" : "Y");
          return (Hv(n, t) ? n : n.touches[0])[o]
        }
        return {
          pointerDown: function(e) {
            return n = e, r = e, i(e)
          },
          pointerMove: function(e) {
            const t = i(e) - i(r),
              a = o(e) - o(n) > 170;
            return r = e, a && (n = e), t
          },
          pointerUp: function(e) {
            if (!n || !r) return 0;
            const t = i(r) - i(n),
              a = o(e) - o(n),
              s = o(e) - o(r) > 170,
              l = t / a;
            return a && !s && Mv(l) > .1 ? l : 0
          },
          readPoint: i
        }
      }

      function Yv(e, t, n, r, o, i, a) {
        const s = [e].concat(r);
        let l, u, c = [],
          d = !1;

        function f(e) {
          return o.measureSize(a.measure(e))
        }
        return {
          init: function(o) {
            i && (u = f(e), c = r.map(f), l = new ResizeObserver((n => {
              (Lv(i) || i(o, n)) && function(n) {
                for (const i of n) {
                  if (d) return;
                  const n = i.target === e,
                    a = r.indexOf(i.target),
                    s = n ? u : c[a];
                  if (Mv(f(n ? e : r[a]) - s) >= .5) {
                    o.reInit(), t.emit("resize");
                    break
                  }
                }
              }(n)
            })), n.requestAnimationFrame((() => {
              s.forEach((e => l.observe(e)))
            })))
          },
          destroy: function() {
            d = !0, l && l.disconnect()
          }
        }
      }

      function Zv(e, t, n, r, o) {
        const i = o.measure(10),
          a = o.measure(50),
          s = Gv(.1, .99);
        let l = !1;

        function u() {
          return !l && !!e.reachedAny(n.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: u,
          constrain: function(o) {
            if (!u()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              c = Mv(e[l] - t.get()),
              d = n.get() - t.get(),
              f = s.constrain(c / a);
            n.subtract(d * f), !o && Mv(d) < i && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function Qv(e, t, n, r) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: a,
            reachedMax: s
          } = Gv(o, i),
          l = {
            loop: function(t) {
              if (! function(e) {
                  return 1 === e ? s(n.get()) : -1 === e && a(n.get())
                }(t)) return;
              const o = e * (-1 * t);
              r.forEach((e => e.add(o)))
            }
          };
        return l
      }

      function Jv(e) {
        let t = e;

        function n(e) {
          return Nv(e) ? e : e.get()
        }
        return {
          get: function() {
            return t
          },
          set: function(e) {
            t = n(e)
          },
          add: function(e) {
            t += n(e)
          },
          subtract: function(e) {
            t -= n(e)
          }
        }
      }

      function eg(e, t) {
        const n = "x" === e.scroll ? function(e) {
            return `translate3d(${e}px,0px,0px)`
          } : function(e) {
            return `translate3d(0px,${e}px,0px)`
          },
          r = t.style;
        let o = null,
          i = !1;
        const a = {
          clear: function() {
            i || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
          },
          to: function(t) {
            if (i) return;
            const a = (s = e.direction(t), Math.round(100 * s) / 100);
            var s;
            a !== o && (r.transform = n(a), o = a)
          },
          toggleActive: function(e) {
            i = !e
          }
        };
        return a
      }

      function tg(e, t, n, r, o, i, a, s, l) {
        const u = Av(o),
          c = Av(o).reverse(),
          d = function() {
            const e = a[0];
            return h(p(c, e), n, !1)
          }().concat(function() {
            const e = t - a[0] - 1;
            return h(p(u, e), -n, !0)
          }());

        function f(e, t) {
          return e.reduce(((e, t) => e - o[t]), t)
        }

        function p(e, t) {
          return e.reduce(((e, n) => f(e, t) > 0 ? e.concat([n]) : e), [])
        }

        function h(o, a, u) {
          const c = function(e) {
            return i.map(((n, o) => ({
              start: n - r[o] + .5 + e,
              end: n + t - .5 + e
            })))
          }(a);
          return o.map((t => {
            const r = u ? 0 : -n,
              o = u ? n : 0,
              i = u ? "end" : "start",
              a = c[t][i];
            return {
              index: t,
              loopPoint: a,
              slideLocation: Jv(-1),
              translate: eg(e, l[t]),
              target: () => s.get() > a ? r : o
            }
          }))
        }
        const v = {
          canLoop: function() {
            return d.every((e => {
              let {
                index: n
              } = e;
              const r = u.filter((e => e !== n));
              return f(r, t) <= .1
            }))
          },
          clear: function() {
            d.forEach((e => e.translate.clear()))
          },
          loop: function() {
            d.forEach((e => {
              const {
                target: t,
                translate: n,
                slideLocation: r
              } = e, o = t();
              o !== r.get() && (n.to(o), r.set(o))
            }))
          },
          loopPoints: d
        };
        return v
      }

      function ng(e, t, n) {
        let r, o = !1;
        return {
          init: function(i) {
            n && (r = new MutationObserver((e => {
              o || (Lv(n) || n(i, e)) && function(e) {
                for (const n of e)
                  if ("childList" === n.type) {
                    i.reInit(), t.emit("slidesChanged");
                    break
                  }
              }(e)
            })), r.observe(e, {
              childList: !0
            }))
          },
          destroy: function() {
            r && r.disconnect(), o = !0
          }
        }
      }

      function rg(e, t, n, r, o, i, a) {
        const {
          align: s,
          axis: l,
          direction: u,
          startIndex: c,
          loop: d,
          duration: f,
          dragFree: p,
          dragThreshold: h,
          inViewThreshold: v,
          slidesToScroll: g,
          skipSnaps: m,
          containScroll: y,
          watchResize: b,
          watchSlides: w,
          watchDrag: _,
          watchFocus: j
        } = i, k = {
          measure: function(e) {
            const {
              offsetTop: t,
              offsetLeft: n,
              offsetWidth: r,
              offsetHeight: o
            } = e;
            return {
              top: t,
              right: n + r,
              bottom: t + o,
              left: n,
              width: r,
              height: o
            }
          }
        }, x = k.measure(t), S = n.map(k.measure), C = function(e, t) {
          const n = "rtl" === t,
            r = "y" === e,
            o = !r && n ? -1 : 1;
          return {
            scroll: r ? "y" : "x",
            cross: r ? "x" : "y",
            startEdge: r ? "top" : n ? "right" : "left",
            endEdge: r ? "bottom" : n ? "left" : "right",
            measureSize: function(e) {
              const {
                height: t,
                width: n
              } = e;
              return r ? t : n
            },
            direction: function(e) {
              return e * o
            }
          }
        }(l, u), O = C.measureSize(x), P = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(O), E = function(e, t) {
          const n = {
            start: function() {
              return 0
            },
            center: function(e) {
              return r(e) / 2
            },
            end: r
          };

          function r(e) {
            return t - e
          }
          const o = {
            measure: function(r, o) {
              return Tv(e) ? n[e](r) : e(t, r, o)
            }
          };
          return o
        }(s, O), N = !d && !!y, T = d || !!y, {
          slideSizes: L,
          slideSizesWithGaps: D,
          startGap: M,
          endGap: R
        } = function(e, t, n, r, o, i) {
          const {
            measureSize: a,
            startEdge: s,
            endEdge: l
          } = e, u = n[0] && o, c = function() {
            if (!u) return 0;
            const e = n[0];
            return Mv(t[s] - e[s])
          }(), d = function() {
            if (!u) return 0;
            const e = i.getComputedStyle(Iv(r));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), f = n.map(a), p = n.map(((e, t, n) => {
            const r = !t,
              o = Fv(n, t);
            return r ? f[t] + c : o ? f[t] + d : n[t + 1][s] - e[s]
          })).map(Mv);
          return {
            slideSizes: f,
            slideSizesWithGaps: p,
            startGap: c,
            endGap: d
          }
        }(C, x, S, n, T, o), z = function(e, t, n, r, o, i, a, s, l) {
          const {
            startEdge: u,
            endEdge: c,
            direction: d
          } = e, f = Nv(n), p = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return Av(e).filter((e => e % t == 0)).map((n => e.slice(n, n + t)))
              }(e, n) : function(e) {
                return e.length ? Av(e).reduce(((n, f, p) => {
                  const h = Iv(n) || 0,
                    v = 0 === h,
                    g = f === Vv(e),
                    m = o[u] - i[h][u],
                    y = o[u] - i[f][c],
                    b = !r && v ? d(a) : 0,
                    w = Mv(y - (!r && g ? d(s) : 0) - (m + b));
                  return p && w > t + l && n.push(f), g && n.push(e.length), n
                }), []).map(((t, n, r) => {
                  const o = Math.max(r[n - 1] || 0);
                  return e.slice(o, t)
                })) : []
              }(e)
            }
          };
          return p
        }(C, O, g, d, x, S, M, R, 2), {
          snaps: A,
          snapsAligned: I
        } = function(e, t, n, r, o) {
          const {
            startEdge: i,
            endEdge: a
          } = e, {
            groupSlides: s
          } = o, l = s(r).map((e => Iv(e)[a] - e[0][i])).map(Mv).map(t.measure), u = r.map((e => n[i] - e[i])).map((e => -Mv(e))), c = s(u).map((e => e[0])).map(((e, t) => e + l[t]));
          return {
            snaps: u,
            snapsAligned: c
          }
        }(C, E, x, S, z), V = -Iv(A) + Iv(D), {
          snapsContained: F,
          scrollContainLimit: q
        } = function(e, t, n, r) {
          const o = Gv(-t + e, 0),
            i = n.map(((e, t) => {
              const {
                min: r,
                max: i
              } = o, a = o.constrain(e), l = !t, u = Fv(n, t);
              return l ? i : u || s(r, a) ? r : s(i, a) ? i : a
            })).map((e => parseFloat(e.toFixed(3)))),
            a = function() {
              const e = i[0],
                t = Iv(i);
              return Gv(i.lastIndexOf(e), i.indexOf(t) + 1)
            }();

          function s(e, t) {
            return zv(e, t) <= 1
          }
          return {
            snapsContained: function() {
              if (t <= e + 2) return [o.max];
              if ("keepSnaps" === r) return i;
              const {
                min: n,
                max: s
              } = a;
              return i.slice(n, s)
            }(),
            scrollContainLimit: a
          }
        }(O, V, I, y), B = N ? F : I, {
          limit: $
        } = function(e, t, n) {
          const r = t[0];
          return {
            limit: Gv(n ? r - e : Iv(t), r)
          }
        }(V, B, d), H = Uv(Vv(B), c, d), W = H.clone(), G = Av(n), U = function(e, t, n, r) {
          const o = Wv(),
            i = 1e3 / 60;
          let a = null,
            s = 0,
            l = 0;

          function u(e) {
            if (!l) return;
            a || (a = e, n(), n());
            const o = e - a;
            for (a = e, s += o; s >= i;) n(), s -= i;
            r(s / i), l && (l = t.requestAnimationFrame(u))
          }

          function c() {
            t.cancelAnimationFrame(l), a = null, s = 0, l = 0
          }
          return {
            init: function() {
              o.add(e, "visibilitychange", (() => {
                e.hidden && (a = null, s = 0)
              }))
            },
            destroy: function() {
              c(), o.clear()
            },
            start: function() {
              l || (l = t.requestAnimationFrame(u))
            },
            stop: c,
            update: n,
            render: r
          }
        }(r, o, (() => (e => {
          let {
            dragHandler: t,
            scrollBody: n,
            scrollBounds: r,
            options: {
              loop: o
            }
          } = e;
          o || r.constrain(t.pointerDown()), n.seek()
        })(se)), (e => ((e, t) => {
          let {
            scrollBody: n,
            translate: r,
            location: o,
            offsetLocation: i,
            previousLocation: a,
            scrollLooper: s,
            slideLooper: l,
            dragHandler: u,
            animation: c,
            eventHandler: d,
            scrollBounds: f,
            options: {
              loop: p
            }
          } = e;
          const h = n.settled(),
            v = !f.shouldConstrain(),
            g = p ? h : h && v,
            m = g && !u.pointerDown();
          m && c.stop();
          const y = o.get() * t + a.get() * (1 - t);
          i.set(y), p && (s.loop(n.direction()), l.loop()), r.to(i.get()), m && d.emit("settle"), g || d.emit("scroll")
        })(se, e))), K = B[H.get()], X = Jv(K), Y = Jv(K), Z = Jv(K), Q = Jv(K), J = function(e, t, n, r, o) {
          let i = 0,
            a = 0,
            s = o,
            l = .68,
            u = e.get(),
            c = 0;

          function d(e) {
            return s = e, p
          }

          function f(e) {
            return l = e, p
          }
          const p = {
            direction: function() {
              return a
            },
            duration: function() {
              return s
            },
            velocity: function() {
              return i
            },
            seek: function() {
              const t = r.get() - e.get();
              let o = 0;
              return s ? (n.set(e), i += t / s, i *= l, u += i, e.add(i), o = u - c) : (i = 0, n.set(r), e.set(r), o = t), a = Rv(o), c = u, p
            },
            settled: function() {
              return Mv(r.get() - t.get()) < .001
            },
            useBaseFriction: function() {
              return f(.68)
            },
            useBaseDuration: function() {
              return d(o)
            },
            useFriction: f,
            useDuration: d
          };
          return p
        }(X, Z, Y, Q, f), ee = function(e, t, n, r, o) {
          const {
            reachedAny: i,
            removeOffset: a,
            constrain: s
          } = r;

          function l(e) {
            return e.concat().sort(((e, t) => Mv(e) - Mv(t)))[0]
          }

          function u(t, r) {
            const o = [t, t + n, t - n];
            if (!e) return t;
            if (!r) return l(o);
            const i = o.filter((e => Rv(e) === r));
            return i.length ? l(i) : Iv(o) - n
          }
          const c = {
            byDistance: function(n, r) {
              const l = o.get() + n,
                {
                  index: c,
                  distance: d
                } = function(n) {
                  const r = e ? a(n) : s(n),
                    o = t.map(((e, t) => ({
                      diff: u(e - r, 0),
                      index: t
                    }))).sort(((e, t) => Mv(e.diff) - Mv(t.diff))),
                    {
                      index: i
                    } = o[0];
                  return {
                    index: i,
                    distance: r
                  }
                }(l),
                f = !e && i(l);
              return !r || f ? {
                index: c,
                distance: n
              } : {
                index: c,
                distance: n + u(t[c] - d, 0)
              }
            },
            byIndex: function(e, n) {
              return {
                index: e,
                distance: u(t[e] - o.get(), n)
              }
            },
            shortcut: u
          };
          return c
        }(d, B, V, $, Q), te = function(e, t, n, r, o, i, a) {
          function s(o) {
            const s = o.distance,
              l = o.index !== t.get();
            i.add(s), s && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), l && (n.set(t.get()), t.set(o.index), a.emit("select"))
          }
          const l = {
            distance: function(e, t) {
              s(o.byDistance(e, t))
            },
            index: function(e, n) {
              const r = t.clone().set(e);
              s(o.byIndex(r.get(), n))
            }
          };
          return l
        }(U, H, W, J, ee, Q, a), ne = function(e) {
          const {
            max: t,
            length: n
          } = e;
          return {
            get: function(e) {
              return n ? (e - t) / -n : 0
            }
          }
        }($), re = Wv(), oe = function(e, t, n, r) {
          const o = {};
          let i, a = null,
            s = null,
            l = !1;
          const u = {
            init: function() {
              i = new IntersectionObserver((e => {
                l || (e.forEach((e => {
                  const n = t.indexOf(e.target);
                  o[n] = e
                })), a = null, s = null, n.emit("slidesInView"))
              }), {
                root: e.parentElement,
                threshold: r
              }), t.forEach((e => i.observe(e)))
            },
            destroy: function() {
              i && i.disconnect(), l = !0
            },
            get: function() {
              let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
              if (e && a) return a;
              if (!e && s) return s;
              const t = function(e) {
                return Bv(o).reduce(((t, n) => {
                  const r = parseInt(n),
                    {
                      isIntersecting: i
                    } = o[r];
                  return (e && i || !e && !i) && t.push(r), t
                }), [])
              }(e);
              return e && (a = t), e || (s = t), t
            }
          };
          return u
        }(t, n, a, v), {
          slideRegistry: ie
        } = function(e, t, n, r, o, i) {
          const {
            groupSlides: a
          } = o, {
            min: s,
            max: l
          } = r;
          return {
            slideRegistry: function() {
              const r = a(i),
                o = !e || "keepSnaps" === t;
              return 1 === n.length ? [i] : o ? r : r.slice(s, l).map(((e, t, n) => {
                const r = !t,
                  o = Fv(n, t);
                return r ? qv(Iv(n[0]) + 1) : o ? qv(Vv(i) - Iv(n)[0] + 1, Iv(n)[0]) : e
              }))
            }()
          }
        }(N, y, B, q, z, G), ae = function(e, t, n, r, o, i, a, s) {
          const l = {
            passive: !0,
            capture: !0
          };
          let u = 0;

          function c(e) {
            "Tab" === e.code && (u = (new Date).getTime())
          }
          return {
            init: function(d) {
              s && (i.add(document, "keydown", c, !1), t.forEach(((t, c) => {
                i.add(t, "focus", (t => {
                  (Lv(s) || s(d, t)) && function(t) {
                    if ((new Date).getTime() - u > 10) return;
                    a.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = n.findIndex((e => e.includes(t)));
                    Nv(i) && (o.useDuration(0), r.index(i, 0), a.emit("slideFocus"))
                  }(c)
                }), l)
              })))
            }
          }
        }(e, n, ie, te, J, re, a, j), se = {
          ownerDocument: r,
          ownerWindow: o,
          eventHandler: a,
          containerRect: x,
          slideRects: S,
          animation: U,
          axis: C,
          dragHandler: Kv(C, e, r, o, Q, Xv(C, o), X, U, te, J, ee, H, a, P, p, h, m, .68, _),
          eventStore: re,
          percentOfView: P,
          index: H,
          indexPrevious: W,
          limit: $,
          location: X,
          offsetLocation: Z,
          previousLocation: Y,
          options: i,
          resizeHandler: Yv(t, a, o, n, C, b, k),
          scrollBody: J,
          scrollBounds: Zv($, Z, Q, J, P),
          scrollLooper: Qv(V, $, Z, [X, Z, Y, Q]),
          scrollProgress: ne,
          scrollSnapList: B.map(ne.get),
          scrollSnaps: B,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: tg(C, O, V, L, D, A, B, Z, n),
          slideFocus: ae,
          slidesHandler: ng(t, a, w),
          slidesInView: oe,
          slideIndexes: G,
          slideRegistry: ie,
          slidesToScroll: z,
          target: Q,
          translate: eg(C, t)
        };
        return se
      }
      const og = {
        align: "center",
        axis: "x",
        container: null,
        slides: null,
        containScroll: "trimSnaps",
        direction: "ltr",
        slidesToScroll: 1,
        inViewThreshold: 0,
        breakpoints: {},
        dragFree: !1,
        dragThreshold: 10,
        loop: !1,
        skipSnaps: !1,
        duration: 25,
        startIndex: 0,
        active: !0,
        watchDrag: !0,
        watchResize: !0,
        watchSlides: !0,
        watchFocus: !0
      };

      function ig(e) {
        function t(e, t) {
          return $v(e, t || {})
        }
        const n = {
          mergeOptions: t,
          optionsAtMedia: function(n) {
            const r = n.breakpoints || {},
              o = Bv(r).filter((t => e.matchMedia(t).matches)).map((e => r[e])).reduce(((e, n) => t(e, n)), {});
            return t(n, o)
          },
          optionsMediaQueries: function(t) {
            return t.map((e => Bv(e.breakpoints || {}))).reduce(((e, t) => e.concat(t)), []).map(e.matchMedia)
          }
        };
        return n
      }

      function ag(e, t, n) {
        const r = e.ownerDocument,
          o = r.defaultView,
          i = ig(o),
          a = function(e) {
            let t = [];
            return {
              init: function(n, r) {
                return t = r.filter((t => {
                  let {
                    options: n
                  } = t;
                  return !1 !== e.optionsAtMedia(n).active
                })), t.forEach((t => t.init(n, e))), r.reduce(((e, t) => Object.assign(e, {
                  [t.name]: t
                })), {})
              },
              destroy: function() {
                t = t.filter((e => e.destroy()))
              }
            }
          }(i),
          s = Wv(),
          l = function() {
            let e, t = {};

            function n(e) {
              return t[e] || []
            }
            const r = {
              init: function(t) {
                e = t
              },
              emit: function(t) {
                return n(t).forEach((n => n(e, t))), r
              },
              off: function(e, o) {
                return t[e] = n(e).filter((e => e !== o)), r
              },
              on: function(e, o) {
                return t[e] = n(e).concat([o]), r
              },
              clear: function() {
                t = {}
              }
            };
            return r
          }(),
          {
            mergeOptions: u,
            optionsAtMedia: c,
            optionsMediaQueries: d
          } = i,
          {
            on: f,
            off: p,
            emit: h
          } = l,
          v = C;
        let g, m, y, b, w = !1,
          _ = u(og, ag.globalOptions),
          j = u(_),
          k = [];

        function x(t) {
          const n = rg(e, y, b, r, o, t, l);
          return t.loop && !n.slideLooper.canLoop() ? x(Object.assign({}, t, {
            loop: !1
          })) : n
        }

        function S(t, n) {
          w || (_ = u(_, t), j = c(_), k = n || k, function() {
            const {
              container: t,
              slides: n
            } = j, r = Tv(t) ? e.querySelector(t) : t;
            y = r || e.children[0];
            const o = Tv(n) ? y.querySelectorAll(n) : n;
            b = [].slice.call(o || y.children)
          }(), g = x(j), d([_, ...k.map((e => {
            let {
              options: t
            } = e;
            return t
          }))]).forEach((e => s.add(e, "change", C))), j.active && (g.translate.to(g.location.get()), g.animation.init(), g.slidesInView.init(), g.slideFocus.init(N), g.eventHandler.init(N), g.resizeHandler.init(N), g.slidesHandler.init(N), g.options.loop && g.slideLooper.loop(), y.offsetParent && b.length && g.dragHandler.init(N), m = a.init(N, k)))
        }

        function C(e, t) {
          const n = E();
          O(), S(u({
            startIndex: n
          }, e), t), l.emit("reInit")
        }

        function O() {
          g.dragHandler.destroy(), g.eventStore.clear(), g.translate.clear(), g.slideLooper.clear(), g.resizeHandler.destroy(), g.slidesHandler.destroy(), g.slidesInView.destroy(), g.animation.destroy(), a.destroy(), s.clear()
        }

        function P(e, t, n) {
          j.active && !w && (g.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : j.duration), g.scrollTo.index(e, n || 0))
        }

        function E() {
          return g.index.get()
        }
        const N = {
          canScrollNext: function() {
            return g.index.add(1).get() !== E()
          },
          canScrollPrev: function() {
            return g.index.add(-1).get() !== E()
          },
          containerNode: function() {
            return y
          },
          internalEngine: function() {
            return g
          },
          destroy: function() {
            w || (w = !0, s.clear(), O(), l.emit("destroy"), l.clear())
          },
          off: p,
          on: f,
          emit: h,
          plugins: function() {
            return m
          },
          previousScrollSnap: function() {
            return g.indexPrevious.get()
          },
          reInit: v,
          rootNode: function() {
            return e
          },
          scrollNext: function(e) {
            P(g.index.add(1).get(), e, -1)
          },
          scrollPrev: function(e) {
            P(g.index.add(-1).get(), e, 1)
          },
          scrollProgress: function() {
            return g.scrollProgress.get(g.offsetLocation.get())
          },
          scrollSnapList: function() {
            return g.scrollSnapList
          },
          scrollTo: P,
          selectedScrollSnap: E,
          slideNodes: function() {
            return b
          },
          slidesInView: function() {
            return g.slidesInView.get()
          },
          slidesNotInView: function() {
            return g.slidesInView.get(!1)
          }
        };
        return S(t, n), setTimeout((() => l.emit("init")), 0), N
      }

      function sg() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const n = (0, s.useRef)(e),
          r = (0, s.useRef)(t),
          [o, i] = (0, s.useState)(),
          [a, l] = (0, s.useState)(),
          u = (0, s.useCallback)((() => {
            o && o.reInit(n.current, r.current)
          }), [o]);
        return (0, s.useEffect)((() => {
          Pv(n.current, e) || (n.current = e, u())
        }), [e, u]), (0, s.useEffect)((() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const n = Ev(e),
              r = Ev(t);
            return n.every(((e, t) => Pv(e, r[t])))
          })(r.current, t) || (r.current = t, u())
        }), [t, u]), (0, s.useEffect)((() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && a) {
            ag.globalOptions = sg.globalOptions;
            const e = ag(a, n.current, r.current);
            return i(e), () => e.destroy()
          }
          i(void 0)
        }), [a, i]), [l, o]
      }

      function lg() {
        let e, t = [];
        const n = ["select", "slideFocus"];

        function r() {
          const {
            slideRegistry: n
          } = e.internalEngine(), r = n[e.selectedScrollSnap()];
          return r ? r.map((e => t[e])).reduce(((e, t) => Math.max(e, t)), 0) : null
        }

        function o() {
          null !== r() && (e.containerNode().style.height = `${r()}px`)
        }
        return {
          name: "autoHeight",
          options: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          init: function(r) {
            e = r;
            const {
              options: {
                axis: i
              },
              slideRects: a
            } = e.internalEngine();
            "y" !== i && (t = a.map((e => e.height)), n.forEach((t => e.on(t, o))), o())
          },
          destroy: function() {
            n.forEach((t => e.off(t, o)));
            const t = e.containerNode();
            t.style.height = "", t.getAttribute("style") || t.removeAttribute("style")
          }
        }
      }
      ag.globalOptions = void 0, sg.globalOptions = void 0, lg.globalOptions = void 0;
      const ug = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function cg(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function dg(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function fg(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function pg() {
        let e, t, n, r, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = [],
          a = [];
        const s = ["select"],
          l = ["pointerDown", "pointerUp"],
          u = ["slidesInView"],
          c = {
            snapped: [],
            inView: [],
            draggable: [],
            dragging: [],
            loop: []
          };

        function d(e, t) {
          ("pointerDown" === t ? fg : dg)(n, c.dragging)
        }

        function f() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 2 ? arguments[2] : void 0;
          const n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((e => r[e])),
            o = e.map((e => r[e]));
          return n.forEach((e => dg(e, t))), o.forEach((e => fg(e, t))), e
        }

        function p() {
          const {
            slideRegistry: e
          } = t.internalEngine(), n = e[t.selectedScrollSnap()];
          i = f(n, i, c.snapped)
        }

        function h() {
          const e = t.slidesInView();
          a = f(e, a, c.inView)
        }
        const v = {
          name: "classNames",
          options: o,
          init: function(i, a) {
            t = i;
            const {
              mergeOptions: f,
              optionsAtMedia: v
            } = a, g = f(ug, pg.globalOptions), m = f(g, o);
            e = v(m), n = t.rootNode(), r = t.slideNodes();
            const {
              watchDrag: y,
              loop: b
            } = t.internalEngine().options, w = !!y;
            e.loop && b && (c.loop = cg(e.loop), fg(n, c.loop)), e.draggable && w && (c.draggable = cg(e.draggable), fg(n, c.draggable)), e.dragging && (c.dragging = cg(e.dragging), l.forEach((e => t.on(e, d)))), e.snapped && (c.snapped = cg(e.snapped), s.forEach((e => t.on(e, p))), p()), e.inView && (c.inView = cg(e.inView), u.forEach((e => t.on(e, h))), h())
          },
          destroy: function() {
            l.forEach((e => t.off(e, d))), s.forEach((e => t.off(e, p))), u.forEach((e => t.off(e, h))), dg(n, c.loop), dg(n, c.draggable), dg(n, c.dragging), f([], i, c.snapped), f([], a, c.inView), Object.keys(c).forEach((e => {
              c[e] = []
            }))
          }
        };
        return v
      }
      pg.globalOptions = void 0;
      const hg = (0, s.createContext)(null);

      function vg() {
        const e = (0, s.useContext)(hg);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }(0, s.forwardRef)((({
        asChild: e,
        children: t,
        testId: n,
        loopPagination: r,
        status: o,
        background: u,
        align: c = "left",
        ...d
      }, f) => {
        const p = (({
            loopPagination: e = !0
          }) => {
            const t = H(),
              n = q(),
              [r, o] = (0, s.useState)([]),
              i = r.length,
              [a, l] = (0, s.useState)(0),
              [u, c] = sg({
                containScroll: !1,
                loop: e,
                watchDrag: t && i > 1
              }, [lg(), pg()]),
              d = (0, s.useRef)(0),
              f = (0, s.useRef)(!1),
              p = r[a],
              h = (0, s.useCallback)((e => {
                const t = e.selectedScrollSnap();
                e.slideNodes().forEach(((e, n) => {
                  e.style.visibility = n === t ? "visible" : "hidden"
                })), l(t), f.current = !0
              }), [c]),
              v = (0, s.useCallback)((e => {
                d.current = .94 * e.scrollSnapList().length
              }), []),
              g = (0, s.useCallback)(((e, t) => {
                const n = e.internalEngine(),
                  r = e.scrollProgress(),
                  o = e.slidesInView(),
                  i = "scroll" === t;
                e.scrollSnapList().forEach(((t, a) => {
                  let s = t - r;
                  n.slideRegistry[a].forEach((a => {
                    if (i && !o.includes(a)) return;
                    n.options.loop && n.slideLooper.loopPoints.forEach((e => {
                      const n = e.target();
                      if (a === e.index && 0 !== n) {
                        const e = Math.sign(n); - 1 === e && (s = t - (1 + r)), 1 === e && (s = t + (1 - r))
                      }
                    }));
                    const l = (u = 1 - Math.abs(s * d.current), Math.min(Math.max(u, 0), 1)).toString();
                    var u;
                    e.slideNodes()[a].style.opacity = l
                  }))
                }))
              }), []);
            return (0, s.useEffect)((() => {
              c && (v(c), g(c), c.on("reInit", v).on("reInit", g).on("scroll", g).on("slideFocus", g))
            }), [c, g]), (0, s.useEffect)((() => {
              c && (h(c), c.on("select", h).on("reInit", h))
            }), [c, h]), {
              setAlerts: o,
              alerts: r,
              numAlerts: i,
              emblaRef: u,
              prevAlert: () => c?.scrollPrev(n),
              nextAlert: () => c?.scrollNext(n),
              currentAlert: p,
              currentAlertIndex: a,
              setCurrentAlertIndex: l,
              isInitialized: f.current,
              loopPagination: e,
              canScrollNext: () => c?.canScrollNext() || !1,
              canScrollPrev: () => c?.canScrollPrev() || !1
            }
          })({
            loopPagination: r
          }),
          {
            currentAlert: h,
            isInitialized: v,
            setAlerts: g,
            numAlerts: m
          } = p;
        (0, s.useEffect)((() => {
          o && u && g([{
            status: o,
            background: u,
            align: c
          }])
        }), []);
        const y = m > 1 ? {
            role: "region",
            "aria-roledescription": "carousel",
            "aria-label": "alerts"
          } : null,
          b = (0, a.v6)(d, {
            className: Cv(h)
          }, y),
          w = e ? l.Slot : "div";
        return (0, i.jsx)(hg.Provider, {
          value: p,
          children: (0, i.jsx)(w, {
            ref: f,
            "data-testid": n,
            "data-initialized": v,
            ...b,
            children: t
          })
        })
      }));
      const gg = {
        danger: "CircleX",
        information: "Info",
        success: "CircleCheck",
        warning: "TriangleAlert"
      };

      function mg(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function yg(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function bg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yg(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = mg(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yg(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function wg(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }(0, s.forwardRef)((({
        icon: e,
        ...t
      }, n) => {
        const {
          currentAlert: r
        } = vg();
        if (!e && !r || !r?.status) return null;
        const o = e || gg[r.status],
          s = z[o],
          l = (0, a.v6)(t, {
            className: "foundry_nk7jgu_qmpv6yn"
          });
        return (0, i.jsx)(s, {
          title: "",
          ref: n,
          size: "LG",
          "data-icon": !0,
          ...l
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        ...n
      }, r) => {
        const o = e ? l.Slot : "div",
          s = (0, a.v6)(n, {
            className: "foundry_nk7jgu_qmpv6yo"
          });
        return (0, i.jsx)(M, {
          size: "SM",
          asChild: !0,
          children: (0, i.jsx)(o, {
            ref: r,
            "data-testid": t,
            ...s
          })
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        align: n = "left",
        status: r,
        background: o,
        ...s
      }, u) => {
        const c = e ? l.Slot : "div",
          d = (0, a.v6)(s, {
            className: "foundry_nk7jgu_qmpv6yk"
          });
        return (0, i.jsx)(c, {
          ref: u,
          "data-testid": t,
          ...d
        })
      })), (0, s.forwardRef)((({
        testId: e,
        children: t,
        ...n
      }, r) => {
        const {
          setAlerts: o,
          emblaRef: l
        } = vg(), u = (0, a.v6)(n, {
          className: "foundry_nk7jgu_qmpv6yl"
        }), c = F(l, r), d = s.Children.map(t, (e => {
          const t = e;
          if (!t.props.background || !t.props.status) throw new Error("Only Alerts can be passed to PaginationViewport");
          return {
            status: t.props.status,
            background: t.props.background,
            align: t.props.align
          }
        }));
        return (0, s.useEffect)((() => {
          d && o(d)
        }), []), (0, i.jsx)("div", {
          ref: c,
          "data-testid": e,
          ...u,
          children: (0, i.jsx)("div", {
            className: "foundry_nk7jgu_qmpv6ym",
            children: t
          })
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        children: t,
        testId: n,
        ...r
      }, o) => {
        const u = (0, s.useRef)(null),
          c = F(u, o),
          d = e ? l.Slot : "a",
          {
            linkProps: f,
            isPressed: p
          } = sv(r, u),
          h = (0, a.v6)(r, {
            className: "foundry_nk7jgu_qmpv6yp foundry_nk7jgu_1d5mo5m0"
          });
        return (0, i.jsx)(M, {
          asChild: !0,
          size: "SM",
          appearance: "hyperlink",
          children: (0, i.jsx)(d, {
            "data-pressed": p,
            "data-testid": n,
            ref: c,
            ...f,
            ...h,
            children: t
          })
        })
      })), (0, s.forwardRef)((({
        testId: e,
        ...t
      }, n) => {
        const r = (0, a.v6)(t, {
          className: "foundry_nk7jgu_qmpv6yq"
        });
        return (0, i.jsx)(Ou, {
          ref: n,
          label: "close alert",
          "data-close-btn": !0,
          "data-testid": e,
          appearance: "ghost",
          icon: "X",
          size: "XS",
          ...r
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        children: n,
        ...r
      }, o) => {
        const s = e ? l.Slot : "div",
          u = (0, a.v6)(r, {
            className: "foundry_nk7jgu_qmpv6ys"
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": t,
          "data-pagination": !0,
          role: "group",
          "aria-label": "alert navigation",
          ...u,
          children: n
        })
      })), (0, s.forwardRef)((({
        testId: e,
        ...t
      }, n) => {
        const {
          nextAlert: r,
          canScrollNext: o
        } = vg(), s = (0, a.v6)(t, {
          className: Sv
        });
        return (0, i.jsx)(Ou, {
          ref: n,
          label: "next alert",
          size: "XS",
          icon: "ChevronRight",
          appearance: "ghost",
          "data-testid": e,
          onPress: r,
          isDisabled: !o(),
          ...s
        })
      })), (0, s.forwardRef)((({
        testId: e,
        ...t
      }, n) => {
        const {
          prevAlert: r,
          canScrollPrev: o
        } = vg(), s = (0, a.v6)(t, {
          className: Sv
        });
        return (0, i.jsx)(Ou, {
          ref: n,
          label: "previous alert",
          size: "XS",
          icon: "ChevronLeft",
          appearance: "ghost",
          "data-testid": e,
          onPress: r,
          isDisabled: !o(),
          ...s
        })
      })), (0, s.forwardRef)((({
        testId: e,
        ...t
      }, n) => {
        const {
          currentAlertIndex: r,
          numAlerts: o
        } = vg(), s = (0, a.v6)(t, {
          className: "foundry_nk7jgu_qmpv6yr"
        });
        return (0, i.jsx)(M, {
          size: "SM",
          appearance: "bold",
          asChild: !0,
          children: (0, i.jsxs)("div", {
            ref: n,
            "data-testid": e,
            "aria-hidden": !0,
            ...s,
            children: [r + 1, "/", o]
          })
        })
      }));
      var _g = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        jg = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = bg(bg({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) _g(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return wg(e.variantClassNames, (e => wg(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        kg = jg({
          defaultClassName: "foundry_nk7jgu_oahh5811",
          variantClassNames: {
            background: {
              static: "foundry_nk7jgu_oahh5812",
              "two-tone": "foundry_nk7jgu_oahh5813",
              none: "foundry_nk7jgu_oahh5814"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        xg = jg({
          defaultClassName: "foundry_nk7jgu_oahh583",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_oahh584",
              LG: "foundry_nk7jgu_oahh585"
            },
            hasBorder: {
              true: "foundry_nk7jgu_oahh586",
              false: "foundry_nk7jgu_oahh587"
            },
            background: {
              static: "foundry_nk7jgu_oahh588",
              "two-tone": "foundry_nk7jgu_oahh589",
              none: "foundry_nk7jgu_oahh58a"
            },
            color: {
              monochrome: "foundry_nk7jgu_oahh58b",
              blue: "foundry_nk7jgu_oahh58c",
              green: "foundry_nk7jgu_oahh58d",
              grey: "foundry_nk7jgu_oahh58e",
              red: "foundry_nk7jgu_oahh58f",
              seafoam: "foundry_nk7jgu_oahh58g",
              yellow: "foundry_nk7jgu_oahh58h"
            },
            isDisabled: {
              true: "foundry_nk7jgu_oahh58i",
              false: "foundry_nk7jgu_oahh58j"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              background: "static",
              color: "monochrome"
            }, "foundry_nk7jgu_oahh58k"],
            [{
              background: "static",
              color: "blue"
            }, "foundry_nk7jgu_oahh58l"],
            [{
              background: "static",
              color: "green"
            }, "foundry_nk7jgu_oahh58m"],
            [{
              background: "static",
              color: "grey"
            }, "foundry_nk7jgu_oahh58n"],
            [{
              background: "static",
              color: "red"
            }, "foundry_nk7jgu_oahh58o"],
            [{
              background: "static",
              color: "seafoam"
            }, "foundry_nk7jgu_oahh58p"],
            [{
              background: "static",
              color: "yellow"
            }, "foundry_nk7jgu_oahh58q"],
            [{
              background: "two-tone",
              color: "monochrome"
            }, "foundry_nk7jgu_oahh58r"],
            [{
              background: "two-tone",
              color: "blue"
            }, "foundry_nk7jgu_oahh58s"],
            [{
              background: "two-tone",
              color: "green"
            }, "foundry_nk7jgu_oahh58t"],
            [{
              background: "two-tone",
              color: "grey"
            }, "foundry_nk7jgu_oahh58u"],
            [{
              background: "two-tone",
              color: "red"
            }, "foundry_nk7jgu_oahh58v"],
            [{
              background: "two-tone",
              color: "seafoam"
            }, "foundry_nk7jgu_oahh58w"],
            [{
              background: "two-tone",
              color: "yellow"
            }, "foundry_nk7jgu_oahh58x"],
            [{
              hasBorder: !1,
              background: "none",
              isDisabled: !1
            }, "foundry_nk7jgu_oahh58y"]
          ]
        });
      const Sg = (0, s.createContext)(null);

      function Cg() {
        const e = (0, s.useContext)(Sg);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }

      function Og(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Pg(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), n.push.apply(n, r)
        }
        return n
      }

      function Eg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Pg(Object(n), !0).forEach((function(t) {
            var r, o, i;
            r = e, o = t, i = n[t], (o = Og(o)) in r ? Object.defineProperty(r, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : r[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pg(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          }))
        }
        return e
      }

      function Ng(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }(0, s.forwardRef)((({
        asChild: e,
        children: t,
        testId: n,
        size: r,
        background: o,
        color: s,
        hasBorder: u,
        isDisabled: c,
        ...d
      }, f) => {
        const p = {
            size: r,
            background: o,
            color: s,
            hasBorder: u,
            isDisabled: c
          },
          h = (0, a.v6)(d, {
            className: xg(p)
          }),
          v = e ? l.Slot : "div";
        return (0, i.jsx)(Sg.Provider, {
          value: p,
          children: (0, i.jsx)(v, {
            ref: f,
            "data-testid": n,
            "aria-disabled": c,
            ...h,
            children: t
          })
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        children: t,
        testId: n,
        ...r
      }, o) => {
        const {
          size: s
        } = Cg(), u = e ? l.Slot : "div", c = (0, a.v6)(r, {
          className: "foundry_nk7jgu_oahh58z"
        });
        return (0, i.jsx)(M, {
          size: "MD" === s ? "SM" : "LG",
          asChild: !0,
          children: (0, i.jsx)(u, {
            ref: o,
            "data-testid": n,
            ...c,
            children: t
          })
        })
      })), (0, s.forwardRef)((({
        icon: e,
        ...t
      }, n) => {
        const r = z[e],
          o = (0, a.v6)(t, {
            className: "foundry_nk7jgu_oahh5810"
          });
        return (0, i.jsx)(r, {
          ref: n,
          size: "MD",
          ...o
        })
      })), (0, s.forwardRef)((({
        testId: e,
        label: t = "close tag",
        ...n
      }, r) => {
        const {
          background: o,
          isDisabled: s
        } = Cg(), l = (0, a.v6)(n, {
          className: kg({
            background: o
          })
        });
        return (0, i.jsx)(Ou, {
          ref: r,
          label: t,
          "data-testid": e,
          "data-close-btn": !0,
          appearance: "ghost",
          icon: "X",
          size: "XS",
          isDisabled: s,
          ...l
        })
      }));
      var Tg = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        Lg = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = Eg(Eg({}, e.defaultVariants), t);
            for (var o in r) {
              var i, a = null !== (i = r[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (n += " " + l)
              }
            }
            for (var [u, c] of e.compoundVariants) Tg(u, r, e.defaultVariants) && (n += " " + c);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Ng(e.variantClassNames, (e => Ng(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Dg = Lg({
          defaultClassName: "foundry_nk7jgu_m1icrx6 foundry_nk7jgu_1d5mo5m0",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_m1icrx7 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd11",
              LG: "foundry_nk7jgu_m1icrx8 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdw foundry_nk7jgu_tdsdcd11"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Mg = Lg({
          defaultClassName: "foundry_nk7jgu_m1icrx3",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdx foundry_nk7jgu_tdsdcd11",
              LG: "foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcdw foundry_nk7jgu_tdsdcd11"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Rg = Lg({
          defaultClassName: "foundry_nk7jgu_m1icrx0",
          variantClassNames: {
            size: {
              MD: "foundry_nk7jgu_m1icrx1",
              LG: "foundry_nk7jgu_m1icrx2"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });

      function zg() {
        const e = (0, s.useContext)(Ag);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const Ag = (0, s.createContext)(null);
      (0, s.forwardRef)((({
        children: e,
        testId: t,
        asChild: n,
        size: r = "MD",
        ...o
      }, s) => {
        const u = (0, a.v6)({
            className: Rg({
              size: r
            })
          }, o),
          c = n ? l.Slot : "ol";
        return (0, i.jsx)(Ag.Provider, {
          value: {
            size: r
          },
          children: (0, i.jsx)(c, {
            ref: s,
            "data-testid": t,
            ...u,
            children: e
          })
        })
      })), (0, s.forwardRef)((({
        isCurrent: e,
        children: t,
        asChild: n,
        testId: r,
        ...o
      }, u) => {
        const c = (0, s.useRef)(null),
          {
            size: d
          } = zg(),
          {
            itemProps: f
          } = function(e, t) {
            let {
              isCurrent: n,
              isDisabled: r,
              "aria-current": o,
              elementType: i = "a",
              ...a
            } = e, {
              linkProps: s
            } = sv({
              isDisabled: r || n,
              elementType: i,
              ...a
            }, t), l = {};
            return /^h[1-6]$/.test(i) || (l = s), n && (l["aria-current"] = o || "page", l.tabIndex = e.autoFocus ? -1 : void 0), {
              itemProps: {
                "aria-disabled": r,
                ...l
              }
            }
          }({
            isCurrent: e,
            children: t
          }, c),
          p = n ? l.Slot : "a",
          h = (0, a.v6)({
            className: (0, O.$)(Dg({
              size: d
            }), e && "foundry_nk7jgu_m1icrx9"),
            "data-testid": r
          }, f, o);
        return (0, i.jsx)("li", {
          className: Mg({
            size: d
          }),
          ref: u,
          children: (0, i.jsx)(p, {
            ref: c,
            ...h,
            children: t
          })
        })
      })), (0, s.forwardRef)((({
        icon: e,
        ...t
      }, n) => {
        const r = z[e];
        return (0, i.jsx)(r, {
          ref: n,
          size: "LG",
          ...t
        })
      })), (0, s.forwardRef)((({
        children: e,
        testId: t,
        defaultOpen: n = !1,
        label: r = "Show hidden breadcrumbs",
        ...o
      }, l) => {
        const [u, c] = (0, s.useState)(n), {
          size: d
        } = zg(), f = (0, a.v6)({
          className: Mg({
            size: d
          }),
          "data-testid": t
        }, o);
        return (0, i.jsx)("li", {
          ref: l,
          ...f,
          children: (0, i.jsxs)(Cd, {
            open: u,
            onOpenChange: () => c(!u),
            children: [(0, i.jsx)(Od, {
              className: "foundry_nk7jgu_m1icrxa foundry_nk7jgu_1d5mo5m0 foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd11",
              "aria-label": r,
              children: "..."
            }), (0, i.jsx)(Nd, {
              children: (0, i.jsx)(Td, {
                position: "popper",
                sideOffset: 8,
                align: "start",
                className: "foundry_nk7jgu_m1icrxb",
                children: (0, i.jsx)(Ld, {
                  className: "foundry_nk7jgu_m1icrxc",
                  children: e
                })
              })
            })]
          })
        })
      })), (0, s.forwardRef)((({
        children: e,
        asChild: t,
        testId: n,
        ...r
      }, o) => {
        const s = t ? l.Slot : Dd,
          u = (0, a.v6)({
            className: "foundry_nk7jgu_m1icrxd foundry_nk7jgu_tdsdcdu foundry_nk7jgu_tdsdcd0 foundry_nk7jgu_tdsdcd10",
            "data-testid": n
          }, r);
        return (0, i.jsx)(s, {
          ref: o,
          ...u,
          children: e
        })
      }))
    },
    52522: (e, t) => {
      "use strict";
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        l = n ? Symbol.for("react.provider") : 60109,
        u = n ? Symbol.for("react.context") : 60110,
        c = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        f = n ? Symbol.for("react.forward_ref") : 60112,
        p = n ? Symbol.for("react.suspense") : 60113,
        h = n ? Symbol.for("react.suspense_list") : 60120,
        v = n ? Symbol.for("react.memo") : 60115,
        g = n ? Symbol.for("react.lazy") : 60116,
        m = n ? Symbol.for("react.block") : 60121,
        y = n ? Symbol.for("react.fundamental") : 60117,
        b = n ? Symbol.for("react.responder") : 60118,
        w = n ? Symbol.for("react.scope") : 60119;

      function _(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch (e = e.type) {
                case c:
                case d:
                case i:
                case s:
                case a:
                case p:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case u:
                    case f:
                    case g:
                    case v:
                    case l:
                      return e;
                    default:
                      return t
                  }
              }
            case o:
              return t
          }
        }
      }

      function j(e) {
        return _(e) === d
      }
      t.AsyncMode = c, t.ConcurrentMode = d, t.ContextConsumer = u, t.ContextProvider = l, t.Element = r, t.ForwardRef = f, t.Fragment = i, t.Lazy = g, t.Memo = v, t.Portal = o, t.Profiler = s, t.StrictMode = a, t.Suspense = p, t.isAsyncMode = function(e) {
        return j(e) || _(e) === c
      }, t.isConcurrentMode = j, t.isContextConsumer = function(e) {
        return _(e) === u
      }, t.isContextProvider = function(e) {
        return _(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }, t.isForwardRef = function(e) {
        return _(e) === f
      }, t.isFragment = function(e) {
        return _(e) === i
      }, t.isLazy = function(e) {
        return _(e) === g
      }, t.isMemo = function(e) {
        return _(e) === v
      }, t.isPortal = function(e) {
        return _(e) === o
      }, t.isProfiler = function(e) {
        return _(e) === s
      }, t.isStrictMode = function(e) {
        return _(e) === a
      }, t.isSuspense = function(e) {
        return _(e) === p
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === i || e === d || e === s || e === a || e === p || e === h || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === v || e.$$typeof === l || e.$$typeof === u || e.$$typeof === f || e.$$typeof === y || e.$$typeof === b || e.$$typeof === w || e.$$typeof === m)
      }, t.typeOf = _
    },
    67332: (e, t, n) => {
      "use strict";
      var r = n(9862),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        s = {};

      function l(e) {
        return r.isMemo(e) ? a : s[e.$$typeof] || o
      }
      s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, s[r.Memo] = a;
      var u = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        h = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (h) {
            var o = p(n);
            o && o !== h && e(t, o, r)
          }
          var a = c(n);
          d && (a = a.concat(d(n)));
          for (var s = l(t), v = l(n), g = 0; g < a.length; ++g) {
            var m = a[g];
            if (!(i[m] || r && r[m] || v && v[m] || s && s[m])) {
              var y = f(n, m);
              try {
                u(t, m, y)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    67915: (e, t, n) => {
      "use strict";
      n.d(t, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    71020: (e, t, n) => {
      "use strict";
      n.d(t, {
        Z: () => o
      });
      var r = n(71127);

      function o(e) {
        const t = r.useRef({
          value: e,
          previous: e
        });
        return r.useMemo((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
      }
    },
    79895: e => {
      "use strict";
      var t = {}.hasOwnProperty,
        n = /[ -,\.\/:-@\[-\^`\{-~]/,
        r = /[ -,\.\/:-@\[\]\^`\{-~]/,
        o = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        i = function e(i, a) {
          "single" != (a = function(e, n) {
            if (!e) return n;
            var r = {};
            for (var o in n) r[o] = t.call(e, o) ? e[o] : n[o];
            return r
          }(a, e.options)).quotes && "double" != a.quotes && (a.quotes = "single");
          for (var s = "double" == a.quotes ? '"' : "'", l = a.isIdentifier, u = i.charAt(0), c = "", d = 0, f = i.length; d < f;) {
            var p = i.charAt(d++),
              h = p.charCodeAt(),
              v = void 0;
            if (h < 32 || h > 126) {
              if (h >= 55296 && h <= 56319 && d < f) {
                var g = i.charCodeAt(d++);
                56320 == (64512 & g) ? h = ((1023 & h) << 10) + (1023 & g) + 65536 : d--
              }
              v = "\\" + h.toString(16).toUpperCase() + " "
            } else v = a.escapeEverything ? n.test(p) ? "\\" + p : "\\" + h.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(p) ? "\\" + h.toString(16).toUpperCase() + " " : "\\" == p || !l && ('"' == p && s == p || "'" == p && s == p) || l && r.test(p) ? "\\" + p : p;
            c += v
          }
          return l && (/^-[-\d]/.test(c) ? c = "\\-" + c.slice(1) : /\d/.test(u) && (c = "\\3" + u + " " + c.slice(1))), c = c.replace(o, (function(e, t, n) {
            return t && t.length % 2 ? e : (t || "") + n
          })), !l && a.wrap ? s + c + s : c
        };
      i.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: "single",
        wrap: !1
      }, i.version = "3.0.0", e.exports = i
    },
    80355: (e, t, n) => {
      "use strict";
      n.d(t, {
        N: () => l
      });
      var r = n(71127),
        o = n(29818),
        i = n(86410),
        a = n(21222),
        s = n(25854);

      function l(e) {
        const t = e + "CollectionProvider",
          [n, l] = (0, o.A)(t),
          [u, c] = n(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          d = e => {
            const {
              scope: t,
              children: n
            } = e, o = r.useRef(null), i = r.useRef(new Map).current;
            return (0, s.jsx)(u, {
              scope: t,
              itemMap: i,
              collectionRef: o,
              children: n
            })
          };
        d.displayName = t;
        const f = e + "CollectionSlot",
          p = (0, a.createSlot)(f),
          h = r.forwardRef(((e, t) => {
            const {
              scope: n,
              children: r
            } = e, o = c(f, n), a = (0, i.s)(t, o.collectionRef);
            return (0, s.jsx)(p, {
              ref: a,
              children: r
            })
          }));
        h.displayName = f;
        const v = e + "CollectionItemSlot",
          g = "data-radix-collection-item",
          m = (0, a.createSlot)(v),
          y = r.forwardRef(((e, t) => {
            const {
              scope: n,
              children: o,
              ...a
            } = e, l = r.useRef(null), u = (0, i.s)(t, l), d = c(v, n);
            return r.useEffect((() => (d.itemMap.set(l, {
              ref: l,
              ...a
            }), () => {
              d.itemMap.delete(l)
            }))), (0, s.jsx)(m, {
              [g]: "",
              ref: u,
              children: o
            })
          }));
        return y.displayName = v, [{
          Provider: d,
          Slot: h,
          ItemSlot: y
        }, function(t) {
          const n = c(e + "CollectionConsumer", t);
          return r.useCallback((() => {
            const e = n.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${g}]`));
            return Array.from(n.itemMap.values()).sort(((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)))
          }), [n.collectionRef, n.itemMap])
        }, l]
      }
      Map
    },
    87144: e => {
      var t, n, r = e.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined")
      }

      function i() {
        throw new Error("clearTimeout has not been defined")
      }

      function a(e) {
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
      var s, l = [],
        u = !1,
        c = -1;

      function d() {
        u && s && (u = !1, s.length ? l = s.concat(l) : c = -1, l.length && f())
      }

      function f() {
        if (!u) {
          var e = a(d);
          u = !0;
          for (var t = l.length; t;) {
            for (s = l, l = []; ++c < t;) s && s[c].run();
            c = -1, t = l.length
          }
          s = null, u = !1,
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

      function p(e, t) {
        this.fun = e, this.array = t
      }

      function h() {}
      r.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        l.push(new p(e, t)), 1 !== l.length || u || a(f)
      }, p.prototype.run = function() {
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
    }
  }
]);