! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      l = (new Error).stack;
    l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "c05a2612-11a4-4aa4-8062-058ed01f9d0b", e._sentryDebugIdIdentifier = "sentry-dbid-c05a2612-11a4-4aa4-8062-058ed01f9d0b")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-highlights",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_highlights = self.webpackChunk_rockstargames_modules_core_highlights || []).push([
  [568], {
    4568: (e, l, a) => {
      a.r(l), a.d(l, {
        Highlights: () => s,
        HighlightsItem: () => o,
        tinaBlockTemplates: () => d
      });
      var t = a(9468),
        i = a(5652);
      const n = {
          label: "Item",
          key: "item-block",
          fields: [(0, t.translatedField)({
            name: "title",
            label: "Title",
            component: "text"
          }), (0, t.translatedField)({
            name: "summary",
            label: "Summary",
            component: "textarea"
          }), {
            label: "Image",
            name: "image",
            component: "image",
            uploadDir: i.uploadDir,
            parse: i.parse,
            previewSrc: i.previewSrc
          }],
          defaultItem: () => (0, t.defaultItemUnique)(),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Highlights Item]`
          })
        },
        o = n,
        d = {
          HighlightsItem: n
        },
        r = () => ({
          name: "customHeaderFont",
          label: "Set Header Font",
          component: "select",
          options: [{
            label: "--- SELECT ---",
            value: null
          }, {
            label: "RDR Ultra",
            value: "rdrUltra"
          }, {
            label: "Universal Cyrillic",
            value: "universalCyrillic"
          }]
        }),
        s = () => ({
          name: "highlightCollection",
          label: "Highlight Collection",
          component: "group",
          fields: [(0, t.translatedField)({
            name: "subtitle",
            label: "Subtitle",
            component: "text"
          }), {
            name: "highlights",
            label: "Highlights",
            component: "group-list",
            fields: [(0, t.translatedField)({
              name: "title",
              label: "Title",
              component: "text"
            }), (0, t.translatedField)({
              name: "summary",
              label: "Summary",
              component: "textarea"
            }), {
              label: "Image",
              name: "image",
              component: "image",
              uploadDir: i.uploadDir,
              parse: i.parse,
              previewSrc: i.previewSrc
            }],
            defaultItem: () => (0, t.defaultItemUnique)(),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${e?._memoq?.name??"New"} [Highlight Item]`
            })
          }, {
            name: "blockSettings",
            label: "Block Settings",
            component: "group",
            fields: [r(), {
              name: "navigationEnabled",
              label: "Enable Navigation Controls",
              component: "toggle",
              defaultValue: !0
            }]
          }],
          defaultItem: () => (0, t.defaultItemUnique)(),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Highlights]`
          })
        })
    }
  }
]);