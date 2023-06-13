(self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [942], {
    1757: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => i
      });
      var n = t(9706);
      const i = e => {
        let {
          brands: a = []
        } = e;
        return a.length ? (0, n.jsx)("div", {
          className: "_3f86585c4dc0e394fa7548a67d1d96bae529",
          children: a.map(((e, a) => {
            let {
              brand: t
            } = e;
            return (0, n.jsx)("div", {
              className: "_3f86585c4dc0e394f5b32d0efcce86875ef3",
              "data-brand": t
            }, a)
          }))
        }) : null
      }
    },
    2089: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => d
      });
      var n = t(2310),
        i = t(4100),
        s = t(9706);
      const c = e => {
          let {
            children: a,
            className: t,
            onClick: n,
            style: i
          } = e;
          return (0, s.jsx)("button", {
            className: t,
            onClick: n,
            style: i,
            children: a
          })
        },
        r = e => {
          let {
            children: a,
            className: t,
            onClick: i,
            style: c,
            to: r
          } = e;
          return (0, s.jsx)(n.NavLink, {
            className: t,
            onClick: i,
            style: c,
            to: r,
            children: a
          })
        },
        d = e => {
          let {
            text: a,
            onClick: t,
            btnColor: n = "#fff",
            labelColor: d = "#000",
            type: l = "",
            icon: o,
            size: u,
            secondText: m,
            consoleBtn: f = !1,
            img: v,
            to: h = !1
          } = e;
          const b = [i.Z.plusButton, i.Z[l] ?? "", i.Z[u] ?? "", i.Z[f] ?? ""].join(" "),
            g = {
              "--hvr-color": n ?? d,
              "--hvr-bg-color": d ?? n,
              "--hvr-border-color": n ?? d
            },
            p = (0, s.jsxs)(s.Fragment, {
              children: [v ? (0, s.jsx)("img", {
                src: v
              }) : "", (0, s.jsxs)("div", {
                className: i.Z.btnText,
                icon: o,
                children: [a, m ? (0, s.jsx)("span", {
                  children: m
                }) : ""]
              })]
            });
          if (h) {
            if (h.startsWith("http")) {
              const e = h.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, s.jsx)("span", {
                onClick: t,
                children: (0, s.jsx)("a", {
                  href: h,
                  className: b,
                  target: e,
                  children: p
                })
              })
            }
            return (0, s.jsx)(r, {
              className: b,
              onClick: t,
              style: g,
              to: h,
              children: p
            })
          }
          return (0, s.jsx)(c, {
            className: b,
            onClick: t,
            style: g,
            children: p
          })
        }
    },
    5289: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => c
      });
      var n = t(9542),
        i = t(2089);
      var s = t(9706);
      const c = e => {
        let {
          buttons: a = [],
          className: t
        } = e;
        return a.length ? (0, s.jsx)("div", {
          className: (0, n.classList)("_3f86585c4dc0e394a67c709116a5f4f75e82", t),
          children: a.map(((e, a) => {
            let {
              icon: t,
              to: n,
              title: c
            } = e;
            return c ? (0, s.jsx)(i.Z, {
              className: "white",
              text: c,
              to: n
            }, a) : ""
          }))
        }) : null
      }
    },
    3213: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => p
      });
      var n = t(822),
        i = t(1988),
        s = t(8976),
        c = t(6711),
        r = t(2283),
        d = t(9542),
        l = t(3797),
        o = t(5977),
        u = t(2089);
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
      var f = t(4100),
        v = t(9706);
      const h = e => {
          let {
            className: a,
            images: t
          } = e;
          const n = (0, d.useGetCdnSource)(t?.mobile?.full_src ?? null),
            i = (0, d.useGetCdnSource)(t?.desktop?.full_src ?? n);
          return (0, v.jsxs)("div", {
            className: [a, m.responsiveImages].join(" "),
            children: [n ? (0, v.jsx)("div", {
              className: m.imgMobile,
              style: {
                background: `url(${n}) no-repeat center/cover`
              }
            }) : "", i ? (0, v.jsx)("div", {
              className: m.imgDesktop,
              style: {
                background: `url(${i}) no-repeat center/cover`
              }
            }) : ""]
          })
        },
        b = e => {
          let {
            addedInfo: a = null,
            buynowbtn: s = null,
            description: r = null,
            images: d,
            links: o = [],
            title: b = null
          } = e;
          const {
            track: g
          } = (0, c.useGtmTrack)(), p = {
            event: "card_click",
            event_category: "card",
            event_action: "click",
            event_label: b?.toLowerCase()
          }, [k, _] = (0, n.useState)(!1), x = {
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
                height: x
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
              transition: x,
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
          return (0, v.jsx)(l.o5, {
            children: (0, v.jsxs)("div", {
              className: m.card,
              children: [(0, v.jsxs)("div", {
                className: m.imageGroup,
                children: [(0, v.jsx)(h, {
                  className: m.backgroundImage,
                  images: d?.background
                }), (0, v.jsx)(h, {
                  className: m.foregroundImage,
                  images: d?.foreground
                })]
              }), (0, v.jsxs)("div", {
                className: m.content,
                children: [(0, v.jsxs)(i.E.div, {
                  className: m.contentGrid,
                  animate: k ? "open" : "closed",
                  variants: y,
                  children: [(0, v.jsxs)("div", {
                    className: m.titleArea,
                    children: [(0, v.jsx)("h2", {
                      dangerouslySetInnerHTML: {
                        __html: b
                      }
                    }), (0, v.jsx)("p", {
                      dangerouslySetInnerHTML: {
                        __html: r
                      }
                    })]
                  }), o.length ? (0, v.jsx)("div", {
                    className: m.platforms,
                    children: o.map(((e, a) => (0, v.jsx)("div", {
                      className: m[e.platform],
                      children: e.platform ? (0, v.jsx)("img", {
                        src: t(8369)(`./${e.platform}.svg`),
                        alt: `${e.platform} Button`
                      }) : ""
                    }, `${e.platform+a}`)))
                  }) : ""]
                }), a ? (0, v.jsx)(i.E.p, {
                  className: m.addedInfo,
                  dangerouslySetInnerHTML: {
                    __html: a
                  },
                  animate: k ? "open" : "closed",
                  variants: y
                }) : "", s ? (0, v.jsxs)(i.E.div, {
                  onClick: () => {
                    _(!k), g(p), k || g({
                      event_action: "select_platform",
                      event_category: "cta",
                      event: "select_platform",
                      event_label: b?.toLowerCase()
                    })
                  },
                  className: [m.ctaBtn, f.Z.plusButton].join(" "),
                  animate: k ? "open" : "closed",
                  variants: T,
                  initial: !1,
                  children: [(0, v.jsx)(i.E.div, {
                    className: [m.ctaBtnText, f.Z.btnText].join(" "),
                    children: s
                  }), (0, v.jsxs)(i.E.div, {
                    className: [m.linksArea, k ? m.showLinks : ""].join(" "),
                    animate: k ? "open" : "closed",
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
                          event_label: b?.toLowerCase()
                        })
                      },
                      children: (0, v.jsx)("img", {
                        className: m.closeBtn,
                        src: t(8375),
                        alt: "Close menu button"
                      })
                    }), (0, v.jsx)("div", {
                      className: m.linkList,
                      children: o.length ? o.map(((e, a) => (0, v.jsx)(u.Z, {
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
      b.displayName = "SwiperSlide";
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
        p = s.framer.withFadeIn((0, s.withSimpleErrorBoundary)((e => {
          let {
            cards: a = [],
            bottomText: t,
            topText: i
          } = e;
          const {
            track: s
          } = (0, c.useGtmTrack)(), {
            ref: d,
            inView: u
          } = (0, r.YD)({
            threshold: .6
          }), [f, h] = (0, n.useState)(!1);
          return (0, n.useEffect)((() => {
            u && !f && (s({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `buy now - ${i}`.toLowerCase(),
              element_placement: `buy now - ${i}`.toLowerCase()
            }), h(!0))
          }), [u]), (0, v.jsxs)("div", {
            className: m.buyNowArea,
            ref: d,
            children: [(0, v.jsxs)("div", {
              className: m.topArea,
              children: [i ? (0, v.jsx)("h2", {
                children: i
              }) : "", (0, v.jsxs)("div", {
                className: m.btnArea,
                children: [(0, v.jsx)("div", {
                  className: m.prevBtn
                }), (0, v.jsx)("div", {
                  className: m.nextBtn
                })]
              })]
            }), a?.length ? (0, v.jsx)(l.tq, {
              grabCursor: !0,
              navigation: {
                nextEl: `.${m.nextBtn}`,
                prevEl: `.${m.prevBtn}`
              },
              onSlideNextTransitionEnd: () => {
                s({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: i?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                s({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: i?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                s({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: i?.toLowerCase() ?? ""
                })
              },
              modules: [o.W_],
              breakpoints: g,
              children: a.map((e => (0, n.createElement)(b, {
                ...e,
                key: JSON.stringify(e)
              }))) ?? ""
            }) : "", t ? (0, v.jsx)("p", {
              className: m.bottomText,
              children: t
            }) : ""]
          })
        })))
    },
    504: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => s
      });
      var n = t(9542);
      var i = t(9706);
      const s = e => {
        let {
          disclaimer: a,
          text: t = null,
          title: s,
          className: c = "",
          style: r = {}
        } = e;
        const d = t ?? a?.text ?? null,
          l = s ? `<h5>${s}</h5>${d}` : d;
        return d ? (0, i.jsx)("div", {
          className: (0, n.classList)("_3f86585c4dc0e394df323a339dbf583bc2c5", c),
          dangerouslySetInnerHTML: {
            __html: l
          },
          style: r
        }) : null
      }
    },
    4908: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => r
      });
      var n = t(822),
        i = t(8976),
        s = t(2089);
      var c = t(9706);
      const r = (0, i.withSimpleErrorBoundary)((e => {
        let {
          buttonTxt: a,
          description: t,
          disclaimer: i,
          faqList: r = [],
          initialLength: d = 6,
          addedLength: l = 6,
          title: o,
          tinaModulesInfo: u
        } = e;
        const [m, f] = (0, n.useState)(d);
        return (0, c.jsxs)("div", {
          className: "_3f86585c4dc0e394b3509cdab40e95e26002",
          children: [(0, c.jsxs)("div", {
            className: "_3f86585c4dc0e394efce021b52132a4fe087",
            children: [(0, c.jsxs)("div", {
              children: [(0, c.jsx)("h3", {
                children: u?.[0]?.title ?? o
              }), (0, c.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: t
                }
              })]
            }), (0, c.jsx)("div", {
              className: "_3f86585c4dc0e394e07164a79464876f4bde",
              children: r.length ? r.slice(0, m).map(((e, a) => {
                let {
                  question: t,
                  answer: n
                } = e;
                return (0, c.jsxs)("details", {
                  children: [(0, c.jsx)("summary", {
                    children: t
                  }), (0, c.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: n
                    }
                  })]
                }, a)
              })) : ""
            }), r.length > m ? (0, c.jsx)(s.Z, {
              onClick: () => f(m + l),
              text: a
            }) : ""]
          }), (0, c.jsx)("div", {
            className: "_3f86585c4dc0e394d8d021028ace4c8cb7a2",
            dangerouslySetInnerHTML: {
              __html: i
            }
          })]
        })
      }))
    },
    1389: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => s
      });
      var n = t(2942);
      var i = t(9706);
      const s = e => {
        let {
          children: a,
          style: t
        } = e;
        return (0, i.jsx)(n.E, {
          children: (0, i.jsx)("div", {
            className: "_3f86585c4dc0e394fafb0bfa8877f0bd98dd",
            style: t,
            "data-type": "guide",
            children: (0, i.jsx)("div", {
              className: "_3f86585c4dc0e394f996fd45d04119fb2ddc",
              children: a
            })
          })
        })
      }
    },
    5348: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => o
      });
      var n = t(822),
        i = t(948),
        s = t.n(i),
        c = t(8976),
        r = t(559);
      var d = t(9706);
      const l = e => {
          let {
            guide: a
          } = e, t = {
            hero: {}
          };
          s().cloneDeepWith(a, ((e, a) => {
            "images" === a && (t = e)
          }));
          const {
            src: n
          } = (0, r.useImageParser)(t?.thumb ?? {});
          return (0, d.jsx)("div", {
            className: "_3f86585c4dc0e394a02afa3a30a4c2daecb9",
            children: (0, d.jsxs)(c.A, {
              to: a.to,
              children: [(0, d.jsx)("div", {
                style: {
                  "--aspect-ratio": 1,
                  background: `url(${n?.mobile}) no-repeat center/cover`
                }
              }), (0, d.jsx)("h4", {
                children: a.title
              })]
            })
          })
        },
        o = e => {
          let {
            guides: a = {},
            tinaModulesInfo: t,
            title: i
          } = e;
          const r = s().map(a, "guide_id"),
            o = (0, c.useTinaModuleFetchByIds)({
              ids: r
            }),
            [u, m] = (0, n.useState)(null);
          return (0, n.useEffect)((() => {
            const e = o?.map(((e, a) => (0, d.jsx)(l, {
              guide: e
            }, a)));
            m(e)
          }), [o]), (0, d.jsx)(c.Gen9CoreCarousel, {
            size: "lg",
            slideChildren: u,
            title: t?.[0]?.title ?? i
          })
        }
    },
    347: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => l
      });
      var n = t(9542),
        i = t(2310),
        s = (t(4859), t(5207), t(4372));
      var c = t(9706);
      const r = () => {
          let e;
          const {
            guideId: a
          } = (0, i.useParams)();
          return e = (0, s.KO)(a, "<span></span>"), e ? (0, c.jsx)("div", {
            className: "_3f86585c4dc0e394ccc9a48ce26a7f8eccfa",
            dangerouslySetInnerHTML: {
              __html: `Guides<span></span>${e}`
            }
          }) : null
        },
        d = e => {
          let {
            hero: a
          } = e;
          const {
            alt: t,
            src: i = {}
          } = (0, n.useImageParser)(a) ?? {}, {
            mobile: s
          } = i;
          if (s) return (0, c.jsx)("div", {
            "aria-label": t,
            className: "_3f86585c4dc0e394d029521293f260e2e565",
            role: "img",
            style: {
              background: `url(${s}) no-repeat center/contain`
            }
          })
        },
        l = e => {
          let {
            blurb: a,
            hero: t,
            title: n
          } = e;
          return (0, c.jsxs)(c.Fragment, {
            children: [t ? (0, c.jsx)(d, {
              hero: t
            }) : "", (0, c.jsxs)("div", {
              className: "_3f86585c4dc0e394bff4125d94bb6017f533",
              children: [(0, c.jsx)(r, {}), (0, c.jsx)("h1", {
                children: n
              }), a && (0, c.jsx)("span", {
                className: "_3f86585c4dc0e394e4ef31aad749a9acd084",
                dangerouslySetInnerHTML: {
                  __html: a
                }
              })]
            })]
          })
        }
    },
    3503: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => g
      });
      var n = t(822),
        i = t(2310),
        s = t(948),
        c = t.n(s),
        r = t(1988),
        d = t(8976),
        l = t(4372);
      const o = {
        guideNav: "_3f86585c4dc0e394fafeb1bf08103794f39f",
        headerHidden: "_3f86585c4dc0e394b6d7b06f062c246fa382",
        guideList: "_3f86585c4dc0e394ef07d6110417298701b2",
        activeSection: "_3f86585c4dc0e394ce841afb83b64686ea9e",
        guideLinkCurrent: "_3f86585c4dc0e394fabf9908f285fcf97596",
        guide: "_3f86585c4dc0e394ca53bde09b5900585bda",
        sections: "_3f86585c4dc0e394e3ef1dcb43d473bdd596"
      };
      var u = t(9706);
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
            to: a,
            title: t,
            id_hash: i,
            query: s
          } = e;
          const [c, r] = (0, n.useState)(i === s), {
            state: m
          } = (0, l.MB)(), {
            activeSection: f
          } = m;
          return (0, n.useEffect)((() => r(s !== f ? f === i : s === i)), [f]), (0, u.jsx)(d.A, {
            to: a,
            className: c ? o.activeSection : "",
            children: t
          }, a)
        },
        h = e => {
          let {
            sections: a
          } = e;
          const [t] = (0, i.useSearchParams)();
          return (0, u.jsx)("div", {
            className: o.sections,
            children: a?.map((e => {
              let {
                id_hash: a,
                title: n,
                to: i
              } = e;
              return (0, u.jsx)(v, {
                id_hash: a,
                query: t,
                title: n,
                to: i
              })
            }))
          })
        },
        b = e => {
          let {
            currentId: a,
            group: t
          } = e;
          const [i, s] = (0, n.useState)(null), [v, b] = (0, n.useState)(null), {
            state: g
          } = (0, l.MB)(), {
            activeSection: p
          } = g;
          return (0, n.useEffect)((() => {
            const e = c().findIndex(t?.children, (e => {
              let {
                id_hash: t
              } = e;
              return t === a
            }));
            b(e), s(-1 !== e)
          }), [a, p, t]), (0, u.jsxs)("div", {
            className: o.guideList,
            children: [(0, u.jsx)("button", {
              type: "button",
              onClick: () => s(!i),
              children: t.title
            }), (0, u.jsx)(r.E.nav, {
              animate: i ? "open" : "closed",
              variants: f,
              transition: m,
              children: t?.children?.map(((e, t) => {
                let {
                  children: n,
                  id_hash: i,
                  title: s,
                  to: c
                } = e;
                return (0, u.jsxs)("div", {
                  className: o.guide,
                  children: [(0, u.jsx)(d.A, {
                    className: [o.guideLink, a === i ? o.guideLinkCurrent : ""].join(" "),
                    to: c,
                    children: s
                  }), t === v && n?.length ? (0, u.jsx)(h, {
                    sections: n
                  }) : ""]
                }, s)
              }))
            })]
          })
        },
        g = e => {
          let {
            currentId: a
          } = e;
          const t = (0, l.yv)(),
            {
              state: {
                headerHeight: n,
                headerHidden: i
              }
            } = (0, l.MB)();
          return (0, u.jsx)("div", {
            className: [o.guideNav, i ? o.headerHidden : ""].join(" "),
            style: {
              "--header-height": `${n}px`
            },
            children: t?.map((e => (0, u.jsx)(b, {
              currentId: a,
              group: e
            }, e.id_hash)))
          })
        }
    },
    6416: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => r
      });
      var n = t(822),
        i = t(2283),
        s = t(4372);
      var c = t(9706);
      const r = e => {
        let {
          style: a,
          children: t,
          __anchor: r = null
        } = e;
        const {
          announcePresence: d
        } = (0, s.aQ)(), {
          ref: l,
          inView: o
        } = (0, i.YD)({
          rootMargin: "0px 0px -700px 0px",
          threshold: 0,
          delay: 850
        });
        return (0, n.useEffect)((() => {
          d(r)
        }), [r]), (0, n.useEffect)((() => {
          o && d(r)
        }), [o]), (0, c.jsx)("span", {
          style: a,
          className: "_3f86585c4dc0e394d49366acea7b328026c0",
          name: r,
          ref: l,
          children: t
        })
      }
    },
    2517: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => S
      });
      var n = t(822),
        i = t(2310),
        s = t(8976),
        c = t(6711),
        r = t(9929),
        d = t(3657),
        l = t(2089),
        o = t(948),
        u = t.n(o),
        m = t(4372);
      const f = {
        gen9Nav: "_3f86585c4dc0e394a616477b6a6e1ed0f6ac",
        activeLink: "_3f86585c4dc0e394c4fca99870c4faa1f18d",
        subNav: "_3f86585c4dc0e394cb4e7d61fd6679fb7a1e",
        subNavOpen: "_3f86585c4dc0e394ff7acb2b4e6eb0468800",
        navGroup: "_3f86585c4dc0e394b1c7e7a170e8c7982809",
        subNavUnder: "_3f86585c4dc0e394f5524031d9fa9c37eeb5",
        subNavRight: "_3f86585c4dc0e394c13b50d941584d4e3152"
      };
      var v = t(9706);
      const h = e => {
          let {
            activeExact: a = !1,
            to: t,
            title: i,
            under: r = !0,
            childModules: d = [],
            t: l
          } = e;
          const {
            track: o
          } = (0, c.useGtmTrack)(), [m, b] = (0, n.useState)(!1), g = u().debounce((() => {
            b(!1)
          }), 250), p = (0, n.useCallback)((() => {
            g?.cancel(), b(!0)
          }), [g]), k = () => {
            o({
              event: "nav_click",
              event_category: "nav",
              event_action: "click",
              event_label: i.toLowerCase(),
              link_url: t
            })
          };
          return (0, v.jsxs)("div", {
            className: f.navGroup,
            onMouseEnter: p,
            onMouseLeave: g,
            onKeyUp: p,
            onClick: () => b(!1),
            role: "button",
            tabIndex: 0,
            children: [t ? (0, v.jsx)(s.A, {
              end: a,
              to: t,
              target: t.startsWith("http") ? "_blank" : "_self",
              className: e => {
                let {
                  isActive: a
                } = e;
                return a ? f.activeLink : null
              },
              onClick: k,
              children: l(i)
            }) : (0, v.jsx)("button", {
              type: "button",
              onClick: k,
              children: l(i)
            }), d?.length ? (0, v.jsx)("div", {
              className: [f.subNav, r ? f.subNavUnder : f.subNavRight, m ? f.subNavOpen : ""].join(" "),
              children: d?.map((e => (0, v.jsx)(h, {
                under: !1,
                ...e,
                t: l
              }, e?.title)))
            }) : ""]
          })
        },
        b = (0, r.withTranslations)((e => {
          let {
            t: a
          } = e;
          const t = (0, m.YM)();
          return (0, v.jsx)("nav", {
            className: f.gen9Nav,
            children: t.map((e => {
              let {
                children: t,
                to: n,
                ...i
              } = e;
              return (0, v.jsx)(h, {
                childModules: t,
                to: n,
                t: a,
                ...i
              }, n)
            }))
          })
        }));
      var g = t(8440),
        p = t(1988);
      const k = {
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
        x = {
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
          } = (0, m.MB)(), {
            navOpen: t,
            setNavOpen: i
          } = (0, c.useRockstarUserState)(), s = (0, g._)(), r = (0, g._)(), d = (0, g._)();
          return (0, n.useEffect)((() => {
            !0 === t && !0 === e && a(!1)
          }), [t]), (0, n.useEffect)((() => {
            s.start(e ? k.open : k.closed), r.start(e ? _.open : _.closed), d.start(e ? x.open : x.closed)
          }), [e]), (0, v.jsxs)("svg", {
            className: "_3f86585c4dc0e394b1179e089e89383904b2",
            onClick: () => (async () => {
              a(!e), !0 === t && i(!1)
            })(),
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: [(0, v.jsx)(p.E.path, {
              ...x.closed,
              ...N,
              animate: d
            }), (0, v.jsx)(p.E.path, {
              ..._.closed,
              ...N,
              animate: r
            }), (0, v.jsx)(p.E.path, {
              ...k.closed,
              ...N,
              animate: s
            })]
          })
        },
        y = {
          gen9Header: "_3f86585c4dc0e394d7c271f94626a35ab9e8",
          headerHidden: "_3f86585c4dc0e394d47f3266f70158f40c19",
          content: "_3f86585c4dc0e394ea23ee47c231cf87cc38",
          "content--child": "_3f86585c4dc0e394a6016e70e686815bfbe0",
          branding: "_3f86585c4dc0e394fb19a5e6f94b3c1e56a7",
          rockstarLogo: "_3f86585c4dc0e394cbe1d286e879768be4f4",
          glitch: "_3f86585c4dc0e394d0c0a2c4a3c014726f08",
          glitch2: "_3f86585c4dc0e394cd4305b4ae6a053a5a4a",
          logoDivider: "_3f86585c4dc0e394fc35bda511ece88a1b5e",
          brandLogo: "_3f86585c4dc0e394ebb800e1f0823cbb6d54",
          buttonArea: "_3f86585c4dc0e394e517a992627baad1ae35",
          navBtn: "_3f86585c4dc0e394afd960f93c5b83b94948"
        },
        S = (0, r.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            state: {
              brand: t,
              headerHidden: r,
              mobileNavOpen: o
            },
            setHeaderHeight: u,
            setHeaderHidden: f,
            setMobileNavOpen: h
          } = (0, m.MB)(), {
            navOpen: g
          } = (0, c.useRockstarUserState)(), p = (0, n.useRef)(), {
            track: k
          } = (0, c.useGtmTrack)(), [, _] = (0, i.useSearchParams)(), {
            pathname: x
          } = (0, i.useLocation)(), {
            freezeUserShouldSeeMore: N,
            userShouldSeeMore: S
          } = (0, d.useScroll)(), [T, C] = (0, n.useState)(0), w = () => T > 1023;
          return (0, n.useEffect)((() => {
            o || g || N && S || f(S)
          }), [N, o, S, g]), (0, n.useEffect)((() => {
            h(!1)
          }), [x]), (0, n.useEffect)((() => {
            o && f(!1)
          }), [o]), (0, n.useEffect)((() => {
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
                "data-brand": t,
                children: [(0, v.jsx)(s.A, {
                  className: y.rockstarLogo,
                  to: "../"
                }), (0, v.jsx)("div", {
                  className: y.logoDivider
                }), w() && (0, v.jsx)("div", {
                  className: y.brandLogo
                }), (0, v.jsx)(j, {})]
              }), !w() && (0, v.jsx)("div", {
                className: y.brandLogo,
                "data-brand": t
              }), (0, v.jsx)(b, {}), (0, v.jsx)("div", {
                className: y.buttonArea,
                children: (0, v.jsxs)("div", {
                  className: y.navBtn,
                  children: [!(T < 1024) && (0, v.jsx)(l.Z, {
                    text: a("Buy Now"),
                    type: "transparentBtn",
                    size: "small",
                    onClick: () => {
                      _({
                        info: "order"
                      }), k({
                        event_action: "buy",
                        event_category: "cta",
                        event: "cta_buy",
                        event_label: "header",
                        text: a("Buy Now").toLowerCase()
                      })
                    }
                  }), (0, v.jsx)(c.MenuButton, {})]
                })
              })]
            })
          })
        }))
    },
    2091: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => m
      });
      var n = t(822),
        i = t(8976),
        s = t(9542),
        c = t(6711),
        r = t(2283),
        d = t(5289),
        l = t(1757),
        o = t(504);
      var u = t(9706);
      const m = i.framer.withFadeIn((e => {
        let {
          brands: a = [],
          content: t,
          ctas: i = [],
          disclaimer: m,
          image: f,
          large: v = !1,
          title: h,
          image_on_right: b = !1,
          style: g = {},
          className: p = ""
        } = e;
        const {
          track: k
        } = (0, c.useGtmTrack)(), {
          ref: _,
          inView: x
        } = (0, r.YD)({
          threshold: .6
        }), [N, j] = (0, n.useState)(!1), y = (0, s.useGetCdnSource)(f?.full_src ?? null) ?? null;
        return (0, n.useEffect)((() => {
          x && !N && (k({
            event: "page_section_impression",
            event_action: "impression",
            event_category: "page_section",
            event_label: `image text group - ${h}`.toLowerCase(),
            element_placement: `image text group - ${h}`.toLowerCase()
          }), j(!0))
        }), [x]), (0, u.jsxs)("div", {
          className: (0, s.classList)("_3f86585c4dc0e394f2cf909dbf3361ec8d57", v ? "_3f86585c4dc0e394c950136646fbbd777bb5" : "", b ? "_3f86585c4dc0e394e6f94a3e17e22b45f308" : "", y ? "" : "_3f86585c4dc0e394cea3e99427bd215be499", p),
          style: g,
          ref: _,
          children: [y ? (0, u.jsx)("div", {
            className: "_3f86585c4dc0e394bcdbc4cde7375da50995",
            style: {
              background: `url(${y}) no-repeat center/cover`
            }
          }) : "", (0, u.jsxs)("div", {
            className: "_3f86585c4dc0e394c5071baf77e4a94ee8fc",
            children: [(0, u.jsx)(l.Z, {
              brands: a
            }), (0, u.jsxs)("div", {
              className: "_3f86585c4dc0e394f494a7678754ce53146a",
              children: [(0, u.jsx)("div", {
                className: "_3f86585c4dc0e394e220a2dcd44c8fc8da2e",
                children: h
              }), t ? (0, u.jsx)("div", {
                className: "_3f86585c4dc0e394ccc4915c23b879942955",
                dangerouslySetInnerHTML: {
                  __html: t
                }
              }) : ""]
            }), (0, u.jsx)(d.Z, {
              ctas: i
            }), (0, u.jsx)(o.Z, {
              disclaimer: m
            })]
          })]
        })
      }))
    },
    7481: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => r
      });
      var n = t(9542),
        i = t(2091);
      const s = {
        imageTextGroupGroup: "_3f86585c4dc0e394fa256a3137bdd2fa57fc",
        bg: "_3f86585c4dc0e394cdba5b54a8d9de138a27",
        bgMobile: "_3f86585c4dc0e394c5eb13f304cc530611c3",
        bgDesktop: "_3f86585c4dc0e394d2094248c0a2dbe4ea2e"
      };
      var c = t(9706);
      const r = e => {
        let {
          bg: a,
          image_text_groups: t = [],
          style: r = {},
          className: d = ""
        } = e;
        const l = (0, n.useGetCdnSource)(a?.image?.mobile?.full_src ?? null),
          o = (0, n.useGetCdnSource)(a?.image?.desktop?.full_src ?? null) ?? l;
        return t.length ? (0, c.jsxs)("div", {
          className: (0, n.classList)(s.imageTextGroupGroup, d),
          style: {
            ...r
          },
          children: [l ? (0, c.jsx)("div", {
            className: [s.bgMobile, s.bg].join(" "),
            style: {
              background: `url(${l}) no-repeat center/cover`
            }
          }) : "", o ? (0, c.jsx)("div", {
            className: [s.bgDesktop, s.bg].join(" "),
            style: {
              background: `url(${o}) no-repeat center/cover`
            }
          }) : "", t.map(((e, a) => (0, c.jsx)(i.Z, {
            ...e
          }, a)))]
        }) : null
      }
    },
    5388: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => r
      });
      var n = t(8976),
        i = t(9542);
      const s = {
        linkoutSection: "_3f86585c4dc0e394f16a28b8596593e62188",
        cta: "_3f86585c4dc0e394e44235a0e32de93918e3"
      };
      var c = t(9706);
      const r = e => {
        let {
          text: a,
          cta: r,
          to: d,
          className: l = "",
          style: o = {}
        } = e;
        return (0, c.jsxs)(n.A, {
          className: (0, i.classList)(s.linkoutSection, l),
          to: d,
          style: o,
          children: [a && (0, c.jsx)("div", {
            className: s.text,
            children: a
          }), r && (0, c.jsxs)("div", {
            className: s.cta,
            children: [r, " ", (0, c.jsx)("img", {
              src: t(928)
            })]
          })]
        })
      }
    },
    5158: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => s
      });
      var n = t(822);
      var i = t(9706);
      const s = e => {
        let {
          children: a,
          style: t,
          theme: s
        } = e;
        const [c, r] = (0, n.useState)(s);
        return (0, n.useEffect)((() => {
          s && r(s)
        }), [s]), (0, i.jsx)("div", {
          className: "_3f86585c4dc0e394cce3c47240f1835b9e3d",
          style: t,
          "data-theme": c,
          children: a
        })
      }
    },
    1436: (e, a, t) => {
      "use strict";
      t.d(a, {
        Z: () => c
      });
      var n = t(4224),
        i = t.n(n),
        s = t(9706);
      const c = e => {
        let {
          id: a
        } = e;
        return (0, s.jsx)("div", {
          children: (0, s.jsx)(i(), {
            autoplay: !0,
            context: "embed",
            id: a,
            endBehavior: "stillframe",
            wrapper: !1
          })
        })
      }
    },
    9981: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        BrandMessage: () => s,
        BuyNow: () => c.Z,
        ClaimCountdown: () => r,
        Disclaimer: () => d.Z,
        FAQ: () => l.Z,
        Guide: () => o.Z,
        GuideGroup: () => u.Z,
        GuideIntro: () => m.Z,
        GuideNavDesktop: () => f.Z,
        GuideSection: () => v.Z,
        Header: () => h.Z,
        Hero: () => y,
        ImageTextGroup: () => S.Z,
        ImageTextGroupGroup: () => T.Z,
        LinkoutSection: () => C.Z,
        Logo: () => E,
        SectionTitle: () => M,
        TinaWrapper: () => L.Z,
        VideoPlayerWrapper: () => B.Z
      });
      var n = t(1757);
      var i = t(9706);
      const s = e => {
        let {
          brand: a,
          headline_left: t,
          headline_right: s,
          info: c
        } = e;
        return (0, i.jsxs)("div", {
          className: "_3f86585c4dc0e394b94144341266bb5d0222",
          children: [(0, i.jsx)(n.Z, {
            brands: [{
              brand: a
            }]
          }), (0, i.jsxs)("div", {
            className: "_3f86585c4dc0e394de1a4b6a97abe3325a0f",
            children: [(0, i.jsxs)("h2", {
              children: [t, " ", (0, i.jsx)("span", {
                children: s
              })]
            }), (0, i.jsx)("p", {
              children: c
            })]
          })]
        })
      };
      var c = t(3213);
      const r = e => {
        let {
          left: a,
          right: t
        } = e;
        return (0, i.jsx)("div", {
          className: "_3f86585c4dc0e394e17095a50c41fd5df54d",
          children: (0, i.jsxs)("h2", {
            children: [a, " ", (0, i.jsx)("span", {
              children: t
            })]
          })
        })
      };
      var d = t(504),
        l = t(4908),
        o = t(1389),
        u = t(5348),
        m = t(347),
        f = t(3503),
        v = t(6416),
        h = t(2517),
        b = t(822),
        g = t(8976),
        p = t(1988),
        k = t(9542),
        _ = t(5289);
      const x = {
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
            title: a = "",
            mobileImg: t,
            desktopImg: n
          } = e;
          const s = (0, k.useGetCdnSource)(t ?? null),
            c = (0, k.useGetCdnSource)(n ?? s);
          return (0, i.jsx)("div", {
            className: x.shard,
            style: {
              "--background-image-mobile": `url(${s})`,
              "--background-image-desktop": `url(${c})`
            },
            children: (0, i.jsx)("h5", {
              children: a
            })
          })
        },
        j = e => {
          let {
            title: a = "Membership Rewards",
            shards: t
          } = e;
          const [n, s] = (0, b.useState)(null);
          return (0, b.useEffect)((() => {
            t && s(t.map((e => {
              if (!e?.shardImg) return;
              const {
                title: a,
                shardImg: t
              } = e, {
                mobile: n,
                desktop: s
              } = t;
              return (0, i.jsx)(N, {
                title: a,
                mobileImg: n?.full_src,
                desktopImg: s?.full_src
              })
            })))
          }), [t]), n ? (0, i.jsx)("div", {
            className: x.shardsCarousel,
            children: (0, i.jsx)(g.Gen9CoreCarousel, {
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
            layeredImg: s,
            ctas: c = [],
            expandingButtonLabel: r = "Subscribe",
            platformsAndLinks: d = [],
            description: l,
            title: o,
            legalText: u,
            shardsSection: m = {},
            className: f
          } = e;
          const v = (0, k.useGetCdnSource)(t?.mobile?.full_src ?? null),
            h = (0, k.useGetCdnSource)(t?.desktop?.full_src ?? v),
            b = (0, k.useGetCdnSource)(s?.mobile?.full_src ?? null),
            N = (0, k.useGetCdnSource)(s?.desktop?.full_src ?? b),
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
          return (0, i.jsxs)(p.E.div, {
            className: (0, k.classList)(x.hero, f),
            style: {
              "--background-image-desktop": `url(${h})`,
              "--background-image-mobile": `url(${v})`,
              "--layered-image-desktop": `url(${N})`,
              "--layered-image-mobile": `url(${b})`
            },
            initial: "hidden",
            animate: "visible",
            variants: y,
            children: [(0, i.jsxs)("div", {
              className: x.images,
              children: [h && v ? (0, i.jsx)("div", {
                className: x.background,
                style: t?.style ?? {}
              }) : "", b && N ? (0, i.jsx)("div", {
                className: x.layered
              }) : "", (0, i.jsx)("div", {
                className: x.gradient
              })]
            }), (0, i.jsxs)(p.E.div, {
              className: x.content,
              initial: "hidden",
              animate: "visible",
              variants: y,
              children: [(0, i.jsx)(p.E.div, {
                variants: S,
                children: (0, i.jsx)(n.Z, {
                  brands: a
                })
              }), d.length ? (0, i.jsx)(p.E.div, {
                variants: S,
                children: (0, i.jsx)(g.ExpandingPlatformButton, {
                  buttonText: r,
                  platformsAndLinks: d,
                  children: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(p.E.div, {
                      className: x.descriptions,
                      variants: S,
                      children: [(0, i.jsx)("h2", {
                        dangerouslySetInnerHTML: {
                          __html: o
                        }
                      }), (0, i.jsx)("p", {
                        dangerouslySetInnerHTML: {
                          __html: l
                        }
                      })]
                    }), (0, i.jsx)(p.E.div, {
                      variants: S,
                      children: (0, i.jsx)(_.Z, {
                        buttons: c,
                        className: x.buttonGroup
                      })
                    })]
                  })
                })
              }) : (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsxs)(p.E.div, {
                  className: x.descriptions,
                  variants: S,
                  children: [(0, i.jsx)("h2", {
                    dangerouslySetInnerHTML: {
                      __html: o
                    }
                  }), (0, i.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: l
                    }
                  })]
                }), (0, i.jsx)(p.E.div, {
                  variants: S,
                  children: (0, i.jsx)(_.Z, {
                    buttons: c,
                    className: x.buttonGroup
                  })
                })]
              }), u && (0, i.jsx)(p.E.div, {
                className: x.legalText,
                variants: S,
                children: (0, i.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: u
                  }
                })
              })]
            }), m?.shards && (0, i.jsx)(j, {
              ...m
            })]
          })
        };
      var S = t(2091),
        T = t(7481),
        C = t(5388);
      const w = {},
        E = e => {
          let {
            brand: a
          } = e;
          return (0, i.jsx)("div", {
            className: w[a]
          })
        },
        M = () => (0, i.jsx)("h2", {
          children: "Section"
        });
      var L = t(5158),
        B = t(1436)
    },
    4372: (e, a, t) => {
      "use strict";
      t.d(a, {
        MB: () => s,
        aQ: () => c.a,
        KO: () => f,
        kt: () => v,
        yv: () => d,
        YM: () => o
      });
      var n = t(4859);
      const i = (0, n.makeVar)({
          brand: null,
          headerHeight: 0,
          headerHidden: !1,
          mobileNavOpen: !1,
          activeSection: null
        }),
        s = () => {
          const e = (0, n.useReactiveVar)(i),
            a = e => {
              const a = {
                ...i(),
                ...e
              };
              i(a)
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
      var c = t(2942),
        r = t(9851);
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
      var l = t(822);
      t(948), t(2253);
      const o = () => {
        const [e, a] = (0, l.useState)([{
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
        m = t(1142);
      const f = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " > ";
          const [t, i] = (0, l.useState)(null), {
            data: s
          } = (0, n.useQuery)(m.TinaModulesTree, {
            variables: {
              id: e
            },
            skip: !e
          });
          return (0, l.useEffect)((() => {
            const e = s?.tinaModulesTree?.[0]?.tree ?? null;
            e && i(e.map((e => {
              let {
                title: a
              } = e;
              return a
            })).join(a))
          }), [s, a, e]), t
        },
        v = function(e) {
          let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " > ";
          const {
            track: t
          } = (0, u.useGtmTrack)(), n = f(e, a);
          return (0, l.useEffect)((() => {
            n && t({
              event: "nav_click",
              event_category: "nav",
              event_action: "click",
              event_label: n
            })
          }), [n])
        }
    },
    2942: (e, a, t) => {
      "use strict";
      t.d(a, {
        E: () => o,
        a: () => l
      });
      var n = t(822),
        i = t(2310),
        s = t(3657),
        c = t(4372),
        r = t(9706);
      const d = (0, n.createContext)(),
        l = () => (0, n.useContext)(d),
        o = e => {
          let {
            children: a
          } = e;
          const [t, l] = (0, n.useState)(null), [o] = (0, i.useSearchParams)(), {
            setActiveSection: u
          } = (0, c.MB)(), {
            pauseUserShouldSeeMore: m
          } = (0, s.useScroll)(), f = (0, n.useCallback)((e => {
            if (e !== o.get("section")) return void u(e);
            const a = document.getElementsByName(o.get("section"))?.[0];
            a && (m(), u(o.get("section")), a.scrollIntoView({
              behavior: "smooth"
            }))
          }), [o.get("section"), t]);
          (0, n.useEffect)((() => {
            o.get("section") && f(o.get("section"))
          }), [o.get("section")]);
          const v = (0, n.useMemo)((() => ({
            announcePresence: f,
            section: t,
            setSection: l
          })), [f, t, l]);
          return (0, r.jsx)(d.Provider, {
            value: v,
            children: a
          })
        }
    },
    2253: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        componentsForTinaParser: () => _,
        componentsForTinaParserGuide: () => x
      });
      var n = t(8976),
        i = t(2672),
        s = (t(6947), t(420)),
        c = t.n(s),
        r = t(5255),
        d = t.n(r),
        l = t(3213),
        o = t(504),
        u = t(4908),
        m = t(1389),
        f = t(5348),
        v = t(347),
        h = t(6416),
        b = t(7481),
        g = t(5388),
        p = t(5158),
        k = t(9981);
      const _ = {
          CalloutSection: n.CalloutSection,
          Card: i.Card,
          CardWithImageGallery: i.CardWithImageGallery,
          ConditionalBlock: n.ConditionalBlock,
          CoverCard: i.CoverCard,
          PageTemplate: d(),
          ExpandingPlatformButton: n.ExpandingPlatformButton,
          TextCard: i.TextCard,
          Deck: i.Deck,
          Grid: n.Grid,
          Hero: n.Hero,
          HTMLElement: n.HTMLElement,
          UnorderedList: n.UnorderedList,
          ImageWithBadge: n.ImageWithBadge,
          Carousel: n.Carousel,
          GroupOfItems: c(),
          Rating: n.Rating,
          gen9: k,
          TinaModuleFetchNRender: n.TinaModuleFetchNRender,
          PromoModule: n.PromoModule
        },
        x = {
          CalloutSection: n.CalloutSection,
          Card: i.Card,
          CardWithImageGallery: i.CardWithImageGallery,
          ConditionalBlock: n.ConditionalBlock,
          CoverCard: i.CoverCard,
          Carousel: n.Carousel,
          ExpandingPlatformButton: n.ExpandingPlatformButton,
          Hero: n.Hero,
          Grid: n.Grid,
          TextCard: i.TextCard,
          Deck: i.Deck,
          GroupOfItems: c(),
          PromoModule: n.PromoModule,
          gen9: {
            BuyNow: l.Z,
            Disclaimer: o.Z,
            FAQ: u.Z,
            Guide: m.Z,
            GuideGroup: f.Z,
            GuideIntro: v.Z,
            GuideSection: h.Z,
            Hero: n.Hero,
            ImageTextGroupGroup: b.Z,
            LinkoutSection: g.Z,
            TinaWrapper: p.Z,
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
    5207: e => {
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

      function i(e, a) {
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
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = n[a] || new Set,
          c = new Set,
          r = new Set;
        for (s.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var d = r;
          r = new Set, d.forEach((function(e) {
            c.has(e) || (c.add(e), (n[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var n = i(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "TinaModulesTree")
    },
    9851: e => {
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

      function i(e, a) {
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
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = n[a] || new Set,
          c = new Set,
          r = new Set;
        for (s.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var d = r;
          r = new Set, d.forEach((function(e) {
            c.has(e) || (c.add(e), (n[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var n = i(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "TinaModulesTree")
    },
    1142: e => {
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

      function i(e, a) {
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
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var s = n[a] || new Set,
          c = new Set,
          r = new Set;
        for (s.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var d = r;
          r = new Set, d.forEach((function(e) {
            c.has(e) || (c.add(e), (n[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return c.forEach((function(a) {
          var n = i(e, a);
          n && t.definitions.push(n)
        })), t
      }(a, "TinaModulesTree")
    },
    4100: (e, a, t) => {
      "use strict";
      t.d(a, {
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

      function i(e) {
        var a = s(e);
        return t(a)
      }

      function s(e) {
        if (!t.o(n, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return n[e]
      }
      i.keys = function() {
        return Object.keys(n)
      }, i.resolve = s, e.exports = i, i.id = 8369
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