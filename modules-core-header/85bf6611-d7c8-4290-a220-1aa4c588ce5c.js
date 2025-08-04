try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "85bf6611-d7c8-4290-a220-1aa4c588ce5c", e._sentryDebugIdIdentifier = "sentry-dbid-85bf6611-d7c8-4290-a220-1aa4c588ce5c")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "481a8939e4cf70a1b263cf01cb4b1a83d2a29ebd"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [954, 5716, 6247, 8573, 8628], {
    18628: (e, a, r) => {
      r.r(a), r.d(a, {
        Root: () => l,
        VISUALLY_HIDDEN_STYLES: () => n,
        VisuallyHidden: () => s
      });
      var o = r(71127),
        d = r(51347),
        t = r(70954),
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
        s = o.forwardRef(((e, a) => (0, t.jsx)(d.sG.span, {
          ...e,
          ref: a,
          style: {
            ...n,
            ...e.style
          }
        })));
      s.displayName = "VisuallyHidden";
      var l = s
    },
    51347: (e, a, r) => {
      r.d(a, {
        hO: () => l,
        sG: () => s
      });
      var o = r(71127),
        d = r(18429),
        t = r(21222),
        n = r(70954),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, a) => {
          const r = (0, t.createSlot)(`Primitive.${a}`),
            d = o.forwardRef(((e, o) => {
              const {
                asChild: d,
                ...t
              } = e, s = d ? r : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(s, {
                ...t,
                ref: o
              })
            }));
          return d.displayName = `Primitive.${a}`, {
            ...e,
            [a]: d
          }
        }), {});

      function l(e, a) {
        e && d.flushSync((() => e.dispatchEvent(a)))
      }
    },
    70954: (e, a, r) => {
      e.exports = r(92834)
    },
    92834: (e, a, r) => {
      var o = r(71127),
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

      function i(e, a, r) {
        var o, t = {},
          i = null,
          f = null;
        for (o in void 0 !== r && (i = "" + r), void 0 !== a.key && (i = "" + a.key), void 0 !== a.ref && (f = a.ref), a) n.call(a, o) && !l.hasOwnProperty(o) && (t[o] = a[o]);
        if (e && e.defaultProps)
          for (o in a = e.defaultProps) void 0 === t[o] && (t[o] = a[o]);
        return {
          $$typeof: d,
          type: e,
          key: i,
          ref: f,
          props: t,
          _owner: s.current
        }
      }
      a.Fragment = t, a.jsx = i, a.jsxs = i
    }
  }
]);