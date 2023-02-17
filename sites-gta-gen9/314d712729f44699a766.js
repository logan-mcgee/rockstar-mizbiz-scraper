(self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [428], {
    5565: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => s
      });
      var n = a(5668);
      const s = e => {
        let {
          brands: t = []
        } = e;
        return t.length ? (0, n.jsx)("div", {
          className: "fa7548a67d1d96bae529",
          children: t.map(((e, t) => {
            let {
              brand: a
            } = e;
            return (0, n.jsx)("div", {
              className: "f5b32d0efcce86875ef3",
              brand: a
            }, t)
          }))
        }) : null
      }
    },
    3347: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => d
      });
      var n = a(1163),
        s = a(3830),
        i = a(5668);
      const r = e => {
          let {
            children: t,
            className: a,
            onClick: n,
            style: s
          } = e;
          return (0, i.jsx)("button", {
            className: a,
            onClick: n,
            style: s,
            children: t
          })
        },
        l = e => {
          let {
            children: t,
            className: a,
            onClick: s,
            style: r,
            to: l
          } = e;
          return (0, i.jsx)(n.NavLink, {
            className: a,
            onClick: s,
            style: r,
            to: l,
            children: t
          })
        },
        d = e => {
          let {
            text: t,
            onClick: a,
            btnColor: n = "#fff",
            labelColor: d = "#000",
            type: c = "",
            icon: o,
            size: u,
            secondText: m,
            consoleBtn: v = !1,
            img: f,
            to: b = !1
          } = e;
          const h = [s.Z.plusButton, s.Z[c] ?? "", s.Z[u] ?? "", s.Z[v] ?? ""].join(" "),
            g = {
              "--hvr-color": n ?? d,
              "--hvr-bg-color": d ?? n,
              "--hvr-border-color": n ?? d
            },
            p = (0, i.jsxs)(i.Fragment, {
              children: [f ? (0, i.jsx)("img", {
                src: f
              }) : "", (0, i.jsxs)("div", {
                className: s.Z.btnText,
                icon: o,
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
                children: (0, i.jsx)("a", {
                  href: b,
                  className: h,
                  target: e,
                  children: p
                })
              })
            }
            return (0, i.jsx)(l, {
              className: h,
              onClick: a,
              style: g,
              to: b,
              children: p
            })
          }
          return (0, i.jsx)(r, {
            className: h,
            onClick: a,
            style: g,
            children: p
          })
        }
    },
    7339: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => r
      });
      var n = a(9542),
        s = a(3347);
      var i = a(5668);
      const r = e => {
        let {
          buttons: t = [],
          className: a
        } = e;
        return t.length ? (0, i.jsx)("div", {
          className: (0, n.classList)("a67c709116a5f4f75e82", a),
          children: t.map(((e, t) => {
            let {
              icon: a,
              to: n,
              title: r
            } = e;
            return r ? (0, i.jsx)(s.Z, {
              className: "white",
              text: r,
              to: n
            }, t) : ""
          }))
        }) : null
      }
    },
    3989: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => g
      });
      var n = a(822),
        s = a(1988),
        i = a(8976),
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
            className: t,
            images: a
          } = e;
          const n = (0, l.useGetCdnSource)(a?.mobile?.full_src ?? null),
            s = (0, l.useGetCdnSource)(a?.desktop?.full_src ?? n);
          return (0, v.jsxs)("div", {
            className: [t, u.responsiveImages].join(" "),
            children: [n ? (0, v.jsx)("div", {
              className: u.imgMobile,
              style: {
                background: `url(${n}) no-repeat center/cover`
              }
            }) : "", s ? (0, v.jsx)("div", {
              className: u.imgDesktop,
              style: {
                background: `url(${s}) no-repeat center/cover`
              }
            }) : ""]
          })
        },
        b = e => {
          let {
            addedInfo: t = null,
            buynowbtn: i = null,
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
          }, [x, k] = (0, n.useState)(!1), N = {
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
                children: [(0, v.jsxs)(s.E.div, {
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
                    children: b.map(((e, t) => (0, v.jsx)("div", {
                      className: u[e.platform],
                      children: e.platform ? (0, v.jsx)("img", {
                        src: a(8369)(`./${e.platform}.svg`),
                        alt: `${e.platform} Button`
                      }) : ""
                    }, `${e.platform+t}`)))
                  }) : ""]
                }), t ? (0, v.jsx)(s.E.p, {
                  className: u.addedInfo,
                  dangerouslySetInnerHTML: {
                    __html: t
                  },
                  animate: x ? "open" : "closed",
                  variants: S
                }) : "", i ? (0, v.jsxs)(s.E.div, {
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
                  children: [(0, v.jsx)(s.E.div, {
                    className: [u.ctaBtnText, m.Z.btnText].join(" "),
                    children: i
                  }), (0, v.jsxs)(s.E.div, {
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
                      children: b.length ? b.map(((e, t) => (0, v.jsx)(o.Z, {
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
        g = i.framer.withFadeIn((0, i.withSimpleErrorBoundary)((e => {
          let {
            cards: t = [],
            bottomText: a,
            topText: s
          } = e;
          const {
            track: i
          } = (0, r.useGtmTrack)();
          return (0, v.jsxs)("div", {
            className: u.buyNowArea,
            children: [(0, v.jsxs)("div", {
              className: u.topArea,
              children: [s ? (0, v.jsx)("h2", {
                children: s
              }) : "", (0, v.jsxs)("div", {
                className: u.btnArea,
                children: [(0, v.jsx)("div", {
                  className: u.prevBtn
                }), (0, v.jsx)("div", {
                  className: u.nextBtn
                })]
              })]
            }), t?.length ? (0, v.jsx)(d.tq, {
              grabCursor: !0,
              navigation: {
                nextEl: `.${u.nextBtn}`,
                prevEl: `.${u.prevBtn}`
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
              modules: [c.W_],
              breakpoints: h,
              children: t.map((e => (0, n.createElement)(b, {
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
    4383: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => i
      });
      var n = a(9542);
      var s = a(5668);
      const i = e => {
        let {
          disclaimer: t,
          text: a = null,
          title: i,
          className: r = "",
          style: l = {}
        } = e;
        const d = a ?? t?.text ?? null,
          c = i ? `<h5>${i}</h5>${d}` : d;
        return d ? (0, s.jsx)("div", {
          className: (0, n.classList)("df323a339dbf583bc2c5", r),
          dangerouslySetInnerHTML: {
            __html: c
          },
          style: l
        }) : null
      }
    },
    9595: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => l
      });
      var n = a(822),
        s = a(8976),
        i = a(3347);
      var r = a(5668);
      const l = (0, s.withSimpleErrorBoundary)((e => {
        let {
          buttonTxt: t,
          description: a,
          disclaimer: s,
          faqList: l = [],
          initialLength: d = 6,
          addedLength: c = 6,
          title: o,
          tinaModulesInfo: u
        } = e;
        const [m, v] = (0, n.useState)(d);
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
              children: l.length ? l.slice(0, m).map(((e, t) => {
                let {
                  question: a,
                  answer: n
                } = e;
                return (0, r.jsxs)("details", {
                  children: [(0, r.jsx)("summary", {
                    children: a
                  }), (0, r.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: n
                    }
                  })]
                }, t)
              })) : ""
            }), l.length > m ? (0, r.jsx)(i.Z, {
              onClick: () => v(m + c),
              text: t
            }) : ""]
          }), (0, r.jsx)("div", {
            className: "d8d021028ace4c8cb7a2",
            dangerouslySetInnerHTML: {
              __html: s
            }
          })]
        })
      }))
    },
    213: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => i
      });
      var n = a(8130);
      var s = a(5668);
      const i = e => {
        let {
          children: t,
          style: a
        } = e;
        return (0, s.jsx)(n.E, {
          children: (0, s.jsx)("div", {
            className: "fafb0bfa8877f0bd98dd",
            style: a,
            "data-type": "guide",
            children: (0, s.jsx)("div", {
              className: "f996fd45d04119fb2ddc",
              children: t
            })
          })
        })
      }
    },
    6606: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => o
      });
      var n = a(822),
        s = a(735),
        i = a.n(s),
        r = a(8976),
        l = a(559);
      var d = a(5668);
      const c = e => {
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
          } = (0, l.useImageParser)(a?.thumb ?? {});
          return (0, d.jsx)("div", {
            className: "a02afa3a30a4c2daecb9",
            children: (0, d.jsxs)(r.A, {
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
        o = e => {
          let {
            guides: t = {},
            tinaModulesInfo: a,
            title: s
          } = e;
          const l = i().map(t, "guide_id"),
            o = (0, r.useTinaModuleFetchByIds)({
              ids: l
            }),
            [u, m] = (0, n.useState)(null);
          return (0, n.useEffect)((() => {
            const e = o?.map(((e, t) => (0, d.jsx)(c, {
              guide: e
            }, t)));
            m(e)
          }), [o]), (0, d.jsx)(r.Gen9CoreCarousel, {
            size: "lg",
            slideChildren: u,
            title: a?.[0]?.title ?? s
          })
        }
    },
    628: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => o
      });
      var n = a(9542),
        s = a(1163),
        i = a(4859),
        r = a(7764);
      var l = a(5668);
      const d = () => {
          const {
            guideId: e
          } = (0, s.useParams)(), {
            data: t
          } = (0, i.useQuery)(r.TinaModulesTree, {
            variables: {
              id: e
            },
            skip: !e
          });
          if (!e) return null;
          const a = t?.tinaModulesTree?.[0]?.tree ?? null;
          if (!a) return null;
          const n = a.map((e => {
            let {
              title: t
            } = e;
            return t
          })).join("<span></span>");
          return (0, l.jsx)("div", {
            className: "ccc9a48ce26a7f8eccfa",
            dangerouslySetInnerHTML: {
              __html: `Guides<span></span>${n}`
            }
          })
        },
        c = e => {
          let {
            hero: t
          } = e;
          const {
            alt: a,
            src: s = {}
          } = (0, n.useImageParser)(t) ?? {}, {
            mobile: i
          } = s;
          if (i) return (0, l.jsx)("div", {
            "aria-label": a,
            className: "d029521293f260e2e565",
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
          return (0, l.jsxs)(l.Fragment, {
            children: [a ? (0, l.jsx)(c, {
              hero: a
            }) : "", (0, l.jsxs)("div", {
              className: "bff4125d94bb6017f533",
              children: [(0, l.jsx)(d, {}), (0, l.jsx)("h1", {
                children: n
              }), t && (0, l.jsx)("span", {
                className: "e4ef31aad749a9acd084",
                dangerouslySetInnerHTML: {
                  __html: t
                }
              })]
            })]
          })
        }
    },
    2814: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => h
      });
      var n = a(822),
        s = a(1163),
        i = a(735),
        r = a.n(i),
        l = a(1988),
        d = a(8976),
        c = a(4246);
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
            sections: t
          } = e;
          const [a] = (0, s.useSearchParams)(), {
            state: n
          } = (0, c.MB)(), {
            activeSection: i
          } = n, r = (e, t) => t !== i ? i === e : t === e;
          return (0, u.jsx)("div", {
            className: o.sections,
            children: t?.map((e => {
              let {
                id_hash: t,
                title: n,
                to: s
              } = e;
              return (0, u.jsx)(d.A, {
                to: s,
                className: r(t, a.get("section")) ? o.activeSection : "",
                children: n
              }, s)
            }))
          })
        },
        b = e => {
          let {
            currentId: t,
            group: a
          } = e;
          const [s, i] = (0, n.useState)(null), [b, h] = (0, n.useState)(null), {
            state: g
          } = (0, c.MB)(), {
            activeSection: p
          } = g;
          return (0, n.useEffect)((() => {
            const e = r().findIndex(a?.children, (e => {
              let {
                id_hash: a
              } = e;
              return a === t
            }));
            h(e), i(-1 !== e)
          }), [t, p, a]), (0, u.jsxs)("div", {
            className: o.guideList,
            children: [(0, u.jsx)("button", {
              onClick: () => i(!s),
              children: a.title
            }), (0, u.jsx)(l.E.nav, {
              animate: s ? "open" : "closed",
              variants: v,
              transition: m,
              children: a?.children?.map(((e, a) => {
                let {
                  children: n,
                  id_hash: s,
                  title: i,
                  to: r
                } = e;
                return (0, u.jsxs)("div", {
                  className: o.guide,
                  children: [(0, u.jsx)(d.A, {
                    className: [o.guideLink, t === s ? o.guideLinkCurrent : ""].join(" "),
                    to: r,
                    children: i
                  }), a === b && n?.length ? (0, u.jsx)(f, {
                    sections: n
                  }) : ""]
                }, i)
              }))
            })]
          })
        },
        h = e => {
          let {
            currentId: t
          } = e;
          const a = (0, c.yv)(),
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
            children: a?.map((e => (0, u.jsx)(b, {
              currentId: t,
              group: e
            }, e.id_hash)))
          })
        }
    },
    9860: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => l
      });
      var n = a(822),
        s = a(1961),
        i = a(4246);
      var r = a(5668);
      const l = e => {
        let {
          style: t,
          children: a,
          __anchor: l = null
        } = e;
        const {
          announcePresence: d
        } = (0, i.aQ)(), {
          ref: c,
          inView: o
        } = (0, s.YD)({
          rootMargin: "0px 0px -700px 0px",
          threshold: 0,
          delay: 850
        });
        return (0, n.useEffect)((() => {
          d(l)
        }), [l]), (0, n.useEffect)((() => {
          o && d(l)
        }), [o]), (0, r.jsx)("span", {
          style: t,
          className: "d49366acea7b328026c0",
          name: l,
          ref: c,
          children: a
        })
      }
    },
    1890: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => T
      });
      var n = a(822),
        s = a(1163),
        i = a(8976),
        r = a(6711),
        l = a(9929),
        d = a(3657),
        c = a(3347),
        o = a(735),
        u = a.n(o),
        m = a(4246);
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
            activeExact: t = !1,
            to: a,
            title: s,
            under: r = !0,
            childModules: l = [],
            t: d
          } = e;
          const [c, o] = (0, n.useState)(!1), m = u().debounce((() => {
            o(!1)
          }), 250), h = (0, n.useCallback)((() => {
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
            children: [a ? (0, f.jsx)(i.A, {
              end: t,
              to: a,
              target: a.startsWith("http") ? "_blank" : "_self",
              className: e => {
                let {
                  isActive: t
                } = e;
                return t ? v.activeLink : null
              },
              children: d(s)
            }) : (0, f.jsx)("button", {
              type: "button",
              children: d(s)
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
            t
          } = e;
          const a = (0, m.YM)();
          return (0, f.jsx)("nav", {
            className: v.gen9Nav,
            children: a.map((e => {
              let {
                children: a,
                to: n,
                ...s
              } = e;
              return (0, f.jsx)(b, {
                childModules: a,
                to: n,
                t,
                ...s
              }, n)
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
            setMobileNavOpen: t
          } = (0, m.MB)(), {
            navOpen: a,
            setNavOpen: s
          } = (0, x.useRockstarUser)(), i = (0, g._)(), r = (0, g._)(), l = (0, g._)();
          return (0, n.useEffect)((() => {
            !0 === a && !0 === e && t(!1)
          }), [a]), (0, n.useEffect)((() => {
            i.start(e ? k.open : k.closed), r.start(e ? N.open : N.closed), l.start(e ? j.open : j.closed)
          }), [e]), (0, f.jsxs)("svg", {
            className: "b1179e089e89383904b2",
            onClick: () => (async () => {
              t(!e), !0 === a && s(!1)
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
              animate: i
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
            t
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
          } = (0, m.MB)(), g = (0, n.useRef)(), {
            track: p
          } = (0, r.useGtmTrack)(), [, x] = (0, s.useSearchParams)(), {
            pathname: k
          } = (0, s.useLocation)(), {
            freezeUserShouldSeeMore: N,
            userShouldSeeMore: j
          } = (0, d.useScroll)(), [y, T] = (0, n.useState)(0);
          let C = !1;
          C = !0;
          const w = () => y > 1023;
          return (0, n.useEffect)((() => {
            o || N || v(j)
          }), [N, o, j]), (0, n.useEffect)((() => {
            b(!1)
          }), [k]), (0, n.useEffect)((() => {
            o && v(!1)
          }), [o]), (0, n.useEffect)((() => {
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
                children: [(0, f.jsx)(i.A, {
                  className: _.rockstarLogo,
                  to: "../"
                }), (0, f.jsx)("div", {
                  className: _.logoDivider
                }), w() && (0, f.jsx)("div", {
                  className: _.brandLogo
                }), (0, f.jsx)(S, {})]
              }), !w() && (0, f.jsx)("div", {
                className: _.brandLogo,
                "data-brand": a
              }), (0, f.jsx)(h, {}), (0, f.jsx)("div", {
                className: _.buttonArea,
                children: (0, f.jsxs)("div", {
                  className: _.navBtn,
                  children: [!(y < 768) && (0, f.jsx)(c.Z, {
                    text: t("Buy Now"),
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
                        text: t("Buy Now").toLowerCase()
                      })
                    }
                  }), (0, f.jsx)(r.MenuButton, {})]
                })
              })]
            })
          })
        }))
    },
    8388: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => c
      });
      var n = a(8976),
        s = a(9542),
        i = a(7339),
        r = a(5565),
        l = a(4383);
      var d = a(5668);
      const c = n.framer.withFadeIn((e => {
        let {
          brands: t = [],
          content: a,
          ctas: n = [],
          disclaimer: c,
          image: o,
          large: u = !1,
          title: m,
          image_on_right: v = !1,
          style: f = {},
          className: b = ""
        } = e;
        const h = (0, s.useGetCdnSource)(o?.full_src ?? null) ?? null;
        return (0, d.jsxs)("div", {
          className: (0, s.classList)("f2cf909dbf3361ec8d57", u ? "c950136646fbbd777bb5" : "", v ? "e6f94a3e17e22b45f308" : "", h ? "" : "cea3e99427bd215be499", b),
          style: f,
          children: [h ? (0, d.jsx)("div", {
            className: "bcdbc4cde7375da50995",
            style: {
              background: `url(${h}) no-repeat center/cover`
            }
          }) : "", (0, d.jsxs)("div", {
            className: "c5071baf77e4a94ee8fc",
            children: [(0, d.jsx)(r.Z, {
              brands: t
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
            }), (0, d.jsx)(i.Z, {
              ctas: n
            }), (0, d.jsx)(l.Z, {
              disclaimer: c
            })]
          })]
        })
      }))
    },
    4268: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => l
      });
      var n = a(9542),
        s = a(8388);
      const i = {
        imageTextGroupGroup: "fa256a3137bdd2fa57fc",
        bg: "cdba5b54a8d9de138a27",
        bgMobile: "c5eb13f304cc530611c3",
        bgDesktop: "d2094248c0a2dbe4ea2e"
      };
      var r = a(5668);
      const l = e => {
        let {
          bg: t,
          image_text_groups: a = [],
          style: l = {},
          className: d = ""
        } = e;
        const c = (0, n.useGetCdnSource)(t?.image?.mobile?.full_src ?? null),
          o = (0, n.useGetCdnSource)(t?.image?.desktop?.full_src ?? null) ?? c;
        return a.length ? (0, r.jsxs)("div", {
          className: (0, n.classList)(i.imageTextGroupGroup, d),
          style: {
            ...l
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
          }) : "", a.map(((e, t) => (0, r.jsx)(s.Z, {
            ...e
          }, t)))]
        }) : null
      }
    },
    7456: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => l
      });
      var n = a(8976),
        s = a(9542);
      const i = {
        linkoutSection: "f16a28b8596593e62188",
        cta: "e44235a0e32de93918e3"
      };
      var r = a(5668);
      const l = e => {
        let {
          text: t,
          cta: l,
          to: d,
          className: c = "",
          style: o = {}
        } = e;
        return (0, r.jsxs)(n.A, {
          className: (0, s.classList)(i.linkoutSection, c),
          to: d,
          style: o,
          children: [t && (0, r.jsx)("div", {
            className: i.text,
            children: t
          }), l && (0, r.jsxs)("div", {
            className: i.cta,
            children: [l, " ", (0, r.jsx)("img", {
              src: a(928)
            })]
          })]
        })
      }
    },
    1273: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => i
      });
      var n = a(822);
      var s = a(5668);
      const i = e => {
        let {
          children: t,
          style: a,
          theme: i
        } = e;
        const [r, l] = (0, n.useState)(i);
        return (0, n.useEffect)((() => {
          i && l(i)
        }), [i]), (0, s.jsx)("div", {
          className: "cce3c47240f1835b9e3d",
          style: a,
          "data-theme": r,
          children: t
        })
      }
    },
    1079: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => r
      });
      var n = a(4224),
        s = a.n(n),
        i = a(5668);
      const r = e => {
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
    1919: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        BrandMessage: () => i,
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
        Logo: () => E,
        SectionTitle: () => M,
        TinaWrapper: () => B.Z,
        VideoPlayerWrapper: () => L.Z
      });
      var n = a(5565);
      var s = a(5668);
      const i = e => {
        let {
          brand: t,
          headline_left: a,
          headline_right: i,
          info: r
        } = e;
        return (0, s.jsxs)("div", {
          className: "b94144341266bb5d0222",
          children: [(0, s.jsx)(n.Z, {
            brands: [{
              brand: t
            }]
          }), (0, s.jsxs)("div", {
            className: "de1a4b6a97abe3325a0f",
            children: [(0, s.jsxs)("h2", {
              children: [a, " ", (0, s.jsx)("span", {
                children: i
              })]
            }), (0, s.jsx)("p", {
              children: r
            })]
          })]
        })
      };
      var r = a(3989);
      const l = e => {
        let {
          left: t,
          right: a
        } = e;
        return (0, s.jsx)("div", {
          className: "e17095a50c41fd5df54d",
          children: (0, s.jsxs)("h2", {
            children: [t, " ", (0, s.jsx)("span", {
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
            title: t = "",
            mobileImg: a,
            desktopImg: n
          } = e;
          const i = (0, x.useGetCdnSource)(a ?? null),
            r = (0, x.useGetCdnSource)(n ?? i);
          return (0, s.jsx)("div", {
            className: N.shard,
            style: {
              "--background-image-mobile": `url(${i})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, s.jsx)("h5", {
              children: t
            })
          })
        },
        y = e => {
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
              return (0, s.jsx)(j, {
                title: t,
                mobileImg: n?.full_src,
                desktopImg: i?.full_src
              })
            })))
          }), [a]), n ? (0, s.jsx)("div", {
            className: N.shardsCarousel,
            children: (0, s.jsx)(g.Gen9CoreCarousel, {
              title: t,
              slideChildren: n,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        S = e => {
          let {
            brands: t = [],
            backgroundImg: a,
            layeredImg: i,
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
            h = (0, x.useGetCdnSource)(i?.mobile?.full_src ?? null),
            j = (0, x.useGetCdnSource)(i?.desktop?.full_src ?? h),
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
          return (0, s.jsxs)(p.E.div, {
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
            children: [(0, s.jsxs)("div", {
              className: N.images,
              children: [b && f ? (0, s.jsx)("div", {
                className: N.background,
                style: a?.style ?? {}
              }) : "", h && j ? (0, s.jsx)("div", {
                className: N.layered
              }) : "", (0, s.jsx)("div", {
                className: N.gradient
              })]
            }), (0, s.jsxs)(p.E.div, {
              className: N.content,
              initial: "hidden",
              animate: "visible",
              variants: S,
              children: [(0, s.jsx)(p.E.div, {
                variants: _,
                children: (0, s.jsx)(n.Z, {
                  brands: t
                })
              }), d.length ? (0, s.jsx)(p.E.div, {
                variants: _,
                children: (0, s.jsx)(g.ExpandingPlatformButton, {
                  buttonText: l,
                  platformsAndLinks: d,
                  children: (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(p.E.div, {
                      className: N.descriptions,
                      variants: _,
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
                      variants: _,
                      children: (0, s.jsx)(k.Z, {
                        buttons: r,
                        className: N.buttonGroup
                      })
                    })]
                  })
                })
              }) : (0, s.jsxs)(s.Fragment, {
                children: [(0, s.jsxs)(p.E.div, {
                  className: N.descriptions,
                  variants: _,
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
                  variants: _,
                  children: (0, s.jsx)(k.Z, {
                    buttons: r,
                    className: N.buttonGroup
                  })
                })]
              }), u && (0, s.jsx)(p.E.div, {
                className: N.legalText,
                variants: _,
                children: (0, s.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: u
                  }
                })
              })]
            }), m?.shards && (0, s.jsx)(y, {
              ...m
            })]
          })
        };
      var _ = a(8388),
        T = a(4268),
        C = a(7456);
      const w = {},
        E = e => {
          let {
            brand: t
          } = e;
          return (0, s.jsx)("div", {
            className: w[t]
          })
        },
        M = () => (0, s.jsx)("h2", {
          children: "Section"
        });
      var B = a(1273),
        L = a(1079)
    },
    4246: (e, t, a) => {
      "use strict";
      a.d(t, {
        MB: () => i,
        aQ: () => r.a,
        yv: () => d,
        YM: () => o
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
      var r = a(8130),
        l = a(6177);
      const d = () => {
        const {
          data: e
        } = (0, n.useQuery)(l.TinaModulesTree, {
          variables: {
            type: "gen9-guide-group"
          }
        });
        return e?.tinaModulesTree ?? null
      };
      var c = a(822);
      a(735), a(548);
      const o = () => {
        const [e, t] = (0, c.useState)([{
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
      }
    },
    8130: (e, t, a) => {
      "use strict";
      a.d(t, {
        E: () => o,
        a: () => c
      });
      var n = a(822),
        s = a(1163),
        i = a(4246),
        r = a(3657),
        l = a(5668);
      const d = (0, n.createContext)(),
        c = () => (0, n.useContext)(d),
        o = e => {
          let {
            children: t
          } = e;
          const [a, c] = (0, n.useState)(null), [o, u] = (0, s.useSearchParams)(), {
            setActiveSection: m,
            state: v
          } = (0, i.MB)(), {
            activeSection: f
          } = v, {
            pauseUserShouldSeeMore: b
          } = (0, r.useScroll)(), h = (0, n.useCallback)((e => {
            if (e !== o.get("section")) return void(e !== f && m(e));
            const t = document.getElementsByName(o.get("section"))?.[0];
            t && (b(), m(o.get("section")), t.scrollIntoView({
              behavior: "smooth"
            }))
          }), [o.get("section"), a]);
          return (0, n.useEffect)((() => {
            o.get("section") && h(o.get("section"))
          }), [o.get("section")]), (0, l.jsx)(d.Provider, {
            value: {
              announcePresence: h,
              section: a,
              setSection: c
            },
            children: t
          })
        }
    },
    548: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        componentsForTinaParser: () => p,
        componentsForTinaParserGuide: () => x
      });
      var n = a(8976),
        s = a(2672),
        i = a(420),
        r = a.n(i),
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
          CalloutSection: n.CalloutSection,
          Card: s.Card,
          CardWithImageGallery: s.CardWithImageGallery,
          ConditionalBlock: n.ConditionalBlock,
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
          gen9: g,
          TinaModuleFetchNRender: n.TinaModuleFetchNRender
        },
        x = {
          CalloutSection: n.CalloutSection,
          Card: s.Card,
          CardWithImageGallery: s.CardWithImageGallery,
          ConditionalBlock: n.ConditionalBlock,
          Carousel: n.Carousel,
          ExpandingPlatformButton: n.ExpandingPlatformButton,
          Hero: n.Hero,
          Grid: n.Grid,
          TextCard: s.TextCard,
          Deck: s.Deck,
          GroupOfItems: r(),
          gen9: {
            BuyNow: l.Z,
            Disclaimer: d.Z,
            FAQ: c.Z,
            Guide: o.Z,
            GuideGroup: u.Z,
            GuideIntro: m.Z,
            GuideSection: v.Z,
            Hero: n.Hero,
            ImageTextGroupGroup: f.Z,
            LinkoutSection: b.Z,
            TinaWrapper: h.Z,
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
    7764: e => {
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
          r = new Set,
          l = new Set;
        for (i.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return r.forEach((function(t) {
          var n = s(e, t);
          n && a.definitions.push(n)
        })), a
      }(t, "TinaModulesTree")
    },
    6177: e => {
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
          r = new Set,
          l = new Set;
        for (i.forEach((function(e) {
            l.add(e)
          })); l.size > 0;) {
          var d = l;
          l = new Set, d.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              l.add(e)
            })))
          }))
        }
        return r.forEach((function(t) {
          var n = s(e, t);
          n && a.definitions.push(n)
        })), a
      }(t, "TinaModulesTree")
    },
    3830: (e, t, a) => {
      "use strict";
      a.d(t, {
        Z: () => n
      });
      const n = {
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
    7060: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/bcaca8dc494732cb2ca1.svg"
    },
    4273: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/af7a4b3f215a9ffd7074.svg"
    },
    8838: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/399e4fadd28201f041fe.svg"
    },
    9349: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/fa23bf61b10367b5ae17.svg"
    },
    3356: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/3b3e471f51bfbca10f05.svg"
    },
    8375: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/cd7ecd01ec2f916d6c4b.svg"
    },
    5262: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/3852a2c6a70d09be710a.svg"
    },
    3004: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/1b0d3aef02ce7792cd29.svg"
    },
    928: (e, t, a) => {
      "use strict";
      e.exports = a.p + "img/b23842cdcf5fcfe4e323.svg"
    }
  }
]);