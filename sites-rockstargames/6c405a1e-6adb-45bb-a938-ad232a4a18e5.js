try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6c405a1e-6adb-45bb-a938-ad232a4a18e5", e._sentryDebugIdIdentifier = "sentry-dbid-6c405a1e-6adb-45bb-a938-ad232a4a18e5")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1695, 2295, 8592], {
    6521: (e, n, t) => {},
    11394: (e, n, t) => {
      t.d(n, {
        v6: () => o.v
      }), t(6521);
      var r, o = t(43607);
      t(98312), t(41972), t(56265), t(31454), t(10533), t(10613), t(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(r || (r = {})), Symbol.toStringTag
    },
    39447: (e, n, t) => {
      t.d(n, {
        DX: () => l,
        Dc: () => f,
        TL: () => i,
        xV: () => c
      });
      var r = t(62229),
        o = t(95362),
        a = t(42295);

      function i(e) {
        const n = s(e),
          t = r.forwardRef(((e, t) => {
            const {
              children: o,
              ...i
            } = e, l = r.Children.toArray(o), s = l.find(u);
            if (s) {
              const e = s.props.children,
                o = l.map((n => n === s ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n));
              return (0, a.jsx)(n, {
                ...i,
                ref: t,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, a.jsx)(n, {
              ...i,
              ref: t,
              children: o
            })
          }));
        return t.displayName = `${e}.Slot`, t
      }
      var l = i("Slot");

      function s(e) {
        const n = r.forwardRef(((e, n) => {
          const {
            children: t,
            ...a
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
                  const o = e[r],
                    a = n[r];
                  /^on[A-Z]/.test(r) ? o && a ? t[r] = (...e) => {
                    a(...e), o(...e)
                  } : o && (t[r] = o) : "style" === r ? t[r] = {
                    ...o,
                    ...a
                  } : "className" === r && (t[r] = [o, a].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(a, t.props);
            return t.type !== r.Fragment && (i.ref = n ? (0, o.t)(n, e) : e), r.cloneElement(t, i)
          }
          return r.Children.count(t) > 1 ? r.Children.only(null) : null
        }));
        return n.displayName = `${e}.SlotClone`, n
      }
      var d = Symbol("radix.slottable");

      function f(e) {
        const n = ({
          children: e
        }) => (0, a.jsx)(a.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = d, n
      }
      var c = f("Slottable");

      function u(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === d
      }
    },
    42295: (e, n, t) => {
      e.exports = t(69245)
    },
    43607: (e, n, t) => {
      t.d(n, {
        v: () => l
      });
      var r = t(4572);
      const o = new Map;

      function a(e, n) {
        if (e === n) return e;
        const t = o.get(e);
        if (t) return t.forEach((e => e(n))), n;
        const r = o.get(n);
        return r ? (r.forEach((n => n(e))), e) : n
      }

      function i(...e) {
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
            "function" == typeof t && "function" == typeof l && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = i(t, l) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof l ? "id" === e && t && l ? n.id = a(t, l) : n[e] = void 0 !== l ? l : t : n[e] = (0, r.clsx)(t, l)
          }
        }
        return n
      }
    },
    69055: (e, n, t) => {
      t.d(n, {
        Qg: () => i,
        bL: () => s,
        s6: () => l
      });
      var r = t(62229),
        o = t(78004),
        a = t(42295),
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
        l = r.forwardRef(((e, n) => (0, a.jsx)(o.sG.span, {
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
    69245: (e, n, t) => {
      var r = t(62229),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, n, t) {
        var r, a = {},
          d = null,
          f = null;
        for (r in void 0 !== t && (d = "" + t), void 0 !== n.key && (d = "" + n.key), void 0 !== n.ref && (f = n.ref), n) i.call(n, r) && !s.hasOwnProperty(r) && (a[r] = n[r]);
        if (e && e.defaultProps)
          for (r in n = e.defaultProps) void 0 === a[r] && (a[r] = n[r]);
        return {
          $$typeof: o,
          type: e,
          key: d,
          ref: f,
          props: a,
          _owner: l.current
        }
      }
      n.Fragment = a, n.jsx = d, n.jsxs = d
    },
    78004: (e, n, t) => {
      t.d(n, {
        hO: () => s,
        sG: () => l
      });
      var r = t(62229),
        o = t(44853),
        a = t(39447),
        i = t(42295),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, n) => {
          const t = (0, a.TL)(`Primitive.${n}`),
            o = r.forwardRef(((e, r) => {
              const {
                asChild: o,
                ...a
              } = e, l = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(l, {
                ...a,
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
    95362: (e, n, t) => {
      t.d(n, {
        s: () => i,
        t: () => a
      });
      var r = t(62229);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function a(...e) {
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

      function i(...e) {
        return r.useCallback(a(...e), e)
      }
    }
  }
]);