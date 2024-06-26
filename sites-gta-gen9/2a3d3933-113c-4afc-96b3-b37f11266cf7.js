! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2a3d3933-113c-4afc-96b3-b37f11266cf7", e._sentryDebugIdIdentifier = "sentry-dbid-2a3d3933-113c-4afc-96b3-b37f11266cf7")
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
  [2500], {
    98e3: (e, t, a) => {
      "use strict";
      a.d(t, {
        j: () => p,
        i: () => f
      });
      var s = a(51664),
        n = a(43924),
        r = a(49696),
        i = a(1740),
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
            onClose: g,
            rect: u = {
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
            left: j,
            top: S
          } = u, [w, C] = (0, s.useState)(-1), [T, E] = (0, s.useState)(h?.length || 0), {
            track: M
          } = (0, c.useGtmTrack)(), P = null !== h && (h?.length || 0) > 1 && ("flag_bg" === k || "fob" === N?.size), [I, L] = (0, o.useSearchParams)(), [B, $] = (0, s.useState)(!1), [D, H] = (0, s.useState)(!1), [O, G] = (0, s.useState)(), V = () => {
            const e = w > -1 ? w - 1 : 0;
            C(e), H(e <= 0), $(e >= T - 1), M({
              event: "modal_previous",
              event_category: "modal",
              event_action: "previous",
              event_label: x ?? void 0,
              element_placement: x ?? void 0,
              position: w
            })
          }, z = () => {
            const e = w > -1 ? w + 1 : 0;
            C(e), H(e <= 0), $(e >= T - 1), M({
              event: "modal_next",
              event_category: "modal",
              event_action: "next",
              event_label: x ?? void 0,
              element_placement: x ?? void 0,
              position: w
            })
          };
          (0, s.useEffect)((() => {
            E(h?.length || 0)
          }), [h?.length]), (0, s.useEffect)((() => {
            null !== w && null !== h && h && w < h.length && w > -1 && L({
              info: h[w].toString()
            })
          }), [w, h]), (0, s.useEffect)((() => {
            if (null !== h && -1 === w && h && h.length > 0) {
              const e = I.get("info");
              h?.forEach(((t, a) => {
                t === e && (C(a), H(a <= 0), $(a >= T - 1))
              }))
            }
          }), [h, w]);
          const [A] = (0, s.useState)({
            y: S,
            x: j,
            top: 0,
            left: 0,
            width: b,
            height: m,
            border: "0px solid transparent",
            background: "transparent",
            marginTop: P ? "0" : ""
          }), R = {
            opacity: 1
          }, F = (0, s.useRef)(null), W = {
            ease: [.77, 0, .175, 1],
            duration: .5
          }, q = {
            ease: "easeIn",
            duration: .3,
            delay: .5
          }, [U] = (0, s.useState)({
            x: "-50%",
            y: "-50%",
            top: "50%",
            left: "50%",
            width: "calc(100vw - (var(--modal-padding) * 2))",
            height: "var(--modal-height)",
            border: "1px solid var(--border-color, #2d2d2d)",
            background: "var(--black-100)",
            marginTop: P ? "calc(var(--modal-controlsHeight) - var(--modal-padding))" : "",
            transition: {
              x: W,
              y: W,
              top: W,
              left: W,
              width: W,
              height: W,
              border: W,
              background: {
                delay: .3
              }
            }
          }), [K, Q] = (0, s.useState)({
            initial: A,
            shown: U
          });
          (0, s.useEffect)((() => {
            Q({
              initial: A,
              shown: U
            })
          }), [A, U]), (0, s.useEffect)((() => {
            const e = e => {
              "function" == typeof g && "Escape" === e.key && (g(), M({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: x ?? void 0,
                element_placement: x ?? void 0,
                ...y
              }))
            };
            return document.addEventListener("keydown", e, !1), () => document.removeEventListener("keydown", e, !1)
          }), []);
          const X = () => {
              "function" == typeof g && (g(), M({
                event: "modal_close",
                event_action: "close",
                event_category: "modal",
                event_label: x ?? void 0,
                element_placement: x ?? void 0,
                ...y
              }))
            },
            Y = (e, t) => {
              if (!e || !e.children || t < 0) return null;
              for (let a = 0; a < e.children.length; a++) {
                const s = e.children[a];
                if (s.scrollHeight > s.clientHeight) return s;
                const n = Y(s, t - 1);
                if (n) return n
              }
              return null
            },
            Z = e => {
              if (ee?.current?.children) {
                let t = null;
                const a = "ArrowDown" === e.key ? 25 : "ArrowUp" === e.key ? -25 : 0;
                switch (e.key) {
                  case "ArrowDown":
                  case "ArrowUp":
                    t = (e => {
                      let t = null;
                      return O?.queried ? t = O.element : (t = Y(e, 2), G({
                        queried: !0,
                        element: t
                      })), t
                    })(ee.current), e.preventDefault(), t && (t.scrollTop += a)
                }
              }
            },
            J = v ? 0 : 1,
            ee = (0, s.useRef)(null),
            te = (0, l.jsx)(r.motion.button, {
              className: "rockstargames-sites-gta-gen9b0326cc98df99ada0e0f6821f0f0a6ad",
              "aria-label": "Close",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1
              },
              transition: q,
              onClick: () => {
                X()
              },
              onKeyDown: Z,
              onKeyUp: Z
            });
          return (0, s.useMemo)((() => (0, l.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e9a8e066d320a81b61aa2c636fa0a5b5",
            "data-show-nav": P,
            "data-aspect-ratio": _,
            children: (0, l.jsxs)(n.cp, {
              children: [(0, l.jsx)(r.motion.div, {
                className: "rockstargames-sites-gta-gen9c8632c630878ad16e637fe2b8db2f02c",
                initial: {
                  opacity: 0
                },
                animate: R,
                transition: W,
                onClick: () => X()
              }), P && (0, l.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9eeecb8dc782f382fc9d32d03ecc1a2a5",
                children: [(0, l.jsxs)(r.motion.div, {
                  className: "rockstargames-sites-gta-gen9b6e3406cb9a52fc7583d5c74681e88bc",
                  initial: {
                    opacity: 0
                  },
                  animate: {
                    opacity: 1
                  },
                  transition: q,
                  children: [(0, l.jsx)("button", {
                    type: "button",
                    "aria-label": "Previous",
                    onClick: V,
                    disabled: D,
                    onKeyDown: Z,
                    onKeyUp: Z
                  }), (0, l.jsxs)("div", {
                    className: "rockstargames-sites-gta-gen9ff3c13d9dc1de9af609a1f99b4c47039",
                    children: [" ", w + 1, (0, l.jsx)("div", {
                      className: "rockstargames-sites-gta-gen9cd9c6033ad00894881fa5451acfe15da"
                    }), h?.length, " "]
                  }), (0, l.jsx)("button", {
                    type: "button",
                    "aria-label": "Next",
                    onClick: z,
                    disabled: B,
                    onKeyDown: Z,
                    onKeyUp: Z,
                    "data-autofocus": !0
                  })]
                }), te]
              }), (0, l.jsx)(r.motion.div, {
                className: "rockstargames-sites-gta-gen9fab99cc2e2ca2e2a2158f9d41e764558",
                ref: F,
                initial: "initial",
                animate: "shown",
                variants: K,
                transition: W,
                style: f,
                children: (0, l.jsxs)(r.motion.div, {
                  className: (0, i.classList)("rockstargames-sites-gta-gen9b6aa5ebf680af5d95d0e9c76ac36ed82", d),
                  children: [!P && te, (0, l.jsx)(r.motion.div, {
                    className: (0, i.classList)("rockstargames-sites-gta-gen9d901631c0b9d817396c8352c027a2a0d", p),
                    initial: {
                      opacity: J
                    },
                    animate: {
                      opacity: 1
                    },
                    transition: q,
                    ref: ee,
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
        g = [null, () => null],
        u = window?.[m] ?? (window[m] = (0, s.createContext)(g)),
        f = () => (0, s.useContext)(u),
        p = e => {
          let {
            children: t
          } = e;
          const [a, n] = (0, s.useState)(g), r = (0, s.useMemo)((() => a?.content ? (0, l.jsx)(d, {
            modal: a
          }) : null), [a]);
          return (0, l.jsx)(u.Provider, {
            value: [r, n],
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
        r = a(95240);
      const i = e => {
          let {
            children: t,
            className: a,
            onClick: s,
            style: n,
            innerRef: i = null
          } = e;
          return (0, r.jsx)("button", {
            className: a,
            onClick: s,
            style: n,
            type: "button",
            ref: i,
            children: t
          })
        },
        c = e => {
          let {
            children: t,
            className: a,
            onClick: n,
            style: i,
            to: c
          } = e;
          return (0, r.jsx)(s.NavLink, {
            className: a,
            onClick: n,
            style: i,
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
            size: g,
            secondText: u,
            consoleBtn: f = !1,
            img: p,
            to: b = !1,
            innerRef: v = null
          } = e;
          const h = [n.c.plusButton, n.c[d] ?? "", n.c[g] ?? "", n.c[f] ?? ""].join(" "),
            k = {
              "--hvr-color": o ?? l,
              "--hvr-bg-color": l ?? o,
              "--hvr-border-color": o ?? l
            },
            x = (0, r.jsxs)(r.Fragment, {
              children: [p ? (0, r.jsx)("img", {
                src: p,
                alt: t || a
              }) : "", (0, r.jsxs)("div", {
                className: n.c.btnText,
                icon: m,
                children: [a, u ? (0, r.jsx)("span", {
                  children: u
                }) : ""]
              })]
            });
          if (b) {
            if (b.startsWith("http")) {
              const e = b.startsWith(document.location.origin) ? "_self" : "_blank";
              return (0, r.jsx)("span", {
                onClick: s,
                onKeyUp: e => {
                  "Enter" === e.code && s()
                },
                role: "button",
                tabIndex: -1,
                children: (0, r.jsx)("a", {
                  href: b,
                  className: h,
                  target: e,
                  children: x
                })
              })
            }
            return (0, r.jsx)(c, {
              className: h,
              onClick: s,
              style: k,
              to: b,
              children: x
            })
          }
          return (0, r.jsx)(i, {
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
        c: () => i
      });
      var s = a(1740),
        n = a(31252);
      var r = a(95240);
      const i = e => {
        let {
          buttons: t = [],
          className: a
        } = e;
        return t.length ? (0, r.jsx)("div", {
          className: (0, s.classList)("rockstargames-sites-gta-gen9a649ab228e5a522f6e9e981a54036652", a),
          children: t.map(((e, t) => {
            let {
              icon: a,
              to: s,
              title: i
            } = e;
            return i ? (0, r.jsx)(n.c, {
              className: "white",
              text: i,
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
        r = a(9860),
        i = a(42836),
        c = a(17228),
        o = a(1740),
        l = a(48111),
        d = a(31403),
        m = a(31252);
      const g = {
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
      var u = a(60568),
        f = a(95240);
      const p = e => {
          let {
            className: t,
            images: a
          } = e;
          const s = (0, o.useGetCdnSource)(a?.mobile?.full_src ?? null),
            n = (0, o.useGetCdnSource)(a?.desktop?.full_src ?? s);
          return (0, f.jsxs)("div", {
            className: [t, g.responsiveImages].join(" "),
            children: [s ? (0, f.jsx)("div", {
              className: g.imgMobile,
              style: {
                background: `url(${s}) no-repeat center/cover`
              }
            }) : "", n ? (0, f.jsx)("div", {
              className: g.imgDesktop,
              style: {
                background: `url(${n}) no-repeat center/cover`
              }
            }) : ""]
          })
        },
        b = e => {
          let {
            addedInfo: t = null,
            buynowbtn: r = null,
            description: c = null,
            images: o,
            links: d = [],
            title: b = null
          } = e;
          const {
            track: v
          } = (0, i.useGtmTrack)(), h = {
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
          }, j = {
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
          }, S = {
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
              className: g.card,
              children: [(0, f.jsxs)("div", {
                className: g.imageGroup,
                children: [(0, f.jsx)(p, {
                  className: g.backgroundImage,
                  images: o?.background
                }), (0, f.jsx)(p, {
                  className: g.foregroundImage,
                  images: o?.foreground
                })]
              }), (0, f.jsxs)("div", {
                className: g.content,
                children: [(0, f.jsxs)(n.motion.div, {
                  className: g.contentGrid,
                  animate: k ? "open" : "closed",
                  variants: j,
                  children: [(0, f.jsxs)("div", {
                    className: g.titleArea,
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
                    className: g.platforms,
                    children: d.map(((e, t) => (0, f.jsx)("div", {
                      className: g[e.platform],
                      children: e.platform ? (0, f.jsx)("img", {
                        src: a(2936)(`./${e.platform}.svg`),
                        alt: `${"xboxone"===e.platform?"xbox one":e.platform}`
                      }) : ""
                    }, `${e.platform+t}`)))
                  }) : ""]
                }), t ? (0, f.jsx)(n.motion.p, {
                  className: g.addedInfo,
                  dangerouslySetInnerHTML: {
                    __html: t
                  },
                  animate: k ? "open" : "closed",
                  variants: j
                }) : "", r ? (0, f.jsxs)(n.motion.button, {
                  onClick: () => {
                    x(!k), v(h), k || v({
                      event_action: "select_platform",
                      event_category: "cta",
                      event: "select_platform",
                      event_label: b?.toLowerCase()
                    })
                  },
                  className: [g.ctaBtn, u.c.plusButton].join(" "),
                  animate: k ? "open" : "closed",
                  variants: w,
                  initial: !1,
                  children: [(0, f.jsx)(n.motion.div, {
                    className: [g.ctaBtnText, u.c.btnText].join(" "),
                    children: r
                  }), (0, f.jsxs)(n.motion.div, {
                    className: [g.linksArea, k ? g.showLinks : ""].join(" "),
                    animate: k ? "open" : "closed",
                    variants: S,
                    initial: !1,
                    children: [(0, f.jsx)("button", {
                      type: "button",
                      className: g.closeButtonWrapper,
                      onClick: () => {
                        x(!1), v(h), v({
                          event_action: "close",
                          event_category: "select_platform",
                          event: "select_platform",
                          event_label: b?.toLowerCase()
                        })
                      },
                      children: (0, f.jsx)("img", {
                        className: g.closeBtn,
                        src: a(84276),
                        alt: "Close menu button"
                      })
                    }), (0, f.jsx)("div", {
                      className: g.linkList,
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
        h = r.framer.withFadeIn((0, r.withSimpleErrorBoundary)((e => {
          let {
            cards: t = [],
            bottomText: a,
            topText: n,
            ...r
          } = e;
          const {
            track: o
          } = (0, i.useGtmTrack)(), {
            ref: m,
            inView: u
          } = (0, c.useInView)({
            threshold: .6
          }), [p, h] = (0, s.useState)(!1);
          return (0, s.useEffect)((() => {
            u && !p && (o({
              event: "page_section_impression",
              event_action: "impression",
              event_category: "page_section",
              event_label: `buy now - ${n}`.toLowerCase(),
              element_placement: `buy now - ${r?._memoq?.topText}`.toLowerCase()
            }), h(!0))
          }), [u]), (0, f.jsxs)("div", {
            className: g.buyNowArea,
            ref: m,
            children: [(0, f.jsxs)("div", {
              className: g.topArea,
              children: [n ? (0, f.jsx)("h2", {
                children: n
              }) : "", (0, f.jsxs)("div", {
                className: g.btnArea,
                children: [(0, f.jsx)("div", {
                  className: g.prevBtn
                }), (0, f.jsx)("div", {
                  className: g.nextBtn
                })]
              })]
            }), t?.length ? (0, f.jsx)(l.wx, {
              grabCursor: !0,
              navigation: {
                nextEl: `.${g.nextBtn}`,
                prevEl: `.${g.prevBtn}`
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
              className: g.bottomText,
              children: a
            }) : ""]
          })
        })))
    },
    71584: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => r
      });
      var s = a(1740);
      var n = a(95240);
      const r = e => {
        let {
          disclaimer: t,
          text: a = null,
          title: r,
          className: i = "",
          style: c = {}
        } = e;
        const o = a ?? t?.text ?? null,
          l = r ? `<h5>${r}</h5>${o}` : o;
        return o ? (0, n.jsx)("div", {
          className: (0, s.classList)("rockstargames-sites-gta-gen9fafe66500f74b5fda33cb7b70746a014", i),
          dangerouslySetInnerHTML: {
            __html: l
          },
          style: c
        }) : null
      }
    },
    32456: (e, t, a) => {
      "use strict";
      a.d(t, {
        cp: () => f
      });
      var s = a(51664),
        n = a(75708),
        r = a(9860),
        i = a(42836),
        c = a(17228),
        o = a(73380),
        l = a(9488),
        d = a.n(l);
      var m = a(95240);
      const g = (0, s.forwardRef)(((e, t) => {
          let {
            children: a,
            className: s,
            ...r
          } = e;
          return (0, m.jsx)(o.Header, {
            className: "rockstargames-sites-gta-gen9b162a5a644c5967f37270d93a9d54461",
            children: (0, m.jsxs)(o.Trigger, {
              ref: t,
              className: d()("rockstargames-sites-gta-gen9a6e60efab2e938aa8532d0e55e3eb315", s),
              ...r,
              children: [a, (0, m.jsx)(n.ChevronDownIcon, {
                className: "rockstargames-sites-gta-gen9bf20e6733781f95b7d78c3578c656b98",
                "aria-hidden": !0
              })]
            })
          })
        })),
        u = (0, s.forwardRef)(((e, t) => {
          let {
            children: a,
            className: s,
            ...n
          } = e;
          return (0, m.jsx)(o.Content, {
            className: d()("rockstargames-sites-gta-gen9eff014974955b9b02cc649832c97a8e4", s),
            ...n,
            ref: t,
            children: (0, m.jsx)("div", {
              className: "rockstargames-sites-gta-gen9cc28f66d8cb37794278c9f5b21ba2d21",
              children: a
            })
          })
        })),
        f = (0, r.withSimpleErrorBoundary)((e => {
          let {
            buttonTxt: t,
            description: a,
            disclaimer: n,
            faqList: r = [],
            initialLength: l = 6,
            addedLength: d = 6,
            title: f,
            tinaModulesInfo: p
          } = e;
          const {
            track: b
          } = (0, i.useGtmTrack)(), [v, h] = (0, s.useState)(l), [k, x] = (0, s.useState)(void 0), [y, _] = (0, s.useState)(!1), N = (0, s.useRef)(null), j = (0, s.useRef)([]), {
            ref: S
          } = (0, c.useInView)({
            threshold: .6,
            triggerOnce: !0,
            onChange: e => {
              e && b({
                event: "page_section_impression",
                element_placement: "faqs"
              })
            }
          });
          return (0, s.useEffect)((() => {
            if (y) {
              const e = v - d;
              j.current[e] && j.current[e].focus(), _(!1)
            }
          }), [v]), (0, m.jsxs)("div", {
            ref: S,
            className: "rockstargames-sites-gta-gen9b98dca4969db7550b49d754ec2073908",
            children: [(0, m.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9ed716cf574f33506740c9265064eeb55",
              children: [f && (0, m.jsxs)("div", {
                children: [(0, m.jsx)("h3", {
                  children: p?.[0]?.title ?? f
                }), (0, m.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: a
                  }
                })]
              }), (0, m.jsx)(o.Root, {
                className: "rockstargames-sites-gta-gen9c88899efe7dcffe470e1cb4061c1c573",
                type: "single",
                collapsible: !0,
                value: k,
                onValueChange: e => {
                  let t = "",
                    a = null;
                  e ? (t = "cta_expand", a = parseInt(e, 10)) : (t = "cta_collapse", a = parseInt(k, 10)), b({
                    event: t,
                    text: `FAQ ${a}`,
                    position: a,
                    element_placement: "faqs"
                  }), x(e)
                },
                children: r.length ? r.slice(0, v).map(((e, t) => {
                  let {
                    question: a,
                    answer: s
                  } = e;
                  return (0, m.jsxs)(o.Item, {
                    className: "rockstargames-sites-gta-gen9f655033dc433f9161105c8c329135f64",
                    value: (t + 1).toString(),
                    children: [(0, m.jsx)(g, {
                      ref: e => j.current[t] = e,
                      children: a
                    }), (0, m.jsx)(u, {
                      children: (0, m.jsx)("p", {
                        dangerouslySetInnerHTML: {
                          __html: s
                        }
                      })
                    })]
                  }, t)
                })) : ""
              }), r.length > v && (0, m.jsx)("div", {
                className: "rockstargames-sites-gta-gen9ba28a813db3a21149946e2ce052b2bac",
                children: (0, m.jsxs)("button", {
                  className: "rockstargames-sites-gta-gen9c91ad0f82fc70dfb758fab7978a37f24",
                  onClick: () => {
                    b({
                      event: "view_all",
                      text: "view more",
                      element_placement: "faqs"
                    }), h((e => e + d)), _(!0)
                  },
                  ref: N,
                  children: [(0, m.jsx)("span", {
                    children: t
                  }), (0, m.jsx)("img", {
                    src: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dd73beaf06cda8c7936703f23f90bd6f.svg",
                    alt: ""
                  })]
                })
              })]
            }), n && (0, m.jsx)("div", {
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
        c: () => r
      });
      var s = a(65040);
      var n = a(95240);
      const r = e => {
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
        r = a.n(n),
        i = a(9860),
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
          r().cloneDeepWith(t, ((e, t) => {
            "images" === t && (d = e)
          }));
          const {
            src: m
          } = (0, c.useImageParser)(d?.thumb ?? {});
          return (0, l.jsx)("div", {
            className: "rockstargames-sites-gta-gen9b40f08dc1045d471f902655ea561c15e",
            children: (0, l.jsxs)(i.A, {
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
          const c = r().map(t, "guide_id"),
            o = (0, i.useTinaModuleFetchByIds)({
              ids: c
            }),
            m = a?.[0]?.title ?? n,
            [g, u] = (0, s.useState)(null);
          return (0, s.useEffect)((() => {
            const e = o?.map(((e, t) => (0, l.jsx)(d, {
              guide: e,
              parentTitle: m,
              index: t
            }, e.id)));
            u(e)
          }), [o]), (0, l.jsx)(i.Gen9CoreCarousel, {
            size: "lg",
            slideChildren: g,
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
        r = a(75416);
      var i = a(95240);
      const c = () => {
          const {
            guideId: e
          } = (0, n.useParams)(), t = (0, r.uQ)(e, "<span></span>");
          return t ? (0, i.jsx)("div", {
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
            mobile: r
          } = n;
          if (r) return (0, i.jsx)("div", {
            "aria-label": a,
            className: "rockstargames-sites-gta-gen9ddf4fadc9ce6250ad1864fa1dd63780c",
            role: "img",
            style: {
              background: `url(${r}) no-repeat center/contain`
            }
          })
        },
        l = e => {
          let {
            blurb: t,
            hero: a,
            title: s
          } = e;
          return (0, i.jsxs)(i.Fragment, {
            children: [a ? (0, i.jsx)(o, {
              hero: a
            }) : "", (0, i.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9b06267934a8fc8ac84e510f131df16ae",
              children: [(0, i.jsx)(c, {}), (0, i.jsx)("h1", {
                children: s
              }), t && (0, i.jsx)("span", {
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
        r = a(73660),
        i = a.n(r),
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
      var g = a(95240);
      const u = {
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
            query: r
          } = e;
          const {
            track: i
          } = (0, l.useGtmTrack)(), [c, u] = (0, s.useState)(n === r), {
            state: f
          } = (0, d.KM)(), {
            activeSection: p
          } = f;
          return (0, s.useEffect)((() => u(r !== p ? p === n : r === n)), [p]), (0, g.jsx)(o.A, {
            to: t,
            className: c ? m.activeSection : "",
            onClick: () => {
              i({
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
          return (0, g.jsx)("div", {
            className: m.sections,
            children: t?.map(((e, t) => {
              let {
                id_hash: s,
                title: n,
                to: r
              } = e;
              return (0, g.jsx)(p, {
                id_hash: s,
                query: a,
                title: n,
                to: r
              }, t)
            }))
          })
        },
        v = e => {
          let {
            currentId: t,
            group: a
          } = e;
          const [n, r] = (0, s.useState)(null), [l, p] = (0, s.useState)(null), {
            state: v
          } = (0, d.KM)(), {
            activeSection: h
          } = v;
          return (0, s.useEffect)((() => {
            const e = i().findIndex(a?.children, (e => {
              let {
                id_hash: a
              } = e;
              return a === t
            }));
            p(e), r(-1 !== e)
          }), [t, h, a]), (0, g.jsxs)("div", {
            className: m.guideList,
            children: [(0, g.jsx)("button", {
              type: "button",
              onClick: () => r(!n),
              children: a.title
            }), (0, g.jsx)(c.motion.nav, {
              animate: n ? "open" : "closed",
              variants: f,
              transition: u,
              children: a?.children?.map(((e, a) => {
                let {
                  children: s,
                  id_hash: n,
                  title: r,
                  to: i
                } = e;
                return (0, g.jsxs)("div", {
                  className: m.guide,
                  children: [(0, g.jsx)(o.A, {
                    className: [m.guideLink, t === n ? m.guideLinkCurrent : ""].join(" "),
                    to: i,
                    children: r
                  }), a === l && s?.length ? (0, g.jsx)(b, {
                    sections: s
                  }) : ""]
                }, r)
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
          return (0, g.jsx)("div", {
            className: [m.guideNav, n ? m.headerHidden : ""].join(" "),
            style: {
              "--header-height": `${s}px`
            },
            children: a?.map((e => (0, g.jsx)(v, {
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
        n = a(17228),
        r = a(75416);
      var i = a(95240);
      const c = e => {
        let {
          style: t,
          children: a,
          __anchor: c = null
        } = e;
        const {
          announcePresence: o
        } = (0, r.y_)(), {
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
        }), [d]), (0, i.jsx)("span", {
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
        c: () => g
      });
      var s = a(51664),
        n = a(9860),
        r = a(1740),
        i = a(42836),
        c = a(17228),
        o = a(15388),
        l = a(47572),
        d = a(71584);
      var m = a(95240);
      const g = n.framer.withFadeIn((e => {
        let {
          brands: t = [],
          content: a,
          ctas: n = [],
          disclaimer: g,
          image: u,
          large: f = !1,
          title: p,
          image_on_right: b = !1,
          style: v = {},
          className: h = "",
          ...k
        } = e;
        const {
          track: x
        } = (0, i.useGtmTrack)(), {
          ref: y,
          inView: _
        } = (0, c.useInView)({
          threshold: .6
        }), [N, j] = (0, s.useState)(!1), S = (0, r.useGetCdnSource)(u?.full_src ?? null) ?? null;
        return (0, s.useEffect)((() => {
          _ && !N && (x({
            event: "page_section_impression",
            event_action: "impression",
            event_category: "page_section",
            event_label: `image text group - ${p}`.toLowerCase(),
            element_placement: `image text group - ${k?._memoq?.title}`.toLowerCase()
          }), j(!0))
        }), [_]), (0, m.jsxs)("div", {
          className: (0, r.classList)("rockstargames-sites-gta-gen9f6868d96e7b25bdb74435d0559970e75", f ? "rockstargames-sites-gta-gen9c9ca8e3e22865d04f816a0923489b124" : "", b ? "rockstargames-sites-gta-gen9f044d09bcae5bc48eef278aa1c8600a2" : "", S ? "" : "rockstargames-sites-gta-gen9a6ec7a3705521eae985d53eb2769018c", h),
          style: v,
          ref: y,
          children: [S ? (0, m.jsx)("div", {
            className: "rockstargames-sites-gta-gen9aa09f1e58f180b91c4f1795f60448086",
            style: {
              background: `url(${S}) no-repeat center/cover`
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
              disclaimer: g
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
      const r = {
        pillBtn: "rockstargames-sites-gta-gen9f117df17a34d1837a4e2bb599a71f88d",
        selected: "rockstargames-sites-gta-gen9e8b6740b3aded532dfefbf06edf500ca",
        imageTextGroupGroup: "rockstargames-sites-gta-gen9d51265e78cba56a6119978e898e2a967",
        bg: "rockstargames-sites-gta-gen9d9d65419cc79c4fa43a6bc2571c552c7",
        bgMobile: "rockstargames-sites-gta-gen9b52f9f638a05d06d1c573dded0810212",
        bgDesktop: "rockstargames-sites-gta-gen9d6c821fe070e5eb41f1fba6178bd3571"
      };
      var i = a(95240);
      const c = e => {
        let {
          bg: t,
          image_text_groups: a = [],
          style: c = {},
          className: o = ""
        } = e;
        const l = (0, s.useGetCdnSource)(t?.image?.mobile?.full_src ?? null),
          d = (0, s.useGetCdnSource)(t?.image?.desktop?.full_src ?? null) ?? l;
        return a.length ? (0, i.jsxs)("div", {
          className: (0, s.classList)(r.imageTextGroupGroup, o),
          style: {
            ...c
          },
          children: [l ? (0, i.jsx)("div", {
            className: [r.bgMobile, r.bg].join(" "),
            style: {
              background: `url(${l}) no-repeat center/cover`
            }
          }) : "", d ? (0, i.jsx)("div", {
            className: [r.bgDesktop, r.bg].join(" "),
            style: {
              background: `url(${d}) no-repeat center/cover`
            }
          }) : "", a.map(((e, t) => (0, i.jsx)(n.c, {
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
      const r = {
        pillBtn: "rockstargames-sites-gta-gen9a218c6efb11f05af742c35731abd7f0e",
        selected: "rockstargames-sites-gta-gen9c9f11c19d7943dec1c872d1d921cd364",
        linkoutSection: "rockstargames-sites-gta-gen9f62388243285f747f07ef5d1be84ceb8",
        cta: "rockstargames-sites-gta-gen9eec30b6a686a74885da49d3cf33c1795"
      };
      var i = a(95240);
      const c = e => {
        let {
          text: t,
          cta: c,
          to: o,
          className: l = "",
          style: d = {}
        } = e;
        return (0, i.jsxs)(s.A, {
          className: (0, n.classList)(r.linkoutSection, l),
          to: o,
          style: d,
          children: [t && (0, i.jsx)("div", {
            className: r.text,
            children: t
          }), c && (0, i.jsxs)("div", {
            className: r.cta,
            children: [c, " ", (0, i.jsx)("img", {
              src: a(2140)
            })]
          })]
        })
      }
    },
    47276: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => r
      });
      var s = a(51664);
      var n = a(95240);
      const r = e => {
        let {
          children: t,
          style: a,
          theme: r
        } = e;
        const [i, c] = (0, s.useState)(r);
        return (0, s.useEffect)((() => {
          r && c(r)
        }), [r]), (0, n.jsx)("div", {
          className: "rockstargames-sites-gta-gen9a691fa72d9c1962b69090f47fbb6eadf",
          style: a,
          "data-theme": i,
          children: t
        })
      }
    },
    880: (e, t, a) => {
      "use strict";
      a.d(t, {
        c: () => i
      });
      var s = a(84644),
        n = a.n(s);
      var r = a(95240);
      const i = e => {
        let {
          id: t
        } = e;
        return (0, r.jsx)("div", {
          className: "rockstargames-sites-gta-gen9f6130392c70daec4b6c7b3fb89ad8369",
          children: (0, r.jsx)(n(), {
            autoplay: !0,
            context: "embed",
            id: t,
            endBehavior: "stillframe",
            wrapper: !1,
            titleCrop: "2rem"
          })
        })
      }
    },
    23696: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        BrandMessage: () => r,
        BuyNow: () => i.c,
        ClaimCountdown: () => o,
        Disclaimer: () => d.c,
        DiscoverCallout: () => l.c,
        ElevatorPitch: () => M,
        FAQ: () => m.cp,
        Guide: () => g.c,
        GuideGroup: () => u.c,
        GuideIntro: () => f.c,
        GuideNavDesktop: () => p.c,
        GuideSection: () => b.c,
        Hero: () => j,
        HeroVideo: () => P.default,
        ImageTextGroup: () => X.c,
        ImageTextGroupGroup: () => Y.c,
        LinkoutSection: () => Z.c,
        Logo: () => ee,
        SectionTitle: () => te,
        StickyColumn: () => V,
        Summary: () => A,
        SummaryCard: () => R,
        Tile: () => q,
        TinaWrapper: () => ae.c,
        TitleImage: () => $,
        ValueProp: () => Q,
        VideoPlayerWrapper: () => se.c
      });
      var s = a(47572);
      var n = a(95240);
      const r = e => {
        let {
          brand: t,
          headline_left: a,
          headline_right: r,
          info: i
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
                children: r
              })]
            }), (0, n.jsx)("p", {
              children: i
            })]
          })]
        })
      };
      var i = a(73300),
        c = a(51664);
      const o = e => {
        let {
          left: t,
          right: a
        } = e;
        const [s, r] = (0, c.useState)(""), [i, o] = (0, c.useState)(!1);
        return (0, n.jsxs)("div", {
          className: "rockstargames-sites-gta-gen9b868510520ca3ebc97d9ce2ea9d2edf2",
          children: [(0, n.jsxs)("h2", {
            "aria-hidden": i,
            onMouseOver: () => {
              o(!0), r(`${t} ${a}`)
            },
            onMouseOut: () => {
              o(!1), r("")
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
        m = a(32456),
        g = a(23292),
        u = a(22904),
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
          const r = (0, k.useGetCdnSource)(a ?? null),
            i = (0, k.useGetCdnSource)(s ?? r);
          return (0, n.jsx)("div", {
            className: y.shard,
            style: {
              "--background-image-mobile": `url(${r})`,
              "--background-image-desktop": `url(${i})`
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
          const [s, r] = (0, c.useState)(null);
          return (0, c.useEffect)((() => {
            a && r(a.map((e => {
              if (!e?.shardImg) return;
              const {
                title: t,
                shardImg: a
              } = e, {
                mobile: s,
                desktop: r
              } = a;
              return (0, n.jsx)(_, {
                title: t,
                mobileImg: s?.full_src,
                desktopImg: r?.full_src
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
        j = e => {
          let {
            brands: t = [],
            backgroundImg: a,
            layeredImg: r,
            ctas: i = [],
            expandingButtonLabel: c = "Subscribe",
            platformsAndLinks: o = [],
            description: l,
            title: d,
            legalText: m,
            shardsSection: g = {},
            className: u
          } = e;
          const f = (0, k.useGetCdnSource)(a?.mobile?.full_src ?? null),
            p = (0, k.useGetCdnSource)(a?.desktop?.full_src ?? f),
            b = (0, k.useGetCdnSource)(r?.mobile?.full_src ?? null),
            _ = (0, k.useGetCdnSource)(r?.desktop?.full_src ?? b),
            j = {
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
            S = {
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
            className: (0, k.classList)(y.hero, u),
            style: {
              "--background-image-desktop": `url(${p})`,
              "--background-image-mobile": `url(${f})`,
              "--layered-image-desktop": `url(${_})`,
              "--layered-image-mobile": `url(${b})`
            },
            initial: "hidden",
            animate: "visible",
            variants: j,
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
              variants: j,
              children: [(0, n.jsx)(h.motion.div, {
                variants: S,
                children: (0, n.jsx)(s.c, {
                  brands: t
                })
              }), o.length ? (0, n.jsx)(h.motion.div, {
                variants: S,
                children: (0, n.jsx)(v.ExpandingPlatformButton, {
                  buttonText: c,
                  platformsAndLinks: o,
                  children: (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(h.motion.div, {
                      className: y.descriptions,
                      variants: S,
                      children: [(0, n.jsx)("h1", {
                        dangerouslySetInnerHTML: {
                          __html: d
                        }
                      }), (0, n.jsx)("p", {
                        dangerouslySetInnerHTML: {
                          __html: l
                        }
                      })]
                    }), i.length > 0 && (0, n.jsx)(h.motion.div, {
                      variants: S,
                      children: (0, n.jsx)(x.c, {
                        buttons: i,
                        className: y.buttonGroup
                      })
                    })]
                  })
                })
              }) : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsxs)(h.motion.div, {
                  className: y.descriptions,
                  variants: S,
                  children: [(0, n.jsx)("h1", {
                    dangerouslySetInnerHTML: {
                      __html: d
                    }
                  }), (0, n.jsx)("p", {
                    dangerouslySetInnerHTML: {
                      __html: l
                    }
                  })]
                }), i.length > 0 && (0, n.jsx)(h.motion.div, {
                  variants: S,
                  children: (0, n.jsx)(x.c, {
                    buttons: i,
                    className: y.buttonGroup
                  })
                })]
              }), m && (0, n.jsx)(h.motion.div, {
                className: y.legalText,
                variants: S,
                children: (0, n.jsx)("p", {
                  dangerouslySetInnerHTML: {
                    __html: m
                  }
                })
              })]
            }), g?.shards && (0, n.jsx)(N, {
              ...g
            })]
          })
        };
      var S = a(45792),
        w = a(41272),
        C = a(97352);
      const T = (0, w.defineMessages)({
          elevator_pitch_link_console_account: {
            id: "elevator_pitch_link_console_account",
            defaultMessage: "Join Now"
          },
          elevator_pitch_member_benefit_label: {
            id: "elevator_pitch_member_benefit_label",
            defaultMessage: "Member Benefits"
          },
          elevator_pitch_available_on: {
            id: "elevator_pitch_available_on",
            defaultMessage: "Only available on"
          },
          elevator_pitch_available_on_ps5: {
            id: "elevator_pitch_available_on_ps5",
            defaultMessage: "PlayStation5"
          },
          elevator_pitch_available_on_xbox: {
            id: "elevator_pitch_available_on_xbox",
            defaultMessage: "Xbox Series X|S"
          }
        }),
        E = {
          pillBtn: "rockstargames-sites-gta-gen9af3a7439d6a232359a4315d3b4452e36",
          selected: "rockstargames-sites-gta-gen9e63b3312c710de6c95ade73809469409",
          elevatorPitch: "rockstargames-sites-gta-gen9a8c29592ebb41172673390540e7a9b68",
          pitch: "rockstargames-sites-gta-gen9a2ec62d41f7dc0e74c443230106346e2",
          title: "rockstargames-sites-gta-gen9b586174637d8048f0fb62bd0cbd662cf",
          description: "rockstargames-sites-gta-gen9bfca3f20698b503bd9c10093d4a5b718",
          ctaLinksContainer: "rockstargames-sites-gta-gen9b7b1bce3f8ae05f10d3fd12eac97b7bd",
          ctaLinks: "rockstargames-sites-gta-gen9ff22f3bd225a634fcd12c12dfdb5bf59",
          linkAccountButton: "rockstargames-sites-gta-gen9eab0ee5079e653b98608f3655603728d",
          elevatorPitchBtn: "rockstargames-sites-gta-gen9ee37297131c5567f79ddfbb749a5f059",
          unexpandedButton: "rockstargames-sites-gta-gen9a5709c2102e8a6226e5b0a6576822bfc",
          buttonGroup: "rockstargames-sites-gta-gen9d5a92cbb426e87496fc2018ba096d245",
          primaryBtn: "rockstargames-sites-gta-gen9a26e7d41a4d88292b6f9dfd6932ac36f",
          secondaryBtn: "rockstargames-sites-gta-gen9eb9c8f002224c643a68f73a90102f59d",
          btnText: "rockstargames-sites-gta-gen9c19efd2479327dd7a89c086111454c61",
          text: "rockstargames-sites-gta-gen9df19df4c6f2e4ae4308268d8c293db21",
          platformGroup: "rockstargames-sites-gta-gen9c545bb7621b1969f5508f69c5698a80a",
          platforms: "rockstargames-sites-gta-gen9d28176f172cd68c890340193c6b6d1eb",
          disclaimer: "rockstargames-sites-gta-gen9bda74f2690a34ac68ae2d9343733f76d"
        },
        M = (0, S.withLocale)((e => {
          let {
            title: t,
            description: a,
            disclaimer: s,
            cta: r
          } = e;
          const {
            formatMessage: i
          } = (0, w.useIntl)();
          return (0, n.jsxs)("div", {
            className: E.elevatorPitch,
            children: [(0, n.jsxs)("div", {
              className: E.pitch,
              children: [(0, n.jsx)("h2", {
                className: E.title,
                children: t
              }), (0, n.jsx)("p", {
                className: E.description,
                children: a
              })]
            }), (0, n.jsxs)("div", {
              className: E.ctaLinksContainer,
              children: [(0, n.jsxs)("div", {
                className: E.ctaLinks,
                children: [(0, n.jsx)("div", {
                  className: E.buttonGroup,
                  children: r && (0, n.jsx)(k.TinaParser, {
                    components: {
                      Cta: v.Cta,
                      ExpandingPlatformButton: v.ExpandingPlatformButton,
                      Gen9Button: v.Gen9Button
                    },
                    tina: {
                      payload: {
                        content: r
                      }
                    }
                  })
                }), (0, n.jsxs)("div", {
                  className: E.platformGroup,
                  children: [(0, n.jsx)("div", {
                    className: E.text,
                    children: (0, n.jsx)(w.FormattedMessage, {
                      ...T.elevator_pitch_available_on
                    })
                  }), (0, n.jsxs)("div", {
                    className: E.platforms,
                    children: [(0, n.jsx)("img", {
                      className: E.platformIcon,
                      src: (0, C.c)("ps5") || "",
                      alt: i(T.elevator_pitch_available_on_ps5)
                    }), (0, n.jsx)("img", {
                      className: E.platformIcon,
                      src: (0, C.c)("xboxseriesxs") || "",
                      alt: i(T.elevator_pitch_available_on_xbox)
                    })]
                  })]
                })]
              }), s && (0, n.jsx)("div", {
                className: E.disclaimer,
                children: (0, n.jsx)("p", {
                  children: s
                })
              })]
            })]
          })
        }));
      var P = a(82316),
        I = a(14952),
        L = a(9488),
        B = a.n(L);
      const $ = e => {
        let {
          imageSrc: t,
          imgTitle: a,
          title: s,
          description: r,
          cta: i
        } = e;
        const o = (0, k.useGetCdnSource)(t) ?? null,
          {
            isTablet: l
          } = (0, S.useWindowResize)(),
          [d, m] = (0, c.useState)(0);
        return (0, c.useEffect)((() => {
          m(l ? .5 * window.innerHeight : .25 * window.innerHeight)
        }), [l, window.innerHeight]), (0, n.jsxs)("figure", {
          className: "rockstargames-sites-gta-gen9ff6de3d17596f7d56f83302c8a3dd352",
          children: [(0, n.jsx)("div", {
            className: "rockstargames-sites-gta-gen9e887f05b18428646120596f3178947b0",
            style: {
              "--background-image": `url(${o})`
            },
            children: (0, n.jsx)("span", {
              className: B()("rockstargames-sites-gta-gen9b2b47e2d6ee2512546e0f91fb0fba7f0", "rockstargames-sites-gta-gen9ab16846895ba51a759f8c2df61943b0c"),
              children: (0, n.jsx)(I.c, {
                mode: "multi",
                className: "rockstargames-sites-gta-gen9c6d5d0140314e0df364f66b84fa159eb",
                forceSingleModeWidth: !0,
                max: d,
                children: (0, n.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9ed84de2e05da52ebe3360e86317be440",
                  dangerouslySetInnerHTML: a ? {
                    __html: a
                  } : void 0
                })
              })
            })
          }), (0, n.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9acbe4ededc81471065a3f292c2e1bb4a",
            children: [r && (0, n.jsx)("p", {
              className: "rockstargames-sites-gta-gen9d6d3ea75c1096656de004b0606df465d",
              children: r
            }), i && (0, n.jsx)("div", {
              className: "rockstargames-sites-gta-gen9f7479f40675e07f1aa36e35a177f5aa4",
              children: (0, n.jsx)(k.TinaParser, {
                components: {
                  Cta: v.Cta,
                  ExpandingPlatformButton: v.ExpandingPlatformButton
                },
                tina: {
                  payload: {
                    content: i
                  }
                }
              })
            })]
          })]
        })
      };
      var D = a(42836),
        H = a(17228);
      const O = {
          pillBtn: "rockstargames-sites-gta-gen9b96747e091c0ce36b60886a907fbf847",
          selected: "rockstargames-sites-gta-gen9c1682f9aeffb507f4b2efdebc95b1cab",
          gridLayout: "rockstargames-sites-gta-gen9a1d8c35931e5c1a50473d927fbfe49f2",
          leftColumn: "rockstargames-sites-gta-gen9c7191c86cb1d962197259bf74f36a21b",
          rightColumn: "rockstargames-sites-gta-gen9fe170e2263d9d14a17c07110bd4bee3c",
          stickyBlock: "rockstargames-sites-gta-gen9a35c3b659af9f58cf4134bc30572c35e",
          shadow: "rockstargames-sites-gta-gen9ff71d0b79549193178ee720c73bd4384"
        },
        G = e => {
          const [t, a] = (0, c.useState)(void 0);
          return (0, c.useEffect)((() => {
            a(!!e)
          }), [e]), t
        },
        V = e => {
          let {
            title: t,
            leftColumn: a,
            rightColumn: s,
            disableStickyOnDesktop: r,
            disableStickyOnMobile: i
          } = e;
          const {
            track: o
          } = (0, D.useGtmTrack)(), {
            isTablet: l
          } = (0, S.useWindowResize)(), {
            ref: d
          } = (0, H.useInView)({
            threshold: .6,
            triggerOnce: !0,
            onChange: e => {
              e && o({
                event: "page_section_impression",
                element_placement: t?.toLowerCase()
              })
            }
          }), m = (0, c.useRef)(null), g = (0, c.useRef)(null), u = G(r), f = G(i), p = (0, k.useTinaComponents)(), b = (0, c.useMemo)((() => ({
            ...p,
            HTMLElement
          })), [p]);
          return ((e, t, a) => {
            const s = (0, c.useCallback)((() => {
              if (e && t.current && a.current) {
                const e = t.current.getBoundingClientRect().bottom,
                  s = a.current.getBoundingClientRect().top;
                a.current.style.marginTop = s <= e ? "" + (e - s) : "0"
              }
            }), [e, t, a]);
            (0, c.useEffect)((() => (window.addEventListener("scroll", s), window.addEventListener("resize", s), () => {
              window.removeEventListener("scroll", s), window.removeEventListener("resize", s)
            })), [s])
          })(l, m, g), (0, n.jsx)(v.ScrollSection, {
            thresholds: [.5, 1],
            onThresholdReached: e => {
              o({
                event: "page_section_scroll",
                element_placement: t?.toLowerCase(),
                scroll_depth: 100 * e + "%"
              })
            },
            children: (0, n.jsxs)("div", {
              className: B()(O.gridLayout),
              children: [(0, n.jsx)("div", {
                ref: m,
                className: O.leftColumn,
                style: {
                  "--desktop-position": u ? "relative" : "sticky",
                  "--mobile-position": f ? "relative" : "sticky"
                },
                children: (0, n.jsx)("div", {
                  ref: d,
                  className: O.stickyBlock,
                  children: a && (0, n.jsx)(k.TinaParser, {
                    components: b,
                    tina: {
                      payload: {
                        content: a
                      }
                    }
                  })
                })
              }), (0, n.jsx)("div", {
                ref: g,
                className: B()(O.rightColumn, l ? O.shadow : null, O.borderGrey),
                children: s && (0, n.jsx)(k.TinaParser, {
                  components: b,
                  tina: {
                    payload: {
                      content: s
                    }
                  }
                })
              })]
            })
          })
        },
        z = {
          pillBtn: "rockstargames-sites-gta-gen9d5cc739e5b38ff272f97b335ba758155",
          selected: "rockstargames-sites-gta-gen9fd1a4ecbd19a8e06328614d11186b78f",
          summaryBenefits: "rockstargames-sites-gta-gen9ff866c2df793f7b14f86efbb0f3ab6bf",
          summaryContent: "rockstargames-sites-gta-gen9e5c58669d92dcc31c22de965f04e3637",
          titleHeading: "rockstargames-sites-gta-gen9f754aa7011f18a36825a10c271e6e588",
          benefitsWrapper: "rockstargames-sites-gta-gen9c34bdbd03cc70878c695ceae5348d4b1",
          benefitsGroup: "rockstargames-sites-gta-gen9d4fb61fddfcc6b5dbae763e5f6382126",
          heading: "rockstargames-sites-gta-gen9ed3da9dced66912b09c39967cbda8dc4",
          benefitsContent: "rockstargames-sites-gta-gen9d18463f26fa55f98fbdffbcab7b64d8d",
          benefitsList: "rockstargames-sites-gta-gen9ee44ff936335ca533e0335904248eb7c",
          benefits: "rockstargames-sites-gta-gen9f312dc7523661d9851ae94524450fcd3",
          title: "rockstargames-sites-gta-gen9f18846099576b8e020e53498ef7be8a3",
          description: "rockstargames-sites-gta-gen9d29a54e272e9711a8b4527ac03d69b51"
        },
        A = e => {
          let {
            benefits: t
          } = e;
          return t ? (0, n.jsx)("section", {
            className: B()(z.scrollableBlock, z.benefitsWrapper),
            children: (0, n.jsx)("div", {
              className: z.benefitsGroup,
              children: t.map((e => (0, n.jsxs)("div", {
                className: z.benefitsContent,
                children: [(0, n.jsx)("h3", {
                  className: z.heading,
                  children: e.name
                }), (0, n.jsx)(v.UnorderedList, {
                  columns: e.columns ?? null,
                  style: {
                    "--unordered-list-padding": "var(--foundry-global-spacing-gap-300)",
                    "--unordered-list-margin-bottom": "var(--foundry-global-spacing-gap-300)"
                  },
                  noImg: !0,
                  list: e.list
                })]
              }, e.name)))
            })
          }) : null
        },
        R = (0, S.withLocale)((e => {
          let {
            title: t,
            description: a,
            imgSrc: s,
            cta: r
          } = e;
          const i = (0, k.useGetCdnSource)(s?.mobile),
            c = (0, k.useGetCdnSource)(s?.desktop) || i;
          return (0, n.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9bb445cecf9072d887768043c0ed55717",
            role: "article",
            children: [(0, n.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9b01f3789df5f2bed586fa272fe5b55df",
              children: [(0, n.jsxs)("header", {
                className: "rockstargames-sites-gta-gen9ada2570443c81077d3c8dd1a9904e3b5",
                children: [t && (0, n.jsx)("h2", {
                  className: "rockstargames-sites-gta-gen9f797342d73dca9e769c698ef7ee3fefa",
                  children: t
                }), a && (0, n.jsx)("p", {
                  className: "rockstargames-sites-gta-gen9fd5b43e0287d1396697e60c426362164",
                  children: a
                })]
              }), r && (0, n.jsx)("div", {
                className: "rockstargames-sites-gta-gen9fc4c0cfe6b642c7f34feb064c7ce1279",
                children: (0, n.jsx)(k.TinaParser, {
                  components: {
                    Cta: v.Cta,
                    ExpandingPlatformButton: v.ExpandingPlatformButton,
                    Gen9Button: v.Gen9Button
                  },
                  tina: {
                    payload: {
                      content: r
                    }
                  }
                })
              })]
            }), s && (0, n.jsx)("div", {
              className: "rockstargames-sites-gta-gen9d73faadb1c2ddd9be27a1247a6ec8836",
              children: (0, n.jsx)("img", {
                src: c,
                alt: t
              })
            })]
          })
        })),
        F = {
          pillBtn: "rockstargames-sites-gta-gen9b9620e6381643bdd43e10cbfcb1add8d",
          selected: "rockstargames-sites-gta-gen9a4cf06b6fc99d104d00d0250aae3f8db",
          tile: "rockstargames-sites-gta-gen9bef40bdc7f36bca1fdb9ee996a482d23",
          fullBleed: "rockstargames-sites-gta-gen9c5b64c7887e64524cd65962c264c3594",
          tile__image: "rockstargames-sites-gta-gen9cce1c68382ca82d77c3adf14d10fc7d8",
          tile__content: "rockstargames-sites-gta-gen9fc4d41d3c6da0d538491c0969b0b2ca0",
          tile__title: "rockstargames-sites-gta-gen9e2239cc17efe1862f3654d1d419c316d",
          tile__description: "rockstargames-sites-gta-gen9d9a372e38d9f4e98de1fd9b677cb570d",
          btn__primary: "rockstargames-sites-gta-gen9fd1633914aad4caec9ca9f1e33d90cca",
          ctaBlock: "rockstargames-sites-gta-gen9ed31dcd63b403738820d644db6e06d1b",
          cta: "rockstargames-sites-gta-gen9bd09757792afcf313c211b0aa06c4982",
          "tile--small": "rockstargames-sites-gta-gen9ffe2ea6d9355788d3cecf3a525ca6fa1",
          "tile--right": "rockstargames-sites-gta-gen9be58db30e3ed7af24ab5f7a954c30267",
          contain: "rockstargames-sites-gta-gen9d65f40b0d64d0eeeacfd783738875b44",
          "tile--medium": "rockstargames-sites-gta-gen9ae3aff9ef04706541ab89120bb61c7c2",
          "tile--large": "rockstargames-sites-gta-gen9aaf02b8de18176aed17640424af5351e"
        },
        W = e => {
          let {
            title: t,
            description: a,
            cta: s,
            imgSrc: r,
            imgPosition: i = "top",
            cardSize: c = "medium",
            enableFullBleed: o,
            background: l = "var(--foundry-alias-color-background-bold-layer-2)",
            backgroundSize: d = "cover",
            backgroundImage: m,
            backgroundPosition: g = "center",
            backgroundRepeat: u = "no-repeat",
            customStyles: f
          } = e;
          const p = (0, k.useGetCdnSource)(r?.mobile ?? null),
            b = (0, k.useGetCdnSource)(r?.desktop ?? p),
            h = (0, k.useGetCdnSource)(m ?? null),
            x = {
              background: l,
              backgroundSize: d,
              backgroundImage: m ? `url(${h})` : void 0,
              backgroundPosition: g,
              backgroundRepeat: u,
              ...f
            };
          return (0, n.jsxs)("article", {
            className: B()(F.tile, [F[`tile--${c}`]], [F[o ? "fullBleed" : "contain"]], [F[`tile--${i}`]]),
            style: {
              ...x
            },
            children: [r && (0, n.jsx)("div", {
              role: "img",
              className: F.tile__image,
              "aria-label": r?.imgAlt || r?._memoq?.imgAlt,
              style: {
                "--background-image-desktop": `url(${b})`,
                "--background-image-mobile": `url(${p})`
              },
              tabIndex: 0
            }), (0, n.jsxs)("div", {
              className: B()(F.tile__content),
              children: [t && (0, n.jsx)("h2", {
                className: F.tile__title,
                children: t
              }), a && (0, n.jsx)("p", {
                className: F.tile__description,
                children: a
              }), s && (0, n.jsx)("div", {
                className: F.ctaBlock,
                children: (0, n.jsx)(k.TinaParser, {
                  components: {
                    Cta: v.Cta,
                    ExpandingPlatformButton: v.ExpandingPlatformButton
                  },
                  tina: {
                    payload: {
                      content: s
                    }
                  }
                })
              })]
            })]
          })
        },
        q = (0, c.memo)(W),
        U = e => {
          let {
            src: t,
            alt: a
          } = e;
          const s = (0, k.useGetCdnSource)(t ?? null);
          return (0, n.jsx)("div", {
            className: "rockstargames-sites-gta-gen9ba3f3d31b13fbc2a39aca4b2035670e9",
            children: (0, n.jsx)("img", {
              src: s,
              alt: a
            })
          })
        },
        K = (0, c.memo)(U),
        Q = e => {
          let {
            valueProps: t,
            enableAnimation: a
          } = e;
          const {
            track: s
          } = (0, D.useGtmTrack)(), r = (0, c.useCallback)((e => () => {
            const t = e + 1;
            s({
              event: "card_click",
              card_id: t.toString(),
              card_name: `Card ${t}`,
              position: t
            })
          }), [t]);
          return (0, n.jsx)("div", {
            "data-animate": a,
            className: "rockstargames-sites-gta-gen9ac883cf395291a034c0c6065f9636504",
            children: t.map(((e, t) => (0, n.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9f47b785957378c295f893b75cf01623b",
              onClick: r(t),
              children: [e?.iconImgSrc && (0, n.jsx)("div", {
                className: "rockstargames-sites-gta-gen9d75773fe36fb02bf0770bd0ce4ae8692",
                children: (0, n.jsx)(K, {
                  src: e?.iconImgSrc,
                  alt: e?.iconAlt || e?.title || "Icon"
                })
              }), (0, n.jsx)("h3", {
                className: "rockstargames-sites-gta-gen9cc179b8a9ac0b9767fa7ace32c01ac18",
                children: e?.title
              })]
            }, e?.key)))
          })
        };
      var X = a(18500),
        Y = a(3736),
        Z = a(58960);
      const J = {},
        ee = e => {
          let {
            brand: t
          } = e;
          return (0, n.jsx)("div", {
            className: J[t]
          })
        },
        te = () => (0, n.jsx)("h2", {
          children: "Section"
        });
      var ae = a(47276),
        se = a(880)
    },
    75416: (e, t, a) => {
      "use strict";
      a.d(t, {
        KM: () => r,
        y_: () => i.y,
        uQ: () => g,
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
        r = () => {
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
      var i = a(65040),
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
      const g = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " > ";
        const [a, n] = (0, l.useState)(null), {
          data: r
        } = (0, s.useQuery)(m.TinaModulesTree, {
          variables: {
            id: e
          },
          skip: !e
        });
        return (0, l.useEffect)((() => {
          const e = r?.tinaModulesTree?.[0]?.tree ?? null;
          e && n(e.map((e => {
            let {
              title: t
            } = e;
            return t
          })).join(t))
        }), [r, t, e]), a
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
        r = a(3061),
        i = a(75416),
        c = a(95240);
      const o = (0, s.createContext)(),
        l = () => (0, s.useContext)(o),
        d = e => {
          let {
            children: t
          } = e;
          const [a, l] = (0, s.useState)(null), [d] = (0, n.useSearchParams)(), {
            setActiveSection: m
          } = (0, i.KM)(), {
            pauseUserShouldSeeMore: g
          } = (0, r.useScroll)(), u = (0, s.useCallback)((e => {
            if (e !== d.get("section")) return void m(e);
            const t = document.getElementsByName(d.get("section"))?.[0];
            t && (g(), m(d.get("section")), t.scrollIntoView({
              behavior: "auto"
            }))
          }), [d.get("section"), a]);
          (0, s.useEffect)((() => {
            d.get("section") && u(d.get("section"))
          }), [d.get("section")]);
          const f = (0, s.useMemo)((() => ({
            announcePresence: u,
            section: a,
            setSection: l
          })), [u, a, l]);
          return (0, c.jsx)(o.Provider, {
            value: f,
            children: t
          })
        }
    },
    67284: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        componentsForTinaParser: () => Ue,
        componentsForTinaParserGuide: () => Ke
      });
      var s = a(9860),
        n = a(51664),
        r = a(1740),
        i = a(45364),
        c = a.n(i),
        o = a(73660),
        l = a.n(o),
        d = a(57013),
        m = a(45792);
      var g = a(95240);
      const u = e => {
          let {
            hasTag: t = !1,
            tag: a = null,
            tagStyle: n = null,
            badges: r = []
          } = e;
          return t && a ? (0, g.jsx)("div", {
            className: "rockstargames-sites-gta-gen9bc50cd13f1f148dd0772d2a6eee8a913",
            "data-tag-style": n,
            children: a
          }) : t && r && r?.length > 0 ? (0, g.jsx)("div", {
            className: "rockstargames-sites-gta-gen9d4a1a1e4fc4c16138d3c879bc1864227",
            children: r.map((e => (0, g.jsx)(s.Badge, {
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
            description: r,
            fadesOut: i = !1,
            badges: c
          } = e;
          return (0, g.jsx)(p, {
            initial: v.fade.out.initial,
            animate: {
              opacity: i ? 0 : 1
            },
            transition: h.fade,
            className: f.textOverlay,
            children: (0, g.jsxs)("div", {
              className: f.content,
              children: [(0, g.jsx)(u, {
                hasTag: a,
                tag: s,
                badges: c?.filter((e => e?.isPrimary))
              }), (0, g.jsx)("h3", {
                children: t
              }), n && r && (0, g.jsx)("div", {
                className: f.description,
                children: r
              })]
            })
          })
        },
        x = e => {
          let {
            title: t,
            showTitle: a = !0,
            showBackground: s = !0,
            tag: r,
            tagStyle: i,
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
          }), [d]), (0, g.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9f721d7192d3e29e64567a729fd8d5985",
            ref: d,
            "data-show-background": s,
            children: [a && (0, g.jsx)("span", {
              className: "rockstargames-sites-gta-gen9f390fe2c9338785ce412483a1bac624c",
              children: t
            }), (0, g.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9fc5ca7a7cb4da6745e4dbef89b12bfe8",
              children: [(0, g.jsx)("span", {
                className: "rockstargames-sites-gta-gen9b7ba435d2cec78951bdb0b812b098b72",
                "data-tag-style": i || "free",
                children: r
              }), (0, g.jsx)("span", {
                className: "rockstargames-sites-gta-gen9d8c7408e6335e53326bc70a1a065f81b",
                children: c
              }), (0, g.jsx)("span", {
                className: "rockstargames-sites-gta-gen9a3632910b63514f6b49539fe45bcccb6",
                children: o
              })]
            })]
          })
        };
      var y = a(17104),
        _ = a(65388),
        N = a(39336),
        j = a(96201),
        S = a(23124),
        w = a(91232),
        C = a(56644);
      const T = {
          ps5: N,
          ps4: _,
          ps: y,
          xboxone: S,
          xbox: w,
          xboxseriesxs: j,
          pc: C,
          googleplay: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2ef574ea2aa502447d579267ff37e251.svg",
          applestore: "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c6affc8b37ec4c75486ab6d12b2de395.svg"
        },
        E = e => {
          let {
            title: t,
            showTitle: a = !0,
            showBackground: s = !0,
            platformOptions: r,
            setPricingContainerHeight: i = (() => {})
          } = e;
          const c = (0, n.createRef)();
          return (0, n.useEffect)((() => {
            const e = () => {
              c.current && null !== i && i(c.current.clientHeight)
            };
            return e(), window.addEventListener("resize", e), () => {
              window.removeEventListener("resize", e)
            }
          }), [c]), (0, g.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9e754e3afc303a114f9e28e09c5519a30",
            ref: c,
            "data-show-background": s,
            children: [a && (0, g.jsx)("span", {
              className: "rockstargames-sites-gta-gen9fd98e3d7af2a583d4338d802666901a5",
              children: t
            }), r?.platformsAndLinks && (0, g.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9cbde4b9406c59131d6d4c8d9b2291a84",
              children: [(0, g.jsx)(u, {
                hasTag: r?._memoq?.platformTag,
                tag: r?._memoq?.platformTag,
                tagStyle: r?._memoq?.platformTagStyle
              }), (0, g.jsx)("div", {
                className: "rockstargames-sites-gta-gen9b7de0e1798d1a020191fbe44b67f34d2",
                children: r.platformsAndLinks.map((e => {
                  let {
                    platform: t,
                    buttonText: a
                  } = e;
                  return (0, g.jsx)("img", {
                    className: "rockstargames-sites-gta-gen9aa5f852c8932dcf689a97496d437f13b",
                    alt: a,
                    src: T[t]
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
            expandedView: r = !1,
            children: i,
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
              description: r,
              collapsedHasDescription: i,
              size: c,
              title: o,
              expandedView: l,
              badges: d
            } = e;
            const [m, u] = (0, n.useState)(null), f = (0, n.useMemo)((() => {
              if (!t) return null;
              const e = "sm" !== c && i;
              return (0, g.jsx)(k, {
                title: o,
                hasTag: s,
                tag: a,
                hasDescription: e,
                description: r,
                fadesOut: l,
                badges: d
              })
            }), [t, a, s, r, i, c, o, l, d]);
            return (0, n.useEffect)((() => {
              u(f)
            }), [f]), [m, u]
          })({
            ...t,
            size: s,
            title: a,
            expandedView: r
          }), u = void 0 !== c?.hasPricingOptions || null !== d;
          return (0, g.jsxs)("header", {
            className: "rockstargames-sites-gta-gen9c525342927ce11e37cc24e653e0ffc95",
            "data-is-covercard": l,
            "data-expanded-view": r,
            children: [n.Children.map(i, (e => (0, n.cloneElement)(e, {
              title: a,
              size: s,
              expandedView: r
            }))), m, u && (0, g.jsxs)(g.Fragment, {
              children: [!0 === d?.hasPlatformOptions && (0, g.jsx)(E, {
                title: a,
                platformOptions: d,
                pricingOptions: c,
                setPricingContainerHeight: o
              }), !0 === c?.hasPricingOptions && (0, g.jsx)(x, {
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
          Animations: I
        } = s.framer,
        {
          transitions: L
        } = I,
        B = e => {
          let {
            components: t,
            payload: a,
            prod: i,
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
            cardIds: j,
            id: S,
            pricingOptions: w,
            pricingContainerHeight: C,
            isCoverCard: T,
            platformOptions: E,
            isProductCard: I = !1
          } = e;
          const B = (0, n.useRef)(),
            $ = (0, n.useRef)(),
            {
              tag: D,
              expandedHasTag: H,
              badges: O
            } = k;
          l().set(a, "meta.prod", i);
          const [, G] = (0, d.useSearchParams)(), [V, z] = (0, n.useState)(null), A = _?.props?.images.length > 0;
          let R = (0, g.jsx)("h1", {
            children: o
          });
          return T && (R = null), (0, n.useEffect)((() => {
            null !== V && V < j?.length && V > -1 && G({
              info: j[V]
            })
          }), [V, j]), (0, n.useEffect)((() => {
            j?.forEach(((e, t) => {
              e === S && z(t)
            }))
          }), [j, S]), (0, n.useEffect)((() => {
            const e = () => {
              B.current && B.current.scrollTop > 0 && window.innerWidth >= window.innerHeight && (B.current.scrollTop = 0)
            };
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
          }), []), (0, g.jsx)(m.DataLayerProvider, {
            card_id: S,
            card_name: o?.toLowerCase(),
            children: (0, g.jsx)(s.ScrollTracker, {
              threshold: [25, 50, 75, 90, 100],
              trackRef: "long" === v ? B : $,
              children: (0, g.jsxs)(P, {
                ref: B,
                initial: f,
                animate: p,
                variants: b.expanded,
                transition: L.cardOpen,
                className: (0, r.classList)("rockstargames-sites-gta-gen9dcb84dcfd34616fb0089133acf0c4669", y),
                "data-type": v,
                "data-size": c,
                "data-product": I,
                "data-covercard": T || !1,
                "data-context": h,
                style: {
                  "--product-card-pricing-info-height": `${C||0}px`
                },
                children: [A && (0, g.jsx)(M, {
                  size: c,
                  title: o,
                  textOverlayProps: k,
                  expandedView: !0,
                  pricingOptions: w,
                  platformOptions: E,
                  isCoverCard: T,
                  children: _
                }), (0, g.jsxs)(P, {
                  ref: $,
                  className: "rockstargames-sites-gta-gen9eaf357a8d0bae1199142949cbf24e7b9",
                  variants: b.expandedContents,
                  transition: L.afterCardOpen,
                  "data-theme": N,
                  children: [(0, g.jsxs)("div", {
                    className: "rockstargames-sites-gta-gen9fc0e079f7c184b912d5a46b037d01b0d",
                    children: [(0, g.jsx)(u, {
                      hasTag: H,
                      tag: D,
                      badges: O
                    }), R, I && (0, g.jsxs)(g.Fragment, {
                      children: [!0 === E?.hasPlatformOptions && (0, g.jsx)("div", {
                        className: "rockstargames-sites-gta-gen9b630c7c1f59f91f2ac304af525b6d081",
                        children: (0, g.jsx)(u, {
                          hasTag: E?.hasPlatformOptions,
                          tag: E?._memoq?.platformTag,
                          tagStyle: E?._memoq?.platformTagStyle
                        })
                      }), !0 === w?.hasPricingOptions && (0, g.jsx)(x, {
                        title: o,
                        showTitle: !1,
                        showBackground: !1,
                        tag: w?._memoq?.tag,
                        tagStyle: w?.tagStyle || "free",
                        discountPrice: w?._memoq?.discountPrice,
                        originalPrice: w?._memoq?.originalPrice
                      })]
                    })]
                  }), (0, g.jsx)(r.TinaParser, {
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
      var $ = a(98e3),
        D = a(42836);
      const H = e => {
          let {
            id: t,
            position: a,
            title: s,
            size: r = "md",
            sectionTitle: i = "",
            expandedType: c = null,
            modalProps: o = {
              content: null,
              className: "",
              contentClassName: ""
            },
            className: l,
            children: m,
            isProductCard: u,
            cardIds: f = null,
            theme: p = "none",
            isCoverCard: b
          } = e;
          const [v, h] = (0, d.useSearchParams)(), k = (0, n.useRef)(null), [, x] = (0, $.i)(), {
            track: y
          } = (0, D.useGtmTrack)(), [_, N] = (0, n.useState)(!1), j = () => {
            N(!1), x(null), h({}), y({
              event: "trackPageview"
            })
          }, S = () => {
            if (!o?.content || !k.current || !c || "linkout" === c) return;
            const e = k.current,
              n = window.getComputedStyle(e),
              i = parseInt(n.getPropertyValue("width"), 10),
              l = parseInt(n.getPropertyValue("height"), 10),
              d = e.getBoundingClientRect(),
              {
                content: m,
                className: g,
                contentClassName: u
              } = o,
              b = "fob" === r ? "fob" : "default";
            x({
              content: m,
              onClose: j,
              rect: d,
              width: i,
              height: l,
              className: g,
              contentClassName: u,
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
                size: r,
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
            }) : S(), y({
              event: "card_click",
              element_placement: i?.toLowerCase(),
              event_category: "card",
              event_action: "click",
              event_label: i?.toLowerCase(),
              position: a,
              card_id: t,
              card_name: s?.toLowerCase(),
              link_url: window.location.href
            }))
          };
          return (0, n.useEffect)((() => {
            _ && S()
          }), [_]), (0, n.useEffect)((() => {
            N(v.get("info") === t)
          }), [v.get("info"), t]), (0, g.jsx)("div", {
            ref: k,
            onClick: w,
            onKeyUp: e => {
              (e => {
                "Enter" === e.code && w(e)
              })(e)
            },
            className: l,
            "data-size": r,
            "data-type": c,
            "data-product": u,
            role: "button",
            tabIndex: "linkout" !== c ? 0 : -1,
            "aria-label": s,
            children: m
          })
        },
        O = {
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
            images: i,
            size: o,
            title: l,
            initial: d,
            animate: m,
            variants: u,
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
            theme: j,
            cardIds: S,
            pricingOptions: w,
            platformOptions: C = null,
            pricingContainerHeight: T,
            isCoverCard: E = !1,
            isProductCard: M = !1
          } = e;
          const P = (0, r.useTinaComponents)(),
            I = (0, n.useMemo)((() => ({
              ...P,
              HTMLElement: s.HTMLElement,
              ImageWithBadge: s.ImageWithBadge,
              Carousel: s.Carousel,
              GroupOfItems: c()
            })), [P]),
            L = (0, n.useMemo)((() => (0, g.jsx)(B, {
              type: v,
              components: I,
              payload: t,
              prod: a,
              images: i,
              size: o,
              title: l,
              context: h,
              textOverlayProps: y,
              initial: d,
              animate: m,
              variants: u,
              theme: j,
              cardIds: S,
              pricingOptions: w,
              id: f,
              pricingContainerHeight: T,
              isCoverCard: E,
              platformOptions: C,
              isProductCard: M,
              children: x
            })), [v, i, a, o, l, y, x, d, m, u, I, t, M]),
            $ = [O.card, E ? O.coverCardWrapper : ""].join(" ");
          return (0, g.jsx)(H, {
            id: f,
            position: p,
            sectionTitle: b,
            title: l,
            size: o,
            expandedType: v,
            images: i,
            deckProps: _,
            modalProps: {
              content: L,
              ...N
            },
            className: $,
            isProductCard: M,
            cardIds: S,
            theme: j,
            isCoverCard: E,
            children: k
          })
        };
      var V = a(45652);
      const z = {
          layeredImageFrame: "rockstargames-sites-gta-gen9f4291aa18340b383f772137ec9e0c582",
          layered: "rockstargames-sites-gta-gen9f48bca962431b0e1cbf30e25dfb23979",
          foreground: "rockstargames-sites-gta-gen9b52f487de5963cf5eab84e86c244302b",
          imageMask: "rockstargames-sites-gta-gen9f55d22ef90c565718cad7bf6387893a7",
          logo: "rockstargames-sites-gta-gen9fa6e98cbad19c314e5759f3aa0a2f9b3",
          "sm-horizontal": "rockstargames-sites-gta-gen9b496d31814195834a5e84fa5157ede59"
        },
        {
          LiteMotion: A,
          Animations: R
        } = s.framer,
        {
          getVariant: F,
          variants: W,
          transitions: q
        } = R,
        U = e => {
          let {
            image: t,
            i: a,
            prod: s
          } = e;
          const {
            alt: n,
            src: r
          } = (0, V.useImageParser)({
            ...t,
            prod: s
          });
          return (0, g.jsx)("img", {
            src: r.mobile,
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
            expandedView: i = !1,
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
          const d = (0, n.useMemo)((() => t?.length && 0 !== t.length ? t.map((e => (0, g.jsx)(A, {
            className: (0, r.classList)(z[e?.specialClass] ?? z.imageMask, z[e?.sizeClass], e?.className),
            variants: F(e?.specialClass ?? "imageMask", i ? "expanded" : "collapsed"),
            initial: "initial",
            animate: "animate",
            transition: q.cardOpen,
            children: (0, g.jsx)(U, {
              image: e,
              prod: s
            })
          }, e.key))) : null), [t, o, i, s]);
          return (0, g.jsx)(A, {
            className: (0, r.classList)(z.layeredImageFrame, t.length > 1 ? z.layered : z.flat, a),
            style: c,
            initial: W.fade.in.initial,
            animate: W.fade.in.animate,
            transition: q.instantFade,
            "data-expanded-view": i,
            children: d
          })
        },
        Q = e => {
          let {
            expandedType: t,
            to: a,
            children: r,
            style: i,
            sectionTitle: c = "",
            id: o,
            cardTitle: l,
            position: d
          } = e;
          const {
            track: m
          } = (0, D.useGtmTrack)(), u = (0, n.useCallback)((() => {
            m({
              event: "card_click",
              event_action: "click",
              event_category: "card",
              event_label: c,
              link_url: a,
              card_id: o,
              card_name: l,
              element_placement: c,
              position: d
            })
          }), [c, a, o, l, c, d]);
          return "linkout" === t && a ? (0, g.jsx)(s.A, {
            to: a,
            style: i,
            target: a?.startsWith("http") ? "_blank" : "_self",
            onClick: u,
            children: r
          }) : r
        },
        X = {
          pillBtn: "rockstargames-sites-gta-gen9c484e5a1bcbdd4b338bd6fe49900d6cf",
          selected: "rockstargames-sites-gta-gen9d65c523327b32d2de08dc996cf9d7071",
          customModalContent: "rockstargames-sites-gta-gen9c0a9f620e5c9749f0eebe506acda4122",
          content: "rockstargames-sites-gta-gen9cebbc72d1229514723b9d664281b472f"
        },
        {
          variants: Y
        } = s.framer.Animations,
        Z = e => {
          let {
            id: t,
            title: a,
            content: s,
            size: i = "md",
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
            tina: u = {},
            position: f = 0,
            sectionTitle: p = "",
            theme: b,
            pricingOptions: v,
            cardIds: h,
            platformOptions: k = null
          } = e;
          const x = (0, r.useTinaPayload)(),
            y = u?.payload?.meta?.cdn ?? x?.meta?.prod ?? !1,
            [_, N] = (0, n.useState)(d?.size ?? i),
            [j, S] = (0, n.useState)(0),
            w = void 0 !== v?.hasPricingOptions || void 0 !== k?.hasPlatformOptions;
          return (0, n.useEffect)((() => {
            N(d?.size ?? i)
          }), [d?.size, i]), (0, g.jsx)(G, {
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
            variants: Y.plainCard,
            textOverlayProps: o,
            modalProps: {
              className: X.customModal,
              contentClassName: X.customModalContent
            },
            expandedCardContents: (0, g.jsx)(K, {
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
            pricingContainerHeight: j,
            isProductCard: w,
            children: (0, g.jsx)(Q, {
              expandedType: c,
              to: m,
              sectionTitle: p,
              id: t,
              cardTitle: a,
              position: f,
              children: (0, g.jsx)("div", {
                className: X.content,
                "data-product": w,
                children: (0, g.jsx)(M, {
                  title: a,
                  size: _,
                  textOverlayProps: o,
                  pricingOptions: v,
                  platformOptions: k,
                  setPricingContainerHeight: S,
                  children: (0, g.jsx)(K, {
                    images: l,
                    prod: y
                  })
                })
              })
            })
          })
        },
        {
          variants: J
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
          variants: re
        } = s.framer.Animations,
        ie = e => {
          let {
            id: t,
            logoImage: a = null,
            title: s,
            titleSizeClass: i = null,
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
            deckProps: u = {},
            to: f = null,
            tina: p = {},
            cardIds: b,
            theme: v
          } = e;
          const h = (0, r.useTinaPayload)(),
            k = p?.payload?.meta?.cdn ?? h?.meta?.prod ?? !1,
            [x, y] = (0, n.useState)(u?.size ?? o),
            _ = (0, r.useGetCdnSource)(a ?? null);
          let N = null;
          return h.content && (N = h?.content[0]?._memoq ? h?.content[0]?._memoq?.body : null), (0, n.useEffect)((() => {
            y(u?.size ?? o)
          }), [u?.size, o]), (0, g.jsx)(G, {
            id: t,
            title: s,
            size: x,
            expandedType: l,
            images: m,
            deckProps: u,
            prod: k,
            payload: {
              content: c,
              meta: {}
            },
            variants: re.plainCard,
            textOverlayProps: d,
            modalProps: {
              className: ne.customModal,
              contentClassName: ne.customModalContent
            },
            expandedCardContents: (0, g.jsx)(K, {
              images: m,
              prod: k,
              expandedView: !0
            }),
            theme: v,
            cardIds: b,
            isCoverCard: !0,
            children: (0, g.jsx)(Q, {
              expandedType: l,
              to: f,
              children: (0, g.jsxs)("div", {
                className: ne.content,
                children: [a && (0, g.jsx)("img", {
                  className: ne.logo,
                  alt: "logo",
                  src: _
                }), (0, g.jsx)("h2", {
                  className: i,
                  children: s
                }), null !== N && (0, g.jsx)("p", {
                  children: N
                }), (0, g.jsx)("button", {
                  type: "button",
                  children: (0, g.jsx)(ae.FormattedMessage, {
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
            expandedView: r,
            variants: i,
            transition: c
          } = e;
          const o = (0, n.useMemo)((() => t && 0 !== t?.length ? t.map((e => e?.image?.sources ? (0, g.jsx)(s.ImageWithBadge, {
            ...e,
            style: {
              "--object-position": e?.objectPosition ?? ""
            }
          }) : null)) : null), [t]);
          return !o?.length || o?.length < 1 ? null : 1 === o.length ? o : (0, g.jsx)(s.ThumbsGallery, {
            slideChildren: o,
            title: a,
            navigation: r,
            thumbsVisible: r,
            spaceBetween: 0,
            variants: i,
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
            size: i = "md",
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
            payload: u,
            position: f = 0,
            sectionTitle: p = "",
            cardIds: b
          } = e;
          const v = (0, r.useTinaPayload)(),
            h = u ?? v,
            k = m?.payload?.meta?.cdn ?? h?.meta?.prod ?? !1,
            x = ((e, t) => e?.map((e => e?.image ? {
              ...e,
              image: {
                ...e.image,
                prod: t
              }
            } : e)))(l, k),
            [y, _] = (0, n.useState)(d?.size ?? i),
            {
              parent: N,
              main: j,
              thumbs: S
            } = de?.cardWithImageGallery?.gallery ?? {};
          return (0, n.useEffect)((() => {
            _(d?.size ?? i)
          }), [d?.size, i]), (0, g.jsx)(G, {
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
            expandedCardContents: (0, g.jsx)(ce, {
              images: x,
              title: a,
              navigation: !0,
              thumbsVisible: !0,
              variants: {
                parent: N,
                main: j,
                thumbs: S
              },
              transition: {
                parent: le.cardOpen,
                main: le.cardOpen,
                thumbs: le.cardOpen
              }
            }),
            cardIds: b,
            children: (0, g.jsx)("div", {
              className: oe.content,
              children: (0, g.jsx)(M, {
                title: a,
                size: y,
                textOverlayProps: o,
                children: (0, g.jsx)(ce, {
                  images: x,
                  title: a,
                  navigation: !1,
                  thumbsVisible: !1
                })
              })
            })
          })
        },
        ge = e => {
          let {
            title: t,
            content: a,
            size: n = "md",
            badgeText: i
          } = e;
          const c = {
            ...(0, r.useTinaComponents)(),
            HTMLElement: s.HTMLElement,
            UnorderedList: s.UnorderedList,
            ListItem: s.ListItem
          };
          return (0, g.jsx)("div", {
            className: "rockstargames-sites-gta-gen9d392587df58204b0910e721ef1f3c35c",
            "data-size": n,
            children: (0, g.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9a002b98d034f1897c7e1f31327ff08dc",
              children: [i && (0, g.jsx)("div", {
                className: "rockstargames-sites-gta-gen9d9901d1bb91e1fbc1e857964083fe496",
                children: i
              }), (0, g.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9bea322f6e3afa31355668ad164496730",
                children: [t && (0, g.jsx)("h3", {
                  children: t
                }), (0, g.jsx)(r.TinaParser, {
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
          Gen9CoreCarousel: ue,
          framer: fe,
          useTinaModuleFetchByIds: pe,
          withSimpleErrorBoundary: be
        } = s,
        ve = {
          Card: Z,
          CardWithImageGallery: me,
          TextCard: ge,
          ...s
        },
        he = fe.withFadeIn(be((e => {
          let {
            cards: t = [],
            size: a,
            name: s,
            title: i,
            description: c,
            customSlidesPerView: o = null,
            theme: m = "none",
            cardSizeBreakpoints: u = {},
            customAspectRatio: f = "3/1",
            titleBadge: p = null
          } = e;
          const b = (0, n.useRef)(null),
            v = l().map(t, "id"),
            h = pe({
              ids: v
            }),
            [k, x] = (0, n.useState)(o),
            [y] = (0, d.useSearchParams)(),
            [_, N] = (0, n.useState)(!1);
          (0, n.useEffect)((() => {
            if ("fob" === a) {
              const e = y.get("section");
              if (e && "games" === e && !_ && (N(!0), b.current)) {
                const e = 100;
                window.scrollTo(0, b.current.offsetTop - e)
              }
            }
          }), []), (0, n.useEffect)((() => {
            if (!b.current) return;
            const e = () => {
              const e = o || window.getComputedStyle(b.current).getPropertyValue("--slides-per-view");
              x(e)
            };
            return window.addEventListener("resize", e), e(), () => {
              window.removeEventListener("resize", e)
            }
          }));
          const j = (0, n.useMemo)((() => {
            let e = 0;
            return h ? h.reduce(((t, s) => {
              if (s) {
                const {
                  id: n,
                  tina: c
                } = s, o = l().clone(c);
                l().set(o, "payload.meta.id", n), t.push((0, g.jsx)(r.TinaParser, {
                  components: ve,
                  tina: o,
                  componentProps: {
                    deckProps: {
                      size: a
                    },
                    tina: o,
                    id: n,
                    position: e,
                    sectionTitle: i,
                    theme: m,
                    cardIds: v
                  }
                }, n)), e += 1
              }
              return t
            }), []) : null
          }), [h, a]);
          return (0, g.jsx)("div", {
            className: "rockstargames-sites-gta-gen9caf46db6464a84ad4990aed75ef74ff1",
            "data-theme": m,
            ref: b,
            children: (0, g.jsx)(ue, {
              description: c,
              size: a,
              cardSizeBreakpoints: u,
              slideChildren: j,
              title: i,
              name: s,
              customSlidesPerView: k,
              customAspectRatio: f,
              titleBadge: p
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
        je = e => e.scrollHeight > e.clientHeight;

      function Se(e, t) {
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
          } else l().isObject(e) && !l().isArray(e) ? Se(e, t) : l().isArray(e) && (a[s] = e.map((e => l().isObject(e) ? Se(e, t) : e)))
        })), a
      }
      const we = (0, m.withTranslations)((e => {
          let {
            active: t,
            styles: a,
            title: i,
            itemNumber: c,
            inModalMode: o,
            openModalMode: l,
            element: d,
            upNext: m,
            mobileMode: u,
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
          const j = (0, ae.useIntl)(),
            {
              track: S
            } = (0, D.useGtmTrack)(),
            w = (0, n.createRef)(),
            C = (0, n.createRef)(),
            T = (0, n.createRef)(),
            E = (0, n.createRef)(),
            M = (0, n.createRef)(),
            [P, I] = (0, n.useState)(!1),
            [L, B] = (0, n.useState)(0),
            [$, H] = (0, n.useState)(0),
            [O, G] = (0, n.useState)(0),
            [z, A] = (0, n.useState)(0),
            [R, F] = (0, n.useState)(0),
            [W, q] = (0, n.useState)(!1),
            [U, K] = (0, n.useState)(0),
            [Q, X] = (0, n.useState)(0),
            [Y, Z] = (0, n.useState)(0),
            [J, ee] = (0, n.useState)("700"),
            [te, ne] = (0, n.useState)(-1),
            [re, ie] = (0, n.useState)(0),
            [ce, oe] = (0, n.useState)(0),
            [le, de] = (0, n.useState)(0),
            [me, ge] = (0, n.useState)(!1),
            [ue, fe] = (0, n.useState)(""),
            [pe, be] = (0, n.useState)(null),
            [ve, he] = (0, n.useState)(!1),
            [ke, xe] = (0, n.useState)(null),
            [we, Ce] = (0, n.useState)(!1),
            [Te, Ee] = (0, n.useState)(!1),
            Me = (0, r.useTinaPayload)(),
            Pe = b?.payload?.meta?.cdn ?? !1 ?? Me?.meta?.prod ?? !1,
            Ie = (0, r.useTranslations)({
              payload: b?.payload,
              variables: b?.variables
            }),
            Le = Ie?.meta ?? {},
            Be = Se(Ie?.content?.[0], Pe),
            $e = (0, n.useMemo)((() => Be?.images?.[0]?.image?.badge), [Be]),
            De = (0, n.useMemo)((() => Be.title ?? i ?? Le?.title), [i, Le?.title, Be.title]),
            He = (0, V.useImageParser)({
              alt: Be?.images?.[0]?.image?.alt ?? "",
              ariaLabel: Be?.images?.[0]?.image?.alt ?? "",
              sources: Be?.images?.[0]?.image?.sources ?? [],
              prod: Pe
            }),
            Oe = He?.src?.mobile ?? He?.src?.desktop ?? !1,
            Ge = (0, n.useMemo)((() => Le?.foreignId), [Le]),
            Ve = (0, n.useMemo)((() => Le?.foreignTitle), [Le]),
            [ze, Ae] = (0, n.useState)(0),
            [Re, Fe] = (0, n.useState)(0),
            [We, qe] = (0, n.useState)(0),
            [Ue, Ke] = (0, n.useState)(0),
            [Qe, Xe] = (0, n.useState)(!1),
            [Ye, Ze] = (0, n.useState)(0),
            [Je, et] = (0, n.useState)(20),
            [tt, at] = (0, n.useState)(null),
            [st, nt] = (0, n.useState)(!1),
            rt = (0, n.useCallback)((e => {
              if (!0 === W || !o && !u || ve) return;
              const t = Ne(e);
              Ae(t.x), Fe(t.y)
            }), [W, o]),
            it = e => {
              rt(e)
            },
            ct = e => {
              if (!0 === W || 0 === ze || !o && !u || ve) return;
              const t = Ne(e),
                a = t.x > ze ? 1 : -1,
                s = Math.abs(ze - t.x);
              o && !u && s > Je ? (nt(!0), fe(a > 0 ? "prev" : "next"), lt()) : (Xe(!0), Ze(s * a), N(s * a))
            },
            ot = e => {
              if (!0 === W || !o && !u || ve) return;
              const t = Ne(e),
                a = t.x > ze ? 1 : -1,
                s = Math.abs(ze - t.x),
                n = Math.abs(Re - t.y);
              o && !u ? (lt(), fe("")) : s > Je && n < 25 ? (nt(!0), fe(a > 0 ? "prev" : "next"), lt()) : lt()
            },
            lt = () => {
              q(!0), Ae(0), Fe(0), Xe(!1), Ze(0), N(0)
            };
          return (0, n.useEffect)((() => {
            let e = U;
            P ? e = 0 : o && !u && (e = U), B(e)
          }), [P, u, o, $, z, Q, Y, O, U]), (0, n.useEffect)((() => {
            I(!(!o || !u))
          }), [o, u]), (0, n.useEffect)((() => {
            o && t && S({
              event: "virtualPageview",
              display_type: u ? "mobile" : "desktop",
              view_name: `${Ge}/${De}`,
              source_content_id: Ge,
              source_content_name: Ve
            })
          }), [o, t]), (0, n.useEffect)((() => {
            const e = ye()(((e, t) => {
              let a = 18;
              if (e?.documentElement && (a = _e(e?.documentElement, "--root-font-size")), ce !== t.innerHeight && oe(t.innerHeight), f?.current) {
                Z(_e(f.current, "--eventDeck-marginSm") * a);
                const e = a * _e(f?.current, "--eventDeck-modalGutters"),
                  s = t?.innerWidth,
                  n = s - 2 * e;
                H(n), E.current && u && G(n), A(_e(f.current, "--eventDeck-itemSize") * a), de(_e(f.current, "--eventDeck-phaseOneTransitionDuration"));
                const r = _e(f?.current, "--eventDeck-itemImageTitleMargins") * a,
                  i = C?.current?.clientHeight,
                  c = i + r;
                Number.isNaN(c) || K(c), ie(_e(f?.current, "--eventDeck-headerHeight") * a)
              }
              let s = Math.min(700, t.innerWidth);
              u || (s = 900), ee(`${s}`)
            }), 300);
            return window.addEventListener("resize", (() => {
              e(document, window)
            })), e(document, window), () => {
              window.removeEventListener("resize", (() => {
                e(document, window)
              }))
            }
          }), [f, u]), (0, n.useEffect)((() => {
            if (w.current) {
              const e = w.current.clientHeight;
              Number.isNaN(e) || X(e)
            }
          }), [w]), (0, n.useEffect)((() => {
            if (o && u && E.current && (E.current.style.transform = "scale(1) translate3d(0, 0, 0)"), !o && u && E.current) {
              const e = 228 / $;
              E.current.style.transform = `scale(${e}) translate3d(0, 0, 0)`
            }!u && E.current && (E.current.style.transform = null)
          }), [o, u, $, O]), (0, n.useEffect)((() => {
            const e = .5 * $,
              t = ce - re - 3 * Y;
            F($ - (e < t ? e : t))
          }), [$, Y, ce]), (0, n.useEffect)((() => {
            "next" === ue ? (h(null, !0), fe("")) : "prev" === ue && (v(null, !0), fe(""))
          }), [ue]), (0, n.useEffect)((() => {
            qe(0), Ke(0)
          }), [u]), (0, n.useEffect)((() => {
            u ? et(o ? 35 : 20) : o && et(50)
          }), [o, u]), (0, n.useEffect)((() => {
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
              q(!1), Ae(0)
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
              ge(!me)
            }), le)
          }), [o]), (0, n.useEffect)((() => (document.body.addEventListener("mouseleave", lt), () => {
            document.body.removeEventListener("mouseleave", lt)
          })), []), (0, n.useEffect)((() => {
            M.current ? Ce(je(M.current)) : Ce(!1), void 0 !== d && d.current ? Ee(je(d.current)) : Ee(!1)
          }), [d, M, t, o, me]), Be ? (0, g.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9c4090652e3c0a4e1979bb0a36b22b7cd",
            ref: d,
            "data-item-position": c,
            "data-modal-mode": o,
            "data-active-item": t,
            "data-up-next": m,
            "data-transition": Qe || 0 !== _ ? "none" : k,
            "data-scrollable": Te,
            style: {
              ...a,
              transform: o && t && !u ? `translate3d(${We+Ye}px, ${Ue}px, 0)` : u && !o ? `translate3d(${We+_}px, ${Ue}px, 0)` : a?.transform
            },
            onClick: e => {
              st || (o ? o && !u && (c < x ? v(e, !0) : c > x && h(e, !0)) : l(e))
            },
            onMouseEnter: () => {
              o || I(!0), o || u || (clearTimeout(te), ne(setTimeout((() => {
                S({
                  event: "card_title_hover",
                  event_category: "card",
                  event_action: "title_hover",
                  event_label: y,
                  card_name: De,
                  card_id: c,
                  position: c,
                  view_name: `${Ge}/${Ve}`,
                  source_content_id: Ge,
                  source_content_name: Ve
                })
              }), 1e3)))
            },
            onMouseLeave: () => {
              o || I(!1), o || u || clearTimeout(te)
            },
            onTouchStart: it,
            onTouchMove: ct,
            onTouchEnd: ot,
            onMouseDown: it,
            onMouseMove: ct,
            onMouseUp: ot,
            onKeyUp: e => {
              "Enter" === e.key && (o || l(e))
            },
            tabIndex: o ? -1 : 0,
            "aria-label": o ? j.formatMessage(se.card.events_deck_modal_group_label) : "",
            role: o ? "dialog" : "presentation",
            children: [(0, g.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9b9c878efb14d25c323e95f01b7a53460",
              "data-full-header": P,
              ref: T,
              style: {
                height: o && u ? `${$}px` : null,
                width: o && u ? `${$}px` : null
              },
              children: [Oe && (0, g.jsx)("img", {
                ref: E,
                src: `${He?.src?.mobile??He?.src?.desktop}?im=Resize,width=${J}`,
                alt: He?.alt,
                style: {
                  width: 0 !== O && u ? `${O}px` : null,
                  height: 0 !== O && u ? `${O}px` : null
                }
              }), (0, g.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9ba8c09e500ea0845dc20d380e8ec11ca",
                style: {
                  transform: !u || u && o ? `translate3d(0, ${L}px, 0)` : null
                },
                children: [$e && (0, g.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9cbbb0470197acdc4f0ec1f567f5c8a42",
                  ref: w,
                  children: (0, g.jsx)(s.Badge, {
                    text: $e
                  })
                }), (0, g.jsx)("span", {
                  className: "rockstargames-sites-gta-gen9aca2b0fbf7c1dbcbf99e53812b9abc8e",
                  ref: C,
                  "aria-hidden": o,
                  children: De
                })]
              })]
            }), (0, g.jsxs)("div", {
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
                top: o && u ? `${$}px` : null,
                width: o && !u && t ? `${R}px` : null,
                touchAction: we || u ? "unset" : "none"
              },
              children: [De && (0, g.jsx)("span", {
                className: "rockstargames-sites-gta-gen9a8fbffe55d92fc2f04e5e6b8f9267206",
                children: De
              }), (0, g.jsx)("div", {
                className: "rockstargames-sites-gta-gen9e20bd8af5d67954447804e0e21161d3b",
                children: (0, g.jsx)(r.TinaParser, {
                  components: p,
                  tina: {
                    meta: Le,
                    payload: {
                      content: Be?.content
                    }
                  }
                })
              })]
            })]
          }) : null
        })),
        Ce = "rockstargames-sites-gta-gen9bb65eb1ac15ed189c1a9f6700276efc0",
        Te = e => {
          let {
            prevPage: t,
            prevBtnDisabled: a,
            nextPage: s,
            nextBtnDisabled: n,
            selectedItemNumber: r,
            itemsData: i,
            closeModalMode: c,
            inModalMode: o,
            controlsHidden: l
          } = e;
          const d = (0, ae.useIntl)();
          return (0, g.jsxs)(g.Fragment, {
            children: [(0, g.jsxs)("div", {
              className: "rockstargames-sites-gta-gen9dc99156537faf101b73515aaa7d6da2b",
              "aria-hidden": l || "false",
              children: [(0, g.jsx)("button", {
                className: Ce,
                type: "button",
                onClick: t,
                disabled: a,
                "aria-label": o ? d.formatMessage(se.card.events_deck_modal_previous_aria_label) : d.formatMessage(se.card.events_deck_previous_aria_label)
              }), (0, g.jsxs)("span", {
                className: "rockstargames-sites-gta-gen9a94a647e9943db9c97ae87c8c6a162cd",
                "aria-hidden": !o,
                "aria-label": d.formatMessage(se.card.events_deck_paging_label, {
                  currentPage: r + 1,
                  totalPages: i.length
                }),
                children: [r + 1, (0, g.jsx)("span", {
                  className: "rockstargames-sites-gta-gen9fd027fcea9fd167b666599be78ab4f53"
                }), i.length]
              }), (0, g.jsx)("button", {
                className: Ce,
                type: "button",
                onClick: s,
                disabled: n,
                "aria-label": o ? d.formatMessage(se.card.events_deck_modal_next_aria_label) : d.formatMessage(se.card.events_deck_next_aria_label)
              })]
            }), (0, g.jsx)("button", {
              className: "rockstargames-sites-gta-gen9d43b6cdcbcc07082edacd9a7cb1598c5",
              type: "button",
              onClick: c,
              "aria-label": d.formatMessage(se.card.events_deck_modal_close_label),
              "aria-hidden": !o,
              tabIndex: o ? 0 : -1
            })]
          })
        };
      var Ee = a(84644),
        Me = a.n(Ee),
        Pe = a(5800),
        Ie = a.n(Pe),
        Le = a(23397),
        Be = a.n(Le),
        $e = a(73300),
        De = a(26352),
        He = a(71584),
        Oe = a(32456),
        Ge = a(23292),
        Ve = a(22904),
        ze = a(72256),
        Ae = a(25992),
        Re = a(3736),
        Fe = a(58960),
        We = a(47276),
        qe = a(23696);
      const Ue = {
          CalloutSection: s.CalloutSection,
          Card: Z,
          CardWithImageGallery: me,
          ConditionalBlock: s.ConditionalBlock,
          CoverCard: ie,
          Cta: s.Cta,
          DiscoveryCallout: De.c,
          EventsDeck: e => {
            const {
              setBodyIsLocked: t
            } = (0, m.useBodyScrollable)("EventsDeck"), {
              title: a
            } = e, {
              track: i
            } = (0, D.useGtmTrack)(), [o, d] = (0, n.useState)(!1), u = (() => {
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
            })(), [f, p] = (0, n.useState)([]), [b, v] = (0, n.useState)(null), [h, k] = (0, n.useState)(0), [x, y] = (0, n.useState)(window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth), [_, N] = (0, n.useState)(!1), j = (0, n.createRef)(), [S, w] = (0, n.useState)(null), C = (0, n.createRef)(), T = (0, n.createRef)(), [E, M] = (0, n.useState)([]), [P, I] = (0, n.useState)(!0), [L, B] = (0, n.useState)(!1), [$, H] = (0, n.useState)(!1), [O, G] = (0, n.useState)([]), [V, z] = (0, n.useState)(404), [A, R] = (0, n.useState)(808), [F, W] = (0, n.useState)(672), [q, U] = (0, n.useState)(336), [K, Q] = (0, n.useState)(0), [X, Y] = (0, n.useState)(0), [Z, J] = (0, n.useState)(0), [ae, se] = (0, n.useState)(0), [ne, re] = (0, n.useState)(0), [ie, ce] = (0, n.useState)(!1), oe = !!(0, m.usePrevious)(ie), [le, de] = (0, n.useState)(window.innerWidth), [ge, ue] = (0, n.useState)(0), [fe, pe] = (0, n.useState)(0), [be, ve] = (0, n.useState)(0), [he, ke] = (0, n.useState)(0), [xe, je] = (0, n.useState)(0), [Se, Ce] = (0, n.useState)(0), [Ee, Me] = (0, n.useState)(0), [Pe, Ie] = (0, n.useState)(0), [Le, Be] = (0, n.useState)(-1e3), [$e, De] = (0, n.useState)(0), [He, Oe] = (0, n.useState)(50), [Ge, Ve] = (0, n.useState)(0), [ze, Ae] = (0, n.useState)(!1), [Re, Fe] = (0, n.useState)(768), [We, qe] = (0, n.useState)(!1), [Ue, Ke] = (0, n.useState)(!1), [Qe, Xe] = (0, n.useState)(!1), [Ye, Ze] = (0, n.useState)(!1), [Je, et] = (0, n.useState)(!1), [tt, at] = (0, n.useState)(1e3), [st, nt] = (0, n.useState)(1.2), [rt, it] = (0, n.useState)(0), [ct, ot] = (0, n.useState)(!1), [lt, dt] = (0, n.useState)(!1), [mt, gt] = (0, n.useState)(!0), [ut, ft] = (0, n.useState)(!1), [pt, bt] = (0, n.useState)(!1), [vt, ht] = (0, n.useState)(null), [kt, xt] = (0, n.useState)(100), [yt, _t] = (0, n.useState)(!1), [Nt, jt] = (0, n.useState)({}), [St, wt] = (0, n.useState)(""), [Ct, Tt] = (0, n.useState)(0), [Et, Mt] = (0, n.useState)(!1), [Pt, It] = (0, n.useState)(!1), [Lt, Bt] = (0, n.useState)(0), [$t, Dt] = (0, n.useState)(0), [Ht, Ot] = (0, n.useState)(100), [Gt, Vt] = (0, n.useState)(!1), [zt, At] = (0, n.useState)(!1), Rt = () => le * ge + He, Ft = () => !1 === ze ? st : 1, Wt = e => e === Ee - 1 || e === Ee + 1, qt = () => {
              let e = -1 * Se;
              return e = -1 * Se - he, e
            }, Ut = function(e) {
              let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
              if (!0 === ze) return 0;
              const a = e.itemNumber % 2 == 0,
                s = V * st;
              if (!0 === a && 0 !== e.itemNumber) {
                const a = _e(e?.element?.current, "top");
                let n = a - Z;
                return !1 === t && (n -= a), -1 * (.5 * s + n) + rt
              }
              return Z - .5 * s + rt
            }, Kt = function(e, t) {
              let a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                s = qt();
              !1 === a && (s = 0);
              const n = le * ge,
                r = !1 === ze ? V * Ft() : n;
              return e.inModalMode && ze ? -1 === t ? Rt() * (Ee - e.itemNumber) * -1 - e.styles.left : Rt() * (e.itemNumber - Ee) - e.styles.left : -1 === t ? -1 * e.styles.left - r - He + s : n - e.styles.left + He + s
            }, Qt = (e, t, a) => {
              -1 === t && (B(!1), I(!0)), B(!1 === a && e >= t || !0 === a && e + 1 === t), I(e <= 0)
            }, Xt = function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (pt || ut) return;
              if (bt(!0), ie) return void
              function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (Ee + 1 >= f.length) return;
                const t = E[Ee + 1]?.tina?.payload?.meta?.title ?? `card-${Ee+1}`;
                i({
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
                }), Qt(Ee + 1, f.length, !0), ze ? ze && M(E.map((e => {
                  e.itemNumber === Ee - 1 ? e.upNext = !1 : e.itemNumber === Ee + 2 ? e.upNext = !0 : e.itemNumber === Ee + 1 ? e.active = !0 : e.itemNumber === Ee && (e.upNext = !0, e.active = !1);
                  const t = e.styles.transform.replace("translate3d(", "").split(",");
                  let a = Number(t[0].replace("px", ""));
                  a -= Rt();
                  const s = `translate3d(${a}px,${t[1]},${t[2]}`;
                  return e.styles = {
                    ...e.styles,
                    transform: s
                  }, e
                }))) : M(E.map((e => (e.itemNumber === Ee - 1 ? e.upNext = !1 : e.itemNumber === Ee + 2 ? e.upNext = !0 : e.itemNumber === Ee + 1 ? (e.active = !0, e.styles = {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${qt()}px, ${rt}px, 0) scale(1)`
                }) : e.itemNumber === Ee && (e.upNext = !0, e.active = !1, e.styles = {
                  ...e.styles,
                  transform: `translate3d(${Kt(e,-1)}px, ${Ut(e)}px, 0) scale(${Ft()})`
                }), e)))), Me(Ee + 1)
              }(t);
              const s = xe + 1;
              if (!(s > ne))
                if (i({
                    event: t ? "carousel_swipe" : "carousel_next",
                    event_category: "carousel",
                    event_action: t ? "swipe" : "next",
                    event_label: a,
                    element_placement: a?.toLowerCase() ?? ""
                  }), Qt(s, ne, !1), ze) {
                  let e = s * q * -1;
                  e < Le && (e = Le, B(!0), I(!1), je(ne)), je(s), M(E.map((t => (t.styles = {
                    ...t.styles,
                    transform: `translate3d(${e}px, 0, 0)`
                  }, t))))
                } else {
                  let e = Se - X;
                  je(s), e < Le && (e = Le, B(!0), I(!1), je(ne)), Ce(e)
                }
            }, Yt = function(e) {
              let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (pt || ut) return;
              if (bt(!0), !0 === ie) return void
              function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (pt) return;
                if (Ee - 1 < 0) return;
                const t = E[Ee - 1]?.tina?.payload?.meta?.title ?? "card-" + (Ee - 1);
                i({
                  event: e ? "modal_swipe" : "modal_previous",
                  event_category: "modal",
                  event_action: e ? "swipe" : "previous",
                  event_label: a,
                  element_placement: a,
                  card_name: t,
                  card_id: Ee - 1,
                  position: Ee - 1,
                  view_name: `${E[Ee-1].source_content_id}/${t}`,
                  source_content_id: E[Ee - 1].source_content_id,
                  source_content_name: E[Ee - 1].source_content_name
                }), Qt(Ee - 1, f.length, !0), ze || M(E.map((e => (e.itemNumber === Ee + 1 ? e.upNext = !1 : e.itemNumber === Ee - 2 ? e.upNext = !0 : e.itemNumber === Ee ? (e.upNext = !0, e.active = !1, e.styles = {
                  ...e.styles,
                  transform: `translate3d(${Kt(e,1)}px, ${Ut(e)}px, 0) scale(${Ft()})`
                }) : e.itemNumber === Ee - 1 && (e.active = !0, e.styles = {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${qt()}px, ${rt}px, 0) scale(1)`
                }), e)))), ze && M(E.map((e => {
                  e.itemNumber === Ee + 1 ? e.upNext = !1 : e.itemNumber === Ee - 2 ? e.upNext = !0 : e.itemNumber === Ee ? (e.upNext = !0, e.active = !1) : e.itemNumber === Ee - 1 && (e.active = !0);
                  const t = e.styles.transform.replace("translate3d(", "").split(",");
                  let a = Number(t[0].replace("px", ""));
                  a += Rt();
                  const s = `translate3d(${a}px,${t[1]},${t[2]}`;
                  return e.styles = {
                    ...e.styles,
                    transform: s
                  }, e
                }))), Me(Ee - 1)
              }(t);
              const s = xe - 1;
              if (!(s < 0))
                if (i({
                    event: t ? "carousel_swipe" : "carousel_previous",
                    event_category: "carousel",
                    event_action: t ? "swipe" : "previous",
                    event_label: a
                  }), Qt(s, ne, !1), ze) {
                  let e = s * q * -1;
                  e > 0 && (e = 0, I(!0), B(!1), je(0)), je(s), M(E.map((t => (t.styles = {
                    ...t.styles,
                    transform: `translate3d(${e}px, 0, 0)`
                  }, t))))
                } else {
                  let e = Se + X;
                  je(s), (e > 0 || 0 === e || -1 * e < A) && (e = 0, I(!0), B(!1), je(0)), Ce(e)
                }
            }, Zt = e => {
              if (Et || ie || ze) return;
              const t = Ne(e);
              Tt(t.x)
            }, Jt = e => {
              if (Et || 0 === Ct || ie || ze) return;
              const t = Ne(e),
                a = t.x > Ct ? 1 : -1;
              let s = Math.abs(Ct - t.x) * a;
              (0 === xe && 1 === a || xe === ne && -1 === a) && (s *= .35), It(!0), Bt(s)
            }, ea = e => {
              if (Et || ie || ze) return;
              const t = Ne(e),
                a = t.x > Ct ? 1 : -1,
                s = Math.abs(Ct - t.x);
              wt(s > Ht ? a > 0 ? "prev" : "next" : ""), ta()
            }, ta = () => {
              Mt(!0), Tt(0), Bt(0), It(!1)
            }, aa = e => {
              Pt && (ea(e), It(!1))
            }, sa = function(e, t) {
              let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
              return e.map(((e, s) => {
                let n = s * q,
                  r = s;
                !1 === ze && (r = Math.ceil(.5 * s) + 1, s > 0 && (n = 2 === r ? F : F + q * (r - 2)));
                const i = O[s];
                return i?.current && (i.current.scrollTop = 0), {
                  ...e,
                  mobileMode: ze,
                  itemNumber: s,
                  columnNumber: r,
                  inModalMode: !1,
                  upNext: !0,
                  active: !1,
                  openModalMode: ra,
                  element: i,
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
              if (i({
                  event: "modal_close",
                  event_category: "modal",
                  event_action: "close",
                  event_label: a,
                  element_placement: a,
                  card_name: e,
                  card_id: Ee,
                  position: Ee,
                  view_name: `${E[Ee].source_content_id}/${e}`,
                  source_content_id: E[Ee].source_content_id,
                  source_content_name: E[Ee].source_content_name
                }), ze) {
                let e = Ee * q * -1;
                e < Le && (e = Le, B(!0), I(!1), je(ne)), je(Ee), Qt(Ee, ne, !1), M(sa(f, "cardClose", `translate3d(${e}px, 0, 0)`))
              } else {
                M(sa(f, "cardClose"));
                const e = Math.ceil((E[Ee].columnNumber + 1) / K) - 1;
                je(e);
                let t = e * X * -1;
                Ge < fe ? (t = 0, I(!0), B(!0), je(0)) : t < Le ? (t = Le, I(!1), B(!0), je(ne)) : Qt(e, ne, !1), Ce(t), Me(0)
              }
              C.current.style.transform = "translate(0px, 0px)", C.current.style.transition = "all var(--eventDeck-transitionCardClose)", ot(!1), Ze(!1), ce(!1), Ke(!1), qe(!1), et(!1), setTimeout((() => {
                Xe(!0)
              }), tt)
            };
            (0, n.useEffect)((() => {
              !1 !== Qe && (Xe(!1), ot(!1), S.style.zIndex = null, M(E.map((e => (e.transitionStyle = "", e)))))
            }), [Qe]);
            const ra = e => {
              setTimeout((() => {
                jt(e), _t(!0)
              }), 1)
            };
            (0, n.useEffect)((() => {
              if (!yt) return;
              if (_t(!1), pt) return;
              Me(Number(Nt.target.dataset.itemPosition)), Ke(!0), ft(!0), mt && gt(!1);
              const e = E[Nt.target.dataset.itemPosition].source_content_id,
                t = E[Nt.target.dataset.itemPosition].source_content_name,
                s = E[Nt.target.dataset.itemPosition]?.tina?.payload?.meta?.title;
              i({
                event: "card_click",
                element_placement: a,
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
              if (!Ue || ie) return;
              Ke(!1);
              const e = (() => {
                const e = S?.getBoundingClientRect().top;
                return it(-1 * (e - h)), -1 * (e - 140)
              })();
              ze && M(E.map((e => {
                const t = e.itemNumber > Ee + 3 || e.itemNumber < Ee - 3;
                return e.styles = {
                  ...e.styles,
                  display: t ? "none" : null,
                  transition: t ? "none" : null
                }, e
              }))), S.style.zIndex = "var(--eventDeck-zIndexOverlay)", ot(!0), C.current && (C.current.style.transition = "all var(--eventDeck-transitionCardOpen)", C.current.style.transform = `translate(${-1*he}px, ${e}px)`), Ze(!0), setTimeout((() => {
                qe(!0)
              }), 1)
            }), [Ue]);
            const ia = () => {
              M(E.map(((e, t) => {
                e.active = t === Ee, e.inModalMode = !0, e.transitionStyle = "cardOpen", ze && (e.upNext = Wt(e.itemNumber));
                const a = !ze;
                let s = 0;
                if (ze) {
                  const e = Pe + 5 * h;
                  s = window.innerHeight - e
                }
                return e.itemNumber < Ee ? e.styles = {
                  ...e.styles,
                  height: ze ? `${s}px` : null,
                  transform: `translate3d(${Kt(e,-1,a)}px, ${rt}px, 0) scale(${Ft()})`
                } : e.itemNumber > Ee ? e.styles = {
                  ...e.styles,
                  height: ze ? `${s}px` : null,
                  transform: `translate3d(${Kt(e,1,a)}px, ${rt}px, 0) scale(1)`
                } : e.itemNumber === Ee && (e.styles = ze ? {
                  ...e.styles,
                  height: `${s}px`,
                  transform: `translate3d(${-1*e.styles.left}px, ${rt}px, 0) scale(1)`
                } : {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${qt()}px, ${rt}px, 0) scale(1)`
                }), e
              })))
            };
            (0, n.useEffect)((() => {
              !1 !== We && !0 !== ie && (ce(!0), qe(!1), Qt(Ee, E.length, !0), C.current && (C.current.style.transition = "all var(--eventDeck-transitionCardOpen)", C.current.style.transform = `translate(${-1*he}px, ${rt}px)`), ia(), ze ? (Ce(0), ft(!1), dt(!0)) : et(!0))
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
                    transform: `translate3d(${e}px, ${Ut(t)}px, 0) scale(${Ft()})`
                  }
                } else t.itemNumber === Ee && !ze && e && (t.styles = {
                  left: 0,
                  top: 0,
                  transform: `translate3d(${qt()}px, ${rt}px, 0) scale(1)`
                });
                return t
              })))
            };
            (0, n.useEffect)((() => {
              !1 !== Je && !0 !== ze && (et(!1), setTimeout((() => {
                ca(), ft(!1)
              }), 1))
            }), [Je]), (0, n.useEffect)((() => {
              M(sa(f, ""))
            }), [F, q, f]), (0, n.useEffect)((() => {
              const e = window.navigator?.userAgentData?.platform || window.navigator?.platform;
              Vt(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(e))
            }), []), (0, n.useEffect)((() => {
              const e = oe !== ie;
              ie ? (e && t(!0), Gt && At(!0)) : Pt || ie || (e && t(!1), Gt && zt && At(!1))
            }), [ie, Pt]), (0, n.useEffect)((() => {
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
              N(!0), Ce(0), je(0);
              let e = Math.ceil(Math.ceil(Ge / q) / K);
              ze && (e = E.length - 1), e < 0 && (e = 1), Qt(0, e, !1), ie && na()
            }), [ze]), (0, n.useEffect)((() => {
              C.current && !ie && (C.current.style.transform = "")
            }), [C, ze, ie]), (0, n.useEffect)((() => {
              const e = (u ?? []).map((e => {
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
            }), [u]), (0, n.useEffect)((() => {
              G(f.map((() => (0, n.createRef)())))
            }), [f]), (0, n.useEffect)((() => {
              const e = e => {
                const {
                  key: t
                } = e;
                "ArrowLeft" === t ? Yt(null, !1) : "ArrowRight" === t && Xt(null, !1)
              };
              return document.addEventListener("keydown", e), () => {
                document.removeEventListener("keydown", e)
              }
            }), [pt, ut, ie]), (0, n.useEffect)((() => {
              if (C.current) {
                let e = 0;
                e = C?.current?.clientHeight, e += _e(C?.current, "margin-top"), e += _e(C?.current, "margin-bottom"), Ie(e)
              }
            }), [C, T]), (0, n.useEffect)((() => {
              ie && (() => {
                const e = S?.getBoundingClientRect().top,
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
                  }))), C.current) {
                  const t = -1 * (e - h);
                  C.current.style.transform = `translate(${-1*he}px, ${t}px)`
                }
              })()
            }), [ze, ie, rt]), (0, n.useEffect)((() => {
              Ge < ge * le && 0 === xe ? (Ce(0), B(!0), I(!0)) : Se < Le ? (B(!0), I(!1), je(ne), Ce(Le)) : Se < 0 && (B(!1), je(ne - 1)), Ge > ge * le && L && B(!1)
            }), [Le]), (0, n.useEffect)((() => {
              if (j.current) {
                w(j.current);
                const e = _e(document.documentElement, "--root-font-size"),
                  t = _e(j.current, "--eventDeck-modalGutters") * e,
                  a = _e(j.current, "--eventDeck-collapsedMaxWidth");
                ve(a);
                let s = le - 2 * t;
                s > a && (s = a), pe(s), ue(s / le);
                const n = 2 * t + s;
                let r = 0;
                n < le && (r = .5 * (le - n)), ke(r);
                let i = _e(j.current, "--eventDeck-modalBottomGutter");
                i *= e;
                const c = window.innerHeight - (Pe + i);
                J(.5 * s < c ? s / 4 : .5 * c);
                const o = _e(j.current, "--eventDeck-mobileBreakpoint");
                Fe(o);
                let l = _e(j.current, "--eventDeck-itemSize");
                l *= e, z(l);
                let d = _e(j.current, "--eventDeck-modalGutterGap");
                d *= e, Oe(d);
                let m = _e(j.current, "--eventDeck-insideMargin");
                m *= e;
                const g = !1 === ze ? 2 * l + m : l + m;
                R(g), W(g + m);
                const u = l + m;
                U(u);
                let p = Math.ceil(.5 * (f.length - 1)) * u + g;
                ze && (p = f.length * u), Ve(p), 0 !== Ge && Be(-1 * Ge + s);
                let h = Math.ceil(Math.ceil(p / u) / K);
                (ze || ie) && (h = E.length - 1), re(h);
                const x = _e(j.current, "--eventDeck-itemScaleUpAmount");
                nt(x), at(_e(j.current, "--eventDeck-cardCloseTransitionDuration")), k(_e(j.current, "--eventDeck-itemImageTitleMargins") * e), null !== b && e !== b && (v(e), ie && ca()), null === b && v(e)
              }
            }), [j, f]), (0, n.useEffect)((() => {
              if (ie && !ze) {
                ca();
                const e = S?.getBoundingClientRect().top,
                  t = -1 * (e - h);
                t !== rt && it(t)
              }
            }), [x]), (0, n.useEffect)((() => {
              H(!(!P || !L || ie))
            }), [P, L]), (0, n.useEffect)((() => {
              const e = ye()((e => {
                de(e), Ae(e < Re);
                const t = (1 - ge) / 2;
                De(e * t);
                const a = Math.floor(fe / q);
                Q(a);
                let s = a * q;
                s > be && (s = be), Y(s), se(e - e * t);
                const n = window.devicePixelRatio || window.screen.availWidth / document.documentElement.clientWidth;
                if (n !== x && y(n), ie && n === x && !_) {
                  const e = S?.getBoundingClientRect().top,
                    t = -1 * (e - h);
                  t !== rt && it(t)
                }
              }), 300);
              return window.addEventListener("resize", (() => {
                e(window.innerWidth)
              })), window.addEventListener("scroll", (() => {
                ie && ze && e(window.innerWidth)
              })), e(window.innerWidth), () => {
                window.removeEventListener("resize", (() => {
                  e(window.innerWidth)
                }))
              }
            }), [q, ge, ie, ze]), (0, n.useEffect)((() => {
              !1 !== ie && !0 !== _ && (ze ? ia() : ca(!0))
            }), [ae, X, He, V, le, $e, Z, rt]), (0, n.useEffect)((() => {
              const e = () => {
                if (j.current && mt) {
                  const e = j.current.getBoundingClientRect(),
                    t = .2 * window.innerHeight;
                  window.innerHeight - e.top >= t && gt(!1)
                }
              };
              return e(), window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
            }), [j]);
            const oa = (0, n.useCallback)((() => {
              if (null !== j.current && !o) {
                const {
                  top: t
                } = j?.current?.getBoundingClientRect() || 0;
                t <= .6 * window.innerHeight && (i({
                  event: "page_section_impression",
                  event_action: "impression",
                  event_category: "page_section",
                  event_label: a,
                  element_placement: `events deck - ${e?._memoq?.title}`
                }), d(!0))
              }
            }), [j]);
            (0, n.useEffect)((() => (window.addEventListener("scroll", oa), () => {
              window.removeEventListener("scroll", oa)
            })), [oa, j]), (0, n.useEffect)((() => {
              "next" === St ? (Xt(null, !0), wt("")) : "prev" === St && (Yt(null, !0), wt(""))
            }), [St]), (0, n.useEffect)((() => {
              j.current && j.current.addEventListener("mouseleave", (() => {
                Pt && ta()
              }))
            }), [j, Pt]), (0, n.useEffect)((() => (document.body.addEventListener("mouseleave", aa), () => {
              document.body.removeEventListener("mouseleave", aa)
            })), [Pt]), (0, n.useEffect)((() => {
              Et && setTimeout((() => {
                Mt(!1), Tt(0)
              }), kt)
            }), [Et]), (0, n.useEffect)((() => {
              Ot(ze ? 20 : 100)
            }), [ze]), (0, n.useEffect)((() => {
              xt(ie ? 500 : 100)
            }), [ie]);
            const la = (0, r.useTinaComponents)(),
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
                refDeck: j,
                key: e?.id ?? e?.sync_hash,
                components: da,
                prevPage: Yt,
                nextPage: Xt,
                loadCssRawValue: _e,
                selectedItemNumber: Ee,
                carouselTitle: a,
                sharedDraggingDelta: $t,
                setSharedDraggingDelta: Dt
              })))), [E, j, da, Yt, Xt, Ee]);
            return !ma?.length || ma.length <= 0 ? null : (0, g.jsxs)(g.Fragment, {
              children: [(0, g.jsx)("div", {
                className: "rockstargames-sites-gta-gen9d06937f0f31eadd8f2c6a7d4000c4028",
                "data-modal-mode": Ye,
                "aria-hidden": "true"
              }), (0, g.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9bf13eb49657ff34f800ad89de65ad3b9",
                "data-modal-mode": ie,
                "data-faded": mt,
                ref: j,
                onTouchStart: Zt,
                onTouchMove: Jt,
                onTouchEnd: ea,
                onMouseDown: Zt,
                onMouseMove: Jt,
                onMouseUp: ea,
                tabIndex: -1,
                role: "presentation",
                children: [(0, g.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9dffe1905dcf86ef006304394794fcca7",
                  "aria-hidden": "true"
                }), (0, g.jsxs)("div", {
                  className: "rockstargames-sites-gta-gen9bc0660e650ef4aabf28e90cce99a05be",
                  "data-modal-mode": ie,
                  ref: C,
                  "data-animating": ct,
                  children: [(0, g.jsx)("h2", {
                    className: "rockstargames-sites-gta-gen9fdd9accd06b828c3c1007add9d32723d",
                    children: a
                  }), (0, g.jsx)(Te, {
                    prevPage: Yt,
                    prevBtnDisabled: P,
                    nextPage: Xt,
                    nextBtnDisabled: L,
                    selectedItemNumber: Ee,
                    itemsData: f,
                    closeModalMode: na,
                    inModalMode: ie,
                    controlsHidden: $
                  })]
                }), (0, g.jsx)("div", {
                  className: "rockstargames-sites-gta-gen9c54f31f5237995d05edfb79cc4e08a33",
                  "data-modal-mode": ie,
                  "data-is-dragging": Pt,
                  style: {
                    transform: `translate3d(${Se+Lt}px, 0, 0)`,
                    width: `${Ge}px`
                  },
                  ref: T,
                  children: ma
                })]
              })]
            })
          },
          PageTemplate: Ie(),
          ExpandingPlatformButton: s.ExpandingPlatformButton,
          TextCard: ge,
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
          gen9: qe,
          TinaModuleFetchNRender: s.TinaModuleFetchNRender,
          PromoModule: s.PromoModule,
          RockstarVideoPlayer: Me(),
          Engagement: Be()
        },
        Ke = {
          CalloutSection: s.CalloutSection,
          Card: Z,
          CardWithImageGallery: me,
          ConditionalBlock: s.ConditionalBlock,
          CoverCard: ie,
          Carousel: s.Carousel,
          ExpandingPlatformButton: s.ExpandingPlatformButton,
          Hero: s.Hero,
          Grid: s.Grid,
          TextCard: ge,
          Deck: he,
          GroupOfItems: c(),
          ParallaxInnerLayer: s.ParallaxInnerLayer,
          ParallaxOuterLayer: s.ParallaxOuterLayer,
          ParallaxWrapper: s.ParallaxWrapper,
          PromoModule: s.PromoModule,
          Engagement: Be(),
          gen9: {
            BuyNow: $e.c,
            Disclaimer: He.c,
            FAQ: Oe.cp,
            Guide: Ge.c,
            GuideGroup: Ve.c,
            GuideIntro: ze.c,
            GuideSection: Ae.c,
            Hero: s.Hero,
            ImageTextGroupGroup: Re.c,
            LinkoutSection: Fe.c,
            TinaWrapper: We.c,
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
        r = a.n(n),
        i = a(35212),
        c = a(73344),
        o = a(41272),
        l = a(45792),
        d = a(50198),
        m = a(42836),
        g = a(2884);
      const u = (0, o.defineMessages)({
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
      r().registerPlugin(c.W), r().registerPlugin(i.useGSAP);
      const b = (0, l.withLocale)((e => {
        let {
          backgroundColor: t,
          cardsOrientation: n = "left"
        } = e;
        const [r, i] = (0, s.useState)(""), [c, b] = (0, s.useState)(void 0), {
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
        }, N = a(41228), j = () => {}, S = (0, g.c)().data, w = !!S?.length, C = (0, s.useMemo)((() => w ? ((e, t, a) => {
          const s = [];
          let n = 0;
          for (let t = 0; t < e.length && n < 12; t++) {
            const a = t % 3;
            Array.isArray(s[a]) || (s[a] = []), s[a].push(e[t]), n++
          }
          return s
        })(S.reduce(((e, t) => e.concat(t.subNavItems.filter((e => e.discoverSafe)))), []).sort(((e, t) => {
          const a = new Date(e.createdAt),
            s = new Date(t.createdAt);
          return e.createdAt && t.createdAt ? s.getTime() - a.getTime() : e.createdAt ? -1 : t.createdAt ? 1 : 0
        }))) : []), [w, S]), T = (0, s.useMemo)((() => (0, p.jsx)("img", {
          alt: y.formatMessage(u.discover_callout_mugshot, {
            userName: h?.nickname
          }),
          className: "rockstargames-sites-gta-gen9ffb5453a30a8c5d68070ae563656efc0",
          src: r || N,
          onError: j
        })), [r, N, y, h]), E = {
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
            i(e?.gtao[v]?.mugshotUrl || "")
          }
        }), [v, h]), (0, p.jsx)("div", {
          className: "rockstargames-sites-gta-gen9ddfe915c931cd932df5cdbdc77fa3a47",
          children: (0, p.jsxs)("div", {
            className: "rockstargames-sites-gta-gen9a7a317939644ffb10f67ad27c198ba83",
            style: _,
            children: [(0, p.jsx)("div", {
              className: "rockstargames-sites-gta-gen9a0ce8d90be7ee4a73259dbcc4708dd97",
              "aria-label": y.formatMessage(u.discover_callout_cards_aria),
              children: w ? (0, p.jsx)("div", {
                className: "rockstargames-sites-gta-gen9a647165450b083aab8e1dd57c2f45c96",
                children: w && C.map(((e, t) => (0, p.jsxs)("div", {
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
              children: [T, (0, p.jsxs)("div", {
                className: "rockstargames-sites-gta-gen9b51c01f415ca1ebb13dd7e56d10c2f32",
                children: [(0, p.jsx)("h3", {
                  className: "rockstargames-sites-gta-gen9e772c5f94ffe76be1ea92887c88c4bb3",
                  children: y.formatMessage(u.discover_callout_heading)
                }), (0, p.jsx)("p", {
                  children: y.formatMessage(u.discover_callout_description)
                })]
              }), (0, p.jsx)(d.Gen9Button, {
                to: "/gta-online/career-progress",
                text: y.formatMessage(u.discover_callout_cta_label),
                onClick: E && (() => k({
                  ...E
                }))
              })]
            })]
          })
        })
      }))
    },
    80684: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        vinewoodClub: () => s
      });
      var s = a(39876)
    },
    90124: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        Pause: () => n.default,
        Play: () => s.default
      });
      var s = a(30404),
        n = a(51424)
    },
    51424: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => n
      });
      var s = a(95240);
      const n = e => {
        let {
          alt: t = "",
          className: a = "",
          clipRule: n = "evenodd",
          fill: r = "white",
          fillRule: i = "evenodd",
          height: c = "20",
          viewBox: o = "0 0 20 20",
          width: l = "20"
        } = e;
        return (0, s.jsxs)("svg", {
          className: a,
          height: c,
          width: l,
          viewBox: o,
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, s.jsx)("title", {
            children: t
          }), (0, s.jsx)("path", {
            fillRule: i,
            clipRule: n,
            d: "M4.16797 3.33333C4.16797 2.8731 4.54106 2.5 5.0013 2.5H8.33464C8.79487 2.5 9.16797 2.8731 9.16797 3.33333V16.6667C9.16797 17.1269 8.79487 17.5 8.33464 17.5H5.0013C4.54106 17.5 4.16797 17.1269 4.16797 16.6667V3.33333Z",
            fill: r
          }), (0, s.jsx)("path", {
            fillRule: i,
            clipRule: n,
            d: "M10.8346 3.33333C10.8346 2.8731 11.2077 2.5 11.668 2.5H15.0013C15.4615 2.5 15.8346 2.8731 15.8346 3.33333V16.6667C15.8346 17.1269 15.4615 17.5 15.0013 17.5H11.668C11.2077 17.5 10.8346 17.1269 10.8346 16.6667V3.33333Z",
            fill: r
          })]
        })
      }
    },
    59448: () => {},
    30404: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => n
      });
      var s = a(95240);
      const n = e => {
        let {
          alt: t = "",
          className: a = "",
          clipRule: n = "evenodd",
          fill: r = "white",
          fillRule: i = "evenodd",
          height: c = "20",
          viewBox: o = "0 0 20 20",
          width: l = "20"
        } = e;
        return (0, s.jsxs)("svg", {
          className: a,
          height: c,
          width: l,
          viewBox: o,
          xmlns: "http://www.w3.org/2000/svg",
          children: [(0, s.jsx)("title", {
            children: t
          }), (0, s.jsx)("path", {
            fillRule: i,
            clipRule: n,
            d: "M3.76604 1.76853C4.0336 1.62246 4.35957 1.63413 4.616 1.79898L16.2827 9.29898C16.5212 9.45231 16.6654 9.71641 16.6654 9.99996C16.6654 10.2835 16.5212 10.5476 16.2827 10.7009L4.616 18.2009C4.35957 18.3658 4.0336 18.3775 3.76604 18.2314C3.49848 18.0853 3.33203 17.8048 3.33203 17.5V2.49996C3.33203 2.19512 3.49848 1.91461 3.76604 1.76853Z",
            fill: r
          })]
        })
      }
    },
    12856: () => {},
    82316: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => u
      });
      var s = a(51664),
        n = a(1740),
        r = a(42836),
        i = a(41272),
        c = a(45792),
        o = a(75096),
        l = a(64752),
        d = a(90124),
        m = a(19432),
        g = a(95240);
      const u = (0, c.withLocale)((e => {
        let {
          variant: t,
          videoSrc: c,
          fallbackImg: u,
          fallbackImgAlt: f,
          contentImgSrc: p,
          contentImgAlt: b,
          heading: v,
          subheading: h,
          ctaText: k,
          ctaLink: x,
          overlayColor: y
        } = e;
        const {
          track: _
        } = (0, r.useGtmTrack)(), N = (0, s.useRef)(null), [j, S] = (0, s.useState)(!1), w = (0, l.isReducedMotionPreferred)(), C = (0, n.useGetCdnSource)(p?.full_src ?? ""), T = (0, n.useGetCdnSource)(u), E = (0, o.getVideoUrl)(c), {
          formatMessage: M
        } = (0, i.useIntl)(), P = "image" === t || w;
        let I;
        (0, s.useEffect)((() => {
          const e = () => S(!0),
            t = () => S(!1),
            a = N.current;
          return a && (a.addEventListener("play", e), a.addEventListener("pause", t)), () => {
            a && (a.removeEventListener("play", e), a.removeEventListener("pause", t))
          }
        }), []);
        try {
          I = a(2980)(`.${E}`)
        } catch (e) {
          console.error("Error loading video: ", e)
        }
        return (0, g.jsxs)("div", {
          className: m.default.heroContainer,
          children: [(0, g.jsx)("div", {
            className: m.default.heroVideoWrapper,
            children: "image" === t || w ? (0, g.jsx)("img", {
              className: m.default.heroBackgroundImg,
              src: T,
              alt: f
            }) : (0, g.jsxs)(g.Fragment, {
              children: [(0, g.jsxs)("video", {
                ref: N,
                "data-testid": "hero-video",
                className: m.default.heroVideo,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                children: [(0, g.jsx)("source", {
                  src: I,
                  type: "video/mp4"
                }), M(l.messages.video_hero_support_message)]
              }), (0, g.jsx)("button", {
                role: "button",
                className: m.default.heroVideoPlayPauseBtn,
                onClick: () => {
                  if (!P && N.current) {
                    let e = "";
                    j ? (N.current.pause(), e = "toggle pause") : (N.current.play(), e = "toggle play"), _({
                      event: "cta_other",
                      text: e,
                      element_placement: "hero"
                    }), S(!j)
                  }
                },
                "aria-hidden": !0,
                children: j ? (0, g.jsx)(d.Pause, {
                  height: "24",
                  width: "24"
                }) : (0, g.jsx)(d.Play, {
                  height: "24",
                  width: "24"
                })
              })]
            })
          }), (0, g.jsx)("div", {
            className: m.default.heroOverlay,
            style: {
              "--overlay-bg": y ?? "var(--gradient-black-200-bottom, linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%))"
            }
          }), (p || v || h || k) && (0, g.jsx)("div", {
            className: m.default.heroContentWrapper,
            children: (0, g.jsxs)("div", {
              className: m.default.heroContent,
              children: [p && (0, g.jsx)("img", {
                className: m.default.heroContentImg,
                src: C ?? p,
                alt: b
              }), v && (0, g.jsx)("h1", {
                children: v
              }), h && (0, g.jsx)("h2", {
                children: h
              }), x && (0, g.jsx)("a", {
                href: x,
                className: m.default.heroCTA,
                children: k
              })]
            })
          })]
        })
      }))
    },
    75096: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        getVideoUrl: () => s
      });
      const s = e => e ? `/assets/videos/${e}.mp4` : "/assets/videos/default.mp4"
    },
    96304: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => c
      });
      var s = a(89468),
        n = a(45652);
      const r = e => {
          let {
            label: t
          } = e;
          return [{
            value: "",
            label: t
          }, {
            value: "image",
            label: "Image"
          }, {
            value: "video",
            label: "Video"
          }]
        },
        i = e => {
          let {
            label: t
          } = e;
          return [{
            value: "",
            label: t
          }, {
            value: "vinewood-club",
            label: "Vinewood Club"
          }]
        },
        c = () => ({
          label: "Hero Video",
          name: "content",
          component: "group",
          fields: [(0, s.NameField)(), {
            label: "Variant",
            name: "variant",
            description: "Set the variant for the Hero",
            component: "select",
            options: r({
              label: "-- Select Variant --"
            })
          }, {
            label: "Video",
            name: "videoSrc",
            description: "Select video for the Hero",
            component: "select",
            options: i({
              label: "-- Select A Video --"
            })
          }, {
            name: "fallbackImg",
            label: "Fallback Image",
            component: "image",
            clearable: !0,
            previewSrc: n.previewSrc,
            parse: n.parse,
            uploadDir: n.uploadDir
          }, (0, s.translatedField)({
            label: "Fallback Image Alt Tag",
            name: "fallbackImgAlt",
            component: "text"
          }), {
            name: "contentImgSrc",
            label: "Content Image",
            component: "image",
            clearable: !0,
            previewSrc: n.previewSrc,
            parse: n.parse,
            uploadDir: n.uploadDir
          }, (0, s.translatedField)({
            label: "Content Image Alt Tag",
            name: "contentImgAlt",
            component: "text"
          }), (0, s.translatedField)({
            label: "Heading",
            name: "heading",
            component: "text"
          }), (0, s.translatedField)({
            label: "SubHeading",
            name: "subheading",
            component: "text"
          }), (0, s.translatedField)({
            label: "CTA text",
            name: "ctaText",
            description: 'Treated as button text (eg. "View More")',
            component: "text"
          }), {
            label: "CTA link",
            name: "ctaLink",
            component: "text"
          }, (0, s.ClassNamesField)({
            filter: "heroVideo"
          }), (0, s.StyleField)({
            filter: "heroVideo"
          })],
          defaultItem: () => (0, s.defaultItemUnique)(),
          itemProps: e => (0, s.itemPropsWithKey)(e, {
            label: `[Hero Video]: ${e?.[s.TINA_MEMOQ_PREFIX]?.name??e?.name??"New"}`
          })
        })
    },
    77044: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        getVideoUrl: () => s
      });
      const s = e => e ? `/assets/videos/${e}.mp4` : "/assets/videos/default.mp4"
    },
    64752: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        getVideoUrl: () => n.getVideoUrl,
        isReducedMotionPreferred: () => s.isReducedMotionPreferred,
        messages: () => r.default
      });
      var s = a(63040),
        n = a(77044),
        r = a(15216)
    },
    63040: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        isReducedMotionPreferred: () => s
      });
      const s = () => !("undefined" == typeof window || !window.matchMedia) && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    },
    15216: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => s
      });
      const s = (0, a(41272).defineMessages)({
        video_hero_support_message: {
          id: "video_hero_support_message",
          defaultMessage: "Your browser does not support video reproduction."
        }
      })
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
        var r = s[t] || new Set,
          i = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return i.forEach((function(t) {
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
        var r = s[t] || new Set,
          i = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return i.forEach((function(t) {
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
        var r = s[t] || new Set,
          i = new Set,
          c = new Set;
        for (r.forEach((function(e) {
            c.add(e)
          })); c.size > 0;) {
          var o = c;
          c = new Set, o.forEach((function(e) {
            i.has(e) || (i.add(e), (s[e] || new Set).forEach((function(e) {
              c.add(e)
            })))
          }))
        }
        return i.forEach((function(t) {
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
    19432: (e, t, a) => {
      "use strict";
      a.r(t), a.d(t, {
        default: () => s
      });
      const s = {
        pillBtn: "rockstargames-sites-gta-gen9de7a2eb3ffd0735429d0f454104c1d8e",
        selected: "rockstargames-sites-gta-gen9b029a7087d991b7b96b48b92eafba24a",
        heroContainer: "rockstargames-sites-gta-gen9f08ef296aef379a79a4e2bb138524daa",
        heroVideoWrapper: "rockstargames-sites-gta-gen9ed41c589d35e1b3063638f03ad26d7a5",
        heroBackgroundImg: "rockstargames-sites-gta-gen9e2da10cbd6ecc3d70a66a4fdc66ba4ab",
        heroVideo: "rockstargames-sites-gta-gen9b4d29581ea7886823af5e896787e771b",
        heroOverlay: "rockstargames-sites-gta-gen9ea49986693004d30eb77ca5805cc4262",
        heroContentWrapper: "rockstargames-sites-gta-gen9d92b3eaa0cff030570180edb394a5b55",
        heroContent: "rockstargames-sites-gta-gen9ce17f454fd61e52df7f4c787cd0db40f",
        heroContentImg: "rockstargames-sites-gta-gen9a22d56d0d9c251204997f048ada5965f",
        heroCTA: "rockstargames-sites-gta-gen9fe018545f08a7f84e6705e540edcdf00",
        heroVideoPlayPauseBtn: "rockstargames-sites-gta-gen9c46ccb698894f55a6a8516a944f2ae24"
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
        var t = r(e);
        return a(t)
      }

      function r(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 2936
    },
    2980: (e, t, a) => {
      var s = {
        "./assets": 80684,
        "./assets/": 80684,
        "./assets/index": 80684,
        "./assets/index.ts": 80684,
        "./assets/videos/default.mp4": 98212,
        "./assets/videos/vinewood-club.mp4": 39876,
        "./components": 90124,
        "./components/": 90124,
        "./components/index": 90124,
        "./components/index.ts": 90124,
        "./components/pause": 51424,
        "./components/pause/": 51424,
        "./components/pause/index": 51424,
        "./components/pause/index.tsx": 51424,
        "./components/pause/types": 59448,
        "./components/pause/types.ts": 59448,
        "./components/play": 30404,
        "./components/play/": 30404,
        "./components/play/index": 30404,
        "./components/play/index.tsx": 30404,
        "./components/play/types": 12856,
        "./components/play/types.ts": 12856,
        "./hero-video": 82316,
        "./hero-video.less": 19432,
        "./hero-video.tsx": 82316,
        "./hero-video.utils": 75096,
        "./hero-video.utils.ts": 75096,
        "./tina": 96304,
        "./tina.ts": 96304,
        "./utils": 64752,
        "./utils/": 64752,
        "./utils/get-video-url": 77044,
        "./utils/get-video-url.ts": 77044,
        "./utils/index": 64752,
        "./utils/index.ts": 64752,
        "./utils/is-reduced-motion-preferred": 63040,
        "./utils/is-reduced-motion-preferred.ts": 63040,
        "./utils/video-hero.local-messages": 15216,
        "./utils/video-hero.local-messages.ts": 15216
      };

      function n(e) {
        var t = r(e);
        return a(t)
      }

      function r(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return s[e]
      }
      n.keys = function() {
        return Object.keys(s)
      }, n.resolve = r, e.exports = n, n.id = 2980
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
    98212: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/video/7cfb24053cf0c7ee3c6454923c53ac28.mp4"
    },
    39876: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/video/f7da4ca1b248290693c7cdfc89b8c369.mp4"
    },
    2140: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1e50aff7a4148673983e493ca815454e.svg"
    }
  }
]);