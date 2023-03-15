"use strict";
(self.webpackChunk_rockstargames_modules_core_card = self.webpackChunk_rockstargames_modules_core_card || []).push([
  [483], {
    6483: (e, t, a) => {
      a.r(t), a.d(t, {
        Card: () => s,
        CardWithImageGallery: () => c,
        Deck: () => b,
        EventInfo: () => m,
        EventsDeck: () => g,
        TextCard: () => h
      });
      var l = a(3616),
        o = a(559);
      const n = e => {
          let {
            label: t = "Image",
            type: a = null
          } = e;
          const n = e => {
              let {
                name: t,
                label: a = t
              } = e;
              return {
                name: t,
                label: a,
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
            i = [(0, l.NameField)(), (0, l.translatedField)({
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
            }, (0, l.ClassNamesField)({
              filter: "image"
            })];
          return "logo" === a && i.push({
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
            defaultItem: () => (0, l.defaultItemUnique)({
              specialClass: a,
              sizeClass: ""
            }),
            itemProps: e => (0, l.itemPropsWithKey)(e, {
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
        }],
        s = e => {
          let {
            templates: t
          } = e;
          const a = [(0, l.translatedField)({
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
            templates: t
          }, {
            name: "to",
            label: "Link",
            description: "If clicking the card links to a new page, what link does it go to?",
            component: "text"
          }];
          return {
            label: "Card",
            fields: [...a, (0, l.MediaQueryField)({
              fields: a
            })],
            defaultItem: () => (0, l.defaultItemUnique)({
              textOverlayProps: (0, l.defaultItemUnique)()
            }),
            itemProps: e => (0, l.itemPropsWithKey)(e, {
              label: `Card [${e?.[l.TINA_MEMOQ_PREFIX]?.title??null}]`
            })
          }
        };
      var d = a(6307);
      const r = () => {
          const e = {
            ...(0, d.ImageWithBadge)({})
          };
          return e.fields.push({
            name: "objectPosition",
            label: "Object Position",
            component: "text",
            description: "Controls the position the image is cropped from when inside the gallery."
          }), e
        },
        c = e => {
          let {
            templates: t
          } = e;
          const a = [(0, l.translatedField)({
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
            templates: [r()]
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
            label: "Content",
            name: l.TINA_PARSER_KEY,
            component: "blocks",
            description: "If clicking the card triggers a modal, select content to go inside the modal.",
            templates: t
          }];
          return {
            label: "Card with Image Gallery",
            fields: [...a, (0, l.MediaQueryField)({
              fields: a
            })],
            defaultItem: () => (0, l.defaultItemUnique)({
              textOverlayProps: (0, l.defaultItemUnique)()
            }),
            itemProps: e => (0, l.itemPropsWithKey)(e, {
              label: `Card with Image Gallery [${e?.[l.TINA_MEMOQ_PREFIX]?.title??null}]`
            })
          }
        },
        p = () => {
          const e = {
            ...(0, d.ImageWithBadge)({})
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
            templates: t
          } = e;
          return {
            label: "GTAO Event Info",
            fields: [{
              name: "images",
              label: "Image & Badge Configuration",
              description: "Displays in the collapsed card & on the left side of the expanded card.",
              component: "blocks",
              templates: [p()]
            }, (0, l.translatedField)({
              name: "title",
              label: "Title",
              description: "This gets displayed in the text overlay (when collapsed) as well as at the top of the main content (when expanded). On Newswire it will display in between the image and text content.",
              component: "text"
            }), {
              label: "Content",
              name: l.TINA_PARSER_KEY,
              component: "blocks",
              description: "If clicking the card triggers a modal, select content to go inside the modal.",
              templates: t
            }, {
              name: "textOverlayProps",
              label: "Misc. Configuration Options",
              description: "Text overlay, and animation options.",
              component: "group",
              fields: [{
                name: "hasTextOverlay",
                label: "Has Text Overlay?",
                description: "If selected, the Title and the content below will be shown when the card is collapsed.",
                component: "toggle"
              }, {
                name: "hasHoverAnimation",
                label: "Has Hover Animation?",
                description: 'If selected and "Text Overlay" is checked, the Title and the content below will be hidden by default on desktop (in collapsed view) and revealed on hover. It is always displayed on mobile.',
                component: "toggle"
              }]
            }, {
              name: "startDate",
              label: "Start Date",
              description: "ONLY show this as a card on GTAO starting this date & time.",
              component: "date",
              dateFormat: "YYYY-MM-DD",
              timeFormat: "hh:mm:ss"
            }, {
              name: "endDate",
              label: "End Date",
              description: "STOP showing this as a card on GTAO after this date & time.",
              component: "date",
              dateFormat: "YYYY-MM-DD",
              timeFormat: "hh:mm:ss"
            }],
            defaultItem: () => (0, l.defaultItemUnique)({
              textOverlayProps: (0, l.defaultItemUnique)({
                hasTextOverlay: !0,
                hasHoverAnimation: !0
              })
            }),
            itemProps: e => (0, l.itemPropsWithKey)(e, {
              label: `${e?.[l.TINA_MEMOQ_PREFIX]?.title??"New"} [Event Info]`
            })
          }
        },
        h = e => {
          let {
            templates: t
          } = e;
          const a = [(0, l.translatedField)({
            name: "title",
            label: "Title",
            component: "text"
          }), {
            name: "size",
            label: "Card Size",
            description: "Which kind of card should be displayed? (Deck settings may override this configuration.)",
            component: "select",
            options: i
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
            templates: t
          }];
          return {
            label: "Text Card",
            fields: [...a, (0, l.MediaQueryField)({
              fields: a
            })],
            defaultItem: () => (0, l.defaultItemUnique)({}),
            itemProps: e => (0, l.itemPropsWithKey)(e, {
              label: `Text Card [${e?.[l.TINA_MEMOQ_PREFIX]?.title??null}]`
            })
          }
        },
        b = () => {
          const e = [(0, l.translatedField)({
            name: "title",
            label: "Title",
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
                types: ["card", "image-gallery-card", "text-card"]
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
            options: i
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
            fields: [...e, (0, l.MediaQueryField)({
              fields: e
            })],
            defaultItem: () => (0, l.defaultItemUnique)(),
            itemProps: e => (0, l.itemPropsWithKey)(e, {
              label: `Deck [${e?.[l.TINA_MEMOQ_PREFIX]?.title??null}]`
            })
          }
        },
        g = () => ({
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
    }
  }
]);