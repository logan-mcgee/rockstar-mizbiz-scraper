/*! For license information please see 31f6ecf926fb9fd28eb35a21e83d7727.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c4ad8be3-4400-4ad9-af52-beca9402ea91", e._sentryDebugIdIdentifier = "sentry-dbid-c4ad8be3-4400-4ad9-af52-beca9402ea91")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [900, 978], {
    99576: (e, a, l) => {
      "use strict";
      var t = l(51664),
        n = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        r = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(e, a, l) {
        var t, o = {},
          d = null,
          c = null;
        for (t in void 0 !== l && (d = "" + l), void 0 !== a.key && (d = "" + a.key), void 0 !== a.ref && (c = a.ref), a) i.call(a, t) && !s.hasOwnProperty(t) && (o[t] = a[t]);
        if (e && e.defaultProps)
          for (t in a = e.defaultProps) void 0 === o[t] && (o[t] = a[t]);
        return {
          $$typeof: n,
          type: e,
          key: d,
          ref: c,
          props: o,
          _owner: r.current
        }
      }
      a.Fragment = o, a.jsx = d, a.jsxs = d
    },
    95240: (e, a, l) => {
      "use strict";
      e.exports = l(99576)
    },
    98e3: (e, a, l) => {
      "use strict";
      l.d(a, {
        j: () => g,
        i: () => b
      });
      var t = l(51664),
        n = l(94072),
        o = l(22560),
        i = l(1740),
        r = l(42836),
        s = l(57013);
      var d = l(95240);
      const c = e => {
          let {
            modal: a
          } = e;
          const {
            content: l,
            className: c,
            height: m,
            onClose: u,
            rect: p = {
              left: 0,
              top: 0
            },
            contentStyle: b = {},
            contentClassName: g = "",
            width: f,
            fadeIn: v = !0,
            cardIds: k,
            theme: y,
            title: h,
            gtm: x = {},
            aspectRatio: S = "default",
            cardDimensions: I
          } = a, {
            left: w,
            top: F
          } = p, [N, _] = (0, t.useState)(null), {
            track: P
          } = (0, r.useGtmTrack)(), D = null !== k && (k?.length || 0) > 1 && ("flag_bg" === y || "fob" === I?.size), [C, E] = (0, s.useSearchParams)(), [T, M] = (0, t.useState)(!1), [B, U] = (0, t.useState)(!1), j = () => {
            const e = N - 1;
            _(e), U(e <= 0), M(e >= (k?.length || 0) - 1), P({
              event: "modal_previous",
              event_category: "modal",
              event_action: "previous",
              event_label: "",
              position: N
            })
          }, L = () => {
            const e = N + 1;
            _(e), U(e <= 0), M(e >= (k?.length || 0) - 1), P({
              event: "modal_next",
              event_category: "modal",
              event_action: "next",
              event_label: "",
              position: N
            })
          };
          (0, t.useEffect)((() => {
            null !== N && null !== k && N < k?.length && N > -1 && E({
              info: k[N]
            })
          }), [N, k]), (0, t.useEffect)((() => {
            if (null !== k && null === N && k?.length > 0) {
              const e = C.get("info");
              k?.forEach(((a, l) => {
                a === e && (_(l), U(l <= 0), M(l >= (k?.length || 0) - 1))
              }))
            }
          }), [k, N]);
          const [R] = (0, t.useState)({
            y: F,
            x: w,
            top: 0,
            left: 0,
            width: f,
            height: m,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: D ? "0" : null
          }), V = {
            opacity: 1
          }, H = (0, t.useRef)(null), O = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, A = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [q] = (0, t.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: D ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : null,
            transition: {
              x: O,
              y: O,
              top: O,
              left: O,
              width: O,
              height: O,
              border: O,
              background: {
                delay: .3
              }
            }
          }), [G, W] = (0, t.useState)({
            initial: R,
            shown: q
          });
          (0, t.useEffect)((() => {
            W({
              initial: R,
              shown: q
            })
          }), [R, q]), (0, t.useEffect)((() => {
            const e = e => {
              "function" == typeof u && 27 === e.keyCode && (u(), P({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: h ?? void 0,
                ...x
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const $ = () => {
              "function" == typeof u && (u(), P({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: h ?? void 0,
                ...x
              }))
            },
            z = v ? 0 : 1,
            X = (0, d.jsx)(o.motion.button, {
              className: "rockstargames-sites-legacyb0326cc98df99ada0e0f6821f0f0a6ad",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: A,
              onClick: () => {
                $()
              }
            });
          return (0, t.useMemo)((() => (0, d.jsx)("div", {
            className: "rockstargames-sites-legacye9a8e066d320a81b61aa2c636fa0a5b5",
            "data-show-nav": D,
            "data-aspect-ratio": S,
            children: (0, d.jsxs)(n.cp, {
              children: [(0, d.jsx)(o.motion.div, {
                className: "rockstargames-sites-legacyc8632c630878ad16e637fe2b8db2f02c",
                initial: {
                  opacity: 0
                },
                animate: V,
                transition: O,
                onClick: () => $()
              }), D && (0, d.jsxs)("div", {
                className: "rockstargames-sites-legacyeeecb8dc782f382fc9d32d03ecc1a2a5",
                children: [(0, d.jsxs)(o.motion.div, {
                  className: "rockstargames-sites-legacyb6e3406cb9a52fc7583d5c74681e88bc",
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: A,
                  children: [(0, d.jsx)("button", {
                    type: "button",
                    "aria-label": "Previous",
                    onClick: j,
                    disabled: B
                  }), (0, d.jsxs)("div", {
                    className: "rockstargames-sites-legacyff3c13d9dc1de9af609a1f99b4c47039",
                    children: [" ", N + 1, (0, d.jsx)("div", {
                      className: "rockstargames-sites-legacycd9c6033ad00894881fa5451acfe15da"
                    }), k?.length, " "]
                  }), (0, d.jsx)("button", {
                    type: "button",
                    "aria-label": "Next",
                    onClick: L,
                    disabled: T
                  })]
                }), X]
              }), (0, d.jsx)(o.motion.div, {
                className: "rockstargames-sites-legacyfab99cc2e2ca2e2a2158f9d41e764558",
                ref: H,
                initial: "initial",
                animate: "shown",
                variants: G,
                transition: O,
                style: b,
                children: (0, d.jsxs)(o.motion.div, {
                  className: (0, i.classList)("rockstargames-sites-legacyb6aa5ebf680af5d95d0e9c76ac36ed82", c),
                  children: [!D && X, (0, d.jsx)(o.motion.div, {
                    className: (0, i.classList)("rockstargames-sites-legacyd901631c0b9d817396c8352c027a2a0d", g),
                    initial: {
                      opacity: z
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: A,
                    children: l
                  }), (0, d.jsx)("button", {
                    className: "rockstargames-sites-legacyf1ecf74036b2b7fdfda3613619af40cf",
                    type: "button",
                    "aria-label": "End of modal"
                  })]
                })
              })]
            })
          })), [l, N, b])
        },
        m = "modal-context",
        u = [null, () => null],
        p = window?.[m] ?? (window[m] = (0, t.createContext)(u)),
        b = () => (0, t.useContext)(p),
        g = e => {
          let {
            children: a
          } = e;
          const [l, n] = (0, t.useState)(u), o = (0, t.useMemo)((() => l?.content ? (0, d.jsx)(c, {
            modal: l
          }) : null), [l]);
          return (0, d.jsx)(p.Provider, {
            value: [o, n],
            children: a
          })
        }
    },
    44900: (e, a, l) => {
      "use strict";
      l.r(a), l.d(a, {
        default: () => v
      });
      var t = l(82708),
        n = l(9860),
        o = l(51664),
        i = l(33052),
        r = l(98e3),
        s = l(1740),
        d = l(84644),
        c = l(45792),
        m = l(1108),
        u = l(73978);
      var p = l(95240);
      const b = (0, c.withTranslations)((e => {
        let {
          t: a
        } = e;
        const [, l] = (0, r.i)(), [b, g] = (0, t.useSearchParams)(), {
          pathname: f
        } = (0, t.useLocation)(), {
          data: v,
          loading: k
        } = (0, i.useQuery)(m.MetaUrlInfo, {
          variables: {
            url: f.replace(/\/$/, "")
          },
          setTitleDataPath: "metaUrlInfo.title"
        }), y = (0, c.useLocale)(), h = v?.metaUrlInfo?.tina;
        return (0, o.useEffect)((() => {
          const e = Number(b.get("video"));
          if (!e || !h) return void l(null);
          const t = Number(h?.payload?.content[0].content[0]?.tag) ?? "";
          let n;
          n = 40 === t && ["pt_br", "zh_tw", "zh_hans", "ko_kr", "ru_ru", "ja_jp", "pl_pl"].includes(y) ? "en_us" : y;
          const o = (0, p.jsx)(d.VideoWithPlaylist, {
              tagIds: [t],
              locale: n,
              playlistTitle: a("Up Next"),
              groupTypes: ["trailer", "feature"],
              currentVideoId: e,
              isModal: !0
            }),
            i = {
              left: window.innerWidth / 2,
              top: window.innerHeight / 2
            };
          l({
            content: o,
            rect: i,
            onClose: () => {
              g({})
            },
            title: "Video Modal",
            contentClassName: "rockstargames-sites-legacya1b74831bac97f1749e525bcc2aeccb2"
          })
        }), [b.get("video"), y, h]), (0, o.useEffect)((() => () => l(null)), []), k || h ? k ? (0, p.jsx)("div", {
          className: "rockstargames-sites-legacye7319efabeddf6cdc8c95f038912d0c1",
          children: (0, p.jsx)(n.LoadingAnimation, {})
        }) : (0, p.jsx)(s.TinaParser, {
          components: u.componentsForTinaParser,
          tina: h
        }) : (0, p.jsx)(n.Wasted, {})
      }));
      var g = l(54512);
      const f = e => {
          let {
            children: a,
            brand: l,
            setHeaderHidden: t
          } = e;
          const {
            setState: n
          } = (0, g.wD)();
          return (0, o.useLayoutEffect)((() => {
            n("brand", l)
          }), []), (0, p.jsx)("div", {
            className: "rockstargames-sites-legacyfa85682f753d59e768dbb3eedf01a62a",
            "data-brand": l,
            children: a
          })
        },
        v = (0, n.withSearchbarErrorBoundary)((e => {
          let {
            setHeaderHidden: a
          } = e;
          const l = [{
            path: "/",
            element: (0, p.jsx)(b, {})
          }, {
            path: "*",
            element: (0, p.jsx)(n.Wasted, {
              error: {
                code: window?.env?.responseStatusCode ?? 398
              }
            })
          }];
          return (0, p.jsx)(f, {
            brand: "reddeadredemption",
            setHeaderHidden: a,
            children: (0, t.useRoutes)(l)
          })
        }))
    },
    73978: (e, a, l) => {
      "use strict";
      l.r(a), l.d(a, {
        componentsForTinaParser: () => y,
        tinaBlockTemplates: () => g
      });
      var t = l(89468),
        n = l(90548),
        o = l(27276),
        i = l.n(o);
      var r = l(45652),
        s = l(84344);
      var d = l(32104),
        c = l(95240);
      const m = e => {
          let {
            field: a,
            meta: l,
            input: t
          } = e;
          return (0, c.jsxs)(d.FieldWrapper, {
            field: a,
            meta: l,
            children: [(0, c.jsx)("input", {
              type: "range",
              min: "0",
              max: "1",
              step: "0.05",
              name: a.name,
              id: a.id,
              ...t
            }), (0, c.jsx)("br", {}), (0, c.jsxs)("sup", {
              children: ["Value:", " ", t.value]
            })]
          })
        },
        u = () => ({
          name: "backgroundImageAndMask",
          label: "Background Image and Mask",
          description: "Images used for the background with an image mask.",
          component: "group",
          fields: [p(), b()],
          defaultItem: {
            foreground: () => p()?.defaultItem ?? {},
            background: () => b()?.defaultItem ?? {}
          }
        }),
        p = () => ({
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
        b = () => ({
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
                }), (0, s.VideoField)({
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
                      component: m
                    }, {
                      name: "endColor",
                      label: "Gradient End Color",
                      component: "color",
                      colorFormat: "rgb"
                    }, {
                      name: "endOpacity",
                      label: "Enter Gradient Opacity (range: 0.00 - 1.00)",
                      component: m
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
                }), u()],
                defaultItem: {
                  backgroundImageAndMask: (0, t.defaultItemUnique)(u()?.defaultItem ?? {})
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
      var f = l(9860),
        v = l(46752),
        k = l(46188);
      const y = {
        HighlightsItem: v.HighlightsItem,
        legacy: {
          LegacyPageTemplate: k.c
        },
        gen9: {
          TinaWrapper: f.TinaWrapper
        }
      }
    },
    1108: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "MetaUrlInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "url"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
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
              value: !0
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
                value: "metaUrlInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "url"
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
                  name: {
                    kind: "Name",
                    value: "url"
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
                    value: "description"
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
                    value: "keywords"
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
            }]
          }
        }],
        loc: {
          start: 0,
          end: 323
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
        body: "query MetaUrlInfo($url: String, $locale: String!, $cache: Boolean = true) {\n    metaUrlInfo(url: $url, locale: $locale, cache: $cache) {\n        url\n        title\n        description\n        id\n        keywords\n        tina {\n            payload\n            variables {\n                keys\n            }\n        }\n    }\n}\n",
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
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          l(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.MetaUrlInfo = function(e, a) {
        var l = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (l.loc = e.loc);
        var o = t[a] || new Set,
          i = new Set,
          r = new Set;
        for (o.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var s = r;
          r = new Set, s.forEach((function(e) {
            i.has(e) || (i.add(e), (t[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var t = n(e, a);
          t && l.definitions.push(t)
        })), l
      }(a, "MetaUrlInfo")
    }
  }
]);
//# sourceMappingURL=31f6ecf926fb9fd28eb35a21e83d7727.js.map