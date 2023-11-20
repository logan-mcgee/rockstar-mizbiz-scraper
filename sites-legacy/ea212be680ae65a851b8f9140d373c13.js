"use strict";
(self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [721], {
    8601: (e, a, t) => {
      t.d(a, {
        IntlProvider: () => o,
        createDevLocaleHook: () => l
      });
      var s = t(279),
        c = t(1093);

      function r(e) {
        let [a, t] = e.split(/[-_]/);
        return t = t.toLowerCase(), "cn" === t && (t = "hans"), [a, t]
      }
      var i = t(3705);
      const o = e => {
        let {
          locales: a,
          lang: t,
          children: o
        } = e;
        const n = (0, s.useMemo)((() => r(t)), [t]),
          l = (0, s.useMemo)((() => function(e, a) {
            return e?.[a] ?? {}
          }(a, n[1])), [t, a]);
        return (0, i.jsx)(c.Z, {
          messages: l,
          locale: n[0],
          defaultLocale: "en",
          children: o
        }, n[0])
      };
      var n = t(3657);
      const l = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const a = (0, n.useLocale)(),
            t = (0, s.useMemo)((() => r(a)), [a]);
          return e?.[t[1]] ?? e.us
        }
      }
    },
    417: (e, a, t) => {
      t.d(a, {
        Z: () => ee
      });
      var s = t(8976),
        c = t(2286),
        r = t.n(c),
        i = t(6573),
        o = t(279),
        n = t(3705);
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
      var m = t(4224),
        g = t.n(m),
        b = t(9542),
        u = t(6711),
        f = t(6809);
      const k = {
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
        y = s.framer.withFadeIn((e => {
          let {
            title: a = "",
            headerLogo: t,
            body: c,
            footnote: r,
            image: i,
            videoId: l,
            customHeaderFont: d,
            setVideoAsDefault: m,
            large: y = !1,
            image_on_right: p = !1,
            style: h = {},
            className: v = ""
          } = e;
          const {
            track: x
          } = (0, u.useGtmTrack)(), {
            ref: j,
            inView: _
          } = (0, f.YD)({
            threshold: .6
          }), [C, N] = (0, o.useState)(!1), [w, I] = (0, o.useState)(!1), L = d ? k[d] : "", S = t?._memoq?.maxHeight || "auto", P = t?._memoq?.maxWidth || "auto";
          return (0, o.useEffect)((() => {
            I(t?.setLogoAsDefault || !1)
          }), []), (0, o.useEffect)((() => {
            _ && !C && (x({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `image text group - ${a}`.toLowerCase()
            }), N(!0))
          }), [_]), (0, n.jsxs)("div", {
            className: (0, b.classList)(k.container, y ? k.large : "", p ? k.flipped : "", i ? "" : k.singleColumn, v),
            style: h,
            ref: j,
            children: [m && l ? (0, n.jsx)(g(), {
              className: k.imgVideo,
              autoplay: !1,
              id: l
            }) : i ? (i.alt = i?.alt ?? i?._memoq?.alt ?? "", (0, n.jsx)(s.MultiSourceImage, {
              className: k.imgVideo,
              image: i
            })) : null, (0, n.jsx)("div", {
              className: k.content,
              children: (0, n.jsxs)("div", {
                className: k.text,
                children: [(() => {
                  const e = t?.image,
                    c = t?.image?.alt ?? t?.image?._memoq?.alt,
                    r = a.replace(/\s+/g, "-").toLowerCase();
                  return t && (t.image.alt = c), w && e ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(s.MultiSourceImage, {
                      className: k.headerLogo,
                      image: e,
                      imageStyle: {
                        maxHeight: S,
                        maxWidth: P,
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
                    className: [k.title, L].join(" "),
                    tabIndex: 0,
                    children: a
                  })
                })(), c ? (0, n.jsxs)(n.Fragment, {
                  children: [(0, n.jsx)("div", {
                    className: k.blurb,
                    dangerouslySetInnerHTML: {
                      __html: ($ = c, $ ? $.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
                    }
                  }), r && (0, n.jsx)("small", {
                    className: k.footnote,
                    dangerouslySetInnerHTML: {
                      __html: r
                    }
                  })]
                }) : ""]
              })
            })]
          });
          var $
        })),
        p = {
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
              children: s.map((e => (0, n.jsx)(y, {
                ...e
              }, e?.key)))
            })
          }) : null
        };
      var v = t(7139);

      function x(e) {
        return e ? {
          "--gradient-start-color": _(j(e?.startColor), e?.startOpacity),
          "--gradient-end-color": _(j(e?.endColor), e?.endOpacity)
        } : {}
      }

      function j(e) {
        return e && /rgb\(\d\d?\d?,\s?\d\d?\d?,\s?\d\d?\d?\)/.test(e) ? e.replace(/r|g|b|a|\(|\)|/g, "").split(/,\s?/) : []
      }

      function _(e, a) {
        return e?.length ? `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${a?.length?a:1})` : ""
      }

      function C(e) {
        return e && e.replace(/\D/g, "") || "0"
      }
      const N = {
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
        w = e => {
          let {
            title: a,
            subtitle: t,
            cardType: c,
            textColor: r,
            link: i,
            images: o,
            justifyContentHorizontally: l,
            justifyContentVertically: d,
            gradient: m
          } = e;
          const {
            track: g
          } = (0, u.useGtmTrack)(), f = (0, b.useGetCdnSource)(o?.mobile?.image?.full_src ?? o?.mobile?.image), k = (0, b.useGetCdnSource)(o?.desktop?.image?.full_src ?? f), y = {
            "--aspect-ratio-mobile": o?.mobile?.aspectRatio ?? "",
            "--aspect-ratio-desktop": o?.desktop?.aspectRatio ?? "",
            justifyContent: l ?? ""
          }, p = {
            justifyContent: d ?? ""
          }, h = {
            color: r ?? "",
            fontWeight: 700
          }, j = {
            ...x(m),
            "--gradient-end-percentage": `${C(m?.endPercentage)}%`,
            "--gradient-angle": `${C(m?.angle)}deg`
          }, _ = {
            mobile: f,
            desktop: k,
            alt: a
          };
          return (0, n.jsxs)(v.NavLink, {
            to: i ?? "",
            className: N.button,
            style: {
              ...y,
              ...j
            },
            onClick: () => {
              g({
                event: "card_click",
                event_action: "click",
                event_category: "card",
                event_label: a?.toLowerCase()
              })
            },
            children: [("audio" === c || "video" === c) && (0, n.jsx)("div", {
              className: N.cardIcon
            }), (e => {
              switch (e) {
                case "audio":
                  return (0, n.jsx)("div", {
                    role: "button",
                    className: N.cardPlayIcon,
                    tabIndex: 0,
                    "aria-label": "Play Audio"
                  });
                case "video":
                  return (0, n.jsx)("div", {
                    role: "button",
                    className: N.cardPlayIcon,
                    tabIndex: 0,
                    "aria-label": "Play Video"
                  });
                case "artwork":
                  return (0, n.jsx)("div", {
                    role: "button",
                    className: N.cardArtworkIcon,
                    tabIndex: 0,
                    "aria-label": "View Artwork"
                  });
                case "download":
                  return (0, n.jsx)("div", {
                    role: "button",
                    className: N.cardDownloadIcon,
                    tabIndex: 0,
                    "aria-label": "Download Content"
                  });
                case "shopping-cart":
                  return (0, n.jsx)("div", {
                    role: "button",
                    className: N.cardShopIcon,
                    tabIndex: 0,
                    "aria-label": "Shop"
                  });
                default:
                  return null
              }
            })(c), (0, n.jsx)(s.MultiSourceImage, {
              className: N.imageBackground,
              image: _
            }), (0, n.jsxs)("div", {
              className: N.textContainer,
              style: p,
              children: [(0, n.jsx)("p", {
                className: N.text,
                style: h,
                children: (0, n.jsx)("span", {
                  children: t
                })
              }), (0, n.jsx)("h3", {
                className: N.heading,
                style: h,
                children: (0, n.jsx)("span", {
                  children: a
                })
              })]
            })]
          })
        },
        I = {
          relatedLinksContainer: "rockstargames-sites-legacyad16a3fe9284f5e246d328f0a123c897",
          buttonContainer: "rockstargames-sites-legacyd4851614d71a6c5efd31350dacf3d2d2"
        },
        L = e => {
          let {
            title: a,
            id: t,
            buttons: s = [],
            className: c
          } = e;
          const {
            track: r
          } = (0, u.useGtmTrack)(), {
            ref: i,
            inView: l
          } = (0, f.YD)({
            threshold: .6
          }), [d, m] = (0, o.useState)(!1);
          return (0, o.useEffect)((() => {
            l && !d && (r({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `related links group - ${a}`.toLowerCase()
            }), m(!0))
          }), [l]), s?.length ? (0, n.jsxs)("section", {
            className: [I.relatedLinksContainer, c ?? ""].filter((e => e)).join(" "),
            id: t ?? "",
            ref: i,
            children: [(0, n.jsx)("h3", {
              children: a
            }), (0, n.jsx)("div", {
              className: I.buttonContainer,
              children: s.map((e => (0, n.jsx)(w, {
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
      var S = t(7657),
        P = t(5134);
      const $ = {
          tabControl: "rockstargames-sites-legacyeb06325d5873f8e5eb585c5b806fdc26",
          tabButton: "rockstargames-sites-legacybf5fd237d0ec1de987eb5364e09e4029",
          tabIconWrapper: "rockstargames-sites-legacydc7833948789552f2e834f72eec8f176",
          tabIcon: "rockstargames-sites-legacyce0f951e0b1e4e70466b4019c9205c8e",
          tabLabel: "rockstargames-sites-legacyc553e6681beb4e5abd2a02594bf1b0da",
          tabBackground: "rockstargames-sites-legacyd5e306caea049e695f1f393e0122d9f4",
          tabControlContainer: "rockstargames-sites-legacyb8f0bb480a94d4cbb36e9758142de89c"
        },
        E = e => {
          let {
            data: a,
            onClick: t,
            activeTab: s
          } = e;
          const {
            track: c
          } = (0, u.useGtmTrack)();
          return (0, n.jsx)("div", {
            className: $.tabControlContainer,
            children: (0, n.jsx)("div", {
              className: $.tabControl,
              children: a?.filter((e => {
                let {
                  isHidden: a
                } = e;
                return 1 !== a
              }))?.map(((e, r) => (0, n.jsxs)(S.E.button, {
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
                    src: (0, P.Z)(e?.platform) || "",
                    alt: e?.platform
                  })
                }) : (0, n.jsx)("span", {
                  className: $.tabLabel,
                  children: e?.name?.toUpperCase()
                }), r === s ? (0, n.jsx)(S.E.div, {
                  className: $.tabBackground,
                  layoutId: "tabBackground"
                }) : null]
              }, `pill-tab-${e?.name}-${e?.key}`)))
            })
          })
        };
      var G = t(6763),
        T = t(840);
      const B = {
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
        D = e => {
          let {
            navigatePrevious: a,
            navigateNext: t,
            prevDisabled: s,
            nextDisabled: c
          } = e;
          return (0, n.jsxs)("div", {
            className: B.modalControls,
            children: [(0, n.jsx)("button", {
              type: "button",
              "aria-label": "Previous",
              className: B.modalPrevious,
              onClick: a,
              disabled: s
            }), (0, n.jsx)("button", {
              type: "button",
              "aria-label": "Next",
              className: B.modalNext,
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
          const [r, i] = (0, o.useState)(!1), [l, d] = (0, o.useState)(!1), [m, g] = (0, o.useState)(a.findIndex((e => e?.image?.sources === t?.image?.sources))), {
            track: b
          } = (0, u.useGtmTrack)(), f = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, k = e => {
            if (!e.currentTarget) return;
            const t = e.currentTarget.getBoundingClientRect();
            (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && (b({
              event: "modal_close",
              event_action: "close",
              event_category: "modal",
              event_label: "image gallery modal - ".toLowerCase(),
              card_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: a[m]?.key,
              position: m,
              view_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase()
            }), c()), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
          }, y = (0, o.useCallback)((() => {
            const e = (m + 1) % a.length;
            e !== m && m !== a.length - 1 && (g(e), i(!1)), d(m === a.length - 1), b({
              event: "modal_next",
              event_action: "next",
              event_category: "carousel",
              event_label: "image gallery modal - ".toLowerCase(),
              card_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: a[m]?.key,
              position: m,
              view_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [m, a.length]), p = (0, o.useCallback)((() => {
            const e = (m - 1 + a.length) % a.length;
            e !== m && 0 !== m && (g(e), d(!1)), i(0 === m), b({
              event: "modal_previous",
              event_action: "previous",
              event_category: "carousel",
              event_label: "image gallery modal - ".toLowerCase(),
              card_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: a[m]?.key,
              position: m,
              view_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [m, a.length]), h = a[m];
          return (0, o.useEffect)((() => {
            b({
              event: "trackPageview",
              view_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [m]), (0, o.useEffect)((() => {
            const e = e => {
              "ArrowLeft" === e.key ? p() : "ArrowRight" === e.key ? y() : "Escape" === e.key && (b({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: "image gallery modal - ".toLowerCase(),
                card_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase(),
                card_id: a[m]?.key,
                position: m,
                view_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase()
              }), c())
            };
            return window.addEventListener("keydown", e), () => {
              window.removeEventListener("keydown", e)
            }
          }), [m, p, y, c]), (0, n.jsx)(T.M, {
            children: (0, n.jsx)(S.E.div, {
              role: "presentation",
              className: B.overlay,
              onClick: k,
              "aria-label": "dismiss modal",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: f,
              children: (0, n.jsx)("dialog", {
                role: "presentation",
                id: "masonryDialog",
                className: B.masonryDialog,
                onClick: e => k(e),
                children: (0, n.jsxs)("div", {
                  className: B.masonryDialogWrapper,
                  children: [(0, n.jsxs)(S.E.div, {
                    className: B.controlsWrapper,
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
                    children: [(0, n.jsx)(D, {
                      navigatePrevious: p,
                      navigateNext: y,
                      prevDisabled: r,
                      nextDisabled: l
                    }), (0, n.jsx)("button", {
                      type: "button",
                      id: "close",
                      "aria-label": "close",
                      className: B.closeBtn,
                      onClick: () => {
                        b({
                          event: "modal_close",
                          event_action: "close",
                          event_category: "modal",
                          event_label: "image gallery modal - ".toLowerCase(),
                          card_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase(),
                          card_id: a[m]?.key,
                          position: m,
                          view_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase()
                        }), c()
                      }
                    })]
                  }), (0, n.jsx)(S.E.div, {
                    className: B.modal,
                    initial: {
                      opacity: 0,
                      scale: .5
                    },
                    animate: {
                      opacity: 1,
                      scale: 1
                    },
                    transition: f,
                    children: (0, n.jsx)(s.MultiSourceImage, {
                      className: [B.modalMultisourceImage, B.galleryImage].join(" "),
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
        M = e => {
          let {
            image: a,
            item: t,
            handleImageClick: c
          } = e;
          const r = (0, b.useImageParser)(a?.image),
            i = a?.image.alt ?? a?.image._memoq?.alt;
          return (0, n.jsx)(S.E.div, {
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
        H = e => {
          let {
            images: a = [],
            gallery: t = []
          } = e;
          const [s, c] = (0, o.useState)(null), {
            track: r
          } = (0, u.useGtmTrack)(), i = t.flat(2), l = e => {
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
            children: (0, n.jsxs)(S.E.div, {
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
              children: [a?.map((e => (0, n.jsx)(M, {
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
        q = e => {
          let {
            image: a,
            item: t,
            handleImageClick: c
          } = e;
          const r = (0, b.useImageParser)(a?.image),
            i = a?.image.alt ?? a?.image._memoq?.alt;
          return (0, n.jsx)(S.E.div, {
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
        V = e => {
          let {
            images: a = [],
            gallery: t = []
          } = e;
          const [s, c] = (0, o.useState)(null), {
            track: r
          } = (0, u.useGtmTrack)(), i = t.flat(2), l = e => {
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
            children: [a?.map((e => (0, n.jsx)(q, {
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
        z = "rockstargames-sites-legacyc6be48a89acd92cde0f692a4636e2018",
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
                className: z,
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
                className: z,
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
        F = {
          tabControl: "rockstargames-sites-legacyed96eb2736423f33df991a2b0f1a4a44",
          galleryWrapper: "rockstargames-sites-legacyb2206cf025f10d7a479c5d1ec974b176",
          gridItemWrapper: "rockstargames-sites-legacya4dc6f6c719ebc2a3a653d41e531f6cc",
          noImagesContainer: "rockstargames-sites-legacyf8d203979ec2fae95f7d520e87a32937",
          noImages: "rockstargames-sites-legacye4465927e1fa74e8af9a3845de529b99",
          unsupportedSection: "rockstargames-sites-legacyf55fcb75f5431e8dcc27f6d447e0b720",
          heading: "rockstargames-sites-legacycd67d15f0f4fdf0894c1de7368e1d109"
        },
        R = () => (0, n.jsx)("div", {
          className: F.noImagesContainer,
          children: (0, n.jsx)("div", {
            className: F.noImages,
            children: (0, n.jsx)("div", {
              className: F.heading,
              children: (0, n.jsxs)("span", {
                className: F.text,
                children: [(0, n.jsx)("h3", {
                  children: "Unsupported Section Type"
                }), (0, n.jsx)("p", {
                  children: "This section type is not supported."
                })]
              })
            })
          })
        }),
        U = e => {
          let {
            sections: a = [],
            paginationSettings: t
          } = e;
          const s = [],
            [c] = (0, o.useState)(t?.sectionsPerPage || 4),
            [r, i] = (0, o.useState)(1),
            l = r * c,
            d = l - c,
            m = a.slice(d, l);
          return 0 === a?.length ? (0, n.jsx)("div", {
            className: F.gallerWrapper,
            children: (0, n.jsx)("div", {
              className: F.noImages,
              children: (0, n.jsx)("div", {
                className: F.heading,
                children: (0, n.jsx)("span", {
                  className: F.text,
                  children: "No images available"
                })
              })
            })
          }) : (a?.map((e => s.push(e?.images))), (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)(S.E.div, {
              className: F.galleryWrapper,
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
              children: m?.map(((e, a) => {
                let t;
                if ("1x1" === e?.type) t = H;
                else {
                  if ("2x2" !== e?.type) return (0, n.jsx)(R, {}, `unsupported-section-${a}`);
                  t = V
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
        Y = {
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
        Z = s.framer.withFadeIn((e => {
          let {
            imageGallery: a
          } = e;
          const {
            track: t
          } = (0, u.useGtmTrack)(), {
            ref: s,
            inView: c
          } = (0, f.YD)({
            threshold: .6
          }), [r, i] = (0, o.useState)(!1), [d, m] = (0, o.useState)(0), g = a?.customHeaderFont ? Y[a?.customHeaderFont] : "", {
            collections: b,
            updateGalleryCollections: k
          } = (() => {
            const e = (0, o.useContext)(l);
            if (!e) throw new Error("useImageGalleryContext must be used within an ImageGalleryProvider");
            return e
          })();
          return (0, o.useEffect)((() => {
            k(a?.collections)
          }), [a]), (0, o.useEffect)((() => {
            c && !r && (t({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `image gallery - ${b[d]?.name}`.toLowerCase()
            }), i(!0))
          }), [c]), (0, n.jsx)("section", {
            className: Y.sectionWrapper,
            ref: s,
            children: (0, n.jsxs)("div", {
              className: Y.sectionContent,
              children: [(0, n.jsxs)("div", {
                className: Y.actionBar,
                children: [(0, n.jsx)("h3", {
                  className: [Y.heading, g].join(" "),
                  children: a?.title
                }), (0, n.jsx)(E, {
                  data: b,
                  onClick: e => {
                    m(e)
                  },
                  activeTab: d
                })]
              }), b[d]?.sections && (0, n.jsx)(U, {
                sections: b[d]?.sections,
                paginationSettings: a?.paginationSettings
              }, b[d]?.name)]
            })
          })
        }));
      var O = t(9929),
        X = t(4234);
      const J = {
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
            image: l
          } = e;
          const [d] = (0, v.useSearchParams)(), m = (0, O.useLocale)(), g = l?.sources?.[m] ?? l?.sources?.en_us, k = g?.mobile ?? g?.desktop, {
            track: y
          } = (0, u.useGtmTrack)(), {
            ref: p,
            inView: h,
            entry: x
          } = (0, f.YD)({
            threshold: .6
          }), [j, _] = (0, o.useState)(!1), [C, N] = (0, o.useState)(!1), w = i?.buttons, I = [], L = (0, b.useGetCdnSource)(k ?? null), P = (0, b.useGetCdnSource)(r?.backgroundImage?.mobile), $ = (0, b.useGetCdnSource)(r?.backgroundImage?.desktop ?? P), E = (0, b.useGetCdnSource)(r?.backgroundImageMask?.mobile), G = (0, b.useGetCdnSource)(r?.backgroundImageMask?.desktop ?? E), T = r?.backgroundImage?._memoq?.backgroundAttachment || "", B = r?.backgroundImage?._memoq?.backgroundClip || "", D = r?.backgroundImage?._memoq?.backgroundColor || "", W = r?.backgroundImage?._memoq?.backgroundOrigin || "", M = r?.backgroundImage?._memoq?.backgroundPosition || "", H = r?.backgroundImage?._memoq?.backgroundRepeat || "", q = r?.backgroundImage?._memoq?.backgroundSize || "", V = {
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
            x?.target && (0, O.detectIfWeShouldAnchorSomewhere)()
          }), [d.get("section"), x?.target]), (0, o.useEffect)((() => {
            h && !j && (y({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `buy now - ${t}`.toLowerCase()
            }), _(!0))
          }), [h]), (0, n.jsx)(S.E.div, {
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
              ref: p,
              style: {
                "--background-image-desktop": `url(${$})`,
                "--background-image-mobile": `url(${P})`,
                "--image-mask-desktop": `url(${G})`,
                "--image-mask-mobile": `url(${E})`,
                "--background-attachment": T,
                "--background-clip": B,
                "--background-color": D,
                "--background-origin": W,
                "--background-position": M,
                "--background-repeat": H,
                "--background-size": q
              },
              children: (0, n.jsxs)("div", {
                className: J.inner,
                children: [(0, n.jsx)("div", {
                  className: J.imgWrapper,
                  children: L && (0, n.jsx)("img", {
                    src: L,
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
                    className: [J.platformLogos, C ? J.togglePlatformLogos : ""].join(" "),
                    children: w?.map((e => {
                      const {
                        key: a,
                        platform: t
                      } = e, s = (0, X.LU)(t) || "";
                      return t ? (0, n.jsx)("div", {
                        children: (0, n.jsx)("img", {
                          className: [J.platformIcon].join(" "),
                          src: s,
                          alt: t
                        })
                      }, `${t}-${a}`) : null
                    }))
                  }), i?.buttons?.length ? (0, n.jsx)(S.E.div, {
                    className: [J.expandingButtonWrapper, J.fobExpandingButton].join(" "),
                    variants: V,
                    onClick: () => {
                      N((e => !e))
                    },
                    children: (0, n.jsx)(s.ExpandingPlatformButton, {
                      buttonText: i?.label,
                      platformsAndLinks: i?.buttons,
                      trackingType: "select_platform",
                      trackingParent: "fob",
                      children: (0, n.jsx)(S.E.div, {
                        variants: V,
                        style: {
                          marginBottom: 0
                        },
                        children: (0, n.jsx)(s.ButtonGroup, {
                          buttons: I,
                          className: J.buttonGroup
                        })
                      })
                    })
                  }) : (0, n.jsx)(S.E.div, {
                    variants: V,
                    children: (0, n.jsx)(s.ButtonGroup, {
                      buttons: I,
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
          legacyPageTemplate: "rockstargames-sites-legacya13c0ce8a7efd4e4f37648f77daaa790",
          maxWidthContainer: "rockstargames-sites-legacyae8a92f14868d9bcc568f46fccc6a7ef",
          contentWrapper: "rockstargames-sites-legacya846c409f797ecc1ab63fd5d7844a2c0",
          rdrUltra: "rockstargames-sites-legacye1b013c991b3fbbcf38770fd2e66a703",
          universalCyrillic: "rockstargames-sites-legacydcf410ae5672a94d3068188bd39afe56"
        },
        ee = e => {
          let {
            titleSlug: a,
            headerFont: t,
            hero: c,
            featureBlockBackgroundImageGroup: o,
            features: l,
            relatedLinks: m,
            imageGallery: g,
            highlightCollection: b,
            fob: u
          } = e;
          const f = t ? Q[t] : "";
          return (0, n.jsx)(d, {
            children: (0, n.jsxs)("div", {
              className: [Q.legacyPageTemplate, f].join(" "),
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
                children: [g?.collections?.length && (0, n.jsx)(Z, {
                  id: "imageGallery",
                  imageGallery: g
                }), b?.highlights && (0, n.jsx)("div", {
                  className: Q.contentWrapper,
                  children: (0, n.jsx)(i.Highlights, {
                    highlights: b?.highlights,
                    subtitle: b?.subtitle ?? b?._memoq?.subtitle
                  })
                }), u && (0, n.jsx)(K, {
                  id: "order",
                  ...u
                }), m && (0, n.jsx)(L, {
                  id: "relatedLinks",
                  title: m?.title,
                  buttons: m?.buttons
                }), a && (0, n.jsx)(s.Rating, {
                  id: "rating",
                  titleSlug: a
                })]
              })]
            })
          })
        }
    },
    5134: (e, a, t) => {
      t.d(a, {
        Z: () => c
      });
      const s = {
          ps3: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d118a14a73ce72b4687d9eb69724f4d2.svg",
          ps4: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg",
          xbox: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d6d2cb861c79506282c6d6cbf1170f81.svg",
          xboxone: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg",
          switch: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/925d3b2d0b0e784c366e20d3f1a660da.svg",
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c5cee7464423693de19149a4554b3c2.svg",
          play: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/59c4aadbdbfcdb8d06d7caa54bdc9f60.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e6833fa9baf4a5382bdd84b0b7d2c03f.svg",
          default: ""
        },
        c = e => s[e] || null
    },
    4234: (e, a, t) => {
      t.d(a, {
        LU: () => o.Z,
        NE: () => i
      }), t(3111), (0, t(8601).createDevLocaleHook)({
        us: {
          legacy_header_cta_href_reddeadredemption: "./?section=order"
        }
      });
      var s = t(4859);
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
      var o = t(5134)
    }
  }
]);