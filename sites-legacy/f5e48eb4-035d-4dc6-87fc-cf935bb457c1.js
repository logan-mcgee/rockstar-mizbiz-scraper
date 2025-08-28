try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    l = (new e.Error).stack;
  l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "f5e48eb4-035d-4dc6-87fc-cf935bb457c1", e._sentryDebugIdIdentifier = "sentry-dbid-f5e48eb4-035d-4dc6-87fc-cf935bb457c1")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [2700], {
    2700: (e, l, a) => {
      a.r(l), a.d(l, {
        componentsForTinaParser: () => H,
        tinaBlockTemplates: () => Q
      });
      var t = a(27964),
        o = a(72405);
      (0, t.z9)({
        name: "title",
        label: "Title",
        component: "text"
      }), (0, t.z9)({
        name: "summary",
        label: "Summary",
        component: "textarea"
      }), o.XC, o.qg, o.z0;
      const n = () => ({
        name: "customHeaderFont",
        label: "Set Header Font",
        component: "select",
        options: [{
          label: "--- SELECT ---",
          value: null
        }, {
          label: "RDR Ultra",
          value: "rdrUltra"
        }, {
          label: "Universal Cyrillic",
          value: "universalCyrillic"
        }]
      });
      var i = a(61405);
      const r = {
        component: "select",
        name: "brand",
        label: "Brand",
        options: [{
          value: null,
          label: "-- Select Brand --"
        }, ...Object.keys(i._).map((e => ({
          value: e,
          label: i._[e]
        })))]
      };
      var m = a(70954);
      const s = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, m.jsx)("hr", {})
          }
        },
        d = function() {
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
      s("Grid"),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label").toLowerCase().split(" ").join("_")
        }("Grid"), d("style.--grid-num-columns-mobile", "Grid Number of Columns (Mobile)"), d("style.--grid-num-columns-desktop", "Grid Number of Columns (Desktop)"), s("Grid"), a(18538);
      var u = a(54108);
      a(95966), a(84343), a(8141), a(40908);
      const b = () => ({
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
          }, (0, t.z9)({
            name: "link",
            label: "Link",
            component: "text"
          }), (0, t.z9)({
            name: "label",
            label: "Button Label (Optional, will overload selected option)",
            component: "text"
          })],
          itemProps: e => (0, t.Rv)(e, {
            label: `Link for [${e?.platform??e?.buttonText??""}]`
          }),
          defaultItem: () => (0, t.Q)()
        }),
        c = () => ({
          name: "modal",
          label: "Modal Content",
          description: "Modify modal content details in here.",
          component: "group",
          fields: []
        }),
        p = () => ({
          name: "helperText",
          label: "Helper Link Section",
          component: "group",
          fields: [(0, t.z9)({
            name: "text",
            label: "Text",
            description: "This is the text above the link.",
            component: "text"
          }), (0, t.z9)({
            name: "linkText",
            label: "Link Text",
            description: "This is the text/label the link is attached to.",
            component: "text"
          }), (0, t.z9)({
            name: "link",
            label: "Link",
            component: "text"
          })],
          defaultItem: () => (0, t.Q)({
            text: "",
            linkText: "",
            link: "https://rockstargames.com/"
          })
        }),
        g = () => ({
          name: "subHero",
          label: "Sub Hero",
          component: "group",
          fields: [(0, t.z9)({
            name: "description",
            label: "Description",
            description: "This is the body text in the subhero.",
            component: "textarea"
          }), {
            name: "buttons",
            label: "Buttons",
            component: "group-list",
            fields: [(0, t.om)(), (0, t.z9)({
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
              fields: [(0, t.z9)({
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
              fields: [b()]
            }, c()],
            itemProps: e => (0, t.Rv)(e, {
              label: `${e?.name??"New"} [SubHero Button]`
            }),
            defaultItem: () => (0, t.Q)({
              helperText: (0, t.Q)(),
              link: (0, t.Q)(),
              expandingButton: (0, t.Q)()
            })
          }, {
            name: "platformCollection",
            label: "Platform Collection",
            component: "group-list",
            fields: [(0, t.z9)({
              name: "platformHeading",
              label: "Enter Platform Heading",
              component: "text"
            }), (0, t.z9)({
              name: "platformDescription",
              label: "Platform Description",
              description: "This is the body text in the subhero.",
              component: "textarea"
            }), (0, t.z9)({
              name: "enablePlatformIcons",
              label: "Enable Platform Icons",
              description: "This is the body text in the subhero.",
              component: "toggle"
            }), {
              name: "platformList",
              label: "Select Platform",
              component: "group-list",
              fields: [(0, t.z9)({
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
              defaultItem: () => (0, t.Q)(),
              itemProps: e => (0, t.Rv)(e, {
                label: `${e?.name??"New"} [Platform Icon]`
              })
            }],
            defaultItem: () => (0, t.Q)({}),
            itemProps: e => (0, t.Rv)(e, {
              label: `${e?.name??"New"} ${e.type??""} [Platform]`
            })
          }, p()],
          itemProps: e => (0, t.Rv)(e, {
            label: `${e?.name??"New"} [Sub Hero]`
          }),
          defaultItem: {
            description: "",
            buttons: [],
            helperLink: (0, t.Q)(p().defaultItem ?? {})
          }
        }),
        f = () => ({
          name: "content",
          label: "Readable Content",
          description: "Edit visible logo images, title text, description text, CTAs, and legal text in here.",
          component: "group",
          fields: [{
            name: "brands",
            label: "Brands",
            component: "group-list",
            description: "Show brand icons in a row",
            fields: [r],
            itemProps: e => (0, t.Rv)(e, {
              label: `Brand [${e?.brand??null}]`
            })
          }, (0, t.z9)({
            name: "title",
            label: "Title",
            description: "This is the title text of the hero.",
            component: "text"
          }), (0, t.z9)({
            name: "description",
            label: "Description",
            description: "This is the body text in the hero.",
            component: "textarea"
          }), v(), y(), (0, t.z9)({
            name: "enablePlatforms",
            label: "Enable Platforms?",
            component: "toggle"
          }), (0, t.z9)({
            name: "legalText",
            label: "Legal Text",
            description: "This is the smaller text under the buttons in the hero.",
            component: "text"
          })],
          defaultItem: {
            title: "",
            description: "",
            ctaGroup: () => v()?.defaultItem ?? {},
            legalText: ""
          }
        }),
        v = () => ({
          name: "ctaGroup",
          label: "CTAs",
          description: "Add CTAs or an Expanding Platform Button in here.",
          component: "group",
          fields: [{
            name: "expandingButton",
            label: "Expanding Button",
            description: "Modify expanding platform button details in here.",
            component: "group",
            fields: [(0, t.z9)({
              name: "label",
              label: "Button Label",
              component: "text"
            }), h()]
          }, x()],
          defaultItem: {
            expandingButton: {
              label: "",
              buttons: []
            },
            ctas: {
              buttons: []
            }
          }
        }),
        h = () => ({
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
          }, (0, t.z9)({
            name: "href",
            label: "Link",
            component: "text"
          }), (0, t.z9)({
            name: "text",
            label: "Button Text (Optional, will overload selected option)",
            component: "text"
          })],
          itemProps: e => (0, t.Rv)(e, {
            label: `Link for [${e?.platform??e?.buttonText??""}]`
          }),
          defaultItem: () => (0, t.Q)()
        }),
        x = () => ({
          name: "ctas",
          label: "Plain CTAs",
          description: "Modify plain CTAs (not within the expanding button).",
          component: "group",
          fields: [{
            name: "buttons",
            label: "Buttons",
            description: "Buttons revealed within the CTAs group.",
            component: "group-list",
            fields: [(0, t.om)(), (0, t.z9)({
              name: "label",
              label: "Button Label",
              component: "text"
            }), (0, t.z9)({
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
            defaultItem: () => (0, t.Q)({
              label: "",
              href: "https://rockstargames.com/"
            })
          }]
        }),
        y = () => ({
          name: "platformCollection",
          label: "Platform Collection",
          component: "group-list",
          fields: [(0, t.z9)({
            name: "platformHeading",
            label: "Enter Platform Heading",
            component: "text"
          }), (0, t.z9)({
            name: "platformDescription",
            label: "Platform Description",
            description: "This is the body text in the subhero.",
            component: "textarea"
          })],
          defaultItem: () => (0, t.Q)({}),
          itemProps: e => (0, t.Rv)(e, {
            label: `${e?.name??"New"} ${e.type??""} [Platform]`
          })
        }),
        I = () => ({
          name: "images",
          label: "Foreground and Background Images",
          description: "Images used in the foreground and the background of the hero.",
          component: "group",
          fields: [S(), k()],
          defaultItem: {
            foreground: () => S()?.defaultItem ?? {},
            background: () => k()?.defaultItem ?? {}
          }
        }),
        k = () => ({
          name: "background",
          label: "Background Image",
          component: "group",
          fields: [...(0, t.a2)({}).fields, {
            name: "backgroundImageHeight",
            label: "Background Image Height",
            component: "text"
          }, {
            name: "backgroundColor",
            label: "Color Behind Layered Images (ex: #000)",
            component: "text"
          }, {
            name: "mask",
            label: "Image Mask",
            component: "image",
            parse: o.qg,
            previewSrc: o.z0,
            uploadDir: o.XC
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
        S = () => ({
          name: "foreground",
          label: "Foreground Image",
          component: "group",
          fields: [...w],
          defaultItem: () => {
            let e = {};
            return w.forEach((l => {
              e = {
                ...e,
                [l.name]: l.defaultItem
              }
            })), e
          }
        }),
        T = [{
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
        C = [{
          name: "horizontal",
          label: "Move the image horizontally",
          component: "group",
          fields: T
        }, {
          name: "vertical",
          label: "Move the image vertically",
          component: "group",
          fields: T
        }, {
          name: "width",
          label: "Adjust the image width",
          component: "group",
          fields: T
        }, {
          name: "height",
          label: "Adjust the image height",
          component: "group",
          fields: T
        }],
        w = [{
          name: "mini",
          label: "Mini Image",
          component: "group",
          description: 'For below the standard "mobile" screen size. Will use the "Mobile Image" image if not defined.',
          fields: [(0, t.SX)({
            name: "image",
            label: "Mini Image Sources"
          }), ...C],
          defaultItem: {
            image: void 0
          }
        }, {
          name: "mobile",
          label: "Mobile Image",
          component: "group",
          description: 'From "mobile" and up to "tablet" screen size. This image will be used as a fallback for all screen sizes.',
          fields: [(0, t.SX)({
            name: "image",
            label: "Mobile Image Sources"
          }), ...C],
          defaultItem: {
            image: void 0
          }
        }, {
          name: "tablet",
          label: "Tablet Image",
          component: "group",
          description: 'From "tablet" and up to "desktop" screen size.',
          fields: [(0, t.SX)({
            name: "image",
            label: "Tablet Image Sources"
          }), ...C],
          defaultItem: {
            image: void 0
          }
        }, {
          name: "desktop",
          label: "Desktop Image",
          component: "group",
          description: 'From "desktop" and up to "ultrawide" screen size. This image will be a fallback for ultrawides.',
          fields: [(0, t.SX)({
            name: "image",
            label: "Desktop Image Sources"
          }), ...C],
          defaultItem: {
            image: void 0
          }
        }, {
          name: "ultrawide",
          label: "Ultrawide Image",
          component: "group",
          description: 'For "ultrawide" screen sizes and beyond.',
          fields: [(0, t.SX)({
            name: "image",
            label: "Ultrawide Image Sources"
          }), ...C],
          defaultItem: {
            image: void 0
          }
        }],
        z = () => ({
          name: "shardsSection",
          label: "Shards Configuration",
          description: "Add a carousel of shard-style images with text to the bottom of the hero.",
          component: "group",
          fields: [(0, t.z9)({
            name: "title",
            label: "Title",
            component: "text",
            description: "Title to be displayed on top of the shards carousel."
          }), {
            name: "shards",
            label: "Shards",
            component: "group-list",
            fields: [(0, t.z9)({
              name: "title",
              label: "Title",
              component: "text",
              description: "Text to be overlayed on top of the image."
            }), (0, t.CT)({
              label: "Shard Images"
            })],
            itemProps: e => (0, t.Rv)(e, {
              label: `${e?.[t.Qw]?.title??"New"} [Shard]`
            }),
            defaultItem: () => (0, t.Q)({
              image: (0, t.Q)()
            })
          }],
          defaultItem: {
            title: "",
            shards: []
          }
        }),
        P = () => ({
          name: "hero",
          label: "Hero",
          component: "group",
          fields: [(0, t.om)(), {
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
          }, f(), I(), z(), g()],
          defaultItem: {
            type: "gen9",
            animated: !0,
            content: (0, t.Q)(f()?.defaultItem ?? {}),
            images: (0, t.Q)(I()?.defaultItem ?? {}),
            shardsSection: (0, t.Q)(z()?.defaultItem ?? {}),
            subHero: (0, t.Q)(g().defaultItem ?? {})
          },
          itemProps: e => (0, t.Rv)(e, {
            label: `${e?.name??"New"} [Hero]`
          })
        });
      var B = a(17523);
      const M = e => {
          let {
            field: l,
            meta: a,
            input: t
          } = e;
          return (0, m.jsxs)(u.cm, {
            field: l,
            meta: a,
            children: [(0, m.jsx)("input", {
              type: "range",
              min: "0",
              max: "1",
              step: "0.05",
              name: l.name,
              id: l.id,
              ...t
            }), (0, m.jsx)("br", {}), (0, m.jsxs)("sup", {
              children: ["Value:", " ", t.value]
            })]
          })
        },
        D = () => ({
          name: "backgroundImageAndMask",
          label: "Background Image and Mask",
          description: "Images used for the background with an image mask.",
          component: "group",
          fields: [R(), L()],
          defaultItem: (0, t.Q)({
            foreground: () => R()?.defaultItem ?? {},
            background: () => L()?.defaultItem ?? {}
          })
        }),
        R = () => ({
          name: "backgroundImage",
          label: "Background Image",
          component: "group",
          fields: [{
            name: "mobile",
            label: "Mobile Image",
            component: "image",
            description: "If responsive, only the mobile source is needed.",
            parse: o.qg,
            previewSrc: o.z0,
            uploadDir: o.XC
          }, {
            name: "desktop",
            label: "Desktop Image",
            component: "image",
            parse: o.qg,
            previewSrc: o.z0,
            uploadDir: o.XC
          }, (0, t.z9)({
            name: "backgroundAttachment",
            label: "Background Attachment",
            component: "select",
            options: [{
              label: "--- Select ---",
              value: null
            }, {
              label: "scroll",
              value: "scroll"
            }, {
              label: "fixed",
              value: "fixed"
            }, {
              label: "local",
              value: "local"
            }, {
              label: "inherit",
              value: "inherit"
            }, {
              label: "initial",
              value: "initial"
            }, {
              label: "revert",
              value: "revert"
            }, {
              label: "revert-layer",
              value: "revert-layer"
            }, {
              label: "unset",
              value: "unset"
            }]
          }), (0, t.z9)({
            name: "backgroundClip",
            label: "Background Clip",
            component: "select",
            options: [{
              label: "--- Select ---",
              value: null
            }, {
              label: "border-box",
              value: "border-box"
            }, {
              label: "padding-box",
              value: "padding-box"
            }, {
              label: "content-box",
              value: "content-box"
            }, {
              label: "text",
              value: "text"
            }, {
              label: "inherit",
              value: "inherit"
            }, {
              label: "initial",
              value: "initial"
            }, {
              label: "revert",
              value: "revert"
            }, {
              label: "revert-layer",
              value: "revert-layer"
            }, {
              label: "unset",
              value: "unset"
            }]
          }), (0, t.z9)({
            name: "backgroundColor",
            label: "Background Color",
            component: "color"
          }), (0, t.z9)({
            name: "backgroundOrigin",
            label: "Background Orgin",
            component: "select",
            options: [{
              label: "--- Select ---",
              value: null
            }, {
              label: "border-box",
              value: "border-box"
            }, {
              label: "padding-box",
              value: "padding-box"
            }, {
              label: "content-box",
              value: "content-box"
            }]
          }), (0, t.z9)({
            name: "backgroundPosition",
            label: "Background Position",
            component: "text"
          }), (0, t.z9)({
            name: "backgroundRepeat",
            label: "Background Repeat",
            component: "text"
          }), (0, t.z9)({
            name: "backgroundSize",
            label: "Background Size",
            component: "text"
          })],
          defaultItem: (0, t.Q)({})
        }),
        L = () => ({
          name: "backgroundImageMask",
          label: "Background Image Mask",
          component: "group",
          fields: [{
            name: "mobile",
            label: "Mobile Image",
            component: "image",
            description: "If responsive, only the mobile source is needed.",
            parse: o.qg,
            previewSrc: o.z0,
            uploadDir: o.XC
          }, {
            name: "desktop",
            label: "Desktop Image",
            component: "image",
            parse: o.qg,
            previewSrc: o.z0,
            uploadDir: o.XC
          }],
          defaultItem: (0, t.Q)({})
        }),
        A = [{
          name: "backgroundFields",
          label: "Background Color Fields",
          component: "group",
          fields: [{
            label: "Background Color",
            name: "style.--legacy-background-color",
            description: "Set the background color",
            component: "color"
          }, {
            label: "CSS for Background Color (Optional)",
            description: "ex: linear-gradient(to bottom, red, blue) or #000000 or rgba(0,0,0,0.5)",
            name: "style.--legacy-custom-background",
            component: "text"
          }]
        }],
        Q = {
          legacy: {
            LegacyPageTemplate: () => ({
              label: "Legacy Game Page Template",
              fields: [{
                name: "titleSlug",
                label: "Title Slug",
                description: 'Used for retreiving game data. Example: "GTAOnline", etc',
                component: "text"
              }, (0, t.UP)({
                name: "tag",
                label: "Tag for this page (used in places like the video carousel)."
              }), {
                name: "title",
                label: "Title",
                description: "For internal use only",
                component: "text"
              }, {
                name: "headerFont",
                label: "Set Page's Header Font",
                component: "select",
                options: [{
                  label: "--- SELECT ---",
                  value: null
                }, {
                  label: "RDR Ultra",
                  value: "rdrUltra"
                }, {
                  label: "Universal Cyrillic",
                  value: "universalCyrillic"
                }, {
                  label: "Helvetica Now Text",
                  value: "helveticaNow"
                }]
              }, P(), ...A, {
                name: "features",
                label: "Feature Block Sections",
                component: "group-list",
                fields: [{
                  name: "customHeaderFont",
                  label: "Set Header Font",
                  component: "select",
                  options: [{
                    label: "--- SELECT ---",
                    value: null
                  }, {
                    label: "RDR Ultra",
                    value: "rdrUltra"
                  }, {
                    label: "Universal Cyrillic",
                    value: "universalCyrillic"
                  }, {
                    label: "Helvetica Display Now",
                    value: "helveticaNow"
                  }]
                }, {
                  name: "headerLogo",
                  label: "Set Header Logo",
                  component: "group",
                  fields: [(0, t.CT)({
                    label: "Logo"
                  }), {
                    name: "setLogoAsDefault",
                    label: "Set Logo as Default",
                    component: "toggle"
                  }, (0, t.z9)({
                    name: "maxHeight",
                    label: "Max Height",
                    component: "text"
                  }), (0, t.z9)({
                    name: "maxWidth",
                    label: "Max Width",
                    component: "text"
                  })],
                  defaultItem: () => (0, t.Q)()
                }, (0, t.z9)({
                  name: "title",
                  label: "Title",
                  component: "text"
                }), (0, t.z9)({
                  name: "body",
                  label: "Body Text",
                  component: "textarea"
                }), (0, t.z9)({
                  name: "footnote",
                  label: "Footnote",
                  component: "textarea"
                }), (0, t.CT)({}), (0, t.z9)({
                  name: "image_on_right",
                  label: "Place the image on the right side?",
                  component: "toggle"
                }), (0, B.VideoField)({
                  name: "videoId",
                  label: "Featured Video"
                }), (0, t.z9)({
                  name: "setVideoAsDefault",
                  label: "Set Video as Default",
                  component: "toggle"
                })],
                itemProps: e => (0, t.Rv)(e, {
                  label: `${e?.[t.Qw]?.title??"New"} [Feature]`
                }),
                defaultItem: () => (0, t.Q)()
              }, {
                name: "featureBlockBackgroundImageGroup",
                label: "Feature Block Background",
                component: "group",
                fields: [{
                  name: "mobile",
                  label: "Mobile Image/Mask Details",
                  component: "group",
                  fields: [{
                    name: "image",
                    label: "Mobile Image",
                    component: "image",
                    parse: o.qg,
                    previewSrc: o.z0,
                    uploadDir: o.XC
                  }]
                }, {
                  name: "desktop",
                  label: "Desktop Image/Mask Details",
                  component: "group",
                  fields: [{
                    name: "image",
                    label: "Desktop Image",
                    component: "image",
                    parse: o.qg,
                    previewSrc: o.z0,
                    uploadDir: o.XC
                  }]
                }, {
                  name: "topMask",
                  label: "Top Mask Image Details",
                  component: "group",
                  fields: [{
                    name: "mask",
                    label: "Desktop Mask",
                    component: "image",
                    parse: o.qg,
                    previewSrc: o.z0,
                    uploadDir: o.XC
                  }]
                }, {
                  name: "bottomMask",
                  label: "Bottom Mask Image Details",
                  component: "group",
                  fields: [{
                    name: "mask",
                    label: "Desktop Mask",
                    component: "image",
                    parse: o.qg,
                    previewSrc: o.z0,
                    uploadDir: o.XC
                  }]
                }],
                defaultItem: () => (0, t.Q)()
              }, {
                name: "imageGallery",
                label: "Image Gallery",
                component: "group",
                fields: [(0, t.z9)({
                  name: "title",
                  label: "Gallery Title",
                  component: "text"
                }), {
                  name: "collections",
                  label: "Image Gallery Collections",
                  component: "group-list",
                  fields: [(0, t.z9)({
                    name: "name",
                    label: "Collection Name",
                    description: "In most cases, this is the console the images are from.",
                    component: "text"
                  }), (0, t.z9)({
                    name: "isHidden",
                    label: "Hide Collection",
                    component: "toggle"
                  }), {
                    name: "platform",
                    label: "Select Platform Icon",
                    component: "select",
                    options: [{
                      label: "",
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
                    }, {
                      label: "PC",
                      value: "pc"
                    }]
                  }, {
                    name: "sections",
                    label: "Image Gallery Sections",
                    component: "group-list",
                    fields: [(0, t.om)(), {
                      name: "type",
                      label: "Layout for this Group",
                      component: "select",
                      options: [{
                        value: "null",
                        label: "--- Select a type ---"
                      }, {
                        value: "1x1",
                        label: "1x1"
                      }, {
                        value: "2x2",
                        label: "2x2"
                      }]
                    }, {
                      name: "images",
                      label: "Images",
                      component: "group-list",
                      fields: [{
                        name: "name",
                        label: "Internal name (Description of Image)",
                        component: "text"
                      }, (0, t.CT)({})],
                      defaultItem: () => (0, t.Q)(),
                      itemProps: e => (0, t.Rv)(e, {
                        label: `${e?.name??"New"} [Image]`
                      })
                    }],
                    defaultItem: () => (0, t.Q)({}),
                    itemProps: e => (0, t.Rv)(e, {
                      label: `${e?.name??"New"} ${e.type??""} [Image Section]`
                    })
                  }],
                  defaultItem: () => (0, t.Q)(),
                  itemProps: e => (0, t.Rv)(e, {
                    label: `${e?._memoq?.name??"New"} [Gallery Collection]`
                  })
                }, {
                  name: "paginationSettings",
                  label: "Pagination Settings",
                  component: "group",
                  fields: [{
                    name: "paginationEnabled",
                    label: "Enable Pagination",
                    component: "toggle",
                    defaultValue: !0
                  }, {
                    name: "sectionsPerPage",
                    label: "Number of sections per page",
                    component: "select",
                    options: [{
                      label: "2",
                      value: 2
                    }, {
                      label: "4",
                      value: 4
                    }, {
                      label: "6",
                      value: 6
                    }, {
                      label: "8",
                      value: 8
                    }, {
                      label: "10",
                      value: 10
                    }, {
                      label: "12",
                      value: 12
                    }, {
                      label: "14",
                      value: 14
                    }, {
                      label: "16",
                      value: 16
                    }, {
                      label: "18",
                      value: 18
                    }, {
                      label: "20",
                      value: 20
                    }],
                    defaultValue: 4
                  }, {
                    name: "paginationPosition",
                    label: "Where would you like the pagination placed?",
                    component: "select",
                    options: [{
                      label: "Left Align",
                      value: "start"
                    }, {
                      label: "Right Align",
                      value: "end"
                    }, {
                      label: "Center",
                      value: "center"
                    }],
                    defaultValue: "center"
                  }]
                }, (0, t.z9)({
                  name: "customHeaderFont",
                  label: "Set Header Font",
                  component: "select",
                  options: [{
                    label: "--- SELECT ---",
                    value: null
                  }, {
                    label: "RDR Ultra",
                    value: "rdrUltra"
                  }, {
                    label: "Universal Cyrillic",
                    value: "universalCyrillic"
                  }, {
                    label: "Helvetica Now",
                    value: "helveticaNow"
                  }]
                })],
                itemProps: e => (0, t.Rv)(e, {
                  label: `${e?.name??"New"} [Image Gallery]`
                }),
                defaultItem: () => (0, t.Q)()
              }, {
                name: "highlightCollection",
                label: "Highlight Collection",
                component: "group",
                fields: [(0, t.z9)({
                  name: "subtitle",
                  label: "Subtitle",
                  component: "text"
                }), {
                  name: "highlights",
                  label: "Highlights",
                  component: "group-list",
                  fields: [(0, t.z9)({
                    name: "title",
                    label: "Title",
                    component: "text"
                  }), (0, t.z9)({
                    name: "summary",
                    label: "Summary",
                    component: "textarea"
                  }), {
                    label: "Image",
                    name: "image",
                    component: "image",
                    uploadDir: o.XC,
                    parse: o.qg,
                    previewSrc: o.z0
                  }],
                  defaultItem: () => (0, t.Q)(),
                  itemProps: e => (0, t.Rv)(e, {
                    label: `${e?._memoq?.name??"New"} [Highlight Item]`
                  })
                }, {
                  name: "blockSettings",
                  label: "Block Settings",
                  component: "group",
                  fields: [n(), {
                    name: "navigationEnabled",
                    label: "Enable Navigation Controls",
                    component: "toggle",
                    defaultValue: !0
                  }]
                }],
                defaultItem: () => (0, t.Q)(),
                itemProps: e => (0, t.Rv)(e, {
                  label: `${e?.[t.Qw]?.title??"NEW"} [Highlights]`
                })
              }, {
                name: "relatedLinks",
                label: "Related Links",
                component: "group",
                fields: [(0, t.z9)({
                  name: "title",
                  label: "Section Title",
                  component: "text"
                }), {
                  name: "buttons",
                  label: "Buttons",
                  component: "group-list",
                  fields: [{
                    name: "name",
                    label: "Name",
                    description: "Internal Use Only",
                    component: "text"
                  }, (0, t.z9)({
                    name: "title",
                    label: "Title",
                    component: "text"
                  }), (0, t.z9)({
                    name: "subtitle",
                    label: "Subtitle",
                    description: "Tiny text above the main title",
                    component: "text"
                  }), {
                    name: "cardType",
                    label: "Select a card type",
                    component: "select",
                    options: [{
                      label: "",
                      value: null
                    }, {
                      label: "Artwork",
                      value: "artwork"
                    }, {
                      label: "Audio",
                      value: "audio"
                    }, {
                      label: "Video",
                      value: "video"
                    }, {
                      label: "Download",
                      value: "download"
                    }, {
                      label: "Shopping Cart",
                      value: "shopping-cart"
                    }]
                  }, (0, t.z9)({
                    name: "textColor",
                    label: "Text Color",
                    component: "color"
                  }), (0, t.z9)({
                    name: "link",
                    label: "Link",
                    component: "text"
                  }), {
                    name: "justifyContentVertically",
                    label: "How would you like the content aligned vertically?",
                    component: "select",
                    options: [{
                      label: "--- Select ---",
                      value: null
                    }, {
                      label: "Top",
                      value: "flex-start"
                    }, {
                      label: "Center",
                      value: "center"
                    }, {
                      label: "Bottom",
                      value: "flex-end"
                    }]
                  }, {
                    name: "justifyContentHorizontally",
                    label: "How would you like the content aligned horizontally?",
                    component: "select",
                    options: [{
                      label: "--- Select ---",
                      value: null
                    }, {
                      label: "Left",
                      value: "start"
                    }, {
                      label: "Center",
                      value: "center"
                    }, {
                      label: "Right",
                      value: "end"
                    }]
                  }, {
                    name: "gradient",
                    label: "Gradient Colors",
                    component: "group",
                    fields: [{
                      name: "angle",
                      label: "Angle of Gradient",
                      component: "text"
                    }, {
                      name: "startColor",
                      label: "Gradient Start Color",
                      component: "color",
                      colorFormat: "rgb"
                    }, {
                      name: "startOpacity",
                      label: "Enter Gradient Opacity (range: 0.00 - 1.00)",
                      component: M
                    }, {
                      name: "endColor",
                      label: "Gradient End Color",
                      component: "color",
                      colorFormat: "rgb"
                    }, {
                      name: "endOpacity",
                      label: "Enter Gradient Opacity (range: 0.00 - 1.00)",
                      component: M
                    }, {
                      name: "endPercentage",
                      label: "Percentage Along Gradient Where End Color Begins",
                      component: "text"
                    }]
                  }, {
                    name: "images",
                    label: "Button Background Images",
                    component: "group",
                    fields: [{
                      name: "mobile",
                      label: "Mobile Image",
                      component: "group",
                      fields: [{
                        name: "aspectRatio",
                        label: "Image Aspect Ratio",
                        component: "select",
                        options: [{
                          label: "--- Select ---",
                          value: null
                        }, {
                          label: "1/1",
                          value: "1/1"
                        }, {
                          label: "16/9",
                          value: "16/9"
                        }, {
                          label: "4/3",
                          value: "4/3"
                        }, {
                          label: "3/2",
                          value: "3/2"
                        }]
                      }, {
                        name: "image",
                        label: "Image File",
                        component: "image",
                        uploadDir: o.XC
                      }]
                    }, {
                      name: "desktop",
                      label: "Desktop Image",
                      component: "group",
                      fields: [{
                        name: "aspectRatio",
                        label: "Image Aspect Ratio",
                        component: "select",
                        options: [{
                          label: "--- Select ---",
                          value: null
                        }, {
                          label: "1/1",
                          value: "1/1"
                        }, {
                          label: "16/9",
                          value: "16/9"
                        }, {
                          label: "4/3",
                          value: "4/3"
                        }, {
                          label: "3/2",
                          value: "3/2"
                        }]
                      }, {
                        name: "image",
                        label: "Image File",
                        component: "image",
                        uploadDir: o.XC
                      }]
                    }]
                  }],
                  defaultItem: () => (0, t.Q)(),
                  itemProps: e => (0, t.Rv)(e, {
                    label: `${e?.subtitle??"New"} [Related Button]`
                  })
                }],
                defaultItem: () => (0, t.Q)()
              }, {
                name: "videoProps",
                label: "Video Section",
                description: "Section title, video, playlist options.",
                component: "group",
                fields: [(0, t.z9)({
                  name: "sectionLabel",
                  label: "Section Label",
                  component: "text"
                }), (0, B.VideoField)(), (0, t.UP)({
                  name: "videoTag",
                  label: "Tag for this Video"
                }), (0, t.z9)({
                  name: "playlistTitle",
                  label: "Playlist Title",
                  component: "text"
                }), {
                  name: "--playlist-background-color",
                  label: "Background Color For Playlist",
                  description: "Css property for background color (Ex: rgba(0,0,0,0.1) or #000 or red)",
                  component: "text"
                }],
                defaultItem: () => (0, t.Q)({})
              }, {
                name: "fob",
                label: "Front of Box/Buy Now Prompt",
                component: "group",
                fields: [(0, t.z9)({
                  name: "title",
                  label: "Title",
                  component: "text"
                }), (0, t.z9)({
                  name: "body",
                  label: "Body Text",
                  component: "textarea"
                }), {
                  name: "buttonCollections",
                  label: "Section of Button(s).",
                  description: "Add one or more button groups.",
                  component: "group-list",
                  fields: [(0, t.om)(), (0, t.z9)({
                    name: "label",
                    label: "Group Label",
                    component: "text"
                  }), {
                    name: "buttonStyle",
                    label: "Platform Button Style",
                    component: "select",
                    options: [{
                      value: "",
                      label: "-- Select a Style --"
                    }, {
                      value: "border",
                      label: "Button With Border"
                    }, {
                      value: "borderless",
                      label: "Borderless Button"
                    }]
                  }, (0, t.Vz)()],
                  defaultItem: () => (0, t.Q)({}),
                  itemProps: e => (0, t.Rv)(e, {
                    label: `${e?.name??"New"} [Button Collection]`
                  })
                }, (0, t.CT)({
                  label: "Front of Box Image"
                }), D()],
                defaultItem: (0, t.Q)({
                  backgroundImageAndMask: (0, t.Q)(D()?.defaultItem ?? {})
                }),
                itemProps: e => (0, t.Rv)(e, {
                  label: `${e?.name??"New"} [FOB]`
                })
              }, {
                name: "tinaModuleId",
                component: "tina-module-selector",
                variables: {
                  types: ["deck"]
                },
                label: "Other Content"
              }, {
                label: "CSS Variables",
                name: "style",
                description: "Override CSS Variables",
                component: "group",
                fields: [{
                  label: "Header Multiplier",
                  name: "--header-multiplier",
                  description: "Set the --header-multiplier",
                  component: "text"
                }, {
                  label: "Font Size Multiplier",
                  name: "fontSize",
                  description: "Shift all font sizes by a particular value",
                  component: "select",
                  options: [{
                    value: "",
                    label: "-- Select Font Size Multiplier --"
                  }, {
                    value: "0.5em",
                    label: "Much smaller (x0.5)"
                  }, {
                    value: "0.75em",
                    label: "Smaller (x0.75)"
                  }, {
                    value: "1.25em",
                    label: "Bigger (x1.25)"
                  }, {
                    value: "1.5em",
                    label: "Much Bigger (x1.5)"
                  }]
                }]
              }],
              defaultItem: () => (0, t.Q)({
                fob: (0, t.Q)({
                  expandingButton: (0, t.Q)()
                }),
                hero: (0, t.Q)(P().defaultItem),
                imageGallery: (0, t.Q)(),
                relatedLinks: (0, t.Q)(),
                videoProps: (0, t.Q)({}),
                featureBlockBackgroundImageGroup: (0, t.Q)({})
              }),
              itemProps: e => (0, t.Rv)(e, {
                label: `${e?.[t.Qw]?.title??"NEW"} [Legacy Game Page]`
              })
            })
          }
        };
      var G = a(91181),
        E = a(87330),
        N = a(25406);
      const H = {
        HighlightsItem: E.HighlightsItem,
        legacy: {
          LegacyPageTemplate: N.A
        },
        gen9: {
          TinaWrapper: G.A
        }
      }
    },
    61405: (e, l, a) => {
      a.d(l, {
        J: () => o,
        _: () => t
      });
      const t = {
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
        },
        o = e => t[e] || e
    }
  }
]);