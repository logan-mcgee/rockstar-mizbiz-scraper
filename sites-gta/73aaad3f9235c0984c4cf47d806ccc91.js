"use strict";
(self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [525], {
    7705: (e, t, a) => {
      a.r(t), a.d(t, {
        default: () => E
      });
      var s = a(4859),
        n = a(927),
        r = a(4837),
        i = a(3705);
      const o = e => {
        let {
          basename: t,
          children: a,
          history: s
        } = e;
        const [o, c] = (0, n.useState)({
          action: s.action,
          location: s.location
        });
        return (0, n.useLayoutEffect)((() => s.listen(((e, t) => {
          c({
            location: e,
            action: t
          })
        }))), [s]), (0, i.jsx)(r.Router, {
          basename: t,
          location: o.location,
          navigationType: o.action,
          navigator: s,
          children: a
        })
      };
      var c = a(3619);
      const l = "__MFE_GLOBAL_HOOK__";
      var u = a(668),
        d = a(9929),
        b = a(6711),
        m = a(7661),
        f = a(8269),
        p = a(2474),
        g = a(5921),
        h = a(7421),
        v = a(3509),
        k = a(2420),
        x = a(4463),
        y = a(2435);
      const w = e => {
        let {
          onClick: t,
          ctaLabel: a
        } = e;
        const {
          ctaButtonRef: s
        } = (0, x.TR)();
        return (0, i.jsxs)("button", {
          type: "button",
          className: "rockstargames-sites-gtafe32ab82b94a899a4ec1b7e4fbf734b1",
          ref: s,
          onClick: t,
          "aria-label": "cta",
          children: [(0, i.jsx)("span", {
            className: "rockstargames-sites-gtabbe97a0a526c88364481687b61a403c8",
            children: a
          }), (0, i.jsx)("div", {
            className: "rockstargames-sites-gtae4971974377013b474cfbf687656923a"
          })]
        })
      };
      var T = a(9342),
        _ = a(6820);
      const j = "rockstargames-sites-gtaa799fab6998f229f5b8c00d05b335595";
      m.gsap.registerPlugin(g.i, f.x, p.L);
      const R = () => {
          const {
            loading: e,
            translation: t
          } = (0, x.T_)(), {
            windowWidth: a,
            windowHeight: r
          } = (0, d.useWindowResize)(), {
            mutateLSSettings: o
          } = (0, d.useRockstarWebLSSettings)(), {
            pathname: c
          } = (0, k.useLocation)(), {
            track: l
          } = (0, b.useGtmTrack)(), {
            currentSite: f,
            sites: p
          } = (0, u.Z)(), g = (0, s.useBase)(), R = "/gta-online/license-plates" === c;
          let E;
          E = "promo_banner2";
          const A = (0, n.useRef)(),
            C = (0, n.useRef)(null),
            L = (0, n.useRef)(null),
            N = (0, n.useRef)(null),
            S = (0, n.useRef)(null),
            Z = (0, n.useRef)(null),
            B = (0, n.useRef)(null),
            V = (0, n.useRef)(null),
            {
              ctaButtonRef: P,
              timelines: z,
              addTimeline: I,
              isExpanded: M,
              setIsExpanded: O,
              isInitialExpansion: G,
              doesPageDisplayBanner: H,
              resetVideo: Q
            } = (0, x.TR)();
          (0, n.useEffect)((() => {
            m.gsap.set(window, {
              scrollTo: 0
            })
          }), []);
          const W = (0, n.useCallback)((e => {
            if (!R) {
              const t = document.querySelector("body")?.getAttribute("style")?.includes("--body-overflow: hidden;");
              e.direction === V?.current || t || z?.bannerTimeline.isActive() ? t && e?.animation?.pause() : -1 === e.direction ? e.animation?.reverse() : e.animation?.play();
              const a = "data-show-more-content";
              1 === e.direction ? document.body.setAttribute(a, "") : document.body.removeAttribute(a), V.current = e.direction
            }
          }), [M, z?.bannerTimeline, R]);
          return (0, n.useEffect)((() => {
            const e = m.gsap.context((() => {
              S?.current && !R && m.gsap.to(S.current, {
                yPercent: -100,
                paused: !0,
                duration: .4,
                scrollTrigger: {
                  start: "120px",
                  end: 99999,
                  onUpdate: e => {
                    W(e)
                  }
                }
              })
            }));
            return () => e.revert()
          }), [S?.current, R]), (0, n.useEffect)((() => {
            z?.bannerTimeline && (M ? G ? z.bannerTimeline.progress(1) : z.bannerTimeline.play() : M || G || z.bannerTimeline.reverse())
          }), [M, z?.bannerTimeline]), (0, n.useLayoutEffect)((() => {
            A?.current?.invalidate()
          }), [a, r]), (0, n.useLayoutEffect)((() => {
            const e = m.gsap.context((() => {
              z?.bannerTimeline?.progress(0).kill(), H && (A.current = m.gsap.timeline({
                paused: !0,
                defaults: {
                  duration: y.th.takeover,
                  ease: y.QE.takeover
                },
                onStart: () => {
                  l({
                    event: "takeover_impression",
                    element_placement: E
                  })
                }
              }).fromTo(S.current, {
                height: y.Gg
              }, {
                height: "100vh"
              }).fromTo(L.current, {
                autoAlpha: 1
              }, {
                autoAlpha: 0,
                duration: y.th.default,
                ease: y.QE.default
              }, "<").fromTo(N.current, {
                autoAlpha: .01,
                pointerEvents: "none",
                scale: 1.075
              }, {
                autoAlpha: 1,
                pointerEvents: "auto",
                scale: 1
              }, "<").fromTo([Z.current, B.current], {
                autoAlpha: 0
              }, {
                autoAlpha: 1
              }, "<"), I("bannerTimeline", A?.current))
            }));
            return () => e.revert()
          }), [H]), H ? (0, i.jsx)(h.ZP, {
            disabled: !M,
            children: (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("div", {
                className: "rockstargames-sites-gtaaafb969e7e490ade67cdd31f532ab15b",
                ref: S,
                children: (0, i.jsxs)(v.Z, {
                  allowPinchZoom: !1,
                  enabled: !!M,
                  children: [(0, i.jsxs)("button", {
                    type: "button",
                    className: "rockstargames-sites-gtab04e755696ca409e5e9265c75a1d70ab",
                    ref: L,
                    onClick: () => {
                      O(!0), l({
                        event: "site_banner_click",
                        element_placement: E
                      })
                    },
                    children: [(0, i.jsx)("p", {
                      className: "rockstargames-sites-gtaef774f834d259ac49eb9874eac4447cb",
                      children: t("d2.bannerMsg")
                    }), (0, i.jsx)("p", {
                      className: j,
                      children: t("d2.bannerMob1")
                    }), (0, i.jsx)("p", {
                      className: j,
                      children: t("d2.bannerMob2")
                    })]
                  }), (0, i.jsx)("div", {
                    className: "rockstargames-sites-gtaa032f0013ab3ef4b2a5c9cbcde8fad40",
                    ref: N,
                    children: (0, i.jsx)(_.Z, {})
                  }), (0, i.jsxs)("div", {
                    ref: B,
                    className: "rockstargames-sites-gtab95e30584f20eb079ce8b88ad536479b",
                    children: [(0, i.jsx)(w, {
                      ctaLabel: e ? "" : t("d2.destCTA"),
                      onClick: () => {
                        l({
                          event: "cta_other",
                          element_placement: "banner"
                        }), f?.site === u.z.socialClub ? window.location.href = `https://${p.www}.rockstargames.com/VI` : window.location.href = `${g}VI`
                      }
                    }), (0, i.jsx)(T.Z, {
                      closeRef: C,
                      onClick: () => {
                        O(!1), o({
                          key: y._Z,
                          value: !1
                        }), P.current && m.gsap.to(P.current, {
                          autoAlpha: 0,
                          duration: y.th.playVideo.cta,
                          ease: y.QE.playVideo.cta
                        }), z.bannerTimeline.reverse(), z.bannerTimeline.eventCallback("onReverseComplete", (() => {
                          A.current && z.playVideoTimeline && z.playVideoTimeline.progress(0).pause(), Q()
                        })), l({
                          event: "takeover_close",
                          element_placement: E
                        })
                      }
                    })]
                  })]
                })
              }), (0, i.jsx)("div", {
                ref: Z,
                className: "rockstargames-sites-gtab988c3c578804600ecd2490598a3c967"
              })]
            })
          }) : null
        },
        E = () => {
          const e = (() => {
              const e = window;
              if (e[l]?.history || (() => {
                  const e = window;
                  e[l]?.history || (e[l] = Object.assign(e[l] || {}, {
                    history: (0, c.lX)()
                  }))
                })(), e[l]?.history) return e[l].history;
              throw new Error("Browser History has not been initialised")
            })(),
            t = (0, s.useBase)(),
            {
              currentSite: a
            } = (0, u.Z)(),
            n = a?.site === u.z.socialClub ? "/" : t;
          return (0, i.jsx)(d.ResizeProvider, {
            children: (0, i.jsx)(o, {
              history: e,
              basename: n,
              children: (0, i.jsx)(x.A1, {
                children: (0, i.jsx)(R, {})
              })
            })
          })
        }
    }
  }
]);