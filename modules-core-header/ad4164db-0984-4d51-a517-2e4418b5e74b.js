! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "ad4164db-0984-4d51-a517-2e4418b5e74b", e._sentryDebugIdIdentifier = "sentry-dbid-ad4164db-0984-4d51-a517-2e4418b5e74b")
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
  [6463], {
    28844: (e, d, a) => {
      a.r(d), a.d(d, {
        Portal: () => f,
        Root: () => i
      });
      var o = a(62229),
        n = a(44853),
        t = a(34730),
        l = a(73855),
        r = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, d) => {
          const a = o.forwardRef(((e, a) => {
            const {
              asChild: o,
              ...n
            } = e, r = o ? t.Slot : d;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(r, {
              ...n,
              ref: a
            })
          }));
          return a.displayName = `Primitive.${d}`, {
            ...e,
            [d]: a
          }
        }), {}),
        s = a(92600),
        f = o.forwardRef(((e, d) => {
          const {
            container: a,
            ...t
          } = e, [f, i] = o.useState(!1);
          (0, s.N)((() => i(!0)), []);
          const b = a || f && globalThis?.document?.body;
          return b ? n.createPortal((0, l.jsx)(r.div, {
            ...t,
            ref: d
          }), b) : null
        }));
      f.displayName = "Portal";
      var i = f
    },
    92600: (e, d, a) => {
      a.d(d, {
        N: () => n
      });
      var o = a(62229),
        n = Boolean(globalThis?.document) ? o.useLayoutEffect : () => {}
    }
  }
]);