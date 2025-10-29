try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "f7302400-b39c-482d-8ed0-bfe928d1541e", e._sentryDebugIdIdentifier = "sentry-dbid-f7302400-b39c-482d-8ed0-bfe928d1541e")
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
  [2116, 2295, 4676, 7533, 9735], {
    12255: (e, o, d) => {
      d.d(o, {
        hO: () => l,
        sG: () => s
      });
      var t = d(71127),
        r = d(18429),
        a = d(37910),
        n = d(42295),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, o) => {
          const d = (0, a.createSlot)(`Primitive.${o}`),
            r = t.forwardRef(((e, t) => {
              const {
                asChild: r,
                ...a
              } = e, s = r ? d : o;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(s, {
                ...a,
                ref: t
              })
            }));
          return r.displayName = `Primitive.${o}`, {
            ...e,
            [o]: r
          }
        }), {});

      function l(e, o) {
        e && r.flushSync((() => e.dispatchEvent(o)))
      }
    },
    42295: (e, o, d) => {
      e.exports = d(69245)
    },
    52116: (e, o, d) => {
      d.r(o), d.d(o, {
        Portal: () => l,
        Root: () => f
      });
      var t = d(71127),
        r = d(18429),
        a = d(12255),
        n = d(63155),
        s = d(42295),
        l = t.forwardRef(((e, o) => {
          const {
            container: d,
            ...l
          } = e, [f, i] = t.useState(!1);
          (0, n.N)((() => i(!0)), []);
          const u = d || f && globalThis?.document?.body;
          return u ? r.createPortal((0, s.jsx)(a.sG.div, {
            ...l,
            ref: o
          }), u) : null
        }));
      l.displayName = "Portal";
      var f = l
    },
    63155: (e, o, d) => {
      d.d(o, {
        N: () => r
      });
      var t = d(71127),
        r = globalThis?.document ? t.useLayoutEffect : () => {}
    },
    69245: (e, o, d) => {
      var t = d(71127),
        r = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, o, d) {
        var t, a = {},
          f = null,
          i = null;
        for (t in void 0 !== d && (f = "" + d), void 0 !== o.key && (f = "" + o.key), void 0 !== o.ref && (i = o.ref), o) n.call(o, t) && !l.hasOwnProperty(t) && (a[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === a[t] && (a[t] = o[t]);
        return {
          $$typeof: r,
          type: e,
          key: f,
          ref: i,
          props: a,
          _owner: s.current
        }
      }
      o.Fragment = a, o.jsx = f, o.jsxs = f
    }
  }
]);