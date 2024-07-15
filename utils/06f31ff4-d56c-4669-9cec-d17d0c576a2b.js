! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "06f31ff4-d56c-4669-9cec-d17d0c576a2b", e._sentryDebugIdIdentifier = "sentry-dbid-06f31ff4-d56c-4669-9cec-d17d0c576a2b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [744], {
    744: (e, t, a) => {
      a.r(t), a.d(t, {
        mutateLSSettings: () => o,
        settingsReactive: () => l,
        useRockstarWebLSSettings: () => f
      });
      var d = a(52);
      const n = "rockstar-games-web";
      let s;
      try {
        const e = window.localStorage.getItem(n);
        s = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        s = {}
      }
      const l = (0, d.makeVar)(s),
        o = e => {
          let {
            key: t,
            value: a
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const d = {
            ...l() ?? {}
          };
          return d[t] = a, null === a && delete d[t], window.localStorage.setItem(n, JSON.stringify(d)), l(d), d
        },
        f = () => ({
          lsSettings: (0, d.useReactiveVar)(l),
          settingsReactive: l,
          mutateLSSettings: o
        })
    }
  }
]);