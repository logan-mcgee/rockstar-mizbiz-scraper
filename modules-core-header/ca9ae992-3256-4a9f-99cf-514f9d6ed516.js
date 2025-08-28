try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    d = (new e.Error).stack;
  d && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[d] = "ca9ae992-3256-4a9f-99cf-514f9d6ed516", e._sentryDebugIdIdentifier = "sentry-dbid-ca9ae992-3256-4a9f-99cf-514f9d6ed516")
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
  [5187, 7568], {
    92600: (e, d, a) => {
      a.d(d, {
        N: () => n
      });
      var t = a(71127),
        n = globalThis?.document ? t.useLayoutEffect : () => {}
    },
    95187: (e, d, a) => {
      var t;
      a.r(d), a.d(d, {
        useId: () => l
      });
      var n = a(71127),
        o = a(92600),
        s = (t || (t = a.t(n, 2)))[" useId ".trim().toString()] || (() => {}),
        f = 0;

      function l(e) {
        const [d, a] = n.useState(s());
        return (0, o.N)((() => {
          e || a((e => e ?? String(f++)))
        }), [e]), e || (d ? `radix-${d}` : "")
      }
    }
  }
]);