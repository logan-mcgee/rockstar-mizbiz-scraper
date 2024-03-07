! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "446e4a6c-5e0d-4f7d-86eb-170e5285ebc8", e._sentryDebugIdIdentifier = "sentry-dbid-446e4a6c-5e0d-4f7d-86eb-170e5285ebc8")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [368], {
    368: (e, t, a) => {
      a.r(t), a.d(t, {
        mutateLSSettings: () => o,
        settingsReactive: () => l,
        useRockstarWebLSSettings: () => r
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
        r = () => ({
          lsSettings: (0, d.useReactiveVar)(l),
          settingsReactive: l,
          mutateLSSettings: o
        })
    }
  }
]);
//# sourceMappingURL=3e85dae2aec8972cdc09ea1eaca17f1d.js.map