! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c59d3dc5-8b91-43fb-93c9-3ab7846d6906", e._sentryDebugIdIdentifier = "sentry-dbid-c59d3dc5-8b91-43fb-93c9-3ab7846d6906")
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
  [4783], {
    83957: (e, n, r) => {
      r.d(n, {
        s: () => d,
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

      function d(...e) {
        return t.useCallback(l(...e), e)
      }
    },
    27164: (e, n, r) => {
      r.r(n), r.d(n, {
        Root: () => f,
        Slot: () => d,
        Slottable: () => i
      });
      var t = r(62229),
        o = r(83957),
        l = r(91029),
        d = t.forwardRef(((e, n) => {
          const {
            children: r,
            ...o
          } = e, d = t.Children.toArray(r), i = d.find(s);
          if (i) {
            const e = i.props.children,
              r = d.map((n => n === i ? t.Children.count(e) > 1 ? t.Children.only(null) : t.isValidElement(e) ? e.props.children : null : n));
            return (0, l.jsx)(a, {
              ...o,
              ref: n,
              children: t.isValidElement(e) ? t.cloneElement(e, void 0, r) : null
            })
          }
          return (0, l.jsx)(a, {
            ...o,
            ref: n,
            children: r
          })
        }));
      d.displayName = "Slot";
      var a = t.forwardRef(((e, n) => {
        const {
          children: r,
          ...l
        } = e;
        if (t.isValidElement(r)) {
          const e = function(e) {
              let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                r = n && "isReactWarning" in n && n.isReactWarning;
              return r ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = n && "isReactWarning" in n && n.isReactWarning, r ? e.props.ref : e.props.ref || e.ref)
            }(r),
            d = function(e, n) {
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
            }(l, r.props);
          return r.type !== t.Fragment && (d.ref = n ? (0, o.t)(n, e) : e), t.cloneElement(r, d)
        }
        return t.Children.count(r) > 1 ? t.Children.only(null) : null
      }));
      a.displayName = "SlotClone";
      var i = ({
        children: e
      }) => (0, l.jsx)(l.Fragment, {
        children: e
      });

      function s(e) {
        return t.isValidElement(e) && e.type === i
      }
      var f = d
    }
  }
]);