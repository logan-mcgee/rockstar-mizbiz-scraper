try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d0bf3781-baae-4ed3-aead-3a868f51a9cc", e._sentryDebugIdIdentifier = "sentry-dbid-d0bf3781-baae-4ed3-aead-3a868f51a9cc")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [61, 2295, 2442, 4676, 7533], {
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
        s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, a, o) {
        var t, d = {},
          l = null,
          i = null;
        for (t in void 0 !== o && (l = "" + o), void 0 !== a.key && (l = "" + a.key), void 0 !== a.ref && (i = a.ref), a) n.call(a, t) && !f.hasOwnProperty(t) && (d[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === d[t] && (d[t] = a[t]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: i,
          props: d,
          _owner: s.current
        }
      }
      a.Fragment = d, a.jsx = l, a.jsxs = l
    },
    78004: (e, a, o) => {
      o.d(a, {
        hO: () => f,
        sG: () => s
      });
      var t = o(71127),
        r = o(18429),
        d = o(21222),
        n = o(42295),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, a) => {
          const o = (0, d.createSlot)(`Primitive.${a}`),
            r = t.forwardRef(((e, t) => {
              const {
                asChild: r,
                ...d
              } = e, s = r ? o : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(s, {
                ...d,
                ref: t
              })
            }));
          return r.displayName = `Primitive.${a}`, {
            ...e,
            [a]: r
          }
        }), {});

      function f(e, a) {
        e && r.flushSync((() => e.dispatchEvent(a)))
      }
    },
    80061: (e, a, o) => {
      o.r(a), o.d(a, {
        Portal: () => f,
        Root: () => l
      });
      var t = o(71127),
        r = o(18429),
        d = o(78004),
        n = o(63155),
        s = o(42295),
        f = t.forwardRef(((e, a) => {
          const {
            container: o,
            ...f
          } = e, [l, i] = t.useState(!1);
          (0, n.N)((() => i(!0)), []);
          const u = o || l && globalThis?.document?.body;
          return u ? r.createPortal((0, s.jsx)(d.sG.div, {
            ...f,
            ref: a
          }), u) : null
        }));
      f.displayName = "Portal";
      var l = f
    }
  }
]);