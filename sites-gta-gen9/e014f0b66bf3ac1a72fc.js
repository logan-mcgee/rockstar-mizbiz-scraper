(self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [388], {
    5565: (e, n, a) => {
      "use strict";
      a.d(n, {
        Z: () => i
      });
      var t = a(5668);
      const i = e => {
        let {
          brands: n = []
        } = e;
        return n.length ? (0, t.jsx)("div", {
          className: "fa7548a67d1d96bae529",
          children: n.map(((e, n) => {
            let {
              brand: a
            } = e;
            return (0, t.jsx)("div", {
              className: "f5b32d0efcce86875ef3",
              brand: a
            }, n)
          }))
        }) : null
      }
    },
    3347: (e, n, a) => {
      "use strict";
      a.d(n, {
        Z: () => d
      });
      var t = a(1163),
        i = a(3830),
        s = a(5668);
      const r = e => {
          let {
            children: n,
            className: a,
            onClick: t,
            style: i
          } = e;
          return (0, s.jsx)("button", {
            className: a,
            onClick: t,
            style: i,
            children: n
          })
        },
        l = e => {
          let {
            children: n,
            className: a,
            onClick: i,
            style: r,
            to: l
          } = e;
          return (0, s.jsx)(t.NavLink, {
            className: a,
            onClick: i,
            style: r,
            to: l,
            children: n
          })
        },
        d = e => {
          let {
            text: n,
            onClick: a,
            btnColor: t = "#fff",
            labelColor: d = "#000",
            type: c = "",
            icon: o,
            size: u,
            secondText: m,
            consoleBtn: v = !1,
            img: f,
            to: b = !1
          } = e;
          const h = [i.Z.plusButton, i.Z[c] ?? "", i.Z[u] ?? "", i.Z[v] ?? ""].join(" "),
            g = {
              "--hvr-color": t ?? d,
              "--hvr-bg-color": d ?? t,
              "--hvr-border-color": t ?? d
            },
            p = (0, s.jsxs)(s.Fragment, {
              children: [f ? (0, s.jsx)("img", {
                src: f
              }) : "", (0, s.jsxs)("div", {
                className: i.Z.btnText,
                icon: o,
                children: [n, m ? (0, s.jsx)("span", {
                  children: m
                }) : ""]
              })]
            });
          if (b) {
            if (b.startsWith("http")) {
              const e = b.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, s.jsx)("span", {
                onClick: a,
                children: (0, s.jsx)("a", {
                  href: b,
                  className: h,
                  target: e,
                  children: p
                })
              })
            }
            return (0, s.jsx)(l, {
              className: h,
              onClick: a,
              style: g,
              to: b,
              children: p
            })
          }
          return (0, s.jsx)(r, {
            className: h,
            onClick: a,
            style: g,
            children: p
          })
        }
    },
    7339: (e, n, a) => {
      "use strict";
      a.d(n, {
        Z: () => r
      });
      var t = a(9542),
        i = a(3347);
      var s = a(5668);
      const r = e => {
        let {
          buttons: n = [],
          className: a
        } = e;
        return n.length ? (0, s.jsx)("div", {
          className: (0, t.classList)("a67c709116a5f4f75e82", a),
          children: n.map(((e, n) => {
            let {
              icon: a,
              to: t,
              title: r
            } = e;
            return r ? (0, s.jsx)(i.Z, {
              className: "white",
              text: r,
              to: t
            }, n) : ""
          }))
        }) : null
      }
    },
    3989: (e, n, a) => {
      "use strict";
      a.d(n, {
        Z: () => g
      });
      var t = a(822),
        i = a(1988),
        s = a(8976),
        r = a(6711),
        l = a(9542),
        d = a(1720),
        c = a(1889),
        o = a(3347);
      const u = {
        buyNowArea: "efcd9567132aac95f154",
        topArea: "fb3daf8cc213c20c1c63",
        btnArea: "cb71eb2277f2f8959b53",
        nextBtn: "fabbb6293e97df616a6d",
        prevBtn: "d0381b4129d767175125",
        card: "aa02ad7590a39a0f968e",
        content: "df7b9bc0c51447f90251",
        contentGrid: "f91570bf2eaa28e2e9ba",
        titleArea: "ccc7fd4ca6767885c3b0",
        platforms: "db10d9156046db2ec4bf",
        addedInfo: "cbb51f2f186585dad18f",
        ctaBtn: "b92affb274fa1d59c710",
        linksArea: "df02feba9f63401c9d24",
        closeBtn: "dc3d2ef3ee813c3f8c7a",
        closeButtonWrapper: "d8da1bb38c84a542824d",
        linkList: "c7eec41dd80691bd8cef",
        bottomText: "a73e84db690d5d7daad2",
        imageGroup: "c73981c709dbcaf563ba",
        imgMobile: "fff781f9e4330b08e27e",
        imgDesktop: "c20a50dab334287d202a",
        responsiveImages: "ca36676f86619286e390",
        backgroundImage: "d734957eefc52e0735a9",
        foregroundImage: "d6dadb070d930bb14ad7"
      };
      var m = a(3830),
        v = a(5668);
      const f = e => {
          let {
            className: n,
            images: a
          } = e;
          const t = (0, l.useGetCdnSource)(a?.mobile?.full_src ?? null),
            i = (0, l.useGetCdnSource)(a?.desktop?.full_src ?? t);
          return (0, v.jsxs)("div", {
            className: [n, u.responsiveImages].join(" "),
            children: [t ? (0, v.jsx)("div", {
              className: u.imgMobile,
              style: {
                background: `url(${t}) no-repeat center/cover`
              }
            }) : "", i ? (0, v.jsx)("div", {
              className: u.imgDesktop,
              style: {
                background: `url(${i}) no-repeat center/cover`
              }
            }) : ""]
          })
        },
        b = e => {
          let {
            addedInfo: n = null,
            buynowbtn: s = null,
            description: l = null,
            images: c,
            links: b = [],
            title: h = null
          } = e;
          const {
            track: g
          } = (0, r.useGtmTrack)(), p = {
            event: "card_click",
            event_category: "card",
            event_action: "click",
            event_label: h?.toLowerCase()
          }, [x, k] = (0, t.useState)(!1), N = {
            type: "spring",
            stiffness: 425,
            damping: 40
          }, j = {
            type: "spring",
            stiffness: 650,
            damping: 45
          }, y = {
            ease: "easeOut",
            duration: .9,
            delay: .3
          }, S = {
            open: {
              opacity: 0,
              transition: {
                ease: "easeOut",
                duration: .3
              }
            },
            closed: {
              opacity: 1,
              transition: y
            }
          }, _ = {
            open: {
              opacity: 1,
              display: "grid",
              height: "auto",
              transition: {
                opacity: y,
                height: N
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
          }, T = {
            open: {
              "--cta-border-color": "var(--white-15)",
              "--cta-background-color": "rgba(255,255,255,.1)",
              "--cta-background-color-noBlur": "var(--black-100)",
              padding: "var(--card-padding)",
              gridGap: "var(--grid-gap-sm)",
              transition: N,
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
              transition: j,
              transitionEnd: {
                "--btn-hover-bg-color": "inherit",
                "--btn-hover-bg-color-noBlur": "inherit",
                "--btn-hover-font-color": "inherit",
                "--btn-hover-border-color": "inherit"
              }
            }
          };
          return (0, v.jsx)(d.o5, {
            children: (0, v.jsxs)("div", {
              className: u.card,
              children: [(0, v.jsxs)("div", {
                className: u.imageGroup,
                children: [(0, v.jsx)(f, {
                  className: u.backgroundImage,
                  images: c?.background
                }), (0, v.jsx)(f, {
                  className: u.foregroundImage,
                  images: c?.foreground
                })]
              }), (0, v.jsxs)("div", {
                className: u.content,
                children: [(0, v.jsxs)(i.E.div, {
                  className: u.contentGrid,
                  animate: x ? "open" : "closed",
                  variants: S,
                  children: [(0, v.jsxs)("div", {
                    className: u.titleArea,
                    children: [(0, v.jsx)("h2", {
                      dangerouslySetInnerHTML: {
                        __html: h
                      }
                    }), (0, v.jsx)("p", {
                      dangerouslySetInnerHTML: {
                        __html: l
                      }
                    })]
                  }), b.length ? (0, v.jsx)("div", {
                    className: u.platforms,
                    children: b.map(((e, n) => (0, v.jsx)("div", {
                      className: u[e.platform],
                      children: e.platform ? (0, v.jsx)("img", {
                        src: a(8369)(`./${e.platform}.svg`),
                        alt: `${e.platform} Button`
                      }) : ""
                    }, `${e.platform+n}`)))
                  }) : ""]
                }), n ? (0, v.jsx)(i.E.p, {
                  className: u.addedInfo,
                  dangerouslySetInnerHTML: {
                    __html: n
                  },
                  animate: x ? "open" : "closed",
                  variants: S
                }) : "", s ? (0, v.jsxs)(i.E.div, {
                  onClick: () => {
                    k(!x), g(p), x || g({
                      event_action: "select_platform",
                      event_category: "cta",
                      event: "select_platform",
                      event_label: h?.toLowerCase()
                    })
                  },
                  className: [u.ctaBtn, m.Z.plusButton].join(" "),
                  animate: x ? "open" : "closed",
                  variants: T,
                  initial: !1,
                  children: [(0, v.jsx)(i.E.div, {
                    className: [u.ctaBtnText, m.Z.btnText].join(" "),
                    children: s
                  }), (0, v.jsxs)(i.E.div, {
                    className: [u.linksArea, x ? u.showLinks : ""].join(" "),
                    animate: x ? "open" : "closed",
                    variants: _,
                    initial: !1,
                    children: [(0, v.jsx)("button", {
                      type: "button",
                      className: u.closeButtonWrapper,
                      onClick: () => {
                        k(!1), g(p), g({
                          event_action: "close",
                          event_category: "select_platform",
                          event: "select_platform",
                          event_label: h?.toLowerCase()
                        })
                      },
                      children: (0, v.jsx)("img", {
                        className: u.closeBtn,
                        src: a(8375),
                        alt: "Close menu button"
                      })
                    }), (0, v.jsx)("div", {
                      className: u.linkList,
                      children: b.length ? b.map(((e, n) => (0, v.jsx)(o.Z, {
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
                      }, `${e.platform+n}`))) : ""
                    })]
                  })]
                }) : ""]
              })]
            })
          })
        };
      b.displayName = "SwiperSlide";
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
        g = s.framer.withFadeIn((0, s.withSimpleErrorBoundary)((e => {
          let {
            cards: n = [],
            bottomText: a,
            topText: i
          } = e;
          const {
            track: s
          } = (0, r.useGtmTrack)();
          return (0, v.jsxs)("div", {
            className: u.buyNowArea,
            children: [(0, v.jsxs)("div", {
              className: u.topArea,
              children: [i ? (0, v.jsx)("h2", {
                children: i
              }) : "", (0, v.jsxs)("div", {
                className: u.btnArea,
                children: [(0, v.jsx)("div", {
                  className: u.prevBtn
                }), (0, v.jsx)("div", {
                  className: u.nextBtn
                })]
              })]
            }), n?.length ? (0, v.jsx)(d.tq, {
              grabCursor: !0,
              navigation: {
                nextEl: `.${u.nextBtn}`,
                prevEl: `.${u.prevBtn}`
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
              modules: [c.W_],
              breakpoints: h,
              children: n.map((e => (0, t.createElement)(b, {
                ...e,
                key: JSON.stringify(e)
              }))) ?? ""
            }) : "", a ? (0, v.jsx)("p", {
              className: u.bottomText,
              children: a
            }) : ""]
          })
        })))
    },
    4383: (e, n, a) => {
      "use strict";
      a.d(n, {
        Z: () => s
      });
      var t = a(9542);
      var i = a(5668);
      const s = e => {
        let {
          disclaimer: n,
          text: a = null,
          title: s,
          className: r = "",
          style: l = {}
        } = e;
        const d = a ?? n?.text ?? null,
          c = s ? `<h5>${s}</h5>${d}` : d;
        return d ? (0, i.jsx)("div", {
          className: (0, t.classList)("df323a339dbf583bc2c5", r),
          dangerouslySetInnerHTML: {
            __html: c
          },
          style: l
        }) : null
      }
    },
    9595: (e, n, a) => {
      "use strict";
      a.d(n, {
        Z: () => l
      });
      var t = a(822),
        i = a(8976),
        s = a(3347);
      var r = a(5668);
      const l = (0, i.withSimpleErrorBoundary)((e => {
        let {
          buttonTxt: n,
          description: a,
          disclaimer: i,
          faqList: l = [],
          initialLength: d = 6,
          addedLength: c = 6,
          title: o,
          tinaModulesInfo: u
        } = e;
        const [m, v] = (0, t.useState)(d);
        return (0, r.jsxs)("div", {
          className: "b3509cdab40e95e26002",
          children: [(0, r.jsxs)("div", {
            className: "efce021b52132a4fe087",
            children: [(0, r.jsxs)("div", {
              children: [(0, r.jsx)("h3", {
                children: u?.[0]?.title ?? o
              }), (0, r.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: a
                }
              })]
            }), (0, r.jsx)("div", {
              className: "e07164a79464876f4bde",
              children: l.length ? l.slice(0, m).map(((e, n) => {
                let {
                  question: a,
                  answer: t
                } = e;
                return (0, r.jsxs)("details", {
                  children: [(0, r.jsx)("summary", {
                    children: a
                  }), (0, r.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: t
                    }
                  })]
                }, n)
              })) : ""
            }), l.length > m ? (0, r.jsx)(s.Z, {
              onClick: () => v(m + c),
              text: n
            }) : ""]
          }), (0, r.jsx)("div", {
            className: "d8d021028ace4c8cb7a2",
            dangerouslySetInnerHTML: {
              __html: i
            }
          })]
        })
      }))
    },
    213: (e, n, a) => {
      "use strict";
      a.d(n, {
        Z: () => s
      });
      var t = a(8130);
      var i = a(5668);
      const s = e => {
        let {
          children: n,
          style: a
        } = e;
        return (0, i.jsx)(t.E, {
          children: (0, i.jsx)("div", {
            className: "fafb0bfa8877f0bd98dd",
            style: a,
            "data-type": "guide",
            children: (0, i.jsx)("div", {
              className: "f996fd45d04119fb2ddc",
              children: n
            })
          })
        })
      }
    },
    6606: (e, n, a) => {
      "use strict";
      a.d(n, {
        Z: () => o
      });
      var t = a(822),
        i = a(735),
        s = a.n(i),
        r = a(8976),
        l = a(559);
      var d = a(5668);
      const c = e => {
          let {
            guide: n
          } = e, a = {
            hero: {}
          };
          s().cloneDeepWith(n, ((e, n) => {
            "images" === n && (a = e)
          }));
          const {
            src: t
          } = (0, l.useImageParser)(a?.thumb ?? {});
          return (0, d.jsx)("div", {
            className: "a02afa3a30a4c2daecb9",
            children: (0, d.jsxs)(r.A, {
              to: n.to,
              children: [(0, d.jsx)("div", {
                style: {
                  "--aspect-ratio": 1,
                  background: `url(${t?.mobile}) no-repeat center/cover`
                }
              }), (0, d.jsx)("h4", {
                children: n.title
              })]
            })
          })
        },
        o = e => {
          let {
            guides: n = {},
            tinaModulesInfo: a,
            title: i
          } = e;
          const l = s().map(n, "guide_id"),
            o = (0, r.useTinaModuleFetchByIds)({
              ids: l
            }),
            [u, m] = (0, t.useState)(null);
          return (0, t.useEffect)((() => {
            const e = o?.map(((e, n) => (0, d.jsx)(c, {
              guide: e
            }, n)));
            m(e)
          }), [o]), (0, d.jsx)(r.Gen9CoreCarousel, {
            size: "lg",
            slideChildren: u,
            title: a?.[0]?.title ?? i
          })
        }
    },
    628: (e, n, a) => {
      "use strict";
      a.d(n, {
        Z: () => o
      });
      var t = a(9542),
        i = a(1163),
        s = a(4859),
        r = a(7764);
      a(1388);
      var l = a(5668);
      const d = () => {
          let e;
          const {
            guideId: n
          } = (0, i.useParams)(), {
            data: a
          } = (0, s.useQuery)(r.TinaModulesTree, {
            variables: {
              id: n
            },
            skip: !n
          });
          if (!n) return null;
          const t = a?.tinaModulesTree?.[0]?.tree ?? null;
          return t ? (e = t.map((e => {
            let {
              title: n
            } = e;
            return n
          })).join("<span></span>"), e ? (0, l.jsx)("div", {
            className: "ccc9a48ce26a7f8eccfa",
            dangerouslySetInnerHTML: {
              __html: `Guides<span></span>${e}`
            }
          }) : null) : null
        },
        c = e => {
          let {
            hero: n
          } = e;
          const {
            alt: a,
            src: i = {}
          } = (0, t.useImageParser)(n) ?? {}, {
            mobile: s
          } = i;
          if (s) return (0, l.jsx)("div", {
            "aria-label": a,
            className: "d029521293f260e2e565",
            role: "img",
            style: {
              background: `url(${s}) no-repeat center/contain`
            }
          })
        },
        o = e => {
          let {
            blurb: n,
            hero: a,
            title: t
          } = e;
          return (0, l.jsxs)(l.Fragment, {
            children: [a ? (0, l.jsx)(c, {
              hero: a
            }) : "", (0, l.jsxs)("div", {
              className: "bff4125d94bb6017f533",
              children: [(0, l.jsx)(d, {}), (0, l.jsx)("h1", {
                children: t
              }), n && (0, l.jsx)("span", {
                className: "e4ef31aad749a9acd084",
                dangerouslySetInnerHTML: {
                  __html: n
                }
              })]
            })]
          })
        }
    },
    2814: (e, n, a) => {
      "use strict";
      a.d(n, {
        Z: () => h
      });
      var t = a(822),
        i = a(1163),
        s = a(735),
        r = a.n(s),
        l = a(1988),
        d = a(8976),
        c = a(1388);
      const o = {
        guideNav: "fafeb1bf08103794f39f",
        headerHidden: "b6d7b06f062c246fa382",
        guideList: "ef07d6110417298701b2",
        activeSection: "ce841afb83b64686ea9e",
        guideLinkCurrent: "fabf9908f285fcf97596",
        guide: "ca53bde09b5900585bda",
        sections: "e3ef1dcb43d473bdd596"
      };
      var u = a(5668);
      const m = {
          ease: "easeInOut",
          duration: .3
        },
        v = {
          closed: {
            opacity: 0,
            height: "0px"
          },
          open: {
            opacity: 1,
            height: "auto"
          }
        },
        f = e => {
          let {
            sections: n
          } = e;
          const [a] = (0, i.useSearchParams)(), {
            state: t
          } = (0, c.MB)(), {
            activeSection: s
          } = t, r = (e, n) => n !== s ? s === e : n === e;
          return (0, u.jsx)("div", {
            className: o.sections,
            children: n?.map((e => {
              let {
                id_hash: n,
                title: t,
                to: i
              } = e;
              return (0, u.jsx)(d.A, {
                to: i,
                className: r(n, a.get("section")) ? o.activeSection : "",
                children: t
              }, i)
            }))
          })
        },
        b = e => {
          let {
            currentId: n,
            group: a
          } = e;
          const [i, s] = (0, t.useState)(null), [b, h] = (0, t.useState)(null), {
            state: g
          } = (0, c.MB)(), {
            activeSection: p
          } = g;
          return (0, t.useEffect)((() => {
            const e = r().findIndex(a?.children, (e => {
              let {
                id_hash: a
              } = e;
              return a === n
            }));
            h(e), s(-1 !== e)
          }), [n, p, a]), (0, u.jsxs)("div", {
            className: o.guideList,
            children: [(0, u.jsx)("button", {
              type: "button",
              onClick: () => s(!i),
              children: a.title
            }), (0, u.jsx)(l.E.nav, {
              animate: i ? "open" : "closed",
              variants: v,
              transition: m,
              children: a?.children?.map(((e, a) => {
                let {
                  children: t,
                  id_hash: i,
                  title: s,
                  to: r
                } = e;
                return (0, u.jsxs)("div", {
                  className: o.guide,
                  children: [(0, u.jsx)(d.A, {
                    className: [o.guideLink, n === i ? o.guideLinkCurrent : ""].join(" "),
                    to: r,
                    children: s
                  }), a === b && t?.length ? (0, u.jsx)(f, {
                    sections: t
                  }) : ""]
                }, s)
              }))
            })]
          })
        },
        h = e => {
          let {
            currentId: n
          } = e;
          const a = (0, c.yv)(),
            {
              state: {
                headerHeight: t,
                headerHidden: i
              }
            } = (0, c.MB)();
          return (0, u.jsx)("div", {
            className: [o.guideNav, i ? o.headerHidden : ""].join(" "),
            style: {
              "--header-height": `${t}px`
            },
            children: a?.map((e => (0, u.jsx)(b, {
              currentId: n,
              group: e
            }, e.id_hash)))
          })
        }
    },
    9860: (e, n, a) => {
      "use strict";
      a.d(n, {
        Z: () => l
      });
      var t = a(822),
        i = a(1961),
        s = a(1388);
      var r = a(5668);
      const l = e => {
        let {
          style: n,
          children: a,
          __anchor: l = null
        } = e;
        const {
          announcePresence: d
        } = (0, s.aQ)(), {
          ref: c,
          inView: o
        } = (0, i.YD)({
          rootMargin: "0px 0px -700px 0px",
          threshold: 0,
          delay: 850
        });
        return (0, t.useEffect)((() => {
          d(l)
        }), [l]), (0, t.useEffect)((() => {
          o && d(l)
        }), [o]), (0, r.jsx)("span", {
          style: n,
          className: "d49366acea7b328026c0",
          name: l,
          ref: c,
          children: a
        })
      }
    },
    1890: (e, n, a) => {
      "use strict";
      a.d(n, {
        Z: () => T
      });
      var t = a(822),
        i = a(1163),
        s = a(8976),
        r = a(6711),
        l = a(9929),
        d = a(3657),
        c = a(3347),
        o = a(735),
        u = a.n(o),
        m = a(1388);
      const v = {
        gen9Nav: "a616477b6a6e1ed0f6ac",
        activeLink: "c4fca99870c4faa1f18d",
        subNav: "cb4e7d61fd6679fb7a1e",
        subNavOpen: "ff7acb2b4e6eb0468800",
        navGroup: "b1c7e7a170e8c7982809",
        subNavUnder: "f5524031d9fa9c37eeb5",
        subNavRight: "c13b50d941584d4e3152"
      };
      var f = a(5668);
      const b = e => {
          let {
            activeExact: n = !1,
            to: a,
            title: i,
            under: r = !0,
            childModules: l = [],
            t: d
          } = e;
          const [c, o] = (0, t.useState)(!1), m = u().debounce((() => {
            o(!1)
          }), 250), h = (0, t.useCallback)((() => {
            m?.cancel(), o(!0)
          }), [m]);
          return (0, f.jsxs)("div", {
            className: v.navGroup,
            onMouseEnter: h,
            onMouseLeave: m,
            onKeyUp: h,
            onClick: () => o(!1),
            role: "button",
            tabIndex: 0,
            children: [a ? (0, f.jsx)(s.A, {
              end: n,
              to: a,
              target: a.startsWith("http") ? "_blank" : "_self",
              className: e => {
                let {
                  isActive: n
                } = e;
                return n ? v.activeLink : null
              },
              children: d(i)
            }) : (0, f.jsx)("button", {
              type: "button",
              children: d(i)
            }), l?.length ? (0, f.jsx)("div", {
              className: [v.subNav, r ? v.subNavUnder : v.subNavRight, c ? v.subNavOpen : ""].join(" "),
              children: l?.map((e => (0, f.jsx)(b, {
                under: !1,
                ...e,
                t: d
              }, e?.title)))
            }) : ""]
          })
        },
        h = (0, l.withTranslations)((e => {
          let {
            t: n
          } = e;
          const a = (0, m.YM)();
          return (0, f.jsx)("nav", {
            className: v.gen9Nav,
            children: a.map((e => {
              let {
                children: a,
                to: t,
                ...i
              } = e;
              return (0, f.jsx)(b, {
                childModules: a,
                to: t,
                t: n,
                ...i
              }, t)
            }))
          })
        }));
      var g = a(8440),
        p = a(1988),
        x = a(1458);
      const k = {
          closed: {
            d: "M3 12H21"
          },
          open: {
            d: "M3 12H21"
          }
        },
        N = {
          closed: {
            d: "M3 18H21"
          },
          open: {
            d: "M3 12H21"
          }
        },
        j = {
          closed: {
            d: "M3 6H21"
          },
          open: {
            d: "M3 12H21"
          }
        },
        y = {
          stroke: "white",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          transition: {
            duration: .2
          }
        },
        S = () => {
          const {
            state: {
              mobileNavOpen: e
            },
            setMobileNavOpen: n
          } = (0, m.MB)(), {
            navOpen: a,
            setNavOpen: i
          } = (0, x.useRockstarUser)(), s = (0, g._)(), r = (0, g._)(), l = (0, g._)();
          return (0, t.useEffect)((() => {
            !0 === a && !0 === e && n(!1)
          }), [a]), (0, t.useEffect)((() => {
            s.start(e ? k.open : k.closed), r.start(e ? N.open : N.closed), l.start(e ? j.open : j.closed)
          }), [e]), (0, f.jsxs)("svg", {
            className: "b1179e089e89383904b2",
            onClick: () => (async () => {
              n(!e), !0 === a && i(!1)
            })(),
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: [(0, f.jsx)(p.E.path, {
              ...j.closed,
              ...y,
              animate: l
            }), (0, f.jsx)(p.E.path, {
              ...N.closed,
              ...y,
              animate: r
            }), (0, f.jsx)(p.E.path, {
              ...k.closed,
              ...y,
              animate: s
            })]
          })
        },
        _ = {
          gen9Header: "d7c271f94626a35ab9e8",
          headerHidden: "d47f3266f70158f40c19",
          content: "ea23ee47c231cf87cc38",
          "content--child": "a6016e70e686815bfbe0",
          branding: "fb19a5e6f94b3c1e56a7",
          rockstarLogo: "cbe1d286e879768be4f4",
          glitch: "d0c0a2c4a3c014726f08",
          glitch2: "cd4305b4ae6a053a5a4a",
          logoDivider: "fc35bda511ece88a1b5e",
          brandLogo: "ebb800e1f0823cbb6d54",
          buttonArea: "e517a992627baad1ae35",
          navBtn: "afd960f93c5b83b94948"
        },
        T = (0, l.withTranslations)((e => {
          let {
            t: n
          } = e;
          const {
            state: {
              brand: a,
              headerHidden: l,
              mobileNavOpen: o
            },
            setHeaderHeight: u,
            setHeaderHidden: v,
            setMobileNavOpen: b
          } = (0, m.MB)(), g = (0, t.useRef)(), {
            track: p
          } = (0, r.useGtmTrack)(), [, x] = (0, i.useSearchParams)(), {
            pathname: k
          } = (0, i.useLocation)(), {
            freezeUserShouldSeeMore: N,
            userShouldSeeMore: j
          } = (0, d.useScroll)(), [y, T] = (0, t.useState)(0), C = () => y > 1023;
          return (0, t.useEffect)((() => {
            o || N || v(j)
          }), [N, o, j]), (0, t.useEffect)((() => {
            b(!1)
          }), [k]), (0, t.useEffect)((() => {
            o && v(!1)
          }), [o]), (0, t.useEffect)((() => {
            const e = () => {
              g.current && u(g.current.clientHeight), T(window.innerWidth)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [g]), (0, f.jsx)("header", {
            className: [_.gen9Header, l ? _.headerHidden : ""].join(" "),
            ref: g,
            children: (0, f.jsxs)("div", {
              className: _.content,
              children: [(0, f.jsxs)("div", {
                className: _.branding,
                "data-brand": a,
                children: [(0, f.jsx)(s.A, {
                  className: _.rockstarLogo,
                  to: "../"
                }), (0, f.jsx)("div", {
                  className: _.logoDivider
                }), C() && (0, f.jsx)("div", {
                  className: _.brandLogo
                }), (0, f.jsx)(S, {})]
              }), !C() && (0, f.jsx)("div", {
                className: _.brandLogo,
                "data-brand": a
              }), (0, f.jsx)(h, {}), (0, f.jsx)("div", {
                className: _.buttonArea,
                children: (0, f.jsxs)("div", {
                  className: _.navBtn,
                  children: [!(y < 768) && (0, f.jsx)(c.Z, {
                    text: n("Buy Now"),
                    type: "transparentBtn",
                    size: "small",
                    onClick: () => {
                      x({
                        info: "order"
                      }), p({
                        event_action: "buy",
                        event_category: "cta",
                        event: "cta_buy",
                        event_label: "header",
                        text: n("Buy Now").toLowerCase()
                      })
                    }
                  }), (0, f.jsx)(r.MenuButton, {})]
                })
              })]
            })
          })
        }))
    },
    8388: (e, n, a) => {
      "use strict";
      a.d(n, {
        Z: () => c
      });
      var t = a(8976),
        i = a(9542),
        s = a(7339),
        r = a(5565),
        l = a(4383);
      var d = a(5668);
      const c = t.framer.withFadeIn((e => {
        let {
          brands: n = [],
          content: a,
          ctas: t = [],
          disclaimer: c,
          image: o,
          large: u = !1,
          title: m,
          image_on_right: v = !1,
          style: f = {},
          className: b = ""
        } = e;
        const h = (0, i.useGetCdnSource)(o?.full_src ?? null) ?? null;
        return (0, d.jsxs)("div", {
          className: (0, i.classList)("f2cf909dbf3361ec8d57", u ? "c950136646fbbd777bb5" : "", v ? "e6f94a3e17e22b45f308" : "", h ? "" : "cea3e99427bd215be499", b),
          style: f,
          children: [h ? (0, d.jsx)("div", {
            className: "bcdbc4cde7375da50995",
            style: {
              background: `url(${h}) no-repeat center/cover`
            }
          }) : "", (0, d.jsxs)("div", {
            className: "c5071baf77e4a94ee8fc",
            children: [(0, d.jsx)(r.Z, {
              brands: n
            }), (0, d.jsxs)("div", {
              className: "f494a7678754ce53146a",
              children: [(0, d.jsx)("div", {
                className: "e220a2dcd44c8fc8da2e",
                children: m
              }), a ? (0, d.jsx)("div", {
                className: "ccc4915c23b879942955",
                dangerouslySetInnerHTML: {
                  __html: a
                }
              }) : ""]
            }), (0, d.jsx)(s.Z, {
              ctas: t
            }), (0, d.jsx)(l.Z, {
              disclaimer: c
            })]
          })]
        })
      }))
    },
    4268: (e, n, a) => {
      "use strict";
      a.d(n, {
        Z: () => l
      });
      var t = a(9542),
        i = a(8388);
      const s = {
        imageTextGroupGroup: "fa256a3137bdd2fa57fc",
        bg: "cdba5b54a8d9de138a27",
        bgMobile: "c5eb13f304cc530611c3",
        bgDesktop: "d2094248c0a2dbe4ea2e"
      };
      var r = a(5668);
      const l = e => {
        let {
          bg: n,
          image_text_groups: a = [],
          style: l = {},
          className: d = ""
        } = e;
        const c = (0, t.useGetCdnSource)(n?.image?.mobile?.full_src ?? null),
          o = (0, t.useGetCdnSource)(n?.image?.desktop?.full_src ?? null) ?? c;
        return a.length ? (0, r.jsxs)("div", {
          className: (0, t.classList)(s.imageTextGroupGroup, d),
          style: {
            ...l
          },
          children: [c ? (0, r.jsx)("div", {
            className: [s.bgMobile, s.bg].join(" "),
            style: {
              background: `url(${c}) no-repeat center/cover`
            }
          }) : "", o ? (0, r.jsx)("div", {
            className: [s.bgDesktop, s.bg].join(" "),
            style: {
              background: `url(${o}) no-repeat center/cover`
            }
          }) : "", a.map(((e, n) => (0, r.jsx)(i.Z, {
            ...e
          }, n)))]
        }) : null
      }
    },
    7456: (e, n, a) => {
      "use strict";
      a.d(n, {
        Z: () => l
      });
      var t = a(8976),
        i = a(9542);
      const s = {
        linkoutSection: "f16a28b8596593e62188",
        cta: "e44235a0e32de93918e3"
      };
      var r = a(5668);
      const l = e => {
        let {
          text: n,
          cta: l,
          to: d,
          className: c = "",
          style: o = {}
        } = e;
        return (0, r.jsxs)(t.A, {
          className: (0, i.classList)(s.linkoutSection, c),
          to: d,
          style: o,
          children: [n && (0, r.jsx)("div", {
            className: s.text,
            children: n
          }), l && (0, r.jsxs)("div", {
            className: s.cta,
            children: [l, " ", (0, r.jsx)("img", {
              src: a(928)
            })]
          })]
        })
      }
    },
    1273: (e, n, a) => {
      "use strict";
      a.d(n, {
        Z: () => s
      });
      var t = a(822);
      var i = a(5668);
      const s = e => {
        let {
          children: n,
          style: a,
          theme: s
        } = e;
        const [r, l] = (0, t.useState)(s);
        return (0, t.useEffect)((() => {
          s && l(s)
        }), [s]), (0, i.jsx)("div", {
          className: "cce3c47240f1835b9e3d",
          style: a,
          "data-theme": r,
          children: n
        })
      }
    },
    1079: (e, n, a) => {
      "use strict";
      a.d(n, {
        Z: () => r
      });
      var t = a(4224),
        i = a.n(t),
        s = a(5668);
      const r = e => {
        let {
          id: n
        } = e;
        return (0, s.jsx)("div", {
          children: (0, s.jsx)(i(), {
            autoplay: !0,
            context: "embed",
            id: n,
            endBehavior: "stillframe",
            wrapper: !1
          })
        })
      }
    },
    1919: (e, n, a) => {
      "use strict";
      a.r(n), a.d(n, {
        BrandMessage: () => s,
        BuyNow: () => r.Z,
        ClaimCountdown: () => l,
        Disclaimer: () => d.Z,
        FAQ: () => c.Z,
        Guide: () => o.Z,
        GuideGroup: () => u.Z,
        GuideIntro: () => m.Z,
        GuideNavDesktop: () => v.Z,
        GuideSection: () => f.Z,
        Header: () => b.Z,
        Hero: () => S,
        ImageTextGroup: () => _.Z,
        ImageTextGroupGroup: () => T.Z,
        LinkoutSection: () => C.Z,
        Logo: () => w,
        SectionTitle: () => M,
        TinaWrapper: () => B.Z,
        VideoPlayerWrapper: () => L.Z
      });
      var t = a(5565);
      var i = a(5668);
      const s = e => {
        let {
          brand: n,
          headline_left: a,
          headline_right: s,
          info: r
        } = e;
        return (0, i.jsxs)("div", {
          className: "b94144341266bb5d0222",
          children: [(0, i.jsx)(t.Z, {
            brands: [{
              brand: n
            }]
          }), (0, i.jsxs)("div", {
            className: "de1a4b6a97abe3325a0f",
            children: [(0, i.jsxs)("h2", {
              children: [a, " ", (0, i.jsx)("span", {
                children: s
              })]
            }), (0, i.jsx)("p", {
              children: r
            })]
          })]
        })
      };
      var r = a(3989);
      const l = e => {
        let {
          left: n,
          right: a
        } = e;
        return (0, i.jsx)("div", {
          className: "e17095a50c41fd5df54d",
          children: (0, i.jsxs)("h2", {
            children: [n, " ", (0, i.jsx)("span", {
              children: a
            })]
          })
        })
      };
      var d = a(4383),
        c = a(9595),
        o = a(213),
        u = a(6606),
        m = a(628),
        v = a(2814),
        f = a(9860),
        b = a(1890),
        h = a(822),
        g = a(8976),
        p = a(1988),
        x = a(9542),
        k = a(7339);
      const N = {
          hero: "a0f6b93713c9d011ae7c",
          images: "e2dab39e6c5126668804",
          background: "e0c9e6463db26150996b",
          gradient: "ab26f2cd9dd3ebeca597",
          layered: "f0e0bb0c942263435ce1",
          content: "f404637179268d90cf59",
          descriptions: "f72ff60779d574ab22f5",
          buttonGroup: "ebbfc5e086cae60bf93a",
          legalText: "aaf6cb52ad427d9e4073",
          shardsCarousel: "dba85fe900bdfcb976a9"
        },
        j = e => {
          let {
            title: n = "",
            mobileImg: a,
            desktopImg: t
          } = e;
          const s = (0, x.useGetCdnSource)(a ?? null),
            r = (0, x.useGetCdnSource)(t ?? s);
          return (0, i.jsx)("div", {
            className: N.shard,
            style: {
              "--background-image-mobile": `url(${s})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, i.jsx)("h5", {
              children: n
            })
          })
        },
        y = e => {
          let {
            title: n = "Membership Rewards",
            shards: a
          } = e;
          const [t, s] = (0, h.useState)(null);
          return (0, h.useEffect)((() => {
            a && s(a.map((e => {
              if (!e?.shardImg) return;
              const {
                title: n,
                shardImg: a
              } = e, {
                mobile: t,
                desktop: s
              } = a;
              return (0, i.jsx)(j, {
                title: n,
                mobileImg: t?.full_src,
                desktopImg: s?.full_src
              })
            })))
          }), [a]), t ? (0, i.jsx)("div", {
            className: N.shardsCarousel,
            children: (0, i.jsx)(g.Gen9CoreCarousel, {
              title: n,
              slideChildren: t,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        S = e => {
          let {
            brands: n = [],
            backgroundImg: a,
            layeredImg: s,
            ctas: r = [],
            expandingButtonLabel: l = "Subscribe",
            platformsAndLinks: d = [],
            description: c,
            title: o,
            legalText: u,
            shardsSection: m = {},
            className: v
          } = e;
          const f = (0, x.useGetCdnSource)(a?.mobile?.full_src ?? null),
            b = (0, x.useGetCdnSource)(a?.desktop?.full_src ?? f),
            h = (0, x.useGetCdnSource)(s?.mobile?.full_src ?? null),
            j = (0, x.useGetCdnSource)(s?.desktop?.full_src ?? h),
            S = {
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
            _ = {
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
            className: (0, x.classList)(N.hero, v),
            style: {
              "--background-image-desktop": `url(${b})`,
              "--background-image-mobile": `url(${f})`,
              "--layered-image-desktop": `url(${j})`,
              "--layered-image-mobile": `url(${h})`
            },
            initial: "hidden",
            animate: "visible",
            variants: S,
            children: [(0, i.jsxs)("div", {
              className: N.images,
              children: [b && f ? (0, i.jsx)("div", {
                className: N.background,
                style: a?.style ?? {}
              }) : "", h && j ? (0, i.jsx)("div", {
                className: N.layered
              }) : "", (0, i.jsx)("div", {
                className: N.gradient
              })]
            }), (0, i.jsxs)(p.E.div, {
              className: N.content,
              initial: "hidden",
              animate: "visible",
              variants: S,
              children: [(0, i.jsx)(p.E.div, {
                variants: _,
                children: (0, i.jsx)(t.Z, {
                  brands: n
                })
              }), d.length ? (0, i.jsx)(p.E.div, {
                variants: _,
                children: (0, i.jsx)(g.ExpandingPlatformButton, {
                  buttonText: l,
                  platformsAndLinks: d,
                  children: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(p.E.div, {
                      className: N.descriptions,
                      variants: _,
                      children: [(0, i.jsx)("h2", {
                        dangerouslySetInnerHTML: {
                          __html: o
                        }
                      }), (0, i.jsx)("p", {
                        dangerouslySetInnerHTML: {
                          __html: c
                        }
                      })]
                    }), (0, i.jsx)(p.E.div, {
                      variants: _,
                      children: (0, i.jsx)(k.Z, {
                        buttons: r,
                        className: N.buttonGroup
                      })
                    })]
                  })
                })
              }) : (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsxs)(p.E.div, {
                  className: N.descriptions,
                  variants: _,
                  children: [(0, i.jsx)("h2", {
                    dangerouslySetInnerHTML: {
                      __html: o
                    }
                  }), (0, i.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: c
                    }
                  })]
                }), (0, i.jsx)(p.E.div, {
                  variants: _,
                  children: (0, i.jsx)(k.Z, {
                    buttons: r,
                    className: N.buttonGroup
                  })
                })]
              }), u && (0, i.jsx)(p.E.div, {
                className: N.legalText,
                variants: _,
                children: (0, i.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: u
                  }
                })
              })]
            }), m?.shards && (0, i.jsx)(y, {
              ...m
            })]
          })
        };
      var _ = a(8388),
        T = a(4268),
        C = a(7456);
      const E = {},
        w = e => {
          let {
            brand: n
          } = e;
          return (0, i.jsx)("div", {
            className: E[n]
          })
        },
        M = () => (0, i.jsx)("h2", {
          children: "Section"
        });
      var B = a(1273),
        L = a(1079)
    },
    1388: (e, n, a) => {
      "use strict";
      a.d(n, {
        MB: () => s,
        aQ: () => r.a,
        yv: () => d,
        YM: () => o
      });
      var t = a(4859);
      const i = (0, t.makeVar)({
          brand: null,
          headerHeight: 0,
          headerHidden: !1,
          mobileNavOpen: !1,
          activeSection: null
        }),
        s = () => {
          const e = (0, t.useReactiveVar)(i),
            n = e => {
              const n = {
                ...i(),
                ...e
              };
              i(n)
            };
          return {
            state: e,
            setBrand: e => {
              n({
                brand: e
              })
            },
            setHeaderHeight: e => {
              n({
                headerHeight: e
              })
            },
            setHeaderHidden: e => {
              n({
                headerHidden: e
              })
            },
            setMobileNavOpen: e => {
              n({
                mobileNavOpen: e
              })
            },
            setActiveSection: e => {
              n({
                activeSection: e
              })
            }
          }
        };
      var r = a(8130),
        l = a(6177);
      const d = () => {
        const {
          data: e
        } = (0, t.useQuery)(l.TinaModulesTree, {
          variables: {
            type: "gen9-guide-group"
          }
        });
        return e?.tinaModulesTree ?? null
      };
      var c = a(822);
      a(735), a(548);
      const o = () => {
        const [e, n] = (0, c.useState)([{
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
      a(6711), a(5649)
    },
    8130: (e, n, a) => {
      "use strict";
      a.d(n, {
        E: () => o,
        a: () => c
      });
      var t = a(822),
        i = a(1163),
        s = a(3657),
        r = a(1388),
        l = a(5668);
      const d = (0, t.createContext)(),
        c = () => (0, t.useContext)(d),
        o = e => {
          let {
            children: n
          } = e;
          const [a, c] = (0, t.useState)(null), [o] = (0, i.useSearchParams)(), {
            setActiveSection: u,
            state: m
          } = (0, r.MB)(), {
            activeSection: v
          } = m, {
            pauseUserShouldSeeMore: f
          } = (0, s.useScroll)(), b = (0, t.useCallback)((e => {
            if (e !== o.get("section")) return void(e !== v && u(e));
            const n = document.getElementsByName(o.get("section"))?.[0];
            n && (f(), u(o.get("section")), n.scrollIntoView({
              behavior: "smooth"
            }))
          }), [o.get("section"), a]);
          (0, t.useEffect)((() => {
            o.get("section") && b(o.get("section"))
          }), [o.get("section")]);
          const h = (0, t.useMemo)((() => ({
            announcePresence: b,
            section: a,
            setSection: c
          })), [b, a, c]);
          return (0, l.jsx)(d.Provider, {
            value: h,
            children: n
          })
        }
    },
    548: (e, n, a) => {
      "use strict";
      a.r(n), a.d(n, {
        componentsForTinaParser: () => p,
        componentsForTinaParserGuide: () => x
      });
      var t = a(8976),
        i = a(2672),
        s = a(420),
        r = a.n(s),
        l = a(3989),
        d = a(4383),
        c = a(9595),
        o = a(213),
        u = a(6606),
        m = a(628),
        v = a(9860),
        f = a(4268),
        b = a(7456),
        h = a(1273),
        g = a(1919);
      const p = {
          CalloutSection: t.CalloutSection,
          Card: i.Card,
          CardWithImageGallery: i.CardWithImageGallery,
          ConditionalBlock: t.ConditionalBlock,
          ExpandingPlatformButton: t.ExpandingPlatformButton,
          TextCard: i.TextCard,
          Deck: i.Deck,
          Grid: t.Grid,
          Hero: t.Hero,
          HTMLElement: t.HTMLElement,
          UnorderedList: t.UnorderedList,
          ImageWithBadge: t.ImageWithBadge,
          Carousel: t.Carousel,
          GroupOfItems: r(),
          Rating: t.Rating,
          gen9: g,
          TinaModuleFetchNRender: t.TinaModuleFetchNRender
        },
        x = {
          CalloutSection: t.CalloutSection,
          Card: i.Card,
          CardWithImageGallery: i.CardWithImageGallery,
          ConditionalBlock: t.ConditionalBlock,
          Carousel: t.Carousel,
          ExpandingPlatformButton: t.ExpandingPlatformButton,
          Hero: t.Hero,
          Grid: t.Grid,
          TextCard: i.TextCard,
          Deck: i.Deck,
          GroupOfItems: r(),
          gen9: {
            BuyNow: l.Z,
            Disclaimer: d.Z,
            FAQ: c.Z,
            Guide: o.Z,
            GuideGroup: u.Z,
            GuideIntro: m.Z,
            GuideSection: v.Z,
            Hero: t.Hero,
            ImageTextGroupGroup: f.Z,
            LinkoutSection: b.Z,
            TinaWrapper: h.Z,
            UserVote: () => null
          },
          HTMLElement: t.HTMLElement,
          UnorderedList: t.UnorderedList,
          ImageWithBadge: t.ImageWithBadge,
          Rating: t.Rating,
          TinaModuleFetchNRender: t.TinaModuleFetchNRender,
          UserVote: t.UserVote
        }
    },
    7764: e => {
      var n = {
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

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && n.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: "query TinaModulesTree($id: String, $locale: String!) {\n    tinaModulesTree(id: $id, locale: $locale) {\n        tree {\n            title\n            children {\n                title\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function i(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var t = e.definitions[a];
          if (t.name && t.name.value == n) return t
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), t[e.name.value] = n
        }
      })), e.exports = n, e.exports.TinaModulesTree = function(e, n) {
        var a = {
          kind: e.kind,
          definitions: [i(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var s = t[n] || new Set,
          r = new Set,
          l = new Set;
        for (s.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return r.forEach((function(n) {
          var t = i(e, n);
          t && a.definitions.push(t)
        })), a
      }(n, "TinaModulesTree")
    },
    6177: e => {
      var n = {
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

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && n.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: "query TinaModulesTree($type: String, $locale: String!) {\n    tinaModulesTree(type: $type, locale: $locale) {\n        title\n        id_hash\n        children {\n            title\n            to\n            id_hash\n            children {\n                title\n                to\n                id_hash\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function i(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var t = e.definitions[a];
          if (t.name && t.name.value == n) return t
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), t[e.name.value] = n
        }
      })), e.exports = n, e.exports.TinaModulesTree = function(e, n) {
        var a = {
          kind: e.kind,
          definitions: [i(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var s = t[n] || new Set,
          r = new Set,
          l = new Set;
        for (s.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return r.forEach((function(n) {
          var t = i(e, n);
          t && a.definitions.push(t)
        })), a
      }(n, "TinaModulesTree")
    },
    5649: e => {
      var n = {
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

      function a(e, n) {
        if ("FragmentSpread" === e.kind) n.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && n.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, n)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, n)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, n)
        }))
      }
      n.loc.source = {
        body: "query TinaModulesTree($id: String, $locale: String!) {\n    tinaModulesTree(id: $id, locale: $locale) {\n        tree {\n            title\n            children {\n                title\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var t = {};

      function i(e, n) {
        for (var a = 0; a < e.definitions.length; a++) {
          var t = e.definitions[a];
          if (t.name && t.name.value == n) return t
        }
      }
      n.definitions.forEach((function(e) {
        if (e.name) {
          var n = new Set;
          a(e, n), t[e.name.value] = n
        }
      })), e.exports = n, e.exports.TinaModulesTree = function(e, n) {
        var a = {
          kind: e.kind,
          definitions: [i(e, n)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var s = t[n] || new Set,
          r = new Set,
          l = new Set;
        for (s.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return r.forEach((function(n) {
          var t = i(e, n);
          t && a.definitions.push(t)
        })), a
      }(n, "TinaModulesTree")
    },
    3830: (e, n, a) => {
      "use strict";
      a.d(n, {
        Z: () => t
      });
      const t = {
        plusButton: "eaf97f3aa17b34d60e3a",
        small: "a77f1ead5ab02c974fcf",
        btnText: "f03f8769fa832b9a631c",
        btnTexticon: "bbc8bcb358ddf5daa128",
        whiteBtn: "c7492ef8338b8c3a47af",
        blackBtn: "a3ff8ca9eb4efdeecb8f",
        transparentBtn: "ac0ef5dc28fc97aa7630",
        iconBtn: "bac67499c6b043ecfe74",
        link: "bf556069ce72fd3a9254",
        xboxone: "a650281988f864449572",
        xboxseriesxs: "beb2de0f5934aa117022",
        ps4: "af87707a3b189d27699e",
        ps5: "ea7659d89cb05d5af425",
        pc: "aeec255f08e7e48e80de"
      }
    },
    8369: (e, n, a) => {
      var t = {
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
        var n = s(e);
        return a(n)
      }

      function s(e) {
        if (!a.o(t, e)) {
          var n = new Error("Cannot find module '" + e + "'");
          throw n.code = "MODULE_NOT_FOUND", n
        }
        return t[e]
      }
      i.keys = function() {
        return Object.keys(t)
      }, i.resolve = s, e.exports = i, i.id = 8369
    },
    7060: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/bcaca8dc494732cb2ca1.svg"
    },
    4273: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/af7a4b3f215a9ffd7074.svg"
    },
    8838: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/399e4fadd28201f041fe.svg"
    },
    9349: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/fa23bf61b10367b5ae17.svg"
    },
    3356: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/3b3e471f51bfbca10f05.svg"
    },
    8375: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/cd7ecd01ec2f916d6c4b.svg"
    },
    5262: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/3852a2c6a70d09be710a.svg"
    },
    3004: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/1b0d3aef02ce7792cd29.svg"
    },
    928: (e, n, a) => {
      "use strict";
      e.exports = a.p + "img/b23842cdcf5fcfe4e323.svg"
    }
  }
]);