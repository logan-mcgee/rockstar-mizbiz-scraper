! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a48d6834-c9ff-4bd8-97f7-b805e59994e8", e._sentryDebugIdIdentifier = "sentry-dbid-a48d6834-c9ff-4bd8-97f7-b805e59994e8")
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
  [1749, 1029, 3410], {
    29040: e => {
      function a(e, a) {
        return Object.keys(a).forEach((function(t) {
          "default" === t || "__esModule" === t || e.hasOwnProperty(t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
              return a[t]
            }
          })
        })), e
      }

      function t(e, a, t, l) {
        Object.defineProperty(e, a, {
          get: t,
          set: l,
          enumerable: !0,
          configurable: !0
        })
      }
      var l = {};
      t(l, "ONETRUST_LOADED_EVENT", (() => o)), t(l, "WRAPPER_CALLED_EVENT", (() => i)), t(l, "CONSENT_CHANGED_EVENT", (() => r)), t(l, "init", (() => c));
      const n = window.document.currentScript?.nonce,
        o = "ONETRUST_LOADED_EVENT",
        i = "WRAPPER_CALLED_EVENT",
        r = "CONSENT_CHANGED_EVENT";
      let s = !0;

      function c(e) {
        const a = window.document.head,
          t = window.document.createElement("script");
        if (t.setAttribute("id", "onetrust-sdk-stub"), t.setAttribute("src", "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"), t.setAttribute("type", "text/javascript"), t.setAttribute("charset", "UTF-8"), t.setAttribute("data-document-language", "true"), n && (t.nonce = n), !e) throw new Error("You must specify the OneTrust script ID");
        t.setAttribute("data-domain-script", e), a.insertBefore(t, a.firstChild), window.OptanonWrapper = function() {
          s && (s = !1, window.dispatchEvent(new CustomEvent(o, {
            bubbles: !0
          }))), window.dispatchEvent(new CustomEvent(i, {
            bubbles: !0
          })), window.OneTrust.OnConsentChanged((() => {
            window.dispatchEvent(new CustomEvent(r, {
              bubbles: !0
            }))
          }))
        }
      }
      var d = {};
      t(d, "NoChoiceTransactionType", (() => m)), t(d, "ConfirmedTransactionType", (() => p)), t(d, "canStoreCookie", (() => b));
      const m = "NO_CHOICE",
        p = "CONFIRMED",
        u = {
          AlwaysActive: "always active"
        };

      function b(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        if (!window.OneTrust) return !1;
        const t = window.OneTrust.GetDomainData(),
          l = t.Groups.find((a => a.Cookies.some((a => a.Name === e))));
        if (!l) {
          const t = `Unable to find ${e} in any OneTrust category. Therefore, we won't store the cookie`;
          return a && a.log(t), !1
        }
        if (l.Status === u.AlwaysActive) return !0;
        const n = t.ConsentIntegrationData.consentPayload.purposes.find((e => e.Id === l.PurposeId));
        return n?.TransactionType === p
      }
      a(e.exports, l), a(e.exports, d)
    },
    65039: (e, a, t) => {
      "use strict";
      var l = t(62229),
        n = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        r = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, a, t) {
        var l, o = {},
          c = null,
          d = null;
        for (l in void 0 !== t && (c = "" + t), void 0 !== a.key && (c = "" + a.key), void 0 !== a.ref && (d = a.ref), a) i.call(a, l) && !s.hasOwnProperty(l) && (o[l] = a[l]);
        if (e && e.defaultProps)
          for (l in a = e.defaultProps) void 0 === o[l] && (o[l] = a[l]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: d,
          props: o,
          _owner: r.current
        }
      }
      a.Fragment = o, a.jsx = c, a.jsxs = c
    },
    91029: (e, a, t) => {
      "use strict";
      e.exports = t(65039)
    },
    23031: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var l = t(14763),
        n = t(26432);
      const o = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          parent: "",
          post: null
        };
        return {
          name: "listItem",
          label: "List Item",
          component: "group",
          fields: [(0, l.om)(e), (0, l.z9)({
            name: "content",
            label: "Content",
            component: "text",
            initialValues: ""
          }), (0, l.sE)(e)],
          defaultItem: () => (0, l.Q)({
            content: ""
          }),
          itemProps: e => (0, l.Rv)(e, {
            label: (0, n._e)(`${e?.name??e?.[l.Qw]?.content??"New"} [List Item]`)
          })
        }
      }
    },
    91749: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        BrandMessage: () => i,
        BrandsField: () => o,
        BuyNow: () => c,
        ClaimCountdown: () => d,
        CommunityChallenges: () => k,
        Disclaimer: () => S,
        DiscoverCallout: () => x,
        ElevatorPitch: () => P,
        FAQ: () => w,
        Guide: () => I,
        GuideGroup: () => N,
        GuideIntro: () => C,
        GuideSection: () => D,
        Hero: () => E,
        HeroVideo: () => G.default,
        ImageTextGroupGroup: () => ne,
        LinkoutSection: () => ie,
        StickyColumn: () => M,
        Summary: () => Y,
        SummaryCard: () => U,
        Tile: () => ee,
        TinaWrapper: () => ce,
        TitleImage: () => R,
        ValueProp: () => ae,
        brandField: () => n
      });
      var l = t(14763);
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
        o = () => ({
          name: "brands",
          label: "Brands",
          component: "group-list",
          description: "Show brand icons in a row",
          fields: [n],
          itemProps: e => (0, l.Rv)(e, {
            label: `Brand [${e?.brand??null}]`
          })
        }),
        i = () => ({
          label: "Brand Message",
          description: "Brand logo, then some text.",
          component: "group",
          fields: [n, (0, l.z9)({
            name: "headline_left",
            label: "Headline left",
            component: "text"
          }), (0, l.z9)({
            name: "headline_right",
            label: "Headline right",
            component: "text"
          }), {
            name: "info",
            label: "Info",
            component: "textarea"
          }],
          defaultItem: () => (0, l.Q)()
        });
      var r = t(8458);
      const s = e => {
          let {
            label: a,
            name: t
          } = e;
          return {
            component: "group",
            label: a,
            name: t,
            fields: [{
              name: "mobile",
              label: "Mobile",
              component: "image",
              previewSrc: r.z0,
              uploadDir: r.XC
            }, {
              name: "desktop",
              label: "Desktop",
              component: "image",
              previewSrc: r.z0,
              uploadDir: r.XC
            }]
          }
        },
        c = () => ({
          label: "Buy Now component",
          component: "group",
          fields: [(0, l.z9)({
            name: "topText",
            label: "Top Text",
            component: "text"
          }), (0, l.z9)({
            name: "bottomText",
            label: "Bottom Text",
            component: "text"
          }), {
            component: "group-list",
            name: "cards",
            label: "Cards",
            fields: [(0, l.z9)({
              name: "title",
              label: "Title",
              component: "text"
            }), (0, l.z9)({
              name: "description",
              label: "Description",
              component: "text"
            }), (0, l.z9)({
              name: "addedInfo",
              label: "Additional Information",
              component: "text"
            }), (0, l.z9)({
              name: "buynowbtn",
              label: "Buy Now",
              component: "text"
            }), {
              component: "group-list",
              name: "links",
              label: "Links",
              fields: [(0, l.z9)({
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
              }, (0, l.z9)({
                name: "altText",
                label: "Alt Text (Required, needed for Alt Text on image platform buttons)",
                component: "text"
              })],
              itemProps: e => (0, l.Rv)(e, {
                label: `Link for [${e?.platform??""}]`,
                href: e?.href
              }),
              defaultItem: () => (0, l.Q)({
                href: (0, l.Q)(),
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
            itemProps: e => (0, l.Rv)(e, {
              label: `Card [${e?.[l.Qw]?.title??""}]`
            }),
            defaultItem: () => (0, l.Q)()
          }],
          defaultItem: () => (0, l.Q)()
        }),
        d = () => ({
          label: "Claim Countdown",
          description: "Claim rewards until...",
          component: "group",
          fields: [(0, l.z9)({
            name: "left",
            label: "Left",
            component: "text"
          }), (0, l.z9)({
            name: "right",
            label: "Right",
            component: "text"
          })],
          defaultItem: () => (0, l.Q)()
        }),
        m = e => {
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
        p = e => {
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
        u = e => {
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
            previewSrc: r.z0,
            parse: r.qg,
            uploadDir: r.XC
          }, {
            name: "desktop",
            label: "Desktop",
            component: "image",
            clearable: !0,
            previewSrc: r.z0,
            parse: r.qg,
            uploadDir: r.XC
          }, (0, l.z9)({
            label: "Alt Text",
            name: "altText",
            component: "text"
          })],
          defaultItem: () => (0, l.Q)({
            altText: (0, l.Q)()
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
            previewSrc: r.z0,
            parse: r.qg,
            uploadDir: r.XC
          }, {
            name: "desktop",
            label: "Desktop",
            component: "image",
            clearable: !0,
            previewSrc: r.z0,
            parse: r.qg,
            uploadDir: r.XC
          }, (0, l.z9)({
            label: "Alt Text",
            name: "altText",
            component: "text"
          })],
          defaultItem: () => (0, l.Q)({
            altText: (0, l.Q)()
          })
        }),
        k = () => ({
          label: "GTAO Community Challenge",
          name: "content",
          component: "group",
          fields: [(0, l.om)(), {
            label: "Banner",
            name: "banner",
            component: "group",
            fields: [(0, l.om)(), (0, l.CT)({
              label: "logo"
            }), {
              label: "Logo Horizontal Alignment",
              name: "logoHorizontalPosition",
              description: "Set the position for the Logo",
              component: "select",
              options: m({
                label: "-- Select Position --"
              })
            }, {
              label: "Logo Vertical Alignment",
              name: "logoVerticalPosition",
              description: "Set the vertical alignment position for the Logo",
              component: "select",
              options: p({
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
                previewSrc: r.z0,
                parse: r.qg,
                uploadDir: r.XC
              }, {
                name: "desktop",
                label: "Desktop",
                component: "image",
                clearable: !0,
                previewSrc: r.z0,
                parse: r.qg,
                uploadDir: r.XC
              }, (0, l.z9)({
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
            }, (0, l.bY)({
              filter: "banner"
            }), (0, l.sE)({
              filter: "banner"
            })],
            defaultItem: () => (0, l.Q)(),
            itemProps: e => (0, l.Rv)(e, {
              label: `${e?.[l.Qw]?.title??"New"} [Banner]`
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
                  options: u({
                    label: "-- Select Orientation --"
                  })
                }]
              }]
            }],
            defaultItem: () => (0, l.Q)({
              timer: (0, l.Q)()
            }),
            itemProps: e => (0, l.Rv)(e, {
              label: `${e?.[l.Qw]?.title??"New"} [CountDown]`
            })
          }, {
            label: "Rewards",
            name: "rewards",
            component: "group",
            fields: [{
              name: "detail",
              label: "Rewards Detail",
              component: "group",
              fields: [(0, l.z9)({
                label: "Title Heading",
                name: "heading",
                component: "text"
              }), (0, l.z9)({
                label: "Description",
                name: "description",
                component: "textarea"
              }), (0, l.z9)({
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
              fields: [(0, l.z9)({
                label: "Title Heading",
                name: "heading",
                component: "text"
              }), {
                name: "cards",
                label: "Cards",
                component: "group-list",
                fields: [(0, l.z9)({
                  label: "Title",
                  name: "title",
                  component: "text"
                }), (0, l.z9)({
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
                    previewSrc: r.z0,
                    parse: r.qg,
                    uploadDir: r.XC
                  }, {
                    name: "desktop",
                    label: "Desktop",
                    component: "image",
                    clearable: !0,
                    previewSrc: r.z0,
                    parse: r.qg,
                    uploadDir: r.XC
                  }, (0, l.z9)({
                    label: "Alt Text",
                    name: "altText",
                    component: "text"
                  })]
                }, (0, l.bY)({
                  filter: "rewardsCard"
                }), (0, l.sE)({
                  filter: "rewardsCard"
                })],
                defaultItem: () => (0, l.Q)(),
                itemProps: e => (0, l.Rv)(e, {
                  label: `${e?.[l.Qw]?.title??"New"} [Rewards Card]`
                })
              }]
            }],
            defaultItem: () => (0, l.Q)({
              deck: (0, l.Q)({
                cards: (0, l.Q)()
              }),
              detail: (0, l.Q)()
            }),
            itemProps: e => (0, l.Rv)(e, {
              label: `${e?.[l.Qw]?.title??"New"} [Rewards]`
            })
          }, {
            label: "Milestone Indicator",
            name: "milestoneIndicator",
            component: "group",
            fields: [(0, l.om)(), (0, l.z9)({
              label: "Milestone Indicator Heading",
              name: "heading",
              description: "Enter the heading for the milestone indicator",
              component: "text"
            }), (0, l.z9)({
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
              previewSrc: r.z0,
              parse: r.qg,
              uploadDir: r.XC
            }, {
              name: "incompleteMilestoneImage",
              label: "Incomplete image",
              component: "image",
              clearable: !0,
              previewSrc: r.z0,
              parse: r.qg,
              uploadDir: r.XC
            }, {
              label: "Milestone Block Limit",
              name: "limit",
              description: "Set the limit for the number of milestones that can be added.",
              component: "text"
            }, {
              label: "Milestones",
              name: "milestones",
              component: "group-list",
              fields: [(0, l.z9)({
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
              }, (0, l.bY)({
                filter: "milestone"
              }), (0, l.sE)({
                filter: "milestone"
              })],
              defaultItem: () => (0, l.Q)(),
              itemProps: e => (0, l.Rv)(e, {
                label: `${e?.[l.Qw]?.title??"New"} [Milestone]`
              })
            }, (0, l.bY)({
              filter: "milestoneIndicator"
            }), (0, l.sE)({
              filter: "milestoneIndicator"
            })],
            defaultItem: () => (0, l.Q)(),
            itemProps: e => (0, l.Rv)(e, {
              label: `${e?.[l.Qw]?.title??"New"} [MilestoneIndicator]`
            })
          }, (0, l.pr)(), (0, l.f6)()],
          defaultItem: () => (0, l.Q)({
            banner: (0, l.Q)(),
            countdown: (0, l.Q)(),
            rewards: (0, l.Q)({
              detail: (0, l.Q)(),
              deck: (0, l.Q)()
            }),
            milestoneIndicator: (0, l.Q)()
          }),
          itemProps: e => (0, l.Rv)(e, {
            label: `${e?.[l.Qw]?.title??"NEW"} [GTAO Community Challenge]`
          })
        }),
        h = "Discover Callout Section",
        y = e => {
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
        x = () => ({
          label: h,
          name: "content",
          component: "group",
          fields: [{
            label: "Link to",
            name: "to",
            component: "text"
          }, (0, l.z9)({
            label: "Heading",
            name: "heading",
            component: "text"
          }), (0, l.z9)({
            label: "Description",
            name: "description",
            component: "text"
          }), (0, l.z9)({
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
              }, (0, l.CT)({})],
              defaultItem: () => (0, l.Q)(),
              itemProps: e => (0, l.Rv)(e, {
                label: `${e?.[l.Qw]?.name??e?.name??"New"} [Image]`
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
                options: y("-- Select Grid Gap --")
              }]
            }],
            defaultItem: () => (0, l.Q)()
          }, (0, l.bY)({
            filter: "discoverCallout"
          }), (0, l.sE)({
            filter: "discoverCallout"
          })],
          defaultItem: () => (0, l.Q)(),
          itemProps: e => (0, l.Rv)(e, {
            label: `${e?.[l.Qw]?.title??e?.title??`${h}`}`
          })
        }),
        S = () => ({
          name: "disclaimer",
          label: "Disclaimer",
          description: "To add a box of small text somewhere",
          component: "group",
          fields: [(0, l.z9)({
            name: "title",
            label: "Disclaimer Title",
            component: "text"
          }), (0, l.z9)({
            name: "text",
            label: "Disclaimer Text",
            component: "text"
          }), (0, l.bY)({
            filter: "disclaimer"
          }), (0, l.sE)({
            filter: "disclaimer"
          })],
          defaultItem: () => (0, l.Q)(),
          itemProps: e => (0, l.Rv)(e, {
            label: `Disclaimer [${e?.[l.Qw]?.text??null}]`
          })
        }),
        w = () => ({
          label: "FAQ",
          description: "Edit FAQ",
          component: "group",
          fields: [(0, l.z9)({
            name: "disclaimer",
            label: "Disclaimer",
            component: "html"
          }), (0, l.z9)({
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
            fields: [(0, l.z9)({
              name: "question",
              label: "Question",
              component: "text"
            }), (0, l.z9)({
              name: "answer",
              label: "Answer",
              component: "html"
            })],
            itemProps: e => (0, l.Rv)(e, {
              label: `Question [${e?.[l.Qw]?.question??""}]`
            }),
            defaultItem: () => (0, l.Q)()
          }],
          defaultItem: () => (0, l.Q)({
            faqs: (0, l.Q)()
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
        I = e => {
          let {
            templates: a
          } = e;
          return {
            label: "Guide",
            description: "Edit this guide",
            component: "group",
            fields: [{
              label: "Guide sections",
              name: l.ZH,
              component: "blocks",
              templates: a
            }, {
              name: "images",
              component: "group",
              label: "Images for this guide.",
              fields: [(0, l.xc)({
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
            defaultItem: () => (0, l.Q)()
          }
        },
        C = () => ({
          label: "Guide Intro",
          name: "content",
          component: "group",
          fields: [(0, l.z9)({
            name: "title",
            component: "text",
            label: "Title"
          }), (0, l.z9)({
            name: "blurb",
            component: "html",
            label: "Blurb"
          }), (0, l.xc)({
            name: "hero",
            label: "Hero Image"
          })],
          defaultItem: (0, l.Q)()
        }),
        N = () => ({
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
            itemProps: e => (0, l.Rv)(e, {
              label: `Guide: [${e?.guide_id??"New"}]`
            })
          }],
          defaultItem: () => (0, l.Q)()
        }),
        D = e => {
          let {
            templates: a
          } = e;
          return {
            component: "group",
            name: "content",
            label: "Guide Section Content",
            fields: [(0, l.z9)({
              name: "title",
              label: "Title",
              description: "This will show up only in the guide sub nav",
              component: "text"
            }), {
              name: "content",
              component: "blocks",
              label: "This section's content",
              templates: a
            }, (0, l.sE)({
              filter: "grid"
            })],
            defaultItem: () => (0, l.Q)(),
            itemProps: e => (0, l.Rv)(e, {
              label: `Guide Section Content: [${e?.[l.Qw]?.title??"New"}]`
            })
          }
        },
        A = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            component: "group-list",
            name: "ctas",
            label: "CTAs",
            description: "Show a group of CTAs",
            fields: [(0, l.z9)({
              name: "title",
              label: "Title",
              component: "text"
            }), (0, l.z9)({
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
            }, (0, l.f6)()],
            ...e,
            defaultItem: () => (0, l.Q)(),
            itemProps: e => (0, l.Rv)(e, {
              label: `CTA [${e?.[l.Qw]?.title??null}]`
            })
          }
        },
        z = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "background";
          const a = [{
            name: "mobile",
            label: "Mobile",
            component: "image",
            description: "(If responsive, only Mobile Source is needed)",
            previewSrc: r.z0,
            uploadDir: r.XC
          }, {
            name: "desktop",
            label: "Desktop",
            component: "image",
            previewSrc: r.z0,
            uploadDir: r.XC
          }];
          return "background" === e && a.push((0, l.sE)({
            filter: "image"
          })), {
            component: "group",
            name: `${e}Img`,
            label: `${e} Images`,
            fields: a
          }
        },
        E = () => ({
          label: "Gen 9 Hero [DEPRECATED - Update Only]",
          component: "group",
          fields: [o(), (0, l.z9)({
            name: "title",
            label: "Title",
            component: "text"
          }), (0, l.z9)({
            name: "description",
            label: "Description",
            component: "text"
          }), A({
            description: "Show a group of CTA buttons (for CTA display ONLY)"
          }), (0, l.z9)({
            name: "expandingButtonLabel",
            label: "Expanding Button Label",
            description: "Default: Subscribe",
            component: "text"
          }), (0, l.Vz)({
            description: "Game Platforms/Links (for expanding button display ONLY)"
          }), (0, l.z9)({
            name: "legalText",
            label: "Legal Text",
            component: "text",
            description: "Display smaller legal text underneath the CTA buttons."
          }), z(), z("layered"), {
            name: "shardsSection",
            label: "Shards Configuration",
            description: "Add a carousel of shard-style images with text to the bottom of the hero.",
            component: "group",
            fields: [(0, l.z9)({
              name: "title",
              label: "Title",
              component: "text",
              description: "Title to be displayed on top of the shards carousel."
            }), {
              name: "shards",
              label: "Shards",
              component: "group-list",
              fields: [(0, l.z9)({
                name: "title",
                label: "Title",
                component: "text",
                description: "Text to be overlayed on top of the image."
              }), z("shard")],
              defaultItem: () => (0, l.Q)(),
              itemProps: e => (0, l.Rv)(e, {
                label: `${e?.[l.Qw]?.title??"New"} [Shard]`
              })
            }],
            defaultItem: (0, l.Q)({
              shards: (0, l.Q)()
            })
          }, (0, l.bY)({
            filter: "hero"
          })],
          defaultItem: () => (0, l.Q)({
            shardsSection: (0, l.Q)()
          }),
          itemProps: e => (0, l.Rv)(e, {
            label: `Hero [${e?.[l.Qw]?.title??null}]`
          })
        }),
        P = e => {
          let {
            templates: a
          } = e;
          return {
            label: "Elevator Pitch",
            name: "content",
            component: "group",
            fields: [(0, l.z9)({
              label: "Title",
              name: "title",
              component: "text"
            }), (0, l.z9)({
              label: "Description",
              name: "description",
              component: "text"
            }), (0, l.z9)({
              label: "Disclaimer",
              name: "disclaimer",
              component: "text"
            }), {
              label: "CTA",
              name: "cta",
              description: "Add a cta button",
              component: "blocks",
              templates: a
            }, (0, l.Vz)({
              description: "Game Platforms/Links (for expanding button display ONLY)"
            }), (0, l.bY)({
              filter: "elevatorPitch"
            }), (0, l.sE)({
              filter: "elevatorPitch"
            })],
            defaultItem: () => (0, l.Q)(),
            itemProps: e => (0, l.Rv)(e, {
              label: `[Elevator Pitch]: ${e?.[l.Qw]?.title??e?.title??"New"}`
            })
          }
        };
      var G = t(16771);
      const L = "Title Image",
        Q = e => {
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
        R = e => {
          let {
            templates: a
          } = e;
          return {
            label: L,
            name: "content",
            component: "group",
            fields: [(0, l.z9)({
              label: "Title Text Mask",
              name: "title",
              component: "text"
            }), (0, l.z9)({
              label: "Image Title",
              name: "imgTitle",
              component: "html"
            }), (0, l.z9)({
              label: "Description",
              name: "description",
              component: "text"
            }), {
              name: "imageSrc",
              label: "Title Mask Image",
              component: "image",
              clearable: !0,
              previewSrc: r.z0,
              parse: r.qg,
              uploadDir: r.XC
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
                options: Q({
                  label: "-- Select Grid Gap --"
                })
              }]
            }, (0, l.bY)({
              filter: "maskText"
            }), (0, l.sE)({
              filter: "grid"
            })],
            defaultItem: () => (0, l.Q)({}),
            itemProps: e => (0, l.Rv)(e, {
              label: `${e?.[l.Qw]?.title??e?.title??`${L}`}`
            })
          }
        },
        _ = e => {
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
        M = e => {
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
            }, (0, l.KO)(), {
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
                options: _({
                  label: "-- Select Grid Gap --"
                })
              }]
            }, (0, l.bY)({
              filter: "stickyColumn"
            }), (0, l.sE)({
              filter: "grid"
            })],
            defaultItem: () => (0, l.Q)({}),
            itemProps: e => (0, l.Rv)(e, {
              label: `[Sticky Column]: ${e?.[l.Qw]?.title??e?.title??"New"}`
            })
          }
        },
        B = {
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
          rdr1: "Red Dead Redemption",
          rdr1rsp: "Red Dead Redemption (Rockstar Presents Ver)",
          rdrevolver: "Red Dead Revolver",
          rdrun: "Red Dead Redemption Undead Nightmare",
          sr1: "Smuggler's Run",
          sr2: "Smuggler's Run 2",
          srwz: "Smuggler's Run Warzones",
          tabletennis: "Table Tennis ",
          warriors: "Warriors",
          lossantoscustoms: "Los Santos Customs"
        };
      Object.keys(B).map((e => ({
        value: e,
        label: B[e]
      })));
      var O = t(91029);
      const $ = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, O.jsx)("hr", {})
          }
        },
        V = function() {
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
      $("Grid"),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label").toLowerCase().split(" ").join("_")
        }("Grid"), V("style.--grid-num-columns-mobile", "Grid Number of Columns (Mobile)"), V("style.--grid-num-columns-desktop", "Grid Number of Columns (Desktop)"), $("Grid");
      var F = t(23031);
      t(87950), t(95966), t(84343), t(84392);
      var q = t(24069);
      const X = e => {
          let {
            game: a = null,
            parent: t = null
          } = e;
          const n = [(0, l.om)()];
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
          }), n.push((0, l.z9)({
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
            templates: [(0, F.A)({})]
          }, (0, l.sE)({
            parent: t
          })), {
            name: "unorderedList",
            label: "Unordered List",
            component: "group",
            fields: n,
            defaultItem: () => (0, l.Q)({
              content: q.A,
              columns: 1,
              mobileColumns: 1,
              starColor: "noImg",
              listItems: []
            }),
            itemProps: e => (0, l.Rv)(e, {
              label: e?.name ? `${e.name} [Unordered List]` : "New [Unordered List]"
            })
          }
        },
        H = "Summary",
        j = e => {
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
        Y = () => ({
          label: H,
          name: "content",
          component: "group",
          fields: [(0, l.z9)({
            label: "Title",
            name: "title",
            component: "text"
          }), (0, l.z9)({
            label: "Text",
            name: "text",
            component: "text"
          }), {
            name: "benefits",
            label: "Benifits",
            component: "blocks",
            templates: [X({
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
              options: j({
                label: "-- Select Grid Gap --"
              })
            }]
          }, (0, l.bY)({
            filter: "summary"
          }), (0, l.sE)({
            filter: "summary"
          })],
          defaultItem: () => (0, l.Q)(),
          itemProps: e => (0, l.Rv)(e, {
            label: `${e?.[l.Qw]?.title??e?.title??`${H}`}`
          })
        }),
        U = e => {
          let {
            templates: a
          } = e;
          return {
            label: "SummaryCard",
            name: "content",
            component: "group",
            fields: [(0, l.z9)({
              label: "Title",
              name: "title",
              component: "text"
            }), (0, l.z9)({
              label: "Description",
              name: "description",
              component: "text"
            }), (0, l.Vz)({
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
                previewSrc: r.z0,
                parse: r.qg,
                uploadDir: r.XC
              }, {
                name: "desktop",
                label: "Desktop",
                component: "image",
                clearable: !0,
                previewSrc: r.z0,
                parse: r.qg,
                uploadDir: r.XC
              }]
            }, (0, l.bY)({
              filter: "summaryCard"
            }), (0, l.sE)({
              filter: "summaryCard"
            })],
            defaultItem: () => (0, l.Q)(),
            itemProps: e => (0, l.Rv)(e, {
              label: `${e?.[l.Qw]?.title??"New"} [Summary Card]`
            })
          }
        },
        W = e => {
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
        J = e => {
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
        K = e => {
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
            fields: [(0, l.om)(), (0, l.z9)({
              label: "Title",
              name: "title",
              component: "text"
            }), {
              label: "Tile Card Size",
              name: "cardSize",
              description: "Set the size for the Tile Card",
              component: "select",
              options: K({
                label: "-- Select Size --"
              })
            }, {
              label: "Do you want to enable a Full-Bleed image?",
              name: "enableFullBleed",
              component: "toggle"
            }, (0, l.z9)({
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
                previewSrc: r.z0,
                parse: r.qg,
                uploadDir: r.XC
              }, {
                name: "desktop",
                label: "Desktop",
                component: "image",
                clearable: !0,
                previewSrc: r.z0,
                parse: r.qg,
                uploadDir: r.XC
              }, (0, l.z9)({
                label: "Image Alt Tag",
                name: "imgAlt",
                component: "text"
              })]
            }, {
              label: "Image Position",
              name: "imgPosition",
              description: "Set the position for the Tile Image",
              component: "select",
              options: J({
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
              previewSrc: r.z0,
              parse: r.qg,
              uploadDir: r.XC
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
                options: W({
                  label: "-- Select Grid Gap --"
                })
              }]
            }, (0, l.bY)({
              filter: "tile"
            }), (0, l.sE)({
              filter: "tile"
            })],
            defaultItem: () => (0, l.Q)(),
            itemProps: e => (0, l.Rv)(e, {
              label: `[Tile Item]: ${e?.[l.Qw]?.name??e?.name??"New"}`
            })
          }
        },
        ae = () => ({
          label: "Value Prop Tile",
          name: "content",
          component: "group",
          fields: [(0, l.om)(), {
            label: "Value Props",
            name: "valueProps",
            component: "group-list",
            fields: [(0, l.z9)({
              label: "Title",
              name: "title",
              component: "text"
            }), {
              name: "iconImgSrc",
              label: "Upload Image Icon",
              component: "image",
              clearable: !0,
              previewSrc: r.z0,
              parse: r.qg,
              uploadDir: r.XC
            }, (0, l.z9)({
              label: "Icon Image Alt Tag",
              name: "iconAlt",
              component: "text"
            }), {
              label: "Jump To Section ID",
              name: "jumpToSectionId",
              description: "To have this value prop scroll to a section on click, enter that sections ID here.",
              component: "text"
            }],
            defaultItem: () => (0, l.Q)({}),
            itemProps: e => (0, l.Rv)(e, {
              label: `[Value Prop Item]: ${e?.[l.Qw]?.title??"New"}`
            })
          }, {
            label: "Enable hover animation?",
            name: "enableAnimation",
            component: "toggle"
          }, (0, l.bY)({
            filter: "maskText"
          }), (0, l.sE)({
            filter: "grid"
          })],
          defaultItem: () => (0, l.Q)({}),
          itemProps: e => (0, l.Rv)(e, {
            label: `[Value Prop]: ${e?.[l.Qw]?.name??e?.name??"New"}`
          })
        }),
        te = "Image w/text",
        le = "Group of Image/Text Groups (gen9)",
        ne = () => ({
          label: le,
          name: "content",
          component: "group",
          fields: [(0, l.om)(), {
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
                previewSrc: r.z0,
                uploadDir: r.XC
              }, {
                name: "mobile",
                label: "Mobile",
                component: "image",
                previewSrc: r.z0,
                uploadDir: r.XC
              }]
            }]
          }, {
            label: te,
            name: "image_text_groups",
            component: "group-list",
            fields: [(0, l.z9)({
              label: "Title",
              name: "title",
              component: "text"
            }), (0, l.A_)(), {
              component: "group-list",
              name: "ctas",
              label: "CTAs",
              fields: [(0, l.z9)({
                name: "title",
                label: "Title",
                component: "text"
              }), {
                name: "to",
                label: "Link to",
                component: "text"
              }],
              defaultItem: () => (0, l.Q)(),
              itemProps: e => (0, l.Rv)(e, {
                label: `CTA [${e?.[l.Qw]?.title??null}]`
              })
            }, S(), o(), {
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
              previewSrc: r.z0,
              uploadDir: r.XC
            }, (0, l.bY)({
              filter: "grid"
            }), (0, l.sE)({
              filter: "grid"
            })],
            defaultItem: () => (0, l.Q)({
              disclaimer: (0, l.Q)()
            }),
            itemProps: e => (0, l.Rv)(e, {
              label: `${te} [${e?.[l.Qw]?.title??null}]`
            })
          }, (0, l.bY)({
            filter: "grid"
          }), (0, l.sE)({
            filter: "grid"
          })],
          defaultItem: (0, l.Q)(),
          itemProps: e => (0, l.Rv)(e, {
            label: `${le} [${e?.name??null}]`
          })
        }),
        oe = "Linkout Section",
        ie = () => ({
          label: oe,
          name: "content",
          component: "group",
          fields: [{
            label: "Link to",
            name: "to",
            component: "text"
          }, (0, l.z9)({
            label: "Text",
            name: "text",
            component: "text"
          }), (0, l.z9)({
            label: "CTA",
            name: "cta",
            description: 'Treated as button text on the right side (ex. "Learn More")',
            component: "text"
          }), (0, l.bY)({
            filter: "linkout"
          }), (0, l.sE)({
            filter: "linkout"
          })],
          defaultItem: () => (0, l.Q)(),
          itemProps: e => (0, l.Rv)(e, {
            label: `${oe} [${e?.[l.Qw]?.cta??null}]`
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
        ce = e => {
          let {
            templates: a
          } = e;
          return {
            label: "Gen 9 page wrapper grid",
            component: "group",
            fields: [{
              label: "Page sections",
              name: l.ZH,
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
            }, (0, l.gY)()],
            defaultItem: () => (0, l.Q)()
          }
        }
    },
    84392: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var l = t(62229),
        n = t(21515),
        o = t.n(n),
        i = t(95966);
      const r = {
        pillBtn: "rockstargames-sites-gta-gen9c1ed14af6fceaba7c99728a81676dd92",
        selected: "rockstargames-sites-gta-gen9e49b5a5fd4ab934ece172fffe9f6577e",
        grid: "rockstargames-sites-gta-gen9be627ae18a7bd3cff72d3f11aeed67df",
        itemList: "rockstargames-sites-gta-gen9d9620ae764026da5584e0f0a5886c992",
        gtaplus: "rockstargames-sites-gta-gen9fbf343ed03c1bd513ea4cadc9726af76",
        rdo: "rockstargames-sites-gta-gen9b2194fe129aa210950dcb07b88a28c13",
        noImg: "rockstargames-sites-gta-gen9bbb7247d5d7a836d755491e85639f1a3",
        gtao: "rockstargames-sites-gta-gen9ffaf58c543b36fd7fb4efec24b3564bc",
        custom: "rockstargames-sites-gta-gen9cc2c26a3dd80cf9db62c4c7f389b7859",
        yellow: "rockstargames-sites-gta-gen9ce372826eac3cc73094d69c0c5d9a530",
        hotPink: "rockstargames-sites-gta-gen9edb9998d6516a5aa1aece9c07c1768be",
        red: "rockstargames-sites-gta-gen9f674d6037f10af1a1fe41a83c1e5da17",
        turquoise: "rockstargames-sites-gta-gen9e211b0b8ae00897d696af259b3ddd837",
        purple: "rockstargames-sites-gta-gen9e61db4af0805bb4c9bf820c26ac8a85f",
        teal: "rockstargames-sites-gta-gen9a379d41268f4f002d5ac257f67461f1d",
        blue: "rockstargames-sites-gta-gen9bffe0939bda9e26ad14f6b01669338a8",
        green: "rockstargames-sites-gta-gen9f9c1eebf59650cd8ee84191d8fc62874",
        darkRed: "rockstargames-sites-gta-gen9d44e2fc53f269ccf2b8fbe032ef6cec9",
        darkBlue: "rockstargames-sites-gta-gen9e2b6f722952b5d61d2a3b725166bfc9b",
        goldenrod: "rockstargames-sites-gta-gen9a365c5895cfd6c9f94fc994d71ba402c",
        skull: "rockstargames-sites-gta-gen9b2a1c0b367b250fe0606dffece9e1c02"
      };
      var s = t(91029);
      const {
        sanitize: c
      } = o(), d = e => {
        let {
          list: a,
          string: t,
          starColor: n,
          style: o,
          className: d,
          game: m,
          noImg: p,
          columns: u,
          mobileColumns: b
        } = e;
        const [g, f] = (0, l.useState)(null);
        if ((0, l.useEffect)((() => {
            f(a)
          }), [a]), !t && !a) return null;
        const v = {
          color: o?.color
        };
        return delete o?.color, u && g ? (0, s.jsx)("div", {
          className: r.grid,
          style: {
            "--ordered-list-grid-column": u,
            "--ordered-list-grid-column-mobile": b ?? u
          },
          children: (0, s.jsx)("ol", {
            className: (0, i.classList)(r.itemList, r.noImg, r[n], r[m]),
            style: (0, i.safeStyles)(o),
            children: g.map((e => (0, s.jsx)("li", {
              dangerouslySetInnerHTML: {
                __html: c(e.content)
              },
              style: v
            }, e.content)))
          })
        }) : (0, s.jsx)("ol", {
          style: (0, i.safeStyles)(o),
          className: (0, i.classList)(r.itemList, r.custom, p ? r.noImg : "", n ? r[n] : "", m ? r[m] : "", d ?? ""),
          children: a.map((e => (0, s.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: c(e?.content ?? e)
            }
          }, e?.content)))
        })
      }
    },
    24069: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var l = t(62229),
        n = t(21515),
        o = t.n(n),
        i = t(95966);
      const r = {
        pillBtn: "rockstargames-sites-gta-gen9d45dcc8e4008f8620987ea3033e4373d",
        selected: "rockstargames-sites-gta-gen9de1852cf9b8b4b71bcc67f8e66552c46",
        grid: "rockstargames-sites-gta-gen9c157d94760f0476ea06aa04da4e86727",
        itemList: "rockstargames-sites-gta-gen9a1ccd04246730848111c4868ccba6294",
        gtaplus: "rockstargames-sites-gta-gen9c5d92b0365dc60e6b93d321e9139e9f3",
        rdo: "rockstargames-sites-gta-gen9cc490e805fe55ab86a3ec5df2a5131e3",
        noImg: "rockstargames-sites-gta-gen9b239e263450a84fffba43a94c194d606",
        gtao: "rockstargames-sites-gta-gen9f4bc90102d24f73cb2d45d3821bfd32e",
        custom: "rockstargames-sites-gta-gen9ef5369875ddc5d9d7ad36eadc8afab2e",
        yellow: "rockstargames-sites-gta-gen9bdb57ca410954012dfd4711c67fc2a18",
        hotPink: "rockstargames-sites-gta-gen9fa9be84c85fca4e66b2489e1e52a2e6a",
        red: "rockstargames-sites-gta-gen9c446b758dbe82ad97444174f4d0b4abe",
        turquoise: "rockstargames-sites-gta-gen9b03c0798d8655dd98518b2f0dc002f06",
        purple: "rockstargames-sites-gta-gen9f14d63f28dd73c05cf950a08d8b8f501",
        teal: "rockstargames-sites-gta-gen9a0aaa124176430b6ad4f959cf136e7a3",
        blue: "rockstargames-sites-gta-gen9df5c0d39e32be4e6977bb1d638ed2340",
        green: "rockstargames-sites-gta-gen9ea2d0d0e1e32d8e48d79a0ad80a4c8ac",
        darkRed: "rockstargames-sites-gta-gen9a6a078bd68ef39e719c21e5db6329642",
        darkBlue: "rockstargames-sites-gta-gen9aa460ec14f75c93c2ba386a115ea407c",
        goldenrod: "rockstargames-sites-gta-gen9a55d762df7035a2394c9ffbfcbf1a0db",
        skull: "rockstargames-sites-gta-gen9a034e7482e8f28c66ec657f72bb93749"
      };
      var s = t(91029);
      const {
        sanitize: c
      } = o(), d = e => {
        let {
          list: a,
          string: t,
          starColor: n,
          style: o,
          className: d,
          game: m,
          noImg: p,
          columns: u,
          mobileColumns: b
        } = e;
        const [g, f] = (0, l.useState)(null), v = t ? t.split("_#_") : a;
        if ((0, l.useEffect)((() => {
            f(a)
          }), [a]), !t && !a) return null;
        const k = {
          color: o?.color
        };
        return delete o?.color, u && g ? (0, s.jsx)("div", {
          className: r.grid,
          style: {
            "--unordered-list-grid-column": u,
            "--unordered-list-grid-column-mobile": b ?? u
          },
          children: (0, s.jsx)("ul", {
            className: (0, i.classList)(r.itemList, r.noImg, r[n], r[m]),
            style: (0, i.safeStyles)(o),
            children: g.map(((e, a) => (0, s.jsx)("li", {
              style: k,
              dangerouslySetInnerHTML: {
                __html: c(e.content)
              }
            }, a)))
          })
        }) : (0, s.jsx)("ul", {
          style: (0, i.safeStyles)(o),
          className: (0, i.classList)(r.itemList, r.custom, p ? r.noImg : "", n ? r[n] : "", m ? r[m] : "", d ?? ""),
          children: v.map(((e, a) => (0, s.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: c(e?.content ?? e)
            }
          }, a)))
        })
      }
    },
    37415: (e, a, t) => {
      "use strict";
      t.d(a, {
        F: () => l
      });
      const l = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    26432: (e, a, t) => {
      "use strict";
      t.d(a, {
        OD: () => i,
        lv: () => r,
        pP: () => d,
        wC: () => n,
        PE: () => h,
        rB: () => c,
        yh: () => k,
        Ap: () => u,
        Xs: () => y,
        kx: () => x,
        rJ: () => w,
        pT: () => g,
        lV: () => S,
        PA: () => l,
        My: () => b,
        _e: () => f
      }), t(16188);
      const l = e => {
          let {
            element: a
          } = e;
          const t = setInterval((() => a.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "center"
            })), 100),
            l = e => {
              e.target === document && (clearInterval(t), document.removeEventListener("scroll", l))
            };
          document.addEventListener("scroll", l)
        },
        n = function() {
          let {
            paramName: e = "section"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const a = new URLSearchParams(document.location.search),
            t = document.getElementById(a.get(e) || e);
          t && (l({
            element: t
          }), o(t))
        },
        o = e => {
          const a = ["a", "button", "input", "textarea", "select", "details", '[tabindex]:not([tabindex="-1"])'];
          if (a.includes(e.nodeName.toLowerCase())) e.focus();
          else {
            const t = e?.querySelectorAll(a.join(", "));
            if (t?.length) {
              const e = [...t].find((e => !e?.hasAttribute("disabled")));
              e?.focus()
            }
          }
        };
      class i {
        constructor(e, a, t) {
          let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
          this.name = e, this.friendlyName = a, this.id = t, this.alias = l
        }
      }
      const r = Object.freeze({
          pc: new i("pc", "PC", 8),
          ps: new i("ps", "PlayStation", 3),
          ps3: new i("ps3", "PlayStation 3", 2),
          ps4: new i("ps4", "PlayStation 4", 11),
          ps5: new i("ps5", "PlayStation 5", 20),
          xbox: new i("xbox", "Xbox", 4),
          xbox360: new i("xbox360", "Xbox 360", 1),
          xboxone: new i("xboxone", "Xbox One", 12),
          xboxsx: new i("xboxsx", "Xbox Series X|S", 21, "xboxseriesxs"),
          switch: new i("switch", "Nintendo Switch™", 18),
          nintendoswitch: new i("nintendoswitch", "Nintendo Switch™", 18),
          applestore: new i("applestore", "App Store", 102),
          googleplay: new i("googleplay", "Google Play", 1023),
          appStore: new i("app_store", "App Store", 102),
          googlePlay: new i("ggle_play", "Google Play", 1023)
        }),
        s = Object.freeze(Object.values(r));

      function c(e) {
        if (!e) return;
        if (e instanceof i) return e;
        const a = e.toString().toLowerCase();
        return s.find((e => a === e.name || a === e.id.toString() || a === e.friendlyName.toLowerCase() || a === e.alias?.toLowerCase()))
      }
      const d = function() {
        for (var e = arguments.length, a = new Array(e), t = 0; t < e; t++) a[t] = arguments[t];
        return [...a].filter(Boolean).join(" ")
      };
      var m = t(29040),
        p = t(37415);
      const u = e => {
          const a = document.cookie.split("; "),
            t = `${e}=`,
            l = a.find((e => e.startsWith(t))),
            n = l?.substring(t.length, l.length);
          return n
        },
        b = (e, a) => {
          e && void 0 !== a && (0, m.canStoreCookie)(e) && u(e) !== a && (document.cookie = `${e}=${a}; domain=${(0,p.F)()}; path=/;`)
        };
      t(91029);
      const g = e => e.keys().forEach(e),
        f = e => e.replace(/(<([^>]+)>)/gi, ""),
        v = [{
          key: "dev",
          path: "https://media-dev-rockstargames-com.akamaized.net"
        }, {
          key: "prod",
          path: "https://media-rockstargames-com.akamaized.net"
        }],
        k = function() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          return v.filter((a => a.key === (e ? "prod" : "dev")))[0]?.path ?? null
        },
        h = e => {
          e.preventDefault();
          const a = e.currentTarget.href,
            t = (e => {
              const a = new URL(e).pathname.split("/"),
                t = a[a.length - 1];
              return decodeURIComponent(t)
            })(a);
          fetch(a, {
            method: "GET",
            headers: {}
          }).then((e => e.arrayBuffer())).then((e => {
            const a = window.URL.createObjectURL(new Blob([e])),
              l = document.createElement("a");
            l.href = a, l.setAttribute("download", t), document.body.appendChild(l), l.click(), document.body.removeChild(l)
          })).catch((e => {
            console.log(e)
          }))
        },
        y = () => [r.xbox360.name, r.xboxone.name, r.ps3.name, r.ps4.name, r.pc.name],
        x = () => [r.xboxsx.name, r.ps5.name],
        S = e => x().includes(e),
        w = e => {
          const a = new Map([
            ["en-us", "English (United States)"],
            ["de-de", "Deutsch (Deutschland)"],
            ["fr-fr", "Français (France)"],
            ["fr-ca", "Français (Canada)"],
            ["it-it", "Italiano (Italia)"],
            ["ja-jp", "日本語"],
            ["ru-ru", "Pусский"],
            ["es-es", "Español (España)"],
            ["es-mx", "Español (México)"],
            ["pt-br", "Português (Brasil)"],
            ["ko-kr", "한국어"],
            ["zh-hans", "中文（简体）"],
            ["zh-hant", "中文（繁體）"],
            ["pl-pl", "Polski"]
          ]);
          return a.has(e) ? a.get(e) : e
        }
    },
    16771: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => r
      });
      var l = t(14763),
        n = t(8458);
      const o = e => {
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
        i = e => {
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
          fields: [(0, l.om)(), {
            label: "Variant",
            name: "variant",
            description: "Set the variant for the Hero",
            component: "select",
            options: o({
              label: "-- Select Variant --"
            })
          }, {
            label: "Video",
            name: "videoSrc",
            description: "Select video for the Hero",
            component: "select",
            options: i({
              label: "-- Select A Video --"
            })
          }, {
            name: "fallbackImg",
            label: "Fallback Image",
            component: "image",
            clearable: !0,
            previewSrc: n.z0,
            parse: n.qg,
            uploadDir: n.XC
          }, (0, l.z9)({
            label: "Fallback Image Alt Tag",
            name: "fallbackImgAlt",
            component: "text"
          }), {
            name: "contentImgSrc",
            label: "Content Image",
            component: "image",
            clearable: !0,
            previewSrc: n.z0,
            parse: n.qg,
            uploadDir: n.XC
          }, (0, l.z9)({
            label: "Content Image Alt Tag",
            name: "contentImgAlt",
            component: "text"
          }), (0, l.z9)({
            label: "Heading",
            name: "heading",
            component: "text"
          }), (0, l.z9)({
            label: "SubHeading",
            name: "subheading",
            component: "text"
          }), (0, l.z9)({
            label: "CTA text",
            name: "ctaText",
            description: 'Treated as button text (eg. "View More")',
            component: "text"
          }), {
            label: "CTA link",
            name: "ctaLink",
            component: "text"
          }, (0, l.bY)({
            filter: "heroVideo"
          }), (0, l.sE)({
            filter: "heroVideo"
          })],
          defaultItem: () => (0, l.Q)(),
          itemProps: e => (0, l.Rv)(e, {
            label: `[Hero Video]: ${e?.[l.Qw]?.name??e?.name??"New"}`
          })
        })
    },
    84343: e => {
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
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                id @include(if: $sync)\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
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

      function o(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var o = l[a] || new Set,
          i = new Set,
          r = new Set;
        for (o.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var s = r;
          r = new Set, s.forEach((function(e) {
            i.has(e) || (i.add(e), (l[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var l = n(e, a);
          l && t.definitions.push(l)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), l[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = o(a, "TinaModulesList"), e.exports.TinaModulesInfo = o(a, "TinaModulesInfo")
    }
  }
]);