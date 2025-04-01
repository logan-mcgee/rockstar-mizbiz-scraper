! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "0d7c68de-c07c-4e76-b8d7-5a6fff5777e6", e._sentryDebugIdIdentifier = "sentry-dbid-0d7c68de-c07c-4e76-b8d7-5a6fff5777e6")
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
  [5795, 3855, 6236, 9093, 1474, 8176], {
    32469: (e, o, a) => {
      var r = a(62229),
        d = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        f = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, o, a) {
        var r, t = {},
          s = null,
          i = null;
        for (r in void 0 !== a && (s = "" + a), void 0 !== o.key && (s = "" + o.key), void 0 !== o.ref && (i = o.ref), o) n.call(o, r) && !f.hasOwnProperty(r) && (t[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === t[r] && (t[r] = o[r]);
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
    73855: (e, o, a) => {
      e.exports = a(32469)
    },
    95795: (e, o, a) => {
      a.r(o), a.d(o, {
        Portal: () => f,
        Root: () => s
      });
      var r = a(62229),
        d = a(44853),
        t = a(60286),
        n = a(92600),
        l = a(73855),
        f = r.forwardRef(((e, o) => {
          const {
            container: a,
            ...f
          } = e, [s, i] = r.useState(!1);
          (0, n.N)((() => i(!0)), []);
          const c = a || s && globalThis?.document?.body;
          return c ? d.createPortal((0, l.jsx)(t.sG.div, {
            ...f,
            ref: o
          }), c) : null
        }));
      f.displayName = "Portal";
      var s = f
    },
    60286: (e, o, a) => {
      a.d(o, {
        hO: () => f,
        sG: () => l
      });
      var r = a(62229),
        d = a(44853),
        t = a(21222),
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

      function f(e, o) {
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