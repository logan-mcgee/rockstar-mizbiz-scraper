! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c6d70e9c-ce80-4b64-9459-bbee5fa863bd", e._sentryDebugIdIdentifier = "sentry-dbid-c6d70e9c-ce80-4b64-9459-bbee5fa863bd")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "7434858002db60462282401ab192924e3d1a0a27",
  packageName: "@rockstargames/modules-core-engagement",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "7434858002db60462282401ab192924e3d1a0a27"
}, (self.webpackChunk_rockstargames_modules_core_engagement = self.webpackChunk_rockstargames_modules_core_engagement || []).push([
  [312], {
    5848: (e, t, n) => {
      n.r(t), n.d(t, {
        default: () => T
      });
      var a = n(8200),
        r = n(4936),
        s = n(8111),
        c = n(8548),
        o = n(7272),
        l = n(2032),
        d = n(5792),
        i = n(3052),
        g = n(2836),
        m = n(1668),
        u = n(696),
        f = n(5120),
        b = n(1740);
      const h = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        x = {
          pillBtn: "rockstargames-modules-core-engagementa9a064625c29810f9bf1de38aba96800",
          selected: "rockstargames-modules-core-engagementc9d60d7622c55fdb3bff46f0ff22be92",
          devBtns: "rockstargames-modules-core-engagementf52c37b4cadc45e9c9ba8984df67c574",
          devBtn: "rockstargames-modules-core-engagementdf6baeeefddfc2718f4e1034ad270c01",
          secondary: "rockstargames-modules-core-engagementb964e108456feb29814f8c6e4909fca0",
          interestTracker: "rockstargames-modules-core-engagementd23a3a0f83e735829f3c5268487f8955",
          loader: "rockstargames-modules-core-engagementbd9c7e0a1dfec0d970d286407b1004b9",
          moduleImage: "rockstargames-modules-core-engagementb56c277ae93c769eb031a4eceeee85ac",
          mobileImgContainer: "rockstargames-modules-core-engagementc3ed61ab4b0c543d39a674e05ea44820",
          moduleImageMobile: "rockstargames-modules-core-engagementb608d8f9bf2b6644f12b70f8b0677680",
          slideContainer: "rockstargames-modules-core-engagementbb5fdee3d37c47eec7a74145b91aee9a",
          contentContainer: "rockstargames-modules-core-engagementaaa78c009f748cb05a93854bfc725174",
          landingSlide: "rockstargames-modules-core-engagementa9f1ca0aaf94f7ed2e1a7e9742ea094c",
          textContent: "rockstargames-modules-core-engagementea40058cd873ae6c34be6d3426d80460",
          successSlide: "rockstargames-modules-core-engagementcbdbde5f34364ca792c4a18b67bb4436",
          unlinkedSlide: "rockstargames-modules-core-engagementde1ae5043a52f5b9b7200204af900a09",
          platformButtonContainer: "rockstargames-modules-core-engagementdfab46e2da843e2b59f6b890d01cf65a",
          errorSlide: "rockstargames-modules-core-engagementd409c6dc27c815019d4ca34068788dfd",
          btnContainer: "rockstargames-modules-core-engagementf19e93615a5978565f74f782b6531fbb",
          topContent: "rockstargames-modules-core-engagementca6e92ec3e30c17f058973a2a20fb295",
          bottomContent: "rockstargames-modules-core-engagementdbbbf02a1fc1b589f994b75de6de33f1",
          legal: "rockstargames-modules-core-engagementde3f1f5cdeb392191482a795e817423b",
          faq: "rockstargames-modules-core-engagementfbf6c13d3a75bc4fc2f21b623f28587c",
          faqLink: "rockstargames-modules-core-engagementfe68c978610194f41f33324822e140be",
          badge: "rockstargames-modules-core-engagementd51d31821a9fad31311902562d429b48",
          hidden: "rockstargames-modules-core-engagementc7ebb37c698aaa9c08f73bc8c9abbd3a",
          visible: "rockstargames-modules-core-engagementfece722595c5e86ec9e01647fe5f3bab",
          onScreen: "rockstargames-modules-core-engagementd452676523bd23e8b9e65d9dcd5016f3",
          offScreen: "rockstargames-modules-core-engagementf51da32b16cfde1859c4d88dc718e4dc",
          alert: "rockstargames-modules-core-engagementf02aaa512fec14ecae224d7ff78df506",
          alertText: "rockstargames-modules-core-engagemente462ef3affdfe3ee94a5667f00d9796e",
          errorAlert: "rockstargames-modules-core-engagementa5737d91d2ae0e3621efe78c93e3b3ff",
          successAlert: "rockstargames-modules-core-engagementd3abf02a61032e66ca6619375103e41f",
          linkMore: "rockstargames-modules-core-engagementd7aecf4e9f173356bd7971f345b33858",
          withIcon: "rockstargames-modules-core-engagementc7cd9b5ca2fd41140e400567a9e22f2b",
          btnText: "rockstargames-modules-core-engagementc52ddcd18cf51722ed56862df18dbca9",
          swiperWrap: "rockstargames-modules-core-engagementb984c0bcb08c16d11871b46a67b8f484",
          swiperContainer: "rockstargames-modules-core-engagementec760c12bbf27f31e18ea3ca4456d515",
          swiperButton: "rockstargames-modules-core-engagemente113a90414977ad6f45f8439d545db79",
          swiperBtnPrev: "rockstargames-modules-core-engagemente3acf926305975eb8509a121f6df88ea",
          swiperBtnNext: "rockstargames-modules-core-engagementa9e6b086c2fd2ec99a839f6a6805ed3d"
        };
      var k = n(3480);
      const {
        host: _,
        login: p,
        authHost: v,
        clientId: S
      } = (0, d.getScConfigForOrigin)(), j = "error", w = "landing", y = "success", C = "unlinked", N = e => {
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
          location: n = "gtaplus_site",
          introScreen: T,
          errorScreen: I,
          unlinkedScreen: E,
          successScreen: B,
          jumpLinkId: M,
          legalText: W
        } = e;
        const O = (0, d.useLocale)(),
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
          [H] = (0, r.useSearchParams)(),
          {
            data: L,
            loggedIn: P
          } = (0, g.useRockstarUser)(),
          A = (0, i.useRockstarTokenPing)(),
          F = `https://${_}.rockstargames.com/settings/linkedaccounts`,
          U = (0, d.toScLocaleString)(O),
          G = (0, u.useIntl)(),
          {
            track: D
          } = (0, g.useGtmTrack)(),
          {
            ref: q,
            inView: V
          } = (0, l.useInView)({
            threshold: .6
          }),
          z = 1280,
          K = (0, a.createRef)(),
          Q = (0, a.createRef)(),
          Y = (0, a.createRef)(),
          J = (0, a.createRef)(),
          X = (0, a.createRef)(),
          Z = (0, a.createRef)(),
          [ee, te] = (0, a.useState)(),
          [ne, ae] = (0, a.useState)([]),
          [re, se] = (0, a.useState)(!1),
          [ce, oe] = (0, a.useState)(),
          [le, de] = (0, a.useState)("hidden"),
          [ie, ge] = (0, a.useState)("hidden"),
          [me, ue] = (0, a.useState)("hidden"),
          [fe, be] = (0, a.useState)("hidden"),
          [he, xe] = (0, a.useState)(!1),
          [ke, _e] = (0, a.useState)("disabled"),
          pe = (0, i.useRockstarToken)(),
          [ve, Se] = (0, a.useState)(w),
          [je, we] = (0, a.useState)(0),
          [ye, Ce] = (0, a.useState)(0),
          [Ne, Te] = (0, a.useState)(0),
          [Ie, Ee] = (0, a.useState)(0),
          [Be, Me] = (0, a.useState)(0),
          [We, Oe] = (0, a.useState)(!1),
          [Re, $e] = (0, a.useState)(!1),
          He = (0, a.useRef)(null),
          Le = (0, a.useRef)(null),
          [Pe, Ae] = (0, a.useState)({}),
          [Fe, Ue] = (0, a.useState)(),
          [Ge, De] = (0, a.useState)(!1),
          [qe, Ve] = (0, a.useState)(!0),
          [ze, Ke] = (0, a.useState)(R.introScreen.image.sources.mobile || h),
          Qe = `${document.location.pathname}${document.location.search}#${M}`,
          Ye = e => {
            const t = (0, a.useRef)();
            return (0, a.useEffect)((() => {
              t.current = e
            })), t.current
          },
          Je = Ye(ce),
          Xe = Ye(P),
          Ze = () => {
            K.current && Ce(K?.current?.scrollHeight), Q.current && Te(Q?.current?.scrollHeight), Y.current && Ee(Y?.current?.scrollHeight), J.current && Me(J?.current?.scrollHeight)
          },
          et = (e, t) => {
            e === w && (Se(w), t && we(ye), ge("onScreen"), de("hidden"), be("hidden"), ue("hidden")), e === y && (Se(y), t && we(Ne), ge("offScreen"), de("visible"), setTimeout((() => {
              ge("hidden")
            }), 300), setTimeout((() => {
              de("onScreen")
            }), 100)), e === j && (Se(j), t && we(Ie), ge("offScreen"), be("visible"), setTimeout((() => {
              ge("hidden")
            }), 300), setTimeout((() => {
              be("onScreen")
            }), 100)), e === C && (Se(C), t && we(Be), ge("offScreen"), ue("visible"), setTimeout((() => {
              ge("hidden")
            }), 300), setTimeout((() => {
              ue("onScreen")
            }), 100))
          },
          tt = e => `https://${v}.rockstargames.com/tpa/${e}/link/?cid=${S}&lang=${U}&returnUrl=${encodeURIComponent(Qe)}&accessToken=${pe}`;
        return (0, a.useEffect)((() => {
          const e = () => {
              window.innerWidth > 2560 && "newswire" !== n ? Ke(R.introScreen.image.sources.mobile || h) : Ke(R.introScreen.image.sources.desktop || h)
            },
            t = () => {
              Ze(), window.innerWidth <= z && !re && (se(!0), et(ve, !0)), window.innerWidth > z && re && se(!1), e()
            };
          return se(window.innerWidth <= z), e(), window.addEventListener("resize", t), () => {
            window.removeEventListener("resize", t)
          }
        }), [ve, re, K, J, Y, Q]), (0, a.useEffect)((() => {
          ve === y && je !== Ne ? we(Ne) : ve === j && je !== Ie ? we(Ie) : ve === w && je !== ye ? we(ye) : ve === C && je !== Be && we(Be)
        }), [Ie, Ne, je, Be, ye]), (0, a.useEffect)((() => {
          Ze(), We && ve === y && we(Q?.current?.scrollHeight)
        }), [K, J, Y, Q]), (0, a.useEffect)((() => {
          const e = L?.characters?.gtao;
          ae(e || [])
        }), [L]), (0, a.useEffect)((() => {
          "boolean" != typeof Je && "boolean" != typeof Xe || ce && P && (async () => {
            const {
              result: e
            } = await (0, d.coreScApiFetch)("marketing/engagement/claim/exists", {
              pingBearer: A,
              query: {
                giftId: t
              }
            });
            te(e), oe(!1)
          })()
        }), [ce, P]), (0, a.useEffect)((() => {
          "boolean" == typeof P ? P ? oe(!0) : (oe(!1), ge("onScreen")) : oe(!0)
        }), [P]), (0, a.useEffect)((() => {
          ee ? (Oe(!0), et(y, !0)) : "boolean" != typeof ee || ee || et(w, !0)
        }), [ee]), (0, a.useEffect)((() => {
          V && !he && (D({
            element_placement: "WOC",
            event: "page_section_impression",
            event_action: "impression",
            event_category: "page_section",
            event_label: "WOC"
          }), xe(!0))
        }), [V]), (0, a.useEffect)((() => {
          "onScreen" === le && D({
            element_placement: "WOC",
            event: "alert_update",
            event_action: "update",
            event_category: "alert",
            event_label: "successful claim",
            o_id: t,
            text: "Almost there!"
          })
        }), [le]), (0, a.useEffect)((() => {
          "onScreen" === me && D({
            element_placement: "WOC",
            event: "alert_error",
            event_action: "error",
            event_category: "alert",
            event_label: "no linked accounts",
            o_id: t,
            text: "No Qualifying Character Found"
          })
        }), [me]), (0, a.useEffect)((() => {
          "onScreen" === fe && D({
            element_placement: "event_label",
            event: "alert_error",
            event_action: "error",
            event_category: "alert",
            event_label: "something went wrong",
            o_id: t,
            text: "Something went wrong on our end. Please try again in a few minutes."
          })
        }), [fe]), (0, a.useEffect)((() => {
          Z?.current && $e(Z.current.scrollWidth >= Z.current.offsetWidth)
        }), [Z]), (0, a.useEffect)((() => {
          Ue({
            nextEl: He.current,
            prevEl: Le.current
          })
        }), [Le, He]), (0, k.jsxs)(k.Fragment, {
          children: [!1, (0, k.jsxs)(o.motion.div, {
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
                height: 0 !== je && re ? `${je}px` : "auto"
              },
              children: ce ? (0, k.jsx)(m.LoadingAnimation, {
                type: "SPINNING"
              }) : (0, k.jsxs)(k.Fragment, {
                children: [(0, k.jsxs)("div", {
                  className: [x.contentContainer, x[ie], x.landingSlide].join(" "),
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
                            location: n,
                            utmCampaign: H.get("utm_campaign"),
                            utmContent: H.get("utm_content"),
                            utmMedium: H.get("utm_medium"),
                            utmSource: H.get("utm_source")
                          };
                          if ("disabled" === ke)
                            if (ne.length > 0) {
                              const {
                                status: t
                              } = await (0, d.coreScApiFetch)("marketing/engagement/claim/create", {
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
                  className: [x.contentContainer, x[le], x.successSlide].join(" "),
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
                        children: (0, k.jsxs)(s.wx, {
                          loop: !1,
                          grabCursor: Re,
                          slidesPerView: "auto",
                          speed: 700,
                          navigation: Fe,
                          modules: [c._2],
                          onInit: e => {
                            Ae(e)
                          },
                          children: [ne.map((e => (0, k.jsx)(s.Ky, {
                            children: (0, a.createElement)($, {
                              characterData: e,
                              key: e.mugshotUrl
                            })
                          }, e.mugshotUrl))), (0, k.jsx)(s.Ky, {
                            children: (0, k.jsx)(m.A, {
                              className: [x.linkMore, ne.length > 0 ? x.withIcon : ""].join(" "),
                              to: F,
                              onClick: () => {
                                D({
                                  element_placement: "WOC",
                                  event: "cta_link_account",
                                  event_action: "link_account",
                                  event_category: "cta",
                                  event_label: "WOC cta",
                                  link_url: F,
                                  text: f.engagement.engagement_link_account.defaultMessage
                                })
                              },
                              children: (0, k.jsx)("div", {
                                className: x.btnText,
                                children: (0, k.jsx)(u.FormattedMessage, {
                                  ...f.engagement.engagement_link_account
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
                        buttonText: G.formatMessage(f.engagement.engagement_link_console_account),
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
                  className: [x.contentContainer, x[fe], x.errorSlide, x.textContent].join(" "),
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
//# sourceMappingURL=fd26bba985b5af829741cb7c0863e4a5.js.map