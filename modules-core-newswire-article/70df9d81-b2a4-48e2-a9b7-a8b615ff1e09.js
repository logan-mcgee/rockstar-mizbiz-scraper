try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "70df9d81-b2a4-48e2-a9b7-a8b615ff1e09", e._sentryDebugIdIdentifier = "sentry-dbid-70df9d81-b2a4-48e2-a9b7-a8b615ff1e09")
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
  [3410], {
    4984: (e, t, a) => {
      a.r(t), a.d(t, {
        Discounts: () => y,
        Donate: () => T,
        EventInfo: () => L,
        FeaturedEventInfo: () => A,
        GamingRewards: () => R,
        Gen9List: () => S,
        LeadGifAsset: () => E,
        LeadImageAsset: () => M,
        LeadVideoAsset: () => $,
        Marquee: () => N,
        NewswireTitle: () => Q,
        PctBar: () => O
      });
      var n = a(96130);
      const l = {
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
      Object.keys(l).map((e => ({
        value: e,
        label: l[e]
      })));
      var o = a(34725),
        i = a(42295);
      const s = (e = "") => ({
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, i.jsx)("hr", {})
        }),
        r = (e = "--grid-num-columns", t = "Grid Number of Columns") => ({
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
        m = (s("Grid"), ((e = "Label") => {
          e.toLowerCase().split(" ").join("_")
        })("Grid"), r("style.--grid-num-columns-mobile", "Grid Number of Columns (Mobile)"), r("style.--grid-num-columns-desktop", "Grid Number of Columns (Desktop)"), s("Grid"), ({
          parent: e = null
        }) => ({
          name: "type",
          label: "Text",
          component: "group",
          fields: [(0, n.om)(), (0, n.KO)(), (0, n.A_)(), (0, n.bY)({
            filter: "grid"
          }), (0, n.sE)({
            filter: "grid"
          })],
          defaultItem: () => (0, n.Q)({
            style: {
              "--max-width-dynamic": "var(--max-width-static)"
            }
          }),
          itemProps: e => (0, n.Rv)(e, {
            label: e?.name ? `${e.name} [Text]` : "New [Text]"
          })
        })),
        d = ({
          game: e = null,
          label: t = "Image",
          description: a = ""
        }) => ({
          name: "imageWithBadge",
          label: t,
          description: a,
          component: "group",
          fields: [(0, n.om)(), (0, n.CT)({
            game: e
          }), (0, n.ho)(), (0, n.bY)({
            filter: "image"
          }), (0, n.sE)({
            filter: "image"
          })],
          defaultItem: () => (0, n.Q)({
            image: (0, n.Q)(n.m9),
            badgeType: "rdr2" === e ? "badge3" : ""
          }),
          itemProps: e => (0, n.Rv)(e, {
            label: e?.name ? `${e.name} [Image]` : "New [Image]"
          })
        });
      var c = a(3514);
      const p = ({
        game: e = null
      }) => ({
        name: "plainImage",
        label: "Image",
        component: "group",
        fields: [(0, n.om)(), (0, n.CT)({
          game: e,
          label: "Sources"
        }), (0, n.sE)({
          filter: "image"
        })],
        defaultItem: () => (0, n.Q)({
          alt: ""
        }),
        itemProps: e => (0, n.Rv)(e, {
          label: e?.name ? `${e.name} [Image]` : "New [Image]"
        })
      });
      a(24325), a(95966), a(84343), a(43582);
      var u = a(93935);
      const b = ({
          game: e = null,
          parent: t = null
        }) => {
          const a = [(0, n.om)()];
          return "gtao" !== e && "gtav" !== e || a.push({
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
          }), a.push((0, n.z9)({
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
          }, (0, n.sE)({
            parent: t
          })), {
            name: "unorderedList",
            label: "Unordered List",
            component: "group",
            fields: a,
            defaultItem: () => (0, n.Q)({
              content: u.A,
              columns: 1,
              mobileColumns: 1,
              starColor: "noImg",
              listItems: []
            }),
            itemProps: e => (0, n.Rv)(e, {
              label: e?.name ? `${e.name} [Unordered List]` : "New [Unordered List]"
            })
          }
        },
        g = (e, t = "0") => (0, n.Q)({
          title: `Item ${e}`,
          image: (0, n.Q)(n.m9),
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
        f = ({
          game: e = null
        }) => ({
          name: "discountsGridList",
          label: "Discount Items Grid",
          component: "group",
          fields: [(0, n.om)(), {
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
          }), (0, n.Xt)({
            game: e,
            name: "discountsGridList.content",
            label: "Grid Items",
            filter: "discounts"
          })],
          defaultItem: () => (0, n.Q)({
            type: "",
            columns: {
              mobile: 1,
              desktop: 1
            },
            discountsGridList: {
              content: [g(1), g(2), g(3), g(4)]
            }
          }),
          itemProps: e => (0, n.Rv)(e, {
            label: e?.name ? `${e.name} [Discount Items Grid]` : "New [Discount Items Grid]"
          })
        }),
        w = ({
          game: e = null
        }) => ({
          name: "limitedGridList",
          label: "Limited Time Items Grid",
          component: "group",
          fields: [(0, n.om)(), h({
            name: "limitedGridList.columns"
          }), (0, n.Xt)({
            game: e,
            name: "limitedGridList.content",
            label: "Grid Items",
            filter: "discounts"
          })],
          defaultItem: () => (0, n.Q)({
            columns: {
              mobile: 1,
              desktop: 1
            },
            limitedGridList: {
              content: [g(1), g(2), g(3), g(4)]
            }
          }),
          itemProps: e => (0, n.Rv)(e, {
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
          fields: [(0, n.om)(), {
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
          }, (0, n.Xt)({
            game: e,
            name: "limitedList.content",
            label: "List Items",
            perPage: null,
            filter: "discounts"
          })],
          defaultItem: () => (0, n.Q)({
            name: "Large Carousel",
            noInfiniteScroll: !1,
            limitedList: {
              content: [g(1), g(2), g(3), g(4)]
            }
          }),
          itemProps: e => (0, n.Rv)(e, {
            label: e?.name ? `${e.name} [${t}]` : `New [${t}]`
          })
        }),
        I = ({
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
                }), f({
                  game: t
                })]
              };
            default:
              return {
                name: "items", label: "Items", component: "blocks", templates: [{
                  name: "title_and_description",
                  label: "Title & Description",
                  component: "group",
                  fields: [(0, n.z9)({
                    name: "title_and_description.title",
                    label: "Title",
                    component: "text"
                  }), (0, n.z9)({
                    name: "title_and_description.description",
                    label: "Description",
                    component: "html"
                  })],
                  defaultItem: () => (0, n.Q)({
                    title_and_description: {
                      title: "DISCOUNTS",
                      description: null
                    }
                  }),
                  itemProps: e => (0, n.Rv)(e, {
                    label: e?.[n.Qw]?.title_and_description?.title ? `${e[n.Qw].title_and_description.title} [Discounts Title & Description]` : "New [Discounts Title & Description]"
                  })
                }, v({
                  game: t,
                  label: "Discount Items Carousel"
                }), f({
                  game: t
                }), m({
                  parent: e
                }), b({
                  game: t
                })]
              }
          }
        },
        y = ({
          game: e = null,
          filter: t = "discounts"
        }) => ({
          label: "Discounts",
          fields: [(0, n.om)(), I({
            game: e
          }), (0, n.sE)({
            filter: t
          })],
          defaultItem: () => (0, n.Q)({
            renderTemplate: e
          }),
          itemProps: e => (0, n.Rv)(e, {
            label: e?.name ? `${e.name} [Discounts]` : "New [Discounts]"
          })
        });
      var k = a(45440);
      const T = (e = {
        parent: "",
        post: null
      }) => ({
        label: "Donate",
        fields: [...(0, n.om)(e), ...(0, n.Y4)(e)],
        defaultItem: () => (0, n.Q)({
          content: ""
        }),
        itemProps: e => (0, n.Rv)(e, {
          label: (0, k._e)(e?.translationName ?? e?.content ?? "Donate")
        })
      });
      var G = a(83166),
        D = a(17523);
      const C = () => {
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
          const a = [{
            name: "images",
            label: "Image & Badge Configuration",
            description: "Displays in collapsed & expanded card. Warning, event will not display in the deck without an image.",
            component: "blocks",
            templates: [C()]
          }];
          return t || a.push((0, n.z9)({
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
            name: n.ZH,
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
              }, (0, D.VideoField)(), {
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
          }, (0, n.pr)(), (0, n.f6)()), a
        },
        L = ({
          templates: e
        }) => ({
          label: "GTAO Event Section",
          fields: P(e),
          defaultItem: () => (0, n.Q)({
            textOverlayProps: (0, n.Q)({
              hasTextOverlay: !0,
              hasHoverAnimation: !0
            })
          }),
          itemProps: e => (0, n.Rv)(e, {
            label: `${e?.[n.Qw]?.title??"New"} [Event Section]`
          })
        }),
        A = ({
          templates: e
        }) => ({
          label: "GTAO Event Hero",
          fields: P(e, !0),
          defaultItem: () => (0, n.Q)({
            textOverlayProps: (0, n.Q)({
              hasTextOverlay: !0,
              hasHoverAnimation: !0
            }),
            isFeatured: !0
          }),
          itemProps: e => (0, n.Rv)(e, {
            label: `${e?.[n.Qw]?.title??"New"} [Event Hero]`
          })
        }),
        R = (e = {
          parent: "",
          post: null
        }) => ({
          label: "Gaming Rewards",
          fields: [(0, n.om)(e), (0, n.z9)({
            name: "headline",
            label: "Headline",
            component: "text"
          }), {
            name: "top",
            label: "Top Section",
            component: "group",
            description: "The section below the image and above the list items",
            fields: [(0, n.z9)({
              name: "text",
              label: "Top Text Section",
              component: "html"
            }), (0, n.sE)(e)]
          }, b(e), {
            name: "bottom",
            label: "Bottom Section",
            component: "group",
            description: "Text to be displayed below the list items",
            fields: [(0, n.z9)({
              name: "text",
              label: "Bottom Text Section",
              component: "html"
            }), (0, n.sE)(e)]
          }, p(e), {
            name: "rewards",
            label: "Rewards",
            description: "Gaming rewards options",
            component: "select",
            options: ["none", "gtaPlus", "primeGaming", "psPlus"]
          }, (0, n.sE)(e)],
          defaultItem: () => (0, n.Q)({
            name: "Prime Gaming",
            plainImage: {
              name: "Social Club x Prime Gaming",
              style: {
                "--aspect-ratio": "16/9",
                width: "100%",
                height: "auto"
              }
            },
            top: (0, n.Q)(),
            bottom: (0, n.Q)({
              style: {
                "--font-size-multiplier": .75
              }
            })
          }),
          itemProps: e => (0, n.Rv)(e, {
            label: e?.name ? `${e.name} [Gaming Rewards]` : "New [Gaming Rewards]"
          })
        }),
        S = () => ({
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
      var x = a(6288),
        H = a(11438);
      const E = ({
          parent: e = null
        }) => ({
          label: "Lead Gif Asset",
          fields: [(0, n.om)(), {
            name: "src.gifHash",
            label: "Gif Sources",
            component: "group",
            fields: [(0, H.Gif)({
              parent: e,
              group: "mobile"
            }).fields, (0, H.Gif)({
              parent: e,
              group: "desktop"
            }).fields]
          }, (0, n.F2)({
            parent: e,
            filter: "image"
          })],
          defaultItem: () => (0, n.Q)({
            content: x.A,
            name: "Hero Gif"
          }),
          itemProps: e => (0, n.Rv)(e, {
            label: e.name
          })
        }),
        M = ({
          game: e = null,
          parent: t = null,
          post: a = null
        }) => ({
          label: "Lead Image Asset",
          fields: [(0, n.om)(), (0, n.CT)({
            game: e
          }), (0, n.F2)({
            parent: t,
            filter: "image"
          })],
          defaultItem: () => (0, n.Q)({
            content: x.A,
            name: "Hero Image",
            image: n.m9
          }),
          itemProps: e => (0, n.Rv)(e, {
            label: e.name
          })
        });
      var _ = a(44019);
      const $ = ({
          parent: e = null
        }) => ({
          label: "Lead Video Asset",
          fields: [(0, n.om)(), {
            name: "video",
            label: "Video Source",
            component: "group",
            fields: (0, _.RockstarVideoPlayer)().fields
          }, (0, n.F2)({
            parent: e,
            filter: "image"
          })],
          defaultItem: () => (0, n.Q)({
            content: x.A,
            name: "Hero Video"
          }),
          itemProps: e => (0, n.Rv)(e, {
            label: e.name
          })
        }),
        N = () => ({
          label: "Marquee",
          fields: [(0, n.sE)({
            filter: "gridItem"
          }), {
            label: "Text",
            name: "text",
            component: "text"
          }],
          defaultItem: () => (0, n.Q)(),
          itemProps: e => (0, n.Rv)(e)
        }),
        Q = ({
          defaults: e = {},
          templates: t = {},
          itemsDescription: a = ""
        }) => {
          const l = [{
            label: "Items",
            description: a,
            name: n.ZH,
            component: "blocks",
            templates: t
          }, (0, n.sE)({
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
            fields: [...l, (0, n.Zn)({
              fields: l
            })],
            defaultItem: () => (0, n.Q)({
              style: e?.style ?? {}
            }),
            itemProps: e => (0, n.Rv)(e)
          }
        },
        O = (e = {
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
          defaultItem: () => (0, n.Q)({
            percent: 0,
            bgColor: "",
            primaryColor: ""
          }),
          itemProps: e => (0, n.Rv)(e, {
            label: `${e?.pct??"PCT"} % Bar`
          })
        })
    },
    45547: (e, t, a) => {
      a.d(t, {
        A: () => s
      });
      const n = window?.env?.sc,
        l = window?.env?.marketing,
        o = ({
          apiHost: e,
          authHost: t,
          clientId: a,
          cms: o,
          graphEnv: i,
          queryManifest: s,
          scHost: r,
          hostname: m,
          cdnBase: d,
          key: c,
          marketingAuthTLD: p
        }) => {
          const u = n?.apiHost ?? e,
            b = n?.authHost ?? t,
            g = n?.cdnBase ?? d,
            h = n?.clientId ?? a,
            f = l?.marketingAuthTLD ?? p,
            w = n?.scHost ?? r,
            v = l?.pingBearerEndpoint ?? "auth/ping-bearer.json";
          return {
            apiHost: `https://${u}.rockstargames.com`,
            graphEnv: n?.graphEnv ?? i,
            host: w,
            hostname: m,
            cdnBase: g,
            key: c,
            clientId: h,
            cms: `https://${o}.rockstargames.com/graphql`,
            authHost: b,
            queryManifest: s,
            scBase: `https://${w}.rockstargames.com/`,
            login: `https://${b}.rockstargames.com/connect/authorize/${h}`,
            silentCheck: `https://${b}.rockstargames.com/connect/cors/check/${h}`,
            signup: `https://${b}.rockstargames.com/create/?cid=${h}`,
            gateway: `https://${f}/auth/gateway.json`,
            logout: `https://${f}/auth/sc-auth-logout`,
            pingBearer: `https://${f}/${v}`
          }
        },
        i = [o({
          key: "prod",
          clientId: "rsg",
          cms: "cms-prod.ros",
          graphEnv: "prod",
          authHost: "signin",
          queryManifest: "https://media-dev-rockstargames-com.akamaized.net/mfe6/prod/pq/persisted-query-manifest.json",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /www/,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        }), o({
          key: "sc-prod",
          clientId: "socialclub",
          cms: "cms-prod.ros",
          graphEnv: "prod",
          authHost: "signin",
          queryManifest: "https://media-dev-rockstargames-com.akamaized.net/mfe6/prod/pq/persisted-query-manifest.json",
          scHost: "socialclub",
          apiHost: "scapi",
          hostname: /^socialclub\./,
          cdnBase: "https://s.rsg.sc/sc",
          marketingAuthTLD: "www.rockstargames.com"
        })],
        s = () => {
          const e = window?.env?.scEnv ?? null;
          if (e) {
            const t = i.find((({
              key: t
            }) => t === e)) ?? null;
            if (t) return t
          }
          return i.find((({
            hostname: e
          }) => new RegExp(e).test(document.location.hostname))) || i[0]
        }
    }
  }
]);