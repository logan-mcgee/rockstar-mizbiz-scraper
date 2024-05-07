! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6a29ef7c-cb94-4f26-9df4-35bea4b4c93e", e._sentryDebugIdIdentifier = "sentry-dbid-6a29ef7c-cb94-4f26-9df4-35bea4b4c93e")
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
  [2196, 5328], {
    11e3: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => T
      });
      var n = a(51664),
        s = a(69844),
        r = a(48111),
        c = a(31403),
        i = a(22804),
        o = a(56572),
        l = a(45792),
        d = a(33052),
        g = a(42836),
        m = a(9860),
        f = a(41272),
        u = a(55120),
        b = a(1740);
      const h = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        x = {
          pillBtn: "rockstargames-sites-gta-gen9e9d0055988bd29cc9b3774420b49220d",
          selected: "rockstargames-sites-gta-gen9b6cfe7731b5b7ab166fcb167bd54aeec",
          devBtns: "rockstargames-sites-gta-gen9a6c889f3ecad96c4975bc7ed81540491",
          devBtn: "rockstargames-sites-gta-gen9ad51ee33c3002d7f25e3cc0f78b0d873",
          secondary: "rockstargames-sites-gta-gen9a256144bc2091efea308d9a8a377a737",
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
          swiperWrap: "rockstargames-sites-gta-gen9b64badc5e0122206ecb30b961bf41ce0",
          swiperContainer: "rockstargames-sites-gta-gen9f019ed0ffdb9171e9e607aa2fc5fb907",
          swiperButton: "rockstargames-sites-gta-gen9a2afa4a87ebfd0a1c39fae80e25a3a1b",
          swiperBtnPrev: "rockstargames-sites-gta-gen9f89d35a4a9139e178742b2f663b5334b",
          swiperBtnNext: "rockstargames-sites-gta-gen9e3115ab3e897ab6bf9a95fc3e60aa034"
        };
      var k = a(95240);
      const {
        host: _,
        login: p,
        authHost: v,
        clientId: S
      } = (0, l.getScConfigForOrigin)(), j = "error", w = "landing", y = "success", C = "unlinked", N = e => {
        let {
          legalText: t
        } = e;
        return (0, k.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: t
          }
        })
      }, T = e => {
        let {
          giftId: t = 1,
          location: a = "gtaplus_site",
          introScreen: T,
          errorScreen: I,
          unlinkedScreen: E,
          successScreen: B,
          jumpLinkId: M,
          legalText: W
        } = e;
        const O = (0, l.useLocale)(),
          R = {
            errorScreen: {
              btnText: I?.errorButton || "",
              headline: I?.errorHeadline || ""
            },
            introScreen: {
              body: T?.introContent || "",
              btnText: {
                loggedIn: T?.btnTextLoggedIn || "",
                loggedOut: T?.btnTextLoggedOut || ""
              },
              headline: T?.introHeadline || "",
              image: {
                alt: T?.image?.alt || T?.introHeadline || "",
                sources: {
                  desktop: (0, b.useGetCdnSource)(T?.image?.sources?.en_us?.desktop) || null,
                  mobile: (0, b.useGetCdnSource)(T?.image?.sources?.en_us?.mobile) || null
                }
              },
              tag: T?.tag || ""
            },
            legalText: W,
            successScreen: {
              body: B?.successContent || "",
              headline: B?.successHeadline || ""
            },
            unlinkedScreen: {
              body: E?.unlinkedContent || "",
              btnText: E?.unlinkedButtonText || "",
              headline: E?.unlinkedHeadline || ""
            }
          },
          {
            CharacterCard: $
          } = m.ProfileSwitcher,
          [H] = (0, s.useSearchParams)(),
          {
            data: L,
            loggedIn: P
          } = (0, g.useRockstarUser)(),
          A = (0, d.useRockstarTokenPing)(),
          F = `https://${_}.rockstargames.com/settings/linkedaccounts`,
          U = (0, l.toScLocaleString)(O),
          G = (0, f.useIntl)(),
          {
            track: D
          } = (0, g.useGtmTrack)(),
          {
            ref: q,
            inView: V
          } = (0, o.useInView)({
            threshold: .6
          }),
          z = 1280,
          K = (0, n.createRef)(),
          Q = (0, n.createRef)(),
          Y = (0, n.createRef)(),
          J = (0, n.createRef)(),
          X = (0, n.createRef)(),
          Z = (0, n.createRef)(),
          [ee, te] = (0, n.useState)(),
          [ae, ne] = (0, n.useState)([]),
          [se, re] = (0, n.useState)(!1),
          [ce, ie] = (0, n.useState)(),
          [oe, le] = (0, n.useState)("hidden"),
          [de, ge] = (0, n.useState)("hidden"),
          [me, fe] = (0, n.useState)("hidden"),
          [ue, be] = (0, n.useState)("hidden"),
          [he, xe] = (0, n.useState)(!1),
          [ke, _e] = (0, n.useState)("disabled"),
          pe = (0, d.useRockstarToken)(),
          [ve, Se] = (0, n.useState)(w),
          [je, we] = (0, n.useState)(0),
          [ye, Ce] = (0, n.useState)(0),
          [Ne, Te] = (0, n.useState)(0),
          [Ie, Ee] = (0, n.useState)(0),
          [Be, Me] = (0, n.useState)(0),
          [We, Oe] = (0, n.useState)(!1),
          [Re, $e] = (0, n.useState)(!1),
          He = (0, n.useRef)(null),
          Le = (0, n.useRef)(null),
          [Pe, Ae] = (0, n.useState)({}),
          [Fe, Ue] = (0, n.useState)(),
          [Ge, De] = (0, n.useState)(!1),
          [qe, Ve] = (0, n.useState)(!0),
          [ze, Ke] = (0, n.useState)(R.introScreen.image.sources.mobile || h),
          Qe = `${document.location.pathname}${document.location.search}#${M}`,
          Ye = e => {
            const t = (0, n.useRef)();
            return (0, n.useEffect)((() => {
              t.current = e
            })), t.current
          },
          Je = Ye(ce),
          Xe = Ye(P),
          Ze = () => {
            K.current && Ce(K?.current?.scrollHeight), Q.current && Te(Q?.current?.scrollHeight), Y.current && Ee(Y?.current?.scrollHeight), J.current && Me(J?.current?.scrollHeight)
          },
          et = (e, t) => {
            e === w && (Se(w), t && we(ye), ge("onScreen"), le("hidden"), be("hidden"), fe("hidden")), e === y && (Se(y), t && we(Ne), ge("offScreen"), le("visible"), setTimeout((() => {
              ge("hidden")
            }), 300), setTimeout((() => {
              le("onScreen")
            }), 100)), e === j && (Se(j), t && we(Ie), ge("offScreen"), be("visible"), setTimeout((() => {
              ge("hidden")
            }), 300), setTimeout((() => {
              be("onScreen")
            }), 100)), e === C && (Se(C), t && we(Be), ge("offScreen"), fe("visible"), setTimeout((() => {
              ge("hidden")
            }), 300), setTimeout((() => {
              fe("onScreen")
            }), 100))
          },
          tt = e => `https://${v}.rockstargames.com/tpa/${e}/link/?cid=${S}&lang=${U}&returnUrl=${encodeURIComponent(Qe)}&accessToken=${pe}`;
        return (0, n.useEffect)((() => {
          const e = () => {
              window.innerWidth > 2560 && "newswire" !== a ? Ke(R.introScreen.image.sources.mobile || h) : Ke(R.introScreen.image.sources.desktop || h)
            },
            t = () => {
              Ze(), window.innerWidth <= z && !se && (re(!0), et(ve, !0)), window.innerWidth > z && se && re(!1), e()
            };
          return re(window.innerWidth <= z), e(), window.addEventListener("resize", t), () => {
            window.removeEventListener("resize", t)
          }
        }), [ve, se, K, J, Y, Q]), (0, n.useEffect)((() => {
          ve === y && je !== Ne ? we(Ne) : ve === j && je !== Ie ? we(Ie) : ve === w && je !== ye ? we(ye) : ve === C && je !== Be && we(Be)
        }), [Ie, Ne, je, Be, ye]), (0, n.useEffect)((() => {
          Ze(), We && ve === y && we(Q?.current?.scrollHeight)
        }), [K, J, Y, Q]), (0, n.useEffect)((() => {
          const e = L?.characters?.gtao;
          ne(e || [])
        }), [L]), (0, n.useEffect)((() => {
          "boolean" != typeof Je && "boolean" != typeof Xe || ce && P && (async () => {
            const {
              result: e
            } = await (0, l.coreScApiFetch)("marketing/engagement/claim/exists", {
              pingBearer: A,
              query: {
                giftId: t
              }
            });
            te(e), ie(!1)
          })()
        }), [ce, P]), (0, n.useEffect)((() => {
          "boolean" == typeof P ? P ? ie(!0) : (ie(!1), ge("onScreen")) : ie(!0)
        }), [P]), (0, n.useEffect)((() => {
          ee ? (Oe(!0), et(y, !0)) : "boolean" != typeof ee || ee || et(w, !0)
        }), [ee]), (0, n.useEffect)((() => {
          V && !he && (D({
            element_placement: "WOC",
            event: "page_section_impression",
            event_action: "impression",
            event_category: "page_section",
            event_label: "WOC"
          }), xe(!0))
        }), [V]), (0, n.useEffect)((() => {
          "onScreen" === oe && D({
            element_placement: "WOC",
            event: "alert_update",
            event_action: "update",
            event_category: "alert",
            event_label: "successful claim",
            o_id: t,
            text: "Almost there!"
          })
        }), [oe]), (0, n.useEffect)((() => {
          "onScreen" === me && D({
            element_placement: "WOC",
            event: "alert_error",
            event_action: "error",
            event_category: "alert",
            event_label: "no linked accounts",
            o_id: t,
            text: "No Qualifying Character Found"
          })
        }), [me]), (0, n.useEffect)((() => {
          "onScreen" === ue && D({
            element_placement: "event_label",
            event: "alert_error",
            event_action: "error",
            event_category: "alert",
            event_label: "something went wrong",
            o_id: t,
            text: "Something went wrong on our end. Please try again in a few minutes."
          })
        }), [ue]), (0, n.useEffect)((() => {
          Z?.current && $e(Z.current.scrollWidth >= Z.current.offsetWidth)
        }), [Z]), (0, n.useEffect)((() => {
          Ue({
            nextEl: He.current,
            prevEl: Le.current
          })
        }), [Le, He]), (0, k.jsxs)(k.Fragment, {
          children: [!1, (0, k.jsxs)(i.motion.div, {
            className: [x.interestTracker, ce && x.loader].join(" "),
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
            ref: q,
            id: M || "",
            children: [(0, k.jsx)("div", {
              className: x.moduleImage,
              style: {
                "--engagement-image": `url(${ze})`
              }
            }), (0, k.jsx)("div", {
              className: [x.slideContainer, ce ? x.loader : ""].join(" "),
              ref: X,
              "data-dev-mode": "disabled",
              style: {
                "--engagement-height": 0 === je ? "200%" : `${je}px`,
                height: 0 !== je && se ? `${je}px` : "auto"
              },
              children: ce ? (0, k.jsx)(m.LoadingAnimation, {
                type: "SPINNING"
              }) : (0, k.jsxs)(k.Fragment, {
                children: [(0, k.jsxs)("div", {
                  className: [x.contentContainer, x[de], x.landingSlide].join(" "),
                  ref: K,
                  children: [(0, k.jsx)("img", {
                    src: R.introScreen.image.sources.mobile || h,
                    className: x.moduleImageMobile,
                    alt: R.introScreen.image.alt
                  }), (0, k.jsxs)("div", {
                    className: x.topContent,
                    children: [(0, k.jsx)("div", {
                      className: x.textContent,
                      children: (0, k.jsxs)("div", {
                        className: x.alert,
                        children: [(0, k.jsx)("div", {
                          className: x.badge,
                          children: R.introScreen.tag
                        }), (0, k.jsxs)("div", {
                          className: x.alertText,
                          children: [(0, k.jsx)("h2", {
                            children: R.introScreen.headline
                          }), (0, k.jsx)("div", {
                            dangerouslySetInnerHTML: {
                              __html: R.introScreen.body
                            }
                          })]
                        })]
                      })
                    }), (0, k.jsx)("div", {
                      className: x.btnContainer,
                      children: (0, k.jsx)(m.Gen9Button, {
                        text: P ? R.introScreen.btnText.loggedIn : R.introScreen.btnText.loggedOut,
                        onClick: P ? async () => {
                          D({
                            element_placement: "WOC",
                            event: "cta_claim",
                            event_action: "claim",
                            event_category: "cta",
                            event_label: "claim",
                            o_id: t,
                            text: "claim now"
                          });
                          const e = {
                            giftId: t,
                            location: a,
                            utmCampaign: H.get("utm_campaign"),
                            utmContent: H.get("utm_content"),
                            utmMedium: H.get("utm_medium"),
                            utmSource: H.get("utm_source")
                          };
                          if ("disabled" === ke)
                            if (ae.length > 0) {
                              const {
                                status: t
                              } = await (0, l.coreScApiFetch)("marketing/engagement/claim/create", {
                                fetchOptions: {
                                  method: "POST"
                                },
                                pingBearer: A,
                                query: e
                              }) ?? [];
                              et(t ? y : j, !1)
                            } else et(C, !1);
                          else "success" === ke ? et(y, !1) : "error" === ke ? et(j, !1) : "unlinked" === ke && et(C, !1)
                        } : () => {
                          const e = `${p}?returnUrl=${encodeURIComponent(Qe)}&lang=${U}`;
                          D({
                            element_placement: "WOC",
                            event: "cta_login",
                            event_action: "login",
                            event_category: "cta",
                            event_label: "sign in and claim",
                            link_url: e,
                            text: "claim now"
                          }), window.location.href = e
                        }
                      })
                    })]
                  }), (0, k.jsx)("div", {
                    className: x.bottomContent,
                    children: (0, k.jsx)("div", {
                      className: x.legal,
                      children: (0, k.jsx)(N, {
                        legalText: R.legalText
                      })
                    })
                  })]
                }), (0, k.jsxs)("div", {
                  className: [x.contentContainer, x[oe], x.successSlide].join(" "),
                  "data-type": "long",
                  ref: Q,
                  children: [(0, k.jsxs)("div", {
                    className: x.topContent,
                    children: [(0, k.jsxs)("div", {
                      className: x.alert,
                      children: [(0, k.jsx)("div", {
                        className: x.successAlert
                      }), (0, k.jsxs)("div", {
                        className: x.alertText,
                        children: [(0, k.jsx)("h3", {
                          children: R.successScreen.headline
                        }), (0, k.jsx)("div", {
                          dangerouslySetInnerHTML: {
                            __html: R.successScreen.body
                          }
                        })]
                      })]
                    }), (0, k.jsxs)("div", {
                      className: x.swiperWrap,
                      children: [(0, k.jsx)("div", {
                        className: x.swiperContainer,
                        ref: Z,
                        "data-hasoverflow": Re,
                        children: (0, k.jsxs)(r.wx, {
                          loop: !1,
                          grabCursor: Re,
                          slidesPerView: "auto",
                          speed: 700,
                          navigation: Fe,
                          modules: [c._2],
                          onInit: e => {
                            Ae(e)
                          },
                          children: [ae.map((e => (0, k.jsx)(r.Ky, {
                            children: (0, n.createElement)($, {
                              characterData: e,
                              key: e.mugshotUrl
                            })
                          }, e.mugshotUrl))), (0, k.jsx)(r.Ky, {
                            children: (0, k.jsx)(m.A, {
                              className: [x.linkMore, ae.length > 0 ? x.withIcon : ""].join(" "),
                              to: F,
                              onClick: () => {
                                D({
                                  element_placement: "WOC",
                                  event: "cta_link_account",
                                  event_action: "link_account",
                                  event_category: "cta",
                                  event_label: "WOC cta",
                                  link_url: F,
                                  text: u.engagement.engagement_link_account.defaultMessage
                                })
                              },
                              children: (0, k.jsx)("div", {
                                className: x.btnText,
                                children: (0, k.jsx)(f.FormattedMessage, {
                                  ...u.engagement.engagement_link_account
                                })
                              })
                            })
                          }, "linkMore")]
                        })
                      }), (0, k.jsx)("button", {
                        className: x.swiperBtnPrev,
                        "aria-label": "Previous Character",
                        type: "button",
                        ref: Le,
                        onClick: () => {
                          Pe?.slidePrev(), De(Pe?.isEnd), Ve(Pe?.isBeginning)
                        },
                        disabled: qe,
                        "data-hidden": !Re
                      }), (0, k.jsx)("button", {
                        className: x.swiperBtnNext,
                        "aria-label": "Next Character",
                        type: "button",
                        ref: He,
                        onClick: () => {
                          Pe?.slideNext(), De(Pe?.isEnd), Ve(Pe?.isBeginning)
                        },
                        disabled: Ge,
                        "data-hidden": !Re
                      })]
                    })]
                  }), (0, k.jsx)("div", {
                    className: x.legal,
                    children: (0, k.jsx)(N, {
                      legalText: R.legalText
                    })
                  })]
                }), (0, k.jsxs)("div", {
                  className: [x.contentContainer, x[me], x.unlinkedSlide, x.textContent].join(" "),
                  ref: J,
                  children: [(0, k.jsx)("div", {
                    className: x.textContent,
                    children: (0, k.jsxs)("div", {
                      className: x.platformButtonContainer,
                      children: [(0, k.jsx)("div", {
                        className: x.errorAlert
                      }), (0, k.jsx)("h3", {
                        children: R.unlinkedScreen.headline
                      }), (0, k.jsx)(m.ExpandingPlatformButton, {
                        buttonText: G.formatMessage(u.engagement.engagement_link_console_account),
                        platformsAndLinks: [{
                          href: tt("np"),
                          key: "ps",
                          platform: "ps",
                          translated: !0
                        }, {
                          href: tt("xbox"),
                          key: "xbox",
                          platform: "xbox",
                          translated: !0
                        }],
                        trackingType: "link_account",
                        trackingParent: "WOC",
                        target: "_self",
                        trackingOId: t,
                        children: (0, k.jsx)("div", {
                          className: x.alert,
                          children: (0, k.jsx)("div", {
                            className: x.alertText,
                            children: (0, k.jsx)("div", {
                              dangerouslySetInnerHTML: {
                                __html: R.unlinkedScreen.body
                              }
                            })
                          })
                        })
                      })]
                    })
                  }), (0, k.jsx)("div", {
                    className: x.legal,
                    children: (0, k.jsx)(N, {
                      legalText: R.legalText
                    })
                  })]
                }), (0, k.jsxs)("div", {
                  className: [x.contentContainer, x[ue], x.errorSlide, x.textContent].join(" "),
                  ref: Y,
                  children: [(0, k.jsxs)("div", {
                    className: x.textContent,
                    children: [(0, k.jsxs)("div", {
                      className: x.alert,
                      children: [(0, k.jsx)("div", {
                        className: x.errorAlert
                      }), (0, k.jsx)("div", {
                        className: x.alertText,
                        children: (0, k.jsx)("h3", {
                          children: R.errorScreen.headline
                        })
                      })]
                    }), (0, k.jsx)(m.Gen9Button, {
                      text: R.errorScreen.btnText,
                      onClick: () => window.location.reload()
                    })]
                  }), (0, k.jsx)("div", {
                    className: x.legal,
                    children: (0, k.jsx)(N, {
                      legalText: R.legalText
                    })
                  })]
                })]
              })
            })]
          })]
        })
      }
    }
  }
]);