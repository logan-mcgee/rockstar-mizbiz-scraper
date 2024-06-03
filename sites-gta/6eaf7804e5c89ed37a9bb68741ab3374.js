! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "00e9a2ee-9d4f-4f08-8705-e30be72d7160", e._sentryDebugIdIdentifier = "sentry-dbid-00e9a2ee-9d4f-4f08-8705-e30be72d7160")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [232], {
    99576: (e, t, a) => {
      var s = a(51664),
        r = Symbol.for("react.element"),
        n = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        i = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, a) {
        var s, n = {},
          l = null,
          d = null;
        for (s in void 0 !== a && (l = "" + a), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (d = t.ref), t) o.call(t, s) && !c.hasOwnProperty(s) && (n[s] = t[s]);
        if (e && e.defaultProps)
          for (s in t = e.defaultProps) void 0 === n[s] && (n[s] = t[s]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: d,
          props: n,
          _owner: i.current
        }
      }
      t.Fragment = n, t.jsx = l, t.jsxs = l
    },
    95240: (e, t, a) => {
      e.exports = a(99576)
    },
    31380: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => C
      });
      var s = a(51664),
        r = a(67356),
        n = a(73344),
        o = a(6960),
        i = a(67840),
        c = a(47036),
        l = a(45792),
        d = a(42836),
        u = a(24588);
      var g = a(95240);
      const f = e => {
        let {
          children: t,
          showModal: a = !1,
          dialogRef: n,
          onClose: o = (() => {})
        } = e;
        return (0, s.useEffect)((() => {
          a && n.current && (n.current.showModal(), setTimeout((() => {
            r.gsap.set(window, {
              scrollTo: 0
            })
          }), 300))
        }), [a]), (0, g.jsxs)("dialog", {
          ref: n,
          className: "rockstargames-sites-gtaf9e43e4fb6047fea4c181b2685e6a31f",
          onClick: e => (e => {
            e.currentTarget && (e.currentTarget.close(), o(), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation())
          })(e),
          children: [(0, g.jsx)("button", {
            className: "rockstargames-sites-gtaf32ab0b8f2b383c67fa243b02bf04344",
            onClick: () => (n.current?.close(), void o()),
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
      var m = a(4872);
      const p = e => {
          let {
            alt: t = "",
            className: a = "",
            clipRule: s = "evenodd",
            fill: r = "white",
            fillRule: n = "evenodd"
          } = e;
          return (0, g.jsxs)("svg", {
            className: a,
            fill: r,
            version: "1.1",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, g.jsx)("title", {
              children: t
            }), (0, g.jsx)("path", {
              fillRule: n,
              clipRule: s,
              d: "M4.52081 2.12229C4.84189 1.947 5.23305 1.96101 5.54076 2.15882L19.5408 11.1588C19.827 11.3428 20 11.6597 20 12C20 12.3403 19.827 12.6572 19.5408 12.8412L5.54076 21.8412C5.23305 22.039 4.84189 22.053 4.52081 21.8777C4.19974 21.7024 4 21.3658 4 21V3C4 2.63419 4.19974 2.29758 4.52081 2.12229Z"
            })]
          })
        },
        b = {
          pillBtn: "rockstargames-sites-gtaa3256dd861609a52e1b54835f22e0578",
          selected: "rockstargames-sites-gtac4ae2f823c44540aa5db5e0b06d1e2c5",
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
      r.gsap.registerPlugin(n.W, i.M);
      const h = (0, s.forwardRef)(((e, t) => {
        let {
          blurb: s,
          buttonText: r,
          className: n = "",
          image: o = "logo_secondary_color.png",
          header: i
        } = e;
        const {
          setIsModalOpen: c
        } = (0, m.m_)(), {
          track: l
        } = (0, d.useGtmTrack)();
        return (0, g.jsxs)("div", {
          className: [b.infoSection, n || ""].join(" "),
          ref: t,
          children: [(0, g.jsx)("img", {
            className: b.logo,
            src: a(93675)(`./${o}`),
            alt: ""
          }), (0, g.jsxs)("div", {
            className: b.content,
            children: [(0, g.jsxs)("div", {
              className: b.text,
              children: [(0, g.jsx)("h1", {
                className: b.header,
                children: i
              }), (0, g.jsx)("div", {
                className: b.blurb,
                dangerouslySetInnerHTML: {
                  __html: (u = s, u.split(/\r\n|\r|\n/).reduce(((e, t) => {
                    let a = e;
                    return t.trim().length && (a += `<p>${t}</p>`), a
                  })))
                }
              })]
            }), (0, g.jsxs)("button", {
              type: "button",
              className: b.button,
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
                className: b.buttonIcon
              }), r]
            })]
          })]
        });
        var u
      }));
      var w = a(9860),
        v = a(41272),
        _ = a(66572);
      const k = {
          pillBtn: "rockstargames-sites-gtaf13b9179a06214eff961cc6b79e9221c",
          selected: "rockstargames-sites-gtac6d9bc8d82f9ddcc6494b70d979b4a60",
          infoSectionFooter: "rockstargames-sites-gtaa6534d16de3de0cad30f0cc18bef18ce",
          logo: "rockstargames-sites-gtad5e76dfe433e84eeb3f450cdb02d64f8",
          platforms: "rockstargames-sites-gtaa5a6a6858bae074d7a93de089b73cd2a",
          rating: "rockstargames-sites-gtaff1b0cadd8996e1e7c9529fe7ada9ec0",
          withoutBorder: "rockstargames-sites-gtaa747edf520af07704d6be4f93c40e226"
        },
        x = {
          rating_img: "pegi_rp.png",
          rating_link: "https://pegi.info/"
        },
        y = {
          rating_img: "esrb_rp.svg",
          rating_link: "https://www.esrb.org/"
        },
        j = (0, v.createDevLocaleHook)({
          br: {
            rating_img: "vaci_rp.png",
            rating_link: "https://www.gov.br/mj/pt-br/assuntos/seus-direitos/classificacao-1"
          },
          de: {
            rating_img: "usk_rp.svg",
            rating_link: "http://www.usk.de"
          },
          es: x,
          fr: x,
          hans: y,
          it: x,
          jp: {
            rating_img: "cero_rp.png",
            rating_link: "https://www.cero.gr.jp/"
          },
          kr: y,
          mx: y,
          pl: x,
          ru: y,
          tw: y,
          us: y
        }),
        T = (0, s.forwardRef)(((e, t) => {
          let {
            className: s = "",
            titleSlug: r = "",
            platforms: n = [{
              name: "PlayStation 5",
              url: "playstation.svg"
            }, {
              name: "Xbox Series X|S",
              url: "xbox.svg"
            }]
          } = e;
          const o = (0, v.useIntl)(),
            i = j(),
            c = "esrb_rp.svg" === i.rating_img ? "<p>May contain content inappropriate for children.</p>" : void 0,
            l = "esrb_rp.svg" === i.rating_img ? '<p>Visit <a href="https://esrb.org" target="_blank">esrb.org</a> for rating information.</p>' : void 0;
          return (0, g.jsxs)("div", {
            className: [k.infoSectionFooter, s || ""].join(" "),
            ref: t,
            children: [(0, g.jsx)("div", {
              className: k.rating,
              children: (0, g.jsx)(w.Rating, {
                className: [k.mobileRating, k.rating, k.withoutBorder].join(" "),
                titleSlug: r || null,
                img: i.rating_img,
                descriptors: c,
                href: i.rating_link,
                footer: l
              })
            }), n.length && (0, g.jsx)("div", {
              className: [k.platforms, k.hideOnMobile].join(" "),
              children: n.map((e => {
                let {
                  name: t,
                  url: s
                } = e;
                return (0, g.jsx)("img", {
                  src: a(93675)(`./${s}`),
                  alt: t
                }, s)
              }))
            }), (0, g.jsx)(w.A, {
              to: "/",
              "aria-label": o.formatMessage(_.c.home_text),
              children: (0, g.jsx)("img", {
                className: [k.logo, k.hideOnMobile].join(" "),
                src: a(70160),
                alt: o.formatMessage(_.c.rockstar_games_logo_alt_text)
              })
            })]
          })
        }));
      T.displayName = "InfoSectionFooter";
      const R = T;
      var N = a(25428);
      const W = {
        pillBtn: "rockstargames-sites-gtac338d0e08e9400269820b3c4a45b5525",
        selected: "rockstargames-sites-gtaced4661d63665e45336e2e2187753209",
        destinationPage: "rockstargames-sites-gtabc6ca598d5a617f9d5de3b64fe313f03",
        footerContainer: "rockstargames-sites-gtaf1c7372665fda23e3ab90506aa5d0020",
        destinationContainer: "rockstargames-sites-gtaa3e59fbf2597d85b4fd294987f069625",
        active: "rockstargames-sites-gtacca34a9fd64948f177503882c7e50aae",
        hero: "rockstargames-sites-gtacccdbd1e2d26d8f97046287bbf957bee",
        infoSectionContainer: "rockstargames-sites-gtae57de03b5c8c667b1771e43a0c067a9a",
        videoDialog: "rockstargames-sites-gtaf00e2cd130e8bce484a2813d0993e2ca",
        videoDialogContent: "rockstargames-sites-gtae4a0e6055c593cb409ff99ac4d435967"
      };
      r.gsap.registerPlugin(n.W, o.m, i.M);
      const S = () => {
          const {
            timelines: e,
            setIsStandalone: t,
            isVideoPlayerActive: a,
            createYouTubePlayer: i,
            dialogPlayerRef: p,
            isModalOpen: b,
            setIsModalOpen: w,
            setIsVideoPlayerActive: v,
            resetVideo: _
          } = (0, m.m_)(), {
            setStandalone: k
          } = (0, l.useRockstarLocalState)(), x = (0, s.useRef)(), y = (0, s.useRef)(null), j = (0, s.useRef)(null), T = (0, s.useRef)(null), S = (0, s.useRef)(null), C = (0, s.useRef)(null), I = (0, s.useRef)(null), E = (0, s.useRef)(null), M = (0, s.useRef)(a), P = (0, s.useRef)(null), {
            loading: O,
            translation: $
          } = (0, m.A1)(), {
            track: L
          } = (0, d.useGtmTrack)();
          (0, s.useEffect)((() => {
            r.gsap.set(window, {
              scrollTo: 0
            })
          }), []);
          const D = e => {
            const t = e.relatedTarget;
            y.current && (j?.current?.heroUIRef?.current.contains(t) ? r.gsap.set(window, {
              scrollTo: 0
            }) : y.current.contains(t) && r.gsap.set(window, {
              scrollTo: t
            }))
          };
          return (0, s.useEffect)((() => (t(!0), k(!0), window.document.body.style.overflowY = "hidden", window.document.addEventListener("focusout", D), () => {
            window.document.body.style.overflowY = "unset", window.document.removeEventListener("focusout", D), k(!1)
          })), []), (0, s.useEffect)((() => {
            M.current = a, x.current && x.current.paused(a)
          }), [a]), (0, s.useEffect)((() => (C.current && (x.current = o.m.create({
            content: C.current,
            smooth: .5,
            normalizeScroll: !0
          }), x.current.paused(!0)), () => {
            x.current?.kill()
          })), [C.current]), (0, s.useLayoutEffect)((() => {
            const t = r.gsap.matchMedia();
            e?.introTimeline && t.add({
              isVerticalLayout: "(max-width: 1279px)",
              isHorizontalLayout: "(min-width: 1280px)"
            }, (t => (e.introTimeline.eventCallback("onComplete", (() => {
              x.current && x.current.paused(!1);
              const {
                isVerticalLayout: e,
                isHorizontalLayout: a
              } = t.conditions, s = j?.current?.heroUIRef?.current, o = j?.current?.heroImagesRefs?.current?.heroImagesRef?.current, i = n.W.isTouch ? .75 : 100, c = n.W.isTouch ? r.Expo.easeInOut : "none";
              E.current && E.current.progress(0).kill(), E.current = r.gsap.timeline({
                paused: !0,
                defaults: {
                  duration: i,
                  force3D: !0
                },
                scrollTrigger: {
                  trigger: y.current,
                  toggleActions: "play none none reverse",
                  toggleClass: `${W.active}`,
                  pin: !0,
                  start: n.W.isTouch ? "top +=-1" : "top top",
                  end: n.W.isTouch ? "+=50" : "+=300",
                  scrub: !n.W.isTouch && .5,
                  invalidateOnRefresh: !0,
                  snap: !n.W.isTouch && {
                    snapTo: 1,
                    duration: {
                      min: .05,
                      max: .3
                    },
                    ease: r.Power3.easeIn
                  },
                  onLeaveBack: () => {
                    r.gsap.set(I?.current, {
                      display: "none"
                    })
                  },
                  onToggle: e => {
                    x.current && (r.gsap.set(I?.current, {
                      display: e.isActive ? "none" : "block"
                    }), -1 !== e.direction && (M.current || (x.current.paused(!0), setTimeout((() => {
                      M.current || x?.current?.paused(!1)
                    }), 500))))
                  }
                },
                onComplete: () => {
                  1 === n.W.isTouch && r.gsap.set(I?.current, {
                    display: "block"
                  })
                },
                onReverseComplete: () => {
                  1 === n.W.isTouch && r.gsap.set(I?.current, {
                    display: "none"
                  })
                }
              }).set(y.current, {
                height: () => S?.current?.clientHeight,
                maxHeight: () => S?.current?.clientHeight
              }).fromTo(s, {
                opacity: 1
              }, {
                opacity: 0,
                duration: n.W.isTouch ? .4 * i : .2 * i,
                ease: n.W.isTouch ? r.Sine.easeInOut : "sine.easeInOut",
                immediateRender: !1
              }).fromTo(j?.current?.heroRef?.current, {
                backgroundSize: () => 10 * window.innerWidth + "px",
                maskSize: () => 10 * window.innerWidth + "px",
                backgroundPosition: () => n.W.isTouch ? `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.2}px` : `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.3}px`,
                maskPosition: () => n.W.isTouch ? `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.2}px` : `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.3}px`
              }, {
                backgroundSize: () => T?.current?.children[0].clientWidth || T?.current?.children[0].scrollWidth || 0,
                maskSize: () => T?.current?.children[0].clientWidth || T?.current?.children[0].scrollWidth || 0,
                backgroundPosition: () => {
                  const e = T?.current?.children[0]?.getBoundingClientRect();
                  return `${e?.x??0}px ${e?.y??0}px`
                },
                maskPosition: () => {
                  const e = T?.current?.children[0]?.getBoundingClientRect();
                  return `${e?.x??0}px ${e?.y??0}px`
                },
                ease: n.W.isTouch ? c : "power2.easeInOut"
              }, "<").to(o, {
                "--hero-image-width": n.W.isTouch ? "110%" : "105%",
                "--hero-image-height": n.W.isTouch ? "110%" : "105%",
                "--hero-image-offset-bottom": n.W.isTouch ? "110%" : "105%",
                ease: n.W.isTouch ? c : "none"
              }, "<").to(o, {
                opacity: 0,
                duration: .2 * i,
                ease: "power2.easeInOut"
              }, "<85%").fromTo(T.current, {
                opacity: 0,
                pointerEvents: "none"
              }, {
                opacity: 1,
                pointerEvents: "auto",
                duration: .2 * i,
                ease: n.W.isTouch ? r.Power1.easeInOut : "power1.easeInOut"
              }, "<20%")
            }), []), () => {})))
          }), [a, e?.introTimeline, y?.current, j?.current?.heroRef?.current, j?.current?.heroUIRef?.current, j?.current?.heroImagesRef?.current, T?.current, I?.current]), (0, s.useEffect)((() => {
            b && p.current && i({
              target: p,
              id: "dialog"
            })
          }), [p, b]), (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsx)(f, {
              showModal: b,
              onClose: () => (w(!1), v(!1), _(), void L({
                event: "takeover_close",
                element_placement: "info_section"
              })),
              dialogRef: P,
              children: b && (0, g.jsx)("div", {
                className: W.videoDialog,
                children: (0, g.jsx)("div", {
                  className: W.videoDialogContent,
                  ref: p
                })
              })
            }), (0, g.jsxs)("div", {
              className: W.destinationPage,
              ref: C,
              children: [(0, g.jsxs)("div", {
                className: W.destinationContainer,
                ref: y,
                children: [(0, g.jsx)(u.c, {
                  ref: j,
                  className: W.hero,
                  standalone: !0
                }), (0, g.jsx)("div", {
                  ref: S,
                  className: W.infoSectionContainer,
                  children: (0, g.jsx)(h, {
                    blurb: O ? "" : $("d2.destDescription"),
                    buttonText: O ? "" : $("d2.playbackCTA"),
                    header: O ? "" : $("d2.destHeadline"),
                    className: W.infoSection,
                    ref: T
                  })
                })]
              }), (0, g.jsx)(N.c, {
                showCloseButton: !0
              }), (0, g.jsxs)("div", {
                ref: I,
                className: W.footerContainer,
                children: [(0, g.jsx)(R, {
                  platforms: [{
                    name: "PlayStation 5",
                    url: "playstation.svg"
                  }, {
                    name: "Xbox Series X|S",
                    url: "xbox.svg"
                  }]
                }), (0, g.jsx)(c.FooterNav, {})]
              })]
            })]
          })
        },
        C = () => (0, g.jsx)(m._s, {
          children: (0, g.jsx)("span", {
            children: (0, g.jsx)(S, {})
          })
        })
    }
  }
]);