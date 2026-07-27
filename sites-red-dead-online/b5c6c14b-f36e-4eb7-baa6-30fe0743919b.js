try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b5c6c14b-f36e-4eb7-baa6-30fe0743919b", e._sentryDebugIdIdentifier = "sentry-dbid-b5c6c14b-f36e-4eb7-baa6-30fe0743919b")
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
  [7018, 8144], {
    94931(e, n, t) {
      var r = t(93082),
        o = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, n, t) {
        var r, l = {},
          s = null,
          c = null;
        for (r in void 0 !== t && (s = "" + t), void 0 !== n.key && (s = "" + n.key), void 0 !== n.ref && (c = n.ref), n) i.call(n, r) && !d.hasOwnProperty(r) && (l[r] = n[r]);
        if (e && e.defaultProps)
          for (r in n = e.defaultProps) void 0 === l[r] && (l[r] = n[r]);
        return {
          $$typeof: o,
          type: e,
          key: s,
          ref: c,
          props: l,
          _owner: a.current
        }
      }
      n.Fragment = l, n.jsx = s, n.jsxs = s
    },
    39793(e, n, t) {
      e.exports = t(94931)
    },
    51817(e, n, t) {
      t.d(n, {
        b: () => a
      });
      var r = t(93082),
        o = t(32637),
        l = t(39793),
        i = ({
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
      i.displayName = "AccessibleIcon";
      var a = i
    },
    64239(e, n, t) {
      t.d(n, {
        s: () => l
      });
      var r = t(93082);

      function o(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function l(...e) {
        return r.useCallback(function(...e) {
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
        }(...e), e)
      }
    },
    31270(e, n, t) {
      t.d(n, {
        hO: () => d,
        sG: () => a
      });
      var r = t(93082),
        o = t(84017),
        l = t(17172),
        i = t(39793),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, l.TL)(`Primitive.${n}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...l
              } = e, a = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(a, {
                ...l,
                ref: r
              })
            });
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }, {});

      function d(e, n) {
        e && o.flushSync(() => e.dispatchEvent(n))
      }
    },
    17172(e, n, t) {
      let r;
      t.d(n, {
        DX: () => a,
        Dc: () => s,
        TL: () => i,
        xV: () => c
      });
      var o = t(93082),
        l = t(64239);

      function i(e) {
        const n = o.forwardRef((n, t) => {
          let {
            children: r,
            ...i
          } = n, a = null, s = !1;
          const c = [];
          u(r) && "function" == typeof h && (r = h(r._payload)), o.Children.forEach(r, e => {
            if (n = e, o.isValidElement(n) && "function" == typeof n.type && "__radixId" in n.type && n.type.__radixId === d) {
              s = !0;
              const n = e;
              let t = "child" in n.props ? n.props.child : n.props.children;
              u(t) && "function" == typeof h && (t = h(t._payload)), a = f(n, t), c.push(a?.props?.children)
            } else c.push(e);
            var n
          }), a ? a = o.cloneElement(a, void 0, c) : !s && 1 === o.Children.count(r) && o.isValidElement(r) && (a = r);
          const p = a ? function(e) {
              let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                t = n && "isReactWarning" in n && n.isReactWarning;
              return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
            }(a) : void 0,
            _ = (0, l.s)(t, p);
          if (!a) {
            if (r || 0 === r) throw new Error(s ? b(e) : y(e));
            return r
          }
          const g = function(e, n) {
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
          }(i, a.props ?? {});
          return a.type !== o.Fragment && (g.ref = t ? _ : p), o.cloneElement(a, g)
        });
        return n.displayName = `${e}.Slot`, n
      }
      var a = i("Slot"),
        d = Symbol.for("radix.slottable");

      function s(e) {
        const n = e => "child" in e ? e.children(e.child) : e.children;
        return n.displayName = `${e}.Slottable`, n.__radixId = d, n
      }
      var c = s("Slottable"),
        f = (e, n) => {
          if ("child" in e.props) {
            const n = e.props.child;
            return o.isValidElement(n) ? o.cloneElement(n, void 0, e.props.children(n.props.children)) : null
          }
          return o.isValidElement(n) ? n : null
        },
        p = Symbol.for("react.lazy");

      function u(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === p && "_payload" in e && "object" == typeof(n = e._payload) && null !== n && "then" in n;
        var n
      }
      var y = e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
        b = e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
        h = (r || (r = t.t(o, 2)))[" use ".trim().toString()]
    },
    32637(e, n, t) {
      t.d(n, {
        Qg: () => i,
        bL: () => d,
        s6: () => a
      });
      var r = t(93082),
        o = t(31270),
        l = t(39793),
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
        a = r.forwardRef((e, n) => (0, l.jsx)(o.sG.span, {
          ...e,
          ref: n,
          style: {
            ...i,
            ...e.style
          }
        }));
      a.displayName = "VisuallyHidden";
      var d = a
    }
  }
]);