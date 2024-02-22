! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7d29139f-9818-4bc0-a59f-6ad7f65ea2b4", e._sentryDebugIdIdentifier = "sentry-dbid-7d29139f-9818-4bc0-a59f-6ad7f65ea2b4")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "5e225a56a96343405c858680af91190e5116b19e",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "5e225a56a96343405c858680af91190e5116b19e"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [312], {
    4244: (e, a, s) => {
      s.r(a), s.d(a, {
        default: () => R
      });
      var t = s(3052),
        n = s(528),
        r = s.n(n),
        o = s(1772);
      const i = "__MFE_GLOBAL_HOOK__";
      var l = s(7019),
        c = s(5792),
        d = s(2836),
        u = s(8268),
        f = s(2016),
        b = s(7544),
        g = s(8495),
        m = s(8200),
        p = s(8712),
        h = s.n(p),
        w = s(7328),
        _ = s(804),
        k = s(6992);
      var y = s(3480);
      const v = e => {
        let {
          onClick: a,
          ctaLabel: s
        } = e;
        const {
          ctaButtonRef: t
        } = (0, _.m_)();
        return (0, y.jsxs)("button", {
          type: "button",
          className: "rockstargames-sites-gtafe32ab82b94a899a4ec1b7e4fbf734b1",
          ref: t,
          onClick: a,
          "aria-label": "cta",
          children: [(0, y.jsx)("span", {
            className: "rockstargames-sites-gtabbe97a0a526c88364481687b61a403c8",
            children: s
          }), (0, y.jsx)("div", {
            className: "rockstargames-sites-gtae4971974377013b474cfbf687656923a"
          })]
        })
      };
      var x = s(252),
        j = s(4020);
      const E = "rockstargames-sites-gtaa799fab6998f229f5b8c00d05b335595";
      u.gsap.registerPlugin(g.W, f.m, b.M);
      const T = () => {
          const {
            loading: e,
            translation: a
          } = (0, _.A1)(), {
            windowWidth: s,
            windowHeight: n
          } = (0, c.useWindowResize)(), {
            mutateLSSettings: r
          } = (0, c.useRockstarWebLSSettings)(), {
            track: o
          } = (0, d.useGtmTrack)(), {
            currentSite: i,
            sites: f
          } = (0, l.c)(), b = (0, t.useBase)();
          let g;
          g = "promo_banner2";
          const p = (0, m.useRef)(),
            T = (0, m.useRef)(null),
            R = (0, m.useRef)(null),
            N = (0, m.useRef)(null),
            S = (0, m.useRef)(null),
            C = (0, m.useRef)(null),
            A = (0, m.useRef)(null),
            {
              ctaButtonRef: M,
              timelines: B,
              addTimeline: I,
              isExpanded: L,
              setIsExpanded: V,
              isInitialExpansion: D,
              doesPageDisplayBanner: O,
              resetVideo: P
            } = (0, _.m_)();
          return (0, m.useEffect)((() => {
            u.gsap.set(window, {
              scrollTo: 0
            })
          }), []), (0, m.useEffect)((() => {
            B?.bannerTimeline && (L ? D ? B.bannerTimeline.progress(1) : B.bannerTimeline.play() : L || D || B.bannerTimeline.reverse())
          }), [L, B?.bannerTimeline]), (0, m.useLayoutEffect)((() => {
            p?.current?.invalidate()
          }), [s, n]), (0, m.useLayoutEffect)((() => {
            const e = u.gsap.context((() => {
              B?.bannerTimeline?.progress(0).kill(), O && (p.current = u.gsap.timeline({
                paused: !0,
                defaults: {
                  duration: k.Sg.takeover,
                  ease: k.EB.takeover,
                  force3D: !0
                },
                onStart: () => {
                  o({
                    event: "takeover_impression",
                    element_placement: g
                  })
                }
              }).fromTo(S.current, {
                height: k.Kw
              }, {
                height: "100vh"
              }).fromTo(R.current, {
                autoAlpha: 1
              }, {
                autoAlpha: 0,
                duration: k.Sg.default,
                ease: k.EB.default
              }, "<").fromTo(N.current, {
                autoAlpha: .01,
                pointerEvents: "none",
                scale: 1.075
              }, {
                autoAlpha: 1,
                pointerEvents: "auto",
                scale: 1
              }, "<").fromTo([C.current, A.current], {
                autoAlpha: 0
              }, {
                autoAlpha: 1
              }, "<"), I("bannerTimeline", p?.current))
            }));
            return () => e.revert()
          }), [O]), O ? (0, y.jsx)(h(), {
            disabled: !L,
            children: (0, y.jsxs)(y.Fragment, {
              children: [(0, y.jsx)("div", {
                className: "rockstargames-sites-gtaaafb969e7e490ade67cdd31f532ab15b",
                ref: S,
                children: (0, y.jsxs)(w.RemoveScroll, {
                  allowPinchZoom: !1,
                  enabled: !!L,
                  children: [(0, y.jsxs)("button", {
                    type: "button",
                    className: "rockstargames-sites-gtab04e755696ca409e5e9265c75a1d70ab",
                    ref: R,
                    onClick: () => {
                      V(!0), o({
                        event: "site_banner_click",
                        element_placement: g
                      })
                    },
                    children: [(0, y.jsx)("p", {
                      className: "rockstargames-sites-gtaef774f834d259ac49eb9874eac4447cb",
                      children: a("d2.bannerMsg")
                    }), (0, y.jsx)("p", {
                      className: E,
                      children: a("d2.bannerMob1")
                    }), (0, y.jsx)("p", {
                      className: E,
                      children: a("d2.bannerMob2")
                    })]
                  }), (0, y.jsx)("div", {
                    className: "rockstargames-sites-gtaa032f0013ab3ef4b2a5c9cbcde8fad40",
                    ref: N,
                    children: (0, y.jsx)(j.c, {})
                  }), (0, y.jsxs)("div", {
                    ref: A,
                    className: "rockstargames-sites-gtab95e30584f20eb079ce8b88ad536479b",
                    children: [(0, y.jsx)(v, {
                      ctaLabel: e ? "" : a("d2.destCTA"),
                      onClick: () => {
                        o({
                          event: "cta_other",
                          element_placement: "banner"
                        }), i?.site === l.U.socialClub ? window.location.href = `https://${f.www}.rockstargames.com/VI` : window.location.href = `${b}VI`
                      }
                    }), (0, y.jsx)(x.c, {
                      closeRef: T,
                      onClick: () => {
                        V(!1), r({
                          key: k.sn,
                          value: !1
                        }), M.current && u.gsap.to(M.current, {
                          autoAlpha: 0,
                          duration: k.Sg.playVideo.cta,
                          ease: k.EB.playVideo.cta
                        }), B.bannerTimeline.reverse(), B.bannerTimeline.eventCallback("onReverseComplete", (() => {
                          p.current && B.playVideoTimeline && B.playVideoTimeline.progress(0).pause(), P()
                        })), o({
                          event: "takeover_close",
                          element_placement: g
                        })
                      }
                    })]
                  })]
                })
              }), (0, y.jsx)("div", {
                ref: C,
                className: "rockstargames-sites-gtab988c3c578804600ecd2490598a3c967"
              })]
            })
          }) : null
        },
        R = () => {
          const e = (() => {
              const e = window;
              if (e[i]?.history || (() => {
                  const e = window;
                  e[i]?.history || (e[i] = Object.assign(e[i] || {}, {
                    history: (0, o.iU)()
                  }))
                })(), e[i]?.history) return e[i].history;
              throw new Error("Browser History has not been initialised")
            })(),
            a = (0, t.useBase)(),
            {
              currentSite: s
            } = (0, l.c)(),
            n = s?.site === l.U.socialClub ? "/" : a;
          return (0, y.jsx)(c.ResizeProvider, {
            children: (0, y.jsx)(r(), {
              history: e,
              basename: n,
              children: (0, y.jsx)(_._s, {
                children: (0, y.jsx)(T, {})
              })
            })
          })
        }
    }
  }
]);
//# sourceMappingURL=61f40c8c3286e90c74d5f3a093e9be57.js.map