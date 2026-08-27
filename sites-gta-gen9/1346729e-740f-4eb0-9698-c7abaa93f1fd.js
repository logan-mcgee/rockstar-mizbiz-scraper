try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1346729e-740f-4eb0-9698-c7abaa93f1fd", e._sentryDebugIdIdentifier = "sentry-dbid-1346729e-740f-4eb0-9698-c7abaa93f1fd")
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
  [658, 2174, 4555, 9793], {
    94931(e, t, n) {
      var o = n(93082),
        r = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        a = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
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
        for (o in void 0 !== n && (d = "" + n), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (f = t.ref), t) i.call(t, o) && !s.hasOwnProperty(o) && (l[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === l[o] && (l[o] = t[o]);
        return {
          $$typeof: r,
          type: e,
          key: d,
          ref: f,
          props: l,
          _owner: a.current
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

      function i(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function a(...e) {
        return t => {
          let n = !1;
          const o = e.map(e => {
            const o = i(e, t);
            return n || "function" != typeof o || (n = !0), o
          });
          if (n) return () => {
            for (let t = 0; t < o.length; t++) {
              const n = o[t];
              "function" == typeof n ? n() : i(e[t], null)
            }
          }
        }
      }

      function s(...e) {
        return o.useCallback(a(...e), e)
      }
      l(i, "setRef"), l(a, "composeRefs"), l(s, "useComposedRefs")
    },
    658(e, t, n) {
      n.d(t, {
        hO: () => d,
        sG: () => s
      });
      var o = n(93082),
        r = n(84017),
        l = n(93237),
        i = n(39793),
        a = Object.defineProperty,
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, l.TL)(`Primitive.${t}`),
            r = o.forwardRef((e, o) => {
              const {
                asChild: r,
                ...l
              } = e, a = r ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
                ...l,
                ref: o
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {});

      function d(e, t) {
        e && r.flushSync(() => e.dispatchEvent(t))
      }
      a(d, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
      })
    },
    93237(e, t, n) {
      let o;
      n.d(t, {
        DX: () => d,
        Dc: () => c,
        TL: () => s,
        xV: () => u
      });
      var r = n(93082),
        l = n(85049),
        i = Object.defineProperty,
        a = (e, t) => i(e, "name", {
          value: t,
          configurable: !0
        });

      function s(e) {
        const t = r.forwardRef((t, n) => {
          let {
            children: o,
            ...i
          } = t, a = null, s = !1;
          const d = [];
          m(o) && "function" == typeof v && (o = v(o._payload)), r.Children.forEach(o, e => {
            if (g(e)) {
              s = !0;
              const t = e;
              let n = "child" in t.props ? t.props.child : t.props.children;
              m(n) && "function" == typeof v && (n = v(n._payload)), a = p(t, n), d.push(a?.props?.children)
            } else d.push(e)
          }), a ? a = r.cloneElement(a, void 0, d) : !s && 1 === r.Children.count(o) && r.isValidElement(o) && (a = o);
          const f = a ? b(a) : void 0,
            c = (0, l.s)(n, f);
          if (!a) {
            if (o || 0 === o) throw new Error(s ? E(e) : w(e));
            return o
          }
          const u = y(i, a.props ?? {});
          return a.type !== r.Fragment && (u.ref = n ? c : f), r.cloneElement(a, u)
        });
        return t.displayName = `${e}.Slot`, t
      }
      a(s, "createSlot");
      var d = s("Slot"),
        f = Symbol.for("radix.slottable");

      function c(e) {
        const t = a(e => "child" in e ? e.children(e.child) : e.children, "Slottable");
        return t.displayName = `${e}.Slottable`, t.__radixId = f, t
      }
      a(c, "createSlottable");
      var u = c("Slottable"),
        p = a((e, t) => {
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
      a(y, "mergeProps"), a(b, "getElementRef"), a(g, "isSlottable");
      var h = Symbol.for("react.lazy");

      function m(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === h && "_payload" in e && _(e._payload)
      }

      function _(e) {
        return "object" == typeof e && null !== e && "then" in e
      }
      a(m, "isLazyComponent"), a(_, "isPromiseLike");
      var w = a(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"),
        E = a(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"),
        v = (o || (o = n.t(r, 2)))[" use ".trim().toString()]
    }
  }
]);