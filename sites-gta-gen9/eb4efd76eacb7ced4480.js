(self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [133], {
    426: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => s
      });
      var n = a(6160);
      const s = e => {
        let {
          brands: t = []
        } = e;
        return t.length ? (0, n.jsx)("div", {
          className: "_3f86585c4dc0e394fa7548a67d1d96bae529",
          children: t.map(((e, t) => {
            let {
              brand: a
            } = e;
            return (0, n.jsx)("div", {
              className: "_3f86585c4dc0e394f5b32d0efcce86875ef3",
              "data-brand": a
            }, t)
          }))
        }) : null
      }
    },
    5900: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => d
      });
      var n = a(3102),
        s = a(3149),
        i = a(6160);
      const c = e => {
          let {
            children: t,
            className: a,
            onClick: n,
            style: s,
            innerRef: c = null
          } = e;
          return (0, i.jsx)("button", {
            className: a,
            onClick: n,
            style: s,
            type: "button",
            ref: c,
            children: t
          })
        },
        r = e => {
          let {
            children: t,
            className: a,
            onClick: s,
            style: c,
            to: r
          } = e;
          return (0, i.jsx)(n.NavLink, {
            className: a,
            onClick: s,
            style: c,
            to: r,
            children: t
          })
        },
        d = e => {
          let {
            text: t,
            onClick: a,
            btnColor: n = "#fff",
            labelColor: d = "#000",
            type: o = "",
            icon: l,
            size: u,
            secondText: m,
            consoleBtn: f = !1,
            img: v,
            to: b = !1,
            innerRef: h = null
          } = e;
          const g = [s.Z.plusButton, s.Z[o] ?? "", s.Z[u] ?? "", s.Z[f] ?? ""].join(" "),
            p = {
              "--hvr-color": n ?? d,
              "--hvr-bg-color": d ?? n,
              "--hvr-border-color": n ?? d
            },
            x = (0, i.jsxs)(i.Fragment, {
              children: [v ? (0, i.jsx)("img", {
                src: v,
                alt: t
              }) : "", (0, i.jsxs)("div", {
                className: s.Z.btnText,
                icon: l,
                children: [t, m ? (0, i.jsx)("span", {
                  children: m
                }) : ""]
              })]
            });
          if (b) {
            if (b.startsWith("http")) {
              const e = b.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, i.jsx)("span", {
                onClick: a,
                onKeyUp: e => {
                  "Enter" === e.code && a()
                },
                role: "button",
                tabIndex: -1,
                children: (0, i.jsx)("a", {
                  href: b,
                  className: g,
                  target: e,
                  children: x
                })
              })
            }
            return (0, i.jsx)(r, {
              className: g,
              onClick: a,
              style: p,
              to: b,
              children: x
            })
          }
          return (0, i.jsx)(c, {
            className: g,
            onClick: a,
            style: p,
            innerRef: h,
            children: x
          })
        }
    },
    9040: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => c
      });
      var n = a(9542),
        s = a(5900);
      var i = a(6160);
      const c = e => {
        let {
          buttons: t = [],
          className: a
        } = e;
        return t.length ? (0, i.jsx)("div", {
          className: (0, n.classList)("_3f86585c4dc0e394a67c709116a5f4f75e82", a),
          children: t.map(((e, t) => {
            let {
              icon: a,
              to: n,
              title: c
            } = e;
            return c ? (0, i.jsx)(s.Z, {
              className: "white",
              text: c,
              to: n
            }, t) : ""
          }))
        }) : null
      }
    },
    4575: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => p
      });
      var n = a(4932),
        s = a(152),
        i = a(8976),
        c = a(6711),
        r = a(2747),
        d = a(9542),
        o = a(822),
        l = a(5763),
        u = a(5900);
      const m = {
        buyNowArea: "_3f86585c4dc0e394efcd9567132aac95f154",
        topArea: "_3f86585c4dc0e394fb3daf8cc213c20c1c63",
        btnArea: "_3f86585c4dc0e394cb71eb2277f2f8959b53",
        nextBtn: "_3f86585c4dc0e394fabbb6293e97df616a6d",
        prevBtn: "_3f86585c4dc0e394d0381b4129d767175125",
        card: "_3f86585c4dc0e394aa02ad7590a39a0f968e",
        content: "_3f86585c4dc0e394df7b9bc0c51447f90251",
        contentGrid: "_3f86585c4dc0e394f91570bf2eaa28e2e9ba",
        titleArea: "_3f86585c4dc0e394ccc7fd4ca6767885c3b0",
        platforms: "_3f86585c4dc0e394db10d9156046db2ec4bf",
        addedInfo: "_3f86585c4dc0e394cbb51f2f186585dad18f",
        ctaBtn: "_3f86585c4dc0e394b92affb274fa1d59c710",
        linksArea: "_3f86585c4dc0e394df02feba9f63401c9d24",
        closeBtn: "_3f86585c4dc0e394dc3d2ef3ee813c3f8c7a",
        closeButtonWrapper: "_3f86585c4dc0e394d8da1bb38c84a542824d",
        linkList: "_3f86585c4dc0e394c7eec41dd80691bd8cef",
        bottomText: "_3f86585c4dc0e394a73e84db690d5d7daad2",
        imageGroup: "_3f86585c4dc0e394c73981c709dbcaf563ba",
        imgMobile: "_3f86585c4dc0e394fff781f9e4330b08e27e",
        imgDesktop: "_3f86585c4dc0e394c20a50dab334287d202a",
        responsiveImages: "_3f86585c4dc0e394ca36676f86619286e390",
        backgroundImage: "_3f86585c4dc0e394d734957eefc52e0735a9",
        foregroundImage: "_3f86585c4dc0e394d6dadb070d930bb14ad7"
      };
      var f = a(3149),
        v = a(6160);
      const b = e => {
          let {
            className: t,
            images: a
          } = e;
          const n = (0, d.useGetCdnSource)(a?.mobile?.full_src ?? null),
            s = (0, d.useGetCdnSource)(a?.desktop?.full_src ?? n);
          return (0, v.jsxs)("div", {
            className: [t, m.responsiveImages].join(" "),
            children: [n ? (0, v.jsx)("div", {
              className: m.imgMobile,
              style: {
                background: `url(${n}) no-repeat center/cover`
              }
            }) : "", s ? (0, v.jsx)("div", {
              className: m.imgDesktop,
              style: {
                background: `url(${s}) no-repeat center/cover`
              }
            }) : ""]
          })
        },
        h = e => {
          let {
            addedInfo: t = null,
            buynowbtn: i = null,
            description: r = null,
            images: d,
            links: l = [],
            title: h = null
          } = e;
          const {
            track: g
          } = (0, c.useGtmTrack)(), p = {
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
          return (0, v.jsx)(o.o5, {
            children: (0, v.jsxs)("div", {
              className: m.card,
              children: [(0, v.jsxs)("div", {
                className: m.imageGroup,
                children: [(0, v.jsx)(b, {
                  className: m.backgroundImage,
                  images: d?.background
                }), (0, v.jsx)(b, {
                  className: m.foregroundImage,
                  images: d?.foreground
                })]
              }), (0, v.jsxs)("div", {
                className: m.content,
                children: [(0, v.jsxs)(s.E.div, {
                  className: m.contentGrid,
                  animate: x ? "open" : "closed",
                  variants: y,
                  children: [(0, v.jsxs)("div", {
                    className: m.titleArea,
                    children: [(0, v.jsx)("h2", {
                      dangerouslySetInnerHTML: {
                        __html: h
                      }
                    }), (0, v.jsx)("p", {
                      dangerouslySetInnerHTML: {
                        __html: r
                      }
                    })]
                  }), l.length ? (0, v.jsx)("div", {
                    className: m.platforms,
                    children: l.map(((e, t) => (0, v.jsx)("div", {
                      className: m[e.platform],
                      children: e.platform ? (0, v.jsx)("img", {
                        src: a(8369)(`./${e.platform}.svg`),
                        alt: `${"xboxone"===e.platform?"xbox one":e.platform}`
                      }) : ""
                    }, `${e.platform+t}`)))
                  }) : ""]
                }), t ? (0, v.jsx)(s.E.p, {
                  className: m.addedInfo,
                  dangerouslySetInnerHTML: {
                    __html: t
                  },
                  animate: x ? "open" : "closed",
                  variants: y
                }) : "", i ? (0, v.jsxs)(s.E.div, {
                  onClick: () => {
                    _(!x), g(p), x || g({
                      event_action: "select_platform",
                      event_category: "cta",
                      event: "select_platform",
                      event_label: h?.toLowerCase()
                    })
                  },
                  className: [m.ctaBtn, f.Z.plusButton].join(" "),
                  animate: x ? "open" : "closed",
                  variants: T,
                  initial: !1,
                  children: [(0, v.jsx)(s.E.div, {
                    className: [m.ctaBtnText, f.Z.btnText].join(" "),
                    children: i
                  }), (0, v.jsxs)(s.E.div, {
                    className: [m.linksArea, x ? m.showLinks : ""].join(" "),
                    animate: x ? "open" : "closed",
                    variants: S,
                    initial: !1,
                    children: [(0, v.jsx)("button", {
                      type: "button",
                      className: m.closeButtonWrapper,
                      onClick: () => {
                        _(!1), g(p), g({
                          event_action: "close",
                          event_category: "select_platform",
                          event: "select_platform",
                          event_label: h?.toLowerCase()
                        })
                      },
                      children: (0, v.jsx)("img", {
                        className: m.closeBtn,
                        src: a(8375),
                        alt: "Close menu button"
                      })
                    }), (0, v.jsx)("div", {
                      className: m.linkList,
                      children: l.length ? l.map(((e, t) => (0, v.jsx)(u.Z, {
                        type: "blackBtn",
                        size: "large",
                        img: a(8369)(`./${e.platform}.svg`),
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
                      }, `${e.platform+t}`))) : ""
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
            cards: t = [],
            bottomText: a,
            topText: s
          } = e;
          const {
            track: i
          } = (0, c.useGtmTrack)(), {
            ref: d,
            inView: u
          } = (0, r.YD)({
            threshold: .6
          }), [f, b] = (0, n.useState)(!1);
          return (0, n.useEffect)((() => {
            u && !f && (i({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `buy now - ${s}`.toLowerCase(),
              element_placement: `buy now - ${s}`.toLowerCase()
            }), b(!0))
          }), [u]), (0, v.jsxs)("div", {
            className: m.buyNowArea,
            ref: d,
            children: [(0, v.jsxs)("div", {
              className: m.topArea,
              children: [s ? (0, v.jsx)("h2", {
                children: s
              }) : "", (0, v.jsxs)("div", {
                className: m.btnArea,
                children: [(0, v.jsx)("div", {
                  className: m.prevBtn
                }), (0, v.jsx)("div", {
                  className: m.nextBtn
                })]
              })]
            }), t?.length ? (0, v.jsx)(o.tq, {
              grabCursor: !0,
              navigation: {
                nextEl: `.${m.nextBtn}`,
                prevEl: `.${m.prevBtn}`
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
              modules: [l.W_],
              breakpoints: g,
              children: t.map((e => (0, n.createElement)(h, {
                ...e,
                key: JSON.stringify(e)
              }))) ?? ""
            }) : "", a ? (0, v.jsx)("p", {
              className: m.bottomText,
              children: a
            }) : ""]
          })
        })))
    },
    4986: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => i
      });
      var n = a(9542);
      var s = a(6160);
      const i = e => {
        let {
          disclaimer: t,
          text: a = null,
          title: i,
          className: c = "",
          style: r = {}
        } = e;
        const d = a ?? t?.text ?? null,
          o = i ? `<h5>${i}</h5>${d}` : d;
        return d ? (0, s.jsx)("div", {
          className: (0, n.classList)("_3f86585c4dc0e394df323a339dbf583bc2c5", c),
          dangerouslySetInnerHTML: {
            __html: o
          },
          style: r
        }) : null
      }
    },
    3719: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => r
      });
      var n = a(4932),
        s = a(8976),
        i = a(5900);
      var c = a(6160);
      const r = (0, s.withSimpleErrorBoundary)((e => {
        let {
          buttonTxt: t,
          description: a,
          disclaimer: s,
          faqList: r = [],
          initialLength: d = 6,
          addedLength: o = 6,
          title: l,
          tinaModulesInfo: u
        } = e;
        const [m, f] = (0, n.useState)(d);
        return (0, c.jsxs)("div", {
          className: "_3f86585c4dc0e394b3509cdab40e95e26002",
          children: [(0, c.jsxs)("div", {
            className: "_3f86585c4dc0e394efce021b52132a4fe087",
            children: [(0, c.jsxs)("div", {
              children: [(0, c.jsx)("h3", {
                children: u?.[0]?.title ?? l
              }), (0, c.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: a
                }
              })]
            }), (0, c.jsx)("div", {
              className: "_3f86585c4dc0e394e07164a79464876f4bde",
              children: r.length ? r.slice(0, m).map(((e, t) => {
                let {
                  question: a,
                  answer: n
                } = e;
                return (0, c.jsxs)("details", {
                  children: [(0, c.jsx)("summary", {
                    children: a
                  }), (0, c.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: n
                    }
                  })]
                }, t)
              })) : ""
            }), r.length > m ? (0, c.jsx)(i.Z, {
              onClick: () => f(m + o),
              text: t
            }) : ""]
          }), (0, c.jsx)("div", {
            className: "_3f86585c4dc0e394d8d021028ace4c8cb7a2",
            dangerouslySetInnerHTML: {
              __html: s
            }
          })]
        })
      }))
    },
    8428: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => i
      });
      var n = a(5851);
      var s = a(6160);
      const i = e => {
        let {
          children: t,
          style: a
        } = e;
        return (0, s.jsx)(n.E, {
          children: (0, s.jsx)("div", {
            className: "_3f86585c4dc0e394fafb0bfa8877f0bd98dd",
            style: a,
            "data-type": "guide",
            children: (0, s.jsx)("div", {
              className: "_3f86585c4dc0e394f996fd45d04119fb2ddc",
              children: t
            })
          })
        })
      }
    },
    8756: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => l
      });
      var n = a(4932),
        s = a(3653),
        i = a.n(s),
        c = a(8976),
        r = a(559);
      var d = a(6160);
      const o = e => {
          let {
            guide: t
          } = e, a = {
            hero: {}
          };
          i().cloneDeepWith(t, ((e, t) => {
            "images" === t && (a = e)
          }));
          const {
            src: n
          } = (0, r.useImageParser)(a?.thumb ?? {});
          return (0, d.jsx)("div", {
            className: "_3f86585c4dc0e394a02afa3a30a4c2daecb9",
            children: (0, d.jsxs)(c.A, {
              to: t.to,
              children: [(0, d.jsx)("div", {
                style: {
                  "--aspect-ratio": 1,
                  background: `url(${n?.mobile}) no-repeat center/cover`
                }
              }), (0, d.jsx)("h4", {
                children: t.title
              })]
            })
          })
        },
        l = e => {
          let {
            guides: t = {},
            tinaModulesInfo: a,
            title: s
          } = e;
          const r = i().map(t, "guide_id"),
            l = (0, c.useTinaModuleFetchByIds)({
              ids: r
            }),
            [u, m] = (0, n.useState)(null);
          return (0, n.useEffect)((() => {
            const e = l?.map(((e, t) => (0, d.jsx)(o, {
              guide: e
            }, t)));
            m(e)
          }), [l]), (0, d.jsx)(c.Gen9CoreCarousel, {
            size: "lg",
            slideChildren: u,
            title: a?.[0]?.title ?? s
          })
        }
    },
    6780: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => o
      });
      var n = a(9542),
        s = a(3102),
        i = a(5133);
      var c = a(6160);
      const r = () => {
          const {
            guideId: e
          } = (0, s.useParams)(), t = (0, i.KO)(e, "<span></span>");
          return t ? (0, c.jsx)("div", {
            className: "_3f86585c4dc0e394ccc9a48ce26a7f8eccfa",
            dangerouslySetInnerHTML: {
              __html: `Guides<span></span>${t}`
            }
          }) : null
        },
        d = e => {
          let {
            hero: t
          } = e;
          const {
            alt: a,
            src: s = {}
          } = (0, n.useImageParser)(t) ?? {}, {
            mobile: i
          } = s;
          if (i) return (0, c.jsx)("div", {
            "aria-label": a,
            className: "_3f86585c4dc0e394d029521293f260e2e565",
            role: "img",
            style: {
              background: `url(${i}) no-repeat center/contain`
            }
          })
        },
        o = e => {
          let {
            blurb: t,
            hero: a,
            title: n
          } = e;
          return (0, c.jsxs)(c.Fragment, {
            children: [a ? (0, c.jsx)(d, {
              hero: a
            }) : "", (0, c.jsxs)("div", {
              className: "_3f86585c4dc0e394bff4125d94bb6017f533",
              children: [(0, c.jsx)(r, {}), (0, c.jsx)("h1", {
                children: n
              }), t && (0, c.jsx)("span", {
                className: "_3f86585c4dc0e394e4ef31aad749a9acd084",
                dangerouslySetInnerHTML: {
                  __html: t
                }
              })]
            })]
          })
        }
    },
    7240: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => g
      });
      var n = a(4932),
        s = a(3102),
        i = a(3653),
        c = a.n(i),
        r = a(152),
        d = a(8976),
        o = a(5133);
      const l = {
        guideNav: "_3f86585c4dc0e394fafeb1bf08103794f39f",
        headerHidden: "_3f86585c4dc0e394b6d7b06f062c246fa382",
        guideList: "_3f86585c4dc0e394ef07d6110417298701b2",
        activeSection: "_3f86585c4dc0e394ce841afb83b64686ea9e",
        guideLinkCurrent: "_3f86585c4dc0e394fabf9908f285fcf97596",
        guide: "_3f86585c4dc0e394ca53bde09b5900585bda",
        sections: "_3f86585c4dc0e394e3ef1dcb43d473bdd596"
      };
      var u = a(6160);
      const m = {
          ease: "easeInOut",
          duration: .3
        },
        f = {
          closed: {
            opacity: 0,
            height: "0px"
          },
          open: {
            opacity: 1,
            height: "auto"
          }
        },
        v = e => {
          let {
            to: t,
            title: a,
            id_hash: s,
            query: i
          } = e;
          const [c, r] = (0, n.useState)(s === i), {
            state: m
          } = (0, o.MB)(), {
            activeSection: f
          } = m;
          return (0, n.useEffect)((() => r(i !== f ? f === s : i === s)), [f]), (0, u.jsx)(d.A, {
            to: t,
            className: c ? l.activeSection : "",
            children: a
          }, t)
        },
        b = e => {
          let {
            sections: t
          } = e;
          const [a] = (0, s.useSearchParams)();
          return (0, u.jsx)("div", {
            className: l.sections,
            children: t?.map((e => {
              let {
                id_hash: t,
                title: n,
                to: s
              } = e;
              return (0, u.jsx)(v, {
                id_hash: t,
                query: a,
                title: n,
                to: s
              })
            }))
          })
        },
        h = e => {
          let {
            currentId: t,
            group: a
          } = e;
          const [s, i] = (0, n.useState)(null), [v, h] = (0, n.useState)(null), {
            state: g
          } = (0, o.MB)(), {
            activeSection: p
          } = g;
          return (0, n.useEffect)((() => {
            const e = c().findIndex(a?.children, (e => {
              let {
                id_hash: a
              } = e;
              return a === t
            }));
            h(e), i(-1 !== e)
          }), [t, p, a]), (0, u.jsxs)("div", {
            className: l.guideList,
            children: [(0, u.jsx)("button", {
              type: "button",
              onClick: () => i(!s),
              children: a.title
            }), (0, u.jsx)(r.E.nav, {
              animate: s ? "open" : "closed",
              variants: f,
              transition: m,
              children: a?.children?.map(((e, a) => {
                let {
                  children: n,
                  id_hash: s,
                  title: i,
                  to: c
                } = e;
                return (0, u.jsxs)("div", {
                  className: l.guide,
                  children: [(0, u.jsx)(d.A, {
                    className: [l.guideLink, t === s ? l.guideLinkCurrent : ""].join(" "),
                    to: c,
                    children: i
                  }), a === v && n?.length ? (0, u.jsx)(b, {
                    sections: n
                  }) : ""]
                }, i)
              }))
            })]
          })
        },
        g = e => {
          let {
            currentId: t
          } = e;
          const a = (0, o.yv)(),
            {
              state: {
                headerHeight: n,
                headerHidden: s
              }
            } = (0, o.MB)();
          return (0, u.jsx)("div", {
            className: [l.guideNav, s ? l.headerHidden : ""].join(" "),
            style: {
              "--header-height": `${n}px`
            },
            children: a?.map((e => (0, u.jsx)(h, {
              currentId: t,
              group: e
            }, e.id_hash)))
          })
        }
    },
    5731: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => r
      });
      var n = a(4932),
        s = a(2747),
        i = a(5133);
      var c = a(6160);
      const r = e => {
        let {
          style: t,
          children: a,
          __anchor: r = null
        } = e;
        const {
          announcePresence: d
        } = (0, i.aQ)(), {
          ref: o,
          inView: l
        } = (0, s.YD)({
          rootMargin: "0px 0px -700px 0px",
          threshold: 0,
          delay: 850
        });
        return (0, n.useEffect)((() => {
          d(r)
        }), [r]), (0, n.useEffect)((() => {
          l && d(r)
        }), [l]), (0, c.jsx)("span", {
          style: t,
          className: "_3f86585c4dc0e394d49366acea7b328026c0",
          name: r,
          ref: o,
          children: a
        })
      }
    },
    8110: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => S
      });
      var n = a(4932),
        s = a(3102),
        i = a(8976),
        c = a(6711),
        r = a(9929),
        d = a(3657),
        o = a(5900),
        l = a(3653),
        u = a.n(l),
        m = a(5133);
      const f = {
        gen9Nav: "_3f86585c4dc0e394a616477b6a6e1ed0f6ac",
        activeLink: "_3f86585c4dc0e394c4fca99870c4faa1f18d",
        subNav: "_3f86585c4dc0e394cb4e7d61fd6679fb7a1e",
        subNavOpen: "_3f86585c4dc0e394ff7acb2b4e6eb0468800",
        navGroup: "_3f86585c4dc0e394b1c7e7a170e8c7982809",
        subNavUnder: "_3f86585c4dc0e394f5524031d9fa9c37eeb5",
        subNavRight: "_3f86585c4dc0e394c13b50d941584d4e3152"
      };
      var v = a(6160);
      const b = e => {
          let {
            activeExact: t = !1,
            to: a,
            title: s,
            under: r = !0,
            childModules: d = [],
            t: o
          } = e;
          const {
            track: l
          } = (0, c.useGtmTrack)(), [m, h] = (0, n.useState)(!1), g = u().debounce((() => {
            h(!1)
          }), 250), p = (0, n.useCallback)((() => {
            g?.cancel(), h(!0)
          }), [g]), x = () => {
            l({
              event: "nav_click",
              event_category: "nav",
              event_action: "click",
              event_label: s.toLowerCase(),
              link_url: a
            })
          };
          return (0, v.jsxs)("div", {
            className: f.navGroup,
            onMouseEnter: p,
            onMouseLeave: g,
            onKeyUp: p,
            onClick: () => h(!1),
            role: "button",
            tabIndex: -1,
            children: [a ? (0, v.jsx)(i.A, {
              end: t,
              to: a,
              target: a.startsWith("http") ? "_blank" : "_self",
              className: e => {
                let {
                  isActive: t
                } = e;
                return t ? f.activeLink : null
              },
              onClick: x,
              children: o(s)
            }) : (0, v.jsx)("button", {
              type: "button",
              onClick: x,
              children: o(s)
            }), d?.length ? (0, v.jsx)("div", {
              className: [f.subNav, r ? f.subNavUnder : f.subNavRight, m ? f.subNavOpen : ""].join(" "),
              children: d?.map((e => (0, v.jsx)(b, {
                under: !1,
                ...e,
                t: o
              }, e?.title)))
            }) : ""]
          })
        },
        h = (0, r.withTranslations)((e => {
          let {
            t
          } = e;
          const a = (0, m.YM)();
          return (0, v.jsx)("nav", {
            className: f.gen9Nav,
            children: a.map((e => {
              let {
                children: a,
                to: n,
                ...s
              } = e;
              return (0, v.jsx)(b, {
                childModules: a,
                to: n,
                t,
                ...s
              }, n)
            }))
          })
        }));
      var g = a(1735),
        p = a(152);
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
            setMobileNavOpen: t
          } = (0, m.MB)(), {
            navOpen: a,
            setNavOpen: s
          } = (0, c.useRockstarUserState)(), i = (0, g._)(), r = (0, g._)(), d = (0, g._)();
          return (0, n.useEffect)((() => {
            !0 === a && !0 === e && t(!1)
          }), [a]), (0, n.useEffect)((() => {
            i.start(e ? x.open : x.closed), r.start(e ? _.open : _.closed), d.start(e ? k.open : k.closed)
          }), [e]), (0, v.jsxs)("svg", {
            className: "_3f86585c4dc0e394b1179e089e89383904b2",
            onClick: () => (async () => {
              t(!e), !0 === a && s(!1)
            })(),
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: [(0, v.jsx)(p.E.path, {
              ...k.closed,
              ...N,
              animate: d
            }), (0, v.jsx)(p.E.path, {
              ..._.closed,
              ...N,
              animate: r
            }), (0, v.jsx)(p.E.path, {
              ...x.closed,
              ...N,
              animate: i
            })]
          })
        },
        y = {
          gen9Header: "_3f86585c4dc0e394d7c271f94626a35ab9e8",
          headerHidden: "_3f86585c4dc0e394d47f3266f70158f40c19",
          content: "_3f86585c4dc0e394ea23ee47c231cf87cc38",
          "content--child": "_3f86585c4dc0e394a6016e70e686815bfbe0",
          branding: "_3f86585c4dc0e394fb19a5e6f94b3c1e56a7",
          logoDivider: "_3f86585c4dc0e394fc35bda511ece88a1b5e",
          brandLogo: "_3f86585c4dc0e394ebb800e1f0823cbb6d54",
          buttonArea: "_3f86585c4dc0e394e517a992627baad1ae35",
          navBtn: "_3f86585c4dc0e394afd960f93c5b83b94948"
        },
        S = (0, r.withTranslations)((e => {
          let {
            t
          } = e;
          const {
            state: {
              brand: a,
              headerHidden: r,
              mobileNavOpen: l
            },
            setHeaderHeight: u,
            setHeaderHidden: f,
            setMobileNavOpen: b
          } = (0, m.MB)(), {
            navOpen: g
          } = (0, c.useRockstarUserState)(), p = (0, n.useRef)(), {
            track: x
          } = (0, c.useGtmTrack)(), [, _] = (0, s.useSearchParams)(), {
            pathname: k
          } = (0, s.useLocation)(), {
            freezeUserShouldSeeMore: N,
            userShouldSeeMore: S
          } = (0, d.useScroll)(), [T, C] = (0, n.useState)(0), E = () => T > 1023;
          return (0, n.useEffect)((() => {
            l || g || N && S || f(S)
          }), [N, l, S, g]), (0, n.useEffect)((() => {
            b(!1)
          }), [k]), (0, n.useEffect)((() => {
            l && f(!1)
          }), [l]), (0, n.useEffect)((() => {
            const e = () => {
              p.current && u(p.current.offsetHeight), C(window.innerWidth)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [p]), (0, v.jsx)("header", {
            className: [y.gen9Header, r ? y.headerHidden : ""].join(" "),
            ref: p,
            children: (0, v.jsxs)("div", {
              className: y.content,
              children: [(0, v.jsxs)("div", {
                className: y.branding,
                "data-brand": a,
                children: [(0, v.jsx)(i.RockstarLogo, {}), (0, v.jsx)("div", {
                  className: y.logoDivider
                }), E() && (0, v.jsx)("div", {
                  className: y.brandLogo
                }), (0, v.jsx)(j, {})]
              }), !E() && (0, v.jsx)("div", {
                className: y.brandLogo,
                "data-brand": a
              }), (0, v.jsx)(h, {}), (0, v.jsx)("div", {
                className: y.buttonArea,
                children: (0, v.jsxs)("div", {
                  className: y.navBtn,
                  children: [!(T < 1024) && (0, v.jsx)(o.Z, {
                    text: t("Buy Now"),
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
                        text: t("Buy Now").toLowerCase()
                      })
                    }
                  }), (0, v.jsx)(c.MenuButton, {})]
                })
              })]
            })
          })
        }))
    },
    9023: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => m
      });
      var n = a(4932),
        s = a(8976),
        i = a(9542),
        c = a(6711),
        r = a(2747),
        d = a(9040),
        o = a(426),
        l = a(4986);
      var u = a(6160);
      const m = s.framer.withFadeIn((e => {
        let {
          brands: t = [],
          content: a,
          ctas: s = [],
          disclaimer: m,
          image: f,
          large: v = !1,
          title: b,
          image_on_right: h = !1,
          style: g = {},
          className: p = ""
        } = e;
        const {
          track: x
        } = (0, c.useGtmTrack)(), {
          ref: _,
          inView: k
        } = (0, r.YD)({
          threshold: .6
        }), [N, j] = (0, n.useState)(!1), y = (0, i.useGetCdnSource)(f?.full_src ?? null) ?? null;
        return (0, n.useEffect)((() => {
          k && !N && (x({
            event: "page_section_impression",
            event_action: "impression",
            event_category: "page_section",
            event_label: `image text group - ${b}`.toLowerCase(),
            element_placement: `image text group - ${b}`.toLowerCase()
          }), j(!0))
        }), [k]), (0, u.jsxs)("div", {
          className: (0, i.classList)("_3f86585c4dc0e394f2cf909dbf3361ec8d57", v ? "_3f86585c4dc0e394c950136646fbbd777bb5" : "", h ? "_3f86585c4dc0e394e6f94a3e17e22b45f308" : "", y ? "" : "_3f86585c4dc0e394cea3e99427bd215be499", p),
          style: g,
          ref: _,
          children: [y ? (0, u.jsx)("div", {
            className: "_3f86585c4dc0e394bcdbc4cde7375da50995",
            style: {
              background: `url(${y}) no-repeat center/cover`
            }
          }) : "", (0, u.jsxs)("div", {
            className: "_3f86585c4dc0e394c5071baf77e4a94ee8fc",
            children: [(0, u.jsx)(o.Z, {
              brands: t
            }), (0, u.jsxs)("div", {
              className: "_3f86585c4dc0e394f494a7678754ce53146a",
              children: [(0, u.jsx)("div", {
                className: "_3f86585c4dc0e394e220a2dcd44c8fc8da2e",
                tabIndex: 0,
                children: b
              }), a ? (0, u.jsx)("div", {
                className: "_3f86585c4dc0e394ccc4915c23b879942955",
                dangerouslySetInnerHTML: {
                  __html: a
                }
              }) : ""]
            }), (0, u.jsx)(d.Z, {
              ctas: s
            }), (0, u.jsx)(l.Z, {
              disclaimer: m
            })]
          })]
        })
      }))
    },
    3873: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => r
      });
      var n = a(9542),
        s = a(9023);
      const i = {
        imageTextGroupGroup: "_3f86585c4dc0e394fa256a3137bdd2fa57fc",
        bg: "_3f86585c4dc0e394cdba5b54a8d9de138a27",
        bgMobile: "_3f86585c4dc0e394c5eb13f304cc530611c3",
        bgDesktop: "_3f86585c4dc0e394d2094248c0a2dbe4ea2e"
      };
      var c = a(6160);
      const r = e => {
        let {
          bg: t,
          image_text_groups: a = [],
          style: r = {},
          className: d = ""
        } = e;
        const o = (0, n.useGetCdnSource)(t?.image?.mobile?.full_src ?? null),
          l = (0, n.useGetCdnSource)(t?.image?.desktop?.full_src ?? null) ?? o;
        return a.length ? (0, c.jsxs)("div", {
          className: (0, n.classList)(i.imageTextGroupGroup, d),
          style: {
            ...r
          },
          children: [o ? (0, c.jsx)("div", {
            className: [i.bgMobile, i.bg].join(" "),
            style: {
              background: `url(${o}) no-repeat center/cover`
            }
          }) : "", l ? (0, c.jsx)("div", {
            className: [i.bgDesktop, i.bg].join(" "),
            style: {
              background: `url(${l}) no-repeat center/cover`
            }
          }) : "", a.map(((e, t) => (0, c.jsx)(s.Z, {
            ...e
          }, t)))]
        }) : null
      }
    },
    5209: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => r
      });
      var n = a(8976),
        s = a(9542);
      const i = {
        linkoutSection: "_3f86585c4dc0e394f16a28b8596593e62188",
        cta: "_3f86585c4dc0e394e44235a0e32de93918e3"
      };
      var c = a(6160);
      const r = e => {
        let {
          text: t,
          cta: r,
          to: d,
          className: o = "",
          style: l = {}
        } = e;
        return (0, c.jsxs)(n.A, {
          className: (0, s.classList)(i.linkoutSection, o),
          to: d,
          style: l,
          children: [t && (0, c.jsx)("div", {
            className: i.text,
            children: t
          }), r && (0, c.jsxs)("div", {
            className: i.cta,
            children: [r, " ", (0, c.jsx)("img", {
              src: a(928)
            })]
          })]
        })
      }
    },
    8292: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => i
      });
      var n = a(4932);
      var s = a(6160);
      const i = e => {
        let {
          children: t,
          style: a,
          theme: i
        } = e;
        const [c, r] = (0, n.useState)(i);
        return (0, n.useEffect)((() => {
          i && r(i)
        }), [i]), (0, s.jsx)("div", {
          className: "_3f86585c4dc0e394cce3c47240f1835b9e3d",
          style: a,
          "data-theme": c,
          children: t
        })
      }
    },
    8486: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => c
      });
      var n = a(4224),
        s = a.n(n),
        i = a(6160);
      const c = e => {
        let {
          id: t
        } = e;
        return (0, i.jsx)("div", {
          children: (0, i.jsx)(s(), {
            autoplay: !0,
            context: "embed",
            id: t,
            endBehavior: "stillframe",
            wrapper: !1
          })
        })
      }
    },
    8262: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        BrandMessage: () => i,
        BuyNow: () => c.Z,
        ClaimCountdown: () => r,
        Disclaimer: () => d.Z,
        FAQ: () => o.Z,
        Guide: () => l.Z,
        GuideGroup: () => u.Z,
        GuideIntro: () => m.Z,
        GuideNavDesktop: () => f.Z,
        GuideSection: () => v.Z,
        Header: () => b.Z,
        Hero: () => y,
        ImageTextGroup: () => S.Z,
        ImageTextGroupGroup: () => T.Z,
        LinkoutSection: () => C.Z,
        Logo: () => w,
        SectionTitle: () => M,
        TinaWrapper: () => L.Z,
        VideoPlayerWrapper: () => B.Z
      });
      var n = a(426);
      var s = a(6160);
      const i = e => {
        let {
          brand: t,
          headline_left: a,
          headline_right: i,
          info: c
        } = e;
        return (0, s.jsxs)("div", {
          className: "_3f86585c4dc0e394b94144341266bb5d0222",
          children: [(0, s.jsx)(n.Z, {
            brands: [{
              brand: t
            }]
          }), (0, s.jsxs)("div", {
            className: "_3f86585c4dc0e394de1a4b6a97abe3325a0f",
            children: [(0, s.jsxs)("h2", {
              children: [a, " ", (0, s.jsx)("span", {
                children: i
              })]
            }), (0, s.jsx)("p", {
              children: c
            })]
          })]
        })
      };
      var c = a(4575);
      const r = e => {
        let {
          left: t,
          right: a
        } = e;
        return (0, s.jsx)("div", {
          className: "_3f86585c4dc0e394e17095a50c41fd5df54d",
          children: (0, s.jsxs)("h2", {
            tabIndex: 0,
            children: [t, " ", (0, s.jsx)("span", {
              children: a
            })]
          })
        })
      };
      var d = a(4986),
        o = a(3719),
        l = a(8428),
        u = a(8756),
        m = a(6780),
        f = a(7240),
        v = a(5731),
        b = a(8110),
        h = a(4932),
        g = a(8976),
        p = a(152),
        x = a(9542),
        _ = a(9040);
      const k = {
          hero: "_3f86585c4dc0e394a0f6b93713c9d011ae7c",
          images: "_3f86585c4dc0e394e2dab39e6c5126668804",
          background: "_3f86585c4dc0e394e0c9e6463db26150996b",
          gradient: "_3f86585c4dc0e394ab26f2cd9dd3ebeca597",
          layered: "_3f86585c4dc0e394f0e0bb0c942263435ce1",
          content: "_3f86585c4dc0e394f404637179268d90cf59",
          descriptions: "_3f86585c4dc0e394f72ff60779d574ab22f5",
          buttonGroup: "_3f86585c4dc0e394ebbfc5e086cae60bf93a",
          legalText: "_3f86585c4dc0e394aaf6cb52ad427d9e4073",
          shardsCarousel: "_3f86585c4dc0e394dba85fe900bdfcb976a9"
        },
        N = e => {
          let {
            title: t = "",
            mobileImg: a,
            desktopImg: n
          } = e;
          const i = (0, x.useGetCdnSource)(a ?? null),
            c = (0, x.useGetCdnSource)(n ?? i);
          return (0, s.jsx)("div", {
            className: k.shard,
            style: {
              "--background-image-mobile": `url(${i})`,
              "--background-image-desktop": `url(${c})`
            },
            children: (0, s.jsx)("h5", {
              children: t
            })
          })
        },
        j = e => {
          let {
            title: t = "Membership Rewards",
            shards: a
          } = e;
          const [n, i] = (0, h.useState)(null);
          return (0, h.useEffect)((() => {
            a && i(a.map((e => {
              if (!e?.shardImg) return;
              const {
                title: t,
                shardImg: a
              } = e, {
                mobile: n,
                desktop: i
              } = a;
              return (0, s.jsx)(N, {
                title: t,
                mobileImg: n?.full_src,
                desktopImg: i?.full_src
              })
            })))
          }), [a]), n ? (0, s.jsx)("div", {
            className: k.shardsCarousel,
            children: (0, s.jsx)(g.Gen9CoreCarousel, {
              title: t,
              slideChildren: n,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        y = e => {
          let {
            brands: t = [],
            backgroundImg: a,
            layeredImg: i,
            ctas: c = [],
            expandingButtonLabel: r = "Subscribe",
            platformsAndLinks: d = [],
            description: o,
            title: l,
            legalText: u,
            shardsSection: m = {},
            className: f
          } = e;
          const v = (0, x.useGetCdnSource)(a?.mobile?.full_src ?? null),
            b = (0, x.useGetCdnSource)(a?.desktop?.full_src ?? v),
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
            className: (0, x.classList)(k.hero, f),
            style: {
              "--background-image-desktop": `url(${b})`,
              "--background-image-mobile": `url(${v})`,
              "--layered-image-desktop": `url(${N})`,
              "--layered-image-mobile": `url(${h})`
            },
            initial: "hidden",
            animate: "visible",
            variants: y,
            children: [(0, s.jsxs)("div", {
              className: k.images,
              children: [b && v ? (0, s.jsx)("div", {
                className: k.background,
                style: a?.style ?? {}
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
                  brands: t
                })
              }), d.length ? (0, s.jsx)(p.E.div, {
                variants: S,
                children: (0, s.jsx)(g.ExpandingPlatformButton, {
                  buttonText: r,
                  platformsAndLinks: d,
                  children: (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(p.E.div, {
                      className: k.descriptions,
                      variants: S,
                      children: [(0, s.jsx)("h2", {
                        dangerouslySetInnerHTML: {
                          __html: l
                        }
                      }), (0, s.jsx)("p", {
                        dangerouslySetInnerHTML: {
                          __html: o
                        }
                      })]
                    }), (0, s.jsx)(p.E.div, {
                      variants: S,
                      children: (0, s.jsx)(_.Z, {
                        buttons: c,
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
                      __html: l
                    }
                  }), (0, s.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: o
                    }
                  })]
                }), (0, s.jsx)(p.E.div, {
                  variants: S,
                  children: (0, s.jsx)(_.Z, {
                    buttons: c,
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
            }), m?.shards && (0, s.jsx)(j, {
              ...m
            })]
          })
        };
      var S = a(9023),
        T = a(3873),
        C = a(5209);
      const E = {},
        w = e => {
          let {
            brand: t
          } = e;
          return (0, s.jsx)("div", {
            className: E[t]
          })
        },
        M = () => (0, s.jsx)("h2", {
          children: "Section"
        });
      var L = a(8292),
        B = a(8486)
    },
    5133: (e, t, a) => {
      "use strict";
      a.d(t, {
        MB: () => i,
        aQ: () => c.a,
        KO: () => f,
        kt: () => v,
        yv: () => d,
        YM: () => l
      });
      var n = a(4859);
      const s = (0, n.makeVar)({
          brand: null,
          headerHeight: 0,
          headerHidden: !1,
          mobileNavOpen: !1,
          activeSection: null
        }),
        i = () => {
          const e = (0, n.useReactiveVar)(s),
            t = e => {
              const t = {
                ...s(),
                ...e
              };
              s(t)
            };
          return {
            state: e,
            setBrand: e => {
              t({
                brand: e
              })
            },
            setHeaderHeight: e => {
              t({
                headerHeight: e
              })
            },
            setHeaderHidden: e => {
              t({
                headerHidden: e
              })
            },
            setMobileNavOpen: e => {
              t({
                mobileNavOpen: e
              })
            },
            setActiveSection: e => {
              t({
                activeSection: e
              })
            }
          }
        };
      var c = a(5851),
        r = a(9363);
      const d = () => {
        const {
          data: e
        } = (0, n.useQuery)(r.TinaModulesTree, {
          variables: {
            type: "gen9-guide-group"
          }
        });
        return e?.tinaModulesTree ?? null
      };
      var o = a(4932);
      a(3653), a(5921);
      const l = () => {
        const [e, t] = (0, o.useState)([{
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
      var u = a(6711),
        m = a(3321);
      const f = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " > ";
          const [a, s] = (0, o.useState)(null), {
            data: i
          } = (0, n.useQuery)(m.TinaModulesTree, {
            variables: {
              id: e
            },
            skip: !e
          });
          return (0, o.useEffect)((() => {
            const e = i?.tinaModulesTree?.[0]?.tree ?? null;
            e && s(e.map((e => {
              let {
                title: t
              } = e;
              return t
            })).join(t))
          }), [i, t, e]), a
        },
        v = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " > ";
          const {
            track: a
          } = (0, u.useGtmTrack)(), n = f(e, t);
          return (0, o.useEffect)((() => {
            n && a({
              event: "nav_click",
              event_category: "nav",
              event_action: "click",
              event_label: n
            })
          }), [n])
        }
    },
    5851: (e, t, a) => {
      "use strict";
      a.d(t, {
        E: () => l,
        a: () => o
      });
      var n = a(4932),
        s = a(3102),
        i = a(3657),
        c = a(5133),
        r = a(6160);
      const d = (0, n.createContext)(),
        o = () => (0, n.useContext)(d),
        l = e => {
          let {
            children: t
          } = e;
          const [a, o] = (0, n.useState)(null), [l] = (0, s.useSearchParams)(), {
            setActiveSection: u
          } = (0, c.MB)(), {
            pauseUserShouldSeeMore: m
          } = (0, i.useScroll)(), f = (0, n.useCallback)((e => {
            if (e !== l.get("section")) return void u(e);
            const t = document.getElementsByName(l.get("section"))?.[0];
            t && (m(), u(l.get("section")), t.scrollIntoView({
              behavior: "auto"
            }))
          }), [l.get("section"), a]);
          (0, n.useEffect)((() => {
            l.get("section") && f(l.get("section"))
          }), [l.get("section")]);
          const v = (0, n.useMemo)((() => ({
            announcePresence: f,
            section: a,
            setSection: o
          })), [f, a, o]);
          return (0, r.jsx)(d.Provider, {
            value: v,
            children: t
          })
        }
    },
    5921: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        componentsForTinaParser: () => N,
        componentsForTinaParserGuide: () => j
      });
      var n = a(8976),
        s = a(2672),
        i = a(6947),
        c = a(420),
        r = a.n(c),
        d = a(6386),
        o = a(5255),
        l = a.n(o),
        u = a(4575),
        m = a(4986),
        f = a(3719),
        v = a(8428),
        b = a(8756),
        h = a(6780),
        g = a(5731),
        p = a(3873),
        x = a(5209),
        _ = a(8292),
        k = a(8262);
      const N = {
          CalloutSection: n.CalloutSection,
          Card: s.Card,
          CardWithImageGallery: s.CardWithImageGallery,
          ConditionalBlock: n.ConditionalBlock,
          CoverCard: s.CoverCard,
          EventInfo: d.EventInfo,
          EventsDeck: i.EventsDeck,
          PageTemplate: l(),
          ExpandingPlatformButton: n.ExpandingPlatformButton,
          TextCard: s.TextCard,
          Deck: s.Deck,
          Grid: n.Grid,
          Hero: n.Hero,
          HTMLElement: n.HTMLElement,
          UnorderedList: n.UnorderedList,
          ImageWithBadge: n.ImageWithBadge,
          Carousel: n.Carousel,
          GroupOfItems: r(),
          Rating: n.Rating,
          gen9: k,
          TinaModuleFetchNRender: n.TinaModuleFetchNRender,
          PromoModule: n.PromoModule
        },
        j = {
          CalloutSection: n.CalloutSection,
          Card: s.Card,
          CardWithImageGallery: s.CardWithImageGallery,
          ConditionalBlock: n.ConditionalBlock,
          CoverCard: s.CoverCard,
          EventInfo: d.EventInfo,
          Carousel: n.Carousel,
          ExpandingPlatformButton: n.ExpandingPlatformButton,
          Hero: n.Hero,
          Grid: n.Grid,
          TextCard: s.TextCard,
          Deck: s.Deck,
          GroupOfItems: r(),
          PromoModule: n.PromoModule,
          gen9: {
            BuyNow: u.Z,
            Disclaimer: m.Z,
            FAQ: f.Z,
            Guide: v.Z,
            GuideGroup: b.Z,
            GuideIntro: h.Z,
            GuideSection: g.Z,
            Hero: n.Hero,
            ImageTextGroupGroup: p.Z,
            LinkoutSection: x.Z,
            TinaWrapper: _.Z,
            UserVote: () => null
          },
          HTMLElement: n.HTMLElement,
          UnorderedList: n.UnorderedList,
          ImageWithBadge: n.ImageWithBadge,
          Rating: n.Rating,
          TinaModuleFetchNRender: n.TinaModuleFetchNRender,
          UserVote: n.UserVote
        }
    },
    9363: e => {
      var t = {
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

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && t.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, t)
        }))
      }
      t.loc.source = {
        body: "query TinaModulesTree($type: String, $locale: String!) {\n    tinaModulesTree(type: $type, locale: $locale) {\n        title\n        id_hash\n        children {\n            title\n            to\n            id_hash\n            children {\n                title\n                to\n                id_hash\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function s(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var n = e.definitions[a];
          if (n.name && n.name.value == t) return n
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), n[e.name.value] = t
        }
      })), e.exports = t, e.exports.TinaModulesTree = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [s(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var i = n[t] || new Set,
          c = new Set,
          r = new Set;
        for (i.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var d = r;
          r = new Set, d.forEach((function(e) {
            c.has(e) || (c.add(e), (n[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return c.forEach((function(t) {
          var n = s(e, t);
          n && a.definitions.push(n)
        })), a
      }(t, "TinaModulesTree")
    },
    3321: e => {
      var t = {
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

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && t.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, t)
        }))
      }
      t.loc.source = {
        body: "query TinaModulesTree($id: String, $locale: String!) {\n    tinaModulesTree(id: $id, locale: $locale) {\n        tree {\n            title\n            children {\n                title\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function s(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var n = e.definitions[a];
          if (n.name && n.name.value == t) return n
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), n[e.name.value] = t
        }
      })), e.exports = t, e.exports.TinaModulesTree = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [s(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var i = n[t] || new Set,
          c = new Set,
          r = new Set;
        for (i.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var d = r;
          r = new Set, d.forEach((function(e) {
            c.has(e) || (c.add(e), (n[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return c.forEach((function(t) {
          var n = s(e, t);
          n && a.definitions.push(n)
        })), a
      }(t, "TinaModulesTree")
    },
    3149: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => n
      });
      const n = {
        plusButton: "_3f86585c4dc0e394eaf97f3aa17b34d60e3a",
        small: "_3f86585c4dc0e394a77f1ead5ab02c974fcf",
        btnText: "_3f86585c4dc0e394f03f8769fa832b9a631c",
        btnTexticon: "_3f86585c4dc0e394bbc8bcb358ddf5daa128",
        whiteBtn: "_3f86585c4dc0e394c7492ef8338b8c3a47af",
        blackBtn: "_3f86585c4dc0e394a3ff8ca9eb4efdeecb8f",
        transparentBtn: "_3f86585c4dc0e394ac0ef5dc28fc97aa7630",
        iconBtn: "_3f86585c4dc0e394bac67499c6b043ecfe74",
        link: "_3f86585c4dc0e394bf556069ce72fd3a9254",
        xboxone: "_3f86585c4dc0e394a650281988f864449572",
        xboxseriesxs: "_3f86585c4dc0e394beb2de0f5934aa117022",
        ps4: "_3f86585c4dc0e394af87707a3b189d27699e",
        ps5: "_3f86585c4dc0e394ea7659d89cb05d5af425",
        pc: "_3f86585c4dc0e394aeec255f08e7e48e80de"
      }
    },
    8369: (e, t, a) => {
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
        var t = i(e);
        return a(t)
      }

      function i(e) {
        if (!a.o(n, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return n[e]
      }
      s.keys = function() {
        return Object.keys(n)
      }, s.resolve = i, e.exports = s, s.id = 8369
    },
    7060: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/bcaca8dc494732cb2ca1.svg"
    },
    4273: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/af7a4b3f215a9ffd7074.svg"
    },
    8838: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/399e4fadd28201f041fe.svg"
    },
    9349: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/fa23bf61b10367b5ae17.svg"
    },
    3356: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3b3e471f51bfbca10f05.svg"
    },
    8375: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/cd7ecd01ec2f916d6c4b.svg"
    },
    5262: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/3852a2c6a70d09be710a.svg"
    },
    3004: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/1b0d3aef02ce7792cd29.svg"
    },
    928: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe4/__common/img/b23842cdcf5fcfe4e323.svg"
    }
  }
]);