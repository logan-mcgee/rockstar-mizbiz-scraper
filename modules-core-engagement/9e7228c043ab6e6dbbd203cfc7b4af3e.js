! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d8547e79-ac75-4afe-9248-e4f7642ead55", e._sentryDebugIdIdentifier = "sentry-dbid-d8547e79-ac75-4afe-9248-e4f7642ead55")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "55a9ca587741545089a7fe4bb45bb58fb164842b",
  packageName: "@rockstargames/modules-core-engagement",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "55a9ca587741545089a7fe4bb45bb58fb164842b"
}, (self.webpackChunk_rockstargames_modules_core_engagement = self.webpackChunk_rockstargames_modules_core_engagement || []).push([
  [312], {
    5848: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => T
      });
      var n = a(8200),
        s = a(4936),
        r = a(8111),
        c = a(8548),
        o = a(7272),
        l = a(2032),
        d = a(5792),
        i = a(3052),
        g = a(2836),
        m = a(1668),
        u = a(696),
        f = a(5120),
        b = a(1740);
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
      var k = a(3480);
      const {
        host: _,
        login: p,
        authHost: v,
        clientId: S
      } = (0, d.getScConfigForOrigin)(), j = "error", y = "landing", w = "success", C = "unlinked", N = e => {
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
          legalText: R
        } = e;
        const W = (0, d.useLocale)(),
          $ = {
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
            legalText: R,
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
          } = m.ProfileSwitcher,
          [L] = (0, s.useSearchParams)(),
          {
            data: O,
            loggedIn: P
          } = (0, g.useRockstarUser)(),
          A = (0, i.useRockstarTokenPing)(),
          F = `https://${_}.rockstargames.com/settings/linkedaccounts`,
          U = (0, d.toScLocaleString)(W),
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
          K = (0, n.createRef)(),
          Q = (0, n.createRef)(),
          Y = (0, n.createRef)(),
          J = (0, n.createRef)(),
          X = (0, n.createRef)(),
          Z = (0, n.createRef)(),
          [ee, te] = (0, n.useState)(),
          [ae, ne] = (0, n.useState)([]),
          [se, re] = (0, n.useState)(!1),
          [ce, oe] = (0, n.useState)(),
          [le, de] = (0, n.useState)("hidden"),
          [ie, ge] = (0, n.useState)("hidden"),
          [me, ue] = (0, n.useState)("hidden"),
          [fe, be] = (0, n.useState)("hidden"),
          [he, xe] = (0, n.useState)(!1),
          [ke, _e] = (0, n.useState)("disabled"),
          pe = (0, i.useRockstarToken)(),
          [ve, Se] = (0, n.useState)(y),
          [je, ye] = (0, n.useState)(0),
          [we, Ce] = (0, n.useState)(0),
          [Ne, Te] = (0, n.useState)(0),
          [Ie, Ee] = (0, n.useState)(0),
          [Be, Me] = (0, n.useState)(0),
          [Re, We] = (0, n.useState)(!1),
          [$e, He] = (0, n.useState)(!1),
          Le = (0, n.useRef)(null),
          Oe = (0, n.useRef)(null),
          [Pe, Ae] = (0, n.useState)({}),
          [Fe, Ue] = (0, n.useState)(),
          [Ge, De] = (0, n.useState)(!1),
          [qe, Ve] = (0, n.useState)(!0),
          ze = `${document.location.pathname}${document.location.search}#${M}`,
          Ke = e => {
            const t = (0, n.useRef)();
            return (0, n.useEffect)((() => {
              t.current = e
            })), t.current
          },
          Qe = Ke(ce),
          Ye = Ke(P),
          Je = () => {
            K.current && Ce(K?.current?.scrollHeight), Q.current && Te(Q?.current?.scrollHeight), Y.current && Ee(Y?.current?.scrollHeight), J.current && Me(J?.current?.scrollHeight)
          },
          Xe = (e, t) => {
            e === y && (Se(y), t && ye(we), ge("onScreen"), de("hidden"), be("hidden"), ue("hidden")), e === w && (Se(w), t && ye(Ne), ge("offScreen"), de("visible"), setTimeout((() => {
              ge("hidden")
            }), 300), setTimeout((() => {
              de("onScreen")
            }), 100)), e === j && (Se(j), t && ye(Ie), ge("offScreen"), be("visible"), setTimeout((() => {
              ge("hidden")
            }), 300), setTimeout((() => {
              be("onScreen")
            }), 100)), e === C && (Se(C), t && ye(Be), ge("offScreen"), ue("visible"), setTimeout((() => {
              ge("hidden")
            }), 300), setTimeout((() => {
              ue("onScreen")
            }), 100))
          },
          Ze = e => `https://${v}.rockstargames.com/tpa/${e}/link/?cid=${S}&lang=${U}&returnUrl=${encodeURIComponent(ze)}&accessToken=${pe}`;
        return (0, n.useEffect)((() => {
          const e = () => {
            Je(), window.innerWidth <= z && !se && (re(!0), Xe(ve, !0)), window.innerWidth > z && se && re(!1)
          };
          return re(window.innerWidth <= z), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }), [ve, se, K, J, Y, Q]), (0, n.useEffect)((() => {
          ve === w && je !== Ne ? ye(Ne) : ve === j && je !== Ie ? ye(Ie) : ve === y && je !== we ? ye(we) : ve === C && je !== Be && ye(Be)
        }), [Ie, Ne, je, Be, we]), (0, n.useEffect)((() => {
          Je(), Re && ve === w && ye(Q?.current?.scrollHeight)
        }), [K, J, Y, Q]), (0, n.useEffect)((() => {
          const e = O?.characters?.gtao;
          ne(e || [])
        }), [O]), (0, n.useEffect)((() => {
          "boolean" != typeof Qe && "boolean" != typeof Ye || ce && P && (async () => {
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
        }), [ce, P]), (0, n.useEffect)((() => {
          "boolean" == typeof P ? P ? oe(!0) : (oe(!1), ge("onScreen")) : oe(!0)
        }), [P]), (0, n.useEffect)((() => {
          ee ? (We(!0), Xe(w, !0)) : "boolean" != typeof ee || ee || Xe(y, !0)
        }), [ee]), (0, n.useEffect)((() => {
          V && !he && (D({
            element_placement: "WOC",
            event: "page_section_impression",
            event_action: "impression",
            event_category: "page_section",
            event_label: "WOC"
          }), xe(!0))
        }), [V]), (0, n.useEffect)((() => {
          "onScreen" === le && D({
            element_placement: "WOC",
            event: "alert_update",
            event_action: "update",
            event_category: "alert",
            event_label: "successful claim",
            o_id: t,
            text: "Almost there!"
          })
        }), [le]), (0, n.useEffect)((() => {
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
          "onScreen" === fe && D({
            element_placement: "event_label",
            event: "alert_error",
            event_action: "error",
            event_category: "alert",
            event_label: "something went wrong",
            o_id: t,
            text: "Something went wrong on our end. Please try again in a few minutes."
          })
        }), [fe]), (0, n.useEffect)((() => {
          Z?.current && He(Z.current.scrollWidth >= Z.current.offsetWidth)
        }), [Z]), (0, n.useEffect)((() => {
          Ue({
            nextEl: Le.current,
            prevEl: Oe.current
          })
        }), [Oe, Le]), (0, k.jsxs)(k.Fragment, {
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
                "--engagement-image": `url(${$.introScreen.image.sources.desktop||h})`
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
                  className: [x.contentContainer, x[ie], x.landingSlide].join(" "),
                  ref: K,
                  children: [(0, k.jsx)("img", {
                    src: $.introScreen.image.sources.mobile || h,
                    className: x.moduleImageMobile,
                    alt: $.introScreen.image.alt
                  }), (0, k.jsxs)("div", {
                    className: x.topContent,
                    children: [(0, k.jsx)("div", {
                      className: x.textContent,
                      children: (0, k.jsxs)("div", {
                        className: x.alert,
                        children: [(0, k.jsx)("div", {
                          className: x.badge,
                          children: $.introScreen.tag
                        }), (0, k.jsxs)("div", {
                          className: x.alertText,
                          children: [(0, k.jsx)("h2", {
                            children: $.introScreen.headline
                          }), (0, k.jsx)("div", {
                            dangerouslySetInnerHTML: {
                              __html: $.introScreen.body
                            }
                          })]
                        })]
                      })
                    }), (0, k.jsx)("div", {
                      className: x.btnContainer,
                      children: (0, k.jsx)(m.Gen9Button, {
                        text: P ? $.introScreen.btnText.loggedIn : $.introScreen.btnText.loggedOut,
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
                            utmCampaign: L.get("utm_campaign"),
                            utmContent: L.get("utm_content"),
                            utmMedium: L.get("utm_medium"),
                            utmSource: L.get("utm_source")
                          };
                          if ("disabled" === ke)
                            if (ae.length > 0) {
                              const {
                                status: t
                              } = await (0, d.coreScApiFetch)("marketing/engagement/claim/create", {
                                fetchOptions: {
                                  method: "POST"
                                },
                                pingBearer: A,
                                query: e
                              }) ?? [];
                              Xe(t ? w : j, !1)
                            } else Xe(C, !1);
                          else "success" === ke ? Xe(w, !1) : "error" === ke ? Xe(j, !1) : "unlinked" === ke && Xe(C, !1)
                        } : () => {
                          const e = `${p}?returnUrl=${encodeURIComponent(ze)}&lang=${U}`;
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
                        legalText: $.legalText
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
                          children: $.successScreen.headline
                        }), (0, k.jsx)("div", {
                          dangerouslySetInnerHTML: {
                            __html: $.successScreen.body
                          }
                        })]
                      })]
                    }), (0, k.jsxs)("div", {
                      className: x.swiperWrap,
                      children: [(0, k.jsx)("div", {
                        className: x.swiperContainer,
                        ref: Z,
                        "data-hasoverflow": $e,
                        children: (0, k.jsxs)(r.wx, {
                          loop: !1,
                          grabCursor: $e,
                          slidesPerView: "auto",
                          speed: 700,
                          navigation: Fe,
                          modules: [c._2],
                          onInit: e => {
                            Ae(e)
                          },
                          children: [ae.map((e => (0, k.jsx)(r.Ky, {
                            children: (0, n.createElement)(H, {
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
                        ref: Oe,
                        onClick: () => {
                          Pe?.slidePrev(), De(Pe?.isEnd), Ve(Pe?.isBeginning)
                        },
                        disabled: qe,
                        "data-hidden": !$e
                      }), (0, k.jsx)("button", {
                        className: x.swiperBtnNext,
                        "aria-label": "Next Character",
                        type: "button",
                        ref: Le,
                        onClick: () => {
                          Pe?.slideNext(), De(Pe?.isEnd), Ve(Pe?.isBeginning)
                        },
                        disabled: Ge,
                        "data-hidden": !$e
                      })]
                    })]
                  }), (0, k.jsx)("div", {
                    className: x.legal,
                    children: (0, k.jsx)(N, {
                      legalText: $.legalText
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
                        children: $.unlinkedScreen.headline
                      }), (0, k.jsx)(m.ExpandingPlatformButton, {
                        buttonText: G.formatMessage(f.engagement.engagement_link_console_account),
                        platformsAndLinks: [{
                          href: Ze("np"),
                          key: "ps",
                          platform: "ps",
                          translated: !0
                        }, {
                          href: Ze("xbox"),
                          key: "xbox",
                          platform: "xbox",
                          translated: !0
                        }],
                        trackingType: "link_account",
                        trackingParent: "WOC",
                        target: "_self",
                        children: (0, k.jsx)("div", {
                          className: x.alert,
                          children: (0, k.jsx)("div", {
                            className: x.alertText,
                            children: (0, k.jsx)("div", {
                              dangerouslySetInnerHTML: {
                                __html: $.unlinkedScreen.body
                              }
                            })
                          })
                        })
                      })]
                    })
                  }), (0, k.jsx)("div", {
                    className: x.legal,
                    children: (0, k.jsx)(N, {
                      legalText: $.legalText
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
                          children: $.errorScreen.headline
                        })
                      })]
                    }), (0, k.jsx)(m.Gen9Button, {
                      text: $.errorScreen.btnText,
                      onClick: () => window.location.reload()
                    })]
                  }), (0, k.jsx)("div", {
                    className: x.legal,
                    children: (0, k.jsx)(N, {
                      legalText: $.legalText
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
//# sourceMappingURL=9e7228c043ab6e6dbbd203cfc7b4af3e.js.map