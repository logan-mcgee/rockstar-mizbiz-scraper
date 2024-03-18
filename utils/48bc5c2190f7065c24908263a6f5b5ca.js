! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "446e4a6c-5e0d-4f7d-86eb-170e5285ebc8", e._sentryDebugIdIdentifier = "sentry-dbid-446e4a6c-5e0d-4f7d-86eb-170e5285ebc8")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [368], {
    368: (e, t, a) => {
      a.r(t), a.d(t, {
        mutateLSSettings: () => o,
        settingsReactive: () => l,
        useRockstarWebLSSettings: () => r
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
        r = () => ({
          lsSettings: (0, n.useReactiveVar)(l),
          settingsReactive: l,
          mutateLSSettings: o
        })
    }
  }
]);
//# sourceMappingURL=48bc5c2190f7065c24908263a6f5b5ca.js.map