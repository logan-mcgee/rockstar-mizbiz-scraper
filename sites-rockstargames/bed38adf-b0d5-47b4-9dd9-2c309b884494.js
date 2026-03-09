try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "bed38adf-b0d5-47b4-9dd9-2c309b884494", e._sentryDebugIdIdentifier = "sentry-dbid-bed38adf-b0d5-47b4-9dd9-2c309b884494")
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
  [287, 2295, 4858], {
    38476: (e, n, t) => {
      t.d(n, {
        v: () => a
      });
      var r = t(4572);
      const o = new Map;

      function i(e, n) {
        if (e === n) return e;
        const t = o.get(e);
        if (t) return t.forEach(e => e(n)), n;
        const r = o.get(n);
        return r ? (r.forEach(n => n(e)), e) : n
      }

      function l(...e) {
        return (...n) => {
          for (const t of e) "function" == typeof t && t(...n)
        }
      }

      function a(...e) {
        const n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          const o = e[t];
          for (const e in o) {
            const t = n[e],
              a = o[e];
            "function" == typeof t && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = l(t, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof a ? "id" === e && t && a ? n.id = i(t, a) : n[e] = void 0 !== a ? a : t : n[e] = (0, r.clsx)(t, a)
          }
        }
        return n
      }
    },
    42295: (e, n, t) => {
      e.exports = t(69245)
    },
    42940: (e, n, t) => {
      t.d(n, {
        bL: () => b,
        s6: () => g
      });
      var r = t(62229),
        o = t.t(r, 2),
        i = (t(18429), t(95362)),
        l = t(42295),
        a = Symbol.for("react.lazy"),
        d = o[" use ".trim().toString()];

      function s(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === a && "_payload" in e && "object" == typeof(n = e._payload) && null !== n && "then" in n;
        var n
      }

      function f(e) {
        const n = r.forwardRef((e, n) => {
          let {
            children: t,
            ...o
          } = e;
          if (s(t) && "function" == typeof d && (t = d(t._payload)), r.isValidElement(t)) {
            const e = function(e) {
                let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  t = n && "isReactWarning" in n && n.isReactWarning;
                return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
              }(t),
              l = function(e, n) {
                const t = {
                  ...n
                };
                for (const r in n) {
                  const o = e[r],
                    i = n[r];
                  /^on[A-Z]/.test(r) ? o && i ? t[r] = (...e) => {
                    const n = i(...e);
                    return o(...e), n
                  } : o && (t[r] = o) : "style" === r ? t[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (t[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(o, t.props);
            return t.type !== r.Fragment && (l.ref = n ? (0, i.t)(n, e) : e), r.cloneElement(t, l)
          }
          return r.Children.count(t) > 1 ? r.Children.only(null) : null
        });
        return n.displayName = `${e}.SlotClone`, n
      }
      var c = Symbol("radix.slottable");

      function u(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === c
      }
      var p = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = function(e) {
              const n = f(e),
                t = r.forwardRef((e, t) => {
                  let {
                    children: o,
                    ...i
                  } = e;
                  s(o) && "function" == typeof d && (o = d(o._payload));
                  const a = r.Children.toArray(o),
                    f = a.find(u);
                  if (f) {
                    const e = f.props.children,
                      o = a.map(n => n === f ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n);
                    return (0, l.jsx)(n, {
                      ...i,
                      ref: t,
                      children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
                    })
                  }
                  return (0, l.jsx)(n, {
                    ...i,
                    ref: t,
                    children: o
                  })
                });
              return t.displayName = `${e}.Slot`, t
            }(`Primitive.${n}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, a = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(a, {
                ...i,
                ref: r
              })
            });
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }, {}),
        y = Object.freeze({
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
        g = r.forwardRef((e, n) => (0, l.jsx)(p.span, {
          ...e,
          ref: n,
          style: {
            ...y,
            ...e.style
          }
        }));
      g.displayName = "VisuallyHidden";
      var b = g
    },
    68138: (e, n, t) => {
      t.d(n, {
        X: () => r
      });
      const r = "undefined" == typeof window
    },
    69245: (e, n, t) => {
      var r = t(62229),
        o = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, n, t) {
        var r, i = {},
          s = null,
          f = null;
        for (r in void 0 !== t && (s = "" + t), void 0 !== n.key && (s = "" + n.key), void 0 !== n.ref && (f = n.ref), n) l.call(n, r) && !d.hasOwnProperty(r) && (i[r] = n[r]);
        if (e && e.defaultProps)
          for (r in n = e.defaultProps) void 0 === i[r] && (i[r] = n[r]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: f,
          props: i,
          _owner: a.current
        }
      }
      n.Fragment = i, n.jsx = s, n.jsxs = s
    },
    82543: (e, n, t) => {
      t.d(n, {
        v6: () => i.v
      }), t(68138);
      const r = e => e - .02;
      r(768), r(1440), r(1920), r(2560);
      var o, i = t(38476);
      t(98312), t(41972), t(56265), t(31454), t(10533), t(10613), t(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(o || (o = {})), Symbol.toStringTag
    }
  }
]);