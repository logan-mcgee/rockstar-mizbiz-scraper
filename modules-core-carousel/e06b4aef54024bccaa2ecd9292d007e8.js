"use strict";
(self.webpackChunk_rockstargames_modules_core_carousel = self.webpackChunk_rockstargames_modules_core_carousel || []).push([
  [370], {
    370: (e, l, t) => {
      t.r(l), t.d(l, {
        default: () => s
      });
      var o = t(616),
        a = t(307);
      const n = e => {
          let {
            name: l,
            label: t
          } = e;
          return {
            name: l,
            label: t,
            component: "group",
            fields: [(0, a.ImageWithBadge)({}), {
              name: "fadeIn",
              label: "Fade In Content?",
              component: "toggle"
            }]
          }
        },
        r = e => {
          let {
            name: l,
            label: t
          } = e;
          return {
            name: l,
            label: t,
            component: "group",
            fields: [{
              name: o.TINA_PARSER_KEY,
              label: `${t} Content`,
              description: "Choose ONE item to go in this slot.",
              component: "blocks",
              templates: [(0, a.ImageWithBadge)({}), (0, a.HTMLElement)({})]
            }, {
              name: "fadeIn",
              label: "Fade In Content?",
              component: "toggle"
            }]
          }
        },
        m = e => {
          let {
            game: l = null,
            templates: t = null
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
        s = e => {
          let {
            game: l = null,
            templates: t = null
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
            }, m({
              game: l,
              templates: t
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