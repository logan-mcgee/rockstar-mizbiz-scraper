! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b8f239b2-8e90-4cbe-9f2f-0130b4b53688", e._sentryDebugIdIdentifier = "sentry-dbid-b8f239b2-8e90-4cbe-9f2f-0130b4b53688")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "90b9af281bd1b5c2955354a97f6fab1985234888",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "90b9af281bd1b5c2955354a97f6fab1985234888"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [784], {
    98e3: (e, a, t) => {
      t.d(a, {
        j: () => g,
        i: () => b
      });
      var d = t(51664),
        o = t(94072),
        n = t(22560),
        s = t(1740),
        i = t(42836),
        l = t(57013);
      var r = t(95240);
      const c = e => {
          let {
            modal: a
          } = e;
          const {
            content: t,
            className: c,
            height: m,
            onClose: f,
            rect: p = {
              left: 0,
              top: 0
            },
            contentStyle: b = {},
            contentClassName: g = "",
            width: u,
            fadeIn: y = !0,
            cardIds: _,
            theme: h,
            title: k,
            gtm: v = {},
            aspectRatio: x = "default",
            cardDimensions: w
          } = a, {
            left: j,
            top: E
          } = p, [S, R] = (0, d.useState)(null), {
            track: C
          } = (0, i.useGtmTrack)(), N = null !== _ && (_?.length || 0) > 1 && ("flag_bg" === h || "fob" === w?.size), [M, T] = (0, l.useSearchParams)(), [D, I] = (0, d.useState)(!1), [P, B] = (0, d.useState)(!1), G = () => {
            const e = S - 1;
            R(e), B(e <= 0), I(e >= (_?.length || 0) - 1), C({
              event: "modal_previous",
              event_category: "modal",
              event_action: "previous",
              event_label: "",
              position: S
            })
          }, L = () => {
            const e = S + 1;
            R(e), B(e <= 0), I(e >= (_?.length || 0) - 1), C({
              event: "modal_next",
              event_category: "modal",
              event_action: "next",
              event_label: "",
              position: S
            })
          };
          (0, d.useEffect)((() => {
            null !== S && null !== _ && S < _?.length && S > -1 && T({
              info: _[S]
            })
          }), [S, _]), (0, d.useEffect)((() => {
            if (null !== _ && null === S && _?.length > 0) {
              const e = M.get("info");
              _?.forEach(((a, t) => {
                a === e && (R(t), B(t <= 0), I(t >= (_?.length || 0) - 1))
              }))
            }
          }), [_, S]);
          const [z] = (0, d.useState)({
            y: E,
            x: j,
            top: 0,
            left: 0,
            width: u,
            height: m,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: N ? "0" : null
          }), H = {
            opacity: 1
          }, U = (0, d.useRef)(null), F = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, V = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [O] = (0, d.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: N ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : null,
            transition: {
              x: F,
              y: F,
              top: F,
              left: F,
              width: F,
              height: F,
              border: F,
              background: {
                delay: .3
              }
            }
          }), [q, A] = (0, d.useState)({
            initial: z,
            shown: O
          });
          (0, d.useEffect)((() => {
            A({
              initial: z,
              shown: O
            })
          }), [z, O]), (0, d.useEffect)((() => {
            const e = e => {
              "function" == typeof f && 27 === e.keyCode && (f(), C({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: k ?? void 0,
                ...v
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const J = () => {
              "function" == typeof f && (f(), C({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: k ?? void 0,
                ...v
              }))
            },
            W = y ? 0 : 1,
            Y = (0, r.jsx)(n.motion.button, {
              className: "rockstargames-sites-legacyb0326cc98df99ada0e0f6821f0f0a6ad",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: V,
              onClick: () => {
                J()
              }
            });
          return (0, d.useMemo)((() => (0, r.jsx)("div", {
            className: "rockstargames-sites-legacye9a8e066d320a81b61aa2c636fa0a5b5",
            "data-show-nav": N,
            "data-aspect-ratio": x,
            children: (0, r.jsxs)(o.cp, {
              children: [(0, r.jsx)(n.motion.div, {
                className: "rockstargames-sites-legacyc8632c630878ad16e637fe2b8db2f02c",
                initial: {
                  opacity: 0
                },
                animate: H,
                transition: F,
                onClick: () => J()
              }), N && (0, r.jsxs)("div", {
                className: "rockstargames-sites-legacyeeecb8dc782f382fc9d32d03ecc1a2a5",
                children: [(0, r.jsxs)(n.motion.div, {
                  className: "rockstargames-sites-legacyb6e3406cb9a52fc7583d5c74681e88bc",
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: V,
                  children: [(0, r.jsx)("button", {
                    type: "button",
                    "aria-label": "Previous",
                    onClick: G,
                    disabled: P
                  }), (0, r.jsxs)("div", {
                    className: "rockstargames-sites-legacyff3c13d9dc1de9af609a1f99b4c47039",
                    children: [" ", S + 1, (0, r.jsx)("div", {
                      className: "rockstargames-sites-legacycd9c6033ad00894881fa5451acfe15da"
                    }), _?.length, " "]
                  }), (0, r.jsx)("button", {
                    type: "button",
                    "aria-label": "Next",
                    onClick: L,
                    disabled: D
                  })]
                }), Y]
              }), (0, r.jsx)(n.motion.div, {
                className: "rockstargames-sites-legacyfab99cc2e2ca2e2a2158f9d41e764558",
                ref: U,
                initial: "initial",
                animate: "shown",
                variants: q,
                transition: F,
                style: b,
                children: (0, r.jsxs)(n.motion.div, {
                  className: (0, s.classList)("rockstargames-sites-legacyb6aa5ebf680af5d95d0e9c76ac36ed82", c),
                  children: [!N && Y, (0, r.jsx)(n.motion.div, {
                    className: (0, s.classList)("rockstargames-sites-legacyd901631c0b9d817396c8352c027a2a0d", g),
                    initial: {
                      opacity: W
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: V,
                    children: t
                  }), (0, r.jsx)("button", {
                    className: "rockstargames-sites-legacyf1ecf74036b2b7fdfda3613619af40cf",
                    type: "button",
                    "aria-label": "End of modal"
                  })]
                })
              })]
            })
          })), [t, S, b])
        },
        m = "modal-context",
        f = [null, () => null],
        p = window?.[m] ?? (window[m] = (0, d.createContext)(f)),
        b = () => (0, d.useContext)(p),
        g = e => {
          let {
            children: a
          } = e;
          const [t, o] = (0, d.useState)(f), n = (0, d.useMemo)((() => t?.content ? (0, r.jsx)(c, {
            modal: t
          }) : null), [t]);
          return (0, r.jsx)(p.Provider, {
            value: [n, o],
            children: a
          })
        }
    },
    18784: (e, a, t) => {
      t.r(a);
      var d = t(82708),
        o = t(9860),
        n = t(98e3),
        s = t(33052),
        i = t(45792),
        l = t(77715),
        r = t(41272),
        c = t(75016),
        m = t(42708),
        f = (t(31389), t(42664), t(34904), t(46368), t(58256), t(64932), t(87440), t(53128), t(18932), t(19520), t(46644), t(69224), t(58432), t(13144), t(77571), t(84084), t(86096), t(54012), t(38592), t(64508)),
        p = t(46188),
        b = t(95240);
      const g = (0, s.makeVar)(null),
        u = window?.env?.graphEnv ?? "prod",
        {
          pingBearer: y
        } = (0, i.getScConfigForOrigin)(),
        _ = JSON.parse('{"meta":{"url":"/reddeadredemption","title":"Red Dead Redemption","description":"Red Dead Redemption 2023","keywords":null,"image":null,"uploads_directory":"/tina-modules/reddeadredemption"},"content":[{"key":"key_91b20a4e-0b42-4dac-8b14-55f392e345c7","_template":"gen9.TinaWrapper","content":[{"key":"key_9813d514-ebbd-4b10-9fe4-a72a91ddeb5b","_template":"legacy.LegacyPageTemplate","hero":{"name":"Hero","type":"legacy","animated":true,"content":{"brands":[{"brand":"rdr1"}],"title":"Test Title","description":"This is a fake body text for testing.","legalText":"Here is some tiny legal text.","ctaGroup":{"expandingButton":{"label":"Subscribe","buttons":[{"key":"key_8c55c91a-e984-4fc8-88e8-ffe3d04d2a4d","platform":"questionmark","href":"https://rockstargames.com","text":"Some text to see how this object renders"}]},"ctas":{"buttons":[{"label":"Hello!","href":"https://rockstargames.com"}]}}},"images":{"background":{"mobile":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810109636,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Background-Mobile-ImportExport-B2R01-jpg","hashed_filename":"c88f06dfe8ababc9233d1e13ba07bf502b6833a5.jpg","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/c88f06dfe8ababc9233d1e13ba07bf502b6833a5.jpg","full_src":"/tina-uploads/tina-modules/reddeadredemption/c88f06dfe8ababc9233d1e13ba07bf502b6833a5.jpg","prod":false,"created_by":794},"desktop":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810180189,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Background-Desktop-ImportExport-B2R01-jpg","hashed_filename":"3260edfc5529d512178571a323262d237f0412d5.jpg","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/3260edfc5529d512178571a323262d237f0412d5.jpg","full_src":"/tina-uploads/tina-modules/reddeadredemption/3260edfc5529d512178571a323262d237f0412d5.jpg","prod":false,"created_by":794}},"foreground":{"mobile":{"image":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810324145,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Foreground-Mobile-ImportExport-B2R01-png","hashed_filename":"40e5e5dd3a4acf7a0442073561c3b22926e12873.png","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/40e5e5dd3a4acf7a0442073561c3b22926e12873.png","full_src":"/tina-uploads/tina-modules/reddeadredemption/40e5e5dd3a4acf7a0442073561c3b22926e12873.png","prod":false,"created_by":794}},"desktop":{"image":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810265634,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Foreground-Desktop-ImprtExport-B2R01-png","hashed_filename":"73e2fc5d85210a8968f981c1b0a37d644aabbbeb.png","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/73e2fc5d85210a8968f981c1b0a37d644aabbbeb.png","full_src":"/tina-uploads/tina-modules/reddeadredemption/73e2fc5d85210a8968f981c1b0a37d644aabbbeb.png","prod":false,"created_by":794}}}}}}]}]}').content[0].content[0],
        h = () => {
          const [e] = (0, n.i)(), a = (0, s.useBase)(), t = (0, i.useLocale)();
          return (0, b.jsx)(i.ResizeProvider, {
            children: (0, b.jsx)(l.ScrollProvider, {
              children: (0, b.jsx)(d.BrowserRouter, {
                basename: a,
                children: (0, b.jsx)(m.GtmProvider, {
                  children: (0, b.jsx)(r.IntlProvider, {
                    locales: c.intlMessages,
                    lang: t,
                    children: (0, b.jsxs)(o.ScrollTracker, {
                      threshold: [25, 50, 75, 90, 100],
                      children: [e, (0, b.jsx)(p.c, {
                        ..._
                      })]
                    })
                  })
                })
              })
            })
          })
        },
        k = (0, s.withReactiveState)((() => (0, b.jsx)(n.j, {
          children: (0, b.jsx)(h, {})
        })), {
          state: g
        }),
        v = (0, s.withRockstarGraph)(k, {
          env: u,
          token: (0, s.makeVar)(null),
          tokenPing: y,
          tokenPingExpires: (0, s.makeVar)(null),
          typePolicies: {}
        }),
        x = document.createElement("div");
      document.body.appendChild(x), (0, f.C)(x).render((0, b.jsx)(v, {}))
    }
  }
]);
//# sourceMappingURL=c3eeca3a1e779390e957e1ed9b543ec6.js.map