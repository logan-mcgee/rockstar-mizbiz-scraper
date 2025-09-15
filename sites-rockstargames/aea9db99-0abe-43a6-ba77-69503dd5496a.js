try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "aea9db99-0abe-43a6-ba77-69503dd5496a", e._sentryDebugIdIdentifier = "sentry-dbid-aea9db99-0abe-43a6-ba77-69503dd5496a")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1282, 4858], {
    39447: (e, n, t) => {
      t.d(n, {
        DX: () => l,
        Dc: () => f,
        TL: () => i,
        xV: () => c
      });
      var r = t(62229),
        a = t(95362),
        o = t(42295);

      function i(e) {
        const n = s(e),
          t = r.forwardRef(((e, t) => {
            const {
              children: a,
              ...i
            } = e, l = r.Children.toArray(a), s = l.find(u);
            if (s) {
              const e = s.props.children,
                a = l.map((n => n === s ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n));
              return (0, o.jsx)(n, {
                ...i,
                ref: t,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, a) : null
              })
            }
            return (0, o.jsx)(n, {
              ...i,
              ref: t,
              children: a
            })
          }));
        return t.displayName = `${e}.Slot`, t
      }
      var l = i("Slot");

      function s(e) {
        const n = r.forwardRef(((e, n) => {
          const {
            children: t,
            ...o
          } = e;
          if (r.isValidElement(t)) {
            const e = function(e) {
                let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  t = n && "isReactWarning" in n && n.isReactWarning;
                return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
              }(t),
              i = function(e, n) {
                const t = {
                  ...n
                };
                for (const r in n) {
                  const a = e[r],
                    o = n[r];
                  /^on[A-Z]/.test(r) ? a && o ? t[r] = (...e) => {
                    o(...e), a(...e)
                  } : a && (t[r] = a) : "style" === r ? t[r] = {
                    ...a,
                    ...o
                  } : "className" === r && (t[r] = [a, o].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(o, t.props);
            return t.type !== r.Fragment && (i.ref = n ? (0, a.t)(n, e) : e), r.cloneElement(t, i)
          }
          return r.Children.count(t) > 1 ? r.Children.only(null) : null
        }));
        return n.displayName = `${e}.SlotClone`, n
      }
      var d = Symbol("radix.slottable");

      function f(e) {
        const n = ({
          children: e
        }) => (0, o.jsx)(o.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = d, n
      }
      var c = f("Slottable");

      function u(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === d
      }
    },
    69055: (e, n, t) => {
      t.d(n, {
        Qg: () => i,
        bL: () => s,
        s6: () => l
      });
      var r = t(62229),
        a = t(78004),
        o = t(42295),
        i = Object.freeze({
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
        l = r.forwardRef(((e, n) => (0, o.jsx)(a.sG.span, {
          ...e,
          ref: n,
          style: {
            ...i,
            ...e.style
          }
        })));
      l.displayName = "VisuallyHidden";
      var s = l
    },
    78004: (e, n, t) => {
      t.d(n, {
        hO: () => s,
        sG: () => l
      });
      var r = t(62229),
        a = t(44853),
        o = t(39447),
        i = t(42295),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, n) => {
          const t = (0, o.TL)(`Primitive.${n}`),
            a = r.forwardRef(((e, r) => {
              const {
                asChild: a,
                ...o
              } = e, l = a ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(l, {
                ...o,
                ref: r
              })
            }));
          return a.displayName = `Primitive.${n}`, {
            ...e,
            [n]: a
          }
        }), {});

      function s(e, n) {
        e && a.flushSync((() => e.dispatchEvent(n)))
      }
    },
    95362: (e, n, t) => {
      t.d(n, {
        s: () => i,
        t: () => o
      });
      var r = t(62229);

      function a(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function o(...e) {
        return n => {
          let t = !1;
          const r = e.map((e => {
            const r = a(e, n);
            return t || "function" != typeof r || (t = !0), r
          }));
          if (t) return () => {
            for (let n = 0; n < r.length; n++) {
              const t = r[n];
              "function" == typeof t ? t() : a(e[n], null)
            }
          }
        }
      }

      function i(...e) {
        return r.useCallback(o(...e), e)
      }
    }
  }
]);