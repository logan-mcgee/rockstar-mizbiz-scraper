try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "98d080c9-16b6-4095-a8ed-5c5ee512caa6", e._sentryDebugIdIdentifier = "sentry-dbid-98d080c9-16b6-4095-a8ed-5c5ee512caa6")
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
  [4173, 9793], {
    94931(e, n, t) {
      var r = t(93082),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
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
        for (r in void 0 !== t && (d = "" + t), void 0 !== n.key && (d = "" + n.key), void 0 !== n.ref && (f = n.ref), n) l.call(n, r) && !s.hasOwnProperty(r) && (a[r] = n[r]);
        if (e && e.defaultProps)
          for (r in n = e.defaultProps) void 0 === a[r] && (a[r] = n[r]);
        return {
          $$typeof: o,
          type: e,
          key: d,
          ref: f,
          props: a,
          _owner: i.current
        }
      }
      n.Fragment = a, n.jsx = d, n.jsxs = d
    },
    39793(e, n, t) {
      e.exports = t(94931)
    },
    84173(e, n, t) {
      t.d(n, {
        DX: () => r.DX,
        xV: () => r.xV,
        s6: () => i
      });
      var r = t(38957),
        o = t(39793),
        a = t(93082),
        l = t(3541);
      const i = ({
        enabled: e = !0,
        ...n
      }) => {
        const t = e ? l.s6 : a.Fragment;
        return (0, o.jsx)(t, {
          ...n
        })
      }
    },
    50446(e, n, t) {
      t.d(n, {
        s: () => l,
        t: () => a
      });
      var r = t(93082);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function a(...e) {
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
        return r.useCallback(a(...e), e)
      }
    },
    20972(e, n, t) {
      t.d(n, {
        sG: () => l
      });
      var r = t(93082),
        o = (t(84017), t(38957)),
        a = t(39793),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, o.TL)(`Primitive.${n}`),
            l = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...l
              } = e, i = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(i, {
                ...l,
                ref: r
              })
            });
          return l.displayName = `Primitive.${n}`, {
            ...e,
            [n]: l
          }
        }, {})
    },
    38957(e, n, t) {
      var r;
      t.d(n, {
        DX: () => c,
        TL: () => f,
        xV: () => b
      });
      var o = t(93082),
        a = t(50446),
        l = t(39793),
        i = Symbol.for("react.lazy"),
        s = (r || (r = t.t(o, 2)))[" use ".trim().toString()];

      function d(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === i && "_payload" in e && "object" == typeof(n = e._payload) && null !== n && "then" in n;
        var n
      }

      function f(e) {
        const n = u(e),
          t = o.forwardRef((e, t) => {
            let {
              children: r,
              ...a
            } = e;
            d(r) && "function" == typeof s && (r = s(r._payload));
            const i = o.Children.toArray(r),
              f = i.find(g);
            if (f) {
              const e = f.props.children,
                r = i.map(n => n === f ? o.Children.count(e) > 1 ? o.Children.only(null) : o.isValidElement(e) ? e.props.children : null : n);
              return (0, l.jsx)(n, {
                ...a,
                ref: t,
                children: o.isValidElement(e) ? o.cloneElement(e, void 0, r) : null
              })
            }
            return (0, l.jsx)(n, {
              ...a,
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
          if (d(t) && "function" == typeof s && (t = s(t._payload)), o.isValidElement(t)) {
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
                    a = n[r];
                  /^on[A-Z]/.test(r) ? o && a ? t[r] = (...e) => {
                    const n = a(...e);
                    return o(...e), n
                  } : o && (t[r] = o) : "style" === r ? t[r] = {
                    ...o,
                    ...a
                  } : "className" === r && (t[r] = [o, a].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...t
                }
              }(r, t.props);
            return t.type !== o.Fragment && (l.ref = n ? (0, a.t)(n, e) : e), o.cloneElement(t, l)
          }
          return o.Children.count(t) > 1 ? o.Children.only(null) : null
        });
        return n.displayName = `${e}.SlotClone`, n
      }
      var p = Symbol("radix.slottable");

      function y(e) {
        const n = ({
          children: e
        }) => (0, l.jsx)(l.Fragment, {
          children: e
        });
        return n.displayName = `${e}.Slottable`, n.__radixId = p, n
      }
      var b = y("Slottable");

      function g(e) {
        return o.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
    },
    3541(e, n, t) {
      t.d(n, {
        bL: () => s,
        s6: () => i
      });
      var r = t(93082),
        o = t(20972),
        a = t(39793),
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
        i = r.forwardRef((e, n) => (0, a.jsx)(o.sG.span, {
          ...e,
          ref: n,
          style: {
            ...l,
            ...e.style
          }
        }));
      i.displayName = "VisuallyHidden";
      var s = i
    }
  }
]);