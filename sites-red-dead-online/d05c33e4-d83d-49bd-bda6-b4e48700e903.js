! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d05c33e4-d83d-49bd-bda6-b4e48700e903", e._sentryDebugIdIdentifier = "sentry-dbid-d05c33e4-d83d-49bd-bda6-b4e48700e903")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-red-dead-online",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [2772], {
    2772: (e, a, t) => {
      t.d(a, {
        h: () => l,
        Wx: () => u
      });
      var d = t(62229),
        n = t(95966);
      t(40296), t(73855);
      const r = (0, n.setContextItem)({
          context: (0, d.createContext)(void 0),
          key: "gtmContext22"
        }),
        s = {
          track: () => null
        },
        l = () => (0, d.useContext)(r) ?? s;
      (0, n.setMakeVarItem)({
        key: "navOpenReactive",
        value: (0, n.makeVar)(null)
      }), (0, n.setMakeVarItem)({
        key: "jumpScMenuFocusReactive",
        value: (0, n.makeVar)(!1)
      }), (0, n.setMakeVarItem)({
        key: "hasNotificationsReactive",
        value: (0, n.makeVar)(!1)
      }), (0, n.setMakeVarItem)({
        key: "currentCharIdReactive",
        value: (0, n.makeVar)((0, n.webSettingsReactive)()?.currentCharId)
      }), (0, n.setMakeVarItem)({
        key: "selectedCharacterTupleReactive",
        value: (0, n.makeVar)(null)
      }), (0, n.setMakeVarItem)({
        key: "rockstarIdReactive",
        value: (0, n.makeVar)(null)
      }), (0, n.setMakeVarItem)({
        key: "charactersNeededReactive",
        value: (0, n.makeVar)(!1)
      }), (0, n.setMakeVarItem)({
        key: "crewsNeededReactive",
        value: (0, n.makeVar)(!1)
      }), (0, n.setMakeVarItem)({
        key: "userDataReactive",
        value: (0, n.makeVar)(null)
      }), t(17531), t(37240), t(30763);
      const o = {},
        c = (0, n.setContextItem)({
          context: (0, d.createContext)(o),
          key: "userContext"
        }),
        u = () => (0, d.useContext)(c)
    }
  }
]);