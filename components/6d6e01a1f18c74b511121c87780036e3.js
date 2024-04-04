! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      l = (new Error).stack;
    l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "e9c4b558-6cb9-4e62-b704-793719cce429", e._sentryDebugIdIdentifier = "sentry-dbid-e9c4b558-6cb9-4e62-b704-793719cce429")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/components",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_components = self.webpackChunk_rockstargames_components || []).push([
  [356], {
    1996: (e, l, a) => {
      "use strict";
      var t = a(8200),
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

      function d(e, l, a) {
        var t, i = {},
          d = null,
          m = null;
        for (t in void 0 !== a && (d = "" + a), void 0 !== l.key && (d = "" + l.key), void 0 !== l.ref && (m = l.ref), l) o.call(l, t) && !r.hasOwnProperty(t) && (i[t] = l[t]);
        if (e && e.defaultProps)
          for (t in l = e.defaultProps) void 0 === i[t] && (i[t] = l[t]);
        return {
          $$typeof: n,
          type: e,
          key: d,
          ref: m,
          props: i,
          _owner: s.current
        }
      }
      l.Fragment = i, l.jsx = d, l.jsxs = d
    },
    3480: (e, l, a) => {
      "use strict";
      e.exports = a(1996)
    },
    7020: (e, l, a) => {
      "use strict";
      a.d(l, {
        c: () => u
      });
      var t = a(8200),
        n = a(9416),
        i = a.n(n),
        o = a(1740),
        s = a(5792);
      const r = {
        pillBtn: "rockstargames-componentsd810fb92dfd42bc44ba286ea7f4ca3b7",
        selected: "rockstargames-componentsbaf6f0b8c58ebca5fce849d220999883",
        grid: "rockstargames-componentsdebe9dcb1f7173c7819134eb6306602e",
        itemList: "rockstargames-componentsef6c598b9b7622adff2026dec903f790",
        gtaplus: "rockstargames-componentsd4be04331b6a5f8859df9fbcefe9f96c",
        rdo: "rockstargames-componentsaff5c1a135f34b95b6caf0b4120c2a0b",
        noImg: "rockstargames-componentse22ba35cec3156e742c511e38df6b3fb",
        gtao: "rockstargames-componentsbae14e42d7d43f5b95dc42c2aad55e65",
        custom: "rockstargames-componentsb306c3d666df0f49beeb0abf1009ca57",
        yellow: "rockstargames-componentsd4194477b8d74d05b2cc47b89b7381f1",
        hotPink: "rockstargames-componentsa084561ccce9e0a8e8be22cb91351542",
        red: "rockstargames-componentse96347df2ba00dd709953604edd75075",
        turquoise: "rockstargames-componentsa8331c51f0bc357903fbcc0bcea9862e",
        purple: "rockstargames-componentsb2812084d4bc4da16ad7cd8897d23525",
        teal: "rockstargames-componentse132a6b1e366f2fec77f23bf32b497d0",
        blue: "rockstargames-componentsc8a4acf9d4576443a15fcae83d81d791",
        green: "rockstargames-componentsd9e6f12dcca597ca30e9c45921c361c2",
        darkRed: "rockstargames-componentsd735aca85c099013a14f720595aa4902",
        darkBlue: "rockstargames-componentsec3bcc6a9e1bfd4adc746d7d8bac1142",
        goldenrod: "rockstargames-componentsbe9a0d659fd5a7b58d3201c931bafd66",
        skull: "rockstargames-componentsd7be25cefb21d3912007e5ec987f35ba"
      };
      var d = a(3480);
      const {
        sanitize: m
      } = i(), u = e => {
        let {
          list: l,
          string: a,
          starColor: n,
          style: i,
          className: u,
          game: c,
          noImg: p,
          columns: b,
          mobileColumns: f
        } = e;
        const [g, v] = (0, t.useState)(null);
        return (0, t.useEffect)((() => {
          v(l)
        }), [l]), a || l ? b && g ? (0, d.jsx)("div", {
          className: r.grid,
          style: {
            "--ordered-list-grid-column": b,
            "--ordered-list-grid-column-mobile": f ?? b
          },
          children: (0, d.jsx)("ol", {
            style: (0, s.safeStyles)(i),
            className: (0, o.classList)(r.itemList, r.noImg, r[n], r[c]),
            children: g.map((e => (0, d.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e.content)
              }
            }, e.content)))
          })
        }) : (0, d.jsx)("ol", {
          style: (0, s.safeStyles)(i),
          className: (0, o.classList)(r.itemList, r.custom, p ? r.noImg : "", n ? r[n] : "", c ? r[c] : "", u ?? ""),
          children: l.map((e => (0, d.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: m(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    4004: (e, l, a) => {
      "use strict";
      a.d(l, {
        c: () => u
      });
      var t = a(8200),
        n = a(9416),
        i = a.n(n),
        o = a(1740),
        s = a(5792);
      const r = {
        grid: "rockstargames-componentsed478db3df0bb24d8430e5f2c3db50e7",
        itemList: "rockstargames-componentsae1d16253b1fc6703f5efac102a44af0",
        gtaplus: "rockstargames-componentse738d52851f09866f9377fd4f69f4b96",
        rdo: "rockstargames-componentsc83f215f48446acad56b94eefc456562",
        noImg: "rockstargames-componentsdec6cf56e697288fc7996ac4b87ed90c",
        gtao: "rockstargames-componentscd87095d9ca8d71d00f3c28284bb0d87",
        custom: "rockstargames-componentsa086421981acea761fa1a28d49ee8487",
        yellow: "rockstargames-componentsf3d52db2471886bbb8f13bfe8afdb69d",
        hotPink: "rockstargames-componentsa145a18ae8267704d5d421de8e5878c2",
        red: "rockstargames-componentsea530c2c0d7eb752771f7c368c9037d3",
        turquoise: "rockstargames-componentsfe6c65112390936da939c92120c76056",
        purple: "rockstargames-componentse4671875cdd6d237565d851bc1626a0e",
        teal: "rockstargames-componentsf0ca3eff9617c871dd9658ae343b5619",
        blue: "rockstargames-componentsd495633df4c51a02412ce8eac7cf9e24",
        green: "rockstargames-componentsbfcd222c01908eb5cf73f035fc0b7719",
        darkRed: "rockstargames-componentsd768e1a3c301702a9573e52e3ec00bc0",
        darkBlue: "rockstargames-componentsf1d45b2ea0bb160d7bb06b45ebabe4df",
        goldenrod: "rockstargames-componentsa30641b08e9f3c2ce6608a387abf5e62",
        skull: "rockstargames-componentsa82bbef0b3177b321657177dd01be991"
      };
      var d = a(3480);
      const {
        sanitize: m
      } = i(), u = e => {
        let {
          list: l,
          string: a,
          starColor: n,
          style: i,
          className: u,
          game: c,
          noImg: p,
          columns: b,
          mobileColumns: f
        } = e;
        const [g, v] = (0, t.useState)(null), h = a ? a.split("_#_") : l;
        return (0, t.useEffect)((() => {
          v(l)
        }), [l]), a || l ? b && g ? (0, d.jsx)("div", {
          className: r.grid,
          style: {
            "--unordered-list-grid-column": b,
            "--unordered-list-grid-column-mobile": f ?? b
          },
          children: (0, d.jsx)("ul", {
            style: (0, s.safeStyles)(i),
            className: (0, o.classList)(r.itemList, r.noImg, r[n], r[c]),
            children: g.map((e => (0, d.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e.content)
              }
            }, e.content)))
          })
        }) : (0, d.jsx)("ul", {
          style: (0, s.safeStyles)(i),
          className: (0, o.classList)(r.itemList, r.custom, p ? r.noImg : "", n ? r[n] : "", c ? r[c] : "", u ?? ""),
          children: h.map((e => (0, d.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: m(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    4356: (e, l, a) => {
      "use strict";
      a.r(l), a.d(l, {
        BrandsField: () => o,
        Button: () => n,
        ButtonGroup: () => s,
        CalloutSection: () => p,
        Carousel: () => b,
        ConditionalBlock: () => g,
        Cta: () => v,
        Embed: () => h,
        ExpandingPlatformButton: () => y,
        Grid: () => k,
        HTMLElement: () => I,
        Hero: () => c,
        ImageWithBadge: () => S,
        LayeredImage: () => N,
        ListItem: () => T,
        MultiSourceImage: () => F,
        NewswireRelated: () => w,
        OrderedList: () => Y,
        ParallaxInnerLayer: () => L,
        ParallaxOuterLayer: () => A,
        ParallaxWrapper: () => C,
        PromoModule: () => _,
        Rating: () => R,
        ResponsiveFlexBox: () => M,
        ResponsiveFlexItem: () => E,
        ResponsiveImg: () => W,
        Separator: () => $,
        TinaModuleFetchNRender: () => K,
        TinaWrapper: () => z,
        TrackList: () => X,
        UnorderedList: () => J,
        UserVote: () => ee,
        brandField: () => i,
        tinaModuleParentSelectorPlugin: () => V,
        tinaModuleSelectorPlugin: () => O
      });
      var t = a(9468);
      const n = e => {
          let {
            parent: l = null
          } = e;
          return {
            label: "Button",
            fields: [{
              name: "content",
              label: "Button Text",
              component: "text"
            }, {
              name: l ? `${l}.to` : "to",
              label: "HREF",
              component: "text"
            }, (0, t.AttributesFields)({
              parent: l
            })],
            defaultItem: () => (0, t.defaultItemUnique)({
              content: "Click Me",
              to: "/",
              attributes: {
                style: {
                  "--padding-dynamic": "var(--padding-sides)"
                }
              }
            }),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: e?.buttonText ?? "Button"
            })
          }
        },
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
        },
        o = () => ({
          name: "brands",
          label: "Brands",
          component: "group-list",
          description: "Show brand icons in a row",
          fields: [i],
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `Brand [${e?.brand??null}]`
          })
        }),
        s = {
          CtasField: function() {
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
              }],
              ...e,
              defaultItem: () => (0, t.defaultItemUnique)(),
              itemProps: e => (0, t.itemPropsWithKey)(e, {
                label: `CTA [${e?.[t.TINA_MEMOQ_PREFIX]?.title??null}]`
              })
            }
          }
        };
      var r = a(5652);
      const d = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "background";
          const l = [{
            name: "mobile",
            label: "Mobile",
            component: "image",
            description: "(If responsive, only Mobile Source is needed!)",
            previewSrc: r.previewSrc,
            uploadDir: r.uploadDir
          }, {
            name: "desktop",
            label: "Desktop",
            component: "image",
            previewSrc: r.previewSrc,
            uploadDir: r.uploadDir
          }];
          return "background" === e && l.push((0, t.StyleField)({
            filter: "image"
          })), {
            component: "group",
            name: `${e}Image`,
            label: `${e.charAt(0).toUpperCase()+e.slice(1)} Images`,
            fields: l
          }
        },
        m = function() {
          return {
            name: "ctas",
            label: "CTA buttons",
            component: "group-list",
            fields: [{
              name: "isInExpandingButton",
              label: "Is this CTA within the expanding button?",
              component: "toggle"
            }, {
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
            }, {
              name: "href",
              label: "Link",
              component: "text"
            }, {
              name: "buttonText",
              label: "Button Text",
              description: "For non-platform button labels",
              component: "text"
            }],
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `Link for [${e?.platform??e?.buttonText??""}]`
            }),
            defaultItem: () => (0, t.defaultItemUnique)()
          }
        },
        u = [{
          name: "horizontal",
          label: "Move the image horizontally",
          description: "Accepts positive and negative values (converted to pixels)",
          component: "text"
        }, {
          name: "vertical",
          label: "Move the image vertically",
          description: "Move the image up/down in pixels",
          component: "text"
        }, {
          name: "imageWidth",
          label: "Image width",
          description: "Accepts positive values (converted to viewport width)",
          component: "text"
        }],
        c = () => ({
          label: "Hero",
          component: "group",
          fields: [(0, t.NameField)(), {
            name: "theme",
            label: "Is this a Gen9 or a Legacy hero?",
            component: "select",
            options: [{
              label: "Gen9",
              value: "gen9"
            }, {
              label: "Legacy",
              value: "legacy"
            }]
          }, {
            name: "animated",
            label: "Do you want this Hero animated on scroll?",
            component: "toggle"
          }, o(), (0, t.translatedField)({
            name: "title",
            label: "Title",
            component: "text",
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: "Title"
            }),
            defaultItem: () => (0, t.defaultItemUnique)()
          }), (0, t.translatedField)({
            name: "description",
            label: "Description",
            component: "text"
          }), (0, t.translatedField)({
            name: "expandingButtonLabel",
            label: "Expanding Button Label",
            description: "Default: Subscribe",
            component: "text"
          }), m(), (0, t.translatedField)({
            name: "legalText",
            label: "Legal Text",
            component: "text",
            description: "Display smaller legal text underneath the CTA buttons."
          }), d(), d("layered"), {
            name: "layeredImageSettings",
            label: "Layered Image Position Settings",
            component: "group",
            fields: [{
              name: "small",
              component: "group",
              label: "Layered Image Customization - Small Screens",
              fields: [u[1]]
            }, {
              name: "medium",
              component: "group",
              label: "Layered Image Customization - Medium Screens",
              fields: [u[1]]
            }, {
              name: "large",
              component: "group",
              label: "Layered Image Customization - Large Screens",
              fields: u
            }, {
              name: "xlarge",
              component: "group",
              label: "Layered Image Customization - Extra Large Screens",
              fields: u
            }]
          }, {
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
              }), d("shard")],
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
            label: `${e?.name??"New"} [Hero]`
          })
        }),
        p = () => ({
          label: "Callout Section",
          name: "callout_section",
          component: "group",
          fields: [(0, t.NameField)(), (0, t.translatedField)({
            label: "Header",
            name: "header",
            component: "text"
          }), (0, t.translatedField)({
            label: "Subheader",
            name: "subheader",
            component: "text"
          }), {
            label: "Type",
            name: "type",
            component: "select",
            options: [{
              label: "Text Only",
              value: ""
            }, {
              label: "Link",
              value: "link"
            }, {
              label: "Button",
              value: "button"
            }, {
              label: "Vote",
              value: "vote"
            }]
          }, (0, t.translatedField)({
            label: "Link/Button Text",
            description: "Required for Link- and Button-type Callout Sections",
            name: "action_text",
            component: "text"
          }), (0, t.translatedField)({
            label: "Link/Button Link",
            description: "Required for Link- and Button-type Callout Sections",
            name: "link",
            component: "text"
          })],
          defaultItem: () => (0, t.defaultItemUnique)({}),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.name??"New"} [Callout Section]`
          })
        }),
        b = e => {
          let {
            game: l,
            filter: a = null,
            label: n = "Carousel"
          } = e;
          const i = [(0, t.StyleField)({
            filter: "carousel"
          }), (0, t.NameField)(), {
            label: "Render Template",
            name: "renderTemplate",
            description: "Set the render template",
            component: "select",
            options: [{
              value: "",
              label: "Standard"
            }, {
              value: "panorama",
              label: "Panorama"
            }]
          }, {
            name: "noInfiniteScroll",
            label: "Disable Infinite Scroll?",
            description: "Should infinite scroll be DISABLED for this carousel?",
            component: "toggle"
          }, (0, t.ItemsField)({
            filter: a,
            game: l
          }), {
            label: "Static Copy",
            name: "text",
            description: "[CAROUSEL ONLY]: Title/text that will always be shown beneath the carousel.",
            component: "group",
            fields: [(0, t.translatedField)({
              label: "Title",
              name: "title",
              component: "text"
            }), (0, t.translatedField)({
              label: "Description",
              name: "description",
              component: "html"
            })]
          }];
          return {
            name: "carousel",
            label: n,
            component: "group",
            fields: [...i, (0, t.ClassNamesField)({
              filter: "carousel"
            }), (0, t.MediaQueryField)({
              filter: a,
              fields: i,
              game: l
            })],
            defaultItem: () => (0, t.defaultItemUnique)({
              renderTemplate: "",
              text: (0, t.defaultItemUnique)()
            }),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [${n}]` : `New [${n}]`
            })
          }
        },
        f = e => {
          let {
            label: l = "Conditional Block",
            templates: a = []
          } = e;
          return {
            name: "conditionalBlockField",
            label: l,
            component: "group",
            fields: [{
              label: "Condition(s)",
              name: "condition",
              description: "When to show the content.",
              component: "multi-select",
              options: [{
                label: "User IS Logged In",
                value: "user:is:loggedIn"
              }, {
                label: "User IS NOT Logged In",
                value: "user:not:loggedIn"
              }, {
                label: "User IS GTA+",
                value: "user:is:gtaPlus"
              }, {
                label: "User IS NOT GTA+",
                value: "user:not:gtaPlus"
              }]
            }, {
              label: "Conditional Content",
              name: t.TINA_PARSER_KEY,
              description: "The content that is shown ONLY if the condition(s) are ALL true.",
              component: "blocks",
              templates: a
            }],
            defaultItem: () => (0, t.defaultItemUnique)({}),
            itemProps: e => {
              return (0, t.itemPropsWithKey)(e, {
                label: `${l=e?.condition,Array.isArray(l)?l.map((e=>e.label)).join(", "):"New"} [Conditional Block]`
              });
              var l
            }
          }
        },
        g = e => {
          let {
            label: l = "Group of Conditional Blocks",
            templates: a = []
          } = e;
          return {
            name: "groupOfConditionalBlocks",
            label: l,
            component: "group",
            fields: [(0, t.NameField)(), {
              name: t.TINA_PARSER_KEY,
              label: "Conditional Blocks",
              description: "Sections of content that are only displayed if the selected condition(s) are true.",
              component: "blocks",
              templates: [f({
                templates: a
              })]
            }],
            defaultItem: () => (0, t.defaultItemUnique)({}),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${e?.name??"New"} [Group of Conditional Blocks]`
            })
          }
        },
        v = e => {
          let {
            parent: l = null
          } = e;
          return {
            label: "CTA",
            fields: [(0, t.translatedField)({
              name: "content",
              label: "CTA Text",
              component: "text"
            }), (0, t.translatedField)({
              name: l ? `${l}.href` : "href",
              label: "href",
              component: "text"
            }), {
              name: "variant",
              label: "Variant",
              description: "(Optional) Primary, Secondary, Platform, etc.",
              component: "select",
              options: [{
                value: "",
                label: "-- Select Variant --"
              }, {
                value: "primary",
                label: "Primary"
              }, {
                value: "secondary",
                label: "Secondary"
              }, {
                value: "platform",
                label: "Platform"
              }, {
                value: "gen9",
                label: "Next Generation"
              }]
            }, (0, t.translatedField)({
              name: "platformItem",
              label: "Select Platform Item",
              description: "If you selected Platform from above, please platforms here.",
              component: "select",
              options: [{
                label: "--- SELECT ---",
                value: null
              }, {
                label: "PlayStation",
                value: "ps"
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
              }, {
                label: "Apple App Store",
                value: "applestore"
              }, {
                label: "Android Playstore",
                value: "googleplay"
              }]
            }), {
              name: "icon",
              label: "Icon",
              component: "select",
              description: "Adds an icon inside of the button.",
              options: [{
                label: "-- Select Icon --",
                value: ""
              }, {
                label: "ps",
                value: "ps"
              }, {
                label: "ps3",
                value: "ps3"
              }, {
                label: "ps4",
                value: "ps4"
              }, {
                label: "ps5",
                value: "ps5"
              }, {
                label: "nintendo switch",
                value: "nintendoSwitch"
              }, {
                label: "xbox",
                value: "xbox"
              }, {
                label: "xbox one",
                value: "xboxone"
              }, {
                label: "xbox series x|s",
                value: "xboxseriesxs"
              }, {
                label: "xbox 360",
                value: "xbox360"
              }, {
                label: "pc",
                value: "pc"
              }, {
                label: "play button",
                value: "play"
              }, {
                label: "apple store",
                value: "applestore"
              }, {
                label: "googleplay",
                value: "googleplay"
              }, {
                label: "question mark",
                value: "questionMark"
              }]
            }, {
              name: "iconPosition",
              label: "Icon Position",
              component: "select",
              description: "If you selected an icon above, which side should it be aligned to?",
              options: [{
                label: "-- Select Icon Position --",
                value: "none"
              }, {
                label: "left",
                value: "left"
              }, {
                label: "right",
                value: "right"
              }]
            }, (0, t.StyleField)({
              name: "iconStyle",
              label: "Icon Styles"
            }), {
              name: "style.width",
              label: "Button Width",
              component: "text"
            }, {
              name: "style.--btn-hover-bg-color",
              label: "Hover BG Color",
              component: "color"
            }, {
              name: "style.--btn-hover-border-color",
              label: "Hover Border Color",
              component: "color"
            }, {
              name: "style.--btn-hover-font-color",
              label: "Hover Font Color",
              description: "Please note this will NOT affect the icon (which is a static image).",
              component: "color"
            }, (0, t.GtmField)(), (0, t.StyleField)({}), (0, t.TranslationKey)({
              label: "Translation Key",
              description: "Only used for CTAs that were marked as translatable after they were created. This value must begin with `key_` and MUST BE UNIQUE."
            })],
            defaultItem: () => (0, t.defaultItemUnique)({}),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${e?.content??"New"} [CTA]`
            })
          }
        },
        h = e => {
          let {
            parent: l = null,
            post: a = {},
            game: n = null,
            filter: i = ""
          } = e;
          return {
            label: "Embed",
            fields: [(0, t.NameField)(), (0, t.translatedField)({
              name: "componentTitle",
              label: "Title",
              component: "text"
            }), {
              name: "type",
              label: "Embed Type",
              description: "Instagram, Twitter, YouTube, Soundcloud, Spotify, Apple Music, or None.",
              component: "select",
              options: [{
                value: "none",
                label: "None"
              }, {
                value: "instagram",
                label: "Instagram"
              }, {
                value: "twitter",
                label: "Twitter"
              }, {
                value: "youtube",
                label: "YouTube"
              }, {
                value: "soundcloud",
                label: "Soundcloud"
              }, {
                value: "spotify",
                label: "Spotify"
              }, {
                value: "applemusic",
                label: "Apple Music"
              }]
            }, {
              name: "items",
              label: "Items",
              component: "blocks",
              templates: [{
                name: "text",
                label: "Text",
                component: "group",
                fields: [(0, t.NameField)(), (0, t.translatedField)({
                  name: "text",
                  label: "Text",
                  component: "html"
                })],
                defaultItem: () => (0, t.defaultItemUnique)(),
                itemProps: e => (0, t.itemPropsWithKey)(e, {
                  label: e?.name ? `${e.name} [Text]` : "New [Text]"
                })
              }, {
                name: "embed",
                label: "Embed",
                component: "group",
                fields: [(0, t.NameField)(), {
                  name: "embed",
                  label: "Embed Code",
                  component: "textarea",
                  description: "The HTML snippet for your embed code."
                }, (0, t.translatedField)({
                  name: "caption",
                  label: "Caption",
                  component: "html"
                })],
                defaultItem: () => (0, t.defaultItemUnique)(),
                itemProps: e => (0, t.itemPropsWithKey)(e, {
                  label: e?.name ? `${e.name} [Embed Code]` : "New [Embed Code]"
                })
              }],
              defaultItem: () => (0, t.defaultItemUnique)()
            }],
            defaultItem: () => (0, t.defaultItemUnique)({
              type: "none"
            }),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Embed]` : "New [Embed]"
            })
          }
        },
        y = e => {
          let {
            templates: l = null
          } = e;
          return {
            name: "type",
            label: "Expanding Platforms Button",
            component: "group",
            fields: [(0, t.translatedField)({
              name: "buttonText",
              label: "Button Text",
              component: "text"
            }), {
              name: t.TINA_PARSER_KEY,
              label: "Content Above Button (fades out when button expands)",
              component: "blocks",
              templates: l
            }, (0, t.PlatformsAndLinksField)()],
            defaultItem: () => (0, t.defaultItemUnique)({
              buttonText: (0, t.defaultItemUnique)()
            }),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${e?.name??"New"} [Expanding Platform Button]`
            })
          }
        },
        k = e => {
          let {
            game: l = null,
            templates: a = null,
            styleDefaults: n = {},
            context: i = null,
            label: o = "Grid",
            nameNecessary: s = !0
          } = e;
          return {
            name: "type",
            label: o,
            component: "group",
            fields: [...s ? [(0, t.NameField)()] : [], ...i ? [] : [(0, t.GridContextField)()], {
              label: "Grid Items",
              name: t.TINA_PARSER_KEY,
              component: "blocks",
              templates: a
            }, {
              name: "reversedOnMobile",
              label: "Reversed on Mobile?",
              description: "Reverse the order of items on mobile?",
              component: "toggle"
            }, (0, t.StyleField)({
              filter: "grid"
            }), (0, t.ImageField)({
              game: l,
              label: "Background Image"
            }), (0, t.ThemeField)(), (0, t.IdField)()],
            defaultItem: () => (0, t.defaultItemUnique)({
              style: n,
              context: i
            }),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: s ? `${e?.name??"New"} [Grid]` : ""
            })
          }
        },
        I = e => {
          let {
            parent: l = null
          } = e;
          return {
            name: "type",
            label: "Text",
            component: "group",
            fields: [(0, t.NameField)(), (0, t.TextField)(), (0, t.ClassNamesField)({
              filter: "grid"
            }), (0, t.StyleField)({
              filter: "grid"
            })],
            defaultItem: () => (0, t.defaultItemUnique)({
              style: {
                "--max-width-dynamic": "var(--max-width-static)"
              }
            }),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Text]` : "New [Text]"
            })
          }
        },
        S = e => {
          let {
            game: l = null,
            label: a = "Image",
            description: n = ""
          } = e;
          return {
            name: "imageWithBadge",
            label: a,
            description: n,
            component: "group",
            fields: [(0, t.NameField)(), (0, t.ImageField)({
              game: l
            }), (0, t.LeadAssetToggle)(), (0, t.ClassNamesField)({
              filter: "image"
            }), (0, t.StyleField)({
              filter: "image"
            })],
            defaultItem: () => (0, t.defaultItemUnique)({
              image: (0, t.defaultItemUnique)(t._defaultImageValues),
              badgeType: "rdr2" === l ? "badge3" : ""
            }),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        },
        x = e => {
          let {
            name: l = null,
            label: a = null,
            description: n = null,
            filter: i = null,
            game: o
          } = e, s = [(0, t.NameField)(), (0, t.ImageField)({
            game: o
          })];
          "layer" === i && s.push({
            label: "Image Size",
            name: "imageSizeClass",
            description: 'Set the size of the layer. (If Width is chosen, Height is "auto". If Height is chosen, Width is "auto".)',
            component: "select",
            options: [{
              label: "-- Select Image Size --",
              value: ""
            }, {
              label: "XS (Width)",
              value: "layer-xs-width"
            }, {
              label: "XS (Height)",
              value: "layer-xs-height"
            }, {
              label: "SM (Width)",
              value: "layer-sm-width"
            }, {
              label: "SM (Height)",
              value: "layer-sm-height"
            }, {
              label: "MD (Width)",
              value: "layer-md-width"
            }, {
              label: "MD (Height)",
              value: "layer-md-height"
            }, {
              label: "LG (Width)",
              value: "layer-lg-width"
            }, {
              label: "LG (Height)",
              value: "layer-lg-height"
            }, {
              label: "XL (Width)",
              value: "layer-xl-width"
            }, {
              label: "XL (Height)",
              value: "layer-xl-height"
            }, {
              label: "XXL (Width)",
              value: "layer-xxl-width"
            }, {
              label: "XXL (Height)",
              value: "layer-xxl-height"
            }]
          }, {
            label: "Image Position - Horizontal",
            name: "positionClassX",
            description: "Set the position of the image",
            component: "select",
            options: [{
              label: "-- Select Position --",
              value: ""
            }, {
              label: "Left",
              value: "left-x"
            }, {
              label: "Center",
              value: "center-x"
            }, {
              label: "Right",
              value: "right-x"
            }]
          }, {
            label: "Image Position - Vertical",
            name: "positionClassY",
            description: "Set the position of the image",
            component: "select",
            options: [{
              label: "-- Select Position --",
              value: ""
            }, {
              label: "Top",
              value: "top-y"
            }, {
              label: "Center",
              value: "center-y"
            }, {
              label: "Bottom",
              value: "bottom-y"
            }]
          }), s.push({
            label: "Image Fit",
            name: "objectFitClass",
            description: "Set the object-fit property on the image",
            component: "select",
            options: [{
              label: "-- Select Fit --",
              value: ""
            }, {
              label: "Cover",
              value: "cover"
            }, {
              label: "Contain",
              value: "contain"
            }]
          }), "background" === i && s.push({
            label: "Image Position - Horizontal",
            name: "style.--bg-position-horizontal",
            description: "Set the position of the image",
            component: "select",
            options: [{
              label: "-- Select Position --",
              value: ""
            }, {
              label: "Left",
              value: "left"
            }, {
              label: "Center",
              value: "center"
            }, {
              label: "Right",
              value: "right"
            }]
          }, {
            label: "Image Position - Vertical",
            name: "style.--bg-position-vertical",
            description: "Set the position of the image",
            component: "select",
            options: [{
              label: "-- Select Position --",
              value: ""
            }, {
              label: "Top",
              value: "top"
            }, {
              label: "Center",
              value: "center"
            }, {
              label: "Bottom",
              value: "bottom"
            }]
          }), s.push((0, t.DisplayClassField)({}), (0, t.StyleField)({
            filter: "layeredImage"
          }));
          const r = {
            layer: {},
            background: {
              style: {
                "--bg-position-horizontal": "center",
                "--bg-position-vertical": "center"
              },
              objectFitClass: "cover",
              imageSizeClass: "bg-img"
            }
          };
          return {
            name: l ?? "imageLayer",
            label: a ?? "Image Layer",
            component: "group",
            description: n,
            fields: s,
            defaultItem: () => (0, t.defaultItemUnique)(r[i]),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${e?.name??"New"} [${a}]`
            })
          }
        },
        N = e => {
          let {
            game: l = null
          } = e;
          return {
            label: "Layered Image",
            fields: [(0, t.NameField)(), {
              label: "Image Variant",
              name: "variantClass",
              description: "What style of responsive hero is this?",
              component: "select",
              options: [{
                label: "Default",
                value: ""
              }, {
                label: "Dual",
                value: "dual"
              }, {
                label: "Two Shards",
                value: "shards_two"
              }, {
                label: "Three Shards",
                value: "shards_three"
              }]
            }, {
              label: "Image Size",
              name: "wrapperSizeClass",
              description: "Set the size of the image container",
              component: "select",
              options: [{
                label: "-- Select Size --",
                value: ""
              }, {
                label: "Small",
                value: "hero-sm"
              }, {
                label: "Medium",
                value: "hero-md"
              }, {
                label: "Large",
                value: "hero-lg"
              }]
            }, {
              label: "Image Layers",
              name: "images",
              description: "Each layer within the image that sits on top of one another (in order)",
              component: "blocks",
              templates: [x({
                name: "backgroundImage",
                label: "Background Image",
                description: "Image that sits behind every other layer",
                filter: "background",
                game: l
              }), x({
                game: l,
                label: "Image Layer",
                filter: "layer"
              })]
            }, (0, t.BorderImageField)({}), (0, t.StyleField)({
              filter: "image"
            })],
            defaultItem: () => (0, t.defaultItemUnique)({
              "--aspect-ratio": "16/9",
              wrapperSizeClass: "hero-lg"
            }),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${e?.name??"New"} [Layered Image]`
            })
          }
        };
      var P = a(5988);
      const T = function() {
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
              label: (0, P.stripHTML)(`${e?.name??e?.[t.TINA_MEMOQ_PREFIX]?.content??"New"} [List Item]`)
            })
          }
        },
        F = e => {
          let {
            game: l = null
          } = e;
          return {
            name: "plainImage",
            label: "Image",
            component: "group",
            fields: [(0, t.NameField)(), (0, t.ImageField)({
              game: l,
              label: "Sources"
            }), (0, t.StyleField)({
              filter: "image"
            })],
            defaultItem: () => (0, t.defaultItemUnique)({
              alt: ""
            }),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        },
        w = function() {
          return {
            label: "Related Posts",
            fields: [],
            defaultItem: () => (0, t.defaultItemUnique)(),
            itemProps: e => (0, t.itemPropsWithKey)(e)
          }
        },
        L = () => ({
          name: "parallaxInnerLayer",
          label: "Parallax Inner Layer",
          component: "group",
          fields: [(0, t.NameField)(), {
            label: "Parallax Items",
            name: "layers",
            component: "blocks",
            templates: [{
              name: "parallaxImageLayer",
              label: "Parallax Image Layer",
              component: "group",
              fields: [(0, t.NameField)(), {
                name: "image",
                label: "Image",
                description: "Image source that will be applied as a CSS background image on the layer.",
                component: "image",
                clearable: !0,
                uploadDir: r.uploadDir,
                parse: r.parse,
                previewSrc: r.previewSrc
              }, {
                name: "amount",
                label: "Parallax Amount",
                description: "A value from -1 to 1 that represents the vertical offset to be applied to the current layer, 0.1 would equal a 10% offset on the top and bottom.",
                component: "number",
                step: .1
              }, {
                name: "expanded",
                label: "Image Bleeds?",
                description: "Indicate if the layer should be expanded with negative top/bottom margins so the edges will never be visible.",
                component: "toggle"
              }, (0, t.StyleField)({
                filter: "parallaxInnerLayer"
              })],
              defaultItem: () => (0, t.defaultItemUnique)({
                expanded: !0,
                amount: 0
              }),
              itemProps: e => (0, t.itemPropsWithKey)(e, {
                label: `${e?.name??"New"} [Parallax Image Layer]`
              })
            }]
          }, (0, t.DisplayClassField)({}), (0, t.StyleField)({
            filter: "parallaxInnerLayer"
          })],
          defaultItem: () => (0, t.defaultItemUnique)({}),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.name??"New"} [Parallax Inner Layer]`
          })
        }),
        C = e => {
          let {
            game: l = null,
            templates: a = null
          } = e;
          return {
            name: "parallaxWrapper",
            label: "Parallax Wrapper",
            component: "group",
            fields: [(0, t.NameField)(), {
              name: "scrollAxis",
              label: "Scroll Axis",
              description: "Should the effect be vertical or horizontal?",
              component: "select",
              options: [{
                label: "Vertical",
                value: "vertical"
              }, {
                label: "Horizontal",
                value: "horizontal"
              }]
            }, {
              name: "size",
              label: "Container Size",
              component: "select",
              options: [{
                label: "-- Select a size --",
                value: ""
              }, {
                label: "Small",
                value: "small"
              }, {
                label: "Medium",
                value: "medium"
              }, {
                label: "Large",
                value: "large"
              }]
            }, {
              label: "Parallax Items",
              name: t.TINA_PARSER_KEY,
              component: "blocks",
              templates: a
            }, (0, t.StyleField)({
              filter: "parallaxWrapper"
            })],
            defaultItem: () => (0, t.defaultItemUnique)({
              scrollAxis: "vertical"
            }),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${e?.name??"New"} [Parallax Wrapper]`
            })
          }
        },
        A = e => {
          let {
            game: l = null,
            templates: a = null
          } = e;
          return {
            name: "parallaxOuterLayer",
            label: "Parallax Outer Layer",
            component: "group",
            fields: [(0, t.NameField)(), {
              name: "minOffset",
              label: "Min. Offset",
              description: "Initial offset on the active axis in %.",
              component: "number",
              step: 1
            }, {
              name: "maxOffset",
              label: "Max. Offset",
              description: "Final offset on the active axis in %.",
              component: "number",
              step: 1
            }, {
              label: "Parallax Items",
              name: t.TINA_PARSER_KEY,
              component: "blocks",
              templates: a
            }, (0, t.DisplayClassField)({}), (0, t.StyleField)({
              filter: "parallaxOuterLayer"
            })],
            defaultItem: () => (0, t.defaultItemUnique)({
              minOffset: 0,
              maxOffset: 0
            }),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${e?.name??"New"} [Parallax Outer Layer]`
            })
          }
        },
        _ = () => ({
          label: "Promo Module",
          component: "group",
          fields: [(0, t.NameField)(), {
            name: "backgroundColor",
            label: "Background Color",
            description: "Defaults to black.",
            component: "color"
          }, (0, t.translatedField)({
            name: "title",
            label: "Title",
            component: "text",
            description: "Title text in the promo module."
          }), (0, t.translatedField)({
            name: "description",
            label: "Description",
            component: "text",
            description: "Description text in the promo module."
          }), o(), (0, t.translatedField)({
            name: "ctaLabel",
            label: "CTA Label",
            component: "text"
          }), (0, t.translatedField)({
            name: "ctaLink",
            label: "CTA URL",
            component: "text"
          }), {
            name: "gradient",
            label: "Would you like the image to blend into the text content with a gradient?",
            component: "toggle"
          }, {
            label: "Promo Image",
            name: "image",
            component: "image",
            clearable: !0,
            uploadDir: r.uploadDir,
            parse: r.parse,
            previewSrc: r.previewSrc
          }, {
            name: "imageOrientation",
            label: "Which side would you like the image on?",
            component: "select",
            options: [{
              label: "Right",
              value: "right"
            }, {
              label: "Left",
              value: "left"
            }]
          }],
          defaultItem: () => (0, t.defaultItemUnique)({}),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.name??"New"} [Promo Module]`
          })
        }),
        R = e => {
          let {
            defaults: l = {},
            game: a = null,
            filter: n = null
          } = e;
          const i = [(0, t.NameField)(), {
            name: "titleSlug",
            label: "Game",
            component: "select",
            options: [{
              label: "-- Select Game --",
              value: ""
            }, {
              label: "Grand Theft Auto V",
              value: "V"
            }, {
              label: "GTA Online",
              value: "GTAOnline"
            }, {
              label: "Red Dead Redemption 2",
              value: "reddeadredemption2"
            }, {
              label: "Red Dead Online",
              value: "reddeadonline"
            }, {
              label: "Red Dead Redemption",
              value: "reddeadredemption"
            }]
          }, (0, t.StyleField)({
            filter: "rating"
          })];
          return {
            label: "Rating",
            component: "group",
            fields: [...i, (0, t.MediaQueryField)({
              filter: n,
              fields: i,
              game: a,
              defaults: l
            })],
            defaultItem: () => (0, t.defaultItemUnique)({
              style: l?.style ?? {}
            }),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Rating]` : "New [Rating]"
            })
          }
        },
        M = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            label: "Responsive Flex Box",
            component: "blocks",
            fields: [(0, t.NameField)(), (0, t.StyleField)({
              filter: "flex"
            }), {
              name: t.TINA_PARSER_KEY,
              label: "Flex Items",
              component: "blocks",
              templates: e.templates
            }],
            defaultItem: () => (0, t.defaultItemUnique)(),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `Flex Box: ${e?.name??"New"}`
            })
          }
        },
        E = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            label: "Flex Item",
            fields: [(0, t.NameField)(), {
              name: t.TINA_PARSER_KEY,
              label: "Content Items",
              component: "blocks",
              templates: e.templates
            }],
            defaultItem: () => (0, t.defaultItemUnique)(),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `Flex Item: ${e?.name??"New"}`
            })
          }
        },
        W = e => {
          let {
            parent: l = null
          } = e;
          return {
            label: "Responsive Image",
            fields: [(0, t.NameField)(), {
              name: "content",
              label: "Source",
              component: "text"
            }, {
              name: l ? `${l}.overwrite_ratio` : "overwrite_ratio",
              label: "Overwrite Ratio",
              component: "text"
            }, {
              name: l ? `${l}.animate` : "animate",
              label: "Animate",
              component: "toggle"
            }, {
              name: l ? `${l}.manual` : "manual",
              label: "Manual",
              component: "toggle"
            }, (0, t.AttributesFields)({
              parent: l
            })],
            defaultItem: () => (0, t.defaultItemUnique)({
              content: "",
              overwrite_ratio: "",
              animate: !1,
              manual: !1
            }),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: e?.src ?? "Responsive Image"
            })
          }
        },
        $ = e => {
          let {
            parent: l = null
          } = e;
          return {
            label: "Separator",
            fields: [{
              name: l ? `${l}.type` : "type",
              label: "Type",
              component: "text",
              initialValues: ""
            }, (0, t.AttributesFields)({
              parent: l
            })],
            defaultItem: () => (0, t.defaultItemUnique)(),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${e?.type??""} Separator`
            })
          }
        };
      var B = a(3052),
        q = a(2104);
      const D = {
        name: "skeleton",
        label: "Skeleton Type",
        description: "Set this to what should be shown as the actual content is loading.",
        component: "select",
        options: [{
          value: null,
          label: "--Select Skeleton --"
        }, {
          value: "gen9Hero",
          label: "A gen9 Hero"
        }]
      };
      var U = a(3260),
        G = a(3480);
      const K = e => {
          let {
            name: l,
            component: a,
            label: n,
            variables: i = {}
          } = e;
          return {
            label: n,
            name: l,
            component: "group-list",
            fields: [(0, t.NameField)(), D, {
              component: a,
              label: n,
              name: "id",
              variables: i
            }],
            defaultItem: () => (0, t.defaultItemUnique)(),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${n} [${e?.name??e?.id??null}]`
            })
          }
        },
        O = {
          __type: "field",
          name: "tina-module-selector",
          Component: e => {
            let {
              field: l,
              input: a,
              meta: t
            } = e;
            const {
              variables: n = {}
            } = l, {
              data: i
            } = (0, B.useQuery)(U.TinaModulesList, {
              variables: n
            });
            if (!i) return null;
            const o = [{
              id_hash: null,
              type: null,
              title: null,
              name: "-- Select Module --"
            }, ...i.tinaModulesList.results];
            return (0, G.jsx)(q.FieldWrapper, {
              field: l,
              input: a,
              meta: t,
              children: (0, G.jsx)("select", {
                ...a,
                children: o.map((e => {
                  let {
                    id_hash: l,
                    title: a,
                    type: t
                  } = e;
                  return (0, G.jsx)("option", {
                    value: l,
                    children: `${t?`[${t}]`:""} ${a} ${l?`(${l})`:""}`
                  }, l)
                }))
              })
            })
          }
        },
        V = {
          __type: "field",
          name: "tina-module-parent-selector",
          Component: e => {
            let {
              field: l,
              input: a,
              meta: t
            } = e;
            const {
              variables: n = {}
            } = l, {
              data: i
            } = (0, B.useQuery)(U.TinaModulesList, {
              variables: n
            });
            if (!i) return null;
            const o = [{
              id_hash: null,
              type: null,
              title: null,
              name: "-- Select Parent of this Module --"
            }, ...i.tinaModulesList.results];
            return (0, G.jsx)(q.FieldWrapper, {
              field: l,
              input: a,
              meta: t,
              children: (0, G.jsx)("select", {
                ...a,
                children: o.map((e => {
                  let {
                    id: l,
                    name: a,
                    type: t
                  } = e;
                  return (0, G.jsx)("option", {
                    value: l,
                    children: `${t?`[${t}]`:""} ${a} ${l?`(${l})`:""}`
                  }, l)
                }))
              })
            })
          }
        },
        H = e => {
          let {
            label: l
          } = e;
          return [{
            value: "",
            label: l
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
        z = e => {
          let {
            templates: l
          } = e;
          return {
            label: "Gen 9 page wrapper grid",
            component: "group",
            fields: [{
              label: "Page sections",
              name: t.TINA_PARSER_KEY,
              component: "blocks",
              templates: l
            }, {
              name: "style",
              label: "Style Overrides",
              component: "group",
              fields: [{
                label: "Grid Gap",
                name: "gridGap",
                description: "Set the grid gap",
                component: "select",
                options: H({
                  label: "-- Select Grid Gap --"
                })
              }]
            }, (0, t.ThemeField)()],
            defaultItem: () => (0, t.defaultItemUnique)()
          }
        },
        X = () => ({
          label: "CLR Track List",
          fields: [{
            label: "Tracks",
            name: t.TINA_PARSER_KEY,
            component: "blocks",
            description: "Add the artist names & tracks",
            templates: [{
              label: "CLR Tracks",
              fields: [(0, t.NameField)(), (0, t.translatedField)({
                name: "track",
                label: "Track Name",
                component: "text"
              }), (0, t.translatedField)({
                name: "artist",
                label: "Artist Name",
                component: "text"
              })],
              component: "group",
              defaultItem: () => (0, t.defaultItemUnique)(),
              itemProps: e => (0, t.itemPropsWithKey)(e, {
                label: `${e?.name??"NEW"} [Track]`
              })
            }]
          }],
          component: "group",
          defaultItem: () => (0, t.defaultItemUnique)(),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"NEW"} [CLR TrackList]`
          })
        });
      var j = a(7020);
      const Y = e => {
        let {
          game: l = null,
          parent: a = null
        } = e;
        const n = [(0, t.NameField)()];
        return "gtao" !== l && "gtav" !== l || n.push({
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
        }), n.push({
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
          templates: [T({})]
        }, (0, t.StyleField)({
          parent: a
        })), {
          name: "orderedList",
          label: "Ordered List",
          component: "group",
          fields: n,
          defaultItem: () => (0, t.defaultItemUnique)({
            content: j.c,
            columns: 1,
            mobileColumns: 1,
            starColor: "noImg",
            listItems: []
          }),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: e?.name ? `${e.name} [Ordered List]` : "New [Ordered List]"
          })
        }
      };
      var Q = a(4004);
      const J = e => {
          let {
            game: l = null,
            parent: a = null
          } = e;
          const n = [(0, t.NameField)()];
          return "gtao" !== l && "gtav" !== l || n.push({
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
          }), n.push({
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
            templates: [T({})]
          }, (0, t.StyleField)({
            parent: a
          })), {
            name: "unorderedList",
            label: "Unordered List",
            component: "group",
            fields: n,
            defaultItem: () => (0, t.defaultItemUnique)({
              content: Q.c,
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
        Z = '"Was this helpful?" module.',
        ee = () => ({
          label: Z,
          name: "user_vote",
          component: "group",
          fields: [(0, t.translatedField)({
            label: "Title",
            name: "title",
            component: "text"
          }), (0, t.translatedField)({
            label: "Description",
            name: "description",
            component: "text"
          })],
          defaultItem: () => (0, t.defaultItemUnique)(),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: Z
          })
        })
    },
    3260: e => {
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