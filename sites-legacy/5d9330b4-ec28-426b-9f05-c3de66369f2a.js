! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      a = (new Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5d9330b4-ec28-426b-9f05-c3de66369f2a", e._sentryDebugIdIdentifier = "sentry-dbid-5d9330b4-ec28-426b-9f05-c3de66369f2a")
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
      var d = t(51664),
        n = t(43924),
        o = t(22560),
        s = t(1740),
        i = t(42836),
        r = t(57013);
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
            cardIds: _,
            activeId: h,
            theme: k,
            title: v,
            gtm: w = {},
            aspectRatio: x = "default",
            cardDimensions: j
          } = a, {
            left: E,
            top: S
          } = p, [R, D] = (0, d.useState)(-1), [C, N] = (0, d.useState)(_?.length || 0), {
            track: T
          } = (0, i.useGtmTrack)(), M = null !== _ && (_?.length || 0) > 1 && ("flag_bg" === k || "fob" === j?.size), [I, P] = (0, r.useSearchParams)(), [B, U] = (0, d.useState)(!1), [G, L] = (0, d.useState)(!1), [z, H] = (0, d.useState)(), K = () => {
            const e = R > -1 ? R - 1 : 0;
            D(e), L(e <= 0), U(e >= C - 1), T({
              event: "modal_previous",
              event_category: "modal",
              event_action: "previous",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              event_label: v ?? void 0,
              element_placement: v ?? void 0,
              position: R
            })
          }, A = () => {
            const e = R > -1 ? R + 1 : 0;
            D(e), L(e <= 0), U(e >= C - 1), T({
              event: "modal_next",
              event_category: "modal",
              event_action: "next",
              card_name: `card-${e+1}`,
              card_id: e + 1,
              event_label: v ?? void 0,
              element_placement: v ?? void 0,
              position: R
            })
          };
          (0, d.useEffect)((() => {
            N(_?.length || 0)
          }), [_?.length]), (0, d.useEffect)((() => {
            null !== R && null !== _ && _ && R < _.length && R > -1 && P({
              info: _[R].toString()
            })
          }), [R, _]), (0, d.useEffect)((() => {
            const e = _?.indexOf(h);
            e && D(e)
          }), [h, _]), (0, d.useEffect)((() => {
            if (null !== _ && -1 === R && _ && _.length > 0) {
              const e = I.get("info");
              _?.forEach(((a, t) => {
                a === e && (D(t), L(t <= 0), U(t >= C - 1))
              }))
            }
          }), [_, R]);
          const [q] = (0, d.useState)({
            y: S,
            x: E,
            top: 0,
            left: 0,
            width: g,
            height: m,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: M ? "0" : ""
          }), F = {
            opacity: 1
          }, O = (0, d.useRef)(null), V = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, $ = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [J] = (0, d.useState)({
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
              x: V,
              y: V,
              top: V,
              left: V,
              width: V,
              height: V,
              border: V,
              background: {
                delay: .3
              }
            }
          }), [W, Y] = (0, d.useState)({
            initial: q,
            shown: J
          });
          (0, d.useEffect)((() => {
            Y({
              initial: q,
              shown: J
            })
          }), [q, J]), (0, d.useEffect)((() => {
            const e = e => {
              "function" == typeof f && "Escape" === e.key && (f(), T({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: v ?? void 0,
                element_placement: v ?? void 0,
                ...w
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const Q = () => {
              "function" == typeof f && (f(), T({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: v ?? void 0,
                element_placement: v ?? void 0,
                ...w
              }))
            },
            X = (e, a) => {
              if (!e || !e.children || a < 0) return null;
              for (let t = 0; t < e.children.length; t++) {
                const d = e.children[t];
                if (d.scrollHeight > d.clientHeight) return d;
                const n = X(d, a - 1);
                if (n) return n
              }
              return null
            },
            Z = e => {
              if (ae?.current?.children) {
                let a = null;
                const t = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    a = (e => {
                      let a = null;
                      return z?.queried ? a = z.element : (a = X(e, 2), H({
                        queried: !0,
                        element: a
                      })), a
                    })(ae.current), e.preventDefault(), a && (a.scrollTop += t)
                }
              }
            },
            ee = y ? 0 : 1,
            ae = (0, d.useRef)(null),
            te = (0, l.jsx)(o.motion.button, {
              className: "rockstargames-sites-legacyb0326cc98df99ada0e0f6821f0f0a6ad",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: $,
              onClick: () => {
                Q()
              },
              onKeyDown: Z,
              onKeyUp: Z
            });
          return (0, d.useMemo)((() => (0, l.jsx)("div", {
            className: "rockstargames-sites-legacye9a8e066d320a81b61aa2c636fa0a5b5",
            "data-show-nav": M,
            "data-aspect-ratio": x,
            children: (0, l.jsxs)(n.cp, {
              children: [(0, l.jsx)(o.motion.div, {
                className: "rockstargames-sites-legacyc8632c630878ad16e637fe2b8db2f02c",
                initial: {
                  opacity: 0
                },
                animate: F,
                transition: V,
                onClick: () => Q()
              }), M && (0, l.jsxs)("div", {
                className: "rockstargames-sites-legacyeeecb8dc782f382fc9d32d03ecc1a2a5",
                children: [(0, l.jsxs)(o.motion.div, {
                  className: "rockstargames-sites-legacyb6e3406cb9a52fc7583d5c74681e88bc",
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: $,
                  children: [(0, l.jsx)("button", {
                    type: "button",
                    "aria-label": "Previous",
                    onClick: K,
                    disabled: G,
                    onKeyDown: Z,
                    onKeyUp: Z
                  }), (0, l.jsxs)("div", {
                    className: "rockstargames-sites-legacyff3c13d9dc1de9af609a1f99b4c47039",
                    children: [" ", R + 1, (0, l.jsx)("div", {
                      className: "rockstargames-sites-legacycd9c6033ad00894881fa5451acfe15da"
                    }), _?.length, " "]
                  }), (0, l.jsx)("button", {
                    type: "button",
                    "aria-label": "Next",
                    onClick: A,
                    disabled: B,
                    onKeyDown: Z,
                    onKeyUp: Z,
                    "data-autofocus": !0
                  })]
                }), te]
              }), (0, l.jsx)(o.motion.div, {
                className: "rockstargames-sites-legacyfab99cc2e2ca2e2a2158f9d41e764558",
                ref: O,
                initial: "initial",
                animate: "shown",
                variants: W,
                transition: V,
                style: u,
                children: (0, l.jsxs)(o.motion.div, {
                  className: (0, s.classList)("rockstargames-sites-legacyb6aa5ebf680af5d95d0e9c76ac36ed82", c),
                  children: [!M && te, (0, l.jsx)(o.motion.div, {
                    className: (0, s.classList)("rockstargames-sites-legacyd901631c0b9d817396c8352c027a2a0d", b),
                    initial: {
                      opacity: ee
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: $,
                    ref: ae,
                    children: t
                  }), (0, l.jsx)("button", {
                    className: "rockstargames-sites-legacyf1ecf74036b2b7fdfda3613619af40cf",
                    type: "button",
                    "aria-label": "End of modal"
                  })]
                })
              })]
            })
          })), [t, R, u])
        },
        m = "modal-context",
        f = [null, () => null],
        p = window?.[m] ?? (window[m] = (0, d.createContext)(f)),
        u = () => (0, d.useContext)(p),
        b = e => {
          let {
            children: a
          } = e;
          const [t, n] = (0, d.useState)(f), o = (0, d.useMemo)((() => t?.content ? (0, l.jsx)(c, {
            modal: t
          }) : null), [t]);
          return (0, l.jsx)(p.Provider, {
            value: [o, n],
            children: a
          })
        }
    },
    18784: (e, a, t) => {
      t.r(a);
      var d = t(82708),
        n = t(9860),
        o = t(98e3),
        s = t(33052),
        i = t(45792),
        r = t(77715),
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
        } = (0, i.getScConfigForOrigin)(),
        _ = JSON.parse('{"meta":{"url":"/reddeadredemption","title":"Red Dead Redemption","description":"Red Dead Redemption 2023","keywords":null,"image":null,"uploads_directory":"/tina-modules/reddeadredemption"},"content":[{"key":"key_91b20a4e-0b42-4dac-8b14-55f392e345c7","_template":"gen9.TinaWrapper","content":[{"key":"key_9813d514-ebbd-4b10-9fe4-a72a91ddeb5b","_template":"legacy.LegacyPageTemplate","hero":{"name":"Hero","type":"legacy","animated":true,"content":{"brands":[{"brand":"rdr1"}],"title":"Test Title","description":"This is a fake body text for testing.","legalText":"Here is some tiny legal text.","ctaGroup":{"expandingButton":{"label":"Subscribe","buttons":[{"key":"key_8c55c91a-e984-4fc8-88e8-ffe3d04d2a4d","platform":"questionmark","href":"https://rockstargames.com","text":"Some text to see how this object renders"}]},"ctas":{"buttons":[{"label":"Hello!","href":"https://rockstargames.com"}]}}},"images":{"background":{"mobile":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810109636,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Background-Mobile-ImportExport-B2R01-jpg","hashed_filename":"c88f06dfe8ababc9233d1e13ba07bf502b6833a5.jpg","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/c88f06dfe8ababc9233d1e13ba07bf502b6833a5.jpg","full_src":"/tina-uploads/tina-modules/reddeadredemption/c88f06dfe8ababc9233d1e13ba07bf502b6833a5.jpg","prod":false,"created_by":794},"desktop":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810180189,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Background-Desktop-ImportExport-B2R01-jpg","hashed_filename":"3260edfc5529d512178571a323262d237f0412d5.jpg","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/3260edfc5529d512178571a323262d237f0412d5.jpg","full_src":"/tina-uploads/tina-modules/reddeadredemption/3260edfc5529d512178571a323262d237f0412d5.jpg","prod":false,"created_by":794}},"foreground":{"mobile":{"image":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810324145,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Foreground-Mobile-ImportExport-B2R01-png","hashed_filename":"40e5e5dd3a4acf7a0442073561c3b22926e12873.png","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/40e5e5dd3a4acf7a0442073561c3b22926e12873.png","full_src":"/tina-uploads/tina-modules/reddeadredemption/40e5e5dd3a4acf7a0442073561c3b22926e12873.png","prod":false,"created_by":794}},"desktop":{"image":{"__typename":"RockstarGames_DotcomCore_Model_Entity_TinaUpload_o","id":16878810265634,"type":"file","directory":"/tina-modules/reddeadredemption","filename":"Foreground-Desktop-ImprtExport-B2R01-png","hashed_filename":"73e2fc5d85210a8968f981c1b0a37d644aabbbeb.png","previewSrc":"https://media-dev-rockstargames-com.akamaized.net/tina-uploads/tina-modules/reddeadredemption/73e2fc5d85210a8968f981c1b0a37d644aabbbeb.png","full_src":"/tina-uploads/tina-modules/reddeadredemption/73e2fc5d85210a8968f981c1b0a37d644aabbbeb.png","prod":false,"created_by":794}}}}}}]}]}').content[0].content[0],
        h = () => {
          const [e] = (0, o.i)(), a = (0, s.useBase)(), t = (0, i.useLocale)();
          return (0, u.jsx)(i.ResizeProvider, {
            children: (0, u.jsx)(r.ScrollProvider, {
              children: (0, u.jsx)(d.BrowserRouter, {
                basename: a,
                children: (0, u.jsx)(m.GtmProvider, {
                  children: (0, u.jsx)(l.IntlProvider, {
                    locales: c.intlMessages,
                    lang: t,
                    children: (0, u.jsxs)(n.ScrollTracker, {
                      threshold: [25, 50, 75, 90, 100],
                      children: [e, (0, u.jsx)(p.c, {
                        ..._
                      })]
                    })
                  })
                })
              })
            })
          })
        },
        k = (0, s.withReactiveState)((() => (0, u.jsx)(o.j, {
          children: (0, u.jsx)(h, {})
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