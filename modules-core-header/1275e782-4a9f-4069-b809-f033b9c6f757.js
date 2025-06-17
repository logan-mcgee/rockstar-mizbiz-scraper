! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1275e782-4a9f-4069-b809-f033b9c6f757", e._sentryDebugIdIdentifier = "sentry-dbid-1275e782-4a9f-4069-b809-f033b9c6f757")
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
  [4768], {
    9862: (e, t, r) => {
      "use strict";
      e.exports = r(52522)
    },
    19264: (e, t, r) => {
      "use strict";
      r.d(t, {
        jH: () => i
      });
      var n = r(71127),
        o = (r(25854), n.createContext(void 0));

      function i(e) {
        const t = n.useContext(o);
        return e || t || "ltr"
      }
    },
    38763: (e, t, r) => {
      "use strict";
      r.d(t, {
        X3: () => n.X,
        AK: () => b,
        bZ: () => d,
        v6: () => l
      });
      var n = r(67915),
        o = r(68879);
      const i = new Map;

      function a(e, t) {
        if (e === t) return e;
        const r = i.get(e);
        if (r) return r.forEach((e => e(t))), t;
        const n = i.get(t);
        return n ? (n.forEach((t => t(e))), e) : t
      }

      function s(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }

      function l(...e) {
        const t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          const n = e[r];
          for (const e in n) {
            const r = t[e],
              i = n[e];
            "function" == typeof r && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = s(r, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof i ? "id" === e && r && i ? t.id = a(r, i) : t[e] = void 0 !== i ? i : r : t[e] = (0, o.A)(r, i)
          }
        }
        return t
      }
      const c = /^(on.*)$/,
        u = /^(onPress.*)$/;

      function d(e, {
        onPress: t
      } = {
        onPress: !0
      }) {
        const r = {},
          n = {};
        for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (u.test(o) ? t ? r[o] = e[o] : n[o] = e[o] : c.test(o) ? r[o] = e[o] : n[o] = e[o]);
        return {
          events: r,
          others: n
        }
      }
      var f;

      function h(e) {
        return e
      }
      r(40323), r(5117), r(74534), r(66573), r(11666), r(96810), r(1571),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(f || (f = {})), Symbol.toStringTag;
      const {
        cbrt: p,
        sqrt: v,
        PI: g
      } = Math, m = (e, t, r, n, o) => {
        const i = t + r * e,
          a = i ** 2 + n;
        if (a > 0) {
          const e = v(a);
          return p(i + e) + p(i - e) - o
        }
        const s = p(v(i * i - a)),
          l = i ? Math.atan(v(-a) / i) : -g / 2;
        let c;
        return c = r < 0 ? (i > 0 ? 2 * g : g) - l : o < 0 ? (i > 0 ? 2 * g : -3 * g) + l : (i > 0 ? 0 : g) + l, 2 * s * Math.cos(c / 3) - o
      }, y = (e, t, r, n) => ((t * e + 3 * r) * e + n) * e;

      function b(e, t, r, n) {
        if (!(0 <= e && e <= 1 && 0 <= r && r <= 1)) throw new Error("Bezier x values must be in [0, 1] range");
        if (e === t && r === n) return h;
        const o = 6 * (3 * e - 3 * r + 1),
          i = 6 * (r - 2 * e),
          a = 3 * e,
          s = o * o,
          l = i * i,
          c = i / o,
          u = 3 * i * a / s - l * i / (s * o),
          d = 2 * a / o - l / s,
          f = d * d * d,
          p = 3 / o,
          v = 3 * t - 3 * n + 1,
          g = n - 2 * t,
          b = 3 * t,
          w = o ? m : h;
        return e => 0 === e || 1 === e ? e : y(w(e, u, p, f, c), v, g, b)
      }
    },
    52522: (e, t) => {
      "use strict";
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        i = r ? Symbol.for("react.fragment") : 60107,
        a = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        l = r ? Symbol.for("react.provider") : 60109,
        c = r ? Symbol.for("react.context") : 60110,
        u = r ? Symbol.for("react.async_mode") : 60111,
        d = r ? Symbol.for("react.concurrent_mode") : 60111,
        f = r ? Symbol.for("react.forward_ref") : 60112,
        h = r ? Symbol.for("react.suspense") : 60113,
        p = r ? Symbol.for("react.suspense_list") : 60120,
        v = r ? Symbol.for("react.memo") : 60115,
        g = r ? Symbol.for("react.lazy") : 60116,
        m = r ? Symbol.for("react.block") : 60121,
        y = r ? Symbol.for("react.fundamental") : 60117,
        b = r ? Symbol.for("react.responder") : 60118,
        w = r ? Symbol.for("react.scope") : 60119;

      function _(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch (e = e.type) {
                case u:
                case d:
                case i:
                case s:
                case a:
                case h:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case c:
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

      function x(e) {
        return _(e) === d
      }
      t.AsyncMode = u, t.ConcurrentMode = d, t.ContextConsumer = c, t.ContextProvider = l, t.Element = n, t.ForwardRef = f, t.Fragment = i, t.Lazy = g, t.Memo = v, t.Portal = o, t.Profiler = s, t.StrictMode = a, t.Suspense = h, t.isAsyncMode = function(e) {
        return x(e) || _(e) === u
      }, t.isConcurrentMode = x, t.isContextConsumer = function(e) {
        return _(e) === c
      }, t.isContextProvider = function(e) {
        return _(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n
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
        return _(e) === h
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === i || e === d || e === s || e === a || e === h || e === p || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === v || e.$$typeof === l || e.$$typeof === c || e.$$typeof === f || e.$$typeof === y || e.$$typeof === b || e.$$typeof === w || e.$$typeof === m)
      }, t.typeOf = _
    },
    67332: (e, t, r) => {
      "use strict";
      var n = r(9862),
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
        return n.isMemo(e) ? a : s[e.$$typeof] || o
      }
      s[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, s[n.Memo] = a;
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" != typeof r) {
          if (p) {
            var o = h(r);
            o && o !== p && e(t, o, n)
          }
          var a = u(r);
          d && (a = a.concat(d(r)));
          for (var s = l(t), v = l(r), g = 0; g < a.length; ++g) {
            var m = a[g];
            if (!(i[m] || n && n[m] || v && v[m] || s && s[m])) {
              var y = f(r, m);
              try {
                c(t, m, y)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    67915: (e, t, r) => {
      "use strict";
      r.d(t, {
        X: () => n
      });
      const n = "undefined" == typeof window
    },
    71020: (e, t, r) => {
      "use strict";
      r.d(t, {
        Z: () => o
      });
      var n = r(71127);

      function o(e) {
        const t = n.useRef({
          value: e,
          previous: e
        });
        return n.useMemo((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
      }
    },
    79895: e => {
      "use strict";
      var t = {}.hasOwnProperty,
        r = /[ -,\.\/:-@\[-\^`\{-~]/,
        n = /[ -,\.\/:-@\[\]\^`\{-~]/,
        o = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g,
        i = function e(i, a) {
          "single" != (a = function(e, r) {
            if (!e) return r;
            var n = {};
            for (var o in r) n[o] = t.call(e, o) ? e[o] : r[o];
            return n
          }(a, e.options)).quotes && "double" != a.quotes && (a.quotes = "single");
          for (var s = "double" == a.quotes ? '"' : "'", l = a.isIdentifier, c = i.charAt(0), u = "", d = 0, f = i.length; d < f;) {
            var h = i.charAt(d++),
              p = h.charCodeAt(),
              v = void 0;
            if (p < 32 || p > 126) {
              if (p >= 55296 && p <= 56319 && d < f) {
                var g = i.charCodeAt(d++);
                56320 == (64512 & g) ? p = ((1023 & p) << 10) + (1023 & g) + 65536 : d--
              }
              v = "\\" + p.toString(16).toUpperCase() + " "
            } else v = a.escapeEverything ? r.test(h) ? "\\" + h : "\\" + p.toString(16).toUpperCase() + " " : /[\t\n\f\r\x0B]/.test(h) ? "\\" + p.toString(16).toUpperCase() + " " : "\\" == h || !l && ('"' == h && s == h || "'" == h && s == h) || l && n.test(h) ? "\\" + h : h;
            u += v
          }
          return l && (/^-[-\d]/.test(u) ? u = "\\-" + u.slice(1) : /\d/.test(c) && (u = "\\3" + c + " " + u.slice(1))), u = u.replace(o, (function(e, t, r) {
            return t && t.length % 2 ? e : (t || "") + r
          })), !l && a.wrap ? s + u + s : u
        };
      i.options = {
        escapeEverything: !1,
        isIdentifier: !1,
        quotes: "single",
        wrap: !1
      }, i.version = "3.0.0", e.exports = i
    },
    80355: (e, t, r) => {
      "use strict";
      r.d(t, {
        N: () => l
      });
      var n = r(71127),
        o = r(29818),
        i = r(86410),
        a = r(21222),
        s = r(25854);

      function l(e) {
        const t = e + "CollectionProvider",
          [r, l] = (0, o.A)(t),
          [c, u] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          d = e => {
            const {
              scope: t,
              children: r
            } = e, o = n.useRef(null), i = n.useRef(new Map).current;
            return (0, s.jsx)(c, {
              scope: t,
              itemMap: i,
              collectionRef: o,
              children: r
            })
          };
        d.displayName = t;
        const f = e + "CollectionSlot",
          h = (0, a.createSlot)(f),
          p = n.forwardRef(((e, t) => {
            const {
              scope: r,
              children: n
            } = e, o = u(f, r), a = (0, i.s)(t, o.collectionRef);
            return (0, s.jsx)(h, {
              ref: a,
              children: n
            })
          }));
        p.displayName = f;
        const v = e + "CollectionItemSlot",
          g = "data-radix-collection-item",
          m = (0, a.createSlot)(v),
          y = n.forwardRef(((e, t) => {
            const {
              scope: r,
              children: o,
              ...a
            } = e, l = n.useRef(null), c = (0, i.s)(t, l), d = u(v, r);
            return n.useEffect((() => (d.itemMap.set(l, {
              ref: l,
              ...a
            }), () => {
              d.itemMap.delete(l)
            }))), (0, s.jsx)(m, {
              [g]: "",
              ref: c,
              children: o
            })
          }));
        return y.displayName = v, [{
          Provider: d,
          Slot: p,
          ItemSlot: y
        }, function(t) {
          const r = u(e + "CollectionConsumer", t);
          return n.useCallback((() => {
            const e = r.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${g}]`));
            return Array.from(r.itemMap.values()).sort(((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current)))
          }), [r.collectionRef, r.itemMap])
        }, l]
      }
      Map
    },
    86713: (e, t, r) => {
      "use strict";
      r.d(t, {
        ms: () => Tf,
        c$: () => Lf
      });
      var n = {};
      r.r(n), r.d(n, {
        CheckLG: () => Rf,
        CheckMD: () => Mf,
        CheckXL: () => zf,
        DashLG: () => If,
        DashMD: () => Af,
        DashXL: () => Vf
      });
      var o = {};
      r.r(o), r.d(o, {
        DotLG: () => kh,
        DotMD: () => jh,
        DotXL: () => Oh
      });
      var i = r(25854),
        a = r(38763),
        s = r(71127),
        l = r(21222),
        c = r(75199);
      const u = ({
        enabled: e = !0,
        ...t
      }) => {
        const r = e ? c.VisuallyHidden : s.Fragment;
        return (0, i.jsx)(r, {
          ...t
        })
      };

      function d(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? f(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = d(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function p(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var v, g, m = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        y = (v = {
          defaultClassName: "foundry_hcgxh_vsn8np0",
          variantClassNames: {
            level: {
              1: "foundry_hcgxh_tdsdcd2 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd4",
              2: "foundry_hcgxh_tdsdcd2 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd5",
              3: "foundry_hcgxh_tdsdcd2 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd6",
              4: "foundry_hcgxh_tdsdcd2 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd7",
              5: "foundry_hcgxh_tdsdcd2 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd8",
              6: "foundry_hcgxh_tdsdcd2 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd9"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }, (g = e => {
          var t = v.defaultClassName,
            r = h(h({}, v.defaultVariants), e);
          for (var n in r) {
            var o, i = null !== (o = r[n]) && void 0 !== o ? o : v.defaultVariants[n];
            if (null != i) {
              var a = i;
              "boolean" == typeof a && (a = !0 === a ? "true" : "false");
              var s = v.variantClassNames[n][a];
              s && (t += " " + s)
            }
          }
          for (var [l, c] of v.compoundVariants) m(l, r, v.defaultVariants) && (t += " " + c);
          return t
        }).variants = () => Object.keys(v.variantClassNames), g.classNames = {
          get base() {
            return v.defaultClassName.split(" ")[0]
          },
          get variants() {
            return p(v.variantClassNames, (e => p(e, (e => e.split(" ")[0]))))
          }
        }, g);
      const b = (0, s.forwardRef)((({
        asChild: e,
        level: t,
        testId: r,
        ...n
      }, o) => {
        const s = e ? l.Slot : `h${t}`,
          c = (0, a.v6)(n, {
            className: y({
              level: t
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": r,
          ...c
        })
      }));

      function w(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function _(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function x(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = w(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function S(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var C = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        j = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = x(x({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) C(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return S(e.variantClassNames, (e => S(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_hcgxh_12nwidl0",
          variantClassNames: {
            semantic: {
              abbr: "foundry_hcgxh_12nwidl1",
              cite: "foundry_hcgxh_12nwidl2",
              emphasis: "foundry_hcgxh_12nwidl3",
              idiomatic: "foundry_hcgxh_12nwidl4",
              mark: "foundry_hcgxh_12nwidl5",
              "strike-through": "foundry_hcgxh_12nwidl6",
              strong: "foundry_hcgxh_12nwidl7",
              sub: "foundry_hcgxh_12nwidl8",
              sup: "foundry_hcgxh_12nwidl9",
              underline: "foundry_hcgxh_12nwidla",
              default: "foundry_hcgxh_12nwidlb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const k = {
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
        semantic: r = "default",
        ...n
      }, o) => {
        const s = e ? l.Slot : k[r] || "span",
          c = (0, a.v6)(n, {
            className: j({
              semantic: r
            })
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...c
        })
      }));
      var O = r(68879);

      function P(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function E(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? E(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = P(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function T(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var L = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        D = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = N(N({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) L(c, n, e.defaultVariants) && (r += " " + u);
            return r
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
          defaultClassName: "foundry_hcgxh_cw8njk0",
          variantClassNames: {
            size: {
              LG: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdw",
              MD: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx",
              SM: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdy",
              XS: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz"
            },
            appearance: {
              default: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd10",
              bold: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd11",
              hyperlink: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const M = (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const c = e ? l.Slot : "p",
          u = (0, a.v6)({
            className: D({
              size: n,
              appearance: r
            })
          }, o);
        return (0, i.jsx)(c, {
          ref: s,
          "data-testid": t,
          ...u
        })
      }));
      var R = r(78618),
        z = r.t(R, 2),
        A = r(67915);

      function I(e, {
        defaultValue: t = !1,
        initializeWithValue: r = !0
      } = {}) {
        const n = e => A.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [o, i] = (0, s.useState)((() => r ? n(e) : t));

        function a() {
          i(n(e))
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
          r = t.current.value;
        return e !== r && (t.current = {
          value: e,
          prev: r
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
        onChange: r = () => {}
      }) {
        const [n, o] = function({
          defaultProp: e,
          onChange: t
        }) {
          const r = (0, s.useState)(e),
            [n] = r,
            o = (0, s.useRef)(n),
            i = B(t);
          return (0, s.useEffect)((() => {
            o.current !== n && (i(n), o.current = n)
          }), [n, o, i]), r
        }({
          defaultProp: t,
          onChange: r
        }), i = void 0 !== e, a = i ? e : n, l = B(r), c = (0, s.useCallback)((t => {
          if (i) {
            const r = "function" == typeof t ? t(e) : t;
            r !== e && l(r)
          } else o(t)
        }), [i, e, o, l]);
        return [a, c]
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
          labelable: r,
          isLink: n,
          propNames: o
        } = t, i = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (W.has(t) || r && G.has(t) || n && U.has(t) || (null == o ? void 0 : o.has(t)) || K.test(t)) && (i[t] = e[t]);
        return i
      }
      const Y = "undefined" != typeof document ? s.useLayoutEffect : () => {};

      function Z(e) {
        const t = (0, s.useRef)(null);
        return Y((() => {
          t.current = e
        }), [e]), (0, s.useCallback)(((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }), [])
      }

      function Q(e, t, r) {
        let n = (0, s.useRef)(t),
          o = Z((() => {
            r && r(n.current)
          }));
        (0, s.useEffect)((() => {
          var t;
          let r = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == r || r.addEventListener("reset", o), () => {
            null == r || r.removeEventListener("reset", o)
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
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      const re = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        ne = s.createContext(re),
        oe = s.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let ie = new WeakMap;
      const ae = "function" == typeof s.useId ? function(e) {
        let t = s.useId(),
          [r] = (0, s.useState)(ue());
        return e || `${r?"react-aria":`react-aria${re.prefix}`}-${t}`
      } : function(e) {
        let t = (0, s.useContext)(ne),
          r = function(e = !1) {
            let t = (0, s.useContext)(ne),
              r = (0, s.useRef)(null);
            if (null === r.current && !e) {
              var n, o;
              let e = null === (o = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (n = o.ReactCurrentOwner) || void 0 === n ? void 0 : n.current;
              if (e) {
                let r = ie.get(e);
                null == r ? ie.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== r.state && (t.current = r.id, ie.delete(e))
              }
              r.current = ++t.current
            }
            return r.current
          }(!!e),
          n = `react-aria${t.prefix}`;
        return e || `${n}-${r}`
      };

      function se() {
        return !1
      }

      function le() {
        return !0
      }

      function ce(e) {
        return () => {}
      }

      function ue() {
        return "function" == typeof s.useSyncExternalStore ? s.useSyncExternalStore(ce, se, le) : (0, s.useContext)(oe)
      }
      let de, fe = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        he = new Map;

      function pe(e) {
        let [t, r] = (0, s.useState)(e), n = (0, s.useRef)(null), o = ae(t), i = (0, s.useRef)(null);
        if (de && de.register(i, o), fe) {
          const e = he.get(o);
          e && !e.includes(n) ? e.push(n) : he.set(o, [n])
        }
        return Y((() => {
          let e = o;
          return () => {
            de && de.unregister(i), he.delete(e)
          }
        }), [o]), (0, s.useEffect)((() => {
          let e = n.current;
          return e && r(e), () => {
            e && (n.current = null)
          }
        })), o
      }

      function ve(e, t) {
        if (e === t) return e;
        let r = he.get(e);
        if (r) return r.forEach((e => e.current = t)), t;
        let n = he.get(t);
        return n ? (n.forEach((t => t.current = e)), e) : t
      }

      function ge(e = []) {
        let t = pe(),
          [r, n] = function(e) {
            let [t, r] = (0, s.useState)(e), n = (0, s.useRef)(null), o = Z((() => {
              if (!n.current) return;
              let e = n.current.next();
              e.done ? n.current = null : t === e.value ? o() : r(e.value)
            }));
            Y((() => {
              n.current && o()
            }));
            let i = Z((e => {
              n.current = e(t), o()
            }));
            return [t, i]
          }(t),
          o = (0, s.useCallback)((() => {
            n((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, n]);
        return Y(o, [t, o, ...e]), r
      }

      function me(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let n = e[r];
          for (let e in n) {
            let r = t[e],
              o = n[e];
            "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = te(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = ve(r, o) : t[e] = void 0 !== o ? o : r : t[e] = (0, O.A)(r, o)
          }
        }
        return t
      }

      function ye(e, t, r) {
        let [n, o] = (0, s.useState)(e || t), i = (0, s.useRef)(void 0 !== e), a = void 0 !== e;
        (0, s.useEffect)((() => {
          i.current, i.current = a
        }), [a]);
        let l = a ? e : n,
          c = (0, s.useCallback)(((e, ...t) => {
            let n = (e, ...t) => {
              r && (Object.is(l, e) || r(e, ...t)), a || (l = e)
            };
            "function" == typeof e ? o(((r, ...o) => {
              let i = e(a ? l : r, ...o);
              return n(i, ...t), a ? r : i
            })) : (a || o(e), n(e, ...t))
          }), [a, l, r]);
        return [l, c]
      }

      function be(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        } = e;
        if (r = pe(r), o && n) {
          let e = new Set([r, ...o.trim().split(/\s+/)]);
          o = [...e].join(" ")
        } else o && (o = o.trim().split(/\s+/).join(" "));
        return n || o || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": o
        }
      }

      function we(e) {
        let {
          description: t,
          errorMessage: r,
          isInvalid: n,
          validationState: o
        } = e, {
          labelProps: i,
          fieldProps: a
        } = function(e) {
          let {
            id: t,
            label: r,
            "aria-labelledby": n,
            "aria-label": o,
            labelElementType: i = "label"
          } = e;
          t = pe(t);
          let a = pe(),
            s = {};
          return r && (n = n ? `${a} ${n}` : a, s = {
            id: a,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: s,
            fieldProps: be({
              id: t,
              "aria-label": o,
              "aria-labelledby": n
            })
          }
        }(e), s = ge([Boolean(t), Boolean(r), n, o]), l = ge([Boolean(t), Boolean(r), n, o]);
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
        he.delete(e)
      })));
      const _e = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        xe = _e.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      _e.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const Se = _e.join(':not([hidden]):not([tabindex="-1"]),');

      function Ce(e) {
        return e.matches(xe)
      }

      function je(e) {
        return e.matches(Se)
      }

      function ke(e) {
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
              r = [],
              n = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== n;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && r.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return n instanceof HTMLElement && r.push({
              element: n,
              scrollTop: n.scrollTop,
              scrollLeft: n.scrollLeft
            }), r
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: r,
                  scrollLeft: n
                }
                of e) t.scrollTop = r, t.scrollLeft = n
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
        let r = Z((t => {
          null == e || e(t)
        }));
        return (0, s.useCallback)((e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let n = e.target,
              o = e => {
                if (t.current.isFocused = !1, n.disabled) {
                  let t = Pe(e);
                  r(t)
                }
                t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
              };
            n.addEventListener("focusout", o, {
              once: !0
            }), t.current.observer = new MutationObserver((() => {
              if (t.current.isFocused && n.disabled) {
                var e;
                null === (e = t.current.observer) || void 0 === e || e.disconnect();
                let r = n === document.activeElement ? null : document.activeElement;
                n.dispatchEvent(new FocusEvent("blur", {
                  relatedTarget: r
                })), n.dispatchEvent(new FocusEvent("focusout", {
                  bubbles: !0,
                  relatedTarget: r
                }))
              }
            })), t.current.observer.observe(n, {
              attributes: !0,
              attributeFilter: ["disabled"]
            })
          }
        }), [r])
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
        for (let r of We) r(e, t)
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
          r = J(e);
        let n = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          Ue = !0, n.apply(this, arguments)
        }, r.addEventListener("keydown", Ye, !0), r.addEventListener("keyup", Ye, !0), r.addEventListener("click", Qe, !0), t.addEventListener("focus", Je, !0), t.addEventListener("blur", et, !1), "undefined" != typeof PointerEvent && (r.addEventListener("pointerdown", Ze, !0), r.addEventListener("pointermove", Ze, !0), r.addEventListener("pointerup", Ze, !0)), t.addEventListener("beforeunload", (() => {
          rt(e)
        }), {
          once: !0
        }), Ge.set(t, {
          focus: n
        })
      }
      const rt = (e, t) => {
        const r = ee(e),
          n = J(e);
        t && n.removeEventListener("DOMContentLoaded", t), Ge.has(r) && (r.HTMLElement.prototype.focus = Ge.get(r).focus, n.removeEventListener("keydown", Ye, !0), n.removeEventListener("keyup", Ye, !0), n.removeEventListener("click", Qe, !0), r.removeEventListener("focus", Je, !0), r.removeEventListener("blur", et, !1), "undefined" != typeof PointerEvent && (n.removeEventListener("pointerdown", Ze, !0), n.removeEventListener("pointermove", Ze, !0), n.removeEventListener("pointerup", Ze, !0)), Ge.delete(r))
      };
      "undefined" != typeof document && function(e) {
        const t = J(e);
        let r;
        "loading" !== t.readyState ? tt(e) : (r = () => {
          tt(e)
        }, t.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function nt(e, t) {
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
        let t = r => {
          if (!e(r) || !r.target) return;
          let n = at.get(r.target);
          if (n && (n.delete(r.propertyName), 0 === n.size && (r.target.removeEventListener("transitioncancel", t), at.delete(r.target)), 0 === at.size)) {
            for (let e of st) e();
            st.clear()
          }
        };
        document.body.addEventListener("transitionrun", (r => {
          if (!e(r) || !r.target) return;
          let n = at.get(r.target);
          n || (n = new Set, at.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function ct(e) {
        requestAnimationFrame((() => {
          0 === at.size ? e() : st.add(e)
        }))
      }

      function ut(e) {
        if (!e) return;
        let t = !0;
        return r => {
          let n = {
            ...r,
            preventDefault() {
              r.preventDefault()
            },
            isDefaultPrevented: () => r.isDefaultPrevented(),
            stopPropagation() {
              t = !0
            },
            continuePropagation() {
              t = !1
            },
            isPropagationStopped: () => t
          };
          e(n), t && r.stopPropagation()
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

      function ht(e, t) {
        let {
          focusProps: r
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: r,
            onBlur: n,
            onFocusChange: o
          } = e;
          const i = (0, s.useCallback)((e => {
              if (e.target === e.currentTarget) return n && n(e), o && o(!1), !0
            }), [n, o]),
            a = Ne(i),
            l = (0, s.useCallback)((e => {
              const t = J(e.target),
                n = t ? ot(t) : ot();
              e.target === e.currentTarget && n === it(e.nativeEvent) && (r && r(e), o && o(!0), a(e))
            }), [o, r, a]);
          return {
            focusProps: {
              onFocus: !t && (r || o || n) ? l : void 0,
              onBlur: t || !n && !o ? void 0 : i
            }
          }
        }(e), {
          keyboardProps: n
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: ut(e.onKeyDown),
              onKeyUp: ut(e.onKeyUp)
            }
          }
        }(e), o = me(r, n), i = function(e) {
          let t = (0, s.useContext)(ft) || {};
          dt(t, e);
          let {
            ref: r,
            ...n
          } = t;
          return n
        }(t), a = e.isDisabled ? {} : i, l = (0, s.useRef)(e.autoFocus);
        (0, s.useEffect)((() => {
          l.current && t.current && function(e) {
            const t = J(e),
              r = ot(t);
            if ("virtual" === He) {
              let n = r;
              ct((() => {
                ot(t) === n && e.isConnected && ke(e)
              }))
            } else ke(e)
          }(t.current), l.current = !1
        }), [t]);
        let c = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (c = void 0), {
          focusableProps: me({
            ...o,
            tabIndex: c
          }, a)
        }
      }

      function pt(e, t, r) {
        let {
          validationBehavior: n,
          focus: o
        } = e;
        Y((() => {
          if ("native" === n && (null == r ? void 0 : r.current) && !r.current.disabled) {
            let n = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(n), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
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
            var n;
            t.displayValidation.isInvalid || t.commitValidation();
            let i = null == r || null === (n = r.current) || void 0 === n ? void 0 : n.form;
            var a;
            !e.defaultPrevented && r && i && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let r = e.elements[t];
                if (!r.validity.valid) return r
              }
              return null
            }(i) === r.current && (o ? o() : null === (a = r.current) || void 0 === a || a.focus(), He = "keyboard", Xe("keyboard", null)), e.preventDefault()
          })),
          l = Z((() => {
            t.commitValidation()
          }));
        (0, s.useEffect)((() => {
          let e = null == r ? void 0 : r.current;
          if (!e) return;
          let t = e.form;
          return e.addEventListener("invalid", a), e.addEventListener("change", l), null == t || t.addEventListener("reset", i), () => {
            e.removeEventListener("invalid", a), e.removeEventListener("change", l), null == t || t.removeEventListener("reset", i)
          }
        }), [r, a, l, i, n])
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
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: i
          } = e[wt];
          return {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: n,
            resetValidation: o,
            commitValidation: i
          }
        }
        return function(e) {
          let {
            isInvalid: t,
            validationState: r,
            name: n,
            value: o,
            builtinValidation: i,
            validate: a,
            validationBehavior: l = "aria"
          } = e;
          r && (t || (t = "invalid" === r));
          let c = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: mt
            } : null,
            u = (0, s.useMemo)((() => {
              if (!a || null == o) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return xt(r)
                }
                return []
              }(a, o);
              return St(e)
            }), [a, o]);
          (null == i ? void 0 : i.validationDetails.valid) && (i = void 0);
          let d = (0, s.useContext)(bt),
            f = (0, s.useMemo)((() => n ? Array.isArray(n) ? n.flatMap((e => xt(d[e]))) : xt(d[n]) : []), [d, n]),
            [h, p] = (0, s.useState)(d),
            [v, g] = (0, s.useState)(!1);
          d !== h && (p(d), g(!1));
          let m = (0, s.useMemo)((() => St(v ? [] : f)), [v, f]),
            y = (0, s.useRef)(yt),
            [b, w] = (0, s.useState)(yt),
            _ = (0, s.useRef)(yt),
            [x, S] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            if (!x) return;
            S(!1);
            let e = u || i || y.current;
            Ct(e, _.current) || (_.current = e, w(e))
          })), {
            realtimeValidation: c || m || u || i || yt,
            displayValidation: "native" === l ? c || m || b : c || m || u || i || b,
            updateValidation(e) {
              "aria" !== l || Ct(b, e) ? y.current = e : w(e)
            },
            resetValidation() {
              let e = yt;
              Ct(e, _.current) || (_.current = e, w(e)), "native" === l && S(!1), g(!0)
            },
            commitValidation() {
              "native" === l && S(!0), g(!0)
            }
          }
        }(e)
      }

      function xt(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function St(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: mt
        } : null
      }

      function Ct(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, r) => e === t.validationErrors[r])) && Object.entries(e.validationDetails).every((([e, r]) => t.validationDetails[e] === r))
      }

      function jt(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function kt(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Ot(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? kt(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = jt(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kt(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Pt(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Et = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Nt = "foundry_hcgxh_vq8c3j8",
        Tt = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ot(Ot({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Et(c, n, e.defaultVariants) && (r += " " + u);
            return r
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
          defaultClassName: "foundry_hcgxh_vq8c3j9 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10",
          variantClassNames: {
            isInvalid: {
              false: "foundry_hcgxh_vq8c3ja",
              true: "foundry_hcgxh_vq8c3jb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, s.forwardRef)((({
        asChild: e,
        label: t,
        isRequired: r,
        hint: n,
        children: o,
        description: c,
        testId: d,
        className: f,
        rows: h = 5,
        hideLabel: p,
        hideDescription: v,
        hideRequiredAsterisk: g,
        validate: m,
        errorMessage: y,
        ...b
      }, w) => {
        const _ = (0, s.useRef)(null),
          x = F(_, w),
          {
            inputProps: S,
            labelProps: C,
            descriptionProps: j,
            isInvalid: k,
            errorMessageProps: P,
            validationErrors: E
          } = function(e, t) {
            let {
              inputElementType: r = "input",
              isDisabled: n = !1,
              isRequired: o = !1,
              isReadOnly: i = !1,
              type: a = "text",
              validationBehavior: l = "aria"
            } = e, [c, u] = ye(e.value, e.defaultValue || "", e.onChange), {
              focusableProps: d
            } = ht(e, t), f = _t({
              ...e,
              value: c
            }), {
              isInvalid: h,
              validationErrors: p,
              validationDetails: v
            } = f.displayValidation, {
              labelProps: g,
              fieldProps: m,
              descriptionProps: y,
              errorMessageProps: b
            } = we({
              ...e,
              isInvalid: h,
              errorMessage: e.errorMessage || p
            }), w = X(e, {
              labelable: !0
            });
            const _ = {
              type: a,
              pattern: e.pattern
            };
            return Q(t, c, u), pt(e, f, t), (0, s.useEffect)((() => {
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
              inputProps: me(w, "input" === r ? _ : void 0, {
                disabled: n,
                readOnly: i,
                required: o && "native" === l,
                "aria-required": o && "aria" === l || void 0,
                "aria-invalid": h || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-activedescendant": e["aria-activedescendant"],
                "aria-autocomplete": e["aria-autocomplete"],
                "aria-haspopup": e["aria-haspopup"],
                value: c,
                onChange: e => u(e.target.value),
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
              isInvalid: h,
              validationErrors: p,
              validationDetails: v
            }
          }({
            ...b,
            label: t,
            description: c,
            isRequired: r,
            inputElementType: "textarea",
            validate: e => m?.(e) ?? (!y || [y])
          }, _),
          N = (0, a.v6)({
            ...S,
            className: f
          }, {
            className: Tt({
              isInvalid: k
            }),
            "aria-errormessage": P?.id
          }),
          T = e ? l.Slot : "textarea";
        return (0, i.jsxs)("div", {
          className: "foundry_hcgxh_vq8c3j0",
          children: [(t || n) && (0, i.jsxs)("div", {
            className: "foundry_hcgxh_vq8c3j1",
            children: [(0, i.jsx)(u, {
              enabled: !!p,
              children: (0, i.jsx)(M, {
                size: "SM",
                className: (0, O.$)("foundry_hcgxh_vq8c3j2", S.disabled && Nt),
                asChild: !0,
                children: (0, i.jsxs)("label", {
                  ...C,
                  children: [t, r && !g && (0, i.jsx)("span", {
                    className: "foundry_hcgxh_vq8c3j7",
                    children: "*"
                  })]
                })
              })
            }), n && (0, i.jsx)(M, {
              size: "XS",
              className: "foundry_hcgxh_vq8c3j3",
              children: n
            })]
          }), (0, i.jsx)(T, {
            rows: h,
            ref: x,
            "data-testid": d,
            ...N,
            children: o
          }), c && (0, i.jsx)(u, {
            enabled: E.length > 0 || !!v,
            children: (0, i.jsx)(M, {
              size: "SM",
              ...j,
              className: (0, O.$)("foundry_hcgxh_vq8c3j4", S.disabled && Nt),
              children: c
            })
          }), E.length > 0 && (0, i.jsxs)(M, {
            size: "SM",
            appearance: "bold",
            ...P,
            className: "foundry_hcgxh_vq8c3j5",
            children: [(0, i.jsx)(R.X, {
              size: "MD",
              label: "",
              className: "foundry_hcgxh_vq8c3j6"
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
            ct((() => {
              if ("restoring" === Lt) {
                const t = J(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = Dt || ""), Dt = "", Lt = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && Mt.has(e)) {
          let t = Mt.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), Mt.delete(e)
        }
      }
      const zt = s.createContext({
        register: () => {}
      });

      function At(e, t, r) {
        if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
        return t.get(e)
      }

      function It(e, t, r) {
        return function(e, t, r) {
          if (t.set) t.set.call(e, r);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = r
          }
        }(e, At(e, t, "set"), r), r
      }

      function Vt() {
        let e = (0, s.useRef)(new Map),
          t = (0, s.useCallback)(((t, r, n, o) => {
            let i = (null == o ? void 0 : o.once) ? (...t) => {
              e.current.delete(n), n(...t)
            } : n;
            e.current.set(n, {
              type: r,
              eventTarget: t,
              fn: i,
              options: o
            }), t.addEventListener(r, i, o)
          }), []),
          r = (0, s.useCallback)(((t, r, n, o) => {
            var i;
            let a = (null === (i = e.current.get(n)) || void 0 === i ? void 0 : i.fn) || n;
            t.removeEventListener(r, a, o), e.current.delete(n)
          }), []),
          n = (0, s.useCallback)((() => {
            e.current.forEach(((e, t) => {
              r(e.eventTarget, e.type, t, e.options)
            }))
          }), [r]);
        return (0, s.useEffect)((() => n), [n]), {
          addGlobalListener: t,
          removeGlobalListener: r,
          removeAllGlobalListeners: n
        }
      }
      zt.displayName = "PressResponderContext";
      const Ft = (0, s.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let r = document.createElement("a");
              r.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(r), t(r), e.removeChild(r)
            }
          }(e, (e => Bt(e, t)))
        },
        useHref: e => e
      });

      function qt() {
        return (0, s.useContext)(Ft)
      }

      function Bt(e, t, r = !0) {
        var n, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        Be() && (null === (o = window.event) || void 0 === o || null === (n = o.type) || void 0 === n ? void 0 : n.startsWith("key")) && "_blank" === e.target && (Re() ? i = !0 : a = !0);
        let c = Ve() && Re() && !Ae() ? new KeyboardEvent("keydown", {
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
        Bt.isOpening = r, ke(e), e.dispatchEvent(c), Bt.isOpening = !1
      }

      function $t(e) {
        var t;
        const r = qt().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? r : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }
      Bt.isOpening = !1;
      var Ht = r(18429),
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
        constructor(e, t, r, n) {
          var o, i, a, s;
          s = {
              writable: !0,
              value: void 0
            },
            function(e, t) {
              if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
            }(i = this, a = Wt), a.set(i, s), It(this, Wt, !0);
          let l = null !== (o = null == n ? void 0 : n.target) && void 0 !== o ? o : r.currentTarget;
          const c = null == l ? void 0 : l.getBoundingClientRect();
          let u, d, f = 0,
            h = null;
          null != r.clientX && null != r.clientY && (d = r.clientX, h = r.clientY), c && (null != d && null != h ? (u = d - c.left, f = h - c.top) : (u = c.width / 2, f = c.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = u, this.y = f
        }
      }
      const Ut = Symbol("linkClicked");

      function Kt(e) {
        let {
          onPress: t,
          onPressChange: r,
          onPressStart: n,
          onPressEnd: o,
          onPressUp: i,
          onClick: a,
          isDisabled: l,
          isPressed: c,
          preventFocusOnPress: u,
          shouldCancelOnPointerExit: d,
          allowTextSelectionOnPress: f,
          ref: h,
          ...p
        } = function(e) {
          let t = (0, s.useContext)(zt);
          if (t) {
            let {
              register: r,
              ...n
            } = t;
            e = me(n, e), r()
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
          if (o.isTriggeringEvent = !0, n) {
            let r = new Gt("pressstart", t, e);
            n(r), i = r.shouldStopPropagation
          }
          return r && r(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, g(!0), i
        })), _ = Z(((e, n, i = !0) => {
          let a = m.current;
          if (!a.didFirePressStart) return !1;
          a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let s = !0;
          if (o) {
            let t = new Gt("pressend", n, e);
            o(t), s = t.shouldStopPropagation
          }
          if (r && r(!1), g(!1), t && i && !l) {
            let r = new Gt("press", n, e);
            t(r), s && (s = r.shouldStopPropagation)
          }
          return a.isTriggeringEvent = !1, s
        })), x = Z(((e, t) => {
          let r = m.current;
          if (l) return !1;
          if (i) {
            r.isTriggeringEvent = !0;
            let n = new Gt("pressup", t, e);
            return i(n), r.isTriggeringEvent = !1, n.shouldStopPropagation
          }
          return !0
        })), S = Z((e => {
          let t = m.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && _(Zt(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, b(), f || Rt(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        })), C = Z((e => {
          d && S(e)
        })), j = Z((e => {
          null == a || a(e)
        })), k = Z(((e, t) => {
          if (a) {
            let r = new MouseEvent("click", e);
            Ee(r, t), a(Pe(r))
          }
        })), O = (0, s.useMemo)((() => {
          let e = m.current,
            t = {
              onKeyDown(t) {
                if (Yt(t.nativeEvent, t.currentTarget) && nt(t.currentTarget, it(t.nativeEvent))) {
                  var n;
                  Qt(it(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = w(t, "keyboard");
                    let n = t.currentTarget,
                      i = t => {
                        Yt(t, n) && !t.repeat && nt(n, it(t)) && e.target && x(Zt(e.target, t), "keyboard")
                      };
                    y(J(t.currentTarget), "keyup", te(i, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && Re() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || nt(t.currentTarget, it(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !Bt.isOpening) {
                  let r = !0;
                  if (l && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !$e(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let n = e.pointerType || t.nativeEvent.pointerType || "virtual";
                      r = _(Zt(t.currentTarget, t), n, !0), e.isOverTarget = !1, j(t), S(t)
                    }
                  } else {
                    let e = w(t, "virtual"),
                      n = x(t, "virtual"),
                      o = _(t, "virtual");
                    j(t), r = e && n && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, r && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && Yt(t, e.target)) {
                var n;
                Qt(it(t), t.key) && t.preventDefault();
                let r = it(t),
                  o = nt(e.target, it(t));
                _(Zt(e.target, t), "keyboard", o), o && k(t, e.target), b(), "Enter" !== t.key && Xt(e.target) && nt(e.target, r) && !t[Ut] && (t[Ut] = !0, Bt(e.target, t, !1)), e.isPressed = !1, null === (n = e.metaKeyEvents) || void 0 === n || n.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !nt(t.currentTarget, it(t.nativeEvent))) return;
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
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), y(J(t.currentTarget), "pointerup", r, !1), y(J(t.currentTarget), "pointercancel", n, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (nt(t.currentTarget, it(t.nativeEvent)) && 0 === t.button) {
                if (u) {
                  let r = function(e) {
                    for (; e && !Ce(e);) e = e.parentElement;
                    let t = ee(e),
                      r = t.document.activeElement;
                    if (!r || r === e) return;
                    Te = !0;
                    let n = !1,
                      o = e => {
                        (e.target === r || n) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === r || n) && (t.stopImmediatePropagation(), e || n || (n = !0, ke(r), l()))
                      },
                      a = t => {
                        (t.target === e || n) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || n) && (t.stopImmediatePropagation(), n || (n = !0, ke(r), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", a, !0);
                    let l = () => {
                        cancelAnimationFrame(c), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", a, !0), Te = !1, n = !1
                      },
                      c = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  r && e.disposables.push(r)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              nt(t.currentTarget, it(t.nativeEvent)) && "virtual" !== e.pointerType && 0 === t.button && x(t, e.pointerType || t.pointerType)
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, w(Zt(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, _(Zt(e.target, t), e.pointerType, !1), C(t))
            };
            let r = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (nt(e.target, it(t)) && null != e.pointerType) {
                    let r = !1,
                      n = setTimeout((() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? S(t) : (ke(e.target), e.target.click()))
                      }), 80);
                    y(t.currentTarget, "click", (() => r = !0), !0), e.disposables.push((() => clearTimeout(n)))
                  } else S(t);
                  e.isOverTarget = !1
                }
              },
              n = e => {
                S(e)
              };
            t.onDragStart = e => {
              nt(e.currentTarget, it(e.nativeEvent)) && S(e)
            }
          }
          return t
        }), [y, l, u, b, f, S, C, _, w, x, j, k]);
        return (0, s.useEffect)((() => {
          let e = null == h ? void 0 : h.current;
          e && e instanceof ee(e).Element && "auto" === ee(e).getComputedStyle(e).touchAction && (e.style.touchAction = "pan-x pan-y pinch-zoom")
        }), [h]), (0, s.useEffect)((() => {
          let e = m.current;
          return () => {
            var t;
            f || Rt(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }), [f]), {
          isPressed: c || v,
          pressProps: me(p, O)
        }
      }

      function Xt(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function Yt(e, t) {
        const {
          key: r,
          code: n
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== n || o instanceof ee(o).HTMLInputElement && !er(o, r) || o instanceof ee(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && Xt(o)) && "Enter" !== r)
      }

      function Zt(e, t) {
        let r = t.clientX,
          n = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: r,
          clientY: n
        }
      }

      function Qt(e, t) {
        return e instanceof HTMLInputElement ? !er(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : Xt(e)))
        }(e)
      }
      const Jt = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function er(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Jt.has(e.type)
      }

      function tr(e, t) {
        let r, {
          elementType: n = "button",
          isDisabled: o,
          onPress: i,
          onPressStart: a,
          onPressEnd: s,
          onPressUp: l,
          onPressChange: c,
          preventFocusOnPress: u,
          allowFocusWhenDisabled: d,
          onClick: f,
          href: h,
          target: p,
          rel: v,
          type: g = "button"
        } = e;
        r = "button" === n ? {
          type: g,
          disabled: o
        } : {
          role: "button",
          href: "a" !== n || o ? void 0 : h,
          target: "a" === n ? p : void 0,
          type: "input" === n ? g : void 0,
          disabled: "input" === n ? o : void 0,
          "aria-disabled": o && "input" !== n ? o : void 0,
          rel: "a" === n ? v : void 0
        };
        let {
          pressProps: m,
          isPressed: y
        } = Kt({
          onPressStart: a,
          onPressEnd: s,
          onPressChange: c,
          onPress: i,
          onPressUp: l,
          onClick: f,
          isDisabled: o,
          preventFocusOnPress: u,
          ref: t
        }), {
          focusableProps: b
        } = ht(e, t);
        d && (b.tabIndex = o ? -1 : b.tabIndex);
        let w = me(b, m, X(e, {
          labelable: !0
        }));
        return {
          isPressed: y,
          buttonProps: me(r, w, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"]
          })
        }
      }
      var rr = {};

      function nr(e) {
        var t = e.match(/^var\((.*)\)$/);
        return t ? t[1] : e
      }

      function or(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
          n = {};
        for (var o in e) {
          var i = e[o],
            a = [...r, o];
          "string" == typeof i || "number" == typeof i || null == i ? n[o] = t(i, a) : "object" != typeof i || Array.isArray(i) ? console.warn('Skipping invalid key "'.concat(a.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(i) ? "Array" : typeof i, '"')) : n[o] = or(i, t, a)
        }
        return n
      }
      var ir, ar, sr = r(79895),
        lr = r.n(sr),
        cr = class {
          constructor(e) {
            const {
              failure: t,
              gotoFn: r,
              output: n
            } = this._buildTables(e);
            this.gotoFn = r, this.output = n, this.failure = t
          }
          _buildTables(e) {
            const t = {
                0: {}
              },
              r = {};
            let n = 0;
            for (const o of e) {
              let e = 0;
              for (const i of o) t[e] && i in t[e] ? e = t[e][i] : (n++, t[e][i] = n, t[n] = {}, e = n, r[n] = []);
              r[e].push(o)
            }
            const o = {},
              i = [];
            for (const e in t[0]) {
              const r = t[0][e];
              o[r] = 0, i.push(r)
            }
            for (; i.length > 0;) {
              const e = i.shift();
              if (void 0 !== e)
                for (const n in t[e]) {
                  const a = t[e][n];
                  i.push(a);
                  let s = o[e];
                  for (; s > 0 && !(n in t[s]);) s = o[s];
                  if (n in t[s]) {
                    const e = t[s][n];
                    o[a] = e, r[a] = [...r[a], ...r[e]]
                  } else o[a] = 0
                }
            }
            return {
              gotoFn: t,
              output: r,
              failure: o
            }
          }
          search(e) {
            let t = 0;
            const r = [];
            for (let n = 0; n < e.length; n++) {
              const o = e[n];
              for (; t > 0 && !(o in this.gotoFn[t]);) t = this.failure[t];
              if (o in this.gotoFn[t] && (t = this.gotoFn[t][o], this.output[t].length > 0)) {
                const e = this.output[t];
                r.push([n, e])
              }
            }
            return r
          }
          match(e) {
            let t = 0;
            for (let r = 0; r < e.length; r++) {
              const n = e[r];
              for (; t > 0 && !(n in this.gotoFn[t]);) t = this.failure[t];
              if (n in this.gotoFn[t] && (t = this.gotoFn[t][n], this.output[t].length > 0)) return !0
            }
            return !1
          }
        },
        ur = [{
          appendCss: () => {},
          registerClassName: () => {},
          onEndFileScope: () => {},
          registerComposition: () => {},
          markCompositionUsed: () => {},
          getIdentOption: () => "short"
        }],
        dr = !1;

      function fr(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
          raw: {
            value: Object.freeze(t)
          }
        }))
      }! function(e) {
        e.Attribute = "attribute", e.Pseudo = "pseudo", e.PseudoElement = "pseudo-element", e.Tag = "tag", e.Universal = "universal", e.Adjacent = "adjacent", e.Child = "child", e.Descendant = "descendant", e.Parent = "parent", e.Sibling = "sibling", e.ColumnCombinator = "column-combinator"
      }(ir || (ir = {})),
      function(e) {
        e.Any = "any", e.Element = "element", e.End = "end", e.Equals = "equals", e.Exists = "exists", e.Hyphen = "hyphen", e.Not = "not", e.Start = "start"
      }(ar || (ar = {}));
      const hr = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/,
        pr = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
        vr = new Map([
          [126, ar.Element],
          [94, ar.Start],
          [36, ar.End],
          [42, ar.Any],
          [33, ar.Not],
          [124, ar.Hyphen]
        ]),
        gr = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]),
        mr = new Set(["contains", "icontains"]);

      function yr(e, t, r) {
        const n = parseInt(t, 16) - 65536;
        return n != n || r ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
      }

      function br(e) {
        return e.replace(pr, yr)
      }

      function wr(e) {
        return 39 === e || 34 === e
      }

      function _r(e) {
        return 32 === e || 9 === e || 10 === e || 12 === e || 13 === e
      }

      function xr(e) {
        const t = [],
          r = Sr(t, `${e}`, 0);
        if (r < e.length) throw new Error(`Unmatched selector: ${e.slice(r)}`);
        return t
      }

      function Sr(e, t, r) {
        let n = [];

        function o(e) {
          const n = t.slice(r + e).match(hr);
          if (!n) throw new Error(`Expected name, found ${t.slice(r)}`);
          const [o] = n;
          return r += e + o.length, br(o)
        }

        function i(e) {
          for (r += e; r < t.length && _r(t.charCodeAt(r));) r++
        }

        function a() {
          const e = r += 1;
          let n = 1;
          for (; n > 0 && r < t.length; r++) 40 !== t.charCodeAt(r) || s(r) ? 41 !== t.charCodeAt(r) || s(r) || n-- : n++;
          if (n) throw new Error("Parenthesis not matched");
          return br(t.slice(e, r - 1))
        }

        function s(e) {
          let r = 0;
          for (; 92 === t.charCodeAt(--e);) r++;
          return !(1 & ~r)
        }

        function l() {
          if (n.length > 0 && function(e) {
              switch (e.type) {
                case ir.Adjacent:
                case ir.Child:
                case ir.Descendant:
                case ir.Parent:
                case ir.Sibling:
                case ir.ColumnCombinator:
                  return !0;
                default:
                  return !1
              }
            }(n[n.length - 1])) throw new Error("Did not expect successive traversals.")
        }

        function c(e) {
          n.length > 0 && n[n.length - 1].type === ir.Descendant ? n[n.length - 1].type = e : (l(), n.push({
            type: e
          }))
        }

        function u(e, t) {
          n.push({
            type: ir.Attribute,
            name: e,
            action: t,
            value: o(1),
            namespace: null,
            ignoreCase: "quirks"
          })
        }

        function d() {
          if (n.length && n[n.length - 1].type === ir.Descendant && n.pop(), 0 === n.length) throw new Error("Empty sub-selector");
          e.push(n)
        }
        if (i(0), t.length === r) return r;
        e: for (; r < t.length;) {
          const e = t.charCodeAt(r);
          switch (e) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13:
              0 !== n.length && n[0].type === ir.Descendant || (l(), n.push({
                type: ir.Descendant
              })), i(1);
              break;
            case 62:
              c(ir.Child), i(1);
              break;
            case 60:
              c(ir.Parent), i(1);
              break;
            case 126:
              c(ir.Sibling), i(1);
              break;
            case 43:
              c(ir.Adjacent), i(1);
              break;
            case 46:
              u("class", ar.Element);
              break;
            case 35:
              u("id", ar.Equals);
              break;
            case 91: {
              let e;
              i(1);
              let a = null;
              124 === t.charCodeAt(r) ? e = o(1) : t.startsWith("*|", r) ? (a = "*", e = o(2)) : (e = o(0), 124 === t.charCodeAt(r) && 61 !== t.charCodeAt(r + 1) && (a = e, e = o(1))), i(0);
              let l = ar.Exists;
              const c = vr.get(t.charCodeAt(r));
              if (c) {
                if (l = c, 61 !== t.charCodeAt(r + 1)) throw new Error("Expected `=`");
                i(2)
              } else 61 === t.charCodeAt(r) && (l = ar.Equals, i(1));
              let u = "",
                d = null;
              if ("exists" !== l) {
                if (wr(t.charCodeAt(r))) {
                  const e = t.charCodeAt(r);
                  let n = r + 1;
                  for (; n < t.length && (t.charCodeAt(n) !== e || s(n));) n += 1;
                  if (t.charCodeAt(n) !== e) throw new Error("Attribute value didn't end");
                  u = br(t.slice(r + 1, n)), r = n + 1
                } else {
                  const e = r;
                  for (; r < t.length && (!_r(t.charCodeAt(r)) && 93 !== t.charCodeAt(r) || s(r));) r += 1;
                  u = br(t.slice(e, r))
                }
                i(0);
                const e = 32 | t.charCodeAt(r);
                115 === e ? (d = !1, i(1)) : 105 === e && (d = !0, i(1))
              }
              if (93 !== t.charCodeAt(r)) throw new Error("Attribute selector didn't terminate");
              r += 1;
              const f = {
                type: ir.Attribute,
                name: e,
                action: l,
                value: u,
                namespace: a,
                ignoreCase: d
              };
              n.push(f);
              break
            }
            case 58: {
              if (58 === t.charCodeAt(r + 1)) {
                n.push({
                  type: ir.PseudoElement,
                  name: o(2).toLowerCase(),
                  data: 40 === t.charCodeAt(r) ? a() : null
                });
                continue
              }
              const e = o(1).toLowerCase();
              let i = null;
              if (40 === t.charCodeAt(r))
                if (gr.has(e)) {
                  if (wr(t.charCodeAt(r + 1))) throw new Error(`Pseudo-selector ${e} cannot be quoted`);
                  if (i = [], r = Sr(i, t, r + 1), 41 !== t.charCodeAt(r)) throw new Error(`Missing closing parenthesis in :${e} (${t})`);
                  r += 1
                } else {
                  if (i = a(), mr.has(e)) {
                    const e = i.charCodeAt(0);
                    e === i.charCodeAt(i.length - 1) && wr(e) && (i = i.slice(1, -1))
                  }
                  i = br(i)
                } n.push({
                type: ir.Pseudo,
                name: e,
                data: i
              });
              break
            }
            case 44:
              d(), n = [], i(1);
              break;
            default: {
              if (t.startsWith("/*", r)) {
                const e = t.indexOf("*/", r + 2);
                if (e < 0) throw new Error("Comment was not terminated");
                r = e + 2, 0 === n.length && i(0);
                break
              }
              let a, s = null;
              if (42 === e) r += 1, a = "*";
              else if (124 === e) {
                if (a = "", 124 === t.charCodeAt(r + 1)) {
                  c(ir.ColumnCombinator), i(2);
                  break
                }
              } else {
                if (!hr.test(t.slice(r))) break e;
                a = o(0)
              }
              124 === t.charCodeAt(r) && 124 !== t.charCodeAt(r + 1) && (s = a, 42 === t.charCodeAt(r + 1) ? (a = "*", r += 2) : a = o(1)), n.push("*" === a ? {
                type: ir.Universal,
                namespace: s
              } : {
                type: ir.Tag,
                name: a,
                namespace: s
              })
            }
          }
        }
        return d(), r
      }

      function Cr(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function jr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Cr(Object(r), !0).forEach((function(t) {
            kr(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cr(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function kr(e, t, r) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || null === e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" != typeof r) return r;
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
      const Or = function e(t) {
          return r.withOptions = r => e(jr(jr({}, t), r)), r;

          function r(e, ...r) {
            const n = "string" == typeof e ? [e] : e.raw,
              {
                escapeSpecialCharacters: o = Array.isArray(e)
              } = t;
            let i = "";
            for (let e = 0; e < n.length; e++) {
              let t = n[e];
              o && (t = t.replace(/\\\n[ \t]*/g, "").replace(/\\`/g, "`").replace(/\\\$/g, "$").replace(/\\\{/g, "{")), i += t, e < r.length && (i += r[e])
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
        Pr = Or;
      var Er = function() {
        return Er = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, Er.apply(this, arguments)
      };

      function Nr(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        }
        return r
      }

      function Tr(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, i = r.call(e),
          a = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = i.next()).done;) a.push(n.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (r = i.return) && r.call(i)
          } finally {
            if (o) throw o.error
          }
        }
        return a
      }
      var Lr, Dr = /(\u000D|\u000C|\u000D\u000A)/g,
        Mr = /[\u0000\uD800-\uDFFF]/g,
        Rr = /(\/\*)[\s\S]*?(\*\/)/g,
        zr = function(e, t) {
          if (e.length <= t + 1) return null;
          for (var r = e.charCodeAt(t), n = [], o = t + 1; o < e.length; o += 1) {
            var i = e.charCodeAt(o);
            if (i === r) return [o, String.fromCharCode.apply(null, n)];
            if (92 === i) {
              var a = Ir(e, o);
              if (null === a) return null;
              var s = Tr(a, 2),
                l = s[0],
                c = s[1];
              n.push(c), o = l
            } else {
              if (10 === i) return null;
              n.push(i)
            }
          }
          return null
        },
        Ar = function(e, t) {
          if (e.length <= t) return !1;
          var r, n = e.charCodeAt(t);
          return 45 === n ? !(e.length <= t + 1) && (45 === (r = e.charCodeAt(t + 1)) || 95 === r || r >= 65 && r <= 90 || r >= 97 && r <= 122 || r >= 128 || 92 === r && !(e.length <= t + 2) && 10 !== e.charCodeAt(t + 2)) : 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || 92 === n && !(e.length <= t + 1) && 10 !== (r = e.charCodeAt(t + 1))
        },
        Ir = function(e, t) {
          if (e.length <= t + 1) return null;
          if (92 !== e.charCodeAt(t)) return null;
          var r = e.charCodeAt(t + 1);
          if (10 === r) return null;
          if (r >= 48 && r <= 57 || r >= 65 && r <= 70 || r >= 97 && r <= 102) {
            for (var n = [r], o = Math.min(t + 7, e.length), i = t + 2; i < o; i += 1) {
              var a = e.charCodeAt(i);
              if (!(a >= 48 && a <= 57 || a >= 65 && a <= 70 || a >= 97 && a <= 102)) break;
              n.push(a)
            }
            if (i < e.length) {
              var s = e.charCodeAt(i);
              9 !== s && 32 !== s && 10 !== s || (i += 1)
            }
            return [i - 1, parseInt(String.fromCharCode.apply(null, n), 16)]
          }
          return [t + 1, r]
        },
        Vr = function(e, t) {
          var r = Fr(e, t);
          if (null === r) return null;
          var n = Tr(r, 3),
            o = n[0],
            i = n[1],
            a = n[2],
            s = Br(e, o + 1);
          if (null !== s) {
            var l = Tr(s, 2);
            return [l[0],
              ["<dimension-token>", i, l[1]]
            ]
          }
          return o + 1 < e.length && 37 === e.charCodeAt(o + 1) ? [o + 1, ["<percentage-token>", i]] : [o, ["<number-token>", i, a]]
        },
        Fr = function(e, t) {
          if (e.length <= t) return null;
          var r = "integer",
            n = [],
            o = e.charCodeAt(t);
          for (43 !== o && 45 !== o || (t += 1, 45 === o && n.push(45)); t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) n.push(c), t += 1;
          if (t + 1 < e.length) {
            var i = e.charCodeAt(t),
              a = e.charCodeAt(t + 1);
            if (46 === i && a >= 48 && a <= 57)
              for (n.push(i, a), r = "number", t += 2; t < e.length && ((c = e.charCodeAt(t)) >= 48 && c <= 57);) n.push(c), t += 1
          }
          if (t + 1 < e.length) {
            i = e.charCodeAt(t), a = e.charCodeAt(t + 1);
            var s = e.charCodeAt(t + 2);
            if (69 === i || 101 === i) {
              var l = a >= 48 && a <= 57;
              if (l || (43 === a || 45 === a) && s >= 48 && s <= 57)
                for (r = "number", l ? (n.push(69, a), t += 2) : 45 === a ? (n.push(69, 45, s), t += 3) : (n.push(69, s), t += 3); t < e.length;) {
                  var c;
                  if (!((c = e.charCodeAt(t)) >= 48 && c <= 57)) break;
                  n.push(c), t += 1
                }
            }
          }
          var u = String.fromCharCode.apply(null, n),
            d = "number" === r ? parseFloat(u) : parseInt(u);
          return -0 === d && (d = 0), Number.isNaN(d) ? null : [t - 1, d, r]
        },
        qr = function(e, t) {
          if (e.length <= t) return null;
          for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t))
            if (45 === n || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) r.push(n);
            else {
              var o = Ir(e, t);
              if (null === o) break;
              var i = Tr(o, 2),
                a = i[0],
                s = i[1];
              r.push(s), t = a
            } return 0 === t ? null : [t - 1, String.fromCharCode.apply(null, r)]
        },
        Br = function(e, t) {
          if (e.length <= t || !Ar(e, t)) return null;
          for (var r = [], n = e.charCodeAt(t); t < e.length; n = e.charCodeAt(++t))
            if (45 === n || 95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128 || n >= 48 && n <= 57) r.push(n);
            else {
              var o = Ir(e, t);
              if (null === o) break;
              var i = Tr(o, 2),
                a = i[0],
                s = i[1];
              r.push(s), t = a
            } return [t - 1, String.fromCharCode.apply(null, r)]
        },
        $r = function(e, t) {
          for (var r = e.charCodeAt(t); 9 === r || 32 === r || 10 === r;) r = e.charCodeAt(++t);
          for (var n = [], o = !1; t < e.length;) {
            if (41 === r) return [t, String.fromCharCode.apply(null, n)];
            if (34 === r || 39 === r || 40 === r) return null;
            if (9 === r || 32 === r || 10 === r) o || 0 === n.length || (o = !0);
            else if (92 === r) {
              var i = Ir(e, t);
              if (null === i || o) return null;
              var a = Tr(i, 2),
                s = a[0],
                l = a[1];
              n.push(l), t = s
            } else {
              if (o) return null;
              n.push(r)
            }
            r = e.charCodeAt(++t)
          }
          return null
        },
        Hr = function(e, t) {
          var r = Br(e, t);
          if (null === r) return null;
          var n = Tr(r, 2),
            o = n[0],
            i = n[1];
          if ("url" === i.toLowerCase()) {
            if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) {
              for (var a = 2; o + a < e.length; a += 1) {
                var s = e.charCodeAt(o + a);
                if (34 === s || 39 === s) return [o + 1, i.toLowerCase(), "<function-token>"];
                if (9 !== s && 32 !== s && 10 !== s) {
                  var l = $r(e, o + a);
                  if (null === l) return null;
                  var c = Tr(l, 2);
                  return [c[0], c[1], "<url-token>"]
                }
              }
              return [o + 1, i.toLowerCase(), "<function-token>"]
            }
          } else if (e.length > o + 1 && 40 === e.charCodeAt(o + 1)) return [o + 1, i.toLowerCase(), "<function-token>"];
          return [o, i.toLowerCase(), "<ident-token>"]
        },
        Wr = function(e) {
          if (null === e.mediaCondition) return e;
          var t = Gr(e.mediaCondition);
          return null === t.operator && 1 === t.children.length && "children" in t.children[0] && (t = t.children[0]), {
            mediaPrefix: e.mediaPrefix,
            mediaType: e.mediaType,
            mediaCondition: t
          }
        },
        Gr = function e(t) {
          for (var r = t.children.length - 1; r >= 0; r--) {
            var n = t.children[r];
            if (!("context" in n)) {
              var o = e(n);
              if (null === o.operator && 1 === o.children.length) t.children[r] = o.children[0];
              else if (o.operator === t.operator && ("and" === o.operator || "or" === o.operator)) {
                for (var i = [r, 1], a = 0; a < o.children.length; a++) i.push(o.children[a]);
                t.children.splice.apply(t.children, i)
              }
            }
          }
          return t
        },
        Ur = function(e, t) {
          return t instanceof Error ? new Error("".concat(t.message.trim(), "\n").concat(e.trim())) : new Error(e.trim())
        },
        Kr = function(e) {
          var t = function(e, t) {
            void 0 === t && (t = 0), e = (e = e.replace(Dr, "\n").replace(Mr, "�")).replace(Rr, "");
            for (var r = []; t < e.length; t += 1) {
              var n = e.charCodeAt(t);
              if (9 === n || 32 === n || 10 === n) {
                for (var o = e.charCodeAt(++t); 9 === o || 32 === o || 10 === o;) o = e.charCodeAt(++t);
                t -= 1, r.push({
                  type: "<whitespace-token>"
                })
              } else if (34 === n) {
                if (null === (j = zr(e, t))) return null;
                var i = Tr(j, 2),
                  a = i[0],
                  s = i[1];
                r.push({
                  type: "<string-token>",
                  value: s
                }), t = a
              } else if (35 === n) {
                if (t + 1 < e.length && (95 === (p = e.charCodeAt(t + 1)) || p >= 65 && p <= 90 || p >= 97 && p <= 122 || p >= 128 || p >= 48 && p <= 57 || 92 === p && t + 2 < e.length && 10 !== e.charCodeAt(t + 2))) {
                  var l = Ar(e, t + 1) ? "id" : "unrestricted";
                  if (null !== (j = qr(e, t + 1))) {
                    var c = Tr(j, 2);
                    a = c[0], s = c[1], r.push({
                      type: "<hash-token>",
                      value: s.toLowerCase(),
                      flag: l
                    }), t = a;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (39 === n) {
                if (null === (j = zr(e, t))) return null;
                var u = Tr(j, 2);
                a = u[0], s = u[1], r.push({
                  type: "<string-token>",
                  value: s
                }), t = a
              } else if (40 === n) r.push({
                type: "<(-token>"
              });
              else if (41 === n) r.push({
                type: "<)-token>"
              });
              else if (43 === n) {
                var d = Vr(e, t);
                if (null === d) r.push({
                  type: "<delim-token>",
                  value: n
                });
                else {
                  var f = Tr(d, 2);
                  a = f[0], "<dimension-token>" === (S = f[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: S[1],
                    unit: S[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === S[0] ? r.push({
                    type: S[0],
                    value: S[1],
                    flag: S[2]
                  }) : r.push({
                    type: S[0],
                    value: S[1],
                    flag: "number"
                  }), t = a
                }
              } else if (44 === n) r.push({
                type: "<comma-token>"
              });
              else if (45 === n) {
                if (null !== (y = Vr(e, t))) {
                  var h = Tr(y, 2);
                  a = h[0], "<dimension-token>" === (S = h[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: S[1],
                    unit: S[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === S[0] ? r.push({
                    type: S[0],
                    value: S[1],
                    flag: S[2]
                  }) : r.push({
                    type: S[0],
                    value: S[1],
                    flag: "number"
                  }), t = a;
                  continue
                }
                if (t + 2 < e.length) {
                  var p = e.charCodeAt(t + 1),
                    v = e.charCodeAt(t + 2);
                  if (45 === p && 62 === v) {
                    r.push({
                      type: "<CDC-token>"
                    }), t += 2;
                    continue
                  }
                }
                if (null !== (j = Hr(e, t))) {
                  var g = Tr(j, 3),
                    m = (a = g[0], s = g[1], g[2]);
                  r.push({
                    type: m,
                    value: s
                  }), t = a;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (46 === n) {
                var y;
                if (null !== (y = Vr(e, t))) {
                  var b = Tr(y, 2);
                  a = b[0], "<dimension-token>" === (S = b[1])[0] ? r.push({
                    type: "<dimension-token>",
                    value: S[1],
                    unit: S[2].toLowerCase(),
                    flag: "number"
                  }) : "<number-token>" === S[0] ? r.push({
                    type: S[0],
                    value: S[1],
                    flag: S[2]
                  }) : r.push({
                    type: S[0],
                    value: S[1],
                    flag: "number"
                  }), t = a;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (58 === n) r.push({
                type: "<colon-token>"
              });
              else if (59 === n) r.push({
                type: "<semicolon-token>"
              });
              else if (60 === n) {
                if (t + 3 < e.length) {
                  p = e.charCodeAt(t + 1), v = e.charCodeAt(t + 2);
                  var w = e.charCodeAt(t + 3);
                  if (33 === p && 45 === v && 45 === w) {
                    r.push({
                      type: "<CDO-token>"
                    }), t += 3;
                    continue
                  }
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (64 === n) {
                if (null !== (j = Br(e, t + 1))) {
                  var _ = Tr(j, 2);
                  a = _[0], s = _[1], r.push({
                    type: "<at-keyword-token>",
                    value: s.toLowerCase()
                  }), t = a;
                  continue
                }
                r.push({
                  type: "<delim-token>",
                  value: n
                })
              } else if (91 === n) r.push({
                type: "<[-token>"
              });
              else if (92 === n) {
                if (null === (j = Ir(e, t))) return null;
                var x = Tr(j, 2);
                a = x[0], s = x[1], e = e.slice(0, t) + s + e.slice(a + 1), t -= 1
              } else if (93 === n) r.push({
                type: "<]-token>"
              });
              else if (123 === n) r.push({
                type: "<{-token>"
              });
              else if (125 === n) r.push({
                type: "<}-token>"
              });
              else if (n >= 48 && n <= 57) {
                var S, C = Tr(j = Vr(e, t), 2);
                a = C[0], "<dimension-token>" === (S = C[1])[0] ? r.push({
                  type: "<dimension-token>",
                  value: S[1],
                  unit: S[2].toLowerCase(),
                  flag: "number"
                }) : "<number-token>" === S[0] ? r.push({
                  type: S[0],
                  value: S[1],
                  flag: S[2]
                }) : r.push({
                  type: S[0],
                  value: S[1],
                  flag: "number"
                }), t = a
              } else if (95 === n || n >= 65 && n <= 90 || n >= 97 && n <= 122 || n >= 128) {
                var j;
                if (null === (j = Hr(e, t))) return null;
                var k = Tr(j, 3);
                a = k[0], s = k[1], m = k[2], r.push({
                  type: m,
                  value: s
                }), t = a
              } else r.push({
                type: "<delim-token>",
                value: n
              })
            }
            return r.push({
              type: "<EOF-token>"
            }), r
          }(e.trim());
          if (null === t) throw Ur("Failed tokenizing");
          var r = 0,
            n = t.length - 1;
          if ("<at-keyword-token>" === t[0].type && "media" === t[0].value) {
            if ("<whitespace-token>" !== t[1].type) throw Ur("Expected whitespace after media");
            r = 2;
            for (var o = 2; o < t.length - 1; o++) {
              var i = t[o];
              if ("<{-token>" === i.type) {
                n = o;
                break
              }
              if ("<semicolon-token>" === i.type) throw Ur("Expected '{' in media query but found ';'")
            }
          }
          return t = t.slice(r, n), Yr(t)
        },
        Xr = function(e) {
          for (var t = [], r = !1, n = 0; n < e.length; n++) "<whitespace-token>" === e[n].type ? (r = !0, t.length > 0 && (t[t.length - 1].wsAfter = !0)) : (t.push(Er(Er({}, e[n]), {
            wsBefore: r,
            wsAfter: !1
          })), r = !1);
          return t
        },
        Yr = function(e) {
          for (var t, r, n = [
              []
            ], o = 0; o < e.length; o++) {
            var i = e[o];
            "<comma-token>" === i.type ? n.push([]) : n[n.length - 1].push(i)
          }
          var a = n.map(Xr);
          if (1 === a.length && 0 === a[0].length) return [{
            mediaCondition: null,
            mediaPrefix: null,
            mediaType: "all"
          }];
          var s = a.map((function(e) {
              return 0 === e.length ? null : Zr(e)
            })),
            l = [];
          try {
            for (var c = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                  r = t && e[t],
                  n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                  next: function() {
                    return e && n >= e.length && (e = void 0), {
                      value: e && e[n++],
                      done: !e
                    }
                  }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
              }(s), u = c.next(); !u.done; u = c.next()) {
              var d = u.value;
              null !== d && l.push(d)
            }
          } catch (e) {
            t = {
              error: e
            }
          } finally {
            try {
              u && !u.done && (r = c.return) && r.call(c)
            } finally {
              if (t) throw t.error
            }
          }
          if (0 === l.length) throw Ur("No valid media queries");
          return l
        },
        Zr = function(e) {
          var t = e[0];
          if ("<(-token>" === t.type) try {
            return {
              mediaPrefix: null,
              mediaType: "all",
              mediaCondition: Qr(e, !0)
            }
          } catch (e) {
            throw Ur("Expected media condition after '('", e)
          } else {
            if ("<ident-token>" !== t.type) throw Ur("Expected media condition or media prefix");
            var r = null,
              n = void 0,
              o = t.value;
            "only" !== o && "not" !== o || (r = o);
            var i = null === r ? 0 : 1;
            if (e.length <= i) throw Ur("Expected extra token in media query");
            var a = e[i];
            if ("<ident-token>" === a.type) {
              var s = a.value;
              if ("all" === s) n = "all";
              else if ("print" === s || "screen" === s) n = s;
              else {
                if ("tty" !== s && "tv" !== s && "projection" !== s && "handheld" !== s && "braille" !== s && "embossed" !== s && "aural" !== s && "speech" !== s) throw Ur("Unknown ident '".concat(s, "' in media query"));
                r = "not" === r ? null : "not", n = "all"
              }
            } else {
              if ("not" !== r || "<(-token>" !== a.type) throw Ur("Invalid media query");
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
                  mediaCondition: Qr(l, !0)
                }
              } catch (e) {
                throw Ur("Expected media condition after '('", e)
              }
            }
            if (i + 1 === e.length) return {
              mediaPrefix: r,
              mediaType: n,
              mediaCondition: null
            };
            if (!(i + 4 < e.length)) throw Ur("Expected media condition after media prefix");
            var c = e[i + 1];
            if ("<ident-token>" !== c.type || "and" !== c.value) throw Ur("Expected 'and' after media prefix");
            try {
              return {
                mediaPrefix: r,
                mediaType: n,
                mediaCondition: Qr(e.slice(i + 2), !1)
              }
            } catch (e) {
              throw Ur("Expected media condition after 'and'", e)
            }
          }
        },
        Qr = function e(t, r, n) {
          if (void 0 === n && (n = null), t.length < 3 || "<(-token>" !== t[0].type || "<)-token>" !== t[t.length - 1].type) throw new Error("Invalid media condition");
          for (var o, i = t.length - 1, a = 0, s = 0, l = 0; l < t.length; l++) {
            var c = t[l];
            if ("<(-token>" === c.type ? (s += 1, a = Math.max(a, s)) : "<)-token>" === c.type && (s -= 1), 0 === s) {
              i = l;
              break
            }
          }
          if (0 !== s) throw new Error("Mismatched parens\nInvalid media condition");
          var u = t.slice(0, i + 1);
          if (o = 1 === a ? Jr(u) : "<ident-token>" === u[1].type && "not" === u[1].value ? e(u.slice(2, -1), !0, "not") : e(u.slice(1, -1), !0), i === t.length - 1) return {
            operator: n,
            children: [o]
          };
          var d = t[i + 1];
          if ("<ident-token>" !== d.type) throw new Error("Invalid operator\nInvalid media condition");
          if (null !== n && n !== d.value) throw new Error("'".concat(d.value, "' and '").concat(n, "' must not be at same level\nInvalid media condition"));
          if ("or" === d.value && !r) throw new Error("Cannot use 'or' at top level of a media query\nInvalid media condition");
          if ("and" !== d.value && "or" !== d.value) throw new Error("Invalid operator: '".concat(d.value, "'\nInvalid media condition"));
          var f = e(t.slice(i + 2), r, d.value);
          return {
            operator: d.value,
            children: [o].concat(f.children)
          }
        },
        Jr = function(e) {
          if (e.length < 3 || "<(-token>" !== e[0].type || "<)-token>" !== e[e.length - 1].type) throw new Error("Invalid media feature");
          for (var t = [e[0]], r = 1; r < e.length; r++) {
            if (r < e.length - 2) {
              var n = e[r],
                o = e[r + 1],
                i = e[r + 2];
              if ("<number-token>" === n.type && n.value > 0 && "<delim-token>" === o.type && 47 === o.value && "<number-token>" === i.type && i.value > 0) {
                t.push({
                  type: "<ratio-token>",
                  numerator: n.value,
                  denominator: i.value,
                  wsBefore: n.wsBefore,
                  wsAfter: i.wsAfter
                }), r += 2;
                continue
              }
            }
            t.push(e[r])
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
                c = null,
                u = l.slice(0, 4);
              return "min-" === u ? (c = "min", l = l.slice(4)) : "max-" === u && (c = "max", l = l.slice(4)), s.wsBefore, s.wsAfter, {
                context: "value",
                prefix: c,
                feature: l,
                value: Nr(s, ["wsBefore", "wsAfter"])
              }
            }
          } else if (t.length >= 5) try {
            var d = en(t);
            return {
              context: "range",
              feature: d.featureName,
              range: d
            }
          } catch (e) {
            throw Ur("Invalid media feature", e)
          }
          throw new Error("Invalid media feature")
        },
        en = function(e) {
          var t, r, n, o;
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
            var s = 2 + (null !== (r = null === (t = i[a ? "leftOp" : "rightOp"]) || void 0 === t ? void 0 : t.length) && void 0 !== r ? r : 0),
              l = e[s];
            if (a) {
              if ("<ident-token>" !== l.type) throw new Error("Invalid range");
              if (i.featureName = l.value, e.length >= 7) {
                var c = e[s + 1],
                  u = e[s + 2];
                if ("<delim-token>" !== c.type) throw new Error("Invalid range");
                var d = c.value;
                if (60 === d) "<delim-token>" !== u.type || 61 !== u.value || u.wsBefore ? i.rightOp = "<" : i.rightOp = "<=";
                else {
                  if (62 !== d) throw new Error("Invalid range");
                  "<delim-token>" !== u.type || 61 !== u.value || u.wsBefore ? i.rightOp = ">" : i.rightOp = ">="
                }
                var f = e[s + 1 + (null !== (o = null === (n = i.rightOp) || void 0 === n ? void 0 : n.length) && void 0 !== o ? o : 0)];
                i.rightToken = f
              } else if (s + 2 !== e.length) throw new Error("Invalid range")
            } else i.rightToken = l;
            var h = null,
              p = i.leftToken,
              v = i.leftOp,
              g = i.featureName,
              m = i.rightOp,
              y = i.rightToken,
              b = null;
            if (null !== p)
              if ("<ident-token>" === p.type) {
                var w = p.type;
                "infinite" === (x = p.value) && (b = {
                  type: w,
                  value: x
                })
              } else "<number-token>" !== p.type && "<dimension-token>" !== p.type && "<ratio-token>" !== p.type || (p.wsBefore, p.wsAfter, b = Nr(p, ["wsBefore", "wsAfter"]));
            var _ = null;
            if (null !== y)
              if ("<ident-token>" === y.type) {
                var x;
                w = y.type, "infinite" === (x = y.value) && (_ = {
                  type: w,
                  value: x
                })
              } else "<number-token>" !== y.type && "<dimension-token>" !== y.type && "<ratio-token>" !== y.type || (y.wsBefore, y.wsAfter, _ = Nr(y, ["wsBefore", "wsAfter"]));
            if (null !== b && null !== _)
              if ("<" !== v && "<=" !== v || "<" !== m && "<=" !== m) {
                if (">" !== v && ">=" !== v || ">" !== m && ">=" !== m) throw new Error("Invalid range");
                h = {
                  leftToken: b,
                  leftOp: v,
                  featureName: g,
                  rightOp: m,
                  rightToken: _
                }
              } else h = {
                leftToken: b,
                leftOp: v,
                featureName: g,
                rightOp: m,
                rightToken: _
              };
            else(null === b && null === v && null !== m && null !== _ || null !== b && null !== v && null === m && null === _) && (h = {
              leftToken: b,
              leftOp: v,
              featureName: g,
              rightOp: m,
              rightToken: _
            });
            return h
          }
          throw new Error("Invalid range")
        };

      function tn(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function rn(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function nn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? rn(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = tn(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : rn(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function on(e, t) {
        if (null == e) return {};
        var r, n, o = function(e, t) {
          if (null == e) return {};
          var r, n, o = {},
            i = Object.keys(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
          return o
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
        }
        return o
      }

      function an(e, t) {
        for (var r in e) t(e[r], r)
      }

      function sn(e, t) {
        var r = {};
        for (var n in e) - 1 === t.indexOf(n) && (r[n] = e[n]);
        return r
      }
      class ln {
        constructor() {
          this.ruleset = new Map, this.precedenceLookup = new Map
        }
        findOrCreateCondition(e) {
          var t = this.ruleset.get(e);
          return t || (t = {
            query: e,
            rules: [],
            children: new ln
          }, this.ruleset.set(e, t)), t
        }
        getConditionalRulesetByPath(e) {
          var t = this;
          for (var r of e) {
            var n = t.findOrCreateCondition(r);
            t = n.children
          }
          return t
        }
        addRule(e, t, r) {
          var n = this.getConditionalRulesetByPath(r).findOrCreateCondition(t);
          if (!n) throw new Error("Failed to add conditional rule");
          n.rules.push(e)
        }
        addConditionPrecedence(e, t) {
          for (var r = this.getConditionalRulesetByPath(e), n = 0; n < t.length; n++) {
            var o, i = t[n],
              a = null !== (o = r.precedenceLookup.get(i)) && void 0 !== o ? o : new Set;
            for (var s of t.slice(n + 1)) a.add(s);
            r.precedenceLookup.set(i, a)
          }
        }
        isCompatible(e) {
          for (var [t, r] of this.precedenceLookup.entries())
            for (var n of r) {
              var o;
              if (null !== (o = e.precedenceLookup.get(n)) && void 0 !== o && o.has(t)) return !1
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
              rules: r,
              children: n
            }
            of e.ruleset.values()) {
            var o = this.ruleset.get(t);
            o ? (o.rules.push(...r), o.children.merge(n)) : this.ruleset.set(t, {
              query: t,
              rules: r,
              children: n
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
            r = function(r) {
              var o = e.ruleset.get(n);
              if (!o) throw new Error("Can't find condition for ".concat(n));
              var i = t.findIndex((e => r.has(e.query)));
              i > -1 ? t.splice(i, 0, o) : t.push(o)
            };
          for (var [n, o] of this.precedenceLookup.entries()) r(o);
          return t
        }
        renderToArray() {
          var e = [];
          for (var {
              query: t,
              rules: r,
              children: n
            }
            of this.getSortedRuleset()) {
            var o = {};
            for (var i of r) o[i.selector] = nn(nn({}, o[i.selector]), i.rule);
            Object.assign(o, ...n.renderToArray()), e.push({
              [t]: o
            })
          }
          return e
        }
      }
      var cn, un = {
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
        dn = Object.keys(un),
        fn = un,
        hn = (e, t) => new Error(Pr(cn || (cn = fr(['\n    Invalid media query: "', '"\n\n    ', "\n\n    Read more on MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries\n  "])), e, t)),
        pn = e => {
          if ("@media " === e) throw hn(e, "Query is empty");
          try {
            (function(e) {
              for (var t = e.length - 1; t >= 0; t--) e[t] = Wr(e[t])
            })(Kr(e))
          } catch (t) {
            throw hn(e, t.message)
          }
        },
        vn = ["vars"],
        gn = ["content"],
        mn = "__DECLARATION",
        yn = {
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

      function bn(e, t, r, n) {
        var o = e.slice(0, t),
          i = e.slice(r);
        return "".concat(o).concat(n).concat(i)
      }
      var wn = [...dn, "@layer", "@media", "@supports", "@container", "selectors"];
      class _n {
        constructor(e, t) {
          this.rules = [], this.conditionalRulesets = [new ln], this.fontFaceRules = [], this.keyframesRules = [], this.propertyRules = [], this.localClassNamesMap = new Map(e.map((e => [e, e]))), this.localClassNamesSearch = new cr(e), this.layers = new Map, this.composedClassLists = t.map((e => {
            var {
              identifier: t,
              classList: r
            } = e;
            return {
              identifier: t,
              regex: RegExp("(".concat(r, ")"), "g")
            }
          })).reverse()
        }
        processCssObj(e) {
          if ("fontFace" !== e.type)
            if ("property" !== e.type) {
              if ("keyframes" === e.type) return e.rule = Object.fromEntries(Object.entries(e.rule).map((e => {
                var [t, r] = e;
                return [t, this.transformVars(this.transformProperties(r))]
              }))), void this.keyframesRules.push(e);
              if (this.currConditionalRuleset = new ln, "layer" === e.type) {
                var t = "@layer ".concat(e.name);
                this.addLayer([t])
              } else {
                var r = sn(e.rule, wn);
                this.addRule({
                  selector: e.selector,
                  rule: r
                }), this.transformLayer(e, e.rule["@layer"]), this.transformMedia(e, e.rule["@media"]), this.transformSupports(e, e.rule["@supports"]), this.transformContainer(e, e.rule["@container"]), this.transformSimplePseudos(e, e.rule), this.transformSelectors(e, e.rule)
              }
              this.conditionalRulesets[this.conditionalRulesets.length - 1].mergeIfCompatible(this.currConditionalRuleset) || this.conditionalRulesets.push(this.currConditionalRuleset)
            } else this.propertyRules.push(e);
          else this.fontFaceRules.push(e.rule)
        }
        addConditionalRule(e, t) {
          var r = this.transformVars(this.transformProperties(e.rule)),
            n = this.transformSelector(e.selector);
          if (!this.currConditionalRuleset) throw new Error("Couldn't add conditional rule");
          var o = t[t.length - 1],
            i = t.slice(0, t.length - 1);
          this.currConditionalRuleset.addRule({
            selector: n,
            rule: r
          }, o, i)
        }
        addRule(e) {
          var t = this.transformVars(this.transformProperties(e.rule)),
            r = this.transformSelector(e.selector);
          this.rules.push({
            selector: r,
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
          return an(e, ((t, r) => {
            "number" != typeof t || 0 === t || yn[r] || (e[r] = "".concat(t, "px"))
          })), e
        }
        transformVars(e) {
          var {
            vars: t
          } = e, r = on(e, vn);
          return t ? nn(nn({}, function(e) {
            var t, r = {};
            for (var n in e) r[(e[n], t = n, nr(t))] = e[n];
            return r
          }(t)), r) : r
        }
        transformContent(e) {
          var {
            content: t
          } = e, r = on(e, gn);
          return void 0 === t ? r : nn({
            content: (Array.isArray(t) ? t : [t]).map((e => e && (e.includes('"') || e.includes("'") || /^([A-Za-z\-]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)(\s|$)/.test(e)) ? e : '"'.concat(e, '"')))
          }, r)
        }
        transformClassname(e) {
          return ".".concat(lr()(e, {
            isIdentifier: !0
          }))
        }
        transformSelector(e) {
          var t = e,
            r = function(e) {
              t = t.replace(o, (() => (function() {
                (() => {
                  if (ur.length < 1) throw new Error("No adapter configured");
                  return ur[ur.length - 1]
                })().markCompositionUsed(...arguments)
              }(e), e)))
            };
          for (var {
              identifier: n,
              regex: o
            }
            of this.composedClassLists) r(n);
          if (this.localClassNamesMap.has(t)) return this.transformClassname(t);
          for (var i = this.localClassNamesSearch.search(t), a = t.length, s = i.length - 1; s >= 0; s--) {
            var [l, [c]] = i[s], u = l - c.length + 1;
            a <= l || (a = u, "." !== t[u - 1] && (t = bn(t, u, l + 1, this.transformClassname(c))))
          }
          return t
        }
        transformSelectors(e, t, r) {
          an(t.selectors, ((t, n) => {
            if ("local" !== e.type) throw new Error("Selectors are not allowed within ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
            var o = this.transformSelector(n.replace(RegExp("&", "g"), e.selector));
            ((e, t) => {
              var r, n = () => {
                var r = new RegExp(".".concat(lr()(t, {
                  isIdentifier: !0
                }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")), "g");
                return e.replace(r, "&")
              };
              try {
                r = xr(e)
              } catch (e) {
                throw new Error("Invalid selector: ".concat(n()))
              }
              r.forEach((e => {
                try {
                  for (var r = e.length - 1; r >= -1; r--) {
                    if (!e[r]) throw new Error;
                    var o = e[r];
                    if ("child" === o.type || "parent" === o.type || "sibling" === o.type || "adjacent" === o.type || "descendant" === o.type) throw new Error;
                    if ("attribute" === o.type && "class" === o.name && o.value === t) return
                  }
                } catch (e) {
                  throw new Error(Pr(Lr || (Lr = fr(["\n        Invalid selector: ", "\n    \n        Style selectors must target the '&' character (along with any modifiers), e.g. ", " or ", ".\n        \n        This is to ensure that each style block only affects the styling of a single class.\n        \n        If your selector is targeting another class, you should move it to the style definition for that class, e.g. given we have styles for 'parent' and 'child' elements, instead of adding a selector of ", ") to 'parent', you should add ", " to 'child').\n        \n        If your selector is targeting something global, use the 'globalStyle' function instead, e.g. if you wanted to write ", ", you should instead write 'globalStyle(", ", { ... })'\n      "])), n(), "`${parent} &`", "`${parent} &:hover`", "`& ${child}`", "`${parent} &`", "`& h1`", "`${parent} h1`"))
                }
              }))
            })(o, e.selector);
            var i = {
              selector: o,
              rule: sn(t, wn)
            };
            r ? this.addConditionalRule(i, r) : this.addRule(i);
            var a = {
              type: "selector",
              selector: o,
              rule: t
            };
            this.transformLayer(a, t["@layer"], r), this.transformSupports(a, t["@supports"], r), this.transformMedia(a, t["@media"], r), this.transformContainer(a, t["@container"], r)
          }))
        }
        transformMedia(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          if (t)
            for (var [o, i] of(null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@media ".concat(e)))), Object.entries(t))) {
              var a = "@media ".concat(o);
              pn(a);
              var s = [...n, a];
              this.addConditionalRule({
                selector: e.selector,
                rule: sn(i, wn)
              }, s), "local" === e.type && (this.transformSimplePseudos(e, i, s), this.transformSelectors(e, i, s)), this.transformLayer(e, i["@layer"], s), this.transformSupports(e, i["@supports"], s), this.transformContainer(e, i["@container"], s)
            }
        }
        transformContainer(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@container ".concat(e)))), an(t, ((t, r) => {
            var o = "@container ".concat(r),
              i = [...n, o];
            this.addConditionalRule({
              selector: e.selector,
              rule: sn(t, wn)
            }, i), "local" === e.type && (this.transformSimplePseudos(e, t, i), this.transformSelectors(e, t, i)), this.transformLayer(e, t["@layer"], i), this.transformSupports(e, t["@supports"], i), this.transformMedia(e, t["@media"], i)
          })))
        }
        transformLayer(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@layer ".concat(e)))), an(t, ((t, r) => {
            var o = [...n, "@layer ".concat(r)];
            this.addLayer(o), this.addConditionalRule({
              selector: e.selector,
              rule: sn(t, wn)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformMedia(e, t["@media"], o), this.transformSupports(e, t["@supports"], o), this.transformContainer(e, t["@container"], o)
          })))
        }
        transformSupports(e, t) {
          var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
          t && (null === (r = this.currConditionalRuleset) || void 0 === r || r.addConditionPrecedence(n, Object.keys(t).map((e => "@supports ".concat(e)))), an(t, ((t, r) => {
            var o = [...n, "@supports ".concat(r)];
            this.addConditionalRule({
              selector: e.selector,
              rule: sn(t, wn)
            }, o), "local" === e.type && (this.transformSimplePseudos(e, t, o), this.transformSelectors(e, t, o)), this.transformLayer(e, t["@layer"], o), this.transformMedia(e, t["@media"], o), this.transformContainer(e, t["@container"], o)
          })))
        }
        transformSimplePseudos(e, t, r) {
          for (var n of Object.keys(t))
            if (fn[n]) {
              if ("local" !== e.type) throw new Error("Simple pseudos are not valid in ".concat("global" === e.type ? '"globalStyle"' : '"selectors"'));
              r ? this.addConditionalRule({
                selector: "".concat(e.selector).concat(n),
                rule: t[n]
              }, r) : this.addRule({
                conditions: r,
                selector: "".concat(e.selector).concat(n),
                rule: t[n]
              })
            }
        }
        toCss() {
          var e = [];
          for (var t of this.fontFaceRules) e.push(xn({
            "@font-face": t
          }));
          for (var r of this.propertyRules) e.push(xn({
            ["@property ".concat(r.name)]: r.rule
          }));
          for (var n of this.keyframesRules) e.push(xn({
            ["@keyframes ".concat(n.name)]: n.rule
          }));
          for (var o of this.layers.values()) {
            var [i, ...a] = o.reverse(), s = {
              [i]: mn
            };
            for (var l of a) s = {
              [l]: s
            };
            e.push(xn(s))
          }
          for (var c of this.rules) e.push(xn({
            [c.selector]: c.rule
          }));
          for (var u of this.conditionalRulesets)
            for (var d of u.renderToArray()) e.push(xn(d));
          return e.filter(Boolean)
        }
      }

      function xn(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          r = [],
          n = function(n) {
            var o, i = e[n];
            i && Array.isArray(i) ? r.push(...i.map((e => xn({
              [n]: e
            }, t)))) : i && "object" == typeof i ? 0 === Object.keys(i).length || r.push("".concat(t).concat(n, " {\n").concat(xn(i, t + "  "), "\n").concat(t, "}")) : i === mn ? r.push("".concat(t).concat(n, ";")) : r.push("".concat(t).concat(n.startsWith("--") ? n : (o = n, o.replace(/([A-Z])/g, "-$1").replace(/^ms-/, "-ms-").toLowerCase()), ": ").concat(i, ";"))
          };
        for (var o of Object.keys(e)) n(o);
        return r.join("\n")
      }
      var Sn = r(87144);
      const Cn = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date,
        jn = new Set,
        kn = "object" == typeof Sn && Sn ? Sn : {},
        On = (e, t, r, n) => {
          "function" == typeof kn.emitWarning ? kn.emitWarning(e, t, r, n) : console.error(`[${r}] ${t}: ${e}`)
        };
      let Pn = globalThis.AbortController,
        En = globalThis.AbortSignal;
      if (void 0 === Pn) {
        En = class {
          onabort;
          _onabort = [];
          reason;
          aborted = !1;
          addEventListener(e, t) {
            this._onabort.push(t)
          }
        }, Pn = class {
          constructor() {
            t()
          }
          signal = (() => new En)();
          abort(e) {
            if (!this.signal.aborted) {
              this.signal.reason = e, this.signal.aborted = !0;
              for (const t of this.signal._onabort) t(e);
              this.signal.onabort?.(e)
            }
          }
        };
        let e = "1" !== kn.env?.LRU_CACHE_IGNORE_AC_WARNING;
        const t = () => {
          e && (e = !1, On("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t))
        }
      }
      Symbol("type");
      const Nn = e => e && e === Math.floor(e) && e > 0 && isFinite(e),
        Tn = e => Nn(e) ? e <= Math.pow(2, 8) ? Uint8Array : e <= Math.pow(2, 16) ? Uint16Array : e <= Math.pow(2, 32) ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? Ln : null : null;
      class Ln extends Array {
        constructor(e) {
          super(e), this.fill(0)
        }
      }
      class Dn {
        heap;
        length;
        static #e = !1;
        static create(e) {
          const t = Tn(e);
          if (!t) return [];
          Dn.#e = !0;
          const r = new Dn(e, t);
          return Dn.#e = !1, r
        }
        constructor(e, t) {
          if (!Dn.#e) throw new TypeError("instantiate Stack using Stack.create(n)");
          this.heap = new t(e), this.length = 0
        }
        push(e) {
          this.heap[this.length++] = e
        }
        pop() {
          return this.heap[--this.length]
        }
      }
      class Mn {
        #t;
        #r;
        #n;
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
        #c;
        #u;
        #d;
        #f;
        #h;
        #p;
        #v;
        #g;
        #m;
        #y;
        #b;
        #w;
        #_;
        #x;
        #S;
        static unsafeExposeInternals(e) {
          return {
            starts: e.#b,
            ttls: e.#w,
            sizes: e.#y,
            keyMap: e.#c,
            keyList: e.#u,
            valList: e.#d,
            next: e.#f,
            prev: e.#h,
            get head() {
              return e.#p
            },
            get tail() {
              return e.#v
            },
            free: e.#g,
            isBackgroundFetch: t => e.#C(t),
            backgroundFetch: (t, r, n, o) => e.#j(t, r, n, o),
            moveToTail: t => e.#k(t),
            indexes: t => e.#O(t),
            rindexes: t => e.#P(t),
            isStale: t => e.#E(t)
          }
        }
        get max() {
          return this.#t
        }
        get maxSize() {
          return this.#r
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
          return this.#n
        }
        get disposeAfter() {
          return this.#o
        }
        constructor(e) {
          const {
            max: t = 0,
            ttl: r,
            ttlResolution: n = 1,
            ttlAutopurge: o,
            updateAgeOnGet: i,
            updateAgeOnHas: a,
            allowStale: s,
            dispose: l,
            disposeAfter: c,
            noDisposeOnSet: u,
            noUpdateTTL: d,
            maxSize: f = 0,
            maxEntrySize: h = 0,
            sizeCalculation: p,
            fetchMethod: v,
            memoMethod: g,
            noDeleteOnFetchRejection: m,
            noDeleteOnStaleGet: y,
            allowStaleOnFetchRejection: b,
            allowStaleOnFetchAbort: w,
            ignoreFetchAbort: _
          } = e;
          if (0 !== t && !Nn(t)) throw new TypeError("max option must be a nonnegative integer");
          const x = t ? Tn(t) : Array;
          if (!x) throw new Error("invalid max value: " + t);
          if (this.#t = t, this.#r = f, this.maxEntrySize = h || this.#r, this.sizeCalculation = p, this.sizeCalculation) {
            if (!this.#r && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
            if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function")
          }
          if (void 0 !== g && "function" != typeof g) throw new TypeError("memoMethod must be a function if defined");
          if (this.#a = g, void 0 !== v && "function" != typeof v) throw new TypeError("fetchMethod must be a function if specified");
          if (this.#i = v, this.#x = !!v, this.#c = new Map, this.#u = new Array(t).fill(void 0), this.#d = new Array(t).fill(void 0), this.#f = new x(t), this.#h = new x(t), this.#p = 0, this.#v = 0, this.#g = Dn.create(t), this.#s = 0, this.#l = 0, "function" == typeof l && (this.#n = l), "function" == typeof c ? (this.#o = c, this.#m = []) : (this.#o = void 0, this.#m = void 0), this.#_ = !!this.#n, this.#S = !!this.#o, this.noDisposeOnSet = !!u, this.noUpdateTTL = !!d, this.noDeleteOnFetchRejection = !!m, this.allowStaleOnFetchRejection = !!b, this.allowStaleOnFetchAbort = !!w, this.ignoreFetchAbort = !!_, 0 !== this.maxEntrySize) {
            if (0 !== this.#r && !Nn(this.#r)) throw new TypeError("maxSize must be a positive integer if specified");
            if (!Nn(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
            this.#N()
          }
          if (this.allowStale = !!s, this.noDeleteOnStaleGet = !!y, this.updateAgeOnGet = !!i, this.updateAgeOnHas = !!a, this.ttlResolution = Nn(n) || 0 === n ? n : 1, this.ttlAutopurge = !!o, this.ttl = r || 0, this.ttl) {
            if (!Nn(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
            this.#T()
          }
          if (0 === this.#t && 0 === this.ttl && 0 === this.#r) throw new TypeError("At least one of max, maxSize, or ttl is required");
          if (!this.ttlAutopurge && !this.#t && !this.#r) {
            const e = "LRU_CACHE_UNBOUNDED";
            (e => !jn.has(e))(e) && (jn.add(e), On("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, Mn))
          }
        }
        getRemainingTTL(e) {
          return this.#c.has(e) ? 1 / 0 : 0
        }
        #T() {
          var e = this;
          const t = new Ln(this.#t),
            r = new Ln(this.#t);
          this.#w = t, this.#b = r, this.#L = function(n, o) {
            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Cn.now();
            if (r[n] = 0 !== o ? i : 0, t[n] = o, 0 !== o && e.ttlAutopurge) {
              const t = setTimeout((() => {
                e.#E(n) && e.#D(e.#u[n], "expire")
              }), o + 1);
              t.unref && t.unref()
            }
          }, this.#M = e => {
            r[e] = 0 !== t[e] ? Cn.now() : 0
          }, this.#R = (e, i) => {
            if (t[i]) {
              const a = t[i],
                s = r[i];
              if (!a || !s) return;
              e.ttl = a, e.start = s, e.now = n || o();
              const l = e.now - s;
              e.remainingTTL = a - l
            }
          };
          let n = 0;
          const o = () => {
            const e = Cn.now();
            if (this.ttlResolution > 0) {
              n = e;
              const t = setTimeout((() => n = 0), this.ttlResolution);
              t.unref && t.unref()
            }
            return e
          };
          this.getRemainingTTL = e => {
            const i = this.#c.get(e);
            if (void 0 === i) return 0;
            const a = t[i],
              s = r[i];
            return a && s ? a - ((n || o()) - s) : 1 / 0
          }, this.#E = e => {
            const i = r[e],
              a = t[e];
            return !!a && !!i && (n || o()) - i > a
          }
        }
        #M = () => {};
        #R = () => {};
        #L = () => {};
        #E = () => !1;
        #N() {
          const e = new Ln(this.#t);
          this.#l = 0, this.#y = e, this.#z = t => {
            this.#l -= e[t], e[t] = 0
          }, this.#A = (e, t, r, n) => {
            if (this.#C(t)) return 0;
            if (!Nn(r)) {
              if (!n) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
              if ("function" != typeof n) throw new TypeError("sizeCalculation must be a function");
              if (r = n(t, e), !Nn(r)) throw new TypeError("sizeCalculation return invalid (expect positive integer)")
            }
            return r
          }, this.#I = (t, r, n) => {
            if (e[t] = r, this.#r) {
              const r = this.#r - e[t];
              for (; this.#l > r;) this.#V(!0)
            }
            this.#l += e[t], n && (n.entrySize = r, n.totalCalculatedSize = this.#l)
          }
        }
        #z = e => {};
        #I = (e, t, r) => {};
        #A = (e, t, r, n) => {
          if (r || n) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
          return 0
        };
        #O() {
          var e = this;
          let {
            allowStale: t = this.allowStale
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function*() {
            if (e.#s)
              for (let r = e.#v; e.#F(r) && (!t && e.#E(r) || (yield r), r !== e.#p);) r = e.#h[r]
          }()
        }
        #P() {
          var e = this;
          let {
            allowStale: t = this.allowStale
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function*() {
            if (e.#s)
              for (let r = e.#p; e.#F(r) && (!t && e.#E(r) || (yield r), r !== e.#v);) r = e.#f[r]
          }()
        }
        #F(e) {
          return void 0 !== e && this.#c.get(this.#u[e]) === e
        }* entries() {
          for (const e of this.#O()) void 0 === this.#d[e] || void 0 === this.#u[e] || this.#C(this.#d[e]) || (yield [this.#u[e], this.#d[e]])
        }* rentries() {
          for (const e of this.#P()) void 0 === this.#d[e] || void 0 === this.#u[e] || this.#C(this.#d[e]) || (yield [this.#u[e], this.#d[e]])
        }* keys() {
          for (const e of this.#O()) {
            const t = this.#u[e];
            void 0 === t || this.#C(this.#d[e]) || (yield t)
          }
        }* rkeys() {
          for (const e of this.#P()) {
            const t = this.#u[e];
            void 0 === t || this.#C(this.#d[e]) || (yield t)
          }
        }* values() {
          for (const e of this.#O()) void 0 === this.#d[e] || this.#C(this.#d[e]) || (yield this.#d[e])
        }* rvalues() {
          for (const e of this.#P()) void 0 === this.#d[e] || this.#C(this.#d[e]) || (yield this.#d[e])
        } [Symbol.iterator]() {
          return this.entries()
        } [Symbol.toStringTag] = "LRUCache";
        find(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          for (const r of this.#O()) {
            const n = this.#d[r],
              o = this.#C(n) ? n.__staleWhileFetching : n;
            if (void 0 !== o && e(o, this.#u[r], this)) return this.get(this.#u[r], t)
          }
        }
        forEach(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
          for (const r of this.#O()) {
            const n = this.#d[r],
              o = this.#C(n) ? n.__staleWhileFetching : n;
            void 0 !== o && e.call(t, o, this.#u[r], this)
          }
        }
        rforEach(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this;
          for (const r of this.#P()) {
            const n = this.#d[r],
              o = this.#C(n) ? n.__staleWhileFetching : n;
            void 0 !== o && e.call(t, o, this.#u[r], this)
          }
        }
        purgeStale() {
          let e = !1;
          for (const t of this.#P({
              allowStale: !0
            })) this.#E(t) && (this.#D(this.#u[t], "expire"), e = !0);
          return e
        }
        info(e) {
          const t = this.#c.get(e);
          if (void 0 === t) return;
          const r = this.#d[t],
            n = this.#C(r) ? r.__staleWhileFetching : r;
          if (void 0 === n) return;
          const o = {
            value: n
          };
          if (this.#w && this.#b) {
            const e = this.#w[t],
              r = this.#b[t];
            if (e && r) {
              const t = e - (Cn.now() - r);
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
            const r = this.#u[t],
              n = this.#d[t],
              o = this.#C(n) ? n.__staleWhileFetching : n;
            if (void 0 === o || void 0 === r) continue;
            const i = {
              value: o
            };
            if (this.#w && this.#b) {
              i.ttl = this.#w[t];
              const e = Cn.now() - this.#b[t];
              i.start = Math.floor(Date.now() - e)
            }
            this.#y && (i.size = this.#y[t]), e.unshift([r, i])
          }
          return e
        }
        load(e) {
          this.clear();
          for (const [t, r] of e) {
            if (r.start) {
              const e = Date.now() - r.start;
              r.start = Cn.now() - e
            }
            this.set(t, r.value, r)
          }
        }
        set(e, t) {
          let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if (void 0 === t) return this.delete(e), this;
          const {
            ttl: n = this.ttl,
            start: o,
            noDisposeOnSet: i = this.noDisposeOnSet,
            sizeCalculation: a = this.sizeCalculation,
            status: s
          } = r;
          let {
            noUpdateTTL: l = this.noUpdateTTL
          } = r;
          const c = this.#A(e, t, r.size || 0, a);
          if (this.maxEntrySize && c > this.maxEntrySize) return s && (s.set = "miss", s.maxEntrySizeExceeded = !0), this.#D(e, "set"), this;
          let u = 0 === this.#s ? void 0 : this.#c.get(e);
          if (void 0 === u) u = 0 === this.#s ? this.#v : 0 !== this.#g.length ? this.#g.pop() : this.#s === this.#t ? this.#V(!1) : this.#s, this.#u[u] = e, this.#d[u] = t, this.#c.set(e, u), this.#f[this.#v] = u, this.#h[u] = this.#v, this.#v = u, this.#s++, this.#I(u, c, s), s && (s.set = "add"), l = !1;
          else {
            this.#k(u);
            const r = this.#d[u];
            if (t !== r) {
              if (this.#x && this.#C(r)) {
                r.__abortController.abort(new Error("replaced"));
                const {
                  __staleWhileFetching: t
                } = r;
                void 0 === t || i || (this.#_ && this.#n?.(t, e, "set"), this.#S && this.#m?.push([t, e, "set"]))
              } else i || (this.#_ && this.#n?.(r, e, "set"), this.#S && this.#m?.push([r, e, "set"]));
              if (this.#z(u), this.#I(u, c, s), this.#d[u] = t, s) {
                s.set = "replace";
                const e = r && this.#C(r) ? r.__staleWhileFetching : r;
                void 0 !== e && (s.oldValue = e)
              }
            } else s && (s.set = "update")
          }
          if (0 === n || this.#w || this.#T(), this.#w && (l || this.#L(u, n, o), s && this.#R(s, u)), !i && this.#S && this.#m) {
            const e = this.#m;
            let t;
            for (; t = e?.shift();) this.#o?.(...t)
          }
          return this
        }
        pop() {
          try {
            for (; this.#s;) {
              const e = this.#d[this.#p];
              if (this.#V(!0), this.#C(e)) {
                if (e.__staleWhileFetching) return e.__staleWhileFetching
              } else if (void 0 !== e) return e
            }
          } finally {
            if (this.#S && this.#m) {
              const e = this.#m;
              let t;
              for (; t = e?.shift();) this.#o?.(...t)
            }
          }
        }
        #V(e) {
          const t = this.#p,
            r = this.#u[t],
            n = this.#d[t];
          return this.#x && this.#C(n) ? n.__abortController.abort(new Error("evicted")) : (this.#_ || this.#S) && (this.#_ && this.#n?.(n, r, "evict"), this.#S && this.#m?.push([n, r, "evict"])), this.#z(t), e && (this.#u[t] = void 0, this.#d[t] = void 0, this.#g.push(t)), 1 === this.#s ? (this.#p = this.#v = 0, this.#g.length = 0) : this.#p = this.#f[t], this.#c.delete(r), this.#s--, t
        }
        has(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
            updateAgeOnHas: r = this.updateAgeOnHas,
            status: n
          } = t, o = this.#c.get(e);
          if (void 0 !== o) {
            const e = this.#d[o];
            if (this.#C(e) && void 0 === e.__staleWhileFetching) return !1;
            if (!this.#E(o)) return r && this.#M(o), n && (n.has = "hit", this.#R(n, o)), !0;
            n && (n.has = "stale", this.#R(n, o))
          } else n && (n.has = "miss");
          return !1
        }
        peek(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
            allowStale: r = this.allowStale
          } = t, n = this.#c.get(e);
          if (void 0 === n || !r && this.#E(n)) return;
          const o = this.#d[n];
          return this.#C(o) ? o.__staleWhileFetching : o
        }
        #j(e, t, r, n) {
          var o = this;
          const i = void 0 === t ? void 0 : this.#d[t];
          if (this.#C(i)) return i;
          const a = new Pn,
            {
              signal: s
            } = r;
          s?.addEventListener("abort", (() => a.abort(s.reason)), {
            signal: a.signal
          });
          const l = {
              signal: a.signal,
              options: r,
              context: n
            },
            c = function(n) {
              let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              const {
                aborted: s
              } = a.signal, c = r.ignoreFetchAbort && void 0 !== n;
              if (r.status && (s && !i ? (r.status.fetchAborted = !0, r.status.fetchError = a.signal.reason, c && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), s && !c && !i) return u(a.signal.reason);
              const f = d;
              return o.#d[t] === d && (void 0 === n ? f.__staleWhileFetching ? o.#d[t] = f.__staleWhileFetching : o.#D(e, "fetch") : (r.status && (r.status.fetchUpdated = !0), o.set(e, n, l.options))), n
            },
            u = n => {
              const {
                aborted: o
              } = a.signal, i = o && r.allowStaleOnFetchAbort, s = i || r.allowStaleOnFetchRejection, l = s || r.noDeleteOnFetchRejection, c = d;
              if (this.#d[t] === d && (l && void 0 !== c.__staleWhileFetching ? i || (this.#d[t] = c.__staleWhileFetching) : this.#D(e, "fetch")), s) return r.status && void 0 !== c.__staleWhileFetching && (r.status.returnedStale = !0), c.__staleWhileFetching;
              if (c.__returned === c) throw n
            };
          r.status && (r.status.fetchDispatched = !0);
          const d = new Promise(((t, n) => {
              const o = this.#i?.(e, i, l);
              o && o instanceof Promise && o.then((e => t(void 0 === e ? void 0 : e)), n), a.signal.addEventListener("abort", (() => {
                r.ignoreFetchAbort && !r.allowStaleOnFetchAbort || (t(void 0), r.allowStaleOnFetchAbort && (t = e => c(e, !0)))
              }))
            })).then(c, (e => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = e), u(e)))),
            f = Object.assign(d, {
              __abortController: a,
              __staleWhileFetching: i,
              __returned: void 0
            });
          return void 0 === t ? (this.set(e, f, {
            ...l.options,
            status: void 0
          }), t = this.#c.get(e)) : this.#d[t] = f, f
        }
        #C(e) {
          if (!this.#x) return !1;
          const t = e;
          return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof Pn
        }
        async fetch(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
            allowStale: r = this.allowStale,
            updateAgeOnGet: n = this.updateAgeOnGet,
            noDeleteOnStaleGet: o = this.noDeleteOnStaleGet,
            ttl: i = this.ttl,
            noDisposeOnSet: a = this.noDisposeOnSet,
            size: s = 0,
            sizeCalculation: l = this.sizeCalculation,
            noUpdateTTL: c = this.noUpdateTTL,
            noDeleteOnFetchRejection: u = this.noDeleteOnFetchRejection,
            allowStaleOnFetchRejection: d = this.allowStaleOnFetchRejection,
            ignoreFetchAbort: f = this.ignoreFetchAbort,
            allowStaleOnFetchAbort: h = this.allowStaleOnFetchAbort,
            context: p,
            forceRefresh: v = !1,
            status: g,
            signal: m
          } = t;
          if (!this.#x) return g && (g.fetch = "get"), this.get(e, {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: o,
            status: g
          });
          const y = {
            allowStale: r,
            updateAgeOnGet: n,
            noDeleteOnStaleGet: o,
            ttl: i,
            noDisposeOnSet: a,
            size: s,
            sizeCalculation: l,
            noUpdateTTL: c,
            noDeleteOnFetchRejection: u,
            allowStaleOnFetchRejection: d,
            allowStaleOnFetchAbort: h,
            ignoreFetchAbort: f,
            status: g,
            signal: m
          };
          let b = this.#c.get(e);
          if (void 0 === b) {
            g && (g.fetch = "miss");
            const t = this.#j(e, b, y, p);
            return t.__returned = t
          } {
            const t = this.#d[b];
            if (this.#C(t)) {
              const e = r && void 0 !== t.__staleWhileFetching;
              return g && (g.fetch = "inflight", e && (g.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t
            }
            const o = this.#E(b);
            if (!v && !o) return g && (g.fetch = "hit"), this.#k(b), n && this.#M(b), g && this.#R(g, b), t;
            const i = this.#j(e, b, y, p),
              a = void 0 !== i.__staleWhileFetching && r;
            return g && (g.fetch = o ? "stale" : "refresh", a && o && (g.returnedStale = !0)), a ? i.__staleWhileFetching : i.__returned = i
          }
        }
        async forceFetch(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const r = await this.fetch(e, t);
          if (void 0 === r) throw new Error("fetch() returned undefined");
          return r
        }
        memo(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const r = this.#a;
          if (!r) throw new Error("no memoMethod provided to constructor");
          const {
            context: n,
            forceRefresh: o,
            ...i
          } = t, a = this.get(e, i);
          if (!o && void 0 !== a) return a;
          const s = r(e, a, {
            options: i,
            context: n
          });
          return this.set(e, s, i), s
        }
        get(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
            allowStale: r = this.allowStale,
            updateAgeOnGet: n = this.updateAgeOnGet,
            noDeleteOnStaleGet: o = this.noDeleteOnStaleGet,
            status: i
          } = t, a = this.#c.get(e);
          if (void 0 !== a) {
            const t = this.#d[a],
              s = this.#C(t);
            return i && this.#R(i, a), this.#E(a) ? (i && (i.get = "stale"), s ? (i && r && void 0 !== t.__staleWhileFetching && (i.returnedStale = !0), r ? t.__staleWhileFetching : void 0) : (o || this.#D(e, "expire"), i && r && (i.returnedStale = !0), r ? t : void 0)) : (i && (i.get = "hit"), s ? t.__staleWhileFetching : (this.#k(a), n && this.#M(a), t))
          }
          i && (i.get = "miss")
        }
        #q(e, t) {
          this.#h[t] = e, this.#f[e] = t
        }
        #k(e) {
          e !== this.#v && (e === this.#p ? this.#p = this.#f[e] : this.#q(this.#h[e], this.#f[e]), this.#q(this.#v, e), this.#v = e)
        }
        delete(e) {
          return this.#D(e, "delete")
        }
        #D(e, t) {
          let r = !1;
          if (0 !== this.#s) {
            const n = this.#c.get(e);
            if (void 0 !== n)
              if (r = !0, 1 === this.#s) this.#B(t);
              else {
                this.#z(n);
                const r = this.#d[n];
                if (this.#C(r) ? r.__abortController.abort(new Error("deleted")) : (this.#_ || this.#S) && (this.#_ && this.#n?.(r, e, t), this.#S && this.#m?.push([r, e, t])), this.#c.delete(e), this.#u[n] = void 0, this.#d[n] = void 0, n === this.#v) this.#v = this.#h[n];
                else if (n === this.#p) this.#p = this.#f[n];
                else {
                  const e = this.#h[n];
                  this.#f[e] = this.#f[n];
                  const t = this.#f[n];
                  this.#h[t] = this.#h[n]
                }
                this.#s--, this.#g.push(n)
              }
          }
          if (this.#S && this.#m?.length) {
            const e = this.#m;
            let t;
            for (; t = e?.shift();) this.#o?.(...t)
          }
          return r
        }
        clear() {
          return this.#B("delete")
        }
        #B(e) {
          for (const t of this.#P({
              allowStale: !0
            })) {
            const r = this.#d[t];
            if (this.#C(r)) r.__abortController.abort(new Error("deleted"));
            else {
              const n = this.#u[t];
              this.#_ && this.#n?.(r, n, e), this.#S && this.#m?.push([r, n, e])
            }
          }
          if (this.#c.clear(), this.#d.fill(void 0), this.#u.fill(void 0), this.#w && this.#b && (this.#w.fill(0), this.#b.fill(0)), this.#y && this.#y.fill(0), this.#p = 0, this.#v = 0, this.#g.length = 0, this.#l = 0, this.#s = 0, this.#S && this.#m) {
            const e = this.#m;
            let t;
            for (; t = e?.shift();) this.#o?.(...t)
          }
        }
      }
      r(98398);
      var Rn = new Set,
        zn = [],
        An = [];
      dr || (e => {
        if (!e) throw new Error('No adapter provided when calling "setAdapter"');
        dr = !0, ur.push(e)
      })({
        appendCss: e => {
          An.push(e)
        },
        registerClassName: e => {
          Rn.add(e)
        },
        registerComposition: e => {
          zn.push(e)
        },
        markCompositionUsed: () => {},
        onEndFileScope: e => {
          var t = function(e) {
            var {
              localClassNames: t,
              cssObjs: r,
              composedClassLists: n
            } = e, o = new _n(t, n);
            for (var i of r) o.processCssObj(i);
            return o.toCss()
          }({
            localClassNames: Array.from(Rn),
            composedClassLists: zn,
            cssObjs: An
          }).join("\n");
          (e => {
            var {
              fileScope: t,
              css: r
            } = e, n = t.packageName ? [t.packageName, t.filePath].join("/") : t.filePath, o = rr[n];
            if (!o) {
              var i = document.createElement("style");
              t.packageName && i.setAttribute("data-package", t.packageName), i.setAttribute("data-file", t.filePath), i.setAttribute("type", "text/css"), o = rr[n] = i, document.head.appendChild(i)
            }
            o.innerHTML = r
          })({
            fileScope: e,
            css: t
          }), An = []
        },
        getIdentOption: () => "short"
      });
      new Mn({
        max: 500
      });
      var In = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        Vn = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        Fn = "foundry_nk7jgu_nu8bkp2",
        qn = "foundry_nk7jgu_nu8bkp4",
        Bn = "foundry_nk7jgu_nu8bkp1",
        $n = "foundry_nk7jgu_nu8bkp3",
        Hn = "--foundry_65afb887",
        Wn = "foundry_nk7jgu_nu8bkp0";
      const Gn = (0, s.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: Vn,
          platformScaleBreakpoints: In,
          locale: "en-US"
        }),
        Un = () => {
          const {
            platformScale: e
          } = (0, s.useContext)(Gn);
          return e
        },
        Kn = (e, t) => "dark" === e ? "more" === t ? qn : Fn : "more" === t ? $n : Bn;
      const Xn = () => a.X3 ? null : document.body;

      function Yn(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Zn(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Qn(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Zn(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Yn(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zn(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Jn(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, s.forwardRef)((({
        children: e,
        className: t,
        container: r = Xn(),
        asChild: n,
        colorScheme: o,
        defaultColorScheme: c,
        contrastMode: u,
        defaultContrastMode: d,
        platformScaleBreakpoints: f,
        platformScaleRatios: h,
        defaultPlatformScale: p,
        platformScale: v,
        locale: g = "en-US"
      }, m) => {
        const y = (0, s.useRef)(null),
          b = F(y, m),
          w = (0, s.useRef)(r),
          {
            ratio: _,
            scale: x
          } = function(e) {
            const t = (0, s.useMemo)((() => ({
                ...Vn,
                ...e.platformScaleRatios
              })), [e.platformScaleRatios]),
              r = (0, s.useMemo)((() => ({
                ...In,
                ...e.platformScaleBreakpoints
              })), [e.platformScaleBreakpoints]),
              [n, o] = (0, s.useState)(e.platformScale || e.defaultPlatformScale),
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
                for (const e in r) {
                  const t = window.matchMedia(r[e]),
                    n = t => {
                      t.matches && o(e)
                    };
                  t.addEventListener("change", n), t.matches && o(e), i.current.push({
                    handler: n,
                    matchMedia: t
                  })
                }
              }
            })(), l)), [r, e.platformScale]), {
              scale: n,
              ratio: t[n]
            }
          }({
            platformScaleBreakpoints: f,
            platformScaleRatios: h,
            defaultPlatformScale: p,
            platformScale: v
          }),
          {
            appearanceClass: S,
            otherAppearanceClasses: C,
            providerColor: j,
            providerContrast: k
          } = function({
            colorScheme: e,
            defaultColorScheme: t = "dark",
            contrastMode: r,
            defaultContrastMode: n = "normal"
          }) {
            const o = I("(prefers-color-scheme: light)"),
              i = I("(prefers-color-scheme: dark)"),
              a = I("(prefers-contrast: more)"),
              l = "system" !== e && e || o && "light" || i && "dark" || t,
              c = r || a && "more" || n,
              u = (0, s.useMemo)((() => Kn(l, c)), [l, c]),
              d = (0, s.useMemo)((() => ((e, t) => {
                const r = Kn(e, t);
                return [Bn, Fn, $n, qn].filter((e => e !== r))
              })(l, c)), [l, c]);
            return {
              appearanceClass: u,
              otherAppearanceClasses: d,
              providerColor: l,
              providerContrast: c
            }
          }({
            colorScheme: o,
            defaultColorScheme: c,
            contrastMode: u,
            defaultContrastMode: d
          });
        return ((e, t, r, n, o) => {
          const i = V(o),
            a = V(e.current);
          (0, s.useEffect)((() => {
            e.current?.classList.contains(Wn) || e.current?.classList.add(Wn), e.current?.classList.add(r), e.current?.classList.remove(...n), i && o && e.current?.classList.contains(i) ? e.current?.classList.replace(i, o) : i && !o && e.current?.classList.contains(i) ? e.current?.classList.remove(i) : o && e.current?.classList.add(o)
          }), [r, o]), (0, s.useEffect)((() => {
            e.current?.style.setProperty(Hn, t.toString())
          }), [t]), (0, s.useEffect)((() => {
            a?.classList.remove(Wn), a?.classList.remove(r), a?.style.removeProperty(Hn), o && a?.classList.remove(o)
          }), [a])
        })(n ? y : w, _, S, C, t), (0, i.jsx)(Gn.Provider, {
          value: {
            locale: g,
            defaultColorScheme: c,
            colorScheme: j,
            defaultContrastMode: d,
            contrastMode: k,
            defaultPlatformScale: p,
            platformScale: x,
            platformScaleRatios: h,
            platformScaleBreakpoints: f
          },
          children: n ? (0, i.jsx)(l.Slot, {
            ref: b,
            children: e
          }) : e
        })
      }));
      var eo = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        to = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Qn(Qn({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) eo(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Jn(e.variantClassNames, (e => Jn(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        ro = to({
          defaultClassName: "foundry_hcgxh_8kowh41 foundry_hcgxh_1d5mo5m0 foundry_hcgxh_17pcofy0",
          variantClassNames: {
            appearance: {
              primary: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua1",
              secondary: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua2",
              tertiary: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua3",
              ghost: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua4",
              danger: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua6",
              information: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua5"
            },
            size: {
              MD: "foundry_hcgxh_17pcofy8 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdy foundry_hcgxh_tdsdcd11",
              LG: "foundry_hcgxh_17pcofy9 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd11"
            },
            fullWidth: {
              true: "foundry_hcgxh_17pcofya",
              false: "foundry_hcgxh_17pcofyb"
            },
            iconLeft: {
              true: "foundry_hcgxh_17pcofyc",
              false: "foundry_hcgxh_17pcofyd"
            },
            iconRight: {
              true: "foundry_hcgxh_17pcofye",
              false: "foundry_hcgxh_17pcofyf"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              size: "MD",
              iconLeft: !0
            }, "foundry_hcgxh_17pcofyg"],
            [{
              size: "MD",
              iconRight: !0
            }, "foundry_hcgxh_17pcofyh"],
            [{
              size: "LG",
              iconLeft: !0
            }, "foundry_hcgxh_17pcofyi"],
            [{
              size: "LG",
              iconRight: !0
            }, "foundry_hcgxh_17pcofyj"],
            [{
              size: "MD",
              appearance: "ghost"
            }, "foundry_hcgxh_17pcofyk"],
            [{
              size: "LG",
              appearance: "ghost"
            }, "foundry_hcgxh_17pcofyl"]
          ]
        }),
        no = to({
          defaultClassName: "foundry_hcgxh_17pcofyn",
          variantClassNames: {
            fullWidth: {
              true: "foundry_hcgxh_17pcofyo",
              false: "foundry_hcgxh_17pcofyp"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, s.forwardRef)((({
        testId: e,
        asChild: t,
        className: r,
        children: n,
        onClick: o,
        iconLeft: c,
        iconLeftLabel: u,
        iconRight: d,
        iconRightLabel: f,
        appearance: h,
        size: p = "MD",
        fullWidth: v = !1,
        ...g
      }, m) => {
        const y = (0, s.useRef)(null),
          b = F(y, m),
          w = Un(),
          _ = "string" == typeof p ? p : p?.[w] ?? p.default ?? "MD",
          {
            events: x,
            others: S
          } = (0, a.bZ)(g, {
            onPress: !1
          }),
          {
            buttonProps: C,
            isPressed: j
          } = tr({
            ...S,
            elementType: "button",
            preventFocusOnPress: !0,
            onPress: e => S.onPress?.(e) ?? o?.(e)
          }, y),
          k = (0, a.v6)({
            ...x,
            role: "button",
            "data-pressed": j,
            "data-testid": e,
            className: ro({
              appearance: h,
              size: _,
              fullWidth: v,
              iconLeft: !!c,
              iconRight: !!d
            })
          }, {
            ...C,
            className: r
          }),
          O = c && z[c],
          P = d && z[d],
          E = t ? l.Slot : "button",
          N = v && (P || P && O);
        return (0, i.jsxs)(E, {
          ref: b,
          ...k,
          children: [N && (0, i.jsx)("div", {
            className: "foundry_hcgxh_17pcofyq"
          }), O && (0, i.jsx)(O, {
            label: u || "",
            size: _,
            className: "foundry_hcgxh_17pcofym"
          }), (0, i.jsx)(l.Slottable, {
            children: n
          }), P && (0, i.jsx)(P, {
            label: f || "",
            size: _,
            className: no({
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
      var co = _o();
      io.onFinish = e => mo(e, co);
      var uo = [];
      io.setTimeout = (e, t) => {
        const r = io.now() + t,
          n = () => {
            const e = uo.findIndex((e => e.cancel == n));
            ~e && uo.splice(e, 1), vo -= ~e ? 1 : 0
          },
          o = {
            time: r,
            handler: e,
            cancel: n
          };
        return uo.splice(fo(r), 0, o), vo += 1, yo(), o
      };
      var fo = e => ~(~uo.findIndex((t => t.time > e)) || ~uo.length);
      io.cancel = e => {
        so.delete(e), lo.delete(e), co.delete(e), oo.delete(e), ao.delete(e)
      }, io.sync = e => {
        go = !0, io.batchedUpdates(e), go = !1
      }, io.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function n(...e) {
          t = e, io.onStart(r)
        }
        return n.handler = e, n.cancel = () => {
          so.delete(r), t = null
        }, n
      };
      var ho = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      io.use = e => ho = e, io.now = "undefined" != typeof performance ? () => performance.now() : Date.now, io.batchedUpdates = e => e(), io.catch = console.error, io.frameLoop = "always", io.advance = () => {
        "demand" !== io.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : wo()
      };
      var po = -1,
        vo = 0,
        go = !1;

      function mo(e, t) {
        go ? (t.delete(e), e(0)) : (t.add(e), yo())
      }

      function yo() {
        po < 0 && (po = 0, "demand" !== io.frameLoop && ho(bo))
      }

      function bo() {
        ~po && (ho(bo), io.batchedUpdates(wo))
      }

      function wo() {
        const e = po;
        po = io.now();
        const t = fo(po);
        t && (xo(uo.splice(0, t), (e => e.handler())), vo -= t), vo ? (so.flush(), oo.flush(e ? Math.min(64, po - e) : 16.667), lo.flush(), ao.flush(), co.flush()) : po = -1
      }

      function _o() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            vo += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (vo -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, vo -= t.size, xo(t, (t => t(r) && e.add(t))), vo += e.size, t = e)
          }
        }
      }

      function xo(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            io.catch(e)
          }
        }))
      }
      var So = Object.defineProperty,
        Co = {};

      function jo() {}((e, t) => {
        for (var r in t) So(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(Co, {
        assign: () => Vo,
        colors: () => zo,
        createStringInterpolator: () => Lo,
        skipAnimation: () => Ao,
        to: () => Do,
        willAdvance: () => Io
      });
      var ko = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function Oo(e, t) {
        if (ko.arr(e)) {
          if (!ko.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var Po = (e, t) => e.forEach(t);

      function Eo(e, t, r) {
        if (ko.arr(e))
          for (let n = 0; n < e.length; n++) t.call(r, e[n], `${n}`);
        else
          for (const n in e) e.hasOwnProperty(n) && t.call(r, e[n], n)
      }
      var No = e => ko.und(e) ? [] : ko.arr(e) ? e : [e];

      function To(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), Po(r, t)
        }
      }
      var Lo, Do, Mo = (e, ...t) => To(e, (e => e(...t))),
        Ro = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        zo = null,
        Ao = !1,
        Io = jo,
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
          const r = t.findIndex((t => t.priority > e.priority));
          return r < 0 ? t.length : r
        }(qo), 0, e)
      }

      function Ko(e) {
        const t = Bo;
        for (let r = 0; r < qo.length; r++) {
          const n = qo[r];
          $o = n.priority, n.idle || (Io(n), n.advance(e), n.idle || t.push(n))
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
        ri = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        ni = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        oi = /^#([0-9a-fA-F]{6})$/,
        ii = /^#([0-9a-fA-F]{8})$/;

      function ai(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function si(e, t, r) {
        const n = r < .5 ? r * (1 + t) : r + t - r * t,
          o = 2 * r - n,
          i = ai(o, n, e + 1 / 3),
          a = ai(o, n, e),
          s = ai(o, n, e - 1 / 3);
        return Math.round(255 * i) << 24 | Math.round(255 * a) << 16 | Math.round(255 * s) << 8
      }

      function li(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function ci(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function ui(e) {
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
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = oi.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : zo && void 0 !== zo[e] ? zo[e] : (t = Qo.exec(e)) ? (li(t[1]) << 24 | li(t[2]) << 16 | li(t[3]) << 8 | 255) >>> 0 : (t = Jo.exec(e)) ? (li(t[1]) << 24 | li(t[2]) << 16 | li(t[3]) << 8 | ui(t[4])) >>> 0 : (t = ri.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = ii.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = ni.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = ei.exec(e)) ? (255 | si(ci(t[1]), di(t[2]), di(t[3]))) >>> 0 : (t = ti.exec(e)) ? (si(ci(t[1]), di(t[2]), di(t[3])) | ui(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var hi = (e, t, r) => {
          if (ko.fun(e)) return e;
          if (ko.arr(e)) return hi({
            range: e,
            output: t,
            extrapolate: r
          });
          if (ko.str(e.output[0])) return Lo(e);
          const n = e,
            o = n.output,
            i = n.range || [0, 1],
            a = n.extrapolateLeft || n.extrapolate || "extend",
            s = n.extrapolateRight || n.extrapolate || "extend",
            l = n.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
              return r - 1
            }(e, i);
            return function(e, t, r, n, o, i, a, s, l) {
              let c = l ? l(e) : e;
              if (c < t) {
                if ("identity" === a) return c;
                "clamp" === a && (c = t)
              }
              if (c > r) {
                if ("identity" === s) return c;
                "clamp" === s && (c = r)
              }
              return n === o ? n : t === r ? e <= t ? n : o : (t === -1 / 0 ? c = -c : r === 1 / 0 ? c -= t : c = (c - t) / (r - t), c = i(c), n === -1 / 0 ? c = -c : o === 1 / 0 ? c += n : c = c * (o - n) + n, c)
            }(e, i[t], i[t + 1], o[t], o[t + 1], l, a, s, n.map)
          }
        },
        pi = 1.70158,
        vi = 1.525 * pi,
        gi = pi + 1,
        mi = 2 * Math.PI / 3,
        yi = 2 * Math.PI / 4.5,
        bi = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
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
          easeInBack: e => gi * e * e * e - pi * e * e,
          easeOutBack: e => 1 + gi * Math.pow(e - 1, 3) + pi * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - vi) / 2 : (Math.pow(2 * e - 2, 2) * ((vi + 1) * (2 * e - 2) + vi) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * mi),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * mi) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * yi) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * yi) / 2 + 1,
          easeInBounce: e => 1 - bi(1 - e),
          easeOutBounce: bi,
          easeInOutBounce: e => e < .5 ? (1 - bi(1 - 2 * e)) / 2 : (1 + bi(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const n = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return ((e, t, r) => Math.min(Math.max(r, 0), 1))(0, 0, ("end" === t ? Math.floor(n) : Math.ceil(n)) / e)
          }
        },
        _i = Symbol.for("FluidValue.get"),
        xi = Symbol.for("FluidValue.observers"),
        Si = e => Boolean(e && e[_i]),
        Ci = e => e && e[_i] ? e[_i]() : e,
        ji = e => e[xi] || null;

      function ki(e, t) {
        const r = e[xi];
        r && r.forEach((e => {
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
          let r = e[xi];
          r || Li(e, xi, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function Ni(e, t) {
        const r = e[xi];
        if (r && r.has(t)) {
          const n = r.size - 1;
          n ? r.delete(t) : e[xi] = null, e.observerRemoved && e.observerRemoved(n, t)
        }
      }
      var Ti, Li = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        Di = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        Mi = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        Ri = new RegExp(`(${Di.source})(%|[a-z]+)`, "i"),
        zi = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        Ai = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Ii = e => {
          const [t, r] = Vi(e);
          if (!t || Ro()) return e;
          const n = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (n) return n.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && Ai.test(r) ? Ii(r) : r || e
        },
        Vi = e => {
          const t = Ai.exec(e);
          if (!t) return [, ];
          const [, r, n] = t;
          return [r, n]
        },
        Fi = (e, t, r, n, o) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(n)}, ${o})`,
        qi = e => {
          Ti || (Ti = zo ? new RegExp(`(${Object.keys(zo).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => Ci(e).replace(Ai, Ii).replace(Mi, fi).replace(Ti, fi))),
            r = t.map((e => e.match(Di).map(Number))),
            n = r[0].map(((e, t) => r.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))),
            o = n.map((t => hi({
              ...e,
              output: t
            })));
          return e => {
            const r = !Ri.test(t[0]) && t.find((e => Ri.test(e)))?.replace(Di, "");
            let n = 0;
            return t[0].replace(Di, (() => `${o[n++](e)}${r||""}`)).replace(zi, Fi)
          }
        },
        Bi = "react-spring: ",
        $i = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${Bi}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        Hi = $i(console.warn),
        Wi = $i(console.warn);

      function Gi(e) {
        return ko.str(e) && ("#" == e[0] || /\d/.test(e) || !Ro() && Ai.test(e) || e in (zo || {}))
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
          return r = e, n = Qi, o = t, Object.defineProperty(r, n, {
            value: o,
            writable: !0,
            configurable: !0
          });
          var r, n, o
        },
        ta = e => e && e[Qi] && e[Qi].getPayload(),
        ra = class {
          constructor() {
            ea(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        na = class extends ra {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, ko.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new na(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return ko.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, ko.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        oa = class extends na {
          constructor(e) {
            super(0), this._string = null, this._toString = hi({
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
            if (ko.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = hi({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        ia = {
          dependencies: null
        },
        aa = class extends ra {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return Eo(this.source, ((r, n) => {
              var o;
              (o = r) && o[Qi] === o ? t[n] = r.getValue(e) : Si(r) ? t[n] = Ci(r) : e || (t[n] = r)
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
            ia.dependencies && Si(e) && ia.dependencies.add(e);
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
            return e.length == t.length ? t.map(((t, r) => t.setValue(e[r]))).some(Boolean) : (super.setValue(e.map(la)), !0)
          }
        };

      function la(e) {
        return (Gi(e) ? oa : na).create(e)
      }

      function ca(e) {
        const t = Ji(e);
        return t ? t.constructor : ko.arr(e) ? sa : Gi(e) ? oa : na
      }
      var ua = (e, t) => {
          const r = !ko.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, s.forwardRef)(((n, o) => {
            const i = (0, s.useRef)(null),
              a = r && (0, s.useCallback)((e => {
                i.current = function(e, t) {
                  return e && (ko.fun(e) ? e(t) : e.current = t), t
                }(o, e)
              }), [o]),
              [l, c] = function(e, t) {
                const r = new Set;
                return ia.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new aa(e), ia.dependencies = null, [e, r]
              }(n, t),
              u = Ki(),
              d = () => {
                const e = i.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, l.getValue(!0))) && u()
              },
              f = new da(d, c),
              h = (0, s.useRef)();
            Ui((() => (h.current = f, Po(c, (e => Ei(e, f))), () => {
              h.current && (Po(h.current.deps, (e => Ni(e, h.current))), io.cancel(h.current.update))
            }))), (0, s.useEffect)(d, []), Xi((() => () => {
              const e = h.current;
              Po(e.deps, (t => Ni(t, e)))
            }));
            const p = t.getComponentProps(l.getValue());
            return s.createElement(e, {
              ...p,
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
        ha = e => ko.str(e) ? e : e && ko.str(e.displayName) ? e.displayName : ko.fun(e) && e.name || null;

      function pa(e, ...t) {
        return ko.fun(e) ? e(...t) : e
      }
      var va = (e, t) => !0 === e || !!(t && e && (ko.fun(e) ? e(t) : No(e).includes(t))),
        ga = (e, t) => ko.obj(e) ? t && e[t] : e,
        ma = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        ya = e => e,
        ba = (e, t = ya) => {
          let r = wa;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const n = {};
          for (const o of r) {
            const r = t(e[o], o);
            ko.und(r) || (n[o] = r)
          }
          return n
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

      function xa(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (Eo(e, ((e, n) => {
              _a[n] || (t[n] = e, r++)
            })), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return Eo(e, ((e, n) => n in t || (r[n] = e))), r
        }
        return {
          ...e
        }
      }

      function Sa(e) {
        return e = Ci(e), ko.arr(e) ? e.map(Sa) : Gi(e) ? Co.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function Ca(e) {
        return ko.fun(e) || ko.arr(e) && ko.obj(e[0])
      }
      var ja = {
          tension: 170,
          friction: 26,
          mass: 1,
          damping: 1,
          easing: wi.linear,
          clamp: !1
        },
        ka = class {
          constructor() {
            this.velocity = 0, Object.assign(this, ja)
          }
        };

      function Oa(e, t) {
        if (ko.und(t.decay)) {
          const r = !ko.und(t.tension) || !ko.und(t.friction);
          !r && ko.und(t.frequency) && ko.und(t.damping) && ko.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var Pa = [],
        Ea = class {
          constructor() {
            this.changed = !1, this.values = Pa, this.toValues = null, this.fromValues = Pa, this.config = new ka, this.immediate = !1
          }
        };

      function Na(e, {
        key: t,
        props: r,
        defaultProps: n,
        state: o,
        actions: i
      }) {
        return new Promise(((a, s) => {
          let l, c, u = va(r.cancel ?? n?.cancel, t);
          if (u) h();
          else {
            ko.und(r.pause) || (o.paused = va(r.pause, t));
            let e = n?.pause;
            !0 !== e && (e = o.paused || va(e, t)), l = pa(r.delay || 0, t), e ? (o.resumeQueue.add(f), i.pause()) : (i.resume(), f())
          }

          function d() {
            o.resumeQueue.add(f), o.timeouts.delete(c), c.cancel(), l = c.time - io.now()
          }

          function f() {
            l > 0 && !Co.skipAnimation ? (o.delayed = !0, c = io.setTimeout(h, l), o.pauseQueue.add(d), o.timeouts.add(c)) : h()
          }

          function h() {
            o.delayed && (o.delayed = !1), o.pauseQueue.delete(d), o.timeouts.delete(c), e <= (o.cancelId || 0) && (u = !0);
            try {
              i.start({
                ...r,
                callId: e,
                cancel: u
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
        Da = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        Ma = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function Ra(e, t, r, n) {
        const {
          callId: o,
          parentId: i,
          onRest: a
        } = t, {
          asyncTo: s,
          promise: l
        } = r;
        return i || e !== s || t.reset ? r.promise = (async () => {
          r.asyncId = o, r.asyncTo = e;
          const c = ba(t, ((e, t) => "onRest" === t ? void 0 : e));
          let u, d;
          const f = new Promise(((e, t) => (u = e, d = t))),
            h = e => {
              const t = o <= (r.cancelId || 0) && Ma(n) || o !== r.asyncId && Da(n, !1);
              if (t) throw e.result = t, d(e), e
            },
            p = (e, t) => {
              const i = new Aa,
                a = new Ia;
              return (async () => {
                if (Co.skipAnimation) throw za(r), a.result = Da(n, !1), d(a), a;
                h(i);
                const s = ko.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                s.parentId = o, Eo(c, ((e, t) => {
                  ko.und(s[t]) && (s[t] = e)
                }));
                const l = await n.start(s);
                return h(i), r.paused && await new Promise((e => {
                  r.resumeQueue.add(e)
                })), l
              })()
            };
          let v;
          if (Co.skipAnimation) return za(r), Da(n, !1);
          try {
            let t;
            t = ko.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, n.stop.bind(n))), await Promise.all([t.then(u), f]), v = Da(n.get(), !0, !1)
          } catch (e) {
            if (e instanceof Aa) v = e.result;
            else {
              if (!(e instanceof Ia)) throw e;
              v = e.result
            }
          } finally {
            o == r.asyncId && (r.asyncId = i, r.asyncTo = i ? s : void 0, r.promise = i ? l : void 0)
          }
          return ko.fun(a) && io.batchedUpdates((() => {
            a(v, n, n.item)
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
            return Co.to(this, e)
          }
          interpolate(...e) {
            return Hi(`${Bi}The "interpolate" function is deprecated in v9 (use "to" instead)`), Co.to(this, e)
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
            ki(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || Ho.sort(this), ki(this, {
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
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !ko.und(e) || !ko.und(t)) {
              const r = ko.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              ko.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !(Ha(this) || this._state.asyncTo) || Wa(this)
          }
          get goal() {
            return Ci(this.animation.to)
          }
          get velocity() {
            const e = Ji(this);
            return e instanceof na ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
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
              r = !1;
            const n = this.animation;
            let {
              toValues: o
            } = n;
            const {
              config: i
            } = n, a = ta(n.to);
            !a && Si(n.to) && (o = No(Ci(n.to))), n.values.forEach(((s, l) => {
              if (s.done) return;
              const c = s.constructor == oa ? 1 : a ? a[l].lastPosition : o[l];
              let u = n.immediate,
                d = c;
              if (!u) {
                if (d = s.lastPosition, i.tension <= 0) return void(s.done = !0);
                let t = s.elapsedTime += e;
                const r = n.fromValues[l],
                  o = null != s.v0 ? s.v0 : s.v0 = ko.arr(i.velocity) ? i.velocity[l] : i.velocity;
                let a;
                const f = i.precision || (r == c ? .005 : Math.min(1, .001 * Math.abs(c - r)));
                if (ko.und(i.duration))
                  if (i.decay) {
                    const e = !0 === i.decay ? .998 : i.decay,
                      n = Math.exp(-(1 - e) * t);
                    d = r + o / (1 - e) * (1 - n), u = Math.abs(s.lastPosition - d) <= f, a = o * n
                  } else {
                    a = null == s.lastVelocity ? o : s.lastVelocity;
                    const t = i.restVelocity || f / 10,
                      n = i.clamp ? 0 : i.bounce,
                      l = !ko.und(n),
                      h = r == c ? s.v0 > 0 : r < c;
                    let p, v = !1;
                    const g = 1,
                      m = Math.ceil(e / g);
                    for (let e = 0; e < m && (p = Math.abs(a) > t, p || (u = Math.abs(c - d) <= f, !u)); ++e) l && (v = d == c || d > c == h, v && (a = -a * n, d = c)), a += (1e-6 * -i.tension * (d - c) + .001 * -i.friction * a) / i.mass * g, d += a * g
                  }
                else {
                  let n = 1;
                  i.duration > 0 && (this._memoizedDuration !== i.duration && (this._memoizedDuration = i.duration, s.durationProgress > 0 && (s.elapsedTime = i.duration * s.durationProgress, t = s.elapsedTime += e)), n = (i.progress || 0) + t / this._memoizedDuration, n = n > 1 ? 1 : n < 0 ? 0 : n, s.durationProgress = n), d = r + i.easing(n) * (c - r), a = (d - s.lastPosition) / e, u = 1 == n
                }
                s.lastVelocity = a, Number.isNaN(d) && (console.warn("Got NaN while animating:", this), u = !0)
              }
              a && !a[l].done && (u = !1), u ? s.done = !0 : t = !1, s.setValue(d, i.round) && (r = !0)
            }));
            const s = Ji(this),
              l = s.getValue();
            if (t) {
              const e = Ci(n.to);
              l === e && !r || i.decay ? r && i.decay && this._onChange(l) : (s.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(l)
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
            let r;
            return ko.und(e) ? (r = this.queue || [], this.queue = []) : r = [ko.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map((e => this._update(e)))).then((e => Ta(this, e)))
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
              to: r,
              from: n
            } = e;
            r = ko.obj(r) ? r[t] : r, (null == r || Ca(r)) && (r = void 0), n = ko.obj(n) ? n[t] : n, null == n && (n = void 0);
            const o = {
              to: r,
              from: n
            };
            return $a(this) || (e.reverse && ([r, n] = [n, r]), n = Ci(n), ko.und(n) ? Ji(this) || this._set(r) : this._set(n)), o
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: n
            } = this;
            e.default && Object.assign(n, ba(e, ((e, t) => /^on/.test(t) ? ga(e, r) : e))), ts(this, e, "onProps"), rs(this, "onProps", e, this);
            const o = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const i = this._state;
            return Na(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: n,
              state: i,
              actions: {
                pause: () => {
                  Wa(this) || (Ua(this, !0), Mo(i.pauseQueue), rs(this, "onPause", Da(this, Xa(this, this.animation.to)), this))
                },
                resume: () => {
                  Wa(this) && (Ua(this, !1), Ha(this) && this._resume(), Mo(i.resumeQueue), rs(this, "onResume", Da(this, Xa(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, o)
              }
            }).then((r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = Ya(e);
                if (t) return this._update(t, !0)
              }
              return r
            }))
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(Ma(this));
            const n = !ko.und(e.to),
              o = !ko.und(e.from);
            if (n || o) {
              if (!(t.callId > this._lastToId)) return r(Ma(this));
              this._lastToId = t.callId
            }
            const {
              key: i,
              defaultProps: a,
              animation: s
            } = this, {
              to: l,
              from: c
            } = s;
            let {
              to: u = l,
              from: d = c
            } = e;
            !o || n || t.default && !ko.und(u) || (u = d), t.reverse && ([u, d] = [d, u]);
            const f = !Oo(d, c);
            f && (s.from = d), d = Ci(d);
            const h = !Oo(u, l);
            h && this._focus(u);
            const p = Ca(t.to),
              {
                config: v
              } = s,
              {
                decay: g,
                velocity: m
              } = v;
            (n || o) && (v.velocity = 0), t.config && !p && function(e, t, r) {
              r && (Oa(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), Oa(e, t), Object.assign(e, t);
              for (const t in ja) null == e[t] && (e[t] = ja[t]);
              let {
                frequency: n,
                damping: o
              } = e;
              const {
                mass: i
              } = e;
              ko.und(n) || (n < .01 && (n = .01), o < 0 && (o = 0), e.tension = Math.pow(2 * Math.PI / n, 2) * i, e.friction = 4 * Math.PI * o * i / n)
            }(v, pa(t.config, i), t.config !== a.config ? pa(a.config, i) : void 0);
            let y = Ji(this);
            if (!y || ko.und(u)) return r(Da(this, !0));
            const b = ko.und(t.reset) ? o && !t.default : !ko.und(d) && va(t.reset, i),
              w = b ? d : this.get(),
              _ = Sa(u),
              x = ko.num(_) || ko.arr(_) || Gi(_),
              S = !p && (!x || va(a.immediate || t.immediate, i));
            if (h) {
              const e = ca(u);
              if (e !== y.constructor) {
                if (!S) throw Error(`Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`);
                y = this._set(_)
              }
            }
            const C = y.constructor;
            let j = Si(u),
              k = !1;
            if (!j) {
              const e = b || !$a(this) && f;
              (h || e) && (k = Oo(Sa(w), _), j = !k), (Oo(s.immediate, S) || S) && Oo(v.decay, g) && Oo(v.velocity, m) || (j = !0)
            }
            if (k && Ha(this) && (s.changed && !b ? j = !0 : j || this._stop(l)), !p && ((j || Si(l)) && (s.values = y.getPayload(), s.toValues = Si(u) ? null : C == oa ? [1] : No(_)), s.immediate != S && (s.immediate = S, S || b || this._set(l)), j)) {
              const {
                onRest: e
              } = s;
              Po(es, (e => ts(this, t, e)));
              const n = Da(this, Xa(this, l));
              Mo(this._pendingCalls, n), this._pendingCalls.add(r), s.changed && io.batchedUpdates((() => {
                s.changed = !b, e?.(n, this), b ? pa(a.onRest, n) : s.onStart?.(n, this)
              }))
            }
            b && this._set(w), p ? r(Ra(t.to, t, this._state, this)) : j ? this._start() : Ha(this) && !h ? this._pendingCalls.add(r) : r(La(w))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (ji(this) && this._detach(), t.to = e, ji(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            Si(t) && (Ei(t, this), Va(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            Si(e) && Ni(e, this)
          }
          _set(e, t = !0) {
            const r = Ci(e);
            if (!ko.und(r)) {
              const e = Ji(this);
              if (!e || !Oo(r, e.getValue())) {
                const n = ca(r);
                e && e.constructor == n ? e.setValue(r) : ea(this, n.create(r)), e && io.batchedUpdates((() => {
                  this._onChange(r, t)
                }))
              }
            }
            return Ji(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, rs(this, "onStart", Da(this, Xa(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), pa(this.animation.onChange, e, this)), pa(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            Ji(this).reset(Ci(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), Ha(this) || (Ga(this, !0), Wa(this) || this._resume())
          }
          _resume() {
            Co.skipAnimation ? this.finish() : Ho.start(this)
          }
          _stop(e, t) {
            if (Ha(this)) {
              Ga(this, !1);
              const r = this.animation;
              Po(r.values, (e => {
                e.done = !0
              })), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), ki(this, {
                type: "idle",
                parent: this
              });
              const n = t ? Ma(this.get()) : Da(this.get(), Xa(this, e ?? r.to));
              Mo(this._pendingCalls, n), r.changed && (r.changed = !1, rs(this, "onRest", n, this))
            }
          }
        };

      function Xa(e, t) {
        const r = Sa(t);
        return Oo(Sa(e.get()), r)
      }

      function Ya(e, t = e.loop, r = e.to) {
        const n = pa(t);
        if (n) {
          const o = !0 !== n && xa(n),
            i = (o || e).reverse,
            a = !o || o.reset;
          return Za({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !i || Ca(r) ? r : void 0,
            from: a ? e.from : void 0,
            reset: a,
            ...o
          })
        }
      }

      function Za(e) {
        const {
          to: t,
          from: r
        } = e = xa(e), n = new Set;
        return ko.obj(t) && Ja(t, n), ko.obj(r) && Ja(r, n), e.keys = n.size ? Array.from(n) : null, e
      }

      function Qa(e) {
        const t = Za(e);
        return ko.und(t.default) && (t.default = ba(t)), t
      }

      function Ja(e, t) {
        Eo(e, ((e, r) => null != e && t.add(r)))
      }
      var es = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function ts(e, t, r) {
        e.animation[r] = t[r] !== ma(t, r) ? ga(t[r], e.key) : void 0
      }

      function rs(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var ns = ["onStart", "onChange", "onRest"],
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
            return this.each(((t, r) => e[r] = t.get())), e
          }
          set(e) {
            for (const t in e) {
              const r = e[t];
              ko.und(r) || this.springs[t].set(r)
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
              const r = this.springs;
              Po(No(t), (t => r[t].stop(!!e)))
            } else za(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (ko.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              Po(No(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (ko.und(e)) this.start({
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
              onRest: r
            } = this._events, n = this._active.size > 0, o = this._changed.size > 0;
            (n && !this._started || o && !this._started) && (this._started = !0, To(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const i = !n && this._started,
              a = o || i && r.size ? this.get() : null;
            o && t.size && To(t, (([e, t]) => {
              t.value = a, e(t, this, this._item)
            })), i && (this._started = !1, To(r, (([e, t]) => {
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
      async function ss(e, t, r) {
        const {
          keys: n,
          to: o,
          from: i,
          loop: a,
          onRest: s,
          onResolve: l
        } = t, c = ko.obj(t.default) && t.default;
        a && (t.loop = !1), !1 === o && (t.to = null), !1 === i && (t.from = null);
        const u = ko.arr(o) || ko.fun(o) ? o : void 0;
        u ? (t.to = void 0, t.onRest = void 0, c && (c.onRest = void 0)) : Po(ns, (r => {
          const n = t[r];
          if (ko.fun(n)) {
            const o = e._events[r];
            t[r] = ({
              finished: e,
              cancelled: t
            }) => {
              const r = o.get(n);
              r ? (e || (r.finished = !1), t && (r.cancelled = !0)) : o.set(n, {
                value: null,
                finished: e || !1,
                cancelled: t || !1
              })
            }, c && (c[r] = t[r])
          }
        }));
        const d = e._state;
        t.pause === !d.paused ? (d.paused = t.pause, Mo(t.pause ? d.pauseQueue : d.resumeQueue)) : d.paused && (t.pause = !0);
        const f = (n || Object.keys(e.springs)).map((r => e.springs[r].start(t))),
          h = !0 === t.cancel || !0 === ma(t, "cancel");
        (u || h && d.asyncId) && f.push(Na(++e._lastAsyncId, {
          props: t,
          state: d,
          actions: {
            pause: jo,
            resume: jo,
            start(t, r) {
              h ? (za(d, e._lastAsyncId), r(Ma(e))) : (t.onRest = s, r(Ra(u, t, d, e)))
            }
          }
        })), d.paused && await new Promise((e => {
          d.resumeQueue.add(e)
        }));
        const p = Ta(e, await Promise.all(f));
        if (a && p.finished && (!r || !p.noop)) {
          const r = Ya(t, a, o);
          if (r) return fs(e, [r]), ss(e, r, !0)
        }
        return l && io.batchedUpdates((() => l(p, e, e.item))), p
      }

      function ls(e, t) {
        const r = {
          ...e.springs
        };
        return t && Po(No(t), (e => {
          ko.und(e.keys) && (e = Za(e)), ko.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), ds(r, e, (e => us(e)))
        })), cs(e, r), r
      }

      function cs(e, t) {
        Eo(t, ((t, r) => {
          e.springs[r] || (e.springs[r] = t, Ei(t, e))
        }))
      }

      function us(e, t) {
        const r = new Ka;
        return r.key = e, t && Ei(r, t), r
      }

      function ds(e, t, r) {
        t.keys && Po(t.keys, (n => {
          (e[n] || (e[n] = r(n)))._prepareNode(t)
        }))
      }

      function fs(e, t) {
        Po(t, (t => {
          ds(e.springs, t, (t => us(t, e)))
        }))
      }
      var hs, ps, vs = ({
          children: e,
          ...t
        }) => {
          const r = (0, s.useContext)(gs),
            n = t.pause || !!r.pause,
            o = t.immediate || !!r.immediate;
          t = function(e, t) {
            const [r] = (0, s.useState)((() => ({
              inputs: t,
              result: e()
            }))), n = (0, s.useRef)(), o = n.current;
            let i = o;
            if (i) {
              const r = Boolean(t && i.inputs && function(e, t) {
                if (e.length !== t.length) return !1;
                for (let r = 0; r < e.length; r++)
                  if (e[r] !== t[r]) return !1;
                return !0
              }(t, i.inputs));
              r || (i = {
                inputs: t,
                result: e()
              })
            } else i = r;
            return (0, s.useEffect)((() => {
              n.current = i, o == r && (r.inputs = r.result = void 0)
            }), [i]), i.result
          }((() => ({
            pause: n,
            immediate: o
          })), [n, o]);
          const {
            Provider: i
          } = gs;
          return s.createElement(i, {
            value: t
          }, e)
        },
        gs = (hs = vs, ps = {}, Object.assign(hs, s.createContext(ps)), hs.Provider._context = hs, hs.Consumer._context = hs, hs);
      vs.Provider = gs.Provider, vs.Consumer = gs.Consumer;
      var ms = () => {
        const e = [],
          t = function(t) {
            Wi(`${Bi}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const n = [];
            return Po(e, ((e, o) => {
              if (ko.und(t)) n.push(e.start());
              else {
                const i = r(t, e, o);
                i && n.push(e.start(i))
              }
            })), n
          };
        t.current = e, t.add = function(t) {
          e.includes(t) || e.push(t)
        }, t.delete = function(t) {
          const r = e.indexOf(t);
          ~r && e.splice(r, 1)
        }, t.pause = function() {
          return Po(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return Po(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          Po(e, ((e, r) => {
            const n = ko.fun(t) ? t(r, e) : t;
            n && e.set(n)
          }))
        }, t.start = function(t) {
          const r = [];
          return Po(e, ((e, n) => {
            if (ko.und(t)) r.push(e.start());
            else {
              const o = this._getProps(t, e, n);
              o && r.push(e.start(o))
            }
          })), r
        }, t.stop = function() {
          return Po(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return Po(e, ((e, r) => e.update(this._getProps(t, e, r)))), this
        };
        const r = function(e, t, r) {
          return ko.fun(e) ? e(r, t) : e
        };
        return t._getProps = r, t
      };

      function ys(e, t) {
        const r = ko.fun(e),
          [
            [n], o
          ] = function(e, t, r) {
            const n = ko.fun(t) && t;
            n && !r && (r = []);
            const o = (0, s.useMemo)((() => n || 3 == arguments.length ? ms() : void 0), []),
              i = (0, s.useRef)(0),
              a = Ki(),
              l = (0, s.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const r = ls(e, t);
                  return i.current > 0 && !l.queue.length && !Object.keys(r).some((t => !e.springs[t])) ? as(e, t) : new Promise((n => {
                    cs(e, r), l.queue.push((() => {
                      n(as(e, t))
                    })), a()
                  }))
                }
              })), []),
              c = (0, s.useRef)([...l.ctrls]),
              u = [],
              d = Zi(e) || 0;

            function f(e, r) {
              for (let o = e; o < r; o++) {
                const e = c.current[o] || (c.current[o] = new is(null, l.flush)),
                  r = n ? n(o, e) : t[o];
                r && (u[o] = Qa(r))
              }
            }(0, s.useMemo)((() => {
              Po(c.current.slice(e, d), (e => {
                (function(e, t) {
                  e.ref?.delete(e), t?.delete(e)
                })(e, o), e.stop(!0)
              })), c.current.length = e, f(d, e)
            }), [e]), (0, s.useMemo)((() => {
              f(0, Math.min(d, e))
            }), r);
            const h = c.current.map(((e, t) => ls(e, u[t]))),
              p = (0, s.useContext)(vs),
              v = Zi(p),
              g = p !== v && function(e) {
                for (const t in e) return !0;
                return !1
              }(p);
            Ui((() => {
              i.current++, l.ctrls = c.current;
              const {
                queue: e
              } = l;
              e.length && (l.queue = [], Po(e, (e => e()))), Po(c.current, ((e, t) => {
                o?.add(e), g && e.start({
                  default: p
                });
                const r = u[t];
                r && (function(e, t) {
                  t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
                }(e, r.ref), e.ref ? e.queue.push(r) : e.start(r))
              }))
            })), Xi((() => () => {
              Po(l.ctrls, (e => e.stop(!0)))
            }));
            const m = h.map((e => ({
              ...e
            })));
            return o ? [m, o] : m
          }(1, r ? e : [e], r ? t || [] : t);
        return r || 2 == arguments.length ? [n, o] : n
      }
      var bs = class extends qa {
        constructor(e, t) {
          super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = hi(...t);
          const r = this._get(),
            n = ca(r);
          ea(this, n.create(r))
        }
        advance(e) {
          const t = this._get();
          Oo(t, this.get()) || (Ji(this).setValue(t), this._onChange(t, this.idle)), !this.idle && _s(this._active) && xs(this)
        }
        _get() {
          const e = ko.arr(this.source) ? this.source.map(Ci) : No(Ci(this.source));
          return this.calc(...e)
        }
        _start() {
          this.idle && !_s(this._active) && (this.idle = !1, Po(ta(this), (e => {
            e.done = !1
          })), Co.skipAnimation ? (io.batchedUpdates((() => this.advance())), xs(this)) : Ho.start(this))
        }
        _attach() {
          let e = 1;
          Po(No(this.source), (t => {
            Si(t) && Ei(t, this), Va(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
          })), this.priority = e, this._start()
        }
        _detach() {
          Po(No(this.source), (e => {
            Si(e) && Ni(e, this)
          })), this._active.clear(), xs(this)
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

      function xs(e) {
        e.idle || (e.idle = !0, Po(ta(e), (e => {
          e.done = !0
        })), ki(e, {
          type: "idle",
          parent: e
        }))
      }
      Co.assign({
        createStringInterpolator: qi,
        to: (e, t) => new bs(e, t)
      }), Ho.advance;
      var Ss = /^--/;

      function Cs(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || Ss.test(e) || ks.hasOwnProperty(e) && ks[e] ? ("" + t).trim() : t + "px"
      }
      var js = {},
        ks = {
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
      ks = Object.keys(ks).reduce(((e, t) => (Os.forEach((r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t])), e)), ks);
      var Ps = /^(matrix|translate|scale|rotate|skew)/,
        Es = /^(translate)/,
        Ns = /^(rotate|skew)/,
        Ts = (e, t) => ko.num(e) && 0 !== e ? e + t : e,
        Ls = (e, t) => ko.arr(e) ? e.every((e => Ls(e, t))) : ko.num(e) ? e === t : parseFloat(e) === t,
        Ds = class extends aa {
          constructor({
            x: e,
            y: t,
            z: r,
            ...n
          }) {
            const o = [],
              i = [];
            (e || t || r) && (o.push([e || 0, t || 0, r || 0]), i.push((e => [`translate3d(${e.map((e=>Ts(e,"px"))).join(",")})`, Ls(e, 0)]))), Eo(n, ((e, t) => {
              if ("transform" === t) o.push([e || ""]), i.push((e => [e, "" === e]));
              else if (Ps.test(t)) {
                if (delete n[t], ko.und(e)) return;
                const r = Es.test(t) ? "px" : Ns.test(t) ? "deg" : "";
                o.push(No(e)), i.push("rotate3d" === t ? ([e, t, n, o]) => [`rotate3d(${e},${t},${n},${Ts(o,r)})`, Ls(o, 0)] : e => [`${t}(${e.map((e=>Ts(e,r))).join(",")})`, Ls(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), o.length && (n.transform = new Ms(o, i)), super(n)
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
            return Po(this.inputs, ((r, n) => {
              const o = Ci(r[0]),
                [i, a] = this.transforms[n](ko.arr(o) ? o : r.map(Ci));
              e += " " + i, t = t && a
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && Po(this.inputs, (e => Po(e, (e => Si(e) && Ei(e, this)))))
          }
          observerRemoved(e) {
            0 == e && Po(this.inputs, (e => Po(e, (e => Si(e) && Ni(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), ki(this, e)
          }
        };
      Co.assign({
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
          createAnimatedStyle: r = e => new aa(e),
          getComponentProps: n = e => e
        } = {}) => {
          const o = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: n
            },
            i = e => {
              const t = ha(e) || "Anonymous";
              return (e = ko.str(e) ? i[e] || (i[e] = ua(e, o)) : e[fa] || (e[fa] = ua(e, o))).displayName = `Animated(${t})`, e
            };
          return Eo(e, ((t, r) => {
            ko.arr(e) && (r = ha(t)), i[r] = i(t)
          })), {
            animated: i
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: n,
                style: o,
                children: i,
                scrollTop: a,
                scrollLeft: s,
                viewBox: l,
                ...c
              } = t,
              u = Object.values(c),
              d = Object.keys(c).map((t => r || e.hasAttribute(t) ? t : js[t] || (js[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== i && (e.textContent = i);
            for (const t in o)
              if (o.hasOwnProperty(t)) {
                const r = Cs(t, o[t]);
                Ss.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } d.forEach(((t, r) => {
              e.setAttribute(t, u[r])
            })), void 0 !== n && (e.className = n), void 0 !== a && (e.scrollTop = a), void 0 !== s && (e.scrollLeft = s), void 0 !== l && e.setAttribute("viewBox", l)
          },
          createAnimatedStyle: e => new Ds(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        zs = Rs.animated,
        As = r(23514);

      function Is(e, t) {
        var r = t && t.cache ? t.cache : Ws,
          n = t && t.serializer ? t.serializer : $s;
        return (t && t.strategy ? t.strategy : Bs)(e, {
          cache: r,
          serializer: n
        })
      }

      function Vs(e, t, r, n) {
        var o, i = null == (o = n) || "number" == typeof o || "boolean" == typeof o ? n : r(n),
          a = t.get(i);
        return void 0 === a && (a = e.call(this, n), t.set(i, a)), a
      }

      function Fs(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          o = r(n),
          i = t.get(o);
        return void 0 === i && (i = e.apply(this, n), t.set(o, i)), i
      }

      function qs(e, t, r, n, o) {
        return r.bind(t, e, n, o)
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
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.NumberFormat).bind.apply(e, (0, As.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Gs.variadic
      }), Is((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.DateTimeFormat).bind.apply(e, (0, As.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Gs.variadic
      }), Is((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.PluralRules).bind.apply(e, (0, As.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Gs.variadic
      }), Is((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
        return new((e = Intl.Locale).bind.apply(e, (0, As.__spreadArray)([void 0], t, !1)))
      }), {
        strategy: Gs.variadic
      }), Is((function() {
        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
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
      }), r(67332);
      var Ks, Xs, Ys = "undefined" == typeof window || window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__ ? s.createContext(null) : window.__REACT_INTL_CONTEXT__ || (window.__REACT_INTL_CONTEXT__ = s.createContext(null)),
        Zs = (Ys.Consumer, Ys.Provider, Ys);

      function Qs() {
        var e = s.useContext(Zs);
        return function(e) {
          ! function(e, t, r) {
            if (void 0 === r && (r = Error), !e) throw new r("[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
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
          r = e.value,
          n = e.children,
          o = (0, As.__rest)(e, ["value", "children"]);
        return n(t.formatNumberToParts(r, o))
      };

      function el(e) {
        var t = function(t) {
          var r = Qs(),
            n = t.value,
            o = t.children,
            i = (0, As.__rest)(t, ["value", "children"]),
            a = "string" == typeof n ? new Date(n || 0) : n;
          return o("formatDate" === e ? r.formatDateToParts(a, i) : r.formatTimeToParts(a, i))
        };
        return t.displayName = Xs[e], t
      }

      function tl(e) {
        var t = function(t) {
          var r = Qs(),
            n = t.value,
            o = t.children,
            i = (0, As.__rest)(t, ["value", "children"]),
            a = r[e](n, i);
          if ("function" == typeof o) return o(a);
          var l = r.textComponent || s.Fragment;
          return s.createElement(l, null, a)
        };
        return t.displayName = Ks[e], t
      }

      function rl(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      Js.displayName = "FormattedNumberParts", Js.displayName = "FormattedNumberParts", tl("formatDate"), tl("formatTime"), tl("formatNumber"), tl("formatList"), tl("formatDisplayName"), el("formatDate"), el("formatTime"), r.e(3672).then(r.bind(r, 21291)), r.e(823).then(r.bind(r, 823)), r.e(7893).then(r.bind(r, 27893)), r.e(4684).then(r.bind(r, 54684)), r.e(8557).then(r.bind(r, 38557)), r.e(9583).then(r.bind(r, 39583)), r.e(1280).then(r.bind(r, 21280)), r.e(5734).then(r.bind(r, 45734)), r.e(4153).then(r.bind(r, 84153)), r.e(1381).then(r.bind(r, 11381)), r.e(7727).then(r.bind(r, 57727)), r.e(3586).then(r.bind(r, 13586)), r.e(2578).then(r.bind(r, 12578));
      var nl = r(65998),
        ol = r(86410),
        il = r(29818),
        al = r(52806),
        sl = r(19264),
        ll = r(71020),
        cl = r(61832),
        ul = r(85100),
        dl = r(80355),
        fl = ["PageUp", "PageDown"],
        hl = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        pl = {
          "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
          "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
          "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"]
        },
        vl = "Slider",
        [gl, ml, yl] = (0, dl.N)(vl),
        [bl, wl] = (0, il.A)(vl, [yl]),
        [_l, xl] = bl(vl),
        Sl = s.forwardRef(((e, t) => {
          const {
            name: r,
            min: n = 0,
            max: o = 100,
            step: a = 1,
            orientation: l = "horizontal",
            disabled: c = !1,
            minStepsBetweenThumbs: u = 0,
            defaultValue: d = [n],
            value: f,
            onValueChange: h = () => {},
            onValueCommit: p = () => {},
            inverted: v = !1,
            form: g,
            ...m
          } = e, y = s.useRef(new Set), b = s.useRef(0), w = "horizontal" === l ? kl : Ol, [_ = [], x] = (0, al.i)({
            prop: f,
            defaultProp: d,
            onChange: e => {
              const t = [...y.current];
              t[b.current]?.focus(), h(e)
            }
          }), S = s.useRef(_);

          function C(e, t, {
            commit: r
          } = {
            commit: !1
          }) {
            const i = function(e) {
                return (String(e).split(".")[1] || "").length
              }(a),
              s = function(e, t) {
                const r = Math.pow(10, t);
                return Math.round(e * r) / r
              }(Math.round((e - n) / a) * a + n, i),
              l = rl(s, [n, o]);
            x(((e = []) => {
              const n = function(e = [], t, r) {
                const n = [...e];
                return n[r] = t, n.sort(((e, t) => e - t))
              }(e, l, t);
              if (function(e, t) {
                  if (t > 0) {
                    const r = function(e) {
                      return e.slice(0, -1).map(((t, r) => e[r + 1] - t))
                    }(e);
                    return Math.min(...r) >= t
                  }
                  return !0
                }(n, u * a)) {
                b.current = n.indexOf(l);
                const t = String(n) !== String(e);
                return t && r && p(n), t ? n : e
              }
              return e
            }))
          }
          return (0, i.jsx)(_l, {
            scope: e.__scopeSlider,
            name: r,
            disabled: c,
            min: n,
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
                  "aria-disabled": c,
                  "data-disabled": c ? "" : void 0,
                  ...m,
                  ref: t,
                  onPointerDown: (0, nl.m)(m.onPointerDown, (() => {
                    c || (S.current = _)
                  })),
                  min: n,
                  max: o,
                  inverted: v,
                  onSlideStart: c ? void 0 : function(e) {
                    const t = function(e, t) {
                      if (1 === e.length) return 0;
                      const r = e.map((e => Math.abs(e - t))),
                        n = Math.min(...r);
                      return r.indexOf(n)
                    }(_, e);
                    C(e, t)
                  },
                  onSlideMove: c ? void 0 : function(e) {
                    C(e, b.current)
                  },
                  onSlideEnd: c ? void 0 : function() {
                    const e = S.current[b.current];
                    _[b.current] !== e && p(_)
                  },
                  onHomeKeyDown: () => !c && C(n, 0, {
                    commit: !0
                  }),
                  onEndKeyDown: () => !c && C(o, _.length - 1, {
                    commit: !0
                  }),
                  onStepKeyDown: ({
                    event: e,
                    direction: t
                  }) => {
                    if (!c) {
                      const r = fl.includes(e.key) || e.shiftKey && hl.includes(e.key) ? 10 : 1,
                        n = b.current;
                      C(_[n] + a * r * t, n, {
                        commit: !0
                      })
                    }
                  }
                })
              })
            })
          })
        }));
      Sl.displayName = vl;
      var [Cl, jl] = bl(vl, {
        startEdge: "left",
        endEdge: "right",
        size: "width",
        direction: 1
      }), kl = s.forwardRef(((e, t) => {
        const {
          min: r,
          max: n,
          dir: o,
          inverted: a,
          onSlideStart: l,
          onSlideMove: c,
          onSlideEnd: u,
          onStepKeyDown: d,
          ...f
        } = e, [h, p] = s.useState(null), v = (0, ol.s)(t, (e => p(e))), g = s.useRef(void 0), m = (0, sl.jH)(o), y = "ltr" === m, b = y && !a || !y && a;

        function w(e) {
          const t = g.current || h.getBoundingClientRect(),
            o = Il([0, t.width], b ? [r, n] : [n, r]);
          return g.current = t, o(e - t.left)
        }
        return (0, i.jsx)(Cl, {
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
              c?.(t)
            },
            onSlideEnd: () => {
              g.current = void 0, u?.()
            },
            onStepKeyDown: e => {
              const t = pl[b ? "from-left" : "from-right"].includes(e.key);
              d?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), Ol = s.forwardRef(((e, t) => {
        const {
          min: r,
          max: n,
          inverted: o,
          onSlideStart: a,
          onSlideMove: l,
          onSlideEnd: c,
          onStepKeyDown: u,
          ...d
        } = e, f = s.useRef(null), h = (0, ol.s)(t, f), p = s.useRef(void 0), v = !o;

        function g(e) {
          const t = p.current || f.current.getBoundingClientRect(),
            o = Il([0, t.height], v ? [n, r] : [r, n]);
          return p.current = t, o(e - t.top)
        }
        return (0, i.jsx)(Cl, {
          scope: e.__scopeSlider,
          startEdge: v ? "bottom" : "top",
          endEdge: v ? "top" : "bottom",
          size: "height",
          direction: v ? 1 : -1,
          children: (0, i.jsx)(Pl, {
            "data-orientation": "vertical",
            ...d,
            ref: h,
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
              p.current = void 0, c?.()
            },
            onStepKeyDown: e => {
              const t = pl[v ? "from-bottom" : "from-top"].includes(e.key);
              u?.({
                event: e,
                direction: t ? -1 : 1
              })
            }
          })
        })
      })), Pl = s.forwardRef(((e, t) => {
        const {
          __scopeSlider: r,
          onSlideStart: n,
          onSlideMove: o,
          onSlideEnd: a,
          onHomeKeyDown: s,
          onEndKeyDown: l,
          onStepKeyDown: c,
          ...u
        } = e, d = xl(vl, r);
        return (0, i.jsx)(ul.sG.span, {
          ...u,
          ref: t,
          onKeyDown: (0, nl.m)(e.onKeyDown, (e => {
            "Home" === e.key ? (s(e), e.preventDefault()) : "End" === e.key ? (l(e), e.preventDefault()) : fl.concat(hl).includes(e.key) && (c(e), e.preventDefault())
          })),
          onPointerDown: (0, nl.m)(e.onPointerDown, (e => {
            const t = e.target;
            t.setPointerCapture(e.pointerId), e.preventDefault(), d.thumbs.has(t) ? t.focus() : n(e)
          })),
          onPointerMove: (0, nl.m)(e.onPointerMove, (e => {
            e.target.hasPointerCapture(e.pointerId) && o(e)
          })),
          onPointerUp: (0, nl.m)(e.onPointerUp, (e => {
            const t = e.target;
            t.hasPointerCapture(e.pointerId) && (t.releasePointerCapture(e.pointerId), a(e))
          }))
        })
      })), El = "SliderTrack", Nl = s.forwardRef(((e, t) => {
        const {
          __scopeSlider: r,
          ...n
        } = e, o = xl(El, r);
        return (0, i.jsx)(ul.sG.span, {
          "data-disabled": o.disabled ? "" : void 0,
          "data-orientation": o.orientation,
          ...n,
          ref: t
        })
      }));
      Nl.displayName = El;
      var Tl = "SliderRange",
        Ll = s.forwardRef(((e, t) => {
          const {
            __scopeSlider: r,
            ...n
          } = e, o = xl(Tl, r), a = jl(Tl, r), l = s.useRef(null), c = (0, ol.s)(t, l), u = o.values.length, d = o.values.map((e => Al(e, o.min, o.max))), f = u > 1 ? Math.min(...d) : 0, h = 100 - Math.max(...d);
          return (0, i.jsx)(ul.sG.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...n,
            ref: c,
            style: {
              ...e.style,
              [a.startEdge]: f + "%",
              [a.endEdge]: h + "%"
            }
          })
        }));
      Ll.displayName = Tl;
      var Dl = "SliderThumb",
        Ml = s.forwardRef(((e, t) => {
          const r = ml(e.__scopeSlider),
            [n, o] = s.useState(null),
            a = (0, ol.s)(t, (e => o(e))),
            l = s.useMemo((() => n ? r().findIndex((e => e.ref.current === n)) : -1), [r, n]);
          return (0, i.jsx)(Rl, {
            ...e,
            ref: a,
            index: l
          })
        })),
        Rl = s.forwardRef(((e, t) => {
          const {
            __scopeSlider: r,
            index: n,
            name: o,
            ...a
          } = e, l = xl(Dl, r), c = jl(Dl, r), [u, d] = s.useState(null), f = (0, ol.s)(t, (e => d(e))), h = !u || l.form || !!u.closest("form"), p = (0, cl.X)(u), v = l.values[n], g = void 0 === v ? 0 : Al(v, l.min, l.max), m = function(e, t) {
            return t > 2 ? `Value ${e+1} of ${t}` : 2 === t ? ["Minimum", "Maximum"][e] : void 0
          }(n, l.values.length), y = p?.[c.size], b = y ? function(e, t, r) {
            const n = e / 2;
            return (n - Il([0, 50], [0, n])(t) * r) * r
          }(y, g, c.direction) : 0;
          return s.useEffect((() => {
            if (u) return l.thumbs.add(u), () => {
              l.thumbs.delete(u)
            }
          }), [u, l.thumbs]), (0, i.jsxs)("span", {
            style: {
              transform: "var(--radix-slider-thumb-transform)",
              position: "absolute",
              [c.startEdge]: `calc(${g}% + ${b}px)`
            },
            children: [(0, i.jsx)(gl.ItemSlot, {
              scope: e.__scopeSlider,
              children: (0, i.jsx)(ul.sG.span, {
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
                onFocus: (0, nl.m)(e.onFocus, (() => {
                  l.valueIndexToChangeRef.current = n
                }))
              })
            }), h && (0, i.jsx)(zl, {
              name: o ?? (l.name ? l.name + (l.values.length > 1 ? "[]" : "") : void 0),
              form: l.form,
              value: v
            }, n)]
          })
        }));
      Ml.displayName = Dl;
      var zl = s.forwardRef((({
        __scopeSlider: e,
        value: t,
        ...r
      }, n) => {
        const o = s.useRef(null),
          a = (0, ol.s)(o, n),
          l = (0, ll.Z)(t);
        return s.useEffect((() => {
          const e = o.current;
          if (!e) return;
          const r = window.HTMLInputElement.prototype,
            n = Object.getOwnPropertyDescriptor(r, "value").set;
          if (l !== t && n) {
            const r = new Event("input", {
              bubbles: !0
            });
            n.call(e, t), e.dispatchEvent(r)
          }
        }), [l, t]), (0, i.jsx)(ul.sG.input, {
          style: {
            display: "none"
          },
          ...r,
          ref: a,
          defaultValue: t
        })
      }));

      function Al(e, t, r) {
        return rl(100 / (r - t) * (e - t), [0, 100])
      }

      function Il(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }
      zl.displayName = "RadioBubbleInput";
      var Vl = Sl,
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
        ec = {
          id: "Lightbox_Download_Button_Tooltip"
        };

      function tc() {
        return tc = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, tc.apply(null, arguments)
      }
      var rc = ["shift", "alt", "meta", "mod", "ctrl"],
        nc = {
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

      function oc(e) {
        return (e && nc[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function ic(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function ac(e, t, r) {
        void 0 === t && (t = "+");
        var n = e.toLocaleLowerCase().split(t).map((function(e) {
          return oc(e)
        }));
        return tc({}, {
          alt: n.includes("alt"),
          ctrl: n.includes("ctrl") || n.includes("control"),
          shift: n.includes("shift"),
          meta: n.includes("meta"),
          mod: n.includes("mod")
        }, {
          keys: n.filter((function(e) {
            return !rc.includes(e)
          })),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && cc([oc(e.key), oc(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && uc([oc(e.key), oc(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        sc.clear()
      }));
      var sc = new Set;

      function lc(e) {
        return Array.isArray(e)
      }

      function cc(e) {
        var t = Array.isArray(e) ? e : [e];
        sc.has("meta") && sc.forEach((function(e) {
          return ! function(e) {
            return rc.includes(e)
          }(e) && sc.delete(e.toLowerCase())
        })), t.forEach((function(e) {
          return sc.add(e.toLowerCase())
        }))
      }

      function uc(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? sc.clear() : t.forEach((function(e) {
          return sc.delete(e.toLowerCase())
        }))
      }

      function dc(e, t) {
        void 0 === t && (t = !1);
        var r, n, o = e.target,
          i = e.composed;
        return n = (r = o).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && i ? e.composedPath()[0] && e.composedPath()[0].tagName : o && o.tagName, lc(t) ? Boolean(n && t && t.some((function(e) {
          var t;
          return e.toLowerCase() === (null == (t = n) ? void 0 : t.toLowerCase())
        }))) : Boolean(n && t && t)
      }
      var fc = (0, s.createContext)(void 0);

      function hc(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          n = e.children;
        return (0, i.jsx)(fc.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: n
        })
      }

      function pc(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(r, n) {
          return r && pc(e[n], t[n])
        }), !0) : e === t
      }
      var vc = (0, s.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        gc = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            n = e.children,
            o = (0, s.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            a = o[0],
            l = o[1],
            c = (0, s.useState)([]),
            u = c[0],
            d = c[1],
            f = (0, s.useCallback)((function(e) {
              l((function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            h = (0, s.useCallback)((function(e) {
              l((function(t) {
                return 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                }))
              }))
            }), []),
            p = (0, s.useCallback)((function(e) {
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
                  return !pc(t, e)
                }))
              }))
            }), []);
          return (0, i.jsx)(vc.Provider, {
            value: {
              enabledScopes: a,
              hotkeys: u,
              enableScope: f,
              disableScope: h,
              toggleScope: p
            },
            children: (0, i.jsx)(hc, {
              addHotkey: v,
              removeHotkey: g,
              children: n
            })
          })
        },
        mc = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        yc = "undefined" != typeof window ? s.useLayoutEffect : s.useEffect;

      function bc(e, t, r, n) {
        var o = (0, s.useState)(null),
          i = o[0],
          a = o[1],
          l = (0, s.useRef)(!1),
          c = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          u = lc(e) ? e.join(null == c ? void 0 : c.splitKey) : e,
          d = r instanceof Array ? r : n instanceof Array ? n : void 0,
          f = (0, s.useCallback)(t, null != d ? d : []),
          h = (0, s.useRef)(f);
        h.current = d ? f : t;
        var p = function(e) {
            var t = (0, s.useRef)(void 0);
            return pc(t.current, e) || (t.current = e), t.current
          }(c),
          v = (0, s.useContext)(vc).enabledScopes,
          g = (0, s.useContext)(fc);
        return yc((function() {
          if (!1 !== (null == p ? void 0 : p.enabled) && (e = v, t = null == p ? void 0 : p.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !dc(e, ["input", "textarea", "select"]) || dc(e, null == p ? void 0 : p.enableOnFormTags)) {
                  if (null !== i) {
                    var n = i.getRootNode();
                    if ((n instanceof Document || n instanceof ShadowRoot) && n.activeElement !== i && !i.contains(n.activeElement)) return void mc(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != p && p.enableOnContentEditable) && ic(u, null == p ? void 0 : p.splitKey).forEach((function(r) {
                    var n, o = ac(r, null == p ? void 0 : p.combinationKey);
                    if (function(e, t, r) {
                        void 0 === r && (r = !1);
                        var n, o, i = t.alt,
                          a = t.meta,
                          s = t.mod,
                          l = t.shift,
                          c = t.ctrl,
                          u = t.keys,
                          d = e.key,
                          f = e.code,
                          h = e.ctrlKey,
                          p = e.metaKey,
                          v = e.shiftKey,
                          g = e.altKey,
                          m = oc(f),
                          y = d.toLowerCase();
                        if (!(null != u && u.includes(m) || null != u && u.includes(y) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(m))) return !1;
                        if (!r) {
                          if (i === !g && "alt" !== y) return !1;
                          if (l === !v && "shift" !== y) return !1;
                          if (s) {
                            if (!p && !h) return !1
                          } else {
                            if (a === !p && "meta" !== y && "os" !== y) return !1;
                            if (c === !h && "ctrl" !== y && "control" !== y) return !1
                          }
                        }
                        return !(!u || 1 !== u.length || !u.includes(y) && !u.includes(m)) || (u ? (void 0 === o && (o = ","), (lc(n = u) ? n : n.split(o)).every((function(e) {
                          return sc.has(e.trim().toLowerCase())
                        }))) : !u)
                      }(e, o, null == p ? void 0 : p.ignoreModifiers) || null != (n = o.keys) && n.includes("*")) {
                      if (null != p && null != p.ignoreEventWhen && p.ignoreEventWhen(e)) return;
                      if (t && l.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, o, null == p ? void 0 : p.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, o, null == p ? void 0 : p.enabled)) return void mc(e);
                      h.current(e, o), t || (l.current = !0)
                    }
                  }))
                }
              },
              n = function(e) {
                void 0 !== e.key && (cc(oc(e.code)), (void 0 === (null == p ? void 0 : p.keydown) && !0 !== (null == p ? void 0 : p.keyup) || null != p && p.keydown) && r(e))
              },
              o = function(e) {
                void 0 !== e.key && (uc(oc(e.code)), l.current = !1, null != p && p.keyup && r(e, !0))
              },
              a = i || (null == c ? void 0 : c.document) || document;
            return a.addEventListener("keyup", o, null == c ? void 0 : c.eventListenerOptions), a.addEventListener("keydown", n, null == c ? void 0 : c.eventListenerOptions), g && ic(u, null == p ? void 0 : p.splitKey).forEach((function(e) {
                return g.addHotkey(ac(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
              })),
              function() {
                a.removeEventListener("keyup", o, null == c ? void 0 : c.eventListenerOptions), a.removeEventListener("keydown", n, null == c ? void 0 : c.eventListenerOptions), g && ic(u, null == p ? void 0 : p.splitKey).forEach((function(e) {
                  return g.removeHotkey(ac(e, null == p ? void 0 : p.combinationKey, null == p ? void 0 : p.description))
                }))
              }
          }
        }), [i, u, p, v]), a
      }

      function wc(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function _c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function xc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? _c(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = wc(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : _c(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Sc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Cc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        jc = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = xc(xc({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Cc(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Sc(e.variantClassNames, (e => Sc(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_hcgxh_8kowh41 foundry_hcgxh_1d5mo5m0 foundry_hcgxh_a5x3kh0",
          variantClassNames: {
            appearance: {
              primary: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua1",
              secondary: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua2",
              tertiary: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua3",
              ghost: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua4",
              danger: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua6",
              information: "foundry_hcgxh_1qqcnua0 foundry_hcgxh_1qqcnua5"
            },
            size: {
              XS: "foundry_hcgxh_a5x3kh8",
              SM: "foundry_hcgxh_a5x3kh9",
              MD: "foundry_hcgxh_a5x3kha",
              LG: "foundry_hcgxh_a5x3khb"
            },
            fullWidth: {
              true: "foundry_hcgxh_a5x3khc",
              false: "foundry_hcgxh_a5x3khd"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const kc = {
          XS: "MD",
          SM: "MD",
          MD: "LG",
          LG: "LG"
        },
        Oc = (0, s.forwardRef)((({
          testId: e,
          asChild: t,
          className: r,
          icon: n,
          label: o,
          appearance: c,
          fullWidth: u = !1,
          size: d = "MD",
          onClick: f,
          children: h,
          ...p
        }, v) => {
          const g = (0, s.useRef)(null),
            m = F(g, v),
            y = Un(),
            b = "string" == typeof d ? d : d?.[y] ?? d.default ?? "MD",
            {
              events: w,
              others: _
            } = (0, a.bZ)(p, {
              onPress: !1
            }),
            {
              buttonProps: x,
              isPressed: S
            } = tr({
              ..._,
              elementType: "button",
              preventFocusOnPress: !0,
              onPress: e => _.onPress?.(e) ?? f?.(e)
            }, g),
            C = (0, a.v6)({
              ...w,
              role: "button",
              "data-pressed": S,
              "data-testid": e,
              className: jc({
                appearance: c,
                size: b,
                fullWidth: u
              })
            }, {
              ...x,
              className: r
            }),
            j = z[n],
            k = t ? l.Slot : "button",
            O = kc[b];
          return (0, i.jsxs)(k, {
            ref: m,
            ...C,
            children: [j && (0, i.jsx)(j, {
              label: o || "",
              size: O
            }), (0, i.jsx)(l.Slottable, {
              children: h
            })]
          })
        })),
        Pc = new Map;

      function Ec(e, t) {
        if (e === t) return e;
        const r = Pc.get(e);
        if (r) return r.forEach((e => e(t))), t;
        const n = Pc.get(t);
        return n ? (n.forEach((t => t(e))), e) : t
      }

      function Nc(...e) {
        return (...t) => {
          for (const r of e) "function" == typeof r && r(...t)
        }
      }
      var Tc;

      function Lc(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Dc(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Mc(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Dc(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Lc(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dc(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Rc(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      r(40323), r(5117), r(74534), r(66573), r(11666), r(96810), r(1571),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(Tc || (Tc = {})), Symbol.toStringTag, r(79630);
      var zc = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ac = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Mc(Mc({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) zc(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Rc(e.variantClassNames, (e => Rc(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_local_cw8njk0",
          variantClassNames: {
            size: {
              LG: "foundry_local_tdsdcdu foundry_local_tdsdcd0 foundry_local_tdsdcdw",
              MD: "foundry_local_tdsdcdu foundry_local_tdsdcd0 foundry_local_tdsdcdx",
              SM: "foundry_local_tdsdcdu foundry_local_tdsdcd0 foundry_local_tdsdcdy",
              XS: "foundry_local_tdsdcdu foundry_local_tdsdcd0 foundry_local_tdsdcdz"
            },
            appearance: {
              default: "foundry_local_tdsdcdu foundry_local_tdsdcd0 foundry_local_tdsdcd10",
              bold: "foundry_local_tdsdcdu foundry_local_tdsdcd0 foundry_local_tdsdcd11",
              hyperlink: "foundry_local_tdsdcdu foundry_local_tdsdcd0 foundry_local_tdsdcd12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ic = (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, a) => {
        const s = e ? l.Slot : "p",
          c = function(...e) {
            const t = {
              ...e[0]
            };
            for (let r = 1; r < e.length; r++) {
              const n = e[r];
              for (const e in n) {
                const r = t[e],
                  o = n[e];
                "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = Nc(r, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof o ? "id" === e && r && o ? t.id = Ec(r, o) : t[e] = void 0 !== o ? o : r : t[e] = (0, O.A)(r, o)
              }
            }
            return t
          }({
            className: Ac({
              size: n,
              appearance: r
            })
          }, o);
        return (0, i.jsx)(s, {
          ref: a,
          "data-testid": t,
          ...c
        })
      }));
      var Vc = "foundry_local_bc732x1";
      const Fc = (0, s.forwardRef)((({
        shortcut: e,
        isInline: t,
        onShortcut: r
      }, n) => (bc(e, (e => r?.(e)), [r]), (0, i.jsx)(Ic, {
        size: "XS",
        className: (0, O.$)("foundry_local_bc732x0", {
          [Vc]: t
        }),
        asChild: !0,
        children: (0, i.jsx)("kbd", {
          ref: n,
          children: e
        })
      }))));
      var qc = r(19202),
        Bc = r(74406),
        $c = r(45421),
        Hc = r(34902),
        Wc = r(36146),
        Gc = r(63694),
        [Uc, Kc] = (0, il.A)("Tooltip", [$c.Bk]),
        Xc = (0, $c.Bk)(),
        Yc = "TooltipProvider",
        Zc = 700,
        Qc = "tooltip.open",
        [Jc, eu] = Uc(Yc),
        tu = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = Zc,
            skipDelayDuration: n = 300,
            disableHoverableContent: o = !1,
            children: a
          } = e, l = s.useRef(!0), c = s.useRef(!1), u = s.useRef(0);
          return s.useEffect((() => {
            const e = u.current;
            return () => window.clearTimeout(e)
          }), []), (0, i.jsx)(Jc, {
            scope: t,
            isOpenDelayedRef: l,
            delayDuration: r,
            onOpen: s.useCallback((() => {
              window.clearTimeout(u.current), l.current = !1
            }), []),
            onClose: s.useCallback((() => {
              window.clearTimeout(u.current), u.current = window.setTimeout((() => l.current = !0), n)
            }), [n]),
            isPointerInTransitRef: c,
            onPointerInTransitChange: s.useCallback((e => {
              c.current = e
            }), []),
            disableHoverableContent: o,
            children: a
          })
        };
      tu.displayName = Yc;
      var ru = "Tooltip",
        [nu, ou] = Uc(ru),
        iu = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            disableHoverableContent: l,
            delayDuration: c
          } = e, u = eu(ru, e.__scopeTooltip), d = Xc(t), [f, h] = s.useState(null), p = (0, Bc.useId)(), v = s.useRef(0), g = l ?? u.disableHoverableContent, m = c ?? u.delayDuration, y = s.useRef(!1), [b, w] = (0, al.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: e => {
              e ? (u.onOpen(), document.dispatchEvent(new CustomEvent(Qc))) : u.onClose(), a?.(e)
            },
            caller: ru
          }), _ = s.useMemo((() => b ? y.current ? "delayed-open" : "instant-open" : "closed"), [b]), x = s.useCallback((() => {
            window.clearTimeout(v.current), v.current = 0, y.current = !1, w(!0)
          }), [w]), S = s.useCallback((() => {
            window.clearTimeout(v.current), v.current = 0, w(!1)
          }), [w]), C = s.useCallback((() => {
            window.clearTimeout(v.current), v.current = window.setTimeout((() => {
              y.current = !0, w(!0), v.current = 0
            }), m)
          }), [m, w]);
          return s.useEffect((() => () => {
            v.current && (window.clearTimeout(v.current), v.current = 0)
          }), []), (0, i.jsx)($c.bL, {
            ...d,
            children: (0, i.jsx)(nu, {
              scope: t,
              contentId: p,
              open: b,
              stateAttribute: _,
              trigger: f,
              onTriggerChange: h,
              onTriggerEnter: s.useCallback((() => {
                u.isOpenDelayedRef.current ? C() : x()
              }), [u.isOpenDelayedRef, C, x]),
              onTriggerLeave: s.useCallback((() => {
                g ? S() : (window.clearTimeout(v.current), v.current = 0)
              }), [S, g]),
              onOpen: x,
              onClose: S,
              disableHoverableContent: g,
              children: r
            })
          })
        };
      iu.displayName = ru;
      var au = "TooltipTrigger",
        su = s.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = ou(au, r), a = eu(au, r), l = Xc(r), c = s.useRef(null), u = (0, ol.s)(t, c, o.onTriggerChange), d = s.useRef(!1), f = s.useRef(!1), h = s.useCallback((() => d.current = !1), []);
          return s.useEffect((() => () => document.removeEventListener("pointerup", h)), [h]), (0, i.jsx)($c.Mz, {
            asChild: !0,
            ...l,
            children: (0, i.jsx)(ul.sG.button, {
              "aria-describedby": o.open ? o.contentId : void 0,
              "data-state": o.stateAttribute,
              ...n,
              ref: u,
              onPointerMove: (0, nl.m)(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (f.current || a.isPointerInTransitRef.current || (o.onTriggerEnter(), f.current = !0))
              })),
              onPointerLeave: (0, nl.m)(e.onPointerLeave, (() => {
                o.onTriggerLeave(), f.current = !1
              })),
              onPointerDown: (0, nl.m)(e.onPointerDown, (() => {
                o.open && o.onClose(), d.current = !0, document.addEventListener("pointerup", h, {
                  once: !0
                })
              })),
              onFocus: (0, nl.m)(e.onFocus, (() => {
                d.current || o.onOpen()
              })),
              onBlur: (0, nl.m)(e.onBlur, o.onClose),
              onClick: (0, nl.m)(e.onClick, o.onClose)
            })
          })
        }));
      su.displayName = au;
      var lu = "TooltipPortal",
        [cu, uu] = Uc(lu, {
          forceMount: void 0
        }),
        du = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: n,
            container: o
          } = e, a = ou(lu, t);
          return (0, i.jsx)(cu, {
            scope: t,
            forceMount: r,
            children: (0, i.jsx)(Wc.C, {
              present: r || a.open,
              children: (0, i.jsx)(Hc.Portal, {
                asChild: !0,
                container: o,
                children: n
              })
            })
          })
        };
      du.displayName = lu;
      var fu = "TooltipContent",
        hu = s.forwardRef(((e, t) => {
          const r = uu(fu, e.__scopeTooltip),
            {
              forceMount: n = r.forceMount,
              side: o = "top",
              ...a
            } = e,
            s = ou(fu, e.__scopeTooltip);
          return (0, i.jsx)(Wc.C, {
            present: n || s.open,
            children: s.disableHoverableContent ? (0, i.jsx)(yu, {
              side: o,
              ...a,
              ref: t
            }) : (0, i.jsx)(pu, {
              side: o,
              ...a,
              ref: t
            })
          })
        })),
        pu = s.forwardRef(((e, t) => {
          const r = ou(fu, e.__scopeTooltip),
            n = eu(fu, e.__scopeTooltip),
            o = s.useRef(null),
            a = (0, ol.s)(t, o),
            [l, c] = s.useState(null),
            {
              trigger: u,
              onClose: d
            } = r,
            f = o.current,
            {
              onPointerInTransitChange: h
            } = n,
            p = s.useCallback((() => {
              c(null), h(!1)
            }), [h]),
            v = s.useCallback(((e, t) => {
              const r = e.currentTarget,
                n = {
                  x: e.clientX,
                  y: e.clientY
                },
                o = function(e, t, r = 5) {
                  const n = [];
                  switch (t) {
                    case "top":
                      n.push({
                        x: e.x - r,
                        y: e.y + r
                      }, {
                        x: e.x + r,
                        y: e.y + r
                      });
                      break;
                    case "bottom":
                      n.push({
                        x: e.x - r,
                        y: e.y - r
                      }, {
                        x: e.x + r,
                        y: e.y - r
                      });
                      break;
                    case "left":
                      n.push({
                        x: e.x + r,
                        y: e.y - r
                      }, {
                        x: e.x + r,
                        y: e.y + r
                      });
                      break;
                    case "right":
                      n.push({
                        x: e.x - r,
                        y: e.y - r
                      }, {
                        x: e.x - r,
                        y: e.y + r
                      })
                  }
                  return n
                }(n, function(e, t) {
                  const r = Math.abs(t.top - e.y),
                    n = Math.abs(t.bottom - e.y),
                    o = Math.abs(t.right - e.x),
                    i = Math.abs(t.left - e.x);
                  switch (Math.min(r, n, o, i)) {
                    case i:
                      return "left";
                    case o:
                      return "right";
                    case r:
                      return "top";
                    case n:
                      return "bottom";
                    default:
                      throw new Error("unreachable")
                  }
                }(n, r.getBoundingClientRect())),
                i = function(e) {
                  const t = e.slice();
                  return t.sort(((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0)),
                    function(e) {
                      if (e.length <= 1) return e.slice();
                      const t = [];
                      for (let r = 0; r < e.length; r++) {
                        const n = e[r];
                        for (; t.length >= 2;) {
                          const e = t[t.length - 1],
                            r = t[t.length - 2];
                          if (!((e.x - r.x) * (n.y - r.y) >= (e.y - r.y) * (n.x - r.x))) break;
                          t.pop()
                        }
                        t.push(n)
                      }
                      t.pop();
                      const r = [];
                      for (let t = e.length - 1; t >= 0; t--) {
                        const n = e[t];
                        for (; r.length >= 2;) {
                          const e = r[r.length - 1],
                            t = r[r.length - 2];
                          if (!((e.x - t.x) * (n.y - t.y) >= (e.y - t.y) * (n.x - t.x))) break;
                          r.pop()
                        }
                        r.push(n)
                      }
                      return r.pop(), 1 === t.length && 1 === r.length && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r)
                    }(t)
                }([...o, ... function(e) {
                  const {
                    top: t,
                    right: r,
                    bottom: n,
                    left: o
                  } = e;
                  return [{
                    x: o,
                    y: t
                  }, {
                    x: r,
                    y: t
                  }, {
                    x: r,
                    y: n
                  }, {
                    x: o,
                    y: n
                  }]
                }(t.getBoundingClientRect())]);
              c(i), h(!0)
            }), [h]);
          return s.useEffect((() => () => p()), [p]), s.useEffect((() => {
            if (u && f) {
              const e = e => v(e, f),
                t = e => v(e, u);
              return u.addEventListener("pointerleave", e), f.addEventListener("pointerleave", t), () => {
                u.removeEventListener("pointerleave", e), f.removeEventListener("pointerleave", t)
              }
            }
          }), [u, f, v, p]), s.useEffect((() => {
            if (l) {
              const e = e => {
                const t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  n = u?.contains(t) || f?.contains(t),
                  o = ! function(e, t) {
                    const {
                      x: r,
                      y: n
                    } = e;
                    let o = !1;
                    for (let e = 0, i = t.length - 1; e < t.length; i = e++) {
                      const a = t[e],
                        s = t[i],
                        l = a.x,
                        c = a.y,
                        u = s.x,
                        d = s.y;
                      c > n != d > n && r < (u - l) * (n - c) / (d - c) + l && (o = !o)
                    }
                    return o
                  }(r, l);
                n ? p() : o && (p(), d())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }), [u, f, l, d, p]), (0, i.jsx)(yu, {
            ...e,
            ref: a
          })
        })),
        [vu, gu] = Uc(ru, {
          isInside: !1
        }),
        mu = (0, l.createSlottable)("TooltipContent"),
        yu = s.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": o,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            ...c
          } = e, u = ou(fu, r), d = Xc(r), {
            onClose: f
          } = u;
          return s.useEffect((() => (document.addEventListener(Qc, f), () => document.removeEventListener(Qc, f))), [f]), s.useEffect((() => {
            if (u.trigger) {
              const e = e => {
                const t = e.target;
                t?.contains(u.trigger) && f()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }), [u.trigger, f]), (0, i.jsx)(qc.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: f,
            children: (0, i.jsxs)($c.UC, {
              "data-state": u.stateAttribute,
              ...d,
              ...c,
              ref: t,
              style: {
                ...c.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, i.jsx)(mu, {
                children: n
              }), (0, i.jsx)(vu, {
                scope: r,
                isInside: !0,
                children: (0, i.jsx)(Gc.Root, {
                  id: u.contentId,
                  role: "tooltip",
                  children: o || n
                })
              })]
            })
          })
        }));
      hu.displayName = fu;
      var bu = "TooltipArrow",
        wu = s.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...n
          } = e, o = Xc(r);
          return gu(bu, r).isInside ? null : (0, i.jsx)($c.i3, {
            ...o,
            ...n,
            ref: t
          })
        }));
      wu.displayName = bu;
      var _u = tu,
        xu = iu,
        Su = su,
        Cu = du,
        ju = hu,
        ku = wu;
      const Ou = ({
        content: e,
        children: t,
        side: r = "top",
        sideOffset: n = 8,
        align: o = "center",
        alignOffset: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: c,
        collisionPadding: u,
        sticky: d = "partial",
        onEscapeKeyDown: f,
        onPointerDownOutside: h,
        label: p,
        defaultOpen: v,
        open: g,
        onOpenChange: m,
        delayDuration: y = 400,
        portal: b = !0,
        arrow: w = !0,
        portalContainer: _,
        testId: x
      }) => {
        const [S = !1, C] = $({
          defaultProp: v,
          prop: g,
          onChange: m
        }), j = V(S), k = ys({
          opacity: S ? 1 : 0,
          immediate: S && !j
        }), O = "left" === r || "right" === r ? "center" : o, P = b ? {
          container: _
        } : {}, E = b ? Cu : s.Fragment, N = w ? {
          className: "foundry_hcgxh_h3lgaa2"
        } : {}, T = w ? ku : s.Fragment;
        return (0, i.jsx)(_u, {
          delayDuration: y,
          children: (0, i.jsxs)(xu, {
            open: S,
            onOpenChange: C,
            children: [(0, i.jsx)(Su, {
              asChild: !0,
              className: "foundry_hcgxh_h3lgaa3",
              onClick: e => e.preventDefault?.(),
              children: t
            }), (0, i.jsx)(E, {
              ...P,
              children: (0, i.jsx)(ju, {
                side: r,
                align: O,
                sticky: d,
                forceMount: !0,
                "aria-label": p,
                "data-testid": x,
                sideOffset: n,
                alignOffset: a,
                onEscapeKeyDown: f,
                avoidCollisions: l,
                collisionPadding: u,
                collisionBoundary: c,
                onPointerDownOutside: h,
                children: (0, i.jsxs)(zs.div, {
                  className: "foundry_hcgxh_h3lgaa0",
                  style: k,
                  children: [(0, i.jsx)(M, {
                    size: "SM",
                    className: "foundry_hcgxh_h3lgaa1",
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
      var Pu = "foundry_hcgxh_bwy1ds1",
        Eu = "foundry_hcgxh_bwy1dsg",
        Nu = "foundry_hcgxh_bwy1dsf";
      const Tu = e => {
        e.preventDefault?.()
      };
      (0, s.forwardRef)((({
        onClose: e,
        onDownload: t,
        zoomLevel: r,
        zoomIn: n,
        zoomOut: o,
        zoomTo: a,
        minZoomLevel: s,
        maxZoomLevel: l,
        canZoomIn: c,
        canZoomOut: u,
        resetZoom: d,
        caption: f,
        showDownloadButton: h,
        defaultZoomLevel: p,
        showZoomControls: v
      }, g) => {
        const m = Qs(),
          y = I("screen and (max-width: 1024px)"),
          b = r !== p,
          w = y ? "SM" : "LG",
          _ = ys({
            opacity: b ? 1 : 0,
            immediate: q()
          });
        bc(["+", "=", "add", "plus"], (() => n?.()), {
          preventDefault: !0,
          enabled: v
        }), bc(["minus", "subtract"], (() => o?.()), {
          preventDefault: !0,
          enabled: v
        }), bc("r", (() => d?.()), {
          preventDefault: !0,
          enabled: v
        });
        const x = H() && y;
        return (0, i.jsx)(gc, {
          children: (0, i.jsxs)("div", {
            className: "foundry_hcgxh_bwy1ds0",
            ref: g,
            children: [(0, i.jsx)(Ou, {
              side: "right",
              portal: !1,
              delayDuration: 0,
              onPointerDownOutside: Tu,
              content: (0, i.jsxs)("div", {
                className: Nu,
                children: [m.formatMessage($l), (0, i.jsx)(M, {
                  size: "XS",
                  className: Eu,
                  children: m.formatMessage(Hl, {
                    shortcut: (0, i.jsx)(Fc, {
                      shortcut: "Esc",
                      isInline: !0
                    })
                  })
                })]
              }),
              children: (0, i.jsx)(Oc, {
                size: w,
                appearance: "tertiary",
                icon: "ArrowLeft",
                label: m.formatMessage($l),
                className: (0, O.$)(Pu, "foundry_hcgxh_bwy1ds2"),
                onPress: e
              })
            }), (0, i.jsxs)("div", {
              className: "foundry_hcgxh_bwy1ds3",
              children: [!x && v && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsxs)("div", {
                  className: "foundry_hcgxh_bwy1ds4",
                  children: [(0, i.jsx)(Ou, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: Tu,
                    content: (0, i.jsxs)("div", {
                      className: Nu,
                      children: [m.formatMessage(Wl), (0, i.jsx)(M, {
                        size: "XS",
                        className: Eu,
                        children: m.formatMessage(Gl, {
                          shortcut: (0, i.jsx)(Fc, {
                            shortcut: "+",
                            isInline: !0
                          })
                        })
                      })]
                    }),
                    children: (0, i.jsx)(Oc, {
                      size: w,
                      appearance: "tertiary",
                      icon: "Plus",
                      label: m.formatMessage(Wl),
                      className: (0, O.$)(Pu, "foundry_hcgxh_bwy1ds5"),
                      onPress: () => n(),
                      isDisabled: !c
                    })
                  }), (0, i.jsxs)(Vl, {
                    className: "foundry_hcgxh_bwy1dsa",
                    value: [r],
                    max: l,
                    min: s,
                    step: 1,
                    orientation: "vertical",
                    onValueChange: e => a?.(e[0]),
                    children: [(0, i.jsx)(Fl, {
                      className: "foundry_hcgxh_bwy1dsb",
                      children: (0, i.jsx)(ql, {
                        className: "foundry_hcgxh_bwy1dsc"
                      })
                    }), (0, i.jsx)(Ou, {
                      side: "left",
                      portal: !1,
                      delayDuration: 0,
                      onPointerDownOutside: Tu,
                      content: m.formatMessage(Ql, {
                        zoom: r.toFixed(0)
                      }),
                      children: (0, i.jsx)(Bl, {
                        className: "foundry_hcgxh_bwy1dsd",
                        "aria-label": m.formatMessage(Zl),
                        children: (0, i.jsx)("span", {
                          className: "foundry_hcgxh_bwy1dse"
                        })
                      })
                    })]
                  }), (0, i.jsx)(Ou, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: Tu,
                    content: (0, i.jsxs)("div", {
                      className: Nu,
                      children: [m.formatMessage(Ul), (0, i.jsx)(M, {
                        size: "XS",
                        className: Eu,
                        children: m.formatMessage(Kl, {
                          shortcut: (0, i.jsx)(Fc, {
                            shortcut: "-",
                            isInline: !0
                          })
                        })
                      })]
                    }),
                    children: (0, i.jsx)(Oc, {
                      size: w,
                      appearance: "tertiary",
                      icon: "Minus",
                      label: m.formatMessage(Ul),
                      className: (0, O.$)(Pu, "foundry_hcgxh_bwy1ds6"),
                      onPress: () => o(),
                      isDisabled: !u
                    })
                  })]
                }), (0, i.jsx)(zs.div, {
                  style: _,
                  children: (0, i.jsx)(Ou, {
                    side: "left",
                    portal: !1,
                    delayDuration: 0,
                    onPointerDownOutside: Tu,
                    content: (0, i.jsxs)("div", {
                      className: Nu,
                      children: [m.formatMessage(Xl), (0, i.jsx)(M, {
                        size: "XS",
                        className: Eu,
                        children: m.formatMessage(Yl, {
                          shortcut: (0, i.jsx)(Fc, {
                            shortcut: "R",
                            isInline: !0
                          })
                        })
                      })]
                    }),
                    children: (0, i.jsx)(Oc, {
                      size: w,
                      appearance: "tertiary",
                      icon: "Undo",
                      label: m.formatMessage(Xl),
                      className: (0, O.$)(Pu, "foundry_hcgxh_bwy1ds7"),
                      onPress: d,
                      isDisabled: !b,
                      "aria-hidden": !b
                    })
                  })
                })]
              }), h && x && (0, i.jsx)(Ou, {
                side: "left",
                portal: !1,
                delayDuration: 0,
                onPointerDownOutside: Tu,
                content: m.formatMessage(ec),
                children: (0, i.jsx)(Oc, {
                  size: w,
                  appearance: "tertiary",
                  icon: "Download",
                  label: m.formatMessage(Jl),
                  className: Pu,
                  onPress: e
                })
              })]
            }), (0, i.jsxs)("div", {
              className: "foundry_hcgxh_bwy1ds8",
              children: [f && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                  className: "foundry_hcgxh_bwy1dsh"
                }), (0, i.jsx)(M, {
                  size: "SM",
                  "aria-hidden": !0,
                  asChild: "string" != typeof f,
                  children: f
                })]
              }), h && !x && (0, i.jsx)("div", {
                className: "foundry_hcgxh_bwy1ds9",
                children: (0, i.jsx)(Ou, {
                  side: "left",
                  portal: !1,
                  delayDuration: 0,
                  onPointerDownOutside: Tu,
                  content: m.formatMessage(ec),
                  children: (0, i.jsx)(Oc, {
                    size: w,
                    appearance: "tertiary",
                    icon: "Download",
                    label: m.formatMessage(Jl),
                    className: Pu,
                    onPress: t
                  })
                })
              })]
            })]
          })
        })
      }));
      var Lu = r(24780);
      zs(Lu.Overlay), zs(Lu.Content), (0, a.AK)(.77, 0, .175, 1);
      var Du = r(27114),
        Mu = r(72480),
        Ru = r(27734),
        zu = r(85307),
        Au = r(98463),
        Iu = r(19690),
        Vu = [" ", "Enter", "ArrowUp", "ArrowDown"],
        Fu = [" ", "Enter"],
        qu = "Select",
        [Bu, $u, Hu] = (0, dl.N)(qu),
        [Wu, Gu] = (0, il.A)(qu, [Hu, $c.Bk]),
        Uu = (0, $c.Bk)(),
        [Ku, Xu] = Wu(qu),
        [Yu, Zu] = Wu(qu),
        Qu = e => {
          const {
            __scopeSelect: t,
            children: r,
            open: n,
            defaultOpen: o,
            onOpenChange: a,
            value: l,
            defaultValue: c,
            onValueChange: u,
            dir: d,
            name: f,
            autoComplete: h,
            disabled: p,
            required: v,
            form: g
          } = e, m = Uu(t), [y, b] = s.useState(null), [w, _] = s.useState(null), [x, S] = s.useState(!1), C = (0, sl.jH)(d), [j, k] = (0, al.i)({
            prop: n,
            defaultProp: o ?? !1,
            onChange: a,
            caller: qu
          }), [O, P] = (0, al.i)({
            prop: l,
            defaultProp: c,
            onChange: u,
            caller: qu
          }), E = s.useRef(null), N = !y || g || !!y.closest("form"), [T, L] = s.useState(new Set), D = Array.from(T).map((e => e.props.value)).join(";");
          return (0, i.jsx)($c.bL, {
            ...m,
            children: (0, i.jsxs)(Ku, {
              required: v,
              scope: t,
              trigger: y,
              onTriggerChange: b,
              valueNode: w,
              onValueNodeChange: _,
              valueNodeHasChildren: x,
              onValueNodeHasChildrenChange: S,
              contentId: (0, Bc.useId)(),
              value: O,
              onValueChange: P,
              open: j,
              onOpenChange: k,
              dir: C,
              triggerPointerDownPosRef: E,
              disabled: p,
              children: [(0, i.jsx)(Bu.Provider, {
                scope: t,
                children: (0, i.jsx)(Yu, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: s.useCallback((e => {
                    L((t => new Set(t).add(e)))
                  }), []),
                  onNativeOptionRemove: s.useCallback((e => {
                    L((t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    }))
                  }), []),
                  children: r
                })
              }), N ? (0, i.jsxs)(Dd, {
                "aria-hidden": !0,
                required: v,
                tabIndex: -1,
                name: f,
                autoComplete: h,
                value: O,
                onChange: e => P(e.target.value),
                disabled: p,
                form: g,
                children: [void 0 === O ? (0, i.jsx)("option", {
                  value: ""
                }) : null, Array.from(T)]
              }, D) : null]
            })
          })
        };
      Qu.displayName = qu;
      var Ju = "SelectTrigger",
        ed = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...o
          } = e, a = Uu(r), l = Xu(Ju, r), c = l.disabled || n, u = (0, ol.s)(t, l.onTriggerChange), d = $u(r), f = s.useRef("touch"), [h, p, v] = Rd((e => {
            const t = d().filter((e => !e.disabled)),
              r = t.find((e => e.value === l.value)),
              n = zd(t, e, r);
            void 0 !== n && l.onValueChange(n.value)
          })), g = e => {
            c || (l.onOpenChange(!0), v()), e && (l.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, i.jsx)($c.Mz, {
            asChild: !0,
            ...a,
            children: (0, i.jsx)(ul.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": l.contentId,
              "aria-expanded": l.open,
              "aria-required": l.required,
              "aria-autocomplete": "none",
              dir: l.dir,
              "data-state": l.open ? "open" : "closed",
              disabled: c,
              "data-disabled": c ? "" : void 0,
              "data-placeholder": Md(l.value) ? "" : void 0,
              ...o,
              ref: u,
              onClick: (0, nl.m)(o.onClick, (e => {
                e.currentTarget.focus(), "mouse" !== f.current && g(e)
              })),
              onPointerDown: (0, nl.m)(o.onPointerDown, (e => {
                f.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (g(e), e.preventDefault())
              })),
              onKeyDown: (0, nl.m)(o.onKeyDown, (e => {
                const t = "" !== h.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || p(e.key), t && " " === e.key || Vu.includes(e.key) && (g(), e.preventDefault())
              }))
            })
          })
        }));
      ed.displayName = Ju;
      var td = "SelectValue",
        rd = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            children: a,
            placeholder: s = "",
            ...l
          } = e, c = Xu(td, r), {
            onValueNodeHasChildrenChange: u
          } = c, d = void 0 !== a, f = (0, ol.s)(t, c.onValueNodeChange);
          return (0, zu.N)((() => {
            u(d)
          }), [u, d]), (0, i.jsx)(ul.sG.span, {
            ...l,
            ref: f,
            style: {
              pointerEvents: "none"
            },
            children: Md(c.value) ? (0, i.jsx)(i.Fragment, {
              children: s
            }) : a
          })
        }));
      rd.displayName = td;
      var nd = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          children: n,
          ...o
        } = e;
        return (0, i.jsx)(ul.sG.span, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          children: n || "▼"
        })
      }));
      nd.displayName = "SelectIcon";
      var od = e => (0, i.jsx)(Hc.Portal, {
        asChild: !0,
        ...e
      });
      od.displayName = "SelectPortal";
      var id = "SelectContent",
        ad = s.forwardRef(((e, t) => {
          const r = Xu(id, e.__scopeSelect),
            [n, o] = s.useState();
          if ((0, zu.N)((() => {
              o(new DocumentFragment)
            }), []), !r.open) {
            const t = n;
            return t ? Ht.createPortal((0, i.jsx)(ld, {
              scope: e.__scopeSelect,
              children: (0, i.jsx)(Bu.Slot, {
                scope: e.__scopeSelect,
                children: (0, i.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, i.jsx)(dd, {
            ...e,
            ref: t
          })
        }));
      ad.displayName = id;
      var sd = 10,
        [ld, cd] = Wu(id),
        ud = (0, l.createSlot)("SelectContent.RemoveScroll"),
        dd = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: o,
            onEscapeKeyDown: a,
            onPointerDownOutside: l,
            side: c,
            sideOffset: u,
            align: d,
            alignOffset: f,
            arrowPadding: h,
            collisionBoundary: p,
            collisionPadding: v,
            sticky: g,
            hideWhenDetached: m,
            avoidCollisions: y,
            ...b
          } = e, w = Xu(id, r), [_, x] = s.useState(null), [S, C] = s.useState(null), j = (0, ol.s)(t, (e => x(e))), [k, O] = s.useState(null), [P, E] = s.useState(null), N = $u(r), [T, L] = s.useState(!1), D = s.useRef(!1);
          s.useEffect((() => {
            if (_) return (0, Au.Eq)(_)
          }), [_]), (0, Du.Oh)();
          const M = s.useCallback((e => {
              const [t, ...r] = N().map((e => e.ref.current)), [n] = r.slice(-1), o = document.activeElement;
              for (const r of e) {
                if (r === o) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && S && (S.scrollTop = 0), r === n && S && (S.scrollTop = S.scrollHeight), r?.focus(), document.activeElement !== o) return
              }
            }), [N, S]),
            R = s.useCallback((() => M([k, _])), [M, k, _]);
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
                r = r => {
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : _.contains(r.target) || z(!1), document.removeEventListener("pointermove", t), A.current = null
                };
              return null !== A.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
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
          const [I, V] = Rd((e => {
            const t = N().filter((e => !e.disabled)),
              r = t.find((e => e.ref.current === document.activeElement)),
              n = zd(t, e, r);
            n && setTimeout((() => n.ref.current.focus()))
          })), F = s.useCallback(((e, t, r) => {
            const n = !D.current && !r;
            (void 0 !== w.value && w.value === t || n) && (O(e), n && (D.current = !0))
          }), [w.value]), q = s.useCallback((() => _?.focus()), [_]), B = s.useCallback(((e, t, r) => {
            const n = !D.current && !r;
            (void 0 !== w.value && w.value === t || n) && E(e)
          }), [w.value]), $ = "popper" === n ? hd : fd, H = $ === hd ? {
            side: c,
            sideOffset: u,
            align: d,
            alignOffset: f,
            arrowPadding: h,
            collisionBoundary: p,
            collisionPadding: v,
            sticky: g,
            hideWhenDetached: m,
            avoidCollisions: y
          } : {};
          return (0, i.jsx)(ld, {
            scope: r,
            content: _,
            viewport: S,
            onViewportChange: C,
            itemRefCallback: F,
            selectedItem: k,
            onItemLeave: q,
            itemTextRefCallback: B,
            focusSelectedItem: R,
            selectedItemText: P,
            position: n,
            isPositioned: T,
            searchRef: I,
            children: (0, i.jsx)(Iu.RemoveScroll, {
              as: ud,
              allowPinchZoom: !0,
              children: (0, i.jsx)(Mu.n, {
                asChild: !0,
                trapped: w.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, nl.m)(o, (e => {
                  w.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, i.jsx)(qc.qW, {
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
                    ref: j,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: (0, nl.m)(b.onKeyDown, (e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || V(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        const t = N().filter((e => !e.disabled));
                        let r = t.map((e => e.ref.current));
                        if (["ArrowUp", "End"].includes(e.key) && (r = r.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const t = e.target,
                            n = r.indexOf(t);
                          r = r.slice(n + 1)
                        }
                        setTimeout((() => M(r))), e.preventDefault()
                      }
                    }))
                  })
                })
              })
            })
          })
        }));
      dd.displayName = "SelectContentImpl";
      var fd = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, a = Xu(id, r), l = cd(id, r), [c, u] = s.useState(null), [d, f] = s.useState(null), h = (0, ol.s)(t, (e => f(e))), p = $u(r), v = s.useRef(!1), g = s.useRef(!0), {
          viewport: m,
          selectedItem: y,
          selectedItemText: b,
          focusSelectedItem: w
        } = l, _ = s.useCallback((() => {
          if (a.trigger && a.valueNode && c && d && m && y && b) {
            const e = a.trigger.getBoundingClientRect(),
              t = d.getBoundingClientRect(),
              r = a.valueNode.getBoundingClientRect(),
              o = b.getBoundingClientRect();
            if ("rtl" !== a.dir) {
              const n = o.left - t.left,
                i = r.left - n,
                a = e.left - i,
                s = e.width + a,
                l = Math.max(s, t.width),
                u = window.innerWidth - sd,
                d = rl(i, [sd, Math.max(sd, u - l)]);
              c.style.minWidth = s + "px", c.style.left = d + "px"
            } else {
              const n = t.right - o.right,
                i = window.innerWidth - r.right - n,
                a = window.innerWidth - e.right - i,
                s = e.width + a,
                l = Math.max(s, t.width),
                u = window.innerWidth - sd,
                d = rl(i, [sd, Math.max(sd, u - l)]);
              c.style.minWidth = s + "px", c.style.right = d + "px"
            }
            const i = p(),
              s = window.innerHeight - 2 * sd,
              l = m.scrollHeight,
              u = window.getComputedStyle(d),
              f = parseInt(u.borderTopWidth, 10),
              h = parseInt(u.paddingTop, 10),
              g = parseInt(u.borderBottomWidth, 10),
              w = f + h + l + parseInt(u.paddingBottom, 10) + g,
              _ = Math.min(5 * y.offsetHeight, w),
              x = window.getComputedStyle(m),
              S = parseInt(x.paddingTop, 10),
              C = parseInt(x.paddingBottom, 10),
              j = e.top + e.height / 2 - sd,
              k = s - j,
              O = y.offsetHeight / 2,
              P = f + h + (y.offsetTop + O),
              E = w - P;
            if (P <= j) {
              const e = i.length > 0 && y === i[i.length - 1].ref.current;
              c.style.bottom = "0px";
              const t = d.clientHeight - m.offsetTop - m.offsetHeight,
                r = P + Math.max(k, O + (e ? C : 0) + t + g);
              c.style.height = r + "px"
            } else {
              const e = i.length > 0 && y === i[0].ref.current;
              c.style.top = "0px";
              const t = Math.max(j, f + m.offsetTop + (e ? S : 0) + O) + E;
              c.style.height = t + "px", m.scrollTop = P - j + m.offsetTop
            }
            c.style.margin = `${sd}px 0`, c.style.minHeight = _ + "px", c.style.maxHeight = s + "px", n?.(), requestAnimationFrame((() => v.current = !0))
          }
        }), [p, a.trigger, a.valueNode, c, d, m, y, b, a.dir, n]);
        (0, zu.N)((() => _()), [_]);
        const [x, S] = s.useState();
        (0, zu.N)((() => {
          d && S(window.getComputedStyle(d).zIndex)
        }), [d]);
        const C = s.useCallback((e => {
          e && !0 === g.current && (_(), w?.(), g.current = !1)
        }), [_, w]);
        return (0, i.jsx)(pd, {
          scope: r,
          contentWrapper: c,
          shouldExpandOnScrollRef: v,
          onScrollButtonChange: C,
          children: (0, i.jsx)("div", {
            ref: u,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: x
            },
            children: (0, i.jsx)(ul.sG.div, {
              ...o,
              ref: h,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...o.style
              }
            })
          })
        })
      }));
      fd.displayName = "SelectItemAlignedPosition";
      var hd = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          align: n = "start",
          collisionPadding: o = sd,
          ...a
        } = e, s = Uu(r);
        return (0, i.jsx)($c.UC, {
          ...s,
          ...a,
          ref: t,
          align: n,
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
      hd.displayName = "SelectPopperPosition";
      var [pd, vd] = Wu(id, {}), gd = "SelectViewport", md = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...o
        } = e, a = cd(gd, r), l = vd(gd, r), c = (0, ol.s)(t, a.onViewportChange), u = s.useRef(0);
        return (0, i.jsxs)(i.Fragment, {
          children: [(0, i.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, i.jsx)(Bu.Slot, {
            scope: r,
            children: (0, i.jsx)(ul.sG.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...o,
              ref: c,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...o.style
              },
              onScroll: (0, nl.m)(o.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: n
                  } = l;
                if (n?.current && r) {
                  const e = Math.abs(u.current - t.scrollTop);
                  if (e > 0) {
                    const n = window.innerHeight - 2 * sd,
                      o = parseFloat(r.style.minHeight),
                      i = parseFloat(r.style.height),
                      a = Math.max(o, i);
                    if (a < n) {
                      const o = a + e,
                        i = Math.min(n, o),
                        s = o - i;
                      r.style.height = i + "px", "0px" === r.style.bottom && (t.scrollTop = s > 0 ? s : 0, r.style.justifyContent = "flex-end")
                    }
                  }
                }
                u.current = t.scrollTop
              }))
            })
          })]
        })
      }));
      md.displayName = gd;
      var yd = "SelectGroup",
        [bd, wd] = Wu(yd);
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = (0, Bc.useId)();
        return (0, i.jsx)(bd, {
          scope: r,
          id: o,
          children: (0, i.jsx)(ul.sG.div, {
            role: "group",
            "aria-labelledby": o,
            ...n,
            ref: t
          })
        })
      })).displayName = yd;
      var _d = "SelectLabel";
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = wd(_d, r);
        return (0, i.jsx)(ul.sG.div, {
          id: o.id,
          ...n,
          ref: t
        })
      })).displayName = _d;
      var xd = "SelectItem",
        [Sd, Cd] = Wu(xd),
        jd = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: o = !1,
            textValue: a,
            ...l
          } = e, c = Xu(xd, r), u = cd(xd, r), d = c.value === n, [f, h] = s.useState(a ?? ""), [p, v] = s.useState(!1), g = (0, ol.s)(t, (e => u.itemRefCallback?.(e, n, o))), m = (0, Bc.useId)(), y = s.useRef("touch"), b = () => {
            o || (c.onValueChange(n), c.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, i.jsx)(Sd, {
            scope: r,
            value: n,
            disabled: o,
            textId: m,
            isSelected: d,
            onItemTextChange: s.useCallback((e => {
              h((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, i.jsx)(Bu.ItemSlot, {
              scope: r,
              value: n,
              disabled: o,
              textValue: f,
              children: (0, i.jsx)(ul.sG.div, {
                role: "option",
                "aria-labelledby": m,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": d && p,
                "data-state": d ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...l,
                ref: g,
                onFocus: (0, nl.m)(l.onFocus, (() => v(!0))),
                onBlur: (0, nl.m)(l.onBlur, (() => v(!1))),
                onClick: (0, nl.m)(l.onClick, (() => {
                  "mouse" !== y.current && b()
                })),
                onPointerUp: (0, nl.m)(l.onPointerUp, (() => {
                  "mouse" === y.current && b()
                })),
                onPointerDown: (0, nl.m)(l.onPointerDown, (e => {
                  y.current = e.pointerType
                })),
                onPointerMove: (0, nl.m)(l.onPointerMove, (e => {
                  y.current = e.pointerType, o ? u.onItemLeave?.() : "mouse" === y.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: (0, nl.m)(l.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && u.onItemLeave?.()
                })),
                onKeyDown: (0, nl.m)(l.onKeyDown, (e => {
                  "" !== u.searchRef?.current && " " === e.key || (Fu.includes(e.key) && b(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      jd.displayName = xd;
      var kd = "SelectItemText",
        Od = s.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: n,
            style: o,
            ...a
          } = e, l = Xu(kd, r), c = cd(kd, r), u = Cd(kd, r), d = Zu(kd, r), [f, h] = s.useState(null), p = (0, ol.s)(t, (e => h(e)), u.onItemTextChange, (e => c.itemTextRefCallback?.(e, u.value, u.disabled))), v = f?.textContent, g = s.useMemo((() => (0, i.jsx)("option", {
            value: u.value,
            disabled: u.disabled,
            children: v
          }, u.value)), [u.disabled, u.value, v]), {
            onNativeOptionAdd: m,
            onNativeOptionRemove: y
          } = d;
          return (0, zu.N)((() => (m(g), () => y(g))), [m, y, g]), (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(ul.sG.span, {
              id: u.textId,
              ...a,
              ref: p
            }), u.isSelected && l.valueNode && !l.valueNodeHasChildren ? Ht.createPortal(a.children, l.valueNode) : null]
          })
        }));
      Od.displayName = kd;
      var Pd = "SelectItemIndicator";
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return Cd(Pd, r).isSelected ? (0, i.jsx)(ul.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t
        }) : null
      })).displayName = Pd;
      var Ed = "SelectScrollUpButton";
      s.forwardRef(((e, t) => {
        const r = cd(Ed, e.__scopeSelect),
          n = vd(Ed, e.__scopeSelect),
          [o, a] = s.useState(!1),
          l = (0, ol.s)(t, n.onScrollButtonChange);
        return (0, zu.N)((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              a(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), o ? (0, i.jsx)(Td, {
          ...e,
          ref: l,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
          }
        }) : null
      })).displayName = Ed;
      var Nd = "SelectScrollDownButton";
      s.forwardRef(((e, t) => {
        const r = cd(Nd, e.__scopeSelect),
          n = vd(Nd, e.__scopeSelect),
          [o, a] = s.useState(!1),
          l = (0, ol.s)(t, n.onScrollButtonChange);
        return (0, zu.N)((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              a(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), o ? (0, i.jsx)(Td, {
          ...e,
          ref: l,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
          }
        }) : null
      })).displayName = Nd;
      var Td = s.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...o
        } = e, a = cd("SelectScrollButton", r), l = s.useRef(null), c = $u(r), u = s.useCallback((() => {
          null !== l.current && (window.clearInterval(l.current), l.current = null)
        }), []);
        return s.useEffect((() => () => u()), [u]), (0, zu.N)((() => {
          const e = c().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [c]), (0, i.jsx)(ul.sG.div, {
          "aria-hidden": !0,
          ...o,
          ref: t,
          style: {
            flexShrink: 0,
            ...o.style
          },
          onPointerDown: (0, nl.m)(o.onPointerDown, (() => {
            null === l.current && (l.current = window.setInterval(n, 50))
          })),
          onPointerMove: (0, nl.m)(o.onPointerMove, (() => {
            a.onItemLeave?.(), null === l.current && (l.current = window.setInterval(n, 50))
          })),
          onPointerLeave: (0, nl.m)(o.onPointerLeave, (() => {
            u()
          }))
        })
      }));
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e;
        return (0, i.jsx)(ul.sG.div, {
          "aria-hidden": !0,
          ...n,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var Ld = "SelectArrow";
      s.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...n
        } = e, o = Uu(r), a = Xu(Ld, r), s = cd(Ld, r);
        return a.open && "popper" === s.position ? (0, i.jsx)($c.i3, {
          ...o,
          ...n,
          ref: t
        }) : null
      })).displayName = Ld;
      var Dd = s.forwardRef((({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const o = s.useRef(null),
          a = (0, ol.s)(n, o),
          l = (0, ll.Z)(t);
        return s.useEffect((() => {
          const e = o.current;
          if (!e) return;
          const r = window.HTMLSelectElement.prototype,
            n = Object.getOwnPropertyDescriptor(r, "value").set;
          if (l !== t && n) {
            const r = new Event("change", {
              bubbles: !0
            });
            n.call(e, t), e.dispatchEvent(r)
          }
        }), [l, t]), (0, i.jsx)(ul.sG.select, {
          ...r,
          style: {
            ...Gc.VISUALLY_HIDDEN_STYLES,
            ...r.style
          },
          ref: a,
          defaultValue: t
        })
      }));

      function Md(e) {
        return "" === e || void 0 === e
      }

      function Rd(e) {
        const t = (0, Ru.c)(e),
          r = s.useRef(""),
          n = s.useRef(0),
          o = s.useCallback((e => {
            const o = r.current + e;
            t(o),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout((() => e("")), 1e3))
              }(o)
          }), [t]),
          i = s.useCallback((() => {
            r.current = "", window.clearTimeout(n.current)
          }), []);
        return s.useEffect((() => () => window.clearTimeout(n.current)), []), [r, o, i]
      }

      function zd(e, t, r) {
        const n = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          o = r ? e.indexOf(r) : -1;
        let i = (a = e, s = Math.max(o, 0), a.map(((e, t) => a[(s + t) % a.length])));
        var a, s;
        1 === n.length && (i = i.filter((e => e !== r)));
        const l = i.find((e => e.textValue.toLowerCase().startsWith(n.toLowerCase())));
        return l !== r ? l : void 0
      }
      Dd.displayName = "SelectBubbleInput";
      var Ad = Qu,
        Id = ed,
        Vd = rd,
        Fd = nd,
        qd = od,
        Bd = ad,
        $d = md,
        Hd = jd,
        Wd = Od,
        Gd = "ScrollArea",
        [Ud, Kd] = (0, il.A)(Gd),
        [Xd, Yd] = Ud(Gd),
        Zd = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            type: n = "hover",
            dir: o,
            scrollHideDelay: a = 600,
            ...l
          } = e, [c, u] = s.useState(null), [d, f] = s.useState(null), [h, p] = s.useState(null), [v, g] = s.useState(null), [m, y] = s.useState(null), [b, w] = s.useState(0), [_, x] = s.useState(0), [S, C] = s.useState(!1), [j, k] = s.useState(!1), O = (0, ol.s)(t, (e => u(e))), P = (0, sl.jH)(o);
          return (0, i.jsx)(Xd, {
            scope: r,
            type: n,
            dir: P,
            scrollHideDelay: a,
            scrollArea: c,
            viewport: d,
            onViewportChange: f,
            content: h,
            onContentChange: p,
            scrollbarX: v,
            onScrollbarXChange: g,
            scrollbarXEnabled: S,
            onScrollbarXEnabledChange: C,
            scrollbarY: m,
            onScrollbarYChange: y,
            scrollbarYEnabled: j,
            onScrollbarYEnabledChange: k,
            onCornerWidthChange: w,
            onCornerHeightChange: x,
            children: (0, i.jsx)(ul.sG.div, {
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
      Zd.displayName = Gd;
      var Qd = "ScrollAreaViewport",
        Jd = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            children: n,
            nonce: o,
            ...a
          } = e, l = Yd(Qd, r), c = s.useRef(null), u = (0, ol.s)(t, c, l.onViewportChange);
          return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, i.jsx)(ul.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...a,
              ref: u,
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
                children: n
              })
            })]
          })
        }));
      Jd.displayName = Qd;
      var ef = "ScrollAreaScrollbar",
        tf = s.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Yd(ef, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: l
          } = o, c = "horizontal" === e.orientation;
          return s.useEffect((() => (c ? a(!0) : l(!0), () => {
            c ? a(!1) : l(!1)
          })), [c, a, l]), "hover" === o.type ? (0, i.jsx)(rf, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === o.type ? (0, i.jsx)(nf, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === o.type ? (0, i.jsx)(of, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === o.type ? (0, i.jsx)(af, {
            ...n,
            ref: t
          }) : null
        }));
      tf.displayName = ef;
      var rf = s.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Yd(ef, e.__scopeScrollArea), [a, l] = s.useState(!1);
          return s.useEffect((() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const r = () => {
                  window.clearTimeout(t), l(!0)
                },
                n = () => {
                  t = window.setTimeout((() => l(!1)), o.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", n), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", n)
              }
            }
          }), [o.scrollArea, o.scrollHideDelay]), (0, i.jsx)(Wc.C, {
            present: r || a,
            children: (0, i.jsx)(of, {
              "data-state": a ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        })),
        nf = s.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = Yd(ef, e.__scopeScrollArea), a = "horizontal" === e.orientation, l = Cf((() => u("SCROLL_END")), 100), [c, u] = (d = {
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
            if ("idle" === c) {
              const e = window.setTimeout((() => u("HIDE")), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }), [c, o.scrollHideDelay, u]), s.useEffect((() => {
            const e = o.viewport,
              t = a ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const n = () => {
                const n = e[t];
                r !== n && (u("SCROLL"), l()), r = n
              };
              return e.addEventListener("scroll", n), () => e.removeEventListener("scroll", n)
            }
          }), [o.viewport, a, u, l]), (0, i.jsx)(Wc.C, {
            present: r || "hidden" !== c,
            children: (0, i.jsx)(af, {
              "data-state": "hidden" === c ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, nl.m)(e.onPointerEnter, (() => u("POINTER_ENTER"))),
              onPointerLeave: (0, nl.m)(e.onPointerLeave, (() => u("POINTER_LEAVE")))
            })
          })
        })),
        of = s.forwardRef(((e, t) => {
          const r = Yd(ef, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [a, l] = s.useState(!1),
            c = "horizontal" === e.orientation,
            u = Cf((() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                l(c ? e : t)
              }
            }), 10);
          return jf(r.viewport, u), jf(r.content, u), (0, i.jsx)(Wc.C, {
            present: n || a,
            children: (0, i.jsx)(af, {
              "data-state": a ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        af = s.forwardRef(((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, o = Yd(ef, e.__scopeScrollArea), a = s.useRef(null), l = s.useRef(0), [c, u] = s.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), d = yf(c.viewport, c.content), f = {
            ...n,
            sizes: c,
            onSizesChange: u,
            hasThumb: Boolean(d > 0 && d < 1),
            onThumbChange: e => a.current = e,
            onThumbPointerUp: () => l.current = 0,
            onThumbPointerDown: e => l.current = e
          };

          function h(e, t) {
            return function(e, t, r, n = "ltr") {
              const o = bf(r),
                i = t || o / 2,
                a = o - i,
                s = r.scrollbar.paddingStart + i,
                l = r.scrollbar.size - r.scrollbar.paddingEnd - a,
                c = r.content - r.viewport;
              return _f([s, l], "ltr" === n ? [0, c] : [-1 * c, 0])(e)
            }(e, l.current, c, t)
          }
          return "horizontal" === r ? (0, i.jsx)(sf, {
            ...f,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = wf(o.viewport.scrollLeft, c, o.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollLeft = h(e, o.dir))
            }
          }) : "vertical" === r ? (0, i.jsx)(lf, {
            ...f,
            ref: t,
            onThumbPositionChange: () => {
              if (o.viewport && a.current) {
                const e = wf(o.viewport.scrollTop, c);
                a.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              o.viewport && (o.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              o.viewport && (o.viewport.scrollTop = h(e))
            }
          }) : null
        })),
        sf = s.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = Yd(ef, e.__scopeScrollArea), [l, c] = s.useState(), u = s.useRef(null), d = (0, ol.s)(t, u, a.onScrollbarXChange);
          return s.useEffect((() => {
            u.current && c(getComputedStyle(u.current))
          }), [u]), (0, i.jsx)(df, {
            "data-orientation": "horizontal",
            ...o,
            ref: d,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": bf(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(n), xf(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              u.current && a.viewport && l && n({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: u.current.clientWidth,
                  paddingStart: mf(l.paddingLeft),
                  paddingEnd: mf(l.paddingRight)
                }
              })
            }
          })
        })),
        lf = s.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...o
          } = e, a = Yd(ef, e.__scopeScrollArea), [l, c] = s.useState(), u = s.useRef(null), d = (0, ol.s)(t, u, a.onScrollbarYChange);
          return s.useEffect((() => {
            u.current && c(getComputedStyle(u.current))
          }), [u]), (0, i.jsx)(df, {
            "data-orientation": "vertical",
            ...o,
            ref: d,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": bf(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (a.viewport) {
                const n = a.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(n), xf(n, r) && t.preventDefault()
              }
            },
            onResize: () => {
              u.current && a.viewport && l && n({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: u.current.clientHeight,
                  paddingStart: mf(l.paddingTop),
                  paddingEnd: mf(l.paddingBottom)
                }
              })
            }
          })
        })),
        [cf, uf] = Ud(ef),
        df = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: n,
            hasThumb: o,
            onThumbChange: a,
            onThumbPointerUp: l,
            onThumbPointerDown: c,
            onThumbPositionChange: u,
            onDragScroll: d,
            onWheelScroll: f,
            onResize: h,
            ...p
          } = e, v = Yd(ef, r), [g, m] = s.useState(null), y = (0, ol.s)(t, (e => m(e))), b = s.useRef(null), w = s.useRef(""), _ = v.viewport, x = n.content - n.viewport, S = (0, Ru.c)(f), C = (0, Ru.c)(u), j = Cf(h, 10);

          function k(e) {
            if (b.current) {
              const t = e.clientX - b.current.left,
                r = e.clientY - b.current.top;
              d({
                x: t,
                y: r
              })
            }
          }
          return s.useEffect((() => {
            const e = e => {
              const t = e.target,
                r = g?.contains(t);
              r && S(e, x)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [_, g, x, S]), s.useEffect(C, [n, C]), jf(g, j), jf(v.content, j), (0, i.jsx)(cf, {
            scope: r,
            scrollbar: g,
            hasThumb: o,
            onThumbChange: (0, Ru.c)(a),
            onThumbPointerUp: (0, Ru.c)(l),
            onThumbPositionChange: C,
            onThumbPointerDown: (0, Ru.c)(c),
            children: (0, i.jsx)(ul.sG.div, {
              ...p,
              ref: y,
              style: {
                position: "absolute",
                ...p.style
              },
              onPointerDown: (0, nl.m)(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), b.current = g.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", v.viewport && (v.viewport.style.scrollBehavior = "auto"), k(e))
              })),
              onPointerMove: (0, nl.m)(e.onPointerMove, k),
              onPointerUp: (0, nl.m)(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = w.current, v.viewport && (v.viewport.style.scrollBehavior = ""), b.current = null
              }))
            })
          })
        })),
        ff = "ScrollAreaThumb",
        hf = s.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = uf(ff, e.__scopeScrollArea);
          return (0, i.jsx)(Wc.C, {
            present: r || o.hasThumb,
            children: (0, i.jsx)(pf, {
              ref: t,
              ...n
            })
          })
        })),
        pf = s.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            style: n,
            ...o
          } = e, a = Yd(ff, r), l = uf(ff, r), {
            onThumbPositionChange: c
          } = l, u = (0, ol.s)(t, (e => l.onThumbChange(e))), d = s.useRef(void 0), f = Cf((() => {
            d.current && (d.current(), d.current = void 0)
          }), 100);
          return s.useEffect((() => {
            const e = a.viewport;
            if (e) {
              const t = () => {
                if (f(), !d.current) {
                  const t = Sf(e, c);
                  d.current = t, c()
                }
              };
              return c(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [a.viewport, f, c]), (0, i.jsx)(ul.sG.div, {
            "data-state": l.hasThumb ? "visible" : "hidden",
            ...o,
            ref: u,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...n
            },
            onPointerDownCapture: (0, nl.m)(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                n = e.clientY - t.top;
              l.onThumbPointerDown({
                x: r,
                y: n
              })
            })),
            onPointerUp: (0, nl.m)(e.onPointerUp, l.onThumbPointerUp)
          })
        }));
      hf.displayName = ff;
      var vf = "ScrollAreaCorner";
      s.forwardRef(((e, t) => {
        const r = Yd(vf, e.__scopeScrollArea),
          n = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && n ? (0, i.jsx)(gf, {
          ...e,
          ref: t
        }) : null
      })).displayName = vf;
      var gf = s.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: r,
          ...n
        } = e, o = Yd(vf, r), [a, l] = s.useState(0), [c, u] = s.useState(0), d = Boolean(a && c);
        return jf(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), u(e)
        })), jf(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), l(e)
        })), d ? (0, i.jsx)(ul.sG.div, {
          ...n,
          ref: t,
          style: {
            width: a,
            height: c,
            position: "absolute",
            right: "ltr" === o.dir ? 0 : void 0,
            left: "rtl" === o.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      }));

      function mf(e) {
        return e ? parseInt(e, 10) : 0
      }

      function yf(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function bf(e) {
        const t = yf(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          n = (e.scrollbar.size - r) * t;
        return Math.max(n, 18)
      }

      function wf(e, t, r = "ltr") {
        const n = bf(t),
          o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          i = t.scrollbar.size - o,
          a = t.content - t.viewport,
          s = i - n,
          l = rl(e, "ltr" === r ? [0, a] : [-1 * a, 0]);
        return _f([0, a], [0, s])(l)
      }

      function _f(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const n = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + n * (r - e[0])
        }
      }

      function xf(e, t) {
        return e > 0 && e < t
      }
      var Sf = (e, t = () => {}) => {
        let r = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          n = 0;
        return function o() {
          const i = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            a = r.left !== i.left,
            s = r.top !== i.top;
          (a || s) && t(), r = i, n = window.requestAnimationFrame(o)
        }(), () => window.cancelAnimationFrame(n)
      };

      function Cf(e, t) {
        const r = (0, Ru.c)(e),
          n = s.useRef(0);
        return s.useEffect((() => () => window.clearTimeout(n.current)), []), s.useCallback((() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }), [r, t])
      }

      function jf(e, t) {
        const r = (0, Ru.c)(t);
        (0, zu.N)((() => {
          let t = 0;
          if (e) {
            const n = new ResizeObserver((() => {
              cancelAnimationFrame(t), t = window.requestAnimationFrame(r)
            }));
            return n.observe(e), () => {
              window.cancelAnimationFrame(t), n.unobserve(e)
            }
          }
        }), [e, r])
      }
      var kf = Zd,
        Of = Jd,
        Pf = tf,
        Ef = hf,
        Nf = "foundry_hcgxh_uaq1gwo";
      const Tf = (0, s.forwardRef)((({
          children: e,
          label: t,
          hint: r,
          placeholder: n,
          description: o,
          testId: a,
          hideLabel: l,
          hideDescription: c = !1,
          hideRequiredAsterisk: d,
          hideDividers: f,
          errorMessage: h,
          value: p,
          defaultValue: v,
          onValueChange: g,
          open: m,
          defaultOpen: y,
          onOpenChange: b,
          isRequired: w,
          isDisabled: _,
          isReadOnly: x,
          className: S,
          labelledBy: C,
          renderPortal: j,
          container: k
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
            className: (0, O.$)("foundry_hcgxh_uaq1gw0", S),
            children: [(t && !l || r) && (0, i.jsxs)("div", {
              className: "foundry_hcgxh_uaq1gw1",
              children: [(0, i.jsx)(u, {
                enabled: !!l,
                children: (0, i.jsx)(M, {
                  size: "SM",
                  className: (0, O.$)("foundry_hcgxh_uaq1gw2", _ && Nf),
                  asChild: !0,
                  children: (0, i.jsxs)("label", {
                    id: N,
                    children: [t, w && !d && (0, i.jsx)("span", {
                      className: "foundry_hcgxh_uaq1gw4",
                      children: "*"
                    })]
                  })
                })
              }), r && (0, i.jsx)(M, {
                size: "XS",
                className: (0, O.$)("foundry_hcgxh_uaq1gw3", _ && Nf),
                children: r
              })]
            }), (0, i.jsxs)(Ad, {
              required: w,
              disabled: _,
              open: L,
              onOpenChange: () => D(!x && !L),
              value: p,
              defaultValue: v,
              onValueChange: g,
              children: [(0, i.jsxs)(Id, {
                className: (0, O.$)("foundry_hcgxh_uaq1gw5 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10", !!h && "foundry_hcgxh_uaq1gw7", x && "foundry_hcgxh_uaq1gw6"),
                ref: E,
                "data-testid": a,
                "aria-activedescendant": p,
                "aria-labelledby": C || N,
                "aria-controls": T,
                children: [(0, i.jsx)("span", {
                  className: "foundry_hcgxh_uaq1gw8",
                  children: (0, i.jsx)(Vd, {
                    placeholder: n,
                    "aria-label": p
                  })
                }), (0, i.jsx)(Fd, {
                  asChild: !0,
                  className: (0, O.$)("foundry_hcgxh_uaq1gw9", (x || _) && "foundry_hcgxh_uaq1gwa"),
                  children: L ? (0, i.jsx)(R.ChevronUp, {
                    size: "LG",
                    label: ""
                  }) : (0, i.jsx)(R.ChevronDown, {
                    size: "LG",
                    label: ""
                  })
                })]
              }), (0, i.jsx)(Df, {
                renderPortal: j,
                container: k,
                children: (0, i.jsx)(Bd, {
                  id: T,
                  position: "popper",
                  sideOffset: 8,
                  align: "center",
                  className: "foundry_hcgxh_uaq1gwb",
                  children: (0, i.jsxs)(kf, {
                    className: "foundry_hcgxh_uaq1gwk",
                    type: "auto",
                    children: [(0, i.jsx)($d, {
                      className: (0, O.$)("foundry_hcgxh_uaq1gwc", f && "foundry_hcgxh_uaq1gwd"),
                      asChild: !0,
                      children: (0, i.jsx)(Of, {
                        className: "foundry_hcgxh_uaq1gwl",
                        style: {
                          overflowY: void 0
                        },
                        children: e
                      })
                    }), (0, i.jsx)(Pf, {
                      className: "foundry_hcgxh_uaq1gwm",
                      orientation: "vertical",
                      children: (0, i.jsx)(Ef, {
                        className: "foundry_hcgxh_uaq1gwn"
                      })
                    })]
                  })
                })
              })]
            }), o && (0, i.jsx)(u, {
              enabled: !!h || c || 0 === o.length,
              children: (0, i.jsx)(M, {
                size: "SM",
                className: (0, O.$)("foundry_hcgxh_uaq1gwf", _ && Nf),
                children: o
              })
            }), h && (0, i.jsxs)(M, {
              size: "SM",
              appearance: "bold",
              className: "foundry_hcgxh_uaq1gwg",
              children: [(0, i.jsx)(R.X, {
                size: "MD",
                label: "",
                className: "foundry_hcgxh_uaq1gwh"
              }), h]
            })]
          })
        })),
        Lf = (0, s.forwardRef)((({
          label: e,
          value: t,
          icon: r,
          iconLabel: n,
          iconPosition: o,
          isDisabled: a,
          testId: l
        }, c) => {
          const u = F((0, s.useRef)(null), c),
            d = r && z[r];
          return (0, i.jsxs)(Hd, {
            value: t,
            className: "foundry_hcgxh_uaq1gwe foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10",
            ref: u,
            disabled: a,
            "data-testid": l,
            children: [d && "left" === o && (0, i.jsx)(d, {
              className: "foundry_hcgxh_uaq1gwi",
              label: n || "",
              size: "LG"
            }), (0, i.jsx)(Wd, {
              asChild: !0,
              children: (0, i.jsx)("span", {
                className: "foundry_hcgxh_uaq1gwp",
                children: e
              })
            }), d && "right" === o && (0, i.jsx)(d, {
              label: n || "",
              size: "LG",
              className: "foundry_hcgxh_uaq1gwj"
            })]
          })
        })),
        Df = ({
          renderPortal: e = !0,
          container: t,
          children: r
        }) => e ? (0, i.jsx)(qd, {
          container: t,
          children: r
        }) : (0, i.jsx)(i.Fragment, {
          children: r
        }),
        Mf = ({
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
        Rf = ({
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
        zf = ({
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
        Af = ({
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
        If = ({
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
        Vf = ({
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

      function Ff(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = ye(e.isSelected, e.defaultSelected || !1, e.onChange);
        return {
          isSelected: r,
          setSelected: function(e) {
            t || n(e)
          },
          toggle: function() {
            t || n(!r)
          }
        }
      }

      function qf(e, t, r) {
        let {
          isDisabled: n = !1,
          isReadOnly: o = !1,
          value: i,
          name: a,
          children: s,
          "aria-label": l,
          "aria-labelledby": c,
          validationState: u = "valid",
          isInvalid: d
        } = e, {
          pressProps: f,
          isPressed: h
        } = Kt({
          isDisabled: n
        }), {
          pressProps: p,
          isPressed: v
        } = Kt({
          onPress() {
            var e;
            t.toggle(), null === (e = r.current) || void 0 === e || e.focus()
          },
          isDisabled: n || o
        }), {
          focusableProps: g
        } = ht(e, r), m = me(f, g), y = X(e, {
          labelable: !0
        });
        return Q(r, t.isSelected, t.setSelected), {
          labelProps: me(p, {
            onClick: e => e.preventDefault()
          }),
          inputProps: me(y, {
            "aria-invalid": d || "invalid" === u || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": o || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected(e.target.checked)
            },
            disabled: n,
            ...null == i ? {} : {
              value: i
            },
            name: a,
            type: "checkbox",
            ...m
          }),
          isSelected: t.isSelected,
          isPressed: h || v,
          isDisabled: n,
          isReadOnly: o,
          isInvalid: d || "invalid" === u
        }
      }

      function Bf(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function $f(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Hf(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? $f(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Bf(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $f(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Wf(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Gf = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Uf = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Hf(Hf({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Gf(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Wf(e.variantClassNames, (e => Wf(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Kf = Uf({
          defaultClassName: "foundry_hcgxh_11gbdty6 foundry_hcgxh_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_11gbdty7",
              LG: "foundry_hcgxh_11gbdty8",
              XL: "foundry_hcgxh_11gbdty9"
            },
            appearance: {
              primary: "foundry_hcgxh_11gbdtya",
              secondary: "foundry_hcgxh_11gbdtyb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Xf = Uf({
          defaultClassName: "foundry_hcgxh_11gbdty2",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_11gbdty3",
              LG: "foundry_hcgxh_11gbdty4",
              XL: "foundry_hcgxh_11gbdty5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Yf = Uf({
          defaultClassName: "foundry_hcgxh_11gbdtyi",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
              LG: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdy foundry_hcgxh_tdsdcd10",
              XL: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Zf = Uf({
          defaultClassName: "foundry_hcgxh_11gbdtyd",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_11gbdtye",
              LG: "foundry_hcgxh_11gbdtyf",
              XL: "foundry_hcgxh_11gbdtyg"
            },
            isDisabled: {
              true: "foundry_hcgxh_11gbdtyh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, s.forwardRef)((({
        isChecked: e,
        defaultChecked: t,
        onCheckedChange: r,
        label: o,
        description: l,
        size: c = "MD",
        appearance: d = "primary",
        isIndeterminate: f,
        hideLabel: h,
        testId: p,
        errorMessage: v,
        className: g,
        ...m
      }, y) => {
        const b = (0, s.useRef)(null),
          w = F(b, y),
          _ = (0, s.useId)(),
          {
            setSelected: x,
            ...S
          } = Ff({
            isSelected: e,
            defaultSelected: t,
            onChange: r
          }),
          {
            inputProps: C,
            isDisabled: j,
            isReadOnly: k,
            isInvalid: O,
            isSelected: P
          } = function(e, t, r) {
            let n = _t({
                ...e,
                value: t.isSelected
              }),
              {
                isInvalid: o,
                validationErrors: i,
                validationDetails: a
              } = n.displayValidation,
              {
                labelProps: l,
                inputProps: c,
                isSelected: u,
                isPressed: d,
                isDisabled: f,
                isReadOnly: h
              } = qf({
                ...e,
                isInvalid: o
              }, t, r);
            pt(e, n, r);
            let {
              isIndeterminate: p,
              isRequired: v,
              validationBehavior: g = "aria"
            } = e;
            (0, s.useEffect)((() => {
              r.current && (r.current.indeterminate = !!p)
            }));
            let {
              pressProps: m
            } = Kt({
              isDisabled: f || h,
              onPress() {
                let {
                  [wt]: t
                } = e, {
                  commitValidation: r
                } = t || n;
                r()
              }
            });
            return {
              labelProps: me(l, m),
              inputProps: {
                ...c,
                checked: u,
                "aria-required": v && "aria" === g || void 0,
                required: v && "native" === g
              },
              isSelected: u,
              isPressed: d,
              isDisabled: f,
              isReadOnly: h,
              isInvalid: o,
              validationErrors: i,
              validationDetails: a
            }
          }({
            ...m,
            "aria-label": o,
            id: _
          }, {
            ...S,
            setSelected: m.isReadOnly ? () => !1 : x
          }, b),
          E = (0, a.v6)({
            ...C,
            "aria-checked": P,
            className: g
          }, {
            className: "foundry_hcgxh_11gbdty1"
          }),
          N = f ? n[`Dash${c}`] : n[`Check${c}`],
          T = O && !!v;
        return (0, i.jsxs)("label", {
          className: "foundry_hcgxh_11gbdty0",
          children: [(0, i.jsxs)("div", {
            className: Xf({
              size: c
            }),
            children: [(0, i.jsx)(u, {
              children: (0, i.jsx)("input", {
                ...E,
                ref: w
              })
            }), (0, i.jsx)("div", {
              className: Kf({
                size: c,
                appearance: d
              }),
              "aria-hidden": "true",
              "data-state": f ? "mixed" : P ? "checked" : "unchecked",
              "data-disabled": j || k,
              "data-testid": p,
              children: (0, i.jsx)("span", {
                className: "foundry_hcgxh_11gbdtyc",
                children: (P || f) && (0, i.jsx)(N, {
                  "aria-hidden": "true"
                })
              })
            })]
          }), (0, i.jsx)(u, {
            enabled: !!h,
            children: (0, i.jsxs)("div", {
              className: Zf({
                size: c,
                isDisabled: j
              }),
              children: [(0, i.jsx)("p", {
                className: Yf({
                  size: c
                }),
                children: o
              }), l && !T && (0, i.jsx)("p", {
                className: "foundry_hcgxh_11gbdtym foundry_hcgxh_8kowh41 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
                children: l
              }), T && (0, i.jsx)("p", {
                className: "foundry_hcgxh_11gbdtyn foundry_hcgxh_11gbdtym foundry_hcgxh_8kowh41 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
                children: v
              })]
            })
          })]
        })
      }));
      const Qf = new WeakMap;

      function Jf(e, t) {
        return "#comment" !== e.nodeName && function(e) {
          const t = ee(e);
          if (!(e instanceof t.HTMLElement || e instanceof t.SVGElement)) return !1;
          let {
            display: r,
            visibility: n
          } = e.style, o = "none" !== r && "hidden" !== n && "collapse" !== n;
          if (o) {
            const {
              getComputedStyle: t
            } = e.ownerDocument.defaultView;
            let {
              display: r,
              visibility: n
            } = t(e);
            o = "none" !== r && "hidden" !== n && "collapse" !== n
          }
          return o
        }(e) && function(e, t) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
        }(e, t) && (!e.parentElement || Jf(e.parentElement, e))
      }

      function eh(e, t) {
        return !!e && !!t && t.some((t => t.contains(e)))
      }

      function th(e, t, r) {
        let n = (null == t ? void 0 : t.tabbable) ? je : Ce,
          o = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          i = J(o),
          a = function(e, t, r, n) {
            return e.createTreeWalker(t, r, n)
          }(i, e || i, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var o;
              return (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !n(e) || !Jf(e) || r && !eh(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (a.currentNode = t.from), a
      }
      class rh {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let n = this.fastMap.get(null != t ? t : null);
          if (!n) return;
          let o = new nh({
            scopeRef: e
          });
          n.addChild(o), o.parent = n, this.fastMap.set(e, o), r && (o.nodeToRestore = r)
        }
        addNode(e) {
          this.fastMap.set(e.scopeRef, e)
        }
        removeTreeNode(e) {
          if (null === e) return;
          let t = this.fastMap.get(e);
          if (!t) return;
          let r = t.parent;
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && eh(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let n = t.children;
          r && (r.removeChild(t), n.size > 0 && n.forEach((e => r && r.addChild(e)))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new rh;
          var r;
          for (let n of this.traverse()) t.addTreeNode(n.scopeRef, null !== (r = null === (e = n.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, n.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new nh({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class nh {
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
      new rh;
      const oh = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        ih = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function ah(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return oh.has(t.script)
        }
        let t = e.split("-")[0];
        return ih.has(t)
      }
      const sh = Symbol.for("react-aria.i18n.locale");

      function lh() {
        let e = "undefined" != typeof window && window[sh] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: ah(e) ? "rtl" : "ltr"
        }
      }
      let ch = lh(),
        uh = new Set;

      function dh() {
        ch = lh();
        for (let e of uh) e(ch)
      }
      const fh = s.createContext(null);

      function hh() {
        let e = function() {
          let e = ue(),
            [t, r] = (0, s.useState)(ch);
          return (0, s.useEffect)((() => (0 === uh.size && window.addEventListener("languagechange", dh), uh.add(r), () => {
            uh.delete(r), 0 === uh.size && window.removeEventListener("languagechange", dh)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, s.useContext)(fh) || e
      }

      function ph(e, t) {
        let {
          name: r,
          isReadOnly: n,
          isRequired: o,
          isDisabled: i,
          orientation: a = "vertical",
          validationBehavior: l = "aria"
        } = e, {
          direction: c
        } = hh(), {
          isInvalid: u,
          validationErrors: d,
          validationDetails: f
        } = t.displayValidation, {
          labelProps: h,
          fieldProps: p,
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
            onBlurWithin: r,
            onFocusWithin: n,
            onFocusWithinChange: o
          } = e, i = (0, s.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: a,
            removeAllGlobalListeners: l
          } = Vt(), c = (0, s.useCallback)((e => {
            e.currentTarget.contains(e.target) && i.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (i.current.isFocusWithin = !1, l(), r && r(e), o && o(!1))
          }), [r, o, i, l]), u = Ne(c), d = (0, s.useCallback)((e => {
            if (!e.currentTarget.contains(e.target)) return;
            const t = J(e.target),
              r = ot(t);
            if (!i.current.isFocusWithin && r === it(e.nativeEvent)) {
              n && n(e), o && o(!0), i.current.isFocusWithin = !0, u(e);
              let r = e.currentTarget;
              a(t, "focus", (e => {
                if (i.current.isFocusWithin && !nt(r, e.target)) {
                  let n = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  Ee(n, r);
                  let o = Pe(n);
                  c(o)
                }
              }), {
                capture: !0
              })
            }
          }), [n, o, u, a, c]);
          return t ? {
            focusWithinProps: {
              onFocus: void 0,
              onBlur: void 0
            }
          } : {
            focusWithinProps: {
              onFocus: d,
              onBlur: c
            }
          }
        }({
          onBlurWithin(r) {
            var n;
            null === (n = e.onBlur) || void 0 === n || n.call(e, r), t.selectedValue || t.setLastFocusedValue(null)
          },
          onFocusWithin: e.onFocus,
          onFocusWithinChange: e.onFocusChange
        }), b = pe(r);
        return Qf.set(t, {
          name: b,
          descriptionId: v.id,
          errorMessageId: g.id,
          validationBehavior: l
        }), {
          radioGroupProps: me(m, {
            role: "radiogroup",
            onKeyDown: e => {
              let r;
              switch (e.key) {
                case "ArrowRight":
                  r = "rtl" === c && "vertical" !== a ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  r = "rtl" === c && "vertical" !== a ? "next" : "prev";
                  break;
                case "ArrowDown":
                  r = "next";
                  break;
                case "ArrowUp":
                  r = "prev";
                  break;
                default:
                  return
              }
              e.preventDefault();
              let n, o = th(e.currentTarget, {
                from: e.target
              });
              "next" === r ? (n = o.nextNode(), n || (o.currentNode = e.currentTarget, n = o.firstChild())) : (n = o.previousNode(), n || (o.currentNode = e.currentTarget, n = o.lastChild())), n && (n.focus(), t.setSelectedValue(n.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": n || void 0,
            "aria-required": o || void 0,
            "aria-disabled": i || void 0,
            "aria-orientation": a,
            ...p,
            ...y
          }),
          labelProps: h,
          descriptionProps: v,
          errorMessageProps: g,
          isInvalid: u,
          validationErrors: d,
          validationDetails: f
        }
      }
      let vh = Math.round(1e10 * Math.random()),
        gh = 0;

      function mh(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function yh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function bh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? yh(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = mh(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yh(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function wh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var _h = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        xh = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = bh(bh({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) _h(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return wh(e.variantClassNames, (e => wh(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Sh = xh({
          defaultClassName: "foundry_hcgxh_njguqn1",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_njguqn2",
              LG: "foundry_hcgxh_njguqn3",
              XL: "foundry_hcgxh_njguqn4"
            },
            orientation: {
              horizontal: "foundry_hcgxh_njguqn5",
              vertical: "foundry_hcgxh_njguqn6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Ch = (0, s.createContext)({
          state: null,
          size: "MD",
          appearance: "primary"
        }),
        jh = ((0, s.forwardRef)((({
          label: e,
          description: t,
          size: r = "MD",
          appearance: n = "primary",
          hideLabel: o,
          isRequired: l,
          hideRequiredAsterisk: c,
          testId: d,
          className: f,
          errorMessage: h,
          orientation: p = "vertical",
          ...v
        }, g) => {
          const {
            children: m
          } = v, y = F((0, s.useRef)(null), g), b = (0, s.useId)(), w = function(e) {
            let t = (0, s.useMemo)((() => e.name || `radio-group-${vh}-${++gh}`), [e.name]);
            var r;
            let [n, o] = ye(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [i, a] = (0, s.useState)(null), l = _t({
              ...e,
              value: n
            }), c = l.displayValidation.isInvalid;
            return {
              ...l,
              name: t,
              selectedValue: n,
              setSelectedValue: t => {
                e.isReadOnly || e.isDisabled || (o(t), l.commitValidation())
              },
              lastFocusedValue: i,
              setLastFocusedValue: a,
              isDisabled: e.isDisabled || !1,
              isReadOnly: e.isReadOnly || !1,
              isRequired: e.isRequired || !1,
              validationState: e.validationState || (c ? "invalid" : null),
              isInvalid: c
            }
          }(v), _ = {
            state: w,
            size: r,
            appearance: n
          }, {
            radioGroupProps: x,
            labelProps: S,
            descriptionProps: C,
            isInvalid: j,
            errorMessageProps: k
          } = ph({
            ...v,
            id: v.id || b,
            label: e,
            isRequired: l,
            description: t,
            orientation: p
          }, w), O = (0, a.v6)({
            ...x,
            className: f
          }, {
            className: "foundry_hcgxh_njguqn0",
            "aria-errormessage": k?.id
          }), P = j && !!h;
          return (0, i.jsxs)("div", {
            ref: y,
            "data-testid": d,
            ...O,
            children: [(0, i.jsx)(u, {
              enabled: !!o,
              children: (0, i.jsxs)("div", {
                className: "foundry_hcgxh_njguqn7",
                children: [(0, i.jsx)(M, {
                  size: "SM",
                  ...S,
                  className: "foundry_hcgxh_njguqn8 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdy foundry_hcgxh_tdsdcd10",
                  asChild: !0,
                  children: (0, i.jsxs)("label", {
                    children: [e, l && !c && (0, i.jsx)("span", {
                      className: "foundry_hcgxh_njguqn9",
                      children: "*"
                    })]
                  })
                }), t && (0, i.jsx)(M, {
                  size: "XS",
                  ...C,
                  className: "foundry_hcgxh_njguqna foundry_hcgxh_8kowh41 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
                  children: t
                })]
              })
            }), (0, i.jsx)("div", {
              className: Sh({
                size: r,
                orientation: p
              }),
              children: (0, i.jsx)(Ch.Provider, {
                value: _,
                children: m
              })
            }), P && (0, i.jsxs)(M, {
              size: "SM",
              appearance: "bold",
              ...k,
              className: "foundry_hcgxh_njguqnb",
              children: [(0, i.jsx)(R.X, {
                size: "MD",
                label: "",
                className: "foundry_hcgxh_njguqnc"
              }), h]
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
        kh = ({
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
        Oh = ({
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
      var Ph = xh({
          defaultClassName: "foundry_hcgxh_1pfduete",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
              LG: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdy foundry_hcgxh_tdsdcd10",
              XL: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10"
            },
            isDisabled: {
              true: "foundry_hcgxh_1pfdueti"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Eh = xh({
          defaultClassName: "foundry_hcgxh_1pfduet6 foundry_hcgxh_8kowh41",
          variantClassNames: {
            appearance: {
              primary: "foundry_hcgxh_1pfduet7",
              secondary: "foundry_hcgxh_1pfduet8"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Nh = xh({
          defaultClassName: "foundry_hcgxh_1pfduet2",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_1pfduet3",
              LG: "foundry_hcgxh_1pfduet4",
              XL: "foundry_hcgxh_1pfduet5"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Th = xh({
          defaultClassName: "foundry_hcgxh_1pfdueta",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_1pfduetb",
              LG: "foundry_hcgxh_1pfduetc",
              XL: "foundry_hcgxh_1pfduetd"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });

      function Lh(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Dh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Mh(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Dh(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Lh(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dh(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Rh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, s.forwardRef)((({
        label: e,
        description: t,
        hideLabel: r,
        testId: n,
        className: a,
        ...l
      }, c) => {
        const d = (0, s.useRef)(null),
          f = F(d, c),
          h = (0, s.useId)(),
          p = (0, s.useContext)(Ch),
          {
            state: v,
            appearance: g,
            size: m
          } = p,
          {
            inputProps: y
          } = function(e, t, r) {
            let {
              value: n,
              children: o,
              "aria-label": i,
              "aria-labelledby": a
            } = e;
            const s = e.isDisabled || t.isDisabled;
            let l = t.selectedValue === n,
              {
                pressProps: c,
                isPressed: u
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
                  t.setSelectedValue(n), null === (e = r.current) || void 0 === e || e.focus()
                }
              }),
              {
                focusableProps: h
              } = ht(me(e, {
                onFocus: () => t.setLastFocusedValue(n)
              }), r),
              p = me(c, h),
              v = X(e, {
                labelable: !0
              }),
              g = -1;
            null != t.selectedValue ? t.selectedValue === n && (g = 0) : t.lastFocusedValue !== n && null != t.lastFocusedValue || (g = 0), s && (g = void 0);
            let {
              name: m,
              descriptionId: y,
              errorMessageId: b,
              validationBehavior: w
            } = Qf.get(t);
            return Q(r, t.selectedValue, t.setSelectedValue), pt({
              validationBehavior: w
            }, t, r), {
              labelProps: me(d, {
                onClick: e => e.preventDefault()
              }),
              inputProps: me(v, {
                ...p,
                type: "radio",
                name: m,
                tabIndex: g,
                disabled: s,
                required: t.isRequired && "native" === w,
                checked: l,
                value: n,
                onChange: e => {
                  e.stopPropagation(), t.setSelectedValue(n)
                },
                "aria-describedby": [e["aria-describedby"], t.isInvalid ? b : null, y].filter(Boolean).join(" ") || void 0
              }),
              isDisabled: s,
              isSelected: l,
              isPressed: u || f
            }
          }({
            ...l,
            "aria-label": e,
            id: l.id || h
          }, v, d),
          b = y.checked,
          w = y.disabled || v?.isReadOnly,
          _ = o[`Dot${m}`];
        return (0, i.jsxs)("label", {
          className: (0, O.$)("foundry_hcgxh_1pfduet0", a),
          children: [(0, i.jsxs)("div", {
            className: Nh({
              size: m
            }),
            children: [(0, i.jsx)(u, {
              children: (0, i.jsx)("input", {
                ...y,
                ref: f,
                className: "foundry_hcgxh_1pfduet1"
              })
            }), (0, i.jsx)("div", {
              className: Eh({
                appearance: g
              }),
              "aria-hidden": "true",
              "data-state": b ? "checked" : "unchecked",
              "data-disabled": w,
              "data-testid": n,
              children: (0, i.jsx)("span", {
                className: "foundry_hcgxh_1pfduet9",
                children: b && (0, i.jsx)(_, {})
              })
            })]
          }), (0, i.jsx)(u, {
            enabled: !!r,
            children: (0, i.jsxs)("div", {
              className: Th({
                size: m
              }),
              children: [(0, i.jsx)("p", {
                className: Ph({
                  size: m,
                  isDisabled: y.disabled
                }),
                "aria-label": e,
                children: e
              }), t && (0, i.jsx)("p", {
                className: "foundry_hcgxh_1pfduetj foundry_hcgxh_8kowh41 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
                children: t
              })]
            })
          })]
        })
      }));
      var zh = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Ah = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Mh(Mh({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) zh(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Rh(e.variantClassNames, (e => Rh(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_hcgxh_thj3a31",
          variantClassNames: {
            thickness: {
              thin: "foundry_hcgxh_thj3a32",
              thick: "foundry_hcgxh_thj3a33",
              thicker: "foundry_hcgxh_thj3a34",
              thickest: "foundry_hcgxh_thj3a35"
            },
            orientation: {
              horizontal: "foundry_hcgxh_thj3a36",
              vertical: "foundry_hcgxh_thj3a37"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      (0, s.forwardRef)((({
        className: e,
        orientation: t = "horizontal",
        thickness: r = "thin",
        isDecorative: n = !1,
        asChild: o,
        testId: a,
        ...s
      }, c) => {
        const u = "horizontal" !== t || n ? "div" : "hr",
          d = n || "hr" === u ? void 0 : "separator",
          f = o ? l.Slot : u;
        return (0, i.jsx)(f, {
          ref: c,
          className: (0, O.$)(Ah({
            thickness: r,
            orientation: t
          }), e),
          role: d,
          "aria-orientation": t,
          "data-testid": a,
          ...s
        })
      }));
      const Ih = ({
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
        Vh = ({
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
        Fh = ({
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

      function qh(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Bh(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function $h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Bh(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = qh(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bh(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Hh(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      var Wh = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Gh = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = $h($h({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Wh(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Hh(e.variantClassNames, (e => Hh(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Uh = Gh({
          defaultClassName: "foundry_hcgxh_okz6z212",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_okz6z213 foundry_hcgxh_okz6z2y foundry_hcgxh_okz6z2z",
              LG: "foundry_hcgxh_okz6z214 foundry_hcgxh_okz6z210 foundry_hcgxh_okz6z211"
            },
            isSelected: {
              true: "foundry_hcgxh_okz6z215"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Kh = Gh({
          defaultClassName: "foundry_hcgxh_okz6z2o",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_okz6z2p foundry_hcgxh_okz6z2k foundry_hcgxh_okz6z2l",
              LG: "foundry_hcgxh_okz6z2q foundry_hcgxh_okz6z2m foundry_hcgxh_okz6z2n"
            },
            position: {
              left: "foundry_hcgxh_okz6z2r",
              right: "foundry_hcgxh_okz6z2s"
            },
            isSelected: {
              true: "foundry_hcgxh_okz6z2t",
              false: "foundry_hcgxh_okz6z2u"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              position: "left",
              isSelected: !0
            }, "foundry_hcgxh_okz6z2v"],
            [{
              position: "right",
              isSelected: !1
            }, "foundry_hcgxh_okz6z2w"]
          ]
        }),
        Xh = Gh({
          defaultClassName: "foundry_hcgxh_okz6z2f",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdy foundry_hcgxh_tdsdcd10",
              LG: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Yh = Gh({
          defaultClassName: "foundry_hcgxh_okz6z28 foundry_hcgxh_8kowh41",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_okz6z29 foundry_hcgxh_okz6z24 foundry_hcgxh_okz6z25",
              LG: "foundry_hcgxh_okz6z2a foundry_hcgxh_okz6z26 foundry_hcgxh_okz6z27"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Zh = Gh({
          defaultClassName: "foundry_hcgxh_okz6z21",
          variantClassNames: {
            appearance: {
              primary: "foundry_hcgxh_okz6z22",
              secondary: "foundry_hcgxh_okz6z23"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Qh = Gh({
          defaultClassName: "foundry_hcgxh_okz6z2b",
          variantClassNames: {
            isDisabled: {
              true: "foundry_hcgxh_okz6z2c"
            },
            size: {
              MD: "foundry_hcgxh_okz6z2d",
              LG: "foundry_hcgxh_okz6z2e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });

      function Jh(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function ep(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function tp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ep(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Jh(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ep(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function rp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, s.forwardRef)((({
        label: e,
        description: t,
        size: r = "MD",
        appearance: n = "primary",
        showIcons: o = !1,
        selectedIcon: a,
        unselectedIcon: l,
        hideLabel: c,
        testId: d,
        className: f,
        ...h
      }, p) => {
        const v = (0, s.useRef)(null),
          g = F(v, p),
          m = (0, s.useId)(),
          y = Ff(h),
          {
            inputProps: b,
            isDisabled: w,
            isReadOnly: _,
            isSelected: x
          } = function(e, t, r) {
            let {
              labelProps: n,
              inputProps: o,
              isSelected: i,
              isPressed: a,
              isDisabled: s,
              isReadOnly: l
            } = qf(e, t, r);
            return {
              labelProps: n,
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
            ...h
          }, y, v),
          S = a ? z[a] : Fh,
          C = l ? z[l] : Vh;
        return (0, i.jsxs)("label", {
          className: (0, O.$)("foundry_hcgxh_okz6z20", f),
          children: [(0, i.jsxs)("div", {
            className: Zh({
              appearance: n
            }),
            "data-state": x ? "selected" : "unselected",
            "data-disabled": w || _,
            "data-testid": d,
            children: [(0, i.jsx)(u, {
              children: (0, i.jsx)("input", {
                ...b,
                ref: g
              })
            }), (0, i.jsxs)("div", {
              className: Yh({
                size: r
              }),
              "aria-hidden": "true",
              children: [(0, i.jsx)("div", {
                className: Uh({
                  size: r,
                  isSelected: x
                }),
                children: (0, i.jsx)(Ih, {})
              }), o && (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)("div", {
                  className: Kh({
                    size: r,
                    isSelected: x,
                    position: "left"
                  }),
                  children: (0, i.jsx)(S, {
                    label: ""
                  })
                }), (0, i.jsx)("div", {
                  className: Kh({
                    size: r,
                    isSelected: x,
                    position: "right"
                  }),
                  children: (0, i.jsx)(C, {
                    label: ""
                  })
                })]
              })]
            })]
          }), (0, i.jsx)(u, {
            enabled: !!c,
            children: (0, i.jsxs)("div", {
              className: Qh({
                size: r,
                isDisabled: w
              }),
              children: [(0, i.jsx)("p", {
                className: Xh({
                  size: r
                }),
                children: e
              }), t && (0, i.jsx)("p", {
                className: "foundry_hcgxh_okz6z2i foundry_hcgxh_8kowh41 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdz foundry_hcgxh_tdsdcd10",
                children: t
              })]
            })
          })]
        })
      })).displayName = "Switch", (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? l.Slot : "h1",
          s = (0, a.v6)({
            className: "foundry_hcgxh_1pi1yv40 foundry_hcgxh_tdsdcd1 foundry_hcgxh_tdsdcd0"
          }, r);
        return (0, i.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...s
        })
      }));
      var np = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        op = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = tp(tp({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) np(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return rp(e.variantClassNames, (e => rp(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_hcgxh_16ge3130",
          variantClassNames: {
            size: {
              LG: "foundry_hcgxh_tdsdcd13 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd15",
              MD: "foundry_hcgxh_tdsdcd13 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd16",
              SM: "foundry_hcgxh_tdsdcd13 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd17",
              XS: "foundry_hcgxh_tdsdcd13 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd18"
            },
            appearance: {
              default: "foundry_hcgxh_tdsdcd13 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd19",
              bold: "foundry_hcgxh_tdsdcd13 foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd1a"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });

      function ip(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function ap(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function sp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? ap(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = ip(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ap(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function lp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, s.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: n = "MD",
        ...o
      }, s) => {
        const c = e ? l.Slot : "p",
          u = (0, a.v6)({
            className: op({
              size: n,
              appearance: r
            })
          }, o);
        return (0, i.jsx)(c, {
          ref: s,
          "data-testid": t,
          ...u
        })
      }));
      var cp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        up = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = sp(sp({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) cp(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return lp(e.variantClassNames, (e => lp(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_hcgxh_1ugqrt40",
          variantClassNames: {
            appearance: {
              default: "foundry_hcgxh_tdsdcd1b foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd1d",
              bold: "foundry_hcgxh_tdsdcd1b foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd1e"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });

      function dp(e, t) {
        var r = {};
        if ("object" == typeof t) {
          var n = e;
          or(t, ((e, t) => {
            if (null != e) {
              var o = function(e, t) {
                var r = e;
                for (var n of t) {
                  if (!(n in r)) throw new Error("Path ".concat(t.join(" -> "), " does not exist in object"));
                  r = r[n]
                }
                return r
              }(n, t);
              r[nr(o)] = String(e)
            }
          }))
        } else {
          var o = e;
          for (var i in o) {
            var a = o[i];
            null != a && (r[nr(i)] = a)
          }
        }
        return Object.defineProperty(r, "toString", {
          value: function() {
            return Object.keys(this).map((e => "".concat(e, ":").concat(this[e]))).join(";")
          },
          writable: !1
        }), r
      }

      function fp(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function hp(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function pp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? hp(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = fp(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hp(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function vp(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, s.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        ...n
      }, o) => {
        const s = e ? l.Slot : "p",
          c = (0, a.v6)({
            className: up({
              appearance: r
            })
          }, n);
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": t,
          ...c
        })
      }));
      var gp = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        mp = "var(--foundry_hcgxh_9dxgbc2)",
        yp = "var(--foundry_hcgxh_9dxgbc3)",
        bp = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = pp(pp({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) gp(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return vp(e.variantClassNames, (e => vp(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_hcgxh_9dxgbc7",
          variantClassNames: {
            size: {
              SM: "foundry_hcgxh_9dxgbc8",
              MD: "foundry_hcgxh_9dxgbc9",
              LG: "foundry_hcgxh_9dxgbca",
              XL: "foundry_hcgxh_9dxgbcb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        wp = "var(--foundry_hcgxh_9dxgbc0)",
        _p = "var(--foundry_hcgxh_9dxgbc1)";

      function xp(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function Sp(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return xp(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? xp(e, t) : void 0
              }
            }(e)) || t) {
            r && (e = r);
            var n = 0,
              o = function() {};
            return {
              s: o,
              n: function() {
                return n >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[n++]
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
            r = r.call(e)
          },
          n: function() {
            var e = r.next();
            return a = e.done, e
          },
          e: function(e) {
            s = !0, i = e
          },
          f: function() {
            try {
              a || null == r.return || r.return()
            } finally {
              if (s) throw i
            }
          }
        }
      }

      function Cp(e, t, r) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function jp(e) {
        return jp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, jp(e)
      }

      function kp() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (kp = function() {
          return !!e
        })()
      }

      function Op(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Pp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Op(Object(r), !0).forEach((function(t) {
            Cp(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Op(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Ep(e, t) {
        return Ep = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Ep(e, t)
      }

      function Np(e, t) {
        var r, n = t.replacementChars,
          o = t.replacement,
          i = t.separate,
          a = n,
          s = "",
          l = Sp(e);
        try {
          for (l.s(); !(r = l.n()).done;) {
            var c, u = r.value,
              d = !Object.prototype.hasOwnProperty.call(o, u) && (null === (c = o[a[0]]) || void 0 === c ? void 0 : c.test(u));
            (i && u === a[0] || d) && (a = a.slice(1), s += u)
          }
        } catch (e) {
          l.e(e)
        } finally {
          l.f()
        }
        return s
      }

      function Tp(e, t) {
        var r, n = t.mask,
          o = t.replacement,
          i = t.separate,
          a = t.showMask,
          s = 0,
          l = "",
          c = Sp(n);
        try {
          for (c.s(); !(r = c.n()).done;) {
            var u = r.value;
            if (!a && void 0 === e[s]) break;
            Object.prototype.hasOwnProperty.call(o, u) && void 0 !== e[s] ? l += e[s++] : l += u
          }
        } catch (e) {
          c.e(e)
        } finally {
          c.f()
        }
        if (i && !a) {
          for (var d = n.length - 1; d >= 0 && l[d] === n[d]; d--);
          l = l.slice(0, d + 1)
        }
        return l
      }

      function Lp(e, t) {
        for (var r = t.mask, n = t.replacement, o = [], i = 0; i < r.length; i++) {
          var a, s = null !== (a = e[i]) && void 0 !== a ? a : r[i],
            l = Object.prototype.hasOwnProperty.call(n, s) ? "replacement" : void 0 !== e[i] && e[i] !== r[i] ? "input" : "mask";
          o.push({
            type: l,
            value: s,
            index: i
          })
        }
        return o
      }

      function Dp(e) {
        return e.length > 0 ? Cp({}, e, /./) : {}
      }

      function Mp(e, t) {
        for (var r = t.start, n = void 0 === r ? 0 : r, o = t.end, i = t.mask, a = t.replacement, s = t.separate, l = e.slice(n, o), c = i.slice(n, o), u = "", d = 0; d < c.length; d++) {
          var f = Object.prototype.hasOwnProperty.call(a, c[d]);
          f && void 0 !== l[d] && l[d] !== c[d] ? u += l[d] : f && s && (u += c[d])
        }
        return u
      }

      function Rp(e, t) {
        var r = t.mask,
          n = t.replacement,
          o = "string" == typeof n ? Dp(n) : n,
          i = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
        return Tp(Np(e, {
          replacementChars: r.replace(i, ""),
          replacement: o,
          separate: !1
        }), {
          mask: r,
          replacement: o,
          separate: !1,
          showMask: !1
        })
      }(0, s.forwardRef)((({
        asChild: e,
        testId: t,
        children: r,
        colorOverride: n,
        label: o,
        size: s = "MD",
        ...c
      }, u) => {
        const d = Un(),
          f = "string" == typeof s ? s : s?.[d] ?? s.default ?? "MD",
          h = (0, a.v6)({
            className: bp({
              size: f
            }),
            "data-testid": t,
            style: dp({
              [wp]: n?.pulseColorBackground,
              [_p]: n?.pulseColorForeground,
              [mp]: n?.gradientColorBackground,
              [yp]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": o
          }, c),
          p = e ? l.Slot : "div";
        return (0, i.jsx)(p, {
          ref: u,
          ...h,
          children: e ? (0, i.jsx)(l.Slottable, {
            children: r
          }) : (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)("div", {
              className: "foundry_hcgxh_9dxgbcd"
            }), (0, i.jsx)("div", {
              className: "foundry_hcgxh_9dxgbcc"
            })]
          })
        })
      }));
      var zp = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function Ap(e) {
        return zp.includes(e) ? "\\".concat(e) : e
      }

      function Ip(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function Vp(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function Fp(e, t, r) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function qp(e) {
        return qp = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, qp(e)
      }

      function Bp() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (Bp = function() {
          return !!e
        })()
      }

      function $p(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Hp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? $p(Object(r), !0).forEach((function(t) {
            Fp(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $p(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Wp(e, t) {
        return Wp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, Wp(e, t)
      }

      function Gp(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return Gp = function(e) {
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
            t.set(e, r)
          }

          function r() {
            return function(e, t, r) {
              if (Bp()) return Reflect.construct.apply(null, arguments);
              var n = [null];
              n.push.apply(n, t);
              var o = new(e.bind.apply(e, n));
              return r && Wp(o, r.prototype), o
            }(e, arguments, qp(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), Wp(r, e)
        }, Gp(e)
      }
      var Up, Kp = function(e) {
          function t(e) {
            var r;
            return Ip(this, t), (r = function(e, t, r) {
              return t = qp(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, Bp() ? Reflect.construct(t, r || [], qp(e).constructor) : t.apply(e, r))
            }(this, t, [e])).name = "SyntheticChangeError", r
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
            }), t && Wp(e, t)
          }(t, e), Vp(t)
        }(Gp(Error)),
        Xp = ["options"],
        Yp = ["text", "email", "tel", "search", "url"],
        Zp = Vp((function e(t) {
          var r = t.init,
            n = t.tracking;
          Ip(this, e);
          var o = new WeakMap;
          this.register = function(e) {
            var t;
            if (Yp.includes(e.type)) {
              var i = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                a = i.initialValue,
                s = void 0 === a ? "" : a,
                l = i.controlled,
                c = void 0 !== l && l,
                u = r({
                  initialValue: e.value || s,
                  controlled: c
                }),
                d = u.value,
                f = u.options,
                h = {
                  value: d,
                  options: f,
                  fallbackOptions: f
                },
                p = {
                  id: -1,
                  cachedId: -1
                },
                v = {
                  value: "",
                  selectionStart: 0,
                  selectionEnd: 0
                },
                g = Object.getOwnPropertyDescriptor("_valueTracker" in e ? e : HTMLInputElement.prototype, "value");
              Object.defineProperty(e, "value", Hp(Hp({}, g), {}, {
                set: function(t) {
                  var r;
                  v.value = t, null == g || null === (r = g.set) || void 0 === r || r.call(e, t)
                }
              })), e.value = d;
              var m = function() {
                  var t = function() {
                    var r, n;
                    v.selectionStart = null !== (r = e.selectionStart) && void 0 !== r ? r : 0, v.selectionEnd = null !== (n = e.selectionEnd) && void 0 !== n ? n : 0, p.id = window.setTimeout(t)
                  };
                  p.id = window.setTimeout(t)
                },
                y = function() {
                  window.clearTimeout(p.id), p.id = -1, p.cachedId = -1
                },
                b = function(t) {
                  try {
                    var r, o;
                    if (p.cachedId === p.id) throw new Kp("The input selection has not been updated.");
                    p.cachedId = p.id;
                    var i = e.value,
                      a = e.selectionStart,
                      s = e.selectionEnd;
                    if (null === a || null === s) throw new Kp("The selection attributes have not been initialized.");
                    var l, c = v.value;
                    if (void 0 === t.inputType && (v.selectionStart = 0, v.selectionEnd = c.length), a > v.selectionStart ? l = "insert" : a <= v.selectionStart && a < v.selectionEnd ? l = "deleteBackward" : a === v.selectionEnd && i.length < c.length && (l = "deleteForward"), void 0 === l || ("deleteBackward" === l || "deleteForward" === l) && i.length > c.length) throw new Kp("Input type detection error.");
                    var u = "",
                      d = v.selectionStart,
                      f = v.selectionEnd;
                    if ("insert" === l) u = i.slice(v.selectionStart, a);
                    else {
                      var g = c.length - i.length;
                      d = a, f = a + g
                    }
                    h.value !== c ? h.options = h.fallbackOptions : h.fallbackOptions = h.options;
                    var m = h.options,
                      y = n({
                        inputType: l,
                        previousValue: c,
                        previousOptions: m,
                        value: i,
                        addedValue: u,
                        changeStart: d,
                        changeEnd: f,
                        selectionStart: a,
                        selectionEnd: s
                      }),
                      b = y.options,
                      w = function(e, t) {
                        if (null == e) return {};
                        var r, n, o = function(e, t) {
                          if (null == e) return {};
                          var r = {};
                          for (var n in e)
                            if ({}.hasOwnProperty.call(e, n)) {
                              if (t.includes(n)) continue;
                              r[n] = e[n]
                            } return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                          var i = Object.getOwnPropertySymbols(e);
                          for (n = 0; n < i.length; n++) r = i[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                        }
                        return o
                      }(y, Xp);
                    e.value = w.value, e.setSelectionRange(w.selectionStart, w.selectionEnd), h.value = w.value, h.options = b, v.selectionStart = w.selectionStart, v.selectionEnd = w.selectionEnd, null === (r = e._valueTracker) || void 0 === r || null === (o = r.setValue) || void 0 === o || o.call(r, c)
                  } catch (r) {
                    if (e.value = v.value, e.setSelectionRange(v.selectionStart, v.selectionEnd), t.preventDefault(), t.stopPropagation(), "SyntheticChangeError" !== r.name) throw r
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
      Up = Zp, Object.defineProperty(Up.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var Qp, Jp = ["track", "modify"];

      function ev(e) {
        var t, r, n, o;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? Dp(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (n = e.showMask) && void 0 !== n && n,
          separate: null !== (o = e.separate) && void 0 !== o && o,
          track: e.track,
          modify: e.modify
        }
      }
      var tv = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, r) {
            return t = jp(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, kp() ? Reflect.construct(t, r || [], jp(e).constructor) : t.apply(e, r))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                n = e.controlled,
                o = ev(r),
                i = o.mask,
                a = o.replacement,
                s = o.separate,
                l = o.showMask;
              return {
                value: t = n || t ? t : l ? i : "",
                options: {
                  mask: i,
                  replacement: a,
                  separate: s
                }
              }
            },
            tracking: function(e) {
              var t = e.inputType,
                n = e.previousValue,
                o = e.previousOptions,
                i = e.addedValue,
                a = e.changeStart,
                s = e.changeEnd,
                l = ev(r),
                c = l.track,
                u = l.modify,
                d = function(e, t) {
                  if (null == e) return {};
                  var r, n, o = function(e, t) {
                    if (null == e) return {};
                    var r = {};
                    for (var n in e)
                      if ({}.hasOwnProperty.call(e, n)) {
                        if (t.includes(n)) continue;
                        r[n] = e[n]
                      } return r
                  }(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) r = i[n], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                  }
                  return o
                }(l, Jp),
                f = d.mask,
                h = d.replacement,
                p = d.showMask,
                v = d.separate,
                g = Pp(Pp({}, "insert" === t ? {
                  inputType: t,
                  data: i
                } : {
                  inputType: t,
                  data: null
                }), {}, {
                  value: n,
                  selectionStart: a,
                  selectionEnd: s
                }),
                m = null == c ? void 0 : c(g);
              if (!1 === m) throw new Kp("Custom tracking stop.");
              null === m ? i = "" : !0 !== m && void 0 !== m && (i = m);
              var y = null == u ? void 0 : u(g);
              void 0 !== (null == y ? void 0 : y.mask) && (f = y.mask), void 0 !== (null == y ? void 0 : y.replacement) && (h = "string" == typeof(null == y ? void 0 : y.replacement) ? Dp(null == y ? void 0 : y.replacement) : y.replacement), void 0 !== (null == y ? void 0 : y.showMask) && (p = y.showMask), void 0 !== (null == y ? void 0 : y.separate) && (v = y.separate);
              var b = Mp(n, Pp({
                  end: a
                }, o)),
                w = Mp(n, Pp({
                  start: s
                }, o)),
                _ = RegExp("[^".concat(Object.keys(h).join(""), "]"), "g"),
                x = f.replace(_, "");
              if (b && (b = Np(b, {
                  replacementChars: x,
                  replacement: h,
                  separate: v
                }), x = x.slice(b.length)), i && (i = Np(i, {
                  replacementChars: x,
                  replacement: h,
                  separate: !1
                }), x = x.slice(i.length)), "insert" === t && "" === i) throw new Kp("The character does not match the key value of the `replacement` object.");
              if (v) {
                var S = f.slice(a, s).replace(_, ""),
                  C = S.length - i.length;
                C < 0 ? w = w.slice(-C) : C > 0 && (w = S.slice(-C) + w)
              }
              w && (w = Np(w, {
                replacementChars: x,
                replacement: h,
                separate: v
              }));
              var j = Tp(b + i + w, {
                  mask: f,
                  replacement: h,
                  separate: v,
                  showMask: p
                }),
                k = function(e) {
                  var t, r, n, o = e.inputType,
                    i = e.value,
                    a = e.addedValue,
                    s = e.beforeChangeValue,
                    l = e.replacement,
                    c = e.separate,
                    u = Lp(i, {
                      mask: e.mask,
                      replacement: l
                    }).filter((function(e) {
                      var t = e.type;
                      return "input" === t || c && "replacement" === t
                    })),
                    d = null === (t = u[s.length + a.length - 1]) || void 0 === t ? void 0 : t.index,
                    f = null === (r = u[s.length - 1]) || void 0 === r ? void 0 : r.index,
                    h = null === (n = u[s.length + a.length]) || void 0 === n ? void 0 : n.index;
                  if ("insert" === o) {
                    if (void 0 !== d) return d + 1;
                    if (void 0 !== h) return h;
                    if (void 0 !== f) return f + 1
                  }
                  if ("deleteForward" === o) {
                    if (void 0 !== h) return h;
                    if (void 0 !== f) return f + 1
                  }
                  if ("deleteBackward" === o) {
                    if (void 0 !== f) return f + 1;
                    if (void 0 !== h) return h
                  }
                  var p = i.split("").findIndex((function(e) {
                    return Object.prototype.hasOwnProperty.call(l, e)
                  }));
                  return -1 !== p ? p : i.length
                }({
                  inputType: t,
                  value: j,
                  addedValue: i,
                  beforeChangeValue: b,
                  mask: f,
                  replacement: h,
                  separate: v
                });
              return {
                value: j,
                selectionStart: k,
                selectionEnd: k,
                options: {
                  mask: f,
                  replacement: h,
                  separate: v
                }
              }
            }
          }])).format = function(e) {
            return Rp(e, ev(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? Dp(n) : n;
              return Lp(Rp(e, {
                mask: r,
                replacement: o
              }), {
                mask: r,
                replacement: o
              })
            }(e, ev(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                n = t.replacement,
                o = "string" == typeof n ? Dp(n) : n,
                i = Mp(e, {
                  mask: r,
                  replacement: o,
                  separate: !1
                }),
                a = RegExp("[^".concat(Object.keys(o).join(""), "]"), "g");
              return Np(i, {
                replacementChars: r.replace(a, ""),
                replacement: o,
                separate: !1
              })
            }(e, ev(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, n = t.replacement, o = "string" == typeof n ? Dp(n) : n, i = "partial" === e || "partial-inexact" === e, a = "full" === e || "partial" === e, s = "", l = 0; l < r.length; l++) {
                var c = r[l];
                0 === l && (s = "^"), i && (s += "("), s += Object.prototype.hasOwnProperty.call(o, c) ? "".concat(a ? "(?!".concat(Ap(c), ")") : "", "(").concat(o[c].source, ")") : Ap(c), l === r.length - 1 && (i && (s += ")?".repeat(r.length)), s += "$")
              }
              return s
            }(e, ev(r))
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
            }), t && Ep(e, t)
          }(e, Zp),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function rv(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function nv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function ov(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? nv(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = rv(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nv(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function iv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }
      Qp = tv, Object.defineProperty(Qp.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      });
      var av = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        sv = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = ov(ov({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) av(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return iv(e.variantClassNames, (e => iv(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        lv = "foundry_hcgxh_8oytzos",
        cv = sv({
          defaultClassName: "foundry_hcgxh_8oytzob",
          variantClassNames: {
            isDisabled: {
              false: "foundry_hcgxh_8oytzoc",
              true: "foundry_hcgxh_8oytzod"
            },
            isReadOnly: {
              false: "foundry_hcgxh_8oytzoe",
              true: "foundry_hcgxh_8oytzof"
            },
            isInvalid: {
              false: "foundry_hcgxh_8oytzog",
              true: "foundry_hcgxh_8oytzoh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        uv = sv({
          defaultClassName: "foundry_hcgxh_8oytzou",
          variantClassNames: {
            isDisabled: {
              false: "foundry_hcgxh_8oytzov",
              true: "foundry_hcgxh_8oytzow"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        dv = sv({
          defaultClassName: "foundry_hcgxh_8oytzo8",
          variantClassNames: {
            isDisabled: {
              false: "foundry_hcgxh_8oytzo9",
              true: "foundry_hcgxh_8oytzoa"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        fv = sv({
          defaultClassName: "foundry_hcgxh_8oytzon",
          variantClassNames: {
            side: {
              left: "foundry_hcgxh_8oytzoo",
              right: "foundry_hcgxh_8oytzop"
            },
            isDisabled: {
              false: "foundry_hcgxh_8oytzoq",
              true: "foundry_hcgxh_8oytzor"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        hv = sv({
          defaultClassName: "foundry_hcgxh_8oytzoi foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd10",
          variantClassNames: {
            isDisabled: {
              false: "foundry_hcgxh_8oytzoj",
              true: "foundry_hcgxh_8oytzok"
            },
            isReadOnly: {
              false: "foundry_hcgxh_8oytzol",
              true: "foundry_hcgxh_8oytzom"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        pv = sv({
          defaultClassName: "foundry_hcgxh_8oytzo4",
          variantClassNames: {
            isDisabled: {
              false: "foundry_hcgxh_8oytzo5",
              true: "foundry_hcgxh_8oytzo6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const vv = (e, t, r) => {
          const n = [];
          return e && n.push(e), t && n.push(t), r && n.push(r), n.join(" ")
        },
        gv = (0, s.createContext)(null);

      function mv() {
        const e = (0, s.useContext)(gv);
        if (!e) throw Error("useTextFieldContext can only be used in a <TextField.Root />");
        return e
      }

      function yv(e, t) {
        let {
          elementType: r = "a",
          onPress: n,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ...l
        } = e, c = {};
        "a" !== r && (c = {
          role: "link",
          tabIndex: s ? void 0 : 0
        });
        let {
          focusableProps: u
        } = ht(e, t), {
          pressProps: d,
          isPressed: f
        } = Kt({
          onPress: n,
          onPressStart: o,
          onPressEnd: i,
          onClick: a,
          isDisabled: s,
          ref: t
        }), h = X(l, {
          labelable: !0
        }), p = me(u, d), v = qt();
        return {
          isPressed: f,
          linkProps: me(h, $t(e), {
            ...p,
            ...c,
            "aria-disabled": s || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var r;
              null === (r = d.onClick) || void 0 === r || r.call(d, t), !v.isNative && t.currentTarget instanceof HTMLAnchorElement && t.currentTarget.href && !t.isDefaultPrevented() && function(e, t) {
                let r = e.getAttribute("target");
                return !(r && "_self" !== r || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
              }(t.currentTarget, t) && e.href && (t.preventDefault(), v.open(t.currentTarget, t, e.href, e.routerOptions))
            }
          })
        }
      }

      function bv(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function wv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function _v(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? wv(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = bv(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wv(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function xv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, s.forwardRef)((({
        asChild: e,
        children: t,
        testId: r,
        isDisabled: n = !1,
        isReadOnly: o = !1,
        isRequired: c = !1,
        isInvalid: u = !1,
        ...d
      }, f) => {
        const [h, p] = (0, s.useState)("text"), v = (0, s.useId)(), g = (0, s.useId)(), m = (0, s.useId)(), y = (0, s.useId)(), b = (0, a.v6)({
          "data-testid": r,
          className: "foundry_hcgxh_8oytzo3"
        }, d), w = e ? l.Slot : "div";
        return (0, i.jsx)(gv.Provider, {
          value: {
            isDisabled: n,
            isReadOnly: o,
            isRequired: c,
            isInvalid: u,
            labelId: v,
            inputId: g,
            descriptionId: m,
            errorId: y,
            inputType: h,
            setInputType: p
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
        children: r,
        isHidden: n = !1,
        hideRequiredAsterisk: o,
        ...s
      }, c) => {
        const {
          isDisabled: d,
          isRequired: f,
          inputId: h,
          labelId: p
        } = mv(), v = (0, a.v6)({
          id: s.id || p,
          htmlFor: s.htmlFor || h,
          "data-testid": e,
          className: pv({
            isDisabled: d
          })
        }, s), g = t ? l.Slot : "label";
        return (0, i.jsx)(u, {
          enabled: n,
          children: (0, i.jsx)(M, {
            size: "SM",
            asChild: !0,
            children: (0, i.jsxs)(g, {
              ref: c,
              ...v,
              children: [r, f && !o && (0, i.jsx)("span", {
                className: "foundry_hcgxh_8oytzo7",
                children: "*"
              })]
            })
          })
        })
      })), (0, s.forwardRef)((({
        testId: e,
        asChild: t,
        children: r,
        ...n
      }, o) => {
        const {
          isDisabled: s
        } = mv(), c = (0, a.v6)({
          "data-testid": e,
          className: dv({
            isDisabled: s
          })
        }, n), u = t ? l.Slot : "span";
        return (0, i.jsx)(M, {
          size: "XS",
          asChild: !0,
          children: (0, i.jsx)(u, {
            ref: o,
            ...c,
            children: r
          })
        })
      })), (0, s.forwardRef)((({
        testId: e,
        asChild: t,
        children: r,
        ...n
      }, o) => {
        const {
          isDisabled: s,
          isReadOnly: c,
          isInvalid: u
        } = mv(), d = (0, a.v6)({
          "data-testid": e,
          className: (0, O.$)(cv({
            isDisabled: s,
            isReadOnly: c,
            isInvalid: u
          }), "foundry_hcgxh_8oytzo1")
        }, n), f = t ? l.Slot : "div";
        return (0, i.jsx)(f, {
          ref: o,
          ...d,
          children: r
        })
      })), (0, s.forwardRef)((({
        testId: e,
        asChild: t,
        "aria-labelledby": r,
        "aria-describedby": n,
        type: o,
        mask: c,
        replacement: u,
        showMask: d = !0,
        track: f,
        ...h
      }, p) => {
        const {
          isDisabled: v,
          isReadOnly: g,
          isRequired: m,
          labelId: y,
          inputId: b,
          descriptionId: w,
          isInvalid: _,
          errorId: x,
          inputType: S,
          setInputType: C
        } = mv();
        (0, s.useEffect)((() => C(o ?? "text")), []);
        const j = (0, a.v6)({
            disabled: v,
            readOnly: g,
            required: m,
            id: b,
            type: S,
            spellCheck: !1,
            "aria-labelledby": vv(y, r),
            "aria-describedby": vv(w, n, _ ? x : void 0),
            "data-testid": e,
            className: (0, O.$)(hv({
              isDisabled: v,
              isReadOnly: g
            }), "foundry_hcgxh_8oytzo2"),
            ..._ && {
              "aria-invalid": !0,
              "aria-errormessage": x
            },
            ...v && {
              "aria-disabled": !0
            },
            ...m && {
              "aria-required": !0
            }
          }, h),
          k = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = e.mask,
              r = e.replacement,
              n = e.showMask,
              o = e.separate,
              i = e.track,
              a = e.modify,
              l = (0, s.useRef)(null),
              c = (0, s.useRef)({
                mask: t,
                replacement: r,
                showMask: n,
                separate: o,
                track: i,
                modify: a
              });
            return c.current.mask = t, c.current.replacement = r, c.current.showMask = n, c.current.separate = o, c.current.track = i, c.current.modify = a, (0, s.useMemo)((function() {
              return function(e, t) {
                return new Proxy(e, {
                  set: function(r, n, o) {
                    return "current" === n && (o !== e.current && (null !== e.current && t.unregister(e.current), null !== o && t.register(o)), r[n] = o, !0)
                  }
                })
              }(l, new tv(c.current))
            }), [])
          }({
            mask: c,
            replacement: u,
            showMask: d,
            track: f
          }),
          P = F(c && u ? k : null, p),
          E = t ? l.Slot : "input";
        return (0, i.jsx)(E, {
          ref: P,
          ...j
        })
      })), (0, s.forwardRef)((({
        icon: e,
        asChild: t,
        testId: r,
        side: n,
        ...o
      }, s) => {
        const {
          isDisabled: c
        } = mv(), u = (0, a.v6)({
          size: "LG",
          "data-testid": r,
          className: (0, O.$)(fv({
            side: n,
            isDisabled: c
          }), "foundry_hcgxh_8oytzo0")
        }, o), d = t ? l.Slot : z[e];
        return (0, i.jsx)(d, {
          ref: s,
          ...u
        })
      })), (0, s.forwardRef)((({
        ...e
      }, t) => {
        const {
          isDisabled: r
        } = mv(), n = (0, a.v6)({
          isDisabled: r,
          size: "SM",
          appearance: "ghost",
          className: lv
        }, e);
        return (0, i.jsx)(Oc, {
          ref: t,
          ...n
        })
      })), (0, s.forwardRef)((({
        ...e
      }, t) => {
        const {
          isDisabled: r,
          inputType: n,
          setInputType: o
        } = mv(), s = "password" === n, l = s ? "Reveal Password" : "Hide Password", c = (0, a.v6)({
          isDisabled: r,
          size: "SM",
          appearance: "ghost",
          className: lv,
          label: l,
          icon: s ? "Eye" : "EyeOff",
          onPress: () => {
            o(s ? "text" : "password")
          }
        }, e);
        return (0, i.jsx)(Ou, {
          side: "bottom",
          portal: !1,
          align: "end",
          content: (0, i.jsx)(M, {
            size: "SM",
            children: l
          }),
          children: (0, i.jsx)(Oc, {
            ref: t,
            ...c
          })
        })
      })), (0, s.forwardRef)((({
        testId: e,
        asChild: t,
        children: r,
        isHidden: n = !1,
        errorMessage: o,
        ...s
      }, c) => {
        const {
          isDisabled: d,
          isInvalid: f,
          descriptionId: h,
          errorId: p
        } = mv(), v = (0, a.v6)({
          id: h,
          asChild: !0,
          "data-testid": e,
          className: uv({
            isDisabled: d
          })
        }, s), g = t ? l.Slot : "p", m = R.X;
        return (0, i.jsxs)("div", {
          className: "foundry_hcgxh_8oytzot",
          children: [(0, i.jsx)(u, {
            enabled: n || f,
            children: (0, i.jsx)(M, {
              size: "SM",
              ref: c,
              ...v,
              children: (0, i.jsx)(g, {
                children: r
              })
            })
          }), f && o && (0, i.jsxs)(M, {
            size: "SM",
            appearance: "bold",
            className: "foundry_hcgxh_8oytzox",
            id: p,
            children: [(0, i.jsx)(m, {
              size: "MD",
              label: "",
              className: "foundry_hcgxh_8oytzoy"
            }), o]
          })]
        })
      }));
      var Sv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Cv = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = _v(_v({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Sv(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return xv(e.variantClassNames, (e => xv(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        jv = Cv({
          defaultClassName: "foundry_hcgxh_1m368qhm",
          variantClassNames: {
            hasBackground: {
              false: "foundry_hcgxh_1m368qhn"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        kv = Cv({
          defaultClassName: "foundry_hcgxh_1m368qhd",
          variantClassNames: {
            status: {
              information: "foundry_hcgxh_1m368qhe",
              danger: "foundry_hcgxh_1m368qhf",
              success: "foundry_hcgxh_1m368qhg",
              warning: "foundry_hcgxh_1m368qhh"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Ov = Cv({
          defaultClassName: "foundry_hcgxh_1m368qh2",
          variantClassNames: {
            status: {
              danger: "foundry_hcgxh_1m368qh3",
              information: "foundry_hcgxh_1m368qh4",
              success: "foundry_hcgxh_1m368qh5",
              warning: "foundry_hcgxh_1m368qh6"
            },
            background: {
              "two-tone": "foundry_hcgxh_1m368qh7",
              neutral: "foundry_hcgxh_1m368qh8",
              none: "foundry_hcgxh_1m368qh9"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const Pv = (0, s.createContext)(null);

      function Ev() {
        const e = (0, s.useContext)(Pv);
        if (!e) throw Error("useAlertContext can only be used in a <Alert.Root />");
        return e
      }(0, s.forwardRef)((({
        asChild: e,
        testId: t,
        status: r,
        background: n,
        ...o
      }, s) => {
        const c = e ? l.Slot : "div",
          u = (0, a.v6)(o, {
            className: Ov({
              status: r,
              background: n
            })
          });
        return (0, i.jsx)(Pv.Provider, {
          value: {
            status: r,
            background: n
          },
          children: (0, i.jsx)(c, {
            ref: s,
            "data-testid": t,
            ...u,
            ...o
          })
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? l.Slot : "div",
          s = (0, a.v6)(r, {
            className: "foundry_hcgxh_1m368qha"
          });
        return (0, i.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...s
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? l.Slot : "div",
          s = (0, a.v6)(r, {
            className: "foundry_hcgxh_1m368qhb"
          });
        return (0, i.jsx)(o, {
          ref: n,
          "data-testid": t,
          ...s
        })
      }));
      const Nv = {
        danger: "CircleX",
        information: "Info",
        success: "CircleCheck",
        warning: "TriangleAlert"
      };

      function Tv(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Lv(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Dv(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Lv(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Tv(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lv(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Mv(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, s.forwardRef)((({
        icon: e,
        ...t
      }, r) => {
        const {
          status: n
        } = Ev(), o = z[e || Nv[n]], s = (0, a.v6)(t, {
          className: kv({
            status: n
          })
        });
        return (0, i.jsx)("div", {
          className: "foundry_hcgxh_1m368qhc",
          children: (0, i.jsx)(o, {
            title: "",
            ref: r,
            ...s
          })
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? l.Slot : "div",
          s = (0, a.v6)(r, {
            className: "foundry_hcgxh_1m368qhi"
          });
        return (0, i.jsx)(b, {
          level: 6,
          asChild: !0,
          children: (0, i.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? l.Slot : "div",
          s = (0, a.v6)(r, {
            className: "foundry_hcgxh_1m368qhj"
          });
        return (0, i.jsx)(M, {
          size: "SM",
          asChild: !0,
          children: (0, i.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const c = (0, s.useRef)(null),
          u = F(c, o),
          d = e ? l.Slot : "a",
          {
            linkProps: f,
            isPressed: h
          } = yv(n, c),
          p = (0, a.v6)(f, {
            className: "foundry_hcgxh_1m368qhk foundry_hcgxh_1d5mo5m0"
          });
        return (0, i.jsx)(M, {
          size: "SM",
          appearance: "hyperlink",
          asChild: !0,
          children: (0, i.jsx)(d, {
            "data-pressed": h,
            "data-testid": r,
            ref: u,
            ...p,
            children: t
          })
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const s = e ? l.Slot : "div",
          c = (0, a.v6)(n, {
            className: "foundry_hcgxh_1m368qhl"
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": r,
          ...c,
          children: t
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        className: r,
        ...n
      }, o) => {
        const a = e ? l.Slot : "div";
        return (0, i.jsx)(M, {
          size: "SM",
          asChild: !0,
          children: (0, i.jsx)(a, {
            ref: o,
            "data-testid": t,
            className: (0, O.$)(r, "foundry_hcgxh_1m368qho"),
            ...n
          })
        })
      })), (0, s.forwardRef)((({
        testId: e,
        label: t = "close alert",
        ...r
      }, n) => {
        const {
          background: o
        } = Ev(), s = (0, a.v6)(r, {
          className: jv({
            hasBackground: "none" !== o
          })
        });
        return (0, i.jsx)(Oc, {
          ref: n,
          label: t,
          "data-testid": e,
          appearance: "ghost",
          icon: "X",
          size: "XS",
          ...s
        })
      }));
      var Rv = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        zv = "foundry_hcgxh_qmpv6yt",
        Av = (e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Dv(Dv({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Rv(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Mv(e.variantClassNames, (e => Mv(e, (e => e.split(" ")[0]))))
            }
          }, t
        })({
          defaultClassName: "foundry_hcgxh_qmpv6y6",
          variantClassNames: {
            status: {
              danger: "foundry_hcgxh_qmpv6y7",
              information: "foundry_hcgxh_qmpv6y8",
              success: "foundry_hcgxh_qmpv6y9",
              warning: "foundry_hcgxh_qmpv6ya"
            },
            background: {
              static: "foundry_hcgxh_qmpv6yb",
              "two-tone": "foundry_hcgxh_qmpv6yc",
              neutral: "foundry_hcgxh_qmpv6yd"
            },
            align: {
              left: "foundry_hcgxh_qmpv6ye",
              center: "foundry_hcgxh_qmpv6yf"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              status: "danger",
              background: "static"
            }, "foundry_hcgxh_qmpv6yg"],
            [{
              status: "information",
              background: "static"
            }, "foundry_hcgxh_qmpv6yh"],
            [{
              status: "warning",
              background: "static"
            }, "foundry_hcgxh_qmpv6yi"],
            [{
              status: "success",
              background: "static"
            }, "foundry_hcgxh_qmpv6yj"]
          ]
        });

      function Iv(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function Vv(e, t) {
        const r = Object.keys(e),
          n = Object.keys(t);
        return r.length === n.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every((r => {
          const n = e[r],
            o = t[r];
          return "function" == typeof n ? `${n}` == `${o}` : Iv(n) && Iv(o) ? Vv(n, o) : n === o
        })))
      }

      function Fv(e) {
        return e.concat().sort(((e, t) => e.name > t.name ? 1 : -1)).map((e => e.options))
      }

      function qv(e) {
        return "number" == typeof e
      }

      function Bv(e) {
        return "string" == typeof e
      }

      function $v(e) {
        return "boolean" == typeof e
      }

      function Hv(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function Wv(e) {
        return Math.abs(e)
      }

      function Gv(e) {
        return Math.sign(e)
      }

      function Uv(e, t) {
        return Wv(e - t)
      }

      function Kv(e) {
        return Jv(e).map(Number)
      }

      function Xv(e) {
        return e[Yv(e)]
      }

      function Yv(e) {
        return Math.max(0, e.length - 1)
      }

      function Zv(e, t) {
        return t === Yv(e)
      }

      function Qv(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Array.from(Array(e), ((e, r) => t + r))
      }

      function Jv(e) {
        return Object.keys(e)
      }

      function eg(e, t) {
        return [e, t].reduce(((e, t) => (Jv(t).forEach((r => {
          const n = e[r],
            o = t[r],
            i = Hv(n) && Hv(o);
          e[r] = i ? eg(n, o) : o
        })), e)), {})
      }

      function tg(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function rg() {
        let e = [];
        const t = {
          add: function(r, n, o) {
            let i, a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
              passive: !0
            };
            if ("addEventListener" in r) r.addEventListener(n, o, a), i = () => r.removeEventListener(n, o, a);
            else {
              const e = r;
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

      function ng() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const r = Wv(e - t);

        function n(t) {
          return t < e
        }

        function o(e) {
          return e > t
        }

        function i(e) {
          return n(e) || o(e)
        }
        return {
          length: r,
          max: t,
          min: e,
          constrain: function(r) {
            return i(r) ? n(r) ? e : t : r
          },
          reachedAny: i,
          reachedMax: o,
          reachedMin: n,
          removeOffset: function(e) {
            return r ? e - r * Math.ceil((e - t) / r) : e
          }
        }
      }

      function og(e, t, r) {
        const {
          constrain: n
        } = ng(0, e), o = e + 1;
        let i = a(t);

        function a(e) {
          return r ? Wv((o + e) % o) : n(e)
        }

        function s() {
          return i
        }

        function l() {
          return og(e, s(), r)
        }
        const c = {
          get: s,
          set: function(e) {
            return i = a(e), c
          },
          add: function(e) {
            return l().set(s() + e)
          },
          clone: l
        };
        return c
      }

      function ig(e, t, r, n, o, i, a, s, l, c, u, d, f, h, p, v, g, m, y) {
        const {
          cross: b,
          direction: w
        } = e, _ = ["INPUT", "SELECT", "TEXTAREA"], x = {
          passive: !1
        }, S = rg(), C = rg(), j = ng(50, 225).constrain(h.measure(20)), k = {
          mouse: 300,
          touch: 400
        }, O = {
          mouse: 500,
          touch: 600
        }, P = p ? 43 : 25;
        let E = !1,
          N = 0,
          T = 0,
          L = !1,
          D = !1,
          M = !1,
          R = !1;

        function z(e) {
          if (!tg(e, n) && e.touches.length >= 2) return A(e);
          const t = i.readPoint(e),
            r = i.readPoint(e, b),
            a = Uv(t, N),
            l = Uv(r, T);
          if (!D && !R) {
            if (!e.cancelable) return A(e);
            if (D = a > l, !D) return A(e)
          }
          const u = i.pointerMove(e);
          a > v && (M = !0), c.useFriction(.3).useDuration(.75), s.start(), o.add(w(u)), e.preventDefault()
        }

        function A(e) {
          const t = u.byDistance(0, !1).index !== d.get(),
            r = i.pointerUp(e) * (p ? O : k)[R ? "mouse" : "touch"],
            n = function(e, t) {
              const r = d.add(-1 * Gv(e)),
                n = u.byDistance(e, !p).distance;
              return p || Wv(e) < j ? n : g && t ? .5 * n : u.byIndex(r.get(), 0).distance
            }(w(r), t),
            o = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (Wv(e) <= Wv(t)) return 0;
              const r = Uv(Wv(e), Wv(t));
              return Wv(r / e)
            }(r, n),
            a = P - 10 * o,
            s = m + o / 50;
          D = !1, L = !1, C.clear(), c.useDuration(a).useFriction(s), l.distance(n, !p), R = !1, f.emit("pointerUp")
        }

        function I(e) {
          M && (e.stopPropagation(), e.preventDefault(), M = !1)
        }
        return {
          init: function(e) {
            if (!y) return;

            function s(s) {
              ($v(y) || y(e, s)) && function(e) {
                const s = tg(e, n);
                R = s, M = p && s && !e.buttons && E, E = Uv(o.get(), a.get()) >= 2, s && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return _.includes(t)
                }(e.target) || (L = !0, i.pointerDown(e), c.useFriction(0).useDuration(0), o.set(a), function() {
                  const e = R ? r : t;
                  C.add(e, "touchmove", z, x).add(e, "touchend", A).add(e, "mousemove", z, x).add(e, "mouseup", A)
                }(), N = i.readPoint(e), T = i.readPoint(e, b), f.emit("pointerDown"))
              }(s)
            }
            const l = t;
            S.add(l, "dragstart", (e => e.preventDefault()), x).add(l, "touchmove", (() => {}), x).add(l, "touchend", (() => {})).add(l, "touchstart", s).add(l, "mousedown", s).add(l, "touchcancel", A).add(l, "contextmenu", A).add(l, "click", I, !0)
          },
          destroy: function() {
            S.clear(), C.clear()
          },
          pointerDown: function() {
            return L
          }
        }
      }

      function ag(e, t) {
        let r, n;

        function o(e) {
          return e.timeStamp
        }

        function i(r, n) {
          const o = "client" + ("x" === (n || e.scroll) ? "X" : "Y");
          return (tg(r, t) ? r : r.touches[0])[o]
        }
        return {
          pointerDown: function(e) {
            return r = e, n = e, i(e)
          },
          pointerMove: function(e) {
            const t = i(e) - i(n),
              a = o(e) - o(r) > 170;
            return n = e, a && (r = e), t
          },
          pointerUp: function(e) {
            if (!r || !n) return 0;
            const t = i(n) - i(r),
              a = o(e) - o(r),
              s = o(e) - o(n) > 170,
              l = t / a;
            return a && !s && Wv(l) > .1 ? l : 0
          },
          readPoint: i
        }
      }

      function sg(e, t, r, n, o, i, a) {
        const s = [e].concat(n);
        let l, c, u = [],
          d = !1;

        function f(e) {
          return o.measureSize(a.measure(e))
        }
        return {
          init: function(o) {
            i && (c = f(e), u = n.map(f), l = new ResizeObserver((r => {
              ($v(i) || i(o, r)) && function(r) {
                for (const i of r) {
                  if (d) return;
                  const r = i.target === e,
                    a = n.indexOf(i.target),
                    s = r ? c : u[a];
                  if (Wv(f(r ? e : n[a]) - s) >= .5) {
                    o.reInit(), t.emit("resize");
                    break
                  }
                }
              }(r)
            })), r.requestAnimationFrame((() => {
              s.forEach((e => l.observe(e)))
            })))
          },
          destroy: function() {
            d = !0, l && l.disconnect()
          }
        }
      }

      function lg(e, t, r, n, o) {
        const i = o.measure(10),
          a = o.measure(50),
          s = ng(.1, .99);
        let l = !1;

        function c() {
          return !l && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: c,
          constrain: function(o) {
            if (!c()) return;
            const l = e.reachedMin(t.get()) ? "min" : "max",
              u = Wv(e[l] - t.get()),
              d = r.get() - t.get(),
              f = s.constrain(u / a);
            r.subtract(d * f), !o && Wv(d) < i && (r.set(e.constrain(r.get())), n.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            l = !e
          }
        }
      }

      function cg(e, t, r, n) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: a,
            reachedMax: s
          } = ng(o, i),
          l = {
            loop: function(t) {
              if (! function(e) {
                  return 1 === e ? s(r.get()) : -1 === e && a(r.get())
                }(t)) return;
              const o = e * (-1 * t);
              n.forEach((e => e.add(o)))
            }
          };
        return l
      }

      function ug(e) {
        let t = e;

        function r(e) {
          return qv(e) ? e : e.get()
        }
        return {
          get: function() {
            return t
          },
          set: function(e) {
            t = r(e)
          },
          add: function(e) {
            t += r(e)
          },
          subtract: function(e) {
            t -= r(e)
          }
        }
      }

      function dg(e, t) {
        const r = "x" === e.scroll ? function(e) {
            return `translate3d(${e}px,0px,0px)`
          } : function(e) {
            return `translate3d(0px,${e}px,0px)`
          },
          n = t.style;
        let o = null,
          i = !1;
        const a = {
          clear: function() {
            i || (n.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
          },
          to: function(t) {
            if (i) return;
            const a = (s = e.direction(t), Math.round(100 * s) / 100);
            var s;
            a !== o && (n.transform = r(a), o = a)
          },
          toggleActive: function(e) {
            i = !e
          }
        };
        return a
      }

      function fg(e, t, r, n, o, i, a, s, l) {
        const c = Kv(o),
          u = Kv(o).reverse(),
          d = function() {
            const e = a[0];
            return p(h(u, e), r, !1)
          }().concat(function() {
            const e = t - a[0] - 1;
            return p(h(c, e), -r, !0)
          }());

        function f(e, t) {
          return e.reduce(((e, t) => e - o[t]), t)
        }

        function h(e, t) {
          return e.reduce(((e, r) => f(e, t) > 0 ? e.concat([r]) : e), [])
        }

        function p(o, a, c) {
          const u = function(e) {
            return i.map(((r, o) => ({
              start: r - n[o] + .5 + e,
              end: r + t - .5 + e
            })))
          }(a);
          return o.map((t => {
            const n = c ? 0 : -r,
              o = c ? r : 0,
              i = c ? "end" : "start",
              a = u[t][i];
            return {
              index: t,
              loopPoint: a,
              slideLocation: ug(-1),
              translate: dg(e, l[t]),
              target: () => s.get() > a ? n : o
            }
          }))
        }
        const v = {
          canLoop: function() {
            return d.every((e => {
              let {
                index: r
              } = e;
              const n = c.filter((e => e !== r));
              return f(n, t) <= .1
            }))
          },
          clear: function() {
            d.forEach((e => e.translate.clear()))
          },
          loop: function() {
            d.forEach((e => {
              const {
                target: t,
                translate: r,
                slideLocation: n
              } = e, o = t();
              o !== n.get() && (r.to(o), n.set(o))
            }))
          },
          loopPoints: d
        };
        return v
      }

      function hg(e, t, r) {
        let n, o = !1;
        return {
          init: function(i) {
            r && (n = new MutationObserver((e => {
              o || ($v(r) || r(i, e)) && function(e) {
                for (const r of e)
                  if ("childList" === r.type) {
                    i.reInit(), t.emit("slidesChanged");
                    break
                  }
              }(e)
            })), n.observe(e, {
              childList: !0
            }))
          },
          destroy: function() {
            n && n.disconnect(), o = !0
          }
        }
      }

      function pg(e, t, r, n, o, i, a) {
        const {
          align: s,
          axis: l,
          direction: c,
          startIndex: u,
          loop: d,
          duration: f,
          dragFree: h,
          dragThreshold: p,
          inViewThreshold: v,
          slidesToScroll: g,
          skipSnaps: m,
          containScroll: y,
          watchResize: b,
          watchSlides: w,
          watchDrag: _,
          watchFocus: x
        } = i, S = {
          measure: function(e) {
            const {
              offsetTop: t,
              offsetLeft: r,
              offsetWidth: n,
              offsetHeight: o
            } = e;
            return {
              top: t,
              right: r + n,
              bottom: t + o,
              left: r,
              width: n,
              height: o
            }
          }
        }, C = S.measure(t), j = r.map(S.measure), k = function(e, t) {
          const r = "rtl" === t,
            n = "y" === e,
            o = !n && r ? -1 : 1;
          return {
            scroll: n ? "y" : "x",
            cross: n ? "x" : "y",
            startEdge: n ? "top" : r ? "right" : "left",
            endEdge: n ? "bottom" : r ? "left" : "right",
            measureSize: function(e) {
              const {
                height: t,
                width: r
              } = e;
              return n ? t : r
            },
            direction: function(e) {
              return e * o
            }
          }
        }(l, c), O = k.measureSize(C), P = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(O), E = function(e, t) {
          const r = {
            start: function() {
              return 0
            },
            center: function(e) {
              return n(e) / 2
            },
            end: n
          };

          function n(e) {
            return t - e
          }
          const o = {
            measure: function(n, o) {
              return Bv(e) ? r[e](n) : e(t, n, o)
            }
          };
          return o
        }(s, O), N = !d && !!y, T = d || !!y, {
          slideSizes: L,
          slideSizesWithGaps: D,
          startGap: M,
          endGap: R
        } = function(e, t, r, n, o, i) {
          const {
            measureSize: a,
            startEdge: s,
            endEdge: l
          } = e, c = r[0] && o, u = function() {
            if (!c) return 0;
            const e = r[0];
            return Wv(t[s] - e[s])
          }(), d = function() {
            if (!c) return 0;
            const e = i.getComputedStyle(Xv(n));
            return parseFloat(e.getPropertyValue(`margin-${l}`))
          }(), f = r.map(a), h = r.map(((e, t, r) => {
            const n = !t,
              o = Zv(r, t);
            return n ? f[t] + u : o ? f[t] + d : r[t + 1][s] - e[s]
          })).map(Wv);
          return {
            slideSizes: f,
            slideSizesWithGaps: h,
            startGap: u,
            endGap: d
          }
        }(k, C, j, r, T, o), z = function(e, t, r, n, o, i, a, s, l) {
          const {
            startEdge: c,
            endEdge: u,
            direction: d
          } = e, f = qv(r), h = {
            groupSlides: function(e) {
              return f ? function(e, t) {
                return Kv(e).filter((e => e % t == 0)).map((r => e.slice(r, r + t)))
              }(e, r) : function(e) {
                return e.length ? Kv(e).reduce(((r, f, h) => {
                  const p = Xv(r) || 0,
                    v = 0 === p,
                    g = f === Yv(e),
                    m = o[c] - i[p][c],
                    y = o[c] - i[f][u],
                    b = !n && v ? d(a) : 0,
                    w = Wv(y - (!n && g ? d(s) : 0) - (m + b));
                  return h && w > t + l && r.push(f), g && r.push(e.length), r
                }), []).map(((t, r, n) => {
                  const o = Math.max(n[r - 1] || 0);
                  return e.slice(o, t)
                })) : []
              }(e)
            }
          };
          return h
        }(k, O, g, d, C, j, M, R, 2), {
          snaps: A,
          snapsAligned: I
        } = function(e, t, r, n, o) {
          const {
            startEdge: i,
            endEdge: a
          } = e, {
            groupSlides: s
          } = o, l = s(n).map((e => Xv(e)[a] - e[0][i])).map(Wv).map(t.measure), c = n.map((e => r[i] - e[i])).map((e => -Wv(e))), u = s(c).map((e => e[0])).map(((e, t) => e + l[t]));
          return {
            snaps: c,
            snapsAligned: u
          }
        }(k, E, C, j, z), V = -Xv(A) + Xv(D), {
          snapsContained: F,
          scrollContainLimit: q
        } = function(e, t, r, n) {
          const o = ng(-t + e, 0),
            i = r.map(((e, t) => {
              const {
                min: n,
                max: i
              } = o, a = o.constrain(e), l = !t, c = Zv(r, t);
              return l ? i : c || s(n, a) ? n : s(i, a) ? i : a
            })).map((e => parseFloat(e.toFixed(3)))),
            a = function() {
              const e = i[0],
                t = Xv(i);
              return ng(i.lastIndexOf(e), i.indexOf(t) + 1)
            }();

          function s(e, t) {
            return Uv(e, t) <= 1
          }
          return {
            snapsContained: function() {
              if (t <= e + 2) return [o.max];
              if ("keepSnaps" === n) return i;
              const {
                min: r,
                max: s
              } = a;
              return i.slice(r, s)
            }(),
            scrollContainLimit: a
          }
        }(O, V, I, y), B = N ? F : I, {
          limit: $
        } = function(e, t, r) {
          const n = t[0];
          return {
            limit: ng(r ? n - e : Xv(t), n)
          }
        }(V, B, d), H = og(Yv(B), u, d), W = H.clone(), G = Kv(r), U = function(e, t, r, n) {
          const o = rg(),
            i = 1e3 / 60;
          let a = null,
            s = 0,
            l = 0;

          function c(e) {
            if (!l) return;
            a || (a = e, r(), r());
            const o = e - a;
            for (a = e, s += o; s >= i;) r(), s -= i;
            n(s / i), l && (l = t.requestAnimationFrame(c))
          }

          function u() {
            t.cancelAnimationFrame(l), a = null, s = 0, l = 0
          }
          return {
            init: function() {
              o.add(e, "visibilitychange", (() => {
                e.hidden && (a = null, s = 0)
              }))
            },
            destroy: function() {
              u(), o.clear()
            },
            start: function() {
              l || (l = t.requestAnimationFrame(c))
            },
            stop: u,
            update: r,
            render: n
          }
        }(n, o, (() => (e => {
          let {
            dragHandler: t,
            scrollBody: r,
            scrollBounds: n,
            options: {
              loop: o
            }
          } = e;
          o || n.constrain(t.pointerDown()), r.seek()
        })(se)), (e => ((e, t) => {
          let {
            scrollBody: r,
            translate: n,
            location: o,
            offsetLocation: i,
            previousLocation: a,
            scrollLooper: s,
            slideLooper: l,
            dragHandler: c,
            animation: u,
            eventHandler: d,
            scrollBounds: f,
            options: {
              loop: h
            }
          } = e;
          const p = r.settled(),
            v = !f.shouldConstrain(),
            g = h ? p : p && v,
            m = g && !c.pointerDown();
          m && u.stop();
          const y = o.get() * t + a.get() * (1 - t);
          i.set(y), h && (s.loop(r.direction()), l.loop()), n.to(i.get()), m && d.emit("settle"), g || d.emit("scroll")
        })(se, e))), K = B[H.get()], X = ug(K), Y = ug(K), Z = ug(K), Q = ug(K), J = function(e, t, r, n, o) {
          let i = 0,
            a = 0,
            s = o,
            l = .68,
            c = e.get(),
            u = 0;

          function d(e) {
            return s = e, h
          }

          function f(e) {
            return l = e, h
          }
          const h = {
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
              const t = n.get() - e.get();
              let o = 0;
              return s ? (r.set(e), i += t / s, i *= l, c += i, e.add(i), o = c - u) : (i = 0, r.set(n), e.set(n), o = t), a = Gv(o), u = c, h
            },
            settled: function() {
              return Wv(n.get() - t.get()) < .001
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
          return h
        }(X, Z, Y, Q, f), ee = function(e, t, r, n, o) {
          const {
            reachedAny: i,
            removeOffset: a,
            constrain: s
          } = n;

          function l(e) {
            return e.concat().sort(((e, t) => Wv(e) - Wv(t)))[0]
          }

          function c(t, n) {
            const o = [t, t + r, t - r];
            if (!e) return t;
            if (!n) return l(o);
            const i = o.filter((e => Gv(e) === n));
            return i.length ? l(i) : Xv(o) - r
          }
          const u = {
            byDistance: function(r, n) {
              const l = o.get() + r,
                {
                  index: u,
                  distance: d
                } = function(r) {
                  const n = e ? a(r) : s(r),
                    o = t.map(((e, t) => ({
                      diff: c(e - n, 0),
                      index: t
                    }))).sort(((e, t) => Wv(e.diff) - Wv(t.diff))),
                    {
                      index: i
                    } = o[0];
                  return {
                    index: i,
                    distance: n
                  }
                }(l),
                f = !e && i(l);
              return !n || f ? {
                index: u,
                distance: r
              } : {
                index: u,
                distance: r + c(t[u] - d, 0)
              }
            },
            byIndex: function(e, r) {
              return {
                index: e,
                distance: c(t[e] - o.get(), r)
              }
            },
            shortcut: c
          };
          return u
        }(d, B, V, $, Q), te = function(e, t, r, n, o, i, a) {
          function s(o) {
            const s = o.distance,
              l = o.index !== t.get();
            i.add(s), s && (n.duration() ? e.start() : (e.update(), e.render(1), e.update())), l && (r.set(t.get()), t.set(o.index), a.emit("select"))
          }
          const l = {
            distance: function(e, t) {
              s(o.byDistance(e, t))
            },
            index: function(e, r) {
              const n = t.clone().set(e);
              s(o.byIndex(n.get(), r))
            }
          };
          return l
        }(U, H, W, J, ee, Q, a), re = function(e) {
          const {
            max: t,
            length: r
          } = e;
          return {
            get: function(e) {
              return r ? (e - t) / -r : 0
            }
          }
        }($), ne = rg(), oe = function(e, t, r, n) {
          const o = {};
          let i, a = null,
            s = null,
            l = !1;
          const c = {
            init: function() {
              i = new IntersectionObserver((e => {
                l || (e.forEach((e => {
                  const r = t.indexOf(e.target);
                  o[r] = e
                })), a = null, s = null, r.emit("slidesInView"))
              }), {
                root: e.parentElement,
                threshold: n
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
                return Jv(o).reduce(((t, r) => {
                  const n = parseInt(r),
                    {
                      isIntersecting: i
                    } = o[n];
                  return (e && i || !e && !i) && t.push(n), t
                }), [])
              }(e);
              return e && (a = t), e || (s = t), t
            }
          };
          return c
        }(t, r, a, v), {
          slideRegistry: ie
        } = function(e, t, r, n, o, i) {
          const {
            groupSlides: a
          } = o, {
            min: s,
            max: l
          } = n;
          return {
            slideRegistry: function() {
              const n = a(i),
                o = !e || "keepSnaps" === t;
              return 1 === r.length ? [i] : o ? n : n.slice(s, l).map(((e, t, r) => {
                const n = !t,
                  o = Zv(r, t);
                return n ? Qv(Xv(r[0]) + 1) : o ? Qv(Yv(i) - Xv(r)[0] + 1, Xv(r)[0]) : e
              }))
            }()
          }
        }(N, y, B, q, z, G), ae = function(e, t, r, n, o, i, a, s) {
          const l = {
            passive: !0,
            capture: !0
          };
          let c = 0;

          function u(e) {
            "Tab" === e.code && (c = (new Date).getTime())
          }
          return {
            init: function(d) {
              s && (i.add(document, "keydown", u, !1), t.forEach(((t, u) => {
                i.add(t, "focus", (t => {
                  ($v(s) || s(d, t)) && function(t) {
                    if ((new Date).getTime() - c > 10) return;
                    a.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = r.findIndex((e => e.includes(t)));
                    qv(i) && (o.useDuration(0), n.index(i, 0), a.emit("slideFocus"))
                  }(u)
                }), l)
              })))
            }
          }
        }(e, r, ie, te, J, ne, a, x), se = {
          ownerDocument: n,
          ownerWindow: o,
          eventHandler: a,
          containerRect: C,
          slideRects: j,
          animation: U,
          axis: k,
          dragHandler: ig(k, e, n, o, Q, ag(k, o), X, U, te, J, ee, H, a, P, h, p, m, .68, _),
          eventStore: ne,
          percentOfView: P,
          index: H,
          indexPrevious: W,
          limit: $,
          location: X,
          offsetLocation: Z,
          previousLocation: Y,
          options: i,
          resizeHandler: sg(t, a, o, r, k, b, S),
          scrollBody: J,
          scrollBounds: lg($, Z, Q, J, P),
          scrollLooper: cg(V, $, Z, [X, Z, Y, Q]),
          scrollProgress: re,
          scrollSnapList: B.map(re.get),
          scrollSnaps: B,
          scrollTarget: ee,
          scrollTo: te,
          slideLooper: fg(k, O, V, L, D, A, B, Z, r),
          slideFocus: ae,
          slidesHandler: hg(t, a, w),
          slidesInView: oe,
          slideIndexes: G,
          slideRegistry: ie,
          slidesToScroll: z,
          target: Q,
          translate: dg(k, t)
        };
        return se
      }
      const vg = {
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

      function gg(e) {
        function t(e, t) {
          return eg(e, t || {})
        }
        const r = {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const n = r.breakpoints || {},
              o = Jv(n).filter((t => e.matchMedia(t).matches)).map((e => n[e])).reduce(((e, r) => t(e, r)), {});
            return t(r, o)
          },
          optionsMediaQueries: function(t) {
            return t.map((e => Jv(e.breakpoints || {}))).reduce(((e, t) => e.concat(t)), []).map(e.matchMedia)
          }
        };
        return r
      }

      function mg(e, t, r) {
        const n = e.ownerDocument,
          o = n.defaultView,
          i = gg(o),
          a = function(e) {
            let t = [];
            return {
              init: function(r, n) {
                return t = n.filter((t => {
                  let {
                    options: r
                  } = t;
                  return !1 !== e.optionsAtMedia(r).active
                })), t.forEach((t => t.init(r, e))), n.reduce(((e, t) => Object.assign(e, {
                  [t.name]: t
                })), {})
              },
              destroy: function() {
                t = t.filter((e => e.destroy()))
              }
            }
          }(i),
          s = rg(),
          l = function() {
            let e, t = {};

            function r(e) {
              return t[e] || []
            }
            const n = {
              init: function(t) {
                e = t
              },
              emit: function(t) {
                return r(t).forEach((r => r(e, t))), n
              },
              off: function(e, o) {
                return t[e] = r(e).filter((e => e !== o)), n
              },
              on: function(e, o) {
                return t[e] = r(e).concat([o]), n
              },
              clear: function() {
                t = {}
              }
            };
            return n
          }(),
          {
            mergeOptions: c,
            optionsAtMedia: u,
            optionsMediaQueries: d
          } = i,
          {
            on: f,
            off: h,
            emit: p
          } = l,
          v = k;
        let g, m, y, b, w = !1,
          _ = c(vg, mg.globalOptions),
          x = c(_),
          S = [];

        function C(t) {
          const r = pg(e, y, b, n, o, t, l);
          return t.loop && !r.slideLooper.canLoop() ? C(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function j(t, r) {
          w || (_ = c(_, t), x = u(_), S = r || S, function() {
            const {
              container: t,
              slides: r
            } = x, n = Bv(t) ? e.querySelector(t) : t;
            y = n || e.children[0];
            const o = Bv(r) ? y.querySelectorAll(r) : r;
            b = [].slice.call(o || y.children)
          }(), g = C(x), d([_, ...S.map((e => {
            let {
              options: t
            } = e;
            return t
          }))]).forEach((e => s.add(e, "change", k))), x.active && (g.translate.to(g.location.get()), g.animation.init(), g.slidesInView.init(), g.slideFocus.init(N), g.eventHandler.init(N), g.resizeHandler.init(N), g.slidesHandler.init(N), g.options.loop && g.slideLooper.loop(), y.offsetParent && b.length && g.dragHandler.init(N), m = a.init(N, S)))
        }

        function k(e, t) {
          const r = E();
          O(), j(c({
            startIndex: r
          }, e), t), l.emit("reInit")
        }

        function O() {
          g.dragHandler.destroy(), g.eventStore.clear(), g.translate.clear(), g.slideLooper.clear(), g.resizeHandler.destroy(), g.slidesHandler.destroy(), g.slidesInView.destroy(), g.animation.destroy(), a.destroy(), s.clear()
        }

        function P(e, t, r) {
          x.active && !w && (g.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : x.duration), g.scrollTo.index(e, r || 0))
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
          off: h,
          on: f,
          emit: p,
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
        return j(t, r), setTimeout((() => l.emit("init")), 0), N
      }

      function yg() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        const r = (0, s.useRef)(e),
          n = (0, s.useRef)(t),
          [o, i] = (0, s.useState)(),
          [a, l] = (0, s.useState)(),
          c = (0, s.useCallback)((() => {
            o && o.reInit(r.current, n.current)
          }), [o]);
        return (0, s.useEffect)((() => {
          Vv(r.current, e) || (r.current = e, c())
        }), [e, c]), (0, s.useEffect)((() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = Fv(e),
              n = Fv(t);
            return r.every(((e, t) => Vv(e, n[t])))
          })(n.current, t) || (n.current = t, c())
        }), [t, c]), (0, s.useEffect)((() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && a) {
            mg.globalOptions = yg.globalOptions;
            const e = mg(a, r.current, n.current);
            return i(e), () => e.destroy()
          }
          i(void 0)
        }), [a, i]), [l, o]
      }

      function bg() {
        let e, t = [];
        const r = ["select", "slideFocus"];

        function n() {
          const {
            slideRegistry: r
          } = e.internalEngine(), n = r[e.selectedScrollSnap()];
          return n ? n.map((e => t[e])).reduce(((e, t) => Math.max(e, t)), 0) : null
        }

        function o() {
          null !== n() && (e.containerNode().style.height = `${n()}px`)
        }
        return {
          name: "autoHeight",
          options: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          init: function(n) {
            e = n;
            const {
              options: {
                axis: i
              },
              slideRects: a
            } = e.internalEngine();
            "y" !== i && (t = a.map((e => e.height)), r.forEach((t => e.on(t, o))), o())
          },
          destroy: function() {
            r.forEach((t => e.off(t, o)));
            const t = e.containerNode();
            t.style.height = "", t.getAttribute("style") || t.removeAttribute("style")
          }
        }
      }
      mg.globalOptions = void 0, yg.globalOptions = void 0, bg.globalOptions = void 0;
      const wg = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function _g(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function xg(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function Sg(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function Cg() {
        let e, t, r, n, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = [],
          a = [];
        const s = ["select"],
          l = ["pointerDown", "pointerUp"],
          c = ["slidesInView"],
          u = {
            snapped: [],
            inView: [],
            draggable: [],
            dragging: [],
            loop: []
          };

        function d(e, t) {
          ("pointerDown" === t ? Sg : xg)(r, u.dragging)
        }

        function f() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = arguments.length > 2 ? arguments[2] : void 0;
          const r = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map((e => n[e])),
            o = e.map((e => n[e]));
          return r.forEach((e => xg(e, t))), o.forEach((e => Sg(e, t))), e
        }

        function h() {
          const {
            slideRegistry: e
          } = t.internalEngine(), r = e[t.selectedScrollSnap()];
          i = f(r, i, u.snapped)
        }

        function p() {
          const e = t.slidesInView();
          a = f(e, a, u.inView)
        }
        const v = {
          name: "classNames",
          options: o,
          init: function(i, a) {
            t = i;
            const {
              mergeOptions: f,
              optionsAtMedia: v
            } = a, g = f(wg, Cg.globalOptions), m = f(g, o);
            e = v(m), r = t.rootNode(), n = t.slideNodes();
            const {
              watchDrag: y,
              loop: b
            } = t.internalEngine().options, w = !!y;
            e.loop && b && (u.loop = _g(e.loop), Sg(r, u.loop)), e.draggable && w && (u.draggable = _g(e.draggable), Sg(r, u.draggable)), e.dragging && (u.dragging = _g(e.dragging), l.forEach((e => t.on(e, d)))), e.snapped && (u.snapped = _g(e.snapped), s.forEach((e => t.on(e, h))), h()), e.inView && (u.inView = _g(e.inView), c.forEach((e => t.on(e, p))), p())
          },
          destroy: function() {
            l.forEach((e => t.off(e, d))), s.forEach((e => t.off(e, h))), c.forEach((e => t.off(e, p))), xg(r, u.loop), xg(r, u.draggable), xg(r, u.dragging), f([], i, u.snapped), f([], a, u.inView), Object.keys(u).forEach((e => {
              u[e] = []
            }))
          }
        };
        return v
      }
      Cg.globalOptions = void 0;
      const jg = (0, s.createContext)(null);

      function kg() {
        const e = (0, s.useContext)(jg);
        if (!e) throw Error("useAlertBannerContext can only be used in a <AlertBanner.Root />");
        return e
      }(0, s.forwardRef)((({
        asChild: e,
        children: t,
        testId: r,
        loopPagination: n,
        status: o,
        background: c,
        align: u = "left",
        ...d
      }, f) => {
        const h = (({
            loopPagination: e = !0
          }) => {
            const t = H(),
              r = q(),
              [n, o] = (0, s.useState)([]),
              i = n.length,
              [a, l] = (0, s.useState)(0),
              [c, u] = yg({
                containScroll: !1,
                loop: e,
                watchDrag: t && i > 1
              }, [bg(), Cg()]),
              d = (0, s.useRef)(0),
              f = (0, s.useRef)(!1),
              h = n[a],
              p = (0, s.useCallback)((e => {
                const t = e.selectedScrollSnap();
                e.slideNodes().forEach(((e, r) => {
                  e.style.visibility = r === t ? "visible" : "hidden"
                })), l(t), f.current = !0
              }), [u]),
              v = (0, s.useCallback)((e => {
                d.current = .94 * e.scrollSnapList().length
              }), []),
              g = (0, s.useCallback)(((e, t) => {
                const r = e.internalEngine(),
                  n = e.scrollProgress(),
                  o = e.slidesInView(),
                  i = "scroll" === t;
                e.scrollSnapList().forEach(((t, a) => {
                  let s = t - n;
                  r.slideRegistry[a].forEach((a => {
                    if (i && !o.includes(a)) return;
                    r.options.loop && r.slideLooper.loopPoints.forEach((e => {
                      const r = e.target();
                      if (a === e.index && 0 !== r) {
                        const e = Math.sign(r); - 1 === e && (s = t - (1 + n)), 1 === e && (s = t + (1 - n))
                      }
                    }));
                    const l = (c = 1 - Math.abs(s * d.current), Math.min(Math.max(c, 0), 1)).toString();
                    var c;
                    e.slideNodes()[a].style.opacity = l
                  }))
                }))
              }), []);
            return (0, s.useEffect)((() => {
              u && (v(u), g(u), u.on("reInit", v).on("reInit", g).on("scroll", g).on("slideFocus", g))
            }), [u, g]), (0, s.useEffect)((() => {
              u && (p(u), u.on("select", p).on("reInit", p))
            }), [u, p]), {
              setAlerts: o,
              alerts: n,
              numAlerts: i,
              emblaRef: c,
              prevAlert: () => u?.scrollPrev(r),
              nextAlert: () => u?.scrollNext(r),
              currentAlert: h,
              currentAlertIndex: a,
              setCurrentAlertIndex: l,
              isInitialized: f.current,
              loopPagination: e,
              canScrollNext: () => u?.canScrollNext() || !1,
              canScrollPrev: () => u?.canScrollPrev() || !1
            }
          })({
            loopPagination: n
          }),
          {
            currentAlert: p,
            isInitialized: v,
            setAlerts: g,
            numAlerts: m
          } = h;
        (0, s.useEffect)((() => {
          o && c && g([{
            status: o,
            background: c,
            align: u
          }])
        }), []);
        const y = m > 1 ? {
            role: "region",
            "aria-roledescription": "carousel",
            "aria-label": "alerts"
          } : null,
          b = (0, a.v6)(d, {
            className: Av(p)
          }, y),
          w = e ? l.Slot : "div";
        return (0, i.jsx)(jg.Provider, {
          value: h,
          children: (0, i.jsx)(w, {
            ref: f,
            "data-testid": r,
            "data-initialized": v,
            ...b,
            children: t
          })
        })
      }));
      const Og = {
        danger: "CircleX",
        information: "Info",
        success: "CircleCheck",
        warning: "TriangleAlert"
      };

      function Pg(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Eg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Ng(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Eg(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Pg(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Eg(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function Tg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, s.forwardRef)((({
        icon: e,
        ...t
      }, r) => {
        const {
          currentAlert: n
        } = kg();
        if (!e && !n || !n?.status) return null;
        const o = e || Og[n.status],
          s = z[o],
          l = (0, a.v6)(t, {
            className: "foundry_hcgxh_qmpv6yn"
          });
        return (0, i.jsx)(s, {
          title: "",
          ref: r,
          size: "LG",
          "data-icon": !0,
          ...l
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        ...r
      }, n) => {
        const o = e ? l.Slot : "div",
          s = (0, a.v6)(r, {
            className: "foundry_hcgxh_qmpv6yo"
          });
        return (0, i.jsx)(M, {
          size: "SM",
          asChild: !0,
          children: (0, i.jsx)(o, {
            ref: n,
            "data-testid": t,
            ...s
          })
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        align: r = "left",
        status: n,
        background: o,
        ...s
      }, c) => {
        const u = e ? l.Slot : "div",
          d = (0, a.v6)(s, {
            className: "foundry_hcgxh_qmpv6yk"
          });
        return (0, i.jsx)(u, {
          ref: c,
          "data-testid": t,
          ...d
        })
      })), (0, s.forwardRef)((({
        testId: e,
        children: t,
        ...r
      }, n) => {
        const {
          setAlerts: o,
          emblaRef: l
        } = kg(), c = (0, a.v6)(r, {
          className: "foundry_hcgxh_qmpv6yl"
        }), u = F(l, n), d = s.Children.map(t, (e => {
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
          ref: u,
          "data-testid": e,
          ...c,
          children: (0, i.jsx)("div", {
            className: "foundry_hcgxh_qmpv6ym",
            children: t
          })
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const c = (0, s.useRef)(null),
          u = F(c, o),
          d = e ? l.Slot : "a",
          {
            linkProps: f,
            isPressed: h
          } = yv(n, c),
          p = (0, a.v6)(n, {
            className: "foundry_hcgxh_qmpv6yp foundry_hcgxh_1d5mo5m0"
          });
        return (0, i.jsx)(M, {
          asChild: !0,
          size: "SM",
          appearance: "hyperlink",
          children: (0, i.jsx)(d, {
            "data-pressed": h,
            "data-testid": r,
            ref: u,
            ...f,
            ...p,
            children: t
          })
        })
      })), (0, s.forwardRef)((({
        testId: e,
        ...t
      }, r) => {
        const n = (0, a.v6)(t, {
          className: "foundry_hcgxh_qmpv6yq"
        });
        return (0, i.jsx)(Oc, {
          ref: r,
          label: "close alert",
          "data-close-btn": !0,
          "data-testid": e,
          appearance: "ghost",
          icon: "X",
          size: "XS",
          ...n
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        testId: t,
        children: r,
        ...n
      }, o) => {
        const s = e ? l.Slot : "div",
          c = (0, a.v6)(n, {
            className: "foundry_hcgxh_qmpv6ys"
          });
        return (0, i.jsx)(s, {
          ref: o,
          "data-testid": t,
          "data-pagination": !0,
          role: "group",
          "aria-label": "alert navigation",
          ...c,
          children: r
        })
      })), (0, s.forwardRef)((({
        testId: e,
        ...t
      }, r) => {
        const {
          nextAlert: n,
          canScrollNext: o
        } = kg(), s = (0, a.v6)(t, {
          className: zv
        });
        return (0, i.jsx)(Oc, {
          ref: r,
          label: "next alert",
          size: "XS",
          icon: "ChevronRight",
          appearance: "ghost",
          "data-testid": e,
          onPress: n,
          isDisabled: !o(),
          ...s
        })
      })), (0, s.forwardRef)((({
        testId: e,
        ...t
      }, r) => {
        const {
          prevAlert: n,
          canScrollPrev: o
        } = kg(), s = (0, a.v6)(t, {
          className: zv
        });
        return (0, i.jsx)(Oc, {
          ref: r,
          label: "previous alert",
          size: "XS",
          icon: "ChevronLeft",
          appearance: "ghost",
          "data-testid": e,
          onPress: n,
          isDisabled: !o(),
          ...s
        })
      })), (0, s.forwardRef)((({
        testId: e,
        ...t
      }, r) => {
        const {
          currentAlertIndex: n,
          numAlerts: o
        } = kg(), s = (0, a.v6)(t, {
          className: "foundry_hcgxh_qmpv6yr"
        });
        return (0, i.jsx)(M, {
          size: "SM",
          appearance: "bold",
          asChild: !0,
          children: (0, i.jsxs)("div", {
            ref: r,
            "data-testid": e,
            "aria-hidden": !0,
            ...s,
            children: [n + 1, "/", o]
          })
        })
      }));
      var Lg = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        Dg = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Ng(Ng({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Lg(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return Tg(e.variantClassNames, (e => Tg(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Mg = Dg({
          defaultClassName: "foundry_hcgxh_oahh5811",
          variantClassNames: {
            background: {
              static: "foundry_hcgxh_oahh5812",
              "two-tone": "foundry_hcgxh_oahh5813",
              none: "foundry_hcgxh_oahh5814"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Rg = Dg({
          defaultClassName: "foundry_hcgxh_oahh583",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_oahh584",
              LG: "foundry_hcgxh_oahh585"
            },
            hasBorder: {
              true: "foundry_hcgxh_oahh586",
              false: "foundry_hcgxh_oahh587"
            },
            background: {
              static: "foundry_hcgxh_oahh588",
              "two-tone": "foundry_hcgxh_oahh589",
              none: "foundry_hcgxh_oahh58a"
            },
            color: {
              monochrome: "foundry_hcgxh_oahh58b",
              blue: "foundry_hcgxh_oahh58c",
              green: "foundry_hcgxh_oahh58d",
              grey: "foundry_hcgxh_oahh58e",
              red: "foundry_hcgxh_oahh58f",
              seafoam: "foundry_hcgxh_oahh58g",
              yellow: "foundry_hcgxh_oahh58h"
            },
            isDisabled: {
              true: "foundry_hcgxh_oahh58i",
              false: "foundry_hcgxh_oahh58j"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              background: "static",
              color: "monochrome"
            }, "foundry_hcgxh_oahh58k"],
            [{
              background: "static",
              color: "blue"
            }, "foundry_hcgxh_oahh58l"],
            [{
              background: "static",
              color: "green"
            }, "foundry_hcgxh_oahh58m"],
            [{
              background: "static",
              color: "grey"
            }, "foundry_hcgxh_oahh58n"],
            [{
              background: "static",
              color: "red"
            }, "foundry_hcgxh_oahh58o"],
            [{
              background: "static",
              color: "seafoam"
            }, "foundry_hcgxh_oahh58p"],
            [{
              background: "static",
              color: "yellow"
            }, "foundry_hcgxh_oahh58q"],
            [{
              background: "two-tone",
              color: "monochrome"
            }, "foundry_hcgxh_oahh58r"],
            [{
              background: "two-tone",
              color: "blue"
            }, "foundry_hcgxh_oahh58s"],
            [{
              background: "two-tone",
              color: "green"
            }, "foundry_hcgxh_oahh58t"],
            [{
              background: "two-tone",
              color: "grey"
            }, "foundry_hcgxh_oahh58u"],
            [{
              background: "two-tone",
              color: "red"
            }, "foundry_hcgxh_oahh58v"],
            [{
              background: "two-tone",
              color: "seafoam"
            }, "foundry_hcgxh_oahh58w"],
            [{
              background: "two-tone",
              color: "yellow"
            }, "foundry_hcgxh_oahh58x"],
            [{
              hasBorder: !1,
              background: "none",
              isDisabled: !1
            }, "foundry_hcgxh_oahh58y"]
          ]
        });
      const zg = (0, s.createContext)(null);

      function Ag() {
        const e = (0, s.useContext)(zg);
        if (!e) throw Error("useTagContext can only be used in a <Tag.Root />");
        return e
      }

      function Ig(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function Vg(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, n)
        }
        return r
      }

      function Fg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? Vg(Object(r), !0).forEach((function(t) {
            var n, o, i;
            n = e, o = t, i = r[t], (o = Ig(o)) in n ? Object.defineProperty(n, o, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : n[o] = i
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vg(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function qg(e, t) {
        var r = {};
        for (var n in e) r[n] = t(e[n], n);
        return r
      }(0, s.forwardRef)((({
        asChild: e,
        children: t,
        testId: r,
        size: n,
        background: o,
        color: s,
        hasBorder: c,
        isDisabled: u,
        ...d
      }, f) => {
        const h = {
            size: n,
            background: o,
            color: s,
            hasBorder: c,
            isDisabled: u
          },
          p = (0, a.v6)(d, {
            className: Rg(h)
          }),
          v = e ? l.Slot : "div";
        return (0, i.jsx)(zg.Provider, {
          value: h,
          children: (0, i.jsx)(v, {
            ref: f,
            "data-testid": r,
            "aria-disabled": u,
            ...p,
            children: t
          })
        })
      })), (0, s.forwardRef)((({
        asChild: e,
        children: t,
        testId: r,
        ...n
      }, o) => {
        const {
          size: s
        } = Ag(), c = e ? l.Slot : "div", u = (0, a.v6)(n, {
          className: "foundry_hcgxh_oahh58z"
        });
        return (0, i.jsx)(M, {
          size: "MD" === s ? "SM" : "LG",
          asChild: !0,
          children: (0, i.jsx)(c, {
            ref: o,
            "data-testid": r,
            ...u,
            children: t
          })
        })
      })), (0, s.forwardRef)((({
        icon: e,
        ...t
      }, r) => {
        const n = z[e],
          o = (0, a.v6)(t, {
            className: "foundry_hcgxh_oahh5810"
          });
        return (0, i.jsx)(n, {
          ref: r,
          size: "MD",
          ...o
        })
      })), (0, s.forwardRef)((({
        testId: e,
        label: t = "close tag",
        ...r
      }, n) => {
        const {
          background: o,
          isDisabled: s
        } = Ag(), l = (0, a.v6)(r, {
          className: Mg({
            background: o
          })
        });
        return (0, i.jsx)(Oc, {
          ref: n,
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
      var Bg = (e, t, r) => {
          for (var n of Object.keys(e)) {
            var o;
            if (e[n] !== (null !== (o = t[n]) && void 0 !== o ? o : r[n])) return !1
          }
          return !0
        },
        $g = e => {
          var t = t => {
            var r = e.defaultClassName,
              n = Fg(Fg({}, e.defaultVariants), t);
            for (var o in n) {
              var i, a = null !== (i = n[o]) && void 0 !== i ? i : e.defaultVariants[o];
              if (null != a) {
                var s = a;
                "boolean" == typeof s && (s = !0 === s ? "true" : "false");
                var l = e.variantClassNames[o][s];
                l && (r += " " + l)
              }
            }
            for (var [c, u] of e.compoundVariants) Bg(c, n, e.defaultVariants) && (r += " " + u);
            return r
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return qg(e.variantClassNames, (e => qg(e, (e => e.split(" ")[0]))))
            }
          }, t
        },
        Hg = $g({
          defaultClassName: "foundry_hcgxh_m1icrx6 foundry_hcgxh_1d5mo5m0",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_m1icrx7 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd11",
              LG: "foundry_hcgxh_m1icrx8 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdw foundry_hcgxh_tdsdcd11"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Wg = $g({
          defaultClassName: "foundry_hcgxh_m1icrx3",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdx foundry_hcgxh_tdsdcd11",
              LG: "foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcdw foundry_hcgxh_tdsdcd11"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        Gg = $g({
          defaultClassName: "foundry_hcgxh_m1icrx0",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_m1icrx1",
              LG: "foundry_hcgxh_m1icrx2"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });

      function Ug() {
        const e = (0, s.useContext)(Kg);
        if (!e) throw Error("useBreadcrumbsContext can only be used in a <Breadcrumbs.Root />");
        return e
      }
      const Kg = (0, s.createContext)(null);
      (0, s.forwardRef)((({
        children: e,
        testId: t,
        asChild: r,
        size: n = "MD",
        ...o
      }, s) => {
        const c = (0, a.v6)({
            className: Gg({
              size: n
            })
          }, o),
          u = r ? l.Slot : "ol";
        return (0, i.jsx)(Kg.Provider, {
          value: {
            size: n
          },
          children: (0, i.jsx)(u, {
            ref: s,
            "data-testid": t,
            ...c,
            children: e
          })
        })
      })), (0, s.forwardRef)((({
        isCurrent: e,
        children: t,
        asChild: r,
        testId: n,
        ...o
      }, c) => {
        const u = (0, s.useRef)(null),
          {
            size: d
          } = Ug(),
          {
            itemProps: f
          } = function(e, t) {
            let {
              isCurrent: r,
              isDisabled: n,
              "aria-current": o,
              elementType: i = "a",
              ...a
            } = e, {
              linkProps: s
            } = yv({
              isDisabled: n || r,
              elementType: i,
              ...a
            }, t), l = {};
            return /^h[1-6]$/.test(i) || (l = s), r && (l["aria-current"] = o || "page", l.tabIndex = e.autoFocus ? -1 : void 0), {
              itemProps: {
                "aria-disabled": n,
                ...l
              }
            }
          }({
            isCurrent: e,
            children: t
          }, u),
          h = r ? l.Slot : "a",
          p = (0, a.v6)({
            className: (0, O.$)(Hg({
              size: d
            }), e && "foundry_hcgxh_m1icrx9"),
            "data-testid": n
          }, f, o);
        return (0, i.jsx)("li", {
          className: Wg({
            size: d
          }),
          ref: c,
          children: (0, i.jsx)(h, {
            ref: u,
            ...p,
            children: t
          })
        })
      })), (0, s.forwardRef)((({
        icon: e,
        ...t
      }, r) => {
        const n = z[e];
        return (0, i.jsx)(n, {
          ref: r,
          size: "LG",
          ...t
        })
      })), (0, s.forwardRef)((({
        children: e,
        testId: t,
        defaultOpen: r = !1,
        label: n = "Show hidden breadcrumbs",
        ...o
      }, l) => {
        const [c, u] = (0, s.useState)(r), {
          size: d
        } = Ug(), f = (0, a.v6)({
          className: Wg({
            size: d
          }),
          "data-testid": t
        }, o);
        return (0, i.jsx)("li", {
          ref: l,
          ...f,
          children: (0, i.jsxs)(Ad, {
            open: c,
            onOpenChange: () => u(!c),
            children: [(0, i.jsx)(Id, {
              className: "foundry_hcgxh_m1icrxa foundry_hcgxh_1d5mo5m0 foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd11",
              "aria-label": n,
              children: "..."
            }), (0, i.jsx)(qd, {
              children: (0, i.jsx)(Bd, {
                position: "popper",
                sideOffset: 8,
                align: "start",
                className: "foundry_hcgxh_m1icrxb",
                children: (0, i.jsx)($d, {
                  className: "foundry_hcgxh_m1icrxc",
                  children: e
                })
              })
            })]
          })
        })
      })), (0, s.forwardRef)((({
        children: e,
        asChild: t,
        testId: r,
        ...n
      }, o) => {
        const s = t ? l.Slot : Hd,
          c = (0, a.v6)({
            className: "foundry_hcgxh_m1icrxd foundry_hcgxh_tdsdcdu foundry_hcgxh_tdsdcd0 foundry_hcgxh_tdsdcd10",
            "data-testid": r
          }, n);
        return (0, i.jsx)(s, {
          ref: o,
          ...c,
          children: e
        })
      }))
    },
    87144: e => {
      var t, r, n = e.exports = {};

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
        } catch (r) {
          try {
            return t.call(null, e, 0)
          } catch (r) {
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
          r = "function" == typeof clearTimeout ? clearTimeout : i
        } catch (e) {
          r = i
        }
      }();
      var s, l = [],
        c = !1,
        u = -1;

      function d() {
        c && s && (c = !1, s.length ? l = s.concat(l) : u = -1, l.length && f())
      }

      function f() {
        if (!c) {
          var e = a(d);
          c = !0;
          for (var t = l.length; t;) {
            for (s = l, l = []; ++u < t;) s && s[u].run();
            u = -1, t = l.length
          }
          s = null, c = !1,
            function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
              try {
                return r(e)
              } catch (t) {
                try {
                  return r.call(null, e)
                } catch (t) {
                  return r.call(this, e)
                }
              }
            }(e)
        }
      }

      function h(e, t) {
        this.fun = e, this.array = t
      }

      function p() {}
      n.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        l.push(new h(e, t)), 1 !== l.length || c || a(f)
      }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function(e) {
        return []
      }, n.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, n.cwd = function() {
        return "/"
      }, n.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, n.umask = function() {
        return 0
      }
    }
  }
]);