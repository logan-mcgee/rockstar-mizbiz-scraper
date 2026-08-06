try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "0fbdf887-de96-47a7-a4a9-4a1fcbe138a9", e._sentryDebugIdIdentifier = "sentry-dbid-0fbdf887-de96-47a7-a4a9-4a1fcbe138a9")
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
  [2174, 4555, 5887, 8268, 9793], {
    94931(e, a, o) {
      var d = o(4637),
        t = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, a, o) {
        var d, r = {},
          f = null,
          i = null;
        for (d in void 0 !== o && (f = "" + o), void 0 !== a.key && (f = "" + a.key), void 0 !== a.ref && (i = a.ref), a) n.call(a, d) && !l.hasOwnProperty(d) && (r[d] = a[d]);
        if (e && e.defaultProps)
          for (d in a = e.defaultProps) void 0 === r[d] && (r[d] = a[d]);
        return {
          $$typeof: t,
          type: e,
          key: f,
          ref: i,
          props: r,
          _owner: s.current
        }
      }
      a.Fragment = r, a.jsx = f, a.jsxs = f
    },
    39793(e, a, o) {
      e.exports = o(94931)
    },
    18268(e, a, o) {
      o.r(a), o.d(a, {
        Portal: () => l,
        Root: () => f
      });
      var d = o(4637),
        t = o(84017),
        r = o(31270),
        n = o(10198),
        s = o(39793),
        l = d.forwardRef((e, a) => {
          const {
            container: o,
            ...l
          } = e, [f, i] = d.useState(!1);
          (0, n.N)(() => i(!0), []);
          const u = o || f && globalThis?.document?.body;
          return u ? t.createPortal((0, s.jsx)(r.sG.div, {
            ...l,
            ref: a
          }), u) : null
        });
      l.displayName = "Portal";
      var f = l
    },
    31270(e, a, o) {
      o.d(a, {
        hO: () => l,
        sG: () => s
      });
      var d = o(4637),
        t = o(84017),
        r = o(50486),
        n = o(39793),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, a) => {
          const o = (0, r.createSlot)(`Primitive.${a}`),
            t = d.forwardRef((e, d) => {
              const {
                asChild: t,
                ...r
              } = e, s = t ? o : a;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(s, {
                ...r,
                ref: d
              })
            });
          return t.displayName = `Primitive.${a}`, {
            ...e,
            [a]: t
          }
        }, {});

      function l(e, a) {
        e && t.flushSync(() => e.dispatchEvent(a))
      }
    },
    10198(e, a, o) {
      o.d(a, {
        N: () => t
      });
      var d = o(4637),
        t = globalThis?.document ? d.useLayoutEffect : () => {}
    }
  }
]);