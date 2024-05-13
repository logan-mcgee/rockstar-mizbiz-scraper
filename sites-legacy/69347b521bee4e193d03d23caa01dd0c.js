! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "c8d13744-edab-49fb-9305-044cfb77e07a", e._sentryDebugIdIdentifier = "sentry-dbid-c8d13744-edab-49fb-9305-044cfb77e07a")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-legacy",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [784], {
    98e3: (e, a, t) => {
      t.d(a, {
        j: () => b,
        i: () => u
      });
      var o = t(51664),
        d = t(94072),
        n = t(22560),
        s = t(1740),
        r = t(42836),
        i = t(57013);
      var l = t(95240);
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
            contentStyle: u = {},
            contentClassName: b = "",
            width: g,
            fadeIn: y = !0,
            cardIds: h,
            theme: _,
            title: k,
            gtm: v = {},
            aspectRatio: w = "default",
            cardDimensions: x
          } = a, {
            left: j,
            top: E
          } = p, [S, R] = (0, o.useState)(-1), {
            track: D
          } = (0, r.useGtmTrack)(), C = null !== h && (h?.length || 0) > 1 && ("flag_bg" === _ || "fob" === x?.size), [N, T] = (0, i.useSearchParams)(), [M, I] = (0, o.useState)(!1), [P, B] = (0, o.useState)(!1), [U, G] = (0, o.useState)(), L = () => {
            const e = S > -1 ? S - 1 : 0;
            R(e), B(e <= 0), I(e >= (h?.length || 0) - 1), D({
              event: "modal_previous",
              event_category: "modal",
              event_action: "previous",
              event_label: "",
              position: S
            })
          }, z = () => {
            const e = S > -1 ? S + 1 : 0;
            R(e), B(e <= 0), I(e >= (h?.length || 0) - 1), D({
              event: "modal_next",
              event_category: "modal",
              event_action: "next",
              event_label: "",
              position: S
            })
          };
          (0, o.useEffect)((() => {
            null !== S && null !== h && h && S < h.length && S > -1 && T({
              info: h[S].toString()
            })
          }), [S, h]), (0, o.useEffect)((() => {
            if (null !== h && -1 === S && h && h.length > 0) {
              const e = N.get("info");
              h?.forEach(((a, t) => {
                a === e && (R(t), B(t <= 0), I(t >= (h?.length || 0) - 1))
              }))
            }
          }), [h, S]);
          const [H] = (0, o.useState)({
            y: E,
            x: j,
            top: 0,
            left: 0,
            width: g,
            height: m,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: C ? "0" : ""
          }), K = {
            opacity: 1
          }, A = (0, o.useRef)(null), q = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, F = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [V] = (0, o.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: C ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
            transition: {
              x: q,
              y: q,
              top: q,
              left: q,
              width: q,
              height: q,
              border: q,
              background: {
                delay: .3
              }
            }
          }), [O, J] = (0, o.useState)({
            initial: H,
            shown: V
          });
          (0, o.useEffect)((() => {
            J({
              initial: H,
              shown: V
            })
          }), [H, V]), (0, o.useEffect)((() => {
            const e = e => {
              "function" == typeof f && "Escape" === e.key && (f(), D({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: k ?? void 0,
                ...v
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const W = () => {
              "function" == typeof f && (f(), D({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: k ?? void 0,
                ...v
              }))
            },
            Y = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let t = 0; t < e.children.length; t++) {
                const o = e.children[t];
                if (o.scrollHeight > o.clientHeight) return o;
                const d = Y(o, a - 1);
                if (d) return d
              }
              return null
            },
            Q = e => {
              if (Z?.current?.children) {
                let a = null;
                const t = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = (e => {
                      let a = null;
                      return U?.queried ? a = U.element : (a = Y(e, 2), G({
                        queried: !0,
                        element: a
                      })), a
                    })(Z.current), e.preventDefault(), a && (a.scrollTop += t)
                }
              }
            },
            X = y ? 0 : 1,
            Z = (0, o.useRef)(null),
            $ = (0, l.jsx)(n.motion.button, {
              className: "rockstargames-sites-legacyb0326cc98df99ada0e0f6821f0f0a6ad",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: F,
              onClick: () => {
                W()
              },
              onKeyDown: Q,
              onKeyUp: Q
            });
          return (0, o.useMemo)((() => (0, l.jsx)("div", {
            className: "rockstargames-sites-legacye9a8e066d320a81b61aa2c636fa0a5b5",
            "data-show-nav": C,
            "data-aspect-ratio": w,
            children: (0, l.jsxs)(d.cp, {
              children: [(0, l.jsx)(n.motion.div, {
                className: "rockstargames-sites-legacyc8632c630878ad16e637fe2b8db2f02c",
                initial: {
                  opacity: 0
                },
                animate: K,
                transition: q,
                onClick: () => W()
              }), C && (0, l.jsxs)("div", {
                className: "rockstargames-sites-legacyeeecb8dc782f382fc9d32d03ecc1a2a5",
                children: [(0, l.jsxs)(n.motion.div, {
                  className: "rockstargames-sites-legacyb6e3406cb9a52fc7583d5c74681e88bc",
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: F,
                  children: [(0, l.jsx)("button", {
                    type: "button",
                    "aria-label": "Previous",
                    onClick: L,
                    disabled: P,
                    onKeyDown: Q,
                    onKeyUp: Q
                  }), (0, l.jsxs)("div", {
                    className: "rockstargames-sites-legacyff3c13d9dc1de9af609a1f99b4c47039",
                    children: [" ", S + 1, (0, l.jsx)("div", {
                      className: "rockstargames-sites-legacycd9c6033ad00894881fa5451acfe15da"
                    }), h?.length, " "]
                  }), (0, l.jsx)("button", {
                    type: "button",
                    "aria-label": "Next",
                    onClick: z,
                    disabled: M,
                    onKeyDown: Q,
                    onKeyUp: Q
                  })]
                }), $]
              }), (0, l.jsx)(n.motion.div, {
                className: "rockstargames-sites-legacyfab99cc2e2ca2e2a2158f9d41e764558",
                ref: A,
                initial: "initial",
                animate: "shown",
                variants: O,
                transition: q,
                style: u,
                children: (0, l.jsxs)(n.motion.div, {
                  className: (0, s.classList)("rockstargames-sites-legacyb6aa5ebf680af5d95d0e9c76ac36ed82", c),
                  children: [!C && $, (0, l.jsx)(n.motion.div, {
                    className: (0, s.classList)("rockstargames-sites-legacyd901631c0b9d817396c8352c027a2a0d", b),
                    initial: {
                      opacity: X
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: F,
                    ref: Z,
                    children: t
                  }), (0, l.jsx)("button", {
                    className: "rockstargames-sites-legacyf1ecf74036b2b7fdfda3613619af40cf",
                    type: "button",
                    "aria-label": "End of modal"
                  })]
                })
              })]
            })
          })), [t, S, u])
        },
        m = "modal-context",
        f = [null, () => null],
        p = window?.[m] ?? (window[m] = (0, o.createContext)(f)),
        u = () => (0, o.useContext)(p),
        b = e => {
          let {
            children: a
          } = e;
          const [t, d] = (0, o.useState)(f), n = (0, o.useMemo)((() => t?.content ? (0, l.jsx)(c, {
            modal: t
          }) : null), [t]);
          return (0, l.jsx)(p.Provider, {
            value: [n, d],
            children: a
          })
        }
    },
    18784: (e, a, t) => {
      t.r(a);
      var o = t(82708),
        d = t(9860),
        n = t(98e3),
        s = t(33052),
        r = t(45792),
        i = t(77715),
        l = t(41272),
        c = t(75016),
        m = t(42708),
        f = (t(31389), t(42664), t(34904), t(46368), t(58256), t(64932), t(87440), t(53128), t(18932), t(19520), t(46644), t(69224), t(58432), t(13144), t(77571), t(84084), t(86096), t(54012), t(38592), t(64508)),
        p = t(46188),
        u = t(95240);
      const b = (0, s.makeVar)(null),
        g = window?.env?.graphEnv ?? "prod",
        {
          pingBearer: y
        } = (0, r.getScConfigForOrigin)(),
        h = JSON.parse('{"meta":{"url":"/reddeadredemption","title":"Red Dead Redemption","description":"Red Dead Redemption 2023","keywords":null,"image":null,"uploads_directory":"/tina-modules/reddeadredemption"},"content":[{"key":"key_91b20a4e-0b42-4dac-8b14-55f392e345c7","_template":"gen9.TinaWrapper","content":[{"key":"key_9813d514-ebbd-4b10-9fe4-a72a91ddeb5b","_template":"legacy.LegacyPageTemplate","hero":{"name":"Hero","type":"legacy","animated":true,"content":{"brands":[{"brand":"rdr1"}],"title":"Test Title","description":"This is a fake body text for testing.","legalText":"Here is some tiny legal text.","ctaGroup":{"expandingButton":{"label":"Subscribe","buttons":[{"key":"key_8c55c91a-e984-4fc8-88e8-ffe3d04d2a4d","platform":"questionmark","href":"https://rockstargames.com","text":"Some text to see how this object renders"}]},"ctas":{"buttons":[{"label":"Hello!","href":"https://rockstargames.com"}]}}},"images":{"background":{"mobile":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810109636,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Background-Mobile-ImportExport-B2R01-jpg","hashed_filename":"c88f06dfe8ababc9233d1e13ba07bf502b6833a5.jpg","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/c88f06dfe8ababc9233d1e13ba07bf502b6833a5.jpg","full_src":"/tina-uploads/tina-modules/reddeadredemption/c88f06dfe8ababc9233d1e13ba07bf502b6833a5.jpg","prod":false,"created_by":794},"desktop":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810180189,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Background-Desktop-ImportExport-B2R01-jpg","hashed_filename":"3260edfc5529d512178571a323262d237f0412d5.jpg","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/3260edfc5529d512178571a323262d237f0412d5.jpg","full_src":"/tina-uploads/tina-modules/reddeadredemption/3260edfc5529d512178571a323262d237f0412d5.jpg","prod":false,"created_by":794}},"foreground":{"mobile":{"image":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810324145,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Foreground-Mobile-ImportExport-B2R01-png","hashed_filename":"40e5e5dd3a4acf7a0442073561c3b22926e12873.png","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/40e5e5dd3a4acf7a0442073561c3b22926e12873.png","full_src":"/tina-uploads/tina-modules/reddeadredemption/40e5e5dd3a4acf7a0442073561c3b22926e12873.png","prod":false,"created_by":794}},"desktop":{"image":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810265634,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Foreground-Desktop-ImprtExport-B2R01-png","hashed_filename":"73e2fc5d85210a8968f981c1b0a37d644aabbbeb.png","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/73e2fc5d85210a8968f981c1b0a37d644aabbbeb.png","full_src":"/tina-uploads/tina-modules/reddeadredemption/73e2fc5d85210a8968f981c1b0a37d644aabbbeb.png","prod":false,"created_by":794}}}}}}]}]}').content[0].content[0],
        _ = () => {
          const [e] = (0, n.i)(), a = (0, s.useBase)(), t = (0, r.useLocale)();
          return (0, u.jsx)(r.ResizeProvider, {
            children: (0, u.jsx)(i.ScrollProvider, {
              children: (0, u.jsx)(o.BrowserRouter, {
                basename: a,
                children: (0, u.jsx)(m.GtmProvider, {
                  children: (0, u.jsx)(l.IntlProvider, {
                    locales: c.intlMessages,
                    lang: t,
                    children: (0, u.jsxs)(d.ScrollTracker, {
                      threshold: [25, 50, 75, 90, 100],
                      children: [e, (0, u.jsx)(p.c, {
                        ...h
                      })]
                    })
                  })
                })
              })
            })
          })
        },
        k = (0, s.withReactiveState)((() => (0, u.jsx)(n.j, {
          children: (0, u.jsx)(_, {})
        })), {
          state: b
        }),
        v = (0, s.withRockstarGraph)(k, {
          env: g,
          token: (0, s.makeVar)(null),
          tokenPing: y,
          tokenPingExpires: (0, s.makeVar)(null),
          typePolicies: {}
        }),
        w = document.createElement("div");
      document.body.appendChild(w), (0, f.C)(w).render((0, u.jsx)(v, {}))
    }
  }
]);