try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bbc5da07-29e5-4f85-bceb-90aee7d1886f", e._sentryDebugIdIdentifier = "sentry-dbid-bbc5da07-29e5-4f85-bceb-90aee7d1886f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [1409], {
    4984: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, {
        Discounts: () => T,
        Donate: () => C,
        EventInfo: () => G,
        FeaturedEventInfo: () => _,
        GamingRewards: () => A,
        Gen9List: () => L,
        LeadGifAsset: () => O,
        LeadImageAsset: () => x,
        LeadVideoAsset: () => M,
        Marquee: () => H,
        NewswireTitle: () => Q,
        PctBar: () => V
      });
      var o = n(96130);
      const a = {
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
        rdr1: "Red Dead Redemption",
        rdr1rsp: "Red Dead Redemption (Rockstar Presents Ver)",
        rdrevolver: "Red Dead Revolver",
        rdrun: "Red Dead Redemption Undead Nightmare",
        sr1: "Smuggler's Run",
        sr2: "Smuggler's Run 2",
        srwz: "Smuggler's Run Warzones",
        tabletennis: "Table Tennis ",
        warriors: "Warriors",
        lossantoscustoms: "Los Santos Customs"
      };
      Object.keys(a).map(e => ({
        value: e,
        label: a[e]
      }));
      var l = n(34725),
        i = n(42295);
      const r = (e = "") => ({
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, i.jsx)("hr", {})
        }),
        s = (e = "--grid-num-columns", t = "Grid Number of Columns") => ({
          label: t,
          name: e,
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
        }),
        m = (r("Grid"), ((e = "Label") => {
          e.toLowerCase().split(" ").join("_")
        })("Grid"), s("style.--grid-num-columns-mobile", "Grid Number of Columns (Mobile)"), s("style.--grid-num-columns-desktop", "Grid Number of Columns (Desktop)"), r("Grid"), () => ({
          name: "type",
          label: "Text",
          component: "group",
          fields: [(0, o.om)(), (0, o.KO)(), (0, o.A_)(), (0, o.bY)({
            filter: "grid"
          }), (0, o.sE)({
            filter: "grid"
          })],
          defaultItem: () => (0, o.Q)({
            style: {
              "--max-width-dynamic": "var(--max-width-static)"
            }
          }),
          itemProps: e => (0, o.Rv)(e, {
            label: e?.name ? `${e.name} [Text]` : "New [Text]"
          })
        })),
        d = ({
          game: e = null,
          label: t = "Image",
          description: n = ""
        }) => ({
          name: "imageWithBadge",
          label: t,
          description: n,
          component: "group",
          fields: [(0, o.om)(), (0, o.CT)({
            game: e
          }), (0, o.ho)(), (0, o.bY)({
            filter: "image"
          }), (0, o.sE)({
            filter: "image"
          })],
          defaultItem: () => (0, o.Q)({
            image: (0, o.Q)(o.m9),
            badgeType: "rdr2" === e ? "badge3" : ""
          }),
          itemProps: e => (0, o.Rv)(e, {
            label: e?.name ? `${e.name} [Image]` : "New [Image]"
          })
        });
      var u = n(3514);
      const c = ({
        game: e = null
      }) => ({
        name: "plainImage",
        label: "Image",
        component: "group",
        fields: [(0, o.om)(), (0, o.CT)({
          game: e,
          label: "Sources"
        }), (0, o.sE)({
          filter: "image"
        })],
        defaultItem: () => (0, o.Q)({
          alt: ""
        }),
        itemProps: e => (0, o.Rv)(e, {
          label: e?.name ? `${e.name} [Image]` : "New [Image]"
        })
      });
      n(24325), n(58136), n(84343), n(43582);
      var p = n(93935);
      const b = ({
          game: e = null,
          parent: t = null
        }) => {
          const n = [(0, o.om)()];
          return "gtao" !== e && "gtav" !== e || n.push({
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
          }), n.push((0, o.z9)({
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
          }, (0, o.sE)({
            parent: t
          })), {
            name: "unorderedList",
            label: "Unordered List",
            component: "group",
            fields: n,
            defaultItem: () => (0, o.Q)({
              content: p.A,
              columns: 1,
              mobileColumns: 1,
              starColor: "noImg",
              listItems: []
            }),
            itemProps: e => (0, o.Rv)(e, {
              label: e?.name ? `${e.name} [Unordered List]` : "New [Unordered List]"
            })
          }
        },
        f = (e, t = "0") => (0, o.Q)({
          title: `Item ${e}`,
          image: (0, o.Q)(o.m9),
          _template: t
        }),
        g = ({
          name: e = "columns"
        }) => ({
          name: e,
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
            [e]: {
              mobile: 1,
              desktop: 1
            }
          }
        }),
        h = ({
          game: e = null
        }) => ({
          name: "discountsGridList",
          label: "Discount Items Grid",
          component: "group",
          fields: [(0, o.om)(), {
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
          }, g({
            name: "discountsGridList.columns"
          }), (0, o.Xt)({
            game: e,
            name: "discountsGridList.content",
            label: "Grid Items",
            filter: "discounts"
          })],
          defaultItem: () => (0, o.Q)({
            type: "",
            columns: {
              mobile: 1,
              desktop: 1
            },
            discountsGridList: {
              content: [f(1), f(2), f(3), f(4)]
            }
          }),
          itemProps: e => (0, o.Rv)(e, {
            label: e?.name ? `${e.name} [Discount Items Grid]` : "New [Discount Items Grid]"
          })
        }),
        w = ({
          game: e = null
        }) => ({
          name: "limitedGridList",
          label: "Limited Time Items Grid",
          component: "group",
          fields: [(0, o.om)(), g({
            name: "limitedGridList.columns"
          }), (0, o.Xt)({
            game: e,
            name: "limitedGridList.content",
            label: "Grid Items",
            filter: "discounts"
          })],
          defaultItem: () => (0, o.Q)({
            columns: {
              mobile: 1,
              desktop: 1
            },
            limitedGridList: {
              content: [f(1), f(2), f(3), f(4)]
            }
          }),
          itemProps: e => (0, o.Rv)(e, {
            label: e?.name ? `${e.name} [Limited Time Items Grid]` : "New [Limited Time Items Grid]"
          })
        }),
        v = ({
          game: e = null,
          label: t = "Limited Time Items Carousel"
        }) => ({
          name: "limitedList",
          label: t,
          component: "group",
          fields: [(0, o.om)(), {
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
          }, (0, o.Xt)({
            game: e,
            name: "limitedList.content",
            label: "List Items",
            perPage: null,
            filter: "discounts"
          })],
          defaultItem: () => (0, o.Q)({
            name: "Large Carousel",
            noInfiniteScroll: !1,
            limitedList: {
              content: [f(1), f(2), f(3), f(4)]
            }
          }),
          itemProps: e => (0, o.Rv)(e, {
            label: e?.name ? `${e.name} [${t}]` : `New [${t}]`
          })
        }),
        y = ({
          parent: e = null,
          game: t = null
        }) => {
          switch (t) {
            case "rdo":
            case "rdr2":
              return {
                name: "items", label: "Items", component: "blocks", templates: [v({
                  game: t
                }), w({
                  game: t
                }), h({
                  game: t
                })]
              };
            default:
              return {
                name: "items", label: "Items", component: "blocks", templates: [{
                  name: "title_and_description",
                  label: "Title & Description",
                  component: "group",
                  fields: [(0, o.z9)({
                    name: "title_and_description.title",
                    label: "Title",
                    component: "text"
                  }), (0, o.z9)({
                    name: "title_and_description.description",
                    label: "Description",
                    component: "html"
                  })],
                  defaultItem: () => (0, o.Q)({
                    title_and_description: {
                      title: "DISCOUNTS",
                      description: null
                    }
                  }),
                  itemProps: e => (0, o.Rv)(e, {
                    label: e?.[o.Qw]?.title_and_description?.title ? `${e[o.Qw].title_and_description.title} [Discounts Title & Description]` : "New [Discounts Title & Description]"
                  })
                }, v({
                  game: t,
                  label: "Discount Items Carousel"
                }), h({
                  game: t
                }), m({
                  parent: e
                }), b({
                  game: t
                })]
              }
          }
        },
        T = ({
          game: e = null,
          filter: t = "discounts"
        }) => ({
          label: "Discounts",
          fields: [(0, o.om)(), y({
            game: e
          }), (0, o.sE)({
            filter: t
          })],
          defaultItem: () => (0, o.Q)({
            renderTemplate: e
          }),
          itemProps: e => (0, o.Rv)(e, {
            label: e?.name ? `${e.name} [Discounts]` : "New [Discounts]"
          })
        });
      var I = n(45440);
      const C = (e = {
        parent: "",
        post: null
      }) => ({
        label: "Donate",
        fields: [...(0, o.om)(e), ...(0, o.Y4)(e)],
        defaultItem: () => (0, o.Q)({
          content: ""
        }),
        itemProps: e => (0, o.Rv)(e, {
          label: (0, I._e)(e?.translationName ?? e?.content ?? "Donate")
        })
      });
      var E = n(83166),
        k = n(17523);
      const D = () => {
          const e = {
            ...d({})
          };
          return e.fields.push({
            name: "objectPosition",
            label: "Object Position",
            component: "text",
            description: "Controls the position the image is cropped from when inside the gallery."
          }), e
        },
        P = (e, t = !1) => {
          const n = [{
            name: "images",
            label: "Image & Badge Configuration",
            description: "Displays in collapsed & expanded card. Warning, event will not display in the deck without an image.",
            component: "blocks",
            templates: [D()]
          }];
          return t || n.push((0, o.z9)({
            name: "title",
            label: "Title",
            description: "This gets displayed in the text overlay (when collapsed) as well as at the top of the main content (when expanded). On Newswire it will display in between the image and text content.",
            component: "text"
          }), {
            name: "hideNewswireTitle",
            label: "Hide title on Newswire?",
            description: "Hides the title in between the Image and Text on Newswire.",
            component: "toggle"
          }), n.push({
            label: "Content",
            name: o.ZH,
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
              }, (0, E.HashSelector)({
                group: "hash.mobile",
                label: "Mobile Source",
                description: "(If responsive, only Mobile Source is needed)"
              }), (0, E.HashSelector)({
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
          }, (0, o.pr)(), (0, o.f6)()), n
        },
        G = ({
          templates: e
        }) => ({
          label: "GTAO Event Section",
          fields: P(e),
          defaultItem: () => (0, o.Q)({
            textOverlayProps: (0, o.Q)({
              hasTextOverlay: !0,
              hasHoverAnimation: !0
            })
          }),
          itemProps: e => (0, o.Rv)(e, {
            label: `${e?.[o.Qw]?.title??"New"} [Event Section]`
          })
        }),
        _ = ({
          templates: e
        }) => ({
          label: "GTAO Event Hero",
          fields: P(e, !0),
          defaultItem: () => (0, o.Q)({
            textOverlayProps: (0, o.Q)({
              hasTextOverlay: !0,
              hasHoverAnimation: !0
            }),
            isFeatured: !0
          }),
          itemProps: e => (0, o.Rv)(e, {
            label: `${e?.[o.Qw]?.title??"New"} [Event Hero]`
          })
        }),
        A = (e = {
          parent: "",
          post: null
        }) => ({
          label: "Gaming Rewards",
          fields: [(0, o.om)(e), (0, o.z9)({
            name: "headline",
            label: "Headline",
            component: "text"
          }), {
            name: "top",
            label: "Top Section",
            component: "group",
            description: "The section below the image and above the list items",
            fields: [(0, o.z9)({
              name: "text",
              label: "Top Text Section",
              component: "html"
            }), (0, o.sE)(e)]
          }, b(e), {
            name: "bottom",
            label: "Bottom Section",
            component: "group",
            description: "Text to be displayed below the list items",
            fields: [(0, o.z9)({
              name: "text",
              label: "Bottom Text Section",
              component: "html"
            }), (0, o.sE)(e)]
          }, c(e), {
            name: "rewards",
            label: "Rewards",
            description: "Gaming rewards options",
            component: "select",
            options: ["none", "gtaPlus", "primeGaming", "psPlus"]
          }, (0, o.sE)(e)],
          defaultItem: () => (0, o.Q)({
            name: "Prime Gaming",
            plainImage: {
              name: "Social Club x Prime Gaming",
              style: {
                "--aspect-ratio": "16/9",
                width: "100%",
                height: "auto"
              }
            },
            top: (0, o.Q)(),
            bottom: (0, o.Q)({
              style: {
                "--font-size-multiplier": .75
              }
            })
          }),
          itemProps: e => (0, o.Rv)(e, {
            label: e?.name ? `${e.name} [Gaming Rewards]` : "New [Gaming Rewards]"
          })
        }),
        L = () => ({
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
              uploadDir: l.XC
            }, {
              name: "layeredImg",
              label: "Layered Image",
              component: "image",
              uploadDir: l.XC
            }]
          }, {
            name: "perPage",
            label: "Slides Per Page (Desktop Only)",
            description: "How many slides should be shown at once on desktop? (Overrides the Deck/Card settings)",
            component: "number"
          }]
        });
      var S = n(6288),
        R = n(11438);
      const O = ({
          parent: e = null
        }) => ({
          label: "Lead Gif Asset",
          fields: [(0, o.om)(), {
            name: "src.gifHash",
            label: "Gif Sources",
            component: "group",
            fields: [(0, R.Gif)({
              parent: e,
              group: "mobile"
            }).fields, (0, R.Gif)({
              parent: e,
              group: "desktop"
            }).fields]
          }, (0, o.F2)({
            parent: e,
            filter: "image"
          })],
          defaultItem: () => (0, o.Q)({
            content: S.A,
            name: "Hero Gif"
          }),
          itemProps: e => (0, o.Rv)(e, {
            label: e.name
          })
        }),
        x = ({
          game: e = null,
          parent: t = null
        }) => ({
          label: "Lead Image Asset",
          fields: [(0, o.om)(), (0, o.CT)({
            game: e
          }), (0, o.F2)({
            parent: t,
            filter: "image"
          })],
          defaultItem: () => (0, o.Q)({
            content: S.A,
            name: "Hero Image",
            image: o.m9
          }),
          itemProps: e => (0, o.Rv)(e, {
            label: e.name
          })
        });
      var N = n(44019);
      const M = ({
          parent: e = null
        }) => ({
          label: "Lead Video Asset",
          fields: [(0, o.om)(), {
            name: "video",
            label: "Video Source",
            component: "group",
            fields: (0, N.RockstarVideoPlayer)().fields
          }, (0, o.F2)({
            parent: e,
            filter: "image"
          })],
          defaultItem: () => (0, o.Q)({
            content: S.A,
            name: "Hero Video"
          }),
          itemProps: e => (0, o.Rv)(e, {
            label: e.name
          })
        }),
        H = () => ({
          label: "Marquee",
          fields: [(0, o.sE)({
            filter: "gridItem"
          }), {
            label: "Text",
            name: "text",
            component: "text"
          }],
          defaultItem: () => (0, o.Q)(),
          itemProps: e => (0, o.Rv)(e)
        }),
        Q = ({
          defaults: e = {},
          templates: t = {},
          itemsDescription: n = ""
        }) => {
          const a = [{
            label: "Items",
            description: n,
            name: o.ZH,
            component: "blocks",
            templates: t
          }, (0, o.sE)({
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
            fields: [...a, (0, o.Zn)({
              fields: a
            })],
            defaultItem: () => (0, o.Q)({
              style: e?.style ?? {}
            }),
            itemProps: e => (0, o.Rv)(e)
          }
        },
        V = (e = {
          parent: "",
          post: null
        }) => ({
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
          defaultItem: () => (0, o.Q)({
            percent: 0,
            bgColor: "",
            primaryColor: ""
          }),
          itemProps: e => (0, o.Rv)(e, {
            label: `${e?.pct??"PCT"} % Bar`
          })
        })
    },
    6306: e => {
      function t(e, t) {
        return Object.keys(t).forEach(function(n) {
          "default" === n || "__esModule" === n || Object.prototype.hasOwnProperty.call(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: function() {
              return t[n]
            }
          })
        }), e
      }

      function n(e, t, n, o) {
        Object.defineProperty(e, t, {
          get: n,
          set: o,
          enumerable: !0,
          configurable: !0
        })
      }
      var o = {};
      n(o, "ONETRUST_LOADED_EVENT", () => l), n(o, "WRAPPER_CALLED_EVENT", () => i), n(o, "CONSENT_CHANGED_EVENT", () => r), n(o, "init", () => m);
      const a = window.document.currentScript?.nonce,
        l = "ONETRUST_LOADED_EVENT",
        i = "WRAPPER_CALLED_EVENT",
        r = "CONSENT_CHANGED_EVENT";
      let s = !0;

      function m(e) {
        const t = window.document.head,
          n = window.document.createElement("script");
        if (n.setAttribute("id", "onetrust-sdk-stub"), n.setAttribute("src", "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"), n.setAttribute("type", "text/javascript"), n.setAttribute("charset", "UTF-8"), n.setAttribute("data-document-language", "true"), a && (n.nonce = a), !e) throw new Error("You must specify the OneTrust script ID");
        n.setAttribute("data-domain-script", e), t.insertBefore(n, t.firstChild), window.OptanonWrapper = function() {
          s && (s = !1, window.dispatchEvent(new CustomEvent(l, {
            bubbles: !0
          }))), window.dispatchEvent(new CustomEvent(i, {
            bubbles: !0
          })), window.OneTrust.OnConsentChanged(() => {
            window.dispatchEvent(new CustomEvent(r, {
              bubbles: !0
            }))
          })
        }
      }
      var d = {};
      n(d, "NoChoiceTransactionType", () => u), n(d, "ConfirmedTransactionType", () => c), n(d, "canStoreCookie", () => b);
      const u = "NO_CHOICE",
        c = "CONFIRMED",
        p = {
          AlwaysActive: "always active"
        };

      function b(e, t = null) {
        if (!window.OneTrust) return !1;
        const n = window.OneTrust.GetDomainData(),
          o = n.Groups.find(t => t.Cookies.some(t => t.Name === e));
        if (!o) {
          const n = `Unable to find ${e} in any OneTrust category. Therefore, we won't store the cookie`;
          return t && t.log(n), !1
        }
        if (o.Status === p.AlwaysActive) return !0;
        const a = n.ConsentIntegrationData?.consentPayload?.purposes?.find(e => e.Id === o.PurposeId);
        return a?.TransactionType === c
      }
      t(e.exports, o), t(e.exports, d)
    },
    42295: (e, t, n) => {
      "use strict";
      e.exports = n(69245)
    },
    42649: e => {
      var t, n, o = e.exports = {};

      function a() {
        throw new Error("setTimeout has not been defined")
      }

      function l() {
        throw new Error("clearTimeout has not been defined")
      }

      function i(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === a || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
        try {
          return t(e, 0)
        } catch (n) {
          try {
            return t.call(null, e, 0)
          } catch (n) {
            return t.call(this, e, 0)
          }
        }
      }! function() {
        try {
          t = "function" == typeof setTimeout ? setTimeout : a
        } catch (e) {
          t = a
        }
        try {
          n = "function" == typeof clearTimeout ? clearTimeout : l
        } catch (e) {
          n = l
        }
      }();
      var r, s = [],
        m = !1,
        d = -1;

      function u() {
        m && r && (m = !1, r.length ? s = r.concat(s) : d = -1, s.length && c())
      }

      function c() {
        if (!m) {
          var e = i(u);
          m = !0;
          for (var t = s.length; t;) {
            for (r = s, s = []; ++d < t;) r && r[d].run();
            d = -1, t = s.length
          }
          r = null, m = !1,
            function(e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === l || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
              try {
                return n(e)
              } catch (t) {
                try {
                  return n.call(null, e)
                } catch (t) {
                  return n.call(this, e)
                }
              }
            }(e)
        }
      }

      function p(e, t) {
        this.fun = e, this.array = t
      }

      function b() {}
      o.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        s.push(new p(e, t)), 1 !== s.length || m || i(c)
      }, p.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = b, o.addListener = b, o.once = b, o.off = b, o.removeListener = b, o.removeAllListeners = b, o.emit = b, o.prependListener = b, o.prependOnceListener = b, o.listeners = function(e) {
        return []
      }, o.binding = function(e) {
        throw new Error("process.binding is not supported")
      }, o.cwd = function() {
        return "/"
      }, o.chdir = function(e) {
        throw new Error("process.chdir is not supported")
      }, o.umask = function() {
        return 0
      }
    },
    69245: (e, t, n) => {
      "use strict";
      var o = n(71127),
        a = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        r = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function m(e, t, n) {
        var o, l = {},
          m = null,
          d = null;
        for (o in void 0 !== n && (m = "" + n), void 0 !== t.key && (m = "" + t.key), void 0 !== t.ref && (d = t.ref), t) i.call(t, o) && !s.hasOwnProperty(o) && (l[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === l[o] && (l[o] = t[o]);
        return {
          $$typeof: a,
          type: e,
          key: m,
          ref: d,
          props: l,
          _owner: r.current
        }
      }
      t.Fragment = l, t.jsx = m, t.jsxs = m
    }
  }
]);