! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3ae393b2-f982-4e17-bcf4-e9b573ff60e7", e._sentryDebugIdIdentifier = "sentry-dbid-3ae393b2-f982-4e17-bcf4-e9b573ff60e7")
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
  [6210], {
    73964: (e, n, t) => {
      t.d(n, {
        s: () => a,
        t: () => l
      });
      var r = t(62229);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function l(...e) {
        return n => {
          let t = !1;
          const r = e.map((e => {
            const r = o(e, n);
            return t || "function" != typeof r || (t = !0), r
          }));
          if (t) return () => {
            for (let n = 0; n < r.length; n++) {
              const t = r[n];
              "function" == typeof t ? t() : o(e[n], null)
            }
          }
        }
      }

      function a(...e) {
        return r.useCallback(l(...e), e)
      }
    },
    13829: (e, n, t) => {
      t.r(n), t.d(n, {
        Root: () => d,
        Slot: () => d,
        Slottable: () => s,
        createSlot: () => a,
        createSlottable: () => f
      });
      var r = t(62229),
        o = t(73964),
        l = t(73855);

      function a(e) {
        const n = i(e),
          t = r.forwardRef(((e, t) => {
            const {
              children: o,
              ...a
            } = e, d = r.Children.toArray(o), i = d.find(u);
            if (i) {
              const e = i.props.children,
                o = d.map((n => n === i ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n));
              return (0, l.jsx)(n, {
                ...a,
                ref: t,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, l.jsx)(n, {
              ...a,
              ref: t,
              children: o
            })
          }));
        return t.displayName = `${e}.Slot`, t
      }
      var d = a("Slot");

      function i(e) {
        const n = r.forwardRef(((e, n) => {
          const {
            children: t,
            ...l
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
                  const o = e[r],
                    l = n[r];
                  /^on[A-Z]/.test(r) ? o && l ? t[r] = (...e) => {
                    l(...e), o(...e)
                  } : o && (t[r] = o) : "style" === r ? t[r] = {
                    ...o,
                    ...l
                  } : "className" === r && (t[r] = [o, l].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(l, t.props);
            return t.type !== r.Fragment && (a.ref = n ? (0, o.t)(n, e) : e), r.cloneElement(t, a)
          }
          return r.Children.count(t) > 1 ? r.Children.only(null) : null
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
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === c
      }
    }
  }
]);