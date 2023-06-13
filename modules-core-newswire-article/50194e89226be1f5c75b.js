"use strict";
(self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [699], {
    6699: (e, t, l) => {
      l.r(t), l.d(t, {
        Discounts: () => u,
        Donate: () => c,
        GamingRewards: () => b,
        Gen9List: () => f,
        LeadGifAsset: () => h,
        LeadImageAsset: () => y,
        LeadVideoAsset: () => G,
        Marquee: () => F,
        NewswireTitle: () => D,
        PctBar: () => S
      });
      var i = l(3616),
        a = l(6307);
      const n = function(e) {
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
        m = e => {
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
                content: [n(1), n(2), n(3), n(4)]
              }
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Discount Items Grid]` : "New [Discount Items Grid]"
            })
          }
        },
        s = e => {
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
                content: [n(1), n(2), n(3), n(4)]
              }
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Limited Time Items Grid]` : "New [Limited Time Items Grid]"
            })
          }
        },
        r = e => {
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
                content: [n(1), n(2), n(3), n(4)]
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
                name: "items", label: "Items", component: "blocks", templates: [r({
                  game: l
                }), s({
                  game: l
                }), m({
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
                }, r({
                  game: l,
                  label: "Discount Items Carousel"
                }), m({
                  game: l
                }), (0, a.HTMLElement)({
                  parent: t
                }), (0, a.UnorderedList)({
                  game: l
                })]
              }
          }
        },
        u = e => {
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
      var p = l(2324);
      const c = function() {
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
              label: (0, p.stripHTML)(e?.translationName ?? e?.content ?? "Donate")
            })
          }
        },
        b = function() {
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
            }, (0, a.UnorderedList)(e), {
              name: "bottom",
              label: "Bottom Section",
              component: "group",
              description: "Text to be displayed below the list items",
              fields: [(0, i.translatedField)({
                name: "text",
                label: "Bottom Text Section",
                component: "html"
              }), (0, i.StyleField)(e)]
            }, (0, a.MultiSourceImage)(e), {
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
      var g = l(559);
      const f = () => ({
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
            uploadDir: g.uploadDir
          }, {
            name: "layeredImg",
            label: "Layered Image",
            component: "image",
            uploadDir: g.uploadDir
          }]
        }, {
          name: "perPage",
          label: "Slides Per Page (Desktop Only)",
          description: "How many slides should be shown at once on desktop? (Overrides the Deck/Card settings)",
          component: "number"
        }]
      });
      var I = l(8976),
        P = l(6904);
      const h = e => {
          let {
            parent: t = null
          } = e;
          return {
            label: "Lead Gif Asset",
            fields: [(0, i.NameField)(), {
              name: "src.gifHash",
              label: "Gif Sources",
              component: "group",
              fields: [(0, P.Gif)({
                parent: t,
                group: "mobile"
              }).fields, (0, P.Gif)({
                parent: t,
                group: "desktop"
              }).fields]
            }, (0, i.AttributesFields)({
              parent: t,
              filter: "image"
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              content: I.HeroImage,
              name: "Hero Gif"
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e.name
            })
          }
        },
        y = e => {
          let {
            game: t = null,
            parent: l = null,
            post: a = null
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
              content: I.HeroImage,
              name: "Hero Image",
              image: i._defaultImageValues
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e.name
            })
          }
        };
      var L = l(3204);
      const G = e => {
          let {
            parent: t = null
          } = e;
          return {
            label: "Lead Video Asset",
            fields: [(0, i.NameField)(), {
              name: "video",
              label: "Video Source",
              component: "group",
              fields: (0, L.RockstarVideoPlayer)().fields
            }, (0, i.AttributesFields)({
              parent: t,
              filter: "image"
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              content: I.HeroImage,
              name: "Hero Video"
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e.name
            })
          }
        },
        F = () => ({
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
        D = e => {
          let {
            defaults: t = {},
            templates: l = {},
            itemsDescription: a = ""
          } = e;
          const n = [{
            label: "Items",
            description: a,
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
            fields: [...n, (0, i.MediaQueryField)({
              fields: n
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              style: t?.style ?? {}
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e)
          }
        },
        S = function() {
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