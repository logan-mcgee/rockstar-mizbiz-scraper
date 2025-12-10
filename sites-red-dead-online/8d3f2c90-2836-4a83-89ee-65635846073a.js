try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8d3f2c90-2836-4a83-89ee-65635846073a", e._sentryDebugIdIdentifier = "sentry-dbid-8d3f2c90-2836-4a83-89ee-65635846073a")
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
  [2169], {
    32169: (e, a, t) => {
      t.d(a, {
        h: () => l,
        Wx: () => u
      }), t(42295);
      var n = t(62229),
        d = t(95966);
      t(56088);
      const s = (0, d.setContextItem)({
          context: (0, n.createContext)(void 0),
          key: "gtmContext22"
        }),
        r = {
          track: () => null
        },
        l = () => (0, n.useContext)(s) ?? r;
      (0, d.setMakeVarItem)({
        key: "navOpenReactive",
        value: (0, d.makeVar)(null)
      }), (0, d.setMakeVarItem)({
        key: "jumpScMenuFocusReactive",
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
      }), t(39763), t(58128), t(30763);
      const o = {},
        i = (0, d.setContextItem)({
          context: (0, n.createContext)(o),
          key: "userContext"
        }),
        u = () => (0, n.useContext)(i)
    }
  }
]);