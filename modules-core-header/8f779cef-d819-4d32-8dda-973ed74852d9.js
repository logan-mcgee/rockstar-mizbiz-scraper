! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "8f779cef-d819-4d32-8dda-973ed74852d9", e._sentryDebugIdIdentifier = "sentry-dbid-8f779cef-d819-4d32-8dda-973ed74852d9")
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
  [5868, 1029, 3410, 5791, 8172, 3487], {
    65039: (e, o, d) => {
      var r = d(62229),
        a = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, d) {
        var r, t = {},
          s = null,
          i = null;
        for (r in void 0 !== d && (s = "" + d), void 0 !== o.key && (s = "" + o.key), void 0 !== o.ref && (i = o.ref), o) n.call(o, r) && !f.hasOwnProperty(r) && (t[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === t[r] && (t[r] = o[r]);
        return {
          $$typeof: a,
          type: e,
          key: s,
          ref: i,
          props: t,
          _owner: l.current
        }
      }
      o.Fragment = t, o.jsx = s, o.jsxs = s
    },
    91029: (e, o, d) => {
      e.exports = d(65039)
    },
    15868: (e, o, d) => {
      d.r(o), d.d(o, {
        Portal: () => f,
        Root: () => s
      });
      var r = d(62229),
        a = d(44853),
        t = d(4119),
        n = d(66698),
        l = d(91029),
        f = r.forwardRef(((e, o) => {
          const {
            container: d,
            ...f
          } = e, [s, i] = r.useState(!1);
          (0, n.N)((() => i(!0)), []);
          const u = d || s && globalThis?.document?.body;
          return u ? a.createPortal((0, l.jsx)(t.sG.div, {
            ...f,
            ref: o
          }), u) : null
        }));
      f.displayName = "Portal";
      var s = f
    },
    4119: (e, o, d) => {
      d.d(o, {
        hO: () => f,
        sG: () => l
      });
      var r = d(62229),
        a = d(44853),
        t = d(21222),
        n = d(91029),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, o) => {
          const d = r.forwardRef(((e, d) => {
            const {
              asChild: r,
              ...a
            } = e, l = r ? t.Slot : o;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(l, {
              ...a,
              ref: d
            })
          }));
          return d.displayName = `Primitive.${o}`, {
            ...e,
            [o]: d
          }
        }), {});

      function f(e, o) {
        e && a.flushSync((() => e.dispatchEvent(o)))
      }
    },
    66698: (e, o, d) => {
      d.d(o, {
        N: () => a
      });
      var r = d(62229),
        a = Boolean(globalThis?.document) ? r.useLayoutEffect : () => {}
    }
  }
]);