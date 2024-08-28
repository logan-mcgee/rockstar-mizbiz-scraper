! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      l = (new Error).stack;
    l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "b5a63a22-8445-49f3-95ae-aaa1b9ccee0f", e._sentryDebugIdIdentifier = "sentry-dbid-b5a63a22-8445-49f3-95ae-aaa1b9ccee0f")
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
  [389], {
    58209: (e, l, a) => {
      a.d(l, {
        A: () => n
      });
      var t = a(71403);
      var o = a(46632);
      const n = e => {
        let {
          children: l,
          style: a,
          theme: n
        } = e;
        const [i, r] = (0, t.useState)(n);
        return (0, t.useEffect)((() => {
          n && r(n)
        }), [n]), (0, o.jsx)("div", {
          className: "rockstargames-sites-legacya3cc68ab0d512c3d8835ee9abb7a51c4",
          style: a,
          "data-theme": i,
          children: l
        })
      }
    },
    22941: (e, l, a) => {
      a.d(l, {
        A: () => u
      });
      var t = a(71403),
        o = a(72956),
        n = a.n(o),
        i = a(74401),
        r = a(42756);
      const s = {
        pillBtn: "rockstargames-sites-legacyf87ac9a7d56545847cf4d8ca471b03e6",
        selected: "rockstargames-sites-legacya8ea61e57fd58bfcb99aef7e6d687045",
        grid: "rockstargames-sites-legacya57241f29873f89f89ab8b27994e71c3",
        itemList: "rockstargames-sites-legacydaec3f5ce63d42cb07e3e724737c8361",
        gtaplus: "rockstargames-sites-legacybd78cfb71ed31029ba4279325166bfab",
        rdo: "rockstargames-sites-legacya6244398a800ffddab72c14f717b0eab",
        noImg: "rockstargames-sites-legacye88f741af7d5e0529ff4fb6bb82af04f",
        gtao: "rockstargames-sites-legacyab60d91453348d2e4c090ef3ebb04347",
        custom: "rockstargames-sites-legacyc20e7ba6ceaba3afd37095b172797711",
        yellow: "rockstargames-sites-legacyb16672deedfe102b065925cbe0fb931c",
        hotPink: "rockstargames-sites-legacyd0d01601de7131d9d6d11321b4299e59",
        red: "rockstargames-sites-legacyd1b5397aff94d33b57674b04a3456e03",
        turquoise: "rockstargames-sites-legacyd6541b973ce158c8f2fb81483015211f",
        purple: "rockstargames-sites-legacyf3e34d902681219d4d8490eb164f7727",
        teal: "rockstargames-sites-legacya6c3b6b6a2395eb18a1174294f26f4ea",
        blue: "rockstargames-sites-legacyeade6e843c5afd48d3a8959fb0b88222",
        green: "rockstargames-sites-legacya82c313f8f85fc6304ddb703be2fa271",
        darkRed: "rockstargames-sites-legacyd394c61fdce2bf8894ffb801ee680c2a",
        darkBlue: "rockstargames-sites-legacyf1d73cc00a3ab644aab949183a8298a7",
        goldenrod: "rockstargames-sites-legacycdcb0c5076309a329da2a6e857cc3bdf",
        skull: "rockstargames-sites-legacyba4bd16bff2fbc40616457007b4a7442"
      };
      var d = a(46632);
      const {
        sanitize: m
      } = n(), u = e => {
        let {
          list: l,
          string: a,
          starColor: o,
          style: n,
          className: u,
          game: b,
          noImg: c,
          columns: p,
          mobileColumns: g
        } = e;
        const [f, v] = (0, t.useState)(null);
        return (0, t.useEffect)((() => {
          v(l)
        }), [l]), a || l ? p && f ? (0, d.jsx)("div", {
          className: s.grid,
          style: {
            "--ordered-list-grid-column": p,
            "--ordered-list-grid-column-mobile": g ?? p
          },
          children: (0, d.jsx)("ol", {
            style: (0, r.safeStyles)(n),
            className: (0, i.classList)(s.itemList, s.noImg, s[o], s[b]),
            children: f.map((e => (0, d.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e.content)
              }
            }, e.content)))
          })
        }) : (0, d.jsx)("ol", {
          style: (0, r.safeStyles)(n),
          className: (0, i.classList)(s.itemList, s.custom, c ? s.noImg : "", o ? s[o] : "", b ? s[b] : "", u ?? ""),
          children: l.map((e => (0, d.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: m(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    51389: (e, l, a) => {
      a.r(l), a.d(l, {
        componentsForTinaParser: () => q,
        tinaBlockTemplates: () => U
      });
      var t = a(55140),
        o = a(28089);
      (0, t.translatedField)({
        name: "title",
        label: "Title",
        component: "text"
      }), (0, t.translatedField)({
        name: "summary",
        label: "Summary",
        component: "textarea"
      }), o.uploadDir, o.parse, o.previewSrc;
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
        }),
        i = {
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
        }("Grid"), d("style.--grid-num-columns-mobile", "Grid Number of Columns (Mobile)"), d("style.--grid-num-columns-desktop", "Grid Number of Columns (Desktop)"), s("Grid"), a(60207), a(58407);
      var m = a(33809);
      a(50048), a(22941), a(63672);
      const u = () => ({
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
        }),
        b = () => ({
          name: "modal",
          label: "Modal Content",
          description: "Modify modal content details in here.",
          component: "group",
          fields: []
        }),
        c = () => ({
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
        }),
        p = () => ({
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
              fields: [u()]
            }, b()],
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
          }, c()],
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.name??"New"} [Sub Hero]`
          }),
          defaultItem: {
            description: "",
            buttons: [],
            helperLink: (0, t.defaultItemUnique)(c().defaultItem ?? {})
          }
        }),
        g = () => ({
          name: "content",
          label: "Readable Content",
          description: "Edit visible logo images, title text, description text, CTAs, and legal text in here.",
          component: "group",
          fields: [{
            name: "brands",
            label: "Brands",
            component: "group-list",
            description: "Show brand icons in a row",
            fields: [i],
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
          }), f(), y(), (0, t.translatedField)({
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
            ctaGroup: () => f()?.defaultItem ?? {},
            legalText: ""
          }
        }),
        f = () => ({
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
            }), v()]
          }, h()],
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
        v = () => ({
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
        }),
        h = () => ({
          name: "ctas",
          label: "Plain CTAs",
          description: "Modify plain CTAs (not within the expanding button).",
          component: "group",
          fields: [{
            name: "buttons",
            label: "Buttons",
            description: "Buttons revealed within the CTAs group.",
            component: "group-list",
            fields: [(0, t.NameField)(), (0, t.translatedField)({
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
        }),
        y = () => ({
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
        }),
        I = () => ({
          name: "images",
          label: "Foreground and Background Images",
          description: "Images used in the foreground and the background of the hero.",
          component: "group",
          fields: [k(), x()],
          defaultItem: {
            foreground: () => k()?.defaultItem ?? {},
            background: () => x()?.defaultItem ?? {}
          }
        }),
        x = () => ({
          name: "background",
          label: "Background Image",
          component: "group",
          fields: [...(0, t.LocalizedResponsiveImageGroup)({}).fields, {
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
        k = () => ({
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
        S = [{
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
        T = [{
          name: "horizontal",
          label: "Move the image horizontally",
          component: "group",
          fields: S
        }, {
          name: "vertical",
          label: "Move the image vertically",
          component: "group",
          fields: S
        }, {
          name: "width",
          label: "Adjust the image width",
          component: "group",
          fields: S
        }, {
          name: "height",
          label: "Adjust the image height",
          component: "group",
          fields: S
        }],
        w = [{
          name: "mini",
          label: "Mini Image",
          component: "group",
          description: 'For below the standard "mobile" screen size. Will use the "Mobile Image" image if not defined.',
          fields: [(0, t.LocalizedImageGroup)({
            name: "image",
            label: "Mini Image Sources"
          }), ...T],
          defaultItem: {
            image: void 0
          }
        }, {
          name: "mobile",
          label: "Mobile Image",
          component: "group",
          description: 'From "mobile" and up to "tablet" screen size. This image will be used as a fallback for all screen sizes.',
          fields: [(0, t.LocalizedImageGroup)({
            name: "image",
            label: "Mobile Image Sources"
          }), ...T],
          defaultItem: {
            image: void 0
          }
        }, {
          name: "tablet",
          label: "Tablet Image",
          component: "group",
          description: 'From "tablet" and up to "desktop" screen size.',
          fields: [(0, t.LocalizedImageGroup)({
            name: "image",
            label: "Tablet Image Sources"
          }), ...T],
          defaultItem: {
            image: void 0
          }
        }, {
          name: "desktop",
          label: "Desktop Image",
          component: "group",
          description: 'From "desktop" and up to "ultrawide" screen size. This image will be a fallback for ultrawides.',
          fields: [(0, t.LocalizedImageGroup)({
            name: "image",
            label: "Desktop Image Sources"
          }), ...T],
          defaultItem: {
            image: void 0
          }
        }, {
          name: "ultrawide",
          label: "Ultrawide Image",
          component: "group",
          description: 'For "ultrawide" screen sizes and beyond.',
          fields: [(0, t.LocalizedImageGroup)({
            name: "image",
            label: "Ultrawide Image Sources"
          }), ...T],
          defaultItem: {
            image: void 0
          }
        }],
        P = () => ({
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
        }),
        F = () => ({
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
          }, g(), I(), P(), p()],
          defaultItem: {
            type: "gen9",
            animated: !0,
            content: (0, t.defaultItemUnique)(g()?.defaultItem ?? {}),
            images: (0, t.defaultItemUnique)(I()?.defaultItem ?? {}),
            shardsSection: (0, t.defaultItemUnique)(P()?.defaultItem ?? {}),
            subHero: (0, t.defaultItemUnique)(p().defaultItem ?? {})
          },
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.name??"New"} [Hero]`
          })
        });
      var C = a(17523);
      const B = e => {
          let {
            field: l,
            meta: a,
            input: t
          } = e;
          return (0, r.jsxs)(m.FieldWrapper, {
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
        M = () => ({
          name: "backgroundImageAndMask",
          label: "Background Image and Mask",
          description: "Images used for the background with an image mask.",
          component: "group",
          fields: [D(), L()],
          defaultItem: {
            foreground: () => D()?.defaultItem ?? {},
            background: () => L()?.defaultItem ?? {}
          }
        }),
        D = () => ({
          name: "backgroundImage",
          label: "Background Image",
          component: "group",
          fields: [{
            name: "mobile",
            label: "Mobile Image",
            component: "image",
            description: "If responsive, only the mobile source is needed.",
            parse: o.parse,
            previewSrc: o.previewSrc,
            uploadDir: o.uploadDir
          }, {
            name: "desktop",
            label: "Desktop Image",
            component: "image",
            parse: o.parse,
            previewSrc: o.previewSrc,
            uploadDir: o.uploadDir
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
        L = () => ({
          name: "backgroundImageMask",
          label: "Background Image Mask",
          component: "group",
          fields: [{
            name: "mobile",
            label: "Mobile Image",
            component: "image",
            description: "If responsive, only the mobile source is needed.",
            parse: o.parse,
            previewSrc: o.previewSrc,
            uploadDir: o.uploadDir
          }, {
            name: "desktop",
            label: "Desktop Image",
            component: "image",
            parse: o.parse,
            previewSrc: o.previewSrc,
            uploadDir: o.uploadDir
          }],
          defaultItem: {
            mobile: void 0,
            desktop: void 0
          }
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
        U = {
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
              }, F(), ...A, {
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
                }), (0, C.VideoField)({
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
                    parse: o.parse,
                    previewSrc: o.previewSrc,
                    uploadDir: o.uploadDir
                  }]
                }, {
                  name: "desktop",
                  label: "Desktop Image/Mask Details",
                  component: "group",
                  fields: [{
                    name: "image",
                    label: "Desktop Image",
                    component: "image",
                    parse: o.parse,
                    previewSrc: o.previewSrc,
                    uploadDir: o.uploadDir
                  }]
                }, {
                  name: "topMask",
                  label: "Top Mask Image Details",
                  component: "group",
                  fields: [{
                    name: "mask",
                    label: "Desktop Mask",
                    component: "image",
                    parse: o.parse,
                    previewSrc: o.previewSrc,
                    uploadDir: o.uploadDir
                  }]
                }, {
                  name: "bottomMask",
                  label: "Bottom Mask Image Details",
                  component: "group",
                  fields: [{
                    name: "mask",
                    label: "Desktop Mask",
                    component: "image",
                    parse: o.parse,
                    previewSrc: o.previewSrc,
                    uploadDir: o.uploadDir
                  }]
                }],
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
                    }, {
                      label: "PC",
                      value: "pc"
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
                    uploadDir: o.uploadDir,
                    parse: o.parse,
                    previewSrc: o.previewSrc
                  }],
                  defaultItem: () => (0, t.defaultItemUnique)(),
                  itemProps: e => (0, t.itemPropsWithKey)(e, {
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
                      component: B
                    }, {
                      name: "endColor",
                      label: "Gradient End Color",
                      component: "color",
                      colorFormat: "rgb"
                    }, {
                      name: "endOpacity",
                      label: "Enter Gradient Opacity (range: 0.00 - 1.00)",
                      component: B
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
                        uploadDir: o.uploadDir
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
                        uploadDir: o.uploadDir
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
                name: "videoProps",
                label: "Video Section",
                description: "Section title, video, playlist options.",
                component: "group",
                fields: [(0, t.translatedField)({
                  name: "sectionLabel",
                  label: "Section Label",
                  component: "text"
                }), (0, C.VideoField)(), (0, t.TagsField)({
                  name: "videoTag",
                  label: "Tag for this Video"
                }), (0, t.translatedField)({
                  name: "playlistTitle",
                  label: "Playlist Title",
                  component: "text"
                }), {
                  name: "--playlist-background-color",
                  label: "Background Color For Playlist",
                  description: "Css property for background color (Ex: rgba(0,0,0,0.1) or #000 or red)",
                  component: "text"
                }],
                defaultItem: () => (0, t.defaultItemUnique)({})
              }, {
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
                        value: "ps",
                        label: "PlayStation"
                      }, {
                        value: "ps4",
                        label: "PlayStation 4"
                      }, {
                        value: "ps5",
                        label: "PlayStation 5"
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
                        value: "googleplay",
                        label: "Google Play"
                      }, {
                        value: "applestore",
                        label: "Apple Store"
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
                }), M()],
                defaultItem: {
                  backgroundImageAndMask: (0, t.defaultItemUnique)(M()?.defaultItem ?? {})
                },
                itemProps: e => (0, t.itemPropsWithKey)(e, {
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
              defaultItem: () => (0, t.defaultItemUnique)({
                fob: (0, t.defaultItemUnique)({
                  expandingButton: (0, t.defaultItemUnique)()
                }),
                hero: (0, t.defaultItemUnique)(F().defaultItem),
                imageGallery: (0, t.defaultItemUnique)(),
                relatedLinks: (0, t.defaultItemUnique)(),
                videoProps: (0, t.defaultItemUnique)({}),
                featureBlockBackgroundImageGroup: (0, t.defaultItemUnique)({})
              }),
              itemProps: e => (0, t.itemPropsWithKey)(e, {
                label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Legacy Game Page]`
              })
            })
          }
        };
      var E = a(58209),
        G = a(17891),
        N = a(44313);
      const q = {
        HighlightsItem: G.HighlightsItem,
        legacy: {
          LegacyPageTemplate: N.A
        },
        gen9: {
          TinaWrapper: E.A
        }
      }
    }
  }
]);