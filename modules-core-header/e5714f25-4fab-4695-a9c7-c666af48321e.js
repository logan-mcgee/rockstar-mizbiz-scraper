try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "e5714f25-4fab-4695-a9c7-c666af48321e", e._sentryDebugIdIdentifier = "sentry-dbid-e5714f25-4fab-4695-a9c7-c666af48321e")
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
  [1629, 2295, 4010, 4676, 7533], {
    69245(e, r, a) {
      var o = a(71127),
        d = Symbol.for("react.element"),
        t = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, r, a) {
        var o, t = {},
          f = null,
          i = null;
        for (o in void 0 !== a && (f = "" + a), void 0 !== r.key && (f = "" + r.key), void 0 !== r.ref && (i = r.ref), r) n.call(r, o) && !l.hasOwnProperty(o) && (t[o] = r[o]);
        if (e && e.defaultProps)
          for (o in r = e.defaultProps) void 0 === t[o] && (t[o] = r[o]);
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
    42295(e, r, a) {
      e.exports = a(69245)
    },
    81629(e, r, a) {
      a.r(r), a.d(r, {
        Root: () => l,
        VISUALLY_HIDDEN_STYLES: () => n,
        VisuallyHidden: () => s
      });
      var o = a(71127),
        d = a(78004),
        t = a(42295),
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
        s = o.forwardRef((e, r) => (0, t.jsx)(d.sG.span, {
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
    78004(e, r, a) {
      a.d(r, {
        hO: () => l,
        sG: () => s
      });
      var o = a(71127),
        d = a(18429),
        t = a(38863),
        n = a(42295),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, r) => {
          const a = (0, t.createSlot)(`Primitive.${r}`),
            d = o.forwardRef((e, o) => {
              const {
                asChild: d,
                ...t
              } = e, s = d ? a : r;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(s, {
                ...t,
                ref: o
              })
            });
          return d.displayName = `Primitive.${r}`, {
            ...e,
            [r]: d
          }
        }, {});

      function l(e, r) {
        e && d.flushSync(() => e.dispatchEvent(r))
      }
    }
  }
]);