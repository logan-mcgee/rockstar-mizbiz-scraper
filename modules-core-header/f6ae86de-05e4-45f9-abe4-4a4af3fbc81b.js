try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "f6ae86de-05e4-45f9-abe4-4a4af3fbc81b", e._sentryDebugIdIdentifier = "sentry-dbid-f6ae86de-05e4-45f9-abe4-4a4af3fbc81b")
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
  [2295, 4676, 5515, 7896], {
    23846: (e, a, o) => {
      o.d(a, {
        hO: () => s,
        sG: () => f
      });
      var t = o(71127),
        r = o(18429),
        n = o(12878),
        d = o(42295),
        f = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, a) => {
          const o = (0, n.createSlot)(`Primitive.${a}`),
            r = t.forwardRef((e, t) => {
              const {
                asChild: r,
                ...n
              } = e, f = r ? o : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, d.jsx)(f, {
                ...n,
                ref: t
              })
            });
          return r.displayName = `Primitive.${a}`, {
            ...e,
            [a]: r
          }
        }, {});

      function s(e, a) {
        e && r.flushSync(() => e.dispatchEvent(a))
      }
    },
    42295: (e, a, o) => {
      e.exports = o(69245)
    },
    63155: (e, a, o) => {
      o.d(a, {
        N: () => r
      });
      var t = o(71127),
        r = globalThis?.document ? t.useLayoutEffect : () => {}
    },
    65515: (e, a, o) => {
      o.r(a), o.d(a, {
        Portal: () => s,
        Root: () => l
      });
      var t = o(71127),
        r = o(18429),
        n = o(23846),
        d = o(63155),
        f = o(42295),
        s = t.forwardRef((e, a) => {
          const {
            container: o,
            ...s
          } = e, [l, i] = t.useState(!1);
          (0, d.N)(() => i(!0), []);
          const u = o || l && globalThis?.document?.body;
          return u ? r.createPortal((0, f.jsx)(n.sG.div, {
            ...s,
            ref: a
          }), u) : null
        });
      s.displayName = "Portal";
      var l = s
    },
    69245: (e, a, o) => {
      var t = o(71127),
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        f = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, o) {
        var t, n = {},
          l = null,
          i = null;
        for (t in void 0 !== o && (l = "" + o), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (i = a.ref), a) d.call(a, t) && !s.hasOwnProperty(t) && (n[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === n[t] && (n[t] = a[t]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: i,
          props: n,
          _owner: f.current
        }
      }
      a.Fragment = n, a.jsx = l, a.jsxs = l
    }
  }
]);