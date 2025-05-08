! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      o = (new Error).stack;
    o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "c151ce1e-49dc-429c-b511-fd39bad292fe", e._sentryDebugIdIdentifier = "sentry-dbid-c151ce1e-49dc-429c-b511-fd39bad292fe")
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
  [9920, 3855, 6236, 9093, 1474, 7539], {
    32469: (e, o, r) => {
      var a = r(62229),
        d = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, o, r) {
        var a, t = {},
          f = null,
          c = null;
        for (a in void 0 !== r && (f = "" + r), void 0 !== o.key && (f = "" + o.key), void 0 !== o.ref && (c = o.ref), o) n.call(o, a) && !s.hasOwnProperty(a) && (t[a] = o[a]);
        if (e && e.defaultProps)
          for (a in o = e.defaultProps) void 0 === t[a] && (t[a] = o[a]);
        return {
          $$typeof: d,
          type: e,
          key: f,
          ref: c,
          props: t,
          _owner: l.current
        }
      }
      o.Fragment = t, o.jsx = f, o.jsxs = f
    },
    73855: (e, o, r) => {
      e.exports = r(32469)
    },
    7539: (e, o, r) => {
      r.r(o), r.d(o, {
        Portal: () => s,
        Root: () => f
      });
      var a = r(62229),
        d = r(44853),
        t = r(67774),
        n = r(46217),
        l = r(73855),
        s = a.forwardRef(((e, o) => {
          const {
            container: r,
            ...s
          } = e, [f, c] = a.useState(!1);
          (0, n.N)((() => c(!0)), []);
          const i = r || f && globalThis?.document?.body;
          return i ? d.createPortal((0, l.jsx)(t.sG.div, {
            ...s,
            ref: o
          }), i) : null
        }));
      s.displayName = "Portal";
      var f = s
    },
    67774: (e, o, r) => {
      r.d(o, {
        hO: () => s,
        sG: () => l
      });
      var a = r(62229),
        d = r(44853),
        t = r(78217),
        n = r(73855),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, o) => {
          const r = (0, t.createSlot)(`Primitive.${o}`),
            d = a.forwardRef(((e, a) => {
              const {
                asChild: d,
                ...t
              } = e, l = d ? r : o;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(l, {
                ...t,
                ref: a
              })
            }));
          return d.displayName = `Primitive.${o}`, {
            ...e,
            [o]: d
          }
        }), {});

      function s(e, o) {
        e && d.flushSync((() => e.dispatchEvent(o)))
      }
    },
    46217: (e, o, r) => {
      r.d(o, {
        N: () => d
      });
      var a = r(62229),
        d = globalThis?.document ? a.useLayoutEffect : () => {}
    }
  }
]);