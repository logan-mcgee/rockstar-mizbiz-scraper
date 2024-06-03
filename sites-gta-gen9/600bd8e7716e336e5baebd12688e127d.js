! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e4648c63-0112-408c-a72e-611f1081f138", e._sentryDebugIdIdentifier = "sentry-dbid-e4648c63-0112-408c-a72e-611f1081f138")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta-gen9",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [352], {
    98e3: (e, t, a) => {
      "use strict";
      a.d(t, {
        j: () => p,
        i: () => f
      });
      var s = a(51664),
        n = a(43924),
        i = a(49696),
        r = a(1740),
        c = a(42836),
        o = a(57013);
      var l = a(95240);
      const d = e => {
          let {
            modal: t
          } = e;
          const {
            content: a,
            className: d,
            height: m,
            onClose: u,
            rect: g = {
              left: 0,
              top: 0
            },
            contentStyle: f = {},
            contentClassName: p = "",
            width: b,
            fadeIn: v = !0,
            cardIds: h,
            theme: k,
            title: x,
            gtm: y = {},
            aspectRatio: _ = "default",
            cardDimensions: N
          } = t, {
            left: S,
            top: j
          } = g, [w, T] = (0, s.useState)(-1), {
            track: C
          } = (0, c.useGtmTrack)(), E = null !== h && (h?.length || 0) > 1 && ("flag_bg" === k || "fob" === N?.size), [M, P] = (0, o.useSearchParams)(), [L, I] = (0, s.useState)(!1), [$, D] = (0, s.useState)(!1), [B, O] = (0, s.useState)(), H = () => {
            const e = w > -1 ? w - 1 : 0;
            T(e), D(e <= 0), I(e >= (h?.length || 0) - 1), C({
              event: "modal_previous",
              event_category: "modal",
              event_action: "previous",
              event_label: "",
              position: w
            })
          }, G = () => {
            const e = w > -1 ? w + 1 : 0;
            T(e), D(e <= 0), I(e >= (h?.length || 0) - 1), C({
              event: "modal_next",
              event_category: "modal",
              event_action: "next",
              event_label: "",
              position: w
            })
          };
          (0, s.useEffect)((() => {
            null !== w && null !== h && h && w < h.length && w > -1 && P({
              info: h[w].toString()
            })
          }), [w, h]), (0, s.useEffect)((() => {
            if (null !== h && -1 === w && h && h.length > 0) {
              const e = M.get("info");
              h?.forEach(((t, a) => {
                t === e && (T(a), D(a <= 0), I(a >= (h?.length || 0) - 1))
              }))
            }
          }), [h, w]);
          const [z] = (0, s.useState)({
            y: j,
            x: S,
            top: 0,
            left: 0,
            width: b,
            height: m,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: E ? "0" : ""
          }), A = {
            opacity: 1
          }, V = (0, s.useRef)(null), F = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, R = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [W] = (0, s.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: E ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
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
          }), [q, U] = (0, s.useState)({
            initial: z,
            shown: W
          });
          (0, s.useEffect)((() => {
            U({
              initial: z,
              shown: W
            })
          }), [z, W]), (0, s.useEffect)((() => {
            const e = e => {
              "function" == typeof u && "Escape" === e.key && (u(), C({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: x ?? void 0,
                ...y
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const K = () => {
              "function" == typeof u && (u(), C({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: x ?? void 0,
                ...y
              }))
            },
            Q = (e, t) => {
              if (!e || !e.children || t < 0) return null;
              for (let a = 0; a < e.children.length; a++) {
                const s = e.children[a];
                if (s.scrollHeight > s.clientHeight) return s;
                const n = Q(s, t - 1);
                if (n) return n
              }
              return null
            },
            Y = e => {
              if (J?.current?.children) {
                let t = null;
                const a = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    t = (e => {
                      let t = null;
                      return B?.queried ? t = B.element : (t = Q(e, 2), O({
                        queried: !0,
                        element: t
                      })), t
                    })(J.current), e.preventDefault(), t && (t.scrollTop += a)
                }
              }
            },
            X = v ? 0 : 1,
            J = (0, s.useRef)(null),
            Z = (0, l.jsx)(i.motion.button, {
              className: "rockstargames-sites-gta-gen9b0326cc98df99ada0e0f6821f0f0a6ad",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: R,
              onClick: () => {
                K()
              },
              onKeyDown: Y,
              onKeyUp: Y
            });
          return (0, s.useMemo)((() => (0, l.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e9a8e066d320a81b61aa2c636fa0a5b5",
            "data-show-nav": E,
            "data-aspect-ratio": _,
            children: (0, l.jsxs)(n.cp, {
              children: [(0, l.jsx)(i.motion.div, {
                className: "rockstargames-sites-gta-gen9c8632c630878ad16e637fe2b8db2f02c",
                initial: {
                  opacity: 0
                },
                animate: A,
                transition: F,
                onClick: () => K()
              }), E && (0, l.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9eeecb8dc782f382fc9d32d03ecc1a2a5",
                children: [(0, l.jsxs)(i.motion.div, {
                  className: "rockstargames-sites-gta-gen9b6e3406cb9a52fc7583d5c74681e88bc",
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: R,
                  children: [(0, l.jsx)("button", {
                    type: "button",
                    "aria-label": "Previous",
                    onClick: H,
                    disabled: $,
                    onKeyDown: Y,
                    onKeyUp: Y
                  }), (0, l.jsxs)("div", {
                    className: "rockstargames-sites-gta-gen9ff3c13d9dc1de9af609a1f99b4c47039",
                    children: [" ", w + 1, (0, l.jsx)("div", {
                      className: "rockstargames-sites-gta-gen9cd9c6033ad00894881fa5451acfe15da"
                    }), h?.length, " "]
                  }), (0, l.jsx)("button", {
                    type: "button",
                    "aria-label": "Next",
                    onClick: G,
                    disabled: L,
                    onKeyDown: Y,
                    onKeyUp: Y
                  })]
                }), Z]
              }), (0, l.jsx)(i.motion.div, {
                className: "rockstargames-sites-gta-gen9fab99cc2e2ca2e2a2158f9d41e764558",
                ref: V,
                initial: "initial",
                animate: "shown",
                variants: q,
                transition: F,
                style: f,
                children: (0, l.jsxs)(i.motion.div, {
                  className: (0, r.classList)("rockstargames-sites-gta-gen9b6aa5ebf680af5d95d0e9c76ac36ed82", d),
                  children: [!E && Z, (0, l.jsx)(i.motion.div, {
                    className: (0, r.classList)("rockstargames-sites-gta-gen9d901631c0b9d817396c8352c027a2a0d", p),
                    initial: {
                      opacity: X
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: R,
                    ref: J,
                    children: a
                  }), (0, l.jsx)("button", {
                    className: "rockstargames-sites-gta-gen9f1ecf74036b2b7fdfda3613619af40cf",
                    type: "button",
                    "aria-label": "End of modal"
                  })]
                })
              })]
            })
          })), [a, w, f])
        },
        m = "modal-context",
        u = [null, () => null],
        g = window?.[m] ?? (window[m] = (0, s.createContext)(u)),
        f = () => (0, s.useContext)(g),
        p = e => {
          let {
            children: t
          } = e;
          const [a, n] = (0, s.useState)(u), i = (0, s.useMemo)((() => a?.content ? (0, l.jsx)(d, {
            modal: a
          }) : null), [a]);
          return (0, l.jsx)(g.Provider, {
            value: [i, n],
            children: t
          })
        }
    },
    47572: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => n
      });
      var s = a(95240);
      const n = e => {
        let {
          brands: t = []
        } = e;
        return t.length ? (0, s.jsx)("div", {
          className: "rockstargames-sites-gta-gen9c971935f2d1b31df55e6271635ef922a",
          children: t.map(((e, t) => {
            let {
              brand: a
            } = e;
            return (0, s.jsx)("div", {
              className: "rockstargames-sites-gta-gen9c84499c22a2583d233091c60456f0287",
              "data-brand": a
            }, t)
          }))
        }) : null
      }
    },
    31252: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => o
      });
      var s = a(57013),
        n = a(60568),
        i = a(95240);
      const r = e => {
          let {
            children: t,
            className: a,
            onClick: s,
            style: n,
            innerRef: r = null
          } = e;
          return (0, i.jsx)("button", {
            className: a,
            onClick: s,
            style: n,
            type: "button",
            ref: r,
            children: t
          })
        },
        c = e => {
          let {
            children: t,
            className: a,
            onClick: n,
            style: r,
            to: c
          } = e;
          return (0, i.jsx)(s.NavLink, {
            className: a,
            onClick: n,
            style: r,
            to: c,
            children: t
          })
        },
        o = e => {
          let {
            altText: t = "",
            text: a,
            onClick: s,
            btnColor: o = "#fff",
            labelColor: l = "#000",
            type: d = "",
            icon: m,
            size: u,
            secondText: g,
            consoleBtn: f = !1,
            img: p,
            to: b = !1,
            innerRef: v = null
          } = e;
          const h = [n.c.plusButton, n.c[d] ?? "", n.c[u] ?? "", n.c[f] ?? ""].join(" "),
            k = {
              "--hvr-color": o ?? l,
              "--hvr-bg-color": l ?? o,
              "--hvr-border-color": o ?? l
            },
            x = (0, i.jsxs)(i.Fragment, {
              children: [p ? (0, i.jsx)("img", {
                src: p,
                alt: t || a
              }) : "", (0, i.jsxs)("div", {
                className: n.c.btnText,
                icon: m,
                children: [a, g ? (0, i.jsx)("span", {
                  children: g
                }) : ""]
              })]
            });
          if (b) {
            if (b.startsWith("http")) {
              const e = b.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, i.jsx)("span", {
                onClick: s,
                onKeyUp: e => {
                  "Enter" === e.code && s()
                },
                role: "button",
                tabIndex: -1,
                children: (0, i.jsx)("a", {
                  href: b,
                  className: h,
                  target: e,
                  children: x
                })
              })
            }
            return (0, i.jsx)(c, {
              className: h,
              onClick: s,
              style: k,
              to: b,
              children: x
            })
          }
          return (0, i.jsx)(r, {
            className: h,
            onClick: s,
            style: k,
            innerRef: v,
            children: x
          })
        }
    },
    15388: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => r
      });
      var s = a(1740),
        n = a(31252);
      var i = a(95240);
      const r = e => {
        let {
          buttons: t = [],
          className: a
        } = e;
        return t.length ? (0, i.jsx)("div", {
          className: (0, s.classList)("rockstargames-sites-gta-gen9a649ab228e5a522f6e9e981a54036652", a),
          children: t.map(((e, t) => {
            let {
              icon: a,
              to: s,
              title: r
            } = e;
            return r ? (0, i.jsx)(n.c, {
              className: "white",
              text: r,
              to: s
            }, t) : ""
          }))
        }) : null
      }
    },
    73300: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => h
      });
      var s = a(51664),
        n = a(6300),
        i = a(9860),
        r = a(42836),
        c = a(31248),
        o = a(1740),
        l = a(48111),
        d = a(31403),
        m = a(31252);
      const u = {
        pillBtn: "rockstargames-sites-gta-gen9de0c2997703aedc7531c188c83299b6c",
        selected: "rockstargames-sites-gta-gen9c74da5042c5c0a67b7464272816db587",
        buyNowArea: "rockstargames-sites-gta-gen9b112ebfc18eebb1241b07c19166b7796",
        topArea: "rockstargames-sites-gta-gen9f22161182a4ca2e6f7fc9bafdcdee6e3",
        btnArea: "rockstargames-sites-gta-gen9c7f383773c21a7743952c3dacef89b40",
        nextBtn: "rockstargames-sites-gta-gen9bb81279c9ead6374b2622459d389bc2d",
        prevBtn: "rockstargames-sites-gta-gen9f7a8734d8469025e4b8942cf406c6643",
        card: "rockstargames-sites-gta-gen9d6584eb7f514c2e42d314217ec1e3aaf",
        content: "rockstargames-sites-gta-gen9dcc4e9836cd849a1ee258158d8995e3b",
        contentGrid: "rockstargames-sites-gta-gen9d3010785db0d54e98f3bf2dce40e041a",
        titleArea: "rockstargames-sites-gta-gen9d313ca2eda70504fdcf03a8b7f1f744b",
        platforms: "rockstargames-sites-gta-gen9e8fbea9cd12702c233a20f7520599e1a",
        addedInfo: "rockstargames-sites-gta-gen9d839d1ce6fc7bc9ee6075caae0bc86b7",
        ctaBtn: "rockstargames-sites-gta-gen9f322f35a41ae3b5f266dcb72f2a60621",
        linksArea: "rockstargames-sites-gta-gen9bee7cbf39adcd03dfdaf9fe9ec0c0737",
        closeBtn: "rockstargames-sites-gta-gen9f66ad127058a8800197f4d00b237ca06",
        closeButtonWrapper: "rockstargames-sites-gta-gen9b3e75ba0d36c524b33e63b6b60601c4e",
        linkList: "rockstargames-sites-gta-gen9cab38167a36e713966eea2a91eefe037",
        bottomText: "rockstargames-sites-gta-gen9abda7e924e80f3591a05c40cbc3e2be5",
        imageGroup: "rockstargames-sites-gta-gen9bfa874edb54bdf216d34890c44d12ea7",
        imgMobile: "rockstargames-sites-gta-gen9cc0ee47736a93f55af267e42e89785c1",
        imgDesktop: "rockstargames-sites-gta-gen9ff92e6d4ac04eae88fbc2146f4a10625",
        responsiveImages: "rockstargames-sites-gta-gen9ef1dd1e1e9814629b79f34363160af0a",
        backgroundImage: "rockstargames-sites-gta-gen9deb56fad2147026bac0b8973c69f0f33",
        foregroundImage: "rockstargames-sites-gta-gen9e2021af151c34f3f71856b9e909a7aa4"
      };
      var g = a(60568),
        f = a(95240);
      const p = e => {
          let {
            className: t,
            images: a
          } = e;
          const s = (0, o.useGetCdnSource)(a?.mobile?.full_src ?? null),
            n = (0, o.useGetCdnSource)(a?.desktop?.full_src ?? s);
          return (0, f.jsxs)("div", {
            className: [t, u.responsiveImages].join(" "),
            children: [s ? (0, f.jsx)("div", {
              className: u.imgMobile,
              style: {
                background: `url(${s}) no-repeat center/cover`
              }
            }) : "", n ? (0, f.jsx)("div", {
              className: u.imgDesktop,
              style: {
                background: `url(${n}) no-repeat center/cover`
              }
            }) : ""]
          })
        },
        b = e => {
          let {
            addedInfo: t = null,
            buynowbtn: i = null,
            description: c = null,
            images: o,
            links: d = [],
            title: b = null
          } = e;
          const {
            track: v
          } = (0, r.useGtmTrack)(), h = {
            event: "card_click",
            event_category: "card",
            event_action: "click",
            event_label: b?.toLowerCase()
          }, [k, x] = (0, s.useState)(!1), y = {
            type: "spring",
            stiffness: 425,
            damping: 40
          }, _ = {
            type: "spring",
            stiffness: 650,
            damping: 45
          }, N = {
            ease: "easeOut",
            duration: .9,
            delay: .3
          }, S = {
            open: {
              opacity: 0,
              transition: {
                ease: "easeOut",
                duration: .3
              }
            },
            closed: {
              opacity: 1,
              transition: N
            }
          }, j = {
            open: {
              opacity: 1,
              display: "grid",
              height: "auto",
              transition: {
                opacity: N,
                height: y
              }
            },
            closed: {
              opacity: 0,
              height: 0,
              transition: {
                opacity: {
                  ease: "easeOut",
                  duration: .1
                },
                height: _
              },
              transitionEnd: {
                display: "none"
              }
            }
          }, w = {
            open: {
              "--cta-border-color": "var(--white-15)",
              "--cta-background-color": "rgba(255,255,255,.1)",
              "--cta-background-color-noBlur": "var(--black-100)",
              padding: "var(--card-padding)",
              gridGap: "var(--grid-gap-sm)",
              transition: y,
              pointerEvents: "none",
              "--btn-hover-bg-color": "rgba(255,255,255,.1)",
              "--btn-hover-bg-color-noBlur": "var(--black-100)",
              "--btn-hover-font-color": "none",
              "--btn-hover-border-color": "var(--white-15)"
            },
            closed: {
              "--cta-border-color": "var(--white-100)",
              "--cta-background-color": "inherit",
              "--cta-background-color-noBlur": "inherit",
              padding: "var(--padding-sm) var(--padding-md)",
              gridGap: 0,
              transition: _,
              transitionEnd: {
                "--btn-hover-bg-color": "inherit",
                "--btn-hover-bg-color-noBlur": "inherit",
                "--btn-hover-font-color": "inherit",
                "--btn-hover-border-color": "inherit"
              }
            }
          };
          return (0, f.jsx)(l.Ky, {
            children: (0, f.jsxs)("div", {
              className: u.card,
              children: [(0, f.jsxs)("div", {
                className: u.imageGroup,
                children: [(0, f.jsx)(p, {
                  className: u.backgroundImage,
                  images: o?.background
                }), (0, f.jsx)(p, {
                  className: u.foregroundImage,
                  images: o?.foreground
                })]
              }), (0, f.jsxs)("div", {
                className: u.content,
                children: [(0, f.jsxs)(n.motion.div, {
                  className: u.contentGrid,
                  animate: k ? "open" : "closed",
                  variants: S,
                  children: [(0, f.jsxs)("div", {
                    className: u.titleArea,
                    children: [(0, f.jsx)("h2", {
                      dangerouslySetInnerHTML: {
                        __html: b
                      }
                    }), (0, f.jsx)("p", {
                      dangerouslySetInnerHTML: {
                        __html: c
                      }
                    })]
                  }), d.length ? (0, f.jsx)("div", {
                    className: u.platforms,
                    children: d.map(((e, t) => (0, f.jsx)("div", {
                      className: u[e.platform],
                      children: e.platform ? (0, f.jsx)("img", {
                        src: a(2936)(`./${e.platform}.svg`),
                        alt: `${"xboxone"===e.platform?"xbox one":e.platform}`
                      }) : ""
                    }, `${e.platform+t}`)))
                  }) : ""]
                }), t ? (0, f.jsx)(n.motion.p, {
                  className: u.addedInfo,
                  dangerouslySetInnerHTML: {
                    __html: t
                  },
                  animate: k ? "open" : "closed",
                  variants: S
                }) : "", i ? (0, f.jsxs)(n.motion.button, {
                  onClick: () => {
                    x(!k), v(h), k || v({
                      event_action: "select_platform",
                      event_category: "cta",
                      event: "select_platform",
                      event_label: b?.toLowerCase()
                    })
                  },
                  className: [u.ctaBtn, g.c.plusButton].join(" "),
                  animate: k ? "open" : "closed",
                  variants: w,
                  initial: !1,
                  children: [(0, f.jsx)(n.motion.div, {
                    className: [u.ctaBtnText, g.c.btnText].join(" "),
                    children: i
                  }), (0, f.jsxs)(n.motion.div, {
                    className: [u.linksArea, k ? u.showLinks : ""].join(" "),
                    animate: k ? "open" : "closed",
                    variants: j,
                    initial: !1,
                    children: [(0, f.jsx)("button", {
                      type: "button",
                      className: u.closeButtonWrapper,
                      onClick: () => {
                        x(!1), v(h), v({
                          event_action: "close",
                          event_category: "select_platform",
                          event: "select_platform",
                          event_label: b?.toLowerCase()
                        })
                      },
                      children: (0, f.jsx)("img", {
                        className: u.closeBtn,
                        src: a(84276),
                        alt: "Close menu button"
                      })
                    }), (0, f.jsx)("div", {
                      className: u.linkList,
                      children: d.length ? d.map(((e, t) => (0, f.jsx)(m.c, {
                        type: "blackBtn",
                        size: "large",
                        img: a(2936)(`./${e.platform}.svg`),
                        consoleBtn: e.platform,
                        to: e.href,
                        altText: e?.altText,
                        onClick: () => {
                          v({
                            event_action: "store_link",
                            event_category: "cta",
                            event: "cta_store_link",
                            event_label: "platform button",
                            text: e.platform,
                            link_url: e.href
                          })
                        }
                      }, `${e.platform+t}`))) : ""
                    })]
                  })]
                }) : ""]
              })]
            })
          })
        };
      b.displayName = "SwiperSlide";
      const v = {
          0: {
            slidesPerView: 1,
            spaceBetween: 16,
            enabled: !0
          },
          768: {
            slidesPerView: 1.25,
            spaceBetween: 16,
            enabled: !0
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 18,
            enabled: !1
          },
          1920: {
            slidesPerView: 2,
            spaceBetween: 20,
            enabled: !1
          },
          2560: {
            slidesPerView: 2,
            spaceBetween: 22,
            enabled: !1
          }
        },
        h = i.framer.withFadeIn((0, i.withSimpleErrorBoundary)((e => {
          let {
            cards: t = [],
            bottomText: a,
            topText: n,
            ...i
          } = e;
          const {
            track: o
          } = (0, r.useGtmTrack)(), {
            ref: m,
            inView: g
          } = (0, c.useInView)({
            threshold: .6
          }), [p, h] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            g && !p && (o({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `buy now - ${n}`.toLowerCase(),
              element_placement: `buy now - ${i?._memoq?.topText}`.toLowerCase()
            }), h(!0))
          }), [g]), (0, f.jsxs)("div", {
            className: u.buyNowArea,
            ref: m,
            children: [(0, f.jsxs)("div", {
              className: u.topArea,
              children: [n ? (0, f.jsx)("h2", {
                children: n
              }) : "", (0, f.jsxs)("div", {
                className: u.btnArea,
                children: [(0, f.jsx)("div", {
                  className: u.prevBtn
                }), (0, f.jsx)("div", {
                  className: u.nextBtn
                })]
              })]
            }), t?.length ? (0, f.jsx)(l.wx, {
              grabCursor: !0,
              navigation: {
                nextEl: `.${u.nextBtn}`,
                prevEl: `.${u.prevBtn}`
              },
              onSlideNextTransitionEnd: () => {
                o({
                  event_action: "next",
                  event_category: "carousel",
                  event: "carousel_next",
                  event_label: n?.toLowerCase() ?? ""
                })
              },
              onSlidePrevTransitionEnd: () => {
                o({
                  event_action: "previous",
                  event_category: "carousel",
                  event: "carousel_previous",
                  event_label: n?.toLowerCase() ?? ""
                })
              },
              onSlideChangeTransitionEnd: () => {
                o({
                  event_action: "swipe",
                  event_category: "carousel",
                  event: "carousel_swipe",
                  event_label: n?.toLowerCase() ?? ""
                })
              },
              modules: [d._2],
              breakpoints: v,
              children: t.map((e => (0, s.createElement)(b, {
                ...e,
                key: JSON.stringify(e)
              }))) ?? ""
            }) : "", a ? (0, f.jsx)("p", {
              className: u.bottomText,
              children: a
            }) : ""]
          })
        })))
    },
    71584: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => i
      });
      var s = a(1740);
      var n = a(95240);
      const i = e => {
        let {
          disclaimer: t,
          text: a = null,
          title: i,
          className: r = "",
          style: c = {}
        } = e;
        const o = a ?? t?.text ?? null,
          l = i ? `<h5>${i}</h5>${o}` : o;
        return o ? (0, n.jsx)("div", {
          className: (0, s.classList)("rockstargames-sites-gta-gen9fafe66500f74b5fda33cb7b70746a014", r),
          dangerouslySetInnerHTML: {
            __html: l
          },
          style: c
        }) : null
      }
    },
    41136: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => c
      });
      var s = a(51664),
        n = a(9860),
        i = a(31252);
      var r = a(95240);
      const c = (0, n.withSimpleErrorBoundary)((e => {
        let {
          buttonTxt: t,
          description: a,
          disclaimer: n,
          faqList: c = [],
          initialLength: o = 6,
          addedLength: l = 6,
          title: d,
          tinaModulesInfo: m
        } = e;
        const [u, g] = (0, s.useState)(o);
        return (0, r.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9b98dca4969db7550b49d754ec2073908",
          children: [(0, r.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9ed716cf574f33506740c9265064eeb55",
            children: [(0, r.jsxs)("div", {
              children: [(0, r.jsx)("h3", {
                children: m?.[0]?.title ?? d
              }), (0, r.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: a
                }
              })]
            }), (0, r.jsx)("div", {
              className: "rockstargames-sites-gta-gen9e7d04bcd38e193d50d084b7c245800d3",
              children: c.length ? c.slice(0, u).map(((e, t) => {
                let {
                  question: a,
                  answer: s
                } = e;
                return (0, r.jsxs)("details", {
                  children: [(0, r.jsx)("summary", {
                    children: a
                  }), (0, r.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: s
                    }
                  })]
                }, t)
              })) : ""
            }), c.length > u ? (0, r.jsx)(i.c, {
              onClick: () => g(u + l),
              text: t
            }) : ""]
          }), (0, r.jsx)("div", {
            className: "rockstargames-sites-gta-gen9f6ace97f5f337b05ad32ebe31dd2c285",
            dangerouslySetInnerHTML: {
              __html: n
            }
          })]
        })
      }))
    },
    23292: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => i
      });
      var s = a(65040);
      var n = a(95240);
      const i = e => {
        let {
          children: t,
          style: a
        } = e;
        return (0, n.jsx)(s.i, {
          children: (0, n.jsx)("div", {
            className: "rockstargames-sites-gta-gen9c0b74f4dbb581a79bf33d81b457bef59",
            style: a,
            "data-type": "guide",
            children: (0, n.jsx)("div", {
              className: "rockstargames-sites-gta-gen9a72ddbbafc8a92f08cb4a174b5ebf4ca",
              children: t
            })
          })
        })
      }
    },
    22904: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => m
      });
      var s = a(51664),
        n = a(73660),
        i = a.n(n),
        r = a(9860),
        c = a(45652),
        o = a(42836);
      var l = a(95240);
      const d = e => {
          let {
            guide: t,
            parentTitle: a,
            index: s
          } = e;
          const {
            track: n
          } = (0, o.useGtmTrack)();
          let d = {
            hero: {}
          };
          i().cloneDeepWith(t, ((e, t) => {
            "images" === t && (d = e)
          }));
          const {
            src: m
          } = (0, c.useImageParser)(d?.thumb ?? {});
          return (0, l.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b40f08dc1045d471f902655ea561c15e",
            children: (0, l.jsxs)(r.A, {
              to: t.to,
              onClick: () => {
                n({
                  event: "card_click",
                  event_category: "card",
                  event_action: "click",
                  event_label: a,
                  card_id: t.id,
                  card_name: t.title.toLowerCase(),
                  link_url: t.to,
                  position: s,
                  element_placement: a
                })
              },
              children: [(0, l.jsx)("div", {
                style: {
                  "--aspect-ratio": 1,
                  background: `url(${m?.mobile}) no-repeat center/cover`
                }
              }), (0, l.jsx)("h4", {
                children: t.title
              })]
            })
          })
        },
        m = e => {
          let {
            guides: t = {},
            tinaModulesInfo: a,
            title: n
          } = e;
          const c = i().map(t, "guide_id"),
            o = (0, r.useTinaModuleFetchByIds)({
              ids: c
            }),
            m = a?.[0]?.title ?? n,
            [u, g] = (0, s.useState)(null);
          return (0, s.useEffect)((() => {
            const e = o?.map(((e, t) => (0, l.jsx)(d, {
              guide: e,
              parentTitle: m,
              index: t
            }, e.id)));
            g(e)
          }), [o]), (0, l.jsx)(r.Gen9CoreCarousel, {
            size: "lg",
            slideChildren: u,
            title: m
          })
        }
    },
    72256: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => l
      });
      var s = a(1740),
        n = a(57013),
        i = a(75416);
      var r = a(95240);
      const c = () => {
          const {
            guideId: e
          } = (0, n.useParams)(), t = (0, i.uQ)(e, "<span></span>");
          return t ? (0, r.jsx)("div", {
            className: "rockstargames-sites-gta-gen9f1647fd28e5f0067e733c054be2c2424",
            dangerouslySetInnerHTML: {
              __html: `Guides<span></span>${t}`
            }
          }) : null
        },
        o = e => {
          let {
            hero: t
          } = e;
          const {
            alt: a,
            src: n = {}
          } = (0, s.useImageParser)(t) ?? {}, {
            mobile: i
          } = n;
          if (i) return (0, r.jsx)("div", {
            "aria-label": a,
            className: "rockstargames-sites-gta-gen9ddf4fadc9ce6250ad1864fa1dd63780c",
            role: "img",
            style: {
              background: `url(${i}) no-repeat center/contain`
            }
          })
        },
        l = e => {
          let {
            blurb: t,
            hero: a,
            title: s
          } = e;
          return (0, r.jsxs)(r.Fragment, {
            children: [a ? (0, r.jsx)(o, {
              hero: a
            }) : "", (0, r.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9b06267934a8fc8ac84e510f131df16ae",
              children: [(0, r.jsx)(c, {}), (0, r.jsx)("h1", {
                children: s
              }), t && (0, r.jsx)("span", {
                className: "rockstargames-sites-gta-gen9f9e4e76ad2623c28b29786ba7af5ac87",
                dangerouslySetInnerHTML: {
                  __html: t
                }
              })]
            })]
          })
        }
    },
    64552: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => h
      });
      var s = a(51664),
        n = a(57013),
        i = a(73660),
        r = a.n(i),
        c = a(6300),
        o = a(9860),
        l = a(42836),
        d = a(75416);
      const m = {
        pillBtn: "rockstargames-sites-gta-gen9b3b601bde6ad6cec6ef29f9d31d552ca",
        selected: "rockstargames-sites-gta-gen9e1f82fd3ab02ab3f61c5225573eb60d5",
        guideNav: "rockstargames-sites-gta-gen9dc6a651dc3aebb3a3e112e4d94b5483f",
        headerHidden: "rockstargames-sites-gta-gen9f42dd22b2d449a6474bc3a92e5ba9e2d",
        guideList: "rockstargames-sites-gta-gen9f94b06d8279968e7a036e6aaad56140a",
        activeSection: "rockstargames-sites-gta-gen9b471a7219a513800b67df265e8bef283",
        guideLinkCurrent: "rockstargames-sites-gta-gen9c37c016d19e55d1539a25edbbcf876cf",
        guide: "rockstargames-sites-gta-gen9c06ceafe8b3ec4d8918797e0928400d1",
        sections: "rockstargames-sites-gta-gen9dcbefa30334c656a38e45495ab02a0b2"
      };
      var u = a(95240);
      const g = {
          ease: "easeInOut",
          duration: .3
        },
        f = {
          closed: {
            opacity: 0,
            height: "0px"
          },
          open: {
            opacity: 1,
            height: "auto"
          }
        },
        p = e => {
          let {
            to: t,
            title: a,
            id_hash: n,
            query: i
          } = e;
          const {
            track: r
          } = (0, l.useGtmTrack)(), [c, g] = (0, s.useState)(n === i), {
            state: f
          } = (0, d.KM)(), {
            activeSection: p
          } = f;
          return (0, s.useEffect)((() => g(i !== p ? p === n : i === n)), [p]), (0, u.jsx)(o.A, {
            to: t,
            className: c ? m.activeSection : "",
            onClick: () => {
              r({
                event: "nav_click",
                event_category: "nav",
                event_action: "click"
              })
            },
            children: a
          }, t)
        },
        b = e => {
          let {
            sections: t
          } = e;
          const [a] = (0, n.useSearchParams)();
          return (0, u.jsx)("div", {
            className: m.sections,
            children: t?.map(((e, t) => {
              let {
                id_hash: s,
                title: n,
                to: i
              } = e;
              return (0, u.jsx)(p, {
                id_hash: s,
                query: a,
                title: n,
                to: i
              }, t)
            }))
          })
        },
        v = e => {
          let {
            currentId: t,
            group: a
          } = e;
          const [n, i] = (0, s.useState)(null), [l, p] = (0, s.useState)(null), {
            state: v
          } = (0, d.KM)(), {
            activeSection: h
          } = v;
          return (0, s.useEffect)((() => {
            const e = r().findIndex(a?.children, (e => {
              let {
                id_hash: a
              } = e;
              return a === t
            }));
            p(e), i(-1 !== e)
          }), [t, h, a]), (0, u.jsxs)("div", {
            className: m.guideList,
            children: [(0, u.jsx)("button", {
              type: "button",
              onClick: () => i(!n),
              children: a.title
            }), (0, u.jsx)(c.motion.nav, {
              animate: n ? "open" : "closed",
              variants: f,
              transition: g,
              children: a?.children?.map(((e, a) => {
                let {
                  children: s,
                  id_hash: n,
                  title: i,
                  to: r
                } = e;
                return (0, u.jsxs)("div", {
                  className: m.guide,
                  children: [(0, u.jsx)(o.A, {
                    className: [m.guideLink, t === n ? m.guideLinkCurrent : ""].join(" "),
                    to: r,
                    children: i
                  }), a === l && s?.length ? (0, u.jsx)(b, {
                    sections: s
                  }) : ""]
                }, i)
              }))
            })]
          })
        },
        h = e => {
          let {
            currentId: t
          } = e;
          const a = (0, d.ye)(),
            {
              state: {
                headerHeight: s,
                headerHidden: n
              }
            } = (0, d.KM)();
          return (0, u.jsx)("div", {
            className: [m.guideNav, n ? m.headerHidden : ""].join(" "),
            style: {
              "--header-height": `${s}px`
            },
            children: a?.map((e => (0, u.jsx)(v, {
              currentId: t,
              group: e
            }, e.id_hash)))
          })
        }
    },
    25992: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => c
      });
      var s = a(51664),
        n = a(31248),
        i = a(75416);
      var r = a(95240);
      const c = e => {
        let {
          style: t,
          children: a,
          __anchor: c = null
        } = e;
        const {
          announcePresence: o
        } = (0, i.y_)(), {
          ref: l,
          inView: d
        } = (0, n.useInView)({
          rootMargin: "0px 0px -700px 0px",
          threshold: 0,
          delay: 850
        });
        return (0, s.useEffect)((() => {
          o(c)
        }), [c]), (0, s.useEffect)((() => {
          d && o(c)
        }), [d]), (0, r.jsx)("span", {
          style: t,
          className: "rockstargames-sites-gta-gen9e46af541dffc51dc338509484cffa659",
          name: c,
          ref: l,
          children: a
        })
      }
    },
    18500: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => u
      });
      var s = a(51664),
        n = a(9860),
        i = a(1740),
        r = a(42836),
        c = a(31248),
        o = a(15388),
        l = a(47572),
        d = a(71584);
      var m = a(95240);
      const u = n.framer.withFadeIn((e => {
        let {
          brands: t = [],
          content: a,
          ctas: n = [],
          disclaimer: u,
          image: g,
          large: f = !1,
          title: p,
          image_on_right: b = !1,
          style: v = {},
          className: h = "",
          ...k
        } = e;
        const {
          track: x
        } = (0, r.useGtmTrack)(), {
          ref: y,
          inView: _
        } = (0, c.useInView)({
          threshold: .6
        }), [N, S] = (0, s.useState)(!1), j = (0, i.useGetCdnSource)(g?.full_src ?? null) ?? null;
        return (0, s.useEffect)((() => {
          _ && !N && (x({
            event: "page_section_impression",
            event_action: "impression",
            event_category: "page_section",
            event_label: `image text group - ${p}`.toLowerCase(),
            element_placement: `image text group - ${k?._memoq?.title}`.toLowerCase()
          }), S(!0))
        }), [_]), (0, m.jsxs)("div", {
          className: (0, i.classList)("rockstargames-sites-gta-gen9f6868d96e7b25bdb74435d0559970e75", f ? "rockstargames-sites-gta-gen9c9ca8e3e22865d04f816a0923489b124" : "", b ? "rockstargames-sites-gta-gen9f044d09bcae5bc48eef278aa1c8600a2" : "", j ? "" : "rockstargames-sites-gta-gen9a6ec7a3705521eae985d53eb2769018c", h),
          style: v,
          ref: y,
          children: [j ? (0, m.jsx)("div", {
            className: "rockstargames-sites-gta-gen9aa09f1e58f180b91c4f1795f60448086",
            style: {
              background: `url(${j}) no-repeat center/cover`
            }
          }) : "", (0, m.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9ed0a185c4fc5fc35cfe58c069276b698",
            children: [(0, m.jsx)(l.c, {
              brands: t
            }), (0, m.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9a459c55933f25ddf49dcacd16528b5c3",
              children: [(0, m.jsx)("h2", {
                className: "rockstargames-sites-gta-gen9cd300722ac259ea94696805dc5731984",
                tabIndex: 0,
                children: p
              }), a ? (0, m.jsx)("div", {
                className: "rockstargames-sites-gta-gen9c16cfdde0a10fcb97b4d20ffc8f09d71",
                dangerouslySetInnerHTML: {
                  __html: a
                }
              }) : ""]
            }), (0, m.jsx)(o.c, {
              ctas: n
            }), (0, m.jsx)(d.c, {
              disclaimer: u
            })]
          })]
        })
      }))
    },
    3736: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => c
      });
      var s = a(1740),
        n = a(18500);
      const i = {
        pillBtn: "rockstargames-sites-gta-gen9f117df17a34d1837a4e2bb599a71f88d",
        selected: "rockstargames-sites-gta-gen9e8b6740b3aded532dfefbf06edf500ca",
        imageTextGroupGroup: "rockstargames-sites-gta-gen9d51265e78cba56a6119978e898e2a967",
        bg: "rockstargames-sites-gta-gen9d9d65419cc79c4fa43a6bc2571c552c7",
        bgMobile: "rockstargames-sites-gta-gen9b52f9f638a05d06d1c573dded0810212",
        bgDesktop: "rockstargames-sites-gta-gen9d6c821fe070e5eb41f1fba6178bd3571"
      };
      var r = a(95240);
      const c = e => {
        let {
          bg: t,
          image_text_groups: a = [],
          style: c = {},
          className: o = ""
        } = e;
        const l = (0, s.useGetCdnSource)(t?.image?.mobile?.full_src ?? null),
          d = (0, s.useGetCdnSource)(t?.image?.desktop?.full_src ?? null) ?? l;
        return a.length ? (0, r.jsxs)("div", {
          className: (0, s.classList)(i.imageTextGroupGroup, o),
          style: {
            ...c
          },
          children: [l ? (0, r.jsx)("div", {
            className: [i.bgMobile, i.bg].join(" "),
            style: {
              background: `url(${l}) no-repeat center/cover`
            }
          }) : "", d ? (0, r.jsx)("div", {
            className: [i.bgDesktop, i.bg].join(" "),
            style: {
              background: `url(${d}) no-repeat center/cover`
            }
          }) : "", a.map(((e, t) => (0, r.jsx)(n.c, {
            ...e
          }, t)))]
        }) : null
      }
    },
    58960: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => c
      });
      var s = a(9860),
        n = a(1740);
      const i = {
        pillBtn: "rockstargames-sites-gta-gen9a218c6efb11f05af742c35731abd7f0e",
        selected: "rockstargames-sites-gta-gen9c9f11c19d7943dec1c872d1d921cd364",
        linkoutSection: "rockstargames-sites-gta-gen9f62388243285f747f07ef5d1be84ceb8",
        cta: "rockstargames-sites-gta-gen9eec30b6a686a74885da49d3cf33c1795"
      };
      var r = a(95240);
      const c = e => {
        let {
          text: t,
          cta: c,
          to: o,
          className: l = "",
          style: d = {}
        } = e;
        return (0, r.jsxs)(s.A, {
          className: (0, n.classList)(i.linkoutSection, l),
          to: o,
          style: d,
          children: [t && (0, r.jsx)("div", {
            className: i.text,
            children: t
          }), c && (0, r.jsxs)("div", {
            className: i.cta,
            children: [c, " ", (0, r.jsx)("img", {
              src: a(2140)
            })]
          })]
        })
      }
    },
    47276: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => i
      });
      var s = a(51664);
      var n = a(95240);
      const i = e => {
        let {
          children: t,
          style: a,
          theme: i
        } = e;
        const [r, c] = (0, s.useState)(i);
        return (0, s.useEffect)((() => {
          i && c(i)
        }), [i]), (0, n.jsx)("div", {
          className: "rockstargames-sites-gta-gen9a691fa72d9c1962b69090f47fbb6eadf",
          style: a,
          "data-theme": r,
          children: t
        })
      }
    },
    880: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => r
      });
      var s = a(84644),
        n = a.n(s);
      var i = a(95240);
      const r = e => {
        let {
          id: t
        } = e;
        return (0, i.jsx)("div", {
          className: "rockstargames-sites-gta-gen9f6130392c70daec4b6c7b3fb89ad8369",
          children: (0, i.jsx)(n(), {
            autoplay: !0,
            context: "embed",
            id: t,
            endBehavior: "stillframe",
            wrapper: !1
          })
        })
      }
    },
    42172: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        BrandMessage: () => i,
        BuyNow: () => r.c,
        ClaimCountdown: () => o,
        Disclaimer: () => d.c,
        DiscoverCallout: () => l.c,
        FAQ: () => m.c,
        Guide: () => u.c,
        GuideGroup: () => g.c,
        GuideIntro: () => f.c,
        GuideNavDesktop: () => p.c,
        GuideSection: () => b.c,
        Hero: () => S,
        ImageTextGroup: () => j.c,
        ImageTextGroupGroup: () => w.c,
        LinkoutSection: () => T.c,
        Logo: () => E,
        SectionTitle: () => M,
        TinaWrapper: () => P.c,
        VideoPlayerWrapper: () => L.c
      });
      var s = a(47572);
      var n = a(95240);
      const i = e => {
        let {
          brand: t,
          headline_left: a,
          headline_right: i,
          info: r
        } = e;
        return (0, n.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9ebe7007f3b51b86e212449fb1dc61aec",
          children: [(0, n.jsx)(s.c, {
            brands: [{
              brand: t
            }]
          }), (0, n.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9ae37f727f57beae0bd72b3e764cda36d",
            children: [(0, n.jsxs)("h2", {
              children: [a, " ", (0, n.jsx)("span", {
                children: i
              })]
            }), (0, n.jsx)("p", {
              children: r
            })]
          })]
        })
      };
      var r = a(73300),
        c = a(51664);
      const o = e => {
        let {
          left: t,
          right: a
        } = e;
        const [s, i] = (0, c.useState)(""), [r, o] = (0, c.useState)(!1);
        return (0, n.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9b868510520ca3ebc97d9ce2ea9d2edf2",
          children: [(0, n.jsxs)("h2", {
            "aria-hidden": r,
            onMouseOver: () => {
              o(!0), i(`${t} ${a}`)
            },
            onMouseOut: () => {
              o(!1), i("")
            },
            onFocus: () => {},
            onBlur: () => {},
            tabIndex: 0,
            children: [t, " ", (0, n.jsx)("span", {
              children: a
            })]
          }), (0, n.jsx)("h2", {
            role: "status",
            "aria-live": "polite",
            className: "rockstargames-sites-gta-gen9abbffb6bf72ec54bb65fb37351644300",
            children: s
          })]
        })
      };
      var l = a(26352),
        d = a(71584),
        m = a(41136),
        u = a(23292),
        g = a(22904),
        f = a(72256),
        p = a(64552),
        b = a(25992),
        v = a(9860),
        h = a(6300),
        k = a(1740),
        x = a(15388);
      const y = {
          pillBtn: "rockstargames-sites-gta-gen9da06af8dd97d38ae3b6d72a846a016c8",
          selected: "rockstargames-sites-gta-gen9ee3952baaef7299a6aeccdd510d89eee",
          hero: "rockstargames-sites-gta-gen9bdf8106449291381aa85bb1beeab8a09",
          images: "rockstargames-sites-gta-gen9ac9dde4965f80b2fbd79a4516515f5dd",
          background: "rockstargames-sites-gta-gen9a72d947fc700f0c79479290b3dfdfd9e",
          gradient: "rockstargames-sites-gta-gen9c8d52d6f8deac3950d9bb4fd44cf61ec",
          layered: "rockstargames-sites-gta-gen9d7a7611978f14ff5090d5053dd1e7c4d",
          content: "rockstargames-sites-gta-gen9edbd8517fefee8e94e9e1837307cd303",
          descriptions: "rockstargames-sites-gta-gen9a4285ebbbe0a7ad2f7616989a0601883",
          buttonGroup: "rockstargames-sites-gta-gen9b7af1262bc7abedceb8bc59de6c6ec5c",
          legalText: "rockstargames-sites-gta-gen9f87f44fa37f5036a7b16bd8c7d830db2",
          shardsCarousel: "rockstargames-sites-gta-gen9fe2c2d62d76afc07448328859b4341f6"
        },
        _ = e => {
          let {
            title: t = "",
            mobileImg: a,
            desktopImg: s
          } = e;
          const i = (0, k.useGetCdnSource)(a ?? null),
            r = (0, k.useGetCdnSource)(s ?? i);
          return (0, n.jsx)("div", {
            className: y.shard,
            style: {
              "--background-image-mobile": `url(${i})`,
              "--background-image-desktop": `url(${r})`
            },
            children: (0, n.jsx)("h5", {
              children: t
            })
          })
        },
        N = e => {
          let {
            title: t = "Membership Rewards",
            shards: a
          } = e;
          const [s, i] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            a && i(a.map((e => {
              if (!e?.shardImg) return;
              const {
                title: t,
                shardImg: a
              } = e, {
                mobile: s,
                desktop: i
              } = a;
              return (0, n.jsx)(_, {
                title: t,
                mobileImg: s?.full_src,
                desktopImg: i?.full_src
              }, t)
            })))
          }), [a]), s ? (0, n.jsx)("div", {
            className: y.shardsCarousel,
            children: (0, n.jsx)(v.Gen9CoreCarousel, {
              title: t,
              slideChildren: s,
              size: "lg",
              customSpaceBetween: 0
            })
          }) : null
        },
        S = e => {
          let {
            brands: t = [],
            backgroundImg: a,
            layeredImg: i,
            ctas: r = [],
            expandingButtonLabel: c = "Subscribe",
            platformsAndLinks: o = [],
            description: l,
            title: d,
            legalText: m,
            shardsSection: u = {},
            className: g
          } = e;
          const f = (0, k.useGetCdnSource)(a?.mobile?.full_src ?? null),
            p = (0, k.useGetCdnSource)(a?.desktop?.full_src ?? f),
            b = (0, k.useGetCdnSource)(i?.mobile?.full_src ?? null),
            _ = (0, k.useGetCdnSource)(i?.desktop?.full_src ?? b),
            S = {
              visible: {
                opacity: 1,
                transition: {
                  ease: [.5, 0, 0, 1],
                  duration: .75,
                  when: "beforeChildren",
                  delayChildren: .25,
                  staggerChildren: .1
                }
              },
              hidden: {
                opacity: 0
              }
            },
            j = {
              visible: {
                opacity: 1,
                y: 0,
                height: "100%",
                overflow: "hidden",
                transition: {
                  ease: [.5, 0, 0, 1],
                  duration: .75
                }
              },
              hidden: {
                opacity: 0,
                y: 100,
                height: "0%",
                overflow: "hidden"
              }
            };
          return (0, n.jsxs)(h.motion.div, {
            className: (0, k.classList)(y.hero, g),
            style: {
              "--background-image-desktop": `url(${p})`,
              "--background-image-mobile": `url(${f})`,
              "--layered-image-desktop": `url(${_})`,
              "--layered-image-mobile": `url(${b})`
            },
            initial: "hidden",
            animate: "visible",
            variants: S,
            children: [(0, n.jsxs)("div", {
              className: y.images,
              children: [p && f ? (0, n.jsx)("div", {
                className: y.background,
                style: a?.style ?? {}
              }) : "", b && _ ? (0, n.jsx)("div", {
                className: y.layered
              }) : "", (0, n.jsx)("div", {
                className: y.gradient
              })]
            }), (0, n.jsxs)(h.motion.div, {
              className: y.content,
              initial: "hidden",
              animate: "visible",
              variants: S,
              children: [(0, n.jsx)(h.motion.div, {
                variants: j,
                children: (0, n.jsx)(s.c, {
                  brands: t
                })
              }), o.length ? (0, n.jsx)(h.motion.div, {
                variants: j,
                children: (0, n.jsx)(v.ExpandingPlatformButton, {
                  buttonText: c,
                  platformsAndLinks: o,
                  children: (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(h.motion.div, {
                      className: y.descriptions,
                      variants: j,
                      children: [(0, n.jsx)("h1", {
                        dangerouslySetInnerHTML: {
                          __html: d
                        }
                      }), (0, n.jsx)("p", {
                        dangerouslySetInnerHTML: {
                          __html: l
                        }
                      })]
                    }), r.length > 0 && (0, n.jsx)(h.motion.div, {
                      variants: j,
                      children: (0, n.jsx)(x.c, {
                        buttons: r,
                        className: y.buttonGroup
                      })
                    })]
                  })
                })
              }) : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsxs)(h.motion.div, {
                  className: y.descriptions,
                  variants: j,
                  children: [(0, n.jsx)("h1", {
                    dangerouslySetInnerHTML: {
                      __html: d
                    }
                  }), (0, n.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: l
                    }
                  })]
                }), r.length > 0 && (0, n.jsx)(h.motion.div, {
                  variants: j,
                  children: (0, n.jsx)(x.c, {
                    buttons: r,
                    className: y.buttonGroup
                  })
                })]
              }), m && (0, n.jsx)(h.motion.div, {
                className: y.legalText,
                variants: j,
                children: (0, n.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: m
                  }
                })
              })]
            }), u?.shards && (0, n.jsx)(N, {
              ...u
            })]
          })
        };
      var j = a(18500),
        w = a(3736),
        T = a(58960);
      const C = {},
        E = e => {
          let {
            brand: t
          } = e;
          return (0, n.jsx)("div", {
            className: C[t]
          })
        },
        M = () => (0, n.jsx)("h2", {
          children: "Section"
        });
      var P = a(47276),
        L = a(880)
    },
    75416: (e, t, a) => {
      "use strict";
      a.d(t, {
        KM: () => i,
        y_: () => r.y,
        uQ: () => u,
        ye: () => o,
        WS: () => d
      });
      var s = a(33052);
      const n = (0, s.makeVar)({
          brand: null,
          headerHeight: 0,
          headerHidden: !1,
          mobileNavOpen: !1,
          activeSection: null
        }),
        i = () => {
          const e = (0, s.useReactiveVar)(n),
            t = e => {
              const t = {
                ...n(),
                ...e
              };
              n(t)
            };
          return {
            state: e,
            setBrand: e => {
              t({
                brand: e
              })
            },
            setHeaderHeight: e => {
              t({
                headerHeight: e
              })
            },
            setHeaderHidden: e => {
              t({
                headerHidden: e
              })
            },
            setMobileNavOpen: e => {
              t({
                mobileNavOpen: e
              })
            },
            setActiveSection: e => {
              t({
                activeSection: e
              })
            }
          }
        };
      var r = a(65040),
        c = a(8872);
      const o = () => {
        const {
          data: e
        } = (0, s.useQuery)(c.TinaModulesTree, {
          variables: {
            type: "gen9-guide-group"
          }
        });
        return e?.tinaModulesTree ?? null
      };
      var l = a(51664);
      a(73660), a(67284);
      const d = () => {
        const [e, t] = (0, l.useState)([{
          title: "Overview",
          to: "/gta-v"
        }, {
          title: "GTA Online",
          to: "/gta-online",
          activeExact: !0
        }, {
          title: "GTA+",
          to: "/gta-plus"
        }, {
          title: "Guides",
          to: "/gta-online/guides",
          children_key: "guides"
        }, {
          title: "Support",
          to: "https://support.rockstargames.com"
        }]);
        return e
      };
      a(42836);
      var m = a(79500);
      const u = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " > ";
        const [a, n] = (0, l.useState)(null), {
          data: i
        } = (0, s.useQuery)(m.TinaModulesTree, {
          variables: {
            id: e
          },
          skip: !e
        });
        return (0, l.useEffect)((() => {
          const e = i?.tinaModulesTree?.[0]?.tree ?? null;
          e && n(e.map((e => {
            let {
              title: t
            } = e;
            return t
          })).join(t))
        }), [i, t, e]), a
      }
    },
    65040: (e, t, a) => {
      "use strict";
      a.d(t, {
        i: () => d,
        y: () => l
      });
      var s = a(51664),
        n = a(57013),
        i = a(3061),
        r = a(75416),
        c = a(95240);
      const o = (0, s.createContext)(),
        l = () => (0, s.useContext)(o),
        d = e => {
          let {
            children: t
          } = e;
          const [a, l] = (0, s.useState)(null), [d] = (0, n.useSearchParams)(), {
            setActiveSection: m
          } = (0, r.KM)(), {
            pauseUserShouldSeeMore: u
          } = (0, i.useScroll)(), g = (0, s.useCallback)((e => {
            if (e !== d.get("section")) return void m(e);
            const t = document.getElementsByName(d.get("section"))?.[0];
            t && (u(), m(d.get("section")), t.scrollIntoView({
              behavior: "auto"
            }))
          }), [d.get("section"), a]);
          (0, s.useEffect)((() => {
            d.get("section") && g(d.get("section"))
          }), [d.get("section")]);
          const f = (0, s.useMemo)((() => ({
            announcePresence: g,
            section: a,
            setSection: l
          })), [g, a, l]);
          return (0, c.jsx)(o.Provider, {
            value: f,
            children: t
          })
        }
    },
    67284: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        componentsForTinaParser: () => We,
        componentsForTinaParserGuide: () => qe
      });
      var s = a(9860),
        n = a(51664),
        i = a(1740),
        r = a(45364),
        c = a.n(r),
        o = a(73660),
        l = a.n(o),
        d = a(57013),
        m = a(45792);
      var u = a(95240);
      const g = e => {
          let {
            hasTag: t = !1,
            tag: a = null,
            tagStyle: n = null,
            badges: i = []
          } = e;
          return t && a ? (0, u.jsx)("div", {
            className: "rockstargames-sites-gta-gen9bc50cd13f1f148dd0772d2a6eee8a913",
            "data-tag-style": n,
            children: a
          }) : t && i && i?.length > 0 ? (0, u.jsx)("div", {
            className: "rockstargames-sites-gta-gen9d4a1a1e4fc4c16138d3c879bc1864227",
            children: i.map((e => (0, u.jsx)(s.Badge, {
              ...e
            }, e?.text)))
          }) : null
        },
        f = {
          textOverlay: "rockstargames-sites-gta-gen9a9e47a446a239de8e5bd56e77308ddc8",
          content: "rockstargames-sites-gta-gen9d35747e86fd9b103a5160d7219f01856"
        },
        {
          LiteMotion: p,
          Animations: b
        } = s.framer,
        {
          variants: v,
          transitions: h
        } = b,
        k = e => {
          let {
            title: t,
            hasTag: a,
            tag: s,
            hasDescription: n,
            description: i,
            fadesOut: r = !1,
            badges: c
          } = e;
          return (0, u.jsx)(p, {
            initial: v.fade.out.initial,
            animate: {
              opacity: r ? 0 : 1
            },
            transition: h.fade,
            className: f.textOverlay,
            children: (0, u.jsxs)("div", {
              className: f.content,
              children: [(0, u.jsx)(g, {
                hasTag: a,
                tag: s,
                badges: c?.filter((e => e?.isPrimary))
              }), (0, u.jsx)("h3", {
                children: t
              }), n && i && (0, u.jsx)("div", {
                className: f.description,
                children: i
              })]
            })
          })
        },
        x = e => {
          let {
            title: t,
            showTitle: a = !0,
            showBackground: s = !0,
            tag: i,
            tagStyle: r,
            discountPrice: c,
            originalPrice: o,
            setPricingContainerHeight: l = null
          } = e;
          const d = (0, n.createRef)();
          return (0, n.useEffect)((() => {
            const e = () => {
              d.current && null !== l && l(d.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [d]), (0, u.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9f721d7192d3e29e64567a729fd8d5985",
            ref: d,
            "data-show-background": s,
            children: [a && (0, u.jsx)("span", {
              className: "rockstargames-sites-gta-gen9f390fe2c9338785ce412483a1bac624c",
              children: t
            }), (0, u.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9fc5ca7a7cb4da6745e4dbef89b12bfe8",
              children: [(0, u.jsx)("span", {
                className: "rockstargames-sites-gta-gen9b7ba435d2cec78951bdb0b812b098b72",
                "data-tag-style": r || "free",
                children: i
              }), (0, u.jsx)("span", {
                className: "rockstargames-sites-gta-gen9d8c7408e6335e53326bc70a1a065f81b",
                children: c
              }), (0, u.jsx)("span", {
                className: "rockstargames-sites-gta-gen9a3632910b63514f6b49539fe45bcccb6",
                children: o
              })]
            })]
          })
        };
      var y = a(17104),
        _ = a(65388),
        N = a(39336),
        S = a(96201),
        j = a(23124),
        w = a(91232),
        T = a(56644);
      const C = {
          ps5: N,
          ps4: _,
          ps: y,
          xboxone: j,
          xbox: w,
          xboxseriesxs: S,
          pc: T,
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
        },
        E = e => {
          let {
            title: t,
            showTitle: a = !0,
            showBackground: s = !0,
            platformOptions: i,
            setPricingContainerHeight: r = (() => {})
          } = e;
          const c = (0, n.createRef)();
          return (0, n.useEffect)((() => {
            const e = () => {
              c.current && null !== r && r(c.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [c]), (0, u.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9e754e3afc303a114f9e28e09c5519a30",
            ref: c,
            "data-show-background": s,
            children: [a && (0, u.jsx)("span", {
              className: "rockstargames-sites-gta-gen9fd98e3d7af2a583d4338d802666901a5",
              children: t
            }), i?.platformsAndLinks && (0, u.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9cbde4b9406c59131d6d4c8d9b2291a84",
              children: [(0, u.jsx)(g, {
                hasTag: i?._memoq?.platformTag,
                tag: i?._memoq?.platformTag,
                tagStyle: i?._memoq?.platformTagStyle
              }), (0, u.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b7de0e1798d1a020191fbe44b67f34d2",
                children: i.platformsAndLinks.map((e => {
                  let {
                    platform: t,
                    buttonText: a
                  } = e;
                  return (0, u.jsx)("img", {
                    className: "rockstargames-sites-gta-gen9aa5f852c8932dcf689a97496d437f13b",
                    alt: a,
                    src: C[t]
                  }, t)
                }))
              })]
            })]
          })
        },
        M = e => {
          let {
            textOverlayProps: t,
            title: a,
            size: s,
            expandedView: i = !1,
            children: r,
            pricingOptions: c,
            setPricingContainerHeight: o,
            isCoverCard: l = !1,
            platformOptions: d
          } = e;
          const [m] = (e => {
            let {
              hasTextOverlay: t,
              tag: a,
              collapsedHasTag: s,
              description: i,
              collapsedHasDescription: r,
              size: c,
              title: o,
              expandedView: l,
              badges: d
            } = e;
            const [m, g] = (0, n.useState)(null), f = (0, n.useMemo)((() => {
              if (!t) return null;
              const e = "sm" !== c && r;
              return (0, u.jsx)(k, {
                title: o,
                hasTag: s,
                tag: a,
                hasDescription: e,
                description: i,
                fadesOut: l,
                badges: d
              })
            }), [t, a, s, i, r, c, o, l, d]);
            return (0, n.useEffect)((() => {
              g(f)
            }), [f]), [m, g]
          })({
            ...t,
            size: s,
            title: a,
            expandedView: i
          }), g = void 0 !== c?.hasPricingOptions || null !== d;
          return (0, u.jsxs)("header", {
            className: "rockstargames-sites-gta-gen9c525342927ce11e37cc24e653e0ffc95",
            "data-is-covercard": l,
            "data-expanded-view": i,
            children: [n.Children.map(r, (e => (0, n.cloneElement)(e, {
              title: a,
              size: s,
              expandedView: i
            }))), m, g && (0, u.jsxs)(u.Fragment, {
              children: [!0 === d?.hasPlatformOptions && (0, u.jsx)(E, {
                title: a,
                platformOptions: d,
                pricingOptions: c,
                setPricingContainerHeight: o
              }), !0 === c?.hasPricingOptions && (0, u.jsx)(x, {
                title: a,
                tag: c?._memoq?.tag,
                tagStyle: c?._memoq?.tagStyle || "free",
                discountPrice: c?._memoq?.discountPrice,
                originalPrice: c?._memoq?.originalPrice,
                setPricingContainerHeight: o
              })]
            })]
          })
        },
        {
          LiteMotion: P,
          Animations: L
        } = s.framer,
        {
          transitions: I
        } = L,
        $ = e => {
          let {
            components: t,
            payload: a,
            prod: r,
            size: c,
            title: o,
            initial: f = "initial",
            animate: p = "animate",
            variants: b,
            type: v = null,
            context: h = null,
            textOverlayProps: k,
            className: y,
            children: _,
            theme: N = "none",
            cardIds: S,
            id: j,
            pricingOptions: w,
            pricingContainerHeight: T,
            isCoverCard: C,
            platformOptions: E,
            isProductCard: L = !1
          } = e;
          const $ = (0, n.useRef)(),
            D = (0, n.useRef)(),
            {
              tag: B,
              expandedHasTag: O,
              badges: H
            } = k;
          l().set(a, "meta.prod", r);
          const [, G] = (0, d.useSearchParams)(), [z, A] = (0, n.useState)(null), V = _?.props?.images.length > 0;
          let F = (0, u.jsx)("h1", {
            children: o
          });
          return C && (F = null), (0, n.useEffect)((() => {
            null !== z && z < S?.length && z > -1 && G({
              info: S[z]
            })
          }), [z, S]), (0, n.useEffect)((() => {
            S?.forEach(((e, t) => {
              e === j && A(t)
            }))
          }), [S, j]), (0, n.useEffect)((() => {
            const e = () => {
              $.current && $.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && ($.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, u.jsx)(m.DataLayerProvider, {
            card_id: j,
            card_name: o?.toLowerCase(),
            children: (0, u.jsx)(s.ScrollTracker, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === v ? $ : D,
              children: (0, u.jsxs)(P, {
                ref: $,
                initial: f,
                animate: p,
                variants: b.expanded,
                transition: I.cardOpen,
                className: (0, i.classList)("rockstargames-sites-gta-gen9dcb84dcfd34616fb0089133acf0c4669", y),
                "data-type": v,
                "data-size": c,
                "data-product": L,
                "data-covercard": C || !1,
                "data-context": h,
                style: {
                  "--product-card-pricing-info-height": `${T||0}px`
                },
                children: [V && (0, u.jsx)(M, {
                  size: c,
                  title: o,
                  textOverlayProps: k,
                  expandedView: !0,
                  pricingOptions: w,
                  platformOptions: E,
                  isCoverCard: C,
                  children: _
                }), (0, u.jsxs)(P, {
                  ref: D,
                  className: "rockstargames-sites-gta-gen9eaf357a8d0bae1199142949cbf24e7b9",
                  variants: b.expandedContents,
                  transition: I.afterCardOpen,
                  "data-theme": N,
                  children: [(0, u.jsxs)("div", {
                    className: "rockstargames-sites-gta-gen9fc0e079f7c184b912d5a46b037d01b0d",
                    children: [(0, u.jsx)(g, {
                      hasTag: O,
                      tag: B,
                      badges: H
                    }), F, L && (0, u.jsxs)(u.Fragment, {
                      children: [!0 === E?.hasPlatformOptions && (0, u.jsx)("div", {
                        className: "rockstargames-sites-gta-gen9b630c7c1f59f91f2ac304af525b6d081",
                        children: (0, u.jsx)(g, {
                          hasTag: E?.hasPlatformOptions,
                          tag: E?._memoq?.platformTag,
                          tagStyle: E?._memoq?.platformTagStyle
                        })
                      }), !0 === w?.hasPricingOptions && (0, u.jsx)(x, {
                        title: o,
                        showTitle: !1,
                        showBackground: !1,
                        tag: w?._memoq?.tag,
                        tagStyle: w?.tagStyle || "free",
                        discountPrice: w?._memoq?.discountPrice,
                        originalPrice: w?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, u.jsx)(i.TinaParser, {
                    components: t,
                    tina: {
                      payload: a
                    }
                  })]
                })]
              })
            })
          })
        };
      var D = a(98e3),
        B = a(42836);
      const O = e => {
          let {
            id: t,
            position: a,
            title: s,
            size: i = "md",
            sectionTitle: r = "",
            expandedType: c = null,
            modalProps: o = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: l,
            children: m,
            isProductCard: g,
            cardIds: f = null,
            theme: p = "none",
            isCoverCard: b
          } = e;
          const [v, h] = (0, d.useSearchParams)(), k = (0, n.useRef)(null), [, x] = (0, D.i)(), {
            track: y
          } = (0, B.useGtmTrack)(), [_, N] = (0, n.useState)(!1), S = () => {
            N(!1), x(null), h({}), y({
              event: "trackPageview"
            })
          }, j = () => {
            if (!o?.content || !k.current || !c || "linkout" === c) return;
            const e = k.current,
              n = window.getComputedStyle(e),
              r = parseInt(n.getPropertyValue("width"), 10),
              l = parseInt(n.getPropertyValue("height"), 10),
              d = e.getBoundingClientRect(),
              {
                content: m,
                className: u,
                contentClassName: g
              } = o,
              b = "fob" === i ? "fob" : "default";
            x({
              content: m,
              onClose: S,
              rect: d,
              width: r,
              height: l,
              className: u,
              contentClassName: g,
              fadeIn: !1,
              cardIds: f,
              theme: p,
              gtm: {
                event_label: s?.toLowerCase(),
                card_id: t,
                card_name: s?.toLowerCase(),
                position: a
              },
              aspectRatio: b,
              cardDimensions: {
                size: i,
                type: c
              }
            }), y({
              event: "trackPageview",
              link_url: window.location.href,
              card_id: t,
              card_name: s?.toLowerCase(),
              position: a
            })
          }, w = e => {
            b && "button" !== e.target.type || "linkout" !== c && (e.preventDefault(), e.stopPropagation(), t ? h({
              info: t
            }) : j(), y({
              event: "card_click",
              event_category: "card",
              event_action: "click",
              event_label: r?.toLowerCase(),
              position: a,
              card_id: t,
              card_name: s?.toLowerCase(),
              link_url: window.location.href
            }))
          };
          return (0, n.useEffect)((() => {
            _ && j()
          }), [_]), (0, n.useEffect)((() => {
            N(v.get("info") === t)
          }), [v.get("info"), t]), (0, u.jsx)("div", {
            ref: k,
            onClick: w,
            onKeyUp: e => {
              (e => {
                "Enter" === e.code && w(e)
              })(e)
            },
            className: l,
            "data-size": i,
            "data-type": c,
            "data-product": g,
            role: "button",
            tabIndex: "linkout" !== c ? 0 : -1,
            "aria-label": s,
            children: m
          })
        },
        H = {
          pillBtn: "rockstargames-sites-gta-gen9ebdcdd73cdde7ce5626490066de01474",
          selected: "rockstargames-sites-gta-gen9d058244e6f29505e3c05558039370b54",
          card: "rockstargames-sites-gta-gen9c2685d1ff8cc088bfef4c336b1a9f8ae",
          content: "rockstargames-sites-gta-gen9e268650dd5a86c01be62eeb552b4e54b",
          expandedContent: "rockstargames-sites-gta-gen9d19c433e20935d6b1eebff53baa04bb1",
          text: "rockstargames-sites-gta-gen9beee7d7b941675acb2b6b9bf5caf4f33",
          imageHolder: "rockstargames-sites-gta-gen9c823ac57eab14be16dd87e168e610d4f",
          coverCardWrapper: "rockstargames-sites-gta-gen9ef72671ab95bb9290b80637cb3073d29"
        },
        G = e => {
          let {
            payload: t,
            prod: a,
            images: r,
            size: o,
            title: l,
            initial: d,
            animate: m,
            variants: g,
            id: f,
            position: p,
            sectionTitle: b,
            expandedType: v,
            context: h,
            children: k,
            expandedCardContents: x,
            textOverlayProps: y = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            deckProps: _ = {},
            modalProps: N = [],
            theme: S,
            cardIds: j,
            pricingOptions: w,
            platformOptions: T = null,
            pricingContainerHeight: C,
            isCoverCard: E = !1,
            isProductCard: M = !1
          } = e;
          const P = (0, i.useTinaComponents)(),
            L = (0, n.useMemo)((() => ({
              ...P,
              HTMLElement: s.HTMLElement,
              ImageWithBadge: s.ImageWithBadge,
              Carousel: s.Carousel,
              GroupOfItems: c()
            })), [P]),
            I = (0, n.useMemo)((() => (0, u.jsx)($, {
              type: v,
              components: L,
              payload: t,
              prod: a,
              images: r,
              size: o,
              title: l,
              context: h,
              textOverlayProps: y,
              initial: d,
              animate: m,
              variants: g,
              theme: S,
              cardIds: j,
              pricingOptions: w,
              id: f,
              pricingContainerHeight: C,
              isCoverCard: E,
              platformOptions: T,
              isProductCard: M,
              children: x
            })), [v, r, a, o, l, y, x, d, m, g, L, t, M]),
            D = [H.card, E ? H.coverCardWrapper : ""].join(" ");
          return (0, u.jsx)(O, {
            id: f,
            position: p,
            sectionTitle: b,
            title: l,
            size: o,
            expandedType: v,
            images: r,
            deckProps: _,
            modalProps: {
              content: I,
              ...N
            },
            className: D,
            isProductCard: M,
            cardIds: j,
            theme: S,
            isCoverCard: E,
            children: k
          })
        };
      var z = a(45652);
      const A = {
          layeredImageFrame: "rockstargames-sites-gta-gen9f4291aa18340b383f772137ec9e0c582",
          layered: "rockstargames-sites-gta-gen9f48bca962431b0e1cbf30e25dfb23979",
          foreground: "rockstargames-sites-gta-gen9b52f487de5963cf5eab84e86c244302b",
          imageMask: "rockstargames-sites-gta-gen9f55d22ef90c565718cad7bf6387893a7",
          logo: "rockstargames-sites-gta-gen9fa6e98cbad19c314e5759f3aa0a2f9b3",
          "sm-horizontal": "rockstargames-sites-gta-gen9b496d31814195834a5e84fa5157ede59"
        },
        {
          LiteMotion: V,
          Animations: F
        } = s.framer,
        {
          getVariant: R,
          variants: W,
          transitions: q
        } = F,
        U = e => {
          let {
            image: t,
            i: a,
            prod: s
          } = e;
          const {
            alt: n,
            src: i
          } = (0, z.useImageParser)({
            ...t,
            prod: s
          });
          return (0, u.jsx)("img", {
            src: i.mobile,
            alt: n ?? "",
            style: {
              "--z-index": a
            }
          })
        },
        K = e => {
          let {
            images: t = [],
            className: a = "",
            prod: s = !1,
            expandedView: r = !1,
            style: c = {}
          } = e;
          const [o, l] = (0, n.useState)({
            height: window.innerHeight,
            width: window.innerWidth
          });
          (0, n.useEffect)((() => {
            function e() {
              l({
                height: window.innerHeight,
                width: window.innerWidth
              })
            }
            return window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [o]);
          const d = (0, n.useMemo)((() => t?.length && 0 !== t.length ? t.map((e => (0, u.jsx)(V, {
            className: (0, i.classList)(A[e?.specialClass] ?? A.imageMask, A[e?.sizeClass], e?.className),
            variants: R(e?.specialClass ?? "imageMask", r ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: q.cardOpen,
            children: (0, u.jsx)(U, {
              image: e,
              prod: s
            })
          }, e.key))) : null), [t, o, r, s]);
          return (0, u.jsx)(V, {
            className: (0, i.classList)(A.layeredImageFrame, t.length > 1 ? A.layered : A.flat, a),
            style: c,
            initial: W.fade.in.initial,
            animate: W.fade.in.animate,
            transition: q.instantFade,
            "data-expanded-view": r,
            children: d
          })
        },
        Q = e => {
          let {
            expandedType: t,
            to: a,
            children: n,
            style: i,
            sectionTitle: r = "",
            id: c,
            cardTitle: o,
            position: l
          } = e;
          const {
            track: d
          } = (0, B.useGtmTrack)();
          return "linkout" === t && a ? (0, u.jsx)(s.A, {
            to: a,
            style: i,
            target: a?.startsWith("http") ? "_blank" : "_self",
            onClick: () => d({
              event: "card_click",
              event_action: "click",
              event_category: "card",
              event_label: r,
              link_url: a,
              card_id: c,
              card_name: o,
              element_placement: r,
              position: l
            }),
            children: n
          }) : n
        },
        Y = {
          pillBtn: "rockstargames-sites-gta-gen9c484e5a1bcbdd4b338bd6fe49900d6cf",
          selected: "rockstargames-sites-gta-gen9d65c523327b32d2de08dc996cf9d7071",
          customModalContent: "rockstargames-sites-gta-gen9c0a9f620e5c9749f0eebe506acda4122",
          content: "rockstargames-sites-gta-gen9cebbc72d1229514723b9d664281b472f"
        },
        {
          variants: X
        } = s.framer.Animations,
        J = e => {
          let {
            id: t,
            title: a,
            content: s,
            size: r = "md",
            expandedType: c = "short",
            textOverlayProps: o = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: l = [],
            deckProps: d = {},
            to: m = null,
            tina: g = {},
            position: f = 0,
            sectionTitle: p = "",
            theme: b,
            pricingOptions: v,
            cardIds: h,
            platformOptions: k = null
          } = e;
          const x = (0, i.useTinaPayload)(),
            y = g?.payload?.meta?.cdn ?? x?.meta?.prod ?? !1,
            [_, N] = (0, n.useState)(d?.size ?? r),
            [S, j] = (0, n.useState)(0),
            w = void 0 !== v?.hasPricingOptions || void 0 !== k?.hasPlatformOptions;
          return (0, n.useEffect)((() => {
            N(d?.size ?? r)
          }), [d?.size, r]), (0, u.jsx)(G, {
            id: t,
            title: a,
            size: _,
            expandedType: c,
            images: l,
            deckProps: d,
            prod: y,
            payload: {
              content: s,
              meta: {}
            },
            variants: X.plainCard,
            textOverlayProps: o,
            modalProps: {
              className: Y.customModal,
              contentClassName: Y.customModalContent
            },
            expandedCardContents: (0, u.jsx)(K, {
              images: l,
              prod: y,
              expandedView: !0
            }),
            position: f,
            sectionTitle: p,
            theme: b,
            cardIds: h,
            pricingOptions: v,
            platformOptions: k,
            pricingContainerHeight: S,
            isProductCard: w,
            children: (0, u.jsx)(Q, {
              expandedType: c,
              to: m,
              sectionTitle: p,
              id: t,
              cardTitle: a,
              position: f,
              children: (0, u.jsx)("div", {
                className: Y.content,
                "data-product": w,
                children: (0, u.jsx)(M, {
                  title: a,
                  size: _,
                  textOverlayProps: o,
                  pricingOptions: v,
                  platformOptions: k,
                  setPricingContainerHeight: j,
                  children: (0, u.jsx)(K, {
                    images: l,
                    prod: y
                  })
                })
              })
            })
          })
        },
        {
          variants: Z
        } = s.framer.Animations;
      var ee = a(33052),
        te = a(95660),
        ae = a(41272),
        se = a(55120);
      const ne = {
          pillBtn: "rockstargames-sites-gta-gen9a50fca350d7dbc4340ad3c68f1da1960",
          selected: "rockstargames-sites-gta-gen9e6487295119cf4eafefadf26f76ed1f8",
          customModalContent: "rockstargames-sites-gta-gen9f17bd90d5d11d511cc583e09ef7ea01e",
          content: "rockstargames-sites-gta-gen9f11fa0818c5163565a0058b6a7aa2505",
          secondary: "rockstargames-sites-gta-gen9e8fd74f0c0a6e9b8855e4bd971e7bba8",
          logo: "rockstargames-sites-gta-gen9c1524e116e11607f62a2d93b0b2e32bc"
        },
        {
          variants: ie
        } = s.framer.Animations,
        re = e => {
          let {
            id: t,
            logoImage: a = null,
            title: s,
            titleSizeClass: r = null,
            content: c,
            size: o = "md",
            expandedType: l = "short",
            textOverlayProps: d = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: m = [],
            deckProps: g = {},
            to: f = null,
            tina: p = {},
            cardIds: b,
            theme: v
          } = e;
          const h = (0, i.useTinaPayload)(),
            k = p?.payload?.meta?.cdn ?? h?.meta?.prod ?? !1,
            [x, y] = (0, n.useState)(g?.size ?? o),
            _ = (0, i.useGetCdnSource)(a ?? null);
          let N = null;
          return h.content && (N = h?.content[0]?._memoq ? h?.content[0]?._memoq?.body : null), (0, n.useEffect)((() => {
            y(g?.size ?? o)
          }), [g?.size, o]), (0, u.jsx)(G, {
            id: t,
            title: s,
            size: x,
            expandedType: l,
            images: m,
            deckProps: g,
            prod: k,
            payload: {
              content: c,
              meta: {}
            },
            variants: ie.plainCard,
            textOverlayProps: d,
            modalProps: {
              className: ne.customModal,
              contentClassName: ne.customModalContent
            },
            expandedCardContents: (0, u.jsx)(K, {
              images: m,
              prod: k,
              expandedView: !0
            }),
            theme: v,
            cardIds: b,
            isCoverCard: !0,
            children: (0, u.jsx)(Q, {
              expandedType: l,
              to: f,
              children: (0, u.jsxs)("div", {
                className: ne.content,
                children: [a && (0, u.jsx)("img", {
                  className: ne.logo,
                  alt: "logo",
                  src: _
                }), (0, u.jsx)("h2", {
                  className: r,
                  children: s
                }), null !== N && (0, u.jsx)("p", {
                  children: N
                }), (0, u.jsx)("button", {
                  type: "button",
                  children: (0, u.jsx)(ae.FormattedMessage, {
                    ...se.card.card_learn_more
                  })
                })]
              })
            })
          })
        },
        ce = e => {
          let {
            images: t,
            title: a,
            expandedView: i,
            variants: r,
            transition: c
          } = e;
          const o = (0, n.useMemo)((() => t && 0 !== t?.length ? t.map((e => e?.image?.sources ? (0, u.jsx)(s.ImageWithBadge, {
            ...e,
            style: {
              "--object-position": e?.objectPosition ?? ""
            }
          }) : null)) : null), [t]);
          return !o?.length || o?.length < 1 ? null : 1 === o.length ? o : (0, u.jsx)(s.ThumbsGallery, {
            slideChildren: o,
            title: a,
            navigation: i,
            thumbsVisible: i,
            spaceBetween: 0,
            variants: r,
            transition: c
          })
        },
        oe = {
          pillBtn: "rockstargames-sites-gta-gen9d13aae72f49e86630d46fa6e54e1fbdc",
          selected: "rockstargames-sites-gta-gen9bcc7bd9d9a43edf197cc46795d57249b",
          customModalContent: "rockstargames-sites-gta-gen9ceeb11e5fc712f410c8c4879663640ef"
        },
        {
          transitions: le,
          variants: de
        } = s.framer.Animations,
        me = e => {
          let {
            id: t,
            title: a,
            content: s,
            size: r = "md",
            expandedType: c = "gallery",
            textOverlayProps: o = {
              hasTextOverlay: !1,
              tag: "",
              collapsedHasTag: !1,
              expandedHasTag: !1,
              description: "",
              collapsedHasDescription: !1
            },
            images: l = [],
            deckProps: d = {},
            tina: m = {},
            payload: g,
            position: f = 0,
            sectionTitle: p = "",
            cardIds: b
          } = e;
          const v = (0, i.useTinaPayload)(),
            h = g ?? v,
            k = m?.payload?.meta?.cdn ?? h?.meta?.prod ?? !1,
            x = ((e, t) => e?.map((e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: t
              }
            } : e)))(l, k),
            [y, _] = (0, n.useState)(d?.size ?? r),
            {
              parent: N,
              main: S,
              thumbs: j
            } = de?.cardWithImageGallery?.gallery ?? {};
          return (0, n.useEffect)((() => {
            _(d?.size ?? r)
          }), [d?.size, r]), (0, u.jsx)(G, {
            id: t,
            position: f,
            sectionTitle: p,
            payload: {
              content: s,
              meta: {},
              payload: h
            },
            title: a,
            size: y,
            expandedType: c,
            images: x,
            deckProps: d,
            prod: k,
            variants: de.cardWithImageGallery,
            textOverlayProps: o,
            modalProps: {
              className: oe.customModal,
              contentClassName: oe.customModalContent
            },
            expandedCardContents: (0, u.jsx)(ce, {
              images: x,
              title: a,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: N,
                main: S,
                thumbs: j
              },
              transition: {
                parent: le.cardOpen,
                main: le.cardOpen,
                thumbs: le.cardOpen
              }
            }),
            cardIds: b,
            children: (0, u.jsx)("div", {
              className: oe.content,
              children: (0, u.jsx)(M, {
                title: a,
                size: y,
                textOverlayProps: o,
                children: (0, u.jsx)(ce, {
                  images: x,
                  title: a,
                  navigation: !1,
                  thumbsVisible: !1
                })
              })
            })
          })
        },
        ue = e => {
          let {
            title: t,
            content: a,
            size: n = "md",
            badgeText: r
          } = e;
          const c = {
            ...(0, i.useTinaComponents)(),
            HTMLElement: s.HTMLElement,
            UnorderedList: s.UnorderedList,
            ListItem: s.ListItem
          };
          return (0, u.jsx)("div", {
            className: "rockstargames-sites-gta-gen9d392587df58204b0910e721ef1f3c35c",
            "data-size": n,
            children: (0, u.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9a002b98d034f1897c7e1f31327ff08dc",
              children: [r && (0, u.jsx)("div", {
                className: "rockstargames-sites-gta-gen9d9901d1bb91e1fbc1e857964083fe496",
                children: r
              }), (0, u.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9bea322f6e3afa31355668ad164496730",
                children: [t && (0, u.jsx)("h3", {
                  children: t
                }), (0, u.jsx)(i.TinaParser, {
                  components: c,
                  tina: {
                    payload: {
                      content: a
                    }
                  }
                })]
              })]
            })
          })
        },
        {
          Gen9CoreCarousel: ge,
          framer: fe,
          useTinaModuleFetchByIds: pe,
          withSimpleErrorBoundary: be
        } = s,
        ve = {
          Card: J,
          CardWithImageGallery: me,
          TextCard: ue,
          ...s
        },
        he = fe.withFadeIn(be((e => {
          let {
            cards: t = [],
            size: a,
            title: s,
            description: r,
            customSlidesPerView: c = null,
            theme: o = "none",
            cardSizeBreakpoints: m = {},
            customAspectRatio: g = "3/1",
            titleBadge: f = null
          } = e;
          const p = (0, n.useRef)(null),
            b = l().map(t, "id"),
            v = pe({
              ids: b
            }),
            [h, k] = (0, n.useState)(c),
            [x] = (0, d.useSearchParams)(),
            [y, _] = (0, n.useState)(!1);
          (0, n.useEffect)((() => {
            if ("fob" === a) {
              const e = x.get("section");
              if (e && "games" === e && !y && (_(!0), p.current)) {
                const e = 100;
                window.scrollTo(0, p.current.offsetTop - e)
              }
            }
          }), []), (0, n.useEffect)((() => {
            if (!p.current) return;
            const e = () => {
              const e = c || window.getComputedStyle(p.current).getPropertyValue("--slides-per-view");
              k(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }));
          const N = (0, n.useMemo)((() => {
            let e = 0;
            return v ? v.reduce(((t, n) => {
              if (n) {
                const {
                  id: r,
                  tina: c
                } = n, d = l().clone(c);
                l().set(d, "payload.meta.id", r), t.push((0, u.jsx)(i.TinaParser, {
                  components: ve,
                  tina: d,
                  componentProps: {
                    deckProps: {
                      size: a
                    },
                    tina: d,
                    id: r,
                    position: e,
                    sectionTitle: s,
                    theme: o,
                    cardIds: b
                  }
                }, r)), e += 1
              }
              return t
            }), []) : null
          }), [v, a]);
          return (0, u.jsx)("div", {
            className: "rockstargames-sites-gta-gen9caf46db6464a84ad4990aed75ef74ff1",
            "data-theme": o,
            ref: p,
            children: (0, u.jsx)(ge, {
              description: r,
              size: a,
              cardSizeBreakpoints: m,
              slideChildren: N,
              title: s,
              customSlidesPerView: h,
              customAspectRatio: g,
              titleBadge: f
            })
          })
        })));
      var ke = a(13196),
        xe = a(69760),
        ye = a.n(xe);
      const _e = (e, t) => {
          let a = getComputedStyle(e).getPropertyValue(t);
          return a = a.replace("px", "").replace("rem", "").replace("em", ""), a = a.replace("vh", "").replace("vw", "").replace("vmin", "").replace("vmax", ""), a = a.replace("ms", "").replace("s", ""), Number(a)
        },
        Ne = e => ({
          x: void 0 !== e.changedTouches ? e.changedTouches[0].screenX : e.screenX,
          y: void 0 !== e.changedTouches ? e.changedTouches[0].screenY : e.screenY
        }),
        Se = e => e.scrollHeight > e.clientHeight;

      function je(e, t) {
        const a = {
          ...e
        };
        return l().forOwn(e, ((e, s) => {
          if ("image" === s) {
            const e = a[s];
            a[s] = {
              ...e,
              prod: t
            }
          } else l().isObject(e) && !l().isArray(e) ? je(e, t) : l().isArray(e) && (a[s] = e.map((e => l().isObject(e) ? je(e, t) : e)))
        })), a
      }
      const we = (0, m.withTranslations)((e => {
          let {
            active: t,
            styles: a,
            title: r,
            itemNumber: c,
            inModalMode: o,
            openModalMode: l,
            element: d,
            upNext: m,
            mobileMode: g,
            refDeck: f,
            components: p,
            tina: b,
            prevPage: v,
            nextPage: h,
            transitionStyle: k,
            selectedItemNumber: x,
            carouselTitle: y,
            sharedDraggingDelta: _,
            setSharedDraggingDelta: N
          } = e;
          const S = (0, ae.useIntl)(),
            {
              track: j
            } = (0, B.useGtmTrack)(),
            w = (0, n.createRef)(),
            T = (0, n.createRef)(),
            C = (0, n.createRef)(),
            E = (0, n.createRef)(),
            M = (0, n.createRef)(),
            [P, L] = (0, n.useState)(!1),
            [I, $] = (0, n.useState)(0),
            [D, O] = (0, n.useState)(0),
            [H, G] = (0, n.useState)(0),
            [A, V] = (0, n.useState)(0),
            [F, R] = (0, n.useState)(0),
            [W, q] = (0, n.useState)(!1),
            [U, K] = (0, n.useState)(0),
            [Q, Y] = (0, n.useState)(0),
            [X, J] = (0, n.useState)(0),
            [Z, ee] = (0, n.useState)("700"),
            [te, ne] = (0, n.useState)(-1),
            [ie, re] = (0, n.useState)(0),
            [ce, oe] = (0, n.useState)(0),
            [le, de] = (0, n.useState)(0),
            [me, ue] = (0, n.useState)(!1),
            [ge, fe] = (0, n.useState)(""),
            [pe, be] = (0, n.useState)(null),
            [ve, he] = (0, n.useState)(!1),
            [ke, xe] = (0, n.useState)(null),
            [we, Te] = (0, n.useState)(!1),
            [Ce, Ee] = (0, n.useState)(!1),
            Me = (0, i.useTinaPayload)(),
            Pe = b?.payload?.meta?.cdn ?? !1 ?? Me?.meta?.prod ?? !1,
            Le = (0, i.useTranslations)({
              payload: b?.payload,
              variables: b?.variables
            }),
            Ie = Le?.meta ?? {},
            $e = je(Le?.content?.[0], Pe),
            De = (0, n.useMemo)((() => $e?.images?.[0]?.image?.badge), [$e]),
            Be = (0, n.useMemo)((() => $e.title ?? r ?? Ie?.title), [r, Ie?.title, $e.title]),
            Oe = (0, z.useImageParser)({
              alt: $e?.images?.[0]?.image?.alt ?? "",
              ariaLabel: $e?.images?.[0]?.image?.alt ?? "",
              sources: $e?.images?.[0]?.image?.sources ?? [],
              prod: Pe
            }),
            He = Oe?.src?.mobile ?? Oe?.src?.desktop ?? !1,
            Ge = (0, n.useMemo)((() => Ie?.foreignId), [Ie]),
            ze = (0, n.useMemo)((() => Ie?.foreignTitle), [Ie]),
            [Ae, Ve] = (0, n.useState)(0),
            [Fe, Re] = (0, n.useState)(0),
            [We, qe] = (0, n.useState)(0),
            [Ue, Ke] = (0, n.useState)(0),
            [Qe, Ye] = (0, n.useState)(!1),
            [Xe, Je] = (0, n.useState)(0),
            [Ze, et] = (0, n.useState)(20),
            [tt, at] = (0, n.useState)(null),
            [st, nt] = (0, n.useState)(!1),
            it = (0, n.useCallback)((e => {
              if (!0 === W || !o && !g || ve) return;
              const t = Ne(e);
              Ve(t.x), Re(t.y)
            }), [W, o]),
            rt = e => {
              it(e)
            },
            ct = e => {
              if (!0 === W || 0 === Ae || !o && !g || ve) return;
              const t = Ne(e),
                a = t.x > Ae ? 1 : -1,
                s = Math.abs(Ae - t.x);
              o && !g && s > Ze ? (nt(!0), fe(a > 0 ? "prev" : "next"), lt()) : (Ye(!0), Je(s * a), N(s * a))
            },
            ot = e => {
              if (!0 === W || !o && !g || ve) return;
              const t = Ne(e),
                a = t.x > Ae ? 1 : -1,
                s = Math.abs(Ae - t.x),
                n = Math.abs(Fe - t.y);
              o && !g ? (lt(), fe("")) : s > Ze && n < 25 ? (nt(!0), fe(a > 0 ? "prev" : "next"), lt()) : lt()
            },
            lt = () => {
              q(!0), Ve(0), Re(0), Ye(!1), Je(0), N(0)
            };
          return (0, n.useEffect)((() => {
            let e = U;
            P ? e = 0 : o && !g && (e = U), $(e)
          }), [P, g, o, D, A, Q, X, H, U]), (0, n.useEffect)((() => {
            L(!(!o || !g))
          }), [o, g]), (0, n.useEffect)((() => {
            o && t && j({
              event: "virtualPageview",
              display_type: g ? "mobile" : "desktop",
              view_name: `${Ge}/${Be}`,
              source_content_id: Ge,
              source_content_name: ze
            })
          }), [o, t]), (0, n.useEffect)((() => {
            const e = ye()(((e, t) => {
              let a = 18;
              if (e?.documentElement && (a = _e(e?.documentElement, "--root-font-size")), ce !== t.innerHeight && oe(t.innerHeight), f?.current) {
                J(_e(f.current, "--eventDeck-marginSm") * a);
                const e = a * _e(f?.current, "--eventDeck-modalGutters"),
                  s = t?.innerWidth,
                  n = s - 2 * e;
                O(n), E.current && g && G(n), V(_e(f.current, "--eventDeck-itemSize") * a), de(_e(f.current, "--eventDeck-phaseOneTransitionDuration"));
                const i = _e(f?.current, "--eventDeck-itemImageTitleMargins") * a,
                  r = T?.current?.clientHeight,
                  c = r + i;
                Number.isNaN(c) || K(c), re(_e(f?.current, "--eventDeck-headerHeight") * a)
              }
              let s = Math.min(700, t.innerWidth);
              g || (s = 900), ee(`${s}`)
            }), 300);
            return window.addEventListener("resize", (() => {
              e(document, window)
            })), e(document, window), () => {
              window.removeEventListener("resize", (() => {
                e(document, window)
              }))
            }
          }), [f, g]), (0, n.useEffect)((() => {
            if (w.current) {
              const e = w.current.clientHeight;
              Number.isNaN(e) || Y(e)
            }
          }), [w]), (0, n.useEffect)((() => {
            if (o && g && E.current && (E.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !o && g && E.current) {
              const e = 228 / D;
              E.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
            }!g && E.current && (E.current.style.transform = null)
          }), [o, g, D, H]), (0, n.useEffect)((() => {
            const e = .5 * D,
              t = ce - ie - 3 * X;
            R(D - (e < t ? e : t))
          }), [D, X, ce]), (0, n.useEffect)((() => {
            "next" === ge ? (h(null, !0), fe("")) : "prev" === ge && (v(null, !0), fe(""))
          }), [ge]), (0, n.useEffect)((() => {
            qe(0), Ke(0)
          }), [g]), (0, n.useEffect)((() => {
            g ? et(o ? 35 : 20) : o && et(50)
          }), [o, g]), (0, n.useEffect)((() => {
            let e = [],
              t = 0,
              s = 0;
            if (null !== a?.transform) {
              e = a.transform.split(",");
              const n = e[0].split("(");
              t = Number(n[1].replace("px", "")), qe(t), s = Number(e[1].replace("px", "")), Ke(s)
            }
          }), [a]), (0, n.useEffect)((() => {
            if (!W) return;
            clearTimeout(pe);
            const e = setTimeout((() => {
              q(!1), Ve(0)
            }), 200);
            be(e)
          }), [W, 200]), (0, n.useEffect)((() => {
            if (!st) return;
            clearTimeout(tt);
            const e = setTimeout((() => {
              nt(!1)
            }), 1e3);
            at(e)
          }), [st]), (0, n.useEffect)((() => {
            o && clearTimeout(te), setTimeout((() => {
              ue(!me)
            }), le)
          }), [o]), (0, n.useEffect)((() => (document.body.addEventListener("mouseleave", lt), () => {
            document.body.removeEventListener("mouseleave", lt)
          })), []), (0, n.useEffect)((() => {
            M.current ? Te(Se(M.current)) : Te(!1), void 0 !== d && d.current ? Ee(Se(d.current)) : Ee(!1)
          }), [d, M, t, o, me]), $e ? (0, u.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9c4090652e3c0a4e1979bb0a36b22b7cd",
            ref: d,
            "data-item-position": c,
            "data-modal-mode": o,
            "data-active-item": t,
            "data-up-next": m,
            "data-transition": Qe || 0 !== _ ? "none" : k,
            "data-scrollable": Ce,
            style: {
              ...a,
              transform: o && t && !g ? `translate3d(${We+Xe}px, ${Ue}px, 0)` : g && !o ? `translate3d(${We+_}px, ${Ue}px, 0)` : a?.transform
            },
            onClick: e => {
              st || (o ? o && !g && (c < x ? v(e, !0) : c > x && h(e, !0)) : l(e))
            },
            onMouseEnter: () => {
              o || L(!0), o || g || (clearTimeout(te), ne(setTimeout((() => {
                j({
                  event: "card_title_hover",
                  event_category: "card",
                  event_action: "title_hover",
                  event_label: y,
                  card_name: Be,
                  card_id: c,
                  position: c,
                  view_name: `${Ge}/${ze}`,
                  source_content_id: Ge,
                  source_content_name: ze
                })
              }), 1e3)))
            },
            onMouseLeave: () => {
              o || L(!1), o || g || clearTimeout(te)
            },
            onTouchStart: rt,
            onTouchMove: ct,
            onTouchEnd: ot,
            onMouseDown: rt,
            onMouseMove: ct,
            onMouseUp: ot,
            onKeyUp: e => {
              "Enter" === e.key && (o || l(e))
            },
            tabIndex: o ? -1 : 0,
            "aria-label": o ? S.formatMessage(se.card.events_deck_modal_group_label) : "",
            role: o ? "dialog" : "presentation",
            children: [(0, u.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9b9c878efb14d25c323e95f01b7a53460",
              "data-full-header": P,
              ref: C,
              style: {
                height: o && g ? `${D}px` : null,
                width: o && g ? `${D}px` : null
              },
              children: [He && (0, u.jsx)("img", {
                ref: E,
                src: `${Oe?.src?.mobile??Oe?.src?.desktop}?im=Resize,width=${Z}`,
                alt: Oe?.alt,
                style: {
                  width: 0 !== H && g ? `${H}px` : null,
                  height: 0 !== H && g ? `${H}px` : null
                }
              }), (0, u.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9ba8c09e500ea0845dc20d380e8ec11ca",
                style: {
                  transform: !g || g && o ? `translate3d(0, ${I}px, 0)` : null
                },
                children: [De && (0, u.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9cbbb0470197acdc4f0ec1f567f5c8a42",
                  ref: w,
                  children: (0, u.jsx)(s.Badge, {
                    text: De
                  })
                }), (0, u.jsx)("span", {
                  className: "rockstargames-sites-gta-gen9aca2b0fbf7c1dbcbf99e53812b9abc8e",
                  ref: T,
                  "aria-hidden": o,
                  children: Be
                })]
              })]
            }), (0, u.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9e7defd080518d58f00f72ccc94df53aa",
              ref: M,
              "aria-hidden": !o,
              onScroll: () => {
                he(!0), lt(), clearTimeout(ke);
                const e = setTimeout((() => {
                  he(!1)
                }), 100);
                xe(e)
              },
              style: {
                top: o && g ? `${D}px` : null,
                width: o && !g && t ? `${F}px` : null,
                touchAction: we || g ? "unset" : "none"
              },
              children: [Be && (0, u.jsx)("span", {
                className: "rockstargames-sites-gta-gen9a8fbffe55d92fc2f04e5e6b8f9267206",
                children: Be
              }), (0, u.jsx)("div", {
                className: "rockstargames-sites-gta-gen9e20bd8af5d67954447804e0e21161d3b",
                children: (0, u.jsx)(i.TinaParser, {
                  components: p,
                  tina: {
                    meta: Ie,
                    payload: {
                      content: $e?.content
                    }
                  }
                })
              })]
            })]
          }) : null
        })),
        Te = "rockstargames-sites-gta-gen9bb65eb1ac15ed189c1a9f6700276efc0",
        Ce = e => {
          let {
            prevPage: t,
            prevBtnDisabled: a,
            nextPage: s,
            nextBtnDisabled: n,
            selectedItemNumber: i,
            itemsData: r,
            closeModalMode: c,
            inModalMode: o,
            controlsHidden: l
          } = e;
          const d = (0, ae.useIntl)();
          return (0, u.jsxs)(u.Fragment, {
            children: [(0, u.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9dc99156537faf101b73515aaa7d6da2b",
              "aria-hidden": l || "false",
              children: [(0, u.jsx)("button", {
                className: Te,
                type: "button",
                onClick: t,
                disabled: a,
                "aria-label": o ? d.formatMessage(se.card.events_deck_modal_previous_aria_label) : d.formatMessage(se.card.events_deck_previous_aria_label)
              }), (0, u.jsxs)("span", {
                className: "rockstargames-sites-gta-gen9a94a647e9943db9c97ae87c8c6a162cd",
                "aria-hidden": !o,
                "aria-label": d.formatMessage(se.card.events_deck_paging_label, {
                  currentPage: i + 1,
                  totalPages: r.length
                }),
                children: [i + 1, (0, u.jsx)("span", {
                  className: "rockstargames-sites-gta-gen9fd027fcea9fd167b666599be78ab4f53"
                }), r.length]
              }), (0, u.jsx)("button", {
                className: Te,
                type: "button",
                onClick: s,
                disabled: n,
                "aria-label": o ? d.formatMessage(se.card.events_deck_modal_next_aria_label) : d.formatMessage(se.card.events_deck_next_aria_label)
              })]
            }), (0, u.jsx)("button", {
              className: "rockstargames-sites-gta-gen9d43b6cdcbcc07082edacd9a7cb1598c5",
              type: "button",
              onClick: c,
              "aria-label": d.formatMessage(se.card.events_deck_modal_close_label),
              "aria-hidden": !o,
              tabIndex: o ? 0 : -1
            })]
          })
        };
      var Ee = a(5800),
        Me = a.n(Ee),
        Pe = a(23397),
        Le = a.n(Pe),
        Ie = a(73300),
        $e = a(26352),
        De = a(71584),
        Be = a(41136),
        Oe = a(23292),
        He = a(22904),
        Ge = a(72256),
        ze = a(25992),
        Ae = a(3736),
        Ve = a(58960),
        Fe = a(47276),
        Re = a(42172);
      const We = {
          CalloutSection: s.CalloutSection,
          Card: J,
          CardWithImageGallery: me,
          ConditionalBlock: s.ConditionalBlock,
          CoverCard: re,
          DiscoveryCallout: $e.c,
          EventsDeck: e => {
            const {
              setBodyIsScrollable: t
            } = (0, m.useBodyScrollable)(), {
              title: a
            } = e, {
              track: r
            } = (0, B.useGtmTrack)(), [o, d] = (0, n.useState)(!1), g = (() => {
              const {
                data: e
              } = (0, ee.useQuery)(te.TinaModulesList, {
                variables: {
                  type: "gtao-event-card",
                  orderBy: "priority",
                  orderDirection: "desc"
                }
              }), t = e?.tinaModulesList?.results, a = l().map(t, "id");
              return (0, s.useTinaModuleFetchByIds)({
                ids: a
              })
            })(), [f, p] = (0, n.useState)([]), [b, v] = (0, n.useState)(null), [h, k] = (0, n.useState)(0), [x, y] = (0, n.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [_, N] = (0, n.useState)(!1), S = (0, n.createRef)(), [j, w] = (0, n.useState)(null), T = (0, n.createRef)(), C = (0, n.createRef)(), [E, M] = (0, n.useState)([]), [P, L] = (0, n.useState)(!0), [I, $] = (0, n.useState)(!1), [D, O] = (0, n.useState)(!1), [H, G] = (0, n.useState)([]), [z, A] = (0, n.useState)(404), [V, F] = (0, n.useState)(808), [R, W] = (0, n.useState)(672), [q, U] = (0, n.useState)(336), [K, Q] = (0, n.useState)(0), [Y, X] = (0, n.useState)(0), [J, Z] = (0, n.useState)(0), [ae, se] = (0, n.useState)(0), [ne, ie] = (0, n.useState)(0), [re, ce] = (0, n.useState)(!1), oe = !!(0, m.usePrevious)(re), [le, de] = (0, n.useState)(window.innerWidth), [ue, ge] = (0, n.useState)(0), [fe, pe] = (0, n.useState)(0), [be, ve] = (0, n.useState)(0), [he, ke] = (0, n.useState)(0), [xe, Se] = (0, n.useState)(0), [je, Te] = (0, n.useState)(0), [Ee, Me] = (0, n.useState)(0), [Pe, Le] = (0, n.useState)(0), [Ie, $e] = (0, n.useState)(-1e3), [De, Be] = (0, n.useState)(0), [Oe, He] = (0, n.useState)(50), [Ge, ze] = (0, n.useState)(0), [Ae, Ve] = (0, n.useState)(!1), [Fe, Re] = (0, n.useState)(768), [We, qe] = (0, n.useState)(!1), [Ue, Ke] = (0, n.useState)(!1), [Qe, Ye] = (0, n.useState)(!1), [Xe, Je] = (0, n.useState)(!1), [Ze, et] = (0, n.useState)(!1), [tt, at] = (0, n.useState)(1e3), [st, nt] = (0, n.useState)(1.2), [it, rt] = (0, n.useState)(0), [ct, ot] = (0, n.useState)(!1), [lt, dt] = (0, n.useState)(!1), [mt, ut] = (0, n.useState)(!0), [gt, ft] = (0, n.useState)(!1), [pt, bt] = (0, n.useState)(!1), [vt, ht] = (0, n.useState)(null), [kt, xt] = (0, n.useState)(100), [yt, _t] = (0, n.useState)(!1), [Nt, St] = (0, n.useState)({}), [jt, wt] = (0, n.useState)(""), [Tt, Ct] = (0, n.useState)(0), [Et, Mt] = (0, n.useState)(!1), [Pt, Lt] = (0, n.useState)(!1), [It, $t] = (0, n.useState)(0), [Dt, Bt] = (0, n.useState)(0), [Ot, Ht] = (0, n.useState)(100), [Gt, zt] = (0, n.useState)(!1), [At, Vt] = (0, n.useState)(!1), Ft = () => le * ue + Oe, Rt = () => !1 === Ae ? st : 1, Wt = e => e === Ee - 1 || e === Ee + 1, qt = () => {
              let e = -1 * je;
              return e = -1 * je - he, e
            }, Ut = function(e) {
              let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (!0 === Ae) return 0;
              const a = e.itemNumber % 2 == 0,
                s = z * st;
              if (!0 === a && 0 !== e.itemNumber) {
                const a = _e(e?.element?.current, "top");
                let n = a - J;
                return !1 === t && (n -= a), -1 * (.5 * s + n) + it
              }
              return J - .5 * s + it
            }, Kt = function(e, t) {
              let a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                s = qt();
              !1 === a && (s = 0);
              const n = le * ue,
                i = !1 === Ae ? z * Rt() : n;
              return e.inModalMode && Ae ? -1 === t ? Ft() * (Ee - e.itemNumber) * -1 - e.styles.left : Ft() * (e.itemNumber - Ee) - e.styles.left : -1 === t ? -1 * e.styles.left - i - Oe + s : n - e.styles.left + Oe + s
            }, Qt = (e, t, a) => {
              -1 === t && ($(!1), L(!0)), $(!1 === a && e >= t || !0 === a && e + 1 === t), L(e <= 0)
            }, Yt = function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (pt || gt) return;
              if (bt(!0), re) return void
              function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (Ee + 1 >= f.length) return;
                const t = E[Ee + 1]?.tina?.payload?.meta?.title ?? `card-${Ee+1}`;
                r({
                  event: e ? "modal_swipe" : "modal_next",
                  event_category: "modal",
                  event_action: e ? "swipe" : "next",
                  event_label: a,
                  card_name: t,
                  card_id: Ee + 1,
                  position: Ee + 1,
                  view_name: `${E[Ee+1].source_content_id}/${t}`,
                  source_content_id: E[Ee + 1].source_content_id,
                  source_content_name: E[Ee + 1].source_content_name
                }), Qt(Ee + 1, f.length, !0), Ae ? Ae && M(E.map((e => {
                  e.itemNumber === Ee - 1 ? e.upNext = !1 : e.itemNumber === Ee + 2 ? e.upNext = !0 : e.itemNumber === Ee + 1 ? e.active = !0 : e.itemNumber === Ee && (e.upNext = !0, e.active = !1);
                  const t = e.styles.transform.replace("translate3d(", "").split(",");
                  let a = Number(t[0].replace("px", ""));
                  a -= Ft();
                  const s = `translate3d(${a}px,${t[1]},${t[2]}`;
                  return e.styles = {
                    ...e.styles,
                    transform: s
                  }, e
                }))) : M(E.map((e => (e.itemNumber === Ee - 1 ? e.upNext = !1 : e.itemNumber === Ee + 2 ? e.upNext = !0 : e.itemNumber === Ee + 1 ? (e.active = !0, e.styles = {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${qt()}px, ${it}px, 0) scale(1)`
                }) : e.itemNumber === Ee && (e.upNext = !0, e.active = !1, e.styles = {
                  ...e.styles,
                  transform: `translate3d(${Kt(e,-1)}px, ${Ut(e)}px, 0) scale(${Rt()})`
                }), e)))), Me(Ee + 1)
              }(t);
              const s = xe + 1;
              if (!(s > ne))
                if (r({
                    event: t ? "carousel_swipe" : "carousel_next",
                    event_category: "carousel",
                    event_action: t ? "swipe" : "next",
                    event_label: a
                  }), Qt(s, ne, !1), Ae) {
                  let e = s * q * -1;
                  e < Ie && (e = Ie, $(!0), L(!1), Se(ne)), Se(s), M(E.map((t => (t.styles = {
                    ...t.styles,
                    transform: `translate3d(${e}px, 0, 0)`
                  }, t))))
                } else {
                  let e = je - Y;
                  Se(s), e < Ie && (e = Ie, $(!0), L(!1), Se(ne)), Te(e)
                }
            }, Xt = function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (pt || gt) return;
              if (bt(!0), !0 === re) return void
              function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (pt) return;
                if (Ee - 1 < 0) return;
                const t = E[Ee - 1]?.tina?.payload?.meta?.title ?? "card-" + (Ee - 1);
                r({
                  event: e ? "modal_swipe" : "modal_previous",
                  event_category: "modal",
                  event_action: e ? "swipe" : "previous",
                  event_label: a,
                  card_name: t,
                  card_id: Ee - 1,
                  position: Ee - 1,
                  view_name: `${E[Ee-1].source_content_id}/${t}`,
                  source_content_id: E[Ee - 1].source_content_id,
                  source_content_name: E[Ee - 1].source_content_name
                }), Qt(Ee - 1, f.length, !0), Ae || M(E.map((e => (e.itemNumber === Ee + 1 ? e.upNext = !1 : e.itemNumber === Ee - 2 ? e.upNext = !0 : e.itemNumber === Ee ? (e.upNext = !0, e.active = !1, e.styles = {
                  ...e.styles,
                  transform: `translate3d(${Kt(e,1)}px, ${Ut(e)}px, 0) scale(${Rt()})`
                }) : e.itemNumber === Ee - 1 && (e.active = !0, e.styles = {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${qt()}px, ${it}px, 0) scale(1)`
                }), e)))), Ae && M(E.map((e => {
                  e.itemNumber === Ee + 1 ? e.upNext = !1 : e.itemNumber === Ee - 2 ? e.upNext = !0 : e.itemNumber === Ee ? (e.upNext = !0, e.active = !1) : e.itemNumber === Ee - 1 && (e.active = !0);
                  const t = e.styles.transform.replace("translate3d(", "").split(",");
                  let a = Number(t[0].replace("px", ""));
                  a += Ft();
                  const s = `translate3d(${a}px,${t[1]},${t[2]}`;
                  return e.styles = {
                    ...e.styles,
                    transform: s
                  }, e
                }))), Me(Ee - 1)
              }(t);
              const s = xe - 1;
              if (!(s < 0))
                if (r({
                    event: t ? "carousel_swipe" : "carousel_previous",
                    event_category: "carousel",
                    event_action: t ? "swipe" : "previous",
                    event_label: a
                  }), Qt(s, ne, !1), Ae) {
                  let e = s * q * -1;
                  e > 0 && (e = 0, L(!0), $(!1), Se(0)), Se(s), M(E.map((t => (t.styles = {
                    ...t.styles,
                    transform: `translate3d(${e}px, 0, 0)`
                  }, t))))
                } else {
                  let e = je + Y;
                  Se(s), (e > 0 || 0 === e || -1 * e < V) && (e = 0, L(!0), $(!1), Se(0)), Te(e)
                }
            }, Jt = e => {
              if (Et || re || Ae) return;
              const t = Ne(e);
              Ct(t.x)
            }, Zt = e => {
              if (Et || 0 === Tt || re || Ae) return;
              const t = Ne(e),
                a = t.x > Tt ? 1 : -1;
              let s = Math.abs(Tt - t.x) * a;
              (0 === xe && 1 === a || xe === ne && -1 === a) && (s *= .35), Lt(!0), $t(s)
            }, ea = e => {
              if (Et || re || Ae) return;
              const t = Ne(e),
                a = t.x > Tt ? 1 : -1,
                s = Math.abs(Tt - t.x);
              wt(s > Ot ? a > 0 ? "prev" : "next" : ""), ta()
            }, ta = () => {
              Mt(!0), Ct(0), $t(0), Lt(!1)
            }, aa = e => {
              Pt && (ea(e), Lt(!1))
            }, sa = function(e, t) {
              let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
              return e.map(((e, s) => {
                let n = s * q,
                  i = s;
                !1 === Ae && (i = Math.ceil(.5 * s) + 1, s > 0 && (n = 2 === i ? R : R + q * (i - 2)));
                const r = H[s];
                return r?.current && (r.current.scrollTop = 0), {
                  ...e,
                  mobileMode: Ae,
                  itemNumber: s,
                  columnNumber: i,
                  inModalMode: !1,
                  upNext: !0,
                  active: !1,
                  openModalMode: ia,
                  element: r,
                  transitionStyle: t,
                  styles: {
                    left: n,
                    transform: "" === a ? null : a,
                    height: null,
                    top: null
                  }
                }
              }))
            }, na = () => {
              const e = E[Ee]?.tina?.payload?.meta?.title ?? `card-${Ee}`;
              if (r({
                  event: "modal_close",
                  event_category: "modal",
                  event_action: "close",
                  event_label: a,
                  card_name: e,
                  card_id: Ee,
                  position: Ee,
                  view_name: `${E[Ee].source_content_id}/${e}`,
                  source_content_id: E[Ee].source_content_id,
                  source_content_name: E[Ee].source_content_name
                }), Ae) {
                let e = Ee * q * -1;
                e < Ie && (e = Ie, $(!0), L(!1), Se(ne)), Se(Ee), Qt(Ee, ne, !1), M(sa(f, "cardClose", `translate3d(${e}px, 0, 0)`))
              } else {
                M(sa(f, "cardClose"));
                const e = Math.ceil((E[Ee].columnNumber + 1) / K) - 1;
                Se(e);
                let t = e * Y * -1;
                Ge < fe ? (t = 0, L(!0), $(!0), Se(0)) : t < Ie ? (t = Ie, L(!1), $(!0), Se(ne)) : Qt(e, ne, !1), Te(t), Me(0)
              }
              T.current.style.transform = "translate(0px, 0px)", T.current.style.transition = "all var(--eventDeck-transitionCardClose)", ot(!1), Je(!1), ce(!1), Ke(!1), qe(!1), et(!1), setTimeout((() => {
                Ye(!0)
              }), tt)
            };
            (0, n.useEffect)((() => {
              !1 !== Qe && (Ye(!1), ot(!1), j.style.zIndex = null, M(E.map((e => (e.transitionStyle = "", e)))))
            }), [Qe]);
            const ia = e => {
              setTimeout((() => {
                St(e), _t(!0)
              }), 1)
            };
            (0, n.useEffect)((() => {
              if (!yt) return;
              if (_t(!1), pt) return;
              Me(Number(Nt.target.dataset.itemPosition)), Ke(!0), ft(!0), mt && ut(!1);
              const e = E[Nt.target.dataset.itemPosition].source_content_id,
                t = E[Nt.target.dataset.itemPosition].source_content_name,
                s = E[Nt.target.dataset.itemPosition]?.tina?.payload?.meta?.title;
              r({
                event: "card_click",
                event_category: "card",
                event_action: "click",
                event_label: a,
                card_name: s ?? `card-${Ee}`,
                card_id: Nt.target.dataset.itemPosition,
                position: Nt.target.dataset.itemPosition,
                view_name: `${e}/${s}`,
                source_content_id: e,
                source_content_name: t
              })
            }), [yt]), (0, n.useEffect)((() => {
              if (!Ue || re) return;
              Ke(!1);
              const e = (() => {
                const e = j?.getBoundingClientRect().top;
                return rt(-1 * (e - h)), -1 * (e - 140)
              })();
              Ae && M(E.map((e => {
                const t = e.itemNumber > Ee + 3 || e.itemNumber < Ee - 3;
                return e.styles = {
                  ...e.styles,
                  display: t ? "none" : null,
                  transition: t ? "none" : null
                }, e
              }))), j.style.zIndex = "var(--eventDeck-zIndexOverlay)", ot(!0), T.current && (T.current.style.transition = "all var(--eventDeck-transitionCardOpen)", T.current.style.transform = `translate(${-1*he}px, ${e}px)`), Je(!0), setTimeout((() => {
                qe(!0)
              }), 1)
            }), [Ue]);
            const ra = () => {
              M(E.map(((e, t) => {
                e.active = t === Ee, e.inModalMode = !0, e.transitionStyle = "cardOpen", Ae && (e.upNext = Wt(e.itemNumber));
                const a = !Ae;
                let s = 0;
                if (Ae) {
                  const e = Pe + 5 * h;
                  s = window.innerHeight - e
                }
                return e.itemNumber < Ee ? e.styles = {
                  ...e.styles,
                  height: Ae ? `${s}px` : null,
                  transform: `translate3d(${Kt(e,-1,a)}px, ${it}px, 0) scale(${Rt()})`
                } : e.itemNumber > Ee ? e.styles = {
                  ...e.styles,
                  height: Ae ? `${s}px` : null,
                  transform: `translate3d(${Kt(e,1,a)}px, ${it}px, 0) scale(1)`
                } : e.itemNumber === Ee && (e.styles = Ae ? {
                  ...e.styles,
                  height: `${s}px`,
                  transform: `translate3d(${-1*e.styles.left}px, ${it}px, 0) scale(1)`
                } : {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${qt()}px, ${it}px, 0) scale(1)`
                }), e
              })))
            };
            (0, n.useEffect)((() => {
              !1 !== We && !0 !== re && (ce(!0), qe(!1), Qt(Ee, E.length, !0), T.current && (T.current.style.transition = "all var(--eventDeck-transitionCardOpen)", T.current.style.transform = `translate(${-1*he}px, ${it}px)`), ra(), Ae ? (Te(0), ft(!1), dt(!0)) : et(!0))
            }), [We]), (0, n.useEffect)((() => {
              lt && (dt(!1), M(E.map((e => ("none" === e.styles.display && (e.styles.display = null, e.styles.transition = null), e)))))
            }), [lt]);
            const ca = function() {
              let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              M(E.map((t => {
                if (t.upNext = Wt(t.itemNumber), t.itemNumber !== Ee) {
                  let e = Kt(t, 1);
                  t.itemNumber < Ee && (e = Kt(t, -1)), t.styles = {
                    ...t.styles,
                    transform: `translate3d(${e}px, ${Ut(t)}px, 0) scale(${Rt()})`
                  }
                } else t.itemNumber === Ee && !Ae && e && (t.styles = {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${qt()}px, ${it}px, 0) scale(1)`
                });
                return t
              })))
            };
            (0, n.useEffect)((() => {
              !1 !== Ze && !0 !== Ae && (et(!1), setTimeout((() => {
                ca(), ft(!1)
              }), 1))
            }), [Ze]), (0, n.useEffect)((() => {
              M(sa(f, ""))
            }), [R, q, f]), (0, n.useEffect)((() => {
              const e = window.navigator?.userAgentData?.platform || window.navigator?.platform;
              zt(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(e))
            }), []), (0, n.useEffect)((() => {
              const e = oe !== re;
              re ? (e && t(!1), Gt && Vt(!0)) : Pt || re || (e && t(!0), Gt && At && Vt(!1))
            }), [re, Pt]), (0, n.useEffect)((() => {
              if (!pt) return;
              clearTimeout(vt);
              const e = setTimeout((() => {
                bt(!1)
              }), kt);
              ht(e)
            }), [pt]), (0, n.useEffect)((() => {
              _ && setTimeout((() => {
                N(!1)
              }), 3e3)
            }), [_]), (0, n.useEffect)((() => {
              N(!0), Te(0), Se(0);
              let e = Math.ceil(Math.ceil(Ge / q) / K);
              Ae && (e = E.length - 1), e < 0 && (e = 1), Qt(0, e, !1), re && na()
            }), [Ae]), (0, n.useEffect)((() => {
              T.current && !re && (T.current.style.transform = "")
            }), [T, Ae, re]), (0, n.useEffect)((() => {
              const e = (g ?? []).map((e => {
                let t = null;
                return "FeaturedEventInfo" === e?.tina?.payload?.content[0]?._template && e?.tina?.variables?.keys?.meta && (t = e?.tina?.variables?.keys?.meta?.title), {
                  ...e,
                  title: t,
                  source_content_id: e?.tina?.payload?.meta?.foreignId,
                  source_content_name: e?.tina?.payload?.meta?.foreignTitle,
                  view_name: `${e?.tina?.payload?.meta?.foreignId}/${e?.tina?.payload?.meta?.foreignTitle}`
                }
              }));
              p(e)
            }), [g]), (0, n.useEffect)((() => {
              G(f.map((() => (0, n.createRef)())))
            }), [f]), (0, n.useEffect)((() => {
              const e = e => {
                const {
                  key: t
                } = e;
                "ArrowLeft" === t ? Xt(null, !1) : "ArrowRight" === t && Yt(null, !1)
              };
              return document.addEventListener("keydown", e), () => {
                document.removeEventListener("keydown", e)
              }
            }), [pt, gt, re]), (0, n.useEffect)((() => {
              if (T.current) {
                let e = 0;
                e = T?.current?.clientHeight, e += _e(T?.current, "margin-top"), e += _e(T?.current, "margin-bottom"), Le(e)
              }
            }), [T, C]), (0, n.useEffect)((() => {
              re && (() => {
                const e = j?.getBoundingClientRect().top,
                  t = -1 * (e - h);
                if (M(E.map((e => {
                    if (e.styles.transform) {
                      const a = e.styles.transform.split(","),
                        s = `${a[0]}, ${t}px,${a[2]}`;
                      e.styles = {
                        ...e.styles,
                        transform: s
                      }
                    }
                    return e
                  }))), T.current) {
                  const t = -1 * (e - h);
                  T.current.style.transform = `translate(${-1*he}px, ${t}px)`
                }
              })()
            }), [Ae, re, it]), (0, n.useEffect)((() => {
              Ge < ue * le && 0 === xe ? (Te(0), $(!0), L(!0)) : je < Ie ? ($(!0), L(!1), Se(ne), Te(Ie)) : je < 0 && ($(!1), Se(ne - 1)), Ge > ue * le && I && $(!1)
            }), [Ie]), (0, n.useEffect)((() => {
              if (S.current) {
                w(S.current);
                const e = _e(document.documentElement, "--root-font-size"),
                  t = _e(S.current, "--eventDeck-modalGutters") * e,
                  a = _e(S.current, "--eventDeck-collapsedMaxWidth");
                ve(a);
                let s = le - 2 * t;
                s > a && (s = a), pe(s), ge(s / le);
                const n = 2 * t + s;
                let i = 0;
                n < le && (i = .5 * (le - n)), ke(i);
                let r = _e(S.current, "--eventDeck-modalBottomGutter");
                r *= e;
                const c = window.innerHeight - (Pe + r);
                Z(.5 * s < c ? s / 4 : .5 * c);
                const o = _e(S.current, "--eventDeck-mobileBreakpoint");
                Re(o);
                let l = _e(S.current, "--eventDeck-itemSize");
                l *= e, A(l);
                let d = _e(S.current, "--eventDeck-modalGutterGap");
                d *= e, He(d);
                let m = _e(S.current, "--eventDeck-insideMargin");
                m *= e;
                const u = !1 === Ae ? 2 * l + m : l + m;
                F(u), W(u + m);
                const g = l + m;
                U(g);
                let p = Math.ceil(.5 * (f.length - 1)) * g + u;
                Ae && (p = f.length * g), ze(p), 0 !== Ge && $e(-1 * Ge + s);
                let h = Math.ceil(Math.ceil(p / g) / K);
                (Ae || re) && (h = E.length - 1), ie(h);
                const x = _e(S.current, "--eventDeck-itemScaleUpAmount");
                nt(x), at(_e(S.current, "--eventDeck-cardCloseTransitionDuration")), k(_e(S.current, "--eventDeck-itemImageTitleMargins") * e), null !== b && e !== b && (v(e), re && ca()), null === b && v(e)
              }
            }), [S, f]), (0, n.useEffect)((() => {
              if (re && !Ae) {
                ca();
                const e = j?.getBoundingClientRect().top,
                  t = -1 * (e - h);
                t !== it && rt(t)
              }
            }), [x]), (0, n.useEffect)((() => {
              O(!(!P || !I || re))
            }), [P, I]), (0, n.useEffect)((() => {
              const e = ye()((e => {
                de(e), Ve(e < Fe);
                const t = (1 - ue) / 2;
                Be(e * t);
                const a = Math.floor(fe / q);
                Q(a);
                let s = a * q;
                s > be && (s = be), X(s), se(e - e * t);
                const n = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
                if (n !== x && y(n), re && n === x && !_) {
                  const e = j?.getBoundingClientRect().top,
                    t = -1 * (e - h);
                  t !== it && rt(t)
                }
              }), 300);
              return window.addEventListener("resize", (() => {
                e(window.innerWidth)
              })), window.addEventListener("scroll", (() => {
                re && Ae && e(window.innerWidth)
              })), e(window.innerWidth), () => {
                window.removeEventListener("resize", (() => {
                  e(window.innerWidth)
                }))
              }
            }), [q, ue, re, Ae]), (0, n.useEffect)((() => {
              !1 !== re && !0 !== _ && (Ae ? ra() : ca(!0))
            }), [ae, Y, Oe, z, le, De, J, it]), (0, n.useEffect)((() => {
              const e = () => {
                if (S.current && mt) {
                  const e = S.current.getBoundingClientRect(),
                    t = .2 * window.innerHeight;
                  window.innerHeight - e.top >= t && ut(!1)
                }
              };
              return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
            }), [S]);
            const oa = (0, n.useCallback)((() => {
              if (null !== S.current && !o) {
                const {
                  top: t
                } = S?.current?.getBoundingClientRect() || 0;
                t <= .6 * window.innerHeight && (r({
                  event: "page_section_impression",
                  event_action: "impression",
                  event_category: "page_section",
                  event_label: a,
                  element_placement: `events deck - ${e?._memoq?.title}`
                }), d(!0))
              }
            }), [S]);
            (0, n.useEffect)((() => (window.addEventListener("scroll", oa), () => {
              window.removeEventListener("scroll", oa)
            })), [oa, S]), (0, n.useEffect)((() => {
              "next" === jt ? (Yt(null, !0), wt("")) : "prev" === jt && (Xt(null, !0), wt(""))
            }), [jt]), (0, n.useEffect)((() => {
              S.current && S.current.addEventListener("mouseleave", (() => {
                Pt && ta()
              }))
            }), [S, Pt]), (0, n.useEffect)((() => (document.body.addEventListener("mouseleave", aa), () => {
              document.body.removeEventListener("mouseleave", aa)
            })), [Pt]), (0, n.useEffect)((() => {
              Et && setTimeout((() => {
                Mt(!1), Ct(0)
              }), kt)
            }), [Et]), (0, n.useEffect)((() => {
              Ht(Ae ? 20 : 100)
            }), [Ae]), (0, n.useEffect)((() => {
              xt(re ? 500 : 100)
            }), [re]);
            const la = (0, i.useTinaComponents)(),
              da = (0, n.useMemo)((() => ({
                ...la,
                CardWithImageGallery: me,
                HTMLElement: s.HTMLElement,
                ImageWithBadge: s.ImageWithBadge,
                Carousel: s.Carousel,
                GroupOfItems: c(),
                UnorderedList: s.UnorderedList
              })), [la]),
              ma = (0, n.useMemo)((() => E.map((e => (0, n.createElement)(we, {
                ...e,
                refDeck: S,
                key: e?.id ?? e?.sync_hash,
                components: da,
                prevPage: Xt,
                nextPage: Yt,
                loadCssRawValue: _e,
                selectedItemNumber: Ee,
                carouselTitle: a,
                sharedDraggingDelta: Dt,
                setSharedDraggingDelta: Bt
              })))), [E, S, da, Xt, Yt, Ee]);
            return !ma?.length || ma.length <= 0 ? null : (0, u.jsxs)(u.Fragment, {
              children: [(0, u.jsx)("div", {
                className: "rockstargames-sites-gta-gen9d06937f0f31eadd8f2c6a7d4000c4028",
                "data-modal-mode": Xe,
                "aria-hidden": "true"
              }), (0, u.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9bf13eb49657ff34f800ad89de65ad3b9",
                "data-modal-mode": re,
                "data-faded": mt,
                ref: S,
                onTouchStart: Jt,
                onTouchMove: Zt,
                onTouchEnd: ea,
                onMouseDown: Jt,
                onMouseMove: Zt,
                onMouseUp: ea,
                tabIndex: -1,
                role: "presentation",
                children: [(0, u.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9dffe1905dcf86ef006304394794fcca7",
                  "aria-hidden": "true"
                }), (0, u.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9bc0660e650ef4aabf28e90cce99a05be",
                  "data-modal-mode": re,
                  ref: T,
                  "data-animating": ct,
                  children: [(0, u.jsx)("h2", {
                    className: "rockstargames-sites-gta-gen9fdd9accd06b828c3c1007add9d32723d",
                    children: a
                  }), (0, u.jsx)(Ce, {
                    prevPage: Xt,
                    prevBtnDisabled: P,
                    nextPage: Yt,
                    nextBtnDisabled: I,
                    selectedItemNumber: Ee,
                    itemsData: f,
                    closeModalMode: na,
                    inModalMode: re,
                    controlsHidden: D
                  })]
                }), (0, u.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9c54f31f5237995d05edfb79cc4e08a33",
                  "data-modal-mode": re,
                  "data-is-dragging": Pt,
                  style: {
                    transform: `translate3d(${je+It}px, 0, 0)`,
                    width: `${Ge}px`
                  },
                  ref: C,
                  children: ma
                })]
              })]
            })
          },
          PageTemplate: Me(),
          ExpandingPlatformButton: s.ExpandingPlatformButton,
          TextCard: ue,
          Deck: he,
          Grid: s.Grid,
          Hero: s.Hero,
          HighlightsItem: ke.HighlightsItem,
          HTMLElement: s.HTMLElement,
          OrderedList: s.OrderedList,
          ParallaxInnerLayer: s.ParallaxInnerLayer,
          ParallaxOuterLayer: s.ParallaxOuterLayer,
          ParallaxWrapper: s.ParallaxWrapper,
          UnorderedList: s.UnorderedList,
          ImageWithBadge: s.ImageWithBadge,
          Carousel: s.Carousel,
          GroupOfItems: c(),
          Rating: s.Rating,
          gen9: Re,
          TinaModuleFetchNRender: s.TinaModuleFetchNRender,
          PromoModule: s.PromoModule,
          Engagement: Le()
        },
        qe = {
          CalloutSection: s.CalloutSection,
          Card: J,
          CardWithImageGallery: me,
          ConditionalBlock: s.ConditionalBlock,
          CoverCard: re,
          Carousel: s.Carousel,
          ExpandingPlatformButton: s.ExpandingPlatformButton,
          Hero: s.Hero,
          Grid: s.Grid,
          TextCard: ue,
          Deck: he,
          GroupOfItems: c(),
          ParallaxInnerLayer: s.ParallaxInnerLayer,
          ParallaxOuterLayer: s.ParallaxOuterLayer,
          ParallaxWrapper: s.ParallaxWrapper,
          PromoModule: s.PromoModule,
          Engagement: Le(),
          gen9: {
            BuyNow: Ie.c,
            Disclaimer: De.c,
            FAQ: Be.c,
            Guide: Oe.c,
            GuideGroup: He.c,
            GuideIntro: Ge.c,
            GuideSection: ze.c,
            Hero: s.Hero,
            ImageTextGroupGroup: Ae.c,
            LinkoutSection: Ve.c,
            TinaWrapper: Fe.c,
            UserVote: () => null
          },
          HTMLElement: s.HTMLElement,
          OrderedList: s.OrderedList,
          UnorderedList: s.UnorderedList,
          ImageWithBadge: s.ImageWithBadge,
          Rating: s.Rating,
          TinaModuleFetchNRender: s.TinaModuleFetchNRender,
          UserVote: s.UserVote
        }
    },
    26352: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => b
      });
      var s = a(51664),
        n = a(67356),
        i = a.n(n),
        r = a(35212),
        c = a(73344),
        o = a(41272),
        l = a(45792),
        d = a(32624),
        m = a(42836),
        u = a(2884);
      const g = (0, o.defineMessages)({
          discover_callout_cards_aria: {
            id: "discover_callout_cards_aria",
            defaultMessage: "Pack Cards"
          },
          discover_callout_mugshot: {
            id: "discover_callout_mugshot",
            defaultMessage: "{userName} mugshot"
          },
          discover_callout_heading: {
            id: "discover_callout_heading",
            defaultMessage: "Career Progress"
          },
          discover_callout_description: {
            id: "discover_callout_description",
            defaultMessage: "See all the challenges you've completed in your GTA Online Career. You can also discover new ones and earn valuable rewards as you rise through the criminal ranks."
          },
          discover_callout_cta_label: {
            id: "discover_callout_cta_label",
            defaultMessage: "Track Progress"
          }
        }),
        f = "rockstargames-sites-gta-gen9b506e23d940f40d5c37eaad601382f65";
      var p = a(95240);
      i().registerPlugin(c.W), i().registerPlugin(r.useGSAP);
      const b = (0, l.withLocale)((e => {
        let {
          backgroundColor: t,
          cardsOrientation: n = "left"
        } = e;
        const [i, r] = (0, s.useState)(""), [c, b] = (0, s.useState)(void 0), {
          currentCharId: v
        } = (0, m.useRockstarUserState)(), {
          data: h
        } = (0, m.useRockstarUser)(), {
          track: k
        } = (0, m.useGtmTrack)(), {
          windowWidth: x
        } = (0, l.useWindowResize)(), y = (0, o.useIntl)(), _ = {
          "--promo-background": t ?? "var(--black-200)",
          "--promo-order": "left" === n ? "row" : "row-reverse"
        }, N = a(41228), S = () => {}, j = (0, u.c)().data, w = !!j?.length, T = (0, s.useMemo)((() => w ? ((e, t, a) => {
          const s = [];
          let n = 0;
          for (let t = 0; t < e.length && n < 12; t++) {
            const a = t % 3;
            Array.isArray(s[a]) || (s[a] = []), s[a].push(e[t]), n++
          }
          return s
        })(j.reduce(((e, t) => e.concat(t.subNavItems.filter((e => e.discoverSafe)))), []).sort(((e, t) => {
          const a = new Date(e.createdAt),
            s = new Date(t.createdAt);
          return e.createdAt && t.createdAt ? s.getTime() - a.getTime() : e.createdAt ? -1 : t.createdAt ? 1 : 0
        }))) : []), [w, j]), C = (0, s.useMemo)((() => (0, p.jsx)("img", {
          alt: y.formatMessage(g.discover_callout_mugshot, {
            userName: h?.nickname
          }),
          className: "rockstargames-sites-gta-gen9ffb5453a30a8c5d68070ae563656efc0",
          src: i || N,
          onError: S
        })), [i, N, y, h]), E = {
          event: "cta_learn",
          event_category: "cta",
          event_action: "click",
          event_label: "discover page promo module: track progress",
          text: "track progress",
          link_url: "/gta-online/career-progress",
          element_placement: "discover page"
        };
        return (0, s.useEffect)((() => {
          const e = document.querySelector(`.${f}`);
          e?.clientHeight && b(e.clientHeight)
        }), [x]), (0, s.useEffect)((() => {
          if (h) {
            const {
              characters: e
            } = h;
            r(e?.gtao[v]?.mugshotUrl || "")
          }
        }), [v, h]), (0, p.jsx)("div", {
          className: "rockstargames-sites-gta-gen9ddfe915c931cd932df5cdbdc77fa3a47",
          children: (0, p.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9a7a317939644ffb10f67ad27c198ba83",
            style: _,
            children: [(0, p.jsx)("div", {
              className: "rockstargames-sites-gta-gen9a0ce8d90be7ee4a73259dbcc4708dd97",
              "aria-label": y.formatMessage(g.discover_callout_cards_aria),
              children: w ? (0, p.jsx)("div", {
                className: "rockstargames-sites-gta-gen9a647165450b083aab8e1dd57c2f45c96",
                children: w && T.map(((e, t) => (0, p.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9d79f85b800486e9c17109b2db723aa1f",
                  style: {
                    "--packCard-height": c ? `${c}px` : "100px"
                  },
                  tabIndex: -1,
                  children: [e.map((e => (0, p.jsx)("img", {
                    className: f,
                    src: e.images.brand,
                    alt: e.title,
                    tabIndex: -1,
                    "aria-hidden": !0
                  }, e.title))), e.map((e => (0, p.jsx)("img", {
                    className: f,
                    src: e.images.brand,
                    alt: e.title,
                    tabIndex: -1,
                    "aria-hidden": !0
                  }, e.title)))]
                }, t)))
              }) : (0, p.jsx)("div", {
                className: "rockstargames-sites-gta-gen9e81b2ea273605bbeff903c1dfdf17e27",
                children: (0, p.jsx)(d.LoadingAnimation, {
                  type: "SPINNING"
                })
              })
            }), (0, p.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9e83f1bee1ad8f8032b3b40400dc671b1",
              children: [C, (0, p.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9b51c01f415ca1ebb13dd7e56d10c2f32",
                children: [(0, p.jsx)("h3", {
                  className: "rockstargames-sites-gta-gen9e772c5f94ffe76be1ea92887c88c4bb3",
                  children: y.formatMessage(g.discover_callout_heading)
                }), (0, p.jsx)("p", {
                  children: y.formatMessage(g.discover_callout_description)
                })]
              }), (0, p.jsx)(d.Gen9Button, {
                to: "/gta-online/career-progress",
                text: y.formatMessage(g.discover_callout_cta_label),
                onClick: E && (() => k({
                  ...E
                }))
              })]
            })]
          })
        })
      }))
    },
    95660: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "type"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "orderBy"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "orderDirection"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "type"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "orderBy"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderBy"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "orderDirection"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "orderDirection"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "results"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      alias: {
                        kind: "Name",
                        value: "id"
                      },
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "name"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "type"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "tina"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "id"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "payload"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "variables"
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "keys"
                              },
                              arguments: [],
                              directives: []
                            }]
                          }
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 495
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && t.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, t)
        }))
      }
      t.loc.source = {
        body: "query TinaModulesList(\n    $type: String\n    $orderBy: String\n    $orderDirection: String\n    $locale: String!\n) {\n    tinaModulesList(\n        type: $type\n        orderBy: $orderBy\n        orderDirection: $orderDirection\n        locale: $locale\n    ) {\n        results {\n            id: id_hash\n            name\n            type\n            tina {\n                id\n                payload\n                variables {\n                    keys\n                }\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function n(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var s = e.definitions[a];
          if (s.name && s.name.value == t) return s
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), s[e.name.value] = t
        }
      })), e.exports = t, e.exports.TinaModulesList = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [n(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var i = s[t] || new Set,
          r = new Set,
          c = new Set;
        for (i.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return r.forEach((function(t) {
          var s = n(e, t);
          s && a.definitions.push(s)
        })), a
      }(t, "TinaModulesList")
    },
    8872: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesTree"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "type"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesTree"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "type"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "type"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id_hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "children"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "to"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "id_hash"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "children"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "title"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "to"
                          },
                          arguments: [],
                          directives: []
                        }, {
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "id_hash"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 331
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && t.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, t)
        }))
      }
      t.loc.source = {
        body: "query TinaModulesTree($type: String, $locale: String!) {\n    tinaModulesTree(type: $type, locale: $locale) {\n        title\n        id_hash\n        children {\n            title\n            to\n            id_hash\n            children {\n                title\n                to\n                id_hash\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function n(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var s = e.definitions[a];
          if (s.name && s.name.value == t) return s
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), s[e.name.value] = t
        }
      })), e.exports = t, e.exports.TinaModulesTree = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [n(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var i = s[t] || new Set,
          r = new Set,
          c = new Set;
        for (i.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return r.forEach((function(t) {
          var s = n(e, t);
          s && a.definitions.push(s)
        })), a
      }(t, "TinaModulesTree")
    },
    79500: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TinaModulesTree"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "id"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tinaModulesTree"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "id"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "id"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "tree"
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "title"
                      },
                      arguments: [],
                      directives: []
                    }, {
                      kind: "Field",
                      name: {
                        kind: "Name",
                        value: "children"
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: "SelectionSet",
                        selections: [{
                          kind: "Field",
                          name: {
                            kind: "Name",
                            value: "title"
                          },
                          arguments: [],
                          directives: []
                        }]
                      }
                    }]
                  }
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 213
        }
      };

      function a(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var s = e.type;
          "NamedType" === s.kind && t.add(s.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          a(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          a(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          a(e, t)
        }))
      }
      t.loc.source = {
        body: "query TinaModulesTree($id: String, $locale: String!) {\n    tinaModulesTree(id: $id, locale: $locale) {\n        tree {\n            title\n            children {\n                title\n            }\n        }\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var s = {};

      function n(e, t) {
        for (var a = 0; a < e.definitions.length; a++) {
          var s = e.definitions[a];
          if (s.name && s.name.value == t) return s
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          a(e, t), s[e.name.value] = t
        }
      })), e.exports = t, e.exports.TinaModulesTree = function(e, t) {
        var a = {
          kind: e.kind,
          definitions: [n(e, t)]
        };
        e.hasOwnProperty("loc") && (a.loc = e.loc);
        var i = s[t] || new Set,
          r = new Set,
          c = new Set;
        for (i.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            r.has(e) || (r.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return r.forEach((function(t) {
          var s = n(e, t);
          s && a.definitions.push(s)
        })), a
      }(t, "TinaModulesTree")
    },
    60568: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => s
      });
      const s = {
        pillBtn: "rockstargames-sites-gta-gen9f297d5933fb4bef7f0b04effe2fbb425",
        selected: "rockstargames-sites-gta-gen9e7600772fcc84bc305d118459be56e34",
        plusButton: "rockstargames-sites-gta-gen9d850e15950ca294ba83ca299b77d860a",
        small: "rockstargames-sites-gta-gen9f1cfeecd7372238001f99c5acb17c2ac",
        btnText: "rockstargames-sites-gta-gen9b21615c9a8a4fa6c78a166432078c666",
        btnTexticon: "rockstargames-sites-gta-gen9b78dfeeb23148f6cc8b9dea12b562d94",
        whiteBtn: "rockstargames-sites-gta-gen9bd72f5b8c0eb32cfbd6dc2b334762309",
        blackBtn: "rockstargames-sites-gta-gen9e342cf309e992e5bcf3625b50d9d25b7",
        transparentBtn: "rockstargames-sites-gta-gen9c297c5390531f2c27ab37fd510898b72",
        iconBtn: "rockstargames-sites-gta-gen9d70b9a93866d3d454b5cc0f9bc9eb988",
        link: "rockstargames-sites-gta-gen9aaa867763c81786d696a982b67ebad43",
        xboxone: "rockstargames-sites-gta-gen9fcb7ba6f50663dd5d7edf75a9db463b2",
        xboxseriesxs: "rockstargames-sites-gta-gen9f537b2428ce8694bcf0599fa214805e1",
        ps4: "rockstargames-sites-gta-gen9f829869ba58a2a6c5f737b27988f554c",
        ps5: "rockstargames-sites-gta-gen9eb1b7d2ad3d3494c88d0484aee7ba59a",
        pc: "rockstargames-sites-gta-gen9a39052f1b0430bf92317f19efc376cdc"
      }
    },
    2936: (e, t, a) => {
      var s = {
        "./left.svg": 43540,
        "./pc.svg": 48060,
        "./ps4.svg": 37359,
        "./ps5.svg": 5496,
        "./right.svg": 82424,
        "./x.svg": 84276,
        "./xboxone.svg": 84436,
        "./xboxseriesxs.svg": 25752
      };

      function n(e) {
        var t = i(e);
        return a(t)
      }

      function i(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = i, e.exports = n, n.id = 2936
    },
    43540: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3c6134ba61610ead6af640361535e346.svg"
    },
    48060: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1c050b43f15f34e2cd0592fad6dc48fd.svg"
    },
    37359: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3f9f55567df4006813f8bf50ad383ea0.svg"
    },
    5496: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b12e4e9678e7a4ebea34905926feeb90.svg"
    },
    82424: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cf1b78cec82c717ea9c2155ce4093736.svg"
    },
    84276: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c453a914f0b049334120adfcba614e5.svg"
    },
    84436: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f91e4753c491fb23c2b364f69480c9e.svg"
    },
    25752: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5bd8456deb2338503b8fd44786b5fa07.svg"
    },
    41228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/8271b67c2f5834856448ca1eef6dba3f.png"
    },
    2140: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1e50aff7a4148673983e493ca815454e.svg"
    }
  }
]);