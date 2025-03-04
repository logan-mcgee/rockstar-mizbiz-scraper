! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "136b90b9-b43b-4d97-84ce-2b267816be4e", e._sentryDebugIdIdentifier = "sentry-dbid-136b90b9-b43b-4d97-84ce-2b267816be4e")
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
  [8418, 1029, 3410, 5791, 8172, 6037], {
    65039: (e, o, r) => {
      var a = r(62229),
        t = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        d = Object.prototype.hasOwnProperty,
        l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, o, r) {
        var a, n = {},
          f = null,
          i = null;
        for (a in void 0 !== r && (f = "" + r), void 0 !== o.key && (f = "" + o.key), void 0 !== o.ref && (i = o.ref), o) d.call(o, a) && !s.hasOwnProperty(a) && (n[a] = o[a]);
        if (e && e.defaultProps)
          for (a in o = e.defaultProps) void 0 === n[a] && (n[a] = o[a]);
        return {
          $$typeof: t,
          type: e,
          key: f,
          ref: i,
          props: n,
          _owner: l.current
        }
      }
      o.Fragment = n, o.jsx = f, o.jsxs = f
    },
    91029: (e, o, r) => {
      e.exports = r(65039)
    },
    6037: (e, o, r) => {
      r.r(o), r.d(o, {
        Portal: () => s,
        Root: () => f
      });
      var a = r(62229),
        t = r(44853),
        n = r(31873),
        d = r(66698),
        l = r(91029),
        s = a.forwardRef(((e, o) => {
          const {
            container: r,
            ...s
          } = e, [f, i] = a.useState(!1);
          (0, d.N)((() => i(!0)), []);
          const u = r || f && globalThis?.document?.body;
          return u ? t.createPortal((0, l.jsx)(n.sG.div, {
            ...s,
            ref: o
          }), u) : null
        }));
      s.displayName = "Portal";
      var f = s
    },
    31873: (e, o, r) => {
      r.d(o, {
        hO: () => s,
        sG: () => l
      });
      var a = r(62229),
        t = r(44853),
        n = r(16741),
        d = r(91029),
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
        }), {});

      function s(e, o) {
        e && t.flushSync((() => e.dispatchEvent(o)))
      }
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