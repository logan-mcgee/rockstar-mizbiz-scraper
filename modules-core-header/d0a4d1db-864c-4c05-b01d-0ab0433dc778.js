! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "d0a4d1db-864c-4c05-b01d-0ab0433dc778", e._sentryDebugIdIdentifier = "sentry-dbid-d0a4d1db-864c-4c05-b01d-0ab0433dc778")
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
  [387, 3855, 6236, 9093, 1474, 2768], {
    32469: (e, o, d) => {
      var r = d(62229),
        a = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, o, d) {
        var r, t = {},
          f = null,
          c = null;
        for (r in void 0 !== d && (f = "" + d), void 0 !== o.key && (f = "" + o.key), void 0 !== o.ref && (c = o.ref), o) n.call(o, r) && !s.hasOwnProperty(r) && (t[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === t[r] && (t[r] = o[r]);
        return {
          $$typeof: a,
          type: e,
          key: f,
          ref: c,
          props: t,
          _owner: l.current
        }
      }
      o.Fragment = t, o.jsx = f, o.jsxs = f
    },
    73855: (e, o, d) => {
      e.exports = d(32469)
    },
    40387: (e, o, d) => {
      d.r(o), d.d(o, {
        Portal: () => s,
        Root: () => f
      });
      var r = d(62229),
        a = d(44853),
        t = d(51347),
        n = d(92600),
        l = d(73855),
        s = r.forwardRef(((e, o) => {
          const {
            container: d,
            ...s
          } = e, [f, c] = r.useState(!1);
          (0, n.N)((() => c(!0)), []);
          const i = d || f && globalThis?.document?.body;
          return i ? a.createPortal((0, l.jsx)(t.sG.div, {
            ...s,
            ref: o
          }), i) : null
        }));
      s.displayName = "Portal";
      var f = s
    },
    51347: (e, o, d) => {
      d.d(o, {
        hO: () => s,
        sG: () => l
      });
      var r = d(62229),
        a = d(44853),
        t = d(16741),
        n = d(73855),
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

      function s(e, o) {
        e && a.flushSync((() => e.dispatchEvent(o)))
      }
    },
    92600: (e, o, d) => {
      d.d(o, {
        N: () => a
      });
      var r = d(62229),
        a = Boolean(globalThis?.document) ? r.useLayoutEffect : () => {}
    }
  }
]);