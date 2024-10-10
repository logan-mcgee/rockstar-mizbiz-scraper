! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7bad092c-d6b4-4ccd-b8f6-162320182c25", e._sentryDebugIdIdentifier = "sentry-dbid-7bad092c-d6b4-4ccd-b8f6-162320182c25")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [3142, 6632], {
    26516: (e, a, l) => {
      "use strict";
      var t = l(71403),
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
    46632: (e, a, l) => {
      "use strict";
      e.exports = l(26516)
    },
    60207: (e, a, l) => {
      "use strict";
      l.d(a, {
        A: () => i
      });
      var t = l(55140),
        n = l(73379);
      const i = function() {
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
            label: (0, n.stripHTML)(`${e?.name??e?.[t.TINA_MEMOQ_PREFIX]?.content??"New"} [List Item]`)
          })
        }
      }
    },
    33142: (e, a, l) => {
      "use strict";
      l.r(a), l.d(a, {
        BrandMessage: () => o,
        BrandsField: () => i,
        BuyNow: () => d,
        ClaimCountdown: () => m,
        CommunityChallenges: () => k,
        Disclaimer: () => S,
        DiscoverCallout: () => y,
        ElevatorPitch: () => _,
        FAQ: () => x,
        Guide: () => F,
        GuideGroup: () => w,
        GuideIntro: () => N,
        GuideSection: () => P,
        Hero: () => A,
        HeroVideo: () => M.default,
        ImageTextGroupGroup: () => ne,
        LinkoutSection: () => oe,
        StickyColumn: () => q,
        Summary: () => H,
        SummaryCard: () => j,
        Tile: () => ee,
        TinaWrapper: () => de,
        TitleImage: () => L,
        ValueProp: () => ae,
        brandField: () => n
      });
      var t = l(55140);
      const n = {
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
          }]
        },
        i = () => ({
          name: "brands",
          label: "Brands",
          component: "group-list",
          description: "Show brand icons in a row",
          fields: [n],
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `Brand [${e?.brand??null}]`
          })
        }),
        o = () => ({
          label: "Brand Message",
          description: "Brand logo, then some text.",
          component: "group",
          fields: [n, (0, t.translatedField)({
            name: "headline_left",
            label: "Headline left",
            component: "text"
          }), (0, t.translatedField)({
            name: "headline_right",
            label: "Headline right",
            component: "text"
          }), {
            name: "info",
            label: "Info",
            component: "textarea"
          }],
          defaultItem: () => (0, t.defaultItemUnique)()
        });
      var r = l(28089);
      const s = e => {
          let {
            label: a,
            name: l
          } = e;
          return {
            component: "group",
            label: a,
            name: l,
            fields: [{
              name: "mobile",
              label: "Mobile",
              component: "image",
              previewSrc: r.previewSrc,
              uploadDir: r.uploadDir
            }, {
              name: "desktop",
              label: "Desktop",
              component: "image",
              previewSrc: r.previewSrc,
              uploadDir: r.uploadDir
            }]
          }
        },
        d = () => ({
          label: "Buy Now component",
          component: "group",
          fields: [(0, t.translatedField)({
            name: "topText",
            label: "Top Text",
            component: "text"
          }), (0, t.translatedField)({
            name: "bottomText",
            label: "Bottom Text",
            component: "text"
          }), {
            component: "group-list",
            name: "cards",
            label: "Cards",
            fields: [(0, t.translatedField)({
              name: "title",
              label: "Title",
              component: "text"
            }), (0, t.translatedField)({
              name: "description",
              label: "Description",
              component: "text"
            }), (0, t.translatedField)({
              name: "addedInfo",
              label: "Additional Information",
              component: "text"
            }), (0, t.translatedField)({
              name: "buynowbtn",
              label: "Buy Now",
              component: "text"
            }), {
              component: "group-list",
              name: "links",
              label: "Links",
              fields: [(0, t.translatedField)({
                name: "href",
                label: "href",
                component: "text"
              }), {
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
                }]
              }, (0, t.translatedField)({
                name: "altText",
                label: "Alt Text (Required, needed for Alt Text on image platform buttons)",
                component: "text"
              })],
              itemProps: e => (0, t.itemPropsWithKey)(e, {
                label: `Link for [${e?.platform??""}]`,
                href: e?.href
              }),
              defaultItem: () => (0, t.defaultItemUnique)({
                href: (0, t.defaultItemUnique)(),
                links: {
                  altText: ""
                }
              })
            }, {
              name: "images",
              component: "group",
              label: "Images for this card.",
              fields: [s({
                name: "background",
                label: "Background"
              }), s({
                name: "foreground",
                label: "Foreground"
              })]
            }],
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `Card [${e?.[t.TINA_MEMOQ_PREFIX]?.title??""}]`
            }),
            defaultItem: () => (0, t.defaultItemUnique)()
          }],
          defaultItem: () => (0, t.defaultItemUnique)()
        }),
        m = () => ({
          label: "Claim Countdown",
          description: "Claim rewards until...",
          component: "group",
          fields: [(0, t.translatedField)({
            name: "left",
            label: "Left",
            component: "text"
          }), (0, t.translatedField)({
            name: "right",
            label: "Right",
            component: "text"
          })],
          defaultItem: () => (0, t.defaultItemUnique)()
        }),
        c = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "center",
            label: "Default Position"
          }, {
            value: "center",
            label: "Center"
          }, {
            value: "flex-start",
            label: "Left"
          }, {
            value: "flex-end",
            label: "Right"
          }]
        },
        u = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "normal",
            label: "default-position-normal"
          }, {
            value: "center",
            label: "Center"
          }, {
            value: "start",
            label: "Top"
          }, {
            value: "end",
            label: "Bottom"
          }]
        },
        p = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "auto",
            label: "Automatic"
          }, {
            value: "horizontal",
            label: "Horizontal"
          }, {
            value: "vertical",
            label: "Vertical"
          }]
        },
        b = e => {
          let {
            label: a
          } = e;
          return [{
            value: "inactive",
            label: a
          }, {
            value: "active",
            label: "Active"
          }, {
            value: "success",
            label: "Success"
          }, {
            value: "failure",
            label: "Failure"
          }]
        },
        g = e => {
          let {
            label: a
          } = e;
          return [{
            value: "0",
            label: a
          }, {
            value: "2px",
            label: "2px"
          }, {
            value: "4px",
            label: "4px"
          }, {
            value: "6px",
            label: "6px"
          }, {
            value: "8px",
            label: "8px"
          }, {
            value: "10px",
            label: "10px"
          }]
        },
        f = () => ({
          label: "Image Left",
          name: "imageLeft",
          component: "group",
          fields: [{
            name: "mobile",
            label: "Mobile",
            component: "image",
            description: "(If responsive, only Mobile Source is needed)",
            clearable: !0,
            previewSrc: r.previewSrc,
            parse: r.parse,
            uploadDir: r.uploadDir
          }, {
            name: "desktop",
            label: "Desktop",
            component: "image",
            clearable: !0,
            previewSrc: r.previewSrc,
            parse: r.parse,
            uploadDir: r.uploadDir
          }, (0, t.translatedField)({
            label: "Alt Text",
            name: "altText",
            component: "text"
          })],
          defaultItem: () => (0, t.defaultItemUnique)({
            altText: (0, t.defaultItemUnique)()
          })
        }),
        v = () => ({
          label: "Image Right",
          name: "imageRight",
          component: "group",
          fields: [{
            name: "mobile",
            label: "Mobile",
            component: "image",
            description: "(If responsive, only Mobile Source is needed)",
            clearable: !0,
            previewSrc: r.previewSrc,
            parse: r.parse,
            uploadDir: r.uploadDir
          }, {
            name: "desktop",
            label: "Desktop",
            component: "image",
            clearable: !0,
            previewSrc: r.previewSrc,
            parse: r.parse,
            uploadDir: r.uploadDir
          }, (0, t.translatedField)({
            label: "Alt Text",
            name: "altText",
            component: "text"
          })],
          defaultItem: () => (0, t.defaultItemUnique)({
            altText: (0, t.defaultItemUnique)()
          })
        }),
        k = () => ({
          label: "GTAO Community Challenge",
          name: "content",
          component: "group",
          fields: [(0, t.NameField)(), {
            label: "Banner",
            name: "banner",
            component: "group",
            fields: [(0, t.NameField)(), (0, t.ImageField)({
              label: "logo"
            }), {
              label: "Logo Horizontal Alignment",
              name: "logoHorizontalPosition",
              description: "Set the position for the Logo",
              component: "select",
              options: c({
                label: "-- Select Position --"
              })
            }, {
              label: "Logo Vertical Alignment",
              name: "logoVerticalPosition",
              description: "Set the vertical alignment position for the Logo",
              component: "select",
              options: u({
                label: "-- Select Position --"
              })
            }, {
              label: "Upload Background Image",
              name: "backgroundImage",
              component: "group",
              fields: [{
                name: "mobile",
                label: "Mobile",
                component: "image",
                description: "(If responsive, only Mobile Source is needed)",
                clearable: !0,
                previewSrc: r.previewSrc,
                parse: r.parse,
                uploadDir: r.uploadDir
              }, {
                name: "desktop",
                label: "Desktop",
                component: "image",
                clearable: !0,
                previewSrc: r.previewSrc,
                parse: r.parse,
                uploadDir: r.uploadDir
              }, (0, t.translatedField)({
                label: "Alt Text",
                name: "altText",
                component: "text"
              })]
            }, {
              label: "Enable an overlay",
              name: "enableOverlay",
              component: "toggle"
            }, {
              label: "Add a overlay background color",
              name: "overlayBackground",
              description: "Feel free to add any colors that are either, rgb, rgba, hsl, hsla, or predefined colors (i.e., rgb(0,0,0), rgba(0,0,0,0.5), hsl(120, 100%, 50%), hsla(120, 100%, 50%, 0.3), red, green, blue, etc.).",
              component: "text"
            }, (0, t.ClassNamesField)({
              filter: "banner"
            }), (0, t.StyleField)({
              filter: "banner"
            })],
            defaultItem: () => (0, t.defaultItemUnique)(),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"New"} [Banner]`
            })
          }, {
            label: "Count Down Timer",
            name: "countdown",
            component: "group",
            fields: [{
              label: "Timer",
              name: "timer",
              component: "group",
              fields: [{
                label: "Target Date",
                description: "Enter the target date and time of when the challenge ends.",
                name: "targetDate",
                component: "datetime-field"
              }, {
                label: "Status",
                name: "status",
                component: "select",
                options: b({
                  label: "-- Select Status --"
                })
              }, {
                label: "Include Seconds",
                name: "includeSeconds",
                description: "The seconds display will only be shown when enabled.",
                component: "toggle"
              }, {
                label: "Success Background Images",
                name: "successBgImages",
                component: "group",
                fields: [f(), v()]
              }, {
                label: "Failure Background Images",
                name: "failureBgImages",
                component: "group",
                fields: [f(), v()]
              }, {
                label: "Show Background",
                name: "showBackground",
                component: "toggle"
              }, {
                label: "Add background color",
                name: "backgroundColor",
                description: "Feel free to add any colors that are either, rgb, rgba, hsl, hsla, or predefined colors (i.e., rgb(0,0,0), rgba(0,0,0,0.5), hsl(120, 100%, 50%), hsla(120, 100%, 50%, 0.3), red, green, blue, etc.).",
                component: "text"
              }, {
                label: "Update Theme",
                name: "theme",
                component: "group",
                fields: [{
                  label: "Enable Text Gradient Color",
                  name: "enableTextGradient",
                  component: "toggle"
                }, {
                  label: "Gradient Color",
                  name: "textGradient",
                  component: "text"
                }, {
                  label: "Text Color",
                  name: "textColor",
                  description: "Feel free to add any colors that are either, rgb, rgba, hsl, hsla, or predefined colors (i.e., rgb(0,0,0), rgba(0,0,0,0.5), hsl(120, 100%, 50%), hsla(120, 100%, 50%, 0.3), red, green, blue, etc.).",
                  component: "text"
                }, {
                  label: "Text Glow",
                  name: "textGlow",
                  component: "toggle"
                }, {
                  label: "Enable Text Shadow",
                  name: "enableTextShadow",
                  component: "toggle"
                }, {
                  label: "Text Shadow",
                  name: "textShadow",
                  component: "text"
                }, {
                  label: "Enable Text Stroke",
                  name: "enableTextStroke",
                  component: "toggle"
                }, {
                  label: "Text Stroke Color",
                  name: "textStrokeColor",
                  description: "Feel free to add any colors that are either, rgb, rgba, hsl, hsla, or predefined colors (i.e., rgb(0,0,0), rgba(0,0,0,0.5), hsl(120, 100%, 50%), hsla(120, 100%, 50%, 0.3), red, green, blue, etc.).",
                  component: "text"
                }, {
                  label: "Text Stroke Width",
                  name: "textStrokeWidth",
                  component: "select",
                  options: g({
                    label: "-- Select Stroke Width --"
                  })
                }, {
                  label: "Orientation",
                  name: "counterOrientation",
                  component: "select",
                  options: p({
                    label: "-- Select Orientation --"
                  })
                }]
              }]
            }],
            defaultItem: () => (0, t.defaultItemUnique)({
              timer: (0, t.defaultItemUnique)()
            }),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"New"} [CountDown]`
            })
          }, {
            label: "Rewards",
            name: "rewards",
            component: "group",
            fields: [{
              name: "detail",
              label: "Rewards Detail",
              component: "group",
              fields: [(0, t.translatedField)({
                label: "Title Heading",
                name: "heading",
                component: "text"
              }), (0, t.translatedField)({
                label: "Description",
                name: "description",
                component: "textarea"
              }), (0, t.translatedField)({
                label: "CTA Text",
                name: "ctaText",
                component: "text"
              }), {
                label: "CTA link",
                name: "ctaLink",
                component: "text"
              }]
            }, {
              name: "deck",
              label: "Rewards Deck",
              component: "group",
              fields: [(0, t.translatedField)({
                label: "Title Heading",
                name: "heading",
                component: "text"
              }), {
                name: "cards",
                label: "Cards",
                component: "group-list",
                fields: [(0, t.translatedField)({
                  label: "Title",
                  name: "title",
                  component: "text"
                }), (0, t.translatedField)({
                  label: "Sub-Title",
                  name: "subTitle",
                  component: "text"
                }), {
                  label: "Rewards Background Image",
                  description: "Select the background image you would like to have for the Rewards Card.",
                  name: "rewardsBgImage",
                  component: "group",
                  fields: [{
                    name: "mobile",
                    label: "Mobile",
                    component: "image",
                    description: "(If responsive, only Mobile Source is needed)",
                    clearable: !0,
                    previewSrc: r.previewSrc,
                    parse: r.parse,
                    uploadDir: r.uploadDir
                  }, {
                    name: "desktop",
                    label: "Desktop",
                    component: "image",
                    clearable: !0,
                    previewSrc: r.previewSrc,
                    parse: r.parse,
                    uploadDir: r.uploadDir
                  }, (0, t.translatedField)({
                    label: "Alt Text",
                    name: "altText",
                    component: "text"
                  })]
                }, (0, t.ClassNamesField)({
                  filter: "rewardsCard"
                }), (0, t.StyleField)({
                  filter: "rewardsCard"
                })],
                defaultItem: () => (0, t.defaultItemUnique)(),
                itemProps: e => (0, t.itemPropsWithKey)(e, {
                  label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"New"} [Rewards Card]`
                })
              }]
            }],
            defaultItem: () => (0, t.defaultItemUnique)({
              deck: (0, t.defaultItemUnique)({
                cards: (0, t.defaultItemUnique)()
              }),
              detail: (0, t.defaultItemUnique)()
            }),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"New"} [Rewards]`
            })
          }, {
            label: "Milestone Indicator",
            name: "milestoneIndicator",
            component: "group",
            fields: [(0, t.NameField)(), (0, t.translatedField)({
              label: "Milestone Indicator Heading",
              name: "heading",
              description: "Enter the heading for the milestone indicator",
              component: "text"
            }), (0, t.translatedField)({
              label: "Initial Title",
              name: "initialTitle",
              description: "Enter the initial title for the milestones (e.g., Start)",
              component: "text"
            }), {
              label: "Initial Date",
              name: "initialDate",
              component: "datetime-field"
            }, {
              name: "completedMilestoneImage",
              label: "Completed image",
              component: "image",
              clearable: !0,
              previewSrc: r.previewSrc,
              parse: r.parse,
              uploadDir: r.uploadDir
            }, {
              name: "incompleteMilestoneImage",
              label: "Incomplete image",
              component: "image",
              clearable: !0,
              previewSrc: r.previewSrc,
              parse: r.parse,
              uploadDir: r.uploadDir
            }, {
              label: "Milestone Block Limit",
              name: "limit",
              description: "Set the limit for the number of milestones that can be added.",
              component: "text"
            }, {
              label: "Milestones",
              name: "milestones",
              component: "group-list",
              fields: [(0, t.translatedField)({
                label: "Title",
                name: "title",
                component: "text"
              }), {
                label: "Date",
                name: "date",
                component: "datetime-field"
              }, {
                label: "Active",
                description: "Toggle on if the current milestone is active.",
                name: "active",
                component: "toggle"
              }, (0, t.ClassNamesField)({
                filter: "milestone"
              }), (0, t.StyleField)({
                filter: "milestone"
              })],
              defaultItem: () => (0, t.defaultItemUnique)(),
              itemProps: e => (0, t.itemPropsWithKey)(e, {
                label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"New"} [Milestone]`
              })
            }, (0, t.ClassNamesField)({
              filter: "milestoneIndicator"
            }), (0, t.StyleField)({
              filter: "milestoneIndicator"
            })],
            defaultItem: () => (0, t.defaultItemUnique)(),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"New"} [MilestoneIndicator]`
            })
          }, (0, t.ImpressionTrackingField)(), (0, t.GtmField)()],
          defaultItem: () => (0, t.defaultItemUnique)({
            banner: (0, t.defaultItemUnique)(),
            countdown: (0, t.defaultItemUnique)(),
            rewards: (0, t.defaultItemUnique)({
              detail: (0, t.defaultItemUnique)(),
              deck: (0, t.defaultItemUnique)()
            }),
            milestoneIndicator: (0, t.defaultItemUnique)()
          }),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"NEW"} [GTAO Community Challenge]`
          })
        }),
        h = "Discover Callout Section",
        I = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
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
        y = () => ({
          label: h,
          name: "content",
          component: "group",
          fields: [{
            label: "Link to",
            name: "to",
            component: "text"
          }, (0, t.translatedField)({
            label: "Heading",
            name: "heading",
            component: "text"
          }), (0, t.translatedField)({
            label: "Description",
            name: "description",
            component: "text"
          }), (0, t.translatedField)({
            label: "CTA",
            name: "cta",
            description: 'Treated as button text (ex. "Track Progress")',
            component: "text"
          }), {
            name: "cards",
            label: "Pack Cards",
            description: "Edit Pack Cards",
            component: "group",
            fields: [{
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
                label: `${e?.[t.TINA_MEMOQ_PREFIX]?.name??e?.name??"New"} [Image]`
              })
            }, {
              name: "style",
              label: "Style Overrides",
              component: "group",
              fields: [{
                label: "Grid Gap",
                name: "gridGap",
                description: "Set the grid gap",
                component: "select",
                options: I("-- Select Grid Gap --")
              }]
            }],
            defaultItem: () => (0, t.defaultItemUnique)()
          }, (0, t.ClassNamesField)({
            filter: "discoverCallout"
          }), (0, t.StyleField)({
            filter: "discoverCallout"
          })],
          defaultItem: () => (0, t.defaultItemUnique)(),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??e?.title??`${h}`}`
          })
        }),
        S = () => ({
          name: "disclaimer",
          label: "Disclaimer",
          description: "To add a box of small text somewhere",
          component: "group",
          fields: [(0, t.translatedField)({
            name: "title",
            label: "Disclaimer Title",
            component: "text"
          }), (0, t.translatedField)({
            name: "text",
            label: "Disclaimer Text",
            component: "text"
          }), (0, t.ClassNamesField)({
            filter: "disclaimer"
          }), (0, t.StyleField)({
            filter: "disclaimer"
          })],
          defaultItem: () => (0, t.defaultItemUnique)(),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `Disclaimer [${e?.[t.TINA_MEMOQ_PREFIX]?.text??null}]`
          })
        }),
        x = () => ({
          label: "FAQ",
          description: "Edit FAQ",
          component: "group",
          fields: [(0, t.translatedField)({
            name: "disclaimer",
            label: "Disclaimer",
            component: "html"
          }), (0, t.translatedField)({
            name: "buttonTxt",
            label: "Button Text",
            component: "text"
          }), {
            name: "initialLength",
            label: "Initial Length",
            component: "number",
            description: "How many quetions should be shown initially?"
          }, {
            name: "addedLength",
            label: "Added Length",
            component: "number",
            description: "How many MORE quetions should be shown after clicking the button?"
          }, {
            component: "group-list",
            name: "faqList",
            label: "FAQ List",
            fields: [(0, t.translatedField)({
              name: "question",
              label: "Question",
              component: "text"
            }), (0, t.translatedField)({
              name: "answer",
              label: "Answer",
              component: "html"
            })],
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `Question [${e?.[t.TINA_MEMOQ_PREFIX]?.question??""}]`
            }),
            defaultItem: () => (0, t.defaultItemUnique)()
          }],
          defaultItem: () => (0, t.defaultItemUnique)({
            faqs: (0, t.defaultItemUnique)()
          })
        }),
        T = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
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
        F = e => {
          let {
            templates: a
          } = e;
          return {
            label: "Guide",
            description: "Edit this guide",
            component: "group",
            fields: [{
              label: "Guide sections",
              name: t.TINA_PARSER_KEY,
              component: "blocks",
              templates: a
            }, {
              name: "images",
              component: "group",
              label: "Images for this guide.",
              fields: [(0, t.localizedImageField)({
                label: "Thumb Image",
                name: "thumb"
              })]
            }, {
              name: "style",
              label: "Style Overrides",
              component: "group",
              fields: [{
                label: "Grid Gap",
                name: "gridGap",
                description: "Set the grid gap",
                component: "select",
                options: T("-- Select Grid Gap --")
              }]
            }],
            defaultItem: () => (0, t.defaultItemUnique)()
          }
        },
        N = () => ({
          label: "Guide Intro",
          name: "content",
          component: "group",
          fields: [(0, t.translatedField)({
            name: "title",
            component: "text",
            label: "Title"
          }), (0, t.translatedField)({
            name: "blurb",
            component: "html",
            label: "Blurb"
          }), (0, t.localizedImageField)({
            name: "hero",
            label: "Hero Image"
          })],
          defaultItem: (0, t.defaultItemUnique)()
        }),
        w = () => ({
          label: "Guides Wrapper",
          description: "Edit this guide group",
          component: "group",
          fields: [{
            name: "guides",
            component: "group-list",
            label: "List of Guides",
            fields: [{
              component: "tina-module-selector",
              name: "guide_id",
              variables: {
                types: ["gen9-guide"]
              },
              label: "Select Guide"
            }],
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `Guide: [${e?.guide_id??"New"}]`
            })
          }],
          defaultItem: () => (0, t.defaultItemUnique)()
        }),
        P = e => {
          let {
            templates: a
          } = e;
          return {
            component: "group",
            name: "content",
            label: "Guide Section Content",
            fields: [(0, t.translatedField)({
              name: "title",
              label: "Title",
              description: "This will show up only in the guide sub nav",
              component: "text"
            }), {
              name: "content",
              component: "blocks",
              label: "This section's content",
              templates: a
            }, (0, t.StyleField)({
              filter: "grid"
            })],
            defaultItem: () => (0, t.defaultItemUnique)(),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `Guide Section Content: [${e?.[t.TINA_MEMOQ_PREFIX]?.title??"New"}]`
            })
          }
        },
        C = function() {
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
            }, (0, t.GtmField)()],
            ...e,
            defaultItem: () => (0, t.defaultItemUnique)(),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `CTA [${e?.[t.TINA_MEMOQ_PREFIX]?.title??null}]`
            })
          }
        },
        D = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "background";
          const a = [{
            name: "mobile",
            label: "Mobile",
            component: "image",
            description: "(If responsive, only Mobile Source is needed)",
            previewSrc: t.previewSrc,
            uploadDir: r.uploadDir
          }, {
            name: "desktop",
            label: "Desktop",
            component: "image",
            previewSrc: t.previewSrc,
            uploadDir: r.uploadDir
          }];
          return "background" === e && a.push((0, t.StyleField)({
            filter: "image"
          })), {
            component: "group",
            name: `${e}Img`,
            label: `${e} Images`,
            fields: a
          }
        },
        A = () => ({
          label: "Gen 9 Hero [DEPRECATED - Update Only]",
          component: "group",
          fields: [i(), (0, t.translatedField)({
            name: "title",
            label: "Title",
            component: "text"
          }), (0, t.translatedField)({
            name: "description",
            label: "Description",
            component: "text"
          }), C({
            description: "Show a group of CTA buttons (for CTA display ONLY)"
          }), (0, t.translatedField)({
            name: "expandingButtonLabel",
            label: "Expanding Button Label",
            description: "Default: Subscribe",
            component: "text"
          }), (0, t.PlatformsAndLinksField)({
            description: "Game Platforms/Links (for expanding button display ONLY)"
          }), (0, t.translatedField)({
            name: "legalText",
            label: "Legal Text",
            component: "text",
            description: "Display smaller legal text underneath the CTA buttons."
          }), D(), D("layered"), {
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
              }), D("shard")],
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
            label: `Hero [${e?.[t.TINA_MEMOQ_PREFIX]?.title??null}]`
          })
        }),
        _ = e => {
          let {
            templates: a
          } = e;
          return {
            label: "Elevator Pitch",
            name: "content",
            component: "group",
            fields: [(0, t.translatedField)({
              label: "Title",
              name: "title",
              component: "text"
            }), (0, t.translatedField)({
              label: "Description",
              name: "description",
              component: "text"
            }), (0, t.translatedField)({
              label: "Disclaimer",
              name: "disclaimer",
              component: "text"
            }), {
              label: "CTA",
              name: "cta",
              description: "Add a cta button",
              component: "blocks",
              templates: a
            }, (0, t.PlatformsAndLinksField)({
              description: "Game Platforms/Links (for expanding button display ONLY)"
            }), (0, t.ClassNamesField)({
              filter: "elevatorPitch"
            }), (0, t.StyleField)({
              filter: "elevatorPitch"
            })],
            defaultItem: () => (0, t.defaultItemUnique)(),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `[Elevator Pitch]: ${e?.[t.TINA_MEMOQ_PREFIX]?.title??e?.title??"New"}`
            })
          }
        };
      var M = l(88996);
      const E = "Title Image",
        G = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
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
        L = e => {
          let {
            templates: a
          } = e;
          return {
            label: E,
            name: "content",
            component: "group",
            fields: [(0, t.translatedField)({
              label: "Title Text Mask",
              name: "title",
              component: "text"
            }), (0, t.translatedField)({
              label: "Image Title",
              name: "imgTitle",
              component: "html"
            }), (0, t.translatedField)({
              label: "Description",
              name: "description",
              component: "text"
            }), {
              name: "imageSrc",
              label: "Title Mask Image",
              component: "image",
              clearable: !0,
              previewSrc: r.previewSrc,
              parse: r.parse,
              uploadDir: r.uploadDir
            }, {
              label: "CTA",
              name: "cta",
              description: "Add a cta button component",
              component: "blocks",
              templates: a
            }, {
              name: "customStyles",
              label: "Card Style Overrides",
              component: "group",
              fields: [{
                label: "Grid Gap",
                name: "gridGap",
                description: "Set the grid gap",
                component: "select",
                options: G({
                  label: "-- Select Grid Gap --"
                })
              }]
            }, (0, t.ClassNamesField)({
              filter: "maskText"
            }), (0, t.StyleField)({
              filter: "grid"
            })],
            defaultItem: () => (0, t.defaultItemUnique)({}),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??e?.title??`${E}`}`
            })
          }
        },
        R = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
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
        q = e => {
          let {
            templates: a
          } = e;
          return {
            label: "Sticky Column",
            name: "content",
            component: "group",
            fields: [{
              label: "Title",
              name: "title",
              component: "text"
            }, (0, t.IdField)(), {
              label: "Left Column",
              name: "leftColumn",
              component: "blocks",
              templates: a
            }, {
              label: "Right Column",
              name: "rightColumn",
              component: "blocks",
              templates: a
            }, {
              label: "Disable Sticky Column on Desktop?",
              name: "disableStickyOnDesktop",
              description: "Disable sticky column on desktop?",
              component: "toggle"
            }, {
              label: "Disable Sticky Column on Mobile?",
              name: "disableStickyOnMobile",
              description: "Disable sticky column on mobile?",
              component: "toggle"
            }, {
              name: "customStyles",
              label: "Card Style Overrides",
              component: "group",
              fields: [{
                label: "Grid Gap",
                name: "gridGap",
                description: "Set the grid gap",
                component: "select",
                options: R({
                  label: "-- Select Grid Gap --"
                })
              }]
            }, (0, t.ClassNamesField)({
              filter: "stickyColumn"
            }), (0, t.StyleField)({
              filter: "grid"
            })],
            defaultItem: () => (0, t.defaultItemUnique)({}),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `[Sticky Column]: ${e?.[t.TINA_MEMOQ_PREFIX]?.title??e?.title??"New"}`
            })
          }
        },
        U = {
          gtao: "Grand Theft Auto Online",
          gtav: "Grand Theft Auto V",
          gtaplus: "GTA+",
          rdo: "Red Dead Online",
          rdr2: "Read Dead Redemption 2",
          bully: "Bully",
          bullySE: "Bully: Special Edition",
          gta1: "Grand Theft Auto I",
          gta2black: "Grand Theft Auto II (black logo)",
          gta2white: "Grand Theft Auto II (white logo)",
          gta3black: "Grand Theft Auto III (black logo)",
          gta3white: "Grand Theft Auto III (white logo)",
          gta4: "Grand Theft Auto IV",
          gtabogt: "Grand Theft Auto: The Ballad of Gay Tony",
          gtacw: "Grand Theft Auto: Chinatown Wars",
          gtalc: "Grand Theft Auto: Libery City",
          gtalcs: "Grand Theft Auto: Libery City Stories",
          gtavc: "Grand Theft Auto: Vice City",
          gtavcs: "Grand Theft Auto: Vice City Stories",
          gtatlad: "Grand Theft Auto: The Lost and the Damned",
          lanoire: "L.A. Noire",
          manhunt1: "Manhunt",
          manhunt2: "Manhunt 2",
          maxpayne1: "Max Payne",
          maxpayne2: "Max Payne 2",
          maxpayne3: "Max Payne 3",
          mc1: "Midnight Club",
          mc2: "Midnight Club II",
          mc3: "Midnight Club III Dub Edition",
          mc3remix: "Midnight Club III Dub Edition REMIX",
          mcla: "Midnight Club Los Angeles",
          mclaremix: "Midnight Club Los Angeles REMIX",
          rdr1: "Read Dead Redemption",
          rdr1rsp: "Read Dead Redemption (Rockstar Presents Ver)",
          rdrevolver: "Read Dead Revolver",
          rdrun: "Read Dead Redemption Undead Nightmare",
          sr1: "Smuggler's Run",
          sr2: "Smuggler's Run 2",
          srwz: "Smuggler's Run Warzones",
          tabletennis: "Table Tennis ",
          warriors: "Warriors",
          lossantoscustoms: "Los Santos Customs"
        };
      Object.keys(U).map((e => ({
        value: e,
        label: U[e]
      })));
      var O = l(46632);
      const B = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, O.jsx)("hr", {})
          }
        },
        $ = function() {
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
      B("Grid"),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label").toLowerCase().split(" ").join("_")
        }("Grid"), $("style.--grid-num-columns-mobile", "Grid Number of Columns (Mobile)"), $("style.--grid-num-columns-desktop", "Grid Number of Columns (Desktop)"), B("Grid");
      var V = l(60207);
      l(58407), l(33809), l(50048), l(22941);
      var W = l(63672);
      const K = e => {
          let {
            game: a = null,
            parent: l = null
          } = e;
          const n = [(0, t.NameField)()];
          return "gtao" !== a && "gtav" !== a || n.push({
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
          }), n.push((0, t.translatedField)({
            label: "Title",
            name: "title",
            component: "text"
          }), {
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
            templates: [(0, V.A)({})]
          }, (0, t.StyleField)({
            parent: l
          })), {
            name: "unorderedList",
            label: "Unordered List",
            component: "group",
            fields: n,
            defaultItem: () => (0, t.defaultItemUnique)({
              content: W.A,
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
        Q = "Summary",
        X = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
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
        H = () => ({
          label: Q,
          name: "content",
          component: "group",
          fields: [(0, t.translatedField)({
            label: "Title",
            name: "title",
            component: "text"
          }), (0, t.translatedField)({
            label: "Text",
            name: "text",
            component: "text"
          }), {
            name: "benefits",
            label: "Benifits",
            component: "blocks",
            templates: [K({
              game: null
            })]
          }, {
            name: "customStyles",
            label: "Summary Style Overrides",
            component: "group",
            fields: [{
              label: "Grid Gap",
              name: "gridGap",
              description: "Set the grid gap",
              component: "select",
              options: X({
                label: "-- Select Grid Gap --"
              })
            }]
          }, (0, t.ClassNamesField)({
            filter: "summary"
          }), (0, t.StyleField)({
            filter: "summary"
          })],
          defaultItem: () => (0, t.defaultItemUnique)(),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??e?.title??`${Q}`}`
          })
        }),
        j = e => {
          let {
            templates: a
          } = e;
          return {
            label: "SummaryCard",
            name: "content",
            component: "group",
            fields: [(0, t.translatedField)({
              label: "Title",
              name: "title",
              component: "text"
            }), (0, t.translatedField)({
              label: "Description",
              name: "description",
              component: "text"
            }), (0, t.PlatformsAndLinksField)({
              description: "Game Platforms/Links (for expanding button display ONLY)"
            }), {
              label: "CTA",
              name: "cta",
              description: "Add a cta button component",
              component: "blocks",
              templates: a
            }, {
              component: "group",
              name: "imgSrc",
              label: "Upload Summary Card Feature Image",
              fields: [{
                name: "mobile",
                label: "Mobile",
                component: "image",
                description: "(If responsive, only Mobile Source is needed)",
                clearable: !0,
                previewSrc: r.previewSrc,
                parse: r.parse,
                uploadDir: r.uploadDir
              }, {
                name: "desktop",
                label: "Desktop",
                component: "image",
                clearable: !0,
                previewSrc: r.previewSrc,
                parse: r.parse,
                uploadDir: r.uploadDir
              }]
            }, (0, t.ClassNamesField)({
              filter: "summaryCard"
            }), (0, t.StyleField)({
              filter: "summaryCard"
            })],
            defaultItem: () => (0, t.defaultItemUnique)(),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${e?.[t.TINA_MEMOQ_PREFIX]?.title??"New"} [Summary Card]`
            })
          }
        },
        z = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
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
        Y = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "left",
            label: "Left"
          }, {
            value: "right",
            label: "Right"
          }, {
            value: "top",
            label: "Top"
          }, {
            value: "bottom",
            label: "Bottom"
          }]
        },
        J = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "small",
            label: "Small"
          }, {
            value: "medium",
            label: "Medium"
          }, {
            value: "large",
            label: "Large"
          }]
        },
        Z = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "1/1",
            label: "1/1"
          }, {
            value: "16/9",
            label: "16/9"
          }, {
            value: "3/1",
            label: "3/1"
          }]
        },
        ee = e => {
          let {
            templates: a
          } = e;
          return {
            label: "Tile",
            name: "content",
            component: "group",
            fields: [(0, t.NameField)(), (0, t.translatedField)({
              label: "Title",
              name: "title",
              component: "text"
            }), {
              label: "Tile Card Size",
              name: "cardSize",
              description: "Set the size for the Tile Card",
              component: "select",
              options: J({
                label: "-- Select Size --"
              })
            }, {
              label: "Do you want to enable a Full-Bleed image?",
              name: "enableFullBleed",
              component: "toggle"
            }, (0, t.translatedField)({
              label: "Description",
              name: "description",
              component: "text"
            }), {
              label: "CTA",
              name: "cta",
              description: "Add a cta button component",
              component: "blocks",
              templates: a
            }, {
              component: "group",
              name: "imgSrc",
              label: "Upload Tile Images",
              fields: [{
                name: "mobile",
                label: "Mobile",
                component: "image",
                description: "(If responsive, only Mobile Source is needed)",
                clearable: !0,
                previewSrc: r.previewSrc,
                parse: r.parse,
                uploadDir: r.uploadDir
              }, {
                name: "desktop",
                label: "Desktop",
                component: "image",
                clearable: !0,
                previewSrc: r.previewSrc,
                parse: r.parse,
                uploadDir: r.uploadDir
              }, (0, t.translatedField)({
                label: "Image Alt Tag",
                name: "imgAlt",
                component: "text"
              })]
            }, {
              label: "Image Position",
              name: "imgPosition",
              description: "Set the position for the Tile Image",
              component: "select",
              options: Y({
                label: "-- Select Position --"
              })
            }, {
              label: "Image Aspect Ratio",
              name: "imgAspectRatio",
              description: "Set the aspect ratio for the Tile Image",
              component: "select",
              options: Z({
                label: "-- Select Aspect Ratio --"
              })
            }, {
              name: "backgroundImage",
              label: "Background Image",
              component: "image",
              clearable: !0,
              previewSrc: r.previewSrc,
              parse: r.parse,
              uploadDir: r.uploadDir
            }, {
              label: "Background",
              name: "background",
              component: "text"
            }, {
              label: "Background Size",
              name: "backgroundSize",
              component: "text"
            }, {
              label: "Background Position",
              name: "backgroundPosition",
              component: "text"
            }, {
              label: "Background Repeat",
              name: "backgroundRepeat",
              component: "text"
            }, {
              name: "customStyles",
              label: "Tile Style Overrides",
              component: "group",
              fields: [{
                label: "Grid Gap",
                name: "gridGap",
                description: "Set the grid gap",
                component: "select",
                options: z({
                  label: "-- Select Grid Gap --"
                })
              }]
            }, (0, t.ClassNamesField)({
              filter: "tile"
            }), (0, t.StyleField)({
              filter: "tile"
            })],
            defaultItem: () => (0, t.defaultItemUnique)(),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `[Tile Item]: ${e?.[t.TINA_MEMOQ_PREFIX]?.name??e?.name??"New"}`
            })
          }
        },
        ae = () => ({
          label: "Value Prop Tile",
          name: "content",
          component: "group",
          fields: [(0, t.NameField)(), {
            label: "Value Props",
            name: "valueProps",
            component: "group-list",
            fields: [(0, t.translatedField)({
              label: "Title",
              name: "title",
              component: "text"
            }), {
              name: "iconImgSrc",
              label: "Upload Image Icon",
              component: "image",
              clearable: !0,
              previewSrc: r.previewSrc,
              parse: r.parse,
              uploadDir: r.uploadDir
            }, (0, t.translatedField)({
              label: "Icon Image Alt Tag",
              name: "iconAlt",
              component: "text"
            }), {
              label: "Jump To Section ID",
              name: "jumpToSectionId",
              description: "To have this value prop scroll to a section on click, enter that sections ID here.",
              component: "text"
            }],
            defaultItem: () => (0, t.defaultItemUnique)({}),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `[Value Prop Item]: ${e?.[t.TINA_MEMOQ_PREFIX]?.title??"New"}`
            })
          }, {
            label: "Enable hover animation?",
            name: "enableAnimation",
            component: "toggle"
          }, (0, t.ClassNamesField)({
            filter: "maskText"
          }), (0, t.StyleField)({
            filter: "grid"
          })],
          defaultItem: () => (0, t.defaultItemUnique)({}),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `[Value Prop]: ${e?.[t.TINA_MEMOQ_PREFIX]?.name??e?.name??"New"}`
          })
        }),
        le = "Image w/text",
        te = "Group of Image/Text Groups (gen9)",
        ne = () => ({
          label: te,
          name: "content",
          component: "group",
          fields: [(0, t.NameField)(), {
            name: "bg",
            component: "group",
            label: "Background",
            fields: [{
              component: "group",
              name: "image",
              label: "Images",
              fields: [{
                name: "desktop",
                label: "Desktop",
                component: "image",
                previewSrc: r.previewSrc,
                uploadDir: r.uploadDir
              }, {
                name: "mobile",
                label: "Mobile",
                component: "image",
                previewSrc: r.previewSrc,
                uploadDir: r.uploadDir
              }]
            }]
          }, {
            label: le,
            name: "image_text_groups",
            component: "group-list",
            fields: [(0, t.translatedField)({
              label: "Title",
              name: "title",
              component: "text"
            }), (0, t.TextField)(), {
              component: "group-list",
              name: "ctas",
              label: "CTAs",
              fields: [(0, t.translatedField)({
                name: "title",
                label: "Title",
                component: "text"
              }), {
                name: "to",
                label: "Link to",
                component: "text"
              }],
              defaultItem: () => (0, t.defaultItemUnique)(),
              itemProps: e => (0, t.itemPropsWithKey)(e, {
                label: `CTA [${e?.[t.TINA_MEMOQ_PREFIX]?.title??null}]`
              })
            }, S(), i(), {
              label: "Is this important?",
              description: "If so, this will render slightly bigger",
              name: "large",
              component: "toggle"
            }, {
              label: "Put the img on the right side?",
              name: "image_on_right",
              component: "toggle"
            }, {
              label: "Image",
              name: "image",
              component: "image",
              previewSrc: r.previewSrc,
              uploadDir: r.uploadDir
            }, (0, t.ClassNamesField)({
              filter: "grid"
            }), (0, t.StyleField)({
              filter: "grid"
            })],
            defaultItem: () => (0, t.defaultItemUnique)({
              disclaimer: (0, t.defaultItemUnique)()
            }),
            itemProps: e => (0, t.itemPropsWithKey)(e, {
              label: `${le} [${e?.[t.TINA_MEMOQ_PREFIX]?.title??null}]`
            })
          }, (0, t.ClassNamesField)({
            filter: "grid"
          }), (0, t.StyleField)({
            filter: "grid"
          })],
          defaultItem: (0, t.defaultItemUnique)(),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${te} [${e?.name??null}]`
          })
        }),
        ie = "Linkout Section",
        oe = () => ({
          label: ie,
          name: "content",
          component: "group",
          fields: [{
            label: "Link to",
            name: "to",
            component: "text"
          }, (0, t.translatedField)({
            label: "Text",
            name: "text",
            component: "text"
          }), (0, t.translatedField)({
            label: "CTA",
            name: "cta",
            description: 'Treated as button text on the right side (ex. "Learn More")',
            component: "text"
          }), (0, t.ClassNamesField)({
            filter: "linkout"
          }), (0, t.StyleField)({
            filter: "linkout"
          })],
          defaultItem: () => (0, t.defaultItemUnique)(),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `${ie} [${e?.[t.TINA_MEMOQ_PREFIX]?.cta??null}]`
          })
        }),
        re = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
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
          }, {
            value: "var(--foundry-global-spacing-gap-25)",
            label: "--foundry-global-spacing-gap-25"
          }, {
            value: "var(--foundry-global-spacing-gap-50)",
            label: "--foundry-global-spacing-gap-50"
          }, {
            value: "var(--foundry-global-spacing-gap-100)",
            label: "--foundry-global-spacing-gap-100"
          }, {
            value: "var(--foundry-global-spacing-gap-150)",
            label: "--foundry-global-spacing-gap-150"
          }, {
            value: "var(--foundry-global-spacing-gap-175)",
            label: "--foundry-global-spacing-gap-175"
          }, {
            value: "var(--foundry-global-spacing-gap-200)",
            label: "--foundry-global-spacing-gap-200"
          }, {
            value: "var(--foundry-global-spacing-gap-250)",
            label: "--foundry-global-spacing-gap-250"
          }, {
            value: "var(--foundry-global-spacing-gap-300)",
            label: "--foundry-global-spacing-gap-300"
          }, {
            value: "var(--foundry-global-spacing-gap-400)",
            label: "--foundry-global-spacing-gap-400"
          }, {
            value: "var(--foundry-global-spacing-gap-500)",
            label: "--foundry-global-spacing-gap-500"
          }, {
            value: "var(--foundry-global-spacing-gap-600)",
            label: "--foundry-global-spacing-gap-600"
          }, {
            value: "var(--foundry-global-spacing-gap-700)",
            label: "--foundry-global-spacing-gap-700"
          }, {
            value: "var(--foundry-global-spacing-gap-800)",
            label: "--foundry-global-spacing-gap-800"
          }, {
            value: "var(--foundry-global-spacing-gap-900)",
            label: "--foundry-global-spacing-gap-900"
          }, {
            value: "var(--foundry-global-spacing-gap-1000)",
            label: "--foundry-global-spacing-gap-1000"
          }, {
            value: "var(--foundry-global-spacing-gap-1100)",
            label: "--foundry-global-spacing-gap-1100"
          }, {
            value: "var(--foundry-global-spacing-gap-1200)",
            label: "--foundry-global-spacing-gap-1200"
          }, {
            value: "var(--foundry-global-spacing-gap-1400)",
            label: "--foundry-global-spacing-gap-1400"
          }, {
            value: "var(--foundry-global-spacing-gap-1600)",
            label: "--foundry-global-spacing-gap-1600"
          }]
        },
        se = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "var(--foundry-alias-color-background-bold-layer-0, #000000)",
            label: "--foundry-alias-color-background-bold-layer-0"
          }, {
            value: "var(--rockstar-gold, #fcaf17)",
            label: "--rockstar-gold"
          }]
        },
        de = e => {
          let {
            templates: a
          } = e;
          return {
            label: "Gen 9 page wrapper grid",
            component: "group",
            fields: [{
              label: "Page sections",
              name: t.TINA_PARSER_KEY,
              component: "blocks",
              templates: a
            }, {
              name: "style",
              label: "Style Overrides",
              component: "group",
              fields: [{
                label: "Grid Gap",
                name: "gridGap",
                description: "Set the grid gap",
                component: "select",
                options: re({
                  label: "-- Select Grid Gap --"
                })
              }, {
                label: "Background Color",
                name: "backgroundColor",
                description: "Set the background color",
                component: "select",
                options: se({
                  label: "-- Select Background Color --"
                })
              }]
            }, (0, t.ThemeField)()],
            defaultItem: () => (0, t.defaultItemUnique)()
          }
        }
    },
    22941: (e, a, l) => {
      "use strict";
      l.d(a, {
        A: () => c
      });
      var t = l(71403),
        n = l(72956),
        i = l.n(n),
        o = l(74401),
        r = l(42756);
      const s = {
        pillBtn: "rockstargames-sites-gta-gen9f87ac9a7d56545847cf4d8ca471b03e6",
        selected: "rockstargames-sites-gta-gen9a8ea61e57fd58bfcb99aef7e6d687045",
        grid: "rockstargames-sites-gta-gen9a57241f29873f89f89ab8b27994e71c3",
        itemList: "rockstargames-sites-gta-gen9daec3f5ce63d42cb07e3e724737c8361",
        gtaplus: "rockstargames-sites-gta-gen9bd78cfb71ed31029ba4279325166bfab",
        rdo: "rockstargames-sites-gta-gen9a6244398a800ffddab72c14f717b0eab",
        noImg: "rockstargames-sites-gta-gen9e88f741af7d5e0529ff4fb6bb82af04f",
        gtao: "rockstargames-sites-gta-gen9ab60d91453348d2e4c090ef3ebb04347",
        custom: "rockstargames-sites-gta-gen9c20e7ba6ceaba3afd37095b172797711",
        yellow: "rockstargames-sites-gta-gen9b16672deedfe102b065925cbe0fb931c",
        hotPink: "rockstargames-sites-gta-gen9d0d01601de7131d9d6d11321b4299e59",
        red: "rockstargames-sites-gta-gen9d1b5397aff94d33b57674b04a3456e03",
        turquoise: "rockstargames-sites-gta-gen9d6541b973ce158c8f2fb81483015211f",
        purple: "rockstargames-sites-gta-gen9f3e34d902681219d4d8490eb164f7727",
        teal: "rockstargames-sites-gta-gen9a6c3b6b6a2395eb18a1174294f26f4ea",
        blue: "rockstargames-sites-gta-gen9eade6e843c5afd48d3a8959fb0b88222",
        green: "rockstargames-sites-gta-gen9a82c313f8f85fc6304ddb703be2fa271",
        darkRed: "rockstargames-sites-gta-gen9d394c61fdce2bf8894ffb801ee680c2a",
        darkBlue: "rockstargames-sites-gta-gen9f1d73cc00a3ab644aab949183a8298a7",
        goldenrod: "rockstargames-sites-gta-gen9cdcb0c5076309a329da2a6e857cc3bdf",
        skull: "rockstargames-sites-gta-gen9ba4bd16bff2fbc40616457007b4a7442"
      };
      var d = l(46632);
      const {
        sanitize: m
      } = i(), c = e => {
        let {
          list: a,
          string: l,
          starColor: n,
          style: i,
          className: c,
          game: u,
          noImg: p,
          columns: b,
          mobileColumns: g
        } = e;
        const [f, v] = (0, t.useState)(null);
        return (0, t.useEffect)((() => {
          v(a)
        }), [a]), l || a ? b && f ? (0, d.jsx)("div", {
          className: s.grid,
          style: {
            "--ordered-list-grid-column": b,
            "--ordered-list-grid-column-mobile": g ?? b
          },
          children: (0, d.jsx)("ol", {
            style: (0, r.safeStyles)(i),
            className: (0, o.classList)(s.itemList, s.noImg, s[n], s[u]),
            children: f.map((e => (0, d.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e.content)
              }
            }, e.content)))
          })
        }) : (0, d.jsx)("ol", {
          style: (0, r.safeStyles)(i),
          className: (0, o.classList)(s.itemList, s.custom, p ? s.noImg : "", n ? s[n] : "", u ? s[u] : "", c ?? ""),
          children: a.map((e => (0, d.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: m(e?.content ?? e)
            }
          }, e?.content)))
        }) : null
      }
    },
    63672: (e, a, l) => {
      "use strict";
      l.d(a, {
        A: () => c
      });
      var t = l(71403),
        n = l(72956),
        i = l.n(n),
        o = l(74401),
        r = l(42756);
      const s = {
        pillBtn: "rockstargames-sites-gta-gen9a89792e50dfe5470a67f42b9e143c824",
        selected: "rockstargames-sites-gta-gen9bcce8ac50552b225f30d185d876a3e14",
        grid: "rockstargames-sites-gta-gen9ac295ed5b9cb441ed17843b34e83ea17",
        itemList: "rockstargames-sites-gta-gen9caf5589ddeca00ed09213e547674b1f3",
        gtaplus: "rockstargames-sites-gta-gen9b291112adcf994a0f6acadd86f73b78a",
        rdo: "rockstargames-sites-gta-gen9d146e8f862baefb60e91be5aa3c17b6e",
        noImg: "rockstargames-sites-gta-gen9ba9b5ae08642b0213a3f04b3db9a9dac",
        gtao: "rockstargames-sites-gta-gen9b6f2bdfd6a1d57b7ce840f7a56cc510b",
        custom: "rockstargames-sites-gta-gen9af89164a043648d1464686ff13363ee4",
        yellow: "rockstargames-sites-gta-gen9d244b17b74fc46269e8a106a99ab0f87",
        hotPink: "rockstargames-sites-gta-gen9d90b28503318563cfd6059146d1fb6b6",
        red: "rockstargames-sites-gta-gen9c3f8a8706901874d906f94c626be3c1e",
        turquoise: "rockstargames-sites-gta-gen9fe2ec36e92e2bb4d453fdc4b05966418",
        purple: "rockstargames-sites-gta-gen9f5f7baf5b56f5b2ada053a93392bbf7a",
        teal: "rockstargames-sites-gta-gen9f4a229f41cd20f181d810c311416e3f2",
        blue: "rockstargames-sites-gta-gen9f6f689d687bcd482ea2cd2990fd66878",
        green: "rockstargames-sites-gta-gen9ab270f1b4d3ad43e7bc51393b7c5c089",
        darkRed: "rockstargames-sites-gta-gen9dc24ce78d962f3472b06955bf8855103",
        darkBlue: "rockstargames-sites-gta-gen9b354493baac7389b21b511009f287428",
        goldenrod: "rockstargames-sites-gta-gen9e4a078efee11d24c64e93ccf0744a33f",
        skull: "rockstargames-sites-gta-gen9d4581a495de14e6762bb15debe5bb810"
      };
      var d = l(46632);
      const {
        sanitize: m
      } = i(), c = e => {
        let {
          list: a,
          string: l,
          starColor: n,
          style: i,
          className: c,
          game: u,
          noImg: p,
          columns: b,
          mobileColumns: g
        } = e;
        const [f, v] = (0, t.useState)(null), k = l ? l.split("_#_") : a;
        return (0, t.useEffect)((() => {
          v(a)
        }), [a]), l || a ? b && f ? (0, d.jsx)("div", {
          className: s.grid,
          style: {
            "--unordered-list-grid-column": b,
            "--unordered-list-grid-column-mobile": g ?? b
          },
          children: (0, d.jsx)("ul", {
            style: (0, r.safeStyles)(i),
            className: (0, o.classList)(s.itemList, s.noImg, s[n], s[u]),
            children: f.map(((e, a) => (0, d.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: m(e.content)
              }
            }, a)))
          })
        }) : (0, d.jsx)("ul", {
          style: (0, r.safeStyles)(i),
          className: (0, o.classList)(s.itemList, s.custom, p ? s.noImg : "", n ? s[n] : "", u ? s[u] : "", c ?? ""),
          children: k.map(((e, a) => (0, d.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: m(e?.content ?? e)
            }
          }, a)))
        }) : null
      }
    },
    88996: (e, a, l) => {
      "use strict";
      l.r(a), l.d(a, {
        default: () => r
      });
      var t = l(55140),
        n = l(28089);
      const i = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "image",
            label: "Image"
          }, {
            value: "video",
            label: "Video"
          }]
        },
        o = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "vinewood-club",
            label: "Vinewood Club"
          }]
        },
        r = () => ({
          label: "Hero Video",
          name: "content",
          component: "group",
          fields: [(0, t.NameField)(), {
            label: "Variant",
            name: "variant",
            description: "Set the variant for the Hero",
            component: "select",
            options: i({
              label: "-- Select Variant --"
            })
          }, {
            label: "Video",
            name: "videoSrc",
            description: "Select video for the Hero",
            component: "select",
            options: o({
              label: "-- Select A Video --"
            })
          }, {
            name: "fallbackImg",
            label: "Fallback Image",
            component: "image",
            clearable: !0,
            previewSrc: n.previewSrc,
            parse: n.parse,
            uploadDir: n.uploadDir
          }, (0, t.translatedField)({
            label: "Fallback Image Alt Tag",
            name: "fallbackImgAlt",
            component: "text"
          }), {
            name: "contentImgSrc",
            label: "Content Image",
            component: "image",
            clearable: !0,
            previewSrc: n.previewSrc,
            parse: n.parse,
            uploadDir: n.uploadDir
          }, (0, t.translatedField)({
            label: "Content Image Alt Tag",
            name: "contentImgAlt",
            component: "text"
          }), (0, t.translatedField)({
            label: "Heading",
            name: "heading",
            component: "text"
          }), (0, t.translatedField)({
            label: "SubHeading",
            name: "subheading",
            component: "text"
          }), (0, t.translatedField)({
            label: "CTA text",
            name: "ctaText",
            description: 'Treated as button text (eg. "View More")',
            component: "text"
          }), {
            label: "CTA link",
            name: "ctaLink",
            component: "text"
          }, (0, t.ClassNamesField)({
            filter: "heroVideo"
          }), (0, t.StyleField)({
            filter: "heroVideo"
          })],
          defaultItem: () => (0, t.defaultItemUnique)(),
          itemProps: e => (0, t.itemPropsWithKey)(e, {
            label: `[Hero Video]: ${e?.[t.TINA_MEMOQ_PREFIX]?.name??e?.name??"New"}`
          })
        })
    },
    50048: e => {
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
                            value: "id"
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
                          }]
                        }, {
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
          end: 1002
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
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                id @include(if: $sync)\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
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