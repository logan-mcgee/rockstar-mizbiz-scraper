try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6fdd64e2-0318-41bc-9fb6-d81e687e6ef7", e._sentryDebugIdIdentifier = "sentry-dbid-6fdd64e2-0318-41bc-9fb6-d81e687e6ef7")
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
  [82, 667, 2174, 4555, 9793], {
    94931(e, t, n) {
      var o = n(93082),
        r = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        a = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, t, n) {
        var o, l = {},
          s = null,
          f = null;
        for (o in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (f = t.ref), t) i.call(t, o) && !d.hasOwnProperty(o) && (l[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === l[o] && (l[o] = t[o]);
        return {
          $$typeof: r,
          type: e,
          key: s,
          ref: f,
          props: l,
          _owner: a.current
        }
      }
      t.Fragment = l, t.jsx = s, t.jsxs = s
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
        DX: () => a,
        Dc: () => s,
        TL: () => i,
        xV: () => f
      });
      var r = n(93082),
        l = n(64239);

      function i(e) {
        const t = r.forwardRef((t, n) => {
          let {
            children: o,
            ...i
          } = t, a = null, s = !1;
          const f = [];
          u(o) && "function" == typeof g && (o = g(o._payload)), r.Children.forEach(o, e => {
            if (t = e, r.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === d) {
              s = !0;
              const t = e;
              let n = "child" in t.props ? t.props.child : t.props.children;
              u(n) && "function" == typeof g && (n = g(n._payload)), a = c(t, n), f.push(a?.props?.children)
            } else f.push(e);
            var t
          }), a ? a = r.cloneElement(a, void 0, f) : !s && 1 === r.Children.count(o) && r.isValidElement(o) && (a = o);
          const p = a ? function(e) {
              let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                n = t && "isReactWarning" in t && t.isReactWarning;
              return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
            }(a) : void 0,
            _ = (0, l.s)(n, p);
          if (!a) {
            if (o || 0 === o) throw new Error(s ? b(e) : y(e));
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
          }(i, a.props ?? {});
          return a.type !== r.Fragment && (h.ref = n ? _ : p), r.cloneElement(a, h)
        });
        return t.displayName = `${e}.Slot`, t
      }
      var a = i("Slot"),
        d = Symbol.for("radix.slottable");

      function s(e) {
        const t = e => "child" in e ? e.children(e.child) : e.children;
        return t.displayName = `${e}.Slottable`, t.__radixId = d, t
      }
      var f = s("Slottable"),
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