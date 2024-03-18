! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      l = (new Error).stack;
    l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "7be6693e-ef14-46a7-a8be-3e8b806a8532", e._sentryDebugIdIdentifier = "sentry-dbid-7be6693e-ef14-46a7-a8be-3e8b806a8532")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/modules-core-carousel",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_modules_core_carousel = self.webpackChunk_rockstargames_modules_core_carousel || []).push([
  [868], {
    868: (e, l, a) => {
      a.r(l), a.d(l, {
        default: () => d
      });
      var o = a(468),
        t = a(987);
      const n = e => {
          let {
            name: l,
            label: a
          } = e;
          return {
            name: l,
            label: a,
            component: "group",
            fields: [(0, t.ImageWithBadge)({}), {
              name: "fadeIn",
              label: "Fade In Content?",
              component: "toggle"
            }]
          }
        },
        r = e => {
          let {
            name: l,
            label: a
          } = e;
          return {
            name: l,
            label: a,
            component: "group",
            fields: [{
              name: o.TINA_PARSER_KEY,
              label: `${a} Content`,
              description: "Choose ONE item to go in this slot.",
              component: "blocks",
              templates: [(0, t.ImageWithBadge)({}), (0, t.HTMLElement)({})]
            }, {
              name: "fadeIn",
              label: "Fade In Content?",
              component: "toggle"
            }]
          }
        },
        s = e => {
          let {
            game: l = null,
            templates: a = null
          } = e;
          return {
            name: "panoramaCarousel",
            label: "Panorama Carousel",
            description: 'Additional options if the Carousel Type is "Panorama Carousel".',
            component: "group",
            fields: [{
              name: "slides",
              label: "Carousel Slides",
              component: "blocks",
              templates: [{
                name: "slide",
                label: "Carousel Slide",
                component: "group",
                fields: [{
                  name: "itemName",
                  label: "Item Name",
                  component: "text"
                }, n({
                  name: "backgroundContent",
                  label: "Background Content"
                }), n({
                  name: "foregroundContent",
                  label: "Foreground Content"
                }), r({
                  name: "topLeftSlot",
                  label: "Top Left Slot"
                }), r({
                  name: "topCenterSlot",
                  label: "Top Center Slot"
                }), r({
                  name: "topRightSlot",
                  label: "Top Right Slot"
                }), r({
                  name: "bottomLeftSlot",
                  label: "Bottom Left Slot"
                }), r({
                  name: "bottomRightSlot",
                  label: "Bottom Right Slot"
                })],
                defaultItem: () => (0, o.defaultItemUnique)({}),
                itemProps: e => (0, o.itemPropsWithKey)(e, {
                  label: `${e?.itemName??"New"} [Carousel Slide]`
                })
              }]
            }, {
              name: "loop",
              label: "Loop",
              description: "If true, slides will run on an infinite loop.",
              component: "toggle"
            }, {
              name: "centeredSlides",
              label: "Centered Slides",
              description: "If true, then active slide will be centered, not always on the left side.",
              component: "toggle"
            }, {
              name: "grabCursor",
              label: "Grab Cursor",
              description: 'This option may a little improve desktop usability. If true, user will see the "grab" cursor when hover on Swiper.',
              component: "toggle"
            }],
            defaultItem: () => (0, o.defaultItemUnique)({}),
            itemProps: e => (0, o.itemPropsWithKey)(e, {
              label: `${e?.name??"New"} [Panorama Carousel]`
            })
          }
        },
        d = e => {
          let {
            game: l = null,
            templates: a = null
          } = e;
          return {
            name: "carousel",
            label: "Swiper Carousel",
            component: "group",
            fields: [(0, o.NameField)(), {
              name: "type",
              label: "Carousel Type",
              component: "select",
              options: [{
                label: "-- Select a Carousel --",
                value: ""
              }, {
                label: "Panorama Carousel",
                value: "panoramaCarousel"
              }]
            }, s({
              game: l,
              templates: a
            }), (0, o.StyleField)({
              filter: "carousel"
            })],
            defaultItem: () => (0, o.defaultItemUnique)({
              panoramaCarousel: {
                loop: !0,
                grabCursor: !0,
                centeredSlides: !0,
                slidesPerView: "2"
              }
            }),
            itemProps: e => (0, o.itemPropsWithKey)(e, {
              label: `${e?.name??"New"} [Swiper Carousel]`
            })
          }
        }
    }
  }
]);
//# sourceMappingURL=8097d10f104fadcea6a0db83bc11f318.js.map