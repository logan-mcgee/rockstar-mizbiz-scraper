! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      d = (new Error).stack;
    d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "dd79714b-2181-4ce1-af48-314f7e208bd4", e._sentryDebugIdIdentifier = "sentry-dbid-dd79714b-2181-4ce1-af48-314f7e208bd4")
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
  [3696], {
    656: (e, d, a) => {
      a.d(d, {
        hO: () => s,
        sG: () => t
      });
      var o = a(62229),
        n = a(44853),
        r = a(30786),
        l = a(73855),
        t = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce(((e, d) => {
          const a = o.forwardRef(((e, a) => {
            const {
              asChild: o,
              ...n
            } = e, t = o ? r.Slot : d;
            return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(t, {
              ...n,
              ref: a
            })
          }));
          return a.displayName = `Primitive.${d}`, {
            ...e,
            [d]: a
          }
        }), {});

      function s(e, d) {
        e && n.flushSync((() => e.dispatchEvent(d)))
      }
    },
    71315: (e, d, a) => {
      a.r(d), a.d(d, {
        Root: () => t,
        VisuallyHidden: () => l
      });
      var o = a(62229),
        n = a(656),
        r = a(73855),
        l = o.forwardRef(((e, d) => (0, r.jsx)(n.sG.span, {
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
      l.displayName = "VisuallyHidden";
      var t = l
    }
  }
]);