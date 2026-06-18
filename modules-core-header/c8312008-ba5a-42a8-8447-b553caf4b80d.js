try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c8312008-ba5a-42a8-8447-b553caf4b80d", e._sentryDebugIdIdentifier = "sentry-dbid-c8312008-ba5a-42a8-8447-b553caf4b80d")
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
    94931(e, a, o) {
      var r = o(4637),
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

      function f(e, a, o) {
        var r, d = {},
          f = null,
          i = null;
        for (r in void 0 !== o && (f = "" + o), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (i = a.ref), a) n.call(a, r) && !l.hasOwnProperty(r) && (d[r] = a[r]);
        if (e && e.defaultProps)
          for (r in a = e.defaultProps) void 0 === d[r] && (d[r] = a[r]);
        return {
          $$typeof: t,
          type: e,
          key: f,
          ref: i,
          props: d,
          _owner: s.current
        }
      }
      a.Fragment = d, a.jsx = f, a.jsxs = f
    },
    39793(e, a, o) {
      e.exports = o(94931)
    },
    29190(e, a, o) {
      o.r(a), o.d(a, {
        Portal: () => l,
        Root: () => f
      });
      var r = o(4637),
        t = o(84017),
        d = o(20972),
        n = o(86627),
        s = o(39793),
        l = r.forwardRef((e, a) => {
          const {
            container: o,
            ...l
          } = e, [f, i] = r.useState(!1);
          (0, n.N)(() => i(!0), []);
          const u = o || f && globalThis?.document?.body;
          return u ? t.createPortal((0, s.jsx)(d.sG.div, {
            ...l,
            ref: a
          }), u) : null
        });
      l.displayName = "Portal";
      var f = l
    },
    20972(e, a, o) {
      o.d(a, {
        sG: () => n
      });
      var r = o(4637),
        t = (o(84017), o(27937)),
        d = o(39793),
        n = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, a) => {
          const o = (0, t.createSlot)(`Primitive.${a}`),
            n = r.forwardRef((e, r) => {
              const {
                asChild: t,
                ...n
              } = e, s = t ? o : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, d.jsx)(s, {
                ...n,
                ref: r
              })
            });
          return n.displayName = `Primitive.${a}`, {
            ...e,
            [a]: n
          }
        }, {})
    },
    86627(e, a, o) {
      o.d(a, {
        N: () => t
      });
      var r = o(4637),
        t = globalThis?.document ? r.useLayoutEffect : () => {}
    }
  }
]);