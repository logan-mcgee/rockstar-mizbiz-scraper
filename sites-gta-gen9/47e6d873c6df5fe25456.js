"use strict";
(self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [641], {
    2641: (e, t, l) => {
      l.r(t), l.d(t, {
        BrandMessage: () => o,
        BrandsField: () => i,
        BuyNow: () => m,
        ClaimCountdown: () => r,
        Disclaimer: () => p,
        FAQ: () => u,
        Guide: () => b,
        GuideGroup: () => f,
        GuideIntro: () => g,
        GuideSection: () => h,
        Hero: () => v,
        ImageTextGroupGroup: () => S,
        LinkoutSection: () => _,
        TinaWrapper: () => A,
        brandField: () => n
      });
      var a = l(3616);
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
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: `Brand [${e?.brand??null}]`
          })
        }),
        o = () => ({
          label: "Brand Message",
          description: "Brand logo, then some text.",
          component: "group",
          fields: [n, (0, a.translatedField)({
            name: "headline_left",
            label: "Headline left",
            component: "text"
          }), (0, a.translatedField)({
            name: "headline_right",
            label: "Headline right",
            component: "text"
          }), {
            name: "info",
            label: "Info",
            component: "textarea"
          }],
          defaultItem: () => (0, a.defaultItemUnique)()
        });
      var s = l(559);
      const d = e => {
          let {
            label: t,
            name: l
          } = e;
          return {
            component: "group",
            label: t,
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
        m = () => ({
          label: "Buy Now component",
          component: "group",
          fields: [(0, a.translatedField)({
            name: "topText",
            label: "Top Text",
            component: "text"
          }), (0, a.translatedField)({
            name: "bottomText",
            label: "Bottom Text",
            component: "text"
          }), {
            component: "group-list",
            name: "cards",
            label: "Cards",
            fields: [(0, a.translatedField)({
              name: "title",
              label: "Title",
              component: "text"
            }), (0, a.translatedField)({
              name: "description",
              label: "Description",
              component: "text"
            }), (0, a.translatedField)({
              name: "addedInfo",
              label: "Additional Information",
              component: "text"
            }), (0, a.translatedField)({
              name: "buynowbtn",
              label: "Buy Now",
              component: "text"
            }), {
              component: "group-list",
              name: "links",
              label: "Links",
              fields: [(0, a.translatedField)({
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
              }],
              itemProps: e => (0, a.itemPropsWithKey)(e, {
                label: `Link for [${e?.platform??""}]`,
                href: e?.href
              }),
              defaultItem: () => (0, a.defaultItemUnique)({
                href: (0, a.defaultItemUnique)()
              })
            }, {
              name: "images",
              component: "group",
              label: "Images for this card.",
              fields: [d({
                name: "background",
                label: "Background"
              }), d({
                name: "foreground",
                label: "Foreground"
              })]
            }],
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `Card [${e?.[a.TINA_MEMOQ_PREFIX]?.title??""}]`
            }),
            defaultItem: () => (0, a.defaultItemUnique)()
          }],
          defaultItem: () => (0, a.defaultItemUnique)()
        }),
        r = () => ({
          label: "Claim Countdown",
          description: "Claim rewards until...",
          component: "group",
          fields: [(0, a.translatedField)({
            name: "left",
            label: "Left",
            component: "text"
          }), (0, a.translatedField)({
            name: "right",
            label: "Right",
            component: "text"
          })],
          defaultItem: () => (0, a.defaultItemUnique)()
        }),
        p = () => ({
          name: "disclaimer",
          label: "Disclaimer",
          description: "To add a box of small text somewhere",
          component: "group",
          fields: [(0, a.translatedField)({
            name: "title",
            label: "Disclaimer Title",
            component: "text"
          }), (0, a.translatedField)({
            name: "text",
            label: "Disclaimer Text",
            component: "text"
          }), (0, a.ClassNamesField)({
            filter: "disclaimer"
          }), (0, a.StyleField)({
            filter: "disclaimer"
          })],
          defaultItem: () => (0, a.defaultItemUnique)(),
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: `Disclaimer [${e?.[a.TINA_MEMOQ_PREFIX]?.text??null}]`
          })
        }),
        u = () => ({
          label: "FAQ",
          description: "Edit FAQ",
          component: "group",
          fields: [(0, a.translatedField)({
            name: "disclaimer",
            label: "Disclaimer",
            component: "html"
          }), (0, a.translatedField)({
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
            fields: [(0, a.translatedField)({
              name: "question",
              label: "Question",
              component: "text"
            }), (0, a.translatedField)({
              name: "answer",
              label: "Answer",
              component: "html"
            })],
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `Question [${e?.[a.TINA_MEMOQ_PREFIX]?.question??""}]`
            }),
            defaultItem: () => (0, a.defaultItemUnique)()
          }],
          defaultItem: () => (0, a.defaultItemUnique)({
            faqs: (0, a.defaultItemUnique)()
          })
        }),
        c = e => {
          let {
            label: t
          } = e;
          return [{
            value: "",
            label: t
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
        b = e => {
          let {
            templates: t
          } = e;
          return {
            label: "Guide",
            description: "Edit this guide",
            component: "group",
            fields: [{
              label: "Guide sections",
              name: a.TINA_PARSER_KEY,
              component: "blocks",
              templates: t
            }, {
              name: "images",
              component: "group",
              label: "Images for this guide.",
              fields: [(0, a.localizedImageField)({
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
                options: c("-- Select Grid Gap --")
              }]
            }],
            defaultItem: () => (0, a.defaultItemUnique)()
          }
        },
        g = () => ({
          label: "Guide Intro",
          name: "content",
          component: "group",
          fields: [(0, a.translatedField)({
            name: "title",
            component: "text",
            label: "Title"
          }), (0, a.translatedField)({
            name: "blurb",
            component: "html",
            label: "Blurb"
          }), (0, a.localizedImageField)({
            name: "hero",
            label: "Hero Image"
          })],
          defaultItem: (0, a.defaultItemUnique)()
        }),
        f = () => ({
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
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `Guide: [${e?.guide_id??"New"}]`
            })
          }],
          defaultItem: () => (0, a.defaultItemUnique)()
        }),
        h = e => {
          let {
            templates: t
          } = e;
          return {
            component: "group",
            name: "content",
            label: "Guide Section Content",
            fields: [(0, a.translatedField)({
              name: "title",
              label: "Title",
              description: "This will show up only in the guide sub nav",
              component: "text"
            }), {
              name: "content",
              component: "blocks",
              label: "This section's content",
              templates: t
            }, (0, a.StyleField)({
              filter: "grid"
            })],
            defaultItem: () => (0, a.defaultItemUnique)(),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `Guide Section Content: [${e?.[a.TINA_MEMOQ_PREFIX]?.title??"New"}]`
            })
          }
        },
        I = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            component: "group-list",
            name: "ctas",
            label: "CTAs",
            description: "Show a group of CTAs",
            fields: [(0, a.translatedField)({
              name: "title",
              label: "Title",
              component: "text"
            }), (0, a.translatedField)({
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
            }],
            ...e,
            defaultItem: () => (0, a.defaultItemUnique)(),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `CTA [${e?.[a.TINA_MEMOQ_PREFIX]?.title??null}]`
            })
          }
        },
        x = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "background";
          const t = [{
            name: "mobile",
            label: "Mobile",
            component: "image",
            description: "(If responsive, only Mobile Source is needed)",
            uploadDir: s.uploadDir
          }, {
            name: "desktop",
            label: "Desktop",
            component: "image",
            uploadDir: s.uploadDir
          }];
          return "background" === e && t.push((0, a.StyleField)({
            filter: "image"
          })), {
            component: "group",
            name: `${e}Img`,
            label: `${e} Images`,
            fields: t
          }
        },
        v = () => ({
          label: "Gen 9 Hero [DEPRECATED - Update Only]",
          component: "group",
          fields: [i(), (0, a.translatedField)({
            name: "title",
            label: "Title",
            component: "text"
          }), (0, a.translatedField)({
            name: "description",
            label: "Description",
            component: "text"
          }), I({
            description: "Show a group of CTA buttons (for CTA display ONLY)"
          }), (0, a.translatedField)({
            name: "expandingButtonLabel",
            label: "Expanding Button Label",
            description: "Default: Subscribe",
            component: "text"
          }), (0, a.PlatformsAndLinksField)({
            description: "Game Platforms/Links (for expanding button display ONLY)"
          }), (0, a.translatedField)({
            name: "legalText",
            label: "Legal Text",
            component: "text",
            description: "Display smaller legal text underneath the CTA buttons."
          }), x(), x("layered"), {
            name: "shardsSection",
            label: "Shards Configuration",
            description: "Add a carousel of shard-style images with text to the bottom of the hero.",
            component: "group",
            fields: [(0, a.translatedField)({
              name: "title",
              label: "Title",
              component: "text",
              description: "Title to be displayed on top of the shards carousel."
            }), {
              name: "shards",
              label: "Shards",
              component: "group-list",
              fields: [(0, a.translatedField)({
                name: "title",
                label: "Title",
                component: "text",
                description: "Text to be overlayed on top of the image."
              }), x("shard")],
              defaultItem: () => (0, a.defaultItemUnique)(),
              itemProps: e => (0, a.itemPropsWithKey)(e, {
                label: `${e?.[a.TINA_MEMOQ_PREFIX]?.title??"New"} [Shard]`
              })
            }],
            defaultItem: (0, a.defaultItemUnique)({
              shards: (0, a.defaultItemUnique)()
            })
          }, (0, a.ClassNamesField)({
            filter: "hero"
          })],
          defaultItem: () => (0, a.defaultItemUnique)({
            shardsSection: (0, a.defaultItemUnique)()
          }),
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: `Hero [${e?.[a.TINA_MEMOQ_PREFIX]?.title??null}]`
          })
        }),
        F = "Image w/text",
        T = [{
          value: "",
          label: "-- Select Padding --"
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
        }],
        P = "Group of Image/Text Groups (gen9)",
        S = () => ({
          label: P,
          name: "content",
          component: "group",
          fields: [(0, a.NameField)(), {
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
            label: F,
            name: "image_text_groups",
            component: "group-list",
            fields: [(0, a.translatedField)({
              label: "Title",
              name: "title",
              component: "text"
            }), (0, a.TextField)(), {
              component: "group-list",
              name: "ctas",
              label: "CTAs",
              fields: [(0, a.translatedField)({
                name: "title",
                label: "Title",
                component: "text"
              }), {
                name: "to",
                label: "Link to",
                component: "text"
              }],
              defaultItem: () => (0, a.defaultItemUnique)(),
              itemProps: e => (0, a.itemPropsWithKey)(e, {
                label: `CTA [${e?.[a.TINA_MEMOQ_PREFIX]?.title??null}]`
              })
            }, p(), i(), {
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
            }, (0, a.ClassNamesField)({
              filter: "grid"
            }), (0, a.StyleField)({
              filter: "grid"
            })],
            defaultItem: () => (0, a.defaultItemUnique)({
              disclaimer: (0, a.defaultItemUnique)()
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `${F} [${e?.[a.TINA_MEMOQ_PREFIX]?.title??null}]`
            })
          }, (0, a.ClassNamesField)({
            filter: "grid"
          }), {
            name: "style",
            label: "Style Overrides",
            component: "group",
            fields: [{
              label: "Top Padding",
              name: "--padding-t",
              description: "Set the top padding",
              component: "select",
              options: T
            }, {
              label: "Bottom Padding",
              name: "--padding-b",
              description: "Set the bottom padding",
              component: "select",
              options: T
            }]
          }],
          defaultItem: (0, a.defaultItemUnique)(),
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: `${P} [${e?.name??null}]`
          })
        }),
        y = "Linkout Section",
        _ = () => ({
          label: y,
          name: "content",
          component: "group",
          fields: [{
            label: "Link to",
            name: "to",
            component: "text"
          }, (0, a.translatedField)({
            label: "Text",
            name: "text",
            component: "text"
          }), (0, a.translatedField)({
            label: "CTA",
            name: "cta",
            description: 'Treated as button text on the right side (ex. "Learn More")',
            component: "text"
          }), (0, a.ClassNamesField)({
            filter: "linkout"
          }), (0, a.StyleField)({
            filter: "linkout"
          })],
          defaultItem: () => (0, a.defaultItemUnique)(),
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: `${y} [${e?.[a.TINA_MEMOQ_PREFIX]?.cta??null}]`
          })
        }),
        w = e => {
          let {
            label: t
          } = e;
          return [{
            value: "",
            label: t
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
        A = e => {
          let {
            templates: t
          } = e;
          return {
            label: "Gen 9 page wrapper grid",
            component: "group",
            fields: [{
              label: "Page sections",
              name: a.TINA_PARSER_KEY,
              component: "blocks",
              templates: t
            }, {
              name: "style",
              label: "Style Overrides",
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
            }, (0, a.ThemeField)()],
            defaultItem: () => (0, a.defaultItemUnique)()
          }
        }
    }
  }
]);
//# sourceMappingURL=47e6d873c6df5fe25456.js.map