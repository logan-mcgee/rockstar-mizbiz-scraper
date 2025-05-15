! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "cc67a568-84bb-40df-9bc6-7041c9295e7e", e._sentryDebugIdIdentifier = "sentry-dbid-cc67a568-84bb-40df-9bc6-7041c9295e7e")
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
  [3410], {
    61029: (e, a, t) => {
      t.r(a), t.d(a, {
        Portal: () => s,
        Root: () => f
      });
      var o = t(71127),
        d = t(18429),
        l = t(85100),
        n = t(85307),
        r = t(25854),
        s = o.forwardRef(((e, a) => {
          const {
            container: t,
            ...s
          } = e, [f, i] = o.useState(!1);
          (0, n.N)((() => i(!0)), []);
          const u = t || f && globalThis?.document?.body;
          return u ? d.createPortal((0, r.jsx)(l.sG.div, {
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
        sG: () => r
      });
      var o = t(71127),
        d = t(18429),
        l = t(21222),
        n = t(25854),
        r = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, a) => {
          const t = (0, l.createSlot)(`Primitive.${a}`),
            d = o.forwardRef(((e, o) => {
              const {
                asChild: d,
                ...l
              } = e, r = d ? t : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(r, {
                ...l,
                ref: o
              })
            }));
          return d.displayName = `Primitive.${a}`, {
            ...e,
            [a]: d
          }
        }), {});

      function s(e, a) {
        e && d.flushSync((() => e.dispatchEvent(a)))
      }
    },
    85307: (e, a, t) => {
      t.d(a, {
        N: () => d
      });
      var o = t(71127),
        d = globalThis?.document ? o.useLayoutEffect : () => {}
    }
  }
]);