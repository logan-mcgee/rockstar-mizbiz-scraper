! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "97a7a209-514f-4356-87b1-0a347f8b4476", e._sentryDebugIdIdentifier = "sentry-dbid-97a7a209-514f-4356-87b1-0a347f8b4476")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [3092], {
    54360: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => n
      });
      var s = t(91029);
      const n = e => {
        let {
          brands: a = []
        } = e;
        return a.length ? (0, s.jsx)("div", {
          className: "rockstargames-sites-gta-gen9f6238fa20ad55d94e2baee6252cacc9a",
          children: a.map(((e, a) => {
            let {
              brand: t
            } = e;
            return (0, s.jsx)("div", {
              className: "rockstargames-sites-gta-gen9cdf9bbf4599d4c4643bc18a37b5fa601",
              "data-brand": t
            }, a)
          }))
        }) : null
      }
    },
    22881: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(95966),
        n = t(88658);
      var i = t(91029);
      const r = e => {
        let {
          buttons: a = [],
          className: t
        } = e;
        return a.length ? (0, i.jsx)("div", {
          className: (0, s.classList)("rockstargames-sites-gta-gen9d5cf39b0f935ff4f022f65634a36ef76", t),
          children: a.map(((e, a) => {
            let {
              icon: t,
              to: s,
              title: r,
              gtm: c
            } = e;
            return r ? (0, i.jsx)(n.A, {
              className: "white",
              text: r,
              to: s,
              icon: t,
              gtm: c
            }, a) : ""
          }))
        }) : null
      }
    },
    37242: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => h
      });
      var s = t(62229),
        n = t(35136),
        i = t(41638),
        r = t(45505),
        c = t(2918),
        o = t(22738),
        l = t(92440),
        d = t(80725),
        m = t(50216),
        g = t(88658);
      const u = {
        pillBtn: "rockstargames-sites-gta-gen9f1a2211e41cad20f60731249de0174f6",
        selected: "rockstargames-sites-gta-gen9ffa153ee7956b1766e65c6fbcedb9563",
        buyNowArea: "rockstargames-sites-gta-gen9b12dd0413eee1cad648d006aca06d858",
        topArea: "rockstargames-sites-gta-gen9ca61c1420b75faf8d3edc65b1c737f5e",
        btnArea: "rockstargames-sites-gta-gen9df5ebafc18cd32806cae851c9f6dec49",
        nextBtn: "rockstargames-sites-gta-gen9b7b5802c64ea1aad5e4c769bca1f5132",
        prevBtn: "rockstargames-sites-gta-gen9e31eb460f8d416b1d1e621eb14129b13",
        card: "rockstargames-sites-gta-gen9ad0ad646806352ae0a799fec0ba233b3",
        content: "rockstargames-sites-gta-gen9bda7a52557d65b5b77591cb72cd816cd",
        contentGrid: "rockstargames-sites-gta-gen9a39b9b077c1e79d0da875a297e83fdff",
        titleArea: "rockstargames-sites-gta-gen9d6a81af377181410bef0ef4cf3b35add",
        platforms: "rockstargames-sites-gta-gen9fcb7a2232b11627c161d301f7ff13d11",
        addedInfo: "rockstargames-sites-gta-gen9ecebdfbbb8664273e60cf5b0124abe06",
        ctaBtn: "rockstargames-sites-gta-gen9ddc663b4618b40b41a0448e187c8eeec",
        ctaBtnText: "rockstargames-sites-gta-gen9a4aaa62eabc82bb4cb94fd3d7ac7ffa5",
        closed: "rockstargames-sites-gta-gen9d0d5bbebcc175ad1df63c09efd45a148",
        linksArea: "rockstargames-sites-gta-gen9e189b898f0dd25d9af82c5b311dafb1f",
        closeBtn: "rockstargames-sites-gta-gen9e4a30069b67e78d17d8b259fd6fbebf9",
        linkList: "rockstargames-sites-gta-gen9b74531e8a5ef761ba8892f5b8f90c735",
        bottomText: "rockstargames-sites-gta-gen9c5ffa779bb09039356fe8883b4fcac22",
        imageGroup: "rockstargames-sites-gta-gen9e4ac1266f37004b14c4410e015e505d0",
        imgMobile: "rockstargames-sites-gta-gen9b0ed43ba8b973198107dd81517c432c5",
        imgDesktop: "rockstargames-sites-gta-gen9c3829d9fc2bc7587466bf64199ca83c9",
        responsiveImages: "rockstargames-sites-gta-gen9a7369afacbaea1cb98000a7ef486f54c",
        backgroundImage: "rockstargames-sites-gta-gen9d32ec6c5086cedcceae1d072aee4e056",
        foregroundImage: "rockstargames-sites-gta-gen9c08169fa5e30f0ab58d83b95b6547b50"
      };
      var f = t(76807),
        b = t(91029);
      const p = e => {
          let {
            className: a,
            images: t
          } = e;
          const s = (0, l.useGetCdnSource)(t?.mobile?.full_src ?? null),
            n = (0, l.useGetCdnSource)(t?.desktop?.full_src ?? s);
          return (0, b.jsxs)("div", {
            className: [a, u.responsiveImages].join(" "),
            children: [s ? (0, b.jsx)("div", {
              className: u.imgMobile,
              style: {
                background: `url(${s}) no-repeat center/cover`
              }
            }) : "", n ? (0, b.jsx)("div", {
              className: u.imgDesktop,
              style: {
                background: `url(${n}) no-repeat center/cover`
              }
            }) : ""]
          })
        },
        v = e => {
          let {
            addedInfo: a = null,
            buynowbtn: i = null,
            description: r = null,
            images: o,
            links: l = [],
            title: m = null
          } = e;
          const {
            track: v
          } = (0, c.useGtmTrack)(), [k, h] = (0, s.useState)(!1), x = (0, s.useRef)(null), y = {
            type: "spring",
            stiffness: 425,
            damping: 40
          }, j = {
            type: "spring",
            stiffness: 650,
            damping: 45
          }, _ = {
            ease: "easeOut",
            duration: .9,
            delay: .3
          }, N = {
            open: {
              opacity: 0,
              transition: {
                ease: "easeOut",
                duration: .3
              }
            },
            closed: {
              opacity: 1,
              transition: _
            }
          }, S = {
            open: {
              opacity: 1,
              display: "grid",
              height: "auto",
              transition: {
                opacity: _,
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
                height: j
              },
              transitionEnd: {
                display: "none"
              }
            }
          }, w = {
            open: {
              cursor: "default",
              "--cta-border-color": "var(--white-15)",
              "--cta-background-color": "rgba(255,255,255,.1)",
              "--cta-background-color-noBlur": "var(--black-100)",
              gridGap: "var(--grid-gap-sm)",
              transition: y,
              paddingBottom: "var(--card-padding)",
              "--btn-hover-bg-color": "rgba(255,255,255,.1)",
              "--btn-hover-bg-color-noBlur": "var(--black-100)",
              "--btn-hover-font-color": "none",
              "--btn-hover-border-color": "var(--white-15)"
            },
            closed: {
              "--cta-border-color": "var(--white-100)",
              "--cta-background-color": "inherit",
              "--cta-background-color-noBlur": "inherit",
              gridGap: 0,
              transition: j,
              transitionEnd: {
                "--btn-hover-bg-color": "inherit",
                "--btn-hover-bg-color-noBlur": "inherit",
                "--btn-hover-font-color": "inherit",
                "--btn-hover-border-color": "inherit"
              }
            }
          };
          return (0, b.jsx)(d.qr, {
            children: (0, b.jsxs)("div", {
              className: u.card,
              children: [(0, b.jsxs)("div", {
                className: u.imageGroup,
                children: [(0, b.jsx)(p, {
                  className: u.backgroundImage,
                  images: o?.background
                }), (0, b.jsx)(p, {
                  className: u.foregroundImage,
                  images: o?.foreground
                })]
              }), (0, b.jsxs)("div", {
                className: u.content,
                children: [(0, b.jsxs)(n.motion.div, {
                  className: u.contentGrid,
                  animate: k ? "open" : "closed",
                  variants: N,
                  children: [(0, b.jsxs)("div", {
                    className: u.titleArea,
                    children: [(0, b.jsx)("h2", {
                      dangerouslySetInnerHTML: {
                        __html: m
                      }
                    }), (0, b.jsx)("p", {
                      dangerouslySetInnerHTML: {
                        __html: r
                      }
                    })]
                  }), l.length ? (0, b.jsx)("div", {
                    className: u.platforms,
                    children: l.map(((e, a) => (0, b.jsx)("div", {
                      className: u[e.platform],
                      children: e.platform ? (0, b.jsx)("img", {
                        src: t(85394)(`./${e.platform}.svg`),
                        alt: `${"xboxone"===e.platform?"xbox one":e.platform}`
                      }) : ""
                    }, `${e.platform+a}`)))
                  }) : ""]
                }), a ? (0, b.jsx)(n.motion.p, {
                  className: u.addedInfo,
                  dangerouslySetInnerHTML: {
                    __html: a
                  },
                  animate: k ? "open" : "closed",
                  variants: N
                }) : "", i ? (0, b.jsxs)(n.motion.div, {
                  className: [u.ctaBtn, f.A.plusButton, k ? "" : u.closed].join(" "),
                  animate: k ? "open" : "closed",
                  variants: w,
                  initial: !1,
                  children: [(0, b.jsx)(n.motion.button, {
                    className: [u.ctaBtnText, f.A.btnText].join(" "),
                    animate: k ? "open" : "closed",
                    variants: {
                      open: {
                        pointerEvents: "none",
                        cursor: "default",
                        paddingTop: "var(--card-padding)",
                        paddingBottom: "0",
                        paddingLeft: "var(--card-padding)",
                        paddingRight: "var(--card-padding)"
                      },
                      closed: {
                        cursor: "pointer",
                        paddingTop: "var(--padding-sm)",
                        paddingBottom: "var(--padding-sm)",
                        paddingLeft: "var(--padding-md)",
                        paddingRight: "var(--padding-md)"
                      }
                    },
                    initial: !1,
                    onClick: () => {
                      v({
                        event: "select_platform",
                        text: "select platform",
                        element_placement: `buy now > ${m}`
                      }), h(!k)
                    },
                    onAnimationComplete: () => {
                      x?.current?.focus()
                    },
                    children: i
                  }), k && (0, b.jsx)("button", {
                    type: "button",
                    className: u.closeBtn,
                    onClick: () => {
                      v({
                        event: "cta_other",
                        text: "close",
                        element_placement: `buy now > ${m} > select platform`
                      }), h(!1)
                    },
                    "aria-hidden": !k,
                    ref: x,
                    children: (0, b.jsx)("img", {
                      src: t(70930),
                      alt: "Close menu button"
                    })
                  }), (0, b.jsx)(n.motion.div, {
                    className: [u.linksArea, k ? u.showLinks : ""].join(" "),
                    animate: k ? "open" : "closed",
                    variants: S,
                    initial: !1,
                    children: (0, b.jsx)("div", {
                      className: u.linkList,
                      children: l.length ? l.map(((e, a) => {
                        return (0, b.jsx)(g.A, {
                          type: "blackBtn",
                          size: "large",
                          img: t(85394)(`./${e.platform}.svg`),
                          consoleBtn: e.platform,
                          to: e.href,
                          altText: e?.altText,
                          onClick: (s = e.platform, n = e.href, () => {
                            v({
                              event: "cta_store_link",
                              text: s,
                              link_url: n,
                              element_placement: `buy now > ${m} > select platform`
                            })
                          }),
                          "aria-hidden": !k
                        }, `${e.platform+a}`);
                        var s, n
                      })) : ""
                    })
                  })]
                }) : ""]
              })]
            })
          })
        };
      v.displayName = "SwiperSlide";
      const k = {
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
        h = i.withFadeIn((0, r.A)((e => {
          let {
            cards: a = [],
            bottomText: t,
            topText: n,
            ...i
          } = e;
          const {
            track: r
          } = (0, c.useGtmTrack)(), {
            ref: l,
            inView: g
          } = (0, o.useInView)({
            threshold: .6
          }), [f, p] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            g && !f && (r({
              event: "page_section_impression",
              element_placement: i?._memoq?.topText?.toLowerCase()
            }), p(!0))
          }), [g]), (0, b.jsxs)("div", {
            className: u.buyNowArea,
            ref: l,
            children: [(0, b.jsxs)("div", {
              className: u.topArea,
              children: [n ? (0, b.jsx)("h2", {
                children: n
              }) : "", (0, b.jsxs)("div", {
                className: u.btnArea,
                children: [(0, b.jsx)("div", {
                  className: u.prevBtn
                }), (0, b.jsx)("div", {
                  className: u.nextBtn
                })]
              })]
            }), a?.length ? (0, b.jsx)(d.RC, {
              grabCursor: !0,
              navigation: {
                nextEl: `.${u.nextBtn}`,
                prevEl: `.${u.prevBtn}`
              },
              onSlideNextTransitionEnd: () => {
                r({
                  event: "carousel_next",
                  element_placement: n?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                r({
                  event: "carousel_previous",
                  element_placement: n?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                r({
                  event: "carousel_swipe",
                  element_placement: n?.toLowerCase() ?? ""
                })
              },
              modules: [m.Vx],
              breakpoints: k,
              children: a.map((e => (0, s.createElement)(v, {
                ...e,
                key: JSON.stringify(e)
              }))) ?? ""
            }) : "", t ? (0, b.jsx)("p", {
              className: u.bottomText,
              children: t
            }) : ""]
          })
        })))
    },
    66649: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(95966);
      var n = t(91029);
      const i = e => {
        let {
          disclaimer: a,
          text: t = null,
          title: i,
          className: r = "",
          style: c = {}
        } = e;
        const o = t ?? a?.text ?? null,
          l = i ? `<h5>${i}</h5>${o}` : o;
        return o ? (0, n.jsx)("div", {
          className: (0, s.classList)("rockstargames-sites-gta-gen9ea50fcaddd007d5cdd83d75dc493e28b", r),
          dangerouslySetInnerHTML: {
            __html: l
          },
          style: c
        }) : null
      }
    },
    98920: (e, a, t) => {
      "use strict";
      t.d(a, {
        Ay: () => b
      });
      var s = t(62229),
        n = t(56883),
        i = t(45505),
        r = t(2918),
        c = t(22738),
        o = t(15933),
        l = t(24036),
        d = t.n(l);
      const m = {
        pillBtn: "rockstargames-sites-gta-gen9f6996f4c3f7191c2ab9f2d8a7ac4d378",
        selected: "rockstargames-sites-gta-gen9a094d48286b9bf724d77a89550401953",
        faq: "rockstargames-sites-gta-gen9fe88e61686d4803b6c47536d34f1244e",
        faqArea: "rockstargames-sites-gta-gen9a52b40a67d08a800219e3f5240ddb18d",
        accordionRoot: "rockstargames-sites-gta-gen9ff4c276ff3fe3172dd6ce28527ff9b5d",
        accordionItem: "rockstargames-sites-gta-gen9cabc7dcd339f3f63c172cf5881ecca07",
        accordionTrigger: "rockstargames-sites-gta-gen9be1438706665e822882826c90033fd09",
        accordionContent: "rockstargames-sites-gta-gen9aeccf4ca42937ce2d8d76a76c9ebdc7a",
        slideDown: "rockstargames-sites-gta-gen9b4f19bd4c09e3ed85ea80968f28075ae",
        slideUp: "rockstargames-sites-gta-gen9ac7cf56e2d7d02e4555f2f9e3feb547e",
        accordionContentText: "rockstargames-sites-gta-gen9e09d630fa3fc716d9b3f34bbb6b7c6a9",
        accordionChevron: "rockstargames-sites-gta-gen9a81c4eaf24da2e2a56167e74d7dd2788",
        disclaimer: "rockstargames-sites-gta-gen9d2203c1c27236b40e99e957046216284",
        viewMoreContent: "rockstargames-sites-gta-gen9a9b36e5fbf98c429906018a41776b230",
        viewMore: "rockstargames-sites-gta-gen9d26903b16012ce40de048c5650eb2778"
      };
      var g = t(91029);
      const u = (0, s.forwardRef)(((e, a) => {
          let {
            children: t,
            className: s,
            ...i
          } = e;
          return (0, g.jsx)(o.Header, {
            className: m.accordionHeader,
            children: (0, g.jsxs)(o.Trigger, {
              ref: a,
              className: d()(m.accordionTrigger, s),
              ...i,
              children: [t, (0, g.jsx)(n.ChevronDownIcon, {
                className: m.accordionChevron,
                "aria-hidden": !0
              })]
            })
          })
        })),
        f = (0, s.forwardRef)(((e, a) => {
          let {
            children: t,
            className: s,
            ...n
          } = e;
          return (0, g.jsx)(o.Content, {
            className: d()(m.accordionContent, s),
            ...n,
            ref: a,
            children: (0, g.jsx)("div", {
              className: m.accordionContentText,
              children: t
            })
          })
        })),
        b = (0, i.A)((e => {
          let {
            buttonTxt: a,
            description: t,
            disclaimer: n,
            faqList: i = [],
            initialLength: l = 6,
            addedLength: d = 6,
            title: b,
            tinaModulesInfo: p
          } = e;
          const {
            track: v
          } = (0, r.useGtmTrack)(), [k, h] = (0, s.useState)(l), [x, y] = (0, s.useState)(void 0), [j, _] = (0, s.useState)(!1), N = (0, s.useRef)(null), S = (0, s.useRef)([]), {
            ref: w
          } = (0, c.useInView)({
            threshold: .6,
            triggerOnce: !0,
            onChange: e => {
              e && v({
                event: "page_section_impression",
                element_placement: "faqs"
              })
            }
          });
          return (0, s.useEffect)((() => {
            if (j) {
              const e = k - d;
              S.current[e] && S.current[e].focus(), _(!1)
            }
          }), [k]), (0, g.jsxs)("div", {
            ref: w,
            className: m.faq,
            children: [(0, g.jsxs)("div", {
              className: m.faqArea,
              children: [b && (0, g.jsxs)("div", {
                children: [(0, g.jsx)("h3", {
                  children: p?.[0]?.title ?? b
                }), (0, g.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: t
                  }
                })]
              }), (0, g.jsx)(o.Root, {
                className: m.accordionRoot,
                type: "single",
                collapsible: !0,
                value: x,
                onValueChange: e => {
                  let a = "",
                    t = null;
                  e ? (a = "cta_expand", t = parseInt(e, 10)) : (a = "cta_collapse", t = parseInt(x, 10)), v({
                    event: a,
                    text: `FAQ ${t}`,
                    position: t,
                    element_placement: "faqs"
                  }), y(e)
                },
                children: i.length ? i.slice(0, k).map(((e, a) => {
                  let {
                    question: t,
                    answer: s
                  } = e;
                  return (0, g.jsxs)(o.Item, {
                    className: m.accordionItem,
                    value: (a + 1).toString(),
                    children: [(0, g.jsx)(u, {
                      ref: e => S.current[a] = e,
                      children: t
                    }), (0, g.jsx)(f, {
                      children: (0, g.jsx)("p", {
                        dangerouslySetInnerHTML: {
                          __html: s
                        }
                      })
                    })]
                  }, a)
                })) : ""
              }), i.length > k && (0, g.jsx)("div", {
                className: m.viewMoreContent,
                children: (0, g.jsxs)("button", {
                  className: m.viewMore,
                  onClick: () => {
                    v({
                      event: "view_all",
                      text: "view more",
                      element_placement: "faqs"
                    }), h((e => e + d)), _(!0)
                  },
                  ref: N,
                  children: [(0, g.jsx)("span", {
                    children: a
                  }), (0, g.jsx)("img", {
                    src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd73beaf06cda8c7936703f23f90bd6f.svg",
                    alt: ""
                  })]
                })
              })]
            }), n && (0, g.jsx)("div", {
              className: m.disclaimer,
              dangerouslySetInnerHTML: {
                __html: n
              }
            })]
          })
        }))
    },
    44938: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => i
      });
      var s = t(60026);
      var n = t(91029);
      const i = e => {
        let {
          children: a,
          style: t
        } = e;
        return (0, n.jsx)(s.B, {
          children: (0, n.jsx)("div", {
            className: "rockstargames-sites-gta-gen9f98b9fd72a955107202bbabd74bd3b47",
            style: t,
            "data-type": "guide",
            children: (0, n.jsx)("div", {
              className: "rockstargames-sites-gta-gen9ec205c6bdb78dfec571c38eb7fa1bf7d",
              children: a
            })
          })
        })
      }
    },
    37885: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var s = t(62229),
        n = t(16188),
        i = t.n(n),
        r = t(12363),
        c = t(7578),
        o = t(88415),
        l = t(8458),
        d = t(2918);
      var m = t(91029);
      const g = e => {
          let {
            guide: a,
            parentTitle: t,
            index: s
          } = e;
          const {
            track: n
          } = (0, d.useGtmTrack)();
          let c = {
            hero: {}
          };
          i().cloneDeepWith(a, ((e, a) => {
            "images" === a && (c = e)
          }));
          const {
            src: o
          } = (0, l.S1)(c?.thumb ?? {});
          return (0, m.jsx)(r.A, {
            to: a.to,
            onClick: () => {
              n({
                event: "card_click",
                card_id: a.id,
                card_name: a.title.toLowerCase(),
                link_url: a.to,
                position: s,
                element_placement: t
              })
            },
            "aria-label": a.title,
            children: (0, m.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9be3c33ee48383e4d42e8166cff70d981",
              children: [(0, m.jsx)("div", {
                style: {
                  "--aspect-ratio": 1,
                  background: `url(${o?.mobile}) no-repeat center/cover`
                }
              }), (0, m.jsx)("h4", {
                children: a.title
              })]
            })
          })
        },
        u = e => {
          let {
            guides: a = {},
            tinaModulesInfo: t,
            title: n
          } = e;
          const r = i().map(a, "guide_id"),
            l = (0, o.X)({
              ids: r
            }),
            d = t?.[0]?.title ?? n,
            [u, f] = (0, s.useState)(null);
          return (0, s.useEffect)((() => {
            const e = l?.map(((e, a) => (0, m.jsx)(g, {
              guide: e,
              parentTitle: d,
              index: a
            }, e.id)));
            f(e)
          }), [l]), (0, m.jsx)(c.A, {
            size: "lg",
            slideChildren: u,
            title: d
          })
        }
    },
    52556: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(92440),
        n = t(9623),
        i = t(93335);
      var r = t(91029);
      const c = () => {
          const {
            guideId: e
          } = (0, n.useParams)(), a = (0, i.qj)(e, "<span></span>");
          return a ? (0, r.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e0c1980d28737900798ff21f14b0f211",
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
            mobile: i
          } = n;
          if (i) return (0, r.jsx)("div", {
            "aria-label": t,
            className: "rockstargames-sites-gta-gen9a1ce0dc6b03347ab2f672aa8af2fc31d",
            role: "img",
            style: {
              background: `url(${i}) no-repeat center/contain`
            }
          })
        },
        l = e => {
          let {
            blurb: a,
            hero: t,
            title: s
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [t ? (0, r.jsx)(o, {
              hero: t
            }) : "", (0, r.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9c248846cb1d6e783e8af7b9e4282325a",
              children: [(0, r.jsx)(c, {}), (0, r.jsx)("h1", {
                children: s
              }), a && (0, r.jsx)("span", {
                className: "rockstargames-sites-gta-gen9c521ae65eeab1356dbd0371d68019439",
                dangerouslySetInnerHTML: {
                  __html: a
                }
              })]
            })]
          })
        }
    },
    60861: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => k
      });
      var s = t(62229),
        n = t(9623),
        i = t(16188),
        r = t.n(i),
        c = t(35136),
        o = t(12363),
        l = t(2918),
        d = t(93335);
      const m = {
        pillBtn: "rockstargames-sites-gta-gen9aa77a5ebc89b1f82d5b2d2b285dbb5f9",
        selected: "rockstargames-sites-gta-gen9d90123bfede42f33615d4b38c7fa4bd5",
        guideNav: "rockstargames-sites-gta-gen9df1f6e9822c286cb164d47ff7eaedf07",
        headerHidden: "rockstargames-sites-gta-gen9baf6b529fe7eee619ab1e3f09b328245",
        guideList: "rockstargames-sites-gta-gen9ca8f0699653b08699348f5bef86c240c",
        activeSection: "rockstargames-sites-gta-gen9e66ed2c434929d07a41d7019123da090",
        guideLinkCurrent: "rockstargames-sites-gta-gen9edcad0840b5bebf39b5304ec183f70a2",
        guide: "rockstargames-sites-gta-gen9b6f1057e3bd5c447f72a0f00fa9632bc",
        sections: "rockstargames-sites-gta-gen9a02853141523b5f14a0ed182d7908a21"
      };
      var g = t(91029);
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
            query: i
          } = e;
          const {
            track: r
          } = (0, l.useGtmTrack)(), [c, u] = (0, s.useState)(n === i), {
            state: f
          } = (0, d.E_)(), {
            activeSection: b
          } = f;
          return (0, s.useEffect)((() => u(i !== b ? b === n : i === n)), [b]), (0, g.jsx)(o.A, {
            to: a,
            className: c ? m.activeSection : "",
            onClick: () => {
              r({
                event: "nav_click",
                element_placement: "guide nav"
              })
            },
            children: t
          }, a)
        },
        p = e => {
          let {
            sections: a
          } = e;
          const [t] = (0, n.useSearchParams)();
          return (0, g.jsx)("div", {
            className: m.sections,
            children: a?.map(((e, a) => {
              let {
                id_hash: s,
                title: n,
                to: i
              } = e;
              return (0, g.jsx)(b, {
                id_hash: s,
                query: t,
                title: n,
                to: i
              }, a)
            }))
          })
        },
        v = e => {
          let {
            currentId: a,
            group: t
          } = e;
          const [n, i] = (0, s.useState)(null), [l, b] = (0, s.useState)(null), {
            state: v
          } = (0, d.E_)(), {
            activeSection: k
          } = v;
          return (0, s.useEffect)((() => {
            const e = r().findIndex(t?.children, (e => {
              let {
                id_hash: t
              } = e;
              return t === a
            }));
            b(e), i(-1 !== e)
          }), [a, k, t]), (0, g.jsxs)("div", {
            className: m.guideList,
            children: [(0, g.jsx)("button", {
              type: "button",
              onClick: () => i(!n),
              children: t.title
            }), (0, g.jsx)(c.motion.nav, {
              animate: n ? "open" : "closed",
              variants: f,
              transition: u,
              children: t?.children?.map(((e, t) => {
                let {
                  children: s,
                  id_hash: n,
                  title: i,
                  to: r
                } = e;
                return (0, g.jsxs)("div", {
                  className: m.guide,
                  children: [(0, g.jsx)(o.A, {
                    className: [m.guideLink, a === n ? m.guideLinkCurrent : ""].join(" "),
                    to: r,
                    children: i
                  }), t === l && s?.length ? (0, g.jsx)(p, {
                    sections: s
                  }) : ""]
                }, i)
              }))
            })]
          })
        },
        k = e => {
          let {
            currentId: a
          } = e;
          const t = (0, d.hY)(),
            {
              state: {
                headerHeight: s,
                headerHidden: n
              }
            } = (0, d.E_)();
          return (0, g.jsx)("div", {
            className: [m.guideNav, n ? m.headerHidden : ""].join(" "),
            style: {
              "--header-height": `${s}px`
            },
            children: t?.map((e => (0, g.jsx)(v, {
              currentId: a,
              group: e
            }, e.id_hash)))
          })
        }
    },
    96265: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(62229),
        n = t(22738),
        i = t(93335);
      var r = t(91029);
      const c = e => {
        let {
          style: a,
          children: t,
          __anchor: c = null
        } = e;
        const {
          announcePresence: o
        } = (0, i.Yh)(), {
          ref: l,
          inView: d
        } = (0, n.useInView)({
          rootMargin: "0px 0px -700px 0px",
          threshold: 0,
          delay: 850
        });
        return (0, s.useEffect)((() => {
          o(c)
        }), [c]), (0, s.useEffect)((() => {
          d && o(c)
        }), [d]), (0, r.jsx)("span", {
          style: a,
          className: "rockstargames-sites-gta-gen9e2fa43158653af56030934673d242e25",
          name: c,
          ref: l,
          children: t
        })
      }
    },
    99183: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var s = t(62229),
        n = t(41638),
        i = t(92440),
        r = t(95966),
        c = t(2918),
        o = t(22738),
        l = t(22881),
        d = t(54360),
        m = t(66649);
      var g = t(91029);
      const u = n.withFadeIn((e => {
        let {
          brands: a = [],
          content: t,
          ctas: n = [],
          disclaimer: u,
          image: f,
          large: b = !1,
          title: p,
          image_on_right: v = !1,
          style: k = {},
          className: h = "",
          ...x
        } = e;
        const {
          track: y
        } = (0, c.useGtmTrack)(), {
          ref: j,
          inView: _
        } = (0, o.useInView)({
          threshold: .6
        }), [N, S] = (0, s.useState)(!1), w = (0, i.useGetCdnSource)(f?.full_src ?? null) ?? null;
        return (0, s.useEffect)((() => {
          _ && !N && (y({
            event: "page_section_impression",
            element_placement: x?._memoq?.title?.toLowerCase()
          }), S(!0))
        }), [_]), (0, g.jsxs)("div", {
          className: (0, r.classList)("rockstargames-sites-gta-gen9b09712e85b51f933525d87904ebf185e", b ? "rockstargames-sites-gta-gen9f5c869e4888e96b514f87807325e7406" : "", v ? "rockstargames-sites-gta-gen9e51e69f0d127f928e3d110181772bfd3" : "", w ? "" : "rockstargames-sites-gta-gen9dbc2e238c4fb4c3263efcc2f5dc091fa", h),
          style: k,
          ref: j,
          children: [w ? (0, g.jsx)("div", {
            className: "rockstargames-sites-gta-gen9df7cc2db44ca7c6cff22b7fb452352dc",
            style: {
              background: `url(${w}) no-repeat center/cover`
            }
          }) : "", (0, g.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9a95bcbbeab940098ba29db3fb16c5efb",
            children: [(0, g.jsx)(d.A, {
              brands: a
            }), (0, g.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9f311b2fc36099e756cef43769555fe37",
              children: [(0, g.jsx)("h2", {
                className: "rockstargames-sites-gta-gen9e459e77309d23d24c3d27b8b9def51cd",
                children: p
              }), t ? (0, g.jsx)("div", {
                className: "rockstargames-sites-gta-gen9c38707849c98f1402c294212a6d60bf8",
                dangerouslySetInnerHTML: {
                  __html: t
                }
              }) : ""]
            }), (0, g.jsx)(l.A, {
              ctas: n
            }), (0, g.jsx)(m.A, {
              disclaimer: u
            })]
          })]
        })
      }))
    },
    52674: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(92440),
        n = t(95966),
        i = t(99183);
      const r = {
        pillBtn: "rockstargames-sites-gta-gen9d051bf4df024b07268d4435f76e4c05b",
        selected: "rockstargames-sites-gta-gen9d477d8e21699718c3b861f3215ee7d3c",
        imageTextGroupGroup: "rockstargames-sites-gta-gen9f22a5b5471bded3e25267063bb4acd13",
        bg: "rockstargames-sites-gta-gen9fe31091801f368e4eeb6684e524eed32",
        bgMobile: "rockstargames-sites-gta-gen9c6d304e39f531af3c0f1298edb0530d8",
        bgDesktop: "rockstargames-sites-gta-gen9b9ebdf005a46f0e015fa89c970a2b202"
      };
      var c = t(91029),
        o = t(62229);
      const l = e => {
        let {
          bg: a,
          image_text_groups: t = [],
          style: l = {},
          className: d = ""
        } = e;
        const m = (0, s.useGetCdnSource)(a?.image?.mobile?.full_src ?? null),
          g = (0, s.useGetCdnSource)(a?.image?.desktop?.full_src ?? null) ?? m;
        return t.length ? (0, c.jsxs)("div", {
          className: (0, n.classList)(r.imageTextGroupGroup, d),
          style: l,
          children: [m ? (0, c.jsx)("div", {
            className: [r.bgMobile, r.bg].join(" "),
            style: {
              background: `url(${m}) no-repeat center/cover`
            }
          }) : "", g ? (0, c.jsx)("div", {
            className: [r.bgDesktop, r.bg].join(" "),
            style: {
              background: `url(${g}) no-repeat center/cover`
            }
          }) : "", t.map(((e, a) => (0, o.createElement)(i.A, {
            ...e,
            key: a
          })))]
        }) : null
      }
    },
    78805: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => c
      });
      var s = t(12363),
        n = t(95966);
      const i = {
        pillBtn: "rockstargames-sites-gta-gen9c5a05e60c5daa6250d9022bc30a0ffd9",
        selected: "rockstargames-sites-gta-gen9c6e5b27a17c6f72f82ccac3a6349ecda",
        linkoutSection: "rockstargames-sites-gta-gen9c0189aa00161ef858fc360d8a3ee31c4",
        cta: "rockstargames-sites-gta-gen9c0247664a3a72139c46a532fa45f0b2f"
      };
      var r = t(91029);
      const c = e => {
        let {
          text: a,
          cta: c,
          to: o,
          className: l = "",
          style: d = {}
        } = e;
        return (0, r.jsxs)(s.A, {
          className: (0, n.classList)(i.linkoutSection, l),
          to: o,
          style: d,
          children: [a && (0, r.jsx)("div", {
            className: i.text,
            children: a
          }), c && (0, r.jsxs)("div", {
            className: i.cta,
            children: [c, " ", (0, r.jsx)("img", {
              src: t(81018)
            })]
          })]
        })
      }
    },
    48967: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(62229);
      var n = t(95966),
        i = t(91029);
      const r = e => {
        let {
          children: a,
          style: t,
          theme: r
        } = e;
        const [c, o] = (0, s.useState)(r);
        return (0, s.useEffect)((() => {
          r && o(r)
        }), [r]), (0, i.jsx)("div", {
          className: "rockstargames-sites-gta-gen9bdd63bd70824357b0aedc604c0fe628d",
          style: (0, n.safeStyles)(t),
          "data-theme": c,
          children: a
        })
      }
    },
    20451: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(31879),
        n = t.n(s);
      var i = t(91029);
      const r = e => {
        let {
          id: a
        } = e;
        return (0, i.jsx)("div", {
          className: "rockstargames-sites-gta-gen9ded9c0fd97227bbcd0fa5f6428ef97cb",
          children: (0, i.jsx)(n(), {
            autoplay: !0,
            context: "embed",
            id: a,
            endBehavior: "stillframe",
            wrapper: !1,
            titleCrop: "2rem"
          })
        })
      }
    },
    70192: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        BrandMessage: () => i,
        BuyNow: () => r.A,
        ClaimCountdown: () => o,
        CommunityChallenges: () => d(),
        Disclaimer: () => g.A,
        DiscoverCallout: () => m.A,
        ElevatorPitch: () => L,
        FAQ: () => u.Ay,
        Guide: () => f.A,
        GuideGroup: () => b.A,
        GuideIntro: () => p.A,
        GuideNavDesktop: () => v.A,
        GuideSection: () => k.A,
        Hero: () => T,
        HeroVideo: () => P.default,
        ImageTextGroup: () => se.A,
        ImageTextGroupGroup: () => ne.A,
        LinkoutSection: () => ie.A,
        Logo: () => ce,
        SectionTitle: () => oe,
        StickyColumn: () => W,
        Summary: () => Y,
        SummaryCard: () => Q,
        Tile: () => J,
        TinaWrapper: () => le.A,
        TitleImage: () => D,
        ValueProp: () => te,
        VideoPlayerWrapper: () => de.A
      });
      var s = t(54360);
      var n = t(91029);
      const i = e => {
        let {
          brand: a,
          headline_left: t,
          headline_right: i,
          info: r
        } = e;
        return (0, n.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9d21f3c9d6952c874ebdfb8c59fccf4c4",
          children: [(0, n.jsx)(s.A, {
            brands: [{
              brand: a
            }]
          }), (0, n.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9d723a3483ffbe40280b0faa62d665775",
            children: [(0, n.jsxs)("h2", {
              children: [t, " ", (0, n.jsx)("span", {
                children: i
              })]
            }), (0, n.jsx)("p", {
              children: r
            })]
          })]
        })
      };
      var r = t(37242),
        c = t(62229);
      const o = e => {
        let {
          left: a,
          right: t
        } = e;
        const [s, i] = (0, c.useState)(""), [r, o] = (0, c.useState)(!1);
        return (0, n.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9d4cf2b6544a73290a36c0d5978306345",
          children: [(0, n.jsxs)("h2", {
            "aria-hidden": r,
            onMouseOver: () => {
              o(!0), i(`${a} ${t}`)
            },
            onMouseOut: () => {
              o(!1), i("")
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
            className: "rockstargames-sites-gta-gen9d409f137f998638736d516816d888018",
            children: s
          })]
        })
      };
      var l = t(5162),
        d = t.n(l),
        m = t(49284),
        g = t(66649),
        u = t(98920),
        f = t(44938),
        b = t(37885),
        p = t(52556),
        v = t(60861),
        k = t(96265),
        h = t(7578),
        x = t(56666),
        y = t(35136),
        j = t(92440),
        _ = t(95966),
        N = t(22881);
      const S = {
          pillBtn: "rockstargames-sites-gta-gen9f8fcdee83ef906b0f73b6019eb716dd5",
          selected: "rockstargames-sites-gta-gen9bcd79ce88b14ac303755975890cba503",
          hero: "rockstargames-sites-gta-gen9b2ba83d95e58e4e8ee5db947901752d6",
          images: "rockstargames-sites-gta-gen9ec42922139eb8af3babbed410b5c0985",
          background: "rockstargames-sites-gta-gen9b6a24a872b9dcca29c2421e6abe261a7",
          gradient: "rockstargames-sites-gta-gen9caf8df2a786db534f194eafe8e8869f4",
          layered: "rockstargames-sites-gta-gen9eccf2d8a9d0ec4cf6c087231ae7a0d7f",
          content: "rockstargames-sites-gta-gen9cdcca1527294056f1f6bed47b5e496cf",
          descriptions: "rockstargames-sites-gta-gen9e24370ef2696c6b295c2c8e1a32fd937",
          buttonGroup: "rockstargames-sites-gta-gen9aeb3db441fb9d0e5e56872ef4c76e135",
          legalText: "rockstargames-sites-gta-gen9d2b6a425930fddaf41a3062887bda824",
          shardsCarousel: "rockstargames-sites-gta-gen9c75e522b68f2112d11ece94bb89f2d26"
        },
        w = e => {
          let {
            title: a = "",
            mobileImg: t,
            desktopImg: s
          } = e;
          const i = (0, j.useGetCdnSource)(t ?? null),
            r = (0, j.useGetCdnSource)(s ?? i);
          return (0, n.jsx)("div", {
            className: S.shard,
            style: {
              "--background-image-mobile": `url(${i})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, n.jsx)("h5", {
              children: a
            })
          })
        },
        C = e => {
          let {
            title: a = "Membership Rewards",
            shards: t
          } = e;
          const [s, i] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            t && i(t.map((e => {
              if (!e?.shardImg) return;
              const {
                title: a,
                shardImg: t
              } = e, {
                mobile: s,
                desktop: i
              } = t;
              return (0, n.jsx)(w, {
                title: a,
                mobileImg: s?.full_src,
                desktopImg: i?.full_src
              }, a)
            })))
          }), [t]), s ? (0, n.jsx)("div", {
            className: S.shardsCarousel,
            children: (0, n.jsx)(h.A, {
              title: a,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        T = e => {
          let {
            brands: a = [],
            backgroundImg: t,
            layeredImg: i,
            ctas: r = [],
            expandingButtonLabel: c = "Subscribe",
            platformsAndLinks: o = [],
            description: l,
            title: d,
            legalText: m,
            shardsSection: g = {},
            className: u
          } = e;
          const f = (0, j.useGetCdnSource)(t?.mobile?.full_src ?? null),
            b = (0, j.useGetCdnSource)(t?.desktop?.full_src ?? f),
            p = (0, j.useGetCdnSource)(i?.mobile?.full_src ?? null),
            v = (0, j.useGetCdnSource)(i?.desktop?.full_src ?? p),
            k = {
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
            h = {
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
          return (0, n.jsxs)(y.motion.div, {
            className: (0, _.classList)(S.hero, u),
            style: {
              "--background-image-desktop": `url(${b})`,
              "--background-image-mobile": `url(${f})`,
              "--layered-image-desktop": `url(${v})`,
              "--layered-image-mobile": `url(${p})`
            },
            initial: "hidden",
            animate: "visible",
            variants: k,
            children: [(0, n.jsxs)("div", {
              "data-testid": "hero",
              className: S.images,
              children: [b && f ? (0, n.jsx)("div", {
                className: S.background,
                style: t?.style ?? {}
              }) : "", p && v ? (0, n.jsx)("div", {
                className: S.layered
              }) : "", (0, n.jsx)("div", {
                className: S.gradient
              })]
            }), (0, n.jsxs)(y.motion.div, {
              className: S.content,
              initial: "hidden",
              animate: "visible",
              variants: k,
              children: [(0, n.jsx)(y.motion.div, {
                variants: h,
                children: (0, n.jsx)(s.A, {
                  brands: a
                })
              }), o.length ? (0, n.jsx)(y.motion.div, {
                variants: h,
                children: (0, n.jsx)(x.A, {
                  buttonText: c,
                  platformsAndLinks: o,
                  children: (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(y.motion.div, {
                      className: S.descriptions,
                      variants: h,
                      children: [(0, n.jsx)("h1", {
                        dangerouslySetInnerHTML: {
                          __html: d
                        }
                      }), (0, n.jsx)("p", {
                        dangerouslySetInnerHTML: {
                          __html: l
                        }
                      })]
                    }), r.length > 0 && (0, n.jsx)(y.motion.div, {
                      variants: h,
                      children: (0, n.jsx)(N.A, {
                        buttons: r,
                        className: S.buttonGroup
                      })
                    })]
                  })
                })
              }) : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsxs)(y.motion.div, {
                  className: S.descriptions,
                  variants: h,
                  children: [(0, n.jsx)("h1", {
                    dangerouslySetInnerHTML: {
                      __html: d
                    }
                  }), (0, n.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: l
                    }
                  })]
                }), r.length > 0 && (0, n.jsx)(y.motion.div, {
                  variants: h,
                  children: (0, n.jsx)(N.A, {
                    buttons: r,
                    className: S.buttonGroup
                  })
                })]
              }), m && (0, n.jsx)(y.motion.div, {
                className: S.legalText,
                variants: h,
                children: (0, n.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: m
                  }
                })
              })]
            }), g?.shards && (0, n.jsx)(C, {
              ...g
            })]
          })
        };
      var I = t(26878),
        A = t(79512),
        B = t(81788),
        M = t(61051);
      const V = (0, B.defineMessages)({
          elevator_pitch_link_console_account: {
            id: "elevator_pitch_link_console_account",
            defaultMessage: "Join Now"
          },
          elevator_pitch_member_benefit_label: {
            id: "elevator_pitch_member_benefit_label",
            defaultMessage: "Member Benefits"
          },
          elevator_pitch_available_on: {
            id: "elevator_pitch_available_on",
            defaultMessage: "Only available on"
          },
          elevator_pitch_available_on_ps5: {
            id: "elevator_pitch_available_on_ps5",
            defaultMessage: "PlayStation5"
          },
          elevator_pitch_available_on_xbox: {
            id: "elevator_pitch_available_on_xbox",
            defaultMessage: "Xbox Series X|S"
          },
          elevator_pitch_available_on_pc: {
            id: "elevator_pitch_available_on_pc",
            defaultMessage: "PC"
          }
        }),
        E = {
          pillBtn: "rockstargames-sites-gta-gen9f15dc7913c94ea4e398f088bbc03d15b",
          selected: "rockstargames-sites-gta-gen9f922b6fe161b6643bd6187741167c0bd",
          elevatorPitch: "rockstargames-sites-gta-gen9fd513cc9af6a88e972723736ef93f309",
          pitch: "rockstargames-sites-gta-gen9f0bb897d6f7c86814c51f8eb1ffe6180",
          title: "rockstargames-sites-gta-gen9f618930e007937580dd35c92daa718c7",
          description: "rockstargames-sites-gta-gen9d575caf276ffc565a582234883a22fba",
          ctaLinksContainer: "rockstargames-sites-gta-gen9cdf9ce1e4b24a6540b83c9cd42505afd",
          ctaLinks: "rockstargames-sites-gta-gen9a801bf5e3d5213212fe0e1264294968d",
          linkAccountButton: "rockstargames-sites-gta-gen9bdb769082c100b8d37e37ca7634eb68f",
          elevatorPitchBtn: "rockstargames-sites-gta-gen9ea94a548f3be7c6be018fa5e62c65287",
          unexpandedButton: "rockstargames-sites-gta-gen9e5c4359b73f73c8a3ad7548a7ea472cf",
          buttonGroup: "rockstargames-sites-gta-gen9abe920c537da9aaa8a38353cae9cd093",
          primaryBtn: "rockstargames-sites-gta-gen9cc051ed56e6be4c08ee1d979b9d7c304",
          secondaryBtn: "rockstargames-sites-gta-gen9cbf9ba643d59f5ef26cd1e9261992aa5",
          btnText: "rockstargames-sites-gta-gen9a48e1ee8d3e12b36e5469bd8b24bb342",
          text: "rockstargames-sites-gta-gen9ef5cd6ccfa26e83f3b9f7ebd57a006b8",
          platformGroup: "rockstargames-sites-gta-gen9fa05409f0a6a3600d949d0952ddcbdec",
          platforms: "rockstargames-sites-gta-gen9e1fbcf677768ab9422c80de67e3ad23b",
          disclaimer: "rockstargames-sites-gta-gen9e2c438b9e54b2e4c4e5213fa1d49cbfc"
        },
        L = e => {
          let {
            title: a,
            description: t,
            disclaimer: s,
            cta: i
          } = e;
          const {
            formatMessage: r
          } = (0, B.useIntl)();
          return (0, n.jsxs)("div", {
            className: E.elevatorPitch,
            "data-testid": "elevator-pitch",
            children: [(0, n.jsxs)("div", {
              className: E.pitch,
              children: [(0, n.jsx)("h2", {
                className: E.title,
                children: a
              }), (0, n.jsx)("p", {
                className: E.description,
                children: t
              })]
            }), (0, n.jsxs)("div", {
              className: E.ctaLinksContainer,
              children: [(0, n.jsxs)("div", {
                className: E.ctaLinks,
                children: [(0, n.jsx)("div", {
                  className: E.buttonGroup,
                  children: i && (0, n.jsx)(j.TinaParser, {
                    components: {
                      Cta: I.A,
                      ExpandingPlatformButton: x.A,
                      Gen9Button: A.A
                    },
                    tina: {
                      payload: {
                        content: i
                      }
                    }
                  })
                }), (0, n.jsxs)("div", {
                  className: E.platformGroup,
                  children: [(0, n.jsx)("div", {
                    className: E.text,
                    children: (0, n.jsx)(B.FormattedMessage, {
                      ...V.elevator_pitch_available_on
                    })
                  }), (0, n.jsxs)("div", {
                    className: E.platforms,
                    children: [(0, n.jsx)("img", {
                      className: E.platformIcon,
                      src: (0, M.A)("ps5") || "",
                      alt: r(V.elevator_pitch_available_on_ps5)
                    }), (0, n.jsx)("img", {
                      className: E.platformIcon,
                      src: (0, M.A)("xboxseriesxs") || "",
                      alt: r(V.elevator_pitch_available_on_xbox)
                    }), (0, n.jsx)("img", {
                      className: E.platformIcon,
                      src: (0, M.A)("pcalt") || "",
                      alt: r(V.elevator_pitch_available_on_pc)
                    })]
                  })]
                })]
              }), s && (0, n.jsx)("div", {
                className: E.disclaimer,
                children: (0, n.jsx)("p", {
                  children: s
                })
              })]
            })]
          })
        };
      var P = t(52581),
        R = t(59535),
        F = t(24036),
        G = t.n(F);
      const D = e => {
        let {
          imageSrc: a,
          imgTitle: t,
          description: s,
          cta: i
        } = e;
        const r = (0, j.useGetCdnSource)(a) ?? null,
          {
            isTablet: o
          } = (0, _.useWindowResize)(),
          [l, d] = (0, c.useState)(0);
        return (0, c.useEffect)((() => {
          d(o ? .5 * window.innerHeight : .25 * window.innerHeight)
        }), [o, window.innerHeight]), (0, n.jsxs)("figure", {
          className: "rockstargames-sites-gta-gen9da9cf7137b4554af52a7376b73f95862",
          children: [(0, n.jsx)("div", {
            className: "rockstargames-sites-gta-gen9dac75c91cfffebce99e959a7ff449c0b",
            style: {
              "--background-image": `url(${r})`
            },
            children: (0, n.jsx)("span", {
              className: G()("rockstargames-sites-gta-gen9d78d21271d0368e3cb992e18424ce364", "rockstargames-sites-gta-gen9eaac6b80bfbb8510c8d196db8dab1f2b"),
              children: (0, n.jsx)(R.A, {
                mode: "multi",
                className: "rockstargames-sites-gta-gen9f290924e1a03efbb505d8c6febcbf732",
                forceSingleModeWidth: !0,
                max: l,
                children: (0, n.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9ac5bf2f3514347bbf41536621f9ee6ea",
                  dangerouslySetInnerHTML: t ? {
                    __html: t
                  } : void 0
                })
              })
            })
          }), (0, n.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9f234ffc786a24e0aa0639fe21c7c62e9",
            children: [s && (0, n.jsx)("p", {
              className: "rockstargames-sites-gta-gen9d98ba885b836b9e46851139e2d002223",
              children: s
            }), i && (0, n.jsx)("div", {
              className: "rockstargames-sites-gta-gen9cc90f09a8f9111ac26c5b02800b0f50d",
              children: (0, n.jsx)(j.TinaParser, {
                components: {
                  Cta: I.A,
                  ExpandingPlatformButton: x.A
                },
                tina: {
                  payload: {
                    content: i
                  }
                }
              })
            })]
          })]
        })
      };
      var $ = t(44549),
        H = t(2918),
        O = t(22738);
      const z = {
          pillBtn: "rockstargames-sites-gta-gen9f77482349780a53d7275882506f3ac08",
          selected: "rockstargames-sites-gta-gen9c6936d8eaa450f600430217c2d7ad0d0",
          gridLayout: "rockstargames-sites-gta-gen9abd3a002d12c82304f1a16828d437d2d",
          leftColumn: "rockstargames-sites-gta-gen9bf750e5ac4ef4fcf0adea8d9c120912b",
          rightColumn: "rockstargames-sites-gta-gen9ba7a36b77781558b65eb7017d6135313",
          stickyBlock: "rockstargames-sites-gta-gen9e33eb2f23d42103d1f82d95db615109f",
          shadow: "rockstargames-sites-gta-gen9d581bd44cf40ff5de24b09f1ac44fad8"
        },
        q = e => {
          const [a, t] = (0, c.useState)(void 0);
          return (0, c.useEffect)((() => {
            t(!!e)
          }), [e]), a
        },
        W = e => {
          let {
            title: a,
            leftColumn: t,
            rightColumn: s,
            disableStickyOnDesktop: i,
            disableStickyOnMobile: r,
            id: o = ""
          } = e;
          const {
            track: l
          } = (0, H.useGtmTrack)(), {
            isTablet: d
          } = (0, _.useWindowResize)(), {
            ref: m
          } = (0, O.useInView)({
            threshold: .6,
            triggerOnce: !0,
            onChange: e => {
              e && l({
                event: "page_section_impression",
                element_placement: a?.toLowerCase()
              })
            }
          }), g = (0, c.useRef)(null), u = (0, c.useRef)(null), f = q(i), b = q(r), p = (0, j.useTinaComponents)(), v = (0, c.useMemo)((() => ({
            ...p,
            HTMLElement
          })), [p]);
          return ((e, a, t) => {
            const s = (0, c.useCallback)((() => {
              if (e && a.current && t.current) {
                const e = a.current.getBoundingClientRect().bottom,
                  s = t.current.getBoundingClientRect().top;
                t.current.style.marginTop = s <= e ? "" + (e - s) : "0"
              }
            }), [e, a, t]);
            (0, c.useEffect)((() => (window.addEventListener("scroll", s), window.addEventListener("resize", s), () => {
              window.removeEventListener("scroll", s), window.removeEventListener("resize", s)
            })), [s])
          })(d, g, u), (0, n.jsx)($.A, {
            thresholds: [.5, 1],
            onThresholdReached: e => {
              l({
                event: "page_section_scroll",
                element_placement: a?.toLowerCase(),
                scroll_depth: 100 * e + "%"
              })
            },
            children: (0, n.jsxs)("div", {
              className: G()(z.gridLayout),
              id: o,
              children: [(0, n.jsx)("div", {
                ref: g,
                className: z.leftColumn,
                style: {
                  "--desktop-position": f ? "relative" : "sticky",
                  "--mobile-position": b ? "relative" : "sticky"
                },
                children: (0, n.jsx)("div", {
                  ref: m,
                  className: z.stickyBlock,
                  children: t && (0, n.jsx)(j.TinaParser, {
                    components: v,
                    tina: {
                      payload: {
                        content: t
                      }
                    }
                  })
                })
              }), (0, n.jsx)("div", {
                ref: u,
                className: G()(z.rightColumn, d ? z.shadow : null, z.borderGrey),
                children: s && (0, n.jsx)(j.TinaParser, {
                  components: v,
                  tina: {
                    payload: {
                      content: s
                    }
                  }
                })
              })]
            })
          })
        };
      var X = t(24069);
      const U = {
          pillBtn: "rockstargames-sites-gta-gen9d2ddae0a995ad44289d2241ff9e30894",
          selected: "rockstargames-sites-gta-gen9df0a538b69dc0efa837e83454b438455",
          summaryBenefits: "rockstargames-sites-gta-gen9cc53a5d0b0b5a8f7aec586c7dcb0ebe8",
          summaryContent: "rockstargames-sites-gta-gen9a9b923feebb7047e79194478184e82b9",
          titleHeading: "rockstargames-sites-gta-gen9e08e0549551793e2a2770450f25c4b8d",
          benefitsWrapper: "rockstargames-sites-gta-gen9b9539a1e050b68a2244211811661ecef",
          benefitsGroup: "rockstargames-sites-gta-gen9a88643cacc40499dd691cc923172eb81",
          heading: "rockstargames-sites-gta-gen9d88696b727ef1969236c84f9812c872e",
          benefitsContent: "rockstargames-sites-gta-gen9ddd53cff975d47544bde967e76d3b836",
          title: "rockstargames-sites-gta-gen9be825d3a95aaed519872e47144792232",
          description: "rockstargames-sites-gta-gen9f2c9a205fc4aaa2b53af1a3fbe5e7939"
        },
        Y = e => {
          let {
            benefits: a
          } = e;
          return a?.length ? (0, n.jsx)("section", {
            className: G()(U.scrollableBlock, U.benefitsWrapper),
            children: (0, n.jsx)("div", {
              className: U.benefitsGroup,
              children: a.map((e => (0, n.jsxs)("div", {
                className: U.benefitsContent,
                children: [(0, n.jsx)("h3", {
                  className: U.heading,
                  children: e.title
                }), (0, n.jsx)(X.A, {
                  columns: e.columns ?? null,
                  noImg: !0,
                  list: e.list
                })]
              }, e.title)))
            })
          }) : null
        },
        Q = e => {
          let {
            title: a,
            description: t,
            imgSrc: s,
            cta: i
          } = e;
          const r = (0, j.useGetCdnSource)(s?.mobile),
            c = (0, j.useGetCdnSource)(s?.desktop) || r;
          return (0, n.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9f5c2b4f08055afcd61341203c35ce5cc",
            role: "article",
            children: [(0, n.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9c5aed97481686103bcd6dd9233b232b8",
              children: [(0, n.jsxs)("header", {
                className: "rockstargames-sites-gta-gen9f3656c1e04b56ff20d3eef229d4d0241",
                children: [a && (0, n.jsx)("h2", {
                  className: "rockstargames-sites-gta-gen9d8afc706fb49b6338cb7cf29b8e3caf6",
                  children: a
                }), t && (0, n.jsx)("p", {
                  className: "rockstargames-sites-gta-gen9ba52cdd62b667ad47773b106c3c61cc0",
                  children: t
                })]
              }), i && (0, n.jsx)("div", {
                className: "rockstargames-sites-gta-gen9c805527c48a7bc06e6cd0b7b852c21c7",
                children: (0, n.jsx)(j.TinaParser, {
                  components: {
                    Cta: I.A,
                    ExpandingPlatformButton: x.A,
                    Gen9Button: A.A
                  },
                  tina: {
                    payload: {
                      content: i
                    }
                  }
                })
              })]
            }), s && (0, n.jsx)("div", {
              className: "rockstargames-sites-gta-gen9ffc2fea677e762c4d129fdf2455458b0",
              children: (0, n.jsx)("img", {
                src: c,
                alt: a
              })
            })]
          })
        },
        K = {
          pillBtn: "rockstargames-sites-gta-gen9ccbeeaf2adb368ba639f6cf57439c93c",
          selected: "rockstargames-sites-gta-gen9e78c91f6d4f5b4795c02540af8f24464",
          tile: "rockstargames-sites-gta-gen9a55121701981a0fa5d48172268c48e15",
          fullBleed: "rockstargames-sites-gta-gen9fe35d4b3501cddd0a7f8bc53b458d8d0",
          tile__image: "rockstargames-sites-gta-gen9bcc24445ba035f3331f4305d4b95a2d0",
          tile__content: "rockstargames-sites-gta-gen9a9d7d7cb57c3428c037aba5371209bbd",
          tile__title: "rockstargames-sites-gta-gen9dc139eed59a46cb43994bd9ab230b1b9",
          tile__description: "rockstargames-sites-gta-gen9d0b5b4ec670ef2e69a9a29905750c758",
          btn__primary: "rockstargames-sites-gta-gen9f7cd84191ce7292388285221268bb216",
          ctaBlock: "rockstargames-sites-gta-gen9b357dfce2cbbbaaddba0922bf6aa4349",
          cta: "rockstargames-sites-gta-gen9c5283b6a7f210b689b3266a3c2d0532b",
          "tile--small": "rockstargames-sites-gta-gen9b743dddc76f7a11f2e038f0f53bf0e23",
          "tile--right": "rockstargames-sites-gta-gen9fd8f438da705d0651f99137f64c2e451",
          contain: "rockstargames-sites-gta-gen9cf954fb41e5ae1eb6a3e34bf8056be13",
          "tile--medium": "rockstargames-sites-gta-gen9be75e3368953489da1733298f9d9ecf9",
          "tile--large": "rockstargames-sites-gta-gen9abad2ab70da5961f0cd93a0ec0584a25"
        },
        Z = e => {
          let {
            title: a,
            description: t,
            cta: s,
            imgSrc: i,
            imgPosition: r = "top",
            cardSize: c = "medium",
            enableFullBleed: o,
            background: l = "var(--foundry-alias-color-background-bold-layer-2)",
            backgroundSize: d = "cover",
            backgroundImage: m,
            backgroundPosition: g = "center",
            backgroundRepeat: u = "no-repeat",
            customStyles: f
          } = e;
          const b = (0, j.useGetCdnSource)(i?.mobile ?? null),
            p = (0, j.useGetCdnSource)(i?.desktop ?? b),
            v = (0, j.useGetCdnSource)(m ?? null),
            k = {
              background: l,
              backgroundSize: d,
              backgroundImage: m ? `url(${v})` : void 0,
              backgroundPosition: g,
              backgroundRepeat: u,
              ...f
            };
          return (0, n.jsxs)("article", {
            className: G()(K.tile, [K[`tile--${c}`]], [K[o ? "fullBleed" : "contain"]], [K[`tile--${r}`]]),
            style: {
              ...k
            },
            children: [i && (0, n.jsx)("div", {
              role: "img",
              className: K.tile__image,
              "aria-label": i?.imgAlt || i?._memoq?.imgAlt,
              style: {
                "--background-image-desktop": `url(${p})`,
                "--background-image-mobile": `url(${b})`
              }
            }), (0, n.jsxs)("div", {
              className: G()(K.tile__content),
              children: [a && (0, n.jsx)("h2", {
                className: K.tile__title,
                children: a
              }), t && (0, n.jsx)("p", {
                className: K.tile__description,
                children: t
              }), s && (0, n.jsx)("div", {
                className: K.ctaBlock,
                children: (0, n.jsx)(j.TinaParser, {
                  components: {
                    Cta: I.A,
                    ExpandingPlatformButton: x.A
                  },
                  tina: {
                    payload: {
                      content: s
                    }
                  }
                })
              })]
            })]
          })
        },
        J = (0, c.memo)(Z),
        ee = e => {
          let {
            src: a,
            alt: t
          } = e;
          const s = (0, j.useGetCdnSource)(a ?? null);
          return (0, n.jsx)("div", {
            className: "rockstargames-sites-gta-gen9bafb4e6a158f4ed0bc68089ef275ad94",
            children: (0, n.jsx)("img", {
              src: s,
              alt: t
            })
          })
        },
        ae = (0, c.memo)(ee),
        te = e => {
          let {
            name: a,
            valueProps: t,
            enableAnimation: s
          } = e;
          const {
            track: i
          } = (0, H.useGtmTrack)(), {
            ref: r
          } = (0, O.useInView)({
            threshold: .6,
            triggerOnce: !0,
            onChange: e => {
              e && i({
                event: "page_section_impression",
                element_placement: a.toLowerCase()
              })
            }
          }), [o, l] = (0, c.useState)([]);
          (0, c.useEffect)((() => {
            l(t.map((e => {
              let {
                jumpToSectionId: a = ""
              } = e;
              return a
            })))
          }), [t]);
          const d = (0, c.useCallback)((e => {
            const t = e + 1;
            i({
              event: "card_click",
              card_id: t.toString(),
              card_name: `Card ${t}`,
              position: t,
              element_placement: a.toLowerCase()
            });
            const s = document?.getElementById(o[e] || "") || null;
            if (s) {
              const e = 20;
              window?.scrollTo({
                top: s?.getBoundingClientRect()?.top + window?.scrollY - e,
                behavior: "smooth"
              })
            }
          }), [t, o]);
          let m = "div";
          return m = "button", (0, n.jsx)("div", {
            ref: r,
            "data-animate": s,
            className: "rockstargames-sites-gta-gen9ee4924ba29def53eb12a10d11c8f705d",
            children: t.map(((e, a) => (0, n.jsxs)("button", {
              className: "rockstargames-sites-gta-gen9f971bd8827552a1baadea8776cdada8a",
              onClick: () => d(a),
              children: [e?.iconImgSrc && (0, n.jsx)("div", {
                className: "rockstargames-sites-gta-gen9cce42e1c4264e5b1460e981b29b85809",
                children: (0, n.jsx)(ae, {
                  src: e?.iconImgSrc,
                  alt: e?.iconAlt || e?.title || "Icon"
                })
              }), (0, n.jsx)("h3", {
                className: "rockstargames-sites-gta-gen9fef730bb1272030876b06f9275276637",
                children: e?.title
              })]
            }, e?.key)))
          })
        };
      var se = t(99183),
        ne = t(52674),
        ie = t(78805);
      const re = {},
        ce = e => {
          let {
            brand: a
          } = e;
          return (0, n.jsx)("div", {
            className: re[a]
          })
        },
        oe = () => (0, n.jsx)("h2", {
          children: "Section"
        });
      var le = t(48967),
        de = t(20451)
    },
    93335: (e, a, t) => {
      "use strict";
      t.d(a, {
        E_: () => i,
        Yh: () => r.Y,
        qj: () => g,
        hY: () => o,
        hI: () => d
      });
      var s = t(95966);
      const n = (0, s.makeVar)({
          brand: null,
          headerHeight: 0,
          headerHidden: !1,
          mobileNavOpen: !1,
          activeSection: null
        }),
        i = () => {
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
      var r = t(60026),
        c = t(86505);
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
      var l = t(62229);
      const d = () => {
        const [e] = (0, l.useState)([{
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
      t(2918);
      var m = t(44527);
      const g = function(e) {
        let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " > ";
        const [t, n] = (0, l.useState)(null), {
          data: i
        } = (0, s.useQuery)(m.TinaModulesTree, {
          variables: {
            id: e
          },
          skip: !e
        });
        return (0, l.useEffect)((() => {
          const e = i?.tinaModulesTree?.[0]?.tree ?? null;
          e && n(e.map((e => {
            let {
              title: a
            } = e;
            return a
          })).join(a))
        }), [i, a, e]), t
      }
    },
    7578: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => u
      });
      var s = t(62229),
        n = t(16188),
        i = t(22738),
        r = t(50216),
        c = t(80725),
        o = t(2918),
        l = t(95966),
        d = t(45505);
      var m = t(91029);
      const g = e => {
          let {
            prevRef: a,
            nextRef: t,
            onNextClicked: s,
            onPrevClicked: n,
            onNextKeyDown: i,
            title: r
          } = e;
          return (0, m.jsxs)("div", {
            "aria-controls": `${r}-carousel`,
            "aria-label": `${r} carousel buttons`,
            className: "rockstargames-sites-gta-gen9b8d5ef10008331a9f6d3a6bdf1690d01",
            role: "group",
            children: [(0, m.jsx)("button", {
              className: "rockstargames-sites-gta-gen9c38cd500d52d07bd012e288dc0b4f635",
              ref: a,
              onClick: n,
              "aria-label": "Previous"
            }), (0, m.jsx)("button", {
              className: "rockstargames-sites-gta-gen9b24ada0f7959966c6d950567eaaafce2",
              ref: t,
              onClick: s,
              onKeyDown: i,
              "aria-label": "Next"
            })]
          })
        },
        u = (0, d.A)((e => {
          let {
            description: a,
            slideChildren: t,
            size: d,
            title: u,
            name: f,
            customSlidesPerView: b = null,
            customSpaceBetween: p = null,
            slideClass: v,
            style: k,
            className: h,
            cardSizeBreakpoints: x,
            customAspectRatio: y,
            titleBadge: j,
            theme: _
          } = e;
          const {
            track: N
          } = (0, o.useGtmTrack)(), S = (0, s.useRef)(null), w = (0, s.useRef)(null), C = (0, s.useRef)(null), [T, I] = (0, s.useState)(null), [A, B] = (0, s.useState)(!1), [M, V] = (0, s.useState)(null), [E, L] = (0, s.useState)(), [P, R] = (0, s.useState)(), {
            ref: F,
            inView: G
          } = (0, i.useInView)({
            threshold: .6
          }), [D, $] = (0, s.useState)(!1), [H, O] = (0, s.useState)(null), [z, q] = (0, s.useState)(!1), [W, X] = (0, s.useState)(0), [U, Y] = (0, s.useState)(0);
          (0, s.useEffect)((() => {
            const e = () => {
              q(window.innerWidth < 1024)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), []), (0, s.useEffect)((() => {
            const e = () => {
              E && !(0, n.isEmpty)(E) && E?.height > 0 && E?.height !== W && X(E?.height)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [E]);
          const Q = {
            0: {
              spaceBetween: p ?? 16
            },
            1024: {
              spaceBetween: p ?? 18
            },
            1920: {
              spaceBetween: p ?? 20
            },
            2560: {
              spaceBetween: p ?? 22
            }
          };
          (0, s.useEffect)((() => {
            if (!S.current) return;
            const e = () => {
              if (S.current) {
                const e = b || Number(window.getComputedStyle(S.current).getPropertyValue("--slides-per-view")),
                  a = b ? 1 : Number(window.getComputedStyle(S.current).getPropertyValue("--slides-per-view-multiplier"));
                V(e * a)
              }
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [S, b]), (0, s.useEffect)((() => {
            if (!t) return;
            let e = !1;
            t.forEach((a => {
              "cover-card" === a?.props?.tina?.payload?.meta?.type && (e = !0, O(a))
            })), $(e);
            const a = t.map(((e, a) => "cover-card" === e?.props?.tina?.payload?.meta?.type && z ? null : (0, m.jsx)(c.qr, {
              className: "rockstargames-sites-gta-gen9ad67cb8db28ddf18d185f85a3d54b06f",
              onFocus: () => J(a),
              role: "button",
              children: e
            }, e.key)));
            I(a)
          }), [t, z]), (0, s.useEffect)((() => {
            R({
              nextEl: C.current,
              prevEl: w.current
            })
          }), [C, w]), (0, s.useEffect)((() => {
            G && !A && t && (N({
              event: "page_section_impression",
              element_placement: (f || u).toLowerCase()
            }), B(!0))
          }), [G, t]);
          let K = "custom" === d ? {
            "--custom-aspect-ratio": y,
            ...k
          } : {
            ...k
          };
          const Z = 0 !== W ? `${W}px` : "100%";
          K = {
            ...K,
            "--carousel-cards-height": Z,
            "--carousel-nav-opacity": U
          };
          const J = e => {
            E?.slideTo(e)
          };
          return (0, m.jsxs)("section", {
            "aria-label": u,
            className: (0, l.classList)("rockstargames-sites-gta-gen9f20b52f7c3f9003cd00811a47a04bf10", h),
            "data-size": d,
            "data-sm": x?.sm ? x?.sm : d,
            "data-md": x?.md ? x?.md : d,
            "data-lg": x?.lg ? x?.lg : d,
            "data-xl": x?.xl ? x?.xl : d,
            "data-xxl": x?.xxl ? x?.xxl : d,
            "data-has-covercard": D,
            "data-new-carousel-nav": !0,
            id: `${u}-carousel`,
            "data-theme": _,
            ref: S,
            style: K,
            children: [(0, m.jsx)("div", {
              className: "rockstargames-sites-gta-gen9aeafe767d91d07fab61f307b5bbffeef",
              ref: F
            }), D && z && (0, m.jsx)("div", {
              className: "rockstargames-sites-gta-gen9def6705cfe82c4e562f3c71c78bc5248",
              children: H
            }), (0, m.jsx)("div", {
              className: "rockstargames-sites-gta-gen9b093fac5b0d056a4a00f34d0418c6577",
              children: (0, m.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9dcef10ca0aa4165afec829cc4474b8b7",
                children: [(0, m.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9b83b41754b7e9ac95c806264014db990",
                  children: [!D && u && (0, m.jsxs)("div", {
                    className: "rockstargames-sites-gta-gen9c8e04a547988dacbae8960776862f15f",
                    children: [(0, m.jsx)("h2", {
                      children: u
                    }), j && (0, m.jsx)("span", {
                      className: "rockstargames-sites-gta-gen9c3de2db74771fdba023cc2b11b216955",
                      children: j
                    })]
                  }), (0, m.jsx)(g, {
                    prevRef: w,
                    nextRef: C,
                    onNextClicked: () => {},
                    onPrevClicked: () => {},
                    onNextKeyDown: e => {
                      if ("Tab" === e.key && !e.shiftKey) {
                        const a = E?.slides[E?.activeIndex].querySelector('a, button, [role="button"]');
                        a && a?.tabIndex > -1 && (e.preventDefault(), a.focus())
                      }
                    },
                    title: u,
                    theme: _
                  })]
                }), a && (0, m.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9a1497e1cd7844ff158955c0afe2fd3b8",
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              })
            }), M ? (0, m.jsx)(c.RC, {
              slidesPerView: M,
              onInit: e => {
                L(e);
                const a = setInterval((() => {
                  const {
                    height: t
                  } = e;
                  t > 0 && (X(t), Y(1), clearInterval(a))
                }), 500)
              },
              grabCursor: !0,
              navigation: P,
              modules: [r.Vx],
              breakpoints: Q,
              slideClass: (0, l.classList)("swiper-slide", v),
              onSlideNextTransitionEnd: () => {
                N({
                  event: "carousel_next",
                  element_placement: u?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                N({
                  event: "carousel_previous",
                  element_placement: u?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                N({
                  event: "carousel_swipe",
                  element_placement: u?.toLowerCase() ?? ""
                })
              },
              children: T
            }) : ""]
          })
        }), null)
    },
    44549: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(62229),
        n = t(22738),
        i = t(91029);
      const r = e => {
        let {
          thresholds: a,
          onThresholdReached: t,
          children: r
        } = e;
        const [c, o] = (0, s.useState)([]), [l, d] = (0, s.useState)(new Set);
        return (0, s.useEffect)((() => {
          const e = Array.from(new Set(a));
          e.sort(((e, a) => e - a)), o(e)
        }), [a]), (0, i.jsxs)("div", {
          style: {
            position: "relative"
          },
          children: [c.map((e => (0, i.jsx)(n.InView, {
            threshold: e,
            onChange: a => ((e, a) => {
              e && !l.has(a) && d((e => {
                const s = new Set(e);
                return c.forEach((e => {
                  e <= a && !s.has(e) && (s.add(e), t(e))
                })), s
              }))
            })(a, e),
            triggerOnce: !0,
            children: a => {
              let {
                ref: t
              } = a;
              return (0, i.jsx)("div", {
                ref: t,
                style: {
                  height: "1px",
                  position: "absolute",
                  top: 100 * e + "%"
                }
              })
            }
          }, e))), r]
        })
      }
    },
    59535: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => r
      });
      var s = t(62229),
        n = t(16762),
        i = t(91029);
      const r = e => {
        let {
          children: a,
          ...t
        } = e;
        const [r, c] = (0, s.useState)(!1);
        return (0, i.jsx)(n.zb, {
          ...t,
          onReady: () => {
            document.fonts.ready.then((() => {
              c(!0)
            }))
          },
          children: a
        })
      }
    },
    88415: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l,
        X: () => o
      });
      var s = t(92440),
        n = t(95966),
        i = t(45505),
        r = t(84343),
        c = t(91029);
      const o = e => {
          let {
            id: a = null,
            ids: t = null,
            setTitleDataPath: s = null,
            sync: i = !1
          } = e;
          const c = t ?? [a],
            {
              data: o
            } = (0, n.useQuery)(r.TinaModulesInfo, {
              variables: {
                ids: c,
                sync: i
              },
              setTitleDataPath: s,
              skip: !c.length
            });
          return o?.tinaModulesInfo ?? null
        },
        l = (0, i.A)((e => {
          let {
            components: a = {},
            id: t = null,
            ids: n = null
          } = e;
          const i = o({
              id: t,
              ids: n
            }),
            r = i?.[0]?.tina;
          return r ? (0, c.jsx)(c.Fragment, {
            children: i.map(((e, t) => {
              let {
                tina: n
              } = e;
              return (0, c.jsx)(s.TinaParser, {
                components: a,
                tina: n,
                componentProps: {
                  tinaModulesInfo: i
                }
              }, t)
            }))
          }) : null
        }), {
          header: null
        })
    },
    79512: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => o
      });
      var s = t(9623);
      const n = {
        pillBtn: "rockstargames-sites-gta-gen9a76545929bba4f1522661c9f297ea3c5",
        selected: "rockstargames-sites-gta-gen9e5b12527bec7eae7fce9642c9827cc3b",
        plusButton: "rockstargames-sites-gta-gen9b35e9ba36ecaabe08c02c44808110761",
        small: "rockstargames-sites-gta-gen9b3ba679464048120f8440e7ae0d14086",
        btnText: "rockstargames-sites-gta-gen9e146813e6b911567a15379239351bb9f",
        btnTexticon: "rockstargames-sites-gta-gen9add785fa73d6a7f8cdf490add2819974",
        whiteBtn: "rockstargames-sites-gta-gen9d94aba4fb4bae812e14f8715816752c2",
        blackBtn: "rockstargames-sites-gta-gen9d3207a3907ff5e6cc1498c67d5562087",
        transparentBtn: "rockstargames-sites-gta-gen9d4515b6bf9a4c714239cac9e27932235",
        iconBtn: "rockstargames-sites-gta-gen9a305be36306fd7f0977b052ccab54910",
        link: "rockstargames-sites-gta-gen9a73b743df91203999c432aceb1093e62",
        xboxone: "rockstargames-sites-gta-gen9cadebea37980f01b56560143374013b3",
        xboxseriesxs: "rockstargames-sites-gta-gen9c28e2bcbd4ed4fc95b67860cb7033999",
        ps4: "rockstargames-sites-gta-gen9af1b302b53e77d0da20f92de2973fd29",
        ps5: "rockstargames-sites-gta-gen9b5164622a2b180ed2b04eab4d489763b",
        pc: "rockstargames-sites-gta-gen9c4a7b17bb99afb02a9f9b9b133be7844"
      };
      var i = t(91029);
      const r = e => {
          let {
            children: a,
            className: t,
            onClick: s,
            style: n,
            ariaLabel: r
          } = e;
          return (0, i.jsx)("button", {
            className: t,
            onClick: s,
            style: n,
            type: "button",
            "aria-label": r,
            children: a
          })
        },
        c = e => {
          let {
            children: a,
            className: t,
            onClick: n,
            style: r,
            to: c,
            ariaLabel: o
          } = e;
          return (0, i.jsx)(s.NavLink, {
            className: t,
            onClick: n,
            style: r,
            to: c,
            "aria-label": o,
            children: a
          })
        },
        o = e => {
          let {
            btnColor: a = "#fff",
            className: t = "",
            consoleBtn: s,
            icon: o = "",
            img: l,
            labelColor: d = "#000",
            onClick: m,
            secondText: g,
            size: u,
            text: f,
            to: b,
            type: p = "",
            ariaLabel: v
          } = e;
          const k = [n.plusButton, n[p] ?? "", n[u] ?? "", n[s] ?? "", t].join(" "),
            h = {
              "--hvr-color": a ?? d,
              "--hvr-bg-color": d ?? a,
              "--hvr-border-color": a ?? d
            },
            x = (0, i.jsxs)(i.Fragment, {
              children: [l ? (0, i.jsx)("img", {
                src: l,
                alt: ""
              }) : "", (0, i.jsxs)("div", {
                className: n.btnText,
                icon: o,
                children: [f, g ? (0, i.jsx)("span", {
                  children: g
                }) : ""]
              })]
            });
          if (b) {
            if (b.startsWith("http")) {
              const e = b.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, i.jsx)("span", {
                onClick: m,
                onKeyDown: m,
                className: k,
                role: "button",
                "aria-label": v,
                tabIndex: 0,
                children: (0, i.jsx)("a", {
                  href: b,
                  target: e,
                  children: x
                })
              })
            }
            return (0, i.jsx)(c, {
              className: k,
              onClick: m,
              style: {
                ...h
              },
              to: b,
              ariaLabel: v,
              children: x
            })
          }
          return (0, i.jsx)(r, {
            className: k,
            onClick: m,
            style: {
              ...h
            },
            ariaLabel: v,
            children: x
          })
        }
    },
    24069: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => d
      });
      var s = t(62229),
        n = t(21515),
        i = t.n(n),
        r = t(95966);
      const c = {
        pillBtn: "rockstargames-sites-gta-gen9d45dcc8e4008f8620987ea3033e4373d",
        selected: "rockstargames-sites-gta-gen9de1852cf9b8b4b71bcc67f8e66552c46",
        grid: "rockstargames-sites-gta-gen9c157d94760f0476ea06aa04da4e86727",
        itemList: "rockstargames-sites-gta-gen9a1ccd04246730848111c4868ccba6294",
        gtaplus: "rockstargames-sites-gta-gen9c5d92b0365dc60e6b93d321e9139e9f3",
        rdo: "rockstargames-sites-gta-gen9cc490e805fe55ab86a3ec5df2a5131e3",
        noImg: "rockstargames-sites-gta-gen9b239e263450a84fffba43a94c194d606",
        gtao: "rockstargames-sites-gta-gen9f4bc90102d24f73cb2d45d3821bfd32e",
        custom: "rockstargames-sites-gta-gen9ef5369875ddc5d9d7ad36eadc8afab2e",
        yellow: "rockstargames-sites-gta-gen9bdb57ca410954012dfd4711c67fc2a18",
        hotPink: "rockstargames-sites-gta-gen9fa9be84c85fca4e66b2489e1e52a2e6a",
        red: "rockstargames-sites-gta-gen9c446b758dbe82ad97444174f4d0b4abe",
        turquoise: "rockstargames-sites-gta-gen9b03c0798d8655dd98518b2f0dc002f06",
        purple: "rockstargames-sites-gta-gen9f14d63f28dd73c05cf950a08d8b8f501",
        teal: "rockstargames-sites-gta-gen9a0aaa124176430b6ad4f959cf136e7a3",
        blue: "rockstargames-sites-gta-gen9df5c0d39e32be4e6977bb1d638ed2340",
        green: "rockstargames-sites-gta-gen9ea2d0d0e1e32d8e48d79a0ad80a4c8ac",
        darkRed: "rockstargames-sites-gta-gen9a6a078bd68ef39e719c21e5db6329642",
        darkBlue: "rockstargames-sites-gta-gen9aa460ec14f75c93c2ba386a115ea407c",
        goldenrod: "rockstargames-sites-gta-gen9a55d762df7035a2394c9ffbfcbf1a0db",
        skull: "rockstargames-sites-gta-gen9a034e7482e8f28c66ec657f72bb93749"
      };
      var o = t(91029);
      const {
        sanitize: l
      } = i(), d = e => {
        let {
          list: a,
          string: t,
          starColor: n,
          style: i,
          className: d,
          game: m,
          noImg: g,
          columns: u,
          mobileColumns: f
        } = e;
        const [b, p] = (0, s.useState)(null), v = t ? t.split("_#_") : a;
        if ((0, s.useEffect)((() => {
            p(a)
          }), [a]), !t && !a) return null;
        const k = {
          color: i?.color
        };
        return delete i?.color, u && b ? (0, o.jsx)("div", {
          className: c.grid,
          style: {
            "--unordered-list-grid-column": u,
            "--unordered-list-grid-column-mobile": f ?? u
          },
          children: (0, o.jsx)("ul", {
            className: (0, r.classList)(c.itemList, c.noImg, c[n], c[m]),
            style: (0, r.safeStyles)(i),
            children: b.map(((e, a) => (0, o.jsx)("li", {
              style: k,
              dangerouslySetInnerHTML: {
                __html: l(e.content)
              }
            }, a)))
          })
        }) : (0, o.jsx)("ul", {
          style: (0, r.safeStyles)(i),
          className: (0, r.classList)(c.itemList, c.custom, g ? c.noImg : "", n ? c[n] : "", m ? c[m] : "", d ?? ""),
          children: v.map(((e, a) => (0, o.jsx)("li", {
            dangerouslySetInnerHTML: {
              __html: l(e?.content ?? e)
            }
          }, a)))
        })
      }
    },
    41638: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Animations: () => s,
        LiteMotion: () => o,
        withFadeIn: () => g,
        withFadeUp: () => p
      });
      var s = {};
      t.r(s), t.d(s, {
        getVariant: () => h,
        transitions: () => v,
        variants: () => k
      });
      var n = t(62229),
        i = t(62665),
        r = t(91029);
      const c = (0, n.forwardRef)(((e, a) => {
        const {
          children: t,
          tag: s = "div"
        } = e, n = i.m[s];
        return (0, r.jsx)(i.LazyMotion, {
          features: i.domAnimation,
          children: (0, r.jsx)(n, {
            ref: a,
            ...e,
            children: t
          })
        })
      }));
      c.displayName = "LiteMotion";
      const o = c,
        l = {
          visible: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        },
        d = {
          ease: "easeIn",
          duration: .4
        },
        m = e => {
          let {
            children: a
          } = e;
          return (0, r.jsx)(i.motion.div, Object.assign({
            className: "rockstargames-sites-gta-gen9f38982805188b64825a72d2c5fac938c",
            variants: l,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: d
          }, {
            children: a
          }))
        },
        g = e => a => (0, r.jsx)(m, {
          children: (0, r.jsx)(e, Object.assign({}, a))
        }),
        u = {
          visible: {
            opacity: 1,
            y: 0
          },
          hidden: {
            opacity: 0,
            y: 40
          }
        },
        f = {
          ease: "easeIn",
          duration: .75
        },
        b = e => {
          let {
            children: a
          } = e;
          return (0, r.jsx)(i.motion.div, {
            className: "rockstargames-sites-gta-gen9c1ad787ad6429786650325edac0ffe42",
            variants: u,
            initial: "hidden",
            whileInView: "visible",
            viewport: {
              margin: "-20%",
              once: !0
            },
            transition: f,
            children: a
          })
        },
        p = e => a => (0, r.jsx)(b, {
          children: (0, r.jsx)(e, {
            ...a
          })
        }),
        v = {
          cardOpen: {
            ease: [.77, 0, .175, 1],
            duration: .5
          },
          afterCardOpen: {
            ease: "easeIn",
            duration: .3,
            delay: .5
          },
          fade: {
            ease: "easeIn",
            duration: .3
          },
          instantFade: {
            duration: .05
          }
        },
        k = {
          plainCard: {
            expanded: {
              initial: {
                gridTemplateColumns: "var(--grid-template-columns-initial)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-initial)",
                overflow: "visible",
                "--product-card-pricing-info-opacity": 1,
                "--product-card-pricing-info-padding": "var(--padding-sm)"
              },
              animate: {
                gridTemplateColumns: "var(--grid-template-columns-animate)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-animate)",
                "--product-card-pricing-info-height": 0,
                "--product-card-pricing-info-opacity": 0,
                "--product-card-pricing-info-padding": 0,
                transitionEnd: {
                  overflow: "auto",
                  marginTop: "calc(var(--modal-padding) * -1)",
                  paddingTop: "var(--modal-padding)",
                  height: "calc(100% + var(--modal-padding))"
                }
              },
              hovered: {}
            },
            expandedContents: {
              initial: {
                opacity: 0,
                display: "var(--card-expanded-contents-display-initial)"
              },
              animate: {
                opacity: 1,
                display: "grid"
              }
            }
          },
          cardWithImageGallery: {
            expanded: {
              initial: {
                overflow: "visible",
                gridTemplateColumns: "var(--grid-template-columns-initial)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-initial)",
                "--gallery-border": "0 solid transparent"
              },
              animate: {
                gridTemplateColumns: "var(--grid-template-columns-animate)",
                "--card-image-aspect-ratio": "var(--card-image-aspect-ratio-animate)",
                transitionEnd: {
                  overflow: "auto",
                  marginTop: "calc(var(--modal-padding) * -1)",
                  paddingTop: "var(--modal-padding)",
                  height: "calc(100% + var(--modal-padding))"
                }
              },
              hovered: {}
            },
            expandedContents: {
              initial: {
                opacity: 0,
                display: "none"
              },
              animate: {
                opacity: 1,
                display: "grid"
              }
            },
            gallery: {
              parent: {
                initial: {
                  gridGap: 0,
                  background: "var(--black-100)"
                },
                animate: {
                  gridGap: "var(--gallery-grid-gap)",
                  background: "var(--black-200)",
                  transitionEnd: {
                    pointerEvents: "all"
                  }
                }
              },
              main: {
                initial: {
                  "--gallery-aspect-ratio": "var(--gallery-aspect-ratio-initial)",
                  "--swiper-pagination-opacity": 0
                },
                animate: {
                  "--gallery-aspect-ratio": "var(--gallery-aspect-ratio-animate)",
                  "--swiper-pagination-opacity": 1
                }
              },
              thumbs: {
                initial: {
                  "--thumb-aspect-ratio": "1/0"
                },
                animate: {
                  "--thumb-aspect-ratio": "1/1"
                }
              }
            }
          },
          imageMask: {
            expanded: {
              initial: {
                borderRadius: "var(--border-radius-md)"
              },
              animate: {
                borderRadius: "var(--card-expanded-border-radius)"
              }
            }
          },
          foreground: {
            expanded: {
              initial: {
                width: "100%"
              },
              animate: {
                width: "var(--card-foreground-layer-width-animate)"
              }
            }
          },
          logo: {
            expanded: {
              initial: {
                "--card-logo-top-initial": "2rem",
                "--card-logo-top-animate": "0%"
              },
              animate: {
                "--card-logo-top-initial": "0rem",
                "--card-logo-top-animate": "50%",
                "--card-logo-marginTop-animate": "calc(var(--card-logo-height) * -1)",
                "--card-logo-y-animate-mobile": "-20%",
                height: "calc(var(--card-logo-height) * 2)",
                x: "var(--card-logo-animate-x)"
              },
              hovered: {}
            }
          },
          fade: {
            in: {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              }
            },
            out: {
              initial: {
                opacity: 1
              },
              animate: {
                opacity: 0
              }
            }
          }
        },
        h = function() {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "collapsed";
          return k[arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "imageMask"][e]
        }
    },
    88658: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => l
      });
      var s = t(9623),
        n = t(2918),
        i = t(76807),
        r = t(91029);
      const c = e => {
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
        o = e => {
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
        l = e => {
          let {
            altText: a = "",
            text: t,
            onClick: s,
            btnColor: l = "#fff",
            labelColor: d = "#000",
            type: m = "",
            icon: g,
            size: u,
            secondText: f,
            consoleBtn: b = !1,
            img: p,
            to: v = !1,
            gtm: k,
            innerRef: h = null
          } = e;
          const {
            track: x
          } = (0, n.useGtmTrack)(), y = [i.A.plusButton, i.A[m] ?? "", i.A[u] ?? "", i.A[b] ?? ""].join(" "), j = {
            "--hvr-color": l ?? d,
            "--hvr-bg-color": d ?? l,
            "--hvr-border-color": l ?? d
          }, _ = (0, r.jsxs)(r.Fragment, {
            children: [p ? (0, r.jsx)("img", {
              src: p,
              alt: a || t
            }) : "", (0, r.jsxs)("div", {
              className: i.A.btnText,
              icon: g,
              children: [t, f ? (0, r.jsx)("span", {
                children: f
              }) : ""]
            })]
          }), N = e => {
            s?.(e), k && x({
              event: "cta_other",
              text: t,
              ...k,
              link_url: v || ""
            })
          };
          if (v) {
            if (v.startsWith("http")) {
              const e = v.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, r.jsx)("span", {
                children: (0, r.jsx)("a", {
                  href: v,
                  className: y,
                  target: e,
                  onClick: N,
                  children: _
                })
              })
            }
            return (0, r.jsx)(o, {
              className: y,
              onClick: N,
              style: j,
              to: v,
              children: _
            })
          }
          return (0, r.jsx)(c, {
            className: y,
            onClick: N,
            style: j,
            innerRef: h,
            children: _
          })
        }
    },
    49284: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => v
      });
      var s = t(62229),
        n = t(13581),
        i = t.n(n),
        r = t(27654),
        c = t(26168),
        o = t(81788),
        l = t(95966),
        d = t(79512),
        m = t(9137),
        g = t(2918),
        u = t(50859);
      const f = (0, o.defineMessages)({
          discover_callout_cards_aria: {
            id: "discover_callout_cards_aria",
            defaultMessage: "Pack Cards"
          },
          discover_callout_mugshot: {
            id: "discover_callout_mugshot",
            defaultMessage: "{userName} mugshot"
          },
          discover_callout_heading: {
            id: "discover_callout_heading",
            defaultMessage: "Career Progress"
          },
          discover_callout_description: {
            id: "discover_callout_description",
            defaultMessage: "See all the challenges you've completed in your GTA Online Career. You can also discover new ones and earn valuable rewards as you rise through the criminal ranks."
          },
          discover_callout_cta_label: {
            id: "discover_callout_cta_label",
            defaultMessage: "Track Progress"
          }
        }),
        b = "rockstargames-sites-gta-gen9e69747aa5d7adb3304425cd1943479d9";
      var p = t(91029);
      i().registerPlugin(c.u), i().registerPlugin(r.useGSAP);
      const v = e => {
        let {
          backgroundColor: a,
          cardsOrientation: n = "left"
        } = e;
        const [i, r] = (0, s.useState)(""), [c, v] = (0, s.useState)(void 0), {
          currentCharId: k
        } = (0, g.useRockstarUserState)(), {
          data: h
        } = (0, g.useRockstarUser)(), {
          track: x
        } = (0, g.useGtmTrack)(), {
          windowWidth: y
        } = (0, l.useWindowResize)(), j = (0, o.useIntl)(), _ = {
          "--promo-background": a ?? "var(--black-200)",
          "--promo-order": "left" === n ? "row" : "row-reverse"
        }, N = t(40844), S = () => {}, w = (0, u.A)().data, C = !!w?.length, T = (0, s.useMemo)((() => C ? ((e, a, t) => {
          const s = [];
          let n = 0;
          for (let a = 0; a < e.length && n < 12; a++) {
            const t = a % 3;
            Array.isArray(s[t]) || (s[t] = []), s[t].push(e[a]), n++
          }
          return s
        })(w.reduce(((e, a) => e.concat(a.subNavItems.filter((e => e.discoverSafe)))), []).sort(((e, a) => {
          const t = new Date(e.createdAt),
            s = new Date(a.createdAt);
          return e.createdAt && a.createdAt ? s.getTime() - t.getTime() : e.createdAt ? -1 : a.createdAt ? 1 : 0
        }))) : []), [C, w]), I = (0, s.useMemo)((() => (0, p.jsx)("img", {
          alt: j.formatMessage(f.discover_callout_mugshot, {
            userName: h?.nickname
          }),
          className: "rockstargames-sites-gta-gen9b44dd13add379d566cc2778f2bbb6e62",
          src: i || N,
          onError: S
        })), [i, N, j, h]), A = {
          event: "cta_learn",
          text: "track progress",
          link_url: "/gta-online/career-progress",
          element_placement: "discover page"
        };
        return (0, s.useEffect)((() => {
          const e = document.querySelector(`.${b}`);
          e?.clientHeight && v(e.clientHeight)
        }), [y]), (0, s.useEffect)((() => {
          if (h) {
            const {
              characters: e
            } = h;
            r(e?.gtao[k]?.mugshotUrl || "")
          }
        }), [k, h]), (0, p.jsx)("div", {
          className: "rockstargames-sites-gta-gen9ef7bcdb43f351229c9a05ad1d621316c",
          children: (0, p.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9ef1462c6a58b59c70b18e542a70fb76e",
            style: _,
            children: [(0, p.jsx)("div", {
              className: "rockstargames-sites-gta-gen9dda4d1a66f24aa33e90a377b72aec436",
              "aria-label": j.formatMessage(f.discover_callout_cards_aria),
              children: C ? (0, p.jsx)("div", {
                className: "rockstargames-sites-gta-gen9ed41109354440ae1158df0c4d1912f3f",
                children: C && T.map(((e, a) => (0, p.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9c07e974cea0a798e32895669634748a3",
                  style: {
                    "--packCard-height": c ? `${c}px` : "100px"
                  },
                  tabIndex: -1,
                  children: [e.map((e => (0, p.jsx)("img", {
                    className: b,
                    src: e.images.brand,
                    alt: e.title,
                    tabIndex: -1,
                    "aria-hidden": !0
                  }, e.title))), e.map((e => (0, p.jsx)("img", {
                    className: b,
                    src: e.images.brand,
                    alt: e.title,
                    tabIndex: -1,
                    "aria-hidden": !0
                  }, e.title)))]
                }, a)))
              }) : (0, p.jsx)("div", {
                className: "rockstargames-sites-gta-gen9bd76302b4217a870b53bbe88f88d4da0",
                children: (0, p.jsx)(m.A, {
                  type: "SPINNING"
                })
              })
            }), (0, p.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9c58b655f2403e317825d3d191c6e36db",
              children: [I, (0, p.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9a09a68decb58285a04d030c5954b79ac",
                children: [(0, p.jsx)("h3", {
                  className: "rockstargames-sites-gta-gen9ff663b63b31dd02b90f4953cd210c4dd",
                  children: j.formatMessage(f.discover_callout_heading)
                }), (0, p.jsx)("p", {
                  children: j.formatMessage(f.discover_callout_description)
                })]
              }), (0, p.jsx)(d.A, {
                to: "/gta-online/career-progress",
                text: j.formatMessage(f.discover_callout_cta_label),
                onClick: A && (() => x({
                  ...A
                }))
              })]
            })]
          })
        })
      }
    },
    66019: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        vinewoodClub: () => s
      });
      var s = t(98897)
    },
    13466: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        Pause: () => n.default,
        Play: () => s.default
      });
      var s = t(15603),
        n = t(52633)
    },
    52633: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => n
      });
      var s = t(91029);
      const n = e => {
        let {
          alt: a = "",
          className: t = "",
          clipRule: n = "evenodd",
          fill: i = "white",
          fillRule: r = "evenodd",
          height: c = "20",
          viewBox: o = "0 0 20 20",
          width: l = "20"
        } = e;
        return (0, s.jsxs)("svg", {
          className: t,
          height: c,
          width: l,
          viewBox: o,
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, s.jsx)("title", {
            children: a
          }), (0, s.jsx)("path", {
            fillRule: r,
            clipRule: n,
            d: "M4.16797 3.33333C4.16797 2.8731 4.54106 2.5 5.0013 2.5H8.33464C8.79487 2.5 9.16797 2.8731 9.16797 3.33333V16.6667C9.16797 17.1269 8.79487 17.5 8.33464 17.5H5.0013C4.54106 17.5 4.16797 17.1269 4.16797 16.6667V3.33333Z",
            fill: i
          }), (0, s.jsx)("path", {
            fillRule: r,
            clipRule: n,
            d: "M10.8346 3.33333C10.8346 2.8731 11.2077 2.5 11.668 2.5H15.0013C15.4615 2.5 15.8346 2.8731 15.8346 3.33333V16.6667C15.8346 17.1269 15.4615 17.5 15.0013 17.5H11.668C11.2077 17.5 10.8346 17.1269 10.8346 16.6667V3.33333Z",
            fill: i
          })]
        })
      }
    },
    99150: () => {},
    15603: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => n
      });
      var s = t(91029);
      const n = e => {
        let {
          alt: a = "",
          className: t = "",
          clipRule: n = "evenodd",
          fill: i = "white",
          fillRule: r = "evenodd",
          height: c = "20",
          viewBox: o = "0 0 20 20",
          width: l = "20"
        } = e;
        return (0, s.jsxs)("svg", {
          className: t,
          height: c,
          width: l,
          viewBox: o,
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, s.jsx)("title", {
            children: a
          }), (0, s.jsx)("path", {
            fillRule: r,
            clipRule: n,
            d: "M3.76604 1.76853C4.0336 1.62246 4.35957 1.63413 4.616 1.79898L16.2827 9.29898C16.5212 9.45231 16.6654 9.71641 16.6654 9.99996C16.6654 10.2835 16.5212 10.5476 16.2827 10.7009L4.616 18.2009C4.35957 18.3658 4.0336 18.3775 3.76604 18.2314C3.49848 18.0853 3.33203 17.8048 3.33203 17.5V2.49996C3.33203 2.19512 3.49848 1.91461 3.76604 1.76853Z",
            fill: i
          })]
        })
      }
    },
    35756: () => {},
    17119: (e, a, t) => {
      "use strict";
      t.r(a);
      var s = t(9658),
        n = t(2918),
        i = t(92440),
        r = t(57863),
        c = t(41052),
        o = t(52581),
        l = t(91029);
      jest.mock("@rsgweb/locale-tools", (() => ({
        ...jest.requireActual("@rsgweb/locale-tools"),
        useIntl: () => ({
          formatMessage: e => {
            let {
              defaultMessage: a
            } = e;
            return a
          }
        })
      }))), jest.mock("@rsgweb/rockstar-account", (() => ({
        useGtmTrack: jest.fn()
      }))), jest.mock("@rsgweb/tina", (() => ({
        useGetCdnSource: jest.fn()
      }))), jest.mock("./hero-video.utils", (() => ({
        getVideoUrl: jest.fn()
      }))), jest.mock("./utils", (() => ({
        isReducedMotionPreferred: jest.fn(),
        messages: {
          video_hero_support_message: {
            defaultMessage: "Your browser does not support the video tag"
          },
          video_hero_play_button_label: {
            defaultMessage: "Play Video"
          },
          video_hero_pause_button_label: {
            defaultMessage: "Pause Video"
          }
        }
      }))), jest.mock("./elevator-pitch.less", (() => ({
        heroContainer: "heroContainer",
        herovideoWrapper: "herovideoWrapper",
        heroBackgroundImg: "heroBackgroundImg",
        heroVideo: "heroVideo",
        heroVideoPlayPauseBtn: "heroVideoPlayPauseBtn",
        heroOverlay: "heroOverlay",
        heroContentWrapper: "heroContentWrapper",
        heroContent: "heroContent",
        heroContentImg: "heroContentImg",
        heroCTA: "heroCTA"
      }))), describe("HeroVideo", (() => {
        const e = jest.fn(),
          a = jest.fn(),
          t = jest.fn(),
          d = jest.fn();
        beforeAll((() => {
          Object.defineProperty(HTMLMediaElement.prototype, "play", {
            configurable: !0,
            writable: !0,
            value: jest.fn()
          }), Object.defineProperty(HTMLMediaElement.prototype, "pause", {
            configurable: !0,
            writable: !0,
            value: jest.fn()
          }), Object.defineProperty(HTMLMediaElement.prototype, "addEventListener", {
            configurable: !0,
            writable: !0,
            value: jest.fn()
          }), Object.defineProperty(HTMLMediaElement.prototype, "removeEventListener", {
            configurable: !0,
            writable: !0,
            value: jest.fn()
          })
        })), beforeEach((() => {
          n.useGtmTrack.mockReturnValue({
            track: e
          }), i.useGetCdnSource.mockImplementation(a), c.getVideoUrl.mockImplementation(t), r.isReducedMotionPreferred.mockImplementation(d), e.mockClear(), a.mockClear(), t.mockClear(), d.mockClear()
        })), test("it renders fallback image when variant is image", (() => {
          d.mockReturnValue(!1), t.mockReturnValue("mock-video-url.mp4"), a.mockReturnValue("fallback.jpg"), (0, s.XX)((0, l.jsx)(o.default, {
            variant: "image",
            videoSrc: "mock-video-url.mp4",
            fallbackImg: "fallback.jpg",
            fallbackImgAlt: "Fallback Image"
          }));
          const e = s.nj.getByAltText("Fallback Image");
          expect(e).toBeInTheDocument(), expect(e).toHaveAttribute("src", "fallback.jpg")
        })), test("it renders video when variant is video and reduced notion is not preferred", (() => {
          d.mockReturnValue(!1), t.mockReturnValue("mock-video-url.mp4"), a.mockReturnValue("fallback.jpg"), (0, s.XX)((0, l.jsx)(o.default, {
            variant: "video",
            videoSrc: "mock-video-url.mp4",
            fallbackImg: "fallback.jpg",
            fallbackImgAlt: "Fallback Image"
          }));
          const e = s.nj.getByTestId("hero-video");
          expect(e).toBeInTheDocument()
        })), test("it toggles play/pause state when play/pause button is clicked", (() => {
          d.mockReturnValue(!1), t.mockReturnValue("mock-video-url.mp4"), a.mockReturnValue("fallback.jpg"), (0, s.XX)((0, l.jsx)(o.default, {
            variant: "video",
            videoSrc: "mock-video-url.mp4",
            fallbackImg: "fallback.jpg",
            fallbackImgAlt: "Fallback Image"
          }));
          const n = s.nj.getByRole("button", {
              hidden: !0
            }),
            i = s.nj.getByTestId("hero-video");
          s.rC.click(n), expect(i.play).toHaveBeenCalled(), expect(e).toHaveBeenCalledWith(expect.objectContaining({
            text: "toggle play"
          })), s.rC.click(n), expect(i.pause).toHaveBeenCalled(), expect(e).toHaveBeenCalledWith(expect.objectContaining({
            text: "toggle pause"
          }))
        })), test("it renders video play/pause button with correct icon", (() => {
          d.mockReturnValue(!1), t.mockReturnValue("mock-video-url.mp4"), a.mockReturnValue("fallback.jpg"), (0, s.XX)((0, l.jsx)(o.default, {
            variant: "video",
            videoSrc: "mock-video-url.mp4",
            fallbackImg: "fallback.jpg",
            fallbackImgAlt: "Fallback Image"
          }));
          const e = s.nj.getByRole("button", {
            hidden: !0
          });
          expect(s.nj.getByTitle("Play Video")).toBeInTheDocument(), s.rC.click(e), expect(s.nj.getByTitle("Pause Video")).toBeInTheDocument(), s.rC.click(e), expect(s.nj.getByTitle("Play Video")).toBeInTheDocument()
        })), test("it attaches and remove event listeners correctly", (() => {
          d.mockReturnValue(!1), t.mockReturnValue("mock-video-url.mp4");
          const {
            unmount: e
          } = (0, s.XX)((0, l.jsx)(o.default, {
            variant: "video",
            videoSrc: "mock-video-url.mp4",
            fallbackImg: "fallback.jpg",
            fallbackImgAlt: "Fallback Image"
          })), a = s.nj.getByTestId("hero-video");
          expect(a.addEventListener).toHaveBeenCalledWith("play", expect.any(Function)), expect(a.addEventListener).toHaveBeenCalledWith("pause", expect.any(Function)), e(), expect(a.removeEventListener).toHaveBeenCalledWith("play", expect.any(Function)), expect(a.removeEventListener).toHaveBeenCalledWith("pause", expect.any(Function))
        })), test("it does not render video when reduced motion is preferred", (() => {
          d.mockReturnValue(!0), t.mockReturnValue("mock-video-url.mp4"), a.mockReturnValue("fallback.jpg"), (0, s.XX)((0, l.jsx)(o.default, {
            variant: "video",
            videoSrc: "mock-video-url.mp4",
            fallbackImg: "fallback.jpg",
            fallbackImgAlt: "Fallback Image"
          }));
          const e = s.nj.getByAltText("Fallback Image");
          expect(e).toBeInTheDocument(), expect(s.nj.queryByTestId("hero-video")).toBeNull()
        }))
      }))
    },
    52581: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => g
      });
      var s = t(62229),
        n = t(92440),
        i = t(2918),
        r = t(81788),
        c = t(41052),
        o = t(57863),
        l = t(13466),
        d = t(28302),
        m = t(91029);
      const g = e => {
        let {
          variant: a,
          videoSrc: g,
          fallbackImg: u,
          fallbackImgAlt: f,
          contentImgSrc: b,
          contentImgAlt: p,
          heading: v,
          subheading: k,
          ctaText: h,
          ctaLink: x,
          overlayColor: y
        } = e;
        const {
          track: j
        } = (0, i.useGtmTrack)(), _ = (0, s.useRef)(null), [N, S] = (0, s.useState)(!1), w = (0, o.isReducedMotionPreferred)(), C = (0, n.useGetCdnSource)(b?.full_src ?? ""), T = (0, n.useGetCdnSource)(u), I = (0, c.getVideoUrl)(g), {
          formatMessage: A
        } = (0, r.useIntl)(), B = "image" === a || w;
        let M;
        (0, s.useEffect)((() => {
          const e = () => S(!0),
            a = () => S(!1),
            t = _.current;
          return t && (t.addEventListener("play", e), t.addEventListener("pause", a)), () => {
            t && (t.removeEventListener("play", e), t.removeEventListener("pause", a))
          }
        }), []);
        try {
          M = I ? t(26002)(`.${I}`) : "mock-video-url.mp4"
        } catch (e) {
          console.error("Error loading video: ", e)
        }
        return (0, m.jsxs)("div", {
          className: d.default.heroContainer,
          children: [(0, m.jsx)("div", {
            className: d.default.heroVideoWrapper,
            children: "image" === a || w ? (0, m.jsx)("img", {
              className: d.default.heroBackgroundImg,
              src: T,
              alt: f
            }) : (0, m.jsxs)(m.Fragment, {
              children: [(0, m.jsxs)("video", {
                ref: _,
                "data-testid": "hero-video",
                className: d.default.heroVideo,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                children: [(0, m.jsx)("source", {
                  src: M,
                  type: "video/mp4"
                }), A(o.messages.video_hero_support_message)]
              }), (0, m.jsx)("button", {
                role: "button",
                className: d.default.heroVideoPlayPauseBtn,
                onClick: () => {
                  if (!B && _.current) {
                    let e = "";
                    N ? (_.current.pause(), e = "toggle pause") : (_.current.play(), e = "toggle play"), j({
                      event: "cta_other",
                      text: e,
                      element_placement: "hero"
                    }), S(!N)
                  }
                },
                "aria-hidden": !0,
                children: N ? (0, m.jsx)(l.Pause, {
                  alt: A(o.messages.video_hero_pause_button_label),
                  height: "24",
                  width: "24"
                }) : (0, m.jsx)(l.Play, {
                  alt: A(o.messages.video_hero_play_button_label),
                  height: "24",
                  width: "24"
                })
              })]
            })
          }), (0, m.jsx)("div", {
            className: d.default.heroOverlay,
            style: {
              "--overlay-bg": y ?? "var(--gradient-black-200-bottom, linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%))"
            }
          }), (b || v || k || h) && (0, m.jsx)("div", {
            className: d.default.heroContentWrapper,
            children: (0, m.jsxs)("div", {
              className: d.default.heroContent,
              children: [b && (0, m.jsx)("img", {
                className: d.default.heroContentImg,
                src: C ?? b,
                alt: p
              }), v && (0, m.jsx)("h1", {
                children: v
              }), k && (0, m.jsx)("h2", {
                children: k
              }), x && (0, m.jsx)("a", {
                href: x,
                className: d.default.heroCTA,
                children: h
              })]
            })
          })]
        })
      }
    },
    41052: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        getVideoUrl: () => s
      });
      const s = e => e ? `/assets/videos/${e}.mp4` : "/assets/videos/default.mp4"
    },
    16771: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => c
      });
      var s = t(14763),
        n = t(8458);
      const i = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "image",
            label: "Image"
          }, {
            value: "video",
            label: "Video"
          }]
        },
        r = e => {
          let {
            label: a
          } = e;
          return [{
            value: "",
            label: a
          }, {
            value: "vinewood-club",
            label: "Vinewood Club"
          }]
        },
        c = () => ({
          label: "Hero Video",
          name: "content",
          component: "group",
          fields: [(0, s.om)(), {
            label: "Variant",
            name: "variant",
            description: "Set the variant for the Hero",
            component: "select",
            options: i({
              label: "-- Select Variant --"
            })
          }, {
            label: "Video",
            name: "videoSrc",
            description: "Select video for the Hero",
            component: "select",
            options: r({
              label: "-- Select A Video --"
            })
          }, {
            name: "fallbackImg",
            label: "Fallback Image",
            component: "image",
            clearable: !0,
            previewSrc: n.z0,
            parse: n.qg,
            uploadDir: n.XC
          }, (0, s.z9)({
            label: "Fallback Image Alt Tag",
            name: "fallbackImgAlt",
            component: "text"
          }), {
            name: "contentImgSrc",
            label: "Content Image",
            component: "image",
            clearable: !0,
            previewSrc: n.z0,
            parse: n.qg,
            uploadDir: n.XC
          }, (0, s.z9)({
            label: "Content Image Alt Tag",
            name: "contentImgAlt",
            component: "text"
          }), (0, s.z9)({
            label: "Heading",
            name: "heading",
            component: "text"
          }), (0, s.z9)({
            label: "SubHeading",
            name: "subheading",
            component: "text"
          }), (0, s.z9)({
            label: "CTA text",
            name: "ctaText",
            description: 'Treated as button text (eg. "View More")',
            component: "text"
          }), {
            label: "CTA link",
            name: "ctaLink",
            component: "text"
          }, (0, s.bY)({
            filter: "heroVideo"
          }), (0, s.sE)({
            filter: "heroVideo"
          })],
          defaultItem: () => (0, s.Q)(),
          itemProps: e => (0, s.Rv)(e, {
            label: `[Hero Video]: ${e?.[s.Qw]?.name??e?.name??"New"}`
          })
        })
    },
    37281: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        getVideoUrl: () => s
      });
      const s = e => e ? `/assets/videos/${e}.mp4` : "/assets/videos/default.mp4"
    },
    57863: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        getVideoUrl: () => n.getVideoUrl,
        isReducedMotionPreferred: () => s.isReducedMotionPreferred,
        messages: () => i.default
      });
      var s = t(14111),
        n = t(37281),
        i = t(31269)
    },
    14111: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        isReducedMotionPreferred: () => s
      });
      const s = () => !("undefined" == typeof window || !window.matchMedia) && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    },
    31269: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => s
      });
      const s = (0, t(81788).defineMessages)({
        video_hero_support_message: {
          id: "video_hero_support_message",
          defaultMessage: "Your browser does not support video reproduction."
        },
        video_hero_play_button_label: {
          id: "video_hero_play_button_label",
          defaultMessage: "Play button"
        },
        video_hero_pause_button_label: {
          id: "video_hero_pause_button_label",
          defaultMessage: "Pause button"
        }
      })
    },
    60026: (e, a, t) => {
      "use strict";
      t.d(a, {
        B: () => d,
        Y: () => l
      });
      var s = t(62229),
        n = t(9623),
        i = t(95966),
        r = t(93335),
        c = t(91029);
      const o = (0, i.setContextItem)({
          context: (0, s.createContext)(),
          key: "gen9Data"
        }),
        l = () => (0, s.useContext)(o),
        d = e => {
          let {
            children: a
          } = e;
          const [t, l] = (0, s.useState)(null), [d] = (0, n.useSearchParams)(), {
            setActiveSection: m
          } = (0, r.E_)(), {
            pauseUserShouldSeeMore: g
          } = (0, i.useScroll)(), u = (0, s.useCallback)((e => {
            if (e !== d.get("section")) return void m(e);
            const a = document.getElementsByName(d.get("section"))?.[0];
            a && (g(), m(d.get("section")), a.scrollIntoView({
              behavior: "auto"
            }))
          }), [d.get("section"), t]);
          (0, s.useEffect)((() => {
            d.get("section") && u(d.get("section"))
          }), [d.get("section")]);
          const f = (0, s.useMemo)((() => ({
            announcePresence: u,
            section: t,
            setSection: l
          })), [u, t, l]);
          return (0, c.jsx)(o.Provider, {
            value: f,
            children: a
          })
        }
    },
    84343: e => {
      var a = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "types"
              }
            },
            type: {
              kind: "ListType",
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
                value: "tinaModulesList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "types"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "types"
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
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
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
                        value: "id"
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
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }]
                  }
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "ids"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "ListType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "String"
                  }
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
                value: "sync"
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
              value: !1
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
              value: !1
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
                value: "tinaModulesInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "ids"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "ids"
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
                  alias: {
                    kind: "Name",
                    value: "id"
                  },
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
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title_doc"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "type"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "sync_hash"
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
                    value: "visible"
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
                        value: "id_hash"
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
                            value: "id"
                          },
                          arguments: [],
                          directives: [{
                            kind: "Directive",
                            name: {
                              kind: "Name",
                              value: "include"
                            },
                            arguments: [{
                              kind: "Argument",
                              name: {
                                kind: "Name",
                                value: "if"
                              },
                              value: {
                                kind: "Variable",
                                name: {
                                  kind: "Name",
                                  value: "sync"
                                }
                              }
                            }]
                          }]
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "keys"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "_translations"
                          },
                          arguments: [],
                          directives: [{
                            kind: "Directive",
                            name: {
                              kind: "Name",
                              value: "include"
                            },
                            arguments: [{
                              kind: "Argument",
                              name: {
                                kind: "Name",
                                value: "if"
                              },
                              value: {
                                kind: "Variable",
                                name: {
                                  kind: "Name",
                                  value: "sync"
                                }
                              }
                            }]
                          }],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "locale"
                              },
                              arguments: [],
                              directives: []
                            }, {
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
            }]
          }
        }],
        loc: {
          start: 0,
          end: 1002
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
        body: "query TinaModulesList($types: [String], $locale: String!) {\n    tinaModulesList(types: $types, locale: $locale) {\n        results {\n            id_hash\n            id\n            title\n            type\n        }\n    }\n}\n\nquery TinaModulesInfo(\n    $ids: [String]!\n    $locale: String!\n    $sync: Boolean = false\n    $cache: Boolean = false\n) {\n    tinaModulesInfo(ids: $ids, locale: $locale, cache: $cache) {\n        id: id_hash\n        title\n        title_doc\n        type\n        sync_hash\n        to\n        visible\n        children {\n            title\n            id_hash\n            to\n            tina {\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n        tina {\n            payload\n            variables {\n                id @include(if: $sync)\n                keys\n                _translations @include(if: $sync) {\n                    locale\n                    keys\n                }\n            }\n        }\n    }\n}\n",
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

      function i(e, a) {
        var t = {
          kind: e.kind,
          definitions: [n(e, a)]
        };
        e.hasOwnProperty("loc") && (t.loc = e.loc);
        var i = s[a] || new Set,
          r = new Set,
          c = new Set;
        for (i.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          t(e, a), s[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesList = i(a, "TinaModulesList"), e.exports.TinaModulesInfo = i(a, "TinaModulesInfo")
    },
    86505: e => {
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
        var i = s[a] || new Set,
          r = new Set,
          c = new Set;
        for (i.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesTree")
    },
    44527: e => {
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
        var i = s[a] || new Set,
          r = new Set,
          c = new Set;
        for (i.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var s = n(e, a);
          s && t.definitions.push(s)
        })), t
      }(a, "TinaModulesTree")
    },
    76807: (e, a, t) => {
      "use strict";
      t.d(a, {
        A: () => s
      });
      const s = {
        pillBtn: "rockstargames-sites-gta-gen9f15ebf4bd284c6bf502680beaff4673f",
        selected: "rockstargames-sites-gta-gen9d256197abeb6fc349fcc27d01f21866e",
        plusButton: "rockstargames-sites-gta-gen9d4a62e4f78c35665195e12dd5a2144f5",
        small: "rockstargames-sites-gta-gen9c2a7ad87320bd484347d2304919b377f",
        btnText: "rockstargames-sites-gta-gen9e4f5dc32465e33ed6130d534797e872d",
        btnTexticon: "rockstargames-sites-gta-gen9c56c801a4897f1a22bb198809026c4af",
        whiteBtn: "rockstargames-sites-gta-gen9e07aef349a8e5e5c36b76566c83c4c79",
        blackBtn: "rockstargames-sites-gta-gen9bbd36af2983e15984f3d2fa86129628f",
        transparentBtn: "rockstargames-sites-gta-gen9faacc07dbc90b60f23c2b5b754f019bb",
        iconBtn: "rockstargames-sites-gta-gen9c0f3776450e9060231d6d337875f9c5b",
        link: "rockstargames-sites-gta-gen9b674c52b22c36a24354be5d90f57b9d4",
        xboxone: "rockstargames-sites-gta-gen9f75f6748656bc069f9d20f9f2183ec6e",
        xboxseriesxs: "rockstargames-sites-gta-gen9ea41ca8dd514fd714b8ed6d951bf006d",
        ps4: "rockstargames-sites-gta-gen9a20ae3e61b8916d13f90dc35e5aaf916",
        ps5: "rockstargames-sites-gta-gen9a2713e909f1d2dff9938b778ee8fd11b",
        pc: "rockstargames-sites-gta-gen9ca151f4cfae57e062233ee5279d44ad4"
      }
    },
    28302: (e, a, t) => {
      "use strict";
      t.r(a), t.d(a, {
        default: () => s
      });
      const s = {
        pillBtn: "rockstargames-sites-gta-gen9c61c7a18f75fc8ad8a63e6ecc2e0038f",
        selected: "rockstargames-sites-gta-gen9b9cd5815545327a81bd18b8d31a24430",
        heroContainer: "rockstargames-sites-gta-gen9de61f9f0fbf4ae3e3b07b26d7c10a639",
        heroVideoWrapper: "rockstargames-sites-gta-gen9d4b7b248ee11d241ed4a5037fcbfb292",
        heroBackgroundImg: "rockstargames-sites-gta-gen9e92c7660caabd22b2f06e10b65ff5973",
        heroVideo: "rockstargames-sites-gta-gen9b85fcf4842e5aa328e802d6d9adbc2f2",
        heroOverlay: "rockstargames-sites-gta-gen9a97e06257d4710e044371f38ce00dccb",
        heroContentWrapper: "rockstargames-sites-gta-gen9ccf0d483e03e6a559024c925f53acb62",
        heroContent: "rockstargames-sites-gta-gen9d5a3173e27bff888207a7723eb2b63a9",
        heroContentImg: "rockstargames-sites-gta-gen9f42b599db347bf5fe648d2378e513fd7",
        heroCTA: "rockstargames-sites-gta-gen9e5850d65d78ee941581350c10927c108",
        heroVideoPlayPauseBtn: "rockstargames-sites-gta-gen9a31a09aae4f84e779f576d40766f35cb"
      }
    },
    85394: (e, a, t) => {
      var s = {
        "./left.svg": 92085,
        "./pc.svg": 65957,
        "./ps4.svg": 71395,
        "./ps5.svg": 33458,
        "./right.svg": 6392,
        "./x.svg": 70930,
        "./xboxone.svg": 30107,
        "./xboxseriesxs.svg": 80237
      };

      function n(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = i, e.exports = n, n.id = 85394
    },
    26002: (e, a, t) => {
      var s = {
        "./assets": 66019,
        "./assets/": 66019,
        "./assets/index": 66019,
        "./assets/index.ts": 66019,
        "./assets/videos/default.mp4": 49202,
        "./assets/videos/vinewood-club.mp4": 98897,
        "./components": 13466,
        "./components/": 13466,
        "./components/index": 13466,
        "./components/index.ts": 13466,
        "./components/pause": 52633,
        "./components/pause/": 52633,
        "./components/pause/index": 52633,
        "./components/pause/index.tsx": 52633,
        "./components/pause/types": 99150,
        "./components/pause/types.ts": 99150,
        "./components/play": 15603,
        "./components/play/": 15603,
        "./components/play/index": 15603,
        "./components/play/index.tsx": 15603,
        "./components/play/types": 35756,
        "./components/play/types.ts": 35756,
        "./hero-video": 52581,
        "./hero-video.less": 28302,
        "./hero-video.test": 17119,
        "./hero-video.test.tsx": 17119,
        "./hero-video.tsx": 52581,
        "./hero-video.utils": 41052,
        "./hero-video.utils.ts": 41052,
        "./tina": 16771,
        "./tina.ts": 16771,
        "./utils": 57863,
        "./utils/": 57863,
        "./utils/get-video-url": 37281,
        "./utils/get-video-url.ts": 37281,
        "./utils/index": 57863,
        "./utils/index.ts": 57863,
        "./utils/is-reduced-motion-preferred": 14111,
        "./utils/is-reduced-motion-preferred.ts": 14111,
        "./utils/video-hero.local-messages": 31269,
        "./utils/video-hero.local-messages.ts": 31269
      };

      function n(e) {
        var a = i(e);
        return t(a)
      }

      function i(e) {
        if (!t.o(s, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = i, e.exports = n, n.id = 26002
    },
    92085: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    65957: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    71395: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    33458: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    6392: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    70930: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    30107: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    80237: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    40844: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    49202: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/video/7cfb24053cf0c7ee3c6454923c53ac28.mp4"
    },
    98897: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/video/f7da4ca1b248290693c7cdfc89b8c369.mp4"
    },
    81018: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1e50aff7a4148673983e493ca815454e.svg"
    },
    14967: () => {}
  }
]);