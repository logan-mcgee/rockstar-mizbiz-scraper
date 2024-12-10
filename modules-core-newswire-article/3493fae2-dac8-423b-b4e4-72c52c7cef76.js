! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3493fae2-dac8-423b-b4e4-72c52c7cef76", e._sentryDebugIdIdentifier = "sentry-dbid-3493fae2-dac8-423b-b4e4-72c52c7cef76")
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
  [5342], {
    87027: (e, t, n) => {
      n.r(t), n.d(t, {
        default: () => M
      });
      var r = n(71403),
        a = n(57172),
        s = n(37197),
        c = n(66105),
        i = n(42756),
        o = n(58407),
        l = n(40207),
        d = n(26177),
        u = n(96717),
        m = n(94566),
        g = n(74401),
        f = n(62811),
        b = n(46632);
      const w = e => {
          let {
            legalText: t
          } = e;
          return (0, b.jsx)("div", {
            dangerouslySetInnerHTML: {
              __html: t
            }
          })
        },
        h = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        k = e => {
          let {
            s: t,
            content: n,
            refLanding: r,
            loggedIn: a,
            addClaim: s,
            signin: c,
            landingSlide: i
          } = e;
          return (0, b.jsxs)("div", {
            className: [t.contentContainer, t[i], t.landingSlide].join(" "),
            ref: r,
            children: [(0, b.jsx)("img", {
              src: n.introScreen.image.sources.mobile || h,
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
                children: (0, b.jsx)(f.A, {
                  text: a ? n.introScreen.btnText.loggedIn : n.introScreen.btnText.loggedOut,
                  onClick: a ? s : c
                })
              })]
            }), (0, b.jsx)("div", {
              className: t.bottomContent,
              children: (0, b.jsx)("div", {
                className: t.legal,
                children: (0, b.jsx)(w, {
                  legalText: n.legalText
                })
              })
            })]
          })
        };
      var x = n(81902),
        S = n(11650),
        p = n(67446),
        _ = n(60285);
      const j = e => {
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
          [g, f] = (0, r.useState)(),
          [h, k] = (0, r.useState)(!1),
          [j, v] = (0, r.useState)(),
          [C, y] = (0, r.useState)(!1),
          [T, N] = (0, r.useState)(!0);
        return (0, r.useEffect)((() => {
          const e = () => {
            d?.current && k(d?.current?.scrollWidth > d?.current?.offsetWidth)
          };
          return e(), window.addEventListener("resize", e), () => {
            window.removeEventListener("resize", e)
          }
        }), [d]), (0, r.useEffect)((() => {
          f({
            nextEl: u?.current,
            prevEl: m?.current
          })
        }), [m?.current, u?.current]), (0, b.jsxs)("div", {
          className: [t.contentContainer, t[s], t.successSlide].join(" "),
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
                ref: d,
                children: (0, b.jsxs)(x.RC, {
                  releaseOnEdges: !0,
                  touchReleaseOnEdges: !0,
                  loop: !1,
                  grabCursor: h,
                  slidesPerView: "auto",
                  speed: 700,
                  slidesOffsetAfter: 100,
                  navigation: g,
                  modules: [S.Vx, S.Jq],
                  onInit: e => {
                    v(e)
                  },
                  onSlideChange: e => {
                    y(e?.isEnd), N(e?.isBeginning)
                  },
                  children: [c.map((e => (0, b.jsx)(x.qr, {
                    tabIndex: "0",
                    children: (0, r.createElement)(p.A, {
                      characterData: e,
                      key: e.mugshotUrl
                    })
                  }, e.mugshotUrl))), (0, b.jsx)(x.qr, {
                    children: (0, b.jsx)(_.A, {
                      className: [t.linkMore, c.length > 0 ? t.withIcon : ""].join(" "),
                      to: i,
                      onClick: o,
                      children: (0, b.jsx)("div", {
                        className: t.btnText,
                        children: l
                      })
                    })
                  }, "linkMore")]
                })
              }), (0, b.jsx)("button", {
                className: t.swiperBtnPrev,
                "aria-label": "Previous Character",
                type: "button",
                ref: m,
                onClick: () => {
                  j?.slidePrev()
                },
                disabled: T,
                "data-hidden": !h
              }), (0, b.jsx)("button", {
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
          }), (0, b.jsx)("div", {
            className: t.legal,
            children: (0, b.jsx)(w, {
              legalText: n.legalText
            })
          })]
        })
      };
      var v = n(39695);
      const C = e => {
          let {
            s: t,
            content: n,
            unlinkedSlide: r,
            refUnlinked: a,
            linkConsoleText: s,
            platformLogin: c,
            giftId: i
          } = e;
          return (0, b.jsxs)("div", {
            className: [t.contentContainer, t[r], t.unlinkedSlide, t.textContent].join(" "),
            ref: a,
            children: [(0, b.jsx)("div", {
              className: t.textContent,
              children: (0, b.jsxs)("div", {
                className: t.platformButtonContainer,
                children: [(0, b.jsx)("div", {
                  className: t.errorAlert
                }), (0, b.jsx)("h3", {
                  children: n.unlinkedScreen.headline
                }), (0, b.jsx)(v.A, {
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
              children: (0, b.jsx)(w, {
                legalText: n.legalText
              })
            })]
          })
        },
        y = e => {
          let {
            s: t,
            errorSlide: n,
            content: r,
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
                    children: r.errorScreen.headline
                  })
                })]
              }), (0, b.jsx)(f.A, {
                text: r.errorScreen.btnText,
                onClick: () => window.location.reload()
              })]
            }), (0, b.jsx)("div", {
              className: t.legal,
              children: (0, b.jsx)(w, {
                legalText: r.legalText
              })
            })]
          })
        };
      var T = function(e) {
        return e.error = "error", e.landing = "landing", e.success = "success", e.unlinked = "unlinked", e.disabled = "disabled", e
      }(T || {});
      const N = {
          pillBtn: "rockstargames-modules-core-newswire-articlee9d0055988bd29cc9b3774420b49220d",
          selected: "rockstargames-modules-core-newswire-articleb6cfe7731b5b7ab166fcb167bd54aeec",
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
          swiperContainer: "rockstargames-modules-core-newswire-articlef019ed0ffdb9171e9e607aa2fc5fb907",
          swiperWrap: "rockstargames-modules-core-newswire-articleb64badc5e0122206ecb30b961bf41ce0",
          swiperButton: "rockstargames-modules-core-newswire-articlea2afa4a87ebfd0a1c39fae80e25a3a1b",
          swiperBtnPrev: "rockstargames-modules-core-newswire-articlef89d35a4a9139e178742b2f663b5334b",
          swiperBtnNext: "rockstargames-modules-core-newswire-articlee3115ab3e897ab6bf9a95fc3e60aa034",
          spinner: "rockstargames-modules-core-newswire-articlef34b882833088888c4b2eb2b020a2b16"
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
            introScreen: f,
            errorScreen: w,
            unlinkedScreen: x,
            successScreen: S,
            jumpLinkId: p,
            legalText: _
          } = e;
          const v = (0, i.useLocale)(),
            M = {
              errorScreen: {
                btnText: w?.errorButton || "",
                headline: w?.errorHeadline || ""
              },
              introScreen: {
                body: f?.introContent || "",
                btnText: {
                  loggedIn: f?.btnTextLoggedIn || "",
                  loggedOut: f?.btnTextLoggedOut || ""
                },
                headline: f?.introHeadline || "",
                image: {
                  alt: f?.image?.alt || f?.introHeadline || "",
                  sources: {
                    desktop: (0, g.useGetCdnSource)(f?.image?.sources?.en_us?.desktop) || null,
                    mobile: (0, g.useGetCdnSource)(f?.image?.sources?.en_us?.mobile) || null
                  }
                },
                tag: f?.tag || ""
              },
              legalText: _,
              successScreen: {
                body: S?.successContent || "",
                headline: S?.successHeadline || ""
              },
              unlinkedScreen: {
                body: x?.unlinkedContent || "",
                btnText: x?.unlinkedButtonText || "",
                headline: x?.unlinkedHeadline || ""
              }
            },
            [W] = (0, a.useSearchParams)(),
            O = (0, o.useRockstarToken)(),
            {
              data: R,
              loggedIn: $
            } = (0, l.useRockstarUser)(),
            B = (0, o.useRockstarTokenPing)(),
            H = `https://${I}.rockstargames.com/settings/linkedaccounts`,
            P = (0, i.toScLocaleString)(v),
            U = (0, u.useIntl)(),
            {
              track: q
            } = (0, l.useGtmTrack)(),
            {
              ref: F,
              inView: z
            } = (0, c.Wx)({
              threshold: .6
            }),
            D = 1280,
            G = (0, r.createRef)(),
            V = (0, r.createRef)(),
            J = (0, r.createRef)(),
            Q = (0, r.createRef)(),
            Y = (0, r.createRef)(),
            [K, X] = (0, r.useState)(),
            [Z, ee] = (0, r.useState)([]),
            [te, ne] = (0, r.useState)(!1),
            [re, ae] = (0, r.useState)(),
            [se, ce] = (0, r.useState)("hidden"),
            [ie, oe] = (0, r.useState)("hidden"),
            [le, de] = (0, r.useState)("hidden"),
            [ue, me] = (0, r.useState)("hidden"),
            [ge, fe] = (0, r.useState)(!1),
            [be, we] = (0, r.useState)(T.disabled),
            [he, ke] = (0, r.useState)(T.landing),
            [xe, Se] = (0, r.useState)(0),
            [pe, _e] = (0, r.useState)(0),
            [je, ve] = (0, r.useState)(0),
            [Ce, ye] = (0, r.useState)(0),
            [Te, Ne] = (0, r.useState)(0),
            [Ie, Ee] = (0, r.useState)(!1),
            [Ae, Le] = (0, r.useState)(M.introScreen.image.sources.mobile || h),
            [Me, We] = (0, r.useState)(!1),
            Oe = `${document.location.pathname}${document.location.search}#${p}`,
            Re = (0, i.usePrevious)(re),
            $e = (0, i.usePrevious)($),
            Be = () => {
              G.current && _e(G?.current?.scrollHeight), V.current && ve(V?.current?.scrollHeight), J.current && ye(J?.current?.scrollHeight), Q.current && Ne(Q?.current?.scrollHeight)
            },
            He = (e, t) => {
              e === T.landing && (e => {
                ke(T.landing), e && Se(pe), oe("onScreen"), ce("hidden"), me("hidden"), de("hidden")
              })(t), e === T.success && (e => {
                ke(T.success), e && Se(je), oe("offScreen"), ce("visible"), setTimeout((() => {
                  oe("hidden"), me("hidden")
                }), 300), setTimeout((() => {
                  ce("onScreen")
                }), 100)
              })(t), e === T.error && (e => {
                ke(T.error), e && Se(Ce), oe("offScreen"), setTimeout((() => {
                  oe("hidden")
                }), 300), setTimeout((() => {
                  me("onScreen")
                }), 100)
              })(t), e === T.unlinked && (e => {
                ke(T.unlinked), e && Se(Te), oe("offScreen"), de("visible"), setTimeout((() => {
                  oe("hidden"), me("hidden")
                }), 300), setTimeout((() => {
                  de("onScreen")
                }), 100)
              })(t)
            },
            Pe = () => {
              "disabled" === be ? (async () => {
                const e = {
                  giftUId: t,
                  location: n,
                  utmCampaign: W.get("utm_campaign"),
                  utmContent: W.get("utm_content"),
                  utmMedium: W.get("utm_medium"),
                  utmSource: W.get("utm_source")
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
          return (0, r.useEffect)((() => {
            const e = () => {
                window.innerWidth > 2560 && "newswire" !== n ? Le(M.introScreen.image.sources.mobile || h) : Le(M.introScreen.image.sources.desktop || h)
              },
              t = () => {
                Be(), window.innerWidth <= D && !te && (ne(!0), He(he, !0)), window.innerWidth > D && te && ne(!1), e()
              };
            return ne(window.innerWidth <= D), e(), window.addEventListener("resize", t), () => {
              window.removeEventListener("resize", t)
            }
          }), [he, te, G, Q, J, V]), (0, r.useEffect)((() => {
            he === T.success && xe !== je ? Se(je) : he === T.error && xe !== Ce ? Se(Ce) : he === T.landing && xe !== pe ? Se(pe) : he === T.unlinked && xe !== Te && Se(Te)
          }), [Ce, je, xe, Te, pe]), (0, r.useEffect)((() => {
            Me || (We(!0), Be(), Ie && he === T.success && Se(V?.current?.scrollHeight || 0))
          }), [G, Q, J, V]), (0, r.useEffect)((() => {
            const e = R?.characters?.gtao;
            ee(e || [])
          }), [R]), (0, r.useEffect)((() => {
            "boolean" != typeof Re && "boolean" != typeof $e || re && $ && (async () => {
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
          }), [re, $]), (0, r.useEffect)((() => {
            "boolean" == typeof $ ? $ ? ae(!0) : (ae(!1), oe("onScreen")) : ae(!0)
          }), [$]), (0, r.useEffect)((() => {
            K && Z.length > 0 ? (Ee(!0), He(T.success, !0)) : K && 0 === Z.length ? He(T.unlinked, !0) : "boolean" != typeof K && K || He(T.landing, !0)
          }), [K]), (0, r.useEffect)((() => {
            z && !ge && (q({
              element_placement: "WOC",
              event: "page_section_impression",
              section_layout: $ ? "signed in" : "signed out"
            }), fe(!0))
          }), [z]), (0, r.useEffect)((() => {
            "onScreen" === se && q({
              element_placement: "WOC",
              event: "alert_update",
              o_id: t,
              text: "Almost there!"
            })
          }), [se]), (0, r.useEffect)((() => {
            "onScreen" === le && q({
              element_placement: "WOC",
              event: "alert_error",
              o_id: t,
              text: "No Qualifying Character Found"
            })
          }), [le]), (0, r.useEffect)((() => {
            "onScreen" === ue && q({
              element_placement: "event_label",
              event: "alert_error",
              o_id: t,
              text: "Something went wrong on our end. Please try again in a few minutes."
            })
          }), [ue]), (0, r.useEffect)((() => {
            Pe()
          }), [be]), (0, b.jsxs)(b.Fragment, {
            children: [!1, (0, b.jsx)("div", {
              className: N.interestTrackerWrapper,
              children: (0, b.jsxs)(s.P.div, {
                className: [N.interestTracker, re && N.loader].join(" "),
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
                id: p || "",
                children: [(0, b.jsx)("div", {
                  className: N.moduleImage,
                  style: {
                    "--engagement-image": `url(${Ae})`
                  }
                }), (0, b.jsx)("div", {
                  className: [N.slideContainer, re ? N.loader : ""].join(" "),
                  ref: Y,
                  "data-dev-mode": "disabled",
                  style: {
                    "--engagement-height": 0 === xe ? "200%" : `${xe}px`,
                    height: 0 !== xe && te ? `${xe}px` : "auto"
                  },
                  children: re ? (0, b.jsx)("div", {
                    className: N.spinner,
                    children: (0, b.jsx)(d.A, {
                      type: "SPINNING"
                    })
                  }) : (0, b.jsxs)(b.Fragment, {
                    children: [(0, b.jsx)(k, {
                      s: N,
                      content: M,
                      refLanding: G,
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
                        const e = `${E}?returnUrl=${encodeURIComponent(Oe)}&lang=${P}`;
                        q({
                          element_placement: "WOC",
                          event: "cta_login",
                          link_url: e,
                          text: "claim now",
                          section_layout: $ ? "signed in" : "signed out"
                        }), window.location.href = e
                      },
                      landingSlide: ie
                    }), (0, b.jsx)(j, {
                      s: N,
                      content: M,
                      refSuccess: V,
                      successSlide: se,
                      characterList: Z,
                      linkAccountUrl: H,
                      linkMoreAccounts: () => {
                        q({
                          element_placement: "WOC",
                          event: "cta_link_account",
                          link_url: H,
                          text: m.engagement.engagement_link_account.defaultMessage
                        })
                      },
                      linkAccountBtn: (0, b.jsx)(u.FormattedMessage, {
                        ...m.engagement.engagement_link_account
                      })
                    }), (0, b.jsx)(C, {
                      s: N,
                      content: M,
                      unlinkedSlide: le,
                      refUnlinked: Q,
                      linkConsoleText: U.formatMessage(m.engagement.engagement_link_console_account),
                      platformLogin: e => `https://${A}.rockstargames.com/tpa/${e}/link/?cid=${L}&lang=${P}&returnUrl=${encodeURIComponent(Oe)}&accessToken=${O}`,
                      giftId: t
                    }), (0, b.jsx)(y, {
                      s: N,
                      errorSlide: ue,
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