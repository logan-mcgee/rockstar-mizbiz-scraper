! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b1474cc4-4d87-4ba2-88f7-0f497925d85e", e._sentryDebugIdIdentifier = "sentry-dbid-b1474cc4-4d87-4ba2-88f7-0f497925d85e")
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
  [3401], {
    3237: (e, t, n) => {
      n.r(t), n.d(t, {
        default: () => L
      });
      var r = n(62229),
        a = n(9623),
        s = n(22557),
        c = n(44498),
        i = n(95966),
        o = n(93075),
        l = n(36671),
        d = n(81788),
        u = n(539),
        m = n(92440),
        g = n(14818),
        f = n(98096);
      const b = e => {
          let {
            legalText: t
          } = e;
          return (0, f.jsx)("div", {
            dangerouslySetInnerHTML: {
              __html: t
            }
          })
        },
        w = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        h = e => {
          let {
            s: t,
            content: n,
            refLanding: r,
            loggedIn: a,
            addClaim: s,
            signin: c,
            landingSlide: i
          } = e;
          return (0, f.jsxs)("div", {
            className: [t.contentContainer, t[i], t.landingSlide].join(" "),
            ref: r,
            children: [(0, f.jsx)("img", {
              src: n.introScreen.image.sources.mobile || w,
              className: t.moduleImageMobile,
              alt: n.introScreen.image.alt
            }), (0, f.jsxs)("div", {
              className: t.topContent,
              children: [(0, f.jsx)("div", {
                className: t.textContent,
                children: (0, f.jsxs)("div", {
                  className: t.alert,
                  children: [(0, f.jsx)("div", {
                    className: t.badge,
                    children: n.introScreen.tag
                  }), (0, f.jsxs)("div", {
                    className: t.alertText,
                    children: [(0, f.jsx)("h2", {
                      children: n.introScreen.headline
                    }), (0, f.jsx)("div", {
                      dangerouslySetInnerHTML: {
                        __html: n.introScreen.body
                      }
                    })]
                  })]
                })
              }), (0, f.jsx)("div", {
                className: t.btnContainer,
                children: (0, f.jsx)(g.A, {
                  text: a ? n.introScreen.btnText.loggedIn : n.introScreen.btnText.loggedOut,
                  onClick: a ? s : c
                })
              })]
            }), (0, f.jsx)("div", {
              className: t.bottomContent,
              children: (0, f.jsx)("div", {
                className: t.legal,
                children: (0, f.jsx)(b, {
                  legalText: n.legalText
                })
              })
            })]
          })
        };
      var x = n(24162),
        k = n(7545),
        S = n(20270),
        p = n(89950);
      const _ = e => {
        let {
          s: t,
          content: n,
          refSuccess: a,
          successSlide: s,
          characterList: c,
          linkAccountUrl: i,
          linkMoreAccounts: o,
          linkAccountBtn: l
        } = e;
        const d = (0, r.createRef)(),
          u = (0, r.createRef)(),
          m = (0, r.createRef)(),
          [g, w] = (0, r.useState)(),
          [h, _] = (0, r.useState)(!1),
          [j, v] = (0, r.useState)(),
          [C, y] = (0, r.useState)(!1),
          [T, N] = (0, r.useState)(!0);
        return (0, r.useEffect)((() => {
          const e = () => {
            d?.current && _(d?.current?.scrollWidth > d?.current?.offsetWidth)
          };
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }), [d]), (0, r.useEffect)((() => {
          w({
            nextEl: u?.current,
            prevEl: m?.current
          })
        }), [m?.current, u?.current]), (0, f.jsxs)("div", {
          className: [t.contentContainer, t[s], t.successSlide].join(" "),
          "data-type": "long",
          ref: a,
          children: [(0, f.jsxs)("div", {
            className: t.topContent,
            children: [(0, f.jsxs)("div", {
              className: t.alert,
              children: [(0, f.jsx)("div", {
                className: t.successAlert
              }), (0, f.jsxs)("div", {
                className: t.alertText,
                children: [(0, f.jsx)("h3", {
                  children: n.successScreen.headline
                }), (0, f.jsx)("div", {
                  dangerouslySetInnerHTML: {
                    __html: n.successScreen.body
                  }
                })]
              })]
            }), (0, f.jsxs)("div", {
              className: t.swiperWrap,
              children: [(0, f.jsx)("div", {
                className: t.swiperContainer,
                ref: d,
                children: (0, f.jsxs)(x.RC, {
                  releaseOnEdges: !0,
                  touchReleaseOnEdges: !0,
                  loop: !1,
                  grabCursor: h,
                  slidesPerView: "auto",
                  speed: 700,
                  slidesOffsetAfter: 100,
                  navigation: g,
                  modules: [k.Vx, k.Jq],
                  onInit: e => {
                    v(e)
                  },
                  onSlideChange: e => {
                    y(e?.isEnd), N(e?.isBeginning)
                  },
                  children: [c.map((e => (0, f.jsx)(x.qr, {
                    tabIndex: "0",
                    children: (0, r.createElement)(S.CharacterCard, {
                      characterData: e,
                      key: e.mugshotUrl
                    })
                  }, e.mugshotUrl))), (0, f.jsx)(x.qr, {
                    children: (0, f.jsx)(p.A, {
                      className: [t.linkMore, c.length > 0 ? t.withIcon : ""].join(" "),
                      to: i,
                      onClick: o,
                      children: (0, f.jsx)("div", {
                        className: t.btnText,
                        children: l
                      })
                    })
                  }, "linkMore")]
                })
              }), (0, f.jsx)("button", {
                className: t.swiperBtnPrev,
                "aria-label": "Previous Character",
                type: "button",
                ref: m,
                onClick: () => {
                  j?.slidePrev()
                },
                disabled: T,
                "data-hidden": !h
              }), (0, f.jsx)("button", {
                className: t.swiperBtnNext,
                "aria-label": "Next Character",
                type: "button",
                ref: u,
                onClick: () => {
                  j?.slideNext()
                },
                disabled: C,
                "data-hidden": !h
              })]
            })]
          }), (0, f.jsx)("div", {
            className: t.legal,
            children: (0, f.jsx)(b, {
              legalText: n.legalText
            })
          })]
        })
      };
      var j = n(3453);
      const v = e => {
          let {
            s: t,
            content: n,
            unlinkedSlide: r,
            refUnlinked: a,
            linkConsoleText: s,
            platformLogin: c,
            giftId: i
          } = e;
          return (0, f.jsxs)("div", {
            className: [t.contentContainer, t[r], t.unlinkedSlide, t.textContent].join(" "),
            ref: a,
            children: [(0, f.jsx)("div", {
              className: t.textContent,
              children: (0, f.jsxs)("div", {
                className: t.platformButtonContainer,
                children: [(0, f.jsx)("div", {
                  className: t.errorAlert
                }), (0, f.jsx)("h3", {
                  children: n.unlinkedScreen.headline
                }), (0, f.jsx)(j.A, {
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
                  children: (0, f.jsx)("div", {
                    className: t.alert,
                    children: (0, f.jsx)("div", {
                      className: t.alertText,
                      children: (0, f.jsx)("div", {
                        dangerouslySetInnerHTML: {
                          __html: n.unlinkedScreen.body
                        }
                      })
                    })
                  })
                })]
              })
            }), (0, f.jsx)("div", {
              className: t.legal,
              children: (0, f.jsx)(b, {
                legalText: n.legalText
              })
            })]
          })
        },
        C = e => {
          let {
            s: t,
            errorSlide: n,
            content: r,
            refError: a
          } = e;
          return (0, f.jsxs)("div", {
            className: [t.contentContainer, t[n], t.errorSlide, t.textContent].join(" "),
            ref: a,
            children: [(0, f.jsxs)("div", {
              className: t.textContent,
              children: [(0, f.jsxs)("div", {
                className: t.alert,
                children: [(0, f.jsx)("div", {
                  className: t.errorAlert
                }), (0, f.jsx)("div", {
                  className: t.alertText,
                  children: (0, f.jsx)("h3", {
                    children: r.errorScreen.headline
                  })
                })]
              }), (0, f.jsx)(g.A, {
                text: r.errorScreen.btnText,
                onClick: () => window.location.reload()
              })]
            }), (0, f.jsx)("div", {
              className: t.legal,
              children: (0, f.jsx)(b, {
                legalText: r.legalText
              })
            })]
          })
        };
      var y = function(e) {
        return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e.disabled = "disabled", e
      }(y || {});
      const T = {
          pillBtn: "rockstargames-modules-core-newswire-articled00777e4f5cd743e631c6c55037e895d",
          selected: "rockstargames-modules-core-newswire-articleb58430ad013dcff6fef7da7166cc691f",
          interestTrackerWrapper: "rockstargames-modules-core-newswire-articled2b8c4d79af33709f68b37001ab7be39",
          interestTracker: "rockstargames-modules-core-newswire-articledb2a4f7b1cfeb4aeca1410a7cd445b8f",
          loader: "rockstargames-modules-core-newswire-articled8c578c46f36662f7652cc76eac7da9b",
          moduleImage: "rockstargames-modules-core-newswire-articlebefb0ce557a2dd74f4835661fb577844",
          mobileImgContainer: "rockstargames-modules-core-newswire-articlec0fc20e5997ec0175e466407b77f13ea",
          moduleImageMobile: "rockstargames-modules-core-newswire-articlebe574bc57f2a974b9acfab41bf011e87",
          slideContainer: "rockstargames-modules-core-newswire-articleebe07d21ea2d2a2e3c9c8abd04d3eb7c",
          contentContainer: "rockstargames-modules-core-newswire-articleffc948e8cbe4f2137ab4e2772eb1195d",
          landingSlide: "rockstargames-modules-core-newswire-articlec25099ec278fe51b5b3c1874dbf7f177",
          textContent: "rockstargames-modules-core-newswire-articlea8602b1bf8cb8b652a23bdd9757d227e",
          successSlide: "rockstargames-modules-core-newswire-articleba550c3a58739708ed4e9ba1d5cc9284",
          unlinkedSlide: "rockstargames-modules-core-newswire-articlefed30d7e2c15a2e8588bfcb1947d415d",
          platformButtonContainer: "rockstargames-modules-core-newswire-articlecac0eb7158ec985ab3ee6372a2bd7672",
          errorSlide: "rockstargames-modules-core-newswire-articlec55d286bddb7bc024ba481baa3f25282",
          btnContainer: "rockstargames-modules-core-newswire-articlef4b714d7985247039d190db0652b8ceb",
          topContent: "rockstargames-modules-core-newswire-articlede05099174e82770aeae6cd301329294",
          bottomContent: "rockstargames-modules-core-newswire-articlea01ac7c10f297d8150a9b802bedb72af",
          legal: "rockstargames-modules-core-newswire-articlec2720597abb7fa1a9af5cd99d8c40a54",
          faq: "rockstargames-modules-core-newswire-articlef56f546a21ace49c216e9a67228efb66",
          faqLink: "rockstargames-modules-core-newswire-articlef11c7041488926e7c7f25fc224f98947",
          badge: "rockstargames-modules-core-newswire-articlebcac1dcfa5b088eab1e65fc68e8c85a3",
          hidden: "rockstargames-modules-core-newswire-articlede0d2e1871164ef762659167bbd6529a",
          visible: "rockstargames-modules-core-newswire-articleb344d81cd5eafc49a6b22f62e6e7f76f",
          onScreen: "rockstargames-modules-core-newswire-articleae620b51e3ff54bcb035a20296ee980c",
          offScreen: "rockstargames-modules-core-newswire-articlec5da19bfed6924ef3a54c7b6950850dd",
          alert: "rockstargames-modules-core-newswire-articled18a7942f6ffe1c595090c27db4ed3cf",
          alertText: "rockstargames-modules-core-newswire-articlecbddf3c3597e3da9c2cb9388de7ea8f8",
          errorAlert: "rockstargames-modules-core-newswire-articled3d7cc42ef277206a733e4cb57942870",
          successAlert: "rockstargames-modules-core-newswire-articled0d2bcc799b1f77be3797b44c90a217d",
          linkMore: "rockstargames-modules-core-newswire-articlee3f0330500235638f50be4a36b2e498a",
          withIcon: "rockstargames-modules-core-newswire-articleb1c731df00d3a0b945adcfb95b5e026e",
          btnText: "rockstargames-modules-core-newswire-articleea24dcc72092b2111a1bc9b420d3595e",
          swiperContainer: "rockstargames-modules-core-newswire-articleba3a5dd56ead99e725ea9031a0105852",
          swiperWrap: "rockstargames-modules-core-newswire-articlece299e602293eb072f2aa29f92ade94d",
          swiperButton: "rockstargames-modules-core-newswire-articlebecae27bc56d3d7ce5e33da63b298355",
          swiperBtnPrev: "rockstargames-modules-core-newswire-articlec2a3afc2e5783cecd9f1096c3cfdf61b",
          swiperBtnNext: "rockstargames-modules-core-newswire-articleee20a3331aa9cb5857d0c4d7a18b4aaf",
          spinner: "rockstargames-modules-core-newswire-articlec596ce72795db40bd64a752fcff020f2"
        },
        {
          host: N,
          login: I,
          authHost: E,
          clientId: A
        } = (0, i.getScConfigForOrigin)(),
        L = e => {
          let {
            giftId: t,
            location: n = "gtaplus_site",
            introScreen: g,
            errorScreen: b,
            unlinkedScreen: x,
            successScreen: k,
            jumpLinkId: S,
            legalText: p
          } = e;
          const j = (0, i.useLocale)(),
            L = {
              errorScreen: {
                btnText: b?.errorButton || "",
                headline: b?.errorHeadline || ""
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
                    desktop: (0, m.useGetCdnSource)(g?.image?.sources?.en_us?.desktop) || null,
                    mobile: (0, m.useGetCdnSource)(g?.image?.sources?.en_us?.mobile) || null
                  }
                },
                tag: g?.tag || ""
              },
              legalText: p,
              successScreen: {
                body: k?.successContent || "",
                headline: k?.successHeadline || ""
              },
              unlinkedScreen: {
                body: x?.unlinkedContent || "",
                btnText: x?.unlinkedButtonText || "",
                headline: x?.unlinkedHeadline || ""
              }
            },
            [M] = (0, a.useSearchParams)(),
            W = (0, i.useRockstarToken)(),
            {
              data: O,
              loggedIn: R
            } = (0, o.Wx)(),
            $ = (0, i.useRockstarTokenPing)(),
            B = `https://${N}.rockstargames.com/settings/linkedaccounts`,
            H = (0, i.toScLocaleString)(j),
            P = (0, d.useIntl)(),
            {
              track: U
            } = (0, o.h)(),
            {
              ref: q,
              inView: F
            } = (0, c.Wx)({
              threshold: .6
            }),
            z = 1280,
            D = (0, r.createRef)(),
            V = (0, r.createRef)(),
            Y = (0, r.createRef)(),
            G = (0, r.createRef)(),
            J = (0, r.createRef)(),
            [Q, K] = (0, r.useState)(),
            [X, Z] = (0, r.useState)([]),
            [ee, te] = (0, r.useState)(!1),
            [ne, re] = (0, r.useState)(),
            [ae, se] = (0, r.useState)("hidden"),
            [ce, ie] = (0, r.useState)("hidden"),
            [oe, le] = (0, r.useState)("hidden"),
            [de, ue] = (0, r.useState)("hidden"),
            [me, ge] = (0, r.useState)(!1),
            [fe, be] = (0, r.useState)(y.disabled),
            [we, he] = (0, r.useState)(y.landing),
            [xe, ke] = (0, r.useState)(0),
            [Se, pe] = (0, r.useState)(0),
            [_e, je] = (0, r.useState)(0),
            [ve, Ce] = (0, r.useState)(0),
            [ye, Te] = (0, r.useState)(0),
            [Ne, Ie] = (0, r.useState)(!1),
            [Ee, Ae] = (0, r.useState)(L.introScreen.image.sources.mobile || w),
            [Le, Me] = (0, r.useState)(!1),
            We = `${document.location.pathname}${document.location.search}#${S}`,
            Oe = (0, i.usePrevious)(ne),
            Re = (0, i.usePrevious)(R),
            $e = () => {
              D.current && pe(D?.current?.scrollHeight), V.current && je(V?.current?.scrollHeight), Y.current && Ce(Y?.current?.scrollHeight), G.current && Te(G?.current?.scrollHeight)
            },
            Be = (e, t) => {
              e === y.landing && (e => {
                he(y.landing), e && ke(Se), ie("onScreen"), se("hidden"), ue("hidden"), le("hidden")
              })(t), e === y.success && (e => {
                he(y.success), e && ke(_e), ie("offScreen"), se("visible"), setTimeout((() => {
                  ie("hidden"), ue("hidden")
                }), 300), setTimeout((() => {
                  se("onScreen")
                }), 100)
              })(t), e === y.error && (e => {
                he(y.error), e && ke(ve), ie("offScreen"), setTimeout((() => {
                  ie("hidden")
                }), 300), setTimeout((() => {
                  ue("onScreen")
                }), 100)
              })(t), e === y.unlinked && (e => {
                he(y.unlinked), e && ke(ye), ie("offScreen"), le("visible"), setTimeout((() => {
                  ie("hidden"), ue("hidden")
                }), 300), setTimeout((() => {
                  le("onScreen")
                }), 100)
              })(t)
            },
            He = () => {
              "disabled" === fe ? (async () => {
                const e = {
                  giftUId: t,
                  location: n,
                  utmCampaign: M.get("utm_campaign"),
                  utmContent: M.get("utm_content"),
                  utmMedium: M.get("utm_medium"),
                  utmSource: M.get("utm_source")
                };
                if (X.length > 0) {
                  const {
                    status: t
                  } = await (0, i.coreScApiFetch)("marketing/engagement/claim/create", {
                    fetchOptions: {
                      method: "POST"
                    },
                    pingBearer: $,
                    query: e
                  }) ?? [];
                  Be(t ? y.success : y.error, !1)
                } else Be(Q ? y.unlinked : y.landing, !1)
              })() : "success" === fe ? Be(y.success, !1) : "error" === fe ? Be(y.error, !1) : "unlinked" === fe && Be(y.unlinked, !1)
            };
          return (0, r.useEffect)((() => {
            const e = () => {
                window.innerWidth > 2560 && "newswire" !== n ? Ae(L.introScreen.image.sources.mobile || w) : Ae(L.introScreen.image.sources.desktop || w)
              },
              t = () => {
                $e(), window.innerWidth <= z && !ee && (te(!0), Be(we, !0)), window.innerWidth > z && ee && te(!1), e()
              };
            return te(window.innerWidth <= z), e(), window.addEventListener("resize", t), () => {
              window.removeEventListener("resize", t)
            }
          }), [we, ee, D, G, Y, V]), (0, r.useEffect)((() => {
            we === y.success && xe !== _e ? ke(_e) : we === y.error && xe !== ve ? ke(ve) : we === y.landing && xe !== Se ? ke(Se) : we === y.unlinked && xe !== ye && ke(ye)
          }), [ve, _e, xe, ye, Se]), (0, r.useEffect)((() => {
            Le || (Me(!0), $e(), Ne && we === y.success && ke(V?.current?.scrollHeight || 0))
          }), [D, G, Y, V]), (0, r.useEffect)((() => {
            const e = O?.characters?.gtao;
            Z(e || [])
          }), [O]), (0, r.useEffect)((() => {
            "boolean" != typeof Oe && "boolean" != typeof Re || ne && R && (async () => {
              const {
                result: e
              } = await (0, i.coreScApiFetch)("marketing/engagement/claim/exists", {
                pingBearer: $,
                query: {
                  giftUId: t
                }
              });
              K(e), re(!1)
            })()
          }), [ne, R]), (0, r.useEffect)((() => {
            "boolean" == typeof R ? R ? re(!0) : (re(!1), ie("onScreen")) : re(!0)
          }), [R]), (0, r.useEffect)((() => {
            Q && X.length > 0 ? (Ie(!0), Be(y.success, !0)) : Q && 0 === X.length ? Be(y.unlinked, !0) : "boolean" != typeof Q && Q || Be(y.landing, !0)
          }), [Q]), (0, r.useEffect)((() => {
            if (F && !me) {
              if (null === R) return;
              U({
                element_placement: "WOC",
                event: "page_section_impression",
                section_layout: R ? "signed in" : "signed out"
              }), ge(!0)
            }
          }), [F, R]), (0, r.useEffect)((() => {
            "onScreen" === ae && U({
              element_placement: "WOC",
              event: "alert_update",
              o_id: t,
              text: "Almost there!"
            })
          }), [ae]), (0, r.useEffect)((() => {
            "onScreen" === oe && U({
              element_placement: "WOC",
              event: "alert_error",
              o_id: t,
              text: "No Qualifying Character Found"
            })
          }), [oe]), (0, r.useEffect)((() => {
            "onScreen" === de && U({
              element_placement: "event_label",
              event: "alert_error",
              o_id: t,
              text: "Something went wrong on our end. Please try again in a few minutes."
            })
          }), [de]), (0, r.useEffect)((() => {
            He()
          }), [fe]), (0, f.jsxs)(f.Fragment, {
            children: [!1, (0, f.jsx)("div", {
              className: T.interestTrackerWrapper,
              children: (0, f.jsxs)(s.P.div, {
                className: [T.interestTracker, ne && T.loader].join(" "),
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
                id: S || "",
                children: [(0, f.jsx)("div", {
                  className: T.moduleImage,
                  style: {
                    "--engagement-image": `url(${Ee})`
                  }
                }), (0, f.jsx)("div", {
                  className: [T.slideContainer, ne ? T.loader : ""].join(" "),
                  ref: J,
                  "data-dev-mode": "disabled",
                  style: {
                    "--engagement-height": 0 === xe ? "200%" : `${xe}px`,
                    height: 0 !== xe && ee ? `${xe}px` : "auto"
                  },
                  children: ne ? (0, f.jsx)("div", {
                    className: T.spinner,
                    children: (0, f.jsx)(l.A, {
                      type: "SPINNING"
                    })
                  }) : (0, f.jsxs)(f.Fragment, {
                    children: [(0, f.jsx)(h, {
                      s: T,
                      content: L,
                      refLanding: D,
                      loggedIn: R,
                      addClaim: async () => {
                        U({
                          element_placement: "WOC",
                          event: "cta_claim",
                          o_id: t,
                          text: "claim now",
                          section_layout: R ? "signed in" : "signed out"
                        }), He()
                      },
                      signin: () => {
                        const e = `${I}?returnUrl=${encodeURIComponent(We)}&lang=${H}`;
                        U({
                          element_placement: "WOC",
                          event: "cta_login",
                          link_url: e,
                          text: "claim now",
                          section_layout: R ? "signed in" : "signed out"
                        }), window.location.href = e
                      },
                      landingSlide: ce
                    }), (0, f.jsx)(_, {
                      s: T,
                      content: L,
                      refSuccess: V,
                      successSlide: ae,
                      characterList: X,
                      linkAccountUrl: B,
                      linkMoreAccounts: () => {
                        U({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: B,
                          text: u.oY.engagement_link_account.defaultMessage
                        })
                      },
                      linkAccountBtn: (0, f.jsx)(d.FormattedMessage, {
                        ...u.oY.engagement_link_account
                      })
                    }), (0, f.jsx)(v, {
                      s: T,
                      content: L,
                      unlinkedSlide: oe,
                      refUnlinked: G,
                      linkConsoleText: P.formatMessage(u.oY.engagement_link_console_account),
                      platformLogin: e => `https://${E}.rockstargames.com/tpa/${e}/link/?cid=${A}&lang=${H}&returnUrl=${encodeURIComponent(We)}&accessToken=${W}`,
                      giftId: t
                    }), (0, f.jsx)(C, {
                      s: T,
                      errorSlide: de,
                      content: L,
                      refError: Y
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