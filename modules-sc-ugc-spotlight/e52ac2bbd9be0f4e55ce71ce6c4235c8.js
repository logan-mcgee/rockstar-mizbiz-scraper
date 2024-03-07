! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "8f97f8f7-82f6-44bd-91ac-e6e39c239d54", e._sentryDebugIdIdentifier = "sentry-dbid-8f97f8f7-82f6-44bd-91ac-e6e39c239d54")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "63eddca94fa9726ada78d0c14030f13fd7020af7",
  packageName: "@rockstargames/modules-sc-ugc-spotlight",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "63eddca94fa9726ada78d0c14030f13fd7020af7"
}, (self.webpackChunk_rockstargames_modules_sc_ugc_spotlight = self.webpackChunk_rockstargames_modules_sc_ugc_spotlight || []).push([
  [436], {
    3436: (e, a, l) => {
      l.r(a), l.d(a, {
        UGCJobSpotlight: () => d
      });
      var t = l(9468);
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
//# sourceMappingURL=e52ac2bbd9be0f4e55ce71ce6c4235c8.js.map