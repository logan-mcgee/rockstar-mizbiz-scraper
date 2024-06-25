! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "407fa978-ac98-415c-a1c5-7371a58bdc22", e._sentryDebugIdIdentifier = "sentry-dbid-407fa978-ac98-415c-a1c5-7371a58bdc22")
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
  [576, 232], {
    11e3: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => N
      });
      var r = a(51664),
        n = a(69844),
        s = a(48111),
        c = a(31403),
        o = a(67604),
        i = a(96940),
        l = a(45792),
        d = a(33052),
        m = a(42836),
        u = a(9860),
        g = a(79584),
        f = a(55120),
        b = a(1740);
      const w = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        h = {
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
      var x = a(95240);
      const {
        host: k,
        login: _,
        authHost: p,
        clientId: v
      } = (0, l.getScConfigForOrigin)(), S = "error", j = "landing", y = "success", C = "unlinked", T = e => {
        let {
          legalText: t
        } = e;
        return (0, x.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: t
          }
        })
      }, N = e => {
        let {
          giftId: t = 1,
          location: a = "gtaplus_site",
          introScreen: N,
          errorScreen: I,
          unlinkedScreen: E,
          successScreen: B,
          jumpLinkId: M,
          legalText: W
        } = e;
        const O = (0, l.useLocale)(),
          $ = {
            errorScreen: {
              btnText: I?.errorButton || "",
              headline: I?.errorHeadline || ""
            },
            introScreen: {
              body: N?.introContent || "",
              btnText: {
                loggedIn: N?.btnTextLoggedIn || "",
                loggedOut: N?.btnTextLoggedOut || ""
              },
              headline: N?.introHeadline || "",
              image: {
                alt: N?.image?.alt || N?.introHeadline || "",
                sources: {
                  desktop: (0, b.useGetCdnSource)(N?.image?.sources?.en_us?.desktop) || null,
                  mobile: (0, b.useGetCdnSource)(N?.image?.sources?.en_us?.mobile) || null
                }
              },
              tag: N?.tag || ""
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
            CharacterCard: H
          } = u.ProfileSwitcher,
          [L] = (0, n.useSearchParams)(),
          {
            data: P,
            loggedIn: R
          } = (0, m.useRockstarUser)(),
          A = (0, d.useRockstarTokenPing)(),
          F = `https://${k}.rockstargames.com/settings/linkedaccounts`,
          U = (0, l.toScLocaleString)(O),
          D = (0, g.useIntl)(),
          {
            track: G
          } = (0, m.useGtmTrack)(),
          {
            ref: q,
            inView: z
          } = (0, i.cD)({
            threshold: .6
          }),
          V = 1280,
          K = (0, r.createRef)(),
          Q = (0, r.createRef)(),
          Y = (0, r.createRef)(),
          J = (0, r.createRef)(),
          X = (0, r.createRef)(),
          Z = (0, r.createRef)(),
          [ee, te] = (0, r.useState)(),
          [ae, re] = (0, r.useState)([]),
          [ne, se] = (0, r.useState)(!1),
          [ce, oe] = (0, r.useState)(),
          [ie, le] = (0, r.useState)("hidden"),
          [de, me] = (0, r.useState)("hidden"),
          [ue, ge] = (0, r.useState)("hidden"),
          [fe, be] = (0, r.useState)("hidden"),
          [we, he] = (0, r.useState)(!1),
          [xe, ke] = (0, r.useState)("disabled"),
          _e = (0, d.useRockstarToken)(),
          [pe, ve] = (0, r.useState)(j),
          [Se, je] = (0, r.useState)(0),
          [ye, Ce] = (0, r.useState)(0),
          [Te, Ne] = (0, r.useState)(0),
          [Ie, Ee] = (0, r.useState)(0),
          [Be, Me] = (0, r.useState)(0),
          [We, Oe] = (0, r.useState)(!1),
          [$e, He] = (0, r.useState)(!1),
          Le = (0, r.useRef)(null),
          Pe = (0, r.useRef)(null),
          [Re, Ae] = (0, r.useState)({}),
          [Fe, Ue] = (0, r.useState)(),
          [De, Ge] = (0, r.useState)(!1),
          [qe, ze] = (0, r.useState)(!0),
          [Ve, Ke] = (0, r.useState)($.introScreen.image.sources.mobile || w),
          Qe = `${document.location.pathname}${document.location.search}#${M}`,
          Ye = (0, l.usePrevious)(ce),
          Je = (0, l.usePrevious)(R),
          Xe = () => {
            K.current && Ce(K?.current?.scrollHeight), Q.current && Ne(Q?.current?.scrollHeight), Y.current && Ee(Y?.current?.scrollHeight), J.current && Me(J?.current?.scrollHeight)
          },
          Ze = (e, t) => {
            e === j && (ve(j), t && je(ye), me("onScreen"), le("hidden"), be("hidden"), ge("hidden")), e === y && (ve(y), t && je(Te), me("offScreen"), le("visible"), setTimeout((() => {
              me("hidden")
            }), 300), setTimeout((() => {
              le("onScreen")
            }), 100)), e === S && (ve(S), t && je(Ie), me("offScreen"), be("visible"), setTimeout((() => {
              me("hidden")
            }), 300), setTimeout((() => {
              be("onScreen")
            }), 100)), e === C && (ve(C), t && je(Be), me("offScreen"), ge("visible"), setTimeout((() => {
              me("hidden")
            }), 300), setTimeout((() => {
              ge("onScreen")
            }), 100))
          },
          et = e => `https://${p}.rockstargames.com/tpa/${e}/link/?cid=${v}&lang=${U}&returnUrl=${encodeURIComponent(Qe)}&accessToken=${_e}`;
        return (0, r.useEffect)((() => {
          const e = () => {
              window.innerWidth > 2560 && "newswire" !== a ? Ke($.introScreen.image.sources.mobile || w) : Ke($.introScreen.image.sources.desktop || w)
            },
            t = () => {
              Xe(), window.innerWidth <= V && !ne && (se(!0), Ze(pe, !0)), window.innerWidth > V && ne && se(!1), e()
            };
          return se(window.innerWidth <= V), e(), window.addEventListener("resize", t), () => {
            window.removeEventListener("resize", t)
          }
        }), [pe, ne, K, J, Y, Q]), (0, r.useEffect)((() => {
          pe === y && Se !== Te ? je(Te) : pe === S && Se !== Ie ? je(Ie) : pe === j && Se !== ye ? je(ye) : pe === C && Se !== Be && je(Be)
        }), [Ie, Te, Se, Be, ye]), (0, r.useEffect)((() => {
          Xe(), We && pe === y && je(Q?.current?.scrollHeight)
        }), [K, J, Y, Q]), (0, r.useEffect)((() => {
          const e = P?.characters?.gtao;
          re(e || [])
        }), [P]), (0, r.useEffect)((() => {
          "boolean" != typeof Ye && "boolean" != typeof Je || ce && R && (async () => {
            const {
              result: e
            } = await (0, l.coreScApiFetch)("marketing/engagement/claim/exists", {
              pingBearer: A,
              query: {
                giftId: t
              }
            });
            te(e), oe(!1)
          })()
        }), [ce, R]), (0, r.useEffect)((() => {
          "boolean" == typeof R ? R ? oe(!0) : (oe(!1), me("onScreen")) : oe(!0)
        }), [R]), (0, r.useEffect)((() => {
          ee ? (Oe(!0), Ze(y, !0)) : "boolean" != typeof ee || ee || Ze(j, !0)
        }), [ee]), (0, r.useEffect)((() => {
          z && !we && (G({
            element_placement: "WOC",
            event: "page_section_impression",
            event_action: "impression",
            event_category: "page_section",
            event_label: "WOC"
          }), he(!0))
        }), [z]), (0, r.useEffect)((() => {
          "onScreen" === ie && G({
            element_placement: "WOC",
            event: "alert_update",
            event_action: "update",
            event_category: "alert",
            event_label: "successful claim",
            o_id: t,
            text: "Almost there!"
          })
        }), [ie]), (0, r.useEffect)((() => {
          "onScreen" === ue && G({
            element_placement: "WOC",
            event: "alert_error",
            event_action: "error",
            event_category: "alert",
            event_label: "no linked accounts",
            o_id: t,
            text: "No Qualifying Character Found"
          })
        }), [ue]), (0, r.useEffect)((() => {
          "onScreen" === fe && G({
            element_placement: "event_label",
            event: "alert_error",
            event_action: "error",
            event_category: "alert",
            event_label: "something went wrong",
            o_id: t,
            text: "Something went wrong on our end. Please try again in a few minutes."
          })
        }), [fe]), (0, r.useEffect)((() => {
          Z?.current && He(Z.current.scrollWidth >= Z.current.offsetWidth)
        }), [Z]), (0, r.useEffect)((() => {
          Ue({
            nextEl: Le.current,
            prevEl: Pe.current
          })
        }), [Pe, Le]), (0, x.jsxs)(x.Fragment, {
          children: [!1, (0, x.jsx)("div", {
            className: h.interestTrackerWrapper,
            children: (0, x.jsxs)(o.q.div, {
              className: [h.interestTracker, ce && h.loader].join(" "),
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
              children: [(0, x.jsx)("div", {
                className: h.moduleImage,
                style: {
                  "--engagement-image": `url(${Ve})`
                }
              }), (0, x.jsx)("div", {
                className: [h.slideContainer, ce ? h.loader : ""].join(" "),
                ref: X,
                "data-dev-mode": "disabled",
                style: {
                  "--engagement-height": 0 === Se ? "200%" : `${Se}px`,
                  height: 0 !== Se && ne ? `${Se}px` : "auto"
                },
                children: ce ? (0, x.jsx)(u.LoadingAnimation, {
                  type: "SPINNING"
                }) : (0, x.jsxs)(x.Fragment, {
                  children: [(0, x.jsxs)("div", {
                    className: [h.contentContainer, h[de], h.landingSlide].join(" "),
                    ref: K,
                    children: [(0, x.jsx)("img", {
                      src: $.introScreen.image.sources.mobile || w,
                      className: h.moduleImageMobile,
                      alt: $.introScreen.image.alt
                    }), (0, x.jsxs)("div", {
                      className: h.topContent,
                      children: [(0, x.jsx)("div", {
                        className: h.textContent,
                        children: (0, x.jsxs)("div", {
                          className: h.alert,
                          children: [(0, x.jsx)("div", {
                            className: h.badge,
                            children: $.introScreen.tag
                          }), (0, x.jsxs)("div", {
                            className: h.alertText,
                            children: [(0, x.jsx)("h2", {
                              children: $.introScreen.headline
                            }), (0, x.jsx)("div", {
                              dangerouslySetInnerHTML: {
                                __html: $.introScreen.body
                              }
                            })]
                          })]
                        })
                      }), (0, x.jsx)("div", {
                        className: h.btnContainer,
                        children: (0, x.jsx)(u.Gen9Button, {
                          text: R ? $.introScreen.btnText.loggedIn : $.introScreen.btnText.loggedOut,
                          onClick: R ? async () => {
                            G({
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
                              utmCampaign: L.get("utm_campaign"),
                              utmContent: L.get("utm_content"),
                              utmMedium: L.get("utm_medium"),
                              utmSource: L.get("utm_source")
                            };
                            if ("disabled" === xe)
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
                                Ze(t ? y : S, !1)
                              } else Ze(C, !1);
                            else "success" === xe ? Ze(y, !1) : "error" === xe ? Ze(S, !1) : "unlinked" === xe && Ze(C, !1)
                          } : () => {
                            const e = `${_}?returnUrl=${encodeURIComponent(Qe)}&lang=${U}`;
                            G({
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
                    }), (0, x.jsx)("div", {
                      className: h.bottomContent,
                      children: (0, x.jsx)("div", {
                        className: h.legal,
                        children: (0, x.jsx)(T, {
                          legalText: $.legalText
                        })
                      })
                    })]
                  }), (0, x.jsxs)("div", {
                    className: [h.contentContainer, h[ie], h.successSlide].join(" "),
                    "data-type": "long",
                    ref: Q,
                    children: [(0, x.jsxs)("div", {
                      className: h.topContent,
                      children: [(0, x.jsxs)("div", {
                        className: h.alert,
                        children: [(0, x.jsx)("div", {
                          className: h.successAlert
                        }), (0, x.jsxs)("div", {
                          className: h.alertText,
                          children: [(0, x.jsx)("h3", {
                            children: $.successScreen.headline
                          }), (0, x.jsx)("div", {
                            dangerouslySetInnerHTML: {
                              __html: $.successScreen.body
                            }
                          })]
                        })]
                      }), (0, x.jsxs)("div", {
                        className: h.swiperWrap,
                        children: [(0, x.jsx)("div", {
                          className: h.swiperContainer,
                          ref: Z,
                          "data-hasoverflow": $e,
                          children: (0, x.jsxs)(s.wx, {
                            loop: !1,
                            grabCursor: $e,
                            slidesPerView: "auto",
                            speed: 700,
                            navigation: Fe,
                            modules: [c._2],
                            onInit: e => {
                              Ae(e)
                            },
                            children: [ae.map((e => (0, x.jsx)(s.Ky, {
                              children: (0, r.createElement)(H, {
                                characterData: e,
                                key: e.mugshotUrl
                              })
                            }, e.mugshotUrl))), (0, x.jsx)(s.Ky, {
                              children: (0, x.jsx)(u.A, {
                                className: [h.linkMore, ae.length > 0 ? h.withIcon : ""].join(" "),
                                to: F,
                                onClick: () => {
                                  G({
                                    element_placement: "WOC",
                                    event: "cta_link_account",
                                    event_action: "link_account",
                                    event_category: "cta",
                                    event_label: "WOC cta",
                                    link_url: F,
                                    text: f.engagement.engagement_link_account.defaultMessage
                                  })
                                },
                                children: (0, x.jsx)("div", {
                                  className: h.btnText,
                                  children: (0, x.jsx)(g.FormattedMessage, {
                                    ...f.engagement.engagement_link_account
                                  })
                                })
                              })
                            }, "linkMore")]
                          })
                        }), (0, x.jsx)("button", {
                          className: h.swiperBtnPrev,
                          "aria-label": "Previous Character",
                          type: "button",
                          ref: Pe,
                          onClick: () => {
                            Re?.slidePrev(), Ge(Re?.isEnd), ze(Re?.isBeginning)
                          },
                          disabled: qe,
                          "data-hidden": !$e
                        }), (0, x.jsx)("button", {
                          className: h.swiperBtnNext,
                          "aria-label": "Next Character",
                          type: "button",
                          ref: Le,
                          onClick: () => {
                            Re?.slideNext(), Ge(Re?.isEnd), ze(Re?.isBeginning)
                          },
                          disabled: De,
                          "data-hidden": !$e
                        })]
                      })]
                    }), (0, x.jsx)("div", {
                      className: h.legal,
                      children: (0, x.jsx)(T, {
                        legalText: $.legalText
                      })
                    })]
                  }), (0, x.jsxs)("div", {
                    className: [h.contentContainer, h[ue], h.unlinkedSlide, h.textContent].join(" "),
                    ref: J,
                    children: [(0, x.jsx)("div", {
                      className: h.textContent,
                      children: (0, x.jsxs)("div", {
                        className: h.platformButtonContainer,
                        children: [(0, x.jsx)("div", {
                          className: h.errorAlert
                        }), (0, x.jsx)("h3", {
                          children: $.unlinkedScreen.headline
                        }), (0, x.jsx)(u.ExpandingPlatformButton, {
                          buttonText: D.formatMessage(f.engagement.engagement_link_console_account),
                          platformsAndLinks: [{
                            href: et("np"),
                            key: "ps",
                            platform: "ps",
                            translated: !0
                          }, {
                            href: et("xbox"),
                            key: "xbox",
                            platform: "xbox",
                            translated: !0
                          }],
                          trackingType: "link_account",
                          trackingParent: "WOC",
                          target: "_self",
                          trackingOId: t.toString(),
                          children: (0, x.jsx)("div", {
                            className: h.alert,
                            children: (0, x.jsx)("div", {
                              className: h.alertText,
                              children: (0, x.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                  __html: $.unlinkedScreen.body
                                }
                              })
                            })
                          })
                        })]
                      })
                    }), (0, x.jsx)("div", {
                      className: h.legal,
                      children: (0, x.jsx)(T, {
                        legalText: $.legalText
                      })
                    })]
                  }), (0, x.jsxs)("div", {
                    className: [h.contentContainer, h[fe], h.errorSlide, h.textContent].join(" "),
                    ref: Y,
                    children: [(0, x.jsxs)("div", {
                      className: h.textContent,
                      children: [(0, x.jsxs)("div", {
                        className: h.alert,
                        children: [(0, x.jsx)("div", {
                          className: h.errorAlert
                        }), (0, x.jsx)("div", {
                          className: h.alertText,
                          children: (0, x.jsx)("h3", {
                            children: $.errorScreen.headline
                          })
                        })]
                      }), (0, x.jsx)(u.Gen9Button, {
                        text: $.errorScreen.btnText,
                        onClick: () => window.location.reload()
                      })]
                    }), (0, x.jsx)("div", {
                      className: h.legal,
                      children: (0, x.jsx)(T, {
                        legalText: $.legalText
                      })
                    })]
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