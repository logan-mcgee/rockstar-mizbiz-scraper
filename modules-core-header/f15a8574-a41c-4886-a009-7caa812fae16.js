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
      var a = r(62229),
        t = r(21423),
        l = r(73855),
        o = a.forwardRef(((e, n) => {
          const {
            children: r,
            ...t
          } = e, o = a.Children.toArray(r), s = o.find(i);
          if (s) {
            const e = s.props.children,
              r = o.map((n => n === s ? a.Children.count(e) > 1 ? a.Children.only(null) : a.isValidElement(e) ? e.props.children : null : n));
            return (0, l.jsx)(d, {
              ...t,
              ref: n,
              children: a.isValidElement(e) ? a.cloneElement(e, void 0, r) : null
            })
          }
          return (0, l.jsx)(d, {
            ...t,
            ref: n,
            children: r
          })
        }));
      o.displayName = "Slot";
      var d = a.forwardRef(((e, n) => {
        const {
          children: r,
          ...l
        } = e;
        if (a.isValidElement(r)) {
          const e = function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              r = n && "isReactWarning" in n && n.isReactWarning;
            return r ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
          }(r);
          return a.cloneElement(r, {
            ...f(l, r.props),
            ref: n ? (0, t.t)(n, e) : e
          })
        }
        return a.Children.count(r) > 1 ? a.Children.only(null) : null
      }));
      d.displayName = "SlotClone";
      var s = ({
        children: e
      }) => (0, l.jsx)(l.Fragment, {
        children: e
      });

      function i(e) {
        return a.isValidElement(e) && e.type === s
      }

      function f(e, n) {
        const r = {
          ...n
        };
        for (const a in n) {
          const t = e[a],
            l = n[a];
          /^on[A-Z]/.test(a) ? t && l ? r[a] = (...e) => {
            l(...e), t(...e)
          } : t && (r[a] = t) : "style" === a ? r[a] = {
            ...t,
            ...l
          } : "className" === a && (r[a] = [t, l].filter(Boolean).join(" "))
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