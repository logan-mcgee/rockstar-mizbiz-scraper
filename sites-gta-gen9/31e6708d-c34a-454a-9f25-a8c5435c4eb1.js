try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "31e6708d-c34a-454a-9f25-a8c5435c4eb1", e._sentryDebugIdIdentifier = "sentry-dbid-31e6708d-c34a-454a-9f25-a8c5435c4eb1")
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
  [704, 2174, 4555, 6072, 9793], {
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

      function d(e, t, n) {
        var o, l = {},
          d = null,
          f = null;
        for (o in void 0 !== n && (d = "" + n), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (f = t.ref), t) a.call(t, o) && !s.hasOwnProperty(o) && (l[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === l[o] && (l[o] = t[o]);
        return {
          $$typeof: r,
          type: e,
          key: d,
          ref: f,
          props: l,
          _owner: i.current
        }
      }
      t.Fragment = l, t.jsx = d, t.jsxs = d
    },
    39793(e, t, n) {
      e.exports = n(94931)
    },
    85049(e, t, n) {
      n.d(t, {
        s: () => s
      });
      var o = n(93082),
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

      function s(...e) {
        return o.useCallback(i(...e), e)
      }
      l(a, "setRef"), l(i, "composeRefs"), l(s, "useComposedRefs")
    },
    93237(e, t, n) {
      let o;
      n.d(t, {
        DX: () => d,
        Dc: () => c,
        TL: () => s,
        xV: () => p
      });
      var r = n(93082),
        l = n(85049),
        a = Object.defineProperty,
        i = (e, t) => a(e, "name", {
          value: t,
          configurable: !0
        });

      function s(e) {
        const t = r.forwardRef((t, n) => {
          let {
            children: o,
            ...a
          } = t, i = null, s = !1;
          const d = [];
          h(o) && "function" == typeof S && (o = S(o._payload)), r.Children.forEach(o, e => {
            if (g(e)) {
              s = !0;
              const t = e;
              let n = "child" in t.props ? t.props.child : t.props.children;
              h(n) && "function" == typeof S && (n = S(n._payload)), i = u(t, n), d.push(i?.props?.children)
            } else d.push(e)
          }), i ? i = r.cloneElement(i, void 0, d) : !s && 1 === r.Children.count(o) && r.isValidElement(o) && (i = o);
          const f = i ? b(i) : void 0,
            c = (0, l.s)(n, f);
          if (!i) {
            if (o || 0 === o) throw new Error(s ? w(e) : E(e));
            return o
          }
          const p = y(a, i.props ?? {});
          return i.type !== r.Fragment && (p.ref = n ? c : f), r.cloneElement(i, p)
        });
        return t.displayName = `${e}.Slot`, t
      }
      i(s, "createSlot");
      var d = s("Slot"),
        f = Symbol.for("radix.slottable");

      function c(e) {
        const t = i(e => "child" in e ? e.children(e.child) : e.children, "Slottable");
        return t.displayName = `${e}.Slottable`, t.__radixId = f, t
      }
      i(c, "createSlottable");
      var p = c("Slottable"),
        u = i((e, t) => {
          if ("child" in e.props) {
            const t = e.props.child;
            return r.isValidElement(t) ? r.cloneElement(t, void 0, e.props.children(t.props.children)) : null
          }
          return r.isValidElement(t) ? t : null
        }, "getSlottableElementFromSlottable");

      function y(e, t) {
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

      function b(e) {
        let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
          n = t && "isReactWarning" in t && t.isReactWarning;
        return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
      }

      function g(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === f
      }
      i(y, "mergeProps"), i(b, "getElementRef"), i(g, "isSlottable");
      var _ = Symbol.for("react.lazy");

      function h(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === _ && "_payload" in e && m(e._payload)
      }

      function m(e) {
        return "object" == typeof e && null !== e && "then" in e
      }
      i(h, "isLazyComponent"), i(m, "isPromiseLike");
      var E = i(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"),
        w = i(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"),
        S = (o || (o = n.t(r, 2)))[" use ".trim().toString()]
    }
  }
]);