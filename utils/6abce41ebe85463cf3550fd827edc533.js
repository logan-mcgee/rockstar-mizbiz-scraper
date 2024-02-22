! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "723f92c0-9b65-4b0c-95ec-9177799e19b8", e._sentryDebugIdIdentifier = "sentry-dbid-723f92c0-9b65-4b0c-95ec-9177799e19b8")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/utils",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_utils = self.webpackChunk_rockstargames_utils || []).push([
  [368], {
    368: (e, t, a) => {
      a.r(t), a.d(t, {
        mutateLSSettings: () => d,
        settingsReactive: () => o,
        useRockstarWebLSSettings: () => r
      });
      var n = a(52);
      const s = "rockstar-games-web";
      let l;
      try {
        const e = window.localStorage.getItem(s);
        l = null !== e ? JSON.parse(e) : {}
      } catch (e) {
        l = {}
      }
      const o = (0, n.makeVar)(l),
        d = e => {
          let {
            key: t,
            value: a
          } = e;
          if (null == t) throw Error("You have to specify a key and a value.");
          const n = {
            ...o() ?? {}
          };
          return n[t] = a, null === a && delete n[t], window.localStorage.setItem(s, JSON.stringify(n)), o(n), n
        },
        r = () => ({
          lsSettings: (0, n.useReactiveVar)(o),
          settingsReactive: o,
          mutateLSSettings: d
        })
    }
  }
]);
//# sourceMappingURL=6abce41ebe85463cf3550fd827edc533.js.map