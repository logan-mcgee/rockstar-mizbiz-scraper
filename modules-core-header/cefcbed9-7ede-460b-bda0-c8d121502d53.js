! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "cefcbed9-7ede-460b-bda0-c8d121502d53", e._sentryDebugIdIdentifier = "sentry-dbid-cefcbed9-7ede-460b-bda0-c8d121502d53")
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
  [6843, 9224], {
    26843: (e, n, t) => {
      t.r(n), t.d(n, {
        Root: () => i,
        Slot: () => d,
        Slottable: () => s
      });
      var l = t(3709),
        o = t(62229);

      function r(...e) {
        return n => e.forEach((e => function(e, n) {
          "function" == typeof e ? e(n) : null != e && (e.current = n)
        }(e, n)))
      }
      const d = (0, o.forwardRef)(((e, n) => {
        const {
          children: t,
          ...r
        } = e, d = o.Children.toArray(t), s = d.find(c);
        if (s) {
          const e = s.props.children,
            t = d.map((n => n === s ? o.Children.count(e) > 1 ? o.Children.only(null) : (0, o.isValidElement)(e) ? e.props.children : null : n));
          return (0, o.createElement)(a, (0, l.A)({}, r, {
            ref: n
          }), (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, void 0, t) : null)
        }
        return (0, o.createElement)(a, (0, l.A)({}, r, {
          ref: n
        }), t)
      }));
      d.displayName = "Slot";
      const a = (0, o.forwardRef)(((e, n) => {
        const {
          children: t,
          ...l
        } = e;
        return (0, o.isValidElement)(t) ? (0, o.cloneElement)(t, {
          ...f(l, t.props),
          ref: n ? r(n, t.ref) : t.ref
        }) : o.Children.count(t) > 1 ? o.Children.only(null) : null
      }));
      a.displayName = "SlotClone";
      const s = ({
        children: e
      }) => (0, o.createElement)(o.Fragment, null, e);

      function c(e) {
        return (0, o.isValidElement)(e) && e.type === s
      }

      function f(e, n) {
        const t = {
          ...n
        };
        for (const l in n) {
          const o = e[l],
            r = n[l];
          /^on[A-Z]/.test(l) ? o && r ? t[l] = (...e) => {
            r(...e), o(...e)
          } : o && (t[l] = o) : "style" === l ? t[l] = {
            ...o,
            ...r
          } : "className" === l && (t[l] = [o, r].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...t
        }
      }
      const i = d
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