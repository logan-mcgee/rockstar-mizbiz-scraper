try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "84b131e8-8bfb-46a2-9fea-b11155379b83", e._sentryDebugIdIdentifier = "sentry-dbid-84b131e8-8bfb-46a2-9fea-b11155379b83")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [2174, 3868, 6645, 9793], {
    94931(e, t, n) {
      var o = n(93082),
        r = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        i = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, t, n) {
        var o, l = {},
          f = null,
          d = null;
        for (o in void 0 !== n && (f = "" + n), void 0 !== t.key && (f = "" + t.key), void 0 !== t.ref && (d = t.ref), t) a.call(t, o) && !s.hasOwnProperty(o) && (l[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === l[o] && (l[o] = t[o]);
        return {
          $$typeof: r,
          type: e,
          key: f,
          ref: d,
          props: l,
          _owner: i.current
        }
      }
      t.Fragment = l, t.jsx = f, t.jsxs = f
    },
    39793(e, t, n) {
      e.exports = n(94931)
    },
    64239(e, t, n) {
      n.d(t, {
        s: () => l
      });
      var o = n(93082);

      function r(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function l(...e) {
        return o.useCallback(function(...e) {
          return t => {
            let n = !1;
            const o = e.map(e => {
              const o = r(e, t);
              return n || "function" != typeof o || (n = !0), o
            });
            if (n) return () => {
              for (let t = 0; t < o.length; t++) {
                const n = o[t];
                "function" == typeof n ? n() : r(e[t], null)
              }
            }
          }
        }(...e), e)
      }
    },
    17172(e, t, n) {
      let o;
      n.d(t, {
        DX: () => i,
        Dc: () => f,
        TL: () => a,
        xV: () => d
      });
      var r = n(93082),
        l = n(64239);

      function a(e) {
        const t = r.forwardRef((t, n) => {
          let {
            children: o,
            ...a
          } = t, i = null, f = !1;
          const d = [];
          u(o) && "function" == typeof g && (o = g(o._payload)), r.Children.forEach(o, e => {
            if (t = e, r.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === s) {
              f = !0;
              const t = e;
              let n = "child" in t.props ? t.props.child : t.props.children;
              u(n) && "function" == typeof g && (n = g(n._payload)), i = c(t, n), d.push(i?.props?.children)
            } else d.push(e);
            var t
          }), i ? i = r.cloneElement(i, void 0, d) : !f && 1 === r.Children.count(o) && r.isValidElement(o) && (i = o);
          const p = i ? function(e) {
              let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                n = t && "isReactWarning" in t && t.isReactWarning;
              return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
            }(i) : void 0,
            _ = (0, l.s)(n, p);
          if (!i) {
            if (o || 0 === o) throw new Error(f ? b(e) : y(e));
            return o
          }
          const h = function(e, t) {
            const n = {
              ...t
            };
            for (const o in t) {
              const r = e[o],
                l = t[o];
              /^on[A-Z]/.test(o) ? r && l ? n[o] = (...e) => {
                const t = l(...e);
                return r(...e), t
              } : r && (n[o] = r) : "style" === o ? n[o] = {
                ...r,
                ...l
              } : "className" === o && (n[o] = [r, l].filter(Boolean).join(" "))
            }
            return {
              ...e,
              ...n
            }
          }(a, i.props ?? {});
          return i.type !== r.Fragment && (h.ref = n ? _ : p), r.cloneElement(i, h)
        });
        return t.displayName = `${e}.Slot`, t
      }
      var i = a("Slot"),
        s = Symbol.for("radix.slottable");

      function f(e) {
        const t = e => "child" in e ? e.children(e.child) : e.children;
        return t.displayName = `${e}.Slottable`, t.__radixId = s, t
      }
      var d = f("Slottable"),
        c = (e, t) => {
          if ("child" in e.props) {
            const t = e.props.child;
            return r.isValidElement(t) ? r.cloneElement(t, void 0, e.props.children(t.props.children)) : null
          }
          return r.isValidElement(t) ? t : null
        },
        p = Symbol.for("react.lazy");

      function u(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === p && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }
      var y = e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
        b = e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
        g = (o || (o = n.t(r, 2)))[" use ".trim().toString()]
    }
  }
]);