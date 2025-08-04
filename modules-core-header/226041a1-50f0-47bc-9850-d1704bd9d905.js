try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "226041a1-50f0-47bc-9850-d1704bd9d905", e._sentryDebugIdIdentifier = "sentry-dbid-226041a1-50f0-47bc-9850-d1704bd9d905")
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
  [7818], {
    23916: (e, a, o) => {
      var n = o(95966),
        t = o(40748),
        d = o(63473),
        r = o(70954);
      const {
        graphEnv: s
      } = (0, n.getConfigForDomain)(), i = e => {
        let {
          navData: a,
          location: o,
          onNavigate: t,
          searchConfig: i,
          routeOptions: l
        } = e;
        const f = (0, n.withRockstarGraph)(d.A, {
          env: s
        });
        return (0, r.jsx)(f, {
          navData: a,
          location: o,
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
        const a = (0, t.H)(e),
          o = (0, n.withRockstarGraph)(i, {
            env: l
          });
        a.render((0, r.jsx)(o, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", f) : f()
    },
    40748: (e, a, o) => {
      var n = o(18429);
      a.H = n.createRoot, n.hydrateRoot
    }
  }
]);