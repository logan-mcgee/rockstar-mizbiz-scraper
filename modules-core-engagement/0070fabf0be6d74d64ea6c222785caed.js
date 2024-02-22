! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c8a8e44e-dbfc-4baf-8742-5f033d916702", e._sentryDebugIdIdentifier = "sentry-dbid-c8a8e44e-dbfc-4baf-8742-5f033d916702")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/modules-core-engagement",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
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
        d = n(2032),
        l = n(5792),
        i = n(3052),
        m = n(2836),
        g = n(1668),
        u = n(1512),
        f = n(5120);
      const b = {
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
        swiperContainer: "rockstargames-modules-core-engagementec760c12bbf27f31e18ea3ca4456d515",
        swiperButton: "rockstargames-modules-core-engagemente113a90414977ad6f45f8439d545db79",
        swiperBtnPrev: "rockstargames-modules-core-engagemente3acf926305975eb8509a121f6df88ea",
        swiperBtnNext: "rockstargames-modules-core-engagementa9e6b086c2fd2ec99a839f6a6805ed3d"
      };
      var h = n(3480);
      const {
        host: k,
        login: x,
        authHost: _,
        clientId: p
      } = (0, l.getScConfigForOrigin)(), v = "landing", S = "success", j = "error", y = "unlinked", w = e => {
        let {
          legalText: t
        } = e;
        return (0, h.jsx)("div", {
          dangerouslySetInnerHTML: {
            __html: t
          }
        })
      }, T = e => {
        let {
          giftId: t = 1,
          location: n = "gtaplus_site",
          introScreen: T,
          errorScreen: N,
          unlinkedScreen: C,
          successScreen: I,
          jumpLinkId: E,
          legalText: B
        } = e;
        const M = {
            introScreen: {
              tag: T?._memoq.tag || "",
              headline: T?._memoq?.introHeadline || "",
              body: T?.introContent || "",
              btnText: {
                loggedIn: T?._memoq?.btnTextLoggedIn || "",
                loggedOut: T?._memoq?.btnTextLoggedOut || ""
              }
            },
            successScreen: {
              headline: I?._memoq?.successHeadline || "",
              body: I?.successContent || ""
            },
            errorScreen: {
              headline: N?._memoq?.errorHeadline || "",
              btnText: N?._memoq?.errorButton || ""
            },
            unlinkedScreen: {
              body: C?.unlinkedContent || "",
              headline: C?.unlinkedHeadline || "",
              btnText: C?.unlinkedButtonText || ""
            },
            legalText: B
          },
          {
            CharacterCard: R
          } = g.ProfileSwitcher,
          [L] = (0, r.useSearchParams)(),
          {
            data: $,
            loggedIn: H
          } = (0, m.useRockstarUser)(),
          P = (0, i.useRockstarTokenPing)(),
          q = `https://${k}.rockstargames.com/settings/linkedaccounts`,
          A = (0, l.useLocale)(),
          O = (0, l.toScLocaleString)(A),
          U = (0, u.useIntl)(),
          {
            track: F
          } = (0, m.useGtmTrack)(),
          {
            ref: D,
            inView: W
          } = (0, d.useInView)({
            threshold: .6
          }),
          G = 1280,
          V = (0, a.createRef)(),
          z = (0, a.createRef)(),
          K = (0, a.createRef)(),
          Y = (0, a.createRef)(),
          J = (0, a.createRef)(),
          Q = (0, a.createRef)(),
          [X, Z] = (0, a.useState)(),
          [ee, te] = (0, a.useState)([]),
          [ne, ae] = (0, a.useState)(!1),
          [re, se] = (0, a.useState)(),
          [ce, oe] = (0, a.useState)("hidden"),
          [de, le] = (0, a.useState)("hidden"),
          [ie, me] = (0, a.useState)("hidden"),
          [ge, ue] = (0, a.useState)("hidden"),
          [fe, be] = (0, a.useState)(!1),
          [he, ke] = (0, a.useState)("disabled"),
          xe = (0, i.useRockstarToken)(),
          [_e, pe] = (0, a.useState)(v),
          [ve, Se] = (0, a.useState)(0),
          [je, ye] = (0, a.useState)(0),
          [we, Te] = (0, a.useState)(0),
          [Ne, Ce] = (0, a.useState)(0),
          [Ie, Ee] = (0, a.useState)(0),
          [Be, Me] = (0, a.useState)(!1),
          [Re, Le] = (0, a.useState)(!1),
          $e = (0, a.useRef)(null),
          He = (0, a.useRef)(null),
          [Pe, qe] = (0, a.useState)({}),
          [Ae, Oe] = (0, a.useState)(),
          [Ue, Fe] = (0, a.useState)(!1),
          [De, We] = (0, a.useState)(!0),
          Ge = `${document.location.pathname}${document.location.search}#${E}`,
          Ve = e => {
            const t = (0, a.useRef)();
            return (0, a.useEffect)((() => {
              t.current = e
            })), t.current
          },
          ze = Ve(re),
          Ke = Ve(H),
          Ye = () => {
            V.current && ye(V?.current?.scrollHeight), z.current && Te(z?.current?.scrollHeight), K.current && Ce(K?.current?.scrollHeight), Y.current && Ee(Y?.current?.scrollHeight)
          },
          Je = (e, t) => {
            e === v && (pe(v), t && Se(je), le("onScreen"), oe("hidden"), ue("hidden"), me("hidden")), e === S && (pe(S), t && Se(we), le("offScreen"), oe("visible"), setTimeout((() => {
              le("hidden")
            }), 300), setTimeout((() => {
              oe("onScreen")
            }), 100)), e === j && (pe(j), t && Se(Ne), le("offScreen"), ue("visible"), setTimeout((() => {
              le("hidden")
            }), 300), setTimeout((() => {
              ue("onScreen")
            }), 100)), e === y && (pe(y), t && Se(Ie), le("offScreen"), me("visible"), setTimeout((() => {
              le("hidden")
            }), 300), setTimeout((() => {
              me("onScreen")
            }), 100))
          },
          Qe = e => `https://${_}.rockstargames.com/tpa/${e}/link/?cid=${p}&lang=${O}&returnUrl=${encodeURIComponent(Ge)}&accessToken=${xe}`;
        return (0, a.useEffect)((() => {
          const e = () => {
            Ye(), window.innerWidth <= G && !ne && (ae(!0), Je(_e, !0)), window.innerWidth > G && ne && ae(!1)
          };
          return ae(window.innerWidth <= G), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }), [_e, ne, V, Y, K, z]), (0, a.useEffect)((() => {
          _e === S && ve !== we ? Se(we) : _e === j && ve !== Ne ? Se(Ne) : _e === v && ve !== je ? Se(je) : _e === y && ve !== Ie && Se(Ie)
        }), [Ne, we, ve, Ie, je]), (0, a.useEffect)((() => {
          Ye(), Be && _e === S && Se(z?.current?.scrollHeight)
        }), [V, Y, K, z]), (0, a.useEffect)((() => {
          const e = $?.characters?.gtao.filter((e => "ps5" === e.platform || "xboxsx" === e.platform));
          te(e || [])
        }), [$]), (0, a.useEffect)((() => {
          "boolean" != typeof ze && "boolean" != typeof Ke || re && H && (async () => {
            const {
              result: e
            } = await (0, l.coreScApiFetch)("marketing/engagement/claim/exists", {
              pingBearer: P,
              query: {
                giftId: t
              }
            });
            Z(e), se(!1)
          })()
        }), [re, H]), (0, a.useEffect)((() => {
          "boolean" == typeof H ? H ? se(!0) : (se(!1), le("onScreen")) : se(!0)
        }), [H]), (0, a.useEffect)((() => {
          X ? (Me(!0), Je(S, !0)) : "boolean" != typeof X || X || Je(v, !0)
        }), [X]), (0, a.useEffect)((() => {
          W && !fe && (F({
            event: "page_section_impression",
            event_action: "impression",
            event_category: "page_section",
            event_label: "interest tracker",
            element_placement: "interest tracker"
          }), be(!0))
        }), [W]), (0, a.useEffect)((() => {
          "onScreen" === ce && F({
            event: "alert_update",
            event_action: "update",
            event_category: "alert",
            event_label: "successful claim",
            element_placement: "interest tracker",
            text: M.successScreen.headline,
            o_id: t
          })
        }), [ce]), (0, a.useEffect)((() => {
          "onScreen" === ie && F({
            event: "alert_error",
            event_action: "error",
            event_category: "alert",
            event_label: "no linked accounts",
            element_placement: "interest tracker",
            text: M.unlinkedScreen.headline,
            o_id: t
          })
        }), [ie]), (0, a.useEffect)((() => {
          "onScreen" === ge && F({
            event: "alert_error",
            event_action: "error",
            event_category: "alert",
            event_label: "something went wrong",
            element_placement: "interest tracker",
            text: M.errorScreen.headline,
            o_id: t
          })
        }), [ge]), (0, a.useEffect)((() => {
          Q?.current && Le(Q.current.scrollWidth >= Q.current.offsetWidth)
        }), [Q]), (0, a.useEffect)((() => {
          Oe({
            nextEl: $e.current,
            prevEl: He.current
          })
        }), [He, $e]), (0, h.jsxs)(h.Fragment, {
          children: [!1, (0, h.jsxs)(o.motion.div, {
            className: [b.interestTracker, re && b.loader].join(" "),
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
            ref: D,
            id: E || "",
            children: [(0, h.jsx)("div", {
              className: b.moduleImage
            }), (0, h.jsx)("div", {
              className: [b.slideContainer, re ? b.loader : ""].join(" "),
              ref: J,
              "data-dev-mode": "disabled",
              style: {
                height: 0 === ve ? "auto" : `${ve}px`,
                "--engagement-height": 0 === ve ? "200%" : `${ve}px`
              },
              children: re ? (0, h.jsx)(g.LoadingAnimation, {
                type: "SPINNING"
              }) : (0, h.jsxs)(h.Fragment, {
                children: [(0, h.jsxs)("div", {
                  className: [b.contentContainer, b[de], b.landingSlide].join(" "),
                  ref: V,
                  children: [(0, h.jsx)("img", {
                    src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
                    className: b.moduleImageMobile,
                    alt: "placeholder"
                  }), (0, h.jsx)("div", {
                    className: b.textContent,
                    children: (0, h.jsxs)("div", {
                      className: b.alert,
                      children: [(0, h.jsx)("div", {
                        className: b.badge,
                        children: M.introScreen.tag
                      }), (0, h.jsxs)("div", {
                        className: b.alertText,
                        children: [(0, h.jsx)("h2", {
                          children: M.introScreen.tag
                        }), (0, h.jsx)("div", {
                          dangerouslySetInnerHTML: {
                            __html: M.introScreen.body
                          }
                        })]
                      })]
                    })
                  }), (0, h.jsxs)("div", {
                    className: b.bottomContent,
                    children: [(0, h.jsx)(g.Gen9Button, {
                      text: H ? M.introScreen.btnText.loggedIn : M.introScreen.btnText.loggedOut,
                      onClick: H ? async () => {
                        F({
                          event: "cta_claim",
                          event_action: "claim",
                          event_category: "cta",
                          event_label: "claim",
                          element_placement: "interest tracker",
                          text: M.introScreen.btnText.loggedIn,
                          o_id: t
                        });
                        const e = {
                          giftId: t,
                          location: n,
                          utmSource: L.get("utm_source"),
                          utmMedium: L.get("utm_medium"),
                          utmCampaign: L.get("utm_campaign"),
                          utmContent: L.get("utm_content")
                        };
                        if ("disabled" === he)
                          if (ee.length > 0) {
                            const {
                              status: t
                            } = await (0, l.coreScApiFetch)("marketing/engagement/claim/create", {
                              fetchOptions: {
                                method: "POST"
                              },
                              pingBearer: P,
                              query: e
                            }) ?? [];
                            Je(t ? S : j, !1)
                          } else Je(y, !1);
                        else "success" === he ? Je(S, !1) : "error" === he ? Je(j, !1) : "unlinked" === he && Je(y, !1)
                      } : () => {
                        const e = `${x}?returnUrl=${encodeURIComponent(Ge)}&lang=${O}`;
                        F({
                          event: "cta_login",
                          event_action: "login",
                          event_category: "cta",
                          event_label: "sign in and claim",
                          element_placement: "interest tracker",
                          link_url: e,
                          text: M.introScreen.btnText.loggedOut
                        }), window.location.href = e
                      }
                    }), (0, h.jsx)("div", {
                      className: b.legal,
                      children: (0, h.jsx)(w, {
                        legalText: M.legalText
                      })
                    })]
                  })]
                }), (0, h.jsxs)("div", {
                  className: [b.contentContainer, b[ce], b.successSlide].join(" "),
                  "data-type": "long",
                  ref: z,
                  children: [(0, h.jsxs)("div", {
                    className: b.alert,
                    children: [(0, h.jsx)("div", {
                      className: b.successAlert
                    }), (0, h.jsxs)("div", {
                      className: b.alertText,
                      children: [(0, h.jsx)("h3", {
                        children: M.successScreen.headline
                      }), (0, h.jsx)("div", {
                        dangerouslySetInnerHTML: {
                          __html: M.successScreen.body
                        }
                      })]
                    })]
                  }), (0, h.jsxs)("div", {
                    className: b.swiperContainer,
                    ref: Q,
                    "data-hasoverflow": Re,
                    children: [(0, h.jsxs)(s.wx, {
                      loop: !1,
                      grabCursor: Re,
                      slidesPerView: "auto",
                      speed: 700,
                      navigation: Ae,
                      modules: [c._2],
                      onInit: e => {
                        qe(e)
                      },
                      children: [ee.map((e => (0, h.jsx)(s.Ky, {
                        children: (0, a.createElement)(R, {
                          characterData: e,
                          key: e.mugshotUrl
                        })
                      }, e.mugshotUrl))), (0, h.jsx)(s.Ky, {
                        children: (0, h.jsx)(g.A, {
                          className: [b.linkMore, ee.length > 0 ? b.withIcon : ""].join(" "),
                          to: q,
                          onClick: () => {
                            F({
                              event: "cta_link_account",
                              event_action: "link_account",
                              event_category: "cta",
                              event_label: "interest tracker cta",
                              element_placement: "interest tracker",
                              text: U.formatMessage(f.engagement.engagement_link_account),
                              link_url: q
                            })
                          },
                          children: (0, h.jsx)("div", {
                            className: b.btnText,
                            children: (0, h.jsx)(u.FormattedMessage, {
                              ...f.engagement.engagement_link_account
                            })
                          })
                        })
                      }, "linkMore")]
                    }), (0, h.jsx)("button", {
                      className: b.swiperBtnPrev,
                      "aria-label": "Previous Character",
                      type: "button",
                      ref: He,
                      onClick: () => {
                        Pe?.slidePrev(), Fe(Pe?.isEnd), We(Pe?.isBeginning)
                      },
                      disabled: De
                    }), (0, h.jsx)("button", {
                      className: b.swiperBtnNext,
                      "aria-label": "Next Character",
                      type: "button",
                      ref: $e,
                      onClick: () => {
                        Pe?.slideNext(), Fe(Pe?.isEnd), We(Pe?.isBeginning)
                      },
                      disabled: Ue
                    })]
                  }), (0, h.jsx)("div", {
                    className: b.legal,
                    children: (0, h.jsx)(w, {
                      legalText: M?.legalText || ""
                    })
                  })]
                }), (0, h.jsxs)("div", {
                  className: [b.contentContainer, b[ie], b.unlinkedSlide, b.textContent].join(" "),
                  ref: Y,
                  children: [(0, h.jsx)("div", {
                    className: b.textContent,
                    children: (0, h.jsxs)("div", {
                      className: b.platformButtonContainer,
                      children: [(0, h.jsx)("div", {
                        className: b.errorAlert
                      }), (0, h.jsx)("h3", {
                        children: M.unlinkedScreen.headline
                      }), (0, h.jsx)(g.ExpandingPlatformButton, {
                        buttonText: U.formatMessage(f.engagement.engagement_link_console_account),
                        platformsAndLinks: [{
                          key: "ps4",
                          platform: "ps4",
                          href: Qe("np"),
                          translated: !0
                        }, {
                          key: "xbox",
                          platform: "xbox",
                          href: Qe("xbox"),
                          translated: !0
                        }],
                        trackingType: "link_account",
                        trackingParent: "interest tracker",
                        target: "_self",
                        children: (0, h.jsx)("div", {
                          className: b.alert,
                          children: (0, h.jsx)("div", {
                            className: b.alertText,
                            children: (0, h.jsx)("div", {
                              dangerouslySetInnerHTML: {
                                __html: M.unlinkedScreen.body
                              }
                            })
                          })
                        })
                      })]
                    })
                  }), (0, h.jsx)("div", {
                    className: b.legal,
                    children: (0, h.jsx)(w, {
                      legalText: M.legalText
                    })
                  })]
                }), (0, h.jsxs)("div", {
                  className: [b.contentContainer, b[ge], b.errorSlide, b.textContent].join(" "),
                  ref: K,
                  children: [(0, h.jsxs)("div", {
                    className: b.alert,
                    children: [(0, h.jsx)("div", {
                      className: b.errorAlert
                    }), (0, h.jsx)("div", {
                      className: b.alertText,
                      children: (0, h.jsx)("h3", {
                        children: M.errorScreen.headline
                      })
                    })]
                  }), (0, h.jsx)(g.Gen9Button, {
                    text: M.errorScreen.btnText,
                    onClick: () => window.location.reload()
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
//# sourceMappingURL=0070fabf0be6d74d64ea6c222785caed.js.map