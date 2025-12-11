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
        a = t(18429),
        d = t(80076),
        n = t(42295),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, o) => {
          const t = (0, d.createSlot)(`Primitive.${o}`),
            a = r.forwardRef((e, r) => {
              const {
                asChild: a,
                ...d
              } = e, s = a ? t : o;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(s, {
                ...d,
                ref: r
              })
            });
          return a.displayName = `Primitive.${o}`, {
            ...e,
            [o]: a
          }
        }, {});

      function f(e, o) {
        e && a.flushSync(() => e.dispatchEvent(o))
      }
    },
    42295: (e, o, t) => {
      e.exports = t(69245)
    },
    63155: (e, o, t) => {
      t.d(o, {
        N: () => a
      });
      var r = t(71127),
        a = globalThis?.document ? r.useLayoutEffect : () => {}
    },
    65515: (e, o, t) => {
      t.r(o), t.d(o, {
        Portal: () => f,
        Root: () => l
      });
      var r = t(71127),
        a = t(18429),
        d = t(23846),
        n = t(63155),
        s = t(42295),
        f = r.forwardRef((e, o) => {
          const {
            container: t,
            ...f
          } = e, [l, i] = r.useState(!1);
          (0, n.N)(() => i(!0), []);
          const u = t || l && globalThis?.document?.body;
          return u ? a.createPortal((0, s.jsx)(d.sG.div, {
            ...f,
            ref: o
          }), u) : null
        });
      f.displayName = "Portal";
      var l = f
    },
    69245: (e, o, t) => {
      var r = t(71127),
        a = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, o, t) {
        var r, d = {},
          l = null,
          i = null;
        for (r in void 0 !== t && (l = "" + t), void 0 !== o.key && (l = "" + o.key), void 0 !== o.ref && (i = o.ref), o) n.call(o, r) && !f.hasOwnProperty(r) && (d[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === d[r] && (d[r] = o[r]);
        return {
          $$typeof: a,
          type: e,
          key: l,
          ref: i,
          props: d,
          _owner: s.current
        }
      }
      o.Fragment = d, o.jsx = l, o.jsxs = l
    }
  }
]);