! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f7b63990-aeef-4384-95ad-60f4eb682617", e._sentryDebugIdIdentifier = "sentry-dbid-f7b63990-aeef-4384-95ad-60f4eb682617")
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
  [5600], {
    83957: (e, n, r) => {
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
    },
    73219: (e, n, r) => {
      r.r(n), r.d(n, {
        Root: () => c,
        Slot: () => a,
        Slottable: () => i
      });
      var t = r(62229),
        o = r(83957),
        l = r(91029),
        a = t.forwardRef(((e, n) => {
          const {
            children: r,
            ...o
          } = e, a = t.Children.toArray(r), i = a.find(f);
          if (i) {
            const e = i.props.children,
              r = a.map((n => n === i ? t.Children.count(e) > 1 ? t.Children.only(null) : t.isValidElement(e) ? e.props.children : null : n));
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
            ...s(l, r.props),
            ref: n ? (0, o.t)(n, e) : e
          })
        }
        return t.Children.count(r) > 1 ? t.Children.only(null) : null
      }));
      d.displayName = "SlotClone";
      var i = ({
        children: e
      }) => (0, l.jsx)(l.Fragment, {
        children: e
      });

      function f(e) {
        return t.isValidElement(e) && e.type === i
      }

      function s(e, n) {
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
    }
  }
]);