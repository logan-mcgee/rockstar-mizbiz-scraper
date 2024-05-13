! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7c16c68b-9333-4e1b-89a9-a87ae7f45a17", e._sentryDebugIdIdentifier = "sentry-dbid-7c16c68b-9333-4e1b-89a9-a87ae7f45a17")
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
  [380], {
    26724: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => S
      });
      var s = a(33052),
        o = a(81968),
        r = a.n(o),
        n = a(19940);
      const l = "__MFE_GLOBAL_HOOK__";
      var c = a(53592),
        i = a(45792),
        d = a(41272);
      const m = JSON.parse('{"us":{"home_text":"Home","rockstar_games_logo_alt_text":"Rockstar Games Logo"},"de":{"home_text":"Startseite","rockstar_games_logo_alt_text":"Rockstar-Games-Logo"},"es":{"home_text":"Inicio","rockstar_games_logo_alt_text":"Logo de Rockstar Games"},"mx":{"home_text":"Inicio","rockstar_games_logo_alt_text":"Logo de Rockstar Games"},"fr":{"home_text":"Accueil","rockstar_games_logo_alt_text":"Logo Rockstar Games"},"it":{"home_text":"Home","rockstar_games_logo_alt_text":"Logo di Rockstar Games"},"jp":{"home_text":"ホーム","rockstar_games_logo_alt_text":"ロックスター・ゲームスロゴ"},"kr":{"home_text":"홈","rockstar_games_logo_alt_text":"Rockstar Games 로고"},"pl":{"home_text":"Strona główna","rockstar_games_logo_alt_text":"Logo Rockstar Games"},"br":{"home_text":"Início","rockstar_games_logo_alt_text":"Logotipo da Rockstar Games"},"ru":{"home_text":"Главная страница","rockstar_games_logo_alt_text":"Логотип Rockstar Games"},"hans":{"home_text":"主页","rockstar_games_logo_alt_text":"Rockstar Games 标志"},"tw":{"home_text":"首頁","rockstar_games_logo_alt_text":"Rockstar Games 標誌"}}');
      var _ = a(42836),
        g = a(67356),
        u = a(6960),
        f = a(67840),
        b = a(73344),
        k = a(51664),
        h = a(36960),
        p = a.n(h),
        x = a(77328),
        w = a(4872),
        y = a(28008);
      var v = a(95240);
      const R = e => {
        let {
          onClick: t,
          ctaLabel: a
        } = e;
        const {
          ctaButtonRef: s
        } = (0, w.m_)();
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
      var j = a(19e3),
        E = a(24588);
      const T = "rockstargames-sites-gtaa799fab6998f229f5b8c00d05b335595";
      g.gsap.registerPlugin(b.W, u.m, f.M);
      const L = () => {
          const {
            loading: e,
            translation: t
          } = (0, w.A1)(), {
            windowWidth: a,
            windowHeight: o
          } = (0, i.useWindowResize)(), {
            mutateLSSettings: r
          } = (0, i.useRockstarWebLSSettings)(), {
            track: n
          } = (0, _.useGtmTrack)(), {
            currentSite: l,
            sites: d
          } = (0, c.c)(), m = (0, s.useBase)();
          let u;
          u = "promo_banner2";
          const f = (0, k.useRef)(),
            b = (0, k.useRef)(null),
            h = (0, k.useRef)(null),
            L = (0, k.useRef)(null),
            S = (0, k.useRef)(null),
            G = (0, k.useRef)(null),
            N = (0, k.useRef)(null),
            {
              ctaButtonRef: I,
              timelines: A,
              addTimeline: C,
              isExpanded: M,
              setIsExpanded: B,
              isInitialExpansion: V,
              doesPageDisplayBanner: D,
              resetVideo: H
            } = (0, w.m_)();
          return (0, k.useEffect)((() => {
            g.gsap.set(window, {
              scrollTo: 0
            })
          }), []), (0, k.useEffect)((() => {
            A?.bannerTimeline && (M ? V ? A.bannerTimeline.progress(1) : A.bannerTimeline.play() : M || V || A.bannerTimeline.reverse())
          }), [M, A?.bannerTimeline]), (0, k.useLayoutEffect)((() => {
            f?.current?.invalidate()
          }), [a, o]), (0, k.useLayoutEffect)((() => {
            const e = g.gsap.context((() => {
              A?.bannerTimeline?.progress(0).kill(), D && (f.current = g.gsap.timeline({
                paused: !0,
                defaults: {
                  duration: y.Sg.takeover,
                  ease: y.EB.takeover,
                  force3D: !0
                },
                onStart: () => {
                  n({
                    event: "takeover_impression",
                    element_placement: u
                  })
                }
              }).fromTo(S.current, {
                height: y.Kw
              }, {
                height: "100vh"
              }).fromTo(h.current, {
                autoAlpha: 1
              }, {
                autoAlpha: 0,
                duration: y.Sg.default,
                ease: y.EB.default
              }, "<").fromTo(L.current, {
                autoAlpha: .01,
                pointerEvents: "none",
                scale: 1.075
              }, {
                autoAlpha: 1,
                pointerEvents: "auto",
                scale: 1
              }, "<").fromTo([G.current, N.current], {
                autoAlpha: 0
              }, {
                autoAlpha: 1
              }, "<"), C("bannerTimeline", f?.current))
            }));
            return () => e.revert()
          }), [D]), D ? (0, v.jsx)(p(), {
            disabled: !M,
            children: (0, v.jsxs)(v.Fragment, {
              children: [(0, v.jsx)("div", {
                className: "rockstargames-sites-gtaaafb969e7e490ade67cdd31f532ab15b",
                ref: S,
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
                    ref: L,
                    children: (0, v.jsx)(E.c, {})
                  }), (0, v.jsxs)("div", {
                    ref: N,
                    className: "rockstargames-sites-gtab95e30584f20eb079ce8b88ad536479b",
                    children: [(0, v.jsx)(R, {
                      ctaLabel: e ? "" : t("d2.destCTA"),
                      onClick: () => {
                        n({
                          event: "cta_other",
                          element_placement: "banner"
                        }), l?.site === c.U.socialClub ? window.location.href = `https://${d.www}.rockstargames.com/VI` : window.location.href = `${m}VI`
                      }
                    }), (0, v.jsx)(j.c, {
                      closeRef: b,
                      onClick: () => {
                        B(!1), r({
                          key: y.sn,
                          value: !1
                        }), I.current && g.gsap.to(I.current, {
                          autoAlpha: 0,
                          duration: y.Sg.playVideo.cta,
                          ease: y.EB.playVideo.cta
                        }), A.bannerTimeline.reverse(), A.bannerTimeline.eventCallback("onReverseComplete", (() => {
                          f.current && A.playVideoTimeline && A.playVideoTimeline.progress(0).pause(), H()
                        })), n({
                          event: "takeover_close",
                          element_placement: u
                        })
                      }
                    })]
                  })]
                })
              }), (0, v.jsx)("div", {
                ref: G,
                className: "rockstargames-sites-gtab988c3c578804600ecd2490598a3c967"
              })]
            })
          }) : null
        },
        S = (0, d.withIntl)((() => {
          const e = (() => {
              const e = window;
              if (e[l]?.history || (() => {
                  const e = window;
                  e[l]?.history || (e[l] = Object.assign(e[l] || {}, {
                    history: (0, n.iU)()
                  }))
                })(), e[l]?.history) return e[l].history;
              throw new Error("Browser History has not been initialised")
            })(),
            t = (0, s.useBase)(),
            {
              currentSite: a
            } = (0, c.c)(),
            o = a?.site === c.U.socialClub ? "/" : t;
          return (0, v.jsx)(i.ResizeProvider, {
            children: (0, v.jsx)(r(), {
              history: e,
              basename: o,
              children: (0, v.jsx)(w._s, {
                children: (0, v.jsx)(L, {})
              })
            })
          })
        }), m)
    }
  }
]);