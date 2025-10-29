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
        Portal: () => s,
        Root: () => l
      });
      var t = o(71127),
        r = o(18429),
        d = o(81664),
        n = o(63155),
        f = o(42295),
        s = t.forwardRef(((e, a) => {
          const {
            container: o,
            ...s
          } = e, [l, i] = t.useState(!1);
          (0, n.N)((() => i(!0)), []);
          const u = o || l && globalThis?.document?.body;
          return u ? r.createPortal((0, f.jsx)(d.sG.div, {
            ...s,
            ref: a
          }), u) : null
        }));
      s.displayName = "Portal";
      var l = s
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
        d = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        f = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, o) {
        var t, d = {},
          l = null,
          i = null;
        for (t in void 0 !== o && (l = "" + o), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (i = a.ref), a) n.call(a, t) && !s.hasOwnProperty(t) && (d[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === d[t] && (d[t] = a[t]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: i,
          props: d,
          _owner: f.current
        }
      }
      a.Fragment = d, a.jsx = l, a.jsxs = l
    },
    81664: (e, a, o) => {
      o.d(a, {
        hO: () => s,
        sG: () => f
      });
      var t = o(71127),
        r = o(18429),
        d = o(82691),
        n = o(42295),
        f = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, a) => {
          const o = (0, d.createSlot)(`Primitive.${a}`),
            r = t.forwardRef(((e, t) => {
              const {
                asChild: r,
                ...d
              } = e, f = r ? o : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(f, {
                ...d,
                ref: t
              })
            }));
          return r.displayName = `Primitive.${a}`, {
            ...e,
            [a]: r
          }
        }), {});

      function s(e, a) {
        e && r.flushSync((() => e.dispatchEvent(a)))
      }
    }
  }
]);