! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "e699d79a-12b2-4b43-b3d7-0f4d4da65028", e._sentryDebugIdIdentifier = "sentry-dbid-e699d79a-12b2-4b43-b3d7-0f4d4da65028")
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
  [4116, 1735, 3855], {
    32469: (e, r, n) => {
      var t = n(62229),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, r, n) {
        var t, a = {},
          d = null,
          i = null;
        for (t in void 0 !== n && (d = "" + n), void 0 !== r.key && (d = "" + r.key), void 0 !== r.ref && (i = r.ref), r) l.call(r, t) && !f.hasOwnProperty(t) && (a[t] = r[t]);
        if (e && e.defaultProps)
          for (t in r = e.defaultProps) void 0 === a[t] && (a[t] = r[t]);
        return {
          $$typeof: o,
          type: e,
          key: d,
          ref: i,
          props: a,
          _owner: s.current
        }
      }
      r.Fragment = a, r.jsx = d, r.jsxs = d
    },
    73855: (e, r, n) => {
      e.exports = n(32469)
    },
    11735: (e, r, n) => {
      n.d(r, {
        DX: () => l,
        xV: () => f
      });
      var t = n(62229);

      function o(...e) {
        return r => e.forEach((e => function(e, r) {
          "function" == typeof e ? e(r) : null != e && (e.current = r)
        }(e, r)))
      }
      var a = n(73855),
        l = t.forwardRef(((e, r) => {
          const {
            children: n,
            ...o
          } = e, l = t.Children.toArray(n), f = l.find(d);
          if (f) {
            const e = f.props.children,
              n = l.map((r => r === f ? t.Children.count(e) > 1 ? t.Children.only(null) : t.isValidElement(e) ? e.props.children : null : r));
            return (0, a.jsx)(s, {
              ...o,
              ref: r,
              children: t.isValidElement(e) ? t.cloneElement(e, void 0, n) : null
            })
          }
          return (0, a.jsx)(s, {
            ...o,
            ref: r,
            children: n
          })
        }));
      l.displayName = "Slot";
      var s = t.forwardRef(((e, r) => {
        const {
          children: n,
          ...a
        } = e;
        if (t.isValidElement(n)) {
          const e = function(e) {
            let r = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = r && "isReactWarning" in r && r.isReactWarning;
            return n ? e.ref : (r = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = r && "isReactWarning" in r && r.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
          }(n);
          return t.cloneElement(n, {
            ...i(a, n.props),
            ref: r ? o(r, e) : e
          })
        }
        return t.Children.count(n) > 1 ? t.Children.only(null) : null
      }));
      s.displayName = "SlotClone";
      var f = ({
        children: e
      }) => (0, a.jsx)(a.Fragment, {
        children: e
      });

      function d(e) {
        return t.isValidElement(e) && e.type === f
      }

      function i(e, r) {
        const n = {
          ...r
        };
        for (const t in r) {
          const o = e[t],
            a = r[t];
          /^on[A-Z]/.test(t) ? o && a ? n[t] = (...e) => {
            a(...e), o(...e)
          } : o && (n[t] = o) : "style" === t ? n[t] = {
            ...o,
            ...a
          } : "className" === t && (n[t] = [o, a].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...n
        }
      }
    }
  }
]);