"use strict";
(self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [814], {
    8814: (e, t, l) => {
      l.r(t), l.d(t, {
        Discounts: () => p,
        Donate: () => u,
        EventInfo: () => I,
        FeaturedEventInfo: () => P,
        GamingRewards: () => y,
        Gen9List: () => w,
        LeadGifAsset: () => F,
        LeadImageAsset: () => D,
        LeadVideoAsset: () => L,
        Marquee: () => _,
        NewswireTitle: () => k,
        PctBar: () => x
      });
      var i = l(3616),
        n = l(6307);
      const a = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0";
          return (0, i.defaultItemUnique)({
            title: `Item ${e}`,
            image: (0, i.defaultItemUnique)(i._defaultImageValues),
            _template: t
          })
        },
        o = e => {
          let {
            name: t = "columns"
          } = e;
          return {
            name: t,
            label: "Columns",
            component: "group",
            fields: [{
              name: "mobile",
              label: "Mobile Columns",
              component: "number",
              description: "If blank, default is 1."
            }, {
              name: "desktop",
              label: "Desktop Columns",
              component: "number",
              description: "If blank, default is 1."
            }],
            initialValues: {
              [t]: {
                mobile: 1,
                desktop: 1
              }
            }
          }
        },
        s = e => {
          let {
            game: t = null
          } = e;
          return {
            name: "discountsGridList",
            label: "Discount Items Grid",
            component: "group",
            fields: [(0, i.NameField)(), {
              name: "type",
              label: "Image Filter",
              description: "Adds a filter to RDO discount images",
              component: "select",
              options: [{
                value: "",
                label: "None"
              }, {
                value: "coupons",
                label: "Coupons"
              }]
            }, o({
              name: "discountsGridList.columns"
            }), (0, i.ItemsField)({
              game: t,
              name: "discountsGridList.content",
              label: "Grid Items",
              filter: "discounts"
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              type: "",
              columns: {
                mobile: 1,
                desktop: 1
              },
              discountsGridList: {
                content: [a(1), a(2), a(3), a(4)]
              }
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Discount Items Grid]` : "New [Discount Items Grid]"
            })
          }
        },
        r = e => {
          let {
            game: t = null
          } = e;
          return {
            name: "limitedGridList",
            label: "Limited Time Items Grid",
            component: "group",
            fields: [(0, i.NameField)(), o({
              name: "limitedGridList.columns"
            }), (0, i.ItemsField)({
              game: t,
              name: "limitedGridList.content",
              label: "Grid Items",
              filter: "discounts"
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              columns: {
                mobile: 1,
                desktop: 1
              },
              limitedGridList: {
                content: [a(1), a(2), a(3), a(4)]
              }
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Limited Time Items Grid]` : "New [Limited Time Items Grid]"
            })
          }
        },
        m = e => {
          let {
            game: t = null,
            label: l = "Limited Time Items Carousel"
          } = e;
          return {
            name: "limitedList",
            label: l,
            component: "group",
            fields: [(0, i.NameField)(), {
              name: "size",
              label: "Carousel Size",
              description: "What size carousel should this be? (Small & Large are both 1 Per Page on mobile, however Small should be used as 16x9 on mobile and Large should be used as 1x1 on mobile.)",
              component: "select",
              options: [{
                value: "",
                label: "-- Select a Size --"
              }, {
                value: "lg",
                label: "Large (1 Per Page)"
              }, {
                value: "sm",
                label: "Small (2 Per Page)"
              }]
            }, {
              name: "noInfiniteScroll",
              label: "Disable Infinite Scroll?",
              description: "Should infinite scroll be DISABLED for this carousel?",
              component: "toggle"
            }, (0, i.ItemsField)({
              game: t,
              name: "limitedList.content",
              label: "List Items",
              perPage: null,
              filter: "discounts"
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              name: "Large Carousel",
              noInfiniteScroll: !1,
              limitedList: {
                content: [a(1), a(2), a(3), a(4)]
              }
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [${l}]` : `New [${l}]`
            })
          }
        },
        d = e => {
          let {
            parent: t = null,
            game: l = null
          } = e;
          switch (l) {
            case "rdo":
            case "rdr2":
              return {
                name: "items", label: "Items", component: "blocks", templates: [m({
                  game: l
                }), r({
                  game: l
                }), s({
                  game: l
                })]
              };
            default:
              return {
                name: "items", label: "Items", component: "blocks", templates: [{
                  name: "title_and_description",
                  label: "Title & Description",
                  component: "group",
                  fields: [(0, i.translatedField)({
                    name: "title_and_description.title",
                    label: "Title",
                    component: "text"
                  }), (0, i.translatedField)({
                    name: "title_and_description.description",
                    label: "Description",
                    component: "html"
                  })],
                  defaultItem: () => (0, i.defaultItemUnique)({
                    title_and_description: {
                      title: "DISCOUNTS",
                      description: null
                    }
                  }),
                  itemProps: e => (0, i.itemPropsWithKey)(e, {
                    label: e?.[i.TINA_MEMOQ_PREFIX]?.title_and_description?.title ? `${e[i.TINA_MEMOQ_PREFIX].title_and_description.title} [Discounts Title & Description]` : "New [Discounts Title & Description]"
                  })
                }, m({
                  game: l,
                  label: "Discount Items Carousel"
                }), s({
                  game: l
                }), (0, n.HTMLElement)({
                  parent: t
                }), (0, n.UnorderedList)({
                  game: l
                })]
              }
          }
        },
        p = e => {
          let {
            game: t = null,
            filter: l = "discounts"
          } = e;
          return {
            label: "Discounts",
            fields: [(0, i.NameField)(), d({
              game: t
            }), (0, i.StyleField)({
              filter: l
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              renderTemplate: t
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Discounts]` : "New [Discounts]"
            })
          }
        };
      var c = l(2324);
      const u = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          parent: "",
          post: null
        };
        return {
          label: "Donate",
          fields: [...(0, i.NameField)(e), ...(0, i.ContentField)(e)],
          defaultItem: () => (0, i.defaultItemUnique)({
            content: ""
          }),
          itemProps: e => (0, i.itemPropsWithKey)(e, {
            label: (0, c.stripHTML)(e?.translationName ?? e?.content ?? "Donate")
          })
        }
      };
      var b = l(334),
        g = l(1719);
      const f = () => {
          const e = {
            ...(0, n.ImageWithBadge)({})
          };
          return e.fields.push({
            name: "objectPosition",
            label: "Object Position",
            component: "text",
            description: "Controls the position the image is cropped from when inside the gallery."
          }), e
        },
        h = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const l = [{
            name: "images",
            label: "Image & Badge Configuration",
            description: "Displays in the collapsed card & on the left side of the expanded card.",
            component: "blocks",
            templates: [f()]
          }];
          return t || l.push((0, i.translatedField)({
            name: "title",
            label: "Title",
            description: "This gets displayed in the text overlay (when collapsed) as well as at the top of the main content (when expanded). On Newswire it will display in between the image and text content.",
            component: "text"
          })), l.push({
            label: "Content",
            name: i.TINA_PARSER_KEY,
            component: "blocks",
            description: "If clicking the card triggers a modal, select content to go inside the modal.",
            templates: e
          }, {
            name: "videoInHeroProps",
            label: "Video Configuration Options",
            description: "Text overlay, and animation options.",
            component: "group",
            fields: [{
              name: "gifVideoProps",
              label: "Gif Properties",
              description: "When using gif..",
              component: "group",
              fields: [{
                name: "hasVideoInHero",
                label: "Use gif video?",
                description: "If turned on, the gif video will be displayed.",
                component: "toggle"
              }, (0, b.HashSelector)({
                group: "hash.mobile",
                label: "Mobile Source",
                description: "(If responsive, only Mobile Source is needed)"
              }), (0, b.HashSelector)({
                group: "hash.desktop",
                label: "Desktop Source"
              }), {
                name: "isLooping",
                label: "Is Looping?",
                description: "Should this gif repeat endlessly?",
                component: "toggle"
              }]
            }, {
              name: "htmlVideoProps",
              label: "Html Video Properties",
              description: "When using a regular video..",
              component: "group",
              fields: [{
                name: "hasHtmlVideoInHero",
                label: "Use html video?",
                description: "If turned on, html video will be displayed.",
                component: "toggle"
              }, (0, g.VideoField)(), {
                name: "autoPlay",
                label: "Auto Play",
                description: "Should the video play as soon as it is loaded?",
                component: "toggle"
              }]
            }]
          }, {
            name: "textOverlayProps",
            label: "Misc. Configuration Options",
            description: "Text overlay, and animation options.",
            component: "group",
            fields: [{
              name: "hasTextOverlay",
              label: "Has Text Overlay?",
              description: "If selected, the Title and the content below will be shown when the card is collapsed.",
              component: "toggle"
            }, {
              name: "hasHoverAnimation",
              label: "Has Hover Animation?",
              description: 'If selected and "Text Overlay" is checked, the Title and the content below will be hidden by default on desktop (in collapsed view) and revealed on hover. It is always displayed on mobile.',
              component: "toggle"
            }]
          }, {
            name: "startDate",
            label: "Start Date",
            description: "ONLY show this as a card on GTAO starting this date & time.",
            component: "date",
            dateFormat: "YYYY-MM-DD",
            timeFormat: "hh:mm:ss"
          }, {
            name: "endDate",
            label: "End Date",
            description: "STOP showing this as a card on GTAO after this date & time.",
            component: "date",
            dateFormat: "YYYY-MM-DD",
            timeFormat: "hh:mm:ss"
          }), l
        },
        I = e => {
          let {
            templates: t
          } = e;
          return {
            label: "GTAO Event Section",
            fields: h(t),
            defaultItem: () => (0, i.defaultItemUnique)({
              textOverlayProps: (0, i.defaultItemUnique)({
                hasTextOverlay: !0,
                hasHoverAnimation: !0
              })
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: `${e?.[i.TINA_MEMOQ_PREFIX]?.title??"New"} [Event Section]`
            })
          }
        },
        P = e => {
          let {
            templates: t
          } = e;
          return {
            label: "GTAO Event Hero",
            fields: h(t, !0),
            defaultItem: () => (0, i.defaultItemUnique)({
              textOverlayProps: (0, i.defaultItemUnique)({
                hasTextOverlay: !0,
                hasHoverAnimation: !0
              }),
              isFeatured: !0
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: `${e?.[i.TINA_MEMOQ_PREFIX]?.title??"New"} [Event Hero]`
            })
          }
        },
        y = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            parent: "",
            post: null
          };
          return {
            label: "Gaming Rewards",
            fields: [(0, i.NameField)(e), (0, i.translatedField)({
              name: "headline",
              label: "Headline",
              component: "text"
            }), {
              name: "top",
              label: "Top Section",
              component: "group",
              description: "The section below the image and above the list items",
              fields: [(0, i.translatedField)({
                name: "text",
                label: "Top Text Section",
                component: "html"
              }), (0, i.StyleField)(e)]
            }, (0, n.UnorderedList)(e), {
              name: "bottom",
              label: "Bottom Section",
              component: "group",
              description: "Text to be displayed below the list items",
              fields: [(0, i.translatedField)({
                name: "text",
                label: "Bottom Text Section",
                component: "html"
              }), (0, i.StyleField)(e)]
            }, (0, n.MultiSourceImage)(e), {
              name: "rewards",
              label: "Rewards",
              description: "Gaming rewards options",
              component: "select",
              options: ["none", "gtaPlus", "primeGaming", "psPlus"]
            }, (0, i.StyleField)(e)],
            defaultItem: () => (0, i.defaultItemUnique)({
              name: "Prime Gaming",
              plainImage: {
                name: "Social Club x Prime Gaming",
                style: {
                  "--aspect-ratio": "16/9",
                  width: "100%",
                  height: "auto"
                }
              },
              top: (0, i.defaultItemUnique)(),
              bottom: (0, i.defaultItemUnique)({
                style: {
                  "--font-size-multiplier": .75
                }
              })
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Gaming Rewards]` : "New [Gaming Rewards]"
            })
          }
        };
      var v = l(559);
      const w = () => ({
        name: "Gen9List",
        label: "Gen 9 List",
        component: "group",
        fields: [{
          name: "deckHash",
          component: "tina-module-selector",
          variables: {
            types: ["deck"]
          },
          label: "Decks"
        }, {
          component: "group",
          name: "backgroundImages",
          label: "Background Images",
          fields: [{
            name: "backgroundImg",
            label: "Background Image",
            component: "image",
            uploadDir: v.uploadDir
          }, {
            name: "layeredImg",
            label: "Layered Image",
            component: "image",
            uploadDir: v.uploadDir
          }]
        }, {
          name: "perPage",
          label: "Slides Per Page (Desktop Only)",
          description: "How many slides should be shown at once on desktop? (Overrides the Deck/Card settings)",
          component: "number"
        }]
      });
      var T = l(8976),
        S = l(6904);
      const F = e => {
          let {
            parent: t = null
          } = e;
          return {
            label: "Lead Gif Asset",
            fields: [(0, i.NameField)(), {
              name: "src.gifHash",
              label: "Gif Sources",
              component: "group",
              fields: [(0, S.Gif)({
                parent: t,
                group: "mobile"
              }).fields, (0, S.Gif)({
                parent: t,
                group: "desktop"
              }).fields]
            }, (0, i.AttributesFields)({
              parent: t,
              filter: "image"
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              content: T.HeroImage,
              name: "Hero Gif"
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e.name
            })
          }
        },
        D = e => {
          let {
            game: t = null,
            parent: l = null,
            post: n = null
          } = e;
          return {
            label: "Lead Image Asset",
            fields: [(0, i.NameField)(), (0, i.ImageField)({
              game: t
            }), (0, i.AttributesFields)({
              parent: l,
              filter: "image"
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              content: T.HeroImage,
              name: "Hero Image",
              image: i._defaultImageValues
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e.name
            })
          }
        };
      var G = l(3204);
      const L = e => {
          let {
            parent: t = null
          } = e;
          return {
            label: "Lead Video Asset",
            fields: [(0, i.NameField)(), {
              name: "video",
              label: "Video Source",
              component: "group",
              fields: (0, G.RockstarVideoPlayer)().fields
            }, (0, i.AttributesFields)({
              parent: t,
              filter: "image"
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              content: T.HeroImage,
              name: "Hero Video"
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e.name
            })
          }
        },
        _ = () => ({
          label: "Marquee",
          fields: [(0, i.StyleField)({
            filter: "gridItem"
          }), {
            label: "Text",
            name: "text",
            component: "text"
          }],
          defaultItem: () => (0, i.defaultItemUnique)(),
          itemProps: e => (0, i.itemPropsWithKey)(e)
        }),
        k = e => {
          let {
            defaults: t = {},
            templates: l = {},
            itemsDescription: n = ""
          } = e;
          const a = [{
            label: "Items",
            description: n,
            name: i.TINA_PARSER_KEY,
            component: "blocks",
            templates: l
          }, (0, i.StyleField)({
            filter: "title"
          }), {
            label: "Variant",
            name: "variant",
            description: "Set the variant.",
            component: "select",
            options: [{
              value: "",
              label: "-- Select Variant --"
            }, {
              value: "separated",
              label: "separated"
            }]
          }];
          return {
            label: "Title",
            component: "group",
            fields: [...a, (0, i.MediaQueryField)({
              fields: a
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              style: t?.style ?? {}
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e)
          }
        },
        x = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            parent: "",
            post: null
          };
          return {
            label: "PCT Bar",
            fields: [{
              name: e.parent ? `${e.parent}.pct` : "pct",
              label: "Percent",
              component: "number"
            }, {
              name: e.parent ? `${e.parent}.bgColor` : "bgColor",
              label: "Background Color",
              component: "color"
            }, {
              name: e.parent ? `${e.parent}.primaryColor` : "primaryColor",
              label: "Primary Color",
              component: "color"
            }],
            defaultItem: () => (0, i.defaultItemUnique)({
              percent: 0,
              bgColor: "",
              primaryColor: ""
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: `${e?.pct??"PCT"} % Bar`
            })
          }
        }
    }
  }
]);
//# sourceMappingURL=58153166384f60f826c0.js.map