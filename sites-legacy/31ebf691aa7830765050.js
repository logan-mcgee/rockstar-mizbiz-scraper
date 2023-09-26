"use strict";
(self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [492], {
    9878: (e, a, t) => {
      t.d(a, {
        Pj: () => l,
        jm: () => m,
        vU: () => n.vU,
        YB: () => i.Z
      });
      var n = t(5217),
        i = t(1112),
        s = t(289),
        o = t(4484);

      function c(e) {
        const a = e.split(/[-_]/);
        return a[a.length - 1] = a[a.length - 1].toLowerCase(), a
      }
      var r = t(6160);
      const l = e => {
        let {
          locales: a,
          lang: t,
          children: n
        } = e;
        const i = (0, s.useMemo)((() => c(t)), [t]),
          l = (0, s.useMemo)((() => function(e, a) {
            return e?.[a] ?? {}
          }(a, i[1])), [t, a]);
        return (0, r.jsx)(o.Z, {
          messages: l,
          locale: i[0],
          defaultLocale: "en",
          children: n
        }, i[0])
      };
      var d = t(3657);
      const m = e => {
        if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
        return () => {
          const a = (0, d.useLocale)(),
            t = (0, s.useMemo)((() => c(a)), [a]);
          return e?.[t[1]] ?? e.us
        }
      }
    },
    8739: (e, a, t) => {
      t.d(a, {
        Z: () => te
      });
      var n = t(8976),
        i = t(9878),
        s = t(2286),
        o = t.n(s),
        c = t(6573),
        r = t(289),
        l = t(6160);
      const d = (0, r.createContext)(void 0),
        m = e => {
          let {
            children: a
          } = e;
          const [t, n] = (0, r.useState)([]), i = e => {
            n(e)
          }, s = (0, r.useMemo)((() => ({
            collections: t,
            updateGalleryCollections: i
          })), [t]);
          return (0, l.jsx)(d.Provider, {
            value: s,
            children: a
          })
        };
      var g = t(4224),
        f = t.n(g),
        u = t(9542),
        b = t(6711),
        _ = t(4933);
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
        h = n.framer.withFadeIn((e => {
          let {
            title: a = "",
            headerLogo: t,
            body: i,
            footnote: s,
            image: o,
            videoId: c,
            customHeaderFont: d,
            setVideoAsDefault: m,
            large: g = !1,
            image_on_right: h = !1,
            style: v = {},
            className: x = ""
          } = e;
          const {
            track: k
          } = (0, b.useGtmTrack)(), {
            ref: y,
            inView: j
          } = (0, _.YD)({
            threshold: .6
          }), [C, N] = (0, r.useState)(!1), [w, I] = (0, r.useState)(!1), L = d ? p[d] : "", S = t?._memoq?.maxHeight || "auto", P = t?._memoq?.maxWidth || "auto";
          return (0, r.useEffect)((() => {
            I(t?.setLogoAsDefault || !1)
          }), []), (0, r.useEffect)((() => {
            j && !C && (k({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `image text group - ${a}`.toLowerCase()
            }), N(!0))
          }), [j]), (0, l.jsxs)("div", {
            className: (0, u.classList)(p.container, g ? p.large : "", h ? p.flipped : "", o ? "" : p.singleColumn, x),
            style: v,
            ref: y,
            children: [m && c ? (0, l.jsx)(f(), {
              className: p.imgVideo,
              autoplay: !1,
              id: c
            }) : o ? (o.alt = o?.alt ?? o?._memoq?.alt ?? "", (0, l.jsx)(n.MultiSourceImage, {
              className: p.imgVideo,
              image: o
            })) : null, (0, l.jsx)("div", {
              className: p.content,
              children: (0, l.jsxs)("div", {
                className: p.text,
                children: [(() => {
                  const e = t?.image,
                    i = t?.image?.alt ?? t?.image?._memoq?.alt,
                    s = a.replace(/\s+/g, "-").toLowerCase();
                  return t && (t.image.alt = i), w && e ? (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(n.MultiSourceImage, {
                      className: p.headerLogo,
                      image: e,
                      imageStyle: {
                        maxHeight: S,
                        maxWidth: P,
                        margin: 0
                      }
                    }), (0, l.jsx)("h3", {
                      id: `${s}-section`,
                      style: {
                        display: "none"
                      },
                      children: a
                    })]
                  }) : a && (0, l.jsx)("h3", {
                    className: [p.title, L].join(" "),
                    tabIndex: 0,
                    children: a
                  })
                })(), i ? (0, l.jsxs)(l.Fragment, {
                  children: [(0, l.jsx)("div", {
                    className: p.blurb,
                    dangerouslySetInnerHTML: {
                      __html: ($ = i, $ ? $.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
                    }
                  }), s && (0, l.jsx)("small", {
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
        v = {
          featureBlock: "_560823421a0f2e0aa6b191a625e9878823b3",
          featuresContainer: "_560823421a0f2e0ac9cad8199db99d807319"
        },
        x = e => {
          let {
            className: a,
            id: t,
            features: n
          } = e;
          return n.length ? (0, l.jsx)("section", {
            className: [v.featureBlock, a ?? ""].filter((e => e)).join(" "),
            id: t ?? "",
            children: (0, l.jsx)("div", {
              className: v.featuresContainer,
              children: n.map((e => (0, l.jsx)(h, {
                ...e
              }, e?.key)))
            })
          }) : null
        };
      var k = t(6780);

      function y(e) {
        return e ? {
          "--gradient-start-color": C(j(e?.startColor), e?.startOpacity),
          "--gradient-end-color": C(j(e?.endColor), e?.endOpacity)
        } : {}
      }

      function j(e) {
        return e && /rgb\(\d\d?\d?,\s?\d\d?\d?,\s?\d\d?\d?\)/.test(e) ? e.replace(/r|g|b|a|\(|\)|/g, "").split(/,\s?/) : []
      }

      function C(e, a) {
        return e?.length ? `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${a?.length?a:1})` : ""
      }

      function N(e) {
        return e && e.replace(/\D/g, "") || "0"
      }
      const w = {
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
        I = e => {
          let {
            title: a,
            subtitle: t,
            cardType: i,
            textColor: s,
            link: o,
            images: c,
            justifyContentHorizontally: r,
            justifyContentVertically: d,
            gradient: m
          } = e;
          const {
            track: g
          } = (0, b.useGtmTrack)(), f = (0, u.useGetCdnSource)(c?.mobile?.image?.full_src ?? c?.mobile?.image), _ = (0, u.useGetCdnSource)(c?.desktop?.image?.full_src ?? f), p = {
            "--aspect-ratio-mobile": c?.mobile?.aspectRatio ?? "",
            "--aspect-ratio-desktop": c?.desktop?.aspectRatio ?? "",
            justifyContent: r ?? ""
          }, h = {
            justifyContent: d ?? ""
          }, v = {
            color: s ?? "",
            fontWeight: 700
          }, x = {
            ...y(m),
            "--gradient-end-percentage": `${N(m?.endPercentage)}%`,
            "--gradient-angle": `${N(m?.angle)}deg`
          }, j = {
            mobile: f,
            desktop: _,
            alt: a
          };
          return (0, l.jsxs)(k.NavLink, {
            to: o ?? "",
            className: w.button,
            style: {
              ...p,
              ...x
            },
            onClick: () => {
              g({
                event: "card_click",
                event_action: "click",
                event_category: "card",
                event_label: a?.toLowerCase()
              })
            },
            children: [("audio" === i || "video" === i) && (0, l.jsx)("div", {
              className: w.cardIcon
            }), (e => {
              switch (e) {
                case "audio":
                  return (0, l.jsx)("div", {
                    role: "button",
                    className: w.cardPlayIcon,
                    tabIndex: 0,
                    "aria-label": "Play Audio"
                  });
                case "video":
                  return (0, l.jsx)("div", {
                    role: "button",
                    className: w.cardPlayIcon,
                    tabIndex: 0,
                    "aria-label": "Play Video"
                  });
                case "artwork":
                  return (0, l.jsx)("div", {
                    role: "button",
                    className: w.cardArtworkIcon,
                    tabIndex: 0,
                    "aria-label": "View Artwork"
                  });
                case "download":
                  return (0, l.jsx)("div", {
                    role: "button",
                    className: w.cardDownloadIcon,
                    tabIndex: 0,
                    "aria-label": "Download Content"
                  });
                case "shopping-cart":
                  return (0, l.jsx)("div", {
                    role: "button",
                    className: w.cardShopIcon,
                    tabIndex: 0,
                    "aria-label": "Shop"
                  });
                default:
                  return null
              }
            })(i), (0, l.jsx)(n.MultiSourceImage, {
              className: w.imageBackground,
              image: j
            }), (0, l.jsxs)("div", {
              className: w.textContainer,
              style: h,
              children: [(0, l.jsx)("p", {
                className: w.text,
                style: v,
                children: (0, l.jsx)("span", {
                  children: t
                })
              }), (0, l.jsx)("h3", {
                className: w.heading,
                style: v,
                children: (0, l.jsx)("span", {
                  children: a
                })
              })]
            })]
          })
        },
        L = {
          relatedLinksContainer: "_560823421a0f2e0ace5eaa4eefb9d018642f",
          buttonContainer: "_560823421a0f2e0ac6e72db53b44166b396b"
        },
        S = e => {
          let {
            title: a,
            id: t,
            buttons: n = [],
            className: i
          } = e;
          const {
            track: s
          } = (0, b.useGtmTrack)(), {
            ref: o,
            inView: c
          } = (0, _.YD)({
            threshold: .6
          }), [d, m] = (0, r.useState)(!1);
          return (0, r.useEffect)((() => {
            c && !d && (s({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `related links group - ${a}`.toLowerCase()
            }), m(!0))
          }), [c]), n?.length ? (0, l.jsxs)("section", {
            className: [L.relatedLinksContainer, i ?? ""].filter((e => e)).join(" "),
            id: t ?? "",
            ref: o,
            children: [(0, l.jsx)("h3", {
              children: a
            }), (0, l.jsx)("div", {
              className: L.buttonContainer,
              children: n.map((e => (0, l.jsx)(I, {
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
      var P = t(1244),
        $ = t(4160);
      const B = {
          tabControl: "_560823421a0f2e0aa14cf0c1eb166653f8c5",
          tabButton: "_560823421a0f2e0ac3a28a754664659a6995",
          tabIconWrapper: "_560823421a0f2e0add1ad4dd4fe72996cd90",
          tabIcon: "_560823421a0f2e0ad12571bbf42e604a16e7",
          tabLabel: "_560823421a0f2e0acdf3ae5032b44d881977",
          tabBackground: "_560823421a0f2e0ab86febf8db354327a2ae",
          tabControlContainer: "_560823421a0f2e0aac86249740a635ec921a"
        },
        E = e => {
          let {
            data: a,
            onClick: t,
            activeTab: n
          } = e;
          const {
            track: i
          } = (0, b.useGtmTrack)();
          return (0, l.jsx)("div", {
            className: B.tabControlContainer,
            children: (0, l.jsx)("div", {
              className: B.tabControl,
              children: a?.filter((e => {
                let {
                  isHidden: a
                } = e;
                return 1 !== a
              }))?.map(((e, s) => (0, l.jsxs)(P.E.button, {
                type: "button",
                className: [B.tabButton, s === n ? B.activeTabButton : ""].join(" "),
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
                children: [e?.platform ? (0, l.jsx)("span", {
                  className: B.tabIconWrapper,
                  children: (0, l.jsx)("img", {
                    className: [B.tabIcon].join(" "),
                    src: (0, $.Z)(e?.platform) || "",
                    alt: e?.platform
                  })
                }) : (0, l.jsx)("span", {
                  className: B.tabLabel,
                  children: e?.name?.toUpperCase()
                }), s === n ? (0, l.jsx)(P.E.div, {
                  className: B.tabBackground,
                  layoutId: "tabBackground"
                }) : null]
              }, `pill-tab-${e?.name}-${e?.key}`)))
            })
          })
        };
      var G = t(2280),
        T = t(7817);
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
          return (0, l.jsxs)("div", {
            className: W.modalControls,
            children: [(0, l.jsx)("button", {
              type: "button",
              "aria-label": "Previous",
              className: W.modalPrevious,
              onClick: a,
              disabled: n
            }), (0, l.jsx)("button", {
              type: "button",
              "aria-label": "Next",
              className: W.modalNext,
              onClick: t,
              disabled: i
            })]
          })
        },
        D = e => {
          let {
            images: a,
            selectedImage: t,
            onClose: i
          } = e;
          const [s, o] = (0, r.useState)(!1), [c, d] = (0, r.useState)(!1), [m, g] = (0, r.useState)(a.findIndex((e => e?.image?.sources === t?.image?.sources))), {
            track: f
          } = (0, b.useGtmTrack)(), u = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, _ = e => {
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
          }, p = (0, r.useCallback)((() => {
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
          }), [m, a.length]), h = (0, r.useCallback)((() => {
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
          return (0, r.useEffect)((() => {
            f({
              event: "trackPageview",
              view_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [m]), (0, r.useEffect)((() => {
            const e = e => {
              "ArrowLeft" === e.key ? h() : "ArrowRight" === e.key ? p() : "Escape" === e.key && (f({
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
          }), [m, h, p, i]), (0, l.jsx)(T.M, {
            children: (0, l.jsx)(P.E.div, {
              role: "presentation",
              className: W.overlay,
              onClick: _,
              "aria-label": "dismiss modal",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: u,
              children: (0, l.jsx)("dialog", {
                role: "presentation",
                id: "masonryDialog",
                className: W.masonryDialog,
                onClick: e => _(e),
                children: (0, l.jsxs)("div", {
                  className: W.masonryDialogWrapper,
                  children: [(0, l.jsxs)(P.E.div, {
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
                    children: [(0, l.jsx)(M, {
                      navigatePrevious: h,
                      navigateNext: p,
                      prevDisabled: s,
                      nextDisabled: c
                    }), (0, l.jsx)("button", {
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
                  }), (0, l.jsx)(P.E.div, {
                    className: W.modal,
                    initial: {
                      opacity: 0,
                      scale: .5
                    },
                    animate: {
                      opacity: 1,
                      scale: 1
                    },
                    transition: u,
                    children: (0, l.jsx)(n.MultiSourceImage, {
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
            handleImageClick: i
          } = e;
          const s = (0, u.useImageParser)(a?.image);
          return (0, l.jsx)(P.E.div, {
            className: "_560823421a0f2e0ac39603540e530da252a4",
            onClick: () => i(a),
            variants: t,
            children: (0, l.jsx)(n.SrcsetImage, {
              imageUrl: s?.src?.desktop,
              className: "_560823421a0f2e0aa3c47b1efa37c0537d62",
              alt: s?.alt,
              sizes: [320, 480, 768, 1024, 1440],
              style: {
                width: "100%",
                height: "auto"
              }
            })
          }, `grid-item-${a?.key}`)
        },
        V = e => {
          let {
            images: a = [],
            gallery: t = []
          } = e;
          const [n, i] = (0, r.useState)(null), {
            track: s
          } = (0, b.useGtmTrack)(), o = t.flat(2), c = e => {
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
          return (0, l.jsx)("div", {
            className: "_560823421a0f2e0af53086e19b65dea94139",
            children: (0, l.jsxs)(P.E.div, {
              id: "_560823421a0f2e0ab7761d5ab757b560bdbb",
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
              children: [a?.map((e => (0, l.jsx)(H, {
                image: e,
                item: d,
                handleImageClick: c
              }, e?.key))), n && (0, G.createPortal)((0, l.jsx)(D, {
                images: o,
                selectedImage: n,
                onClose: () => {
                  i(null)
                }
              }), document.body)]
            })
          })
        },
        z = e => {
          let {
            image: a,
            item: t,
            handleImageClick: i
          } = e;
          const s = (0, u.useImageParser)(a?.image);
          return (0, l.jsx)(P.E.div, {
            className: "_560823421a0f2e0aee443f71ef6bbd40a62a",
            onClick: () => i(a),
            variants: t,
            initial: "hidden",
            animate: "show",
            children: (0, l.jsx)(n.SrcsetImage, {
              imageUrl: s?.src?.desktop,
              className: "_560823421a0f2e0ae922d8c04b65ddf8580f",
              alt: s?.alt,
              sizes: [320, 480, 768, 1024, 1440]
            })
          }, `single-item-${a.key}`)
        },
        A = e => {
          let {
            images: a = [],
            gallery: t = []
          } = e;
          const [n, i] = (0, r.useState)(null), {
            track: s
          } = (0, b.useGtmTrack)(), o = t.flat(2), c = e => {
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
          return (0, l.jsxs)("div", {
            className: "_560823421a0f2e0aa02b1ecedb79904f1a1d",
            children: [a?.map((e => (0, l.jsx)(z, {
              image: e,
              item: d,
              handleImageClick: c
            }, e?.key))), n && (0, G.createPortal)((0, l.jsx)(D, {
              images: o,
              selectedImage: n,
              onClose: () => {
                i(null)
              }
            }), document.body)]
          })
        },
        q = "_560823421a0f2e0aa70d86a80d7a9e36206c",
        U = e => {
          let {
            sectionsPerPage: a,
            totalSections: t,
            currentPage: n,
            previousPage: i,
            nextPage: s,
            paginationPosition: o
          } = e;
          const c = [],
            r = Math.ceil(t / a),
            d = {
              "--pagination-position": `${o}`
            };
          for (let e = 1; e <= Math.ceil(t / a); e++) c.push(e);
          return r > 1 && (0, l.jsx)("div", {
            className: "_560823421a0f2e0aab5f3ea9d1452cf0e6d1",
            style: d,
            children: (0, l.jsxs)("div", {
              className: "_560823421a0f2e0abc936877a3779c73b08c",
              style: {
                padding: 0
              },
              children: [(0, l.jsx)("div", {
                className: q,
                children: (0, l.jsx)("div", {
                  role: "button",
                  onClick: i,
                  className: "_560823421a0f2e0ae6758143538969405710",
                  "aria-label": "Previous Page",
                  "aria-hidden": "true",
                  tabIndex: 0
                })
              }), (0, l.jsxs)("div", {
                className: "_560823421a0f2e0adea8cec8afdc7a279ca9",
                children: [(0, l.jsx)("span", {
                  children: n
                }), (0, l.jsx)("span", {
                  className: "_560823421a0f2e0aea51e1438657270f8398"
                }), (0, l.jsx)("span", {
                  children: r
                })]
              }), (0, l.jsx)("div", {
                className: q,
                children: (0, l.jsx)("div", {
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
        F = {
          tabControl: "_560823421a0f2e0ae217507ffc174e416254",
          galleryWrapper: "_560823421a0f2e0aea74189592c1f9ba14ee",
          gridItemWrapper: "_560823421a0f2e0ae844fb1ec0776201c780",
          noImagesContainer: "_560823421a0f2e0ac26286482b7cb0417425",
          noImages: "_560823421a0f2e0ac31d48e858de2c00f517",
          unsupportedSection: "_560823421a0f2e0abcd93e12b3f607e10ee3",
          heading: "_560823421a0f2e0add5080878c99b45c43a0"
        },
        R = () => (0, l.jsx)("div", {
          className: F.noImagesContainer,
          children: (0, l.jsx)("div", {
            className: F.noImages,
            children: (0, l.jsx)("div", {
              className: F.heading,
              children: (0, l.jsxs)("span", {
                className: F.text,
                children: [(0, l.jsx)("h3", {
                  children: "Unsupported Section Type"
                }), (0, l.jsx)("p", {
                  children: "This section type is not supported."
                })]
              })
            })
          })
        }),
        Y = e => {
          let {
            sections: a = [],
            paginationSettings: t
          } = e;
          const n = [],
            [i] = (0, r.useState)(t?.sectionsPerPage || 4),
            [s, o] = (0, r.useState)(1),
            c = s * i,
            d = c - i,
            m = a.slice(d, c);
          return 0 === a?.length ? (0, l.jsx)("div", {
            className: F.gallerWrapper,
            children: (0, l.jsx)("div", {
              className: F.noImages,
              children: (0, l.jsx)("div", {
                className: F.heading,
                children: (0, l.jsx)("span", {
                  className: F.text,
                  children: "No images available"
                })
              })
            })
          }) : (a?.map((e => n.push(e?.images))), (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(P.E.div, {
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
                if ("1x1" === e?.type) t = V;
                else {
                  if ("2x2" !== e?.type) return (0, l.jsx)(R, {}, `unsupported-section-${a}`);
                  t = A
                }
                return (0, l.jsx)(t, {
                  images: e?.images,
                  gallery: n
                }, `grid-section-${e?.type}-${a})}`)
              }))
            }), t?.paginationEnabled && (0, l.jsx)(U, {
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
          }))
        },
        Z = {
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
        O = n.framer.withFadeIn((e => {
          let {
            imageGallery: a
          } = e;
          const {
            track: t
          } = (0, b.useGtmTrack)(), {
            ref: n,
            inView: i
          } = (0, _.YD)({
            threshold: .6
          }), [s, o] = (0, r.useState)(!1), [c, m] = (0, r.useState)(0), g = a?.customHeaderFont ? Z[a?.customHeaderFont] : "", {
            collections: f,
            updateGalleryCollections: u
          } = (() => {
            const e = (0, r.useContext)(d);
            if (!e) throw new Error("useImageGalleryContext must be used within an ImageGalleryProvider");
            return e
          })();
          return u(a?.collections), (0, r.useEffect)((() => {
            i && !s && (t({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `image gallery - ${f[c]?.name}`.toLowerCase()
            }), o(!0))
          }), [i]), (0, l.jsx)("section", {
            className: Z.sectionWrapper,
            ref: n,
            children: (0, l.jsxs)("div", {
              className: Z.sectionContent,
              children: [(0, l.jsxs)("div", {
                className: Z.actionBar,
                children: [(0, l.jsx)("h3", {
                  className: [Z.heading, g].join(" "),
                  children: a?.title
                }), (0, l.jsx)(E, {
                  data: f,
                  onClick: e => {
                    m(e)
                  },
                  activeTab: c
                })]
              }), f[c]?.sections && (0, l.jsx)(Y, {
                sections: f[c]?.sections,
                paginationSettings: a?.paginationSettings
              }, f[c]?.name)]
            })
          })
        }));
      var X = t(9929),
        J = t(7666);
      const K = {
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
        Q = e => {
          let {
            id: a,
            title: t,
            body: i,
            backgroundImageAndMask: s,
            expandingButton: o,
            image: c
          } = e;
          const [d] = (0, k.useSearchParams)(), m = (0, X.useLocale)(), g = c?.sources?.[m] ?? c?.sources?.en_us, f = g?.mobile ?? g?.desktop, {
            track: p
          } = (0, b.useGtmTrack)(), {
            ref: h,
            inView: v,
            entry: x
          } = (0, _.YD)({
            threshold: .6
          }), [y, j] = (0, r.useState)(!1), [C, N] = (0, r.useState)(!1), w = o?.buttons, I = [], L = (0, u.useGetCdnSource)(f ?? null), S = (0, u.useGetCdnSource)(s?.backgroundImage?.mobile), $ = (0, u.useGetCdnSource)(s?.backgroundImage?.desktop ?? S), B = (0, u.useGetCdnSource)(s?.backgroundImageMask?.mobile), E = (0, u.useGetCdnSource)(s?.backgroundImageMask?.desktop ?? B), G = s?.backgroundImage?._memoq?.backgroundAttachment || "", T = s?.backgroundImage?._memoq?.backgroundClip || "", W = s?.backgroundImage?._memoq?.backgroundColor || "", M = s?.backgroundImage?._memoq?.backgroundOrigin || "", D = s?.backgroundImage?._memoq?.backgroundPosition || "", H = s?.backgroundImage?._memoq?.backgroundRepeat || "", V = s?.backgroundImage?._memoq?.backgroundSize || "", z = {
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
          return (0, r.useEffect)((() => {
            x?.target && (0, X.detectIfWeShouldAnchorSomewhere)()
          }), [d.get("section"), x?.target]), (0, r.useEffect)((() => {
            v && !y && (p({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `buy now - ${t}`.toLowerCase()
            }), j(!0))
          }), [v]), (0, l.jsx)(P.E.div, {
            className: K.fob,
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
            children: (0, l.jsx)("div", {
              className: K.container,
              id: a ?? "",
              ref: h,
              style: {
                "--background-image-desktop": `url(${$})`,
                "--background-image-mobile": `url(${S})`,
                "--image-mask-desktop": `url(${E})`,
                "--image-mask-mobile": `url(${B})`,
                "--background-attachment": G,
                "--background-clip": T,
                "--background-color": W,
                "--background-origin": M,
                "--background-position": D,
                "--background-repeat": H,
                "--background-size": V
              },
              children: (0, l.jsxs)("div", {
                className: K.inner,
                children: [(0, l.jsx)("div", {
                  className: K.imgWrapper,
                  children: L && (0, l.jsx)("img", {
                    src: L,
                    alt: "Red Dead Redemption"
                  })
                }), (0, l.jsxs)("div", {
                  className: K.content,
                  children: [(0, l.jsxs)("div", {
                    className: K.titleAndCopy,
                    children: [(0, l.jsx)("h2", {
                      className: K.fobTitle,
                      children: t
                    }), (0, l.jsx)("div", {
                      className: K.description,
                      dangerouslySetInnerHTML: {
                        __html: (A = i, A ? A.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
                      }
                    })]
                  }), (0, l.jsx)("div", {
                    className: [K.platformLogos, C ? K.togglePlatformLogos : ""].join(" "),
                    children: w?.map((e => {
                      const {
                        key: a,
                        platform: t
                      } = e, n = (0, J.LU)(t) || "";
                      return t ? (0, l.jsx)("div", {
                        children: (0, l.jsx)("img", {
                          className: [K.platformIcon].join(" "),
                          src: n,
                          alt: t
                        })
                      }, `${t}-${a}`) : null
                    }))
                  }), o?.buttons?.length ? (0, l.jsx)(P.E.div, {
                    className: [K.expandingButtonWrapper, K.fobExpandingButton].join(" "),
                    variants: z,
                    onClick: () => {
                      N((e => !e))
                    },
                    children: (0, l.jsx)(n.ExpandingPlatformButton, {
                      buttonText: o?.label,
                      platformsAndLinks: o?.buttons,
                      trackingType: "select_platform",
                      trackingParent: "fob",
                      children: (0, l.jsx)(P.E.div, {
                        variants: z,
                        style: {
                          marginBottom: 0
                        },
                        children: (0, l.jsx)(n.ButtonGroup, {
                          buttons: I,
                          className: K.buttonGroup
                        })
                      })
                    })
                  }) : (0, l.jsx)(P.E.div, {
                    variants: z,
                    children: (0, l.jsx)(n.ButtonGroup, {
                      buttons: I,
                      className: K.buttonGroup
                    })
                  })]
                })]
              })
            })
          });
          var A
        };
      var ee = t(358);
      const ae = {
          legacyPageTemplate: "_560823421a0f2e0afe87e3fc1302eca7e415",
          maxWidthContainer: "_560823421a0f2e0afeec0fc92574e44f6146",
          contentWrapper: "_560823421a0f2e0acdc251fca60ca7a177ac",
          rdrUltra: "_560823421a0f2e0af9f7071451bc7de89988",
          universalCyrillic: "_560823421a0f2e0afe90f13c9d95ce1d65b7"
        },
        te = e => {
          let {
            titleSlug: a,
            headerFont: t,
            hero: s,
            featureBlockBackgroundImageGroup: r,
            features: d,
            relatedLinks: g,
            imageGallery: f,
            highlightCollection: u,
            fob: b
          } = e;
          const _ = (0, i.YB)(),
            p = t ? ae[t] : "";
          return (0, l.jsx)(m, {
            children: (0, l.jsxs)("div", {
              className: [ae.legacyPageTemplate, p].join(" "),
              children: [s && (0, l.jsx)(o(), {
                animated: s.animated,
                content: s.content,
                id: "hero",
                images: s.images,
                shardsSection: s.shardsSection,
                subHero: s.subHero,
                type: s.type
              }), d?.length && (0, l.jsx)(x, {
                id: "features",
                features: d,
                backgroundImageGroup: r
              }), (0, l.jsxs)("div", {
                className: ae.maxWidthContainer,
                children: [f?.collections?.length && (0, l.jsx)(O, {
                  id: "imageGallery",
                  imageGallery: f
                }), u?.highlights && (0, l.jsxs)("div", {
                  className: ae.contentWrapper,
                  children: [(0, l.jsx)("h3", {
                    className: ae.heading,
                    children: _.formatMessage(ee.Z.highlights_title_std)
                  }), (0, l.jsx)(c.Highlights, {
                    highlights: u?.highlights
                  })]
                }), b && (0, l.jsx)(Q, {
                  id: "order",
                  ...b
                }), g && (0, l.jsx)(S, {
                  id: "relatedLinks",
                  title: g?.title,
                  buttons: g?.buttons
                }), a && (0, l.jsx)(n.Rating, {
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
          ps3: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/c362395c2a7ba52d8e93.svg",
          ps4: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/399e4fadd28201f041fe.svg",
          xbox: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/96b3858c446374dbe3a1.svg",
          xboxone: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3852a2c6a70d09be710a.svg",
          switch: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/fc5864f34c72e5763bea.svg",
          xbox360: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3ab3afe4e696bde1c015.svg",
          play: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3ffdb1e004aa0d8bde9d.svg",
          questionMark: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/e17029ee821cf4c19a4b.svg",
          default: ""
        },
        i = e => n[e] || null
    },
    7666: (e, a, t) => {
      t.d(a, {
        LU: () => r.Z,
        sY: () => l.Z,
        Ws: () => n,
        NE: () => c
      });
      const n = (0, t(9878).jm)({
        us: {
          legacy_header_cta_href_reddeadredemption: "./?section=order"
        }
      });
      var i = t(4859);
      const s = (0, i.makeVar)({
          brand: null,
          headerHidden: !1
        }),
        o = (e, a) => s({
          ...s(),
          [e]: a
        }),
        c = () => {
          const e = (0, i.useReactiveVar)(s);
          return {
            setState: o,
            state: e
          }
        };
      var r = t(4160),
        l = t(358)
    },
    358: (e, a, t) => {
      t.d(a, {
        Z: () => n
      });
      const n = (0, t(9878).vU)({
        legacy_header_cta_label_reddeadredemption: {
          id: "legacy_header_cta_label_reddeadredemption"
        },
        highlights_title_std: {
          id: "highlights_title_std"
        }
      })
    }
  }
]);
//# sourceMappingURL=31ebf691aa7830765050.js.map