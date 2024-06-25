! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "1d139d1c-30a4-483e-9ed9-c795081f8fb6", e._sentryDebugIdIdentifier = "sentry-dbid-1d139d1c-30a4-483e-9ed9-c795081f8fb6")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-sc-ugc-spotlight",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_sc_ugc_spotlight = self.webpackChunk_rockstargames_modules_sc_ugc_spotlight || []).push([
  [704], {
    32468: (e, a, l) => {
      l.r(a), l.d(a, {
        UGCJobSpotlight: () => d
      });
      var t = l(89468);
      const d = e => {
        let {
          defaults: a = {},
          game: l = null,
          filter: d = null
        } = e;
        const o = [(0, t.NameField)(), {
          name: "contentId",
          label: "Job ID",
          component: "text"
        }, {
          name: "title",
          label: "Game",
          component: "select",
          options: [{
            value: "-- Select Game Title --",
            label: ""
          }, {
            value: "gtav",
            label: "GTA V"
          }]
        }, (0, t.StyleField)({
          filter: "rating"
        })];
        return {
          label: "User Created Job",
          component: "group",
          fields: [...o, (0, t.MediaQueryField)({
            filter: d,
            fields: o,
            game: l,
            defaults: a
          })],
          defaultItem: () => (0, t.defaultItemUnique)({}),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: e?.name ? `${e.name} [User Created Job]` : "New [User Created Job]"
          })
        }
      }
    }
  }
]);