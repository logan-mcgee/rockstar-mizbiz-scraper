/*! For license information please see 2c1c1e42a83c639a72ea3394c44f164d.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "eeec595d-f26a-4b23-8d9a-c80c14ab1416", e._sentryDebugIdIdentifier = "sentry-dbid-eeec595d-f26a-4b23-8d9a-c80c14ab1416")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/modules-core-card",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [16], {
    9576: (e, a, t) => {
      "use strict";
      var l = t(1664),
        n = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        d = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function r(e, a, t) {
        var l, i = {},
          r = null,
          c = null;
        for (l in void 0 !== t && (r = "" + t), void 0 !== a.key && (r = "" + a.key), void 0 !== a.ref && (c = a.ref), a) o.call(a, l) && !s.hasOwnProperty(l) && (i[l] = a[l]);
        if (e && e.defaultProps)
          for (l in a = e.defaultProps) void 0 === i[l] && (i[l] = a[l]);
        return {
          $$typeof: n,
          type: e,
          key: r,
          ref: c,
          props: i,
          _owner: d.current
        }
      }
      a.Fragment = i, a.jsx = r, a.jsxs = r
    },
    5240: (e, a, t) => {
      "use strict";
      e.exports = t(9576)
    },
    2256: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => m
      });
      var l = t(1664),
        n = t(8560),
        i = t.n(n),
        o = t(1740),
        d = t(5792);
      const s = {
        pillBtn: "rockstargames-modules-core-cardf87ac9a7d56545847cf4d8ca471b03e6",
        selected: "rockstargames-modules-core-carda8ea61e57fd58bfcb99aef7e6d687045",
        grid: "rockstargames-modules-core-carda57241f29873f89f89ab8b27994e71c3",
        itemList: "rockstargames-modules-core-carddaec3f5ce63d42cb07e3e724737c8361",
        gtaplus: "rockstargames-modules-core-cardbd78cfb71ed31029ba4279325166bfab",
        rdo: "rockstargames-modules-core-carda6244398a800ffddab72c14f717b0eab",
        noImg: "rockstargames-modules-core-carde88f741af7d5e0529ff4fb6bb82af04f",
        gtao: "rockstargames-modules-core-cardab60d91453348d2e4c090ef3ebb04347",
        custom: "rockstargames-modules-core-cardc20e7ba6ceaba3afd37095b172797711",
        yellow: "rockstargames-modules-core-cardb16672deedfe102b065925cbe0fb931c",
        hotPink: "rockstargames-modules-core-cardd0d01601de7131d9d6d11321b4299e59",
        red: "rockstargames-modules-core-cardd1b5397aff94d33b57674b04a3456e03",
        turquoise: "rockstargames-modules-core-cardd6541b973ce158c8f2fb81483015211f",
        purple: "rockstargames-modules-core-cardf3e34d902681219d4d8490eb164f7727",
        teal: "rockstargames-modules-core-carda6c3b6b6a2395eb18a1174294f26f4ea",
        blue: "rockstargames-modules-core-cardeade6e843c5afd48d3a8959fb0b88222",
        green: "rockstargames-modules-core-carda82c313f8f85fc6304ddb703be2fa271",
        darkRed: "rockstargames-modules-core-cardd394c61fdce2bf8894ffb801ee680c2a",
        darkBlue: "rockstargames-modules-core-cardf1d73cc00a3ab644aab949183a8298a7",
        goldenrod: "rockstargames-modules-core-cardcdcb0c5076309a329da2a6e857cc3bdf",
        skull: "rockstargames-modules-core-cardba4bd16bff2fbc40616457007b4a7442"
      };
      var r = t(5240);
      const {
        sanitize: c
      } = i(), m = e => {
        let {
          list: a,
          string: t,
          starColor: n,
          style: i,
          className: m,
          game: p,
          noImg: u,
          columns: b,
          mobileColumns: g
        } = e;
        const [f, h] = (0, l.useState)(null);
        return (0, l.useEffect)((() => {
          h(a)
        }), [a]), t || a ? b && f ? (0, r.jsx)("div", {
          className: s.grid,
          style: {
            "--ordered-list-grid-column": b,
            "--ordered-list-grid-column-mobile": g ?? b
          },
          children: (0, r.jsx)("ol", {
            style: (0, d.safeStyles)(i),
            className: (0, o.classList)(s.itemList, s.noImg, s[n], s[p]),
            children: f.map((e => (0, r.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: c(e.content)
              }
            }, e.content)))
          })
        }) : (0, r.jsx)("ol", {
          style: (0, d.safeStyles)(i),
          className: (0, o.classList)(s.itemList, s.custom, u ? s.noImg : "", n ? s[n] : "", p ? s[p] : "", m ?? ""),
          children: a.map((e => (0, r.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: c(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    5419: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => m
      });
      var l = t(1664),
        n = t(8560),
        i = t.n(n),
        o = t(1740),
        d = t(5792);
      const s = {
        grid: "rockstargames-modules-core-cardac295ed5b9cb441ed17843b34e83ea17",
        itemList: "rockstargames-modules-core-cardcaf5589ddeca00ed09213e547674b1f3",
        gtaplus: "rockstargames-modules-core-cardb291112adcf994a0f6acadd86f73b78a",
        rdo: "rockstargames-modules-core-cardd146e8f862baefb60e91be5aa3c17b6e",
        noImg: "rockstargames-modules-core-cardba9b5ae08642b0213a3f04b3db9a9dac",
        gtao: "rockstargames-modules-core-cardb6f2bdfd6a1d57b7ce840f7a56cc510b",
        custom: "rockstargames-modules-core-cardaf89164a043648d1464686ff13363ee4",
        yellow: "rockstargames-modules-core-cardd244b17b74fc46269e8a106a99ab0f87",
        hotPink: "rockstargames-modules-core-cardd90b28503318563cfd6059146d1fb6b6",
        red: "rockstargames-modules-core-cardc3f8a8706901874d906f94c626be3c1e",
        turquoise: "rockstargames-modules-core-cardfe2ec36e92e2bb4d453fdc4b05966418",
        purple: "rockstargames-modules-core-cardf5f7baf5b56f5b2ada053a93392bbf7a",
        teal: "rockstargames-modules-core-cardf4a229f41cd20f181d810c311416e3f2",
        blue: "rockstargames-modules-core-cardf6f689d687bcd482ea2cd2990fd66878",
        green: "rockstargames-modules-core-cardab270f1b4d3ad43e7bc51393b7c5c089",
        darkRed: "rockstargames-modules-core-carddc24ce78d962f3472b06955bf8855103",
        darkBlue: "rockstargames-modules-core-cardb354493baac7389b21b511009f287428",
        goldenrod: "rockstargames-modules-core-carde4a078efee11d24c64e93ccf0744a33f",
        skull: "rockstargames-modules-core-cardd4581a495de14e6762bb15debe5bb810"
      };
      var r = t(5240);
      const {
        sanitize: c
      } = i(), m = e => {
        let {
          list: a,
          string: t,
          starColor: n,
          style: i,
          className: m,
          game: p,
          noImg: u,
          columns: b,
          mobileColumns: g
        } = e;
        const [f, h] = (0, l.useState)(null), k = t ? t.split("_#_") : a;
        return (0, l.useEffect)((() => {
          h(a)
        }), [a]), t || a ? b && f ? (0, r.jsx)("div", {
          className: s.grid,
          style: {
            "--unordered-list-grid-column": b,
            "--unordered-list-grid-column-mobile": g ?? b
          },
          children: (0, r.jsx)("ul", {
            style: (0, d.safeStyles)(i),
            className: (0, o.classList)(s.itemList, s.noImg, s[n], s[p]),
            children: f.map((e => (0, r.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: c(e.content)
              }
            }, e.content)))
          })
        }) : (0, r.jsx)("ul", {
          style: (0, d.safeStyles)(i),
          className: (0, o.classList)(s.itemList, s.custom, u ? s.noImg : "", n ? s[n] : "", p ? s[p] : "", m ?? ""),
          children: k.map((e => (0, r.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: c(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    2016: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Card: () => d,
        CardGrid: () => c,
        CardWithImageGallery: () => u,
        ClrCard: () => r,
        CoverCard: () => b,
        Deck: () => h,
        EventsDeck: () => k,
        TextCard: () => g
      });
      var l = t(9468),
        n = t(5652);
      const i = e => {
          let {
            label: a = "Image",
            type: t = null
          } = e;
          const i = e => {
              let {
                name: a,
                label: t = a
              } = e;
              return {
                name: a,
                label: t,
                component: "group",
                fields: [{
                  name: "mobile",
                  label: "Image Source",
                  component: "image",
                  clearable: !0,
                  uploadDir: n.uploadDir,
                  parse: n.parse,
                  previewSrc: n.previewSrc
                }]
              }
            },
            o = [(0, l.NameField)(), (0, l.translatedField)({
              name: "alt",
              label: "Alt Text",
              component: "text"
            }), i({
              name: "sources.en_us",
              label: "Upload global images"
            }), {
              name: "sources",
              label: "Upload local images",
              description: "The site will default to the global value, but use a local one on local sites if it exists here.",
              component: "group",
              fields: ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"].map((e => i({
                name: e
              })))
            }, (0, l.ClassNamesField)({
              filter: "image"
            })];
          return "logo" === t && o.push({
            name: "sizeClass",
            label: "Logo Size",
            component: "select",
            options: [{
              value: "",
              label: "Default Size"
            }, {
              value: "sm-horizontal",
              label: "Small - Horizontal"
            }]
          }), {
            name: "image",
            label: a,
            component: "group",
            fields: o,
            defaultItem: () => (0, l.defaultItemUnique)({
              specialClass: t,
              sizeClass: ""
            }),
            itemProps: e => (0, l.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [${a}]` : `New [${a}]`
            })
          }
        },
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
        d = e => {
          let {
            templates: a
          } = e;
          const t = [(0, l.translatedField)({
            name: "title",
            label: "Title",
            description: "This gets displayed in the text overlay (when collapsed) as well as at the top of the main content (when expanded).",
            component: "text"
          }), {
            name: "size",
            label: "Card Size",
            description: "Which kind of card should be displayed? (Deck settings may override this configuration.)",
            component: "select",
            options: o
          }, {
            name: "images",
            label: "Images",
            description: "Add one or more images to layer over one another in this card.",
            component: "blocks",
            templates: [i({
              label: "Image"
            }), i({
              label: "Overlayed Foreground Image",
              type: "foreground"
            }), i({
              label: "Overlayed Logo",
              type: "logo"
            })]
          }, {
            name: "textOverlayProps",
            label: "Text Overlay",
            description: "Shown on top of the image when the card is collapsed.",
            component: "group",
            fields: [{
              name: "hasTextOverlay",
              label: "Has Text Overlay?",
              description: "If selected, the Title and the content below will be shown when the card is collapsed.",
              component: "toggle"
            }, (0, l.translatedField)({
              name: "tag",
              label: "Tag",
              description: "If enabled, this is displayed above the Title in both the collapsed and expanded views.",
              component: "text"
            }), {
              name: "collapsedHasTag",
              label: "Collapsed Has Tag?",
              description: "If selected, display Tag above the Title when the card is collapsed.",
              component: "toggle"
            }, {
              name: "expandedHasTag",
              label: "Expanded Has Tag?",
              description: "If selected, display Tag above the Title when the card is collapsed.",
              component: "toggle"
            }, (0, l.translatedField)({
              name: "description",
              label: "Description",
              description: "If enabled, this is displayed below the Title when the card is collapsed. NOTE: The description is ALWAYS disabled for Small cards.",
              component: "text"
            }), {
              name: "collapsedHasDescription",
              label: "Collapsed Has Description?",
              description: "If selected, display description below the Title when the card is collapsed.",
              component: "toggle"
            }]
          }, {
            name: "pricingOptions",
            label: "Pricing Options",
            description: "Shown below the image when the card is collapsed.",
            component: "group",
            fields: [{
              name: "hasPricingOptions",
              label: "Has Pricing Options?",
              description: "If selected, the Title and the content below will be shown when the card is collapsed.",
              component: "toggle"
            }, (0, l.translatedField)({
              name: "tag",
              label: "Tag",
              description: "If enabled, this is displayed above the Title in both the collapsed and expanded views.",
              component: "text"
            }), (0, l.translatedField)({
              name: "tagStyle",
              label: "Tag Style",
              description: "This controls the background color.",
              component: "select",
              options: [{
                value: "",
                label: "-- Select a Tag Style --"
              }, {
                value: "free",
                label: "Free"
              }, {
                value: "discount",
                label: "Discount"
              }]
            }), (0, l.translatedField)({
              name: "discountPrice",
              label: "Discount Price",
              description: "The club discount.",
              component: "text"
            }), (0, l.translatedField)({
              name: "originalPrice",
              label: "Original Price",
              description: "The original price.",
              component: "text"
            })]
          }, {
            name: "platformOptions",
            label: "Platform Options",
            description: "Shown below the image when the card is collapsed.",
            component: "group",
            fields: [{
              name: "hasPlatformOptions",
              label: "Has Platform Options?",
              description: "If selected, the Title and the content below will be shown when the card is collapsed.",
              component: "toggle"
            }, (0, l.translatedField)({
              name: "platformTag",
              label: "Tag",
              description: "If enabled, this is displayed above the Title in both the collapsed and expanded views.",
              component: "text"
            }), (0, l.translatedField)({
              name: "platformTagStyle",
              label: "Tag Style",
              description: "This controls the background color.",
              component: "select",
              options: [{
                value: "",
                label: "-- Select a Tag Style --"
              }, {
                value: "gold",
                label: "Gold"
              }, {
                value: "red",
                label: "Red"
              }]
            }), (0, l.PlatformsAndLinksField)()]
          }, {
            name: "expandedType",
            label: "Click Action",
            description: "When this card is clicked, what should happen? (Deck settings may override this configuration.)",
            component: "select",
            options: [{
              value: "",
              label: "-- Select a Type --"
            }, {
              value: "short",
              label: "Trigger Modal, Side-by-Side (No Scroll)"
            }, {
              value: "long",
              label: "Trigger Modal, Stacked (Scrolls)"
            }, {
              value: "linkout",
              label: "Link to a New Page"
            }]
          }, {
            label: "Content",
            name: l.TINA_PARSER_KEY,
            component: "blocks",
            description: "If clicking the card triggers a modal, select content to go inside the modal.",
            templates: a
          }, {
            name: "to",
            label: "Link",
            description: "If clicking the card links to a new page, what link does it go to?",
            component: "text"
          }];
          return {
            label: "Card",
            fields: [...t, (0, l.MediaQueryField)({
              fields: t
            })],
            defaultItem: () => (0, l.defaultItemUnique)({
              textOverlayProps: (0, l.defaultItemUnique)(),
              pricingOptions: (0, l.defaultPricingOptionsUnique)(),
              platformOptions: (0, l.defaultPricingOptionsUnique)()
            }),
            itemProps: e => (0, l.itemPropsWithKey)(e, {
              label: `Card [${e?.[l.TINA_MEMOQ_PREFIX]?.title??null}]`
            })
          }
        },
        s = () => [(0, l.translatedField)({
          name: "text",
          label: "Text",
          component: "text"
        }), (0, l.translatedField)({
          name: "url",
          label: "Url",
          component: "text"
        }), (0, l.GtmField)(), (0, l.TranslationKey)({
          label: "Translation Key",
          description: "Only used for buttons that were marked as translatable after they were created. This value must begin with `key_` and MUST BE UNIQUE."
        })],
        r = e => {
          let {
            templates: a
          } = e;
          return {
            label: "ClrCard",
            fields: [{
              name: "cardType",
              label: "Card Type",
              description: "What kind of card is this? Store or Release?",
              component: "select",
              options: [{
                value: "",
                label: "-- Select a Type --"
              }, {
                value: "store",
                label: "Store"
              }, {
                value: "release",
                label: "Release"
              }]
            }, (0, l.translatedField)({
              name: "title",
              label: "Title",
              description: "This gets displayed in the text overlay (when collapsed) as well as at the top of the main content (when expanded).",
              component: "text"
            }), (0, l.translatedField)({
              name: "subheader",
              label: "Subheader",
              description: "A Subheader (smaller text that goes ABOVE title / eyebrow text)",
              component: "text"
            }), (0, l.translatedField)({
              name: "subtitle",
              label: "Subtitle",
              description: "A Subtitle that goes below the title (likely Artist name)",
              component: "text"
            }), {
              name: "storeInfo",
              label: "Store Card Prices",
              component: "group",
              description: "Enter extra information for Store Cards",
              fields: [{
                name: "price",
                label: "Price (shown normally)",
                description: "The price of the item.",
                component: "text"
              }, {
                name: "slashedPrice",
                label: "Price (slashed out)",
                description: "The price that is slashed out if there is a sale/discount.",
                component: "text"
              }, {
                name: "badge",
                label: "Promo Badge",
                description: "What kind of badge? If there is no badge, do not select anything.",
                component: "select",
                options: [{
                  value: "",
                  label: "-- Select a Type --"
                }, {
                  value: "Sale",
                  label: "Sale (red)"
                }, {
                  value: "New",
                  label: "New (green)"
                }, {
                  value: "Out of Stock",
                  label: "Out of Stock"
                }]
              }]
            }, (0, l.ImageField)({
              label: "Image"
            }), {
              name: "expandedType",
              label: "Click Action",
              description: "When this card is clicked, what should happen? Trigger a Modal for Release Cards or Link to a New page for Store Cards.",
              component: "select",
              options: [{
                value: "",
                label: "-- Select a Type --"
              }, {
                value: "short",
                label: "Trigger Modal, Side-by-Side (No Scroll)"
              }, {
                value: "linkout",
                label: "Link to a New Page"
              }]
            }, (0, l.translatedField)({
              name: "to",
              label: "Link",
              description: "If clicking the card links to a new page, what link does it go to?",
              component: "text"
            }), {
              label: "Content",
              name: l.TINA_PARSER_KEY,
              component: "blocks",
              description: "If clicking the card triggers a modal, select content to go inside the modal.",
              templates: a
            }, {
              name: "heroInfo",
              label: "Home Page Hero Content",
              component: "group",
              description: "Please input any info necessary for the hero.",
              fields: [{
                label: "Mobile Image (1:1 ratio)",
                name: "mobileImg",
                component: "image",
                clearable: !0,
                uploadDir: n.uploadDir,
                parse: n.parse,
                previewSrc: n.previewSrc
              }, {
                label: "Desktop Image (16:9 ratio)",
                name: "desktopImg",
                component: "image",
                clearable: !0,
                uploadDir: n.uploadDir,
                parse: n.parse,
                previewSrc: n.previewSrc
              }, (0, l.translatedField)({
                name: "body",
                label: "Body Text",
                description: "CLR Hero body text",
                component: "textarea"
              }), {
                name: "buttons",
                label: "Buttons (optional)",
                component: "group",
                fields: [{
                  name: "button1",
                  label: "Button 1 (optional)",
                  component: "group",
                  fields: s()
                }, {
                  name: "button2",
                  label: "Button 2 (optional)",
                  component: "group",
                  fields: s()
                }]
              }]
            }, {
              name: "videoUrl",
              label: "Video Url",
              description: "Show play button & no modal functionality (open youtube url)",
              component: "text"
            }],
            defaultItem: () => (0, l.defaultItemUnique)({
              expandedType: "short",
              heroInfo: (0, l.defaultItemUnique)({}),
              to: (0, l.defaultItemUnique)(),
              buttons: {
                button1: (0, l.defaultItemUnique)(),
                button2: (0, l.defaultItemUnique)()
              }
            }),
            itemProps: e => (0, l.itemPropsWithKey)(e, {
              label: `${e?.[l.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Clr Card]`
            })
          }
        },
        c = e => {
          let {
            templates: a
          } = e;
          return {
            label: "CardGrid",
            fields: [{
              name: "cardType",
              label: "Click Action",
              description: "Does this card have modal functionality?",
              component: "select",
              options: [{
                value: "",
                label: "-- Select a Type --"
              }, {
                value: "collapsed",
                label: "Collapsed, no modal"
              }, {
                value: "expanded",
                label: "Expanded, with modal"
              }]
            }, {
              label: "Content",
              name: l.TINA_PARSER_KEY,
              component: "blocks",
              description: "If clicking the card triggers a modal, select content to go inside the modal.",
              templates: a
            }],
            defaultItem: () => (0, l.defaultItemUnique)({
              expandedType: "short"
            }),
            itemProps: e => (0, l.itemPropsWithKey)(e, {
              label: `${e?.[l.TINA_MEMOQ_PREFIX]?.title??"New"} [Card Grid]`
            })
          }
        },
        m = e => {
          let {
            game: a = null,
            label: t = "Image",
            description: n = ""
          } = e;
          return {
            name: "imageWithBadge",
            label: t,
            description: n,
            component: "group",
            fields: [(0, l.NameField)(), (0, l.ImageField)({
              game: a
            }), (0, l.LeadAssetToggle)(), (0, l.ClassNamesField)({
              filter: "image"
            }), (0, l.StyleField)({
              filter: "image"
            })],
            defaultItem: () => (0, l.defaultItemUnique)({
              image: (0, l.defaultItemUnique)(l._defaultImageValues),
              badgeType: "rdr2" === a ? "badge3" : ""
            }),
            itemProps: e => (0, l.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        };
      t(5988), t(3052), t(2104), t(504), t(5240), t(2256), t(5419);
      const p = () => {
          const e = {
            ...m({})
          };
          return e.fields.push({
            name: "objectPosition",
            label: "Object Position",
            component: "text",
            description: "Controls the position the image is cropped from when inside the gallery."
          }), e
        },
        u = e => {
          let {
            templates: a
          } = e;
          const t = [(0, l.translatedField)({
            name: "title",
            label: "Title",
            description: "This gets displayed in the text overlay (when collapsed) as well as at the top of the main content (when expanded).",
            component: "text"
          }), {
            name: "size",
            label: "Card Size",
            description: "Which kind of card should be displayed? (Deck settings may override this configuration.)",
            component: "select",
            options: o
          }, {
            name: "images",
            label: "Images",
            description: "Add one or more images to layer over one another in this card.",
            component: "blocks",
            templates: [p()]
          }, {
            name: "textOverlayProps",
            label: "Text Overlay",
            description: "Shown on top of the image when the card is collapsed.",
            component: "group",
            fields: [{
              name: "hasTextOverlay",
              label: "Has Text Overlay?",
              description: "If selected, the Title and the content below will be shown when the card is collapsed.",
              component: "toggle"
            }, (0, l.translatedField)({
              name: "tag",
              label: "Tag",
              description: "If enabled, this is displayed above the Title in both the collapsed and expanded views.",
              component: "text"
            }), {
              name: "collapsedHasTag",
              label: "Collapsed Has Tag?",
              description: "If selected, display Tag above the Title when the card is collapsed.",
              component: "toggle"
            }, {
              name: "expandedHasTag",
              label: "Expanded Has Tag?",
              description: "If selected, display Tag above the Title when the card is collapsed.",
              component: "toggle"
            }, (0, l.translatedField)({
              name: "description",
              label: "Description",
              description: "If enabled, this is displayed below the Title when the card is collapsed. NOTE: The description is ALWAYS disabled for Small cards.",
              component: "text"
            }), {
              name: "collapsedHasDescription",
              label: "Collapsed Has Description?",
              description: "If selected, display description below the Title when the card is collapsed.",
              component: "toggle"
            }]
          }, {
            name: "pricingOptions",
            label: "Pricing Options",
            description: "Shown below the image when the card is collapsed.",
            component: "group",
            fields: [{
              name: "hasPricingOptions",
              label: "Has Pricing Options?",
              description: "If selected, the Title and the content below will be shown when the card is collapsed.",
              component: "toggle"
            }, (0, l.translatedField)({
              name: "tag",
              label: "Tag",
              description: "If enabled, this is displayed above the Title in both the collapsed and expanded views.",
              component: "text"
            }), (0, l.translatedField)({
              name: "discountPrice",
              label: "Discount Price",
              description: "The club discount.",
              component: "text"
            }), (0, l.translatedField)({
              name: "originalPrice",
              label: "Original Price",
              description: "The original price.",
              component: "text"
            })]
          }, {
            label: "Content",
            name: l.TINA_PARSER_KEY,
            component: "blocks",
            description: "If clicking the card triggers a modal, select content to go inside the modal.",
            templates: a
          }];
          return {
            label: "Card with Image Gallery",
            fields: [...t, (0, l.MediaQueryField)({
              fields: t
            })],
            defaultItem: () => (0, l.defaultItemUnique)({
              textOverlayProps: (0, l.defaultItemUnique)()
            }),
            itemProps: e => (0, l.itemPropsWithKey)(e, {
              label: `Card with Image Gallery [${e?.[l.TINA_MEMOQ_PREFIX]?.title??null}]`
            })
          }
        },
        b = e => {
          let {
            templates: a
          } = e;
          return {
            label: "CoverCard",
            fields: [{
              label: "Logo Image",
              name: "logoImage",
              component: "image",
              description: "Optionally add a logo image above the card title.",
              uploadDir: n.uploadDir,
              parse: n.parse,
              previewSrc: n.previewSrc
            }, (0, l.translatedField)({
              name: "title",
              label: "Title",
              description: "This is the headline of the card.",
              component: "text"
            }), {
              name: "titleSizeClass",
              label: "Title Size",
              component: "select",
              options: [{
                label: "-- Select Title Size --",
                value: ""
              }, {
                label: "Header 1",
                value: "header-1"
              }, {
                label: "Header 2",
                value: "header-2"
              }, {
                label: "Header 3",
                value: "header-3"
              }, {
                label: "Header 4",
                value: "header-4"
              }, {
                label: "Header 5",
                value: "header-5"
              }, {
                label: "Header 6",
                value: "header-6"
              }]
            }, (0, l.translatedField)({
              name: "body",
              label: "Body",
              description: "This is the main body of text that appears on the card.",
              component: "text"
            }), {
              name: "images",
              label: "Images",
              description: "Add one or more images to layer over one another in this card.",
              component: "blocks",
              templates: [i({
                label: "Image"
              }), i({
                label: "Overlayed Foreground Image",
                type: "foreground"
              }), i({
                label: "Overlayed Logo",
                type: "logo"
              })]
            }, {
              name: "expandedType",
              label: "Click Action",
              description: "When this card is clicked, what should happen? (Deck settings may override this configuration.)",
              component: "select",
              options: [{
                value: "",
                label: "-- Select a Type --"
              }, {
                value: "short",
                label: "Trigger Modal, Side-by-Side (No Scroll)"
              }, {
                value: "long",
                label: "Trigger Modal, Stacked (Scrolls)"
              }, {
                value: "linkout",
                label: "Link to a New Page"
              }]
            }, {
              label: "Content",
              name: l.TINA_PARSER_KEY,
              component: "blocks",
              description: "If clicking the card triggers a modal, select content to go inside the modal.",
              templates: a
            }],
            itemProps: e => (0, l.itemPropsWithKey)(e, {
              label: `${e?.[l.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Cover Card]`
            }),
            defaultItem: () => (0, l.defaultItemUnique)()
          }
        },
        g = e => {
          let {
            templates: a
          } = e;
          const t = [(0, l.translatedField)({
            name: "title",
            label: "Title",
            component: "text"
          }), {
            name: "size",
            label: "Card Size",
            description: "Which kind of card should be displayed? (Deck settings may override this configuration.)",
            component: "select",
            options: o
          }, (0, l.translatedField)({
            name: "badgeText",
            label: "Badge Text",
            description: "Displayed in a white box above the card title.",
            component: "text"
          }), {
            label: "Content",
            name: l.TINA_PARSER_KEY,
            component: "blocks",
            description: "The main card text.",
            templates: a
          }];
          return {
            label: "Text Card",
            fields: [...t, (0, l.MediaQueryField)({
              fields: t
            })],
            defaultItem: () => (0, l.defaultItemUnique)({}),
            itemProps: e => (0, l.itemPropsWithKey)(e, {
              label: `Text Card [${e?.[l.TINA_MEMOQ_PREFIX]?.title??null}]`
            })
          }
        },
        f = o.filter((e => {
          let {
            value: a
          } = e;
          return "clr" !== a && "custom" !== a
        })),
        h = () => ({
          label: "Deck",
          component: "group",
          fields: [(0, l.translatedField)({
            name: "title",
            label: "Title",
            component: "text"
          }), (0, l.translatedField)({
            name: "titleBadge",
            label: "Title Badge",
            description: "This text will appear next to the title text as a yellow badge.",
            component: "text"
          }), (0, l.translatedField)({
            name: "description",
            label: "Description",
            description: "Text that is displayed in between the Title and the row of cards.",
            component: "text"
          }), {
            name: "cards",
            label: "Cards",
            component: "group-list",
            fields: [(0, l.NameField)(), {
              component: "tina-module-selector",
              variables: {
                types: ["card", "image-gallery-card", "text-card", "clr-card", "cover-card"]
              },
              label: "Card",
              name: "id"
            }],
            defaultItem: () => (0, l.defaultItemUnique)(),
            itemProps: e => (0, l.itemPropsWithKey)(e, {
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
          defaultItem: () => (0, l.defaultItemUnique)(),
          itemProps: e => (0, l.itemPropsWithKey)(e, {
            label: `Deck [${e?.[l.TINA_MEMOQ_PREFIX]?.title??null}]`
          })
        }),
        k = () => ({
          label: "Events Deck",
          name: "eventsDeck",
          component: "group",
          fields: [(0, l.translatedField)({
            name: "title",
            label: "Title",
            component: "text"
          })],
          defaultItem: () => (0, l.defaultItemUnique)(),
          itemProps: e => (0, l.itemPropsWithKey)(e, {
            label: `${e?.[l.TINA_MEMOQ_PREFIX]?.title??"New"} [Events Deck]`
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

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var l = e.type;
          "NamedType" === l.kind && a.add(l.name.value)
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
      var l = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var l = e.definitions[t];
          if (l.name && l.name.value == a) return l
        }
      }

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = l[a] || new Set,
          o = new Set,
          d = new Set;
        for (i.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var s = d;
          d = new Set, s.forEach((function(e) {
            o.has(e) || (o.add(e), (l[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return o.forEach((function(a) {
          var l = n(e, a);
          l && t.definitions.push(l)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), l[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = i(a, "TinaModulesList"), e.exports.TinaModulesInfo = i(a, "TinaModulesInfo")
    }
  }
]);
//# sourceMappingURL=2c1c1e42a83c639a72ea3394c44f164d.js.map