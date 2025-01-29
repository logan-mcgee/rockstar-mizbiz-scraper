! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "dbb32c1e-eb5d-4421-a715-a80dbc0c4ccd", e._sentryDebugIdIdentifier = "sentry-dbid-dbb32c1e-eb5d-4421-a715-a80dbc0c4ccd")
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
  [590], {
    10590: (e, t, n) => {
      n.r(t), n.d(t, {
        Discounts: () => I,
        Donate: () => k,
        EventInfo: () => S,
        FeaturedEventInfo: () => L,
        GamingRewards: () => D,
        Gen9List: () => R,
        LeadGifAsset: () => E,
        LeadImageAsset: () => N,
        LeadVideoAsset: () => O,
        Marquee: () => Q,
        NewswireTitle: () => H,
        PctBar: () => $
      });
      var l = n(30745);
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
      Object.keys(a).map((e => ({
        value: e,
        label: a[e]
      })));
      var o = n(13916),
        i = n(98096);
      const s = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, i.jsx)("hr", {})
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
        m = (s("Grid"), function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label").toLowerCase().split(" ").join("_")
        }("Grid"), r("style.--grid-num-columns-mobile", "Grid Number of Columns (Mobile)"), r("style.--grid-num-columns-desktop", "Grid Number of Columns (Desktop)"), s("Grid"), e => {
          let {
            parent: t = null
          } = e;
          return {
            name: "type",
            label: "Text",
            component: "group",
            fields: [(0, l.om)(), (0, l.KO)(), (0, l.A_)(), (0, l.bY)({
              filter: "grid"
            }), (0, l.sE)({
              filter: "grid"
            })],
            defaultItem: () => (0, l.Q)({
              style: {
                "--max-width-dynamic": "var(--max-width-static)"
              }
            }),
            itemProps: e => (0, l.Rv)(e, {
              label: e?.name ? `${e.name} [Text]` : "New [Text]"
            })
          }
        }),
        d = e => {
          let {
            game: t = null,
            label: n = "Image",
            description: a = ""
          } = e;
          return {
            name: "imageWithBadge",
            label: n,
            description: a,
            component: "group",
            fields: [(0, l.om)(), (0, l.CT)({
              game: t
            }), (0, l.ho)(), (0, l.bY)({
              filter: "image"
            }), (0, l.sE)({
              filter: "image"
            })],
            defaultItem: () => (0, l.Q)({
              image: (0, l.Q)(l.m9),
              badgeType: "rdr2" === t ? "badge3" : ""
            }),
            itemProps: e => (0, l.Rv)(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        };
      var c = n(86090);
      const u = e => {
        let {
          game: t = null
        } = e;
        return {
          name: "plainImage",
          label: "Image",
          component: "group",
          fields: [(0, l.om)(), (0, l.CT)({
            game: t,
            label: "Sources"
          }), (0, l.sE)({
            filter: "image"
          })],
          defaultItem: () => (0, l.Q)({
            alt: ""
          }),
          itemProps: e => (0, l.Rv)(e, {
            label: e?.name ? `${e.name} [Image]` : "New [Image]"
          })
        }
      };
      n(2942), n(95966), n(84343), n(67306);
      var p = n(89363);
      const b = e => {
          let {
            game: t = null,
            parent: n = null
          } = e;
          const a = [(0, l.om)()];
          return "gtao" !== t && "gtav" !== t || a.push({
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
          }), a.push((0, l.z9)({
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
          }, (0, l.sE)({
            parent: n
          })), {
            name: "unorderedList",
            label: "Unordered List",
            component: "group",
            fields: a,
            defaultItem: () => (0, l.Q)({
              content: p.A,
              columns: 1,
              mobileColumns: 1,
              starColor: "noImg",
              listItems: []
            }),
            itemProps: e => (0, l.Rv)(e, {
              label: e?.name ? `${e.name} [Unordered List]` : "New [Unordered List]"
            })
          }
        },
        g = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0";
          return (0, l.Q)({
            title: `Item ${e}`,
            image: (0, l.Q)(l.m9),
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
            fields: [(0, l.om)(), {
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
            }), (0, l.Xt)({
              game: t,
              name: "discountsGridList.content",
              label: "Grid Items",
              filter: "discounts"
            })],
            defaultItem: () => (0, l.Q)({
              type: "",
              columns: {
                mobile: 1,
                desktop: 1
              },
              discountsGridList: {
                content: [g(1), g(2), g(3), g(4)]
              }
            }),
            itemProps: e => (0, l.Rv)(e, {
              label: e?.name ? `${e.name} [Discount Items Grid]` : "New [Discount Items Grid]"
            })
          }
        },
        v = e => {
          let {
            game: t = null
          } = e;
          return {
            name: "limitedGridList",
            label: "Limited Time Items Grid",
            component: "group",
            fields: [(0, l.om)(), f({
              name: "limitedGridList.columns"
            }), (0, l.Xt)({
              game: t,
              name: "limitedGridList.content",
              label: "Grid Items",
              filter: "discounts"
            })],
            defaultItem: () => (0, l.Q)({
              columns: {
                mobile: 1,
                desktop: 1
              },
              limitedGridList: {
                content: [g(1), g(2), g(3), g(4)]
              }
            }),
            itemProps: e => (0, l.Rv)(e, {
              label: e?.name ? `${e.name} [Limited Time Items Grid]` : "New [Limited Time Items Grid]"
            })
          }
        },
        w = e => {
          let {
            game: t = null,
            label: n = "Limited Time Items Carousel"
          } = e;
          return {
            name: "limitedList",
            label: n,
            component: "group",
            fields: [(0, l.om)(), {
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
            }, (0, l.Xt)({
              game: t,
              name: "limitedList.content",
              label: "List Items",
              perPage: null,
              filter: "discounts"
            })],
            defaultItem: () => (0, l.Q)({
              name: "Large Carousel",
              noInfiniteScroll: !1,
              limitedList: {
                content: [g(1), g(2), g(3), g(4)]
              }
            }),
            itemProps: e => (0, l.Rv)(e, {
              label: e?.name ? `${e.name} [${n}]` : `New [${n}]`
            })
          }
        },
        y = e => {
          let {
            parent: t = null,
            game: n = null
          } = e;
          switch (n) {
            case "rdo":
            case "rdr2":
              return {
                name: "items", label: "Items", component: "blocks", templates: [w({
                  game: n
                }), v({
                  game: n
                }), h({
                  game: n
                })]
              };
            default:
              return {
                name: "items", label: "Items", component: "blocks", templates: [{
                  name: "title_and_description",
                  label: "Title & Description",
                  component: "group",
                  fields: [(0, l.z9)({
                    name: "title_and_description.title",
                    label: "Title",
                    component: "text"
                  }), (0, l.z9)({
                    name: "title_and_description.description",
                    label: "Description",
                    component: "html"
                  })],
                  defaultItem: () => (0, l.Q)({
                    title_and_description: {
                      title: "DISCOUNTS",
                      description: null
                    }
                  }),
                  itemProps: e => (0, l.Rv)(e, {
                    label: e?.[l.Qw]?.title_and_description?.title ? `${e[l.Qw].title_and_description.title} [Discounts Title & Description]` : "New [Discounts Title & Description]"
                  })
                }, w({
                  game: n,
                  label: "Discount Items Carousel"
                }), h({
                  game: n
                }), m({
                  parent: t
                }), b({
                  game: n
                })]
              }
          }
        },
        I = e => {
          let {
            game: t = null,
            filter: n = "discounts"
          } = e;
          return {
            label: "Discounts",
            fields: [(0, l.om)(), y({
              game: t
            }), (0, l.sE)({
              filter: n
            })],
            defaultItem: () => (0, l.Q)({
              renderTemplate: t
            }),
            itemProps: e => (0, l.Rv)(e, {
              label: e?.name ? `${e.name} [Discounts]` : "New [Discounts]"
            })
          }
        };
      var x = n(21207);
      const k = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          parent: "",
          post: null
        };
        return {
          label: "Donate",
          fields: [...(0, l.om)(e), ...(0, l.Y4)(e)],
          defaultItem: () => (0, l.Q)({
            content: ""
          }),
          itemProps: e => (0, l.Rv)(e, {
            label: (0, x._e)(e?.translationName ?? e?.content ?? "Donate")
          })
        }
      };
      var T = n(83166),
        P = n(17523);
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
        G = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const n = [{
            name: "images",
            label: "Image & Badge Configuration",
            description: "Displays in collapsed & expanded card. Warning, event will not display in the deck without an image.",
            component: "blocks",
            templates: [C()]
          }];
          return t || n.push((0, l.z9)({
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
            name: l.ZH,
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
              }, (0, T.HashSelector)({
                group: "hash.mobile",
                label: "Mobile Source",
                description: "(If responsive, only Mobile Source is needed)"
              }), (0, T.HashSelector)({
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
              }, (0, P.VideoField)(), {
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
          }, (0, l.pr)(), (0, l.f6)()), n
        },
        S = e => {
          let {
            templates: t
          } = e;
          return {
            label: "GTAO Event Section",
            fields: G(t),
            defaultItem: () => (0, l.Q)({
              textOverlayProps: (0, l.Q)({
                hasTextOverlay: !0,
                hasHoverAnimation: !0
              })
            }),
            itemProps: e => (0, l.Rv)(e, {
              label: `${e?.[l.Qw]?.title??"New"} [Event Section]`
            })
          }
        },
        L = e => {
          let {
            templates: t
          } = e;
          return {
            label: "GTAO Event Hero",
            fields: G(t, !0),
            defaultItem: () => (0, l.Q)({
              textOverlayProps: (0, l.Q)({
                hasTextOverlay: !0,
                hasHoverAnimation: !0
              }),
              isFeatured: !0
            }),
            itemProps: e => (0, l.Rv)(e, {
              label: `${e?.[l.Qw]?.title??"New"} [Event Hero]`
            })
          }
        },
        D = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            parent: "",
            post: null
          };
          return {
            label: "Gaming Rewards",
            fields: [(0, l.om)(e), (0, l.z9)({
              name: "headline",
              label: "Headline",
              component: "text"
            }), {
              name: "top",
              label: "Top Section",
              component: "group",
              description: "The section below the image and above the list items",
              fields: [(0, l.z9)({
                name: "text",
                label: "Top Text Section",
                component: "html"
              }), (0, l.sE)(e)]
            }, b(e), {
              name: "bottom",
              label: "Bottom Section",
              component: "group",
              description: "Text to be displayed below the list items",
              fields: [(0, l.z9)({
                name: "text",
                label: "Bottom Text Section",
                component: "html"
              }), (0, l.sE)(e)]
            }, u(e), {
              name: "rewards",
              label: "Rewards",
              description: "Gaming rewards options",
              component: "select",
              options: ["none", "gtaPlus", "primeGaming", "psPlus"]
            }, (0, l.sE)(e)],
            defaultItem: () => (0, l.Q)({
              name: "Prime Gaming",
              plainImage: {
                name: "Social Club x Prime Gaming",
                style: {
                  "--aspect-ratio": "16/9",
                  width: "100%",
                  height: "auto"
                }
              },
              top: (0, l.Q)(),
              bottom: (0, l.Q)({
                style: {
                  "--font-size-multiplier": .75
                }
              })
            }),
            itemProps: e => (0, l.Rv)(e, {
              label: e?.name ? `${e.name} [Gaming Rewards]` : "New [Gaming Rewards]"
            })
          }
        },
        R = () => ({
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
      var A = n(96618),
        _ = n(11438);
      const E = e => {
          let {
            parent: t = null
          } = e;
          return {
            label: "Lead Gif Asset",
            fields: [(0, l.om)(), {
              name: "src.gifHash",
              label: "Gif Sources",
              component: "group",
              fields: [(0, _.Gif)({
                parent: t,
                group: "mobile"
              }).fields, (0, _.Gif)({
                parent: t,
                group: "desktop"
              }).fields]
            }, (0, l.F2)({
              parent: t,
              filter: "image"
            })],
            defaultItem: () => (0, l.Q)({
              content: A.A,
              name: "Hero Gif"
            }),
            itemProps: e => (0, l.Rv)(e, {
              label: e.name
            })
          }
        },
        N = e => {
          let {
            game: t = null,
            parent: n = null,
            post: a = null
          } = e;
          return {
            label: "Lead Image Asset",
            fields: [(0, l.om)(), (0, l.CT)({
              game: t
            }), (0, l.F2)({
              parent: n,
              filter: "image"
            })],
            defaultItem: () => (0, l.Q)({
              content: A.A,
              name: "Hero Image",
              image: l.m9
            }),
            itemProps: e => (0, l.Rv)(e, {
              label: e.name
            })
          }
        };
      var M = n(44019);
      const O = e => {
          let {
            parent: t = null
          } = e;
          return {
            label: "Lead Video Asset",
            fields: [(0, l.om)(), {
              name: "video",
              label: "Video Source",
              component: "group",
              fields: (0, M.RockstarVideoPlayer)().fields
            }, (0, l.F2)({
              parent: t,
              filter: "image"
            })],
            defaultItem: () => (0, l.Q)({
              content: A.A,
              name: "Hero Video"
            }),
            itemProps: e => (0, l.Rv)(e, {
              label: e.name
            })
          }
        },
        Q = () => ({
          label: "Marquee",
          fields: [(0, l.sE)({
            filter: "gridItem"
          }), {
            label: "Text",
            name: "text",
            component: "text"
          }],
          defaultItem: () => (0, l.Q)(),
          itemProps: e => (0, l.Rv)(e)
        }),
        H = e => {
          let {
            defaults: t = {},
            templates: n = {},
            itemsDescription: a = ""
          } = e;
          const o = [{
            label: "Items",
            description: a,
            name: l.ZH,
            component: "blocks",
            templates: n
          }, (0, l.sE)({
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
            fields: [...o, (0, l.Zn)({
              fields: o
            })],
            defaultItem: () => (0, l.Q)({
              style: t?.style ?? {}
            }),
            itemProps: e => (0, l.Rv)(e)
          }
        },
        $ = function() {
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
            defaultItem: () => (0, l.Q)({
              percent: 0,
              bgColor: "",
              primaryColor: ""
            }),
            itemProps: e => (0, l.Rv)(e, {
              label: `${e?.pct??"PCT"} % Bar`
            })
          }
        }
    },
    21207: (e, t, n) => {
      n.d(t, {
        OD: () => i,
        lv: () => s,
        pP: () => d,
        wC: () => a,
        PE: () => v,
        rB: () => m,
        yh: () => h,
        Ap: () => u,
        Xs: () => w,
        kx: () => y,
        rJ: () => x,
        pT: () => b,
        lV: () => I,
        PA: () => l,
        My: () => p,
        _e: () => g
      }), n(16188);
      const l = e => {
          let {
            element: t
          } = e;
          const n = setInterval((() => t.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            })), 100),
            l = e => {
              e.target === document && (clearInterval(n), document.removeEventListener("scroll", l))
            };
          document.addEventListener("scroll", l)
        },
        a = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = new URLSearchParams(document.location.search),
            n = document.getElementById(t.get(e) || e);
          n && (l({
            element: n
          }), o(n))
        },
        o = e => {
          const t = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (t.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const n = e?.querySelectorAll(t.join(", "));
            if (n?.length) {
              const e = [...n].find((e => !e?.hasAttribute("disabled")));
              e?.focus()
            }
          }
        };
      class i {
        constructor(e, t, n) {
          let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = t, this.id = n, this.alias = l
        }
      }
      const s = Object.freeze({
          pc: new i("pc", "PC", 8),
          ps: new i("ps", "PlayStation", 3),
          ps3: new i("ps3", "PlayStation 3", 2),
          ps4: new i("ps4", "PlayStation 4", 11),
          ps5: new i("ps5", "PlayStation 5", 20),
          xbox: new i("xbox", "Xbox", 4),
          xbox360: new i("xbox360", "Xbox 360", 1),
          xboxone: new i("xboxone", "Xbox One", 12),
          xboxsx: new i("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new i("switch", "Nintendo Switch™", 18),
          nintendoswitch: new i("nintendoswitch", "Nintendo Switch™", 18),
          applestore: new i("applestore", "App Store", 102),
          googleplay: new i("googleplay", "Google Play", 1023),
          appStore: new i("app_store", "App Store", 102),
          googlePlay: new i("ggle_play", "Google Play", 1023)
        }),
        r = Object.freeze(Object.values(s));

      function m(e) {
        if (!e) return;
        if (e instanceof i) return e;
        const t = e.toString().toLowerCase();
        return r.find((e => t === e.name || t === e.id.toString() || t === e.friendlyName.toLowerCase() || t === e.alias?.toLowerCase()))
      }
      const d = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return [...t].filter(Boolean).join(" ")
      };
      var c = n(74511);
      const u = e => {
          const t = document.cookie.split("; "),
            n = `${e}=`,
            l = t.find((e => e.startsWith(n))),
            a = l?.substring(n.length, l.length);
          return a
        },
        p = (e, t) => {
          e && void 0 !== t && (0, c.canStoreCookie)(e) && u(e) !== t && (document.cookie = `${e}=${t}; domain=${(()=>{const e=window.location.hostname.split(".");return e.slice(e.length-2).join(".")})()}; path=/;`)
        };
      n(98096);
      const b = e => e.keys().forEach(e),
        g = e => e.replace(/(<([^>]+)>)/gi, ""),
        f = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        h = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return f.filter((t => t.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        v = e => {
          e.preventDefault();
          const t = e.currentTarget.href,
            n = (e => {
              const t = new URL(e).pathname.split("/"),
                n = t[t.length - 1];
              return decodeURIComponent(n)
            })(t);
          fetch(t, {
            method: "GET",
            headers: {}
          }).then((e => e.arrayBuffer())).then((e => {
            const t = window.URL.createObjectURL(new Blob([e])),
              l = document.createElement("a");
            l.href = t, l.setAttribute("download", n), document.body.appendChild(l), l.click(), document.body.removeChild(l)
          })).catch((e => {
            console.log(e)
          }))
        },
        w = () => [s.xbox360.name, s.xboxone.name, s.ps3.name, s.ps4.name, s.pc.name],
        y = () => [s.xboxsx.name, s.ps5.name],
        I = e => y().includes(e),
        x = e => {
          const t = new Map([
            ["en-us", "English (United States)"],
            ["de-de", "Deutsch (Deutschland)"],
            ["fr-fr", "Français (France)"],
            ["fr-ca", "Français (Canada)"],
            ["it-it", "Italiano (Italia)"],
            ["ja-jp", "日本語"],
            ["ru-ru", "Pусский"],
            ["es-es", "Español (España)"],
            ["es-mx", "Español (México)"],
            ["pt-br", "Português (Brasil)"],
            ["ko-kr", "한국어"],
            ["zh-hans", "中文（简体）"],
            ["zh-hant", "中文（繁體）"],
            ["pl-pl", "Polski"]
          ]);
          return t.has(e) ? t.get(e) : e
        }
    }
  }
]);