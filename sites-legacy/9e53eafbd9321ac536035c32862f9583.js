"use strict";
(self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [844], {
    4844: (e, l, a) => {
      a.r(l), a.d(l, {
        componentsForTinaParser: () => I,
        tinaBlockTemplates: () => g
      });
      var t = a(3616),
        n = a(2026),
        o = a(2909),
        i = a.n(o);
      var r = a(559),
        m = a(1719);
      var u = a(3374),
        s = a(3705);
      const d = e => {
          let {
            field: l,
            meta: a,
            input: t
          } = e;
          return (0, s.jsxs)(u.FieldWrapper, {
            field: l,
            meta: a,
            children: [(0, s.jsx)("input", {
              type: "range",
              min: "0",
              max: "1",
              step: "0.05",
              name: l.name,
              id: l.id,
              ...t
            }), (0, s.jsx)("br", {}), (0, s.jsxs)("sup", {
              children: ["Value:", " ", t.value]
            })]
          })
        },
        p = () => ({
          name: "backgroundImageAndMask",
          label: "Background Image and Mask",
          description: "Images used for the background with an image mask.",
          component: "group",
          fields: [b(), c()],
          defaultItem: {
            foreground: () => b()?.defaultItem ?? {},
            background: () => c()?.defaultItem ?? {}
          }
        }),
        b = () => ({
          name: "backgroundImage",
          label: "Background Image",
          component: "group",
          fields: [{
            name: "mobile",
            label: "Mobile Image",
            component: "image",
            description: "If responsive, only the mobile source is needed.",
            parse: r.parse,
            previewSrc: r.previewSrc,
            uploadDir: r.uploadDir
          }, {
            name: "desktop",
            label: "Desktop Image",
            component: "image",
            parse: r.parse,
            previewSrc: r.previewSrc,
            uploadDir: r.uploadDir
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
        c = () => ({
          name: "backgroundImageMask",
          label: "Background Image Mask",
          component: "group",
          fields: [{
            name: "mobile",
            label: "Mobile Image",
            component: "image",
            description: "If responsive, only the mobile source is needed.",
            parse: r.parse,
            previewSrc: r.previewSrc,
            uploadDir: r.uploadDir
          }, {
            name: "desktop",
            label: "Desktop Image",
            component: "image",
            parse: r.parse,
            previewSrc: r.previewSrc,
            uploadDir: r.uploadDir
          }],
          defaultItem: {
            mobile: void 0,
            desktop: void 0
          }
        }),
        g = {
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
              }, i()(), {
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
                    parse: r.parse,
                    previewSrc: r.previewSrc,
                    uploadDir: r.uploadDir
                  }, {
                    name: "mask",
                    label: "Mobile Mask",
                    component: "image",
                    parse: r.parse,
                    previewSrc: r.previewSrc,
                    uploadDir: r.uploadDir
                  }]
                }, {
                  name: "desktop",
                  label: "Desktop Image/Mask Details",
                  component: "group",
                  fields: [{
                    name: "image",
                    label: "Desktop Image",
                    component: "image",
                    parse: r.parse,
                    previewSrc: r.previewSrc,
                    uploadDir: r.uploadDir
                  }, {
                    name: "mask",
                    label: "Desktop Mask",
                    component: "image",
                    parse: r.parse,
                    previewSrc: r.previewSrc,
                    uploadDir: r.uploadDir
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
                }), (0, m.VideoField)({
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
              }, (0, n.Highlights)(), {
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
                      component: d
                    }, {
                      name: "endColor",
                      label: "Gradient End Color",
                      component: "color",
                      colorFormat: "rgb"
                    }, {
                      name: "endOpacity",
                      label: "Enter Gradient Opacity (range: 0.00 - 1.00)",
                      component: d
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
                        uploadDir: r.uploadDir
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
                        uploadDir: r.uploadDir
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
                      label: "Button Text (Optional, will overload selected option)",
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
                }), p()],
                defaultItem: {
                  backgroundImageAndMask: (0, t.defaultItemUnique)(p()?.defaultItem ?? {})
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
                hero: (0, t.defaultItemUnique)(i()().defaultItem),
                imageGallery: (0, t.defaultItemUnique)(),
                relatedLinks: (0, t.defaultItemUnique)()
              }),
              itemProps: e => (0, t.itemPropsWithKey)(e, {
                label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"NEW"} [Legacy Game Page]`
              })
            })
          }
        };
      var v = a(8976),
        f = a(6573),
        x = a(417);
      const I = {
        HighlightsItem: f.HighlightsItem,
        legacy: {
          LegacyPageTemplate: x.Z
        },
        gen9: {
          TinaWrapper: v.TinaWrapper
        }
      }
    }
  }
]);