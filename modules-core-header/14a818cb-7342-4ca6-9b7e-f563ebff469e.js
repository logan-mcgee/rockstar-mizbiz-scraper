try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "14a818cb-7342-4ca6-9b7e-f563ebff469e", e._sentryDebugIdIdentifier = "sentry-dbid-14a818cb-7342-4ca6-9b7e-f563ebff469e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "2a74753c0c949d4b2cbcf6cb65742761c430cda0",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "2a74753c0c949d4b2cbcf6cb65742761c430cda0"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [616, 2999, 3473, 5380, 5854], {
    25854: (e, r, o) => {
      e.exports = o(41454)
    },
    41454: (e, r, o) => {
      var a = o(71127),
        d = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, r, o) {
        var a, t = {},
          f = null,
          i = null;
        for (a in void 0 !== o && (f = "" + o), void 0 !== r.key && (f = "" + r.key), void 0 !== r.ref && (i = r.ref), r) n.call(r, a) && !l.hasOwnProperty(a) && (t[a] = r[a]);
        if (e && e.defaultProps)
          for (a in r = e.defaultProps) void 0 === t[a] && (t[a] = r[a]);
        return {
          $$typeof: d,
          type: e,
          key: f,
          ref: i,
          props: t,
          _owner: s.current
        }
      }
      r.Fragment = t, r.jsx = f, r.jsxs = f
    },
    62999: (e, r, o) => {
      o.r(r), o.d(r, {
        Root: () => l,
        VISUALLY_HIDDEN_STYLES: () => n,
        VisuallyHidden: () => s
      });
      var a = o(71127),
        d = o(85100),
        t = o(25854),
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
        s = a.forwardRef(((e, r) => (0, t.jsx)(d.sG.span, {
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
    85100: (e, r, o) => {
      o.d(r, {
        hO: () => l,
        sG: () => s
      });
      var a = o(71127),
        d = o(18429),
        t = o(21222),
        n = o(25854),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, r) => {
          const o = (0, t.createSlot)(`Primitive.${r}`),
            d = a.forwardRef(((e, a) => {
              const {
                asChild: d,
                ...t
              } = e, s = d ? o : r;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(s, {
                ...t,
                ref: a
              })
            }));
          return d.displayName = `Primitive.${r}`, {
            ...e,
            [r]: d
          }
        }), {});

      function l(e, r) {
        e && d.flushSync((() => e.dispatchEvent(r)))
      }
    }
  }
]);