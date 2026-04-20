try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1b415610-a4e7-4614-b3f0-a33ecfc43dfe", e._sentryDebugIdIdentifier = "sentry-dbid-1b415610-a4e7-4614-b3f0-a33ecfc43dfe")
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
  [5901], {
    9949: (e, t, l) => {
      l.r(t), l.d(t, {
        Discounts: () => T,
        Donate: () => G,
        EventInfo: () => R,
        FeaturedEventInfo: () => S,
        GamingRewards: () => x,
        Gen9List: () => A,
        LeadGifAsset: () => E,
        LeadImageAsset: () => N,
        LeadVideoAsset: () => H,
        Marquee: () => O,
        NewswireTitle: () => $,
        PctBar: () => V
      });
      var a = l(96130);
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
      Object.keys(n).map(e => ({
        value: e,
        label: n[e]
      }));
      var o = l(34725),
        i = l(83613);
      Object.keys(i).map(e => ({
        label: e,
        value: e
      })), Object.keys(i).map(e => ({
        label: e,
        value: e
      }));
      var s = l(42295);
      const r = (e = "") => ({
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, s.jsx)("hr", {})
        }),
        m = (e = "--grid-num-columns", t = "Grid Number of Columns") => ({
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
        d = (r("Grid"), ((e = "Label") => {
          e.toLowerCase().split(" ").join("_")
        })("Grid"), m("style.--grid-num-columns-mobile", "Grid Number of Columns (Mobile)"), m("style.--grid-num-columns-desktop", "Grid Number of Columns (Desktop)"), r("Grid"), () => ({
          name: "type",
          label: "Text",
          component: "group",
          fields: [(0, a.om)(), (0, a.KO)(), (0, a.A_)(), (0, a.bY)({
            filter: "grid"
          }), (0, a.sE)({
            filter: "grid"
          })],
          defaultItem: () => (0, a.Q)({
            style: {
              "--max-width-dynamic": "var(--max-width-static)"
            }
          }),
          itemProps: e => (0, a.Rv)(e, {
            label: e?.name ? `${e.name} [Text]` : "New [Text]"
          })
        })),
        p = ({
          game: e = null,
          label: t = "Image",
          description: l = ""
        }) => ({
          name: "imageWithBadge",
          label: t,
          description: l,
          component: "group",
          fields: [(0, a.om)(), (0, a.CT)({
            game: e
          }), (0, a.ho)(), (0, a.bY)({
            filter: "image"
          }), (0, a.sE)({
            filter: "image"
          })],
          defaultItem: () => (0, a.Q)({
            image: (0, a.Q)(a.m9),
            badgeType: "rdr2" === e ? "badge3" : ""
          }),
          itemProps: e => (0, a.Rv)(e, {
            label: e?.name ? `${e.name} [Image]` : "New [Image]"
          })
        });
      var c = l(3514);
      const u = ({
        game: e = null
      }) => ({
        name: "plainImage",
        label: "Image",
        component: "group",
        fields: [(0, a.om)(), (0, a.CT)({
          game: e,
          label: "Sources"
        }), (0, a.sE)({
          filter: "image"
        })],
        defaultItem: () => (0, a.Q)({
          alt: ""
        }),
        itemProps: e => (0, a.Rv)(e, {
          label: e?.name ? `${e.name} [Image]` : "New [Image]"
        })
      });
      l(24325), l(58136), l(84343), l(43582);
      var b = l(93935);
      const g = ({
          game: e = null,
          parent: t = null
        }) => {
          const l = [(0, a.om)()];
          return "gtao" !== e && "gtav" !== e || l.push({
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
          }), l.push((0, a.z9)({
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
            templates: [(0, c.A)({})]
          }, (0, a.sE)({
            parent: t
          })), {
            name: "unorderedList",
            label: "Unordered List",
            component: "group",
            fields: l,
            defaultItem: () => (0, a.Q)({
              content: b.A,
              columns: 1,
              mobileColumns: 1,
              starColor: "noImg",
              listItems: []
            }),
            itemProps: e => (0, a.Rv)(e, {
              label: e?.name ? `${e.name} [Unordered List]` : "New [Unordered List]"
            })
          }
        },
        f = (e, t = "0") => (0, a.Q)({
          title: `Item ${e}`,
          image: (0, a.Q)(a.m9),
          _template: t
        }),
        h = ({
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
        v = ({
          game: e = null
        }) => ({
          name: "discountsGridList",
          label: "Discount Items Grid",
          component: "group",
          fields: [(0, a.om)(), {
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
          }, h({
            name: "discountsGridList.columns"
          }), (0, a.Xt)({
            game: e,
            name: "discountsGridList.content",
            label: "Grid Items",
            filter: "discounts"
          })],
          defaultItem: () => (0, a.Q)({
            type: "",
            columns: {
              mobile: 1,
              desktop: 1
            },
            discountsGridList: {
              content: [f(1), f(2), f(3), f(4)]
            }
          }),
          itemProps: e => (0, a.Rv)(e, {
            label: e?.name ? `${e.name} [Discount Items Grid]` : "New [Discount Items Grid]"
          })
        }),
        I = ({
          game: e = null
        }) => ({
          name: "limitedGridList",
          label: "Limited Time Items Grid",
          component: "group",
          fields: [(0, a.om)(), h({
            name: "limitedGridList.columns"
          }), (0, a.Xt)({
            game: e,
            name: "limitedGridList.content",
            label: "Grid Items",
            filter: "discounts"
          })],
          defaultItem: () => (0, a.Q)({
            columns: {
              mobile: 1,
              desktop: 1
            },
            limitedGridList: {
              content: [f(1), f(2), f(3), f(4)]
            }
          }),
          itemProps: e => (0, a.Rv)(e, {
            label: e?.name ? `${e.name} [Limited Time Items Grid]` : "New [Limited Time Items Grid]"
          })
        }),
        w = ({
          game: e = null,
          label: t = "Limited Time Items Carousel"
        }) => ({
          name: "limitedList",
          label: t,
          component: "group",
          fields: [(0, a.om)(), {
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
          }, (0, a.Xt)({
            game: e,
            name: "limitedList.content",
            label: "List Items",
            perPage: null,
            filter: "discounts"
          })],
          defaultItem: () => (0, a.Q)({
            name: "Large Carousel",
            noInfiniteScroll: !1,
            limitedList: {
              content: [f(1), f(2), f(3), f(4)]
            }
          }),
          itemProps: e => (0, a.Rv)(e, {
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
                name: "items", label: "Items", component: "blocks", templates: [w({
                  game: t
                }), I({
                  game: t
                }), v({
                  game: t
                })]
              };
            default:
              return {
                name: "items", label: "Items", component: "blocks", templates: [{
                  name: "title_and_description",
                  label: "Title & Description",
                  component: "group",
                  fields: [(0, a.z9)({
                    name: "title_and_description.title",
                    label: "Title",
                    component: "text"
                  }), (0, a.z9)({
                    name: "title_and_description.description",
                    label: "Description",
                    component: "html"
                  })],
                  defaultItem: () => (0, a.Q)({
                    title_and_description: {
                      title: "DISCOUNTS",
                      description: null
                    }
                  }),
                  itemProps: e => (0, a.Rv)(e, {
                    label: e?.[a.Qw]?.title_and_description?.title ? `${e[a.Qw].title_and_description.title} [Discounts Title & Description]` : "New [Discounts Title & Description]"
                  })
                }, w({
                  game: t,
                  label: "Discount Items Carousel"
                }), v({
                  game: t
                }), d({
                  parent: e
                }), g({
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
          fields: [(0, a.om)(), y({
            game: e
          }), (0, a.sE)({
            filter: t
          })],
          defaultItem: () => (0, a.Q)({
            renderTemplate: e
          }),
          itemProps: e => (0, a.Rv)(e, {
            label: e?.name ? `${e.name} [Discounts]` : "New [Discounts]"
          })
        });
      var k = l(45440);
      const G = (e = {
        parent: "",
        post: null
      }) => ({
        label: "Donate",
        fields: [...(0, a.om)(e), ...(0, a.Y4)(e)],
        defaultItem: () => (0, a.Q)({
          content: ""
        }),
        itemProps: e => (0, a.Rv)(e, {
          label: (0, k._e)(e?.translationName ?? e?.content ?? "Donate")
        })
      });
      var P = l(83166),
        C = l(17523);
      const D = () => {
          const e = {
            ...p({})
          };
          return e.fields.push({
            name: "objectPosition",
            label: "Object Position",
            component: "text",
            description: "Controls the position the image is cropped from when inside the gallery."
          }), e
        },
        L = (e, t = !1) => {
          const l = [{
            name: "images",
            label: "Image & Badge Configuration",
            description: "Displays in collapsed & expanded card. Warning, event will not display in the deck without an image.",
            component: "blocks",
            templates: [D()]
          }];
          return t || l.push((0, a.z9)({
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
            name: a.ZH,
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
              }, (0, P.HashSelector)({
                group: "hash.mobile",
                label: "Mobile Source",
                description: "(If responsive, only Mobile Source is needed)"
              }), (0, P.HashSelector)({
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
              }, (0, C.VideoField)(), {
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
          }, (0, a.pr)(), (0, a.f6)()), l
        },
        R = ({
          templates: e
        }) => ({
          label: "GTAO Event Section",
          fields: L(e),
          defaultItem: () => (0, a.Q)({
            textOverlayProps: (0, a.Q)({
              hasTextOverlay: !0,
              hasHoverAnimation: !0
            })
          }),
          itemProps: e => (0, a.Rv)(e, {
            label: `${e?.[a.Qw]?.title??"New"} [Event Section]`
          })
        }),
        S = ({
          templates: e
        }) => ({
          label: "GTAO Event Hero",
          fields: L(e, !0),
          defaultItem: () => (0, a.Q)({
            textOverlayProps: (0, a.Q)({
              hasTextOverlay: !0,
              hasHoverAnimation: !0
            }),
            isFeatured: !0
          }),
          itemProps: e => (0, a.Rv)(e, {
            label: `${e?.[a.Qw]?.title??"New"} [Event Hero]`
          })
        }),
        x = (e = {
          parent: "",
          post: null
        }) => ({
          label: "Gaming Rewards",
          fields: [(0, a.om)(e), (0, a.z9)({
            name: "headline",
            label: "Headline",
            component: "text"
          }), {
            name: "top",
            label: "Top Section",
            component: "group",
            description: "The section below the image and above the list items",
            fields: [(0, a.z9)({
              name: "text",
              label: "Top Text Section",
              component: "html"
            }), (0, a.sE)(e)]
          }, g(e), {
            name: "bottom",
            label: "Bottom Section",
            component: "group",
            description: "Text to be displayed below the list items",
            fields: [(0, a.z9)({
              name: "text",
              label: "Bottom Text Section",
              component: "html"
            }), (0, a.sE)(e)]
          }, u(e), {
            name: "rewards",
            label: "Rewards",
            description: "Gaming rewards options",
            component: "select",
            options: ["none", "gtaPlus", "primeGaming", "psPlus"]
          }, (0, a.sE)(e)],
          defaultItem: () => (0, a.Q)({
            name: "Prime Gaming",
            plainImage: {
              name: "Social Club x Prime Gaming",
              style: {
                "--aspect-ratio": "16/9",
                width: "100%",
                height: "auto"
              }
            },
            top: (0, a.Q)(),
            bottom: (0, a.Q)({
              style: {
                "--font-size-multiplier": .75
              }
            })
          }),
          itemProps: e => (0, a.Rv)(e, {
            label: e?.name ? `${e.name} [Gaming Rewards]` : "New [Gaming Rewards]"
          })
        }),
        A = () => ({
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
              uploadDir: o.XC
            }, {
              name: "layeredImg",
              label: "Layered Image",
              component: "image",
              uploadDir: o.XC
            }]
          }, {
            name: "perPage",
            label: "Slides Per Page (Desktop Only)",
            description: "How many slides should be shown at once on desktop? (Overrides the Deck/Card settings)",
            component: "number"
          }]
        });
      var _ = l(6288),
        M = l(11438);
      const E = ({
          parent: e = null
        }) => ({
          label: "Lead Gif Asset",
          fields: [(0, a.om)(), {
            name: "src.gifHash",
            label: "Gif Sources",
            component: "group",
            fields: [(0, M.Gif)({
              parent: e,
              group: "mobile"
            }).fields, (0, M.Gif)({
              parent: e,
              group: "desktop"
            }).fields]
          }, (0, a.F2)({
            parent: e,
            filter: "image"
          })],
          defaultItem: () => (0, a.Q)({
            content: _.A,
            name: "Hero Gif"
          }),
          itemProps: e => (0, a.Rv)(e, {
            label: e.name
          })
        }),
        N = ({
          game: e = null,
          parent: t = null
        }) => ({
          label: "Lead Image Asset",
          fields: [(0, a.om)(), (0, a.CT)({
            game: e
          }), (0, a.F2)({
            parent: t,
            filter: "image"
          })],
          defaultItem: () => (0, a.Q)({
            content: _.A,
            name: "Hero Image",
            image: a.m9
          }),
          itemProps: e => (0, a.Rv)(e, {
            label: e.name
          })
        });
      var Q = l(44019);
      const H = ({
          parent: e = null
        }) => ({
          label: "Lead Video Asset",
          fields: [(0, a.om)(), {
            name: "video",
            label: "Video Source",
            component: "group",
            fields: (0, Q.RockstarVideoPlayer)().fields
          }, (0, a.F2)({
            parent: e,
            filter: "image"
          })],
          defaultItem: () => (0, a.Q)({
            content: _.A,
            name: "Hero Video"
          }),
          itemProps: e => (0, a.Rv)(e, {
            label: e.name
          })
        }),
        O = () => ({
          label: "Marquee",
          fields: [(0, a.sE)({
            filter: "gridItem"
          }), {
            label: "Text",
            name: "text",
            component: "text"
          }],
          defaultItem: () => (0, a.Q)(),
          itemProps: e => (0, a.Rv)(e)
        }),
        $ = ({
          defaults: e = {},
          templates: t = {},
          itemsDescription: l = ""
        }) => {
          const n = [{
            label: "Items",
            description: l,
            name: a.ZH,
            component: "blocks",
            templates: t
          }, (0, a.sE)({
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
            fields: [...n, (0, a.Zn)({
              fields: n
            })],
            defaultItem: () => (0, a.Q)({
              style: e?.style ?? {}
            }),
            itemProps: e => (0, a.Rv)(e)
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
          defaultItem: () => (0, a.Q)({
            percent: 0,
            bgColor: "",
            primaryColor: ""
          }),
          itemProps: e => (0, a.Rv)(e, {
            label: `${e?.pct??"PCT"} % Bar`
          })
        })
    }
  }
]);