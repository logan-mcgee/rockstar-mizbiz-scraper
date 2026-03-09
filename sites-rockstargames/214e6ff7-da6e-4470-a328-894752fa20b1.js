try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "214e6ff7-da6e-4470-a328-894752fa20b1", e._sentryDebugIdIdentifier = "sentry-dbid-214e6ff7-da6e-4470-a328-894752fa20b1")
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
  [1027, 2295, 6423], {
    33834: (e, n, t) => {
      t.d(n, {
        v: () => a
      });
      var r = t(4572);
      const o = new Map;

      function f(e, n) {
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
            "function" == typeof t && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = l(t, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof a ? "id" === e && t && a ? n.id = f(t, a) : n[e] = void 0 !== a ? a : t : n[e] = (0, r.clsx)(t, a)
          }
        }
        return n
      }
    },
    42295: (e, n, t) => {
      e.exports = t(69245)
    },
    53985: (e, n, t) => {
      t.d(n, {
        v6: () => f.v
      }), t(77680);
      const r = e => e - .02;
      r(768), r(1440), r(1920), r(2560);
      var o, f = t(33834);
      t(98312), t(41972), t(56265), t(31454), t(10533), t(10613), t(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(o || (o = {})), Symbol.toStringTag
    },
    69245: (e, n, t) => {
      var r = t(62229),
        o = Symbol.for("react.element"),
        f = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, n, t) {
        var r, f = {},
          s = null,
          d = null;
        for (r in void 0 !== t && (s = "" + t), void 0 !== n.key && (s = "" + n.key), void 0 !== n.ref && (d = n.ref), n) l.call(n, r) && !i.hasOwnProperty(r) && (f[r] = n[r]);
        if (e && e.defaultProps)
          for (r in n = e.defaultProps) void 0 === f[r] && (f[r] = n[r]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: d,
          props: f,
          _owner: a.current
        }
      }
      n.Fragment = f, n.jsx = s, n.jsxs = s
    },
    72056: (e, n, t) => {
      var r;
      t.d(n, {
        DX: () => c,
        TL: () => d
      });
      var o = t(62229),
        f = t(95362),
        l = t(42295),
        a = Symbol.for("react.lazy"),
        i = (r || (r = t.t(o, 2)))[" use ".trim().toString()];

      function s(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === a && "_payload" in e && "object" == typeof(n = e._payload) && null !== n && "then" in n;
        var n
      }

      function d(e) {
        const n = u(e),
          t = o.forwardRef((e, t) => {
            let {
              children: r,
              ...f
            } = e;
            s(r) && "function" == typeof i && (r = i(r._payload));
            const a = o.Children.toArray(r),
              d = a.find(y);
            if (d) {
              const e = d.props.children,
                r = a.map(n => n === d ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : n);
              return (0, l.jsx)(n, {
                ...f,
                ref: t,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, l.jsx)(n, {
              ...f,
              ref: t,
              children: r
            })
          });
        return t.displayName = `${e}.Slot`, t
      }
      var c = d("Slot");

      function u(e) {
        const n = o.forwardRef((e, n) => {
          let {
            children: t,
            ...r
          } = e;
          if (s(t) && "function" == typeof i && (t = i(t._payload)), o.isValidElement(t)) {
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
                    f = n[r];
                  /^on[A-Z]/.test(r) ? o && f ? t[r] = (...e) => {
                    const n = f(...e);
                    return o(...e), n
                  } : o && (t[r] = o) : "style" === r ? t[r] = {
                    ...o,
                    ...f
                  } : "className" === r && (t[r] = [o, f].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(r, t.props);
            return t.type !== o.Fragment && (l.ref = n ? (0, f.t)(n, e) : e), o.cloneElement(t, l)
          }
          return o.Children.count(t) > 1 ? o.Children.only(null) : null
        });
        return n.displayName = `${e}.SlotClone`, n
      }
      var p = Symbol("radix.slottable");

      function y(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
    },
    77680: (e, n, t) => {
      t.d(n, {
        X: () => r
      });
      const r = "undefined" == typeof window
    }
  }
]);