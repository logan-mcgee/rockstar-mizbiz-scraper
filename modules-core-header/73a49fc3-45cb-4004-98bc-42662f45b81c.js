try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "73a49fc3-45cb-4004-98bc-42662f45b81c", e._sentryDebugIdIdentifier = "sentry-dbid-73a49fc3-45cb-4004-98bc-42662f45b81c")
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
  [1436, 2295, 4676, 9055], {
    42295: (e, r, o) => {
      e.exports = o(69245)
    },
    69055: (e, r, o) => {
      o.r(r), o.d(r, {
        Root: () => l,
        VISUALLY_HIDDEN_STYLES: () => n,
        VisuallyHidden: () => s
      });
      var a = o(71127),
        t = o(78004),
        d = o(42295),
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
        s = a.forwardRef((e, r) => (0, d.jsx)(t.sG.span, {
          ...e,
          ref: r,
          style: {
            ...n,
            ...e.style
          }
        }));
      s.displayName = "VisuallyHidden";
      var l = s
    },
    69245: (e, r, o) => {
      var a = o(71127),
        t = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, r, o) {
        var a, d = {},
          f = null,
          i = null;
        for (a in void 0 !== o && (f = "" + o), void 0 !== r.key && (f = "" + r.key), void 0 !== r.ref && (i = r.ref), r) n.call(r, a) && !l.hasOwnProperty(a) && (d[a] = r[a]);
        if (e && e.defaultProps)
          for (a in r = e.defaultProps) void 0 === d[a] && (d[a] = r[a]);
        return {
          $$typeof: t,
          type: e,
          key: f,
          ref: i,
          props: d,
          _owner: s.current
        }
      }
      r.Fragment = d, r.jsx = f, r.jsxs = f
    },
    78004: (e, r, o) => {
      o.d(r, {
        hO: () => l,
        sG: () => s
      });
      var a = o(71127),
        t = o(18429),
        d = o(45824),
        n = o(42295),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
          const o = (0, d.createSlot)(`Primitive.${r}`),
            t = a.forwardRef((e, a) => {
              const {
                asChild: t,
                ...d
              } = e, s = t ? o : r;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(s, {
                ...d,
                ref: a
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
    }
  }
]);