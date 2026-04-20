try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "f5c07f3b-b31d-4b04-b6ba-eea41e587a02", e._sentryDebugIdIdentifier = "sentry-dbid-f5c07f3b-b31d-4b04-b6ba-eea41e587a02")
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
  [61, 2295, 2442, 4676, 7533], {
    42295: (e, o, a) => {
      e.exports = a(69245)
    },
    63155: (e, o, a) => {
      a.d(o, {
        N: () => r
      });
      var t = a(71127),
        r = globalThis?.document ? t.useLayoutEffect : () => {}
    },
    69245: (e, o, a) => {
      var t = a(71127),
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

      function f(e, o, a) {
        var t, n = {},
          f = null,
          i = null;
        for (t in void 0 !== a && (f = "" + a), void 0 !== o.key && (f = "" + o.key), void 0 !== o.ref && (i = o.ref), o) d.call(o, t) && !l.hasOwnProperty(t) && (n[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === n[t] && (n[t] = o[t]);
        return {
          $$typeof: r,
          type: e,
          key: f,
          ref: i,
          props: n,
          _owner: s.current
        }
      }
      o.Fragment = n, o.jsx = f, o.jsxs = f
    },
    78004: (e, o, a) => {
      a.d(o, {
        hO: () => l,
        sG: () => s
      });
      var t = a(71127),
        r = a(18429),
        n = a(45824),
        d = a(42295),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, o) => {
          const a = (0, n.createSlot)(`Primitive.${o}`),
            r = t.forwardRef((e, t) => {
              const {
                asChild: r,
                ...n
              } = e, s = r ? a : o;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, d.jsx)(s, {
                ...n,
                ref: t
              })
            });
          return r.displayName = `Primitive.${o}`, {
            ...e,
            [o]: r
          }
        }, {});

      function l(e, o) {
        e && r.flushSync(() => e.dispatchEvent(o))
      }
    },
    80061: (e, o, a) => {
      a.r(o), a.d(o, {
        Portal: () => l,
        Root: () => f
      });
      var t = a(71127),
        r = a(18429),
        n = a(78004),
        d = a(63155),
        s = a(42295),
        l = t.forwardRef((e, o) => {
          const {
            container: a,
            ...l
          } = e, [f, i] = t.useState(!1);
          (0, d.N)(() => i(!0), []);
          const u = a || f && globalThis?.document?.body;
          return u ? r.createPortal((0, s.jsx)(n.sG.div, {
            ...l,
            ref: o
          }), u) : null
        });
      l.displayName = "Portal";
      var f = l
    }
  }
]);