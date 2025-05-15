! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "acbe9126-b189-4317-980a-038fee95111f", e._sentryDebugIdIdentifier = "sentry-dbid-acbe9126-b189-4317-980a-038fee95111f")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [616, 1029, 3410, 3473, 5854], {
    25854: (e, a, t) => {
      e.exports = t(41454)
    },
    41454: (e, a, t) => {
      var o = t(71127),
        r = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        d = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, t) {
        var o, l = {},
          f = null,
          i = null;
        for (o in void 0 !== t && (f = "" + t), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (i = a.ref), a) n.call(a, o) && !s.hasOwnProperty(o) && (l[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === l[o] && (l[o] = a[o]);
        return {
          $$typeof: r,
          type: e,
          key: f,
          ref: i,
          props: l,
          _owner: d.current
        }
      }
      a.Fragment = l, a.jsx = f, a.jsxs = f
    },
    61029: (e, a, t) => {
      t.r(a), t.d(a, {
        Portal: () => s,
        Root: () => f
      });
      var o = t(71127),
        r = t(18429),
        l = t(85100),
        n = t(85307),
        d = t(25854),
        s = o.forwardRef(((e, a) => {
          const {
            container: t,
            ...s
          } = e, [f, i] = o.useState(!1);
          (0, n.N)((() => i(!0)), []);
          const u = t || f && globalThis?.document?.body;
          return u ? r.createPortal((0, d.jsx)(l.sG.div, {
            ...s,
            ref: a
          }), u) : null
        }));
      s.displayName = "Portal";
      var f = s
    },
    85100: (e, a, t) => {
      t.d(a, {
        hO: () => s,
        sG: () => d
      });
      var o = t(71127),
        r = t(18429),
        l = t(21222),
        n = t(25854),
        d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, a) => {
          const t = (0, l.createSlot)(`Primitive.${a}`),
            r = o.forwardRef(((e, o) => {
              const {
                asChild: r,
                ...l
              } = e, d = r ? t : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(d, {
                ...l,
                ref: o
              })
            }));
          return r.displayName = `Primitive.${a}`, {
            ...e,
            [a]: r
          }
        }), {});

      function s(e, a) {
        e && r.flushSync((() => e.dispatchEvent(a)))
      }
    },
    85307: (e, a, t) => {
      t.d(a, {
        N: () => r
      });
      var o = t(71127),
        r = globalThis?.document ? o.useLayoutEffect : () => {}
    }
  }
]);