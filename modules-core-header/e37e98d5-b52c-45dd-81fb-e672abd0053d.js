try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e37e98d5-b52c-45dd-81fb-e672abd0053d", e._sentryDebugIdIdentifier = "sentry-dbid-e37e98d5-b52c-45dd-81fb-e672abd0053d")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [269, 2174, 2471, 4555, 4852, 6936, 9793], {
    94931(e, t, o) {
      var d = o(4637),
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        s = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, t, o) {
        var d, n = {},
          f = null,
          i = null;
        for (d in void 0 !== o && (f = "" + o), void 0 !== t.key && (f = "" + t.key), void 0 !== t.ref && (i = t.ref), t) a.call(t, d) && !l.hasOwnProperty(d) && (n[d] = t[d]);
        if (e && e.defaultProps)
          for (d in t = e.defaultProps) void 0 === n[d] && (n[d] = t[d]);
        return {
          $$typeof: r,
          type: e,
          key: f,
          ref: i,
          props: n,
          _owner: s.current
        }
      }
      t.Fragment = n, t.jsx = f, t.jsxs = f
    },
    39793(e, t, o) {
      e.exports = o(94931)
    },
    62471(e, t, o) {
      o.r(t), o.d(t, {
        Portal: () => i,
        Root: () => u
      });
      var d = o(4637),
        r = o(84017),
        n = o(41988),
        a = o(9608),
        s = o(39793),
        l = Object.defineProperty,
        f = (e, t) => l(e, "name", {
          value: t,
          configurable: !0
        }),
        i = d.forwardRef(f(function(e, t) {
          const {
            container: o,
            ...l
          } = e, [f, i] = d.useState(!1);
          (0, a.N)(() => i(!0), []);
          const u = o || f && globalThis?.document?.body;
          return u ? r.createPortal((0, s.jsx)(n.sG.div, {
            ...l,
            ref: t
          }), u) : null
        }, "Portal")),
        u = i
    },
    41988(e, t, o) {
      o.d(t, {
        hO: () => f,
        sG: () => l
      });
      var d = o(4637),
        r = o(84017),
        n = o(49481),
        a = o(39793),
        s = Object.defineProperty,
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const o = (0, n.createSlot)(`Primitive.${t}`),
            r = d.forwardRef((e, d) => {
              const {
                asChild: r,
                ...n
              } = e, s = r ? o : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(s, {
                ...n,
                ref: d
              })
            });
          return r.displayName = `Primitive.${t}`, {
            ...e,
            [t]: r
          }
        }, {});

      function f(e, t) {
        e && r.flushSync(() => e.dispatchEvent(t))
      }
      s(f, "name", {
        value: "dispatchDiscreteCustomEvent",
        configurable: !0
      })
    },
    9608(e, t, o) {
      o.d(t, {
        N: () => r
      });
      var d = o(4637),
        r = globalThis?.document ? d.useLayoutEffect : () => {}
    }
  }
]);