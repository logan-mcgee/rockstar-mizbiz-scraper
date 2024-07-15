! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "27477d0a-d208-41d6-92d3-283332f91ab4", e._sentryDebugIdIdentifier = "sentry-dbid-27477d0a-d208-41d6-92d3-283332f91ab4")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [296, 5240], {
    99576: (e, a, l) => {
      "use strict";
      var t = l(51664),
        n = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        s = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        r = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, a, l) {
        var t, i = {},
          d = null,
          m = null;
        for (t in void 0 !== l && (d = "" + l), void 0 !== a.key && (d = "" + a.key), void 0 !== a.ref && (m = a.ref), a) o.call(a, t) && !r.hasOwnProperty(t) && (i[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === i[t] && (i[t] = a[t]);
        return {
          $$typeof: n,
          type: e,
          key: d,
          ref: m,
          props: i,
          _owner: s.current
        }
      }
      a.Fragment = i, a.jsx = d, a.jsxs = d
    },
    95240: (e, a, l) => {
      "use strict";
      e.exports = l(99576)
    },
    296: (e, a, l) => {
      "use strict";
      l.r(a), l.d(a, {
        BrandMessage: () => o,
        BrandsField: () => i,
        BuyNow: () => d,
        ClaimCountdown: () => m,
        Disclaimer: () => g,
        DiscoverCallout: () => p,
        ElevatorPitch: () => F,
        FAQ: () => b,
        Guide: () => v,
        GuideGroup: () => y,
        GuideIntro: () => k,
        GuideSection: () => I,
        Hero: () => x,
        HeroVideo: () => N.default,
        ImageTextGroupGroup: () => z,
        LinkoutSection: () => J,
        StickyColumn: () => C,
        Summary: () => R,
        SummaryCard: () => U,
        Tile: () => Q,
        TinaWrapper: () => ae,
        TitleImage: () => _,
        ValueProp: () => X,
        brandField: () => n
      });
      var t = l(89468);
      const n = {
          component: "select",
          name: "brand",
          label: "Brand",
          options: [{
            value: null,
            label: "-- Select Brand --"
          }, {
            value: "gtao",
            label: "Grand Theft Auto Online"
          }, {
            value: "gtav",
            label: "Grand Theft Auto V"
          }, {
            value: "gtaplus",
            label: "GTA+"
          }]
        },
        i = () => ({
          name: "brands",
          label: "Brands",
          component: "group-list",
          description: "Show brand icons in a row",
          fields: [n],
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `Brand [${e?.brand??null}]`
          })
        }),
        o = () => ({
          label: "Brand Message",
          description: "Brand logo, then some text.",
          component: "group",
          fields: [n, (0, t.translatedField)({
            name: "headline_left",
            label: "Headline left",
            component: "text"
          }), (0, t.translatedField)({
            name: "headline_right",
            label: "Headline right",
            component: "text"
          }), {
            name: "info",
            label: "Info",
            component: "textarea"
          }],
          defaultItem: () => (0, t.defaultItemUnique)()
        });
      var s = l(45652);
      const r = e => {
          let {
            label: a,
            name: l
          } = e;
          return {
            component: "group",
            label: a,
            name: l,
            fields: [{
              name: "mobile",
              label: "Mobile",
              component: "image",
              previewSrc: s.previewSrc,
              uploadDir: s.uploadDir
            }, {
              name: "desktop",
              label: "Desktop",
              component: "image",
              previewSrc: s.previewSrc,
              uploadDir: s.uploadDir
            }]
          }
        },
        d = () => ({
          label: "Buy Now component",
          component: "group",
          fields: [(0, t.translatedField)({
            name: "topText",
            label: "Top Text",
            component: "text"
          }), (0, t.translatedField)({
            name: "bottomText",
            label: "Bottom Text",
            component: "text"
          }), {
            component: "group-list",
            name: "cards",
            label: "Cards",
            fields: [(0, t.translatedField)({
              name: "title",
              label: "Title",
              component: "text"
            }), (0, t.translatedField)({
              name: "description",
              label: "Description",
              component: "text"
            }), (0, t.translatedField)({
              name: "addedInfo",
              label: "Additional Information",
              component: "text"
            }), (0, t.translatedField)({
              name: "buynowbtn",
              label: "Buy Now",
              component: "text"
            }), {
              component: "group-list",
              name: "links",
              label: "Links",
              fields: [(0, t.translatedField)({
                name: "href",
                label: "href",
                component: "text"
              }), {
                name: "platform",
                label: "Choose Platform",
                component: "select",
                options: [{
                  value: null,
                  label: "-- Select an Icon --"
                }, {
                  value: "ps5",
                  label: "PlayStation 5"
                }, {
                  value: "ps4",
                  label: "PlayStation 4"
                }, {
                  value: "xboxone",
                  label: "Xbox One"
                }, {
                  value: "xboxseriesxs",
                  label: "Xbox Series X|S"
                }, {
                  value: "pc",
                  label: "PC"
                }]
              }, (0, t.translatedField)({
                name: "altText",
                label: "Alt Text (Required, needed for Alt Text on image platform buttons)",
                component: "text"
              })],
              itemProps: e => (0, t.itemPropsWithKey)(e, {
                label: `Link for [${e?.platform??""}]`,
                href: e?.href
              }),
              defaultItem: () => (0, t.defaultItemUnique)({
                href: (0, t.defaultItemUnique)(),
                links: {
                  altText: ""
                }
              })
            }, {
              name: "images",
              component: "group",
              label: "Images for this card.",
              fields: [r({
                name: "background",
                label: "Background"
              }), r({
                name: "foreground",
                label: "Foreground"
              })]
            }],
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `Card [${e?.[t.TINA_MEMOQ_PREFIX]?.title??""}]`
            }),
            defaultItem: () => (0, t.defaultItemUnique)()
          }],
          defaultItem: () => (0, t.defaultItemUnique)()
        }),
        m = () => ({
          label: "Claim Countdown",
          description: "Claim rewards until...",
          component: "group",
          fields: [(0, t.translatedField)({
            name: "left",
            label: "Left",
            component: "text"
          }), (0, t.translatedField)({
            name: "right",
            label: "Right",
            component: "text"
          })],
          defaultItem: () => (0, t.defaultItemUnique)()
        }),
        c = "Discover Callout Section",
        u = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "var(--spacing-sm)",
            label: "--spacing-sm"
          }, {
            value: "var(--spacing-md)",
            label: "--spacing-md"
          }, {
            value: "var(--spacing-lg)",
            label: "--spacing-lg"
          }, {
            value: "var(--spacing-xl)",
            label: "--spacing-xl"
          }, {
            value: "var(--spacing-xxl)",
            label: "--spacing-xxl"
          }]
        },
        p = () => ({
          label: c,
          name: "content",
          component: "group",
          fields: [{
            label: "Link to",
            name: "to",
            component: "text"
          }, (0, t.translatedField)({
            label: "Heading",
            name: "heading",
            component: "text"
          }), (0, t.translatedField)({
            label: "Description",
            name: "description",
            component: "text"
          }), (0, t.translatedField)({
            label: "CTA",
            name: "cta",
            description: 'Treated as button text (ex. "Track Progress")',
            component: "text"
          }), {
            name: "cards",
            label: "Pack Cards",
            description: "Edit Pack Cards",
            component: "group",
            fields: [{
              name: "images",
              label: "Images",
              component: "group-list",
              fields: [{
                name: "name",
                label: "Internal name (Description of Image)",
                component: "text"
              }, (0, t.ImageField)({})],
              defaultItem: () => (0, t.defaultItemUnique)(),
              itemProps: e => (0, t.itemPropsWithKey)(e, {
                label: `${e?.[t.TINA_MEMOQ_PREFIX]?.name??e?.name??"New"} [Image]`
              })
            }, {
              name: "style",
              label: "Style Overrides",
              component: "group",
              fields: [{
                label: "Grid Gap",
                name: "gridGap",
                description: "Set the grid gap",
                component: "select",
                options: u("-- Select Grid Gap --")
              }]
            }],
            defaultItem: () => (0, t.defaultItemUnique)()
          }, (0, t.ClassNamesField)({
            filter: "discoverCallout"
          }), (0, t.StyleField)({
            filter: "discoverCallout"
          })],
          defaultItem: () => (0, t.defaultItemUnique)(),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??e?.title??`${c}`}`
          })
        }),
        g = () => ({
          name: "disclaimer",
          label: "Disclaimer",
          description: "To add a box of small text somewhere",
          component: "group",
          fields: [(0, t.translatedField)({
            name: "title",
            label: "Disclaimer Title",
            component: "text"
          }), (0, t.translatedField)({
            name: "text",
            label: "Disclaimer Text",
            component: "text"
          }), (0, t.ClassNamesField)({
            filter: "disclaimer"
          }), (0, t.StyleField)({
            filter: "disclaimer"
          })],
          defaultItem: () => (0, t.defaultItemUnique)(),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `Disclaimer [${e?.[t.TINA_MEMOQ_PREFIX]?.text??null}]`
          })
        }),
        b = () => ({
          label: "FAQ",
          description: "Edit FAQ",
          component: "group",
          fields: [(0, t.translatedField)({
            name: "disclaimer",
            label: "Disclaimer",
            component: "html"
          }), (0, t.translatedField)({
            name: "buttonTxt",
            label: "Button Text",
            component: "text"
          }), {
            name: "initialLength",
            label: "Initial Length",
            component: "number",
            description: "How many quetions should be shown initially?"
          }, {
            name: "addedLength",
            label: "Added Length",
            component: "number",
            description: "How many MORE quetions should be shown after clicking the button?"
          }, {
            component: "group-list",
            name: "faqList",
            label: "FAQ List",
            fields: [(0, t.translatedField)({
              name: "question",
              label: "Question",
              component: "text"
            }), (0, t.translatedField)({
              name: "answer",
              label: "Answer",
              component: "html"
            })],
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `Question [${e?.[t.TINA_MEMOQ_PREFIX]?.question??""}]`
            }),
            defaultItem: () => (0, t.defaultItemUnique)()
          }],
          defaultItem: () => (0, t.defaultItemUnique)({
            faqs: (0, t.defaultItemUnique)()
          })
        }),
        f = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "var(--spacing-sm)",
            label: "--spacing-sm"
          }, {
            value: "var(--spacing-md)",
            label: "--spacing-md"
          }, {
            value: "var(--spacing-lg)",
            label: "--spacing-lg"
          }, {
            value: "var(--spacing-xl)",
            label: "--spacing-xl"
          }, {
            value: "var(--spacing-xxl)",
            label: "--spacing-xxl"
          }]
        },
        v = e => {
          let {
            templates: a
          } = e;
          return {
            label: "Guide",
            description: "Edit this guide",
            component: "group",
            fields: [{
              label: "Guide sections",
              name: t.TINA_PARSER_KEY,
              component: "blocks",
              templates: a
            }, {
              name: "images",
              component: "group",
              label: "Images for this guide.",
              fields: [(0, t.localizedImageField)({
                label: "Thumb Image",
                name: "thumb"
              })]
            }, {
              name: "style",
              label: "Style Overrides",
              component: "group",
              fields: [{
                label: "Grid Gap",
                name: "gridGap",
                description: "Set the grid gap",
                component: "select",
                options: f("-- Select Grid Gap --")
              }]
            }],
            defaultItem: () => (0, t.defaultItemUnique)()
          }
        },
        k = () => ({
          label: "Guide Intro",
          name: "content",
          component: "group",
          fields: [(0, t.translatedField)({
            name: "title",
            component: "text",
            label: "Title"
          }), (0, t.translatedField)({
            name: "blurb",
            component: "html",
            label: "Blurb"
          }), (0, t.localizedImageField)({
            name: "hero",
            label: "Hero Image"
          })],
          defaultItem: (0, t.defaultItemUnique)()
        }),
        y = () => ({
          label: "Guides Wrapper",
          description: "Edit this guide group",
          component: "group",
          fields: [{
            name: "guides",
            component: "group-list",
            label: "List of Guides",
            fields: [{
              component: "tina-module-selector",
              name: "guide_id",
              variables: {
                types: ["gen9-guide"]
              },
              label: "Select Guide"
            }],
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `Guide: [${e?.guide_id??"New"}]`
            })
          }],
          defaultItem: () => (0, t.defaultItemUnique)()
        }),
        I = e => {
          let {
            templates: a
          } = e;
          return {
            component: "group",
            name: "content",
            label: "Guide Section Content",
            fields: [(0, t.translatedField)({
              name: "title",
              label: "Title",
              description: "This will show up only in the guide sub nav",
              component: "text"
            }), {
              name: "content",
              component: "blocks",
              label: "This section's content",
              templates: a
            }, (0, t.StyleField)({
              filter: "grid"
            })],
            defaultItem: () => (0, t.defaultItemUnique)(),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `Guide Section Content: [${e?.[t.TINA_MEMOQ_PREFIX]?.title??"New"}]`
            })
          }
        },
        S = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            component: "group-list",
            name: "ctas",
            label: "CTAs",
            description: "Show a group of CTAs",
            fields: [(0, t.translatedField)({
              name: "title",
              label: "Title",
              component: "text"
            }), (0, t.translatedField)({
              name: "to",
              label: "Link to",
              component: "text"
            }), {
              name: "icon",
              label: "Icon for this CTA",
              component: "select",
              options: [{
                value: null,
                label: "-- Select an Icon --"
              }, {
                value: "ps",
                label: "PlayStation"
              }, {
                value: "xbox",
                label: "Xbox"
              }, {
                value: "questionmark",
                label: "A questionmark"
              }]
            }, (0, t.GtmField)()],
            ...e,
            defaultItem: () => (0, t.defaultItemUnique)(),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `CTA [${e?.[t.TINA_MEMOQ_PREFIX]?.title??null}]`
            })
          }
        },
        h = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "background";
          const a = [{
            name: "mobile",
            label: "Mobile",
            component: "image",
            description: "(If responsive, only Mobile Source is needed)",
            previewSrc: t.previewSrc,
            uploadDir: s.uploadDir
          }, {
            name: "desktop",
            label: "Desktop",
            component: "image",
            previewSrc: t.previewSrc,
            uploadDir: s.uploadDir
          }];
          return "background" === e && a.push((0, t.StyleField)({
            filter: "image"
          })), {
            component: "group",
            name: `${e}Img`,
            label: `${e} Images`,
            fields: a
          }
        },
        x = () => ({
          label: "Gen 9 Hero [DEPRECATED - Update Only]",
          component: "group",
          fields: [i(), (0, t.translatedField)({
            name: "title",
            label: "Title",
            component: "text"
          }), (0, t.translatedField)({
            name: "description",
            label: "Description",
            component: "text"
          }), S({
            description: "Show a group of CTA buttons (for CTA display ONLY)"
          }), (0, t.translatedField)({
            name: "expandingButtonLabel",
            label: "Expanding Button Label",
            description: "Default: Subscribe",
            component: "text"
          }), (0, t.PlatformsAndLinksField)({
            description: "Game Platforms/Links (for expanding button display ONLY)"
          }), (0, t.translatedField)({
            name: "legalText",
            label: "Legal Text",
            component: "text",
            description: "Display smaller legal text underneath the CTA buttons."
          }), h(), h("layered"), {
            name: "shardsSection",
            label: "Shards Configuration",
            description: "Add a carousel of shard-style images with text to the bottom of the hero.",
            component: "group",
            fields: [(0, t.translatedField)({
              name: "title",
              label: "Title",
              component: "text",
              description: "Title to be displayed on top of the shards carousel."
            }), {
              name: "shards",
              label: "Shards",
              component: "group-list",
              fields: [(0, t.translatedField)({
                name: "title",
                label: "Title",
                component: "text",
                description: "Text to be overlayed on top of the image."
              }), h("shard")],
              defaultItem: () => (0, t.defaultItemUnique)(),
              itemProps: e => (0, t.itemPropsWithKey)(e, {
                label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"New"} [Shard]`
              })
            }],
            defaultItem: (0, t.defaultItemUnique)({
              shards: (0, t.defaultItemUnique)()
            })
          }, (0, t.ClassNamesField)({
            filter: "hero"
          })],
          defaultItem: () => (0, t.defaultItemUnique)({
            shardsSection: (0, t.defaultItemUnique)()
          }),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `Hero [${e?.[t.TINA_MEMOQ_PREFIX]?.title??null}]`
          })
        }),
        F = e => {
          let {
            templates: a
          } = e;
          return {
            label: "Elevator Pitch",
            name: "content",
            component: "group",
            fields: [(0, t.translatedField)({
              label: "Title",
              name: "title",
              component: "text"
            }), (0, t.translatedField)({
              label: "Description",
              name: "description",
              component: "text"
            }), (0, t.translatedField)({
              label: "Disclaimer",
              name: "disclaimer",
              component: "text"
            }), {
              label: "CTA",
              name: "cta",
              description: "Add a cta button",
              component: "blocks",
              templates: a
            }, (0, t.PlatformsAndLinksField)({
              description: "Game Platforms/Links (for expanding button display ONLY)"
            }), (0, t.ClassNamesField)({
              filter: "elevatorPitch"
            }), (0, t.StyleField)({
              filter: "elevatorPitch"
            })],
            defaultItem: () => (0, t.defaultItemUnique)(),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `[Elevator Pitch]: ${e?.[t.TINA_MEMOQ_PREFIX]?.title??e?.title??"New"}`
            })
          }
        };
      var N = l(96304);
      const T = "Title Image",
        P = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "var(--spacing-sm)",
            label: "--spacing-sm"
          }, {
            value: "var(--spacing-md)",
            label: "--spacing-md"
          }, {
            value: "var(--spacing-lg)",
            label: "--spacing-lg"
          }, {
            value: "var(--spacing-xl)",
            label: "--spacing-xl"
          }, {
            value: "var(--spacing-xxl)",
            label: "--spacing-xxl"
          }]
        },
        _ = e => {
          let {
            templates: a
          } = e;
          return {
            label: T,
            name: "content",
            component: "group",
            fields: [(0, t.translatedField)({
              label: "Title Text Mask",
              name: "title",
              component: "text"
            }), (0, t.translatedField)({
              label: "Image Title",
              name: "imgTitle",
              component: "html"
            }), (0, t.translatedField)({
              label: "Description",
              name: "description",
              component: "text"
            }), {
              name: "imageSrc",
              label: "Title Mask Image",
              component: "image",
              clearable: !0,
              previewSrc: s.previewSrc,
              parse: s.parse,
              uploadDir: s.uploadDir
            }, {
              label: "CTA",
              name: "cta",
              description: "Add a cta button component",
              component: "blocks",
              templates: a
            }, {
              name: "customStyles",
              label: "Card Style Overrides",
              component: "group",
              fields: [{
                label: "Grid Gap",
                name: "gridGap",
                description: "Set the grid gap",
                component: "select",
                options: P({
                  label: "-- Select Grid Gap --"
                })
              }]
            }, (0, t.ClassNamesField)({
              filter: "maskText"
            }), (0, t.StyleField)({
              filter: "grid"
            })],
            defaultItem: () => (0, t.defaultItemUnique)({}),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??e?.title??`${T}`}`
            })
          }
        },
        w = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "var(--spacing-sm)",
            label: "--spacing-sm"
          }, {
            value: "var(--spacing-md)",
            label: "--spacing-md"
          }, {
            value: "var(--spacing-lg)",
            label: "--spacing-lg"
          }, {
            value: "var(--spacing-xl)",
            label: "--spacing-xl"
          }, {
            value: "var(--spacing-xxl)",
            label: "--spacing-xxl"
          }]
        },
        C = e => {
          let {
            templates: a
          } = e;
          return {
            label: "Sticky Column",
            name: "content",
            component: "group",
            fields: [{
              label: "Title",
              name: "title",
              component: "text"
            }, {
              label: "Left Column",
              name: "leftColumn",
              component: "blocks",
              templates: a
            }, {
              label: "Right Column",
              name: "rightColumn",
              component: "blocks",
              templates: a
            }, {
              label: "Disable Sticky Column on Desktop?",
              name: "disableStickyOnDesktop",
              description: "Disable sticky column on desktop?",
              component: "toggle"
            }, {
              label: "Disable Sticky Column on Mobile?",
              name: "disableStickyOnMobile",
              description: "Disable sticky column on mobile?",
              component: "toggle"
            }, {
              name: "customStyles",
              label: "Card Style Overrides",
              component: "group",
              fields: [{
                label: "Grid Gap",
                name: "gridGap",
                description: "Set the grid gap",
                component: "select",
                options: w({
                  label: "-- Select Grid Gap --"
                })
              }]
            }, (0, t.ClassNamesField)({
              filter: "stickyColumn"
            }), (0, t.StyleField)({
              filter: "grid"
            })],
            defaultItem: () => (0, t.defaultItemUnique)({}),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `[Sticky Column]: ${e?.[t.TINA_MEMOQ_PREFIX]?.title??e?.title??"New"}`
            })
          }
        };
      var D = l(95240);
      const A = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, D.jsx)("hr", {})
          }
        },
        M = function() {
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
        };
      A("Grid"),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label").toLowerCase().split(" ").join("_")
        }("Grid"), M("style.--grid-num-columns-mobile", "Grid Number of Columns (Mobile)"), M("style.--grid-num-columns-desktop", "Grid Number of Columns (Desktop)"), A("Grid");
      var E = l(65988);
      const L = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          parent: "",
          post: null
        };
        return {
          name: "listItem",
          label: "List Item",
          component: "group",
          fields: [(0, t.NameField)(e), (0, t.translatedField)({
            name: "content",
            label: "Content",
            component: "text",
            initialValues: ""
          }), (0, t.StyleField)(e)],
          defaultItem: () => (0, t.defaultItemUnique)({
            content: ""
          }),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: (0, E.stripHTML)(`${e?.name??e?.[t.TINA_MEMOQ_PREFIX]?.content??"New"} [List Item]`)
          })
        }
      };
      l(33052), l(32104), l(504), l(52256);
      var G = l(65419);
      const q = e => {
          let {
            game: a = null,
            parent: l = null
          } = e;
          const n = [(0, t.NameField)()];
          return "gtao" !== a && "gtav" !== a || n.push({
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
          }), n.push((0, t.translatedField)({
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
            templates: [L({})]
          }, (0, t.StyleField)({
            parent: l
          })), {
            name: "unorderedList",
            label: "Unordered List",
            component: "group",
            fields: n,
            defaultItem: () => (0, t.defaultItemUnique)({
              content: G.c,
              columns: 1,
              mobileColumns: 1,
              starColor: "noImg",
              listItems: []
            }),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Unordered List]` : "New [Unordered List]"
            })
          }
        },
        O = "Summary",
        $ = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "var(--spacing-sm)",
            label: "--spacing-sm"
          }, {
            value: "var(--spacing-md)",
            label: "--spacing-md"
          }, {
            value: "var(--spacing-lg)",
            label: "--spacing-lg"
          }, {
            value: "var(--spacing-xl)",
            label: "--spacing-xl"
          }, {
            value: "var(--spacing-xxl)",
            label: "--spacing-xxl"
          }]
        },
        R = () => ({
          label: O,
          name: "content",
          component: "group",
          fields: [(0, t.translatedField)({
            label: "Title",
            name: "title",
            component: "text"
          }), (0, t.translatedField)({
            label: "Text",
            name: "text",
            component: "text"
          }), {
            name: "benefits",
            label: "Benifits",
            component: "blocks",
            templates: [q({
              game: null
            })]
          }, {
            name: "customStyles",
            label: "Summary Style Overrides",
            component: "group",
            fields: [{
              label: "Grid Gap",
              name: "gridGap",
              description: "Set the grid gap",
              component: "select",
              options: $({
                label: "-- Select Grid Gap --"
              })
            }]
          }, (0, t.ClassNamesField)({
            filter: "summary"
          }), (0, t.StyleField)({
            filter: "summary"
          })],
          defaultItem: () => (0, t.defaultItemUnique)(),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??e?.title??`${O}`}`
          })
        }),
        U = e => {
          let {
            templates: a
          } = e;
          return {
            label: "SummaryCard",
            name: "content",
            component: "group",
            fields: [(0, t.translatedField)({
              label: "Title",
              name: "title",
              component: "text"
            }), (0, t.translatedField)({
              label: "Description",
              name: "description",
              component: "text"
            }), (0, t.PlatformsAndLinksField)({
              description: "Game Platforms/Links (for expanding button display ONLY)"
            }), {
              label: "CTA",
              name: "cta",
              description: "Add a cta button component",
              component: "blocks",
              templates: a
            }, {
              component: "group",
              name: "imgSrc",
              label: "Upload Summary Card Feature Image",
              fields: [{
                name: "mobile",
                label: "Mobile",
                component: "image",
                description: "(If responsive, only Mobile Source is needed)",
                clearable: !0,
                previewSrc: s.previewSrc,
                parse: s.parse,
                uploadDir: s.uploadDir
              }, {
                name: "desktop",
                label: "Desktop",
                component: "image",
                clearable: !0,
                previewSrc: s.previewSrc,
                parse: s.parse,
                uploadDir: s.uploadDir
              }]
            }, (0, t.ClassNamesField)({
              filter: "summaryCard"
            }), (0, t.StyleField)({
              filter: "summaryCard"
            })],
            defaultItem: () => (0, t.defaultItemUnique)(),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"New"} [Summary Card]`
            })
          }
        },
        B = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "var(--spacing-sm)",
            label: "--spacing-sm"
          }, {
            value: "var(--spacing-md)",
            label: "--spacing-md"
          }, {
            value: "var(--spacing-lg)",
            label: "--spacing-lg"
          }, {
            value: "var(--spacing-xl)",
            label: "--spacing-xl"
          }, {
            value: "var(--spacing-xxl)",
            label: "--spacing-xxl"
          }]
        },
        V = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "left",
            label: "Left"
          }, {
            value: "right",
            label: "Right"
          }, {
            value: "top",
            label: "Top"
          }, {
            value: "bottom",
            label: "Bottom"
          }]
        },
        W = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "small",
            label: "Small"
          }, {
            value: "medium",
            label: "Medium"
          }, {
            value: "large",
            label: "Large"
          }]
        },
        K = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "1/1",
            label: "1/1"
          }, {
            value: "16/9",
            label: "16/9"
          }, {
            value: "3/1",
            label: "3/1"
          }]
        },
        Q = e => {
          let {
            templates: a
          } = e;
          return {
            label: "Tile",
            name: "content",
            component: "group",
            fields: [(0, t.NameField)(), (0, t.translatedField)({
              label: "Title",
              name: "title",
              component: "text"
            }), {
              label: "Tile Card Size",
              name: "cardSize",
              description: "Set the size for the Tile Card",
              component: "select",
              options: W({
                label: "-- Select Size --"
              })
            }, {
              label: "Do you want to enable a Full-Bleed image?",
              name: "enableFullBleed",
              component: "toggle"
            }, (0, t.translatedField)({
              label: "Description",
              name: "description",
              component: "text"
            }), {
              label: "CTA",
              name: "cta",
              description: "Add a cta button component",
              component: "blocks",
              templates: a
            }, {
              component: "group",
              name: "imgSrc",
              label: "Upload Tile Images",
              fields: [{
                name: "mobile",
                label: "Mobile",
                component: "image",
                description: "(If responsive, only Mobile Source is needed)",
                clearable: !0,
                previewSrc: s.previewSrc,
                parse: s.parse,
                uploadDir: s.uploadDir
              }, {
                name: "desktop",
                label: "Desktop",
                component: "image",
                clearable: !0,
                previewSrc: s.previewSrc,
                parse: s.parse,
                uploadDir: s.uploadDir
              }, (0, t.translatedField)({
                label: "Image Alt Tag",
                name: "imgAlt",
                component: "text"
              })]
            }, {
              label: "Image Position",
              name: "imgPosition",
              description: "Set the position for the Tile Image",
              component: "select",
              options: V({
                label: "-- Select Position --"
              })
            }, {
              label: "Image Aspect Ratio",
              name: "imgAspectRatio",
              description: "Set the aspect ratio for the Tile Image",
              component: "select",
              options: K({
                label: "-- Select Aspect Ratio --"
              })
            }, {
              name: "backgroundImage",
              label: "Background Image",
              component: "image",
              clearable: !0,
              previewSrc: s.previewSrc,
              parse: s.parse,
              uploadDir: s.uploadDir
            }, {
              label: "Background",
              name: "background",
              component: "text"
            }, {
              label: "Background Size",
              name: "backgroundSize",
              component: "text"
            }, {
              label: "Background Position",
              name: "backgroundPosition",
              component: "text"
            }, {
              label: "Background Repeat",
              name: "backgroundRepeat",
              component: "text"
            }, {
              name: "customStyles",
              label: "Tile Style Overrides",
              component: "group",
              fields: [{
                label: "Grid Gap",
                name: "gridGap",
                description: "Set the grid gap",
                component: "select",
                options: B({
                  label: "-- Select Grid Gap --"
                })
              }]
            }, (0, t.ClassNamesField)({
              filter: "tile"
            }), (0, t.StyleField)({
              filter: "tile"
            })],
            defaultItem: () => (0, t.defaultItemUnique)(),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `[Tile Item]: ${e?.[t.TINA_MEMOQ_PREFIX]?.name??e?.name??"New"}`
            })
          }
        },
        X = () => ({
          label: "Value Prop Tile",
          name: "content",
          component: "group",
          fields: [(0, t.NameField)(), {
            label: "Value Props",
            name: "valueProps",
            component: "group-list",
            fields: [(0, t.translatedField)({
              label: "Title",
              name: "title",
              component: "text"
            }), {
              name: "iconImgSrc",
              label: "Upload Image Icon",
              component: "image",
              clearable: !0,
              previewSrc: s.previewSrc,
              parse: s.parse,
              uploadDir: s.uploadDir
            }, (0, t.translatedField)({
              label: "Icon Image Alt Tag",
              name: "iconAlt",
              component: "text"
            })],
            defaultItem: () => (0, t.defaultItemUnique)({}),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `[Value Prop Item]: ${e?.[t.TINA_MEMOQ_PREFIX]?.title??"New"}`
            })
          }, {
            label: "Enable hover animation?",
            name: "enableAnimation",
            component: "toggle"
          }, (0, t.ClassNamesField)({
            filter: "maskText"
          }), (0, t.StyleField)({
            filter: "grid"
          })],
          defaultItem: () => (0, t.defaultItemUnique)({}),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `[Value Prop]: ${e?.[t.TINA_MEMOQ_PREFIX]?.name??e?.name??"New"}`
          })
        }),
        H = "Image w/text",
        j = "Group of Image/Text Groups (gen9)",
        z = () => ({
          label: j,
          name: "content",
          component: "group",
          fields: [(0, t.NameField)(), {
            name: "bg",
            component: "group",
            label: "Background",
            fields: [{
              component: "group",
              name: "image",
              label: "Images",
              fields: [{
                name: "desktop",
                label: "Desktop",
                component: "image",
                previewSrc: s.previewSrc,
                uploadDir: s.uploadDir
              }, {
                name: "mobile",
                label: "Mobile",
                component: "image",
                previewSrc: s.previewSrc,
                uploadDir: s.uploadDir
              }]
            }]
          }, {
            label: H,
            name: "image_text_groups",
            component: "group-list",
            fields: [(0, t.translatedField)({
              label: "Title",
              name: "title",
              component: "text"
            }), (0, t.TextField)(), {
              component: "group-list",
              name: "ctas",
              label: "CTAs",
              fields: [(0, t.translatedField)({
                name: "title",
                label: "Title",
                component: "text"
              }), {
                name: "to",
                label: "Link to",
                component: "text"
              }],
              defaultItem: () => (0, t.defaultItemUnique)(),
              itemProps: e => (0, t.itemPropsWithKey)(e, {
                label: `CTA [${e?.[t.TINA_MEMOQ_PREFIX]?.title??null}]`
              })
            }, g(), i(), {
              label: "Is this important?",
              description: "If so, this will render slightly bigger",
              name: "large",
              component: "toggle"
            }, {
              label: "Put the img on the right side?",
              name: "image_on_right",
              component: "toggle"
            }, {
              label: "Image",
              name: "image",
              component: "image",
              previewSrc: s.previewSrc,
              uploadDir: s.uploadDir
            }, (0, t.ClassNamesField)({
              filter: "grid"
            }), (0, t.StyleField)({
              filter: "grid"
            })],
            defaultItem: () => (0, t.defaultItemUnique)({
              disclaimer: (0, t.defaultItemUnique)()
            }),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${H} [${e?.[t.TINA_MEMOQ_PREFIX]?.title??null}]`
            })
          }, (0, t.ClassNamesField)({
            filter: "grid"
          }), (0, t.StyleField)({
            filter: "grid"
          })],
          defaultItem: (0, t.defaultItemUnique)(),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${j} [${e?.name??null}]`
          })
        }),
        Y = "Linkout Section",
        J = () => ({
          label: Y,
          name: "content",
          component: "group",
          fields: [{
            label: "Link to",
            name: "to",
            component: "text"
          }, (0, t.translatedField)({
            label: "Text",
            name: "text",
            component: "text"
          }), (0, t.translatedField)({
            label: "CTA",
            name: "cta",
            description: 'Treated as button text on the right side (ex. "Learn More")',
            component: "text"
          }), (0, t.ClassNamesField)({
            filter: "linkout"
          }), (0, t.StyleField)({
            filter: "linkout"
          })],
          defaultItem: () => (0, t.defaultItemUnique)(),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${Y} [${e?.[t.TINA_MEMOQ_PREFIX]?.cta??null}]`
          })
        }),
        Z = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "var(--spacing-sm)",
            label: "--spacing-sm"
          }, {
            value: "var(--spacing-md)",
            label: "--spacing-md"
          }, {
            value: "var(--spacing-lg)",
            label: "--spacing-lg"
          }, {
            value: "var(--spacing-xl)",
            label: "--spacing-xl"
          }, {
            value: "var(--spacing-xxl)",
            label: "--spacing-xxl"
          }, {
            value: "var(--foundry-global-spacing-gap-25)",
            label: "--foundry-global-spacing-gap-25"
          }, {
            value: "var(--foundry-global-spacing-gap-50)",
            label: "--foundry-global-spacing-gap-50"
          }, {
            value: "var(--foundry-global-spacing-gap-100)",
            label: "--foundry-global-spacing-gap-100"
          }, {
            value: "var(--foundry-global-spacing-gap-150)",
            label: "--foundry-global-spacing-gap-150"
          }, {
            value: "var(--foundry-global-spacing-gap-175)",
            label: "--foundry-global-spacing-gap-175"
          }, {
            value: "var(--foundry-global-spacing-gap-200)",
            label: "--foundry-global-spacing-gap-200"
          }, {
            value: "var(--foundry-global-spacing-gap-250)",
            label: "--foundry-global-spacing-gap-250"
          }, {
            value: "var(--foundry-global-spacing-gap-300)",
            label: "--foundry-global-spacing-gap-300"
          }, {
            value: "var(--foundry-global-spacing-gap-400)",
            label: "--foundry-global-spacing-gap-400"
          }, {
            value: "var(--foundry-global-spacing-gap-500)",
            label: "--foundry-global-spacing-gap-500"
          }, {
            value: "var(--foundry-global-spacing-gap-600)",
            label: "--foundry-global-spacing-gap-600"
          }, {
            value: "var(--foundry-global-spacing-gap-700)",
            label: "--foundry-global-spacing-gap-700"
          }, {
            value: "var(--foundry-global-spacing-gap-800)",
            label: "--foundry-global-spacing-gap-800"
          }, {
            value: "var(--foundry-global-spacing-gap-900)",
            label: "--foundry-global-spacing-gap-900"
          }, {
            value: "var(--foundry-global-spacing-gap-1000)",
            label: "--foundry-global-spacing-gap-1000"
          }, {
            value: "var(--foundry-global-spacing-gap-1100)",
            label: "--foundry-global-spacing-gap-1100"
          }, {
            value: "var(--foundry-global-spacing-gap-1200)",
            label: "--foundry-global-spacing-gap-1200"
          }, {
            value: "var(--foundry-global-spacing-gap-1400)",
            label: "--foundry-global-spacing-gap-1400"
          }, {
            value: "var(--foundry-global-spacing-gap-1600)",
            label: "--foundry-global-spacing-gap-1600"
          }]
        },
        ee = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "var(--foundry-alias-color-background-bold-layer-0, #000000)",
            label: "--foundry-alias-color-background-bold-layer-0"
          }, {
            value: "var(--rockstar-gold, #fcaf17)",
            label: "--rockstar-gold"
          }]
        },
        ae = e => {
          let {
            templates: a
          } = e;
          return {
            label: "Gen 9 page wrapper grid",
            component: "group",
            fields: [{
              label: "Page sections",
              name: t.TINA_PARSER_KEY,
              component: "blocks",
              templates: a
            }, {
              name: "style",
              label: "Style Overrides",
              component: "group",
              fields: [{
                label: "Grid Gap",
                name: "gridGap",
                description: "Set the grid gap",
                component: "select",
                options: Z({
                  label: "-- Select Grid Gap --"
                })
              }, {
                label: "Background Color",
                name: "backgroundColor",
                description: "Set the background color",
                component: "select",
                options: ee({
                  label: "-- Select Background Color --"
                })
              }]
            }, (0, t.ThemeField)()],
            defaultItem: () => (0, t.defaultItemUnique)()
          }
        }
    },
    52256: (e, a, l) => {
      "use strict";
      l.d(a, {
        c: () => c
      });
      var t = l(51664),
        n = l(8560),
        i = l.n(n),
        o = l(1740),
        s = l(45792);
      const r = {
        pillBtn: "rockstargames-sites-gta-gen9f87ac9a7d56545847cf4d8ca471b03e6",
        selected: "rockstargames-sites-gta-gen9a8ea61e57fd58bfcb99aef7e6d687045",
        grid: "rockstargames-sites-gta-gen9a57241f29873f89f89ab8b27994e71c3",
        itemList: "rockstargames-sites-gta-gen9daec3f5ce63d42cb07e3e724737c8361",
        gtaplus: "rockstargames-sites-gta-gen9bd78cfb71ed31029ba4279325166bfab",
        rdo: "rockstargames-sites-gta-gen9a6244398a800ffddab72c14f717b0eab",
        noImg: "rockstargames-sites-gta-gen9e88f741af7d5e0529ff4fb6bb82af04f",
        gtao: "rockstargames-sites-gta-gen9ab60d91453348d2e4c090ef3ebb04347",
        custom: "rockstargames-sites-gta-gen9c20e7ba6ceaba3afd37095b172797711",
        yellow: "rockstargames-sites-gta-gen9b16672deedfe102b065925cbe0fb931c",
        hotPink: "rockstargames-sites-gta-gen9d0d01601de7131d9d6d11321b4299e59",
        red: "rockstargames-sites-gta-gen9d1b5397aff94d33b57674b04a3456e03",
        turquoise: "rockstargames-sites-gta-gen9d6541b973ce158c8f2fb81483015211f",
        purple: "rockstargames-sites-gta-gen9f3e34d902681219d4d8490eb164f7727",
        teal: "rockstargames-sites-gta-gen9a6c3b6b6a2395eb18a1174294f26f4ea",
        blue: "rockstargames-sites-gta-gen9eade6e843c5afd48d3a8959fb0b88222",
        green: "rockstargames-sites-gta-gen9a82c313f8f85fc6304ddb703be2fa271",
        darkRed: "rockstargames-sites-gta-gen9d394c61fdce2bf8894ffb801ee680c2a",
        darkBlue: "rockstargames-sites-gta-gen9f1d73cc00a3ab644aab949183a8298a7",
        goldenrod: "rockstargames-sites-gta-gen9cdcb0c5076309a329da2a6e857cc3bdf",
        skull: "rockstargames-sites-gta-gen9ba4bd16bff2fbc40616457007b4a7442"
      };
      var d = l(95240);
      const {
        sanitize: m
      } = i(), c = e => {
        let {
          list: a,
          string: l,
          starColor: n,
          style: i,
          className: c,
          game: u,
          noImg: p,
          columns: g,
          mobileColumns: b
        } = e;
        const [f, v] = (0, t.useState)(null);
        return (0, t.useEffect)((() => {
          v(a)
        }), [a]), l || a ? g && f ? (0, d.jsx)("div", {
          className: r.grid,
          style: {
            "--ordered-list-grid-column": g,
            "--ordered-list-grid-column-mobile": b ?? g
          },
          children: (0, d.jsx)("ol", {
            style: (0, s.safeStyles)(i),
            className: (0, o.classList)(r.itemList, r.noImg, r[n], r[u]),
            children: f.map((e => (0, d.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e.content)
              }
            }, e.content)))
          })
        }) : (0, d.jsx)("ol", {
          style: (0, s.safeStyles)(i),
          className: (0, o.classList)(r.itemList, r.custom, p ? r.noImg : "", n ? r[n] : "", u ? r[u] : "", c ?? ""),
          children: a.map((e => (0, d.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: m(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    65419: (e, a, l) => {
      "use strict";
      l.d(a, {
        c: () => c
      });
      var t = l(51664),
        n = l(8560),
        i = l.n(n),
        o = l(1740),
        s = l(45792);
      const r = {
        pillBtn: "rockstargames-sites-gta-gen9a89792e50dfe5470a67f42b9e143c824",
        selected: "rockstargames-sites-gta-gen9bcce8ac50552b225f30d185d876a3e14",
        grid: "rockstargames-sites-gta-gen9ac295ed5b9cb441ed17843b34e83ea17",
        itemList: "rockstargames-sites-gta-gen9caf5589ddeca00ed09213e547674b1f3",
        gtaplus: "rockstargames-sites-gta-gen9b291112adcf994a0f6acadd86f73b78a",
        rdo: "rockstargames-sites-gta-gen9d146e8f862baefb60e91be5aa3c17b6e",
        noImg: "rockstargames-sites-gta-gen9ba9b5ae08642b0213a3f04b3db9a9dac",
        gtao: "rockstargames-sites-gta-gen9b6f2bdfd6a1d57b7ce840f7a56cc510b",
        custom: "rockstargames-sites-gta-gen9af89164a043648d1464686ff13363ee4",
        yellow: "rockstargames-sites-gta-gen9d244b17b74fc46269e8a106a99ab0f87",
        hotPink: "rockstargames-sites-gta-gen9d90b28503318563cfd6059146d1fb6b6",
        red: "rockstargames-sites-gta-gen9c3f8a8706901874d906f94c626be3c1e",
        turquoise: "rockstargames-sites-gta-gen9fe2ec36e92e2bb4d453fdc4b05966418",
        purple: "rockstargames-sites-gta-gen9f5f7baf5b56f5b2ada053a93392bbf7a",
        teal: "rockstargames-sites-gta-gen9f4a229f41cd20f181d810c311416e3f2",
        blue: "rockstargames-sites-gta-gen9f6f689d687bcd482ea2cd2990fd66878",
        green: "rockstargames-sites-gta-gen9ab270f1b4d3ad43e7bc51393b7c5c089",
        darkRed: "rockstargames-sites-gta-gen9dc24ce78d962f3472b06955bf8855103",
        darkBlue: "rockstargames-sites-gta-gen9b354493baac7389b21b511009f287428",
        goldenrod: "rockstargames-sites-gta-gen9e4a078efee11d24c64e93ccf0744a33f",
        skull: "rockstargames-sites-gta-gen9d4581a495de14e6762bb15debe5bb810"
      };
      var d = l(95240);
      const {
        sanitize: m
      } = i(), c = e => {
        let {
          list: a,
          string: l,
          starColor: n,
          style: i,
          className: c,
          game: u,
          noImg: p,
          columns: g,
          mobileColumns: b
        } = e;
        const [f, v] = (0, t.useState)(null), k = l ? l.split("_#_") : a;
        return (0, t.useEffect)((() => {
          v(a)
        }), [a]), l || a ? g && f ? (0, d.jsx)("div", {
          className: r.grid,
          style: {
            "--unordered-list-grid-column": g,
            "--unordered-list-grid-column-mobile": b ?? g
          },
          children: (0, d.jsx)("ul", {
            style: (0, s.safeStyles)(i),
            className: (0, o.classList)(r.itemList, r.noImg, r[n], r[u]),
            children: f.map(((e, a) => (0, d.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e.content)
              }
            }, a)))
          })
        }) : (0, d.jsx)("ul", {
          style: (0, s.safeStyles)(i),
          className: (0, o.classList)(r.itemList, r.custom, p ? r.noImg : "", n ? r[n] : "", u ? r[u] : "", c ?? ""),
          children: k.map(((e, a) => (0, d.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: m(e?.content ?? e)
            }
          }, a)))
        }) : null
      }
    },
    96304: (e, a, l) => {
      "use strict";
      l.r(a), l.d(a, {
        default: () => s
      });
      var t = l(89468),
        n = l(45652);
      const i = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "image",
            label: "Image"
          }, {
            value: "video",
            label: "Video"
          }]
        },
        o = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "vinewood-club",
            label: "Vinewood Club"
          }]
        },
        s = () => ({
          label: "Hero Video",
          name: "content",
          component: "group",
          fields: [(0, t.NameField)(), {
            label: "Variant",
            name: "variant",
            description: "Set the variant for the Hero",
            component: "select",
            options: i({
              label: "-- Select Variant --"
            })
          }, {
            label: "Video",
            name: "videoSrc",
            description: "Select video for the Hero",
            component: "select",
            options: o({
              label: "-- Select A Video --"
            })
          }, {
            name: "fallbackImg",
            label: "Fallback Image",
            component: "image",
            clearable: !0,
            previewSrc: n.previewSrc,
            parse: n.parse,
            uploadDir: n.uploadDir
          }, (0, t.translatedField)({
            label: "Fallback Image Alt Tag",
            name: "fallbackImgAlt",
            component: "text"
          }), {
            name: "contentImgSrc",
            label: "Content Image",
            component: "image",
            clearable: !0,
            previewSrc: n.previewSrc,
            parse: n.parse,
            uploadDir: n.uploadDir
          }, (0, t.translatedField)({
            label: "Content Image Alt Tag",
            name: "contentImgAlt",
            component: "text"
          }), (0, t.translatedField)({
            label: "Heading",
            name: "heading",
            component: "text"
          }), (0, t.translatedField)({
            label: "SubHeading",
            name: "subheading",
            component: "text"
          }), (0, t.translatedField)({
            label: "CTA text",
            name: "ctaText",
            description: 'Treated as button text (eg. "View More")',
            component: "text"
          }), {
            label: "CTA link",
            name: "ctaLink",
            component: "text"
          }, (0, t.ClassNamesField)({
            filter: "heroVideo"
          }), (0, t.StyleField)({
            filter: "heroVideo"
          })],
          defaultItem: () => (0, t.defaultItemUnique)(),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `[Hero Video]: ${e?.[t.TINA_MEMOQ_PREFIX]?.name??e?.name??"New"}`
          })
        })
    },
    504: e => {
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

      function l(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          l(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          l(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          l(e, a)
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
      var t = {};

      function n(e, a) {
        for (var l = 0; l < e.definitions.length; l++) {
          var t = e.definitions[l];
          if (t.name && t.name.value == a) return t
        }
      }

      function i(e, a) {
        var l = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (l.loc = e.loc);
        var i = t[a] || new Set,
          o = new Set,
          s = new Set;
        for (i.forEach((function(e) {
            s.add(e)
          })); s.size > 0;) {
          var r = s;
          s = new Set, r.forEach((function(e) {
            o.has(e) || (o.add(e), (t[e] || new Set).forEach((function(e) {
              s.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var t = n(e, a);
          t && l.definitions.push(t)
        })), l
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          l(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = i(a, "TinaModulesList"), e.exports.TinaModulesInfo = i(a, "TinaModulesInfo")
    }
  }
]);