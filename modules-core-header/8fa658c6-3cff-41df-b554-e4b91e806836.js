try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    o = (new e.Error).stack;
  o && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[o] = "8fa658c6-3cff-41df-b554-e4b91e806836", e._sentryDebugIdIdentifier = "sentry-dbid-8fa658c6-3cff-41df-b554-e4b91e806836")
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
  [3965], {
    9827: (e, o, a) => {
      var n = a(18429);
      o.H = n.createRoot, n.hydrateRoot
    },
    26619: (e, o, a) => {
      var n = a(42295),
        t = a(95966),
        d = a(9827),
        r = a(88842);
      const {
        graphEnv: s
      } = (0, t.getConfigForDomain)(), f = ({
        navData: e,
        location: o,
        onNavigate: a,
        searchConfig: d,
        routeOptions: f
      }) => {
        const i = (0, t.withRockstarGraph)(r.A, {
          env: s
        });
        return (0, n.jsx)(i, {
          navData: e,
          location: o,
          onNavigate: a,
          searchConfig: d,
          routeOptions: f
        })
      }, {
        graphEnv: i
      } = (0, t.getConfigForDomain)();

      function l() {
        const e = document.createElement("div");
        e.id = "global-nav-root", document.body.prepend(e);
        const o = (0, d.H)(e),
          a = (0, t.withRockstarGraph)(f, {
            env: i
          });
        o.render((0, n.jsx)(a, {}))
      }
      "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", l) : l()
    }
  }
]);