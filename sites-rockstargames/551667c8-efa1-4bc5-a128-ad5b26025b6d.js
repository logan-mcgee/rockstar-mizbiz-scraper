! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "551667c8-efa1-4bc5-a128-ad5b26025b6d", e._sentryDebugIdIdentifier = "sentry-dbid-551667c8-efa1-4bc5-a128-ad5b26025b6d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [6388], {
    54007: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => r
      });
      var t = s(14410);
      var d = s(46632);
      const r = () => {
        const [e] = (0, t.useSearchParams)(), a = e.get("src") ?? null;
        if (!a) return null;
        const {
          hostname: s
        } = new URL(a);
        return ["media.rockstargames.com", "www.rockstargames.com"].includes(s) ? (0, d.jsx)("div", {
          className: "rockstargames-sites-rockstargamesd66031000744eafe5244f0f181e114d4",
          children: (0, d.jsx)("div", {
            className: "rockstargames-sites-rockstargamesdc6ce3af69e4264cd2a5522445cef045",
            style: {
              background: `url(${a}) no-repeat center/contain`
            }
          })
        }) : null
      }
    }
  }
]);