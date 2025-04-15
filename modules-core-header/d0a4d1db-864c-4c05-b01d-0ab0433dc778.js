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
    32469: (e, o, a) => {
      var r = a(62229),
        d = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, o, a) {
        var r, t = {},
          f = null,
          i = null;
        for (r in void 0 !== a && (f = "" + a), void 0 !== o.key && (f = "" + o.key), void 0 !== o.ref && (i = o.ref), o) n.call(o, r) && !s.hasOwnProperty(r) && (t[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === t[r] && (t[r] = o[r]);
        return {
          $$typeof: d,
          type: e,
          key: f,
          ref: i,
          props: t,
          _owner: l.current
        }
      }
      o.Fragment = t, o.jsx = f, o.jsxs = f
    },
    73855: (e, o, a) => {
      e.exports = a(32469)
    },
    40387: (e, o, a) => {
      a.r(o), a.d(o, {
        Portal: () => s,
        Root: () => f
      });
      var r = a(62229),
        d = a(44853),
        t = a(51347),
        n = a(92600),
        l = a(73855),
        s = r.forwardRef(((e, o) => {
          const {
            container: a,
            ...s
          } = e, [f, i] = r.useState(!1);
          (0, n.N)((() => i(!0)), []);
          const u = a || f && globalThis?.document?.body;
          return u ? d.createPortal((0, l.jsx)(t.sG.div, {
            ...s,
            ref: o
          }), u) : null
        }));
      s.displayName = "Portal";
      var f = s
    },
    51347: (e, o, a) => {
      a.d(o, {
        hO: () => s,
        sG: () => l
      });
      var r = a(62229),
        d = a(44853),
        t = a(16741),
        n = a(73855),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, o) => {
          const a = r.forwardRef(((e, a) => {
            const {
              asChild: r,
              ...d
            } = e, l = r ? t.Slot : o;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(l, {
              ...d,
              ref: a
            })
          }));
          return a.displayName = `Primitive.${o}`, {
            ...e,
            [o]: a
          }
        }), {});

      function s(e, o) {
        e && d.flushSync((() => e.dispatchEvent(o)))
      }
    },
    92600: (e, o, a) => {
      a.d(o, {
        N: () => d
      });
      var r = a(62229),
        d = Boolean(globalThis?.document) ? r.useLayoutEffect : () => {}
    }
  }
]);