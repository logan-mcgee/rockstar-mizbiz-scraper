! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "78a147cc-652d-40ef-85c7-53764a2c283e", e._sentryDebugIdIdentifier = "sentry-dbid-78a147cc-652d-40ef-85c7-53764a2c283e")
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
  [7368], {
    97368: (e, t, l) => {
      l.r(t), l.d(t, {
        Discounts: () => w,
        Donate: () => T,
        EventInfo: () => D,
        FeaturedEventInfo: () => C,
        GamingRewards: () => A,
        Gen9List: () => _,
        LeadGifAsset: () => x,
        LeadImageAsset: () => M,
        LeadVideoAsset: () => U,
        Marquee: () => E,
        NewswireTitle: () => q,
        PctBar: () => O
      });
      var a = l(55140);
      const n = {
        gtao: "Grand Theft Auto Online",
        gtav: "Grand Theft Auto V",
        gtaplus: "GTA+",
        rdo: "Red Dead Online",
        rdr2: "Read Dead Redemption 2",
        bully: "Bully",
        bullySE: "Bully: Special Edition",
        gta1: "Grand Theft Auto I",
        gta2black: "Grand Theft Auto II (black logo)",
        gta2white: "Grand Theft Auto II (white logo)",
        gta3black: "Grand Theft Auto III (black logo)",
        gta3white: "Grand Theft Auto III (white logo)",
        gta4: "Grand Theft Auto IV",
        gtabogt: "Grand Theft Auto: The Ballad of Gay Tony",
        gtacw: "Grand Theft Auto: Chinatown Wars",
        gtalc: "Grand Theft Auto: Libery City",
        gtalcs: "Grand Theft Auto: Libery City Stories",
        gtavc: "Grand Theft Auto: Vice City",
        gtavcs: "Grand Theft Auto: Vice City Stories",
        gtatlad: "Grand Theft Auto: The Lost and the Damned",
        lanoire: "L.A. Noire",
        manhunt1: "Manhunt",
        manhunt2: "Manhunt 2",
        maxpayne1: "Max Payne",
        maxpayne2: "Max Payne 2",
        maxpayne3: "Max Payne 3",
        mc1: "Midnight Club",
        mc2: "Midnight Club II",
        mc3: "Midnight Club III Dub Edition",
        mc3remix: "Midnight Club III Dub Edition REMIX",
        mcla: "Midnight Club Los Angeles",
        mclaremix: "Midnight Club Los Angeles REMIX",
        rdr1: "Read Dead Redemption",
        rdr1rsp: "Read Dead Redemption (Rockstar Presents Ver)",
        rdrevolver: "Read Dead Revolver",
        rdrun: "Read Dead Redemption Undead Nightmare",
        sr1: "Smuggler's Run",
        sr2: "Smuggler's Run 2",
        srwz: "Smuggler's Run Warzones",
        tabletennis: "Table Tennis ",
        warriors: "Warriors",
        lossantoscustoms: "Los Santos Customs"
      };
      Object.keys(n).map((e => ({
        value: e,
        label: n[e]
      })));
      var i = l(28089),
        o = l(46632);
      const s = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, o.jsx)("hr", {})
          }
        },
        r = function() {
          return {
            label: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Grid Number of Columns",
            name: arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "--grid-num-columns",
            description: "Set the grid-template-columns",
            component: "select",
            options: [{
              value: "",
              label: "-- Select Number of Columns --"
            }, {
              value: "auto-fit",
              label: "auto-fit"
            }, {
              value: "auto-fill",
              label: "auto-fill"
            }, {
              value: "1",
              label: "1 column"
            }, {
              value: "2",
              label: "2 columns"
            }, {
              value: "3",
              label: "3 columns"
            }, {
              value: "4",
              label: "4 columns"
            }]
          }
        },
        d = (s("Grid"), function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label").toLowerCase().split(" ").join("_")
        }("Grid"), r("style.--grid-num-columns-mobile", "Grid Number of Columns (Mobile)"), r("style.--grid-num-columns-desktop", "Grid Number of Columns (Desktop)"), s("Grid"), e => {
          let {
            parent: t = null
          } = e;
          return {
            name: "type",
            label: "Text",
            component: "group",
            fields: [(0, a.NameField)(), (0, a.IdField)(), (0, a.TextField)(), (0, a.ClassNamesField)({
              filter: "grid"
            }), (0, a.StyleField)({
              filter: "grid"
            })],
            defaultItem: () => (0, a.defaultItemUnique)({
              style: {
                "--max-width-dynamic": "var(--max-width-static)"
              }
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Text]` : "New [Text]"
            })
          }
        }),
        m = e => {
          let {
            game: t = null,
            label: l = "Image",
            description: n = ""
          } = e;
          return {
            name: "imageWithBadge",
            label: l,
            description: n,
            component: "group",
            fields: [(0, a.NameField)(), (0, a.ImageField)({
              game: t
            }), (0, a.LeadAssetToggle)(), (0, a.ClassNamesField)({
              filter: "image"
            }), (0, a.StyleField)({
              filter: "image"
            })],
            defaultItem: () => (0, a.defaultItemUnique)({
              image: (0, a.defaultItemUnique)(a._defaultImageValues),
              badgeType: "rdr2" === t ? "badge3" : ""
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        };
      var u = l(60207);
      const p = e => {
        let {
          game: t = null
        } = e;
        return {
          name: "plainImage",
          label: "Image",
          component: "group",
          fields: [(0, a.NameField)(), (0, a.ImageField)({
            game: t,
            label: "Sources"
          }), (0, a.StyleField)({
            filter: "image"
          })],
          defaultItem: () => (0, a.defaultItemUnique)({
            alt: ""
          }),
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: e?.name ? `${e.name} [Image]` : "New [Image]"
          })
        }
      };
      l(58407), l(33809), l(50048), l(22941);
      var c = l(63672);
      const b = e => {
          let {
            game: t = null,
            parent: l = null
          } = e;
          const n = [(0, a.NameField)()];
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
          }), n.push((0, a.translatedField)({
            label: "Title",
            name: "title",
            component: "text"
          }), {
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
            templates: [(0, u.A)({})]
          }, (0, a.StyleField)({
            parent: l
          })), {
            name: "unorderedList",
            label: "Unordered List",
            component: "group",
            fields: n,
            defaultItem: () => (0, a.defaultItemUnique)({
              content: c.A,
              columns: 1,
              mobileColumns: 1,
              starColor: "noImg",
              listItems: []
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Unordered List]` : "New [Unordered List]"
            })
          }
        },
        g = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0";
          return (0, a.defaultItemUnique)({
            title: `Item ${e}`,
            image: (0, a.defaultItemUnique)(a._defaultImageValues),
            _template: t
          })
        },
        f = e => {
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
        h = e => {
          let {
            game: t = null
          } = e;
          return {
            name: "discountsGridList",
            label: "Discount Items Grid",
            component: "group",
            fields: [(0, a.NameField)(), {
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
            }, f({
              name: "discountsGridList.columns"
            }), (0, a.ItemsField)({
              game: t,
              name: "discountsGridList.content",
              label: "Grid Items",
              filter: "discounts"
            })],
            defaultItem: () => (0, a.defaultItemUnique)({
              type: "",
              columns: {
                mobile: 1,
                desktop: 1
              },
              discountsGridList: {
                content: [g(1), g(2), g(3), g(4)]
              }
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Discount Items Grid]` : "New [Discount Items Grid]"
            })
          }
        },
        I = e => {
          let {
            game: t = null
          } = e;
          return {
            name: "limitedGridList",
            label: "Limited Time Items Grid",
            component: "group",
            fields: [(0, a.NameField)(), f({
              name: "limitedGridList.columns"
            }), (0, a.ItemsField)({
              game: t,
              name: "limitedGridList.content",
              label: "Grid Items",
              filter: "discounts"
            })],
            defaultItem: () => (0, a.defaultItemUnique)({
              columns: {
                mobile: 1,
                desktop: 1
              },
              limitedGridList: {
                content: [g(1), g(2), g(3), g(4)]
              }
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Limited Time Items Grid]` : "New [Limited Time Items Grid]"
            })
          }
        },
        y = e => {
          let {
            game: t = null,
            label: l = "Limited Time Items Carousel"
          } = e;
          return {
            name: "limitedList",
            label: l,
            component: "group",
            fields: [(0, a.NameField)(), {
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
            }, (0, a.ItemsField)({
              game: t,
              name: "limitedList.content",
              label: "List Items",
              perPage: null,
              filter: "discounts"
            })],
            defaultItem: () => (0, a.defaultItemUnique)({
              name: "Large Carousel",
              noInfiniteScroll: !1,
              limitedList: {
                content: [g(1), g(2), g(3), g(4)]
              }
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [${l}]` : `New [${l}]`
            })
          }
        },
        v = e => {
          let {
            parent: t = null,
            game: l = null
          } = e;
          switch (l) {
            case "rdo":
            case "rdr2":
              return {
                name: "items", label: "Items", component: "blocks", templates: [y({
                  game: l
                }), I({
                  game: l
                }), h({
                  game: l
                })]
              };
            default:
              return {
                name: "items", label: "Items", component: "blocks", templates: [{
                  name: "title_and_description",
                  label: "Title & Description",
                  component: "group",
                  fields: [(0, a.translatedField)({
                    name: "title_and_description.title",
                    label: "Title",
                    component: "text"
                  }), (0, a.translatedField)({
                    name: "title_and_description.description",
                    label: "Description",
                    component: "html"
                  })],
                  defaultItem: () => (0, a.defaultItemUnique)({
                    title_and_description: {
                      title: "DISCOUNTS",
                      description: null
                    }
                  }),
                  itemProps: e => (0, a.itemPropsWithKey)(e, {
                    label: e?.[a.TINA_MEMOQ_PREFIX]?.title_and_description?.title ? `${e[a.TINA_MEMOQ_PREFIX].title_and_description.title} [Discounts Title & Description]` : "New [Discounts Title & Description]"
                  })
                }, y({
                  game: l,
                  label: "Discount Items Carousel"
                }), h({
                  game: l
                }), d({
                  parent: t
                }), b({
                  game: l
                })]
              }
          }
        },
        w = e => {
          let {
            game: t = null,
            filter: l = "discounts"
          } = e;
          return {
            label: "Discounts",
            fields: [(0, a.NameField)(), v({
              game: t
            }), (0, a.StyleField)({
              filter: l
            })],
            defaultItem: () => (0, a.defaultItemUnique)({
              renderTemplate: t
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Discounts]` : "New [Discounts]"
            })
          }
        };
      var P = l(26398);
      const T = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          parent: "",
          post: null
        };
        return {
          label: "Donate",
          fields: [...(0, a.NameField)(e), ...(0, a.ContentField)(e)],
          defaultItem: () => (0, a.defaultItemUnique)({
            content: ""
          }),
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: (0, P.stripHTML)(e?.translationName ?? e?.content ?? "Donate")
          })
        }
      };
      var G = l(83166),
        k = l(17523);
      const S = () => {
          const e = {
            ...m({})
          };
          return e.fields.push({
            name: "objectPosition",
            label: "Object Position",
            component: "text",
            description: "Controls the position the image is cropped from when inside the gallery."
          }), e
        },
        F = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const l = [{
            name: "images",
            label: "Image & Badge Configuration",
            description: "Displays in collapsed & expanded card. Warning, event will not display in the deck without an image.",
            component: "blocks",
            templates: [S()]
          }];
          return t || l.push((0, a.translatedField)({
            name: "title",
            label: "Title",
            description: "This gets displayed in the text overlay (when collapsed) as well as at the top of the main content (when expanded). On Newswire it will display in between the image and text content.",
            component: "text"
          }), {
            name: "hideNewswireTitle",
            label: "Hide title on Newswire?",
            description: "Hides the title in between the Image and Text on Newswire.",
            component: "toggle"
          }), l.push({
            label: "Content",
            name: a.TINA_PARSER_KEY,
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
              }, (0, G.HashSelector)({
                group: "hash.mobile",
                label: "Mobile Source",
                description: "(If responsive, only Mobile Source is needed)"
              }), (0, G.HashSelector)({
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
              }, (0, k.VideoField)(), {
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
          }, (0, a.ImpressionTrackingField)(), (0, a.GtmField)()), l
        },
        D = e => {
          let {
            templates: t
          } = e;
          return {
            label: "GTAO Event Section",
            fields: F(t),
            defaultItem: () => (0, a.defaultItemUnique)({
              textOverlayProps: (0, a.defaultItemUnique)({
                hasTextOverlay: !0,
                hasHoverAnimation: !0
              })
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `${e?.[a.TINA_MEMOQ_PREFIX]?.title??"New"} [Event Section]`
            })
          }
        },
        C = e => {
          let {
            templates: t
          } = e;
          return {
            label: "GTAO Event Hero",
            fields: F(t, !0),
            defaultItem: () => (0, a.defaultItemUnique)({
              textOverlayProps: (0, a.defaultItemUnique)({
                hasTextOverlay: !0,
                hasHoverAnimation: !0
              }),
              isFeatured: !0
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `${e?.[a.TINA_MEMOQ_PREFIX]?.title??"New"} [Event Hero]`
            })
          }
        },
        A = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            parent: "",
            post: null
          };
          return {
            label: "Gaming Rewards",
            fields: [(0, a.NameField)(e), (0, a.translatedField)({
              name: "headline",
              label: "Headline",
              component: "text"
            }), {
              name: "top",
              label: "Top Section",
              component: "group",
              description: "The section below the image and above the list items",
              fields: [(0, a.translatedField)({
                name: "text",
                label: "Top Text Section",
                component: "html"
              }), (0, a.StyleField)(e)]
            }, b(e), {
              name: "bottom",
              label: "Bottom Section",
              component: "group",
              description: "Text to be displayed below the list items",
              fields: [(0, a.translatedField)({
                name: "text",
                label: "Bottom Text Section",
                component: "html"
              }), (0, a.StyleField)(e)]
            }, p(e), {
              name: "rewards",
              label: "Rewards",
              description: "Gaming rewards options",
              component: "select",
              options: ["none", "gtaPlus", "primeGaming", "psPlus"]
            }, (0, a.StyleField)(e)],
            defaultItem: () => (0, a.defaultItemUnique)({
              name: "Prime Gaming",
              plainImage: {
                name: "Social Club x Prime Gaming",
                style: {
                  "--aspect-ratio": "16/9",
                  width: "100%",
                  height: "auto"
                }
              },
              top: (0, a.defaultItemUnique)(),
              bottom: (0, a.defaultItemUnique)({
                style: {
                  "--font-size-multiplier": .75
                }
              })
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Gaming Rewards]` : "New [Gaming Rewards]"
            })
          }
        },
        _ = () => ({
          name: "Gen9List",
          label: "Deck of Cards",
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
              uploadDir: i.uploadDir
            }, {
              name: "layeredImg",
              label: "Layered Image",
              component: "image",
              uploadDir: i.uploadDir
            }]
          }, {
            name: "perPage",
            label: "Slides Per Page (Desktop Only)",
            description: "How many slides should be shown at once on desktop? (Overrides the Deck/Card settings)",
            component: "number"
          }]
        });
      var L = l(26043),
        N = l(11438);
      const x = e => {
          let {
            parent: t = null
          } = e;
          return {
            label: "Lead Gif Asset",
            fields: [(0, a.NameField)(), {
              name: "src.gifHash",
              label: "Gif Sources",
              component: "group",
              fields: [(0, N.Gif)({
                parent: t,
                group: "mobile"
              }).fields, (0, N.Gif)({
                parent: t,
                group: "desktop"
              }).fields]
            }, (0, a.AttributesFields)({
              parent: t,
              filter: "image"
            })],
            defaultItem: () => (0, a.defaultItemUnique)({
              content: L.A,
              name: "Hero Gif"
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: e.name
            })
          }
        },
        M = e => {
          let {
            game: t = null,
            parent: l = null,
            post: n = null
          } = e;
          return {
            label: "Lead Image Asset",
            fields: [(0, a.NameField)(), (0, a.ImageField)({
              game: t
            }), (0, a.AttributesFields)({
              parent: l,
              filter: "image"
            })],
            defaultItem: () => (0, a.defaultItemUnique)({
              content: L.A,
              name: "Hero Image",
              image: a._defaultImageValues
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: e.name
            })
          }
        };
      var R = l(44019);
      const U = e => {
          let {
            parent: t = null
          } = e;
          return {
            label: "Lead Video Asset",
            fields: [(0, a.NameField)(), {
              name: "video",
              label: "Video Source",
              component: "group",
              fields: (0, R.RockstarVideoPlayer)().fields
            }, (0, a.AttributesFields)({
              parent: t,
              filter: "image"
            })],
            defaultItem: () => (0, a.defaultItemUnique)({
              content: L.A,
              name: "Hero Video"
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: e.name
            })
          }
        },
        E = () => ({
          label: "Marquee",
          fields: [(0, a.StyleField)({
            filter: "gridItem"
          }), {
            label: "Text",
            name: "text",
            component: "text"
          }],
          defaultItem: () => (0, a.defaultItemUnique)(),
          itemProps: e => (0, a.itemPropsWithKey)(e)
        }),
        q = e => {
          let {
            defaults: t = {},
            templates: l = {},
            itemsDescription: n = ""
          } = e;
          const i = [{
            label: "Items",
            description: n,
            name: a.TINA_PARSER_KEY,
            component: "blocks",
            templates: l
          }, (0, a.StyleField)({
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
            fields: [...i, (0, a.MediaQueryField)({
              fields: i
            })],
            defaultItem: () => (0, a.defaultItemUnique)({
              style: t?.style ?? {}
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e)
          }
        },
        O = function() {
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
            defaultItem: () => (0, a.defaultItemUnique)({
              percent: 0,
              bgColor: "",
              primaryColor: ""
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `${e?.pct??"PCT"} % Bar`
            })
          }
        }
    }
  }
]);