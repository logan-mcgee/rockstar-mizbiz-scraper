try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "06a25dfc-3f45-44d7-8064-330f52a87cbb", e._sentryDebugIdIdentifier = "sentry-dbid-06a25dfc-3f45-44d7-8064-330f52a87cbb")
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
  [1121, 2295, 3502, 4676, 7533], {
    69245(e, r, d) {
      var o = d(71127),
        a = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, r, d) {
        var o, t = {},
          f = null,
          i = null;
        for (o in void 0 !== d && (f = "" + d), void 0 !== r.key && (f = "" + r.key), void 0 !== r.ref && (i = r.ref), r) n.call(r, o) && !l.hasOwnProperty(o) && (t[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === t[o] && (t[o] = r[o]);
        return {
          $$typeof: a,
          type: e,
          key: f,
          ref: i,
          props: t,
          _owner: s.current
        }
      }
      r.Fragment = t, r.jsx = f, r.jsxs = f
    },
    42295(e, r, d) {
      e.exports = d(69245)
    },
    78004(e, r, d) {
      d.d(r, {
        hO: () => l,
        sG: () => s
      });
      var o = d(71127),
        a = d(18429),
        t = d(38863),
        n = d(42295),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
          const d = (0, t.createSlot)(`Primitive.${r}`),
            a = o.forwardRef((e, o) => {
              const {
                asChild: a,
                ...t
              } = e, s = a ? d : r;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(s, {
                ...t,
                ref: o
              })
            });
          return a.displayName = `Primitive.${r}`, {
            ...e,
            [r]: a
          }
        }, {});

      function l(e, r) {
        e && a.flushSync(() => e.dispatchEvent(r))
      }
    },
    33502(e, r, d) {
      d.r(r), d.d(r, {
        Root: () => l,
        VISUALLY_HIDDEN_STYLES: () => n,
        VisuallyHidden: () => s
      });
      var o = d(71127),
        a = d(78004),
        t = d(42295),
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
        s = o.forwardRef((e, r) => (0, t.jsx)(a.sG.span, {
          ...e,
          ref: r,
          style: {
            ...n,
            ...e.style
          }
        }));
      s.displayName = "VisuallyHidden";
      var l = s
    }
  }
]);