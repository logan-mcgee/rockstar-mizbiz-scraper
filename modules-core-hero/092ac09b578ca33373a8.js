"use strict";
(self.webpackChunk_rockstargames_modules_core_hero = self.webpackChunk_rockstargames_modules_core_hero || []).push([
  [248], {
    1248: (e, t, l) => {
      l.r(t), l.d(t, {
        default: () => y
      });
      var a = l(3616),
        o = l(559),
        n = l(6307);
      const i = () => ({
          name: "buttons",
          label: "Buttons",
          description: "Buttons revealed within the expanding platform button.",
          component: "group-list",
          fields: [{
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
            }, {
              value: "questionmark",
              label: "Question Mark"
            }]
          }, (0, a.translatedField)({
            name: "link",
            label: "Link",
            component: "text"
          }), (0, a.translatedField)({
            name: "label",
            label: "Button Label (Optional, will overload selected option)",
            component: "text"
          })],
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: `Link for [${e?.platform??e?.buttonText??""}]`
          }),
          defaultItem: () => (0, a.defaultItemUnique)()
        }),
        r = () => ({
          name: "modal",
          label: "Modal Content",
          description: "Modify modal content details in here.",
          component: "group",
          fields: []
        }),
        m = () => ({
          name: "helperText",
          label: "Helper Link Section",
          component: "group",
          fields: [(0, a.translatedField)({
            name: "text",
            label: "Text",
            description: "This is the text above the link.",
            component: "text"
          }), (0, a.translatedField)({
            name: "linkText",
            label: "Link Text",
            description: "This is the text/label the link is attached to.",
            component: "text"
          }), (0, a.translatedField)({
            name: "link",
            label: "Link",
            component: "text"
          })],
          defaultItem: () => (0, a.defaultItemUnique)({
            text: "Placeholder text",
            linkText: "Click here Placeholder",
            link: "https://rockstargames.com/"
          })
        }),
        s = () => ({
          name: "subHero",
          label: "Sub Hero",
          component: "group",
          fields: [(0, a.translatedField)({
            name: "description",
            label: "Description",
            description: "This is the body text in the subhero.",
            component: "textarea"
          }), {
            name: "buttons",
            label: "Buttons",
            component: "group-list",
            fields: [(0, a.NameField)(), (0, a.translatedField)({
              name: "label",
              label: "Button Label",
              component: "text"
            }), {
              name: "icon",
              label: "Select Icon",
              component: "select",
              options: [{
                value: null,
                label: "-- Select an Icon --"
              }, {
                value: "play",
                label: "Play"
              }, {
                value: "questionmark",
                label: "Question Mark"
              }]
            }, {
              name: "primary",
              label: "Is this the primary CTA?",
              component: "toggle"
            }, {
              name: "type",
              label: "When clicked, this button behaves like a....",
              component: "radio-group",
              direction: "horizontal",
              variant: "button",
              options: [{
                label: "Link",
                value: "link"
              }, {
                label: "Expanding Button",
                value: "expanding"
              }, {
                label: "Modal",
                value: "modal"
              }]
            }, {
              name: "link",
              label: "Link",
              description: "Modify link details in here.",
              component: "group",
              fields: [(0, a.translatedField)({
                name: "link",
                label: "URL",
                component: "text"
              }), {
                name: "type",
                label: "Type of CTA",
                description: "This is for GTM Tracking only.",
                component: "radio-group",
                direction: "horizontal",
                options: [{
                  label: "Add to Wishlist",
                  value: "wishlist"
                }, {
                  label: "Buy Now",
                  value: "buy"
                }, {
                  label: "Watch Trailer",
                  value: "trailer"
                }, {
                  label: "Download",
                  value: "download"
                }, {
                  label: "Merchandise",
                  value: "merchandise"
                }, {
                  label: "Other",
                  value: "other"
                }]
              }]
            }, {
              name: "expandingButton",
              label: "Expanding Button",
              description: "Modify expanding platform button details in here.",
              component: "group",
              fields: [i()]
            }, r()],
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `${e?.name??"New"} [SubHero Button]`
            }),
            defaultItem: () => (0, a.defaultItemUnique)({
              helperText: (0, a.defaultItemUnique)(),
              link: (0, a.defaultItemUnique)(),
              expandingButton: (0, a.defaultItemUnique)()
            })
          }, {
            name: "platformCollection",
            label: "Platform Collection",
            component: "group-list",
            fields: [(0, a.translatedField)({
              name: "platformHeading",
              label: "Enter Platform Heading",
              component: "text"
            }), (0, a.translatedField)({
              name: "platformDescription",
              label: "Platform Description",
              description: "This is the body text in the subhero.",
              component: "textarea"
            }), (0, a.translatedField)({
              name: "enablePlatformIcons",
              label: "Enable Platform Icons",
              description: "This is the body text in the subhero.",
              component: "toggle"
            }), {
              name: "platformList",
              label: "Select Platform",
              component: "group-list",
              fields: [(0, a.translatedField)({
                name: "platformItem",
                label: "Select Platform Item",
                component: "select",
                options: [{
                  label: "--- SELECT ---",
                  value: null
                }, {
                  label: "PlayStation 3",
                  value: "ps3"
                }, {
                  label: "PlayStation 4",
                  value: "ps4"
                }, {
                  label: "PlayStation 5",
                  value: "ps5"
                }, {
                  label: "Nintendo Switch",
                  value: "switch"
                }, {
                  label: "Xbox",
                  value: "xbox"
                }, {
                  label: "Xbox One",
                  value: "xboxone"
                }, {
                  label: "Xbox Series X|S",
                  value: "xboxseriesxs"
                }, {
                  label: "Xbox360",
                  value: "xbox360"
                }]
              })],
              defaultItem: () => (0, a.defaultItemUnique)(),
              itemProps: e => (0, a.itemPropsWithKey)(e, {
                label: `${e?.name??"New"} [Platform Icon]`
              })
            }],
            defaultItem: () => (0, a.defaultItemUnique)({}),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `${e?.name??"New"} ${e.type??""} [Platform]`
            })
          }, m()],
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: `${e?.name??"New"} [Sub Hero]`
          }),
          defaultItem: {
            description: "Placeholder",
            buttons: [],
            helperLink: (0, a.defaultItemUnique)(m().defaultItem ?? {})
          }
        }),
        d = () => ({
          name: "content",
          label: "Readable Content",
          description: "Edit visible logo images, title text, description text, CTAs, and legal text in here.",
          component: "group",
          fields: [(0, n.BrandsField)(), (0, a.translatedField)({
            name: "title",
            label: "Title",
            description: "This is the title text of the hero.",
            component: "text"
          }), (0, a.translatedField)({
            name: "description",
            label: "Description",
            description: "This is the body text in the hero.",
            component: "textarea"
          }), p(), c(), (0, a.translatedField)({
            name: "enablePlatforms",
            label: "Enable Platforms?",
            component: "toggle"
          }), (0, a.translatedField)({
            name: "legalText",
            label: "Legal Text",
            description: "This is the smaller text under the buttons in the hero.",
            component: "text"
          })],
          defaultItem: {
            title: "Placeholder Title",
            description: "This is a placeholder description. It has a couple sentences. Actually, more than a couple: a few!",
            ctaGroup: () => p()?.defaultItem ?? {},
            legalText: "This is tiny placeholder legal text."
          }
        }),
        p = () => ({
          name: "ctaGroup",
          label: "CTAs",
          description: "Add CTAs or an Expanding Platform Button in here.",
          component: "group",
          fields: [{
            name: "expandingButton",
            label: "Expanding Button",
            description: "Modify expanding platform button details in here.",
            component: "group",
            fields: [(0, a.translatedField)({
              name: "label",
              label: "Button Label",
              component: "text"
            }), u()]
          }, b()],
          defaultItem: {
            expandingButton: {
              label: "Placeholder",
              buttons: []
            },
            ctas: {
              buttons: []
            }
          }
        }),
        u = () => ({
          name: "buttons",
          label: "Buttons",
          description: "Buttons revealed within the expanding platform button.",
          component: "group-list",
          fields: [{
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
            }, {
              value: "questionmark",
              label: "Question Mark"
            }]
          }, (0, a.translatedField)({
            name: "href",
            label: "Link",
            component: "text"
          }), (0, a.translatedField)({
            name: "text",
            label: "Button Text (Optional, will overload selected option)",
            component: "text"
          })],
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: `Link for [${e?.platform??e?.buttonText??""}]`
          }),
          defaultItem: () => (0, a.defaultItemUnique)()
        }),
        b = () => ({
          name: "ctas",
          label: "Plain CTAs",
          description: "Modify plain CTAs (not within the expanding button).",
          component: "group",
          fields: [{
            name: "buttons",
            label: "Buttons",
            description: "Buttons revealed within the expanding platform button.",
            component: "group-list",
            fields: [(0, a.translatedField)({
              name: "label",
              label: "Button Label",
              component: "text"
            }), (0, a.translatedField)({
              name: "href",
              label: "Link",
              component: "text"
            }), {
              name: "icon",
              label: "Select Icon",
              component: "select",
              options: [{
                value: null,
                label: "-- Select an Icon --"
              }, {
                value: "play",
                label: "Play"
              }, {
                value: "questionmark",
                label: "Question Mark"
              }]
            }, {
              name: "primary",
              label: "Is this the primary CTA?",
              component: "toggle"
            }, {
              name: "type",
              label: "Type of CTA",
              description: "This is for GTM Tracking only.",
              component: "radio-group",
              direction: "horizontal",
              options: [{
                label: "Add to Wishlist",
                value: "wishlist"
              }, {
                label: "Buy Now",
                value: "buy"
              }, {
                label: "Watch Trailer",
                value: "trailer"
              }, {
                label: "Download",
                value: "download"
              }, {
                label: "Merchandise",
                value: "merchandise"
              }, {
                label: "Other",
                value: "other"
              }]
            }],
            defaultItem: () => (0, a.defaultItemUnique)({
              label: "Placeholder Label",
              href: "https://rockstargames.com/"
            })
          }]
        }),
        c = () => ({
          name: "platformCollection",
          label: "Platform Collection",
          component: "group-list",
          fields: [(0, a.translatedField)({
            name: "platformHeading",
            label: "Enter Platform Heading",
            component: "text"
          }), (0, a.translatedField)({
            name: "platformDescription",
            label: "Platform Description",
            description: "This is the body text in the subhero.",
            component: "textarea"
          })],
          defaultItem: () => (0, a.defaultItemUnique)({}),
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: `${e?.name??"New"} ${e.type??""} [Platform]`
          })
        }),
        h = () => ({
          name: "images",
          label: "Foreground and Background Images",
          description: "Images used in the foreground and the background of the hero.",
          component: "group",
          fields: [g(), f()],
          defaultItem: {
            foreground: () => g()?.defaultItem ?? {},
            background: () => f()?.defaultItem ?? {}
          }
        }),
        f = () => ({
          name: "background",
          label: "Background Image",
          component: "group",
          fields: [{
            name: "mobile",
            label: "Mobile Image",
            component: "image",
            description: "If responsive, only the mobile source is needed.",
            uploadDir: o.uploadDir
          }, {
            name: "desktop",
            label: "Desktop Image",
            component: "image",
            uploadDir: o.uploadDir
          }, {
            name: "mask",
            label: "Image Mask",
            component: "image",
            parse: o.parse,
            previewSrc: o.previewSrc,
            uploadDir: o.uploadDir
          }, {
            name: "maskEnabled",
            label: "Enable image mask?",
            component: "toggle"
          }],
          defaultItem: {
            mobile: void 0,
            desktop: void 0
          }
        }),
        g = () => ({
          name: "foreground",
          label: "Foreground Image",
          component: "group",
          fields: [...v],
          defaultItem: () => {
            let e = {};
            return v.forEach((t => {
              e = {
                ...e,
                [t.name]: t.defaultItem
              }
            })), e
          }
        }),
        x = [{
          name: "unit",
          label: "Units",
          component: "radio-group",
          direction: "horizontal",
          variant: "button",
          options: [{
            label: "px",
            value: "px"
          }, {
            label: "%",
            value: "%"
          }, {
            label: "rem",
            value: "rem"
          }, {
            label: "vw",
            value: "vw"
          }, {
            label: "vh",
            value: "vh"
          }]
        }, {
          name: "value",
          label: "Value",
          component: "text"
        }],
        I = [{
          name: "horizontal",
          label: "Move the image horizontally",
          component: "group",
          fields: x
        }, {
          name: "vertical",
          label: "Move the image vertically",
          component: "group",
          fields: x
        }, {
          name: "width",
          label: "Adjust the image width",
          component: "group",
          fields: x
        }, {
          name: "height",
          label: "Adjust the image height",
          component: "group",
          fields: x
        }],
        v = [{
          name: "mini",
          label: "Mini Image",
          component: "group",
          description: 'For below the standard "mobile" screen size. Will use the "Mobile Image" image if not defined.',
          fields: [{
            name: "image",
            label: "Mini Image",
            component: "image",
            uploadDir: o.uploadDir
          }, ...I],
          defaultItem: {
            image: void 0
          }
        }, {
          name: "mobile",
          label: "Mobile Image",
          component: "group",
          description: 'From "mobile" and up to "tablet" screen size. This image will be used as a fallback for all screen sizes.',
          fields: [{
            name: "image",
            label: "Mobile Image",
            component: "image",
            uploadDir: o.uploadDir
          }, ...I],
          defaultItem: {
            image: void 0
          }
        }, {
          name: "tablet",
          label: "Tablet Image",
          component: "group",
          description: 'From "tablet" and up to "desktop" screen size.',
          fields: [{
            name: "image",
            label: "Tablet Image",
            component: "image",
            uploadDir: o.uploadDir
          }, ...I],
          defaultItem: {
            image: void 0
          }
        }, {
          name: "desktop",
          label: "Desktop Image",
          component: "group",
          description: 'From "desktop" and up to "ultrawide" screen size. This image will be a fallback for ultrawides.',
          fields: [{
            name: "image",
            label: "Desktop Image",
            component: "image",
            uploadDir: o.uploadDir
          }, ...I],
          defaultItem: {
            image: void 0
          }
        }, {
          name: "ultrawide",
          label: "Ultrawide Image",
          component: "group",
          description: 'For "ultrawide" screen sizes and beyond.',
          fields: [{
            name: "image",
            label: "Ultrawide Image",
            component: "image",
            uploadDir: o.uploadDir
          }, ...I],
          defaultItem: {
            image: void 0
          }
        }],
        k = () => ({
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
            }), (0, a.ImageField)({
              label: "Shard Images"
            })],
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `${e?.[a.TINA_MEMOQ_PREFIX]?.title??"New"} [Shard]`
            }),
            defaultItem: () => (0, a.defaultItemUnique)({
              image: (0, a.defaultItemUnique)()
            })
          }],
          defaultItem: {
            title: "Placeholder Shards Section Title",
            shards: []
          }
        }),
        y = () => ({
          name: "hero",
          label: "Hero",
          component: "group",
          fields: [(0, a.NameField)(), {
            name: "type",
            label: "What style of of hero is this?",
            description: "Default: Gen9",
            component: "select",
            options: [{
              value: null,
              label: "--- SELECT ---"
            }, {
              value: "gen9",
              label: "Gen9"
            }, {
              value: "legacy",
              label: "Legacy"
            }]
          }, {
            name: "animated",
            label: "Do you want this Hero animated on scroll?",
            component: "toggle"
          }, d(), h(), k(), s()],
          defaultItem: {
            type: "gen9",
            animated: !0,
            content: (0, a.defaultItemUnique)(d()?.defaultItem ?? {}),
            images: (0, a.defaultItemUnique)(h()?.defaultItem ?? {}),
            shardsSection: (0, a.defaultItemUnique)(k()?.defaultItem ?? {}),
            subHero: (0, a.defaultItemUnique)(s().defaultItem ?? {})
          },
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: `${e?.name??"New"} [Hero]`
          })
        })
    }
  }
]);
//# sourceMappingURL=092ac09b578ca33373a8.js.map