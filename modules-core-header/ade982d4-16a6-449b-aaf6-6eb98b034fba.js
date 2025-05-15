! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ade982d4-16a6-449b-aaf6-6eb98b034fba", e._sentryDebugIdIdentifier = "sentry-dbid-ade982d4-16a6-449b-aaf6-6eb98b034fba")
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
  [5380], {
    62999: (e, a, d) => {
      d.r(a), d.d(a, {
        Root: () => s,
        VISUALLY_HIDDEN_STYLES: () => n,
        VisuallyHidden: () => r
      });
      var t = d(71127),
        o = d(85100),
        l = d(25854),
        n = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        r = t.forwardRef(((e, a) => (0, l.jsx)(o.sG.span, {
          ...e,
          ref: a,
          style: {
            ...n,
            ...e.style
          }
        })));
      r.displayName = "VisuallyHidden";
      var s = r
    },
    85100: (e, a, d) => {
      d.d(a, {
        hO: () => s,
        sG: () => r
      });
      var t = d(71127),
        o = d(18429),
        l = d(21222),
        n = d(25854),
        r = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, a) => {
          const d = (0, l.createSlot)(`Primitive.${a}`),
            o = t.forwardRef(((e, t) => {
              const {
                asChild: o,
                ...l
              } = e, r = o ? d : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(r, {
                ...l,
                ref: t
              })
            }));
          return o.displayName = `Primitive.${a}`, {
            ...e,
            [a]: o
          }
        }), {});

      function s(e, a) {
        e && o.flushSync((() => e.dispatchEvent(a)))
      }
    }
  }
]);