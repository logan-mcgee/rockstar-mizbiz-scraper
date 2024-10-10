! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "df747f83-5651-452a-88ac-aa698fc469b1", e._sentryDebugIdIdentifier = "sentry-dbid-df747f83-5651-452a-88ac-aa698fc469b1")
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
  [6757, 7005], {
    13772: (e, t, n) => {
      n.r(t), n.d(t, {
        default: () => M
      });
      var a = n(71403),
        s = n(57172),
        r = n(77356),
        c = n(59217),
        i = n(42756),
        o = n(58407),
        d = n(40207),
        l = n(26177),
        g = n(96717),
        u = n(94566),
        f = n(74401),
        m = n(62811),
        b = n(46632);
      const k = e => {
          let {
            legalText: t
          } = e;
          return (0, b.jsx)("div", {
            dangerouslySetInnerHTML: {
              __html: t
            }
          })
        },
        h = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        x = e => {
          let {
            s: t,
            content: n,
            refLanding: a,
            loggedIn: s,
            addClaim: r,
            signin: c,
            landingSlide: i
          } = e;
          return (0, b.jsxs)("div", {
            className: [t.contentContainer, t[i], t.landingSlide].join(" "),
            ref: a,
            children: [(0, b.jsx)("img", {
              src: n.introScreen.image.sources.mobile || h,
              className: t.moduleImageMobile,
              alt: n.introScreen.image.alt
            }), (0, b.jsxs)("div", {
              className: t.topContent,
              children: [(0, b.jsx)("div", {
                className: t.textContent,
                children: (0, b.jsxs)("div", {
                  className: t.alert,
                  children: [(0, b.jsx)("div", {
                    className: t.badge,
                    children: n.introScreen.tag
                  }), (0, b.jsxs)("div", {
                    className: t.alertText,
                    children: [(0, b.jsx)("h2", {
                      children: n.introScreen.headline
                    }), (0, b.jsx)("div", {
                      dangerouslySetInnerHTML: {
                        __html: n.introScreen.body
                      }
                    })]
                  })]
                })
              }), (0, b.jsx)("div", {
                className: t.btnContainer,
                children: (0, b.jsx)(m.A, {
                  text: s ? n.introScreen.btnText.loggedIn : n.introScreen.btnText.loggedOut,
                  onClick: s ? r : c
                })
              })]
            }), (0, b.jsx)("div", {
              className: t.bottomContent,
              children: (0, b.jsx)("div", {
                className: t.legal,
                children: (0, b.jsx)(k, {
                  legalText: n.legalText
                })
              })
            })]
          })
        };
      var S = n(81902),
        p = n(89269),
        v = n(67446),
        j = n(60285);
      const _ = e => {
        let {
          s: t,
          content: n,
          refSuccess: s,
          successSlide: r,
          characterList: c,
          linkAccountUrl: i,
          linkMoreAccounts: o,
          linkAccountBtn: d
        } = e;
        const l = (0, a.createRef)(),
          g = (0, a.createRef)(),
          u = (0, a.createRef)(),
          [f, m] = (0, a.useState)(),
          [h, x] = (0, a.useState)(!1),
          [_, w] = (0, a.useState)(),
          [C, y] = (0, a.useState)(!1),
          [T, N] = (0, a.useState)(!0);
        return (0, a.useEffect)((() => {
          const e = () => {
            l?.current && x(l?.current?.scrollWidth > l?.current?.offsetWidth)
          };
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }), [l]), (0, a.useEffect)((() => {
          m({
            nextEl: g?.current,
            prevEl: u?.current
          })
        }), [u?.current, g?.current]), (0, b.jsxs)("div", {
          className: [t.contentContainer, t[r], t.successSlide].join(" "),
          "data-type": "long",
          ref: s,
          children: [(0, b.jsxs)("div", {
            className: t.topContent,
            children: [(0, b.jsxs)("div", {
              className: t.alert,
              children: [(0, b.jsx)("div", {
                className: t.successAlert
              }), (0, b.jsxs)("div", {
                className: t.alertText,
                children: [(0, b.jsx)("h3", {
                  children: n.successScreen.headline
                }), (0, b.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: n.successScreen.body
                  }
                })]
              })]
            }), (0, b.jsxs)("div", {
              className: t.swiperWrap,
              children: [(0, b.jsx)("div", {
                className: t.swiperContainer,
                ref: l,
                children: (0, b.jsxs)(S.RC, {
                  loop: !1,
                  grabCursor: h,
                  slidesPerView: "auto",
                  speed: 700,
                  navigation: f,
                  modules: [p.Vx, p.Jq],
                  onInit: e => {
                    w(e)
                  },
                  onSlideChange: e => {
                    y(e?.isEnd), N(e?.isBeginning)
                  },
                  children: [c.map((e => (0, b.jsx)(S.qr, {
                    tabIndex: "0",
                    children: (0, a.createElement)(v.A, {
                      characterData: e,
                      key: e.mugshotUrl
                    })
                  }, e.mugshotUrl))), (0, b.jsx)(S.qr, {
                    children: (0, b.jsx)(j.A, {
                      className: [t.linkMore, c.length > 0 ? t.withIcon : ""].join(" "),
                      to: i,
                      onClick: o,
                      children: (0, b.jsx)("div", {
                        className: t.btnText,
                        children: d
                      })
                    })
                  }, "linkMore")]
                })
              }), (0, b.jsx)("button", {
                className: t.swiperBtnPrev,
                "aria-label": "Previous Character",
                type: "button",
                ref: u,
                onClick: () => {
                  _?.slidePrev()
                },
                disabled: T,
                "data-hidden": !h
              }), (0, b.jsx)("button", {
                className: t.swiperBtnNext,
                "aria-label": "Next Character",
                type: "button",
                ref: g,
                onClick: () => {
                  _?.slideNext()
                },
                disabled: C,
                "data-hidden": !h
              })]
            })]
          }), (0, b.jsx)("div", {
            className: t.legal,
            children: (0, b.jsx)(k, {
              legalText: n.legalText
            })
          })]
        })
      };
      var w = n(39695);
      const C = e => {
          let {
            s: t,
            content: n,
            unlinkedSlide: a,
            refUnlinked: s,
            linkConsoleText: r,
            platformLogin: c,
            giftId: i
          } = e;
          return (0, b.jsxs)("div", {
            className: [t.contentContainer, t[a], t.unlinkedSlide, t.textContent].join(" "),
            ref: s,
            children: [(0, b.jsx)("div", {
              className: t.textContent,
              children: (0, b.jsxs)("div", {
                className: t.platformButtonContainer,
                children: [(0, b.jsx)("div", {
                  className: t.errorAlert
                }), (0, b.jsx)("h3", {
                  children: n.unlinkedScreen.headline
                }), (0, b.jsx)(w.A, {
                  variant: "secondary",
                  buttonText: r,
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
                          __html: n.unlinkedScreen.body
                        }
                      })
                    })
                  })
                })]
              })
            }), (0, b.jsx)("div", {
              className: t.legal,
              children: (0, b.jsx)(k, {
                legalText: n.legalText
              })
            })]
          })
        },
        y = e => {
          let {
            s: t,
            errorSlide: n,
            content: a,
            refError: s
          } = e;
          return (0, b.jsxs)("div", {
            className: [t.contentContainer, t[n], t.errorSlide, t.textContent].join(" "),
            ref: s,
            children: [(0, b.jsxs)("div", {
              className: t.textContent,
              children: [(0, b.jsxs)("div", {
                className: t.alert,
                children: [(0, b.jsx)("div", {
                  className: t.errorAlert
                }), (0, b.jsx)("div", {
                  className: t.alertText,
                  children: (0, b.jsx)("h3", {
                    children: a.errorScreen.headline
                  })
                })]
              }), (0, b.jsx)(m.A, {
                text: a.errorScreen.btnText,
                onClick: () => window.location.reload()
              })]
            }), (0, b.jsx)("div", {
              className: t.legal,
              children: (0, b.jsx)(k, {
                legalText: a.legalText
              })
            })]
          })
        };
      var T = function(e) {
        return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e
      }(T || {});
      const N = {
          pillBtn: "rockstargames-sites-gta-gen9e9d0055988bd29cc9b3774420b49220d",
          selected: "rockstargames-sites-gta-gen9b6cfe7731b5b7ab166fcb167bd54aeec",
          devBtns: "rockstargames-sites-gta-gen9a6c889f3ecad96c4975bc7ed81540491",
          devBtn: "rockstargames-sites-gta-gen9ad51ee33c3002d7f25e3cc0f78b0d873",
          secondary: "rockstargames-sites-gta-gen9a256144bc2091efea308d9a8a377a737",
          interestTrackerWrapper: "rockstargames-sites-gta-gen9eecfe5137cf2e3c4b0478b43be1e74b1",
          interestTracker: "rockstargames-sites-gta-gen9f67885e5391b6550f170fd56628c9906",
          loader: "rockstargames-sites-gta-gen9ca488091d243787a9cd796d97a5f122b",
          moduleImage: "rockstargames-sites-gta-gen9d3f21bc571d3a3f577d26e8b45859648",
          mobileImgContainer: "rockstargames-sites-gta-gen9d2125680dd25c2bcb65f9a0b96f21bb4",
          moduleImageMobile: "rockstargames-sites-gta-gen9e434acbd5507065824fc3af14eb8cc5c",
          slideContainer: "rockstargames-sites-gta-gen9d2fab85526434c79bbc12b6a6c8ffd70",
          contentContainer: "rockstargames-sites-gta-gen9f6613d575229be91073e6d484b77ea5e",
          landingSlide: "rockstargames-sites-gta-gen9d05cfa3ac7384704b98ad107655af47d",
          textContent: "rockstargames-sites-gta-gen9fc8660737bbdc8f86f8a4ea06659a33b",
          successSlide: "rockstargames-sites-gta-gen9d9450f3541952682d19fee00772d0f1c",
          unlinkedSlide: "rockstargames-sites-gta-gen9e562047f95446daace762342785ef53a",
          platformButtonContainer: "rockstargames-sites-gta-gen9e29a7fc3592430425d91c6819a1f7e0d",
          errorSlide: "rockstargames-sites-gta-gen9c041c8746fa1e4df112acc81cf6ab418",
          btnContainer: "rockstargames-sites-gta-gen9fa7395c3112347a96a25294116ae8fb0",
          topContent: "rockstargames-sites-gta-gen9fe62cddec5a5071937238008a67b4a23",
          bottomContent: "rockstargames-sites-gta-gen9c1530db66301c04293eabc59c455f37d",
          legal: "rockstargames-sites-gta-gen9b026b94c1160c03be6bb45b35bd171fd",
          faq: "rockstargames-sites-gta-gen9db46c4596b0b0dabb86776e069d7c6c2",
          faqLink: "rockstargames-sites-gta-gen9be9b8de47c9faf09181849be8ce32a7e",
          badge: "rockstargames-sites-gta-gen9b371557778af375ed631f8db217d4b95",
          hidden: "rockstargames-sites-gta-gen9c25fb97a6b90040828d50ba2bc626d2f",
          visible: "rockstargames-sites-gta-gen9c769fa70a9d7c7218a928525e1fc8aee",
          onScreen: "rockstargames-sites-gta-gen9ac869fcee40b7fecf48190c22b0c28c4",
          offScreen: "rockstargames-sites-gta-gen9bc58c9a458acdf7cedb71748dd2b97cd",
          alert: "rockstargames-sites-gta-gen9fa4b2575f1b0bf395ee8aeac6f921b9f",
          alertText: "rockstargames-sites-gta-gen9e5388eb6491a1a8a455f5da886d315a6",
          errorAlert: "rockstargames-sites-gta-gen9f2485866287b1e7bec17cd9956cc27c4",
          successAlert: "rockstargames-sites-gta-gen9f3e46d7eea7a5fdaa3c792ebefd21612",
          linkMore: "rockstargames-sites-gta-gen9f86c9d4e98312229416ab74287beb871",
          withIcon: "rockstargames-sites-gta-gen9c0502853211d6f38c2201df3324d2f4d",
          btnText: "rockstargames-sites-gta-gen9ea48f4033bbcce9a5f46c7ec3bf592cf",
          swiperContainer: "rockstargames-sites-gta-gen9f019ed0ffdb9171e9e607aa2fc5fb907",
          swiperWrap: "rockstargames-sites-gta-gen9b64badc5e0122206ecb30b961bf41ce0",
          swiperButton: "rockstargames-sites-gta-gen9a2afa4a87ebfd0a1c39fae80e25a3a1b",
          swiperBtnPrev: "rockstargames-sites-gta-gen9f89d35a4a9139e178742b2f663b5334b",
          swiperBtnNext: "rockstargames-sites-gta-gen9e3115ab3e897ab6bf9a95fc3e60aa034",
          spinner: "rockstargames-sites-gta-gen9f34b882833088888c4b2eb2b020a2b16"
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
            location: n = "gtaplus_site",
            introScreen: m,
            errorScreen: k,
            unlinkedScreen: S,
            successScreen: p,
            jumpLinkId: v,
            legalText: j
          } = e;
          const w = (0, i.useLocale)(),
            M = {
              errorScreen: {
                btnText: k?.errorButton || "",
                headline: k?.errorHeadline || ""
              },
              introScreen: {
                body: m?.introContent || "",
                btnText: {
                  loggedIn: m?.btnTextLoggedIn || "",
                  loggedOut: m?.btnTextLoggedOut || ""
                },
                headline: m?.introHeadline || "",
                image: {
                  alt: m?.image?.alt || m?.introHeadline || "",
                  sources: {
                    desktop: (0, f.useGetCdnSource)(m?.image?.sources?.en_us?.desktop) || null,
                    mobile: (0, f.useGetCdnSource)(m?.image?.sources?.en_us?.mobile) || null
                  }
                },
                tag: m?.tag || ""
              },
              legalText: j,
              successScreen: {
                body: p?.successContent || "",
                headline: p?.successHeadline || ""
              },
              unlinkedScreen: {
                body: S?.unlinkedContent || "",
                btnText: S?.unlinkedButtonText || "",
                headline: S?.unlinkedHeadline || ""
              }
            },
            [B] = (0, s.useSearchParams)(),
            W = (0, o.useRockstarToken)(),
            {
              data: R,
              loggedIn: $
            } = (0, d.useRockstarUser)(),
            H = (0, o.useRockstarTokenPing)(),
            O = `https://${I}.rockstargames.com/settings/linkedaccounts`,
            P = (0, i.toScLocaleString)(w),
            U = (0, g.useIntl)(),
            {
              track: q
            } = (0, d.useGtmTrack)(),
            {
              ref: F,
              inView: z
            } = (0, c.useInView)({
              threshold: .6
            }),
            D = 1280,
            V = (0, a.createRef)(),
            G = (0, a.createRef)(),
            J = (0, a.createRef)(),
            Q = (0, a.createRef)(),
            Y = (0, a.createRef)(),
            [K, X] = (0, a.useState)(),
            [Z, ee] = (0, a.useState)([]),
            [te, ne] = (0, a.useState)(!1),
            [ae, se] = (0, a.useState)(),
            [re, ce] = (0, a.useState)("hidden"),
            [ie, oe] = (0, a.useState)("hidden"),
            [de, le] = (0, a.useState)("hidden"),
            [ge, ue] = (0, a.useState)("hidden"),
            [fe, me] = (0, a.useState)(!1),
            [be, ke] = (0, a.useState)("disabled"),
            [he, xe] = (0, a.useState)(T.landing),
            [Se, pe] = (0, a.useState)(0),
            [ve, je] = (0, a.useState)(0),
            [_e, we] = (0, a.useState)(0),
            [Ce, ye] = (0, a.useState)(0),
            [Te, Ne] = (0, a.useState)(0),
            [Ie, Ee] = (0, a.useState)(!1),
            [Ae, Le] = (0, a.useState)(M.introScreen.image.sources.mobile || h),
            [Me, Be] = (0, a.useState)(!1),
            We = `${document.location.pathname}${document.location.search}#${v}`,
            Re = (0, i.usePrevious)(ae),
            $e = (0, i.usePrevious)($),
            He = () => {
              V.current && je(V?.current?.scrollHeight), G.current && we(G?.current?.scrollHeight), J.current && ye(J?.current?.scrollHeight), Q.current && Ne(Q?.current?.scrollHeight)
            },
            Oe = (e, t) => {
              e === T.landing && (xe(T.landing), t && pe(ve), oe("onScreen"), ce("hidden"), ue("hidden"), le("hidden")), e === T.success && (xe(T.success), t && pe(_e), oe("offScreen"), ce("visible"), setTimeout((() => {
                oe("hidden"), ue("hidden")
              }), 300), setTimeout((() => {
                ce("onScreen")
              }), 100)), e === T.error && (xe(T.error), t && pe(Ce), oe("offScreen"), setTimeout((() => {
                oe("hidden")
              }), 300), setTimeout((() => {
                ue("onScreen")
              }), 100)), e === T.unlinked && (xe(T.unlinked), t && pe(Te), oe("offScreen"), le("visible"), setTimeout((() => {
                oe("hidden"), ue("hidden")
              }), 300), setTimeout((() => {
                le("onScreen")
              }), 100))
            };
          return (0, a.useEffect)((() => {
            const e = () => {
                window.innerWidth > 2560 && "newswire" !== n ? Le(M.introScreen.image.sources.mobile || h) : Le(M.introScreen.image.sources.desktop || h)
              },
              t = () => {
                He(), window.innerWidth <= D && !te && (ne(!0), Oe(he, !0)), window.innerWidth > D && te && ne(!1), e()
              };
            return ne(window.innerWidth <= D), e(), window.addEventListener("resize", t), () => {
              window.removeEventListener("resize", t)
            }
          }), [he, te, V, Q, J, G]), (0, a.useEffect)((() => {
            he === T.success && Se !== _e ? pe(_e) : he === T.error && Se !== Ce ? pe(Ce) : he === T.landing && Se !== ve ? pe(ve) : he === T.unlinked && Se !== Te && pe(Te)
          }), [Ce, _e, Se, Te, ve]), (0, a.useEffect)((() => {
            Me || (Be(!0), He(), Ie && he === T.success && pe(G?.current?.scrollHeight || 0))
          }), [V, Q, J, G]), (0, a.useEffect)((() => {
            const e = R?.characters?.gtao;
            ee(e || [])
          }), [R]), (0, a.useEffect)((() => {
            "boolean" != typeof Re && "boolean" != typeof $e || ae && $ && (async () => {
              const {
                result: e
              } = await (0, i.coreScApiFetch)("marketing/engagement/claim/exists", {
                pingBearer: H,
                query: {
                  giftUId: t
                }
              });
              X(e), se(!1)
            })()
          }), [ae, $]), (0, a.useEffect)((() => {
            "boolean" == typeof $ ? $ ? se(!0) : (se(!1), oe("onScreen")) : se(!0)
          }), [$]), (0, a.useEffect)((() => {
            K ? (Ee(!0), Oe(T.success, !0)) : "boolean" != typeof K || K || Oe(T.landing, !0)
          }), [K]), (0, a.useEffect)((() => {
            z && !fe && (q({
              element_placement: "WOC",
              event: "page_section_impression",
              section_layout: $ ? "signed in" : "signed out"
            }), me(!0))
          }), [z]), (0, a.useEffect)((() => {
            "onScreen" === re && q({
              element_placement: "WOC",
              event: "alert_update",
              o_id: t,
              text: "Almost there!"
            })
          }), [re]), (0, a.useEffect)((() => {
            "onScreen" === de && q({
              element_placement: "WOC",
              event: "alert_error",
              o_id: t,
              text: "No Qualifying Character Found"
            })
          }), [de]), (0, a.useEffect)((() => {
            "onScreen" === ge && q({
              element_placement: "event_label",
              event: "alert_error",
              o_id: t,
              text: "Something went wrong on our end. Please try again in a few minutes."
            })
          }), [ge]), (0, b.jsxs)(b.Fragment, {
            children: [!1, (0, b.jsx)("div", {
              className: N.interestTrackerWrapper,
              children: (0, b.jsxs)(r.motion.div, {
                className: [N.interestTracker, ae && N.loader].join(" "),
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
                id: v || "",
                children: [(0, b.jsx)("div", {
                  className: N.moduleImage,
                  style: {
                    "--engagement-image": `url(${Ae})`
                  }
                }), (0, b.jsx)("div", {
                  className: [N.slideContainer, ae ? N.loader : ""].join(" "),
                  ref: Y,
                  "data-dev-mode": "disabled",
                  style: {
                    "--engagement-height": 0 === Se ? "200%" : `${Se}px`,
                    height: 0 !== Se && te ? `${Se}px` : "auto"
                  },
                  children: ae ? (0, b.jsx)("div", {
                    className: N.spinner,
                    children: (0, b.jsx)(l.A, {
                      type: "SPINNING"
                    })
                  }) : (0, b.jsxs)(b.Fragment, {
                    children: [(0, b.jsx)(x, {
                      s: N,
                      content: M,
                      refLanding: V,
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
                          location: n,
                          utmCampaign: B.get("utm_campaign"),
                          utmContent: B.get("utm_content"),
                          utmMedium: B.get("utm_medium"),
                          utmSource: B.get("utm_source")
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
                        const e = `${E}?returnUrl=${encodeURIComponent(We)}&lang=${P}`;
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
                      refSuccess: G,
                      successSlide: re,
                      characterList: Z,
                      linkAccountUrl: O,
                      linkMoreAccounts: () => {
                        q({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: O,
                          text: u.engagement.engagement_link_account.defaultMessage
                        })
                      },
                      linkAccountBtn: (0, b.jsx)(g.FormattedMessage, {
                        ...u.engagement.engagement_link_account
                      })
                    }), (0, b.jsx)(C, {
                      s: N,
                      content: M,
                      unlinkedSlide: de,
                      refUnlinked: Q,
                      linkConsoleText: U.formatMessage(u.engagement.engagement_link_console_account),
                      platformLogin: e => `https://${A}.rockstargames.com/tpa/${e}/link/?cid=${L}&lang=${P}&returnUrl=${encodeURIComponent(We)}&accessToken=${W}`,
                      giftId: t
                    }), (0, b.jsx)(y, {
                      s: N,
                      errorSlide: ge,
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