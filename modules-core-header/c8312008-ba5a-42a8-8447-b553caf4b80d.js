try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "c8312008-ba5a-42a8-8447-b553caf4b80d", e._sentryDebugIdIdentifier = "sentry-dbid-c8312008-ba5a-42a8-8447-b553caf4b80d")
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
  [2174, 4555, 6809, 6936, 9190, 9793], {
    94931(e, o, a) {
      var r = a(4637),
        t = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, o, a) {
        var r, d = {},
          f = null,
          i = null;
        for (r in void 0 !== a && (f = "" + a), void 0 !== o.key && (f = "" + o.key), void 0 !== o.ref && (i = o.ref), o) n.call(o, r) && !l.hasOwnProperty(r) && (d[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === d[r] && (d[r] = o[r]);
        return {
          $$typeof: t,
          type: e,
          key: f,
          ref: i,
          props: d,
          _owner: s.current
        }
      }
      o.Fragment = d, o.jsx = f, o.jsxs = f
    },
    39793(e, o, a) {
      e.exports = a(94931)
    },
    29190(e, o, a) {
      a.r(o), a.d(o, {
        Portal: () => l,
        Root: () => f
      });
      var r = a(4637),
        t = a(84017),
        d = a(20972),
        n = a(86627),
        s = a(39793),
        l = r.forwardRef((e, o) => {
          const {
            container: a,
            ...l
          } = e, [f, i] = r.useState(!1);
          (0, n.N)(() => i(!0), []);
          const u = a || f && globalThis?.document?.body;
          return u ? t.createPortal((0, s.jsx)(d.sG.div, {
            ...l,
            ref: o
          }), u) : null
        });
      l.displayName = "Portal";
      var f = l
    },
    20972(e, o, a) {
      a.d(o, {
        sG: () => n
      });
      var r = a(4637),
        t = (a(84017), a(27937)),
        d = a(39793),
        n = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, o) => {
          const a = (0, t.createSlot)(`Primitive.${o}`),
            n = r.forwardRef((e, r) => {
              const {
                asChild: t,
                ...n
              } = e, s = t ? a : o;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, d.jsx)(s, {
                ...n,
                ref: r
              })
            });
          return n.displayName = `Primitive.${o}`, {
            ...e,
            [o]: n
          }
        }, {})
    },
    86627(e, o, a) {
      a.d(o, {
        N: () => t
      });
      var r = a(4637),
        t = globalThis?.document ? r.useLayoutEffect : () => {}
    }
  }
]);