! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "19c445cc-4a85-46b0-9c9a-257e30d06b2c", e._sentryDebugIdIdentifier = "sentry-dbid-19c445cc-4a85-46b0-9c9a-257e30d06b2c")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [188], {
    46188: (e, a, t) => {
      t.d(a, {
        c: () => Z
      });
      var s = t(9860),
        c = t(54600),
        r = t.n(c),
        i = t(13196),
        o = t(51664),
        n = t(95240);
      const l = (0, o.createContext)(void 0),
        d = e => {
          let {
            children: a
          } = e;
          const [t, s] = (0, o.useState)([]), c = e => {
            s(e)
          }, r = (0, o.useMemo)((() => ({
            collections: t,
            updateGalleryCollections: c
          })), [t]);
          return (0, n.jsx)(l.Provider, {
            value: r,
            children: a
          })
        };
      var g = t(84644),
        m = t.n(g),
        b = t(1740),
        f = t(42836),
        u = t(60380);
      const y = {
          pillBtn: "rockstargames-sites-legacyb141beea308c3749c34ab64661bd85c1",
          selected: "rockstargames-sites-legacya6585d2a1bd4d314b6fdfc23a672f56f",
          container: "rockstargames-sites-legacydf5ea4a5af035a8163d804a8cdf68ebe",
          flipped: "rockstargames-sites-legacya5e6219f9e94da0ddc32db6157955b27",
          singleColumn: "rockstargames-sites-legacyec7889c9a1756bd738ed2c60980235de",
          large: "rockstargames-sites-legacyb00fed1ab4a38ee72bdd090fc8ccf579",
          imgVideo: "rockstargames-sites-legacyd287a65530a0979438e4faf8de287dca",
          content: "rockstargames-sites-legacyf41068d33b7b452cbb738957b5013622",
          title: "rockstargames-sites-legacyb46a2f962ed1e4678b99b8acfb86205e",
          headerLogo: "rockstargames-sites-legacye2b0e633ecf083151d9e2d5f9fdcf0bd",
          blurb: "rockstargames-sites-legacyb9744fcecb5ed02c5413d6ab530cfb1e",
          text: "rockstargames-sites-legacya1b4b206bf37247459ee82dee4121562",
          footnote: "rockstargames-sites-legacye3ade690d81b31192fb1f29b38d31211",
          rdrUltra: "rockstargames-sites-legacya1c4a1ca44e89c5ab32ef4e4a1cc06a6",
          universalCyrillic: "rockstargames-sites-legacyebc2801def19a848a9aa6f01927d6053"
        },
        k = s.framer.withFadeIn((e => {
          let {
            title: a = "",
            headerLogo: t,
            body: c,
            footnote: r,
            image: i,
            videoId: l,
            customHeaderFont: d,
            setVideoAsDefault: g,
            large: k = !1,
            image_on_right: p = !1,
            style: h = {},
            className: v = "",
            ...x
          } = e;
          const {
            track: _
          } = (0, f.useGtmTrack)(), {
            ref: j,
            inView: C
          } = (0, u.useInView)({
            threshold: .6
          }), [w, N] = (0, o.useState)(!1), [I, L] = (0, o.useState)(!1), S = d ? y[d] : "", P = t?._memoq?.maxHeight || "auto", $ = t?._memoq?.maxWidth || "auto";
          return (0, o.useEffect)((() => {
            L(t?.setLogoAsDefault || !1)
          }), []), (0, o.useEffect)((() => {
            C && !w && (_({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `image text group - ${a}`.toLowerCase(),
              element_placement: `image text group - ${x?._memoq?.title}`.toLowerCase()
            }), N(!0))
          }), [C]), (0, n.jsxs)("div", {
            className: (0, b.classList)(y.container, k ? y.large : "", p ? y.flipped : "", i ? "" : y.singleColumn, v),
            style: h,
            ref: j,
            children: [g && l ? (0, n.jsx)(m(), {
              className: y.imgVideo,
              autoplay: !1,
              id: l
            }) : i ? (i.alt = i?.alt ?? i?._memoq?.alt ?? "", (0, n.jsx)(s.MultiSourceImage, {
              className: y.imgVideo,
              image: i
            })) : null, (0, n.jsx)("div", {
              className: y.content,
              children: (0, n.jsxs)("div", {
                className: y.text,
                children: [(() => {
                  const e = t?.image,
                    c = t?.image?.alt ?? t?.image?._memoq?.alt,
                    r = a.replace(/\s+/g, "-").toLowerCase();
                  return t && (t.image.alt = c), I && e ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(s.MultiSourceImage, {
                      className: y.headerLogo,
                      image: e,
                      imageStyle: {
                        maxHeight: P,
                        maxWidth: $,
                        margin: 0
                      }
                    }), (0, n.jsx)("h3", {
                      id: `${r}-section`,
                      style: {
                        display: "none"
                      },
                      children: a
                    })]
                  }) : a && (0, n.jsx)("h3", {
                    className: [y.title, S].join(" "),
                    tabIndex: 0,
                    children: a
                  })
                })(), c ? (0, n.jsxs)(n.Fragment, {
                  children: [(0, n.jsx)("div", {
                    className: y.blurb,
                    dangerouslySetInnerHTML: {
                      __html: (B = c, B ? B.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
                    }
                  }), r && (0, n.jsx)("small", {
                    className: y.footnote,
                    dangerouslySetInnerHTML: {
                      __html: r
                    }
                  })]
                }) : ""]
              })
            })]
          });
          var B
        })),
        p = {
          pillBtn: "rockstargames-sites-legacyf911d1a5e313009fd5aa802356519700",
          selected: "rockstargames-sites-legacyc298fc2a48eb605ace08e9ef5e8a466d",
          featureBlock: "rockstargames-sites-legacyd1c356d016267549c7e470423b24da6b",
          featuresContainer: "rockstargames-sites-legacyfb23cb40e1cae664d75b9489276d29e2"
        },
        h = e => {
          let {
            className: a,
            id: t,
            features: s
          } = e;
          return s.length ? (0, n.jsx)("section", {
            className: [p.featureBlock, a ?? ""].filter((e => e)).join(" "),
            id: t ?? "",
            children: (0, n.jsx)("div", {
              className: p.featuresContainer,
              children: s.map((e => (0, n.jsx)(k, {
                ...e
              }, e?.key)))
            })
          }) : null
        };
      var v = t(82708);

      function x(e) {
        return e ? {
          "--gradient-start-color": j(_(e?.startColor), e?.startOpacity),
          "--gradient-end-color": j(_(e?.endColor), e?.endOpacity)
        } : {}
      }

      function _(e) {
        return e && /rgb\(\d\d?\d?,\s?\d\d?\d?,\s?\d\d?\d?\)/.test(e) ? e.replace(/r|g|b|a|\(|\)|/g, "").split(/,\s?/) : []
      }

      function j(e, a) {
        return e?.length ? `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${a?.length?a:1})` : ""
      }

      function C(e) {
        return e && e.replace(/\D/g, "") || "0"
      }
      const w = {
          pillBtn: "rockstargames-sites-legacyb89c30e242bdf89d0e7259dd9dd945d6",
          selected: "rockstargames-sites-legacya17a1cbd00f6cdd8146dc110d1a50de0",
          button: "rockstargames-sites-legacye5b4ce409c50969f5b68ea7ef1b93839",
          imageBackground: "rockstargames-sites-legacycceeca79d01852e2a15b9195b5dcfeca",
          cardArtworkIcon: "rockstargames-sites-legacycfd487a9f20a7a29eff544a2a31905bc",
          cardDownloadIcon: "rockstargames-sites-legacya7f13d96c9c6451e1a6cba5b26134632",
          cardIcon: "rockstargames-sites-legacyea1f56154989c823c96d3bcfe3b12b6c",
          cardPlayIcon: "rockstargames-sites-legacye61b6f6fd72977c289fc2f7843a93102",
          cardShopIcon: "rockstargames-sites-legacyc716598a9353b12f9078a38244075153",
          textContainer: "rockstargames-sites-legacybc51f5de54c905471ea9b3dac3c3d995",
          heading: "rockstargames-sites-legacya1656771fa6019e4e1469faf9a7893a8"
        },
        N = e => {
          let {
            title: a,
            subtitle: t,
            cardType: c,
            textColor: r,
            link: i,
            images: o,
            justifyContentHorizontally: l,
            justifyContentVertically: d,
            gradient: g
          } = e;
          const {
            track: m
          } = (0, f.useGtmTrack)(), u = (0, b.useGetCdnSource)(o?.mobile?.image?.full_src ?? o?.mobile?.image), y = (0, b.useGetCdnSource)(o?.desktop?.image?.full_src ?? u), k = {
            "--aspect-ratio-mobile": o?.mobile?.aspectRatio ?? "",
            "--aspect-ratio-desktop": o?.desktop?.aspectRatio ?? "",
            justifyContent: l ?? ""
          }, p = {
            justifyContent: d ?? ""
          }, h = {
            color: r ?? "",
            fontWeight: 700
          }, _ = {
            ...x(g),
            "--gradient-end-percentage": `${C(g?.endPercentage)}%`,
            "--gradient-angle": `${C(g?.angle)}deg`
          }, j = {
            mobile: u,
            desktop: y,
            alt: a
          };
          return (0, n.jsxs)(v.NavLink, {
            to: i ?? "",
            className: w.button,
            style: {
              ...k,
              ..._
            },
            onClick: () => {
              m({
                event: "card_click",
                event_action: "click",
                event_category: "card",
                event_label: a?.toLowerCase()
              })
            },
            children: [("audio" === c || "video" === c) && (0, n.jsx)("div", {
              className: w.cardIcon
            }), (e => {
              switch (e) {
                case "audio":
                  return (0, n.jsx)("div", {
                    role: "button",
                    className: w.cardPlayIcon,
                    tabIndex: 0,
                    "aria-label": "Play Audio"
                  });
                case "video":
                  return (0, n.jsx)("div", {
                    role: "button",
                    className: w.cardPlayIcon,
                    tabIndex: 0,
                    "aria-label": "Play Video"
                  });
                case "artwork":
                  return (0, n.jsx)("div", {
                    role: "button",
                    className: w.cardArtworkIcon,
                    tabIndex: 0,
                    "aria-label": "View Artwork"
                  });
                case "download":
                  return (0, n.jsx)("div", {
                    role: "button",
                    className: w.cardDownloadIcon,
                    tabIndex: 0,
                    "aria-label": "Download Content"
                  });
                case "shopping-cart":
                  return (0, n.jsx)("div", {
                    role: "button",
                    className: w.cardShopIcon,
                    tabIndex: 0,
                    "aria-label": "Shop"
                  });
                default:
                  return null
              }
            })(c), (0, n.jsx)(s.MultiSourceImage, {
              className: w.imageBackground,
              image: j
            }), (0, n.jsxs)("div", {
              className: w.textContainer,
              style: p,
              children: [(0, n.jsx)("p", {
                className: w.text,
                style: h,
                children: (0, n.jsx)("span", {
                  children: t
                })
              }), (0, n.jsx)("h3", {
                className: w.heading,
                style: h,
                children: (0, n.jsx)("span", {
                  children: a
                })
              })]
            })]
          })
        },
        I = {
          pillBtn: "rockstargames-sites-legacyd5a9c8c0159690a7a024fd9724875b73",
          selected: "rockstargames-sites-legacydcafd64d75b4d6df79702aae18dbae55",
          relatedLinksContainer: "rockstargames-sites-legacyad16a3fe9284f5e246d328f0a123c897",
          buttonContainer: "rockstargames-sites-legacyd4851614d71a6c5efd31350dacf3d2d2"
        },
        L = e => {
          let {
            title: a,
            id: t,
            buttons: s = [],
            className: c,
            ...r
          } = e;
          const {
            track: i
          } = (0, f.useGtmTrack)(), {
            ref: l,
            inView: d
          } = (0, u.useInView)({
            threshold: .6
          }), [g, m] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            d && !g && (i({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `related links group - ${a}`.toLowerCase(),
              element_placement: `related links group - ${r?._memoq?.title}`.toLowerCase()
            }), m(!0))
          }), [d]), s?.length ? (0, n.jsxs)("section", {
            className: [I.relatedLinksContainer, c ?? ""].filter((e => e)).join(" "),
            id: t ?? "",
            ref: l,
            children: [(0, n.jsx)("h3", {
              children: a
            }), (0, n.jsx)("div", {
              className: I.buttonContainer,
              children: s.map((e => (0, n.jsx)(N, {
                title: e?.title,
                subtitle: e?.subtitle,
                cardType: e?.cardType,
                textColor: e?.textColor,
                link: e?.link,
                images: e?.images,
                justifyContentHorizontally: e?.justifyContentHorizontally,
                justifyContentVertically: e?.justifyContentVertically,
                gradient: e?.gradient
              }, e.key)))
            })]
          }) : null
        };
      var S = t(83252),
        P = t(62196);
      const $ = {
          pillBtn: "rockstargames-sites-legacyb5ec5d76744acc1d2d32bb583fccfb38",
          selected: "rockstargames-sites-legacybab7278693f954cdaefdb24b9de107fd",
          tabControl: "rockstargames-sites-legacyeb06325d5873f8e5eb585c5b806fdc26",
          tabButton: "rockstargames-sites-legacybf5fd237d0ec1de987eb5364e09e4029",
          tabIconWrapper: "rockstargames-sites-legacydc7833948789552f2e834f72eec8f176",
          tabIcon: "rockstargames-sites-legacyce0f951e0b1e4e70466b4019c9205c8e",
          tabLabel: "rockstargames-sites-legacyc553e6681beb4e5abd2a02594bf1b0da",
          tabBackground: "rockstargames-sites-legacyd5e306caea049e695f1f393e0122d9f4",
          tabControlContainer: "rockstargames-sites-legacyb8f0bb480a94d4cbb36e9758142de89c"
        },
        B = e => {
          let {
            data: a,
            onClick: t,
            activeTab: s
          } = e;
          const {
            track: c
          } = (0, f.useGtmTrack)();
          return (0, n.jsx)("div", {
            className: $.tabControlContainer,
            children: (0, n.jsx)("div", {
              className: $.tabControl,
              children: a?.filter((e => {
                let {
                  isHidden: a
                } = e;
                return 1 !== a
              }))?.map(((e, r) => (0, n.jsxs)(S.motion.button, {
                type: "button",
                className: [$.tabButton, r === s ? $.activeTabButton : ""].join(" "),
                onClick: () => (e => {
                  c({
                    event: "component_tab_click",
                    event_category: "component",
                    event_action: "tab_click",
                    event_label: `image gallery - ${a[e]?.name} tab clicked`.toLowerCase(),
                    text: a[e].name ? a[e]?.name.toLowerCase() : void 0,
                    element_placement: "image gallery"
                  }), t && t(e)
                })(r),
                "aria-label": `View ${e?.name} Screens`,
                children: [e?.platform ? (0, n.jsx)("span", {
                  className: $.tabIconWrapper,
                  children: (0, n.jsx)("img", {
                    className: [$.tabIcon].join(" "),
                    src: (0, P.c)(e?.platform) || "",
                    alt: e?.platform
                  })
                }) : (0, n.jsx)("span", {
                  className: $.tabLabel,
                  children: e?.name?.toUpperCase()
                }), r === s ? (0, n.jsx)(S.motion.div, {
                  className: $.tabBackground,
                  layoutId: "tabBackground"
                }) : null]
              }, `pill-tab-${e?.name}-${e?.key}`)))
            })
          })
        };
      var G = t(77364);
      const T = {
          pillBtn: "rockstargames-sites-legacycddfe17e502302696a2a18d38b9ea12f",
          selected: "rockstargames-sites-legacyaa44fea12f7cccaac28adcb6dccc8b2c",
          overlay: "rockstargames-sites-legacye00a5d3afa546f2988ea1e3f0feeff6f",
          masonryDialog: "rockstargames-sites-legacycf35b902a7b176b8f441a26cec541385",
          masonryDialogWrapper: "rockstargames-sites-legacye27cfa77c71ac022c368727cfb5939bf",
          modalSection: "rockstargames-sites-legacye150ff000957f1abdedd2f778a289252",
          modalContainer: "rockstargames-sites-legacyf9a84d1aa4a82466ed8c097268d0f17c",
          modal: "rockstargames-sites-legacyf0220f0ae8f7dbe70be0588b094ff2db",
          modalMultisourceImage: "rockstargames-sites-legacyde964ef7e9b0ee8b126c8e062f721c24",
          galleryImage: "rockstargames-sites-legacyb03a3422c768396560fed11ce8bbdfa2",
          modalItem: "rockstargames-sites-legacya2e590af7b85d8de35783152ecba70d3",
          controlsWrapper: "rockstargames-sites-legacyf0435986d9016c518358866d8c687f86",
          modalControls: "rockstargames-sites-legacya031b4a8e7e0bca9385fd9d72abe31d7",
          modalNext: "rockstargames-sites-legacyefacba3d9c9f56f20a4f1e6199300482",
          modalPrevious: "rockstargames-sites-legacya8eae0863b916b8c7fffade41630732e",
          closeBtn: "rockstargames-sites-legacya8828f6be03d0d658e9981173985dd09"
        },
        M = e => {
          let {
            navigatePrevious: a,
            navigateNext: t,
            prevDisabled: s,
            nextDisabled: c
          } = e;
          return (0, n.jsxs)("div", {
            className: T.modalControls,
            children: [(0, n.jsx)("button", {
              type: "button",
              "aria-label": "Previous",
              className: T.modalPrevious,
              onClick: a,
              disabled: s
            }), (0, n.jsx)("button", {
              type: "button",
              "aria-label": "Next",
              className: T.modalNext,
              onClick: t,
              disabled: c
            })]
          })
        },
        W = e => {
          let {
            images: a,
            selectedImage: t,
            onClose: c
          } = e;
          const [r, i] = (0, o.useState)(!1), [l, d] = (0, o.useState)(!1), [g, m] = (0, o.useState)(a.findIndex((e => e?.image?.sources === t?.image?.sources))), {
            track: b
          } = (0, f.useGtmTrack)(), u = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, y = e => {
            if (!e.currentTarget) return;
            const t = e.currentTarget.getBoundingClientRect();
            (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && (b({
              event: "modal_close",
              event_action: "close",
              event_category: "modal",
              event_label: "image gallery modal - ".toLowerCase(),
              card_name: `${a[g]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: a[g]?.key,
              position: g,
              view_name: `${a[g]?.image?.name??"unnamed image"}`.toLowerCase()
            }), c()), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
          }, k = (0, o.useCallback)((() => {
            const e = (g + 1) % a.length;
            e !== g && g !== a.length - 1 && (m(e), i(!1)), d(g === a.length - 1), b({
              event: "modal_next",
              event_action: "next",
              event_category: "carousel",
              event_label: "image gallery modal - ".toLowerCase(),
              card_name: `${a[g]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: a[g]?.key,
              position: g,
              view_name: `${a[g]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [g, a.length]), p = (0, o.useCallback)((() => {
            const e = (g - 1 + a.length) % a.length;
            e !== g && 0 !== g && (m(e), d(!1)), i(0 === g), b({
              event: "modal_previous",
              event_action: "previous",
              event_category: "carousel",
              event_label: "image gallery modal - ".toLowerCase(),
              card_name: `${a[g]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: a[g]?.key,
              position: g,
              view_name: `${a[g]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [g, a.length]), h = a[g];
          return (0, o.useEffect)((() => {
            b({
              event: "trackPageview",
              view_name: `${a[g]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [g]), (0, o.useEffect)((() => {
            const e = e => {
              "ArrowLeft" === e.key ? p() : "ArrowRight" === e.key ? k() : "Escape" === e.key && (b({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: "image gallery modal - ".toLowerCase(),
                card_name: `${a[g]?.image?.name??"unnamed image"}`.toLowerCase(),
                card_id: a[g]?.key,
                position: g,
                view_name: `${a[g]?.image?.name??"unnamed image"}`.toLowerCase()
              }), c())
            };
            return window.addEventListener("keydown", e), () => {
              window.removeEventListener("keydown", e)
            }
          }), [g, p, k, c]), (0, n.jsx)(S.AnimatePresence, {
            children: (0, n.jsx)(S.motion.div, {
              role: "presentation",
              className: T.overlay,
              onClick: y,
              "aria-label": "dismiss modal",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: u,
              children: (0, n.jsx)("dialog", {
                role: "presentation",
                id: "masonryDialog",
                className: T.masonryDialog,
                onClick: e => y(e),
                children: (0, n.jsxs)("div", {
                  className: T.masonryDialogWrapper,
                  children: [(0, n.jsxs)(S.motion.div, {
                    className: T.controlsWrapper,
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: {
                      ease: "easeIn",
                      duration: .3,
                      delay: .5
                    },
                    children: [(0, n.jsx)(M, {
                      navigatePrevious: p,
                      navigateNext: k,
                      prevDisabled: r,
                      nextDisabled: l
                    }), (0, n.jsx)("button", {
                      type: "button",
                      id: "close",
                      "aria-label": "close",
                      className: T.closeBtn,
                      onClick: () => {
                        b({
                          event: "modal_close",
                          event_action: "close",
                          event_category: "modal",
                          event_label: "image gallery modal - ".toLowerCase(),
                          card_name: `${a[g]?.image?.name??"unnamed image"}`.toLowerCase(),
                          card_id: a[g]?.key,
                          position: g,
                          view_name: `${a[g]?.image?.name??"unnamed image"}`.toLowerCase()
                        }), c()
                      }
                    })]
                  }), (0, n.jsx)(S.motion.div, {
                    className: T.modal,
                    initial: {
                      opacity: 0,
                      scale: .5
                    },
                    animate: {
                      opacity: 1,
                      scale: 1
                    },
                    transition: u,
                    children: (0, n.jsx)(s.MultiSourceImage, {
                      className: [T.modalMultisourceImage, T.galleryImage].join(" "),
                      style: {
                        width: "100%",
                        height: "100%",
                        margin: 0
                      },
                      image: h?.image
                    })
                  })]
                })
              })
            })
          })
        },
        D = e => {
          let {
            image: a,
            item: t,
            handleImageClick: c
          } = e;
          const r = (0, b.useImageParser)(a?.image),
            i = a?.image.alt ?? a?.image._memoq?.alt;
          return (0, n.jsx)(S.motion.div, {
            className: "rockstargames-sites-legacydc288c973cc46eff0b18afdc7c1a2d55",
            onClick: () => c(a),
            variants: t,
            children: (0, n.jsx)(s.SrcsetImage, {
              imageUrl: r?.src?.desktop,
              className: "rockstargames-sites-legacyfdb0ce7aa95e4780c4004cb01285dbc4",
              alt: i,
              sizes: [320, 480, 768, 1024, 1440],
              style: {
                width: "100%",
                height: "auto"
              }
            })
          }, `grid-item-${a?.key}`)
        },
        E = e => {
          let {
            images: a = [],
            gallery: t = []
          } = e;
          const [s, c] = (0, o.useState)(null), {
            track: r
          } = (0, f.useGtmTrack)(), i = t.flat(2), l = e => {
            r({
              event: "card_click",
              event_action: "click",
              event_category: "card",
              event_label: e?.image?.name ? e?.image?.name.toLowerCase() : void 0
            }), c(e)
          }, d = {
            hidden: {
              opacity: 0
            },
            show: {
              opacity: 1
            }
          };
          return (0, n.jsx)("div", {
            className: "rockstargames-sites-legacyfe7788190b9cb04e85c4a1783a030749",
            children: (0, n.jsxs)(S.motion.div, {
              id: "rockstargames-sites-legacyc2800714e59f673ab1feb6dc33856d2f",
              className: "rockstargames-sites-legacyc68ed56cd26004d04a76ba9616bd7b7d",
              variants: {
                hidden: {
                  opacity: 0
                },
                show: {
                  opacity: 1,
                  transition: {
                    duration: .75
                  }
                }
              },
              initial: "hidden",
              animate: "show",
              children: [a?.map((e => (0, n.jsx)(D, {
                image: e,
                item: d,
                handleImageClick: l
              }, e?.key))), s && (0, G.createPortal)((0, n.jsx)(W, {
                images: i,
                selectedImage: s,
                onClose: () => {
                  c(null)
                }
              }), document.body)]
            })
          })
        },
        V = e => {
          let {
            image: a,
            item: t,
            handleImageClick: c
          } = e;
          const r = (0, b.useImageParser)(a?.image),
            i = a?.image.alt ?? a?.image._memoq?.alt;
          return (0, n.jsx)(S.motion.div, {
            className: "rockstargames-sites-legacyf07fcde2e2f6109fbbfdd6f62df8ed44",
            onClick: () => c(a),
            variants: t,
            initial: "hidden",
            animate: "show",
            children: (0, n.jsx)(s.SrcsetImage, {
              imageUrl: r?.src?.desktop,
              className: "rockstargames-sites-legacya4625e54bd7c2b8ed599d8ecd45e957f",
              alt: i,
              sizes: [320, 480, 768, 1024, 1440]
            })
          }, `single-item-${a.key}`)
        },
        q = e => {
          let {
            images: a = [],
            gallery: t = []
          } = e;
          const [s, c] = (0, o.useState)(null), {
            track: r
          } = (0, f.useGtmTrack)(), i = t.flat(2), l = e => {
            r({
              event: "card_click",
              event_action: "click",
              event_category: "card",
              event_label: "image gallery",
              card_name: s?.image?.name.toLowerCase() ? s?.image?.name.toLowerCase() : void 0,
              card_id: e.key,
              link_url: void 0,
              element_placement: "image gallery"
            }), c(e)
          }, d = {
            hidden: {
              opacity: 0
            },
            show: {
              opacity: 1,
              transition: {
                duration: .75
              }
            }
          };
          return (0, n.jsxs)("div", {
            className: "rockstargames-sites-legacyf9e3f02888b417f6e3e2a85df60951ca",
            children: [a?.map((e => (0, n.jsx)(V, {
              image: e,
              item: d,
              handleImageClick: l
            }, e?.key))), s && (0, G.createPortal)((0, n.jsx)(W, {
              images: i,
              selectedImage: s,
              onClose: () => {
                c(null)
              }
            }), document.body)]
          })
        },
        H = "rockstargames-sites-legacyc6be48a89acd92cde0f692a4636e2018",
        A = e => {
          let {
            sectionsPerPage: a,
            totalSections: t,
            currentPage: s,
            previousPage: c,
            nextPage: r,
            paginationPosition: i
          } = e;
          const o = [],
            l = Math.ceil(t / a),
            d = {
              "--pagination-position": `${i}`
            };
          for (let e = 1; e <= Math.ceil(t / a); e++) o.push(e);
          return l > 1 && (0, n.jsx)("div", {
            className: "rockstargames-sites-legacyb82c76457191f53e54104dd37926e61f",
            style: d,
            children: (0, n.jsxs)("div", {
              className: "rockstargames-sites-legacya028d7866aabd64309d2f16595a41dfc",
              style: {
                padding: 0
              },
              children: [(0, n.jsx)("div", {
                className: H,
                children: (0, n.jsx)("div", {
                  role: "button",
                  onClick: c,
                  className: "rockstargames-sites-legacyc1baf088087f1f7c909440c44829c4bc",
                  "aria-label": "Previous Page",
                  "aria-hidden": "true",
                  tabIndex: 0
                })
              }), (0, n.jsxs)("div", {
                className: "rockstargames-sites-legacye59a35dbb51f4d4a13b02996dd7cd97e",
                children: [(0, n.jsx)("span", {
                  children: s
                }), (0, n.jsx)("span", {
                  className: "rockstargames-sites-legacyc222ed80e6253558dcf221b008b009aa"
                }), (0, n.jsx)("span", {
                  children: l
                })]
              }), (0, n.jsx)("div", {
                className: H,
                children: (0, n.jsx)("div", {
                  role: "button",
                  onClick: r,
                  className: "rockstargames-sites-legacya18fb737f34833b701f04bc55d3b9100",
                  "aria-label": "Next Page",
                  "aria-hidden": "true",
                  tabIndex: 0
                })
              })]
            })
          })
        },
        z = {
          pillBtn: "rockstargames-sites-legacye7b4fc51f52229f777f0e1e73bbdf272",
          selected: "rockstargames-sites-legacyf502c4a06616ae1d2c3fcd246546b117",
          tabControl: "rockstargames-sites-legacyed96eb2736423f33df991a2b0f1a4a44",
          galleryWrapper: "rockstargames-sites-legacyb2206cf025f10d7a479c5d1ec974b176",
          gridItemWrapper: "rockstargames-sites-legacya4dc6f6c719ebc2a3a653d41e531f6cc",
          noImagesContainer: "rockstargames-sites-legacyf8d203979ec2fae95f7d520e87a32937",
          noImages: "rockstargames-sites-legacye4465927e1fa74e8af9a3845de529b99",
          unsupportedSection: "rockstargames-sites-legacyf55fcb75f5431e8dcc27f6d447e0b720",
          heading: "rockstargames-sites-legacycd67d15f0f4fdf0894c1de7368e1d109"
        },
        R = () => (0, n.jsx)("div", {
          className: z.noImagesContainer,
          children: (0, n.jsx)("div", {
            className: z.noImages,
            children: (0, n.jsx)("div", {
              className: z.heading,
              children: (0, n.jsxs)("span", {
                className: z.text,
                children: [(0, n.jsx)("h3", {
                  children: "Unsupported Section Type"
                }), (0, n.jsx)("p", {
                  children: "This section type is not supported."
                })]
              })
            })
          })
        }),
        F = e => {
          let {
            sections: a = [],
            paginationSettings: t
          } = e;
          const s = [],
            [c] = (0, o.useState)(t?.sectionsPerPage || 4),
            [r, i] = (0, o.useState)(1),
            l = r * c,
            d = l - c,
            g = a.slice(d, l);
          return 0 === a?.length ? (0, n.jsx)("div", {
            className: z.gallerWrapper,
            children: (0, n.jsx)("div", {
              className: z.noImages,
              children: (0, n.jsx)("div", {
                className: z.heading,
                children: (0, n.jsx)("span", {
                  className: z.text,
                  children: "No images available"
                })
              })
            })
          }) : (a?.map((e => s.push(e?.images))), (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(S.motion.div, {
              className: z.galleryWrapper,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: {
                ease: "easeIn",
                duration: .5
              },
              children: g?.map(((e, a) => {
                let t;
                if ("1x1" === e?.type) t = E;
                else {
                  if ("2x2" !== e?.type) return (0, n.jsx)(R, {}, `unsupported-section-${a}`);
                  t = q
                }
                return (0, n.jsx)(t, {
                  images: e?.images,
                  gallery: s
                }, `grid-section-${e?.type}-${a})}`)
              }))
            }), t?.paginationEnabled && (0, n.jsx)(A, {
              sectionsPerPage: c,
              totalSections: a.length,
              currentPage: r,
              previousPage: () => {
                i(1 !== r ? r - 1 : Math.ceil(a.length / c))
              },
              nextPage: () => {
                r !== Math.ceil(a.length / c) ? i(r + 1) : i(1)
              },
              paginationPosition: t?.paginationPosition || "center"
            })]
          }))
        },
        U = {
          pillBtn: "rockstargames-sites-legacyed98e22563d8490eb0533160017b708c",
          selected: "rockstargames-sites-legacye85dd947b9804d525afd5cb324d773b0",
          sectionWrapper: "rockstargames-sites-legacyc4864c694e697cf6670fb02180eafb8b",
          sectionContent: "rockstargames-sites-legacye13073a5530131ed33650976b5cb2476",
          actionBar: "rockstargames-sites-legacyed6df74e4f0bd8f6dbd2f731e812031c",
          heading: "rockstargames-sites-legacyc64d30742a1f34b9c2d2b1db3ce95b08",
          tabControl: "rockstargames-sites-legacye2ea622bd1616255f4c27c3370c39eec",
          tabButton: "rockstargames-sites-legacya40c645ea4157d9849a8be796acaf1a9",
          activeTabButton: "rockstargames-sites-legacyb4b04984b191b5aaa71f03a398136d41",
          tabLabel: "rockstargames-sites-legacyd6f74ab203d3584f4b8bdca3d6ce59cb",
          tabBackground: "rockstargames-sites-legacyc7f65be92a1883a15d2c588cb7042042",
          rdrUltra: "rockstargames-sites-legacye746470dfd3e3c070a41bb4846b44a58",
          universalCyrillic: "rockstargames-sites-legacyf39368204eb24134b55790e846806916",
          helveticaNow: "rockstargames-sites-legacyc8b5986c219588bac8b87dbb162c3fda"
        },
        O = s.framer.withFadeIn((e => {
          let {
            imageGallery: a
          } = e;
          const {
            track: t
          } = (0, f.useGtmTrack)(), {
            ref: s,
            inView: c
          } = (0, u.useInView)({
            threshold: .6
          }), [r, i] = (0, o.useState)(!1), [d, g] = (0, o.useState)(0), m = a?.customHeaderFont ? U[a?.customHeaderFont] : "", {
            collections: b,
            updateGalleryCollections: y
          } = (() => {
            const e = (0, o.useContext)(l);
            if (!e) throw new Error("useImageGalleryContext must be used within an ImageGalleryProvider");
            return e
          })();
          return (0, o.useEffect)((() => {
            y(a?.collections)
          }), [a]), (0, o.useEffect)((() => {
            c && !r && (t({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `image gallery - ${b[d]?.name}`.toLowerCase()
            }), i(!0))
          }), [c]), (0, n.jsx)("section", {
            className: U.sectionWrapper,
            ref: s,
            children: (0, n.jsxs)("div", {
              className: U.sectionContent,
              children: [(0, n.jsxs)("div", {
                className: U.actionBar,
                children: [(0, n.jsx)("h3", {
                  className: [U.heading, m].join(" "),
                  children: a?.title
                }), (0, n.jsx)(B, {
                  data: b,
                  onClick: e => {
                    g(e)
                  },
                  activeTab: d
                })]
              }), b[d]?.sections && (0, n.jsx)(F, {
                sections: b[d]?.sections,
                paginationSettings: a?.paginationSettings
              }, b[d]?.name)]
            })
          })
        }));
      var Y = t(45792),
        X = t(54512);
      const J = {
          pillBtn: "rockstargames-sites-legacyde0c2997703aedc7531c188c83299b6c",
          selected: "rockstargames-sites-legacyc74da5042c5c0a67b7464272816db587",
          fob: "rockstargames-sites-legacya101ab31612092a6651ccb28a7984370",
          container: "rockstargames-sites-legacyd400b86c71927c2ebc6aaacb73b7d13b",
          inner: "rockstargames-sites-legacye6b9cd8b2bc3abe1fbe70c92ff7dd9c4",
          imgWrapper: "rockstargames-sites-legacye8251051f777c393af4877aa0e2d9dac",
          imgBackground: "rockstargames-sites-legacybbce508e079d72fad92670b8df501b7a",
          content: "rockstargames-sites-legacydcc4e9836cd849a1ee258158d8995e3b",
          text: "rockstargames-sites-legacyc96326cd9340864659f075367fe09f78",
          titleAndCopy: "rockstargames-sites-legacyd7b994429a569942c25fcbb342247620",
          fobTitle: "rockstargames-sites-legacydedc85eea080a94bf975505c44befc9f",
          expandingButtonWrapper: "rockstargames-sites-legacyaeb09d35261df32a1d60239501c46b56",
          buttonText: "rockstargames-sites-legacyc17ac9d0bb5030ed9618eb4312037155",
          description: "rockstargames-sites-legacyc2f636812f6059e8b19b077ac4ea7879",
          platformLogos: "rockstargames-sites-legacycc51425ee6f42fa447e1363033d52f1c",
          platformIcon: "rockstargames-sites-legacyad372f073c1a33b52d498a7b22fe11f3",
          togglePlatformLogos: "rockstargames-sites-legacycbf9c8565599bae3cd363d3b7627ebf8",
          buttonGroup: "rockstargames-sites-legacyaffe763b4cb88ccc5146cefab31c207f",
          descriptions: "rockstargames-sites-legacyef197399e5b52cd858cc2abdb12dbb61"
        },
        K = e => {
          let {
            id: a,
            title: t,
            body: c,
            backgroundImageAndMask: r,
            expandingButton: i,
            image: l,
            ...d
          } = e;
          const [g] = (0, v.useSearchParams)(), m = (0, Y.useLocale)(), y = l?.sources?.[m] ?? l?.sources?.en_us, k = y?.mobile ?? y?.desktop, {
            track: p
          } = (0, f.useGtmTrack)(), {
            ref: h,
            inView: x,
            entry: _
          } = (0, u.useInView)({
            threshold: .6
          }), [j, C] = (0, o.useState)(!1), [w, N] = (0, o.useState)(!1), I = i?.buttons, L = [], P = (0, b.useGetCdnSource)(k ?? null), $ = (0, b.useGetCdnSource)(r?.backgroundImage?.mobile), B = (0, b.useGetCdnSource)(r?.backgroundImage?.desktop ?? $), G = (0, b.useGetCdnSource)(r?.backgroundImageMask?.mobile), T = (0, b.useGetCdnSource)(r?.backgroundImageMask?.desktop ?? G), M = r?.backgroundImage?._memoq?.backgroundAttachment || "", W = r?.backgroundImage?._memoq?.backgroundClip || "", D = r?.backgroundImage?._memoq?.backgroundColor || "", E = r?.backgroundImage?._memoq?.backgroundOrigin || "", V = r?.backgroundImage?._memoq?.backgroundPosition || "", q = r?.backgroundImage?._memoq?.backgroundRepeat || "", H = r?.backgroundImage?._memoq?.backgroundSize || "", A = {
            visible: {
              opacity: 1,
              y: 0,
              height: "100%",
              width: "100%",
              transition: {
                ease: [.5, 0, 0, 1],
                duration: .75
              }
            },
            hidden: {
              opacity: 0,
              y: 100,
              height: "0%"
            }
          };
          return (0, o.useEffect)((() => {
            _?.target && (0, Y.detectIfWeShouldAnchorSomewhere)()
          }), [g.get("section"), _?.target]), (0, o.useEffect)((() => {
            x && !j && (p({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `buy now - ${t}`.toLowerCase(),
              element_placement: `buy now - ${d?._memoq?.title}`.toLowerCase()
            }), C(!0))
          }), [x]), (0, n.jsx)(S.motion.div, {
            className: J.fob,
            initial: "hidden",
            animate: "visible",
            variants: {
              visible: {
                opacity: 1,
                width: "100%",
                transition: {
                  ease: [.5, 0, 0, 1],
                  duration: .75,
                  when: "beforeChildren",
                  delayChildren: .25,
                  staggerChildren: .1
                }
              },
              hidden: {
                opacity: 0
              }
            },
            children: (0, n.jsx)("div", {
              className: J.container,
              id: a ?? "",
              ref: h,
              style: {
                "--background-image-desktop": `url(${B})`,
                "--background-image-mobile": `url(${$})`,
                "--image-mask-desktop": `url(${T})`,
                "--image-mask-mobile": `url(${G})`,
                "--background-attachment": M,
                "--background-clip": W,
                "--background-color": D,
                "--background-origin": E,
                "--background-position": V,
                "--background-repeat": q,
                "--background-size": H
              },
              children: (0, n.jsxs)("div", {
                className: J.inner,
                children: [(0, n.jsx)("div", {
                  className: J.imgWrapper,
                  children: P && (0, n.jsx)("img", {
                    src: P,
                    alt: "Red Dead Redemption"
                  })
                }), (0, n.jsxs)("div", {
                  className: J.content,
                  children: [(0, n.jsxs)("div", {
                    className: J.titleAndCopy,
                    children: [(0, n.jsx)("h2", {
                      className: J.fobTitle,
                      children: t
                    }), (0, n.jsx)("div", {
                      className: J.description,
                      dangerouslySetInnerHTML: {
                        __html: (z = c, z ? z.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
                      }
                    })]
                  }), (0, n.jsx)("div", {
                    className: [J.platformLogos, w ? J.togglePlatformLogos : ""].join(" "),
                    children: I?.map((e => {
                      const {
                        key: a,
                        platform: t
                      } = e, s = (0, X.Ir)(t) || "";
                      return t ? (0, n.jsx)("div", {
                        children: (0, n.jsx)("img", {
                          className: [J.platformIcon].join(" "),
                          src: s,
                          alt: t
                        })
                      }, `${t}-${a}`) : null
                    }))
                  }), i?.buttons?.length ? (0, n.jsx)(S.motion.div, {
                    className: [J.expandingButtonWrapper, J.fobExpandingButton].join(" "),
                    variants: A,
                    onClick: () => {
                      N((e => !e))
                    },
                    children: (0, n.jsx)(s.ExpandingPlatformButton, {
                      buttonText: i?.label,
                      platformsAndLinks: i?.buttons,
                      trackingType: "select_platform",
                      trackingParent: "fob",
                      children: (0, n.jsx)(S.motion.div, {
                        variants: A,
                        style: {
                          marginBottom: 0
                        },
                        children: (0, n.jsx)(s.ButtonGroup, {
                          buttons: L,
                          className: J.buttonGroup
                        })
                      })
                    })
                  }) : (0, n.jsx)(S.motion.div, {
                    variants: A,
                    children: (0, n.jsx)(s.ButtonGroup, {
                      buttons: L,
                      className: J.buttonGroup
                    })
                  })]
                })]
              })
            })
          });
          var z
        },
        Q = {
          pillBtn: "rockstargames-sites-legacyb5b173fdb18cf37bc4ce4dfa8a745f0b",
          selected: "rockstargames-sites-legacyec4282990ac91c940e8d6755eb454433",
          legacyPageTemplate: "rockstargames-sites-legacya13c0ce8a7efd4e4f37648f77daaa790",
          maxWidthContainer: "rockstargames-sites-legacyae8a92f14868d9bcc568f46fccc6a7ef",
          contentWrapper: "rockstargames-sites-legacya846c409f797ecc1ab63fd5d7844a2c0",
          rdrUltra: "rockstargames-sites-legacye1b013c991b3fbbcf38770fd2e66a703",
          universalCyrillic: "rockstargames-sites-legacydcf410ae5672a94d3068188bd39afe56"
        },
        Z = e => {
          let {
            titleSlug: a,
            headerFont: t,
            hero: c,
            featureBlockBackgroundImageGroup: o,
            features: l,
            relatedLinks: g,
            imageGallery: m,
            highlightCollection: b,
            fob: f
          } = e;
          const u = t ? Q[t] : "";
          return (0, n.jsx)(d, {
            children: (0, n.jsxs)("div", {
              className: [Q.legacyPageTemplate, u].join(" "),
              children: [c && (0, n.jsx)(r(), {
                animated: c.animated,
                content: c.content,
                id: "hero",
                images: c.images,
                shardsSection: c.shardsSection,
                subHero: c.subHero,
                type: c.type
              }), l?.length && (0, n.jsx)(h, {
                id: "features",
                features: l,
                backgroundImageGroup: o
              }), (0, n.jsxs)("div", {
                className: Q.maxWidthContainer,
                children: [m?.collections?.length && (0, n.jsx)(O, {
                  id: "imageGallery",
                  imageGallery: m
                }), b?.highlights && (0, n.jsx)("div", {
                  className: Q.contentWrapper,
                  children: (0, n.jsx)(i.Highlights, {
                    highlights: b?.highlights,
                    subtitle: b?.subtitle ?? b?._memoq?.subtitle
                  })
                }), f && (0, n.jsx)(K, {
                  id: "order",
                  ...f
                }), g && (0, n.jsx)(L, {
                  id: "relatedLinks",
                  title: g?.title,
                  buttons: g?.buttons
                }), a && (0, n.jsx)(s.Rating, {
                  id: "rating",
                  titleSlug: a
                })]
              })]
            })
          })
        }
    },
    62196: (e, a, t) => {
      t.d(a, {
        c: () => c
      });
      const s = {
          ps3: t(53688),
          ps4: t(65388),
          xbox: t(91232),
          xboxone: t(23124),
          switch: t(15588),
          xbox360: t(82948),
          play: t(43352),
          questionMark: t(85872),
          default: ""
        },
        c = e => s[e] || null
    },
    54512: (e, a, t) => {
      t.d(a, {
        Ir: () => o.c,
        wD: () => i
      }), t(55120), (0, t(41272).createDevLocaleHook)({
        us: {
          legacy_header_cta_href_reddeadredemption: "./?section=order"
        }
      });
      var s = t(33052);
      const c = (0, s.makeVar)({
          brand: null,
          headerHidden: !1
        }),
        r = (e, a) => c({
          ...c(),
          [e]: a
        }),
        i = () => {
          const e = (0, s.useReactiveVar)(c);
          return {
            setState: r,
            state: e
          }
        };
      var o = t(62196)
    },
    85872: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e6833fa9baf4a5382bdd84b0b7d2c03f.svg"
    },
    43352: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg"
    },
    53688: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg"
    },
    65388: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    15588: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg"
    },
    91232: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg"
    },
    82948: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c5cee7464423693de19149a4554b3c2.svg"
    },
    23124: e => {
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    }
  }
]);