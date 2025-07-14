try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    s = (new e.Error).stack;
  s && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[s] = "9637e5d3-ec16-4266-a2d6-4a3b97214497", e._sentryDebugIdIdentifier = "sentry-dbid-9637e5d3-ec16-4266-a2d6-4a3b97214497")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [3411], {
    43411: (e, s, a) => {
      a.r(s), a.d(s, {
        default: () => o
      });
      const t = {
        maint: "rockstargames-sites-rockstargamesb2ef0f4b0fa8e8140d3b77bff10095b7",
        content: "rockstargames-sites-rockstargamesf5e7ab9c74f01e6dc42bea36681208d9",
        logo: "rockstargames-sites-rockstargamesd8b754695ff6e6ac5f4e44b7dd6a6446"
      };
      var d = a(25854);
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