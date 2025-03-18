! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6fc44f8b-d056-44d8-aca2-0fca0aad83c2", e._sentryDebugIdIdentifier = "sentry-dbid-6fc44f8b-d056-44d8-aca2-0fca0aad83c2")
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
  [7813, 1029, 3410, 5791, 8172, 194], {
    65039: (e, a, o) => {
      var r = o(62229),
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

      function s(e, a, o) {
        var r, n = {},
          s = null,
          c = null;
        for (r in void 0 !== o && (s = "" + o), void 0 !== a.key && (s = "" + a.key), void 0 !== a.ref && (c = a.ref), a) d.call(a, r) && !f.hasOwnProperty(r) && (n[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === n[r] && (n[r] = a[r]);
        return {
          $$typeof: t,
          type: e,
          key: s,
          ref: c,
          props: n,
          _owner: l.current
        }
      }
      a.Fragment = n, a.jsx = s, a.jsxs = s
    },
    91029: (e, a, o) => {
      e.exports = o(65039)
    },
    97813: (e, a, o) => {
      o.r(a), o.d(a, {
        Portal: () => f,
        Root: () => s
      });
      var r = o(62229),
        t = o(44853),
        n = o(96988),
        d = o(66698),
        l = o(91029),
        f = r.forwardRef(((e, a) => {
          const {
            container: o,
            ...f
          } = e, [s, c] = r.useState(!1);
          (0, d.N)((() => c(!0)), []);
          const i = o || s && globalThis?.document?.body;
          return i ? t.createPortal((0, l.jsx)(n.sG.div, {
            ...f,
            ref: a
          }), i) : null
        }));
      f.displayName = "Portal";
      var s = f
    },
    96988: (e, a, o) => {
      o.d(a, {
        hO: () => f,
        sG: () => l
      });
      var r = o(62229),
        t = o(44853),
        n = o(21222),
        d = o(91029),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, a) => {
          const o = r.forwardRef(((e, o) => {
            const {
              asChild: r,
              ...t
            } = e, l = r ? n.Slot : a;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, d.jsx)(l, {
              ...t,
              ref: o
            })
          }));
          return o.displayName = `Primitive.${a}`, {
            ...e,
            [a]: o
          }
        }), {});

      function f(e, a) {
        e && t.flushSync((() => e.dispatchEvent(a)))
      }
    },
    66698: (e, a, o) => {
      o.d(a, {
        N: () => t
      });
      var r = o(62229),
        t = Boolean(globalThis?.document) ? r.useLayoutEffect : () => {}
    }
  }
]);