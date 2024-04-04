! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "a2b45fab-58e3-4431-b574-c6654bed335e", e._sentryDebugIdIdentifier = "sentry-dbid-a2b45fab-58e3-4431-b574-c6654bed335e")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [416], {
    7572: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => n
      });
      var s = t(5240);
      const n = e => {
        let {
          brands: a = []
        } = e;
        return a.length ? (0, s.jsx)("div", {
          className: "rockstargames-sites-gta-gen9c971935f2d1b31df55e6271635ef922a",
          children: a.map(((e, a) => {
            let {
              brand: t
            } = e;
            return (0, s.jsx)("div", {
              className: "rockstargames-sites-gta-gen9c84499c22a2583d233091c60456f0287",
              "data-brand": t
            }, a)
          }))
        }) : null
      }
    },
    1252: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => o
      });
      var s = t(1960),
        n = t(568),
        r = t(5240);
      const i = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: n,
            innerRef: i = null
          } = e;
          return (0, r.jsx)("button", {
            className: t,
            onClick: s,
            style: n,
            type: "button",
            ref: i,
            children: a
          })
        },
        c = e => {
          let {
            children: a,
            className: t,
            onClick: n,
            style: i,
            to: c
          } = e;
          return (0, r.jsx)(s.NavLink, {
            className: t,
            onClick: n,
            style: i,
            to: c,
            children: a
          })
        },
        o = e => {
          let {
            text: a,
            onClick: t,
            btnColor: s = "#fff",
            labelColor: o = "#000",
            type: d = "",
            icon: l,
            size: g,
            secondText: m,
            consoleBtn: u = !1,
            img: f,
            to: b = !1,
            innerRef: v = null
          } = e;
          const h = [n.c.plusButton, n.c[d] ?? "", n.c[g] ?? "", n.c[u] ?? ""].join(" "),
            k = {
              "--hvr-color": s ?? o,
              "--hvr-bg-color": o ?? s,
              "--hvr-border-color": s ?? o
            },
            p = (0, r.jsxs)(r.Fragment, {
              children: [f ? (0, r.jsx)("img", {
                src: f,
                alt: a
              }) : "", (0, r.jsxs)("div", {
                className: n.c.btnText,
                icon: l,
                children: [a, m ? (0, r.jsx)("span", {
                  children: m
                }) : ""]
              })]
            });
          if (b) {
            if (b.startsWith("http")) {
              const e = b.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, r.jsx)("span", {
                onClick: t,
                onKeyUp: e => {
                  "Enter" === e.code && t()
                },
                role: "button",
                tabIndex: -1,
                children: (0, r.jsx)("a", {
                  href: b,
                  className: h,
                  target: e,
                  children: p
                })
              })
            }
            return (0, r.jsx)(c, {
              className: h,
              onClick: t,
              style: k,
              to: b,
              children: p
            })
          }
          return (0, r.jsx)(i, {
            className: h,
            onClick: t,
            style: k,
            innerRef: v,
            children: p
          })
        }
    },
    5388: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => i
      });
      var s = t(1740),
        n = t(1252);
      var r = t(5240);
      const i = e => {
        let {
          buttons: a = [],
          className: t
        } = e;
        return a.length ? (0, r.jsx)("div", {
          className: (0, s.classList)("rockstargames-sites-gta-gen9a649ab228e5a522f6e9e981a54036652", t),
          children: a.map(((e, a) => {
            let {
              icon: t,
              to: s,
              title: i
            } = e;
            return i ? (0, r.jsx)(n.c, {
              className: "white",
              text: i,
              to: s
            }, a) : ""
          }))
        }) : null
      }
    },
    3300: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => k
      });
      var s = t(1664),
        n = t(2620),
        r = t(9860),
        i = t(2836),
        c = t(4268),
        o = t(1740),
        d = t(8111),
        l = t(1403),
        g = t(1252);
      const m = {
        pillBtn: "rockstargames-sites-gta-gen9de0c2997703aedc7531c188c83299b6c",
        selected: "rockstargames-sites-gta-gen9c74da5042c5c0a67b7464272816db587",
        buyNowArea: "rockstargames-sites-gta-gen9b112ebfc18eebb1241b07c19166b7796",
        topArea: "rockstargames-sites-gta-gen9f22161182a4ca2e6f7fc9bafdcdee6e3",
        btnArea: "rockstargames-sites-gta-gen9c7f383773c21a7743952c3dacef89b40",
        nextBtn: "rockstargames-sites-gta-gen9bb81279c9ead6374b2622459d389bc2d",
        prevBtn: "rockstargames-sites-gta-gen9f7a8734d8469025e4b8942cf406c6643",
        card: "rockstargames-sites-gta-gen9d6584eb7f514c2e42d314217ec1e3aaf",
        content: "rockstargames-sites-gta-gen9dcc4e9836cd849a1ee258158d8995e3b",
        contentGrid: "rockstargames-sites-gta-gen9d3010785db0d54e98f3bf2dce40e041a",
        titleArea: "rockstargames-sites-gta-gen9d313ca2eda70504fdcf03a8b7f1f744b",
        platforms: "rockstargames-sites-gta-gen9e8fbea9cd12702c233a20f7520599e1a",
        addedInfo: "rockstargames-sites-gta-gen9d839d1ce6fc7bc9ee6075caae0bc86b7",
        ctaBtn: "rockstargames-sites-gta-gen9f322f35a41ae3b5f266dcb72f2a60621",
        linksArea: "rockstargames-sites-gta-gen9bee7cbf39adcd03dfdaf9fe9ec0c0737",
        closeBtn: "rockstargames-sites-gta-gen9f66ad127058a8800197f4d00b237ca06",
        closeButtonWrapper: "rockstargames-sites-gta-gen9b3e75ba0d36c524b33e63b6b60601c4e",
        linkList: "rockstargames-sites-gta-gen9cab38167a36e713966eea2a91eefe037",
        bottomText: "rockstargames-sites-gta-gen9abda7e924e80f3591a05c40cbc3e2be5",
        imageGroup: "rockstargames-sites-gta-gen9bfa874edb54bdf216d34890c44d12ea7",
        imgMobile: "rockstargames-sites-gta-gen9cc0ee47736a93f55af267e42e89785c1",
        imgDesktop: "rockstargames-sites-gta-gen9ff92e6d4ac04eae88fbc2146f4a10625",
        responsiveImages: "rockstargames-sites-gta-gen9ef1dd1e1e9814629b79f34363160af0a",
        backgroundImage: "rockstargames-sites-gta-gen9deb56fad2147026bac0b8973c69f0f33",
        foregroundImage: "rockstargames-sites-gta-gen9e2021af151c34f3f71856b9e909a7aa4"
      };
      var u = t(568),
        f = t(5240);
      const b = e => {
          let {
            className: a,
            images: t
          } = e;
          const s = (0, o.useGetCdnSource)(t?.mobile?.full_src ?? null),
            n = (0, o.useGetCdnSource)(t?.desktop?.full_src ?? s);
          return (0, f.jsxs)("div", {
            className: [a, m.responsiveImages].join(" "),
            children: [s ? (0, f.jsx)("div", {
              className: m.imgMobile,
              style: {
                background: `url(${s}) no-repeat center/cover`
              }
            }) : "", n ? (0, f.jsx)("div", {
              className: m.imgDesktop,
              style: {
                background: `url(${n}) no-repeat center/cover`
              }
            }) : ""]
          })
        },
        v = e => {
          let {
            addedInfo: a = null,
            buynowbtn: r = null,
            description: c = null,
            images: o,
            links: l = [],
            title: v = null
          } = e;
          const {
            track: h
          } = (0, i.useGtmTrack)(), k = {
            event: "card_click",
            event_category: "card",
            event_action: "click",
            event_label: v?.toLowerCase()
          }, [p, x] = (0, s.useState)(!1), y = {
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
          }, _ = {
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
                height: y
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
              transition: y,
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
          return (0, f.jsx)(d.Ky, {
            children: (0, f.jsxs)("div", {
              className: m.card,
              children: [(0, f.jsxs)("div", {
                className: m.imageGroup,
                children: [(0, f.jsx)(b, {
                  className: m.backgroundImage,
                  images: o?.background
                }), (0, f.jsx)(b, {
                  className: m.foregroundImage,
                  images: o?.foreground
                })]
              }), (0, f.jsxs)("div", {
                className: m.content,
                children: [(0, f.jsxs)(n.motion.div, {
                  className: m.contentGrid,
                  animate: p ? "open" : "closed",
                  variants: _,
                  children: [(0, f.jsxs)("div", {
                    className: m.titleArea,
                    children: [(0, f.jsx)("h2", {
                      dangerouslySetInnerHTML: {
                        __html: v
                      }
                    }), (0, f.jsx)("p", {
                      dangerouslySetInnerHTML: {
                        __html: c
                      }
                    })]
                  }), l.length ? (0, f.jsx)("div", {
                    className: m.platforms,
                    children: l.map(((e, a) => (0, f.jsx)("div", {
                      className: m[e.platform],
                      children: e.platform ? (0, f.jsx)("img", {
                        src: t(2936)(`./${e.platform}.svg`),
                        alt: `${"xboxone"===e.platform?"xbox one":e.platform}`
                      }) : ""
                    }, `${e.platform+a}`)))
                  }) : ""]
                }), a ? (0, f.jsx)(n.motion.p, {
                  className: m.addedInfo,
                  dangerouslySetInnerHTML: {
                    __html: a
                  },
                  animate: p ? "open" : "closed",
                  variants: _
                }) : "", r ? (0, f.jsxs)(n.motion.button, {
                  onClick: () => {
                    x(!p), h(k), p || h({
                      event_action: "select_platform",
                      event_category: "cta",
                      event: "select_platform",
                      event_label: v?.toLowerCase()
                    })
                  },
                  className: [m.ctaBtn, u.c.plusButton].join(" "),
                  animate: p ? "open" : "closed",
                  variants: T,
                  initial: !1,
                  children: [(0, f.jsx)(n.motion.div, {
                    className: [m.ctaBtnText, u.c.btnText].join(" "),
                    children: r
                  }), (0, f.jsxs)(n.motion.div, {
                    className: [m.linksArea, p ? m.showLinks : ""].join(" "),
                    animate: p ? "open" : "closed",
                    variants: S,
                    initial: !1,
                    children: [(0, f.jsx)("button", {
                      type: "button",
                      className: m.closeButtonWrapper,
                      onClick: () => {
                        x(!1), h(k), h({
                          event_action: "close",
                          event_category: "select_platform",
                          event: "select_platform",
                          event_label: v?.toLowerCase()
                        })
                      },
                      children: (0, f.jsx)("img", {
                        className: m.closeBtn,
                        src: t(4276),
                        alt: "Close menu button"
                      })
                    }), (0, f.jsx)("div", {
                      className: m.linkList,
                      children: l.length ? l.map(((e, a) => (0, f.jsx)(g.c, {
                        type: "blackBtn",
                        size: "large",
                        img: t(2936)(`./${e.platform}.svg`),
                        consoleBtn: e.platform,
                        to: e.href,
                        onClick: () => {
                          h({
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
      v.displayName = "SwiperSlide";
      const h = {
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
        k = r.framer.withFadeIn((0, r.withSimpleErrorBoundary)((e => {
          let {
            cards: a = [],
            bottomText: t,
            topText: n,
            ...r
          } = e;
          const {
            track: o
          } = (0, i.useGtmTrack)(), {
            ref: g,
            inView: u
          } = (0, c.useInView)({
            threshold: .6
          }), [b, k] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            u && !b && (o({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `buy now - ${n}`.toLowerCase(),
              element_placement: `buy now - ${r?._memoq?.topText}`.toLowerCase()
            }), k(!0))
          }), [u]), (0, f.jsxs)("div", {
            className: m.buyNowArea,
            ref: g,
            children: [(0, f.jsxs)("div", {
              className: m.topArea,
              children: [n ? (0, f.jsx)("h2", {
                children: n
              }) : "", (0, f.jsxs)("div", {
                className: m.btnArea,
                children: [(0, f.jsx)("div", {
                  className: m.prevBtn
                }), (0, f.jsx)("div", {
                  className: m.nextBtn
                })]
              })]
            }), a?.length ? (0, f.jsx)(d.wx, {
              grabCursor: !0,
              navigation: {
                nextEl: `.${m.nextBtn}`,
                prevEl: `.${m.prevBtn}`
              },
              onSlideNextTransitionEnd: () => {
                o({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: n?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                o({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: n?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                o({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: n?.toLowerCase() ?? ""
                })
              },
              modules: [l._2],
              breakpoints: h,
              children: a.map((e => (0, s.createElement)(v, {
                ...e,
                key: JSON.stringify(e)
              }))) ?? ""
            }) : "", t ? (0, f.jsx)("p", {
              className: m.bottomText,
              children: t
            }) : ""]
          })
        })))
    },
    1584: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => r
      });
      var s = t(1740);
      var n = t(5240);
      const r = e => {
        let {
          disclaimer: a,
          text: t = null,
          title: r,
          className: i = "",
          style: c = {}
        } = e;
        const o = t ?? a?.text ?? null,
          d = r ? `<h5>${r}</h5>${o}` : o;
        return o ? (0, n.jsx)("div", {
          className: (0, s.classList)("rockstargames-sites-gta-gen9fafe66500f74b5fda33cb7b70746a014", i),
          dangerouslySetInnerHTML: {
            __html: d
          },
          style: c
        }) : null
      }
    },
    1136: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => c
      });
      var s = t(1664),
        n = t(9860),
        r = t(1252);
      var i = t(5240);
      const c = (0, n.withSimpleErrorBoundary)((e => {
        let {
          buttonTxt: a,
          description: t,
          disclaimer: n,
          faqList: c = [],
          initialLength: o = 6,
          addedLength: d = 6,
          title: l,
          tinaModulesInfo: g
        } = e;
        const [m, u] = (0, s.useState)(o);
        return (0, i.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9b98dca4969db7550b49d754ec2073908",
          children: [(0, i.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9ed716cf574f33506740c9265064eeb55",
            children: [(0, i.jsxs)("div", {
              children: [(0, i.jsx)("h3", {
                children: g?.[0]?.title ?? l
              }), (0, i.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: t
                }
              })]
            }), (0, i.jsx)("div", {
              className: "rockstargames-sites-gta-gen9e7d04bcd38e193d50d084b7c245800d3",
              children: c.length ? c.slice(0, m).map(((e, a) => {
                let {
                  question: t,
                  answer: s
                } = e;
                return (0, i.jsxs)("details", {
                  children: [(0, i.jsx)("summary", {
                    children: t
                  }), (0, i.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: s
                    }
                  })]
                }, a)
              })) : ""
            }), c.length > m ? (0, i.jsx)(r.c, {
              onClick: () => u(m + d),
              text: a
            }) : ""]
          }), (0, i.jsx)("div", {
            className: "rockstargames-sites-gta-gen9f6ace97f5f337b05ad32ebe31dd2c285",
            dangerouslySetInnerHTML: {
              __html: n
            }
          })]
        })
      }))
    },
    3292: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => r
      });
      var s = t(5040);
      var n = t(5240);
      const r = e => {
        let {
          children: a,
          style: t
        } = e;
        return (0, n.jsx)(s.i, {
          children: (0, n.jsx)("div", {
            className: "rockstargames-sites-gta-gen9c0b74f4dbb581a79bf33d81b457bef59",
            style: t,
            "data-type": "guide",
            children: (0, n.jsx)("div", {
              className: "rockstargames-sites-gta-gen9a72ddbbafc8a92f08cb4a174b5ebf4ca",
              children: a
            })
          })
        })
      }
    },
    2904: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => g
      });
      var s = t(1664),
        n = t(3660),
        r = t.n(n),
        i = t(9860),
        c = t(5652),
        o = t(2836);
      var d = t(5240);
      const l = e => {
          let {
            guide: a,
            parentTitle: t,
            index: s
          } = e;
          const {
            track: n
          } = (0, o.useGtmTrack)();
          let l = {
            hero: {}
          };
          r().cloneDeepWith(a, ((e, a) => {
            "images" === a && (l = e)
          }));
          const {
            src: g
          } = (0, c.useImageParser)(l?.thumb ?? {});
          return (0, d.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b40f08dc1045d471f902655ea561c15e",
            children: (0, d.jsxs)(i.A, {
              to: a.to,
              onClick: () => {
                n({
                  event: "card_click",
                  event_category: "card",
                  event_action: "click",
                  event_label: t,
                  card_id: a.id,
                  card_name: a.title.toLowerCase(),
                  link_url: a.to,
                  position: s,
                  element_placement: t
                })
              },
              children: [(0, d.jsx)("div", {
                style: {
                  "--aspect-ratio": 1,
                  background: `url(${g?.mobile}) no-repeat center/cover`
                }
              }), (0, d.jsx)("h4", {
                children: a.title
              })]
            })
          })
        },
        g = e => {
          let {
            guides: a = {},
            tinaModulesInfo: t,
            title: n
          } = e;
          const c = r().map(a, "guide_id"),
            o = (0, i.useTinaModuleFetchByIds)({
              ids: c
            }),
            g = t?.[0]?.title ?? n,
            [m, u] = (0, s.useState)(null);
          return (0, s.useEffect)((() => {
            const e = o?.map(((e, a) => (0, d.jsx)(l, {
              guide: e,
              parentTitle: g,
              index: a
            }, e.id)));
            u(e)
          }), [o]), (0, d.jsx)(i.Gen9CoreCarousel, {
            size: "lg",
            slideChildren: m,
            title: g
          })
        }
    },
    2256: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => d
      });
      var s = t(1740),
        n = t(1960),
        r = t(5416);
      var i = t(5240);
      const c = () => {
          const {
            guideId: e
          } = (0, n.useParams)(), a = (0, r.uQ)(e, "<span></span>");
          return a ? (0, i.jsx)("div", {
            className: "rockstargames-sites-gta-gen9f1647fd28e5f0067e733c054be2c2424",
            dangerouslySetInnerHTML: {
              __html: `Guides<span></span>${a}`
            }
          }) : null
        },
        o = e => {
          let {
            hero: a
          } = e;
          const {
            alt: t,
            src: n = {}
          } = (0, s.useImageParser)(a) ?? {}, {
            mobile: r
          } = n;
          if (r) return (0, i.jsx)("div", {
            "aria-label": t,
            className: "rockstargames-sites-gta-gen9ddf4fadc9ce6250ad1864fa1dd63780c",
            role: "img",
            style: {
              background: `url(${r}) no-repeat center/contain`
            }
          })
        },
        d = e => {
          let {
            blurb: a,
            hero: t,
            title: s
          } = e;
          return (0, i.jsxs)(i.Fragment, {
            children: [t ? (0, i.jsx)(o, {
              hero: t
            }) : "", (0, i.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9b06267934a8fc8ac84e510f131df16ae",
              children: [(0, i.jsx)(c, {}), (0, i.jsx)("h1", {
                children: s
              }), a && (0, i.jsx)("span", {
                className: "rockstargames-sites-gta-gen9f9e4e76ad2623c28b29786ba7af5ac87",
                dangerouslySetInnerHTML: {
                  __html: a
                }
              })]
            })]
          })
        }
    },
    4552: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => k
      });
      var s = t(1664),
        n = t(1960),
        r = t(3660),
        i = t.n(r),
        c = t(2620),
        o = t(9860),
        d = t(2836),
        l = t(5416);
      const g = {
        pillBtn: "rockstargames-sites-gta-gen9b3b601bde6ad6cec6ef29f9d31d552ca",
        selected: "rockstargames-sites-gta-gen9e1f82fd3ab02ab3f61c5225573eb60d5",
        guideNav: "rockstargames-sites-gta-gen9dc6a651dc3aebb3a3e112e4d94b5483f",
        headerHidden: "rockstargames-sites-gta-gen9f42dd22b2d449a6474bc3a92e5ba9e2d",
        guideList: "rockstargames-sites-gta-gen9f94b06d8279968e7a036e6aaad56140a",
        activeSection: "rockstargames-sites-gta-gen9b471a7219a513800b67df265e8bef283",
        guideLinkCurrent: "rockstargames-sites-gta-gen9c37c016d19e55d1539a25edbbcf876cf",
        guide: "rockstargames-sites-gta-gen9c06ceafe8b3ec4d8918797e0928400d1",
        sections: "rockstargames-sites-gta-gen9dcbefa30334c656a38e45495ab02a0b2"
      };
      var m = t(5240);
      const u = {
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
        b = e => {
          let {
            to: a,
            title: t,
            id_hash: n,
            query: r
          } = e;
          const {
            track: i
          } = (0, d.useGtmTrack)(), [c, u] = (0, s.useState)(n === r), {
            state: f
          } = (0, l.KM)(), {
            activeSection: b
          } = f;
          return (0, s.useEffect)((() => u(r !== b ? b === n : r === n)), [b]), (0, m.jsx)(o.A, {
            to: a,
            className: c ? g.activeSection : "",
            onClick: () => {
              i({
                event: "nav_click",
                event_category: "nav",
                event_action: "click"
              })
            },
            children: t
          }, a)
        },
        v = e => {
          let {
            sections: a
          } = e;
          const [t] = (0, n.useSearchParams)();
          return (0, m.jsx)("div", {
            className: g.sections,
            children: a?.map((e => {
              let {
                id_hash: a,
                title: s,
                to: n
              } = e;
              return (0, m.jsx)(b, {
                id_hash: a,
                query: t,
                title: s,
                to: n
              })
            }))
          })
        },
        h = e => {
          let {
            currentId: a,
            group: t
          } = e;
          const [n, r] = (0, s.useState)(null), [d, b] = (0, s.useState)(null), {
            state: h
          } = (0, l.KM)(), {
            activeSection: k
          } = h;
          return (0, s.useEffect)((() => {
            const e = i().findIndex(t?.children, (e => {
              let {
                id_hash: t
              } = e;
              return t === a
            }));
            b(e), r(-1 !== e)
          }), [a, k, t]), (0, m.jsxs)("div", {
            className: g.guideList,
            children: [(0, m.jsx)("button", {
              type: "button",
              onClick: () => r(!n),
              children: t.title
            }), (0, m.jsx)(c.motion.nav, {
              animate: n ? "open" : "closed",
              variants: f,
              transition: u,
              children: t?.children?.map(((e, t) => {
                let {
                  children: s,
                  id_hash: n,
                  title: r,
                  to: i
                } = e;
                return (0, m.jsxs)("div", {
                  className: g.guide,
                  children: [(0, m.jsx)(o.A, {
                    className: [g.guideLink, a === n ? g.guideLinkCurrent : ""].join(" "),
                    to: i,
                    children: r
                  }), t === d && s?.length ? (0, m.jsx)(v, {
                    sections: s
                  }) : ""]
                }, r)
              }))
            })]
          })
        },
        k = e => {
          let {
            currentId: a
          } = e;
          const t = (0, l.ye)(),
            {
              state: {
                headerHeight: s,
                headerHidden: n
              }
            } = (0, l.KM)();
          return (0, m.jsx)("div", {
            className: [g.guideNav, n ? g.headerHidden : ""].join(" "),
            style: {
              "--header-height": `${s}px`
            },
            children: t?.map((e => (0, m.jsx)(h, {
              currentId: a,
              group: e
            }, e.id_hash)))
          })
        }
    },
    5992: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => c
      });
      var s = t(1664),
        n = t(4268),
        r = t(5416);
      var i = t(5240);
      const c = e => {
        let {
          style: a,
          children: t,
          __anchor: c = null
        } = e;
        const {
          announcePresence: o
        } = (0, r.y_)(), {
          ref: d,
          inView: l
        } = (0, n.useInView)({
          rootMargin: "0px 0px -700px 0px",
          threshold: 0,
          delay: 850
        });
        return (0, s.useEffect)((() => {
          o(c)
        }), [c]), (0, s.useEffect)((() => {
          l && o(c)
        }), [l]), (0, i.jsx)("span", {
          style: a,
          className: "rockstargames-sites-gta-gen9e46af541dffc51dc338509484cffa659",
          name: c,
          ref: d,
          children: t
        })
      }
    },
    8500: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => m
      });
      var s = t(1664),
        n = t(9860),
        r = t(1740),
        i = t(2836),
        c = t(4268),
        o = t(5388),
        d = t(7572),
        l = t(1584);
      var g = t(5240);
      const m = n.framer.withFadeIn((e => {
        let {
          brands: a = [],
          content: t,
          ctas: n = [],
          disclaimer: m,
          image: u,
          large: f = !1,
          title: b,
          image_on_right: v = !1,
          style: h = {},
          className: k = "",
          ...p
        } = e;
        const {
          track: x
        } = (0, i.useGtmTrack)(), {
          ref: y,
          inView: N
        } = (0, c.useInView)({
          threshold: .6
        }), [j, _] = (0, s.useState)(!1), S = (0, r.useGetCdnSource)(u?.full_src ?? null) ?? null;
        return (0, s.useEffect)((() => {
          N && !j && (x({
            event: "page_section_impression",
            event_action: "impression",
            event_category: "page_section",
            event_label: `image text group - ${b}`.toLowerCase(),
            element_placement: `image text group - ${p?._memoq?.title}`.toLowerCase()
          }), _(!0))
        }), [N]), (0, g.jsxs)("div", {
          className: (0, r.classList)("rockstargames-sites-gta-gen9f6868d96e7b25bdb74435d0559970e75", f ? "rockstargames-sites-gta-gen9c9ca8e3e22865d04f816a0923489b124" : "", v ? "rockstargames-sites-gta-gen9f044d09bcae5bc48eef278aa1c8600a2" : "", S ? "" : "rockstargames-sites-gta-gen9a6ec7a3705521eae985d53eb2769018c", k),
          style: h,
          ref: y,
          children: [S ? (0, g.jsx)("div", {
            className: "rockstargames-sites-gta-gen9aa09f1e58f180b91c4f1795f60448086",
            style: {
              background: `url(${S}) no-repeat center/cover`
            }
          }) : "", (0, g.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9ed0a185c4fc5fc35cfe58c069276b698",
            children: [(0, g.jsx)(d.c, {
              brands: a
            }), (0, g.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9a459c55933f25ddf49dcacd16528b5c3",
              children: [(0, g.jsx)("h2", {
                className: "rockstargames-sites-gta-gen9cd300722ac259ea94696805dc5731984",
                tabIndex: 0,
                children: b
              }), t ? (0, g.jsx)("div", {
                className: "rockstargames-sites-gta-gen9c16cfdde0a10fcb97b4d20ffc8f09d71",
                dangerouslySetInnerHTML: {
                  __html: t
                }
              }) : ""]
            }), (0, g.jsx)(o.c, {
              ctas: n
            }), (0, g.jsx)(l.c, {
              disclaimer: m
            })]
          })]
        })
      }))
    },
    3736: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => c
      });
      var s = t(1740),
        n = t(8500);
      const r = {
        pillBtn: "rockstargames-sites-gta-gen9f117df17a34d1837a4e2bb599a71f88d",
        selected: "rockstargames-sites-gta-gen9e8b6740b3aded532dfefbf06edf500ca",
        imageTextGroupGroup: "rockstargames-sites-gta-gen9d51265e78cba56a6119978e898e2a967",
        bg: "rockstargames-sites-gta-gen9d9d65419cc79c4fa43a6bc2571c552c7",
        bgMobile: "rockstargames-sites-gta-gen9b52f9f638a05d06d1c573dded0810212",
        bgDesktop: "rockstargames-sites-gta-gen9d6c821fe070e5eb41f1fba6178bd3571"
      };
      var i = t(5240);
      const c = e => {
        let {
          bg: a,
          image_text_groups: t = [],
          style: c = {},
          className: o = ""
        } = e;
        const d = (0, s.useGetCdnSource)(a?.image?.mobile?.full_src ?? null),
          l = (0, s.useGetCdnSource)(a?.image?.desktop?.full_src ?? null) ?? d;
        return t.length ? (0, i.jsxs)("div", {
          className: (0, s.classList)(r.imageTextGroupGroup, o),
          style: {
            ...c
          },
          children: [d ? (0, i.jsx)("div", {
            className: [r.bgMobile, r.bg].join(" "),
            style: {
              background: `url(${d}) no-repeat center/cover`
            }
          }) : "", l ? (0, i.jsx)("div", {
            className: [r.bgDesktop, r.bg].join(" "),
            style: {
              background: `url(${l}) no-repeat center/cover`
            }
          }) : "", t.map(((e, a) => (0, i.jsx)(n.c, {
            ...e
          }, a)))]
        }) : null
      }
    },
    8960: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => c
      });
      var s = t(9860),
        n = t(1740);
      const r = {
        pillBtn: "rockstargames-sites-gta-gen9a218c6efb11f05af742c35731abd7f0e",
        selected: "rockstargames-sites-gta-gen9c9f11c19d7943dec1c872d1d921cd364",
        linkoutSection: "rockstargames-sites-gta-gen9f62388243285f747f07ef5d1be84ceb8",
        cta: "rockstargames-sites-gta-gen9eec30b6a686a74885da49d3cf33c1795"
      };
      var i = t(5240);
      const c = e => {
        let {
          text: a,
          cta: c,
          to: o,
          className: d = "",
          style: l = {}
        } = e;
        return (0, i.jsxs)(s.A, {
          className: (0, n.classList)(r.linkoutSection, d),
          to: o,
          style: l,
          children: [a && (0, i.jsx)("div", {
            className: r.text,
            children: a
          }), c && (0, i.jsxs)("div", {
            className: r.cta,
            children: [c, " ", (0, i.jsx)("img", {
              src: t(2140)
            })]
          })]
        })
      }
    },
    7276: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => r
      });
      var s = t(1664);
      var n = t(5240);
      const r = e => {
        let {
          children: a,
          style: t,
          theme: r
        } = e;
        const [i, c] = (0, s.useState)(r);
        return (0, s.useEffect)((() => {
          r && c(r)
        }), [r]), (0, n.jsx)("div", {
          className: "rockstargames-sites-gta-gen9a691fa72d9c1962b69090f47fbb6eadf",
          style: t,
          "data-theme": i,
          children: a
        })
      }
    },
    880: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => i
      });
      var s = t(4644),
        n = t.n(s);
      var r = t(5240);
      const i = e => {
        let {
          id: a
        } = e;
        return (0, r.jsx)("div", {
          className: "rockstargames-sites-gta-gen9f6130392c70daec4b6c7b3fb89ad8369",
          children: (0, r.jsx)(n(), {
            autoplay: !0,
            context: "embed",
            id: a,
            endBehavior: "stillframe",
            wrapper: !1
          })
        })
      }
    },
    324: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        BrandMessage: () => r,
        BuyNow: () => i.c,
        ClaimCountdown: () => o,
        Disclaimer: () => d.c,
        FAQ: () => l.c,
        Guide: () => g.c,
        GuideGroup: () => m.c,
        GuideIntro: () => u.c,
        GuideNavDesktop: () => f.c,
        GuideSection: () => b.c,
        Header: () => H,
        Hero: () => A,
        ImageTextGroup: () => V.c,
        ImageTextGroupGroup: () => W.c,
        LinkoutSection: () => R.c,
        Logo: () => U,
        SectionTitle: () => q,
        TinaWrapper: () => K.c,
        VideoPlayerWrapper: () => Q.c
      });
      var s = t(7572);
      var n = t(5240);
      const r = e => {
        let {
          brand: a,
          headline_left: t,
          headline_right: r,
          info: i
        } = e;
        return (0, n.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9ebe7007f3b51b86e212449fb1dc61aec",
          children: [(0, n.jsx)(s.c, {
            brands: [{
              brand: a
            }]
          }), (0, n.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9ae37f727f57beae0bd72b3e764cda36d",
            children: [(0, n.jsxs)("h2", {
              children: [t, " ", (0, n.jsx)("span", {
                children: r
              })]
            }), (0, n.jsx)("p", {
              children: i
            })]
          })]
        })
      };
      var i = t(3300),
        c = t(1664);
      const o = e => {
        let {
          left: a,
          right: t
        } = e;
        const [s, r] = (0, c.useState)(""), [i, o] = (0, c.useState)(!1);
        return (0, n.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9b868510520ca3ebc97d9ce2ea9d2edf2",
          children: [(0, n.jsxs)("h2", {
            "aria-hidden": i,
            onMouseOver: () => {
              o(!0), r(`${a} ${t}`)
            },
            onMouseOut: () => {
              o(!1), r("")
            },
            onFocus: () => {},
            onBlur: () => {},
            tabIndex: 0,
            children: [a, " ", (0, n.jsx)("span", {
              children: t
            })]
          }), (0, n.jsx)("h2", {
            role: "status",
            "aria-live": "polite",
            className: "rockstargames-sites-gta-gen9abbffb6bf72ec54bb65fb37351644300",
            children: s
          })]
        })
      };
      var d = t(1584),
        l = t(1136),
        g = t(3292),
        m = t(2904),
        u = t(2256),
        f = t(4552),
        b = t(5992),
        v = t(1960),
        h = t(9860),
        k = t(2836),
        p = t(5792),
        x = t(3061),
        y = t(1252),
        N = t(3660),
        j = t.n(N),
        _ = t(5416);
      const S = {
          pillBtn: "rockstargames-sites-gta-gen9e21b0a2f1dc192ae46ffe612a99cefee",
          selected: "rockstargames-sites-gta-gen9eed88d5d103b94c83a06407abc53d634",
          gen9Nav: "rockstargames-sites-gta-gen9ad5645cb6bdee2fec9d8b69059ff5ee1",
          activeLink: "rockstargames-sites-gta-gen9c605b91c52259c35a1db33336335fcab",
          subNav: "rockstargames-sites-gta-gen9c0216edcf5b937234c70a883cf6f0eca",
          subNavOpen: "rockstargames-sites-gta-gen9db2ef4d9ebfd8381f9f39633af04356f",
          navGroup: "rockstargames-sites-gta-gen9d4603ab8cc506a9ebb20c7aba2c39b39",
          subNavUnder: "rockstargames-sites-gta-gen9ac0648139d09310a49e852c4736387f8",
          subNavRight: "rockstargames-sites-gta-gen9f8a62ef602ecc7fa292a6aee9617f890"
        },
        T = e => {
          let {
            activeExact: a = !1,
            to: t,
            title: s,
            under: r = !0,
            childModules: i = [],
            t: o
          } = e;
          const {
            track: d
          } = (0, k.useGtmTrack)(), [l, g] = (0, c.useState)(!1), m = j().debounce((() => {
            g(!1)
          }), 250), u = (0, c.useCallback)((() => {
            m?.cancel(), g(!0)
          }), [m]), f = () => {
            d({
              event: "nav_click",
              event_category: "nav",
              event_action: "click",
              event_label: s.toLowerCase(),
              link_url: t
            })
          };
          return (0, n.jsxs)("div", {
            className: S.navGroup,
            onMouseEnter: u,
            onMouseLeave: m,
            onKeyUp: u,
            onClick: () => g(!1),
            role: "button",
            tabIndex: -1,
            children: [t ? (0, n.jsx)(h.A, {
              end: a,
              to: t,
              target: t.startsWith("http") ? "_blank" : "_self",
              className: e => {
                let {
                  isActive: a
                } = e;
                return a ? S.activeLink : null
              },
              onClick: f,
              children: o(s)
            }) : (0, n.jsx)("button", {
              type: "button",
              onClick: f,
              children: o(s)
            }), i?.length ? (0, n.jsx)("div", {
              className: [S.subNav, r ? S.subNavUnder : S.subNavRight, l ? S.subNavOpen : ""].join(" "),
              children: i?.map((e => (0, n.jsx)(T, {
                under: !1,
                ...e,
                t: o
              }, e?.title)))
            }) : ""]
          })
        },
        w = (0, p.withTranslations)((e => {
          let {
            t: a
          } = e;
          const t = (0, _.WS)();
          return (0, n.jsx)("nav", {
            className: S.gen9Nav,
            children: t.map((e => {
              let {
                children: t,
                to: s,
                ...r
              } = e;
              return (0, n.jsx)(T, {
                childModules: t,
                to: s,
                t: a,
                ...r
              }, s)
            }))
          })
        }));
      var C = t(2620);
      const L = {
          closed: {
            d: "M3 12H21"
          },
          open: {
            d: "M3 12H21"
          }
        },
        M = {
          closed: {
            d: "M3 18H21"
          },
          open: {
            d: "M3 12H21"
          }
        },
        I = {
          closed: {
            d: "M3 6H21"
          },
          open: {
            d: "M3 12H21"
          }
        },
        B = {
          stroke: "white",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transition: {
            duration: .2
          }
        },
        E = () => {
          const {
            state: {
              mobileNavOpen: e
            },
            setMobileNavOpen: a
          } = (0, _.KM)(), {
            navOpen: t,
            setNavOpen: s
          } = (0, k.useRockstarUserState)(), r = (0, C.useAnimation)(), i = (0, C.useAnimation)(), o = (0, C.useAnimation)();
          return (0, c.useEffect)((() => {
            !0 === t && !0 === e && a(!1)
          }), [t]), (0, c.useEffect)((() => {
            r.start(e ? L.open : L.closed), i.start(e ? M.open : M.closed), o.start(e ? I.open : I.closed)
          }), [e]), (0, n.jsxs)("svg", {
            className: "rockstargames-sites-gta-gen9d817cc4bacd7aa06d8f4b677733440db",
            onClick: () => (async () => {
              a(!e), !0 === t && s(!1)
            })(),
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: [(0, n.jsx)(C.motion.path, {
              ...I.closed,
              ...B,
              animate: o
            }), (0, n.jsx)(C.motion.path, {
              ...M.closed,
              ...B,
              animate: i
            }), (0, n.jsx)(C.motion.path, {
              ...L.closed,
              ...B,
              animate: r
            })]
          })
        },
        G = {
          pillBtn: "rockstargames-sites-gta-gen9b828f7402c497f60a9364ccfce696119",
          selected: "rockstargames-sites-gta-gen9e656efcba63b0e1b5bf0a892eaa37fa2",
          gen9Header: "rockstargames-sites-gta-gen9ac8d99b875e132c2458d31076c20034a",
          headerHidden: "rockstargames-sites-gta-gen9c32405cfc6e0c3c08c43ee85898a64ee",
          content: "rockstargames-sites-gta-gen9ce661df9d9541ff15c96e75ad5dc0eba",
          "content--child": "rockstargames-sites-gta-gen9b3677da2eed7ae514c119f47c6762804",
          branding: "rockstargames-sites-gta-gen9d66bfb390f1024c4632ac79029a1a420",
          logoDivider: "rockstargames-sites-gta-gen9bbab689b537503f1266f40cc98174fc3",
          brandLogo: "rockstargames-sites-gta-gen9d8776a0c1dc065acb743fc3fda9f3013",
          buttonArea: "rockstargames-sites-gta-gen9d71bb5ba193726f0f2c579e44f19caca",
          navBtn: "rockstargames-sites-gta-gen9c1be3ca2248e19afa4846c708d4b4357"
        },
        H = (0, p.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            state: {
              brand: t,
              headerHidden: s,
              mobileNavOpen: r
            },
            setHeaderHeight: i,
            setHeaderHidden: o,
            setMobileNavOpen: d
          } = (0, _.KM)(), {
            navOpen: l
          } = (0, k.useRockstarUserState)(), g = (0, c.useRef)(), {
            track: m
          } = (0, k.useGtmTrack)(), [, u] = (0, v.useSearchParams)(), {
            pathname: f
          } = (0, v.useLocation)(), {
            freezeUserShouldSeeMore: b,
            userShouldSeeMore: p
          } = (0, x.useScroll)(), [N, j] = (0, c.useState)(0), S = () => N > 1023;
          return (0, c.useEffect)((() => {}), [b, r, p, l]), (0, c.useEffect)((() => {
            d(!1)
          }), [f]), (0, c.useEffect)((() => {
            const e = () => {
              g.current && i(g.current.offsetHeight), j(window.innerWidth)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [g]), (0, n.jsx)("header", {
            className: [G.gen9Header, s ? G.headerHidden : ""].join(" "),
            ref: g,
            children: (0, n.jsxs)("div", {
              className: G.content,
              children: [(0, n.jsxs)("div", {
                className: G.branding,
                "data-brand": t,
                children: [(0, n.jsx)(h.RockstarLogo, {}), (0, n.jsx)("div", {
                  className: G.logoDivider
                }), S() && (0, n.jsx)("div", {
                  className: G.brandLogo
                }), (0, n.jsx)(E, {})]
              }), !S() && (0, n.jsx)("div", {
                className: G.brandLogo,
                "data-brand": t
              }), (0, n.jsx)(w, {}), (0, n.jsx)("div", {
                className: G.buttonArea,
                children: (0, n.jsxs)("div", {
                  className: G.navBtn,
                  children: [!(N < 1024) && (0, n.jsx)(y.c, {
                    text: a("Buy Now"),
                    type: "transparentBtn",
                    size: "small",
                    onClick: () => {
                      u({
                        info: "order"
                      }), m({
                        event_action: "buy",
                        event_category: "cta",
                        event: "cta_buy",
                        event_label: "header",
                        text: a("Buy Now").toLowerCase()
                      })
                    }
                  }), (0, n.jsx)(k.MenuButton, {})]
                })
              })]
            })
          })
        }));
      var P = t(1740),
        O = t(5388);
      const D = {
          pillBtn: "rockstargames-sites-gta-gen9da06af8dd97d38ae3b6d72a846a016c8",
          selected: "rockstargames-sites-gta-gen9ee3952baaef7299a6aeccdd510d89eee",
          hero: "rockstargames-sites-gta-gen9bdf8106449291381aa85bb1beeab8a09",
          images: "rockstargames-sites-gta-gen9ac9dde4965f80b2fbd79a4516515f5dd",
          background: "rockstargames-sites-gta-gen9a72d947fc700f0c79479290b3dfdfd9e",
          gradient: "rockstargames-sites-gta-gen9c8d52d6f8deac3950d9bb4fd44cf61ec",
          layered: "rockstargames-sites-gta-gen9d7a7611978f14ff5090d5053dd1e7c4d",
          content: "rockstargames-sites-gta-gen9edbd8517fefee8e94e9e1837307cd303",
          descriptions: "rockstargames-sites-gta-gen9a4285ebbbe0a7ad2f7616989a0601883",
          buttonGroup: "rockstargames-sites-gta-gen9b7af1262bc7abedceb8bc59de6c6ec5c",
          legalText: "rockstargames-sites-gta-gen9f87f44fa37f5036a7b16bd8c7d830db2",
          shardsCarousel: "rockstargames-sites-gta-gen9fe2c2d62d76afc07448328859b4341f6"
        },
        $ = e => {
          let {
            title: a = "",
            mobileImg: t,
            desktopImg: s
          } = e;
          const r = (0, P.useGetCdnSource)(t ?? null),
            i = (0, P.useGetCdnSource)(s ?? r);
          return (0, n.jsx)("div", {
            className: D.shard,
            style: {
              "--background-image-mobile": `url(${r})`,
              "--background-image-desktop": `url(${i})`
            },
            children: (0, n.jsx)("h5", {
              children: a
            })
          })
        },
        F = e => {
          let {
            title: a = "Membership Rewards",
            shards: t
          } = e;
          const [s, r] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            t && r(t.map((e => {
              if (!e?.shardImg) return;
              const {
                title: a,
                shardImg: t
              } = e, {
                mobile: s,
                desktop: r
              } = t;
              return (0, n.jsx)($, {
                title: a,
                mobileImg: s?.full_src,
                desktopImg: r?.full_src
              })
            })))
          }), [t]), s ? (0, n.jsx)("div", {
            className: D.shardsCarousel,
            children: (0, n.jsx)(h.Gen9CoreCarousel, {
              title: a,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        A = e => {
          let {
            brands: a = [],
            backgroundImg: t,
            layeredImg: r,
            ctas: i = [],
            expandingButtonLabel: c = "Subscribe",
            platformsAndLinks: o = [],
            description: d,
            title: l,
            legalText: g,
            shardsSection: m = {},
            className: u
          } = e;
          const f = (0, P.useGetCdnSource)(t?.mobile?.full_src ?? null),
            b = (0, P.useGetCdnSource)(t?.desktop?.full_src ?? f),
            v = (0, P.useGetCdnSource)(r?.mobile?.full_src ?? null),
            k = (0, P.useGetCdnSource)(r?.desktop?.full_src ?? v),
            p = {
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
            x = {
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
          return (0, n.jsxs)(C.motion.div, {
            className: (0, P.classList)(D.hero, u),
            style: {
              "--background-image-desktop": `url(${b})`,
              "--background-image-mobile": `url(${f})`,
              "--layered-image-desktop": `url(${k})`,
              "--layered-image-mobile": `url(${v})`
            },
            initial: "hidden",
            animate: "visible",
            variants: p,
            children: [(0, n.jsxs)("div", {
              className: D.images,
              children: [b && f ? (0, n.jsx)("div", {
                className: D.background,
                style: t?.style ?? {}
              }) : "", v && k ? (0, n.jsx)("div", {
                className: D.layered
              }) : "", (0, n.jsx)("div", {
                className: D.gradient
              })]
            }), (0, n.jsxs)(C.motion.div, {
              className: D.content,
              initial: "hidden",
              animate: "visible",
              variants: p,
              children: [(0, n.jsx)(C.motion.div, {
                variants: x,
                children: (0, n.jsx)(s.c, {
                  brands: a
                })
              }), o.length ? (0, n.jsx)(C.motion.div, {
                variants: x,
                children: (0, n.jsx)(h.ExpandingPlatformButton, {
                  buttonText: c,
                  platformsAndLinks: o,
                  children: (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(C.motion.div, {
                      className: D.descriptions,
                      variants: x,
                      children: [(0, n.jsx)("h1", {
                        dangerouslySetInnerHTML: {
                          __html: l
                        }
                      }), (0, n.jsx)("p", {
                        dangerouslySetInnerHTML: {
                          __html: d
                        }
                      })]
                    }), (0, n.jsx)(C.motion.div, {
                      variants: x,
                      children: (0, n.jsx)(O.c, {
                        buttons: i,
                        className: D.buttonGroup
                      })
                    })]
                  })
                })
              }) : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsxs)(C.motion.div, {
                  className: D.descriptions,
                  variants: x,
                  children: [(0, n.jsx)("h1", {
                    dangerouslySetInnerHTML: {
                      __html: l
                    }
                  }), (0, n.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: d
                    }
                  })]
                }), (0, n.jsx)(C.motion.div, {
                  variants: x,
                  children: (0, n.jsx)(O.c, {
                    buttons: i,
                    className: D.buttonGroup
                  })
                })]
              }), g && (0, n.jsx)(C.motion.div, {
                className: D.legalText,
                variants: x,
                children: (0, n.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: g
                  }
                })
              })]
            }), m?.shards && (0, n.jsx)(F, {
              ...m
            })]
          })
        };
      var V = t(8500),
        W = t(3736),
        R = t(8960);
      const z = {},
        U = e => {
          let {
            brand: a
          } = e;
          return (0, n.jsx)("div", {
            className: z[a]
          })
        },
        q = () => (0, n.jsx)("h2", {
          children: "Section"
        });
      var K = t(7276),
        Q = t(880)
    },
    5416: (e, a, t) => {
      "use strict";
      t.d(a, {
        KM: () => r,
        y_: () => i.y,
        uQ: () => m,
        ye: () => o,
        WS: () => l
      });
      var s = t(3052);
      const n = (0, s.makeVar)({
          brand: null,
          headerHeight: 0,
          headerHidden: !1,
          mobileNavOpen: !1,
          activeSection: null
        }),
        r = () => {
          const e = (0, s.useReactiveVar)(n),
            a = e => {
              const a = {
                ...n(),
                ...e
              };
              n(a)
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
      var i = t(5040),
        c = t(8872);
      const o = () => {
        const {
          data: e
        } = (0, s.useQuery)(c.TinaModulesTree, {
          variables: {
            type: "gen9-guide-group"
          }
        });
        return e?.tinaModulesTree ?? null
      };
      var d = t(1664);
      t(3660), t(3276);
      const l = () => {
        const [e, a] = (0, d.useState)([{
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
      t(2836);
      var g = t(9500);
      const m = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " > ";
        const [t, n] = (0, d.useState)(null), {
          data: r
        } = (0, s.useQuery)(g.TinaModulesTree, {
          variables: {
            id: e
          },
          skip: !e
        });
        return (0, d.useEffect)((() => {
          const e = r?.tinaModulesTree?.[0]?.tree ?? null;
          e && n(e.map((e => {
            let {
              title: a
            } = e;
            return a
          })).join(a))
        }), [r, a, e]), t
      }
    },
    5040: (e, a, t) => {
      "use strict";
      t.d(a, {
        i: () => l,
        y: () => d
      });
      var s = t(1664),
        n = t(1960),
        r = t(3061),
        i = t(5416),
        c = t(5240);
      const o = (0, s.createContext)(),
        d = () => (0, s.useContext)(o),
        l = e => {
          let {
            children: a
          } = e;
          const [t, d] = (0, s.useState)(null), [l] = (0, n.useSearchParams)(), {
            setActiveSection: g
          } = (0, i.KM)(), {
            pauseUserShouldSeeMore: m
          } = (0, r.useScroll)(), u = (0, s.useCallback)((e => {
            if (e !== l.get("section")) return void g(e);
            const a = document.getElementsByName(l.get("section"))?.[0];
            a && (m(), g(l.get("section")), a.scrollIntoView({
              behavior: "auto"
            }))
          }), [l.get("section"), t]);
          (0, s.useEffect)((() => {
            l.get("section") && u(l.get("section"))
          }), [l.get("section")]);
          const f = (0, s.useMemo)((() => ({
            announcePresence: u,
            section: t,
            setSection: d
          })), [u, t, d]);
          return (0, c.jsx)(o.Provider, {
            value: f,
            children: a
          })
        }
    },
    3276: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        componentsForTinaParser: () => _,
        componentsForTinaParserGuide: () => S
      });
      var s = t(9860),
        n = t(8720),
        r = t(6752),
        i = t(7047),
        c = t(9812),
        o = t.n(c),
        d = t(2024),
        l = t.n(d),
        g = t(2112),
        m = t.n(g),
        u = t(3300),
        f = t(1584),
        b = t(1136),
        v = t(3292),
        h = t(2904),
        k = t(2256),
        p = t(5992),
        x = t(3736),
        y = t(8960),
        N = t(7276),
        j = t(324);
      const _ = {
          CalloutSection: s.CalloutSection,
          Card: n.Card,
          CardWithImageGallery: n.CardWithImageGallery,
          ConditionalBlock: s.ConditionalBlock,
          CoverCard: n.CoverCard,
          EventsDeck: i.EventsDeck,
          PageTemplate: l(),
          ExpandingPlatformButton: s.ExpandingPlatformButton,
          TextCard: n.TextCard,
          Deck: n.Deck,
          Grid: s.Grid,
          Hero: s.Hero,
          HighlightsItem: r.HighlightsItem,
          HTMLElement: s.HTMLElement,
          OrderedList: s.OrderedList,
          ParallaxInnerLayer: s.ParallaxInnerLayer,
          ParallaxOuterLayer: s.ParallaxOuterLayer,
          ParallaxWrapper: s.ParallaxWrapper,
          UnorderedList: s.UnorderedList,
          ImageWithBadge: s.ImageWithBadge,
          Carousel: s.Carousel,
          GroupOfItems: o(),
          Rating: s.Rating,
          gen9: j,
          TinaModuleFetchNRender: s.TinaModuleFetchNRender,
          PromoModule: s.PromoModule,
          Engagement: m()
        },
        S = {
          CalloutSection: s.CalloutSection,
          Card: n.Card,
          CardWithImageGallery: n.CardWithImageGallery,
          ConditionalBlock: s.ConditionalBlock,
          CoverCard: n.CoverCard,
          Carousel: s.Carousel,
          ExpandingPlatformButton: s.ExpandingPlatformButton,
          Hero: s.Hero,
          Grid: s.Grid,
          TextCard: n.TextCard,
          Deck: n.Deck,
          GroupOfItems: o(),
          ParallaxInnerLayer: s.ParallaxInnerLayer,
          ParallaxOuterLayer: s.ParallaxOuterLayer,
          ParallaxWrapper: s.ParallaxWrapper,
          PromoModule: s.PromoModule,
          Engagement: m(),
          gen9: {
            BuyNow: u.c,
            Disclaimer: f.c,
            FAQ: b.c,
            Guide: v.c,
            GuideGroup: h.c,
            GuideIntro: k.c,
            GuideSection: p.c,
            Hero: s.Hero,
            ImageTextGroupGroup: x.c,
            LinkoutSection: y.c,
            TinaWrapper: N.c,
            UserVote: () => null
          },
          HTMLElement: s.HTMLElement,
          OrderedList: s.OrderedList,
          UnorderedList: s.UnorderedList,
          ImageWithBadge: s.ImageWithBadge,
          Rating: s.Rating,
          TinaModuleFetchNRender: s.TinaModuleFetchNRender,
          UserVote: s.UserVote
        }
    },
    8872: e => {
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
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesTree = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesTree")
    },
    9500: e => {
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
          var s = e.type;
          "NamedType" === s.kind && a.add(s.name.value)
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
      var s = {};

      function n(e, a) {
        for (var t = 0; t < e.definitions.length; t++) {
          var s = e.definitions[t];
          if (s.name && s.name.value == a) return s
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesTree = function(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var r = s[a] || new Set,
          i = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return i.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesTree")
    },
    568: (e, a, t) => {
      "use strict";
      t.d(a, {
        c: () => s
      });
      const s = {
        pillBtn: "rockstargames-sites-gta-gen9f297d5933fb4bef7f0b04effe2fbb425",
        selected: "rockstargames-sites-gta-gen9e7600772fcc84bc305d118459be56e34",
        plusButton: "rockstargames-sites-gta-gen9d850e15950ca294ba83ca299b77d860a",
        small: "rockstargames-sites-gta-gen9f1cfeecd7372238001f99c5acb17c2ac",
        btnText: "rockstargames-sites-gta-gen9b21615c9a8a4fa6c78a166432078c666",
        btnTexticon: "rockstargames-sites-gta-gen9b78dfeeb23148f6cc8b9dea12b562d94",
        whiteBtn: "rockstargames-sites-gta-gen9bd72f5b8c0eb32cfbd6dc2b334762309",
        blackBtn: "rockstargames-sites-gta-gen9e342cf309e992e5bcf3625b50d9d25b7",
        transparentBtn: "rockstargames-sites-gta-gen9c297c5390531f2c27ab37fd510898b72",
        iconBtn: "rockstargames-sites-gta-gen9d70b9a93866d3d454b5cc0f9bc9eb988",
        link: "rockstargames-sites-gta-gen9aaa867763c81786d696a982b67ebad43",
        xboxone: "rockstargames-sites-gta-gen9fcb7ba6f50663dd5d7edf75a9db463b2",
        xboxseriesxs: "rockstargames-sites-gta-gen9f537b2428ce8694bcf0599fa214805e1",
        ps4: "rockstargames-sites-gta-gen9f829869ba58a2a6c5f737b27988f554c",
        ps5: "rockstargames-sites-gta-gen9eb1b7d2ad3d3494c88d0484aee7ba59a",
        pc: "rockstargames-sites-gta-gen9a39052f1b0430bf92317f19efc376cdc"
      }
    },
    2936: (e, a, t) => {
      var s = {
        "./left.svg": 3540,
        "./pc.svg": 8060,
        "./ps4.svg": 7359,
        "./ps5.svg": 5496,
        "./right.svg": 2424,
        "./x.svg": 4276,
        "./xboxone.svg": 4436,
        "./xboxseriesxs.svg": 5752
      };

      function n(e) {
        var a = r(e);
        return t(a)
      }

      function r(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 2936
    },
    3540: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    8060: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    7359: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    5496: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    2424: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    4276: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    4436: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    5752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    2140: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1e50aff7a4148673983e493ca815454e.svg"
    }
  }
]);
//# sourceMappingURL=e6554c8cbeca9009c04aeee1cc6518ca.js.map