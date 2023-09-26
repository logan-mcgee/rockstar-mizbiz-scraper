(self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [133], {
    426: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => s
      });
      var n = t(6160);
      const s = e => {
        let {
          brands: a = []
        } = e;
        return a.length ? (0, n.jsx)("div", {
          className: "_862bfa7da8aaf127fa7548a67d1d96bae529",
          children: a.map(((e, a) => {
            let {
              brand: t
            } = e;
            return (0, n.jsx)("div", {
              className: "_862bfa7da8aaf127f5b32d0efcce86875ef3",
              "data-brand": t
            }, a)
          }))
        }) : null
      }
    },
    5900: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => l
      });
      var n = t(3102),
        s = t(3149),
        i = t(6160);
      const r = e => {
          let {
            children: a,
            className: t,
            onClick: n,
            style: s,
            innerRef: r = null
          } = e;
          return (0, i.jsx)("button", {
            className: t,
            onClick: n,
            style: s,
            type: "button",
            ref: r,
            children: a
          })
        },
        d = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: r,
            to: d
          } = e;
          return (0, i.jsx)(n.NavLink, {
            className: t,
            onClick: s,
            style: r,
            to: d,
            children: a
          })
        },
        l = e => {
          let {
            text: a,
            onClick: t,
            btnColor: n = "#fff",
            labelColor: l = "#000",
            type: c = "",
            icon: o,
            size: u,
            secondText: f,
            consoleBtn: m = !1,
            img: b,
            to: v = !1,
            innerRef: h = null
          } = e;
          const g = [s.Z.plusButton, s.Z[c] ?? "", s.Z[u] ?? "", s.Z[m] ?? ""].join(" "),
            p = {
              "--hvr-color": n ?? l,
              "--hvr-bg-color": l ?? n,
              "--hvr-border-color": n ?? l
            },
            x = (0, i.jsxs)(i.Fragment, {
              children: [b ? (0, i.jsx)("img", {
                src: b,
                alt: a
              }) : "", (0, i.jsxs)("div", {
                className: s.Z.btnText,
                icon: o,
                children: [a, f ? (0, i.jsx)("span", {
                  children: f
                }) : ""]
              })]
            });
          if (v) {
            if (v.startsWith("http")) {
              const e = v.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, i.jsx)("span", {
                onClick: t,
                onKeyUp: e => {
                  "Enter" === e.code && t()
                },
                role: "button",
                tabIndex: -1,
                children: (0, i.jsx)("a", {
                  href: v,
                  className: g,
                  target: e,
                  children: x
                })
              })
            }
            return (0, i.jsx)(d, {
              className: g,
              onClick: t,
              style: p,
              to: v,
              children: x
            })
          }
          return (0, i.jsx)(r, {
            className: g,
            onClick: t,
            style: p,
            innerRef: h,
            children: x
          })
        }
    },
    9040: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => r
      });
      var n = t(9542),
        s = t(5900);
      var i = t(6160);
      const r = e => {
        let {
          buttons: a = [],
          className: t
        } = e;
        return a.length ? (0, i.jsx)("div", {
          className: (0, n.classList)("_862bfa7da8aaf127a67c709116a5f4f75e82", t),
          children: a.map(((e, a) => {
            let {
              icon: t,
              to: n,
              title: r
            } = e;
            return r ? (0, i.jsx)(s.Z, {
              className: "white",
              text: r,
              to: n
            }, a) : ""
          }))
        }) : null
      }
    },
    4575: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => p
      });
      var n = t(4932),
        s = t(152),
        i = t(8976),
        r = t(6711),
        d = t(2747),
        l = t(9542),
        c = t(822),
        o = t(5763),
        u = t(5900);
      const f = {
        buyNowArea: "_862bfa7da8aaf127efcd9567132aac95f154",
        topArea: "_862bfa7da8aaf127fb3daf8cc213c20c1c63",
        btnArea: "_862bfa7da8aaf127cb71eb2277f2f8959b53",
        nextBtn: "_862bfa7da8aaf127fabbb6293e97df616a6d",
        prevBtn: "_862bfa7da8aaf127d0381b4129d767175125",
        card: "_862bfa7da8aaf127aa02ad7590a39a0f968e",
        content: "_862bfa7da8aaf127df7b9bc0c51447f90251",
        contentGrid: "_862bfa7da8aaf127f91570bf2eaa28e2e9ba",
        titleArea: "_862bfa7da8aaf127ccc7fd4ca6767885c3b0",
        platforms: "_862bfa7da8aaf127db10d9156046db2ec4bf",
        addedInfo: "_862bfa7da8aaf127cbb51f2f186585dad18f",
        ctaBtn: "_862bfa7da8aaf127b92affb274fa1d59c710",
        linksArea: "_862bfa7da8aaf127df02feba9f63401c9d24",
        closeBtn: "_862bfa7da8aaf127dc3d2ef3ee813c3f8c7a",
        closeButtonWrapper: "_862bfa7da8aaf127d8da1bb38c84a542824d",
        linkList: "_862bfa7da8aaf127c7eec41dd80691bd8cef",
        bottomText: "_862bfa7da8aaf127a73e84db690d5d7daad2",
        imageGroup: "_862bfa7da8aaf127c73981c709dbcaf563ba",
        imgMobile: "_862bfa7da8aaf127fff781f9e4330b08e27e",
        imgDesktop: "_862bfa7da8aaf127c20a50dab334287d202a",
        responsiveImages: "_862bfa7da8aaf127ca36676f86619286e390",
        backgroundImage: "_862bfa7da8aaf127d734957eefc52e0735a9",
        foregroundImage: "_862bfa7da8aaf127d6dadb070d930bb14ad7"
      };
      var m = t(3149),
        b = t(6160);
      const v = e => {
          let {
            className: a,
            images: t
          } = e;
          const n = (0, l.useGetCdnSource)(t?.mobile?.full_src ?? null),
            s = (0, l.useGetCdnSource)(t?.desktop?.full_src ?? n);
          return (0, b.jsxs)("div", {
            className: [a, f.responsiveImages].join(" "),
            children: [n ? (0, b.jsx)("div", {
              className: f.imgMobile,
              style: {
                background: `url(${n}) no-repeat center/cover`
              }
            }) : "", s ? (0, b.jsx)("div", {
              className: f.imgDesktop,
              style: {
                background: `url(${s}) no-repeat center/cover`
              }
            }) : ""]
          })
        },
        h = e => {
          let {
            addedInfo: a = null,
            buynowbtn: i = null,
            description: d = null,
            images: l,
            links: o = [],
            title: h = null
          } = e;
          const {
            track: g
          } = (0, r.useGtmTrack)(), p = {
            event: "card_click",
            event_category: "card",
            event_action: "click",
            event_label: h?.toLowerCase()
          }, [x, _] = (0, n.useState)(!1), k = {
            type: "spring",
            stiffness: 425,
            damping: 40
          }, N = {
            type: "spring",
            stiffness: 650,
            damping: 45
          }, j = {
            ease: "easeOut",
            duration: .9,
            delay: .3
          }, y = {
            open: {
              opacity: 0,
              transition: {
                ease: "easeOut",
                duration: .3
              }
            },
            closed: {
              opacity: 1,
              transition: j
            }
          }, S = {
            open: {
              opacity: 1,
              display: "grid",
              height: "auto",
              transition: {
                opacity: j,
                height: k
              }
            },
            closed: {
              opacity: 0,
              height: 0,
              transition: {
                opacity: {
                  ease: "easeOut",
                  duration: .1
                },
                height: N
              },
              transitionEnd: {
                display: "none"
              }
            }
          }, T = {
            open: {
              "--cta-border-color": "var(--white-15)",
              "--cta-background-color": "rgba(255,255,255,.1)",
              "--cta-background-color-noBlur": "var(--black-100)",
              padding: "var(--card-padding)",
              gridGap: "var(--grid-gap-sm)",
              transition: k,
              pointerEvents: "none",
              "--btn-hover-bg-color": "rgba(255,255,255,.1)",
              "--btn-hover-bg-color-noBlur": "var(--black-100)",
              "--btn-hover-font-color": "none",
              "--btn-hover-border-color": "var(--white-15)"
            },
            closed: {
              "--cta-border-color": "var(--white-100)",
              "--cta-background-color": "inherit",
              "--cta-background-color-noBlur": "inherit",
              padding: "var(--padding-sm) var(--padding-md)",
              gridGap: 0,
              transition: N,
              transitionEnd: {
                "--btn-hover-bg-color": "inherit",
                "--btn-hover-bg-color-noBlur": "inherit",
                "--btn-hover-font-color": "inherit",
                "--btn-hover-border-color": "inherit"
              }
            }
          };
          return (0, b.jsx)(c.o5, {
            children: (0, b.jsxs)("div", {
              className: f.card,
              children: [(0, b.jsxs)("div", {
                className: f.imageGroup,
                children: [(0, b.jsx)(v, {
                  className: f.backgroundImage,
                  images: l?.background
                }), (0, b.jsx)(v, {
                  className: f.foregroundImage,
                  images: l?.foreground
                })]
              }), (0, b.jsxs)("div", {
                className: f.content,
                children: [(0, b.jsxs)(s.E.div, {
                  className: f.contentGrid,
                  animate: x ? "open" : "closed",
                  variants: y,
                  children: [(0, b.jsxs)("div", {
                    className: f.titleArea,
                    children: [(0, b.jsx)("h2", {
                      dangerouslySetInnerHTML: {
                        __html: h
                      }
                    }), (0, b.jsx)("p", {
                      dangerouslySetInnerHTML: {
                        __html: d
                      }
                    })]
                  }), o.length ? (0, b.jsx)("div", {
                    className: f.platforms,
                    children: o.map(((e, a) => (0, b.jsx)("div", {
                      className: f[e.platform],
                      children: e.platform ? (0, b.jsx)("img", {
                        src: t(8369)(`./${e.platform}.svg`),
                        alt: `${"xboxone"===e.platform?"xbox one":e.platform}`
                      }) : ""
                    }, `${e.platform+a}`)))
                  }) : ""]
                }), a ? (0, b.jsx)(s.E.p, {
                  className: f.addedInfo,
                  dangerouslySetInnerHTML: {
                    __html: a
                  },
                  animate: x ? "open" : "closed",
                  variants: y
                }) : "", i ? (0, b.jsxs)(s.E.div, {
                  onClick: () => {
                    _(!x), g(p), x || g({
                      event_action: "select_platform",
                      event_category: "cta",
                      event: "select_platform",
                      event_label: h?.toLowerCase()
                    })
                  },
                  className: [f.ctaBtn, m.Z.plusButton].join(" "),
                  animate: x ? "open" : "closed",
                  variants: T,
                  initial: !1,
                  children: [(0, b.jsx)(s.E.div, {
                    className: [f.ctaBtnText, m.Z.btnText].join(" "),
                    children: i
                  }), (0, b.jsxs)(s.E.div, {
                    className: [f.linksArea, x ? f.showLinks : ""].join(" "),
                    animate: x ? "open" : "closed",
                    variants: S,
                    initial: !1,
                    children: [(0, b.jsx)("button", {
                      type: "button",
                      className: f.closeButtonWrapper,
                      onClick: () => {
                        _(!1), g(p), g({
                          event_action: "close",
                          event_category: "select_platform",
                          event: "select_platform",
                          event_label: h?.toLowerCase()
                        })
                      },
                      children: (0, b.jsx)("img", {
                        className: f.closeBtn,
                        src: t(8375),
                        alt: "Close menu button"
                      })
                    }), (0, b.jsx)("div", {
                      className: f.linkList,
                      children: o.length ? o.map(((e, a) => (0, b.jsx)(u.Z, {
                        type: "blackBtn",
                        size: "large",
                        img: t(8369)(`./${e.platform}.svg`),
                        consoleBtn: e.platform,
                        to: e.href,
                        onClick: () => {
                          g({
                            event_action: "store_link",
                            event_category: "cta",
                            event: "cta_store_link",
                            event_label: "platform button",
                            text: e.platform,
                            link_url: e.href
                          })
                        }
                      }, `${e.platform+a}`))) : ""
                    })]
                  })]
                }) : ""]
              })]
            })
          })
        };
      h.displayName = "SwiperSlide";
      const g = {
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
            enabled: !0
          },
          768: {
            slidesPerView: 1.25,
            spaceBetween: 16,
            enabled: !0
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 18,
            enabled: !1
          },
          1920: {
            slidesPerView: 2,
            spaceBetween: 20,
            enabled: !1
          },
          2560: {
            slidesPerView: 2,
            spaceBetween: 22,
            enabled: !1
          }
        },
        p = i.framer.withFadeIn((0, i.withSimpleErrorBoundary)((e => {
          let {
            cards: a = [],
            bottomText: t,
            topText: s
          } = e;
          const {
            track: i
          } = (0, r.useGtmTrack)(), {
            ref: l,
            inView: u
          } = (0, d.YD)({
            threshold: .6
          }), [m, v] = (0, n.useState)(!1);
          return (0, n.useEffect)((() => {
            u && !m && (i({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `buy now - ${s}`.toLowerCase(),
              element_placement: `buy now - ${s}`.toLowerCase()
            }), v(!0))
          }), [u]), (0, b.jsxs)("div", {
            className: f.buyNowArea,
            ref: l,
            children: [(0, b.jsxs)("div", {
              className: f.topArea,
              children: [s ? (0, b.jsx)("h2", {
                children: s
              }) : "", (0, b.jsxs)("div", {
                className: f.btnArea,
                children: [(0, b.jsx)("div", {
                  className: f.prevBtn
                }), (0, b.jsx)("div", {
                  className: f.nextBtn
                })]
              })]
            }), a?.length ? (0, b.jsx)(c.tq, {
              grabCursor: !0,
              navigation: {
                nextEl: `.${f.nextBtn}`,
                prevEl: `.${f.prevBtn}`
              },
              onSlideNextTransitionEnd: () => {
                i({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: s?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                i({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: s?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                i({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: s?.toLowerCase() ?? ""
                })
              },
              modules: [o.W_],
              breakpoints: g,
              children: a.map((e => (0, n.createElement)(h, {
                ...e,
                key: JSON.stringify(e)
              }))) ?? ""
            }) : "", t ? (0, b.jsx)("p", {
              className: f.bottomText,
              children: t
            }) : ""]
          })
        })))
    },
    4986: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => i
      });
      var n = t(9542);
      var s = t(6160);
      const i = e => {
        let {
          disclaimer: a,
          text: t = null,
          title: i,
          className: r = "",
          style: d = {}
        } = e;
        const l = t ?? a?.text ?? null,
          c = i ? `<h5>${i}</h5>${l}` : l;
        return l ? (0, s.jsx)("div", {
          className: (0, n.classList)("_862bfa7da8aaf127df323a339dbf583bc2c5", r),
          dangerouslySetInnerHTML: {
            __html: c
          },
          style: d
        }) : null
      }
    },
    3719: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => d
      });
      var n = t(4932),
        s = t(8976),
        i = t(5900);
      var r = t(6160);
      const d = (0, s.withSimpleErrorBoundary)((e => {
        let {
          buttonTxt: a,
          description: t,
          disclaimer: s,
          faqList: d = [],
          initialLength: l = 6,
          addedLength: c = 6,
          title: o,
          tinaModulesInfo: u
        } = e;
        const [f, m] = (0, n.useState)(l);
        return (0, r.jsxs)("div", {
          className: "_862bfa7da8aaf127b3509cdab40e95e26002",
          children: [(0, r.jsxs)("div", {
            className: "_862bfa7da8aaf127efce021b52132a4fe087",
            children: [(0, r.jsxs)("div", {
              children: [(0, r.jsx)("h3", {
                children: u?.[0]?.title ?? o
              }), (0, r.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: t
                }
              })]
            }), (0, r.jsx)("div", {
              className: "_862bfa7da8aaf127e07164a79464876f4bde",
              children: d.length ? d.slice(0, f).map(((e, a) => {
                let {
                  question: t,
                  answer: n
                } = e;
                return (0, r.jsxs)("details", {
                  children: [(0, r.jsx)("summary", {
                    children: t
                  }), (0, r.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: n
                    }
                  })]
                }, a)
              })) : ""
            }), d.length > f ? (0, r.jsx)(i.Z, {
              onClick: () => m(f + c),
              text: a
            }) : ""]
          }), (0, r.jsx)("div", {
            className: "_862bfa7da8aaf127d8d021028ace4c8cb7a2",
            dangerouslySetInnerHTML: {
              __html: s
            }
          })]
        })
      }))
    },
    8428: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => i
      });
      var n = t(5851);
      var s = t(6160);
      const i = e => {
        let {
          children: a,
          style: t
        } = e;
        return (0, s.jsx)(n.E, {
          children: (0, s.jsx)("div", {
            className: "_862bfa7da8aaf127fafb0bfa8877f0bd98dd",
            style: t,
            "data-type": "guide",
            children: (0, s.jsx)("div", {
              className: "_862bfa7da8aaf127f996fd45d04119fb2ddc",
              children: a
            })
          })
        })
      }
    },
    8756: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => o
      });
      var n = t(4932),
        s = t(3653),
        i = t.n(s),
        r = t(8976),
        d = t(559);
      var l = t(6160);
      const c = e => {
          let {
            guide: a
          } = e, t = {
            hero: {}
          };
          i().cloneDeepWith(a, ((e, a) => {
            "images" === a && (t = e)
          }));
          const {
            src: n
          } = (0, d.useImageParser)(t?.thumb ?? {});
          return (0, l.jsx)("div", {
            className: "_862bfa7da8aaf127a02afa3a30a4c2daecb9",
            children: (0, l.jsxs)(r.A, {
              to: a.to,
              children: [(0, l.jsx)("div", {
                style: {
                  "--aspect-ratio": 1,
                  background: `url(${n?.mobile}) no-repeat center/cover`
                }
              }), (0, l.jsx)("h4", {
                children: a.title
              })]
            })
          })
        },
        o = e => {
          let {
            guides: a = {},
            tinaModulesInfo: t,
            title: s
          } = e;
          const d = i().map(a, "guide_id"),
            o = (0, r.useTinaModuleFetchByIds)({
              ids: d
            }),
            [u, f] = (0, n.useState)(null);
          return (0, n.useEffect)((() => {
            const e = o?.map(((e, a) => (0, l.jsx)(c, {
              guide: e
            }, a)));
            f(e)
          }), [o]), (0, l.jsx)(r.Gen9CoreCarousel, {
            size: "lg",
            slideChildren: u,
            title: t?.[0]?.title ?? s
          })
        }
    },
    6780: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => c
      });
      var n = t(9542),
        s = t(3102),
        i = t(5133);
      var r = t(6160);
      const d = () => {
          const {
            guideId: e
          } = (0, s.useParams)(), a = (0, i.KO)(e, "<span></span>");
          return a ? (0, r.jsx)("div", {
            className: "_862bfa7da8aaf127ccc9a48ce26a7f8eccfa",
            dangerouslySetInnerHTML: {
              __html: `Guides<span></span>${a}`
            }
          }) : null
        },
        l = e => {
          let {
            hero: a
          } = e;
          const {
            alt: t,
            src: s = {}
          } = (0, n.useImageParser)(a) ?? {}, {
            mobile: i
          } = s;
          if (i) return (0, r.jsx)("div", {
            "aria-label": t,
            className: "_862bfa7da8aaf127d029521293f260e2e565",
            role: "img",
            style: {
              background: `url(${i}) no-repeat center/contain`
            }
          })
        },
        c = e => {
          let {
            blurb: a,
            hero: t,
            title: n
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [t ? (0, r.jsx)(l, {
              hero: t
            }) : "", (0, r.jsxs)("div", {
              className: "_862bfa7da8aaf127bff4125d94bb6017f533",
              children: [(0, r.jsx)(d, {}), (0, r.jsx)("h1", {
                children: n
              }), a && (0, r.jsx)("span", {
                className: "_862bfa7da8aaf127e4ef31aad749a9acd084",
                dangerouslySetInnerHTML: {
                  __html: a
                }
              })]
            })]
          })
        }
    },
    7240: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => g
      });
      var n = t(4932),
        s = t(3102),
        i = t(3653),
        r = t.n(i),
        d = t(152),
        l = t(8976),
        c = t(5133);
      const o = {
        guideNav: "_862bfa7da8aaf127fafeb1bf08103794f39f",
        headerHidden: "_862bfa7da8aaf127b6d7b06f062c246fa382",
        guideList: "_862bfa7da8aaf127ef07d6110417298701b2",
        activeSection: "_862bfa7da8aaf127ce841afb83b64686ea9e",
        guideLinkCurrent: "_862bfa7da8aaf127fabf9908f285fcf97596",
        guide: "_862bfa7da8aaf127ca53bde09b5900585bda",
        sections: "_862bfa7da8aaf127e3ef1dcb43d473bdd596"
      };
      var u = t(6160);
      const f = {
          ease: "easeInOut",
          duration: .3
        },
        m = {
          closed: {
            opacity: 0,
            height: "0px"
          },
          open: {
            opacity: 1,
            height: "auto"
          }
        },
        b = e => {
          let {
            to: a,
            title: t,
            id_hash: s,
            query: i
          } = e;
          const [r, d] = (0, n.useState)(s === i), {
            state: f
          } = (0, c.MB)(), {
            activeSection: m
          } = f;
          return (0, n.useEffect)((() => d(i !== m ? m === s : i === s)), [m]), (0, u.jsx)(l.A, {
            to: a,
            className: r ? o.activeSection : "",
            children: t
          }, a)
        },
        v = e => {
          let {
            sections: a
          } = e;
          const [t] = (0, s.useSearchParams)();
          return (0, u.jsx)("div", {
            className: o.sections,
            children: a?.map((e => {
              let {
                id_hash: a,
                title: n,
                to: s
              } = e;
              return (0, u.jsx)(b, {
                id_hash: a,
                query: t,
                title: n,
                to: s
              })
            }))
          })
        },
        h = e => {
          let {
            currentId: a,
            group: t
          } = e;
          const [s, i] = (0, n.useState)(null), [b, h] = (0, n.useState)(null), {
            state: g
          } = (0, c.MB)(), {
            activeSection: p
          } = g;
          return (0, n.useEffect)((() => {
            const e = r().findIndex(t?.children, (e => {
              let {
                id_hash: t
              } = e;
              return t === a
            }));
            h(e), i(-1 !== e)
          }), [a, p, t]), (0, u.jsxs)("div", {
            className: o.guideList,
            children: [(0, u.jsx)("button", {
              type: "button",
              onClick: () => i(!s),
              children: t.title
            }), (0, u.jsx)(d.E.nav, {
              animate: s ? "open" : "closed",
              variants: m,
              transition: f,
              children: t?.children?.map(((e, t) => {
                let {
                  children: n,
                  id_hash: s,
                  title: i,
                  to: r
                } = e;
                return (0, u.jsxs)("div", {
                  className: o.guide,
                  children: [(0, u.jsx)(l.A, {
                    className: [o.guideLink, a === s ? o.guideLinkCurrent : ""].join(" "),
                    to: r,
                    children: i
                  }), t === b && n?.length ? (0, u.jsx)(v, {
                    sections: n
                  }) : ""]
                }, i)
              }))
            })]
          })
        },
        g = e => {
          let {
            currentId: a
          } = e;
          const t = (0, c.yv)(),
            {
              state: {
                headerHeight: n,
                headerHidden: s
              }
            } = (0, c.MB)();
          return (0, u.jsx)("div", {
            className: [o.guideNav, s ? o.headerHidden : ""].join(" "),
            style: {
              "--header-height": `${n}px`
            },
            children: t?.map((e => (0, u.jsx)(h, {
              currentId: a,
              group: e
            }, e.id_hash)))
          })
        }
    },
    5731: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => d
      });
      var n = t(4932),
        s = t(2747),
        i = t(5133);
      var r = t(6160);
      const d = e => {
        let {
          style: a,
          children: t,
          __anchor: d = null
        } = e;
        const {
          announcePresence: l
        } = (0, i.aQ)(), {
          ref: c,
          inView: o
        } = (0, s.YD)({
          rootMargin: "0px 0px -700px 0px",
          threshold: 0,
          delay: 850
        });
        return (0, n.useEffect)((() => {
          l(d)
        }), [d]), (0, n.useEffect)((() => {
          o && l(d)
        }), [o]), (0, r.jsx)("span", {
          style: a,
          className: "_862bfa7da8aaf127d49366acea7b328026c0",
          name: d,
          ref: c,
          children: t
        })
      }
    },
    8110: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => S
      });
      var n = t(4932),
        s = t(3102),
        i = t(8976),
        r = t(6711),
        d = t(9929),
        l = t(3657),
        c = t(5900),
        o = t(3653),
        u = t.n(o),
        f = t(5133);
      const m = {
        gen9Nav: "_862bfa7da8aaf127a616477b6a6e1ed0f6ac",
        activeLink: "_862bfa7da8aaf127c4fca99870c4faa1f18d",
        subNav: "_862bfa7da8aaf127cb4e7d61fd6679fb7a1e",
        subNavOpen: "_862bfa7da8aaf127ff7acb2b4e6eb0468800",
        navGroup: "_862bfa7da8aaf127b1c7e7a170e8c7982809",
        subNavUnder: "_862bfa7da8aaf127f5524031d9fa9c37eeb5",
        subNavRight: "_862bfa7da8aaf127c13b50d941584d4e3152"
      };
      var b = t(6160);
      const v = e => {
          let {
            activeExact: a = !1,
            to: t,
            title: s,
            under: d = !0,
            childModules: l = [],
            t: c
          } = e;
          const {
            track: o
          } = (0, r.useGtmTrack)(), [f, h] = (0, n.useState)(!1), g = u().debounce((() => {
            h(!1)
          }), 250), p = (0, n.useCallback)((() => {
            g?.cancel(), h(!0)
          }), [g]), x = () => {
            o({
              event: "nav_click",
              event_category: "nav",
              event_action: "click",
              event_label: s.toLowerCase(),
              link_url: t
            })
          };
          return (0, b.jsxs)("div", {
            className: m.navGroup,
            onMouseEnter: p,
            onMouseLeave: g,
            onKeyUp: p,
            onClick: () => h(!1),
            role: "button",
            tabIndex: -1,
            children: [t ? (0, b.jsx)(i.A, {
              end: a,
              to: t,
              target: t.startsWith("http") ? "_blank" : "_self",
              className: e => {
                let {
                  isActive: a
                } = e;
                return a ? m.activeLink : null
              },
              onClick: x,
              children: c(s)
            }) : (0, b.jsx)("button", {
              type: "button",
              onClick: x,
              children: c(s)
            }), l?.length ? (0, b.jsx)("div", {
              className: [m.subNav, d ? m.subNavUnder : m.subNavRight, f ? m.subNavOpen : ""].join(" "),
              children: l?.map((e => (0, b.jsx)(v, {
                under: !1,
                ...e,
                t: c
              }, e?.title)))
            }) : ""]
          })
        },
        h = (0, d.withTranslations)((e => {
          let {
            t: a
          } = e;
          const t = (0, f.YM)();
          return (0, b.jsx)("nav", {
            className: m.gen9Nav,
            children: t.map((e => {
              let {
                children: t,
                to: n,
                ...s
              } = e;
              return (0, b.jsx)(v, {
                childModules: t,
                to: n,
                t: a,
                ...s
              }, n)
            }))
          })
        }));
      var g = t(1735),
        p = t(152);
      const x = {
          closed: {
            d: "M3 12H21"
          },
          open: {
            d: "M3 12H21"
          }
        },
        _ = {
          closed: {
            d: "M3 18H21"
          },
          open: {
            d: "M3 12H21"
          }
        },
        k = {
          closed: {
            d: "M3 6H21"
          },
          open: {
            d: "M3 12H21"
          }
        },
        N = {
          stroke: "white",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transition: {
            duration: .2
          }
        },
        j = () => {
          const {
            state: {
              mobileNavOpen: e
            },
            setMobileNavOpen: a
          } = (0, f.MB)(), {
            navOpen: t,
            setNavOpen: s
          } = (0, r.useRockstarUserState)(), i = (0, g._)(), d = (0, g._)(), l = (0, g._)();
          return (0, n.useEffect)((() => {
            !0 === t && !0 === e && a(!1)
          }), [t]), (0, n.useEffect)((() => {
            i.start(e ? x.open : x.closed), d.start(e ? _.open : _.closed), l.start(e ? k.open : k.closed)
          }), [e]), (0, b.jsxs)("svg", {
            className: "_862bfa7da8aaf127b1179e089e89383904b2",
            onClick: () => (async () => {
              a(!e), !0 === t && s(!1)
            })(),
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: [(0, b.jsx)(p.E.path, {
              ...k.closed,
              ...N,
              animate: l
            }), (0, b.jsx)(p.E.path, {
              ..._.closed,
              ...N,
              animate: d
            }), (0, b.jsx)(p.E.path, {
              ...x.closed,
              ...N,
              animate: i
            })]
          })
        },
        y = {
          gen9Header: "_862bfa7da8aaf127d7c271f94626a35ab9e8",
          headerHidden: "_862bfa7da8aaf127d47f3266f70158f40c19",
          content: "_862bfa7da8aaf127ea23ee47c231cf87cc38",
          "content--child": "_862bfa7da8aaf127a6016e70e686815bfbe0",
          branding: "_862bfa7da8aaf127fb19a5e6f94b3c1e56a7",
          logoDivider: "_862bfa7da8aaf127fc35bda511ece88a1b5e",
          brandLogo: "_862bfa7da8aaf127ebb800e1f0823cbb6d54",
          buttonArea: "_862bfa7da8aaf127e517a992627baad1ae35",
          navBtn: "_862bfa7da8aaf127afd960f93c5b83b94948"
        },
        S = (0, d.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            state: {
              brand: t,
              headerHidden: d,
              mobileNavOpen: o
            },
            setHeaderHeight: u,
            setHeaderHidden: m,
            setMobileNavOpen: v
          } = (0, f.MB)(), {
            navOpen: g
          } = (0, r.useRockstarUserState)(), p = (0, n.useRef)(), {
            track: x
          } = (0, r.useGtmTrack)(), [, _] = (0, s.useSearchParams)(), {
            pathname: k
          } = (0, s.useLocation)(), {
            freezeUserShouldSeeMore: N,
            userShouldSeeMore: S
          } = (0, l.useScroll)(), [T, C] = (0, n.useState)(0), E = () => T > 1023;
          return (0, n.useEffect)((() => {
            o || g || N && S || m(S)
          }), [N, o, S, g]), (0, n.useEffect)((() => {
            v(!1)
          }), [k]), (0, n.useEffect)((() => {
            o && m(!1)
          }), [o]), (0, n.useEffect)((() => {
            const e = () => {
              p.current && u(p.current.offsetHeight), C(window.innerWidth)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [p]), (0, b.jsx)("header", {
            className: [y.gen9Header, d ? y.headerHidden : ""].join(" "),
            ref: p,
            children: (0, b.jsxs)("div", {
              className: y.content,
              children: [(0, b.jsxs)("div", {
                className: y.branding,
                "data-brand": t,
                children: [(0, b.jsx)(i.RockstarLogo, {}), (0, b.jsx)("div", {
                  className: y.logoDivider
                }), E() && (0, b.jsx)("div", {
                  className: y.brandLogo
                }), (0, b.jsx)(j, {})]
              }), !E() && (0, b.jsx)("div", {
                className: y.brandLogo,
                "data-brand": t
              }), (0, b.jsx)(h, {}), (0, b.jsx)("div", {
                className: y.buttonArea,
                children: (0, b.jsxs)("div", {
                  className: y.navBtn,
                  children: [!(T < 1024) && (0, b.jsx)(c.Z, {
                    text: a("Buy Now"),
                    type: "transparentBtn",
                    size: "small",
                    onClick: () => {
                      _({
                        info: "order"
                      }), x({
                        event_action: "buy",
                        event_category: "cta",
                        event: "cta_buy",
                        event_label: "header",
                        text: a("Buy Now").toLowerCase()
                      })
                    }
                  }), (0, b.jsx)(r.MenuButton, {})]
                })
              })]
            })
          })
        }))
    },
    9023: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => f
      });
      var n = t(4932),
        s = t(8976),
        i = t(9542),
        r = t(6711),
        d = t(2747),
        l = t(9040),
        c = t(426),
        o = t(4986);
      var u = t(6160);
      const f = s.framer.withFadeIn((e => {
        let {
          brands: a = [],
          content: t,
          ctas: s = [],
          disclaimer: f,
          image: m,
          large: b = !1,
          title: v,
          image_on_right: h = !1,
          style: g = {},
          className: p = ""
        } = e;
        const {
          track: x
        } = (0, r.useGtmTrack)(), {
          ref: _,
          inView: k
        } = (0, d.YD)({
          threshold: .6
        }), [N, j] = (0, n.useState)(!1), y = (0, i.useGetCdnSource)(m?.full_src ?? null) ?? null;
        return (0, n.useEffect)((() => {
          k && !N && (x({
            event: "page_section_impression",
            event_action: "impression",
            event_category: "page_section",
            event_label: `image text group - ${v}`.toLowerCase(),
            element_placement: `image text group - ${v}`.toLowerCase()
          }), j(!0))
        }), [k]), (0, u.jsxs)("div", {
          className: (0, i.classList)("_862bfa7da8aaf127f2cf909dbf3361ec8d57", b ? "_862bfa7da8aaf127c950136646fbbd777bb5" : "", h ? "_862bfa7da8aaf127e6f94a3e17e22b45f308" : "", y ? "" : "_862bfa7da8aaf127cea3e99427bd215be499", p),
          style: g,
          ref: _,
          children: [y ? (0, u.jsx)("div", {
            className: "_862bfa7da8aaf127bcdbc4cde7375da50995",
            style: {
              background: `url(${y}) no-repeat center/cover`
            }
          }) : "", (0, u.jsxs)("div", {
            className: "_862bfa7da8aaf127c5071baf77e4a94ee8fc",
            children: [(0, u.jsx)(c.Z, {
              brands: a
            }), (0, u.jsxs)("div", {
              className: "_862bfa7da8aaf127f494a7678754ce53146a",
              children: [(0, u.jsx)("div", {
                className: "_862bfa7da8aaf127e220a2dcd44c8fc8da2e",
                tabIndex: 0,
                children: v
              }), t ? (0, u.jsx)("div", {
                className: "_862bfa7da8aaf127ccc4915c23b879942955",
                dangerouslySetInnerHTML: {
                  __html: t
                }
              }) : ""]
            }), (0, u.jsx)(l.Z, {
              ctas: s
            }), (0, u.jsx)(o.Z, {
              disclaimer: f
            })]
          })]
        })
      }))
    },
    3873: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => d
      });
      var n = t(9542),
        s = t(9023);
      const i = {
        imageTextGroupGroup: "_862bfa7da8aaf127fa256a3137bdd2fa57fc",
        bg: "_862bfa7da8aaf127cdba5b54a8d9de138a27",
        bgMobile: "_862bfa7da8aaf127c5eb13f304cc530611c3",
        bgDesktop: "_862bfa7da8aaf127d2094248c0a2dbe4ea2e"
      };
      var r = t(6160);
      const d = e => {
        let {
          bg: a,
          image_text_groups: t = [],
          style: d = {},
          className: l = ""
        } = e;
        const c = (0, n.useGetCdnSource)(a?.image?.mobile?.full_src ?? null),
          o = (0, n.useGetCdnSource)(a?.image?.desktop?.full_src ?? null) ?? c;
        return t.length ? (0, r.jsxs)("div", {
          className: (0, n.classList)(i.imageTextGroupGroup, l),
          style: {
            ...d
          },
          children: [c ? (0, r.jsx)("div", {
            className: [i.bgMobile, i.bg].join(" "),
            style: {
              background: `url(${c}) no-repeat center/cover`
            }
          }) : "", o ? (0, r.jsx)("div", {
            className: [i.bgDesktop, i.bg].join(" "),
            style: {
              background: `url(${o}) no-repeat center/cover`
            }
          }) : "", t.map(((e, a) => (0, r.jsx)(s.Z, {
            ...e
          }, a)))]
        }) : null
      }
    },
    5209: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => d
      });
      var n = t(8976),
        s = t(9542);
      const i = {
        linkoutSection: "_862bfa7da8aaf127f16a28b8596593e62188",
        cta: "_862bfa7da8aaf127e44235a0e32de93918e3"
      };
      var r = t(6160);
      const d = e => {
        let {
          text: a,
          cta: d,
          to: l,
          className: c = "",
          style: o = {}
        } = e;
        return (0, r.jsxs)(n.A, {
          className: (0, s.classList)(i.linkoutSection, c),
          to: l,
          style: o,
          children: [a && (0, r.jsx)("div", {
            className: i.text,
            children: a
          }), d && (0, r.jsxs)("div", {
            className: i.cta,
            children: [d, " ", (0, r.jsx)("img", {
              src: t(928)
            })]
          })]
        })
      }
    },
    8292: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => i
      });
      var n = t(4932);
      var s = t(6160);
      const i = e => {
        let {
          children: a,
          style: t,
          theme: i
        } = e;
        const [r, d] = (0, n.useState)(i);
        return (0, n.useEffect)((() => {
          i && d(i)
        }), [i]), (0, s.jsx)("div", {
          className: "_862bfa7da8aaf127cce3c47240f1835b9e3d",
          style: t,
          "data-theme": r,
          children: a
        })
      }
    },
    8486: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => r
      });
      var n = t(4224),
        s = t.n(n),
        i = t(6160);
      const r = e => {
        let {
          id: a
        } = e;
        return (0, i.jsx)("div", {
          children: (0, i.jsx)(s(), {
            autoplay: !0,
            context: "embed",
            id: a,
            endBehavior: "stillframe",
            wrapper: !1
          })
        })
      }
    },
    8262: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        BrandMessage: () => i,
        BuyNow: () => r.Z,
        ClaimCountdown: () => d,
        Disclaimer: () => l.Z,
        FAQ: () => c.Z,
        Guide: () => o.Z,
        GuideGroup: () => u.Z,
        GuideIntro: () => f.Z,
        GuideNavDesktop: () => m.Z,
        GuideSection: () => b.Z,
        Header: () => v.Z,
        Hero: () => y,
        ImageTextGroup: () => S.Z,
        ImageTextGroupGroup: () => T.Z,
        LinkoutSection: () => C.Z,
        Logo: () => w,
        SectionTitle: () => M,
        TinaWrapper: () => L.Z,
        VideoPlayerWrapper: () => B.Z
      });
      var n = t(426);
      var s = t(6160);
      const i = e => {
        let {
          brand: a,
          headline_left: t,
          headline_right: i,
          info: r
        } = e;
        return (0, s.jsxs)("div", {
          className: "_862bfa7da8aaf127b94144341266bb5d0222",
          children: [(0, s.jsx)(n.Z, {
            brands: [{
              brand: a
            }]
          }), (0, s.jsxs)("div", {
            className: "_862bfa7da8aaf127de1a4b6a97abe3325a0f",
            children: [(0, s.jsxs)("h2", {
              children: [t, " ", (0, s.jsx)("span", {
                children: i
              })]
            }), (0, s.jsx)("p", {
              children: r
            })]
          })]
        })
      };
      var r = t(4575);
      const d = e => {
        let {
          left: a,
          right: t
        } = e;
        return (0, s.jsx)("div", {
          className: "_862bfa7da8aaf127e17095a50c41fd5df54d",
          children: (0, s.jsxs)("h2", {
            tabIndex: 0,
            children: [a, " ", (0, s.jsx)("span", {
              children: t
            })]
          })
        })
      };
      var l = t(4986),
        c = t(3719),
        o = t(8428),
        u = t(8756),
        f = t(6780),
        m = t(7240),
        b = t(5731),
        v = t(8110),
        h = t(4932),
        g = t(8976),
        p = t(152),
        x = t(9542),
        _ = t(9040);
      const k = {
          hero: "_862bfa7da8aaf127a0f6b93713c9d011ae7c",
          images: "_862bfa7da8aaf127e2dab39e6c5126668804",
          background: "_862bfa7da8aaf127e0c9e6463db26150996b",
          gradient: "_862bfa7da8aaf127ab26f2cd9dd3ebeca597",
          layered: "_862bfa7da8aaf127f0e0bb0c942263435ce1",
          content: "_862bfa7da8aaf127f404637179268d90cf59",
          descriptions: "_862bfa7da8aaf127f72ff60779d574ab22f5",
          buttonGroup: "_862bfa7da8aaf127ebbfc5e086cae60bf93a",
          legalText: "_862bfa7da8aaf127aaf6cb52ad427d9e4073",
          shardsCarousel: "_862bfa7da8aaf127dba85fe900bdfcb976a9"
        },
        N = e => {
          let {
            title: a = "",
            mobileImg: t,
            desktopImg: n
          } = e;
          const i = (0, x.useGetCdnSource)(t ?? null),
            r = (0, x.useGetCdnSource)(n ?? i);
          return (0, s.jsx)("div", {
            className: k.shard,
            style: {
              "--background-image-mobile": `url(${i})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, s.jsx)("h5", {
              children: a
            })
          })
        },
        j = e => {
          let {
            title: a = "Membership Rewards",
            shards: t
          } = e;
          const [n, i] = (0, h.useState)(null);
          return (0, h.useEffect)((() => {
            t && i(t.map((e => {
              if (!e?.shardImg) return;
              const {
                title: a,
                shardImg: t
              } = e, {
                mobile: n,
                desktop: i
              } = t;
              return (0, s.jsx)(N, {
                title: a,
                mobileImg: n?.full_src,
                desktopImg: i?.full_src
              })
            })))
          }), [t]), n ? (0, s.jsx)("div", {
            className: k.shardsCarousel,
            children: (0, s.jsx)(g.Gen9CoreCarousel, {
              title: a,
              slideChildren: n,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        y = e => {
          let {
            brands: a = [],
            backgroundImg: t,
            layeredImg: i,
            ctas: r = [],
            expandingButtonLabel: d = "Subscribe",
            platformsAndLinks: l = [],
            description: c,
            title: o,
            legalText: u,
            shardsSection: f = {},
            className: m
          } = e;
          const b = (0, x.useGetCdnSource)(t?.mobile?.full_src ?? null),
            v = (0, x.useGetCdnSource)(t?.desktop?.full_src ?? b),
            h = (0, x.useGetCdnSource)(i?.mobile?.full_src ?? null),
            N = (0, x.useGetCdnSource)(i?.desktop?.full_src ?? h),
            y = {
              visible: {
                opacity: 1,
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
            S = {
              visible: {
                opacity: 1,
                y: 0,
                height: "100%",
                overflow: "hidden",
                transition: {
                  ease: [.5, 0, 0, 1],
                  duration: .75
                }
              },
              hidden: {
                opacity: 0,
                y: 100,
                height: "0%",
                overflow: "hidden"
              }
            };
          return (0, s.jsxs)(p.E.div, {
            className: (0, x.classList)(k.hero, m),
            style: {
              "--background-image-desktop": `url(${v})`,
              "--background-image-mobile": `url(${b})`,
              "--layered-image-desktop": `url(${N})`,
              "--layered-image-mobile": `url(${h})`
            },
            initial: "hidden",
            animate: "visible",
            variants: y,
            children: [(0, s.jsxs)("div", {
              className: k.images,
              children: [v && b ? (0, s.jsx)("div", {
                className: k.background,
                style: t?.style ?? {}
              }) : "", h && N ? (0, s.jsx)("div", {
                className: k.layered
              }) : "", (0, s.jsx)("div", {
                className: k.gradient
              })]
            }), (0, s.jsxs)(p.E.div, {
              className: k.content,
              initial: "hidden",
              animate: "visible",
              variants: y,
              children: [(0, s.jsx)(p.E.div, {
                variants: S,
                children: (0, s.jsx)(n.Z, {
                  brands: a
                })
              }), l.length ? (0, s.jsx)(p.E.div, {
                variants: S,
                children: (0, s.jsx)(g.ExpandingPlatformButton, {
                  buttonText: d,
                  platformsAndLinks: l,
                  children: (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(p.E.div, {
                      className: k.descriptions,
                      variants: S,
                      children: [(0, s.jsx)("h2", {
                        dangerouslySetInnerHTML: {
                          __html: o
                        }
                      }), (0, s.jsx)("p", {
                        dangerouslySetInnerHTML: {
                          __html: c
                        }
                      })]
                    }), (0, s.jsx)(p.E.div, {
                      variants: S,
                      children: (0, s.jsx)(_.Z, {
                        buttons: r,
                        className: k.buttonGroup
                      })
                    })]
                  })
                })
              }) : (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsxs)(p.E.div, {
                  className: k.descriptions,
                  variants: S,
                  children: [(0, s.jsx)("h2", {
                    dangerouslySetInnerHTML: {
                      __html: o
                    }
                  }), (0, s.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: c
                    }
                  })]
                }), (0, s.jsx)(p.E.div, {
                  variants: S,
                  children: (0, s.jsx)(_.Z, {
                    buttons: r,
                    className: k.buttonGroup
                  })
                })]
              }), u && (0, s.jsx)(p.E.div, {
                className: k.legalText,
                variants: S,
                children: (0, s.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: u
                  }
                })
              })]
            }), f?.shards && (0, s.jsx)(j, {
              ...f
            })]
          })
        };
      var S = t(9023),
        T = t(3873),
        C = t(5209);
      const E = {},
        w = e => {
          let {
            brand: a
          } = e;
          return (0, s.jsx)("div", {
            className: E[a]
          })
        },
        M = () => (0, s.jsx)("h2", {
          children: "Section"
        });
      var L = t(8292),
        B = t(8486)
    },
    5133: (e, a, t) => {
      "use strict";
      t.d(a, {
        MB: () => i,
        aQ: () => r.a,
        KO: () => m,
        kt: () => b,
        yv: () => l,
        YM: () => o
      });
      var n = t(4859);
      const s = (0, n.makeVar)({
          brand: null,
          headerHeight: 0,
          headerHidden: !1,
          mobileNavOpen: !1,
          activeSection: null
        }),
        i = () => {
          const e = (0, n.useReactiveVar)(s),
            a = e => {
              const a = {
                ...s(),
                ...e
              };
              s(a)
            };
          return {
            state: e,
            setBrand: e => {
              a({
                brand: e
              })
            },
            setHeaderHeight: e => {
              a({
                headerHeight: e
              })
            },
            setHeaderHidden: e => {
              a({
                headerHidden: e
              })
            },
            setMobileNavOpen: e => {
              a({
                mobileNavOpen: e
              })
            },
            setActiveSection: e => {
              a({
                activeSection: e
              })
            }
          }
        };
      var r = t(5851),
        d = t(9363);
      const l = () => {
        const {
          data: e
        } = (0, n.useQuery)(d.TinaModulesTree, {
          variables: {
            type: "gen9-guide-group"
          }
        });
        return e?.tinaModulesTree ?? null
      };
      var c = t(4932);
      t(3653), t(5921);
      const o = () => {
        const [e, a] = (0, c.useState)([{
          title: "Overview",
          to: "/gta-v"
        }, {
          title: "GTA Online",
          to: "/gta-online",
          activeExact: !0
        }, {
          title: "GTA+",
          to: "/gta-plus"
        }, {
          title: "Guides",
          to: "/gta-online/guides",
          children_key: "guides"
        }, {
          title: "Support",
          to: "https://support.rockstargames.com"
        }]);
        return e
      };
      var u = t(6711),
        f = t(3321);
      const m = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " > ";
          const [t, s] = (0, c.useState)(null), {
            data: i
          } = (0, n.useQuery)(f.TinaModulesTree, {
            variables: {
              id: e
            },
            skip: !e
          });
          return (0, c.useEffect)((() => {
            const e = i?.tinaModulesTree?.[0]?.tree ?? null;
            e && s(e.map((e => {
              let {
                title: a
              } = e;
              return a
            })).join(a))
          }), [i, a, e]), t
        },
        b = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " > ";
          const {
            track: t
          } = (0, u.useGtmTrack)(), n = m(e, a);
          return (0, c.useEffect)((() => {
            n && t({
              event: "nav_click",
              event_category: "nav",
              event_action: "click",
              event_label: n
            })
          }), [n])
        }
    },
    5851: (e, a, t) => {
      "use strict";
      t.d(a, {
        E: () => o,
        a: () => c
      });
      var n = t(4932),
        s = t(3102),
        i = t(3657),
        r = t(5133),
        d = t(6160);
      const l = (0, n.createContext)(),
        c = () => (0, n.useContext)(l),
        o = e => {
          let {
            children: a
          } = e;
          const [t, c] = (0, n.useState)(null), [o] = (0, s.useSearchParams)(), {
            setActiveSection: u
          } = (0, r.MB)(), {
            pauseUserShouldSeeMore: f
          } = (0, i.useScroll)(), m = (0, n.useCallback)((e => {
            if (e !== o.get("section")) return void u(e);
            const a = document.getElementsByName(o.get("section"))?.[0];
            a && (f(), u(o.get("section")), a.scrollIntoView({
              behavior: "auto"
            }))
          }), [o.get("section"), t]);
          (0, n.useEffect)((() => {
            o.get("section") && m(o.get("section"))
          }), [o.get("section")]);
          const b = (0, n.useMemo)((() => ({
            announcePresence: m,
            section: t,
            setSection: c
          })), [m, t, c]);
          return (0, d.jsx)(l.Provider, {
            value: b,
            children: a
          })
        }
    },
    5921: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        componentsForTinaParser: () => y,
        componentsForTinaParserGuide: () => S
      });
      var n = t(8976),
        s = t(2672),
        i = t(6573),
        r = t(6947),
        d = t(420),
        l = t.n(d),
        c = t(5255),
        o = t.n(c),
        u = t(8920),
        f = t.n(u),
        m = t(4575),
        b = t(4986),
        v = t(3719),
        h = t(8428),
        g = t(8756),
        p = t(6780),
        x = t(5731),
        _ = t(3873),
        k = t(5209),
        N = t(8292),
        j = t(8262);
      const y = {
          CalloutSection: n.CalloutSection,
          Card: s.Card,
          CardWithImageGallery: s.CardWithImageGallery,
          ConditionalBlock: n.ConditionalBlock,
          CoverCard: s.CoverCard,
          EventsDeck: r.EventsDeck,
          PageTemplate: o(),
          ExpandingPlatformButton: n.ExpandingPlatformButton,
          TextCard: s.TextCard,
          Deck: s.Deck,
          Grid: n.Grid,
          Hero: n.Hero,
          HighlightsItem: i.HighlightsItem,
          HTMLElement: n.HTMLElement,
          OrderedList: n.OrderedList,
          UnorderedList: n.UnorderedList,
          ImageWithBadge: n.ImageWithBadge,
          Carousel: n.Carousel,
          GroupOfItems: l(),
          Rating: n.Rating,
          gen9: j,
          TinaModuleFetchNRender: n.TinaModuleFetchNRender,
          PromoModule: n.PromoModule,
          Engagement: f()
        },
        S = {
          CalloutSection: n.CalloutSection,
          Card: s.Card,
          CardWithImageGallery: s.CardWithImageGallery,
          ConditionalBlock: n.ConditionalBlock,
          CoverCard: s.CoverCard,
          Carousel: n.Carousel,
          ExpandingPlatformButton: n.ExpandingPlatformButton,
          Hero: n.Hero,
          Grid: n.Grid,
          TextCard: s.TextCard,
          Deck: s.Deck,
          GroupOfItems: l(),
          PromoModule: n.PromoModule,
          Engagement: f(),
          gen9: {
            BuyNow: m.Z,
            Disclaimer: b.Z,
            FAQ: v.Z,
            Guide: h.Z,
            GuideGroup: g.Z,
            GuideIntro: p.Z,
            GuideSection: x.Z,
            Hero: n.Hero,
            ImageTextGroupGroup: _.Z,
            LinkoutSection: k.Z,
            TinaWrapper: N.Z,
            UserVote: () => null
          },
          HTMLElement: n.HTMLElement,
          OrderedList: n.OrderedList,
          UnorderedList: n.UnorderedList,
          ImageWithBadge: n.ImageWithBadge,
          Rating: n.Rating,
          TinaModuleFetchNRender: n.TinaModuleFetchNRender,
          UserVote: n.UserVote
        }
    },
    9363: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesTree"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "type"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesTree"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "type"
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
                        value: "to"
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
                            value: "to"
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
          end: 331
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
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
        body: "query TinaModulesTree($type: String, $locale: String!) {\n    tinaModulesTree(type: $type, locale: $locale) {\n        title\n        id_hash\n        children {\n            title\n            to\n            id_hash\n            children {\n                title\n                to\n                id_hash\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesTree = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = n[a] || new Set,
          r = new Set,
          d = new Set;
        for (i.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = s(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "TinaModulesTree")
    },
    3321: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesTree"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "id"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesTree"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
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
                    value: "tree"
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
          end: 213
        }
      };

      function t(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && a.add(n.name.value)
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
        body: "query TinaModulesTree($id: String, $locale: String!) {\n    tinaModulesTree(id: $id, locale: $locale) {\n        tree {\n            title\n            children {\n                title\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function s(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var n = e.definitions[t];
          if (n.name && n.name.value == a) return n
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), n[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesTree = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [s(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = n[a] || new Set,
          r = new Set,
          d = new Set;
        for (i.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var n = s(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "TinaModulesTree")
    },
    3149: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => n
      });
      const n = {
        plusButton: "_862bfa7da8aaf127eaf97f3aa17b34d60e3a",
        small: "_862bfa7da8aaf127a77f1ead5ab02c974fcf",
        btnText: "_862bfa7da8aaf127f03f8769fa832b9a631c",
        btnTexticon: "_862bfa7da8aaf127bbc8bcb358ddf5daa128",
        whiteBtn: "_862bfa7da8aaf127c7492ef8338b8c3a47af",
        blackBtn: "_862bfa7da8aaf127a3ff8ca9eb4efdeecb8f",
        transparentBtn: "_862bfa7da8aaf127ac0ef5dc28fc97aa7630",
        iconBtn: "_862bfa7da8aaf127bac67499c6b043ecfe74",
        link: "_862bfa7da8aaf127bf556069ce72fd3a9254",
        xboxone: "_862bfa7da8aaf127a650281988f864449572",
        xboxseriesxs: "_862bfa7da8aaf127beb2de0f5934aa117022",
        ps4: "_862bfa7da8aaf127af87707a3b189d27699e",
        ps5: "_862bfa7da8aaf127ea7659d89cb05d5af425",
        pc: "_862bfa7da8aaf127aeec255f08e7e48e80de"
      }
    },
    8369: (e, a, t) => {
      var n = {
        "./left.svg": 7060,
        "./pc.svg": 4273,
        "./ps4.svg": 8838,
        "./ps5.svg": 9349,
        "./right.svg": 3356,
        "./x.svg": 8375,
        "./xboxone.svg": 5262,
        "./xboxseriesxs.svg": 3004
      };

      function s(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      s.keys = function() {
        return Object.keys(n)
      }, s.resolve = i, e.exports = s, s.id = 8369
    },
    7060: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/bcaca8dc494732cb2ca1.svg"
    },
    4273: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/af7a4b3f215a9ffd7074.svg"
    },
    8838: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/399e4fadd28201f041fe.svg"
    },
    9349: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/fa23bf61b10367b5ae17.svg"
    },
    3356: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3b3e471f51bfbca10f05.svg"
    },
    8375: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/cd7ecd01ec2f916d6c4b.svg"
    },
    5262: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/3852a2c6a70d09be710a.svg"
    },
    3004: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/1b0d3aef02ce7792cd29.svg"
    },
    928: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/b23842cdcf5fcfe4e323.svg"
    }
  }
]);
//# sourceMappingURL=f1f038cc9f3aa84b46d9.js.map