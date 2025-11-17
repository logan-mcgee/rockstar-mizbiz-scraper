try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "55acf7d0-2845-40ff-b200-b1074cd9381e", e._sentryDebugIdIdentifier = "sentry-dbid-55acf7d0-2845-40ff-b200-b1074cd9381e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1278], {
    51931: (e, t, r) => {
      r.d(t, {
        A: () => u
      });
      var a = r(42295),
        s = r(62229),
        n = r(95966),
        i = r(39978),
        o = r(4572),
        l = r.n(o);
      const c = ({
          button: e,
          closeDialog: t,
          style: r = "primary"
        }) => {
          const {
            buttonIcon: s,
            buttonText: n,
            extraClasses: o,
            isDisabled: c,
            isLink: d,
            link: u,
            onClick: _,
            testId: m
          } = e;
          return d ? n && (0, a.jsx)(i.Button, {
            asChild: !0,
            appearance: r,
            size: "MD",
            children: (0, a.jsx)("a", {
              href: u,
              ...m && {
                "data-testid": m
              },
              children: n
            })
          }) : (0, a.jsx)(i.Button, {
            autoFocus: !0,
            iconRight: s,
            className: l()(o),
            isDisabled: c,
            onPress: e => (e => {
              _ && _(), t && t(), "function" == typeof e?.stopPropagation && e?.stopPropagation()
            })(e),
            type: "button",
            appearance: r,
            "aria-label": n,
            ...m && {
              "data-testid": m
            },
            children: n
          })
        },
        d = {
          actions: "rockstargames-sites-rockstargamesd35d1125eabb9ae0e941bd585003c4fc",
          check: "rockstargames-sites-rockstargamesb63b9588fb98b439d19028797670c6c5",
          content: "rockstargames-sites-rockstargamesefe65f5c39de5d044fdc6b13c1771125",
          dialog: "rockstargames-sites-rockstargamesd2c9ef0a70d425745a27c169c594199a",
          error: "rockstargames-sites-rockstargamesf654f7a2bf475a939f8c05fb569bfd5e",
          "fade-in": "rockstargames-sites-rockstargamese30057881578a38b5dc6f50854c6b56d",
          heading: "rockstargames-sites-rockstargamesdab9a8f190197c99405cebe1e9a992d6",
          icon: "rockstargames-sites-rockstargamesbc1e57fee27452c58670e4f60e492246",
          mail: "rockstargames-sites-rockstargamesb120386c4c2485c587f87173721d63be",
          message: "rockstargames-sites-rockstargamesf7cd64be4f94a272222f88f34789734a",
          pillBtn: "rockstargames-sites-rockstargamesb403f298c2eff00899432c93daa15aec",
          selected: "rockstargames-sites-rockstargamesa6cab397bf3a16564fcc531ef4c16130",
          "slide-up": "rockstargames-sites-rockstargamesb2b3117a07a11b3ec5897e4718e24373"
        },
        u = ({
          icon: e,
          title: t,
          secondaryText: r,
          buttons: i,
          showDialog: o,
          onClose: l = () => {},
          closeOnOutsideClick: u = !0,
          extraClasses: _
        }) => {
          const m = (0, s.useRef)(null),
            {
              setBodyIsLocked: g
            } = (0, n.useBodyScrollable)("AlertDialog");
          (0, s.useEffect)(() => {
            o && m?.current && (m.current?.showModal?.(), g(!0))
          }, [o]);
          const f = () => {
            g(!1), l(), m.current?.close?.()
          };
          if (o) return (0, a.jsxs)("dialog", {
            ref: m,
            className: d.dialog,
            onClick: e => (e => {
              if (!e.currentTarget) return;
              const t = e.currentTarget.getBoundingClientRect();
              (t.left > e.clientX || t.right < e.clientX || t.top > e.clientY || t.bottom < e.clientY) && u && (g(!1), l(), e.currentTarget.close())
            })(e),
            "data-testid": "alert-dialog",
            children: [e && (0, a.jsx)("i", {
              className: [d.icon, d[e]].join(" ")
            }), (0, a.jsxs)("div", {
              className: [d.content, _?.content].join(" "),
              children: [(0, a.jsx)("h3", {
                className: [d.heading, _?.heading].join(" "),
                children: t
              }), r && (0, a.jsx)("div", {
                className: [d.message, _?.message].join(" "),
                dangerouslySetInnerHTML: {
                  __html: r
                }
              })]
            }), i && (0, a.jsx)("div", {
              className: d.actions,
              children: i.slice(0, 2).map((e, t) => (0, a.jsx)(c, {
                style: e?.style ?? (0 === t ? "primary" : "secondary"),
                button: e,
                closeDialog: f
              }, e.buttonText))
            })]
          })
        }
    },
    66135: (e, t, r) => {
      r.d(t, {
        f: () => a
      });
      var a = {
        mobile: "(min-width: 0px) and (max-width: 767.98px)",
        mobileSmall: "(min-width: 0px) and (max-width: 499.98px)",
        mobileMedium: "(min-width: 500px) and (max-width: 767.98px)",
        tabletSmall: "(min-width: 768px) and (max-width: 1023.98px)",
        tabletMedium: "(min-width: 1024px) and (max-width: 1279.98px)",
        tabletSmallAndMedium: "(min-width: 768px) and (max-width: 1279.98px)",
        tabletLarge: "(min-width: 1280px) and (max-width: 1439.98px)",
        tabletMediumAndLarge: "(min-width: 1024px) and (max-width: 1439.98px)",
        tablet: "(min-width: 768px) and (max-width: 1439.98px)",
        desktop: "(min-width: 1440px) and (max-width: 2559.98px)",
        desktopSmall: "(min-width: 1440px) and (max-width: 1919.98px)",
        desktopMedium: "(min-width: 1920px) and (max-width: 2559.98px)",
        tabletAndDesktop: "(min-width: 768px) and (max-width: 2559.98px)",
        mobileMediumAndLarger: "(min-width: 500px)",
        tabletSmallAndLarger: "(min-width: 768px)",
        tabletMediumAndLarger: "(min-width: 1024px)",
        tabletMediumAndSmaller: "(max-width: 1023.98px)",
        tabletLargeAndLarger: "(min-width: 1280px)",
        tabletLargeAndSmaller: "(max-width: 1279.98px)",
        desktopSmallAndLarger: "(min-width: 1440px)",
        desktopMediumAndLarger: "(min-width: 1920px)",
        desktopLargeAndLarger: "(min-width: 2560px)",
        portrait: "(orientation: portrait)",
        landscape: "(orientation: landscape)",
        mobileLandscape: "(min-width: 500px) and (max-width: 767px) and (orientation: landscape)"
      }
    },
    72408: (e, t, r) => {
      r.d(t, {
        A: () => l
      });
      var a = r(42295),
        s = r(4346),
        n = r.n(s);
      const i = JSON.parse('{"assets":[],"layers":[{"ddd":0,"ind":0,"ty":4,"nm":"Shape Layer 1","ks":{"o":{"k":100},"r":{"k":0},"p":{"k":[300,300,0]},"a":{"k":[0,0,0]},"s":{"k":[244,244,100]}},"ao":0,"shapes":[{"d":1,"ty":"el","s":{"k":[100,100]},"p":{"k":[0,0]},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse"},{"ty":"tm","s":{"k":[{"i":{"x":[0.439],"y":[1.016]},"o":{"x":[0.561],"y":[0.015]},"n":["0p439_1p016_0p561_0p015"],"t":5,"s":[100],"e":[0]},{"t":33.0000013441176}],"ix":1},"e":{"k":[{"i":{"x":[0.439],"y":[1.017]},"o":{"x":[0.561],"y":[0.016]},"n":["0p439_1p017_0p561_0p016"],"t":0,"s":[100],"e":[0]},{"t":30.0000012219251}],"ix":2},"o":{"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim"},{"ty":"st","fillEnabled":true,"c":{"k":[1,1,1,1]},"o":{"k":100},"w":{"k":16},"lc":2,"lj":1,"ml":4,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke"}],"ip":0,"op":900.000036657751,"st":0,"bm":0,"sr":1}],"v":"4.5.3","ddd":0,"ip":1.00000004073083,"op":33.0000013441175,"fr":29.9700012207031,"w":600,"h":600}'),
        o = JSON.parse('{"v":"5.7.3","fr":60,"ip":0,"op":64,"w":300,"h":300,"nm":"Dot_Loading","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"center","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":10,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":22,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":34,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[17.667,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"right","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":5,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":17,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":29,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[12.333,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 2","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"left","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":0,"s":[144,144,0],"to":[0,-3.333,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.6,"y":0},"t":12,"s":[144,124,0],"to":[0,0,0],"ti":[0,-3.333,0]},{"t":24,"s":[144,144,0]}],"ix":2},"a":{"a":0,"k":[12.5,6,0],"ix":1},"s":{"a":0,"k":[764.558,764.558,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.828],[0.828,0],[0,0.828],[-0.828,0]],"o":[[0,0.828],[-0.828,0],[0,-0.828],[0.828,0]],"v":[[1.5,0],[0,1.5],[-1.5,0],[0,-1.5]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fond 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7,5.833],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Groupe 3","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":76,"st":-62,"bm":0}],"markers":[]}'),
        l = ({
          type: e = "spinning"
        }) => {
          let t;
          return t = "threeDots" === e ? o : i, (0, a.jsx)(n(), {
            loop: !0,
            autoplay: !0,
            animationData: t,
            style: {
              width: "50px",
              height: "50px"
            },
            "data-testid": "loader-spinner"
          })
        }
    },
    79867: (e, t, r) => {
      r.d(t, {
        A: () => n,
        C: () => a
      });
      const a = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        s = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            circoloco: "circolocorecords",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        n = () => {
          let e;
          const {
            location: t
          } = window, r = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), a = s.findIndex(t => Object.entries(t.sites).findIndex(([t, a]) => a === r && (e = {
            site: t,
            subDomain: a
          }, !0)) >= 0), n = s[a >= 0 ? a : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...n,
            currentSite: e
          }
        }
    },
    89091: () => {},
    91551: (e, t, r) => {
      r.r(t), r.d(t, {
        default: () => Ha
      });
      var a = r(42295),
        s = r(87927),
        n = r(82324),
        i = r(96498),
        o = r(62229),
        l = r(12100),
        c = r(81788),
        d = r(4572),
        u = r.n(d),
        _ = r(32067),
        m = r(39978),
        g = r(17328),
        f = r(12919),
        p = r(66135);
      const b = (0, c.defineMessages)({
        featured_game_breadcrumbs_parent_item: {
          id: "featured_game_breadcrumbs_parent_item",
          description: "Breadcrumbs parent page item label",
          defaultMessage: "Games"
        }
      });
      var h = r(2918),
        w = r(61128);
      const x = () => {
          const e = (0, o.useContext)(n.BlockRendererContext),
            {
              parentIds: t,
              sectionImpressionData: r
            } = e,
            {
              track: a
            } = (0, h.useGtmTrack)(),
            s = t ? {
              element_placement: t.join(" > ")
            } : {};
          return {
            trackEvent: (e, t) => {
              const r = t?.analyticsData || {};
              return a({
                ...t?.link?.url && {
                  link_url: t?.link?.url
                },
                ...s,
                ...e,
                ...r
              })
            },
            trackRichTextHyperlink: e => a({
              event: "site_link_click",
              link_url: e.data.uri,
              text: e.content[0].value,
              ...s
            }),
            useTrackPageSectionImpression: e => {
              const t = (0, o.useCallback)(t => {
                  t && a({
                    event: "page_section_impression",
                    section_layout: void 0,
                    ...e,
                    position: r?.blockIndex,
                    position_max: r?.totalBlocks,
                    ...s
                  })
                }, [a]),
                {
                  ref: n,
                  inView: i
                } = (0, w.useInView)({
                  threshold: .6,
                  triggerOnce: !0,
                  onChange: t
                });
              return {
                ref: n,
                inView: i
              }
            }
          }
        },
        y = (0, c.defineMessages)({
          hp_hero_play_button_label: {
            id: "hp_hero_play_button_label",
            description: "Featured Game hero play button label",
            defaultMessage: "Play"
          },
          hp_hero_stop_button_label: {
            id: "hp_hero_stop_button_label",
            description: "Featured Game hero stop button label",
            defaultMessage: "Stop"
          }
        });
      var k = r(77053),
        v = "var(--_1nrpitn0)";
      const j = (0, o.forwardRef)(function({
        src: e,
        testId: t,
        className: r,
        context: s,
        ...i
      }, l) {
        const [c, d] = (0, o.useState)({});
        return (0, o.useEffect)(() => {
          const a = () => {
            const a = (0, n.getOptimizedRsgImage)(e, s),
              o = (0, g.v6)({
                "data-testid": t,
                className: u()(["_1nrpitn1", r]),
                alt: a?.alt,
                src: a?.url,
                srcSet: a?.srcSet,
                style: (0, k.DI)({
                  [v]: "" + (a?.width || 1) / (a?.height || 1)
                }),
                loading: "lazy"
              }, i);
            d(o)
          };
          return a(), window.addEventListener("resize", a), () => {
            window.removeEventListener("resize", a)
          }
        }, [r, s]), (0, a.jsx)("img", {
          ref: l,
          ...c
        })
      });
      r(89091);
      var C = "vi4uz51";
      const R = (0, o.createContext)({
          videoRef: null,
          bgImageRef: null,
          isPlaying: !1,
          isLooping: !1,
          reducedMotion: !1,
          setIsPlaying: () => {},
          videoError: !1,
          setVideoError: () => {}
        }),
        S = () => {
          const e = (0, o.useContext)(R);
          if (!e) throw new Error("useHeroContext must be used within HeroProvider");
          return e
        },
        I = (0, o.forwardRef)(function({
          testId: e,
          children: t,
          asChild: r,
          isLooping: s = !1,
          ...n
        }, i) {
          const l = window && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
            c = (0, o.useRef)(null),
            d = (0, o.useRef)(null),
            [u, m] = (0, o.useState)(!l),
            [f, p] = (0, o.useState)(!1),
            b = (0, g.v6)({
              "data-testid": e,
              className: "vi4uz50"
            }, n),
            h = r ? _.DX : "div";
          return (0, a.jsx)(R.Provider, {
            value: {
              videoRef: c,
              bgImageRef: d,
              isPlaying: u,
              isLooping: s,
              reducedMotion: l,
              setIsPlaying: m,
              videoError: f,
              setVideoError: p
            },
            children: (0, a.jsx)(h, {
              ref: i,
              ...b,
              children: t
            })
          })
        }),
        N = (0, o.forwardRef)(function({
          videoSrc: e,
          backgroundImage: t,
          isPlaying: r,
          setIsPlaying: s,
          videoLabel: i,
          testId: l,
          asChild: c,
          ...d
        }, m) {
          const b = (0, f.Ub)(p.f.mobile),
            {
              videoRef: h,
              isLooping: w,
              reducedMotion: x,
              setVideoError: y
            } = S(),
            [k, v] = (0, o.useState)(null),
            R = c ? _.DX : "div",
            I = (0, g.v6)({
              "data-testid": l,
              className: C
            }, d);
          return (0, o.useEffect)(() => {
            const t = h.current;
            if (!t || !e.mobile && !e.desktop || x) return;
            const r = t?.children[t.children.length - 1] ?? null,
              a = () => {
                s(!0)
              },
              n = () => {
                s(!1)
              },
              i = () => {
                console.warn("Play request interrupted :", t.error), s(!1)
              },
              o = () => {
                console.warn("Video failed to load sources."), y(!0)
              };
            return t.addEventListener("play", a), t.addEventListener("error", i), t.addEventListener("pause", n), r && r.addEventListener("error", o), () => {
              t.removeEventListener("play", a), t.removeEventListener("error", i), t.removeEventListener("pause", n), r && r.removeEventListener("error", o)
            }
          }, [h.current, JSON.stringify(e), x]), (0, o.useEffect)(() => {
            const e = (0, n.getOptimizedRsgImage)(t, b ? "1:1" : "21:9");
            e && v(e)
          }, [t, b]), (0, a.jsxs)(R, {
            ref: m,
            ...I,
            children: [(0, a.jsxs)("video", {
              ref: h,
              className: C,
              loop: w,
              "aria-label": i,
              autoPlay: !0,
              playsInline: !0,
              muted: !0,
              poster: k?.url ?? void 0,
              children: [e.mobile && (0, a.jsx)("source", {
                media: p.f.mobile,
                src: e.mobile,
                type: "video/mp4"
              }), e.desktop && (0, a.jsx)("source", {
                media: p.f.tabletSmallAndLarger,
                src: e.desktop,
                type: "video/mp4"
              })]
            }), (0, a.jsx)(j, {
              context: b ? "1:1" : "21:9",
              src: t,
              className: u()(["vi4uz52", r ? "vi4uz54" : "vi4uz53"]),
              "aria-hidden": r
            })]
          })
        }),
        E = (0, o.forwardRef)(function({
          disabled: e,
          onButtonClick: t,
          isPlaying: r,
          testId: s,
          ...n
        }, i) {
          const {
            formatMessage: l
          } = (0, c.useIntl)(), {
            videoRef: d,
            reducedMotion: _,
            videoError: f
          } = S(), p = (0, o.useCallback)(() => {
            (() => {
              const e = d.current;
              e && (r ? (e?.pause(), e.currentTime = 0) : e?.play())
            })(), t?.(r)
          }, [r]), b = (0, g.v6)({
            "data-testid": s,
            className: u()("vi4uz5e", e ? "vi4uz5d" : ""),
            label: l(r ? y.hp_hero_stop_button_label : y.hp_hero_play_button_label)
          }, n);
          return _ || f ? null : (0, a.jsx)(m.IconButton, {
            ref: i,
            ...b,
            icon: r ? "Stop" : "Play",
            appearance: "primary",
            size: "SM",
            onPress: p
          })
        });
      var M = r(91633),
        F = r(79142),
        D = r(96369),
        W = (0, D.c)({
          defaultClassName: "_1lfrlj8e",
          variantClassNames: {
            size: {
              small: "_1lfrlj8f",
              medium: "_1lfrlj8g",
              large: "_1lfrlj8h",
              xlarge: "_1lfrlj8i"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        A = (0, D.c)({
          defaultClassName: "_1lfrlj89",
          variantClassNames: {
            size: {
              small: "_1lfrlj8a",
              medium: "_1lfrlj8b",
              large: "_1lfrlj8c",
              xlarge: "_1lfrlj8d"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        z = (0, D.c)({
          defaultClassName: "_1lfrlj8y",
          variantClassNames: {
            size: {
              small: "_1lfrlj8z",
              medium: "_1lfrlj810",
              large: "_1lfrlj811",
              xlarge: "_1lfrlj812"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        P = (0, D.c)({
          defaultClassName: "_1lfrlj8r",
          variantClassNames: {
            theme: {
              dark: "_1lfrlj8s",
              light: "_1lfrlj8t"
            },
            size: {
              small: "_1lfrlj8u",
              medium: "_1lfrlj8v",
              large: "_1lfrlj8w",
              xlarge: "_1lfrlj8x"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        T = "var(--_1lfrlj80)",
        G = "var(--_1lfrlj81)",
        L = "var(--_1lfrlj82)",
        B = (0, D.c)({
          defaultClassName: "_1lfrlj86",
          variantClassNames: {
            interactive: {
              false: "_1lfrlj87",
              true: "_1lfrlj88"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        V = (0, D.c)({
          defaultClassName: "_1lfrlj83",
          variantClassNames: {
            gradient: {
              linear: "_1lfrlj84",
              radial: "_1lfrlj85"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        q = (0, D.c)({
          defaultClassName: "_1lfrlj8k",
          variantClassNames: {
            theme: {
              light: "_1lfrlj8l",
              dark: "_1lfrlj8m"
            },
            size: {
              small: "_1lfrlj8n",
              medium: "_1lfrlj8o",
              large: "_1lfrlj8p",
              xlarge: "_1lfrlj8q"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        O = (0, D.c)({
          defaultClassName: "_1i0xbue0",
          variantClassNames: {
            size: {
              SM: "_1i0xbue1",
              MD: "_1i0xbue2",
              LG: "_1i0xbue3",
              XL: "_1i0xbue4"
            }
          },
          defaultVariants: {
            size: "MD"
          },
          compoundVariants: []
        });
      const $ = (0, o.forwardRef)(function({
          image: e,
          size: t = "MD",
          context: r = "mobile",
          testId: s,
          asChild: n,
          className: i,
          ...o
        }, l) {
          if (!e) return;
          const c = n ? _.DX : "div",
            d = (0, g.v6)({
              "data-testid": s,
              className: u()(O({
                size: t
              }), i)
            }, o);
          return (0, a.jsx)(c, {
            ref: l,
            ...d,
            children: (0, a.jsx)(j, {
              src: e,
              context: r,
              className: "_1i0xbue5",
              alt: e.altText ?? ""
            })
          })
        }),
        X = (0, o.createContext)({
          size: void 0,
          interactive: !1,
          gradientColor: void 0,
          theme: "dark"
        }),
        U = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          size: s = "medium",
          gradientColor: n,
          gradientType: i = "linear",
          interactive: o = !1,
          theme: l = "dark",
          className: c,
          ...d
        }, m) {
          const f = ((e = "") => {
              if (!e || "string" != typeof e) return null;
              let t = e.replace("#", "");
              return 3 === t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), {
                r: parseInt(t.substring(0, 2), 16).toString(),
                g: parseInt(t.substring(2, 4), 16).toString(),
                b: parseInt(t.substring(4, 6), 16).toString()
              }
            })(n),
            p = f && (0, k.DI)({
              [T]: f.r,
              [L]: f.b,
              [G]: f.g
            }),
            b = r ? _.DX : "div",
            h = (0, g.v6)({
              "data-testid": t,
              className: u()(V({
                gradient: i
              }), c),
              style: {
                ...p
              }
            }, d);
          return (0, a.jsx)(X.Provider, {
            value: {
              size: s,
              gradientColor: n,
              interactive: o,
              theme: l
            },
            children: (0, a.jsx)(b, {
              ref: m,
              ...h,
              children: e
            })
          })
        }),
        K = (0, o.forwardRef)(function({
          alt: e,
          src: t,
          testId: r,
          ...s
        }, n) {
          const {
            interactive: i
          } = (0, o.useContext)(X), l = (0, g.v6)({
            "data-testid": r,
            className: B({
              interactive: i
            }),
            alt: e,
            src: t
          }, s);
          return (0, a.jsx)(j, {
            ref: n,
            ...l
          })
        }),
        H = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          className: s,
          ...n
        }, i) {
          const l = (0, o.useContext)(X);
          if (!l) return;
          const {
            size: c
          } = l, d = r ? _.DX : "div", m = (0, g.v6)({
            "data-testid": t,
            className: u()(A({
              size: c
            }), s)
          }, n);
          return (0, a.jsx)(d, {
            ref: i,
            ...m,
            children: e
          })
        }),
        Y = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...r
        }, s) {
          const n = (0, o.useContext)(X);
          if (!n) return;
          const {
            size: i
          } = n, l = (0, g.v6)({
            "data-testid": t,
            className: W({
              size: i
            })
          }, r);
          return (0, a.jsx)("span", {
            ref: s,
            ...l,
            children: e
          })
        }),
        J = (0, o.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, g.v6)({
            className: "_1lfrlj8j"
          }, e);
          return (0, a.jsx)($, {
            ref: t,
            ...r
          })
        }),
        Q = (0, o.forwardRef)(function({
          children: e,
          level: t = 5,
          testId: r,
          ...s
        }, i) {
          const l = (0, o.useContext)(X);
          if (!l) return;
          const {
            size: c,
            theme: d
          } = l, u = (0, g.v6)({
            "data-testid": r,
            className: q({
              theme: d,
              size: c
            })
          }, s);
          return (0, a.jsx)(n.RsgMdTextComponent, {
            markdown: e,
            rsgRichTextOptions: {
              renderNode: {
                [F.BLOCKS.HEADING_1]: (e, r) => (0, a.jsx)(m.Heading, {
                  level: t,
                  ref: i,
                  ...u,
                  children: r
                })
              }
            }
          })
        }),
        Z = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = (0, o.useContext)(X);
          if (!i) return;
          const {
            size: l
          } = i, c = r ? _.DX : "div", d = (0, g.v6)({
            "data-testid": t,
            className: P({
              size: l
            })
          }, s);
          return (0, a.jsx)(c, {
            ref: n,
            ...d,
            children: e
          })
        }),
        ee = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...r
        }, s) {
          const n = (0, o.useContext)(X);
          if (!n) return;
          const {
            size: i,
            theme: l
          } = n, c = (0, M.m)(l, "normal"), d = (0, g.v6)({
            "data-testid": t,
            className: u()(c, z({
              size: i
            }))
          }, r);
          return (0, a.jsx)(m.Button, {
            ref: s,
            ...d,
            children: e
          })
        });
      var te = r(16675),
        re = r(30257);
      const ae = (0, c.defineMessages)({
        carousel_next_button: {
          id: "carousel_next_button",
          description: "The label for the next button.",
          defaultMessage: "Next"
        },
        carousel_prev_button: {
          id: "carousel_prev_button",
          description: "The label for the previous button.",
          defaultMessage: "Previous"
        }
      });
      var se = (0, D.c)({
          defaultClassName: "lwwe808",
          variantClassNames: {
            variant: {
              small: "lwwe809",
              medium: "lwwe80a",
              full: "lwwe80b"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        ne = "_1betujy6 _1betujy5",
        ie = (0, D.c)({
          defaultClassName: "lwwe80g",
          variantClassNames: {
            visible: {
              true: "lwwe80h",
              false: "lwwe80i"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const oe = (0, o.createContext)({
          withIndicators: !1,
          navigationRef: (0, o.createRef)(),
          embla: void 0,
          refEmblaContainer: void 0,
          defaultSlide: 0
        }),
        le = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          withIndicators: s = !1,
          defaultSlide: n = 0,
          carouselRef: i,
          ...l
        }, c) {
          const {
            navigationRef: d
          } = (0, o.useContext)(oe), [u, m] = (({
            defaultSlide: e
          }) => {
            const t = {
                axis: "x",
                align: "start",
                startIndex: e,
                active: !0,
                containScroll: "keepSnaps",
                loop: !1,
                skipSnaps: !0,
                inViewThreshold: .9
              },
              [r, a] = (0, te.A)(t, [(0, re.J)()]);
            return (0, o.useEffect)(() => {
              if (!a) return;
              const e = e => {
                e?.canScrollNext() || e?.canScrollPrev() ? e.reInit({
                  ...t,
                  watchDrag: !0
                }) : e.reInit({
                  ...t,
                  watchDrag: !1
                })
              };
              return a?.on("init", e), a?.on("resize", e), () => {
                a?.off("init", e), a?.off("resize", e)
              }
            }, [a]), [r, a]
          })({
            defaultSlide: n
          }), f = r ? _.DX : "div", p = (0, g.v6)({
            "data-testid": t,
            className: "lwwe800"
          }, l), b = i ?? u;
          return (0, a.jsx)(oe.Provider, {
            value: {
              withIndicators: s,
              navigationRef: d,
              embla: m,
              defaultSlide: n,
              refEmblaContainer: b
            },
            children: (0, a.jsx)(f, {
              ref: c,
              ...p,
              children: (0, a.jsx)(_.xV, {
                children: e
              })
            })
          })
        }),
        ce = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = r ? _.DX : "div",
            o = (0, g.v6)(s, {
              "data-testid": t,
              className: ne
            });
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        de = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...r
        }, s) {
          const n = (0, g.v6)(r, {
            "data-testid": t,
            className: "lwwe801"
          });
          return (0, a.jsx)(m.Heading, {
            ref: s,
            ...n,
            children: e
          })
        }),
        ue = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...r
        }, s) {
          const {
            refEmblaContainer: n
          } = (0, o.useContext)(oe), i = (0, g.v6)({
            "data-testid": t,
            className: ne
          }, r);
          return (0, a.jsx)("div", {
            ref: s,
            ...i,
            children: (0, a.jsx)("div", {
              ref: n,
              className: "lwwe802",
              children: (0, a.jsx)("div", {
                className: "lwwe803",
                children: e
              })
            })
          })
        }),
        _e = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          ...r
        }, s) {
          const n = t ? _.DX : "div",
            i = (0, g.v6)({
              className: "lwwe807"
            }, r);
          return (0, a.jsx)(n, {
            ref: s,
            ...i,
            children: (0, a.jsx)("div", {
              className: "lwwe804",
              children: e
            })
          })
        }),
        me = (0, o.forwardRef)(function({
          children: e,
          variant: t = "small",
          testId: r,
          ...s
        }, n) {
          const i = (0, g.v6)({
            "data-testid": r,
            className: se({
              variant: t
            })
          }, s);
          return (0, a.jsx)("div", {
            ref: n,
            ...i,
            children: e
          })
        }),
        ge = (0, o.forwardRef)(function({
          isVisible: e = !0,
          prevButtonDisabled: t = !1,
          nextButtonDisabled: r = !0,
          onPrevButtonClick: s,
          onNextButtonClick: n,
          testId: i,
          asChild: o,
          ...l
        }, d) {
          const {
            formatMessage: u
          } = (0, c.useIntl)(), f = o ? _.DX : "div", p = (0, g.v6)({
            onClick: s,
            isDisabled: t
          }, l), b = (0, g.v6)({
            onClick: n,
            isDisabled: r
          }, l);
          return (0, a.jsxs)(f, {
            ref: d,
            "data-testid": i,
            className: ie({
              visible: e
            }),
            children: [(0, a.jsx)(m.IconButton, {
              label: u(ae.carousel_prev_button),
              icon: "ArrowLeft",
              ...p
            }), (0, a.jsx)(m.IconButton, {
              label: u(ae.carousel_next_button),
              icon: "ArrowRight",
              ...b
            })]
          })
        });
      (0, D.c)({
        defaultClassName: "_1betujy6 _1betujy5",
        variantClassNames: {
          columns: {
            1: "_16t2abv3",
            2: "_16t2abv4",
            3: "_16t2abv5",
            4: "_16t2abv6",
            5: "_16t2abv7",
            6: "_16t2abv8",
            7: "_16t2abv9",
            8: "_16t2abva",
            9: "_16t2abvb",
            10: "_16t2abvc",
            11: "_16t2abvd",
            12: "_16t2abve"
          },
          align: {
            start: "_16t2abvf",
            center: "_16t2abvg",
            end: "_16t2abvh"
          }
        },
        defaultVariants: {
          columns: 3,
          align: "start"
        },
        compoundVariants: []
      });
      const fe = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = r ? _.DX : "section",
            o = (0, g.v6)({
              "data-testid": t,
              className: "_16t2abv0"
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        pe = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = r ? _.DX : "div",
            o = (0, g.v6)({
              "data-testid": t,
              className: "_16t2abv1"
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        be = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = r ? _.DX : "div",
            o = (0, g.v6)({
              "data-testid": t,
              className: "_16t2abvi"
            }, s);
          return (0, a.jsx)("div", {
            className: "_1betujy6 _1betujy5",
            children: (0, a.jsx)(i, {
              ref: n,
              ...o,
              children: e
            })
          })
        });
      var he = (0, D.c)({
          defaultClassName: "hg5jwy4",
          variantClassNames: {
            reducedMotion: {
              false: "hg5jwy5",
              true: "hg5jwy6"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        we = "hg5jwy2",
        xe = r(9623);
      const ye = (0, o.forwardRef)(function({
          href: e,
          testId: t,
          ...r
        }, s) {
          const n = (0, c.linkWithLocale)(e || ""),
            i = (0, g.v6)(r, {
              "data-testid": t
            });
          return n.isExternal ? (0, a.jsx)("a", {
            href: n.link,
            target: "_blank",
            rel: "noreferrer",
            ...i,
            ref: s
          }) : (0, a.jsx)(xe.Link, {
            to: n.link,
            target: "_self",
            ...i,
            ref: s
          })
        }),
        ke = (0, o.createContext)({
          slug: "",
          open: !1,
          onOpenChange: () => {}
        }),
        ve = ({
          children: e
        }) => {
          const [t, r] = (0, xe.useSearchParams)(), [s, n] = (0, o.useState)(""), [i, l] = (0, o.useState)(!1), c = () => {
            const e = !i;
            l(e), e || (n(""), r(e => (e.delete("view"), e)))
          };
          (0, o.useEffect)(() => {
            const e = t.get("view");
            e ? (n(e), l(!0)) : (n(""), l(!1))
          }, [t]);
          const d = (0, o.useMemo)(() => ({
            open: i,
            onOpenChange: c,
            slug: s
          }), [i, s]);
          return (0, a.jsx)(ke.Provider, {
            value: d,
            children: e
          })
        },
        je = () => {
          const e = (0, o.useContext)(ke);
          if (void 0 === e) throw new Error("useBottomSheet must be used within a Bottom Sheet Provider");
          return {
            open: e.open,
            slug: e.slug,
            onOpenChange: e.onOpenChange
          }
        },
        Ce = ({
          block: e,
          size: t = "MD",
          backgroundColor: r,
          asChild: s,
          ...n
        }) => {
          const {
            trackEvent: i
          } = x(), [, l] = (0, xe.useSearchParams)(), [c, d] = (0, o.useState)(""), {
            open: u
          } = je(), f = c && window.location.search.replace("?", "&"), p = e?.link?.url + f;
          if ((0, o.useEffect)(() => {
              if (!u) {
                const t = new URLSearchParams(e?.link?.url).get("view");
                d(t || "")
              }
            }, [e?.link?.url]), !e) return;
          const b = (0, g.v6)({
            size: t,
            appearance: e?.appearance,
            iconLeft: e?.iconLeft?.icon,
            iconRight: e?.iconRight?.icon,
            onPress: (h = e, () => {
              c && l(e => (e.set("view", c), e)), i({
                event: "cta_other",
                text: e.text?.toLowerCase(),
                link_url: p
              }, h)
            }),
            asChild: !c,
            override_backgroundColor: e.backgroundColor ?? r
          }, n);
          var h;
          return (0, a.jsx)(a.Fragment, {
            children: s ? (0, a.jsx)(ye, {
              href: p,
              target: e?.openInNewTab ? "_blank" : "_self",
              children: (0, a.jsx)(_.DX, {
                ...n
              })
            }) : (0, a.jsx)(m.Button, {
              ...b,
              children: c ? e.text : (0, a.jsx)(ye, {
                href: p,
                target: e?.openInNewTab ? "_blank" : "_self",
                children: e.text
              })
            })
          })
        };
      var Re = (0, D.c)({
        defaultClassName: "_1ksuttk0",
        variantClassNames: {
          showOn: {
            mobile: "_1ksuttk1",
            mobileSmall: "_1ksuttk2",
            mobileMedium: "_1ksuttk3",
            tabletSmall: "_1ksuttk4",
            tabletMedium: "_1ksuttk5",
            tabletSmallAndMedium: "_1ksuttk6",
            tabletLarge: "_1ksuttk7",
            tabletMediumAndLarge: "_1ksuttk8",
            tablet: "_1ksuttk9",
            desktop: "_1ksuttka",
            desktopSmall: "_1ksuttkb",
            desktopMedium: "_1ksuttkc",
            tabletAndDesktop: "_1ksuttkd",
            mobileMediumAndLarger: "_1ksuttke",
            tabletSmallAndLarger: "_1ksuttkf",
            tabletMediumAndLarger: "_1ksuttkg",
            tabletMediumAndSmaller: "_1ksuttkh",
            tabletLargeAndLarger: "_1ksuttki",
            tabletLargeAndSmaller: "_1ksuttkj",
            desktopSmallAndLarger: "_1ksuttkk",
            desktopMediumAndLarger: "_1ksuttkl",
            desktopLargeAndLarger: "_1ksuttkm",
            portrait: "_1ksuttkn",
            landscape: "_1ksuttko",
            mobileLandscape: "_1ksuttkp"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const Se = ({
        showOn: e,
        forceMount: t = !1,
        ...r
      }) => {
        const s = (0, g.v6)(r, {
            className: Re({
              showOn: e
            })
          }),
          n = (0, o.useMemo)(() => t ? void 0 : window?.matchMedia?.(p.f[e]), [e, window]);
        return (n?.matches ?? !0) && (0, a.jsx)(_.DX, {
          ...s
        })
      };
      var Ie = r(79719),
        Ne = r(44154);
      Ie.os.registerPlugin(l.u);
      const Ee = (0, o.createContext)({
          heroRef: (0, o.createRef)(),
          backgroundRef: (0, o.createRef)(),
          backgroundGradientRef: (0, o.createRef)(),
          playStopButtonRef: (0, o.createRef)(),
          collectionsRef: (0, o.createRef)(),
          gameDetailsRef: (0, o.createRef)(),
          reducedMotion: !1,
          isPlaying: !1,
          setIsPlaying: e => e
        }),
        Me = () => (0, o.useContext)(Ee),
        Fe = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = window && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
            l = (0, o.useRef)(null),
            c = (0, o.useRef)(null),
            d = (0, o.useRef)(null),
            u = (0, o.useRef)(null),
            m = (0, o.useRef)(null),
            f = (0, o.useRef)(null),
            [p, b] = (0, o.useState)(!i);
          ! function({
            heroRef: e,
            backgroundRef: t,
            backgroundGradientRef: r,
            playStopButtonRef: a,
            collectionsRef: s,
            gameDetailsRef: n
          }) {
            const [i, l] = (0, o.useState)(!1);
            (0, Ne.L)(() => {
              if (i) return;
              const o = e.current,
                c = t.current,
                d = r.current,
                u = a.current,
                _ = s.current,
                m = n.current;
              if (!(o && c && d && u && _ && m)) return;
              const g = Ie.os.timeline({
                paused: !0,
                defaults: {
                  ease: "none",
                  duration: 100
                },
                scrollTrigger: {
                  trigger: o,
                  start: "top top",
                  endTrigger: _,
                  end: "top top",
                  pin: !0,
                  pinSpacing: !1,
                  scrub: !0
                }
              });
              g.fromTo(d, {
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, 70%, rgba(0, 0, 0, 1) 100%)"
              }, {
                background: "linear-gradient(180deg, rgba(0, 0, 0, 0) -100%, -60%, rgba(0, 0, 0, 1) 20%)"
              }, 0), g.to(d, {
                backdropFilter: "blur(50px)",
                duration: 50
              }, 50), g.fromTo(c, {
                scale: 1
              }, {
                scale: 1.1
              }, 0), g.to(u, {
                opacity: 0,
                duration: 10
              }, 70), s.current && (Ie.os.utils.toArray(":scope > *", s.current).forEach(e => {
                Ie.os.fromTo(e, {
                  opacity: 0
                }, {
                  opacity: 1,
                  ease: "none",
                  scrollTrigger: {
                    trigger: e,
                    start: "top bottom",
                    end: "+=20%",
                    toggleActions: "play none none none",
                    scrub: !0
                  }
                })
              }), g.scrollTrigger.refresh(), l(!0))
            }, [e.current, t.current, r.current, a.current, n.current, s.current])
          }({
            heroRef: l,
            backgroundRef: c,
            backgroundGradientRef: d,
            playStopButtonRef: u,
            collectionsRef: m,
            gameDetailsRef: f
          });
          const h = r ? _.DX : "div",
            w = (0, g.v6)({
              "data-testid": t,
              className: "hg5jwy0"
            }, s);
          return (0, a.jsx)(Ee.Provider, {
            value: {
              heroRef: l,
              backgroundRef: c,
              backgroundGradientRef: d,
              playStopButtonRef: u,
              collectionsRef: m,
              gameDetailsRef: f,
              reducedMotion: i,
              isPlaying: p,
              setIsPlaying: b
            },
            children: (0, a.jsx)(h, {
              ref: n,
              ...w,
              children: e
            })
          })
        }),
        De = (0, o.forwardRef)(function({
          backgroundImage: e,
          backgroundVideo: t,
          ...r
        }, s) {
          const {
            heroRef: n,
            backgroundRef: i,
            backgroundGradientRef: o,
            isPlaying: l,
            playStopButtonRef: c,
            reducedMotion: d,
            setIsPlaying: u
          } = Me(), {
            trackEvent: _,
            useTrackPageSectionImpression: m
          } = x(), {
            ref: g
          } = m({
            text: "Featured Games Hero"
          }), b = (0, f.UP)(g, n, s), h = (0, f.Ub)(p.f.mobile), w = t?.videoFilesCollection?.items?.find(e => "21:9" === e.context), y = t?.videoFilesCollection?.items?.find(e => "1:1" === e.context), k = {
            desktop: w?.url,
            mobile: y?.url ?? w?.url
          };
          return (0, a.jsxs)(I, {
            ref: b,
            ...r,
            children: [(0, a.jsx)(N, {
              backgroundImage: e,
              isPlaying: l,
              ref: i,
              setIsPlaying: u,
              videoSrc: k,
              videoLabel: t?.title ?? ""
            }), !d && (0, a.jsx)(E, {
              ref: c,
              isPlaying: l,
              onButtonClick: e => {
                const r = h ? y : w;
                _({
                  event: "cta_other",
                  text: e ? "toggle pause" : "toggle play",
                  video_id: r?.sys?.id,
                  video_type: t?.type
                }, t)
              }
            }), (0, a.jsx)("div", {
              ref: o,
              className: he({
                reducedMotion: d
              })
            })]
          })
        }),
        We = (0, o.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, g.v6)({
            className: "hg5jwy3"
          }, e);
          return (0, a.jsx)(j, {
            ref: t,
            ...r
          })
        }),
        Ae = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = r ? _.DX : "div",
            o = (0, g.v6)({
              "data-testid": t,
              className: "hg5jwy7"
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        ze = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = r ? _.DX : "div",
            o = (0, g.v6)({
              "data-testid": t,
              className: "hg5jwy8 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdc"
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Pe = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = r ? _.DX : "div",
            o = (0, g.v6)({
              "data-testid": t,
              className: "hg5jwy9"
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Te = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = r ? _.DX : "div",
            o = (0, g.v6)({
              "data-testid": t,
              className: "hg5jwya"
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Ge = (0, o.forwardRef)(function({
          icon: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = r ? _.DX : "div",
            o = (0, g.v6)({
              "data-testid": t,
              className: "hg5jwyb"
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: (0, a.jsx)(j, {
              src: e,
              context: "mobile",
              className: "hg5jwyc"
            })
          })
        }),
        Le = (0, o.forwardRef)(function({
          logo: e,
          gamePageLink: t,
          title: r,
          description: s,
          ctas: n,
          children: i,
          platforms: o,
          ...l
        }, d) {
          const {
            collectionsRef: _,
            gameDetailsRef: g
          } = Me(), {
            formatMessage: p
          } = (0, c.useIntl)(), h = (0, f.UP)(g, d);
          return (0, a.jsxs)(fe, {
            ref: _,
            className: "hg5jwy1",
            children: [(0, a.jsxs)(be, {
              ref: h,
              ...l,
              children: [(0, a.jsx)(We, {
                src: e,
                context: "mobile"
              }), (0, a.jsxs)(Ae, {
                children: [(0, a.jsxs)(pe, {
                  className: we,
                  children: [(0, a.jsxs)(m.Breadcrumbs.Root, {
                    children: [(0, a.jsx)(m.Breadcrumbs.Item, {
                      href: "/games",
                      children: p(b.featured_game_breadcrumbs_parent_item)
                    }), (0, a.jsx)(m.Breadcrumbs.Item, {
                      href: t,
                      isCurrent: !0,
                      children: r
                    })]
                  }), (0, a.jsx)(ze, {
                    asChild: !0,
                    children: (0, a.jsx)(m.Body, {
                      children: s
                    })
                  })]
                }), (0, a.jsxs)(pe, {
                  className: u()(we, "hg5jwyd"),
                  children: [n?.items && (0, a.jsx)(Pe, {
                    children: n?.items?.map((e, t) => {
                      if (e?.text) return (0, a.jsx)(Ce, {
                        block: e,
                        size: "MD"
                      }, t)
                    })
                  }), o?.length && (0, a.jsx)(Te, {
                    children: o?.map((e, t) => (0, a.jsx)(Ge, {
                      icon: e?.logo
                    }, `${e?.sys?.id}-${t}`))
                  })]
                })]
              })]
            }), i]
          })
        }),
        Be = "WwwFeaturedGameSection";
      var Ve = r(95966);
      const qe = (0, c.defineMessages)({
          hp_hero_carousel_scroll_down_label: {
            id: "hp_hero_carousel_scroll_down_label",
            description: "Hero carousel scroll down label",
            defaultMessage: "Scroll Down"
          }
        }),
        Oe = e => {
          if (!e) return "MD";
          const t = e.length;
          return t <= 20 ? "XL" : t > 20 && t <= 40 ? "LG" : t > 40 && t <= 60 ? "MD" : "SM"
        };
      var $e = "var(--_1ccl7bj2)",
        Xe = "var(--_1ccl7bj3)",
        Ue = "var(--_1ccl7bj1)",
        Ke = (0, D.c)({
          defaultClassName: "_1ccl7bje",
          variantClassNames: {
            invisible: {
              true: "_1ccl7bjf"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        He = ((0, D.c)({
          defaultClassName: "_1ccl7bjo",
          variantClassNames: {
            appearance: {
              danger: "_1ccl7bjp",
              information: "_1ccl7bjq",
              primary: "_1ccl7bjr",
              secondary: "_1ccl7bjs",
              tertiary: "_1ccl7bjt",
              ghost: "_1ccl7bju",
              accent: "_1ccl7bjv"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }), (0, D.c)({
          defaultClassName: "_1ccl7bj6",
          variantClassNames: {
            size: {
              SM: "_1ccl7bj7",
              MD: "_1ccl7bj8",
              LG: "_1ccl7bj9",
              XL: "_1ccl7bja"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }));
      const Ye = (0, o.forwardRef)(function({
          children: e,
          bottomGradientColor: t,
          horizontalBackgroundPosition: r,
          verticalBackgroundPosition: s,
          asChild: n,
          testId: i,
          size: o = "MD",
          ...l
        }, c) {
          const d = n ? _.DX : "div",
            u = (0, g.v6)({
              "data-testid": i,
              className: He({
                size: o
              }),
              style: (0, k.DI)({
                [Ue]: t,
                [$e]: r,
                [Xe]: s
              })
            }, l);
          return (0, a.jsx)(d, {
            ref: c,
            ...u,
            children: (0, a.jsx)(_.xV, {
              children: e
            })
          })
        }),
        Je = (0, o.forwardRef)(function({
          ...e
        }, t) {
          const r = (0, g.v6)({
            className: "_1ccl7bjc",
            loading: "eager",
            sizes: "(min-width: 2560px) 3840px, (min-width: 1920px) 2560px, (min-width: 1024px) 1920px, (min-width: 768px) 1440px"
          }, e);
          return (0, a.jsx)(j, {
            ref: t,
            ...r
          })
        }),
        Qe = (0, o.forwardRef)(function({
          invisible: e,
          children: t,
          asChild: r,
          testId: s,
          ...n
        }, i) {
          const o = r ? _.DX : "div",
            l = (0, g.v6)({
              "data-testid": s,
              className: Ke({
                invisible: e
              })
            }, n);
          return (0, a.jsx)("div", {
            className: "_1ccl7bjd _1betujy6 _1betujy5",
            children: (0, a.jsx)(o, {
              ref: i,
              ...l,
              children: t
            })
          })
        }),
        Ze = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: r,
          ...s
        }, n) {
          const i = t ? _.DX : "div",
            o = (0, g.v6)({
              "data-testid": r,
              className: "_1ccl7bjg"
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        et = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: r,
          ...s
        }, n) {
          const i = t ? _.DX : m.Label,
            o = (0, g.v6)({
              "data-testid": r,
              className: "_1ccl7bjh foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd6"
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        tt = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: r,
          ...s
        }, n) {
          const i = t ? _.DX : "h2",
            o = (0, g.v6)({
              "data-testid": r,
              className: "_1ccl7bji foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd5"
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        rt = (0, o.forwardRef)(function({
          asChild: e,
          src: t,
          ...r
        }, s) {
          const n = e ? _.DX : "div",
            i = (0, g.v6)({
              className: "_1ccl7bjj"
            }, r);
          return (0, a.jsx)(n, {
            ref: s,
            ...i,
            children: (0, a.jsx)(j, {
              src: t,
              alt: t?.altText ?? "",
              context: "mobile",
              className: "_1ccl7bjk",
              loading: "eager",
              style: t?.source?.width && t?.source?.height ? {
                aspectRatio: `${t.source.width}/${t.source.height}`
              } : {}
            })
          })
        }),
        at = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: r,
          ...s
        }, n) {
          const i = t ? _.DX : "div",
            o = (0, g.v6)({
              "data-testid": r,
              className: "_1ccl7bjn"
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        });
      var st = r(84999),
        nt = r(17982);
      const it = () => ({
          desktop: {
            enter: Ie.os.timeline({
              paused: !0
            }),
            exit: Ie.os.timeline({
              paused: !0
            })
          },
          mobile: {
            enter: Ie.os.timeline({
              paused: !0
            }),
            exit: Ie.os.timeline({
              paused: !0
            })
          }
        }),
        ot = (e, t) => e?.[t ? "mobile" : "desktop"],
        lt = e => {
          const t = {
              desktop: {
                enter: Ie.os.timeline({
                  paused: !0
                }),
                exit: Ie.os.timeline({
                  paused: !0
                })
              },
              mobile: {
                enter: Ie.os.timeline({
                  paused: !0
                }),
                exit: Ie.os.timeline({
                  paused: !0
                })
              }
            },
            r = [e.fade?.current].filter(Boolean) || null,
            a = [e.content?.current].filter(Boolean) || null;
          return r || a ? (t.mobile.enter.set([r, a], {
            opacity: 1
          }), t.mobile.exit.fromTo(r, {
            opacity: 1
          }, {
            opacity: .2,
            duration: 1,
            ease: "power1.inOut"
          }, 0).fromTo(a, {
            opacity: 1
          }, {
            opacity: .2,
            duration: 1,
            ease: "power1.inOut"
          }, 0).fromTo(a, {
            x: 0
          }, {
            x: "70vw",
            duration: 1,
            ease: "none"
          }, 0), t.desktop.enter.set(r, {
            opacity: 1
          }, 0).fromTo(a, {
            opacity: 0,
            yPercent: 25
          }, {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.in"
          }, 0), t.desktop.exit.fromTo(r, {
            opacity: 1
          }, {
            opacity: .1,
            duration: 1,
            ease: "none"
          }, 0).fromTo(a, {
            opacity: 1,
            yPercent: 0
          }, {
            opacity: 0,
            yPercent: 0,
            duration: 1,
            ease: "none"
          }, 0), t) : it()
        },
        ct = (e, t, {
          isMobile: r = !1,
          loop: a = !1
        }) => {
          (0, o.useEffect)(() => {
            if (!e || 0 === t.length) return;
            const s = e.scrollSnapList(),
              n = s.length,
              i = () => {
                const i = e.scrollProgress();
                let o = 0,
                  l = 0,
                  c = 0;
                for (let e = 0; e < n; e++) {
                  const d = s[e],
                    u = s[(e + 1) % n];
                  if (a) {
                    const t = u > d ? u - d : 1 + u - d,
                      r = (i - d + 1) % 1;
                    if (r >= 0 && r <= t) {
                      o = e, l = (e + 1) % n, c = r / t;
                      break
                    }
                    c = Math.min(r / t, 1)
                  } else {
                    const t = s[e + 1] ?? 1,
                      r = t - d;
                    if (i >= d && i <= t) {
                      o = e, l = e + 1, c = (i - d) / r;
                      break
                    }
                    c = Math.max(0, Math.min((i - d) / r, 1))
                  }
                  const _ = t[e];
                  if (_) {
                    const e = ot(_, r);
                    e?.enter.progress(c).pause(), e?.exit.progress(0).pause()
                  }
                }
                const d = t[o];
                if (d) {
                  const e = ot(d, r);
                  e?.enter.progress(1 - c).pause(), e?.exit.progress(c).pause()
                }
                if (!r) {
                  const e = t[l];
                  if (e) {
                    const t = ot(e, !1);
                    t?.enter.progress(c).pause(), t?.exit.progress(0).pause()
                  }
                }
                t.forEach((e, t) => {
                  if (t !== o && t !== l) {
                    const t = ot(e, r);
                    t?.enter.progress(0).pause(), t?.exit.progress(0).pause()
                  }
                })
              };
            return e.on("scroll", i), e.on("resize", i), () => {
              e.off("scroll", i), e.off("resize", i)
            }
          }, [e, t, r, a])
        },
        dt = (0, c.defineMessages)({
          hero_carousel_play_button: {
            id: "hero_carousel_play_button",
            description: "Aria label for the icon button to play the hero carousel",
            defaultMessage: "Play"
          },
          hero_carousel_pause_button: {
            id: "hero_carousel_pause_button",
            description: "Aria label for the icon button to pause the hero carousel",
            defaultMessage: "Pause"
          }
        });
      var ut = r(444),
        _t = (0, D.c)({
          defaultClassName: "wai7970",
          variantClassNames: {
            inLayout: {
              true: "wai7971",
              false: "wai7972"
            },
            appearance: {
              dark: "wai7973",
              light: "wai7974",
              adaptive: "wai7975",
              ghost: "wai7976"
            },
            size: {
              large: "wai7977",
              small: "wai7978"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              appearance: "ghost",
              size: "large"
            }, "wai7979"],
            [{
              appearance: "ghost",
              size: "small"
            }, "wai797a"]
          ]
        }),
        mt = (0, D.c)({
          defaultClassName: "wai797f",
          variantClassNames: {
            appearance: {
              dark: "wai797g",
              light: "wai797h",
              adaptive: "wai797i",
              ghost: "wai797j"
            },
            type: {
              pagination: "wai797k",
              progress: "wai797l",
              line: "wai797m"
            }
          },
          defaultVariants: {},
          compoundVariants: [
            [{
              appearance: "ghost",
              type: "pagination"
            }, "wai797n"],
            [{
              appearance: "ghost",
              type: "line"
            }, "wai797o"]
          ]
        }),
        gt = (0, D.c)({
          defaultClassName: "wai797p",
          variantClassNames: {
            appearance: {
              dark: "wai797q",
              light: "wai797r",
              adaptive: "wai797s",
              ghost: "wai797t"
            },
            type: {
              pagination: "wai797u",
              progress: "wai797v",
              line: "wai797w"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const ft = ({
          appearance: e,
          type: t,
          onClick: r,
          onBulletKeyDown: s,
          dotRef: n,
          fillRef: i
        }) => (0, a.jsx)("button", {
          className: "wai797b",
          onClick: r,
          onKeyDown: s,
          children: (0, a.jsx)("span", {
            ref: n,
            className: u()("wai797c", mt({
              appearance: e,
              type: t
            })),
            children: (0, a.jsx)("span", {
              ref: i,
              className: gt({
                appearance: e,
                type: t
              })
            })
          })
        }),
        pt = ({
          progress: e = 0
        }) => (0, a.jsx)("span", {
          className: "wai797d",
          children: (0, a.jsx)("span", {
            className: "wai797e",
            style: {
              width: `${e}%`
            }
          })
        }),
        bt = (0, o.forwardRef)(function({
          type: e,
          appearance: t = "adaptive",
          pages: r,
          current: s,
          size: n,
          setDotRef: i,
          setFillRef: o,
          onBulletClick: l,
          onBulletKeyDown: c,
          testId: d,
          asChild: u,
          ...m
        }, f) {
          const p = u ? _.DX : "div",
            b = (0, g.v6)({
              "data-testid": d,
              className: _t({
                appearance: t,
                size: n
              })
            }, m),
            h = 100 * s / r;
          return (0, a.jsxs)(p, {
            ref: f,
            ...b,
            children: [("pagination" === e || "line" === e) && (0, ut.A)(r)?.map(r => (0, a.jsx)(ft, {
              type: e,
              appearance: t,
              onClick: () => l(r),
              onBulletKeyDown: c(r),
              dotRef: e => i(e, r),
              fillRef: e => o(e, r)
            }, r)), "progress" === e && (0, a.jsx)(pt, {
              progress: h
            })]
          })
        });
      var ht = (0, D.c)({
        defaultClassName: "g7xdpg2",
        variantClassNames: {
          variant: {
            default: "g7xdpg3",
            full_height: "g7xdpg4"
          }
        },
        defaultVariants: {
          variant: "default"
        },
        compoundVariants: []
      });
      const wt = (0, o.createContext)({
          variant: "default",
          slides: null,
          defaultSlide: 0,
          autoPlay: !1,
          playOnInit: !1,
          autoScrollEnabled: !1,
          loop: !1
        }),
        xt = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          slides: r,
          variant: s,
          ...n
        }, i) {
          const l = (0, o.useRef)(null),
            c = (0, o.useRef)(null),
            {
              defaultSlide: d,
              playOnInit: u,
              autoPlay: m,
              autoScrollEnabled: f,
              loop: p
            } = (0, o.useContext)(wt),
            [b, h] = (0, o.useState)({});
          (({
            backgroundRef: e,
            contentRef: t
          }) => {
            (0, o.useLayoutEffect)(() => {
              const e = document.getElementById("main");
              if (!e) return;
              const t = "static" === getComputedStyle(e).position,
                r = e.style.position,
                a = e.style.zIndex;
              return t && (e.style.position = "relative"), e.style.zIndex = "1", () => {
                t && (e.style.position = r), e.style.zIndex = a
              }
            }, []), (0, Ne.L)(() => {
              const t = e.current;
              if (!t) return;
              const r = t.parentElement;
              Ie.os.to(t, {
                autoAlpha: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: r,
                  start: "top bottom",
                  end: "top top",
                  scrub: !0,
                  invalidateOnRefresh: !0
                },
                overwrite: "auto"
              }), Ie.os.to(t, {
                autoAlpha: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: r,
                  start: "top top-=10%",
                  end: "bottom 25%",
                  scrub: !0,
                  invalidateOnRefresh: !0
                },
                overwrite: "auto"
              })
            }, {
              dependencies: [e]
            }), (0, Ne.L)(() => {
              const e = t.current;
              if (!e) return;
              const r = e.parentElement;
              Ie.os.set(e, {
                opacity: 1
              }), Ie.os.to(e, {
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: r,
                  start: "bottom 75%",
                  end: "bottom top",
                  scrub: !0,
                  invalidateOnRefresh: !0
                }
              })
            }, {
              dependencies: [t]
            })
          })({
            backgroundRef: l,
            contentRef: c
          }), (0, o.useEffect)(() => {
            const e = e => {
              e.origin === window.origin && "dynamicSlideColors" === e.data.source && h(e.data.values)
            };
            return window.addEventListener("message", e), () => {
              window.removeEventListener("message", e)
            }
          }, []);
          const w = t ? _.DX : le,
            x = (0, g.v6)({
              className: "g7xdpg0"
            }, n);
          return (0, a.jsx)(wt.Provider, {
            value: {
              slides: r,
              defaultSlide: d,
              autoPlay: m,
              playOnInit: u,
              autoScrollEnabled: f,
              loop: p,
              variant: s
            },
            children: (0, a.jsxs)(w, {
              ref: i,
              ...x,
              children: [(0, a.jsx)("div", {
                ref: l,
                className: "g7xdpg5",
                "aria-hidden": !0,
                style: b
              }), (0, a.jsx)("div", {
                ref: c,
                children: e
              })]
            })
          })
        }),
        yt = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          forcePause: r,
          ...s
        }, n) {
          const i = t ? _.DX : _e;
          return (0, a.jsx)(i, {
            ref: n,
            appearance: "ghost",
            className: "g7xdpg1",
            "data-disabled": String(r),
            ...s,
            children: e
          })
        }),
        kt = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          ...r
        }, s) {
          const {
            variant: n
          } = (0, o.useContext)(wt), i = (0, g.v6)({
            className: ht({
              variant: n
            })
          }, r), l = t ? _.DX : me;
          return (0, a.jsx)(l, {
            ref: s,
            ...i,
            children: e
          })
        }),
        vt = (0, o.forwardRef)(function({
          embla: e,
          currentSlide: t,
          totalSlides: r,
          label: s,
          onBulletClick: n,
          onBulletKeyDown: i,
          setDotRef: l,
          setFillRef: d,
          asChild: u,
          forcePause: b,
          ...h
        }, w) {
          const [y, k] = (0, o.useState)(!1), v = !y && !b, {
            formatMessage: j
          } = (0, c.useIntl)(), {
            trackEvent: C
          } = x(), R = (0, f.Ub)(p.f.mobile), S = u ? _.DX : "div", I = (0, g.v6)({
            className: "g7xdpgd"
          }, h), N = (0, o.useCallback)(() => {
            k(e => (C({
              event: "cta_other",
              text: e ? "toggle play" : "toggle pause"
            }), !e))
          }, []);
          return (0, o.useEffect)(() => {
            const t = e?.plugins?.()?.autoplay;
            t && (v ? t.play() : t.stop())
          }, [e, v]), (0, o.useEffect)(() => {
            if (!e) return;
            const t = () => {
                b || k(!1)
              },
              r = () => {};
            return e.on("select", t), e.on("autoplay:play", t), e.on("autoplay:stop", r), () => {
              e.off("select", t), e.off("autoplay:play", t), e.off("autoplay:stop", r)
            }
          }, [e, b]), (0, a.jsx)(S, {
            ref: w,
            ...I,
            children: (0, a.jsxs)("div", {
              className: "g7xdpgg",
              "data-disabled": String(b),
              children: [r > 1 && (0, a.jsxs)("div", {
                className: "g7xdpge",
                children: [(0, a.jsx)(m.IconButton, {
                  className: "g7xdpg6",
                  icon: v ? "Pause" : "Play",
                  label: j(v ? dt.hero_carousel_pause_button : dt.hero_carousel_play_button),
                  size: "SM",
                  appearance: "ghost",
                  onPress: N
                }), (0, a.jsx)(bt, {
                  type: R ? "line" : "pagination",
                  size: "large",
                  appearance: "ghost",
                  current: t,
                  pages: r,
                  onBulletClick: n,
                  onBulletKeyDown: i,
                  setDotRef: l,
                  setFillRef: d
                })]
              }), !R && s && (0, a.jsxs)("div", {
                className: "g7xdpgh",
                children: [(0, a.jsx)(m.Label, {
                  size: "XS",
                  appearance: "bold",
                  className: "g7xdpgi",
                  children: s
                }), (0, a.jsx)(st.ArrowDown, {
                  size: "MD",
                  label: s
                })]
              })]
            })
          })
        }),
        jt = () => g.X3 ? null : document.body,
        Ct = ({
          slides: e,
          size: t,
          delay: r = 6e3,
          defaultSlide: s = 0,
          loop: n = !0
        }) => {
          const {
            ref: i,
            inView: l
          } = (0, Ve.useScrollVisibility)(1 / 3), d = !l, {
            formatMessage: u
          } = (0, c.useIntl)(), {
            trackEvent: _,
            useTrackPageSectionImpression: m
          } = x(), {
            ref: g
          } = m({
            text: "Hero Carousel"
          }), b = (0, o.useRef)(e.map(() => ({
            background: (0, o.createRef)(),
            content: (0, o.createRef)(),
            logo: (0, o.createRef)(),
            heading: (0, o.createRef)(),
            ctas: (0, o.createRef)(),
            fade: (0, o.createRef)()
          }))), h = (0, f.Ub)("(max-width: 500px) or (max-aspect-ratio: 0.9)"), {
            embla: w,
            viewportRef: y,
            currentSlideRef: k,
            isPausedRef: v,
            onBulletClick: j,
            onBulletKeyDown: C,
            setDotRef: R,
            setFillRef: S
          } = (({
            defaultSlide: e = 0,
            delay: t = 6e3,
            duration: r = 50,
            loop: a = !1,
            slideRefs: s,
            totalSlides: n
          }) => {
            const i = .5,
              l = "power2.inOut",
              c = (0, o.useRef)(e),
              {
                trackEvent: d
              } = x(),
              [u, _] = (0, o.useState)(!1),
              m = (0, o.useRef)(!1),
              g = (0, o.useRef)([]),
              b = (0, o.useRef)([]),
              h = (0, o.useRef)(null),
              w = (0, o.useRef)(null),
              y = (0, o.useRef)(null),
              k = (0, f.Ub)(p.f.mobile),
              v = (0, o.useRef)([]);
            y.current || (y.current = (0, nt.A)({
              delay: 2 * t,
              stopOnInteraction: !1
            }));
            const [j, C] = (0, te.A)({
              axis: "x",
              align: "start",
              startIndex: e,
              containScroll: "trimSnaps",
              watchDrag: u,
              active: !0,
              duration: r,
              loop: a
            }, [y.current, (0, re.J)()]);
            ct(C, v.current, {
              isMobile: k,
              loop: a
            });
            const R = (0, o.useCallback)((e, t) => {
                g.current[t] = e
              }, []),
              S = (0, o.useCallback)((e, t) => {
                b.current[t] = e
              }, []),
              I = (0, o.useCallback)(() => {
                w.current?.kill(), w.current = null, m.current = !0
              }, []),
              N = (0, o.useCallback)(() => {
                w.current?.pause(), m.current = !0
              }, []),
              E = (0, o.useCallback)(e => {
                C && C.selectedScrollSnap() !== e && (c.current !== e && (c.current = e), C.scrollTo(e), y.current?.isPlaying() || (y.current?.stop(), N()), d({
                  event: "carousel_thumbnail_click",
                  position: e + 1,
                  position_max: C.slideNodes().length
                }))
              }, [C, y, c, N]);
            (0, o.useEffect)(() => {
              if (!C) return;
              const e = C.slideNodes(),
                r = [];
              for (let t = 0; t < e.length; t++) {
                const e = s.current[t],
                  a = e ? lt(e) : it();
                r.push(a)
              }
              v.current = r;
              const a = () => {
                  y.current?.reset();
                  const e = C?.selectedScrollSnap();
                  c.current = e, (e => {
                    b?.current?.length && b.current.forEach((t, r) => {
                      t && t.parentElement && "BUTTON" === t.parentElement.tagName && (t.parentElement.disabled = r === e)
                    })
                  })(e), I(), r.forEach(e => {
                    const t = ot(e, k);
                    t?.enter?.progress(1), t?.exit?.progress(0)
                  }), b.current.forEach((t, r) => {
                    t && (r === e || Ie.os.to(t, {
                      width: 10,
                      duration: i,
                      ease: l
                    }))
                  }), g.current.forEach((t, r) => {
                    if (!t) return;
                    const a = r === e;
                    Ie.os.to(t, {
                      opacity: a ? 1 : 0,
                      duration: i,
                      ease: l
                    })
                  }), (e => {
                    const r = g.current[e],
                      a = b.current[e];
                    r && a && C && (g.current.forEach(e => {
                      e && Ie.os.to(e, {
                        width: "0%",
                        duration: i,
                        ease: l
                      })
                    }), m.current = !1, Ie.os.to(a, {
                      width: 80,
                      duration: i,
                      ease: l
                    }), Ie.os.fromTo(r, {
                      opacity: 0
                    }, {
                      opacity: 1,
                      duration: i,
                      ease: l
                    }), w.current = Ie.os.to(r, {
                      width: "100%",
                      duration: t / 1e3,
                      ease: "none",
                      onComplete: () => {
                        if (!C) return;
                        const e = C.selectedScrollSnap() + 1,
                          t = e >= C.scrollSnapList().length ? 0 : e;
                        C.scrollTo(t)
                      }
                    }))
                  })(e), C.slideNodes().forEach((t, r) => {
                    t.querySelectorAll("a, button, input, textarea, select, [tabindex]").forEach(t => {
                      r === e ? t.removeAttribute("tabindex") : t.setAttribute("tabindex", "-1")
                    })
                  })
                },
                n = s.current.map(e => e.background?.current).filter(Boolean);
              if (0 === n.length) return;
              let o = !1;
              const d = n.map(e => new Promise(t => {
                if (e.complete) t();
                else {
                  const r = () => {
                    e.removeEventListener("load", r), t()
                  };
                  e.addEventListener("load", r)
                }
              }));
              return Promise.all(d).then(() => {
                o || a()
              }), C.on("select", a), C.on("resize", a), () => {
                o = !0, C.off("select", a), C.off("resize", a), r.forEach(e => {
                  e?.mobile.enter?.kill(), e?.mobile.exit?.kill(), e?.desktop.enter?.kill(), e?.desktop.exit?.kill()
                })
              }
            }, [C, y, s, I, k]), (0, o.useEffect)(() => {
              if (!C) return;
              let e = 0;
              const t = () => {
                  e = C.selectedScrollSnap()
                },
                r = () => {
                  const t = C.selectedScrollSnap();
                  e !== t && d({
                    event: "carousel_swipe"
                  })
                };
              return C.on("pointerDown", t), C.on("pointerUp", r), () => {
                C.off("pointerDown", t), C.off("pointerUp", r)
              }
            }, [C]), (0, o.useEffect)(() => {
              _(n > 1)
            }, [n]), (0, o.useEffect)(() => {
              if (!C) return;
              const e = () => {
                w.current?.resume(), m.current = !1
              };
              return C.on("autoplay:play", e), C.on("autoplay:stop", N), () => {
                C.off("autoplay:play", e), C.off("autoplay:stop", N)
              }
            }, [C, N]);
            const M = (0, o.useCallback)(e => t => {
              "Enter" !== t.key && " " !== t.key || (t.preventDefault(), C?.scrollTo(e))
            }, [C]);
            return (0, o.useEffect)(() => {
              const e = e => {
                C && "input" !== document.activeElement?.tagName.toLowerCase() && ("ArrowRight" === e.key && C.scrollNext(), "ArrowLeft" === e.key && C.scrollPrev())
              };
              return C?.rootNode().addEventListener("keydown", e), () => C?.rootNode()?.removeEventListener("keydown", e)
            }, [C]), (0, o.useEffect)(() => {
              const e = s.current[c.current].fade.current;
              if (!C || !e || "input" === document.activeElement?.tagName.toLowerCase()) return;
              const t = e => {
                const t = e.shiftKey,
                  r = Array.from((e => {
                    const t = s.current[e],
                      r = [...t.fade.current?.querySelectorAll("a[href], button:not(disabled), input:not(disabled), select, textarea, [tabindex]:not([tabindex='-1'])") || [], h?.current];
                    return t ? r : []
                  })(c.current));
                if (0 === r.length) return;
                const a = r[0],
                  n = r[r.length - 1];
                if (!t && document.activeElement === n) {
                  if (1 === C?.slideNodes().length) return;
                  e.preventDefault();
                  const t = b.current[c.current + 1];
                  t && t.focus()
                }
                if (t && document.activeElement === a) {
                  if (1 === C?.slideNodes().length || 0 === c.current) return;
                  e.preventDefault();
                  const t = b.current[c.current];
                  t && t.focus()
                }
              };
              return e.addEventListener("keydown", t), () => e.removeEventListener("keydown", t)
            }, [C]), {
              currentSlideRef: c,
              delay: t,
              embla: C,
              isPausedRef: m,
              viewportRef: j,
              setDotRef: S,
              setFillRef: R,
              playPauseRef: h,
              onBulletClick: E,
              onBulletKeyDown: M
            }
          })({
            defaultSlide: s,
            delay: r,
            loop: n,
            slideRefs: b,
            totalSlides: e.length
          }), {
            isUltraWideLandscape: I
          } = (() => {
            const e = (0, o.useCallback)(() => {
                const e = window.innerWidth / window.innerHeight;
                return [e >= 21 / 9, e <= 9 / 21]
              }, []),
              [t, r] = e(),
              [a, s] = (0, o.useState)(t),
              [n, i] = (0, o.useState)(r);
            return (0, o.useEffect)(() => {
              const t = () => {
                const [t, r] = e();
                s(t), i(r)
              };
              return window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
            }, []), {
              isUltraWideLandscape: a,
              isUltraTallPortrait: n
            }
          })();
          if ((({
              embla: e,
              slides: t,
              target: r = jt(),
              enabled: a = !0,
              defaultSlideColor: s = "#000"
            }) => {
              const n = (0, o.useRef)([]),
                i = (0, o.useRef)([]);
              (0, o.useEffect)(() => {
                if (!(e && a && t?.length && r)) return;
                const o = () => {
                    n.current = e.scrollSnapList(), i.current = t.map(e => [e.topGradientColor || s, e.bottomGradientColor || s]), c()
                  },
                  l = (e, t, r, a, s) => {
                    const n = {
                      "--leftSlideTopColor": e,
                      "--rightSlideTopColor": t,
                      "--leftSlideBottomColor": r,
                      "--rightSlideBottomColor": a,
                      "--mixPercent": `${s}%`
                    };
                    window.postMessage({
                      source: "dynamicSlideColors",
                      values: n
                    })
                  },
                  c = () => {
                    const t = Math.min(Math.max(e?.scrollProgress() ?? 0, 0), 1),
                      r = n.current,
                      a = Math.max(r.findIndex(e => e > t), 0),
                      o = a - 1 >= 0 ? a - 1 : r.length - 1,
                      [c, d] = i.current[a] ?? s,
                      [u, _] = i.current[o] ?? s,
                      m = Math.max(r[o] ?? 0, 0),
                      g = r[1] ?? 1,
                      f = Math.round((t - m) / g * 100);
                    l(u, c, _, d, f)
                  };
                return 1 === t?.length ? (() => {
                  const [e, t] = i.current[0] ?? [s, s];
                  l(e, e, t, t, 0)
                })() : (c(), e.on("scroll", c), e.on("reInit", c), e.on("slidesChanged", o), o()), () => {
                  e?.off("scroll", c), e?.off("reInit", c), e?.off("slidesChanged", o)
                }
              }, [a, e, t.length, s])
            })({
              embla: w,
              slides: e
            }), (0, o.useEffect)(() => {
              const t = t => {
                const r = t.selectedScrollSnap();
                l && _({
                  event: "banner_item_impression",
                  card_id: e[r].sys.id,
                  card_name: e[r].title,
                  position: r + 1,
                  position_max: e.length
                })
              };
              return w && (t(w), w?.on("select", t)), () => {
                w?.off("select", t)
              }
            }, [w]), !e?.length) return null;
          const N = () => {
            v.current || w?.plugins().autoplay.stop()
          };
          return (0, a.jsxs)(xt, {
            ref: g,
            slides: e,
            variant: t,
            tabIndex: -1,
            onCarouselDrag: () => {},
            children: [(0, a.jsx)("div", {
              ref: i,
              children: (0, a.jsx)(yt, {
                ref: y,
                forcePause: d,
                children: e.map((e, t) => (0, a.jsx)(kt, {
                  ref: b.current[t].fade,
                  variant: "full",
                  children: (0, a.jsxs)(Ye, {
                    bottomGradientColor: e.bottomGradientColor,
                    size: Oe(e.title),
                    children: [(0, a.jsx)(Je, {
                      ref: b.current[t].background,
                      src: e.background,
                      context: h ? "2:3" : I ? "32:9" : "21:9"
                    }), (0, a.jsxs)(Qe, {
                      ref: b.current[t].content,
                      invisible: 0 === t,
                      children: [(0, a.jsx)(rt, {
                        ref: b.current[t].logo,
                        src: e.logo
                      }), (0, a.jsxs)(Ze, {
                        ref: b.current[t].heading,
                        children: [e.eyebrow && (0, a.jsx)(et, {
                          size: "LG",
                          appearance: "bold",
                          children: e.eyebrow
                        }), e.title && (0, a.jsx)(tt, {
                          children: e.title
                        })]
                      }), e.ctasCollection?.items && (0, a.jsx)(at, {
                        ref: b.current[t].ctas,
                        children: e.ctasCollection.items.map(e => (0, a.jsx)(Ce, {
                          block: e,
                          size: "MD",
                          onClick: N
                        }, e.sys.id))
                      })]
                    })]
                  })
                }, t))
              })
            }), e.length > 1 && (0, a.jsx)(vt, {
              totalSlides: e.length,
              embla: w,
              currentSlide: k.current,
              setDotRef: R,
              setFillRef: S,
              onBulletClick: j,
              onBulletKeyDown: C,
              label: "full_height" === t ? u(qe.hp_hero_carousel_scroll_down_label) : void 0,
              forcePause: d
            })]
          })
        },
        Rt = "WwwFeaturedContentCarousel";
      var St = "var(--_19vg3kg0)";
      const It = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = r ? _.DX : "div",
            o = (0, g.v6)({
              "data-testid": t,
              className: "_19vg3kg1 _1betujy6 _1betujy5"
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Nt = (0, o.forwardRef)(function({
          backgroundColor: e = "transparent",
          children: t,
          testId: r,
          asChild: s,
          altText: n,
          ...i
        }, o) {
          const l = s ? _.DX : "a",
            c = (0, g.v6)({
              "data-testid": r,
              className: "_19vg3kg2",
              "aria-label": n,
              style: (0, k.DI)({
                [St]: e
              })
            }, i);
          return (0, a.jsx)(l, {
            ref: o,
            ...c,
            children: t
          })
        }),
        Et = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          src: s,
          ...n
        }, i) {
          const o = r ? _.DX : "div",
            l = (0, g.v6)({
              "data-testid": t,
              className: "_19vg3kg3",
              style: {
                backgroundImage: `url(${s})`
              }
            }, n);
          return (0, a.jsx)(o, {
            ref: i,
            ...l,
            children: e
          })
        }),
        Mt = (0, o.forwardRef)(function({
          src: e,
          ...t
        }, r) {
          const s = (0, g.v6)({
            src: e,
            className: "_19vg3kg4",
            context: e.context
          }, t);
          return (0, a.jsx)(j, {
            ref: r,
            ...s
          })
        }),
        Ft = "WwwBanner",
        Dt = (0, o.createContext)({
          colorMode: void 0,
          headerTextColor: void 0,
          primaryAccentColor: void 0,
          secondaryAccentColor: void 0
        });
      var Wt = r(9738),
        At = r.n(Wt);
      (0, D.c)({
        defaultClassName: "dlfce22",
        variantClassNames: {
          appearance: {
            accent: "dlfce23",
            primary: "dlfce24",
            secondary: "dlfce25",
            tertiary: "dlfce26",
            ghost: "dlfce27",
            information: "dlfce28",
            danger: "dlfce29"
          },
          size: {
            small: "dlfce2a",
            medium: "dlfce2b",
            large: "dlfce2c"
          }
        },
        defaultVariants: {
          appearance: "primary"
        },
        compoundVariants: []
      });
      const zt = (0, o.createContext)({
          totalItems: 0,
          itemIndex: 0
        }),
        Pt = ({
          block: e,
          ...t
        }) => {
          const r = (0, o.useContext)(n.BlockRendererContext),
            {
              parentIds: s,
              sectionImpressionData: i
            } = r,
            {
              useTrackPageSectionImpression: l
            } = x(),
            {
              ref: c
            } = l({
              text: "Deck"
            }),
            {
              primaryAccentColor: d,
              secondaryAccentColor: u
            } = (0, o.useContext)(Dt),
            {
              viewportRef: _,
              controlsVisible: m,
              prevButtonDisabled: g,
              nextButtonDisabled: f,
              onPrevButtonClick: p,
              onNextButtonClick: b
            } = (({
              defaultSlide: e = 0
            }) => {
              const {
                trackEvent: t
              } = x(), [r, a] = (0, o.useState)(!0), [s, n] = (0, o.useState)(!0), [i, l] = (0, o.useState)(!1), c = {
                axis: "x",
                align: "start",
                startIndex: e,
                active: !0,
                containScroll: "trimSnaps",
                loop: !1,
                skipSnaps: !0,
                inViewThreshold: .9
              }, [d, u] = (0, te.A)(c, [(0, re.J)()]), _ = (0, o.useCallback)(() => {
                u && (u.scrollPrev(), t({
                  event: "carousel_previous"
                }))
              }, [u]), m = (0, o.useCallback)(() => {
                u && (u.scrollNext(), t({
                  event: "carousel_next"
                }))
              }, [u]), g = (0, o.useCallback)(() => {
                u && (a(!u.canScrollPrev()), n(!u.canScrollNext()))
              }, [u]), f = () => {
                if (!u) return;
                const e = u.internalEngine().scrollSnaps.length > 1;
                l(e), u.reInit({
                  active: e
                })
              };
              return (0, o.useEffect)(() => {
                if (!u) return;
                g(), u.on("reInit", g).on("select", g);
                const e = At()(f, 25);
                return window.addEventListener("resize", e), f(), () => {
                  window.removeEventListener("resize", e)
                }
              }, [u, g]), (0, o.useEffect)(() => {
                if (!u) return;
                let e = 0;
                const r = () => {
                    e = u.selectedScrollSnap()
                  },
                  a = () => {
                    const r = u.selectedScrollSnap();
                    e !== r && t({
                      event: "carousel_swipe"
                    })
                  };
                return u.on("pointerDown", r), u.on("pointerUp", a), () => {
                  u.off("pointerDown", r), u.off("pointerUp", a)
                }
              }, [u]), {
                embla: u,
                viewportRef: d,
                controlsVisible: i,
                prevButtonDisabled: r,
                nextButtonDisabled: s,
                onPrevButtonClick: _,
                onNextButtonClick: m
              }
            })({
              defaultSlide: 0
            });
          if (!e) return;
          const h = e.cardsCollection?.items?.length ?? 0;
          return (0, a.jsxs)(le, {
            ref: c,
            className: "dlfce20",
            carouselRef: _,
            ...t,
            children: [(0, a.jsxs)(ce, {
              children: [(0, a.jsx)(de, {
                level: 5,
                children: e.title
              }), (0, a.jsx)(ge, {
                appearance: e.navigationButtonAppearance ?? "secondary",
                size: "SM",
                override_backgroundColor: d,
                override_textColor: u,
                isVisible: m,
                prevButtonDisabled: g,
                nextButtonDisabled: f,
                onPrevButtonClick: p,
                onNextButtonClick: b
              })]
            }), (0, a.jsx)(ue, {
              children: e.cardsCollection?.items?.map((t, r) => (0, a.jsx)(zt.Provider, {
                value: {
                  totalItems: h,
                  itemIndex: r
                },
                children: (0, a.jsx)(me, {
                  variant: e.variant,
                  children: (0, a.jsx)(n.BlockRenderer, {
                    block: t,
                    parentIds: s,
                    sectionImpressionData: i
                  }, e.sys.id)
                })
              }, `${t?.sys?.id}-${r}`))
            })]
          })
        },
        Tt = "WwwDeck";
      var Gt = (0, D.c)({
        defaultClassName: "_120g2g71",
        variantClassNames: {
          appearance: {
            accent: "_120g2g72",
            primary: "_120g2g73",
            secondary: "_120g2g74",
            tertiary: "_120g2g75",
            ghost: "_120g2g76",
            information: "_120g2g77",
            danger: "_120g2g78"
          }
        },
        defaultVariants: {
          appearance: "primary"
        },
        compoundVariants: []
      });
      const Lt = ({
          block: e
        }) => {
          const {
            totalItems: t,
            itemIndex: r
          } = (0, o.useContext)(zt), {
            trackEvent: s
          } = x(), n = !!e.cta?.link?.url, i = (0, a.jsxs)(U, {
            gradientColor: e?.gradientColor,
            interactive: !0,
            children: [(0, a.jsx)(K, {
              alt: e?.ariaLabel,
              src: e.backgroundImage,
              context: "2:3"
            }), (0, a.jsx)(J, {
              image: e.logo,
              size: e.logoSize
            }), (0, a.jsxs)(H, {
              children: [e.text && (0, a.jsx)(Z, {
                asChild: !0,
                children: (0, a.jsx)(m.Body, {
                  children: e.text
                })
              }), e.cta && (0, a.jsx)(ee, {
                appearance: e.cta.appearance,
                override_backgroundColor: e.cta.backgroundColor,
                size: "MD",
                asChild: !0,
                children: (0, a.jsx)("span", {
                  className: Gt({
                    appearance: e.cta.appearance
                  }),
                  tabIndex: -1,
                  children: e.cta?.text
                })
              })]
            })]
          });
          return n ? (0, a.jsx)(Ce, {
            block: e.cta,
            className: "_120g2g70",
            onClick: () => {
              s({
                event: "card_click",
                card_id: e?.sys?.id,
                position: r + 1,
                position_max: t
              })
            },
            asChild: !0,
            children: i
          }) : i
        },
        Bt = "WwwImageCard",
        Vt = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          layout: r = "primary",
          aspect: s = "wide",
          transparent: n = !1,
          className: i,
          asChild: o,
          ...l
        }, c) {
          const d = o ? _.DX : "div",
            m = (0, g.v6)({
              className: u()("sp6aw70", i),
              "data-layout": r,
              "data-aspect": s,
              "data-transparent": !!n || void 0,
              "data-testid": t
            }, l);
          return (0, a.jsx)(d, {
            ref: c,
            ...m,
            children: e
          })
        }),
        qt = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = r ? _.DX : "div",
            o = (0, g.v6)({
              className: "sp6aw71",
              "data-testid": t
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: (0, a.jsx)("div", {
              className: "sp6aw72",
              children: e
            })
          })
        }),
        Ot = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = r ? _.DX : "div",
            o = (0, g.v6)({
              className: "sp6aw73",
              "data-testid": t
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        $t = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = r ? _.DX : m.Text,
            o = (0, g.v6)({
              className: "sp6aw75 sp6aw74",
              "data-testid": t
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Xt = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = r ? _.DX : m.Heading,
            o = (0, g.v6)({
              className: "sp6aw76 sp6aw74",
              "data-testid": t
            }, s);
          return (0, a.jsx)(i, {
            level: 4,
            ref: n,
            ...o,
            children: e
          })
        }),
        Ut = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = r ? _.DX : "time",
            o = (0, g.v6)({
              className: "sp6aw77 sp6aw74",
              "data-testid": t
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Kt = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = r ? _.DX : "div",
            o = (0, g.v6)({
              className: "sp6aw78",
              "data-testid": t
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Ht = ({
          width: e = "100%",
          height: t = "100%"
        }) => (0, a.jsx)("div", {
          className: "_9c411v3 _9c411v1",
          "aria-hidden": "true",
          style: {
            width: e,
            height: t
          }
        }),
        Yt = ({
          width: e = "100%"
        }) => (0, a.jsx)("span", {
          className: "_9c411v2 _9c411v1",
          "aria-hidden": "true",
          style: {
            width: e
          }
        });
      var Jt = "_17xncyz0";
      const Qt = ({
          layout: e,
          aspect: t,
          transparent: r,
          testId: s
        }) => (0, a.jsxs)(Vt, {
          className: Jt,
          layout: e,
          aspect: t,
          transparent: r,
          testId: s,
          children: [(0, a.jsx)(qt, {
            children: (0, a.jsx)(Ht, {
              width: "100%"
            })
          }), (0, a.jsxs)(Ot, {
            children: [(0, a.jsx)($t, {
              children: (0, a.jsx)(Yt, {
                width: "30%"
              })
            }), (0, a.jsxs)(Xt, {
              children: [(0, a.jsx)(Yt, {}), (0, a.jsx)(Yt, {})]
            }), (0, a.jsx)(Ut, {
              children: (0, a.jsx)(Yt, {
                width: "40%"
              })
            })]
          })]
        }),
        Zt = ({
          loading: e,
          data: t,
          aspect: r,
          layout: s,
          transparent: n,
          handleStoryClick: i,
          testId: o
        }) => {
          const l = t?.preview_images_parsed.newswire_block["square" === r ? "square" : "d16x9"],
            c = `${l}?im=Resize,width=${"primary"===s?1200:600}`;
          return e || !t ? (0, a.jsx)(Qt, {
            layout: s,
            aspect: r,
            testId: o
          }) : (0, a.jsx)(ye, {
            className: "_17xncyz1",
            href: t.url,
            onClick: i,
            children: (0, a.jsxs)(Vt, {
              className: Jt,
              layout: s,
              aspect: r,
              transparent: n,
              testId: o,
              children: [(0, a.jsx)(qt, {
                children: (0, a.jsx)("img", {
                  src: c,
                  loading: "lazy"
                })
              }), (0, a.jsxs)(Ot, {
                children: [(0, a.jsxs)(Kt, {
                  children: [(0, a.jsx)($t, {
                    children: t.primary_tags[0].name
                  }), (0, a.jsx)(Xt, {
                    children: t.title
                  })]
                }), (0, a.jsx)(Ut, {
                  dateTime: t.created,
                  children: t.created_formatted
                })]
              })]
            })
          })
        };
      var er = r(87592);
      const tr = Ve.gql`
fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {
    id: id_hash
    url
    title
    created
    created_formatted
    primary_tags {
        id
        name
    }
    secondary_tags {
        id
        name
    }
    preview_images_parsed {
        newswire_block {
            square
            d16x9
            _fallback
        }
    }
}`,
        rr = "WwwEditorialPost";
      var ar = (0, D.c)({
        defaultClassName: "aof7fm2",
        variantClassNames: {
          type: {
            tablet: "aof7fm3",
            desktop: "aof7fm4"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const sr = ({
          stories: e
        }) => {
          const {
            trackEvent: t,
            useTrackPageSectionImpression: r
          } = x(), {
            ref: s
          } = r({
            text: "Editorial Grid"
          }), {
            viewportRef: n
          } = (({
            defaultSlide: e = 0
          }) => {
            const {
              trackEvent: t
            } = x(), r = {
              axis: "x",
              align: "start",
              startIndex: e,
              active: !0,
              containScroll: "trimSnaps",
              loop: !1,
              skipSnaps: !0,
              inViewThreshold: .9
            }, [a, s] = (0, te.A)(r, [(0, re.J)()]);
            return (0, o.useEffect)(() => {
              if (!s) return;
              let e = 0;
              const r = () => {
                  e = s.selectedScrollSnap()
                },
                a = () => {
                  const r = s.selectedScrollSnap();
                  e !== r && t({
                    event: "carousel_swipe"
                  })
                };
              return s.on("pointerDown", r), s.on("pointerUp", a), () => {
                s.off("pointerDown", r), s.off("pointerUp", a)
              }
            }, [s]), {
              embla: s,
              viewportRef: a
            }
          })({
            defaultSlide: 0
          }), i = (0, f.Ub)(p.f.tabletMediumAndLarger), l = e[0], c = e.slice(1), d = (r, a) => () => {
            const s = r.block,
              n = {
                position: a,
                position_max: e.length,
                event: "card_click",
                card_name: s?.title,
                card_id: r.tinaId,
                link_url: s?.url
              };
            t(n)
          };
          return (0, a.jsx)("div", {
            ref: s,
            "data-testid": "editorial-grid-module",
            children: (0, a.jsxs)("div", {
              className: i ? "aof7fm0 _1betujy6 _1betujy5" : "",
              children: [(0, a.jsx)("div", {
                className: "aof7fm5",
                children: (0, a.jsx)(le, {
                  testId: "newswire-carousel",
                  carouselRef: n,
                  className: "aof7fm7",
                  children: (0, a.jsxs)(ue, {
                    children: [l && (0, a.jsx)(me, {
                      children: (0, a.jsx)(Zt, {
                        data: l.block,
                        layout: "secondary",
                        aspect: "wide",
                        handleStoryClick: d(l, 1),
                        testId: l.tinaId
                      })
                    }, `${l.tinaId}_primary`), c.map((e, t) => (0, a.jsx)(me, {
                      children: (0, a.jsx)(Zt, {
                        data: e.block,
                        layout: "secondary",
                        aspect: "wide",
                        handleStoryClick: d(e, t + 2),
                        testId: e.tinaId
                      })
                    }, `${e.tinaId}_secondary_${t}`))]
                  })
                })
              }), l && (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)("div", {
                  className: ar({
                    type: "tablet"
                  }),
                  "data-testid": "primary-story-tablet",
                  children: (0, a.jsx)(Zt, {
                    data: l.block,
                    layout: "primary",
                    aspect: "wide",
                    handleStoryClick: d(l, 1),
                    testId: l.tinaId
                  })
                }), (0, a.jsx)("div", {
                  className: ar({
                    type: "desktop"
                  }),
                  "data-testid": "primary-story-desktop",
                  children: (0, a.jsx)(Zt, {
                    data: l.block,
                    layout: "primary",
                    aspect: "wide",
                    handleStoryClick: d(l, 1),
                    testId: l.tinaId
                  })
                })]
              }), (0, a.jsx)("div", {
                className: "aof7fm6",
                "data-testid": "tertiary-stories",
                children: c.map((e, t) => (0, a.jsx)("div", {
                  children: (0, a.jsx)(Zt, {
                    data: e.block,
                    layout: "tertiary",
                    aspect: "square",
                    transparent: !0,
                    handleStoryClick: d(e, t + 2),
                    testId: e.tinaId
                  })
                }, `${e.tinaId}_tertiary_${t}`))
              })]
            })
          })
        },
        nr = Ve.gql`
fragment postFields on RockstarGames_Newswire_Model_Entity_Post_o {
    id: id_hash
    url
    title
    created
    created_formatted
    primary_tags {
        id
        name
    }
    secondary_tags {
        id
        name
    }
    preview_images_parsed {
        newswire_block {
            square
            d16x9
            _fallback
        }
    }
}`,
        ir = "WwwEditorialGridModule";
      var or = (0, D.c)({
          defaultClassName: "_2g8q31a",
          variantClassNames: {
            imagePlacement: {
              left: "_2g8q31b",
              right: "_2g8q31c"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        lr = (0, D.c)({
          defaultClassName: "_2g8q31d",
          variantClassNames: {
            imagePlacement: {
              left: "_2g8q31e",
              right: "_2g8q31f"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }),
        cr = "var(--_2g8q310)",
        dr = "_2g8q31l",
        ur = (0, D.c)({
          defaultClassName: "_2g8q314",
          variantClassNames: {
            contentAlignment: {
              center: "_2g8q315",
              left: "_2g8q316"
            },
            imagePlacement: {
              left: "_2g8q317",
              right: "_2g8q318"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const _r = (0, o.createContext)(void 0),
        mr = (0, o.forwardRef)(function({
          colorMode: e = "dark",
          backgroundColor: t,
          gradientEnabled: r = !0,
          imagePlacement: s = "left",
          children: n,
          className: i,
          asChild: l,
          testId: c,
          ...d
        }, m) {
          const b = l ? _.DX : "div",
            h = "dark" === e ? "#000000" : "lightgrey",
            w = (0, g.v6)({
              "data-testid": c,
              className: u()(i, "_2g8q312 _1betujy6 _1betujy5"),
              style: (0, k.DI)({
                [cr]: t ?? h
              })
            }, d),
            x = (0, f.Ub)(p.f.mobile),
            y = "left" === s ? n : o.Children.toArray(n).reverse();
          return (0, a.jsx)(_r.Provider, {
            value: {
              colorMode: e,
              backgroundColor: t,
              imagePlacement: s,
              gradientEnabled: r
            },
            children: (0, a.jsx)(b, {
              ref: m,
              ...w,
              children: x ? n : y
            })
          })
        }),
        gr = (0, o.forwardRef)(function({
          contentAlignment: e,
          children: t,
          testId: r,
          asChild: s,
          ...n
        }, i) {
          const l = (0, o.useContext)(_r);
          if (!l) return;
          const {
            colorMode: c,
            gradientEnabled: d,
            imagePlacement: m
          } = l, f = s ? _.DX : "div", p = (0, M.m)(c ?? "dark", "normal"), b = (0, g.v6)({
            "data-testid": r,
            className: u()(p, "_2g8q313", ur({
              contentAlignment: e,
              imagePlacement: m
            }), !d && "_2g8q319")
          }, n);
          return (0, a.jsx)(f, {
            ref: i,
            ...b,
            children: t
          })
        }),
        fr = (0, o.forwardRef)(function({
          image: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = (0, f.Ub)(p.f.tabletMediumAndLarger) ? "16:9" : "1:1",
            l = (0, o.useContext)(_r);
          if (!l || !e) return;
          const {
            imagePlacement: c,
            gradientEnabled: d
          } = l, u = r ? _.DX : "div", m = (0, g.v6)({
            "data-testid": t,
            className: or({
              imagePlacement: c
            })
          }, s);
          return (0, a.jsxs)(u, {
            ref: n,
            ...m,
            children: [d && (0, a.jsx)("div", {
              className: lr({
                imagePlacement: c
              })
            }), (0, a.jsx)(j, {
              context: i,
              src: e,
              className: "_2g8q31g"
            })]
          })
        }),
        pr = (0, o.forwardRef)(function({
          ...e
        }, t) {
          return (0, a.jsx)($, {
            ref: t,
            ...e
          })
        }),
        br = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...r
        }, s) {
          if (!e) return;
          const n = (0, g.v6)({
            "data-testid": t,
            className: "_2g8q31h"
          }, r);
          return (0, a.jsx)(m.Button, {
            ref: s,
            ...n,
            children: e
          })
        }),
        hr = (0, o.forwardRef)(function({
          children: e,
          ...t
        }, r) {
          if (!e) return;
          const s = (0, g.v6)({
            className: "_2g8q31i"
          }, t);
          return (0, a.jsx)(m.Heading, {
            ref: r,
            ...s,
            children: e
          })
        }),
        wr = (0, o.forwardRef)(function({
          children: e,
          ...t
        }, r) {
          if (!e) return;
          const s = (0, g.v6)({
            className: "_2g8q31j"
          }, t);
          return (0, a.jsx)(m.Body, {
            ref: r,
            ...s,
            children: e
          })
        }),
        xr = (0, o.forwardRef)(function({
          className: e,
          children: t,
          testId: r,
          ...s
        }, n) {
          if (!t) return;
          const i = (0, g.v6)({
            "data-testid": r,
            className: u()("_2g8q31k", e)
          }, s);
          return (0, a.jsx)("div", {
            ref: n,
            ...i,
            children: t
          })
        }),
        yr = (0, o.forwardRef)(function({
          markdown: e,
          onHyperlinkClick: t,
          testId: r,
          ...s
        }, i) {
          if (!e) return;
          const o = (0, g.v6)({
              "data-testid": r,
              className: dr
            }, s),
            l = {
              [n.ContentfulTypes.BLOCKS.PARAGRAPH]: (e, t) => (0, a.jsx)(m.Body, {
                size: "XS",
                className: dr,
                children: t
              }),
              [n.ContentfulTypes.INLINES.HYPERLINK]: (e, r) => {
                return (0, a.jsx)("a", {
                  href: e.data.uri,
                  className: "_2g8q31m",
                  onClick: (s = e, () => t?.(s)),
                  children: r
                });
                var s
              }
            };
          return (0, a.jsx)("div", {
            ref: i,
            ...o,
            children: (0, a.jsx)(n.RsgMdTextComponent, {
              markdown: e,
              rsgRichTextOptions: {
                renderNode: l
              }
            })
          })
        }),
        kr = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...r
        }, s) {
          if (!e) return;
          const n = (0, g.v6)({
            "data-testid": t,
            className: "_2g8q31n"
          }, r);
          return (0, a.jsx)(m.Label, {
            ref: s,
            ...n,
            size: "XS",
            appearance: "bold",
            children: e
          })
        }),
        vr = ({
          block: e
        }) => {
          const {
            trackEvent: t,
            trackRichTextHyperlink: r,
            useTrackPageSectionImpression: s
          } = x(), {
            ref: n
          } = s({
            text: "Promo Module"
          });
          return (0, a.jsxs)(mr, {
            colorMode: "dark",
            backgroundColor: e.backgroundColor,
            gradientEnabled: e.enableGradient,
            imagePlacement: e.imagePlacement,
            ref: n,
            children: [(0, a.jsx)(fr, {
              image: e.backgroundImage
            }), (0, a.jsxs)(gr, {
              contentAlignment: e.contentAlignment,
              children: [(0, a.jsx)(kr, {
                children: e.badge
              }), (0, a.jsx)(pr, {
                image: e.foregroundImage,
                size: e.foregroundImageSize
              }), (0, a.jsxs)(xr, {
                children: [(0, a.jsx)(hr, {
                  level: 4,
                  children: e.headline
                }), (0, a.jsx)(wr, {
                  size: "MD",
                  children: e.description
                })]
              }), e.cta && (0, a.jsx)(br, {
                appearance: e.cta.appearance,
                override_backgroundColor: e.cta.backgroundColor,
                size: "MD",
                onPress: (i = e.cta, () => t({}, i)),
                asChild: !0,
                children: (0, a.jsx)("a", {
                  href: e.cta.link?.url,
                  children: e.cta.text
                })
              }), (0, a.jsx)(yr, {
                markdown: e.legalText,
                onHyperlinkClick: e => r(e)
              })]
            })]
          });
          var i
        },
        jr = "WwwPromoModule";
      var Cr = r(49292);
      const Rr = (0, o.createContext)({
          imagesLoaded: !1,
          setImagesLoaded: () => {}
        }),
        Sr = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const [i, l] = (0, o.useState)(!1), c = r ? _.DX : "section", d = (0, g.v6)({
            "data-testid": t,
            className: "_8a5o1l0"
          }, s);
          return (0, a.jsx)(Rr.Provider, {
            value: {
              imagesLoaded: i,
              setImagesLoaded: l
            },
            children: (0, a.jsx)(c, {
              ref: n,
              ...d,
              children: e
            })
          })
        }),
        Ir = (0, o.forwardRef)(function({
          games: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = r ? _.DX : "div",
            o = (0, g.v6)({
              "data-testid": t,
              className: "_8a5o1l1"
            }, s),
            l = e ? Math.floor(e.length / 2) : 0,
            c = e?.slice(0, l) || [],
            d = e?.slice(l) || [];
          let u = !1;
          return u = !0, (0, a.jsxs)(i, {
            ref: n,
            ...o,
            children: [c.length > 0 && (0, a.jsx)(Er, {
              rowContent: c,
              delay: 0,
              speed: .2
            }), d.length > 0 && (0, a.jsx)(Er, {
              rowContent: d,
              delay: 10,
              speed: .16
            })]
          })
        }),
        Nr = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = r ? _.DX : "div",
            o = (0, g.v6)({
              "data-testid": t,
              className: "_8a5o1l7 _1betujy6 _1betujy5"
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Er = (0, o.forwardRef)(function({
          rowContent: e,
          delay: t = 0,
          speed: r = .2
        }, s) {
          const [n] = (0, te.A)({
            loop: !0,
            dragFree: !0,
            startIndex: 0,
            watchDrag: !1,
            containScroll: "keepSnaps"
          }, [(0, Cr.A)({
            playOnInit: !0,
            speed: r,
            direction: "forward",
            startDelay: t,
            stopOnInteraction: !1,
            stopOnMouseEnter: !1,
            stopOnFocusIn: !1,
            rootNode: null
          })]), i = (0, f.UP)(n, s);
          let o = !1;
          return o = !0, (0, a.jsx)("div", {
            className: "_8a5o1l2",
            ref: i,
            children: (0, a.jsx)("div", {
              className: "_8a5o1l3",
              children: e?.map((e, t) => (0, a.jsx)(j, {
                className: "_8a5o1l6",
                src: e?.boxArt,
                context: "mobile",
                sizes: "(min-width: 1570px) 260px, 20vw",
                loading: "eager"
              }, `${t}-${e?.boxArt?.altText}`))
            })
          })
        }),
        Mr = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          ...s
        }, n) {
          const i = r ? _.DX : "div",
            o = (0, g.v6)({
              "data-testid": t,
              className: "_8a5o1l8"
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Fr = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...r
        }, s) {
          const n = (0, g.v6)({
            "data-testid": t,
            className: "_8a5o1l9"
          }, r);
          return (0, a.jsx)(m.Heading, {
            ref: s,
            ...n,
            level: 3,
            children: e
          })
        }),
        Dr = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          ...r
        }, s) {
          const n = (0, g.v6)({
            "data-testid": t,
            className: "_8a5o1la"
          }, r);
          return (0, a.jsx)(m.Body, {
            ref: s,
            ...n,
            size: "LG",
            appearance: "bold",
            children: e
          })
        }),
        Wr = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          link: r,
          ...s
        }, n) {
          const i = (0, g.v6)({
            "data-testid": t,
            className: "_8a5o1lb"
          }, s);
          return r?.url ? (0, a.jsx)(m.Button, {
            ref: n,
            ...i,
            size: "MD",
            asChild: !0,
            children: (0, a.jsx)(ye, {
              href: r?.url,
              rel: "noreferrer",
              target: "_self",
              children: e
            })
          }) : (0, a.jsx)(m.Button, {
            ref: n,
            ...i,
            size: "MD",
            children: e
          })
        }),
        Ar = "WwwImagesMarqueeModule",
        zr = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: r,
          ...s
        }, n) {
          const i = t ? _.DX : "div",
            o = (0, g.v6)({
              "data-testid": r,
              className: "_4fo4mk0 _1betujy6 _1betujy5"
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Pr = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: r,
          ...s
        }, n) {
          const i = t ? _.DX : m.Heading,
            o = (0, g.v6)({
              "data-testid": r,
              className: "_4fo4mk1"
            }, s);
          return (0, a.jsx)(i, {
            level: 2,
            ref: n,
            ...o,
            children: e
          })
        }),
        Tr = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: r,
          ...s
        }, n) {
          const i = t ? _.DX : "div",
            o = (0, g.v6)({
              "data-testid": r,
              className: "_4fo4mk2"
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Gr = (e, t) => (0, a.jsx)(m.Heading, {
          level: 3,
          className: "_4fo4mk3",
          children: t
        }),
        Lr = {
          [n.ContentfulTypes.BLOCKS.HEADING_1]: Gr,
          [n.ContentfulTypes.BLOCKS.HEADING_2]: Gr,
          [n.ContentfulTypes.BLOCKS.HEADING_3]: Gr,
          [n.ContentfulTypes.BLOCKS.HEADING_4]: Gr,
          [n.ContentfulTypes.BLOCKS.HEADING_5]: Gr,
          [n.ContentfulTypes.BLOCKS.HEADING_6]: Gr
        },
        Br = (0, o.forwardRef)(function({
          markdown: e,
          asChild: t,
          testId: r,
          ...s
        }, i) {
          const o = t ? _.DX : "div",
            l = (0, g.v6)({
              "data-testid": r,
              className: "_4fo4mk4"
            }, s);
          return (0, a.jsx)(o, {
            ref: i,
            ...l,
            children: (0, a.jsx)(n.RsgMdTextComponent, {
              markdown: e,
              rsgRichTextOptions: {
                renderNode: Lr
              }
            })
          })
        }),
        Vr = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          isDisabled: r,
          ...s
        }, n) {
          const i = (0, g.v6)({
            "data-testid": t,
            isDisabled: r
          }, s);
          return (0, a.jsx)(m.Button, {
            appearance: "primary",
            size: "MD",
            ref: n,
            ...i,
            children: e
          })
        });
      var qr = r(79867),
        Or = r(51931),
        $r = r(72408);
      const Xr = (0, c.defineMessages)({
          ns_successfully_subscribed_title: {
            id: "ns_successfully_subscribed_title",
            description: "Newsletter Subscription Alert - Successfully Subscribed title",
            defaultMessage: "Successfully Subscribed"
          },
          ns_successfully_subscribed_details: {
            id: "ns_successfully_subscribed_details",
            description: "Newsletter Subscription Alert - Successfully Subscribed details",
            defaultMessage: "You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page."
          },
          ns_error_preferences_title: {
            id: "ns_error_preferences_title",
            description: "Newsletter Subscription Alert - Error (Check Preferences) title",
            defaultMessage: "Error"
          },
          ns_error_preferences_details: {
            id: "ns_error_preferences_details",
            description: "Newsletter Subscription Alert - Error (Check Preferences) details",
            defaultMessage: "We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later."
          },
          ns_error_generic_title: {
            id: "ns_error_generic_title",
            description: "Newsletter Subscription Alert - Error (Generic) title",
            defaultMessage: "Error"
          },
          ns_error_generic_details: {
            id: "ns_error_generic_details",
            description: "Newsletter Subscription Alert - Error (Generic) details",
            defaultMessage: "We cannot sign up this email address to our newsletter at this time."
          },
          ns_already_subbed_title: {
            id: "ns_already_subbed_title",
            description: "Newsletter Subscription Alert - Already Subscribed title",
            defaultMessage: "Already Subscribed"
          },
          ns_already_subbed_details: {
            id: "ns_already_subbed_details",
            description: "Newsletter Subscription Alert - Already Subscribed details",
            defaultMessage: "You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page."
          },
          ns_check_email_title: {
            id: "ns_check_email_title",
            description: "Newsletter Subscription Alert - Check Email title",
            defaultMessage: "Check Your Email"
          },
          ns_check_email_details: {
            id: "ns_check_email_details",
            description: "Newsletter Subscription Alert - Check Email details",
            defaultMessage: "To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with."
          },
          ns_confirm_title: {
            id: "ns_confirm_title",
            description: "Newsletter Subscription Alert - Confirm your subsciption title",
            defaultMessage: "Confirm your subscription"
          },
          ns_confirm_details: {
            id: "ns_confirm_details",
            description: "Newsletter Subscription Alert - Confirm your subsciption details",
            defaultMessage: "Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below."
          },
          ns_confirm_after_register_title: {
            id: "ns_confirm_after_register_title",
            description: "Newsletter Subscription Alert - Confirmation box after successful register - no opt in during creation title",
            defaultMessage: "Confirm your subscription"
          },
          ns_confirm_after_register_details: {
            id: "ns_confirm_after_register_details",
            description: "Newsletter Subscription Alert - Confirmation box after successful register - no opt in during creation details",
            defaultMessage: "You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?"
          },
          ns_ok_button_text: {
            id: "ns_ok_button_text",
            description: "Newsletter Subscription Alert - OK button text",
            defaultMessage: "OK"
          },
          ns_manage_prefs_button_text: {
            id: "ns_manage_prefs_button_text",
            description: "Newsletter Subscription Alert - Manage Preferences button text",
            defaultMessage: "Manage Preferences"
          },
          ns_yes_subscribe_text: {
            id: "ns_yes_subscribe_text",
            description: "Newsletter Subscription Alert - Yes, Subscribe button text",
            defaultMessage: "Yes, Subscribe"
          },
          ns_go_back_text: {
            id: "ns_go_back_text",
            description: "Newsletter Subscription Alert - No, go back button text",
            defaultMessage: "No, Go Back"
          }
        }),
        Ur = {
          SUCCESS: {
            icon: "check",
            heading: Xr.ns_successfully_subscribed_title,
            bodyText: Xr.ns_successfully_subscribed_details,
            showManagePreferences: !0
          },
          CHECK_EMAIL: {
            icon: "mail",
            heading: Xr.ns_check_email_title,
            bodyText: Xr.ns_check_email_details
          },
          ERROR_PREFERENCES: {
            icon: "error",
            heading: Xr.ns_error_preferences_title,
            bodyText: Xr.ns_error_preferences_details,
            showManagePreferences: !0
          },
          ERROR_GENERIC: {
            icon: "error",
            heading: Xr.ns_error_generic_title,
            bodyText: Xr.ns_error_generic_details
          },
          ALREADY_SUBSCRIBED: {
            icon: "check",
            heading: Xr.ns_already_subbed_title,
            bodyText: Xr.ns_already_subbed_details,
            showManagePreferences: !0
          },
          NEW_ACCOUNT: {
            icon: "mail",
            heading: Xr.ns_confirm_after_register_title,
            bodyText: Xr.ns_confirm_after_register_details,
            showManagePreferences: !0
          },
          CONFIRM: {
            icon: "mail",
            heading: Xr.ns_confirm_title,
            bodyText: Xr.ns_confirm_details,
            showManagePreferences: !1
          }
        },
        Kr = {
          0: Ur.ERROR_PREFERENCES,
          1: Ur.SUCCESS,
          2: Ur.ERROR_PREFERENCES,
          3: Ur.ERROR_PREFERENCES,
          4: Ur.ERROR_GENERIC
        },
        Hr = (0, Ve.setMakeVarItem)({
          key: "subscriptionStatusReactive",
          value: (0, Ve.makeVar)(null)
        }),
        Yr = e => Hr(e),
        Jr = (e, t) => {
          const [r, a] = (0, o.useState)(), [s, n] = (0, o.useState)(!1), [i, l] = (0, o.useState)(!1), [d, u] = (0, o.useState)(!1), [_, m] = (0, o.useState)(!1), g = (0, Ve.useReactiveVar)(Hr), f = (0, c.useIntl)(), {
            track: p
          } = (0, h.useGtmTrack)(), b = {
            preferences: `https://${e.sc}.rockstargames.com/settings/email`,
            auth: `${e.login}?returnUrl=${window.location.pathname}%3Fmarketing%3Dtrue&lang=${e.lang}&newsletter=true`
          };
          (0, o.useEffect)(() => {
            r ? (l(!0), u(!1)) : l(!1)
          }, [r]);
          const w = {
              ...Ur.NEW_ACCOUNT,
              closeOnOutsideClick: !1,
              buttons: [{
                buttonText: f.formatMessage(Xr.ns_yes_subscribe_text),
                style: "monochrome",
                onClick: () => {
                  x()
                }
              }, {
                buttonText: f.formatMessage(Xr.ns_go_back_text),
                onClick: () => {
                  a(null)
                }
              }]
            },
            x = async () => (p({
              event: "cta_subscribe_news",
              section_layout: t.loggedIn ? "signed in" : "signed out",
              element_placement: "newsletter subscribe",
              text: "subscribe now"
            }), t.loggedIn || (window.location.href = b.auth), t.loggedIn && t.isAMinor ? (a(Ur.ERROR_GENERIC), m(!1), void p({
              event: "alert_error",
              text: "error message with no preferences link",
              element_placement: "newsletter subscribe"
            })) : t.loggedIn && !g || t.loggedIn && 3 == g ? void await y() : t.loggedIn && g ? (p({
              event: "alert_update",
              text: "alert - user already subscribed",
              element_placement: "newsletter subscribe"
            }), a(Ur.ALREADY_SUBSCRIBED), void m(!1)) : void 0), y = async () => {
              const {
                error: e = null,
                result: r
              } = await (0, Ve.coreScApiFetch)("marketing/update", {
                fetchOptions: {
                  method: "POST"
                },
                pingBearer: t.pingBearer,
                query: {
                  subscribe: !0
                }
              });
              if (e) Yr(0), a(Ur.ERROR_GENERIC), p({
                event: "alert_error",
                text: "error message with preferences link",
                element_placement: "newsletter subscribe"
              });
              else {
                const e = r.status;
                Yr(e), a(Kr[e]), 1 === e ? (p({
                  event: "subscribe_news_success",
                  element_placement: "newsletter subscribe"
                }), p({
                  event: "alert_update",
                  text: "user subscribed successfully",
                  element_placement: "newsletter subscribe"
                })) : p({
                  event: "alert_error",
                  text: "error message with preferences link",
                  element_placement: "newsletter subscribe"
                })
              }
            };
          return (0, o.useEffect)(() => {
            n(1 === g)
          }, [g]), (0, o.useEffect)(() => {
            (async () => {
              await (async () => {
                void 0 !== t.loggedIn && (t.loggedIn ? await (async () => {
                  if (-1 === g) return;
                  Yr(-1), u(!0);
                  const {
                    error: r = null,
                    result: s
                  } = await (0, Ve.coreScApiFetch)("marketing/status", {
                    pingBearer: t.pingBearer
                  });
                  if (r) Yr(0), u(!1);
                  else {
                    const r = s.status;
                    Yr(r), t.isFromAuth && (r => {
                      if (e.navigate(".", {
                          replace: !0
                        }), t.loggedIn) switch (r) {
                        case 1:
                          t.isNewAccount ? (p({
                            event: "subscribe_news_success",
                            element_placement: "newsletter subscribe"
                          }), p({
                            event: "alert_update",
                            text: "new user subscribed during account creation",
                            element_placement: "newsletter subscribe"
                          }), a(Ur.SUCCESS)) : (p({
                            event: "alert_update",
                            text: "alert - user already subscribed",
                            element_placement: "newsletter subscribe"
                          }), a(Ur.ALREADY_SUBSCRIBED));
                          break;
                        case 4:
                          p({
                            event: "alert_error",
                            text: "error message with no preferences link",
                            element_placement: "newsletter subscribe"
                          }), a(Ur.ERROR_GENERIC);
                          break;
                        default:
                          t.isNewAccount ? (a(w), p({
                            event: "alert_update",
                            text: "newly registered user - would you still like to subscribe?",
                            element_placement: "newsletter subscribe"
                          })) : y()
                      }
                    })(r), u(!1)
                  }
                })() : u(!1))
              })()
            })()
          }, [t.loggedIn]), {
            dialog: r,
            handleSubscribeButton: x,
            isButtonLoading: _,
            isLoading: d,
            isSubscribed: s,
            setShowDialog: l,
            showDialog: i,
            subscriptionStatus: g,
            urls: b,
            setDialog: a
          }
        },
        Qr = "WwwNewsletterSubscribe";
      var Zr = "var(--g48eg92)",
        ea = "var(--g48eg91)",
        ta = "g48eg96",
        ra = "var(--g48eg90)";
      const aa = (0, o.forwardRef)(function({
          children: e,
          className: t,
          asChild: r,
          testId: s,
          topPaddingMultiplier: n,
          bottomPaddingMultiplier: i,
          backgroundCss: o,
          backgroundImage: l,
          ...c
        }, d) {
          const m = r ? _.DX : "section",
            f = (0, g.v6)({
              "data-testid": s,
              className: u()(t, "g48eg93"),
              style: (0, k.DI)({
                [ra]: n ?? "0.5",
                [ea]: i ?? "0.5",
                [Zr]: o,
                backgroundImage: l ? `url(${l})` : ""
              })
            }, c);
          return (0, a.jsx)(m, {
            ref: d,
            ...f,
            children: e
          })
        }),
        sa = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: r,
          ...s
        }, n) {
          if (!e) return;
          const i = t ? _.DX : "div",
            o = (0, g.v6)({
              "data-testid": r,
              className: "g48eg94 _1betujy5"
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        na = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: r,
          ...s
        }, n) {
          const i = t ? _.DX : m.Heading,
            o = (0, g.v6)({
              "data-testid": r,
              className: "g48eg95 foundry_tdsdcd2 foundry_tdsdcd0 foundry_tdsdcd6"
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        ia = (0, o.forwardRef)(function({
          testId: e,
          children: t,
          label: r,
          url: s,
          iconRight: n = "ArrowRight",
          isExternal: i = !1,
          ...o
        }, l) {
          const c = (0, g.v6)({
            "data-testid": e
          }, o);
          return (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(Se, {
              forceMount: !0,
              showOn: "mobile",
              children: (0, a.jsx)(m.IconButton, {
                size: "MD",
                appearance: "ghost",
                icon: n,
                className: ta,
                label: r,
                ...c,
                ref: l,
                asChild: !0,
                children: (0, a.jsx)(ye, {
                  href: s,
                  target: i ? "_blank" : "_self",
                  role: "link"
                })
              })
            }), (0, a.jsx)(Se, {
              forceMount: !0,
              showOn: "tabletSmall",
              children: (0, a.jsx)(m.IconButton, {
                size: "MD",
                appearance: "ghost",
                icon: n,
                className: ta,
                label: r,
                ...c,
                ref: l,
                asChild: !0,
                children: (0, a.jsx)(ye, {
                  href: s,
                  target: i ? "_blank" : "_self",
                  role: "link"
                })
              })
            }), (0, a.jsx)(Se, {
              forceMount: !0,
              showOn: "tabletMediumAndLarger",
              children: (0, a.jsx)(m.Button, {
                size: "LG",
                appearance: "ghost",
                iconRight: n,
                className: "g48eg97",
                "aria-label": r,
                ...c,
                ref: l,
                "data-testid": `${e}:desktopButton`,
                asChild: !0,
                children: (0, a.jsx)(ye, {
                  href: s,
                  target: i ? "_blank" : "_self",
                  role: "link",
                  children: t
                })
              })
            })]
          })
        }),
        oa = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: r,
          ...s
        }, n) {
          const i = t ? _.DX : "div",
            o = (0, g.v6)({
              "data-testid": r
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        la = {
          none: 0,
          default: .5,
          double: 1
        },
        ca = "WwwSectionWrapper";
      var da = (0, D.c)({
        defaultClassName: "r6o3sa3 _1betujy6 _1betujy5",
        variantClassNames: {
          alignment: {
            image_left: "r6o3sa4",
            image_right: "r6o3sa5"
          }
        },
        defaultVariants: {},
        compoundVariants: []
      });
      const ua = (0, o.forwardRef)(function({
          children: e,
          testId: t,
          asChild: r,
          variant: s = "image_right",
          ...n
        }, i) {
          const o = r ? _.DX : "div",
            l = (0, g.v6)({
              "data-testid": t,
              className: da({
                alignment: s
              })
            }, n);
          return (0, a.jsx)(o, {
            ref: i,
            ...l,
            children: e
          })
        }),
        _a = (0, o.forwardRef)(function({
          testId: e,
          altText: t,
          ...r
        }, s) {
          const n = (0, g.v6)({
            "data-testid": e,
            className: "r6o3sa6",
            alt: t
          }, r);
          return (0, a.jsx)("img", {
            ref: s,
            ...n
          })
        }),
        ma = (0, o.forwardRef)(function({
          children: e,
          ...t
        }, r) {
          const s = (0, g.v6)({
            className: "r6o3sa7"
          }, t);
          return (0, a.jsx)("div", {
            ref: r,
            ...s,
            children: e
          })
        }),
        ga = "WwwTextWithBadge";
      var fa = (0, D.c)({
          defaultClassName: "_1awcvb7j",
          variantClassNames: {
            appearance: {
              primary: "_1awcvb7k",
              secondary: "_1awcvb7l",
              tertiary: "_1awcvb7m",
              ghost: "_1awcvb7n",
              information: "_1awcvb7o",
              danger: "_1awcvb7p",
              accent: "_1awcvb7q"
            }
          },
          defaultVariants: {
            appearance: "primary"
          },
          compoundVariants: []
        }),
        pa = ((0, D.c)({
          defaultClassName: "_1awcvb71",
          variantClassNames: {
            layout: {
              primary: "_1awcvb72",
              secondary: "_1awcvb73",
              default: "_1awcvb74"
            }
          },
          defaultVariants: {
            layout: "default"
          },
          compoundVariants: []
        }), (0, D.c)({
          defaultClassName: "_1awcvb75 _1betujy7",
          variantClassNames: {
            grid: {
              "4_up_a": "_1awcvb76",
              "4_up_b": "_1awcvb77",
              "4_up_c": "_1awcvb78",
              "4_up_d": "_1awcvb79"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        })),
        ba = (0, D.c)({
          defaultClassName: "_1awcvb7a",
          variantClassNames: {
            type: {
              primary: "_1awcvb7b",
              secondary: "_1awcvb7c",
              tertiary: "_1awcvb7d"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        });
      const ha = (0, c.defineMessages)({
          masonry_grid_external_store_link: {
            id: "masonry_grid_external_store_link",
            description: "Tells the user this is an external link to the store.",
            defaultMessage: "External link to Store"
          }
        }),
        wa = (0, o.forwardRef)(function({
          block: e,
          mobileCarouselThreshold: t = 1,
          defaultSlide: r = 0,
          gridType: s,
          ...n
        }, i) {
          const {
            ref: l,
            api: c,
            currentSlide: d
          } = (({
            autoScrollEnabled: e = !1,
            defaultSlide: t,
            duration: r = 40
          }) => {
            const a = (0, o.useRef)(null),
              [s, n] = (0, o.useState)(t),
              [i, l] = (0, o.useState)(0),
              [c, d] = (0, o.useState)(!1),
              [u, _] = (0, te.A)({
                axis: "x",
                align: "start",
                startIndex: t,
                active: !0,
                containScroll: "trimSnaps",
                watchDrag: c,
                duration: r
              }, []),
              m = (0, o.useCallback)(() => {
                _ && (l(_?.scrollSnapList()?.length ?? 0), d(_?.canScrollNext() || _?.canScrollPrev()))
              }, [_]),
              g = (0, o.useCallback)(() => {
                _ && n(_?.selectedScrollSnap() ?? 0)
              }, [_]);
            return (0, o.useEffect)(() => {
              _ && a?.current && (e ? a?.current.play() : a.current.stop())
            }, [e, _]), (0, o.useEffect)(() => {
              if (_) return _.on("init", m), _.on("reInit", m), _.on("select", g), m(), () => {
                _.off("init", m), _.off("reInit", m), _.off("select", g)
              }
            }, [_, m, g]), {
              ref: u,
              currentSlide: s,
              totalSlides: i,
              api: _
            }
          })({
            defaultSlide: r
          }), {
            trackEvent: u,
            useTrackPageSectionImpression: _
          } = x(), {
            ref: m
          } = _({
            text: "Masonry Grid"
          }), p = (0, f.UP)(m, i), [b, h] = (0, o.useState)(!1);
          if ((0, o.useEffect)(() => (c?.on("pointerUp", () => h(!0)), b && u({
              event: "carousel_swipe"
            }), h(!1), () => {
              c?.off("pointerUp", () => h)
            }), [c, d]), !e) return;
          const {
            cardsCollection: w,
            variant: y
          } = e, k = w?.items ?? [], v = k.slice(0, t), j = k.slice(t), C = (0, g.v6)({
            className: "_1awcvb70 _1betujy6 _1betujy5"
          }, n), R = (e, t) => () => {
            u({
              event: "card_click",
              card_id: e?.sys?.id,
              position: t + 1,
              position_max: k.length,
              ...e.link?.url && {
                link_url: e.link?.url
              }
            }, e.cta)
          };
          return (0, a.jsxs)("div", {
            ref: p,
            ...C,
            children: [(0, a.jsx)(Se, {
              showOn: "mobile",
              forceMount: !0,
              children: (0, a.jsxs)("div", {
                className: pa({
                  grid: y ?? s
                }),
                children: [v.map((e, t) => (0, a.jsx)(ka, {
                  card: e,
                  index: t,
                  size: "medium",
                  context: "4:5",
                  type: "primary",
                  onCardClick: R(e, t)
                }, `${e?.sys?.id}-${t}`)), (0, a.jsx)(_e, {
                  className: "_1awcvb7e",
                  ref: l,
                  children: j?.map((e, t) => {
                    const r = 0 === t ? "secondary" : "tertiary";
                    return (0, a.jsx)(me, {
                      className: "_1awcvb7f",
                      children: (0, a.jsx)(ka, {
                        card: e,
                        index: t,
                        size: "small",
                        context: "16:9",
                        type: r,
                        onCardClick: R(e, t)
                      })
                    }, e?.sys?.id)
                  })
                })]
              })
            }), (0, a.jsx)(Se, {
              showOn: "tabletSmall",
              forceMount: !0,
              children: (0, a.jsx)(va, {
                breakpoint: "tabletSmall",
                items: k,
                mainCardSize: "large",
                size: "medium",
                gridType: y ?? s
              })
            }), (0, a.jsx)(Se, {
              showOn: "tabletMedium",
              forceMount: !0,
              children: (0, a.jsx)(va, {
                breakpoint: "tabletMedium",
                items: k,
                mainCardSize: "medium",
                size: "small",
                gridType: y ?? s
              })
            }), (0, a.jsx)(Se, {
              showOn: "tabletLarge",
              forceMount: !0,
              children: (0, a.jsx)(va, {
                breakpoint: "tabletLarge",
                items: k,
                mainCardSize: "large",
                size: "medium",
                gridType: y ?? s
              })
            }), (0, a.jsx)(Se, {
              showOn: "desktopSmallAndLarger",
              forceMount: !0,
              children: (0, a.jsx)(va, {
                breakpoint: "desktopSmallAndLarger",
                items: k,
                mainCardSize: "large",
                size: "medium",
                gridType: y ?? s
              })
            })]
          })
        }),
        xa = {
          tabletSmall: {
            primary: "16:9",
            secondary: "5:2",
            tertiary: "1:1"
          },
          tabletMedium: {
            primary: "4:5",
            secondary: "5:2",
            tertiary: "1:1"
          },
          tabletLarge: {
            primary: "4:5",
            secondary: "5:2",
            tertiary: "1:1"
          },
          desktopSmallAndLarger: {
            primary: "1:1",
            secondary: "5:2",
            tertiary: "4:3"
          }
        },
        ya = {
          small: 6,
          medium: 5,
          large: 4,
          xlarge: 4
        },
        ka = (0, o.forwardRef)(function({
          index: e,
          size: t = "medium",
          card: r,
          context: s,
          type: n,
          onCardClick: i,
          ...o
        }, l) {
          const d = (0, c.useIntl)();
          if (!r) return null;
          const u = (0, g.v6)({
              className: ba({
                type: n
              }),
              style: {
                gridArea: String.fromCharCode(97 + e)
              }
            }, o),
            _ = r.cta,
            m = "dark" === r.textColor ? "light" : "dark",
            f = (0, a.jsxs)(U, {
              size: t,
              className: "_1awcvb7g",
              gradientColor: r.gradientColor,
              gradientType: "radial",
              theme: m,
              interactive: !0,
              children: [(0, a.jsxs)(H, {
                className: "_1awcvb7i",
                children: [r.badgeText && (0, a.jsx)(Y, {
                  children: r.badgeText
                }), r.text && (0, a.jsx)(Q, {
                  level: ya[t],
                  children: r.text
                }), _ && (0, a.jsx)(ee, {
                  iconLeft: _.iconLeft?.icon,
                  iconRight: _.iconRight?.icon,
                  appearance: _.appearance,
                  override_backgroundColor: _.backgroundColor,
                  size: "MD",
                  onPress: i,
                  asChild: !0,
                  children: (0, a.jsx)("span", {
                    className: fa({
                      appearance: _.appearance
                    }),
                    tabIndex: -1,
                    children: _.text
                  })
                })]
              }), (0, a.jsx)(K, {
                alt: r?.backgroundImage?.altText,
                src: r.backgroundImage,
                context: s
              })]
            });
          return (0, a.jsx)("div", {
            ref: l,
            ...u,
            children: r.link?.url ? (0, a.jsx)(ye, {
              href: r.link?.url,
              target: "_blank",
              title: d.formatMessage(ha.masonry_grid_external_store_link),
              className: "_1awcvb7h",
              onClick: i,
              children: f
            }) : f
          })
        }),
        va = (0, o.forwardRef)(function({
          breakpoint: e,
          items: t,
          size: r,
          mainCardSize: s = r,
          gridType: n,
          ...i
        }, o) {
          const {
            trackEvent: l
          } = x(), c = (0, g.v6)({
            className: u()(pa({
              grid: n || "4_up_a"
            }))
          }, i), d = (e, r) => () => {
            l({
              event: "card_click",
              card_id: e?.sys?.id,
              position: r + 1,
              position_max: t.length,
              ...e.link?.url && {
                link_url: e.link?.url
              }
            }, e.cta)
          };
          return (0, a.jsx)("div", {
            ref: o,
            ...c,
            children: t.map((t, n) => {
              const o = (e => 0 === e ? "primary" : 1 === e ? "secondary" : "tertiary")(n),
                l = xa[e]?.[o] ?? "1:1";
              return (0, a.jsx)(ka, {
                ...i,
                card: t,
                index: n,
                size: 0 === n ? s : r,
                type: o,
                context: l,
                onCardClick: d(t, n)
              }, `${t?.sys?.id}-${n}`)
            })
          })
        }),
        ja = "WwwMasonryGrid",
        Ca = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: r,
          ...s
        }, n) {
          const i = t ? _.DX : "div",
            o = (0, g.v6)({
              "data-testid": r,
              className: "pg6i3i0 _1betujy6 _1betujy5"
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            style: {
              backgroundImage: "\n        linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.5) 50%),\n        url(https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5c0a5c2692eb47690bbaa34cde2f2173.jpg)"
            },
            ...o,
            children: e
          })
        }),
        Ra = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: r,
          ...s
        }, n) {
          const i = t ? _.DX : "div",
            o = (0, g.v6)({
              "data-testid": r,
              className: "pg6i3i1"
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Sa = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          ...r
        }, s) {
          const n = t ? _.DX : "div",
            i = (0, g.v6)({
              className: "pg6i3i2"
            }, r);
          return (0, a.jsx)(n, {
            ref: s,
            ...i,
            children: e
          })
        }),
        Ia = (0, o.forwardRef)(function({
          asChild: e,
          testId: t,
          altText: r,
          ...s
        }, n) {
          const i = e ? _.DX : "div",
            o = (0, g.v6)({
              "data-testid": t
            }, s);
          return (0, a.jsxs)(i, {
            ref: n,
            ...o,
            children: [(0, a.jsx)("img", {
              src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/90e8a0c40853b90840df2c9de1542722.svg",
              className: "pg6i3i4",
              alt: r
            }), (0, a.jsx)("img", {
              src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/def13a31001678085d3deddd9381ae73.svg",
              className: "pg6i3i5",
              alt: r
            })]
          })
        }),
        Na = (0, o.forwardRef)(function({
          children: e,
          asChild: t,
          testId: r,
          ...s
        }, n) {
          const i = t ? _.DX : m.Body,
            o = (0, g.v6)({
              "data-testid": r,
              className: "pg6i3i6 foundry_tdsdcda foundry_tdsdcd0 foundry_tdsdcdc"
            }, s);
          return (0, a.jsx)(i, {
            ref: n,
            ...o,
            children: e
          })
        }),
        Ea = "WwwSupportCalloutModule";
      var Ma = r(31879),
        Fa = r.n(Ma);
      const Da = "WwwVideoPlayer",
        Wa = {
          [Be]: ({
            block: e
          }) => {
            const t = (0, o.useContext)(n.BlockRendererContext),
              {
                parentIds: r,
                sectionImpressionData: s
              } = t;
            return e ? (0, a.jsxs)(Fe, {
              children: [(0, a.jsx)(De, {
                backgroundImage: e.backgroundImage,
                backgroundVideo: e.backgroundVideo,
                isLooping: !0
              }), (0, a.jsx)(Le, {
                logo: e.logo,
                title: e.game?.title,
                description: e.description,
                gamePageLink: e.game?.wwwPageLink?.url,
                platforms: e.game?.platformsCollection?.items,
                ctas: e.ctasCollection,
                children: e.childModulesCollection?.items.map(e => (0, a.jsx)(n.BlockRenderer, {
                  block: e,
                  parentIds: r,
                  sectionImpressionData: s
                }, e.sys.id))
              })]
            }) : null
          },
          [Rt]: ({
            block: e
          }) => e ? (0, a.jsx)(Ct, {
            size: e?.size,
            slides: e?.slidesCollection?.items
          }) : null,
          [Ft]: ({
            block: e
          }) => {
            const {
              trackEvent: t,
              useTrackPageSectionImpression: r
            } = x(), {
              ref: s
            } = r({
              text: "Brand Banner"
            });
            if (!e) return null;
            const {
              altText: i,
              backgroundColor: o,
              backgroundImage: l,
              link: c,
              foregroundImage: d
            } = e, u = l ? (0, n.getRsgImage)(l, "5:1")?.source?.url : "";
            return (0, a.jsx)(It, {
              ref: s,
              testId: "www-brand-banner",
              children: (0, a.jsx)(Nt, {
                altText: i ?? "",
                backgroundColor: o,
                onClick: () => {
                  t({
                    event: "card_click",
                    card_id: e.sys.id,
                    card_name: "Brand Banner",
                    link_url: e.link?.url
                  })
                },
                asChild: !0,
                children: (0, a.jsxs)(ye, {
                  href: c?.url ?? "",
                  children: [(0, a.jsx)(Et, {
                    src: u ?? ""
                  }), d && (0, a.jsx)(Mt, {
                    src: d,
                    context: "mobile"
                  })]
                })
              })
            })
          },
          [Tt]: ({
            block: e
          }) => e ? (0, a.jsx)(Pt, {
            block: e
          }) : null,
          [Bt]: ({
            block: e
          }) => {
            if (e) return (0, a.jsx)(Lt, {
              block: e
            })
          },
          [ir]: ({
            block: e
          }) => {
            const [t] = (0, c.getLocale)(), r = e.contentCollection?.items, s = r?.map(e => e.tinaId), n = (0, o.useMemo)(() => ((e, t) => {
              const r = ((e, t) => e.reduce((e, r) => e + ((e, t) => `\n    post${e}: post(id_hash: "${e}", locale: "${t}") {\n            ...postFields\n    }\n`)(r, t), ""))(e, t);
              return Ve.gql`
        ${nr}

        ${a=r,`\nquery NewswirePosts {\n    ${a}\n}`}
    `;
              var a
            })(s, t.iso), [s]), {
              loading: i,
              data: l,
              error: d
            } = (0, Ve.useQuery)(n, {
              autoSetError: !1
            });
            if (d) return (0, er.captureMessage)("Failed to load Newswire Unit", er.Severity.Error), null;
            if (!e) return null;
            const u = s.map(e => ({
              tinaId: e,
              block: l?.[`post${e}`] ? l[`post${e}`] : null
            }));
            return (0, a.jsx)(sr, {
              variant: e.variant,
              stories: u,
              loading: i
            })
          },
          [rr]: ({
            block: e
          }) => {
            const [t] = (0, c.getLocale)(), r = e.tinaId, s = (0, o.useMemo)(() => ((e, t) => {
              const r = ((e, t) => `\n    post${e}: post(id_hash: "${e}", locale: "${t}") {\n            ...postFields\n    }\n`)(e, t);
              return Ve.gql`
        ${tr}

        ${a=r,`\nquery NewswirePosts {\n    ${a}\n}`}
    `;
              var a
            })(r, t.iso), [r]), {
              loading: n,
              data: i,
              error: l
            } = (0, Ve.useQuery)(s, {
              autoSetError: !1
            });
            if (l) return (0, er.captureMessage)("Failed to load Newswire Unit", er.Severity.Error), null;
            if (!e) return null;
            const d = {
              block: i?.[`post${r}`] ? i[`post${r}`] : null
            };
            return (0, a.jsx)(Zt, {
              loading: n,
              data: d.block,
              layout: "secondary",
              aspect: "wide"
            })
          },
          [jr]: ({
            block: e
          }) => e ? (0, a.jsx)(vr, {
            block: e
          }) : (console.log("no data"), null),
          [Ar]: ({
            block: e
          }) => {
            const {
              trackEvent: t,
              useTrackPageSectionImpression: r
            } = x(), {
              ref: s
            } = r({
              text: "Games Library"
            });
            if (!e) return null;
            const {
              cta: n,
              description: i,
              title: o
            } = e, l = e?.marqueeingElementsCollection?.items[0]?.referencesCollection?.items;
            return (0, a.jsxs)(Sr, {
              ref: s,
              children: [(0, a.jsx)(Ir, {
                games: l
              }), (0, a.jsxs)(Nr, {
                children: [(0, a.jsxs)(Mr, {
                  children: [(0, a.jsx)(Fr, {
                    children: o
                  }), (0, a.jsx)(Dr, {
                    children: i
                  })]
                }), n && (0, a.jsx)(Wr, {
                  appearance: n?.appearance,
                  override_backgroundColor: n?.backgroundColor,
                  iconLeft: n?.iconLeft?.icon,
                  iconRight: n?.iconRight?.icon,
                  link: n?.link,
                  onPress: (c = n, () => t({}, c)),
                  children: n?.text
                })]
              })]
            });
            var c
          },
          [Qr]: ({
            block: e,
            renderSectionWrapper: t
          }) => {
            const r = (0, c.useIntl)(),
              {
                useTrackPageSectionImpression: s
              } = x(),
              {
                ref: n
              } = s({
                text: "Newsletter Unit"
              }),
              i = (0, Ve.useRockstarTokenPing)(),
              {
                loggedIn: l,
                data: d,
                loading: u
              } = (0, h.useRockstarUser)(),
              _ = (0, xe.useNavigate)(),
              [{
                iso: m
              }] = (0, c.getLocale)(),
              g = (0, Ve.toScLocaleString)(m),
              {
                login: f
              } = (0, Ve.getConfigForDomain)(),
              p = (0, qr.A)(),
              [b] = (0, xe.useSearchParams)(),
              w = "true" === b.get("marketing"),
              y = {
                lang: g,
                location: location.pathname,
                login: f,
                navigate: _,
                sc: p.sites.socialClub
              },
              k = {
                ...d,
                isFromAuth: w,
                loggedIn: l,
                pingBearer: i,
                userLoading: u
              },
              v = Jr(y, k),
              {
                dialog: C,
                urls: R,
                handleSubscribeButton: S,
                isButtonLoading: I,
                isLoading: N,
                isSubscribed: E,
                setShowDialog: M,
                showDialog: F
              } = v;
            let D = "loading";
            D = null === l || l && N ? "loading" : "ready";
            const W = "ready" === D,
              A = "ready" == (u ? "loading" : "ready") && l && W && !0 === E;
            if ((0, o.useEffect)(() => {
                t && t(F || !A)
              }, [t, F]), !e) return null;
            const z = C?.buttons || [{
                buttonText: r.formatMessage(Xr.ns_ok_button_text),
                onClick: () => {
                  M(!1)
                },
                testId: "ok-btn",
                style: "secondary"
              }, {
                buttonText: C?.showManagePreferences ? r.formatMessage(Xr.ns_manage_prefs_button_text) : "",
                isLink: !0,
                link: R.preferences,
                testId: "preferences-btn",
                style: "ghost"
              }],
              P = l && !W;
            return (0, a.jsxs)(a.Fragment, {
              children: [!A && (0, a.jsx)(zr, {
                ref: n,
                children: P ? (0, a.jsx)($r.A, {}) : (0, a.jsxs)(a.Fragment, {
                  children: [(0, a.jsx)(Pr, {
                    asChild: !0,
                    children: e.image && (0, a.jsx)(j, {
                      src: e.image,
                      context: "mobile"
                    })
                  }), (0, a.jsxs)(Tr, {
                    children: [e.textContent && (0, a.jsx)(Br, {
                      markdown: e.textContent
                    }), (0, a.jsx)(Vr, {
                      onClick: S,
                      isDisabled: I,
                      children: e.cta?.text
                    })]
                  })]
                })
              }), C && (0, a.jsx)(Or.A, {
                icon: C.icon,
                title: r.formatMessage(C.heading),
                secondaryText: r.formatMessage(C.bodyText),
                closeOnOutsideClick: C.closeOnOutsideClick,
                buttons: z,
                showDialog: F,
                onClose: () => M(!1)
              })]
            })
          },
          [ca]: ({
            block: e
          }) => {
            const t = (0, o.useContext)(n.BlockRendererContext),
              {
                parentIds: r,
                sectionImpressionData: s
              } = t,
              {
                trackEvent: i
              } = x(),
              [l, c] = (0, o.useState)(!1),
              [d, u] = (0, o.useState)(!0),
              _ = e.title,
              m = e.cta,
              g = _ || m;
            (0, o.useEffect)(() => {
              if (e?.cta?.link?.url) try {
                new URL(e.cta.link.url).origin !== window.location.origin && c(!0)
              } catch {
                c(!1)
              }
            }, [e]);
            const f = (0, o.useCallback)(e => {
              u(e)
            }, []);
            if (!e || !d) return null;
            const p = {
              topPaddingMultiplier: la[e.topPadding] ?? la.default,
              bottomPaddingMultiplier: la[e.bottomPadding] ?? la.default,
              backgroundCss: e.backgroundCss
            };
            let b;
            return b = (0, a.jsxs)(aa, {
              ...p,
              children: [g && (0, a.jsxs)(sa, {
                children: [_ && (0, a.jsx)(na, {
                  level: 2,
                  children: _
                }), m?.text && m.link?.url && (0, a.jsx)(ia, {
                  label: m.text,
                  url: m.link.url,
                  isExternal: l,
                  iconRight: m.iconRight?.icon,
                  onClick: () => i({}, m),
                  children: m.text
                })]
              }), e.contentCollection?.items && (0, a.jsx)(oa, {
                children: e.contentCollection.items?.map(e => (0, a.jsx)(n.BlockRenderer, {
                  block: e,
                  parentIds: r,
                  sectionImpressionData: s,
                  renderSectionWrapper: f
                }, e.sys?.id))
              })]
            }), b
          },
          [ga]: ({
            block: e
          }) => {
            const t = (0, o.useContext)(n.BlockRendererContext),
              {
                parentIds: r,
                sectionImpressionData: s
              } = t,
              {
                useTrackPageSectionImpression: i
              } = x(),
              {
                isMobile: l
              } = (0, Ve.useWindowResize)(),
              {
                ref: c
              } = i({
                text: "Text With Badge"
              });
            if (!e?.content) return null;
            const {
              image: d,
              content: u,
              variant: _
            } = e, m = d ? (0, n.getRsgImage)(d, l ? "mobile" : "desktop")?.source?.url : "";
            return (0, a.jsxs)(ua, {
              variant: _ ?? "image_right",
              ref: c,
              children: [(0, a.jsx)(_a, {
                altText: d?.altText ?? "",
                src: m ?? ""
              }), (0, a.jsx)(ma, {
                children: (0, a.jsx)(n.BlockRenderer, {
                  block: u,
                  parentIds: r,
                  sectionImpressionData: s
                })
              })]
            })
          },
          [ja]: ({
            block: e
          }) => e ? (0, a.jsx)(wa, {
            block: e
          }) : null,
          [Ea]: ({
            block: e
          }) => {
            const {
              useTrackPageSectionImpression: t
            } = x(), {
              ref: r
            } = t({
              text: "Support Module"
            });
            if (!e) return null;
            const {
              cta: s
            } = e;
            return (0, a.jsx)(Ca, {
              ref: r,
              children: (0, a.jsxs)(Ra, {
                children: [(0, a.jsxs)(Sa, {
                  children: [(0, a.jsx)(Ia, {
                    altText: e.title
                  }), (0, a.jsx)(Na, {
                    children: e.description
                  })]
                }), s && (0, a.jsx)(Ce, {
                  block: s,
                  size: "MD"
                })]
              })
            })
          },
          [Da]: ({
            block: e
          }) => {
            if (e) return (0, a.jsx)(a.Fragment, {
              children: e.videos?.referencesCollection?.items.map(e => {
                if ("Link" === e.type && e?.link?.url) {
                  const t = new URL(e?.link?.url),
                    r = "www.rockstargames.com" === t.hostname,
                    s = t.pathname.split("/");
                  if (r && "videos" === s[1]) {
                    const t = s[2];
                    return (0, a.jsx)(Fa(), {
                      id: t,
                      autoplay: !0
                    }, e.sys.id)
                  }
                }
              })
            })
          }
        },
        Aa = (0, c.defineMessages)({
          bottom_sheet_modal_close_icon: {
            id: "bottom_sheet_modal_close_icon",
            description: "Label for X icon to close modal in Bottom Sheet",
            defaultMessage: "Close"
          }
        });
      var za = r(20170);
      const Pa = ({
          testId: e,
          ...t
        }) => {
          const r = (0, g.v6)(t, {
            "data-testid": e,
            autoFocus: !0
          });
          return (0, a.jsx)(za.bL, {
            ...r
          })
        },
        Ta = ({
          testId: e,
          ...t
        }) => {
          const r = (0, g.v6)(t, {
            "data-testid": e
          });
          return (0, a.jsx)(za.ZL, {
            ...r
          })
        },
        Ga = (0, o.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const s = (0, g.v6)(t, {
            "data-testid": e,
            className: "_1ykqld07"
          });
          return (0, a.jsx)(za.hJ, {
            ref: r,
            ...s
          })
        }),
        La = (0, o.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, s) {
          const n = (0, g.v6)(r, {
            "data-testid": e,
            className: "_1ykqld08"
          });
          return (0, a.jsx)(za.UC, {
            ref: s,
            ...n,
            children: t
          })
        }),
        Ba = (0, o.forwardRef)(function({
          testId: e,
          children: t,
          ...r
        }, s) {
          const n = (0, g.v6)(r, {
            "data-testid": e,
            className: "_1ykqld09"
          });
          return (0, a.jsx)("div", {
            ref: s,
            ...n,
            children: t
          })
        }),
        Va = (0, o.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const s = (0, g.v6)(t, {
            asChild: !0,
            className: "_1ykqld0a",
            "data-testid": e
          });
          return (0, a.jsx)(za.bm, {
            ref: r,
            ...s
          })
        }),
        qa = (0, o.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const s = (0, g.v6)(t, {
            "data-testid": e
          });
          return (0, a.jsx)(za.hE, {
            ref: r,
            ...s
          })
        }),
        Oa = (0, o.forwardRef)(function({
          testId: e,
          ...t
        }, r) {
          const s = (0, g.v6)(t, {
            "data-testid": e
          });
          return (0, a.jsx)(za.VY, {
            ref: r,
            ...s
          })
        }),
        $a = () => {
          const {
            trackEvent: e
          } = x(), {
            formatMessage: t
          } = (0, c.useIntl)(), [r, s] = (0, o.useState)(!1), {
            slug: n,
            open: i,
            onOpenChange: l
          } = je();
          if ((0, o.useEffect)(() => {
              r !== i && (s(i), e(i ? {
                event: "modal_open",
                card_id: n,
                card_name: n
              } : {
                event: "cta_other",
                text: "close"
              }))
            }, [i, r]), n) return (0, a.jsx)(Pa, {
            open: i,
            onOpenChange: l,
            children: (0, a.jsxs)(Ta, {
              children: [(0, a.jsx)(Ga, {}), (0, a.jsxs)(La, {
                children: [(0, a.jsxs)(_.s6, {
                  children: [(0, a.jsx)(qa, {}), (0, a.jsx)(Oa, {})]
                }), (0, a.jsx)(Va, {
                  children: (0, a.jsx)(m.IconButton, {
                    size: "MD",
                    icon: "X",
                    appearance: "tertiary",
                    label: t(Aa.bottom_sheet_modal_close_icon)
                  })
                }), (0, a.jsx)(Ba, {
                  children: (0, a.jsx)(Xa, {
                    slug: n
                  })
                })]
              })]
            })
          })
        },
        Xa = ({
          slug: e
        }) => {
          const {
            loading: t,
            error: r,
            data: s
          } = (0, n.useContentfulQuery)({
            query: i.wwwBottomSheetQuery,
            variables: {
              slug: e
            }
          });
          if (s && !t && !r) {
            const e = s?.wwwBottomSheetCollection?.items[0]?.contentCollection;
            if (e) return (0, a.jsx)(Ua, {
              block: e
            })
          }
        },
        Ua = ({
          block: e
        }) => {
          const t = (0, o.useContext)(n.BlockRendererContext),
            {
              parentIds: r,
              sectionImpressionData: s
            } = t;
          if (e) return e.items.map(e => (0, a.jsx)(n.BlockRenderer, {
            block: e,
            parentIds: r || [],
            sectionImpressionData: s
          }, e.sys.id))
        },
        Ka = JSON.parse('{"de-DE":{"bottom_sheet_modal_close_icon":"Schließen","carousel_next_button":"Weiter","carousel_prev_button":"Zurück","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Abspielen","featured_game_breadcrumbs_parent_item":"Spiele","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Abspielen","hp_hero_carousel_scroll_down_label":"Nach unten scrollen","hp_hero_play_button_label":"Abspielen","hp_hero_stop_button_label":"Anhalten","image_carousel_screen_reader_announcer_label":"Jetzt angezeigt: {selectedTab} von {total}","lightbox_close_button":"Schließen","masonry_grid_external_store_link":"Externer Link zum Store","ns_already_subbed_details":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Du kannst deine Präferenzen bezüglich E-Mails jederzeit in den Einstellungen deines Kontos ändern.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren"},"en-US":{"bottom_sheet_modal_close_icon":"Close","carousel_next_button":"Next","carousel_prev_button":"Previous","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Play","featured_game_breadcrumbs_parent_item":"Games","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Play","hp_hero_carousel_scroll_down_label":"Scroll Down","hp_hero_play_button_label":"Play","hp_hero_stop_button_label":"Stop","image_carousel_screen_reader_announcer_label":"Now showing {selectedTab} of {total}","lightbox_close_button":"Close","masonry_grid_external_store_link":"External link to Store","ns_already_subbed_details":"You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe"},"es-ES":{"bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hp_hero_carousel_scroll_down_label":"Desplazarse hacia abajo","hp_hero_play_button_label":"Reproducir","hp_hero_stop_button_label":"Detener","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","lightbox_close_button":"Cerrar","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de correo electrónico en cualquier momento en la página de ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correo electrónico en la página de ajustes de tu cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar tus preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de correo electrónico en cualquier momento en la página de ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse"},"es-MX":{"bottom_sheet_modal_close_icon":"Cerrar","carousel_next_button":"Siguiente","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Reproducir","featured_game_breadcrumbs_parent_item":"Juegos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Reproducir","hp_hero_carousel_scroll_down_label":"Desplázate hacia abajo","hp_hero_play_button_label":"Reproducir","hp_hero_stop_button_label":"Detener","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","lightbox_close_button":"Cerrar","masonry_grid_external_store_link":"Enlace externo a la tienda","ns_already_subbed_details":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Modifica las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse"},"fr-FR":{"bottom_sheet_modal_close_icon":"Fermer","carousel_next_button":"Suivant","carousel_prev_button":"Précédent","decorative_video_pause_button_label":"Pause","decorative_video_play_button_label":"Lecture","featured_game_breadcrumbs_parent_item":"Jeux","hero_carousel_pause_button":"Pause","hero_carousel_play_button":"Lecture","hp_hero_carousel_scroll_down_label":"Faire défiler vers le bas","hp_hero_play_button_label":"Lecture","hp_hero_stop_button_label":"Arrêter","image_carousel_screen_reader_announcer_label":"Affichage de {selectedTab} sur {total}","lightbox_close_button":"Fermer","masonry_grid_external_store_link":"Lien externe vers la boutique","ns_already_subbed_details":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Modifiez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmez votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des mises à jour régulières à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne"},"it-IT":{"bottom_sheet_modal_close_icon":"Chiudi","carousel_next_button":"Successivo","carousel_prev_button":"Precedente","decorative_video_pause_button_label":"Pausa","decorative_video_play_button_label":"Riproduci","featured_game_breadcrumbs_parent_item":"Giochi","hero_carousel_pause_button":"Pausa","hero_carousel_play_button":"Riproduci","hp_hero_carousel_scroll_down_label":"Scorri in basso","hp_hero_play_button_label":"Riproduci","hp_hero_stop_button_label":"Stop","image_carousel_screen_reader_announcer_label":"In riproduzione: {selectedTab} di {total}","lightbox_close_button":"Chiudi","masonry_grid_external_store_link":"Link esterno per il Negozio","ns_already_subbed_details":"Stai già usando questo indirizzo email per ricevere la newsletter. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsante qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti"},"ja-JP":{"bottom_sheet_modal_close_icon":"閉じる","carousel_next_button":"次へ","carousel_prev_button":"前へ","decorative_video_pause_button_label":"一時停止","decorative_video_play_button_label":"再生","featured_game_breadcrumbs_parent_item":"ゲーム","hero_carousel_pause_button":"一時停止","hero_carousel_play_button":"再生","hp_hero_carousel_scroll_down_label":"下にスクロール","hp_hero_play_button_label":"再生","hp_hero_stop_button_label":"停止","image_carousel_screen_reader_announcer_label":"{total}のうち{selectedTab}を表示中","lightbox_close_button":"閉じる","masonry_grid_external_store_link":"ストアへの外部リンク","ns_already_subbed_details":"このメールアドレスで既にニュースレターアップデートを受け取っています。アカウント設定のページからいつでもメール受信設定を変更できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認してください","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_error_generic_details":"現在このメールアドレスをニュースレターに登録することができません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在お客様のメールアドレスをニュースレターに登録することができません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"いいえ、戻ります","ns_manage_prefs_button_text":"受信設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。アカウント設定のページからいつでもメール受信設定を管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"はい、サブスクリプション登録します"},"ko-KR":{"bottom_sheet_modal_close_icon":"닫기","carousel_next_button":"다음","carousel_prev_button":"이전","decorative_video_pause_button_label":"일시 정지","decorative_video_play_button_label":"재생","featured_game_breadcrumbs_parent_item":"게임","hero_carousel_pause_button":"일시 정지","hero_carousel_play_button":"재생","hp_hero_carousel_scroll_down_label":"아래로 스크롤","hp_hero_play_button_label":"재생","hp_hero_stop_button_label":"정지","image_carousel_screen_reader_announcer_label":"{total}의 {selectedTab} 이미지","lightbox_close_button":"닫기","masonry_grid_external_store_link":"스토어 외부 링크","ns_already_subbed_details":"이미 이 이메일 주소로 최신 뉴스레터 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 이메일 설정을 변경할 수 있습니다.","ns_already_subbed_title":"이미 구독 중","ns_check_email_details":"Rockstar Games 이메일 리스트 구독을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정을 생성할 때 마케팅 이메일 수신 동의를 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"Rockstar Games 뉴스레터 구독을 확인하려면 아래 버튼을 클릭하십시오.","ns_confirm_title":"구독 확인하기","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 이메일 설정을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다"},"pl-PL":{"bottom_sheet_modal_close_icon":"Zamknij","carousel_next_button":"Dalej","carousel_prev_button":"Poprzednie","decorative_video_pause_button_label":"Zatrzymaj","decorative_video_play_button_label":"Odtwórz","featured_game_breadcrumbs_parent_item":"Gry","hero_carousel_pause_button":"Zatrzymaj","hero_carousel_play_button":"Odtwórz","hp_hero_carousel_scroll_down_label":"Przewiń w dół","hp_hero_play_button_label":"Odtwórz","hp_hero_stop_button_label":"Przerwij","image_carousel_screen_reader_announcer_label":"Wyświetlane {selectedTab} z {total}","lightbox_close_button":"Zamknij","masonry_grid_external_store_link":"Odnośnik zewnętrzny do sklepu","ns_already_subbed_details":"Otrzymujesz już powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Potwierdź swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, wróć","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj"},"pt-BR":{"bottom_sheet_modal_close_icon":"Fechar","carousel_next_button":"Próximo","carousel_prev_button":"Anterior","decorative_video_pause_button_label":"Pausar","decorative_video_play_button_label":"Iniciar","featured_game_breadcrumbs_parent_item":"Jogos","hero_carousel_pause_button":"Pausar","hero_carousel_play_button":"Iniciar","hp_hero_carousel_scroll_down_label":"Role para baixo","hp_hero_play_button_label":"Iniciar","hp_hero_stop_button_label":"Parar","image_carousel_screen_reader_announcer_label":"Mostrando {selectedTab} de {total}","lightbox_close_button":"Fechar","masonry_grid_external_store_link":"Link externo para a Loja","ns_already_subbed_details":"Você já está recebendo atualizações da newsletter neste endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_already_subbed_title":"Você já se inscreveu","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever na nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever na newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_error_generic_details":"No momento, não é possível se inscrever na nossa newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever na nossa newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente de novo mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição confirmada","ns_yes_subscribe_text":"Sim, fazer inscrição"},"ru-RU":{"bottom_sheet_modal_close_icon":"Закрыть","carousel_next_button":"Далее","carousel_prev_button":"Назад","decorative_video_pause_button_label":"Пауза","decorative_video_play_button_label":"Воспроизвести","featured_game_breadcrumbs_parent_item":"Игры","hero_carousel_pause_button":"Пауза","hero_carousel_play_button":"Воспроизвести","hp_hero_carousel_scroll_down_label":"Прокрутить вниз","hp_hero_play_button_label":"Воспроизвести","hp_hero_stop_button_label":"Стоп","image_carousel_screen_reader_announcer_label":"На экране слайд {selectedTab} из {total} ","lightbox_close_button":"Закрыть","masonry_grid_external_store_link":"Внешняя ссылка на магазин","ns_already_subbed_details":"Вы уже получаете письма по рассылке на этот адрес электронной почты. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для вашего адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться"},"zh-CN":{"bottom_sheet_modal_close_icon":"关闭","carousel_next_button":"下一个","carousel_prev_button":"上一个","decorative_video_pause_button_label":"暂停","decorative_video_play_button_label":"播放","featured_game_breadcrumbs_parent_item":"游戏","hero_carousel_pause_button":"暂停","hero_carousel_play_button":"播放","hp_hero_carousel_scroll_down_label":"向下滚动","hp_hero_play_button_label":"播放","hp_hero_stop_button_label":"停止","image_carousel_screen_reader_announcer_label":"正在显示{selectedTab}（共{total}）","lightbox_close_button":"关闭","masonry_grid_external_store_link":"前往商店的外部链接","ns_already_subbed_details":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置页面随时修改您的电子邮件偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅Rockstar Games电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅Rockstar Games新闻通讯。","ns_confirm_title":"确认您的订阅","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改您的电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_details":"您现已订阅Rockstar Games电子邮件列表，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置页面随时管理您的电子邮件偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅"},"zh-TW":{"bottom_sheet_modal_close_icon":"關閉","carousel_next_button":"下一個","carousel_prev_button":"上一個","decorative_video_pause_button_label":"暫停","decorative_video_play_button_label":"播放","featured_game_breadcrumbs_parent_item":"遊戲","hero_carousel_pause_button":"暫停","hero_carousel_play_button":"播放","hp_hero_carousel_scroll_down_label":"向下捲動","hp_hero_play_button_label":"播放","hp_hero_stop_button_label":"停止","image_carousel_screen_reader_announcer_label":"現正顯示 {selectedTab}（共 {total} 個）","lightbox_close_button":"關閉","masonry_grid_external_store_link":"前往商店的外部連結","ns_already_subbed_details":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定頁面隨時變更您的電子郵件偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將您的電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"確定","ns_successfully_subscribed_details":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定頁面隨時管理您的電子郵件偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是，訂閱"}}'),
        Ha = (Ya = () => {
          const [{
            iso: e
          }] = (0, c.getLocale)(), {
            loading: t,
            data: r
          } = (0, n.useContentfulQuery)({
            query: i.wwwPageQuery,
            variables: {
              slug: "homepage"
            }
          }), d = (0, o.useCallback)(() => {
            l.u.refresh()
          }, []);
          return !t && r && r.wwwPageCollection.items[0] ? (0, a.jsx)(s.NP, {
            colorScheme: "dark",
            defaultColorScheme: "dark",
            defaultContrastMode: "normal",
            defaultPlatformScale: "desktop",
            className: "_1e1dvo60",
            locale: e,
            onPlatformScaleChange: d,
            children: (0, a.jsx)(ve, {
              children: (0, a.jsx)(n.PageRenderer, {
                data: r.wwwPageCollection.items[0],
                customBlocks: Wa,
                children: (0, a.jsx)($a, {})
              })
            })
          }) : null
        }, (0, c.withIntl)(Ya, Ka));
      var Ya
    },
    96498: (e, t, r) => {
      r.r(t), r.d(t, {
        RSG_CONTENT_RATING_FRAGMENT: () => s,
        RSG_CTA_FRAGMENT: () => n,
        RSG_GAME_FRAGMENT: () => i,
        RSG_ICON_FRAGMENT: () => o,
        RSG_IMAGE_FILE_FRAGMENT: () => l,
        RSG_IMAGE_FRAGMENT: () => c,
        RSG_VIDEO_FILE_FRAGMENT: () => A,
        RSG_VIDEO_FRAGMENT: () => z,
        SYS_FRAGMENT: () => d,
        WWW_BANNER_FRAGMENT: () => u,
        WWW_DECK_FRAGMENT: () => _,
        WWW_DECORATIVE_VIDEO_FRAGMENT: () => m,
        WWW_DIVIDER_FRAGMENT: () => g,
        WWW_EDITORIAL_GRID_MODULE_FRAGMENT: () => f,
        WWW_FEATURED_CONTENT_CAROUSEL_FRAGMENT: () => p,
        WWW_FEATURED_GAME_SECTION_FRAGMENT: () => b,
        WWW_GRID_FRAGMENT: () => h,
        WWW_GRID_LAYOUT_BREAKPOINT_FRAGMENT: () => w,
        WWW_GRID_WRAPPER_FRAGMENT: () => x,
        WWW_IMAGE_BLOCK_FRAGMENT: () => y,
        WWW_IMAGE_CARD_FRAGMENT: () => k,
        WWW_IMAGE_CAROUSEL_FRAGMENT: () => v,
        WWW_IMAGE_MARQUEE_MODULE_FRAGMENT: () => j,
        WWW_LIGHTBOX_IMAGE_FRAGMENT: () => C,
        WWW_MASONRY_GRID_FRAGMENT: () => R,
        WWW_NEWSLETTER_SUBSCRIBE_FRAGMENT: () => S,
        WWW_PROMO_MODULE_FRAGMENT: () => I,
        WWW_SECTION_WRAPPER_FRAGMENT: () => E,
        WWW_SUPPORT_CALLOUT_MODULE_FRAGMENT: () => M,
        WWW_TEXT_BLOCK_FRAGMENT: () => F,
        WWW_TEXT_WITH_BADGE_FRAGMENT: () => D,
        WWW_THEME_PROVIDER_FRAGMENT: () => W,
        WWW_VIDEO_PLAYER_FRAGMENT: () => P,
        WWW_WEB_OFFER_CLAIM_FRAGMENT: () => N,
        wwwBottomSheetQuery: () => G,
        wwwPageQuery: () => T
      });
      var a = r(89311);
      const s = a.gql`
fragment RsgContentRatingFragment on RsgContentRating {
  __typename
  sys {
    ...SysFragment
  }
  titleSlug
}
`,
        n = a.gql`
fragment RsgCtaFragment on RsgCta {
  sys {
    ...SysFragment
  }
  text
  analyticsData
  openInNewTab
  link {
    url
  }
  appearance
  iconLeft {
    ...RsgIconFragment
  }
  iconRight {
    ...RsgIconFragment
  }
  backgroundColor
  openInNewTab
}
`,
        i = a.gql`
fragment RsgGameFragment on RsgGame {
  title
  slug
  wwwPageLink
  boxArt {
    imageFilesCollection {
      __typename
      items {
        ... on RsgImageFile {
          ...RsgImageFileFragment
        }
      }
    }
  }
}
`,
        o = a.gql`
fragment RsgIconFragment on RsgIcon {
  icon
  iconLabel
}
`,
        l = a.gql`
fragment RsgImageFileFragment on RsgImageFile {
  __typename
  sys {
    ...SysFragment
  }
  context
  altText
  source {
    __typename
    url
    width
    height
  }
}
`,
        c = a.gql`
fragment RsgImageFragment on RsgImage {
  __typename
  altText
  imageFilesCollection(
    limit: 8
    where: {
      context_in: [
        "mobile"
        "desktop"
        "1:1"
        "2:3"
        "3:2"
        "4:3"
        "4:5"
        "5:1"
        "5:2"
        "5:4"
        "9:16"
        "16:9"
        "21:9"
        "32:9"
      ]
    }
  ) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      ...RsgImageFileFragment
    }
  }
}
`,
        d = a.gql`
fragment SysFragment on Sys {
  __typename
  id
}
`,
        u = a.gql`
fragment WwwBannerFragment on WwwBanner {
  __typename
  sys {
    ...SysFragment
  }
  text
  backgroundColor
  backgroundImage {
    ...RsgImageFragment
  }
  foregroundImage {
    ...RsgImageFileFragment
  }
  link {
    url
  }
  altText
}
`,
        _ = a.gql`
fragment WwwDeckFragment on WwwDeck {
  sys {
      ...SysFragment
  }
  title
  variant
  navigationButtonAppearance
  cardsCollection(limit: 4) {
      items {
          __typename
          ... on WwwImageCard {
              ...WwwImageCardFragment
          }
          ... on WwwImageBlock {
            ...WwwImageBlockFragment
          }
      }
  }
}
`,
        m = a.gql`
fragment WwwDecorativeVideoFragment on WwwDecorativeVideo {
    __typename
    sys {
        ...SysFragment
    }
    scrimColor
    landscapeViewportBehavior
    overlayElements {
        ...WwwGridWrapperFragment
    }
    video {
        ...RsgVideoFragment
    }
    squareVideo {
        ...RsgVideoFragment
    }
}
`,
        g = a.gql`
fragment WwwDividerFragment on WwwDivider {
    __typename
    sys {
          ...SysFragment
    }
    thickness
    style
}
`,
        f = a.gql`
fragment WwwEditorialGridModuleFragment on WwwEditorialGridModule {
  __typename
  sys {
    ...SysFragment
  }
  contentCollection(limit: 7) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      tinaId
    }
  }
}
`,
        p = a.gql`
fragment WwwFeaturedContentCarouselFragment on WwwFeaturedContentCarousel {
  __typename
  sys {
    ...SysFragment
  }
  size
  slidesCollection(limit: 5) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      title
      eyebrow
      topGradientColor
      bottomGradientColor
      ctasCollection(limit: 3) {
        items {
          ...RsgCtaFragment
        }
      }
      logo {
        ...RsgImageFileFragment
      }
      background {
        ...RsgImageFragment
        ...RsgVideoFragment
      }
    }
  }
}
`,
        b = a.gql`
fragment WwwFeaturedGameSectionFragment on WwwFeaturedGameSection {
  __typename
  sys {
    ...SysFragment
  }
  description
  ctasCollection(limit: 4) {
    items {
      __typename
      sys {
        ...SysFragment
      }
      ...RsgCtaFragment
    }
  }
  backgroundImage {
    ...RsgImageFragment
  }
  backgroundVideo {
    ...RsgVideoFragment
  }
  squareBackgroundVideo {
    ...RsgVideoFragment
  }
  logo {
    ...RsgImageFileFragment
  }
  game {
    platformsCollection(limit: 10) {
      items {
        __typename
        sys {
          ...SysFragment
        }
        name
        logo {
          ...RsgImageFragment
        }
      }
    }
    title
    logo {
      ...RsgImageFragment
    }
  }

  childModulesCollection(limit: 2) {
    items {
      __typename
      ... on WwwPromoModule {
        ...WwwPromoModuleFragment
      }
      ... on WwwDeck {
        sys {
          ...SysFragment
        }
        title
        cardsCollection(limit: 4) {
          items {
            __typename
            ... on WwwImageCard {
              ...WwwImageCardFragment
            }
          }
        }
      }
    }
  }
}
`,
        h = a.gql`
fragment WwwGridFragment on WwwGrid {
    __typename
    sys {
        ...SysFragment
    }
    contentCollection(limit: 10) {
        items {
            ... on WwwTextBlock {
                ...WwwTextBlockFragment
            }
            ... on WwwImageCard {
                ...WwwImageCardFragment
            }
            ... on WwwImageBlock {
              ...WwwImageBlockFragment
            }
            ... on WwwImageCarousel {
              ...WwwImageCarouselFragment
            }
            ... on RsgImageFile {
              ...RsgImageFileFragment
            }
        }
    }
    layout {
        breakpointsCollection(limit: 8) {
            items {
                ... on WwwGridLayoutBreakpoint {
                    ...WwwGridLayoutBreakpointFragment
                }
            }
        }
    }
}
`,
        w = a.gql`
fragment WwwGridLayoutBreakpointFragment on WwwGridLayoutBreakpoint {
    __typename
    sys {
        ...SysFragment
    }
    mediaQuery
    columns
    behavior
    alignment
}
`,
        x = a.gql`
fragment WwwGridWrapperFragment on WwwGridWrapper {
    __typename
    sys {
        ...SysFragment
    }
    title
    theme {
      ...WwwThemeProviderFragment
    }
    gap
    contentCollection(limit: 6) {
        items {
            ... on WwwGrid {
              ...WwwGridFragment
            }
        }
    }
}
`,
        y = a.gql`
fragment WwwImageBlockFragment on WwwImageBlock {
  __typename
  sys {
    ...SysFragment
  }
  description
  descriptionSize
  image {
    ... on RsgImageFile {
      ...RsgImageFileFragment
    }
    ... on WwwLightboxImage {
      ...WwwLightboxImageFragment
    }
  }
  textAlignment
  title
  titleSize
}
`,
        k = a.gql`
fragment WwwImageCardFragment on WwwImageCard {
  __typename
  sys {
    ...SysFragment
  }
  badgeText
  backgroundImage {
    ...RsgImageFragment
  }
  cta {
    ...RsgCtaFragment
  }
  link {
    url
  }
  logo {
    ...RsgImageFileFragment
  }
  logoSize
  text
  textColor
  textAlignment
  gradientColor
  ariaLabel
}
`,
        v = a.gql`
fragment WwwImageCarouselFragment on WwwImageCarousel {
  __typename
  sys {
    ...SysFragment
  }
  contentCollection(limit: 5) {
    total
    skip
    limit
    items {
      ... on WwwImageBlock {
        ...WwwImageBlockFragment
      }
    }
  }
}
`,
        j = a.gql`
fragment WwwImagesMarqueeModuleFragment on WwwImagesMarqueeModule {
  __typename
  sys {
    ...SysFragment
  }
  title
  description
  cta {
    ...RsgCtaFragment
  }
  marqueeingElementsCollection(limit: 2) {
    items {
      ... on RsgGroup {
        referencesCollection(limit: 20) {
          items {
            ... on RsgGame {
              boxArt {
                ...RsgImageFragment
              }
            }
          }
        }
      }
    }
  }
}
`,
        C = a.gql`
fragment WwwLightboxImageFragment on WwwLightboxImage {
  __typename
  sys {
    ...SysFragment
  }
  caption
  downloadButton
  image {
    ...RsgImageFileFragment
  }
  thumbnailAspectRatio
  thumbnailObjectPosition
  zoomControls
}
`,
        R = a.gql`
fragment WwwMasonryGridFragment on WwwMasonryGrid {
  __typename
  sys {
    ...SysFragment
  }
  variant
  cardsCollection {
    items {
      __typename
      sys {
        ...SysFragment
      }
      backgroundImage {
        ...RsgImageFragment
      }
      logo {
        ...RsgImageFileFragment
      }
      text
      badgeText
      link {
        url
      }
      gradientColor
      textAlignment
      textColor
      cta {
        ...RsgCtaFragment
      }
    }
  }
}
`,
        S = a.gql`
fragment WwwNewsletterSubscribeFragment on WwwNewsletterSubscribe {
  __typename
  sys {
    ...SysFragment
  }
  image {
    ...RsgImageFileFragment
  }
  textContent
  cta {
    ...RsgCtaFragment
  }
}
`,
        I = a.gql`
fragment WwwPromoModuleFragment on WwwPromoModule {
  __typename
  sys {
    ...SysFragment
  }
  backgroundImage {
    ...RsgImageFragment
  }
  foregroundImage {
    ...RsgImageFileFragment
  }
  foregroundImageSize
  badge
  headline
  description
  cta {
    ...RsgCtaFragment
  }
  legalText
  imagePlacement
  backgroundColor
  colorMode
  enableGradient
  contentAlignment
}
`,
        N = a.gql`
fragment WwwWebOfferClaimFragment on WwwWebOfferClaim {
    __typename
    sys {
        ...SysFragment
    }
    tinaPageUrl
}
`,
        E = a.gql`
fragment WwwSectionWrapperFragment on WwwSectionWrapper {
  __typename
  sys {
    ...SysFragment
  }
  title
  theme {
    ...WwwThemeProviderFragment
  }
  backgroundCss
  backgroundImage {
    ...RsgImageFragment
  }
  mobileBackgroundImage {
    ...RsgImageFileFragment
  }
  desktopBackgroundImage {
    ...RsgImageFileFragment
  }
  bottomPadding
  topPadding
  cta {
    ...RsgCtaFragment
  }
  contentCollection(limit: 5) {
    items {
      ... on RsgContentRating {
        ...RsgContentRatingFragment
      }
      ... on WwwBanner {
        ...WwwBannerFragment
      }
      ... on WwwEditorialGridModule {
        ...WwwEditorialGridModuleFragment
      }
      ... on WwwMasonryGrid {
        ...WwwMasonryGridFragment
      }
      ... on WwwNewsletterSubscribe {
        ...WwwNewsletterSubscribeFragment
      }
      ... on WwwDecorativeVideo {
        ...WwwDecorativeVideoFragment
      }
      ... on WwwDivider {
        ...WwwDividerFragment
      }
      ... on WwwGridWrapper {
        ...WwwGridWrapperFragment
      }
      ... on WwwDeck {
        ...WwwDeckFragment
      }
      ... on WwwSupportCalloutModule {
        ...WwwSupportCalloutModuleFragment
      }
      ... on WwwWebOfferClaim {
        ...WwwWebOfferClaimFragment
      }
    }
  }
}
`,
        M = a.gql`
fragment WwwSupportCalloutModuleFragment on WwwSupportCalloutModule {
  sys {
    ...SysFragment
  }
  title
  description
  cta {
    ...RsgCtaFragment
  }
}
`,
        F = a.gql`
fragment WwwTextBlockFragment on WwwTextBlock {
    __typename
    sys {
        ...SysFragment
    }
    badge
    eyebrow
    header
    body
    ctasCollection(limit: 4) {
        items {
            __typename
            sys {
                ...SysFragment
            }
            ...RsgCtaFragment
        }
    }
    footnote
    headerSize
    bodySize
    alignment
}
`,
        D = a.gql`
fragment WwwTextWithBadgeFragment on WwwTextWithBadge {
  __typename
  sys {
    ...SysFragment
  }
  content {
    ... on RsgRichText {
      __typename
      sys {
        ...SysFragment
      }
      content {
        json
      }
    }
  }
  variant
  image {
    ...RsgImageFileFragment
  }
}
`,
        W = a.gql`
fragment WwwThemeProviderFragment on WwwThemeProvider {
  __typename
  sys {
    ...SysFragment
  }
  colorMode
  headerTextColor
  primaryAccentColor
  secondaryAccentColor
}
`,
        A = a.gql`
fragment RsgVideoFileFragment on RsgVideoFile {
  __typename
  sys {
    ...SysFragment
  }
  codec
  context
  height
  url
  width
}
`,
        z = a.gql`
fragment RsgVideoFragment on RsgVideo {
  __typename
  sys {
    ...SysFragment
  }
  title
  link {
    url
  }
  type
  upload {
    url
    title
  }
  analyticsData
  videoFilesCollection(limit: 3) {
    items {
      ...RsgVideoFileFragment
    }
  }
}
`,
        P = a.gql`
fragment WwwVideoPlayerFragment on WwwVideoPlayer {
  __typename
  sys {
    ...SysFragment
  }
  videos {
    ... on RsgGroup {
      referencesCollection(limit: 20) {
        items {
          ... on RsgVideo {
            ...RsgVideoFragment
          }
        }
      }
    }
  }
}
`,
        T = a.gql`
  query WwwPage($locale: String!, $slug: String!) {
    wwwPageCollection(locale: $locale, limit: 1, where: { slug: $slug }) {
      items {
        __typename
        sys {
          ...SysFragment
        }
        slug
        contentCollection(limit: 20) {
          total
          skip
          limit
          items {
            ... on WwwDivider {
              ...WwwDividerFragment
            }
            ... on WwwFeaturedContentCarousel {
              ...WwwFeaturedContentCarouselFragment
            }
            ... on WwwFeaturedGameSection {
              ...WwwFeaturedGameSectionFragment
            }
            ... on WwwImagesMarqueeModule {
              ...WwwImagesMarqueeModuleFragment
            }
            ... on WwwPromoModule {
              ...WwwPromoModuleFragment
            }
            ... on WwwSectionWrapper {
              ...WwwSectionWrapperFragment
            }
            ... on WwwTextWithBadge {
              ...WwwTextWithBadgeFragment
            }
          }
        }
      }
    }
  }
  ${s}
  ${n}
  ${o}
  ${l}
  ${c}
  ${A}
  ${z}
  ${d}
  ${u}
  ${_}
  ${m}
  ${g}
  ${f}
  ${p}
  ${b}
  ${h}
  ${w}
  ${x}
  ${y}
  ${k}
  ${v}
  ${j}
  ${C}
  ${R}
  ${S}
  ${I}
  ${E}
  ${M}
  ${F}
  ${D}
  ${W}
  ${N}
`,
        G = a.gql`
  query WwwBottomSheet($locale: String!, $slug: String!) {
    wwwBottomSheetCollection(locale: $locale, limit: 1, where: { slug: $slug }) {
      items {
        __typename
        sys {
          ...SysFragment
        }
        slug
        contentCollection(limit: 10) {
          total
          skip
          limit
          items {
            ... on WwwVideoPlayer {
              ...WwwVideoPlayerFragment
            }
          }
        }
      }
    }
  }
  ${A}
  ${z}
  ${d}
  ${P}
`
    }
  }
]);