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
    65039: (e, o, r) => {
      var a = r(62229),
        t = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, r) {
        var a, d = {},
          s = null,
          i = null;
        for (a in void 0 !== r && (s = "" + r), void 0 !== o.key && (s = "" + o.key), void 0 !== o.ref && (i = o.ref), o) n.call(o, a) && !f.hasOwnProperty(a) && (d[a] = o[a]);
        if (e && e.defaultProps)
          for (a in o = e.defaultProps) void 0 === d[a] && (d[a] = o[a]);
        return {
          $$typeof: t,
          type: e,
          key: s,
          ref: i,
          props: d,
          _owner: l.current
        }
      }
      o.Fragment = d, o.jsx = s, o.jsxs = s
    },
    91029: (e, o, r) => {
      e.exports = r(65039)
    },
    12403: (e, o, r) => {
      r.r(o), r.d(o, {
        Portal: () => s,
        Root: () => i
      });
      var a = r(62229),
        t = r(44853),
        d = r(34730),
        n = r(91029),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, o) => {
          const r = a.forwardRef(((e, r) => {
            const {
              asChild: a,
              ...t
            } = e, l = a ? d.Slot : o;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(l, {
              ...t,
              ref: r
            })
          }));
          return r.displayName = `Primitive.${o}`, {
            ...e,
            [o]: r
          }
        }), {}),
        f = r(66698),
        s = a.forwardRef(((e, o) => {
          const {
            container: r,
            ...d
          } = e, [s, i] = a.useState(!1);
          (0, f.N)((() => i(!0)), []);
          const u = r || s && globalThis?.document?.body;
          return u ? t.createPortal((0, n.jsx)(l.div, {
            ...d,
            ref: o
          }), u) : null
        }));
      s.displayName = "Portal";
      var i = s
    },
    66698: (e, o, r) => {
      r.d(o, {
        N: () => t
      });
      var a = r(62229),
        t = Boolean(globalThis?.document) ? a.useLayoutEffect : () => {}
    }
  }
]);