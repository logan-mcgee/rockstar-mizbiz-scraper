try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "6ed907c1-a485-4fc8-86da-9e539fe06f04", e._sentryDebugIdIdentifier = "sentry-dbid-6ed907c1-a485-4fc8-86da-9e539fe06f04")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [7046], {
    27046(e, d, n) {
      n.d(d, {
        m: () => o
      });
      var a = n(89892);
      const t = e => "dark" === e ? a.xW.dark : a.xW.light,
        o = (e, d) => [a.xW.tokens, a.xW.typography, a.xW.grid, t(e)].join(" ")
    },
    89892(e, d, n) {
      n.d(d, {
        nz: () => a,
        wj: () => t,
        xW: () => o,
        Np: () => s,
        HZ: () => f,
        X6: () => r,
        yU: () => i
      });
      var a = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        t = {
          mobile: "screen and (max-width: 1024px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1920px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2560px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        o = {
          dark: "foundry_nu8bkpd",
          light: "foundry_nu8bkpc",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3",
          grid: "foundry_nu8bkpb"
        },
        s = "foundry_nu8bkpb",
        f = "--foundry-platform-scales-ratio-65afb887",
        r = "foundry_nu8bkp4",
        i = "foundry_nu8bkp3"
    }
  }
]);