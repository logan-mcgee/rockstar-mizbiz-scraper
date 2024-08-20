! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "d08152c9-eea2-413d-8583-85969ed2419a", e._sentryDebugIdIdentifier = "sentry-dbid-d08152c9-eea2-413d-8583-85969ed2419a")
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
  [5381], {
    60207: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var i = t(55140),
        l = t(73379);
      const n = function() {
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
            label: (0, l.stripHTML)(`${e?.name??e?.[i.TINA_MEMOQ_PREFIX]?.content??"New"} [List Item]`)
          })
        }
      }
    },
    26043: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var i = t(8999),
        l = t(37297),
        n = t(64064),
        s = t.n(n),
        o = t(31879),
        r = t.n(o);
      const d = {
        hiddenMobile: "rockstargames-modules-core-newswire-articlefcd9b756ec79b800e6e2a874d4952267",
        hiddenLarge: "rockstargames-modules-core-newswire-articlef1e7a1b01f98ac70ad8163ffee4ba650",
        "hidden-sm": "rockstargames-modules-core-newswire-articlef173a012951bcf6271166618a9194d95",
        "show-sm": "rockstargames-modules-core-newswire-articlec865b3fc9496eca4d2b60e4f39cb26b6",
        "hidden-md": "rockstargames-modules-core-newswire-articled373636a89b4a126bd8811fbdf6a8b5a",
        "show-md": "rockstargames-modules-core-newswire-articleb98b287d7b9a9b97f2d424a9ec06eac4",
        "hidden-lg": "rockstargames-modules-core-newswire-articleb4a5056ee672b146ba56a053c0996131",
        "show-lg": "rockstargames-modules-core-newswire-articlea053d2c98542e75ab7996394068ba96e",
        "hidden-xl": "rockstargames-modules-core-newswire-articlea67450e1f1e23eb187faf5bdd7818576",
        "show-xl": "rockstargames-modules-core-newswire-articlefdadc3b48dd33c8d314971f0c4ec768d",
        "hidden-xxl": "rockstargames-modules-core-newswire-articlea6d28df6b16a9ebd36981c24bf0385e6",
        "show-xxl": "rockstargames-modules-core-newswire-articlef16bd7eff092259aa29f77bb430c6cea",
        "full-width": "rockstargames-modules-core-newswire-articleb2703b37afddc64231bad0dbc6dc508e",
        "reverse-mobile": "rockstargames-modules-core-newswire-articlefb8f550bee051c39ae2446a313c6953d",
        "center-children": "rockstargames-modules-core-newswire-articleccd5e5d3fb737dc625dc9f865be73e58",
        "std-padding-mobile-desktop-none": "rockstargames-modules-core-newswire-articlea14d4623ce83550fabc2c0054c12e06c",
        "std-padding-desktop-mobile-none": "rockstargames-modules-core-newswire-articleeef40f8887a7a6f619111caa3133a7e0",
        "horizontal-line": "rockstargames-modules-core-newswire-articleb3c6fa2aa88993c8f208478df68b0da1",
        gold: "rockstargames-modules-core-newswire-articlef3c24bf757a12b65011514e75e247b8c",
        heroImage: "rockstargames-modules-core-newswire-articledf0381460fec48db32dff93b7840826b",
        responsiveImage: "rockstargames-modules-core-newswire-articleab6a895408f1c4da07244f72a48d14d9",
        responsiveVideo: "rockstargames-modules-core-newswire-articlea3faa88c835593aed90c0387fe1655bc"
      };
      var m = t(46632);
      const c = e => {
        let {
          alt: a = "",
          className: t = "",
          src: n = {},
          image: o = null,
          video: c = null
        } = e;
        return (0, m.jsxs)("div", {
          className: ((n?.videoPlayerId || n?.gifHash) && d.heroImage, t),
          children: [n?.mobile && (0, m.jsx)(l.A, {
            src: n.mobile,
            ariaLabel: a,
            className: [n?.desktop && d.hiddenLarge, d.responsiveImage].join(" "),
            noRatioPlease: !0
          }), n?.desktop && (0, m.jsx)(l.A, {
            src: n.desktop,
            ariaLabel: a,
            className: [n?.mobile && d.hiddenMobile, d.responsiveImage].join(" ")
          }), n?.videoPlayerId && (0, m.jsx)("div", {
            className: [d.responsiveVideo, d.trailer].join(" "),
            children: (0, m.jsx)(r(), {
              context: "site",
              autoplay: !1,
              id: n.videoPlayerId,
              hero: !0
            })
          }), n?.gifHash && (0, m.jsx)("div", {
            className: d.responsiveVideo,
            children: (0, m.jsx)(s(), {
              hash: [{
                desktop: n?.gifHash?.desktop
              }, {
                mobile: n?.gifHash?.mobile
              }]
            })
          }), o && (0, m.jsx)(i.A, {
            image: o
          }), c && (0, m.jsx)("div", {
            className: [d.responsiveVideo, d.trailer].join(" "),
            children: (0, m.jsx)(r(), {
              context: "site",
              autoplay: c?.autoplay ?? !1,
              id: c.id,
              hero: !0
            })
          })]
        })
      }
    },
    65381: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Discounts: () => w,
        Donate: () => I,
        EventInfo: () => F,
        FeaturedEventInfo: () => P,
        GamingRewards: () => T,
        Gen9List: () => L,
        LeadGifAsset: () => M,
        LeadImageAsset: () => j,
        LeadVideoAsset: () => G,
        Marquee: () => V,
        NewswireTitle: () => $,
        PctBar: () => E
      });
      var i = t(55140),
        l = t(28089),
        n = t(46632);
      const s = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, n.jsx)("hr", {})
          }
        },
        o = function() {
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
        r = (s("Grid"), function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label").toLowerCase().split(" ").join("_")
        }("Grid"), o("style.--grid-num-columns-mobile", "Grid Number of Columns (Mobile)"), o("style.--grid-num-columns-desktop", "Grid Number of Columns (Desktop)"), s("Grid"), e => {
          let {
            parent: a = null
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
        }),
        d = e => {
          let {
            game: a = null,
            label: t = "Image",
            description: l = ""
          } = e;
          return {
            name: "imageWithBadge",
            label: t,
            description: l,
            component: "group",
            fields: [(0, i.NameField)(), (0, i.ImageField)({
              game: a
            }), (0, i.LeadAssetToggle)(), (0, i.ClassNamesField)({
              filter: "image"
            }), (0, i.StyleField)({
              filter: "image"
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              image: (0, i.defaultItemUnique)(i._defaultImageValues),
              badgeType: "rdr2" === a ? "badge3" : ""
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        };
      var m = t(60207);
      const c = e => {
        let {
          game: a = null
        } = e;
        return {
          name: "plainImage",
          label: "Image",
          component: "group",
          fields: [(0, i.NameField)(), (0, i.ImageField)({
            game: a,
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
      t(58407), t(33809), t(50048), t(22941);
      var u = t(63672);
      const b = e => {
          let {
            game: a = null,
            parent: t = null
          } = e;
          const l = [(0, i.NameField)()];
          return "gtao" !== a && "gtav" !== a || l.push({
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
          }), l.push((0, i.translatedField)({
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
            templates: [(0, m.A)({})]
          }, (0, i.StyleField)({
            parent: t
          })), {
            name: "unorderedList",
            label: "Unordered List",
            component: "group",
            fields: l,
            defaultItem: () => (0, i.defaultItemUnique)({
              content: u.A,
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
        p = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0";
          return (0, i.defaultItemUnique)({
            title: `Item ${e}`,
            image: (0, i.defaultItemUnique)(i._defaultImageValues),
            _template: a
          })
        },
        f = e => {
          let {
            name: a = "columns"
          } = e;
          return {
            name: a,
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
              [a]: {
                mobile: 1,
                desktop: 1
              }
            }
          }
        },
        g = e => {
          let {
            game: a = null
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
            }, f({
              name: "discountsGridList.columns"
            }), (0, i.ItemsField)({
              game: a,
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
                content: [p(1), p(2), p(3), p(4)]
              }
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Discount Items Grid]` : "New [Discount Items Grid]"
            })
          }
        },
        k = e => {
          let {
            game: a = null
          } = e;
          return {
            name: "limitedGridList",
            label: "Limited Time Items Grid",
            component: "group",
            fields: [(0, i.NameField)(), f({
              name: "limitedGridList.columns"
            }), (0, i.ItemsField)({
              game: a,
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
                content: [p(1), p(2), p(3), p(4)]
              }
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Limited Time Items Grid]` : "New [Limited Time Items Grid]"
            })
          }
        },
        v = e => {
          let {
            game: a = null,
            label: t = "Limited Time Items Carousel"
          } = e;
          return {
            name: "limitedList",
            label: t,
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
              game: a,
              name: "limitedList.content",
              label: "List Items",
              perPage: null,
              filter: "discounts"
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              name: "Large Carousel",
              noInfiniteScroll: !1,
              limitedList: {
                content: [p(1), p(2), p(3), p(4)]
              }
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [${t}]` : `New [${t}]`
            })
          }
        },
        h = e => {
          let {
            parent: a = null,
            game: t = null
          } = e;
          switch (t) {
            case "rdo":
            case "rdr2":
              return {
                name: "items", label: "Items", component: "blocks", templates: [v({
                  game: t
                }), k({
                  game: t
                }), g({
                  game: t
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
                }, v({
                  game: t,
                  label: "Discount Items Carousel"
                }), g({
                  game: t
                }), r({
                  parent: a
                }), b({
                  game: t
                })]
              }
          }
        },
        w = e => {
          let {
            game: a = null,
            filter: t = "discounts"
          } = e;
          return {
            label: "Discounts",
            fields: [(0, i.NameField)(), h({
              game: a
            }), (0, i.StyleField)({
              filter: t
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              renderTemplate: a
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Discounts]` : "New [Discounts]"
            })
          }
        };
      var y = t(26398);
      const I = function() {
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
            label: (0, y.stripHTML)(e?.translationName ?? e?.content ?? "Donate")
          })
        }
      };
      var N = t(83166),
        S = t(17523);
      const x = () => {
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
        _ = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          const t = [{
            name: "images",
            label: "Image & Badge Configuration",
            description: "Displays in collapsed & expanded card. Warning, event will not display in the deck without an image.",
            component: "blocks",
            templates: [x()]
          }];
          return a || t.push((0, i.translatedField)({
            name: "title",
            label: "Title",
            description: "This gets displayed in the text overlay (when collapsed) as well as at the top of the main content (when expanded). On Newswire it will display in between the image and text content.",
            component: "text"
          }), {
            name: "hideNewswireTitle",
            label: "Hide title on Newswire?",
            description: "Hides the title in between the Image and Text on Newswire.",
            component: "toggle"
          }), t.push({
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
              }, (0, N.HashSelector)({
                group: "hash.mobile",
                label: "Mobile Source",
                description: "(If responsive, only Mobile Source is needed)"
              }), (0, N.HashSelector)({
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
              }, (0, S.VideoField)(), {
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
          }, (0, i.ImpressionTrackingField)(), (0, i.GtmField)()), t
        },
        F = e => {
          let {
            templates: a
          } = e;
          return {
            label: "GTAO Event Section",
            fields: _(a),
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
            templates: a
          } = e;
          return {
            label: "GTAO Event Hero",
            fields: _(a, !0),
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
        T = function() {
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
            }, b(e), {
              name: "bottom",
              label: "Bottom Section",
              component: "group",
              description: "Text to be displayed below the list items",
              fields: [(0, i.translatedField)({
                name: "text",
                label: "Bottom Text Section",
                component: "html"
              }), (0, i.StyleField)(e)]
            }, c(e), {
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
              uploadDir: l.uploadDir
            }, {
              name: "layeredImg",
              label: "Layered Image",
              component: "image",
              uploadDir: l.uploadDir
            }]
          }, {
            name: "perPage",
            label: "Slides Per Page (Desktop Only)",
            description: "How many slides should be shown at once on desktop? (Overrides the Deck/Card settings)",
            component: "number"
          }]
        });
      var D = t(26043),
        A = t(11438);
      const M = e => {
          let {
            parent: a = null
          } = e;
          return {
            label: "Lead Gif Asset",
            fields: [(0, i.NameField)(), {
              name: "src.gifHash",
              label: "Gif Sources",
              component: "group",
              fields: [(0, A.Gif)({
                parent: a,
                group: "mobile"
              }).fields, (0, A.Gif)({
                parent: a,
                group: "desktop"
              }).fields]
            }, (0, i.AttributesFields)({
              parent: a,
              filter: "image"
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              content: D.A,
              name: "Hero Gif"
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e.name
            })
          }
        },
        j = e => {
          let {
            game: a = null,
            parent: t = null,
            post: l = null
          } = e;
          return {
            label: "Lead Image Asset",
            fields: [(0, i.NameField)(), (0, i.ImageField)({
              game: a
            }), (0, i.AttributesFields)({
              parent: t,
              filter: "image"
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              content: D.A,
              name: "Hero Image",
              image: i._defaultImageValues
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e.name
            })
          }
        };
      var C = t(44019);
      const G = e => {
          let {
            parent: a = null
          } = e;
          return {
            label: "Lead Video Asset",
            fields: [(0, i.NameField)(), {
              name: "video",
              label: "Video Source",
              component: "group",
              fields: (0, C.RockstarVideoPlayer)().fields
            }, (0, i.AttributesFields)({
              parent: a,
              filter: "image"
            })],
            defaultItem: () => (0, i.defaultItemUnique)({
              content: D.A,
              name: "Hero Video"
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e, {
              label: e.name
            })
          }
        },
        V = () => ({
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
        $ = e => {
          let {
            defaults: a = {},
            templates: t = {},
            itemsDescription: l = ""
          } = e;
          const n = [{
            label: "Items",
            description: l,
            name: i.TINA_PARSER_KEY,
            component: "blocks",
            templates: t
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
              style: a?.style ?? {}
            }),
            itemProps: e => (0, i.itemPropsWithKey)(e)
          }
        },
        E = function() {
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
    62550: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => s
      });
      var i = t(71403),
        l = t(64544),
        n = t(46632);
      const s = e => {
        let {
          children: a,
          ...t
        } = e;
        const [s, o] = (0, i.useState)(!1);
        return (0, n.jsx)(l.zb, {
          ...t,
          onReady: () => {
            document.fonts.ready.then((() => {
              o(!0)
            }))
          },
          children: a
        })
      }
    },
    52328: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var i = t(2024),
        l = t(62550);
      const n = {
        badge: "rockstargames-modules-core-newswire-articlee279e2cebfa338f34b03fd732416e836",
        badgeSizeUpdate: "rockstargames-modules-core-newswire-articled7362a3e27ccaad9d2aadd2f31691340",
        badge2: "rockstargames-modules-core-newswire-articled697f4a5f7c876d5e540a96da1e0ca3a",
        badge3: "rockstargames-modules-core-newswire-articlee1bba3cd4554abbb48a030af24bbada5"
      };
      var s = t(46632);
      const o = e => {
          let {
            wrapper: a,
            children: t,
            role: i,
            splitter: l
          } = e;
          return l || i ? a(t) : t
        },
        r = e => {
          let {
            badge: a,
            badgeType: r,
            role: d,
            splitter: m
          } = e;
          const c = [];
          m ? a.split(m).map(((e, a) => c.push(e))) : c.push(a);
          let u = 100;
          return 2 == c.length && c[1].length < 4 && "off" !== c[1].toLowerCase() && 45, (0, s.jsxs)(o, {
            splitter: m,
            role: d,
            wrapper: e => (0, s.jsx)("div", {
              className: `${n.badge} ${r?n[r]:""} `,
              children: e
            }),
            children: [(0, s.jsx)(s.Fragment, {
              children: d && (0, s.jsx)(i.A, {
                image: {
                  alt: d,
                  desktop: t(45628)(`./${d}.png`)
                }
              })
            }), (0, s.jsx)(l.A, {
              className: `${m||d?"":n.badge} ${r?n[r]:""}`,
              min: 8,
              max: 1e3,
              mode: m || d ? "single" : "multi",
              children: c[0]
            }), (0, s.jsx)(s.Fragment, {
              children: c.shift() && m && c.length >= 1 && (0, s.jsx)(l.A, {
                min: 8,
                max: 1e3,
                mode: "single",
                forceSingleModeWidth: !0,
                children: c.join(" ")
              })
            })]
          }, "badge-wrapper")
        }
    },
    8999: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var i = t(74401),
        l = t(42756),
        n = t(52328),
        s = t(2024);
      var o = t(46632);
      const r = e => {
          let {
            hero: a,
            children: t
          } = e;
          return a ? (0, o.jsx)("div", {
            className: "rockstargames-modules-core-newswire-articleefc561ad30f5dfe75c79d939737650dc",
            children: t
          }) : t
        },
        d = e => {
          let {
            badge: a = null,
            badgeType: t,
            discountTxt: d,
            splitter: m,
            image: c,
            style: u,
            className: b = "",
            attributes: p = {},
            role: f,
            hero: g = !1
          } = e;
          return (0, o.jsx)(r, {
            hero: g,
            children: (0, o.jsx)("figure", {
              children: (0, o.jsxs)("div", {
                className: (0, i.classList)("rockstargames-modules-core-newswire-articlecab262c98c7f5bb3e982d9b075b3c2a8", g ? "rockstargames-modules-core-newswire-articlecefd6d8859aeec1057caed28caa160c3" : "", p?.hiddenMobile ? "hiddenMobile" : "", p?.hiddenLarge ? "hiddenLarge" : "", p?.className, b),
                style: (0, l.safeStyles)({
                  ...u,
                  ...p?.style
                }),
                ...p,
                children: [(0, o.jsx)(s.A, {
                  image: c,
                  className: b
                }), (c?.badge || c?.discountTxt || a || d) && (0, o.jsx)(n.A, {
                  badge: c?.discountTxt ?? c?.badge ?? a ?? d,
                  badgeType: t,
                  splitter: c?.splitter ?? m,
                  role: c?.role ?? f
                }), c?.caption && (0, o.jsx)("figcaption", {
                  dangerouslySetInnerHTML: {
                    __html: c.caption
                  }
                })]
              })
            })
          })
        }
    },
    22941: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var i = t(71403),
        l = t(61631),
        n = t.n(l),
        s = t(74401),
        o = t(42756);
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
      var d = t(46632);
      const {
        sanitize: m
      } = n(), c = e => {
        let {
          list: a,
          string: t,
          starColor: l,
          style: n,
          className: c,
          game: u,
          noImg: b,
          columns: p,
          mobileColumns: f
        } = e;
        const [g, k] = (0, i.useState)(null);
        return (0, i.useEffect)((() => {
          k(a)
        }), [a]), t || a ? p && g ? (0, d.jsx)("div", {
          className: r.grid,
          style: {
            "--ordered-list-grid-column": p,
            "--ordered-list-grid-column-mobile": f ?? p
          },
          children: (0, d.jsx)("ol", {
            style: (0, o.safeStyles)(n),
            className: (0, s.classList)(r.itemList, r.noImg, r[l], r[u]),
            children: g.map((e => (0, d.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e.content)
              }
            }, e.content)))
          })
        }) : (0, d.jsx)("ol", {
          style: (0, o.safeStyles)(n),
          className: (0, s.classList)(r.itemList, r.custom, b ? r.noImg : "", l ? r[l] : "", u ? r[u] : "", c ?? ""),
          children: a.map((e => (0, d.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: m(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    37297: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => s
      });
      var i = t(42756);
      const l = {
        responsiveImage: "rockstargames-modules-core-newswire-articlee31b43dce2e720669fb90bf539d22197"
      };
      var n = t(46632);
      const s = e => {
        let {
          src: a,
          className: t = "",
          animate: s,
          ariaLabel: o,
          style: r = {}
        } = e;
        const [d, m] = (0, i.usePreloadImg)(a);
        return d ? (r.backgroundImage = `url(${a})`, (0, n.jsx)("div", {
          role: "img",
          "aria-label": o ?? "R* Games",
          className: [l.responsiveImage, s ? l.animateBox : "", t].join(" "),
          style: {
            ...r,
            "--aspect-ratio": m.width / m.height
          }
        })) : null
      }
    },
    63672: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var i = t(71403),
        l = t(61631),
        n = t.n(l),
        s = t(74401),
        o = t(42756);
      const r = {
        pillBtn: "rockstargames-modules-core-newswire-articlea89792e50dfe5470a67f42b9e143c824",
        selected: "rockstargames-modules-core-newswire-articlebcce8ac50552b225f30d185d876a3e14",
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
      var d = t(46632);
      const {
        sanitize: m
      } = n(), c = e => {
        let {
          list: a,
          string: t,
          starColor: l,
          style: n,
          className: c,
          game: u,
          noImg: b,
          columns: p,
          mobileColumns: f
        } = e;
        const [g, k] = (0, i.useState)(null), v = t ? t.split("_#_") : a;
        return (0, i.useEffect)((() => {
          k(a)
        }), [a]), t || a ? p && g ? (0, d.jsx)("div", {
          className: r.grid,
          style: {
            "--unordered-list-grid-column": p,
            "--unordered-list-grid-column-mobile": f ?? p
          },
          children: (0, d.jsx)("ul", {
            style: (0, o.safeStyles)(n),
            className: (0, s.classList)(r.itemList, r.noImg, r[l], r[u]),
            children: g.map(((e, a) => (0, d.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e.content)
              }
            }, a)))
          })
        }) : (0, d.jsx)("ul", {
          style: (0, o.safeStyles)(n),
          className: (0, s.classList)(r.itemList, r.custom, b ? r.noImg : "", l ? r[l] : "", u ? r[u] : "", c ?? ""),
          children: v.map(((e, a) => (0, d.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: m(e?.content ?? e)
            }
          }, a)))
        }) : null
      }
    },
    2024: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var i = t(28089),
        l = t(42756);
      const n = "rockstargames-modules-core-newswire-articleeb64520e04e486931cd65dc5b3fa61e8";
      var s = t(46632);
      const o = e => {
          let {
            alt: a,
            className: i,
            src: n,
            style: o
          } = e;
          const [r, d] = (0, l.usePreloadImg)(n);
          let m = n;
          !1 === r && ("rockstargames-modules-core-newswire-articleee609f31f3685766122c2c6fc0ef0710" === i && (m = t(14572)), m = t(8820));
          const {
            width: c,
            height: u
          } = d, b = {
            "--aspect-ratio": Number.isNaN(c / u) ? "" : c / u,
            ...o
          };
          return (0, s.jsx)("img", {
            src: m,
            className: i ?? "",
            alt: a,
            style: b
          })
        },
        r = e => {
          let {
            className: a,
            style: r = {},
            image: d = {},
            imageStyle: m = {}
          } = e, {
            alt: c,
            src: u
          } = (0, i.useImageParser)(d);
          const {
            isMobile: b
          } = (0, l.useWindowResize)();
          return u.desktop || u.mobile || (c = "", u = {
            mobile: t(14572),
            desktop: t(8820)
          }), (0, s.jsx)("div", {
            className: d.frame ? `${d.frame} ${n}` : n,
            style: r,
            children: (0, s.jsx)(o, {
              style: {
                ...m,
                ...d?.style
              },
              src: b ? u.mobile || u.desktop : u?.desktop || u?.mobile,
              alt: c,
              className: a
            })
          })
        }
    },
    50048: e => {
      var a = {
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var i = e.type;
          "NamedType" === i.kind && a.add(i.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          t(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          t(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          t(e, a)
        }))
      }
      a.loc.source = {
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var i = {};

      function l(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var i = e.definitions[t];
          if (i.name && i.name.value == a) return i
        }
      }

      function n(e, a) {
        var t = {
          kind: e.kind,
          definitions: [l(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var n = i[a] || new Set,
          s = new Set,
          o = new Set;
        for (n.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var r = o;
          o = new Set, r.forEach((function(e) {
            s.has(e) || (s.add(e), (i[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return s.forEach((function(a) {
          var i = l(e, a);
          i && t.definitions.push(i)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), i[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = n(a, "TinaModulesList"), e.exports.TinaModulesInfo = n(a, "TinaModulesInfo")
    },
    45628: (e, a, t) => {
      var i = {
        "./bounty.png": 89177,
        "./collector.png": 3787,
        "./moonshiner.png": 14022,
        "./naturalist.png": 34629,
        "./trader.png": 22864
      };

      function l(e) {
        var a = n(e);
        return t(a)
      }

      function n(e) {
        if (!t.o(i, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return i[e]
      }
      l.keys = function() {
        return Object.keys(i)
      }, l.resolve = n, e.exports = l, l.id = 45628
    },
    89177: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/48754c6fc2f75b0554098423f2bda6d1.png"
    },
    3787: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e111377ba943e9eefaa9204f77c77093.png"
    },
    14022: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4639a2711d1bca49a87c302784050ee3.png"
    },
    34629: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/898794daaec68a69ef5ec4afaefe1948.png"
    },
    22864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e77bb0f25a6ea37e8d831b12df9fa3c.png"
    },
    8820: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8787df71c723ebe44f82fd13ed216e09.jpg"
    },
    14572: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/61ae357c3bfbabb5d765e9a7c794d08f.png"
    }
  }
]);