! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c49ac4fd-44ad-4a8c-9e1b-34081ddbc87a", e._sentryDebugIdIdentifier = "sentry-dbid-c49ac4fd-44ad-4a8c-9e1b-34081ddbc87a")
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
  [4144], {
    14144: (e, n, r) => {
      r.r(n), r.d(n, {
        Root: () => f,
        Slot: () => o,
        Slottable: () => s
      });
      var t = r(62229),
        l = r(21423),
        d = r(73855),
        o = t.forwardRef(((e, n) => {
          const {
            children: r,
            ...l
          } = e, o = t.Children.toArray(r), s = o.find(i);
          if (s) {
            const e = s.props.children,
              r = o.map((n => n === s ? t.Children.count(e) > 1 ? t.Children.only(null) : t.isValidElement(e) ? e.props.children : null : n));
            return (0, d.jsx)(a, {
              ...l,
              ref: n,
              children: t.isValidElement(e) ? t.cloneElement(e, void 0, r) : null
            })
          }
          return (0, d.jsx)(a, {
            ...l,
            ref: n,
            children: r
          })
        }));
      o.displayName = "Slot";
      var a = t.forwardRef(((e, n) => {
        const {
          children: r,
          ...d
        } = e;
        if (t.isValidElement(r)) {
          const e = function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              r = n && "isReactWarning" in n && n.isReactWarning;
            return r ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
          }(r);
          return t.cloneElement(r, {
            ...c(d, r.props),
            ref: n ? (0, l.t)(n, e) : e
          })
        }
        return t.Children.count(r) > 1 ? t.Children.only(null) : null
      }));
      a.displayName = "SlotClone";
      var s = ({
        children: e
      }) => (0, d.jsx)(d.Fragment, {
        children: e
      });

      function i(e) {
        return t.isValidElement(e) && e.type === s
      }

      function c(e, n) {
        const r = {
          ...n
        };
        for (const t in n) {
          const l = e[t],
            d = n[t];
          /^on[A-Z]/.test(t) ? l && d ? r[t] = (...e) => {
            d(...e), l(...e)
          } : l && (r[t] = l) : "style" === t ? r[t] = {
            ...l,
            ...d
          } : "className" === t && (r[t] = [l, d].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...r
        }
      }
      var f = o
    }
  }
]);