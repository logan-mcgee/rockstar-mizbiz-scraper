! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "750d04cd-d1e3-450c-9395-2d872827c770", e._sentryDebugIdIdentifier = "sentry-dbid-750d04cd-d1e3-450c-9395-2d872827c770")
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
  [4784], {
    12403: (e, d, o) => {
      o.r(d), o.d(d, {
        Portal: () => f,
        Root: () => i
      });
      var a = o(62229),
        n = o(44853),
        t = o(34730),
        l = o(91029),
        r = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, d) => {
          const o = a.forwardRef(((e, o) => {
            const {
              asChild: a,
              ...n
            } = e, r = a ? t.Slot : d;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(r, {
              ...n,
              ref: o
            })
          }));
          return o.displayName = `Primitive.${d}`, {
            ...e,
            [d]: o
          }
        }), {}),
        s = o(66698),
        f = a.forwardRef(((e, d) => {
          const {
            container: o,
            ...t
          } = e, [f, i] = a.useState(!1);
          (0, s.N)((() => i(!0)), []);
          const u = o || f && globalThis?.document?.body;
          return u ? n.createPortal((0, l.jsx)(r.div, {
            ...t,
            ref: d
          }), u) : null
        }));
      f.displayName = "Portal";
      var i = f
    },
    66698: (e, d, o) => {
      o.d(d, {
        N: () => n
      });
      var a = o(62229),
        n = Boolean(globalThis?.document) ? a.useLayoutEffect : () => {}
    }
  }
]);