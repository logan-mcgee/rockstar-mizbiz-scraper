try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7f1f8868-b002-4a7e-9f4a-a3667a94fb96", e._sentryDebugIdIdentifier = "sentry-dbid-7f1f8868-b002-4a7e-9f4a-a3667a94fb96")
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
  [2295, 4676, 4905, 7286, 7533], {
    34905: (e, a, o) => {
      o.r(a), o.d(a, {
        Portal: () => l,
        Root: () => f
      });
      var t = o(71127),
        r = o(18429),
        n = o(81664),
        d = o(63155),
        s = o(42295),
        l = t.forwardRef(((e, a) => {
          const {
            container: o,
            ...l
          } = e, [f, i] = t.useState(!1);
          (0, d.N)((() => i(!0)), []);
          const u = o || f && globalThis?.document?.body;
          return u ? r.createPortal((0, s.jsx)(n.sG.div, {
            ...l,
            ref: a
          }), u) : null
        }));
      l.displayName = "Portal";
      var f = l
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
    69245: (e, a, o) => {
      var t = o(71127),
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, o) {
        var t, n = {},
          f = null,
          i = null;
        for (t in void 0 !== o && (f = "" + o), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (i = a.ref), a) d.call(a, t) && !l.hasOwnProperty(t) && (n[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === n[t] && (n[t] = a[t]);
        return {
          $$typeof: r,
          type: e,
          key: f,
          ref: i,
          props: n,
          _owner: s.current
        }
      }
      a.Fragment = n, a.jsx = f, a.jsxs = f
    },
    81664: (e, a, o) => {
      o.d(a, {
        hO: () => l,
        sG: () => s
      });
      var t = o(71127),
        r = o(18429),
        n = o(82691),
        d = o(42295),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, a) => {
          const o = (0, n.createSlot)(`Primitive.${a}`),
            r = t.forwardRef(((e, t) => {
              const {
                asChild: r,
                ...n
              } = e, s = r ? o : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, d.jsx)(s, {
                ...n,
                ref: t
              })
            }));
          return r.displayName = `Primitive.${a}`, {
            ...e,
            [a]: r
          }
        }), {});

      function l(e, a) {
        e && r.flushSync((() => e.dispatchEvent(a)))
      }
    }
  }
]);