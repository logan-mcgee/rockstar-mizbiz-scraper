! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "21108cd9-0c88-4cc4-be71-733915761c6a", e._sentryDebugIdIdentifier = "sentry-dbid-21108cd9-0c88-4cc4-be71-733915761c6a")
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
  [3777, 3855, 6236, 9093, 1474, 6158], {
    32469: (e, o, a) => {
      var r = a(62229),
        t = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, o, a) {
        var r, n = {},
          f = null,
          c = null;
        for (r in void 0 !== a && (f = "" + a), void 0 !== o.key && (f = "" + o.key), void 0 !== o.ref && (c = o.ref), o) d.call(o, r) && !s.hasOwnProperty(r) && (n[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === n[r] && (n[r] = o[r]);
        return {
          $$typeof: t,
          type: e,
          key: f,
          ref: c,
          props: n,
          _owner: l.current
        }
      }
      o.Fragment = n, o.jsx = f, o.jsxs = f
    },
    73855: (e, o, a) => {
      e.exports = a(32469)
    },
    16158: (e, o, a) => {
      a.r(o), a.d(o, {
        Portal: () => s,
        Root: () => f
      });
      var r = a(62229),
        t = a(44853),
        n = a(85413),
        d = a(92600),
        l = a(73855),
        s = r.forwardRef(((e, o) => {
          const {
            container: a,
            ...s
          } = e, [f, c] = r.useState(!1);
          (0, d.N)((() => c(!0)), []);
          const i = a || f && globalThis?.document?.body;
          return i ? t.createPortal((0, l.jsx)(n.sG.div, {
            ...s,
            ref: o
          }), i) : null
        }));
      s.displayName = "Portal";
      var f = s
    },
    85413: (e, o, a) => {
      a.d(o, {
        hO: () => s,
        sG: () => l
      });
      var r = a(62229),
        t = a(44853),
        n = a(21222),
        d = a(73855),
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
        }), {});

      function s(e, o) {
        e && t.flushSync((() => e.dispatchEvent(o)))
      }
    },
    92600: (e, o, a) => {
      a.d(o, {
        N: () => t
      });
      var r = a(62229),
        t = Boolean(globalThis?.document) ? r.useLayoutEffect : () => {}
    }
  }
]);