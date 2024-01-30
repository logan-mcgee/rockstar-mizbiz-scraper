"use strict";
(self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [525], {
    7705: (e, a, t) => {
      t.r(a), t.d(a, {
        default: () => R
      });
      var s = t(4859),
        n = t(927),
        r = t(4837),
        i = t(3705);
      const o = e => {
        let {
          basename: a,
          children: t,
          history: s
        } = e;
        const [o, c] = (0, n.useState)({
          action: s.action,
          location: s.location
        });
        return (0, n.useLayoutEffect)((() => s.listen(((e, a) => {
          c({
            location: e,
            action: a
          })
        }))), [s]), (0, i.jsx)(r.Router, {
          basename: a,
          location: o.location,
          navigationType: o.action,
          navigator: s,
          children: t
        })
      };
      var c = t(3619);
      const l = "__MFE_GLOBAL_HOOK__";
      var u = t(668),
        d = t(9929),
        b = t(6711),
        m = t(7661),
        f = t(8269),
        h = t(2474),
        g = t(5921),
        p = t(7421),
        k = t(3509),
        v = t(4463),
        x = t(2435);
      const w = e => {
        let {
          onClick: a,
          ctaLabel: t
        } = e;
        const {
          ctaButtonRef: s
        } = (0, v.TR)();
        return (0, i.jsxs)("button", {
          type: "button",
          className: "rockstargames-sites-gtafe32ab82b94a899a4ec1b7e4fbf734b1",
          ref: s,
          onClick: a,
          "aria-label": "cta",
          children: [(0, i.jsx)("span", {
            className: "rockstargames-sites-gtabbe97a0a526c88364481687b61a403c8",
            children: t
          }), (0, i.jsx)("div", {
            className: "rockstargames-sites-gtae4971974377013b474cfbf687656923a"
          })]
        })
      };
      var _ = t(9342),
        j = t(6820);
      const T = "rockstargames-sites-gtaa799fab6998f229f5b8c00d05b335595";
      m.gsap.registerPlugin(g.i, f.x, h.L);
      const y = () => {
          const {
            loading: e,
            translation: a
          } = (0, v.T_)(), {
            windowWidth: t,
            windowHeight: r
          } = (0, d.useWindowResize)(), {
            mutateLSSettings: o
          } = (0, d.useRockstarWebLSSettings)(), {
            track: c
          } = (0, b.useGtmTrack)(), {
            currentSite: l,
            sites: f
          } = (0, u.Z)(), h = (0, s.useBase)();
          let g;
          g = "promo_banner2";
          const y = (0, n.useRef)(),
            R = (0, n.useRef)(null),
            E = (0, n.useRef)(null),
            C = (0, n.useRef)(null),
            N = (0, n.useRef)(null),
            A = (0, n.useRef)(null),
            L = (0, n.useRef)(null),
            {
              ctaButtonRef: S,
              timelines: Z,
              addTimeline: B,
              isExpanded: V,
              setIsExpanded: P,
              isInitialExpansion: z,
              doesPageDisplayBanner: I,
              resetVideo: M
            } = (0, v.TR)();
          return (0, n.useEffect)((() => {
            m.gsap.set(window, {
              scrollTo: 0
            })
          }), []), (0, n.useEffect)((() => {
            Z?.bannerTimeline && (V ? z ? Z.bannerTimeline.progress(1) : Z.bannerTimeline.play() : V || z || Z.bannerTimeline.reverse())
          }), [V, Z?.bannerTimeline]), (0, n.useLayoutEffect)((() => {
            y?.current?.invalidate()
          }), [t, r]), (0, n.useLayoutEffect)((() => {
            const e = m.gsap.context((() => {
              Z?.bannerTimeline?.progress(0).kill(), I && (y.current = m.gsap.timeline({
                paused: !0,
                defaults: {
                  duration: x.th.takeover,
                  ease: x.QE.takeover,
                  force3D: !0
                },
                onStart: () => {
                  c({
                    event: "takeover_impression",
                    element_placement: g
                  })
                }
              }).fromTo(N.current, {
                height: x.Gg
              }, {
                height: "100vh"
              }).fromTo(E.current, {
                autoAlpha: 1
              }, {
                autoAlpha: 0,
                duration: x.th.default,
                ease: x.QE.default
              }, "<").fromTo(C.current, {
                autoAlpha: .01,
                pointerEvents: "none",
                scale: 1.075
              }, {
                autoAlpha: 1,
                pointerEvents: "auto",
                scale: 1
              }, "<").fromTo([A.current, L.current], {
                autoAlpha: 0
              }, {
                autoAlpha: 1
              }, "<"), B("bannerTimeline", y?.current))
            }));
            return () => e.revert()
          }), [I]), I ? (0, i.jsx)(p.ZP, {
            disabled: !V,
            children: (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)("div", {
                className: "rockstargames-sites-gtaaafb969e7e490ade67cdd31f532ab15b",
                ref: N,
                children: (0, i.jsxs)(k.Z, {
                  allowPinchZoom: !1,
                  enabled: !!V,
                  children: [(0, i.jsxs)("button", {
                    type: "button",
                    className: "rockstargames-sites-gtab04e755696ca409e5e9265c75a1d70ab",
                    ref: E,
                    onClick: () => {
                      P(!0), c({
                        event: "site_banner_click",
                        element_placement: g
                      })
                    },
                    children: [(0, i.jsx)("p", {
                      className: "rockstargames-sites-gtaef774f834d259ac49eb9874eac4447cb",
                      children: a("d2.bannerMsg")
                    }), (0, i.jsx)("p", {
                      className: T,
                      children: a("d2.bannerMob1")
                    }), (0, i.jsx)("p", {
                      className: T,
                      children: a("d2.bannerMob2")
                    })]
                  }), (0, i.jsx)("div", {
                    className: "rockstargames-sites-gtaa032f0013ab3ef4b2a5c9cbcde8fad40",
                    ref: C,
                    children: (0, i.jsx)(j.Z, {})
                  }), (0, i.jsxs)("div", {
                    ref: L,
                    className: "rockstargames-sites-gtab95e30584f20eb079ce8b88ad536479b",
                    children: [(0, i.jsx)(w, {
                      ctaLabel: e ? "" : a("d2.destCTA"),
                      onClick: () => {
                        c({
                          event: "cta_other",
                          element_placement: "banner"
                        }), l?.site === u.z.socialClub ? window.location.href = `https://${f.www}.rockstargames.com/VI` : window.location.href = `${h}VI`
                      }
                    }), (0, i.jsx)(_.Z, {
                      closeRef: R,
                      onClick: () => {
                        P(!1), o({
                          key: x._Z,
                          value: !1
                        }), S.current && m.gsap.to(S.current, {
                          autoAlpha: 0,
                          duration: x.th.playVideo.cta,
                          ease: x.QE.playVideo.cta
                        }), Z.bannerTimeline.reverse(), Z.bannerTimeline.eventCallback("onReverseComplete", (() => {
                          y.current && Z.playVideoTimeline && Z.playVideoTimeline.progress(0).pause(), M()
                        })), c({
                          event: "takeover_close",
                          element_placement: g
                        })
                      }
                    })]
                  })]
                })
              }), (0, i.jsx)("div", {
                ref: A,
                className: "rockstargames-sites-gtab988c3c578804600ecd2490598a3c967"
              })]
            })
          }) : null
        },
        R = () => {
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
            a = (0, s.useBase)(),
            {
              currentSite: t
            } = (0, u.Z)(),
            n = t?.site === u.z.socialClub ? "/" : a;
          return (0, i.jsx)(d.ResizeProvider, {
            children: (0, i.jsx)(o, {
              history: e,
              basename: n,
              children: (0, i.jsx)(v.A1, {
                children: (0, i.jsx)(y, {})
              })
            })
          })
        }
    }
  }
]);