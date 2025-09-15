try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    a = (new e.Error).stack;
  a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "cdc31629-5735-463f-a368-122d80586e78", e._sentryDebugIdIdentifier = "sentry-dbid-cdc31629-5735-463f-a368-122d80586e78")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [6070], {
    76070: (e, a, t) => {
      t.d(a, {
        h: () => l,
        Wx: () => i
      }), t(42295);
      var n = t(62229),
        r = t(95966);
      t(72148);
      const s = (0, r.setContextItem)({
          context: (0, n.createContext)(void 0),
          key: "gtmContext22"
        }),
        d = {
          track: () => null
        },
        l = () => (0, n.useContext)(s) ?? d;
      (0, r.setMakeVarItem)({
        key: "navOpenReactive",
        value: (0, r.makeVar)(null)
      }), (0, r.setMakeVarItem)({
        key: "jumpScMenuFocusReactive",
        value: (0, r.makeVar)(!1)
      }), (0, r.setMakeVarItem)({
        key: "hasNotificationsReactive",
        value: (0, r.makeVar)(!1)
      }), (0, r.setMakeVarItem)({
        key: "currentCharIdReactive",
        value: (0, r.makeVar)((0, r.webSettingsReactive)()?.currentCharId)
      }), (0, r.setMakeVarItem)({
        key: "selectedCharacterTupleReactive",
        value: (0, r.makeVar)(null)
      }), (0, r.setMakeVarItem)({
        key: "rockstarIdReactive",
        value: (0, r.makeVar)(null)
      }), (0, r.setMakeVarItem)({
        key: "charactersNeededReactive",
        value: (0, r.makeVar)(!1)
      }), (0, r.setMakeVarItem)({
        key: "crewsNeededReactive",
        value: (0, r.makeVar)(!1)
      }), (0, r.setMakeVarItem)({
        key: "userDataReactive",
        value: (0, r.makeVar)(null)
      }), t(39763), t(58128);
      const o = {},
        c = (0, r.setContextItem)({
          context: (0, n.createContext)(o),
          key: "userContext"
        }),
        i = () => (0, n.useContext)(c)
    }
  }
]);