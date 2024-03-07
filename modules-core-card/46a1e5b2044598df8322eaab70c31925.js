! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a95d7b54-e6cd-4b5b-85bd-5dd80ffac25f", e._sentryDebugIdIdentifier = "sentry-dbid-a95d7b54-e6cd-4b5b-85bd-5dd80ffac25f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "37b3ba5563fc850bb4023bb85696f8442ccaf1f5",
  packageName: "@rockstargames/modules-core-card",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "37b3ba5563fc850bb4023bb85696f8442ccaf1f5"
}, (self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [96], {
    4096: (e, t, l) => {
      l.r(t), l.d(t, {
        Card: () => d,
        CardGrid: () => c,
        CardWithImageGallery: () => b,
        ClrCard: () => r,
        CoverCard: () => h,
        Deck: () => f,
        EventsDeck: () => y,
        TextCard: () => g
      });
      var a = l(9468),
        o = l(5652);
      const n = e => {
          let {
            label: t = "Image",
            type: l = null
          } = e;
          const n = e => {
              let {
                name: t,
                label: l = t
              } = e;
              return {
                name: t,
                label: l,
                component: "group",
                fields: [{
                  name: "mobile",
                  label: "Image Source",
                  component: "image",
                  clearable: !0,
                  uploadDir: o.uploadDir,
                  parse: o.parse,
                  previewSrc: o.previewSrc
                }]
              }
            },
            i = [(0, a.NameField)(), (0, a.translatedField)({
              name: "alt",
              label: "Alt Text",
              component: "text"
            }), n({
              name: "sources.en_us",
              label: "Upload global images"
            }), {
              name: "sources",
              label: "Upload local images",
              description: "The site will default to the global value, but use a local one on local sites if it exists here.",
              component: "group",
              fields: ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"].map((e => n({
                name: e
              })))
            }, (0, a.ClassNamesField)({
              filter: "image"
            })];
          return "logo" === l && i.push({
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
            label: t,
            component: "group",
            fields: i,
            defaultItem: () => (0, a.defaultItemUnique)({
              specialClass: l,
              sizeClass: ""
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [${t}]` : `New [${t}]`
            })
          }
        },
        i = [{
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
            templates: t
          } = e;
          const l = [(0, a.translatedField)({
            name: "title",
            label: "Title",
            description: "This gets displayed in the text overlay (when collapsed) as well as at the top of the main content (when expanded).",
            component: "text"
          }), {
            name: "size",
            label: "Card Size",
            description: "Which kind of card should be displayed? (Deck settings may override this configuration.)",
            component: "select",
            options: i
          }, {
            name: "images",
            label: "Images",
            description: "Add one or more images to layer over one another in this card.",
            component: "blocks",
            templates: [n({
              label: "Image"
            }), n({
              label: "Overlayed Foreground Image",
              type: "foreground"
            }), n({
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
            }, (0, a.translatedField)({
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
            }, (0, a.translatedField)({
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
            }, (0, a.translatedField)({
              name: "tag",
              label: "Tag",
              description: "If enabled, this is displayed above the Title in both the collapsed and expanded views.",
              component: "text"
            }), (0, a.translatedField)({
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
            }), (0, a.translatedField)({
              name: "discountPrice",
              label: "Discount Price",
              description: "The club discount.",
              component: "text"
            }), (0, a.translatedField)({
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
            }, (0, a.translatedField)({
              name: "platformTag",
              label: "Tag",
              description: "If enabled, this is displayed above the Title in both the collapsed and expanded views.",
              component: "text"
            }), (0, a.translatedField)({
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
            }), (0, a.PlatformsAndLinksField)()]
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
            name: a.TINA_PARSER_KEY,
            component: "blocks",
            description: "If clicking the card triggers a modal, select content to go inside the modal.",
            templates: t
          }, {
            name: "to",
            label: "Link",
            description: "If clicking the card links to a new page, what link does it go to?",
            component: "text"
          }];
          return {
            label: "Card",
            fields: [...l, (0, a.MediaQueryField)({
              fields: l
            })],
            defaultItem: () => (0, a.defaultItemUnique)({
              textOverlayProps: (0, a.defaultItemUnique)(),
              pricingOptions: (0, a.defaultPricingOptionsUnique)(),
              platformOptions: (0, a.defaultPricingOptionsUnique)()
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `Card [${e?.[a.TINA_MEMOQ_PREFIX]?.title??null}]`
            })
          }
        },
        s = () => [(0, a.translatedField)({
          name: "text",
          label: "Text",
          component: "text"
        }), (0, a.translatedField)({
          name: "url",
          label: "Url",
          component: "text"
        }), (0, a.GtmField)(), (0, a.TranslationKey)({
          label: "Translation Key",
          description: "Only used for buttons that were marked as translatable after they were created. This value must begin with `key_` and MUST BE UNIQUE."
        })],
        r = e => {
          let {
            templates: t
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
            }, (0, a.translatedField)({
              name: "title",
              label: "Title",
              description: "This gets displayed in the text overlay (when collapsed) as well as at the top of the main content (when expanded).",
              component: "text"
            }), (0, a.translatedField)({
              name: "subheader",
              label: "Subheader",
              description: "A Subheader (smaller text that goes ABOVE title / eyebrow text)",
              component: "text"
            }), (0, a.translatedField)({
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
            }, (0, a.ImageField)({
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
            }, (0, a.translatedField)({
              name: "to",
              label: "Link",
              description: "If clicking the card links to a new page, what link does it go to?",
              component: "text"
            }), {
              label: "Content",
              name: a.TINA_PARSER_KEY,
              component: "blocks",
              description: "If clicking the card triggers a modal, select content to go inside the modal.",
              templates: t
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
                uploadDir: o.uploadDir,
                parse: o.parse,
                previewSrc: o.previewSrc
              }, {
                label: "Desktop Image (16:9 ratio)",
                name: "desktopImg",
                component: "image",
                clearable: !0,
                uploadDir: o.uploadDir,
                parse: o.parse,
                previewSrc: o.previewSrc
              }, (0, a.translatedField)({
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
            defaultItem: () => (0, a.defaultItemUnique)({
              expandedType: "short",
              heroInfo: (0, a.defaultItemUnique)({}),
              to: (0, a.defaultItemUnique)(),
              buttons: {
                button1: (0, a.defaultItemUnique)(),
                button2: (0, a.defaultItemUnique)()
              }
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `${e?.[a.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Clr Card]`
            })
          }
        },
        c = e => {
          let {
            templates: t
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
              name: a.TINA_PARSER_KEY,
              component: "blocks",
              description: "If clicking the card triggers a modal, select content to go inside the modal.",
              templates: t
            }],
            defaultItem: () => (0, a.defaultItemUnique)({
              expandedType: "short"
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `${e?.[a.TINA_MEMOQ_PREFIX]?.title??"New"} [Card Grid]`
            })
          }
        };
      var p = l(7368);
      const m = () => {
          const e = {
            ...(0, p.ImageWithBadge)({})
          };
          return e.fields.push({
            name: "objectPosition",
            label: "Object Position",
            component: "text",
            description: "Controls the position the image is cropped from when inside the gallery."
          }), e
        },
        b = e => {
          let {
            templates: t
          } = e;
          const l = [(0, a.translatedField)({
            name: "title",
            label: "Title",
            description: "This gets displayed in the text overlay (when collapsed) as well as at the top of the main content (when expanded).",
            component: "text"
          }), {
            name: "size",
            label: "Card Size",
            description: "Which kind of card should be displayed? (Deck settings may override this configuration.)",
            component: "select",
            options: i
          }, {
            name: "images",
            label: "Images",
            description: "Add one or more images to layer over one another in this card.",
            component: "blocks",
            templates: [m()]
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
            }, (0, a.translatedField)({
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
            }, (0, a.translatedField)({
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
            }, (0, a.translatedField)({
              name: "tag",
              label: "Tag",
              description: "If enabled, this is displayed above the Title in both the collapsed and expanded views.",
              component: "text"
            }), (0, a.translatedField)({
              name: "discountPrice",
              label: "Discount Price",
              description: "The club discount.",
              component: "text"
            }), (0, a.translatedField)({
              name: "originalPrice",
              label: "Original Price",
              description: "The original price.",
              component: "text"
            })]
          }, {
            label: "Content",
            name: a.TINA_PARSER_KEY,
            component: "blocks",
            description: "If clicking the card triggers a modal, select content to go inside the modal.",
            templates: t
          }];
          return {
            label: "Card with Image Gallery",
            fields: [...l, (0, a.MediaQueryField)({
              fields: l
            })],
            defaultItem: () => (0, a.defaultItemUnique)({
              textOverlayProps: (0, a.defaultItemUnique)()
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `Card with Image Gallery [${e?.[a.TINA_MEMOQ_PREFIX]?.title??null}]`
            })
          }
        },
        h = e => {
          let {
            templates: t
          } = e;
          return {
            label: "CoverCard",
            fields: [{
              label: "Logo Image",
              name: "logoImage",
              component: "image",
              description: "Optionally add a logo image above the card title.",
              uploadDir: o.uploadDir,
              parse: o.parse,
              previewSrc: o.previewSrc
            }, (0, a.translatedField)({
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
            }, (0, a.translatedField)({
              name: "body",
              label: "Body",
              description: "This is the main body of text that appears on the card.",
              component: "text"
            }), {
              name: "images",
              label: "Images",
              description: "Add one or more images to layer over one another in this card.",
              component: "blocks",
              templates: [n({
                label: "Image"
              }), n({
                label: "Overlayed Foreground Image",
                type: "foreground"
              }), n({
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
              name: a.TINA_PARSER_KEY,
              component: "blocks",
              description: "If clicking the card triggers a modal, select content to go inside the modal.",
              templates: t
            }],
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `${e?.[a.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Cover Card]`
            }),
            defaultItem: () => (0, a.defaultItemUnique)()
          }
        },
        g = e => {
          let {
            templates: t
          } = e;
          const l = [(0, a.translatedField)({
            name: "title",
            label: "Title",
            component: "text"
          }), {
            name: "size",
            label: "Card Size",
            description: "Which kind of card should be displayed? (Deck settings may override this configuration.)",
            component: "select",
            options: i
          }, (0, a.translatedField)({
            name: "badgeText",
            label: "Badge Text",
            description: "Displayed in a white box above the card title.",
            component: "text"
          }), {
            label: "Content",
            name: a.TINA_PARSER_KEY,
            component: "blocks",
            description: "The main card text.",
            templates: t
          }];
          return {
            label: "Text Card",
            fields: [...l, (0, a.MediaQueryField)({
              fields: l
            })],
            defaultItem: () => (0, a.defaultItemUnique)({}),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `Text Card [${e?.[a.TINA_MEMOQ_PREFIX]?.title??null}]`
            })
          }
        },
        u = i.filter((e => {
          let {
            value: t
          } = e;
          return "clr" !== t && "custom" !== t
        })),
        f = () => ({
          label: "Deck",
          component: "group",
          fields: [(0, a.translatedField)({
            name: "title",
            label: "Title",
            component: "text"
          }), (0, a.translatedField)({
            name: "titleBadge",
            label: "Title Badge",
            description: "This text will appear next to the title text as a yellow badge.",
            component: "text"
          }), (0, a.translatedField)({
            name: "description",
            label: "Description",
            description: "Text that is displayed in between the Title and the row of cards.",
            component: "text"
          }), {
            name: "cards",
            label: "Cards",
            component: "group-list",
            fields: [(0, a.NameField)(), {
              component: "tina-module-selector",
              variables: {
                types: ["card", "image-gallery-card", "text-card", "clr-card", "cover-card"]
              },
              label: "Card",
              name: "id"
            }],
            defaultItem: () => (0, a.defaultItemUnique)(),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `Card [${e?.name??e?.id??null}]`
            })
          }, {
            name: "size",
            label: "Card Size",
            description: "Which kind of cards should be displayed? (If blank, falls back to each card's configuration.)",
            component: "select",
            options: i
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
              options: u
            }, {
              name: "md",
              label: "Card size at 768-1023px window width (md)",
              component: "select",
              options: u
            }, {
              name: "lg",
              label: "Card size at 1024-1919px window width (lg)",
              component: "select",
              options: u
            }, {
              name: "xl",
              label: "Card size at 1920-2560px window width (xl)",
              component: "select",
              options: u
            }, {
              name: "xxl",
              label: "Card size at 2560px+ window width (xxl)",
              component: "select",
              options: u
            }]
          }],
          defaultItem: () => (0, a.defaultItemUnique)(),
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: `Deck [${e?.[a.TINA_MEMOQ_PREFIX]?.title??null}]`
          })
        }),
        y = () => ({
          label: "Events Deck",
          name: "eventsDeck",
          component: "group",
          fields: [(0, a.translatedField)({
            name: "title",
            label: "Title",
            component: "text"
          })],
          defaultItem: () => (0, a.defaultItemUnique)(),
          itemProps: e => (0, a.itemPropsWithKey)(e, {
            label: `${e?.[a.TINA_MEMOQ_PREFIX]?.title??"New"} [Events Deck]`
          })
        })
    }
  }
]);
//# sourceMappingURL=46a1e5b2044598df8322eaab70c31925.js.map