try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "35741a9e-9d67-4189-9b4c-55dfa85eb35b", e._sentryDebugIdIdentifier = "sentry-dbid-35741a9e-9d67-4189-9b4c-55dfa85eb35b")
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
  [8, 1695, 2295], {
    6521: (e, n, t) => {},
    11394: (e, n, t) => {
      t.d(n, {
        v6: () => l.v
      }), t(6521);
      const r = e => e - .02;
      r(768), r(1440), r(1920), r(2560);
      var o, l = t(43607);
      t(98312), t(41972), t(56265), t(31454), t(10533), t(10613), t(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(o || (o = {})), Symbol.toStringTag
    },
    42295: (e, n, t) => {
      e.exports = t(69245)
    },
    43607: (e, n, t) => {
      t.d(n, {
        v: () => i
      });
      var r = t(4572);
      const o = new Map;

      function l(e, n) {
        if (e === n) return e;
        const t = o.get(e);
        if (t) return t.forEach(e => e(n)), n;
        const r = o.get(n);
        return r ? (r.forEach(n => n(e)), e) : n
      }

      function a(...e) {
        return (...n) => {
          for (const t of e) "function" == typeof t && t(...n)
        }
      }

      function i(...e) {
        const n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          const o = e[t];
          for (const e in o) {
            const t = n[e],
              i = o[e];
            "function" == typeof t && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = a(t, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof i ? "id" === e && t && i ? n.id = l(t, i) : n[e] = void 0 !== i ? i : t : n[e] = (0, r.clsx)(t, i)
          }
        }
        return n
      }
    },
    57201: (e, n, t) => {
      var r;
      t.d(n, {
        DX: () => c,
        TL: () => d,
        xV: () => g
      });
      var o = t(62229),
        l = t(95362),
        a = t(42295),
        i = Symbol.for("react.lazy"),
        s = (r || (r = t.t(o, 2)))[" use ".trim().toString()];

      function f(e) {
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
            f(r) && "function" == typeof s && (r = s(r._payload));
            const i = o.Children.toArray(r),
              d = i.find(b);
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
          if (f(t) && "function" == typeof s && (t = s(t._payload)), o.isValidElement(t)) {
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
        const n = ({
          children: e
        }) => (0, a.jsx)(a.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = p, n
      }
      var g = y("Slottable");

      function b(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
    },
    69245: (e, n, t) => {
      var r = t(62229),
        o = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, n, t) {
        var r, l = {},
          f = null,
          d = null;
        for (r in void 0 !== t && (f = "" + t), void 0 !== n.key && (f = "" + n.key), void 0 !== n.ref && (d = n.ref), n) a.call(n, r) && !s.hasOwnProperty(r) && (l[r] = n[r]);
        if (e && e.defaultProps)
          for (r in n = e.defaultProps) void 0 === l[r] && (l[r] = n[r]);
        return {
          $$typeof: o,
          type: e,
          key: f,
          ref: d,
          props: l,
          _owner: i.current
        }
      }
      n.Fragment = l, n.jsx = f, n.jsxs = f
    }
  }
]);