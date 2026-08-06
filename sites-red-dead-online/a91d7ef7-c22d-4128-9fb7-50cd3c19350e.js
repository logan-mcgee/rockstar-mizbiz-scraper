try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a91d7ef7-c22d-4128-9fb7-50cd3c19350e", e._sentryDebugIdIdentifier = "sentry-dbid-a91d7ef7-c22d-4128-9fb7-50cd3c19350e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-red-dead-online",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_red_dead_online = self.webpackChunk_rockstargames_sites_red_dead_online || []).push([
  [2198], {
    323(e, a, t) {
      t.d(a, {
        h: () => l,
        Wx: () => c
      }), t(39793);
      var d = t(93082),
        n = t(13331);
      t(10195);
      const s = (0, n.setContextItem)({
          context: (0, d.createContext)(void 0),
          key: "gtmContext22"
        }),
        r = {
          track: () => null
        },
        l = () => (0, d.useContext)(s) ?? r;
      (0, n.setMakeVarItem)({
        key: "navOpenReactive",
        value: (0, n.makeVar)(null)
      }), (0, n.setMakeVarItem)({
        key: "jumpScMenuFocusReactive",
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
      }), t(4242), t(23592), t(77033);
      const o = {},
        i = (0, n.setContextItem)({
          context: (0, d.createContext)(o),
          key: "userContext"
        }),
        c = () => (0, d.useContext)(i)
    }
  }
]);