/*! For license information please see c890e9218a2e97201244a0dfd3740a90.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c7af8584-96f9-4332-bf3b-dac9e9b17936", e._sentryDebugIdIdentifier = "sentry-dbid-c7af8584-96f9-4332-bf3b-dac9e9b17936")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/modules-core-hero",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_modules_core_hero = self.webpackChunk_rockstargames_modules_core_hero || []).push([
  [668], {
    9576: (e, a, l) => {
      "use strict";
      var t = l(1664),
        n = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        d = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        r = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function s(e, a, l) {
        var t, o = {},
          s = null,
          m = null;
        for (t in void 0 !== l && (s = "" + l), void 0 !== a.key && (s = "" + a.key), void 0 !== a.ref && (m = a.ref), a) i.call(a, t) && !r.hasOwnProperty(t) && (o[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === o[t] && (o[t] = a[t]);
        return {
          $$typeof: n,
          type: e,
          key: s,
          ref: m,
          props: o,
          _owner: d.current
        }
      }
      a.Fragment = o, a.jsx = s, a.jsxs = s
    },
    5240: (e, a, l) => {
      "use strict";
      e.exports = l(9576)
    },
    2256: (e, a, l) => {
      "use strict";
      l.d(a, {
        c: () => u
      });
      var t = l(1664),
        n = l(8560),
        o = l.n(n),
        i = l(1740),
        d = l(5792);
      const r = {
        pillBtn: "rockstargames-modules-core-herof87ac9a7d56545847cf4d8ca471b03e6",
        selected: "rockstargames-modules-core-heroa8ea61e57fd58bfcb99aef7e6d687045",
        grid: "rockstargames-modules-core-heroa57241f29873f89f89ab8b27994e71c3",
        itemList: "rockstargames-modules-core-herodaec3f5ce63d42cb07e3e724737c8361",
        gtaplus: "rockstargames-modules-core-herobd78cfb71ed31029ba4279325166bfab",
        rdo: "rockstargames-modules-core-heroa6244398a800ffddab72c14f717b0eab",
        noImg: "rockstargames-modules-core-heroe88f741af7d5e0529ff4fb6bb82af04f",
        gtao: "rockstargames-modules-core-heroab60d91453348d2e4c090ef3ebb04347",
        custom: "rockstargames-modules-core-heroc20e7ba6ceaba3afd37095b172797711",
        yellow: "rockstargames-modules-core-herob16672deedfe102b065925cbe0fb931c",
        hotPink: "rockstargames-modules-core-herod0d01601de7131d9d6d11321b4299e59",
        red: "rockstargames-modules-core-herod1b5397aff94d33b57674b04a3456e03",
        turquoise: "rockstargames-modules-core-herod6541b973ce158c8f2fb81483015211f",
        purple: "rockstargames-modules-core-herof3e34d902681219d4d8490eb164f7727",
        teal: "rockstargames-modules-core-heroa6c3b6b6a2395eb18a1174294f26f4ea",
        blue: "rockstargames-modules-core-heroeade6e843c5afd48d3a8959fb0b88222",
        green: "rockstargames-modules-core-heroa82c313f8f85fc6304ddb703be2fa271",
        darkRed: "rockstargames-modules-core-herod394c61fdce2bf8894ffb801ee680c2a",
        darkBlue: "rockstargames-modules-core-herof1d73cc00a3ab644aab949183a8298a7",
        goldenrod: "rockstargames-modules-core-herocdcb0c5076309a329da2a6e857cc3bdf",
        skull: "rockstargames-modules-core-heroba4bd16bff2fbc40616457007b4a7442"
      };
      var s = l(5240);
      const {
        sanitize: m
      } = o(), u = e => {
        let {
          list: a,
          string: l,
          starColor: n,
          style: o,
          className: u,
          game: c,
          noImg: b,
          columns: p,
          mobileColumns: f
        } = e;
        const [g, h] = (0, t.useState)(null);
        return (0, t.useEffect)((() => {
          h(a)
        }), [a]), l || a ? p && g ? (0, s.jsx)("div", {
          className: r.grid,
          style: {
            "--ordered-list-grid-column": p,
            "--ordered-list-grid-column-mobile": f ?? p
          },
          children: (0, s.jsx)("ol", {
            style: (0, d.safeStyles)(o),
            className: (0, i.classList)(r.itemList, r.noImg, r[n], r[c]),
            children: g.map((e => (0, s.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e.content)
              }
            }, e.content)))
          })
        }) : (0, s.jsx)("ol", {
          style: (0, d.safeStyles)(o),
          className: (0, i.classList)(r.itemList, r.custom, b ? r.noImg : "", n ? r[n] : "", c ? r[c] : "", u ?? ""),
          children: a.map((e => (0, s.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: m(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    5419: (e, a, l) => {
      "use strict";
      l.d(a, {
        c: () => u
      });
      var t = l(1664),
        n = l(8560),
        o = l.n(n),
        i = l(1740),
        d = l(5792);
      const r = {
        grid: "rockstargames-modules-core-heroac295ed5b9cb441ed17843b34e83ea17",
        itemList: "rockstargames-modules-core-herocaf5589ddeca00ed09213e547674b1f3",
        gtaplus: "rockstargames-modules-core-herob291112adcf994a0f6acadd86f73b78a",
        rdo: "rockstargames-modules-core-herod146e8f862baefb60e91be5aa3c17b6e",
        noImg: "rockstargames-modules-core-heroba9b5ae08642b0213a3f04b3db9a9dac",
        gtao: "rockstargames-modules-core-herob6f2bdfd6a1d57b7ce840f7a56cc510b",
        custom: "rockstargames-modules-core-heroaf89164a043648d1464686ff13363ee4",
        yellow: "rockstargames-modules-core-herod244b17b74fc46269e8a106a99ab0f87",
        hotPink: "rockstargames-modules-core-herod90b28503318563cfd6059146d1fb6b6",
        red: "rockstargames-modules-core-heroc3f8a8706901874d906f94c626be3c1e",
        turquoise: "rockstargames-modules-core-herofe2ec36e92e2bb4d453fdc4b05966418",
        purple: "rockstargames-modules-core-herof5f7baf5b56f5b2ada053a93392bbf7a",
        teal: "rockstargames-modules-core-herof4a229f41cd20f181d810c311416e3f2",
        blue: "rockstargames-modules-core-herof6f689d687bcd482ea2cd2990fd66878",
        green: "rockstargames-modules-core-heroab270f1b4d3ad43e7bc51393b7c5c089",
        darkRed: "rockstargames-modules-core-herodc24ce78d962f3472b06955bf8855103",
        darkBlue: "rockstargames-modules-core-herob354493baac7389b21b511009f287428",
        goldenrod: "rockstargames-modules-core-heroe4a078efee11d24c64e93ccf0744a33f",
        skull: "rockstargames-modules-core-herod4581a495de14e6762bb15debe5bb810"
      };
      var s = l(5240);
      const {
        sanitize: m
      } = o(), u = e => {
        let {
          list: a,
          string: l,
          starColor: n,
          style: o,
          className: u,
          game: c,
          noImg: b,
          columns: p,
          mobileColumns: f
        } = e;
        const [g, h] = (0, t.useState)(null), v = l ? l.split("_#_") : a;
        return (0, t.useEffect)((() => {
          h(a)
        }), [a]), l || a ? p && g ? (0, s.jsx)("div", {
          className: r.grid,
          style: {
            "--unordered-list-grid-column": p,
            "--unordered-list-grid-column-mobile": f ?? p
          },
          children: (0, s.jsx)("ul", {
            style: (0, d.safeStyles)(o),
            className: (0, i.classList)(r.itemList, r.noImg, r[n], r[c]),
            children: g.map((e => (0, s.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e.content)
              }
            }, e.content)))
          })
        }) : (0, s.jsx)("ul", {
          style: (0, d.safeStyles)(o),
          className: (0, i.classList)(r.itemList, r.custom, b ? r.noImg : "", n ? r[n] : "", c ? r[c] : "", u ?? ""),
          children: v.map((e => (0, s.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: m(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    5288: (e, a, l) => {
      "use strict";
      l.r(a), l.d(a, {
        default: () => x
      });
      var t = l(9468),
        n = l(5652);
      const o = {
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
      l(5988), l(3052), l(2104), l(504), l(5240), l(2256), l(5419);
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
        d = () => ({
          name: "modal",
          label: "Modal Content",
          description: "Modify modal content details in here.",
          component: "group",
          fields: []
        }),
        r = () => ({
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
            text: "Placeholder text",
            linkText: "Click here Placeholder",
            link: "https://rockstargames.com/"
          })
        }),
        s = () => ({
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
              fields: [i()]
            }, d()],
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
          }, r()],
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.name??"New"} [Sub Hero]`
          }),
          defaultItem: {
            description: "Placeholder",
            buttons: [],
            helperLink: (0, t.defaultItemUnique)(r().defaultItem ?? {})
          }
        }),
        m = () => ({
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
          }), u(), p(), (0, t.translatedField)({
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
            title: "Placeholder Title",
            description: "This is a placeholder description. It has a couple sentences. Actually, more than a couple: a few!",
            ctaGroup: () => u()?.defaultItem ?? {},
            legalText: "This is tiny placeholder legal text."
          }
        }),
        u = () => ({
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
            }), c()]
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
        c = () => ({
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
              label: "Placeholder Label",
              href: "https://rockstargames.com/"
            })
          }]
        }),
        p = () => ({
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
        f = () => ({
          name: "images",
          label: "Foreground and Background Images",
          description: "Images used in the foreground and the background of the hero.",
          component: "group",
          fields: [h(), g()],
          defaultItem: {
            foreground: () => h()?.defaultItem ?? {},
            background: () => g()?.defaultItem ?? {}
          }
        }),
        g = () => ({
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
        h = () => ({
          name: "foreground",
          label: "Foreground Image",
          component: "group",
          fields: [...y],
          defaultItem: () => {
            let e = {};
            return y.forEach((a => {
              e = {
                ...e,
                [a.name]: a.defaultItem
              }
            })), e
          }
        }),
        v = [{
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
        k = [{
          name: "horizontal",
          label: "Move the image horizontally",
          component: "group",
          fields: v
        }, {
          name: "vertical",
          label: "Move the image vertically",
          component: "group",
          fields: v
        }, {
          name: "width",
          label: "Adjust the image width",
          component: "group",
          fields: v
        }, {
          name: "height",
          label: "Adjust the image height",
          component: "group",
          fields: v
        }],
        y = [{
          name: "mini",
          label: "Mini Image",
          component: "group",
          description: 'For below the standard "mobile" screen size. Will use the "Mobile Image" image if not defined.',
          fields: [{
            name: "image",
            label: "Mini Image",
            component: "image",
            uploadDir: n.uploadDir
          }, ...k],
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
          }, ...k],
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
          }, ...k],
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
          }, ...k],
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
          }, ...k],
          defaultItem: {
            image: void 0
          }
        }],
        I = () => ({
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
            title: "Placeholder Shards Section Title",
            shards: []
          }
        }),
        x = () => ({
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
          }, m(), f(), I(), s()],
          defaultItem: {
            type: "gen9",
            animated: !0,
            content: (0, t.defaultItemUnique)(m()?.defaultItem ?? {}),
            images: (0, t.defaultItemUnique)(f()?.defaultItem ?? {}),
            shardsSection: (0, t.defaultItemUnique)(I()?.defaultItem ?? {}),
            subHero: (0, t.defaultItemUnique)(s().defaultItem ?? {})
          },
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.name??"New"} [Hero]`
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

      function o(e, a) {
        var l = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (l.loc = e.loc);
        var o = t[a] || new Set,
          i = new Set,
          d = new Set;
        for (o.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var r = d;
          d = new Set, r.forEach((function(e) {
            i.has(e) || (i.add(e), (t[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var t = n(e, a);
          t && l.definitions.push(t)
        })), l
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          l(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = o(a, "TinaModulesList"), e.exports.TinaModulesInfo = o(a, "TinaModulesInfo")
    }
  }
]);
//# sourceMappingURL=c890e9218a2e97201244a0dfd3740a90.js.map