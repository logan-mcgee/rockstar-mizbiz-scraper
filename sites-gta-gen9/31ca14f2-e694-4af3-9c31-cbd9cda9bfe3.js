try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "31ca14f2-e694-4af3-9c31-cbd9cda9bfe3", e._sentryDebugIdIdentifier = "sentry-dbid-31ca14f2-e694-4af3-9c31-cbd9cda9bfe3")
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
  [2295, 4408], {
    4408: (e, n, t) => {
      t.d(n, {
        DX: () => c,
        xV: () => b,
        s6: () => w
      });
      var r = t(71127),
        o = t.t(r, 2),
        a = t(95362),
        l = t(42295),
        i = Symbol.for("react.lazy"),
        s = o[" use ".trim().toString()];

      function f(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === i && "_payload" in e && "object" == typeof(n = e._payload) && null !== n && "then" in n;
        var n
      }

      function d(e) {
        const n = u(e),
          t = r.forwardRef((e, t) => {
            let {
              children: o,
              ...a
            } = e;
            f(o) && "function" == typeof s && (o = s(o._payload));
            const i = r.Children.toArray(o),
              d = i.find(g);
            if (d) {
              const e = d.props.children,
                o = i.map(n => n === d ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : n);
              return (0, l.jsx)(n, {
                ...a,
                ref: t,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, l.jsx)(n, {
              ...a,
              ref: t,
              children: o
            })
          });
        return t.displayName = `${e}.Slot`, t
      }
      var c = d("Slot");

      function u(e) {
        const n = r.forwardRef((e, n) => {
          let {
            children: t,
            ...o
          } = e;
          if (f(t) && "function" == typeof s && (t = s(t._payload)), r.isValidElement(t)) {
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
              }(o, t.props);
            return t.type !== r.Fragment && (l.ref = n ? (0, a.t)(n, e) : e), r.cloneElement(t, l)
          }
          return r.Children.count(t) > 1 ? r.Children.only(null) : null
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
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === p
      }
      t(18429);
      var _ = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = d(`Primitive.${n}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...a
              } = e, i = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(i, {
                ...a,
                ref: r
              })
            });
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }, {}),
        h = Object.freeze({
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
        m = r.forwardRef((e, n) => (0, l.jsx)(_.span, {
          ...e,
          ref: n,
          style: {
            ...h,
            ...e.style
          }
        }));
      m.displayName = "VisuallyHidden";
      const w = ({
        enabled: e = !0,
        ...n
      }) => {
        const t = e ? m : r.Fragment;
        return (0, l.jsx)(t, {
          ...n
        })
      }
    },
    42295: (e, n, t) => {
      e.exports = t(69245)
    },
    69245: (e, n, t) => {
      var r = t(71127),
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

      function f(e, n, t) {
        var r, a = {},
          f = null,
          d = null;
        for (r in void 0 !== t && (f = "" + t), void 0 !== n.key && (f = "" + n.key), void 0 !== n.ref && (d = n.ref), n) l.call(n, r) && !s.hasOwnProperty(r) && (a[r] = n[r]);
        if (e && e.defaultProps)
          for (r in n = e.defaultProps) void 0 === a[r] && (a[r] = n[r]);
        return {
          $$typeof: o,
          type: e,
          key: f,
          ref: d,
          props: a,
          _owner: i.current
        }
      }
      n.Fragment = a, n.jsx = f, n.jsxs = f
    },
    95362: (e, n, t) => {
      t.d(n, {
        s: () => l,
        t: () => a
      });
      var r = t(71127);

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
    }
  }
]);