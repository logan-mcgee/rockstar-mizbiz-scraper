! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      l = (new Error).stack;
    l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "1d139d1c-30a4-483e-9ed9-c795081f8fb6", e._sentryDebugIdIdentifier = "sentry-dbid-1d139d1c-30a4-483e-9ed9-c795081f8fb6")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/modules-sc-ugc-spotlight",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_modules_sc_ugc_spotlight = self.webpackChunk_rockstargames_modules_sc_ugc_spotlight || []).push([
  [704], {
    32468: (e, l, t) => {
      t.r(l), t.d(l, {
        UGCJobSpotlight: () => d
      });
      var a = t(89468);
      const d = e => {
        let {
          defaults: l = {},
          game: t = null,
          filter: d = null
        } = e;
        const o = [(0, a.NameField)(), {
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
        }, (0, a.StyleField)({
          filter: "rating"
        })];
        return {
          label: "User Created Job",
          component: "group",
          fields: [...o, (0, a.MediaQueryField)({
            filter: d,
            fields: o,
            game: t,
            defaults: l
          })],
          defaultItem: () => (0, a.defaultItemUnique)({}),
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: e?.name ? `${e.name} [User Created Job]` : "New [User Created Job]"
          })
        }
      }
    }
  }
]);
//# sourceMappingURL=0d99e8dffd218c9637e1d661f4ac2d73.js.map