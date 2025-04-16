! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c6518659-6353-4b34-94f9-eabe1f1fd03c", e._sentryDebugIdIdentifier = "sentry-dbid-c6518659-6353-4b34-94f9-eabe1f1fd03c")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [7647], {
    17341: (e, n, r) => {
      var t = r(54357);
      e.exports = function(e, n, r) {
        var o = null == e ? void 0 : t(e, n);
        return void 0 === o ? r : o
      }
    },
    19869: (e, n, r) => {},
    11735: (e, n, r) => {
      "use strict";
      r.d(n, {
        DX: () => l,
        xV: () => i
      });
      var t = r(62229);

      function o(...e) {
        return n => e.forEach((e => function(e, n) {
          "function" == typeof e ? e(n) : null != e && (e.current = n)
        }(e, n)))
      }
      var a = r(73855),
        l = t.forwardRef(((e, n) => {
          const {
            children: r,
            ...o
          } = e, l = t.Children.toArray(r), i = l.find(d);
          if (i) {
            const e = i.props.children,
              r = l.map((n => n === i ? t.Children.count(e) > 1 ? t.Children.only(null) : t.isValidElement(e) ? e.props.children : null : n));
            return (0, a.jsx)(s, {
              ...o,
              ref: n,
              children: t.isValidElement(e) ? t.cloneElement(e, void 0, r) : null
            })
          }
          return (0, a.jsx)(s, {
            ...o,
            ref: n,
            children: r
          })
        }));
      l.displayName = "Slot";
      var s = t.forwardRef(((e, n) => {
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
            ref: n ? o(n, e) : e
          })
        }
        return t.Children.count(r) > 1 ? t.Children.only(null) : null
      }));
      s.displayName = "SlotClone";
      var i = ({
        children: e
      }) => (0, a.jsx)(a.Fragment, {
        children: e
      });

      function d(e) {
        return t.isValidElement(e) && e.type === i
      }

      function f(e, n) {
        const r = {
          ...n
        };
        for (const t in n) {
          const o = e[t],
            a = n[t];
          /^on[A-Z]/.test(t) ? o && a ? r[t] = (...e) => {
            a(...e), o(...e)
          } : o && (r[t] = o) : "style" === t ? r[t] = {
            ...o,
            ...a
          } : "className" === t && (r[t] = [o, a].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...r
        }
      }
    }
  }
]);