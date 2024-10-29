! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "bd3e75a1-a181-46e7-a27d-7dc4c38f3f1f", e._sentryDebugIdIdentifier = "sentry-dbid-bd3e75a1-a181-46e7-a27d-7dc4c38f3f1f")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [6757], {
    13772: (e, t, r) => {
      r.r(t), r.d(t, {
        default: () => M
      });
      var n = r(71403),
        a = r(57172),
        s = r(37197),
        c = r(66105),
        i = r(42756),
        o = r(58407),
        l = r(40207),
        d = r(26177),
        u = r(96717),
        m = r(94566),
        f = r(74401),
        g = r(62811),
        b = r(46632);
      const w = e => {
          let {
            legalText: t
          } = e;
          return (0, b.jsx)("div", {
            dangerouslySetInnerHTML: {
              __html: t
            }
          })
        },
        k = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        h = e => {
          let {
            s: t,
            content: r,
            refLanding: n,
            loggedIn: a,
            addClaim: s,
            signin: c,
            landingSlide: i
          } = e;
          return (0, b.jsxs)("div", {
            className: [t.contentContainer, t[i], t.landingSlide].join(" "),
            ref: n,
            children: [(0, b.jsx)("img", {
              src: r.introScreen.image.sources.mobile || k,
              className: t.moduleImageMobile,
              alt: r.introScreen.image.alt
            }), (0, b.jsxs)("div", {
              className: t.topContent,
              children: [(0, b.jsx)("div", {
                className: t.textContent,
                children: (0, b.jsxs)("div", {
                  className: t.alert,
                  children: [(0, b.jsx)("div", {
                    className: t.badge,
                    children: r.introScreen.tag
                  }), (0, b.jsxs)("div", {
                    className: t.alertText,
                    children: [(0, b.jsx)("h2", {
                      children: r.introScreen.headline
                    }), (0, b.jsx)("div", {
                      dangerouslySetInnerHTML: {
                        __html: r.introScreen.body
                      }
                    })]
                  })]
                })
              }), (0, b.jsx)("div", {
                className: t.btnContainer,
                children: (0, b.jsx)(g.A, {
                  text: a ? r.introScreen.btnText.loggedIn : r.introScreen.btnText.loggedOut,
                  onClick: a ? s : c
                })
              })]
            }), (0, b.jsx)("div", {
              className: t.bottomContent,
              children: (0, b.jsx)("div", {
                className: t.legal,
                children: (0, b.jsx)(w, {
                  legalText: r.legalText
                })
              })
            })]
          })
        };
      var x = r(81902),
        S = r(11650),
        p = r(67446),
        v = r(60285);
      const _ = e => {
        let {
          s: t,
          content: r,
          refSuccess: a,
          successSlide: s,
          characterList: c,
          linkAccountUrl: i,
          linkMoreAccounts: o,
          linkAccountBtn: l
        } = e;
        const d = (0, n.createRef)(),
          u = (0, n.createRef)(),
          m = (0, n.createRef)(),
          [f, g] = (0, n.useState)(),
          [k, h] = (0, n.useState)(!1),
          [_, j] = (0, n.useState)(),
          [C, y] = (0, n.useState)(!1),
          [T, N] = (0, n.useState)(!0);
        return (0, n.useEffect)((() => {
          const e = () => {
            d?.current && h(d?.current?.scrollWidth > d?.current?.offsetWidth)
          };
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }), [d]), (0, n.useEffect)((() => {
          g({
            nextEl: u?.current,
            prevEl: m?.current
          })
        }), [m?.current, u?.current]), (0, b.jsxs)("div", {
          className: [t.contentContainer, t[s], t.successSlide].join(" "),
          "data-type": "long",
          ref: a,
          children: [(0, b.jsxs)("div", {
            className: t.topContent,
            children: [(0, b.jsxs)("div", {
              className: t.alert,
              children: [(0, b.jsx)("div", {
                className: t.successAlert
              }), (0, b.jsxs)("div", {
                className: t.alertText,
                children: [(0, b.jsx)("h3", {
                  children: r.successScreen.headline
                }), (0, b.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: r.successScreen.body
                  }
                })]
              })]
            }), (0, b.jsxs)("div", {
              className: t.swiperWrap,
              children: [(0, b.jsx)("div", {
                className: t.swiperContainer,
                ref: d,
                children: (0, b.jsxs)(x.RC, {
                  loop: !1,
                  grabCursor: k,
                  slidesPerView: "auto",
                  speed: 700,
                  navigation: f,
                  modules: [S.Vx, S.Jq],
                  onInit: e => {
                    j(e)
                  },
                  onSlideChange: e => {
                    y(e?.isEnd), N(e?.isBeginning)
                  },
                  children: [c.map((e => (0, b.jsx)(x.qr, {
                    tabIndex: "0",
                    children: (0, n.createElement)(p.A, {
                      characterData: e,
                      key: e.mugshotUrl
                    })
                  }, e.mugshotUrl))), (0, b.jsx)(x.qr, {
                    children: (0, b.jsx)(v.A, {
                      className: [t.linkMore, c.length > 0 ? t.withIcon : ""].join(" "),
                      to: i,
                      onClick: o,
                      children: (0, b.jsx)("div", {
                        className: t.btnText,
                        children: l
                      })
                    })
                  }, "linkMore")]
                })
              }), (0, b.jsx)("button", {
                className: t.swiperBtnPrev,
                "aria-label": "Previous Character",
                type: "button",
                ref: m,
                onClick: () => {
                  _?.slidePrev()
                },
                disabled: T,
                "data-hidden": !k
              }), (0, b.jsx)("button", {
                className: t.swiperBtnNext,
                "aria-label": "Next Character",
                type: "button",
                ref: u,
                onClick: () => {
                  _?.slideNext()
                },
                disabled: C,
                "data-hidden": !k
              })]
            })]
          }), (0, b.jsx)("div", {
            className: t.legal,
            children: (0, b.jsx)(w, {
              legalText: r.legalText
            })
          })]
        })
      };
      var j = r(39695);
      const C = e => {
          let {
            s: t,
            content: r,
            unlinkedSlide: n,
            refUnlinked: a,
            linkConsoleText: s,
            platformLogin: c,
            giftId: i
          } = e;
          return (0, b.jsxs)("div", {
            className: [t.contentContainer, t[n], t.unlinkedSlide, t.textContent].join(" "),
            ref: a,
            children: [(0, b.jsx)("div", {
              className: t.textContent,
              children: (0, b.jsxs)("div", {
                className: t.platformButtonContainer,
                children: [(0, b.jsx)("div", {
                  className: t.errorAlert
                }), (0, b.jsx)("h3", {
                  children: r.unlinkedScreen.headline
                }), (0, b.jsx)(j.A, {
                  variant: "secondary",
                  buttonText: s,
                  platformsAndLinks: [{
                    href: c("np"),
                    key: "ps",
                    platform: "ps",
                    translated: !0
                  }, {
                    href: c("xbox"),
                    key: "xbox",
                    platform: "xbox",
                    translated: !0
                  }],
                  trackingType: "link_account",
                  trackingParent: "WOC",
                  target: "_self",
                  trackingOId: i,
                  children: (0, b.jsx)("div", {
                    className: t.alert,
                    children: (0, b.jsx)("div", {
                      className: t.alertText,
                      children: (0, b.jsx)("div", {
                        dangerouslySetInnerHTML: {
                          __html: r.unlinkedScreen.body
                        }
                      })
                    })
                  })
                })]
              })
            }), (0, b.jsx)("div", {
              className: t.legal,
              children: (0, b.jsx)(w, {
                legalText: r.legalText
              })
            })]
          })
        },
        y = e => {
          let {
            s: t,
            errorSlide: r,
            content: n,
            refError: a
          } = e;
          return (0, b.jsxs)("div", {
            className: [t.contentContainer, t[r], t.errorSlide, t.textContent].join(" "),
            ref: a,
            children: [(0, b.jsxs)("div", {
              className: t.textContent,
              children: [(0, b.jsxs)("div", {
                className: t.alert,
                children: [(0, b.jsx)("div", {
                  className: t.errorAlert
                }), (0, b.jsx)("div", {
                  className: t.alertText,
                  children: (0, b.jsx)("h3", {
                    children: n.errorScreen.headline
                  })
                })]
              }), (0, b.jsx)(g.A, {
                text: n.errorScreen.btnText,
                onClick: () => window.location.reload()
              })]
            }), (0, b.jsx)("div", {
              className: t.legal,
              children: (0, b.jsx)(w, {
                legalText: n.legalText
              })
            })]
          })
        };
      var T = function(e) {
        return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e
      }(T || {});
      const N = {
          pillBtn: "rockstargames-modules-core-newswire-articlee9d0055988bd29cc9b3774420b49220d",
          selected: "rockstargames-modules-core-newswire-articleb6cfe7731b5b7ab166fcb167bd54aeec",
          devBtns: "rockstargames-modules-core-newswire-articlea6c889f3ecad96c4975bc7ed81540491",
          devBtn: "rockstargames-modules-core-newswire-articlead51ee33c3002d7f25e3cc0f78b0d873",
          secondary: "rockstargames-modules-core-newswire-articlea256144bc2091efea308d9a8a377a737",
          interestTrackerWrapper: "rockstargames-modules-core-newswire-articleeecfe5137cf2e3c4b0478b43be1e74b1",
          interestTracker: "rockstargames-modules-core-newswire-articlef67885e5391b6550f170fd56628c9906",
          loader: "rockstargames-modules-core-newswire-articleca488091d243787a9cd796d97a5f122b",
          moduleImage: "rockstargames-modules-core-newswire-articled3f21bc571d3a3f577d26e8b45859648",
          mobileImgContainer: "rockstargames-modules-core-newswire-articled2125680dd25c2bcb65f9a0b96f21bb4",
          moduleImageMobile: "rockstargames-modules-core-newswire-articlee434acbd5507065824fc3af14eb8cc5c",
          slideContainer: "rockstargames-modules-core-newswire-articled2fab85526434c79bbc12b6a6c8ffd70",
          contentContainer: "rockstargames-modules-core-newswire-articlef6613d575229be91073e6d484b77ea5e",
          landingSlide: "rockstargames-modules-core-newswire-articled05cfa3ac7384704b98ad107655af47d",
          textContent: "rockstargames-modules-core-newswire-articlefc8660737bbdc8f86f8a4ea06659a33b",
          successSlide: "rockstargames-modules-core-newswire-articled9450f3541952682d19fee00772d0f1c",
          unlinkedSlide: "rockstargames-modules-core-newswire-articlee562047f95446daace762342785ef53a",
          platformButtonContainer: "rockstargames-modules-core-newswire-articlee29a7fc3592430425d91c6819a1f7e0d",
          errorSlide: "rockstargames-modules-core-newswire-articlec041c8746fa1e4df112acc81cf6ab418",
          btnContainer: "rockstargames-modules-core-newswire-articlefa7395c3112347a96a25294116ae8fb0",
          topContent: "rockstargames-modules-core-newswire-articlefe62cddec5a5071937238008a67b4a23",
          bottomContent: "rockstargames-modules-core-newswire-articlec1530db66301c04293eabc59c455f37d",
          legal: "rockstargames-modules-core-newswire-articleb026b94c1160c03be6bb45b35bd171fd",
          faq: "rockstargames-modules-core-newswire-articledb46c4596b0b0dabb86776e069d7c6c2",
          faqLink: "rockstargames-modules-core-newswire-articlebe9b8de47c9faf09181849be8ce32a7e",
          badge: "rockstargames-modules-core-newswire-articleb371557778af375ed631f8db217d4b95",
          hidden: "rockstargames-modules-core-newswire-articlec25fb97a6b90040828d50ba2bc626d2f",
          visible: "rockstargames-modules-core-newswire-articlec769fa70a9d7c7218a928525e1fc8aee",
          onScreen: "rockstargames-modules-core-newswire-articleac869fcee40b7fecf48190c22b0c28c4",
          offScreen: "rockstargames-modules-core-newswire-articlebc58c9a458acdf7cedb71748dd2b97cd",
          alert: "rockstargames-modules-core-newswire-articlefa4b2575f1b0bf395ee8aeac6f921b9f",
          alertText: "rockstargames-modules-core-newswire-articlee5388eb6491a1a8a455f5da886d315a6",
          errorAlert: "rockstargames-modules-core-newswire-articlef2485866287b1e7bec17cd9956cc27c4",
          successAlert: "rockstargames-modules-core-newswire-articlef3e46d7eea7a5fdaa3c792ebefd21612",
          linkMore: "rockstargames-modules-core-newswire-articlef86c9d4e98312229416ab74287beb871",
          withIcon: "rockstargames-modules-core-newswire-articlec0502853211d6f38c2201df3324d2f4d",
          btnText: "rockstargames-modules-core-newswire-articleea48f4033bbcce9a5f46c7ec3bf592cf",
          swiperContainer: "rockstargames-modules-core-newswire-articlef019ed0ffdb9171e9e607aa2fc5fb907",
          swiperWrap: "rockstargames-modules-core-newswire-articleb64badc5e0122206ecb30b961bf41ce0",
          swiperButton: "rockstargames-modules-core-newswire-articlea2afa4a87ebfd0a1c39fae80e25a3a1b",
          swiperBtnPrev: "rockstargames-modules-core-newswire-articlef89d35a4a9139e178742b2f663b5334b",
          swiperBtnNext: "rockstargames-modules-core-newswire-articlee3115ab3e897ab6bf9a95fc3e60aa034",
          spinner: "rockstargames-modules-core-newswire-articlef34b882833088888c4b2eb2b020a2b16"
        },
        {
          host: I,
          login: E,
          authHost: A,
          clientId: L
        } = (0, i.getScConfigForOrigin)(),
        M = e => {
          let {
            giftId: t,
            location: r = "gtaplus_site",
            introScreen: g,
            errorScreen: w,
            unlinkedScreen: x,
            successScreen: S,
            jumpLinkId: p,
            legalText: v
          } = e;
          const j = (0, i.useLocale)(),
            M = {
              errorScreen: {
                btnText: w?.errorButton || "",
                headline: w?.errorHeadline || ""
              },
              introScreen: {
                body: g?.introContent || "",
                btnText: {
                  loggedIn: g?.btnTextLoggedIn || "",
                  loggedOut: g?.btnTextLoggedOut || ""
                },
                headline: g?.introHeadline || "",
                image: {
                  alt: g?.image?.alt || g?.introHeadline || "",
                  sources: {
                    desktop: (0, f.useGetCdnSource)(g?.image?.sources?.en_us?.desktop) || null,
                    mobile: (0, f.useGetCdnSource)(g?.image?.sources?.en_us?.mobile) || null
                  }
                },
                tag: g?.tag || ""
              },
              legalText: v,
              successScreen: {
                body: S?.successContent || "",
                headline: S?.successHeadline || ""
              },
              unlinkedScreen: {
                body: x?.unlinkedContent || "",
                btnText: x?.unlinkedButtonText || "",
                headline: x?.unlinkedHeadline || ""
              }
            },
            [W] = (0, a.useSearchParams)(),
            B = (0, o.useRockstarToken)(),
            {
              data: R,
              loggedIn: $
            } = (0, l.useRockstarUser)(),
            H = (0, o.useRockstarTokenPing)(),
            O = `https://${I}.rockstargames.com/settings/linkedaccounts`,
            P = (0, i.toScLocaleString)(j),
            U = (0, u.useIntl)(),
            {
              track: q
            } = (0, l.useGtmTrack)(),
            {
              ref: F,
              inView: z
            } = (0, c.Wx)({
              threshold: .6
            }),
            D = 1280,
            G = (0, n.createRef)(),
            V = (0, n.createRef)(),
            J = (0, n.createRef)(),
            Q = (0, n.createRef)(),
            Y = (0, n.createRef)(),
            [K, X] = (0, n.useState)(),
            [Z, ee] = (0, n.useState)([]),
            [te, re] = (0, n.useState)(!1),
            [ne, ae] = (0, n.useState)(),
            [se, ce] = (0, n.useState)("hidden"),
            [ie, oe] = (0, n.useState)("hidden"),
            [le, de] = (0, n.useState)("hidden"),
            [ue, me] = (0, n.useState)("hidden"),
            [fe, ge] = (0, n.useState)(!1),
            [be, we] = (0, n.useState)("disabled"),
            [ke, he] = (0, n.useState)(T.landing),
            [xe, Se] = (0, n.useState)(0),
            [pe, ve] = (0, n.useState)(0),
            [_e, je] = (0, n.useState)(0),
            [Ce, ye] = (0, n.useState)(0),
            [Te, Ne] = (0, n.useState)(0),
            [Ie, Ee] = (0, n.useState)(!1),
            [Ae, Le] = (0, n.useState)(M.introScreen.image.sources.mobile || k),
            [Me, We] = (0, n.useState)(!1),
            Be = `${document.location.pathname}${document.location.search}#${p}`,
            Re = (0, i.usePrevious)(ne),
            $e = (0, i.usePrevious)($),
            He = () => {
              G.current && ve(G?.current?.scrollHeight), V.current && je(V?.current?.scrollHeight), J.current && ye(J?.current?.scrollHeight), Q.current && Ne(Q?.current?.scrollHeight)
            },
            Oe = (e, t) => {
              e === T.landing && (he(T.landing), t && Se(pe), oe("onScreen"), ce("hidden"), me("hidden"), de("hidden")), e === T.success && (he(T.success), t && Se(_e), oe("offScreen"), ce("visible"), setTimeout((() => {
                oe("hidden"), me("hidden")
              }), 300), setTimeout((() => {
                ce("onScreen")
              }), 100)), e === T.error && (he(T.error), t && Se(Ce), oe("offScreen"), setTimeout((() => {
                oe("hidden")
              }), 300), setTimeout((() => {
                me("onScreen")
              }), 100)), e === T.unlinked && (he(T.unlinked), t && Se(Te), oe("offScreen"), de("visible"), setTimeout((() => {
                oe("hidden"), me("hidden")
              }), 300), setTimeout((() => {
                de("onScreen")
              }), 100))
            };
          return (0, n.useEffect)((() => {
            const e = () => {
                window.innerWidth > 2560 && "newswire" !== r ? Le(M.introScreen.image.sources.mobile || k) : Le(M.introScreen.image.sources.desktop || k)
              },
              t = () => {
                He(), window.innerWidth <= D && !te && (re(!0), Oe(ke, !0)), window.innerWidth > D && te && re(!1), e()
              };
            return re(window.innerWidth <= D), e(), window.addEventListener("resize", t), () => {
              window.removeEventListener("resize", t)
            }
          }), [ke, te, G, Q, J, V]), (0, n.useEffect)((() => {
            ke === T.success && xe !== _e ? Se(_e) : ke === T.error && xe !== Ce ? Se(Ce) : ke === T.landing && xe !== pe ? Se(pe) : ke === T.unlinked && xe !== Te && Se(Te)
          }), [Ce, _e, xe, Te, pe]), (0, n.useEffect)((() => {
            Me || (We(!0), He(), Ie && ke === T.success && Se(V?.current?.scrollHeight || 0))
          }), [G, Q, J, V]), (0, n.useEffect)((() => {
            const e = R?.characters?.gtao;
            ee(e || [])
          }), [R]), (0, n.useEffect)((() => {
            "boolean" != typeof Re && "boolean" != typeof $e || ne && $ && (async () => {
              const {
                result: e
              } = await (0, i.coreScApiFetch)("marketing/engagement/claim/exists", {
                pingBearer: H,
                query: {
                  giftUId: t
                }
              });
              X(e), ae(!1)
            })()
          }), [ne, $]), (0, n.useEffect)((() => {
            "boolean" == typeof $ ? $ ? ae(!0) : (ae(!1), oe("onScreen")) : ae(!0)
          }), [$]), (0, n.useEffect)((() => {
            K ? (Ee(!0), Oe(T.success, !0)) : "boolean" != typeof K || K || Oe(T.landing, !0)
          }), [K]), (0, n.useEffect)((() => {
            z && !fe && (q({
              element_placement: "WOC",
              event: "page_section_impression",
              section_layout: $ ? "signed in" : "signed out"
            }), ge(!0))
          }), [z]), (0, n.useEffect)((() => {
            "onScreen" === se && q({
              element_placement: "WOC",
              event: "alert_update",
              o_id: t,
              text: "Almost there!"
            })
          }), [se]), (0, n.useEffect)((() => {
            "onScreen" === le && q({
              element_placement: "WOC",
              event: "alert_error",
              o_id: t,
              text: "No Qualifying Character Found"
            })
          }), [le]), (0, n.useEffect)((() => {
            "onScreen" === ue && q({
              element_placement: "event_label",
              event: "alert_error",
              o_id: t,
              text: "Something went wrong on our end. Please try again in a few minutes."
            })
          }), [ue]), (0, b.jsxs)(b.Fragment, {
            children: [!1, (0, b.jsx)("div", {
              className: N.interestTrackerWrapper,
              children: (0, b.jsxs)(s.P.div, {
                className: [N.interestTracker, ne && N.loader].join(" "),
                initial: {
                  opacity: 0
                },
                whileInView: {
                  opacity: 1
                },
                viewport: {
                  margin: "-20%",
                  once: !0
                },
                transition: {
                  duration: .4,
                  ease: "easeIn"
                },
                "data-context": "interestTracker",
                ref: F,
                id: p || "",
                children: [(0, b.jsx)("div", {
                  className: N.moduleImage,
                  style: {
                    "--engagement-image": `url(${Ae})`
                  }
                }), (0, b.jsx)("div", {
                  className: [N.slideContainer, ne ? N.loader : ""].join(" "),
                  ref: Y,
                  "data-dev-mode": "disabled",
                  style: {
                    "--engagement-height": 0 === xe ? "200%" : `${xe}px`,
                    height: 0 !== xe && te ? `${xe}px` : "auto"
                  },
                  children: ne ? (0, b.jsx)("div", {
                    className: N.spinner,
                    children: (0, b.jsx)(d.A, {
                      type: "SPINNING"
                    })
                  }) : (0, b.jsxs)(b.Fragment, {
                    children: [(0, b.jsx)(h, {
                      s: N,
                      content: M,
                      refLanding: G,
                      loggedIn: $,
                      addClaim: async () => {
                        q({
                          element_placement: "WOC",
                          event: "cta_claim",
                          o_id: t,
                          text: "claim now",
                          section_layout: $ ? "signed in" : "signed out"
                        });
                        const e = {
                          giftUId: t,
                          location: r,
                          utmCampaign: W.get("utm_campaign"),
                          utmContent: W.get("utm_content"),
                          utmMedium: W.get("utm_medium"),
                          utmSource: W.get("utm_source")
                        };
                        if ("disabled" === be)
                          if (Z.length > 0) {
                            const {
                              status: t
                            } = await (0, i.coreScApiFetch)("marketing/engagement/claim/create", {
                              fetchOptions: {
                                method: "POST"
                              },
                              pingBearer: H,
                              query: e
                            }) ?? [];
                            Oe(t ? T.success : T.error, !1)
                          } else Oe(T.unlinked, !1);
                        else "success" === be ? Oe(T.success, !1) : "error" === be ? Oe(T.error, !1) : "unlinked" === be && Oe(T.unlinked, !1)
                      },
                      signin: () => {
                        const e = `${E}?returnUrl=${encodeURIComponent(Be)}&lang=${P}`;
                        q({
                          element_placement: "WOC",
                          event: "cta_login",
                          link_url: e,
                          text: "claim now",
                          section_layout: $ ? "signed in" : "signed out"
                        }), window.location.href = e
                      },
                      landingSlide: ie
                    }), (0, b.jsx)(_, {
                      s: N,
                      content: M,
                      refSuccess: V,
                      successSlide: se,
                      characterList: Z,
                      linkAccountUrl: O,
                      linkMoreAccounts: () => {
                        q({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: O,
                          text: m.engagement.engagement_link_account.defaultMessage
                        })
                      },
                      linkAccountBtn: (0, b.jsx)(u.FormattedMessage, {
                        ...m.engagement.engagement_link_account
                      })
                    }), (0, b.jsx)(C, {
                      s: N,
                      content: M,
                      unlinkedSlide: le,
                      refUnlinked: Q,
                      linkConsoleText: U.formatMessage(m.engagement.engagement_link_console_account),
                      platformLogin: e => `https://${A}.rockstargames.com/tpa/${e}/link/?cid=${L}&lang=${P}&returnUrl=${encodeURIComponent(Be)}&accessToken=${B}`,
                      giftId: t
                    }), (0, b.jsx)(y, {
                      s: N,
                      errorSlide: ue,
                      content: M,
                      refError: J
                    })]
                  })
                })]
              })
            })]
          })
        }
    }
  }
]);