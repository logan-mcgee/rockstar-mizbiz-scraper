(self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [338], {
    6317: (e, a, n) => {
      "use strict";
      n.d(a, {
        Z: () => i
      });
      var t = n(3322);
      const i = e => {
        let {
          brands: a = []
        } = e;
        return a.length ? (0, t.jsx)("div", {
          className: "fa7548a67d1d96bae529",
          children: a.map(((e, a) => {
            let {
              brand: n
            } = e;
            return (0, t.jsx)("div", {
              className: "f5b32d0efcce86875ef3",
              "data-brand": n
            }, a)
          }))
        }) : null
      }
    },
    3490: (e, a, n) => {
      "use strict";
      n.d(a, {
        Z: () => l
      });
      var t = n(7814),
        i = n(3830),
        s = n(3322);
      const r = e => {
          let {
            children: a,
            className: n,
            onClick: t,
            style: i
          } = e;
          return (0, s.jsx)("button", {
            className: n,
            onClick: t,
            style: i,
            children: a
          })
        },
        d = e => {
          let {
            children: a,
            className: n,
            onClick: i,
            style: r,
            to: d
          } = e;
          return (0, s.jsx)(t.NavLink, {
            className: n,
            onClick: i,
            style: r,
            to: d,
            children: a
          })
        },
        l = e => {
          let {
            text: a,
            onClick: n,
            btnColor: t = "#fff",
            labelColor: l = "#000",
            type: o = "",
            icon: c,
            size: u,
            secondText: m,
            consoleBtn: v = !1,
            img: f,
            to: h = !1
          } = e;
          const b = [i.Z.plusButton, i.Z[o] ?? "", i.Z[u] ?? "", i.Z[v] ?? ""].join(" "),
            g = {
              "--hvr-color": t ?? l,
              "--hvr-bg-color": l ?? t,
              "--hvr-border-color": t ?? l
            },
            p = (0, s.jsxs)(s.Fragment, {
              children: [f ? (0, s.jsx)("img", {
                src: f
              }) : "", (0, s.jsxs)("div", {
                className: i.Z.btnText,
                icon: c,
                children: [a, m ? (0, s.jsx)("span", {
                  children: m
                }) : ""]
              })]
            });
          if (h) {
            if (h.startsWith("http")) {
              const e = h.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, s.jsx)("span", {
                onClick: n,
                children: (0, s.jsx)("a", {
                  href: h,
                  className: b,
                  target: e,
                  children: p
                })
              })
            }
            return (0, s.jsx)(d, {
              className: b,
              onClick: n,
              style: g,
              to: h,
              children: p
            })
          }
          return (0, s.jsx)(r, {
            className: b,
            onClick: n,
            style: g,
            children: p
          })
        }
    },
    8718: (e, a, n) => {
      "use strict";
      n.d(a, {
        Z: () => r
      });
      var t = n(9542),
        i = n(3490);
      var s = n(3322);
      const r = e => {
        let {
          buttons: a = [],
          className: n
        } = e;
        return a.length ? (0, s.jsx)("div", {
          className: (0, t.classList)("a67c709116a5f4f75e82", n),
          children: a.map(((e, a) => {
            let {
              icon: n,
              to: t,
              title: r
            } = e;
            return r ? (0, s.jsx)(i.Z, {
              className: "white",
              text: r,
              to: t
            }, a) : ""
          }))
        }) : null
      }
    },
    1914: (e, a, n) => {
      "use strict";
      n.d(a, {
        Z: () => g
      });
      var t = n(822),
        i = n(1988),
        s = n(8976),
        r = n(6711),
        d = n(9542),
        l = n(6168),
        o = n(3881),
        c = n(3490);
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
      var m = n(3830),
        v = n(3322);
      const f = e => {
          let {
            className: a,
            images: n
          } = e;
          const t = (0, d.useGetCdnSource)(n?.mobile?.full_src ?? null),
            i = (0, d.useGetCdnSource)(n?.desktop?.full_src ?? t);
          return (0, v.jsxs)("div", {
            className: [a, u.responsiveImages].join(" "),
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
        h = e => {
          let {
            addedInfo: a = null,
            buynowbtn: s = null,
            description: d = null,
            images: o,
            links: h = [],
            title: b = null
          } = e;
          const {
            track: g
          } = (0, r.useGtmTrack)(), p = {
            event: "card_click",
            event_category: "card",
            event_action: "click",
            event_label: b?.toLowerCase()
          }, [k, x] = (0, t.useState)(!1), N = {
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
          return (0, v.jsx)(l.o5, {
            children: (0, v.jsxs)("div", {
              className: u.card,
              children: [(0, v.jsxs)("div", {
                className: u.imageGroup,
                children: [(0, v.jsx)(f, {
                  className: u.backgroundImage,
                  images: o?.background
                }), (0, v.jsx)(f, {
                  className: u.foregroundImage,
                  images: o?.foreground
                })]
              }), (0, v.jsxs)("div", {
                className: u.content,
                children: [(0, v.jsxs)(i.E.div, {
                  className: u.contentGrid,
                  animate: k ? "open" : "closed",
                  variants: S,
                  children: [(0, v.jsxs)("div", {
                    className: u.titleArea,
                    children: [(0, v.jsx)("h2", {
                      dangerouslySetInnerHTML: {
                        __html: b
                      }
                    }), (0, v.jsx)("p", {
                      dangerouslySetInnerHTML: {
                        __html: d
                      }
                    })]
                  }), h.length ? (0, v.jsx)("div", {
                    className: u.platforms,
                    children: h.map(((e, a) => (0, v.jsx)("div", {
                      className: u[e.platform],
                      children: e.platform ? (0, v.jsx)("img", {
                        src: n(8369)(`./${e.platform}.svg`),
                        alt: `${e.platform} Button`
                      }) : ""
                    }, `${e.platform+a}`)))
                  }) : ""]
                }), a ? (0, v.jsx)(i.E.p, {
                  className: u.addedInfo,
                  dangerouslySetInnerHTML: {
                    __html: a
                  },
                  animate: k ? "open" : "closed",
                  variants: S
                }) : "", s ? (0, v.jsxs)(i.E.div, {
                  onClick: () => {
                    x(!k), g(p), k || g({
                      event_action: "select_platform",
                      event_category: "cta",
                      event: "select_platform",
                      event_label: b?.toLowerCase()
                    })
                  },
                  className: [u.ctaBtn, m.Z.plusButton].join(" "),
                  animate: k ? "open" : "closed",
                  variants: T,
                  initial: !1,
                  children: [(0, v.jsx)(i.E.div, {
                    className: [u.ctaBtnText, m.Z.btnText].join(" "),
                    children: s
                  }), (0, v.jsxs)(i.E.div, {
                    className: [u.linksArea, k ? u.showLinks : ""].join(" "),
                    animate: k ? "open" : "closed",
                    variants: _,
                    initial: !1,
                    children: [(0, v.jsx)("button", {
                      type: "button",
                      className: u.closeButtonWrapper,
                      onClick: () => {
                        x(!1), g(p), g({
                          event_action: "close",
                          event_category: "select_platform",
                          event: "select_platform",
                          event_label: b?.toLowerCase()
                        })
                      },
                      children: (0, v.jsx)("img", {
                        className: u.closeBtn,
                        src: n(8375),
                        alt: "Close menu button"
                      })
                    }), (0, v.jsx)("div", {
                      className: u.linkList,
                      children: h.length ? h.map(((e, a) => (0, v.jsx)(c.Z, {
                        type: "blackBtn",
                        size: "large",
                        img: n(8369)(`./${e.platform}.svg`),
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
      const b = {
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
            cards: a = [],
            bottomText: n,
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
            }), a?.length ? (0, v.jsx)(l.tq, {
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
              modules: [o.W_],
              breakpoints: b,
              children: a.map((e => (0, t.createElement)(h, {
                ...e,
                key: JSON.stringify(e)
              }))) ?? ""
            }) : "", n ? (0, v.jsx)("p", {
              className: u.bottomText,
              children: n
            }) : ""]
          })
        })))
    },
    8737: (e, a, n) => {
      "use strict";
      n.d(a, {
        Z: () => s
      });
      var t = n(9542);
      var i = n(3322);
      const s = e => {
        let {
          disclaimer: a,
          text: n = null,
          title: s,
          className: r = "",
          style: d = {}
        } = e;
        const l = n ?? a?.text ?? null,
          o = s ? `<h5>${s}</h5>${l}` : l;
        return l ? (0, i.jsx)("div", {
          className: (0, t.classList)("df323a339dbf583bc2c5", r),
          dangerouslySetInnerHTML: {
            __html: o
          },
          style: d
        }) : null
      }
    },
    1834: (e, a, n) => {
      "use strict";
      n.d(a, {
        Z: () => d
      });
      var t = n(822),
        i = n(8976),
        s = n(3490);
      var r = n(3322);
      const d = (0, i.withSimpleErrorBoundary)((e => {
        let {
          buttonTxt: a,
          description: n,
          disclaimer: i,
          faqList: d = [],
          initialLength: l = 6,
          addedLength: o = 6,
          title: c,
          tinaModulesInfo: u
        } = e;
        const [m, v] = (0, t.useState)(l);
        return (0, r.jsxs)("div", {
          className: "b3509cdab40e95e26002",
          children: [(0, r.jsxs)("div", {
            className: "efce021b52132a4fe087",
            children: [(0, r.jsxs)("div", {
              children: [(0, r.jsx)("h3", {
                children: u?.[0]?.title ?? c
              }), (0, r.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: n
                }
              })]
            }), (0, r.jsx)("div", {
              className: "e07164a79464876f4bde",
              children: d.length ? d.slice(0, m).map(((e, a) => {
                let {
                  question: n,
                  answer: t
                } = e;
                return (0, r.jsxs)("details", {
                  children: [(0, r.jsx)("summary", {
                    children: n
                  }), (0, r.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: t
                    }
                  })]
                }, a)
              })) : ""
            }), d.length > m ? (0, r.jsx)(s.Z, {
              onClick: () => v(m + o),
              text: a
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
    1792: (e, a, n) => {
      "use strict";
      n.d(a, {
        Z: () => s
      });
      var t = n(8176);
      var i = n(3322);
      const s = e => {
        let {
          children: a,
          style: n
        } = e;
        return (0, i.jsx)(t.E, {
          children: (0, i.jsx)("div", {
            className: "fafb0bfa8877f0bd98dd",
            style: n,
            "data-type": "guide",
            children: (0, i.jsx)("div", {
              className: "f996fd45d04119fb2ddc",
              children: a
            })
          })
        })
      }
    },
    8414: (e, a, n) => {
      "use strict";
      n.d(a, {
        Z: () => c
      });
      var t = n(822),
        i = n(7311),
        s = n.n(i),
        r = n(8976),
        d = n(559);
      var l = n(3322);
      const o = e => {
          let {
            guide: a
          } = e, n = {
            hero: {}
          };
          s().cloneDeepWith(a, ((e, a) => {
            "images" === a && (n = e)
          }));
          const {
            src: t
          } = (0, d.useImageParser)(n?.thumb ?? {});
          return (0, l.jsx)("div", {
            className: "a02afa3a30a4c2daecb9",
            children: (0, l.jsxs)(r.A, {
              to: a.to,
              children: [(0, l.jsx)("div", {
                style: {
                  "--aspect-ratio": 1,
                  background: `url(${t?.mobile}) no-repeat center/cover`
                }
              }), (0, l.jsx)("h4", {
                children: a.title
              })]
            })
          })
        },
        c = e => {
          let {
            guides: a = {},
            tinaModulesInfo: n,
            title: i
          } = e;
          const d = s().map(a, "guide_id"),
            c = (0, r.useTinaModuleFetchByIds)({
              ids: d
            }),
            [u, m] = (0, t.useState)(null);
          return (0, t.useEffect)((() => {
            const e = c?.map(((e, a) => (0, l.jsx)(o, {
              guide: e
            }, a)));
            m(e)
          }), [c]), (0, l.jsx)(r.Gen9CoreCarousel, {
            size: "lg",
            slideChildren: u,
            title: n?.[0]?.title ?? i
          })
        }
    },
    7569: (e, a, n) => {
      "use strict";
      n.d(a, {
        Z: () => c
      });
      var t = n(9542),
        i = n(7814),
        s = n(4859),
        r = n(7764);
      n(1338);
      var d = n(3322);
      const l = () => {
          let e;
          const {
            guideId: a
          } = (0, i.useParams)(), {
            data: n
          } = (0, s.useQuery)(r.TinaModulesTree, {
            variables: {
              id: a
            },
            skip: !a
          });
          if (!a) return null;
          const t = n?.tinaModulesTree?.[0]?.tree ?? null;
          return t ? (e = t.map((e => {
            let {
              title: a
            } = e;
            return a
          })).join("<span></span>"), e ? (0, d.jsx)("div", {
            className: "ccc9a48ce26a7f8eccfa",
            dangerouslySetInnerHTML: {
              __html: `Guides<span></span>${e}`
            }
          }) : null) : null
        },
        o = e => {
          let {
            hero: a
          } = e;
          const {
            alt: n,
            src: i = {}
          } = (0, t.useImageParser)(a) ?? {}, {
            mobile: s
          } = i;
          if (s) return (0, d.jsx)("div", {
            "aria-label": n,
            className: "d029521293f260e2e565",
            role: "img",
            style: {
              background: `url(${s}) no-repeat center/contain`
            }
          })
        },
        c = e => {
          let {
            blurb: a,
            hero: n,
            title: t
          } = e;
          return (0, d.jsxs)(d.Fragment, {
            children: [n ? (0, d.jsx)(o, {
              hero: n
            }) : "", (0, d.jsxs)("div", {
              className: "bff4125d94bb6017f533",
              children: [(0, d.jsx)(l, {}), (0, d.jsx)("h1", {
                children: t
              }), a && (0, d.jsx)("span", {
                className: "e4ef31aad749a9acd084",
                dangerouslySetInnerHTML: {
                  __html: a
                }
              })]
            })]
          })
        }
    },
    9803: (e, a, n) => {
      "use strict";
      n.d(a, {
        Z: () => g
      });
      var t = n(822),
        i = n(7814),
        s = n(7311),
        r = n.n(s),
        d = n(1988),
        l = n(8976),
        o = n(1338);
      const c = {
        guideNav: "fafeb1bf08103794f39f",
        headerHidden: "b6d7b06f062c246fa382",
        guideList: "ef07d6110417298701b2",
        activeSection: "ce841afb83b64686ea9e",
        guideLinkCurrent: "fabf9908f285fcf97596",
        guide: "ca53bde09b5900585bda",
        sections: "e3ef1dcb43d473bdd596"
      };
      var u = n(3322);
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
            to: a,
            title: n,
            id_hash: i,
            query: s
          } = e;
          const [r, d] = (0, t.useState)(i === s), {
            state: m
          } = (0, o.MB)(), {
            activeSection: v
          } = m;
          return (0, t.useEffect)((() => d(s !== v ? v === i : s === i)), [v]), (0, u.jsx)(l.A, {
            to: a,
            className: r ? c.activeSection : "",
            children: n
          }, a)
        },
        h = e => {
          let {
            sections: a
          } = e;
          const [n] = (0, i.useSearchParams)();
          return (0, u.jsx)("div", {
            className: c.sections,
            children: a?.map((e => {
              let {
                id_hash: a,
                title: t,
                to: i
              } = e;
              return (0, u.jsx)(f, {
                id_hash: a,
                query: n,
                title: t,
                to: i
              })
            }))
          })
        },
        b = e => {
          let {
            currentId: a,
            group: n
          } = e;
          const [i, s] = (0, t.useState)(null), [f, b] = (0, t.useState)(null), {
            state: g
          } = (0, o.MB)(), {
            activeSection: p
          } = g;
          return (0, t.useEffect)((() => {
            const e = r().findIndex(n?.children, (e => {
              let {
                id_hash: n
              } = e;
              return n === a
            }));
            b(e), s(-1 !== e)
          }), [a, p, n]), (0, u.jsxs)("div", {
            className: c.guideList,
            children: [(0, u.jsx)("button", {
              type: "button",
              onClick: () => s(!i),
              children: n.title
            }), (0, u.jsx)(d.E.nav, {
              animate: i ? "open" : "closed",
              variants: v,
              transition: m,
              children: n?.children?.map(((e, n) => {
                let {
                  children: t,
                  id_hash: i,
                  title: s,
                  to: r
                } = e;
                return (0, u.jsxs)("div", {
                  className: c.guide,
                  children: [(0, u.jsx)(l.A, {
                    className: [c.guideLink, a === i ? c.guideLinkCurrent : ""].join(" "),
                    to: r,
                    children: s
                  }), n === f && t?.length ? (0, u.jsx)(h, {
                    sections: t
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
          const n = (0, o.yv)(),
            {
              state: {
                headerHeight: t,
                headerHidden: i
              }
            } = (0, o.MB)();
          return (0, u.jsx)("div", {
            className: [c.guideNav, i ? c.headerHidden : ""].join(" "),
            style: {
              "--header-height": `${t}px`
            },
            children: n?.map((e => (0, u.jsx)(b, {
              currentId: a,
              group: e
            }, e.id_hash)))
          })
        }
    },
    4123: (e, a, n) => {
      "use strict";
      n.d(a, {
        Z: () => d
      });
      var t = n(822),
        i = n(1190),
        s = n(1338);
      var r = n(3322);
      const d = e => {
        let {
          style: a,
          children: n,
          __anchor: d = null
        } = e;
        const {
          announcePresence: l
        } = (0, s.aQ)(), {
          ref: o,
          inView: c
        } = (0, i.YD)({
          rootMargin: "0px 0px -700px 0px",
          threshold: 0,
          delay: 850
        });
        return (0, t.useEffect)((() => {
          l(d)
        }), [d]), (0, t.useEffect)((() => {
          c && l(d)
        }), [c]), (0, r.jsx)("span", {
          style: a,
          className: "d49366acea7b328026c0",
          name: d,
          ref: o,
          children: n
        })
      }
    },
    8820: (e, a, n) => {
      "use strict";
      n.d(a, {
        Z: () => T
      });
      var t = n(822),
        i = n(7814),
        s = n(8976),
        r = n(6711),
        d = n(9929),
        l = n(3657),
        o = n(3490),
        c = n(7311),
        u = n.n(c),
        m = n(1338);
      const v = {
        gen9Nav: "a616477b6a6e1ed0f6ac",
        activeLink: "c4fca99870c4faa1f18d",
        subNav: "cb4e7d61fd6679fb7a1e",
        subNavOpen: "ff7acb2b4e6eb0468800",
        navGroup: "b1c7e7a170e8c7982809",
        subNavUnder: "f5524031d9fa9c37eeb5",
        subNavRight: "c13b50d941584d4e3152"
      };
      var f = n(3322);
      const h = e => {
          let {
            activeExact: a = !1,
            to: n,
            title: i,
            under: r = !0,
            childModules: d = [],
            t: l
          } = e;
          const [o, c] = (0, t.useState)(!1), m = u().debounce((() => {
            c(!1)
          }), 250), b = (0, t.useCallback)((() => {
            m?.cancel(), c(!0)
          }), [m]);
          return (0, f.jsxs)("div", {
            className: v.navGroup,
            onMouseEnter: b,
            onMouseLeave: m,
            onKeyUp: b,
            onClick: () => c(!1),
            role: "button",
            tabIndex: 0,
            children: [n ? (0, f.jsx)(s.A, {
              end: a,
              to: n,
              target: n.startsWith("http") ? "_blank" : "_self",
              className: e => {
                let {
                  isActive: a
                } = e;
                return a ? v.activeLink : null
              },
              children: l(i)
            }) : (0, f.jsx)("button", {
              type: "button",
              children: l(i)
            }), d?.length ? (0, f.jsx)("div", {
              className: [v.subNav, r ? v.subNavUnder : v.subNavRight, o ? v.subNavOpen : ""].join(" "),
              children: d?.map((e => (0, f.jsx)(h, {
                under: !1,
                ...e,
                t: l
              }, e?.title)))
            }) : ""]
          })
        },
        b = (0, d.withTranslations)((e => {
          let {
            t: a
          } = e;
          const n = (0, m.YM)();
          return (0, f.jsx)("nav", {
            className: v.gen9Nav,
            children: n.map((e => {
              let {
                children: n,
                to: t,
                ...i
              } = e;
              return (0, f.jsx)(h, {
                childModules: n,
                to: t,
                t: a,
                ...i
              }, t)
            }))
          })
        }));
      var g = n(8440),
        p = n(1988),
        k = n(1458);
      const x = {
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
            setMobileNavOpen: a
          } = (0, m.MB)(), {
            navOpen: n,
            setNavOpen: i
          } = (0, k.useRockstarUser)(), s = (0, g._)(), r = (0, g._)(), d = (0, g._)();
          return (0, t.useEffect)((() => {
            !0 === n && !0 === e && a(!1)
          }), [n]), (0, t.useEffect)((() => {
            s.start(e ? x.open : x.closed), r.start(e ? N.open : N.closed), d.start(e ? j.open : j.closed)
          }), [e]), (0, f.jsxs)("svg", {
            className: "b1179e089e89383904b2",
            onClick: () => (async () => {
              a(!e), !0 === n && i(!1)
            })(),
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            children: [(0, f.jsx)(p.E.path, {
              ...j.closed,
              ...y,
              animate: d
            }), (0, f.jsx)(p.E.path, {
              ...N.closed,
              ...y,
              animate: r
            }), (0, f.jsx)(p.E.path, {
              ...x.closed,
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
        T = (0, d.withTranslations)((e => {
          let {
            t: a
          } = e;
          const {
            state: {
              brand: n,
              headerHidden: d,
              mobileNavOpen: c
            },
            setHeaderHeight: u,
            setHeaderHidden: v,
            setMobileNavOpen: h
          } = (0, m.MB)(), g = (0, t.useRef)(), {
            track: p
          } = (0, r.useGtmTrack)(), [, k] = (0, i.useSearchParams)(), {
            pathname: x
          } = (0, i.useLocation)(), {
            freezeUserShouldSeeMore: N,
            userShouldSeeMore: j
          } = (0, l.useScroll)(), [y, T] = (0, t.useState)(0), M = () => y > 1023;
          return (0, t.useEffect)((() => {
            c || N && j || v(j)
          }), [N, c, j]), (0, t.useEffect)((() => {
            h(!1)
          }), [x]), (0, t.useEffect)((() => {
            c && v(!1)
          }), [c]), (0, t.useEffect)((() => {
            const e = () => {
              g.current && u(g.current.clientHeight), T(window.innerWidth)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }), [g]), (0, f.jsx)("header", {
            className: [_.gen9Header, d ? _.headerHidden : ""].join(" "),
            ref: g,
            children: (0, f.jsxs)("div", {
              className: _.content,
              children: [(0, f.jsxs)("div", {
                className: _.branding,
                "data-brand": n,
                children: [(0, f.jsx)(s.A, {
                  className: _.rockstarLogo,
                  to: "../"
                }), (0, f.jsx)("div", {
                  className: _.logoDivider
                }), M() && (0, f.jsx)("div", {
                  className: _.brandLogo
                }), (0, f.jsx)(S, {})]
              }), !M() && (0, f.jsx)("div", {
                className: _.brandLogo,
                "data-brand": n
              }), (0, f.jsx)(b, {}), (0, f.jsx)("div", {
                className: _.buttonArea,
                children: (0, f.jsxs)("div", {
                  className: _.navBtn,
                  children: [!(y < 1024) && (0, f.jsx)(o.Z, {
                    text: a("Buy Now"),
                    type: "transparentBtn",
                    size: "small",
                    onClick: () => {
                      k({
                        info: "order"
                      }), p({
                        event_action: "buy",
                        event_category: "cta",
                        event: "cta_buy",
                        event_label: "header",
                        text: a("Buy Now").toLowerCase()
                      })
                    }
                  }), (0, f.jsx)(r.MenuButton, {})]
                })
              })]
            })
          })
        }))
    },
    5178: (e, a, n) => {
      "use strict";
      n.d(a, {
        Z: () => o
      });
      var t = n(8976),
        i = n(9542),
        s = n(8718),
        r = n(6317),
        d = n(8737);
      var l = n(3322);
      const o = t.framer.withFadeIn((e => {
        let {
          brands: a = [],
          content: n,
          ctas: t = [],
          disclaimer: o,
          image: c,
          large: u = !1,
          title: m,
          image_on_right: v = !1,
          style: f = {},
          className: h = ""
        } = e;
        const b = (0, i.useGetCdnSource)(c?.full_src ?? null) ?? null;
        return (0, l.jsxs)("div", {
          className: (0, i.classList)("f2cf909dbf3361ec8d57", u ? "c950136646fbbd777bb5" : "", v ? "e6f94a3e17e22b45f308" : "", b ? "" : "cea3e99427bd215be499", h),
          style: f,
          children: [b ? (0, l.jsx)("div", {
            className: "bcdbc4cde7375da50995",
            style: {
              background: `url(${b}) no-repeat center/cover`
            }
          }) : "", (0, l.jsxs)("div", {
            className: "c5071baf77e4a94ee8fc",
            children: [(0, l.jsx)(r.Z, {
              brands: a
            }), (0, l.jsxs)("div", {
              className: "f494a7678754ce53146a",
              children: [(0, l.jsx)("div", {
                className: "e220a2dcd44c8fc8da2e",
                children: m
              }), n ? (0, l.jsx)("div", {
                className: "ccc4915c23b879942955",
                dangerouslySetInnerHTML: {
                  __html: n
                }
              }) : ""]
            }), (0, l.jsx)(s.Z, {
              ctas: t
            }), (0, l.jsx)(d.Z, {
              disclaimer: o
            })]
          })]
        })
      }))
    },
    3944: (e, a, n) => {
      "use strict";
      n.d(a, {
        Z: () => d
      });
      var t = n(9542),
        i = n(5178);
      const s = {
        imageTextGroupGroup: "fa256a3137bdd2fa57fc",
        bg: "cdba5b54a8d9de138a27",
        bgMobile: "c5eb13f304cc530611c3",
        bgDesktop: "d2094248c0a2dbe4ea2e"
      };
      var r = n(3322);
      const d = e => {
        let {
          bg: a,
          image_text_groups: n = [],
          style: d = {},
          className: l = ""
        } = e;
        const o = (0, t.useGetCdnSource)(a?.image?.mobile?.full_src ?? null),
          c = (0, t.useGetCdnSource)(a?.image?.desktop?.full_src ?? null) ?? o;
        return n.length ? (0, r.jsxs)("div", {
          className: (0, t.classList)(s.imageTextGroupGroup, l),
          style: {
            ...d
          },
          children: [o ? (0, r.jsx)("div", {
            className: [s.bgMobile, s.bg].join(" "),
            style: {
              background: `url(${o}) no-repeat center/cover`
            }
          }) : "", c ? (0, r.jsx)("div", {
            className: [s.bgDesktop, s.bg].join(" "),
            style: {
              background: `url(${c}) no-repeat center/cover`
            }
          }) : "", n.map(((e, a) => (0, r.jsx)(i.Z, {
            ...e
          }, a)))]
        }) : null
      }
    },
    7731: (e, a, n) => {
      "use strict";
      n.d(a, {
        Z: () => d
      });
      var t = n(8976),
        i = n(9542);
      const s = {
        linkoutSection: "f16a28b8596593e62188",
        cta: "e44235a0e32de93918e3"
      };
      var r = n(3322);
      const d = e => {
        let {
          text: a,
          cta: d,
          to: l,
          className: o = "",
          style: c = {}
        } = e;
        return (0, r.jsxs)(t.A, {
          className: (0, i.classList)(s.linkoutSection, o),
          to: l,
          style: c,
          children: [a && (0, r.jsx)("div", {
            className: s.text,
            children: a
          }), d && (0, r.jsxs)("div", {
            className: s.cta,
            children: [d, " ", (0, r.jsx)("img", {
              src: n(928)
            })]
          })]
        })
      }
    },
    7519: (e, a, n) => {
      "use strict";
      n.d(a, {
        Z: () => s
      });
      var t = n(822);
      var i = n(3322);
      const s = e => {
        let {
          children: a,
          style: n,
          theme: s
        } = e;
        const [r, d] = (0, t.useState)(s);
        return (0, t.useEffect)((() => {
          s && d(s)
        }), [s]), (0, i.jsx)("div", {
          className: "cce3c47240f1835b9e3d",
          style: n,
          "data-theme": r,
          children: a
        })
      }
    },
    5220: (e, a, n) => {
      "use strict";
      n.d(a, {
        Z: () => r
      });
      var t = n(4224),
        i = n.n(t),
        s = n(3322);
      const r = e => {
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
    8459: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, {
        BrandMessage: () => s,
        BuyNow: () => r.Z,
        ClaimCountdown: () => d,
        Disclaimer: () => l.Z,
        FAQ: () => o.Z,
        Guide: () => c.Z,
        GuideGroup: () => u.Z,
        GuideIntro: () => m.Z,
        GuideNavDesktop: () => v.Z,
        GuideSection: () => f.Z,
        Header: () => h.Z,
        Hero: () => S,
        ImageTextGroup: () => _.Z,
        ImageTextGroupGroup: () => T.Z,
        LinkoutSection: () => M.Z,
        Logo: () => C,
        SectionTitle: () => w,
        TinaWrapper: () => B.Z,
        VideoPlayerWrapper: () => L.Z
      });
      var t = n(6317);
      var i = n(3322);
      const s = e => {
        let {
          brand: a,
          headline_left: n,
          headline_right: s,
          info: r
        } = e;
        return (0, i.jsxs)("div", {
          className: "b94144341266bb5d0222",
          children: [(0, i.jsx)(t.Z, {
            brands: [{
              brand: a
            }]
          }), (0, i.jsxs)("div", {
            className: "de1a4b6a97abe3325a0f",
            children: [(0, i.jsxs)("h2", {
              children: [n, " ", (0, i.jsx)("span", {
                children: s
              })]
            }), (0, i.jsx)("p", {
              children: r
            })]
          })]
        })
      };
      var r = n(1914);
      const d = e => {
        let {
          left: a,
          right: n
        } = e;
        return (0, i.jsx)("div", {
          className: "e17095a50c41fd5df54d",
          children: (0, i.jsxs)("h2", {
            children: [a, " ", (0, i.jsx)("span", {
              children: n
            })]
          })
        })
      };
      var l = n(8737),
        o = n(1834),
        c = n(1792),
        u = n(8414),
        m = n(7569),
        v = n(9803),
        f = n(4123),
        h = n(8820),
        b = n(822),
        g = n(8976),
        p = n(1988),
        k = n(9542),
        x = n(8718);
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
            title: a = "",
            mobileImg: n,
            desktopImg: t
          } = e;
          const s = (0, k.useGetCdnSource)(n ?? null),
            r = (0, k.useGetCdnSource)(t ?? s);
          return (0, i.jsx)("div", {
            className: N.shard,
            style: {
              "--background-image-mobile": `url(${s})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, i.jsx)("h5", {
              children: a
            })
          })
        },
        y = e => {
          let {
            title: a = "Membership Rewards",
            shards: n
          } = e;
          const [t, s] = (0, b.useState)(null);
          return (0, b.useEffect)((() => {
            n && s(n.map((e => {
              if (!e?.shardImg) return;
              const {
                title: a,
                shardImg: n
              } = e, {
                mobile: t,
                desktop: s
              } = n;
              return (0, i.jsx)(j, {
                title: a,
                mobileImg: t?.full_src,
                desktopImg: s?.full_src
              })
            })))
          }), [n]), t ? (0, i.jsx)("div", {
            className: N.shardsCarousel,
            children: (0, i.jsx)(g.Gen9CoreCarousel, {
              title: a,
              slideChildren: t,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        S = e => {
          let {
            brands: a = [],
            backgroundImg: n,
            layeredImg: s,
            ctas: r = [],
            expandingButtonLabel: d = "Subscribe",
            platformsAndLinks: l = [],
            description: o,
            title: c,
            legalText: u,
            shardsSection: m = {},
            className: v
          } = e;
          const f = (0, k.useGetCdnSource)(n?.mobile?.full_src ?? null),
            h = (0, k.useGetCdnSource)(n?.desktop?.full_src ?? f),
            b = (0, k.useGetCdnSource)(s?.mobile?.full_src ?? null),
            j = (0, k.useGetCdnSource)(s?.desktop?.full_src ?? b),
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
            className: (0, k.classList)(N.hero, v),
            style: {
              "--background-image-desktop": `url(${h})`,
              "--background-image-mobile": `url(${f})`,
              "--layered-image-desktop": `url(${j})`,
              "--layered-image-mobile": `url(${b})`
            },
            initial: "hidden",
            animate: "visible",
            variants: S,
            children: [(0, i.jsxs)("div", {
              className: N.images,
              children: [h && f ? (0, i.jsx)("div", {
                className: N.background,
                style: n?.style ?? {}
              }) : "", b && j ? (0, i.jsx)("div", {
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
                  brands: a
                })
              }), l.length ? (0, i.jsx)(p.E.div, {
                variants: _,
                children: (0, i.jsx)(g.ExpandingPlatformButton, {
                  buttonText: d,
                  platformsAndLinks: l,
                  children: (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(p.E.div, {
                      className: N.descriptions,
                      variants: _,
                      children: [(0, i.jsx)("h2", {
                        dangerouslySetInnerHTML: {
                          __html: c
                        }
                      }), (0, i.jsx)("p", {
                        dangerouslySetInnerHTML: {
                          __html: o
                        }
                      })]
                    }), (0, i.jsx)(p.E.div, {
                      variants: _,
                      children: (0, i.jsx)(x.Z, {
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
                      __html: c
                    }
                  }), (0, i.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: o
                    }
                  })]
                }), (0, i.jsx)(p.E.div, {
                  variants: _,
                  children: (0, i.jsx)(x.Z, {
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
      var _ = n(5178),
        T = n(3944),
        M = n(7731);
      const E = {},
        C = e => {
          let {
            brand: a
          } = e;
          return (0, i.jsx)("div", {
            className: E[a]
          })
        },
        w = () => (0, i.jsx)("h2", {
          children: "Section"
        });
      var B = n(7519),
        L = n(5220)
    },
    1338: (e, a, n) => {
      "use strict";
      n.d(a, {
        MB: () => s,
        aQ: () => r.a,
        yv: () => l,
        YM: () => c
      });
      var t = n(4859);
      const i = (0, t.makeVar)({
          brand: null,
          headerHeight: 0,
          headerHidden: !1,
          mobileNavOpen: !1,
          activeSection: null
        }),
        s = () => {
          const e = (0, t.useReactiveVar)(i),
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
      var r = n(8176),
        d = n(6177);
      const l = () => {
        const {
          data: e
        } = (0, t.useQuery)(d.TinaModulesTree, {
          variables: {
            type: "gen9-guide-group"
          }
        });
        return e?.tinaModulesTree ?? null
      };
      var o = n(822);
      n(7311), n(2267);
      const c = () => {
        const [e, a] = (0, o.useState)([{
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
      n(6711), n(5649)
    },
    8176: (e, a, n) => {
      "use strict";
      n.d(a, {
        E: () => c,
        a: () => o
      });
      var t = n(822),
        i = n(7814),
        s = n(3657),
        r = n(1338),
        d = n(3322);
      const l = (0, t.createContext)(),
        o = () => (0, t.useContext)(l),
        c = e => {
          let {
            children: a
          } = e;
          const [n, o] = (0, t.useState)(null), [c] = (0, i.useSearchParams)(), {
            setActiveSection: u
          } = (0, r.MB)(), {
            pauseUserShouldSeeMore: m
          } = (0, s.useScroll)(), v = (0, t.useCallback)((e => {
            if (e !== c.get("section")) return void u(e);
            const a = document.getElementsByName(c.get("section"))?.[0];
            a && (m(), u(c.get("section")), a.scrollIntoView({
              behavior: "smooth"
            }))
          }), [c.get("section"), n]);
          (0, t.useEffect)((() => {
            c.get("section") && v(c.get("section"))
          }), [c.get("section")]);
          const f = (0, t.useMemo)((() => ({
            announcePresence: v,
            section: n,
            setSection: o
          })), [v, n, o]);
          return (0, d.jsx)(l.Provider, {
            value: f,
            children: a
          })
        }
    },
    2267: (e, a, n) => {
      "use strict";
      n.r(a), n.d(a, {
        componentsForTinaParser: () => p,
        componentsForTinaParserGuide: () => k
      });
      var t = n(8976),
        i = n(2672),
        s = (n(6947), n(420)),
        r = n.n(s),
        d = n(1914),
        l = n(8737),
        o = n(1834),
        c = n(1792),
        u = n(8414),
        m = n(7569),
        v = n(4123),
        f = n(3944),
        h = n(7731),
        b = n(7519),
        g = n(8459);
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
          TinaModuleFetchNRender: t.TinaModuleFetchNRender,
          PromoModule: t.PromoModule
        },
        k = {
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
          PromoModule: t.PromoModule,
          gen9: {
            BuyNow: d.Z,
            Disclaimer: l.Z,
            FAQ: o.Z,
            Guide: c.Z,
            GuideGroup: u.Z,
            GuideIntro: m.Z,
            GuideSection: v.Z,
            Hero: t.Hero,
            ImageTextGroupGroup: f.Z,
            LinkoutSection: h.Z,
            TinaWrapper: b.Z,
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

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, a)
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
      var t = {};

      function i(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var t = e.definitions[n];
          if (t.name && t.name.value == a) return t
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesTree = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var s = t[a] || new Set,
          r = new Set,
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var t = i(e, a);
          t && n.definitions.push(t)
        })), n
      }(a, "TinaModulesTree")
    },
    6177: e => {
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

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, a)
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
      var t = {};

      function i(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var t = e.definitions[n];
          if (t.name && t.name.value == a) return t
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesTree = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var s = t[a] || new Set,
          r = new Set,
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var t = i(e, a);
          t && n.definitions.push(t)
        })), n
      }(a, "TinaModulesTree")
    },
    5649: e => {
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

      function n(e, a) {
        if ("FragmentSpread" === e.kind) a.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var t = e.type;
          "NamedType" === t.kind && a.add(t.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          n(e, a)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          n(e, a)
        })), e.definitions && e.definitions.forEach((function(e) {
          n(e, a)
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
      var t = {};

      function i(e, a) {
        for (var n = 0; n < e.definitions.length; n++) {
          var t = e.definitions[n];
          if (t.name && t.name.value == a) return t
        }
      }
      a.definitions.forEach((function(e) {
        if (e.name) {
          var a = new Set;
          n(e, a), t[e.name.value] = a
        }
      })), e.exports = a, e.exports.TinaModulesTree = function(e, a) {
        var n = {
          kind: e.kind,
          definitions: [i(e, a)]
        };
        e.hasOwnProperty("loc") && (n.loc = e.loc);
        var s = t[a] || new Set,
          r = new Set,
          d = new Set;
        for (s.forEach((function(e) {
            d.add(e)
          })); d.size > 0;) {
          var l = d;
          d = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (t[e] || new Set).forEach((function(e) {
              d.add(e)
            })))
          }))
        }
        return r.forEach((function(a) {
          var t = i(e, a);
          t && n.definitions.push(t)
        })), n
      }(a, "TinaModulesTree")
    },
    3830: (e, a, n) => {
      "use strict";
      n.d(a, {
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
    8369: (e, a, n) => {
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
        var a = s(e);
        return n(a)
      }

      function s(e) {
        if (!n.o(t, e)) {
          var a = new Error("Cannot find module '" + e + "'");
          throw a.code = "MODULE_NOT_FOUND", a
        }
        return t[e]
      }
      i.keys = function() {
        return Object.keys(t)
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