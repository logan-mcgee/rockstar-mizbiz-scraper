try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ca071696-fcff-47a2-a93b-c4db849d84c7", e._sentryDebugIdIdentifier = "sentry-dbid-ca071696-fcff-47a2-a93b-c4db849d84c7")
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
  [137, 868], {
    69309(e, n, t) {
      const o = "undefined" == typeof window;
      t.d(n, ["X", 0, o])
    },
    38542(e, n, t) {
      t.d(n, {
        X3: () => o.X,
        IO: () => l,
        v6: () => i.v
      });
      var o = t(69309);
      const r = e => e - .02;
      r(768), r(1440), r(1920), r(2560);
      var i = t(6675);
      const a = "__FOUNDRY_ACCENT__",
        l = (e, n) => o.X ? n() : (window[a] || (window[a] = new Map), window[a].has(e) || window[a].set(e, n()), window[a].get(e));
      var d;
      t(68309), t(15963), t(54028), t(74143), t(88584), t(73892), t(54389),
        function(e) {
          e.Pending = "pending", e.Fulfilled = "fulfilled", e.Rejected = "rejected"
        }(d || (d = {})), Symbol.toStringTag
    },
    6675(e, n, t) {
      t.d(n, {
        v: () => l
      });
      var o = t(81270);
      const r = new Map;

      function i(e, n) {
        if (e === n) return e;
        const t = r.get(e);
        if (t) return t.forEach(e => e(n)), n;
        const o = r.get(n);
        return o ? (o.forEach(n => n(e)), e) : n
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
          const r = e[t];
          for (const e in r) {
            const t = n[e],
              l = r[e];
            "function" == typeof t && "function" == typeof l && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? n[e] = a(t, l) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof t || "string" != typeof l ? "id" === e && t && l ? n.id = i(t, l) : n[e] = void 0 !== l ? l : t : n[e] = (0, o.clsx)(t, l)
          }
        }
        return n
      }
    },
    60149(e, n, t) {
      t.d(n, {
        b: () => f
      });
      var o = t(93082),
        r = (t(84017), t(17172)),
        i = t(39793),
        a = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, n) => {
          const t = (0, r.TL)(`Primitive.${n}`),
            a = o.forwardRef((e, o) => {
              const {
                asChild: r,
                ...a
              } = e, l = r ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(l, {
                ...a,
                ref: o
              })
            });
          return a.displayName = `Primitive.${n}`, {
            ...e,
            [n]: a
          }
        }, {}),
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
        d = o.forwardRef((e, n) => (0, i.jsx)(a.span, {
          ...e,
          ref: n,
          style: {
            ...l,
            ...e.style
          }
        }));
      d.displayName = "VisuallyHidden";
      var s = d,
        c = ({
          children: e,
          label: n
        }) => {
          const t = o.Children.only(e);
          return (0, i.jsxs)(i.Fragment, {
            children: [o.cloneElement(t, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, i.jsx)(s, {
              children: n
            })]
          })
        };
      c.displayName = "AccessibleIcon";
      var f = c
    },
    64239(e, n, t) {
      t.d(n, {
        s: () => i
      });
      var o = t(93082);

      function r(e, n) {
        if ("function" == typeof e) return e(n);
        null != e && (e.current = n)
      }

      function i(...e) {
        return o.useCallback(function(...e) {
          return n => {
            let t = !1;
            const o = e.map(e => {
              const o = r(e, n);
              return t || "function" != typeof o || (t = !0), o
            });
            if (t) return () => {
              for (let n = 0; n < o.length; n++) {
                const t = o[n];
                "function" == typeof t ? t() : r(e[n], null)
              }
            }
          }
        }(...e), e)
      }
    },
    17172(e, n, t) {
      let o;
      t.d(n, {
        DX: () => l,
        Dc: () => s,
        TL: () => a,
        xV: () => c
      });
      var r = t(93082),
        i = t(64239);

      function a(e) {
        const n = r.forwardRef((n, t) => {
          let {
            children: o,
            ...a
          } = n, l = null, s = !1;
          const c = [];
          u(o) && "function" == typeof g && (o = g(o._payload)), r.Children.forEach(o, e => {
            if (n = e, r.isValidElement(n) && "function" == typeof n.type && "__radixId" in n.type && n.type.__radixId === d) {
              s = !0;
              const n = e;
              let t = "child" in n.props ? n.props.child : n.props.children;
              u(t) && "function" == typeof g && (t = g(t._payload)), l = f(n, t), c.push(l?.props?.children)
            } else c.push(e);
            var n
          }), l ? l = r.cloneElement(l, void 0, c) : !s && 1 === r.Children.count(o) && r.isValidElement(o) && (l = o);
          const p = l ? function(e) {
              let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                t = n && "isReactWarning" in n && n.isReactWarning;
              return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
            }(l) : void 0,
            b = (0, i.s)(t, p);
          if (!l) {
            if (o || 0 === o) throw new Error(s ? h(e) : y(e));
            return o
          }
          const w = function(e, n) {
            const t = {
              ...n
            };
            for (const o in n) {
              const r = e[o],
                i = n[o];
              /^on[A-Z]/.test(o) ? r && i ? t[o] = (...e) => {
                const n = i(...e);
                return r(...e), n
              } : r && (t[o] = r) : "style" === o ? t[o] = {
                ...r,
                ...i
              } : "className" === o && (t[o] = [r, i].filter(Boolean).join(" "))
            }
            return {
              ...e,
              ...t
            }
          }(a, l.props ?? {});
          return l.type !== r.Fragment && (w.ref = t ? b : p), r.cloneElement(l, w)
        });
        return n.displayName = `${e}.Slot`, n
      }
      var l = a("Slot"),
        d = Symbol.for("radix.slottable");

      function s(e) {
        const n = e => "child" in e ? e.children(e.child) : e.children;
        return n.displayName = `${e}.Slottable`, n.__radixId = d, n
      }
      var c = s("Slottable"),
        f = (e, n) => {
          if ("child" in e.props) {
            const n = e.props.child;
            return r.isValidElement(n) ? r.cloneElement(n, void 0, e.props.children(n.props.children)) : null
          }
          return r.isValidElement(n) ? n : null
        },
        p = Symbol.for("react.lazy");

      function u(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === p && "_payload" in e && "object" == typeof(n = e._payload) && null !== n && "then" in n;
        var n
      }
      var y = e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
        h = e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
        g = (o || (o = t.t(r, 2)))[" use ".trim().toString()]
    }
  }
]);