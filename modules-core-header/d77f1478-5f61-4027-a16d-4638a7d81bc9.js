try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "d77f1478-5f61-4027-a16d-4638a7d81bc9", e._sentryDebugIdIdentifier = "sentry-dbid-d77f1478-5f61-4027-a16d-4638a7d81bc9")
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
  [616, 1029, 3410, 3473, 5854], {
    25854: (e, o, t) => {
      e.exports = t(41454)
    },
    41454: (e, o, t) => {
      var r = t(71127),
        a = Symbol.for("react.element"),
        d = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function f(e, o, t) {
        var r, d = {},
          f = null,
          i = null;
        for (r in void 0 !== t && (f = "" + t), void 0 !== o.key && (f = "" + o.key), void 0 !== o.ref && (i = o.ref), o) n.call(o, r) && !l.hasOwnProperty(r) && (d[r] = o[r]);
        if (e && e.defaultProps)
          for (r in o = e.defaultProps) void 0 === d[r] && (d[r] = o[r]);
        return {
          $$typeof: a,
          type: e,
          key: f,
          ref: i,
          props: d,
          _owner: s.current
        }
      }
      o.Fragment = d, o.jsx = f, o.jsxs = f
    },
    61029: (e, o, t) => {
      t.r(o), t.d(o, {
        Portal: () => l,
        Root: () => f
      });
      var r = t(71127),
        a = t(18429),
        d = t(85100),
        n = t(85307),
        s = t(25854),
        l = r.forwardRef(((e, o) => {
          const {
            container: t,
            ...l
          } = e, [f, i] = r.useState(!1);
          (0, n.N)((() => i(!0)), []);
          const c = t || f && globalThis?.document?.body;
          return c ? a.createPortal((0, s.jsx)(d.sG.div, {
            ...l,
            ref: o
          }), c) : null
        }));
      l.displayName = "Portal";
      var f = l
    },
    85100: (e, o, t) => {
      t.d(o, {
        hO: () => l,
        sG: () => s
      });
      var r = t(71127),
        a = t(18429),
        d = t(21222),
        n = t(25854),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, o) => {
          const t = (0, d.createSlot)(`Primitive.${o}`),
            a = r.forwardRef(((e, r) => {
              const {
                asChild: a,
                ...d
              } = e, s = a ? t : o;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, n.jsx)(s, {
                ...d,
                ref: r
              })
            }));
          return a.displayName = `Primitive.${o}`, {
            ...e,
            [o]: a
          }
        }), {});

      function l(e, o) {
        e && a.flushSync((() => e.dispatchEvent(o)))
      }
    },
    85307: (e, o, t) => {
      t.d(o, {
        N: () => a
      });
      var r = t(71127),
        a = globalThis?.document ? r.useLayoutEffect : () => {}
    }
  }
]);