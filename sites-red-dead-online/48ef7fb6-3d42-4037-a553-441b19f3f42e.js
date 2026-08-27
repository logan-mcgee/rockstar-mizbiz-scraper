try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "48ef7fb6-3d42-4037-a553-441b19f3f42e", e._sentryDebugIdIdentifier = "sentry-dbid-48ef7fb6-3d42-4037-a553-441b19f3f42e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [704, 6372], {
    94931(e, t, n) {
      var r = n(93082),
        o = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, n) {
        var r, l = {},
          d = null,
          f = null;
        for (r in void 0 !== n && (d = "" + n), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (f = t.ref), t) i.call(t, r) && !s.hasOwnProperty(r) && (l[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === l[r] && (l[r] = t[r]);
        return {
          $$typeof: o,
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
    81299(e, t, n) {
      n.d(t, {
        b: () => a
      });
      var r = n(93082),
        o = n(94299),
        l = n(39793),
        i = Object.defineProperty,
        a = (() => i(({
          children: e,
          label: t
        }) => {
          const n = r.Children.only(e);
          return (0, l.jsxs)(l.Fragment, {
            children: [r.cloneElement(n, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, l.jsx)(o.bL, {
              children: t
            })]
          })
        }, "name", {
          value: "AccessibleIcon",
          configurable: !0
        }))()
    },
    85049(e, t, n) {
      n.d(t, {
        s: () => s
      });
      var r = n(93082),
        o = Object.defineProperty,
        l = (e, t) => o(e, "name", {
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
          const r = e.map(e => {
            const r = i(e, t);
            return n || "function" != typeof r || (n = !0), r
          });
          if (n) return () => {
            for (let t = 0; t < r.length; t++) {
              const n = r[t];
              "function" == typeof n ? n() : i(e[t], null)
            }
          }
        }
      }

      function s(...e) {
        return r.useCallback(a(...e), e)
      }
      l(i, "setRef"), l(a, "composeRefs"), l(s, "useComposedRefs")
    },
    41988(e, t, n) {
      n.d(t, {
        hO: () => d,
        sG: () => s
      });
      var r = n(93082),
        o = n(84017),
        l = n(93237),
        i = n(39793),
        a = Object.defineProperty,
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, l.TL)(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...l
              } = e, a = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
                ...l,
                ref: r
              })
            });
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }, {});

      function d(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t))
      }
      a(d, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
      })
    },
    93237(e, t, n) {
      let r;
      n.d(t, {
        DX: () => d,
        Dc: () => c,
        TL: () => s,
        xV: () => u
      });
      var o = n(93082),
        l = n(85049),
        i = Object.defineProperty,
        a = (e, t) => i(e, "name", {
          value: t,
          configurable: !0
        });

      function s(e) {
        const t = o.forwardRef((t, n) => {
          let {
            children: r,
            ...i
          } = t, a = null, s = !1;
          const d = [];
          m(r) && "function" == typeof E && (r = E(r._payload)), o.Children.forEach(r, e => {
            if (h(e)) {
              s = !0;
              const t = e;
              let n = "child" in t.props ? t.props.child : t.props.children;
              m(n) && "function" == typeof E && (n = E(n._payload)), a = p(t, n), d.push(a?.props?.children)
            } else d.push(e)
          }), a ? a = o.cloneElement(a, void 0, d) : !s && 1 === o.Children.count(r) && o.isValidElement(r) && (a = r);
          const f = a ? b(a) : void 0,
            c = (0, l.s)(n, f);
          if (!a) {
            if (r || 0 === r) throw new Error(s ? v(e) : w(e));
            return r
          }
          const u = y(i, a.props ?? {});
          return a.type !== o.Fragment && (u.ref = n ? c : f), o.cloneElement(a, u)
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
            return o.isValidElement(t) ? o.cloneElement(t, void 0, e.props.children(t.props.children)) : null
          }
          return o.isValidElement(t) ? t : null
        }, "getSlottableElementFromSlottable");

      function y(e, t) {
        const n = {
          ...t
        };
        for (const r in t) {
          const o = e[r],
            l = t[r];
          /^on[A-Z]/.test(r) ? o && l ? n[r] = (...e) => {
            const t = l(...e);
            return o(...e), t
          } : o && (n[r] = o) : "style" === r ? n[r] = {
            ...o,
            ...l
          } : "className" === r && (n[r] = [o, l].filter(Boolean).join(" "))
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

      function h(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === f
      }
      a(y, "mergeProps"), a(b, "getElementRef"), a(h, "isSlottable");
      var g = Symbol.for("react.lazy");

      function m(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === g && "_payload" in e && _(e._payload)
      }

      function _(e) {
        return "object" == typeof e && null !== e && "then" in e
      }
      a(m, "isLazyComponent"), a(_, "isPromiseLike");
      var w = a(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"),
        v = a(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"),
        E = (r || (r = n.t(o, 2)))[" use ".trim().toString()]
    },
    94299(e, t, n) {
      n.d(t, {
        Qg: () => s,
        bL: () => f,
        s6: () => d
      });
      var r = n(93082),
        o = n(41988),
        l = n(39793),
        i = Object.defineProperty,
        a = (e, t) => i(e, "name", {
          value: t,
          configurable: !0
        }),
        s = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        d = r.forwardRef(a(function(e, t) {
          return (0, l.jsx)(o.sG.span, {
            ...e,
            ref: t,
            style: {
              ...s,
              ...e.style
            }
          })
        }, "VisuallyHidden")),
        f = d
    }
  }
]);