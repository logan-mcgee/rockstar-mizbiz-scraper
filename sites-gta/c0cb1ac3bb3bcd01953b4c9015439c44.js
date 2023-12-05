"use strict";
(self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [784], {
    495: (e, t, r) => {
      r.r(t), r.d(t, {
        default: () => C
      });
      var s = r(927),
        n = r(7661),
        a = r(5921),
        i = r(8269),
        o = r(2474),
        c = r(6711),
        l = r(1090),
        d = r(9929),
        u = r(6820),
        g = r(4463),
        f = r(3705);
      const p = e => {
          let {
            alt: t = "",
            className: r = "",
            clipRule: s = "evenodd",
            fill: n = "white",
            fillRule: a = "evenodd"
          } = e;
          return (0, f.jsxs)("svg", {
            className: r,
            fill: n,
            version: "1.1",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, f.jsx)("title", {
              children: t
            }), (0, f.jsx)("path", {
              fillRule: a,
              clipRule: s,
              d: "M4.52081 2.12229C4.84189 1.947 5.23305 1.96101 5.54076 2.15882L19.5408 11.1588C19.827 11.3428 20 11.6597 20 12C20 12.3403 19.827 12.6572 19.5408 12.8412L5.54076 21.8412C5.23305 22.039 4.84189 22.053 4.52081 21.8777C4.19974 21.7024 4 21.3658 4 21V3C4 2.63419 4.19974 2.29758 4.52081 2.12229Z"
            })]
          })
        },
        m = {
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
      n.gsap.registerPlugin(a.i, o.L);
      const h = (0, s.forwardRef)(((e, t) => {
        let {
          blurb: s,
          buttonText: i,
          className: o = "",
          image: l = "logo_secondary_color.png",
          header: d
        } = e;
        const {
          setIsVideoPlayerActive: u,
          playButtonRef: h
        } = (0, g.TR)(), {
          track: b
        } = (0, c.useGtmTrack)();
        return (0, f.jsxs)("div", {
          className: [m.infoSection, o || ""].join(" "),
          ref: t,
          children: [(0, f.jsx)("img", {
            className: m.logo,
            src: r(8511)(`./${l}`),
            alt: ""
          }), (0, f.jsxs)("div", {
            className: m.content,
            children: [(0, f.jsxs)("div", {
              className: m.text,
              children: [(0, f.jsx)("h1", {
                className: m.header,
                children: d
              }), (0, f.jsx)("div", {
                className: m.blurb,
                dangerouslySetInnerHTML: {
                  __html: (w = s, w.split(/\r\n|\r|\n/).reduce(((e, t) => {
                    let r = e;
                    return t.trim().length && (r += `<p>${t}</p>`), r
                  })))
                }
              })]
            }), (0, f.jsxs)("button", {
              type: "button",
              className: m.button,
              onClick: () => {
                n.gsap.set(window, {
                  scrollTo: 0
                }), setTimeout((() => h.current.click()), 750), u(!0), a.i.refresh(), b({
                  event: "video_play",
                  event_category: "video",
                  event_action: "play",
                  element_placement: "landing_page_description",
                  event_label: "manual",
                  video_id: "promo_video",
                  video_title: "promo_video"
                })
              },
              children: [(0, f.jsx)(p, {
                className: m.buttonIcon
              }), i]
            })]
          })]
        });
        var w
      }));
      var b = r(8976),
        w = r(3657);
      r(668);
      const x = {
          infoSectionFooter: "rockstargames-sites-gtaa6534d16de3de0cad30f0cc18bef18ce",
          logo: "rockstargames-sites-gtad5e76dfe433e84eeb3f450cdb02d64f8",
          platforms: "rockstargames-sites-gtaa5a6a6858bae074d7a93de089b73cd2a",
          rating: "rockstargames-sites-gtaff1b0cadd8996e1e7c9529fe7ada9ec0",
          withoutBorder: "rockstargames-sites-gtaa747edf520af07704d6be4f93c40e226"
        },
        v = {
          rating_img: "pegi_rp.png",
          rating_link: "https://pegi.info/"
        },
        k = {
          rating_img: "esrb_rp.svg",
          rating_link: "https://www.esrb.org/"
        },
        _ = (e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const t = (0, w.useLocale)(),
              r = (0, s.useMemo)((() => function(e) {
                let [t, r] = e.split(/[-_]/);
                return r = r.toLowerCase(), "cn" === r && (r = "hans"), [t, r]
              }(t)), [t]);
            return e?.[r[1]] ?? e.us
          }
        })({
          us: k,
          br: {
            rating_img: "vaci_rp.png",
            rating_link: "https://www.gov.br/mj/pt-br/assuntos/seus-direitos/classificacao-1"
          },
          de: {
            rating_img: "usk_rp.svg",
            rating_link: "http://www.usk.de"
          },
          es: v,
          fr: v,
          hans: k,
          it: v,
          jp: {
            rating_img: "cero_rp.png",
            rating_link: "https://www.cero.gr.jp/"
          },
          kr: k,
          mx: k,
          pl: v,
          ru: k,
          tw: k
        }),
        T = (0, s.forwardRef)(((e, t) => {
          let {
            className: s = "",
            titleSlug: n = "",
            platforms: a = [{
              name: "playstation",
              url: "playstation.svg"
            }, {
              name: "xbox",
              url: "xbox.svg"
            }]
          } = e;
          const i = _(),
            o = "esrb_rp.svg" === i.rating_img ? "<p>May contain content inappropriate for children.</p>" : void 0,
            c = "esrb_rp.svg" === i.rating_img ? '<p>Visit <a href="https://esrb.org" target="_blank">esrb.org</a> for rating information.</p>' : void 0;
          return (0, f.jsxs)("div", {
            className: [x.infoSectionFooter, s || ""].join(" "),
            ref: t,
            children: [(0, f.jsx)("div", {
              className: x.rating,
              children: (0, f.jsx)(b.Rating, {
                className: [x.mobileRating, x.rating, x.withoutBorder].join(" "),
                titleSlug: n || null,
                img: i.rating_img,
                descriptors: o,
                href: i.rating_link,
                footer: c
              })
            }), a.length && (0, f.jsx)("div", {
              className: [x.platforms, x.hideOnMobile].join(" "),
              children: a.map((e => {
                let {
                  name: t,
                  url: s
                } = e;
                return (0, f.jsx)("img", {
                  src: r(8511)(`./${s}`),
                  alt: t
                }, s)
              }))
            }), (0, f.jsx)("img", {
              className: [x.logo, x.hideOnMobile].join(" "),
              src: r(4640),
              alt: "Rockstar Games logo"
            })]
          })
        }));
      var y = r(2316);
      const j = {
        destinationPage: "rockstargames-sites-gtabc6ca598d5a617f9d5de3b64fe313f03",
        footerContainer: "rockstargames-sites-gtaf1c7372665fda23e3ab90506aa5d0020",
        destinationContainer: "rockstargames-sites-gtaa3e59fbf2597d85b4fd294987f069625",
        active: "rockstargames-sites-gtacca34a9fd64948f177503882c7e50aae",
        hero: "rockstargames-sites-gtacccdbd1e2d26d8f97046287bbf957bee",
        infoSectionContainer: "rockstargames-sites-gtae57de03b5c8c667b1771e43a0c067a9a"
      };
      n.gsap.registerPlugin(a.i, i.x, o.L);
      const R = () => {
          const {
            timelines: e,
            setIsStandalone: t,
            isVideoPlayerActive: r
          } = (0, g.TR)(), {
            setStandalone: o
          } = (0, d.useRockstarLocalState)(), p = (0, s.useRef)(), m = (0, s.useRef)(null), b = (0, s.useRef)(null), w = (0, s.useRef)(null), x = (0, s.useRef)(null), v = (0, s.useRef)(null), k = (0, s.useRef)(null), _ = (0, s.useRef)(null), R = (0, s.useRef)(r), {
            track: C
          } = (0, c.useGtmTrack)(), {
            loading: N,
            translation: I
          } = (0, g.T_)();
          (0, s.useEffect)((() => {
            n.gsap.set(window, {
              scrollTo: 0
            })
          }), []);
          const S = e => {
            const t = e.relatedTarget;
            m.current && (b?.current?.heroUIRef?.current.contains(t) ? n.gsap.set(window, {
              scrollTo: 0
            }) : m.current.contains(t) && n.gsap.set(window, {
              scrollTo: t
            }))
          };
          return (0, s.useEffect)((() => (t(!0), o(!0), window.document.body.style.overflowY = "hidden", window.document.addEventListener("focusout", S), () => {
            window.document.body.style.overflowY = "unset", window.document.removeEventListener("focusout", S), o(!1)
          })), []), (0, s.useEffect)((() => {
            R.current = r, p.current && p.current.paused(r)
          }), [r]), (0, s.useEffect)((() => (v.current && (p.current = i.x.create({
            content: v.current,
            smooth: .5,
            normalizeScroll: !0
          }), p.current.paused(!0)), () => {
            p.current?.kill()
          })), [v.current]), (0, s.useLayoutEffect)((() => {
            const t = n.gsap.matchMedia();
            e?.introTimeline && t.add({
              isVerticalLayout: "(max-width: 1279px)",
              isHorizontalLayout: "(min-width: 1280px)"
            }, (t => (e.introTimeline.eventCallback("onComplete", (() => {
              p.current && p.current.paused(!1);
              const {
                isVerticalLayout: e,
                isHorizontalLayout: r
              } = t.conditions, s = b?.current?.heroUIRef?.current, i = b?.current?.heroImagesRefs?.current?.heroImagesRef?.current, o = a.i.isTouch ? .75 : 100, c = a.i.isTouch ? n.Expo.easeInOut : "none";
              _.current && _.current.progress(0).kill(), _.current = n.gsap.timeline({
                paused: !0,
                defaults: {
                  duration: o,
                  force3D: !0
                },
                scrollTrigger: {
                  trigger: m.current,
                  toggleActions: "play none none reverse",
                  toggleClass: `${j.active}`,
                  pin: !0,
                  start: a.i.isTouch ? "top +=-1" : "top top",
                  end: a.i.isTouch ? "+=50" : "+=300",
                  scrub: !a.i.isTouch && .5,
                  invalidateOnRefresh: !0,
                  snap: !a.i.isTouch && {
                    snapTo: 1,
                    duration: {
                      min: .05,
                      max: .3
                    },
                    ease: n.Power3.easeIn
                  },
                  onLeaveBack: () => {
                    n.gsap.set(k?.current, {
                      display: "none"
                    })
                  },
                  onToggle: e => {
                    p.current && (n.gsap.set(k?.current, {
                      display: e.isActive ? "none" : "block"
                    }), -1 !== e.direction && (R || (p.current.paused(!0), setTimeout((() => {
                      R.current || p.current.paused(!1)
                    }), 500))))
                  },
                  onLeave: () => {
                    C({
                      event: "page_section_impression",
                      event_category: "page_section",
                      event_action: "impression",
                      event_label: "gta",
                      element_placement: "landing_page_hero"
                    })
                  }
                },
                onComplete: () => {
                  1 === a.i.isTouch && n.gsap.set(k?.current, {
                    display: "block"
                  })
                },
                onReverseComplete: () => {
                  1 === a.i.isTouch && n.gsap.set(k?.current, {
                    display: "none"
                  })
                }
              }).set(m.current, {
                height: () => x?.current?.clientHeight,
                maxHeight: () => x?.current?.clientHeight
              }).fromTo(s, {
                opacity: 1
              }, {
                opacity: 0,
                duration: a.i.isTouch ? .4 * o : .2 * o,
                ease: a.i.isTouch ? n.Sine.easeInOut : "sine.easeInOut",
                immediateRender: !1
              }).fromTo(b?.current?.heroRef?.current, {
                backgroundSize: () => 10 * window.innerWidth + "px",
                maskSize: () => 10 * window.innerWidth + "px",
                backgroundPosition: () => a.i.isTouch ? `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.2}px` : `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.3}px`,
                maskPosition: () => a.i.isTouch ? `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.2}px` : `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.3}px`
              }, {
                backgroundSize: () => w?.current?.children[0].clientWidth || w?.current?.children[0].scrollWidth || 0,
                maskSize: () => w?.current?.children[0].clientWidth || w?.current?.children[0].scrollWidth || 0,
                backgroundPosition: () => {
                  const e = w?.current?.children[0]?.getBoundingClientRect();
                  return `${e?.x??0}px ${e?.y??0}px`
                },
                maskPosition: () => {
                  const e = w?.current?.children[0]?.getBoundingClientRect();
                  return `${e?.x??0}px ${e?.y??0}px`
                },
                ease: a.i.isTouch ? c : "power2.easeInOut"
              }, "<").to(i, {
                "--hero-image-width": a.i.isTouch ? "110%" : "105%",
                "--hero-image-height": a.i.isTouch ? "110%" : "105%",
                "--hero-image-offset-bottom": a.i.isTouch ? "110%" : "105%",
                ease: a.i.isTouch ? c : "none"
              }, "<").to(i, {
                opacity: 0,
                duration: .2 * o,
                ease: "power2.easeInOut"
              }, "<85%").fromTo(w.current, {
                opacity: 0,
                pointerEvents: "none"
              }, {
                opacity: 1,
                pointerEvents: "auto",
                duration: .2 * o,
                ease: a.i.isTouch ? n.Power1.easeInOut : "power1.easeInOut"
              }, "<20%")
            }), []), () => {})))
          }), [r, e?.introTimeline, m?.current, b?.current?.heroRef?.current, b?.current?.heroUIRef?.current, b?.current?.heroImagesRef?.current, w?.current, k?.current]), (0, f.jsxs)("div", {
            className: j.destinationPage,
            ref: v,
            children: [(0, f.jsxs)("div", {
              className: j.destinationContainer,
              ref: m,
              children: [(0, f.jsx)(u.Z, {
                ref: b,
                className: j.hero,
                standalone: !0
              }), (0, f.jsx)("div", {
                ref: x,
                className: j.infoSectionContainer,
                children: (0, f.jsx)(h, {
                  blurb: N ? "" : I("d2.destDescription"),
                  buttonText: N ? "" : I("d2.playbackCTA"),
                  header: N ? "" : I("d2.destHeadline"),
                  className: j.infoSection,
                  ref: w
                })
              })]
            }), (0, f.jsx)(y.Z, {
              showCloseButton: !0
            }), (0, f.jsxs)("div", {
              ref: k,
              className: j.footerContainer,
              children: [(0, f.jsx)(T, {
                platforms: [{
                  name: "playstation",
                  url: "playstation.svg"
                }, {
                  name: "xbox",
                  url: "xbox.svg"
                }]
              }), (0, f.jsx)(l.FooterNav, {})]
            })]
          })
        },
        C = () => (0, f.jsx)(g.A1, {
          children: (0, f.jsx)("span", {
            children: (0, f.jsx)(R, {})
          })
        })
    }
  }
]);