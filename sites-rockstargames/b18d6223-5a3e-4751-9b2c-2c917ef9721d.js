try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b18d6223-5a3e-4751-9b2c-2c917ef9721d", e._sentryDebugIdIdentifier = "sentry-dbid-b18d6223-5a3e-4751-9b2c-2c917ef9721d")
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
  [2295, 4618, 8635], {
    24244: (e, n, t) => {
      t.d(n, {
        v: () => a
      });
      var r = t(4572);
      const o = new Map;

      function i(e, n) {
        if (e === n) return e;
        const t = o.get(e);
        if (t) return t.forEach(e => e(n)), n;
        const r = o.get(n);
        return r ? (r.forEach(n => n(e)), e) : n
      }

      function l(...e) {
        return (...n) => {
          for (const t of e) "function" == typeof t && t(...n)
        }
      }

      function a(...e) {
        const n = {
          ...e[0]
        };
        for (let t = 1; t < e.length; t++) {
          const o = e[t];
          for (const e in o) {
            const t = n[e],
              a = o[e];
            "function" == typeof t && "function" == typeof a && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = l(t, a) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof a ? "id" === e && t && a ? n.id = i(t, a) : n[e] = void 0 !== a ? a : t : n[e] = (0, r.clsx)(t, a)
          }
        }
        return n
      }
    },
    39447: (e, n, t) => {
      t.d(n, {
        DX: () => a,
        Dc: () => c,
        TL: () => l,
        xV: () => f
      });
      var r = t(62229),
        o = t(95362),
        i = t(42295);

      function l(e) {
        const n = s(e),
          t = r.forwardRef((e, t) => {
            const {
              children: o,
              ...l
            } = e, a = r.Children.toArray(o), s = a.find(u);
            if (s) {
              const e = s.props.children,
                o = a.map(n => n === s ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n);
              return (0, i.jsx)(n, {
                ...l,
                ref: t,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, i.jsx)(n, {
              ...l,
              ref: t,
              children: o
            })
          });
        return t.displayName = `${e}.Slot`, t
      }
      var a = l("Slot");

      function s(e) {
        const n = r.forwardRef((e, n) => {
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
              l = function(e, n) {
                const t = {
                  ...n
                };
                for (const r in n) {
                  const o = e[r],
                    i = n[r];
                  /^on[A-Z]/.test(r) ? o && i ? t[r] = (...e) => {
                    const n = i(...e);
                    return o(...e), n
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
            return t.type !== r.Fragment && (l.ref = n ? (0, o.t)(n, e) : e), r.cloneElement(t, l)
          }
          return r.Children.count(t) > 1 ? r.Children.only(null) : null
        });
        return n.displayName = `${e}.SlotClone`, n
      }
      var d = Symbol("radix.slottable");

      function c(e) {
        const n = ({
          children: e
        }) => (0, i.jsx)(i.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = d, n
      }
      var f = c("Slottable");

      function u(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === d
      }
    },
    42295: (e, n, t) => {
      e.exports = t(69245)
    },
    43778: (e, n, t) => {},
    69055: (e, n, t) => {
      t.d(n, {
        Qg: () => l,
        bL: () => s,
        s6: () => a
      });
      var r = t(62229),
        o = t(78004),
        i = t(42295),
        l = Object.freeze({
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
        a = r.forwardRef((e, n) => (0, i.jsx)(o.sG.span, {
          ...e,
          ref: n,
          style: {
            ...l,
            ...e.style
          }
        }));
      a.displayName = "VisuallyHidden";
      var s = a
    },
    69245: (e, n, t) => {
      var r = t(62229),
        o = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, n, t) {
        var r, i = {},
          d = null,
          c = null;
        for (r in void 0 !== t && (d = "" + t), void 0 !== n.key && (d = "" + n.key), void 0 !== n.ref && (c = n.ref), n) l.call(n, r) && !s.hasOwnProperty(r) && (i[r] = n[r]);
        if (e && e.defaultProps)
          for (r in n = e.defaultProps) void 0 === i[r] && (i[r] = n[r]);
        return {
          $$typeof: o,
          type: e,
          key: d,
          ref: c,
          props: i,
          _owner: a.current
        }
      }
      n.Fragment = i, n.jsx = d, n.jsxs = d
    },
    71753: (e, n, t) => {
      t.d(n, {
        b: () => a
      });
      var r = t(62229),
        o = t(69055),
        i = t(42295),
        l = ({
          children: e,
          label: n
        }) => {
          const t = r.Children.only(e);
          return (0, i.jsxs)(i.Fragment, {
            children: [r.cloneElement(t, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, i.jsx)(o.bL, {
              children: n
            })]
          })
        };
      l.displayName = "AccessibleIcon";
      var a = l
    },
    78004: (e, n, t) => {
      t.d(n, {
        hO: () => s,
        sG: () => a
      });
      var r = t(62229),
        o = t(91082),
        i = t(39447),
        l = t(42295),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, i.TL)(`Primitive.${n}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, a = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(a, {
                ...i,
                ref: r
              })
            });
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }, {});

      function s(e, n) {
        e && o.flushSync(() => e.dispatchEvent(n))
      }
    },
    90744: (e, n, t) => {
      t.d(n, {
        VW: () => a,
        v6: () => r.v,
        cJ: () => l
      }), t(43778);
      var r = t(24244);
      t(98312);
      var o, i = t(41972);

      function l(e, ...n) {
        return i(e, ...n)
      }
      t(56265), t(31454), t(10533), t(10613), t(9738),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(o || (o = {})), Symbol.toStringTag;
      const a = (...e) => e.filter(e => e).join(" ")
    },
    95362: (e, n, t) => {
      t.d(n, {
        s: () => l,
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
          const r = e.map(e => {
            const r = o(e, n);
            return t || "function" != typeof r || (t = !0), r
          });
          if (t) return () => {
            for (let n = 0; n < r.length; n++) {
              const t = r[n];
              "function" == typeof t ? t() : o(e[n], null)
            }
          }
        }
      }

      function l(...e) {
        return r.useCallback(i(...e), e)
      }
    }
  }
]);