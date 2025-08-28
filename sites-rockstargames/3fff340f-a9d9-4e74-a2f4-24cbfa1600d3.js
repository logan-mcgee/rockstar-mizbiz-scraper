try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3fff340f-a9d9-4e74-a2f4-24cbfa1600d3", e._sentryDebugIdIdentifier = "sentry-dbid-3fff340f-a9d9-4e74-a2f4-24cbfa1600d3")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "793af7f1166af90e36185780de33260abbd44330",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "793af7f1166af90e36185780de33260abbd44330"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [9583], {
    39583: (e, a, d) => {
      d.e(2738).then(d.bind(d, 22738)), Promise.all([d.e(6238), d.e(3972), d.e(9604), d.e(9489), d.e(564), d.e(6204), d.e(7157), d.e(2229), d.e(4853), d.e(9623), d.e(1045), d.e(5966), d.e(4281), d.e(4895), d.e(1634)]).then(d.bind(d, 95159))
    }
  }
]);