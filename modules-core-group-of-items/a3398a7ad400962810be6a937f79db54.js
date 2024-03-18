! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "23b72430-0f07-481f-b4fb-27d0d57f81cd", e._sentryDebugIdIdentifier = "sentry-dbid-23b72430-0f07-481f-b4fb-27d0d57f81cd")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/modules-core-group-of-items",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_modules_core_group_of_items = self.webpackChunk_rockstargames_modules_core_group_of_items || []).push([
  [160], {
    160: (e, t, a) => {
      a.r(t), a.d(t, {
        GroupOfItems: () => d
      });
      var l = a(468);
      const d = e => {
        let {
          game: t,
          filter: a = null,
          label: d = "Group of Image/Title/Text Blocks"
        } = e;
        return {
          name: "group_of_items",
          label: d,
          component: "group",
          fields: [(0, l.NameField)(), {
            label: "Render Template",
            name: "renderTemplate",
            description: "Set the render template",
            component: "select",
            options: [{
              value: "standard",
              label: "Standard"
            }, {
              value: "carousel",
              label: "Carousel"
            }, {
              value: "carousel-panorama",
              label: "Carousel Panorama"
            }]
          }, (0, l.ItemsField)({
            filter: a,
            game: t
          }), {
            label: "Static Copy",
            name: "text",
            description: "[CAROUSEL ONLY]: Title/text that will always be shown beneath the carousel.",
            component: "group",
            fields: [(0, l.translatedField)({
              label: "Title",
              name: "title",
              component: "text"
            }), (0, l.translatedField)({
              label: "Description",
              name: "description",
              component: "html"
            }), (0, l.StyleField)({
              filter: "text"
            })]
          }, (0, l.StyleField)({
            filter: "grid"
          }), (0, l.ClassNamesField)({
            filter: "grid"
          }), (0, l.IdField)()],
          defaultItem: () => (0, l.defaultItemUnique)({
            renderTemplate: "standard",
            text: (0, l.defaultItemUnique)()
          }),
          itemProps: e => (0, l.itemPropsWithKey)(e, {
            label: e?.name ? `${e.name} [${d}]` : `New [${d}]`
          })
        }
      }
    }
  }
]);
//# sourceMappingURL=a3398a7ad400962810be6a937f79db54.js.map