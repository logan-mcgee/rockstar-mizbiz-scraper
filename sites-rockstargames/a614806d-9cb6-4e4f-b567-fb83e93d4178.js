try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "a614806d-9cb6-4e4f-b567-fb83e93d4178", e._sentryDebugIdIdentifier = "sentry-dbid-a614806d-9cb6-4e4f-b567-fb83e93d4178")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "be5f2d7609076d5a1ed53045b22c8612e2fd03cd"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [8395], {
    38395: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => o
      });
      const t = {
        maint: "rockstargames-sites-rockstargamesb2ef0f4b0fa8e8140d3b77bff10095b7",
        content: "rockstargames-sites-rockstargamesf5e7ab9c74f01e6dc42bea36681208d9",
        logo: "rockstargames-sites-rockstargamesd8b754695ff6e6ac5f4e44b7dd6a6446"
      };
      var d = a(70954);
      const o = () => (0, d.jsx)("div", {
        className: t.maint,
        children: (0, d.jsxs)("div", {
          className: t.content,
          children: [(0, d.jsx)("div", {
            className: t.logo
          }), (0, d.jsx)("p", {
            children: "The Rockstar Games Social Club is currently undergoing maintenance. Please check back soon."
          }), (0, d.jsx)("a", {
            className: t.support,
            href: "https://support.rockstargames.com/",
            children: "https://support.rockstargames.com/"
          })]
        })
      })
    }
  }
]);