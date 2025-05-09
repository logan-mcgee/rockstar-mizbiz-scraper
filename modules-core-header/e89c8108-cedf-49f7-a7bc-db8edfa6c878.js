! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e89c8108-cedf-49f7-a7bc-db8edfa6c878", e._sentryDebugIdIdentifier = "sentry-dbid-e89c8108-cedf-49f7-a7bc-db8edfa6c878")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [4689, 3855, 6236, 9093, 1474, 7070], {
    32469: (e, n, r) => {
      var t = r(62229),
        o = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        d = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, n, r) {
        var t, l = {},
          c = null,
          f = null;
        for (t in void 0 !== r && (c = "" + r), void 0 !== n.key && (c = "" + n.key), void 0 !== n.ref && (f = n.ref), n) a.call(n, t) && !i.hasOwnProperty(t) && (l[t] = n[t]);
        if (e && e.defaultProps)
          for (t in n = e.defaultProps) void 0 === l[t] && (l[t] = n[t]);
        return {
          $$typeof: o,
          type: e,
          key: c,
          ref: f,
          props: l,
          _owner: d.current
        }
      }
      n.Fragment = l, n.jsx = c, n.jsxs = c
    },
    73855: (e, n, r) => {
      e.exports = r(32469)
    },
    65160: (e, n, r) => {
      r.d(n, {
        s: () => a,
        t: () => l
      });
      var t = r(62229);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function l(...e) {
        return n => {
          let r = !1;
          const t = e.map((e => {
            const t = o(e, n);
            return r || "function" != typeof t || (r = !0), t
          }));
          if (r) return () => {
            for (let n = 0; n < t.length; n++) {
              const r = t[n];
              "function" == typeof r ? r() : o(e[n], null)
            }
          }
        }
      }

      function a(...e) {
        return t.useCallback(l(...e), e)
      }
    },
    64689: (e, n, r) => {
      r.r(n), r.d(n, {
        Root: () => d,
        Slot: () => d,
        Slottable: () => s,
        createSlot: () => a,
        createSlottable: () => f
      });
      var t = r(62229),
        o = r(65160),
        l = r(73855);

      function a(e) {
        const n = i(e),
          r = t.forwardRef(((e, r) => {
            const {
              children: o,
              ...a
            } = e, d = t.Children.toArray(o), i = d.find(u);
            if (i) {
              const e = i.props.children,
                o = d.map((n => n === i ? t.Children.count(e) > 1 ? t.Children.only(null) : t.isValidElement(e) ? e.props.children : null : n));
              return (0, l.jsx)(n, {
                ...a,
                ref: r,
                children: t.isValidElement(e) ? t.cloneElement(e, void 0, o) : null
              })
            }
            return (0, l.jsx)(n, {
              ...a,
              ref: r,
              children: o
            })
          }));
        return r.displayName = `${e}.Slot`, r
      }
      var d = a("Slot");

      function i(e) {
        const n = t.forwardRef(((e, n) => {
          const {
            children: r,
            ...l
          } = e;
          if (t.isValidElement(r)) {
            const e = function(e) {
                let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  r = n && "isReactWarning" in n && n.isReactWarning;
                return r ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
              }(r),
              a = function(e, n) {
                const r = {
                  ...n
                };
                for (const t in n) {
                  const o = e[t],
                    l = n[t];
                  /^on[A-Z]/.test(t) ? o && l ? r[t] = (...e) => {
                    l(...e), o(...e)
                  } : o && (r[t] = o) : "style" === t ? r[t] = {
                    ...o,
                    ...l
                  } : "className" === t && (r[t] = [o, l].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...r
                }
              }(l, r.props);
            return r.type !== t.Fragment && (a.ref = n ? (0, o.t)(n, e) : e), t.cloneElement(r, a)
          }
          return t.Children.count(r) > 1 ? t.Children.only(null) : null
        }));
        return n.displayName = `${e}.SlotClone`, n
      }
      var c = Symbol("radix.slottable");

      function f(e) {
        const n = ({
          children: e
        }) => (0, l.jsx)(l.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = c, n
      }
      var s = f("Slottable");

      function u(e) {
        return t.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === c
      }
    }
  }
]);