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
    65039: (e, o, r) => {
      var a = r(62229),
        d = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, r) {
        var a, t = {},
          s = null,
          i = null;
        for (a in void 0 !== r && (s = "" + r), void 0 !== o.key && (s = "" + o.key), void 0 !== o.ref && (i = o.ref), o) n.call(o, a) && !f.hasOwnProperty(a) && (t[a] = o[a]);
        if (e && e.defaultProps)
          for (a in o = e.defaultProps) void 0 === t[a] && (t[a] = o[a]);
        return {
          $$typeof: d,
          type: e,
          key: s,
          ref: i,
          props: t,
          _owner: l.current
        }
      }
      o.Fragment = t, o.jsx = s, o.jsxs = s
    },
    91029: (e, o, r) => {
      e.exports = r(65039)
    },
    15868: (e, o, r) => {
      r.r(o), r.d(o, {
        Portal: () => f,
        Root: () => s
      });
      var a = r(62229),
        d = r(44853),
        t = r(4119),
        n = r(66698),
        l = r(91029),
        f = a.forwardRef(((e, o) => {
          const {
            container: r,
            ...f
          } = e, [s, i] = a.useState(!1);
          (0, n.N)((() => i(!0)), []);
          const u = r || s && globalThis?.document?.body;
          return u ? d.createPortal((0, l.jsx)(t.sG.div, {
            ...f,
            ref: o
          }), u) : null
        }));
      f.displayName = "Portal";
      var s = f
    },
    4119: (e, o, r) => {
      r.d(o, {
        hO: () => f,
        sG: () => l
      });
      var a = r(62229),
        d = r(44853),
        t = r(21222),
        n = r(91029),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, o) => {
          const r = a.forwardRef(((e, r) => {
            const {
              asChild: a,
              ...d
            } = e, l = a ? t.Slot : o;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(l, {
              ...d,
              ref: r
            })
          }));
          return r.displayName = `Primitive.${o}`, {
            ...e,
            [o]: r
          }
        }), {});

      function f(e, o) {
        e && d.flushSync((() => e.dispatchEvent(o)))
      }
    },
    66698: (e, o, r) => {
      r.d(o, {
        N: () => d
      });
      var a = r(62229),
        d = Boolean(globalThis?.document) ? a.useLayoutEffect : () => {}
    }
  }
]);