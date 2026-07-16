try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "136fe273-5054-4f9a-92d3-1ab0c59a4790", e._sentryDebugIdIdentifier = "sentry-dbid-136fe273-5054-4f9a-92d3-1ab0c59a4790")
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
  [2796, 3868], {
    94931(e, n, t) {
      var r = t(93082),
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
    39793(e, n, t) {
      e.exports = t(94931)
    },
    36551(e, n, t) {
      t.d(n, {
        b: () => i
      });
      var r = t(93082),
        o = t(92023),
        l = t(39793),
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
    80082(e, n, t) {
      t.d(n, {
        hO: () => d,
        sG: () => i
      });
      var r = t(93082),
        o = t(84017),
        l = t(17172),
        a = t(39793),
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, l.TL)(`Primitive.${n}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...l
              } = e, i = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(i, {
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
        DX: () => i,
        Dc: () => s,
        TL: () => a,
        xV: () => f
      });
      var o = t(93082),
        l = t(64239);

      function a(e) {
        const n = o.forwardRef((n, t) => {
          let {
            children: r,
            ...a
          } = n, i = null, s = !1;
          const f = [];
          u(r) && "function" == typeof b && (r = b(r._payload)), o.Children.forEach(r, e => {
            if (n = e, o.isValidElement(n) && "function" == typeof n.type && "__radixId" in n.type && n.type.__radixId === d) {
              s = !0;
              const n = e;
              let t = "child" in n.props ? n.props.child : n.props.children;
              u(t) && "function" == typeof b && (t = b(t._payload)), i = c(n, t), f.push(i?.props?.children)
            } else f.push(e);
            var n
          }), i ? i = o.cloneElement(i, void 0, f) : !s && 1 === o.Children.count(r) && o.isValidElement(r) && (i = r);
          const p = i ? function(e) {
              let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                t = n && "isReactWarning" in n && n.isReactWarning;
              return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
            }(i) : void 0,
            _ = (0, l.s)(t, p);
          if (!i) {
            if (r || 0 === r) throw new Error(s ? h(e) : y(e));
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
          }(a, i.props ?? {});
          return i.type !== o.Fragment && (g.ref = t ? _ : p), o.cloneElement(i, g)
        });
        return n.displayName = `${e}.Slot`, n
      }
      var i = a("Slot"),
        d = Symbol.for("radix.slottable");

      function s(e) {
        const n = e => "child" in e ? e.children(e.child) : e.children;
        return n.displayName = `${e}.Slottable`, n.__radixId = d, n
      }
      var f = s("Slottable"),
        c = (e, n) => {
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
        h = e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
        b = (r || (r = t.t(o, 2)))[" use ".trim().toString()]
    },
    92023(e, n, t) {
      t.d(n, {
        Qg: () => a,
        bL: () => d,
        s6: () => i
      });
      var r = t(93082),
        o = t(80082),
        l = t(39793),
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
        i = r.forwardRef((e, n) => (0, l.jsx)(o.sG.span, {
          ...e,
          ref: n,
          style: {
            ...a,
            ...e.style
          }
        }));
      i.displayName = "VisuallyHidden";
      var d = i
    }
  }
]);