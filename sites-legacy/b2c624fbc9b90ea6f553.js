"use strict";
(self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [59], {
    7259: (e, a, t) => {
      t.d(a, {
        Z: () => Y
      });
      var n = t(8976),
        i = t(2286),
        o = t.n(i),
        s = t(289),
        r = t(4224),
        c = t.n(r),
        l = t(9542),
        d = t(6711),
        m = t(4933);
      const g = {
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
      };
      var f = t(6160);
      const u = n.framer.withFadeIn((e => {
          let {
            title: a = "",
            headerLogo: t,
            body: i,
            footnote: o,
            image: r,
            videoId: u,
            customHeaderFont: b,
            setVideoAsDefault: _,
            large: p = !1,
            image_on_right: h = !1,
            style: v = {},
            className: k = ""
          } = e;
          const {
            track: y
          } = (0, d.useGtmTrack)(), {
            ref: x,
            inView: j
          } = (0, m.YD)({
            threshold: .6
          }), [C, N] = (0, s.useState)(!1), [w, L] = (0, s.useState)(!1), I = b ? g[b] : "", S = t?._memoq?.maxHeight || "auto", $ = t?._memoq?.maxWidth || "auto";
          return (0, s.useEffect)((() => {
            L(t?.setLogoAsDefault || !1)
          }), []), (0, s.useEffect)((() => {
            j && !C && (y({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `image text group - ${a}`.toLowerCase()
            }), N(!0))
          }), [j]), (0, f.jsxs)("div", {
            className: (0, l.classList)(g.container, p ? g.large : "", h ? g.flipped : "", r ? "" : g.singleColumn, k),
            style: v,
            ref: x,
            children: [_ && u ? (0, f.jsx)(c(), {
              className: g.imgVideo,
              autoplay: !1,
              id: u
            }) : r ? (r.alt = r?.alt ?? r?._memoq?.alt ?? "", (0, f.jsx)(n.MultiSourceImage, {
              className: g.imgVideo,
              image: r
            })) : null, (0, f.jsx)("div", {
              className: g.content,
              children: (0, f.jsxs)("div", {
                className: g.text,
                children: [(() => {
                  const e = t?.image,
                    i = t?.image?.alt ?? t?.image?._memoq?.alt,
                    o = a.replace(/\s+/g, "-").toLowerCase();
                  return t && (t.image.alt = i), w && e ? (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)(n.MultiSourceImage, {
                      className: g.headerLogo,
                      image: e,
                      imageStyle: {
                        maxHeight: S,
                        maxWidth: $,
                        margin: 0
                      }
                    }), (0, f.jsx)("h3", {
                      id: `${o}-section`,
                      style: {
                        display: "none"
                      },
                      children: a
                    })]
                  }) : a && (0, f.jsx)("h3", {
                    className: [g.title, I].join(" "),
                    tabIndex: 0,
                    children: a
                  })
                })(), i ? (0, f.jsxs)(f.Fragment, {
                  children: [(0, f.jsx)("div", {
                    className: g.blurb,
                    dangerouslySetInnerHTML: {
                      __html: (B = i, B ? B.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
                    }
                  }), o && (0, f.jsx)("small", {
                    className: g.footnote,
                    dangerouslySetInnerHTML: {
                      __html: o
                    }
                  })]
                }) : ""]
              })
            })]
          });
          var B
        })),
        b = {
          featureBlock: "_560823421a0f2e0aa6b191a625e9878823b3",
          featuresContainer: "_560823421a0f2e0ac9cad8199db99d807319"
        },
        _ = e => {
          let {
            className: a,
            id: t,
            features: n
          } = e;
          return n.length ? (0, f.jsx)("section", {
            className: [b.featureBlock, a ?? ""].filter((e => e)).join(" "),
            id: t ?? "",
            children: (0, f.jsx)("div", {
              className: b.featuresContainer,
              children: n.map((e => (0, f.jsx)(u, {
                ...e
              }, e?.key)))
            })
          }) : null
        };
      var p = t(6780);
      const h = {
        button: "_560823421a0f2e0ae829b15c6f832e481776",
        imageBackground: "_560823421a0f2e0ad5f6cb2b591ae76d3cc3",
        textContainer: "_560823421a0f2e0abf78911e90c4f90fef85"
      };

      function v(e) {
        return e ? {
          "--gradient-start-color": y(k(e?.startColor), e?.startOpacity),
          "--gradient-end-color": y(k(e?.endColor), e?.endOpacity)
        } : {}
      }

      function k(e) {
        return e && /rgb\(\d\d?\d?,\s?\d\d?\d?,\s?\d\d?\d?\)/.test(e) ? e.replace(/r|g|b|a|\(|\)|/g, "").split(/,\s?/) : []
      }

      function y(e, a) {
        return e?.length ? `rgba(${e[0]}, ${e[1]}, ${e[2]}, ${a?.length?a:1})` : ""
      }

      function x(e) {
        return e && e.replace(/\D/g, "") || "0"
      }
      const j = e => {
          let {
            title: a,
            subtitle: t,
            textColor: i,
            link: o,
            images: s,
            justifyContentHorizontally: r,
            justifyContentVertically: c,
            gradient: m
          } = e;
          const {
            track: g
          } = (0, d.useGtmTrack)(), u = (0, l.useGetCdnSource)(s?.mobile?.image?.full_src ?? null), b = (0, l.useGetCdnSource)(s?.desktop?.image?.full_src ?? null), _ = {
            "--aspect-ratio-mobile": s?.mobile?.aspectRatio ?? "",
            "--aspect-ratio-desktop": s?.desktop?.aspectRatio ?? "",
            justifyContent: r ?? ""
          }, k = {
            justifyContent: c ?? ""
          }, y = {
            color: i ?? "",
            fontWeight: 700
          }, j = {
            ...v(m),
            "--gradient-end-percentage": `${x(m?.endPercentage)}%`,
            "--gradient-angle": `${x(m?.angle)}deg`
          }, C = {
            mobile: u,
            desktop: b,
            alt: a
          };
          return (0, f.jsxs)(p.NavLink, {
            to: o ?? "",
            className: h.button,
            style: {
              ..._,
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
            children: [(0, f.jsx)(n.MultiSourceImage, {
              className: h.imageBackground,
              image: C
            }), (0, f.jsxs)("div", {
              className: h.textContainer,
              style: k,
              children: [(0, f.jsx)("p", {
                className: h.text,
                style: y,
                children: (0, f.jsx)("span", {
                  children: t
                })
              }), (0, f.jsx)("h3", {
                style: y,
                children: (0, f.jsx)("span", {
                  children: a
                })
              })]
            })]
          })
        },
        C = {
          relatedLinksContainer: "_560823421a0f2e0ace5eaa4eefb9d018642f",
          buttonContainer: "_560823421a0f2e0ac6e72db53b44166b396b"
        },
        N = e => {
          let {
            title: a,
            id: t,
            buttons: n = [],
            className: i
          } = e;
          const {
            track: o
          } = (0, d.useGtmTrack)(), {
            ref: r,
            inView: c
          } = (0, m.YD)({
            threshold: .6
          }), [l, g] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            c && !l && (o({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `related links group - ${a}`.toLowerCase()
            }), g(!0))
          }), [c]), n?.length ? (0, f.jsxs)("section", {
            className: [C.relatedLinksContainer, i ?? ""].filter((e => e)).join(" "),
            id: t ?? "",
            ref: r,
            children: [(0, f.jsx)("h3", {
              children: a
            }), (0, f.jsx)("div", {
              className: C.buttonContainer,
              children: n.map((e => (0, f.jsx)(j, {
                title: e?.title,
                subtitle: e?.subtitle,
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
      var w = t(1244),
        L = t(4160);
      const I = {
          tabControl: "_560823421a0f2e0aa14cf0c1eb166653f8c5",
          tabButton: "_560823421a0f2e0ac3a28a754664659a6995",
          tabIconWrapper: "_560823421a0f2e0add1ad4dd4fe72996cd90",
          tabIcon: "_560823421a0f2e0ad12571bbf42e604a16e7",
          tabLabel: "_560823421a0f2e0acdf3ae5032b44d881977",
          tabBackground: "_560823421a0f2e0ab86febf8db354327a2ae",
          tabControlContainer: "_560823421a0f2e0aac86249740a635ec921a"
        },
        S = e => {
          let {
            data: a,
            onClick: t,
            activeTab: n
          } = e;
          const {
            track: i
          } = (0, d.useGtmTrack)();
          return (0, f.jsx)("div", {
            className: I.tabControlContainer,
            children: (0, f.jsx)("div", {
              className: I.tabControl,
              children: a?.map(((e, o) => e.isHidden ? null : (0, f.jsxs)(w.E.button, {
                type: "button",
                className: [I.tabButton, o === n ? I.activeTabButton : ""].join(" "),
                onClick: () => (e => {
                  i({
                    event: "component_tab_click",
                    event_category: "component",
                    event_action: "tab_click",
                    event_label: `image gallery - ${a[e]?.name} tab clicked`.toLowerCase(),
                    text: a[e].name ? a[e]?.name.toLowerCase() : void 0,
                    element_placement: "image gallery"
                  }), t && t(e)
                })(o),
                "aria-label": `View ${e?.name} Screens`,
                children: [e?.platform ? (0, f.jsx)("span", {
                  className: I.tabIconWrapper,
                  children: (0, f.jsx)("img", {
                    className: [I.tabIcon].join(" "),
                    src: (0, L.Z)(e?.platform) || "",
                    alt: e?.platform
                  })
                }) : (0, f.jsx)("span", {
                  className: I.tabLabel,
                  children: e?.name?.toUpperCase()
                }), o === n ? (0, f.jsx)(w.E.div, {
                  className: I.tabBackground,
                  layoutId: "tabBackground"
                }) : null]
              }, `pill-tab-${e?.name}-${e?.key}`)))
            })
          })
        };
      var $ = t(2280),
        B = t(7817);
      const T = {
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
        E = e => {
          let {
            navigatePrevious: a,
            navigateNext: t,
            prevDisabled: n,
            nextDisabled: i
          } = e;
          return (0, f.jsxs)("div", {
            className: T.modalControls,
            children: [(0, f.jsx)("button", {
              type: "button",
              "aria-label": "Previous",
              className: T.modalPrevious,
              onClick: a,
              disabled: n
            }), (0, f.jsx)("button", {
              type: "button",
              "aria-label": "Next",
              className: T.modalNext,
              onClick: t,
              disabled: i
            })]
          })
        },
        G = e => {
          let {
            images: a,
            selectedImage: t,
            onClose: i
          } = e;
          const [o, r] = (0, s.useState)(!1), [c, l] = (0, s.useState)(!1), [m, g] = (0, s.useState)(a.findIndex((e => e?.image?.sources === t?.image?.sources))), {
            track: u
          } = (0, d.useGtmTrack)(), b = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, _ = e => {
            if (!e.currentTarget) return;
            const t = e.currentTarget.getBoundingClientRect();
            (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && (u({
              event: "modal_close",
              event_action: "close",
              event_category: "modal",
              event_label: "image gallery modal - ".toLowerCase(),
              card_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: a[m]?.key,
              position: m,
              view_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase()
            }), i()), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
          }, p = (0, s.useCallback)((() => {
            const e = (m + 1) % a.length;
            e !== m && m !== a.length - 1 && (g(e), r(!1)), l(m === a.length - 1), u({
              event: "modal_next",
              event_action: "next",
              event_category: "carousel",
              event_label: "image gallery modal - ".toLowerCase(),
              card_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase(),
              card_id: a[m]?.key,
              position: m,
              view_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [m, a.length]), h = (0, s.useCallback)((() => {
            const e = (m - 1 + a.length) % a.length;
            e !== m && 0 !== m && (g(e), l(!1)), r(0 === m), u({
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
          return (0, s.useEffect)((() => {
            u({
              event: "trackPageview",
              view_name: `${a[m]?.image?.name??"unnamed image"}`.toLowerCase()
            })
          }), [m]), (0, s.useEffect)((() => {
            const e = e => {
              "ArrowLeft" === e.key ? h() : "ArrowRight" === e.key ? p() : "Escape" === e.key && (u({
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
          }), [m, h, p, i]), (0, f.jsx)(B.M, {
            children: (0, f.jsx)(w.E.div, {
              role: "presentation",
              className: T.overlay,
              onClick: _,
              "aria-label": "dismiss modal",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: b,
              children: (0, f.jsx)("dialog", {
                role: "presentation",
                id: "masonryDialog",
                className: T.masonryDialog,
                onClick: e => _(e),
                children: (0, f.jsxs)("div", {
                  className: T.masonryDialogWrapper,
                  children: [(0, f.jsxs)(w.E.div, {
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
                    children: [(0, f.jsx)(E, {
                      navigatePrevious: h,
                      navigateNext: p,
                      prevDisabled: o,
                      nextDisabled: c
                    }), (0, f.jsx)("button", {
                      type: "button",
                      id: "close",
                      "aria-label": "close",
                      className: T.closeBtn,
                      onClick: () => {
                        u({
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
                  }), (0, f.jsx)(w.E.div, {
                    className: T.modal,
                    initial: {
                      opacity: 0,
                      scale: .5
                    },
                    animate: {
                      opacity: 1,
                      scale: 1
                    },
                    transition: b,
                    children: (0, f.jsx)(n.MultiSourceImage, {
                      className: [T.modalMultisourceImage, T.galleryImage].join(" "),
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
        W = e => {
          let {
            images: a = [],
            gallery: t = []
          } = e;
          const [i, o] = (0, s.useState)(null), {
            track: r
          } = (0, d.useGtmTrack)(), c = t.flat(2), l = {
            hidden: {
              opacity: 0
            },
            show: {
              opacity: 1
            }
          };
          return (0, f.jsxs)(w.E.div, {
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
            children: [a?.map((e => (0, f.jsx)(w.E.div, {
              className: "_560823421a0f2e0ac39603540e530da252a4",
              onClick: () => (e => {
                r({
                  event: "card_click",
                  event_action: "click",
                  event_category: "card",
                  event_label: e?.image?.name ? e?.image?.name.toLowerCase() : void 0
                }), o(e)
              })(e),
              variants: l,
              children: (0, f.jsx)(n.MultiSourceImage, {
                className: "_560823421a0f2e0aa3c47b1efa37c0537d62",
                image: e?.image
              })
            }, `grid-item-${e?.key}`))), i && (0, $.createPortal)((0, f.jsx)(G, {
              images: c,
              selectedImage: i,
              onClose: () => {
                o(null)
              }
            }), document.body)]
          })
        },
        M = e => {
          let {
            images: a = [],
            gallery: t = []
          } = e;
          const [i, o] = (0, s.useState)(null), {
            track: r
          } = (0, d.useGtmTrack)(), c = t.flat(2), l = {
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
          return (0, f.jsxs)(f.Fragment, {
            children: [a?.map((e => (0, f.jsx)(w.E.div, {
              className: "_560823421a0f2e0aee443f71ef6bbd40a62a",
              onClick: () => (e => {
                r({
                  event: "card_click",
                  event_action: "click",
                  event_category: "card",
                  event_label: "image gallery",
                  card_name: i?.image?.name.toLowerCase() ? i?.image?.name.toLowerCase() : void 0,
                  card_id: e.key,
                  link_url: void 0,
                  element_placement: "image gallery"
                }), o(e)
              })(e),
              variants: l,
              initial: "hidden",
              animate: "show",
              children: (0, f.jsx)(n.MultiSourceImage, {
                className: "_560823421a0f2e0ae922d8c04b65ddf8580f",
                image: e?.image
              })
            }, `single-item-${e.key}`))), i && (0, $.createPortal)((0, f.jsx)(G, {
              images: c,
              selectedImage: i,
              onClose: () => {
                o(null)
              }
            }), document.body)]
          })
        },
        P = {
          tabControl: "_560823421a0f2e0ae217507ffc174e416254",
          galleryWrapper: "_560823421a0f2e0aea74189592c1f9ba14ee",
          noImages: "_560823421a0f2e0ac31d48e858de2c00f517",
          unsupportedSection: "_560823421a0f2e0abcd93e12b3f607e10ee3",
          heading: "_560823421a0f2e0add5080878c99b45c43a0"
        },
        D = () => (0, f.jsxs)("div", {
          className: P.unsupportedSection,
          children: [(0, f.jsx)("h3", {
            children: "Unsupported Section Type"
          }), (0, f.jsx)("p", {
            children: "This section type is not supported."
          })]
        }),
        H = e => {
          let {
            sections: a = []
          } = e;
          const t = [];
          return 0 === a?.length ? (0, f.jsx)("div", {
            className: P.gallerWrapper,
            children: (0, f.jsx)("div", {
              className: P.noImages,
              children: (0, f.jsx)("div", {
                className: P.heading,
                children: (0, f.jsx)("p", {
                  children: "No images available"
                })
              })
            })
          }) : (0, f.jsx)(w.E.div, {
            className: P.galleryWrapper,
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
            children: a?.map(((e, a) => {
              let n;
              if (t.push(e?.images), "1x1" === e?.type) n = W;
              else {
                if ("2x2" !== e?.type) return (0, f.jsx)(D, {}, `unsupported-section-${a}`);
                n = M
              }
              return (0, f.jsx)(n, {
                images: e?.images,
                gallery: t
              }, `grid-section-${e?.type}-${a})}`)
            }))
          })
        },
        V = {
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
        z = n.framer.withFadeIn((e => {
          let {
            imageGallery: {
              collections: a = [],
              title: t = "Image Gallery",
              customHeaderFont: n = ""
            }
          } = e;
          const {
            track: i
          } = (0, d.useGtmTrack)(), {
            ref: o,
            inView: r
          } = (0, m.YD)({
            threshold: .6
          }), [c, l] = (0, s.useState)(!1), [g, u] = (0, s.useState)(0), b = n ? V[n] : "";
          return (0, s.useEffect)((() => {
            r && !c && (i({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `image gallery - ${a[g]?.name}`.toLowerCase()
            }), l(!0))
          }), [r]), (0, f.jsx)("section", {
            className: V.sectionWrapper,
            ref: o,
            children: (0, f.jsxs)("div", {
              className: V.sectionContent,
              children: [(0, f.jsxs)("div", {
                className: V.actionBar,
                children: [(0, f.jsx)("h3", {
                  className: [V.heading, b].join(" "),
                  children: t
                }), (0, f.jsx)(S, {
                  data: a,
                  onClick: e => {
                    u(e)
                  },
                  activeTab: g
                })]
              }), a[g]?.sections && (0, f.jsx)(H, {
                sections: a[g]?.sections
              }, a[g]?.name)]
            })
          })
        }));
      var A = t(9929),
        q = t(7041);
      const R = {
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
        F = e => {
          let {
            id: a,
            title: t,
            body: i,
            backgroundImageAndMask: o,
            expandingButton: r,
            image: c
          } = e;
          const [g] = (0, p.useSearchParams)(), u = (0, A.useLocale)(), b = c.sources?.[u] ?? c.sources?.en_us, _ = b?.mobile ?? b?.desktop, {
            track: h
          } = (0, d.useGtmTrack)(), {
            ref: v,
            inView: k,
            entry: y
          } = (0, m.YD)({
            threshold: .6
          }), [x, j] = (0, s.useState)(!1), [C, N] = (0, s.useState)(!1), L = r?.buttons, I = [], S = (0, l.useGetCdnSource)(_ ?? null), $ = (0, l.useGetCdnSource)(o?.backgroundImage?.mobile), B = (0, l.useGetCdnSource)(o?.backgroundImage?.desktop ?? $), T = (0, l.useGetCdnSource)(o?.backgroundImageMask?.mobile), E = (0, l.useGetCdnSource)(o?.backgroundImageMask?.desktop ?? T), G = o?.backgroundImage?._memoq?.backgroundAttachment || "", W = o?.backgroundImage?._memoq?.backgroundClip || "", M = o?.backgroundImage?._memoq?.backgroundColor || "", P = o?.backgroundImage?._memoq?.backgroundOrigin || "", D = o?.backgroundImage?._memoq?.backgroundPosition || "", H = o?.backgroundImage?._memoq?.backgroundRepeat || "", V = o?.backgroundImage?._memoq?.backgroundSize || "", z = {
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
          return (0, s.useEffect)((() => {
            y?.target && (0, A.detectIfWeShouldAnchorSomewhere)()
          }), [g.get("section"), y?.target]), (0, s.useEffect)((() => {
            k && !x && (h({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `buy now - ${t}`.toLowerCase()
            }), j(!0))
          }), [k]), (0, f.jsx)(w.E.div, {
            className: R.fob,
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
            children: (0, f.jsx)("div", {
              className: R.container,
              id: a ?? "",
              ref: v,
              style: {
                "--background-image-desktop": `url(${B})`,
                "--background-image-mobile": `url(${$})`,
                "--image-mask-desktop": `url(${E})`,
                "--image-mask-mobile": `url(${T})`,
                "--background-attachment": G,
                "--background-clip": W,
                "--background-color": M,
                "--background-origin": P,
                "--background-position": D,
                "--background-repeat": H,
                "--background-size": V
              },
              children: (0, f.jsxs)("div", {
                className: R.inner,
                children: [(0, f.jsx)("div", {
                  className: R.imgWrapper,
                  children: S && (0, f.jsx)("img", {
                    src: S,
                    alt: "Red Dead Redemption"
                  })
                }), (0, f.jsxs)("div", {
                  className: R.content,
                  children: [(0, f.jsxs)("div", {
                    className: R.titleAndCopy,
                    children: [(0, f.jsx)("h2", {
                      className: R.fobTitle,
                      children: t
                    }), (0, f.jsx)("div", {
                      className: R.description,
                      dangerouslySetInnerHTML: {
                        __html: (F = i, F ? F.split(/\r?\n/).filter((e => e.trim())).map((e => `<p>${e}</p>`)).join("") : "")
                      }
                    })]
                  }), (0, f.jsx)("div", {
                    className: [R.platformLogos, C ? R.togglePlatformLogos : ""].join(" "),
                    children: L?.map((e => {
                      const {
                        key: a,
                        platform: t
                      } = e, n = (0, q.LU)(t) || "";
                      return t ? (0, f.jsx)("div", {
                        children: (0, f.jsx)("img", {
                          className: [R.platformIcon].join(" "),
                          src: n,
                          alt: t
                        })
                      }, `${t}-${a}`) : null
                    }))
                  }), r?.buttons?.length ? (0, f.jsx)(w.E.div, {
                    className: [R.expandingButtonWrapper, R.fobExpandingButton].join(" "),
                    variants: z,
                    onClick: () => {
                      N((e => !e))
                    },
                    children: (0, f.jsx)(n.ExpandingPlatformButton, {
                      buttonText: r?.label,
                      platformsAndLinks: r?.buttons,
                      trackingType: "select_platform",
                      trackingParent: "fob",
                      children: (0, f.jsx)(w.E.div, {
                        variants: z,
                        style: {
                          marginBottom: 0
                        },
                        children: (0, f.jsx)(n.ButtonGroup, {
                          buttons: I,
                          className: R.buttonGroup
                        })
                      })
                    })
                  }) : (0, f.jsx)(w.E.div, {
                    variants: z,
                    children: (0, f.jsx)(n.ButtonGroup, {
                      buttons: I,
                      className: R.buttonGroup
                    })
                  })]
                })]
              })
            })
          });
          var F
        },
        U = {
          legacyPageTemplate: "_560823421a0f2e0afe87e3fc1302eca7e415",
          maxWidthContainer: "_560823421a0f2e0afeec0fc92574e44f6146",
          rdrUltra: "_560823421a0f2e0af9f7071451bc7de89988",
          universalCyrillic: "_560823421a0f2e0afe90f13c9d95ce1d65b7"
        },
        Y = e => {
          let {
            titleSlug: a,
            headerFont: t,
            hero: i,
            featureBlockBackgroundImageGroup: s,
            features: r,
            relatedLinks: c,
            imageGallery: l,
            fob: d
          } = e;
          const m = t ? U[t] : "";
          return (0, f.jsxs)("div", {
            className: [U.legacyPageTemplate, m].join(" "),
            children: [i && (0, f.jsx)(o(), {
              animated: i.animated,
              content: i.content,
              id: "hero",
              images: i.images,
              shardsSection: i.shardsSection,
              subHero: i.subHero,
              type: i.type
            }), r?.length && (0, f.jsx)(_, {
              id: "features",
              features: r,
              backgroundImageGroup: s
            }), (0, f.jsxs)("div", {
              className: U.maxWidthContainer,
              children: [l?.collections?.length && (0, f.jsx)(z, {
                id: "imageGallery",
                imageGallery: l
              }), d && (0, f.jsx)(F, {
                id: "order",
                ...d
              }), c && (0, f.jsx)(N, {
                id: "relatedLinks",
                title: c?.title,
                buttons: c?.buttons
              }), a && (0, f.jsx)(n.Rating, {
                id: "rating",
                titleSlug: a
              })]
            })]
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
    7041: (e, a, t) => {
      t.d(a, {
        LU: () => r.Z,
        sY: () => c,
        NE: () => s
      });
      var n = t(4859);
      const i = (0, n.makeVar)({
          brand: null,
          headerHidden: !1
        }),
        o = (e, a) => i({
          ...i(),
          [e]: a
        }),
        s = () => {
          const e = (0, n.useReactiveVar)(i);
          return {
            setState: o,
            state: e
          }
        };
      var r = t(4160);
      const c = (0, t(1570).defineMessages)({
        legacy_header_cta_label_reddeadredemption: {
          id: "legacy_header_cta_label_reddeadredemption",
          description: "Label for /reddeadredemption header CTA",
          defaultMessage: "Add to Wish List"
        },
        legacy_header_cta_href_reddeadredemption: {
          id: "legacy_header_cta_href_reddeadredemption",
          description: "Href for /reddeadredemption header CTA",
          defaultMessage: "./?section=order"
        }
      })
    }
  }
]);