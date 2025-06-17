! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b7266b6e-9248-428b-9cbe-9f901a0dd1c7", e._sentryDebugIdIdentifier = "sentry-dbid-b7266b6e-9248-428b-9cbe-9f901a0dd1c7")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [5516], {
    23135: (e, t, n) => {
      n.r(t), n.d(t, {
        Root: () => d,
        Slot: () => d,
        Slottable: () => c,
        createSlot: () => a,
        createSlottable: () => f
      });
      var r = n(71127),
        l = n(86410),
        o = n(25854);

      function a(e) {
        const t = i(e),
          n = r.forwardRef(((e, n) => {
            const {
              children: l,
              ...a
            } = e, d = r.Children.toArray(l), i = d.find(u);
            if (i) {
              const e = i.props.children,
                l = d.map((t => t === i ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : t));
              return (0, o.jsx)(t, {
                ...a,
                ref: n,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, l) : null
              })
            }
            return (0, o.jsx)(t, {
              ...a,
              ref: n,
              children: l
            })
          }));
        return n.displayName = `${e}.Slot`, n
      }
      var d = a("Slot");

      function i(e) {
        const t = r.forwardRef(((e, t) => {
          const {
            children: n,
            ...o
          } = e;
          if (r.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              a = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const l = e[r],
                    o = t[r];
                  /^on[A-Z]/.test(r) ? l && o ? n[r] = (...e) => {
                    o(...e), l(...e)
                  } : l && (n[r] = l) : "style" === r ? n[r] = {
                    ...l,
                    ...o
                  } : "className" === r && (n[r] = [l, o].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(o, n.props);
            return n.type !== r.Fragment && (a.ref = t ? (0, l.t)(t, e) : e), r.cloneElement(n, a)
          }
          return r.Children.count(n) > 1 ? r.Children.only(null) : null
        }));
        return t.displayName = `${e}.SlotClone`, t
      }
      var s = Symbol("radix.slottable");

      function f(e) {
        const t = ({
          children: e
        }) => (0, o.jsx)(o.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = s, t
      }
      var c = f("Slottable");

      function u(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === s
      }
    },
    86410: (e, t, n) => {
      n.d(t, {
        s: () => a,
        t: () => o
      });
      var r = n(71127);

      function l(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function o(...e) {
        return t => {
          let n = !1;
          const r = e.map((e => {
            const r = l(e, t);
            return n || "function" != typeof r || (n = !0), r
          }));
          if (n) return () => {
            for (let t = 0; t < r.length; t++) {
              const n = r[t];
              "function" == typeof n ? n() : l(e[t], null)
            }
          }
        }
      }

      function a(...e) {
        return r.useCallback(o(...e), e)
      }
    }
  }
]);