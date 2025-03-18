! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c7cb9355-9c68-4c8f-99a6-4737940bf2a5", e._sentryDebugIdIdentifier = "sentry-dbid-c7cb9355-9c68-4c8f-99a6-4737940bf2a5")
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
    84082: (e, a, d) => {
      d.r(a), d.d(a, {
        Root: () => s,
        VisuallyHidden: () => t
      });
      var o = d(62229),
        n = (d(44853), d(21222)),
        r = d(91029),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, a) => {
          const d = o.forwardRef(((e, d) => {
            const {
              asChild: o,
              ...l
            } = e, t = o ? n.Slot : a;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, r.jsx)(t, {
              ...l,
              ref: d
            })
          }));
          return d.displayName = `Primitive.${a}`, {
            ...e,
            [a]: d
          }
        }), {}),
        t = o.forwardRef(((e, a) => (0, r.jsx)(l.span, {
          ...e,
          ref: a,
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