! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6129fa86-b25c-404d-b8a5-823d55b915c0", e._sentryDebugIdIdentifier = "sentry-dbid-6129fa86-b25c-404d-b8a5-823d55b915c0")
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
  [616, 3473, 5854, 7385, 9766], {
    9766: (e, a, o) => {
      o.r(a), o.d(a, {
        Root: () => f,
        VISUALLY_HIDDEN_STYLES: () => n,
        VisuallyHidden: () => s
      });
      var t = o(71127),
        d = (o(30306), o(21222)),
        r = o(25854),
        l = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, a) => {
          const o = (0, d.createSlot)(`Primitive.${a}`),
            l = t.forwardRef(((e, t) => {
              const {
                asChild: d,
                ...l
              } = e, n = d ? o : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, r.jsx)(n, {
                ...l,
                ref: t
              })
            }));
          return l.displayName = `Primitive.${a}`, {
            ...e,
            [a]: l
          }
        }), {}),
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
        s = t.forwardRef(((e, a) => (0, r.jsx)(l.span, {
          ...e,
          ref: a,
          style: {
            ...n,
            ...e.style
          }
        })));
      s.displayName = "VisuallyHidden";
      var f = s
    },
    25854: (e, a, o) => {
      e.exports = o(41454)
    },
    41454: (e, a, o) => {
      var t = o(71127),
        d = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        n = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, o) {
        var t, r = {},
          f = null,
          i = null;
        for (t in void 0 !== o && (f = "" + o), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (i = a.ref), a) l.call(a, t) && !s.hasOwnProperty(t) && (r[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === r[t] && (r[t] = a[t]);
        return {
          $$typeof: d,
          type: e,
          key: f,
          ref: i,
          props: r,
          _owner: n.current
        }
      }
      a.Fragment = r, a.jsx = f, a.jsxs = f
    }
  }
]);