try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "bc28dbee-360d-4ebe-91b4-f663fc268416", e._sentryDebugIdIdentifier = "sentry-dbid-bc28dbee-360d-4ebe-91b4-f663fc268416")
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
    42295: (e, o, t) => {
      e.exports = t(69245)
    },
    63155: (e, o, t) => {
      t.d(o, {
        N: () => n
      });
      var r = t(71127),
        n = globalThis?.document ? r.useLayoutEffect : () => {}
    },
    69245: (e, o, t) => {
      var r = t(71127),
        n = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, o, t) {
        var r, a = {},
          l = null,
          i = null;
        for (r in void 0 !== t && (l = "" + t), void 0 !== o.key && (l = "" + o.key), void 0 !== o.ref && (i = o.ref), o) d.call(o, r) && !f.hasOwnProperty(r) && (a[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === a[r] && (a[r] = o[r]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: i,
          props: a,
          _owner: s.current
        }
      }
      o.Fragment = a, o.jsx = l, o.jsxs = l
    },
    78004: (e, o, t) => {
      t.d(o, {
        hO: () => f,
        sG: () => s
      });
      var r = t(71127),
        n = t(31062),
        a = t(21222),
        d = t(42295),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, o) => {
          const t = (0, a.createSlot)(`Primitive.${o}`),
            n = r.forwardRef((e, r) => {
              const {
                asChild: n,
                ...a
              } = e, s = n ? t : o;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, d.jsx)(s, {
                ...a,
                ref: r
              })
            });
          return n.displayName = `Primitive.${o}`, {
            ...e,
            [o]: n
          }
        }, {});

      function f(e, o) {
        e && n.flushSync(() => e.dispatchEvent(o))
      }
    },
    80061: (e, o, t) => {
      t.r(o), t.d(o, {
        Portal: () => f,
        Root: () => l
      });
      var r = t(71127),
        n = t(18429),
        a = t(78004),
        d = t(63155),
        s = t(42295),
        f = r.forwardRef((e, o) => {
          const {
            container: t,
            ...f
          } = e, [l, i] = r.useState(!1);
          (0, d.N)(() => i(!0), []);
          const u = t || l && globalThis?.document?.body;
          return u ? n.createPortal((0, s.jsx)(a.sG.div, {
            ...f,
            ref: o
          }), u) : null
        });
      f.displayName = "Portal";
      var l = f
    }
  }
]);