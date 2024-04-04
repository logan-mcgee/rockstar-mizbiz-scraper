! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "06f31ff4-d56c-4669-9cec-d17d0c576a2b", e._sentryDebugIdIdentifier = "sentry-dbid-06f31ff4-d56c-4669-9cec-d17d0c576a2b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [744], {
    744: (e, t, a) => {
      a.r(t), a.d(t, {
        mutateLSSettings: () => o,
        settingsReactive: () => l,
        useRockstarWebLSSettings: () => f
      });
      var n = a(52);
      const s = "rockstar-games-web";
      let d;
      try {
        const e = window.localStorage.getItem(s);
        d = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        d = {}
      }
      const l = (0, n.makeVar)(d),
        o = e => {
          let {
            key: t,
            value: a
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const n = {
            ...l() ?? {}
          };
          return n[t] = a, null === a && delete n[t], window.localStorage.setItem(s, JSON.stringify(n)), l(n), n
        },
        f = () => ({
          lsSettings: (0, n.useReactiveVar)(l),
          settingsReactive: l,
          mutateLSSettings: o
        })
    }
  }
]);
//# sourceMappingURL=cb0b8c51a5013ef1078ff4d8cbcb2810.js.map