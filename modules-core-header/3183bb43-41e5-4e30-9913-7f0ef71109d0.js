! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "3183bb43-41e5-4e30-9913-7f0ef71109d0", e._sentryDebugIdIdentifier = "sentry-dbid-3183bb43-41e5-4e30-9913-7f0ef71109d0")
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
  [8844, 3855, 6236, 9093, 1474, 6463], {
    32469: (e, o, r) => {
      var a = r(62229),
        t = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, r) {
        var a, n = {},
          s = null,
          i = null;
        for (a in void 0 !== r && (s = "" + r), void 0 !== o.key && (s = "" + o.key), void 0 !== o.ref && (i = o.ref), o) d.call(o, a) && !f.hasOwnProperty(a) && (n[a] = o[a]);
        if (e && e.defaultProps)
          for (a in o = e.defaultProps) void 0 === n[a] && (n[a] = o[a]);
        return {
          $$typeof: t,
          type: e,
          key: s,
          ref: i,
          props: n,
          _owner: l.current
        }
      }
      o.Fragment = n, o.jsx = s, o.jsxs = s
    },
    73855: (e, o, r) => {
      e.exports = r(32469)
    },
    28844: (e, o, r) => {
      r.r(o), r.d(o, {
        Portal: () => s,
        Root: () => i
      });
      var a = r(62229),
        t = r(44853),
        n = r(34730),
        d = r(73855),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, o) => {
          const r = a.forwardRef(((e, r) => {
            const {
              asChild: a,
              ...t
            } = e, l = a ? n.Slot : o;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, d.jsx)(l, {
              ...t,
              ref: r
            })
          }));
          return r.displayName = `Primitive.${o}`, {
            ...e,
            [o]: r
          }
        }), {}),
        f = r(92600),
        s = a.forwardRef(((e, o) => {
          const {
            container: r,
            ...n
          } = e, [s, i] = a.useState(!1);
          (0, f.N)((() => i(!0)), []);
          const u = r || s && globalThis?.document?.body;
          return u ? t.createPortal((0, d.jsx)(l.div, {
            ...n,
            ref: o
          }), u) : null
        }));
      s.displayName = "Portal";
      var i = s
    },
    92600: (e, o, r) => {
      r.d(o, {
        N: () => t
      });
      var a = r(62229),
        t = Boolean(globalThis?.document) ? a.useLayoutEffect : () => {}
    }
  }
]);