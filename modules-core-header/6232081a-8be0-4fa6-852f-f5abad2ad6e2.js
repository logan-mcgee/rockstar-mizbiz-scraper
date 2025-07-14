try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "6232081a-8be0-4fa6-852f-f5abad2ad6e2", e._sentryDebugIdIdentifier = "sentry-dbid-6232081a-8be0-4fa6-852f-f5abad2ad6e2")
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
  [835], {
    14120: (e, a, o) => {
      var n = o(18429);
      a.H = n.createRoot, n.hydrateRoot
    },
    65014: (e, a, o) => {
      var n = o(95966),
        t = o(14120),
        d = o(17828),
        r = o(25854);
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
    }
  }
]);