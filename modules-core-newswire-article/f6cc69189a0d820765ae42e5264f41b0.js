! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b8849406-9453-434a-88ae-381fe99590d2", e._sentryDebugIdIdentifier = "sentry-dbid-b8849406-9453-434a-88ae-381fe99590d2")
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
  [196, 240], {
    99576: (e, t, a) => {
      var n = a(51664),
        r = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, a) {
        var n, s = {},
          l = null,
          d = null;
        for (n in void 0 !== a && (l = "" + a), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (d = t.ref), t) o.call(t, n) && !i.hasOwnProperty(n) && (s[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === s[n] && (s[n] = t[n]);
        return {
          $$typeof: r,
          type: e,
          key: l,
          ref: d,
          props: s,
          _owner: c.current
        }
      }
      t.Fragment = s, t.jsx = l, t.jsxs = l
    },
    95240: (e, t, a) => {
      e.exports = a(99576)
    },
    79584: (e, t, a) => {
      a.d(t, {
        FormattedMessage: () => r.c,
        defineMessages: () => n.Os,
        getLocale: () => g,
        locales: () => b,
        useIntl: () => s.c,
        withIntl: () => h
      });
      var n = a(45052),
        r = a(3832),
        s = a(95688),
        o = a(51664),
        c = a(82936),
        i = a(53592);
      const l = (e, t) => {
          e && t ? document.cookie = `${e}=${t}; domain=${d()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${t})`)
        },
        d = () => {
          const e = window.location.hostname.split(".");
          return e.slice(e.length - 2).join(".")
        },
        u = e => {
          const t = document.cookie.split("; "),
            a = `${e}=`,
            n = t.find((e => e.startsWith(a))),
            r = n?.substring(a.length, n.length);
          return r
        },
        m = [{
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE"
        }, {
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN"
        }],
        b = m,
        f = m[1],
        g = () => {
          const {
            location: e
          } = window, t = (0, i.c)(), a = (e => {
            const t = b.map((e => e.subdomaincom)),
              a = e.pathname.substring(1).split("/"),
              n = "detect-locals" === a[0] ? 1 : 0;
            return -1 !== t.indexOf(a[n]) ? a[n] : null
          })(e), n = (e => {
            const t = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return t?.split("=")[1]
          })(e), r = f;
          let s = r;
          const o = `rockstarweb_lang.${t.cookieIdentifier}`,
            c = u(o);
          s = t.currentSite?.site === i.U.www ? b.find((e => e.subdomaincom === n)) || b.find((e => e.subdomaincom === a)) || r : b.find((e => e.iso === c)) || r;
          const [d, m] = function(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            const n = u(e);
            return n && !a || l(e, t), [n, (r = e, e => {
              l(r, e)
            })];
            var r
          }(o, s.iso);
          return [s, m]
        };
      var w = a(95240);
      const p = e => {
        let {
          locales: t,
          lang: a,
          children: n
        } = e;
        const r = (0, o.useMemo)((() => function(e) {
            let [t, a] = e.split(/[-_]/);
            return a = a?.toLowerCase(), "cn" === a && (a = "hans"), t && a || (t = "en", a = "us"), [t, a]
          }(a)), [a]),
          s = (0, o.useMemo)((() => function(e, t) {
            return e?.[t] ?? {}
          }(t, r[1])), [a, t]);
        return (0, w.jsx)(c.c, {
          messages: s,
          locale: r[0],
          defaultLocale: "en",
          children: n
        }, r[0])
      };

      function h(e, t) {
        return a => {
          const [{
            iso: n
          }] = g();
          return (0, w.jsx)(p, {
            locales: t,
            lang: n,
            children: (0, w.jsx)(e, {
              ...a
            })
          })
        }
      }
      a(3061)
    },
    11e3: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => N
      });
      var n = a(51664),
        r = a(69844),
        s = a(48111),
        o = a(31403),
        c = a(67604),
        i = a(96940),
        l = a(45792),
        d = a(33052),
        u = a(42836),
        m = a(9860),
        b = a(79584),
        f = a(55120),
        g = a(1740);
      const w = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cb04fb2acd10f43aa501729b4d7d26a8.jpg",
        p = {
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
      var h = a(95240);
      const {
        host: x,
        login: k,
        authHost: _,
        clientId: v
      } = (0, l.getScConfigForOrigin)(), S = "error", j = "landing", y = "success", C = "unlinked", T = e => {
        let {
          legalText: t
        } = e;
        return (0, h.jsx)("div", {
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
          successScreen: O,
          jumpLinkId: $,
          legalText: M
        } = e;
        const R = (0, l.useLocale)(),
          L = {
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
                  desktop: (0, g.useGetCdnSource)(N?.image?.sources?.en_us?.desktop) || null,
                  mobile: (0, g.useGetCdnSource)(N?.image?.sources?.en_us?.mobile) || null
                }
              },
              tag: N?.tag || ""
            },
            legalText: M,
            successScreen: {
              body: O?.successContent || "",
              headline: O?.successHeadline || ""
            },
            unlinkedScreen: {
              body: E?.unlinkedContent || "",
              btnText: E?.unlinkedButtonText || "",
              headline: E?.unlinkedHeadline || ""
            }
          },
          {
            CharacterCard: P
          } = m.ProfileSwitcher,
          [W] = (0, r.useSearchParams)(),
          {
            data: B,
            loggedIn: H
          } = (0, u.useRockstarUser)(),
          U = (0, d.useRockstarTokenPing)(),
          A = `https://${x}.rockstargames.com/settings/linkedaccounts`,
          D = (0, l.toScLocaleString)(R),
          F = (0, b.useIntl)(),
          {
            track: z
          } = (0, u.useGtmTrack)(),
          {
            ref: G,
            inView: q
          } = (0, i.cD)({
            threshold: .6
          }),
          K = 1280,
          V = (0, n.createRef)(),
          Y = (0, n.createRef)(),
          J = (0, n.createRef)(),
          Q = (0, n.createRef)(),
          X = (0, n.createRef)(),
          Z = (0, n.createRef)(),
          [ee, te] = (0, n.useState)(),
          [ae, ne] = (0, n.useState)([]),
          [re, se] = (0, n.useState)(!1),
          [oe, ce] = (0, n.useState)(),
          [ie, le] = (0, n.useState)("hidden"),
          [de, ue] = (0, n.useState)("hidden"),
          [me, be] = (0, n.useState)("hidden"),
          [fe, ge] = (0, n.useState)("hidden"),
          [we, pe] = (0, n.useState)(!1),
          [he, xe] = (0, n.useState)("disabled"),
          ke = (0, d.useRockstarToken)(),
          [_e, ve] = (0, n.useState)(j),
          [Se, je] = (0, n.useState)(0),
          [ye, Ce] = (0, n.useState)(0),
          [Te, Ne] = (0, n.useState)(0),
          [Ie, Ee] = (0, n.useState)(0),
          [Oe, $e] = (0, n.useState)(0),
          [Me, Re] = (0, n.useState)(!1),
          [Le, Pe] = (0, n.useState)(!1),
          We = (0, n.useRef)(null),
          Be = (0, n.useRef)(null),
          [He, Ue] = (0, n.useState)({}),
          [Ae, De] = (0, n.useState)(),
          [Fe, ze] = (0, n.useState)(!1),
          [Ge, qe] = (0, n.useState)(!0),
          [Ke, Ve] = (0, n.useState)(L.introScreen.image.sources.mobile || w),
          Ye = `${document.location.pathname}${document.location.search}#${$}`,
          Je = (0, l.usePrevious)(oe),
          Qe = (0, l.usePrevious)(H),
          Xe = () => {
            V.current && Ce(V?.current?.scrollHeight), Y.current && Ne(Y?.current?.scrollHeight), J.current && Ee(J?.current?.scrollHeight), Q.current && $e(Q?.current?.scrollHeight)
          },
          Ze = (e, t) => {
            e === j && (ve(j), t && je(ye), ue("onScreen"), le("hidden"), ge("hidden"), be("hidden")), e === y && (ve(y), t && je(Te), ue("offScreen"), le("visible"), setTimeout((() => {
              ue("hidden")
            }), 300), setTimeout((() => {
              le("onScreen")
            }), 100)), e === S && (ve(S), t && je(Ie), ue("offScreen"), ge("visible"), setTimeout((() => {
              ue("hidden")
            }), 300), setTimeout((() => {
              ge("onScreen")
            }), 100)), e === C && (ve(C), t && je(Oe), ue("offScreen"), be("visible"), setTimeout((() => {
              ue("hidden")
            }), 300), setTimeout((() => {
              be("onScreen")
            }), 100))
          },
          et = e => `https://${_}.rockstargames.com/tpa/${e}/link/?cid=${v}&lang=${D}&returnUrl=${encodeURIComponent(Ye)}&accessToken=${ke}`;
        return (0, n.useEffect)((() => {
          const e = () => {
              window.innerWidth > 2560 && "newswire" !== a ? Ve(L.introScreen.image.sources.mobile || w) : Ve(L.introScreen.image.sources.desktop || w)
            },
            t = () => {
              Xe(), window.innerWidth <= K && !re && (se(!0), Ze(_e, !0)), window.innerWidth > K && re && se(!1), e()
            };
          return se(window.innerWidth <= K), e(), window.addEventListener("resize", t), () => {
            window.removeEventListener("resize", t)
          }
        }), [_e, re, V, Q, J, Y]), (0, n.useEffect)((() => {
          _e === y && Se !== Te ? je(Te) : _e === S && Se !== Ie ? je(Ie) : _e === j && Se !== ye ? je(ye) : _e === C && Se !== Oe && je(Oe)
        }), [Ie, Te, Se, Oe, ye]), (0, n.useEffect)((() => {
          Xe(), Me && _e === y && je(Y?.current?.scrollHeight)
        }), [V, Q, J, Y]), (0, n.useEffect)((() => {
          const e = B?.characters?.gtao;
          ne(e || [])
        }), [B]), (0, n.useEffect)((() => {
          "boolean" != typeof Je && "boolean" != typeof Qe || oe && H && (async () => {
            const {
              result: e
            } = await (0, l.coreScApiFetch)("marketing/engagement/claim/exists", {
              pingBearer: U,
              query: {
                giftId: t
              }
            });
            te(e), ce(!1)
          })()
        }), [oe, H]), (0, n.useEffect)((() => {
          "boolean" == typeof H ? H ? ce(!0) : (ce(!1), ue("onScreen")) : ce(!0)
        }), [H]), (0, n.useEffect)((() => {
          ee ? (Re(!0), Ze(y, !0)) : "boolean" != typeof ee || ee || Ze(j, !0)
        }), [ee]), (0, n.useEffect)((() => {
          q && !we && (z({
            element_placement: "WOC",
            event: "page_section_impression",
            event_action: "impression",
            event_category: "page_section",
            event_label: "WOC"
          }), pe(!0))
        }), [q]), (0, n.useEffect)((() => {
          "onScreen" === ie && z({
            element_placement: "WOC",
            event: "alert_update",
            event_action: "update",
            event_category: "alert",
            event_label: "successful claim",
            o_id: t,
            text: "Almost there!"
          })
        }), [ie]), (0, n.useEffect)((() => {
          "onScreen" === me && z({
            element_placement: "WOC",
            event: "alert_error",
            event_action: "error",
            event_category: "alert",
            event_label: "no linked accounts",
            o_id: t,
            text: "No Qualifying Character Found"
          })
        }), [me]), (0, n.useEffect)((() => {
          "onScreen" === fe && z({
            element_placement: "event_label",
            event: "alert_error",
            event_action: "error",
            event_category: "alert",
            event_label: "something went wrong",
            o_id: t,
            text: "Something went wrong on our end. Please try again in a few minutes."
          })
        }), [fe]), (0, n.useEffect)((() => {
          Z?.current && Pe(Z.current.scrollWidth >= Z.current.offsetWidth)
        }), [Z]), (0, n.useEffect)((() => {
          De({
            nextEl: We.current,
            prevEl: Be.current
          })
        }), [Be, We]), (0, h.jsxs)(h.Fragment, {
          children: [!1, (0, h.jsx)("div", {
            className: p.interestTrackerWrapper,
            children: (0, h.jsxs)(c.q.div, {
              className: [p.interestTracker, oe && p.loader].join(" "),
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
              ref: G,
              id: $ || "",
              children: [(0, h.jsx)("div", {
                className: p.moduleImage,
                style: {
                  "--engagement-image": `url(${Ke})`
                }
              }), (0, h.jsx)("div", {
                className: [p.slideContainer, oe ? p.loader : ""].join(" "),
                ref: X,
                "data-dev-mode": "disabled",
                style: {
                  "--engagement-height": 0 === Se ? "200%" : `${Se}px`,
                  height: 0 !== Se && re ? `${Se}px` : "auto"
                },
                children: oe ? (0, h.jsx)(m.LoadingAnimation, {
                  type: "SPINNING"
                }) : (0, h.jsxs)(h.Fragment, {
                  children: [(0, h.jsxs)("div", {
                    className: [p.contentContainer, p[de], p.landingSlide].join(" "),
                    ref: V,
                    children: [(0, h.jsx)("img", {
                      src: L.introScreen.image.sources.mobile || w,
                      className: p.moduleImageMobile,
                      alt: L.introScreen.image.alt
                    }), (0, h.jsxs)("div", {
                      className: p.topContent,
                      children: [(0, h.jsx)("div", {
                        className: p.textContent,
                        children: (0, h.jsxs)("div", {
                          className: p.alert,
                          children: [(0, h.jsx)("div", {
                            className: p.badge,
                            children: L.introScreen.tag
                          }), (0, h.jsxs)("div", {
                            className: p.alertText,
                            children: [(0, h.jsx)("h2", {
                              children: L.introScreen.headline
                            }), (0, h.jsx)("div", {
                              dangerouslySetInnerHTML: {
                                __html: L.introScreen.body
                              }
                            })]
                          })]
                        })
                      }), (0, h.jsx)("div", {
                        className: p.btnContainer,
                        children: (0, h.jsx)(m.Gen9Button, {
                          text: H ? L.introScreen.btnText.loggedIn : L.introScreen.btnText.loggedOut,
                          onClick: H ? async () => {
                            z({
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
                              utmCampaign: W.get("utm_campaign"),
                              utmContent: W.get("utm_content"),
                              utmMedium: W.get("utm_medium"),
                              utmSource: W.get("utm_source")
                            };
                            if ("disabled" === he)
                              if (ae.length > 0) {
                                const {
                                  status: t
                                } = await (0, l.coreScApiFetch)("marketing/engagement/claim/create", {
                                  fetchOptions: {
                                    method: "POST"
                                  },
                                  pingBearer: U,
                                  query: e
                                }) ?? [];
                                Ze(t ? y : S, !1)
                              } else Ze(C, !1);
                            else "success" === he ? Ze(y, !1) : "error" === he ? Ze(S, !1) : "unlinked" === he && Ze(C, !1)
                          } : () => {
                            const e = `${k}?returnUrl=${encodeURIComponent(Ye)}&lang=${D}`;
                            z({
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
                    }), (0, h.jsx)("div", {
                      className: p.bottomContent,
                      children: (0, h.jsx)("div", {
                        className: p.legal,
                        children: (0, h.jsx)(T, {
                          legalText: L.legalText
                        })
                      })
                    })]
                  }), (0, h.jsxs)("div", {
                    className: [p.contentContainer, p[ie], p.successSlide].join(" "),
                    "data-type": "long",
                    ref: Y,
                    children: [(0, h.jsxs)("div", {
                      className: p.topContent,
                      children: [(0, h.jsxs)("div", {
                        className: p.alert,
                        children: [(0, h.jsx)("div", {
                          className: p.successAlert
                        }), (0, h.jsxs)("div", {
                          className: p.alertText,
                          children: [(0, h.jsx)("h3", {
                            children: L.successScreen.headline
                          }), (0, h.jsx)("div", {
                            dangerouslySetInnerHTML: {
                              __html: L.successScreen.body
                            }
                          })]
                        })]
                      }), (0, h.jsxs)("div", {
                        className: p.swiperWrap,
                        children: [(0, h.jsx)("div", {
                          className: p.swiperContainer,
                          ref: Z,
                          "data-hasoverflow": Le,
                          children: (0, h.jsxs)(s.wx, {
                            loop: !1,
                            grabCursor: Le,
                            slidesPerView: "auto",
                            speed: 700,
                            navigation: Ae,
                            modules: [o._2],
                            onInit: e => {
                              Ue(e)
                            },
                            children: [ae.map((e => (0, h.jsx)(s.Ky, {
                              children: (0, n.createElement)(P, {
                                characterData: e,
                                key: e.mugshotUrl
                              })
                            }, e.mugshotUrl))), (0, h.jsx)(s.Ky, {
                              children: (0, h.jsx)(m.A, {
                                className: [p.linkMore, ae.length > 0 ? p.withIcon : ""].join(" "),
                                to: A,
                                onClick: () => {
                                  z({
                                    element_placement: "WOC",
                                    event: "cta_link_account",
                                    event_action: "link_account",
                                    event_category: "cta",
                                    event_label: "WOC cta",
                                    link_url: A,
                                    text: f.engagement.engagement_link_account.defaultMessage
                                  })
                                },
                                children: (0, h.jsx)("div", {
                                  className: p.btnText,
                                  children: (0, h.jsx)(b.FormattedMessage, {
                                    ...f.engagement.engagement_link_account
                                  })
                                })
                              })
                            }, "linkMore")]
                          })
                        }), (0, h.jsx)("button", {
                          className: p.swiperBtnPrev,
                          "aria-label": "Previous Character",
                          type: "button",
                          ref: Be,
                          onClick: () => {
                            He?.slidePrev(), ze(He?.isEnd), qe(He?.isBeginning)
                          },
                          disabled: Ge,
                          "data-hidden": !Le
                        }), (0, h.jsx)("button", {
                          className: p.swiperBtnNext,
                          "aria-label": "Next Character",
                          type: "button",
                          ref: We,
                          onClick: () => {
                            He?.slideNext(), ze(He?.isEnd), qe(He?.isBeginning)
                          },
                          disabled: Fe,
                          "data-hidden": !Le
                        })]
                      })]
                    }), (0, h.jsx)("div", {
                      className: p.legal,
                      children: (0, h.jsx)(T, {
                        legalText: L.legalText
                      })
                    })]
                  }), (0, h.jsxs)("div", {
                    className: [p.contentContainer, p[me], p.unlinkedSlide, p.textContent].join(" "),
                    ref: Q,
                    children: [(0, h.jsx)("div", {
                      className: p.textContent,
                      children: (0, h.jsxs)("div", {
                        className: p.platformButtonContainer,
                        children: [(0, h.jsx)("div", {
                          className: p.errorAlert
                        }), (0, h.jsx)("h3", {
                          children: L.unlinkedScreen.headline
                        }), (0, h.jsx)(m.ExpandingPlatformButton, {
                          buttonText: F.formatMessage(f.engagement.engagement_link_console_account),
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
                          children: (0, h.jsx)("div", {
                            className: p.alert,
                            children: (0, h.jsx)("div", {
                              className: p.alertText,
                              children: (0, h.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                  __html: L.unlinkedScreen.body
                                }
                              })
                            })
                          })
                        })]
                      })
                    }), (0, h.jsx)("div", {
                      className: p.legal,
                      children: (0, h.jsx)(T, {
                        legalText: L.legalText
                      })
                    })]
                  }), (0, h.jsxs)("div", {
                    className: [p.contentContainer, p[fe], p.errorSlide, p.textContent].join(" "),
                    ref: J,
                    children: [(0, h.jsxs)("div", {
                      className: p.textContent,
                      children: [(0, h.jsxs)("div", {
                        className: p.alert,
                        children: [(0, h.jsx)("div", {
                          className: p.errorAlert
                        }), (0, h.jsx)("div", {
                          className: p.alertText,
                          children: (0, h.jsx)("h3", {
                            children: L.errorScreen.headline
                          })
                        })]
                      }), (0, h.jsx)(m.Gen9Button, {
                        text: L.errorScreen.btnText,
                        onClick: () => window.location.reload()
                      })]
                    }), (0, h.jsx)("div", {
                      className: p.legal,
                      children: (0, h.jsx)(T, {
                        legalText: L.legalText
                      })
                    })]
                  })]
                })
              })]
            })
          })]
        })
      }
    },
    53592: (e, t, a) => {
      a.d(t, {
        U: () => n,
        c: () => s
      });
      const n = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        r = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        s = () => {
          let e;
          const {
            location: t
          } = window, a = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = r.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [n, r] = t;
            return r === a && (e = {
              site: n,
              subDomain: r
            }, !0)
          })) >= 0)), s = r[n >= 0 ? n : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...s,
            currentSite: e
          }
        }
    }
  }
]);