! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "04ecf221-621f-429c-8fbe-0ae5ed783000", e._sentryDebugIdIdentifier = "sentry-dbid-04ecf221-621f-429c-8fbe-0ae5ed783000")
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
  [460], {
    99576: (e, a, l) => {
      "use strict";
      var t = l(51664),
        n = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        r = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, a, l) {
        var t, i = {},
          d = null,
          m = null;
        for (t in void 0 !== l && (d = "" + l), void 0 !== a.key && (d = "" + a.key), void 0 !== a.ref && (m = a.ref), a) o.call(a, t) && !s.hasOwnProperty(t) && (i[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === i[t] && (i[t] = a[t]);
        return {
          $$typeof: n,
          type: e,
          key: d,
          ref: m,
          props: i,
          _owner: r.current
        }
      }
      a.Fragment = i, a.jsx = d, a.jsxs = d
    },
    95240: (e, a, l) => {
      "use strict";
      e.exports = l(99576)
    },
    52256: (e, a, l) => {
      "use strict";
      l.d(a, {
        c: () => u
      });
      var t = l(51664),
        n = l(8560),
        i = l.n(n),
        o = l(1740),
        r = l(45792);
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
      var d = l(95240);
      const {
        sanitize: m
      } = i(), u = e => {
        let {
          list: a,
          string: l,
          starColor: n,
          style: i,
          className: u,
          game: c,
          noImg: b,
          columns: p,
          mobileColumns: g
        } = e;
        const [f, v] = (0, t.useState)(null);
        return (0, t.useEffect)((() => {
          v(a)
        }), [a]), l || a ? p && f ? (0, d.jsx)("div", {
          className: s.grid,
          style: {
            "--ordered-list-grid-column": p,
            "--ordered-list-grid-column-mobile": g ?? p
          },
          children: (0, d.jsx)("ol", {
            style: (0, r.safeStyles)(i),
            className: (0, o.classList)(s.itemList, s.noImg, s[n], s[c]),
            children: f.map((e => (0, d.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e.content)
              }
            }, e.content)))
          })
        }) : (0, d.jsx)("ol", {
          style: (0, r.safeStyles)(i),
          className: (0, o.classList)(s.itemList, s.custom, b ? s.noImg : "", n ? s[n] : "", c ? s[c] : "", u ?? ""),
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
        c: () => u
      });
      var t = l(51664),
        n = l(8560),
        i = l.n(n),
        o = l(1740),
        r = l(45792);
      const s = {
        grid: "rockstargames-sites-legacyac295ed5b9cb441ed17843b34e83ea17",
        itemList: "rockstargames-sites-legacycaf5589ddeca00ed09213e547674b1f3",
        gtaplus: "rockstargames-sites-legacyb291112adcf994a0f6acadd86f73b78a",
        rdo: "rockstargames-sites-legacyd146e8f862baefb60e91be5aa3c17b6e",
        noImg: "rockstargames-sites-legacyba9b5ae08642b0213a3f04b3db9a9dac",
        gtao: "rockstargames-sites-legacyb6f2bdfd6a1d57b7ce840f7a56cc510b",
        custom: "rockstargames-sites-legacyaf89164a043648d1464686ff13363ee4",
        yellow: "rockstargames-sites-legacyd244b17b74fc46269e8a106a99ab0f87",
        hotPink: "rockstargames-sites-legacyd90b28503318563cfd6059146d1fb6b6",
        red: "rockstargames-sites-legacyc3f8a8706901874d906f94c626be3c1e",
        turquoise: "rockstargames-sites-legacyfe2ec36e92e2bb4d453fdc4b05966418",
        purple: "rockstargames-sites-legacyf5f7baf5b56f5b2ada053a93392bbf7a",
        teal: "rockstargames-sites-legacyf4a229f41cd20f181d810c311416e3f2",
        blue: "rockstargames-sites-legacyf6f689d687bcd482ea2cd2990fd66878",
        green: "rockstargames-sites-legacyab270f1b4d3ad43e7bc51393b7c5c089",
        darkRed: "rockstargames-sites-legacydc24ce78d962f3472b06955bf8855103",
        darkBlue: "rockstargames-sites-legacyb354493baac7389b21b511009f287428",
        goldenrod: "rockstargames-sites-legacye4a078efee11d24c64e93ccf0744a33f",
        skull: "rockstargames-sites-legacyd4581a495de14e6762bb15debe5bb810"
      };
      var d = l(95240);
      const {
        sanitize: m
      } = i(), u = e => {
        let {
          list: a,
          string: l,
          starColor: n,
          style: i,
          className: u,
          game: c,
          noImg: b,
          columns: p,
          mobileColumns: g
        } = e;
        const [f, v] = (0, t.useState)(null), k = l ? l.split("_#_") : a;
        return (0, t.useEffect)((() => {
          v(a)
        }), [a]), l || a ? p && f ? (0, d.jsx)("div", {
          className: s.grid,
          style: {
            "--unordered-list-grid-column": p,
            "--unordered-list-grid-column-mobile": g ?? p
          },
          children: (0, d.jsx)("ul", {
            style: (0, r.safeStyles)(i),
            className: (0, o.classList)(s.itemList, s.noImg, s[n], s[c]),
            children: f.map((e => (0, d.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e.content)
              }
            }, e.content)))
          })
        }) : (0, d.jsx)("ul", {
          style: (0, r.safeStyles)(i),
          className: (0, o.classList)(s.itemList, s.custom, b ? s.noImg : "", n ? s[n] : "", c ? s[c] : "", u ?? ""),
          children: k.map((e => (0, d.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: m(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    6460: (e, a, l) => {
      "use strict";
      l.r(a), l.d(a, {
        componentsForTinaParser: () => _,
        tinaBlockTemplates: () => C
      });
      var t = l(89468),
        n = l(45652);
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
        o = {
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
      l(65988), l(33052);
      var r = l(32104);
      l(504);
      var s = l(95240);
      l(52256), l(65419);
      const d = () => ({
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
        m = () => ({
          name: "modal",
          label: "Modal Content",
          description: "Modify modal content details in here.",
          component: "group",
          fields: []
        }),
        u = () => ({
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
        c = () => ({
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
              fields: [d()]
            }, m()],
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
          }, u()],
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.name??"New"} [Sub Hero]`
          }),
          defaultItem: {
            description: "",
            buttons: [],
            helperLink: (0, t.defaultItemUnique)(u().defaultItem ?? {})
          }
        }),
        b = () => ({
          name: "content",
          label: "Readable Content",
          description: "Edit visible logo images, title text, description text, CTAs, and legal text in here.",
          component: "group",
          fields: [{
            name: "brands",
            label: "Brands",
            component: "group-list",
            description: "Show brand icons in a row",
            fields: [o],
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
          }), p(), v(), (0, t.translatedField)({
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
            ctaGroup: () => p()?.defaultItem ?? {},
            legalText: ""
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
            fields: [(0, t.translatedField)({
              name: "label",
              label: "Button Label",
              component: "text"
            }), g()]
          }, f()],
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
        g = () => ({
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
        f = () => ({
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
        }),
        v = () => ({
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
        k = () => ({
          name: "images",
          label: "Foreground and Background Images",
          description: "Images used in the foreground and the background of the hero.",
          component: "group",
          fields: [y(), h()],
          defaultItem: {
            foreground: () => y()?.defaultItem ?? {},
            background: () => h()?.defaultItem ?? {}
          }
        }),
        h = () => ({
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
        }),
        y = () => ({
          name: "foreground",
          label: "Foreground Image",
          component: "group",
          fields: [...S],
          defaultItem: () => {
            let e = {};
            return S.forEach((a => {
              e = {
                ...e,
                [a.name]: a.defaultItem
              }
            })), e
          }
        }),
        I = [{
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
        x = [{
          name: "horizontal",
          label: "Move the image horizontally",
          component: "group",
          fields: I
        }, {
          name: "vertical",
          label: "Move the image vertically",
          component: "group",
          fields: I
        }, {
          name: "width",
          label: "Adjust the image width",
          component: "group",
          fields: I
        }, {
          name: "height",
          label: "Adjust the image height",
          component: "group",
          fields: I
        }],
        S = [{
          name: "mini",
          label: "Mini Image",
          component: "group",
          description: 'For below the standard "mobile" screen size. Will use the "Mobile Image" image if not defined.',
          fields: [{
            name: "image",
            label: "Mini Image",
            component: "image",
            uploadDir: n.uploadDir
          }, ...x],
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
          }, ...x],
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
          }, ...x],
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
          }, ...x],
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
          }, ...x],
          defaultItem: {
            image: void 0
          }
        }],
        T = () => ({
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
          }, b(), k(), T(), c()],
          defaultItem: {
            type: "gen9",
            animated: !0,
            content: (0, t.defaultItemUnique)(b()?.defaultItem ?? {}),
            images: (0, t.defaultItemUnique)(k()?.defaultItem ?? {}),
            shardsSection: (0, t.defaultItemUnique)(T()?.defaultItem ?? {}),
            subHero: (0, t.defaultItemUnique)(c().defaultItem ?? {})
          },
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.name??"New"} [Hero]`
          })
        });
      var w = l(84344);
      const N = e => {
          let {
            field: a,
            meta: l,
            input: t
          } = e;
          return (0, s.jsxs)(r.FieldWrapper, {
            field: a,
            meta: l,
            children: [(0, s.jsx)("input", {
              type: "range",
              min: "0",
              max: "1",
              step: "0.05",
              name: a.name,
              id: a.id,
              ...t
            }), (0, s.jsx)("br", {}), (0, s.jsxs)("sup", {
              children: ["Value:", " ", t.value]
            })]
          })
        },
        P = () => ({
          name: "backgroundImageAndMask",
          label: "Background Image and Mask",
          description: "Images used for the background with an image mask.",
          component: "group",
          fields: [D(), M()],
          defaultItem: {
            foreground: () => D()?.defaultItem ?? {},
            background: () => M()?.defaultItem ?? {}
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
        M = () => ({
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
        C = {
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
                }]
              }, F(), {
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
                }), (0, w.VideoField)({
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
                      component: N
                    }, {
                      name: "endColor",
                      label: "Gradient End Color",
                      component: "color",
                      colorFormat: "rgb"
                    }, {
                      name: "endOpacity",
                      label: "Enter Gradient Opacity (range: 0.00 - 1.00)",
                      component: N
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
                }), P()],
                defaultItem: {
                  backgroundImageAndMask: (0, t.defaultItemUnique)(P()?.defaultItem ?? {})
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
                hero: (0, t.defaultItemUnique)(F().defaultItem),
                imageGallery: (0, t.defaultItemUnique)(),
                relatedLinks: (0, t.defaultItemUnique)()
              }),
              itemProps: e => (0, t.itemPropsWithKey)(e, {
                label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Legacy Game Page]`
              })
            })
          }
        };
      var B = l(9860),
        L = l(13196),
        E = l(46188);
      const _ = {
        HighlightsItem: L.HighlightsItem,
        legacy: {
          LegacyPageTemplate: E.c
        },
        gen9: {
          TinaWrapper: B.TinaWrapper
        }
      }
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
          r = new Set;
        for (i.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var s = r;
          r = new Set, s.forEach((function(e) {
            o.has(e) || (o.add(e), (t[e] || new Set).forEach((function(e) {
              r.add(e)
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