! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9a0df72e-9904-471f-a929-fd9036bfc479", e._sentryDebugIdIdentifier = "sentry-dbid-9a0df72e-9904-471f-a929-fd9036bfc479")
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
  [7070], {
    64689: (e, n, t) => {
      t.r(n), t.d(n, {
        Root: () => d,
        Slot: () => d,
        Slottable: () => c,
        createSlot: () => a,
        createSlottable: () => f
      });
      var r = t(62229),
        l = t(65160),
        o = t(73855);

      function a(e) {
        const n = i(e),
          t = r.forwardRef(((e, t) => {
            const {
              children: l,
              ...a
            } = e, d = r.Children.toArray(l), i = d.find(u);
            if (i) {
              const e = i.props.children,
                l = d.map((n => n === i ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n));
              return (0, o.jsx)(n, {
                ...a,
                ref: t,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, l) : null
              })
            }
            return (0, o.jsx)(n, {
              ...a,
              ref: t,
              children: l
            })
          }));
        return t.displayName = `${e}.Slot`, t
      }
      var d = a("Slot");

      function i(e) {
        const n = r.forwardRef(((e, n) => {
          const {
            children: t,
            ...o
          } = e;
          if (r.isValidElement(t)) {
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
                  const l = e[r],
                    o = n[r];
                  /^on[A-Z]/.test(r) ? l && o ? t[r] = (...e) => {
                    o(...e), l(...e)
                  } : l && (t[r] = l) : "style" === r ? t[r] = {
                    ...l,
                    ...o
                  } : "className" === r && (t[r] = [l, o].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(o, t.props);
            return t.type !== r.Fragment && (a.ref = n ? (0, l.t)(n, e) : e), r.cloneElement(t, a)
          }
          return r.Children.count(t) > 1 ? r.Children.only(null) : null
        }));
        return n.displayName = `${e}.SlotClone`, n
      }
      var s = Symbol("radix.slottable");

      function f(e) {
        const n = ({
          children: e
        }) => (0, o.jsx)(o.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = s, n
      }
      var c = f("Slottable");

      function u(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === s
      }
    }
  }
]);