! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d0a4d1db-864c-4c05-b01d-0ab0433dc778", e._sentryDebugIdIdentifier = "sentry-dbid-d0a4d1db-864c-4c05-b01d-0ab0433dc778")
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
    32469: (e, a, o) => {
      var r = o(62229),
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

      function f(e, a, o) {
        var r, t = {},
          f = null,
          i = null;
        for (r in void 0 !== o && (f = "" + o), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (i = a.ref), a) n.call(a, r) && !s.hasOwnProperty(r) && (t[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === t[r] && (t[r] = a[r]);
        return {
          $$typeof: d,
          type: e,
          key: f,
          ref: i,
          props: t,
          _owner: l.current
        }
      }
      a.Fragment = t, a.jsx = f, a.jsxs = f
    },
    73855: (e, a, o) => {
      e.exports = o(32469)
    },
    40387: (e, a, o) => {
      o.r(a), o.d(a, {
        Portal: () => s,
        Root: () => f
      });
      var r = o(62229),
        d = o(44853),
        t = o(51347),
        n = o(92600),
        l = o(73855),
        s = r.forwardRef(((e, a) => {
          const {
            container: o,
            ...s
          } = e, [f, i] = r.useState(!1);
          (0, n.N)((() => i(!0)), []);
          const c = o || f && globalThis?.document?.body;
          return c ? d.createPortal((0, l.jsx)(t.sG.div, {
            ...s,
            ref: a
          }), c) : null
        }));
      s.displayName = "Portal";
      var f = s
    },
    51347: (e, a, o) => {
      o.d(a, {
        hO: () => s,
        sG: () => l
      });
      var r = o(62229),
        d = o(44853),
        t = o(16741),
        n = o(73855),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, a) => {
          const o = r.forwardRef(((e, o) => {
            const {
              asChild: r,
              ...d
            } = e, l = r ? t.Slot : a;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(l, {
              ...d,
              ref: o
            })
          }));
          return o.displayName = `Primitive.${a}`, {
            ...e,
            [a]: o
          }
        }), {});

      function s(e, a) {
        e && d.flushSync((() => e.dispatchEvent(a)))
      }
    },
    92600: (e, a, o) => {
      o.d(a, {
        N: () => d
      });
      var r = o(62229),
        d = Boolean(globalThis?.document) ? r.useLayoutEffect : () => {}
    }
  }
]);