! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "ac889db6-b663-4d24-8a50-c828f79a727d", e._sentryDebugIdIdentifier = "sentry-dbid-ac889db6-b663-4d24-8a50-c828f79a727d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [380], {
    26724: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => S
      });
      var s = t(33052),
        o = t(81968),
        r = t.n(o),
        n = t(19940);
      const l = "__MFE_GLOBAL_HOOK__";
      var c = t(53592),
        i = t(45792),
        d = t(41272);
      const m = JSON.parse('{"us":{"home_text":"Home","rockstar_games_logo_alt_text":"Rockstar Games Logo"},"de":{"home_text":"Startseite","rockstar_games_logo_alt_text":"Rockstar-Games-Logo"},"es":{"home_text":"Inicio","rockstar_games_logo_alt_text":"Logo de Rockstar Games"},"mx":{"home_text":"Inicio","rockstar_games_logo_alt_text":"Logo de Rockstar Games"},"fr":{"home_text":"Accueil","rockstar_games_logo_alt_text":"Logo Rockstar Games"},"it":{"home_text":"Home","rockstar_games_logo_alt_text":"Logo di Rockstar Games"},"jp":{"home_text":"ホーム","rockstar_games_logo_alt_text":"ロックスター・ゲームスロゴ"},"kr":{"home_text":"홈","rockstar_games_logo_alt_text":"Rockstar Games 로고"},"pl":{"home_text":"Strona główna","rockstar_games_logo_alt_text":"Logo Rockstar Games"},"br":{"home_text":"Início","rockstar_games_logo_alt_text":"Logotipo da Rockstar Games"},"ru":{"home_text":"Главная страница","rockstar_games_logo_alt_text":"Логотип Rockstar Games"},"hans":{"home_text":"主页","rockstar_games_logo_alt_text":"Rockstar Games 标志"},"tw":{"home_text":"首頁","rockstar_games_logo_alt_text":"Rockstar Games 標誌"}}');
      var _ = t(42836),
        g = t(67356),
        u = t(6960),
        b = t(67840),
        f = t(73344),
        k = t(51664),
        h = t(36960),
        p = t.n(h),
        x = t(77328),
        w = t(4872),
        y = t(28008);
      var v = t(95240);
      const R = e => {
        let {
          onClick: a,
          ctaLabel: t
        } = e;
        const {
          ctaButtonRef: s
        } = (0, w.m_)();
        return (0, v.jsxs)("button", {
          type: "button",
          className: "rockstargames-sites-gtafe32ab82b94a899a4ec1b7e4fbf734b1",
          ref: s,
          onClick: a,
          "aria-label": "cta",
          children: [(0, v.jsx)("span", {
            className: "rockstargames-sites-gtabbe97a0a526c88364481687b61a403c8",
            children: t
          }), (0, v.jsx)("div", {
            className: "rockstargames-sites-gtae4971974377013b474cfbf687656923a"
          })]
        })
      };
      var j = t(19e3),
        E = t(24588);
      const T = "rockstargames-sites-gtaa799fab6998f229f5b8c00d05b335595";
      g.gsap.registerPlugin(f.W, u.m, b.M);
      const L = () => {
          const {
            loading: e,
            translation: a
          } = (0, w.A1)(), {
            windowWidth: t,
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
          const b = (0, k.useRef)(),
            f = (0, k.useRef)(null),
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
            b?.current?.invalidate()
          }), [t, o]), (0, k.useLayoutEffect)((() => {
            const e = g.gsap.context((() => {
              A?.bannerTimeline?.progress(0).kill(), D && (b.current = g.gsap.timeline({
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
              }, "<"), C("bannerTimeline", b?.current))
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
                      children: a("d2.bannerMsg")
                    }), (0, v.jsx)("p", {
                      className: T,
                      children: a("d2.bannerMob1")
                    }), (0, v.jsx)("p", {
                      className: T,
                      children: a("d2.bannerMob2")
                    })]
                  }), (0, v.jsx)("div", {
                    className: "rockstargames-sites-gtaa032f0013ab3ef4b2a5c9cbcde8fad40",
                    ref: L,
                    children: (0, v.jsx)(E.c, {})
                  }), (0, v.jsxs)("div", {
                    ref: N,
                    className: "rockstargames-sites-gtab95e30584f20eb079ce8b88ad536479b",
                    children: [(0, v.jsx)(R, {
                      ctaLabel: e ? "" : a("d2.destCTA"),
                      onClick: () => {
                        n({
                          event: "cta_other",
                          element_placement: "banner"
                        }), l?.site === c.U.socialClub ? window.location.href = `https://${d.www}.rockstargames.com/VI` : window.location.href = `${m}VI`
                      }
                    }), (0, v.jsx)(j.c, {
                      closeRef: f,
                      onClick: () => {
                        B(!1), r({
                          key: y.sn,
                          value: !1
                        }), I.current && g.gsap.to(I.current, {
                          autoAlpha: 0,
                          duration: y.Sg.playVideo.cta,
                          ease: y.EB.playVideo.cta
                        }), A.bannerTimeline.reverse(), A.bannerTimeline.eventCallback("onReverseComplete", (() => {
                          b.current && A.playVideoTimeline && A.playVideoTimeline.progress(0).pause(), H()
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
            a = (0, s.useBase)(),
            {
              currentSite: t
            } = (0, c.c)(),
            o = t?.site === c.U.socialClub ? "/" : a;
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
//# sourceMappingURL=80e75a1af9b3e1ea586cbcd88229fe68.js.map