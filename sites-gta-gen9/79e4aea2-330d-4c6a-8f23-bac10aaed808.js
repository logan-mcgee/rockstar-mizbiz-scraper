try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "79e4aea2-330d-4c6a-8f23-bac10aaed808", e._sentryDebugIdIdentifier = "sentry-dbid-79e4aea2-330d-4c6a-8f23-bac10aaed808")
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
  [2174, 4435, 4555, 9793], {
    94931(e, t, n) {
      var o = n(93082),
        r = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        i = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        d = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, t, n) {
        var o, l = {},
          s = null,
          f = null;
        for (o in void 0 !== n && (s = "" + n), void 0 !== t.key && (s = "" + t.key), void 0 !== t.ref && (f = t.ref), t) a.call(t, o) && !d.hasOwnProperty(o) && (l[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === l[o] && (l[o] = t[o]);
        return {
          $$typeof: r,
          type: e,
          key: s,
          ref: f,
          props: l,
          _owner: i.current
        }
      }
      t.Fragment = l, t.jsx = s, t.jsxs = s
    },
    39793(e, t, n) {
      e.exports = n(94931)
    },
    64239(e, t, n) {
      n.d(t, {
        s: () => l
      });
      var o = n(93082);

      function r(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function l(...e) {
        return o.useCallback(function(...e) {
          return t => {
            let n = !1;
            const o = e.map(e => {
              const o = r(e, t);
              return n || "function" != typeof o || (n = !0), o
            });
            if (n) return () => {
              for (let t = 0; t < o.length; t++) {
                const n = o[t];
                "function" == typeof n ? n() : r(e[t], null)
              }
            }
          }
        }(...e), e)
      }
    },
    94435(e, t, n) {
      n.d(t, {
        hO: () => d,
        sG: () => i
      });
      var o = n(93082),
        r = n(84017),
        l = n(17172),
        a = n(39793),
        i = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, l.TL)(`Primitive.${t}`),
            r = o.forwardRef((e, o) => {
              const {
                asChild: r,
                ...l
              } = e, i = r ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(i, {
                ...l,
                ref: o
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {});

      function d(e, t) {
        e && r.flushSync(() => e.dispatchEvent(t))
      }
    },
    17172(e, t, n) {
      let o;
      n.d(t, {
        DX: () => i,
        Dc: () => s,
        TL: () => a,
        xV: () => f
      });
      var r = n(93082),
        l = n(64239);

      function a(e) {
        const t = r.forwardRef((t, n) => {
          let {
            children: o,
            ...a
          } = t, i = null, s = !1;
          const f = [];
          u(o) && "function" == typeof g && (o = g(o._payload)), r.Children.forEach(o, e => {
            if (t = e, r.isValidElement(t) && "function" == typeof t.type && "__radixId" in t.type && t.type.__radixId === d) {
              s = !0;
              const t = e;
              let n = "child" in t.props ? t.props.child : t.props.children;
              u(n) && "function" == typeof g && (n = g(n._payload)), i = c(t, n), f.push(i?.props?.children)
            } else f.push(e);
            var t
          }), i ? i = r.cloneElement(i, void 0, f) : !s && 1 === r.Children.count(o) && r.isValidElement(o) && (i = o);
          const p = i ? function(e) {
              let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                n = t && "isReactWarning" in t && t.isReactWarning;
              return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
            }(i) : void 0,
            h = (0, l.s)(n, p);
          if (!i) {
            if (o || 0 === o) throw new Error(s ? b(e) : y(e));
            return o
          }
          const _ = function(e, t) {
            const n = {
              ...t
            };
            for (const o in t) {
              const r = e[o],
                l = t[o];
              /^on[A-Z]/.test(o) ? r && l ? n[o] = (...e) => {
                const t = l(...e);
                return r(...e), t
              } : r && (n[o] = r) : "style" === o ? n[o] = {
                ...r,
                ...l
              } : "className" === o && (n[o] = [r, l].filter(Boolean).join(" "))
            }
            return {
              ...e,
              ...n
            }
          }(a, i.props ?? {});
          return i.type !== r.Fragment && (_.ref = n ? h : p), r.cloneElement(i, _)
        });
        return t.displayName = `${e}.Slot`, t
      }
      var i = a("Slot"),
        d = Symbol.for("radix.slottable");

      function s(e) {
        const t = e => "child" in e ? e.children(e.child) : e.children;
        return t.displayName = `${e}.Slottable`, t.__radixId = d, t
      }
      var f = s("Slottable"),
        c = (e, t) => {
          if ("child" in e.props) {
            const t = e.props.child;
            return r.isValidElement(t) ? r.cloneElement(t, void 0, e.props.children(t.props.children)) : null
          }
          return r.isValidElement(t) ? t : null
        },
        p = Symbol.for("react.lazy");

      function u(e) {
        return null != e && "object" == typeof e && "$$typeof" in e && e.$$typeof === p && "_payload" in e && "object" == typeof(t = e._payload) && null !== t && "then" in t;
        var t
      }
      var y = e => `${e} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
        b = e => `${e} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
        g = (o || (o = n.t(r, 2)))[" use ".trim().toString()]
    }
  }
]);