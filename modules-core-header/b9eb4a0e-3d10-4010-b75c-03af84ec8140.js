! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b9eb4a0e-3d10-4010-b75c-03af84ec8140", e._sentryDebugIdIdentifier = "sentry-dbid-b9eb4a0e-3d10-4010-b75c-03af84ec8140")
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
  [1763, 3855, 6236, 9093, 1474, 4144], {
    32469: (e, n, r) => {
      var t = r(62229),
        o = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        d = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, n, r) {
        var t, l = {},
          s = null,
          i = null;
        for (t in void 0 !== r && (s = "" + r), void 0 !== n.key && (s = "" + n.key), void 0 !== n.ref && (i = n.ref), n) a.call(n, t) && !f.hasOwnProperty(t) && (l[t] = n[t]);
        if (e && e.defaultProps)
          for (t in n = e.defaultProps) void 0 === l[t] && (l[t] = n[t]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: i,
          props: l,
          _owner: d.current
        }
      }
      n.Fragment = l, n.jsx = s, n.jsxs = s
    },
    73855: (e, n, r) => {
      e.exports = r(32469)
    },
    14144: (e, n, r) => {
      r.r(n), r.d(n, {
        Root: () => c,
        Slot: () => a,
        Slottable: () => f
      });
      var t = r(62229),
        o = r(21423),
        l = r(73855),
        a = t.forwardRef(((e, n) => {
          const {
            children: r,
            ...o
          } = e, a = t.Children.toArray(r), f = a.find(s);
          if (f) {
            const e = f.props.children,
              r = a.map((n => n === f ? t.Children.count(e) > 1 ? t.Children.only(null) : t.isValidElement(e) ? e.props.children : null : n));
            return (0, l.jsx)(d, {
              ...o,
              ref: n,
              children: t.isValidElement(e) ? t.cloneElement(e, void 0, r) : null
            })
          }
          return (0, l.jsx)(d, {
            ...o,
            ref: n,
            children: r
          })
        }));
      a.displayName = "Slot";
      var d = t.forwardRef(((e, n) => {
        const {
          children: r,
          ...l
        } = e;
        if (t.isValidElement(r)) {
          const e = function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              r = n && "isReactWarning" in n && n.isReactWarning;
            return r ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
          }(r);
          return t.cloneElement(r, {
            ...i(l, r.props),
            ref: n ? (0, o.t)(n, e) : e
          })
        }
        return t.Children.count(r) > 1 ? t.Children.only(null) : null
      }));
      d.displayName = "SlotClone";
      var f = ({
        children: e
      }) => (0, l.jsx)(l.Fragment, {
        children: e
      });

      function s(e) {
        return t.isValidElement(e) && e.type === f
      }

      function i(e, n) {
        const r = {
          ...n
        };
        for (const t in n) {
          const o = e[t],
            l = n[t];
          /^on[A-Z]/.test(t) ? o && l ? r[t] = (...e) => {
            l(...e), o(...e)
          } : o && (r[t] = o) : "style" === t ? r[t] = {
            ...o,
            ...l
          } : "className" === t && (r[t] = [o, l].filter(Boolean).join(" "))
        }
        return {
          ...e,
          ...r
        }
      }
      var c = a
    },
    21423: (e, n, r) => {
      r.d(n, {
        s: () => a,
        t: () => l
      });
      var t = r(62229);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function l(...e) {
        return n => {
          let r = !1;
          const t = e.map((e => {
            const t = o(e, n);
            return r || "function" != typeof t || (r = !0), t
          }));
          if (r) return () => {
            for (let n = 0; n < t.length; n++) {
              const r = t[n];
              "function" == typeof r ? r() : o(e[n], null)
            }
          }
        }
      }

      function a(...e) {
        return t.useCallback(l(...e), e)
      }
    }
  }
]);