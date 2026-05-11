try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "48bf3f2b-c51b-48a9-aeb4-0b217bcdc53f", e._sentryDebugIdIdentifier = "sentry-dbid-48bf3f2b-c51b-48a9-aeb4-0b217bcdc53f")
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
  [368, 2295, 4676, 7533, 7987], {
    69245(e, o, r) {
      var t = r(71127),
        a = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, o, r) {
        var t, d = {},
          f = null,
          i = null;
        for (t in void 0 !== r && (f = "" + r), void 0 !== o.key && (f = "" + o.key), void 0 !== o.ref && (i = o.ref), o) n.call(o, t) && !s.hasOwnProperty(t) && (d[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === d[t] && (d[t] = o[t]);
        return {
          $$typeof: a,
          type: e,
          key: f,
          ref: i,
          props: d,
          _owner: l.current
        }
      }
      o.Fragment = d, o.jsx = f, o.jsxs = f
    },
    42295(e, o, r) {
      e.exports = r(69245)
    },
    7987(e, o, r) {
      r.r(o), r.d(o, {
        Portal: () => f,
        Root: () => i
      });
      var t = r(71127),
        a = r(18429),
        d = r(45824),
        n = r(42295),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, o) => {
          const r = (0, d.createSlot)(`Primitive.${o}`),
            a = t.forwardRef((e, t) => {
              const {
                asChild: a,
                ...d
              } = e, l = a ? r : o;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(l, {
                ...d,
                ref: t
              })
            });
          return a.displayName = `Primitive.${o}`, {
            ...e,
            [o]: a
          }
        }, {}),
        s = r(63155),
        f = t.forwardRef((e, o) => {
          const {
            container: r,
            ...d
          } = e, [f, i] = t.useState(!1);
          (0, s.N)(() => i(!0), []);
          const b = r || f && globalThis?.document?.body;
          return b ? a.createPortal((0, n.jsx)(l.div, {
            ...d,
            ref: o
          }), b) : null
        });
      f.displayName = "Portal";
      var i = f
    },
    63155(e, o, r) {
      r.d(o, {
        N: () => a
      });
      var t = r(71127),
        a = globalThis?.document ? t.useLayoutEffect : () => {}
    }
  }
]);