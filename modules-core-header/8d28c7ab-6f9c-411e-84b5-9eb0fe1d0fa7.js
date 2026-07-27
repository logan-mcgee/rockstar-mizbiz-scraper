try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8d28c7ab-6f9c-411e-84b5-9eb0fe1d0fa7", e._sentryDebugIdIdentifier = "sentry-dbid-8d28c7ab-6f9c-411e-84b5-9eb0fe1d0fa7")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [4791, 7172], {
    64239(e, t, n) {
      n.d(t, {
        s: () => r
      });
      var o = n(4637);

      function l(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function r(...e) {
        return o.useCallback(function(...e) {
          return t => {
            let n = !1;
            const o = e.map(e => {
              const o = l(e, t);
              return n || "function" != typeof o || (n = !0), o
            });
            if (n) return () => {
              for (let t = 0; t < o.length; t++) {
                const n = o[t];
                "function" == typeof n ? n() : l(e[t], null)
              }
            }
          }
        }(...e), e)
      }
    },
    17172(e, t, n) {
      let o;
      n.r(t), n.d(t, {
        Root: () => i,
        Slot: () => i,
        Slottable: () => c,
        createSlot: () => a,
        createSlottable: () => s
      });
      var l = n(4637),
        r = n(64239);

      function a(e) {
        const t = l.forwardRef((t, n) => {
          let {
            children: o,
            ...a
          } = t, i = null, s = !1;
          const c = [];
          u(o) && "function" == typeof h && (o = h(o._payload)), l.Children.forEach(o, e => {
            if (t = e, l.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === d) {
              s = !0;
              const t = e;
              let n = "child" in t.props ? t.props.child : t.props.children;
              u(n) && "function" == typeof h && (n = h(n._payload)), i = f(t, n), c.push(i?.props?.children)
            } else c.push(e);
            var t
          }), i ? i = l.cloneElement(i, void 0, c) : !s && 1 === l.Children.count(o) && l.isValidElement(o) && (i = o);
          const p = i ? function(e) {
              let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                n = t && "isReactWarning" in t && t.isReactWarning;
              return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
            }(i) : void 0,
            g = (0, r.s)(n, p);
          if (!i) {
            if (o || 0 === o) throw new Error(s ? b(e) : y(e));
            return o
          }
          const _ = function(e, t) {
            const n = {
              ...t
            };
            for (const o in t) {
              const l = e[o],
                r = t[o];
              /^on[A-Z]/.test(o) ? l && r ? n[o] = (...e) => {
                const t = r(...e);
                return l(...e), t
              } : l && (n[o] = l) : "style" === o ? n[o] = {
                ...l,
                ...r
              } : "className" === o && (n[o] = [l, r].filter(Boolean).join(" "))
            }
            return {
              ...e,
              ...n
            }
          }(a, i.props ?? {});
          return i.type !== l.Fragment && (_.ref = n ? g : p), l.cloneElement(i, _)
        });
        return t.displayName = `${e}.Slot`, t
      }
      var i = a("Slot"),
        d = Symbol.for("radix.slottable");

      function s(e) {
        const t = e => "child" in e ? e.children(e.child) : e.children;
        return t.displayName = `${e}.Slottable`, t.__radixId = d, t
      }
      var c = s("Slottable"),
        f = (e, t) => {
          if ("child" in e.props) {
            const t = e.props.child;
            return l.isValidElement(t) ? l.cloneElement(t, void 0, e.props.children(t.props.children)) : null
          }
          return l.isValidElement(t) ? t : null
        },
        p = Symbol.for("react.lazy");

      function u(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === p && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }
      var y = e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
        b = e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
        h = (o || (o = n.t(l, 2)))[" use ".trim().toString()]
    }
  }
]);