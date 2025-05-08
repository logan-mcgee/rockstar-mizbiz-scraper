! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d563247a-bb10-4200-9f49-29eaca0dfe76", e._sentryDebugIdIdentifier = "sentry-dbid-d563247a-bb10-4200-9f49-29eaca0dfe76")
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
  [4500], {
    22119: (e, n, l) => {
      l.r(n), l.d(n, {
        Root: () => i,
        Slot: () => r,
        Slottable: () => s
      });
      var o = l(3709),
        t = l(62229);

      function d(...e) {
        return n => e.forEach((e => function(e, n) {
          "function" == typeof e ? e(n) : null != e && (e.current = n)
        }(e, n)))
      }
      const r = (0, t.forwardRef)(((e, n) => {
        const {
          children: l,
          ...d
        } = e, r = t.Children.toArray(l), s = r.find(c);
        if (s) {
          const e = s.props.children,
            l = r.map((n => n === s ? t.Children.count(e) > 1 ? t.Children.only(null) : (0, t.isValidElement)(e) ? e.props.children : null : n));
          return (0, t.createElement)(a, (0, o.A)({}, d, {
            ref: n
          }), (0, t.isValidElement)(e) ? (0, t.cloneElement)(e, void 0, l) : null)
        }
        return (0, t.createElement)(a, (0, o.A)({}, d, {
          ref: n
        }), l)
      }));
      r.displayName = "Slot";
      const a = (0, t.forwardRef)(((e, n) => {
        const {
          children: l,
          ...o
        } = e;
        return (0, t.isValidElement)(l) ? (0, t.cloneElement)(l, {
          ...f(o, l.props),
          ref: n ? d(n, l.ref) : l.ref
        }) : t.Children.count(l) > 1 ? t.Children.only(null) : null
      }));
      a.displayName = "SlotClone";
      const s = ({
        children: e
      }) => (0, t.createElement)(t.Fragment, null, e);

      function c(e) {
        return (0, t.isValidElement)(e) && e.type === s
      }

      function f(e, n) {
        const l = {
          ...n
        };
        for (const o in n) {
          const t = e[o],
            d = n[o];
          /^on[A-Z]/.test(o) ? t && d ? l[o] = (...e) => {
            d(...e), t(...e)
          } : t && (l[o] = t) : "style" === o ? l[o] = {
            ...t,
            ...d
          } : "className" === o && (l[o] = [t, d].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...l
        }
      }
      const i = r
    }
  }
]);