try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c3327a53-cefc-4460-ab24-0bc69082e1e0", e._sentryDebugIdIdentifier = "sentry-dbid-c3327a53-cefc-4460-ab24-0bc69082e1e0")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-redemption-2",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_redemption_2 = self.webpackChunk_rockstargames_sites_red_dead_redemption_2 || []).push([
  [1913, 6817], {
    69245(e, n, t) {
      var r = t(71127),
        o = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, n, t) {
        var r, l = {},
          s = null,
          f = null;
        for (r in void 0 !== t && (s = "" + t), void 0 !== n.key && (s = "" + n.key), void 0 !== n.ref && (f = n.ref), n) a.call(n, r) && !d.hasOwnProperty(r) && (l[r] = n[r]);
        if (e && e.defaultProps)
          for (r in n = e.defaultProps) void 0 === l[r] && (l[r] = n[r]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: f,
          props: l,
          _owner: i.current
        }
      }
      n.Fragment = l, n.jsx = s, n.jsxs = s
    },
    42295(e, n, t) {
      e.exports = t(69245)
    },
    71753(e, n, t) {
      t.d(n, {
        b: () => i
      });
      var r = t(71127),
        o = t(48989),
        l = t(42295),
        a = ({
          children: e,
          label: n
        }) => {
          const t = r.Children.only(e);
          return (0, l.jsxs)(l.Fragment, {
            children: [r.cloneElement(t, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, l.jsx)(o.bL, {
              children: n
            })]
          })
        };
      a.displayName = "AccessibleIcon";
      var i = a
    },
    95362(e, n, t) {
      t.d(n, {
        s: () => a,
        t: () => l
      });
      var r = t(71127);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function l(...e) {
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

      function a(...e) {
        return r.useCallback(l(...e), e)
      }
    },
    39447(e, n, t) {
      var r;
      t.d(n, {
        DX: () => c,
        TL: () => f,
        xV: () => b
      });
      var o = t(71127),
        l = t(95362),
        a = t(42295),
        i = Symbol.for("react.lazy"),
        d = (r || (r = t.t(o, 2)))[" use ".trim().toString()];

      function s(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === i && "_payload" in e && "object" == typeof(n = e._payload) && null !== n && "then" in n;
        var n
      }

      function f(e) {
        const n = u(e),
          t = o.forwardRef((e, t) => {
            let {
              children: r,
              ...l
            } = e;
            s(r) && "function" == typeof d && (r = d(r._payload));
            const i = o.Children.toArray(r),
              f = i.find(_);
            if (f) {
              const e = f.props.children,
                r = i.map(n => n === f ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : n);
              return (0, a.jsx)(n, {
                ...l,
                ref: t,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, a.jsx)(n, {
              ...l,
              ref: t,
              children: r
            })
          });
        return t.displayName = `${e}.Slot`, t
      }
      var c = f("Slot");

      function u(e) {
        const n = o.forwardRef((e, n) => {
          let {
            children: t,
            ...r
          } = e;
          if (s(t) && "function" == typeof d && (t = d(t._payload)), o.isValidElement(t)) {
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
                    l = n[r];
                  /^on[A-Z]/.test(r) ? o && l ? t[r] = (...e) => {
                    const n = l(...e);
                    return o(...e), n
                  } : o && (t[r] = o) : "style" === r ? t[r] = {
                    ...o,
                    ...l
                  } : "className" === r && (t[r] = [o, l].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(r, t.props);
            return t.type !== o.Fragment && (a.ref = n ? (0, l.t)(n, e) : e), o.cloneElement(t, a)
          }
          return o.Children.count(t) > 1 ? o.Children.only(null) : null
        });
        return n.displayName = `${e}.SlotClone`, n
      }
      var p = Symbol("radix.slottable");

      function y(e) {
        const n = ({
          children: e
        }) => (0, a.jsx)(a.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = p, n
      }
      var b = y("Slottable");

      function _(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
    },
    48989(e, n, t) {
      t.d(n, {
        bL: () => s,
        s6: () => d
      });
      var r = t(71127),
        o = (t(18429), t(39447)),
        l = t(42295),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, o.TL)(`Primitive.${n}`),
            a = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...a
              } = e, i = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(i, {
                ...a,
                ref: r
              })
            });
          return a.displayName = `Primitive.${n}`, {
            ...e,
            [n]: a
          }
        }, {}),
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
        d = r.forwardRef((e, n) => (0, l.jsx)(a.span, {
          ...e,
          ref: n,
          style: {
            ...i,
            ...e.style
          }
        }));
      d.displayName = "VisuallyHidden";
      var s = d
    }
  }
]);