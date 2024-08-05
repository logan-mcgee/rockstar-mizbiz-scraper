! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "3930e8a1-7256-46a8-9be4-ba6aa9c2295d", e._sentryDebugIdIdentifier = "sentry-dbid-3930e8a1-7256-46a8-9be4-ba6aa9c2295d")
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
  [235], {
    93665: (e, a, t) => {
      t.d(a, {
        Z: () => b,
        h: () => u
      });
      var n = t(71403),
        o = t(15688),
        d = t(80791),
        s = t(74401),
        r = t(40207),
        l = t(89779);
      var i = t(46632);
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
            activeId: _,
            theme: k,
            title: w,
            gtm: v = {},
            aspectRatio: x = "default",
            cardDimensions: j
          } = a, {
            left: E,
            top: S
          } = p, [D, R] = (0, n.useState)(-1), [T, C] = (0, n.useState)(h?.length || 0), {
            track: N
          } = (0, r.useGtmTrack)(), M = null !== h && (h?.length || 0) > 1 && ("flag_bg" === k || "fob" === j?.size), [I, P] = (0, l.useSearchParams)(), [H, Y] = (0, n.useState)(!1), [B, L] = (0, n.useState)(!1), [U, G] = (0, n.useState)(), A = () => {
            const e = D > -1 ? D - 1 : 0;
            R(e), L(e <= 0), Y(e >= T - 1), N({
              event: "modal_previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: w,
              position: D
            })
          }, z = () => {
            const e = D > -1 ? D + 1 : 0;
            R(e), L(e <= 0), Y(e >= T - 1), N({
              event: "modal_next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              element_placement: w,
              position: D
            })
          };
          (0, n.useEffect)((() => {
            C(h?.length || 0)
          }), [h?.length]), (0, n.useEffect)((() => {
            null !== D && null !== h && h && D < h.length && D > -1 && P({
              info: h[D].toString()
            })
          }), [D, h]), (0, n.useEffect)((() => {
            const e = h?.indexOf(_);
            e && R(e)
          }), [_, h]), (0, n.useEffect)((() => {
            if (null !== h && -1 === D && h && h.length > 0) {
              const e = I.get("info");
              h?.forEach(((a, t) => {
                a === e && (R(t), L(t <= 0), Y(t >= T - 1))
              }))
            }
          }), [h, D]);
          const [K] = (0, n.useState)({
            y: S,
            x: E,
            top: 0,
            left: 0,
            width: g,
            height: m,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: M ? "0" : ""
          }), O = {
            opacity: 1
          }, q = (0, n.useRef)(null), F = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, V = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [Z] = (0, n.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: M ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
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
          }), [$, J] = (0, n.useState)({
            initial: K,
            shown: Z
          });
          (0, n.useEffect)((() => {
            J({
              initial: K,
              shown: Z
            })
          }), [K, Z]), (0, n.useEffect)((() => {
            const e = e => {
              "function" == typeof f && "Escape" === e.key && (f(), N({
                event: "modal_close",
                element_placement: w,
                ...v
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const W = () => {
              "function" == typeof f && (f(), N({
                event: "modal_close",
                element_placement: w,
                ...v
              }))
            },
            Q = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let t = 0; t < e.children.length; t++) {
                const n = e.children[t];
                if (n.scrollHeight > n.clientHeight) return n;
                const o = Q(n, a - 1);
                if (o) return o
              }
              return null
            },
            X = e => {
              if (ae?.current?.children) {
                let a = null;
                const t = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = (e => {
                      let a = null;
                      return U?.queried ? a = U.element : (a = Q(e, 2), G({
                        queried: !0,
                        element: a
                      })), a
                    })(ae.current), e.preventDefault(), a && (a.scrollTop += t)
                }
              }
            },
            ee = y ? 0 : 1,
            ae = (0, n.useRef)(null),
            te = (0, i.jsx)(d.motion.button, {
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
                W()
              },
              onKeyDown: X,
              onKeyUp: X
            });
          let ne = null;
          return ne = o.Ay, (0, n.useMemo)((() => (0, i.jsx)("div", {
            className: "rockstargames-sites-legacye9a8e066d320a81b61aa2c636fa0a5b5",
            "data-show-nav": M,
            "data-aspect-ratio": x,
            children: (0, i.jsx)(ne, {
              children: (0, i.jsxs)("div", {
                children: [(0, i.jsx)(d.motion.div, {
                  className: "rockstargames-sites-legacyc8632c630878ad16e637fe2b8db2f02c",
                  initial: {
                    opacity: 0
                  },
                  animate: O,
                  transition: F,
                  onClick: () => W()
                }), M && (0, i.jsxs)("div", {
                  className: "rockstargames-sites-legacyeeecb8dc782f382fc9d32d03ecc1a2a5",
                  children: [(0, i.jsxs)(d.motion.div, {
                    className: "rockstargames-sites-legacyb6e3406cb9a52fc7583d5c74681e88bc",
                    initial: {
                      opacity: 0
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: V,
                    children: [(0, i.jsx)("button", {
                      type: "button",
                      "aria-label": "Previous",
                      onClick: A,
                      disabled: B,
                      onKeyDown: X,
                      onKeyUp: X
                    }), (0, i.jsxs)("div", {
                      className: "rockstargames-sites-legacyff3c13d9dc1de9af609a1f99b4c47039",
                      children: [" ", D + 1, (0, i.jsx)("div", {
                        className: "rockstargames-sites-legacycd9c6033ad00894881fa5451acfe15da"
                      }), h?.length, " "]
                    }), (0, i.jsx)("button", {
                      type: "button",
                      "aria-label": "Next",
                      onClick: z,
                      disabled: H,
                      onKeyDown: X,
                      onKeyUp: X,
                      "data-autofocus": !0
                    })]
                  }), te]
                }), (0, i.jsx)(d.motion.div, {
                  className: "rockstargames-sites-legacyfab99cc2e2ca2e2a2158f9d41e764558",
                  ref: q,
                  initial: "initial",
                  animate: "shown",
                  variants: $,
                  transition: F,
                  style: u,
                  children: (0, i.jsxs)(d.motion.div, {
                    className: (0, s.classList)("rockstargames-sites-legacyb6aa5ebf680af5d95d0e9c76ac36ed82", c),
                    children: [!M && te, (0, i.jsx)(d.motion.div, {
                      className: (0, s.classList)("rockstargames-sites-legacyd901631c0b9d817396c8352c027a2a0d", b),
                      initial: {
                        opacity: ee
                      },
                      animate: {
                        opacity: 1
                      },
                      transition: V,
                      ref: ae,
                      children: t
                    }), (0, i.jsx)("button", {
                      className: "rockstargames-sites-legacyf1ecf74036b2b7fdfda3613619af40cf",
                      type: "button",
                      "aria-label": "End of modal"
                    })]
                  })
                })]
              })
            })
          })), [t, D, u])
        },
        m = "modal-context",
        f = [null, () => null],
        p = window?.[m] ?? (window[m] = (0, n.createContext)(f)),
        u = () => (0, n.useContext)(p),
        b = e => {
          let {
            children: a
          } = e;
          const [t, o] = (0, n.useState)(f), d = (0, n.useMemo)((() => t?.content ? (0, i.jsx)(c, {
            modal: t
          }) : null), [t]);
          return (0, i.jsx)(p.Provider, {
            value: [d, o],
            children: a
          })
        }
    },
    81235: (e, a, t) => {
      t.r(a);
      var n = t(25076),
        o = t(71403),
        d = t(40207);
      const s = (0, o.forwardRef)(((e, a) => {
        const {
          threshold: t,
          callback: n,
          children: s,
          requireUser: r
        } = e, {
          track: l
        } = (0, d.useGtmTrack)(r), [i, c] = (0, o.useState)(a?.current);
        return (0, o.useEffect)((() => {
          a?.current && c(a.current)
        }), [a]), ((e, a, t) => {
          const [n, d] = (0, o.useState)({
            scrollDepths: e,
            scrollY: 0
          }), {
            scrollDepths: s,
            scrollY: r
          } = n;
          (0, o.useEffect)((() => {
            "undefined" != typeof window && 0 !== window.pageYOffset && d((e => ({
              ...e,
              scrollY: window.pageYOffset
            })))
          }), []), (0, o.useEffect)((() => {
            d({
              scrollDepths: e,
              scrollY: 0
            })
          }), [window.location.pathname]);
          const l = (0, o.useCallback)((() => {
            const e = document.documentElement,
              o = document.body,
              r = t?.scrollTop || e.scrollTop || o.scrollTop,
              i = t?.scrollHeight || e.scrollHeight || o.scrollHeight,
              {
                clientHeight: c
              } = e,
              m = r / (i - c) * 100;
            if (s) {
              const e = Math.min(...s, i);
              if (m >= e) {
                const n = s.filter((a => a !== e));
                0 === n.length && (t ?? window).removeEventListener("scroll", l), a && a({
                  scrollY: e,
                  scrollPercent: m,
                  remainingDepths: n
                }), d({
                  scrollY: e,
                  scrollDepths: n
                })
              }
            } else d({
              ...n,
              scrollY: m
            })
          }), [s, t, a]);
          (0, o.useEffect)((() => {
            if ("undefined" == typeof window) return;
            const e = t ?? window;
            return e.addEventListener("scroll", l), () => e.removeEventListener("scroll", l)
          }), [l])
        })(t, (e => {
          let {
            scrollY: a
          } = e;
          l({
            event: "page_scroll",
            scroll_depth: a
          }), "function" == typeof n && n(a)
        }), i), s
      }));
      s.displayName = "ScrollTracker";
      const r = s;
      var l = t(93665),
        i = t(58407),
        c = t(42756),
        m = t(42158),
        f = t(96717),
        p = t(63902),
        u = t(52757),
        b = (t(83142), t(80594), t(91045), t(18118), t(813), t(92306), t(74035), t(21535), t(43474), t(88863), t(17240), t(76277), t(95911), t(88372), t(20442), t(26266), t(33719), t(95938), t(45669), t(31190)),
        g = t(92710),
        y = t(46632);
      const h = (0, i.makeVar)(null),
        _ = window?.env?.graphEnv ?? "prod",
        {
          pingBearer: k
        } = (0, c.getScConfigForOrigin)(),
        w = JSON.parse('{"meta":{"url":"/reddeadredemption","title":"Red Dead Redemption","description":"Red Dead Redemption 2023","keywords":null,"image":null,"uploads_directory":"/tina-modules/reddeadredemption"},"content":[{"key":"key_91b20a4e-0b42-4dac-8b14-55f392e345c7","_template":"gen9.TinaWrapper","content":[{"key":"key_9813d514-ebbd-4b10-9fe4-a72a91ddeb5b","_template":"legacy.LegacyPageTemplate","hero":{"name":"Hero","type":"legacy","animated":true,"content":{"brands":[{"brand":"rdr1"}],"title":"Test Title","description":"This is a fake body text for testing.","legalText":"Here is some tiny legal text.","ctaGroup":{"expandingButton":{"label":"Subscribe","buttons":[{"key":"key_8c55c91a-e984-4fc8-88e8-ffe3d04d2a4d","platform":"questionmark","href":"https://rockstargames.com","text":"Some text to see how this object renders"}]},"ctas":{"buttons":[{"label":"Hello!","href":"https://rockstargames.com"}]}}},"images":{"background":{"mobile":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810109636,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Background-Mobile-ImportExport-B2R01-jpg","hashed_filename":"c88f06dfe8ababc9233d1e13ba07bf502b6833a5.jpg","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/c88f06dfe8ababc9233d1e13ba07bf502b6833a5.jpg","full_src":"/tina-uploads/tina-modules/reddeadredemption/c88f06dfe8ababc9233d1e13ba07bf502b6833a5.jpg","prod":false,"created_by":794},"desktop":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810180189,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Background-Desktop-ImportExport-B2R01-jpg","hashed_filename":"3260edfc5529d512178571a323262d237f0412d5.jpg","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/3260edfc5529d512178571a323262d237f0412d5.jpg","full_src":"/tina-uploads/tina-modules/reddeadredemption/3260edfc5529d512178571a323262d237f0412d5.jpg","prod":false,"created_by":794}},"foreground":{"mobile":{"image":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810324145,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Foreground-Mobile-ImportExport-B2R01-png","hashed_filename":"40e5e5dd3a4acf7a0442073561c3b22926e12873.png","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/40e5e5dd3a4acf7a0442073561c3b22926e12873.png","full_src":"/tina-uploads/tina-modules/reddeadredemption/40e5e5dd3a4acf7a0442073561c3b22926e12873.png","prod":false,"created_by":794}},"desktop":{"image":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810265634,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Foreground-Desktop-ImprtExport-B2R01-png","hashed_filename":"73e2fc5d85210a8968f981c1b0a37d644aabbbeb.png","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/73e2fc5d85210a8968f981c1b0a37d644aabbbeb.png","full_src":"/tina-uploads/tina-modules/reddeadredemption/73e2fc5d85210a8968f981c1b0a37d644aabbbeb.png","prod":false,"created_by":794}}}}}}]}]}').content[0].content[0],
        v = () => {
          const [e] = (0, l.h)(), a = (0, i.useBase)(), t = (0, c.useLocale)();
          return (0, y.jsx)(c.ResizeProvider, {
            children: (0, y.jsx)(m.ScrollProvider, {
              children: (0, y.jsx)(n.BrowserRouter, {
                basename: a,
                children: (0, y.jsx)(u.GtmProvider, {
                  children: (0, y.jsx)(f.IntlProvider, {
                    locales: p.intlMessages,
                    lang: t,
                    children: (0, y.jsxs)(r, {
                      threshold: [25, 50, 75, 90, 100],
                      children: [e, (0, y.jsx)(g.A, {
                        ...w
                      })]
                    })
                  })
                })
              })
            })
          })
        },
        x = (0, i.withReactiveState)((() => (0, y.jsx)(l.Z, {
          children: (0, y.jsx)(v, {})
        })), {
          state: h
        }),
        j = (0, i.withRockstarGraph)(x, {
          env: _,
          token: (0, i.makeVar)(null),
          tokenPing: k,
          tokenPingExpires: (0, i.makeVar)(null),
          typePolicies: {}
        }),
        E = document.createElement("div");
      document.body.appendChild(E), (0, b.H)(E).render((0, y.jsx)(j, {}))
    }
  }
]);