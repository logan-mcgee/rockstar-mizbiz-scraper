! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "4ee20237-b356-4c18-aae4-04ffcccf4a5d", e._sentryDebugIdIdentifier = "sentry-dbid-4ee20237-b356-4c18-aae4-04ffcccf4a5d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [2403, 1029, 3410, 5791, 8172, 4784], {
    65039: (e, o, a) => {
      var r = a(62229),
        t = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, a) {
        var r, n = {},
          s = null,
          c = null;
        for (r in void 0 !== a && (s = "" + a), void 0 !== o.key && (s = "" + o.key), void 0 !== o.ref && (c = o.ref), o) d.call(o, r) && !f.hasOwnProperty(r) && (n[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === n[r] && (n[r] = o[r]);
        return {
          $$typeof: t,
          type: e,
          key: s,
          ref: c,
          props: n,
          _owner: l.current
        }
      }
      o.Fragment = n, o.jsx = s, o.jsxs = s
    },
    91029: (e, o, a) => {
      e.exports = a(65039)
    },
    12403: (e, o, a) => {
      a.r(o), a.d(o, {
        Portal: () => s,
        Root: () => c
      });
      var r = a(62229),
        t = a(44853),
        n = a(34730),
        d = a(91029),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, o) => {
          const a = r.forwardRef(((e, a) => {
            const {
              asChild: r,
              ...t
            } = e, l = r ? n.Slot : o;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, d.jsx)(l, {
              ...t,
              ref: a
            })
          }));
          return a.displayName = `Primitive.${o}`, {
            ...e,
            [o]: a
          }
        }), {}),
        f = a(66698),
        s = r.forwardRef(((e, o) => {
          const {
            container: a,
            ...n
          } = e, [s, c] = r.useState(!1);
          (0, f.N)((() => c(!0)), []);
          const i = a || s && globalThis?.document?.body;
          return i ? t.createPortal((0, d.jsx)(l.div, {
            ...n,
            ref: o
          }), i) : null
        }));
      s.displayName = "Portal";
      var c = s
    },
    66698: (e, o, a) => {
      a.d(o, {
        N: () => t
      });
      var r = a(62229),
        t = Boolean(globalThis?.document) ? r.useLayoutEffect : () => {}
    }
  }
]);