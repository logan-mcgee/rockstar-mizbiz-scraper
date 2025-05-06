! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f15a8574-a41c-4886-a009-7caa812fae16", e._sentryDebugIdIdentifier = "sentry-dbid-f15a8574-a41c-4886-a009-7caa812fae16")
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
  [2533], {
    12533: (e, n, r) => {
      r.r(n), r.d(n, {
        Root: () => c,
        Slot: () => o,
        Slottable: () => s
      });
      var t = r(62229),
        l = r(21423),
        a = r(73855),
        o = t.forwardRef(((e, n) => {
          const {
            children: r,
            ...l
          } = e, o = t.Children.toArray(r), s = o.find(i);
          if (s) {
            const e = s.props.children,
              r = o.map((n => n === s ? t.Children.count(e) > 1 ? t.Children.only(null) : t.isValidElement(e) ? e.props.children : null : n));
            return (0, a.jsx)(d, {
              ...l,
              ref: n,
              children: t.isValidElement(e) ? t.cloneElement(e, void 0, r) : null
            })
          }
          return (0, a.jsx)(d, {
            ...l,
            ref: n,
            children: r
          })
        }));
      o.displayName = "Slot";
      var d = t.forwardRef(((e, n) => {
        const {
          children: r,
          ...a
        } = e;
        if (t.isValidElement(r)) {
          const e = function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              r = n && "isReactWarning" in n && n.isReactWarning;
            return r ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
          }(r);
          return t.cloneElement(r, {
            ...f(a, r.props),
            ref: n ? (0, l.t)(n, e) : e
          })
        }
        return t.Children.count(r) > 1 ? t.Children.only(null) : null
      }));
      d.displayName = "SlotClone";
      var s = ({
        children: e
      }) => (0, a.jsx)(a.Fragment, {
        children: e
      });

      function i(e) {
        return t.isValidElement(e) && e.type === s
      }

      function f(e, n) {
        const r = {
          ...n
        };
        for (const t in n) {
          const l = e[t],
            a = n[t];
          /^on[A-Z]/.test(t) ? l && a ? r[t] = (...e) => {
            a(...e), l(...e)
          } : l && (r[t] = l) : "style" === t ? r[t] = {
            ...l,
            ...a
          } : "className" === t && (r[t] = [l, a].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...r
        }
      }
      var c = o
    }
  }
]);