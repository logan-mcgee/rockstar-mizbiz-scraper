try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "8f4ec71e-6fbe-4400-9465-fbfd093b5675", e._sentryDebugIdIdentifier = "sentry-dbid-8f4ec71e-6fbe-4400-9465-fbfd093b5675")
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
  [851, 2295, 3232, 4676, 7533], {
    12255: (e, r, o) => {
      o.d(r, {
        hO: () => l,
        sG: () => s
      });
      var d = o(71127),
        t = o(18429),
        a = o(37910),
        n = o(42295),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, r) => {
          const o = (0, a.createSlot)(`Primitive.${r}`),
            t = d.forwardRef(((e, d) => {
              const {
                asChild: t,
                ...a
              } = e, s = t ? o : r;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(s, {
                ...a,
                ref: d
              })
            }));
          return t.displayName = `Primitive.${r}`, {
            ...e,
            [r]: t
          }
        }), {});

      function l(e, r) {
        e && t.flushSync((() => e.dispatchEvent(r)))
      }
    },
    20851: (e, r, o) => {
      o.r(r), o.d(r, {
        Root: () => l,
        VISUALLY_HIDDEN_STYLES: () => n,
        VisuallyHidden: () => s
      });
      var d = o(71127),
        t = o(12255),
        a = o(42295),
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
        s = d.forwardRef(((e, r) => (0, a.jsx)(t.sG.span, {
          ...e,
          ref: r,
          style: {
            ...n,
            ...e.style
          }
        })));
      s.displayName = "VisuallyHidden";
      var l = s
    },
    42295: (e, r, o) => {
      e.exports = o(69245)
    },
    69245: (e, r, o) => {
      var d = o(71127),
        t = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, r, o) {
        var d, a = {},
          f = null,
          i = null;
        for (d in void 0 !== o && (f = "" + o), void 0 !== r.key && (f = "" + r.key), void 0 !== r.ref && (i = r.ref), r) n.call(r, d) && !l.hasOwnProperty(d) && (a[d] = r[d]);
        if (e && e.defaultProps)
          for (d in r = e.defaultProps) void 0 === a[d] && (a[d] = r[d]);
        return {
          $$typeof: t,
          type: e,
          key: f,
          ref: i,
          props: a,
          _owner: s.current
        }
      }
      r.Fragment = a, r.jsx = f, r.jsxs = f
    }
  }
]);