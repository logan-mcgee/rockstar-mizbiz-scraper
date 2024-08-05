! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6b429812-a5f4-4b1b-a12c-714cf4c851be", e._sentryDebugIdIdentifier = "sentry-dbid-6b429812-a5f4-4b1b-a12c-714cf4c851be")
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
  [9095], {
    10294: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => W
      });
      var r = a(71403),
        s = a(57172),
        n = a(81902),
        c = a(11650),
        o = a(37197),
        i = a(66105),
        l = a(42756),
        d = a(58407),
        m = a(40207),
        u = a(86503),
        f = a(60285),
        g = a(39695),
        b = a(62811),
        w = a(26177),
        h = a(56309),
        x = a(94566),
        k = a(74401);
      const p = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        S = {
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
          swiperWrap: "rockstargames-modules-core-newswire-articleb64badc5e0122206ecb30b961bf41ce0",
          swiperContainer: "rockstargames-modules-core-newswire-articlef019ed0ffdb9171e9e607aa2fc5fb907",
          swiperButton: "rockstargames-modules-core-newswire-articlea2afa4a87ebfd0a1c39fae80e25a3a1b",
          swiperBtnPrev: "rockstargames-modules-core-newswire-articlef89d35a4a9139e178742b2f663b5334b",
          swiperBtnNext: "rockstargames-modules-core-newswire-articlee3115ab3e897ab6bf9a95fc3e60aa034"
        };
      var _ = a(46632);
      const {
        host: v,
        login: j,
        authHost: C,
        clientId: y
      } = (0, l.getScConfigForOrigin)(), T = "error", N = "landing", I = "success", E = "unlinked", M = e => {
        let {
          legalText: t
        } = e;
        return (0, _.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: t
          }
        })
      }, W = e => {
        let {
          giftId: t,
          location: a = "gtaplus_site",
          introScreen: W,
          errorScreen: B,
          unlinkedScreen: R,
          successScreen: $,
          jumpLinkId: A,
          legalText: H
        } = e;
        const L = (0, l.useLocale)(),
          O = {
            errorScreen: {
              btnText: B?.errorButton || "",
              headline: B?.errorHeadline || ""
            },
            introScreen: {
              body: W?.introContent || "",
              btnText: {
                loggedIn: W?.btnTextLoggedIn || "",
                loggedOut: W?.btnTextLoggedOut || ""
              },
              headline: W?.introHeadline || "",
              image: {
                alt: W?.image?.alt || W?.introHeadline || "",
                sources: {
                  desktop: (0, k.useGetCdnSource)(W?.image?.sources?.en_us?.desktop) || null,
                  mobile: (0, k.useGetCdnSource)(W?.image?.sources?.en_us?.mobile) || null
                }
              },
              tag: W?.tag || ""
            },
            legalText: H,
            successScreen: {
              body: $?.successContent || "",
              headline: $?.successHeadline || ""
            },
            unlinkedScreen: {
              body: R?.unlinkedContent || "",
              btnText: R?.unlinkedButtonText || "",
              headline: R?.unlinkedHeadline || ""
            }
          },
          {
            CharacterCard: P
          } = u,
          [U] = (0, s.useSearchParams)(),
          {
            data: F,
            loggedIn: q
          } = (0, m.useRockstarUser)(),
          D = (0, d.useRockstarTokenPing)(),
          G = `https://${v}.rockstargames.com/settings/linkedaccounts`,
          V = (0, l.toScLocaleString)(L),
          z = (0, h.useIntl)(),
          {
            track: Q
          } = (0, m.useGtmTrack)(),
          {
            ref: Y,
            inView: J
          } = (0, i.Wx)({
            threshold: .6
          }),
          K = 1280,
          X = (0, r.createRef)(),
          Z = (0, r.createRef)(),
          ee = (0, r.createRef)(),
          te = (0, r.createRef)(),
          ae = (0, r.createRef)(),
          re = (0, r.createRef)(),
          [se, ne] = (0, r.useState)(),
          [ce, oe] = (0, r.useState)([]),
          [ie, le] = (0, r.useState)(!1),
          [de, me] = (0, r.useState)(),
          [ue, fe] = (0, r.useState)("hidden"),
          [ge, be] = (0, r.useState)("hidden"),
          [we, he] = (0, r.useState)("hidden"),
          [xe, ke] = (0, r.useState)("hidden"),
          [pe, Se] = (0, r.useState)(!1),
          _e = (0, d.useRockstarToken)(),
          [ve, je] = (0, r.useState)(N),
          [Ce, ye] = (0, r.useState)(0),
          [Te, Ne] = (0, r.useState)(0),
          [Ie, Ee] = (0, r.useState)(0),
          [Me, We] = (0, r.useState)(0),
          [Be, Re] = (0, r.useState)(0),
          [$e, Ae] = (0, r.useState)(!1),
          [He, Le] = (0, r.useState)(!1),
          Oe = (0, r.useRef)(null),
          Pe = (0, r.useRef)(null),
          [Ue, Fe] = (0, r.useState)({}),
          [qe, De] = (0, r.useState)(),
          [Ge, Ve] = (0, r.useState)(!1),
          [ze, Qe] = (0, r.useState)(!0),
          [Ye, Je] = (0, r.useState)(O.introScreen.image.sources.mobile || p),
          Ke = `${document.location.pathname}${document.location.search}#${A}`,
          Xe = (0, l.usePrevious)(de),
          Ze = (0, l.usePrevious)(q),
          et = () => {
            X.current && Ne(X?.current?.scrollHeight), Z.current && Ee(Z?.current?.scrollHeight), ee.current && We(ee?.current?.scrollHeight), te.current && Re(te?.current?.scrollHeight)
          },
          tt = (e, t) => {
            e === N && (je(N), t && ye(Te), be("onScreen"), fe("hidden"), ke("hidden"), he("hidden")), e === I && (je(I), t && ye(Ie), be("offScreen"), fe("visible"), setTimeout((() => {
              be("hidden")
            }), 300), setTimeout((() => {
              fe("onScreen")
            }), 100)), e === T && (je(T), t && ye(Me), be("offScreen"), ke("visible"), setTimeout((() => {
              be("hidden")
            }), 300), setTimeout((() => {
              ke("onScreen")
            }), 100)), e === E && (je(E), t && ye(Be), be("offScreen"), he("visible"), setTimeout((() => {
              be("hidden")
            }), 300), setTimeout((() => {
              he("onScreen")
            }), 100))
          },
          at = e => `https://${C}.rockstargames.com/tpa/${e}/link/?cid=${y}&lang=${V}&returnUrl=${encodeURIComponent(Ke)}&accessToken=${_e}`;
        return (0, r.useEffect)((() => {
          const e = () => {
              window.innerWidth > 2560 && "newswire" !== a ? Je(O.introScreen.image.sources.mobile || p) : Je(O.introScreen.image.sources.desktop || p)
            },
            t = () => {
              et(), window.innerWidth <= K && !ie && (le(!0), tt(ve, !0)), window.innerWidth > K && ie && le(!1), e()
            };
          return le(window.innerWidth <= K), e(), window.addEventListener("resize", t), () => {
            window.removeEventListener("resize", t)
          }
        }), [ve, ie, X, te, ee, Z]), (0, r.useEffect)((() => {
          ve === I && Ce !== Ie ? ye(Ie) : ve === T && Ce !== Me ? ye(Me) : ve === N && Ce !== Te ? ye(Te) : ve === E && Ce !== Be && ye(Be)
        }), [Me, Ie, Ce, Be, Te]), (0, r.useEffect)((() => {
          et(), $e && ve === I && ye(Z?.current?.scrollHeight)
        }), [X, te, ee, Z]), (0, r.useEffect)((() => {
          const e = F?.characters?.gtao;
          oe(e || [])
        }), [F]), (0, r.useEffect)((() => {
          "boolean" != typeof Xe && "boolean" != typeof Ze || de && q && (async () => {
            const {
              result: e
            } = await (0, l.coreScApiFetch)("marketing/engagement/claim/exists", {
              pingBearer: D,
              query: {
                giftUId: t
              }
            });
            ne(e), me(!1)
          })()
        }), [de, q]), (0, r.useEffect)((() => {
          "boolean" == typeof q ? q ? me(!0) : (me(!1), be("onScreen")) : me(!0)
        }), [q]), (0, r.useEffect)((() => {
          se ? (Ae(!0), tt(I, !0)) : "boolean" != typeof se || se || tt(N, !0)
        }), [se]), (0, r.useEffect)((() => {
          J && !pe && (Q({
            element_placement: "WOC",
            event: "page_section_impression"
          }), Se(!0))
        }), [J]), (0, r.useEffect)((() => {
          "onScreen" === ue && Q({
            element_placement: "WOC",
            event: "alert_update",
            o_id: t,
            text: "Almost there!"
          })
        }), [ue]), (0, r.useEffect)((() => {
          "onScreen" === we && Q({
            element_placement: "WOC",
            event: "alert_error",
            o_id: t,
            text: "No Qualifying Character Found"
          })
        }), [we]), (0, r.useEffect)((() => {
          "onScreen" === xe && Q({
            element_placement: "event_label",
            event: "alert_error",
            o_id: t,
            text: "Something went wrong on our end. Please try again in a few minutes."
          })
        }), [xe]), (0, r.useEffect)((() => {
          re?.current && Le(re.current.scrollWidth >= re.current.offsetWidth)
        }), [re]), (0, r.useEffect)((() => {
          De({
            nextEl: Oe.current,
            prevEl: Pe.current
          })
        }), [Pe, Oe]), (0, _.jsx)(_.Fragment, {
          children: (0, _.jsx)("div", {
            className: S.interestTrackerWrapper,
            children: (0, _.jsxs)(o.P.div, {
              className: [S.interestTracker, de && S.loader].join(" "),
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
              ref: Y,
              id: A || "",
              children: [(0, _.jsx)("div", {
                className: S.moduleImage,
                style: {
                  "--engagement-image": `url(${Ye})`
                }
              }), (0, _.jsx)("div", {
                className: [S.slideContainer, de ? S.loader : ""].join(" "),
                ref: ae,
                "data-dev-mode": "disabled",
                style: {
                  "--engagement-height": 0 === Ce ? "200%" : `${Ce}px`,
                  height: 0 !== Ce && ie ? `${Ce}px` : "auto"
                },
                children: de ? (0, _.jsx)(w.A, {
                  type: "SPINNING"
                }) : (0, _.jsxs)(_.Fragment, {
                  children: [(0, _.jsxs)("div", {
                    className: [S.contentContainer, S[ge], S.landingSlide].join(" "),
                    ref: X,
                    children: [(0, _.jsx)("img", {
                      src: O.introScreen.image.sources.mobile || p,
                      className: S.moduleImageMobile,
                      alt: O.introScreen.image.alt
                    }), (0, _.jsxs)("div", {
                      className: S.topContent,
                      children: [(0, _.jsx)("div", {
                        className: S.textContent,
                        children: (0, _.jsxs)("div", {
                          className: S.alert,
                          children: [(0, _.jsx)("div", {
                            className: S.badge,
                            children: O.introScreen.tag
                          }), (0, _.jsxs)("div", {
                            className: S.alertText,
                            children: [(0, _.jsx)("h2", {
                              children: O.introScreen.headline
                            }), (0, _.jsx)("div", {
                              dangerouslySetInnerHTML: {
                                __html: O.introScreen.body
                              }
                            })]
                          })]
                        })
                      }), (0, _.jsx)("div", {
                        className: S.btnContainer,
                        children: (0, _.jsx)(b.A, {
                          text: q ? O.introScreen.btnText.loggedIn : O.introScreen.btnText.loggedOut,
                          onClick: q ? async () => {
                            Q({
                              element_placement: "WOC",
                              event: "cta_claim",
                              o_id: t,
                              text: "claim now"
                            });
                            const e = {
                              giftUId: t,
                              location: a,
                              utmCampaign: U.get("utm_campaign"),
                              utmContent: U.get("utm_content"),
                              utmMedium: U.get("utm_medium"),
                              utmSource: U.get("utm_source")
                            };
                            if (ce.length > 0) {
                              const {
                                status: t
                              } = await (0, l.coreScApiFetch)("marketing/engagement/claim/create", {
                                fetchOptions: {
                                  method: "POST"
                                },
                                pingBearer: D,
                                query: e
                              }) ?? [];
                              tt(t ? I : T, !1)
                            } else tt(E, !1)
                          } : () => {
                            const e = `${j}?returnUrl=${encodeURIComponent(Ke)}&lang=${V}`;
                            Q({
                              element_placement: "WOC",
                              event: "cta_login",
                              link_url: e,
                              text: "claim now"
                            }), window.location.href = e
                          }
                        })
                      })]
                    }), (0, _.jsx)("div", {
                      className: S.bottomContent,
                      children: (0, _.jsx)("div", {
                        className: S.legal,
                        children: (0, _.jsx)(M, {
                          legalText: O.legalText
                        })
                      })
                    })]
                  }), (0, _.jsxs)("div", {
                    className: [S.contentContainer, S[ue], S.successSlide].join(" "),
                    "data-type": "long",
                    ref: Z,
                    children: [(0, _.jsxs)("div", {
                      className: S.topContent,
                      children: [(0, _.jsxs)("div", {
                        className: S.alert,
                        children: [(0, _.jsx)("div", {
                          className: S.successAlert
                        }), (0, _.jsxs)("div", {
                          className: S.alertText,
                          children: [(0, _.jsx)("h3", {
                            children: O.successScreen.headline
                          }), (0, _.jsx)("div", {
                            dangerouslySetInnerHTML: {
                              __html: O.successScreen.body
                            }
                          })]
                        })]
                      }), (0, _.jsxs)("div", {
                        className: S.swiperWrap,
                        children: [(0, _.jsx)("div", {
                          className: S.swiperContainer,
                          ref: re,
                          "data-hasoverflow": He,
                          children: (0, _.jsxs)(n.RC, {
                            loop: !1,
                            grabCursor: He,
                            slidesPerView: "auto",
                            speed: 700,
                            navigation: qe,
                            modules: [c.Vx],
                            onInit: e => {
                              Fe(e)
                            },
                            children: [ce.map((e => (0, _.jsx)(n.qr, {
                              children: (0, r.createElement)(P, {
                                characterData: e,
                                key: e.mugshotUrl
                              })
                            }, e.mugshotUrl))), (0, _.jsx)(n.qr, {
                              children: (0, _.jsx)(f.A, {
                                className: [S.linkMore, ce.length > 0 ? S.withIcon : ""].join(" "),
                                to: G,
                                onClick: () => {
                                  Q({
                                    element_placement: "WOC",
                                    event: "cta_link_account",
                                    link_url: G,
                                    text: x.engagement.engagement_link_account.defaultMessage
                                  })
                                },
                                children: (0, _.jsx)("div", {
                                  className: S.btnText,
                                  children: (0, _.jsx)(h.FormattedMessage, {
                                    ...x.engagement.engagement_link_account
                                  })
                                })
                              })
                            }, "linkMore")]
                          })
                        }), (0, _.jsx)("button", {
                          className: S.swiperBtnPrev,
                          "aria-label": "Previous Character",
                          type: "button",
                          ref: Pe,
                          onClick: () => {
                            Ue?.slidePrev(), Ve(Ue?.isEnd), Qe(Ue?.isBeginning)
                          },
                          disabled: ze,
                          "data-hidden": !He
                        }), (0, _.jsx)("button", {
                          className: S.swiperBtnNext,
                          "aria-label": "Next Character",
                          type: "button",
                          ref: Oe,
                          onClick: () => {
                            Ue?.slideNext(), Ve(Ue?.isEnd), Qe(Ue?.isBeginning)
                          },
                          disabled: Ge,
                          "data-hidden": !He
                        })]
                      })]
                    }), (0, _.jsx)("div", {
                      className: S.legal,
                      children: (0, _.jsx)(M, {
                        legalText: O.legalText
                      })
                    })]
                  }), (0, _.jsxs)("div", {
                    className: [S.contentContainer, S[we], S.unlinkedSlide, S.textContent].join(" "),
                    ref: te,
                    children: [(0, _.jsx)("div", {
                      className: S.textContent,
                      children: (0, _.jsxs)("div", {
                        className: S.platformButtonContainer,
                        children: [(0, _.jsx)("div", {
                          className: S.errorAlert
                        }), (0, _.jsx)("h3", {
                          children: O.unlinkedScreen.headline
                        }), (0, _.jsx)(g.A, {
                          buttonText: z.formatMessage(x.engagement.engagement_link_console_account),
                          platformsAndLinks: [{
                            href: at("np"),
                            key: "ps",
                            platform: "ps",
                            translated: !0
                          }, {
                            href: at("xbox"),
                            key: "xbox",
                            platform: "xbox",
                            translated: !0
                          }],
                          trackingType: "link_account",
                          trackingParent: "WOC",
                          target: "_self",
                          trackingOId: t,
                          children: (0, _.jsx)("div", {
                            className: S.alert,
                            children: (0, _.jsx)("div", {
                              className: S.alertText,
                              children: (0, _.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                  __html: O.unlinkedScreen.body
                                }
                              })
                            })
                          })
                        })]
                      })
                    }), (0, _.jsx)("div", {
                      className: S.legal,
                      children: (0, _.jsx)(M, {
                        legalText: O.legalText
                      })
                    })]
                  }), (0, _.jsxs)("div", {
                    className: [S.contentContainer, S[xe], S.errorSlide, S.textContent].join(" "),
                    ref: ee,
                    children: [(0, _.jsxs)("div", {
                      className: S.textContent,
                      children: [(0, _.jsxs)("div", {
                        className: S.alert,
                        children: [(0, _.jsx)("div", {
                          className: S.errorAlert
                        }), (0, _.jsx)("div", {
                          className: S.alertText,
                          children: (0, _.jsx)("h3", {
                            children: O.errorScreen.headline
                          })
                        })]
                      }), (0, _.jsx)(b.A, {
                        text: O.errorScreen.btnText,
                        onClick: () => window.location.reload()
                      })]
                    }), (0, _.jsx)("div", {
                      className: S.legal,
                      children: (0, _.jsx)(M, {
                        legalText: O.legalText
                      })
                    })]
                  })]
                })
              })]
            })
          })
        })
      }
    }
  }
]);