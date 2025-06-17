! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "816e8c6f-6b3d-4400-842e-dba0dd4cd17b", e._sentryDebugIdIdentifier = "sentry-dbid-816e8c6f-6b3d-4400-842e-dba0dd4cd17b")
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
  [616, 2999, 3473, 5380, 5854], {
    25854: (e, a, d) => {
      e.exports = d(41454)
    },
    41454: (e, a, d) => {
      var o = d(71127),
        t = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        l = Object.prototype.hasOwnProperty,
        n = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, d) {
        var o, r = {},
          f = null,
          i = null;
        for (o in void 0 !== d && (f = "" + d), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (i = a.ref), a) l.call(a, o) && !s.hasOwnProperty(o) && (r[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === r[o] && (r[o] = a[o]);
        return {
          $$typeof: t,
          type: e,
          key: f,
          ref: i,
          props: r,
          _owner: n.current
        }
      }
      a.Fragment = r, a.jsx = f, a.jsxs = f
    },
    62999: (e, a, d) => {
      d.r(a), d.d(a, {
        Root: () => s,
        VISUALLY_HIDDEN_STYLES: () => l,
        VisuallyHidden: () => n
      });
      var o = d(71127),
        t = d(85100),
        r = d(25854),
        l = Object.freeze({
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
        n = o.forwardRef(((e, a) => (0, r.jsx)(t.sG.span, {
          ...e,
          ref: a,
          style: {
            ...l,
            ...e.style
          }
        })));
      n.displayName = "VisuallyHidden";
      var s = n
    },
    85100: (e, a, d) => {
      d.d(a, {
        hO: () => s,
        sG: () => n
      });
      var o = d(71127),
        t = d(18429),
        r = d(21222),
        l = d(25854),
        n = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, a) => {
          const d = (0, r.createSlot)(`Primitive.${a}`),
            t = o.forwardRef(((e, o) => {
              const {
                asChild: t,
                ...r
              } = e, n = t ? d : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, l.jsx)(n, {
                ...r,
                ref: o
              })
            }));
          return t.displayName = `Primitive.${a}`, {
            ...e,
            [a]: t
          }
        }), {});

      function s(e, a) {
        e && t.flushSync((() => e.dispatchEvent(a)))
      }
    }
  }
]);