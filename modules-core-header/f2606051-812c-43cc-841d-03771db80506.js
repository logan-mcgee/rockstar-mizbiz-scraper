! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "f2606051-812c-43cc-841d-03771db80506", e._sentryDebugIdIdentifier = "sentry-dbid-f2606051-812c-43cc-841d-03771db80506")
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
  [616, 3135, 3473, 5516, 5854], {
    23135: (e, t, n) => {
      n.r(t), n.d(t, {
        Root: () => d,
        Slot: () => d,
        Slottable: () => c,
        createSlot: () => a,
        createSlottable: () => f
      });
      var r = n(71127),
        o = n(86410),
        l = n(25854);

      function a(e) {
        const t = s(e),
          n = r.forwardRef(((e, n) => {
            const {
              children: o,
              ...a
            } = e, d = r.Children.toArray(o), s = d.find(u);
            if (s) {
              const e = s.props.children,
                o = d.map((t => t === s ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : t));
              return (0, l.jsx)(t, {
                ...a,
                ref: n,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, l.jsx)(t, {
              ...a,
              ref: n,
              children: o
            })
          }));
        return n.displayName = `${e}.Slot`, n
      }
      var d = a("Slot");

      function s(e) {
        const t = r.forwardRef(((e, t) => {
          const {
            children: n,
            ...l
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
                  const o = e[r],
                    l = t[r];
                  /^on[A-Z]/.test(r) ? o && l ? n[r] = (...e) => {
                    l(...e), o(...e)
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...l
                  } : "className" === r && (n[r] = [o, l].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(l, n.props);
            return n.type !== r.Fragment && (a.ref = t ? (0, o.t)(t, e) : e), r.cloneElement(n, a)
          }
          return r.Children.count(n) > 1 ? r.Children.only(null) : null
        }));
        return t.displayName = `${e}.SlotClone`, t
      }
      var i = Symbol("radix.slottable");

      function f(e) {
        const t = ({
          children: e
        }) => (0, l.jsx)(l.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = i, t
      }
      var c = f("Slottable");

      function u(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === i
      }
    },
    25854: (e, t, n) => {
      e.exports = n(41454)
    },
    41454: (e, t, n) => {
      var r = n(71127),
        o = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, t, n) {
        var r, l = {},
          i = null,
          f = null;
        for (r in void 0 !== n && (i = "" + n), void 0 !== t.key && (i = "" + t.key), void 0 !== t.ref && (f = t.ref), t) a.call(t, r) && !s.hasOwnProperty(r) && (l[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === l[r] && (l[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: i,
          ref: f,
          props: l,
          _owner: d.current
        }
      }
      t.Fragment = l, t.jsx = i, t.jsxs = i
    },
    86410: (e, t, n) => {
      n.d(t, {
        s: () => a,
        t: () => l
      });
      var r = n(71127);

      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function l(...e) {
        return t => {
          let n = !1;
          const r = e.map((e => {
            const r = o(e, t);
            return n || "function" != typeof r || (n = !0), r
          }));
          if (n) return () => {
            for (let t = 0; t < r.length; t++) {
              const n = r[t];
              "function" == typeof n ? n() : o(e[t], null)
            }
          }
        }
      }

      function a(...e) {
        return r.useCallback(l(...e), e)
      }
    }
  }
]);