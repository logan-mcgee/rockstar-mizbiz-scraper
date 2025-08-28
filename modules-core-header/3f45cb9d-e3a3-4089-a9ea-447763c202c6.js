try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "3f45cb9d-e3a3-4089-a9ea-447763c202c6", e._sentryDebugIdIdentifier = "sentry-dbid-3f45cb9d-e3a3-4089-a9ea-447763c202c6")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [954, 4171, 5716, 6552, 8573], {
    51347: (e, o, a) => {
      a.d(o, {
        hO: () => l,
        sG: () => s
      });
      var t = a(71127),
        r = a(18429),
        d = a(21222),
        n = a(70954),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, o) => {
          const a = (0, d.createSlot)(`Primitive.${o}`),
            r = t.forwardRef(((e, t) => {
              const {
                asChild: r,
                ...d
              } = e, s = r ? a : o;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(s, {
                ...d,
                ref: t
              })
            }));
          return r.displayName = `Primitive.${o}`, {
            ...e,
            [o]: r
          }
        }), {});

      function l(e, o) {
        e && r.flushSync((() => e.dispatchEvent(o)))
      }
    },
    70954: (e, o, a) => {
      e.exports = a(92834)
    },
    92600: (e, o, a) => {
      a.d(o, {
        N: () => r
      });
      var t = a(71127),
        r = globalThis?.document ? t.useLayoutEffect : () => {}
    },
    92834: (e, o, a) => {
      var t = a(71127),
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

      function f(e, o, a) {
        var t, d = {},
          f = null,
          i = null;
        for (t in void 0 !== a && (f = "" + a), void 0 !== o.key && (f = "" + o.key), void 0 !== o.ref && (i = o.ref), o) n.call(o, t) && !l.hasOwnProperty(t) && (d[t] = o[t]);
        if (e && e.defaultProps)
          for (t in o = e.defaultProps) void 0 === d[t] && (d[t] = o[t]);
        return {
          $$typeof: r,
          type: e,
          key: f,
          ref: i,
          props: d,
          _owner: s.current
        }
      }
      o.Fragment = d, o.jsx = f, o.jsxs = f
    },
    96552: (e, o, a) => {
      a.r(o), a.d(o, {
        Portal: () => l,
        Root: () => f
      });
      var t = a(71127),
        r = a(18429),
        d = a(51347),
        n = a(92600),
        s = a(70954),
        l = t.forwardRef(((e, o) => {
          const {
            container: a,
            ...l
          } = e, [f, i] = t.useState(!1);
          (0, n.N)((() => i(!0)), []);
          const u = a || f && globalThis?.document?.body;
          return u ? r.createPortal((0, s.jsx)(d.sG.div, {
            ...l,
            ref: o
          }), u) : null
        }));
      l.displayName = "Portal";
      var f = l
    }
  }
]);