try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "f4ef9c28-099f-4822-9712-101d985de613", e._sentryDebugIdIdentifier = "sentry-dbid-f4ef9c28-099f-4822-9712-101d985de613")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [7818], {
    40996(e, d, n) {
      n.d(d, {
        m: () => t
      });
      var a = n(85666);
      const o = e => "dark" === e ? a.xW.dark : a.xW.light,
        t = (e, d) => [a.xW.tokens, a.xW.typography, a.xW.grid, o(e)].join(" ")
    },
    85666(e, d, n) {
      n.d(d, {
        nz: () => a,
        wj: () => o,
        xW: () => t,
        Np: () => r,
        HZ: () => s,
        X6: () => f,
        yU: () => i
      });
      var a = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        o = {
          mobile: "screen and (max-width: 1024px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1920px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2560px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        t = {
          dark: "foundry_nu8bkpd",
          light: "foundry_nu8bkpc",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3",
          grid: "foundry_nu8bkpb"
        },
        r = "foundry_nu8bkpb",
        s = "--foundry-platform-scales-ratio-65afb887",
        f = "foundry_nu8bkp4",
        i = "foundry_nu8bkp3"
    }
  }
]);