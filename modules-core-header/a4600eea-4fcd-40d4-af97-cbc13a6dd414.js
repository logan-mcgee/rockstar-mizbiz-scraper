! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a4600eea-4fcd-40d4-af97-cbc13a6dd414", e._sentryDebugIdIdentifier = "sentry-dbid-a4600eea-4fcd-40d4-af97-cbc13a6dd414")
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
  [8405], {
    50786: (e, n, r) => {
      r.r(n), r.d(n, {
        Root: () => c,
        Slot: () => a,
        Slottable: () => i
      });
      var t = r(62229);

      function l(...e) {
        return n => e.forEach((e => function(e, n) {
          "function" == typeof e ? e(n) : null != e && (e.current = n)
        }(e, n)))
      }
      var o = r(91029),
        a = t.forwardRef(((e, n) => {
          const {
            children: r,
            ...l
          } = e, a = t.Children.toArray(r), i = a.find(s);
          if (i) {
            const e = i.props.children,
              r = a.map((n => n === i ? t.Children.count(e) > 1 ? t.Children.only(null) : t.isValidElement(e) ? e.props.children : null : n));
            return (0, o.jsx)(d, {
              ...l,
              ref: n,
              children: t.isValidElement(e) ? t.cloneElement(e, void 0, r) : null
            })
          }
          return (0, o.jsx)(d, {
            ...l,
            ref: n,
            children: r
          })
        }));
      a.displayName = "Slot";
      var d = t.forwardRef(((e, n) => {
        const {
          children: r,
          ...o
        } = e;
        if (t.isValidElement(r)) {
          const e = function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              r = n && "isReactWarning" in n && n.isReactWarning;
            return r ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
          }(r);
          return t.cloneElement(r, {
            ...f(o, r.props),
            ref: n ? l(n, e) : e
          })
        }
        return t.Children.count(r) > 1 ? t.Children.only(null) : null
      }));
      d.displayName = "SlotClone";
      var i = ({
        children: e
      }) => (0, o.jsx)(o.Fragment, {
        children: e
      });

      function s(e) {
        return t.isValidElement(e) && e.type === i
      }

      function f(e, n) {
        const r = {
          ...n
        };
        for (const t in n) {
          const l = e[t],
            o = n[t];
          /^on[A-Z]/.test(t) ? l && o ? r[t] = (...e) => {
            o(...e), l(...e)
          } : l && (r[t] = l) : "style" === t ? r[t] = {
            ...l,
            ...o
          } : "className" === t && (r[t] = [l, o].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...r
        }
      }
      var c = a
    }
  }
]);