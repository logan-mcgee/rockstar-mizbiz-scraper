! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a1721929-3834-49ef-9613-2737a136b4b5", e._sentryDebugIdIdentifier = "sentry-dbid-a1721929-3834-49ef-9613-2737a136b4b5")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [932], {
    796: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => I
      });
      var s = a(8407),
        o = a(5301),
        r = a.n(o),
        n = a(600);
      const l = "__MFE_GLOBAL_HOOK__";
      var c = a(3963),
        i = a(2756),
        d = a(6717);
      const m = JSON.parse('{"us":{"home_text":"Home","rockstar_games_logo_alt_text":"Rockstar Games Logo"},"de":{"home_text":"Startseite","rockstar_games_logo_alt_text":"Rockstar-Games-Logo"},"es":{"home_text":"Inicio","rockstar_games_logo_alt_text":"Logo de Rockstar Games"},"mx":{"home_text":"Inicio","rockstar_games_logo_alt_text":"Logo de Rockstar Games"},"fr":{"home_text":"Accueil","rockstar_games_logo_alt_text":"Logo Rockstar Games"},"it":{"home_text":"Home","rockstar_games_logo_alt_text":"Logo di Rockstar Games"},"jp":{"home_text":"ホーム","rockstar_games_logo_alt_text":"ロックスター・ゲームスロゴ"},"kr":{"home_text":"홈","rockstar_games_logo_alt_text":"Rockstar Games 로고"},"pl":{"home_text":"Strona główna","rockstar_games_logo_alt_text":"Logo Rockstar Games"},"br":{"home_text":"Início","rockstar_games_logo_alt_text":"Logotipo da Rockstar Games"},"ru":{"home_text":"Главная страница","rockstar_games_logo_alt_text":"Логотип Rockstar Games"},"hans":{"home_text":"主页","rockstar_games_logo_alt_text":"Rockstar Games 标志"},"tw":{"home_text":"首頁","rockstar_games_logo_alt_text":"Rockstar Games 標誌"}}');
      var _ = a(207),
        g = a(6040),
        u = a(8281),
        b = a(3134),
        f = a(4781),
        k = a(1403),
        h = a(6864),
        p = a.n(h),
        x = a(7460),
        w = a(5186),
        y = a(7679);
      var v = a(6632);
      const R = e => {
        let {
          onClick: t,
          ctaLabel: a
        } = e;
        const {
          ctaButtonRef: s
        } = (0, w.I2)();
        return (0, v.jsxs)("button", {
          type: "button",
          className: "rockstargames-sites-gtafe32ab82b94a899a4ec1b7e4fbf734b1",
          ref: s,
          onClick: t,
          "aria-label": "cta",
          children: [(0, v.jsx)("span", {
            className: "rockstargames-sites-gtabbe97a0a526c88364481687b61a403c8",
            children: a
          }), (0, v.jsx)("div", {
            className: "rockstargames-sites-gtae4971974377013b474cfbf687656923a"
          })]
        })
      };
      var j = a(1744),
        L = a(5190);
      const T = "rockstargames-sites-gtaa799fab6998f229f5b8c00d05b335595";
      g.gsap.registerPlugin(f.u, u.R, b.I);
      const E = () => {
          const {
            loading: e,
            translation: t
          } = (0, w.c3)(), {
            windowWidth: a,
            windowHeight: o
          } = (0, i.useWindowResize)(), {
            mutateLSSettings: r
          } = (0, i.useRockstarWebLSSettings)(), {
            track: n
          } = (0, _.useGtmTrack)(), {
            currentSite: l,
            sites: d
          } = (0, c.A)(), m = (0, s.useBase)(), u = "promo_banner2", b = (0, k.useRef)(), f = (0, k.useRef)(null), h = (0, k.useRef)(null), E = (0, k.useRef)(null), I = (0, k.useRef)(null), A = (0, k.useRef)(null), C = (0, k.useRef)(null), {
            ctaButtonRef: G,
            timelines: N,
            addTimeline: S,
            isExpanded: M,
            setIsExpanded: B,
            isInitialExpansion: D,
            doesPageDisplayBanner: V,
            resetVideo: H
          } = (0, w.I2)();
          if ((0, k.useEffect)((() => {
              g.gsap.set(window, {
                scrollTo: 0
              })
            }), []), (0, k.useEffect)((() => {
              N?.bannerTimeline && (M ? D ? N.bannerTimeline.progress(1) : N.bannerTimeline.play() : M || D || N.bannerTimeline.reverse())
            }), [M, N?.bannerTimeline]), (0, k.useLayoutEffect)((() => {
              b?.current?.invalidate()
            }), [a, o]), (0, k.useLayoutEffect)((() => {
              const e = g.gsap.context((() => {
                N?.bannerTimeline?.progress(0).kill(), V && (b.current = g.gsap.timeline({
                  paused: !0,
                  defaults: {
                    duration: y.ft.takeover,
                    ease: y.Le.takeover,
                    force3D: !0
                  },
                  onStart: () => {
                    n({
                      event: "takeover_impression",
                      element_placement: u
                    })
                  }
                }).fromTo(I.current, {
                  height: y.HS
                }, {
                  height: "100vh"
                }).fromTo(h.current, {
                  autoAlpha: 1
                }, {
                  autoAlpha: 0,
                  duration: y.ft.default,
                  ease: y.Le.default
                }, "<").fromTo(E.current, {
                  autoAlpha: .01,
                  pointerEvents: "none",
                  scale: 1.075
                }, {
                  autoAlpha: 1,
                  pointerEvents: "auto",
                  scale: 1
                }, "<").fromTo([A.current, C.current], {
                  autoAlpha: 0
                }, {
                  autoAlpha: 1
                }, "<"), S("bannerTimeline", b?.current))
              }));
              return () => e.revert()
            }), [V]), !V) return null;
          let O = null;
          return O = p(), (0, v.jsx)(O, {
            disabled: !M,
            children: (0, v.jsxs)("div", {
              children: [(0, v.jsx)("div", {
                className: "rockstargames-sites-gtaaafb969e7e490ade67cdd31f532ab15b",
                ref: I,
                children: (0, v.jsxs)(x.RemoveScroll, {
                  allowPinchZoom: !1,
                  enabled: !!M,
                  children: [(0, v.jsxs)("button", {
                    type: "button",
                    className: "rockstargames-sites-gtab04e755696ca409e5e9265c75a1d70ab",
                    ref: h,
                    onClick: () => {
                      B(!0), n({
                        event: "site_banner_click",
                        element_placement: u
                      })
                    },
                    children: [(0, v.jsx)("p", {
                      className: "rockstargames-sites-gtaef774f834d259ac49eb9874eac4447cb",
                      children: t("d2.bannerMsg")
                    }), (0, v.jsx)("p", {
                      className: T,
                      children: t("d2.bannerMob1")
                    }), (0, v.jsx)("p", {
                      className: T,
                      children: t("d2.bannerMob2")
                    })]
                  }), (0, v.jsx)("div", {
                    className: "rockstargames-sites-gtaa032f0013ab3ef4b2a5c9cbcde8fad40",
                    ref: E,
                    children: (0, v.jsx)(L.A, {})
                  }), (0, v.jsxs)("div", {
                    ref: C,
                    className: "rockstargames-sites-gtab95e30584f20eb079ce8b88ad536479b",
                    children: [(0, v.jsx)(R, {
                      ctaLabel: e ? "" : t("d2.destCTA"),
                      onClick: () => {
                        n({
                          event: "cta_other",
                          element_placement: "banner"
                        }), l?.site === c.C.socialClub ? window.location.href = `https://${d.www}.rockstargames.com/VI` : window.location.href = `${m}VI`
                      }
                    }), (0, v.jsx)(j.A, {
                      closeRef: f,
                      onClick: () => {
                        B(!1), r({
                          key: y.uD,
                          value: !1
                        }), G.current && g.gsap.to(G.current, {
                          autoAlpha: 0,
                          duration: y.ft.playVideo.cta,
                          ease: y.Le.playVideo.cta
                        }), N.bannerTimeline.reverse(), N.bannerTimeline.eventCallback("onReverseComplete", (() => {
                          b.current && N.playVideoTimeline && N.playVideoTimeline.progress(0).pause(), H()
                        })), n({
                          event: "takeover_close",
                          element_placement: u
                        })
                      }
                    })]
                  })]
                })
              }), (0, v.jsx)("div", {
                ref: A,
                className: "rockstargames-sites-gtab988c3c578804600ecd2490598a3c967"
              })]
            })
          })
        },
        I = (0, d.withIntl)((() => {
          const e = (() => {
              const e = window;
              if (e[l]?.history || (() => {
                  const e = window;
                  e[l]?.history || (e[l] = Object.assign(e[l] || {}, {
                    history: (0, n.zR)()
                  }))
                })(), e[l]?.history) return e[l].history;
              throw new Error("Browser History has not been initialised")
            })(),
            t = (0, s.useBase)(),
            {
              currentSite: a
            } = (0, c.A)(),
            o = a?.site === c.C.socialClub ? "/" : t;
          return (0, v.jsx)(i.ResizeProvider, {
            children: (0, v.jsx)(r(), {
              history: e,
              basename: o,
              children: (0, v.jsx)(w.Yd, {
                children: (0, v.jsx)(E, {})
              })
            })
          })
        }), m)
    }
  }
]);