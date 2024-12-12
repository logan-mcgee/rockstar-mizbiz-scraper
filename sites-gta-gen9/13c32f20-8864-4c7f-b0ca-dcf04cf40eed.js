! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "13c32f20-8864-4c7f-b0ca-dcf04cf40eed", e._sentryDebugIdIdentifier = "sentry-dbid-13c32f20-8864-4c7f-b0ca-dcf04cf40eed")
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
  [5342, 7005], {
    87027: (e, t, n) => {
      n.r(t), n.d(t, {
        default: () => M
      });
      var s = n(71403),
        a = n(57172),
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
      const h = e => {
          let {
            legalText: t
          } = e;
          return (0, b.jsx)("div", {
            dangerouslySetInnerHTML: {
              __html: t
            }
          })
        },
        k = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        x = e => {
          let {
            s: t,
            content: n,
            refLanding: s,
            loggedIn: a,
            addClaim: r,
            signin: c,
            landingSlide: i
          } = e;
          return (0, b.jsxs)("div", {
            className: [t.contentContainer, t[i], t.landingSlide].join(" "),
            ref: s,
            children: [(0, b.jsx)("img", {
              src: n.introScreen.image.sources.mobile || k,
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
                  text: a ? n.introScreen.btnText.loggedIn : n.introScreen.btnText.loggedOut,
                  onClick: a ? r : c
                })
              })]
            }), (0, b.jsx)("div", {
              className: t.bottomContent,
              children: (0, b.jsx)("div", {
                className: t.legal,
                children: (0, b.jsx)(h, {
                  legalText: n.legalText
                })
              })
            })]
          })
        };
      var S = n(81902),
        p = n(89269),
        j = n(67446),
        v = n(60285);
      const _ = e => {
        let {
          s: t,
          content: n,
          refSuccess: a,
          successSlide: r,
          characterList: c,
          linkAccountUrl: i,
          linkMoreAccounts: o,
          linkAccountBtn: d
        } = e;
        const l = (0, s.createRef)(),
          g = (0, s.createRef)(),
          u = (0, s.createRef)(),
          [f, m] = (0, s.useState)(),
          [k, x] = (0, s.useState)(!1),
          [_, w] = (0, s.useState)(),
          [C, y] = (0, s.useState)(!1),
          [T, N] = (0, s.useState)(!0);
        return (0, s.useEffect)((() => {
          const e = () => {
            l?.current && x(l?.current?.scrollWidth > l?.current?.offsetWidth)
          };
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }), [l]), (0, s.useEffect)((() => {
          m({
            nextEl: g?.current,
            prevEl: u?.current
          })
        }), [u?.current, g?.current]), (0, b.jsxs)("div", {
          className: [t.contentContainer, t[r], t.successSlide].join(" "),
          "data-type": "long",
          ref: a,
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
                  releaseOnEdges: !0,
                  touchReleaseOnEdges: !0,
                  loop: !1,
                  grabCursor: k,
                  slidesPerView: "auto",
                  speed: 700,
                  slidesOffsetAfter: 100,
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
                    children: (0, s.createElement)(j.A, {
                      characterData: e,
                      key: e.mugshotUrl
                    })
                  }, e.mugshotUrl))), (0, b.jsx)(S.qr, {
                    children: (0, b.jsx)(v.A, {
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
                "data-hidden": !k
              }), (0, b.jsx)("button", {
                className: t.swiperBtnNext,
                "aria-label": "Next Character",
                type: "button",
                ref: g,
                onClick: () => {
                  _?.slideNext()
                },
                disabled: C,
                "data-hidden": !k
              })]
            })]
          }), (0, b.jsx)("div", {
            className: t.legal,
            children: (0, b.jsx)(h, {
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
            unlinkedSlide: s,
            refUnlinked: a,
            linkConsoleText: r,
            platformLogin: c,
            giftId: i
          } = e;
          return (0, b.jsxs)("div", {
            className: [t.contentContainer, t[s], t.unlinkedSlide, t.textContent].join(" "),
            ref: a,
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
              children: (0, b.jsx)(h, {
                legalText: n.legalText
              })
            })]
          })
        },
        y = e => {
          let {
            s: t,
            errorSlide: n,
            content: s,
            refError: a
          } = e;
          return (0, b.jsxs)("div", {
            className: [t.contentContainer, t[n], t.errorSlide, t.textContent].join(" "),
            ref: a,
            children: [(0, b.jsxs)("div", {
              className: t.textContent,
              children: [(0, b.jsxs)("div", {
                className: t.alert,
                children: [(0, b.jsx)("div", {
                  className: t.errorAlert
                }), (0, b.jsx)("div", {
                  className: t.alertText,
                  children: (0, b.jsx)("h3", {
                    children: s.errorScreen.headline
                  })
                })]
              }), (0, b.jsx)(m.A, {
                text: s.errorScreen.btnText,
                onClick: () => window.location.reload()
              })]
            }), (0, b.jsx)("div", {
              className: t.legal,
              children: (0, b.jsx)(h, {
                legalText: s.legalText
              })
            })]
          })
        };
      var T = function(e) {
        return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e.disabled = "disabled", e
      }(T || {});
      const N = {
          pillBtn: "rockstargames-sites-gta-gen9e9d0055988bd29cc9b3774420b49220d",
          selected: "rockstargames-sites-gta-gen9b6cfe7731b5b7ab166fcb167bd54aeec",
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
            errorScreen: h,
            unlinkedScreen: S,
            successScreen: p,
            jumpLinkId: j,
            legalText: v
          } = e;
          const w = (0, i.useLocale)(),
            M = {
              errorScreen: {
                btnText: h?.errorButton || "",
                headline: h?.errorHeadline || ""
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
              legalText: v,
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
            [O] = (0, a.useSearchParams)(),
            R = (0, o.useRockstarToken)(),
            {
              data: W,
              loggedIn: $
            } = (0, d.useRockstarUser)(),
            B = (0, o.useRockstarTokenPing)(),
            H = `https://${I}.rockstargames.com/settings/linkedaccounts`,
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
            V = (0, s.createRef)(),
            G = (0, s.createRef)(),
            J = (0, s.createRef)(),
            Q = (0, s.createRef)(),
            Y = (0, s.createRef)(),
            [K, X] = (0, s.useState)(),
            [Z, ee] = (0, s.useState)([]),
            [te, ne] = (0, s.useState)(!1),
            [se, ae] = (0, s.useState)(),
            [re, ce] = (0, s.useState)("hidden"),
            [ie, oe] = (0, s.useState)("hidden"),
            [de, le] = (0, s.useState)("hidden"),
            [ge, ue] = (0, s.useState)("hidden"),
            [fe, me] = (0, s.useState)(!1),
            [be, he] = (0, s.useState)(T.disabled),
            [ke, xe] = (0, s.useState)(T.landing),
            [Se, pe] = (0, s.useState)(0),
            [je, ve] = (0, s.useState)(0),
            [_e, we] = (0, s.useState)(0),
            [Ce, ye] = (0, s.useState)(0),
            [Te, Ne] = (0, s.useState)(0),
            [Ie, Ee] = (0, s.useState)(!1),
            [Ae, Le] = (0, s.useState)(M.introScreen.image.sources.mobile || k),
            [Me, Oe] = (0, s.useState)(!1),
            Re = `${document.location.pathname}${document.location.search}#${j}`,
            We = (0, i.usePrevious)(se),
            $e = (0, i.usePrevious)($),
            Be = () => {
              V.current && ve(V?.current?.scrollHeight), G.current && we(G?.current?.scrollHeight), J.current && ye(J?.current?.scrollHeight), Q.current && Ne(Q?.current?.scrollHeight)
            },
            He = (e, t) => {
              e === T.landing && (e => {
                xe(T.landing), e && pe(je), oe("onScreen"), ce("hidden"), ue("hidden"), le("hidden")
              })(t), e === T.success && (e => {
                xe(T.success), e && pe(_e), oe("offScreen"), ce("visible"), setTimeout((() => {
                  oe("hidden"), ue("hidden")
                }), 300), setTimeout((() => {
                  ce("onScreen")
                }), 100)
              })(t), e === T.error && (e => {
                xe(T.error), e && pe(Ce), oe("offScreen"), setTimeout((() => {
                  oe("hidden")
                }), 300), setTimeout((() => {
                  ue("onScreen")
                }), 100)
              })(t), e === T.unlinked && (e => {
                xe(T.unlinked), e && pe(Te), oe("offScreen"), le("visible"), setTimeout((() => {
                  oe("hidden"), ue("hidden")
                }), 300), setTimeout((() => {
                  le("onScreen")
                }), 100)
              })(t)
            },
            Pe = () => {
              "disabled" === be ? (async () => {
                const e = {
                  giftUId: t,
                  location: n,
                  utmCampaign: O.get("utm_campaign"),
                  utmContent: O.get("utm_content"),
                  utmMedium: O.get("utm_medium"),
                  utmSource: O.get("utm_source")
                };
                if (Z.length > 0) {
                  const {
                    status: t
                  } = await (0, i.coreScApiFetch)("marketing/engagement/claim/create", {
                    fetchOptions: {
                      method: "POST"
                    },
                    pingBearer: B,
                    query: e
                  }) ?? [];
                  He(t ? T.success : T.error, !1)
                } else He(K ? T.unlinked : T.landing, !1)
              })() : "success" === be ? He(T.success, !1) : "error" === be ? He(T.error, !1) : "unlinked" === be && He(T.unlinked, !1)
            };
          return (0, s.useEffect)((() => {
            const e = () => {
                window.innerWidth > 2560 && "newswire" !== n ? Le(M.introScreen.image.sources.mobile || k) : Le(M.introScreen.image.sources.desktop || k)
              },
              t = () => {
                Be(), window.innerWidth <= D && !te && (ne(!0), He(ke, !0)), window.innerWidth > D && te && ne(!1), e()
              };
            return ne(window.innerWidth <= D), e(), window.addEventListener("resize", t), () => {
              window.removeEventListener("resize", t)
            }
          }), [ke, te, V, Q, J, G]), (0, s.useEffect)((() => {
            ke === T.success && Se !== _e ? pe(_e) : ke === T.error && Se !== Ce ? pe(Ce) : ke === T.landing && Se !== je ? pe(je) : ke === T.unlinked && Se !== Te && pe(Te)
          }), [Ce, _e, Se, Te, je]), (0, s.useEffect)((() => {
            Me || (Oe(!0), Be(), Ie && ke === T.success && pe(G?.current?.scrollHeight || 0))
          }), [V, Q, J, G]), (0, s.useEffect)((() => {
            const e = W?.characters?.gtao;
            ee(e || [])
          }), [W]), (0, s.useEffect)((() => {
            "boolean" != typeof We && "boolean" != typeof $e || se && $ && (async () => {
              const {
                result: e
              } = await (0, i.coreScApiFetch)("marketing/engagement/claim/exists", {
                pingBearer: B,
                query: {
                  giftUId: t
                }
              });
              X(e), ae(!1)
            })()
          }), [se, $]), (0, s.useEffect)((() => {
            "boolean" == typeof $ ? $ ? ae(!0) : (ae(!1), oe("onScreen")) : ae(!0)
          }), [$]), (0, s.useEffect)((() => {
            K && Z.length > 0 ? (Ee(!0), He(T.success, !0)) : K && 0 === Z.length ? He(T.unlinked, !0) : "boolean" != typeof K && K || He(T.landing, !0)
          }), [K]), (0, s.useEffect)((() => {
            z && !fe && (q({
              element_placement: "WOC",
              event: "page_section_impression",
              section_layout: $ ? "signed in" : "signed out"
            }), me(!0))
          }), [z]), (0, s.useEffect)((() => {
            "onScreen" === re && q({
              element_placement: "WOC",
              event: "alert_update",
              o_id: t,
              text: "Almost there!"
            })
          }), [re]), (0, s.useEffect)((() => {
            "onScreen" === de && q({
              element_placement: "WOC",
              event: "alert_error",
              o_id: t,
              text: "No Qualifying Character Found"
            })
          }), [de]), (0, s.useEffect)((() => {
            "onScreen" === ge && q({
              element_placement: "event_label",
              event: "alert_error",
              o_id: t,
              text: "Something went wrong on our end. Please try again in a few minutes."
            })
          }), [ge]), (0, s.useEffect)((() => {
            Pe()
          }), [be]), (0, b.jsxs)(b.Fragment, {
            children: [!1, (0, b.jsx)("div", {
              className: N.interestTrackerWrapper,
              children: (0, b.jsxs)(r.motion.div, {
                className: [N.interestTracker, se && N.loader].join(" "),
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
                id: j || "",
                children: [(0, b.jsx)("div", {
                  className: N.moduleImage,
                  style: {
                    "--engagement-image": `url(${Ae})`
                  }
                }), (0, b.jsx)("div", {
                  className: [N.slideContainer, se ? N.loader : ""].join(" "),
                  ref: Y,
                  "data-dev-mode": "disabled",
                  style: {
                    "--engagement-height": 0 === Se ? "200%" : `${Se}px`,
                    height: 0 !== Se && te ? `${Se}px` : "auto"
                  },
                  children: se ? (0, b.jsx)("div", {
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
                        }), Pe()
                      },
                      signin: () => {
                        const e = `${E}?returnUrl=${encodeURIComponent(Re)}&lang=${P}`;
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
                      linkAccountUrl: H,
                      linkMoreAccounts: () => {
                        q({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: H,
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
                      platformLogin: e => `https://${A}.rockstargames.com/tpa/${e}/link/?cid=${L}&lang=${P}&returnUrl=${encodeURIComponent(Re)}&accessToken=${R}`,
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