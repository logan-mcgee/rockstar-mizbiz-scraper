! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ad4164db-0984-4d51-a517-2e4418b5e74b", e._sentryDebugIdIdentifier = "sentry-dbid-ad4164db-0984-4d51-a517-2e4418b5e74b")
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
    28844: (e, a, d) => {
      d.r(a), d.d(a, {
        Portal: () => f,
        Root: () => i
      });
      var o = d(62229),
        n = d(44853),
        t = d(34730),
        l = d(73855),
        r = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, a) => {
          const d = o.forwardRef(((e, d) => {
            const {
              asChild: o,
              ...n
            } = e, r = o ? t.Slot : a;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(r, {
              ...n,
              ref: d
            })
          }));
          return d.displayName = `Primitive.${a}`, {
            ...e,
            [a]: d
          }
        }), {}),
        s = d(92600),
        f = o.forwardRef(((e, a) => {
          const {
            container: d,
            ...t
          } = e, [f, i] = o.useState(!1);
          (0, s.N)((() => i(!0)), []);
          const u = d || f && globalThis?.document?.body;
          return u ? n.createPortal((0, l.jsx)(r.div, {
            ...t,
            ref: a
          }), u) : null
        }));
      f.displayName = "Portal";
      var i = f
    },
    92600: (e, a, d) => {
      d.d(a, {
        N: () => n
      });
      var o = d(62229),
        n = Boolean(globalThis?.document) ? o.useLayoutEffect : () => {}
    }
  }
]);