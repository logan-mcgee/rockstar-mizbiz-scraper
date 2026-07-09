try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "72edaba0-39f0-4bdb-8e5f-0262a0e7c32e", e._sentryDebugIdIdentifier = "sentry-dbid-72edaba0-39f0-4bdb-8e5f-0262a0e7c32e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2174, 5838, 8957, 9793], {
    94931(e, n, t) {
      var r = t(93082),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, n, t) {
        var r, a = {},
          s = null,
          d = null;
        for (r in void 0 !== t && (s = "" + t), void 0 !== n.key && (s = "" + n.key), void 0 !== n.ref && (d = n.ref), n) l.call(n, r) && !f.hasOwnProperty(r) && (a[r] = n[r]);
        if (e && e.defaultProps)
          for (r in n = e.defaultProps) void 0 === a[r] && (a[r] = n[r]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: d,
          props: a,
          _owner: i.current
        }
      }
      n.Fragment = a, n.jsx = s, n.jsxs = s
    },
    39793(e, n, t) {
      e.exports = t(94931)
    },
    50446(e, n, t) {
      t.d(n, {
        s: () => l,
        t: () => a
      });
      var r = t(93082);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function a(...e) {
        return n => {
          let t = !1;
          const r = e.map(e => {
            const r = o(e, n);
            return t || "function" != typeof r || (t = !0), r
          });
          if (t) return () => {
            for (let n = 0; n < r.length; n++) {
              const t = r[n];
              "function" == typeof t ? t() : o(e[n], null)
            }
          }
        }
      }

      function l(...e) {
        return r.useCallback(a(...e), e)
      }
    },
    38957(e, n, t) {
      var r;
      t.d(n, {
        DX: () => u,
        TL: () => d,
        xV: () => b
      });
      var o = t(93082),
        a = t(50446),
        l = t(39793),
        i = Symbol.for("react.lazy"),
        f = (r || (r = t.t(o, 2)))[" use ".trim().toString()];

      function s(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === i && "_payload" in e && "object" == typeof(n = e._payload) && null !== n && "then" in n;
        var n
      }

      function d(e) {
        const n = c(e),
          t = o.forwardRef((e, t) => {
            let {
              children: r,
              ...a
            } = e;
            s(r) && "function" == typeof f && (r = f(r._payload));
            const i = o.Children.toArray(r),
              d = i.find(_);
            if (d) {
              const e = d.props.children,
                r = i.map(n => n === d ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : n);
              return (0, l.jsx)(n, {
                ...a,
                ref: t,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, l.jsx)(n, {
              ...a,
              ref: t,
              children: r
            })
          });
        return t.displayName = `${e}.Slot`, t
      }
      var u = d("Slot");

      function c(e) {
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
              l = function(e, n) {
                const t = {
                  ...n
                };
                for (const r in n) {
                  const o = e[r],
                    a = n[r];
                  /^on[A-Z]/.test(r) ? o && a ? t[r] = (...e) => {
                    const n = a(...e);
                    return o(...e), n
                  } : o && (t[r] = o) : "style" === r ? t[r] = {
                    ...o,
                    ...a
                  } : "className" === r && (t[r] = [o, a].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(r, t.props);
            return t.type !== o.Fragment && (l.ref = n ? (0, a.t)(n, e) : e), o.cloneElement(t, l)
          }
          return o.Children.count(t) > 1 ? o.Children.only(null) : null
        });
        return n.displayName = `${e}.SlotClone`, n
      }
      var p = Symbol("radix.slottable");

      function y(e) {
        const n = ({
          children: e
        }) => (0, l.jsx)(l.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = p, n
      }
      var b = y("Slottable");

      function _(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
    }
  }
]);