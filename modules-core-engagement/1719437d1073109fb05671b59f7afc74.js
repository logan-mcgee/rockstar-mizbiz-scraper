"use strict";
(self.webpackChunk_rockstargames_modules_core_engagement = self.webpackChunk_rockstargames_modules_core_engagement || []).push([
  [831], {
    183: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => v
      });
      var n = a(927),
        s = a(837),
        r = a(476),
        c = a(681),
        o = a(809),
        l = a(929),
        i = a(859),
        m = a(711),
        g = a(976),
        d = a(89),
        u = a(204),
        f = a(705);
      a(657);
      var _ = a(111);
      const h = {
          interestTracker: "rockstargames-modules-core-engagementd23a3a0f83e735829f3c5268487f8955",
          loader: "rockstargames-modules-core-engagementbd9c7e0a1dfec0d970d286407b1004b9",
          moduleImage: "rockstargames-modules-core-engagementb56c277ae93c769eb031a4eceeee85ac",
          mobileImgContainer: "rockstargames-modules-core-engagementc3ed61ab4b0c543d39a674e05ea44820",
          moduleImageMobile: "rockstargames-modules-core-engagementb608d8f9bf2b6644f12b70f8b0677680",
          slideContainer: "rockstargames-modules-core-engagementbb5fdee3d37c47eec7a74145b91aee9a",
          contentContainer: "rockstargames-modules-core-engagementaaa78c009f748cb05a93854bfc725174",
          landingSlide: "rockstargames-modules-core-engagementa9f1ca0aaf94f7ed2e1a7e9742ea094c",
          errorSlide: "rockstargames-modules-core-engagementd409c6dc27c815019d4ca34068788dfd",
          successSlide: "rockstargames-modules-core-engagementcbdbde5f34364ca792c4a18b67bb4436",
          unlinkedSlide: "rockstargames-modules-core-engagementde1ae5043a52f5b9b7200204af900a09",
          textContent: "rockstargames-modules-core-engagementea40058cd873ae6c34be6d3426d80460",
          platformButtonContainer: "rockstargames-modules-core-engagementdfab46e2da843e2b59f6b890d01cf65a",
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
          swiperContainer: "rockstargames-modules-core-engagementec760c12bbf27f31e18ea3ca4456d515"
        },
        {
          host: x,
          login: b,
          authHost: k,
          clientId: p
        } = (0, l.getScConfigForOrigin)(),
        j = () => (0, f.jsx)(d.Z, {
          ..._.engagement.engagement_legal_text,
          values: {
            FaqLink: (0, f.jsx)(g.A, {
              className: h.faq,
              to: "https://support.rockstargames.com/articles/20625787714323",
              target: "_self",
              children: (0, f.jsx)(d.Z, {
                ..._.engagement.engagement_faq
              })
            })
          }
        }),
        v = e => {
          let {
            giftId: t = 1,
            location: a = "gtaplus_site"
          } = e;
          const [v] = (0, s.useSearchParams)(), {
            data: S,
            loggedIn: N
          } = (0, m.useRockstarUser)(), C = (0, i.useRockstarTokenPing)(), y = `https://${x}.rockstargames.com/settings/linkedaccounts`, w = (0, l.useLocale)(), T = (0, l.toScLocaleString)(w), I = (0, u.Z)(), {
            track: E
          } = (0, m.useGtmTrack)(), {
            ref: M,
            inView: $
          } = (0, o.YD)({
            threshold: .6
          }), Z = (0, n.createRef)(), A = (0, n.createRef)(), [q, L] = (0, n.useState)(), [R, B] = (0, n.useState)([]), [P, U] = (0, n.useState)(window.innerWidth), [F, G] = (0, n.useState)(), [H, z] = (0, n.useState)("hidden"), [O, V] = (0, n.useState)("hidden"), [W, D] = (0, n.useState)("hidden"), [Y, J] = (0, n.useState)("hidden"), [K, Q] = (0, n.useState)(!1), X = (0, i.useRockstarToken)(), ee = e => {
            const t = (0, n.useRef)();
            return (0, n.useEffect)((() => {
              t.current = e
            })), t.current
          }, te = ee(F), ae = ee(N);
          (0, n.useEffect)((() => (window.addEventListener("resize", (() => U(window.innerWidth))), () => {
            window.removeEventListener("resize", (() => U(window.innerWidth)))
          })), []), (0, n.useEffect)((() => {
            A.current && Z.current && (P < 1280 ? q ? A.current.style.height = "auto" : "visible" !== W && "visible" !== H || (A.current.style.height = Z.current.clientHeight > 0 && `${Z.current.clientHeight}px`) : A.current.style.height = "auto")
          }), [P, q, H, W]), (0, n.useEffect)((() => {
            const e = S?.characters?.gtao.filter((e => "ps5" === e.platform || "xboxsx" === e.platform));
            B(e || [])
          }), [S]), (0, n.useEffect)((() => {
            "boolean" != typeof te && "boolean" != typeof ae || F && N && (async () => {
              const {
                result: e
              } = await (0, l.coreScApiFetch)("marketing/engagement/claim/exists", {
                pingBearer: C,
                query: {
                  giftId: t
                }
              });
              L(e), G(!1)
            })()
          }), [F, N]), (0, n.useEffect)((() => {
            "boolean" == typeof N ? N ? G(!0) : (G(!1), V("onScreen")) : G(!0)
          }), [N]), (0, n.useEffect)((() => {
            q ? (V("hidden"), z("onScreen")) : "boolean" != typeof q || q || V("onScreen")
          }), [q]), (0, n.useEffect)((() => {
            $ && !K && (E({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "interest tracker",
              element_placement: "interest tracker"
            }), Q(!0))
          }), [$]), (0, n.useEffect)((() => {
            "onScreen" === H && E({
              event: "alert_update",
              event_action: "update",
              event_category: "alert",
              event_label: "successful claim",
              element_placement: "interest tracker",
              text: I.formatMessage(_.engagement.engagement_success_alert_title),
              o_id: t
            })
          }), [H]), (0, n.useEffect)((() => {
            "onScreen" === W && E({
              event: "alert_error",
              event_action: "error",
              event_category: "alert",
              event_label: "no linked accounts",
              element_placement: "interest tracker",
              text: I.formatMessage(_.engagement.engagement_error_alert_title),
              o_id: t
            })
          }), [W]), (0, n.useEffect)((() => {
            "onScreen" === Y && E({
              event: "alert_error",
              event_action: "error",
              event_category: "alert",
              event_label: "something went wrong",
              element_placement: "interest tracker",
              text: I.formatMessage(_.engagement.engagement_error_alert_failure),
              o_id: t
            })
          }), [Y]);
          const ne = e => {
              const t = `${document.location.pathname}${document.location.search}`;
              return `https://${k}.rockstargames.com/tpa/${e}/link/?cid=${p}&lang=${T}&returnUrl=${encodeURIComponent(t)}&accessToken=${X}`
            },
            se = [{
              key: "ps5",
              platform: "ps5",
              href: ne("np"),
              translated: !0
            }, {
              key: "xboxseriesxs",
              platform: "xboxseriesxs",
              href: ne("xbox"),
              translated: !0
            }];
          return (0, f.jsx)("div", {
            children: (0, f.jsxs)(c.E.div, {
              className: [h.interestTracker, F && h.loader].join(" "),
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
                ease: "easeIn",
                duration: .4
              },
              "data-context": "interestTracker",
              ref: M,
              children: [(0, f.jsx)("div", {
                className: h.moduleImage
              }), (0, f.jsx)("div", {
                className: [h.slideContainer, F ? h.loader : ""].join(" "),
                ref: A,
                children: F ? (0, f.jsx)(g.LoadingAnimation, {
                  type: "SPINNING"
                }) : (0, f.jsxs)(f.Fragment, {
                  children: [(0, f.jsxs)("div", {
                    className: [h.contentContainer, h[O], h.landingSlide].join(" "),
                    ref: Z,
                    children: [(0, f.jsx)("img", {
                      src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
                      className: h.moduleImageMobile,
                      alt: "placeholder"
                    }), (0, f.jsx)("div", {
                      className: h.textContent,
                      children: (0, f.jsxs)("div", {
                        className: h.alert,
                        children: [(0, f.jsx)("div", {
                          className: h.badge,
                          children: (0, f.jsx)(d.Z, {
                            ..._.engagement.engagement_badge_text
                          })
                        }), (0, f.jsxs)("div", {
                          className: h.alertText,
                          children: [(0, f.jsx)("h2", {
                            children: (0, f.jsx)(d.Z, {
                              ..._.engagement.engagement_title
                            })
                          }), (0, f.jsx)("p", {
                            children: (0, f.jsx)(d.Z, {
                              ..._.engagement.engagement_description
                            })
                          })]
                        })]
                      })
                    }), (0, f.jsxs)("div", {
                      className: h.bottomContent,
                      children: [(0, f.jsx)(g.Gen9Button, {
                        text: N ? I.formatMessage(_.engagement.engagement_claim) : I.formatMessage(_.engagement.engagement_login),
                        onClick: N ? async () => {
                          Z.current && A.current && P < 1280 ? A.current.style.height = `${Z.current.clientHeight}px` : A.current.style.height = "auto", E({
                            event: "cta_claim",
                            event_action: "claim",
                            event_category: "cta",
                            event_label: "claim",
                            element_placement: "interest tracker",
                            text: I.formatMessage(_.engagement.engagement_claim),
                            o_id: t
                          });
                          const e = {
                            giftId: t,
                            location: a,
                            utmSource: v.get("utm_source"),
                            utmMedium: v.get("utm_medium"),
                            utmCampaign: v.get("utm_campaign"),
                            utmContent: v.get("utm_content")
                          };
                          if (R.length > 0) {
                            const {
                              status: t
                            } = await (0, l.coreScApiFetch)("marketing/engagement/claim/create", {
                              fetchOptions: {
                                method: "POST"
                              },
                              pingBearer: C,
                              query: e
                            }) ?? [];
                            t ? (V("offScreen"), z("visible"), setTimeout((() => {
                              V("hidden")
                            }), 300), setTimeout((() => {
                              z("onScreen")
                            }), 100)) : (V("offScreen"), J("visible"), setTimeout((() => {
                              V("hidden")
                            }), 300), setTimeout((() => {
                              J("onScreen")
                            }), 100))
                          } else V("offScreen"), D("visible"), setTimeout((() => {
                            V("hidden")
                          }), 300), setTimeout((() => {
                            D("onScreen")
                          }), 100)
                        } : () => {
                          const e = `${document.location.pathname}${document.location.search}`,
                            t = `${b}?returnUrl=${encodeURIComponent(e)}&lang=${T}`;
                          window.location.href = t, E({
                            event: "cta_login",
                            event_action: "login",
                            event_category: "cta",
                            event_label: "sign in and claim",
                            element_placement: "interest tracker",
                            link_url: t,
                            text: I.formatMessage(_.engagement.engagement_login)
                          })
                        }
                      }), (0, f.jsx)("div", {
                        className: h.legal,
                        children: (0, f.jsx)(j, {})
                      })]
                    })]
                  }), (0, f.jsxs)("div", {
                    className: [h.contentContainer, h[H], h.successSlide].join(" "),
                    "data-type": "long",
                    children: [(0, f.jsxs)("div", {
                      className: h.alert,
                      children: [(0, f.jsx)("div", {
                        className: h.successAlert
                      }), (0, f.jsxs)("div", {
                        className: h.alertText,
                        children: [(0, f.jsx)("h3", {
                          children: (0, f.jsx)(d.Z, {
                            ..._.engagement.engagement_success_alert_title
                          })
                        }), (0, f.jsx)("p", {
                          children: (0, f.jsx)(d.Z, {
                            ..._.engagement.engagement_success_alert_body
                          })
                        })]
                      })]
                    }), (0, f.jsx)("div", {
                      className: h.swiperContainer,
                      children: (0, f.jsxs)(r.tq, {
                        loop: !1,
                        grabCursor: !0,
                        slidesPerView: "auto",
                        speed: 700,
                        children: [R.map((e => (0, f.jsx)(r.o5, {
                          children: (0, n.createElement)(m.CharacterCard, {
                            characterData: e,
                            key: e.mugshotUrl
                          })
                        }, e.mugshotUrl))), (0, f.jsx)(r.o5, {
                          children: (0, f.jsx)(g.A, {
                            className: [h.linkMore, R.length > 0 ? h.withIcon : ""].join(" "),
                            to: y,
                            onClick: () => {
                              E({
                                event: "cta_link_account",
                                event_action: "link_account",
                                event_category: "cta",
                                event_label: "interest tracker cta",
                                element_placement: "interest tracker",
                                text: I.formatMessage(_.engagement.engagement_link_account),
                                link_url: y
                              })
                            },
                            children: (0, f.jsx)("div", {
                              className: h.btnText,
                              children: (0, f.jsx)(d.Z, {
                                ..._.engagement.engagement_link_account
                              })
                            })
                          })
                        }, "linkMore")]
                      })
                    }), (0, f.jsx)("div", {
                      className: h.legal,
                      children: (0, f.jsx)(j, {})
                    })]
                  }), (0, f.jsxs)("div", {
                    className: [h.contentContainer, h[W], h.unlinkedSlide, h.textContent].join(" "),
                    children: [(0, f.jsxs)("div", {
                      className: h.textContent,
                      children: [(0, f.jsxs)("div", {
                        className: h.alert,
                        children: [(0, f.jsx)("div", {
                          className: h.errorAlert
                        }), (0, f.jsxs)("div", {
                          className: h.alertText,
                          children: [(0, f.jsx)("h3", {
                            children: (0, f.jsx)(d.Z, {
                              ..._.engagement.engagement_error_alert_title
                            })
                          }), (0, f.jsx)("p", {
                            children: (0, f.jsx)(d.Z, {
                              ..._.engagement.engagement_error_alert_body,
                              values: {
                                FaqLink: (0, f.jsx)(g.A, {
                                  className: h.faqLink,
                                  to: "https://support.rockstargames.com/articles/20625787714323",
                                  target: "_self",
                                  children: (0, f.jsx)(d.Z, {
                                    ..._.engagement.engagement_faqs
                                  })
                                })
                              }
                            })
                          })]
                        })]
                      }), (0, f.jsx)("div", {
                        className: h.platformButtonContainer,
                        children: (0, f.jsx)(g.ExpandingPlatformButton, {
                          buttonText: I.formatMessage(_.engagement.engagement_link_console_account),
                          platformsAndLinks: se,
                          trackingType: "link_account",
                          trackingParent: "interest tracker",
                          target: "_self"
                        })
                      })]
                    }), (0, f.jsx)("div", {
                      className: h.legal,
                      children: (0, f.jsx)(j, {})
                    })]
                  }), (0, f.jsxs)("div", {
                    className: [h.contentContainer, h[Y], h.errorSlide, h.textContent].join(" "),
                    children: [(0, f.jsxs)("div", {
                      className: h.alert,
                      children: [(0, f.jsx)("div", {
                        className: h.errorAlert
                      }), (0, f.jsx)("div", {
                        className: h.alertText,
                        children: (0, f.jsx)("h3", {
                          children: (0, f.jsx)(d.Z, {
                            ..._.engagement.engagement_error_alert_failure
                          })
                        })
                      })]
                    }), (0, f.jsx)(g.Gen9Button, {
                      text: I.formatMessage(_.engagement.engagement_cta_ok),
                      onClick: () => window.location.reload()
                    })]
                  })]
                })
              })]
            })
          })
        }
    }
  }
]);