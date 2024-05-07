! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c2d0278c-0b18-4ecc-9830-85b4c0896338", e._sentryDebugIdIdentifier = "sentry-dbid-c2d0278c-0b18-4ecc-9830-85b4c0896338")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [660, 240], {
    99576: (e, t, a) => {
      "use strict";
      var i = a(51664),
        n = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        s = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        r = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, t, a) {
        var i, l = {},
          d = null,
          m = null;
        for (i in void 0 !== a && (d = "" + a), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (m = t.ref), t) o.call(t, i) && !r.hasOwnProperty(i) && (l[i] = t[i]);
        if (e && e.defaultProps)
          for (i in t = e.defaultProps) void 0 === l[i] && (l[i] = t[i]);
        return {
          $$typeof: n,
          type: e,
          key: d,
          ref: m,
          props: l,
          _owner: s.current
        }
      }
      t.Fragment = l, t.jsx = d, t.jsxs = d
    },
    95240: (e, t, a) => {
      "use strict";
      e.exports = a(99576)
    },
    88660: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        Discounts: () => v,
        Donate: () => y,
        EventInfo: () => _,
        FeaturedEventInfo: () => F,
        GamingRewards: () => P,
        Gen9List: () => T,
        LeadGifAsset: () => x,
        LeadImageAsset: () => M,
        LeadVideoAsset: () => E,
        Marquee: () => G,
        NewswireTitle: () => V,
        PctBar: () => A
      });
      var i = a(89468),
        n = a(45652);
      const l = e => {
          let {
            parent: t = null
          } = e;
          return {
            name: "type",
            label: "Text",
            component: "group",
            fields: [(0, i.NameField)(), (0, i.TextField)(), (0, i.ClassNamesField)({
              filter: "grid"
            }), (0, i.StyleField)({
              filter: "grid"
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              style: {
                "--max-width-dynamic": "var(--max-width-static)"
              }
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Text]` : "New [Text]"
            })
          }
        },
        o = e => {
          let {
            game: t = null,
            label: a = "Image",
            description: n = ""
          } = e;
          return {
            name: "imageWithBadge",
            label: a,
            description: n,
            component: "group",
            fields: [(0, i.NameField)(), (0, i.ImageField)({
              game: t
            }), (0, i.LeadAssetToggle)(), (0, i.ClassNamesField)({
              filter: "image"
            }), (0, i.StyleField)({
              filter: "image"
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              image: (0, i.defaultItemUnique)(i._defaultImageValues),
              badgeType: "rdr2" === t ? "badge3" : ""
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        };
      var s = a(65988);
      const r = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            parent: "",
            post: null
          };
          return {
            name: "listItem",
            label: "List Item",
            component: "group",
            fields: [(0, i.NameField)(e), (0, i.translatedField)({
              name: "content",
              label: "Content",
              component: "text",
              initialValues: ""
            }), (0, i.StyleField)(e)],
            defaultItem: () => (0, i.defaultItemUnique)({
              content: ""
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: (0, s.stripHTML)(`${e?.name??e?.[i.TINA_MEMOQ_PREFIX]?.content??"New"} [List Item]`)
            })
          }
        },
        d = e => {
          let {
            game: t = null
          } = e;
          return {
            name: "plainImage",
            label: "Image",
            component: "group",
            fields: [(0, i.NameField)(), (0, i.ImageField)({
              game: t,
              label: "Sources"
            }), (0, i.StyleField)({
              filter: "image"
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              alt: ""
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        };
      a(33052), a(32104), a(504), a(95240), a(52256);
      var m = a(65419);
      const c = e => {
          let {
            game: t = null,
            parent: a = null
          } = e;
          const n = [(0, i.NameField)()];
          return "gtao" !== t && "gtav" !== t || n.push({
            name: "starColor",
            label: "Star Color",
            description: 'If "none", it will use default bullet styles',
            component: "select",
            options: [{
              value: "noImg",
              label: "None"
            }, {
              value: "white",
              label: "White"
            }, {
              value: "yellow",
              label: "Yellow"
            }, {
              value: "hotPink",
              label: "Hot Pink"
            }, {
              value: "red",
              label: "Red"
            }, {
              value: "turquoise",
              label: "Turquoise"
            }, {
              value: "purple",
              label: "Purple"
            }, {
              value: "teal",
              label: "Teal"
            }, {
              value: "blue",
              label: "Blue"
            }, {
              value: "green",
              label: "Green"
            }, {
              value: "darkRed",
              label: "Dark Red"
            }, {
              value: "darkBlue",
              label: "Dark Blue"
            }, {
              value: "goldenrod",
              label: "Goldenrod"
            }, {
              value: "gtaplus",
              label: "GTA+ Icon"
            }]
          }), n.push({
            name: "columns",
            label: "Columns",
            description: "How many columns should the list be broken into? (Leave blank if less than 2)",
            component: "number"
          }, {
            name: "mobileColumns",
            label: "Mobile Columns",
            description: "How many columns should the list be broken into on mobile? (Leave blank if less than 2)",
            component: "number"
          }, {
            name: "list",
            label: "List Items",
            component: "blocks",
            templates: [r({})]
          }, (0, i.StyleField)({
            parent: a
          })), {
            name: "unorderedList",
            label: "Unordered List",
            component: "group",
            fields: n,
            defaultItem: () => (0, i.defaultItemUnique)({
              content: m.c,
              columns: 1,
              mobileColumns: 1,
              starColor: "noImg",
              listItems: []
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Unordered List]` : "New [Unordered List]"
            })
          }
        },
        u = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0";
          return (0, i.defaultItemUnique)({
            title: `Item ${e}`,
            image: (0, i.defaultItemUnique)(i._defaultImageValues),
            _template: t
          })
        },
        p = e => {
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
        b = e => {
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
            }, p({
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
                content: [u(1), u(2), u(3), u(4)]
              }
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Discount Items Grid]` : "New [Discount Items Grid]"
            })
          }
        },
        f = e => {
          let {
            game: t = null
          } = e;
          return {
            name: "limitedGridList",
            label: "Limited Time Items Grid",
            component: "group",
            fields: [(0, i.NameField)(), p({
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
                content: [u(1), u(2), u(3), u(4)]
              }
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Limited Time Items Grid]` : "New [Limited Time Items Grid]"
            })
          }
        },
        g = e => {
          let {
            game: t = null,
            label: a = "Limited Time Items Carousel"
          } = e;
          return {
            name: "limitedList",
            label: a,
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
                content: [u(1), u(2), u(3), u(4)]
              }
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [${a}]` : `New [${a}]`
            })
          }
        },
        k = e => {
          let {
            parent: t = null,
            game: a = null
          } = e;
          switch (a) {
            case "rdo":
            case "rdr2":
              return {
                name: "items", label: "Items", component: "blocks", templates: [g({
                  game: a
                }), f({
                  game: a
                }), b({
                  game: a
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
                }, g({
                  game: a,
                  label: "Discount Items Carousel"
                }), b({
                  game: a
                }), l({
                  parent: t
                }), c({
                  game: a
                })]
              }
          }
        },
        v = e => {
          let {
            game: t = null,
            filter: a = "discounts"
          } = e;
          return {
            label: "Discounts",
            fields: [(0, i.NameField)(), k({
              game: t
            }), (0, i.StyleField)({
              filter: a
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              renderTemplate: t
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Discounts]` : "New [Discounts]"
            })
          }
        };
      var h = a(95356);
      const y = function() {
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
            label: (0, h.stripHTML)(e?.translationName ?? e?.content ?? "Donate")
          })
        }
      };
      var w = a(7256),
        I = a(84344);
      const N = () => {
          const e = {
            ...o({})
          };
          return e.fields.push({
            name: "objectPosition",
            label: "Object Position",
            component: "text",
            description: "Controls the position the image is cropped from when inside the gallery."
          }), e
        },
        S = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const a = [{
            name: "images",
            label: "Image & Badge Configuration",
            description: "Displays in collapsed & expanded card. Warning, event will not display in the deck without an image.",
            component: "blocks",
            templates: [N()]
          }];
          return t || a.push((0, i.translatedField)({
            name: "title",
            label: "Title",
            description: "This gets displayed in the text overlay (when collapsed) as well as at the top of the main content (when expanded). On Newswire it will display in between the image and text content.",
            component: "text"
          }), {
            name: "hideNewswireTitle",
            label: "Hide title on Newswire?",
            description: "Hides the title in between the Image and Text on Newswire.",
            component: "toggle"
          }), a.push({
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
              }, (0, w.HashSelector)({
                group: "hash.mobile",
                label: "Mobile Source",
                description: "(If responsive, only Mobile Source is needed)"
              }), (0, w.HashSelector)({
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
              }, (0, I.VideoField)(), {
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
          }), a
        },
        _ = e => {
          let {
            templates: t
          } = e;
          return {
            label: "GTAO Event Section",
            fields: S(t),
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
        F = e => {
          let {
            templates: t
          } = e;
          return {
            label: "GTAO Event Hero",
            fields: S(t, !0),
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
        P = function() {
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
            }, c(e), {
              name: "bottom",
              label: "Bottom Section",
              component: "group",
              description: "Text to be displayed below the list items",
              fields: [(0, i.translatedField)({
                name: "text",
                label: "Bottom Text Section",
                component: "html"
              }), (0, i.StyleField)(e)]
            }, d(e), {
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
        },
        T = () => ({
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
              uploadDir: n.uploadDir
            }, {
              name: "layeredImg",
              label: "Layered Image",
              component: "image",
              uploadDir: n.uploadDir
            }]
          }, {
            name: "perPage",
            label: "Slides Per Page (Desktop Only)",
            description: "How many slides should be shown at once on desktop? (Overrides the Deck/Card settings)",
            component: "number"
          }]
        });
      var L = a(9860),
        D = a(41736);
      const x = e => {
          let {
            parent: t = null
          } = e;
          return {
            label: "Lead Gif Asset",
            fields: [(0, i.NameField)(), {
              name: "src.gifHash",
              label: "Gif Sources",
              component: "group",
              fields: [(0, D.Gif)({
                parent: t,
                group: "mobile"
              }).fields, (0, D.Gif)({
                parent: t,
                group: "desktop"
              }).fields]
            }, (0, i.AttributesFields)({
              parent: t,
              filter: "image"
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              content: L.HeroImage,
              name: "Hero Gif"
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e.name
            })
          }
        },
        M = e => {
          let {
            game: t = null,
            parent: a = null,
            post: n = null
          } = e;
          return {
            label: "Lead Image Asset",
            fields: [(0, i.NameField)(), (0, i.ImageField)({
              game: t
            }), (0, i.AttributesFields)({
              parent: a,
              filter: "image"
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              content: L.HeroImage,
              name: "Hero Image",
              image: i._defaultImageValues
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e.name
            })
          }
        };
      var C = a(19572);
      const E = e => {
          let {
            parent: t = null
          } = e;
          return {
            label: "Lead Video Asset",
            fields: [(0, i.NameField)(), {
              name: "video",
              label: "Video Source",
              component: "group",
              fields: (0, C.RockstarVideoPlayer)().fields
            }, (0, i.AttributesFields)({
              parent: t,
              filter: "image"
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              content: L.HeroImage,
              name: "Hero Video"
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e.name
            })
          }
        },
        G = () => ({
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
        V = e => {
          let {
            defaults: t = {},
            templates: a = {},
            itemsDescription: n = ""
          } = e;
          const l = [{
            label: "Items",
            description: n,
            name: i.TINA_PARSER_KEY,
            component: "blocks",
            templates: a
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
            fields: [...l, (0, i.MediaQueryField)({
              fields: l
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              style: t?.style ?? {}
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e)
          }
        },
        A = function() {
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
    },
    52256: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => c
      });
      var i = a(51664),
        n = a(89416),
        l = a.n(n),
        o = a(1740),
        s = a(45792);
      const r = {
        pillBtn: "rockstargames-modules-core-newswire-articlef87ac9a7d56545847cf4d8ca471b03e6",
        selected: "rockstargames-modules-core-newswire-articlea8ea61e57fd58bfcb99aef7e6d687045",
        grid: "rockstargames-modules-core-newswire-articlea57241f29873f89f89ab8b27994e71c3",
        itemList: "rockstargames-modules-core-newswire-articledaec3f5ce63d42cb07e3e724737c8361",
        gtaplus: "rockstargames-modules-core-newswire-articlebd78cfb71ed31029ba4279325166bfab",
        rdo: "rockstargames-modules-core-newswire-articlea6244398a800ffddab72c14f717b0eab",
        noImg: "rockstargames-modules-core-newswire-articlee88f741af7d5e0529ff4fb6bb82af04f",
        gtao: "rockstargames-modules-core-newswire-articleab60d91453348d2e4c090ef3ebb04347",
        custom: "rockstargames-modules-core-newswire-articlec20e7ba6ceaba3afd37095b172797711",
        yellow: "rockstargames-modules-core-newswire-articleb16672deedfe102b065925cbe0fb931c",
        hotPink: "rockstargames-modules-core-newswire-articled0d01601de7131d9d6d11321b4299e59",
        red: "rockstargames-modules-core-newswire-articled1b5397aff94d33b57674b04a3456e03",
        turquoise: "rockstargames-modules-core-newswire-articled6541b973ce158c8f2fb81483015211f",
        purple: "rockstargames-modules-core-newswire-articlef3e34d902681219d4d8490eb164f7727",
        teal: "rockstargames-modules-core-newswire-articlea6c3b6b6a2395eb18a1174294f26f4ea",
        blue: "rockstargames-modules-core-newswire-articleeade6e843c5afd48d3a8959fb0b88222",
        green: "rockstargames-modules-core-newswire-articlea82c313f8f85fc6304ddb703be2fa271",
        darkRed: "rockstargames-modules-core-newswire-articled394c61fdce2bf8894ffb801ee680c2a",
        darkBlue: "rockstargames-modules-core-newswire-articlef1d73cc00a3ab644aab949183a8298a7",
        goldenrod: "rockstargames-modules-core-newswire-articlecdcb0c5076309a329da2a6e857cc3bdf",
        skull: "rockstargames-modules-core-newswire-articleba4bd16bff2fbc40616457007b4a7442"
      };
      var d = a(95240);
      const {
        sanitize: m
      } = l(), c = e => {
        let {
          list: t,
          string: a,
          starColor: n,
          style: l,
          className: c,
          game: u,
          noImg: p,
          columns: b,
          mobileColumns: f
        } = e;
        const [g, k] = (0, i.useState)(null);
        return (0, i.useEffect)((() => {
          k(t)
        }), [t]), a || t ? b && g ? (0, d.jsx)("div", {
          className: r.grid,
          style: {
            "--ordered-list-grid-column": b,
            "--ordered-list-grid-column-mobile": f ?? b
          },
          children: (0, d.jsx)("ol", {
            style: (0, s.safeStyles)(l),
            className: (0, o.classList)(r.itemList, r.noImg, r[n], r[u]),
            children: g.map((e => (0, d.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e.content)
              }
            }, e.content)))
          })
        }) : (0, d.jsx)("ol", {
          style: (0, s.safeStyles)(l),
          className: (0, o.classList)(r.itemList, r.custom, p ? r.noImg : "", n ? r[n] : "", u ? r[u] : "", c ?? ""),
          children: t.map((e => (0, d.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: m(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    65419: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => c
      });
      var i = a(51664),
        n = a(89416),
        l = a.n(n),
        o = a(1740),
        s = a(45792);
      const r = {
        grid: "rockstargames-modules-core-newswire-articleac295ed5b9cb441ed17843b34e83ea17",
        itemList: "rockstargames-modules-core-newswire-articlecaf5589ddeca00ed09213e547674b1f3",
        gtaplus: "rockstargames-modules-core-newswire-articleb291112adcf994a0f6acadd86f73b78a",
        rdo: "rockstargames-modules-core-newswire-articled146e8f862baefb60e91be5aa3c17b6e",
        noImg: "rockstargames-modules-core-newswire-articleba9b5ae08642b0213a3f04b3db9a9dac",
        gtao: "rockstargames-modules-core-newswire-articleb6f2bdfd6a1d57b7ce840f7a56cc510b",
        custom: "rockstargames-modules-core-newswire-articleaf89164a043648d1464686ff13363ee4",
        yellow: "rockstargames-modules-core-newswire-articled244b17b74fc46269e8a106a99ab0f87",
        hotPink: "rockstargames-modules-core-newswire-articled90b28503318563cfd6059146d1fb6b6",
        red: "rockstargames-modules-core-newswire-articlec3f8a8706901874d906f94c626be3c1e",
        turquoise: "rockstargames-modules-core-newswire-articlefe2ec36e92e2bb4d453fdc4b05966418",
        purple: "rockstargames-modules-core-newswire-articlef5f7baf5b56f5b2ada053a93392bbf7a",
        teal: "rockstargames-modules-core-newswire-articlef4a229f41cd20f181d810c311416e3f2",
        blue: "rockstargames-modules-core-newswire-articlef6f689d687bcd482ea2cd2990fd66878",
        green: "rockstargames-modules-core-newswire-articleab270f1b4d3ad43e7bc51393b7c5c089",
        darkRed: "rockstargames-modules-core-newswire-articledc24ce78d962f3472b06955bf8855103",
        darkBlue: "rockstargames-modules-core-newswire-articleb354493baac7389b21b511009f287428",
        goldenrod: "rockstargames-modules-core-newswire-articlee4a078efee11d24c64e93ccf0744a33f",
        skull: "rockstargames-modules-core-newswire-articled4581a495de14e6762bb15debe5bb810"
      };
      var d = a(95240);
      const {
        sanitize: m
      } = l(), c = e => {
        let {
          list: t,
          string: a,
          starColor: n,
          style: l,
          className: c,
          game: u,
          noImg: p,
          columns: b,
          mobileColumns: f
        } = e;
        const [g, k] = (0, i.useState)(null), v = a ? a.split("_#_") : t;
        return (0, i.useEffect)((() => {
          k(t)
        }), [t]), a || t ? b && g ? (0, d.jsx)("div", {
          className: r.grid,
          style: {
            "--unordered-list-grid-column": b,
            "--unordered-list-grid-column-mobile": f ?? b
          },
          children: (0, d.jsx)("ul", {
            style: (0, s.safeStyles)(l),
            className: (0, o.classList)(r.itemList, r.noImg, r[n], r[u]),
            children: g.map((e => (0, d.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e.content)
              }
            }, e.content)))
          })
        }) : (0, d.jsx)("ul", {
          style: (0, s.safeStyles)(l),
          className: (0, o.classList)(r.itemList, r.custom, p ? r.noImg : "", n ? r[n] : "", u ? r[u] : "", c ?? ""),
          children: v.map((e => (0, d.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: m(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    504: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "types"
              }
            },
            type: {
              kind: "ListType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "types"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "types"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "ids"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String"
                  }
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "sync"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "ids"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "ids"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "cache"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "cache"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  alias: {
                    kind: "Name",
                    value: "id"
                  },
                  name: {
                    kind: "Name",
                    value: "id_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_doc"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "type"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "sync_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "to"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "visible"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "children"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "to"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "tina"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tina"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "payload"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "variables"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "keys"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "_translations"
                          },
                          arguments: [],
                          directives: [{
                            kind: "Directive",
                            name: {
                              kind: "Name",
                              value: "include"
                            },
                            arguments: [{
                              kind: "Argument",
                              name: {
                                kind: "Name",
                                value: "if"
                              },
                              value: {
                                kind: "Variable",
                                name: {
                                  kind: "Name",
                                  value: "sync"
                                }
                              }
                            }]
                          }],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "locale"
                              },
                              arguments: [],
                              directives: []
                            }, {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 963
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && t.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, t)
        }))
      }
      t.loc.source = {
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function n(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var i = e.definitions[a];
          if (i.name && i.name.value == t) return i
        }
      }

      function l(e, t) {
        var a = {
          kind: e.kind,
          definitions: [n(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var l = i[t] || new Set,
          o = new Set,
          s = new Set;
        for (l.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            o.has(e) || (o.add(e), (i[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return o.forEach((function(t) {
          var i = n(e, t);
          i && a.definitions.push(i)
        })), a
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), i[e.name.value] = t
        }
      })), e.exports = t, e.exports.TinaModulesList = l(t, "TinaModulesList"), e.exports.TinaModulesInfo = l(t, "TinaModulesInfo")
    }
  }
]);