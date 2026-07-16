try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "d7f24c0c-3736-4832-94e6-580df82880e6", e._sentryDebugIdIdentifier = "sentry-dbid-d7f24c0c-3736-4832-94e6-580df82880e6")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [2023, 2174, 4404, 4555, 9793], {
    94931(e, r, d) {
      var o = d(4637),
        t = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function i(e, r, d) {
        var o, n = {},
          i = null,
          f = null;
        for (o in void 0 !== d && (i = "" + d), void 0 !== r.key && (i = "" + r.key), void 0 !== r.ref && (f = r.ref), r) a.call(r, o) && !l.hasOwnProperty(o) && (n[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === n[o] && (n[o] = r[o]);
        return {
          $$typeof: t,
          type: e,
          key: i,
          ref: f,
          props: n,
          _owner: s.current
        }
      }
      r.Fragment = n, r.jsx = i, r.jsxs = i
    },
    39793(e, r, d) {
      e.exports = d(94931)
    },
    80082(e, r, d) {
      d.d(r, {
        hO: () => l,
        sG: () => s
      });
      var o = d(4637),
        t = d(84017),
        n = d(50486),
        a = d(39793),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
          const d = (0, n.createSlot)(`Primitive.${r}`),
            t = o.forwardRef((e, o) => {
              const {
                asChild: t,
                ...n
              } = e, s = t ? d : r;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, a.jsx)(s, {
                ...n,
                ref: o
              })
            });
          return t.displayName = `Primitive.${r}`, {
            ...e,
            [r]: t
          }
        }, {});

      function l(e, r) {
        e && t.flushSync(() => e.dispatchEvent(r))
      }
    },
    92023(e, r, d) {
      d.r(r), d.d(r, {
        Root: () => l,
        VISUALLY_HIDDEN_STYLES: () => a,
        VisuallyHidden: () => s
      });
      var o = d(4637),
        t = d(80082),
        n = d(39793),
        a = Object.freeze({
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
        s = o.forwardRef((e, r) => (0, n.jsx)(t.sG.span, {
          ...e,
          ref: r,
          style: {
            ...a,
            ...e.style
          }
        }));
      s.displayName = "VisuallyHidden";
      var l = s
    }
  }
]);