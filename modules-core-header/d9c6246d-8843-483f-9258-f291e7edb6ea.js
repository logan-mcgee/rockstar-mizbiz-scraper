try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "d9c6246d-8843-483f-9258-f291e7edb6ea", e._sentryDebugIdIdentifier = "sentry-dbid-d9c6246d-8843-483f-9258-f291e7edb6ea")
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
  [2295, 4676, 5515, 7533, 7896], {
    23846: (e, o, t) => {
      t.d(o, {
        hO: () => f,
        sG: () => s
      });
      var r = t(71127),
        d = t(18429),
        n = t(80076),
        a = t(42295),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, o) => {
          const t = (0, n.createSlot)(`Primitive.${o}`),
            d = r.forwardRef((e, r) => {
              const {
                asChild: d,
                ...n
              } = e, s = d ? t : o;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(s, {
                ...n,
                ref: r
              })
            });
          return d.displayName = `Primitive.${o}`, {
            ...e,
            [o]: d
          }
        }, {});

      function f(e, o) {
        e && d.flushSync(() => e.dispatchEvent(o))
      }
    },
    42295: (e, o, t) => {
      e.exports = t(69245)
    },
    63155: (e, o, t) => {
      t.d(o, {
        N: () => d
      });
      var r = t(71127),
        d = globalThis?.document ? r.useLayoutEffect : () => {}
    },
    65515: (e, o, t) => {
      t.r(o), t.d(o, {
        Portal: () => f,
        Root: () => l
      });
      var r = t(71127),
        d = t(18429),
        n = t(23846),
        a = t(63155),
        s = t(42295),
        f = r.forwardRef((e, o) => {
          const {
            container: t,
            ...f
          } = e, [l, i] = r.useState(!1);
          (0, a.N)(() => i(!0), []);
          const u = t || l && globalThis?.document?.body;
          return u ? d.createPortal((0, s.jsx)(n.sG.div, {
            ...f,
            ref: o
          }), u) : null
        });
      f.displayName = "Portal";
      var l = f
    },
    69245: (e, o, t) => {
      var r = t(71127),
        d = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, o, t) {
        var r, n = {},
          l = null,
          i = null;
        for (r in void 0 !== t && (l = "" + t), void 0 !== o.key && (l = "" + o.key), void 0 !== o.ref && (i = o.ref), o) a.call(o, r) && !f.hasOwnProperty(r) && (n[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === n[r] && (n[r] = o[r]);
        return {
          $$typeof: d,
          type: e,
          key: l,
          ref: i,
          props: n,
          _owner: s.current
        }
      }
      o.Fragment = n, o.jsx = l, o.jsxs = l
    }
  }
]);