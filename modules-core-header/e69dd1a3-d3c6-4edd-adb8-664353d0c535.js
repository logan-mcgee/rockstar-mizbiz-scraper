! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e69dd1a3-d3c6-4edd-adb8-664353d0c535", e._sentryDebugIdIdentifier = "sentry-dbid-e69dd1a3-d3c6-4edd-adb8-664353d0c535")
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
  [8757, 1138], {
    8757: (e, n, t) => {
      t.r(n), t.d(n, {
        Root: () => f,
        Slot: () => r,
        Slottable: () => c
      });
      var l = t(3709),
        d = t(62229);

      function o(...e) {
        return n => e.forEach((e => function(e, n) {
          "function" == typeof e ? e(n) : null != e && (e.current = n)
        }(e, n)))
      }
      const r = (0, d.forwardRef)(((e, n) => {
        const {
          children: t,
          ...o
        } = e, r = d.Children.toArray(t), c = r.find(s);
        if (c) {
          const e = c.props.children,
            t = r.map((n => n === c ? d.Children.count(e) > 1 ? d.Children.only(null) : (0, d.isValidElement)(e) ? e.props.children : null : n));
          return (0, d.createElement)(a, (0, l.A)({}, o, {
            ref: n
          }), (0, d.isValidElement)(e) ? (0, d.cloneElement)(e, void 0, t) : null)
        }
        return (0, d.createElement)(a, (0, l.A)({}, o, {
          ref: n
        }), t)
      }));
      r.displayName = "Slot";
      const a = (0, d.forwardRef)(((e, n) => {
        const {
          children: t,
          ...l
        } = e;
        return (0, d.isValidElement)(t) ? (0, d.cloneElement)(t, {
          ...i(l, t.props),
          ref: n ? o(n, t.ref) : t.ref
        }) : d.Children.count(t) > 1 ? d.Children.only(null) : null
      }));
      a.displayName = "SlotClone";
      const c = ({
        children: e
      }) => (0, d.createElement)(d.Fragment, null, e);

      function s(e) {
        return (0, d.isValidElement)(e) && e.type === c
      }

      function i(e, n) {
        const t = {
          ...n
        };
        for (const l in n) {
          const d = e[l],
            o = n[l];
          /^on[A-Z]/.test(l) ? d && o ? t[l] = (...e) => {
            o(...e), d(...e)
          } : d && (t[l] = d) : "style" === l ? t[l] = {
            ...d,
            ...o
          } : "className" === l && (t[l] = [d, o].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...t
        }
      }
      const f = r
    },
    3709: (e, n, t) => {
      function l() {
        return l = Object.assign ? Object.assign.bind() : function(e) {
          for (var n = 1; n < arguments.length; n++) {
            var t = arguments[n];
            for (var l in t) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l])
          }
          return e
        }, l.apply(this, arguments)
      }
      t.d(n, {
        A: () => l
      })
    }
  }
]);