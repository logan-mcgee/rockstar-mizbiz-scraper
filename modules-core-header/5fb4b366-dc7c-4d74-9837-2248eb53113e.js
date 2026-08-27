try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5fb4b366-dc7c-4d74-9837-2248eb53113e", e._sentryDebugIdIdentifier = "sentry-dbid-5fb4b366-dc7c-4d74-9837-2248eb53113e")
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
  [3237, 5618], {
    85049(e, t, n) {
      n.d(t, {
        s: () => d
      });
      var o = n(4637),
        r = Object.defineProperty,
        l = (e, t) => r(e, "name", {
          value: t,
          configurable: !0
        });

      function a(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function i(...e) {
        return t => {
          let n = !1;
          const o = e.map(e => {
            const o = a(e, t);
            return n || "function" != typeof o || (n = !0), o
          });
          if (n) return () => {
            for (let t = 0; t < o.length; t++) {
              const n = o[t];
              "function" == typeof n ? n() : a(e[t], null)
            }
          }
        }
      }

      function d(...e) {
        return o.useCallback(i(...e), e)
      }
      l(a, "setRef"), l(i, "composeRefs"), l(d, "useComposedRefs")
    },
    93237(e, t, n) {
      let o;
      n.r(t), n.d(t, {
        Root: () => s,
        Slot: () => s,
        Slottable: () => u,
        createSlot: () => d,
        createSlottable: () => f
      });
      var r = n(4637),
        l = n(85049),
        a = Object.defineProperty,
        i = (e, t) => a(e, "name", {
          value: t,
          configurable: !0
        });

      function d(e) {
        const t = r.forwardRef((t, n) => {
          let {
            children: o,
            ...a
          } = t, i = null, d = !1;
          const s = [];
          m(o) && "function" == typeof E && (o = E(o._payload)), r.Children.forEach(o, e => {
            if (g(e)) {
              d = !0;
              const t = e;
              let n = "child" in t.props ? t.props.child : t.props.children;
              m(n) && "function" == typeof E && (n = E(n._payload)), i = p(t, n), s.push(i?.props?.children)
            } else s.push(e)
          }), i ? i = r.cloneElement(i, void 0, s) : !d && 1 === r.Children.count(o) && r.isValidElement(o) && (i = o);
          const c = i ? y(i) : void 0,
            f = (0, l.s)(n, c);
          if (!i) {
            if (o || 0 === o) throw new Error(d ? w(e) : S(e));
            return o
          }
          const u = b(a, i.props ?? {});
          return i.type !== r.Fragment && (u.ref = n ? f : c), r.cloneElement(i, u)
        });
        return t.displayName = `${e}.Slot`, t
      }
      i(d, "createSlot");
      var s = d("Slot"),
        c = Symbol.for("radix.slottable");

      function f(e) {
        const t = i(e => "child" in e ? e.children(e.child) : e.children, "Slottable");
        return t.displayName = `${e}.Slottable`, t.__radixId = c, t
      }
      i(f, "createSlottable");
      var u = f("Slottable"),
        p = i((e, t) => {
          if ("child" in e.props) {
            const t = e.props.child;
            return r.isValidElement(t) ? r.cloneElement(t, void 0, e.props.children(t.props.children)) : null
          }
          return r.isValidElement(t) ? t : null
        }, "getSlottableElementFromSlottable");

      function b(e, t) {
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
      }

      function y(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
          n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
      }

      function g(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === c
      }
      i(b, "mergeProps"), i(y, "getElementRef"), i(g, "isSlottable");
      var h = Symbol.for("react.lazy");

      function m(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === h && "_payload" in e && _(e._payload)
      }

      function _(e) {
        return "object" == typeof e && null !== e && "then" in e
      }
      i(m, "isLazyComponent"), i(_, "isPromiseLike");
      var S = i(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"),
        w = i(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"),
        E = (o || (o = n.t(r, 2)))[" use ".trim().toString()]
    }
  }
]);