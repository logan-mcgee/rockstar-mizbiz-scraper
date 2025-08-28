try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c619e65e-53e1-464d-91a3-2c593491aee8", e._sentryDebugIdIdentifier = "sentry-dbid-c619e65e-53e1-464d-91a3-2c593491aee8")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "793af7f1166af90e36185780de33260abbd44330",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "793af7f1166af90e36185780de33260abbd44330"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [352, 5599], {
    18628: (e, n, t) => {
      t.d(n, {
        Qg: () => a,
        bL: () => s,
        s6: () => l
      });
      var r = t(62229),
        o = t(51347),
        i = t(70954),
        a = Object.freeze({
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
        l = r.forwardRef(((e, n) => (0, i.jsx)(o.sG.span, {
          ...e,
          ref: n,
          style: {
            ...a,
            ...e.style
          }
        })));
      l.displayName = "VisuallyHidden";
      var s = l
    },
    21423: (e, n, t) => {
      t.d(n, {
        s: () => a,
        t: () => i
      });
      var r = t(62229);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function i(...e) {
        return n => {
          let t = !1;
          const r = e.map((e => {
            const r = o(e, n);
            return t || "function" != typeof r || (t = !0), r
          }));
          if (t) return () => {
            for (let n = 0; n < r.length; n++) {
              const t = r[n];
              "function" == typeof t ? t() : o(e[n], null)
            }
          }
        }
      }

      function a(...e) {
        return r.useCallback(i(...e), e)
      }
    },
    49535: (e, n, t) => {
      t.d(n, {
        v6: () => l
      }), t(61155);
      var r = t(5060);
      const o = new Map;

      function i(e, n) {
        if (e === n) return e;
        const t = o.get(e);
        if (t) return t.forEach((e => e(n))), n;
        const r = o.get(n);
        return r ? (r.forEach((n => n(e))), e) : n
      }

      function a(...e) {
        return (...n) => {
          for (const t of e) "function" == typeof t && t(...n)
        }
      }

      function l(...e) {
        const n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          const o = e[t];
          for (const e in o) {
            const t = n[e],
              l = o[e];
            "function" == typeof t && "function" == typeof l && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = a(t, l) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof l ? "id" === e && t && l ? n.id = i(t, l) : n[e] = void 0 !== l ? l : t : n[e] = (0, r.$)(t, l)
          }
        }
        return n
      }
      var s;
      t(7415), t(52953), t(87090), t(98097), t(76030), t(62670), t(54375),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(s || (s = {})), Symbol.toStringTag
    },
    51347: (e, n, t) => {
      t.d(n, {
        hO: () => s,
        sG: () => l
      });
      var r = t(62229),
        o = t(44853),
        i = t(83970),
        a = t(70954),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, n) => {
          const t = (0, i.TL)(`Primitive.${n}`),
            o = r.forwardRef(((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, l = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(l, {
                ...i,
                ref: r
              })
            }));
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }), {});

      function s(e, n) {
        e && o.flushSync((() => e.dispatchEvent(n)))
      }
    },
    61155: (e, n, t) => {},
    83970: (e, n, t) => {
      t.d(n, {
        DX: () => l,
        Dc: () => f,
        TL: () => a,
        xV: () => c
      });
      var r = t(62229),
        o = t(21423),
        i = t(70954);

      function a(e) {
        const n = s(e),
          t = r.forwardRef(((e, t) => {
            const {
              children: o,
              ...a
            } = e, l = r.Children.toArray(o), s = l.find(u);
            if (s) {
              const e = s.props.children,
                o = l.map((n => n === s ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n));
              return (0, i.jsx)(n, {
                ...a,
                ref: t,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, i.jsx)(n, {
              ...a,
              ref: t,
              children: o
            })
          }));
        return t.displayName = `${e}.Slot`, t
      }
      var l = a("Slot");

      function s(e) {
        const n = r.forwardRef(((e, n) => {
          const {
            children: t,
            ...i
          } = e;
          if (r.isValidElement(t)) {
            const e = function(e) {
                let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  t = n && "isReactWarning" in n && n.isReactWarning;
                return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
              }(t),
              a = function(e, n) {
                const t = {
                  ...n
                };
                for (const r in n) {
                  const o = e[r],
                    i = n[r];
                  /^on[A-Z]/.test(r) ? o && i ? t[r] = (...e) => {
                    i(...e), o(...e)
                  } : o && (t[r] = o) : "style" === r ? t[r] = {
                    ...o,
                    ...i
                  } : "className" === r && (t[r] = [o, i].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(i, t.props);
            return t.type !== r.Fragment && (a.ref = n ? (0, o.t)(n, e) : e), r.cloneElement(t, a)
          }
          return r.Children.count(t) > 1 ? r.Children.only(null) : null
        }));
        return n.displayName = `${e}.SlotClone`, n
      }
      var d = Symbol("radix.slottable");

      function f(e) {
        const n = ({
          children: e
        }) => (0, i.jsx)(i.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = d, n
      }
      var c = f("Slottable");

      function u(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === d
      }
    }
  }
]);