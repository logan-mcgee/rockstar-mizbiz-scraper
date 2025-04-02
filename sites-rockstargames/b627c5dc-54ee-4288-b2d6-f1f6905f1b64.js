! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      r = (new Error).stack;
    r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "b627c5dc-54ee-4288-b2d6-f1f6905f1b64", e._sentryDebugIdIdentifier = "sentry-dbid-b627c5dc-54ee-4288-b2d6-f1f6905f1b64")
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
  [1735, 3855], {
    32469: (e, r, n) => {
      var t = n(62229),
        o = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, r, n) {
        var t, l = {},
          i = null,
          f = null;
        for (t in void 0 !== n && (i = "" + n), void 0 !== r.key && (i = "" + r.key), void 0 !== r.ref && (f = r.ref), r) a.call(r, t) && !d.hasOwnProperty(t) && (l[t] = r[t]);
        if (e && e.defaultProps)
          for (t in r = e.defaultProps) void 0 === l[t] && (l[t] = r[t]);
        return {
          $$typeof: o,
          type: e,
          key: i,
          ref: f,
          props: l,
          _owner: s.current
        }
      }
      r.Fragment = l, r.jsx = i, r.jsxs = i
    },
    73855: (e, r, n) => {
      e.exports = n(32469)
    },
    11735: (e, r, n) => {
      n.d(r, {
        DX: () => a,
        xV: () => d
      });
      var t = n(62229);

      function o(...e) {
        return r => e.forEach((e => function(e, r) {
          "function" == typeof e ? e(r) : null != e && (e.current = r)
        }(e, r)))
      }
      var l = n(73855),
        a = t.forwardRef(((e, r) => {
          const {
            children: n,
            ...o
          } = e, a = t.Children.toArray(n), d = a.find(i);
          if (d) {
            const e = d.props.children,
              n = a.map((r => r === d ? t.Children.count(e) > 1 ? t.Children.only(null) : t.isValidElement(e) ? e.props.children : null : r));
            return (0, l.jsx)(s, {
              ...o,
              ref: r,
              children: t.isValidElement(e) ? t.cloneElement(e, void 0, n) : null
            })
          }
          return (0, l.jsx)(s, {
            ...o,
            ref: r,
            children: n
          })
        }));
      a.displayName = "Slot";
      var s = t.forwardRef(((e, r) => {
        const {
          children: n,
          ...l
        } = e;
        if (t.isValidElement(n)) {
          const e = function(e) {
            let r = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              n = r && "isReactWarning" in r && r.isReactWarning;
            return n ? e.ref : (r = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = r && "isReactWarning" in r && r.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
          }(n);
          return t.cloneElement(n, {
            ...f(l, n.props),
            ref: r ? o(r, e) : e
          })
        }
        return t.Children.count(n) > 1 ? t.Children.only(null) : null
      }));
      s.displayName = "SlotClone";
      var d = ({
        children: e
      }) => (0, l.jsx)(l.Fragment, {
        children: e
      });

      function i(e) {
        return t.isValidElement(e) && e.type === d
      }

      function f(e, r) {
        const n = {
          ...r
        };
        for (const t in r) {
          const o = e[t],
            l = r[t];
          /^on[A-Z]/.test(t) ? o && l ? n[t] = (...e) => {
            l(...e), o(...e)
          } : o && (n[t] = o) : "style" === t ? n[t] = {
            ...o,
            ...l
          } : "className" === t && (n[t] = [o, l].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...n
        }
      }
    }
  }
]);