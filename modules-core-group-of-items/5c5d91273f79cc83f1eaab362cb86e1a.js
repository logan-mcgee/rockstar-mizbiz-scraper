! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "83540df8-89ea-4419-8ccf-9cd1e8807a2e", e._sentryDebugIdIdentifier = "sentry-dbid-83540df8-89ea-4419-8ccf-9cd1e8807a2e")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-group-of-items",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_group_of_items = self.webpackChunk_rockstargames_modules_core_group_of_items || []).push([
  [596], {
    6596: (e, a, t) => {
      t.r(a), t.d(a, {
        GroupOfItems: () => o
      });
      var l = t(9468);
      const o = e => {
        let {
          game: a,
          filter: t = null,
          label: o = "Group of Image/Title/Text Blocks"
        } = e;
        return {
          name: "group_of_items",
          label: o,
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
            filter: t,
            game: a
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
            label: e?.name ? `${e.name} [${o}]` : `New [${o}]`
          })
        }
      }
    }
  }
]);