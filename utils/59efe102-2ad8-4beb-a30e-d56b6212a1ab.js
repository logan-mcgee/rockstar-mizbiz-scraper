! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "59efe102-2ad8-4beb-a30e-d56b6212a1ab", e._sentryDebugIdIdentifier = "sentry-dbid-59efe102-2ad8-4beb-a30e-d56b6212a1ab")
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
  [847], {
    6847: (e, a, t) => {
      t.r(a), t.d(a, {
        mutateLSSettings: () => o,
        settingsReactive: () => l,
        useRockstarWebLSSettings: () => r
      });
      var d = t(8407);
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
            key: a,
            value: t
          } = e;
          if (null == a) throw Error("You have to specify a key and a value.");
          const d = {
            ...l() ?? {}
          };
          return d[a] = t, null === t && delete d[a], window.localStorage.setItem(n, JSON.stringify(d)), l(d), d
        },
        r = () => ({
          lsSettings: (0, d.useReactiveVar)(l),
          settingsReactive: l,
          mutateLSSettings: o
        })
    }
  }
]);