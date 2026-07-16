try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bca08c8e-60fe-4314-8b22-0fbe354bc15b", e._sentryDebugIdIdentifier = "sentry-dbid-bca08c8e-60fe-4314-8b22-0fbe354bc15b")
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
  [2174, 3165, 9088, 9793], {
    94931(e, t, n) {
      var r = n(93082),
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

      function d(e, t, n) {
        var r, a = {},
          d = null,
          f = null;
        for (r in void 0 !== n && (d = "" + n), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (f = t.ref), t) l.call(t, r) && !s.hasOwnProperty(r) && (a[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
        return {
          $$typeof: o,
          type: e,
          key: d,
          ref: f,
          props: a,
          _owner: i.current
        }
      }
      t.Fragment = a, t.jsx = d, t.jsxs = d
    },
    39793(e, t, n) {
      e.exports = n(94931)
    },
    69088(e, t, n) {
      n.d(t, {
        DX: () => r.DX,
        xV: () => r.xV,
        s6: () => i
      });
      var r = n(17172),
        o = n(39793),
        a = n(93082),
        l = n(84045);
      const i = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? l.s6 : a.Fragment;
        return (0, o.jsx)(n, {
          ...t
        })
      }
    },
    64239(e, t, n) {
      n.d(t, {
        s: () => a
      });
      var r = n(93082);

      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function a(...e) {
        return r.useCallback(function(...e) {
          return t => {
            let n = !1;
            const r = e.map(e => {
              const r = o(e, t);
              return n || "function" != typeof r || (n = !0), r
            });
            if (n) return () => {
              for (let t = 0; t < r.length; t++) {
                const n = r[t];
                "function" == typeof n ? n() : o(e[t], null)
              }
            }
          }
        }(...e), e)
      }
    },
    13165(e, t, n) {
      n.d(t, {
        hO: () => s,
        sG: () => i
      });
      var r = n(93082),
        o = n(84017),
        a = n(17172),
        l = n(39793),
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, a.TL)(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...a
              } = e, i = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(i, {
                ...a,
                ref: r
              })
            });
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }, {});

      function s(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t))
      }
    },
    17172(e, t, n) {
      let r;
      n.d(t, {
        DX: () => i,
        Dc: () => d,
        TL: () => l,
        xV: () => f
      });
      var o = n(93082),
        a = n(64239);

      function l(e) {
        const t = o.forwardRef((t, n) => {
          let {
            children: r,
            ...l
          } = t, i = null, d = !1;
          const f = [];
          u(r) && "function" == typeof g && (r = g(r._payload)), o.Children.forEach(r, e => {
            if (t = e, o.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === s) {
              d = !0;
              const t = e;
              let n = "child" in t.props ? t.props.child : t.props.children;
              u(n) && "function" == typeof g && (n = g(n._payload)), i = c(t, n), f.push(i?.props?.children)
            } else f.push(e);
            var t
          }), i ? i = o.cloneElement(i, void 0, f) : !d && 1 === o.Children.count(r) && o.isValidElement(r) && (i = r);
          const p = i ? function(e) {
              let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                n = t && "isReactWarning" in t && t.isReactWarning;
              return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
            }(i) : void 0,
            h = (0, a.s)(n, p);
          if (!i) {
            if (r || 0 === r) throw new Error(d ? b(e) : y(e));
            return r
          }
          const _ = function(e, t) {
            const n = {
              ...t
            };
            for (const r in t) {
              const o = e[r],
                a = t[r];
              /^on[A-Z]/.test(r) ? o && a ? n[r] = (...e) => {
                const t = a(...e);
                return o(...e), t
              } : o && (n[r] = o) : "style" === r ? n[r] = {
                ...o,
                ...a
              } : "className" === r && (n[r] = [o, a].filter(Boolean).join(" "))
            }
            return {
              ...e,
              ...n
            }
          }(l, i.props ?? {});
          return i.type !== o.Fragment && (_.ref = n ? h : p), o.cloneElement(i, _)
        });
        return t.displayName = `${e}.Slot`, t
      }
      var i = l("Slot"),
        s = Symbol.for("radix.slottable");

      function d(e) {
        const t = e => "child" in e ? e.children(e.child) : e.children;
        return t.displayName = `${e}.Slottable`, t.__radixId = s, t
      }
      var f = d("Slottable"),
        c = (e, t) => {
          if ("child" in e.props) {
            const t = e.props.child;
            return o.isValidElement(t) ? o.cloneElement(t, void 0, e.props.children(t.props.children)) : null
          }
          return o.isValidElement(t) ? t : null
        },
        p = Symbol.for("react.lazy");

      function u(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === p && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }
      var y = e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
        b = e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
        g = (r || (r = n.t(o, 2)))[" use ".trim().toString()]
    },
    84045(e, t, n) {
      n.d(t, {
        Qg: () => l,
        bL: () => s,
        s6: () => i
      });
      var r = n(93082),
        o = n(13165),
        a = n(39793),
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
        i = r.forwardRef((e, t) => (0, a.jsx)(o.sG.span, {
          ...e,
          ref: t,
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