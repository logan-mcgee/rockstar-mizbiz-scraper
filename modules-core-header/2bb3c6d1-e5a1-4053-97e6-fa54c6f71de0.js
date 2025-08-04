try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2bb3c6d1-e5a1-4053-97e6-fa54c6f71de0", e._sentryDebugIdIdentifier = "sentry-dbid-2bb3c6d1-e5a1-4053-97e6-fa54c6f71de0")
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
  [954, 4171, 5716, 6552, 8573], {
    51347: (e, a, o) => {
      o.d(a, {
        hO: () => l,
        sG: () => s
      });
      var t = o(71127),
        r = o(18429),
        d = o(21222),
        n = o(70954),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, a) => {
          const o = (0, d.createSlot)(`Primitive.${a}`),
            r = t.forwardRef(((e, t) => {
              const {
                asChild: r,
                ...d
              } = e, s = r ? o : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(s, {
                ...d,
                ref: t
              })
            }));
          return r.displayName = `Primitive.${a}`, {
            ...e,
            [a]: r
          }
        }), {});

      function l(e, a) {
        e && r.flushSync((() => e.dispatchEvent(a)))
      }
    },
    70954: (e, a, o) => {
      e.exports = o(92834)
    },
    92600: (e, a, o) => {
      o.d(a, {
        N: () => r
      });
      var t = o(71127),
        r = globalThis?.document ? t.useLayoutEffect : () => {}
    },
    92834: (e, a, o) => {
      var t = o(71127),
        r = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, o) {
        var t, d = {},
          f = null,
          i = null;
        for (t in void 0 !== o && (f = "" + o), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (i = a.ref), a) n.call(a, t) && !l.hasOwnProperty(t) && (d[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === d[t] && (d[t] = a[t]);
        return {
          $$typeof: r,
          type: e,
          key: f,
          ref: i,
          props: d,
          _owner: s.current
        }
      }
      a.Fragment = d, a.jsx = f, a.jsxs = f
    },
    96552: (e, a, o) => {
      o.r(a), o.d(a, {
        Portal: () => l,
        Root: () => f
      });
      var t = o(71127),
        r = o(18429),
        d = o(51347),
        n = o(92600),
        s = o(70954),
        l = t.forwardRef(((e, a) => {
          const {
            container: o,
            ...l
          } = e, [f, i] = t.useState(!1);
          (0, n.N)((() => i(!0)), []);
          const u = o || f && globalThis?.document?.body;
          return u ? r.createPortal((0, s.jsx)(d.sG.div, {
            ...l,
            ref: a
          }), u) : null
        }));
      l.displayName = "Portal";
      var f = l
    }
  }
]);