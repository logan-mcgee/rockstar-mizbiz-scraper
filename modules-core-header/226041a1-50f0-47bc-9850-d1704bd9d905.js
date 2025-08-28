try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "226041a1-50f0-47bc-9850-d1704bd9d905", e._sentryDebugIdIdentifier = "sentry-dbid-226041a1-50f0-47bc-9850-d1704bd9d905")
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
  [7818], {
    23916: (e, o, a) => {
      var n = a(95966),
        t = a(40748),
        d = a(63473),
        r = a(70954);
      const {
        graphEnv: s
      } = (0, n.getConfigForDomain)(), i = e => {
        let {
          navData: o,
          location: a,
          onNavigate: t,
          searchConfig: i,
          routeOptions: l
        } = e;
        const f = (0, n.withRockstarGraph)(d.A, {
          env: s
        });
        return (0, r.jsx)(f, {
          navData: o,
          location: a,
          onNavigate: t,
          searchConfig: i,
          routeOptions: l
        })
      }, {
        graphEnv: l
      } = (0, n.getConfigForDomain)();

      function f() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const o = (0, t.H)(e),
          a = (0, n.withRockstarGraph)(i, {
            env: l
          });
        o.render((0, r.jsx)(a, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", f) : f()
    },
    40748: (e, o, a) => {
      var n = a(18429);
      o.H = n.createRoot, n.hydrateRoot
    }
  }
]);