try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "718094ab-02a0-4503-bfee-93e4a521d13d", e._sentryDebugIdIdentifier = "sentry-dbid-718094ab-02a0-4503-bfee-93e4a521d13d")
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
  [2295, 5423, 5686], {
    17532: (e, n, t) => {
      t.d(n, {
        v6: () => f
      });
      const r = e => e - .02;
      r(768), r(1440), r(1920), r(2560);
      var o = t(4572);
      const l = new Map;

      function a(e, n) {
        if (e === n) return e;
        const t = l.get(e);
        if (t) return t.forEach(e => e(n)), n;
        const r = l.get(n);
        return r ? (r.forEach(n => n(e)), e) : n
      }

      function i(...e) {
        return (...n) => {
          for (const t of e) "function" == typeof t && t(...n)
        }
      }

      function f(...e) {
        const n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          const r = e[t];
          for (const e in r) {
            const t = n[e],
              l = r[e];
            "function" == typeof t && "function" == typeof l && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = i(t, l) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof l ? "id" === e && t && l ? n.id = a(t, l) : n[e] = void 0 !== l ? l : t : n[e] = (0, o.clsx)(t, l)
          }
        }
        return n
      }
      var s;
      t(98312), t(41972), t(56265), t(31454), t(10533), t(10613), t(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(s || (s = {})), Symbol.toStringTag
    },
    42295: (e, n, t) => {
      e.exports = t(69245)
    },
    69245: (e, n, t) => {
      var r = t(62229),
        o = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, n, t) {
        var r, l = {},
          s = null,
          d = null;
        for (r in void 0 !== t && (s = "" + t), void 0 !== n.key && (s = "" + n.key), void 0 !== n.ref && (d = n.ref), n) a.call(n, r) && !f.hasOwnProperty(r) && (l[r] = n[r]);
        if (e && e.defaultProps)
          for (r in n = e.defaultProps) void 0 === l[r] && (l[r] = n[r]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: d,
          props: l,
          _owner: i.current
        }
      }
      n.Fragment = l, n.jsx = s, n.jsxs = s
    },
    97469: (e, n, t) => {
      var r;
      t.d(n, {
        DX: () => c,
        TL: () => d
      });
      var o = t(62229),
        l = t(95362),
        a = t(42295),
        i = Symbol.for("react.lazy"),
        f = (r || (r = t.t(o, 2)))[" use ".trim().toString()];

      function s(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === i && "_payload" in e && "object" == typeof(n = e._payload) && null !== n && "then" in n;
        var n
      }

      function d(e) {
        const n = u(e),
          t = o.forwardRef((e, t) => {
            let {
              children: r,
              ...l
            } = e;
            s(r) && "function" == typeof f && (r = f(r._payload));
            const i = o.Children.toArray(r),
              d = i.find(y);
            if (d) {
              const e = d.props.children,
                r = i.map(n => n === d ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : n);
              return (0, a.jsx)(n, {
                ...l,
                ref: t,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, a.jsx)(n, {
              ...l,
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
          if (s(t) && "function" == typeof f && (t = f(t._payload)), o.isValidElement(t)) {
            const e = function(e) {
                let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  t = n && "isReactWarning" in n && n.isReactWarning;
                return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
              }(t),
              a = function(e, n) {
                const t = {
                  ...n
                };
                for (const r in n) {
                  const o = e[r],
                    l = n[r];
                  /^on[A-Z]/.test(r) ? o && l ? t[r] = (...e) => {
                    const n = l(...e);
                    return o(...e), n
                  } : o && (t[r] = o) : "style" === r ? t[r] = {
                    ...o,
                    ...l
                  } : "className" === r && (t[r] = [o, l].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(r, t.props);
            return t.type !== o.Fragment && (a.ref = n ? (0, l.t)(n, e) : e), o.cloneElement(t, a)
          }
          return o.Children.count(t) > 1 ? o.Children.only(null) : null
        });
        return n.displayName = `${e}.SlotClone`, n
      }
      var p = Symbol("radix.slottable");

      function y(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
    }
  }
]);