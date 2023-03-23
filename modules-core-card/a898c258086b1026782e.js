"use strict";
(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [664], {
    9664: (e, l, t) => {
      t.r(l), t.d(l, {
        Card: () => s,
        CardWithImageGallery: () => m,
        ClrCard: () => d,
        ClrCollapsedCard: () => r,
        Deck: () => b,
        EventsDeck: () => g,
        TextCard: () => h
      });
      var a = t(3616),
        o = t(559);
      const i = e => {
          let {
            label: l = "Image",
            type: t = null
          } = e;
          const i = e => {
              let {
                name: l,
                label: t = l
              } = e;
              return {
                name: l,
                label: t,
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
            n = [(0, a.NameField)(), (0, a.translatedField)({
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
            }, (0, a.ClassNamesField)({
              filter: "image"
            })];
          return "logo" === t && n.push({
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
            label: l,
            component: "group",
            fields: n,
            defaultItem: () => (0, a.defaultItemUnique)({
              specialClass: t,
              sizeClass: ""
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: e?.name ? `${e.name} [${l}]` : `New [${l}]`
            })
          }
        },
        n = [{
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
        }],
        s = e => {
          let {
            templates: l
          } = e;
          const t = [(0, a.translatedField)({
            name: "title",
            label: "Title",
            description: "This gets displayed in the text overlay (when collapsed) as well as at the top of the main content (when expanded).",
            component: "text"
          }), {
            name: "size",
            label: "Card Size",
            description: "Which kind of card should be displayed? (Deck settings may override this configuration.)",
            component: "select",
            options: n
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
            templates: l
          }, {
            name: "to",
            label: "Link",
            description: "If clicking the card links to a new page, what link does it go to?",
            component: "text"
          }];
          return {
            label: "Card",
            fields: [...t, (0, a.MediaQueryField)({
              fields: t
            })],
            defaultItem: () => (0, a.defaultItemUnique)({
              textOverlayProps: (0, a.defaultItemUnique)()
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `Card [${e?.[a.TINA_MEMOQ_PREFIX]?.title??null}]`
            })
          }
        },
        d = e => {
          let {
            templates: l
          } = e;
          return {
            label: "ClrCard",
            fields: [(0, a.translatedField)({
              name: "title",
              label: "Title",
              description: "This gets displayed in the text overlay (when collapsed) as well as at the top of the main content (when expanded).",
              component: "text"
            }), (0, a.translatedField)({
              name: "date",
              label: "Date",
              description: "Date for Video & News Cards",
              component: "text"
            }), {
              name: "size",
              label: "Card Size",
              description: "Which kind of card should be displayed? (Deck settings may override this configuration.)",
              component: "select",
              options: n
            }, i({
              label: "Image"
            }), {
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
              templates: l
            }, {
              name: "videoUrl",
              label: "Video Url",
              description: "Show play button & no modal functionality (open youtube url)",
              component: "text"
            }],
            defaultItem: () => (0, a.defaultItemUnique)({
              expandedType: "short"
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `${e?.[a.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Clr Card]`
            })
          }
        },
        r = e => {
          let {
            templates: l
          } = e;
          return {
            label: "ClrCollapsedCard",
            fields: [(0, a.translatedField)({
              name: "title",
              label: "Title",
              description: "This gets displayed in the text overlay (when collapsed) as well as at the top of the main content (when expanded).",
              component: "text"
            }), {
              name: "size",
              label: "Card Size",
              description: "Which kind of card should be displayed? (Deck settings may override this configuration.)",
              component: "select",
              options: n
            }, {
              name: "price",
              label: "Price",
              description: "Displayed on the collapsed card only",
              component: "text"
            }, {
              name: "date",
              label: "Date",
              description: "Displayed on the collapsed card only",
              component: "text"
            }, i({
              label: "Image"
            }), {
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
              templates: l
            }, {
              name: "videoUrl",
              label: "Video Url",
              description: "Show play button & no modal functionality (open youtube url)",
              component: "text"
            }],
            defaultItem: () => (0, a.defaultItemUnique)({
              expandedType: "short"
            }),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `${e?.[a.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Clr Collapsed Card]`
            })
          }
        };
      var c = t(6307);
      const p = () => {
          const e = {
            ...(0, c.ImageWithBadge)({})
          };
          return e.fields.push({
            name: "objectPosition",
            label: "Object Position",
            component: "text",
            description: "Controls the position the image is cropped from when inside the gallery."
          }), e
        },
        m = e => {
          let {
            templates: l
          } = e;
          const t = [(0, a.translatedField)({
            name: "title",
            label: "Title",
            description: "This gets displayed in the text overlay (when collapsed) as well as at the top of the main content (when expanded).",
            component: "text"
          }), {
            name: "size",
            label: "Card Size",
            description: "Which kind of card should be displayed? (Deck settings may override this configuration.)",
            component: "select",
            options: n
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
            label: "Content",
            name: a.TINA_PARSER_KEY,
            component: "blocks",
            description: "If clicking the card triggers a modal, select content to go inside the modal.",
            templates: l
          }];
          return {
            label: "Card with Image Gallery",
            fields: [...t, (0, a.MediaQueryField)({
              fields: t
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
            templates: l
          } = e;
          const t = [(0, a.translatedField)({
            name: "title",
            label: "Title",
            component: "text"
          }), {
            name: "size",
            label: "Card Size",
            description: "Which kind of card should be displayed? (Deck settings may override this configuration.)",
            component: "select",
            options: n
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
            templates: l
          }];
          return {
            label: "Text Card",
            fields: [...t, (0, a.MediaQueryField)({
              fields: t
            })],
            defaultItem: () => (0, a.defaultItemUnique)({}),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `Text Card [${e?.[a.TINA_MEMOQ_PREFIX]?.title??null}]`
            })
          }
        },
        b = () => {
          const e = [(0, a.translatedField)({
            name: "title",
            label: "Title",
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
                types: ["card", "image-gallery-card", "text-card", "clr-card"]
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
            options: n
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
          }];
          return {
            label: "Deck",
            component: "group",
            fields: [...e, (0, a.MediaQueryField)({
              fields: e
            })],
            defaultItem: () => (0, a.defaultItemUnique)(),
            itemProps: e => (0, a.itemPropsWithKey)(e, {
              label: `Deck [${e?.[a.TINA_MEMOQ_PREFIX]?.title??null}]`
            })
          }
        },
        g = () => ({
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