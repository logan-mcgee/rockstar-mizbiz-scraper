! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b94f7dc2-6f8a-4367-bfe7-14228433a43d", e._sentryDebugIdIdentifier = "sentry-dbid-b94f7dc2-6f8a-4367-bfe7-14228433a43d")
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
    847: (e, t, a) => {
      a.r(t), a.d(t, {
        mutateLSSettings: () => o,
        settingsReactive: () => l,
        useRockstarWebLSSettings: () => r
      });
      var n = a(407);
      const d = "rockstar-games-web";
      let s;
      try {
        const e = window.localStorage.getItem(d);
        s = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        s = {}
      }
      const l = (0, n.makeVar)(s),
        o = e => {
          let {
            key: t,
            value: a
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const n = {
            ...l() ?? {}
          };
          return n[t] = a, null === a && delete n[t], window.localStorage.setItem(d, JSON.stringify(n)), l(n), n
        },
        r = () => ({
          lsSettings: (0, n.useReactiveVar)(l),
          settingsReactive: l,
          mutateLSSettings: o
        })
    }
  }
]);