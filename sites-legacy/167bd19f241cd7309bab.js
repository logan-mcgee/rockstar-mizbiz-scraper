"use strict";
(self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [424], {
    2573: (e, a, t) => {
      t.d(a, {
        Z: () => te
      });
      var n = t(8976),
        i = t(2286),
        s = t.n(i),
        o = t(6573),
        c = t(289),
        r = t(6160);
      const l = (0, c.createContext)(void 0),
        d = e => {
          let {
            children: a
          } = e;
          const [t, n] = (0, c.useState)([]), [i, s] = (0, c.useState)([]), o = e => {
            n(e), s(e)
          }, d = (0, c.useMemo)((() => ({
            galleryCollections: t,
            collections: i,
            updateGalleryCollections: o
          })), [t, i]);
          return (0, r.jsx)(l.Provider, {
            value: d,
            children: a
          })
        };
      var m = t(4224),
        g = t.n(m),
        f = t(9542),
        u = t(6711),
        b = t(4933);
      const p = {
          container: "_560823421a0f2e0ab3a2b9480e2de3533862",
          flipped: "_560823421a0f2e0ae02b227008cd654c9631",
          singleColumn: "_560823421a0f2e0acfd9cdff3e78992a9a41",
          large: "_560823421a0f2e0ac7a6a80868ad42e86081",
          imgVideo: "_560823421a0f2e0ab1921c2502b1e826fa36",
          content: "_560823421a0f2e0adefa47d004e4bb63169b",
          title: "_560823421a0f2e0ac7b5a55806c5b9346d03",
          headerLogo: "_560823421a0f2e0aa8e1bc26d200facb17a5",
          blurb: "_560823421a0f2e0ac8677a490fca6b766d60",
          text: "_560823421a0f2e0ae1f0b4c0a4666b75e478",
          footnote: "_560823421a0f2e0ad2601c62671dbd1e4fac",
          rdrUltra: "_560823421a0f2e0ab11bf7470e0c46b247df",
          universalCyrillic: "_560823421a0f2e0aa0a9e4babf3ba41e8d0d"
        },
        _ = n.framer.withFadeIn((e => {
          let {
            title: a = "",
            headerLogo: t,
            body: i,
            footnote: s,
            image: o,
            videoId: l,
            customHeaderFont: d,
            setVideoAsDefault: m,
            large: _ = !1,
            image_on_right: h = !1,
            style: v = {},
            className: x = ""
          } = e;
          const {
            track: k
          } = (0, u.useGtmTrack)(), {
            ref: y,
            inView: j
          } = (0, b.YD)({
            threshold: .6
          }), [C, N] = (0, c.useState)(!1), [w, I] = (0, c.useState)(!1), L = d ? p[d] : "", S = t?._memoq?.maxHeight || "auto", P = t?._memoq?.maxWidth || "auto";
          return (0, c.useEffect)((() => {
            I(t?.setLogoAsDefault || !1)
          }), []), (0, c.useEffect)((() => {
            j && !C && (k({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `image text group - ${a}`.toLowerCase()
            }), N(!0))
          }), [j]), (0, r.jsxs)("div", {
            className: (0, f.classList)(p.container, _ ? p.large : "", h ? p.flipped : "", o ? "" : p.singleColumn, x),
            style: v,
            ref: y,
            children: [m && l ? (0, r.jsx)(g(), {
              className: p.imgVideo,
              autoplay: !1,
              id: l
            }) : o ? (o.alt = o?.alt ?? o?._memoq?.alt ?? "", (0, r.jsx)(n.MultiSourceImage, {
              className: p.imgVideo,
              image: o
            })) : null, (0, r.jsx)("div", {
              className: p.content,
              children: (0, r.jsxs)("div", {
                className: p.text,
                children: [(() => {
                  const e = t?.image,
                    i = t?.image?.alt ?? t?.image?._memoq?.alt,
                    s = a.replace(/\s+/g, "-").toLowerCase();
                  return t && (t.image.alt = i), w && e ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(n.MultiSourceImage, {
                      className: p.headerLogo,
                      image: e,
                      imageStyle: {
                        maxHeight: S,
                        maxWidth: P,
                        margin: 0
                      }
                    }), (0, r.jsx)("h3", {
                      id: `${s}-section`,
                      style: {
                        display: "none"
                      },
                      children: a
                    })]
                  }) : a && (0, r.jsx)("h3", {
                    className: [p.title, L].join(" "),
                    tabIndex: 0,
                    children: a
                  })
                })(), i ? (0, r.jsxs)(r.Fragment, {
                  children: [(0, r.jsx)("div", {
                    className: p.blurb,
                    dangerouslySetInnerHTML: {
                      __html: ($ = i, $ ? $.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
                    }
                  }), s && (0, r.jsx)("small", {
                    className: p.footnote,
                    dangerouslySetInnerHTML: {
                      __html: s
                    }
                  })]
                }) : ""]
              })
            })]
          });
          var $
        })),
        h = {
          featureBlock: "_560823421a0f2e0aa6b191a625e9878823b3",
          featuresContainer: "_560823421a0f2e0ac9cad8199db99d807319"
        },
        v = e => {
          let {
            className: a,
            id: t,
            features: n
          } = e;
          return n.length ? (0, r.jsx)("section", {
            className: [h.featureBlock, a ?? ""].filter((e => e)).join(" "),
            id: t ?? "",
            children: (0, r.jsx)("div", {
              className: h.featuresContainer,
              children: n.map((e => (0, r.jsx)(_, {
                ...e
              }, e?.key)))
            })
          }) : null
        };
      var x = t(6780);

      function k(e) {
        return e ? {
          "--gradient-start-color": j(y(e?.startColor), e?.startOpacity),
          "--gradient-end-color": j(y(e?.endColor), e?.endOpacity)
        } : {}
      }

      function y(e) {
        return e && /rgb\(\d\d?\d?,\s?\d\d?\d?,\s?\d\d?\d?\)/.test(e) ? e.replace(/r|g|b|a|\(|\)|/g, "").split(/,\s?/) : []
      }

      function j(e, a) {
        return e?.length ? `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${a?.length?a:1})` : ""
      }

      function C(e) {
        return e && e.replace(/\D/g, "") || "0"
      }
      const N = {
          button: "_560823421a0f2e0ae829b15c6f832e481776",
          imageBackground: "_560823421a0f2e0ad5f6cb2b591ae76d3cc3",
          cardArtworkIcon: "_560823421a0f2e0abd7fb13962aaa619886a",
          cardDownloadIcon: "_560823421a0f2e0ab445745e0771435925c8",
          cardIcon: "_560823421a0f2e0ab09d5f791c02f3e34549",
          cardPlayIcon: "_560823421a0f2e0ad4ba72e3c292e491c812",
          cardShopIcon: "_560823421a0f2e0aa19f6f9bc69c43c4b70e",
          textContainer: "_560823421a0f2e0abf78911e90c4f90fef85",
          heading: "_560823421a0f2e0aa9a1d42ddbd7508c76b2"
        },
        w = e => {
          let {
            title: a,
            subtitle: t,
            cardType: i,
            textColor: s,
            link: o,
            images: c,
            justifyContentHorizontally: l,
            justifyContentVertically: d,
            gradient: m
          } = e;
          const {
            track: g
          } = (0, u.useGtmTrack)(), b = (0, f.useGetCdnSource)(c?.mobile?.image?.full_src ?? c?.mobile?.image), p = (0, f.useGetCdnSource)(c?.desktop?.image?.full_src ?? b), _ = {
            "--aspect-ratio-mobile": c?.mobile?.aspectRatio ?? "",
            "--aspect-ratio-desktop": c?.desktop?.aspectRatio ?? "",
            justifyContent: l ?? ""
          }, h = {
            justifyContent: d ?? ""
          }, v = {
            color: s ?? "",
            fontWeight: 700
          }, y = {
            ...k(m),
            "--gradient-end-percentage": `${C(m?.endPercentage)}%`,
            "--gradient-angle": `${C(m?.angle)}deg`
          }, j = {
            mobile: b,
            desktop: p,
            alt: a
          };
          return (0, r.jsxs)(x.NavLink, {
            to: o ?? "",
            className: N.button,
            style: {
              ..._,
              ...y
            },
            onClick: () => {
              g({
                event: "card_click",
                event_action: "click",
                event_category: "card",
                event_label: a?.toLowerCase()
              })
            },
            children: [("audio" === i || "video" === i) && (0, r.jsx)("div", {
              className: N.cardIcon
            }), (e => {
              switch (e) {
                case "audio":
                  return (0, r.jsx)("div", {
                    role: "button",
                    className: N.cardPlayIcon,
                    tabIndex: 0,
                    "aria-label": "Play Audio"
                  });
                case "video":
                  return (0, r.jsx)("div", {
                    role: "button",
                    className: N.cardPlayIcon,
                    tabIndex: 0,
                    "aria-label": "Play Video"
                  });
                case "artwork":
                  return (0, r.jsx)("div", {
                    role: "button",
                    className: N.cardArtworkIcon,
                    tabIndex: 0,
                    "aria-label": "View Artwork"
                  });
                case "download":
                  return (0, r.jsx)("div", {
                    role: "button",
                    className: N.cardDownloadIcon,
                    tabIndex: 0,
                    "aria-label": "Download Content"
                  });
                case "shopping-cart":
                  return (0, r.jsx)("div", {
                    role: "button",
                    className: N.cardShopIcon,
                    tabIndex: 0,
                    "aria-label": "Shop"
                  });
                default:
                  return null
              }
            })(i), (0, r.jsx)(n.MultiSourceImage, {
              className: N.imageBackground,
              image: j
            }), (0, r.jsxs)("div", {
              className: N.textContainer,
              style: h,
              children: [(0, r.jsx)("p", {
                className: N.text,
                style: v,
                children: (0, r.jsx)("span", {
                  children: t
                })
              }), (0, r.jsx)("h3", {
                className: N.heading,
                style: v,
                children: (0, r.jsx)("span", {
                  children: a
                })
              })]
            })]
          })
        },
        I = {
          relatedLinksContainer: "_560823421a0f2e0ace5eaa4eefb9d018642f",
          buttonContainer: "_560823421a0f2e0ac6e72db53b44166b396b"
        },
        L = e => {
          let {
            title: a,
            id: t,
            buttons: n = [],
            className: i
          } = e;
          const {
            track: s
          } = (0, u.useGtmTrack)(), {
            ref: o,
            inView: l
          } = (0, b.YD)({
            threshold: .6
          }), [d, m] = (0, c.useState)(!1);
          return (0, c.useEffect)((() => {
            l && !d && (s({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `related links group - ${a}`.toLowerCase()
            }), m(!0))
          }), [l]), n?.length ? (0, r.jsxs)("section", {
            className: [I.relatedLinksContainer, i ?? ""].filter((e => e)).join(" "),
            id: t ?? "",
            ref: o,
            children: [(0, r.jsx)("h3", {
              children: a
            }), (0, r.jsx)("div", {
              className: I.buttonContainer,
              children: n.map((e => (0, r.jsx)(w, {
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
      var S = t(1244),
        P = t(4160);
      const $ = {
          tabControl: "_560823421a0f2e0aa14cf0c1eb166653f8c5",
          tabButton: "_560823421a0f2e0ac3a28a754664659a6995",
          tabIconWrapper: "_560823421a0f2e0add1ad4dd4fe72996cd90",
          tabIcon: "_560823421a0f2e0ad12571bbf42e604a16e7",
          tabLabel: "_560823421a0f2e0acdf3ae5032b44d881977",
          tabBackground: "_560823421a0f2e0ab86febf8db354327a2ae",
          tabControlContainer: "_560823421a0f2e0aac86249740a635ec921a"
        },
        G = e => {
          let {
            data: a,
            onClick: t,
            activeTab: n
          } = e;
          const {
            track: i
          } = (0, u.useGtmTrack)();
          return (0, r.jsx)("div", {
            className: $.tabControlContainer,
            children: (0, r.jsx)("div", {
              className: $.tabControl,
              children: a?.filter((e => {
                let {
                  isHidden: a
                } = e;
                return 1 !== a
              }))?.map(((e, s) => (0, r.jsxs)(S.E.button, {
                type: "button",
                className: [$.tabButton, s === n ? $.activeTabButton : ""].join(" "),
                onClick: () => (e => {
                  i({
                    event: "component_tab_click",
                    event_category: "component",
                    event_action: "tab_click",
                    event_label: `image gallery - ${a[e]?.name} tab clicked`.toLowerCase(),
                    text: a[e].name ? a[e]?.name.toLowerCase() : void 0,
                    element_placement: "image gallery"
                  }), t && t(e)
                })(s),
                "aria-label": `View ${e?.name} Screens`,
                children: [e?.platform ? (0, r.jsx)("span", {
                  className: $.tabIconWrapper,
                  children: (0, r.jsx)("img", {
                    className: [$.tabIcon].join(" "),
                    src: (0, P.Z)(e?.platform) || "",
                    alt: e?.platform
                  })
                }) : (0, r.jsx)("span", {
                  className: $.tabLabel,
                  children: e?.name?.toUpperCase()
                }), s === n ? (0, r.jsx)(S.E.div, {
                  className: $.tabBackground,
                  layoutId: "tabBackground"
                }) : null]
              }, `pill-tab-${e?.name}-${e?.key}`)))
            })
          })
        };
      var T = t(2280);
      const B = {
          animatePlaceholder: "_560823421a0f2e0ac9682c5edf886f64d9b2",
          "loader-keyframes": "_560823421a0f2e0ae61c3d7845ee89c31729"
        },
        E = e => {
          let {
            imageUrl: a,
            className: t,
            alt: n
          } = e;
          const [i, s] = (0, c.useState)(!1);
          return (0, r.jsxs)("div", {
            style: {
              aspectRatio: 16 / 9
            },
            children: [!i && (0, r.jsx)("img", {
              className: [t, B.animatePlaceholder].join(" "),
              sizes: "(max-width: 1080px) 100vw, 1080px",
              src: "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/0c1f159ae3b8604527fb.svg?im=Resize=1080",
              alt: "Loading..."
            }), (0, r.jsx)("img", {
              className: [t].join(" "),
              srcSet: (o = a, [320, 480, 768, 1024, 1440, 1920, 3840].map((e => `${o}?im=Resize=${e} ${e}w`)).join(", ")),
              sizes: "(max-width: 1080px) 100vw, 1080px",
              src: `${a}?im=Resize=1080`,
              alt: n,
              onLoad: () => {
                s(!0)
              }
            })]
          });
          var o
        };
      var D = t(7817);
      const W = {
          overlay: "_560823421a0f2e0ae8fd918316cf7a7a49f8",
          masonryDialog: "_560823421a0f2e0ad51ff2fbb0bfd8232a25",
          masonryDialogWrapper: "_560823421a0f2e0ab705965e95bbcad00df1",
          modalSection: "_560823421a0f2e0aa027ea990705fce92268",
          modalContainer: "_560823421a0f2e0ab0c56ae71f7c2fac6c1c",
          modal: "_560823421a0f2e0af827fc08f8b9a502dece",
          modalMultisourceImage: "_560823421a0f2e0ab1a7c230fb5f9aa38049",
          galleryImage: "_560823421a0f2e0aa953c82e5fc786c39338",
          modalItem: "_560823421a0f2e0ad7fa2217be54d3b56327",
          controlsWrapper: "_560823421a0f2e0ad24d7cbb76f9606a2ef1",
          modalControls: "_560823421a0f2e0aca572afcbc6b1ccf458e",
          modalNext: "_560823421a0f2e0aafb4ef1b53b7a0ba259c",
          modalPrevious: "_560823421a0f2e0ac1444989821aab0eb71e",
          closeBtn: "_560823421a0f2e0acf136ff35e49c7744520"
        },
        M = e => {
          let {
            navigatePrevious: a,
            navigateNext: t,
            prevDisabled: n,
            nextDisabled: i
          } = e;
          return (0, r.jsxs)("div", {
            className: W.modalControls,
            children: [(0, r.jsx)("button", {
              type: "button",
              "aria-label": "Previous",
              className: W.modalPrevious,
              onClick: a,
              disabled: n
            }), (0, r.jsx)("button", {
              type: "button",
              "aria-label": "Next",
              className: W.modalNext,
              onClick: t,
              disabled: i
            })]
          })
        },
        z = e => {
          let {
            images: a,
            selectedImage: t,
            onClose: i
          } = e;
          const [s, o] = (0, c.useState)(!1), [l, d] = (0, c.useState)(!1), [m, g] = (0, c.useState)(a.findIndex((e => e?.image?.sources === t?.image?.sources))), {
            track: f
          } = (0, u.useGtmTrack)(), b = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, p = e => {
            if (!e.currentTarget) return;
            const t = e.currentTarget.getBoundingClientRect();
            (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && (f({
              event: "modal_close",
              event_action: "close",
              event_category: "modal",
              event_label: "image gallery modal - ".toLowerCase(),
              card_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: a[m]?.key,
              position: m,
              view_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase()
            }), i()), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
          }, _ = (0, c.useCallback)((() => {
            const e = (m + 1) % a.length;
            e !== m && m !== a.length - 1 && (g(e), o(!1)), d(m === a.length - 1), f({
              event: "modal_next",
              event_action: "next",
              event_category: "carousel",
              event_label: "image gallery modal - ".toLowerCase(),
              card_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: a[m]?.key,
              position: m,
              view_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [m, a.length]), h = (0, c.useCallback)((() => {
            const e = (m - 1 + a.length) % a.length;
            e !== m && 0 !== m && (g(e), d(!1)), o(0 === m), f({
              event: "modal_previous",
              event_action: "previous",
              event_category: "carousel",
              event_label: "image gallery modal - ".toLowerCase(),
              card_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: a[m]?.key,
              position: m,
              view_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [m, a.length]), v = a[m];
          return (0, c.useEffect)((() => {
            f({
              event: "trackPageview",
              view_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [m]), (0, c.useEffect)((() => {
            const e = e => {
              "ArrowLeft" === e.key ? h() : "ArrowRight" === e.key ? _() : "Escape" === e.key && (f({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: "image gallery modal - ".toLowerCase(),
                card_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase(),
                card_id: a[m]?.key,
                position: m,
                view_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase()
              }), i())
            };
            return window.addEventListener("keydown", e), () => {
              window.removeEventListener("keydown", e)
            }
          }), [m, h, _, i]), (0, r.jsx)(D.M, {
            children: (0, r.jsx)(S.E.div, {
              role: "presentation",
              className: W.overlay,
              onClick: p,
              "aria-label": "dismiss modal",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: b,
              children: (0, r.jsx)("dialog", {
                role: "presentation",
                id: "masonryDialog",
                className: W.masonryDialog,
                onClick: e => p(e),
                children: (0, r.jsxs)("div", {
                  className: W.masonryDialogWrapper,
                  children: [(0, r.jsxs)(S.E.div, {
                    className: W.controlsWrapper,
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
                    children: [(0, r.jsx)(M, {
                      navigatePrevious: h,
                      navigateNext: _,
                      prevDisabled: s,
                      nextDisabled: l
                    }), (0, r.jsx)("button", {
                      type: "button",
                      id: "close",
                      "aria-label": "close",
                      className: W.closeBtn,
                      onClick: () => {
                        f({
                          event: "modal_close",
                          event_action: "close",
                          event_category: "modal",
                          event_label: "image gallery modal - ".toLowerCase(),
                          card_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase(),
                          card_id: a[m]?.key,
                          position: m,
                          view_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase()
                        }), i()
                      }
                    })]
                  }), (0, r.jsx)(S.E.div, {
                    className: W.modal,
                    initial: {
                      opacity: 0,
                      scale: .5
                    },
                    animate: {
                      opacity: 1,
                      scale: 1
                    },
                    transition: b,
                    children: (0, r.jsx)(n.MultiSourceImage, {
                      className: [W.modalMultisourceImage, W.galleryImage].join(" "),
                      style: {
                        width: "100%",
                        height: "100%",
                        margin: 0
                      },
                      image: v?.image
                    })
                  })]
                })
              })
            })
          })
        },
        H = e => {
          let {
            image: a,
            item: t,
            handleImageClick: n
          } = e;
          const i = (0, f.useImageParser)(a?.image);
          return (0, r.jsx)(S.E.div, {
            className: "_560823421a0f2e0ac39603540e530da252a4",
            onClick: () => n(a),
            variants: t,
            children: (0, r.jsx)(E, {
              imageUrl: i?.src?.desktop,
              className: "_560823421a0f2e0aa3c47b1efa37c0537d62",
              alt: i?.alt
            })
          }, `grid-item-${a?.key}`)
        },
        V = e => {
          let {
            images: a = [],
            gallery: t = []
          } = e;
          const [n, i] = (0, c.useState)(null), {
            track: s
          } = (0, u.useGtmTrack)(), o = t.flat(2), l = e => {
            s({
              event: "card_click",
              event_action: "click",
              event_category: "card",
              event_label: e?.image?.name ? e?.image?.name.toLowerCase() : void 0
            }), i(e)
          }, d = {
            hidden: {
              opacity: 0
            },
            show: {
              opacity: 1
            }
          };
          return (0, r.jsxs)(S.E.div, {
            className: "_560823421a0f2e0affcdc4542245867d1a6b",
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
            children: [a?.map((e => (0, r.jsx)(H, {
              image: e,
              item: d,
              handleImageClick: l
            }, e?.key))), n && (0, T.createPortal)((0, r.jsx)(z, {
              images: o,
              selectedImage: n,
              onClose: () => {
                i(null)
              }
            }), document.body)]
          })
        },
        A = e => {
          let {
            image: a,
            item: t,
            handleImageClick: n
          } = e;
          const i = (0, f.useImageParser)(a?.image);
          return (0, r.jsx)(S.E.div, {
            className: "_560823421a0f2e0aee443f71ef6bbd40a62a",
            onClick: () => n(a),
            variants: t,
            initial: "hidden",
            animate: "show",
            children: (0, r.jsx)(E, {
              imageUrl: i?.src?.desktop,
              className: "_560823421a0f2e0ae922d8c04b65ddf8580f",
              alt: i?.alt
            })
          }, `single-item-${a.key}`)
        },
        R = e => {
          let {
            images: a = [],
            gallery: t = []
          } = e;
          const [n, i] = (0, c.useState)(null), {
            track: s
          } = (0, u.useGtmTrack)(), o = t.flat(2), l = e => {
            s({
              event: "card_click",
              event_action: "click",
              event_category: "card",
              event_label: "image gallery",
              card_name: n?.image?.name.toLowerCase() ? n?.image?.name.toLowerCase() : void 0,
              card_id: e.key,
              link_url: void 0,
              element_placement: "image gallery"
            }), i(e)
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
          return (0, r.jsxs)(r.Fragment, {
            children: [a?.map((e => (0, r.jsx)(A, {
              image: e,
              item: d,
              handleImageClick: l
            }, e?.key))), n && (0, T.createPortal)((0, r.jsx)(z, {
              images: o,
              selectedImage: n,
              onClose: () => {
                i(null)
              }
            }), document.body)]
          })
        },
        q = "_560823421a0f2e0aa70d86a80d7a9e36206c",
        F = e => {
          let {
            sectionsPerPage: a,
            totalSections: t,
            currentPage: n,
            previousPage: i,
            nextPage: s,
            paginationPosition: o
          } = e;
          const c = [],
            l = Math.ceil(t / a),
            d = {
              "--pagination-position": `${o}`
            };
          for (let e = 1; e <= Math.ceil(t / a); e++) c.push(e);
          return l > 1 && (0, r.jsx)("div", {
            className: "_560823421a0f2e0aab5f3ea9d1452cf0e6d1",
            style: d,
            children: (0, r.jsxs)("div", {
              className: "_560823421a0f2e0abc936877a3779c73b08c",
              style: {
                padding: 0
              },
              children: [(0, r.jsx)("div", {
                className: q,
                children: (0, r.jsx)("div", {
                  role: "button",
                  onClick: i,
                  className: "_560823421a0f2e0ae6758143538969405710",
                  "aria-label": "Previous Page",
                  "aria-hidden": "true",
                  tabIndex: 0
                })
              }), (0, r.jsxs)("div", {
                className: "_560823421a0f2e0adea8cec8afdc7a279ca9",
                children: [(0, r.jsx)("span", {
                  children: n
                }), (0, r.jsx)("span", {
                  children: "/"
                }), (0, r.jsx)("span", {
                  children: l
                })]
              }), (0, r.jsx)("div", {
                className: q,
                children: (0, r.jsx)("div", {
                  role: "button",
                  onClick: s,
                  className: "_560823421a0f2e0adeb110c9a2344fb78544",
                  "aria-label": "Next Page",
                  "aria-hidden": "true",
                  tabIndex: 0
                })
              })]
            })
          })
        },
        U = {
          tabControl: "_560823421a0f2e0ae217507ffc174e416254",
          galleryWrapper: "_560823421a0f2e0aea74189592c1f9ba14ee",
          noImages: "_560823421a0f2e0ac31d48e858de2c00f517",
          unsupportedSection: "_560823421a0f2e0abcd93e12b3f607e10ee3",
          heading: "_560823421a0f2e0add5080878c99b45c43a0"
        },
        Y = () => (0, r.jsx)("div", {
          className: U.noImages,
          children: (0, r.jsx)("div", {
            className: U.heading,
            children: (0, r.jsxs)("span", {
              className: U.text,
              children: [(0, r.jsx)("h3", {
                children: "Unsupported Section Type"
              }), (0, r.jsx)("p", {
                children: "This section type is not supported."
              })]
            })
          })
        }),
        Z = e => {
          let {
            sections: a = [],
            paginationSettings: t
          } = e;
          const n = [],
            [i] = (0, c.useState)(t?.sectionsPerPage || 4),
            [s, o] = (0, c.useState)(1),
            l = s * i,
            d = l - i,
            m = a.slice(d, l);
          return 0 === a?.length ? (0, r.jsx)("div", {
            className: U.gallerWrapper,
            children: (0, r.jsx)("div", {
              className: U.noImages,
              children: (0, r.jsx)("div", {
                className: U.heading,
                children: (0, r.jsx)("span", {
                  className: U.text,
                  children: "No images available"
                })
              })
            })
          }) : (0, r.jsxs)(r.Fragment, {
            children: [(0, r.jsx)(S.E.div, {
              className: U.galleryWrapper,
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
                if (n.push(e?.images), "1x1" === e?.type) t = V;
                else {
                  if ("2x2" !== e?.type) return (0, r.jsx)(Y, {}, `unsupported-section-${a}`);
                  t = R
                }
                return (0, r.jsx)(t, {
                  images: e?.images,
                  gallery: n
                }, `grid-section-${e?.type}-${a})}`)
              }))
            }), t?.paginationEnabled && (0, r.jsx)(F, {
              sectionsPerPage: i,
              totalSections: a.length,
              currentPage: s,
              previousPage: () => {
                o(1 !== s ? s - 1 : Math.ceil(a.length / i))
              },
              nextPage: () => {
                s !== Math.ceil(a.length / i) ? o(s + 1) : o(1)
              },
              paginationPosition: t?.paginationPosition || "center"
            })]
          })
        },
        O = {
          sectionWrapper: "_560823421a0f2e0aa193c3c368e981fe0391",
          sectionContent: "_560823421a0f2e0abb35424bfc01208af131",
          actionBar: "_560823421a0f2e0ae77da06d26a86afa9cdd",
          heading: "_560823421a0f2e0ab8f1dad968c0897a0e02",
          tabControl: "_560823421a0f2e0af581d47907c5f8155410",
          tabButton: "_560823421a0f2e0aee8e3999f779badb508f",
          activeTabButton: "_560823421a0f2e0af63178a69c9cf66a748a",
          tabLabel: "_560823421a0f2e0ade9288acf024850ae7a8",
          tabBackground: "_560823421a0f2e0ac2aa072d8f51f6ddabb1",
          rdrUltra: "_560823421a0f2e0aeb9feac09744607f1014",
          universalCyrillic: "_560823421a0f2e0ab0f539e698f4f00121fd",
          helveticaNow: "_560823421a0f2e0ab7840db40ddec26f58c8"
        },
        X = n.framer.withFadeIn((e => {
          let {
            imageGallery: a
          } = e;
          const {
            track: t
          } = (0, u.useGtmTrack)(), {
            ref: n,
            inView: i
          } = (0, b.YD)({
            threshold: .6
          }), [s, o] = (0, c.useState)(!1), [d, m] = (0, c.useState)(0), g = a?.customHeaderFont ? O[a?.customHeaderFont] : "", {
            collections: f,
            updateGalleryCollections: p
          } = (() => {
            const e = (0, c.useContext)(l);
            if (!e) throw new Error("useImageGalleryContext must be used within an ImageGalleryProvider");
            return e
          })();
          return p(a?.collections), (0, c.useEffect)((() => {
            i && !s && (t({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `image gallery - ${f[d]?.name}`.toLowerCase()
            }), o(!0))
          }), [i]), (0, r.jsx)("section", {
            className: O.sectionWrapper,
            ref: n,
            children: (0, r.jsxs)("div", {
              className: O.sectionContent,
              children: [(0, r.jsxs)("div", {
                className: O.actionBar,
                children: [(0, r.jsx)("h3", {
                  className: [O.heading, g].join(" "),
                  children: a?.title
                }), (0, r.jsx)(G, {
                  data: f,
                  onClick: e => {
                    m(e)
                  },
                  activeTab: d
                })]
              }), f[d]?.sections && (0, r.jsx)(Z, {
                sections: f[d]?.sections,
                paginationSettings: a?.paginationSettings
              }, f[d]?.name)]
            })
          })
        }));
      var J = t(9929),
        K = t(8711);
      const Q = {
          fob: "_560823421a0f2e0adbcf45a7d24606f9fc39",
          container: "_560823421a0f2e0ab0eb78cc76de29e01f7e",
          inner: "_560823421a0f2e0aa4360ffde9f4417a2a7c",
          imgWrapper: "_560823421a0f2e0acd9c706553e5452c5523",
          imgBackground: "_560823421a0f2e0abd71ae7dd03fb9a4bab3",
          content: "_560823421a0f2e0adf7b9bc0c51447f90251",
          text: "_560823421a0f2e0aa93c4cef013891e7bb69",
          titleAndCopy: "_560823421a0f2e0add4b7c2eead3a22f40f4",
          fobTitle: "_560823421a0f2e0ade84bdb38a77368bd905",
          expandingButtonWrapper: "_560823421a0f2e0ad8ae2def2e6eaf6b72e3",
          buttonText: "_560823421a0f2e0afd7cfa70ce1eac61e80a",
          description: "_560823421a0f2e0afe82dfbbeb1ce6cc1ad5",
          platformLogos: "_560823421a0f2e0ab6f89e65a24857a73da3",
          platformIcon: "_560823421a0f2e0ab5e1aba9780f25e7e3d2",
          togglePlatformLogos: "_560823421a0f2e0ace5911e3dc0cf65c7e15",
          buttonGroup: "_560823421a0f2e0abc52f3ccdfb7d6e07b76",
          descriptions: "_560823421a0f2e0ab9c477258da2f0f8fda4"
        },
        ee = e => {
          let {
            id: a,
            title: t,
            body: i,
            backgroundImageAndMask: s,
            expandingButton: o,
            image: l
          } = e;
          const [d] = (0, x.useSearchParams)(), m = (0, J.useLocale)(), g = l.sources?.[m] ?? l.sources?.en_us, p = g?.mobile ?? g?.desktop, {
            track: _
          } = (0, u.useGtmTrack)(), {
            ref: h,
            inView: v,
            entry: k
          } = (0, b.YD)({
            threshold: .6
          }), [y, j] = (0, c.useState)(!1), [C, N] = (0, c.useState)(!1), w = o?.buttons, I = [], L = (0, f.useGetCdnSource)(p ?? null), P = (0, f.useGetCdnSource)(s?.backgroundImage?.mobile), $ = (0, f.useGetCdnSource)(s?.backgroundImage?.desktop ?? P), G = (0, f.useGetCdnSource)(s?.backgroundImageMask?.mobile), T = (0, f.useGetCdnSource)(s?.backgroundImageMask?.desktop ?? G), B = s?.backgroundImage?._memoq?.backgroundAttachment || "", E = s?.backgroundImage?._memoq?.backgroundClip || "", D = s?.backgroundImage?._memoq?.backgroundColor || "", W = s?.backgroundImage?._memoq?.backgroundOrigin || "", M = s?.backgroundImage?._memoq?.backgroundPosition || "", z = s?.backgroundImage?._memoq?.backgroundRepeat || "", H = s?.backgroundImage?._memoq?.backgroundSize || "", V = {
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
          return (0, c.useEffect)((() => {
            k?.target && (0, J.detectIfWeShouldAnchorSomewhere)()
          }), [d.get("section"), k?.target]), (0, c.useEffect)((() => {
            v && !y && (_({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `buy now - ${t}`.toLowerCase()
            }), j(!0))
          }), [v]), (0, r.jsx)(S.E.div, {
            className: Q.fob,
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
            children: (0, r.jsx)("div", {
              className: Q.container,
              id: a ?? "",
              ref: h,
              style: {
                "--background-image-desktop": `url(${$})`,
                "--background-image-mobile": `url(${P})`,
                "--image-mask-desktop": `url(${T})`,
                "--image-mask-mobile": `url(${G})`,
                "--background-attachment": B,
                "--background-clip": E,
                "--background-color": D,
                "--background-origin": W,
                "--background-position": M,
                "--background-repeat": z,
                "--background-size": H
              },
              children: (0, r.jsxs)("div", {
                className: Q.inner,
                children: [(0, r.jsx)("div", {
                  className: Q.imgWrapper,
                  children: L && (0, r.jsx)("img", {
                    src: L,
                    alt: "Red Dead Redemption"
                  })
                }), (0, r.jsxs)("div", {
                  className: Q.content,
                  children: [(0, r.jsxs)("div", {
                    className: Q.titleAndCopy,
                    children: [(0, r.jsx)("h2", {
                      className: Q.fobTitle,
                      children: t
                    }), (0, r.jsx)("div", {
                      className: Q.description,
                      dangerouslySetInnerHTML: {
                        __html: (A = i, A ? A.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
                      }
                    })]
                  }), (0, r.jsx)("div", {
                    className: [Q.platformLogos, C ? Q.togglePlatformLogos : ""].join(" "),
                    children: w?.map((e => {
                      const {
                        key: a,
                        platform: t
                      } = e, n = (0, K.LU)(t) || "";
                      return t ? (0, r.jsx)("div", {
                        children: (0, r.jsx)("img", {
                          className: [Q.platformIcon].join(" "),
                          src: n,
                          alt: t
                        })
                      }, `${t}-${a}`) : null
                    }))
                  }), o?.buttons?.length ? (0, r.jsx)(S.E.div, {
                    className: [Q.expandingButtonWrapper, Q.fobExpandingButton].join(" "),
                    variants: V,
                    onClick: () => {
                      N((e => !e))
                    },
                    children: (0, r.jsx)(n.ExpandingPlatformButton, {
                      buttonText: o?.label,
                      platformsAndLinks: o?.buttons,
                      trackingType: "select_platform",
                      trackingParent: "fob",
                      children: (0, r.jsx)(S.E.div, {
                        variants: V,
                        style: {
                          marginBottom: 0
                        },
                        children: (0, r.jsx)(n.ButtonGroup, {
                          buttons: I,
                          className: Q.buttonGroup
                        })
                      })
                    })
                  }) : (0, r.jsx)(S.E.div, {
                    variants: V,
                    children: (0, r.jsx)(n.ButtonGroup, {
                      buttons: I,
                      className: Q.buttonGroup
                    })
                  })]
                })]
              })
            })
          });
          var A
        },
        ae = {
          legacyPageTemplate: "_560823421a0f2e0afe87e3fc1302eca7e415",
          maxWidthContainer: "_560823421a0f2e0afeec0fc92574e44f6146",
          rdrUltra: "_560823421a0f2e0af9f7071451bc7de89988",
          universalCyrillic: "_560823421a0f2e0afe90f13c9d95ce1d65b7"
        },
        te = e => {
          let {
            titleSlug: a,
            headerFont: t,
            hero: i,
            featureBlockBackgroundImageGroup: c,
            features: l,
            relatedLinks: m,
            imageGallery: g,
            highlightCollection: f = {},
            fob: u
          } = e;
          const b = t ? ae[t] : "",
            {
              highlights: p,
              blockSettings: _
            } = f;
          return (0, r.jsx)(d, {
            children: (0, r.jsxs)("div", {
              className: [ae.legacyPageTemplate, b].join(" "),
              children: [i && (0, r.jsx)(s(), {
                animated: i.animated,
                content: i.content,
                id: "hero",
                images: i.images,
                shardsSection: i.shardsSection,
                subHero: i.subHero,
                type: i.type
              }), l?.length && (0, r.jsx)(v, {
                id: "features",
                features: l,
                backgroundImageGroup: c
              }), (0, r.jsxs)("div", {
                className: ae.maxWidthContainer,
                children: [g?.collections?.length && (0, r.jsx)(X, {
                  id: "imageGallery",
                  imageGallery: g
                }), _ && p && (0, r.jsx)(o.Highlights, {
                  highlights: p,
                  blockSettings: _
                }), u && (0, r.jsx)(ee, {
                  id: "order",
                  ...u
                }), m && (0, r.jsx)(L, {
                  id: "relatedLinks",
                  title: m?.title,
                  buttons: m?.buttons
                }), a && (0, r.jsx)(n.Rating, {
                  id: "rating",
                  titleSlug: a
                })]
              })]
            })
          })
        }
    },
    4160: (e, a, t) => {
      t.d(a, {
        Z: () => i
      });
      const n = {
          ps3: "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/c362395c2a7ba52d8e93.svg",
          ps4: "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/399e4fadd28201f041fe.svg",
          xbox: "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/96b3858c446374dbe3a1.svg",
          xboxone: "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3852a2c6a70d09be710a.svg",
          switch: "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/fc5864f34c72e5763bea.svg",
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3ab3afe4e696bde1c015.svg",
          play: "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3ffdb1e004aa0d8bde9d.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/e17029ee821cf4c19a4b.svg",
          default: ""
        },
        i = e => n[e] || null
    },
    8711: (e, a, t) => {
      t.d(a, {
        LU: () => l.Z,
        sY: () => d,
        Ws: () => i,
        NE: () => r
      });
      var n = t(1570);
      const i = (0, n.createDevLocaleHook)({
        us: {
          legacy_header_cta_href_reddeadredemption: "./?section=order"
        }
      });
      var s = t(4859);
      const o = (0, s.makeVar)({
          brand: null,
          headerHidden: !1
        }),
        c = (e, a) => o({
          ...o(),
          [e]: a
        }),
        r = () => {
          const e = (0, s.useReactiveVar)(o);
          return {
            setState: c,
            state: e
          }
        };
      var l = t(4160);
      const d = (0, n.defineMessages)({
        legacy_header_cta_label_reddeadredemption: {
          id: "legacy_header_cta_label_reddeadredemption",
          description: "Label for /reddeadredemption header CTA",
          defaultMessage: "Buy Now"
        }
      })
    }
  }
]);