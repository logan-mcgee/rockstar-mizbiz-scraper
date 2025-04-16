! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "4cd260e0-e92e-4b88-8dd6-c76d968d5b32", e._sentryDebugIdIdentifier = "sentry-dbid-4cd260e0-e92e-4b88-8dd6-c76d968d5b32")
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
      var n = t(62229),
        d = t(95966);
      t(40296), t(73855);
      const r = (0, d.setContextItem)({
          context: (0, n.createContext)(void 0),
          key: "gtmContext22"
        }),
        s = {
          track: () => null
        },
        l = () => (0, n.useContext)(r) ?? s;
      (0, d.setMakeVarItem)({
        key: "navOpenReactive",
        value: (0, d.makeVar)(null)
      }), (0, d.setMakeVarItem)({
        key: "jumpScMenuFocusReactive",
        value: (0, d.makeVar)(!1)
      }), (0, d.setMakeVarItem)({
        key: "hasNotificationsReactive",
        value: (0, d.makeVar)(!1)
      }), (0, d.setMakeVarItem)({
        key: "currentCharIdReactive",
        value: (0, d.makeVar)((0, d.webSettingsReactive)()?.currentCharId)
      }), (0, d.setMakeVarItem)({
        key: "selectedCharacterTupleReactive",
        value: (0, d.makeVar)(null)
      }), (0, d.setMakeVarItem)({
        key: "rockstarIdReactive",
        value: (0, d.makeVar)(null)
      }), (0, d.setMakeVarItem)({
        key: "charactersNeededReactive",
        value: (0, d.makeVar)(!1)
      }), (0, d.setMakeVarItem)({
        key: "crewsNeededReactive",
        value: (0, d.makeVar)(!1)
      }), (0, d.setMakeVarItem)({
        key: "userDataReactive",
        value: (0, d.makeVar)(null)
      }), t(17531), t(37240), t(30763);
      const o = {},
        c = (0, d.setContextItem)({
          context: (0, n.createContext)(o),
          key: "userContext"
        }),
        u = () => (0, n.useContext)(c)
    }
  }
]);