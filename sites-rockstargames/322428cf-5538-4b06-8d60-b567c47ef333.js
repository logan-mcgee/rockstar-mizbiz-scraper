try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "322428cf-5538-4b06-8d60-b567c47ef333", e._sentryDebugIdIdentifier = "sentry-dbid-322428cf-5538-4b06-8d60-b567c47ef333")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [2295, 4618, 6916], {
    4534: (e, t, n) => {
      "use strict";
      var r;
      n.d(t, {
        DX: () => c,
        TL: () => l
      });
      var o = n(71127),
        i = n(95362),
        a = n(42295),
        f = Symbol.for("react.lazy"),
        s = (r || (r = n.t(o, 2)))[" use ".trim().toString()];

      function u(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === f && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }

      function l(e) {
        const t = d(e),
          n = o.forwardRef((e, n) => {
            let {
              children: r,
              ...i
            } = e;
            u(r) && "function" == typeof s && (r = s(r._payload));
            const f = o.Children.toArray(r),
              l = f.find(y);
            if (l) {
              const e = l.props.children,
                r = f.map(t => t === l ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : t);
              return (0, a.jsx)(t, {
                ...i,
                ref: n,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, a.jsx)(t, {
              ...i,
              ref: n,
              children: r
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var c = l("Slot");

      function d(e) {
        const t = o.forwardRef((e, t) => {
          let {
            children: n,
            ...r
          } = e;
          if (u(n) && "function" == typeof s && (n = s(n._payload)), o.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              a = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    i = t[r];
                  /^on[A-Z]/.test(r) ? o && i ? n[r] = (...e) => {
                    const t = i(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(r, n.props);
            return n.type !== o.Fragment && (a.ref = t ? (0, i.t)(t, e) : e), o.cloneElement(n, a)
          }
          return o.Children.count(n) > 1 ? o.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var p = Symbol("radix.slottable");

      function y(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
    },
    9738: (e, t, n) => {
      var r = n(56130),
        o = n(28593),
        i = n(22909),
        a = Math.max,
        f = Math.min;
      e.exports = function(e, t, n) {
        var s, u, l, c, d, p, y = 0,
          v = !1,
          g = !1,
          b = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function m(t) {
          var n = s,
            r = u;
          return s = u = void 0, y = t, c = e.apply(r, n)
        }

        function h(e) {
          var n = e - p;
          return void 0 === p || n >= t || n < 0 || g && e - y >= l
        }

        function _() {
          var e = o();
          if (h(e)) return w(e);
          d = setTimeout(_, function(e) {
            var n = t - (e - p);
            return g ? f(n, l - (e - y)) : n
          }(e))
        }

        function w(e) {
          return d = void 0, b && s ? m(e) : (s = u = void 0, c)
        }

        function x() {
          var e = o(),
            n = h(e);
          if (s = arguments, u = this, p = e, n) {
            if (void 0 === d) return function(e) {
              return y = e, d = setTimeout(_, t), v ? m(e) : c
            }(p);
            if (g) return clearTimeout(d), d = setTimeout(_, t), m(p)
          }
          return void 0 === d && (d = setTimeout(_, t)), c
        }
        return t = i(t) || 0, r(n) && (v = !!n.leading, l = (g = "maxWait" in n) ? a(i(n.maxWait) || 0, t) : l, b = "trailing" in n ? !!n.trailing : b), x.cancel = function() {
          void 0 !== d && clearTimeout(d), y = 0, s = p = u = d = void 0
        }, x.flush = function() {
          return void 0 === d ? c : w(o())
        }, x
      }
    },
    10533: (e, t, n) => {
      var r = n(86601);
      e.exports = function(e, t, n, o) {
        return o = "function" == typeof o ? o : void 0, null == e ? e : r(e, t, n, o)
      }
    },
    10613: (e, t, n) => {
      var r = n(23117);
      e.exports = function(e, t, n) {
        var o = null == e ? void 0 : r(e, t);
        return void 0 === o ? n : o
      }
    },
    22909: (e, t, n) => {
      var r = n(87625),
        o = n(56130),
        i = n(25733),
        a = /^[-+]0x[0-9a-f]+$/i,
        f = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        u = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = f.test(e);
        return n || s.test(e) ? u(e.slice(2), n ? 2 : 8) : a.test(e) ? NaN : +e
      }
    },
    24244: (e, t, n) => {
      "use strict";
      n.d(t, {
        v: () => f
      });
      var r = n(1556);
      const o = new Map;

      function i(e, t) {
        if (e === t) return e;
        const n = o.get(e);
        if (n) return n.forEach(e => e(t)), t;
        const r = o.get(t);
        return r ? (r.forEach(t => t(e)), e) : t
      }

      function a(...e) {
        return (...t) => {
          for (const n of e) "function" == typeof n && n(...t)
        }
      }

      function f(...e) {
        const t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          const o = e[n];
          for (const e in o) {
            const n = t[e],
              f = o[e];
            "function" == typeof n && "function" == typeof f && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = a(n, f) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof f ? "id" === e && n && f ? t.id = i(n, f) : t[e] = void 0 !== f ? f : n : t[e] = (0, r.clsx)(n, f)
          }
        }
        return t
      }
    },
    28593: (e, t, n) => {
      var r = n(15036);
      e.exports = function() {
        return r.Date.now()
      }
    },
    31454: (e, t, n) => {
      var r = n(49192);
      e.exports = function(e) {
        return r(e, 5)
      }
    },
    42295: (e, t, n) => {
      "use strict";
      e.exports = n(69245)
    },
    43778: (e, t, n) => {},
    69245: (e, t, n) => {
      "use strict";
      var r = n(71127),
        o = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        f = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, n) {
        var r, i = {},
          u = null,
          l = null;
        for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) a.call(t, r) && !s.hasOwnProperty(r) && (i[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: u,
          ref: l,
          props: i,
          _owner: f.current
        }
      }
      t.Fragment = i, t.jsx = u, t.jsxs = u
    },
    70754: (e, t, n) => {
      "use strict";
      n.d(t, {
        bL: () => u,
        s6: () => s
      });
      var r = n(71127),
        o = (n(18429), n(4534)),
        i = n(42295),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, o.TL)(`Primitive.${t}`),
            a = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...a
              } = e, f = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(f, {
                ...a,
                ref: r
              })
            });
          return a.displayName = `Primitive.${t}`, {
            ...e,
            [t]: a
          }
        }, {}),
        f = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        s = r.forwardRef((e, t) => (0, i.jsx)(a.span, {
          ...e,
          ref: t,
          style: {
            ...f,
            ...e.style
          }
        }));
      s.displayName = "VisuallyHidden";
      var u = s
    },
    75888: e => {
      var t = Math.ceil,
        n = Math.max;
      e.exports = function(e, r, o, i) {
        for (var a = -1, f = n(t((r - e) / (o || 1)), 0), s = Array(f); f--;) s[i ? f : ++a] = e, e += o;
        return s
      }
    },
    85531: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)););
        return n
      }
    },
    86601: (e, t, n) => {
      var r = n(56312),
        o = n(78328),
        i = n(21574),
        a = n(56130),
        f = n(81966);
      e.exports = function(e, t, n, s) {
        if (!a(e)) return e;
        for (var u = -1, l = (t = o(t, e)).length, c = l - 1, d = e; null != d && ++u < l;) {
          var p = f(t[u]),
            y = n;
          if ("__proto__" === p || "constructor" === p || "prototype" === p) return e;
          if (u != c) {
            var v = d[p];
            void 0 === (y = s ? s(v, p, d) : void 0) && (y = a(v) ? v : i(t[u + 1]) ? [] : {})
          }
          r(d, p, y), d = d[p]
        }
        return e
      }
    },
    87625: (e, t, n) => {
      var r = n(85531),
        o = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, r(e) + 1).replace(o, "") : e
      }
    },
    90744: (e, t, n) => {
      "use strict";
      n.d(t, {
        VW: () => s,
        v6: () => o.v,
        cJ: () => f
      }), n(43778);
      const r = e => e - .02;
      r(768), r(1440), r(1920), r(2560);
      var o = n(24244);
      n(98312);
      var i, a = n(41972);

      function f(e, ...t) {
        return a(e, ...t)
      }
      n(56265), n(31454), n(10533), n(10613), n(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(i || (i = {})), Symbol.toStringTag;
      const s = (...e) => e.filter(e => e).join(" ")
    },
    95187: (e, t, n) => {
      var r = n(22909),
        o = 1 / 0;
      e.exports = function(e) {
        return e ? (e = r(e)) === o || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e == e ? e : 0 : 0 === e ? e : 0
      }
    },
    95362: (e, t, n) => {
      "use strict";
      n.d(t, {
        s: () => a,
        t: () => i
      });
      var r = n(71127);

      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function i(...e) {
        return t => {
          let n = !1;
          const r = e.map(e => {
            const r = o(e, t);
            return n || "function" != typeof r || (n = !0), r
          });
          if (n) return () => {
            for (let t = 0; t < r.length; t++) {
              const n = r[t];
              "function" == typeof n ? n() : o(e[t], null)
            }
          }
        }
      }

      function a(...e) {
        return r.useCallback(i(...e), e)
      }
    },
    98312: (e, t, n) => {
      var r = n(99335)();
      e.exports = r
    },
    99335: (e, t, n) => {
      var r = n(75888),
        o = n(4661),
        i = n(95187);
      e.exports = function(e) {
        return function(t, n, a) {
          return a && "number" != typeof a && o(t, n, a) && (n = a = void 0), t = i(t), void 0 === n ? (n = t, t = 0) : n = i(n), a = void 0 === a ? t < n ? 1 : -1 : i(a), r(t, n, a, e)
        }
      }
    }
  }
]);