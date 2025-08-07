try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "226041a1-50f0-47bc-9850-d1704bd9d905", e._sentryDebugIdIdentifier = "sentry-dbid-226041a1-50f0-47bc-9850-d1704bd9d905")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "23734b3e70371e18a05f141b62211d2d95128dc9",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "23734b3e70371e18a05f141b62211d2d95128dc9"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [7818], {
    23916: (e, o, n) => {
      var a = n(95966),
        t = n(40748),
        d = n(63473),
        r = n(70954);
      const {
        graphEnv: s
      } = (0, a.getConfigForDomain)(), i = e => {
        let {
          navData: o,
          location: n,
          onNavigate: t,
          searchConfig: i,
          routeOptions: l
        } = e;
        const f = (0, a.withRockstarGraph)(d.A, {
          env: s
        });
        return (0, r.jsx)(f, {
          navData: o,
          location: n,
          onNavigate: t,
          searchConfig: i,
          routeOptions: l
        })
      }, {
        graphEnv: l
      } = (0, a.getConfigForDomain)();

      function f() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const o = (0, t.H)(e),
          n = (0, a.withRockstarGraph)(i, {
            env: l
          });
        o.render((0, r.jsx)(n, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", f) : f()
    },
    40748: (e, o, n) => {
      var a = n(18429);
      o.H = a.createRoot, a.hydrateRoot
    }
  }
]);