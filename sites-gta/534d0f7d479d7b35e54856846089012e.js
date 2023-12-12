"use strict";
(self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [530], {
    5955: (e, t, s) => {
      s.r(t), s.d(t, {
        default: () => N
      });
      var r = s(927),
        a = s(7661),
        n = s(5921),
        i = s(8269),
        o = s(2474),
        c = s(1090),
        l = s(9929),
        d = s(6711),
        u = s(6820);
      var g = s(3705);
      const f = e => {
        let {
          children: t,
          showModal: s = !1,
          dialogRef: n,
          onClose: i = (() => {})
        } = e;
        return (0, r.useEffect)((() => {
          s && n.current && (n.current.showModal(), setTimeout((() => {
            a.gsap.set(window, {
              scrollTo: 0
            })
          }), 300))
        }), [s]), (0, g.jsxs)("dialog", {
          ref: n,
          className: "rockstargames-sites-gtaf9e43e4fb6047fea4c181b2685e6a31f",
          onClick: e => (e => {
            e.currentTarget && (e.currentTarget.close(), i(), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation())
          })(e),
          children: [(0, g.jsx)("button", {
            className: "rockstargames-sites-gtaf32ab0b8f2b383c67fa243b02bf04344",
            onClick: () => (n.current?.close(), void i()),
            type: "button",
            value: "cancel",
            "aria-label": "close",
            children: (0, g.jsx)("div", {
              className: "rockstargames-sites-gtacd8d83408c5caf82b34b82ba9d5815bc"
            })
          }), (0, g.jsx)("div", {
            className: "rockstargames-sites-gtad2f4f5cebf82138c2ba6b42325a7d718",
            children: t
          })]
        })
      };
      var m = s(4463);
      const p = e => {
          let {
            alt: t = "",
            className: s = "",
            clipRule: r = "evenodd",
            fill: a = "white",
            fillRule: n = "evenodd"
          } = e;
          return (0, g.jsxs)("svg", {
            className: s,
            fill: a,
            version: "1.1",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, g.jsx)("title", {
              children: t
            }), (0, g.jsx)("path", {
              fillRule: n,
              clipRule: r,
              d: "M4.52081 2.12229C4.84189 1.947 5.23305 1.96101 5.54076 2.15882L19.5408 11.1588C19.827 11.3428 20 11.6597 20 12C20 12.3403 19.827 12.6572 19.5408 12.8412L5.54076 21.8412C5.23305 22.039 4.84189 22.053 4.52081 21.8777C4.19974 21.7024 4 21.3658 4 21V3C4 2.63419 4.19974 2.29758 4.52081 2.12229Z"
            })]
          })
        },
        h = {
          infoSection: "rockstargames-sites-gtac1c30faa6c9f49b7ceee4caf32fd9b45",
          logo: "rockstargames-sites-gtaca8f6a169617af3fc7b90e396b382b80",
          content: "rockstargames-sites-gtafa96ee91cc2f2721933253834876a0af",
          text: "rockstargames-sites-gtaf9ec79fe3eae9c71837a40b17f88b98b",
          header: "rockstargames-sites-gtabc7ad0da65fb8d5933bd29feb81efbcd",
          blurb: "rockstargames-sites-gtace0ecd491f888f26193d7958cd292b57",
          button: "rockstargames-sites-gtaa79e91c631e549f3af7e691c87aa42a2",
          buttonIcon: "rockstargames-sites-gtaac8072b64972c11ee294ad2a351c3667",
          platforms: "rockstargames-sites-gtafec2f360e23ebef8b2ca689e3c2dc5c5"
        };
      a.gsap.registerPlugin(n.i, o.L);
      const b = (0, r.forwardRef)(((e, t) => {
        let {
          blurb: r,
          buttonText: a,
          className: n = "",
          image: i = "logo_secondary_color.png",
          header: o
        } = e;
        const {
          setIsModalOpen: c
        } = (0, m.TR)(), {
          track: l
        } = (0, d.useGtmTrack)();
        return (0, g.jsxs)("div", {
          className: [h.infoSection, n || ""].join(" "),
          ref: t,
          children: [(0, g.jsx)("img", {
            className: h.logo,
            src: s(8511)(`./${i}`),
            alt: ""
          }), (0, g.jsxs)("div", {
            className: h.content,
            children: [(0, g.jsxs)("div", {
              className: h.text,
              children: [(0, g.jsx)("h1", {
                className: h.header,
                children: o
              }), (0, g.jsx)("div", {
                className: h.blurb,
                dangerouslySetInnerHTML: {
                  __html: (u = r, u.split(/\r\n|\r|\n/).reduce(((e, t) => {
                    let s = e;
                    return t.trim().length && (s += `<p>${t}</p>`), s
                  })))
                }
              })]
            }), (0, g.jsxs)("button", {
              type: "button",
              className: h.button,
              onClick: () => {
                l({
                  event: "video_play",
                  event_category: "video",
                  event_action: "play",
                  element_placement: "landing_page_description",
                  event_label: "manual",
                  video_id: "promo_video",
                  video_title: "promo_video"
                }), c(!0)
              },
              children: [(0, g.jsx)(p, {
                className: h.buttonIcon
              }), a]
            })]
          })]
        });
        var u
      }));
      var v = s(8976),
        w = s(3657);
      s(668);
      const x = {
          infoSectionFooter: "rockstargames-sites-gtaa6534d16de3de0cad30f0cc18bef18ce",
          logo: "rockstargames-sites-gtad5e76dfe433e84eeb3f450cdb02d64f8",
          platforms: "rockstargames-sites-gtaa5a6a6858bae074d7a93de089b73cd2a",
          rating: "rockstargames-sites-gtaff1b0cadd8996e1e7c9529fe7ada9ec0",
          withoutBorder: "rockstargames-sites-gtaa747edf520af07704d6be4f93c40e226"
        },
        k = {
          rating_img: "pegi_rp.png",
          rating_link: "https://pegi.info/"
        },
        _ = {
          rating_img: "esrb_rp.svg",
          rating_link: "https://www.esrb.org/"
        },
        j = (e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const t = (0, w.useLocale)(),
              s = (0, r.useMemo)((() => function(e) {
                let [t, s] = e.split(/[-_]/);
                return s = s.toLowerCase(), "cn" === s && (s = "hans"), [t, s]
              }(t)), [t]);
            return e?.[s[1]] ?? e.us
          }
        })({
          us: _,
          br: {
            rating_img: "vaci_rp.png",
            rating_link: "https://www.gov.br/mj/pt-br/assuntos/seus-direitos/classificacao-1"
          },
          de: {
            rating_img: "usk_rp.svg",
            rating_link: "http://www.usk.de"
          },
          es: k,
          fr: k,
          hans: _,
          it: k,
          jp: {
            rating_img: "cero_rp.png",
            rating_link: "https://www.cero.gr.jp/"
          },
          kr: _,
          mx: _,
          pl: k,
          ru: _,
          tw: _
        }),
        T = (0, r.forwardRef)(((e, t) => {
          let {
            className: r = "",
            titleSlug: a = "",
            platforms: n = [{
              name: "playstation",
              url: "playstation.svg"
            }, {
              name: "xbox",
              url: "xbox.svg"
            }]
          } = e;
          const i = j(),
            o = "esrb_rp.svg" === i.rating_img ? "<p>May contain content inappropriate for children.</p>" : void 0,
            c = "esrb_rp.svg" === i.rating_img ? '<p>Visit <a href="https://esrb.org" target="_blank">esrb.org</a> for rating information.</p>' : void 0;
          return (0, g.jsxs)("div", {
            className: [x.infoSectionFooter, r || ""].join(" "),
            ref: t,
            children: [(0, g.jsx)("div", {
              className: x.rating,
              children: (0, g.jsx)(v.Rating, {
                className: [x.mobileRating, x.rating, x.withoutBorder].join(" "),
                titleSlug: a || null,
                img: i.rating_img,
                descriptors: o,
                href: i.rating_link,
                footer: c
              })
            }), n.length && (0, g.jsx)("div", {
              className: [x.platforms, x.hideOnMobile].join(" "),
              children: n.map((e => {
                let {
                  name: t,
                  url: r
                } = e;
                return (0, g.jsx)("img", {
                  src: s(8511)(`./${r}`),
                  alt: t
                }, r)
              }))
            }), (0, g.jsx)("img", {
              className: [x.logo, x.hideOnMobile].join(" "),
              src: s(4640),
              alt: "Rockstar Games logo"
            })]
          })
        }));
      var y = s(2316);
      const R = {
        destinationPage: "rockstargames-sites-gtabc6ca598d5a617f9d5de3b64fe313f03",
        footerContainer: "rockstargames-sites-gtaf1c7372665fda23e3ab90506aa5d0020",
        destinationContainer: "rockstargames-sites-gtaa3e59fbf2597d85b4fd294987f069625",
        active: "rockstargames-sites-gtacca34a9fd64948f177503882c7e50aae",
        hero: "rockstargames-sites-gtacccdbd1e2d26d8f97046287bbf957bee",
        infoSectionContainer: "rockstargames-sites-gtae57de03b5c8c667b1771e43a0c067a9a",
        videoDialog: "rockstargames-sites-gtaf00e2cd130e8bce484a2813d0993e2ca",
        videoDialogContent: "rockstargames-sites-gtae4a0e6055c593cb409ff99ac4d435967"
      };
      a.gsap.registerPlugin(n.i, i.x, o.L);
      const C = () => {
          const {
            timelines: e,
            setIsStandalone: t,
            isVideoPlayerActive: s,
            createYouTubePlayer: o,
            dialogPlayerRef: p,
            isModalOpen: h,
            setIsModalOpen: v,
            setIsVideoPlayerActive: w,
            resetVideo: x
          } = (0, m.TR)(), {
            setStandalone: k
          } = (0, l.useRockstarLocalState)(), _ = (0, r.useRef)(), j = (0, r.useRef)(null), C = (0, r.useRef)(null), N = (0, r.useRef)(null), I = (0, r.useRef)(null), S = (0, r.useRef)(null), L = (0, r.useRef)(null), P = (0, r.useRef)(null), $ = (0, r.useRef)(s), E = (0, r.useRef)(null), {
            loading: O,
            translation: W
          } = (0, m.T_)(), {
            track: M
          } = (0, d.useGtmTrack)();
          (0, r.useEffect)((() => {
            a.gsap.set(window, {
              scrollTo: 0
            })
          }), []);
          const D = e => {
            const t = e.relatedTarget;
            j.current && (C?.current?.heroUIRef?.current.contains(t) ? a.gsap.set(window, {
              scrollTo: 0
            }) : j.current.contains(t) && a.gsap.set(window, {
              scrollTo: t
            }))
          };
          return (0, r.useEffect)((() => (t(!0), k(!0), window.document.body.style.overflowY = "hidden", window.document.addEventListener("focusout", D), () => {
            window.document.body.style.overflowY = "unset", window.document.removeEventListener("focusout", D), k(!1)
          })), []), (0, r.useEffect)((() => {
            $.current = s, _.current && _.current.paused(s)
          }), [s]), (0, r.useEffect)((() => (S.current && (_.current = i.x.create({
            content: S.current,
            smooth: .5,
            normalizeScroll: !0
          }), _.current.paused(!0)), () => {
            _.current?.kill()
          })), [S.current]), (0, r.useLayoutEffect)((() => {
            const t = a.gsap.matchMedia();
            e?.introTimeline && t.add({
              isVerticalLayout: "(max-width: 1279px)",
              isHorizontalLayout: "(min-width: 1280px)"
            }, (t => (e.introTimeline.eventCallback("onComplete", (() => {
              _.current && _.current.paused(!1);
              const {
                isVerticalLayout: e,
                isHorizontalLayout: s
              } = t.conditions, r = C?.current?.heroUIRef?.current, i = C?.current?.heroImagesRefs?.current?.heroImagesRef?.current, o = n.i.isTouch ? .75 : 100, c = n.i.isTouch ? a.Expo.easeInOut : "none";
              P.current && P.current.progress(0).kill(), P.current = a.gsap.timeline({
                paused: !0,
                defaults: {
                  duration: o,
                  force3D: !0
                },
                scrollTrigger: {
                  trigger: j.current,
                  toggleActions: "play none none reverse",
                  toggleClass: `${R.active}`,
                  pin: !0,
                  start: n.i.isTouch ? "top +=-1" : "top top",
                  end: n.i.isTouch ? "+=50" : "+=300",
                  scrub: !n.i.isTouch && .5,
                  invalidateOnRefresh: !0,
                  snap: !n.i.isTouch && {
                    snapTo: 1,
                    duration: {
                      min: .05,
                      max: .3
                    },
                    ease: a.Power3.easeIn
                  },
                  onLeaveBack: () => {
                    a.gsap.set(L?.current, {
                      display: "none"
                    })
                  },
                  onToggle: e => {
                    _.current && (a.gsap.set(L?.current, {
                      display: e.isActive ? "none" : "block"
                    }), -1 !== e.direction && ($.current || (_.current.paused(!0), setTimeout((() => {
                      $.current || _?.current?.paused(!1)
                    }), 500))))
                  }
                },
                onComplete: () => {
                  1 === n.i.isTouch && a.gsap.set(L?.current, {
                    display: "block"
                  })
                },
                onReverseComplete: () => {
                  1 === n.i.isTouch && a.gsap.set(L?.current, {
                    display: "none"
                  })
                }
              }).set(j.current, {
                height: () => I?.current?.clientHeight,
                maxHeight: () => I?.current?.clientHeight
              }).fromTo(r, {
                opacity: 1
              }, {
                opacity: 0,
                duration: n.i.isTouch ? .4 * o : .2 * o,
                ease: n.i.isTouch ? a.Sine.easeInOut : "sine.easeInOut",
                immediateRender: !1
              }).fromTo(C?.current?.heroRef?.current, {
                backgroundSize: () => 10 * window.innerWidth + "px",
                maskSize: () => 10 * window.innerWidth + "px",
                backgroundPosition: () => n.i.isTouch ? `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.2}px` : `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.3}px`,
                maskPosition: () => n.i.isTouch ? `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.2}px` : `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.3}px`
              }, {
                backgroundSize: () => N?.current?.children[0].clientWidth || N?.current?.children[0].scrollWidth || 0,
                maskSize: () => N?.current?.children[0].clientWidth || N?.current?.children[0].scrollWidth || 0,
                backgroundPosition: () => {
                  const e = N?.current?.children[0]?.getBoundingClientRect();
                  return `${e?.x??0}px ${e?.y??0}px`
                },
                maskPosition: () => {
                  const e = N?.current?.children[0]?.getBoundingClientRect();
                  return `${e?.x??0}px ${e?.y??0}px`
                },
                ease: n.i.isTouch ? c : "power2.easeInOut"
              }, "<").to(i, {
                "--hero-image-width": n.i.isTouch ? "110%" : "105%",
                "--hero-image-height": n.i.isTouch ? "110%" : "105%",
                "--hero-image-offset-bottom": n.i.isTouch ? "110%" : "105%",
                ease: n.i.isTouch ? c : "none"
              }, "<").to(i, {
                opacity: 0,
                duration: .2 * o,
                ease: "power2.easeInOut"
              }, "<85%").fromTo(N.current, {
                opacity: 0,
                pointerEvents: "none"
              }, {
                opacity: 1,
                pointerEvents: "auto",
                duration: .2 * o,
                ease: n.i.isTouch ? a.Power1.easeInOut : "power1.easeInOut"
              }, "<20%")
            }), []), () => {})))
          }), [s, e?.introTimeline, j?.current, C?.current?.heroRef?.current, C?.current?.heroUIRef?.current, C?.current?.heroImagesRef?.current, N?.current, L?.current]), (0, r.useEffect)((() => {
            h && p.current && o({
              target: p,
              id: "dialog"
            })
          }), [p, h]), (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsx)(f, {
              showModal: h,
              onClose: () => (v(!1), w(!1), x(), void M({
                event: "takeover_close",
                element_placement: "info_section"
              })),
              dialogRef: E,
              children: h && (0, g.jsx)("div", {
                className: R.videoDialog,
                children: (0, g.jsx)("div", {
                  className: R.videoDialogContent,
                  ref: p
                })
              })
            }), (0, g.jsxs)("div", {
              className: R.destinationPage,
              ref: S,
              children: [(0, g.jsxs)("div", {
                className: R.destinationContainer,
                ref: j,
                children: [(0, g.jsx)(u.Z, {
                  ref: C,
                  className: R.hero,
                  standalone: !0
                }), (0, g.jsx)("div", {
                  ref: I,
                  className: R.infoSectionContainer,
                  children: (0, g.jsx)(b, {
                    blurb: O ? "" : W("d2.destDescription"),
                    buttonText: O ? "" : W("d2.playbackCTA"),
                    header: O ? "" : W("d2.destHeadline"),
                    className: R.infoSection,
                    ref: N
                  })
                })]
              }), (0, g.jsx)(y.Z, {
                showCloseButton: !0
              }), (0, g.jsxs)("div", {
                ref: L,
                className: R.footerContainer,
                children: [(0, g.jsx)(T, {
                  platforms: [{
                    name: "playstation",
                    url: "playstation.svg"
                  }, {
                    name: "xbox",
                    url: "xbox.svg"
                  }]
                }), (0, g.jsx)(c.FooterNav, {})]
              })]
            })]
          })
        },
        N = () => (0, g.jsx)(m.A1, {
          children: (0, g.jsx)("span", {
            children: (0, g.jsx)(C, {})
          })
        })
    }
  }
]);