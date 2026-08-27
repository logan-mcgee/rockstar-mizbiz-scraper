try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "56f1c39a-c819-4e01-9923-b198af6e8997", e._sentryDebugIdIdentifier = "sentry-dbid-56f1c39a-c819-4e01-9923-b198af6e8997")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [9912], {
    3746(e, t, n) {
      var o, r = n(9793),
        l = n(3331),
        a = n(4017);
      o = a.createRoot, a.hydrateRoot;
      var i = n(9225),
        d = n(2909),
        s = n(2199),
        c = n(7133),
        f = n(8618),
        u = n(5e3),
        p = n(2542);
      const y = window?.env?.graphEnv ?? "prod",
        b = (0, d.withIntl)(() => {
          const [e, t] = (0, i.useSearchParams)(), n = "true" === e.get("autoplay"), o = e.get("id"), a = e.get("resolution") ?? "", d = e.get("locale") ?? "en_us", p = Number(e.get("start") ?? 0);
          return o ? (0, r.jsx)(c.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultPlatformScale: "desktop",
            children: (0, r.jsx)(l.ResizeProvider, {
              children: (0, r.jsx)(s.GtmProvider, {
                children: (0, r.jsx)(f.A, {
                  autoplay: n,
                  context: u.A2,
                  locale: d,
                  id: o,
                  resolution: a,
                  start: p,
                  wrapper: !1,
                  videoChangeCallback: (e, n, o) => {
                    let r = {
                      id: String(e)
                    };
                    n && (r = {
                      ...r,
                      autoplay: String(n)
                    }), o && (r = {
                      ...r,
                      resolution: String(o)
                    }), t(r)
                  }
                })
              })
            })
          }) : null
        }, p),
        g = (0, l.withRockstarGraph)(() => (0, r.jsx)(i.BrowserRouter, {
          children: (0, r.jsx)(b, {})
        }), {
          env: y
        }),
        h = window?.env?.gtmId ?? null;
      (0, l.gtmInit)({
        id: h
      });
      const m = document.createElement("main");
      document.body.appendChild(m), o(m).render((0, r.jsx)(g, {}))
    },
    1297(e, t, n) {
      n.d(t, {
        DX: () => o.DX,
        xV: () => o.xV,
        s6: () => i
      });
      var o = n(3237),
        r = n(9793),
        l = n(3082),
        a = n(333);
      const i = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? a.s6 : l.Fragment;
        return (0, r.jsx)(n, {
          ...t
        })
      }
    },
    5049(e, t, n) {
      n.d(t, {
        s: () => d
      });
      var o = n(3082),
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
    658(e, t, n) {
      n.d(t, {
        hO: () => s,
        sG: () => d
      });
      var o = n(3082),
        r = n(4017),
        l = n(3237),
        a = n(9793),
        i = Object.defineProperty,
        d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, l.TL)(`Primitive.${t}`),
            r = o.forwardRef((e, o) => {
              const {
                asChild: r,
                ...l
              } = e, i = r ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(i, {
                ...l,
                ref: o
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {});

      function s(e, t) {
        e && r.flushSync(() => e.dispatchEvent(t))
      }
      i(s, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
      })
    },
    3237(e, t, n) {
      let o;
      n.d(t, {
        DX: () => s,
        Dc: () => f,
        TL: () => d,
        xV: () => u
      });
      var r = n(3082),
        l = n(5049),
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
          m(o) && "function" == typeof _ && (o = _(o._payload)), r.Children.forEach(o, e => {
            if (g(e)) {
              d = !0;
              const t = e;
              let n = "child" in t.props ? t.props.child : t.props.children;
              m(n) && "function" == typeof _ && (n = _(n._payload)), i = p(t, n), s.push(i?.props?.children)
            } else s.push(e)
          }), i ? i = r.cloneElement(i, void 0, s) : !d && 1 === r.Children.count(o) && r.isValidElement(o) && (i = o);
          const c = i ? b(i) : void 0,
            f = (0, l.s)(n, c);
          if (!i) {
            if (o || 0 === o) throw new Error(d ? S(e) : v(e));
            return o
          }
          const u = y(a, i.props ?? {});
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
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === c
      }
      i(y, "mergeProps"), i(b, "getElementRef"), i(g, "isSlottable");
      var h = Symbol.for("react.lazy");

      function m(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === h && "_payload" in e && w(e._payload)
      }

      function w(e) {
        return "object" == typeof e && null !== e && "then" in e
      }
      i(m, "isLazyComponent"), i(w, "isPromiseLike");
      var v = i(e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"),
        S = i(e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"),
        _ = (o || (o = n.t(r, 2)))[" use ".trim().toString()]
    },
    333(e, t, n) {
      n.d(t, {
        Qg: () => d,
        bL: () => c,
        s6: () => s
      });
      var o = n(3082),
        r = n(658),
        l = n(9793),
        a = Object.defineProperty,
        i = (e, t) => a(e, "name", {
          value: t,
          configurable: !0
        }),
        d = Object.freeze({
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
        s = o.forwardRef(i(function(e, t) {
          return (0, l.jsx)(r.sG.span, {
            ...e,
            ref: t,
            style: {
              ...d,
              ...e.style
            }
          })
        }, "VisuallyHidden")),
        c = s
    }
  }
]);