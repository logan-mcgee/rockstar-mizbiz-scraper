! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "c7cb9355-9c68-4c8f-99a6-4737940bf2a5", e._sentryDebugIdIdentifier = "sentry-dbid-c7cb9355-9c68-4c8f-99a6-4737940bf2a5")
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
  [1701], {
    84082: (e, d, a) => {
      a.r(d), a.d(d, {
        Root: () => s,
        VisuallyHidden: () => t
      });
      var o = a(62229),
        n = (a(44853), a(21222)),
        r = a(91029),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, d) => {
          const a = o.forwardRef(((e, a) => {
            const {
              asChild: o,
              ...l
            } = e, t = o ? n.Slot : d;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, r.jsx)(t, {
              ...l,
              ref: a
            })
          }));
          return a.displayName = `Primitive.${d}`, {
            ...e,
            [d]: a
          }
        }), {}),
        t = o.forwardRef(((e, d) => (0, r.jsx)(l.span, {
          ...e,
          ref: d,
          style: {
            position: "absolute",
            border: 0,
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            wordWrap: "normal",
            ...e.style
          }
        })));
      t.displayName = "VisuallyHidden";
      var s = t
    }
  }
]);