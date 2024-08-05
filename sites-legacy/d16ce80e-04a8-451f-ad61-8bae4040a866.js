! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      l = (new Error).stack;
    l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "d16ce80e-04a8-451f-ad61-8bae4040a866", e._sentryDebugIdIdentifier = "sentry-dbid-d16ce80e-04a8-451f-ad61-8bae4040a866")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [247], {
    24247: (e, l, a) => {
      "use strict";
      a.r(l), a.d(l, {
        componentsForTinaParser: () => z,
        tinaBlockTemplates: () => V
      });
      var t = a(55140),
        n = a(28089);
      (0, t.translatedField)({
        name: "title",
        label: "Title",
        component: "text"
      }), (0, t.translatedField)({
        name: "summary",
        label: "Summary",
        component: "textarea"
      }), n.uploadDir, n.parse, n.previewSrc;
      const i = () => ({
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
        }),
        o = [{
          value: "",
          label: "-- Select a Size --"
        }, {
          value: "xs",
          label: "Extra Small (16x9)"
        }, {
          value: "sm",
          label: "Small (1x1)"
        }, {
          value: "md",
          label: "Medium (16x9)"
        }, {
          value: "lg",
          label: "Large (1x1)"
        }, {
          value: "xl",
          label: "Extra Large (16x9)"
        }, {
          value: "fob",
          label: "Front of Box (64x79)"
        }, {
          value: "custom",
          label: "Full Width (custom)"
        }],
        d = {
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
          }, {
            value: "rdo",
            label: "Red Dead Online"
          }, {
            value: "rdr2",
            label: "Read Dead Redemption 2"
          }, {
            value: "bully",
            label: "Bully"
          }, {
            value: "bullySE",
            label: "Bully: Special Edition"
          }, {
            value: "gta1",
            label: "Grand Theft Auto I"
          }, {
            value: "gta2black",
            label: "Grand Theft Auto II (black logo)"
          }, {
            value: "gta2white",
            label: "Grand Theft Auto II (white logo)"
          }, {
            value: "gta3black",
            label: "Grand Theft Auto III (black logo)"
          }, {
            value: "gta3white",
            label: "Grand Theft Auto III (white logo)"
          }, {
            value: "gta4",
            label: "Grand Theft Auto IV"
          }, {
            value: "gtabogt",
            label: "Grand Theft Auto: The Ballad of Gay Tony"
          }, {
            value: "gtacw",
            label: "Grand Theft Auto: Chinatown Wars"
          }, {
            value: "gtalc",
            label: "Grand Theft Auto: Libery City"
          }, {
            value: "gtalcs",
            label: "Grand Theft Auto: Libery City Stories"
          }, {
            value: "gtavc",
            label: "Grand Theft Auto: Vice City"
          }, {
            value: "gtavcs",
            label: "Grand Theft Auto: Vice City Stories"
          }, {
            value: "gtatlad",
            label: "Grand Theft Auto: The Lost and the Damned"
          }, {
            value: "lanoire",
            label: "L.A. Noire"
          }, {
            value: "manhunt1",
            label: "Manhunt"
          }, {
            value: "manhunt2",
            label: "Manhunt 2"
          }, {
            value: "maxpayne1",
            label: "Max Payne"
          }, {
            value: "maxpayne2",
            label: "Max Payne 2"
          }, {
            value: "maxpayne3",
            label: "Max Payne 3"
          }, {
            value: "mc1",
            label: "Midnight Club"
          }, {
            value: "mc2",
            label: "Midnight Club II"
          }, {
            value: "mc3",
            label: "Midnight Club III Dub Edition"
          }, {
            value: "mc3remix",
            label: "Midnight Club III Dub Edition REMIX"
          }, {
            value: "mcla",
            label: "Midnight Club Los Angeles"
          }, {
            value: "mclaremix",
            label: "Midnight Club Los Angeles REMIX"
          }, {
            value: "rdr1",
            label: "Read Dead Redemption"
          }, {
            value: "rdr1rsp",
            label: "Read Dead Redemption (Rockstar Presents Ver)"
          }, {
            value: "rdrevolver",
            label: "Read Dead Revolver"
          }, {
            value: "rdrun",
            label: "Read Dead Redemption Undead Nightmare"
          }, {
            value: "sr1",
            label: "Smuggler's Run"
          }, {
            value: "sr2",
            label: "Smuggler's Run 2"
          }, {
            value: "srwz",
            label: "Smuggler's Run Warzones"
          }, {
            value: "tabletennis",
            label: "Table Tennis "
          }, {
            value: "warriors",
            label: "Warriors"
          }, {
            value: "lossantoscustoms",
            label: "Los Santos Customs"
          }]
        };
      var r = a(46632);
      const s = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, r.jsx)("hr", {})
          }
        },
        m = function() {
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
        }("Grid"), m("style.--grid-num-columns-mobile", "Grid Number of Columns (Mobile)"), m("style.--grid-num-columns-desktop", "Grid Number of Columns (Desktop)"), s("Grid"), a(73379), a(58407);
      var u = a(33809);
      a(50048);
      var c = a(71403),
        p = a(72956),
        b = a.n(p);
      a(74401), a(42756);
      const {
        sanitize: g
      } = b(), {
        sanitize: v
      } = b(), f = o.filter((e => {
        let {
          value: l
        } = e;
        return "clr" !== l && "custom" !== l
      })), h = () => ({
        label: "Deck",
        component: "group",
        fields: [(0, t.NameField)(), (0, t.translatedField)({
          name: "title",
          label: "Title",
          component: "text"
        }), (0, t.translatedField)({
          name: "titleBadge",
          label: "Title Badge",
          description: "This text will appear next to the title text as a yellow badge.",
          component: "text"
        }), (0, t.translatedField)({
          name: "description",
          label: "Description",
          description: "Text that is displayed in between the Title and the row of cards.",
          component: "text"
        }), {
          name: "cards",
          label: "Cards",
          component: "group-list",
          fields: [(0, t.NameField)(), {
            component: "tina-module-selector",
            variables: {
              types: ["card", "image-gallery-card", "text-card", "clr-card", "cover-card"]
            },
            label: "Card",
            name: "id"
          }],
          defaultItem: () => (0, t.defaultItemUnique)(),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `Card [${e?.name??e?.id??null}]`
          })
        }, {
          name: "size",
          label: "Card Size",
          description: "Which kind of cards should be displayed? (If blank, falls back to each card's configuration.)",
          component: "select",
          options: o
        }, {
          name: "customAspectRatio",
          label: "(OPTIONAL: FOR LINKOUTS ONLY) Custom Aspect Ratio",
          description: "If 'Full Width (custom)' was selected above, please insert the preferred aspect ratio for the card unexpanded card images.",
          placeholder: "3/1",
          component: "text"
        }, {
          name: "expandedType",
          label: "Expanded Type",
          description: "When the cards are expanded, how should they behave? (If blank, falls back to each card's configuration.)",
          component: "select",
          options: [{
            value: "",
            label: "-- Select a Type --"
          }, {
            value: "short",
            label: "Side-by-Side (No Scroll)"
          }, {
            value: "long",
            label: "Stacked (Scrolls)"
          }]
        }, {
          name: "theme",
          label: "Theme",
          description: "Controls the special theme of the deck. Things like the background.",
          component: "select",
          options: [{
            value: "",
            label: "-- Select a Theme --"
          }, {
            value: "none",
            label: "No Theme"
          }, {
            value: "flag_bg",
            label: "Flag Background"
          }, {
            value: "rockstar",
            label: "Rockstar"
          }]
        }, {
          name: "cardSizeBreakpoints",
          label: "(Optional) Card Size Breakpoints",
          description: "Change the size of the card to these sizes at the specified breakpoints. \n            Please note that this does *not* cascade; the size will default to the one set above at the specified breakpoints if not set.",
          component: "group",
          fields: [{
            name: "sm",
            label: "Card size at 0-767px window width (sm)",
            component: "select",
            options: f
          }, {
            name: "md",
            label: "Card size at 768-1023px window width (md)",
            component: "select",
            options: f
          }, {
            name: "lg",
            label: "Card size at 1024-1919px window width (lg)",
            component: "select",
            options: f
          }, {
            name: "xl",
            label: "Card size at 1920-2560px window width (xl)",
            component: "select",
            options: f
          }, {
            name: "xxl",
            label: "Card size at 2560px+ window width (xxl)",
            component: "select",
            options: f
          }]
        }],
        defaultItem: () => (0, t.defaultItemUnique)(),
        itemProps: e => (0, t.itemPropsWithKey)(e, {
          label: `Deck [${e?.[t.TINA_MEMOQ_PREFIX]?.title??null}]`
        })
      }), k = () => ({
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
        }, (0, t.translatedField)({
          name: "link",
          label: "Link",
          component: "text"
        }), (0, t.translatedField)({
          name: "label",
          label: "Button Label (Optional, will overload selected option)",
          component: "text"
        })],
        itemProps: e => (0, t.itemPropsWithKey)(e, {
          label: `Link for [${e?.platform??e?.buttonText??""}]`
        }),
        defaultItem: () => (0, t.defaultItemUnique)()
      }), y = () => ({
        name: "modal",
        label: "Modal Content",
        description: "Modify modal content details in here.",
        component: "group",
        fields: []
      }), x = () => ({
        name: "helperText",
        label: "Helper Link Section",
        component: "group",
        fields: [(0, t.translatedField)({
          name: "text",
          label: "Text",
          description: "This is the text above the link.",
          component: "text"
        }), (0, t.translatedField)({
          name: "linkText",
          label: "Link Text",
          description: "This is the text/label the link is attached to.",
          component: "text"
        }), (0, t.translatedField)({
          name: "link",
          label: "Link",
          component: "text"
        })],
        defaultItem: () => (0, t.defaultItemUnique)({
          text: "",
          linkText: "",
          link: "https://rockstargames.com/"
        })
      }), I = () => ({
        name: "subHero",
        label: "Sub Hero",
        component: "group",
        fields: [(0, t.translatedField)({
          name: "description",
          label: "Description",
          description: "This is the body text in the subhero.",
          component: "textarea"
        }), {
          name: "buttons",
          label: "Buttons",
          component: "group-list",
          fields: [(0, t.NameField)(), (0, t.translatedField)({
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
            fields: [(0, t.translatedField)({
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
            fields: [k()]
          }, y()],
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.name??"New"} [SubHero Button]`
          }),
          defaultItem: () => (0, t.defaultItemUnique)({
            helperText: (0, t.defaultItemUnique)(),
            link: (0, t.defaultItemUnique)(),
            expandingButton: (0, t.defaultItemUnique)()
          })
        }, {
          name: "platformCollection",
          label: "Platform Collection",
          component: "group-list",
          fields: [(0, t.translatedField)({
            name: "platformHeading",
            label: "Enter Platform Heading",
            component: "text"
          }), (0, t.translatedField)({
            name: "platformDescription",
            label: "Platform Description",
            description: "This is the body text in the subhero.",
            component: "textarea"
          }), (0, t.translatedField)({
            name: "enablePlatformIcons",
            label: "Enable Platform Icons",
            description: "This is the body text in the subhero.",
            component: "toggle"
          }), {
            name: "platformList",
            label: "Select Platform",
            component: "group-list",
            fields: [(0, t.translatedField)({
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
            defaultItem: () => (0, t.defaultItemUnique)(),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${e?.name??"New"} [Platform Icon]`
            })
          }],
          defaultItem: () => (0, t.defaultItemUnique)({}),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.name??"New"} ${e.type??""} [Platform]`
          })
        }, x()],
        itemProps: e => (0, t.itemPropsWithKey)(e, {
          label: `${e?.name??"New"} [Sub Hero]`
        }),
        defaultItem: {
          description: "",
          buttons: [],
          helperLink: (0, t.defaultItemUnique)(x().defaultItem ?? {})
        }
      }), S = () => ({
        name: "content",
        label: "Readable Content",
        description: "Edit visible logo images, title text, description text, CTAs, and legal text in here.",
        component: "group",
        fields: [{
          name: "brands",
          label: "Brands",
          component: "group-list",
          description: "Show brand icons in a row",
          fields: [d],
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `Brand [${e?.brand??null}]`
          })
        }, (0, t.translatedField)({
          name: "title",
          label: "Title",
          description: "This is the title text of the hero.",
          component: "text"
        }), (0, t.translatedField)({
          name: "description",
          label: "Description",
          description: "This is the body text in the hero.",
          component: "textarea"
        }), F(), N(), (0, t.translatedField)({
          name: "enablePlatforms",
          label: "Enable Platforms?",
          component: "toggle"
        }), (0, t.translatedField)({
          name: "legalText",
          label: "Legal Text",
          description: "This is the smaller text under the buttons in the hero.",
          component: "text"
        })],
        defaultItem: {
          title: "",
          description: "",
          ctaGroup: () => F()?.defaultItem ?? {},
          legalText: ""
        }
      }), F = () => ({
        name: "ctaGroup",
        label: "CTAs",
        description: "Add CTAs or an Expanding Platform Button in here.",
        component: "group",
        fields: [{
          name: "expandingButton",
          label: "Expanding Button",
          description: "Modify expanding platform button details in here.",
          component: "group",
          fields: [(0, t.translatedField)({
            name: "label",
            label: "Button Label",
            component: "text"
          }), T()]
        }, w()],
        defaultItem: {
          expandingButton: {
            label: "",
            buttons: []
          },
          ctas: {
            buttons: []
          }
        }
      }), T = () => ({
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
        }, (0, t.translatedField)({
          name: "href",
          label: "Link",
          component: "text"
        }), (0, t.translatedField)({
          name: "text",
          label: "Button Text (Optional, will overload selected option)",
          component: "text"
        })],
        itemProps: e => (0, t.itemPropsWithKey)(e, {
          label: `Link for [${e?.platform??e?.buttonText??""}]`
        }),
        defaultItem: () => (0, t.defaultItemUnique)()
      }), w = () => ({
        name: "ctas",
        label: "Plain CTAs",
        description: "Modify plain CTAs (not within the expanding button).",
        component: "group",
        fields: [{
          name: "buttons",
          label: "Buttons",
          description: "Buttons revealed within the expanding platform button.",
          component: "group-list",
          fields: [(0, t.translatedField)({
            name: "label",
            label: "Button Label",
            component: "text"
          }), (0, t.translatedField)({
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
          defaultItem: () => (0, t.defaultItemUnique)({
            label: "",
            href: "https://rockstargames.com/"
          })
        }]
      }), N = () => ({
        name: "platformCollection",
        label: "Platform Collection",
        component: "group-list",
        fields: [(0, t.translatedField)({
          name: "platformHeading",
          label: "Enter Platform Heading",
          component: "text"
        }), (0, t.translatedField)({
          name: "platformDescription",
          label: "Platform Description",
          description: "This is the body text in the subhero.",
          component: "textarea"
        })],
        defaultItem: () => (0, t.defaultItemUnique)({}),
        itemProps: e => (0, t.itemPropsWithKey)(e, {
          label: `${e?.name??"New"} ${e.type??""} [Platform]`
        })
      }), P = () => ({
        name: "images",
        label: "Foreground and Background Images",
        description: "Images used in the foreground and the background of the hero.",
        component: "group",
        fields: [C(), D()],
        defaultItem: {
          foreground: () => C()?.defaultItem ?? {},
          background: () => D()?.defaultItem ?? {}
        }
      }), D = () => ({
        name: "background",
        label: "Background Image",
        component: "group",
        fields: [{
          name: "mobile",
          label: "Mobile Image",
          component: "image",
          description: "If responsive, only the mobile source is needed.",
          uploadDir: n.uploadDir
        }, {
          name: "desktop",
          label: "Desktop Image",
          component: "image",
          uploadDir: n.uploadDir
        }, {
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
          parse: n.parse,
          previewSrc: n.previewSrc,
          uploadDir: n.uploadDir
        }, {
          name: "maskEnabled",
          label: "Enable image mask?",
          component: "toggle"
        }],
        defaultItem: {
          mobile: void 0,
          desktop: void 0
        }
      }), C = () => ({
        name: "foreground",
        label: "Foreground Image",
        component: "group",
        fields: [...L],
        defaultItem: () => {
          let e = {};
          return L.forEach((l => {
            e = {
              ...e,
              [l.name]: l.defaultItem
            }
          })), e
        }
      }), M = [{
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
      }], B = [{
        name: "horizontal",
        label: "Move the image horizontally",
        component: "group",
        fields: M
      }, {
        name: "vertical",
        label: "Move the image vertically",
        component: "group",
        fields: M
      }, {
        name: "width",
        label: "Adjust the image width",
        component: "group",
        fields: M
      }, {
        name: "height",
        label: "Adjust the image height",
        component: "group",
        fields: M
      }], L = [{
        name: "mini",
        label: "Mini Image",
        component: "group",
        description: 'For below the standard "mobile" screen size. Will use the "Mobile Image" image if not defined.',
        fields: [{
          name: "image",
          label: "Mini Image",
          component: "image",
          uploadDir: n.uploadDir
        }, ...B],
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
          uploadDir: n.uploadDir
        }, ...B],
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
          uploadDir: n.uploadDir
        }, ...B],
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
          uploadDir: n.uploadDir
        }, ...B],
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
          uploadDir: n.uploadDir
        }, ...B],
        defaultItem: {
          image: void 0
        }
      }], E = () => ({
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
          }), (0, t.ImageField)({
            label: "Shard Images"
          })],
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"New"} [Shard]`
          }),
          defaultItem: () => (0, t.defaultItemUnique)({
            image: (0, t.defaultItemUnique)()
          })
        }],
        defaultItem: {
          title: "",
          shards: []
        }
      }), A = () => ({
        name: "hero",
        label: "Hero",
        component: "group",
        fields: [(0, t.NameField)(), {
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
        }, S(), P(), E(), I()],
        defaultItem: {
          type: "gen9",
          animated: !0,
          content: (0, t.defaultItemUnique)(S()?.defaultItem ?? {}),
          images: (0, t.defaultItemUnique)(P()?.defaultItem ?? {}),
          shardsSection: (0, t.defaultItemUnique)(E()?.defaultItem ?? {}),
          subHero: (0, t.defaultItemUnique)(I().defaultItem ?? {})
        },
        itemProps: e => (0, t.itemPropsWithKey)(e, {
          label: `${e?.name??"New"} [Hero]`
        })
      });
      var U = a(17523);
      const q = e => {
          let {
            field: l,
            meta: a,
            input: t
          } = e;
          return (0, r.jsxs)(u.FieldWrapper, {
            field: l,
            meta: a,
            children: [(0, r.jsx)("input", {
              type: "range",
              min: "0",
              max: "1",
              step: "0.05",
              name: l.name,
              id: l.id,
              ...t
            }), (0, r.jsx)("br", {}), (0, r.jsxs)("sup", {
              children: ["Value:", " ", t.value]
            })]
          })
        },
        G = () => ({
          name: "backgroundImageAndMask",
          label: "Background Image and Mask",
          description: "Images used for the background with an image mask.",
          component: "group",
          fields: [R(), _()],
          defaultItem: {
            foreground: () => R()?.defaultItem ?? {},
            background: () => _()?.defaultItem ?? {}
          }
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
            parse: n.parse,
            previewSrc: n.previewSrc,
            uploadDir: n.uploadDir
          }, {
            name: "desktop",
            label: "Desktop Image",
            component: "image",
            parse: n.parse,
            previewSrc: n.previewSrc,
            uploadDir: n.uploadDir
          }, (0, t.translatedField)({
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
          }), (0, t.translatedField)({
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
          }), (0, t.translatedField)({
            name: "backgroundColor",
            label: "Background Color",
            component: "color"
          }), (0, t.translatedField)({
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
          }), (0, t.translatedField)({
            name: "backgroundPosition",
            label: "Background Position",
            component: "text"
          }), (0, t.translatedField)({
            name: "backgroundRepeat",
            label: "Background Repeat",
            component: "text"
          }), (0, t.translatedField)({
            name: "backgroundSize",
            label: "Background Size",
            component: "text"
          })],
          defaultItem: {
            mobile: void 0,
            desktop: void 0
          }
        }),
        _ = () => ({
          name: "backgroundImageMask",
          label: "Background Image Mask",
          component: "group",
          fields: [{
            name: "mobile",
            label: "Mobile Image",
            component: "image",
            description: "If responsive, only the mobile source is needed.",
            parse: n.parse,
            previewSrc: n.previewSrc,
            uploadDir: n.uploadDir
          }, {
            name: "desktop",
            label: "Desktop Image",
            component: "image",
            parse: n.parse,
            previewSrc: n.previewSrc,
            uploadDir: n.uploadDir
          }],
          defaultItem: {
            mobile: void 0,
            desktop: void 0
          }
        }),
        W = [{
          name: "backgroundFields",
          label: "Background Fields",
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
        V = {
          legacy: {
            LegacyPageTemplate: () => ({
              label: "Legacy Game Page Template",
              fields: [{
                name: "titleSlug",
                label: "Title Slug",
                description: 'Used for retreiving game data. Example: "GTAOnline", etc',
                component: "text"
              }, (0, t.TagsField)({
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
              }, A(), ...W, {
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
                    parse: n.parse,
                    previewSrc: n.previewSrc,
                    uploadDir: n.uploadDir
                  }, {
                    name: "mask",
                    label: "Mobile Mask",
                    component: "image",
                    parse: n.parse,
                    previewSrc: n.previewSrc,
                    uploadDir: n.uploadDir
                  }]
                }, {
                  name: "desktop",
                  label: "Desktop Image/Mask Details",
                  component: "group",
                  fields: [{
                    name: "image",
                    label: "Desktop Image",
                    component: "image",
                    parse: n.parse,
                    previewSrc: n.previewSrc,
                    uploadDir: n.uploadDir
                  }, {
                    name: "mask",
                    label: "Desktop Mask",
                    component: "image",
                    parse: n.parse,
                    previewSrc: n.previewSrc,
                    uploadDir: n.uploadDir
                  }]
                }],
                defaultItem: {
                  mobile: void 0,
                  desktop: void 0
                }
              }, {
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
                  fields: [(0, t.ImageField)({
                    label: "Logo"
                  }), {
                    name: "setLogoAsDefault",
                    label: "Set Logo as Default",
                    component: "toggle"
                  }, (0, t.translatedField)({
                    name: "maxHeight",
                    label: "Max Height",
                    component: "text"
                  }), (0, t.translatedField)({
                    name: "maxWidth",
                    label: "Max Width",
                    component: "text"
                  })],
                  defaultItem: () => (0, t.defaultItemUnique)()
                }, (0, t.translatedField)({
                  name: "title",
                  label: "Title",
                  component: "text"
                }), (0, t.translatedField)({
                  name: "body",
                  label: "Body Text",
                  component: "textarea"
                }), (0, t.translatedField)({
                  name: "footnote",
                  label: "Footnote",
                  component: "textarea"
                }), (0, t.ImageField)({}), (0, t.translatedField)({
                  name: "image_on_right",
                  label: "Place the image on the right side?",
                  component: "toggle"
                }), (0, U.VideoField)({
                  name: "videoId",
                  label: "Featured Video"
                }), (0, t.translatedField)({
                  name: "setVideoAsDefault",
                  label: "Set Video as Default",
                  component: "toggle"
                })],
                itemProps: e => (0, t.itemPropsWithKey)(e, {
                  label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"New"} [Feature]`
                }),
                defaultItem: () => (0, t.defaultItemUnique)()
              }, {
                name: "imageGallery",
                label: "Image Gallery",
                component: "group",
                fields: [(0, t.translatedField)({
                  name: "title",
                  label: "Gallery Title",
                  component: "text"
                }), {
                  name: "collections",
                  label: "Image Gallery Collections",
                  component: "group-list",
                  fields: [(0, t.translatedField)({
                    name: "name",
                    label: "Collection Name",
                    description: "In most cases, this is the console the images are from.",
                    component: "text"
                  }), (0, t.translatedField)({
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
                    }]
                  }, {
                    name: "sections",
                    label: "Image Gallery Sections",
                    component: "group-list",
                    fields: [(0, t.NameField)(), {
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
                      }, (0, t.ImageField)({})],
                      defaultItem: () => (0, t.defaultItemUnique)(),
                      itemProps: e => (0, t.itemPropsWithKey)(e, {
                        label: `${e?.name??"New"} [Image]`
                      })
                    }],
                    defaultItem: () => (0, t.defaultItemUnique)({}),
                    itemProps: e => (0, t.itemPropsWithKey)(e, {
                      label: `${e?.name??"New"} ${e.type??""} [Image Section]`
                    })
                  }],
                  defaultItem: () => (0, t.defaultItemUnique)(),
                  itemProps: e => (0, t.itemPropsWithKey)(e, {
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
                }, (0, t.translatedField)({
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
                itemProps: e => (0, t.itemPropsWithKey)(e, {
                  label: `${e?.name??"New"} [Image Gallery]`
                }),
                defaultItem: () => (0, t.defaultItemUnique)()
              }, {
                name: "highlightCollection",
                label: "Highlight Collection",
                component: "group",
                fields: [(0, t.translatedField)({
                  name: "subtitle",
                  label: "Subtitle",
                  component: "text"
                }), {
                  name: "highlights",
                  label: "Highlights",
                  component: "group-list",
                  fields: [(0, t.translatedField)({
                    name: "title",
                    label: "Title",
                    component: "text"
                  }), (0, t.translatedField)({
                    name: "summary",
                    label: "Summary",
                    component: "textarea"
                  }), {
                    label: "Image",
                    name: "image",
                    component: "image",
                    uploadDir: n.uploadDir,
                    parse: n.parse,
                    previewSrc: n.previewSrc
                  }],
                  defaultItem: () => (0, t.defaultItemUnique)(),
                  itemProps: e => (0, t.itemPropsWithKey)(e, {
                    label: `${e?._memoq?.name??"New"} [Highlight Item]`
                  })
                }, {
                  name: "blockSettings",
                  label: "Block Settings",
                  component: "group",
                  fields: [i(), {
                    name: "navigationEnabled",
                    label: "Enable Navigation Controls",
                    component: "toggle",
                    defaultValue: !0
                  }]
                }],
                defaultItem: () => (0, t.defaultItemUnique)(),
                itemProps: e => (0, t.itemPropsWithKey)(e, {
                  label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Highlights]`
                })
              }, {
                name: "relatedLinks",
                label: "Related Links",
                component: "group",
                fields: [(0, t.translatedField)({
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
                  }, (0, t.translatedField)({
                    name: "title",
                    label: "Title",
                    component: "text"
                  }), (0, t.translatedField)({
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
                  }, (0, t.translatedField)({
                    name: "textColor",
                    label: "Text Color",
                    component: "color"
                  }), (0, t.translatedField)({
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
                      component: q
                    }, {
                      name: "endColor",
                      label: "Gradient End Color",
                      component: "color",
                      colorFormat: "rgb"
                    }, {
                      name: "endOpacity",
                      label: "Enter Gradient Opacity (range: 0.00 - 1.00)",
                      component: q
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
                        uploadDir: n.uploadDir
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
                        uploadDir: n.uploadDir
                      }]
                    }]
                  }],
                  defaultItem: () => (0, t.defaultItemUnique)(),
                  itemProps: e => (0, t.itemPropsWithKey)(e, {
                    label: `${e?.subtitle??"New"} [Related Button]`
                  })
                }],
                defaultItem: () => (0, t.defaultItemUnique)()
              }, {
                name: "legacyDeck",
                label: "Legacy Deck",
                component: "group",
                fields: h().fields
              }, (0, t.translatedField)({
                name: "disclaimer",
                label: "Disclaimer Text",
                component: "textarea"
              }), {
                name: "fob",
                label: "Front of Box/Buy Now Prompt",
                component: "group",
                fields: [(0, t.translatedField)({
                  name: "title",
                  label: "Title",
                  component: "text"
                }), (0, t.translatedField)({
                  name: "body",
                  label: "Body Text",
                  component: "textarea"
                }), {
                  name: "expandingButton",
                  label: "Button Details",
                  description: "Modify expanding platform button details in here.",
                  component: "group",
                  fields: [(0, t.translatedField)({
                    name: "label",
                    label: "Button Label",
                    component: "text"
                  }), {
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
                        value: "xbox",
                        label: "Xbox"
                      }, {
                        value: "xboxone",
                        label: "Xbox One"
                      }, {
                        value: "xboxseriesxs",
                        label: "Xbox Series X|S"
                      }, {
                        value: "switch",
                        label: "Nintendo Switch"
                      }, {
                        value: "pc",
                        label: "PC"
                      }, {
                        value: "questionmark",
                        label: "Question Mark"
                      }]
                    }, (0, t.translatedField)({
                      name: "href",
                      label: "Link",
                      component: "text"
                    }), (0, t.translatedField)({
                      name: "buttonText",
                      label: "Button Text (Required, needed for Alt Text on image platform buttons)",
                      component: "text"
                    })],
                    itemProps: e => (0, t.itemPropsWithKey)(e, {
                      label: `Link for [${e?.platform??e?.buttonText??""}]`
                    }),
                    defaultItem: () => (0, t.defaultItemUnique)()
                  }],
                  defaultItem: () => (0, t.defaultItemUnique)()
                }, (0, t.ImageField)({
                  label: "Front of Box Image"
                }), G()],
                defaultItem: {
                  backgroundImageAndMask: (0, t.defaultItemUnique)(G()?.defaultItem ?? {})
                },
                itemProps: e => (0, t.itemPropsWithKey)(e, {
                  label: `${e?.name??"New"} [FOB]`
                })
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
              defaultItem: () => (0, t.defaultItemUnique)({
                fob: (0, t.defaultItemUnique)({
                  expandingButton: (0, t.defaultItemUnique)()
                }),
                hero: (0, t.defaultItemUnique)(A().defaultItem),
                imageGallery: (0, t.defaultItemUnique)(),
                Deck: (0, t.defaultItemUnique)(h().defaultItem),
                relatedLinks: (0, t.defaultItemUnique)()
              }),
              itemProps: e => (0, t.itemPropsWithKey)(e, {
                label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Legacy Game Page]`
              })
            })
          }
        };
      var H = a(17891),
        $ = a(92710);
      const z = {
        HighlightsItem: H.HighlightsItem,
        legacy: {
          LegacyPageTemplate: $.A
        },
        gen9: {
          TinaWrapper: e => {
            let {
              children: l,
              style: a,
              theme: t
            } = e;
            const [n, i] = (0, c.useState)(t);
            return (0, c.useEffect)((() => {
              t && i(t)
            }), [t]), (0, r.jsx)("div", {
              className: "rockstargames-sites-legacya3cc68ab0d512c3d8835ee9abb7a51c4",
              style: a,
              "data-theme": n,
              children: l
            })
          }
        }
      }
    },
    50048: e => {
      var l = {
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

      function a(e, l) {
        if ("FragmentSpread" === e.kind) l.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && l.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, l)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, l)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, l)
        }))
      }
      l.loc.source = {
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function n(e, l) {
        for (var a = 0; a < e.definitions.length; a++) {
          var t = e.definitions[a];
          if (t.name && t.name.value == l) return t
        }
      }

      function i(e, l) {
        var a = {
          kind: e.kind,
          definitions: [n(e, l)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var i = t[l] || new Set,
          o = new Set,
          d = new Set;
        for (i.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var r = d;
          d = new Set, r.forEach((function(e) {
            o.has(e) || (o.add(e), (t[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return o.forEach((function(l) {
          var t = n(e, l);
          t && a.definitions.push(t)
        })), a
      }
      l.definitions.forEach((function(e) {
        if (e.name) {
          var l = new Set;
          a(e, l), t[e.name.value] = l
        }
      })), e.exports = l, e.exports.TinaModulesList = i(l, "TinaModulesList"), e.exports.TinaModulesInfo = i(l, "TinaModulesInfo")
    }
  }
]);