"use strict";
(self.webpackChunk_rockstargames_modules_core_engagement = self.webpackChunk_rockstargames_modules_core_engagement || []).push([
  [469], {
    895: (e, t, n) => {
      n.r(t), n.d(t, {
        default: () => S
      });
      var a = n(289),
        c = n(512),
        r = n(409),
        s = n(406),
        i = n(750),
        l = n(929),
        o = n(859),
        d = n(711),
        g = n(976),
        m = n(217),
        _ = n(86),
        f = n(587),
        u = n(160);
      n(657);
      const x = (0, m.vU)({
          engagement_title: {
            id: "engagement_title"
          },
          engagement_description: {
            id: "engagement_description"
          },
          engagement_badge_text: {
            id: "engagement_badge_text"
          },
          engagement_legal_text: {
            id: "engagement_legal_text"
          },
          engagement_faq: {
            id: "engagement_faq"
          },
          engagement_faqs: {
            id: "engagement_faqs"
          },
          engagement_claim: {
            id: "engagement_claim"
          },
          engagement_login: {
            id: "engagement_login"
          },
          engagement_error_alert_title: {
            id: "engagement_error_alert"
          },
          engagement_error_alert_body: {
            id: "engagement_error_alert_body"
          },
          engagement_success_alert_title: {
            id: "engagement_success_alert_title"
          },
          engagement_success_alert_body: {
            id: "engagement_success_alert_body"
          },
          engagement_error_alert_failure: {
            id: "engagement_error_alert_failure"
          },
          engagement_link_account: {
            id: "engagement_link_account"
          },
          engagement_link_console_account: {
            id: "engagement_link_console_account"
          },
          engagement_cta_ok: {
            id: "engagement_cta_ok"
          }
        }),
        h = {
          interestTracker: "_474d039776cc7e64b455bc9c94e87f825544",
          loader: "_474d039776cc7e64be6a9d3f30f7c81d4cbe",
          moduleImage: "_474d039776cc7e64eb8fe33cd6aece8d0f7c",
          mobileImgContainer: "_474d039776cc7e64d8ca03e67f93cd373fb9",
          moduleImageMobile: "_474d039776cc7e64ca3c831b83c0ceea4f7a",
          slideContainer: "_474d039776cc7e64fb948f2d095cdabfc0a9",
          contentContainer: "_474d039776cc7e64d2d8fe92bcf881712908",
          landingSlide: "_474d039776cc7e64dc00b7e2ea24d42e6f63",
          errorSlide: "_474d039776cc7e64e91c1a4f2316f9b7c35a",
          successSlide: "_474d039776cc7e64b4ed8a1047fff0bedff5",
          unlinkedSlide: "_474d039776cc7e64a451fb368fc9006577c5",
          textContent: "_474d039776cc7e64bb96086a0d2b908c9bf2",
          platformButtonContainer: "_474d039776cc7e64bdb1b83b433a4155e6e5",
          bottomContent: "_474d039776cc7e64ab035d5edff97f3b4b74",
          legal: "_474d039776cc7e64f8971c6d80b2820cc9ed",
          faq: "_474d039776cc7e64ef9ec77279564ee712de",
          faqLink: "_474d039776cc7e64af6cfa7bdfbeb6ffb312",
          badge: "_474d039776cc7e64d49a4d51395807ee2ff1",
          hidden: "_474d039776cc7e64d75c3c71ac3826175b8e",
          visible: "_474d039776cc7e64a617c16b4455fd5cf6a7",
          onScreen: "_474d039776cc7e64dfad4fc5d6f094df9268",
          offScreen: "_474d039776cc7e64c6a0ea08015039d781a2",
          alert: "_474d039776cc7e64b46b46dc0fc6c041c1cf",
          alertText: "_474d039776cc7e64d1118b11958b9a043c89",
          errorAlert: "_474d039776cc7e64c1a82741e740d7fee218",
          successAlert: "_474d039776cc7e64d6b8c77ea94ff7c8f2d9",
          linkMore: "_474d039776cc7e64f6cd6da17f8e1351abaa",
          withIcon: "_474d039776cc7e64da9aeec80fe1108047d7",
          btnText: "_474d039776cc7e64e410fb0e29176ec2681b",
          swiperContainer: "_474d039776cc7e64fa91ba7c2427a8081114"
        },
        {
          host: b,
          login: p,
          authHost: v,
          clientId: j
        } = (0, l.getScConfigForOrigin)(),
        k = () => (0, u.jsx)(_.Z, {
          ...x.engagement_legal_text,
          values: {
            FaqLink: (0, u.jsx)(g.A, {
              className: h.faq,
              to: "https://support.rockstargames.com/articles/20625787714323",
              target: "_self",
              children: (0, u.jsx)(_.Z, {
                ...x.engagement_faq
              })
            })
          }
        }),
        S = e => {
          let {
            giftId: t = 1,
            location: n = "gtaplus_site"
          } = e;
          const [m] = (0, c.useSearchParams)(), {
            data: S,
            loggedIn: N
          } = (0, d.useRockstarUser)(), y = (0, o.useRockstarTokenPing)(), C = `https://${b}.rockstargames.com/settings/linkedaccounts`, w = (0, l.useLocale)(), T = (0, l.toScLocaleString)(w), I = (0, f.Z)(), {
            track: M
          } = (0, d.useGtmTrack)(), {
            ref: $,
            inView: q
          } = (0, i.YD)({
            threshold: .6
          }), E = (0, a.createRef)(), Z = (0, a.createRef)(), [A, L] = (0, a.useState)(), [U, B] = (0, a.useState)([]), [P, R] = (0, a.useState)(window.innerWidth), [F, G] = (0, a.useState)(!0), [H, z] = (0, a.useState)("hidden"), [O, V] = (0, a.useState)("hidden"), [W, D] = (0, a.useState)("hidden"), [Y, J] = (0, a.useState)("hidden"), [K, Q] = (0, a.useState)(!1), X = (0, o.useRockstarToken)();
          (0, a.useEffect)((() => (window.addEventListener("resize", (() => R(window.innerWidth))), () => {
            window.removeEventListener("resize", (() => R(window.innerWidth)))
          })), []), (0, a.useEffect)((() => {
            Z.current && E.current && (P < 1280 ? A ? Z.current.style.height = "auto" : "visible" !== W && "visible" !== H || (Z.current.style.height = E.current.clientHeight > 0 && `${E.current.clientHeight}px`) : Z.current.style.height = "auto")
          }), [P, A, H, W]), (0, a.useEffect)((() => {
            const e = S?.characters?.gtao.filter((e => "ps5" === e.platform || "xboxsx" === e.platform));
            B(e || [])
          }), [S]), (0, a.useEffect)((() => {
            if ("boolean" == typeof N && !N) return G(!1), void V("onScreen");
            N && (async () => {
              const {
                result: e
              } = await (0, l.coreScApiFetch)("marketing/engagement/claim/exists", {
                pingBearer: y,
                query: {
                  giftId: t
                }
              }) ?? [];
              L(e)
            })()
          }), [N]), (0, a.useEffect)((() => {
            A ? (V("hidden"), z("onScreen"), G(!1)) : "boolean" != typeof A || A || (V("onScreen"), G(!1))
          }), [A]), (0, a.useEffect)((() => {
            q && !K && (M({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: "interest tracker",
              element_placement: "interest tracker"
            }), Q(!0))
          }), [q]), (0, a.useEffect)((() => {
            "onScreen" === H && M({
              event: "alert_update",
              event_action: "update",
              event_category: "alert",
              event_label: "successful claim",
              element_placement: "interest tracker",
              text: I.formatMessage(x.engagement_success_alert_title),
              o_id: t
            })
          }), [H]), (0, a.useEffect)((() => {
            "onScreen" === W && M({
              event: "alert_error",
              event_action: "error",
              event_category: "alert",
              event_label: "no linked accounts",
              element_placement: "interest tracker",
              text: I.formatMessage(x.engagement_error_alert_title),
              o_id: t
            })
          }), [W]), (0, a.useEffect)((() => {
            "onScreen" === Y && M({
              event: "alert_error",
              event_action: "error",
              event_category: "alert",
              event_label: "something went wrong",
              element_placement: "interest tracker",
              text: I.formatMessage(x.engagement_error_alert_failure),
              o_id: t
            })
          }), [Y]);
          const ee = e => {
              const t = `${document.location.pathname}${document.location.search}`;
              return `https://${v}.rockstargames.com/tpa/${e}/link/?cid=${j}&lang=${T}&returnUrl=${encodeURIComponent(t)}&accessToken=${X}`
            },
            te = [{
              key: "ps5",
              platform: "ps5",
              href: ee("np"),
              translated: !0
            }, {
              key: "xboxseriesxs",
              platform: "xboxseriesxs",
              href: ee("xbox"),
              translated: !0
            }];
          return (0, u.jsx)("div", {
            children: (0, u.jsxs)(s.E.div, {
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
              ref: $,
              children: [(0, u.jsx)("div", {
                className: h.moduleImage
              }), (0, u.jsx)("div", {
                className: [h.slideContainer, F ? h.loader : ""].join(" "),
                ref: Z,
                children: F ? (0, u.jsx)(g.LoadingAnimation, {
                  type: "SPINNING"
                }) : (0, u.jsxs)(u.Fragment, {
                  children: [(0, u.jsxs)("div", {
                    className: [h.contentContainer, h[O], h.landingSlide].join(" "),
                    ref: E,
                    children: [(0, u.jsx)("img", {
                      src: "https://media-rockstargames-com.akamaized.net/mfe5/__common/img/75d644cad230b17cbcbc.jpg",
                      className: h.moduleImageMobile,
                      alt: "placeholder"
                    }), (0, u.jsx)("div", {
                      className: h.textContent,
                      children: (0, u.jsxs)("div", {
                        className: h.alert,
                        children: [(0, u.jsx)("div", {
                          className: h.badge,
                          children: (0, u.jsx)(_.Z, {
                            ...x.engagement_badge_text
                          })
                        }), (0, u.jsxs)("div", {
                          className: h.alertText,
                          children: [(0, u.jsx)("h2", {
                            children: (0, u.jsx)(_.Z, {
                              ...x.engagement_title
                            })
                          }), (0, u.jsx)("p", {
                            children: (0, u.jsx)(_.Z, {
                              ...x.engagement_description
                            })
                          })]
                        })]
                      })
                    }), (0, u.jsxs)("div", {
                      className: h.bottomContent,
                      children: [(0, u.jsx)(g.Gen9Button, {
                        text: N ? I.formatMessage(x.engagement_claim) : I.formatMessage(x.engagement_login),
                        onClick: N ? async () => {
                          E.current && Z.current && P < 1280 ? Z.current.style.height = `${E.current.clientHeight}px` : Z.current.style.height = "auto", M({
                            event: "cta_claim",
                            event_action: "claim",
                            event_category: "cta",
                            event_label: "claim",
                            element_placement: "interest tracker",
                            text: I.formatMessage(x.engagement_claim),
                            o_id: t
                          });
                          const e = {
                            giftId: t,
                            location: n,
                            utmSource: m.get("utm_source"),
                            utmMedium: m.get("utm_medium"),
                            utmCampaign: m.get("utm_campaign"),
                            utmContent: m.get("utm_content")
                          };
                          if (U.length > 0) {
                            const {
                              status: t
                            } = await (0, l.coreScApiFetch)("marketing/engagement/claim/create", {
                              fetchOptions: {
                                method: "POST"
                              },
                              pingBearer: y,
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
                            t = `${p}?returnUrl=${encodeURIComponent(e)}&lang=${T}`;
                          window.location.href = t, M({
                            event: "cta_login",
                            event_action: "login",
                            event_category: "cta",
                            event_label: "sign in and claim",
                            element_placement: "interest tracker",
                            link_url: t,
                            text: I.formatMessage(x.engagement_login)
                          })
                        }
                      }), (0, u.jsx)("div", {
                        className: h.legal,
                        children: (0, u.jsx)(k, {})
                      })]
                    })]
                  }), (0, u.jsxs)("div", {
                    className: [h.contentContainer, h[H], h.successSlide].join(" "),
                    "data-type": "long",
                    children: [(0, u.jsxs)("div", {
                      className: h.alert,
                      children: [(0, u.jsx)("div", {
                        className: h.successAlert
                      }), (0, u.jsxs)("div", {
                        className: h.alertText,
                        children: [(0, u.jsx)("h3", {
                          children: (0, u.jsx)(_.Z, {
                            ...x.engagement_success_alert_title
                          })
                        }), (0, u.jsx)("p", {
                          children: (0, u.jsx)(_.Z, {
                            ...x.engagement_success_alert_body
                          })
                        })]
                      })]
                    }), (0, u.jsx)("div", {
                      className: h.swiperContainer,
                      children: (0, u.jsxs)(r.tq, {
                        loop: !1,
                        grabCursor: !0,
                        slidesPerView: "auto",
                        speed: 700,
                        children: [U.map((e => (0, u.jsx)(r.o5, {
                          children: (0, a.createElement)(d.CharacterCard, {
                            characterData: e,
                            key: e.mugshotUrl
                          })
                        }, e.mugshotUrl))), (0, u.jsx)(r.o5, {
                          children: (0, u.jsx)(g.A, {
                            className: [h.linkMore, U.length > 0 ? h.withIcon : ""].join(" "),
                            to: C,
                            onClick: () => {
                              M({
                                event: "cta_link_account",
                                event_action: "link_account",
                                event_category: "cta",
                                event_label: "interest tracker cta",
                                element_placement: "interest tracker",
                                text: I.formatMessage(x.engagement_link_account),
                                link_url: C
                              })
                            },
                            children: (0, u.jsx)("div", {
                              className: h.btnText,
                              children: (0, u.jsx)(_.Z, {
                                ...x.engagement_link_account
                              })
                            })
                          })
                        }, "linkMore")]
                      })
                    }), (0, u.jsx)("div", {
                      className: h.legal,
                      children: (0, u.jsx)(k, {})
                    })]
                  }), (0, u.jsxs)("div", {
                    className: [h.contentContainer, h[W], h.unlinkedSlide, h.textContent].join(" "),
                    children: [(0, u.jsxs)("div", {
                      className: h.textContent,
                      children: [(0, u.jsxs)("div", {
                        className: h.alert,
                        children: [(0, u.jsx)("div", {
                          className: h.errorAlert
                        }), (0, u.jsxs)("div", {
                          className: h.alertText,
                          children: [(0, u.jsx)("h3", {
                            children: (0, u.jsx)(_.Z, {
                              ...x.engagement_error_alert_title
                            })
                          }), (0, u.jsx)("p", {
                            children: (0, u.jsx)(_.Z, {
                              ...x.engagement_error_alert_body,
                              values: {
                                FaqLink: (0, u.jsx)(g.A, {
                                  className: h.faqLink,
                                  to: "https://support.rockstargames.com/articles/20625787714323",
                                  target: "_self",
                                  children: (0, u.jsx)(_.Z, {
                                    ...x.engagement_faqs
                                  })
                                })
                              }
                            })
                          })]
                        })]
                      }), (0, u.jsx)("div", {
                        className: h.platformButtonContainer,
                        children: (0, u.jsx)(g.ExpandingPlatformButton, {
                          buttonText: I.formatMessage(x.engagement_link_console_account),
                          platformsAndLinks: te,
                          trackingType: "link_account",
                          trackingParent: "interest tracker",
                          target: "_self"
                        })
                      })]
                    }), (0, u.jsx)("div", {
                      className: h.legal,
                      children: (0, u.jsx)(k, {})
                    })]
                  }), (0, u.jsxs)("div", {
                    className: [h.contentContainer, h[Y], h.errorSlide, h.textContent].join(" "),
                    children: [(0, u.jsxs)("div", {
                      className: h.alert,
                      children: [(0, u.jsx)("div", {
                        className: h.errorAlert
                      }), (0, u.jsx)("div", {
                        className: h.alertText,
                        children: (0, u.jsx)("h3", {
                          children: (0, u.jsx)(_.Z, {
                            ...x.engagement_error_alert_failure
                          })
                        })
                      })]
                    }), (0, u.jsx)(g.Gen9Button, {
                      text: I.formatMessage(x.engagement_cta_ok),
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
//# sourceMappingURL=42c57fcc8e14b1af0b2c.js.map