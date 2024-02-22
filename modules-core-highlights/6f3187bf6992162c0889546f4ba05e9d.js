! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      l = (new Error).stack;
    l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "e786a0fe-4169-4ca7-8cec-36a4d8ded052", e._sentryDebugIdIdentifier = "sentry-dbid-e786a0fe-4169-4ca7-8cec-36a4d8ded052")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/modules-core-highlights",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_modules_core_highlights = self.webpackChunk_rockstargames_modules_core_highlights || []).push([
  [824], {
    9824: (e, l, t) => {
      t.r(l), t.d(l, {
        Highlights: () => s,
        HighlightsItem: () => o,
        tinaBlockTemplates: () => d
      });
      var a = t(9468),
        i = t(5652);
      const n = {
          label: "Item",
          key: "item-block",
          fields: [(0, a.translatedField)({
            name: "title",
            label: "Title",
            component: "text"
          }), (0, a.translatedField)({
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
          defaultItem: () => (0, a.defaultItemUnique)(),
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: `${e?.[a.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Highlights Item]`
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
          fields: [(0, a.translatedField)({
            name: "subtitle",
            label: "Subtitle",
            component: "text"
          }), {
            name: "highlights",
            label: "Highlights",
            component: "group-list",
            fields: [(0, a.translatedField)({
              name: "title",
              label: "Title",
              component: "text"
            }), (0, a.translatedField)({
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
            defaultItem: () => (0, a.defaultItemUnique)(),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
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
          defaultItem: () => (0, a.defaultItemUnique)(),
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: `${e?.[a.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Highlights]`
          })
        })
    }
  }
]);
//# sourceMappingURL=6f3187bf6992162c0889546f4ba05e9d.js.map